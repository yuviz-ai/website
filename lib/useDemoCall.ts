'use client'

// Browser call to the public demo agent: mic capture, energy VAD with barge-in, PCM playback.
// Ported from admin-ui/lib/useWebCall.ts; the session is authorised by a demo pass instead of a login.

import { useCallback, useEffect, useRef, useState } from 'react'

const DEMO_API_URL = process.env.NEXT_PUBLIC_DEMO_API_URL || 'http://localhost:8001'
const DEMO_WEBCALL_URL = process.env.NEXT_PUBLIC_DEMO_WEBCALL_URL || 'ws://127.0.0.1:8301'
const SAMPLE_RATE = 16000

const ONSET_FRAMES_REQUIRED = 4
const SILENCE_MS_TO_END = 700
const NOISE_FLOOR_ADAPT_RATE = 0.02
const ONSET_MARGIN_DB = 9
// Stricter while the agent speaks so its own audio leaking from speakers isn't read as barge-in.
const ONSET_MARGIN_DB_WHILE_AGENT_SPEAKING = 22
const ONSET_FRAMES_REQUIRED_WHILE_AGENT_SPEAKING = 10
const CALIBRATION_MS = 600
const MAX_UTTERANCE_MS = 15_000
const MAX_END_CALL_WAIT_MS = 10_000

export type DemoCallState = 'idle' | 'connecting' | 'ready' | 'talking' | 'thinking' | 'speaking' | 'ended' | 'error'
export interface Turn { role: 'user' | 'assistant'; text: string; ts: number }

const PASS_ERRORS: Record<number, string> = {
  403: 'The demo only works from the Yuviz website.',
  404: 'The live demo is switched off right now. Book a demo to talk to the team.',
  429: "You've used your demo calls for now. Book a demo to talk to the team.",
}

async function getDemoPass(): Promise<{ credential: string; tenant: string; agent: string }> {
  let res: Response
  try {
    res = await fetch(`${DEMO_API_URL}/public/demo-call`, { method: 'POST' })
  } catch {
    throw new Error("We couldn't reach the demo. Check your connection and try again.")
  }
  if (!res.ok) throw new Error(PASS_ERRORS[res.status] || 'The demo is unavailable right now. Please try again shortly.')
  return res.json()
}

export function useDemoCall() {
  const [state, setState] = useState<DemoCallState>('idle')
  const [transcript, setTranscript] = useState<Turn[]>([])
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [micLevelPct, setMicLevelPct] = useState(0)
  const [muted, setMutedState] = useState(false)
  const mutedRef = useRef(false)

  const sessionGenRef = useRef(0)
  const wsRef = useRef<WebSocket | null>(null)
  const audioCtxRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const workletRef = useRef<AudioWorkletNode | null>(null)
  const talkStartRef = useRef(0)
  const playheadRef = useRef(0)
  const activeSourcesRef = useRef<AudioBufferSourceNode[]>([])
  const recordingRef = useRef(false)
  const agentSpeakingRef = useRef(false)
  const anyAudioSentRef = useRef(false)
  const noiseFloorDbRef = useRef(-50)
  const onsetStreakRef = useRef(0)
  const silenceMsAccumRef = useRef(0)
  const calibratingUntilRef = useRef(0)
  const calibrationSamplesRef = useRef<number[]>([])
  const recordingStartedAtRef = useRef(0)

  const stopAgentPlayback = () => {
    for (const src of activeSourcesRef.current) {
      try { src.onended = null; src.stop() } catch { /* already finished */ }
    }
    activeSourcesRef.current = []
    if (audioCtxRef.current) playheadRef.current = audioCtxRef.current.currentTime
    agentSpeakingRef.current = false
  }

  const teardown = () => {
    recordingRef.current = false
    agentSpeakingRef.current = false
    stopAgentPlayback()
    if (wsRef.current) { wsRef.current.onclose = null; wsRef.current.close() }
    wsRef.current = null
    workletRef.current?.disconnect()
    workletRef.current = null
    streamRef.current?.getTracks().forEach(t => t.stop())
    streamRef.current = null
    audioCtxRef.current?.close().catch(() => {})
    audioCtxRef.current = null
  }

  useEffect(() => () => teardown(), [])

  const playPcmChunk = (buf: ArrayBuffer) => {
    const ctx = audioCtxRef.current
    if (!ctx) return
    const int16 = new Int16Array(buf)
    if (int16.length === 0) return
    const float32 = new Float32Array(int16.length)
    for (let i = 0; i < int16.length; i++) float32[i] = int16[i] / (int16[i] < 0 ? 0x8000 : 0x7fff)
    const audioBuffer = ctx.createBuffer(1, float32.length, SAMPLE_RATE)
    audioBuffer.copyToChannel(float32, 0)
    const source = ctx.createBufferSource()
    source.buffer = audioBuffer
    source.connect(ctx.destination)
    const startAt = Math.max(ctx.currentTime, playheadRef.current)
    source.start(startAt)
    playheadRef.current = startAt + audioBuffer.duration
    agentSpeakingRef.current = true
    activeSourcesRef.current.push(source)
    source.onended = () => {
      activeSourcesRef.current = activeSourcesRef.current.filter(s => s !== source)
      if (activeSourcesRef.current.length === 0 && playheadRef.current <= ctx.currentTime + 0.05) agentSpeakingRef.current = false
    }
  }

  const beginUtterance = () => {
    recordingRef.current = true
    onsetStreakRef.current = 0
    silenceMsAccumRef.current = 0
    anyAudioSentRef.current = false
    talkStartRef.current = performance.now()
    recordingStartedAtRef.current = talkStartRef.current
    setErrorMsg(null)
    if (agentSpeakingRef.current) {
      stopAgentPlayback()
      wsRef.current?.send(JSON.stringify({ type: 'cancel' }))
      wsRef.current?.send(JSON.stringify({ type: 'playback_finished', interrupted: true }))
    }
    setState('talking')
  }

  const endUtterance = () => {
    recordingRef.current = false
    if (anyAudioSentRef.current) {
      const durationMs = performance.now() - talkStartRef.current
      wsRef.current?.send(JSON.stringify({ type: 'speech_ended', duration_ms: Math.round(durationMs), energy_db: -20 }))
      setState('thinking')
    } else {
      setState('ready')
    }
  }

  const start = useCallback(async () => {
    teardown()
    sessionGenRef.current += 1
    mutedRef.current = false
    setMutedState(false)
    setTranscript([])
    setState('connecting')
    setErrorMsg(null)
    let stream: MediaStream
    try {
      stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true } })
    } catch {
      setState('error')
      setErrorMsg('Microphone access is needed to talk to Sarah. Allow it in your browser and try again.')
      return
    }
    streamRef.current = stream
    try {
      // The pass is short-lived, so fetch it only after the mic prompt is answered.
      const pass = await getDemoPass()
      const ctx = new AudioContext({ sampleRate: SAMPLE_RATE })
      audioCtxRef.current = ctx
      playheadRef.current = 0
      noiseFloorDbRef.current = -50
      calibrationSamplesRef.current = []
      calibratingUntilRef.current = performance.now() + CALIBRATION_MS
      await ctx.audioWorklet.addModule('/pcm-capture-worklet.js')
      const source = ctx.createMediaStreamSource(stream)
      const worklet = new AudioWorkletNode(ctx, 'pcm-capture-processor')
      workletRef.current = worklet
      source.connect(worklet)

      const ws = new WebSocket(`${DEMO_WEBCALL_URL}/webcall?tenant=${encodeURIComponent(pass.tenant)}&agent=${encodeURIComponent(pass.agent)}`)
      ws.binaryType = 'arraybuffer'
      wsRef.current = ws
      ws.onopen = () => ws.send(JSON.stringify({ type: 'test_credential', credential: pass.credential }))
      ws.onerror = () => { setState('error'); setErrorMsg("The call couldn't connect. Please try again.") }
      ws.onclose = () => setState(s => (s === 'error' ? s : 'ended'))
      ws.onmessage = ev => {
        if (ev.data instanceof ArrayBuffer) {
          playPcmChunk(ev.data)
          setState(s => (s === 'talking' ? s : 'speaking'))
          return
        }
        const msg = JSON.parse(ev.data)
        switch (msg.type) {
          case 'service_ready':
            setState('ready')
            break
          case 'stt_result':
            if (msg.text) setTranscript(prev => [...prev, { role: 'user', text: msg.text, ts: Date.now() }])
            setState(s => (s === 'talking' ? 'thinking' : s))
            break
          case 'tts_started':
            setState(s => (s === 'talking' ? s : 'speaking'))
            break
          case 'tts_result':
            if (msg.text) setTranscript(prev => [...prev, { role: 'assistant', text: msg.text, ts: Date.now() }])
            break
          case 'tts_chunk_final':
            setState(s => (s === 'talking' ? s : 'ready'))
            break
          case 'end_call': {
            const c = audioCtxRef.current
            const remainingMs = c ? Math.max(0, (playheadRef.current - c.currentTime) * 1000) : 0
            const gen = sessionGenRef.current
            setState('ended')
            window.setTimeout(() => { if (sessionGenRef.current === gen) teardown() }, Math.min(remainingMs, MAX_END_CALL_WAIT_MS))
            break
          }
          case 'no_response':
            setState('ready')
            break
          case 'error':
            if (msg.fatal) { setState('error'); setErrorMsg('Sarah is unavailable right now. Please try again shortly.') }
            break
        }
      }

      worklet.port.onmessage = (ev: MessageEvent<ArrayBuffer>) => {
        const pcm16 = new Int16Array(ev.data)
        if (pcm16.length === 0) return
        let sumSquares = 0
        for (let i = 0; i < pcm16.length; i++) { const s = pcm16[i] / 0x8000; sumSquares += s * s }
        const db = 20 * Math.log10(Math.max(Math.sqrt(sumSquares / pcm16.length), 1e-8))
        setMicLevelPct(Math.max(0, Math.min(100, (db + 60) * 1.6)))

        const now = performance.now()
        if (now < calibratingUntilRef.current) { calibrationSamplesRef.current.push(db); return }
        if (calibrationSamplesRef.current.length > 0) {
          noiseFloorDbRef.current = calibrationSamplesRef.current.reduce((a, b) => a + b, 0) / calibrationSamplesRef.current.length
          calibrationSamplesRef.current = []
        }
        const frameMs = (pcm16.length / SAMPLE_RATE) * 1000
        const speaking = agentSpeakingRef.current
        const onsetMargin = speaking ? ONSET_MARGIN_DB_WHILE_AGENT_SPEAKING : ONSET_MARGIN_DB
        const framesNeeded = speaking ? ONSET_FRAMES_REQUIRED_WHILE_AGENT_SPEAKING : ONSET_FRAMES_REQUIRED
        const isSpeechFrame = db > noiseFloorDbRef.current + onsetMargin
        if (mutedRef.current) { onsetStreakRef.current = 0; return }

        if (!recordingRef.current) {
          if (!isSpeechFrame && !speaking) noiseFloorDbRef.current = noiseFloorDbRef.current * (1 - NOISE_FLOOR_ADAPT_RATE) + db * NOISE_FLOOR_ADAPT_RATE
          if (isSpeechFrame) {
            onsetStreakRef.current++
            if (onsetStreakRef.current >= framesNeeded) { onsetStreakRef.current = 0; beginUtterance() }
          } else {
            onsetStreakRef.current = 0
          }
        }
        if (recordingRef.current) {
          if (wsRef.current?.readyState === WebSocket.OPEN) { wsRef.current.send(ev.data); anyAudioSentRef.current = true }
          if (now - recordingStartedAtRef.current >= MAX_UTTERANCE_MS) { silenceMsAccumRef.current = 0; endUtterance() }
          else if (isSpeechFrame) silenceMsAccumRef.current = 0
          else {
            silenceMsAccumRef.current += frameMs
            if (silenceMsAccumRef.current >= SILENCE_MS_TO_END) { silenceMsAccumRef.current = 0; endUtterance() }
          }
        }
      }
    } catch (e) {
      teardown()
      setState('error')
      setErrorMsg(e instanceof Error ? e.message : "The call couldn't start. Please try again.")
    }
  }, [])

  const setMuted = useCallback((m: boolean) => {
    mutedRef.current = m
    setMutedState(m)
    if (m && recordingRef.current) {
      recordingRef.current = false
      silenceMsAccumRef.current = 0
      onsetStreakRef.current = 0
      setState(s => (s === 'talking' ? 'ready' : s))
    }
  }, [])

  const hangUp = useCallback(() => { teardown(); setState('ended') }, [])
  const reset = useCallback(() => { teardown(); setState('idle'); setTranscript([]); setErrorMsg(null); setMicLevelPct(0) }, [])

  return { state, transcript, errorMsg, micLevelPct, muted, setMuted, start, hangUp, reset }
}

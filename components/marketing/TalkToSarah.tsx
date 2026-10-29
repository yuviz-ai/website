'use client'

import { useEffect, useRef, useState } from 'react'
import { Mic, MicOff, PhoneOff } from 'lucide-react'
import { useDemoCall, type DemoCallState } from '@/lib/useDemoCall'

const CALL_SECONDS = 120

const STATUS: Partial<Record<DemoCallState, string>> = {
  connecting: 'Connecting…',
  ready: 'Listening',
  talking: 'Listening',
  thinking: 'Thinking…',
  speaking: 'Sarah is speaking',
}

export function TalkToSarah() {
  const call = useDemoCall()
  const { hangUp } = call
  const [left, setLeft] = useState(CALL_SECONDS)
  const startedAt = useRef<number | null>(null)
  const live = !['idle', 'connecting', 'ended', 'error'].includes(call.state)
  const onCall = live || call.state === 'connecting'
  const last = call.transcript[call.transcript.length - 1]

  useEffect(() => {
    if (!live) return
    if (startedAt.current === null) startedAt.current = Date.now()
    const id = window.setInterval(() => {
      const remaining = Math.max(0, CALL_SECONDS - Math.floor((Date.now() - (startedAt.current ?? Date.now())) / 1000))
      setLeft(remaining)
      if (remaining === 0) hangUp()
    }, 250)
    return () => window.clearInterval(id)
  }, [live, hangUp])

  const begin = () => {
    startedAt.current = null
    setLeft(CALL_SECONDS)
    void call.start()
  }

  const mm = Math.floor(left / 60)
  const ss = String(left % 60).padStart(2, '0')

  if (!onCall) {
    return (
      <div className="talk-wrap">
        <button type="button" onClick={begin} className="story-button story-button-quiet">
          <Mic size={17}/> {call.state === 'ended' ? 'Talk to Sarah again' : 'Talk to Sarah'}
        </button>
        {call.errorMsg && <p className="talk-msg is-error" role="alert">{call.errorMsg}</p>}
      </div>
    )
  }

  return (
    <div className="talk-wrap">
      <div className={`talk-live talk-live-${call.state}`} role="group" aria-label="Call with Sarah">
        <span className="talk-dot" aria-hidden="true" style={{ transform: `scale(${1 + (live && !call.muted ? call.micLevelPct / 140 : 0)})` }}/>
        <span className="talk-label" aria-live="polite">
          {last ? <><b>{last.role === 'user' ? 'You' : 'Sarah'}</b><span className="talk-sep">·</span><span className="talk-text">{last.text}</span></> : (STATUS[call.state] ?? 'On call')}
        </span>
        <span className="talk-time" aria-label={`${mm} minutes ${ss} seconds left`}>{mm}:{ss}</span>
        <button type="button" className="talk-btn" onClick={() => call.setMuted(!call.muted)} aria-pressed={call.muted} disabled={!live} aria-label={call.muted ? 'Unmute' : 'Mute'}>
          {call.muted ? <MicOff size={16}/> : <Mic size={16}/>}
        </button>
        <button type="button" className="talk-btn talk-end" onClick={call.hangUp} aria-label="Hang up"><PhoneOff size={16}/></button>
      </div>
    </div>
  )
}

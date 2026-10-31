'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { useDemoCall } from '@/lib/useDemoCall'
import { DemoChatError, openDemoChat, sendDemoChat, type DemoChatSession } from '@/lib/demoChat'
import type { AssistantConfig, AssistantView, ChatMessage, ChatStatus } from './types'

type Call = ReturnType<typeof useDemoCall>

interface AssistantApi {
  config: AssistantConfig
  open: boolean
  view: AssistantView
  call: Call
  callActive: boolean
  callLive: boolean
  secondsLeft: number
  messages: ChatMessage[]
  typing: boolean
  chatStatus: ChatStatus
  chatError: string | null
  chatErrorKind: DemoChatError['kind'] | null
  turnsLeft: number
  openWith: (view: AssistantView) => void
  setView: (view: AssistantView) => void
  close: () => void
  startCall: () => void
  sendMessage: (text: string) => void
  restartChat: () => void
}

const AssistantContext = createContext<AssistantApi | null>(null)

export function useAssistant() {
  const api = useContext(AssistantContext)
  if (!api) throw new Error('useAssistant must be used inside <AssistantProvider>')
  return api
}

export function AssistantProvider({ config, children }: { config: AssistantConfig; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [view, setViewState] = useState<AssistantView>('connect')
  const call = useDemoCall(config.voice?.endpoints)
  const { hangUp, start } = call
  const callActive = !['idle', 'ended', 'error'].includes(call.state)
  const callLive = callActive && call.state !== 'connecting'
  const maxSeconds = config.voice?.maxSeconds ?? 120
  const [secondsLeft, setSecondsLeft] = useState(maxSeconds)
  const callStartedAt = useRef<number | null>(null)

  useEffect(() => {
    if (!callLive) { callStartedAt.current = null; return }
    if (callStartedAt.current === null) { callStartedAt.current = Date.now(); setSecondsLeft(maxSeconds) }
    const id = window.setInterval(() => {
      const remaining = Math.max(0, maxSeconds - Math.floor((Date.now() - (callStartedAt.current ?? Date.now())) / 1000))
      setSecondsLeft(remaining)
      if (remaining === 0) hangUp()
    }, 250)
    return () => window.clearInterval(id)
  }, [callLive, hangUp, maxSeconds])

  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [typing, setTyping] = useState(false)
  const [chatStatus, setChatStatus] = useState<ChatStatus>('idle')
  const [chatError, setChatError] = useState<string | null>(null)
  const [chatErrorKind, setChatErrorKind] = useState<DemoChatError['kind'] | null>(null)
  const [turnsLeft, setTurnsLeft] = useState(0)
  const session = useRef<DemoChatSession | null>(null)
  const chatGen = useRef(0)
  const chatApi = config.chat?.apiUrl

  const startChat = useCallback(async () => {
    const gen = ++chatGen.current
    session.current = null
    setChatStatus('opening')
    setChatError(null)
    setMessages([])
    setTyping(false)
    try {
      const opened = await openDemoChat(chatApi)
      if (gen !== chatGen.current) return
      session.current = opened
      setTurnsLeft(opened.maxTurns)
      setMessages([{ role: 'assistant', text: opened.greeting }])
      setChatStatus('ready')
    } catch (e) {
      if (gen !== chatGen.current) return
      setChatError(e instanceof Error ? e.message : 'The chat is unavailable right now.')
      setChatErrorKind(e instanceof DemoChatError ? e.kind : 'retry')
      setChatStatus('error')
    }
  }, [chatApi])

  const enter = useCallback((next: AssistantView) => {
    setViewState(next)
    if (next === 'voice' && !callActive) void start()
    if (next === 'chat' && !session.current && chatStatus !== 'opening') void startChat()
  }, [callActive, start, chatStatus, startChat])

  const setView = useCallback((next: AssistantView) => {
    if (next !== 'voice' && callActive) hangUp()
    enter(next)
  }, [callActive, hangUp, enter])

  const openWith = useCallback((next: AssistantView) => { setOpen(true); enter(next) }, [enter])

  const close = useCallback(() => {
    if (callActive) hangUp()
    setOpen(false)
    setViewState('connect')
  }, [callActive, hangUp])

  const startCall = useCallback(() => { if (!callActive) void start() }, [callActive, start])

  const sendMessage = useCallback(async (value: string) => {
    const text = value.trim()
    const current = session.current
    if (!text || !current || chatStatus !== 'ready' || typing) return
    const gen = chatGen.current
    setMessages(prev => [...prev, { role: 'user', text }])
    setTyping(true)
    setChatError(null)
    try {
      const reply = await sendDemoChat(current, text, chatApi)
      if (gen !== chatGen.current) return
      setMessages(prev => [...prev, { role: 'assistant', text: reply }])
      setTurnsLeft(n => n - 1)
    } catch (e) {
      if (gen !== chatGen.current) return
      const err = e instanceof DemoChatError ? e : new DemoChatError("The agent couldn't answer just now. Please try again.", 'retry')
      setChatError(err.message)
      setChatErrorKind(err.kind)
      if (err.kind !== 'retry') { session.current = null; setChatStatus('ended') }
    } finally {
      if (gen === chatGen.current) setTyping(false)
    }
  }, [chatStatus, typing, chatApi])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, close])

  const api: AssistantApi = {
    config, open, view, call, callActive, callLive, secondsLeft, messages, typing, chatStatus, chatError, chatErrorKind, turnsLeft,
    openWith, setView, close, startCall, sendMessage: text => void sendMessage(text), restartChat: () => void startChat(),
  }
  return <AssistantContext.Provider value={api}>{children}</AssistantContext.Provider>
}

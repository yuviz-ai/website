'use client'

import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Link from 'next/link'
import { ArrowLeft, Clock, MessageSquareOff, RotateCcw, SendHorizontal, WifiOff, X } from 'lucide-react'
import type { DemoChatError } from '@/lib/demoChat'
import { useAssistant } from './AssistantProvider'
import { BrandMark } from './BrandMark'

const NOTICE: Record<DemoChatError['kind'], { title: string; icon: React.ElementType }> = {
  retry: { title: 'Can’t reach the chat', icon: WifiOff },
  unavailable: { title: 'Chat is offline', icon: MessageSquareOff },
  expired: { title: 'This chat timed out', icon: Clock },
  ended: { title: 'Demo chat finished', icon: MessageSquareOff },
}

export function ChatPanel() {
  const { config, messages, typing, chatStatus, chatError, chatErrorKind, turnsLeft, sendMessage, restartChat, setView, close } = useAssistant()
  const [draft, setDraft] = useState('')
  const feedRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const ready = chatStatus === 'ready'
  const asked = messages.some(m => m.role === 'user')

  useEffect(() => { if (ready) inputRef.current?.focus() }, [ready])
  useEffect(() => { feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: 'smooth' }) }, [messages, typing, chatError])

  const submit = (e: FormEvent) => { e.preventDefault(); if (!draft.trim()) return; sendMessage(draft); setDraft('') }

  return (
    <>
      <header className="ya-head">
        <button type="button" className="ya-icon-btn" onClick={() => setView('connect')} aria-label="Back"><ArrowLeft size={18}/></button>
        <BrandMark/>
        <span className="ya-title-stack">
          <b className="ya-title">{config.brandName} Assistant</b>
          <small className={ready ? '' : 'is-off'}><i aria-hidden="true"/>{chatStatus === 'opening' ? 'Connecting…' : ready ? `${config.agentName} · AI agent` : 'Offline'}</small>
        </span>
        <button type="button" className="ya-icon-btn" onClick={restartChat} aria-label="Start a new chat" title="New chat"><RotateCcw size={16}/></button>
        <button type="button" className="ya-icon-btn" onClick={close} aria-label="Close"><X size={18}/></button>
      </header>
      <div className="ya-feed" ref={feedRef} aria-live="polite">
        {messages.map((m, i) => <p key={i} className={`ya-bubble ya-${m.role}`}>{m.text}</p>)}
        {(typing || chatStatus === 'opening') && <p className="ya-bubble ya-assistant ya-typing" aria-label="Typing"><i/><i/><i/></p>}
        {ready && !asked && !typing && (
          <div className="ya-quick">
            {config.chat?.quickReplies.map(q => <button key={q} type="button" onClick={() => sendMessage(q)}>{q}</button>)}
          </div>
        )}
        {chatError && ready && <p className="ya-inline-error" role="alert">{chatError}</p>}
        {chatError && !ready && chatErrorKind && (() => {
          const { title, icon: Icon } = NOTICE[chatErrorKind]
          return (
            <div className="ya-notice" role="alert">
              <span className="ya-notice-icon" aria-hidden="true"><Icon size={20}/></span>
              <b>{title}</b>
              <p>{chatError}</p>
              <div className="ya-notice-actions">
                {(chatErrorKind === 'retry' || chatErrorKind === 'expired') && (
                  <button type="button" onClick={restartChat}>{chatErrorKind === 'retry' ? 'Try again' : 'New chat'}</button>
                )}
                {config.contact && <Link href={config.contact.href} onClick={close}>{config.contact.label}</Link>}
              </div>
            </div>
          )
        })()}
      </div>
      {(ready || chatStatus === 'opening') && <form className="ya-input" onSubmit={submit}>
        <input ref={inputRef} value={draft} onChange={e => setDraft(e.target.value)} disabled={!ready}
          placeholder={ready ? 'Type a message…' : 'Connecting…'} aria-label="Message" maxLength={500}/>
        <button type="submit" className="ya-send" disabled={!ready || !draft.trim() || typing} aria-label="Send"><SendHorizontal size={17}/></button>
      </form>}
      {(ready || chatStatus === 'opening') && <footer className="ya-foot">
        {ready && turnsLeft <= 3 ? `${turnsLeft} message${turnsLeft === 1 ? '' : 's'} left in this demo chat` : config.chat?.note}
      </footer>}
    </>
  )
}

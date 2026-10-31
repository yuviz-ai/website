'use client'

import Link from 'next/link'
import { ArrowLeft, Info, Mic, MicOff, PhoneOff, Volume2, VolumeX, X } from 'lucide-react'
import { CALL_STATUS as STATUS, formatTime } from './callStatus'
import { useAssistant } from './AssistantProvider'
import { BrandMark } from './BrandMark'

const BARS = 32

export function VoicePanel() {
  const { config, call, callLive: live, secondsLeft: left, startCall, setView, close } = useAssistant()
  const { hangUp } = call
  const last = call.transcript[call.transcript.length - 1]
  const level = call.state === 'talking' && !call.muted ? Math.max(0.25, call.micLevelPct / 100) : call.state === 'speaking' ? 0.8 : live ? 0.12 : 0.06
  const timer = formatTime(left)
  const over = call.state === 'ended' || call.state === 'error'
  const blocked = call.errorKind === 'limit' || call.errorKind === 'unavailable'
  const status = call.errorKind === 'limit' ? 'Limit reached' : blocked ? 'Unavailable' : STATUS[call.state]

  return (
    <>
      <header className="ya-head">
        <button type="button" className="ya-icon-btn" onClick={() => setView('connect')} aria-label="Back"><ArrowLeft size={18}/></button>
        <BrandMark/>
        <b className="ya-title">{config.brandName} AI</b>
        <span className={`ya-call-status${live ? ' is-live' : ''}`}>{live ? <><i aria-hidden="true"/>Live<span className="ya-call-time" aria-label="Time left">{timer}</span></> : status}</span>
        <button type="button" className="ya-icon-btn" onClick={close} aria-label="Close and end call"><X size={18}/></button>
      </header>
      <div className={`ya-voice ya-state-${call.state}`}>
        <span className="ya-orb"><BrandMark size="lg"/></span>
        <b className="ya-agent">{config.agentName}</b>
        <small className="ya-agent-role">{config.agentRole}</small>
        {call.errorMsg ? (
          <p className="ya-voice-notice" role="status"><Info size={15} aria-hidden="true"/>{call.errorMsg}</p>
        ) : (
          <p className="ya-voice-line" aria-live="polite">
            {last ? <><b>{last.role === 'user' ? 'You' : config.agentName}:</b> {last.text}</> : call.state === 'connecting' ? 'Starting your conversation…' : over ? 'Thanks for talking with us.' : STATUS[call.state]}
          </p>
        )}
        {!call.errorMsg && <div className="ya-wave" style={{ '--ya-level': level } as React.CSSProperties} aria-hidden="true">
          {Array.from({ length: BARS }, (_, i) => <i key={i} style={{ '--ya-bar': (0.35 + Math.abs(Math.sin(i * 0.7)) * 0.65).toFixed(2), animationDelay: `${(i % 8) * 0.09}s` } as React.CSSProperties}/>)}
        </div>}
      </div>
      {over ? (
        <div className="ya-after">
          {!blocked && <button type="button" className="ya-primary" onClick={startCall}>{call.errorMsg ? 'Try again' : 'Call again'}</button>}
          {config.contact && <Link href={config.contact.href} className={blocked ? 'ya-primary' : 'ya-secondary'} onClick={close}>{config.contact.label}</Link>}
        </div>
      ) : (
        <div className="ya-controls">
          <button type="button" className="ya-ctl" onClick={() => call.setMuted(!call.muted)} aria-pressed={call.muted} disabled={!live}>
            <span>{call.muted ? <MicOff size={19}/> : <Mic size={19}/>}</span>{call.muted ? 'Unmute' : 'Mute'}
          </button>
          <button type="button" className="ya-ctl ya-end" onClick={hangUp}>
            <span><PhoneOff size={20}/></span>End call
          </button>
          <button type="button" className="ya-ctl" onClick={() => call.setSpeakerOn(!call.speakerOn)} aria-pressed={!call.speakerOn}>
            <span>{call.speakerOn ? <Volume2 size={19}/> : <VolumeX size={19}/>}</span>Speaker
          </button>
        </div>
      )}
    </>
  )
}

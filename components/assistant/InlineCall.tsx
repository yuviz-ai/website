'use client'

import Link from 'next/link'
import { Info, Mic, MicOff, Phone, PhoneOff, Volume2, VolumeX } from 'lucide-react'
import { useAssistant } from './AssistantProvider'
import { BrandMark } from './BrandMark'
import { CALL_STATUS, formatTime } from './callStatus'

export function InlineCall({ label, className }: { label: string; className?: string }) {
  const { config, call, callActive, callLive, secondsLeft, startCall } = useAssistant()
  const last = call.transcript[call.transcript.length - 1]

  if (!callActive) {
    return (
      <div className="ya-inline-wrap">
        <button type="button" className={className} onClick={startCall}>
          <Phone size={17} aria-hidden="true"/> {label}
        </button>
        {call.errorMsg && (
          <p className="ya-inline-msg" role="status">
            <span>
              <Info size={14} aria-hidden="true"/>{call.errorMsg}
              {config.contact && <Link href={config.contact.href}>{config.contact.label}</Link>}
            </span>
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={`ya-inline ya-state-${call.state}`} role="group" aria-label={`Call with ${config.brandName} AI`}>
      <BrandMark/>
      <span className="ya-inline-line" aria-live="polite">
        {last ? <><b>{last.role === 'user' ? 'You' : config.agentName}</b>{last.text}</> : callLive ? `${config.agentName} is listening…` : 'Starting your conversation…'}
      </span>
      <span className={`ya-call-status${callLive ? ' is-live' : ''}`}>
        {callLive ? <><i aria-hidden="true"/>Live<span className="ya-call-time" aria-label="Time left">{formatTime(secondsLeft)}</span></> : CALL_STATUS[call.state]}
      </span>
      <button type="button" className="ya-inline-btn" onClick={() => call.setMuted(!call.muted)} aria-pressed={call.muted} disabled={!callLive} aria-label={call.muted ? 'Unmute' : 'Mute'}>
        {call.muted ? <MicOff size={16}/> : <Mic size={16}/>}
      </button>
      <button type="button" className="ya-inline-btn" onClick={() => call.setSpeakerOn(!call.speakerOn)} aria-pressed={!call.speakerOn} aria-label={call.speakerOn ? 'Turn speaker off' : 'Turn speaker on'}>
        {call.speakerOn ? <Volume2 size={16}/> : <VolumeX size={16}/>}
      </button>
      <button type="button" className="ya-inline-btn ya-inline-end" onClick={call.hangUp} aria-label="End call"><PhoneOff size={16}/></button>
    </div>
  )
}

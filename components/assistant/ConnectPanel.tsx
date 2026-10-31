'use client'

import { ChevronRight, MessageSquareText, Phone, X } from 'lucide-react'
import { useAssistant } from './AssistantProvider'
import { BrandMark } from './BrandMark'

export function ConnectPanel() {
  const { config, openWith, close } = useAssistant()
  return (
    <>
      <header className="ya-head">
        <BrandMark/>
        <b className="ya-title">Talk to {config.brandName}</b>
        <span className="ya-badge"><i aria-hidden="true"/>Available</span>
        <button type="button" className="ya-icon-btn" onClick={close} aria-label="Close"><X size={18}/></button>
      </header>
      <div className="ya-connect">
        <p>How would you like to connect?</p>
        {config.chat && (
          <button type="button" className="ya-option" onClick={() => openWith('chat')}>
            <span className="ya-option-icon"><MessageSquareText size={20}/></span>
            <span><b>Chat with us</b><small>Ask questions, get help, and explore {config.brandName}.</small></span>
            <ChevronRight size={17} aria-hidden="true"/>
          </button>
        )}
        {config.voice && (
          <button type="button" className="ya-option" onClick={() => openWith('voice')}>
            <span className="ya-option-icon"><Phone size={20}/></span>
            <span><b>Talk to our AI agent</b><small>Have a real-time voice conversation in your browser.</small></span>
            <ChevronRight size={17} aria-hidden="true"/>
          </button>
        )}
      </div>
      {config.poweredBy && <footer className="ya-foot">Powered by <b>{config.poweredBy}</b></footer>}
    </>
  )
}

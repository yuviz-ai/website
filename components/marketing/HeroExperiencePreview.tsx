'use client'

import { ArrowRight, AudioLines, Bot, MessageCircle, Send, Phone, Mic, Volume2, Sparkles } from 'lucide-react'

export function HeroExperiencePreview() {
  const openAssistant = () => window.dispatchEvent(new Event('yuviz:open-assistant'))
  return (
    <aside className="story-hero-showcase" aria-label="Yuviz assistant experience preview">
      <div className="story-preview-note"><span className="story-preview-arrow">↗</span><span>One platform.<br/><b>Every conversation.</b></span></div>
      <article className="story-preview-card story-preview-connect">
        <header><span className="story-preview-brand"><Sparkles size={15}/></span><b>Talk to Yuviz</b><span className="story-available"><i/> Available</span><button onClick={openAssistant} aria-label="Open Yuviz assistant">×</button></header>
        <p>How would you like to connect?</p>
        <button className="story-preview-choice" onClick={openAssistant}><MessageCircle/><span><b>Chat with us</b><small>Ask questions, get help, and explore Yuviz.</small></span><ArrowRight/></button>
        <button className="story-preview-choice" onClick={openAssistant}><Phone/><span><b>Talk to our AI agent</b><small>Have a real-time voice conversation in your browser.</small></span><ArrowRight/></button>
        <footer>Powered by <strong>Yuviz AI</strong></footer>
      </article>
      <article className="story-preview-card story-preview-chat">
        <header><span className="story-preview-brand"><Bot size={15}/></span><span><b>Yuviz Assistant</b><small><i/> Online · Example conversation</small></span><button onClick={openAssistant} aria-label="Open chat">···</button></header>
        <div className="story-preview-bubble user">Hi! I’d like to know how Yuviz can help automate customer calls.</div>
        <div className="story-preview-bubble assistant">Hello! Yuviz AI voice agents can handle inbound and outbound calls, understand intent, take actions, and integrate with your systems.</div>
        <div className="story-preview-bubble assistant">Would you like to explore a quick demo?</div>
        <div className="story-preview-suggestions"><button onClick={openAssistant}>Yes, show me</button><button onClick={openAssistant}>Tell me more</button></div>
        <button className="story-preview-input" onClick={openAssistant}>Type a message… <Send size={14}/></button>
      </article>
      <article className="story-preview-card story-preview-call">
        <header><span className="story-preview-brand"><AudioLines size={15}/></span><b>Yuviz AI Agent</b><span>Live demo preview</span><button onClick={openAssistant} aria-label="Try voice demo">↗</button></header>
        <div className="story-preview-call-body"><span className="story-preview-orb"><AudioLines size={30}/></span><b>Talk to an AI agent</b><small>Real-time browser voice experience</small><div className="story-preview-wave">{Array.from({length:29},(_,i)=><i key={i}/>)}</div><div className="story-preview-controls"><span><Mic size={16}/><small>Mic</small></span><button onClick={openAssistant}><Phone size={17}/></button><span><Volume2 size={16}/><small>Audio</small></span></div></div>
      </article>
      <button className="story-preview-launcher" onClick={openAssistant} aria-label="Open Talk to Yuviz"><AudioLines size={22}/></button>
    </aside>
  )
}

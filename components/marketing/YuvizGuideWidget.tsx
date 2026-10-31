'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MessageCircle, X, Send, Phone, Mic, MicOff, PhoneOff, ArrowLeft, Sparkles } from 'lucide-react'
import { useDemoCall, type DemoCallState } from '@/lib/useDemoCall'

type Message = { role: 'assistant' | 'user'; text: string }
type Mode = 'choose' | 'chat' | 'voice'
const welcome = 'Hi! I’m the Yuviz website guide. I can help you explore our voice AI platform, use cases and integrations.'

const answers: Array<{ keys: string[]; answer: string }> = [
  { keys: ['what', 'platform', 'yuviz', 'do'], answer: 'Yuviz helps businesses automate inbound and outbound phone conversations with AI voice agents. Agents can understand callers, follow workflows, use connected tools and hand off to a person when needed.' },
  { keys: ['integrat', 'crm', 'calendar', 'connect'], answer: 'The platform connects with telephony providers and business tools including Vobiz, Cloudonix, SIP trunks, Salesforce, HubSpot, Zoho CRM and Google Calendar. Ask us to validate a specific workflow.' },
  { keys: ['language', 'hindi', 'english'], answer: 'The current website demo supports English and Hindi. Contact our team if you need another language evaluated.' },
  { keys: ['price', 'pricing', 'cost'], answer: 'Pricing depends on call volume and the AI services selected. Book a demo and we’ll work through an estimate for your use case.' },
  { keys: ['security', 'secure', 'privacy'], answer: 'Security requirements depend on your deployment and integrations. We can walk through your requirements in a technical discussion; we don’t publish certifications or guarantees that haven’t been verified.' },
  { keys: ['demo', 'talk', 'call'], answer: 'You can try the browser voice demo from the Talk to an AI agent option, or book a guided product demo with our team.' },
]
const quickQuestions = ['What does Yuviz do?', 'Which tools can I connect?', 'How does pricing work?']
const status: Partial<Record<DemoCallState, string>> = { connecting: 'Connecting…', ready: 'Listening', talking: 'Listening to you', thinking: 'Thinking…', speaking: 'Agent is speaking', ended: 'Call ended', error: 'Could not connect' }

export function YuvizGuideWidget() {
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState<Mode>('choose')
  const [messages, setMessages] = useState<Message[]>([{ role: 'assistant', text: welcome }])
  const [draft, setDraft] = useState('')
  const [voiceSeconds, setVoiceSeconds] = useState(120)
  const feedRef = useRef<HTMLDivElement>(null)
  const call = useDemoCall()
  const activeCall = !['idle', 'ended', 'error'].includes(call.state)

  useEffect(() => { feedRef.current?.scrollTo({ top: feedRef.current.scrollHeight, behavior: 'smooth' }) }, [messages, mode])
  useEffect(() => {
    if (!activeCall) return
    const id = window.setInterval(() => setVoiceSeconds(v => {
      if (v <= 1) { call.hangUp(); return 0 }
      return v - 1
    }), 1000)
    return () => window.clearInterval(id)
  }, [activeCall, call.hangUp])

  const sendMessage = (value: string) => {
    const text = value.trim()
    if (!text) return
    setMessages(prev => [...prev, { role: 'user', text }])
    setDraft('')
    const normalized = text.toLowerCase()
    const match = answers.find(item => item.keys.some(key => normalized.includes(key)))
    const reply = match?.answer ?? 'I can help with platform capabilities, integrations, languages and pricing. For a detailed or account-specific question, please book a demo or email hello@yuviz.ai and our team can follow up.'
    window.setTimeout(() => setMessages(prev => [...prev, { role: 'assistant', text: reply }]), 350)
  }
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); sendMessage(draft) }
  const startVoice = () => { setVoiceSeconds(120); setMode('voice'); void call.start() }
  const back = () => { if (activeCall || call.state === 'connecting') call.hangUp(); setMode('choose') }
  const close = () => { if (activeCall || call.state === 'connecting') call.hangUp(); setOpen(false); setMode('choose') }

  return (
    <div className="yuviz-guide-root">
      {open && <section className="yuviz-guide-panel" role="dialog" aria-modal="false" aria-label="Talk to Yuviz">
        <header className="yuviz-guide-head">
          <div className="yuviz-guide-brand"><span className="yuviz-guide-mark"><Sparkles size={18}/></span><span><strong>Talk to Yuviz</strong><small>Voice AI, made useful</small></span></div>
          <button type="button" className="yuviz-guide-iconbtn" onClick={close} aria-label="Close assistant"><X size={19}/></button>
        </header>
        {mode === 'choose' && <div className="yuviz-guide-choice">
          <div className="yuviz-guide-wave" aria-hidden="true">{Array.from({length:25},(_,i)=><i key={i} style={{'--bar':`${12 + Math.abs(Math.sin(i*.72))*34}px`} as React.CSSProperties}/>)}</div>
          <h3>How can we help?</h3><p>Explore Yuviz or experience a live browser voice demo.</p>
          <button type="button" className="yuviz-guide-option" onClick={()=>setMode('chat')}><span><MessageCircle size={19}/></span><span><b>Chat with Yuviz</b><small>Get quick answers about the platform</small></span><ArrowLeft className="yuviz-guide-chevron" size={16}/></button>
          <button type="button" className="yuviz-guide-option" onClick={startVoice}><span><Phone size={19}/></span><span><b>Talk to our AI agent</b><small>Try a real-time voice conversation</small></span><ArrowLeft className="yuviz-guide-chevron" size={16}/></button>
          <p className="yuviz-guide-footnote">Need a tailored walkthrough? <Link href="/contact" onClick={()=>setOpen(false)}>Book a demo</Link></p>
        </div>}
        {mode === 'chat' && <div className="yuviz-guide-chat">
          <div className="yuviz-guide-subhead"><button type="button" onClick={back} aria-label="Back"><ArrowLeft size={17}/></button><span>Chat with Yuviz</span><button type="button" onClick={()=>setMessages([{role:'assistant',text:welcome}])}>New chat</button></div>
          <div className="yuviz-guide-feed" ref={feedRef} aria-live="polite">
            {messages.map((m,i)=><div key={i} className={`yuviz-guide-message ${m.role}`}>{m.text}</div>)}
            {messages.length === 1 && <div className="yuviz-guide-quick">{quickQuestions.map(q=><button type="button" key={q} onClick={()=>sendMessage(q)}>{q}</button>)}</div>}
          </div>
          <form className="yuviz-guide-compose" onSubmit={submit}><input value={draft} onChange={e=>setDraft(e.target.value)} placeholder="Ask about Yuviz…" aria-label="Your message"/><button type="submit" disabled={!draft.trim()} aria-label="Send message"><Send size={17}/></button></form>
          <p className="yuviz-guide-disclaimer">Quick website guide · For detailed enquiries, <Link href="/contact" onClick={()=>setOpen(false)}>contact our team</Link>.</p>
        </div>}
        {mode === 'voice' && <div className="yuviz-guide-voice">
          <div className={`yuviz-guide-avatar ${activeCall ? 'active' : ''}`}><Phone size={25}/></div>
          <h3>Talk to Sarah</h3><p className="yuviz-guide-callstatus" aria-live="polite">{status[call.state] ?? 'Ready when you are'}</p>
          <div className={`yuviz-guide-wave voice ${activeCall ? 'playing' : ''}`} aria-hidden="true">{Array.from({length:31},(_,i)=><i key={i} style={{'--bar':`${8 + Math.abs(Math.sin(i*.53))*35}px`} as React.CSSProperties}/>)}</div>
          {call.transcript.length > 0 && <div className="yuviz-guide-lastline"><b>{call.transcript[call.transcript.length-1].role === 'user' ? 'You' : 'Sarah'}</b>: {call.transcript[call.transcript.length-1].text}</div>}
          {call.errorMsg && <p className="yuviz-guide-error" role="alert">{call.errorMsg}</p>}
          <div className="yuviz-guide-callcontrols">
            {activeCall && <button type="button" onClick={()=>call.setMuted(!call.muted)} aria-label={call.muted?'Unmute microphone':'Mute microphone'} className={call.muted?'muted':''}>{call.muted?<MicOff size={18}/>:<Mic size={18}/>}</button>}
            {activeCall || call.state === 'connecting' ? <button type="button" className="hangup" onClick={()=>call.hangUp()} aria-label="End call"><PhoneOff size={18}/></button> : <button type="button" className="start" onClick={startVoice}><Phone size={17}/> {call.state === 'error' ? 'Try again' : 'Start voice demo'}</button>}
          </div>
          <p className="yuviz-guide-disclaimer">Your browser will ask for microphone access. Demo calls are limited to 2 minutes.</p>
          <button type="button" className="yuviz-guide-back" onClick={back}>Back to options</button>
        </div>}
      </section>}
      <button type="button" className={`yuviz-guide-launcher ${open ? 'is-open' : ''}`} onClick={()=>open?close():setOpen(true)} aria-label={open?'Close Talk to Yuviz':'Open Talk to Yuviz'}>
        {open ? <X size={22}/> : <><span className="yuviz-guide-launch-icon"><MessageCircle size={21}/></span><span>Talk to Yuviz</span></>}
      </button>
    </div>
  )
}

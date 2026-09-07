'use client'

import { useEffect, useState } from 'react'
import { ArrowRight, Check, ChevronDown, Clock3, Headphones, Menu, Mic, PhoneCall, Play, Radio, ShieldCheck, Sparkles, X, Zap } from 'lucide-react'

const navItems = ['Product', 'Solutions', 'Use cases', 'Resources', 'Pricing']
const useCases = [
  { label: 'Sales', title: 'Turn interest into momentum.', copy: 'Qualify inbound demand, answer product questions, and book the next step while your team focuses on the close.', tag: 'Lead qualification', flow: ['Intent detected', 'Questions answered', 'Meeting booked'] },
  { label: 'Support', title: 'Resolve more, with less waiting.', copy: 'Give customers a patient, always-on first line that knows your product and knows when to bring in a human.', tag: 'Customer care', flow: ['Customer verified', 'Issue understood', 'Resolution or handoff'] },
  { label: 'Appointments', title: 'Make every slot count.', copy: 'Handle scheduling, rescheduling, reminders, and FAQs without making people wait on hold.', tag: 'Scheduling', flow: ['Availability checked', 'Slot selected', 'Confirmation sent'] },
  { label: 'Reception', title: 'Your best first impression.', copy: 'Route callers, capture context, and make every interaction feel considered from the first hello.', tag: 'Front desk', flow: ['Caller welcomed', 'Reason captured', 'Right team reached'] },
  { label: 'Outbound', title: 'Start more useful conversations.', copy: 'Run thoughtful, permission-aware outreach that sounds human and creates a clear path forward.', tag: 'Campaigns', flow: ['Contact reached', 'Context shared', 'Next action logged'] },
  { label: 'Operations', title: 'Move work forward by voice.', copy: 'Connect conversations to the systems and workflows your business already relies on.', tag: 'Workflow automation', flow: ['Request received', 'Data retrieved', 'Action completed'] },
]

function Logo() {
  return <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-[-0.04em] text-lg"><span className="logo-mark"><span /></span>yuviz</a>
}

function Button({ children, variant = 'lime', href = '#demo', onClick }: { children: React.ReactNode; variant?: 'lime' | 'quiet'; href?: string; onClick?: () => void }) {
  return <a onClick={onClick} href={href} className={`button-shell inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium ${variant === 'lime' ? 'button-primary' : 'button-secondary'}`}><span className="button-label">{children}</span></a>
}

function Waveform({ active = false }: { active?: boolean }) {
  return <div className={`waveform ${active ? 'is-active' : ''}`} aria-hidden="true">{Array.from({ length: 34 }, (_, i) => <i key={i} style={{ height: `${12 + ((i * 17) % 34)}%` }} />)}</div>
}

function SignalBackdrop() { return <div className="signal-backdrop" aria-hidden="true"><span /><span /><span /><span /></div> }

function ConversationIllustration() {
  return <div className="conversation-illustration" aria-label="Animated customer conversation workspace illustration" role="img">
    <div className="workspace-topline"><span className="workspace-status"><i /> LIVE WORKSPACE</span><span>Today, 09:42</span></div>
    <div className="workspace-body">
      <div className="workspace-rail"><span /><span /><span /><span /></div>
      <div className="conversation-track">
        <div className="track-heading"><span>Customer conversation</span><b>02:18</b></div>
        <div className="message-row incoming"><span className="message-avatar">A</span><div><small>Alex Morgan</small><p>Could you move my appointment to Friday?</p></div></div>
        <div className="message-row outgoing"><div><small>Yuviz receptionist</small><p>Friday at 2:30 PM is available. Shall I confirm it?</p></div><span className="message-avatar agent">Y</span></div>
        <div className="workspace-action"><span className="action-check"><Check size={12} /></span><div><small>NEXT ACTION</small><strong>Appointment rescheduled</strong></div><ArrowRight size={15} /></div>
      </div>
    </div>
    <div className="workspace-footer"><span><span className="live-dot" /> Conversation resolved</span><span>Full context saved</span></div>
  </div>
}

function VoiceDemo() {
  const [state, setState] = useState<'idle' | 'connecting' | 'listening' | 'understanding' | 'speaking' | 'complete'>('idle')
  const active = state !== 'idle' && state !== 'complete'
  const start = () => {
    if (active) return
    setState('connecting')
    window.setTimeout(() => setState('listening'), 900)
    window.setTimeout(() => setState('understanding'), 2600)
    window.setTimeout(() => setState('speaking'), 4400)
    window.setTimeout(() => setState('complete'), 6800)
  }
  const label = state === 'idle' ? 'Ready when you are' : state === 'complete' ? 'Conversation complete' : state[0].toUpperCase() + state.slice(1)
  return <div className="voice-card" id="demo">
    <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted"><span className={`live-dot ${active ? 'pulse' : ''}`} /> {active ? 'Live simulation' : 'Yuviz voice agent'}</div><span className="font-mono text-xs text-muted">{active ? '00:18' : '00:00'}</span></div>
    <div className="voice-center"><div className={`voice-orb ${active ? 'orb-active' : ''}`}><Radio size={28} strokeWidth={1.5} /><span className="orb-ring" /></div><p className="mt-6 text-xl font-medium">Maya</p><p className="mt-1 text-sm text-muted">AI Receptionist</p><div className="mt-8 w-full"><Waveform active={active} /></div><p className="mt-5 text-sm text-lime">{label}</p></div>
    <div className="mt-9 flex items-center justify-between border-t border-line pt-4"><span className="text-xs text-muted">Illustrative product demo</span>{state === 'complete' ? <button onClick={() => setState('idle')} className="text-xs text-foreground underline underline-offset-4">Reset demo</button> : <button onClick={start} disabled={active} className="flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-xs font-semibold text-ink disabled:opacity-50"><Mic size={14} /> {state === 'idle' ? 'Start simulation' : label}</button>}</div>
  </div>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) { return <div className="section-heading"><p className="eyebrow"><span />{eyebrow}</p><h2>{title}</h2>{copy && <p className="max-w-xl text-muted leading-7">{copy}</p>}</div> }

function FooterGuide() {
  const [open, setOpen] = useState<string | null>(null)
  const topics = [
    { id: 'start', label: 'Where should I start?', text: 'Start with one high-volume conversation: scheduling, support, or lead qualification. Prove the handoff, then expand.' },
    { id: 'trust', label: 'How does Yuviz stay reliable?', text: 'Every agent has defined knowledge, explicit action boundaries, and a human handoff path when context matters.' },
    { id: 'fit', label: 'Is this right for my team?', text: 'If your team spends time answering repeat questions or coordinating next steps, Yuviz can help move that work forward.' },
  ]
  return <div className="footer-guide" aria-label="Yuviz quick guide"><div><p className="footer-guide-kicker">A clearer place to start</p><h3>Questions before the first call?</h3><p>Learn how to choose a useful first workflow and make the rollout feel considered.</p></div><div className="footer-guide-list">{topics.map(topic => <div className={`footer-guide-item ${open === topic.id ? 'is-open' : ''}`} key={topic.id}><button type="button" aria-expanded={open === topic.id} onClick={() => setOpen(open === topic.id ? null : topic.id)}><span>{topic.label}</span><ChevronDown size={16} /></button>{open === topic.id && <p>{topic.text}</p>}</div>)}</div></div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState(0)
  useEffect(() => { document.body.classList.toggle('menu-open', menuOpen); return () => document.body.classList.remove('menu-open') }, [menuOpen])
  const useCase = useCases[selected]
  return <main id="top">
    <nav className="site-nav"><div className="container flex h-20 items-center justify-between"><Logo /><div className="hidden items-center gap-7 md:flex">{navItems.map(item => <a href={`#${item.toLowerCase().replace(' ', '-')}`} key={item} className="nav-link">{item}</a>)}</div><div className="hidden items-center gap-3 md:flex"><a href="#contact" className="nav-link">Log in</a><Button href="#contact">Get started <ArrowRight size={15} /></Button></div><button aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-foreground">{menuOpen ? <X /> : <Menu />}</button></div>{menuOpen && <div className="mobile-menu md:hidden">{navItems.map(item => <a onClick={() => setMenuOpen(false)} href={`#${item.toLowerCase().replace(' ', '-')}`} key={item}>{item}</a>)}<a href="#contact">Log in</a><Button href="#contact">Get started <ArrowRight size={15} /></Button></div>}</nav>
    <section className="hero container"><SignalBackdrop /><div className="hero-copy"><p className="eyebrow"><span />AI voice agents for real conversations</p><h1>Let AI handle<br /><em>the conversation.</em></h1><p className="hero-sub">Yuviz gives your business AI voice agents that answer calls, understand customers and take action — 24/7.</p><div className="flex flex-wrap gap-3"><Button onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}>Talk to Yuviz <ArrowRight size={16} /></Button><Button variant="quiet" href="#how-it-works"><Play size={15} /> See how it works</Button></div><p className="hero-note"><Check size={14} /> No scripts. No waiting. No missed calls.</p></div><VoiceDemo /></section>
    <section className="credibility border-y border-line"><div className="container flex flex-wrap items-center justify-between gap-5 py-6"><p className="text-sm text-muted">Built for the moments that matter.</p><div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted"><span className="flex items-center gap-2"><Headphones size={15} /> Inbound & outbound</span><span className="flex items-center gap-2"><Zap size={15} /> Real-time responses</span><span className="flex items-center gap-2"><ShieldCheck size={15} /> Human handoff</span></div></div></section>
    <section className="section container" id="product"><SectionHeading eyebrow="The point is progress" title="Conversations that do more than talk." copy="Yuviz is built to move a conversation somewhere useful — from the first hello to the next action." /><div className="value-grid"><article><span className="number">01</span><Mic /><h3>Answer</h3><p>Be there when customers call. Understand intent, context, and what they need next.</p></article><article><span className="number">02</span><Zap /><h3>Act</h3><p>Connect the conversation to your workflows. Schedule, qualify, update, and follow through.</p></article><article><span className="number">03</span><ShieldCheck /><h3>Escalate</h3><p>Know when a person is the right answer. Hand off with the full conversation in context.</p></article></div></section>
    <section className="section showcase" id="how-it-works"><div className="container"><SectionHeading eyebrow="One calm control room" title="See every conversation clearly." copy="A focused workspace for the calls happening now, the outcomes that matter, and the context your team needs." /><div className="dashboard"><div className="dashboard-top"><div><span className="text-xs text-muted">OVERVIEW / TODAY</span><h3 className="mt-2">Good morning, team.</h3></div><span className="demo-badge">Illustrative demo data</span></div><div className="metric-row"><div><span>Conversations</span><strong>248</strong><small>Across 3 active agents</small></div><div><span>Resolved by Yuviz</span><strong>72%</strong><small>Without escalation</small></div><div><span>Next action</span><strong>18</strong><small>Follow-ups queued</small></div></div><div className="dashboard-table"><div className="table-head"><span>Recent conversations</span><span>Status</span></div>{['Reschedule request', 'New inbound lead', 'Order status question'].map((x, i) => <div className="table-row" key={x}><span className="flex items-center gap-3"><span className="avatar">{['A', 'J', 'M'][i]}</span>{x}</span><span className="flex items-center gap-2 text-xs text-muted"><span className="live-dot" /> {i === 0 ? 'Resolved' : 'In progress'}</span></div>)}</div></div></div></section>
    <section className="section container" id="use-cases"><SectionHeading eyebrow="Built around your business" title="A voice agent for every kind of work." /><div className="tabs" role="tablist" aria-label="Yuviz use cases">{useCases.map((item, i) => <button key={item.label} role="tab" aria-selected={selected === i} onClick={() => setSelected(i)}>{item.label}</button>)}</div><div className="usecase-panel"><div><p className="eyebrow"><span />{useCase.tag}</p><h3>{useCase.title}</h3><p className="text-muted leading-7">{useCase.copy}</p><a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm text-lime">Explore this workflow <ArrowRight size={15} /></a></div><div className="flow"><span className="flow-line" />{useCase.flow.map((step, i) => <div className="flow-step" key={step}><span>{i + 1}</span><div><strong>{step}</strong><p>{i === 0 ? 'The agent picks up the signal.' : i === 1 ? 'Context turns into understanding.' : 'The next step keeps moving.'}</p></div></div>)}</div></div></section>
    <section className="section dark-section"><div className="container split-section"><div><SectionHeading eyebrow="Context, not scripts" title="Every conversation gets smarter as it moves." copy="Give your agent the right knowledge, the right tools, and clear boundaries. Yuviz keeps the thread from hello to outcome." /><div className="mini-list"><div><span><Sparkles size={16} /></span><p><strong>Knowledge retrieval</strong><br /><small>Ground responses in the information you trust.</small></p></div><div><span><PhoneCall size={16} /></span><p><strong>Call-to-outcome automation</strong><br /><small>Turn spoken requests into useful actions.</small></p></div><div><span><Clock3 size={16} /></span><p><strong>Human when it matters</strong><br /><small>Transfer with context, not a cold restart.</small></p></div></div></div><div className="signal-diagram"><div className="diagram-node node-a">Customer voice</div><div className="diagram-node node-b">Yuviz agent</div><div className="diagram-node node-c">Your systems</div><div className="diagram-line line-a" /><div className="diagram-line line-b" /><div className="diagram-center"><Radio size={22} /></div></div></div></section>
    <section className="section container"><div className="tech-grid"><div><SectionHeading eyebrow="Under the voice" title="Serious infrastructure. Human interface." copy="A dependable foundation for real-time conversations, designed to stay out of the customer’s way." /></div><div className="architecture"><div className="arch-row"><span>Voice</span><i /><span>Understanding</span><i /><span>Action</span></div><div className="arch-stack"><span>Real-time gateway</span><span>Conversation intelligence</span><span>Knowledge + workflows</span></div><p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted">Securely separated by tenant</p></div></div><div className="tech-notes"><div><h3>Observe the whole signal</h3><p>Transcripts, outcomes, and handoffs give your team a clear view into what customers are asking for.</p></div><div><h3>Keep your boundaries clear</h3><p>Define what agents know, what they can do, and when a human takes over.</p></div><div><h3>Bring your stack along</h3><p>Connect the workflows that already make your business run.</p></div></div></section>
    <section className="cta-section" id="contact"><div className="container relative cta-layout"><div><SignalBackdrop /><p className="eyebrow"><span />Start with a conversation</p><h2>Let&apos;s make your<br /><em>next call useful.</em></h2><p className="max-w-md text-muted leading-7">See what an AI voice agent could handle for your business. No scripts. Just a clear place to start.</p><div className="mt-8 flex flex-wrap gap-3"><Button href="#demo">Talk to Yuviz <ArrowRight size={16} /></Button><Button href="mailto:hello@yuviz.ai" variant="quiet">Talk to our team</Button></div></div><ConversationIllustration /></div></section>
    <footer className="container footer"><FooterGuide /><div className="footer-main"><div><Logo /><p className="mt-4 max-w-xs text-sm leading-6 text-muted">AI voice agents for real conversations.</p></div><div className="footer-links"><div><p>Explore</p><a href="#product">Product</a><a href="#use-cases">Use cases</a><a href="#how-it-works">How it works</a></div><div><p>Company</p><a href="#contact">Contact</a><a href="#contact">Careers</a><a href="#contact">Privacy</a></div></div></div><div className="footer-bottom"><span>© 2026 Yuviz AI</span><span>Built for better conversations.</span></div></footer>
  </main>
}

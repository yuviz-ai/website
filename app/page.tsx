import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Headphones, MessageSquareText, PhoneCall, AudioLines, Bot, MessageCircle, Send, Phone, Mic, Volume2, Sparkles } from 'lucide-react'
import { UseCasePlay } from '@/components/marketing/UseCasePlay'
import { TalkToSarah } from '@/components/marketing/TalkToSarah'
import { ProblemCards } from '@/components/marketing/ProblemCards'
import { HelloToDone } from '@/components/marketing/HelloToDone'
import { ConfigureInMinutes } from '@/components/marketing/ConfigureInMinutes'

const lede = 'Yuviz answers your calls with AI voice agents that understand what callers need — then book, look up, confirm or hand off to your team.'

export const metadata: Metadata = {
  title: 'Yuviz.ai | AI voice agents for business',
  description: lede,
  openGraph: { title: 'Yuviz.ai | AI voice agents for business', description: lede },
}

const integrations = [
  { name: 'Twilio', logo: 'twilio.svg', x: 18, y: 16 },
  { name: 'Salesforce', logo: 'salesforce.svg', x: 34, y: 16 },
  { name: 'WhatsApp', logo: 'whatsapp.svg', x: 6, y: 50 },
  { name: 'Vonage', logo: 'vonage.svg', x: 21, y: 50 },
  { name: 'Google Drive', logo: 'googledrive.svg', x: 18, y: 84 },
  { name: 'HubSpot', logo: 'hubspot.svg', x: 36, y: 50 },
  { name: 'Zoho CRM', logo: 'zohocrm.svg', x: 38, y: 84, wide: true },
  { name: 'Zoho Desk', logo: 'zohodesk.svg', x: 62, y: 84, wide: true },
  { name: 'Google Calendar', logo: 'googlecalendar.svg', x: 66, y: 16 },
  { name: 'Plivo', logo: 'plivo.svg', x: 82, y: 16, wide: true },
  { name: 'Vobiz', logo: 'vobiz.svg', x: 79, y: 50 },
  { name: 'Cal.com', logo: 'caldotcom.svg', x: 64, y: 50 },
  { name: 'Cloudonix', logo: 'cloudonix.png', x: 82, y: 84, wide: true },
  { name: 'Google Sheets', logo: 'googlesheets.svg', x: 94, y: 50 },
]

// Circuit-style traces from the hub (500,220 in a 1000x440 box); alternate which axis turns first.
const traces = integrations.map((i, n) => {
  const x = i.x * 10, y = i.y * 4.4
  if (n % 2) return { path: `M500 220 V${y} H${x}`, accent: `M${(500 + x) / 2 - 8} ${y} h16` }
  return { path: `M500 220 H${x} V${y}`, accent: `M${x} ${(220 + y) / 2 - 8} v16` }
})

const useCases = [
  { icon: CalendarCheckIcon, title: 'Appointment booking', text: 'Check availability, book, and send a confirmation.', call: { slug: 'appointment-booking', voice: 'Sarah · English', lines: ["Hi, I'd like to book a dental check-up this week.", "Sure! I have Thursday at 11 or Friday at 4:30. Which suits you?", "Friday at 4:30, please.", "You're booked for Friday at 4:30. I've sent the confirmation on WhatsApp."], starts: [0.0, 3.14, 7.67, 9.7], speakers: ["caller", "agent", "caller", "agent"] as ('agent' | 'caller')[] } },
  { icon: Headphones, title: 'Front-desk questions', text: 'Timings, prices, directions and status, any hour.', call: { slug: 'front-desk', voice: 'Matilda · English', lines: ["Are you open on Sunday?", "Yes, we're open on Sunday from 10 till 2.", "And is there parking nearby?", "There's free parking right behind the building. See you soon!"], starts: [0.0, 1.42, 4.42, 6.54], speakers: ["caller", "agent", "caller", "agent"] as ('agent' | 'caller')[] } },
  { icon: MessageSquareText, title: 'Lead qualification', text: 'Ask the same discovery questions on every call and log the answers.', call: { slug: 'lead-qualification', voice: 'George · English', lines: ["Hi, I saw your ad for the new apartments.", "Thanks for calling! Are you looking to buy in the next three months?", "Yes, probably a two-bedroom.", "Great, I've noted that down. Our sales team will call you back today."], starts: [0.0, 2.76, 6.74, 9.42], speakers: ["caller", "agent", "caller", "agent"] as ('agent' | 'caller')[] } },
  { icon: PhoneCall, title: 'Outbound reminders', text: 'Call a list with pacing and retries.', call: { slug: 'outbound-reminders', voice: 'Jessica · Hindi', lines: ["नमस्ते! मैं लोटस क्लिनिक से बोल रही हूँ। कल सुबह ग्यारह बजे आपका अपॉइंटमेंट है।", "हाँ, मुझे याद है। धन्यवाद।", "बढ़िया! अगर समय बदलना हो, तो बस बताइए।", "नहीं, ठीक है। कल मिलते हैं।"], starts: [0.0, 5.41, 9.16, 12.4], speakers: ["agent", "caller", "agent", "caller"] as ('agent' | 'caller')[] } },
]

function CalendarCheckIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4"/></svg>
}

const faqs = [
  { q: 'What does Yuviz do?', a: 'Yuviz runs AI voice agents on your phone numbers. They answer and make calls, follow the flow you design, take actions in your tools, and hand off to your team when needed.' },
  { q: 'Can I keep my phone numbers?', a: 'Yes. Yuviz works with Vobiz, Cloudonix and SIP trunks today. Twilio and Plivo numbers can be managed too (not yet verified on real calls).' },
  { q: 'Which languages are supported?', a: 'English and Hindi today.' },
  { q: 'How is pricing worked out?', a: 'By call volume and the AI services you choose. Book a demo and we’ll estimate it with you.' },
]


function HeroExperiencePreview() {
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

export default function Page() {
  return (
    <main id="top" className="story-site">
      <section className="story-hero">
        <div className="story-hero-grid" aria-hidden="true" />
        <svg className="story-wave story-wave-hero" viewBox="0 0 1440 260" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="yuviz-wave-a" x1="0" x2="1"><stop offset="0%" stopColor="#8B5CF6"/><stop offset="55%" stopColor="#B06BEE"/><stop offset="100%" stopColor="#F28AAE"/></linearGradient><linearGradient id="yuviz-wave-b" x1="0" x2="1"><stop offset="0%" stopColor="#A78BFA"/><stop offset="100%" stopColor="#F9A8D4"/></linearGradient></defs><path d="M0 150 C190 70 330 220 520 150 S850 70 1040 145 1270 215 1440 110 V260 H0Z" fill="url(#yuviz-wave-a)" opacity=".16"/><path d="M0 188 C220 95 350 240 570 165 S900 100 1090 172 1290 220 1440 145" fill="none" stroke="url(#yuviz-wave-b)" strokeWidth="3" opacity=".8"/><path d="M0 215 C210 130 390 250 600 195 S900 125 1110 205 1310 235 1440 185" fill="none" stroke="url(#yuviz-wave-a)" strokeWidth="1.5" opacity=".55"/></svg>
        <div className="story-container story-hero-layout story-hero-composition">
          <div className="story-hero-copy">
            <div className="story-eyebrow"><span className="story-live-dot" /> AI VOICE AGENTS FOR BUSINESS</div>
            <h1>Turn conversations<br /><span>into outcomes.</span></h1>
            <p className="story-lede">{lede}</p>
            <div className="story-actions">
              <Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={17}/></Link>
              <TalkToSarah/>
            </div>
            <ul className="story-proof-note" aria-label="Platform strengths">{['Enterprise-grade security', 'Low-latency real-time voice', 'Built for scale'].map(p => <li key={p} className="story-proof-item"><span className="story-proof-mark"><Check size={13}/></span>{p}</li>)}</ul>
          </div>
          <HeroExperiencePreview />
        </div>
        <a href="#the-challenge" className="story-scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15}/></a>
      </section>

      <section id="the-challenge" className="story-section story-challenge">
        <div className="story-container story-split">
          <div className="story-section-intro">
            <span className="story-kicker">WHY VOICE AGENTS</span>
            <h2>Every missed call<br/><em>is a missed outcome.</em></h2>
          </div>
          <div className="story-challenge-copy">
            <p>Callers want an answer now. Teams can’t staff every line, every hour — so calls wait, drop, or end without a next step.</p>
          </div>
        </div>
        <ProblemCards/>
      </section>

      <section id="how-it-works" className="story-section story-flow">
        <div className="story-container">
          <div className="story-split story-flow-heading"><div><span className="story-kicker">HOW IT WORKS</span><h2>From hello<br/><em>to done.</em></h2></div><p>Follow one call through Yuviz: answered on your number, understood, acted on, and passed to your team when a person is needed.</p></div>
          <HelloToDone/>
        </div>
      </section>

      <ConfigureInMinutes/>

      <section id="integrations" className="story-section story-integrations">
        <div className="story-container">
          <div className="story-centered-heading story-integrations-heading">
            <span className="story-kicker">INTEGRATIONS</span>
            <h2>Voice AI that fits<br/><em>your existing tools.</em></h2>
            <p>Bring your own phone numbers and connect the systems your team already uses.</p>
          </div>
          <div className="story-integration-stage">
            <div className="story-integration-grid" aria-hidden="true"/>
            <svg className="story-int-traces" viewBox="0 0 1000 440" preserveAspectRatio="none" aria-hidden="true">
              <path className="trace" d={traces.map(t => t.path).join(' ')}/>
              <path className="accent" d={traces.map(t => t.accent).join(' ')}/>
              {traces.map((t, n) => <path key={n} className="pulse" d={t.path} pathLength={100} style={{ animationDelay: `${(n * 0.37) % 2.4}s` }}/>)}
            </svg>
            <div className="story-integration-hub">
              <span className="story-hub-mark"><img src="/yuviz-logo.jpg" alt="Yuviz" /></span>
            </div>
            {integrations.map(i => (
              <span key={i.name} className={`story-int-tile${i.wide ? ' wide' : ''}`} title={i.name} style={{ '--x': `${i.x}%`, '--y': `${i.y}%` } as React.CSSProperties}>
                <img src={`/logos/${i.logo}`} alt={i.name} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section story-principles">
        <div className="story-container story-principles-layout">
          <div><span className="story-kicker">BUILT FOR REAL CALLS</span><h2>Fluent is good.<br/><em>Reliable is better.</em></h2><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></div>
          <div className="story-principle-list">
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Natural interruptions</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Callers can cut in; the agent stops and listens.</p></details>
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Clear boundaries</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>You decide what the agent can do, and when it must hand over.</p></details>
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Test before you go live</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Call your agent from the browser before a single customer does.</p></details>
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Every call on record</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Transcript, summary and sentiment for each conversation.</p></details>
          </div>
        </div>
      </section>

      <section id="use-cases" className="story-section story-use-cases">
        <div className="story-container">
          <div className="story-split story-use-heading"><div><span className="story-kicker">WHERE TO START</span><h2>Start with one call.<br/><em>Then scale.</em></h2></div><Link href="/use-cases" className="story-text-link">See all industries <ArrowRight size={15}/></Link></div>
          <div className="story-use-grid">{useCases.map(item => { const Icon = item.icon; return <article key={item.title} className="story-use-card"><span className="story-use-icon"><Icon size={20}/></span><UseCasePlay src={`/calls/home-${item.call.slug}.m4a`} voice={item.call.voice} lines={item.call.lines} starts={item.call.starts} speakers={item.call.speakers}><h3>{item.title}</h3><p>{item.text}</p></UseCasePlay></article> })}</div>
        </div>
      </section>

      <section id="faq" className="story-section story-faq">
        <div className="story-container story-faq-layout">
          <div><span className="story-kicker">GOOD QUESTIONS</span><h2>Know what’s real<br/><em>before you get started.</em></h2><Link href="/resources/faq" className="story-text-link">See all questions <ArrowRight size={15}/></Link></div>
          <div className="story-faq-list">{faqs.map(faq => <details key={faq.q}><summary>{faq.q}<ChevronDown size={17}/></summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>

      <section className="story-final-cta">
        <div className="story-final-glow" aria-hidden="true"/><svg className="story-wave story-wave-final" viewBox="0 0 1440 230" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="yuviz-final-wave" x1="0" x2="1"><stop offset="0%" stopColor="#8B5CF6"/><stop offset="100%" stopColor="#F28AAE"/></linearGradient></defs><path d="M0 110 C180 20 350 190 540 110 S870 35 1060 120 1280 170 1440 75" fill="none" stroke="url(#yuviz-final-wave)" strokeWidth="3" opacity=".75"/><path d="M0 150 C210 60 380 210 590 145 S900 65 1100 160 1290 190 1440 120" fill="none" stroke="#D8B4FE" strokeWidth="1.5" opacity=".5"/></svg>
        <div className="story-container story-final-content"><span className="story-kicker">READY WHEN YOU ARE</span><h2>What should your<br/><em>next call achieve?</em></h2><p>Tell us about your calls and the outcome you want. We’ll show you an agent doing it.</p><div className="story-actions story-actions-center"><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={17}/></Link><a href="mailto:hello@yuviz.ai" className="story-button story-button-quiet">Email us</a></div></div>
      </section>
    </main>
  )
}

import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Cpu, Headphones, MessageSquareText, PhoneCall, Server } from 'lucide-react'
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
  { name: 'Google Drive', logo: 'googledrive.svg', x: 26, y: 84 },
  { name: 'HubSpot', logo: 'hubspot.svg', x: 36, y: 50 },
  { name: 'Zoho', logo: 'zoho.svg', x: 50, y: 84, wide: true },
  { name: 'Google Calendar', logo: 'googlecalendar.svg', x: 66, y: 16 },
  { name: 'Plivo', logo: 'plivo.svg', x: 82, y: 16, wide: true },
  { name: 'Vobiz', logo: 'vobiz.svg', x: 79, y: 50 },
  { name: 'Cal.com', logo: 'caldotcom.svg', x: 64, y: 50 },
  { name: 'Cloudonix', logo: 'cloudonix.png', x: 74, y: 84, wide: true },
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

export default function Page() {
  return (
    <main id="top" className="story-site">
      <section className="story-hero">
        <div className="story-hero-grid" aria-hidden="true" />
        <div className="story-container story-hero-layout story-hero-solo">
          <div className="story-hero-copy">
            <div className="story-eyebrow"><span className="story-live-dot" /> AI VOICE AGENTS FOR BUSINESS</div>
            <h1>Turn conversations<br /><span>into outcomes.</span></h1>
            <p className="story-lede">{lede}</p>
            <div className="story-actions">
              <Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={17}/></Link>
              <TalkToSarah/>
            </div>
            <div className="story-proof-note">{['Keep your existing numbers', 'English & Hindi', 'Live in days'].map(p => <span key={p} className="story-proof-item"><span className="story-proof-mark"><Check size={13}/></span>{p}</span>)}</div>
          </div>

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

      <section id="own-your-stack" className="story-section story-own">
        <div className="story-container">
          <div className="story-split story-flow-heading"><div><span className="story-kicker">OWN YOUR STACK</span><h2>Your numbers.<br/>Your models.<br/><em>Your data.</em></h2></div><p>Yuviz doesn’t lock you into one carrier or one AI vendor.</p></div>
          <div className="story-own-grid">
            <article><PhoneCall size={22} aria-hidden="true"/><h3>Bring your carrier</h3><p>Vobiz, Cloudonix, Twilio, Plivo or your own SIP trunk. Keep the numbers you already have.</p></article>
            <article><Cpu size={22} aria-hidden="true"/><h3>Choose your AI</h3><p>OpenAI, Anthropic, Gemini, Groq, or a local model with Ollama. Pick per agent and switch any time.</p></article>
            <article><Server size={22} aria-hidden="true"/><h3>Keep your data</h3><p>Self-host Yuviz on your own servers with Docker. Separate workspaces per customer, secrets encrypted at rest.</p></article>
          </div>
        </div>
      </section>

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
        <div className="story-final-glow" aria-hidden="true"/>
        <div className="story-container story-final-content"><span className="story-kicker">READY WHEN YOU ARE</span><h2>What should your<br/><em>next call achieve?</em></h2><p>Tell us about your calls and the outcome you want. We’ll show you an agent doing it.</p><div className="story-actions story-actions-center"><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={17}/></Link><a href="mailto:hello@yuviz.ai" className="story-button story-button-quiet">Email us</a></div></div>
      </section>
    </main>
  )
}

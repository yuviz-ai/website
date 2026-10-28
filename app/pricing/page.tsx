import Link from 'next/link'
import { ArrowRight, AudioLines, Network, Workflow, Zap } from 'lucide-react'

const factors = [
  { icon: Network, title: 'Call volume and routing', text: 'Expected minutes, inbound or outbound direction, and how calls reach the voice experience.' },
  { icon: Zap, title: 'AI services and voice', text: 'The speech, language-model, and voice services needed for the intended workflow.' },
  { icon: Workflow, title: 'Workflow and integration scope', text: 'The business context, tools, handoff rules, and systems that need to be involved.' },
]

export default function PricingPage() {
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero story-subpage-centered"><div className="story-container">
      <span className="story-kicker">PRICING & SCOPE</span>
      <h1>Price the work you need.<br/><em>Not a made-up plan.</em></h1>
      <p>Voice AI costs depend on the call path, AI services, usage, and workflow requirements. We’ll first understand the scope instead of publishing unverified plan prices or service guarantees.</p>
      <Link href="/contact" className="story-button story-button-primary">Discuss your workflow <ArrowRight size={16}/></Link>
    </div></section>
    <section className="story-container story-pricing-grid">{factors.map(({icon:Icon,title,text})=><article key={title} className="story-pricing-card"><span className="story-pillar-icon"><Icon size={21}/></span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="story-container story-pricing-bottom"><div><AudioLines size={22}/><div><h2>Need an estimate for a real use case?</h2><p>Share expected call patterns, telephony, required systems, and deployment constraints. We can discuss scope before commercial terms.</p></div><Link href="/contact" className="story-button story-button-primary">Talk to Yuviz <ArrowRight size={16}/></Link></div><p className="story-subpage-disclaimer">This page is not a published price list or a commitment to specific third-party integrations, response times, certifications, or service-level agreements. Those details must be confirmed for each deployment.</p></section>
  </main>
}

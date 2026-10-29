import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, AudioLines, Network, Workflow, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing | Yuviz.ai',
  description: 'Pricing follows your call minutes and the AI services you choose. Tell us your volume and we’ll give you an estimate.',
}

const factors = [
  { icon: Network, title: 'Call minutes', text: 'Expected volume, inbound or outbound.' },
  { icon: Zap, title: 'AI services', text: 'The speech, language and voice providers you choose.' },
  { icon: Workflow, title: 'Integrations', text: 'The tools your agent needs to act in.' },
]

export default function PricingPage() {
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <span className="story-kicker">PRICING</span>
      <h1>Pay for the calls<br/><em>you actually take.</em></h1>
      <p>Pricing follows your call minutes and the AI services you choose. Tell us your volume and we’ll give you an estimate.</p>
      <Link href="/contact" className="story-button story-button-primary">Get an estimate <ArrowRight size={16}/></Link>
    </div></section>
    <section className="story-container story-pricing-grid">{factors.map(({icon:Icon,title,text})=><article key={title} className="story-pricing-card"><span className="story-pillar-icon"><Icon size={21}/></span><h2>{title}</h2><p>{text}</p></article>)}</section>
    <section className="story-container story-pricing-bottom"><div><AudioLines size={22}/><div><h2>Have a call volume in mind?</h2><p>Share your expected minutes and use case; we’ll come back with numbers.</p></div><Link href="/contact" className="story-button story-button-primary">Get an estimate <ArrowRight size={16}/></Link></div></section>
  </main>
}

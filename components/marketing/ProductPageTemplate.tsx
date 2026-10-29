import Link from 'next/link'
import type { Metadata } from 'next'
import type React from 'react'
import {
  ArrowRight, AudioLines, GitBranch, Link2, ListChecks, Mic, MonitorPlay, PhoneForwarded, PhoneIncoming, Radio, Repeat, Route, Upload, Workflow,
} from 'lucide-react'

interface Point { title: string; icon: React.ElementType }
export interface Product {
  slug: string
  name: string
  highlight: string
  summary: string
  points: Point[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'agent-builder', name: 'Agent builder', highlight: 'Design the call, visually.', summary: 'Design agents, voices and call flows visually',
    points: [
      { title: 'Conversation steps as a graph', icon: GitBranch },
      { title: 'Choose voice, language and AI providers', icon: Mic },
      { title: 'Test calls from the browser', icon: MonitorPlay },
    ],
  },
  {
    slug: 'inbound-calls', name: 'Inbound calls', highlight: 'Answer every call.', summary: 'Answer every call on your own numbers',
    points: [
      { title: 'Route each number to an agent', icon: PhoneIncoming },
      { title: 'Natural interruptions', icon: AudioLines },
      { title: 'Transfer to your team', icon: PhoneForwarded },
    ],
  },
  {
    slug: 'outbound-calls', name: 'Outbound campaigns', highlight: 'Call your list, at your pace.', summary: 'Reach contact lists with paced, retried calls',
    points: [
      { title: 'Upload contacts, set pacing', icon: Upload },
      { title: 'Retries with gaps and limits', icon: Repeat },
      { title: 'Readiness checks before you start', icon: ListChecks },
    ],
  },
  {
    slug: 'ivr-builder', name: 'IVR builder', highlight: 'Menus callers can talk to.', summary: 'Replace keypad menus with spoken ones',
    points: [
      { title: 'Build spoken menus', icon: Workflow },
      { title: 'Route by what callers say', icon: Route },
      { title: 'Runs on live inbound calls', icon: Radio },
    ],
  },
]

const bySlug = (slug: string) => {
  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) throw new Error(`Unknown product: ${slug}`)
  return product
}

export function productMetadata(slug: string): Metadata {
  const { name, summary } = bySlug(slug)
  return { title: `${name} | Yuviz.ai`, description: `${summary}.` }
}

export function ProductPageTemplate({ slug }: { slug: string }) {
  const { name, highlight, summary, points } = bySlug(slug)
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <span className="story-kicker">{name.toUpperCase()}</span>
      <h1>{name}<br/><em>{highlight}</em></h1>
      <p>{summary}.</p>
      <Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link>
    </div></section>
    <section className="story-container story-case-grid">{points.map(({ title, icon: Icon }, index) => <article className="story-case-card" key={title}><span className="story-number">0{index + 1}</span><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2></article>)}</section>
    <section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Link2 size={20}/></span><div><h2>What should your next call achieve?</h2><p>Tell us about your calls and the outcome you want. We’ll show you an agent doing it.</p></div><div className="story-case-actions"><Link href="/pricing" className="story-text-link">See pricing <ArrowRight size={14}/></Link><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></div></div></section>
  </main>
}

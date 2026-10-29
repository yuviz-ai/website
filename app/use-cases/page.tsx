import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { USE_CASES } from '@/components/marketing/UseCasePageTemplate'
import { UseCasePlay } from '@/components/marketing/UseCasePlay'

export const metadata: Metadata = {
  title: 'Use cases | Yuviz.ai',
  description: 'Pick your industry to see the calls Yuviz can take off your team’s plate.',
}

export default function UseCasesIndexPage() {
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <span className="story-kicker">BY INDUSTRY</span>
      <h1>Voice agents for<br/><em>the calls you get.</em></h1>
      <p>Pick your industry to see the calls Yuviz can take off your team’s plate.</p>
    </div></section>
    <section className="story-container story-use-index-grid">{USE_CASES.map(({ slug, name, summary, icon: Icon, lines, starts }) => <article key={slug} className="story-use-index-card"><span className="story-use-icon"><Icon size={20}/></span>
      <UseCasePlay src={`/calls/${slug}.m4a`} voice={`${name} example call`} lines={lines} starts={starts} speakers={lines.map((_, i) => (i % 2 ? 'agent' : 'caller'))}>
        <h2><Link href={`/use-cases/${slug}`} className="story-card-link">{name}</Link></h2><p>{summary}.</p><span className="story-text-link" aria-hidden="true">See use case <ArrowRight size={14}/></span>
      </UseCasePlay></article>)}</section>
    <section className="story-container story-use-index-note"><span/><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></section>
  </main>
}

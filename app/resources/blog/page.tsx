import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Journal | Yuviz.ai',
  description: 'Practical articles about voice systems and conversation design.',
}
export default function BlogPage(){return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">YUVIZ JOURNAL</span><h1>Think clearly about<br/><em>voice AI in the real world.</em></h1><p>Practical articles about voice systems and conversation design. We won’t present draft topics as published case studies or measured product results.</p></div></section><section className="story-container story-article-feature"><Link href="/resources/blog/voice-ai-platform-guide" className="story-case-card"><span className="story-use-label">PUBLISHED GUIDE</span><h2>Voice AI for business calls: design for reliability</h2><p>Call architecture, useful workflows, business context, human handoff, and the quality metrics that matter after the demo.</p><span className="story-article-read">Read the guide <ArrowRight size={15}/></span></Link></section><section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Lightbulb size={20}/></span><div><h2>Have a topic you’d like us to cover?</h2><p>Send us a question from your team’s voice AI work.</p></div><Link href="/contact" className="story-button story-button-primary">Suggest a topic <ArrowRight size={16}/></Link></div></section></main>}

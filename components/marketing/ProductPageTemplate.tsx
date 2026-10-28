import type React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, AudioLines, Check, Network, Workflow } from 'lucide-react'

export interface FeatureItem {
  title: string
  description: string
  icon?: React.ElementType
  tag?: string
}
export interface ProductPageProps {
  badge: string
  title: string
  highlightTitle?: string
  subtitle: string
  features: FeatureItem[]
  specsTitle?: string
  specs?: { label: string; value: string }[]
  codeSnippet?: string
  benefitsTitle?: string
  benefits?: string[]
  ctaTitle?: string
  ctaDescription?: string
}

export function ProductPageTemplate({ badge, title, highlightTitle }: ProductPageProps) {
  const areas = [
    { icon: AudioLines, title: 'Conversation design', description: 'Define what the agent should understand, what context it may use, and how it should respond.' },
    { icon: Workflow, title: 'Actions and boundaries', description: 'Identify required tools, permitted actions, fallback behavior, and when a person should take over.' },
    { icon: Network, title: 'Systems and dependencies', description: 'Map telephony, data, provider, and operational dependencies before implementation.' },
  ]
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero story-subpage-centered"><div className="story-container">
      <span className="story-kicker">PRODUCT AREA · {badge.toUpperCase()}</span>
      <h1>{title}<br/><em>{highlightTitle || 'Explore the workflow.'}</em></h1>
      <p>This page introduces a product area to discuss, not a guarantee that every capability, provider, or integration is enabled today. We’ll confirm the current implementation against your requirements.</p>
      <Link href="/contact" className="story-button story-button-primary">Discuss this workflow <ArrowRight size={16}/></Link>
      <Link href="/#the-approach" className="story-text-link">How Yuviz approaches voice AI <ArrowUpRight size={14}/></Link>
    </div></section>
    <section className="story-container story-case-grid">{areas.map(({icon:Icon,title:areaTitle,description},index)=><article className="story-case-card" key={areaTitle}><span className="story-number">0{index+1} / AREA</span><span className="story-pillar-icon"><Icon size={20}/></span><h2>{areaTitle}</h2><p>{description}</p></article>)}</section>
    <section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Check size={20}/></span><div><h2>Validate the requirements before committing to the outcome.</h2><p>Tell us about the target systems, call flow, data requirements, and success criteria. We’ll distinguish current functionality from additional engineering or third-party dependencies.</p></div><Link href="/contact" className="story-button story-button-primary">Talk to Yuviz <ArrowRight size={16}/></Link></div><p className="story-subpage-disclaimer">No latency, uptime, compliance, customer-result, or integration guarantee is implied by this page.</p><Link href="/pricing" className="story-text-link">Discuss pricing and scope <ArrowRight size={14}/></Link></section>
  </main>
}

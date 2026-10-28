import Link from 'next/link'
import type React from 'react'
import { ArrowRight, Check, Headphones, MessageSquareText, Workflow } from 'lucide-react'

export interface UseCaseWorkflow {
  title: string
  description: string
  icon?: React.ElementType
  tag?: string
}
export interface DialogueLine {
  speaker: string
  role: 'agent' | 'caller' | 'system'
  text: string
  timestamp?: string
}
export interface UseCasePageProps {
  badge: string
  industryName: string
  title: string
  highlightTitle?: string
  subtitle: string
  icon: React.ElementType
  stats: { label: string; value: string }[]
  workflows: UseCaseWorkflow[]
  dialogue: DialogueLine[]
  integrations: string[]
  compliance: string[]
  roiMetrics: { label: string; value: string; desc: string }[]
}

export function UseCasePageTemplate({ industryName }: UseCasePageProps) {
  const examples = [
    { title: 'Answer repeat enquiries', description: 'Identify common questions and define which approved information the agent may use.', icon: MessageSquareText },
    { title: 'Gather relevant details', description: 'Collect the context needed to understand the caller’s request and choose an appropriate next step.', icon: Workflow },
    { title: 'Route when needed', description: 'Define when the conversation should continue, stop, or move to a human representative.', icon: Headphones },
  ]

  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <nav className="story-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/use-cases">Use cases</Link><span>/</span><span>{industryName}</span></nav>
      <span className="story-kicker">ILLUSTRATIVE WORKFLOW · {industryName.toUpperCase()}</span>
      <h1>A clearer path for<br/><em>{industryName.toLowerCase()} conversations.</em></h1>
      <p>Explore how a voice-agent workflow might support repeat enquiries, gather caller context, and guide the next step. The right design depends on your data, systems, safeguards, and operating requirements.</p>
      <Link href="/contact" className="story-button story-button-primary">Discuss this scenario <ArrowRight size={16}/></Link>
    </div></section>
    <section className="story-container story-case-grid">{examples.map(({title,description,icon:Icon},index)=><article className="story-case-card" key={title}><span className="story-number">0{index+1} / EXAMPLE</span><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2><p>{description}</p></article>)}</section>
    <section className="story-container story-case-dialogue">
      <div><span className="story-kicker">CONVERSATION DESIGN</span><h2>Make the next step<br/><em>clear to the caller.</em></h2><p>This short script is illustrative only. It is not a customer transcript, live product demo, or proof of an integrated workflow.</p></div>
      <div className="story-dialogue-card">
        <div className="story-dialogue-line caller"><small>CALLER · EXAMPLE</small><p>“I have a question and I’m not sure which team can help.”</p></div>
        <div className="story-dialogue-line agent"><small>VOICE AGENT · EXAMPLE</small><p>“I can help get you to the right next step. Could you tell me a little more about what you need?”</p></div>
        <div className="story-dialogue-line system"><small>DESIGN NOTE</small><p>Confirm the supported intent, required data, and escalation rule before enabling a real workflow.</p></div>
      </div>
    </section>
    <section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Check size={20}/></span><div><h2>Validate before promising the outcome.</h2><p>We’ll separate what the current implementation supports from any integration, compliance review, or additional engineering that may be required.</p></div><Link href="/contact" className="story-button story-button-primary">Talk to Yuviz <ArrowRight size={16}/></Link></div><p className="story-subpage-disclaimer">No customer metrics, certification claims, provider integrations, or operational guarantees are implied by this example.</p><Link href="/use-cases" className="story-text-link">Browse all scenarios <ArrowRight size={14}/></Link></section>
  </main>
}

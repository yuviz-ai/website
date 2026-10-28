import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, Database, Network, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations and Connectivity | Yuviz.ai',
  description: 'Discuss telephony, business systems, and AI service integration requirements for Yuviz voice workflows.',
}

const areas = [
  { title: 'Telephony and carriers', description: 'Existing phone numbers, SIP trunks, call routing, and the media path that connects a caller to the agent.', icon: Network },
  { title: 'Business systems', description: 'CRM, ticketing, calendar, and internal APIs that may need to inform or receive the result of a conversation.', icon: Database },
  { title: 'AI services and tools', description: 'Speech recognition, language models, voice synthesis, and any tools the agent needs to complete a defined task.', icon: Workflow },
]
export default function ApiIntegrationPage() {
  return <main className="pricing-page"><div className="container-new">
    <div className="max-w-3xl mx-auto text-center mb-12"><span className="eyebrow-new"><span className="eyebrow-dot"/> Connectivity and integration planning</span><h1 className="mt-5 font-[Manrope] text-4xl sm:text-6xl font-extrabold tracking-[-0.055em] text-[#F3F4FC]">Connect the call<br/><span className="gradient-text">to the work around it.</span></h1><p className="mt-5 text-sm sm:text-base leading-8 text-[#9CA6C2]">Integration needs vary by deployment. This page describes the areas to plan for; it is not a list of pre-built connectors or a guarantee that a named provider is already integrated.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{areas.map(area => {const Icon=area.icon; return <article key={area.title} className="capability-card !min-h-0"><div className="capability-icon"><Icon size={20}/></div><h3>{area.title}</h3><p>{area.description}</p></article>})}</div>
    <div className="contact-card max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row sm:items-center gap-5"><div className="flex-1"><h2>Have a specific provider or system in mind?</h2><p className="!m-0">Share the name, the data that needs to move, and the action the agent should take. We’ll confirm what is supported and what needs additional engineering.</p></div><Link href="/contact" className="button-primary shrink-0">Discuss integration <ArrowRight size={16}/></Link></div>
  </div></main>
}

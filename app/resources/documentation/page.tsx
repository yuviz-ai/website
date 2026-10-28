import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, Code2, Network, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developer Resources | Yuviz.ai',
  description: 'Contact Yuviz about implementation details, telephony architecture, integration requirements, and developer resources.',
}

const resources = [
  { title: 'Telephony and media path', description: 'Discuss SIP routing, media transport, audio formats, and the call flow relevant to your environment.', icon: Network },
  { title: 'Conversation orchestration', description: 'Explore how agent configuration, context, response generation, and tool boundaries fit your workflow.', icon: Code2 },
  { title: 'Implementation planning', description: 'Align on current interfaces, required integrations, and the work needed before a pilot.', icon: Terminal },
]
export default function DocumentationPage() {
  return <main className="pricing-page"><div className="container-new">
    <div className="max-w-3xl mx-auto text-center mb-12"><span className="eyebrow-new"><span className="eyebrow-dot"/> Developer resources</span><h1 className="mt-5 font-[Manrope] text-4xl sm:text-6xl font-extrabold tracking-[-0.055em] text-[#F3F4FC]">Understand the system<br/><span className="gradient-text">before you integrate.</span></h1><p className="mt-5 text-sm sm:text-base leading-8 text-[#9CA6C2]">Public SDKs, API reference material, and self-serve quickstarts are not documented here yet. Until those resources are published, contact us to confirm the current interfaces and implementation scope.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{resources.map(item => {const Icon=item.icon; return <article key={item.title} className="capability-card !min-h-0"><div className="capability-icon"><Icon size={20}/></div><h3>{item.title}</h3><p>{item.description}</p></article>})}</div>
    <div className="contact-card max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row sm:items-center gap-5"><BookOpen size={24} className="text-[#C4B5FD] shrink-0"/><div className="flex-1"><h2>Need implementation details?</h2><p className="!m-0">Tell us about your environment and we’ll discuss the relevant architecture.</p></div><Link href="/contact" className="button-primary shrink-0">Contact Yuviz <ArrowRight size={16}/></Link></div>
  </div></main>
}

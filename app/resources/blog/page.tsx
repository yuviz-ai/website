import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, FileText, Lightbulb } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice AI Insights | Yuviz.ai',
  description: 'Practical notes on voice AI, telephony, conversation design, latency, and building reliable customer-call workflows.',
}

const topics = [
  { title: 'Voice AI architecture', description: 'How telephony, streamed audio, turn-taking, and conversation orchestration fit together.', icon: BookOpen },
  { title: 'Designing useful voice workflows', description: 'Start with caller intent, define the next step, and plan the handoff when automation is not enough.', icon: Lightbulb },
  { title: 'Measuring voice-agent quality', description: 'Evaluate latency alongside accuracy, tool success, completion rate, and the cost of a successfully handled call.', icon: FileText },
]
export default function BlogPage() {
  return <main className="pricing-page"><div className="container-new">
    <div className="max-w-3xl mx-auto text-center mb-12"><span className="eyebrow-new"><span className="eyebrow-dot"/> Yuviz journal</span><h1 className="mt-5 font-[Manrope] text-4xl sm:text-6xl font-extrabold tracking-[-0.055em] text-[#F3F4FC]">Notes from the<br/><span className="gradient-text">voice AI journey.</span></h1><p className="mt-5 text-sm sm:text-base leading-8 text-[#9CA6C2]">We’re preparing practical articles on voice systems and conversation design. This page lists editorial topics—not published case studies, customer results, or claims about measured product performance.</p></div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">{topics.map((topic) => { const Icon=topic.icon; return <article key={topic.title} className="capability-card !min-h-0"><div className="capability-icon"><Icon size={20}/></div><h3>{topic.title}</h3><p>{topic.description}</p><span className="capability-tags"><span>Planned topic</span></span></article> })}</div>
    <div className="contact-card max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row sm:items-center gap-5"><div className="flex-1"><h2>Have a topic you’d like us to cover?</h2><p className="!m-0">Send us a question from your team’s voice AI work.</p></div><Link href="/contact" className="button-primary shrink-0">Suggest a topic <ArrowRight size={16}/></Link></div>
  </div></main>
}

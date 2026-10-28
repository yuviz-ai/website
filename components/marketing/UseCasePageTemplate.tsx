import type React from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Bot, MessageSquareText, Workflow } from 'lucide-react'

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

export function UseCasePageTemplate({
  badge, industryName, title, highlightTitle, subtitle, workflows, dialogue,
}: UseCasePageProps) {
  return (
    <main className="pricing-page">
      <div className="container-new">
        <nav className="text-xs text-[#8490AE] mb-8 flex gap-2" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white">Home</Link><span>/</span>
          <Link href="/use-cases" className="hover:text-white">Use cases</Link><span>/</span>
          <span className="text-[#C5CBE0]">{industryName}</span>
        </nav>
        <section className="max-w-4xl mx-auto text-center pb-14">
          <span className="eyebrow-new"><span className="eyebrow-dot" />{badge}</span>
          <h1 className="mt-5 font-[Manrope] text-4xl sm:text-6xl font-extrabold tracking-[-0.055em] leading-[1.08] text-[#F3F4FC]">
            {title} {highlightTitle && <span className="gradient-text">{highlightTitle}</span>}
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-8 text-[#9CA6C2]">Potential scenario: {subtitle}</p><p className="mt-3 max-w-xl mx-auto text-xs leading-6 text-[#7783A2]">Illustrative only. Validate the workflow, available data, integrations, and required safeguards before treating it as deployable.</p>
          <Link href="/contact" className="button-primary mt-7">Discuss this use case <ArrowRight size={16} /></Link>
        </section>

        <section className="pb-14">
          <div className="max-w-3xl mb-7"><span className="eyebrow-new"><span className="eyebrow-dot" /> Example workflows</span><h2 className="mt-3 font-[Manrope] text-2xl sm:text-3xl font-bold text-[#F3F4FC]">Start with a clear job to do.</h2><p className="mt-3 text-sm leading-7 text-[#9CA6C2]">These are possible conversation patterns to explore. Actual actions depend on configured agent behavior, available tools, and the systems connected to a deployment.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflows.map((workflow, idx) => { const Icon = workflow.icon || Workflow; return <article className="capability-card" key={idx}><div className="capability-card-top"><span className="capability-icon"><Icon size={20}/></span><span className="capability-number">0{idx+1}</span></div><h3>{workflow.title}</h3><p>{workflow.description}</p>{workflow.tag && <div className="capability-tags"><span>{workflow.tag}</span></div>}</article> })}
          </div>
        </section>

        {dialogue.length > 0 && <section className="pb-14">
          <div className="max-w-3xl mb-7"><span className="eyebrow-new"><span className="eyebrow-dot" /> Illustrative dialogue</span><h2 className="mt-3 font-[Manrope] text-2xl sm:text-3xl font-bold text-[#F3F4FC]">A conversation could sound like this.</h2><p className="mt-3 text-sm leading-7 text-[#9CA6C2]">This is a written example for discussion—not a live call, customer transcript, or measured product result.</p></div>
          <div className="contact-card max-w-3xl">
            <div className="flex items-center gap-3 border-b border-[rgba(166,176,218,.14)] pb-4 mb-5"><span className="capability-icon"><MessageSquareText size={18}/></span><div><h3 className="text-sm font-semibold text-[#E8EAF8]">{industryName} conversation example</h3><p className="!m-0 text-xs text-[#8994B2]">Illustrative script</p></div></div>
            <div className="grid gap-3">{dialogue.map((line,idx) => <div key={idx} className={`rounded-xl border p-4 ${line.role === 'agent' ? 'border-[rgba(167,139,250,.22)] bg-[rgba(139,92,246,.08)]' : line.role === 'system' ? 'border-dashed border-[rgba(166,176,218,.18)] bg-black/10' : 'border-[rgba(166,176,218,.12)] bg-white/[.025]'}`}><div className="text-[10px] uppercase tracking-wider text-[#9A8BE0] font-bold mb-1">{line.speaker}{line.timestamp ? ` · ${line.timestamp}` : ''}</div><p className="!m-0 text-sm leading-7 text-[#D4D9EB]">{line.text}</p></div>)}</div>
          </div>
        </section>}

        <section className="pb-12">
          <div className="contact-card max-w-4xl mx-auto flex flex-col sm:flex-row gap-5 sm:items-center">
            <span className="brand-mark shrink-0"><Bot size={20}/></span><div className="flex-1"><h2>Validate the workflow before you promise the outcome.</h2><p className="!m-0">Share the systems, constraints, and success criteria for your use case. We’ll separate current capabilities from integration or product work that may be required.</p></div>
            <Link href="/contact" className="button-primary shrink-0">Talk to our team <ArrowRight size={16}/></Link>
          </div>
          <p className="text-center mt-5 text-[11px] text-[#74809E]"><Link href="/use-cases" className="hover:text-white">Browse all use cases <ArrowUpRight size={13} className="inline"/></Link></p>
        </section>
      </div>
    </main>
  )
}

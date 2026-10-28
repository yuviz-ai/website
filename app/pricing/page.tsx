import Link from 'next/link'
import { ArrowRight, AudioLines, Building2, Cpu, PhoneCall, Workflow } from 'lucide-react'

const factors = [
  { icon: PhoneCall, title: 'Call volume and routing', text: 'Expected minutes, inbound or outbound direction, and how calls reach the voice experience.' },
  { icon: Cpu, title: 'AI services and voice choices', text: 'The speech, language-model, and voice services required for the intended workflow.' },
  { icon: Workflow, title: 'Workflow and integrations', text: 'The tools, business systems, handoff rules, and call outcomes that need to be supported.' },
]

export default function PricingPage() {
  return (
    <main className="pricing-page">
      <div className="container-new">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow-new"><span className="eyebrow-dot" /> Pricing and scope</span>
          <h1 className="mt-5 font-[Manrope] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.055em] leading-[1.08] text-[#F3F4FC]">
            Pricing should fit<br /><span className="gradient-text">the work you need done.</span>
          </h1>
          <p className="mt-5 text-sm sm:text-base leading-8 text-[#9CA6C2]">
            Voice AI costs depend on the call path, AI services, usage, and workflow requirements. Rather than publish plan prices or service guarantees that may not fit your deployment, we’ll first understand what you need to build.
          </p>
          <Link href="/contact" className="button-primary mt-7">Discuss your use case <ArrowRight size={16} /></Link>
        </div>

        <div className="pricing-grid">
          {factors.map((factor) => {
            const Icon = factor.icon
            return <article className="pricing-factor" key={factor.title}>
              <span className="capability-icon"><Icon size={20} /></span>
              <strong>{factor.title}</strong>
              <p>{factor.text}</p>
            </article>
          })}
        </div>

        <section className="contact-card max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row sm:items-center gap-5">
          <span className="brand-mark shrink-0"><AudioLines size={20} /></span>
          <div className="flex-1">
            <h2>Need an estimate for a real workflow?</h2>
            <p className="!m-0">Share your expected call patterns, existing telephony, and required integrations. We can scope the conversation before discussing commercial terms.</p>
          </div>
          <Link href="/contact" className="button-secondary shrink-0">Contact Yuviz <ArrowRight size={15} /></Link>
        </section>

        <p className="max-w-3xl mx-auto mt-7 text-center text-xs leading-6 text-[#7F8AA8]">
          This page does not represent a published price list or a commitment to specific third-party integrations, response times, certifications, or service-level agreements. Those details must be confirmed for each deployment.
        </p>
      </div>
    </main>
  )
}

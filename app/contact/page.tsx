'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, AudioLines, Building2, Mail, MessageSquareText, ShieldCheck } from 'lucide-react'

export default function ContactPage() {
  const [prepared, setPrepared] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    useCase: 'Inbound call handling',
    message: '',
  })

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = `Yuviz.ai enquiry — ${formData.useCase}`
    const body = [
      `Name: ${formData.name}`,
      `Work email: ${formData.email}`,
      `Company: ${formData.company || 'Not provided'}`,
      `Use case: ${formData.useCase}`,
      '',
      'How we can help:',
      formData.message || 'Not provided',
    ].join('\n')
    window.location.href = `mailto:hello@yuviz.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  return (
    <main className="contact-page">
      <div className="container-new">
        <div className="max-w-3xl mb-11">
          <span className="eyebrow-new"><span className="eyebrow-dot" /> Talk to the Yuviz team</span>
          <h1 className="mt-5 font-[Manrope] text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.055em] leading-[1.08] text-[#F3F4FC]">
            Start with the call<br /><span className="gradient-text">you want to improve.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base leading-8 text-[#9CA6C2]">
            Tell us about your customer conversations, current telephony setup, and the outcome you want to create. We’ll use that context to discuss fit and next steps.
          </p>
        </div>

        <div className="contact-layout">
          <aside className="space-y-4">
            <div className="contact-card">
              <span className="brand-mark"><AudioLines size={20} /></span>
              <h2 className="mt-5">A practical conversation, not a scripted pitch.</h2>
              <p>We can discuss your use case, call flow, knowledge requirements, integration needs, and what would be needed to validate a first workflow.</p>
              <a href="mailto:hello@yuviz.ai" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C4B5FD] hover:text-white">
                <Mail size={16} /> hello@yuviz.ai <ArrowRight size={15} />
              </a>
            </div>
            <div className="contact-note flex gap-3">
              <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#BDAEFF]" />
              <p className="!m-0">We don’t claim a request has been delivered until a submission service is connected. This form prepares an email in your mail application; you remain in control of sending it.</p>
            </div>
            <div className="contact-note flex gap-3">
              <Building2 size={18} className="mt-0.5 shrink-0 text-[#BDAEFF]" />
              <p className="!m-0">Have a specific telephony or AI provider requirement? Include it in your message so we can distinguish current capabilities from integration work that may be needed.</p>
            </div>
          </aside>

          <section className="contact-card">
            <h2>Tell us what you’re building</h2>
            <p className="!mt-0 !mb-6">Required fields are marked with an asterisk.</p>

            {prepared && (
              <div className="contact-note mb-5" role="status" aria-live="polite">
                Your email application should open with the enquiry details filled in. Please send the draft there. If it didn’t open, email <a className="text-[#C4B5FD] underline" href="mailto:hello@yuviz.ai">hello@yuviz.ai</a> directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="contact-field">
                  <label htmlFor="contact-name">Name *</label>
                  <input id="contact-name" className="contact-input" required autoComplete="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-email">Work email *</label>
                  <input id="contact-email" className="contact-input" required type="email" autoComplete="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="contact-field">
                  <label htmlFor="contact-company">Company</label>
                  <input id="contact-company" className="contact-input" autoComplete="organization" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} placeholder="Company name" />
                </div>
                <div className="contact-field">
                  <label htmlFor="contact-usecase">Primary use case</label>
                  <select id="contact-usecase" className="contact-input" value={formData.useCase} onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}>
                    <option>Inbound call handling</option>
                    <option>Customer support enquiries</option>
                    <option>Appointments and booking enquiries</option>
                    <option>Lead qualification</option>
                    <option>Human handoff / call routing</option>
                    <option>Custom telephony architecture</option>
                  </select>
                </div>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-message">What would you like to improve?</label>
                <textarea id="contact-message" className="contact-input min-h-32 resize-y" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Describe the call flow, current systems, and desired outcome." rows={5} />
              </div>
              <button type="submit" className="button-primary justify-center w-full sm:w-fit">
                Prepare enquiry email <ArrowRight size={16} />
              </button>
              <p className="!m-0 text-[11px] leading-6 text-[#7F8AA8]"><MessageSquareText size={13} className="inline mr-1.5" />This form uses your email application; it does not submit data to a Yuviz backend.</p>
            </form>
          </section>
        </div>

        <div className="mt-10 text-sm text-[#8F9AB8]">Not ready to talk? <Link href="/#platform" className="text-[#C4B5FD] hover:text-white">Explore the platform <ArrowRight size={14} className="inline" /></Link></div>
      </div>
    </main>
  )
}

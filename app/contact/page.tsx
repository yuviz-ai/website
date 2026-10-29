'use client'

import { useState, type FormEvent } from 'react'
import { ArrowRight, AudioLines, Mail } from 'lucide-react'

export default function ContactPage() {
  const [prepared, setPrepared] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', useCase: 'Appointment booking', message: '' })

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = `Yuviz.ai enquiry — ${form.useCase}`
    const body = [
      `Name: ${form.name}`,
      `Work email: ${form.email}`,
      `Company: ${form.company || 'Not provided'}`,
      `Use case: ${form.useCase}`,
      '',
      'Workflow and desired outcome:',
      form.message || 'Not provided',
    ].join('\n')
    window.location.href = `mailto:hello@yuviz.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setPrepared(true)
  }

  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <span className="story-kicker">BOOK A DEMO</span>
      <h1>Tell us about<br/><em>your calls.</em></h1>
      <p>Who calls you, what they need, and what should happen next. We’ll show you an agent handling it.</p>
    </div></section>
    <section className="story-container story-contact-layout">
      <aside className="story-contact-aside">
        <div className="story-contact-card"><span className="story-pillar-icon"><AudioLines size={21}/></span><h2>A real conversation, not a pitch.</h2><p>We’ll look at your call flow, numbers and tools, and show you what Yuviz does today.</p><a href="mailto:hello@yuviz.ai" className="story-text-link"><Mail size={15}/> hello@yuviz.ai <ArrowRight size={14}/></a></div>
      </aside>
      <section className="story-contact-card">
        <h2>Tell us what you’re building</h2>
        <p className="story-contact-muted">Fields marked with an asterisk are required.</p>
        {prepared && <div className="story-contact-note" role="status" aria-live="polite"><Mail size={17}/><p>Your email application should open with a draft. Please send it there. If it didn’t open, email <a href="mailto:hello@yuviz.ai">hello@yuviz.ai</a>.</p></div>}
        <form onSubmit={handleSubmit} className="story-contact-form">
          <div className="story-form-grid">
            <label>Name *<input required autoComplete="name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label>
            <label>Work email *<input required type="email" autoComplete="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label>
          </div>
          <div className="story-form-grid">
            <label>Company<input autoComplete="organization" value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Company name"/></label>
            <label>Primary use case<select value={form.useCase} onChange={e=>setForm({...form,useCase:e.target.value})}><option>Appointment booking</option><option>Front-desk questions</option><option>Lead qualification</option><option>Outbound reminders</option><option>Human handoff</option><option>Other</option></select></label>
          </div>
          <label>What would you like to improve?<textarea rows={5} value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Describe the call flow, current systems, and desired outcome."/></label>
          <button type="submit" className="story-button story-button-primary">Send <ArrowRight size={16}/></button>
          <p className="story-form-foot">This opens an email to hello@yuviz.ai.</p>
        </form>
      </section>
    </section>
  </main>
}

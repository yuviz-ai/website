'use client'

import React, { useState } from 'react'
import { PhoneCall, Mail, Building2, Send, CheckCircle2, Sparkles, ShieldCheck, Clock, Check } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    callVolume: '1,000 - 10,000 mins/mo',
    useCase: 'Inbound Support & Booking',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-28 md:pt-36 pb-20 bg-[#FAF7F2] min-h-screen">
      <div className="container max-w-5xl mx-auto px-4 pt-4">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow justify-center mb-3">
            <span />
            Get in Touch
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#221A1E] leading-[1.1]">
            Talk to Yuviz <span className="font-editorial text-[#B85D3B] font-normal">Voice Architects.</span>
          </h1>
          <p className="text-[#635952] text-sm sm:text-base md:text-lg mt-3.5 leading-relaxed">
            Schedule a live personalized voice demo, request enterprise volume pricing, or deploy a custom pilot agent for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Details & Trust Highlights (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="p-7 rounded-3xl bg-white border border-[#E8DFD4] shadow-sm space-y-6">
              <h3 className="text-lg font-bold text-[#221A1E]">Direct Channels</h3>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/20 text-[#B85D3B] flex items-center justify-center shrink-0">
                  <PhoneCall size={20} />
                </div>
                <div>
                  <p className="text-[11px] text-[#796F68] font-mono uppercase font-semibold">Voice Hotline</p>
                  <a
                    href="tel:+18005559884"
                    className="text-base font-bold text-[#221A1E] hover:text-[#B85D3B] transition-colors"
                  >
                    +1 (800) 555-YUVIZ
                  </a>
                  <p className="text-xs text-[#796F68] mt-0.5">Live telephony testing 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/20 text-[#B85D3B] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[11px] text-[#796F68] font-mono uppercase font-semibold">Email Solutions Desk</p>
                  <a
                    href="mailto:hello@yuviz.ai"
                    className="text-base font-bold text-[#221A1E] hover:text-[#B85D3B] transition-colors"
                  >
                    hello@yuviz.ai
                  </a>
                  <p className="text-xs text-[#796F68] mt-0.5">Guaranteed response under 2 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/20 text-[#B85D3B] flex items-center justify-center shrink-0">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-[11px] text-[#796F68] font-mono uppercase font-semibold">Global Headquarters</p>
                  <p className="text-base font-bold text-[#221A1E]">San Francisco, CA</p>
                  <p className="text-xs text-[#796F68] mt-0.5">500 Howard St, Suite 400</p>
                </div>
              </div>
            </div>

            {/* Fast Enterprise Pilot Box */}
            <div className="p-6 rounded-3xl bg-[#F7EEE7]/70 border border-[#B85D3B]/30 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B85D3B] mb-2">
                <Sparkles size={14} />
                <span>48-Hour Pilot Deployment</span>
              </div>
              <p className="text-xs text-[#635952] leading-relaxed mb-4">
                We can provision dedicated SIP phone lines, ingest your private FAQ and docs, and connect your CRM for a live trial run in less than 48 hours.
              </p>
              <div className="space-y-2 text-xs font-medium text-[#221A1E]">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#B85D3B] stroke-[3]" />
                  <span>Dedicated SIP test number included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#B85D3B] stroke-[3]" />
                  <span>Custom knowledge ingestion &amp; guardrails</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-[#B85D3B] stroke-[3]" />
                  <span>Native CRM webhook synchronization</span>
                </div>
              </div>
            </div>

          </div>

          {/* Contact Form Column (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl bg-white border border-[#E8DFD4] shadow-sm">
              
              {submitted ? (
                <div className="py-14 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#F7EEE7] text-[#B85D3B] flex items-center justify-center mx-auto border border-[#B85D3B]/30 shadow-2xs">
                    <CheckCircle2 size={34} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#221A1E]">Request Received!</h3>
                  <p className="text-[#635952] text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#221A1E]">{formData.name || 'there'}</strong>. A Yuviz Voice AI solutions architect has received your details and will connect with you at <strong className="text-[#221A1E]">{formData.email}</strong> shortly with your demo environment link.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-pill-secondary px-6 py-2.5 text-xs font-semibold cursor-pointer"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-[#E8DFD4] pb-4 mb-2">
                    <h3 className="text-xl font-bold text-[#221A1E]">Request a Demo</h3>
                    <p className="text-xs text-[#796F68] mt-1">
                      Fill out the form below and test an agent built for your specific workflow.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#221A1E] mb-1.5">
                        Full Name <span className="text-[#B85D3B]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Sarah Connor"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] text-sm text-[#221A1E] placeholder:text-[#796F68]/60 focus:outline-none focus:bg-white focus:border-[#B85D3B] focus:ring-2 focus:ring-[#B85D3B]/20 transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#221A1E] mb-1.5">
                        Work Email <span className="text-[#B85D3B]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] text-sm text-[#221A1E] placeholder:text-[#796F68]/60 focus:outline-none focus:bg-white focus:border-[#B85D3B] focus:ring-2 focus:ring-[#B85D3B]/20 transition-all font-medium"
                      />
                    </div>
                  </div>

                  {/* Company & Primary Use Case Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#221A1E] mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Enterprises"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] text-sm text-[#221A1E] placeholder:text-[#796F68]/60 focus:outline-none focus:bg-white focus:border-[#B85D3B] focus:ring-2 focus:ring-[#B85D3B]/20 transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#221A1E] mb-1.5">
                        Primary Use Case
                      </label>
                      <select
                        value={formData.useCase}
                        onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] text-sm text-[#221A1E] focus:outline-none focus:bg-white focus:border-[#B85D3B] focus:ring-2 focus:ring-[#B85D3B]/20 transition-all font-medium cursor-pointer"
                      >
                        <option>Inbound Support &amp; Booking</option>
                        <option>Outbound Sales &amp; Lead Qual</option>
                        <option>Real Estate &amp; Tours</option>
                        <option>Healthcare &amp; Clinic Scheduling</option>
                        <option>FinTech / Banking Inquiries</option>
                        <option>Custom Telephony Architecture</option>
                      </select>
                    </div>
                  </div>

                  {/* Estimated Call Volume */}
                  <div>
                    <label className="block text-xs font-bold text-[#221A1E] mb-1.5">
                      Estimated Monthly Call Volume
                    </label>
                    <select
                      value={formData.callVolume}
                      onChange={(e) => setFormData({ ...formData, callVolume: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] text-sm text-[#221A1E] focus:outline-none focus:bg-white focus:border-[#B85D3B] focus:ring-2 focus:ring-[#B85D3B]/20 transition-all font-medium cursor-pointer"
                    >
                      <option>&lt; 1,000 mins/mo (Trial &amp; Pilot)</option>
                      <option>1,000 - 10,000 mins/mo (Standard Growth)</option>
                      <option>10,000 - 50,000 mins/mo (High Scale)</option>
                      <option>50,000+ mins/mo (Dedicated Enterprise SLA)</option>
                    </select>
                  </div>

                  {/* Message / Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-[#221A1E] mb-1.5">
                      How can Yuviz help your team?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Describe your current phone setup, CRM integrations, or target conversation flow..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] text-sm text-[#221A1E] placeholder:text-[#796F68]/60 focus:outline-none focus:bg-white focus:border-[#B85D3B] focus:ring-2 focus:ring-[#B85D3B]/20 transition-all font-medium resize-none"
                    />
                  </div>

                  {/* High-Impact, Prominent, Highly Visible Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full bg-[#B85D3B] hover:bg-[#9F4827] text-white font-bold text-sm sm:text-base shadow-[0_12px_28px_-6px_rgba(184,93,59,0.45)] hover:shadow-[0_16px_34px_-6px_rgba(184,93,59,0.55)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer"
                    >
                      <span>Submit Request &amp; Book Demo</span>
                      <Send size={16} strokeWidth={2.5} />
                    </button>
                  </div>

                  <p className="text-[11px] text-center text-[#796F68] pt-1">
                    🔒 100% confidential. No spam. A Yuviz telephony architect will reply within 2 hours.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, ChevronRight, Filter, Search, PhoneCall, ArrowUpRight, ArrowRight } from 'lucide-react'

export function ProductShowcase() {
  const [filter, setFilter] = useState<'all' | 'resolved' | 'escalated'>('all')

  const calls = [
    { id: 'call_901', caller: 'Alex Morgan', time: '10:42 AM', duration: '01:45', agent: 'Maya (Reception)', intent: 'Reschedule Appointment', status: 'resolved', action: 'Google Calendar Updated' },
    { id: 'call_902', caller: 'Jordan Reed', time: '10:38 AM', duration: '02:12', agent: 'Ethan (Sales)', intent: 'Pricing & Enterprise Plan', status: 'resolved', action: 'Demo Booked for Fri 3PM' },
    { id: 'call_903', caller: 'Sarah Jenkins', time: '10:25 AM', duration: '03:04', agent: 'Clara (Support)', intent: 'Custom Integration Help', status: 'escalated', action: 'Transferred to Tech Specialist' },
    { id: 'call_904', caller: 'David Chen', time: '10:14 AM', duration: '01:18', agent: 'Maya (Reception)', intent: 'Office Hours Inquiry', status: 'resolved', action: 'Info Shared via SMS' },
    { id: 'call_905', caller: 'Elena Rostova', time: '09:55 AM', duration: '02:40', agent: 'Ethan (Sales)', intent: 'Inbound Lead Qualification', status: 'resolved', action: 'HubSpot Contact Created' },
  ]

  const filteredCalls = calls.filter((c) => filter === 'all' || c.status === filter)

  return (
    <section className="section bg-white/70 border-y border-[#E8DFD4]" id="showcase">
      <div className="container mx-auto px-4">
        <div className="section-heading max-w-2xl">
          <p className="eyebrow">
            <span />
            Real-Time Observability
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            One calm <span className="font-editorial text-[#B85D3B] font-normal">control room.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Observe active calls as they happen, review transcripts, analyze resolution rates, and audit automated business actions in real time.
          </p>
        </div>

        {/* Dashboard Container */}
        <div className="mt-8 border border-[#E8DFD4] rounded-3xl bg-[#FAF7F2] shadow-sm overflow-hidden">
          <div className="p-5 sm:p-7 border-b border-[#E8DFD4] flex flex-wrap items-center justify-between gap-4 bg-white/80">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#796F68] font-semibold">
                Live Telephony Command Center
              </span>
              <h3 className="mt-1 text-xl sm:text-2xl font-bold text-[#221A1E]">
                Call Intelligence Console
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-[#F7EEE7] text-[#B85D3B] border border-[#B85D3B]/20">
                100% Operational
              </span>
            </div>
          </div>

          {/* Metric Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-b border-[#E8DFD4] bg-white divide-y sm:divide-y-0 sm:divide-x divide-[#E8DFD4]">
            <div className="p-5 sm:p-6">
              <span className="text-xs text-[#796F68] font-medium block">Total Conversations Today</span>
              <strong className="block mt-1 text-2xl sm:text-3xl font-bold text-[#221A1E] tracking-tight">1,248</strong>
              <small className="text-xs text-[#796F68] mt-1 block">Across 4 active voice agents</small>
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-xs text-[#796F68] font-medium block">Autonomous Resolution</span>
              <strong className="block mt-1 text-2xl sm:text-3xl font-bold text-[#B85D3B] tracking-tight">84.2%</strong>
              <small className="text-xs text-[#796F68] mt-1 block">Resolved without human escalation</small>
            </div>
            <div className="p-5 sm:p-6">
              <span className="text-xs text-[#796F68] font-medium block">Automated System Actions</span>
              <strong className="block mt-1 text-2xl sm:text-3xl font-bold text-[#B85D3B] tracking-tight">1,051</strong>
              <small className="text-xs text-[#796F68] mt-1 block">Calendar slots & CRM syncs</small>
            </div>
          </div>

          {/* Table Filters & Search */}
          <div className="px-5 py-3.5 border-b border-[#E8DFD4] bg-[#FAF7F2] flex flex-wrap items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2">
              <Filter size={14} className="text-[#796F68]" />
              <span className="text-[11px] font-mono uppercase text-[#796F68] mr-1 font-semibold">Filter:</span>
              {(['all', 'resolved', 'escalated'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-1 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                    filter === f
                      ? 'bg-[#B85D3B] text-white shadow-2xs'
                      : 'bg-white text-[#635952] border border-[#E8DFD4] hover:border-[#B85D3B]/30'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#796F68] font-mono bg-white px-3 py-1.5 rounded-full border border-[#E8DFD4]">
              <Search size={13} />
              <span>Search transcripts...</span>
            </div>
          </div>

          {/* Table Data (Mobile scrollable) */}
          <div className="overflow-x-auto">
            <div className="min-w-[640px] divide-y divide-[#E8DFD4]/70 bg-white">
              <div className="grid grid-cols-12 px-6 py-3 text-[11px] font-mono uppercase tracking-wider text-[#796F68] bg-[#FAF7F2]/60 font-semibold">
                <span className="col-span-4">Caller &amp; Agent</span>
                <span className="col-span-3">Detected Intent</span>
                <span className="col-span-3">Executed Action</span>
                <span className="col-span-2 text-right">Status</span>
              </div>

              {filteredCalls.map((call) => (
                <div
                  key={call.id}
                  className="grid grid-cols-12 items-center px-6 py-4 text-xs hover:bg-[#FAF7F2]/80 transition-colors"
                >
                  <div className="col-span-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#F7EEE7] text-[#B85D3B] font-bold flex items-center justify-center text-xs shrink-0">
                      {call.caller[0]}
                    </span>
                    <div>
                      <span className="block font-bold text-[#221A1E]">{call.caller}</span>
                      <span className="block text-[11px] text-[#796F68] font-mono mt-0.5">{call.agent} &bull; {call.duration}</span>
                    </div>
                  </div>

                  <div className="col-span-3 text-[#221A1E] font-medium">
                    {call.intent}
                  </div>

                  <div className="col-span-3 text-xs font-mono text-[#B85D3B] flex items-center gap-1 font-semibold">
                    <CheckCircle2 size={13} />
                    <span>{call.action}</span>
                  </div>

                  <div className="col-span-2 text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                        call.status === 'resolved'
                          ? 'bg-[#EBF7EE] text-[#2B733D] border border-[#C5E8CC]'
                          : 'bg-[#FAF7F2] text-[#796F68] border border-[#E8DFD4]'
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${call.status === 'resolved' ? 'bg-[#2B733D]' : 'bg-[#796F68]'}`} />
                      {call.status === 'resolved' ? 'Resolved' : 'Escalated'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { num: '01', title: 'Answer', subtitle: 'Instant Pickup', copy: 'Yuviz answers inbound calls immediately or initiates polite outbound connections with sub-300ms voice latency.' },
    { num: '02', title: 'Understand', subtitle: 'Intent & Tone Parsing', copy: 'Advanced speech recognition and natural turn-taking allow callers to speak naturally without rigid phone trees.' },
    { num: '03', title: 'Retrieve', subtitle: 'Grounded RAG Ingestion', copy: 'Yuviz queries your company knowledge base, pricing docs, and policy FAQs to ground every answer in facts.' },
    { num: '04', title: 'Act', subtitle: 'API & Workflow Execution', copy: 'The agent triggers CRM updates, schedules calendar slots, issues confirmation SMS, or performs database lookups.' },
    { num: '05', title: 'Resolve', subtitle: 'Clean Turn-Taking', copy: 'The call ends cleanly with caller questions answered, appointments booked, and next steps confirmed.' },
    { num: '06', title: 'Record', subtitle: 'Full Transcript & Audit', copy: 'Transcripts, audio logs, sentiment metrics, and structured key-value data are instantly saved to your workspace.' },
  ]

  return (
    <section className="section container mx-auto px-4" id="how-it-works">
      <div className="section-heading max-w-2xl">
        <p className="eyebrow">
          <span />
          End-to-End Voice Lifecycle
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
          From hello to <span className="font-editorial text-[#B85D3B] font-normal">done.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
          Trace how a single call moves seamlessly through reception, knowledge lookup, action execution, and audit logging.
        </p>
      </div>

      {/* Steps Navigation Bar (Responsive on mobile) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mt-8 border-b border-[#E8DFD4] pb-4">
        {steps.map((step, idx) => (
          <button
            key={step.num}
            onClick={() => setActiveStep(idx)}
            className={`p-3 rounded-2xl text-left transition-all border cursor-pointer ${
              activeStep === idx
                ? 'border-[#B85D3B] bg-[#F7EEE7] shadow-2xs font-semibold'
                : 'border-transparent text-[#796F68] hover:text-[#221A1E]'
            }`}
          >
            <span className="block font-mono text-xs text-[#B85D3B] font-bold mb-0.5">{step.num}</span>
            <span className="block text-sm tracking-tight text-[#221A1E] font-medium">{step.title}</span>
          </button>
        ))}
      </div>

      {/* Detailed Active Step Focus Card */}
      <div className="mt-6 border border-[#E8DFD4] rounded-3xl bg-white p-6 sm:p-8 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#B85D3B] text-white flex items-center justify-center font-bold text-sm font-mono shadow-2xs">
                {steps[activeStep].num}
              </span>
              <div>
                <span className="text-xs font-mono uppercase text-[#B85D3B] font-bold">{steps[activeStep].subtitle}</span>
                <h3 className="text-2xl font-bold text-[#221A1E]">{steps[activeStep].title}</h3>
              </div>
            </div>

            <p className="mt-4 text-[#635952] text-sm sm:text-base leading-relaxed">{steps[activeStep].copy}</p>

            <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#B85D3B] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-pulse" />
              <span>Verified System Pipeline Step</span>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#E8DFD4] rounded-2xl bg-[#FAF7F2] p-5 shadow-2xs">
            <span className="text-xs font-mono uppercase text-[#796F68] block mb-3 font-semibold">Telemetry Specifications</span>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD4] flex justify-between">
                <span className="text-[#796F68]">Current Step:</span>
                <span className="font-bold text-[#B85D3B]">{steps[activeStep].title}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD4] flex justify-between">
                <span className="text-[#796F68]">Voice Gateway Latency:</span>
                <span className="font-bold text-[#221A1E]">&lt;300ms</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#E8DFD4] flex justify-between">
                <span className="text-[#796F68]">Handshake Status:</span>
                <span className="font-bold text-[#B85D3B]">CONNECTED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step Navigation Dots & Prev/Next */}
        <div className="mt-8 pt-4 border-t border-[#E8DFD4] flex items-center justify-between">
          <button
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            disabled={activeStep === 0}
            className="text-xs font-semibold text-[#796F68] hover:text-[#221A1E] disabled:opacity-30 cursor-pointer"
          >
            &larr; Previous Step
          </button>
          <div className="flex gap-1.5">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  activeStep === i ? 'bg-[#B85D3B] w-6' : 'bg-[#E8DFD4]'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            disabled={activeStep === steps.length - 1}
            className="text-xs font-semibold text-[#B85D3B] hover:underline disabled:opacity-30 cursor-pointer flex items-center gap-1"
          >
            Next Step &rarr;
          </button>
        </div>
      </div>
    </section>
  )
}

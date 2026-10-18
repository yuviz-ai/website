'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Clock,
  DollarSign,
  Zap,
  TrendingUp,
  Database,
  PhoneCall,
  ArrowRight,
  CheckCircle2,
  Cpu
} from 'lucide-react'

// Infinite Trust & Logo Strip (Matches TryOrato's customer logo marquee)
export function TrustStrip() {
  const brandLogos = [
    'Opulenza Real Estate',
    'Serdar Group',
    'Panache Living',
    'Luxora Smart Tech',
    'Apex Financial',
    'Baron Hospitality',
    'Crestview Health',
    'Vanguard Retail'
  ]

  return (
    <section className="border-y border-[#E8DFD4] bg-[#FAF7F2]/70 py-4 sm:py-5 overflow-hidden relative">
      {/* Tight, refined gap between text and marquee logos */}
      <div className="container mx-auto px-4 mb-1.5 sm:mb-2 text-center">
        <p className="text-xs uppercase tracking-[0.18em] text-[#796F68] font-mono font-semibold">
          Trusted by fast-moving teams calling at scale
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16 pr-12">
          {brandLogos.concat(brandLogos).map((brand, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 font-semibold text-sm sm:text-base tracking-tight text-[#796F68]/80 hover:text-[#221A1E] transition-colors whitespace-nowrap cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#B85D3B]/40" />
              <span>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Simple, elegant Real-Time Signal Orchestration box with minimal, calm animation (Strictly Logo Colors)
export function SimpleSignalOrchestrationBox() {
  return (
    <div className="border border-[#E8DFD4] rounded-3xl bg-white p-6 sm:p-8 shadow-[0_15px_35px_-15px_rgba(62,43,37,0.06)] relative overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD4]">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B85D3B] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B85D3B]" />
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#221A1E] font-bold">
            Real-Time Signal Orchestration
          </span>
        </div>
        <span className="text-[11px] font-mono font-semibold text-[#B85D3B] bg-[#F7EEE7] px-2.5 py-0.5 rounded-full border border-[#B85D3B]/20">
          Sub-300ms
        </span>
      </div>

      {/* Simple 3-Node Architecture Flow */}
      <div className="py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative">
          
          {/* Node 1: Caller */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <div className="w-13 h-13 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#3E2B25] shadow-2xs mb-2.5">
              <PhoneCall size={20} className="text-[#3E2B25]" />
            </div>
            <p className="text-xs font-bold text-[#221A1E]">Caller</p>
            <p className="text-[11px] text-[#796F68] mt-0.5">Inbound Audio</p>
          </div>

          {/* Simple Animated Connector 1 */}
          <div className="w-full sm:w-16 flex items-center justify-center">
            <div className="w-16 h-[2px] bg-[#E8DFD4] relative hidden sm:block">
              <motion.div
                animate={{ x: [0, 56, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                className="w-2 h-2 rounded-full bg-[#B85D3B] -top-[3px] absolute"
              />
            </div>
            <span className="sm:hidden text-xs text-[#B85D3B] font-bold">&darr;</span>
          </div>

          {/* Node 2: Yuviz Intelligence Core (Center Emblem) */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <div className="relative">
              <div className="w-15 h-15 rounded-2xl bg-[#F7EEE7] border-2 border-[#B85D3B] flex items-center justify-center text-[#B85D3B] shadow-md mb-2.5">
                <span className="text-xl font-bold font-mono text-[#B85D3B]">Y</span>
              </div>
              <span className="absolute -inset-1 rounded-2xl border border-[#B85D3B]/30 animate-pulse pointer-events-none" />
            </div>
            <p className="text-xs font-bold text-[#221A1E]">Yuviz Voice Engine</p>
            <p className="text-[11px] text-[#B85D3B] font-semibold mt-0.5">Grounded Context</p>
          </div>

          {/* Simple Animated Connector 2 */}
          <div className="w-full sm:w-16 flex items-center justify-center">
            <div className="w-16 h-[2px] bg-[#E8DFD4] relative hidden sm:block">
              <motion.div
                animate={{ x: [0, 56, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 1.25 }}
                className="w-2 h-2 rounded-full bg-[#B85D3B] -top-[3px] absolute"
              />
            </div>
            <span className="sm:hidden text-xs text-[#B85D3B] font-bold">&darr;</span>
          </div>

          {/* Node 3: Systems & CRM */}
          <div className="flex flex-col items-center text-center w-full sm:w-1/3">
            <div className="w-13 h-13 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#3E2B25] shadow-2xs mb-2.5">
              <Database size={20} className="text-[#3E2B25]" />
            </div>
            <p className="text-xs font-bold text-[#221A1E]">Business Systems</p>
            <p className="text-[11px] text-[#796F68] mt-0.5">CRM &amp; Calendar</p>
          </div>

        </div>
      </div>

      {/* Live Sample Turn Preview */}
      <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] space-y-2">
        <div className="flex items-start gap-2.5 text-xs text-[#635952]">
          <span className="font-mono font-bold text-[#3E2B25] shrink-0 text-[11px]">Caller:</span>
          <span className="italic">“Can you book a site visit for tomorrow afternoon at 3 PM?”</span>
        </div>
        <div className="flex items-start gap-2.5 text-xs text-[#221A1E] font-medium pt-1.5 border-t border-[#E8DFD4]">
          <span className="font-mono font-bold text-[#B85D3B] shrink-0 text-[11px]">Yuviz:</span>
          <span>“I have scheduled your visit for tomorrow at 3 PM and updated your calendar.”</span>
        </div>
      </div>

      {/* Minimal Footer Values */}
      <div className="mt-5 pt-4 border-t border-[#E8DFD4] flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-[#796F68]">
        <span className="flex items-center gap-1.5 text-[#221A1E] font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B85D3B]" />
          Direct CRM Sync
        </span>
        <span className="text-[#D9CEC4]">•</span>
        <span>Zero Hold Queues</span>
        <span className="text-[#D9CEC4]">•</span>
        <span className="text-[#B85D3B] font-semibold">100% Verified Actions</span>
      </div>

    </div>
  )
}

// "Six problems. One fix." Signature Comparative Accordion
export function ProblemFixAccordion() {
  const [activeTab, setActiveTab] = useState(0)

  const problems = [
    {
      num: '01',
      title: 'Hiring at scale',
      summary: "Volume spikes 4x on Monday. Recruiters can't move that fast.",
      human: '90 days to hire',
      ai: '90 seconds to scale',
      icon: Clock,
      detail: 'Traditional call centers take months to recruit, train, and onboard agents for seasonal surges. Yuviz spins up 1,000 parallel conversational voice streams instantaneously.',
    },
    {
      num: '02',
      title: 'Paying for dead hours',
      summary: "Reps are paid for 8 hours. They're on calls for 3.",
      human: '$45/hr loaded rep cost',
      ai: '$0.05/min active voice',
      icon: DollarSign,
      detail: 'Eliminate wasted overhead, empty wait times, and idle shift wages. With Yuviz, you only pay for actual connected conversation minutes.',
    },
    {
      num: '03',
      title: 'No real 24/7',
      summary: 'Round-the-clock means night shifts, premiums, and drop-offs.',
      human: '3 shifts + overtime',
      ai: 'Always on, same cost',
      icon: Zap,
      detail: 'Inbound leads calling at 11 PM or on Sunday morning receive immediate, fluent answers, appointment bookings, and zero voicemail delays.',
    },
    {
      num: '04',
      title: 'CRM logging & follow-up lag',
      summary: 'Reps spend hours typing manual call summaries, delaying critical follow-ups.',
      human: 'Manual, delayed notes',
      ai: 'Instant structured sync',
      icon: Database,
      detail: 'Every call transcript, extracted customer intent, and action item is logged into your CRM and calendar the exact millisecond the call disconnects.',
    },
    {
      num: '05',
      title: 'Inconsistent quality',
      summary: 'Call 5 is sharp. Call 95 is exhausted. Conversion swings wildly.',
      human: 'Variable across team',
      ai: 'Identical, every call',
      icon: CheckCircle2,
      detail: 'Every single customer receives the same patient, highly trained, courteous consultation, adhering 100% to your approved compliance guidelines.',
    },
    {
      num: '06',
      title: 'Lost opportunities',
      summary: 'Busy signals and hold times mean callers hang up and call competitors.',
      human: '32% abandoned calls',
      ai: '100% call capture',
      icon: TrendingUp,
      detail: 'Zero hold queue. Every incoming call is picked up on ring zero, guaranteeing zero lost revenue opportunities.',
    },
  ]

  return (
    <div className="mt-20 border border-[#E8DFD4] rounded-3xl bg-white p-6 md:p-10 shadow-sm">
      <div className="max-w-2xl mb-8">
        <p className="eyebrow mb-2">
          <span />
          The Economics of Voice
        </p>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#221A1E]">
          Six problems. <span className="font-editorial text-[#B85D3B] font-normal">One fix.</span>
        </h3>
        <p className="text-sm md:text-base text-[#796F68] mt-2">
          Hiring. Shifts. Dead hours. Consistency. Scale. Solved the moment your phone calls become intelligent.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Accordion Tabs Left */}
        <div className="lg:col-span-5 flex flex-col gap-2.5">
          {problems.map((prob, idx) => {
            const isSelected = activeTab === idx
            return (
              <button
                key={prob.num}
                type="button"
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#FAF7F2] border-[#B85D3B] shadow-2xs'
                    : 'bg-white border-[#E8DFD4] hover:border-[#D9CEC4]'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#B85D3B]' : 'text-[#796F68]'}`}>
                    {prob.num}
                  </span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#221A1E]">
                      {prob.title}
                    </h4>
                    <p className="text-xs text-[#796F68] mt-0.5 line-clamp-1">
                      {prob.summary}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className={`transition-transform duration-200 shrink-0 ${
                    isSelected ? 'text-[#B85D3B] translate-x-1' : 'text-[#D9CEC4]'
                  }`}
                />
              </button>
            )
          })}
        </div>

        {/* Dynamic Solution Comparison Right */}
        <div className="lg:col-span-7">
          <div className="border border-[#E8DFD4] rounded-3xl bg-[#FAF7F2] p-6 sm:p-9 min-h-[380px] flex flex-col justify-between shadow-2xs">
            <div>
              <div className="flex items-center justify-between border-b border-[#E8DFD4] pb-4 mb-6">
                <span className="text-xs font-mono uppercase tracking-wider text-[#B85D3B] font-bold">
                  Problem {problems[activeTab].num} &bull; Comparative Analysis
                </span>
                <span className="text-xs font-mono text-[#796F68]">100% Solved by Yuviz</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-[#221A1E] mb-3">
                {problems[activeTab].title}
              </h4>
              <p className="text-base text-[#B85D3B] font-semibold mb-4">
                {problems[activeTab].summary}
              </p>
              <p className="text-sm text-[#635952] leading-relaxed">
                {problems[activeTab].detail}
              </p>
            </div>

            {/* VS Badge Comparison */}
            <div className="mt-8 pt-5 border-t border-[#E8DFD4] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="flex-1 p-3 rounded-xl bg-white border border-[#E8DFD4] text-center">
                <span className="text-[10px] font-mono uppercase text-[#796F68] block">Old Human Model</span>
                <strong className="text-xs sm:text-sm text-[#635952] font-semibold block mt-0.5">
                  {problems[activeTab].human}
                </strong>
              </div>

              <div className="flex items-center justify-center text-[#B85D3B] font-bold text-sm">
                &rarr;
              </div>

              <div className="flex-1 p-3 rounded-xl bg-[#F7EEE7] border border-[#B85D3B]/30 text-center shadow-2xs">
                <span className="text-[10px] font-mono uppercase text-[#B85D3B] font-semibold block">With Yuviz AI</span>
                <strong className="text-xs sm:text-sm text-[#221A1E] font-bold block mt-0.5">
                  {problems[activeTab].ai}
                </strong>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export function WhatIsYuviz() {
  return (
    <section className="section container mx-auto px-4" id="what-is-yuviz">
      {/* Editorial Heading */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6"
        >
          <p className="eyebrow mb-3">
            <span />
            The Voice AI Platform
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E] leading-[1.08]">
            Meet your <span className="font-editorial text-[#B85D3B] font-normal">AI voice team.</span>
          </h2>
          <p className="mt-5 text-[#635952] text-sm sm:text-base md:text-lg leading-relaxed">
            Yuviz lets businesses deploy intelligent, natural voice agents that handle calls, converse with callers in real time, look up internal knowledge, and execute business actions directly in your software.
          </p>
          <p className="mt-3 text-[#796F68] text-xs sm:text-sm leading-relaxed">
            Whether taking inbound calls during peak hours or conducting polite outbound outreach, your Yuviz voice agents act as dedicated team members that never miss a detail.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#E8DFD4] pt-6">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#221A1E]">100%</p>
              <p className="text-xs text-[#796F68] font-medium mt-1">Call capture rate 24/7</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#221A1E]">&lt;300ms</p>
              <p className="text-xs text-[#796F68] font-medium mt-1">Natural conversational latency</p>
            </div>
          </div>
        </motion.div>

        {/* Clean, Simple, Elegant Signal Orchestration Box (6 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-6"
        >
          <SimpleSignalOrchestrationBox />
        </motion.div>
      </div>

      {/* Six problems. One fix. Comparative Accordion */}
      <ProblemFixAccordion />
    </section>
  )
}

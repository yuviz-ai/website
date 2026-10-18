'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { UserCheck, ShieldCheck, Lock, Key, Server, FileText, ArrowRight, Check } from 'lucide-react'

export function HumanHandoff() {
  return (
    <section className="section bg-white/70 border-y border-[#E8DFD4]" id="human-handoff">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-4">
            <p className="eyebrow">
              <span />
              Graceful Escalation
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
              AI when it can. <span className="font-editorial text-[#B85D3B] font-normal">Humans when it should.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
              Automated voice shouldn&apos;t be an inescapable phone maze. When a call requires nuanced judgment or executive decision-making, Yuviz warm-transfers the caller directly to your team along with real-time transcript context.
            </p>

            <div className="pt-3 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F7EEE7] text-[#B85D3B] flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#221A1E]">Zero Cold Restarts</h4>
                  <p className="text-xs text-[#796F68] leading-relaxed">The human teammate receives an instant 3-bullet summary of what was discussed so the caller never repeats themselves.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F7EEE7] text-[#B85D3B] flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                  <Check size={14} strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#221A1E]">Sentiment-Triggered Hand-Off</h4>
                  <p className="text-xs text-[#796F68] leading-relaxed">Configure automatic handoff triggers based on frustration keywords, low sentiment scores, or explicit human requests.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#E8DFD4] rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-sm">
            <p className="text-xs font-mono uppercase tracking-wider text-[#796F68] mb-5 font-semibold">Visual Warm Transfer Route</p>
            <div className="space-y-3.5 font-mono text-xs">
              <div className="p-4 rounded-2xl bg-white border border-[#E8DFD4] flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#B85D3B]" />
                  <span className="font-bold text-[#221A1E]">01. Yuviz Agent Conversation</span>
                </div>
                <span className="text-[#796F68] font-semibold">In Progress</span>
              </div>

              <div className="p-2 text-center text-[#B85D3B] font-bold text-xs">&darr; Escalation Event Triggered &darr;</div>

              <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30 flex items-center justify-between shadow-2xs">
                <div className="flex items-center gap-2.5">
                  <UserCheck size={16} className="text-[#B85D3B]" />
                  <span className="font-bold text-[#221A1E]">02. Warm Transfer to Support Rep</span>
                </div>
                <span className="text-[#B85D3B] font-bold">Live Context Passed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SecuritySection() {
  const securityItems = [
    { title: 'Tenant Data Isolation', desc: 'Each workspace operates inside strict logical boundaries ensuring zero cross-tenant data leakage.', icon: Server },
    { title: 'Hardware Vault Storage', desc: 'API keys, telephony SIP tokens, and credentials are encrypted in hardware security modules.', icon: Key },
    { title: 'Encrypted Telephony', desc: 'Audio streams and WebRTC sessions use end-to-end TLS 1.3 and SRTP security protocol.', icon: Lock },
    { title: 'Role-Based Access Control', desc: 'Granular permissions ensure staff access only the specific transcripts and agents relevant to them.', icon: ShieldCheck },
  ]

  return (
    <section className="section container mx-auto px-4" id="security">
      <div className="section-heading text-center max-w-2xl mx-auto">
        <p className="eyebrow justify-center">
          <span />
          Enterprise Trust &amp; Security
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
          Your conversations deserve <span className="font-editorial text-[#B85D3B] font-normal">serious protection.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
          Security and data protection are fundamental architectural constraints, not afterthoughts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
        {securityItems.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="p-6 rounded-3xl border border-[#E8DFD4] bg-white hover:border-[#B85D3B]/30 hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#B85D3B] mb-4">
                  <Icon size={19} />
                </div>
                <h4 className="text-base font-bold text-[#221A1E] tracking-tight">{item.title}</h4>
                <p className="mt-2 text-xs sm:text-sm text-[#796F68] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export function WhyYuviz() {
  const principles = [
    { title: 'Natural', desc: 'Speech cadence, turn-taking, and pause handling feel like a real human phone conversation.' },
    { title: 'Action-Driven', desc: 'Agents do far more than talk. They trigger webhooks, query databases, and book appointments.' },
    { title: 'Connected', desc: 'Integrates natively into the CRMs, calendar systems, and software tools your business relies on.' },
    { title: 'Observable', desc: 'Complete visibility into transcripts, sentiment metrics, resolution rates, and audit logs.' },
  ]

  return (
    <section className="section bg-[#FAF7F2] border-y border-[#E8DFD4]" id="why-yuviz">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">
            <span />
            Core Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Built around the <span className="font-editorial text-[#B85D3B] font-normal">conversation.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Four guiding principles that shape how Yuviz voice agents interact with your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-8">
          {principles.map((p, idx) => (
            <div key={p.title} className="p-6 rounded-3xl border border-[#E8DFD4] bg-white hover:shadow-sm transition-all flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#B85D3B] block mb-2">0{idx + 1}</span>
                <h3 className="text-lg font-bold text-[#221A1E] tracking-tight">{p.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#796F68] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

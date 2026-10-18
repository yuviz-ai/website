'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  PhoneCall,
  Brain,
  CheckCircle,
  ArrowRight,
  Sparkles,
  UserCheck,
  Calendar,
  ShieldCheck,
  Zap,
  Headphones,
  Sliders,
  Volume2
} from 'lucide-react'

export function WhyVoice() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      id: 'answer',
      num: '01',
      title: 'ANSWER',
      heading: 'Someone picks up instantly.',
      desc: 'No menus, no endless hold music, no voicemail black holes. The moment a customer calls, Yuviz greets them naturally with zero queue delay.',
      icon: PhoneCall,
      signal: 'Call Connected • 0.0s',
      detail: 'Yuviz handles incoming calls on ring zero, verifying caller identity, retrieving CRM history, and capturing intent from sentence one.',
    },
    {
      id: 'understand',
      num: '02',
      title: 'UNDERSTAND',
      heading: 'The conversation is understood.',
      desc: 'Yuviz listens actively, handles human pauses and interruptions gracefully, parses tone and intent, and retrieves ground-truth knowledge from your business files.',
      icon: Brain,
      signal: 'Context Parsed • Sub-300ms',
      detail: 'Semantic search matches caller questions with exact product specs, inventory, pricing tiers, or calendar openings in real time.',
    },
    {
      id: 'act',
      num: '03',
      title: 'ACT',
      heading: 'The right next step happens.',
      desc: 'Rather than leaving notes for later, Yuviz books appointments, dispatches webhooks, qualifies leads, or hands off to a human with full transcript context.',
      icon: CheckCircle,
      signal: 'Action Executed • 100% Sync',
      detail: 'Direct calendar sync, instant SMS dispatch, or warm human transfer ensure caller resolution before the call ends.',
    },
  ]

  return (
    <section className="section bg-white/70 border-y border-[#E8DFD4]" id="why-voice">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <div className="section-heading max-w-2xl">
          <p className="eyebrow">
            <span />
            Why Voice Matters
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Some conversations are <span className="font-editorial text-[#B85D3B] font-normal">better spoken.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            When high-intent customers need answers, clarity, or immediate action, they pick up the phone. Yuviz gives your business the capacity to answer and convert on every call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-center">
          {/* Interactive Steps Left */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isActive = activeStep === idx
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? 'border-[#B85D3B] bg-[#FAF7F2] shadow-sm'
                      : 'border-[#E8DFD4] bg-white hover:border-[#B85D3B]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-[#B85D3B] text-white' : 'bg-[#FAF7F2] text-[#796F68]'
                      }`}>
                        {step.num}
                      </span>
                      <h3 className="text-sm font-bold tracking-wider text-[#221A1E] uppercase">
                        {step.title}
                      </h3>
                    </div>
                    <Icon size={18} className={isActive ? 'text-[#B85D3B]' : 'text-[#796F68]'} />
                  </div>

                  <h4 className="mt-2.5 text-base sm:text-lg font-semibold text-[#221A1E]">
                    {step.heading}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#635952] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Interactive Visual Display Right */}
          <div className="lg:col-span-6">
            <div className="border border-[#E8DFD4] rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 min-h-[380px] flex flex-col justify-between shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#E8DFD4] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#796F68] font-semibold">
                  Phase {steps[activeStep].num} Architecture
                </span>
                <span className="text-xs font-mono text-[#B85D3B] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-pulse" />
                  {steps[activeStep].signal}
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="my-auto py-6"
                >
                  <div className="w-13 h-13 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/25 flex items-center justify-center text-[#B85D3B] mb-5 shadow-2xs">
                    {(() => {
                      const ActiveIcon = steps[activeStep].icon
                      return <ActiveIcon size={26} />
                    })()}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#221A1E]">
                    {steps[activeStep].heading}
                  </h3>
                  <p className="mt-3 text-sm text-[#635952] leading-relaxed">
                    {steps[activeStep].detail}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-[#E8DFD4] pt-4 flex items-center justify-between text-xs text-[#796F68]">
                <div className="flex gap-2">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeStep === i ? 'w-8 bg-[#B85D3B]' : 'w-2 bg-[#E8DFD4]'
                      }`}
                      aria-label={`Go to step ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="font-mono text-[11px]">Click any step to inspect flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function AgentTypes() {
  const agents = [
    {
      title: 'AI Receptionist',
      tag: 'Front Desk & Routing',
      desc: 'Welcomes every caller, answers frequently asked questions, qualifies intent, and transfers to departments.',
      icon: Headphones,
      metrics: '100% Call Coverage',
    },
    {
      title: 'Sales Agent',
      tag: 'Inbound Qualification',
      desc: 'Engages inbound prospects, answers pricing and capability questions, and schedules calendar appointments.',
      icon: Zap,
      metrics: '3x Booking Velocity',
    },
    {
      title: 'Support Agent',
      tag: 'Tier 1 Resolution',
      desc: 'Checks order status, retrieves policy knowledge, and resolves repetitive caller queries gracefully.',
      icon: ShieldCheck,
      metrics: '70% Instant Resolution',
    },
    {
      title: 'Appointment Agent',
      tag: 'Scheduling & Reminders',
      desc: 'Handles bookings, reschedules, cancellations, and sends immediate SMS confirmations without hold times.',
      icon: Calendar,
      metrics: 'Zero Scheduling Overhead',
    },
    {
      title: 'Lead Qualification',
      tag: 'Prospect Screening',
      desc: 'Asks structured qualifying questions, logs answers into CRM fields, and flags high-priority deals.',
      icon: UserCheck,
      metrics: 'Structured CRM Logging',
    },
    {
      title: 'Outbound Agent',
      tag: 'Follow-ups & Surveys',
      desc: 'Executes compliant follow-ups, re-engages dormant leads, and confirms appointment attendance at scale.',
      icon: Sparkles,
      metrics: 'Automated Outreach',
    },
  ]

  return (
    <section className="section container mx-auto px-4" id="agents">
      <div className="section-heading max-w-2xl">
        <p className="eyebrow">
          <span />
          Specialized Conversational AI
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
          Give every conversation <span className="font-editorial text-[#B85D3B] font-normal">an agent.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
          Deploy specialized AI voice agents tailored to your business functions. Each agent operates with defined guardrails, knowledge bases, and custom actions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8">
        {agents.map((agent) => {
          const Icon = agent.icon
          return (
            <div
              key={agent.title}
              className="p-6 rounded-3xl border border-[#E8DFD4] bg-white hover:border-[#B85D3B]/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#B85D3B] group-hover:bg-[#B85D3B] group-hover:text-white transition-colors">
                    <Icon size={19} />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-[#B85D3B] px-2.5 py-0.5 rounded-full bg-[#F7EEE7] border border-[#B85D3B]/20">
                    {agent.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#221A1E] tracking-tight group-hover:text-[#B85D3B] transition-colors">
                  {agent.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#635952] leading-relaxed">
                  {agent.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E8DFD4] flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-[#221A1E]">{agent.metrics}</span>
                <a
                  href="#demo"
                  className="text-xs font-semibold text-[#B85D3B] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  Test agent <ArrowRight size={12} />
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

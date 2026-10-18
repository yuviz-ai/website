'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PhoneIncoming, PhoneOutgoing, Users, BarChart3, Check, ArrowRight } from 'lucide-react'

export function InboundOutbound() {
  const [mode, setMode] = useState<'inbound' | 'outbound'>('inbound')

  return (
    <section className="section bg-white/70 border-y border-[#E8DFD4]" id="inbound-outbound">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">
            <span />
            Dual Direction Telephony
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Inbound reception &amp; <span className="font-editorial text-[#B85D3B] font-normal">outbound scale.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Toggle between inbound call answering and automated outbound campaign execution. Yuviz provides complete coverage for both channels.
          </p>

          {/* Segmented Mode Selector */}
          <div className="mt-7 inline-flex p-1.5 rounded-full bg-[#FAF7F2] border border-[#E8DFD4]">
            <button
              onClick={() => setMode('inbound')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                mode === 'inbound'
                  ? 'bg-[#B85D3B] text-white shadow-2xs'
                  : 'text-[#635952] hover:text-[#221A1E]'
              }`}
            >
              <PhoneIncoming size={15} /> Inbound Mode
            </button>
            <button
              onClick={() => setMode('outbound')}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                mode === 'outbound'
                  ? 'bg-[#B85D3B] text-white shadow-2xs'
                  : 'text-[#635952] hover:text-[#221A1E]'
              }`}
            >
              <PhoneOutgoing size={15} /> Outbound Campaign
            </button>
          </div>
        </div>

        {/* Dynamic Display Panel */}
        <div className="mt-10 border border-[#E8DFD4] rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 shadow-sm">
          <AnimatePresence mode="wait">
            {mode === 'inbound' ? (
              <motion.div
                key="inbound"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold text-[#B85D3B] uppercase tracking-wider">Inbound Telephony Route</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#221A1E]">Never miss an inbound customer call.</h3>
                  <p className="text-sm text-[#635952] leading-relaxed">
                    When callers reach your business, Yuviz picks up on ring zero. It absorbs peak traffic spikes, answers frequently asked questions, schedules appointments, and transfers complex calls.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#221A1E] font-medium pt-2">
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#B85D3B]" /> Zero hold queues during peak call rushes
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#B85D3B]" /> Automatic caller ID verification &amp; CRM history sync
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#B85D3B]" /> Contextual warm transfer with real-time summary text
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 border border-[#E8DFD4] rounded-2xl bg-white p-6 shadow-2xs">
                  <p className="text-xs font-mono uppercase text-[#796F68] mb-4 font-semibold">Live Inbound Route Metrics</p>
                  <div className="space-y-2.5 font-mono text-xs">
                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] flex justify-between items-center">
                      <span className="text-[#796F68]">Caller Phone Pickup:</span>
                      <span className="font-bold text-[#221A1E]">Ring 0 (Instant)</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] flex justify-between items-center">
                      <span className="text-[#796F68]">Grounded Document Lookup:</span>
                      <span className="font-bold text-[#B85D3B]">240ms Turnaround</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] flex justify-between items-center">
                      <span className="text-[#796F68]">Calendar Sync:</span>
                      <span className="font-bold text-[#B85D3B]">Confirmed in Real Time</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="outbound"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-xs font-mono font-bold text-[#B85D3B] uppercase tracking-wider">Outbound Telephony Campaigns</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#221A1E]">Conversations conducted at scale.</h3>
                  <p className="text-sm text-[#635952] leading-relaxed">
                    Launch permissioned outbound campaigns for appointment reminders, warm lead qualification, payment follow-ups, and customer feedback.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#221A1E] font-medium pt-2">
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#B85D3B]" /> Compliant, permissioned outreach schedules
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#B85D3B]" /> Dynamic personalized context loaded per contact
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Check size={16} className="text-[#B85D3B]" /> Real-time campaign conversion and disposition tracking
                    </li>
                  </ul>
                </div>

                <div className="lg:col-span-6 border border-[#E8DFD4] rounded-2xl bg-white p-6 shadow-2xs">
                  <p className="text-xs font-mono uppercase text-[#796F68] mb-4 font-semibold">Active Campaign Telemetry</p>
                  <div className="grid grid-cols-2 gap-3 font-mono text-xs mb-3">
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4]">
                      <span className="text-[#796F68] block">Queued Contacts</span>
                      <span className="text-2xl font-bold text-[#221A1E] mt-1 block">2,480</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4]">
                      <span className="text-[#796F68] block">Connected Calls</span>
                      <span className="text-2xl font-bold text-[#B85D3B] mt-1 block">1,124</span>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7EEE7] border border-[#B85D3B]/20 text-xs font-mono text-center">
                    <span className="text-[#B85D3B] font-bold">Campaign Status:</span> Active &bull; 918 Completed Conversations
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export function UseCaseMatrix() {
  const [selectedRow, setSelectedRow] = useState<number | null>(0)

  const rows = [
    {
      case: 'Sales & Lead Qualification',
      yuviz: 'Engages inbound prospects, checks qualification criteria, and schedules meetings straight into rep calendars.',
      outcome: '3x faster lead response time & zero lost deals.',
    },
    {
      case: 'Customer Support Desk',
      yuviz: 'Resolves repetitive questions, verifies order status, retrieves policy docs, and escalates when needed.',
      outcome: '70% reduction in support queue wait times.',
    },
    {
      case: 'Front Desk & Reception',
      yuviz: 'Greets callers warmly, identifies intent, routes calls to specific extensions, and takes overflow 24/7.',
      outcome: '100% call capture with zero missed phone calls.',
    },
    {
      case: 'Appointments & Rescheduling',
      yuviz: 'Coordinates open appointment slots, reschedules existing bookings, and dispatches instant SMS confirmations.',
      outcome: 'Eliminates phone tag and reduces no-shows.',
    },
    {
      case: 'Outbound Reminders & Feedback',
      yuviz: 'Conducts polite reminder calls for upcoming appointments, service renewals, and customer check-ins.',
      outcome: 'Higher appointment completion rates at scale.',
    },
  ]

  return (
    <section className="section container mx-auto px-4" id="use-case-matrix">
      <div className="section-heading max-w-2xl">
        <p className="eyebrow">
          <span />
          Use Case Comparison Matrix
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
          What should your agent <span className="font-editorial text-[#B85D3B] font-normal">handle?</span>
        </h2>
        <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
          Scan common enterprise voice workflows and see what Yuviz automates versus the immediate business outcome.
        </p>
      </div>

      <div className="mt-8 border border-[#E8DFD4] rounded-3xl bg-white overflow-hidden shadow-sm">
        <div className="hidden md:flex items-center justify-between p-4 border-b border-[#E8DFD4] bg-[#FAF7F2] text-xs font-mono uppercase text-[#796F68] font-semibold">
          <span className="w-1/4">Use Case</span>
          <span className="w-1/2">What Yuviz Does</span>
          <span className="w-1/4 text-right">Business Outcome</span>
        </div>

        {rows.map((row, idx) => (
          <div
            key={row.case}
            onClick={() => setSelectedRow(selectedRow === idx ? null : idx)}
            className={`p-5 sm:p-6 border-b border-[#E8DFD4]/70 transition-all cursor-pointer ${
              selectedRow === idx ? 'bg-[#FAF7F2]' : 'bg-white hover:bg-[#FAF7F2]/60'
            }`}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <span className="w-full md:w-1/4 font-bold text-[#221A1E] text-base tracking-tight">{row.case}</span>
              <p className="w-full md:w-1/2 text-xs sm:text-sm text-[#635952] leading-relaxed">{row.yuviz}</p>
              <div className="w-full md:w-1/4 md:text-right">
                <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[#B85D3B] px-3 py-1 rounded-full bg-[#F7EEE7] border border-[#B85D3B]/20">
                  {row.outcome}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Clock, User, ShieldAlert, Share2, Layers, CheckCircle2 } from 'lucide-react'

export function TranscriptDemo() {
  const [selectedTurn, setSelectedTurn] = useState(0)

  const transcript = [
    { time: '00:02', speaker: 'Yuviz Agent', text: 'Hello, thank you for calling Yuviz AI support. My name is Maya. How can I help you today?', node: 'Call Started &bull; Greeting Delivered' },
    { time: '00:08', speaker: 'Caller', text: 'Hi Maya, I submitted a refund request yesterday for order #9821. Has it been processed yet?', node: 'Intent Parsed &bull; Order #9821 Identified' },
    { time: '00:14', speaker: 'Yuviz Agent', text: 'Let me look that up for you right now... Yes, your refund of $149 was approved and issued to your original payment card this morning.', node: 'Stripe API Ingestion &bull; Grounded Refund Verification' },
    { time: '00:22', speaker: 'Caller', text: 'Great! How long will it take to show up on my bank statement?', node: 'Follow-up Question &bull; RAG Knowledge Search' },
    { time: '00:28', speaker: 'Yuviz Agent', text: 'It typically takes 3 to 5 business days depending on your bank. I have also sent a confirmation receipt to your registered email.', node: 'Resolution Delivered &bull; Email Receipt Dispatched' },
  ]

  return (
    <section className="section bg-[#FAF7F2] border-y border-[#E8DFD4]" id="transcript-demo">
      <div className="container mx-auto px-4">
        <div className="section-heading max-w-2xl">
          <p className="eyebrow">
            <span />
            Call Intelligence &amp; Audit Trail
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Every conversation <span className="font-editorial text-[#B85D3B] font-normal">leaves a trail.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Click any line in the transcript to inspect the exact system node, API lookups, and sentiment metrics logged during the call.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
          {/* Interactive Transcript List Left */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {transcript.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTurn(idx)}
                className={`p-4 sm:p-4.5 rounded-2xl border transition-all cursor-pointer ${
                  selectedTurn === idx
                    ? 'border-[#B85D3B] bg-white shadow-2xs'
                    : 'border-[#E8DFD4] bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                  <span className={item.speaker === 'Yuviz Agent' ? 'text-[#B85D3B] font-bold' : 'text-[#221A1E] font-bold'}>
                    {item.speaker}
                  </span>
                  <span className="text-[#796F68]">{item.time}</span>
                </div>
                <p className="text-xs sm:text-sm text-[#221A1E] leading-relaxed font-medium">{item.text}</p>
              </div>
            ))}
          </div>

          {/* System Timeline Inspector Right */}
          <div className="lg:col-span-5 border border-[#E8DFD4] rounded-3xl bg-white p-6 shadow-sm min-h-[340px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-[#E8DFD4] pb-3 mb-4">
                <span className="text-xs font-mono uppercase text-[#796F68] font-semibold">Node Telemetry Inspector</span>
                <span className="text-xs font-mono text-[#B85D3B] font-bold">Turn 0{selectedTurn + 1} Selected</span>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4]">
                  <span className="text-[10px] font-mono uppercase text-[#796F68] block mb-1 font-semibold">Executed Pipeline Node</span>
                  <p className="text-xs sm:text-sm font-mono font-bold text-[#221A1E]">{transcript[selectedTurn].node}</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/20 space-y-2 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-[#796F68]">Turn Timestamp:</span>
                    <span className="font-bold text-[#221A1E]">{transcript[selectedTurn].time}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#796F68]">Speech Confidence:</span>
                    <span className="font-bold text-[#B85D3B]">99.4%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#796F68]">Sentiment Score:</span>
                    <span className="font-bold text-[#221A1E]">0.96 (Positive)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-[#E8DFD4] pt-4 flex items-center justify-between text-xs font-mono text-[#796F68]">
              <span>Audit Trail Secured</span>
              <span className="text-[#B85D3B] font-semibold">100% Verifiable</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Integrations() {
  const integrations = [
    { name: 'Google Calendar', category: 'Scheduling', status: 'Native Sync' },
    { name: 'HubSpot CRM', category: 'Lead Sync', status: 'Native Sync' },
    { name: 'Salesforce', category: 'Enterprise CRM', status: 'API Supported' },
    { name: 'Zendesk', category: 'Support Desk', status: 'Native Sync' },
    { name: 'Stripe', category: 'Payments', status: 'API Supported' },
    { name: 'Webhooks', category: 'Custom Events', status: 'Real-Time' },
  ]

  return (
    <section className="section container mx-auto px-4" id="integrations">
      <div className="section-heading text-center max-w-2xl mx-auto">
        <p className="eyebrow justify-center">
          <span />
          Workflow Ecosystem
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
          Fits into the way your business <span className="font-editorial text-[#B85D3B] font-normal">already works.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
          Yuviz connects directly with your existing CRMs, calendar systems, customer support desks, and custom API webhooks.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mt-8">
        {integrations.map((item) => (
          <div
            key={item.name}
            className="p-5 rounded-3xl border border-[#E8DFD4] bg-white hover:border-[#B85D3B]/40 hover:shadow-sm transition-all text-center group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#B85D3B] font-bold text-sm mx-auto mb-3 group-hover:bg-[#B85D3B] group-hover:text-white transition-colors">
                {item.name[0]}
              </div>
              <h4 className="text-xs sm:text-sm font-bold text-[#221A1E] tracking-tight">{item.name}</h4>
              <span className="block text-[11px] text-[#796F68] mt-0.5 font-mono">{item.category}</span>
            </div>
            <span className="inline-block mt-3 text-[10px] font-mono text-[#B85D3B] font-bold px-2 py-0.5 rounded-full bg-[#F7EEE7] border border-[#B85D3B]/20">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

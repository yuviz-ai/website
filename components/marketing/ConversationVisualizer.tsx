'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, ArrowRight, Database, Check, RefreshCw, Cpu, CheckCircle } from 'lucide-react'

export function ConversationVisualizer() {
  const [activeStep, setActiveStep] = useState(0)

  const timeline = [
    {
      caller: '“Can I reschedule my property viewing to Friday afternoon?”',
      agentResponse: '“Of course! Let me check the schedule for Friday afternoon.”',
      systemState: 'Querying Calendar & Listing DB',
      action: 'Available slots: Friday 2:30 PM & 4:00 PM',
      status: 'In Progress',
    },
    {
      caller: '“Friday at 2:30 PM works great for me.”',
      agentResponse: '“You are all set for Friday at 2:30 PM with our viewing specialist, Alex. I just sent a confirmation SMS to your mobile.”',
      systemState: 'Executing CRM Slot & Twilio SMS',
      action: 'Viewing ID #8492 booked & SMS dispatched',
      status: 'Action Completed',
    },
    {
      caller: '“Awesome, thanks for your help!”',
      agentResponse: '“You are very welcome! Have a wonderful day.”',
      systemState: 'Call Wrap-up & Sentiment Logging',
      action: 'Transcript saved & positive sentiment 0.99',
      status: 'Conversation Resolved',
    },
  ]

  return (
    <section className="section bg-white/70 border-y border-[#E8DFD4]" id="conversation-visualizer">
      <div className="container mx-auto px-4">
        <div className="section-heading max-w-2xl">
          <p className="eyebrow">
            <span />
            Interactive Call Pipeline
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Watch a conversation <span className="font-editorial text-[#B85D3B] font-normal">unfold.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Yuviz goes beyond speech. Watch how spoken requests trigger instant knowledge lookups, API actions, and verified resolutions.
          </p>
        </div>

        {/* Visualization Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
          {/* Conversation Transcript Stream Left */}
          <div className="lg:col-span-6 flex flex-col gap-3.5">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'border-[#B85D3B] bg-[#FAF7F2] shadow-sm'
                    : 'border-[#E8DFD4] bg-white hover:border-[#B85D3B]/40'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono mb-2.5">
                  <span className="text-[#796F68] font-semibold">Turn 0{idx + 1}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                    activeStep === idx
                      ? 'bg-[#B85D3B] text-white'
                      : 'bg-[#FAF7F2] text-[#796F68] border border-[#E8DFD4]'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-start gap-2.5">
                    <span className="text-[10px] font-mono font-bold text-[#796F68] bg-white border border-[#E8DFD4] px-1.5 py-0.5 rounded mt-0.5">CALLER</span>
                    <p className="text-xs sm:text-sm font-semibold text-[#221A1E]">{item.caller}</p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <span className="text-[10px] font-mono font-bold text-[#B85D3B] bg-[#F7EEE7] px-1.5 py-0.5 rounded mt-0.5">YUVIZ</span>
                    <p className="text-xs sm:text-sm text-[#635952] leading-relaxed font-medium">{item.agentResponse}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Realtime Backend System Execution Display Right */}
          <div className="lg:col-span-6">
            <div className="border border-[#E8DFD4] rounded-3xl bg-[#FAF7F2] p-6 sm:p-8 min-h-[380px] flex flex-col justify-between shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#E8DFD4] pb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#796F68] font-semibold">Backend Signal Monitor</span>
                <span className="text-xs font-mono text-[#B85D3B] font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-pulse" /> Live Telephony
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="my-auto space-y-4 py-4"
                >
                  <div className="p-4 rounded-2xl border border-[#E8DFD4] bg-white shadow-2xs">
                    <span className="text-[10px] font-mono uppercase text-[#796F68] block mb-1 font-semibold">State Machine Handshake</span>
                    <p className="text-base sm:text-lg font-bold text-[#221A1E] flex items-center gap-2">
                      <Cpu size={18} className="text-[#B85D3B]" />
                      {timeline[activeStep].systemState}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl border border-[#B85D3B]/30 bg-[#F7EEE7] shadow-2xs">
                    <span className="text-[10px] font-mono uppercase text-[#B85D3B] font-bold block mb-1">Executed Action</span>
                    <p className="text-xs sm:text-sm font-mono text-[#221A1E] font-bold flex items-center gap-2">
                      <CheckCircle size={16} className="text-[#B85D3B]" />
                      {timeline[activeStep].action}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="border-t border-[#E8DFD4] pt-4 flex items-center justify-between text-xs font-mono text-[#796F68]">
                <span>Voice Stream Latency &lt;300ms</span>
                <span className="text-[#B85D3B] font-semibold">Step {activeStep + 1} of 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function KnowledgeSection() {
  const [selectedDoc, setSelectedDoc] = useState(0)

  const docs = [
    {
      name: 'Return_Policy_2026.pdf',
      type: 'Policy Document',
      excerpt: 'Customers are eligible for a 100% full refund within 30 days of purchase upon providing order ID.',
      question: '“What is your refund policy?”',
      answer: '“You can request a full refund within 30 days of your purchase simply by providing your order number.”',
    },
    {
      name: 'Pricing_Plans.docx',
      type: 'Product Specs',
      excerpt: 'Starter plan is $49/mo including 500 voice minutes. Pro plan is $199/mo including unlimited seats.',
      question: '“How much is the Starter plan?”',
      answer: '“Our Starter plan is $49 per month and includes 500 voice minutes with all agent features enabled.”',
    },
    {
      name: 'Office_Hours_FAQ.txt',
      type: 'Operational FAQ',
      excerpt: 'We are open Monday through Friday from 8:00 AM to 6:00 PM, and Saturdays from 9:00 AM to 1:00 PM.',
      question: '“Are you open on Saturdays?”',
      answer: '“Yes, we are open on Saturdays from 9:00 AM to 1:00 PM.”',
    },
  ]

  return (
    <section className="section container mx-auto px-4" id="knowledge">
      <div className="section-heading max-w-2xl">
        <p className="eyebrow">
          <span />
          Grounded RAG Knowledge
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
          Your agent knows <span className="font-editorial text-[#B85D3B] font-normal">your business.</span>
        </h2>
        <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
          No hallucinated answers or generic AI scripts. Yuviz grounds every spoken response directly in your verified business files, FAQs, and documentation.
        </p>
      </div>

      {/* Interactive RAG Playground */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-center">
        {/* Knowledge Source Selection Left */}
        <div className="lg:col-span-5 flex flex-col gap-3">
          <p className="text-xs font-mono uppercase tracking-wider text-[#796F68] mb-1 font-semibold">Connected Business Documents</p>
          {docs.map((doc, idx) => (
            <div
              key={doc.name}
              onClick={() => setSelectedDoc(idx)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                selectedDoc === idx
                  ? 'border-[#B85D3B] bg-[#F7EEE7] shadow-2xs'
                  : 'border-[#E8DFD4] bg-white hover:bg-[#FAF7F2]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-mono font-bold text-[#B85D3B]">{doc.type}</span>
                <span className="text-[10px] font-mono text-[#B85D3B] font-semibold">RAG Verified</span>
              </div>
              <p className="text-sm font-bold text-[#221A1E]">{doc.name}</p>
              <p className="text-xs text-[#796F68] mt-1 line-clamp-2 leading-relaxed">{doc.excerpt}</p>
            </div>
          ))}
        </div>

        {/* Live Grounded Response Right */}
        <div className="lg:col-span-7 border border-[#E8DFD4] rounded-3xl bg-white p-6 sm:p-8 min-h-[360px] flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between border-b border-[#E8DFD4] pb-3">
            <span className="text-xs font-mono uppercase tracking-wider text-[#796F68] font-semibold">Knowledge-Grounded QA Test</span>
            <span className="text-xs font-mono text-[#B85D3B] font-bold">100% Grounded</span>
          </div>

          <div className="my-auto space-y-3.5 py-4">
            <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4]">
              <span className="text-[10px] font-mono uppercase text-[#796F68] font-bold block mb-1">Customer Question</span>
              <p className="text-sm sm:text-base font-semibold text-[#221A1E]">{docs[selectedDoc].question}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30">
              <span className="text-[10px] font-mono uppercase text-[#B85D3B] font-bold block mb-1">Yuviz Agent Grounded Answer</span>
              <p className="text-sm sm:text-base text-[#221A1E] leading-relaxed font-medium">{docs[selectedDoc].answer}</p>
            </div>
          </div>

          <div className="border-t border-[#E8DFD4] pt-4 flex items-center justify-between text-xs font-mono text-[#796F68]">
            <span>File: {docs[selectedDoc].name}</span>
            <span className="text-[#B85D3B] font-semibold">Zero Hallucinations</span>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, Settings, Database, Wrench, ShieldCheck, Check, Sparkles, Play } from 'lucide-react'

type TabKey = 'voice' | 'knowledge' | 'personality' | 'tools' | 'handoff'

export function AgentBuilderVisual() {
  const [activeTab, setActiveTab] = useState<TabKey>('voice')
  const [voiceSpeed, setVoiceSpeed] = useState('1.0x')
  const [selectedVoice, setSelectedVoice] = useState('Maya (Indian English & Hinglish)')

  const tabs: { id: TabKey; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }[] = [
    { id: 'voice', label: 'Voice & Latency', icon: Mic },
    { id: 'knowledge', label: 'Knowledge (RAG)', icon: Database },
    { id: 'personality', label: 'Prompt & Tone', icon: Settings },
    { id: 'tools', label: 'API & Workflows', icon: Wrench },
    { id: 'handoff', label: 'Human Handoff', icon: ShieldCheck },
  ]

  const tabContents: Record<TabKey, { title: string; desc: string; options: string[] }> = {
    voice: {
      title: 'Voice Persona & Dialect Tuning',
      desc: 'Select a natural-sounding voice model tuned for human speech cadence, regional accents, and sub-300ms turnaround.',
      options: ['Maya (Front Desk Receptionist)', 'Ethan (Executive Sales Desk)', 'Elena (Customer Support)', 'Marcus (Technical Support Desk)'],
    },
    knowledge: {
      title: 'Ground-Truth Document Knowledge',
      desc: 'Connect FAQs, website URLs, PDF brochures, and internal Notion/Confluence docs for verified answers without hallucinations.',
      options: ['Pricing_Matrix_2026.pdf (Synced)', 'Property_Availability_FAQ.docx (Synced)', 'Catalog_Inventory_Index (Live)', 'Customer_Support_KB (Synced)'],
    },
    personality: {
      title: 'Conversational Boundary & Tone',
      desc: 'Define custom system instructions, polite greetings, brevity thresholds, and strict compliance guardrails.',
      options: ['Tone: Courteous, Concise & Action-Oriented', 'Greeting: "Thank you for calling Yuviz, how can I help you today?"', 'Turn Cadence: Natural Human Pauses', 'Interruptibility: Active (Instant Stop on User Speech)'],
    },
    tools: {
      title: 'Action Trigger & Telephony Tools',
      desc: 'Give agents permission to query your CRM, check calendar slots, and dispatch instant SMS confirmations.',
      options: ['Google Calendar API (Active)', 'HubSpot / Salesforce Sync (Active)', 'Stripe Payment Lookup (Active)', 'Twilio / Telnyx SIP Trunk (Connected)'],
    },
    handoff: {
      title: 'Contextual Human Escalation',
      desc: 'Configure exact conditions when an agent warms transfers a caller to human reps with a live transcript summary.',
      options: ['Escalate on explicit human request', 'Escalate on caller frustration detection', 'Warm Transfer with 1-Sentence Summary', 'Zero-Drop Telephony SIP Referral'],
    },
  }

  return (
    <section className="section bg-[#FAF7F2] border-y border-[#E8DFD4]" id="agent-builder">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">
            <span />
            Visual Agent Studio
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Configure an agent in <span className="font-editorial text-[#B85D3B] font-normal">minutes.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Designing a Yuviz voice agent feels like onboarding a top-tier teammate. Define knowledge, pick a voice, and wire up your workflow tools without complex engineering.
          </p>
        </div>

        {/* Builder Interface Mockup */}
        <div className="mt-10 border border-[#E8DFD4] rounded-3xl bg-white overflow-hidden shadow-sm">
          {/* Top Header */}
          <div className="flex flex-wrap items-center justify-between p-5 sm:p-6 border-b border-[#E8DFD4] bg-[#FAF7F2]/60">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#B85D3B] text-white flex items-center justify-center font-bold text-sm shadow-2xs">
                Y
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-[#221A1E]">Yuviz Agent Studio</h3>
                <p className="text-xs text-[#796F68] font-mono">Agent ID: agt_9824_production</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <span className="flex items-center gap-1.5 text-xs font-mono text-[#B85D3B] font-semibold px-3 py-1 rounded-full bg-[#F7EEE7] border border-[#B85D3B]/25">
                <span className="w-2 h-2 rounded-full bg-[#B85D3B] animate-pulse" /> Live Telephony Ready
              </span>
            </div>
          </div>

          {/* Navigation Tabs (Smooth horizontal scrolling on mobile) */}
          <div className="flex border-b border-[#E8DFD4] bg-[#FAF7F2] overflow-x-auto select-none">
            {tabs.map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 sm:px-6 py-3.5 text-xs font-semibold whitespace-nowrap transition-all border-b-2 cursor-pointer ${
                    isActive
                      ? 'border-[#B85D3B] text-[#B85D3B] bg-white'
                      : 'border-transparent text-[#796F68] hover:text-[#221A1E]'
                  }`}
                >
                  <Icon size={15} className={isActive ? 'text-[#B85D3B]' : 'text-[#796F68]'} />
                  {tab.label}
                </button>
              )
            })}
          </div>

          {/* Content Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white">
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg sm:text-xl font-bold text-[#221A1E]">{tabContents[activeTab].title}</h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#635952] leading-relaxed">{tabContents[activeTab].desc}</p>

                  <div className="mt-5 space-y-2.5">
                    {tabContents[activeTab].options.map((opt, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          if (activeTab === 'voice') setSelectedVoice(opt)
                        }}
                        className={`p-3.5 sm:p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                          activeTab === 'voice' && selectedVoice === opt
                            ? 'border-[#B85D3B] bg-[#F7EEE7] text-[#221A1E] font-semibold shadow-2xs'
                            : 'border-[#E8DFD4] bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] text-[#221A1E]'
                        }`}
                      >
                        <span className="text-xs sm:text-sm">{opt}</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                          activeTab === 'voice' && selectedVoice === opt
                            ? 'border-[#B85D3B] bg-[#B85D3B] text-white'
                            : 'border-[#E8DFD4] bg-white text-transparent'
                        }`}>
                          <Check size={12} strokeWidth={3} />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {activeTab === 'voice' && (
                <div className="p-4 rounded-2xl border border-[#E8DFD4] bg-[#FAF7F2] flex items-center justify-between">
                  <span className="text-xs text-[#796F68] font-medium">Speech Rate Multiplier:</span>
                  <div className="flex gap-1.5">
                    {['0.9x', '1.0x', '1.1x'].map((speed) => (
                      <button
                        key={speed}
                        onClick={() => setVoiceSpeed(speed)}
                        className={`px-3 py-1 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                          voiceSpeed === speed
                            ? 'bg-[#B85D3B] text-white shadow-2xs'
                            : 'bg-white text-[#635952] border border-[#E8DFD4]'
                        }`}
                      >
                        {speed}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Live Preview Card */}
            <div className="lg:col-span-5 border border-[#E8DFD4] rounded-2xl bg-[#FAF7F2] p-5 sm:p-6 shadow-2xs">
              <div className="flex items-center justify-between border-b border-[#E8DFD4] pb-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#796F68] font-semibold">Config Preview</span>
                <span className="text-xs font-mono text-[#B85D3B] font-semibold">Active Studio</span>
              </div>

              <div className="space-y-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD4] flex justify-between items-center gap-2">
                  <span className="text-[#796F68]">Selected Voice:</span>
                  <span className="font-bold text-[#221A1E] truncate text-right">{selectedVoice}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD4] flex justify-between items-center">
                  <span className="text-[#796F68]">Speech Speed:</span>
                  <span className="font-bold text-[#B85D3B]">{voiceSpeed}</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD4] flex justify-between items-center">
                  <span className="text-[#796F68]">Knowledge Base:</span>
                  <span className="font-bold text-[#221A1E]">4 Documents Synced</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8DFD4] flex justify-between items-center">
                  <span className="text-[#796F68]">Connected APIs:</span>
                  <span className="font-bold text-[#221A1E]">Calendar + CRM</span>
                </div>
              </div>

              <div className="mt-5 p-4 rounded-xl bg-white border border-[#E8DFD4] text-center shadow-2xs">
                <Sparkles size={18} className="mx-auto text-[#B85D3B] mb-1.5" />
                <p className="text-xs text-[#221A1E] font-bold">Agent Ready to Handle Live Calls</p>
                <p className="text-[11px] text-[#796F68] mt-0.5">Changes sync automatically across telephony routes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

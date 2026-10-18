'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircle, CheckCircle2, Cpu, Lock, Shield, Database, Radio, Server, Layers, ArrowRight } from 'lucide-react'

export function BeforeAfter() {
  const [activeTab, setActiveTab] = useState<'with' | 'without'>('with')

  return (
    <section className="section bg-[#FAF7F2] border-y border-[#E8DFD4]" id="before-after">
      <div className="container mx-auto px-4">
        <div className="section-heading text-center max-w-2xl mx-auto">
          <p className="eyebrow justify-center">
            <span />
            Operational Transformation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            The difference is <span className="font-editorial text-[#B85D3B] font-normal">clarity.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#635952] leading-relaxed">
            Compare traditional phone support bottlenecks with Yuviz 24/7 grounded voice intelligence.
          </p>

          <div className="mt-7 inline-flex p-1.5 rounded-full bg-white border border-[#E8DFD4] shadow-2xs">
            <button
              onClick={() => setActiveTab('without')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'without'
                  ? 'bg-[#221A1E] text-white shadow-2xs'
                  : 'text-[#635952] hover:text-[#221A1E]'
              }`}
            >
              Without Yuviz
            </button>
            <button
              onClick={() => setActiveTab('with')}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'with'
                  ? 'bg-[#B85D3B] text-white shadow-2xs'
                  : 'text-[#635952] hover:text-[#221A1E]'
              }`}
            >
              With Yuviz AI
            </button>
          </div>
        </div>

        <div className="mt-8 max-w-4xl mx-auto border border-[#E8DFD4] rounded-3xl bg-white p-6 sm:p-9 shadow-sm">
          <AnimatePresence mode="wait">
            {activeTab === 'without' ? (
              <motion.div
                key="without"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-[#E8DFD4]">
                  <XCircle className="text-[#C2410C]" size={20} />
                  <h3 className="text-lg font-bold text-[#221A1E]">Traditional Phone Queue Friction</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4]">
                    <span className="text-xs font-bold text-[#221A1E] block">Endless Hold Queues</span>
                    <p className="text-xs text-[#796F68] mt-1 leading-relaxed">Callers wait for minutes listening to hold music, often abandoning calls before reaching reps.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4]">
                    <span className="text-xs font-bold text-[#221A1E] block">Rigid DTMF Menus</span>
                    <p className="text-xs text-[#796F68] mt-1 leading-relaxed">Customers press 1, press 2, getting frustrated by automated IVRs that cannot understand questions.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4]">
                    <span className="text-xs font-bold text-[#221A1E] block">Manual CRM Entry</span>
                    <p className="text-xs text-[#796F68] mt-1 leading-relaxed">Staff spends 35% of their working hours typing notes, booking calendar slots, and sending manual texts.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4]">
                    <span className="text-xs font-bold text-[#221A1E] block">Zero Weekend Coverage</span>
                    <p className="text-xs text-[#796F68] mt-1 leading-relaxed">Calls after 5:00 PM or during weekends go to voicemail black holes where high-intent leads go cold.</p>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="with"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 pb-3 border-b border-[#E8DFD4]">
                  <CheckCircle2 className="text-[#B85D3B]" size={20} />
                  <h3 className="text-lg font-bold text-[#221A1E]">Yuviz Voice Agent Intelligence</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30 shadow-2xs">
                    <span className="text-xs font-bold text-[#B85D3B] block">Instant 0.0s Pickup</span>
                    <p className="text-xs text-[#635952] mt-1 leading-relaxed">Every incoming caller is greeted on ring zero by a natural, courteous voice agent.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30 shadow-2xs">
                    <span className="text-xs font-bold text-[#B85D3B] block">Natural Fluent Dialogue</span>
                    <p className="text-xs text-[#635952] mt-1 leading-relaxed">Callers speak naturally in conversational dialogue with human-grade pauses and turn-taking.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30 shadow-2xs">
                    <span className="text-xs font-bold text-[#B85D3B] block">Automated Business Actions</span>
                    <p className="text-xs text-[#635952] mt-1 leading-relaxed">Appointments are booked, CRMs are updated, and SMS confirmations are dispatched in real time.</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30 shadow-2xs">
                    <span className="text-xs font-bold text-[#B85D3B] block">True 24/7/365 Coverage</span>
                    <p className="text-xs text-[#635952] mt-1 leading-relaxed">Round-the-clock availability for nights and weekends with zero overtime or staffing headaches.</p>
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

export function ArchitectureSection() {
  return (
    <section className="section container mx-auto px-4" id="architecture">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <p className="eyebrow mb-2">
            <span />
            Telephony Engine
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#221A1E]">
            Built for <span className="font-editorial text-[#B85D3B] font-normal">real conversations.</span>
          </h2>
          <p className="mt-4 text-[#635952] text-sm sm:text-base leading-relaxed">
            A dependable, multi-tenant telephony infrastructure engineered specifically for real-time speech processing, sub-300ms latency, and enterprise security.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#B85D3B] font-bold text-xs mt-0.5 shrink-0">
                01
              </div>
              <div>
                <h4 className="text-base font-bold text-[#221A1E]">Real-Time SIP &amp; WebRTC Telephony</h4>
                <p className="text-xs text-[#796F68] leading-relaxed mt-0.5">Direct connections with Twilio, Telnyx, and carrier SIP trunks with sub-300ms audio turnaround.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#B85D3B] font-bold text-xs mt-0.5 shrink-0">
                02
              </div>
              <div>
                <h4 className="text-base font-bold text-[#221A1E]">Grounded Vector Knowledge (RAG)</h4>
                <p className="text-xs text-[#796F68] leading-relaxed mt-0.5">PostgreSQL + pgvector store tenant knowledge embeddings for accurate, hallucination-free answers.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-xl bg-[#FAF7F2] border border-[#E8DFD4] flex items-center justify-center text-[#B85D3B] font-bold text-xs mt-0.5 shrink-0">
                03
              </div>
              <div>
                <h4 className="text-base font-bold text-[#221A1E]">Enterprise SOC-2 Security &amp; Isolation</h4>
                <p className="text-xs text-[#796F68] leading-relaxed mt-0.5">Strict multi-tenant data isolation, encrypted Vault secrets, and tokenized API access controls.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Architecture Stack Diagram (Warm & Clean) */}
        <div className="lg:col-span-6 border border-[#E8DFD4] rounded-3xl bg-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center justify-between text-xs font-mono font-bold text-[#B85D3B] pb-4 border-b border-[#E8DFD4]">
            <span>Speech Input</span>
            <span className="text-[#796F68]">&rarr;</span>
            <span>Orchestration</span>
            <span className="text-[#796F68]">&rarr;</span>
            <span>Voice Output</span>
          </div>

          <div className="mt-5 space-y-2.5 font-mono text-xs">
            <div className="p-3.5 rounded-2xl bg-[#F7EEE7] border border-[#B85D3B]/30 font-bold text-[#221A1E] flex items-center justify-between">
              <span>Real-Time Speech Gateway (WebRTC / SIP)</span>
              <span className="text-[#B85D3B] text-[10px] px-2 py-0.5 rounded-full bg-white">&lt;60ms</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] text-[#635952] font-semibold flex items-center justify-between">
              <span>Speech Recognition &amp; Turn Detector (ASR)</span>
              <span className="text-[10px] text-[#796F68]">Native Dialects</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] text-[#635952] font-semibold flex items-center justify-between">
              <span>Grounded Vector RAG Layer (pgvector)</span>
              <span className="text-[10px] text-[#796F68]">100% Fact-Checked</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] text-[#635952] font-semibold flex items-center justify-between">
              <span>Real-Time Neural Speech Synthesis (TTS)</span>
              <span className="text-[10px] text-[#B85D3B] font-bold">Natural Human Cadence</span>
            </div>
          </div>

          <p className="mt-6 text-[11px] font-mono uppercase tracking-[0.14em] text-[#796F68] text-center border-t border-[#E8DFD4] pt-4 font-semibold">
            Encrypted &bull; Multi-Tenant Isolated &bull; Zero Data Leakage
          </p>
        </div>
      </div>
    </section>
  )
}

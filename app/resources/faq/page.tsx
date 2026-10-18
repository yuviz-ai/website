'use client'

import React, { useState } from 'react'
import { HelpCircle, ChevronDown, Sparkles, MessageSquare, ArrowRight } from 'lucide-react'
import { Button } from '@/components/marketing/Navbar'

const faqs = [
  {
    q: 'How fast do Yuviz AI voice agents respond on phone calls?',
    a: 'Yuviz achieves sub-300ms roundtrip audio latency. By streaming speech-to-text, neural LLM inference, and text-to-speech audio frames concurrently over WebRTC/SIP, response times sound completely human without awkward pauses.'
  },
  {
    q: 'Can Yuviz transfer calls to a live human agent when needed?',
    a: 'Yes. Yuviz supports warm human transfers via SIP REFER or WebRTC bridging. When a caller asks for a supervisor or complex handling is required, the agent transfers the call along with a live transcript summary so the human representative has full context.'
  },
  {
    q: 'How does Yuviz ensure agents do not make up fake information (hallucinate)?',
    a: 'Yuviz uses a grounded Retrieval-Augmented Generation (RAG) knowledge engine. Agents only speak verified facts ingested from your uploaded manuals, databases, and APIs. If an answer is unavailable, the agent politely admits it or routes the call.'
  },
  {
    q: 'Is Yuviz compliant with HIPAA, SOC2 Type II, and PCI-DSS?',
    a: 'Yes. Enterprise plans feature encrypted SIP/TLS streams, zero-retention storage options, HIPAA business associate agreements (BAAs), and SOC2 Type II security certifications.'
  },
  {
    q: 'Can I port my existing business phone numbers to Yuviz?',
    a: 'Absolutely. You can port your existing local or toll-free DID numbers from Twilio, Bandwidth, RingCentral, or traditional carriers into Yuviz, or connect via SIP Trunking.'
  },
  {
    q: 'What voices and speaking styles are supported?',
    a: 'Yuviz provides lifelike, natural conversational voices with customizable speaking rate, cadence, pitch, empathy levels, and sub-300ms turnaround.'
  }
]

export default function FaqPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container max-w-4xl mx-auto pt-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle size={14} />
            <span>Help Center & FAQ</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-muted text-base sm:text-lg">
            Everything you need to know about Yuviz AI voice agents, deployment, security, and pricing.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="border border-line rounded-2xl bg-card overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-semibold text-base sm:text-lg text-foreground hover:text-lime transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    className={`text-lime transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-muted leading-relaxed border-t border-line/40 mt-2">
                    <p className="pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="p-8 rounded-3xl bg-card border border-line text-center">
          <h3 className="text-xl font-bold mb-2">Have a question not listed here?</h3>
          <p className="text-muted text-sm max-w-md mx-auto mb-6">
            Our telephony architects and voice AI engineers are ready to assist you.
          </p>
          <Button href="/contact">
            Talk to Yuviz Team <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </div>
  )
}

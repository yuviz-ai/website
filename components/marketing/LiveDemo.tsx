'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { Logo } from './Navbar'

// Dedicated Interactive Voice Playground is featured in HeroTeaser.
// The duplicate footer voice demo box has been removed per specification.
export function LiveDemo() {
  return null
}

export function FinalCTA() {
  return (
    <section className="relative py-20 md:py-28 bg-[#F7EEE7] border-t border-[#E8DFD4] overflow-hidden" id="contact">
      <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
        <p className="eyebrow justify-center mb-3">
          <span />
          Get Started Today
        </p>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#221A1E] leading-[1.08]">
          Your next customer is<br />
          <span className="font-editorial text-[#B85D3B] font-normal">already calling.</span>
        </h2>
        <p className="mt-5 text-sm sm:text-base md:text-lg text-[#635952] max-w-xl mx-auto leading-relaxed">
          Make sure someone is there to answer. Deploy an intelligent AI voice agent for your business in less than an hour.
        </p>
        
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/contact"
            className="btn-pill-primary px-7 py-3.5 text-sm sm:text-base font-semibold shadow-md"
          >
            Start free trial <ArrowRight size={16} />
          </Link>
          <a
            href="mailto:hello@yuviz.ai"
            className="btn-pill-secondary px-6 py-3.5 text-sm sm:text-base font-medium"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  )
}

export function FooterGuide() {
  const [open, setOpen] = useState<string | null>(null)
  const topics = [
    { id: 'start', label: 'Where should I start?', text: 'Start with one high-volume conversation: scheduling, customer support, or lead qualification. Prove the handoff, then expand.' },
    { id: 'trust', label: 'How does Yuviz stay reliable?', text: 'Every agent has defined knowledge files, explicit action boundaries, and a warm human escalation path when needed.' },
    { id: 'fit', label: 'Is this right for my team?', text: 'If your team spends hours answering repetitive phone calls or qualifying prospects, Yuviz immediately frees up hours each day.' },
  ]
  return (
    <div className="mb-12 border border-[#E8DFD4] rounded-3xl bg-white p-6 sm:p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-xs font-mono uppercase tracking-wider text-[#B85D3B] font-bold">Frequently Addressed Questions</p>
        <h3 className="text-xl sm:text-2xl font-bold text-[#221A1E] mt-1">Questions before the first call?</h3>
        <p className="text-xs sm:text-sm text-[#796F68] mt-1">Learn how to choose a useful first workflow and roll out with confidence.</p>
      </div>
      <div className="divide-y divide-[#E8DFD4]">
        {topics.map((topic) => (
          <div key={topic.id} className="py-3.5">
            <button
              type="button"
              aria-expanded={open === topic.id}
              onClick={() => setOpen(open === topic.id ? null : topic.id)}
              className="flex items-center justify-between w-full text-left font-bold text-sm text-[#221A1E] hover:text-[#B85D3B] transition-colors cursor-pointer"
            >
              <span>{topic.label}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${open === topic.id ? 'rotate-180 text-[#B85D3B]' : 'text-[#796F68]'}`} />
            </button>
            {open === topic.id && (
              <p className="text-xs sm:text-sm text-[#635952] mt-2 leading-relaxed pr-6">{topic.text}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="container mx-auto px-4 py-16">
      <FooterGuide />
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-10 border-t border-[#E8DFD4]">
        <div className="md:col-span-4">
          <Logo />
          <p className="mt-4 max-w-xs text-xs sm:text-sm leading-relaxed text-[#796F68]">
            AI voice agents that answer calls, understand customers, and take action — 24/7.
          </p>
        </div>

        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#221A1E] mb-3">Industries</p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#635952]">
              <Link href="/use-cases/real-estate" className="hover:text-[#B85D3B] transition-colors">Real Estate</Link>
              <Link href="/use-cases/banking" className="hover:text-[#B85D3B] transition-colors">Banking &amp; FinTech</Link>
              <Link href="/use-cases/healthcare" className="hover:text-[#B85D3B] transition-colors">Healthcare</Link>
              <Link href="/use-cases/e-commerce" className="hover:text-[#B85D3B] transition-colors">E-Commerce</Link>
              <Link href="/use-cases/restaurants" className="hover:text-[#B85D3B] transition-colors">Restaurants</Link>
              <Link href="/use-cases/government" className="hover:text-[#B85D3B] transition-colors">Government</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#221A1E] mb-3">Platform</p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#635952]">
              <Link href="/product/agent-builder" className="hover:text-[#B85D3B] transition-colors">Agent Builder</Link>
              <Link href="/product/inbound-calls" className="hover:text-[#B85D3B] transition-colors">Inbound Routing</Link>
              <Link href="/product/outbound-calls" className="hover:text-[#B85D3B] transition-colors">Outbound Campaigns</Link>
              <Link href="/product/knowledge-base" className="hover:text-[#B85D3B] transition-colors">Knowledge RAG</Link>
              <Link href="/product/call-analytics" className="hover:text-[#B85D3B] transition-colors">Analytics &amp; Logs</Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#221A1E] mb-3">Company</p>
            <div className="flex flex-col gap-2 text-xs sm:text-sm text-[#635952]">
              <Link href="/resources/faq" className="hover:text-[#B85D3B] transition-colors">FAQ</Link>
              <Link href="/resources/blog" className="hover:text-[#B85D3B] transition-colors">Blog</Link>
              <Link href="/resources/api-integration" className="hover:text-[#B85D3B] transition-colors">API Docs</Link>
              <Link href="/pricing" className="hover:text-[#B85D3B] transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-[#B85D3B] transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[#E8DFD4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#796F68]">
        <span>&copy; {new Date().getFullYear()} Yuviz AI. All rights reserved.</span>
        <span>Crafted for high-performance enterprise voice intelligence.</span>
      </div>
    </footer>
  )
}

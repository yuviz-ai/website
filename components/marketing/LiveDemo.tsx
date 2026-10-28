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
  return (
    <div className="mb-12 rounded-3xl border border-[rgba(174,187,224,.16)] bg-[#111A2D] p-6 sm:p-8">
      <p className="text-xs font-mono uppercase tracking-wider text-[#B8A5FF] font-bold">Before the first conversation</p>
      <h3 className="text-xl sm:text-2xl font-bold text-[#F0F2FC] mt-2">Start with a workflow you can validate.</h3>
      <p className="text-xs sm:text-sm text-[#9CA6C2] mt-2 max-w-2xl leading-relaxed">Bring your call flow, business context, and required systems. We’ll discuss what the current implementation supports and what would need additional work.</p>
      <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#C6B9FF] hover:text-white">Talk to Yuviz <ArrowRight size={15}/></Link>
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
            Voice AI experiences shaped around customer conversations, business context, and clear next steps.
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
              <Link href="/resources/api-integration" className="hover:text-[#B85D3B] transition-colors">Integration planning</Link>
              <Link href="/pricing" className="hover:text-[#B85D3B] transition-colors">Pricing</Link>
              <Link href="/contact" className="hover:text-[#B85D3B] transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-[#E8DFD4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#796F68]">
        <span>&copy; {new Date().getFullYear()} Yuviz AI. All rights reserved.</span>
        <span>Designed around the realities of voice conversations.</span>
      </div>
    </footer>
  )
}

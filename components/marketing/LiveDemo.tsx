'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

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
    <footer className="border-t border-white/10 bg-[#090D19] px-6 py-8 text-center text-sm text-slate-400" aria-label="Site footer">
      <p className="m-0">© {new Date().getFullYear()} Yovanex LLP (Yuviz AI). All rights reserved.</p>
      <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-3" aria-label="Legal">
        <Link className="transition-colors hover:text-white" href="/contact?topic=privacy">Privacy Policy</Link>
        <Link className="transition-colors hover:text-white" href="/contact?topic=terms">Terms of Use</Link>
        <Link className="transition-colors hover:text-white" href="/contact?topic=legal">Legal</Link>
      </nav>
    </footer>
  )
}

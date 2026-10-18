'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  PhoneCall,
  Play,
  RotateCcw,
  Sparkles,
  Volume2,
  Check,
  ShieldCheck,
  Zap,
  Globe,
  Radio,
  Headphones,
  Sliders,
  ChevronRight
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Typewriter Heading Component (Directly matches TryOrato's headline animation)
export function TypewriterHeading() {
  const words = ['takes action.', 'books meetings.', 'resolves calls.', 'closes deals.', 'scales 24/7.']
  const [wordIdx, setWordIdx] = useState(0)
  const [subIdx, setSubIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    if (subIdx === words[wordIdx].length + 1 && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }

    if (subIdx === 0 && isDeleting) {
      setIsDeleting(false)
      setWordIdx((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIdx((prev) => prev + (isDeleting ? -1 : 1))
      },
      isDeleting ? 45 : 90
    )

    return () => clearTimeout(timeout)
  }, [subIdx, isDeleting, wordIdx, words])

  return (
    <span className="inline-flex items-center text-[#B85D3B]">
      <span>{words[wordIdx].substring(0, subIdx)}</span>
      <span className="inline-block w-[3px] h-[0.82em] bg-[#B85D3B] ml-1.5 animate-pulse rounded-full" />
    </span>
  )
}

// Sound Waveform Component
export function Waveform({ active = false }: { active?: boolean }) {
  return (
    <div className={`waveform ${active ? 'is-active' : ''}`} aria-hidden="true">
      {Array.from({ length: 32 }, (_, i) => {
        const heightPercent = 16 + ((i * 19) % 65)
        return (
          <i
            key={i}
            style={{
              height: active ? `${heightPercent}%` : '20%',
              backgroundColor: active ? '#B85D3B' : '#D9CEC4'
            }}
          />
        )
      })}
    </div>
  )
}

// Layered Curving Waves / Ridges SVG (Exact Orato visual foundation)
export function HeroRidges() {
  return (
    <svg
      className="ridges"
      viewBox="0 0 1440 380"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 240c150-80 286-25 430-80 144-55 300 36 452 25 152-12 316-98 558-44v239H0z" />
      <path d="M0 285c168-58 300 18 470-25 170-43 300 55 470 36 170-18 340-80 500-35v119H0z" />
      <path d="M0 325c190-43 330 25 540-5 210-30 340-53 560-18 130 21 240 28 340 12v66H0z" />
    </svg>
  )
}

// Interactive Live Voice Persona Player
export function InteractiveCallTeaser() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activePersona, setActivePersona] = useState(0)
  const [seconds, setSeconds] = useState(0)

  const personas = [
    {
      name: 'Maya',
      accent: 'Front Desk Receptionist',
      langCode: 'Agent 01',
      preview: '“Hello! Yuviz voice desk here. I can verify your booking, schedule site visits, or answer payment queries.”',
      latency: '280ms',
    },
    {
      name: 'Ethan',
      accent: 'Executive Sales Desk',
      langCode: 'Agent 02',
      preview: '“Hi there! Thanks for calling. I can connect you with sales or walk you through our platform pricing right now.”',
      latency: '240ms',
    },
    {
      name: 'Elena',
      accent: 'Customer Support',
      langCode: 'Agent 03',
      preview: '“Hello, thanks for calling Yuviz. I can help coordinate your schedule, answer account questions, or process your requests.”',
      latency: '270ms',
    },
  ]

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isPlaying) {
      timer = setInterval(() => setSeconds((s) => s + 1), 1000)
    } else {
      setSeconds(0)
    }
    return () => clearInterval(timer)
  }, [isPlaying])

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const handleSelectPersona = (idx: number) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel()
    }
    setIsPlaying(false)
    setSeconds(0)
    setActivePersona(idx)
  }

  const togglePlay = () => {
    if (isPlaying) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
      }
      setIsPlaying(false)
      setSeconds(0)
    } else {
      setIsPlaying(true)
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel()
        const textToSpeak = personas[activePersona].preview.replace(/[“”"]/g, '')
        const utterance = new SpeechSynthesisUtterance(textToSpeak)
        utterance.rate = 1.0
        utterance.lang = 'en-US'
        utterance.onend = () => {
          setIsPlaying(false)
          setSeconds(0)
        }
        utterance.onerror = () => {
          setIsPlaying(false)
        }
        window.speechSynthesis.speak(utterance)
      }
    }
  }

  const formatTimer = (s: number) => {
    const mins = Math.floor(s / 60)
    const secs = s % 60
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <motion.div
      id="playground"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="w-full max-w-3xl mx-auto mt-14 relative z-10"
    >
      <div className="bg-white/90 backdrop-blur-md border border-[#E8DFD4] rounded-3xl p-5 md:p-7 shadow-[0_20px_50px_-15px_rgba(62,43,37,0.08)]">
        
        {/* Top bar: Persona Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-5 border-b border-[#F4EBE2]">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 relative">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B85D3B] ${isPlaying ? 'opacity-75' : 'opacity-0'}`} />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B85D3B]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-[#221A1E]">
              Interactive Voice Playground
            </span>
          </div>

          <div className="flex items-center gap-1.5 p-1 bg-[#FAF7F2] rounded-full border border-[#E8DFD4]">
            {personas.map((p, idx) => (
              <button
                key={p.name}
                type="button"
                onClick={() => handleSelectPersona(idx)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  activePersona === idx
                    ? 'bg-[#B85D3B] text-white shadow-2xs font-semibold'
                    : 'text-[#635952] hover:text-[#221A1E]'
                }`}
              >
                {p.name} ({p.langCode})
              </button>
            ))}
          </div>
        </div>

        {/* Central Audio & Persona Visual */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className={`voice-orb shrink-0 ${isPlaying ? 'orb-active' : ''}`}>
              <Radio size={24} strokeWidth={2} />
              <span className="orb-ring" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-lg font-bold text-[#221A1E]">
                  {personas[activePersona].name}
                </h4>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-[#F7EEE7] text-[#B85D3B] border border-[#B85D3B]/20">
                  {personas[activePersona].accent}
                </span>
              </div>
              <p className="text-xs text-[#796F68] mt-1 flex items-center gap-2">
                <span>Latency: <strong className="text-[#221A1E] font-mono">{personas[activePersona].latency}</strong></span>
                <span>•</span>
                <span className="text-[#B85D3B] font-semibold">Natural Turn-Taking</span>
              </p>
            </div>
          </div>

          {/* Waveform Visualizer */}
          <div className="w-full md:w-56 px-2">
            <Waveform active={isPlaying} />
          </div>

          {/* Play / Call Trigger Button */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={togglePlay}
              className={`btn-pill-primary px-5 py-2.5 text-xs font-semibold flex items-center gap-2 cursor-pointer transition-all ${
                isPlaying ? 'bg-[#3E2B25] hover:bg-[#2B1D19]' : ''
              }`}
            >
              {isPlaying ? (
                <>
                  <span className="w-2 h-2 rounded-xs bg-white" /> Stop Audio
                </>
              ) : (
                <>
                  <Play size={13} fill="currentColor" /> Hear Live Sample
                </>
              )}
            </button>
          </div>
        </div>

        {/* Live Speech Bubble / Transcript preview */}
        <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#E8DFD4] text-xs">
          <div className="flex items-center justify-between text-[#796F68] text-[10px] font-mono uppercase mb-1.5">
            <span>Real-time Voice Output</span>
            <span>{isPlaying ? `Duration: ${formatTimer(seconds)}` : 'Ready to stream'}</span>
          </div>
          <p className="text-[#221A1E] font-medium leading-relaxed italic">
            {personas[activePersona].preview}
          </p>
        </div>

      </div>
    </motion.div>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden flex flex-col justify-between" id="hero">
      {/* Ambient background glow & grid */}
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-ambient-grid" aria-hidden="true" />

      {/* Hero Center Content (Matches exact Orato structure) */}
      <div className="container relative z-10 text-center mx-auto max-w-4xl px-4">
        
        {/* Main H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[44px] sm:text-[62px] md:text-[76px] lg:text-[88px] font-bold tracking-[-0.04em] leading-[1.04] text-[#221A1E]"
        >
          Voice that <span className="font-editorial font-normal text-[#B85D3B] underline-offset-8">answers</span>,
          <br className="hidden sm:inline" />
          <span className="inline-flex items-center flex-wrap justify-center gap-x-2 md:gap-x-3 mt-1">
            <span>thinks with context, and</span>
            <TypewriterHeading />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#635952] max-w-2xl mx-auto leading-relaxed"
        >
          Autonomous voice agents that answer on ring zero, understand natural human dialogue, and execute business workflows directly into your CRM — 24/7.
        </motion.p>

        {/* CTAs (Dual Pills matching TryOrato) */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3.5"
        >
          <Link
            href="/contact"
            className="btn-pill-primary px-7 py-3.5 text-sm md:text-base font-semibold shadow-md"
          >
            Start free trial <ArrowRight size={16} />
          </Link>

          <a
            href="#playground"
            className="btn-pill-secondary px-6 py-3.5 text-sm md:text-base font-medium"
          >
            <PhoneCall size={16} className="text-[#B85D3B]" /> Try a live call
          </a>
        </motion.div>

        {/* Value Micro-Points */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-[#796F68]">
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-[#B85D3B]" /> Zero wait times
          </span>
          <span className="text-[#D9CEC4]">•</span>
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-[#B85D3B]" /> Sub-300ms speech response
          </span>
          <span className="text-[#D9CEC4]">•</span>
          <span className="flex items-center gap-1.5">
            <Check size={14} className="text-[#B85D3B]" /> Instant CRM &amp; calendar sync
          </span>
        </div>

        {/* Interactive Voice Playground Card */}
        <InteractiveCallTeaser />

      </div>

      {/* Layered landscape wave ridges at the bottom */}
      <HeroRidges />
    </section>
  )
}

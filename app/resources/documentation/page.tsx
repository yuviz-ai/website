import React from 'react'
import { Metadata } from 'next'
import { BookOpen, Code2, Terminal, Cpu, FileText, ChevronRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Developer Documentation & SDKs — Yuviz AI',
  description: 'Complete API reference, quickstart guides, SDK documentation, and sample code for Yuviz Voice Platform.',
}

const docsSections = [
  {
    title: 'Quickstart Guide',
    desc: 'Deploy your first AI voice agent on a live phone number in less than 5 minutes.',
    icon: Terminal,
    items: ['1. Create Yuviz Account', '2. Configure Voice Persona', '3. Purchase Virtual Number', '4. Make First Test Call']
  },
  {
    title: 'REST API Reference',
    desc: 'Comprehensive specifications for endpoints managing calls, agents, and analytics.',
    icon: Code2,
    items: ['POST /v1/calls/dispatch', 'GET /v1/agents', 'POST /v1/knowledge/ingest', 'GET /v1/analytics/transcripts']
  },
  {
    title: 'Real-Time WebSockets',
    desc: 'Stream live 24kHz audio frames and event signals over secure WebSocket connections.',
    icon: Cpu,
    items: ['Audio Frame Format (PCM16)', 'Event Payloads', 'Keep-Alive Ping/Pong', 'Latency Benchmarking']
  },
  {
    title: 'SDK Libraries',
    desc: 'Official client wrappers for Node.js, Python, Go, and React Native.',
    icon: BookOpen,
    items: ['npm install @yuviz/sdk', 'pip install yuviz-python', 'go get github.com/yuviz/sdk-go', 'React Hooks Package']
  },
]

export default function DocumentationPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container max-w-5xl mx-auto pt-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Developer Center</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Documentation & SDK Reference
          </h1>
          <p className="text-muted text-base sm:text-lg">
            Everything you need to build, test, and scale voice AI agents with the Yuviz developer platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {docsSections.map((sec, i) => {
            const Icon = sec.icon
            return (
              <div key={i} className="p-7 rounded-2xl bg-card border border-line hover:border-lime/50 transition-all shadow-sm">
                <div className="p-3 rounded-xl bg-panel text-foreground w-fit mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{sec.title}</h3>
                <p className="text-sm text-muted mb-6 leading-relaxed">{sec.desc}</p>
                <div className="space-y-2 border-t border-line/60 pt-4">
                  {sec.items.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs font-mono text-muted hover:text-foreground cursor-pointer transition-colors py-1">
                      <span>{item}</span>
                      <ChevronRight size={13} className="text-lime" />
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

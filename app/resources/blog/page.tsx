import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { FileText, ArrowRight, Calendar, User, Clock, Tag, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog & Voice AI Insights — Yuviz AI',
  description: 'Read the latest research, engineering insights, and guides on AI voice agents, telephony integration, and RAG.',
}

const articles = [
  {
    title: 'Achieving Sub-300ms Audio Latency in WebRTC Telephony Pipelines',
    summary: 'A deep dive into how streaming neural text-to-speech and low-latency websocket framing allow Yuviz to achieve zero-perceivable lag in customer phone calls.',
    category: 'Engineering',
    date: 'Oct 04, 2026',
    readTime: '6 min read',
    author: 'Alex Rivera, Head of Telephony',
    slug: 'sub-300ms-latency-webrtc'
  },
  {
    title: 'How Apex Dental Automated 78% of Inbound Patient Calls with Yuviz AI',
    summary: 'Case study: How a 14-location dental group reduced front-desk wait times from 4 minutes to 0 seconds while scheduling 2,400+ appointments autonomously.',
    category: 'Case Study',
    date: 'Sep 28, 2026',
    readTime: '4 min read',
    author: 'Sarah Chen, Product Strategy',
    slug: 'apex-dental-case-study'
  },
  {
    title: 'RAG for Voice: Eliminating Hallucinations in Live Customer Calls',
    summary: 'Why traditional vector databases fail on voice streams and how chunk-level confidence scoring guarantees factually grounded answers.',
    category: 'AI Research',
    date: 'Sep 15, 2026',
    readTime: '8 min read',
    author: 'Dr. Marcus Vance, Chief AI Scientist',
    slug: 'rag-for-voice-zero-hallucinations'
  },
  {
    title: 'TCPA Compliance & STIR/SHAKEN: A Practical Guide for AI Outbound Campaigns',
    summary: 'Everything enterprise operations teams must know about carrier attestation, caller ID integrity, and timezone-aware calling windows.',
    category: 'Compliance',
    date: 'Aug 30, 2026',
    readTime: '5 min read',
    author: 'Elena Rostova, Legal & Compliance',
    slug: 'tcpa-compliance-stir-shaken-guide'
  },
]

export default function BlogPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container max-w-5xl mx-auto pt-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Yuviz Journal & News</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Voice AI Research & Insights
          </h1>
          <p className="text-muted text-base sm:text-lg">
            Technical breakdowns, customer success stories, and product announcements from the Yuviz engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <article key={i} className="p-7 rounded-2xl bg-card border border-line hover:border-lime/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-lime-soft text-lime border border-lime/30">
                    {article.category}
                  </span>
                  <span className="text-xs text-muted flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-foreground group-hover:text-lime-600 dark:group-hover:text-lime transition-colors mb-3 leading-snug">
                  {article.title}
                </h2>
                <p className="text-sm text-muted line-clamp-3 mb-6 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-line/60 flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <User size={13} className="text-lime" /> {article.author}
                </span>
                <span>{article.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

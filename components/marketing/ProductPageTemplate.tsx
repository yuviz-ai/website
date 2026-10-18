'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, Sparkles, Shield, Zap, Cpu, Headphones, ArrowUpRight } from 'lucide-react'
import { Button } from './Navbar'

export interface FeatureItem {
  title: string
  description: string
  icon?: React.ElementType
  tag?: string
}

export interface ProductPageProps {
  badge: string
  title: string
  highlightTitle?: string
  subtitle: string
  features: FeatureItem[]
  specsTitle?: string
  specs?: { label: string; value: string }[]
  codeSnippet?: string
  benefitsTitle?: string
  benefits?: string[]
  ctaTitle?: string
  ctaDescription?: string
}

export function ProductPageTemplate({
  badge,
  title,
  highlightTitle,
  subtitle,
  features,
  specsTitle = 'Technical Specifications',
  specs = [
    { label: 'Audio Latency', value: '< 300 ms roundtrip' },
    { label: 'Voice Fidelity', value: '24kHz HD PCM' },
    { label: 'Telephony Protocol', value: 'WebRTC & SIP Direct' },
    { label: 'Uptime SLA', value: '99.99% Enterprise Guarantee' },
  ],
  codeSnippet,
  benefitsTitle = 'Why Enterprise Teams Choose Yuviz',
  benefits = [
    'Sub-300ms real-time conversational latency',
    'Seamless human agent warm escalation & handoff',
    'SOC2 Type II, HIPAA, and GDPR compliant',
    'Pre-built integrations with Salesforce, Twilio & HubSpot',
  ],
  ctaTitle = 'Ready to elevate your customer calls?',
  ctaDescription = 'Deploy your first AI voice agent in minutes or schedule a customized enterprise demo with our solutions engineering team.',
}: ProductPageProps) {
  return (
    <div className="pt-28 md:pt-36 pb-16 bg-[#FAF7F2] min-h-screen">
      {/* Hero Header */}
      <section className="container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>{badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {title} {highlightTitle && <span className="text-lime-600 dark:text-lime underline decoration-lime/30">{highlightTitle}</span>}
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact">
              Talk to Yuviz <ArrowRight size={16} />
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line bg-card hover:bg-panel text-sm font-medium text-foreground transition-all"
            >
              View Pricing <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="container py-12 border-t border-line">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center mb-2">Key Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Built for scale and performance</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon || Zap
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-card border border-line hover:border-lime/50 transition-all shadow-sm hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3 rounded-xl bg-panel text-foreground group-hover:bg-lime group-hover:text-background transition-colors w-fit mb-4">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-lime-600 dark:group-hover:text-lime transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
                </div>
                {feature.tag && (
                  <span className="mt-4 inline-block text-[11px] font-semibold text-lime px-2 py-0.5 rounded bg-lime-soft w-fit border border-lime/20">
                    {feature.tag}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Specs & Architecture Section */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-card border border-line rounded-3xl p-8 sm:p-12 shadow-sm">
          <div>
            <span className="text-xs font-semibold text-lime uppercase tracking-widest">Architecture & Performance</span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-2 mb-4">{specsTitle}</h3>
            <p className="text-sm text-muted leading-relaxed mb-6">
              Our real-time engine delivers sub-300ms response latencies, contextual RAG lookup, and zero-drop audio stream stability across global telephony networks.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {specs.map((spec, i) => (
                <div key={i} className="p-4 rounded-xl bg-panel/70 border border-line/60">
                  <p className="text-xs text-muted mb-1">{spec.label}</p>
                  <p className="text-base font-semibold text-foreground">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            {codeSnippet ? (
              <div className="rounded-2xl bg-ink p-5 font-mono text-xs text-lime-soft border border-line shadow-inner overflow-x-auto">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-lime-soft/20 text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8DFD4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#D9CEC4]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#B85D3B]" />
                  </span>
                  <span>yuviz-sdk.config.ts</span>
                </div>
                <pre className="leading-relaxed"><code>{codeSnippet}</code></pre>
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-panel border border-line space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Shield size={18} className="text-lime" /> Enterprise Security Highlights
                </h4>
                <ul className="space-y-3 text-sm text-muted">
                  {benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-lime flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="container py-12">
        <div className="rounded-3xl bg-lime-soft/40 border border-lime/30 p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            {ctaTitle}
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto mb-8">
            {ctaDescription}
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact">
              Talk to Yuviz <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

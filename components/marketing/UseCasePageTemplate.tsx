'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  ArrowUpRight,
  MessageSquare,
  Bot,
  User,
  Building2,
  Check,
  Play
} from 'lucide-react'
import { Button } from './Navbar'

export interface UseCaseWorkflow {
  title: string
  description: string
  icon?: React.ElementType
  tag?: string
}

export interface DialogueLine {
  speaker: string
  role: 'agent' | 'caller' | 'system'
  text: string
  timestamp?: string
}

export interface UseCasePageProps {
  badge: string
  industryName: string
  title: string
  highlightTitle?: string
  subtitle: string
  icon: React.ElementType
  stats: { label: string; value: string }[]
  workflows: UseCaseWorkflow[]
  dialogue: DialogueLine[]
  integrations: string[]
  compliance: string[]
  roiMetrics: { label: string; value: string; desc: string }[]
}

export function UseCasePageTemplate({
  badge,
  industryName,
  title,
  highlightTitle,
  subtitle,
  icon: IndustryIcon,
  stats,
  workflows,
  dialogue,
  integrations,
  compliance,
  roiMetrics,
}: UseCasePageProps) {
  const [activeTab, setActiveTab] = useState<'workflows' | 'dialogue' | 'integrations'>('workflows')

  return (
    <div className="pt-28 md:pt-36 pb-16 bg-[#FAF7F2] min-h-screen">
      {/* Breadcrumb Header */}
      <div className="container mx-auto px-4 pb-2">
        <nav className="flex items-center gap-2 text-xs text-[#796F68] font-medium">
          <Link href="/" className="hover:text-[#221A1E] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/use-cases" className="hover:text-[#221A1E] transition-colors">Use Cases</Link>
          <span>/</span>
          <span className="text-[#221A1E] font-semibold">{industryName}</span>
        </nav>
      </div>

      {/* Hero Header */}
      <section className="container mx-auto px-4 pt-4 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-6">
            <IndustryIcon size={16} />
            <span>{badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            {title} {highlightTitle && <span className="text-lime-600 dark:text-lime underline decoration-lime/30">{highlightTitle}</span>}
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <Button href="/contact">
              Book a Demo <ArrowRight size={16} />
            </Button>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-line bg-card hover:bg-panel text-sm font-medium text-foreground transition-all"
            >
              View Pricing <ArrowUpRight size={16} />
            </Link>
          </div>

          {/* Quick Stat Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto pt-4 border-t border-line/60">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-card border border-line/80 text-center">
                <p className="text-lg font-bold text-foreground text-lime-600 dark:text-lime">{stat.value}</p>
                <p className="text-xs text-muted font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Sample Voice Conversation Script */}
      <section className="container py-12 border-t border-line">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="eyebrow justify-center mb-2">Live Conversation Simulation</span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              How Yuviz handles {industryName} calls in real time
            </h2>
            <p className="text-sm text-muted mt-2 max-w-xl mx-auto">
              Natural speech cadence, instant context retrieval, and zero awkward pauses — powered by Yuviz sub-300ms voice pipeline.
            </p>
          </div>

          <div className="bg-card border border-line rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-line/60">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-lime-soft text-lime border border-lime/30">
                  <IndustryIcon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{industryName} Voice Assistant</h3>
                  <p className="text-xs text-muted font-mono">24kHz PCM &bull; Sub-300ms Speech Engine &bull; Active</p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-panel text-xs font-mono font-medium text-lime border border-line">
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse" /> Live Call Demo
              </span>
            </div>

            <div className="space-y-4 font-sans text-sm max-h-[420px] overflow-y-auto pr-2">
              {dialogue.map((item, idx) => {
                const isAgent = item.role === 'agent'
                const isSystem = item.role === 'system'

                if (isSystem) {
                  return (
                    <div key={idx} className="p-2.5 rounded-xl bg-panel/60 border border-line/40 text-center font-mono text-xs text-muted">
                      {item.text}
                    </div>
                  )
                }

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-3 ${isAgent ? 'justify-start' : 'justify-end'}`}
                  >
                    {isAgent && (
                      <div className="p-2 rounded-lg bg-lime-soft text-lime flex-shrink-0 mt-1">
                        <Bot size={16} />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] sm:max-w-[70%] p-4 rounded-2xl ${
                        isAgent
                          ? 'bg-card border border-line text-foreground rounded-tl-sm'
                          : 'bg-foreground text-background rounded-tr-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between text-[11px] opacity-70 mb-1 font-semibold">
                        <span>{item.speaker}</span>
                        {item.timestamp && <span className="font-mono text-[10px]">{item.timestamp}</span>}
                      </div>
                      <p className="leading-relaxed text-sm">{item.text}</p>
                    </div>
                    {!isAgent && (
                      <div className="p-2 rounded-lg bg-panel text-foreground flex-shrink-0 mt-1">
                        <User size={16} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-line/60 flex flex-wrap items-center justify-between text-xs text-muted gap-2">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 size={15} className="text-lime" /> Zero latency lag &bull; Automatic CRM field population &bull; Warm agent handoff ready
              </span>
              <Link href="/contact" className="font-semibold text-foreground hover:text-lime transition-colors flex items-center gap-1">
                Customize for your business <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Workflows */}
      <section className="container py-12">
        <div className="text-center mb-12">
          <p className="eyebrow justify-center mb-2">Automated Workflows</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Key {industryName} Phone Use Cases</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflows.map((wf, idx) => {
            const Icon = wf.icon || Zap
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
                    {wf.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">{wf.description}</p>
                </div>
                {wf.tag && (
                  <span className="mt-4 inline-block text-[11px] font-semibold text-lime px-2 py-0.5 rounded bg-lime-soft w-fit border border-lime/20">
                    {wf.tag}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* Integrations & Security Specs */}
      <section className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Integrations */}
          <div className="p-8 rounded-3xl bg-card border border-line flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-panel text-foreground w-fit mb-4">
                <Building2 size={22} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{industryName} Ecosystem Integrations</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Connect Yuviz directly with your existing software stack, databases, calendars, and backend telephony trunks in minutes.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {integrations.map((tool, i) => (
                  <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-panel/70 border border-line/60 text-xs font-semibold text-foreground">
                    <Check size={14} className="text-lime flex-shrink-0" />
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-line/60 text-xs text-muted">
              Don&apos;t see your CRM or ERP? Yuviz supports custom Webhook & REST API extensions out of the box.
            </div>
          </div>

          {/* Compliance & Security */}
          <div className="p-8 rounded-3xl bg-card border border-line flex flex-col justify-between">
            <div>
              <div className="p-3 rounded-xl bg-panel text-foreground w-fit mb-4">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Enterprise Security & Compliance</h3>
              <p className="text-sm text-muted leading-relaxed mb-6">
                Designed for high-compliance environments with strict encryption, zero-data logging options, and certified infrastructure.
              </p>
              <ul className="space-y-3">
                {compliance.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-panel/70 border border-line/60">
                    <CheckCircle2 size={16} className="text-lime flex-shrink-0 mt-0.5" />
                    <span className="text-xs text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t border-line/60 text-xs text-muted">
              Full BAA agreements, single-tenant private cloud, and custom SLA options available.
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact ROI */}
      <section className="container py-12">
        <div className="bg-panel border border-line rounded-3xl p-8 sm:p-12 text-center">
          <span className="eyebrow justify-center mb-2">Proven ROI</span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground mb-10">
            Measurable results for {industryName} teams
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roiMetrics.map((roi, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-card border border-line">
                <p className="text-4xl font-extrabold text-lime-600 dark:text-lime mb-2">{roi.value}</p>
                <h4 className="text-base font-semibold text-foreground mb-1">{roi.label}</h4>
                <p className="text-xs text-muted">{roi.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="container py-12">
        <div className="rounded-3xl bg-lime-soft/40 border border-lime/30 p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Transform your {industryName} calls with Yuviz
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto mb-8">
            Deploy an intelligent AI voice agent in under an hour or schedule a live demo with our industry solutions team.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact">
              Talk to Solutions Team <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

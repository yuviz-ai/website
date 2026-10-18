'use client'

import React, { useState } from 'react'
import { Check, ArrowRight, Sparkles, ShieldCheck, PhoneCall, Zap } from 'lucide-react'
import { Button } from '@/components/marketing/Navbar'

const pricingTiers = [
  {
    name: 'Starter',
    badge: 'Self-Serve',
    priceMonthly: '$49',
    priceAnnual: '$39',
    description: 'Perfect for small businesses looking to automate after-hours phone calls.',
    features: [
      '1 Dedicated Phone Number',
      '500 Included Call Minutes / mo',
      'Standard AI Neural Voices',
      'Basic Knowledge Base RAG',
      'Email & Community Support',
      '$0.12/min overage rate'
    ],
    cta: 'Start Free Trial',
    popular: false
  },
  {
    name: 'Growth',
    badge: 'Most Popular',
    priceMonthly: '$199',
    priceAnnual: '$159',
    description: 'Ideal for scaling call centers, clinics, and service businesses.',
    features: [
      '5 Dedicated Phone Numbers',
      '2,500 Included Call Minutes / mo',
      'Sub-300ms Low-Latency Voices',
      'Custom CRM Webhook Triggers',
      'Warm Human Agent Handoff',
      'Full Transcript & Sentiment Analytics',
      '$0.09/min overage rate'
    ],
    cta: 'Get Started with Growth',
    popular: true
  },
  {
    name: 'Enterprise',
    badge: 'Custom Architecture',
    priceMonthly: 'Custom',
    priceAnnual: 'Custom',
    description: 'Single-tenant clusters, custom acoustic models, and dedicated SLAs.',
    features: [
      'Unlimited Phone Numbers & Channels',
      'Custom Volume Volume Discounts',
      'Dedicated Single-Tenant Cluster',
      'SOC2 Type II, HIPAA & BAA',
      'Custom Brand Voice Fine-Tuning',
      'Dedicated 24/7 Voice Architect SLA'
    ],
    cta: 'Contact Sales',
    popular: false
  }
]

export default function PricingPage() {
  const [annual, setAnnual] = useState(true)

  return (
    <div className="pt-28 md:pt-36 pb-16 bg-[#FAF7F2] min-h-screen">
      <div className="container max-w-6xl mx-auto px-4 pt-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={14} />
            <span>Transparent Pricing</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Predictable Voice AI Pricing
          </h1>
          <p className="text-muted text-base sm:text-lg mb-8">
            Scale your automated telephony with zero hidden fees. Pay only for connected minute volume.
          </p>

          {/* Billing Switch */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? 'text-foreground font-bold' : 'text-muted'}`}>Monthly</span>
            <button
              onClick={() => setAnnual(!annual)}
              className="w-14 h-8 rounded-full bg-panel border border-line p-1 relative transition-colors focus:outline-none"
            >
              <div
                className={`w-6 h-6 rounded-full bg-lime transition-transform ${
                  annual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? 'text-foreground font-bold' : 'text-muted'}`}>
              Annual <span className="text-xs text-lime bg-lime-soft px-2 py-0.5 rounded-full font-bold">Save 20%</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 bg-card border transition-all flex flex-col justify-between relative shadow-sm hover:shadow-lg ${
                tier.popular ? 'border-lime ring-2 ring-lime/20' : 'border-line'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-lime text-background text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {tier.badge}
                </span>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">{tier.name}</h3>
                  {!tier.popular && (
                    <span className="text-xs text-muted font-mono">{tier.badge}</span>
                  )}
                </div>

                <div className="mb-4">
                  <span className="text-4xl font-extrabold text-foreground">
                    {annual ? tier.priceAnnual : tier.priceMonthly}
                  </span>
                  {tier.priceMonthly !== 'Custom' && (
                    <span className="text-sm text-muted"> / month</span>
                  )}
                </div>

                <p className="text-sm text-muted mb-6 leading-relaxed">{tier.description}</p>

                <div className="space-y-3 mb-8 border-t border-line/60 pt-6">
                  {tier.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-foreground">
                      <Check size={16} className="text-lime flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Button
                href="/contact"
                variant={tier.popular ? 'lime' : 'quiet'}
                className="w-full"
              >
                {tier.cta} <ArrowRight size={15} />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

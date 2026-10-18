'use client'

import React from 'react'
import Link from 'next/link'
import {
  Home,
  CreditCard,
  Heart,
  ShoppingCart,
  Utensils,
  Landmark,
  TrendingUp,
  UserPlus,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  PhoneCall
} from 'lucide-react'
import { Button } from '@/components/marketing/Navbar'

const useCasesList = [
  {
    title: 'Real Estate',
    slug: 'real-estate',
    desc: 'Qualify leads & schedule viewings',
    details: 'Automate buyer and tenant qualification, answer property listing queries, and book open-house appointments into realtor calendars.',
    icon: Home,
    tag: 'Popular',
    metrics: '3.4x Viewings Booked'
  },
  {
    title: 'Banking',
    slug: 'banking',
    desc: 'Card activations, EMI & KYC',
    details: 'Deliver instant PCI-DSS compliant debit/credit card activation, loan EMI scheduling, and voice 2FA verification.',
    icon: CreditCard,
    tag: 'PCI-DSS Compliant',
    metrics: '< 45s Resolution'
  },
  {
    title: 'Healthcare',
    slug: 'healthcare',
    desc: 'Reminders, refills & triage',
    details: 'Provide HIPAA-compliant patient intake, prescription refill routing, symptom triage, and automated appointment reminders.',
    icon: Heart,
    tag: 'HIPAA Certified',
    metrics: '-42% No-Shows'
  },
  {
    title: 'E-Commerce',
    slug: 'e-commerce',
    desc: 'Cart recovery & order support',
    details: 'Recover abandoned checkout carts, handle order tracking (WISMO), and automate return shipping label dispatch.',
    icon: ShoppingCart,
    tag: 'Shopify Sync',
    metrics: '+24% Checkout Sales'
  },
  {
    title: 'Restaurants',
    slug: 'restaurants',
    desc: 'Reservations & takeout',
    details: 'Never miss a dinner rush call. Book table reservations with OpenTable/Resy and take phone food orders with POS sync.',
    icon: Utensils,
    tag: 'OpenTable & POS',
    metrics: '100% Calls Answered'
  },
  {
    title: 'Government',
    slug: 'government',
    desc: 'Citizen helplines & enrollments',
    details: 'Modernize 311 citizen helplines, permit tracking, utility inquiries, and public program enrollments with zero wait times 24/7.',
    icon: Landmark,
    tag: 'FedRAMP Ready',
    metrics: '-72% Wait Times'
  },
  {
    title: 'Sales',
    slug: 'sales',
    desc: 'Outbound prospecting & demos',
    details: 'Deploy AI SDRs that qualify web form leads within 10 seconds and book discovery demos on Account Executive calendars.',
    icon: TrendingUp,
    tag: 'Outbound Dialing',
    metrics: '3.8x Demo Lift'
  },
  {
    title: 'HR & Hiring',
    slug: 'hr-hiring',
    desc: 'Screens & interview scheduling',
    details: 'Automate initial phone screens, verify job qualifications, and schedule interviews directly into ATS systems.',
    icon: UserPlus,
    tag: 'ATS Integrated',
    metrics: '-60% Time-to-Hire'
  },
]

export default function UseCasesIndexPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      {/* Hero Header */}
      <section className="container pt-8 pb-16 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles size={14} />
            <span>Industry Voice Automation</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
            Tailored AI Voice Agents for <span className="text-lime-600 dark:text-lime underline decoration-lime/30">Every Industry</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            From high-volume customer support to automated sales prospecting and appointment booking — discover how Yuviz transforms phone calls across top industries.
          </p>

          <div className="flex justify-center gap-4">
            <Button href="/contact">
              Talk to Industry Team <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Grid of 8 Use Cases */}
      <section className="container py-12 border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCasesList.map((uc) => {
            const Icon = uc.icon
            return (
              <Link
                key={uc.slug}
                href={`/use-cases/${uc.slug}`}
                className="p-6 rounded-2xl bg-card border border-line hover:border-lime/50 transition-all shadow-sm hover:shadow-lg flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-panel text-foreground group-hover:bg-lime group-hover:text-background transition-colors">
                      <Icon size={22} />
                    </div>
                    {uc.tag && (
                      <span className="text-[10px] font-semibold text-lime px-2 py-0.5 rounded bg-lime-soft border border-lime/20">
                        {uc.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-lime-600 dark:group-hover:text-lime transition-colors">
                    {uc.title}
                  </h3>
                  <p className="text-xs font-semibold text-lime mb-3">{uc.desc}</p>
                  <p className="text-sm text-muted leading-relaxed">{uc.details}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-line/60 flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-foreground">{uc.metrics}</span>
                  <span className="font-semibold text-lime group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Explore <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12">
        <div className="rounded-3xl bg-lime-soft/40 border border-lime/30 p-8 sm:p-14 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4">
            Need a custom voice workflow for your business?
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto mb-8">
            Our solutions engineering team can train a custom voice agent on your specific knowledge base, CRM schema, and phone lines in under 48 hours.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact">
              Schedule Custom Demo <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

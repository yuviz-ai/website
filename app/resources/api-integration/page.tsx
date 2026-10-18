import React from 'react'
import { Metadata } from 'next'
import { Code2, ArrowRight, CheckCircle2, Webhook, Zap, Database, ExternalLink } from 'lucide-react'
import { Button } from '@/components/marketing/Navbar'

export const metadata: Metadata = {
  title: 'API Integration & Connectors — Yuviz AI',
  description: 'Connect Yuviz AI voice agents with Twilio, Salesforce, HubSpot, Stripe, Zapier, and custom Webhooks.',
}

const integrations = [
  {
    name: 'Twilio Telephony',
    category: 'SIP & Carrier',
    desc: 'Connect your existing Twilio SIP trunks and phone numbers directly to Yuviz Voice Gateway.',
    badge: 'Native SIP'
  },
  {
    name: 'Salesforce CRM',
    category: 'CRM & ERP',
    desc: 'Automatically log call transcripts, sentiment scores, and follow-up tasks into Salesforce leads.',
    badge: '2-Way Sync'
  },
  {
    name: 'HubSpot CRM',
    category: 'CRM & Marketing',
    desc: 'Trigger outbound AI voice follow-ups whenever a contact status changes in your HubSpot pipelines.',
    badge: 'Automated Triggers'
  },
  {
    name: 'Stripe Payments',
    category: 'Billing & Commerce',
    desc: 'Allow AI voice agents to securely process credit card payments over phone using PCI-DSS IVR.',
    badge: 'PCI Compliant'
  },
  {
    name: 'Google Calendar & Outlook',
    category: 'Scheduling',
    desc: 'Real-time calendar slot checking and event dispatching directly during live phone conversations.',
    badge: 'Realtime Sync'
  },
  {
    name: 'Zapier & Make',
    category: 'No-Code Automation',
    desc: 'Connect Yuviz voice events to 5,000+ web applications without writing code.',
    badge: 'No-Code'
  },
]

export default function ApiIntegrationPage() {
  return (
    <div className="py-12 bg-background min-h-screen">
      <div className="container max-w-5xl mx-auto pt-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lime-soft border border-lime/30 text-lime text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap size={14} />
            <span>Ecosystem & Integrations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            API Integration & Connectors
          </h1>
          <p className="text-muted text-base sm:text-lg">
            Connect Yuviz to your CRM, telephony provider, scheduling tools, and payment gateways in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {integrations.map((item, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-card border border-line hover:border-lime/50 transition-all shadow-sm flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-muted">{item.category}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-lime-soft text-lime border border-lime/30">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-lime-600 dark:group-hover:text-lime transition-colors mb-2">
                  {item.name}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-line/60 text-xs font-medium text-lime flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Configure Connector <ArrowRight size={13} />
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-card border border-line flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Need a custom enterprise integration?</h3>
            <p className="text-muted text-sm max-w-xl">
              Our integration engineers can build custom REST/gRPC wrappers for your internal database or legacy PBX setup.
            </p>
          </div>
          <Button href="/contact" className="whitespace-nowrap">
            Request Custom Integration <ArrowRight size={15} />
          </Button>
        </div>
      </div>
    </div>
  )
}

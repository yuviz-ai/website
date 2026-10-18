'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { PhoneOutgoing, Calendar, ListFilter, ShieldCheck, Zap, BarChart2, Clock, Users } from 'lucide-react'

export default function OutboundCallsPage() {
  return (
    <ProductPageTemplate
      badge="Autonomous Outbound Voice Campaigns"
      title="Outbound Calls"
      highlightTitle="Proactive Engagement"
      subtitle="Reach thousands of customers proactively. Automate appointment confirmations, payment reminders, lead qualification, and post-service feedback."
      features={[
        {
          title: 'Smart Campaign Pacing',
          description: 'Intelligent campaign dialers automatically adjust call velocity based on target agent availability and carrier answer rates.',
          icon: ListFilter,
          tag: 'Predictive Dialing'
        },
        {
          title: 'Compliant Calling Windows',
          description: 'Enforce timezone-aware call windows (TCPA & STIR/SHAKEN compliant) to protect your brand reputation.',
          icon: ShieldCheck,
          tag: 'TCPA Compliant'
        },
        {
          title: 'Automated Voicemail Detection',
          description: 'Detect answering machines instantly (AMD) and leave custom pre-recorded drop messages or hang up gracefully.',
          icon: Clock,
          tag: 'AMD Protection'
        },
        {
          title: 'Dynamic Contact List Sync',
          description: 'Trigger outbound calls automatically when a new lead fills a web form or an invoice becomes past due.',
          icon: Calendar,
          tag: 'CRM Webhooks'
        }
      ]}
      specsTitle="Outbound Campaign Engine"
      specs={[
        { label: 'AMD Speed', value: '< 250ms Detection' },
        { label: 'STIR / SHAKEN', value: 'Attestation A Signed' },
        { label: 'Daily Throughput', value: '1M+ Automated Calls' },
        { label: 'Retry Engine', value: 'Custom Backoff Logic' }
      ]}
      codeSnippet={`// Dispatch an Outbound AI Voice Campaign
const campaign = await yuviz.campaigns.dispatch({
  name: 'Q3 Appointment Confirmations',
  contacts: [
    { phone: '+14155550199', name: 'Sarah Connor', appointmentTime: 'Tomorrow 2:30 PM' },
    { phone: '+14155550188', name: 'John Doe', appointmentTime: 'Tomorrow 4:00 PM' }
  ],
  agentId: 'outbound-confirmation-agent',
  retryPolicy: { maxAttempts: 3, intervalMinutes: 45 }
});`}
    />
  )
}

'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { TrendingUp, PhoneOutgoing, Target, Zap, Calendar, UserCheck, BarChart3, Sparkles } from 'lucide-react'

export default function SalesUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="Outbound Sales & Prospecting AI"
      industryName="Sales"
      title="Scale Outbound Prospecting & Demo Booking"
      highlightTitle="Outbound Prospecting & Demos"
      subtitle="Equip your sales team with autonomous AI SDRs that qualify inbound leads, re-engage cold prospects, and schedule discovery demos directly on AE calendars with sub-300ms natural conversation."
      icon={TrendingUp}
      stats={[
        { label: 'Outbound Dial Capacity', value: '10k+ Dials/Day' },
        { label: 'Demo Booking Rate', value: '3.8x Lift' },
        { label: 'Speed to Lead', value: '< 10 Secs' },
        { label: 'CRM Sync', value: 'Salesforce & Hubspot' }
      ]}
      workflows={[
        {
          title: 'Speed-to-Lead Inbound Callback',
          description: 'Call web form submissions within 10 seconds of opt-in to qualify budget, authority, and timeline before interest drops.',
          icon: Zap,
          tag: 'Sub-10s Speed-to-Lead'
        },
        {
          title: 'Autonomous Outbound SDR Outreach',
          description: 'Conduct natural, consultative prospecting calls to cold or warm target lists and qualify ICP fit autonomously.',
          icon: Target,
          tag: 'AI SDR Agents'
        },
        {
          title: 'Account Executive Demo Scheduling',
          description: 'Check real-time calendar availability of target Account Executives and book qualified discovery calls on the spot.',
          icon: Calendar,
          tag: 'Cal.com & Calendly'
        },
        {
          title: 'Stale Lead Re-Engagement',
          description: 'Re-activate lost opportunities or dormant CRM leads with personalized voice check-ins and updated value props.',
          icon: UserCheck,
          tag: 'CRM Re-activation'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Speed-to-lead outbound call triggered for inbound demo request from ACME Corp' },
        { speaker: 'Yuviz Sales AI SDR', role: 'agent', text: '“Hi Jordan! This is Sam calling from Yuviz AI. I saw you just requested a demo on our website for ACME Corp. Did I catch you at a good time?”', timestamp: '00:02' },
        { speaker: 'Caller (Jordan)', role: 'caller', text: '“Oh wow, that was fast! Yes, I have a few minutes. We are currently evaluating AI voice tools for our 50-agent sales center.”', timestamp: '00:08' },
        { speaker: 'Yuviz Sales AI SDR', role: 'agent', text: '“That is right up our alley! We help sales teams automate outbound qualification and demo scheduling. What is your team’s main bottleneck right now — call volume or lead response time?”', timestamp: '00:14' },
        { speaker: 'Caller (Jordan)', role: 'caller', text: '“Response time definitely. Inbound leads take our reps over 4 hours to call back.”', timestamp: '00:20' },
        { speaker: 'Yuviz Sales AI SDR', role: 'agent', text: '“We can bring that down to under 10 seconds. I would love to pair you with our VP of Sales Engineering, Rachel, for a 15-minute live platform demo. Does tomorrow at 2:00 PM EST work for your schedule?”', timestamp: '00:26' },
        { speaker: 'Caller (Jordan)', role: 'caller', text: '“2:00 PM EST tomorrow works great.”', timestamp: '00:30' },
        { speaker: 'Yuviz Sales AI SDR', role: 'agent', text: '“Awesome! Calendar invitation and Zoom link are in your inbox. Looking forward to showing you the system tomorrow!”', timestamp: '00:35' }
      ]}
      integrations={['Salesforce Sales Cloud', 'HubSpot Sales Hub', 'Outreach.io', 'Gong', 'Calendly', 'Chili Piper']}
      compliance={[
        'Full TCPA & FCC Outbound Compliance Architecture',
        'Automatic DNC (Do Not Call) Registry Cross-Check',
        'Local Presence Caller ID Spoofing Protection',
        'Call Recording Consent Disclosure Logic'
      ]}
      roiMetrics={[
        { value: '3.8x', label: 'More Demos Booked', desc: 'Instant speed-to-lead callback converts web leads before competitors' },
        { value: '10s', label: 'Speed-to-Lead Callback', desc: 'Automated dialer contacts prospects the moment they fill a web form' },
        { value: '60%', label: 'SDR Cost Savings', desc: 'Scale outbound prospecting capacity without multiplying headcount' }
      ]}
    />
  )
}

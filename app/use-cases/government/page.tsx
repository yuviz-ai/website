'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { Landmark, Shield, FileText, PhoneIncoming, Users, HelpCircle, CheckCircle2, Globe } from 'lucide-react'

export default function GovernmentUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="Government & Public Sector AI"
      industryName="Government"
      title="Accessible 24/7 Citizen Voice Helplines"
      highlightTitle="Citizen Helplines & Enrollments"
      subtitle="Modernize 311 helplines, municipal service inquiries, permit status checks, and public program enrollments with instant-answering, FedRAMP-ready AI voice agents."
      icon={Landmark}
      stats={[
        { label: 'First Call Resolution', value: '94% Direct' },
        { label: '311 Queue Reduction', value: '-72% Wait' },
        { label: 'GovCloud Ready', value: 'FedRAMP / SOC2' },
        { label: 'Citizen Satisfaction', value: '96% Positive' }
      ]}
      workflows={[
        {
          title: '311 Municipal Helpline Automation',
          description: 'Answer citizen questions about trash pickup, utility billing, parking regulations, and city service schedules effortlessly.',
          icon: HelpCircle,
          tag: '311 Automation'
        },
        {
          title: 'Public Program Enrollment Intake',
          description: 'Guide citizens through eligibility screening, application intake, and required documentation for local assistance programs.',
          icon: FileText,
          tag: 'Enrollment Assist'
        },
        {
          title: 'Permit & License Status Tracking',
          description: 'Allow contractors and residents to check building permit status, business licensing, or inspection outcomes instantly.',
          icon: CheckCircle2,
          tag: 'Real-time Lookup'
        },
        {
          title: 'Emergency Public Info Dissemination',
          description: 'Broadcast urgent weather, road closure, or public health alerts via high-capacity inbound and outbound voice channels.',
          icon: Shield,
          tag: 'Public Safety'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Call routed to City 311 Citizen Services hotline. Telephony connected.' },
        { speaker: 'Yuviz Gov Voice Agent', role: 'agent', text: '“Welcome to the City 311 Services helpline. My name is Citizen Voice Assistant. How can I assist you with municipal services today?”', timestamp: '00:02' },
        { speaker: 'Caller (Marcus)', role: 'caller', text: '“Hi! I submitted a residential building permit application two weeks ago and want to check if it has been approved.”', timestamp: '00:08' },
        { speaker: 'Yuviz Gov Voice Agent', role: 'agent', text: '“I can look that up right away! Please state your 8-digit permit application number or parcel ID.”', timestamp: '00:13' },
        { speaker: 'Caller (Marcus)', role: 'caller', text: '“The permit number is PRM 2026 9012.”', timestamp: '00:18' },
        { speaker: 'Yuviz Gov Voice Agent', role: 'agent', text: '“Thank you Marcus. Permit #PRM-2026-9012 for 742 Evergreen Terrace was approved by the Department of Building Inspection yesterday. Your inspector card is ready for download online.”', timestamp: '00:24' },
        { speaker: 'Caller (Marcus)', role: 'caller', text: '“Great news! Can you text me the link to download it?”', timestamp: '00:29' },
        { speaker: 'Yuviz Gov Voice Agent', role: 'agent', text: '“I have just sent the direct secure portal link to your phone. Is there anything else I can help you with today?”', timestamp: '00:34' }
      ]}
      integrations={['AWS GovCloud', 'Microsoft Azure Government', 'Tyler Technologies', 'Salesforce Public Sector', 'ServiceNow', 'Accela']}
      compliance={[
        'FedRAMP & StateRAMP Compliant Cloud Deployment Options',
        'Section 508 & ADA Voice Accessibility Standards',
        'CJIS & HIPAA Security Compliant Data Pipeline',
        'Real-time Multi-lingual Translation (Spanish, Cantonese, Vietnamese, French, etc.)'
      ]}
      roiMetrics={[
        { value: '-72%', label: 'Citizen Wait Times', desc: 'Instant 311 helpline call answering without hold music' },
        { value: '100%', label: 'Citizen Call Intake', desc: 'Continuous municipal telephone intake with zero dropped calls' },
        { value: '24/7/365', label: 'Uninterrupted Access', desc: 'Continuous municipal support during holidays and severe weather' }
      ]}
    />
  )
}

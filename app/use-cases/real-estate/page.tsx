'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { Home, Calendar, PhoneCall, Filter, Key, MapPin, Building, ShieldCheck } from 'lucide-react'

export default function RealEstateUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="Real Estate AI Voice Agents"
      industryName="Real Estate"
      title="Never Miss a Hot Property Lead"
      highlightTitle="Qualify & Schedule 24/7"
      subtitle="Yuviz AI voice agents answer buyer and tenant calls instantly, answer property queries, qualify pre-approvals, and book viewing appointments directly into agent calendars."
      icon={Home}
      stats={[
        { label: 'Instant Lead Capture', value: '< 1 Ring' },
        { label: 'Viewing Booking Rate', value: '3.4x Higher' },
        { label: 'Calendar Sync', value: 'Google & Outlook' },
        { label: '24/7 Availability', value: '100% Covered' }
      ]}
      workflows={[
        {
          title: 'Lead Qualification & Intake',
          description: 'Gather budget, move-in timeline, desired bedrooms/bathrooms, and pre-approval status before transferring to human realtors.',
          icon: Filter,
          tag: 'Lead Scoring'
        },
        {
          title: 'Automated Viewing Scheduling',
          description: 'Sync directly with listing agent calendars to offer available tour slots and send automated SMS reminders.',
          icon: Calendar,
          tag: 'Direct Calendar Sync'
        },
        {
          title: 'Property Listing Q&A',
          description: 'Answer questions about HOA fees, square footage, school districts, pet policies, and parking using listing knowledge bases.',
          icon: MapPin,
          tag: 'RAG Knowledge'
        },
        {
          title: 'Tenant Application Follow-ups',
          description: 'Send automated outbound voice calls for lease renewal reminders, application updates, and maintenance dispatch.',
          icon: Key,
          tag: 'Outbound Automation'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Inbound call connected from +1 (415) 890-2134 to Sunset Heights Listing Hotline' },
        { speaker: 'Yuviz AI Agent', role: 'agent', text: '“Thank you for calling Sunset Heights Realty! My name is Alex. Are you calling regarding the 3-bedroom penthouse on Ocean Drive?”', timestamp: '00:02' },
        { speaker: 'Caller (Sarah)', role: 'caller', text: '“Yes! I saw the listing on Zillow. What is the monthly HOA fee and is there dedicated garage parking?”', timestamp: '00:07' },
        { speaker: 'Yuviz AI Agent', role: 'agent', text: '“The HOA fee for unit 402 is $450 per month, which includes water, security, and pool access. It comes with two private covered parking spaces. Are you looking to buy within the next 30 to 60 days?”', timestamp: '00:12' },
        { speaker: 'Caller (Sarah)', role: 'caller', text: '“Yes, I have pre-approval and am ready to view it this weekend!”', timestamp: '00:18' },
        { speaker: 'Yuviz AI Agent', role: 'agent', text: '“Fantastic! I have open viewing slots with listing agent Marcus this Saturday at 11:00 AM or 2:30 PM. Which works best for you?”', timestamp: '00:24' },
        { speaker: 'Caller (Sarah)', role: 'caller', text: '“11:00 AM works perfectly.”', timestamp: '00:28' },
        { speaker: 'Yuviz AI Agent', role: 'agent', text: '“You are confirmed for Saturday at 11:00 AM! I just sent a confirmation text to your mobile number with directions and Marcus’s contact details.”', timestamp: '00:32' }
      ]}
      integrations={['Zillow & Realtor.com', 'Follow Up Boss', 'Salesforce CRM', 'Google Calendar', 'AppFolio', 'Yardi Matrix']}
      compliance={[
        'TCPA & FCC Compliant Voice Outreach',
        'Fair Housing Act Compliant Scripting',
        '256-bit Encrypted Call Transcripts & Record Storage',
        'Automatic DNC (Do Not Call) List Screening'
      ]}
      roiMetrics={[
        { value: '3.4x', label: 'More Viewings Booked', desc: 'Leads booked instantly while interest is highest' },
        { value: '88%', label: 'Cost Reduction', desc: 'Lower receptionist & call center overhead' },
        { value: '0', label: 'Missed Weekend Calls', desc: '24/7 lead capture during peak open-house hours' }
      ]}
    />
  )
}

'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { Heart, ShieldCheck, Clock, Activity, Calendar, Pill, AlertCircle, PhoneCall } from 'lucide-react'

export default function HealthcareUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="HIPAA-Compliant Healthcare AI"
      industryName="Healthcare"
      title="Empathetic Patient Care Call Automation"
      highlightTitle="Reminders, Refills & Triage"
      subtitle="Provide HIPAA-compliant 24/7 patient voice intake, appointment scheduling, prescription refill requests, and initial symptom triage with automated medical protocol routing."
      icon={Heart}
      stats={[
        { label: 'HIPAA Compliance', value: 'BAA Signed' },
        { label: 'No-Show Reduction', value: 'Up to 42%' },
        { label: 'Refill Processing', value: '< 60 Secs' },
        { label: 'Emergency Handoff', value: 'Instant' }
      ]}
      workflows={[
        {
          title: 'Automated Patient Appointment Booking',
          description: 'Schedule, reschedule, or cancel patient clinic appointments with direct 2-way Electronic Health Record (EHR) sync.',
          icon: Calendar,
          tag: 'EHR Connected'
        },
        {
          title: 'Prescription Refill Intake',
          description: 'Collect pharmacy details, medication names, and dosage info over the phone and submit directly to doctor queues.',
          icon: Pill,
          tag: 'Rx Workflow'
        },
        {
          title: 'Initial Symptom Triage & Routing',
          description: 'Ask clinical screening questions and route urgent medical conditions immediately to triage nurses or emergency lines.',
          icon: Activity,
          tag: 'Clinical Protocol'
        },
        {
          title: 'Proactive Outbound Care Reminders',
          description: 'Automate post-op check-in calls, preventive screening reminders, and pre-appointment prep instructions.',
          icon: Clock,
          tag: 'Outbound Reminders'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Encrypted HIPAA-compliant voice session initialized. BAA active.' },
        { speaker: 'Yuviz Healthcare Agent', role: 'agent', text: '“Thank you for calling City Care Medical Center. I am Maya, your AI health assistant. Are you calling to schedule an appointment, request a prescription refill, or speak to a nurse?”', timestamp: '00:02' },
        { speaker: 'Caller (Maria)', role: 'caller', text: '“Hi Maya, I need to request a refill for my blood pressure prescription, Lisinopril.”', timestamp: '00:08' },
        { speaker: 'Yuviz Healthcare Agent', role: 'agent', text: '“I can assist with that Maria! To confirm your chart, please verify your date of birth.”', timestamp: '00:13' },
        { speaker: 'Caller (Maria)', role: 'caller', text: '“July 22nd, 1974.”', timestamp: '00:17' },
        { speaker: 'Yuviz Healthcare Agent', role: 'agent', text: '“Thank you Maria. I see your Lisinopril 10mg prescription on file with CVS Pharmacy on Main Street. Is that your preferred pharmacy?”', timestamp: '00:22' },
        { speaker: 'Caller (Maria)', role: 'caller', text: '“Yes, that is the one.”', timestamp: '00:26' },
        { speaker: 'Yuviz Healthcare Agent', role: 'agent', text: '“Perfect! I have submitted the refill authorization request directly to Dr. Williams. Once approved, CVS will notify you when it is ready for pickup, usually within 4 hours.”', timestamp: '00:32' }
      ]}
      integrations={['Epic Systems', 'Cerner / Oracle Health', 'AthenaHealth', 'eClinicalWorks', 'Allscripts', 'Twilio HIPAA Trunking']}
      compliance={[
        'Full HIPAA BAA (Business Associate Agreement) Included',
        'End-to-End TLS 1.3 Encryption for Audio Streams & Transcripts',
        'SOC2 Type II & HITRUST Security Framework Certified',
        'Emergency 911 Handoff & Immediate Nurse Escalation Protocol'
      ]}
      roiMetrics={[
        { value: '42%', label: 'Reduction in No-Shows', desc: 'Automated interactive voice reminders with instant rescheduling' },
        { value: '65%', label: 'Nurse Time Saved', desc: 'Routine prescription and booking calls handled by AI' },
        { value: '24/7', label: 'Patient Access', desc: 'After-hours patient intake without emergency room overburden' }
      ]}
    />
  )
}

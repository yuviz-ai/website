'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { UserPlus, Calendar, CheckCircle2, Clock, Users, FileCheck, Briefcase, Sparkles } from 'lucide-react'

export default function HRHiringUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="HR & Talent Acquisition AI"
      industryName="HR & Hiring"
      title="Accelerate Candidate Screening & Hiring"
      highlightTitle="Screens & Interview Scheduling"
      subtitle="Automate initial phone screening interviews, verify applicant qualifications, conduct pre-hire surveys, and schedule live interviewer sessions with ATS integration."
      icon={UserPlus}
      stats={[
        { label: 'Time-to-Hire Reduction', value: '-60% Days' },
        { label: 'Candidate Screen Capacity', value: 'Unlimited' },
        { label: 'Interview Booking', value: '100% Automated' },
        { label: 'ATS Integration', value: 'Greenhouse / Lever' }
      ]}
      workflows={[
        {
          title: 'Automated Candidate Phone Screening',
          description: 'Conduct standardized 5-minute initial voice interviews asking required qualification, work authorization, and salary expectation questions.',
          icon: FileCheck,
          tag: 'Structured Screening'
        },
        {
          title: 'Recruiter Interview Scheduling',
          description: 'Instantly schedule qualified applicants directly into recruiter calendars with automated calendar invite & SMS reminder dispatch.',
          icon: Calendar,
          tag: 'Cal Sync'
        },
        {
          title: 'Applicant FAQ & Status Updates',
          description: 'Answer candidate inquiries regarding application status, job locations, benefits packages, and interview preparation.',
          icon: Briefcase,
          tag: 'Candidate Support'
        },
        {
          title: 'High-Volume Seasonal Hiring Surveys',
          description: 'Run outbound voice campaigns to screen thousands of seasonal or hourly workers for retail, warehouse, or logistics roles.',
          icon: Users,
          tag: 'High Volume Volume'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Outbound screening call initiated to applicant #CAD-40291 for Senior DevOps Engineer' },
        { speaker: 'Yuviz HR Voice Recruiter', role: 'agent', text: '“Hi Taylor! This is Maya from CloudScale Tech recruitment. I saw your application for the Senior DevOps role and would love to conduct a quick 3-minute voice screen. Do you have a moment?”', timestamp: '00:02' },
        { speaker: 'Caller (Taylor)', role: 'caller', text: '“Hi Maya! Yes, I have a few minutes.”', timestamp: '00:07' },
        { speaker: 'Yuviz HR Voice Recruiter', role: 'agent', text: '“Awesome! First question: Do you have at least 4 years of hands-on experience managing Kubernetes clusters in AWS environments?”', timestamp: '00:12' },
        { speaker: 'Caller (Taylor)', role: 'caller', text: '“Yes, I have been architecting EKS clusters in AWS for over 6 years now.”', timestamp: '00:18' },
        { speaker: 'Yuviz HR Voice Recruiter', role: 'agent', text: '“Great! And are you currently authorized to work in the US without requiring visa sponsorship?”', timestamp: '00:23' },
        { speaker: 'Caller (Taylor)', role: 'caller', text: '“Yes, I am a US citizen.”', timestamp: '00:27' },
        { speaker: 'Yuviz HR Voice Recruiter', role: 'agent', text: '“Perfect! You meet all initial requirements. I have an open 30-minute technical interview slot with Engineering Manager David tomorrow at 10:00 AM or Thursday at 3:00 PM. Which works for you?”', timestamp: '00:33' },
        { speaker: 'Caller (Taylor)', role: 'caller', text: '“Tomorrow at 10:00 AM is great.”', timestamp: '00:37' },
        { speaker: 'Yuviz HR Voice Recruiter', role: 'agent', text: '“You are set for 10:00 AM tomorrow! I just sent the calendar invite and interview packet to your email. Best of luck!”', timestamp: '00:42' }
      ]}
      integrations={['Greenhouse', 'Lever', 'Workday', 'BambooHR', 'Ashby', 'SmartRecruiters']}
      compliance={[
        'Equal Employment Opportunity (EEO) Compliant Screening Scripting',
        'SOC2 Type II & GDPR Candidate Data Encryption',
        'Structured Audio Transcript Storage in ATS Candidate Files',
        'Candidate Opt-in & Voluntary Survey Consent Protocols'
      ]}
      roiMetrics={[
        { value: '-60%', label: 'Time-to-Hire Reduction', desc: 'Screen applicants instantly upon resume submission' },
        { value: '100%', label: 'Screening Completion', desc: 'Zero candidate drops due to delayed recruiter call-backs' },
        { value: '25+ Hrs', label: 'Recruiter Time Saved/Wk', desc: 'Recruiters spend time interviewing finalists, not scheduling phone tags' }
      ]}
    />
  )
}

'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { CreditCard, Shield, Zap, Lock, DollarSign, PhoneIncoming, AlertTriangle, FileText } from 'lucide-react'

export default function BankingUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="Banking & Financial Services AI"
      industryName="Banking"
      title="Secure Voice Automation for Modern Banking"
      highlightTitle="Card Activations, EMI & KYC"
      subtitle="Deliver instant, PCI-DSS compliant customer support for debit/credit card activations, EMI payment scheduling, balance checks, and automated KYC verification over the phone."
      icon={CreditCard}
      stats={[
        { label: 'PCI-DSS Compliance', value: 'Level 1' },
        { label: 'Avg Call Handle Time', value: '< 45 Secs' },
        { label: 'Fraud Detection Sync', value: 'Real-time' },
        { label: '2FA Voice OTP', value: 'Instant' }
      ]}
      workflows={[
        {
          title: 'Instant Card Activation',
          description: 'Authenticate cardholders securely via voice OTP or biometric PIN, then activate debit & credit cards without long queue waits.',
          icon: CreditCard,
          tag: 'PCI-DSS Compliant'
        },
        {
          title: 'EMI & Loan Repayment Scheduling',
          description: 'Provide loan balance updates, calculate EMI options, and process automated payment commitments via IVR & voice.',
          icon: DollarSign,
          tag: 'Core Banking API'
        },
        {
          title: 'Voice KYC & Identity Verification',
          description: 'Automate customer identity verification checks, document status updates, and compliance phone confirmations.',
          icon: Shield,
          tag: 'Biometric Security'
        },
        {
          title: 'Fraud Alert & Card Lock',
          description: 'Allow customers to immediately lock lost cards, report suspicious transactions, or freeze accounts 24/7.',
          icon: AlertTriangle,
          tag: 'Emergency Response'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Secure voice link established. Verification token: #9842-SEC' },
        { speaker: 'Yuviz Banking Bot', role: 'agent', text: '“Welcome to Apex National Bank automated hotline. I see you are calling from your registered mobile ending in 4410. Would you like to activate your new Visa Platinum card?”', timestamp: '00:02' },
        { speaker: 'Caller (David)', role: 'caller', text: '“Yes, I received my card in the mail today and need to activate it.”', timestamp: '00:07' },
        { speaker: 'Yuviz Banking Bot', role: 'agent', text: '“Please state the last 4 digits of the card number and your date of birth for identity confirmation.”', timestamp: '00:11' },
        { speaker: 'Caller (David)', role: 'caller', text: '“Last 4 digits are 8821, and DOB is March 14th, 1988.”', timestamp: '00:18' },
        { speaker: 'Yuviz Banking Bot', role: 'agent', text: '“Thank you David! I have verified your identity. I am sending a 6-digit confirmation code via SMS now. Please read the code aloud when received.”', timestamp: '00:23' },
        { speaker: 'Caller (David)', role: 'caller', text: '“The code is 5 9 1 0 3 2.”', timestamp: '00:29' },
        { speaker: 'Yuviz Banking Bot', role: 'agent', text: '“Authentication successful! Your Visa Platinum card ending in 8821 is now fully activated and ready for use. Would you also like to set up monthly auto-EMI payments?”', timestamp: '00:34' }
      ]}
      integrations={['Fiserv', 'Jack Henry', 'Salesforce Financial Services Cloud', 'Stripe', 'Twilio Authy', 'Finacle Core Banking']}
      compliance={[
        'PCI-DSS Level 1 Service Provider Certified',
        'SOC2 Type II & ISO 27001 Financial Encryption',
        'GLBA & GDPR Compliant Data Handling',
        'Zero Data Retention Option for Sensitive Card Numbers'
      ]}
      roiMetrics={[
        { value: '75%', label: 'Cost Per Call Saved', desc: 'Drastic reduction in routine customer service queue costs' },
        { value: '< 45s', label: 'Average Resolution Time', desc: 'Instant card activation without human agent transfer' },
        { value: '99.9%', label: 'Authentication Accuracy', desc: 'Secure 2FA voice token verification' }
      ]}
    />
  )
}

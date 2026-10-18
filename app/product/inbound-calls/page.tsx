'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { PhoneIncoming, UserCheck, Zap, Shield, GitFork, Clock, PhoneCall, Headphones } from 'lucide-react'

export default function InboundCallsPage() {
  return (
    <ProductPageTemplate
      badge="Automated Telephony & Routing"
      title="Inbound Calls"
      highlightTitle="Zero Wait Time"
      subtitle="Answer 100% of customer phone calls on the first ring. Handle inquiries, verify identity, gather caller intent, and transfer to human agents seamlessly."
      features={[
        {
          title: 'Instant Answer Telephony',
          description: 'Scale from 1 to 50,000 simultaneous incoming phone calls without ever placing customers on hold or triggering busy tones.',
          icon: PhoneIncoming,
          tag: '100% Pickup'
        },
        {
          title: 'Smart Intent & CRM Lookup',
          description: 'Recognize returning callers by phone number (ANI), pull account context from CRM, and personalize the greeting instantly.',
          icon: UserCheck,
          tag: 'Contextual RAG'
        },
        {
          title: 'Warm Human Handoff',
          description: 'When complex issues arise, transfer calls directly to human representatives along with full conversation summaries.',
          icon: Headphones,
          tag: 'Zero Context Loss'
        },
        {
          title: 'Multi-Number Provisioning',
          description: 'Instantly buy or port local toll-free and international DID numbers across 100+ countries.',
          icon: PhoneCall,
          tag: 'Global Coverage'
        }
      ]}
      specsTitle="Inbound Telephony Performance"
      specs={[
        { label: 'Answer Time', value: '< 100ms (1st Ring)' },
        { label: 'SIP Protocol', value: 'SIP / WebRTC Native' },
        { label: 'Warm Transfer', value: 'SIP REFER with metadata' },
        { label: 'Concurrency', value: 'Unlimited Dynamic Scale' }
      ]}
      codeSnippet={`// Inbound Phone Number Handler
import { YuvizTelephony } from '@yuviz/sdk';

const telephony = new YuvizTelephony({ apiKey: process.env.YUVIZ_KEY });

telephony.onInboundCall(async (call) => {
  console.log(\`Incoming call from \${call.fromNumber}\`);
  
  // Attach context from CRM
  const customer = await crm.findByPhone(call.fromNumber);
  
  await call.answer({
    agentId: 'support-agent-v2',
    initialContext: { name: customer.name, plan: customer.tier }
  });
});`}
    />
  )
}

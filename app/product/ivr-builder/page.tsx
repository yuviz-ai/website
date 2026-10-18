'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { GitBranch, Layers, Mic, Phone, Workflow, Shield, Zap, Sparkles } from 'lucide-react'

export default function IvrBuilderPage() {
  return (
    <ProductPageTemplate
      badge="Conversational Phone Trees"
      title="IVR Builder"
      highlightTitle="Smart Voice Navigation"
      subtitle="Replace rigid press-1-for-sales keypads with intelligent AI-driven phone trees that understand spoken customer intent naturally."
      features={[
        {
          title: 'Visual Flow Canvas',
          description: 'Drag and drop conversational nodes, conditional branching, time-of-day routing, and escalation rules visually.',
          icon: Workflow,
          tag: 'Drag & Drop Studio'
        },
        {
          title: 'Hybrid DTMF & Voice Input',
          description: 'Allow callers to speak naturally ("I need billing help") or use telephone keypads (press 1) interchangeably.',
          icon: GitBranch,
          tag: 'Dual Mode IVR'
        },
        {
          title: 'Dynamic Time-of-Day Routing',
          description: 'Route calls to AI voice agents after hours, and forward urgent emergency calls directly to on-call managers.',
          icon: Layers,
          tag: 'After-Hours Logic'
        },
        {
          title: 'Intent & Entity Auto-Detection',
          description: 'Detect whether a caller wants scheduling, billing, or technical support within the first 3 seconds and route automatically.',
          icon: Sparkles,
          tag: 'Smart Intent IVR'
        }
      ]}
      specsTitle="IVR Engine Features"
      specs={[
        { label: 'Keypad (DTMF)', value: 'RFC 2833 & In-Band' },
        { label: 'Intent Detection', value: 'Auto-detect in < 250ms' },
        { label: 'Branch Logic', value: 'JavaScript / JSON Rules' },
        { label: 'Fallback Path', value: 'Guaranteed Agent Transfer' }
      ]}
      codeSnippet={`// Define a Conversational IVR Flow
const ivrFlow = yuviz.ivr.createFlow({
  name: 'Main Company Reception Phone Tree',
  initialNode: 'welcome_greeting',
  nodes: {
    welcome_greeting: {
      speak: 'Thanks for calling Acme Corp. Tell me how I can direct your call today.',
      branches: [
        { intent: 'billing_inquiry', goTo: 'billing_agent' },
        { intent: 'technical_support', goTo: 'support_agent' },
        { dtmf: '1', goTo: 'sales_agent' }
      ]
    }
  }
});`}
    />
  )
}

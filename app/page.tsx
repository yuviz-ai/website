'use client'

import { HeroSection } from '@/components/marketing/HeroTeaser'
import { TrustStrip, WhatIsYuviz } from '@/components/marketing/WhatIsYuviz'
import { WhyVoice, AgentTypes } from '@/components/marketing/WhyVoice'
import { AgentBuilderVisual } from '@/components/marketing/AgentBuilderVisual'
import { ProductShowcase, HowItWorks } from '@/components/marketing/ProductShowcase'
import { ConversationVisualizer, KnowledgeSection } from '@/components/marketing/ConversationVisualizer'
import { InboundOutbound, UseCaseMatrix } from '@/components/marketing/InboundOutbound'
import { BeforeAfter, ArchitectureSection } from '@/components/marketing/ArchitectureSection'
import { TranscriptDemo, Integrations } from '@/components/marketing/TranscriptDemo'
import { HumanHandoff, SecuritySection, WhyYuviz } from '@/components/marketing/HumanHandoff'
import { FinalCTA } from '@/components/marketing/LiveDemo'

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground antialiased selection:bg-lime selection:text-ink">
      {/* 1. Hero + Interactive Voice Agent Teaser */}
      <HeroSection />

      {/* 2. Capability & Trust Strip */}
      <TrustStrip />

      {/* 3. What is Yuviz? ("Meet your AI voice team") */}
      <WhatIsYuviz />

      {/* 4. Why Voice? ("Some conversations are better spoken") */}
      <WhyVoice />

      {/* 5. AI Agent Types Grid ("Give every conversation an agent") */}
      <AgentTypes />

      {/* 6. Interactive Agent Builder Mockup */}
      <AgentBuilderVisual />

      {/* 7. Control Room Dashboard ("See every conversation clearly") */}
      <ProductShowcase />

      {/* 8. End-to-End Workflow ("From hello to done") */}
      <HowItWorks />

      {/* 9. Interactive Conversation Visualizer */}
      <ConversationVisualizer />

      {/* 10. Grounded RAG Knowledge Base */}
      <KnowledgeSection />

      {/* 11. Inbound vs Outbound Dual Telephony & Campaigns */}
      <InboundOutbound />

      {/* 12. Use Case Matrix */}
      <UseCaseMatrix />

      {/* 13. Before vs After Interactive Comparison */}
      <BeforeAfter />

      {/* 14. Real-Time Telephony Infrastructure Architecture */}
      <ArchitectureSection />

      {/* 15. Call Intelligence & Transcript Inspector */}
      <TranscriptDemo />

      {/* 16. Contextual Human Escalation & Handoff */}
      <HumanHandoff />

      {/* 17. Security & Data Protection */}
      <SecuritySection />

      {/* 18. Integration Ecosystem */}
      <Integrations />

      {/* 19. Core Principles ("Built around the conversation") */}
      <WhyYuviz />

      {/* 20. High-Impact Final CTA */}
      <FinalCTA />
    </main>
  )
}

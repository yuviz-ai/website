'use client'

import { AssistantProvider } from '@/components/assistant/AssistantProvider'
import { AssistantWidget } from '@/components/assistant/AssistantWidget'
import type { AssistantConfig } from '@/components/assistant/types'

const config: AssistantConfig = {
  brandName: 'Yuviz',
  agentName: 'Sarah',
  agentRole: 'Yuviz AI agent',
  logoSrc: '/yuviz-logo.jpg',
  poweredBy: 'Yuviz AI',
  contact: { href: '/contact', label: 'Book a demo' },
  chat: {
    quickReplies: ['What does Yuviz do?', 'Which tools can I connect?', 'How does pricing work?'],
    note: 'You’re chatting with Sarah, Yuviz’s AI agent.',
  },
  voice: { maxSeconds: 120 },
}

export function YuvizAssistant({ children }: { children: React.ReactNode }) {
  return (
    <AssistantProvider config={config}>
      {children}
      <AssistantWidget/>
    </AssistantProvider>
  )
}

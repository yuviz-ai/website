import type { CallEndpoints } from '@/lib/useDemoCall'

export type AssistantView = 'connect' | 'chat' | 'voice'

export interface AssistantChatConfig {
  quickReplies: string[]
  note?: string
  apiUrl?: string
}

export interface AssistantVoiceConfig {
  maxSeconds: number
  endpoints?: CallEndpoints
}

export interface AssistantConfig {
  brandName: string
  agentName: string
  agentRole: string
  logoSrc: string
  launcherLabel?: string
  poweredBy?: string
  accentFrom?: string
  accentTo?: string
  contact?: { href: string; label: string }
  chat?: AssistantChatConfig
  voice?: AssistantVoiceConfig
}

export interface ChatMessage { role: 'assistant' | 'user'; text: string }

export type ChatStatus = 'idle' | 'opening' | 'ready' | 'ended' | 'error'

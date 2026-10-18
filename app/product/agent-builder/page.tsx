'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { Bot, Sliders, Mic, Sparkles, TestTube2, MessageSquare, ShieldAlert, Cpu } from 'lucide-react'

export default function AgentBuilderPage() {
  return (
    <ProductPageTemplate
      badge="Visual Voice Agent Studio"
      title="Agent Builder"
      highlightTitle="Prompt to Voice in Minutes"
      subtitle="Craft lifelike voice personas with custom prompt guardrails, dynamic speech cadences, function calling, and instant web browser audio simulation."
      features={[
        {
          title: 'Visual Prompt Guardrails',
          description: 'Define agent instructions, tone rules, fallbacks, and strict conversational boundaries without writing code.',
          icon: Sliders,
          tag: 'No-Code Prompting'
        },
        {
          title: 'Natural Voices & Speaking Styles',
          description: 'Choose from ultra-realistic neural voices or clone your executive brand voice with natural expressiveness.',
          icon: Mic,
          tag: 'Voice Synthesis'
        },
        {
          title: 'Real-Time Web Simulator',
          description: 'Test conversations directly in your browser with live latency tracking, transcript debugging, and state inspection.',
          icon: TestTube2,
          tag: 'Instant Sandbox'
        },
        {
          title: 'Function & Tool Calling',
          description: 'Equip agents with real-time API capabilities to look up orders, check calendar availability, and dispatch SMS.',
          icon: Cpu,
          tag: 'Action Enabled'
        }
      ]}
      specsTitle="Agent Customization Features"
      specs={[
        { label: 'Voice Engines', value: 'ElevenLabs, Cartesia, Custom' },
        { label: 'Latency Optimization', value: 'Streamed Chunk Synthesis' },
        { label: 'Function Calling', value: 'JSON Schema Supported' },
        { label: 'Testing Tools', value: 'Interactive Web Microphone' }
      ]}
      codeSnippet={`// Create an AI Agent with tool capabilities
const receptionist = await yuviz.agents.create({
  name: 'Maya - Appointment Coordinator',
  voice: 'en-US-maya-warm',
  temperature: 0.2,
  systemPrompt: 'You are a warm, helpful receptionist for Apex Dental. Confirm appointments concisely.',
  tools: [
    {
      name: 'check_calendar',
      description: 'Find open time slots for specified doctor',
      parameters: { doctorId: 'string', date: 'string' }
    }
  ]
});`}
    />
  )
}

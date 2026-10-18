'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { Webhook, Code2, Cpu, Zap, Shield, Server, Terminal, RefreshCw } from 'lucide-react'

export default function ApiWebhooksPage() {
  return (
    <ProductPageTemplate
      badge="Developer API & Webhooks"
      title="API & Webhooks"
      highlightTitle="Programmable Voice"
      subtitle="Integrate AI voice capabilities directly into your softwarestack. Trigger calls via REST, stream audio over WebSockets, and receive realtime event payloads."
      features={[
        {
          title: 'RESTful Telephony API',
          description: 'Initiate inbound/outbound calls, manage agent configurations, and query transcripts using intuitive REST endpoints.',
          icon: Code2,
          tag: 'OpenAPI 3.0'
        },
        {
          title: 'WebSocket Audio Streaming',
          description: 'Stream bi-directional 24kHz PCM audio in real time for custom speech-to-text, custom TTS engines, or live monitoring.',
          icon: Terminal,
          tag: 'Realtime Audio WS'
        },
        {
          title: 'Secure Signature Webhooks',
          description: 'Receive event notifications for call start, call ended, function execution, and warm transfer with HMAC signatures.',
          icon: Webhook,
          tag: 'HMAC Authenticated'
        },
        {
          title: 'SDKs for Node, Python & Go',
          description: 'Official production-ready client libraries with full TypeScript types, automatic retries, and rate limit handling.',
          icon: Server,
          tag: 'Official Client SDKs'
        }
      ]}
      specsTitle="Developer API Performance"
      specs={[
        { label: 'API Uptime', value: '99.99% Guaranteed' },
        { label: 'Webhook Latency', value: '< 50ms Delivery' },
        { label: 'Audio Protocol', value: 'g711, Opus, PCM16' },
        { label: 'Rate Limit', value: 'Up to 10,000 req/sec' }
      ]}
      codeSnippet={`// Initialize Yuviz Voice Agent via Node SDK
import { YuvizClient } from '@yuviz/node';

const yuviz = new YuvizClient({ apiKey: process.env.YUVIZ_API_KEY });

// Trigger an automated voice call
const call = await yuviz.calls.create({
  to: '+14155550199',
  from: '+18005559884',
  agentId: 'ag_8871ab',
  webhookUrl: 'https://api.yourcompany.com/webhooks/yuviz-events',
  metadata: { customerId: 'cust_9921' }
});`}
    />
  )
}

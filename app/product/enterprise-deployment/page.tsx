'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { Building2, Shield, Server, Lock, Cpu, Globe, Headphones, Workflow } from 'lucide-react'

export default function EnterpriseDeploymentPage() {
  return (
    <ProductPageTemplate
      badge="Enterprise AI Infrastructure"
      title="Enterprise Deployment"
      highlightTitle="Built for Scale"
      subtitle="Deploy dedicated single-tenant AI voice clusters with custom model fine-tuning, SOC2 Type II compliance, and guaranteed 99.99% uptime SLAs."
      features={[
        {
          title: 'Single-Tenant Isolation',
          description: 'Dedicated cloud hardware ensures strict data isolation, zero noisy neighbor latency, and full customer compliance.',
          icon: Server,
          tag: 'Dedicated Hardware'
        },
        {
          title: 'Custom Voice Fine-Tuning',
          description: 'Train models on your brand voice, custom terminology, industry jargon, and multi-dialect accents.',
          icon: Cpu,
          tag: 'Brand Acoustic Model'
        },
        {
          title: 'HIPAA & SOC2 Type II',
          description: 'End-to-end encrypted voice channels, HIPAA BAA agreements, and audit logging for regulated sectors.',
          icon: Shield,
          tag: 'Security Certified'
        },
        {
          title: 'Dedicated 24/7 SLA',
          description: 'Priority telephony routing with direct access to dedicated voice architecture engineers.',
          icon: Lock,
          tag: '99.99% Uptime'
        }
      ]}
      specsTitle="Enterprise Infrastructure Specs"
      specs={[
        { label: 'Deployment Mode', value: 'VPC / On-Prem / Cloud' },
        { label: 'Security Certs', value: 'SOC2 Type II, HIPAA, ISO27001' },
        { label: 'Voice Latency', value: '< 280ms P99 latency' },
        { label: 'Telephony Carrier', value: 'SIP Trunking + Direct Carrier Sync' }
      ]}
      codeSnippet={`// Yuviz Enterprise Private Cluster Setup
import { YuvizEnterpriseClient } from '@yuviz/sdk';

const client = new YuvizEnterpriseClient({
  vpcEndpoint: 'https://telephony-cluster.enterprise.yuviz.ai',
  apiKey: process.env.YUVIZ_ENTERPRISE_KEY,
  security: {
    hipaaCompliant: true,
    enableZeroStorageLogging: true,
    customSipTrunking: 'sip:cluster-east.yuviz.ai'
  }
});

await client.deployCluster({
  capacity: '10,000 Concurrent Channels',
  region: 'us-east-1'
});`}
    />
  )
}

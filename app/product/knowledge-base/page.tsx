'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { Database, FileText, Search, Shield, Zap, RefreshCw, Cpu, CheckCircle } from 'lucide-react'

export default function KnowledgeBasePage() {
  return (
    <ProductPageTemplate
      badge="Grounded RAG Voice Knowledge"
      title="Knowledge Base"
      highlightTitle="Zero Hallucinations"
      subtitle="Connect your company knowledge, Notion docs, PDF manuals, and live databases. Deliver instant, verified verbal answers on live phone calls."
      features={[
        {
          title: 'Instant Document Ingestion',
          description: 'Upload PDFs, Word docs, CSV spreadsheets, and website URLs. Our RAG engine chunks and indexes knowledge in seconds.',
          icon: FileText,
          tag: 'Auto Indexing'
        },
        {
          title: 'Sub-150ms Vector Search',
          description: 'High-speed semantic search retrieves precise knowledge snippets in under 150ms to keep voice conversations flowing naturally.',
          icon: Search,
          tag: 'Ultra-Fast Vector DB'
        },
        {
          title: 'Strict Grounding Rules',
          description: 'Enforce strict fact-checking policies. If an answer is not in your approved knowledge base, the agent declines politely.',
          icon: Shield,
          tag: 'Hallucination Guard'
        },
        {
          title: 'Real-Time Sync Webhooks',
          description: 'Keep your knowledge base updated automatically when articles or inventory details change in your CMS or CRM.',
          icon: RefreshCw,
          tag: 'Live Auto-Sync'
        }
      ]}
      specsTitle="Knowledge Engine Benchmarks"
      specs={[
        { label: 'Retrieval Latency', value: '< 140ms Semantic RAG' },
        { label: 'Vector Database', value: 'Milvus / Pinecone Dual Cluster' },
        { label: 'Citation Accuracy', value: '99.4% Verified Grounding' },
        { label: 'Supported Formats', value: 'PDF, MD, HTML, CSV, JSON, API' }
      ]}
      codeSnippet={`// Ingest Documents into Yuviz Knowledge Base
import { YuvizKnowledge } from '@yuviz/sdk';

const kb = new YuvizKnowledge({ apiKey: process.env.YUVIZ_KEY });

await kb.addDocument({
  kbId: 'kb_dental_procedures',
  sourceUrl: 'https://docs.apexdental.com/patient-handbook.pdf',
  chunkSize: 512,
  overlap: 64,
  metadata: { department: 'Clinical Support' }
});`}
    />
  )
}

'use client'

import { ProductPageTemplate } from '@/components/marketing/ProductPageTemplate'
import { BarChart3, FileSpreadsheet, Smile, Target, ShieldCheck, Zap, Download, Search } from 'lucide-react'

export default function CallAnalyticsPage() {
  return (
    <ProductPageTemplate
      badge="Voice Intelligence & Analytics"
      title="Call Analytics"
      highlightTitle="Turn Speech into Data"
      subtitle="Gain full visibility into every phone conversation. Automatically extract structured JSON records, customer sentiment, resolution rates, and key topics."
      features={[
        {
          title: 'Real-Time Transcripts',
          description: 'Stereo audio recording with speaker diarization (separating agent and caller) and searchable timestamped transcripts.',
          icon: FileSpreadsheet,
          tag: 'Diarized Transcripts'
        },
        {
          title: 'Automated Sentiment Scoring',
          description: 'Detect customer frustration, satisfaction, and mood changes throughout the call with AI sentiment metrics.',
          icon: Smile,
          tag: 'Sentiment AI'
        },
        {
          title: 'Action Item Extraction',
          description: 'Automatically extract follow-up tasks, callback requests, payment commitments, and key takeaways into your CRM.',
          icon: Target,
          tag: 'Structured JSON'
        },
        {
          title: 'Custom BI Export & Dashboards',
          description: 'Export call data via CSV, Redshift, BigQuery, or stream analytics via webhooks in real time.',
          icon: Download,
          tag: 'Data Pipeline'
        }
      ]}
      specsTitle="Analytics & Intelligence Specs"
      specs={[
        { label: 'Transcript Accuracy', value: '98.6% Word Error Rate (WER)' },
        { label: 'Diarization', value: 'Dual-Channel Stereo Isolation' },
        { label: 'Export Formats', value: 'JSON, Webhook, BigQuery, S3' },
        { label: 'Audio Retention', value: 'Configurable (Zero retention available)' }
      ]}
      codeSnippet={`// Fetch Call Analytics & Sentiment Summary
const callSummary = await yuviz.analytics.getCallDetails('call_89f1a23e');

console.log(callSummary);
/*
{
  durationSeconds: 142,
  sentiment: 'POSITIVE',
  outcome: 'APPOINTMENT_SCHEDULED',
  extractedData: {
    requestedDate: '2026-10-12T14:30:00Z',
    patientInsurance: 'Delta Dental',
    callbackRequired: false
  }
}
*/`}
    />
  )
}

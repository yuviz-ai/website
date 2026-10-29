import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'FAQ | Yuviz.ai',
  description: 'Answers about what Yuviz does, supported providers and languages, human handoff, certifications and pricing.',
}

const faqs = [
  { q: 'What does Yuviz do?', a: 'Yuviz runs AI voice agents on your phone numbers. They answer and make calls, follow the flow you design, take actions in your tools, and hand off to your team when needed.' },
  { q: 'What can it do today?', a: 'Answer and make calls on your numbers, follow designed flows, interrupt naturally, look up callers, book, confirm, transfer to people, and record transcripts and summaries.' },
  { q: 'Which providers are supported?', a: 'Telephony: Vobiz, Twilio and Plivo numbers, SIP, Cloudonix and BYOC. AI: OpenAI, Anthropic, Gemini, Groq, Ollama. Speech: Deepgram, Whisper. Voices: ElevenLabs, Cartesia, Deepgram, Sarvam, Kokoro.' },
  { q: 'Which languages are supported?', a: 'English and Hindi.' },
  { q: 'Does Yuviz support human handoff?', a: 'Yes — the agent can transfer a call to your team.' },
  { q: 'Does Yuviz have SOC 2, HIPAA or PCI certifications?', a: 'We don’t hold SOC 2, HIPAA or PCI certifications yet. Tell us your requirements and we’ll be straight about fit.' },
  { q: 'How is pricing worked out?', a: 'By call volume and the AI services you choose. Book a demo and we’ll estimate it with you.' },
]
export default function FAQPage() {
  return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">QUESTIONS & ANSWERS</span><h1>Questions,<br/><em>answered.</em></h1></div></section>
    <section className="story-container story-faq-page-list">{faqs.map(faq=><details key={faq.q}><summary>{faq.q}<ChevronDown size={17}/></summary><p>{faq.a}</p></details>)}</section>
    <section className="story-container story-use-index-note"><p>Have a question we haven’t answered?</p><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></section>
  </main>
}

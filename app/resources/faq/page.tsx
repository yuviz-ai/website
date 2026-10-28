import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Yuviz.ai',
  description: 'Answers about the Yuviz voice AI platform, current prototype, telephony, integrations, and implementation scope.',
}

const faqs = [
  { q: 'What is Yuviz.ai?', a: 'Yuviz is building a voice AI platform focused on agent configuration, telephony and media handling, business context, and the flow of a customer conversation.' },
  { q: 'What is currently implemented?', a: 'The current prototype includes SIP/FreeSWITCH telephony, a C++ media gateway, a conversation service, configuration services, and call-routing and handoff work. Production readiness and feature availability depend on the deployment and still require validation.' },
  { q: 'Does Yuviz guarantee sub-300ms latency?', a: 'No general latency guarantee is published here. Voice-to-voice latency depends on the telephony path, media transport, speech services, model response, synthesis, network conditions, and how latency is measured.' },
  { q: 'Can Yuviz connect to a CRM or business system?', a: 'Integration depends on the target system, the actions required, and the current implementation. Tell us what needs to happen after the call so we can confirm what exists and what would need engineering.' },
  { q: 'Does Yuviz support human handoff?', a: 'Human handoff has been exercised in the current SIP prototype. The transfer behavior, context preservation, and supported deployment paths should be confirmed for your environment.' },
  { q: 'Which AI providers are supported?', a: 'Provider support depends on the current configured implementation. We do not claim every cloud speech, language-model, or voice provider is production-ready by default.' },
  { q: 'Does Yuviz have HIPAA, SOC 2, PCI DSS, or other certifications?', a: 'No such certification claim is made on this page. If your use case has regulatory, privacy, or data-retention requirements, discuss them with us before relying on the platform for that workload.' },
  { q: 'How does pricing work?', a: 'Pricing depends on call volume, telephony, AI services, deployment needs, and workflow scope. Contact us to discuss the requirements before commercial terms are proposed.' },
]
export default function FAQPage() {
  return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">QUESTIONS & ANSWERS</span><h1>Clear answers.<br/><em>Honest boundaries.</em></h1><p>Learn about the current Yuviz direction, the prototype, integrations, and what needs to be confirmed for a real deployment.</p></div></section>
    <section className="story-container story-faq-page-list">{faqs.map(faq=><details key={faq.q}><summary>{faq.q}<ChevronDown size={17}/></summary><p>{faq.a}</p></details>)}</section>
    <section className="story-container story-use-index-note"><p>Have a specific call flow, provider, or integration requirement? Share the details so we can discuss current support and remaining work.</p><Link href="/contact" className="story-button story-button-primary">Ask Yuviz <ArrowRight size={16}/></Link></section>
  </main>
}

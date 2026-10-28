import Link from 'next/link'
import { ArrowRight, HelpCircle } from 'lucide-react'

const faqs = [
  { q: 'What is Yuviz.ai?', a: 'Yuviz is building a voice AI platform focused on agent configuration, call and media handling, business context, and the flow of a customer conversation.' },
  { q: 'Are the website product screens live dashboards?', a: 'No. The workspace shown on the homepage is an illustrative design concept. It is not a live dashboard, customer recording, or proof of a production deployment.' },
  { q: 'Can Yuviz work with our telephony setup?', a: 'The right approach depends on your current numbers, SIP or carrier setup, routing, and deployment constraints. Share those details so we can assess the fit.' },
  { q: 'Does Yuviz offer CRM and calendar integrations?', a: 'Integration availability depends on the target system and the current implementation. We do not present every connector as available by default; we confirm requirements individually.' },
  { q: 'What AI models and voice providers are supported?', a: 'Provider support depends on the current configured implementation. Tell us which speech, language-model, or voice services you need and we can confirm the current status.' },
  { q: 'Is Yuviz certified for HIPAA, SOC 2, or PCI DSS?', a: 'We do not make a certification or compliance claim on this page. If your use case has regulatory or data-handling requirements, discuss them with us before relying on the platform for that workload.' },
  { q: 'How is pricing determined?', a: 'Pricing depends on call volume, telephony, AI services, deployment, and workflow requirements. Contact us to scope your use case.' },
]
export default function FaqPage() {
  return <main className="pricing-page"><div className="container-new">
    <div className="max-w-3xl mx-auto text-center mb-10"><span className="eyebrow-new"><span className="eyebrow-dot"/><HelpCircle size={14}/> Help and FAQs</span><h1 className="mt-5 font-[Manrope] text-4xl sm:text-5xl font-extrabold tracking-[-0.05em] text-[#F3F4FC]">Straight answers.<br/><span className="gradient-text">Clear boundaries.</span></h1><p className="mt-5 text-sm sm:text-base leading-8 text-[#9CA6C2]">What to know about the platform, the current website preview, integrations, and implementation scope.</p></div>
    <div className="faq-list max-w-4xl mx-auto">{faqs.map(faq => <details className="faq-item" key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
    <div className="contact-card max-w-4xl mx-auto mt-9 flex flex-col sm:flex-row sm:items-center gap-5"><div className="flex-1"><h2>Still have a question?</h2><p className="!m-0">Share the requirements that matter to your team.</p></div><Link href="/contact" className="button-primary shrink-0">Talk to our team <ArrowRight size={16}/></Link></div>
  </div></main>
}

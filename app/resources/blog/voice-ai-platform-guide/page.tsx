import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice AI for Business Calls: How to Design a Reliable Voice Agent',
  description: 'A practical guide to voice AI architecture, call workflows, knowledge grounding, human handoff, and evaluating quality beyond latency.',
  alternates: { canonical: '/resources/blog/voice-ai-platform-guide' },
  openGraph: {
    title: 'Voice AI for Business Calls: How to Design a Reliable Voice Agent',
    description: 'Understand the call path, conversation design, safety boundaries, and evaluation metrics behind useful voice AI.',
    type: 'article',
    url: 'https://yuviz.ai/resources/blog/voice-ai-platform-guide',
  },
}

const sections = [
  { id: 'call-path', title: '1. Understand the complete call path', body: 'A voice agent is more than a language model connected to a phone number. A typical system includes telephony routing, a media path, speech recognition, conversation orchestration, response generation, speech synthesis, and call control. Delays or failures in any layer affect the caller experience, so teams should measure the whole path rather than a single model request.' },
  { id: 'start-small', title: '2. Start with one clear workflow', body: 'Choose a narrow job first: answer a repeat question, collect a few details, route a caller, or help move an appointment enquiry forward. Define what information the agent may use, what action counts as success, and when it should stop or hand the call to a person. A bounded workflow is easier to test than a general-purpose agent that is expected to do everything.' },
  { id: 'knowledge', title: '3. Make business context deliberate', body: 'If an agent answers from company material, choose which sources are relevant and keep them current. Distinguish retrieved facts from assumptions, and give the agent a safe way to say it does not know. For transactional actions—such as changing an order or scheduling an appointment—knowledge alone is not enough: the system also needs an authorized tool or a human process that can complete the action.' },
  { id: 'handoff', title: '4. Treat handoff as a normal outcome', body: 'A good voice workflow should know when it has reached its limits. Examples include low confidence, a request outside the approved scope, a frustrated caller, or an action that requires human judgment. Design the transfer path, preserve relevant context where supported, and make the fallback understandable to the caller. A graceful handoff is part of the product, not an exception to ignore.' },
  { id: 'measure', title: '5. Evaluate more than latency', body: 'Fast responses are valuable, but speed by itself does not mean a call was handled well. Build a representative test set that includes names, dates, phone numbers, interruptions, background noise, and ambiguous requests. Track speech accuracy, task completion, tool-call success, transfer outcomes, failure recovery, and cost per successfully completed call. Review recordings or transcripts only with appropriate access controls and consent practices for your environment.' },
  { id: 'rollout', title: '6. Roll out with clear boundaries', body: 'Before exposing a workflow to real callers, define supported intents, escalation rules, data retention expectations, provider dependencies, and a way to disable or roll back changes. Test configuration changes during active calls, provider failures, timeouts, and cache misses. Start with a limited audience, review failures, and expand only when the evidence supports it.' },
]

export default function VoiceAiGuidePage() {
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero story-article-hero">
      <div className="story-container story-article">
        <Link href="/resources/blog" className="story-article-back"><ArrowLeft size={14}/> Back to the journal</Link>
        <span className="story-kicker">VOICE AI GUIDE</span>
        <h1>Voice AI for business calls:<br/><em>design for reliability.</em></h1>
        <p>A practical guide to call architecture, useful workflows, business context, human handoff, and the quality metrics that matter after the demo.</p>
        <p className="story-article-note">An educational guide from Yuviz.ai. Examples are general design guidance, not claims about customer results or guaranteed platform features.</p>
      </div>
    </section>
    <article className="story-container story-article">
      <nav className="story-article-toc" aria-label="Article contents">
        <h2>In this guide</h2>
        {sections.map(section => <a key={section.id} href={`#${section.id}`}>{section.title}</a>)}
      </nav>
      <div className="story-article-body">
        <p>Voice AI can help businesses handle repeat enquiries and guide callers through structured conversations. But a successful phone experience depends on much more than a fluent answer: the system must hear the caller, maintain context, decide what it is allowed to do, respond in time, and recover when something goes wrong.</p>
        <p>For teams evaluating a voice AI platform, the most useful starting point is not “Which model sounds best?” It is “Which conversation should we improve, and how will we know the system handled it correctly?”</p>
        {sections.map(section => <section key={section.id} id={section.id}><h2>{section.title}</h2><p>{section.body}</p></section>)}
        <section id="next-step">
          <h2>Bring the workflow, not just the prompt</h2>
          <p>When evaluating a platform, map the current call path, the information the agent needs, the action that should follow the conversation, and the conditions that require a human. Then test the complete experience against real-world variations before expanding the scope.</p>
          <p>Yuviz.ai is being built around this voice-first view: configurable agent behavior, business context, telephony and media handling, and the path from a caller’s request to an appropriate next step. The exact capabilities and integrations should be confirmed against the implementation needed for each deployment.</p>
          <Link href="/contact" className="story-button story-button-primary">Discuss your voice workflow <ArrowRight size={16}/></Link>
        </section>
      </div>
    </article>
  </main>
}

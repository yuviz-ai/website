import Link from 'next/link'
import type { Metadata } from 'next'
import type React from 'react'
import {
  ArrowRight, AudioLines, BarChart3, GitBranch, History, Link2, MessageSquareText, Mic, PhoneForwarded, PhoneIncoming, Repeat, Route, Upload, Workflow,
} from 'lucide-react'

interface Point { title: string; text: string; icon: React.ElementType; image: string }
export interface Product {
  slug: string
  name: string
  highlight: string
  summary: string
  points: Point[]
}

export const PRODUCTS: Product[] = [
  {
    slug: 'agent-builder', name: 'Agent builder', highlight: 'Design the call, visually.', summary: 'Design agents, voices and call flows visually',
    points: [
      { title: 'Conversation steps as a graph', text: 'Lay out each stage of the call and when to move on: greet, understand, answer, hand off.', icon: GitBranch, image: '/product/agent-builder-flow' },
      { title: 'Choose voice, language and AI', text: 'Pick languages and a voice, and see the cost per minute as you choose.', icon: Mic, image: '/config-steps/voice' },
      { title: 'Test before you go live', text: 'Chat with the agent in the browser to check its answers, then switch it on.', icon: MessageSquareText, image: '/config-steps/chat' },
    ],
  },
  {
    slug: 'inbound-calls', name: 'Inbound calls', highlight: 'Answer every call.', summary: 'Answer every call on your own numbers',
    points: [
      { title: 'Route each number to an agent', text: 'Each agent shows the numbers it answers, with its calls, average length and hand-offs.', icon: PhoneIncoming, image: '/product/inbound-numbers' },
      { title: 'Natural interruptions', text: 'Callers can cut in. The agent stops, listens and answers the new question, and the transcript marks it.', icon: AudioLines, image: '/product/inbound-interruptions' },
      { title: 'Transfer to your team', text: 'When a person is needed, the call goes to your team. Every call is logged with its sentiment and outcome.', icon: PhoneForwarded, image: '/product/inbound-transfer' },
    ],
  },
  {
    slug: 'outbound-calls', name: 'Campaigns', highlight: 'Call your list, at your pace.', summary: 'Reach contact lists with paced, retried calls',
    points: [
      { title: 'Upload contacts, set pacing', text: 'Upload a CSV, then set calls per minute, calls at once and the contact’s timezone.', icon: Upload, image: '/product/campaigns-pacing' },
      { title: 'Retries with gaps and limits', text: 'Busy and unanswered numbers are tried again after a gap, up to the limit you set.', icon: Repeat, image: '/product/campaigns-retries' },
      { title: 'Progress and results', text: 'Readiness checks run before a campaign starts; afterwards you see progress and outcomes at a glance.', icon: BarChart3, image: '/product/campaigns-results' },
    ],
  },
  {
    slug: 'ivr-builder', name: 'IVR builder', highlight: 'Phone menus, built visually.', summary: 'Build phone menus that send callers to the right agent or person',
    points: [
      { title: 'Write what the menu says', text: 'Type the message callers hear, play it back, and set how long to wait for a key.', icon: Workflow, image: '/product/ivr-menu' },
      { title: 'Send each key to the right place', text: 'Choose where each key leads: an AI agent, a message, your team or the end of the call.', icon: Route, image: '/product/ivr-routing' },
      { title: 'Publish with version history', text: 'Every publish is kept, so you can see who changed the menu and restore an earlier one.', icon: History, image: '/product/ivr-versions' },
    ],
  },
]

const bySlug = (slug: string) => {
  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) throw new Error(`Unknown product: ${slug}`)
  return product
}

export function productMetadata(slug: string): Metadata {
  const { name, summary } = bySlug(slug)
  return { title: `${name} | Yuviz.ai`, description: `${summary}.` }
}

export function ProductPageTemplate({ slug }: { slug: string }) {
  const { name, highlight, summary, points } = bySlug(slug)
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <span className="story-kicker">{name.toUpperCase()}</span>
      <h1>{name}<br/><em>{highlight}</em></h1>
      <p>{summary}.</p>
      <Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link>
    </div></section>
    <section className="story-container prod-shots">
      {points.map(({ title, text, icon: Icon, image }, index) => (
        <article className="prod-shot" key={title}>
          <div className="prod-shot-copy">
            <span className="story-pillar-icon"><Icon size={20}/></span>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <figure className="cfg-window prod-shot-window">
            <div className="cfg-window-bar" aria-hidden="true"><i/><i/><i/><span>console.yuviz.ai</span></div>
            <div className="prod-shot-image">
              <img className="cfg-img-dark" src={`${image}-dark.png`} alt={`Yuviz console: ${title}`} width={2408} height={1504} loading={index ? 'lazy' : 'eager'}/>
              <img className="cfg-img-light" src={`${image}-light.png`} alt={`Yuviz console: ${title}`} width={2408} height={1504} loading="lazy"/>
            </div>
          </figure>
        </article>
      ))}
    </section>
    <section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Link2 size={20}/></span><div><h2>What should your next call achieve?</h2><p>Tell us about your calls and the outcome you want. We’ll show you an agent doing it.</p></div><div className="story-case-actions"><Link href="/pricing" className="story-text-link">See pricing <ArrowRight size={14}/></Link><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></div></div></section>
  </main>
}

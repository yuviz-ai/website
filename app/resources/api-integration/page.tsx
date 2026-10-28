import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Database, Network, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations and Connectivity | Yuviz.ai',
  description: 'Plan telephony, business-system, and AI-service requirements for a Yuviz voice workflow.',
}
const areas=[
 {icon:Network,title:'Telephony and carriers',text:'Existing numbers, SIP trunks, routing, media transport, and how calls reach the agent experience.'},
 {icon:Database,title:'Business systems',text:'CRM, ticketing, calendar, and internal APIs that may need to inform a conversation or receive its outcome.'},
 {icon:Workflow,title:'AI services and tools',text:'Speech recognition, language models, voice synthesis, and the tools a specific workflow requires.'},
]
export default function IntegrationsPage(){return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">CONNECTIVITY & INTEGRATION PLANNING</span><h1>Connect the call<br/><em>to the work around it.</em></h1><p>Integration needs vary by deployment. This page outlines areas to plan for; it is not a list of pre-built connectors or a guarantee that a named provider is already integrated.</p></div></section><section className="story-container story-case-grid">{areas.map(({icon:Icon,title,text})=><article className="story-case-card" key={title}><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Network size={20}/></span><div><h2>Have a specific system in mind?</h2><p>Tell us which data needs to move, what action the agent should take, and what your current telephony setup looks like. We’ll confirm support and remaining work.</p></div><Link href="/contact" className="story-button story-button-primary">Discuss an integration <ArrowRight size={16}/></Link></div></section></main>}

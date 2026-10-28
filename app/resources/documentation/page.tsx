import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Code2, Network, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developer Resources | Yuviz.ai',
  description: 'Discuss implementation details, telephony architecture, and developer resource requirements for Yuviz.',
}
const areas=[
 {icon:Network,title:'Telephony and media path',text:'Discuss SIP routing, media transport, audio formats, and the call flow relevant to your environment.'},
 {icon:Code2,title:'Conversation orchestration',text:'Explore how agent configuration, context, response generation, and tool boundaries fit your workflow.'},
 {icon:Terminal,title:'Implementation planning',text:'Align on current interfaces, required integrations, and the work needed before a pilot.'},
]
export default function DocumentationPage(){return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">DEVELOPER RESOURCES</span><h1>Understand the system<br/><em>before you integrate.</em></h1><p>Public SDKs, API reference material, and self-serve quickstarts are not documented here yet. Until those resources are published, contact us to confirm current interfaces and implementation scope.</p></div></section><section className="story-container story-case-grid">{areas.map(({icon:Icon,title,text})=><article className="story-case-card" key={title}><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><BookOpen size={20}/></span><div><h2>Need implementation details?</h2><p>Share your environment and we’ll discuss relevant architecture and the documentation available for your use case.</p></div><Link href="/contact" className="story-button story-button-primary">Contact Yuviz <ArrowRight size={16}/></Link></div></section></main>}

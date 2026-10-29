import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Code2, Network, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Developers | Yuviz.ai',
  description: 'Connect your telephony over SIP or a supported carrier, and let agents call your systems through configured HTTP tools.',
}
const areas=[
 {icon:Network,title:'Telephony and media path',text:'SIP routing, media transport, audio formats, and the call flow for your environment.'},
 {icon:Code2,title:'Conversation orchestration',text:'How agent configuration, context, response generation, and tool boundaries fit your workflow.'},
 {icon:Terminal,title:'Implementation planning',text:'Current interfaces, required integrations, and the work needed before a pilot.'},
]
export default function DocumentationPage(){return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">DEVELOPERS</span><h1>How Yuviz fits<br/><em>your stack.</em></h1><p>Connect your telephony over SIP or a supported carrier, and let agents call your systems through configured HTTP tools.</p></div></section><section className="story-container story-case-grid">{areas.map(({icon:Icon,title,text})=><article className="story-case-card" key={title}><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><BookOpen size={20}/></span><div><h2>Need implementation details?</h2><p>Share your environment and we’ll walk you through the architecture for your use case.</p></div><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></div></section></main>}

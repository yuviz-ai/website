import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Lightbulb, Target } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Voice AI Insights | Yuviz.ai',
  description: 'Practical notes on voice AI architecture, conversation design, evaluation, and reliable customer-call workflows.',
}
const topics=[
 {icon:BookOpen,title:'Voice AI architecture',text:'How telephony, streamed audio, turn-taking, and conversation orchestration fit together.'},
 {icon:Target,title:'Measuring voice-agent quality',text:'Evaluate accuracy, task completion, tool success, recovery, and cost alongside latency.'},
 {icon:Lightbulb,title:'Designing useful voice workflows',text:'Start with caller intent, define the next step, and plan the human handoff.'},
]
export default function BlogPage(){return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">YUVIZ JOURNAL</span><h1>Think clearly about<br/><em>voice AI in the real world.</em></h1><p>We’re preparing practical articles about voice systems and conversation design. We won’t present draft topics as published case studies or measured product results.</p></div></section><section className="story-container story-case-grid">{topics.map(({icon:Icon,title,text})=><article className="story-case-card" key={title}><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2><p>{text}</p><span className="story-use-label">UPCOMING TOPIC</span></article>)}</section><section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Lightbulb size={20}/></span><div><h2>Have a topic you’d like us to cover?</h2><p>Send us a question from your team’s voice AI work.</p></div><Link href="/contact" className="story-button story-button-primary">Suggest a topic <ArrowRight size={16}/></Link></div></section></main>}

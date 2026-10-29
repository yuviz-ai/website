import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Database, Network, Workflow } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations | Yuviz.ai',
  description: 'What connects to Yuviz today: telephony carriers, business tools and AI services.',
}
const areas=[
 {icon:Network,title:'Telephony',text:'Vobiz, Twilio and Plivo numbers, SIP and Cloudonix.'},
 {icon:Database,title:'Business tools',text:'Salesforce, HubSpot, Zoho, Google Calendar, Google Sheets and WhatsApp.'},
 {icon:Workflow,title:'AI services',text:'OpenAI, Anthropic, Gemini, Groq and Ollama. Speech: Deepgram and Whisper. Voices: ElevenLabs, Cartesia, Deepgram, Sarvam and Kokoro.'},
]
export default function IntegrationsPage(){return <main className="story-site story-subpage"><section className="story-subpage-hero"><div className="story-container"><span className="story-kicker">INTEGRATIONS</span><h1>What connects<br/><em>to Yuviz today.</em></h1></div></section><section className="story-container story-case-grid">{areas.map(({icon:Icon,title,text})=><article className="story-case-card" key={title}><span className="story-pillar-icon"><Icon size={20}/></span><h2>{title}</h2><p>{text}</p></article>)}</section><section className="story-container story-case-bottom"><div><span className="story-pillar-icon"><Network size={20}/></span><div><h2>Need something else?</h2></div><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></div></section></main>}

import Link from 'next/link'
import { ArrowRight, Building2, CalendarCheck, Headphones, Home, Landmark, MessageSquareText, ShoppingBag, Utensils, Users } from 'lucide-react'

const useCases = [
  { slug: 'real-estate', title: 'Real estate', description: 'Explore property enquiries, buyer or renter requirements, and a clear follow-up step.', icon: Home },
  { slug: 'banking', title: 'Banking enquiries', description: 'Map general information requests and safe routes to a qualified human team.', icon: Landmark },
  { slug: 'healthcare', title: 'Healthcare administration', description: 'Explore office information, appointment enquiries, and staff escalation paths.', icon: Headphones },
  { slug: 'e-commerce', title: 'E-commerce support', description: 'Design conversations around common order questions and support routing.', icon: ShoppingBag },
  { slug: 'restaurants', title: 'Restaurants', description: 'Consider menu questions, opening-hour enquiries, and booking-related conversations.', icon: Utensils },
  { slug: 'government', title: 'Public information', description: 'Structure answers to common service questions and routes to a representative.', icon: Building2 },
  { slug: 'sales', title: 'Sales qualification', description: 'Ask discovery questions consistently and capture intent for a follow-up.', icon: MessageSquareText },
  { slug: 'hr-hiring', title: 'Recruiting and HR', description: 'Explore initial candidate enquiries and information about the hiring process.', icon: Users },
  { slug: 'appointments', title: 'Appointment enquiries', description: 'Gather the details needed to move a scheduling conversation forward.', icon: CalendarCheck },
]

export default function UseCasesIndexPage() {
  return <main className="story-site story-subpage">
    <section className="story-subpage-hero"><div className="story-container">
      <span className="story-kicker">POTENTIAL WORKFLOWS</span>
      <h1>Start with the conversation.<br/><em>Design the next step.</em></h1>
      <p>Voice automation is easier to evaluate when it starts with a specific customer need. Explore these example scenarios, then confirm the data, actions, and safeguards your workflow would require.</p>
    </div></section>
    <section className="story-container story-use-index-grid">{useCases.filter(item=>item.slug!=='appointments').map(({slug,title,description,icon:Icon})=><Link key={slug} href={`/use-cases/${slug}`} className="story-use-index-card"><span className="story-use-icon"><Icon size={20}/></span><h2>{title}</h2><p>{description}</p><span className="story-text-link">Explore scenario <ArrowRight size={14}/></span></Link>)}</section>
    <section className="story-container story-use-index-note"><p>These are illustrative scenarios—not customer case studies, measured results, compliance claims, or a promise that each integration is available today.</p><Link href="/contact" className="story-button story-button-primary">Discuss your workflow <ArrowRight size={16}/></Link></section>
  </main>
}

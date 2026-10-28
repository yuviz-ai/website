import Link from 'next/link'
import { ArrowRight, Building2, CalendarCheck, Headphones, Home, Landmark, MessageSquareText, ShoppingBag, Utensils, Users } from 'lucide-react'

const useCases = [
  { slug: 'real-estate', title: 'Real estate', description: 'Respond to property enquiries, gather buyer or renter requirements, and outline a next step.', icon: Home },
  { slug: 'banking', title: 'Banking enquiries', description: 'Explore how a voice experience might answer general questions and route requests to the right team.', icon: Landmark },
  { slug: 'healthcare', title: 'Healthcare administration', description: 'Consider appointment enquiries, basic office information, and escalation to staff when needed.', icon: Headphones },
  { slug: 'e-commerce', title: 'E-commerce support', description: 'Shape conversations around order questions, return policies, and customer-support routing.', icon: ShoppingBag },
  { slug: 'restaurants', title: 'Restaurants', description: 'Handle common menu, opening-hour, booking, and takeout enquiries as configured.', icon: Utensils },
  { slug: 'government', title: 'Public information', description: 'Explore structured answers for common service questions and routes to a human representative.', icon: Building2 },
  { slug: 'sales', title: 'Sales qualification', description: 'Ask consistent discovery questions and capture caller intent for a follow-up.', icon: MessageSquareText },
  { slug: 'hr-hiring', title: 'Recruiting and HR', description: 'Explore initial candidate enquiries, role information, and interview-process coordination.', icon: Users },
  { slug: 'page', title: 'Appointments', description: 'Design conversations that gather the information needed to move a scheduling request forward.', icon: CalendarCheck },
]

export default function UseCasesIndexPage() {
  return (
    <main className="pricing-page">
      <section className="container-new pb-14 text-center">
        <span className="eyebrow-new"><span className="eyebrow-dot" /> Use cases</span>
        <h1 className="mt-5 font-[Manrope] text-4xl sm:text-6xl font-extrabold tracking-[-0.055em] leading-[1.08] text-[#F3F4FC]">Start with the conversation.<br/><span className="gradient-text">Design the next step.</span></h1>
        <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-8 text-[#9CA6C2]">Voice automation works best when it starts with a specific customer need. Explore these example workflows and discuss what is practical for your systems and requirements.</p>
      </section>
      <section className="container-new pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {useCases.filter(item => item.slug !== 'page').map((item) => {
            const Icon = item.icon
            return <Link key={item.slug} href={`/use-cases/${item.slug}`} className="capability-card !min-h-0 group">
              <div className="capability-card-top"><span className="capability-icon"><Icon size={20}/></span><span className="capability-number">USE CASE</span></div>
              <h3>{item.title}</h3><p>{item.description}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[#C4B5FD]">Explore scenario <ArrowRight size={14}/></div>
            </Link>
          })}
        </div>
        <p className="max-w-3xl mx-auto mt-6 text-center text-[11px] leading-6 text-[#7783A2]">These are illustrative scenarios, not customer case studies or a promise that each workflow, integration, certification, or business outcome is currently available.</p>
      </section>
      <section className="container-new pb-10"><div className="contact-card max-w-4xl mx-auto flex flex-col sm:flex-row sm:items-center gap-5"><div className="flex-1"><h2>Have a different use case?</h2><p className="!m-0">Tell us about your call flow and the systems it needs to work with.</p></div><Link href="/contact" className="button-primary shrink-0">Discuss your workflow <ArrowRight size={16}/></Link></div></section>
    </main>
  )
}

import Link from 'next/link'
import {
  ArrowDownRight, ArrowRight, AudioLines, Bot, Check, ChevronDown, CirclePlay,
  Headphones, MessageSquareText, Network, PhoneCall, Radio, ShieldCheck,
  Sparkles, Workflow, Zap, Building2, CalendarDays, Database, MessagesSquare, BookOpen, LifeBuoy,
} from 'lucide-react'


function BrandLogo({ name, slug, src }: { name: string; slug?: string; src?: string }) {
  const logoSrc = src ?? `https://cdn.simpleicons.org/${slug}`
  return <span className="story-brand-logo" title={name} aria-label={name}>
    <img src={logoSrc} alt={name} loading="lazy" />
  </span>
}

const useCases = [
  { icon: Headphones, title: 'Customer enquiries', text: 'Give callers a clear first response for repeat questions and common requests.' },
  { icon: CalendarCheckIcon, title: 'Appointment conversations', text: 'Gather the details needed to move a booking or scheduling enquiry forward.' },
  { icon: MessageSquareText, title: 'Lead qualification', text: 'Ask consistent discovery questions and capture the caller’s intent for follow-up.' },
  { icon: PhoneCall, title: 'Call routing and handoff', text: 'Recognize when a conversation needs a human and design the right next step.' },
]

function CalendarCheckIcon({ size = 20 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18M9 15l2 2 4-4"/></svg>
}

const faqs = [
  { q: 'What is Yuviz.ai?', a: 'Yuviz is building a voice AI platform focused on configuring voice agents and coordinating telephony, audio, agent context, and response flow for customer conversations.' },
  { q: 'Are the product screens on this page live dashboards?', a: 'No. The workspace and conversation visuals on this page are illustrative design concepts. They are not a live dashboard, customer recording, or evidence of a production deployment.' },
  { q: 'Can Yuviz connect to our CRM or internal systems?', a: 'That depends on the system, the action you need, and the current implementation. Tell us what needs to happen after a call and we’ll distinguish available functionality from integration work.' },
  { q: 'Which AI providers and telephony setups are supported?', a: 'Provider and telephony support depends on the configured deployment. Share your SIP/carrier setup and preferred speech, language-model, or voice services so we can confirm the current fit.' },
  { q: 'How is pricing determined?', a: 'Pricing depends on call volume, telephony, AI services, deployment needs, and workflow scope. We discuss those requirements before proposing commercial terms.' },
]

export default function Page() {
  return (
    <main id="top" className="story-site">
      <section className="story-hero">
        <div className="story-hero-grid" aria-hidden="true" />
        <div className="story-container story-hero-layout">
          <div className="story-hero-copy">
            <div className="story-eyebrow"><span className="story-live-dot" /> VOICE AI FOR REAL CUSTOMER CONVERSATIONS</div>
            <h1>Every call has<br />a <span>next step.</span></h1>
            <p className="story-lede">Build voice-agent experiences that listen to your customers, work with business context, and help move the conversation forward.</p>
            <div className="story-actions">
              <Link href="/contact" className="story-button story-button-primary">Explore your use case <ArrowRight size={17}/></Link>
              <a href="#how-it-works" className="story-button story-button-quiet"><CirclePlay size={17}/> See how it works</a>
            </div>
            <div className="story-proof-note"><span className="story-proof-mark"><Check size={13}/></span> Start with one clear workflow. Validate it before you scale.</div>
          </div>

          <div className="story-visual-wrap">
            <div className="story-orbit story-orbit-one" aria-hidden="true" />
            <div className="story-orbit story-orbit-two" aria-hidden="true" />
            <div className="story-call-card">
              <div className="story-call-top"><span className="story-mini-brand"><AudioLines size={17}/></span><div><strong>Yuviz voice experience</strong><small>Illustrative conversation preview</small></div><span className="story-live-label"><span/> CONCEPT</span></div>
              <div className="story-call-status"><span className="story-wave"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></span><span>Conversation flow</span><span className="story-status-line"/></div>
              <div className="story-chat-row story-caller"><span className="story-chat-avatar"><PhoneCall size={14}/></span><div><small>CALLER</small><p>Hi, I’m calling to ask about an appointment.</p></div></div>
              <div className="story-chat-row story-agent"><span className="story-chat-avatar"><AudioLines size={14}/></span><div><small>VOICE AGENT</small><p>Of course. I can help gather the details. What day works best for you?</p></div></div>
              <div className="story-tool-row"><span className="story-tool-icon"><Workflow size={15}/></span><div><strong>Next step</strong><small>Collect details · Follow configured workflow</small></div><span className="story-tool-pill">EXAMPLE</span></div>
              <div className="story-call-foot"><span><span className="story-green-dot"/> Voice-first interaction</span><span>Illustrative UI · Not live data</span></div>
            </div>
            <div className="story-float-card story-float-top"><span className="story-float-icon"><Radio size={16}/></span><span><strong>Live call path</strong><small>Telephony + audio</small></span></div>
            <div className="story-float-card story-float-bottom"><span className="story-float-icon violet"><Network size={16}/></span><span><strong>Context-aware flow</strong><small>Configured agent behavior</small></span></div>
          </div>
        </div>
        <a href="#the-challenge" className="story-scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15}/></a>
      </section>

      <section id="the-challenge" className="story-section story-challenge">
        <div className="story-container story-split">
          <div className="story-section-intro">
            <span className="story-kicker">THE CUSTOMER MOMENT</span>
            <h2>Customers call for answers.<br/><em>Not another dead end.</em></h2>
          </div>
          <div className="story-challenge-copy">
            <p>When a phone call is the fastest way to get help, a missed call or unclear next step creates friction for everyone.</p>
            <p>Voice automation should do more than speak naturally. It should understand the purpose of the conversation, stay within its boundaries, and know what should happen next.</p>
            <a href="#the-approach" className="story-text-link">A more useful way to handle calls <ArrowRight size={15}/></a>
          </div>
        </div>
        <div className="story-container story-friction-grid">
          <article><span className="story-number">01</span><h3>Repeat questions</h3><p>Teams spend time answering the same routine enquiries again and again.</p></article>
          <article><span className="story-number">02</span><h3>Scattered context</h3><p>Useful answers may depend on business knowledge and the caller’s intent.</p></article>
          <article><span className="story-number">03</span><h3>Unclear handoff</h3><p>When automation reaches its limit, the caller still needs a clear next step.</p></article>
        </div>
      </section>

      <section id="the-approach" className="story-section story-approach">
        <div className="story-container">
          <div className="story-centered-heading"><span className="story-kicker">INTRODUCING YUVIZ</span><h2>Make the conversation<br/><em>part of the workflow.</em></h2><p>Bring voice, agent behavior, business context, and call flow into a system you can shape around a specific customer need.</p></div>
          <div className="story-pillars">
            <article className="story-pillar"><span className="story-pillar-icon"><AudioLines size={21}/></span><span className="story-pillar-step">01 / LISTEN</span><h3>Start with the caller</h3><p>Design the experience around what the customer says, the details that matter, and the intent behind the request.</p></article>
            <article className="story-pillar"><span className="story-pillar-icon violet"><Bot size={21}/></span><span className="story-pillar-step">02 / UNDERSTAND</span><h3>Use the right context</h3><p>Shape agent instructions and relevant knowledge around a bounded job, rather than relying on a generic answer.</p></article>
            <article className="story-pillar"><span className="story-pillar-icon coral"><Workflow size={21}/></span><span className="story-pillar-step">03 / MOVE FORWARD</span><h3>Define the next step</h3><p>Plan what the agent should do, what it should not do, and when a person needs to take over.</p></article>
          </div>
        </div>
      </section>

      <section id="integrations" className="story-section story-integrations">
        <div className="story-container">
          <div className="story-centered-heading story-integrations-heading">
            <span className="story-kicker">BUILT AROUND YOUR WORKFLOW</span>
            <h2>Voice AI belongs<br/><em>in your existing stack.</em></h2>
            <p>Connect telephony, customer records, scheduling, messaging, and workspace tools around your conversation workflows.</p>
          </div>
          <div className="story-integration-stage">
            <div className="story-integration-grid" aria-hidden="true"/>
            <svg className="story-integration-lines" viewBox="0 0 900 430" preserveAspectRatio="none" aria-hidden="true">
              <path d="M450 215 L190 80 M450 215 L450 55 M450 215 L710 80 M450 215 L170 340 M450 215 L450 375 M450 215 L730 340"/>
            </svg>
            <div className="story-integration-hub">
              <span className="story-hub-orbit"/>
              <span className="story-hub-mark"><AudioLines size={29}/></span>
              <strong>Yuviz</strong>
              <small>Voice workflow</small>
            </div>
            <article className="story-integration-node node-crm"><span><strong>CRM</strong><span className="story-brand-logos"><BrandLogo name="Salesforce" slug="salesforce"/><BrandLogo name="HubSpot" slug="hubspot"/><BrandLogo name="Zoho CRM" slug="zoho"/></span></span></article>
            <article className="story-integration-node node-calendar"><span><strong>Scheduling</strong><span className="story-brand-logos"><BrandLogo name="Google Calendar" slug="googlecalendar"/><BrandLogo name="Cal.com" slug="caldotcom"/></span></span></article>
            <article className="story-integration-node node-helpdesk"><span><strong>Telephony</strong><span className="story-brand-logos"><BrandLogo name="Twilio" slug="twilio"/><BrandLogo name="Plivo" slug="plivo"/><BrandLogo name="Vonage" slug="vonage"/></span></span></article>
            <article className="story-integration-node node-knowledge"><span><strong>Messaging</strong><span className="story-brand-logos"><BrandLogo name="WhatsApp" slug="whatsapp"/></span></span></article>
            <article className="story-integration-node node-data"><span><strong>Cloud telephony</strong><span className="story-brand-logos"><BrandLogo name="Cloudonix" src="https://logo.clearbit.com/cloudonix.com"/><BrandLogo name="Vobiz" src="https://logo.clearbit.com/vobiz.com"/></span></span></article>
            <article className="story-integration-node node-messaging"><span><strong>Google Workspace</strong><span className="story-brand-logos"><BrandLogo name="Google Drive" slug="googledrive"/><BrandLogo name="Google Sheets" slug="googlesheets"/></span></span></article>
          </div>
          <div className="story-integration-foot">
            <span><Workflow size={16}/> Map the systems to the job</span>
            <span>Context in · Next step out</span>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="story-section story-flow">
        <div className="story-container">
          <div className="story-split story-flow-heading"><div><span className="story-kicker">FROM HELLO TO NEXT STEP</span><h2>A voice experience<br/><em>with a clear path.</em></h2></div></div>
          <div className="story-flow-track">
            <article><span className="story-flow-icon"><PhoneCall size={20}/></span><span className="story-flow-num">STEP 01</span><h3>The call arrives</h3><p>Telephony routing connects the caller to the voice experience.</p></article>
            <span className="story-flow-arrow"><ArrowRight size={18}/></span>
            <article><span className="story-flow-icon violet"><AudioLines size={20}/></span><span className="story-flow-num">STEP 02</span><h3>Audio is handled</h3><p>The media path carries audio between the caller and the agent system.</p></article>
            <span className="story-flow-arrow"><ArrowRight size={18}/></span>
            <article><span className="story-flow-icon coral"><Sparkles size={20}/></span><span className="story-flow-num">STEP 03</span><h3>The agent responds</h3><p>Conversation logic uses configured instructions and available context to shape a response.</p></article>
            <span className="story-flow-arrow"><ArrowRight size={18}/></span>
            <article><span className="story-flow-icon green"><Check size={20}/></span><span className="story-flow-num">STEP 04</span><h3>Choose the next step</h3><p>Continue the conversation, follow a configured action, or hand off when needed.</p></article>
          </div>
        </div>
      </section>

      <section id="use-cases" className="story-section story-use-cases">
        <div className="story-container">
          <div className="story-split story-use-heading"><div><span className="story-kicker">WHERE TO BEGIN</span><h2>One useful conversation<br/><em>can be a strong start.</em></h2></div><p>Choose a clear, repeatable job. Confirm the required data and actions. Then evaluate how well the experience handles real variations and edge cases.</p></div>
          <div className="story-use-grid">{useCases.map((item, i) => { const Icon = item.icon; return <article key={item.title} className="story-use-card"><span className="story-use-icon"><Icon size={20}/></span><span className="story-number">0{i+1}</span><h3>{item.title}</h3><p>{item.text}</p><span className="story-use-label">POTENTIAL WORKFLOW</span></article> })}</div>
        </div>
      </section>

      <section className="story-section story-principles">
        <div className="story-container story-principles-layout">
          <div><span className="story-kicker">DESIGNED FOR REAL CALLS</span><h2>Fluent is good.<br/><em>Reliable is better.</em></h2><p className="story-principles-lede">A good voice experience needs a plan for the moments when speech is unclear, the request changes, a tool is unavailable, or a human should step in.</p><Link href="/contact" className="story-button story-button-primary">Discuss your call flow <ArrowRight size={16}/></Link></div>
          <div className="story-principle-list">
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Defined boundaries</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Make clear what the agent can handle, what it must avoid, and when it should ask for help.</p></details>
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Human handoff as a path</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Plan how a caller reaches a person when the request needs judgement, support, or an exception.</p></details>
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Measure the whole outcome</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Evaluate whether the caller’s need was resolved, not just whether the agent responded quickly.</p></details>
            <details><summary><span className="story-principle-check"><Check size={16}/></span><h3>Validate before expanding</h3><ChevronDown className="story-principle-chevron" size={16}/></summary><p>Test real call variations and edge cases in one workflow before extending to more use cases.</p></details>
          </div>
        </div>
      </section>

      <section id="faq" className="story-section story-faq">
        <div className="story-container story-faq-layout">
          <div><span className="story-kicker">GOOD QUESTIONS</span><h2>Know what’s real<br/><em>before you get started.</em></h2><p>We’ll discuss your workflow and be clear about current capabilities, dependencies, and what would need to be built.</p><Link href="/contact" className="story-text-link">Ask us about your use case <ArrowRight size={15}/></Link></div>
          <div className="story-faq-list">{faqs.map(faq => <details key={faq.q}><summary>{faq.q}<ChevronDown size={17}/></summary><p>{faq.a}</p></details>)}</div>
        </div>
      </section>

      <section className="story-final-cta">
        <div className="story-final-glow" aria-hidden="true"/>
        <div className="story-container story-final-content"><span className="story-kicker">LET’S START WITH THE CALL</span><h2>What should your<br/><em>next conversation do?</em></h2><p>Tell us about the callers, the workflow, and the outcome you want. We’ll work through the practical fit and what it takes to validate a first use case.</p><div className="story-actions story-actions-center"><Link href="/contact" className="story-button story-button-primary">Talk through your use case <ArrowRight size={17}/></Link><a href="mailto:hello@yuviz.ai" className="story-button story-button-quiet">Email Yuviz</a></div></div>
      </section>
    </main>
  )
}

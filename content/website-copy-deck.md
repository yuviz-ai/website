# Yuviz.ai website copy deck

Status: **DRAFT for review** · Branch `redesign/yuviz-site` · 2026-10-28

This is the single place to agree the website's words before anyone edits pages. Edit the **Proposed** lines directly; once a section is approved, it gets applied to the site as-is.

**Claim checks** — every factual claim is checked against the platform (branch `redesign`):
✅ built and live-verified · 🟡 built, not yet verified on real calls · ⚠️ only true after a fix lands · ❌ not built (never claim)

---

## 0. Decisions needed before applying

| # | Decision | Recommendation |
|---|---|---|
| D1 | **Knowledge base on calls.** Agents don't currently answer from uploaded documents during calls (issue #119). Every "answers from your documents" line depends on it. | Fix #119 before launch, or drop knowledge-base claims until it's fixed. |
| D2 | **Integration logo wall.** Vonage, Google Drive and Cal.com have no working connector today (Cal.com booking was removed in 39e9449). HubSpot and Zoho *are* built but aren't shown. | Show: Vobiz, Cloudonix, Twilio, Plivo, Salesforce, HubSpot, Zoho, Google Calendar, Google Sheets, WhatsApp, Vonage, Google Drive, Cal.com. |
| D3 | **One primary call to action.** Today /contact is labelled "Talk to our team", "Book demo", "Explore your use case", "Talk through your use case", "Discuss this workflow", "Talk to Yuviz"… | Use **Book a demo** everywhere for /contact; keep **Login** for the app. |
| D4 | **Product pages** (8) exist but nothing links to them. | Add a **Product** menu (copy in §1) and give each page real content (§6). |
| D5 | **Legal pages.** Privacy, Terms and Legal links open the contact form. | Write real Privacy Policy and Terms pages before launch (needs legal input, not in this deck). |
| D6 | **Tone.** ~12 disclaimers ("illustrative", "prototype", "not a guarantee") contradict bold headlines. | Say only true things, confidently; delete the disclaimers and the over-claims together. |
| D7 | **Pricing.** Billing isn't built, so there are no plans to publish. | Keep "talk to us" pricing, but positive (§3). |

### Launch blockers — do not publish until each ships
The copy below claims these; they are in progress, not yet in the code (checked 2026-10-28).
- [ ] Transfer on Vobiz and Cloudonix
- [ ] Vonage, Google Drive and Cal.com connectors (logo wall)

No longer claimed after the Knowledge base and Call analytics pages were removed: answers from documents (#119), call recording.

---

## 1. Global

### Navigation
| Item | Current | Proposed |
|---|---|---|
| Menus | Use Cases ▾ · Resources ▾ · Pricing · Contact | **Product ▾** · Use cases ▾ · Resources ▾ · Pricing |
| Primary CTA | Talk to our team / Book demo (mobile) | **Book a demo** (desktop and mobile) |
| Login | Login / Sign In / Customer Portal | **Log in** |

**Product ▾** (new)
- Agent builder — Design agents, voices and call flows visually ✅
- Inbound calls — Answer every call on your own numbers ✅
- Campaigns — Reach contact lists with paced, retried calls ✅
- IVR builder — Replace keypad menus with spoken ones ✅

**Use cases ▾** (heading: *By industry*) — fixes the regulated-action wording (KYC, triage, refills):
- Real estate — Qualify buyers and book site visits
- Banking — Answer account questions and route to the right team
- Healthcare — Appointments, reminders and front-desk questions
- E-commerce — Order status and support routing
- Restaurants — Reservations and opening-hours questions
- Public services — Citizen helplines and service information
- Sales — Qualify leads and book demos
- HR & hiring — Candidate screening and interview scheduling
- Footer link: **All industries** → `/use-cases` (today it wrongly opens /use-cases/real-estate)

**Resources ▾**
- FAQ — Setup, providers, security and pricing
- Blogs — Practical writing on voice AI
- Integrations — What connects to Yuviz today *(was "Guides for connecting Twilio, Salesforce & HubSpot")*
- Developers — How Yuviz fits your stack *(was "Developer quickstarts & SDK reference" — no SDKs exist ❌)*

### Footer
- Wordmark: `yuviz`
- Line: `© {year} Yuviz AI. All rights reserved.`
- Links: Privacy Policy · Terms of Use — **blocked on D5**. Drop "Legal" (duplicates the other two).

### Page titles (search results and browser tabs)
Today 19 pages share the home title. Proposed pattern: `{Page} | Yuviz.ai`, each with its own one-sentence description taken from the page's lede below.

---

## 2. Home (/)

### Hero
| | Current | Proposed |
|---|---|---|
| Eyebrow | VOICE AI FOR REAL CUSTOMER CONVERSATIONS | **AI VOICE AGENTS FOR BUSINESS** |
| H1 | Every call has / a next step. | **Turn conversations / into outcomes.** |
| Lede | Build voice-agent experiences that listen to your customers, work with business context, and help move the conversation forward. | **Yuviz answers your calls with AI voice agents that understand what callers need — then book, look up, confirm or hand off to your team.** |
| CTAs | Explore your use case · See how it works | **Book a demo** · **Hear a call** (→ #how-it-works) |
| Note | Start with one clear workflow. Validate it before you scale. | **Works with your numbers. Multilingual.** ✅ |
| Right side | "CONCEPT" diagram | **Live-call card** — script in §9 |

Claim checks: answer calls ✅ · book ✅ (Google Calendar preset) · look up ✅ (Salesforce/HubSpot/Zoho lookup) · confirm ✅ (WhatsApp/SMS) · hand off ✅ on SIP, ✅ on Vobiz/Cloudonix today · English + Hindi ✅

### The problem
- Kicker: **WHY VOICE AGENTS**
- H2: **Every missed call / is a missed outcome.**
- P: **Callers want an answer now. Teams can't staff every line, every hour — so calls wait, drop, or end without a next step.**
- Cards (keep 3, sharper):
  - **Calls go unanswered** — After hours, at peaks, or when everyone's busy.
  - **Same questions, all day** — Timings, prices, status, directions — answered by hand.
  - **Nothing happens after** — No booking, no record, no follow-up.

### How Yuviz works (merges today's "Approach" + "How it works" — same message twice)
- Kicker: **HOW IT WORKS**
- H2: **From hello / to done.**
- P: **Follow one call through Yuviz: answered on your number, understood, acted on, and passed to your team when a person is needed.**
- Steps:
  1. **Answer** — Calls reach your agent on your existing numbers, inbound or outbound. ✅
  2. **Understand** — It listens, lets callers interrupt naturally, and follows the flow you designed. ✅
  3. **Act** — It checks your calendar, looks up the caller in your CRM, books and confirms. ✅
  4. **Hand off** — When a person is needed, it transfers the call to your team. ✅ (SIP) / ✅ Vobiz, Cloudonix

### Use-case calls on the home cards (2026-10-29; replaces "Hear the voices")
Each "Start with one call" card has a play button in place of its number; recordings in `public/calls/home-<slug>.m4a`.
- **appointment-booking** — agent Sarah (English): C: Hi, I'd like to book a dental check-up this week. / A: Sure! I have Thursday at 11 or Friday at 4:30. Which suits you? / C: Friday at 4:30, please. / A: You're booked for Friday at 4:30. I've sent the confirmation on WhatsApp.
- **front-desk** — agent Matilda (English): C: Are you open on Sunday? / A: Yes, we're open on Sunday from 10 till 2. / C: And is there parking nearby? / A: There's free parking right behind the building. See you soon!
- **lead-qualification** — agent George (English): C: Hi, I saw your ad for the new apartments. / A: Thanks for calling! Are you looking to buy in the next three months? / C: Yes, probably a two-bedroom. / A: Great, I've noted that down. Our sales team will call you back today.
- **outbound-reminders** — agent Jessica (Hindi): A: नमस्ते! मैं लोटस क्लिनिक से बोल रही हूँ। कल सुबह ग्यारह बजे आपका अपॉइंटमेंट है। / C: हाँ, मुझे याद है। धन्यवाद। / A: बढ़िया! अगर समय बदलना हो, तो बस बताइए। / C: नहीं, ठीक है। कल मिलते हैं।

### Own your stack (added 2026-10-29)
- Kicker: **OWN YOUR STACK**
- H2: **Your numbers. / Your models. / Your data.**
- P: **Yuviz doesn't lock you into one carrier or one AI vendor.**
- **Bring your carrier** — Vobiz, Cloudonix, Twilio, Plivo or your own SIP trunk. Keep the numbers you already have.
- **Choose your AI** — OpenAI, Anthropic, Gemini, Groq, or a local model with Ollama. Pick per agent and switch any time.
- **Keep your data** — Self-host Yuviz on your own servers with Docker. Separate workspaces per customer, secrets encrypted at rest.

### Integrations
- Kicker: **INTEGRATIONS**
- H2: **Voice AI that fits / your existing tools.**
- P: **Bring your own phone numbers and connect the systems your team already uses.**
- Tiles: per **D2**.

### Built for real calls (was "Principles" — keep, reword around real features)
- Kicker: **BUILT FOR REAL CALLS**
- H2: **Fluent is good. / Reliable is better.**
- Items:
  - **Natural interruptions** — Callers can cut in; the agent stops and listens. ✅
  - **Clear boundaries** — You decide what the agent can do, and when it must hand over. ✅
  - **Test before you go live** — Call your agent from the browser before a single customer does. ✅
  - **Every call on record** — Transcript, summary and sentiment for each conversation. ✅
- CTA: **Book a demo**

### Use cases
- Kicker: **WHERE TO START**
- H2: **Start with one call. / Then scale.**
- Cards (drop the "POTENTIAL WORKFLOW" tags):
  - **Appointment booking** — Check availability, book, and send a confirmation. ✅
  - **Front-desk questions** — Timings, prices, directions and status, any hour. ✅
  - **Lead qualification** — Ask the same discovery questions on every call and log the answers. ✅ (Sheets)
  - **Outbound reminders** — Call a list with pacing and retries. ✅
- Link: **See all industries** → /use-cases

### FAQ (home, 4 questions — the full set lives on /resources/faq)
- **What does Yuviz do?** — Yuviz runs AI voice agents on your phone numbers. They answer and make calls, follow the flow you design, take actions in your tools, and hand off to your team when needed.
- **Can I keep my phone numbers?** — Yes. Yuviz works with Vobiz, Cloudonix and SIP trunks today. ✅ Twilio and Plivo numbers can be managed too (not yet verified on real calls).
- **Which languages are supported?** — English and Hindi today.  ✅
- **How is pricing worked out?** — By call volume and the AI services you choose. Book a demo and we'll estimate it with you.
- *Delete:* "Are the product screens on this page live dashboards?" (the new card is the product).

### Final CTA
- Kicker: **READY WHEN YOU ARE**
- H2: **What should your / next call achieve?**
- P: **Tell us about your calls and the outcome you want. We'll show you an agent doing it.**
- CTAs: **Book a demo** · **Email us** (hello@yuviz.ai)

---

## 3. Pricing (/pricing)
| | Current | Proposed |
|---|---|---|
| Kicker | PRICING & SCOPE | **PRICING** |
| H1 | Price the work you need. / Not a made-up plan. | **Pay for the calls / you actually take.** |
| Lede | Voice AI costs depend on… instead of publishing unverified plan prices or service guarantees. | **Pricing follows your call minutes and the AI services you choose. Tell us your volume and we'll give you an estimate.** |
| CTA | Discuss your workflow | **Get an estimate** (→ /contact) |

Factors (keep, tighten):
- **Call minutes** — Expected volume, inbound or outbound.
- **AI services** — The speech, language and voice providers you choose.
- **Integrations** — The tools your agent needs to act in.

Bottom box: **Have a call volume in mind?** — *Share your expected minutes and use case; we'll come back with numbers.* CTA **Get an estimate**. *(Disclaimer already removed.)*

---

## 4. Contact (/contact)
- Kicker: **BOOK A DEMO**
- H1: **Tell us about / your calls.**
- P: **Who calls you, what they need, and what should happen next. We'll show you an agent handling it.**
- Side panel: **A real conversation, not a pitch.** — *We'll look at your call flow, numbers and tools, and show you what Yuviz does today.* · hello@yuviz.ai
- Form: keep fields. Primary use case options: Appointment booking · Front-desk questions · Lead qualification · Outbound reminders · Human handoff · Other.
- Button: **Send** (opens your email app). Keep **one** short line under it: *This opens an email to hello@yuviz.ai.* — delete the duplicate "No server-side submission…" line.
- Delete "Back to the Yuviz overview".

---

## 5. Use cases

### Index (/use-cases)
- Kicker: **BY INDUSTRY**
- H1: **Voice agents for / the calls you get.**
- P: **Pick your industry to see the calls Yuviz can take off your team's plate.**
- Card link: **See use case**. Delete the "illustrative scenarios…" note.

### Industry pages (8) — make the template render per-industry content
Shared structure: H1 `{Industry} calls, / handled.` · 3 jobs · one example exchange · CTA **Book a demo**.
**Delete all unrendered data** in these page files (HIPAA/SOC 2/PCI claims, 99.99%, ROI percentages, 48 third-party names) ❌.

| Page | Job 1 | Job 2 | Job 3 |
|---|---|---|---|
| Real estate | Qualify buyers: budget, location, timeline | Book site visits on your calendar ✅ | Call back new enquiries ✅ |
| Banking | Branch hours, products and general questions | Route to the right team with context ✅ | Outbound payment reminders ✅ |
| Healthcare | Book and reschedule appointments ✅ | Reminder calls and SMS ✅ | Front-desk questions; urgent cases to staff ✅ |
| E-commerce | Order and delivery questions ✅ needs your order API via Tools ✅ | Returns and support routing ✅ | Outbound order confirmations ✅ |
| Restaurants | Reservations ✅ | Hours, menu and location questions ✅ | WhatsApp confirmation ✅ |
| Public services | Helpline information, any hour ✅ | Route to the right department ✅ | Outbound notifications ✅ |
| Sales | Qualify inbound leads, log to Sheets/CRM ✅ | Book demos on your calendar ✅ | Outbound campaigns ✅ |
| HR & hiring | Screen candidates with set questions ✅ | Schedule interviews ✅ | Answer hiring-process questions ✅ |

Example call per page (6 lines, caller ↔ agent; recorded in `public/calls/<slug>.m4a`; agent voice is Sarah). Changing a line means re-recording that page.

- **real-estate** — C: Is the 2BHK in Baner still available? / A: It is. Would Saturday at 11 or Sunday at 4 suit you for a visit? / C: Saturday works. Is parking included? / A: Yes, one covered parking spot comes with it. May I have your name for the visit? / C: It's Rohan. / A: Thanks, Rohan. You're booked for Saturday at 11, and I've sent the address on WhatsApp.
- **banking** — C: What time does the Andheri branch close today? / A: It's open until 4 PM today. Is there anything I can help with before then? / C: I need to update my address. / A: That needs a quick ID check, so I'll connect you to the branch team. / C: Okay, thanks. / A: You're welcome. Connecting you now.
- **healthcare** — C: Can I move my appointment with Dr Rao to next week? / A: Of course. Would Tuesday at 10 or Wednesday at 3 work better? / C: Wednesday at 3, please. / A: Done. Wednesday at 3 with Dr Rao. You'll get a reminder the day before. / C: Great, thank you. / A: You're welcome. Take care!
- **e-commerce** — C: Where's my order? I placed it on Monday. / A: It's out for delivery and should reach you by 6 PM today. / C: I won't be home. Can someone else take it? / A: Sure. Who should the courier hand it to? / C: My neighbour Anita, in flat 4B. / A: Got it. I've added a note for Anita in 4B and sent you the tracking link on WhatsApp.
- **restaurants** — C: Can I book a table for four tomorrow at 8? / A: Yes, I have a table for four at 8 PM. Indoors or on the terrace? / C: The terrace, please. It's my mother's birthday. / A: Lovely! The terrace for four at 8, and I've let the team know about the birthday. / C: Perfect. / A: I've sent the confirmation on WhatsApp. See you tomorrow!
- **government** — C: How do I renew my property tax? / A: You can pay it on the municipal portal with your property ID. Do you have it handy? / C: No, I can't find it. / A: It's printed on last year's tax receipt, at the top right. Shall I send you the portal link by SMS? / C: Yes, please. / A: Done. You'll get the link in a moment.
- **sales** — C: I'd like to know more about your pricing. / A: Happy to help. Roughly how many calls does your team take a month? / C: About two thousand. / A: Got it. Are those mostly inbound questions, or outbound follow-ups? / C: Mostly inbound. / A: Great. I'll book you a fifteen-minute demo with our team. Does tomorrow at 11 work?
- **hr-hiring** — C: I applied for the support role. What happens next? / A: Thanks for applying! May I have your name? / C: Priya Shah. / A: Thanks, Priya. The next step is a short screening call. Would Thursday at 2 work? / C: Thursday's fine. / A: You're booked for Thursday at 2. I've sent the details on WhatsApp.

---

## 6. Product pages (4) — real content, real headlines
Replace absolute headlines ("Zero Hallucinations", "Zero Wait Time", "Built for Scale", "Prompt to Voice in Minutes") and the identical body.

| Route | H1 / gradient line | Three points (all checked) |
|---|---|---|
| agent-builder | Agent builder / **Design the call, visually.** | Conversation steps as a graph ✅ · Choose voice, language and AI providers ✅ · Test calls from the browser ✅ |
| inbound-calls | Inbound calls / **Answer every call.** | Route each number to an agent ✅ · Natural interruptions ✅ · Transfer to your team ✅ (SIP) |
| outbound-calls | Outbound campaigns / **Call your list, at your pace.** | Upload contacts, set pacing ✅ · Retries with gaps and limits ✅ · Readiness checks before you start ✅ |
| ivr-builder | IVR builder / **Menus callers can talk to.** | Build spoken menus ✅ · Route by what callers say ✅ · Runs on live inbound calls ✅ |

Knowledge base, Call analytics, Tools & integrations and Security & deployment pages were removed (2026-10-28).

---

## 7. Resources

### FAQ (/resources/faq)
- H1: **Questions, / answered.**
- Rewrite answers to the facts (no "prototype", no internal architecture):
  - **What does Yuviz do?** — same as home.
  - **What can it do today?** — Answer and make calls on your numbers, follow designed flows, interrupt naturally, look up callers, book, confirm, transfer to people, and record transcripts and summaries.
  - **Which providers are supported?** — Telephony: Vobiz,Twilio and Plivo numbers SIP ✅ Cloudonix and BYOC. AI: OpenAI, Anthropic, Gemini, Groq, Ollama. Speech: Deepgram, Whisper. Voices: ElevenLabs, Cartesia, Deepgram, Sarvam, Kokoro. ✅
  - **Languages?** — English and Hindi. ✅
  - **Human handoff?** — Yes — the agent can transfer a call to your team. ✅
  - **Certifications?** — *We don't hold SOC 2, HIPAA or PCI certifications yet. Tell us your requirements and we'll be straight about fit.* (keep honest)
  - **Latency guarantee?** — delete the question (no figure to give).
  - **Pricing?** — same as home.

### Blogs (/resources/blog)
- Label it **Blogs**. Keep the featured guide. Delete the three "UPCOMING TOPIC" cards until written.

### Developers (/resources/documentation)
- H1: **How Yuviz fits / your stack.**
- P: **Connect your telephony over SIP or a supported carrier, and let agents call your systems through configured HTTP tools.** ✅
- Remove "Public SDKs … are not documented here yet".

### Integrations (/resources/api-integration)
- H1: **What connects / to Yuviz today.**
- Three groups, each a real list: Telephony (Vobiz, Twilio and Plivo numbers, SIP; Cloudonix ✅) · Business tools (Salesforce, HubSpot, Zoho, Google Calendar, Google Sheets, WhatsApp ✅) · AI services (as FAQ).
- CTA: **Need something else? Book a demo.**

---

## 8. Delete list (no replacement)
- All "illustrative", "concept", "prototype", "not a guarantee" disclaimers (~12), including the template disclaimers on 16 pages.
- Unrendered compliance/metric/integration data inside the 8 use-case files.
- "Twilio/Telnyx SIP" in ArchitectureSection and AgentBuilderVisual; 10 unused marketing components (HeroTeaser, WhyVoice, TranscriptDemo, LiveDemo hero and others).
- Home FAQ question about "illustrative product screens".

---

## 9. Live-call card (home hero, right side)
Plays once on load, then holds the final state; static for reduced-motion. Small label: **Example call**.

Header: `● Live · Lotus Clinic · 00:42` · waveform · language chip `EN`

| t | Speaker | Line | Chip shown |
|---|---|---|---|
| 0.0s | Caller | Hi, I'd like to see Dr Mehta this week. | — |
| 1.4s | Agent | Sure — Thursday 11:00 or Friday 4:30? | `Checked Google Calendar · 2 slots` ✅ |
| 3.0s | Caller | Friday works. | — |
| 4.2s | Agent | Booked for Friday 4:30. I've sent the details on WhatsApp. | `Booked · Fri 4:30 PM` ✅ · `WhatsApp confirmation sent` ✅ |

Outcome badge (fades in last): **✓ Appointment booked** · `Summary saved` ✅

Uses only built features (Calendar booking preset, WhatsApp confirmation, summaries). The clinic and doctor are fictional.

---

## 10. Industry pages v2 — DRAFT for review (2026-10-29)
New structure for all 8 `/use-cases/<slug>` pages, replacing §5's industry template. Inspired by the *structure* of competitor industry pages, with our own copy and only claims we can back: no stats, no language counts, no free trial.

**Section order (every industry):** Hero → The moment it costs you → Hear it handle the call (3 scenario tabs) → On every call (6 capabilities) → Live in days (4 steps) → Closing CTA.

**Shared "Live in days" steps** (step 2 changes per industry, shown below):
1. **Connect your number.** Bring your Vobiz, Cloudonix, Twilio or Plivo number, or your SIP trunk.
2. **Set the questions.** *(industry line)*
3. **Test from your browser.** Call your agent before any customer does.
4. **Go live.** Inbound and outbound, with a person one transfer away.

Scenario 1 on each page is the existing six-line call (§5). Scenarios 2 and 3 are new recordings: C = caller, A = agent.

### Real estate
- **Hero:** Never lose a / *property lead.* — *Yuviz answers every enquiry, qualifies the buyer and books the site visit, day or night.*
- **The moment it costs you:** A buyer calls at 9 PM about the 2BHK in Baner. Nobody picks up. By morning, they've booked a visit with someone else.
- **Scenarios:** ① New enquiry (existing) · ② **Reschedule a visit** — C: I need to move my site visit from Saturday. / A: No problem. Would Sunday at 11 or Monday at 5 work? / C: Monday at 5. / A: Done, you're booked for Monday at 5. I've sent the new time on WhatsApp. · ③ **Hindi caller** — C: क्या बानेर वाले 2BHK में पार्किंग है? / A: जी हाँ, एक कवर्ड पार्किंग मिलती है। क्या आप साइट विज़िट बुक करना चाहेंगे? / C: हाँ, शनिवार सुबह। / A: शनिवार सुबह ग्यारह बजे बुक हो गया। पता WhatsApp पर भेज दिया है।
- **On every call:** Qualify every buyer (budget, location, timeline) · Book site visits on your calendar · Confirm on WhatsApp · Call new leads back from a list · English and Hindi · Hand hot buyers to your sales team
- **Step 2:** Set the questions: budget, preferred area, move-in timeline.
- **Closing:** Turn every enquiry / *into a site visit.*

### Banking
- **Hero:** Branch questions, / *answered instantly.* — *Yuviz handles timings, products and general questions, and routes anything account-specific to the right team.*
- **The moment it costs you:** A customer waits ten minutes on hold just to ask when the branch closes, then gives up.
- **Scenarios:** ① Branch hours (existing) · ② **Product question** — C: What do I need to open a savings account? / A: You'll need ID and address proof. Would you like the branch team to call you to start the process? / C: Yes, please. / A: Done. They'll call you today, and I've sent the document list by SMS. · ③ **Hindi caller** — C: अंधेरी ब्रांच शनिवार को खुली है? / A: जी हाँ, शनिवार को सुबह दस से दोपहर दो बजे तक खुली रहती है। / C: ठीक है, धन्यवाद। / A: आपका स्वागत है। कुछ और मदद चाहिए तो बताइए।
- **On every call:** Branch hours and locations · General product questions · Route account requests to the right team, with context · Outbound payment reminders · SMS follow-ups · English and Hindi
- **Step 2:** Set the questions: branches, products, and what must always go to a person.
- **Closing:** Shorter queues, / *happier customers.*
- ⚠️ No account access, KYC or transactions. The agent routes those to staff.

### Healthcare
- **Hero:** A front desk that / *never misses a call.* — *Yuviz books and reschedules appointments, answers front-desk questions and sends reminders, and passes anything urgent straight to your staff.*
- **The moment it costs you:** The phone rings while the receptionist checks in a patient. The caller hangs up and books with another clinic.
- **Scenarios:** ① Reschedule (existing) · ② **Clinic timings** — C: Is the clinic open on Sunday? / A: Yes, from 10 till 1. Would you like an appointment? / C: Yes, with Dr Rao. / A: You're booked with Dr Rao on Sunday at 11. I've sent a reminder by SMS. · ③ **Hindi caller** — C: क्या कल डॉक्टर मेहता उपलब्ध हैं? / A: जी हाँ, कल शाम चार बजे का समय खाली है। बुक कर दूँ? / C: हाँ, कर दीजिए। / A: बुक हो गया। एक दिन पहले आपको रिमाइंडर मिलेगा।
- **On every call:** Book and reschedule appointments · Clinic hours, doctors and directions · Reminder calls and SMS · Urgent calls passed to staff · English and Hindi · Every call summarised for your team
- **Step 2:** Set the questions: doctors, timings, and when to pass a call to staff.
- **Closing:** More booked appointments, / *fewer missed calls.*
- ⚠️ No medical advice, triage or prescriptions. Urgent or clinical questions go to staff.

### E-commerce
- **Hero:** Order questions, / *handled on the first ring.* — *Yuviz answers "where's my order?", arranges delivery notes and routes returns to your team.*
- **The moment it costs you:** Every evening, the same "where's my order?" calls pile up and your support team spends the morning catching up.
- **Scenarios:** ① Delivery (existing) · ② **Return request** — C: I'd like to return the shoes I bought last week. / A: Sure. Is it a size issue or something else? / C: The size is too small. / A: Got it. I've passed it to our returns team, and they'll message you the pickup slot on WhatsApp. · ③ **Hindi caller** — C: मेरा ऑर्डर कब तक आएगा? / A: आपका ऑर्डर निकल चुका है और आज शाम छह बजे तक पहुँच जाएगा। / C: ठीक है, धन्यवाद। / A: ट्रैकिंग लिंक WhatsApp पर भेज दिया है।
- **On every call:** Order status from your own order system *(via a custom API tool)* · Delivery notes and changes · Returns routed to your team · WhatsApp tracking links · Outbound order confirmations · English and Hindi
- **Step 2:** Set the questions: connect your order lookup, and set the return rules.
- **Closing:** Fewer tickets, / *faster answers.*

### Restaurants
- **Hero:** Every table booked, / *even during the rush.* — *Yuviz takes reservations, answers menu and timing questions, and confirms on WhatsApp while your staff serve guests.*
- **The moment it costs you:** Friday at 8 PM, the phone keeps ringing and no one can answer. Those tables stay empty.
- **Scenarios:** ① Birthday table (existing) · ② **Menu question** — C: Do you have vegan options? / A: Yes, we have a vegan thali and three vegan mains. Would you like to book a table? / C: Yes, for two tonight at 9. / A: Done, a table for two at 9 tonight. The confirmation is on WhatsApp. · ③ **Hindi caller** — C: आज रात चार लोगों के लिए टेबल मिलेगी? / A: जी हाँ, रात साढ़े आठ बजे की टेबल खाली है। बुक कर दूँ? / C: हाँ, प्लीज़। / A: बुक हो गई। कन्फर्मेशन WhatsApp पर भेज दिया है।
- **On every call:** Reservations on your calendar · Menu, hours and location questions · Special requests noted for the team · WhatsApp confirmations · Reminder calls before the booking · English and Hindi
- **Step 2:** Set the questions: table sizes, timings, and the menu answers.
- **Closing:** Answer every call, / *fill every table.*

### Public services
- **Hero:** Citizen helplines / *that always answer.* — *Yuviz answers common service questions, sends the right link by SMS and routes complex cases to the right department.*
- **The moment it costs you:** A citizen calls three times about a simple tax question and never gets through.
- **Scenarios:** ① Property tax (existing) · ② **Certificate status** — C: How long does a birth certificate take? / A: Usually about seven working days after you apply. Would you like the application link by SMS? / C: Yes. / A: Sent. You can track the status on the same page. · ③ **Hindi caller** — C: पानी का बिल कहाँ भर सकते हैं? / A: आप नगर निगम के पोर्टल पर ऑनलाइन भर सकते हैं। लिंक SMS कर दूँ? / C: हाँ, भेज दीजिए। / A: भेज दिया। कुछ और जानकारी चाहिए तो बताइए।
- **On every call:** Answers to common service questions · Links and steps by SMS · Route to the right department · Outbound notifications and reminders · English and Hindi · Every call logged with a summary
- **Step 2:** Set the questions: services, documents, and which department handles what.
- **Closing:** Every citizen heard, / *first time.*

### Sales
- **Hero:** Qualify every lead / *while it's still warm.* — *Yuviz calls back new leads, asks your qualifying questions, logs the answers and books the demo.*
- **The moment it costs you:** A lead fills in your form at lunch. Your team calls back the next day, and they've already signed with someone else.
- **Scenarios:** ① Pricing enquiry (existing) · ② **Outbound callback** — A: Hi, this is Sarah from Yuviz. You asked about a demo this morning. Is now a good time? / C: Yes, go ahead. / A: Great. How many calls does your team handle each month? / C: Around five hundred. / A: Thanks. I've booked you a demo tomorrow at 11 and logged your answers for the team. · ③ **Hindi caller** — C: आपकी प्राइसिंग के बारे में जानना था। / A: ज़रूर। आपकी टीम हर महीने कितनी कॉल्स लेती है? / C: करीब एक हज़ार। / A: धन्यवाद। मैं आपके लिए कल सुबह ग्यारह बजे डेमो बुक कर देती हूँ।
- **On every call:** Call new leads back from a list · Ask the same qualifying questions every time · Log answers to Google Sheets · Look up the caller in Salesforce, HubSpot or Zoho · Book demos on your calendar · English and Hindi
- **Step 2:** Set the questions: your qualifying questions and what counts as a hot lead.
- **Closing:** More conversations, / *more demos booked.*

### HR & hiring
- **Hero:** Screen every candidate / *without the phone tag.* — *Yuviz answers applicant questions, runs your screening questions and schedules the interview.*
- **The moment it costs you:** Two hundred applicants, one recruiter, and a week of calls before the first interview is even booked.
- **Scenarios:** ① Next steps (existing) · ② **Screening call** — A: Hi Priya, this is Sarah calling about your application. Do you have two minutes? / C: Sure. / A: Are you comfortable with rotating shifts? / C: Yes, that's fine. / A: Great. I've booked your interview for Thursday at 2 and sent the details on WhatsApp. · ③ **Hindi caller** — C: सपोर्ट रोल के लिए इंटरव्यू कब होगा? / A: आपका नाम बताएँगे? / C: रवि शर्मा। / A: धन्यवाद रवि। आपका इंटरव्यू गुरुवार दोपहर दो बजे तय हो गया है।
- **On every call:** Applicant questions answered · The same screening questions for every candidate · Interviews scheduled on your calendar · Reminder calls and WhatsApp details · English and Hindi · Every call summarised for the recruiter
- **Step 2:** Set the questions: your screening questions and interview slots.
- **Closing:** Hire faster, / *without the phone tag.*

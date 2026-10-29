import Link from 'next/link'
import type { Metadata } from 'next'
import type React from 'react'
import {
  ArrowRight, Bell, Building2, CalendarCheck, FileText, Headphones, Home, Info, Landmark, Languages, MessageCircle, MessageSquareText, PackageSearch, PhoneCall, PhoneOutgoing, RotateCcw, Route, Search, ShoppingBag, Table2, Truck, UserCheck, Users, Utensils,
} from 'lucide-react'
import { ScenarioCallPlayer, type Scenario } from '@/components/marketing/ScenarioCallPlayer'

interface Capability { title: string; icon: React.ElementType }
export interface UseCase {
  slug: string
  name: string
  summary: string
  icon: React.ElementType
  hero: [string, string]
  lede: string
  moment: string
  capabilities: Capability[]
  step2: string
  closing: [string, string]
  /** Scenario 1, also played on the /use-cases index cards. */
  lines: string[]
  starts: number[]
  scenarios: Scenario[]
}

export const USE_CASES: UseCase[] = [
  {
    slug: 'real-estate', name: "Real estate", summary: "Qualify buyers and book site visits", icon: Home,
    hero: ["Never lose a", "property lead."], lede: "Yuviz answers every enquiry, qualifies the buyer and books the site visit, day or night.", moment: "A buyer calls at 9 PM about the 2BHK in Baner. Nobody picks up. By morning, they've booked a visit with someone else.",
    capabilities: [{ title: "Qualify every buyer (budget, location, timeline)", icon: UserCheck }, { title: "Book site visits on your calendar", icon: CalendarCheck }, { title: "Confirm on WhatsApp", icon: MessageCircle }, { title: "Call new leads back from a list", icon: PhoneOutgoing }, { title: "English and Hindi", icon: Languages }, { title: "Hand hot buyers to your sales team", icon: Route }],
    step2: "Budget, preferred area, move-in timeline.", closing: ["Turn every enquiry", "into a site visit."],
    lines: ["Is the 2BHK in Baner still available?", "It is. Would Saturday at 11 or Sunday at 4 suit you for a visit?", "Saturday works. Is parking included?", "Yes, one covered parking spot comes with it. May I have your name for the visit?", "It's Rohan.", "Thanks, Rohan. You're booked for Saturday at 11, and I've sent the address on WhatsApp."], starts: [0.0, 3.28, 7.54, 10.41, 15.14, 16.66],
    scenarios: [
      { title: "New enquiry", src: '/calls/real-estate.m4a', caller: { name: "Rohan Mehta", number: '+91 98••• ••660', avatar: '/avatars/real-estate-1.svg' }, starts: [0.0, 3.28, 7.54, 10.41, 15.14, 16.66], lines: [{ who: "caller", text: "Is the 2BHK in Baner still available?" }, { who: "agent", text: "It is. Would Saturday at 11 or Sunday at 4 suit you for a visit?" }, { who: "caller", text: "Saturday works. Is parking included?" }, { who: "agent", text: "Yes, one covered parking spot comes with it. May I have your name for the visit?" }, { who: "caller", text: "It's Rohan." }, { who: "agent", text: "Thanks, Rohan. You're booked for Saturday at 11, and I've sent the address on WhatsApp." }] },
      { title: "Reschedule a visit", src: '/calls/real-estate-2.m4a', caller: { name: "Arjun Kapoor", number: '+91 98••• ••940', avatar: '/avatars/real-estate-2.svg' }, starts: [0.0, 2.95, 7.12, 8.97], lines: [{ who: "caller", text: "I need to move my site visit from Saturday." }, { who: "agent", text: "No problem. Would Sunday at 11 or Monday at 5 work?" }, { who: "caller", text: "Monday at 5." }, { who: "agent", text: "Done, you're booked for Monday at 5. I've sent the new time on WhatsApp." }] },
      { title: "Hindi caller", src: '/calls/real-estate-3.m4a', caller: { name: "Neha Kulkarni", number: '+91 98••• ••442', avatar: '/avatars/real-estate-3.svg' }, starts: [0.0, 2.91, 8.14, 10.36], lines: [{ who: "caller", text: "क्या बानेर वाले 2BHK में पार्किंग है?" }, { who: "agent", text: "जी हाँ, एक कवर्ड पार्किंग मिलती है। क्या आप साइट विज़िट बुक करना चाहेंगे?" }, { who: "caller", text: "हाँ, शनिवार सुबह।" }, { who: "agent", text: "शनिवार सुबह ग्यारह बजे बुक हो गया। पता WhatsApp पर भेज दिया है।" }] },
    ],
  },
  {
    slug: 'banking', name: "Banking", summary: "Answer account questions and route to the right team", icon: Landmark,
    hero: ["Branch questions,", "answered instantly."], lede: "Yuviz handles timings, products and general questions, and routes anything account-specific to the right team.", moment: "A customer waits ten minutes on hold just to ask when the branch closes, then gives up.",
    capabilities: [{ title: "Branch hours and locations", icon: Info }, { title: "General product questions", icon: Info }, { title: "Route account requests to the right team, with context", icon: Route }, { title: "Outbound payment reminders", icon: Bell }, { title: "SMS follow-ups", icon: MessageSquareText }, { title: "English and Hindi", icon: Languages }],
    step2: "Branches, products, and what must always go to a person.", closing: ["Shorter queues,", "happier customers."],
    lines: ["What time does the Andheri branch close today?", "It's open until 4 PM today. Is there anything I can help with before then?", "I need to update my address.", "That needs a quick ID check, so I'll connect you to the branch team.", "Okay, thanks.", "You're welcome. Connecting you now."], starts: [0.0, 2.91, 7.45, 9.57, 13.23, 14.89],
    scenarios: [
      { title: "Branch hours", src: '/calls/banking.m4a', caller: { name: "Ananya Reddy", number: '+91 98••• ••437', avatar: '/avatars/banking-1.svg' }, starts: [0.0, 2.91, 7.45, 9.57, 13.23, 14.89], lines: [{ who: "caller", text: "What time does the Andheri branch close today?" }, { who: "agent", text: "It's open until 4 PM today. Is there anything I can help with before then?" }, { who: "caller", text: "I need to update my address." }, { who: "agent", text: "That needs a quick ID check, so I'll connect you to the branch team." }, { who: "caller", text: "Okay, thanks." }, { who: "agent", text: "You're welcome. Connecting you now." }] },
      { title: "Product question", src: '/calls/banking-2.m4a', caller: { name: "Vikram Rao", number: '+91 98••• ••349', avatar: '/avatars/banking-2.svg' }, starts: [0.0, 2.44, 7.77, 9.16], lines: [{ who: "caller", text: "What do I need to open a savings account?" }, { who: "agent", text: "You'll need ID and address proof. Would you like the branch team to call you to start the process?" }, { who: "caller", text: "Yes, please." }, { who: "agent", text: "Done. They'll call you today, and I've sent the document list by SMS." }] },
      { title: "Hindi caller", src: '/calls/banking-3.m4a', caller: { name: "Kavya Menon", number: '+91 98••• ••671', avatar: '/avatars/banking-3.svg' }, starts: [0.0, 2.72, 6.75, 8.74], lines: [{ who: "caller", text: "अंधेरी ब्रांच शनिवार को खुली है?" }, { who: "agent", text: "जी हाँ, शनिवार को सुबह दस से दोपहर दो बजे तक खुली रहती है।" }, { who: "caller", text: "ठीक है, धन्यवाद।" }, { who: "agent", text: "आपका स्वागत है। कुछ और मदद चाहिए तो बताइए।" }] },
    ],
  },
  {
    slug: 'healthcare', name: "Healthcare", summary: "Appointments, reminders and front-desk questions", icon: Headphones,
    hero: ["A front desk that", "never misses a call."], lede: "Yuviz books and reschedules appointments, answers front-desk questions and sends reminders, and passes anything urgent straight to your staff.", moment: "The phone rings while the receptionist checks in a patient. The caller hangs up and books with another clinic.",
    capabilities: [{ title: "Book and reschedule appointments", icon: CalendarCheck }, { title: "Clinic hours, doctors and directions", icon: Info }, { title: "Reminder calls and SMS", icon: MessageSquareText }, { title: "Urgent calls passed to staff", icon: Route }, { title: "English and Hindi", icon: Languages }, { title: "Every call summarised for your team", icon: FileText }],
    step2: "Doctors, timings, and when to pass a call to staff.", closing: ["More booked appointments,", "fewer missed calls."],
    lines: ["Can I move my appointment with Dr Rao to next week?", "Of course. Would Tuesday at 10 or Wednesday at 3 work better?", "Wednesday at 3, please.", "Done. Wednesday at 3 with Dr Rao. You'll get a reminder the day before.", "Great, thank you.", "You're welcome. Take care!"], starts: [0.0, 3.09, 7.22, 9.16, 13.79, 15.31],
    scenarios: [
      { title: "Reschedule", src: '/calls/healthcare.m4a', caller: { name: "Karan Malhotra", number: '+91 98••• ••647', avatar: '/avatars/healthcare-1.svg' }, starts: [0.0, 3.09, 7.22, 9.16, 13.79, 15.31], lines: [{ who: "caller", text: "Can I move my appointment with Dr Rao to next week?" }, { who: "agent", text: "Of course. Would Tuesday at 10 or Wednesday at 3 work better?" }, { who: "caller", text: "Wednesday at 3, please." }, { who: "agent", text: "Done. Wednesday at 3 with Dr Rao. You'll get a reminder the day before." }, { who: "caller", text: "Great, thank you." }, { who: "agent", text: "You're welcome. Take care!" }] },
      { title: "Clinic timings", src: '/calls/healthcare-2.m4a', caller: { name: "Rahul Verma", number: '+91 98••• ••868', avatar: '/avatars/healthcare-2.svg' }, starts: [0.0, 1.7, 5.27, 6.93], lines: [{ who: "caller", text: "Is the clinic open on Sunday?" }, { who: "agent", text: "Yes, from 10 till 1. Would you like an appointment?" }, { who: "caller", text: "Yes, with Dr Rao." }, { who: "agent", text: "You're booked with Dr Rao on Sunday at 11. I've sent a reminder by SMS." }] },
      { title: "Hindi caller", src: '/calls/healthcare-3.m4a', caller: { name: "Amit Joshi", number: '+91 98••• ••508', avatar: '/avatars/healthcare-3.svg' }, starts: [0.0, 2.58, 6.71, 8.46], lines: [{ who: "caller", text: "क्या कल डॉक्टर मेहता उपलब्ध हैं?" }, { who: "agent", text: "जी हाँ, कल शाम चार बजे का समय खाली है। बुक कर दूँ?" }, { who: "caller", text: "हाँ, कर दीजिए।" }, { who: "agent", text: "बुक हो गया। एक दिन पहले आपको रिमाइंडर मिलेगा।" }] },
    ],
  },
  {
    slug: 'e-commerce', name: "E-commerce", summary: "Order status and support routing", icon: ShoppingBag,
    hero: ["Order questions,", "handled on the first ring."], lede: "Yuviz answers \"where's my order?\", arranges delivery notes and routes returns to your team.", moment: "Every evening, the same \"where's my order?\" calls pile up and your support team spends the morning catching up.",
    capabilities: [{ title: "Order status from your own order system (via a custom API tool)", icon: PackageSearch }, { title: "Delivery notes and changes", icon: Truck }, { title: "Returns routed to your team", icon: RotateCcw }, { title: "WhatsApp tracking links", icon: MessageCircle }, { title: "Outbound order confirmations", icon: PhoneOutgoing }, { title: "English and Hindi", icon: Languages }],
    step2: "Connect your order lookup, and set the return rules.", closing: ["Fewer tickets,", "faster answers."],
    lines: ["Where's my order? I placed it on Monday.", "It's out for delivery and should reach you by 6 PM today.", "I won't be home. Can someone else take it?", "Sure. Who should the courier hand it to?", "My neighbour Anita, in flat 4B.", "Got it. I've added a note for Anita in 4B and sent you the tracking link on WhatsApp."], starts: [0.0, 2.77, 6.19, 9.25, 12.02, 15.22],
    scenarios: [
      { title: "Delivery", src: '/calls/e-commerce.m4a', caller: { name: "Meera Pillai", number: '+91 98••• ••912', avatar: '/avatars/e-commerce-1.svg' }, starts: [0.0, 2.77, 6.19, 9.25, 12.02, 15.22], lines: [{ who: "caller", text: "Where's my order? I placed it on Monday." }, { who: "agent", text: "It's out for delivery and should reach you by 6 PM today." }, { who: "caller", text: "I won't be home. Can someone else take it?" }, { who: "agent", text: "Sure. Who should the courier hand it to?" }, { who: "caller", text: "My neighbour Anita, in flat 4B." }, { who: "agent", text: "Got it. I've added a note for Anita in 4B and sent you the tracking link on WhatsApp." }] },
      { title: "Return request", src: '/calls/e-commerce-2.m4a', caller: { name: "Sneha Patil", number: '+91 98••• ••549', avatar: '/avatars/e-commerce-2.svg' }, starts: [0.0, 2.77, 5.4, 7.48], lines: [{ who: "caller", text: "I'd like to return the shoes I bought last week." }, { who: "agent", text: "Sure. Is it a size issue or something else?" }, { who: "caller", text: "The size is too small." }, { who: "agent", text: "Got it. I've passed it to our returns team, and they'll message you the pickup slot on WhatsApp." }] },
      { title: "Hindi caller", src: '/calls/e-commerce-3.m4a', caller: { name: "Sameer Khan", number: '+91 98••• ••283', avatar: '/avatars/e-commerce-3.svg' }, starts: [0.0, 1.84, 5.59, 7.3], lines: [{ who: "caller", text: "मेरा ऑर्डर कब तक आएगा?" }, { who: "agent", text: "आपका ऑर्डर निकल चुका है और आज शाम छह बजे तक पहुँच जाएगा।" }, { who: "caller", text: "ठीक है, धन्यवाद।" }, { who: "agent", text: "ट्रैकिंग लिंक WhatsApp पर भेज दिया है।" }] },
    ],
  },
  {
    slug: 'restaurants', name: "Restaurants", summary: "Reservations and opening-hours questions", icon: Utensils,
    hero: ["Every table booked,", "even during the rush."], lede: "Yuviz takes reservations, answers menu and timing questions, and confirms on WhatsApp while your staff serve guests.", moment: "Friday at 8 PM, the phone keeps ringing and no one can answer. Those tables stay empty.",
    capabilities: [{ title: "Reservations on your calendar", icon: CalendarCheck }, { title: "Menu, hours and location questions", icon: Info }, { title: "Special requests noted for the team", icon: Route }, { title: "WhatsApp confirmations", icon: MessageCircle }, { title: "Reminder calls before the booking", icon: Bell }, { title: "English and Hindi", icon: Languages }],
    step2: "Table sizes, timings, and the menu answers.", closing: ["Answer every call,", "fill every table."],
    lines: ["Can I book a table for four tomorrow at 8?", "Yes, I have a table for four at 8 PM. Indoors or on the terrace?", "The terrace, please. It's my mother's birthday.", "Lovely! The terrace for four at 8, and I've let the team know about the birthday.", "Perfect.", "I've sent the confirmation on WhatsApp. See you tomorrow!"], starts: [0.0, 2.91, 7.4, 10.5, 15.51, 16.94],
    scenarios: [
      { title: "Birthday table", src: '/calls/restaurants.m4a', caller: { name: "Nikhil Desai", number: '+91 98••• ••904', avatar: '/avatars/restaurants-1.svg' }, starts: [0.0, 2.91, 7.4, 10.5, 15.51, 16.94], lines: [{ who: "caller", text: "Can I book a table for four tomorrow at 8?" }, { who: "agent", text: "Yes, I have a table for four at 8 PM. Indoors or on the terrace?" }, { who: "caller", text: "The terrace, please. It's my mother's birthday." }, { who: "agent", text: "Lovely! The terrace for four at 8, and I've let the team know about the birthday." }, { who: "caller", text: "Perfect." }, { who: "agent", text: "I've sent the confirmation on WhatsApp. See you tomorrow!" }] },
      { title: "Menu question", src: '/calls/restaurants-2.m4a', caller: { name: "Pooja Bhat", number: '+91 98••• ••682', avatar: '/avatars/restaurants-2.svg' }, starts: [0.0, 2.12, 7.26, 9.71], lines: [{ who: "caller", text: "Do you have vegan options?" }, { who: "agent", text: "Yes, we have a vegan thali and three vegan mains. Would you like to book a table?" }, { who: "caller", text: "Yes, for two tonight at 9." }, { who: "agent", text: "Done, a table for two at 9 tonight. The confirmation is on WhatsApp." }] },
      { title: "Hindi caller", src: '/calls/restaurants-3.m4a', caller: { name: "Aditya Nair", number: '+91 98••• ••648', avatar: '/avatars/restaurants-3.svg' }, starts: [0.0, 2.44, 6.29, 7.9], lines: [{ who: "caller", text: "आज रात चार लोगों के लिए टेबल मिलेगी?" }, { who: "agent", text: "जी हाँ, रात साढ़े आठ बजे की टेबल खाली है। बुक कर दूँ?" }, { who: "caller", text: "हाँ, प्लीज़।" }, { who: "agent", text: "बुक हो गई। कन्फर्मेशन WhatsApp पर भेज दिया है।" }] },
    ],
  },
  {
    slug: 'government', name: "Public services", summary: "Citizen helplines and service information", icon: Building2,
    hero: ["Citizen helplines", "that always answer."], lede: "Yuviz answers common service questions, sends the right link by SMS and routes complex cases to the right department.", moment: "A citizen calls three times about a simple tax question and never gets through.",
    capabilities: [{ title: "Answers to common service questions", icon: Info }, { title: "Links and steps by SMS", icon: MessageSquareText }, { title: "Route to the right department", icon: Route }, { title: "Outbound notifications and reminders", icon: Bell }, { title: "English and Hindi", icon: Languages }, { title: "Every call logged with a summary", icon: FileText }],
    step2: "Services, documents, and which department handles what.", closing: ["Every citizen heard,", "first time."],
    lines: ["How do I renew my property tax?", "You can pay it on the municipal portal with your property ID. Do you have it handy?", "No, I can't find it.", "It's printed on last year's tax receipt, at the top right. Shall I send you the portal link by SMS?", "Yes, please.", "Done. You'll get the link in a moment."], starts: [0.0, 2.49, 7.22, 9.2, 15.37, 16.84],
    scenarios: [
      { title: "Property tax", src: '/calls/government.m4a', caller: { name: "Ritu Agarwal", number: '+91 98••• ••834', avatar: '/avatars/government-1.svg' }, starts: [0.0, 2.49, 7.22, 9.2, 15.37, 16.84], lines: [{ who: "caller", text: "How do I renew my property tax?" }, { who: "agent", text: "You can pay it on the municipal portal with your property ID. Do you have it handy?" }, { who: "caller", text: "No, I can't find it." }, { who: "agent", text: "It's printed on last year's tax receipt, at the top right. Shall I send you the portal link by SMS?" }, { who: "caller", text: "Yes, please." }, { who: "agent", text: "Done. You'll get the link in a moment." }] },
      { title: "Certificate status", src: '/calls/government-2.m4a', caller: { name: "Manish Gupta", number: '+91 98••• ••548', avatar: '/avatars/government-2.svg' }, starts: [0.0, 2.63, 8.61, 9.9], lines: [{ who: "caller", text: "How long does a birth certificate take?" }, { who: "agent", text: "Usually about seven working days after you apply. Would you like the application link by SMS?" }, { who: "caller", text: "Yes." }, { who: "agent", text: "Sent. You can track the status on the same page." }] },
      { title: "Hindi caller", src: '/calls/government-3.m4a', caller: { name: "Divya Saxena", number: '+91 98••• ••347', avatar: '/avatars/government-3.svg' }, starts: [0.0, 2.26, 6.29, 8.13], lines: [{ who: "caller", text: "पानी का बिल कहाँ भर सकते हैं?" }, { who: "agent", text: "आप नगर निगम के पोर्टल पर ऑनलाइन भर सकते हैं। लिंक SMS कर दूँ?" }, { who: "caller", text: "हाँ, भेज दीजिए।" }, { who: "agent", text: "भेज दिया। कुछ और जानकारी चाहिए तो बताइए।" }] },
    ],
  },
  {
    slug: 'sales', name: "Sales", summary: "Qualify leads and book demos", icon: MessageSquareText,
    hero: ["Qualify every lead", "while it's still warm."], lede: "Yuviz calls back new leads, asks your qualifying questions, logs the answers and books the demo.", moment: "A lead fills in your form at lunch. Your team calls back the next day, and they've already signed with someone else.",
    capabilities: [{ title: "Call new leads back from a list", icon: PhoneOutgoing }, { title: "Ask the same qualifying questions every time", icon: UserCheck }, { title: "Log answers to Google Sheets", icon: Table2 }, { title: "Look up the caller in Salesforce, HubSpot or Zoho", icon: Search }, { title: "Book demos on your calendar", icon: CalendarCheck }, { title: "English and Hindi", icon: Languages }],
    step2: "Your qualifying questions and what counts as a hot lead.", closing: ["More conversations,", "more demos booked."],
    lines: ["I'd like to know more about your pricing.", "Happy to help. Roughly how many calls does your team take a month?", "About two thousand.", "Got it. Are those mostly inbound questions, or outbound follow-ups?", "Mostly inbound.", "Great. I'll book you a fifteen-minute demo with our team. Does tomorrow at 11 work?"], starts: [0.0, 2.4, 6.47, 8.27, 12.49, 14.1],
    scenarios: [
      { title: "Pricing enquiry", src: '/calls/sales.m4a', caller: { name: "Rajesh Iyer", number: '+91 98••• ••655', avatar: '/avatars/sales-1.svg' }, starts: [0.0, 2.4, 6.47, 8.27, 12.49, 14.1], lines: [{ who: "caller", text: "I'd like to know more about your pricing." }, { who: "agent", text: "Happy to help. Roughly how many calls does your team take a month?" }, { who: "caller", text: "About two thousand." }, { who: "agent", text: "Got it. Are those mostly inbound questions, or outbound follow-ups?" }, { who: "caller", text: "Mostly inbound." }, { who: "agent", text: "Great. I'll book you a fifteen-minute demo with our team. Does tomorrow at 11 work?" }] },
      { title: "Outbound callback", src: '/calls/sales-2.m4a', caller: { name: "Siddharth Jain", number: '+91 98••• ••861', avatar: '/avatars/sales-2.svg' }, starts: [0.0, 5.18, 6.75, 10.32, 12.12], lines: [{ who: "agent", text: "Hi, this is Sarah from Yuviz. You asked about a demo this morning. Is now a good time?" }, { who: "caller", text: "Yes, go ahead." }, { who: "agent", text: "Great. How many calls does your team handle each month?" }, { who: "caller", text: "Around five hundred." }, { who: "agent", text: "Thanks. I've booked you a demo tomorrow at 11 and logged your answers for the team." }] },
      { title: "Hindi caller", src: '/calls/sales-3.m4a', caller: { name: "Neha Kulkarni", number: '+91 98••• ••710', avatar: '/avatars/sales-3.svg' }, starts: [0.0, 2.63, 6.05, 7.99], lines: [{ who: "caller", text: "आपकी प्राइसिंग के बारे में जानना था।" }, { who: "agent", text: "ज़रूर। आपकी टीम हर महीने कितनी कॉल्स लेती है?" }, { who: "caller", text: "करीब एक हज़ार।" }, { who: "agent", text: "धन्यवाद। मैं आपके लिए कल सुबह ग्यारह बजे डेमो बुक कर देती हूँ।" }] },
    ],
  },
  {
    slug: 'hr-hiring', name: "HR & hiring", summary: "Candidate screening and interview scheduling", icon: Users,
    hero: ["Screen every candidate", "without the phone tag."], lede: "Yuviz answers applicant questions, runs your screening questions and schedules the interview.", moment: "Two hundred applicants, one recruiter, and a week of calls before the first interview is even booked.",
    capabilities: [{ title: "Applicant questions answered", icon: Info }, { title: "The same screening questions for every candidate", icon: UserCheck }, { title: "Interviews scheduled on your calendar", icon: CalendarCheck }, { title: "Reminder calls and WhatsApp details", icon: MessageCircle }, { title: "English and Hindi", icon: Languages }, { title: "Every call summarised for the recruiter", icon: FileText }],
    step2: "Your screening questions and interview slots.", closing: ["Hire faster,", "without the phone tag."],
    lines: ["I applied for the support role. What happens next?", "Thanks for applying! May I have your name?", "Priya Shah.", "Thanks, Priya. The next step is a short screening call. Would Thursday at 2 work?", "Thursday's fine.", "You're booked for Thursday at 2. I've sent the details on WhatsApp."], starts: [0.0, 3.93, 6.33, 7.99, 13.23, 14.94],
    scenarios: [
      { title: "Next steps", src: '/calls/hr-hiring.m4a', caller: { name: "Priya Shah", number: '+91 98••• ••963', avatar: '/avatars/hr-hiring-1.svg' }, starts: [0.0, 3.93, 6.33, 7.99, 13.23, 14.94], lines: [{ who: "caller", text: "I applied for the support role. What happens next?" }, { who: "agent", text: "Thanks for applying! May I have your name?" }, { who: "caller", text: "Priya Shah." }, { who: "agent", text: "Thanks, Priya. The next step is a short screening call. Would Thursday at 2 work?" }, { who: "caller", text: "Thursday's fine." }, { who: "agent", text: "You're booked for Thursday at 2. I've sent the details on WhatsApp." }] },
      { title: "Screening call", src: '/calls/hr-hiring-2.m4a', caller: { name: "Priya Shah", number: '+91 98••• ••242', avatar: '/avatars/hr-hiring-2.svg' }, starts: [0.0, 4.44, 5.64, 8.37, 10.21], lines: [{ who: "agent", text: "Hi Priya, this is Sarah calling about your application. Do you have two minutes?" }, { who: "caller", text: "Sure." }, { who: "agent", text: "Are you comfortable with rotating shifts?" }, { who: "caller", text: "Yes, that's fine." }, { who: "agent", text: "Great. I've booked your interview for Thursday at 2 and sent the details on WhatsApp." }] },
      { title: "Hindi caller", src: '/calls/hr-hiring-3.m4a', caller: { name: "Ravi Sharma", number: '+91 98••• ••501', avatar: '/avatars/hr-hiring-3.svg' }, starts: [0.0, 2.4, 4.29, 5.81], lines: [{ who: "caller", text: "सपोर्ट रोल के लिए इंटरव्यू कब होगा?" }, { who: "agent", text: "आपका नाम बताएँगे?" }, { who: "caller", text: "रवि शर्मा।" }, { who: "agent", text: "धन्यवाद रवि। आपका इंटरव्यू गुरुवार दोपहर दो बजे तय हो गया है।" }] },
    ],
  },
]

const STEPS = [
  { title: 'Connect your number.', text: 'Bring your Vobiz, Cloudonix, Twilio or Plivo number, or your SIP trunk.' },
  { title: 'Set the questions.', text: '' },
  { title: 'Test from your browser.', text: 'Call your agent before any customer does.' },
  { title: 'Go live.', text: 'Inbound and outbound, with a person one transfer away.' },
]

const bySlug = (slug: string) => {
  const useCase = USE_CASES.find(u => u.slug === slug)
  if (!useCase) throw new Error(`Unknown use case: ${slug}`)
  return useCase
}

export function useCaseMetadata(slug: string): Metadata {
  const { name, hero, lede } = bySlug(slug)
  return { title: `${name}: ${hero[0]} ${hero[1]} | Yuviz.ai`, description: lede }
}

export function UseCasePageTemplate({ slug }: { slug: string }) {
  const { name, hero, lede, moment, capabilities, step2, closing, scenarios } = bySlug(slug)
  return <main className="story-site story-subpage story-uc">
    <section className="story-subpage-hero"><div className="story-container">
      <nav className="story-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/use-cases">Use cases</Link><span>/</span><span>{name}</span></nav>
      <span className="story-kicker">{name.toUpperCase()}</span>
      <h1>{hero[0]}<br/><em>{hero[1]}</em></h1>
      <p>{lede}</p>
      <div className="story-actions">
        <Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link>
        <a href="#calls" className="story-button story-button-quiet"><PhoneCall size={16}/> Hear a call</a>
      </div>
    </div></section>

    <section className="story-container story-uc-moment">
      <span className="story-kicker">THE MOMENT IT COSTS YOU</span>
      <p>{moment}</p>
    </section>

    <section id="calls" className="story-container story-case-dialogue">
      <div><span className="story-kicker">HEAR IT HANDLE THE CALL</span><h2>Three calls,<br/><em>one agent.</em></h2></div>
      <ScenarioCallPlayer scenarios={scenarios}/>
    </section>

    <section className="story-container story-uc-block">
      <span className="story-kicker">ON EVERY CALL</span>
      <div className="story-uc-caps">{capabilities.map(({ title, icon: Icon }) => <article key={title}><span className="story-uc-cap-icon"><Icon size={20} aria-hidden="true"/></span><h2>{title}</h2></article>)}</div>
    </section>

    <section className="story-container story-uc-block">
      <span className="story-kicker">LIVE IN DAYS</span>
      <ol className="story-uc-steps">{STEPS.map((step, i) => <li key={step.title}><span>{i + 1}</span><div><h3>{step.title}</h3><p>{i === 1 ? step2 : step.text}</p></div></li>)}</ol>
    </section>

    <section className="story-container story-uc-cta"><div><h2>{closing[0]} <em>{closing[1]}</em></h2></div><div className="story-case-actions"><Link href="/use-cases" className="story-text-link">All industries <ArrowRight size={14}/></Link><Link href="/contact" className="story-button story-button-primary">Book a demo <ArrowRight size={16}/></Link></div></section>
  </main>
}

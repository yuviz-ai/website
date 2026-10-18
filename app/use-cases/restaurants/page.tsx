'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { Utensils, Calendar, Clock, ShoppingBag, PhoneIncoming, Heart, MapPin, Sparkles } from 'lucide-react'

export default function RestaurantsUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="Restaurant & Hospitality AI"
      industryName="Restaurants"
      title="Zero Missed Table Orders & Reservations"
      highlightTitle="Reservations & Takeout"
      subtitle="Answer 100% of phone calls during busy dinner rushes. Yuviz AI books table reservations, takes phone orders with POS menu integration, and handles party inquiries effortlessly."
      icon={Utensils}
      stats={[
        { label: 'Rush Hour Call Intake', value: '100% Answered' },
        { label: 'POS & Menu Sync', value: 'Toast & Square' },
        { label: 'Table Booking Speed', value: '< 30 Secs' },
        { label: 'Phone Revenue Growth', value: '+35%' }
      ]}
      workflows={[
        {
          title: 'Automated Table Reservation',
          description: 'Reserve tables, check seating availability, manage party sizes, and note dietary preferences with OpenTable or Resy sync.',
          icon: Calendar,
          tag: 'OpenTable & Resy Sync'
        },
        {
          title: 'Phone Takeout & Order Placement',
          description: 'Take detailed food orders directly from your POS menu, customize order toppings/sides, and send SMS payment links.',
          icon: ShoppingBag,
          tag: 'POS Integrated'
        },
        {
          title: 'Menu, Dietary & Allergen Q&A',
          description: 'Answer questions about gluten-free options, vegan dishes, parking, opening hours, and dress code seamlessly.',
          icon: Utensils,
          tag: 'Menu RAG Knowledge'
        },
        {
          title: 'Private Dining & Event Inquiries',
          description: 'Gather guest details for private events, catering packages, and large group bookings for manager follow-up.',
          icon: Sparkles,
          tag: 'Catering Intake'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Call routed to Bella Italia Bistro automated host desk during Friday 7 PM rush' },
        { speaker: 'Yuviz Restaurant Agent', role: 'agent', text: '“Grazie for calling Bella Italia Bistro! My name is Bella. Are you calling to book a table reservation or place a pickup order?”', timestamp: '00:02' },
        { speaker: 'Caller (Emma)', role: 'caller', text: '“Hi! I would like to book a table for a party of 4 this Saturday night around 7:30 PM.”', timestamp: '00:07' },
        { speaker: 'Yuviz Restaurant Agent', role: 'agent', text: '“I would love to help! Let me check Saturday’s book. I have a main dining room table available at 7:15 PM or 7:45 PM. Which time suits your party better?”', timestamp: '00:13' },
        { speaker: 'Caller (Emma)', role: 'caller', text: '“7:15 PM works great for us.”', timestamp: '00:17' },
        { speaker: 'Yuviz Restaurant Agent', role: 'agent', text: '“Wonderful! May I have your name, and are there any special occasions or dietary restrictions we should prepare for?”', timestamp: '00:22' },
        { speaker: 'Caller (Emma)', role: 'caller', text: '“My name is Emma, and one person in our group has a severe peanut allergy.”', timestamp: '00:27' },
        { speaker: 'Yuviz Restaurant Agent', role: 'agent', text: '“Noted Emma! I have reserved a 4-person table for Saturday at 7:15 PM with a priority allergy note for our kitchen staff. A confirmation SMS has just been sent!”', timestamp: '00:33' }
      ]}
      integrations={['OpenTable', 'Resy', 'SevenRooms', 'Toast POS', 'Square for Restaurants', 'Clover']}
      compliance={[
        'PCI-DSS Compliant Phone Payment Link Processing',
        'Direct POS Item Modifier & Special Request Mapping',
        'Multi-Location Routing & Regional Dialect Support',
        'Automated No-Show SMS Reminders & Cancellation Handling'
      ]}
      roiMetrics={[
        { value: '+35%', label: 'Phone Revenue Growth', desc: 'No missed food orders or table bookings during peak dinner rushes' },
        { value: '100%', label: 'Call Answer Rate', desc: 'Staff stays focused on guest hospitality instead of ringing phones' },
        { value: '< 30s', label: 'Average Booking Time', desc: 'Quick, friendly reservation confirmation' }
      ]}
    />
  )
}

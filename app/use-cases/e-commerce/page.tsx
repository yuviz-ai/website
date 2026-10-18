'use client'

import { UseCasePageTemplate } from '@/components/marketing/UseCasePageTemplate'
import { ShoppingCart, Truck, RotateCcw, PackageCheck, Zap, MessageSquare, Tag, PhoneOutgoing } from 'lucide-react'

export default function ECommerceUseCasePage() {
  return (
    <UseCasePageTemplate
      badge="E-Commerce AI Voice Automation"
      industryName="E-Commerce"
      title="Boost Sales & Automate Order Support"
      highlightTitle="Cart Recovery & Order Support"
      subtitle="Turn abandoned carts into completed checkouts and automate order tracking, return processing, and product inquiries across high-volume store calls."
      icon={ShoppingCart}
      stats={[
        { label: 'Cart Recovery Boost', value: '+24% Orders' },
        { label: 'WISMO Ticket Drop', value: '-65% Volume' },
        { label: 'Shopify / ERP Sync', value: 'Real-time' },
        { label: 'Resolution Rate', value: '88% Automated' }
      ]}
      workflows={[
        {
          title: 'Automated Cart Recovery Calls',
          description: 'Trigger subtle, helpful outbound calls with special discount codes to shoppers who abandoned high-value carts.',
          icon: ShoppingCart,
          tag: 'Revenue Recovery'
        },
        {
          title: 'Where Is My Order? (WISMO)',
          description: 'Provide instant real-time carrier tracking updates (FedEx, UPS, DHL) by lookup of order numbers or customer phone numbers.',
          icon: Truck,
          tag: 'Real-time Carrier Sync'
        },
        {
          title: 'Returns & Exchanges Processing',
          description: 'Initiate return labels, verify order eligibility, and generate QR return codes automatically over the phone.',
          icon: RotateCcw,
          tag: 'Self-Serve Returns'
        },
        {
          title: 'Product Recommendation & Sizing',
          description: 'Answer customer questions about stock availability, sizing charts, fabric care, and warranty info via vector RAG.',
          icon: Tag,
          tag: 'AI Recommendation'
        }
      ]}
      dialogue={[
        { speaker: 'SYSTEM', role: 'system', text: 'Inbound customer support call linked to Shopify Order #YK-90412' },
        { speaker: 'Yuviz Retail Voice Agent', role: 'agent', text: '“Hi there! Thanks for calling Luxe Apparel support. I notice you are calling regarding order YK-90412. Would you like to check the tracking status of your delivery?”', timestamp: '00:02' },
        { speaker: 'Caller (Jason)', role: 'caller', text: '“Yes! I ordered the leather jacket 3 days ago and wanted to know when it will arrive.”', timestamp: '00:07' },
        { speaker: 'Yuviz Retail Voice Agent', role: 'agent', text: '“I have great news Jason! Your package was scanned out for delivery with FedEx this morning at 7:30 AM. Estimated arrival is today before 5:00 PM.”', timestamp: '00:12' },
        { speaker: 'Caller (Jason)', role: 'caller', text: '“Awesome! Also, if it doesn’t fit, what is your return policy?”', timestamp: '00:18' },
        { speaker: 'Yuviz Retail Voice Agent', role: 'agent', text: '“We offer 30-day free returns! If you need a different size, just give us a call or tap the return link in your order SMS, and we will email you a prepaid return shipping label instantly.”', timestamp: '00:24' },
        { speaker: 'Caller (Jason)', role: 'caller', text: '“That was super easy, thanks so much!”', timestamp: '00:28' }
      ]}
      integrations={['Shopify & Shopify Plus', 'Klaviyo', 'Gorgias', 'Zendesk', 'ShipStation', 'WooCommerce']}
      compliance={[
        'TCPA Compliant Outbound Call Schedules & Consent Checks',
        'PCI-DSS Compliant IVR Payment Collection',
        'Global Carrier Integration (FedEx, UPS, DHL, USPS API)',
        'Multi-Currency & Order Intelligence Support'
      ]}
      roiMetrics={[
        { value: '+24%', label: 'Recovered Checkout Sales', desc: 'Outbound voice reminders convert high-intent abandoned carts' },
        { value: '-65%', label: 'WISMO Ticket Volume', desc: 'Instant status lookups prevent costly human support tickets' },
        { value: '3.2s', label: 'Order Lookup Speed', desc: 'Instant database lookup using phone caller ID' }
      ]}
    />
  )
}

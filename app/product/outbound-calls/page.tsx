import { ProductPageTemplate, productMetadata } from '@/components/marketing/ProductPageTemplate'

export const metadata = productMetadata('outbound-calls')

export default function OutboundCallsPage() {
  return <ProductPageTemplate slug="outbound-calls" />
}

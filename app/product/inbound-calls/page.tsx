import { ProductPageTemplate, productMetadata } from '@/components/marketing/ProductPageTemplate'

export const metadata = productMetadata('inbound-calls')

export default function InboundCallsPage() {
  return <ProductPageTemplate slug="inbound-calls" />
}

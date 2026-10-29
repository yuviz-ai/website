import { ProductPageTemplate, productMetadata } from '@/components/marketing/ProductPageTemplate'

export const metadata = productMetadata('agent-builder')

export default function AgentBuilderPage() {
  return <ProductPageTemplate slug="agent-builder" />
}

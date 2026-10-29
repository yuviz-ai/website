import { UseCasePageTemplate, useCaseMetadata } from '@/components/marketing/UseCasePageTemplate'

export const metadata = useCaseMetadata('e-commerce')

export default function ECommerceUseCasePage() {
  return <UseCasePageTemplate slug="e-commerce" />
}

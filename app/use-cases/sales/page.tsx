import { UseCasePageTemplate, useCaseMetadata } from '@/components/marketing/UseCasePageTemplate'

export const metadata = useCaseMetadata('sales')

export default function SalesUseCasePage() {
  return <UseCasePageTemplate slug="sales" />
}

import { UseCasePageTemplate, useCaseMetadata } from '@/components/marketing/UseCasePageTemplate'

export const metadata = useCaseMetadata('government')

export default function GovernmentUseCasePage() {
  return <UseCasePageTemplate slug="government" />
}

import { UseCasePageTemplate, useCaseMetadata } from '@/components/marketing/UseCasePageTemplate'

export const metadata = useCaseMetadata('healthcare')

export default function HealthcareUseCasePage() {
  return <UseCasePageTemplate slug="healthcare" />
}

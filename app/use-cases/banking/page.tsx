import { UseCasePageTemplate, useCaseMetadata } from '@/components/marketing/UseCasePageTemplate'

export const metadata = useCaseMetadata('banking')

export default function BankingUseCasePage() {
  return <UseCasePageTemplate slug="banking" />
}

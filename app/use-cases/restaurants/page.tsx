import { UseCasePageTemplate, useCaseMetadata } from '@/components/marketing/UseCasePageTemplate'

export const metadata = useCaseMetadata('restaurants')

export default function RestaurantsUseCasePage() {
  return <UseCasePageTemplate slug="restaurants" />
}

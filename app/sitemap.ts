import type { MetadataRoute } from 'next'

const baseUrl = 'https://yuviz.ai'
const routes = [
  '', '/pricing', '/contact', '/use-cases',
  '/use-cases/real-estate', '/use-cases/banking', '/use-cases/healthcare',
  '/use-cases/e-commerce', '/use-cases/restaurants', '/use-cases/government',
  '/use-cases/sales', '/use-cases/hr-hiring',
  '/product/agent-builder', '/product/inbound-calls', '/product/outbound-calls',
  '/product/ivr-builder',
  '/resources/faq', '/resources/blog', '/resources/blog/voice-ai-platform-guide', '/resources/documentation', '/resources/api-integration',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' || route === '/pricing' ? 0.8 : 0.6,
  }))
}

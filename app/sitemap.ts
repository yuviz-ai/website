import type { MetadataRoute } from 'next'

const baseUrl = 'https://yuviz.ai'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/pricing',
    '/contact',
    '/use-cases',
    '/use-cases/banking',
    '/use-cases/e-commerce',
    '/use-cases/government',
    '/use-cases/healthcare',
    '/use-cases/hr-hiring',
    '/use-cases/real-estate',
    '/use-cases/restaurants',
    '/use-cases/sales',
    '/product/agent-builder',
    '/product/api-webhooks',
    '/product/call-analytics',
    '/product/enterprise-deployment',
    '/product/inbound-calls',
    '/product/ivr-builder',
    '/product/knowledge-base',
    '/product/outbound-calls',
    '/resources/api-integration',
    '/resources/blog',
    '/resources/blog/voice-ai-platform-guide',
    '/resources/documentation',
    '/resources/faq',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/contact' || route === '/pricing' ? 0.8 : 0.6,
  }))
}

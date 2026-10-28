import Link from 'next/link'
import { ArrowRight, ArrowUpRight, Sparkles, Zap } from 'lucide-react'

export interface FeatureItem {
  title: string
  description: string
  icon?: React.ElementType
  tag?: string
}

export interface ProductPageProps {
  badge: string
  title: string
  highlightTitle?: string
  subtitle: string
  features: FeatureItem[]
  specsTitle?: string
  specs?: { label: string; value: string }[]
  codeSnippet?: string
  benefitsTitle?: string
  benefits?: string[]
  ctaTitle?: string
  ctaDescription?: string
}

export function ProductPageTemplate({
  badge,
  title,
  highlightTitle,
  subtitle,
  features,
  ctaTitle = 'Explore this workflow with Yuviz',
  ctaDescription = 'Share your requirements and we can discuss what is available today, what needs configuration, and what would require additional implementation.',
}: ProductPageProps) {
  return (
    <main className="pricing-page">
      <section className="container-new pt-2 pb-14">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow-new"><span className="eyebrow-dot" />{badge}</span>
          <h1 className="mt-5 font-[Manrope] text-4xl sm:text-6xl font-extrabold tracking-[-0.055em] leading-[1.08] text-[#F3F4FC]">
            {title} {highlightTitle && <span className="gradient-text">{highlightTitle}</span>}
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-8 text-[#9CA6C2] max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <Link href="/contact" className="button-primary">Discuss your workflow <ArrowRight size={16} /></Link>
            <Link href="/#platform" className="button-secondary">Explore the platform <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container-new pb-14">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
          <div>
            <span className="eyebrow-new"><span className="eyebrow-dot" /> Product area</span>
            <h2 className="mt-3 font-[Manrope] text-2xl sm:text-3xl font-bold tracking-tight text-[#F3F4FC]">What this workflow involves</h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm leading-7 text-[#8994B2]">The items below describe capabilities or design directions to discuss, not a guarantee that every feature or integration is enabled in every deployment.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => {
            const Icon = feature.icon || Zap
            return <article key={idx} className="capability-card">
              <div className="capability-card-top"><span className="capability-icon"><Icon size={20} /></span><span className="capability-number">0{idx + 1}</span></div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {feature.tag && <div className="capability-tags"><span>{feature.tag}</span></div>}
            </article>
          })}
        </div>
      </section>

      <section className="container-new pb-16">
        <div className="contact-card max-w-4xl mx-auto flex flex-col sm:flex-row gap-5 sm:items-center">
          <span className="brand-mark shrink-0"><Sparkles size={20} /></span>
          <div className="flex-1">
            <h2>{ctaTitle}</h2>
            <p className="!m-0">{ctaDescription}</p>
          </div>
          <Link href="/contact" className="button-primary shrink-0">Talk to our team <ArrowRight size={16} /></Link>
        </div>
      </section>
    </main>
  )
}

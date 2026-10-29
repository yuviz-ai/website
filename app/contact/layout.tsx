import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a demo | Yuviz.ai',
  description: 'Who calls you, what they need, and what should happen next. We’ll show you an agent handling it.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

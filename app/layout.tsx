import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { RedesignNavbar, RedesignFooter } from '@/components/marketing/RedesignShell'

export const metadata: Metadata = {
  metadataBase: new URL('https://yuviz.ai'),
  alternates: { canonical: '/' },
  title: {
    default: 'Yuviz.ai — Turn Conversations Into Outcomes',
    template: '%s | Yuviz.ai',
  },
  description: 'Yuviz.ai is building a voice AI platform for configuring voice agents around customer conversations, business knowledge, and call workflows. Explore the approach, current design concepts, and discuss your use case.',
  applicationName: 'Yuviz.ai',
  keywords: ['voice AI', 'AI voice agents', 'conversational AI', 'voice automation', 'telephony platform'],
  icons: {
    icon: [
      { url: '/yuviz-logo.jpg' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/yuviz-logo.jpg',
  },
  openGraph: {
    title: 'Yuviz.ai — Turn Conversations Into Outcomes',
    description: 'Explore Yuviz.ai, a voice AI platform in active development focused on customer conversations, business context, and call workflows.',
    type: 'website',
    url: 'https://yuviz.ai',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yuviz.ai — Turn Conversations Into Outcomes',
    description: 'Yuviz.ai is building configurable voice-agent experiences around customer conversations, business knowledge, and call workflows.',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#080B16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#080B16] scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[#080B16] text-[#F3F4FC] font-sans">
        <RedesignNavbar />
        <div className="flex-1">{children}</div>
        <RedesignFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/LiveDemo'

export const metadata: Metadata = {
  metadataBase: new URL('https://yuviz.ai'),
  title: 'Yuviz.ai | Voice AI for Real Customer Conversations',
  description: 'Build voice-agent experiences around customer conversations, business context, telephony, and clear next steps. Explore Yuviz.ai and discuss your workflow.',
  openGraph: {
    title: 'Yuviz.ai | Voice AI for Real Customer Conversations',
    description: 'Voice-agent experiences designed around customer conversations, business context, and clear next steps.',
    type: 'website',
    url: 'https://yuviz.ai',
  },
  icons: {
    icon: [
      {
        url: '/yuviz-logo.jpg',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/yuviz-logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090D19',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#090D19] scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[#090D19] text-[#F3F5FF] font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

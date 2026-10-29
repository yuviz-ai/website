import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/Footer'

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
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
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

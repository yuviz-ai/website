import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Navbar } from '@/components/marketing/Navbar'
import { Footer } from '@/components/marketing/LiveDemo'

export const metadata: Metadata = {
  title: 'Yuviz — Autonomous Voice Agents for Real Business Action',
  description: 'Autonomous voice agents that answer calls on ring zero, understand natural human dialogue, and execute business workflows directly into your CRM — 24/7.',
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
  colorScheme: 'light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF7F2' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-[#FAF7F2] scroll-smooth">
      <body className="antialiased flex flex-col min-h-screen bg-[#FAF7F2] text-[#221A1E] font-sans">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

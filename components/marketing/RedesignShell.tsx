'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, X, AudioLines } from 'lucide-react'

const navItems = [
  { label: 'Platform', href: '/#platform' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'Use cases', href: '/#use-cases' },
  { label: 'Architecture', href: '/#architecture' },
]

export function RedesignNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="site-nav-wrap">
        <Link href="/" className="brand" aria-label="Yuviz.ai home" onClick={() => setOpen(false)}>
          <span className="brand-mark"><AudioLines size={20} strokeWidth={2.2} /></span>
          <span className="brand-name">yuviz<span>.ai</span></span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href}>{item.label}</Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          Talk to our team <ArrowRight size={15} />
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} className="mobile-nav-cta">Talk to our team <ArrowRight size={15} /></Link>
        </nav>
      )}
    </header>
  )
}

export function RedesignFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="brand" aria-label="Yuviz.ai home">
            <span className="brand-mark"><AudioLines size={20} strokeWidth={2.2} /></span>
            <span className="brand-name">yuviz<span>.ai</span></span>
          </Link>
          <p>Voice conversations, designed to move work forward.</p>
        </div>
        <div className="footer-links">
          <span className="footer-label">Explore</span>
          <Link href="/#platform">Platform</Link>
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#use-cases">Use cases</Link>
        </div>
        <div className="footer-links">
          <span className="footer-label">Connect</span>
          <Link href="/contact">Talk to our team</Link>
          <a href="mailto:hello@yuviz.ai">hello@yuviz.ai</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Yuviz.ai</span>
        <span>Built around real conversations.</span>
      </div>
    </footer>
  )
}

'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'Product', href: '#product' },
  { label: 'Why Voice', href: '#why-voice' },
  { label: 'Agents', href: '#agents' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'Demo', href: '#demo' },
]

export function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5 font-semibold tracking-[-0.04em] text-lg text-foreground">
      <span className="logo-mark">
        <span />
      </span>
      yuviz ai
    </a>
  )
}

export function Button({
  children,
  variant = 'lime',
  href = '#demo',
  onClick,
  className = '',
}: {
  children: React.ReactNode
  variant?: 'lime' | 'quiet'
  href?: string
  onClick?: () => void
  className?: string
}) {
  return (
    <a
      onClick={onClick}
      href={href}
      className={`button-shell inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-all ${
        variant === 'lime' ? 'button-primary' : 'button-secondary'
      } ${className}`}
    >
      <span className="button-label">{children}</span>
    </a>
  )
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`site-nav transition-all duration-300 ${
        scrolled ? 'shadow-sm border-b border-line/80 backdrop-blur-xl' : ''
      }`}
    >
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link font-medium hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a href="#demo" className="nav-link font-medium">
            Log in
          </a>
          <Button href="#demo">
            Talk to Yuviz <ArrowRight size={15} />
          </Button>
        </div>

        <button
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2 focus:outline-none"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mobile-menu md:hidden border-b border-line"
          >
            {navItems.map((item) => (
              <a
                onClick={() => setMenuOpen(false)}
                href={item.href}
                key={item.label}
                className="text-lg font-medium text-foreground py-2 border-b border-line/40"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4">
              <a href="#demo" className="text-center py-2 text-sm text-muted font-medium">
                Log in
              </a>
              <Button onClick={() => setMenuOpen(false)} href="#demo">
                Talk to Yuviz <ArrowRight size={15} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

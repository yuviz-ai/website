'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Bot,
  PhoneIncoming,
  PhoneOutgoing,
  Database,
  BarChart3,
  Webhook,
  GitBranch,
  FileText,
  HelpCircle,
  Code2,
  Sparkles,
  Headphones,
  ShieldCheck,
  Zap,
  Home,
  CreditCard,
  Heart,
  ShoppingCart,
  Utensils,
  Landmark,
  TrendingUp,
  UserPlus,
  ArrowRight,
  PhoneCall
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Custom Logo Component based on User's provided 'Y' wishbone mark
export function YuvizLogoIcon({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer dark chocolate brown rounded stroke outline */}
      <path
        d="M26 36C26 28 32 22 40 22C44 22 47 24 50 27C53 24 56 22 60 22C68 22 74 28 74 36C74 44 68 53 58 64V76C58 80.4 54.4 84 50 84C45.6 84 42 80.4 42 76V64C32 53 26 44 26 36Z"
        fill="#3E2B25"
      />
      {/* Inner cream background gap */}
      <path
        d="M32 36C32 31 35.5 27 40.5 27C43.5 27 46.5 29 50 32C53.5 29 56.5 27 59.5 27C64.5 27 68 31 68 36C68 42.5 62.5 50.5 54 60V76C54 78.2 52.2 80 50 80C47.8 80 46 78.2 46 76V60C37.5 50.5 32 42.5 32 36Z"
        fill="#FAF7F2"
      />
      {/* Terracotta/rust core wishbone Y */}
      <path
        d="M37 36C37 33.5 39 31.5 41.5 31.5C43 31.5 45 32.5 47 34.5L50 38L53 34.5C55 32.5 57 31.5 58.5 31.5C61 31.5 63 33.5 63 36C63 41 57.5 48 53 53.5V74C53 75.7 51.7 77 50 77C48.3 77 47 75.7 47 74V53.5C42.5 48 37 41 37 36Z"
        fill="#B85D3B"
      />
    </svg>
  )
}

export function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 group shrink-0 ${className}`}>
      <div className="w-7 h-7 relative rounded-full overflow-hidden flex items-center justify-center bg-[#FAF6EE] shadow-2xs group-hover:scale-105 transition-transform duration-200">
        {/* Render crisp raster with vector fallback */}
        <img
          src="/yuviz-logo.jpg"
          alt="Yuviz"
          className="w-full h-full object-contain mix-blend-multiply"
          onError={(e) => {
            // fallback if image fails
            e.currentTarget.style.display = 'none'
          }}
        />
        <YuvizLogoIcon className="w-5 h-5 absolute inset-0 m-auto pointer-events-none opacity-0 group-hover:opacity-0" />
      </div>
      <span className="font-bold text-base md:text-lg tracking-tight text-[#221A1E]">
        Yuviz
      </span>
    </Link>
  )
}

// 8 Use cases matching Orato
const useCasesMenu = [
  {
    title: 'Real Estate',
    desc: 'Qualify leads & schedule viewings',
    href: '/use-cases/real-estate',
    icon: Home,
  },
  {
    title: 'Banking',
    desc: 'Card activations, EMI & KYC',
    href: '/use-cases/banking',
    icon: CreditCard,
  },
  {
    title: 'Healthcare',
    desc: 'Reminders, refills & triage',
    href: '/use-cases/healthcare',
    icon: Heart,
  },
  {
    title: 'E-Commerce',
    desc: 'Cart recovery & order support',
    href: '/use-cases/e-commerce',
    icon: ShoppingCart,
  },
  {
    title: 'Restaurants',
    desc: 'Reservations & takeout',
    href: '/use-cases/restaurants',
    icon: Utensils,
  },
  {
    title: 'Government',
    desc: 'Citizen helplines & enrollments',
    href: '/use-cases/government',
    icon: Landmark,
  },
  {
    title: 'Sales',
    desc: 'Outbound prospecting & demos',
    href: '/use-cases/sales',
    icon: TrendingUp,
  },
  {
    title: 'HR & Hiring',
    desc: 'Screens & interview scheduling',
    href: '/use-cases/hr-hiring',
    icon: UserPlus,
  },
]

// Resources menu
const resourcesMenu = [
  {
    title: 'FAQ',
    desc: 'Pricing, setup, security, and how Yuviz works',
    href: '/resources/faq',
    icon: HelpCircle,
  },
  {
    title: 'Blog',
    desc: 'Voice AI insights and architecture updates',
    href: '/resources/blog',
    icon: FileText,
  },
  {
    title: 'API Integration',
    desc: 'Guides for connecting Twilio, Salesforce & HubSpot',
    href: '/resources/api-integration',
    icon: Code2,
  },
  {
    title: 'Documentation',
    desc: 'Developer quickstarts & SDK reference',
    href: '/resources/documentation',
    icon: Sparkles,
  },
]

export function Button({
  children,
  variant = 'lime',
  href = '/contact',
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
    <Link
      onClick={onClick}
      href={href}
      className={`${
        variant === 'lime' ? 'btn-pill-primary' : 'btn-pill-secondary'
      } px-5 py-2.5 text-xs md:text-sm ${className}`}
    >
      {children}
    </Link>
  )
}

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const pathname = usePathname()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setActiveDropdown(null)
    setMobileMenuOpen(false)
  }, [pathname])

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(name)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 180)
  }

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion(mobileAccordion === name ? null : name)
  }

  return (
    <>
      {/* Floating Center Dock Header */}
      <header className="fixed top-3 md:top-5 inset-x-0 z-50 pointer-events-none transition-all duration-300">
        <div className="container relative flex items-center justify-center">
          
          {/* Centered Curved Pill Dock (Exact Orato Style with Logo Inside) */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full nav-pill-dock pointer-events-auto transition-all">
            
            {/* Logo inside the curved pill dock */}
            <div className="pl-1 pr-3 py-1 border-r border-[#E8DFD4]/70">
              <Logo />
            </div>

            {/* Navigation Links inside the pill */}
            <div className="flex items-center gap-0.5 px-1">
              
              {/* Use Cases Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('usecases')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === 'usecases'}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-colors cursor-pointer ${
                    activeDropdown === 'usecases' || pathname.startsWith('/use-cases')
                      ? 'text-[#B85D3B] bg-[#F7EEE7] font-semibold'
                      : 'text-[#635952] hover:text-[#221A1E]'
                  }`}
                >
                  Use Cases
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 opacity-60 ${
                      activeDropdown === 'usecases' ? 'rotate-180 text-[#B85D3B]' : ''
                    }`}
                  />
                </button>

                {/* Use Cases Mega Menu Panel */}
                <AnimatePresence>
                  {activeDropdown === 'usecases' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[620px] bg-white border border-[#E8DFD4] rounded-2xl shadow-xl p-5 z-50 overflow-hidden"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#F4EBE2]">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#796F68] font-semibold">
                          Industry Voice Solutions
                        </span>
                        <Link
                          href="/use-cases/real-estate"
                          className="text-[11px] font-semibold text-[#B85D3B] hover:underline flex items-center gap-1"
                        >
                          Explore all industries <ArrowRight size={11} />
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {useCasesMenu.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#F7EEE7] flex items-center justify-center text-[#B85D3B] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                                <Icon size={16} />
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-[#221A1E] group-hover:text-[#B85D3B] transition-colors">
                                  {item.title}
                                </p>
                                <p className="text-[11px] text-[#796F68] line-clamp-1 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter('resources')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  aria-expanded={activeDropdown === 'resources'}
                  className={`flex items-center gap-1 px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-colors cursor-pointer ${
                    activeDropdown === 'resources' || pathname.startsWith('/resources')
                      ? 'text-[#B85D3B] bg-[#F7EEE7] font-semibold'
                      : 'text-[#635952] hover:text-[#221A1E]'
                  }`}
                >
                  Resources
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 opacity-60 ${
                      activeDropdown === 'resources' ? 'rotate-180 text-[#B85D3B]' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.16, ease: 'easeOut' }}
                      className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[460px] bg-white border border-[#E8DFD4] rounded-2xl shadow-xl p-4 z-50 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 gap-1.5">
                        {resourcesMenu.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF7F2] transition-colors"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#F7EEE7] flex items-center justify-center text-[#B85D3B] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                                <Icon size={16} />
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-[#221A1E] group-hover:text-[#B85D3B] transition-colors">
                                  {item.title}
                                </p>
                                <p className="text-[11px] text-[#796F68] leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing Link */}
              <Link
                href="/pricing"
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-colors ${
                  pathname === '/pricing'
                    ? 'text-[#B85D3B] font-semibold'
                    : 'text-[#635952] hover:text-[#221A1E]'
                }`}
              >
                Pricing
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-colors ${
                  pathname === '/contact'
                    ? 'text-[#B85D3B] font-semibold'
                    : 'text-[#635952] hover:text-[#221A1E]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* In-pill CTA Button: Book a demo */}
            <div className="pl-1">
              <Link
                href="/contact"
                className="btn-pill-primary px-4 py-1.5 text-xs font-semibold whitespace-nowrap"
              >
                Book a demo
              </Link>
            </div>
          </div>

          {/* Floating Login Pill on Top Right (Exact Orato Style) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium text-[#221A1E] bg-white/85 hover:bg-white border border-[#E8DFD4] shadow-2xs hover:shadow-sm transition-all"
            >
              Login
            </Link>
          </div>

          {/* Mobile Header Capsule (Smooth & Easy for Mobile Users) */}
          <div className="flex lg:hidden items-center justify-between w-full max-w-md px-3.5 py-2 rounded-full nav-pill-dock pointer-events-auto">
            <Logo />
            
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="btn-pill-primary px-3 py-1 text-xs font-semibold"
              >
                Book demo
              </Link>
              
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-1.5 rounded-full text-[#221A1E] hover:bg-[#F4EBE2] transition-colors"
                aria-label="Open mobile navigation"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>

        </div>
      </header>

      {/* Mobile Drawer (Super Smooth & Easy for Mobile Users) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="absolute inset-0 bg-[#221A1E]/30 backdrop-blur-sm"
            />

            {/* Slide-over Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-[86%] max-w-sm bg-[#FAF7F2] border-l border-[#E8DFD4] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD4]">
                  <Logo />
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-full bg-white border border-[#E8DFD4] text-[#221A1E] hover:bg-[#F4EBE2] transition-colors"
                    aria-label="Close navigation"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Mobile Navigation List */}
                <nav className="mt-6 flex flex-col gap-1.5">
                  {/* Use Cases Accordion */}
                  <div className="border-b border-[#E8DFD4]/70 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion('usecases')}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-[#221A1E] text-left"
                    >
                      <span>Use Cases</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 text-[#796F68] ${
                          mobileAccordion === 'usecases' ? 'rotate-180 text-[#B85D3B]' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'usecases' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-2 pt-1 pb-2 flex flex-col gap-2"
                        >
                          {useCasesMenu.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 text-xs text-[#635952] hover:text-[#B85D3B]"
                              >
                                <Icon size={14} className="text-[#B85D3B]" />
                                <span>{item.title}</span>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Resources Accordion */}
                  <div className="border-b border-[#E8DFD4]/70 pb-2">
                    <button
                      onClick={() => toggleMobileAccordion('resources')}
                      className="flex items-center justify-between w-full py-2.5 text-sm font-semibold text-[#221A1E] text-left"
                    >
                      <span>Resources</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-200 text-[#796F68] ${
                          mobileAccordion === 'resources' ? 'rotate-180 text-[#B85D3B]' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {mobileAccordion === 'resources' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden pl-2 pt-1 pb-2 flex flex-col gap-2"
                        >
                          {resourcesMenu.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 py-1.5 text-xs text-[#635952] hover:text-[#B85D3B]"
                              >
                                <Icon size={14} className="text-[#B85D3B]" />
                                <span>{item.title}</span>
                              </Link>
                            )
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <Link
                    href="/pricing"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-sm font-semibold text-[#221A1E] hover:text-[#B85D3B] border-b border-[#E8DFD4]/70"
                  >
                    Pricing
                  </Link>

                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-sm font-semibold text-[#221A1E] hover:text-[#B85D3B] border-b border-[#E8DFD4]/70"
                  >
                    Contact
                  </Link>
                </nav>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-[#E8DFD4] flex flex-col gap-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pill-primary w-full py-3 text-sm font-semibold justify-center"
                >
                  Book a demo
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-pill-secondary w-full py-2.5 text-xs font-medium justify-center text-center"
                >
                  Sign In / Customer Portal
                </Link>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

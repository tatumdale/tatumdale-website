'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  design: 'bold' | 'clean' | 'dark'
}

export default function Navigation({ design }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'PMOS Workspace', href: 'https://www.pmosworkspace.com/', external: true },
    { label: 'About', href: '#about', external: false },
    { label: 'Services', href: '#services', external: false },
    { label: 'Case Studies', href: '#casestudies', external: false },
    { label: 'Contact', href: '#contact', external: false },
  ]

  const baseStyles = 'fixed top-0 left-0 right-0 z-40 transition-all duration-300'

  const linkProps = (link: typeof navLinks[0]) =>
    link.external ? { target: '_blank' as const, rel: 'noopener noreferrer' } : {}

  if (design === 'bold') {
    return (
      <nav className={`${baseStyles} ${scrolled ? 'bg-[#01285C]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/assets/logos/logo-light.png" alt="Tatumdale" className="h-10" />
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  {...linkProps(link)}
                  className="text-white/80 hover:text-white text-sm font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F02878] transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="hidden md:inline-flex px-5 py-2.5 bg-[#F02878] text-white rounded-lg font-medium hover:bg-[#d01f5f] transition-colors">
              Book a Call
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden pt-4 pb-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  {...linkProps(link)}
                  className="block py-3 text-white/80 hover:text-white text-sm font-medium"
                  onClick={() => !link.external && setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="mt-4 inline-flex px-5 py-2.5 bg-[#F02878] text-white rounded-lg font-medium">
                Book a Call
              </a>
            </div>
          )}
        </div>
      </nav>
    )
  }

  if (design === 'clean') {
    return (
      <nav className={`${baseStyles} ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src="/assets/logos/logo-dark.png" alt="Tatumdale" className="h-10" />
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  {...linkProps(link)}
                  className="text-[#01285C]/70 hover:text-[#01285C] text-sm font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F02878] hover:after:w-full after:transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="hidden md:inline-flex px-5 py-2.5 bg-[#01285C] text-white rounded-full font-medium hover:bg-[#01285C]/90 transition-colors">
              Book a Call
            </a>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-[#01285C] p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div className="md:hidden pt-4 pb-2">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  {...linkProps(link)}
                  className="block py-3 text-[#01285C]/70 hover:text-[#01285C] text-sm font-medium"
                  onClick={() => !link.external && setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="mt-4 inline-flex px-5 py-2.5 bg-[#01285C] text-white rounded-full font-medium">
                Book a Call
              </a>
            </div>
          )}
        </div>
      </nav>
    )
  }

  // Dark design
  return (
    <nav className={`${baseStyles} ${scrolled ? 'bg-[#01285C]/95 backdrop-blur-md shadow-lg' : 'bg-[#01285C]/50 backdrop-blur-sm'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <img src="/assets/logos/logo-light.png" alt="Tatumdale" className="h-10" />
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                {...linkProps(link)}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="hidden md:inline-flex px-5 py-2.5 bg-gradient-to-r from-[#F02878] to-[#ff5a9e] text-white rounded-lg font-medium hover:shadow-lg hover:shadow-[#F02878]/30 transition-shadow">
            Book a Call
          </a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                {...linkProps(link)}
                className="block py-3 text-white/70 hover:text-white text-sm font-medium"
                onClick={() => !link.external && setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="https://calendar.app.google/pA4Awi9UnE4PfhkC9" className="mt-4 inline-flex px-5 py-2.5 bg-gradient-to-r from-[#F02878] to-[#ff5a9e] text-white rounded-lg font-medium">
              Book a Call
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

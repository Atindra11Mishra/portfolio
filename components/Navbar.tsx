'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { RESUME_URL } from '@/lib/constants'

const navLinks = [
  { name: 'Home',       href: '#home',       id: 'home' },
  { name: 'About',      href: '#about',      id: 'about' },
  { name: 'Skills',     href: '#skills',     id: 'skills' },
  { name: 'Projects',   href: '#projects',   id: 'projects' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Contact',    href: '#contact',    id: 'contact' },
]


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -60% 0px' }
    )
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-neutral-950/80 supports-[backdrop-filter]:bg-neutral-950/70">
      {/* Top accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-white/[0.04]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <span className="w-7 h-7 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-sm font-black text-violet-300 group-hover:bg-violet-500/30 group-hover:shadow-lg group-hover:shadow-violet-500/20 transition-all duration-200">
              A
            </span>
            <div className="hidden sm:block">
              <p className="text-[11px] font-mono tracking-[0.18em] uppercase text-neutral-200 group-hover:text-white transition-colors leading-none">
                Atindra Mishra
              </p>
              <p className="text-[9px] font-mono tracking-[0.12em] uppercase text-violet-400/70 leading-none mt-0.5">
                AI Engineer
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[11px] font-mono uppercase tracking-[0.12em] transition-all duration-200 rounded-md ${
                    isActive
                      ? 'text-violet-300'
                      : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-400 shadow-sm shadow-violet-400/80" />
                  )}
                </a>
              )
            })}

            {/* Resume CTA */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.12em] text-violet-300 border border-violet-500/30 rounded-md bg-violet-500/10 hover:bg-violet-500/20 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/10 transition-all duration-200"
            >
              Resume ↗
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-neutral-400 hover:text-neutral-100 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/[0.05] space-y-0.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 text-[11px] font-mono uppercase tracking-[0.12em] rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-violet-300 bg-violet-500/10'
                      : 'text-neutral-500 hover:text-neutral-200 hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`text-[10px] ${isActive ? 'text-violet-400' : 'text-neutral-700'}`}>//</span>
                  {link.name}
                </a>
              )
            })}
            <div className="pt-3 px-3">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-4 py-2 text-[11px] font-mono uppercase tracking-[0.12em] text-violet-300 border border-violet-500/30 rounded-md bg-violet-500/10 hover:bg-violet-500/20 transition-all duration-200"
              >
                Resume ↗
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

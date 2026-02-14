'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: '핵심원리', href: '#principles' },
  { label: '4가지 과제', href: '#challenges' },
  { label: '영양소', href: '#nutrients' },
  { label: '발효한약', href: '#fermented' },
  { label: '침치료', href: '#acupuncture' },
  { label: '실천가이드', href: '#practice' },
  { label: '문의', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-forest-900/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-forest-400 to-forest-600 flex items-center justify-center text-white font-display font-bold text-[9px] leading-tight text-center">
            建生<br/>病死
          </div>
          <div>
            <span className="text-white font-display font-bold text-lg tracking-wide">
              건생병사
            </span>
            <span className="hidden sm:block text-navy-300 text-[10px] tracking-widest">
              세포 재생 프로젝트
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-navy-200 hover:text-forest-300 transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-forest-400 group-hover:w-2/3 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2"
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-forest-900/98 backdrop-blur-lg border-t border-forest-700"
          >
            <nav className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-navy-200 hover:text-forest-300 hover:bg-forest-800/50 rounded-lg transition-all"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

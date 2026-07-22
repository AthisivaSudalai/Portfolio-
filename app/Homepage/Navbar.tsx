'use client'
import React, { useEffect, useRef, useState } from 'react'

const NAV_LINKS = [
  { label: 'Home',     href: '#hero' },
  { label: 'About',    href: '#about' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact',  href: '#contact' },
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [activeSection, setActive]      = useState('hero')
  const [menuOpen,     setMenuOpen]     = useState(false)

  /* ── Scroll spy ──────────────────────────────────────────── */
  useEffect(() => {
    const sections = NAV_LINKS.map(l => l.href.slice(1))

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // find which section is in view
      let current = 'hero'
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id
        }
      }
      setActive(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ── Smooth scroll on nav click ──────────────────────────── */
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto', width: '100%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a
            href="#hero"
            onClick={e => scrollTo(e, '#hero')}
            style={{
              fontFamily: "'Inter', sans-serif", fontWeight: 800, fontSize: '1.1rem',
              background: 'linear-gradient(135deg, #a5b4fc, #c084fc)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', textDecoration: 'none', letterSpacing: '-0.02em',
            }}
          >
            Athisiva
          </a>

          {/* Desktop nav */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
               className="hidden sm:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={e => scrollTo(e, href)}
                className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
              >
                {label}
              </a>
            ))}

            <a
              href="mailto:svkathisiva2006@gmail.com"
              style={{
                padding: '8px 20px',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                borderRadius: '8px', textDecoration: 'none',
                fontFamily: "'Inter', sans-serif", fontWeight: 600,
                fontSize: '0.875rem', color: '#fff',
                transition: 'opacity 0.2s ease, transform 0.2s ease',
                boxShadow: '0 0 16px rgba(99,102,241,0.35)',
              }}
              onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            style={{
              display: 'none',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px', color: '#a5b4fc',
            }}
            className="sm:hidden flex"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {menuOpen
                ? <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={e => scrollTo(e, href)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.5rem', fontWeight: 700,
              color: activeSection === href.slice(1) ? '#a5b4fc' : '#cbd5e1',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="mailto:svkathisiva2006@gmail.com"
          style={{
            marginTop: '1rem', padding: '12px 32px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            borderRadius: '10px', textDecoration: 'none',
            fontFamily: "'Inter', sans-serif", fontWeight: 600,
            fontSize: '1rem', color: '#fff',
          }}
        >
          Hire Me
        </a>
      </div>

      <style>{`
        @media (min-width: 640px) {
          .hidden.sm\\:flex { display: flex !important; }
          .sm\\:hidden { display: none !important; }
        }
        @media (max-width: 639px) {
          .hidden.sm\\:flex { display: none !important; }
          .sm\\:hidden { display: flex !important; }
        }
      `}</style>
    </>
  )
}

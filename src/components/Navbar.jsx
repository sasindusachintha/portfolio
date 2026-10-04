import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(9, 14, 26, 0.92)'
            : 'rgba(9, 14, 26, 0)',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16 max-w-6xl">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
            className="text-lg font-bold tracking-tight transition-colors duration-200 hover:opacity-80"
            style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}
            aria-label="Sasindu — home"
          >
            <span style={{ color: 'var(--color-primary)' }}>{'<'}</span>
            SASINDU
            <span style={{ color: 'var(--color-primary)' }}>{'>'}</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="px-3 py-2 text-sm font-medium rounded-md transition-all duration-200"
                    style={{
                      color: isActive ? 'var(--color-primary-light)' : 'var(--color-text-secondary)',
                    }}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Download CV */}
          <a
            href="https://drive.google.com/uc?export=download&id=1Mc0JNyG-V66R0NaD4Lk35MG6CCG1UilX"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 border"
            style={{
              color: 'var(--color-primary-light)',
              borderColor: 'rgba(99,102,241,0.4)',
              background: 'rgba(99,102,241,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.16)';
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(99,102,241,0.06)';
              e.currentTarget.style.borderColor = 'rgba(99,102,241,0.4)';
            }}
            aria-label="Download CV"
          >
            <Download size={14} strokeWidth={2.5} />
            Download CV
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md transition-colors duration-200"
            style={{ color: 'var(--color-text-secondary)' }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(9,14,26,0.85)', backdropFilter: 'blur(8px)' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Panel */}
        <div
          className="absolute top-16 left-0 right-0 p-6 flex flex-col gap-4 transition-transform duration-300"
          style={{
            background: 'var(--color-surface)',
            borderBottom: '1px solid var(--color-border)',
            transform: mobileOpen ? 'translateY(0)' : 'translateY(-16px)',
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-base font-medium py-2 border-b transition-colors duration-200"
              style={{
                color: 'var(--color-text-secondary)',
                borderColor: 'var(--color-border)',
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/uc?export=download&id=1Mc0JNyG-V66R0NaD4Lk35MG6CCG1UilX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2.5 rounded-lg font-semibold text-sm"
            style={{
              background: 'rgba(99,102,241,0.12)',
              color: 'var(--color-primary-light)',
              border: '1px solid rgba(99,102,241,0.3)',
            }}
          >
            <Download size={14} strokeWidth={2.5} />
            Download CV
          </a>
        </div>
      </div>
    </>
  );
}

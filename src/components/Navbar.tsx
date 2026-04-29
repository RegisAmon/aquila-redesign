'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Mail } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/etudes-financieres', label: 'Études financières' },
  { href: '/strategie-juridique', label: 'Stratégie juridique' },
  { href: '/formations', label: 'ECODIA France' },
  { href: '/staff/falana-ronnel', label: 'À propos' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--navy)]/95 backdrop-blur-md shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-[var(--navy)] border-b border-white/10">
        <div className="container-custom flex justify-end items-center gap-6 py-2 text-sm text-white/70">
          <a
            href="tel:+33752243929"
            className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors"
          >
            <Phone size={14} />
            (+33) 07 52 24 39 29
          </a>
          <a
            href="mailto:aquila@aquila-consulting.com"
            className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors"
          >
            <Mail size={14} />
            aquila@aquila-consulting.com
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[var(--gold)] flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="font-heading text-xl font-bold text-[var(--navy)]">A</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-semibold text-white tracking-wide">
                AQUILA
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-white/50 uppercase">
                Etudes & Consulting
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm text-white/80 hover:text-white font-medium tracking-wide transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--gold)] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-gold text-sm"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[var(--navy)] border-t border-white/10 px-6 py-8">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/80 hover:text-[var(--gold)] text-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-gold text-center mt-4"
            >
              Nous contacter
            </Link>
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10 text-sm text-white/50">
              <a href="tel:+33752243929" className="flex items-center gap-2">
                <Phone size={14} />
                (+33) 07 52 24 39 29
              </a>
              <a href="mailto:aquila@aquila-consulting.com" className="flex items-center gap-2">
                <Mail size={14} />
                aquila@aquila-consulting.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

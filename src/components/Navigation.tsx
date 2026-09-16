'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} role="navigation">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <img 
              src="/images/logo-transparent.png" 
              alt="Suva Botanica Logo" 
              className="brand-logo" 
            />
            <div className="brand-text">
              <span>Suva Botanica</span>
              <span className="brand-sub">curated greenery for curated spaces</span>
            </div>
          </Link>

          <div className="nav-links">
            {siteConfig.nav.main.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </div>

          <div className="nav-cta">
            <a href={siteConfig.contact.whatsappUrl(siteConfig.contact.defaultWhatsappMessage)} className="btn btn-whatsapp" target="_blank" rel="noopener">
              WhatsApp Us
            </a>
          </div>

          <button 
            className={`hamburger ${menuOpen ? 'active' : ''}`} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        {siteConfig.nav.main.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
            {item.label}
          </Link>
        ))}
        <a href={siteConfig.contact.whatsappUrl(siteConfig.contact.defaultWhatsappMessage)} className="btn btn-whatsapp" target="_blank" rel="noopener">
          WhatsApp Us
        </a>
      </div>
    </>
  );
}

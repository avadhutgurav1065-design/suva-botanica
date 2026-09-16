'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100 && !menuOpen) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      // Hide header when reaching footer
      const scrollPosition = window.innerHeight + currentScrollY;
      const documentHeight = document.documentElement.scrollHeight;
      if (documentHeight - scrollPosition < 150) {
        setIsHidden(true);
      }

      lastScrollY = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`} role="navigation">
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

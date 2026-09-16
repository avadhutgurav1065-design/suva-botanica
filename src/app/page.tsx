'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Hero Text Animation
    if (titleRef.current) {
      const text = "Living keepsakes for lasting bonds.";
      titleRef.current.innerHTML = '';
      const words = text.split(' ');
      words.forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'word';
        span.textContent = word;
        span.style.transitionDelay = `${0.15 + i * 0.1}s`;
        titleRef.current?.appendChild(span);
        if (i < words.length - 1) titleRef.current?.appendChild(document.createTextNode(' '));
      });
      setTimeout(() => titleRef.current?.classList.add('animate'), 300);
    }

    setTimeout(() => {
      heroRef.current?.classList.add('loaded');
    }, 200);

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-bg">
          <img src="/images/hero_lifestyle_1789493704655.jpg" alt="Premium Monstera plant in a Suva Botanica gift box on a marble console table" />
        </div>
        <div className="hero-overlay"></div>

        <svg className="hero-botanical hero-botanical-1" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M100 180C100 180 60 140 40 100C20 60 30 20 70 10C110 0 120 40 100 80C80 120 100 180 100 180Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M100 180C100 180 140 140 160 100C180 60 170 20 130 10C90 0 80 40 100 80C120 120 100 180 100 180Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M100 180V60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>

        <svg className="hero-botanical hero-botanical-2" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M75 140C75 140 45 110 35 75C25 40 40 15 65 10C90 5 95 30 80 55C65 80 75 140 75 140Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M75 140V50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>

        <div className="container hero-content">
          <span className="section-label reveal visible">Suva Botanica</span>
          <h1 className="hero-title" id="hero-title" ref={titleRef}>Living keepsakes for lasting bonds.</h1>
          <p className="hero-subtitle reveal visible">Curated, lab-grown plants — styled in gift-ready packaging, delivered across Pune. For the moments that deserve more than flowers.</p>
          <div className="hero-actions reveal visible">
            <Link href="/plants" className="btn btn-primary">Find Your Plant (Scan QR)</Link>
            <a href="/plants" className="btn btn-ghost">Explore Collection &rarr;</a>
          </div>
        </div>

        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="trust-strip" aria-label="Brand promises">
        <div className="container">
          <div className="trust-items stagger-children" id="trust-items">
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div className="trust-text">
                <h4>Lab-Grown, Virus-Free</h4>
                <p>Tissue-cultured for guaranteed health</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div className="trust-text">
                <h4>Same/Next-Day in Pune</h4>
                <p>Hyperlocal delivery, zero transit stress</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              </div>
              <div className="trust-text">
                <h4>30-Day Health Promise</h4>
                <p>Free replacement if it doesn't thrive</p>
              </div>
            </div>
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
              </div>
              <div className="trust-text">
                <h4>Gift-Ready, Always</h4>
                <p>Premium packaging, no extra charge</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ═══ CORPORATE & EVENTS ═══ */}
      <section className="corporate" id="corporate">
        <div className="container">
          <div className="corporate-inner">
            <div className="corporate-text">
              <span className="section-label" style={{ color: 'var(--sage-light)' }}>For Business</span>
              <h2 className="reveal-left">Bulk gifting & event styling for teams, weddings, and venues across Pune.</h2>
              <p className="subtitle reveal-left" style={{ transitionDelay: '0.1s' }}>From employee onboarding kits to wedding venue greenery — we bring curated plants to your most important occasions at scale.</p>

              <div className="offer-cards stagger-children" id="offer-cards">
                <div className="offer-card">
                  <h3>💼 Corporate Bulk Gifting</h3>
                  <p>Onboarding kits, festive gifting, client appreciation — branded, packaged, delivered.</p>
                </div>
                <div className="offer-card">
                  <h3>🌿 Event Styling</h3>
                  <p>Weddings, conferences, hotel lobbies, venue greenery — styled with living plants.</p>
                </div>
                <div className="offer-card">
                  <h3>🏢 Office Plant Subscription</h3>
                  <p>Monthly curated plants for your workspace. We handle the care, you enjoy the green.</p>
                </div>
              </div>

              <div className="corporate-form reveal">
                <h3>Get a Custom Quote</h3>
                <a href="https://wa.me/919518780272?text=Hi!%20I'm%20interested%20in%20corporate%20gifting%20/%20event%20styling." className="btn btn-primary" target="_blank" rel="noopener noreferrer">Send WhatsApp Enquiry</a>
              </div>
            </div>

            <div className="corporate-visual reveal-right">
              <img src="/images/corporate_events_1789493915355.jpg" alt="Corporate workspace styled with premium Suva Botanica plants" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT US ═══ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-hero">
            <div className="about-text">
              <span className="section-label reveal">About Us</span>
              <h2 className="reveal">The Art of the Living Keepsake</h2>
              <p className="reveal">Welcome to Suva Botanica. We believe that the best gifts don't sit on a shelf gathering dust — they live, they breathe, and they grow alongside you.</p>
              <p className="reveal">We created Suva Botanica to bridge the gap between premium interior aesthetics and meaningful gifting. Whether you are celebrating an anniversary, elevating a corporate workspace, or warming a new home, we curate botanical pieces that serve as living memories.</p>
            </div>
            <div className="about-image reveal-right">
              <img src="/images/about_lab_1789493928791.jpg" alt="Suva Botanica tissue culture laboratory" loading="lazy" />
            </div>
          </div>

          <div className="process-section">
            <span className="section-label reveal">The Science</span>
            <h2 className="reveal">The Lab-to-Living Room Advantage</h2>
            <p className="subtitle reveal" style={{ maxWidth: '720px', marginBottom: '3rem' }}>Most online nurseries act as middlemen, shipping plants that have been sitting in unpredictable conditions. We do things differently. Our collection is rooted in advanced horticultural science — sourced directly from cutting-edge tissue-culture environments, every Suva Botanica plant begins its life in a sterile, climate-controlled lab.</p>

            <div className="process-steps stagger-children" id="process-steps">
              <div className="process-step">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <span className="step-number">Advantage 01</span>
                <h3>Virus-Free & Pristine</h3>
                <p>Our plants are engineered for absolute health — no hidden pests or diseases, ever.</p>
              </div>
              <div className="process-step">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
                </div>
                <span className="step-number">Advantage 02</span>
                <h3>Architectural Perfection</h3>
                <p>Grown for optimal leaf structure and vibrant foliage — each plant is a design object.</p>
              </div>
              <div className="process-step">
                <div className="step-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
                </div>
                <span className="step-number">Advantage 03</span>
                <h3>Built-In Resilience</h3>
                <p>Cultivated to thrive seamlessly indoors with minimal maintenance — designed for real life.</p>
              </div>
            </div>
          </div>

          <div className="about-cta-section">
            <div className="about-cta-inner reveal">
              <h2>Designed for Your Space</h2>
              <p>With our deep roots in event design and space styling, we understand that a plant is more than just greenery — it is a core design element. That is why every plant we deliver is hand-potted in a premium matte ceramic vessel and secured with our proprietary soil-lock transit packaging.</p>
              <p>From our cultivation centres to your doorstep in Pune, we ensure the experience is flawless.</p>
              <p className="about-tagline">Suva Botanica. Curated greenery for curated spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <span className="section-label">Kind Words</span>
            <h2>What Our Customers Say</h2>
          </div>

          <div className="testimonials-grid stagger-children" id="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <span className="testimonial-quote-mark">"</span>
              <blockquote>Ordered a Monstera for my sister's housewarming — the packaging was so beautiful she almost didn't want to open it. The plant is still thriving three months later!</blockquote>
              <p className="testimonial-author">Priya M.</p>
              <span className="testimonial-occasion">Housewarming Gift</span>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <span className="testimonial-quote-mark">"</span>
              <blockquote>We gifted 50 plants for our Diwali employee gifting. Suva Botanica handled everything — branding, packaging, delivery to individual homes. Seamless experience.</blockquote>
              <p className="testimonial-author">Rahul K.</p>
              <span className="testimonial-occasion">Corporate Gifting</span>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <span className="testimonial-quote-mark">"</span>
              <blockquote>Finally, a plant brand that treats plants like the luxury gifts they are. The ZZ Plant I received was perfect — healthy, beautifully potted, and the care card was a lovely touch.</blockquote>
              <p className="testimonial-author">Ananya S.</p>
              <span className="testimonial-occasion">Birthday Gift</span>
            </div>
          </div>
        </div>
      </section>


      
      {/* ═══ FLOATING WHATSAPP ═══ */}
      <a href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica!%20I'd%20like%20to%20order%20a%20plant." className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>
    </>
  );
}

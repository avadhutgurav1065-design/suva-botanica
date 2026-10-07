'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';

// ═══ PARALLAX HOOK ═══
function useParallax(speed: number = 0.5) {
  const ref = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const rect = el.parentElement?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        // Calculate how far the element is from the center of the screen
        const centerOffset = (rect.top + rect.height / 2) - window.innerHeight / 2;
        el.style.transform = `translateY(${centerOffset * speed}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Init
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
}

export default function AboutPage() {
  const heroParallax = useParallax(0.3);
  const labParallax = useParallax(0.2);

  useEffect(() => {
    // Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll(`.reveal, .reveal-left, .reveal-right`).forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      
      {/* ═══ CINEMATIC HERO SECTION ═══ */}
      <section className={styles.hero}>
        <img 
          ref={heroParallax}
          src="/images/hero_lifestyle_1789493704655.jpg" 
          alt="Suva Botanica Lifestyle" 
          className={styles.heroBg}
        />
        <div className={styles.heroOverlay}></div>
        
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} reveal`}>
            The Story Behind Suva Botanica
          </h1>
          <p className={`${styles.heroText} reveal`} style={{ transitionDelay: '0.2s' }}>
            Welcome to Suva Botanica. We believe the most meaningful gifts don't sit on a shelf gathering dust—they live, breathe, and grow alongside you.
          </p>
          <p className={`${styles.heroText} reveal`} style={{ transitionDelay: '0.3s' }}>
            Suva Botanica was born in Pune from a simple realization: the traditional plant nursery market was broken. Finding a healthy, beautifully packaged, gift-ready plant was nearly impossible. We set out to change that by combining advanced horticultural science with premium digital and aesthetic design.
          </p>
          <p className={`${styles.heroText} reveal`} style={{ transitionDelay: '0.4s' }}>
            <strong>We are a dedicated team, bridging the gap between clinical botanical perfection and curated living spaces.</strong>
          </p>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine}></div>
        </div>
      </section>

      {/* ═══ THE PHILOSOPHY ═══ */}
      <section className={styles.philosophy}>
        <div className={`${styles.philosophyHeader} reveal`}>
          <h2>The Philosophy of Living Elegance</h2>
          <p>We do not just sell plants. We curate living art for those who demand the extraordinary.</p>
        </div>
        
        <div className={styles.philosophyGrid}>
          <div className={`${styles.philosophyCard} reveal`}>
            <div className={styles.philosophyIcon}>✨</div>
            <h3>Curated Aesthetics</h3>
            <p>Every Suva Botanica piece is selected for its architectural presence, ensuring it elevates rather than clutters your space.</p>
          </div>
          
          <div className={`${styles.philosophyCard} reveal`} style={{ transitionDelay: '0.2s' }}>
            <div className={styles.philosophyIcon}>🔬</div>
            <h3>Biotech Precision</h3>
            <p>Raised in sterile, climate-perfect tissue culture environments, our plants are virtually immune to the pests and diseases of traditional nurseries.</p>
          </div>
          
          <div className={`${styles.philosophyCard} reveal`} style={{ transitionDelay: '0.4s' }}>
            <div className={styles.philosophyIcon}>🌱</div>
            <h3>Zero Transition Shock</h3>
            <p>Through rigorous hardening processes, we ensure each plant transitions flawlessly from our clinical lab directly to your living room.</p>
          </div>
        </div>
      </section>

      {/* ═══ LAB PROMISE BREAKOUT SECTION ═══ */}
      <section className={styles.labPromise}>
        <img 
          ref={labParallax}
          src="/images/about_lab_1789493928791.jpg" 
          alt="Suva Botanica Laboratory" 
          className={styles.labBg}
        />
        <div className={styles.labOverlay}></div>
        
        <div className={`${styles.labContent} reveal`}>
          <h2 className={styles.labTitle}>The Lab-to-Living Room Promise</h2>
          <p className={styles.labText}>
            Most online nurseries act as middlemen, shipping plants that have been sitting in unpredictable conditions. Because of our direct roots in the biotech industry, our collection is different. Every Suva Botanica plant begins its life in a sterile, climate-controlled lab.
          </p>
          <p className={styles.labText}>
            From our cultivation centers to your doorstep in Pune, we ensure the experience is flawless.
          </p>
          <span className={styles.labTagline}>Suva Botanica. Curated greenery for curated spaces.</span>
        </div>
      </section>

      {/* ═══ FOUNDER SECTION ═══ */}
      <section className={styles.founderSection} style={{ padding: 'var(--space-4xl) var(--space-lg)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className={styles.founderGrid}>
            <div className={`${styles.founderText} reveal-left`}>
              <p style={{ color: 'var(--gold)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Meet The Founder</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--forest-deep)', marginBottom: '0.5rem' }}>Avadhut Gurav</h2>
              <p className={styles.founderRole}>Founder & Head of Design & Operations</p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--charcoal)', opacity: 0.9, marginBottom: '1.5rem' }}>
                As the founder of Suva Botanica, Avadhut combines a deep passion for horticulture with an eye for design, ensuring every plant that leaves our care is a living masterpiece.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--charcoal)', opacity: 0.9 }}>
                Our mission is to bridge the gap between premium interior aesthetics and meaningful gifting, delivering curated greenery that transforms spaces.
              </p>
            </div>
            <div className={`${styles.founderImageContainer} reveal-right`}>
              <div className={styles.founderImageWrapper}>
                <Image
                  src="/images/founder_avadhut.jpg"
                  alt="Avadhut Gurav - Founder of Suva Botanica"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONNECT SECTION ═══ */}
      <section className={styles.connect}>
        <h2 className={`${styles.connectTitle} reveal`}>Begin Your Botanical Journey</h2>
        <p className={`${styles.connectText} reveal`}>
          We handle our local Pune operations directly to ensure absolute quality control. For bulk corporate gifting, event styling inquiries, or specialized orders, reach out to our curation experts:
        </p>
        
        <div className={styles.connectGrid}>
          <a href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica,%20I%20have%20an%20inquiry." className={`${styles.magneticBtn} reveal`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Avadhut Gurav</span>
              <span className={styles.btnNumber} style={{ fontSize: '0.85rem' }}>Founder, Design & Ops</span>
              <span className={styles.btnNumber}>+91 95187 80272</span>
            </span>
          </a>
          
          <a href="https://wa.me/919022554823?text=Hi%20Suva%20Botanica,%20I%20have%20an%20inquiry." className={`${styles.magneticBtn} reveal`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Jayesh Mahajan</span>
              <span className={styles.btnNumber} style={{ fontSize: '0.85rem' }}>Sales and Gifting</span>
              <span className={styles.btnNumber}>+91 90225 54823</span>
            </span>
          </a>

          <a href="https://wa.me/919307195947?text=Hi%20Suva%20Botanica,%20I%20have%20an%20inquiry." className={`${styles.magneticBtn} reveal`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Aishwarya Thite</span>
              <span className={styles.btnNumber} style={{ fontSize: '0.85rem' }}>Sales and CRM</span>
              <span className={styles.btnNumber}>+91 93071 95947</span>
            </span>
          </a>
        </div>
      </section>
      
    </div>
  );
}

'use client';
import { useEffect, useRef } from 'react';
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
            <strong>We are a brother-sister founding team, bridging the gap between clinical botanical perfection and curated living spaces.</strong>
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

      {/* ═══ CONNECT SECTION ═══ */}
      <section className={styles.connect}>
        <h2 className={`${styles.connectTitle} reveal`}>Begin Your Botanical Journey</h2>
        <p className={`${styles.connectText} reveal`}>
          We handle our local Pune operations directly to ensure absolute quality control. For bulk corporate gifting, event styling inquiries, or specialized orders, reach out to our curation experts:
        </p>
        
        <div className={styles.connectGrid}>
          <a href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica,%20I%20have%20an%20inquiry." className={`${styles.magneticBtn} reveal-left`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Digital & Design Experience</span>
              <span className={styles.btnNumber}>+91 95187 80272</span>
            </span>
          </a>
          
          <a href="https://wa.me/918669592638?text=Hi%20Suva%20Botanica,%20I%20have%20an%20inquiry." className={`${styles.magneticBtn} reveal-right`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Botanical Operations</span>
              <span className={styles.btnNumber}>+91 86695 92638</span>
            </span>
          </a>
        </div>
      </section>
      
    </div>
  );
}

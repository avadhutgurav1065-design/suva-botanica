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

      {/* ═══ EDITORIAL FOUNDERS SECTION ═══ */}
      <section className={styles.founders}>
        <div className={`${styles.foundersHeader} reveal`}>
          <h2>Meet the Founders</h2>
        </div>
        
        {/* Supriya - Left Image, Right Text */}
        <div className={styles.editorialRow}>
          <div className={`${styles.editorialImageWrapper} reveal-left`}>
            <img 
              src="/images/founder_supriya.png" 
              alt="Supriya Gurav" 
              className={styles.editorialImage}
            />
          </div>
          <div className={`${styles.editorialTextWrapper} reveal-right`}>
            <div className={styles.editorialCard}>
              <span className={styles.founderRole}>Head of Botanical Operations</span>
              <h3 className={styles.founderName}>Supriya Gurav</h3>
              <p className={styles.founderBio}>
                With a background in Agri-Business Management (ABM) from DY Patil and active professional experience in the biotechnology sector, Supriya leads our plant curation. Her expertise allows Suva Botanica to bypass traditional, unorganized nurseries. Under her guidance, every plant we sell is sourced from cutting-edge tissue-culture environments—ensuring your living gift is virus-free, structurally flawless, and engineered to thrive indoors.
              </p>
            </div>
          </div>
        </div>

        {/* Avadhut - Right Image, Left Text (Reverse) */}
        <div className={`${styles.editorialRow} ${styles.reverse}`}>
          <div className={`${styles.editorialImageWrapper} reveal-right`}>
            <img 
              src="/images/founder_avadhut.png" 
              alt="Avadhut Gurav" 
              className={styles.editorialImage}
            />
          </div>
          <div className={`${styles.editorialTextWrapper} reveal-left`}>
            <div className={styles.editorialCard}>
              <span className={styles.founderRole}>Head of Digital & Design Experience</span>
              <h3 className={styles.founderName}>Avadhut Gurav</h3>
              <p className={styles.founderBio}>
                A technology and design specialist pursuing his BCA at IMED Pune, Avadhut architects the Suva Botanica customer journey. From our proprietary, spill-proof "soil-lock" transit engineering to the seamless digital storefront, Avadhut ensures that the experience of buying and unboxing a Suva Botanica gift is as premium as the plant itself.
              </p>
            </div>
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
        <h2 className={`${styles.connectTitle} reveal`}>Connect With the Founders</h2>
        <p className={`${styles.connectText} reveal`}>
          We handle our local Pune operations directly to ensure absolute quality control. For bulk corporate gifting, event styling inquiries, or specialized orders, reach out to us directly:
        </p>
        
        <div className={styles.connectGrid}>
          <a href="https://wa.me/919518780272?text=Hi%20Avadhut,%20I%20have%20an%20inquiry%20regarding%20Suva%20Botanica." className={`${styles.magneticBtn} reveal-left`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Message Avadhut</span>
              <span className={styles.btnNumber}>+91 95187 80272</span>
            </span>
          </a>
          
          <a href="https://wa.me/918669592638?text=Hi%20Supriya,%20I%20have%20an%20inquiry%20regarding%20Suva%20Botanica." className={`${styles.magneticBtn} reveal-right`} target="_blank" rel="noopener noreferrer">
            <span className={styles.btnContent}>
              <span className={styles.btnName}>Message Supriya</span>
              <span className={styles.btnNumber}>+91 86695 92638</span>
            </span>
          </a>
        </div>
      </section>
      
    </div>
  );
}

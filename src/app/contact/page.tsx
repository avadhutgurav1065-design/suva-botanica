'use client';
import { useEffect } from 'react';
import styles from './Contact.module.css';

export default function ContactPage() {
  
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

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.page}>
      
      {/* ═══ HERO SECTION ═══ */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} reveal`}>
            Connect With Suva Botanica
          </h1>
          <p className={`${styles.heroText} reveal`} style={{ transitionDelay: '0.2s' }}>
            Whether you need assistance with a recent order, require plant care guidance, or want to curate living gifts for a corporate event, our founding team is here to assist you.
          </p>
        </div>
      </section>

      {/* ═══ CORPORATE EDITORIAL SECTION ═══ */}
      <section className={styles.corporateSection}>
        <div className={styles.editorialRow}>
          
          <div className={`${styles.editorialImageWrapper} reveal-left`}>
            <img 
              src="/images/corporate_events_1789493915355.jpg" 
              alt="Suva Botanica Corporate Event Gifting" 
              className={styles.editorialImage}
            />
          </div>
          
          <div className={`${styles.editorialTextWrapper} reveal-right`}>
            <div className={styles.editorialCard}>
              <span className={styles.sectionLabel}>Bespoke Services</span>
              <h2>For Corporate, Event & Bulk Gifting</h2>
              <p>
                Looking for premium employee onboarding kits, festive corporate gifting, or botanical styling for an upcoming event? Bypass the standard support queue and speak directly with the founders to engineer a custom experience.
              </p>
              
              <div className={styles.contactList}>
                <div className={styles.contactItem}>
                  <span className={styles.contactRole}>Avadhut Gurav (Head of Design & Operations)</span>
                  <a href="https://wa.me/919518780272" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    +91 95187 80272
                  </a>
                </div>
                
                <div className={styles.contactItem}>
                  <span className={styles.contactRole}>Supriya Gurav (Head of Botanical Curation)</span>
                  <a href="https://wa.me/918669592638" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                    +91 86695 92638
                  </a>
                </div>
                
                <div className={styles.contactItem}>
                  <span className={styles.contactRole}>Email</span>
                  <a href="mailto:partnerships@suvabotanica.in" className={styles.contactLink}>
                    partnerships@suvabotanica.in
                  </a>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </section>

      {/* ═══ SUPPORT SECTION ═══ */}
      <section className={styles.supportSection}>
        <div className={`${styles.supportContent} reveal`}>
          <span className={styles.sectionLabel} style={{ color: 'var(--forest)' }}>Customer Care</span>
          <h2>For Order Support & Plant Care</h2>
          <p>
            We treat our customer support with the same precision as our plant cultivation. For immediate assistance regarding local Pune deliveries or plant care, reach out to us on WhatsApp.
          </p>
          
          <div className={styles.supportActions}>
            <a href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica%20Support," target="_blank" rel="noopener noreferrer" className={styles.supportBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Support
            </a>
            <a href="mailto:support@suvabotanica.in" className={styles.supportBtn} style={{ backgroundColor: 'transparent', color: 'var(--forest-deep)', border: '1px solid var(--forest-deep)' }}>
              support@suvabotanica.in
            </a>
          </div>
          
          <div className={`${styles.noteBox} reveal-scale`}>
            <div className={styles.noteTitle}>Important Notice for Transit</div>
            <p>
              If you are claiming a replacement for transit damage, please send your <strong>unboxing video</strong> and order number to our WhatsApp support line within <strong>24 hours</strong> of delivery.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER INFO SECTION ═══ */}
      <section className={styles.footerInfo}>
        <div className={styles.footerGrid}>
          
          <div className={`${styles.infoBlock} reveal-left`}>
            <h3>Operating Hours</h3>
            <p><strong>Monday to Saturday</strong></p>
            <p>9:00 AM – 7:00 PM (IST)</p>
            <br />
            <p style={{ fontSize: '0.875rem', opacity: 0.7 }}>Sunday closed. Queries received on Sundays will be addressed on Monday.</p>
          </div>

          <div className={`${styles.infoBlock} reveal-right`}>
            <h3>Delivery Zones</h3>
            <p>We currently offer exclusive, point-to-point hand delivery across:</p>
            <br />
            <p><strong>Pune</strong></p>
            <p><strong>Pimpri-Chinchwad (PCMC)</strong></p>
          </div>
          
        </div>
      </section>

    </div>
  );
}

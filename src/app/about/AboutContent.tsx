'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ScrollReveal from '@/components/effects/ScrollReveal';
import styles from './About.module.css';

export default function AboutContent() {
  return (
    <div className={styles.page}>
      {/* Page Hero */}
      <section className={styles.pageHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">About Suva Botanica</p>
            <h1 className="heading-xl">The Art of the<br /><span className="text-accent">Living Keepsake</span></h1>
          </motion.div>
        </div>
      </section>

      {/* Story Block */}
      <section className={`section ${styles.storySection}`}>
        <div className="container-narrow">
          <ScrollReveal>
            <p className={styles.leadText}>
              Welcome to Suva Botanica. We believe that the best gifts don&apos;t sit on a shelf
              gathering dust — they live, they breathe, and they grow alongside you.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className={styles.bodyText}>
              We created Suva Botanica to bridge the gap between premium interior aesthetics
              and meaningful gifting. Whether you are celebrating an anniversary, elevating a
              corporate workspace, or warming a new home, we curate botanical pieces that serve
              as living memories.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Lab Section */}
      <section className={`section ${styles.labSection}`}>
        <div className="container">
          <div className={styles.labGrid}>
            <ScrollReveal direction="left" className={styles.labImage}>
              <div className={styles.labImageWrapper}>
                <Image
                  src="/images/about_lab_1789493928791.jpg"
                  alt="Suva Botanica tissue culture laboratory"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className={styles.labText}>
              <p className="section-label">Science Meets Design</p>
              <h2 className="heading-md">The Lab-to-Living Room<br /><span className="text-accent">Advantage</span></h2>
              <p className={styles.bodyText}>
                Most online nurseries act as middlemen, shipping plants that have been sitting
                in unpredictable conditions. We do things differently.
              </p>
              <p className={styles.bodyText}>
                Our collection is rooted in advanced horticultural science. Sourced directly from
                cutting-edge tissue-culture environments, every Suva Botanica plant begins its
                life in a sterile, climate-controlled lab.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className={`section ${styles.advantagesSection}`}>
        <div className="container">
          <ScrollReveal>
            <h2 className={`heading-md ${styles.advantagesTitle}`}>What This Means <span className="text-accent">for You</span></h2>
          </ScrollReveal>
          <div className={styles.advantagesGrid}>
            {[
              {
                icon: '🧬',
                title: 'Virus-Free & Pristine',
                desc: 'Our plants are engineered for absolute health, meaning no hidden pests or diseases.',
              },
              {
                icon: '🌿',
                title: 'Architectural Perfection',
                desc: 'Grown for optimal leaf structure and visual impact — every plant is a design piece.',
              },
              {
                icon: '🏡',
                title: 'Zero Transition Shock',
                desc: 'Hardened to adapt seamlessly from our controlled environment to your home or office.',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className={styles.advantageCard}>
                  <span className={styles.advantageIcon}>{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <ScrollReveal>
            <div className={styles.ctaBlock}>
              <h2>Designed for<br /><span className="text-accent">Your Space</span></h2>
              <p>
                From compact desk companions to towering statement pieces, every Suva Botanica
                plant is selected and styled to complement modern Indian homes and workspaces.
              </p>
              <p className={styles.ctaTagline}>
                &ldquo;We don&apos;t just sell plants. We design living experiences.&rdquo;
              </p>
              <a
                href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica!%20I'd%20like%20to%20know%20more."
                className="btn btn-whatsapp btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a Conversation
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

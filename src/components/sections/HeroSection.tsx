'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/data/site-config';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <Image
          src="/images/hero_lifestyle_1789493704655.jpg"
          alt="Premium Monstera in Suva Botanica gift box"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.overlay} />

      {/* Floating Botanical SVGs */}
      <motion.svg
        className={`${styles.botanical} ${styles.botanical1}`}
        viewBox="0 0 200 200" fill="none"
        animate={{ y: [0, -20, 0], rotate: [-3, 3, -3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <path d="M100 180C100 180 60 140 40 100C20 60 30 20 70 10C110 0 120 40 100 80C80 120 100 180 100 180Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3"/>
      </motion.svg>

      <motion.svg
        className={`${styles.botanical} ${styles.botanical2}`}
        viewBox="0 0 150 150" fill="none"
        animate={{ y: [0, -15, 0], rotate: [3, -3, 3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      >
        <ellipse cx="75" cy="75" rx="40" ry="70" stroke="currentColor" strokeWidth="1" opacity="0.25" transform="rotate(30 75 75)"/>
        <line x1="75" y1="5" x2="75" y2="145" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
      </motion.svg>

      {/* Content */}
      <div className={styles.content}>
        <motion.div
          className={styles.textBlock}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className={styles.label}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className={styles.labelLine} /> Pune&apos;s Premium Plant Studio
          </motion.p>

          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Curated Greenery
            <br />
            <span className={styles.titleAccent}>for Curated Spaces</span>
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            Premium tissue-cultured plants in designer planters.
            Living gifts that outlast flowers — for housewarmings,
            anniversaries, and every moment worth remembering.
          </motion.p>

          <motion.div
            className={styles.actions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link href="/plants" className="btn btn-primary btn-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C12 2 6 7 6 13C6 16.3137 8.68629 19 12 19C15.3137 19 18 16.3137 18 13C18 7 12 2 12 2Z"/>
                <line x1="12" y1="19" x2="12" y2="22"/>
              </svg>
              Explore Our Plants
            </Link>
            <a
              href={siteConfig.contact.whatsappUrl(siteConfig.contact.defaultWhatsappMessage)}
              className="btn btn-secondary btn-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              </svg>
              WhatsApp Us
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span>Scroll to discover</span>
          <motion.div
            className={styles.scrollLine}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  );
}

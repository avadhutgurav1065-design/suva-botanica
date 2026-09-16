'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BrandStory.module.css';

export default function BrandStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.story}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div
            className={styles.imageCol}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/about_lab_1789493928791.jpg"
                alt="Suva Botanica tissue culture lab"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.imageDecor} />
            </div>
            <div className={styles.floatingBadge}>
              <span className={styles.badgeValue}>100%</span>
              <span className={styles.badgeLabel}>Tissue Cultured</span>
            </div>
          </motion.div>

          <motion.div
            className={styles.textCol}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-label">Our Story</p>
            <h2 className="heading-lg">
              Not Just Plants.
              <br />
              <span className="text-accent">Living Keepsakes.</span>
            </h2>
            <p className={styles.text}>
              We created Suva Botanica to bridge the gap between premium interior aesthetics
              and meaningful gifting. Every plant in our collection begins its life in a sterile,
              climate-controlled tissue-culture lab — ensuring absolute health, architectural
              perfection, and zero transition shock.
            </p>
            <p className={styles.text}>
              No hidden pests. No wilting surprises. Just pristine, design-grade botanicals
              that arrive ready to thrive in your space.
            </p>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🧬</span>
                <div>
                  <strong>Lab-Grown Perfection</strong>
                  <p>Virus-free, pest-free, tissue-cultured plants</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🎁</span>
                <div>
                  <strong>Gift-Ready Packaging</strong>
                  <p>Premium matte ceramic planters, always</p>
                </div>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🌿</span>
                <div>
                  <strong>Zero Transition Shock</strong>
                  <p>Hardened to thrive from lab to living room</p>
                </div>
              </div>
            </div>

            <Link href="/about" className="btn btn-primary">
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import styles from './OccasionsSection.module.css';

const occasions = [
  {
    slug: 'Housewarming',
    title: 'Housewarming',
    description: 'Welcome them home with a living gift that grows with their space.',
    emoji: '🏠',
    gradient: 'linear-gradient(135deg, #2D5A3D, #3A7D52)',
  },
  {
    slug: 'Anniversary',
    title: 'Anniversary',
    description: 'A gift that keeps growing — just like your love.',
    emoji: '💚',
    gradient: 'linear-gradient(135deg, #8B6E4E, #C4A35A)',
  },
  {
    slug: 'Birthday',
    title: 'Birthday',
    description: 'Ditch the bouquet. Gift something that lives on.',
    emoji: '🎂',
    gradient: 'linear-gradient(135deg, #6B4E71, #9B7EA0)',
  },
  {
    slug: 'Corporate',
    title: 'Corporate & Events',
    description: 'Elevate your workspace and impress your clients.',
    emoji: '🏢',
    gradient: 'linear-gradient(135deg, #2C4A6B, #4A7DA8)',
  },
  {
    slug: 'Festive',
    title: 'Diwali & Festive',
    description: 'Celebrate with green. Gift prosperity that grows.',
    emoji: '🪔',
    gradient: 'linear-gradient(135deg, #C27856, #E8A87C)',
  },
];

export default function OccasionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.occasions}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Shop by Occasion</p>
          <h2 className="heading-lg">Every Moment Deserves<br /><span className="text-accent">a Living Memory</span></h2>
          <p className={styles.headerSub}>
            Whether it&apos;s a milestone celebration or a simple &ldquo;thinking of you,&rdquo;
            our curated collections make every occasion unforgettable.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {occasions.map((item, i) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/plants?occasion=${item.slug}`}
                className={styles.card}
                style={{ background: item.gradient }}
              >
                <span className={styles.cardEmoji}>{item.emoji}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
                <span className={styles.cardArrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </span>
                <div className={styles.cardShine} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

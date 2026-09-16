'use client';

import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Plant } from '@/data/plants';
import { siteConfig } from '@/data/site-config';
import styles from './PlantDetail.module.css';

/* ── Difficulty → meter percentage mapping ── */
function difficultyToPercent(d: string): number {
  if (d === 'Easy') return 30;
  if (d === 'Moderate') return 60;
  return 90;
}

/* ── Animated meter bar component ── */
function CareMeter({ percent }: { percent: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <div className={styles.careMeter} ref={ref}>
      <motion.div
        className={styles.careMeterFill}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: percent / 100 } : { scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </div>
  );
}

/* ── The main component ── */
export default function PlantDetailContent({ plant }: { plant: Plant }) {
  const whatsappUrl = siteConfig.contact.whatsappUrl(plant.whatsappMessage);

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const heroFade  = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Floating action bar visibility
  const [showFab, setShowFab] = useState(false);
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => setShowFab(v > 0.4));
    return unsub;
  }, [scrollYProgress]);

  // Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as any },
    }),
  };

  const staggerParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any } },
  };

  /* ── Care data ── */
  const careItems = [
    { icon: '☀️', label: 'Light',       value: plant.care.light,       meter: 70 },
    { icon: '💧', label: 'Water',       value: plant.care.water,       meter: 50 },
    { icon: '💨', label: 'Humidity',     value: plant.care.humidity,    meter: 60 },
    { icon: '🌡️', label: 'Temperature', value: plant.care.temperature, meter: 45 },
    { icon: '📊', label: 'Difficulty',   value: plant.care.difficulty,  meter: difficultyToPercent(plant.care.difficulty) },
    {
      icon: plant.care.petSafe ? '🐾' : '⚠️',
      label: 'Pet Safety',
      value: plant.care.petSafe
        ? 'Safe — Non-toxic to pets'
        : 'Caution — Keep away from pets',
      meter: plant.care.petSafe ? 100 : 25,
    },
  ];

  return (
    <div className={styles.pageWrapper}>

      {/* ═══════ ACT 1 — ELEGANT HERO ═══════ */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.breadcrumb}>
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/plants">Plants</Link>
          <span>/</span>
          <span className={styles.current}>{plant.name}</span>
        </div>

        <div className={styles.heroInner}>
          {/* Text Content */}
          <motion.div
            className={styles.heroTextContent}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ opacity: heroFade }}
          >
            {plant.badge && <span className={styles.badge}>{plant.badge}</span>}
            <p className={styles.botanical}>{plant.botanicalName}</p>
            <h1 className={styles.name}>{plant.name}</h1>
            <p className={styles.tagline}>{plant.tagline}</p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={styles.heroImageWrapper}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ scale: imageScale, opacity: heroFade }}
          >
            <Image src={plant.image} alt={plant.name} fill sizes="(max-width: 768px) 100vw, 50vw" priority />
            <div className={styles.heroImageOverlay} />
          </motion.div>
        </div>
      </section>

      {/* ═══════ ACT 2 — ABOUT THE PLANT ═══════ */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutInner}>
          {/* Left column */}
          <div>
            <motion.div
              className={styles.sectionEyebrow}
              variants={fadeUp}
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              Discover
            </motion.div>

            <motion.h2
              className={styles.aboutHeading}
              variants={fadeUp}
              custom={0.1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              Why {plant.name} is extraordinary
            </motion.h2>

            <motion.p
              className={styles.aboutText}
              variants={fadeUp}
              custom={0.2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {plant.longDescription}
            </motion.p>

            <motion.div
              className={styles.tagRow}
              variants={fadeUp}
              custom={0.3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
            >
              {plant.categories.map((cat) => (
                <span key={cat} className={styles.tagPill}>{cat}</span>
              ))}
            </motion.div>
          </div>

          {/* Right column — features */}
          <motion.div
            className={styles.aboutRight}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className={styles.sectionEyebrow} style={{ justifyContent: 'flex-start' }}>Key Features</div>
            <div className={styles.featureList}>
              {plant.features.map((f) => (
                <motion.div key={f} variants={staggerChild} className={styles.featureItem}>
                  <span className={styles.featureIcon}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className={styles.featureLabel}>{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ ACT 3 — CARE GUIDE ═══════ */}
      <section className={styles.careSection}>
        <div className={styles.careSectionInner}>
          <motion.div
            className={styles.careHeader}
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <h2 className={styles.careTitle}>Expert Care Guide</h2>
            <p className={styles.careSubtitle}>
              Everything you need to keep your {plant.name} thriving for years to come.
            </p>
          </motion.div>

          <motion.div
            className={styles.careGrid}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {careItems.map((item) => (
              <motion.div key={item.label} variants={staggerChild} className={styles.careCard}>
                <div className={styles.careIconCircle}>
                  <span>{item.icon}</span>
                </div>
                <div className={styles.careCardLabel}>{item.label}</div>
                <div className={styles.careCardValue}>{item.value}</div>
                <CareMeter percent={item.meter} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════ ACT 4 — ORDER CTA ═══════ */}
      <section className={styles.ctaSection}>
        <motion.div
          className={styles.ctaInner}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2 className={styles.ctaHeading}>Bring {plant.name} Home</h2>
          <p className={styles.ctaSubtext}>
            Each plant is hand-selected, expertly potted, and delivered to your doorstep in premium packaging.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Order via WhatsApp</span>
            <span className={styles.ctaBtnIcon}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </motion.a>
        </motion.div>
      </section>

      {/* ═══════ FLOATING ACTION BAR ═══════ */}
      <AnimatePresence>
        {showFab && (
          <motion.div
            className={styles.floatingAction}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={styles.actionBtn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>Order Now</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { plants } from '@/data/plants';
import styles from './Plants.module.css';

export default function PlantsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(plants.flatMap(p => p.categories)))];

  const filteredPlants = useMemo(() => {
    return plants.filter(p => {
      const matchesSearch = 
        p.name.toLowerCase().includes(search.toLowerCase()) || 
        p.botanicalName.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === 'All' || p.categories.includes(activeCategory);
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className={styles.page}>
      {/* ═══════ HERO & SEARCH ═══════ */}
      <section className={styles.pageHero}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <p className="section-label">Plant Directory</p>
            <h1 className="heading-xl">The Living <span className="text-accent">Catalog</span></h1>
            <p className={styles.heroSub}>
              Scan a QR code or search for a plant to unlock expert care tips and detailed information.
            </p>

            <div className={styles.searchContainer}>
              <input 
                type="text" 
                placeholder="🔍 Search by plant name (e.g. Poinsettia)..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ CATALOG ═══════ */}
      <section className={`section ${styles.catalogSection}`}>
        <div className="container">
          
          {/* Categories */}
          <div className={styles.filters}>
            {categories.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            <AnimatePresence mode="popLayout">
              {filteredPlants.length === 0 ? (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0' }}
                >
                  <h3 className="heading-md">No plants found.</h3>
                  <p className="text-body" style={{ color: 'var(--text-secondary)' }}>Try adjusting your search or filter.</p>
                </motion.div>
              ) : (
                filteredPlants.map((plant, i) => (
                  <motion.div
                    key={plant.id}
                    layout
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] as any }}
                  >
                    <Link href={`/plants/${plant.slug}`} className={styles.card}>
                      <div className={styles.cardImage}>
                        <Image
                          src={plant.image}
                          alt={plant.name}
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          style={{ objectFit: 'cover' }}
                        />
                        {plant.badge && <span className={styles.badge}>{plant.badge}</span>}
                        <div className={styles.cardOverlay}>
                          <span className={styles.viewBtn}>Unlock Details</span>
                        </div>
                      </div>
                      <div className={styles.cardBody}>
                        <p className={styles.cardBotanical}>{plant.botanicalName}</p>
                        <h3 className={styles.cardName}>{plant.name}</h3>
                        <p className={styles.cardTagline}>{plant.tagline}</p>
                        {/* Prices intentionally removed as per user request */}
                      </div>
                    </Link>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}

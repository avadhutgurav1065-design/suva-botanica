'use client';

import { motion } from 'framer-motion';
import type { EncyclopediaData } from '@/data/plants';
import styles from './PlantDetail.module.css';

interface Props {
  data: EncyclopediaData;
  plantName: string;
}

export default function EncyclopediaSection({ data, plantName }: Props) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as any },
    }),
  };

  const staggerParent = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const staggerChild = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as any } },
  };

  return (
    <section className={styles.encyclopediaSection}>
      <div className={styles.encyclopediaInner}>
        
        {/* Header */}
        <motion.div
          className={styles.encyclopediaHeader}
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          <div className={styles.sectionEyebrow}>In-Depth Plant Guide</div>
          <h2 className={styles.careTitle}>The {plantName} Encyclopedia</h2>
        </motion.div>

        {/* Botanical Information */}
        {data.botanicalInformation && (
          <motion.div 
            className={styles.encyclopediaBlock}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className={styles.encyclopediaH3}>Botanical Information</h3>
            <div className={styles.botanicalTable}>
              {Object.entries(data.botanicalInformation).map(([key, value]) => (
                <motion.div key={key} variants={staggerChild} className={styles.botanicalRow}>
                  <div className={styles.botanicalLabel}>{key}</div>
                  <div className={styles.botanicalValue}>{value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Key Features */}
        {data.keyFeatures && (
          <motion.div 
            className={styles.encyclopediaBlock}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className={styles.encyclopediaH3}>Key Features</h3>
            <div className={styles.encyclopediaGrid}>
              {data.keyFeatures.map((item) => (
                <motion.div key={item.title} variants={staggerChild} className={styles.encyclopediaCard}>
                  <h4 className={styles.encyclopediaCardTitle}>{item.title}</h4>
                  <p className={styles.encyclopediaCardDesc}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Why This Plant */}
        {data.whyThisPlant && (
          <motion.div 
            className={styles.encyclopediaBlock}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className={styles.encyclopediaH3}>Why This Plant?</h3>
            <div className={styles.encyclopediaGrid}>
              {data.whyThisPlant.map((item) => (
                <motion.div key={item.title} variants={staggerChild} className={styles.encyclopediaCard}>
                  <h4 className={styles.encyclopediaCardTitle}>{item.title}</h4>
                  <p className={styles.encyclopediaCardDesc}>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Care Guide: Indoor vs Outdoor */}
        {data.careGuide && (
          <motion.div 
            className={styles.encyclopediaBlock}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            <h3 className={styles.encyclopediaH3}>Care Guide: Indoor vs. Outdoor</h3>
            
            <div className={styles.careGuideSplit}>
              {data.careGuide.indoor && (
                <div className={styles.careGuideCol}>
                  <h4 className={styles.careGuideColTitle}>Indoor Care</h4>
                  <div className={styles.careGuideItems}>
                    {data.careGuide.indoor.map((item) => (
                      <motion.div key={item.title} variants={staggerChild} className={styles.careGuideItem}>
                        <span className={styles.careGuideItemTitle}>{item.title}:</span> {item.description}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
              
              {data.careGuide.outdoor && (
                <div className={styles.careGuideCol}>
                  <h4 className={styles.careGuideColTitle}>Outdoor Care</h4>
                  <div className={styles.careGuideItems}>
                    {data.careGuide.outdoor.map((item) => (
                      <motion.div key={item.title} variants={staggerChild} className={styles.careGuideItem}>
                        <span className={styles.careGuideItemTitle}>{item.title}:</span> {item.description}
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}

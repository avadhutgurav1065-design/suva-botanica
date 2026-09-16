'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import styles from './TrustBar.module.css';

const stats = [
  { value: 500, suffix: '+', label: 'Happy Homes', icon: '🏡' },
  { value: 100, suffix: '%', label: 'Tissue Cultured', icon: '🧬' },
  { value: 4.9, suffix: '★', label: 'Customer Rating', icon: '⭐' },
  { value: 48, suffix: 'hr', label: 'Pune Delivery', icon: '🚚' },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const isFloat = value % 1 !== 0;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count}{suffix}</span>;
}

export default function TrustBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={styles.trust} ref={ref}>
      <div className={styles.inner}>
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.item}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className={styles.icon}>{stat.icon}</span>
            <span className={styles.value}>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={isInView} />
            </span>
            <span className={styles.label}>{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

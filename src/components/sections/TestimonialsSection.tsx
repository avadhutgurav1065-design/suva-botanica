'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    quote: "The Monstera arrived in the most beautiful gift box I've ever seen. My wife thought I'd ordered from some luxury brand abroad. Absolutely worth every rupee.",
    author: 'Rahul M.',
    occasion: 'Anniversary Gift',
    stars: 5,
  },
  {
    quote: "We ordered 50 Snake Plants for our new office launch. The quality was impeccable and the custom branding on the planters was a chef\'s kiss. Our clients were impressed.",
    author: 'Priya S.',
    occasion: 'Corporate Event',
    stars: 5,
  },
  {
    quote: "I was skeptical about ordering plants online, but Suva Botanica changed my mind. The Peace Lily was lush, healthy, and the packaging was gift-ready. No repotting needed!",
    author: 'Ananya K.',
    occasion: 'Housewarming Gift',
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className={`section ${styles.testimonials}`} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-label">Love Notes</p>
          <h2 className="heading-lg">What Our Customers<br /><span className="text-accent">Are Saying</span></h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((item, i) => (
            <motion.div
              key={item.author}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.stars}>
                {'★'.repeat(item.stars)}
              </div>
              <div className={styles.quoteMark}>&ldquo;</div>
              <blockquote>{item.quote}</blockquote>
              <div className={styles.authorBlock}>
                <span className={styles.authorName}>{item.author}</span>
                <span className={styles.authorOccasion}>{item.occasion}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/data/site-config';
import styles from './OrderBar.module.css';

export default function OrderBar() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Hide near footer
      if (documentHeight - scrollPosition < 150) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`${styles.orderBar} ${isHidden ? styles.hidden : ''}`}>
      <a
        href={siteConfig.contact.whatsappUrl("Hi Suva Botanica! I'd like to place an order.")}
        className={styles.orderBtn}
        target="_blank"
        rel="noopener noreferrer"
      >
        <span>Order Now</span>
      </a>
    </div>
  );
}

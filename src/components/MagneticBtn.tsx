'use client';

import { useRef, useCallback } from 'react';
import Link from 'next/link';

interface MagneticBtnProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
}

export default function MagneticBtn({ children, className, href, target, rel, style: s }: MagneticBtnProps) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  
  const onMove = useCallback((e: React.MouseEvent) => {
    const b = btnRef.current; 
    if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width/2)*0.25}px,${(e.clientY - r.top - r.height/2)*0.25}px)`;
  }, []);
  
  const onLeave = useCallback(() => { 
    if (btnRef.current) btnRef.current.style.transform = ''; 
  }, []);

  const combinedStyle = { 
    ...s, 
    transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1),background 0.3s,box-shadow 0.3s' 
  };

  if (href && !href.startsWith('http')) {
    return (
      <Link href={href} className={className} style={combinedStyle}>
        <span 
          ref={btnRef as any}
          onMouseMove={onMove} 
          onMouseLeave={onLeave}
          style={{ display: 'inline-block', width: '100%', height: '100%' }}
        >
          {children}
        </span>
      </Link>
    );
  }

  return (
    <a ref={btnRef} href={href} className={className} target={target} rel={rel}
      style={combinedStyle}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </a>
  );
}

'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollColorShift() {
  const pathname = usePathname();

  useEffect(() => {
    // Determine colors based on route
    let colors = [
      { pos: 0, color: [247, 243, 237], text: [45, 45, 45] },
      { pos: 1, color: [247, 243, 237], text: [45, 45, 45] }
    ];

    if (pathname === '/') {
      colors = [
        { pos: 0, color: [247, 243, 237], text: [45, 45, 45] },       // cream
        { pos: 0.15, color: [255, 255, 255], text: [45, 45, 45] },     // white
        { pos: 0.4, color: [247, 243, 237], text: [45, 45, 45] },      // cream
        { pos: 0.7, color: [255, 255, 255], text: [45, 45, 45] },      // white
        { pos: 1, color: [26, 42, 23], text: [247, 243, 237] }         // deep forest (footer)
      ];
    } else if (pathname === '/plants') {
      colors = [
        { pos: 0, color: [247, 243, 237], text: [45, 45, 45] },
        { pos: 0.5, color: [255, 255, 255], text: [45, 45, 45] },
        { pos: 1, color: [26, 42, 23], text: [247, 243, 237] }
      ];
    } else {
      colors = [
        { pos: 0, color: [247, 243, 237], text: [45, 45, 45] },
        { pos: 1, color: [26, 42, 23], text: [247, 243, 237] }
      ];
    }

    function lerp(a: number, b: number, t: number) {
      return a + (b - a) * t;
    }

    function getColorAtScroll(scrollPercent: number) {
      let lower = colors[0], upper = colors[colors.length - 1];
      for (let i = 0; i < colors.length - 1; i++) {
        if (scrollPercent >= colors[i].pos && scrollPercent <= colors[i + 1].pos) {
          lower = colors[i];
          upper = colors[i + 1];
          break;
        }
      }
      const range = upper.pos - lower.pos;
      const t = range === 0 ? 0 : (scrollPercent - lower.pos) / range;
      
      const bg = [
        Math.round(lerp(lower.color[0], upper.color[0], t)),
        Math.round(lerp(lower.color[1], upper.color[1], t)),
        Math.round(lerp(lower.color[2], upper.color[2], t))
      ];
      
      const text = [
        Math.round(lerp(lower.text[0], upper.text[0], t)),
        Math.round(lerp(lower.text[1], upper.text[1], t)),
        Math.round(lerp(lower.text[2], upper.text[2], t))
      ];
      
      return { bg, text };
    }

    const handleScroll = () => {
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
      const { bg, text } = getColorAtScroll(scrollPercent);
      document.body.style.backgroundColor = `rgb(${bg[0]}, ${bg[1]}, ${bg[2]})`;
      document.body.style.color = `rgb(${text[0]}, ${text[1]}, ${text[2]})`;
      
      // We also update headings color dynamically if needed, 
      // but inheriting color works better if we enforce it.
      document.documentElement.style.setProperty('--charcoal', `rgb(${text[0]}, ${text[1]}, ${text[2]})`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // init

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
      document.documentElement.style.removeProperty('--charcoal');
    };
  }, [pathname]);

  return null;
}

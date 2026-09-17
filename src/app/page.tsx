'use client';
import { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';

function Counter({ to, suffix = '', duration = 2000 }: { to: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 4);
          setCount(Math.round(ease * to));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function MagneticBtn({ children, className, href, target, rel, style: s }: {
  children: React.ReactNode; className?: string; href?: string;
  target?: string; rel?: string; style?: React.CSSProperties;
}) {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const onMove = useCallback((e: React.MouseEvent) => {
    const b = btnRef.current; if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width/2)*0.25}px,${(e.clientY - r.top - r.height/2)*0.25}px)`;
  }, []);
  const onLeave = useCallback(() => { if (btnRef.current) btnRef.current.style.transform = ''; }, []);
  return (
    <a ref={btnRef} href={href} className={className} target={target} rel={rel}
      style={{ ...s, transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1),background 0.3s,box-shadow 0.3s' }}
      onMouseMove={onMove} onMouseLeave={onLeave}>{children}</a>
  );
}

const PLANTS = [
  { name:'Monstera Deliciosa', slug:'monstera-deliciosa', emoji:'🌿', tag:'Best Seller', desc:'Iconic split leaves. The ultimate statement piece for any interior.' },
  { name:'Calathea Peacock', slug:'calathea-peacock', emoji:'🦚', tag:'Premium', desc:'Stunning painted foliage. Perfect gifting choice for any occasion.' },
  { name:'ZZ Plant (Zamia)', slug:'zamia', emoji:'✨', tag:'Low Maintenance', desc:'Thrives on neglect. Glossy, architectural, zero-fuss beauty.' },
  { name:'Areca Palm', slug:'areca-palm', emoji:'🌴', tag:'Air Purifier', desc:'Natural air purifier. Tropical vibes for living rooms and offices.' },
  { name:'Sansevieria', slug:'sansevieria', emoji:'🗡️', tag:'Beginner Friendly', desc:"Almost indestructible. NASA's top air-purifying plant." },
  { name:'Anthurium', slug:'anthurium-red', emoji:'❤️', tag:'Gift Favourite', desc:'Long-lasting blooms in bold red. A living bouquet that never wilts.' },
];

const OCCASIONS = [
  { emoji:'🏠', label:'Housewarming', desc:'A living gift that grows with their new chapter.' },
  { emoji:'💼', label:'Corporate Gifting', desc:'Branded, bulk-packaged, delivered to 50+ employees.' },
  { emoji:'🎂', label:'Birthday', desc:'Unique, thoughtful, and alive — unlike any other gift.' },
  { emoji:'💍', label:'Anniversary', desc:'A symbol of growth, love, and longevity.' },
  { emoji:'🎓', label:'Graduation', desc:'Celebrate new beginnings with something that thrives.' },
  { emoji:'🪴', label:'Just Because', desc:'No occasion needed. Plants make every day better.' },
];

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [activeOcc, setActiveOcc] = useState(0);
  const [plantIdx, setPlantIdx] = useState(0);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (cursorRef.current) { cursorRef.current.style.left=e.clientX+'px'; cursorRef.current.style.top=e.clientY+'px'; }
      if (cursorDotRef.current) { cursorDotRef.current.style.left=e.clientX+'px'; cursorDotRef.current.style.top=e.clientY+'px'; }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    if (titleRef.current) {
      const words = 'Living keepsakes for lasting bonds.'.split(' ');
      titleRef.current.innerHTML = '';
      words.forEach((w, i) => {
        const s = document.createElement('span');
        s.className='word'; s.textContent=w;
        s.style.transitionDelay=`${0.15+i*0.12}s`;
        titleRef.current?.appendChild(s);
        if (i<words.length-1) titleRef.current?.appendChild(document.createTextNode(' '));
      });
      setTimeout(() => titleRef.current?.classList.add('animate'), 300);
    }
    setTimeout(() => heroRef.current?.classList.add('loaded'), 200);
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
    }, { threshold:0.1, rootMargin:'0px 0px -40px 0px' });
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger-children').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const t = setInterval(() => setActiveOcc(i => (i+1)%OCCASIONS.length), 3000);
    return () => clearInterval(t);
  }, [playing]);

  useEffect(() => {
    const t = setInterval(() => setPlantIdx(i => (i+1)%PLANTS.length), 4000);
    return () => clearInterval(t);
  }, []);

  const hov = (el: HTMLElement, on: boolean) => {
    el.style.transform = on ? 'translateY(-8px)' : '';
    el.style.boxShadow = on ? 'var(--shadow-xl)' : 'var(--shadow-md)';
  };

  return (
    <>
      {/* Custom cursor — desktop only */}
      <div ref={cursorRef} className="custom-cursor-ring" style={{position:'fixed',width:40,height:40,borderRadius:'50%',border:'1.5px solid var(--sage)',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)',transition:'left 0.12s ease,top 0.12s ease',mixBlendMode:'multiply' as const}} />
      <div ref={cursorDotRef} className="custom-cursor-dot" style={{position:'fixed',width:6,height:6,borderRadius:'50%',background:'var(--sage-dark)',pointerEvents:'none',zIndex:9999,transform:'translate(-50%,-50%)',transition:'left 0.04s linear,top 0.04s linear'}} />

      {/* ═══ HERO ═══ */}
      <section className="hero" id="home" ref={heroRef}>
        <div className="hero-bg">
          <img src="/images/hero_lifestyle_1789493704655.jpg" alt="Premium Monstera plant in a Suva Botanica gift box on a marble console table" />
        </div>
        <div className="hero-overlay" />
        <svg className="hero-botanical hero-botanical-1" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <path d="M100 180C100 180 60 140 40 100C20 60 30 20 70 10C110 0 120 40 100 80C80 120 100 180 100 180Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M100 180C100 180 140 140 160 100C180 60 170 20 130 10C90 0 80 40 100 80C120 120 100 180 100 180Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M100 180V60" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>
        <svg className="hero-botanical hero-botanical-2" viewBox="0 0 150 150" fill="none" aria-hidden="true">
          <path d="M75 140C75 140 45 110 35 75C25 40 40 15 65 10C90 5 95 30 80 55C65 80 75 140 75 140Z" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.4"/>
          <path d="M75 140V50" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
        </svg>

        <div className="container hero-content">
          <span className="section-label reveal visible">Suva Botanica · Pune</span>
          <h1 className="hero-title" ref={titleRef}>Living keepsakes for lasting bonds.</h1>
          <p className="hero-subtitle reveal visible">Curated, lab-grown plants — styled in gift-ready packaging, delivered across Pune. For the moments that deserve more than flowers.</p>
          <div className="hero-actions reveal visible">
            <MagneticBtn href="/plants" className="btn btn-primary">Explore Collection →</MagneticBtn>
            <MagneticBtn href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica!%20I'd%20like%20to%20order%20a%20plant." className="btn btn-secondary" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</MagneticBtn>
          </div>
          {/* Live badge — now BELOW the buttons so it doesn't overlap title on mobile */}
          <div style={{display:'inline-flex',alignItems:'center',gap:'0.5rem',marginTop:'1.5rem',background:'rgba(255,255,255,0.88)',backdropFilter:'blur(20px)',border:'1px solid rgba(139,158,130,0.3)',borderRadius:'50px',padding:'0.45rem 1rem',fontSize:'0.8rem',fontWeight:600,color:'var(--sage-dark)'}} className="reveal visible">
            <span style={{width:8,height:8,borderRadius:'50%',background:'#22c55e',display:'inline-block',animation:'pulse 2s infinite'}} />
            Pune Delivery Available
          </div>
          <div className="hero-mini-stats reveal visible">
            {[{n:36,s:'+',l:'Plant Varieties'},{n:30,s:'-Day',l:'Health Promise'},{n:500,s:'+',l:'Happy Customers'}].map(({n,s,l})=>(
              <div key={l}>
                <div style={{fontFamily:'var(--font-display)',fontSize:'2rem',fontWeight:700,color:'var(--forest)',lineHeight:1}}><Counter to={n} suffix={s}/></div>
                <div style={{fontSize:'0.75rem',color:'var(--text-secondary)',letterSpacing:'0.05em',marginTop:'0.25rem'}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="scroll-indicator" aria-hidden="true"><span>Scroll</span><div className="scroll-line"/></div>
      </section>

      {/* ═══ TRUST STRIP ═══ */}
      <section className="trust-strip" aria-label="Brand promises">
        <div className="container">
          <div className="trust-items stagger-children">
            {[
              {title:'Lab-Grown, Virus-Free',sub:'Tissue-cultured for guaranteed health'},
              {title:'Same/Next-Day in Pune',sub:'Hyperlocal delivery, zero transit stress'},
              {title:'30-Day Health Promise',sub:"Free replacement if it doesn't thrive"},
              {title:'Gift-Ready, Always',sub:'Premium packaging, no extra charge'},
            ].map(({title,sub},i)=>(
              <div className="trust-item" key={title}>
                <div className="trust-icon" style={{transition:'transform 0.3s'}} onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='scale(1.15) rotate(-5deg)'} onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform=''}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {i===0&&<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>}
                    {i===1&&<><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>}
                    {i===2&&<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>}
                    {i===3&&<><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></>}
                  </svg>
                </div>
                <div className="trust-text"><h4>{title}</h4><p>{sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PLANTS ═══ */}
      <section style={{padding:'var(--space-3xl) 0',background:'var(--cream-warm)',overflow:'hidden'}}>
        <div className="container">
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <span className="section-label reveal">Our Collection</span>
            <h2 className="reveal" style={{marginBottom:'1rem'}}>36 Varieties. One Perfect Match.</h2>
            <p className="subtitle reveal" style={{margin:'0 auto',textAlign:'center'}}>From air-purifying champions to statement foliage — every plant hand-selected, lab-grown, and gift-ready.</p>
          </div>
          {/* Carousel: 1 card on mobile, 3 on desktop */}
          <div className="plant-carousel-wrap reveal">
            <div className="plant-carousel-track" style={{'--slide-idx': plantIdx} as React.CSSProperties}>
              {[...PLANTS,...PLANTS].map((p,i)=>(
                <Link href={`/plants/${p.slug}`} key={`${p.slug}-${i}`} className="plant-card"
                  onMouseEnter={e=>hov(e.currentTarget as HTMLElement,true)}
                  onMouseLeave={e=>hov(e.currentTarget as HTMLElement,false)}>
                  <div style={{fontSize:'3.5rem',marginBottom:'1rem',lineHeight:1}}>{p.emoji}</div>
                  <span className="plant-tag">{p.tag}</span>
                  <h3 className="plant-name">{p.name}</h3>
                  <p className="plant-desc">{p.desc}</p>
                  <div style={{marginTop:'1.25rem',color:'var(--sage-dark)',fontSize:'0.875rem',fontWeight:600}}>View Details →</div>
                </Link>
              ))}
            </div>
            <div style={{display:'flex',gap:'0.5rem',justifyContent:'center',marginTop:'2rem'}}>
              {PLANTS.map((_,i)=>(
                <button key={i} onClick={()=>setPlantIdx(i)} style={{width:i===plantIdx?24:8,height:8,borderRadius:50,border:'none',background:i===plantIdx?'var(--sage-dark)':'var(--sage-light)',cursor:'pointer',transition:'all 0.3s',padding:0}}/>
              ))}
            </div>
          </div>
          <div style={{textAlign:'center',marginTop:'2.5rem'}}>
            <Link href="/plants" className="btn btn-primary">View All 36 Plants</Link>
          </div>
        </div>
      </section>

      {/* ═══ OCCASIONS ═══ */}
      <section style={{padding:'var(--space-3xl) 0',background:'var(--white)'}}>
        <div className="container">
          <div className="occasions-grid">
            <div>
              <span className="section-label reveal">Perfect For</span>
              <h2 className="reveal" style={{marginBottom:'2rem'}}>A Plant for Every Occasion</h2>
              <div style={{display:'flex',flexDirection:'column' as const,gap:'0.75rem'}}>
                {OCCASIONS.map((occ,i)=>(
                  <div key={occ.label} onClick={()=>{setActiveOcc(i);setPlaying(false);}}
                    style={{display:'flex',alignItems:'center',gap:'1rem',padding:'0.875rem 1.25rem',borderRadius:'var(--radius-md)',cursor:'pointer',background:activeOcc===i?'linear-gradient(135deg,var(--sage-light),rgba(139,158,130,0.1))':'transparent',border:activeOcc===i?'1px solid rgba(139,158,130,0.3)':'1px solid transparent',transition:'all 0.4s cubic-bezier(0.16,1,0.3,1)',transform:activeOcc===i?'translateX(8px)':''}}>
                    <span style={{fontSize:'1.5rem',flexShrink:0}}>{occ.emoji}</span>
                    <div>
                      <div style={{fontWeight:600,color:activeOcc===i?'var(--forest)':'var(--charcoal)',fontSize:'0.95rem'}}>{occ.label}</div>
                      {activeOcc===i&&<div style={{fontSize:'0.8rem',color:'var(--text-secondary)',marginTop:'0.2rem'}}>{occ.desc}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{position:'relative'}} className="reveal-right occasions-panel">
              <div style={{background:'linear-gradient(135deg,var(--forest),var(--sage-dark))',borderRadius:'var(--radius-xl)',padding:'2.5rem',color:'var(--white)',textAlign:'center' as const,boxShadow:'var(--shadow-xl)'}}>
                <div style={{fontSize:'4rem',marginBottom:'1.25rem',animation:'floatSlow 4s ease-in-out infinite'}}>{OCCASIONS[activeOcc].emoji}</div>
                <h3 style={{color:'var(--white)',fontSize:'1.5rem',marginBottom:'0.75rem'}}>{OCCASIONS[activeOcc].label}</h3>
                <p style={{opacity:0.85,lineHeight:1.7,fontSize:'0.9rem',marginBottom:'1.5rem'}}>{OCCASIONS[activeOcc].desc}</p>
                <a href={`https://wa.me/919518780272?text=Hi!%20I%20need%20a%20plant%20for%20${encodeURIComponent(OCCASIONS[activeOcc].label)}`} className="btn" target="_blank" rel="noopener noreferrer" style={{background:'rgba(255,255,255,0.15)',color:'var(--white)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.3)',fontSize:'0.875rem',padding:'0.75rem 1.5rem'}}>Order for {OCCASIONS[activeOcc].label} →</a>
              </div>
              <div style={{position:'absolute',top:'-1rem',right:'-1rem',background:'var(--terracotta)',color:'var(--white)',borderRadius:'50%',width:64,height:64,display:'flex',flexDirection:'column' as const,alignItems:'center',justifyContent:'center',fontSize:'0.6rem',fontWeight:700,textAlign:'center' as const,letterSpacing:'0.05em',boxShadow:'0 4px 20px rgba(196,149,106,0.4)',animation:'floatSlow 3s ease-in-out infinite'}}>GIFT<br/>READY</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORPORATE ═══ */}
      <section className="corporate" id="corporate">
        <div className="container">
          <div className="corporate-inner">
            <div className="corporate-text">
              <span className="section-label" style={{color:'var(--sage-light)'}}>For Business</span>
              <h2 className="reveal-left">Bulk gifting &amp; event styling for teams, weddings, and venues across Pune.</h2>
              <p className="subtitle reveal-left" style={{color:'rgba(247,243,237,0.8)',transitionDelay:'0.1s'}}>From employee onboarding kits to wedding venue greenery — we bring curated plants to your most important occasions at scale.</p>
              <div className="offer-cards stagger-children">
                {[
                  {e:'💼',t:'Corporate Bulk Gifting',d:'Onboarding kits, Diwali gifting, client appreciation — branded, packaged, delivered.'},
                  {e:'🌿',t:'Event Styling',d:'Weddings, conferences, hotel lobbies — styled with living plants.'},
                  {e:'🏢',t:'Office Subscription',d:'Monthly curated plants for your workspace. We handle care, you enjoy the green.'},
                ].map(({e,t,d})=>(
                  <div className="offer-card" key={t} onMouseEnter={el=>(el.currentTarget as HTMLElement).style.transform='translateY(-4px) scale(1.02)'} onMouseLeave={el=>(el.currentTarget as HTMLElement).style.transform=''} style={{transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s'}}>
                    <h3>{e} {t}</h3><p>{d}</p>
                  </div>
                ))}
              </div>
              <div className="corporate-form reveal">
                <h3>Get a Custom Quote</h3>
                <MagneticBtn href="https://wa.me/919518780272?text=Hi!%20I'm%20interested%20in%20corporate%20gifting%20/%20event%20styling." className="btn btn-primary" target="_blank" rel="noopener noreferrer">Send WhatsApp Enquiry</MagneticBtn>
              </div>
            </div>
            <div className="corporate-visual reveal-right">
              <img src="/images/corporate_events_1789493915355.jpg" alt="Corporate workspace styled with premium Suva Botanica plants" loading="lazy" style={{transition:'transform 0.5s ease'}} onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='scale(1.03)'} onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform=''}/>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-hero">
            <div className="about-text">
              <span className="section-label reveal">About Suva Botanica</span>
              <h2 className="reveal">The Art of the Living Keepsake</h2>
              <p className="reveal">Welcome to Suva Botanica. We believe the best gifts don&apos;t sit on a shelf gathering dust — they live, they breathe, and they grow alongside you.</p>
              <p className="reveal">We created Suva Botanica to bridge the gap between premium interior aesthetics and meaningful gifting. Whether celebrating an anniversary, elevating a corporate workspace, or warming a new home, we curate botanical pieces that serve as living memories.</p>
              <div className="reveal" style={{marginTop:'1.5rem'}}>
                <Link href="/about" className="btn btn-secondary">Read Our Story →</Link>
              </div>
            </div>
            <div className="about-image reveal-right">
              <img src="/images/about_lab_1789493928791.jpg" alt="Suva Botanica tissue culture laboratory" loading="lazy" style={{transition:'transform 0.6s ease'}} onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='scale(1.04) rotate(-1deg)'} onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform=''}/>
            </div>
          </div>
          <div className="process-section">
            <span className="section-label reveal">The Science</span>
            <h2 className="reveal">The Lab-to-Living Room Advantage</h2>
            <p className="subtitle reveal" style={{maxWidth:720,marginBottom:'3rem'}}>Most online nurseries act as middlemen. We source directly from cutting-edge tissue-culture environments — every plant begins life in a sterile, climate-controlled lab.</p>
            <div className="process-steps stagger-children">
              {[
                {num:'01',title:'Virus-Free & Pristine',desc:'Engineered for absolute health — no hidden pests or diseases, ever.'},
                {num:'02',title:'Architectural Perfection',desc:'Grown for optimal leaf structure — each plant is a design object.'},
                {num:'03',title:'Built-In Resilience',desc:'Cultivated to thrive indoors with minimal maintenance — designed for real life.'},
              ].map(({num,title,desc})=>(
                <div className="process-step" key={num}>
                  <div className="step-icon" style={{transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)'}} onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='scale(1.1) rotate(-5deg)'} onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform=''}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {num==='01'&&<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>}
                      {num==='02'&&<><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>}
                      {num==='03'&&<><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></>}
                    </svg>
                  </div>
                  <span className="step-number">Advantage {num}</span>
                  <h3>{title}</h3><p>{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-cta-section">
            <div className="about-cta-inner reveal">
              <h2>Designed for Your Space</h2>
              <p>Every plant we deliver is hand-potted in a premium matte ceramic vessel and secured with our proprietary soil-lock transit packaging. From our cultivation centres to your Pune doorstep — flawlessly.</p>
              <p className="about-tagline">Suva Botanica. Curated greenery for curated spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{padding:'var(--space-3xl) 0',background:'linear-gradient(135deg,var(--forest) 0%,var(--forest-deep) 100%)',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,opacity:0.04,backgroundImage:'radial-gradient(circle,rgba(255,255,255,0.8) 1px,transparent 1px)',backgroundSize:'40px 40px'}}/>
        <div className="container" style={{position:'relative'}}>
          <div className="stats-grid stagger-children">
            {[{n:36,s:'+',l:'Plant Varieties',i:'🌿'},{n:30,s:' Day',l:'Health Guarantee',i:'💚'},{n:100,s:'%',l:'Tissue Cultured',i:'🧬'},{n:500,s:'+',l:'Happy Customers',i:'⭐'}].map(({n,s,l,i})=>(
              <div key={l} style={{padding:'2rem 1rem',textAlign:'center' as const}}>
                <div style={{fontSize:'2rem',marginBottom:'0.5rem'}}>{i}</div>
                <div style={{fontFamily:'var(--font-display)',fontSize:'clamp(2rem,4vw,3.5rem)',fontWeight:700,color:'var(--white)',lineHeight:1}}><Counter to={n} suffix={s}/></div>
                <div style={{color:'rgba(247,243,237,0.7)',fontSize:'0.875rem',marginTop:'0.5rem',letterSpacing:'0.05em'}}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonials" id="testimonials">
        <div className="container">
          <div className="section-header reveal"><span className="section-label">Kind Words</span><h2>What Our Customers Say</h2></div>
          <div className="testimonials-grid stagger-children">
            {[
              {q:"Ordered a Monstera for my sister's housewarming — packaging was so beautiful she almost didn't want to open it. Still thriving three months later!",a:'Priya M.',o:'Housewarming Gift'},
              {q:"Gifted 50 plants for our Diwali employee gifting. Suva Botanica handled everything — branding, packaging, delivery to individual homes. Seamless.",a:'Rahul K.',o:'Corporate Gifting · 50 plants'},
              {q:"Finally a plant brand that treats plants like the luxury gifts they are. The ZZ Plant was perfect — healthy, beautifully potted, care card was a lovely touch.",a:'Ananya S.',o:'Birthday Gift'},
            ].map(({q,a,o})=>(
              <div className="testimonial-card" key={a} onMouseEnter={e=>(e.currentTarget as HTMLElement).style.transform='translateY(-8px)'} onMouseLeave={e=>(e.currentTarget as HTMLElement).style.transform=''} style={{transition:'transform 0.3s cubic-bezier(0.34,1.56,0.64,1)'}}>
                <div className="testimonial-stars">★★★★★</div>
                <span className="testimonial-quote-mark">&ldquo;</span>
                <blockquote>{q}</blockquote>
                <p className="testimonial-author">{a}</p>
                <span className="testimonial-occasion">{o}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INSTAGRAM ═══ */}
      <section style={{padding:'var(--space-3xl) 0',background:'var(--cream-warm)',textAlign:'center' as const}}>
        <div className="container">
          <span className="section-label reveal">Follow the Journey</span>
          <h2 className="reveal" style={{marginBottom:'1rem'}}>@suvabotanica on Instagram</h2>
          <p className="subtitle reveal" style={{margin:'0 auto 2rem',textAlign:'center'}}>Behind-the-scenes at our lab, new arrivals, styling inspo &amp; happy unboxings.</p>
          <div className="reveal">
            <MagneticBtn href="https://www.instagram.com/suvabotanica?stkn=NjBwZ29lOHNsMXlm" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" style={{marginRight:'0.5rem'}}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @suvabotanica
            </MagneticBtn>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{padding:'var(--space-3xl) 0',background:'linear-gradient(135deg,var(--sage-dark),var(--forest))',position:'relative',overflow:'hidden',textAlign:'center' as const}}>
        <div style={{position:'absolute',inset:0,backgroundImage:'radial-gradient(ellipse at 20% 50%,rgba(184,150,90,0.15),transparent 60%),radial-gradient(ellipse at 80% 50%,rgba(139,158,130,0.2),transparent 60%)'}}/>
        <div className="container" style={{position:'relative'}}>
          <span className="section-label reveal" style={{color:'rgba(255,255,255,0.6)'}}>Ready to Order?</span>
          <h2 className="reveal" style={{color:'var(--white)',maxWidth:600,margin:'0 auto 1rem',fontSize:'clamp(1.75rem,3vw,2.5rem)'}}>Send a plant that lasts longer than flowers.</h2>
          <p className="reveal" style={{color:'rgba(255,255,255,0.75)',maxWidth:480,margin:'0 auto 2.5rem',lineHeight:1.8}}>WhatsApp us to order, customise packaging, or ask about bulk gifting. Same/next-day delivery across Pune.</p>
          <div className="reveal" style={{display:'flex',gap:'1rem',justifyContent:'center',flexWrap:'wrap' as const}}>
            <MagneticBtn href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica!%20I'd%20like%20to%20order%20a%20plant." className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </MagneticBtn>
            <MagneticBtn href="/plants" className="btn" style={{background:'rgba(255,255,255,0.15)',color:'var(--white)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.3)'}}>Browse All Plants</MagneticBtn>
            <MagneticBtn href="/contact" className="btn" style={{background:'rgba(255,255,255,0.15)',color:'var(--white)',backdropFilter:'blur(10px)',border:'1px solid rgba(255,255,255,0.3)'}}>Contact Us</MagneticBtn>
          </div>
          <div className="reveal" style={{marginTop:'3rem',display:'flex',gap:'2rem',justifyContent:'center',flexWrap:'wrap' as const,opacity:0.75,fontSize:'0.875rem',color:'var(--white)'}}>
            <span>📞 +91 95187 80272</span><span>✉️ suvabotanica@gmail.com</span><span>📍 Pune, Maharashtra</span>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a href="https://wa.me/919518780272?text=Hi%20Suva%20Botanica!%20I'd%20like%20to%20order%20a%20plant." className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      </a>

      <style>{`
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.6;transform:scale(1.4)}}

        /* ── Hero mini stats ── */
        .hero-mini-stats{
          display:flex;gap:2rem;margin-top:2rem;
        }

        /* ── Plant carousel ── */
        .plant-carousel-wrap{overflow:hidden;}
        .plant-carousel-track{
          display:flex;
          gap:1.5rem;
          transform: translateX(calc(var(--slide-idx, 0) * -1 * (33.333% + 0.5rem)));
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .plant-card{
          flex:0 0 calc(33.333% - 1rem);
          min-width:calc(33.333% - 1rem);
          background:var(--white);
          border-radius:var(--radius-lg);
          padding:2rem;
          box-shadow:var(--shadow-md);
          transition:transform 0.3s cubic-bezier(0.34,1.56,0.64,1),box-shadow 0.3s;
          cursor:pointer;
          text-decoration:none;
          display:block;
          border:1px solid rgba(139,158,130,0.1);
        }
        .plant-tag{
          display:inline-block;
          background:var(--sage-light);
          color:var(--sage-dark);
          font-size:0.7rem;
          font-weight:600;
          letter-spacing:0.1em;
          text-transform:uppercase;
          padding:0.2rem 0.75rem;
          border-radius:50px;
          margin-bottom:0.75rem;
        }
        .plant-name{
          font-size:1.25rem;
          margin-bottom:0.5rem;
          color:var(--forest);
          white-space:nowrap;
          overflow:hidden;
          text-overflow:ellipsis;
        }
        .plant-desc{
          font-size:0.875rem;
          color:var(--text-secondary);
          line-height:1.6;
        }

        /* ── Occasions ── */
        .occasions-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:4rem;
          align-items:center;
        }

        /* ── Stats ── */
        .stats-grid{
          display:grid;
          grid-template-columns:repeat(4,1fr);
          gap:2rem;
        }

        /* ══ MOBILE OVERRIDES ══ */
        @media(max-width:768px){
          /* Hide desktop cursor */
          .custom-cursor-ring,.custom-cursor-dot{display:none !important;}

          /* Hero: reduce font size of stats */
          .hero-mini-stats{gap:1.25rem;margin-top:1.5rem;}
          .hero-mini-stats > div > div:first-child{font-size:1.5rem !important;}

          /* Plant carousel: 1 card full-width */
          .plant-card{
            flex:0 0 calc(100% - 0px);
            min-width:calc(100%);
            padding:1.5rem;
          }
          .plant-carousel-track{
            gap:0;
            transform: translateX(calc(var(--slide-idx, 0) * -100%));
          }
          .plant-name{
            white-space:normal;
            font-size:1.125rem;
          }

          /* Occasions: stack vertically */
          .occasions-grid{
            grid-template-columns:1fr;
            gap:2rem;
          }
          .occasions-panel{
            margin-top:0;
          }

          /* Stats: 2x2 */
          .stats-grid{
            grid-template-columns:repeat(2,1fr);
            gap:0;
          }
          .stats-grid > div{
            padding:1.5rem 0.75rem;
          }

          /* Trust strip: 2x2 on mobile */
          .trust-items{
            grid-template-columns:repeat(2,1fr) !important;
            gap:1rem !important;
          }
          .trust-item{flex-direction:column;text-align:center;}
          .trust-icon{margin:0 auto;}
        }

        @media(max-width:480px){
          /* Even smaller: 1 col trust strip */
          .trust-items{grid-template-columns:1fr !important;}
          .trust-item{flex-direction:row;text-align:left;}
          .trust-icon{margin:0;}
          .hero-mini-stats{gap:1rem;}
          .hero-mini-stats > div > div:first-child{font-size:1.25rem !important;}
        }
      `}</style>
    </>
  );
}

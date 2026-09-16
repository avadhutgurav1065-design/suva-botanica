- [x] **Project Setup & Architecture**
  - [x] Initialize Next.js 16 (App Router) + TypeScript + Tailwind CSS
  - [x] Install `framer-motion` for animations
  - [x] Set up global CSS tokens (colors, typography, spacing, easing)
  - [x] Archive legacy Vanilla JS/HTML prototype

- [x] **Data Structure & Config**
  - [x] Create `site-config.ts` (brand data, links, WhatsApp configuration)
  - [x] Create `plants.ts` (structured product data for curation)

- [x] **Global Components (The Frame)**
  - [x] `Header.tsx` (Glassmorphism nav, transparent-to-solid on scroll, mobile menu)
  - [x] `Footer.tsx` (Structured brand footer with policy links)
  - [x] `WhatsAppFloat.tsx` (Floating CTA with pulsing rings)
  - [x] `PageTransition.tsx` (Framer motion page routing wrapper)
  - [x] `CursorTrail.tsx` (Custom premium cursor effect)
  - [x] `ScrollReveal.tsx` (Reusable scroll-driven animations)

- [x] **Pages Execution**
  - [x] **Home Page (`/`)**: High-end landing with Parallax Hero, Animated Trust Bar, "Shop by Occasion" dynamic grid, Brand Story block, and Testimonials.
  - [x] **About Us (`/about`)**: Full story, "Lab-to-Living-Room" advantage, grid of features.
  - [x] **Plant Listing (`/plants`)**: Full catalog with animated Occasion-based filtering and hover state reveals.
  - [x] **Plant Details (`/plants/[slug]`)**: Dynamic QR-ready pages with sticky images, calculated discounts, animated care guides, and direct-to-WhatsApp order triggers.
  - [x] **Contact (`/contact`)**: Split layout with contact info and styled (but non-functional) email form.
  - [x] **Policies Suite (`/policies/*`)**: Standardized layouts for Terms, Privacy, Disclaimer, Shipping, and Returns.

- [x] **Optimization & Polish**
  - [x] Configure SEO Metadata API globally and per-page
  - [x] Mobile responsiveness audits across all pages
  - [x] Production build testing (fixed `useSearchParams` Suspense boundary)

// ════════════════════════════════════════════════════════════════
// Suva Botanica — Site Configuration
// Central config for brand identity, contact, SEO, and social links.
// ════════════════════════════════════════════════════════════════

export const siteConfig = {
  name: 'Suva Botanica',
  tagline: 'Curated Greenery for Curated Spaces',
  description:
    'Premium tissue-cultured plants in designer planters. The perfect living gift for housewarmings, anniversaries, birthdays, and corporate events. Pune-first delivery.',
  url: 'https://suva-botanica.vercel.app',
  ogImage: '/images/og-image.jpg',

  contact: {
    whatsapp: '919518780272',
    whatsappUrl: (message: string) =>
      `https://wa.me/919518780272?text=${encodeURIComponent(message)}`,
    defaultWhatsappMessage:
      "Hi Suva Botanica! I'd like to know more about your plants.",
    email: 'suvabotanica@gmail.com',
    phone: '+91 95187 80272',
    address: 'Pune, Maharashtra, India',
  },

  social: {
    instagram: 'https://www.instagram.com/suvabotanica?stkn=NjBwZ29lOHNsMXlm',
  },

  nav: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Our Plants', href: '/plants' },
      { label: 'Contact', href: '/contact' },
    ],
    policies: [
      { label: 'Terms & Conditions', href: '/policies/terms' },
      { label: 'Privacy Policy', href: '/policies/privacy' },
      { label: 'Disclaimer', href: '/policies/disclaimer' },
      { label: 'Shipping & Delivery', href: '/policies/shipping' },
      { label: 'Returns & Guarantee', href: '/policies/returns' },
    ],
  },
} as const;

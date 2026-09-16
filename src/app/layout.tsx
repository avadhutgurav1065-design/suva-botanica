import { ReactNode } from 'react';
import '../styles/globals.css';
import Navigation from '@/components/Navigation';
import CursorTrail from '@/components/CursorTrail';
import ScrollColorShift from '@/components/ScrollColorShift';

export const metadata = {
  title: 'Suva Botanica | The Art of the Living Keepsake',
  description: 'Premium curated plants for gifting and modern spaces in Pune.',
  icons: {
    icon: '/images/logo-transparent.png',
  },
  openGraph: {
    title: 'Suva Botanica',
    description: 'Premium curated plants for gifting and modern spaces in Pune.',
    images: [{ url: '/images/logo-bg.jpg' }],
  },
};

import Footer from '@/components/layout/Footer';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CursorTrail />
        <ScrollColorShift />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

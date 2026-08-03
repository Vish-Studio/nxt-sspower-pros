import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import { LenisProvider } from '@/components/lenis-provider/lenis-provider';
import './globals.css';

const urbanist = Urbanist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-urbanist',
});

export const metadata: Metadata = {
  title: 'SS Power Pros | Electrical, AC, Plumbing & Home Maintenance Contractor',
  description:
    'Book SS Power Pros for electrical repairs, AC service, plumbing repairs and home maintenance from one dependable local contractor.',
  keywords: [
    'electrical contractor',
    'AC repair',
    'plumbing repair',
    'home maintenance',
    'house maintenance contractor',
    'electrical repairs',
    'air conditioning service',
    'local contractor',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'SS Power Pros | Electrical, AC, Plumbing & Home Maintenance',
    description:
      'Electrical, AC, plumbing and home maintenance handled by one responsive contractor.',
    type: 'website',
    siteName: 'SS Power Pros',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=82',
        width: 1200,
        height: 630,
        alt: 'Residential electrical service by SS Power Pros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SS Power Pros | Electrical, AC, Plumbing & Home Maintenance',
    description:
      'Book one responsive contractor for electrical repairs, AC service, plumbing and house maintenance.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body className={urbanist.className}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

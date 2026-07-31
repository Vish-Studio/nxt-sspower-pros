import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SS Power Pros | Electrical, HVAC, Plumbing & Home Maintenance',
  description:
    'A high-converting single-page website for a trusted contractor offering electrical, air conditioning, plumbing and home maintenance services.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

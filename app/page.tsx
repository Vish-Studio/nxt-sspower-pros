import { BeforeAfterSection } from '@/components/before-after-section/before-after-section';
import { CtaSection } from '@/components/cta-section/cta-section';
import { FooterSection } from '@/components/footer-section/footer-section';
import { HeroSection } from '@/components/hero-section/hero-section';
import { RecentWorkSection } from '@/components/recent-work-section/recent-work-section';
import { RepairSection } from '@/components/repair-section/repair-section';
import { ServicesSection } from '@/components/services-section/services-section';
import { SiteNavigation } from '@/components/site-navigation/site-navigation';
import { TestimonialsSection } from '@/components/testimonials-section/testimonials-section';
import { TrustSection } from '@/components/trust-section/trust-section';

export default function HomePage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'SS Power Pros',
    description:
      'Electrical, air conditioning, plumbing and home maintenance contractor.',
    telephone: '+1234567890',
    areaServed: 'Local residential service area',
    serviceType: [
      'Electrical repairs',
      'Air conditioning service',
      'Plumbing repairs',
      'Home maintenance',
    ],
    url: 'https://vish-studio.github.io/react-sspower-pros',
  };

  return (
    <>
      <SiteNavigation />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <RecentWorkSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <RepairSection />
        <CtaSection />
      </main>
      <FooterSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
}

import { AboutSection } from '@/components/about-section';
import { CtaSection } from '@/components/cta-section';
import { FooterSection } from '@/components/footer-section';
import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}

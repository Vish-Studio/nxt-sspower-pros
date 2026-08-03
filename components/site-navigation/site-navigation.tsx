import { Bolt, PhoneCall } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book', href: '#contact' },
];

export function SiteNavigation() {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <a href="#home" className="brand-mark" aria-label="SS Power Pros home">
          <span className="brand-mark__bolt">
            <Bolt size={19} fill="currentColor" aria-hidden="true" />
          </span>
          <span>SS Power Pros</span>
        </a>
        <nav className="site-nav__links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="site-nav__actions">
          <CustomButton href="tel:+1234567890" variant="primary" icon={PhoneCall}>
            Call now
          </CustomButton>
        </div>
      </div>
    </header>
  );
}

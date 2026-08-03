import { ClipboardCheck, Clock3, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';

const trustItems = [
  {
    title: 'Fast call-backs',
    copy: 'Clear next steps for urgent repair requests.',
    icon: Clock3,
  },
  {
    title: 'One contractor',
    copy: 'Electrical, AC, plumbing and maintenance in one place.',
    icon: ClipboardCheck,
  },
  {
    title: 'Clean handoff',
    copy: 'Straight answers before work starts.',
    icon: ShieldCheck,
  },
];

export function TrustSection() {
  return (
    <section className="trust-section" aria-label="Why clients choose SS Power Pros">
      <div className="container trust-grid">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.title} as="article" className="trust-card" delay={index * 0.06}>
              <Icon size={22} aria-hidden="true" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.copy}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

import Image from 'next/image';
import { ArrowRight, PhoneCall } from 'lucide-react';
import { CustomButton } from '@/components/custom-button/custom-button';
import { Reveal } from '@/components/reveal/reveal';

const repairSignals = [
  'Breaker trips or outlets stop working',
  'AC runs but the room stays warm',
  'Leaks, clogged drains or water heater issues',
  'Small repairs piling up around the house',
];

export function RepairSection() {
  return (
    <section className="repair-section">
      <div className="container repair-grid">
        <Reveal className="repair-media" direction="left">
          <Image
            src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=1200&q=82"
            alt="Contractor tools ready for home repair service"
            fill
            sizes="(max-width: 980px) 100vw, 45vw"
          />
        </Reveal>
        <Reveal className="repair-copy" direction="right">
          <div className="eyebrow">When to call</div>
          <h2>Small problems get expensive when they wait.</h2>
          <ul>
            {repairSignals.map((item) => (
              <li key={item}>
                <ArrowRight size={17} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <CustomButton href="tel:+1234567890" icon={PhoneCall}>
            Call for availability
          </CustomButton>
        </Reveal>
      </div>
    </section>
  );
}

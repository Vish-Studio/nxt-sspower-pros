import Image from 'next/image';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';

const proofItems = [
  'Clear arrival windows',
  'Clean work areas',
  'Repair-first advice',
  'Maintenance planning',
];

export function ProofSection() {
  return (
    <section id="proof" className="proof">
      <div className="container proof__grid">
        <Reveal className="proof__copy" direction="left">
          <div className="eyebrow">
            <ShieldCheck size={17} aria-hidden="true" />
            Built for trust
          </div>
          <h2>Trust signals that help people book.</h2>
          <p>
            Homeowners convert when the next step feels low-risk: fast response, clear
            communication and a professional handoff.
          </p>
          <ul className="proof-list">
            {proofItems.map((item) => (
              <li key={item} className="check-row">
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="proof-card" direction="right">
          <Image
            className="proof-card__image"
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1300&q=82"
            alt="Contractor using tools for residential repair work"
            fill
            sizes="(max-width: 980px) 100vw, 48vw"
          />
          <div className="proof-card__caption">
            <strong>Repair, install, maintain.</strong>
            <span>One intake flow directs electrical, cooling, plumbing and maintenance work.</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { ClipboardCheck } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';

const steps = [
  {
    title: 'Tell us the issue',
    copy: 'A short call captures the system, urgency, address and any access notes so the visit starts correctly.',
  },
  {
    title: 'Get a clear plan',
    copy: 'You know who is coming, what happens first, and whether the job needs diagnosis, repair or an estimate.',
  },
  {
    title: 'Approve the work',
    copy: 'The technician explains the practical options before work begins, then closes with a clean handoff.',
  },
];

export function ProcessSection() {
  return (
    <section id="process">
      <div className="container">
        <SectionHeading
          eyebrow={
            <>
              <ClipboardCheck size={17} aria-hidden="true" />
              Booking flow
            </>
          }
          title="From problem to booked visit in minutes."
          copy="Short intake, clear routing, technician visit. No bloated quote process."
        />

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.title} as="article" className="process-card" delay={index * 0.08}>
              <span className="process-card__number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';

const transformations = [
  {
    title: 'Electrical panel cleanup',
    before:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=82',
    after:
      'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=82',
    result: 'Safer labeling, cleaner routing and a clear handoff.',
  },
  {
    title: 'Plumbing leak repair',
    before:
      'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=900&q=82',
    after:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=82',
    result: 'Leak isolated, fittings replaced and area left tidy.',
  },
];

export function BeforeAfterSection() {
  return (
    <section className="before-after-section" aria-labelledby="before-after-heading">
      <div className="container">
        <SectionHeading
          eyebrow={
            <>
              <Sparkles size={17} aria-hidden="true" />
              Before and after
            </>
          }
          title="Small fixes. Visible difference."
          copy="Simple proof of the kind of clean, practical repair work clients remember."
        />

        <div className="before-after-grid">
          {transformations.map((item, index) => (
            <Reveal
              key={item.title}
              as="article"
              className="before-after-card"
              delay={index * 0.08}
            >
              <div className="before-after-card__media">
                <div>
                  <Image
                    src={item.before}
                    alt={`${item.title} before service`}
                    fill
                    sizes="(max-width: 980px) 50vw, 330px"
                  />
                  <span>Before</span>
                </div>
                <div>
                  <Image
                    src={item.after}
                    alt={`${item.title} after service`}
                    fill
                    sizes="(max-width: 980px) 50vw, 330px"
                  />
                  <span>After</span>
                </div>
              </div>
              <div className="before-after-card__content">
                <h2>{item.title}</h2>
                <ArrowRight size={19} aria-hidden="true" />
                <p>{item.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

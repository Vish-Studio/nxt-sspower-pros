import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/reveal/reveal';
import { SectionHeading } from '@/components/section-heading/section-heading';

const projects = [
  {
    title: 'Panel upgrade',
    category: 'Electrical',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'Bath plumbing',
    category: 'Plumbing',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=900&q=82',
  },
  {
    title: 'AC maintenance',
    category: 'Cooling',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=82',
  },
];

const qualityPoints = ['Labor warranty', 'Premium parts', 'Clean finish'];

export function RecentWorkSection() {
  return (
    <section id="work" className="recent-work-section" aria-labelledby="recent-work-heading">
      <div className="container">
        <SectionHeading
          eyebrow={
            <>
              <CheckCircle2 size={17} aria-hidden="true" />
              Recent work
            </>
          }
          title="Proof without the sales pitch."
          copy="A few examples of the jobs homeowners call us for most."
        />

        <div className="recent-work-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} as="article" className="recent-work-card" delay={index * 0.07}>
              <Image
                src={project.image}
                alt={`${project.title} completed by SS Power Pros`}
                fill
                sizes="(max-width: 980px) 100vw, 33vw"
              />
              <div className="recent-work-card__content">
                <span>{project.category}</span>
                <h2>{project.title}</h2>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="quality-strip">
          <strong>Quality you can trust</strong>
          <ul>
            {qualityPoints.map((item) => (
              <li key={item}>
                <CheckCircle2 size={17} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

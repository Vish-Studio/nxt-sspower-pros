import type { ReactNode } from 'react';
import { Reveal } from '@/components/reveal/reveal';

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: string;
  copy: string;
};

export function SectionHeading({ eyebrow, title, copy }: SectionHeadingProps) {
  return (
    <Reveal className="section-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </Reveal>
  );
}

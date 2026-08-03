'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right';
  as?: 'div' | 'article' | 'section';
};

export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const offsets = {
    up: { x: 0, y: 24 },
    left: { x: -28, y: 0 },
    right: { x: 28, y: 0 },
  };
  const Component = motion[as];

  return (
    <Component
      initial={{ opacity: 0, filter: 'blur(10px)', ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.7, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

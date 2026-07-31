'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles } from 'lucide-react';

const bullets = [
  'Responsive scheduling for urgent and planned jobs',
  'Skilled teams with a strong focus on safety and quality',
  'Reliable results for homeowners and property owners',
];

export function AboutSection() {
  return (
    <section id="about">
      <div className="container about-grid">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="section-card"
        >
          <div className="eyebrow">
            <Sparkles size={16} /> Why homeowners choose us
          </div>
          <h2 style={{ marginTop: '0.5rem' }}>Dependable service with a personal touch.</h2>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            We combine technical expertise with friendly service so every visit feels straightforward, respectful and stress-free.
          </p>
          <ul className="check-list" style={{ marginTop: '1.2rem' }}>
            {bullets.map((item) => (
              <li key={item}>
                <CheckCircle2 size={18} color="#fb923c" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="section-card"
        >
          <h3 style={{ marginTop: 0 }}>Built around your comfort</h3>
          <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
            Whether it is a sudden breakdown or a home improvement project, we focus on lasting solutions that protect your safety and budget.
          </p>
          <div style={{ marginTop: '1rem', display: 'grid', gap: '0.75rem' }}>
            <div className="stat-pill" style={{ minWidth: '100%' }}>
              <strong>Same-day availability</strong>
              <span>for many service requests</span>
            </div>
            <div className="stat-pill" style={{ minWidth: '100%' }}>
              <strong>Clear communication</strong>
              <span>before, during and after the job</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

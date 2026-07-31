'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, PhoneCall, ShieldCheck } from 'lucide-react';

const trustPoints = [
  'Fast response for urgent repairs',
  'Licensed and dependable crews',
  'Transparent pricing and honest advice',
];

export function HeroSection() {
  return (
    <section id="home">
      <div className="hero-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="eyebrow">
            <ShieldCheck size={16} /> Trusted home service experts
          </div>
          <h1 className="hero-title">
            Electrical, HVAC, plumbing and home maintenance done right.
          </h1>
          <p className="hero-copy">
            From urgent repairs to planned upgrades, SS Power Pros delivers dependable craftsmanship for homes that need comfort, safety, and peace of mind.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Book a call <ArrowRight size={18} />
            </a>
            <a href="#services" className="btn-secondary">
              Explore services
            </a>
          </div>
          <div className="stats-row">
            <div className="stat-pill">
              <strong>24/7</strong>
              <span>Emergency support</span>
            </div>
            <div className="stat-pill">
              <strong>100%</strong>
              <span>Local service focus</span>
            </div>
            <div className="stat-pill">
              <strong>4.9★</strong>
              <span>Client satisfaction</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="hero-card"
        >
          <div className="eyebrow">
            <PhoneCall size={16} /> Fast booking available today
          </div>
          <ul>
            {trustPoints.map((point) => (
              <li key={point}>
                <CheckCircle2 size={18} color="#fb923c" /> {point}
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
            <p style={{ margin: 0, color: 'var(--muted)', lineHeight: 1.7 }}>
              Need a reliable contractor for a repair, installation, or home upgrade? Let’s talk about the safest and smartest solution for your property.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

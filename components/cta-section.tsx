'use client';

import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall } from 'lucide-react';

export function CtaSection() {
  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="cta-card"
        >
          <h2>Ready to fix the problem or upgrade your home?</h2>
          <p>Book a call today and let’s talk through your needs, timeline and the most dependable solution for your home.</p>
          <div className="hero-actions" style={{ justifyContent: 'center', marginBottom: 0 }}>
            <a href="tel:+1234567890" className="btn-primary">
              <PhoneCall size={18} /> Call now
            </a>
            <a href="mailto:hello@sspowerpros.com" className="btn-secondary">
              Email us <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

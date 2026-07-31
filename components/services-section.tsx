'use client';

import { motion } from 'framer-motion';
import { BatteryCharging, Droplets, Home, PlugZap, Wind } from 'lucide-react';

const services = [
  {
    title: 'Electrical services',
    copy: 'Lighting, panel upgrades, outlets, wiring repairs and smart-home installations.',
    icon: PlugZap,
  },
  {
    title: 'Air conditioning',
    copy: 'Cooling system installs, tune-ups, repairs and energy-efficient upgrades.',
    icon: Wind,
  },
  {
    title: 'Plumbing',
    copy: 'Leak fixes, water heater service, pipe repairs, drainage work and preventative maintenance.',
    icon: Droplets,
  },
  {
    title: 'Home maintenance',
    copy: 'Routine upkeep, seasonal repairs and dependable handyman support for every corner of your home.',
    icon: Home,
  },
];

export function ServicesSection() {
  return (
    <section id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
          className="section-heading"
        >
          <div className="eyebrow">What we do best</div>
          <h2>One trusted contractor for the jobs that matter most.</h2>
          <p>Whether you need fast repairs or long-term upgrades, our team delivers quality workmanship with clear communication.</p>
        </motion.div>

        <div className="service-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="service-card"
              >
                <Icon size={24} color="#fb923c" />
                <h3>{service.title}</h3>
                <p>{service.copy}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

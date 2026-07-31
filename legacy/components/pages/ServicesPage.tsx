import React from 'react';
import { Zap, Droplets, Fan, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';
import { SectionId } from '@/types';
import Contact from '../Contact';

const ServicesPage: React.FC = () => {
  const categories = [
    {
      title: "Electrical Services",
      icon: <Zap className="w-8 h-8" />,
      description: "Full-service electrical repairs and installations for residential properties.",
      items: ["Panel Upgrades (100A to 200A)", "Lighting Installation & Repair", "Outlet & Switch Replacement", "EV Charger Installation", "Whole House Surge Protection", "Wiring Safety Inspections"]
    },
    {
      title: "Plumbing Solutions",
      icon: <Droplets className="w-8 h-8" />,
      description: "Fast, reliable plumbing fixes to prevent water damage and ensure comfort.",
      items: ["Leak Detection & Repair", "Water Heater Installation", "Drain Cleaning & Unclogging", "Faucet & Fixture Replacement", "Toilet Repair & Install", "Pipe Insulation"]
    },
    {
      title: "HVAC & Air Conditioning",
      icon: <Fan className="w-8 h-8" />,
      description: "Keep your home cool in summer and warm in winter with our HVAC experts.",
      items: ["AC System Diagnostics", "Routine Maintenance & Cleaning", "Refrigerant Top-up", "Thermostat Installation", "Duct Inspection", "Emergency Cooling Repairs"]
    },
    {
      title: "Home Maintenance",
      icon: <Hammer className="w-8 h-8" />,
      description: "Your go-to handyman services for everything else around the house.",
      items: ["TV Mounting & Installation", "Furniture Assembly", "Drywall Repair & Patching", "Painting (Interior/Exterior)", "Door & Lock Repair", "General Handyman Tasks"]
    }
  ];

  return (
    <div className="animate-fade-up">
      {/* Page Hero */}
      <section className="relative py-24 bg-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900/0 to-slate-900/0"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6 pt-10">
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">Our Expertise</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">Complete Home Services</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            From minor fixes to major installations, SS Power Pros delivers quality workmanship you can rely on.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {categories.map((cat, idx) => (
              <div key={idx} className="flex flex-col lg:flex-row gap-10 lg:items-start border-b border-slate-100 last:border-0 pb-12 last:pb-0">

                {/* Icon Column */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
                    {cat.icon}
                  </div>
                </div>

                {/* Content Column */}
                <div className="flex-grow">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{cat.title}</h2>
                  <p className="text-slate-500 text-lg mb-8 max-w-2xl">{cat.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {cat.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:border-blue-200 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="font-semibold text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Column */}
                <div className="flex-shrink-0 lg:w-48 lg:text-right pt-2">
                  <a href={`#${SectionId.CONTACT}`} className="inline-flex items-center justify-center w-full px-6 py-3 bg-white border-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 text-slate-700 font-bold rounded-xl transition-all">
                    Book This
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Stripe */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-2">Upfront Pricing</h3>
              <p className="text-blue-100">No hidden fees. You'll know the cost before we start the work.</p>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-blue-500">
              <h3 className="text-2xl font-bold mb-2">Licensed Experts</h3>
              <p className="text-blue-100">Our team is fully certified, insured, and background checked.</p>
            </div>
            <div className="p-4 border-t md:border-t-0 md:border-l border-blue-500">
              <h3 className="text-2xl font-bold mb-2">Satisfaction Guaranteed</h3>
              <p className="text-blue-100">We stand by our work. If it's not right, we'll make it right.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default ServicesPage;
import React from 'react';
import { Zap, Droplets, Fan, Hammer, ArrowRight } from 'lucide-react';
import { SectionId, Page } from '../types';

interface ServicesProps {
  onNavigate: (page: Page) => void;
}

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    {
      title: "Electrical Repairs",
      description: "Complete wiring solutions, panel upgrades, and safety inspections for your peace of mind.",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Plumbing Services",
      description: "Leak detection, pipe repairs, and fixture installations. We handle the mess so you don't have to.",
      icon: <Droplets className="w-6 h-6" />,
    },
    {
      title: "HVAC & Aircon",
      description: "Expert servicing, chemical cleaning, and emergency repairs to keep your home cool.",
      icon: <Fan className="w-6 h-6" />,
    },
    {
      title: "Home Maintenance",
      description: "General repairs, carpentry, painting, and mounting. The finishing touches your home needs.",
      icon: <Hammer className="w-6 h-6" />,
    }
  ];

  return (
    <section id={SectionId.SERVICES} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">What I Do</span>
            <h2 className="text-4xl font-heading font-bold text-slate-900">Professional Services</h2>
            <p className="text-slate-500 text-lg mt-4">
              Comprehensive home solutions delivered with expertise and precision.
            </p>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="hidden md:flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white transition-all duration-300 cursor-pointer"
              onClick={() => onNavigate('services')}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300 border border-slate-100 group-hover:border-blue-600">
                {React.cloneElement(service.icon as React.ReactElement<{ className?: string }>, {
                  className: "w-7 h-7 text-slate-700 group-hover:text-white transition-colors"
                })}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-slate-500 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex items-center text-slate-900 font-bold text-sm gap-2 group-hover:translate-x-1 transition-transform duration-300">
                Learn more <ArrowRight className="w-4 h-4 text-blue-500" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-2 font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            View All Services <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;
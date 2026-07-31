import React from 'react';
import { SectionId, Page } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface PortfolioProps {
  onNavigate: (page: Page) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onNavigate }) => {
  const projects = [
    {
      title: "Panel Upgrade",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
      description: "Upgraded main service panel from 100A to 200A for a modern smart home."
    },
    {
      title: "Master Bath Plumbing",
      category: "Plumbing",
      image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      description: "Complete repiping and installation of luxury fixtures."
    },
    {
      title: "AC System Maintenance",
      category: "HVAC",
      image: "https://images.unsplash.com/photo-1623192804533-899475c743bc?q=80&w=2070&auto=format&fit=crop",
      description: "Deep chemical cleaning and refrigerant top-up for peak efficiency."
    }
  ];

  return (
    <section id={SectionId.WORK} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
             <span className="text-blue-600 font-bold tracking-wider text-sm uppercase mb-2 block">Recent Projects</span>
            <h2 className="text-4xl font-heading font-bold text-slate-900">Featured Work</h2>
          </div>
          <button 
            onClick={() => onNavigate('work')}
            className="text-slate-600 font-semibold border-b-2 border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all pb-1"
          >
            See more on Instagram
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              onClick={() => onNavigate('work')}
              className="group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3]"
            >
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-slate-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Quality You Can Trust</h3>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 text-slate-400">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>1 Year Warranty on Labor</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                <span>Premium Parts Used</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => onNavigate('work')}
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-xl hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            Start Your Project
          </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
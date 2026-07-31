import React from 'react';
import Contact from '../Contact';

const WorkPage: React.FC = () => {
  const projects = [
    {
      title: "Luxury Kitchen Rewiring",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2070&auto=format&fit=crop",
      description: "Complete electrical overhaul for a kitchen renovation, including under-cabinet lighting and smart switch integration."
    },
    {
      title: "Master Bathroom Plumbing",
      category: "Plumbing",
      image: "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
      description: "Installation of dual vanity sinks, a soaking tub, and a rainfall shower system with custom piping."
    },
    {
      title: "Commercial HVAC Maintenance",
      category: "HVAC",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      description: "Routine maintenance for a local office building, ensuring optimal airflow and energy efficiency."
    },
    {
      title: "Smart Home Panel Upgrade",
      category: "Electrical",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop",
      description: "Upgraded main service panel to support new solar system and electric vehicle charger."
    },
    {
      title: "Emergency Pipe Repair",
      category: "Plumbing",
      image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2074&auto=format&fit=crop",
      description: "Rapid response to a burst pipe in a basement, minimizing water damage and restoring service within hours."
    },
    {
      title: "Custom TV Wall Mounting",
      category: "Maintenance",
      image: "https://images.unsplash.com/photo-1593784653277-20294cd5d695?q=80&w=2070&auto=format&fit=crop",
      description: "Clean installation of an 85-inch TV with concealed wiring and soundbar mounting."
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
          <span className="text-blue-400 font-bold tracking-wider text-sm uppercase mb-4 block">Our Portfolio</span>
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6">Recent Projects</h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
            See how we help homeowners like you improve, repair, and maintain their properties.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-blue-900 text-xs font-bold rounded-full shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default WorkPage;
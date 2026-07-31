import React, { useEffect, useState } from 'react';
import { SectionId, Page } from '../types';
import { ArrowDown, Phone } from 'lucide-react';
import { PHONE_NUMBER } from '@/config';

interface HeroProps {
  onNavigate: (page: Page) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={SectionId.HOME} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900 w-full">

      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 z-0 w-full h-[120%]"
        style={{
          transform: `translateY(${offset * 0.5}px)`,
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Modern Home Interior"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Main Heading */}
        <h1 className="animate-fade-up text-5xl md:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
          Expert Home Repairs.
        </h1>

        {/* Subheading */}
        <p className="animate-fade-up delay-100 text-lg md:text-xl text-slate-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          Electrical, plumbing, and HVAC services delivered with precision.
          <br className="hidden md:block" /> Reliable, professional, and done right.
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${PHONE_NUMBER.split(' ').join('')}`} className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-full font-bold text-sm md:text-lg text-white transition-all flex items-center justify-center gap-3">
            <Phone className="w-5 h-5 fill-current" />
            Book now
          </a>
        </div>

      </div>

      {/* Circular Scroll Indicator */}
      <div className="absolute bottom-12 left-0 right-0 text-center -translate-x-1/2 z-20 pointer-events-none animate-fade-up delay-300">
        <div className="relative flex items-center justify-center">
          {/* Rotating Text Ring */}
          {/* We apply a base rotation from scroll (offset) + a continuous slow spin animation on the child */}
          <div
            className="w-16 h-16 md:w-24 md:h-24 duration-75 ease-out origin-center"
            style={{
              transform: `rotate(${offset * 0.4}deg)`
            }}
          >
            <div className="w-full h-full animate-spin-slow origin-center">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text className="text-[10.5px] font-bold uppercase tracking-[0.16em] fill-white/40">
                  <textPath href="#circlePath" startOffset="0%">
                    Scroll Down • Scroll Down •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          {/* Center Static Arrow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <ArrowDown className="w-5 h-5 text-white/80" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
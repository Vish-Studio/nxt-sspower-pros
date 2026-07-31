import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { SectionId, Page } from '../types';
import { PHONE_NUMBER } from '../config'; // Adjust path as needed

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleNavClick = (page: Page, sectionId?: string) => {
    setIsOpen(false);

    if (page === currentPage && sectionId) {
      // Just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate then scroll
      onNavigate(page);
      if (sectionId) {
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isOpen
          ? 'bg-white shadow-sm py-4 border-b border-slate-100'
          : 'bg-transparent py-6 border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => handleNavClick('home', SectionId.HOME)}
            className="flex items-center gap-3 group relative z-50"
          >
            {/* Custom Logo SVG */}
            <div className={`w-10 h-10 relative transition-colors duration-300 ${scrolled || isOpen ? 'text-blue-600' : 'text-white'}`}>
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path
                  d="M50 5L90 27.5V72.5L50 95L10 72.5V27.5L50 5Z"
                  className="stroke-current"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <path
                  d="M55 25L35 55H50L45 75L65 45H50L55 25Z"
                  className="fill-current"
                />
              </svg>
            </div>

            <div className="flex flex-col items-start leading-none">
              <span className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-900' : 'text-white'}`}>
                SS<span className={scrolled || isOpen ? 'text-blue-600' : 'text-blue-400'}>Power</span>Pros
              </span>
              <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${scrolled || isOpen ? 'text-slate-400' : 'text-white/60'}`}>
                Home Experts
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavClick('home', SectionId.HOME)}
              className={`text-sm font-semibold transition-colors hover:text-blue-500 ${currentPage === 'home' ? 'text-blue-600' : (scrolled ? 'text-slate-600' : 'text-slate-300')
                }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className={`text-sm font-semibold transition-colors hover:text-blue-500 ${currentPage === 'services' ? 'text-blue-600' : (scrolled ? 'text-slate-600' : 'text-slate-300')
                }`}
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className={`text-sm font-semibold transition-colors hover:text-blue-500 ${currentPage === 'work' ? 'text-blue-600' : (scrolled ? 'text-slate-600' : 'text-slate-300')
                }`}
            >
              Our Work
            </button>
            <button
              onClick={() => handleNavClick('home', SectionId.ABOUT)}
              className={`text-sm font-semibold transition-colors hover:text-blue-500 ${scrolled ? 'text-slate-600' : 'text-slate-300'
                }`}
            >
              Reviews
            </button>
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${PHONE_NUMBER.split(' ').join('')}`} className="w-full sm:w-auto px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-full font-bold text-sm text-white transition-all flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 fill-current" />
              Book now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden relative z-50 p-2 -mr-2 transition-colors ${scrolled || isOpen ? 'text-slate-900' : 'text-white'}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{ paddingTop: '100px' }}
      >
        <div className="flex flex-col h-full px-6 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-2 mt-4">
            <button
              onClick={() => handleNavClick('home', SectionId.HOME)}
              className="text-2xl font-heading font-bold text-slate-900 flex items-center justify-between group py-4 border-b border-slate-100 animate-fade-up"
              style={{ animationDelay: '0s' }}
            >
              Home
              <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors -rotate-45 group-hover:rotate-0" />
            </button>
            <button
              onClick={() => handleNavClick('services')}
              className="text-2xl font-heading font-bold text-slate-900 flex items-center justify-between group py-4 border-b border-slate-100 animate-fade-up"
              style={{ animationDelay: '0.05s' }}
            >
              Services
              <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors -rotate-45 group-hover:rotate-0" />
            </button>
            <button
              onClick={() => handleNavClick('work')}
              className="text-2xl font-heading font-bold text-slate-900 flex items-center justify-between group py-4 border-b border-slate-100 animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              Our Work
              <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors -rotate-45 group-hover:rotate-0" />
            </button>
            <button
              onClick={() => handleNavClick('home', SectionId.ABOUT)}
              className="text-2xl font-heading font-bold text-slate-900 flex items-center justify-between group py-4 border-b border-slate-100 animate-fade-up"
              style={{ animationDelay: '0.15s' }}
            >
              Reviews
              <ArrowRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors -rotate-45 group-hover:rotate-0" />
            </button>
          </div>

          <div className="mt-auto space-y-6 pt-8">
            <a
              href={`#${SectionId.CONTACT}`}
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-blue-600 active:bg-blue-700 text-white text-center font-bold rounded-full text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-200"
            >
              <Phone className="w-5 h-5" />
              Book Appointment
            </a>

            <div className="text-center text-slate-500 text-sm">
              <p className="font-semibold mb-1">Emergency Service Available</p>
              <p>Licensed • Insured • 5-Star Rated</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
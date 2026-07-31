import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Page } from './types';
import ServicesPage from './components/pages/ServicesPage';
import WorkPage from './components/pages/WorkPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 overflow-x-hidden">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <Services onNavigate={handleNavigate} />
            <Portfolio onNavigate={handleNavigate} />
            <Testimonials />
            <Contact />
          </>
        )}

        {currentPage === 'services' && (
          <ServicesPage />
        )}

        {currentPage === 'work' && (
          <WorkPage />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;
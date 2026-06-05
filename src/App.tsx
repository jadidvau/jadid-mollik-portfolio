/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Experience from './components/Experience';
import ResearchBlog from './components/ResearchBlog';
import Contact from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'research', 'experience', 'blog', 'contact'];
    
    const observerOptions = {
      root: null, 
      rootMargin: '-30% 0px -50% 0px', // high-precision focus box to trigger active links comfortably
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-gold-200 selection:text-navy-900 overflow-x-hidden">
      {/* Sticky Navigation */}
      <Navbar activeSection={activeSection} />
      
      {/* Interactive Main Page blocks */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Research />
        <Experience />
        <ResearchBlog />
        <Contact />
      </main>
    </div>
  );
}

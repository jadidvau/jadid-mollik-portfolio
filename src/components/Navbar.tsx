/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, FileText, BookOpen, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Set beautifully localized real-time clock
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString(undefined, {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Research & Publications', href: '#research' },
    { name: 'Professional Experience', href: '#experience' },
    { name: 'Research Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav-light shadow-sm border-b border-gold-200/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand/Logo */}
          <a
            id="brand-logo"
            href="#home"
            className="flex items-center space-x-2.5 group transition-colors"
          >
            <div className="p-2 bg-navy-900 text-gold-400 rounded group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
              <Scale className="w-5 h-5" id="navbar-scale-icon" />
            </div>
            <div>
              <span className="block text-lg font-serif font-bold text-navy-900 tracking-tight group-hover:text-gold-600 transition-colors">
                Jadid Mollik
              </span>
              <span className="block text-[10px] uppercase font-sans tracking-widest text-slate-500 font-medium">
                Legal Jurisprudence
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`desktop-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className={`relative px-4 py-2 rounded-md text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-gold-600'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="activeLinkIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gold-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Clock/Status indicator (Academic and elegant) */}
          <div className="hidden md:flex items-center space-x-2 text-slate-400 pr-2 border-l border-slate-200 pl-4 text-xs font-mono" id="nav-academic-clock">
            <Clock className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-semibold text-slate-500">{currentTime || 'Jun 5, 2026, 10:00:00 PM'}</span>
          </div>

          {/* Mobile Hamburguer Button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-500 hover:text-navy-900 hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 glass-nav-light shadow-lg border-b border-gold-200/30 overflow-hidden lg:hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1.5" id="mobile-drawer-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  id={`mobile-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeSection === link.href.slice(1)
                      ? 'bg-gold-50/70 text-gold-600 border-l-4 border-gold-500 pl-3'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-navy-900'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              
              {/* Live localized clock inside mobile drawer */}
              <div className="pt-4 border-t border-slate-100 flex items-center space-x-2 px-4 text-xs font-mono text-slate-500">
                <Clock className="w-3.5 h-3.5 text-gold-500" />
                <span>{currentTime || 'Jun 5, 2026, 10:00:00 PM'}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

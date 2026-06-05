/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BookOpen, Newspaper, Scale, ShieldCheck, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-radial from-slate-50 to-stone-100"
    >
      {/* Editorial Watermark background elements */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-gold-200/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-5 w-80 h-80 bg-navy-100/10 rounded-full blur-2xl pointer-events-none" />

      {/* Grid Pattern Decors */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline and text content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-navy-50 border border-navy-100 px-3.5 py-1.5 rounded-full" id="hero-badge">
                <Landmark className="w-3.5 h-3.5 text-gold-600" />
                <span className="text-[10px] sm:text-xs font-sans tracking-widest uppercase font-semibold text-slate-700">
                  Academic Jurisprudence & Advocacy
                </span>
              </div>

              {/* Headline */}
              <h1
                id="hero-name"
                className="text-5xl sm:text-6xl md:text-7xl font-serif font-extrabold tracking-tight text-navy-900 leading-tight"
              >
                {personalInfo.name}
              </h1>

              {/* Subheadline styling */}
              <p
                id="hero-subheading"
                className="text-base sm:text-lg md:text-xl font-sans font-medium text-slate-600 leading-relaxed border-l-4 border-gold-400 pl-4"
              >
                {personalInfo.subheading}
              </p>
            </motion.div>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-wrap gap-4"
              id="hero-ctas"
            >
              <a
                id="cta-view-research"
                href="#research"
                className="flex items-center space-x-2 bg-navy-900 hover:bg-gold-600 hover:scale-[1.02] text-white px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide shadow-md transition-all duration-300"
              >
                <BookOpen className="w-4 h-4 text-gold-200" />
                <span>View My Research</span>
              </a>
              <a
                id="cta-read-blog"
                href="#blog"
                className="flex items-center space-x-2 bg-white hover:bg-slate-50 hover:scale-[1.02] text-slate-800 border border-slate-200 px-6 py-3.5 rounded-lg text-sm font-semibold tracking-wide hover:shadow-sm transition-all duration-300"
              >
                <Newspaper className="w-4 h-4 text-gold-500" />
                <span>Read My Blog</span>
              </a>
            </motion.div>

            {/* Muted stats for social proof and visual structure (Raking in credibility) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-6 sm:pt-10 border-t border-slate-200"
              id="hero-quick-stats"
            >
              <div id="stat-leb">
                <span className="block text-xl sm:text-2xl font-serif font-bold text-navy-900">1+ Year</span>
                <span className="block text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide uppercase">Sub-Executive LEB</span>
              </div>
              <div id="stat-publications">
                <span className="block text-xl sm:text-2xl font-serif font-bold text-navy-900">4+ Completed</span>
                <span className="block text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide uppercase">Legal Papers</span>
              </div>
              <div id="stat-projects">
                <span className="block text-xl sm:text-2xl font-serif font-bold text-navy-900">IUB</span>
                <span className="block text-[10px] sm:text-xs text-slate-500 font-medium tracking-wide uppercase">Law Department</span>
              </div>
            </motion.div>
          </div>

          {/* Aesthetic Legal Crest/Symbol Illustration side card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="relative w-full max-w-sm"
              id="hero-visual-card"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-navy-900 to-navy-950 text-white p-8 sm:p-10 rounded-2xl shadow-xl border border-navy-800 flex flex-col justify-between h-96">
                
                {/* Visual design elements (Legal motif and custom abstract frame) */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold-400/5 rounded-full blur-xl pointer-events-none" />
                
                {/* Traditional geometric trim */}
                <div className="absolute inset-4 border border-gold-500/10 rounded-lg pointer-events-none" />

                <div className="flex justify-between items-start" id="card-top-header">
                  <div className="flex flex-col space-y-1">
                    <span className="font-serif italic text-gold-400 text-lg">Fiat Justitia</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest text-slate-400">Ruat Caelum</span>
                  </div>
                  <Scale className="w-8 h-8 text-gold-400" />
                </div>

                <div className="my-auto space-y-3" id="card-inner-quote">
                  <p className="font-serif italic text-slate-100 text-base sm:text-lg leading-relaxed">
                    "Law is not merely rules; it is the fundamental vocabulary of human empowerment and societal dignity."
                  </p>
                  <div className="h-0.5 w-12 bg-gold-500" />
                </div>

                <div className="flex items-center space-x-3 text-slate-400" id="card-signoff">
                  <div className="p-1.5 bg-navy-800 rounded-lg border border-navy-700">
                    <ShieldCheck className="w-4 h-4 text-gold-400" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold text-slate-200">Jadid Mollik</span>
                    <span className="block text-[9px] uppercase tracking-wider text-slate-400">Representative Advocate</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

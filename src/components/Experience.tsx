/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Briefcase, Landmark, Building2, MapPin, CheckSquare, Calendar } from 'lucide-react';
import { workExperiences } from '../data/portfolioData';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-slate-50 rounded-r-full opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="experience-heading">
          <span className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold-600 font-semibold bg-gold-50 px-3 py-1.5 rounded-full">
            History
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3">
            Professional Experience
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-slate-500 mt-3 text-sm max-w-lg mx-auto">
            Practical engagement in civic advocacy, non-profit administration, and campus academic stewardship.
          </p>
        </div>

        {/* Structured Timeline Column */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-10 border-l border-slate-200" id="experience-timeline">
          
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              id={`experience-block-${exp.id}`}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative space-y-4 pb-12 last:pb-0 group"
            >
              {/* Floating Node Badge indicator (Golden outline node) */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 p-1.5 sm:p-2 bg-white rounded-full border-2 border-gold-400 text-navy-900 shadow-sm transition-all duration-300 group-hover:bg-navy-900 group-hover:text-white group-hover:border-navy-900">
                {index === 0 ? <Building2 className="w-4.5 h-4.5" /> : <Landmark className="w-4.5 h-4.5" />}
              </div>

              {/* Card Contents */}
              <div className="bg-slate-50 hover:bg-white border border-slate-200/60 p-6 sm:p-8 rounded-xl shadow-xs hover:shadow-md hover:border-gold-300/50 transition-all duration-300">
                
                {/* Meta details header Row */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                  <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 group-hover:text-gold-600 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-600 text-xs sm:text-sm font-medium">
                      <span className="font-semibold text-slate-800">{exp.organization}</span>
                      <span className="text-slate-300">|</span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="inline-flex items-center space-x-1.5 bg-navy-50/80 text-navy-900 text-xs px-3.5 py-1.5 rounded-lg border border-navy-100/40">
                    <Calendar className="w-3.5 h-3.5 text-gold-500" />
                    <span className="font-mono font-medium">{exp.duration}</span>
                  </div>
                </div>

                {/* Brief description */}
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* High value achievements bullet list */}
                <div className="space-y-3" id={`highlights-${exp.id}`}>
                  <h4 className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-gold-600 font-sans">
                    Key Contribution Benchmarks:
                  </h4>
                  <ul className="grid grid-cols-1 gap-3 pl-1">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-start space-x-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="mt-0.5 text-gold-500 p-0.5 bg-gold-50 rounded border border-gold-200/50 block shrink-0">
                          <CheckSquare className="w-3 h-3" />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

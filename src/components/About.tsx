/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Award, BookOpen, GraduationCap, Users, Shield, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const values = [
    {
      icon: <GraduationCap className="w-5 h-5 text-gold-500" />,
      title: 'Academic Focus',
      description: 'Engaged with modern constitutional frameworks, public international law, environmental guidelines, and digital sovereignty statutes.'
    },
    {
      icon: <Users className="w-5 h-5 text-gold-500" />,
      title: 'Community Empowerment',
      description: 'Bridging high-level statutes with community literacy, delivering constitutional protections directly to grassroots citizens.'
    },
    {
      icon: <Shield className="w-5 h-5 text-gold-500" />,
      title: 'Legal Advocacy',
      description: 'Working collaboratively within organization assemblies like Legal Empowerment Bangladesh to design permanent legal aid frameworks.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold-50 rounded-bl-full opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="about-heading">
          <span className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold-600 font-semibold bg-gold-50 px-3 py-1.5 rounded-full">
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3">
            About Me
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Biography Breakdown & Graphic Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start">
          
          {/* Biography text block */}
          <div className="lg:col-span-7 space-y-6" id="about-biography">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
              Dedicated Law Student & Grassroots Organizer
            </h3>
            
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              As a dedicated Law Student at the{' '}
              <strong className="text-navy-900 font-semibold">{personalInfo.department}, Independent University, Bangladesh (IUB)</strong>
              , I have spent my academic tenure mastering the intricate processes of the legal system and its capacity to act as a tool for public good. I believe that legal scholarship achieves its ultimate form when translated into social justice and community safety.
            </p>

            <div className="bg-slate-50 border-l-4 border-navy-900 p-5 rounded-r-lg my-6" id="editorial-quote-block">
              <p className="italic text-xs sm:text-sm text-slate-700 font-serif leading-relaxed">
                "My work is centered around the core principle that legal systems should empower, not intimidate. By fostering grassroots legal literacy, we can raise the collective agency of citizens and build solid foundations for constitutional democracy."
              </p>
              <span className="block mt-2 text-xs font-sans font-semibold text-gold-600">— Jadid Mollik</span>
            </div>

            {/* Focus on LEB Role */}
            <div className="space-y-4" id="leb-spotlight">
              <h4 className="text-base sm:text-lg font-serif font-semibold text-navy-900 flex items-center space-x-2">
                <span className="p-1 bg-gold-100 rounded text-gold-600"><Award className="w-4 h-4" /></span>
                <span>Active Leadership: Legal Empowerment Bangladesh (LEB)</span>
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                In my role as a <strong className="text-slate-900">Sub-Executive at LEB for over 1+ year</strong>, I lead field coordination and content creation for our community workshops. This hands-on experience has deepened my alignment with legal aid mechanisms, civil rights, and community welfare, serving as the bridge between constitutional principles and everyday realities.
              </p>
            </div>
          </div>

          {/* Academic Background details side panel */}
          <div className="lg:col-span-5 space-y-6">
            <div id="about-education-card" className="bg-gradient-to-br from-slate-50 to-stone-100 border border-slate-200/60 p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
              <h3 className="text-lg font-serif font-bold text-navy-900 border-b border-slate-200 pb-3 flex items-center space-x-2">
                <GraduationCap className="w-5 h-5 text-gold-500" />
                <span>Academic & Legal Credentials</span>
              </h3>
              
              <div className="space-y-5" id="education-timeline">
                <div className="relative pl-6 border-l border-gold-300">
                  <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-gold-500 border border-white" />
                  <span className="block text-[10px] font-mono text-gold-600 font-semibold uppercase">{personalInfo.academicBackground.duration}</span>
                  <span className="block text-sm font-serif font-bold text-navy-900">{personalInfo.academicBackground.degree}</span>
                  <span className="block text-xs text-slate-600 font-medium">{personalInfo.academicBackground.institution}</span>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Conducting academic inquiries in Constitutional Law, Human Rights, Judicial Accountability, and Legislative Drafting.
                  </p>
                </div>

                <div className="relative pl-6 border-l border-slate-200">
                  <div className="absolute top-1.5 -left-1.5 w-3 h-3 rounded-full bg-slate-300 border border-white" />
                  <span className="block text-[10px] font-mono text-slate-500 uppercase font-semibold">1+ Year Milestones</span>
                  <span className="block text-sm font-serif font-bold text-navy-900">Sub-Executive, Field Coordinator</span>
                  <span className="block text-xs text-slate-600 font-medium">Legal Empowerment Bangladesh (LEB)</span>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                    Designed 10+ legal literacy workshop curriculums, reaching over 1,500+ rural community members and high school cohorts.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values / Competencies List */}
            <div className="space-y-3" id="about-values">
              {values.map((v) => (
                <div
                  key={v.title}
                  id={`value-card-${v.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="flex space-x-3.5 p-4 bg-slate-50 border border-slate-100 rounded-lg hover:bg-white hover:shadow-sm hover:border-gold-200 transition-all duration-300"
                >
                  <div className="p-2 bg-white rounded-md border border-slate-200 self-start">
                    {v.icon}
                  </div>
                  <div>
                    <h5 className="text-xs sm:text-sm font-semibold text-navy-900 font-sans">{v.title}</h5>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

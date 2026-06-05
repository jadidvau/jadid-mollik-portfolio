/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, ExternalLink, Award, FileText, ChevronDown, ChevronUp, Layers, Compass, HelpCircle } from 'lucide-react';
import { journalPublications, conferencePapers, researchProjects } from '../data/portfolioData';
import { motion, AnimatePresence } from 'motion/react';

type TabType = 'journals' | 'conferences' | 'projects';

export default function Research() {
  const [activeTab, setActiveTab] = useState<TabType>('journals');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAbstract = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  const tabs = [
    { id: 'journals', name: 'Journal Publications', desc: 'Peer-Reviewed Literature' },
    { id: 'conferences', name: 'Conference Papers', desc: 'Academic Presentations' },
    { id: 'projects', name: 'Research & Dissertations', desc: 'Active Investigations' },
  ];

  return (
    <section id="research" className="py-24 bg-slate-50 relative border-t border-b border-slate-200/50">
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-navy-100/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="research-heading">
          <span className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold-600 font-semibold bg-gold-50 px-3 py-1.5 rounded-full">
            Scholarly Outputs
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3">
            Research & Publications
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
            Reviewing legal structures through statutory analysis, constitutional interpretation, and empirical fieldwork.
          </p>
        </div>

        {/* Tab Selection Row (Centered & Balanced) */}
        <div className="flex flex-col md:flex-row justify-center items-stretch md:items-center gap-2 max-w-3xl mx-auto mb-12" id="research-tabs-container">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`tab-btn-${tab.id}`}
              onClick={() => {
                setActiveTab(tab.id as TabType);
                setExpandedId(null);
              }}
              className={`flex-1 text-left px-5 py-4 rounded-xl border transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'bg-navy-900 border-navy-900 text-white shadow-md'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-gold-300 hover:bg-slate-50'
              }`}
            >
              <span className={`block text-xs uppercase tracking-wider font-semibold ${
                activeTab === tab.id ? 'text-gold-400' : 'text-gold-600'
              }`}>
                {tab.name}
              </span>
              <span className={`block text-[11px] font-sans mt-0.5 ${
                activeTab === tab.id ? 'text-slate-300' : 'text-slate-400'
              }`}>
                {tab.desc}
              </span>
              
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabGlow"
                  className="absolute -inset-px rounded-xl border border-gold-400/30 pointer-events-none"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Card Area utilizing Tab State */}
        <div id="publications-results-grid" className="max-w-4.5xl mx-auto">
          
          {/* JOURNAL PAPERS */}
          <AnimatePresence mode="wait">
            {activeTab === 'journals' && (
              <motion.div
                key="journals"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {journalPublications.map((pub) => (
                  <article
                    key={pub.id}
                    id={`journal-pub-${pub.id}`}
                    className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-xl shadow-xs hover:scale-[1.01] hover:shadow-md hover:border-gold-300/60 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-wider font-semibold text-gold-600">
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Peer-Reviewed Journal Document</span>
                          <span className="text-slate-300">•</span>
                          <span>{pub.date}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 leading-snug">
                          {pub.title}
                        </h3>
                        <p className="text-xs sm:text-sm italic text-slate-500 font-medium font-serif">
                          Published in: {pub.journal}
                        </p>
                      </div>
                      <a
                        id={`btn-read-${pub.id}`}
                        href={pub.pdfUrl}
                        className="inline-flex items-center space-x-1.5 self-start text-xs font-semibold bg-navy-50 text-navy-900 hover:bg-gold-500 hover:text-white px-3 py-2 rounded-lg border border-navy-100/60 hover:border-gold-500 transition-all duration-300 whitespace-nowrap"
                      >
                        <span>Read Paper</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    {/* Abstract preview section */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => toggleAbstract(pub.id)}
                        className="flex items-center space-x-1 text-xs text-slate-600 hover:text-navy-950 font-semibold focus:outline-none"
                      >
                        <span>{expandedId === pub.id ? 'Collapse Study Abstract' : 'Expand Study Abstract'}</span>
                        {expandedId === pub.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>

                      <AnimatePresence>
                        {expandedId === pub.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 font-sans">
                              <span className="font-semibold text-slate-800 block mb-1">Abstract Abstract Snippet:</span>
                              {pub.abstract}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Tags row */}
                    <div className="flex flex-wrap gap-1.5 mt-4" id={`tags-${pub.id}`}>
                      {pub.tags.map(t => (
                        <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-medium">#{t}</span>
                      ))}
                    </div>

                  </article>
                ))}
              </motion.div>
            )}

            {/* CONFERENCE PAPERS */}
            {activeTab === 'conferences' && (
              <motion.div
                key="conferences"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {conferencePapers.length === 0 ? (
                  <div className="bg-white border border-slate-200/60 p-12 rounded-xl text-center max-w-xl mx-auto shadow-xs">
                    <Award className="w-10 h-10 text-slate-350 mx-auto mb-4 stroke-1" />
                    <h4 className="text-md font-serif font-bold text-navy-900 mb-1">No Conference Presentations</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Currently focusing on peer-reviewed journal publications and independent legal research inquiries.
                    </p>
                  </div>
                ) : (
                  conferencePapers.map((paper) => (
                    <article
                      key={paper.id}
                      id={`conf-paper-${paper.id}`}
                      className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-xl shadow-xs hover:scale-[1.01] hover:shadow-md hover:border-gold-300/60 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-wider font-semibold text-gold-600">
                            <Award className="w-3.5 h-3.5" />
                            <span>Academic Conference Presentation</span>
                            <span className="text-slate-300">•</span>
                            <span>{paper.date}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 leading-snug">
                            {paper.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 font-sans font-semibold">
                            Conferred at: {paper.conference} ({paper.location})
                          </p>
                        </div>
                        <a
                          id={`btn-read-conf-${paper.id}`}
                          href={paper.pdfUrl}
                          className="inline-flex items-center space-x-1.5 self-start text-xs font-semibold bg-navy-50 text-navy-900 hover:bg-gold-500 hover:text-white px-3 py-2 rounded-lg border border-navy-100/60 hover:border-gold-500 transition-all duration-300 whitespace-nowrap"
                        >
                          <span>Details / Abstract</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <button
                          onClick={() => toggleAbstract(paper.id)}
                          className="flex items-center space-x-1 text-xs text-slate-600 hover:text-navy-950 font-semibold focus:outline-none"
                        >
                          <span>{expandedId === paper.id ? 'Collapse Case Objectives' : 'Expand Case Objectives'}</span>
                          {expandedId === paper.id ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>

                        <AnimatePresence>
                          {expandedId === paper.id && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-100 font-sans">
                                <span className="font-semibold text-slate-800 block mb-1">Presentation Overview:</span>
                                {paper.abstract}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-4" id={`tags-${paper.id}`}>
                        {paper.tags.map(t => (
                          <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-medium">#{t}</span>
                        ))}
                      </div>

                    </article>
                  ))
                )}
              </motion.div>
            )}

            {/* RESEARCH PROJECTS */}
            {activeTab === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {researchProjects.length === 0 ? (
                  <div className="bg-white border border-slate-200/60 p-12 rounded-xl text-center max-w-xl mx-auto shadow-xs">
                    <Award className="w-10 h-10 text-slate-350 mx-auto mb-4 stroke-1" />
                    <h4 className="text-md font-serif font-bold text-navy-900 mb-1">No Ongoing Dissertations</h4>
                    <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
                      Currently focusing on peer-reviewed journal publications and independent legal research inquiries.
                    </p>
                  </div>
                ) : (
                  researchProjects.map((project) => (
                    <article
                      key={project.id}
                      id={`research-proj-${project.id}`}
                      className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-xl shadow-xs hover:scale-[1.01] hover:shadow-md hover:border-gold-300/60 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center space-x-2">
                            <span className={`text-[9px] font-mono uppercase px-2 py-0.5 rounded-full font-bold ${
                              project.status === 'Ongoing' 
                                ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                                : 'bg-green-100 text-green-800 border border-green-200'
                            }`}>
                              {project.status} Project
                            </span>
                            <span className="text-slate-300">•</span>
                            <span className="text-[10px] font-mono text-slate-500 uppercase font-semibold">{project.date}</span>
                          </div>
                          <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 leading-snug">
                            {project.title}
                          </h3>
                          {project.supervisors && (
                            <p className="text-xs text-slate-500 font-sans font-medium">
                              Academic Advising / Board: {project.supervisors}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 mt-4" id={`tags-${project.id}`}>
                        {project.tags.map(t => (
                          <span key={t} className="text-[10px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded font-medium">#{t}</span>
                        ))}
                      </div>

                    </article>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

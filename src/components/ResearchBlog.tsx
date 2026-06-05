/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Tag, ArrowRight, X, Clock, User, Scale, BookOpen } from 'lucide-react';
import { blogPosts } from '../data/portfolioData';
import { BlogPost } from '../types';

export default function ResearchBlog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Helper to render formatting inside markdown text manually
  const renderContent = (content: string) => {
    return content.split('\n\n').map((para, i) => {
      if (para.startsWith('### ')) {
        return (
          <h4 key={i} className="text-lg sm:text-xl font-serif font-bold text-navy-900 mt-6 mb-3">
            {para.replace('### ', '')}
          </h4>
        );
      }
      if (para.startsWith('* ') || para.startsWith('- ')) {
        return (
          <ul key={i} className="list-disc pl-5 my-4 space-y-2 text-slate-700 text-sm sm:text-base">
            {para.split('\n').map((item, idx) => (
              <li key={idx}>{item.replace(/^[*-\s]+/, '')}</li>
            ))}
          </ul>
        );
      }
      if (para.match(/^\d+\./)) {
        return (
          <ol key={i} className="list-decimal pl-5 my-4 space-y-2 text-slate-700 text-sm sm:text-base">
            {para.split('\n').map((item, idx) => (
              <li key={idx}>{item.replace(/^\d+\.\s*/, '')}</li>
            ))}
          </ol>
        );
      }
      return (
        <p key={i} className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
          {para}
        </p>
      );
    });
  };

  return (
    <section id="blog" className="py-24 bg-slate-50 relative border-t border-slate-200/50">
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-50/40 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16" id="blog-heading">
          <span className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold-600 font-semibold bg-gold-50 px-3 py-1.5 rounded-full">
            Scholarly Notebook
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy-900 mt-3">
            Research Blog
          </h2>
          <div className="h-1 w-16 bg-gold-400 mx-auto mt-4" />
          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
            Interpreting complex legal theories and documenting opinions on domestic and international legal affairs.
          </p>
        </div>

        {/* Grid Layout or Empty State */}
        {blogPosts.length === 0 ? (
          <div className="bg-white border border-slate-200/60 p-12 rounded-xl text-center max-w-xl mx-auto shadow-xs">
            <BookOpen className="w-10 h-10 text-slate-400 mx-auto mb-4 stroke-1" />
            <h4 className="text-md font-serif font-bold text-navy-900 mb-1">No Published Articles</h4>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
              Currently compiling case commentaries, constitutional critiques, and regulatory briefs. Please check back soon for incoming legal analyses.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
            {blogPosts.map((post, idx) => (
              <motion.article
                key={post.id}
                id={`blog-card-${post.id}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 rounded-xl overflow-hidden flex flex-col justify-between hover:scale-[1.02] hover:shadow-md hover:border-gold-300/40 transition-all duration-300 group"
              >
                {/* Card Core Area */}
                <div className="p-6 space-y-4">
                  {/* Meta Row: Tag & Date */}
                  <div className="flex items-center justify-between text-[11px] font-sans font-medium text-slate-500">
                    <div className="flex items-center space-x-1.5 bg-gold-50 text-gold-700 px-2.5 py-1 rounded-md">
                      <Tag className="w-3 h-3 text-gold-500" />
                      <span>{post.category}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  {/* Excerpt title */}
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 leading-snug group-hover:text-gold-600 transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Card Footer Read CTA */}
                <div className="px-6 pb-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-medium text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3.5 h-3.5 text-slate-300" />
                    <span>{post.readTime}</span>
                  </span>
                  
                  <button
                    id={`btn-read-blog-${post.id}`}
                    onClick={() => setSelectedPost(post)}
                    className="flex items-center space-x-1 text-xs font-semibold text-navy-900 hover:text-gold-600 group-hover:translate-x-1.5 transition-all duration-300 focus:outline-none"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </motion.article>
            ))}
          </div>
        )}

        {/* FULL ARTICLE POPUP READER MODAL */}
        <AnimatePresence>
          {selectedPost && (
            <div className="fixed inset-0 z-100 flex items-center justify-center p-4" id="blog-reader-portal">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm"
              />

              {/* Shell Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl border border-gold-300/30 overflow-hidden z-10 flex flex-col"
              >
                {/* Modal Header */}
                <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center bg-radial from-slate-50 to-stone-100">
                  <div className="flex items-center space-x-2 text-[10px] uppercase font-mono tracking-widest text-slate-500">
                    <Scale className="w-3.5 h-3.5 text-gold-500" />
                    <span>LEGAL INSIGHTS BOARD</span>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="p-1 px-2.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors flex items-center space-x-1 text-xs font-medium focus:outline-none"
                    aria-label="Close modal reader"
                  >
                    <span>Close</span>
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main scrollable body content */}
                <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 text-left">
                  {/* Category and meta badge */}
                  <div className="flex flex-wrap gap-2 items-center text-xs font-medium text-slate-500">
                    <span className="bg-gold-50 text-gold-700 px-3 py-1 rounded-md text-[11px] font-sans font-semibold">
                      {selectedPost.category}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{selectedPost.date}</span>
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{selectedPost.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3.5xl font-serif font-extrabold text-navy-900 tracking-tight leading-tight">
                    {selectedPost.title}
                  </h3>

                  {/* Divider line */}
                  <div className="h-0.5 bg-gradient-to-r from-gold-400 via-gold-200 to-transparent w-24" />

                  {/* Author credit lines */}
                  <div className="flex items-center space-x-3 py-1 text-slate-500 border-b border-dashed border-slate-200 pb-4">
                    <div className="p-2 bg-navy-50 text-navy-900 rounded-full">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-700">Written by: {selectedPost.author}</span>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono">Department of Law, IUB</span>
                    </div>
                  </div>

                  {/* Rendered content paragraphs */}
                  <div className="prose prose-slate max-w-none text-slate-700 font-sans leading-relaxed">
                    {renderContent(selectedPost.content)}
                  </div>
                </div>

                {/* Modal Footer stamp */}
                <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-[10px] font-mono text-slate-400">
                  <span>© {new Date().getFullYear()} Jadid Mollik. All Rights Reserved.</span>
                  <BookOpen className="w-4 h-4 text-gold-500/55" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

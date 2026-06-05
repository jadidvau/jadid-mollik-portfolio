/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, Bookmark, ExternalLink, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    
    setSubmitting(true);
    // Simulate server-side submit
    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  // Custom high-fidelity SVG paths for specialist scholar networks
  const googleScholarIcon = (
    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4 3.5v7h16v-7l4-3.5L12 0z"/>
    </svg>
  );

  const researchGateIcon = (
    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.37 11.56c.09-.07.15-.17.15-.31V6.94c0-.98-.79-1.78-1.77-1.78s-1.78.79-1.78 1.78V11.2c0 .12.05.21.14.28.18.14.3.43.3.74v5.3c0 .15-.07.31-.22.41-.09.06-.15.15-.15.28v.57c0 .18.15.33.33.33h1s.33-.15.33-.33s0-.5-.07-.58V12.04c-.01-.15.06-.31.21-.41l-.04-.07zM11.95 2C6.46 2 2 6.46 2 11.95c0 4.1 2.5 7.6 6.06 9.15.01.21.08.4.19.55l1.08 1.44c.15.2.4.31.65.31s.5-.11.65-.31l1.08-1.44c.11-.15.18-.34.19-.55 3.56-1.55 6.06-5.05 6.06-9.15C18.01 6.46 13.55 2 11.95 2zm-1.84 6.8c1.32 0 2.4 1.08 2.4 2.4s-1.08 2.4-2.4 2.4-2.4-1.08-2.4-2.4 1.08-2.4 2.4-2.4zm1.84 5.39c.09-.07.13-.18.13-.3V10.1c0-.98-.8-1.78-1.78-1.78s-1.78.79-1.78 1.78v3.79c0 .12.04.22.13.29.18.14.31.42.31.74v2.79c0 .54.44.97.98.97s.98-.43.98-.97v-2.79c.01-.32.14-.6.31-.74l.01-.07z" />
    </svg>
  );

  const linkedinIcon = (
    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );

  const facebookIcon = (
    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
    </svg>
  );

  const instagramIcon = (
    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );

  const twitterIcon = (
    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  const socials = [
    { name: 'Google Scholar', icon: googleScholarIcon, href: personalInfo.socialLinks.googleScholar, color: 'hover:text-[#4285F4] hover:border-[#4285F4]' },
    { name: 'ResearchGate', icon: researchGateIcon, href: personalInfo.socialLinks.researchGate, color: 'hover:text-[#00CCBB] hover:border-[#00CCBB]' },
    { name: 'LinkedIn', icon: linkedinIcon, href: personalInfo.socialLinks.linkedIn, color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]' },
    { name: 'Facebook', icon: facebookIcon, href: personalInfo.socialLinks.facebook, color: 'hover:text-[#1877F2] hover:border-[#1877F2]' },
    { name: 'Instagram', icon: instagramIcon, href: personalInfo.socialLinks.instagram, color: 'hover:text-[#E1306C] hover:border-[#E1306C]' },
    { name: 'Twitter / X', icon: twitterIcon, href: personalInfo.socialLinks.twitter, color: 'hover:text-slate-100 hover:border-slate-100 hover:bg-black/40' },
    { name: 'Email Address', icon: <Mail className="w-5.5 h-5.5" />, href: personalInfo.socialLinks.email, color: 'hover:text-gold-500 hover:border-gold-500' },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-navy-900 to-navy-950 text-white relative overflow-hidden">
      
      {/* Visual background details (Subtle gold framing accents) */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-400/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-gold-500 via-gold-300 to-navy-900" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Headline & Custom info panel */}
          <div className="lg:col-span-5 space-y-8" id="contact-left-details">
            <div className="space-y-4">
              <span className="text-[10px] sm:text-xs uppercase font-sans tracking-widest text-gold-400 font-semibold bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full inline-block">
                Colloquium & Inquiry
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-serif font-bold text-slate-100 tracking-tight leading-tight">
                Let's Connect for Research Collaborations or Legal Insights.
              </h2>
              <div className="h-0.5 bg-gold-500 w-16 mt-4" />
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
              I am always receptive to intellectual partnerships, research fellowships, collaborative policy-drafting requests, and grassroots advocacy proposals. Reach out to coordinate or initiate dialogue.
            </p>

            {/* Direct contact info card */}
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl space-y-4 font-sans text-xs sm:text-sm" id="contact-info-panel">
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest uppercase font-semibold">Direct Email Link</span>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-gold-300 transition-colors font-medium">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 text-slate-300">
                <Bookmark className="w-5 h-5 text-gold-400 shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest uppercase font-semibold">Study Coordinates</span>
                  <span className="text-white font-medium">Independent University, Bangladesh • Dhaka</span>
                </div>
              </div>
            </div>

            {/* Structured Social/Academic row (Anchors for copy-pasting exact URLs) */}
            <div className="space-y-3.5" id="contact-social-section">
              <h4 className="text-[11px] sm:text-xs text-slate-400 uppercase tracking-wider font-semibold font-sans">
                Professional & Academic Profiles:
              </h4>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    id={`social-link-${social.name.toLowerCase().replace(/\s+/g, '-')}`}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center p-3 rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-300 ${social.color}`}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* High Fidelity Contact Form Panel */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-10 rounded-2xl shadow-2xl border border-slate-200" id="contact-form-panel">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-navy-900 mb-6 flex items-center space-x-2">
              <Send className="w-4.5 h-4.5 text-gold-600" />
              <span>Send An Academic or Professional Dispatch</span>
            </h3>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                  id="dispatch-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1 text-left">
                      <label htmlFor="name" className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold font-sans block">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Attorney Sarah"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-navy-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-sans"
                      />
                    </div>
                    
                    <div className="space-y-1 text-left">
                      <label htmlFor="email" className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold font-sans block">Email Coordinates *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. researcher@edu.org"
                        className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-navy-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="subject" className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold font-sans block">Subject Matter</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Constitutional Law Research Inquiry"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-navy-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-sans"
                    />
                  </div>

                  <div className="space-y-1 text-left">
                    <label htmlFor="message" className="text-[10px] uppercase tracking-wider text-slate-500 font-semibold font-sans block">Brief Message / Brief Brief *</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your inquiry, case discussion, or organization collaboration parameters..."
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 text-sm font-medium text-navy-900 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gold-500/20 focus:border-gold-500 transition-all font-sans resize-none"
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full mt-2 bg-navy-900 hover:bg-gold-500 text-white font-semibold py-3.5 px-4 rounded-lg text-sm tracking-wide transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:scale-[1.01]"
                  >
                    {submitting ? (
                      <span className="flex items-center space-x-2">
                        <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Transmitting Dispatch...</span>
                      </span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-gold-300" id="contact-send-icon" />
                        <span>Send Official Dispatch</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                  id="form-success-alert"
                >
                  <div className="mx-auto p-4 bg-green-50 text-green-600 rounded-full w-16 h-16 flex items-center justify-center border border-green-200">
                    <CheckCircle2 className="w-8 h-8 font-bold" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-navy-950">Thank You, Dispatch Received</h4>
                  <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Jadid Mollik will receive your inquiry directly. An academic peer or coordinator will follow up as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-xs font-semibold text-gold-600 hover:text-navy-950 focus:outline-none pt-4 block mx-auto underline decoration-dotted"
                  >
                    Send Another Dispatch Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Brand Copyright footer */}
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-slate-400 text-xs sm:text-sm" id="footer-bottom">
          <p>© {new Date().getFullYear()} Jadid Mollik. Academic & Legal Research Portfolio.</p>
          <span className="block text-[10px] text-slate-500 font-mono mt-1">
            Department of Law, Independent University, Bangladesh (IUB)
          </span>
        </div>

      </div>
    </section>
  );
}

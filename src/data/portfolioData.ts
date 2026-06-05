/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { JournalPublication, ConferencePaper, LegalResearchProject, BlogPost, WorkExperience } from '../types';

export const personalInfo = {
  name: 'Jadid Mollik',
  title: 'Legal Researcher & Law Student',
  institution: 'Independent University, Bangladesh (IUB)',
  department: 'Department of Law',
  email: 'jadid.mollik@yahoo.com',
  subheading: 'Law Student at Independent University, Bangladesh (IUB) | Legal Researcher & Advocate for Legal Empowerment.',
  bioSummary: 'A dedicated Law Student with a deep commitment to legal research, social justice, and constitutional advocacy. Combines rigorous legal academic study with practical grassroots field mobilization to bridge the gap between legal policy and community empowerment.',
  academicBackground: {
    degree: 'Bachelor of Laws (LL.B. Hons.)',
    institution: 'Independent University, Bangladesh (IUB)',
    duration: '2023 - Present',
    details: 'Focusing on Constitutional Law, Public International Law, Human Rights, and Environmental Jurisprudence. Actively participating in national moot court competitions, legal drafting workshops, and academic research squads.',
  },
  socialLinks: {
    googleScholar: 'https://scholar.google.com/citations?user=5GlWqbwAAAAJ&hl=en&oi=ao',
    researchGate: '#',
    linkedIn: 'https://www.linkedin.com/in/jadid-mollik?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    facebook: 'https://www.facebook.com/share/1D8L48ZmCh/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/shadowcircuits?utm_source=qr',
    twitter: 'https://x.com/jadid__mollik?s=11',
    email: 'mailto:jadid.mollik@yahoo.com'
  }
};

export const journalPublications: JournalPublication[] = [
  {
    id: 'jp-1',
    title: 'Re-evaluation of the Concept of Diplomatic Immunity in Contemporary International Law',
    journal: 'SSRN / Google Scholar Electronic Repository',
    date: '2024',
    abstract: 'This paper undertakes a critical inquiry into the historical, political, and doctrinal underpinnings of diplomatic immunity under the Vienna Convention on Diplomatic Relations (1961). It explores whether absolute immunity continues to serve the state balance or creates procedural injustices in criminal situations, proposing contemporary reforms to adjust balance limits without impairing diplomatic safety.',
    tags: ['International Law', 'Diplomatic Immunity', 'Treaty Interpretation'],
    pdfUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&oe=ASCII&user=5GlWqbwAAAAJ&citation_for_view=5GlWqbwAAAAJ:u-x6o8ySG0sC'
  },
  {
    id: 'jp-2',
    title: 'Legal Framework to Introduction Forensic Evidence in Bangladeshi Courts: An Analysis',
    journal: 'International Journal of Law and Legal Studies (IJLLS)',
    date: '2023',
    abstract: 'A comprehensive legal analysis of the procedural codes and evidentiary rules under the Evidence Act, 1872 and the Code of Criminal Procedure (CrPC). The study details current standards of admissibility on forensic ballistics, DNA matching, and digital signatures. It recommends structural statutory amendments to introduce modern tech standards while preserving civil procedural safety and judicial fairness.',
    tags: ['Criminal Law', 'Forensic Evidence', 'Admissibility', 'Bangladesh Judiciary'],
    pdfUrl: 'https://scholar.google.com/citations?view_op=view_citation&hl=en&oe=ASCII&user=5GlWqbwAAAAJ&citation_for_view=5GlWqbwAAAAJ:u5HHmVD_uO8C'
  }
];

export const conferencePapers: ConferencePaper[] = [];

export const researchProjects: LegalResearchProject[] = [];

export const workExperiences: WorkExperience[] = [
  {
    id: 'exp-1',
    role: 'Sub-Executive',
    organization: 'Legal Empowerment Bangladesh (LEB)',
    location: 'Dhaka, Bangladesh',
    duration: 'Jan 2024 - Present (1+ Year)',
    description: 'Spearheaded key advocacy, outreach, and administrative units for a prominent national legal education and awareness organization.',
    highlights: [
      'Organized and facilitated 10+ legal literacy workshops targeting marginalized rural communities and school students to spread basic constitutional rights and domestic violence law protection measures.',
      'Drafted promotional, educational content, and organizational frameworks used in community distribution packs, building legal knowledge for over 1,500+ citizens.',
      'Managed cross-functional student leader pools across multiple universities, elevating institutional partnership networks and coordinating fundraising and strategic alignment for LEB.',
      'Served as a core organizational engine, aligning legal advocacy campaigns with local local government offices and human rights non-profits.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Independent Legal Researcher & Scholar',
    organization: 'Self-Directed Academic Inquiries',
    location: 'Dhaka, Bangladesh',
    duration: 'May 2023 - Present',
    description: 'Conducting self-initiated legal inquiries, comparative regulatory research, and statutory analysis reviews.',
    highlights: [
      'Conducted independent research projects focusing on constitutional human rights protections and administrative law limits within South Asia.',
      'Drafted critical academic reviews and notes on environmental regulations and municipal ecological duties in rapidly urbanizing states.',
      'Studied and summarized grassroots legal literacy requirements under international convenants, framing potential community syllabus solutions.'
    ]
  }
];

export const blogPosts: BlogPost[] = [];

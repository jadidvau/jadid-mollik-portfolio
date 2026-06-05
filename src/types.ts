/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface JournalPublication {
  id: string;
  title: string;
  journal: string;
  date: string;
  abstract: string;
  pdfUrl?: string; // Links for actual references
  tags: string[];
}

export interface ConferencePaper {
  id: string;
  title: string;
  conference: string;
  location: string;
  date: string;
  abstract: string;
  pdfUrl?: string;
  tags: string[];
}

export interface LegalResearchProject {
  id: string;
  title: string;
  status: 'Completed' | 'Ongoing' | 'Drafting';
  description: string;
  overview?: string;
  supervisors?: string;
  date: string;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string; // Markdown or Paragraph style content
  readTime: string;
  author: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  organization: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
}

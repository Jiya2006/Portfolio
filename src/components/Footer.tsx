import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-dark-border/80 bg-dark-bg/95 backdrop-blur-xl py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Brand & Closing Line */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-extrabold tracking-wider text-base text-white font-mono">
              JIYA BAGHEL<span className="text-electric-cyan">.</span>
            </span>
            <span className="text-dark-subtle text-xs">|</span>
            <span className="text-xs text-dark-muted font-mono">Portfolio</span>
          </div>

          <p className="text-xs text-dark-subtle italic flex items-center gap-1.5">
            <span>"Designed with curiosity and built with code."</span>
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-3">
          <a
            href={PROFILE_INFO.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-dark-muted hover:text-white transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PROFILE_INFO.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-dark-muted hover:text-white transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4 text-electric-cyanLight" />
          </a>
        </div>

        {/* Right: Year & Back-to-Top */}
        <div className="flex items-center gap-4">
          <div className="text-xs text-dark-subtle font-mono">
            &copy; {currentYear} {PROFILE_INFO.name}. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all group"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          </button>
        </div>

      </div>
    </footer>
  );
};

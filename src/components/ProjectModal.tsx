import React from 'react';
import { X, ExternalLink, Code2, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  views?: number;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, views, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-electric-violet via-electric-cyan to-electric-violet" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dark-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-1 rounded-md bg-electric-cyan/15 border border-electric-cyan/30 text-electric-cyan font-mono text-xs font-semibold">
              {project.categoryLabel}
            </span>
            <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              project.status === 'In Progress'
                ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                : project.status === 'Academic Research'
                ? 'bg-purple-500/15 border border-purple-500/30 text-purple-300'
                : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
            }`}>
              {project.status}
            </span>
            {typeof views === 'number' && (
              <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-dark-muted font-mono text-xs flex items-center gap-1">
                <span>👁️</span>
                <span>{views} views</span>
              </span>
            )}
          </div>

          <h3 id="modal-project-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm font-medium text-electric-cyanLight mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-5 text-sm">
          
          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-electric-cyan" />
              Problem Addressed
            </h4>
            <p className="text-dark-muted leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Detailed Overview */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 mb-2">
              Project Overview
            </h4>
            <p className="text-dark-muted leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Jiya's Contribution */}
          <div className="p-4 rounded-xl bg-electric-violet/10 border border-electric-violet/20">
            <h4 className="text-xs uppercase font-mono tracking-wider text-electric-violetLight mb-1.5 flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-electric-violetLight" />
              My Contribution
            </h4>
            <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
              {project.contribution}
            </p>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-wider text-slate-300 mb-2.5 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-purple-400" />
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-xs text-slate-200 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Placeholder Notice if repo is unconfirmed */}
          {project.isPlaceholderRepo && (
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs text-dark-subtle flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
              <span>
                <strong>Repository Note:</strong> Pointed to Jiya's primary GitHub profile. To link to this project's dedicated repository URL, simply update <code className="text-slate-300 font-mono">src/data/portfolioData.ts</code>.
              </span>
            </div>
          )}

        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Visit GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-dark-muted" />
            </a>

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-electric-cyan/20 hover:bg-electric-cyan/30 border border-electric-cyan/40 text-electric-cyan text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-dark-muted hover:text-white transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

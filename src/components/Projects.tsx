import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  ArrowRight, 
  Info, 
  ChevronRight,
  Eye
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project, ProjectCategory } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  getProjectViews?: (id: string) => number;
  incrementProjectView?: (id: string) => number;
}

export const Projects: React.FC<ProjectsProps> = ({ getProjectViews, incrementProjectView }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterOptions: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Machine Learning', value: 'ml' },
    { label: 'Web Development', value: 'web' },
    { label: 'Simulation & Research', value: 'simulation' },
  ];

  // Filter projects by category
  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  // Top 6 featured or all
  const displayedProjects = activeFilter === 'all' && !showAll
    ? filteredProjects.slice(0, 6)
    : filteredProjects;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 border border-electric-violet/30 text-xs font-mono text-electric-violetLight mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-3">
              Featured Projects
            </h2>
            <p className="text-dark-muted max-w-2xl text-sm sm:text-base leading-relaxed">
              Real problem statements explored across machine learning classifications, responsive frontend development, and underwater network simulations.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-electric-violet to-electric-cyan rounded-full mt-4" />
          </div>

          {/* Filter Pills */}
          <div className="mt-8 md:mt-0 flex flex-wrap gap-2">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  setActiveFilter(option.value);
                  setShowAll(true);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === option.value
                    ? 'bg-gradient-to-r from-electric-violet to-electric-cyan text-white shadow-glow-violet'
                    : 'bg-white/[0.04] text-dark-muted hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl flex flex-col justify-between overflow-hidden relative group border border-white/10 hover:border-electric-violet/50 transition-all duration-300"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-electric-violet via-electric-cyan to-electric-violet opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                
                {/* Meta Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-white/[0.04] border border-white/10 text-slate-300">
                    {project.categoryLabel}
                  </span>
                  
                  <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-semibold ${
                    project.status === 'In Progress'
                      ? 'bg-amber-500/15 border border-amber-500/30 text-amber-300'
                      : project.status === 'Academic Research'
                      ? 'bg-purple-500/15 border border-purple-500/30 text-purple-300'
                      : 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title & Subtitle */}
                <h3 className="text-lg font-bold text-white group-hover:text-electric-cyanLight transition-colors mb-1 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs text-electric-violetLight font-mono mb-4">
                  {project.subtitle}
                </p>

                {/* Problem Statement Card */}
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                  <div className="text-[11px] uppercase font-mono text-slate-400 mb-1 flex items-center gap-1">
                    <Info className="w-3 h-3 text-electric-cyan" />
                    <span>Problem Statement</span>
                  </div>
                  <p className="text-xs text-dark-muted line-clamp-2 leading-relaxed">
                    {project.problemStatement}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 mb-4 line-clamp-3 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Contribution Snippet */}
                <div className="mb-5 text-xs text-dark-muted">
                  <span className="text-slate-300 font-semibold">My Role: </span>
                  <span className="line-clamp-2">{project.contribution}</span>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/5 text-[11px] text-slate-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:px-6 bg-white/[0.02] border-t border-white/5 flex items-center justify-between gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors group/link"
                  title="View repository on GitHub"
                >
                  <GithubIcon className="w-4 h-4 text-dark-muted group-hover/link:text-white transition-colors" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-dark-subtle group-hover/link:text-slate-300" />
                </a>

                <div className="flex items-center gap-3">
                  {getProjectViews && (
                    <span 
                      className="text-[11px] font-mono text-dark-subtle flex items-center gap-1"
                      title="Project views"
                    >
                      <Eye className="w-3 h-3 text-dark-muted" />
                      <span>{getProjectViews(project.id)}</span>
                    </span>
                  )}

                  <button
                    onClick={() => {
                      incrementProjectView?.(project.id);
                      setSelectedProject(project);
                    }}
                    className="inline-flex items-center gap-1 text-xs font-medium text-electric-cyan hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Quick View</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* View All / Toggle Additional Projects */}
        {activeFilter === 'all' && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-sm font-semibold text-white transition-all shadow-sm cursor-pointer"
            >
              <span>{showAll ? 'Show Top 6 Featured Projects' : `View All ${PROJECTS.length} Projects & Simulations`}</span>
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? '-rotate-90' : 'rotate-90'}`} />
            </button>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          views={selectedProject && getProjectViews ? getProjectViews(selectedProject.id) : undefined}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

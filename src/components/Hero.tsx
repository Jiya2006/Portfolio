import { ArrowRight, Sparkles, Cpu, Database, Code2, Eye } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResumeModal: () => void;
  pageViews?: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal, pageViews }) => {
  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techBadges = [
    { name: 'Python', icon: <Code2 className="w-3.5 h-3.5 text-blue-400" /> },
    { name: 'Machine Learning', icon: <Cpu className="w-3.5 h-3.5 text-electric-violetLight" /> },
    { name: 'React', icon: <span className="text-[11px] text-electric-cyan font-bold">⚛</span> },
    { name: 'Data Analysis', icon: <Database className="w-3.5 h-3.5 text-purple-300" /> },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[88vh] flex items-center justify-center pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-300 mb-8 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span>B.Tech CSE (AI &amp; ML) • Symbiosis Institute of Technology '28</span>
        </div>

        {/* Greeting */}
        <div className="flex items-center justify-center gap-2 mb-3">
          <span className="text-electric-cyan text-sm sm:text-base font-mono tracking-wide font-semibold">
            👋 Hello World
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.12]">
          Hi, I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violetLight via-white to-electric-cyan">
            {PROFILE_INFO.name}.
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-2xl font-semibold text-slate-200 mb-5 max-w-2xl leading-snug">
          "{PROFILE_INFO.tagline}"
        </p>

        {/* Supporting Description */}
        <p className="text-sm sm:text-base text-dark-muted max-w-2xl mb-8 leading-relaxed">
          {PROFILE_INFO.heroDescription}
        </p>

        {/* Small Technology Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          {techBadges.map((badge) => (
            <div
              key={badge.name}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 text-xs font-medium text-slate-300 transition-all shadow-sm"
            >
              {badge.icon}
              <span>{badge.name}</span>
            </div>
          ))}
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('#projects')}
            className="px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-electric-violet to-electric-violetDark hover:from-electric-violetLight hover:to-electric-violet transition-all duration-300 shadow-glow-violet flex items-center justify-center gap-2.5 group w-full sm:w-auto text-sm cursor-pointer"
          >
            <span>Explore My Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => scrollTo('#contact')}
            className="px-6 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-electric-cyan/40 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto text-sm cursor-pointer"
          >
            <span>Let's Connect</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="px-5 py-3.5 rounded-xl font-medium text-xs text-slate-300 hover:text-white hover:bg-white/[0.04] border border-white/10 transition-all w-full sm:w-auto text-center cursor-pointer"
          >
            Resume PDF Info
          </button>
        </div>

        {/* Social Profiles & Secondary Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6 border-t border-dark-border/60 w-full max-w-xl">
          <span className="text-xs uppercase font-mono tracking-wider text-dark-subtle">
            Connect:
          </span>
          <div className="flex items-center gap-3">
            <a
              href={PROFILE_INFO.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-dark-muted hover:text-white hover:border-white/30 hover:bg-white/[0.08] transition-all flex items-center gap-2 text-xs"
              aria-label="GitHub Profile"
              title="GitHub: Jiya2006"
            >
              <GithubIcon className="w-4 h-4" />
              <span className="font-mono">GitHub</span>
            </a>

            <a
              href={PROFILE_INFO.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-dark-muted hover:text-white hover:border-electric-cyan/50 hover:bg-electric-cyan/10 transition-all flex items-center gap-2 text-xs"
              aria-label="LinkedIn Profile"
              title="LinkedIn: Jiya Baghel"
            >
              <LinkedinIcon className="w-4 h-4 text-electric-cyanLight" />
              <span className="font-mono">LinkedIn</span>
            </a>
          </div>

          <div className="flex items-center gap-2 text-xs text-dark-subtle font-mono">
            <Sparkles className="w-3.5 h-3.5 text-electric-cyan" />
            <span>Open for internships</span>
          </div>

          {typeof pageViews === 'number' && (
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5 text-[11px] font-mono text-dark-muted">
              <Eye className="w-3.5 h-3.5 text-electric-cyan" />
              <span>{pageViews.toLocaleString()} views</span>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

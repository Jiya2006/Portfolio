import React from 'react';
import { Code, BrainCircuit, Globe, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-electric-violetLight" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 h-5 text-electric-cyanLight" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-purple-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-electric-cyan" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-xs font-mono text-electric-cyan mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="text-dark-muted max-w-2xl text-sm sm:text-base leading-relaxed">
            Technologies and frameworks applied across my academic coursework, predictive modeling projects, and network simulation research.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-cyan to-electric-violet rounded-full mt-4" />
        </div>

        {/* 4 Grouped Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.id}
              className="glass-card rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Subtle category accent gradient at top border */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
                  category.accent === 'violet'
                    ? 'from-electric-violet to-electric-violetLight'
                    : category.accent === 'cyan'
                    ? 'from-electric-cyan to-cyan-300'
                    : 'from-purple-500 to-indigo-400'
                }`} 
              />

              <div>
                {/* Header with Icon and Title */}
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-electric-cyanLight transition-colors">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Category Description */}
                <p className="text-xs sm:text-sm text-dark-muted mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Skill Badges / Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-electric-cyan/40 text-slate-200 text-xs sm:text-sm font-medium transition-all group/badge"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-electric-cyan group-hover/badge:scale-110 transition-transform" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag note */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-dark-subtle font-mono">
                <span>Core Competency</span>
                <span>{category.skills.length} tools &amp; concepts</span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on honest expertise */}
        <div className="mt-10 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-center text-xs text-dark-muted max-w-3xl mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 text-electric-cyan shrink-0" />
          <span>
            Focused on verifiable knowledge and practical implementation rather than inflated metrics. Every listed tool is actively used in my projects or coursework.
          </span>
        </div>

      </div>
    </section>
  );
};

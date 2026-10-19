import React from 'react';
import { Users, CheckCircle2, Building } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-xs font-mono text-electric-cyan mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>ORGANIZATIONAL LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Experience &amp; Leadership
          </h2>
          <p className="text-dark-muted max-w-2xl text-sm sm:text-base leading-relaxed">
            Institutional leadership roles driving event planning, inter-team collaboration, technical competitions, and student engagement at Symbiosis Institute of Technology.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-cyan to-electric-violet rounded-full mt-4" />
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Node */}
              <div 
                className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-125 ${
                  exp.isCurrent
                    ? 'border-electric-cyan bg-dark-bg text-electric-cyan shadow-glow-cyan'
                    : 'border-electric-violet bg-dark-bg text-electric-violetLight shadow-glow-violet'
                }`}
              >
                <div 
                  className={`w-2 h-2 rounded-full ${
                    exp.isCurrent ? 'bg-electric-cyan animate-ping' : 'bg-electric-violet'
                  }`} 
                />
              </div>

              {/* Main Content Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 group-hover:border-electric-cyan/40 transition-all">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-electric-cyanLight transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-medium ${
                      exp.isCurrent
                        ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                        : 'bg-white/[0.04] border border-white/10 text-dark-muted'
                    }`}>
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Organization & Location */}
                <div className="flex items-center gap-2 text-sm text-dark-muted mb-4 font-mono">
                  <Building className="w-4 h-4 text-electric-cyan" />
                  <span>{exp.organization}</span>
                </div>

                {/* Role Summary */}
                <p className="text-sm sm:text-base text-slate-300 mb-5 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities Bullets */}
                <div className="space-y-2.5 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-dark-muted">
                      <CheckCircle2 className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Leadership Skills Tags */}
                <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase font-mono text-dark-subtle mr-2">
                    Key Competencies:
                  </span>
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-slate-300 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

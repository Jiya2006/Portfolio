import React from 'react';
import { 
  Trophy, 
  Music, 
  Award, 
  Heart, 
  Sparkles, 
  BrainCircuit, 
  Code, 
  Terminal, 
  LineChart, 
  Users 
} from 'lucide-react';

import { ACHIEVEMENTS, INTERESTS } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'Music':
        return <Music className="w-6 h-6 text-pink-400" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-amber-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-electric-cyanLight" />;
      default:
        return <Sparkles className="w-6 h-6 text-electric-violet" />;
    }
  };

  const getInterestIcon = (iconName: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-4 h-4 text-electric-cyan" />;
      case 'Code':
        return <Code className="w-4 h-4 text-electric-violetLight" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-emerald-400" />;
      case 'LineChart':
        return <LineChart className="w-4 h-4 text-blue-400" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-yellow-300" />;
      case 'Users':
        return <Users className="w-4 h-4 text-indigo-400" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-rose-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-slate-300" />;
    }
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 border border-electric-violet/30 text-xs font-mono text-electric-violetLight mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>HONORS &amp; PASSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Achievements &amp; Interests
          </h2>
          <p className="text-dark-muted max-w-2xl text-sm sm:text-base leading-relaxed">
            A balanced representation of athletic teamwork, artistic discipline, college engagement, and multidimensional interests.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-violet to-electric-cyan rounded-full mt-4" />
        </div>

        {/* Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.id}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-white/10 group hover:border-electric-violet/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {getAchievementIcon(item.icon)}
                  </div>
                  {item.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium bg-white/[0.04] border border-white/10 text-slate-300">
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono uppercase tracking-wider text-electric-cyan mb-1">
                  {item.category}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-electric-cyanLight transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-dark-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[11px] text-dark-subtle font-mono">
                <Sparkles className="w-3 h-3 text-electric-violetLight" />
                <span>Verified Activity</span>
              </div>
            </div>
          ))}
        </div>

        {/* Interests & Hobbies Section */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                <Heart className="w-5 h-5 text-rose-400" />
                <span>Interests &amp; Driving Passions</span>
              </h3>
              <p className="text-xs sm:text-sm text-dark-muted">
                Areas I actively cultivate beyond the classroom, from technical programming to dance and event production.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {INTERESTS.map((interest) => (
              <div
                key={interest.name}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-electric-cyan/40 text-slate-200 text-xs sm:text-sm font-medium transition-all group"
              >
                <div className="group-hover:scale-110 transition-transform">
                  {getInterestIcon(interest.icon)}
                </div>
                <span>{interest.name}</span>
                <span className="text-[10px] uppercase font-mono text-dark-subtle px-1.5 py-0.5 rounded bg-white/[0.04]">
                  {interest.category}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

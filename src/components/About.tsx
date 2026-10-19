import React from 'react';
import { GraduationCap, Users, Lightbulb, Award, Sparkles, MapPin, Calendar } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-violet/10 border border-electric-violet/30 text-xs font-mono text-electric-violetLight mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND &amp; FOCUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            A Little About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-violet to-electric-cyan rounded-full" />
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Professional Narrative & Leadership */}
          <div className="lg:col-span-7 space-y-6 text-slate-300">
            
            {/* Introductory Paragraph */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-electric-violet/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-electric-cyan" />
                <span>Passionate About Applied AI &amp; Software Development</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-dark-muted mb-4">
                {PROFILE_INFO.aboutIntro}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-dark-muted">
                {PROFILE_INFO.aboutPhilosophy}
              </p>
            </div>

            {/* Leadership & Coordination Paragraph */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-electric-cyan/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-electric-violetLight" />
                <span>Leadership, Event Planning &amp; Campus Initiatives</span>
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-dark-muted">
                {PROFILE_INFO.leadershipIntro}
              </p>
            </div>

            {/* Quick Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <div className="text-electric-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                  Pillars
                </div>
                <div className="text-white font-bold text-sm mb-1">Curiosity First</div>
                <div className="text-xs text-dark-subtle">Continually exploring algorithms, libraries, and real problem spaces.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <div className="text-electric-violetLight font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                  Pillars
                </div>
                <div className="text-white font-bold text-sm mb-1">Collaborative Impact</div>
                <div className="text-xs text-dark-subtle">Thriving in cross-functional teams, peer mentoring, and event organization.</div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex flex-col">
                <div className="text-slate-300 font-mono text-xs font-semibold uppercase tracking-wider mb-1">
                  Pillars
                </div>
                <div className="text-white font-bold text-sm mb-1">Practical Rigor</div>
                <div className="text-xs text-dark-subtle">Focusing on clean implementations, verifiable models, and solid foundations.</div>
              </div>
            </div>

          </div>

          {/* Right Side: Education & Institutional Highlights Card */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Education Card */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-electric-violet/20 to-electric-cyan/20 border border-electric-violet/30 flex items-center justify-center text-electric-cyan">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-electric-cyan">
                    Formal Education
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {PROFILE_INFO.education.degree}
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-dark-subtle mb-1">Specialization</div>
                  <div className="font-semibold text-white">
                    {PROFILE_INFO.education.specialization}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="text-xs text-dark-subtle mb-1">Institution</div>
                  <div className="font-semibold text-slate-200">
                    {PROFILE_INFO.education.institution}
                  </div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-dark-muted">
                    <MapPin className="w-3.5 h-3.5 text-electric-cyan" />
                    <span>{PROFILE_INFO.education.location}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <div>
                    <div className="text-xs text-dark-subtle mb-0.5">Timeline</div>
                    <div className="font-medium text-white text-xs">
                      {PROFILE_INFO.education.status}
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-electric-violet/20 text-electric-violetLight font-mono text-xs font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Grad 2028</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Roles Summary Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-electric-cyan" />
                Key Roles At SIT Nagpur
              </h4>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 shrink-0 animate-pulse" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Organising Secretary – Event Management
                    </div>
                    <div className="text-[11px] text-dark-muted">
                      Directing college-wide event coordination, logistics &amp; student engagement.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="w-2 h-2 rounded-full bg-electric-violetLight mt-2 shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-white">
                      Co-coordinator – Competitive Club
                    </div>
                    <div className="text-[11px] text-dark-muted">
                      Organized technical &amp; cultural hackathons, challenges &amp; activities.
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

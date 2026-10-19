import React, { useState } from 'react';
import { X, FileText, Download, Sparkles, HelpCircle } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Attempt download of resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = `${PROFILE_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadNotice(
      "Download requested! If you have placed your resume.pdf into the public/ directory, your file will download immediately. Otherwise, see the setup instructions below."
    );
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow Header */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-electric-violet to-electric-cyan" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dark-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
          aria-label="Close resume modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-electric-violet/20 border border-electric-violet/30 flex items-center justify-center text-electric-violetLight">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="text-xl font-bold text-white">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs text-electric-cyan font-mono">
              {PROFILE_INFO.name} • B.Tech CSE (AI &amp; ML)
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="space-y-4 text-sm">
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-300 mb-2 flex items-center gap-1.5">
              <Download className="w-4 h-4 text-electric-cyan" />
              Download Option
            </div>
            <p className="text-dark-muted text-xs sm:text-sm leading-relaxed mb-4">
              Click below to initiate the direct PDF download. If you haven't added your resume file yet, simply drop your compiled PDF into the project's <code className="text-white font-mono bg-white/[0.08] px-1.5 py-0.5 rounded">public/resume.pdf</code> folder.
            </p>

            <button
              onClick={handleDownload}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-glow-violet hover:opacity-95 transition-opacity"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume PDF</span>
            </button>
          </div>

          {downloadNotice && (
            <div className="p-3.5 rounded-xl bg-electric-cyan/10 border border-electric-cyan/20 text-xs text-electric-cyanLight leading-relaxed flex items-start gap-2">
              <Sparkles className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{downloadNotice}</span>
            </div>
          )}

          {/* Quick Setup Instructions for Jiya */}
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
            <div className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5 text-electric-violetLight" />
              How to add your own Resume PDF:
            </div>
            <ol className="text-xs text-dark-muted space-y-1.5 list-decimal list-inside leading-relaxed">
              <li>Save your latest resume document as <code className="text-slate-300 font-mono">resume.pdf</code>.</li>
              <li>Place it inside the <code className="text-slate-300 font-mono">public/</code> directory in this project (<code className="text-slate-300 font-mono">jiya-portfolio/public/resume.pdf</code>).</li>
              <li>The download button will automatically serve your real PDF file with zero additional code changes!</li>
            </ol>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
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

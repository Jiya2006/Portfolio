import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Eye, Bell } from 'lucide-react';

interface NavbarProps {
  onOpenResumeModal: () => void;
  onOpenNotificationModal?: () => void;
  pageViews?: number;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenResumeModal, 
  onOpenNotificationModal,
  pageViews 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky background
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Compute scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-gradient-to-r from-electric-violet via-electric-violetLight to-electric-cyan origin-left transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Main Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-dark-border shadow-lg shadow-black/30 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Wordmark */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, '#home')}
              className="group flex items-center gap-2 focus:outline-none"
              aria-label="Jiya Baghel Home"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-electric-violet/20 to-electric-cyan/20 border border-electric-violet/30 flex items-center justify-center font-bold text-white transition-transform duration-300 group-hover:scale-105 group-hover:border-electric-cyan/60">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violetLight to-electric-cyan font-mono text-lg">
                  J
                </span>
              </div>
              <span className="font-extrabold tracking-wider text-lg text-white font-mono flex items-center">
                JIYA<span className="text-electric-cyan">.</span>
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-1.5 text-sm font-medium text-dark-muted hover:text-white rounded-lg hover:bg-white/[0.04] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {typeof pageViews === 'number' && (
                <div 
                  className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-mono shadow-sm"
                  title="Total Portfolio Page Views"
                >
                  <Eye className="w-3.5 h-3.5 text-electric-cyan animate-pulse" />
                  <span>{pageViews.toLocaleString()} views</span>
                </div>
              )}

              {onOpenNotificationModal && (
                <button
                  type="button"
                  onClick={onOpenNotificationModal}
                  className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer relative"
                  title="Visitor Alerts & Live Notifications"
                  aria-label="Visitor Notifications"
                >
                  <Bell className="w-4 h-4 text-electric-cyan" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </button>
              )}

              <button
                onClick={onOpenResumeModal}
                className="px-3.5 py-1.5 text-xs font-semibold text-slate-300 hover:text-white border border-dark-border rounded-lg hover:border-slate-500 hover:bg-white/[0.03] transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Resume</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white rounded-lg overflow-hidden group border border-electric-violet/40 bg-gradient-to-r from-electric-violetDark/60 to-electric-violet/60 hover:from-electric-violet hover:to-electric-cyan transition-all duration-300 shadow-glow-violet"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-electric-cyanLight animate-pulse" />
                  Let's Connect
                </span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-dark-muted hover:text-white hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-electric-violet"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-dark-border bg-dark-bg/95 backdrop-blur-2xl px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="px-3 py-2.5 text-base font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-dark-border flex flex-col gap-3">
              {typeof pageViews === 'number' && (
                <div className="flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300 font-mono">
                  <Eye className="w-3.5 h-3.5 text-electric-cyan" />
                  <span>{pageViews.toLocaleString()} Portfolio Views</span>
                </div>
              )}

              {onOpenNotificationModal && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenNotificationModal();
                  }}
                  className="w-full py-2.5 px-4 text-center text-sm font-medium text-electric-cyan hover:text-white border border-electric-cyan/30 rounded-lg bg-electric-cyan/10 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Bell className="w-4 h-4 text-electric-cyan" />
                  <span>Visitor Alerts &amp; Notifications</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-medium text-slate-300 hover:text-white border border-dark-border rounded-lg bg-white/[0.02]"
              >
                View / Download Resume
              </button>

              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, '#contact')}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-electric-violet to-electric-cyan flex items-center justify-center gap-2 shadow-glow-violet"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Download, 
  MapPin, 
  Sparkles, 
  AlertCircle, 
  CheckCircle2, 
  ExternalLink,
  Key,
  ShieldCheck,
  HelpCircle,
  X,
  Loader2
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ContactProps {
  onOpenResumeModal: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenResumeModal }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showApiKeyModal, setShowApiKeyModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error' | 'info'; message: string } | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Check if user has configured the Web3Forms API key in .env
  const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || '';
  const isApiKeyConfigured = Boolean(apiKey && apiKey !== 'your_web3forms_access_key_here');

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(PROFILE_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Please provide a subject.';
    if (!formData.message.trim()) newErrors.message = 'Please enter your message.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const triggerMailtoFallback = () => {
    const subjectEncoded = encodeURIComponent(`[Portfolio Contact] ${formData.subject} - from ${formData.name}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Jiya,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PROFILE_INFO.contact.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    if (isApiKeyConfigured) {
      // Direct submission via Web3Forms API
      setIsSubmitting(true);
      setFeedback(null);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: apiKey,
            name: formData.name,
            email: formData.email,
            subject: `[Portfolio Contact] ${formData.subject}`,
            message: formData.message,
            from_name: formData.name
          })
        });

        const data = await response.json();
        if (data.success) {
          setFeedback({
            type: 'success',
            message: 'Message delivered directly to Jiya\'s inbox via Web3Forms API! Thank you for reaching out.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(data.message || 'API rejected submission');
        }
      } catch (err) {
        console.warn('API submission failed, falling back to mailto:', err);
        setFeedback({
          type: 'info',
          message: 'Direct API delivery encountered an issue. Opening your email client as fallback...'
        });
        triggerMailtoFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Fallback mode when API key is not configured
      triggerMailtoFallback();
      setFeedback({
        type: 'info',
        message: 'Pre-filled your default email client. (You can also add a free Web3Forms API key in .env for direct background sending!)'
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-cyan/10 border border-electric-cyan/30 text-xs font-mono text-electric-cyan mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
            Have an Opportunity or Idea? Let's Connect.
          </h2>
          <p className="text-dark-muted max-w-2xl text-sm sm:text-base leading-relaxed">
            I am always excited to discuss machine learning applications, software projects, leadership initiatives, and internship opportunities.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-electric-cyan to-electric-violet rounded-full mt-4" />
        </div>

        {/* Split Layout: Contact Info vs Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Links & Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card with Copy button */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 relative overflow-hidden group">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-electric-cyan/15 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-mono text-dark-subtle tracking-wider">
                    Direct Email
                  </span>
                  <div className="text-base font-bold text-white font-mono break-all">
                    {PROFILE_INFO.contact.email}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-dark-muted" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PROFILE_INFO.contact.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-electric-cyan/20 hover:bg-electric-cyan/30 border border-electric-cyan/40 text-xs font-semibold text-electric-cyan transition-all"
                >
                  <span>Compose Mail</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-white/10 space-y-4">
              <span className="text-xs uppercase font-mono text-dark-subtle tracking-wider block">
                Professional Networks
              </span>

              {/* GitHub Link */}
              <a
                href={PROFILE_INFO.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-white/[0.05] text-white">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-electric-cyanLight transition-colors">
                      GitHub Profile
                    </div>
                    <div className="text-xs text-dark-muted font-mono">
                      @Jiya2006
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-dark-subtle group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn Link */}
              <a
                href={PROFILE_INFO.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-electric-cyan/30 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-electric-cyan/15 text-electric-cyan">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white group-hover:text-electric-cyanLight transition-colors">
                      LinkedIn Network
                    </div>
                    <div className="text-xs text-dark-muted font-mono">
                      Jiya Baghel
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-dark-subtle group-hover:text-white transition-colors" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-dark-muted font-mono">
                <MapPin className="w-4 h-4 text-electric-cyan" />
                <span>Nagpur, Maharashtra, India</span>
              </div>
            </div>

            {/* Resume Button */}
            <div className="glass-panel rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">Looking for my CV?</h4>
                <p className="text-xs text-dark-muted">Check qualifications, coursework &amp; experience.</p>
              </div>
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-glow-violet hover:opacity-95 transition-opacity cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>

          </div>

          {/* Right Column: Contact Form with API Integration */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 relative">
              
              {/* Form Title & API Status Pill */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <h3 className="text-xl font-bold text-white">
                  Send a Message
                </h3>

                {/* API Key Status Pill */}
                <div className="flex items-center gap-2">
                  {isApiKeyConfigured ? (
                    <span 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[11px] font-mono text-emerald-300"
                      title="Direct API Delivery Active"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      <span>API Active</span>
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setShowApiKeyModal(true)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-electric-violet/15 hover:bg-electric-violet/25 border border-electric-violet/30 text-[11px] font-mono text-electric-violetLight transition-colors cursor-pointer"
                      title="Click to learn how to add your API Key"
                    >
                      <Key className="w-3.5 h-3.5 text-electric-cyan" />
                      <span>API Key: Setup Available</span>
                      <HelpCircle className="w-3 h-3 text-dark-subtle" />
                    </button>
                  )}
                </div>
              </div>

              <p className="text-xs sm:text-sm text-dark-muted mb-6">
                {isApiKeyConfigured 
                  ? "Your message will be sent directly through the Web3Forms API to Jiya's inbox."
                  : "Fill in your details below to prepare your message directly for delivery."}
              </p>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Sharma"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-dark-subtle focus:outline-none transition-colors ${
                        errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-dark-subtle focus:outline-none transition-colors ${
                        errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Subject <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Internship Inquiry / Collaboration Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-dark-subtle focus:outline-none transition-colors ${
                      errors.subject ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, idea, or role..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-dark-subtle focus:outline-none transition-colors resize-y ${
                      errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-white/10 focus:border-electric-cyan'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan hover:from-electric-violetLight hover:to-cyan-300 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-violet transition-all duration-300 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting via API...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isApiKeyConfigured ? 'Send Message via Web3Forms API' : 'Send Message (Direct Mailto / API Ready)'}</span>
                    </>
                  )}
                </button>

                {/* Feedback Note */}
                {feedback && (
                  <div className={`p-4 rounded-xl border text-xs leading-relaxed flex items-start gap-2.5 animate-fadeIn ${
                    feedback.type === 'success' 
                      ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-200' 
                      : feedback.type === 'error'
                      ? 'bg-rose-500/15 border-rose-500/30 text-rose-200'
                      : 'bg-electric-cyan/15 border-electric-cyan/30 text-electric-cyanLight'
                  }`}>
                    {feedback.type === 'success' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <Sparkles className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
                    )}
                    <div>
                      <strong className="block text-white mb-0.5">
                        {feedback.type === 'success' ? 'Message Sent' : 'Notice'}
                      </strong>
                      {feedback.message}
                    </div>
                  </div>
                )}

                {/* API Key Quick Trigger Tip */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-dark-subtle leading-relaxed flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Key className="w-3.5 h-3.5 text-electric-cyan shrink-0" />
                    <span>
                      <strong>API Key Feature:</strong> {isApiKeyConfigured ? "Web3Forms Access Key is active." : "Add your free Web3Forms key to .env for silent direct delivery."}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowApiKeyModal(true)}
                    className="text-electric-cyan hover:underline font-mono text-[11px] shrink-0 cursor-pointer"
                  >
                    Details &rarr;
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* API Key Guide Modal */}
      {showApiKeyModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="relative w-full max-w-lg bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-electric-violet to-electric-cyan" />
            
            <button
              onClick={() => setShowApiKeyModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl text-dark-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-electric-violet/20 border border-electric-violet/30 flex items-center justify-center text-electric-cyan">
                <Key className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Contact Form API Key Setup</h3>
                <p className="text-xs text-electric-cyan font-mono">Web3Forms Serverless Integration</p>
              </div>
            </div>

            <div className="space-y-4 text-xs text-dark-muted leading-relaxed">
              <p>
                To enable direct, serverless form submissions without opening your email client, connect a free Web3Forms Access Key:
              </p>

              <ol className="list-decimal list-inside space-y-2 p-4 rounded-xl bg-white/[0.03] border border-white/5 text-slate-300">
                <li>
                  Go to <a href="https://web3forms.com" target="_blank" rel="noreferrer" className="text-electric-cyan underline font-mono">web3forms.com</a> (100% free, no credit card or account needed).
                </li>
                <li>
                  Enter your email address <code className="text-electric-cyanLight font-mono">jiyab623@gmail.com</code> and click <em>Create Access Key</em>.
                </li>
                <li>
                  Copy the Access Key sent to your inbox.
                </li>
                <li>
                  Open your <code className="text-slate-200 font-mono">.env</code> file in the project and paste it:
                  <div className="mt-1 p-2 rounded bg-black/60 border border-white/10 text-emerald-300 font-mono text-[11px]">
                    VITE_WEB3FORMS_ACCESS_KEY=your_key_here
                  </div>
                </li>
              </ol>

              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Once added, the form will submit messages directly in the background!</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex justify-end">
              <button
                onClick={() => setShowApiKeyModal(false)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-white/[0.06] hover:bg-white/[0.12] transition-colors cursor-pointer"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

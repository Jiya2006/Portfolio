import React, { useState } from 'react';
import { X, Bell, Smartphone, Mail, CheckCircle2, Send, ExternalLink, Sparkles, Loader2 } from 'lucide-react';

interface NotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSendTestNotification: () => Promise<{ success: boolean; channels: string[] }>;
}

export const NotificationModal: React.FC<NotificationModalProps> = ({
  isOpen,
  onClose,
  onSendTestNotification,
}) => {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; channels: string[] } | null>(null);

  if (!isOpen) return null;

  const ntfyTopic = import.meta.env.VITE_NTFY_TOPIC || 'jiya_portfolio_visits_2028';
  const ntfyUrl = `https://ntfy.sh/${ntfyTopic}`;

  const handleTest = async () => {
    setTesting(true);
    setResult(null);
    try {
      const res = await onSendTestNotification();
      setResult(res);
    } catch {
      setResult({ success: false, channels: ['Error triggering notification'] });
    } finally {
      setTesting(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative w-full max-w-lg bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-electric-violet via-electric-cyan to-electric-violet" />
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-dark-muted hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-electric-violet/20 to-electric-cyan/20 border border-electric-cyan/30 flex items-center justify-center text-electric-cyan">
            <Bell className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">
              Instant Visitor Alerts
            </h3>
            <p className="text-xs text-electric-cyan font-mono">
              Real-time Mobile &amp; Email Notifications
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 text-xs sm:text-sm text-dark-muted leading-relaxed">
          <p>
            Whenever a recruiter or user lands on your portfolio, this system can automatically notify you in real time!
          </p>

          {/* Option 1: Mobile Push Notification via ntfy.sh */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Smartphone className="w-4 h-4 text-electric-cyan" />
                <span>1. Instant Phone Notification (100% Free)</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 font-mono text-[10px]">
                Ready &amp; Active
              </span>
            </div>

            <p className="text-xs text-dark-muted leading-relaxed">
              Open the link below on your phone (or install the free <code className="text-slate-200 font-mono">ntfy</code> app on Android/iOS) and click <strong>Subscribe</strong> to channel <code className="text-electric-cyan font-mono">{ntfyTopic}</code>:
            </p>

            <a
              href={ntfyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-electric-cyan/15 hover:bg-electric-cyan/25 border border-electric-cyan/30 text-xs text-electric-cyan font-mono font-medium transition-colors"
            >
              <span>Subscribe on your Phone: ntfy.sh/{ntfyTopic}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Option 2: Email Alert via Web3Forms */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Mail className="w-4 h-4 text-electric-violetLight" />
                <span>2. Email Alerts to Inbox</span>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-white/[0.05] text-slate-300 font-mono text-[10px]">
                Web3Forms
              </span>
            </div>

            <p className="text-xs text-dark-muted leading-relaxed">
              When your free Web3Forms key is set in <code className="text-slate-200 font-mono">.env</code>, every new unique visitor session triggers an email summary straight to <code className="text-electric-cyanLight font-mono">jiyab623@gmail.com</code>.
            </p>
          </div>

          {/* Test Button */}
          <div className="pt-2">
            <button
              onClick={handleTest}
              disabled={testing}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-glow-violet hover:opacity-95 transition-opacity cursor-pointer disabled:opacity-60"
            >
              {testing ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Test Notification...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Test Notification Now (Try It!)</span>
                </>
              )}
            </button>
          </div>

          {/* Result Feedback */}
          {result && (
            <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-200 flex items-start gap-2.5 animate-fadeIn">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-white mb-0.5">Test Alert Dispatched!</strong>
                Sent via: {result.channels.join(', ')}. If you opened the ntfy link or subscribed on your phone, you should see the alert right now!
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[11px] text-dark-subtle font-mono">
            <Sparkles className="w-3.5 h-3.5 text-electric-cyan" />
            <span>Anti-spam: Rate-limited to 1 alert per session</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-dark-muted hover:text-white transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

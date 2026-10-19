/**
 * Visit Notifier Service
 * Sends automated real-time notifications when someone visits Jiya's portfolio.
 * 
 * Supports:
 * 1. Instant Mobile Push Notifications via ntfy.sh (100% Free, no signup required)
 * 2. Email Notifications via Web3Forms API (Delivers to jiyab623@gmail.com)
 * 3. Discord Webhook Notifications (Optional)
 */

const STORAGE_SESSION_NOTIFIED = 'jiya_visit_notified_session';

export interface VisitorInfo {
  timestamp: string;
  referrer: string;
  device: string;
  screen: string;
  language: string;
  timezone: string;
  page: string;
}

export const getVisitorInfo = (): VisitorInfo => {
  const width = window.innerWidth;
  let device = 'Desktop';
  if (width < 640) device = 'Mobile';
  else if (width < 1024) device = 'Tablet';

  return {
    timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
    referrer: document.referrer ? new URL(document.referrer).hostname : 'Direct / Bookmark',
    device,
    screen: `${window.screen.width}x${window.screen.height}`,
    language: navigator.language || 'Unknown',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata',
    page: window.location.pathname || '/',
  };
};

export const notifyPortfolioVisit = async (forceTest = false): Promise<{ success: boolean; channels: string[] }> => {
  // Prevent duplicate notifications in the same browser session unless explicitly forced
  if (!forceTest) {
    const alreadyNotified = sessionStorage.getItem(STORAGE_SESSION_NOTIFIED);
    if (alreadyNotified) {
      return { success: true, channels: ['Skipped (Already notified for this session)'] };
    }
  }

  const info = getVisitorInfo();
  const successfulChannels: string[] = [];

  // Channel 1: Free Push Notification via ntfy.sh (No API key needed)
  const ntfyTopic = import.meta.env.VITE_NTFY_TOPIC || 'jiya_portfolio_visits_2028';
  try {
    const message = `🎉 Someone just visited your portfolio!\n• Source: ${info.referrer}\n• Device: ${info.device} (${info.screen})\n• Time: ${info.timestamp}\n• Region: ${info.timezone}`;
    
    await fetch(`https://ntfy.sh/${ntfyTopic}`, {
      method: 'POST',
      headers: {
        'Title': '🚀 New Portfolio Visitor Alert!',
        'Priority': 'high',
        'Tags': 'eyes,sparkles,wave',
      },
      body: message,
    });
    successfulChannels.push(`Mobile Push (ntfy.sh/${ntfyTopic})`);
  } catch (err) {
    console.debug('ntfy push notification failed:', err);
  }

  // Channel 2: Email Alert via Web3Forms (if key is configured in .env)
  const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  const emailNotificationEnabled = import.meta.env.VITE_NOTIFY_EMAIL !== 'false';

  if (web3Key && web3Key !== 'your_web3forms_access_key_here' && emailNotificationEnabled) {
    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `🔔 [Portfolio Visit Alert] New Visitor from ${info.referrer}`,
          from_name: 'Portfolio Visit Tracker',
          message: `Hello Jiya,\n\nA new visitor just landed on your portfolio website!\n\n• Referrer: ${info.referrer}\n• Device: ${info.device}\n• Screen Resolution: ${info.screen}\n• Browser Language: ${info.language}\n• Timezone: ${info.timezone}\n• Local Time: ${info.timestamp}\n\nKeep building amazing things!`,
        }),
      });
      successfulChannels.push('Email Alert (Web3Forms to jiyab623@gmail.com)');
    } catch (err) {
      console.debug('Email notification failed:', err);
    }
  }

  // Channel 3: Optional Discord Webhook (if user has configured one)
  const discordWebhook = import.meta.env.VITE_DISCORD_WEBHOOK_URL?.trim();
  if (discordWebhook) {
    try {
      await fetch(discordWebhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: `🔔 **New Portfolio Visitor Alert!**\n> **Source:** \`${info.referrer}\`\n> **Device:** \`${info.device}\` (\`${info.screen}\`)\n> **Time:** \`${info.timestamp}\``,
        }),
      });
      successfulChannels.push('Discord Webhook');
    } catch (err) {
      console.debug('Discord notification failed:', err);
    }
  }

  // Mark session as notified
  sessionStorage.setItem(STORAGE_SESSION_NOTIFIED, 'true');
  return {
    success: successfulChannels.length > 0,
    channels: successfulChannels,
  };
};

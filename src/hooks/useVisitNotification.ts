import { useEffect, useState } from 'react';
import { notifyPortfolioVisit } from '../services/visitNotifier';

export const useVisitNotification = () => {
  const [notified, setNotified] = useState(false);
  const [channels, setChannels] = useState<string[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  useEffect(() => {
    // Automatically trigger notification once per visitor session
    const trigger = async () => {
      const res = await notifyPortfolioVisit(false);
      setNotified(res.success);
      setChannels(res.channels);
    };

    trigger();
  }, []);

  const sendTestNotification = async () => {
    setIsTesting(true);
    try {
      const res = await notifyPortfolioVisit(true);
      setNotified(res.success);
      setChannels(res.channels);
      return res;
    } finally {
      setIsTesting(false);
    }
  };

  return {
    notified,
    channels,
    isTesting,
    sendTestNotification,
  };
};

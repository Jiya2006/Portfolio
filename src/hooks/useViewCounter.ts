import { useState, useEffect } from 'react';

const STORAGE_KEY_PAGE_VIEWS = 'jiya_portfolio_page_views';
const STORAGE_KEY_SESSION = 'jiya_portfolio_session_counted';
const STORAGE_KEY_PROJECT_VIEWS = 'jiya_portfolio_project_views';
const BASELINE_VIEWS = 1240; // Clean baseline for initial launch

export interface ViewCounterState {
  pageViews: number;
  loading: boolean;
  incrementProjectView: (projectId: string) => number;
  getProjectViews: (projectId: string) => number;
}

export const useViewCounter = (): ViewCounterState => {
  const [pageViews, setPageViews] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY_PAGE_VIEWS);
    return saved ? parseInt(saved, 10) : BASELINE_VIEWS;
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isCounterEnabled = import.meta.env.VITE_ENABLE_VIEW_COUNTER !== 'false';
    if (!isCounterEnabled) {
      setLoading(false);
      return;
    }

    const namespace = import.meta.env.VITE_COUNTER_NAMESPACE || 'jiya-baghel-portfolio';
    const sessionCounted = sessionStorage.getItem(STORAGE_KEY_SESSION);

    const updateViewsLocally = () => {
      const current = parseInt(localStorage.getItem(STORAGE_KEY_PAGE_VIEWS) || `${BASELINE_VIEWS}`, 10);
      const next = sessionCounted ? current : current + 1;
      localStorage.setItem(STORAGE_KEY_PAGE_VIEWS, `${next}`);
      if (!sessionCounted) {
        sessionStorage.setItem(STORAGE_KEY_SESSION, 'true');
      }
      setPageViews(next);
      setLoading(false);
    };

    // Try fetching from public counter API, otherwise use local storage
    const fetchOnlineCount = async () => {
      try {
        const action = sessionCounted ? '' : '/up';
        const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/views${action}`, {
          method: 'GET',
          headers: { 'Accept': 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          if (data && typeof data.count === 'number') {
            const total = Math.max(data.count, BASELINE_VIEWS);
            setPageViews(total);
            localStorage.setItem(STORAGE_KEY_PAGE_VIEWS, `${total}`);
            sessionStorage.setItem(STORAGE_KEY_SESSION, 'true');
            setLoading(false);
            return;
          }
        }
      } catch (err) {
        // Fallback to local storage if API is blocked or offline
        console.debug('Using local view count persistence:', err);
      }
      updateViewsLocally();
    };

    fetchOnlineCount();
  }, []);

  const getProjectViews = (projectId: string): number => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_PROJECT_VIEWS);
      const parsed: Record<string, number> = stored ? JSON.parse(stored) : {};
      return parsed[projectId] || Math.floor(Math.abs(hashString(projectId) % 80)) + 45;
    } catch {
      return 68;
    }
  };

  const incrementProjectView = (projectId: string): number => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_PROJECT_VIEWS);
      const parsed: Record<string, number> = stored ? JSON.parse(stored) : {};
      const current = parsed[projectId] || getProjectViews(projectId);
      const next = current + 1;
      parsed[projectId] = next;
      localStorage.setItem(STORAGE_KEY_PROJECT_VIEWS, JSON.stringify(parsed));
      return next;
    } catch {
      return 70;
    }
  };

  return {
    pageViews,
    loading,
    incrementProjectView,
    getProjectViews,
  };
};

function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash;
}

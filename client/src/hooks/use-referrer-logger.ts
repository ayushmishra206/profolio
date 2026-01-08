import { useEffect, useRef } from 'react';

export function useReferrerLogger() {
  const hasLoggedRef = useRef(false);

  useEffect(() => {
    // Only log once per session
    if (hasLoggedRef.current) return;

    const logReferrer = async () => {
      try {
        const referrer = document.referrer;
        const timestamp = new Date().toISOString();
        const userAgent = navigator.userAgent;
        const path = window.location.pathname;

        await fetch('/api/log-referrer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            referrer,
            timestamp,
            userAgent,
            path,
          }),
        });

        hasLoggedRef.current = true;
      } catch (error) {
        console.error('Failed to log referrer:', error);
      }
    };

    logReferrer();
  }, []);
}

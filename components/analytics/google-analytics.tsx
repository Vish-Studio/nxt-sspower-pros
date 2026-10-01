'use client';

import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/services/analytics';
import {
  CONSENT_CHANGE_EVENT,
  getStoredConsent,
  type ConsentChoice,
} from '@/components/cookie-consent/cookie-consent';

const SCRIPT_ID = 'ga4-script';

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js requires the Arguments object, not an array.
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
  }
}

function applyConsent(choice: ConsentChoice) {
  const disableKey = `ga-disable-${GA_MEASUREMENT_ID}`;
  ensureGtag();

  if (choice === 'denied') {
    (window as unknown as Record<string, unknown>)[disableKey] = true;
    window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    return;
  }

  (window as unknown as Record<string, unknown>)[disableKey] = false;
  window.gtag?.('consent', 'update', { analytics_storage: 'granted' });

  if (document.getElementById(SCRIPT_ID)) return;
  const script = document.createElement('script');
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  window.gtag?.('js', new Date());
  window.gtag?.('config', GA_MEASUREMENT_ID);
}

export function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const stored = getStoredConsent();
    if (stored) applyConsent(stored);

    const onChange = (event: Event) => applyConsent((event as CustomEvent<ConsentChoice>).detail);
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, []);

  return null;
}

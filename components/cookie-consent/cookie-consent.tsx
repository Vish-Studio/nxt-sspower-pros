'use client';

import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';

export const CONSENT_STORAGE_KEY = 'ss-power-pros-cookie-consent';
export const CONSENT_CHANGE_EVENT = 'cookie-consent-change';
export const OPEN_CONSENT_EVENT = 'cookie-consent-open';

export type ConsentChoice = 'granted' | 'denied';

export function getStoredConsent(): ConsentChoice | null {
  try {
    const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : null;
  } catch {
    return null;
  }
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_CONSENT_EVENT));
}

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
    const open = () => setVisible(true);
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  const choose = (choice: ConsentChoice) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Storage unavailable: the choice only applies to this page view.
    }
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: choice }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-labelledby="cookie-consent-title">
      <div className="cookie-consent__icon" aria-hidden="true">
        <Cookie size={20} strokeWidth={2.3} />
      </div>
      <div className="cookie-consent__body">
        <h2 id="cookie-consent-title" className="cookie-consent__title">
          Cookies on our site
        </h2>
        <p className="cookie-consent__text">
          We use analytics cookies to understand how visitors use the site and improve our service.
          You can accept or decline; the site works the same either way.
        </p>
      </div>
      <div className="cookie-consent__actions">
        <button type="button" className="button button--ghost" onClick={() => choose('denied')}>
          <span>Decline</span>
        </button>
        <button type="button" className="button button--primary" onClick={() => choose('granted')}>
          <span>Accept</span>
        </button>
      </div>
    </div>
  );
}

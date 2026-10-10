export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '';

/**
 * GA4 events sent by this site (all are only sent after cookie consent is granted).
 *
 * Mark these as key events in GA4 (Admin > Events): whatsapp_click, phone_click, email_click.
 *
 * page_view            automatic (GA4 enhanced measurement, incl. route changes)
 * whatsapp_click       { location, link_text }  WhatsApp / booking CTA clicked
 * phone_click          { location, link_text }  tel: link clicked
 * email_click          { location, link_text }  mailto: link clicked
 * service_nav_click    { service, location }    link to a /services/* page clicked
 * outbound_click       { link_url, location }   external link clicked
 * section_view         { section }              homepage/landing section scrolled into view (once each)
 * scroll_depth         { percent }              25, 50, 75, 90 (once each per page)
 */
export type AnalyticsEventName =
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'service_nav_click'
  | 'outbound_click'
  | 'section_view'
  | 'scroll_depth';

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: AnalyticsEventName, params: EventParams = {}) {
  if (typeof window === 'undefined' || !GA_MEASUREMENT_ID || !window.gtag) return;
  window.gtag('event', name, params);
}

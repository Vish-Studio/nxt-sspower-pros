'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { trackEvent } from '@/services/analytics';

const SCROLL_MARKS = [25, 50, 75, 90];

function locationOf(element: Element) {
  const section = element.closest('section[id], header, footer, nav');
  return section?.id || section?.tagName.toLowerCase() || 'page';
}

function textOf(element: Element) {
  return (element.textContent ?? '').trim().replace(/\s+/g, ' ').slice(0, 80);
}

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest('a');
      if (!link) return;

      const href = link.getAttribute('href') ?? '';
      const serviceMatch = href.match(/^\/?(?:[^#?]*\/)?services\/([^/?#]+)/);
      const params = { location: locationOf(link), link_text: textOf(link) };

      if (link.classList.contains('whatsapp-cta') || href.includes('wa.me') || href.includes('whatsapp.com')) {
        trackEvent('whatsapp_click', params);
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', params);
      } else if (href.startsWith('mailto:')) {
        trackEvent('email_click', params);
      } else if (serviceMatch) {
        trackEvent('service_nav_click', { service: serviceMatch[1], location: params.location });
      } else if (link.host && link.host !== window.location.host && /^https?:/.test(link.href)) {
        trackEvent('outbound_click', { link_url: link.href, location: params.location });
      }
    };

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  useEffect(() => {
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id;
          if (entry.isIntersecting && !seen.has(id)) {
            seen.add(id);
            trackEvent('section_view', { section: id });
          }
        }
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll('section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const sent = new Set<number>();
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const percent = (window.scrollY / scrollable) * 100;
      for (const mark of SCROLL_MARKS) {
        if (percent >= mark && !sent.has(mark)) {
          sent.add(mark);
          trackEvent('scroll_depth', { percent: mark });
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
}

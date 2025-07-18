'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export default function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-06CY96V1PP', {
      page_path: window.location.pathname,
    });
  }, []);

  return (
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-06CY96V1PP"
      strategy="afterInteractive"
    />
  );
}

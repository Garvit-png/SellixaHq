"use client";

import dynamic from "next/dynamic";

const NoiseOverlay   = dynamic(() => import("@/components/NoiseOverlay").then(m => ({ default: m.NoiseOverlay })), { ssr: false });
const PageLoader     = dynamic(() => import("@/components/PageLoader").then(m => ({ default: m.PageLoader })), { ssr: false });
const WhatsAppWidget = dynamic(() => import("@/components/WhatsAppWidget").then(m => ({ default: m.WhatsAppWidget })), { ssr: false });
const CookieConsent  = dynamic(() => import("@/components/CookieConsent").then(m => ({ default: m.CookieConsent })), { ssr: false });

export function ClientProviders() {
  return (
    <>
      <NoiseOverlay />
      <PageLoader />
      <WhatsAppWidget phoneNumber="919876543210" />
      <CookieConsent />
    </>
  );
}

'use client';

import dynamic from 'next/dynamic';

const SocialProof = dynamic(() => import('./SocialProof'), { ssr: false });
const CookieConsent = dynamic(() => import('./CookieConsent'), { ssr: false });
const ExitIntent = dynamic(() => import('./ExitIntent'), { ssr: false });
const ProgressBar = dynamic(() => import('./ProgressBar'), { ssr: false });

export default function GrowthWidgets() {
  return (
    <>
      <SocialProof />
      <CookieConsent />
      <ExitIntent />
      <ProgressBar />
    </>
  );
}

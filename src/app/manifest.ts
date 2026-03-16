// ═══════════════════════════════════════════════════════════════
// MOROCCO GUIDE — PWA Web App Manifest
// Next.js metadata file convention: generates /manifest.webmanifest
// Defines app identity, icons, display mode, and theme for PWA
// ═══════════════════════════════════════════════════════════════

import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CityGuide - Your Complete Morocco Travel Companion',
    short_name: 'CityGuide',
    description:
      'Discover Morocco with the most comprehensive travel guide. Explore imperial cities, Sahara desert tours, authentic riads, Moroccan cuisine, Atlas Mountain treks, and local experiences. Plan your perfect Moroccan adventure with expert tips and interactive tools.',
    start_url: '/',
    id: '/',
    scope: '/',
    display: 'standalone',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    background_color: '#1A1814',
    theme_color: '#C4960C',
    orientation: 'portrait-primary',
    categories: ['travel', 'navigation', 'lifestyle', 'food'],
    lang: 'en',
    dir: 'ltr',
    prefer_related_applications: false,
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
      },
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    screenshots: [
      {
        src: '/opengraph-image',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'CityGuide Morocco Homepage',
      },
    ],
    shortcuts: [
      {
        name: 'Explore Cities',
        short_name: 'Cities',
        url: '/cities',
        description: 'Browse all Morocco cities and destinations',
      },
      {
        name: 'Find Tours',
        short_name: 'Tours',
        url: '/tours',
        description: 'Discover guided tours across Morocco',
      },
      {
        name: 'Restaurants',
        short_name: 'Food',
        url: '/restaurants',
        description: 'Find the best Moroccan restaurants and cuisine',
      },
      {
        name: 'Plan Trip',
        short_name: 'Plan',
        url: '/itineraries',
        description: 'Build your perfect Morocco itinerary',
      },
    ],
  };
}

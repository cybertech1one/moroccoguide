import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Packing Checklist | What to Pack by Season & Activity',
  description:
    'Interactive packing checklist for Morocco trips. Select your season and activities (desert, mountains, beach, city, trekking) for a personalized, saveable packing list with local tips.',
  keywords: [
    'Morocco packing list',
    'what to pack for Morocco',
    'Morocco travel checklist',
    'Morocco winter packing',
    'Morocco summer packing',
    'desert packing list',
    'Morocco hiking gear',
    'Morocco beach packing',
    'what to wear in Morocco',
    'Morocco clothing tips',
  ],
  openGraph: {
    title: 'Morocco Packing Checklist - By Season & Activity',
    description:
      'Get a personalized Morocco packing list based on your travel season and planned activities. Interactive checklist with local insider tips.',
    type: 'website',
    url: 'https://citytoursmorocco.com/tools/packing',
  },
}

export default function PackingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

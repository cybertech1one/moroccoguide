import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Pre-Trip Checklist | Timeline-Based Travel Preparation',
  description:
    'Complete pre-trip checklist for Morocco with a timeline from 3 months to arrival day. Track passport, visas, vaccinations, accommodation, insurance, packing, and more with an interactive progress tracker.',
  keywords: [
    'Morocco pre-trip checklist',
    'Morocco travel preparation',
    'Morocco visa requirements',
    'Morocco travel planning',
    'before traveling to Morocco',
    'Morocco trip preparation timeline',
    'Morocco travel documents',
    'Morocco travel insurance',
    'Morocco SIM card guide',
    'Morocco arrival tips',
  ],
  openGraph: {
    title: 'Morocco Pre-Trip Checklist - Timeline-Based Preparation',
    description:
      'Interactive, saveable checklist to prepare for your Morocco trip. From 3 months before departure to arrival day, track every step.',
    type: 'website',
    url: 'https://citytoursmorocco.com/tools/checklist',
  },
}

export default function ChecklistLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

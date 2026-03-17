import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Trip Budget Calculator | Estimate Your Travel Costs in MAD',
  description:
    'Plan your Morocco trip budget with our interactive calculator. Get daily cost estimates for Budget, Mid-Range, and Luxury travel styles including accommodation, food, transport, and activities.',
  keywords: [
    'Morocco trip budget',
    'Morocco travel costs',
    'how much does Morocco cost',
    'Morocco budget calculator',
    'Morocco daily budget',
    'Morocco accommodation prices',
    'Morocco food prices',
    'Morocco transport costs',
    'cheap travel Morocco',
    'luxury travel Morocco',
  ],
  openGraph: {
    title: 'Morocco Trip Budget Calculator',
    description:
      'Estimate your Morocco trip costs by travel style and duration. Budget, Mid-Range, and Luxury breakdowns with real prices in MAD.',
    type: 'website',
    url: 'https://citytoursmorocco.com/tools/budget',
  },
}

export default function BudgetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

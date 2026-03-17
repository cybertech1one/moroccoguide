import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Morocco Currency Converter | MAD Exchange Rates & Tipping Guide',
  description:
    'Convert Moroccan Dirham (MAD) to USD, EUR, GBP, CAD, and AUD with approximate exchange rates. Includes common costs in Morocco, tipping guide, and ATM tips for travelers.',
  keywords: [
    'Morocco currency converter',
    'Moroccan Dirham exchange rate',
    'MAD to USD',
    'MAD to EUR',
    'Morocco tipping guide',
    'Morocco money tips',
    'ATM Morocco',
    'currency exchange Morocco',
    'how much to tip in Morocco',
    'Morocco travel costs',
  ],
  openGraph: {
    title: 'Morocco Currency Converter & Tipping Guide',
    description:
      'Convert MAD to major currencies, see common costs in Morocco, and learn tipping customs. Essential money tool for Morocco travelers.',
    type: 'website',
    url: 'https://citytoursmorocco.com/tools/currency',
  },
}

export default function CurrencyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Inter, Noto_Naskh_Arabic } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/layout/BackToTop';
import SEOJsonLd from '@/components/growth/SEOJsonLd';
import GrowthWidgets from '@/components/growth/GrowthWidgets';
import AIAssistantLoader from '@/components/ai/AIAssistantLoader';
import './globals.css';

/* ─── Font Configuration ─── */

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

/* ─── Viewport ─── */

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAF8F5' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1520' },
  ],
};

/* ─── SEO Metadata ─── */

export const metadata: Metadata = {
  metadataBase: new URL('https://cityguide.ma'),
  title: {
    template: '%s | CityGuide - Your Complete Morocco Travel Companion',
    default:
      'CityGuide - The Ultimate Morocco Tourism Directory & Travel Guide',
  },
  description:
    'Discover Morocco with the most comprehensive travel guide. Explore imperial cities, Sahara desert tours, authentic riads, Moroccan cuisine, Atlas Mountain treks, and local experiences. Plan your perfect trip with expert tips, verified listings, and interactive tools.',
  keywords: [
    'morocco tourism',
    'morocco travel guide',
    'marrakech guide',
    'fes medina',
    'sahara desert tour',
    'moroccan riads',
    'atlas mountains hiking',
    'chefchaouen blue city',
    'moroccan food',
    'morocco attractions',
    'morocco hotels',
    'morocco tours',
    'essaouira beach',
    'tangier travel',
    'morocco trip planner',
    'morocco budget calculator',
    'best time visit morocco',
    'morocco local guides',
    'morocco events',
    'morocco activities',
    // Extended keywords for comprehensive coverage
    'morocco visa requirements',
    'morocco currency dirham',
    'morocco safety tips',
    'morocco weather',
    'morocco transportation',
    'morocco itinerary',
    'morocco for first time visitors',
    'rabat capital morocco',
    'casablanca morocco',
    'morocco desert experience',
    'morocco cooking class',
    'morocco riad accommodation',
    'morocco travel cost',
    'morocco culture etiquette',
    'north africa travel',
    'morocco hammam experience',
    'morocco souk shopping',
    'morocco imperial cities',
    'morocco faq',
    'morocco travel 2026',
  ],
  authors: [{ name: 'CityGuide', url: 'https://cityguide.ma' }],
  creator: 'CityGuide',
  publisher: 'CityGuide',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // Verification tags for search engines and platforms
  verification: {
    google: 'google-site-verification-token',
    yandex: 'yandex-verification-token',
    other: {
      'msvalidate.01': 'bing-verification-token',
      'p:domain_verify': 'pinterest-verification-token',
    },
  },
  // Apple web app metadata
  appleWebApp: {
    capable: true,
    title: 'CityGuide Morocco',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cityguide.ma',
    siteName: 'CityGuide',
    title: 'CityGuide - The Ultimate Morocco Tourism Directory & Travel Guide',
    description:
      'Your complete Morocco travel companion. Explore destinations, book tours, find the best riads, restaurants, and plan your perfect Moroccan adventure.',
    images: [
      {
        url: 'https://cityguide.ma/api/og?title=CityGuide&description=Your+Complete+Morocco+Travel+Companion&type=default',
        width: 1200,
        height: 630,
        alt: 'CityGuide - Morocco Travel Guide',
        type: 'image/png',
      },
      {
        url: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Morocco travel - Marrakech medina aerial view',
        type: 'image/jpeg',
      },
      {
        url: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Chefchaouen blue streets in Morocco',
        type: 'image/jpeg',
      },
    ],
    countryName: 'Morocco',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@cityguide_ma',
    creator: '@cityguide_ma',
    title: 'CityGuide - The Ultimate Morocco Tourism Directory',
    description:
      'Discover Morocco with the most comprehensive travel guide. Plan your perfect trip today.',
    images: [
      {
        url: 'https://cityguide.ma/api/og?title=CityGuide&description=Your+Complete+Morocco+Travel+Companion&type=default',
        alt: 'CityGuide Morocco Travel Guide',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://cityguide.ma',
    languages: {
      'en-US': 'https://cityguide.ma',
      'fr-FR': 'https://cityguide.ma/fr',
      'ar-MA': 'https://cityguide.ma/ar',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  category: 'travel',
};

/* ─── JSON-LD Structured Data ─── */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CityGuide',
  alternateName: 'City Guide - Tourism Directory',
  url: 'https://cityguide.ma',
  description:
    'The most comprehensive Morocco tourism directory and travel guide. Explore destinations, tours, accommodations, restaurants, and plan your trip.',
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide',
    url: 'https://cityguide.ma',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cityguide.ma/logo.png',
      width: 512,
      height: 512,
    },
    sameAs: [
      'https://facebook.com/cityguide',
      'https://instagram.com/cityguide',
      'https://twitter.com/cityguide',
      'https://youtube.com/cityguide',
    ],
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://cityguide.ma/search?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: ['en', 'fr', 'ar'],
  about: {
    '@type': 'Country',
    name: 'Morocco',
    alternateName: ['Kingdom of Morocco', 'Al-Mamlaka al-Maghribiya'],
    url: 'https://en.wikipedia.org/wiki/Morocco',
  },
};

/* ─── Root Layout ─── */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} ${inter.variable} ${notoNaskhArabic.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SEOJsonLd />
      </head>
      <body className="min-h-screen bg-background text-foreground font-body antialiased">
        {/* Skip to Content - Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[9999] focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none"
        >
          Skip to main content
        </a>

        <Header />

        <main
          id="main-content"
          className="min-h-screen pt-[calc(var(--header-height,5rem)+3px)]"
          role="main"
        >
          {children}
        </main>

        <Footer />
        <BackToTop />

        {/* AI Assistant */}
        <AIAssistantLoader />

        {/* Growth Components */}
        <GrowthWidgets />
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Compass,
  ArrowRight,
  ArrowUpRight,
  Mountain,
  Tent,
  ChefHat,
  Building2,
  Shield,
  Clock,
  Gem,
  KeyRound,
  Crown,
  CalendarCheck,
} from 'lucide-react';
import ScrollReveal from '@/components/home/ScrollReveal';
import FeaturedExperiencesScroll from '@/components/home/FeaturedExperiencesScroll';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import NewsletterForm from '@/components/home/NewsletterForm';
import AnimatedCounter from '@/components/home/AnimatedCounter';

/* =================================================================
   METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Luxury Morocco Travel | Bespoke Tours, Private Desert Camps & Curated Experiences',
  description:
    'Discover Morocco through bespoke luxury experiences -- private riad stays, curated desert camps under Saharan stars, exclusive medina tours, and world-class Moroccan cuisine. Tailored itineraries for discerning travellers.',
  keywords: [
    'luxury Morocco travel',
    'bespoke Morocco tours',
    'luxury riad Morocco',
    'private desert camp Morocco',
    'Morocco honeymoon',
    'luxury Marrakech',
    'private guided Morocco tour',
    'Morocco concierge travel',
    'exclusive Morocco experiences',
    'luxury Sahara camp',
    'Morocco boutique hotel',
    'curated Morocco itinerary',
    'Morocco high-end travel',
    'private atlas trekking',
    'Morocco spa retreat',
    'luxury cooking class Marrakech',
    'bespoke travel North Africa',
  ],
  openGraph: {
    title: 'Luxury Morocco Travel | Bespoke Tours & Curated Experiences',
    description:
      'Experience Morocco at its finest -- private riads, desert glamping, curated culinary journeys, and exclusive access to the Kingdom\'s most treasured destinations.',
    url: 'https://citytoursmorocco.com/home-v4',
    siteName: 'City Tours Morocco',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/hero-riad-interior.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury riad interior with traditional Moroccan zellij tilework and courtyard fountain',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Morocco Travel | Bespoke Tours & Curated Experiences',
    description:
      'Private riads, desert glamping, curated culinary journeys -- discover the pinnacle of Moroccan luxury travel.',
    images: ['https://citytoursmorocco.com/images/hero-riad-interior.webp'],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/home-v4',
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'City Tours Morocco',
  url: 'https://citytoursmorocco.com',
  description: 'Luxury Morocco travel guide with bespoke tours, private desert camps, and curated experiences.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://citytoursmorocco.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'City Tours Morocco',
  url: 'https://citytoursmorocco.com',
  logo: 'https://citytoursmorocco.com/images/logo.webp',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    availableLanguage: ['English', 'French', 'Arabic'],
  },
};

const touristDestinationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristDestination',
  name: 'Morocco',
  description:
    'The Kingdom of Morocco -- a tapestry of ancient medinas, Saharan dunes, Atlas peaks, and Atlantic coastline, offering some of the world\'s most refined luxury travel experiences.',
  touristType: ['Luxury Traveler', 'Cultural Explorer', 'Honeymooner', 'Adventure Seeker'],
  includesAttraction: [
    { '@type': 'TouristAttraction', name: 'Marrakech Medina', url: 'https://citytoursmorocco.com/marrakech' },
    { '@type': 'TouristAttraction', name: 'Fes el-Bali', url: 'https://citytoursmorocco.com/fes-guide' },
    { '@type': 'TouristAttraction', name: 'Sahara Desert', url: 'https://citytoursmorocco.com/desert-adventures' },
    { '@type': 'TouristAttraction', name: 'Chefchaouen', url: 'https://citytoursmorocco.com/chefchaouen' },
  ],
};

/* =================================================================
   DATA
   ================================================================= */

const signatureExperiences = [
  {
    id: 1,
    number: '01',
    title: 'Zellij & Architecture',
    description: 'Private tours of hidden palaces, ancient madrasas, and artisan workshops where mosaic masters carry on a thousand-year tradition.',
    Icon: Building2,
    image: '/images/hero-ben-youssef-madrasa.webp',
    href: '/architecture',
  },
  {
    id: 2,
    number: '02',
    title: 'Atlas Elevations',
    description: 'Helicopter transfers to private mountain lodges, guided summit treks with Berber hosts, and sunset dinners above the clouds.',
    Icon: Mountain,
    image: '/images/hero-atlas.webp',
    href: '/atlas-mountains',
  },
  {
    id: 3,
    number: '03',
    title: 'Dunes & Constellations',
    description: 'Luxury bivouacs in the Erg Chebbi, private camel caravans at golden hour, and Saharan stargazing with an astronomer guide.',
    Icon: Tent,
    image: '/images/hero-sahara-sunrise.webp',
    href: '/desert-adventures',
  },
  {
    id: 4,
    number: '04',
    title: 'Culinary Alchemy',
    description: 'Market-to-table cooking with palace chefs, private wine tastings in the Meknes vineyards, and spice-route supper clubs.',
    Icon: ChefHat,
    image: '/images/hero-cooking-class.webp',
    href: '/cooking-classes',
  },
];

const imperialDestinations = [
  {
    name: 'Marrakech',
    arabic: '\u0645\u0631\u0627\u0643\u0634',
    slug: '/marrakech',
    meaning: 'The Red City',
    image: '/images/hero-marrakech.webp',
    color: '#9E3326',
    span: 'md:col-span-7',
    height: 'h-[500px] md:h-[600px]',
    offset: '',
  },
  {
    name: 'Fes',
    arabic: '\u0641\u0627\u0633',
    slug: '/fes-guide',
    meaning: 'The Spiritual Capital',
    image: '/images/hero-fes-tanneries.webp',
    color: '#114B3A',
    span: 'md:col-span-5',
    height: 'h-[400px] md:h-[400px]',
    offset: 'md:mt-32',
  },
  {
    name: 'Chefchaouen',
    arabic: '\u0634\u0641\u0634\u0627\u0648\u0646',
    slug: '/chefchaouen',
    meaning: 'The Blue Pearl',
    image: '/images/hero-chefchaouen-streets.webp',
    color: '#2B5A8F',
    span: 'md:col-span-5',
    height: 'h-[400px] md:h-[500px]',
    offset: '',
  },
  {
    name: 'Sahara',
    arabic: '\u0627\u0644\u0635\u062D\u0631\u0627\u0621',
    slug: '/desert-adventures',
    meaning: 'The Golden Expanse',
    image: '/images/hero-sahara-sunrise.webp',
    color: '#D6A054',
    span: 'md:col-span-7',
    height: 'h-[500px] md:h-[700px]',
    offset: 'md:-mt-32',
  },
];

const luxuryExperiences = [
  {
    title: 'Private Desert Camp',
    image: '/images/hero-desert-glamping.webp',
    price: 'From 3,500 MAD',
    duration: '2 days',
    rating: 4.9,
    reviews: 127,
    href: '/desert-adventures',
    badge: 'Signature',
    iconName: 'flame',
  },
  {
    title: 'Royal Riad Cooking',
    image: '/images/hero-cooking-class.webp',
    price: 'From 850 MAD',
    duration: '4 hours',
    rating: 4.8,
    reviews: 214,
    href: '/cooking-classes',
    badge: 'Popular',
    iconName: 'chef-hat',
  },
  {
    title: 'Private Medina Guide',
    image: '/images/hero-souk-lamps.webp',
    price: 'From 500 MAD',
    duration: '3 hours',
    rating: 4.9,
    reviews: 189,
    href: '/marrakech',
    iconName: 'footprints',
  },
  {
    title: 'Luxury Atlas Retreat',
    image: '/images/hero-atlas-village.webp',
    price: 'From 2,800 MAD',
    duration: '3 days',
    rating: 4.7,
    reviews: 96,
    href: '/atlas-mountains',
    badge: 'Exclusive',
    iconName: 'mountain',
  },
  {
    title: 'Hammam Royale',
    image: '/images/hero-hammam-interior.webp',
    price: 'From 600 MAD',
    duration: '2 hours',
    rating: 4.8,
    reviews: 302,
    href: '/hammam',
    iconName: 'droplets',
  },
  {
    title: 'Balloon at Dawn',
    image: '/images/hero-hot-air-balloon.webp',
    price: 'From 1,800 MAD',
    duration: '3 hours',
    rating: 4.9,
    reviews: 78,
    href: '/activities',
    badge: 'Dawn Flight',
    iconName: 'wind',
  },
  {
    title: 'Private Surf Villa',
    image: '/images/hero-surf-taghazout.webp',
    price: 'From 4,200 MAD',
    duration: '5 days',
    rating: 4.7,
    reviews: 54,
    href: '/surfing',
    iconName: 'sun',
  },
];

const trustSignals = [
  {
    Icon: KeyRound,
    title: 'Private Access',
    description: 'Behind-the-scenes entry to palaces, workshops, and historic sites closed to the general public.',
  },
  {
    Icon: Crown,
    title: 'Concierge Service',
    description: 'A dedicated travel architect available around the clock, from first enquiry to final farewell.',
  },
  {
    Icon: Shield,
    title: 'Vetted Properties',
    description: 'Every riad, hotel, and camp personally inspected and held to the highest standard of comfort and authenticity.',
  },
  {
    Icon: CalendarCheck,
    title: 'Tailored Itineraries',
    description: 'No templates. Every journey is designed from scratch around your pace, passions, and preferences.',
  },
];

const lifestyleGrid = [
  { title: 'Desert Glamping', image: '/images/hero-desert-glamping.webp', href: '/camping', subtitle: 'Under Saharan Stars' },
  { title: 'Spa & Wellness', image: '/images/hero-wellness-spa.webp', href: '/hammam', subtitle: 'Ancient Healing Rituals' },
  { title: 'Golf', image: '/images/hero-golf-marrakech.webp', href: '/golf', subtitle: 'Championship Courses' },
  { title: 'Wine & Dining', image: '/images/hero-wine.webp', href: '/cuisine', subtitle: 'Vineyard to Table' },
  { title: 'Honeymoon', image: '/images/hero-honeymoon.webp', href: '/honeymoon', subtitle: 'Romance in the Riads' },
  { title: 'Photography Tours', image: '/images/hero-kasbahs.webp', href: '/photography', subtitle: 'Frame the Extraordinary' },
];

const blogPosts = [
  {
    title: 'The 7 Most Exclusive Riads in Marrakech You Cannot Book Online',
    excerpt: 'Hidden behind unmarked doors in the medina, these invitation-only properties redefine Moroccan hospitality.',
    image: '/images/hero-riad-interior.webp',
    href: '/blog',
    category: 'Accommodations',
    readTime: '8 min read',
  },
  {
    title: 'A Culinary Road Trip: From Fes to the Atlantic in Five Courses',
    excerpt: 'Tracing the ancient spice routes through palace kitchens, coastal fish markets, and mountain farmsteads.',
    image: '/images/hero-spices.webp',
    href: '/blog',
    category: 'Gastronomy',
    readTime: '12 min read',
  },
  {
    title: 'Stargazing in the Sahara: The Ultimate Guide to Morocco After Dark',
    excerpt: 'Why the Erg Chebbi dunes are fast becoming the world\'s most sought-after dark-sky destination.',
    image: '/images/hero-sahara-starry-night.webp',
    href: '/blog',
    category: 'Experiences',
    readTime: '6 min read',
  },
];

const pressPublications = [
  'Conde Nast Traveler',
  'Travel + Leisure',
  'The Times',
  'Departures',
  'Monocle',
];

/* =================================================================
   SVG DECORATIVE COMPONENTS
   ================================================================= */

function EightPointedStar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
    </svg>
  );
}

function CalligraphyStroke({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,60 C100,120 150,0 250,60 C350,120 400,0 500,60 C550,90 580,30 600,60"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="calligraphy-dash"
      />
      <path
        d="M20,70 C120,10 180,100 280,50 C380,0 430,110 530,50 C560,35 590,80 600,55"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.5"
        className="calligraphy-dash-slow"
      />
    </svg>
  );
}

function DashedJourneyLine({ className }: { className?: string }) {
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 1200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0,100 C200,180 350,20 500,100 C650,180 800,20 1000,100 C1100,140 1150,60 1200,100"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="12 8"
        strokeLinecap="round"
        className="journey-dash"
      />
      <circle cx="250" cy="60" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="500" cy="100" r="6" fill="currentColor" opacity="0.5" />
      <circle cx="750" cy="55" r="4" fill="currentColor" opacity="0.3" />
      <circle cx="1000" cy="100" r="5" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

function MoroccanArchClipDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true">
      <defs>
        <clipPath id="v4-arch" clipPathUnits="objectBoundingBox">
          <path d="M0,1 L0,0.35 C0,0.12 0.15,0 0.5,0 C0.85,0 1,0.12 1,0.35 L1,1 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

/* =================================================================
   MAIN PAGE COMPONENT
   ================================================================= */

export default function HomeV4Page() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristDestinationJsonLd) }}
      />

      {/* Arch clip-path definition */}
      <MoroccanArchClipDefs />

      <div className="bg-[#FAF7F2] text-[#1A1814] selection:bg-[#9E3326] selection:text-[#FAF7F2] relative overflow-hidden">

        {/* ===================================================
            SECTION 1 -- HERO (Split layout: text 60%, arch image 40%)
        =================================================== */}
        <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">

          {/* Background calligraphy watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <CalligraphyStroke className="w-[140%] max-w-none h-auto text-[#9E3326] opacity-[0.04]" />
          </div>

          {/* Subtle radial glow */}
          <div className="absolute top-0 right-0 w-[60vw] h-[60vh] bg-gradient-to-bl from-[#D6A054]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="container-morocco relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left -- Text Block (60%) */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-3 mb-8 bg-white/60 backdrop-blur-sm px-5 py-2.5 border border-[#D6A054]/30">
                  <Compass className="w-4 h-4 text-[#9E3326]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#1A1814]/70 font-[family-name:var(--font-heading)]">
                    Maison of Morocco
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-[7.5rem] font-black leading-[0.85] mb-10">
                  <span className="block">Where</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#9E3326] to-[#D6A054]">
                    Time
                  </span>
                  <span className="block relative">
                    Stands{' '}
                    <span className="italic font-serif text-[#114B3A] font-normal">Still.</span>
                    <svg className="absolute -bottom-3 left-0 w-[60%] h-3 text-[#D6A054]" viewBox="0 0 200 12" preserveAspectRatio="none">
                      <path d="M0 8 Q 50 0 100 8 Q 150 16 200 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-[#1A1814]/55 font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-12 font-[family-name:var(--font-heading)]">
                  Bespoke journeys through ancient medinas, private desert camps beneath a million stars,
                  and palace-level hospitality curated for the most discerning travellers.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                  <Link
                    href="/itineraries"
                    className="group relative inline-flex items-center gap-3 bg-[#9E3326] text-white px-10 py-5 rounded-none overflow-hidden hover:shadow-[0_24px_48px_-12px_rgba(158,51,38,0.45)] transition-all duration-500"
                  >
                    <span className="absolute inset-0 bg-white/15 -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                    <span className="relative text-sm font-bold uppercase tracking-[0.2em] font-[family-name:var(--font-heading)]">
                      Curate Your Journey
                    </span>
                    <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/photography"
                    className="text-sm font-bold uppercase tracking-[0.2em] text-[#1A1814]/70 hover:text-[#9E3326] transition-colors border-b border-transparent hover:border-[#9E3326] pb-1 font-[family-name:var(--font-heading)]"
                  >
                    View Gallery
                  </Link>
                </div>
              </ScrollReveal>

              {/* Decorative eight-pointed star */}
              <div className="hidden lg:block absolute -bottom-12 left-[5%] pointer-events-none">
                <EightPointedStar className="w-16 h-16 text-[#D6A054] opacity-10 v4-spin-slow" />
              </div>
            </div>

            {/* Right -- Arch-Clipped Hero Image (40%) */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <ScrollReveal delay={400} direction="right">
                <div className="relative w-[85%] max-w-[460px] mx-auto lg:mx-0">

                  {/* Spinning decorative star behind the arch */}
                  <div className="absolute -top-8 -right-8 w-28 h-28 pointer-events-none z-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-[#D6A054] opacity-15 v4-spin-slow" fill="none" stroke="currentColor" strokeWidth="0.5">
                      <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
                      <polygon points="15,15 50,25 85,15 75,50 85,85 50,75 15,85 25,50" />
                      <circle cx="50" cy="50" r="28" />
                    </svg>
                  </div>

                  {/* The arch image */}
                  <div
                    className="relative w-full aspect-[3/4] overflow-hidden"
                    style={{ clipPath: 'url(#v4-arch)' }}
                  >
                    <img
                      src="/images/hero-riad-interior.webp"
                      alt="Luxury Moroccan riad interior with ornate zellij tilework, carved plaster archways, and a tranquil courtyard"
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-8 left-8 right-8 text-white">
                      <span className="inline-block bg-[#D6A054] text-[#1A1814] text-[10px] uppercase font-bold tracking-[0.2em] px-3 py-1 mb-2 font-[family-name:var(--font-heading)]">
                        Featured
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold">Palace Riad Living</h3>
                    </div>
                  </div>

                  {/* Small floating accent card */}
                  <div className="absolute -bottom-6 -left-6 bg-white shadow-xl px-5 py-4 z-10 border-l-4 border-[#D6A054]">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#1A1814]/50 font-bold font-[family-name:var(--font-heading)]">Curated Since</p>
                    <p className="font-[family-name:var(--font-display)] text-2xl font-bold text-[#9E3326]">2019</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 2 -- PRESS MENTIONS (Minimalist luxury bar)
        =================================================== */}
        <section className="py-10 border-y border-[#1A1814]/5 bg-white/50">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#1A1814]/35 font-bold font-[family-name:var(--font-heading)] flex-shrink-0">
                  Featured In
                </span>
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
                  {pressPublications.map((pub) => (
                    <span
                      key={pub}
                      className="font-[family-name:var(--font-display)] text-lg md:text-xl text-[#1A1814]/20 font-bold italic whitespace-nowrap"
                    >
                      {pub}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            SECTION 3 -- THE ARTISAN'S TOUCH (4 signature cards)
        =================================================== */}
        <section className="py-28 md:py-36 relative">
          {/* Subtle background star */}
          <div className="absolute top-20 right-[10%] pointer-events-none">
            <EightPointedStar className="w-48 h-48 text-[#D6A054] opacity-[0.03]" />
          </div>

          <div className="container-morocco relative z-10">
            <ScrollReveal>
              <div className="text-center mb-20 max-w-3xl mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="w-12 h-px bg-[#D6A054]/40" />
                  <Gem className="w-5 h-5 text-[#D6A054]" />
                  <span className="w-12 h-px bg-[#D6A054]/40" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl font-bold text-[#1A1814] mb-6">
                  The Artisan&apos;s Touch
                </h2>
                <p className="text-[#1A1814]/50 text-lg font-light leading-relaxed font-[family-name:var(--font-heading)]">
                  Every detail of a Moroccan journey is handcrafted. We believe travel should be an art form --
                  here are our four signature pillars of experience.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {signatureExperiences.map((exp, idx) => (
                <ScrollReveal key={exp.id} delay={idx * 100}>
                  <Link href={exp.href} className="group relative block h-[480px] overflow-hidden">
                    {/* Card body */}
                    <div className="absolute inset-0 bg-white border border-[#1A1814]/8 p-8 flex flex-col items-center text-center justify-center transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] z-20 overflow-hidden">

                      {/* Background slide-up on hover */}
                      <div className="absolute inset-0 bg-[#1A1814] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] z-10" />

                      {/* Background image reveals under dark overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 z-[11] overflow-hidden">
                        <img src={exp.image} alt="" className="w-full h-full object-cover grayscale" loading="lazy" />
                      </div>

                      <div className="relative z-20 transition-colors duration-500 group-hover:text-white">
                        {/* Numbered label */}
                        <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#D6A054] mb-6 block font-[family-name:var(--font-heading)]">
                          {exp.number}
                        </span>

                        {/* Icon circle */}
                        <div className="w-20 h-20 mx-auto border border-[#D6A054]/20 flex items-center justify-center mb-8 group-hover:border-white/20 transition-colors duration-500">
                          <exp.Icon className="w-8 h-8 text-[#9E3326] group-hover:text-[#D6A054] transition-colors duration-500" strokeWidth={1.5} />
                        </div>

                        <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-4">
                          {exp.title}
                        </h3>

                        <p className="text-sm font-light leading-relaxed opacity-60 group-hover:opacity-80 max-w-[220px] mx-auto font-[family-name:var(--font-heading)]">
                          {exp.description}
                        </p>

                        {/* Hover arrow */}
                        <div className="mt-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                          <ArrowUpRight className="w-5 h-5 mx-auto text-[#D6A054]" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 4 -- MASTERPIECES GALLERY (Asymmetric grid, dark bg)
        =================================================== */}
        <section className="py-28 md:py-36 relative bg-[#1A1814] text-white overflow-hidden">
          {/* Faint pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="v4-zellij" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M40 0 L80 40 L40 80 L0 40 Z" stroke="white" strokeWidth="0.5" fill="none" />
                <circle cx="40" cy="40" r="8" stroke="white" strokeWidth="0.3" fill="none" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#v4-zellij)" />
            </svg>
          </div>

          <div className="container-morocco relative z-10">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-20 gap-8 border-b border-white/10 pb-10">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A054] mb-4 block font-[family-name:var(--font-heading)]">
                    Destinations
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold max-w-3xl leading-[0.95]">
                    <span className="text-[#D6A054] italic font-serif">Masterpieces</span>
                    <br />
                    Carved in Earth.
                  </h2>
                </div>
                <Link
                  href="/cities"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-white/60 hover:text-[#D6A054] transition-colors pb-2 border-b border-white/10 hover:border-[#D6A054] font-[family-name:var(--font-heading)]"
                >
                  Explore The Map <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
              {imperialDestinations.map((dest, idx) => (
                <ScrollReveal key={dest.name} delay={idx * 150} className={`${dest.span} ${dest.offset}`}>
                  <Link href={dest.slug} className={`relative group block overflow-hidden ${dest.height}`}>
                    {/* Arabic watermark on hover */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] md:text-[16rem] leading-none font-black text-white/0 group-hover:text-white/5 transition-all duration-1000 select-none z-10 pointer-events-none whitespace-nowrap">
                      {dest.arabic}
                    </div>

                    <img
                      src={dest.image}
                      alt={`${dest.name}, Morocco -- ${dest.meaning}`}
                      className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                      loading="lazy"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814] via-[#1A1814]/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-700 mix-blend-multiply"
                      style={{ backgroundColor: dest.color }}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-20">
                      <span className="text-[#D6A054] text-[11px] font-bold uppercase tracking-[0.3em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-[family-name:var(--font-heading)]">
                        {dest.meaning}
                      </span>
                      <div className="flex justify-between items-end">
                        <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold">
                          {dest.name}
                        </h3>
                        <div className="w-12 h-12 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#D6A054] group-hover:border-[#D6A054] group-hover:text-[#1A1814] transition-all duration-500 delay-200 flex-shrink-0">
                          <ArrowRight className="w-5 h-5 -rotate-45" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 5 -- LUXURY EXPERIENCES (FeaturedExperiencesScroll)
        =================================================== */}
        <section className="py-28 md:py-36 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#D6A054]/20 to-transparent" />

          <div className="container-morocco">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-14">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#9E3326] mb-3 block font-[family-name:var(--font-heading)]">
                    Premium Collection
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-[#1A1814]">
                    Luxury Experiences
                  </h2>
                </div>
                <Link
                  href="/activities"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#9E3326] hover:text-[#1A1814] transition-colors font-[family-name:var(--font-heading)]"
                >
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <FeaturedExperiencesScroll experiences={luxuryExperiences} />
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            SECTION 6 -- BESPOKE JOURNEY CTA (Full-width dramatic)
        =================================================== */}
        <section className="py-32 md:py-44 bg-white relative overflow-hidden">
          {/* Dashed journey line across the section */}
          <DashedJourneyLine className="absolute top-1/2 left-0 w-full h-[40vh] -translate-y-1/2 text-[#9E3326] opacity-15 pointer-events-none" />

          <div className="container-morocco relative z-10 text-center">
            <ScrollReveal>
              <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A054] mb-8 block font-[family-name:var(--font-heading)]">
                Bespoke Curation
              </span>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold text-[#1A1814] mb-8 max-w-5xl mx-auto leading-[1.05]">
                Journeys that read like{' '}
                <span className="italic font-serif text-[#9E3326] font-normal">poetry.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-[#1A1814]/45 font-light max-w-2xl mx-auto mb-14 font-[family-name:var(--font-heading)]">
                We weave accommodations, private transport, and exclusive access into seamless itineraries
                tailored to your every desire.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <Link
                href="/itineraries"
                className="inline-flex items-center gap-3 bg-[#1A1814] text-white px-12 py-6 rounded-none text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#9E3326] transition-colors duration-500 shadow-[8px_8px_0_#D6A054] hover:shadow-[4px_4px_0_#D6A054] hover:translate-x-1 hover:translate-y-1 font-[family-name:var(--font-heading)]"
              >
                Explore Complete Itineraries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            SECTION 7 -- WHY CHOOSE US (Luxury trust signals)
        =================================================== */}
        <section className="py-28 md:py-36 bg-[#FAF7F2] relative">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-20 max-w-3xl mx-auto">
                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A054] mb-4 block font-[family-name:var(--font-heading)]">
                  The City Tours Difference
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-[#1A1814] mb-6">
                  Why Discerning Travellers Choose Us
                </h2>
                <p className="text-[#1A1814]/45 text-lg font-light font-[family-name:var(--font-heading)]">
                  We are not a booking platform. We are travel architects who design every moment of your Moroccan story.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustSignals.map((signal, idx) => (
                <ScrollReveal key={signal.title} delay={idx * 100}>
                  <div className="text-center group">
                    <div className="w-16 h-16 mx-auto border border-[#1A1814]/8 flex items-center justify-center mb-6 group-hover:border-[#D6A054] group-hover:bg-[#D6A054]/5 transition-all duration-500">
                      <signal.Icon className="w-7 h-7 text-[#9E3326] group-hover:text-[#D6A054] transition-colors duration-500" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold mb-3 text-[#1A1814]">
                      {signal.title}
                    </h3>
                    <p className="text-sm text-[#1A1814]/45 font-light leading-relaxed font-[family-name:var(--font-heading)]">
                      {signal.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Stats bar */}
            <ScrollReveal delay={200}>
              <div className="mt-20 pt-16 border-t border-[#1A1814]/8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#9E3326]">
                    <AnimatedCounter end={2500} suffix="+" />
                  </p>
                  <p className="text-sm text-[#1A1814]/40 mt-2 font-[family-name:var(--font-heading)]">Travellers Served</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#9E3326]">
                    <AnimatedCounter end={4.9} decimals={1} />
                  </p>
                  <p className="text-sm text-[#1A1814]/40 mt-2 font-[family-name:var(--font-heading)]">Average Rating</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#9E3326]">
                    <AnimatedCounter end={98} suffix="%" />
                  </p>
                  <p className="text-sm text-[#1A1814]/40 mt-2 font-[family-name:var(--font-heading)]">Would Recommend</p>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#9E3326]">
                    <AnimatedCounter end={12} />
                  </p>
                  <p className="text-sm text-[#1A1814]/40 mt-2 font-[family-name:var(--font-heading)]">Regions Covered</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            SECTION 8 -- TESTIMONIALS (TestimonialsCarousel)
        =================================================== */}
        <section className="py-28 md:py-36 bg-white relative">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A054] mb-4 block font-[family-name:var(--font-heading)]">
                  Guest Voices
                </span>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-[#1A1814] mb-6">
                  Stories from the Journey
                </h2>
                <p className="text-[#1A1814]/45 text-lg font-light font-[family-name:var(--font-heading)]">
                  Hear from travellers who entrusted us with their most cherished holiday.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <TestimonialsCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            SECTION 9 -- LIFESTYLE GRID (6 luxury categories)
        =================================================== */}
        <section className="py-28 md:py-36 bg-[#1A1814] text-white relative overflow-hidden">
          {/* Decorative corner star */}
          <div className="absolute top-12 left-12 pointer-events-none">
            <EightPointedStar className="w-24 h-24 text-[#D6A054] opacity-[0.06]" />
          </div>

          <div className="container-morocco relative z-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A054] mb-3 block font-[family-name:var(--font-heading)]">
                    Lifestyle
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold">
                    Travel Your Way
                  </h2>
                </div>
                <p className="text-white/40 text-lg font-light max-w-md font-[family-name:var(--font-heading)]">
                  From adrenaline to absolute stillness -- curate a Moroccan experience that is unmistakably yours.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {lifestyleGrid.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 80}>
                  <Link href={item.href} className="group relative block h-[320px] md:h-[360px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.title} experience in Morocco`}
                      className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/80 via-[#1A1814]/20 to-transparent group-hover:from-[#1A1814]/90 transition-all duration-500" />

                    <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#D6A054] mb-2 font-bold font-[family-name:var(--font-heading)]">
                        {item.subtitle}
                      </span>
                      <div className="flex items-end justify-between">
                        <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white">
                          {item.title}
                        </h3>
                        <div className="w-10 h-10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 flex-shrink-0 ml-4">
                          <ArrowUpRight className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 10 -- BLOG POSTS (3 luxury articles)
        =================================================== */}
        <section className="py-28 md:py-36 bg-[#FAF7F2] relative">
          <div className="container-morocco">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#D6A054] mb-3 block font-[family-name:var(--font-heading)]">
                    Journal
                  </span>
                  <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-[#1A1814]">
                    From the Field
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-[#9E3326] hover:text-[#1A1814] transition-colors font-[family-name:var(--font-heading)]"
                >
                  All Articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, idx) => (
                <ScrollReveal key={post.title} delay={idx * 100}>
                  <Link href={post.href} className="group block">
                    {/* Image */}
                    <div className="relative h-[260px] overflow-hidden mb-6">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/30 to-transparent" />
                      <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] uppercase tracking-[0.2em] font-bold text-[#9E3326] px-3 py-1.5 font-[family-name:var(--font-heading)]">
                        {post.category}
                      </span>
                    </div>

                    {/* Text */}
                    <div className="flex items-center gap-3 mb-3 text-[#1A1814]/35">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-xs font-medium font-[family-name:var(--font-heading)]">{post.readTime}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[#1A1814] mb-3 group-hover:text-[#9E3326] transition-colors duration-300 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[#1A1814]/45 font-light leading-relaxed font-[family-name:var(--font-heading)]">
                      {post.excerpt}
                    </p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            SECTION 11 -- NEWSLETTER (Deep terracotta with mandala)
        =================================================== */}
        <section className="relative py-32 md:py-44 bg-[#9E3326] text-[#FAF7F2] overflow-hidden">

          {/* Rotating mandala / zellige decoration (CSS-only animation) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] md:w-[110vw] aspect-square pointer-events-none v4-mandala-spin">
            <div className="absolute inset-0 rounded-full border border-[#FAF7F2]/[0.06]" />
            <div className="absolute inset-[8%] rounded-full border-2 border-dashed border-[#FAF7F2]/[0.04]" />
            <div className="absolute inset-[20%] rounded-full border-[8px] border-[#D6A054]/[0.12]" />
            <div className="absolute inset-[32%] rounded-full border border-[#FAF7F2]/[0.05]" />
            <div className="absolute inset-[38%] flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full text-[#FAF7F2]/[0.06]" fill="currentColor">
                <polygon points="50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40" />
                <polygon points="15,15 50,25 85,15 75,50 85,85 50,75 15,85 25,50" />
              </svg>
            </div>
          </div>

          {/* Counter-rotating ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vw] md:w-[90vw] aspect-square pointer-events-none v4-mandala-spin-reverse">
            <div className="absolute inset-0 rounded-full border border-dashed border-[#D6A054]/[0.08]" />
            <div className="absolute inset-[15%] rounded-full border border-[#FAF7F2]/[0.04]" />
          </div>

          <div className="container-morocco relative z-10 text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <EightPointedStar className="w-10 h-10 mx-auto text-[#D6A054] mb-8 opacity-60" />
              <h2 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-8">
                The Magic
                <br />
                <span className="text-[#D6A054] italic font-serif font-normal">Begins.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl text-[#FAF7F2]/70 font-light leading-relaxed mb-12 font-[family-name:var(--font-heading)]">
                Join our inner circle for exclusive Morocco insights, secret riad openings,
                seasonal travel intelligence, and first access to new curated itineraries.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <NewsletterForm />
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="mt-6 text-xs text-[#FAF7F2]/30 font-[family-name:var(--font-heading)]">
                Unsubscribe anytime. We respect your inbox as we respect your journey.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* ===================================================
            CUSTOM CSS KEYFRAMES (CSS-only animations for server component)
        =================================================== */}
        <style dangerouslySetInnerHTML={{ __html: `
          /* Eight-pointed star slow spin */
          @keyframes v4SpinSlow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .v4-spin-slow {
            animation: v4SpinSlow 80s linear infinite;
          }

          /* Mandala spin (centered) */
          @keyframes v4MandalaSpin {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(360deg); }
          }
          .v4-mandala-spin {
            animation: v4MandalaSpin 120s linear infinite;
          }

          /* Mandala reverse spin */
          @keyframes v4MandalaSpinReverse {
            from { transform: translate(-50%, -50%) rotate(0deg); }
            to { transform: translate(-50%, -50%) rotate(-360deg); }
          }
          .v4-mandala-spin-reverse {
            animation: v4MandalaSpinReverse 90s linear infinite;
          }

          /* Calligraphy stroke dash animation */
          @keyframes v4CalligraphyDash {
            0% { stroke-dasharray: 0 2000; }
            50% { stroke-dasharray: 2000 0; }
            100% { stroke-dasharray: 0 2000; }
          }
          .calligraphy-dash {
            animation: v4CalligraphyDash 25s linear infinite;
          }
          .calligraphy-dash-slow {
            animation: v4CalligraphyDash 35s linear infinite reverse;
          }

          /* Journey line dash animation */
          @keyframes v4JourneyDash {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -40; }
          }
          .journey-dash {
            animation: v4JourneyDash 2s linear infinite;
          }
        `}} />

      </div>
    </>
  );
}

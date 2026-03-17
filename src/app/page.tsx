import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Users,
  ShieldCheck,
  Sparkles,
  Mountain,
  Sun,
  Waves,
  ChefHat,
  Landmark,
  Heart,
  Route,
  Mail,
  Quote,
  Globe,
  Compass,
  Calendar,
  Camera,
  BadgeCheck,
  Trophy,
  Award,
  Newspaper,
  BookOpen,
  CheckCircle,
  Headphones,
  Map,
  Zap,
  ShoppingBag,
  Car,
  Moon,
  Gem,
  Wifi,
  Train,
  Plane,
  Shield,
} from 'lucide-react';
import HeroSearchBar from '@/components/home/HeroSearchBar';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import FeaturedExperiencesScroll from '@/components/home/FeaturedExperiencesScroll';
import NewsletterForm from '@/components/home/NewsletterForm';
import AnimatedCounter from '@/components/home/AnimatedCounter';
import ScrollReveal from '@/components/home/ScrollReveal';

/* =================================================================
   METADATA & SEO
   ================================================================= */

export const metadata: Metadata = {
  title:
    'CityGuide - Your Complete Guide to Morocco | 50+ Cities, 1000+ Attractions',
  description:
    'Discover Morocco with the most comprehensive travel guide. Explore 50+ cities, 1,000+ attractions, 500+ hotels, curated tours, local food, and expert travel tips for the ultimate Moroccan adventure.',
  keywords: [
    'Morocco travel guide',
    'Morocco tourism',
    'Marrakech',
    'Fes',
    'Chefchaouen',
    'Sahara Desert',
    'Moroccan food',
    'Morocco hotels',
    'Morocco tours',
    'things to do in Morocco',
    'Morocco itinerary',
    'Morocco riads',
    'Morocco attractions',
    'best places to visit in Morocco',
  ],
  openGraph: {
    title: 'CityGuide - Your Complete Guide to Morocco',
    description:
      'Discover Morocco with the most comprehensive travel guide. 50+ cities, 1,000+ attractions, curated tours, and expert tips.',
    url: 'https://citytoursmorocco.com',
    siteName: 'CityGuide',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech, Morocco at sunset',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CityGuide - Your Complete Guide to Morocco',
    description:
      'Discover Morocco: 50+ cities, 1,000+ attractions, 500+ hotels, curated tours, local food, and expert travel tips.',
    images: [
      '/images/hero-marrakech.webp',
    ],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com',
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* =================================================================
   STRUCTURED DATA (JSON-LD)
   ================================================================= */

function JsonLd() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'CityGuide',
    url: 'https://citytoursmorocco.com',
    description:
      'The most comprehensive Morocco travel guide with 50+ cities, 1,000+ attractions, hotels, tours, and expert tips.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://citytoursmorocco.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CityGuide',
    url: 'https://citytoursmorocco.com',
    logo: 'https://citytoursmorocco.com/logo.png',
    sameAs: [
      'https://twitter.com/cityguide',
      'https://instagram.com/cityguide',
      'https://facebook.com/cityguide',
    ],
  };

  const travelGuideSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Morocco',
    alternateName: 'Kingdom of Morocco',
    description:
      'The Kingdom of Morocco, located in North Africa, is a vibrant destination known for its ancient medinas, Saharan landscapes, Atlas Mountains, and rich culinary traditions.',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 31.7917,
      longitude: -7.0926,
    },
    touristType: [
      'Cultural tourists',
      'Adventure travelers',
      'Food enthusiasts',
      'History buffs',
      'Beach lovers',
      'Desert tourism',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(travelGuideSchema) }}
      />
    </>
  );
}

/* =================================================================
   DATA
   ================================================================= */

const destinations = [
  {
    name: 'Marrakech',
    slug: 'marrakech',
    tagline: 'The Red City of Endless Wonder',
    description: 'Ancient medinas, vibrant souks, and rooftop terraces',
    image: '/images/hero-marrakech.webp',
    color: '#C07B52',
  },
  {
    name: 'Fes',
    slug: 'fes',
    tagline: 'The Spiritual Heart of Morocco',
    description: 'World heritage medina, tanneries, and artisan workshops',
    image: '/images/hero-fes-tanneries.webp',
    color: '#A0522D',
  },
  {
    name: 'Chefchaouen',
    slug: 'chefchaouen',
    tagline: 'The Blue Pearl of the Rif',
    description: 'Iconic blue-washed streets and mountain charm',
    image: '/images/hero-chefchaouen-streets.webp',
    color: '#4A6274',
  },
  {
    name: 'Essaouira',
    slug: 'essaouira',
    tagline: 'Wind, Waves & Timeless Ramparts',
    description: 'Atlantic charm, fresh seafood, and bohemian vibes',
    image: '/images/hero-essaouira-port.webp',
    color: '#34495E',
  },
  {
    name: 'Casablanca',
    slug: 'casablanca',
    tagline: 'Where Tradition Meets Modernity',
    description: 'Hassan II Mosque, Art Deco architecture, and cosmopolitan energy',
    image: '/images/hero-casablanca.webp',
    color: '#2C3E50',
  },
  {
    name: 'Tangier',
    slug: 'tangier',
    tagline: 'Gateway Between Two Worlds',
    description: 'Where the Mediterranean meets the Atlantic',
    image: '/images/hero-tangier-bay.webp',
    color: '#5C6F7E',
  },
  {
    name: 'Merzouga',
    slug: 'merzouga',
    tagline: 'Gateway to the Golden Sahara',
    description: 'Camel treks, luxury desert camps, and starlit nights',
    image: '/images/hero-desert.webp',
    color: '#C4960C',
  },
  {
    name: 'Ouarzazate',
    slug: 'ouarzazate',
    tagline: 'Hollywood of the Desert',
    description: 'Kasbahs, film studios, and the door to the Sahara',
    image: '/images/hero-ait-benhaddou.webp',
    color: '#9E8D72',
  },
];

const experienceCategories = [
  {
    title: 'Desert Adventures',
    description: 'Quad biking, camel treks, sandboarding, and starlit glamping',
    href: '/desert-adventures',
    image: '/images/hero-sahara-sunrise.webp',
    icon: Sun,
    color: '#C4960C',
  },
  {
    title: 'Cuisine & Street Food',
    description: 'Tagines, street food, cooking classes, and spice markets',
    href: '/cuisine',
    image: '/images/hero-food.webp',
    icon: ChefHat,
    color: '#A0522D',
  },
  {
    title: 'Berber Culture',
    description: 'Ancient traditions, village stays, and Amazigh heritage',
    href: '/berber-culture',
    image: '/images/hero-atlas-village.webp',
    icon: Landmark,
    color: '#7A3E22',
  },
  {
    title: 'Atlas Mountains',
    description: 'Toubkal summit, Berber villages, and dramatic gorge treks',
    href: '/atlas-mountains',
    image: '/images/hero-atlas.webp',
    icon: Mountain,
    color: '#1E6B4E',
  },
  {
    title: 'Beach & Water Fun',
    description: 'Surfing, water parks, kitesurfing, and Atlantic sunsets',
    href: '/water-fun',
    image: '/images/card-beach.webp',
    icon: Waves,
    color: '#34495E',
  },
  {
    title: 'Souks & Shopping',
    description: 'Haggling tips, artisan crafts, and market treasures',
    href: '/souks',
    image: '/images/photo-moroccan-souks.webp',
    icon: Sparkles,
    color: '#C07B52',
  },
];

const featuredExperiences = [
  {
    title: 'Sahara Desert Safari',
    image: '/images/hero-ait-benhaddou.webp',
    price: 'From $120',
    duration: '2-3 days',
    rating: 4.9,
    reviews: 847,
    href: '/tours/desert-safari',
    badge: 'Most Popular',
    iconName: 'flame',
  },
  {
    title: 'Marrakech Cooking Class',
    image: '/images/hero-food.webp',
    price: 'From $45',
    duration: '3-4 hours',
    rating: 4.8,
    reviews: 632,
    href: '/cooking-classes',
    iconName: 'chef-hat',
  },
  {
    title: 'Fes Medina Walking Tour',
    image: '/images/hero-marrakech.webp',
    price: 'From $25',
    duration: '2-3 hours',
    rating: 4.7,
    reviews: 521,
    href: '/tours',
    badge: 'Best Value',
    iconName: 'footprints',
  },
  {
    title: 'Essaouira Surf Lesson',
    image: '/images/card-beach.webp',
    price: 'From $35',
    duration: '2 hours',
    rating: 4.8,
    reviews: 394,
    href: '/activities',
    iconName: 'wind',
  },
  {
    title: 'Atlas Mountain Trek',
    image: '/images/hero-atlas.webp',
    price: 'From $65',
    duration: 'Full day',
    rating: 4.9,
    reviews: 289,
    href: '/trekking',
    badge: 'Top Rated',
    iconName: 'mountain',
  },
  {
    title: 'Traditional Hammam Ritual',
    image: '/images/hero-hammam-interior.webp',
    price: 'From $30',
    duration: '1.5 hours',
    rating: 4.7,
    reviews: 456,
    href: '/hammam',
    iconName: 'droplets',
  },
  {
    title: 'Hot Air Balloon Marrakech',
    image: '/images/hero-marrakech.webp',
    price: 'From $180',
    duration: '1 hour',
    rating: 4.9,
    reviews: 198,
    href: '/tours',
    iconName: 'sun',
  },
];

const whyChooseFeatures = [
  {
    icon: ShieldCheck,
    title: 'Verified Local Guides',
    description:
      'Every guide is personally vetted and rated by thousands of travelers. Only the best make our platform.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description:
      'Reserve your experiences in seconds with instant confirmation. No waiting, no uncertainty.',
  },
  {
    icon: Headphones,
    title: '24/7 Travel Support',
    description:
      'Our Morocco-based team is always available to help, whether you need a restaurant recommendation or emergency assistance.',
  },
  {
    icon: Map,
    title: 'Curated Itineraries',
    description:
      'Expert-crafted day-by-day plans for every travel style, from 3-day city breaks to 14-day grand tours.',
  },
];

const blogPosts = [
  {
    title: 'The Ultimate First-Timer\'s Guide to Marrakech',
    excerpt: 'Everything you need to know before your first visit to the Red City, from navigating the medina to finding the best riads.',
    image: '/images/hero-marrakech.webp',
    date: 'March 10, 2026',
    readTime: '8 min read',
    category: 'City Guides',
    href: '/blog',
  },
  {
    title: '10 Hidden Gems in the Atlas Mountains',
    excerpt: 'Beyond Toubkal: discover secluded valleys, ancient Berber villages, and waterfalls that most tourists never see.',
    image: '/images/hero-atlas.webp',
    date: 'March 5, 2026',
    readTime: '6 min read',
    category: 'Adventure',
    href: '/blog',
  },
  {
    title: 'A Food Lover\'s Journey Through Fes',
    excerpt: 'From street-side msemen to Michelin-worthy pastilla, this is the definitive guide to eating your way through Morocco\'s culinary capital.',
    image: '/images/hero-food.webp',
    date: 'February 28, 2026',
    readTime: '10 min read',
    category: 'Food & Drink',
    href: '/blog',
  },
];

const pressMentions = [
  'Lonely Planet',
  'Conde Nast Traveler',
  'Travel + Leisure',
  'National Geographic',
  'The New York Times',
  'Afar Magazine',
];

/* =================================================================
   HELPER: Section Heading
   ================================================================= */

function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: {
  label?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}) {
  return (
    <div
      className={`max-w-3xl mb-12 md:mb-16 ${
        align === 'center' ? 'mx-auto text-center' : ''
      }`}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-4 ${align === 'center' ? 'justify-center' : ''}`}>
          <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
          <span
            className="inline-block text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: '#C4960C' }}
          >
            {label}
          </span>
          <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
        </div>
      )}
      <h2
        className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
        style={{ color: '#1A1814' }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="mt-4 text-lg md:text-xl leading-relaxed"
          style={{ color: 'rgba(26,24,20,0.6)' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <div>
        {/* ===================================================
            1. HERO SECTION - Full screen, warm & inviting
        =================================================== */}
        <section
          className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden -mt-[calc(var(--header-height,5rem)+3px)]"
          aria-label="Hero"
        >
          {/* Background image */}
          <img
            src="/images/hero-marrakech.webp"
            alt="Sunset over the rooftops of Marrakech, Morocco"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: '50% 30%' }}
          />

          {/* Warm gradient overlay - NOT dark/black, warm tones */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(160,82,45,0.15) 0%, rgba(250,248,245,0.1) 30%, rgba(250,248,245,0.3) 60%, rgba(250,248,245,0.92) 85%, rgba(250,248,245,1) 100%)',
            }}
          />

          {/* Decorative top warm wash */}
          <div
            className="absolute top-0 left-0 right-0 h-40"
            style={{
              background: 'linear-gradient(180deg, rgba(26,24,20,0.35) 0%, transparent 100%)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 container-morocco text-center px-4 pt-32 md:pt-40 pb-16">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                backgroundColor: 'rgba(255,255,255,0.85)',
                border: '1px solid rgba(196,150,12,0.25)',
                boxShadow: '0 2px 12px rgba(26,24,20,0.06)',
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: '#1E6B4E' }}
              />
              <span className="text-xs font-semibold tracking-wide" style={{ color: '#A0522D' }}>
                Trusted by 12,000+ travelers worldwide
              </span>
            </div>

            {/* Main heading */}
            <h1
              className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ color: '#1A1814' }}
            >
              Discover the Magic of{' '}
              <span
                className="relative inline-block"
                style={{
                  background: 'linear-gradient(135deg, #A0522D 0%, #C4960C 60%, #D4A843 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Morocco
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
              style={{ color: 'rgba(26,24,20,0.65)' }}
            >
              From ancient medinas and golden Sahara dunes to Atlas Mountain peaks and Atlantic surf towns.
              Your complete guide to the Kingdom of Light.
            </p>

            {/* Search bar (client component) */}
            <HeroSearchBar />

            {/* Social proof stats */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { value: 12, suffix: 'K+', label: 'Travelers Helped' },
                { value: 4.9, suffix: '', label: 'Average Rating', decimals: 1 },
                { value: 500, suffix: '+', label: 'Verified Listings' },
                { value: 50, suffix: '+', label: 'Cities Covered' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center py-4 px-3 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(160,82,45,0.08)',
                  }}
                >
                  <span
                    className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold"
                    style={{ color: '#A0522D' }}
                  >
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      decimals={stat.decimals || 0}
                    />
                  </span>
                  <span
                    className="text-xs font-medium mt-1 uppercase tracking-wider"
                    style={{ color: 'rgba(26,24,20,0.5)' }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom fade into cream */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, #FAF7F2 100%)',
            }}
          />
        </section>

        {/* ===================================================
            PRESS MENTION BAR
        =================================================== */}
        <section
          className="py-6 md:py-8 border-b"
          aria-label="Featured in publications"
          style={{ backgroundColor: '#FAF7F2', borderColor: 'rgba(160,82,45,0.08)' }}
        >
          <div className="container-morocco">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4" style={{ color: '#A0522D', opacity: 0.5 }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#A0522D', opacity: 0.5 }}>
                  As Seen In
                </span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {pressMentions.map((publication) => (
                  <span
                    key={publication}
                    className="font-[family-name:var(--font-display)] text-sm md:text-base font-semibold tracking-wide"
                    style={{ color: 'rgba(26,24,20,0.35)' }}
                  >
                    {publication}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            2. DESTINATIONS GRID - Beautiful card layout
        =================================================== */}
        <section
          className="py-20 md:py-28"
          aria-labelledby="destinations-heading"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <div className="container-morocco">
            <ScrollReveal>
              <SectionHeading
                label="Top Destinations"
                title="Where Will Morocco Take You?"
                description="From ancient medinas draped in ochre to blue mountain villages and golden Saharan dunes, every corner tells a different story."
              />
            </ScrollReveal>

            {/* Asymmetric bento grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
              {destinations.map((dest, idx) => {
                // First two cards are large (2x2), rest are normal
                const isLarge = idx < 2;
                // Use dedicated guide pages where available
                const guidePages: Record<string, string> = {
                  marrakech: '/marrakech',
                  fes: '/fes-guide',
                  chefchaouen: '/chefchaouen',
                  essaouira: '/essaouira',
                  casablanca: '/casablanca',
                  tangier: '/tangier',
                  ouarzazate: '/ouarzazate',
                };
                const destHref = guidePages[dest.slug] || `/cities/${dest.slug}`;
                return (
                  <ScrollReveal
                    key={dest.slug}
                    delay={idx * 80}
                  >
                    <Link
                      href={destHref}
                      className={`group relative overflow-hidden rounded-2xl block h-full ${
                        isLarge
                          ? 'col-span-2 row-span-2'
                          : ''
                      }`}
                      style={isLarge ? { gridRow: 'span 2', gridColumn: 'span 2' } : undefined}
                    >
                      <img
                        src={dest.image}
                        alt={`${dest.name}, Morocco`}
                        loading={idx < 2 ? undefined : 'lazy'}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Warm gradient overlay */}
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: `linear-gradient(to top, rgba(26,24,20,0.65) 0%, rgba(26,24,20,0.2) 40%, rgba(26,24,20,0.02) 70%, transparent 100%)`,
                        }}
                      />
                      {/* Hover warm overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(to top, rgba(160,82,45,0.5) 0%, rgba(160,82,45,0.1) 50%, transparent 100%)`,
                        }}
                      />
                      {/* Content */}
                      <div className="relative z-10 flex flex-col justify-end h-full p-4 md:p-6">
                        <span
                          className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase mb-1"
                          style={{ color: 'rgba(196,150,12,0.9)' }}
                        >
                          Explore
                        </span>
                        <h3
                          className={`font-[family-name:var(--font-display)] font-bold text-white leading-tight ${
                            isLarge ? 'text-2xl md:text-4xl' : 'text-lg md:text-2xl'
                          }`}
                        >
                          {dest.name}
                        </h3>
                        {isLarge && (
                          <p className="mt-1 text-sm text-white/80 max-w-xs hidden md:block">
                            {dest.tagline}
                          </p>
                        )}
                        <span className="mt-2 inline-flex items-center gap-1 text-xs md:text-sm font-medium text-white/80 group-hover:text-[#F9F0D0] transition-colors">
                          Discover
                          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* View all cities CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/cities"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  color: '#A0522D',
                  border: '2px solid rgba(160,82,45,0.2)',
                  backgroundColor: 'rgba(160,82,45,0.04)',
                }}
              >
                View All 50+ Destinations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ===================================================
            3. EXPERIENCE CATEGORIES - Visual showcase
        =================================================== */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="categories-heading"
          style={{ backgroundColor: '#F5F1EA' }}
        >
          {/* Subtle pattern */}
          <div className="absolute inset-0 moroccan-pattern pointer-events-none" />

          <div className="container-morocco relative z-10">
            <ScrollReveal>
              <SectionHeading
                label="Experiences"
                title="What Draws You to Morocco?"
                description="From adrenaline-fueled desert adventures to meditative hammam rituals, find the experience that speaks to your soul."
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {experienceCategories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <ScrollReveal key={cat.title} delay={idx * 100}>
                    <Link
                      href={cat.href}
                      className="group relative overflow-hidden rounded-2xl block"
                      style={{ minHeight: '280px' }}
                    >
                      <img
                        src={cat.image}
                        alt={cat.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      {/* Warm gradient overlay */}
                      <div
                        className="absolute inset-0 transition-all duration-500"
                        style={{
                          background: `linear-gradient(to top, rgba(26,24,20,0.75) 0%, rgba(26,24,20,0.35) 40%, rgba(26,24,20,0.1) 70%, transparent 100%)`,
                        }}
                      />
                      {/* Hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, ${cat.color}40 0%, transparent 100%)`,
                        }}
                      />
                      {/* Content */}
                      <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                        <div
                          className="flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-500 group-hover:scale-110"
                          style={{
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(255,255,255,0.2)',
                          }}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-white leading-tight mb-2">
                          {cat.title}
                        </h3>
                        <p className="text-sm text-white/75 max-w-xs leading-relaxed">
                          {cat.description}
                        </p>
                        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 group-hover:text-[#F9F0D0] transition-colors">
                          Explore
                          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                        </span>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* ===================================================
            4. FEATURED EXPERIENCES - Horizontal scroll
        =================================================== */}
        <section
          className="py-20 md:py-28"
          aria-labelledby="featured-experiences-heading"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <div className="container-morocco">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#C4960C' }}>
                      Curated by Locals
                    </span>
                    <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                  </div>
                  <h2
                    className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
                    style={{ color: '#1A1814' }}
                  >
                    Top-Rated Experiences
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(26,24,20,0.6)' }}>
                    Handpicked activities and tours designed by Moroccans who know every hidden gem, secret trail, and family recipe.
                  </p>
                </div>
                <Link
                  href="/experiences"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:gap-3 flex-shrink-0"
                  style={{ color: '#A0522D' }}
                >
                  View all experiences
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <FeaturedExperiencesScroll experiences={featuredExperiences} />
          </div>
        </section>

        {/* ===================================================
            5. WHY CHOOSE CITYGUIDE - Trust section
        =================================================== */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="why-choose-heading"
          style={{ backgroundColor: '#F5F1EA' }}
        >
          <div className="absolute inset-0 moroccan-pattern pointer-events-none" />

          {/* Decorative blurs */}
          <div
            className="absolute top-20 -left-20 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,150,12,0.06) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-20 -right-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(160,82,45,0.05) 0%, transparent 70%)' }}
          />

          <div className="container-morocco relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Left: Content */}
              <ScrollReveal direction="left">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#C4960C' }}>
                      Why CityGuide
                    </span>
                  </div>
                  <h2
                    className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-6"
                    style={{ color: '#1A1814' }}
                  >
                    The Most Trusted Morocco Travel Companion
                  </h2>
                  <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(26,24,20,0.6)' }}>
                    For over a decade, we have helped travelers from 120+ countries discover the real Morocco.
                    Our local team curates every listing, verifies every guide, and ensures your trip is nothing short of extraordinary.
                  </p>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    {[
                      { value: 12, suffix: 'K+', label: 'Happy Travelers' },
                      { value: 200, suffix: '+', label: 'Expert Guides' },
                      { value: 12, suffix: '+', label: 'Years Experience' },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <span
                          className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold block"
                          style={{ color: '#A0522D' }}
                        >
                          <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                        </span>
                        <span className="text-xs font-medium uppercase tracking-wider mt-1 block" style={{ color: 'rgba(26,24,20,0.45)' }}>
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #A0522D 0%, #7A3E22 100%)',
                      boxShadow: '0 4px 16px rgba(160,82,45,0.25)',
                    }}
                  >
                    Learn Our Story
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Right: Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {whyChooseFeatures.map((feature, idx) => {
                  const Icon = feature.icon;
                  return (
                    <ScrollReveal key={feature.title} delay={idx * 120}>
                      <div
                        className="group p-6 md:p-7 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        style={{
                          backgroundColor: '#FFFFFF',
                          borderColor: 'rgba(160,82,45,0.08)',
                        }}
                      >
                        <div
                          className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110"
                          style={{
                            backgroundColor: 'rgba(196,150,12,0.08)',
                            color: '#C4960C',
                          }}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3
                          className="font-heading text-base font-bold mb-2"
                          style={{ color: '#1A1814' }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(26,24,20,0.55)' }}>
                          {feature.description}
                        </p>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            6. TESTIMONIALS
        =================================================== */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="testimonials-heading"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          {/* Decorative elements */}
          <div
            className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,150,12,0.04) 0%, transparent 70%)' }}
          />
          <div
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(160,82,45,0.03) 0%, transparent 70%)' }}
          />

          <div className="container-morocco relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#C4960C' }}>
                    <Star className="w-3.5 h-3.5" style={{ fill: '#C4960C' }} />
                    Traveler Stories
                  </span>
                  <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                </div>
                <h2
                  id="testimonials-heading"
                  className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
                  style={{ color: '#1A1814' }}
                >
                  What Travelers Say
                </h2>
                <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(26,24,20,0.6)' }}>
                  Thousands of adventurers have discovered the magic of Morocco through CityGuide. Here are their stories.
                </p>
              </div>
            </ScrollReveal>

            {/* Aggregate rating bar */}
            <ScrollReveal>
              <div
                className="rounded-2xl border mb-12 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(160,82,45,0.04)',
                  borderColor: 'rgba(160,82,45,0.1)',
                }}
              >
                <div className="grid grid-cols-2 md:grid-cols-4">
                  {[
                    { value: '12,000+', label: 'Happy Travelers' },
                    { value: '4.9/5', label: 'Average Rating' },
                    { value: '98%', label: 'Recommend Us' },
                    { value: '120+', label: 'Countries Served' },
                  ].map((stat, idx) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center justify-center py-6 md:py-8 px-4"
                      style={{
                        borderRight: idx < 3 ? '1px solid rgba(160,82,45,0.08)' : 'none',
                      }}
                    >
                      <span
                        className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold tracking-tight"
                        style={{ color: '#A0522D' }}
                      >
                        {stat.value}
                      </span>
                      <span className="mt-1 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: 'rgba(26,24,20,0.4)' }}>
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonials carousel (client component) */}
            <TestimonialsCarousel />
          </div>
        </section>

        {/* ===================================================
            7. TRIP PLANNER CTA
        =================================================== */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="trip-planner-heading"
          style={{
            background: 'linear-gradient(135deg, #A0522D 0%, #7A3E22 40%, #5C2F1A 100%)',
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 moroccan-pattern-dark opacity-20 pointer-events-none" />

          {/* Decorative gold blur */}
          <div
            className="absolute top-10 right-10 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,150,12,0.15) 0%, transparent 70%)' }}
          />

          <div className="container-morocco relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left: Content */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Route className="w-5 h-5" style={{ color: '#F9F0D0' }} />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#F9F0D0' }}>
                    AI-Powered Planning
                  </span>
                </div>
                <h2
                  id="trip-planner-heading"
                  className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.08] text-white mb-6"
                >
                  Plan Your Perfect Moroccan Adventure
                </h2>
                <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  Tell us your travel style, dates, and budget. Our intelligent trip planner creates a personalized day-by-day itinerary with
                  the best accommodations, activities, and hidden gems -- all in under a minute.
                </p>

                {/* Feature list */}
                <div className="space-y-4 mb-10">
                  {[
                    'Personalized day-by-day itineraries',
                    'Budget optimization with real prices',
                    'Offline-ready maps and directions',
                    'Local insider tips for every stop',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#F9F0D0' }} />
                      <span className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/tools/planner"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5"
                    style={{
                      background: 'linear-gradient(135deg, #C4960C 0%, #D4A843 100%)',
                      color: '#1A1814',
                      boxShadow: '0 4px 20px rgba(196,150,12,0.3)',
                    }}
                  >
                    Start Planning Free
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/itineraries"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 border"
                    style={{
                      color: 'rgba(255,255,255,0.9)',
                      borderColor: 'rgba(255,255,255,0.2)',
                      backgroundColor: 'rgba(255,255,255,0.05)',
                    }}
                  >
                    Browse Itineraries
                  </Link>
                </div>
              </div>

              {/* Right: Visual preview */}
              <div className="relative">
                <div
                  className="rounded-2xl overflow-hidden"
                  style={{
                    boxShadow: '0 24px 60px rgba(0,0,0,0.3)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <img
                    src="/images/hero-desert.webp"
                    alt="Camel caravan crossing the Sahara at sunset"
                    loading="lazy"
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                  {/* Glass card overlay */}
                  <div
                    className="absolute bottom-6 left-6 right-6 p-5 rounded-xl"
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.12)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255,255,255,0.15)',
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: 'rgba(196,150,12,0.2)' }}
                      >
                        <Calendar className="w-5 h-5" style={{ color: '#F9F0D0' }} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">7-Day Morocco Grand Tour</p>
                        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
                          Marrakech - Sahara - Fes - Chefchaouen
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" /> 4 cities
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 7 days
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5" style={{ fill: '#F9F0D0', color: '#F9F0D0' }} /> 4.9
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -top-4 -right-4 px-4 py-2 rounded-full text-xs font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #C4960C 0%, #D4A843 100%)',
                    color: '#1A1814',
                    boxShadow: '0 4px 16px rgba(196,150,12,0.4)',
                  }}
                >
                  Free Tool
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            8. LATEST FROM BLOG
        =================================================== */}
        <section
          className="py-20 md:py-28"
          aria-labelledby="blog-heading"
          style={{ backgroundColor: '#FAF7F2' }}
        >
          <div className="container-morocco">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#C4960C' }}>
                      Travel Journal
                    </span>
                    <span className="h-px w-8 md:w-12" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                  </div>
                  <h2
                    id="blog-heading"
                    className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
                    style={{ color: '#1A1814' }}
                  >
                    Latest from the Blog
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(26,24,20,0.6)' }}>
                    Expert guides, hidden gems, and travel stories from across the Kingdom.
                  </p>
                </div>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-300 hover:gap-3 flex-shrink-0"
                  style={{ color: '#A0522D' }}
                >
                  View all articles
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post, idx) => (
                <ScrollReveal key={post.title} delay={idx * 120}>
                  <Link
                    href={post.href}
                    className="group block rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(160,82,45,0.08)',
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Category badge */}
                      <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          color: '#A0522D',
                          backdropFilter: 'blur(4px)',
                        }}
                      >
                        {post.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 text-xs mb-3" style={{ color: 'rgba(26,24,20,0.4)' }}>
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(26,24,20,0.2)' }} />
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3
                        className="font-[family-name:var(--font-display)] text-lg font-bold leading-tight mb-2 transition-colors duration-300 group-hover:text-[#A0522D]"
                        style={{ color: '#1A1814' }}
                      >
                        {post.title}
                      </h3>
                      <p className="text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(26,24,20,0.55)' }}>
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5" style={{ color: '#A0522D' }}>
                        Read article
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            8b. MORE GUIDES - Quick links to specialized guides
        =================================================== */}
        <section className="py-16 md:py-20" style={{ backgroundColor: 'var(--surface-muted)' }}>
          <div className="container-morocco">
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Specialized Travel Guides
              </h2>
              <p className="mt-2 text-base" style={{ color: 'var(--text-secondary)' }}>
                Deep-dive guides for every type of traveler
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {[
                { label: 'Road Trip Routes', href: '/morocco-road-trip-routes', icon: Car },
                { label: 'Shopping Guide', href: '/morocco-shopping-guide', icon: ShoppingBag },
                { label: 'Nightlife Guide', href: '/morocco-nightlife-guide', icon: Moon },
                { label: 'Spa & Hammam', href: '/morocco-spa-guide', icon: Gem },
                { label: 'Digital Nomad', href: '/morocco-digital-nomad-guide', icon: Wifi },
                { label: 'Wedding Venues', href: '/morocco-wedding-venues', icon: Heart },
                { label: 'Safety Tips', href: '/morocco-safety-tips', icon: Shield },
                { label: 'Weather Guide', href: '/morocco-weather-monthly', icon: Sun },
                { label: 'Train Routes', href: '/morocco-train-routes', icon: Train },
                { label: 'Airports Guide', href: '/morocco-airports-guide', icon: Plane },
                { label: 'Photography', href: '/photography-guide', icon: Camera },
                { label: 'For Locals', href: '/morocco-for-locals', icon: MapPin },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:shadow-md group"
                  style={{ backgroundColor: 'white', border: '1px solid rgba(160,82,45,0.1)' }}
                >
                  <guide.icon className="w-5 h-5 shrink-0" style={{ color: 'var(--color-accent)' }} />
                  <span className="font-[family-name:var(--font-heading)] text-sm font-medium group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {guide.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================
            9. NEWSLETTER CTA - Warm background
        =================================================== */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="newsletter-heading"
          style={{
            background: 'linear-gradient(135deg, #7A3E22 0%, #A0522D 40%, #C07B52 100%)',
          }}
        >
          {/* Pattern overlay */}
          <div className="absolute inset-0 moroccan-pattern-dark opacity-15 pointer-events-none" />

          {/* Decorative gold circles */}
          <div
            className="absolute -top-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,150,12,0.12) 0%, transparent 70%)' }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(196,150,12,0.1) 0%, transparent 70%)' }}
          />

          <div className="container-morocco relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div
                className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-6"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}
              >
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2
                id="newsletter-heading"
                className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Your Moroccan Journey Starts Here
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Join 30,000+ travelers receiving weekly insider guides, hidden gem recommendations, and exclusive deals from across the Kingdom.
              </p>

              {/* Newsletter form (client component) */}
              <NewsletterForm />

              <p className="mt-4 text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
                No spam, ever. Unsubscribe anytime. We respect your inbox.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

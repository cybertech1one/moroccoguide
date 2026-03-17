import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  ArrowRight,
  Clock,
  ShieldCheck,
  Sparkles,
  Mountain,
  Sun,
  Waves,
  ChefHat,
  Landmark,
  Route,
  Mail,
  Calendar,
  Zap,
  Headphones,
  Map,
  Compass,
  Users,
  BookOpen,
  CheckCircle,
  Globe,
  Camera,
  ShoppingBag,
  Heart,
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
    'Morocco Travel Guide 2026 - Expert Tips, Tours & Itineraries | CityGuide',
  description:
    'The most comprehensive Morocco travel guide for 2026. Expert-curated itineraries, 50+ cities, desert adventures, cultural experiences, local cuisine, riads, and insider tips from verified Moroccan guides.',
  keywords: [
    'Morocco travel guide',
    'Morocco travel guide 2026',
    'Morocco tourism',
    'visit Morocco',
    'Marrakech travel guide',
    'Fes medina guide',
    'Chefchaouen blue city',
    'Sahara Desert Morocco',
    'Morocco itinerary',
    'Morocco tours',
    'things to do in Morocco',
    'Morocco riads',
    'Moroccan food guide',
    'Morocco budget travel',
    'best time to visit Morocco',
    'Morocco travel tips',
    'Atlas Mountains trekking',
    'Morocco surfing',
    'Morocco cooking classes',
  ],
  openGraph: {
    title: 'Morocco Travel Guide 2026 - The Definitive Resource | CityGuide',
    description:
      'Plan your perfect Morocco trip with expert-curated guides covering 50+ cities, desert adventures, cultural experiences, local cuisine, and insider tips.',
    url: 'https://citytoursmorocco.com/home-v2',
    siteName: 'CityGuide',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech with the Koutoubia Mosque at golden hour',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Travel Guide 2026 - The Definitive Resource',
    description:
      'Plan your Morocco trip with expert guides: 50+ cities, Sahara adventures, medina walks, local cuisine, and verified local guides.',
    images: ['/images/hero-marrakech.webp'],
  },
  alternates: {
    canonical: 'https://citytoursmorocco.com/home-v2',
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
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
    description:
      'The most comprehensive Morocco travel guide for 2026 with expert-curated itineraries, 50+ cities, cultural experiences, and insider tips.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://citytoursmorocco.com/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
    logo: 'https://citytoursmorocco.com/logo.png',
    sameAs: [
      'https://twitter.com/cityguide',
      'https://instagram.com/cityguide',
      'https://facebook.com/cityguide',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['English', 'French', 'Arabic'],
    },
  };

  const travelGuideSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Morocco',
    alternateName: 'Kingdom of Morocco',
    description:
      'Morocco is a North African destination renowned for its ancient medinas, vast Saharan landscapes, the High Atlas Mountains, world-class cuisine, and a living tapestry of Berber, Arab, and Andalusian cultures.',
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
      'Photography enthusiasts',
      'Wellness travelers',
    ],
    includesAttraction: [
      { '@type': 'TouristAttraction', name: 'Jemaa el-Fnaa, Marrakech' },
      { '@type': 'TouristAttraction', name: 'Fes el-Bali Medina' },
      { '@type': 'TouristAttraction', name: 'Sahara Desert, Merzouga' },
      { '@type': 'TouristAttraction', name: 'Hassan II Mosque, Casablanca' },
      { '@type': 'TouristAttraction', name: 'Ait Benhaddou Kasbah' },
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
    slug: '/marrakech',
    tagline: 'The Red City',
    description: 'Ancient souks, palatial riads, and the legendary Jemaa el-Fnaa',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Fes',
    slug: '/fes-guide',
    tagline: 'Spiritual Capital',
    description: 'The world\'s largest car-free urban zone and living medieval medina',
    image: '/images/hero-fes-tanneries.webp',
  },
  {
    name: 'Chefchaouen',
    slug: '/chefchaouen',
    tagline: 'The Blue Pearl',
    description: 'Dreamy blue-washed alleys nestled in the Rif Mountains',
    image: '/images/hero-chefchaouen-streets.webp',
  },
  {
    name: 'Essaouira',
    slug: '/essaouira',
    tagline: 'Wind City',
    description: 'Atlantic ramparts, fresh seafood, and bohemian creative energy',
    image: '/images/hero-essaouira-port.webp',
  },
  {
    name: 'Casablanca',
    slug: '/casablanca',
    tagline: 'The White City',
    description: 'Art Deco grandeur and the awe-inspiring Hassan II Mosque',
    image: '/images/hero-casablanca.webp',
  },
  {
    name: 'Tangier',
    slug: '/tangier',
    tagline: 'Gateway to Africa',
    description: 'Where the Mediterranean meets the Atlantic in literary legend',
    image: '/images/hero-tangier-bay.webp',
  },
  {
    name: 'Merzouga',
    slug: '/desert-adventures',
    tagline: 'Sahara Gateway',
    description: 'Towering Erg Chebbi dunes and luxury desert camps under stars',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Ouarzazate',
    slug: '/ouarzazate',
    tagline: 'Hollywood of Africa',
    description: 'Kasbahs, film studios, and the doorstep of the Sahara',
    image: '/images/hero-ait-benhaddou.webp',
  },
];

const experienceCategories = [
  {
    title: 'Desert Adventures',
    description: 'Luxury camps, camel treks, and stargazing under infinite skies',
    icon: Sun,
    image: '/images/hero-sahara-camp.webp',
    href: '/desert-adventures',
    color: '#D97706',
  },
  {
    title: 'Cuisine & Street Food',
    description: 'Tagines, pastilla, mint tea rituals, and vibrant spice markets',
    icon: ChefHat,
    image: '/images/hero-food.webp',
    href: '/cuisine',
    color: '#B91C1C',
  },
  {
    title: 'Berber Culture',
    description: 'Ancient traditions, mountain villages, and handwoven textiles',
    icon: Globe,
    image: '/images/hero-berber-culture.webp',
    href: '/berber-culture',
    color: '#7C3AED',
  },
  {
    title: 'Atlas Mountains',
    description: 'Epic trekking routes, cascading waterfalls, and valley panoramas',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    href: '/atlas-mountains',
    color: '#047857',
  },
  {
    title: 'Beach & Surf',
    description: 'World-class breaks at Taghazout and windswept Atlantic shores',
    icon: Waves,
    image: '/images/hero-surf-taghazout.webp',
    href: '/surfing',
    color: '#0369A1',
  },
  {
    title: 'Souks & Shopping',
    description: 'Handcrafted leather, ceramics, argan oil, and the art of haggling',
    icon: ShoppingBag,
    image: '/images/hero-souk-lamps.webp',
    href: '/activities',
    color: '#A0522D',
  },
];

const featuredExperiences = [
  {
    title: 'Sahara Desert Safari',
    image: '/images/hero-sahara-camp.webp',
    price: 'From 1,200 MAD',
    duration: '2-3 days',
    rating: 4.9,
    reviews: 847,
    href: '/desert-adventures',
    badge: 'Trending',
    iconName: 'flame',
  },
  {
    title: 'Marrakech Cooking Class',
    image: '/images/hero-cooking-class.webp',
    price: 'From 450 MAD',
    duration: '3-4 hours',
    rating: 4.8,
    reviews: 632,
    href: '/cooking-classes',
    iconName: 'chef-hat',
  },
  {
    title: 'Fes Medina Walking Tour',
    image: '/images/hero-fes-tanneries.webp',
    price: 'From 250 MAD',
    duration: '2-3 hours',
    rating: 4.7,
    reviews: 521,
    href: '/tours',
    badge: 'Popular',
    iconName: 'footprints',
  },
  {
    title: 'Taghazout Surf Lesson',
    image: '/images/hero-surf-taghazout.webp',
    price: 'From 350 MAD',
    duration: '2-3 hours',
    rating: 4.8,
    reviews: 394,
    href: '/surfing',
    iconName: 'wind',
  },
  {
    title: 'Atlas Mountain Trek',
    image: '/images/hero-atlas.webp',
    price: 'From 650 MAD',
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
    price: 'From 300 MAD',
    duration: '1.5 hours',
    rating: 4.8,
    reviews: 456,
    href: '/hammam',
    iconName: 'droplets',
  },
  {
    title: 'Hot Air Balloon Marrakech',
    image: '/images/hero-hot-air-balloon.webp',
    price: 'From 1,800 MAD',
    duration: '3 hours',
    rating: 4.9,
    reviews: 178,
    href: '/activities',
    badge: 'Unique',
    iconName: 'sun',
  },
];

const whyChooseFeatures = [
  {
    icon: ShieldCheck,
    title: 'Verified Local Guides',
    description:
      'Every guide in our network is personally vetted with verified credentials, local expertise, and a proven track record of exceptional service.',
  },
  {
    icon: Zap,
    title: 'Instant Booking',
    description:
      'Secure your spot in seconds with real-time availability, instant confirmation, and flexible cancellation policies on most experiences.',
  },
  {
    icon: Headphones,
    title: '24/7 Travel Support',
    description:
      'Round-the-clock multilingual support via WhatsApp, phone, or email. We are always just a message away, wherever you are in Morocco.',
  },
  {
    icon: Route,
    title: 'Curated Itineraries',
    description:
      'Expert-designed day-by-day itineraries for every travel style, from first-timers to seasoned adventurers, from budget to luxury.',
  },
];

const pressMentions = [
  'Lonely Planet',
  'Conde Nast Traveler',
  'Travel + Leisure',
  'National Geographic',
  'The New York Times',
  'AFAR Magazine',
];

const blogPosts = [
  {
    title: 'The Ultimate First-Timer\'s Guide to Marrakech',
    excerpt:
      'Everything you need to know before stepping into the Red City -- from navigating the medina to finding the best riads and street food stalls.',
    image: '/images/hero-marrakech.webp',
    href: '/blog',
    category: 'City Guide',
    readTime: '12 min read',
  },
  {
    title: '10 Hidden Gems in the Atlas Mountains',
    excerpt:
      'Beyond the well-trodden trails: discover secret waterfalls, remote Berber villages, and panoramic viewpoints that most tourists never see.',
    image: '/images/hero-atlas-village.webp',
    href: '/blog/atlas-mountains-trekking',
    category: 'Adventure',
    readTime: '9 min read',
  },
  {
    title: 'A Food Lover\'s Journey Through Fes',
    excerpt:
      'From steaming bowls of harira in the medina to world-class pastilla and the sweetest dates in the country -- a culinary deep dive.',
    image: '/images/hero-food.webp',
    href: '/blog',
    category: 'Food & Culture',
    readTime: '10 min read',
  },
];

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function HomeV2() {
  return (
    <div className="bg-[#FAF7F2] text-[#2C241B] relative overflow-hidden font-[family-name:var(--font-heading)]">
      <JsonLd />

      {/* ===================================================
          SECTION 1: HERO
      =================================================== */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Panoramic view of Marrakech rooftops and the Koutoubia Mosque at golden hour"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(26,24,20,0.55) 0%, rgba(26,24,20,0.3) 40%, rgba(26,24,20,0.65) 100%)',
            }}
          />
          {/* Warm color overlay */}
          <div
            className="absolute inset-0 mix-blend-multiply"
            style={{
              background:
                'linear-gradient(135deg, rgba(193,91,61,0.15) 0%, transparent 50%, rgba(196,150,12,0.1) 100%)',
            }}
          />
        </div>

        <div className="container-morocco relative z-10 pt-32 pb-20 text-center">
          {/* Badge */}
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md mb-8">
              <Star className="w-4 h-4 text-[#E2A65C] fill-[#E2A65C]" />
              <span className="text-sm font-semibold text-white tracking-wide">
                The #1 Morocco Travel Resource for 2026
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={100}>
            <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-white max-w-5xl mx-auto">
              Your Complete Guide to{' '}
              <span
                className="inline-block"
                style={{
                  background:
                    'linear-gradient(135deg, #E2A65C 0%, #F5D5A0 50%, #E2A65C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Morocco
              </span>
            </h1>
          </ScrollReveal>

          {/* Subtitle */}
          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl text-white/80 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              The most comprehensive, locally-sourced travel guide to the
              Kingdom of Morocco. Expert itineraries, verified guides, authentic
              experiences, and everything you need to plan the trip of a
              lifetime.
            </p>
          </ScrollReveal>

          {/* Search Bar */}
          <ScrollReveal delay={300} className="max-w-2xl mx-auto mb-16">
            <div className="bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-[0_24px_48px_-12px_rgba(0,0,0,0.25)]">
              <HeroSearchBar />
            </div>
          </ScrollReveal>

          {/* Stats Row */}
          <ScrollReveal delay={400}>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { val: 12, suffix: 'K+', label: 'Travelers Guided', decimals: 0 },
                { val: 4.9, suffix: '', label: 'Average Rating', decimals: 1 },
                { val: 500, suffix: '+', label: 'Curated Listings', decimals: 0 },
                { val: 50, suffix: '+', label: 'Cities Covered', decimals: 0 },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-1">
                    <AnimatedCounter
                      end={stat.val}
                      suffix={stat.suffix}
                      decimals={stat.decimals}
                    />
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 2: PRESS MENTIONS BAR
      =================================================== */}
      <section className="py-8 bg-white border-y border-[#F0E8DC]">
        <div className="container-morocco">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C7A6B] shrink-0">
                As Seen In
              </span>
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                {pressMentions.map((name) => (
                  <span
                    key={name}
                    className="text-sm md:text-base font-[family-name:var(--font-display)] font-bold text-[#B8A898] hover:text-[#A0522D] transition-colors cursor-default"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================
          SECTION 3: DESTINATIONS (Moorish Arch Cards)
      =================================================== */}
      <section className="py-24 md:py-32 relative bg-[#FAF7F2]">
        {/* Subtle dot pattern background */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#A0522D 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="container-morocco relative z-10">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="flex justify-center items-center gap-3 mb-4">
                <span className="w-12 h-px bg-[#C4960C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4960C]">
                  Iconic Destinations
                </span>
                <span className="w-12 h-px bg-[#C4960C]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-[#1A1814] mb-6">
                Where Will Morocco Take You?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-[#8C7A6B] text-lg leading-relaxed">
                From the labyrinthine medinas of imperial cities to the vast
                silence of the Sahara, each destination reveals a different
                chapter of Morocco's extraordinary story.
              </p>
            </ScrollReveal>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {destinations.map((dest, idx) => (
              <ScrollReveal key={dest.name} delay={idx * 75}>
                <Link href={dest.slug} className="group block text-center">
                  {/* Arch-shaped image container */}
                  <div
                    className="relative overflow-hidden mb-5 shadow-md transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1"
                    style={{
                      aspectRatio: '0.75',
                      borderRadius: '200px 200px 16px 16px',
                    }}
                  >
                    <img
                      src={dest.image}
                      alt={`${dest.name}, Morocco - ${dest.tagline}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1814]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    {/* Bottom label on hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white/90 text-xs leading-relaxed">
                        {dest.description}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#C4960C] text-[10px] font-bold uppercase tracking-[0.25em] mb-1.5">
                    {dest.tagline}
                  </p>
                  <h3 className="text-lg md:text-xl font-[family-name:var(--font-display)] font-bold text-[#2C241B] group-hover:text-[#A0522D] transition-colors">
                    {dest.name}
                  </h3>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          {/* View All CTA */}
          <div className="mt-16 text-center">
            <ScrollReveal delay={200}>
              <Link
                href="/cities"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 border-[#A0522D] text-[#A0522D] font-bold uppercase tracking-widest text-xs hover:bg-[#A0522D] hover:text-white transition-all duration-300"
              >
                Explore All Destinations
                <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 4: EXPERIENCE CATEGORIES
      =================================================== */}
      <section className="py-24 md:py-32 relative bg-white border-y border-[#F0E8DC]">
        <div className="container-morocco">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-[#C15B3D]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C15B3D]">
                    Curated Experiences
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#1A1814]">
                  Discover Morocco Your Way
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <Link
                href="/activities"
                className="text-[#A0522D] font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all shrink-0"
              >
                View All Categories <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experienceCategories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <ScrollReveal key={cat.title} delay={idx * 100}>
                  <Link
                    href={cat.href}
                    className="group relative block rounded-2xl overflow-hidden h-72 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, transparent 30%, rgba(26,24,20,0.85) 100%)',
                      }}
                    />
                    {/* Icon badge */}
                    <div
                      className="absolute top-5 left-5 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20"
                      style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    {/* Text */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white mb-2 group-hover:text-[#E2A65C] transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-white/70 text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 5: FEATURED EXPERIENCES (Scrollable)
      =================================================== */}
      <section className="py-24 md:py-32 relative bg-[#FAF7F2]">
        {/* Zellige dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#A0522D 1.5px, transparent 1.5px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-morocco relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
            <div>
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-[#C4960C]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4960C]">
                    Book With Confidence
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#1A1814]">
                  Most Popular Experiences
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <Link
                href="/tours"
                className="text-[#A0522D] font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all shrink-0"
              >
                View All Tours <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <FeaturedExperiencesScroll experiences={featuredExperiences} />
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================
          SECTION 6: WHY CHOOSE US
      =================================================== */}
      <section className="py-24 md:py-32 bg-white border-y border-[#F0E8DC]">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Text */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-6">
                  <span className="w-12 h-px bg-[#A0522D]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A0522D]">
                    The CityGuide Difference
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#1A1814] mb-6">
                  Built by Locals, Trusted by Travelers Worldwide
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <p className="text-[#8C7A6B] text-lg leading-relaxed mb-8">
                  We are not a generic booking engine. Our team of Moroccan
                  insiders has spent over a decade hand-curating every listing,
                  verifying every guide, and testing every route to ensure your
                  trip exceeds expectations.
                </p>
              </ScrollReveal>

              {/* Trust Stats */}
              <ScrollReveal delay={200}>
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { val: 12, suffix: 'K+', label: 'Happy Travelers' },
                    { val: 200, suffix: '+', label: 'Verified Guides' },
                    { val: 12, suffix: '+', label: 'Years of Expertise' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <span className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold text-[#A0522D]">
                        <AnimatedCounter
                          end={stat.val}
                          suffix={stat.suffix}
                        />
                      </span>
                      <p className="text-xs text-[#8C7A6B] mt-1 font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#A0522D] font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all"
                >
                  Read Our Story <ArrowRight className="w-4 h-4" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyChooseFeatures.map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <ScrollReveal key={feat.title} delay={i * 100}>
                    <div className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E8DCCB] hover:border-[#A0522D]/30 hover:shadow-lg transition-all duration-300 group h-full">
                      <div className="w-14 h-14 rounded-2xl bg-[#A0522D]/10 flex items-center justify-center mb-6 group-hover:bg-[#A0522D]/15 transition-colors">
                        <Icon className="w-6 h-6 text-[#A0522D]" />
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[#2C241B] mb-3">
                        {feat.title}
                      </h3>
                      <p className="text-sm text-[#8C7A6B] leading-relaxed">
                        {feat.description}
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
          SECTION 7: TESTIMONIALS
      =================================================== */}
      <section className="py-24 md:py-32 relative bg-[#FAF7F2]">
        <div className="container-morocco">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-6">
            <ScrollReveal>
              <div className="flex justify-center items-center gap-3 mb-4">
                <span className="w-12 h-px bg-[#C4960C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4960C]">
                  Traveler Stories
                </span>
                <span className="w-12 h-px bg-[#C4960C]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#1A1814] mb-6">
                Trusted by Thousands
              </h2>
            </ScrollReveal>
          </div>

          {/* Aggregate Rating Bar */}
          <ScrollReveal delay={150}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 px-6 py-4 rounded-2xl bg-white border border-[#E8DCCB] max-w-xl mx-auto">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-[#C4960C] text-[#C4960C]"
                  />
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="font-bold text-[#1A1814]">4.9 out of 5</span>
                <span className="text-[#8C7A6B]">based on 2,400+ reviews</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Testimonials Carousel */}
          <ScrollReveal delay={200}>
            <TestimonialsCarousel />
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================
          SECTION 8: TRIP PLANNER CTA
      =================================================== */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-sahara-sunrise.webp"
            alt="Sunrise over the Sahara Desert dunes near Merzouga"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(135deg, rgba(26,24,20,0.88) 0%, rgba(26,24,20,0.6) 100%)',
            }}
          />
        </div>

        <div className="container-morocco relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 mb-6">
                  <Sparkles className="w-4 h-4 text-[#E2A65C]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E2A65C]">
                    AI-Powered Planning
                  </span>
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Plan Your Perfect Morocco Trip
                </h2>
                <p className="text-xl text-white/70 mb-10 leading-relaxed font-light">
                  Tell us your dates, budget, and interests. Our intelligent
                  trip planner generates a fully customized day-by-day itinerary
                  with accommodation, transport, and activity recommendations.
                </p>

                {/* Feature checklist */}
                <ul className="space-y-4 mb-10">
                  {[
                    'Personalized day-by-day itineraries',
                    'Budget estimator with real MAD prices',
                    'Smart route optimization between cities',
                    'Offline access to your complete plan',
                    'Instant booking links for every activity',
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-white/80"
                    >
                      <CheckCircle className="w-5 h-5 text-[#E2A65C] shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/tools/planner"
                  className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                  style={{
                    background:
                      'linear-gradient(135deg, #E2A65C 0%, #C4960C 100%)',
                    color: '#1A1814',
                  }}
                >
                  <Map className="w-5 h-5" />
                  Start Planning for Free
                </Link>
              </ScrollReveal>
            </div>

            {/* Right: Decorative Arch Image */}
            <ScrollReveal direction="right" className="hidden lg:flex justify-center">
              <div className="relative w-full max-w-[380px]">
                {/* Shadow layer */}
                <div
                  className="absolute inset-0 bg-[#E2A65C]/20 transform translate-x-4 translate-y-4"
                  style={{
                    borderRadius: '200px 200px 16px 16px',
                  }}
                />
                <div
                  className="relative overflow-hidden shadow-2xl"
                  style={{
                    aspectRatio: '0.7',
                    borderRadius: '200px 200px 16px 16px',
                    border: '6px solid rgba(255,255,255,0.15)',
                  }}
                >
                  <img
                    src="/images/hero-sahara-camp.webp"
                    alt="Luxury desert camp in the Sahara with traditional Berber tents"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 9: BLOG POSTS
      =================================================== */}
      <section className="py-24 md:py-32 bg-white border-y border-[#F0E8DC]">
        <div className="container-morocco">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div className="max-w-2xl">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-8 h-px bg-[#A0522D]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#A0522D]">
                    From the Journal
                  </span>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#1A1814]">
                  Travel Insights & Stories
                </h2>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={150}>
              <Link
                href="/blog"
                className="text-[#A0522D] font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-3 transition-all shrink-0"
              >
                Read All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={post.title} delay={idx * 100}>
                <Link href={post.href} className="group block">
                  {/* Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-5 aspect-[4/3]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 text-[#A0522D]">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3 text-xs text-[#8C7A6B]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  {/* Title */}
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[#2C241B] mb-2 group-hover:text-[#A0522D] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  {/* Excerpt */}
                  <p className="text-sm text-[#8C7A6B] leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================================================
          SECTION 10: NEWSLETTER
      =================================================== */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #A0522D 0%, #C15B3D 50%, #A04A28 100%)',
        }}
      >
        {/* Decorative zellige pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        <div className="container-morocco relative z-10 text-center">
          <ScrollReveal>
            <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-8 border border-white/20">
              <Mail className="w-7 h-7 text-white" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-white mb-6 max-w-2xl mx-auto">
              Get Insider Morocco Tips Delivered Weekly
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-white/75 text-lg mb-4 max-w-2xl mx-auto leading-relaxed">
              Join 12,000+ travelers receiving our free weekly newsletter with
              exclusive itineraries, hidden gems, seasonal tips, and special
              deals from verified local partners.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={175}>
            <p className="text-white/50 text-sm mb-8">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl border border-white/15">
                <NewsletterForm />
              </div>
            </div>
          </ScrollReveal>

          {/* Trust signals */}
          <ScrollReveal delay={250}>
            <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-white/50 text-xs">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                Privacy Protected
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                12,000+ Subscribers
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-4 h-4" />
                Rated 4.9/5
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================
          SECTION 11: QUICK LINKS / EXPLORE MORE
      =================================================== */}
      <section className="py-24 md:py-32 bg-[#FAF7F2]">
        <div className="container-morocco">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollReveal>
              <div className="flex justify-center items-center gap-3 mb-4">
                <span className="w-12 h-px bg-[#C4960C]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#C4960C]">
                  Keep Exploring
                </span>
                <span className="w-12 h-px bg-[#C4960C]" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold text-[#1A1814] mb-6">
                Everything You Need for Morocco
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-[#8C7A6B] text-lg leading-relaxed">
                Our guide covers every aspect of traveling in Morocco. Dive
                deeper into the topics that interest you most.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { label: 'Desert Adventures', href: '/desert-adventures', icon: Sun },
                { label: 'Moroccan Cuisine', href: '/cuisine', icon: ChefHat },
                { label: 'Atlas Trekking', href: '/trekking', icon: Mountain },
                { label: 'Surfing Morocco', href: '/surfing', icon: Waves },
                { label: 'Best Riads', href: '/accommodations', icon: Heart },
                { label: 'Budget Travel', href: '/budget-travel', icon: Compass },
                { label: 'Best Time to Visit', href: '/best-time', icon: Calendar },
                { label: 'Travel Itineraries', href: '/itineraries', icon: Route },
                { label: 'Cooking Classes', href: '/cooking-classes', icon: ChefHat },
                { label: 'Hammam Guide', href: '/hammam', icon: Sparkles },
                { label: 'Architecture', href: '/architecture', icon: Landmark },
                { label: 'Photography', href: '/photography', icon: Camera },
                { label: 'Family Travel', href: '/family', icon: Users },
                { label: 'Honeymoon', href: '/honeymoon', icon: Heart },
                { label: 'Beach Guide', href: '/beaches', icon: Waves },
                { label: 'Festivals 2026', href: '/festivals-calendar', icon: Calendar },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white border border-[#E8DCCB] hover:border-[#A0522D]/30 hover:shadow-md transition-all duration-300 group"
                  >
                    <Icon className="w-4.5 h-4.5 text-[#A0522D] shrink-0" />
                    <span className="text-sm font-medium text-[#2C241B] group-hover:text-[#A0522D] transition-colors">
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===================================================
          SECTION 12: FINAL CTA
      =================================================== */}
      <section className="py-20 bg-white border-t border-[#F0E8DC]">
        <div className="container-morocco text-center">
          <ScrollReveal>
            <p className="text-[#C4960C] text-xs font-bold uppercase tracking-[0.25em] mb-4">
              Ready for Morocco?
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-5xl font-bold text-[#1A1814] mb-6 max-w-3xl mx-auto">
              Your Moroccan Adventure Starts Here
            </h2>
            <p className="text-[#8C7A6B] text-lg mb-10 max-w-2xl mx-auto">
              Whether you have three days or three weeks, a backpacker budget or
              a luxury wishlist, we have the local knowledge to make your trip
              unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/tools/planner"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm text-white transition-all duration-300 hover:brightness-110 hover:scale-[1.02]"
                style={{
                  background:
                    'linear-gradient(135deg, #A0522D 0%, #7A3E22 100%)',
                }}
              >
                <Map className="w-5 h-5" />
                Plan Your Trip
              </Link>
              <Link
                href="/itineraries"
                className="inline-flex items-center gap-3 px-10 py-4 rounded-full border-2 border-[#A0522D] text-[#A0522D] font-bold uppercase tracking-widest text-sm hover:bg-[#A0522D] hover:text-white transition-all duration-300"
              >
                <BookOpen className="w-5 h-5" />
                Browse Itineraries
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}

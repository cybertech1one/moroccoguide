import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Landmark,
  Sun,
  Waves,
  Mountain,
  Compass,
  Gem,
  Users,
  UserRound,
  Heart,
  Backpack,
  Star,
  Clock,
  ArrowRight,
  ChefHat,
  Footprints,
  Wind,
  Flame,
  Droplets,
  Mail,
  Quote,
  Route,
  MapPin,
  Calendar,
  DollarSign,
  Camera,
  Sparkles,
  Music,
  PartyPopper,
  CloudSun,
  TrendingUp,
  Lightbulb,
  RefreshCw,
  Luggage,
  ImageIcon,
  Award,
  Globe,
  Newspaper,
  ShieldCheck,
  BadgeCheck,
  Trophy,
} from 'lucide-react';
import HeroSection from '@/components/sections/HeroSection';
import MapExplorer from '@/components/sections/MapExplorer';

/* =================================================================
   METADATA & SEO
   ================================================================= */

export const metadata: Metadata = {
  title:
    'City Guide - Your Complete Guide to the Kingdom of Light | 50+ Cities, 1000+ Attractions',
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
    title: 'City Guide - Your Complete Guide to the Kingdom of Light',
    description:
      'Discover Morocco with the most comprehensive travel guide. 50+ cities, 1,000+ attractions, curated tours, and expert tips.',
    url: 'https://cityguide.ma',
    siteName: 'City Guide',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=1200',
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
    title: 'City Guide - Your Complete Guide to the Kingdom of Light',
    description:
      'Discover Morocco: 50+ cities, 1,000+ attractions, 500+ hotels, curated tours, local food, and expert travel tips.',
    images: [
      'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=1200',
    ],
  },
  alternates: {
    canonical: 'https://cityguide.ma',
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
    name: 'City Guide',
    url: 'https://cityguide.ma',
    description:
      'The most comprehensive Morocco travel guide with 50+ cities, 1,000+ attractions, hotels, tours, and expert tips.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://cityguide.ma/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'City Guide',
    url: 'https://cityguide.ma',
    logo: 'https://cityguide.ma/logo.png',
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
    containedInPlace: {
      '@type': 'Continent',
      name: 'Africa',
    },
    touristType: [
      'Cultural tourists',
      'Adventure travelers',
      'Food enthusiasts',
      'History buffs',
      'Beach lovers',
      'Desert tourism',
    ],
    includesAttraction: [
      {
        '@type': 'TouristAttraction',
        name: 'Jemaa el-Fnaa',
        description:
          'UNESCO Masterpiece of the Oral and Intangible Heritage of Humanity in Marrakech',
      },
      {
        '@type': 'TouristAttraction',
        name: 'Hassan II Mosque',
        description: 'The largest mosque in Africa, located in Casablanca',
      },
      {
        '@type': 'TouristAttraction',
        name: 'Fes Medina',
        description:
          "The world's largest car-free urban area and UNESCO World Heritage Site",
      },
      {
        '@type': 'TouristAttraction',
        name: 'Ait Ben Haddou',
        description:
          'UNESCO World Heritage fortified village near Ouarzazate',
      },
      {
        '@type': 'TouristAttraction',
        name: 'Erg Chebbi',
        description:
          'Towering Saharan sand dunes reaching 150m near Merzouga',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(travelGuideSchema),
        }}
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
    image:
      'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=800',
    size: 'large' as const,
  },
  {
    name: 'Fes',
    slug: 'fes',
    tagline: 'The Spiritual Heart of Morocco',
    image:
      'https://images.unsplash.com/photo-1579283142820-e1f0bdf21de0?q=80&w=800',
    size: 'large' as const,
  },
  {
    name: 'Chefchaouen',
    slug: 'chefchaouen',
    tagline: 'The Blue Pearl of the Rif',
    image:
      'https://images.unsplash.com/photo-1553244885-7e75700a0688?q=80&w=600',
    size: 'small' as const,
  },
  {
    name: 'Essaouira',
    slug: 'essaouira',
    tagline: 'Wind, Waves & Timeless Ramparts',
    image:
      'https://images.unsplash.com/photo-1560095633-6858b0185572?q=80&w=600',
    size: 'small' as const,
  },
  {
    name: 'Merzouga',
    slug: 'merzouga',
    tagline: 'Gateway to the Golden Sahara',
    image:
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600',
    size: 'small' as const,
  },
];

const whyMoroccoFeatures = [
  {
    icon: Landmark,
    title: 'Imperial Cities',
    description:
      'Centuries of dynasties left behind four legendary capitals brimming with palaces, gardens, and vibrant souks.',
    href: '/cities',
  },
  {
    icon: Sun,
    title: 'Sahara Desert',
    description:
      'Sleep beneath a canopy of stars on towering golden dunes that stretch beyond the horizon.',
    href: '/desert',
  },
  {
    icon: Waves,
    title: 'Atlantic Coast',
    description:
      'Windswept beaches, world-class surf breaks, and fortified port towns with fresh-catch seafood.',
    href: '/beaches',
  },
  {
    icon: Mountain,
    title: 'Atlas Mountains',
    description:
      'Snow-capped peaks, terraced Berber villages, and trekking trails through dramatic gorges.',
    href: '/mountains',
  },
];

const experiences = [
  {
    title: 'Desert Safari',
    image:
      'https://images.unsplash.com/photo-1548820488-e85faf1df02c?q=80&w=600',
    price: '$120 - $350',
    duration: '2-3 days',
    rating: 4.9,
    href: '/tours/desert-safari',
  },
  {
    title: 'Cooking Class',
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?q=80&w=600',
    price: '$45 - $90',
    duration: '3-4 hours',
    rating: 4.8,
    href: '/cooking-classes',
  },
  {
    title: 'Medina Walking Tour',
    image:
      'https://images.unsplash.com/photo-1545071568-3e1e3b4aab64?q=80&w=600',
    price: '$25 - $60',
    duration: '2-3 hours',
    rating: 4.7,
    href: '/tours',
  },
  {
    title: 'Surf Lesson',
    image:
      'https://images.unsplash.com/photo-1502680390548-bdbac40a1e4a?q=80&w=600',
    price: '$35 - $75',
    duration: '2 hours',
    rating: 4.8,
    href: '/activities',
  },
  {
    title: 'Hot Air Balloon',
    image:
      'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=600',
    price: '$180 - $250',
    duration: '1 hour',
    rating: 4.9,
    href: '/tours',
  },
  {
    title: 'Hammam Ritual',
    image:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600',
    price: '$30 - $120',
    duration: '1.5 hours',
    rating: 4.7,
    href: '/hammam',
  },
];

const travelStyles = [
  {
    icon: Compass,
    title: 'Adventure',
    description: 'Treks, dunes, and off-road journeys across wild landscapes.',
    href: '/adventure',
  },
  {
    icon: Gem,
    title: 'Luxury',
    description: 'Palatial riads, private tours, and haute Moroccan cuisine.',
    href: '/luxury',
  },
  {
    icon: Users,
    title: 'Family',
    description: 'Kid-friendly itineraries with camel rides and cooking fun.',
    href: '/family',
  },
  {
    icon: UserRound,
    title: 'Solo',
    description: 'Safe routes, social hostels, and self-discovery in the medina.',
    href: '/solo-travel',
  },
  {
    icon: Heart,
    title: 'Honeymoon',
    description: 'Rooftop dinners, desert glamping, and sunset coastlines.',
    href: '/honeymoon',
  },
  {
    icon: Backpack,
    title: 'Backpacking',
    description: 'Budget tips, hostel guides, and the best street food trail.',
    href: '/backpacking',
  },
];

const testimonials = [
  {
    quote:
      'Morocco rewrote everything I thought I knew about travel. The colors, the kindness of strangers, the silence of the desert at dawn -- it stays with you forever.',
    name: 'Amelia Chen',
    location: 'Vancouver, Canada',
    rating: 5,
    tripType: 'Solo Adventure',
  },
  {
    quote:
      'From the labyrinthine medina of Fes to the surf breaks of Taghazout, every single day felt like a completely different country. Absolutely extraordinary.',
    name: 'Lucas Moretti',
    location: 'Milan, Italy',
    rating: 5,
    tripType: 'Adventure',
  },
  {
    quote:
      'The riads, the food, the warmth of the people. We came for a week and immediately extended to three. City Guide made planning effortless.',
    name: 'Sarah Okonkwo',
    location: 'London, UK',
    rating: 5,
    tripType: 'Family Vacation',
  },
  {
    quote:
      'Our honeymoon in Morocco was pure magic. From a private dinner on the dunes to rose-petal baths in our riad, every detail was more romantic than we imagined.',
    name: 'Elena & Thomas Richter',
    location: 'Munich, Germany',
    rating: 5,
    tripType: 'Honeymoon',
  },
  {
    quote:
      'I have traveled to 40+ countries and Morocco remains unmatched. The Atlas trekking, the Berber hospitality, the night sky over the Sahara -- this is what travel is about.',
    name: 'James Whitfield',
    location: 'Sydney, Australia',
    rating: 5,
    tripType: 'Trekking',
  },
  {
    quote:
      'My daughters still talk about feeding camels at sunrise and learning to make couscous with our host family. Morocco gave us memories we will treasure for a lifetime.',
    name: 'Priya Sharma',
    location: 'Mumbai, India',
    rating: 5,
    tripType: 'Family',
  },
];

const socialProofStats = [
  { value: '50,000+', label: 'Happy Travelers' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '200+', label: 'Expert Guides' },
  { value: '12+', label: 'Years Experience' },
];

const trustBadges = [
  { name: 'TripAdvisor', descriptor: 'Travelers\u2019 Choice 2025' },
  { name: 'Google Reviews', descriptor: '4.9 Stars, 12K+ Reviews' },
  { name: 'Lonely Planet', descriptor: 'Recommended Partner' },
  { name: 'Trustpilot', descriptor: 'Excellent Rating' },
  { name: 'Frommer\u2019s', descriptor: 'Editors\u2019 Pick' },
];

const pressMentions = [
  'Lonely Planet',
  'Cond\u00e9 Nast Traveler',
  'Travel + Leisure',
  'National Geographic',
  'The New York Times',
  'Afar Magazine',
];

const experienceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'Desert Safari': Flame,
  'Cooking Class': ChefHat,
  'Medina Walking Tour': Footprints,
  'Surf Lesson': Wind,
  'Hot Air Balloon': Sun,
  'Hammam Ritual': Droplets,
};

const itineraries = [
  {
    title: 'Imperial Cities Circuit',
    duration: '7 days',
    stops: ['Marrakech', 'Fes', 'Meknes', 'Rabat'],
    price: '$800 - $1,500',
    difficulty: 'Easy',
    description:
      'Trace the footsteps of sultans through four legendary capitals, from the souks of Marrakech to the Roman ruins of Volubilis.',
    href: '/itineraries',
  },
  {
    title: 'Sahara & Oasis Adventure',
    duration: '5 days',
    stops: ['Marrakech', 'Ouarzazate', 'Merzouga', 'Todra'],
    price: '$600 - $1,200',
    difficulty: 'Moderate',
    description:
      'Cross the High Atlas, explore kasbahs along the Route of a Thousand Kasbahs, and sleep under the stars in the Erg Chebbi dunes.',
    href: '/itineraries',
  },
  {
    title: 'Coastal Breeze',
    duration: '4 days',
    stops: ['Tangier', 'Chefchaouen', 'Essaouira', 'Agadir'],
    price: '$500 - $1,000',
    difficulty: 'Easy',
    description:
      'Wind along the Atlantic and Mediterranean coasts, pausing for surf, seafood, and the famous blue streets of the Rif.',
    href: '/itineraries',
  },
];

const interestCategories = [
  {
    title: 'Desert Adventures',
    href: '/desert',
    image:
      'https://images.unsplash.com/photo-1509023464722-18d996393ca8?q=80&w=600',
    icon: Sun,
  },
  {
    title: 'Surf & Beach',
    href: '/beaches',
    image:
      'https://images.unsplash.com/photo-1502680390548-bdbac40a1e4a?q=80&w=600',
    icon: Waves,
  },
  {
    title: 'History & Heritage',
    href: '/history',
    image:
      'https://images.unsplash.com/photo-1545071568-3e1e3b4aab64?q=80&w=600',
    icon: Landmark,
  },
  {
    title: 'Food & Flavors',
    href: '/food',
    image:
      'https://images.unsplash.com/photo-1511690743698-d9d18f7e20f1?q=80&w=600',
    icon: ChefHat,
  },
  {
    title: 'Photography',
    href: '/photography',
    image:
      'https://images.unsplash.com/photo-1553244885-7e75700a0688?q=80&w=600',
    icon: Camera,
  },
  {
    title: 'Wellness & Hammam',
    href: '/hammam',
    image:
      'https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=600',
    icon: Sparkles,
  },
  {
    title: 'Nightlife & Music',
    href: '/music',
    image:
      'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=600',
    icon: Music,
  },
  {
    title: 'Festivals & Events',
    href: '/events',
    image:
      'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=600',
    icon: PartyPopper,
  },
];

const seasonalHighlights = [
  {
    icon: CloudSun,
    title: 'Weather',
    description:
      'Perfect hiking weather in the Atlas Mountains, with clear skies and temperatures of 18-22 C.',
    href: '/best-time',
  },
  {
    icon: Calendar,
    title: 'Almond Blossom Festival',
    description:
      'The annual Almond Blossom Festival in Tafraout transforms the Anti-Atlas into a sea of pink and white.',
    href: '/events',
  },
  {
    icon: Lightbulb,
    title: 'Shoulder Season Savings',
    description:
      'March is shoulder season -- save up to 30% on riad bookings and avoid the peak-summer crowds.',
    href: '/best-time',
  },
  {
    icon: TrendingUp,
    title: 'Trending Now',
    description:
      'Chefchaouen is the most searched Moroccan destination this month, with its iconic blue-washed streets.',
    href: '/cities/chefchaouen',
  },
];

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1548820488-e85faf1df02c?q=80&w=800',
    alt: 'Golden Sahara dunes at sunrise near Merzouga',
    size: 'large' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1553244885-7e75700a0688?q=80&w=600',
    alt: 'Blue-washed streets of Chefchaouen',
    size: 'small' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1579283142820-e1f0bdf21de0?q=80&w=600',
    alt: 'Intricate tilework inside the Fes Medina',
    size: 'small' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=800',
    alt: 'Sunset over the rooftops of Marrakech',
    size: 'large' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1560095633-6858b0185572?q=80&w=600',
    alt: 'Essaouira fishing port at golden hour',
    size: 'small' as const,
  },
  {
    src: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=600',
    alt: 'Camel caravan crossing the desert at dusk',
    size: 'small' as const,
  },
];

const quickTools = [
  {
    icon: Route,
    title: 'Trip Planner',
    description: 'Build a day-by-day itinerary with maps and bookings.',
    href: '/tools/planner',
  },
  {
    icon: DollarSign,
    title: 'Budget Calculator',
    description: 'Estimate daily costs for any travel style.',
    href: '/tools/budget',
  },
  {
    icon: RefreshCw,
    title: 'Currency Converter',
    description: 'Real-time MAD exchange rates for 50+ currencies.',
    href: '/tools/currency',
  },
  {
    icon: Luggage,
    title: 'Packing List',
    description: 'Season-aware checklists so you never forget a thing.',
    href: '/tools/packing',
  },
];

const difficultyColors: Record<string, string> = {
  Easy: 'bg-[#f0fdf4] text-[#15803d] border-[#bbf7d0]',
  Moderate: 'bg-[var(--color-accent-50)] text-[var(--color-accent-700)] border-[var(--color-accent-200)]',
  Challenging: 'bg-[#fef2f2] text-[#b91c1c] border-[#fecaca]',
};

/* =================================================================
   HELPER: Star Rating
   ================================================================= */

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${
            i < Math.floor(rating)
              ? 'fill-[var(--color-accent)] text-[var(--color-accent)]'
              : 'text-[var(--color-sand-300)]'
          }`}
        />
      ))}
      <span className="ml-1 text-sm font-medium text-[var(--text-secondary)]">
        {rating}
      </span>
    </div>
  );
}

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
        <span className="inline-block mb-3 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)]">
          {label}
        </span>
      )}
      <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
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
      <main>
        {/* ───────────────────────────────────────────────
            1. HERO SECTION
        ─────────────────────────────────────────────── */}
        <HeroSection />

        {/* ───────────────────────────────────────────────
            FEATURED IN - Press Mention Bar
        ─────────────────────────────────────────────── */}
        <section
          className="py-6 md:py-8 border-b border-[var(--border-light)]"
          aria-label="Featured in publications"
          style={{ backgroundColor: '#FAF8F5' }}
        >
          <div className="container-morocco">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#A0522D' }}>
                <Newspaper className="w-4 h-4" />
                <span>As Seen In</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
                {pressMentions.map((publication) => (
                  <span
                    key={publication}
                    className="font-[family-name:var(--font-display)] text-sm md:text-base font-semibold tracking-wide opacity-50 hover:opacity-80 transition-opacity duration-300"
                    style={{ color: '#1A1814' }}
                  >
                    {publication}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            2. FEATURED DESTINATIONS - Bento Grid
        ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" aria-labelledby="destinations-heading">
          <div className="container-morocco">
            <SectionHeading
              label="Destinations"
              title="Where Will Morocco Take You?"
              description="From ancient medinas draped in ochre to blue mountain villages and golden Saharan dunes, every corner tells a different story."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[320px]">
              {destinations.map((dest) => (
                <Link
                  key={dest.slug}
                  href={`/cities/${dest.slug}`}
                  className={`group relative overflow-hidden rounded-2xl ${
                    dest.size === 'large'
                      ? 'md:col-span-2 md:row-span-2 md:!h-auto'
                      : ''
                  }`}
                  style={
                    dest.size === 'large'
                      ? { minHeight: '320px' }
                      : undefined
                  }
                >
                  <img
                    src={dest.image}
                    alt={`${dest.name}, Morocco`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-colors duration-500 group-hover:from-black/80" />
                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                    <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-accent-300)] mb-2">
                      Explore
                    </span>
                    <h3
                      className={`font-[family-name:var(--font-display)] font-bold text-white leading-tight ${
                        dest.size === 'large'
                          ? 'text-3xl md:text-4xl'
                          : 'text-2xl'
                      }`}
                    >
                      {dest.name}
                    </h3>
                    <p className="mt-1 text-sm text-white/80 max-w-xs">
                      {dest.tagline}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white/90 group-hover:text-[var(--color-accent-300)] transition-colors">
                      Discover
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            3. WHY MOROCCO - Editorial Section
        ─────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28 section-warm moroccan-pattern"
          aria-labelledby="why-morocco-heading"
        >
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto text-center mb-14 md:mb-20">
              <span className="inline-block mb-4 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--color-accent)]">
                Why Morocco
              </span>
              <h2
                id="why-morocco-heading"
                className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08]"
              >
                A Land of Endless Stories
              </h2>
              <p className="mt-6 text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl mx-auto">
                Where the Atlas Mountains meet the Sahara and ancient medinas
                open onto the Atlantic, Morocco weaves together a thousand years
                of Berber, Arab, and Andalusian heritage into an experience
                unlike anywhere else on earth. Every sunset paints a different
                palette, every meal tells a generational tale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyMoroccoFeatures.map((feature) => {
                const Icon = feature.icon;
                return (
                  <Link
                    key={feature.title}
                    href={feature.href}
                    className="card-moroccan group p-8 text-center hover:border-[var(--color-primary-200)]"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-5 transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {feature.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            4. CURATED EXPERIENCES
        ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" aria-labelledby="experiences-heading">
          <div className="container-morocco">
            <SectionHeading
              label="Experiences"
              title="Curated by Locals"
              description="Handpicked activities and tours designed by Moroccans who know every hidden gem, secret trail, and family recipe."
            />

            {/* Horizontal scroll on mobile, 3-col grid on desktop */}
            <div className="flex gap-6 overflow-x-auto pb-4 snap-x-mandatory scrollbar-hide lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
              {experiences.map((exp) => {
                const IconComp = experienceIcons[exp.title] || Compass;
                return (
                  <Link
                    key={exp.title}
                    href={exp.href}
                    className="card-moroccan group flex-shrink-0 w-[300px] sm:w-[320px] lg:w-auto snap-start overflow-hidden"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      {/* Icon badge */}
                      <div className="absolute top-4 left-4 flex items-center justify-center w-10 h-10 rounded-full glass-dark text-white/90">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>
                    {/* Details */}
                    <div className="p-5">
                      <h3 className="font-heading text-lg font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                        {exp.title}
                      </h3>
                      <StarRating rating={exp.rating} />
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[var(--border-light)]">
                        <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                          <Clock className="w-4 h-4" />
                          {exp.duration}
                        </div>
                        <span className="text-sm font-semibold text-[var(--color-primary)]">
                          {exp.price}
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            5. MAP EXPLORER
        ─────────────────────────────────────────────── */}
        <MapExplorer />

        {/* ───────────────────────────────────────────────
            6. TRAVEL STYLES
        ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" aria-labelledby="travel-styles-heading">
          <div className="container-morocco">
            <SectionHeading
              label="Your Journey"
              title="Find Your Morocco"
              description="However you like to travel, Morocco has something extraordinary waiting for you."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {travelStyles.map((style) => {
                const Icon = style.icon;
                return (
                  <Link
                    key={style.title}
                    href={style.href}
                    className="card-moroccan group flex items-start gap-5 p-6"
                  >
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                        {style.title}
                      </h3>
                      <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                        {style.description}
                      </p>
                    </div>
                    <ArrowRight className="flex-shrink-0 w-5 h-5 text-[var(--color-sand-400)] transition-all duration-300 group-hover:text-[var(--color-primary)] group-hover:translate-x-1" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            7. TRUSTED BY TRAVELERS - Social Proof Section
        ─────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="social-proof-heading"
          style={{ backgroundColor: '#FAF8F5' }}
        >
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-72 h-72 rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, #C4960C 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-[0.03] pointer-events-none" style={{ background: 'radial-gradient(circle, #A0522D 0%, transparent 70%)' }} />

          <div className="container-morocco relative z-10">
            {/* Section Heading with luxury decorative elements */}
            <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-12 md:w-16" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
                <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#C4960C' }}>
                  <ShieldCheck className="w-4 h-4" />
                  Trusted by Travelers
                </span>
                <span className="h-px w-12 md:w-16" style={{ backgroundColor: '#C4960C', opacity: 0.4 }} />
              </div>
              <h2
                id="social-proof-heading"
                className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]"
                style={{ color: '#1A1814' }}
              >
                What Travelers Say
              </h2>
              <p className="mt-4 text-lg md:text-xl leading-relaxed" style={{ color: '#1A1814', opacity: 0.6 }}>
                Thousands of adventurers have discovered the magic of Morocco through City Guide. Here are their stories.
              </p>
              {/* Decorative divider */}
              <div className="flex items-center justify-center gap-2 mt-6">
                <span className="h-px w-8" style={{ backgroundColor: '#A0522D', opacity: 0.3 }} />
                <Star className="w-4 h-4" style={{ color: '#C4960C' }} />
                <span className="h-px w-8" style={{ backgroundColor: '#A0522D', opacity: 0.3 }} />
              </div>
            </div>

            {/* Stats Bar */}
            <div
              className="rounded-2xl border mb-12 md:mb-16 overflow-hidden"
              style={{ backgroundColor: '#1A1814', borderColor: 'rgba(196,150,12,0.2)' }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4">
                {socialProofStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center py-6 md:py-8 px-4 border-r border-b md:border-b-0 last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
                    style={{ borderColor: 'rgba(255,255,255,0.08)' }}
                  >
                    <span className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold tracking-tight" style={{ color: '#C4960C' }}>
                      {stat.value}
                    </span>
                    <span className="mt-1 text-xs font-medium uppercase tracking-[0.15em]" style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial Cards Grid - 6 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((t) => (
                <div
                  key={t.name}
                  className="group relative rounded-2xl border p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderColor: 'rgba(160,82,45,0.1)',
                  }}
                >
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px"
                    style={{ background: 'linear-gradient(90deg, transparent, #C4960C, transparent)', opacity: 0.3 }}
                  />

                  <div>
                    {/* Trip type badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                        style={{ backgroundColor: 'rgba(196,150,12,0.08)', color: '#A0522D' }}
                      >
                        <Compass className="w-3 h-3" />
                        {t.tripType}
                      </span>
                      <Quote className="w-6 h-6 opacity-20" style={{ color: '#C4960C' }} />
                    </div>

                    {/* Star rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-current"
                          style={{ color: '#C4960C' }}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p
                      className="text-[15px] leading-relaxed italic"
                      style={{ color: '#1A1814', opacity: 0.75 }}
                    >
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>

                  {/* Traveler info */}
                  <div className="mt-6 pt-5 border-t flex items-center gap-3" style={{ borderColor: 'rgba(160,82,45,0.1)' }}>
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                      style={{ backgroundColor: 'rgba(196,150,12,0.1)', color: '#A0522D' }}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-heading text-sm font-bold" style={{ color: '#1A1814' }}>
                        {t.name}
                      </p>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3" style={{ color: '#A0522D', opacity: 0.5 }} />
                        <p className="text-xs" style={{ color: '#1A1814', opacity: 0.5 }}>
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badges Section */}
            <div className="mt-16 md:mt-20">
              <div className="flex items-center justify-center gap-3 mb-8">
                <span className="h-px w-10" style={{ backgroundColor: '#A0522D', opacity: 0.2 }} />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: '#A0522D', opacity: 0.6 }}>
                  Recognized By
                </span>
                <span className="h-px w-10" style={{ backgroundColor: '#A0522D', opacity: 0.2 }} />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
                {trustBadges.map((badge) => (
                  <div
                    key={badge.name}
                    className="flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 hover:shadow-md"
                    style={{
                      backgroundColor: '#FFFFFF',
                      borderColor: 'rgba(160,82,45,0.1)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(196,150,12,0.08)' }}
                    >
                      {badge.name === 'TripAdvisor' && <Award className="w-5 h-5" style={{ color: '#C4960C' }} />}
                      {badge.name === 'Google Reviews' && <Star className="w-5 h-5" style={{ color: '#C4960C' }} />}
                      {badge.name === 'Lonely Planet' && <Globe className="w-5 h-5" style={{ color: '#C4960C' }} />}
                      {badge.name === 'Trustpilot' && <BadgeCheck className="w-5 h-5" style={{ color: '#C4960C' }} />}
                      {badge.name.startsWith('Frommer') && <Trophy className="w-5 h-5" style={{ color: '#C4960C' }} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold leading-tight" style={{ color: '#1A1814' }}>
                        {badge.name}
                      </p>
                      <p className="text-[11px] leading-tight" style={{ color: '#1A1814', opacity: 0.45 }}>
                        {badge.descriptor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            8. FEATURED ITINERARIES
        ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" aria-labelledby="itineraries-heading">
          <div className="container-morocco">
            <SectionHeading
              label="Itineraries"
              title="Plan Your Perfect Trip"
              description="Curated multi-day routes designed by local experts, complete with timing, costs, and insider stops along the way."
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {itineraries.map((itin) => (
                <Link
                  key={itin.title}
                  href={itin.href}
                  className="card-moroccan group overflow-hidden"
                >
                  {/* Top accent bar */}
                  <div className="h-1.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-accent)] to-[var(--color-secondary)]" />

                  <div className="p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--color-primary-50)] text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                        <Route className="w-5 h-5" />
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          difficultyColors[itin.difficulty] || 'bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        {itin.difficulty}
                      </span>
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {itin.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-5">
                      {itin.description}
                    </p>

                    {/* Route line */}
                    <div className="relative flex items-center gap-0 mb-6">
                      {itin.stops.map((stop, idx) => (
                        <div key={stop} className="flex items-center flex-1 min-w-0 last:flex-none">
                          <div className="flex flex-col items-center">
                            <div className="w-3 h-3 rounded-full bg-[var(--color-primary)] border-2 border-[var(--color-primary-100)] flex-shrink-0" />
                            <span className="mt-1.5 text-[10px] font-medium text-[var(--text-muted)] whitespace-nowrap">
                              {stop}
                            </span>
                          </div>
                          {idx < itin.stops.length - 1 && (
                            <div className="flex-1 h-0.5 bg-[var(--color-primary-200)] mx-1 mt-[-14px]" />
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Meta row */}
                    <div className="flex items-center justify-between pt-5 border-t border-[var(--border-light)]">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                          <Calendar className="w-4 h-4" />
                          {itin.duration}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
                          <MapPin className="w-4 h-4" />
                          {itin.stops.length} stops
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-[var(--color-primary)]">
                        {itin.price}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/itineraries"
                className="btn-secondary inline-flex items-center gap-2"
              >
                View All Itineraries
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            9. EXPLORE BY INTEREST
        ─────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28 section-warm moroccan-pattern"
          aria-labelledby="interests-heading"
        >
          <div className="container-morocco">
            <SectionHeading
              label="Explore"
              title="What Draws You to Morocco?"
              description="From adrenaline-fueled desert rallies to meditative hammam rituals, find the experience that speaks to you."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {interestCategories.map((cat) => {
                const Icon = cat.icon;
                return (
                  <Link
                    key={cat.title}
                    href={cat.href}
                    className="group relative aspect-square overflow-hidden rounded-2xl"
                  >
                    <img
                      src={cat.image}
                      alt={cat.title}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/20" />
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm mb-3 transition-transform duration-500 group-hover:scale-110">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-[family-name:var(--font-display)] text-base md:text-lg font-bold text-white leading-tight">
                        {cat.title}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            10. THIS MONTH IN MOROCCO
        ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" aria-labelledby="seasonal-heading">
          <div className="container-morocco">
            <SectionHeading
              label="Right Now"
              title={`What's Happening This ${new Date().toLocaleString('en-US', { month: 'long' })}`}
              description="Timely intel so you can make the most of your visit, whether you are booking today or arriving next week."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {seasonalHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="card-moroccan group p-6 flex flex-col"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[var(--color-accent-50)] text-[var(--color-accent)] mb-4 transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed flex-1">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Learn more
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            11. PHOTO GALLERY MOSAIC
        ─────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28 section-warm"
          aria-labelledby="gallery-heading"
        >
          <div className="container-morocco">
            <SectionHeading
              label="Gallery"
              title="Morocco Through the Lens"
              description="Six frames that capture the light, texture, and soul of a country that was made to be photographed."
            />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl ${
                    img.size === 'large'
                      ? 'col-span-2 row-span-2'
                      : ''
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm text-white font-medium drop-shadow-lg">
                      {img.alt}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/gallery"
                className="btn-ghost inline-flex items-center gap-2"
              >
                <ImageIcon className="w-4 h-4" />
                View Full Gallery
              </Link>
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            12. QUICK TOOLS BAR
        ─────────────────────────────────────────────── */}
        <section className="py-20 md:py-28" aria-labelledby="tools-heading">
          <div className="container-morocco">
            <SectionHeading
              label="Tools"
              title="Plan Smarter"
              description="Free planning tools built for Morocco travelers. No sign-up required."
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.title}
                    href={tool.href}
                    className="card-moroccan group p-6 text-center relative overflow-hidden"
                  >
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[var(--color-primary-50)] text-[var(--color-primary)] mb-4 transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-heading text-base font-bold text-[var(--text-primary)] mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-4">
                      {tool.description}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Open Tool
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ───────────────────────────────────────────────
            13. NEWSLETTER CTA
        ─────────────────────────────────────────────── */}
        <section
          className="py-20 md:py-28 relative overflow-hidden"
          aria-labelledby="newsletter-heading"
          style={{
            background:
              'linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 50%, var(--color-primary-light) 100%)',
          }}
        >
          {/* Decorative pattern overlay */}
          <div className="absolute inset-0 moroccan-pattern-dark opacity-30 pointer-events-none" />

          <div className="container-morocco relative z-10">
            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2
                id="newsletter-heading"
                className="font-[family-name:var(--font-display)] text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]"
              >
                Your Moroccan Journey Starts Here
              </h2>
              <p className="mt-4 text-lg text-white/80 leading-relaxed">
                Join 30,000+ travelers receiving weekly insider guides, hidden
                gem recommendations, and exclusive deals from across the
                Kingdom.
              </p>

              <form
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                action="#"
                method="POST"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-5 py-3.5 rounded-xl bg-white/15 border border-white/20 text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent transition-all backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 rounded-xl bg-white text-[var(--color-primary-dark)] font-semibold text-sm hover:bg-white/90 transition-colors flex-shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 text-xs text-white/50">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

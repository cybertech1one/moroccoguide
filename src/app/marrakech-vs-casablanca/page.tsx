import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Info,
  ArrowRight,
  Sparkles,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  Crown,
  Mountain,
  Utensils,
  ShoppingBag,
  Plane,
  Globe,
  Camera,
  Compass,
  Scale,
  CircleDot,
  Landmark,
  Coffee,
  Music,
  Palette,
  Bus,
  Train,
  Wine,
  Briefcase,
  Sun,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Marrakech vs Casablanca 2026 | Which City Should You Visit?',
  description:
    'Marrakech vs Casablanca: the ultimate comparison guide. Culture, nightlife, food, shopping, riads, day trips, and costs. Honest head-to-head breakdown with prices in MAD for 2026.',
  keywords: [
    'Marrakech vs Casablanca',
    'Casablanca or Marrakech',
    'should I visit Marrakech or Casablanca',
    'Marrakech vs Casablanca comparison',
    'Marrakech Casablanca which is better',
    'Marrakech vs Casablanca nightlife',
    'Marrakech vs Casablanca food',
    'Marrakech vs Casablanca cost',
    'Marrakech vs Casablanca shopping',
    'Casablanca vs Marrakech 2026',
    'Morocco Marrakech Casablanca itinerary',
    'Marrakech vs Casablanca for first time visitor',
    'Casablanca or Marrakech for families',
    'Marrakech vs Casablanca budget',
    'best city to visit in Morocco',
    'Marrakech or Casablanca which to visit',
  ],
  openGraph: {
    title: 'Marrakech vs Casablanca 2026 | Which City Should You Visit?',
    description:
      'Complete head-to-head comparison of Morocco\'s two biggest cities. Culture, nightlife, food, shopping, costs, and which suits your travel style.',
    url: `${BASE_URL}/marrakech-vs-casablanca`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech with the Koutoubia Mosque and Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrakech vs Casablanca 2026 | Two Cities, Two Worlds',
    description:
      'Head-to-head comparison: culture, nightlife, food, shopping, day trips, and costs. The honest guide to choosing between Morocco\'s two biggest cities.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/marrakech-vs-casablanca` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/marrakech-vs-casablanca`,
  name: 'Marrakech vs Casablanca 2026 | Which City Should You Visit?',
  description:
    'Complete head-to-head comparison of Marrakech and Casablanca covering culture, atmosphere, nightlife, food, shopping, day trips, transport, and costs for 2026 travelers.',
  url: `${BASE_URL}/marrakech-vs-casablanca`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/marrakech-vs-casablanca`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Marrakech', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
    { '@type': 'City', name: 'Casablanca', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Marrakech vs Casablanca', item: `${BASE_URL}/marrakech-vs-casablanca` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Should I visit Marrakech or Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'Most tourists should visit Marrakech. It has the iconic medina, Jemaa el-Fnaa, riads, and traditional Moroccan atmosphere. Casablanca is better for business travelers, architecture lovers, and nightlife seekers. Many visitors fly into Casablanca and spend a day there before heading to Marrakech.' } },
    { '@type': 'Question', name: 'Is Casablanca worth visiting or should I skip it?', acceptedAnswer: { '@type': 'Answer', text: 'Casablanca is worth 1-2 days. Hassan II Mosque alone justifies a stop. The Art Deco architecture, modern dining scene, and Atlantic coastline offer a side of Morocco you will not see in Marrakech. But for a short trip, Marrakech delivers more classic Morocco experiences.' } },
    { '@type': 'Question', name: 'Which city has better nightlife: Marrakech or Casablanca?', acceptedAnswer: { '@type': 'Answer', text: 'Casablanca wins for nightlife. As Morocco\'s business capital, it has a more liberal atmosphere with rooftop bars, nightclubs, live music venues, and a thriving restaurant scene. Marrakech has rooftop bars and hotel lounges but Casablanca\'s nightlife runs later and has more variety.' } },
    { '@type': 'Question', name: 'Is Marrakech or Casablanca cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech is slightly cheaper for tourists. Budget riads from 150 MAD vs hotels from 300 MAD in Casablanca. Street food from 20 MAD in both cities. Casablanca\'s modern restaurants and nightlife cost more. However, Casablanca has no medina markup on shopping.' } },
    { '@type': 'Question', name: 'How far is Casablanca from Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Approximately 240 km. Train: 3 hours direct, from 100 MAD. Bus: 3.5-4 hours, from 80 MAD. Drive: 2.5-3 hours via A7 motorway. The train is the most comfortable option with frequent daily departures from both cities.' } },
    { '@type': 'Question', name: 'Can I do Marrakech and Casablanca in one trip?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. The 3-hour train makes it easy. Spend 3-4 days in Marrakech and 1-2 days in Casablanca, or vice versa. Many travelers fly into Casablanca\'s Mohammed V Airport, spend a night, then train to Marrakech for the main holiday.' } },
    { '@type': 'Question', name: 'Which city is better for families?', acceptedAnswer: { '@type': 'Answer', text: 'Marrakech. Jemaa el-Fnaa is mesmerizing for children, Majorelle Garden is stroller-friendly, and camel rides and caleche rides appeal to all ages. Casablanca\'s Morocco Mall and Corniche beach are family-friendly but less culturally immersive.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: AT-A-GLANCE COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonTable = [
  { category: 'Population', marrakech: '1 million', casablanca: '3.7 million', winner: 'casablanca', icon: Users },
  { category: 'Overall Vibe', marrakech: 'Traditional, exotic, tourist-focused', casablanca: 'Modern, cosmopolitan, business hub', winner: 'tie', icon: Heart },
  { category: 'Airport', marrakech: 'Menara (RAK) - Major international hub', casablanca: 'Mohammed V (CMN) - Morocco\'s busiest', winner: 'tie', icon: Plane },
  { category: 'Medina', marrakech: 'UNESCO-listed, iconic Jemaa el-Fnaa', casablanca: 'Small, less touristic Old Medina', winner: 'marrakech', icon: MapPin },
  { category: 'Tourism Focus', marrakech: 'Cultural tourism, main destination', casablanca: 'Business travel, transit hub', winner: 'marrakech', icon: Camera },
  { category: 'Best For', marrakech: 'First-timers, culture, traditional Morocco', casablanca: 'Business, nightlife, modern Morocco', winner: 'tie', icon: Star },
  { category: 'Nightlife', marrakech: 'Rooftop bars, hotel lounges', casablanca: 'Clubs, bars, live music, late nights', winner: 'casablanca', icon: Music },
  { category: 'Average Temp (Spring)', marrakech: '16-28 degrees C', casablanca: '14-22 degrees C (coastal breeze)', winner: 'tie', icon: Thermometer },
  { category: 'Shopping', marrakech: 'Souks, carpets, artisan crafts', casablanca: 'Malls, boutiques, designer brands', winner: 'tie', icon: ShoppingBag },
  { category: 'Food Scene', marrakech: 'Traditional tagines, street food, riad dining', casablanca: 'Seafood, international, fine dining', winner: 'tie', icon: Utensils },
  { category: 'Budget-Friendliness', marrakech: 'Budget riads and cheap street food', casablanca: 'Hotel-focused, modern dining prices', winner: 'marrakech', icon: DollarSign },
  { category: 'Day Trips', marrakech: 'Atlas Mountains, Essaouira, Ouzoud Falls', casablanca: 'Rabat, El Jadida, Mohammedia', winner: 'marrakech', icon: Compass },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  {
    tier: 'Budget',
    icon: Compass,
    marrakech: {
      daily: 'From 350 MAD',
      accommodation: 'From 150 MAD (hostel or budget riad)',
      food: 'From 80 MAD (Jemaa el-Fnaa stalls, cafes)',
      transport: 'From 20 MAD (walking + petit taxis)',
      activities: 'From 100 MAD (souks, palaces, gardens)',
    },
    casablanca: {
      daily: 'From 450 MAD',
      accommodation: 'From 250 MAD (budget hotel)',
      food: 'From 100 MAD (cafes, casual restaurants)',
      transport: 'From 30 MAD (tram + petit taxis)',
      activities: 'From 70 MAD (Hassan II Mosque, Corniche walk)',
    },
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    marrakech: {
      daily: 'From 800 MAD',
      accommodation: 'From 500 MAD (boutique riad)',
      food: 'From 150 MAD (restaurants, rooftop dining)',
      transport: 'From 50 MAD (taxis, caleche rides)',
      activities: 'From 100 MAD (hammams, guided tours)',
    },
    casablanca: {
      daily: 'From 1,000 MAD',
      accommodation: 'From 600 MAD (4-star hotel)',
      food: 'From 200 MAD (restaurants, seafood, bars)',
      transport: 'From 50 MAD (tram, taxis)',
      activities: 'From 150 MAD (mosque, museums, shopping)',
    },
  },
  {
    tier: 'Luxury',
    icon: Crown,
    marrakech: {
      daily: 'From 3,500 MAD',
      accommodation: 'From 2,500 MAD (luxury riad or La Mamounia)',
      food: 'From 500 MAD (fine dining, celebrity restaurants)',
      transport: 'From 200 MAD (private driver)',
      activities: 'From 300 MAD (hot air balloons, private tours)',
    },
    casablanca: {
      daily: 'From 4,000 MAD',
      accommodation: 'From 2,800 MAD (5-star, Four Seasons)',
      food: 'From 600 MAD (fine dining, wine, cocktails)',
      transport: 'From 250 MAD (private driver)',
      activities: 'From 350 MAD (private tours, spa)',
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT EACH CITY DOES BETTER
   ═══════════════════════════════════════════════════════════════ */

const marrakechWins = [
  {
    title: 'Jemaa el-Fnaa & the Medina',
    icon: Star,
    description:
      'Nothing else like it on Earth. This UNESCO square transforms nightly into a carnival of food stalls, musicians, storytellers, and acrobats. The medina\'s 600+ souks and alleyways are the essence of traditional Morocco.',
  },
  {
    title: 'Riad Experience',
    icon: Building,
    description:
      'Thousands of riads from budget to ultra-luxury. Sleeping in a converted palace with a courtyard, fountain, and rooftop terrace is a quintessential Morocco experience. Casablanca has almost no riad options.',
  },
  {
    title: 'Day Trip Variety',
    icon: Mountain,
    description:
      'Atlas Mountains in 45 minutes, Essaouira coast in 2.5 hours, Ouzoud Falls in 2 hours, Ourika Valley in 45 minutes. More diverse and dramatic excursion options than from Casablanca. Atlas trips from 350 MAD.',
  },
  {
    title: 'Cultural Immersion',
    icon: Palette,
    description:
      'Bahia Palace, Ben Youssef Madrasa, Saadian Tombs, Majorelle Garden. More historical sights per square kilometer than any other Moroccan city. Cooking classes, hammams, and artisan workshops everywhere.',
  },
  {
    title: 'Budget-Friendliness',
    icon: DollarSign,
    description:
      'Budget riads from 150 MAD, street food from 20 MAD, guided medina tours from 200 MAD. The riad-and-street-food combo makes Marrakech more affordable despite being Morocco\'s top tourist destination.',
  },
];

const casablancaWins = [
  {
    title: 'Nightlife & Entertainment',
    icon: Music,
    description:
      'Morocco\'s undisputed nightlife capital. Rooftop bars, nightclubs open until 4 AM, live music venues, cocktail lounges, and a liberal social scene. Marrakech has nightlife but Casablanca runs later and louder.',
  },
  {
    title: 'Hassan II Mosque',
    icon: Landmark,
    description:
      'Africa\'s largest mosque and the world\'s tallest minaret (210m). The only mosque in Morocco open to non-Muslims. Its glass floor over the Atlantic Ocean is breathtaking. One of the world\'s great buildings. Entry from 130 MAD.',
  },
  {
    title: 'Modern Dining Scene',
    icon: Utensils,
    description:
      'International cuisine, sushi bars, French bistros, rooftop restaurants, fresh Atlantic seafood, and wine lists. Casablanca eats like a European capital while Marrakech stays traditional. Seafood meals from 80 MAD.',
  },
  {
    title: 'Art Deco Architecture',
    icon: Building,
    description:
      'The largest collection of Art Deco buildings in Africa. The Habous Quarter blends French and Moorish styles. Casablanca tells Morocco\'s 20th-century story.',
  },
  {
    title: 'Atlantic Coastline & Business Hub',
    icon: Sun,
    description:
      'The Corniche beachfront stretches for kilometers with beach clubs and oceanfront dining. Plus Morocco\'s economic engine: Mohammed V Airport has the most routes, and business infrastructure is unmatched.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const marrakechShoppingItems = [
  { item: 'Berber carpets and kilims', price: 'From 500 MAD' },
  { item: 'Argan oil products', price: 'From 80 MAD' },
  { item: 'Metal and glass lanterns', price: 'From 100 MAD' },
  { item: 'Spice blends and saffron', price: 'From 30 MAD' },
  { item: 'Leather bags and babouche slippers', price: 'From 60 MAD' },
];

const casablancaShoppingItems = [
  { item: 'Designer fashion (Morocco Mall)', price: 'From 300 MAD' },
  { item: 'Moroccan cosmetics and perfumes', price: 'From 100 MAD' },
  { item: 'Habous Quarter leather goods', price: 'From 80 MAD' },
  { item: 'Contemporary Moroccan art', price: 'From 500 MAD' },
  { item: 'Olive oil and gourmet foods', price: 'From 50 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    from: 'Marrakech',
    trips: [
      { destination: 'Atlas Mountains', time: '1.5 hrs car', cost: 'From 350 MAD', highlights: 'Berber villages, Toubkal base, valley hikes, waterfalls' },
      { destination: 'Essaouira', time: '2.5 hrs car', cost: 'From 80 MAD', highlights: 'Coastal fortified town, seafood, Atlantic winds, surfing' },
      { destination: 'Ouzoud Falls', time: '2.5 hrs car', cost: 'From 300 MAD', highlights: '110m waterfalls, Barbary macaques, boat rides' },
      { destination: 'Ourika Valley', time: '45 min car', cost: 'From 200 MAD', highlights: 'Atlas foothills, Berber markets, Setti Fatma waterfalls' },
    ],
  },
  {
    from: 'Casablanca',
    trips: [
      { destination: 'Rabat', time: '1 hr train', cost: 'From 40 MAD', highlights: 'Capital city, Kasbah of the Udayas, Hassan Tower, Chellah' },
      { destination: 'El Jadida', time: '1.5 hrs car', cost: 'From 60 MAD', highlights: 'Portuguese cistern, UNESCO old city, beach resort' },
      { destination: 'Mohammedia', time: '30 min train', cost: 'From 15 MAD', highlights: 'Beach town, golf courses, seafood restaurants' },
      { destination: 'Azemmour', time: '1.5 hrs car', cost: 'From 50 MAD', highlights: 'Hidden gem, Portuguese walls, street art, Oum er-Rbia river' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVELER TYPE RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const travelerTypes = [
  { type: 'First-Timer', recommendation: 'Marrakech', icon: Globe, reason: 'The quintessential Morocco experience. Medina, souks, Jemaa el-Fnaa, riads, and sensory overload. This is what most people picture when they think of Morocco.' },
  { type: 'Business Traveler', recommendation: 'Casablanca', icon: Briefcase, reason: 'Morocco\'s economic hub. Modern hotels, conference facilities, co-working spaces, and the best connectivity for onward flights.' },
  { type: 'Nightlife Seeker', recommendation: 'Casablanca', icon: Music, reason: 'Clubs open until 4 AM, cocktail bars, live music venues, and a liberal social atmosphere. Morocco\'s best night out.' },
  { type: 'Foodie', recommendation: 'Both', icon: Utensils, reason: 'Marrakech for traditional tagines and street food. Casablanca for international cuisine, seafood, and fine dining. Different culinary worlds.' },
  { type: 'Culture Lover', recommendation: 'Marrakech', icon: Landmark, reason: 'Bahia Palace, Ben Youssef Madrasa, Saadian Tombs, 600+ souks, Jemaa el-Fnaa UNESCO square, and centuries of living tradition.' },
  { type: 'Families', recommendation: 'Marrakech', icon: Users, reason: 'Jemaa el-Fnaa mesmerizes children, Majorelle Garden is peaceful, camel rides and caleche rides delight all ages. More magical for kids.' },
  { type: 'Beach Lover', recommendation: 'Casablanca', icon: Sun, reason: 'Atlantic Corniche, Ain Diab beach clubs, oceanfront dining. Marrakech is inland with no coast.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMBINED ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const combinedItinerary = [
  { day: 'Day 1', location: 'Arrive Casablanca', icon: Plane, highlights: 'Land at Mohammed V Airport, check into your hotel, explore the Corniche and Ain Diab beach area, seafood dinner with ocean views' },
  { day: 'Day 2', location: 'Casablanca Highlights', icon: Landmark, highlights: 'Morning tour of Hassan II Mosque, explore Art Deco downtown, lunch in Habous Quarter, afternoon at Morocco Mall, rooftop bar evening' },
  { day: 'Day 3', location: 'Train to Marrakech', icon: Train, highlights: 'Morning train to Marrakech (3 hours, from 100 MAD). Arrive and settle into your riad, first evening exploring Jemaa el-Fnaa' },
  { day: 'Days 4-5', location: 'Marrakech Medina', icon: MapPin, highlights: 'Bahia Palace, Ben Youssef Madrasa, Saadian Tombs, souk shopping, cooking class, traditional hammam, Majorelle Garden' },
  { day: 'Day 6', location: 'Atlas Mountains Day Trip', icon: Mountain, highlights: 'Drive to Imlil or Ourika Valley, hike through Berber villages, lunch with a local family, return to Marrakech by evening' },
  { day: 'Day 7', location: 'Final Day & Departure', icon: Plane, highlights: 'Morning souk shopping, final rooftop breakfast, depart from Marrakech Menara Airport or train back to Casablanca for flight' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Should I visit Marrakech or Casablanca?',
    answer:
      'Most tourists should prioritize Marrakech. It delivers the quintessential Morocco experience: medina, souks, Jemaa el-Fnaa, riads, and centuries of living tradition. Casablanca is better for business travelers, architecture lovers, and nightlife seekers. Many visitors fly into Casablanca and spend a day there before heading to Marrakech by train.',
  },
  {
    question: 'Is Casablanca worth visiting or should I skip it?',
    answer:
      'Casablanca is worth 1-2 days. The Hassan II Mosque alone justifies a stop as it is the only mosque in Morocco open to non-Muslims. The Art Deco architecture, modern dining scene, Atlantic coastline, and nightlife offer a side of Morocco you will not see in Marrakech. But for a short trip, Marrakech delivers more classic Morocco experiences.',
  },
  {
    question: 'Which city has better nightlife?',
    answer:
      'Casablanca wins decisively. As Morocco\'s business capital, it has a more liberal atmosphere with rooftop bars, nightclubs open until 4 AM, live music venues, cocktail lounges, and a diverse dining scene. Marrakech has rooftop bars and hotel lounges but Casablanca\'s nightlife runs later, louder, and with more variety.',
  },
  {
    question: 'Is Marrakech or Casablanca cheaper?',
    answer:
      'Marrakech is slightly cheaper for tourists thanks to the riad system and street food culture. Budget riads from 150 MAD versus Casablanca hotels from 300 MAD. Street food from 20 MAD in both cities. Casablanca\'s modern restaurants and nightlife cost more. However, Casablanca has no medina markup on shopping. Seasonal pricing can change during peak periods.',
  },
  {
    question: 'How do I travel between Marrakech and Casablanca?',
    answer:
      'Train: 3 hours direct, from 100 MAD with frequent daily departures. Bus (CTM/Supratours): 3.5-4 hours, from 80 MAD. Drive: 2.5-3 hours via the A7 motorway. The train is the most comfortable and popular option. Book at oncf.ma for best rates.',
  },
  {
    question: 'Can I visit both in one trip?',
    answer:
      'Absolutely. The 3-hour train makes combining them easy. Spend 3-4 days in Marrakech and 1-2 days in Casablanca. Many travelers fly into Casablanca\'s Mohammed V Airport, spend a night, then train to Marrakech for the main holiday. Return to Casablanca for departure or fly out from Marrakech Menara.',
  },
  {
    question: 'Which city is better for families?',
    answer:
      'Marrakech. Jemaa el-Fnaa is mesmerizing for children, Majorelle Garden is stroller-friendly, and camel rides and caleche rides appeal to all ages. Casablanca\'s Morocco Mall and Corniche beach are family-friendly but less culturally immersive. Marrakech creates the memories.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MarrakechVsCasablancaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Marrakech vs Casablanca</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            City Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Marrakech vs Casablanca:
            <br className="hidden md:block" /> Tradition Meets Modernity
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco&apos;s most-visited tourist city versus its biggest metropolis.
            Two completely different experiences of the same country. The honest
            comparison to help you decide which deserves your time in 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Two Cities, Two Faces of Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Marrakech is the Morocco of postcards: rose-pink walls, labyrinthine souks, and the intoxicating chaos of Jemaa el-Fnaa. Casablanca is the Morocco of ambition: Art Deco boulevards, the towering Hassan II Mosque, Atlantic surf, and nightlife that rivals any Mediterranean capital.
              </p>
              <p>
                One city looks back a thousand years. The other looks forward. This guide compares them across every dimension that matters so you can decide where to spend your time, or whether to visit both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── At-a-Glance Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            At-a-Glance Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How Marrakech and Casablanca compare across 14 key categories that matter most to travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices in MAD reflect 2026 mid-season rates. Seasonal pricing can change.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Marrakech</div>
                <div className="p-3 px-4">Casablanca</div>
                <div className="p-3 px-4 text-center">Edge</div>
              </div>
              {comparisonTable.map((row, i) => {
                const RowIcon = row.icon;
                return (
                  <div
                    key={row.category}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <RowIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 hidden md:block" />
                      {row.category}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'marrakech' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.marrakech}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'casablanca' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.casablanca}
                    </div>
                    <div className="p-3 px-4 text-center">
                      {row.winner === 'marrakech' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                          <CheckCircle className="w-3.5 h-3.5" /> Marrakech
                        </span>
                      )}
                      {row.winner === 'casablanca' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
                          <CircleDot className="w-3.5 h-3.5" /> Casablanca
                        </span>
                      )}
                      {row.winner === 'tie' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)]">
                          <Scale className="w-3.5 h-3.5" /> Tie
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Culture & Atmosphere ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; Atmosphere
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One city is Morocco&apos;s tourism heart. The other is its economic engine. The contrast is striking.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Marrakech: The Red City of Tradition
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Founded in 1070 AD by the Almoravids, Marrakech revolves around its medina and Jemaa el-Fnaa, the UNESCO masterpiece that transforms nightly into a carnival of food, music, and storytelling. The rose-pink walls, the Koutoubia Mosque, the scent of spices: this is the Morocco of the imagination.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Jemaa el-Fnaa (UNESCO)', 'Koutoubia Mosque', 'Bahia Palace', 'Saadian Tombs', 'Majorelle Garden', '600+ artisan souks'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Casablanca: Morocco&apos;s Modern Metropolis
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Morocco&apos;s largest city and economic powerhouse with 3.7 million people. French colonial architecture lines grand boulevards. The Hassan II Mosque is a modern marvel rivaling any ancient wonder. This is where young Moroccans build careers, where international cuisine thrives, and where nightlife runs until dawn.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Hassan II Mosque', 'Art Deco downtown', 'Corniche beachfront', 'Habous Quarter', 'Morocco Mall', 'CasaNearshore business park'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Things to Do Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Things to Do
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Marrakech has more tourist attractions. Casablanca has more urban experiences. Here is how they stack up.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Top Things in Marrakech', marker: CheckCircle, items: [
                'Jemaa el-Fnaa at sunset: food stalls, musicians, performers',
                'Bahia Palace and Ben Youssef Madrasa (from 70 MAD each)',
                'Majorelle Garden and YSL Museum (from 70 MAD)',
                'Souk shopping: carpets, spices, lanterns, leather',
                'Traditional hammam experience (from 100 MAD)',
                'Cooking class in a riad (from 350 MAD)',
                'Hot air balloon over the Haouz Plain (from 1,500 MAD)',
              ]},
              { title: 'Top Things in Casablanca', marker: CircleDot, items: [
                'Hassan II Mosque guided tour (from 130 MAD)',
                'Art Deco architecture walking tour in downtown',
                'Corniche and Ain Diab beach clubs (from 100 MAD)',
                'Habous Quarter shopping and pastry sampling',
                'Morocco Mall: Africa\'s largest shopping center',
                'Rick\'s Cafe (inspired by the film, from 150 MAD dinner)',
                'Villa des Arts contemporary exhibitions (from 20 MAD)',
              ]},
            ].map((side) => {
              const Marker = side.marker;
              return (
                <div key={side.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <Star className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{side.title}</h3>
                  </div>
                  <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                    {side.items.map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Marker className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── Food & Dining ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Traditional Moroccan soul food versus cosmopolitan international dining. Both are exceptional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Marrakech Dining', icon: Award,
                intro: 'Street food capital. Riad dining. Traditional tagines. The world\'s largest open-air restaurant at Jemaa el-Fnaa.',
                dishes: [
                  { dish: 'Tanjia', price: 'From 50 MAD', desc: 'Marrakech\'s signature slow-cooked meat pot' },
                  { dish: 'Jemaa el-Fnaa Stalls', price: 'From 30 MAD', desc: 'Grilled meats, snails, fresh juice' },
                  { dish: 'Tagine (restaurant)', price: 'From 50 MAD', desc: 'Chicken, lamb, or vegetable with bread' },
                  { dish: 'Mechoui', price: 'From 80 MAD', desc: 'Slow-roasted lamb, Mechoui Alley' },
                  { dish: 'Riad Dinner', price: 'From 200 MAD', desc: 'Multi-course Moroccan feast in a courtyard' },
                ],
              },
              {
                title: 'Casablanca Dining', icon: Coffee,
                intro: 'Atlantic seafood, French bistros, international cuisine, wine bars, and Morocco\'s best fine dining scene.',
                dishes: [
                  { dish: 'Fresh Seafood Platter', price: 'From 80 MAD', desc: 'Port-fresh fish, shrimp, calamari' },
                  { dish: 'French Bistro Lunch', price: 'From 100 MAD', desc: 'Steak frites, croque monsieur, wine' },
                  { dish: 'Sushi & Asian Fusion', price: 'From 120 MAD', desc: 'Japanese, Thai, and pan-Asian options' },
                  { dish: 'Rooftop Restaurant', price: 'From 150 MAD', desc: 'Atlantic views, cocktails, modern cuisine' },
                  { dish: 'Rick\'s Cafe Dinner', price: 'From 150 MAD', desc: 'Film-inspired Moroccan-international menu' },
                ],
              },
            ].map((cuisine) => {
              const CuisineIcon = cuisine.icon;
              return (
                <div key={cuisine.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CuisineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{cuisine.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{cuisine.intro}</p>
                  <div className="space-y-2">
                    {cuisine.dishes.map((item) => (
                      <div key={item.dish} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                        <div><span className="text-sm font-medium text-[var(--text-primary)]">{item.dish}</span><p className="text-xs text-[var(--text-muted)]">{item.desc}</p></div>
                        <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Food Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Marrakech wins for traditional Moroccan cuisine, street food atmosphere, and the
              unforgettable experience of eating under the stars at Jemaa el-Fnaa. Casablanca wins
              for international variety, fresh Atlantic seafood, wine-friendly restaurants, and
              modern fine dining. Both cities are food destinations but for completely different
              reasons. Seasonal pricing can change restaurant costs during peak periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Riads versus hotels: two very different ways to experience Morocco overnight.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Staying in Marrakech', marker: CheckCircle, items: [
                'Thousands of riads: converted courtyard houses in the medina',
                'Budget from 150 MAD | Mid-range from 500 MAD | Luxury from 2,500 MAD',
                'Rooftop terraces with Koutoubia Mosque and Atlas Mountain views',
                'La Mamounia, Royal Mansour among world\'s greatest hotels',
                'Riad experience (courtyard, fountain, breakfast) is uniquely Moroccan',
              ]},
              { title: 'Staying in Casablanca', marker: CircleDot, items: [
                'Modern hotels and international chains dominate the options',
                'Budget from 250 MAD | Mid-range from 600 MAD | Luxury from 2,800 MAD',
                'Four Seasons, Hyatt Regency, Sofitel with ocean views',
                'Very few riad options; hotel-style accommodation is the norm',
                'Business-oriented with meeting rooms, gyms, and executive floors',
              ]},
            ].map((side) => {
              const Marker = side.marker;
              return (
                <div key={side.title} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                    <Building className="w-5 h-5 inline mr-1" /> {side.title}
                  </h3>
                  <div className="space-y-3">
                    {side.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Marker className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Nightlife ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Casablanca is Morocco&apos;s undisputed nightlife capital. Here is the honest breakdown.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Marrakech After Dark', icon: Wine, marker: CheckCircle, items: [
                'Rooftop bars in the medina with sunset and Koutoubia views',
                'Hotel bars and lounges (La Mamounia, Royal Mansour)',
                'Gueliz nightlife district with cocktail bars',
                'Nightclubs like Theatro and Pacha (seasonal)',
                'Jemaa el-Fnaa is the real evening entertainment',
              ]},
              { title: 'Casablanca After Dark', icon: Wine, marker: CircleDot, items: [
                'Nightclubs open until 4 AM: Le Balcon, Sky 28, Maison B',
                'Rooftop bars on the Corniche with Atlantic views',
                'Live music venues and jazz clubs year-round',
                'Wine bars and cocktail lounges in Maarif and Gauthier',
                'More liberal social atmosphere than any other Moroccan city',
              ]},
            ].map((side) => {
              const SideIcon = side.icon;
              const Marker = side.marker;
              return (
                <div key={side.title} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                    <SideIcon className="w-5 h-5 inline mr-1" /> {side.title}
                  </h3>
                  <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                    {side.items.map((point, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Marker className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Nightlife Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Casablanca wins convincingly. Clubs stay open later, the bar scene is more diverse,
              and the atmosphere is more cosmopolitan and liberal. Marrakech has rooftop bars and
              Jemaa el-Fnaa as evening entertainment, but if nightlife is your priority, Casablanca
              is the clear choice.
            </p>
          </div>
        </div>
      </section>

      {/* ── Shopping Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Traditional souks versus modern malls. Artisan crafts versus designer brands. Two completely different shopping experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Shopping in Marrakech', items: marrakechShoppingItems, note: 'Haggling is expected in the souks. Start at 50% of asking price. The experience of shopping is part of the adventure.' },
              { title: 'Shopping in Casablanca', items: casablancaShoppingItems, note: 'Fixed prices in malls and boutiques. No haggling needed except in the Habous Quarter. Morocco Mall has 600+ stores.' },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((product) => (
                    <div key={product.item} className="flex items-center justify-between text-sm">
                      <span className="text-[var(--text-secondary)]">{product.item}</span>
                      <span className="text-[var(--color-accent)] font-semibold shrink-0 ml-2">{product.price}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-[var(--text-muted)]"><Sparkles className="w-3 h-3 inline mr-1" />{section.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trip Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Marrakech has a clear edge with more diverse and dramatic day trip options nearby.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dayTrips.map((section) => (
              <div key={section.from} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">From {section.from}</h3>
                <div className="space-y-3">
                  {section.trips.map((trip) => (
                    <div key={trip.destination} className="flex items-start justify-between gap-2 text-sm">
                      <div>
                        <span className="font-medium text-[var(--text-primary)]">{trip.destination}</span>
                        <span className="text-xs text-[var(--text-muted)] ml-1">({trip.time})</span>
                        <p className="text-xs text-[var(--text-secondary)]">{trip.highlights}</p>
                      </div>
                      <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0">{trip.cost}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There & Around ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting There &amp; Around
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both cities have major airports and are well-connected by train.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {[
              { title: 'Getting to Marrakech', info: [
                { icon: Plane, text: 'Airport (RAK): Major international hub. Direct flights from 50+ cities. 15 min from medina.' },
                { icon: Train, text: 'Train from Casablanca: 3 hours direct, from 100 MAD. Frequent daily departures.' },
                { icon: MapPin, text: 'Within Marrakech: Walk the medina. Petit taxis from 10 MAD. Caleche from 80 MAD/hr.' },
              ]},
              { title: 'Getting to Casablanca', info: [
                { icon: Plane, text: 'Airport (CMN): Morocco\'s busiest. Most international routes. Airport train from 60 MAD.' },
                { icon: Train, text: 'Train from Marrakech: 3 hours direct, from 100 MAD. Casa Voyageurs main station.' },
                { icon: MapPin, text: 'Within Casablanca: Tram from 6 MAD. Petit taxis from 10 MAD. Ride-hailing apps available.' },
              ]},
            ].map((side) => (
              <div key={side.title} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">{side.title}</h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  {side.info.map((line) => {
                    const LineIcon = line.icon;
                    return (
                      <div key={line.text} className="flex items-start gap-2">
                        <LineIcon className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span>{line.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Train className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Traveling Between Marrakech &amp; Casablanca (240 km)
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Train: 3 hours direct, from 100 MAD with multiple daily departures. Bus (CTM/Supratours):
              3.5-4 hours, from 80 MAD. Drive: 2.5-3 hours via the A7 motorway. The train is the most
              comfortable and popular option. Seasonal pricing can change fares. Book trains at oncf.ma.
            </p>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost Comparison by Travel Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you will actually spend per day. Marrakech is cheaper for tourists; Casablanca costs more as a modern metropolis.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tier.tier}</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Marrakech', data: tier.marrakech, color: 'text-[var(--color-accent)]' },
                      { label: 'Casablanca', data: tier.casablanca, color: 'text-[var(--text-muted)]' },
                    ].map((city) => (
                      <div key={city.label} className="p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-semibold ${city.color}`}>{city.label}</span>
                          <span className="text-base font-bold text-[var(--text-primary)]">{city.data.daily}<span className="text-xs font-normal text-[var(--text-muted)]">/day</span></span>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] space-y-0.5">
                          <p>Stay: {city.data.accommodation} | Food: {city.data.food}</p>
                          <p>Transport: {city.data.transport} | Activities: {city.data.activities}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in MAD. Seasonal pricing can change during peak periods (Easter, Christmas, summer).
          </p>
        </div>
      </section>

      {/* ── Choose Marrakech If... / Choose Casablanca If... ── */}
      {[
        { title: 'Choose Marrakech If...', icon: CheckCircle, items: marrakechWins, bg: 'bg-[var(--surface-muted)]', pattern: 'moroccan-pattern' },
        { title: 'Choose Casablanca If...', icon: CircleDot, items: casablancaWins, bg: '', pattern: '' },
      ].map((section) => {
        const SectionIcon = section.icon;
        return (
          <section key={section.title} className={`py-16 md:py-20 ${section.bg} ${section.pattern}`}>
            <div className="container-morocco">
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
                <SectionIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.title} className="card-moroccan p-5">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                        <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Which to Visit by Traveler Type ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which City by Traveler Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A quick guide based on what matters most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelerTypes.map((tt) => {
              const TypeIcon = tt.icon;
              return (
                <div key={tt.type} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TypeIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{tt.type}</span>
                    <span className={`text-xs font-semibold ml-2 ${tt.recommendation === 'Marrakech' ? 'text-[var(--color-accent)]' : tt.recommendation === 'Casablanca' ? 'text-[var(--color-gold)]' : 'text-[var(--text-muted)]'}`}>{tt.recommendation}</span>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{tt.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Combined Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Not Both? The 7-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best answer is to visit both. With just a 3-hour train between them, combining Casablanca and Marrakech is easy.
          </p>

          <div className="space-y-4">
            {combinedItinerary.map((stop) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.day} className="card-moroccan p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <StopIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stop.location}</h3>
                      <span className="text-xs text-[var(--text-muted)] shrink-0 ml-2">{stop.day}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{stop.highlights}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Combined Trip Budget
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A 7-day Casablanca and Marrakech itinerary at mid-range comfort costs approximately from
              6,500 MAD total including the inter-city train. Budget travelers can do it from 3,000 MAD;
              luxury travelers should expect from 28,000 MAD. Seasonal pricing can change these estimates
              during peak periods. Book accommodation and train tickets in advance for the best rates.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Verdict ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Final Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our honest assessment after comparing every dimension.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p><strong className="text-[var(--text-primary)]">Marrakech wins for tourism, culture, and the quintessential Morocco experience.</strong> The medina, souks, riads, and sensory overload make Morocco unforgettable. More sights, more tradition, more magic.</p>
              <p><strong className="text-[var(--text-primary)]">Casablanca wins for nightlife, modern dining, and urban sophistication.</strong> The Hassan II Mosque, Art Deco architecture, Atlantic coast, and the best after-dark scene in the country.</p>
              <p><strong className="text-[var(--text-primary)]">The best answer?</strong> Visit both. Start in Casablanca for a day or two, then train to Marrakech. Together they paint the complete picture: a country racing into the future while holding tightly to a thousand years of tradition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/marrakech', icon: Star, title: 'Marrakech Complete Guide', desc: 'Everything about the Red City: neighborhoods, sights, riads, and local tips.' },
              { href: '/casablanca', icon: Building, title: 'Casablanca Complete Guide', desc: 'Morocco\'s biggest city: Hassan II Mosque, Art Deco, nightlife, and beaches.' },
              { href: '/things-to-do-marrakech', icon: Camera, title: 'Things to Do in Marrakech', desc: 'From Jemaa el-Fnaa to Majorelle Garden: the complete activity guide.' },
              { href: '/things-to-do-casablanca', icon: Landmark, title: 'Things to Do in Casablanca', desc: 'Hassan II Mosque, Corniche, Art Deco walks, and Morocco Mall.' },
              { href: '/fes-vs-marrakech', icon: Scale, title: 'Fes vs Marrakech', desc: 'The other great Morocco debate: imperial cities compared head-to-head.' },
              { href: '/morocco-vs-egypt', icon: Globe, title: 'Morocco vs Egypt', desc: 'Comparing North Africa\'s two greatest destinations head-to-head.' },
            ].map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link key={link.href} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <LinkIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

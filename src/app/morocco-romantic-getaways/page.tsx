import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Sunset,
  Camera,
  Utensils,
  Tent,
  Mountain,
  Wind,
  Compass,
  Globe,
  Bed,
  Coffee,
  Sun,
  Thermometer,
  Wallet,
  Calendar,
  Map,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Romantic Getaways in Morocco 2026 | Best Destinations, Riads & Experiences',
  description:
    'Discover the most romantic getaways in Morocco. Luxury riads, Sahara desert glamping, rooftop candlelit dinners, beach escapes, hammam spa experiences, and curated romantic itineraries. Prices in MAD.',
  keywords: [
    'romantic getaways Morocco',
    'romantic Morocco trip',
    'couples vacation Morocco',
    'Morocco romantic destinations',
    'romantic riads Morocco',
    'Morocco honeymoon getaway',
    'Sahara desert romance',
    'Morocco luxury romantic trip',
    'romantic things to do Morocco',
    'Morocco beach romance',
    'romantic dining Morocco',
    'Morocco couples experiences',
    'romantic itinerary Morocco',
    'Morocco romantic accommodation',
    'desert glamping Morocco couples',
    'Morocco romantic weekend',
    'Morocco romantic cities 2026',
    'sunset camel ride Morocco',
    'hammam couples Morocco',
    'rooftop dinner Morocco',
  ],
  openGraph: {
    title: 'Romantic Getaways in Morocco 2026 | Best Destinations, Riads & Experiences',
    description:
      'The ultimate guide to romantic getaways in Morocco. Luxury riads, desert glamping, candlelit rooftop dinners, beach escapes, and unforgettable couple experiences with prices.',
    url: `${BASE_URL}/morocco-romantic-getaways`,
    images: [
      {
        url: `${BASE_URL}/images/hero-couples-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Romantic rooftop dinner for two in a Moroccan riad with lanterns and rose petals overlooking the medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Romantic Getaways in Morocco 2026 | Destinations & Experiences',
    description:
      'Luxury riads, Sahara glamping, rooftop dinners, and beach escapes. The complete guide to romantic getaways in Morocco.',
    images: [`${BASE_URL}/images/hero-couples-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-romantic-getaways` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-romantic-getaways`,
  name: 'Romantic Getaways in Morocco 2026 | Best Destinations, Riads & Experiences',
  description:
    'The ultimate guide to romantic getaways in Morocco. Luxury riads, desert glamping under the stars, candlelit rooftop dinners, beach escapes, and curated romantic itineraries with prices.',
  url: `${BASE_URL}/morocco-romantic-getaways`,
  image: `${BASE_URL}/images/hero-couples-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-romantic-getaways`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Romantic Getaways Morocco', item: `${BASE_URL}/morocco-romantic-getaways` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes Morocco a romantic getaway destination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers an unmatched combination of exotic luxury and affordability for romantic getaways. Couples can stay in intimate boutique riads with private courtyards and plunge pools, enjoy candlelit rooftop dinners overlooking ancient medinas, sleep under a million stars in Sahara desert glamping camps, relax in traditional couples hammam spa experiences, and explore colorful souks together. The warm hospitality, stunning architecture, and extraordinary cuisine create a deeply romantic atmosphere.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most romantic cities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is the most popular romantic destination with luxury riads, rooftop dining, and garden strolls. Essaouira offers coastal romance with sunset beach walks and fresh seafood. Fes provides cultural depth with palatial riads and ancient medina charm. Chefchaouen is the photogenic Blue City perfect for couple photos. The Sahara Desert near Merzouga offers unforgettable starlit glamping nights.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a romantic getaway in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget romantic getaway for 7 days costs from 8,000-13,000 MAD per couple including charming riads, local dining, and shared tours. A mid-range romantic trip with boutique riads and key experiences costs from 16,000-28,000 MAD per couple. A luxury romantic getaway with 5-star riads, private desert camps, spa treatments, and fine dining costs from 40,000-80,000 MAD per couple for a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for a romantic trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for a romantic getaway are March to May and September to November when temperatures are comfortable (20-28 degrees Celsius), the light is perfect for photos, and crowds are smaller. Spring brings wildflowers and the rose harvest. Autumn offers golden light and ideal desert temperatures. Avoid July and August when temperatures in Marrakech exceed 40 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'What romantic experiences can you have in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top romantic experiences include private rooftop dinners with rose petals and candles (from 600 MAD per couple), sunrise hot air balloon rides over the Atlas Mountains (from 2,000 MAD per person), couples hammam spa sessions (from 1,200 MAD for two), sunset camel treks in the Sahara (from 300 MAD per person), private Moroccan cooking classes (from 400 MAD per couple), luxury desert glamping (from 3,000 MAD per night), and beach horse riding at sunset (from 400 MAD per person).',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there romantic beach destinations in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has excellent beach destinations for couples. Essaouira offers windswept Atlantic charm with sunset beach walks, horse riding, and fresh seafood. Agadir has modern resort beaches with warm waters and luxury hotels. Dakhla in the far south is a hidden gem with endless lagoons, kite surfing, and exclusive eco-lodges. Legzira near Sidi Ifni features dramatic natural rock arches on the beach.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you have a romantic Sahara Desert experience?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Sahara Desert is one of the most romantic experiences on Earth. Luxury desert camps near Merzouga offer king-size beds in lavish tents with en-suite bathrooms, candlelit dinners served on the dunes, sunset camel treks, Berber music by the campfire, and stargazing with zero light pollution. Private camps can be arranged from 5,000 MAD per night for an exclusive couples experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should couples pack for a romantic Morocco trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack modest but stylish clothing covering shoulders and knees for medina exploration, smart-casual outfits for rooftop dinners, comfortable walking shoes, swimwear for riad pools and beaches, layers for cool desert evenings, a scarf for sun and sand protection, and a good camera for couple photos. Bring small MAD bills for tipping. Sunscreen and a power adapter (European two-pin) are essential.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MOST ROMANTIC CITIES
   ═══════════════════════════════════════════════════════════════ */

const romanticCities = [
  {
    city: 'Marrakech',
    icon: Star,
    tagline: 'The Red City of Love and Lantern Light',
    description:
      'Marrakech is Morocco\'s most iconic romantic destination. Step through carved wooden doors into riad courtyards filled with orange blossom and brass lanterns. Luxury riads offer private plunge pools, candlelit rooftop terraces with Atlas Mountain views, and couples hammam sessions. Explore the Jardin Majorelle hand in hand, get lost together in the ancient souk, and end each evening with a rooftop dinner under the stars.',
    highlights: ['Luxury riads with plunge pools', 'Candlelit rooftop dinners', 'Couples hammam experiences', 'Jardin Majorelle and Le Jardin Secret', 'Sunset hot air balloon rides'],
    bestFor: 'First-time visitors, luxury seekers',
    budget: 'From 1,500 MAD/night for a romantic suite',
  },
  {
    city: 'Essaouira',
    icon: Wind,
    tagline: 'Atlantic Coast Romance',
    description:
      'This whitewashed coastal town offers a slower, more intimate kind of romance. Walk along the ramparts as the Atlantic crashes below, share fresh oysters at the harbor, ride horses together on the wide beach at sunset, and browse art galleries in the laid-back medina. The creative atmosphere and bohemian charm make Essaouira the antidote to overstimulation.',
    highlights: ['Sunset beach walks and horse riding', 'Fresh seafood at the harbor', 'Boutique medina riads', 'Live Gnawa music', 'Laid-back artistic atmosphere'],
    bestFor: 'Beach lovers, nature seekers',
    budget: 'From 800 MAD/night for a boutique riad',
  },
  {
    city: 'Fes',
    icon: BookOpen,
    tagline: 'Ancient Medina, Timeless Romance',
    description:
      'Fes wraps couples in a thousand years of history. Palatial riads rival museums with soaring plasterwork ceilings, hand-carved cedar, and exquisite zouak painting. The medina is quieter and more contemplative than Marrakech, offering winding medieval lanes, hidden courtyard gardens, and rooftop restaurants with views across the ancient skyline.',
    highlights: ['Palatial riads with museum-quality decor', 'Rooftop dining above the medina', 'Cooking classes in traditional homes', 'Stunning madrasa tilework', 'Artisan souk exploration'],
    bestFor: 'Culture lovers, history enthusiasts',
    budget: 'From 1,200 MAD/night for a palatial suite',
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    tagline: 'The Blue City of Dreams',
    description:
      'Every corner of this mountain town is washed in shades of blue, creating an otherworldly backdrop for couple photos. The pace is deliciously slow: morning coffee on shaded terraces, afternoon hikes to the Spanish Mosque viewpoint, and evenings sharing local goat cheese and fresh bread. The Rif Mountain setting adds alpine romance to an already enchanting town.',
    highlights: ['Blue-washed streets for couple photos', 'Spanish Mosque sunset hike', 'Mountain terrace cafes', 'Akchour Waterfalls day trip', 'Quiet artisan souks'],
    bestFor: 'Photography lovers, slow travelers',
    budget: 'From 500 MAD/night for a charming riad',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC ACCOMMODATIONS
   ═══════════════════════════════════════════════════════════════ */

const romanticAccommodations = [
  {
    type: 'Boutique Riads',
    icon: Heart,
    price: 'From 800-4,500 MAD/night',
    description: 'Intimate courtyard houses with 5-10 rooms, each uniquely decorated. Many offer private plunge pools, rooftop terraces, and personalized service. The best riads arrange candlelit dinners, rose petal baths, and private hammam sessions for couples.',
    topPicks: ['Riad Yasmine, Marrakech', 'Riad Fes, Fes', 'Dar One, Marrakech', 'Lina Ryad, Chefchaouen'],
  },
  {
    type: 'Luxury Hotels',
    icon: Crown,
    price: 'From 3,500-12,000 MAD/night',
    description: 'Five-star properties with world-class spas, multiple restaurants, manicured gardens, and premium suites. These hotels combine Moroccan architecture with international luxury standards and often include butler service and private transfers.',
    topPicks: ['La Mamounia, Marrakech', 'Royal Mansour, Marrakech', 'Palais Faraj, Fes', 'Sofitel Agadir'],
  },
  {
    type: 'Desert Glamping',
    icon: Tent,
    price: 'From 3,000-8,000 MAD/night',
    description: 'Luxury tented camps at the edge of the Sahara dunes with king-size beds, en-suite bathrooms, private terraces, and butler service. Candlelit dinners on the dunes, sunset camel treks, and stargazing with zero light pollution create an unforgettable romantic night.',
    topPicks: ['Merzouga Luxury Camp', 'Erg Chebbi Bivouac', 'Scarabeo Camp, Agafay', 'Inara Camp, Agafay'],
  },
  {
    type: 'Kasbah Retreats',
    icon: Building,
    price: 'From 1,500-6,000 MAD/night',
    description: 'Restored fortress-style hotels in dramatic landscapes. Kasbahs sit on hilltops, in palm oases, and along river valleys. Their thick walls, rooftop terraces, and gardens surrounded by mountains offer a secluded, fortress-like romance.',
    topPicks: ['Dar Ahlam, Skoura', 'Kasbah Tamadot, Atlas', 'Kasbah Bab Ourika', 'Kasbah du Toubkal'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const romanticExperiences = [
  {
    activity: 'Couples Hammam & Spa',
    icon: Sparkles,
    price: 'From 1,200 MAD for two',
    duration: '2-3 hours',
    description: 'A traditional hammam ritual adapted for couples. Steam rooms, black soap exfoliation (gommage), ghassoul clay mask, and argan oil massage. The most romantic spas offer private hammam suites with rose petals, candles, and mint tea afterward.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    activity: 'Sunset Camel Ride',
    icon: Sunset,
    price: 'From 300 MAD per person',
    duration: '1.5-3 hours',
    description: 'Ride side by side on camels as the sun sets over the Sahara dunes or the Agafay Desert. The golden light paints the landscape in warm tones while Berber guides lead you through the dramatic terrain. Ends with mint tea at camp.',
    bestIn: 'Merzouga, Agafay Desert',
  },
  {
    activity: 'Hot Air Balloon at Sunrise',
    icon: Globe,
    price: 'From 2,000 MAD per person',
    duration: '3-4 hours (including transfer)',
    description: 'Float above the Atlas Mountains and Moroccan countryside at dawn. The silence, the panoramic views, and the golden sunrise light create one of the most breathtaking romantic moments imaginable. Includes a Berber breakfast landing in the countryside.',
    bestIn: 'Marrakech (Jbilet plains)',
  },
  {
    activity: 'Private Cooking Class',
    icon: Utensils,
    price: 'From 400 MAD per couple',
    duration: '3-4 hours',
    description: 'Learn to prepare a traditional Moroccan feast together. Visit a local market to select spices, then cook tagine, couscous, pastilla, and Moroccan salads under a chef\'s guidance. Enjoy your creation together on a rooftop terrace.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    activity: 'Rooftop Candlelit Dinner',
    icon: Heart,
    price: 'From 600 MAD per couple',
    duration: '2-3 hours',
    description: 'A private table on a riad rooftop adorned with rose petals, brass lanterns, and flickering candles. A multi-course Moroccan feast served under the stars with views over the medina skyline. Some riads include live Gnawa or Andalusian music.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    activity: 'Beach Horse Riding at Sunset',
    icon: Wind,
    price: 'From 400 MAD per person',
    duration: '1.5-2 hours',
    description: 'Gallop together along the wide Atlantic beach as the sun dips below the horizon. The empty stretches of sand near Essaouira and Agadir offer the perfect setting for an unforgettable romantic ride. No experience necessary.',
    bestIn: 'Essaouira, Agadir',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC DINING SPOTS
   ═══════════════════════════════════════════════════════════════ */

const romanticDining = [
  {
    name: 'Le Jardin, Marrakech',
    icon: Utensils,
    cuisine: 'Moroccan-Mediterranean fusion',
    price: 'From 250 MAD per person',
    description: 'A hidden garden restaurant in the heart of the medina. Dine under banana trees and bougainvillea with lantern light filtering through the canopy. Fresh, seasonal dishes with a contemporary Moroccan twist.',
  },
  {
    name: 'Cafe Clock, Fes',
    icon: Coffee,
    cuisine: 'Modern Moroccan with cultural events',
    price: 'From 120 MAD per person',
    description: 'Set in a restored townhouse with a romantic rooftop terrace overlooking the Fes medina. Famous for camel burger and creative Moroccan fusion. Live storytelling and music evenings add cultural magic.',
  },
  {
    name: 'Taros, Essaouira',
    icon: Waves,
    cuisine: 'Seafood and Moroccan',
    price: 'From 180 MAD per person',
    description: 'A rooftop restaurant perched above the harbor with panoramic ocean views. Watch the sun set over the Atlantic while enjoying the freshest seafood. Live music on weekends makes this a couples favorite.',
  },
  {
    name: 'La Table du Riad at Riad 72, Marrakech',
    icon: Star,
    cuisine: 'Refined Moroccan tasting menu',
    price: 'From 500 MAD per person',
    description: 'An intimate dining experience in one of Marrakech\'s most beautiful riads. The chef serves a multi-course tasting menu on the candlelit courtyard. Reservations essential and only available to a handful of guests each evening.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT ROMANCE
   ═══════════════════════════════════════════════════════════════ */

const desertExperiences = [
  { highlight: 'Sunset camel trek across golden Erg Chebbi dunes', icon: Sunset },
  { highlight: 'Luxury glamping with king-size beds and en-suite bathrooms', icon: Bed },
  { highlight: 'Candlelit dinner served on the sand dunes', icon: Heart },
  { highlight: 'Stargazing with zero light pollution under the Milky Way', icon: Star },
  { highlight: 'Sunrise together from the top of the dunes', icon: Sun },
  { highlight: 'Berber music and campfire under the desert sky', icon: Sparkles },
  { highlight: 'Private camp setup available from 5,000 MAD per night', icon: Tent },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEACH ROMANCE
   ═══════════════════════════════════════════════════════════════ */

const beachDestinations = [
  {
    beach: 'Essaouira',
    icon: Wind,
    description: 'Windswept Atlantic charm with dramatic ramparts, long sandy beaches, sunset horse riding, and a bohemian medina. The perfect blend of coast and culture for romantic couples.',
    bestFor: 'Beach walks, horse riding, seafood dining',
    budget: 'From 800 MAD/night',
  },
  {
    beach: 'Agadir',
    icon: Sun,
    description: 'Modern resort city with a wide golden beach, warm waters, luxury hotels, and an excellent promenade. Ideal for couples who want beach comfort with easy access to the Anti-Atlas and Paradise Valley.',
    bestFor: 'Resort relaxation, warm swimming, day trips',
    budget: 'From 1,200 MAD/night',
  },
  {
    beach: 'Dakhla',
    icon: Compass,
    description: 'A remote lagoon paradise in southern Morocco. Endless turquoise waters, exclusive eco-lodges, world-class kitesurfing, and virtually no crowds. The ultimate off-the-beaten-path romantic escape.',
    bestFor: 'Adventure couples, kite surfing, solitude',
    budget: 'From 1,500 MAD/night',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SEASONS
   ═══════════════════════════════════════════════════════════════ */

const bestSeasons = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    rating: 'Best Season',
    ratingColor: 'text-green-600',
    description: 'Wildflowers blanket the Atlas Mountains, gardens are in bloom, and temperatures hover around 22-26 degrees Celsius. The rose harvest in May fills the Dades Valley with fragrance. Perfect for outdoor romantic activities.',
    highlights: ['Comfortable 22-26 degrees Celsius', 'Wildflowers and rose harvest', 'Ideal for desert visits', 'Fewer crowds than autumn'],
  },
  {
    season: 'Autumn (September - November)',
    icon: Sunset,
    rating: 'Excellent',
    ratingColor: 'text-green-600',
    description: 'Golden light bathes every city, temperatures cool to perfect levels, and the desert becomes comfortable again. Autumn is Morocco at its most photogenic and romantic, with warm evenings ideal for rooftop dining.',
    highlights: ['Golden photography light', 'Perfect 20-28 degrees Celsius', 'Great desert temperatures', 'Rooftop dinner weather'],
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    rating: 'Good for Cities',
    ratingColor: 'text-yellow-600',
    description: 'Cities are mild (12-20 degrees Celsius) and tourist crowds are minimal. Cozy riad evenings by the fireplace, quiet medina strolls, and clear desert skies for stargazing. The Atlas Mountains have snow, adding dramatic scenery.',
    highlights: ['Fewest tourists, best riad prices', 'Cozy fireplace evenings', 'Clear stargazing skies', 'Snow-capped Atlas views'],
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    rating: 'Coast Only',
    ratingColor: 'text-red-500',
    description: 'Interior cities like Marrakech and Fes exceed 40 degrees Celsius, making outdoor activities difficult. However, Essaouira (22-25 degrees Celsius) and Agadir remain pleasant. Beach romance thrives in summer even as inland cities swelter.',
    highlights: ['Essaouira stays cool at 22-25 degrees', 'Best beach weather', 'Marrakech exceeds 40 degrees', 'Good deals on inland riads'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const itineraryWeekend = [
  { day: 1, location: 'Marrakech', title: 'Medina Magic and Riad Romance', icon: Star, highlights: ['Check into a luxury riad with private courtyard', 'Explore Jardin Majorelle and Le Jardin Secret together', 'Couples hammam in the afternoon', 'Candlelit rooftop dinner under the stars'] },
  { day: 2, location: 'Marrakech', title: 'Souks, Sunset, and Farewell', icon: Sunset, highlights: ['Sunrise hot air balloon ride (optional)', 'Souk shopping for artisan keepsakes', 'Lunch at a hidden garden restaurant', 'Sunset from a panoramic rooftop terrace'] },
] as const;

const itineraryWeek = [
  { day: 1, location: 'Marrakech', title: 'Arrival and Riad Bliss', icon: Heart, highlights: ['Airport transfer to your riad', 'Pool afternoon and riad exploration', 'Welcome dinner on the rooftop terrace'] },
  { day: 2, location: 'Marrakech', title: 'City of Senses', icon: Star, highlights: ['Guided medina and souk tour for two', 'Jardin Majorelle and Bahia Palace', 'Couples hammam spa session', 'Dinner at Le Jardin restaurant'] },
  { day: 3, location: 'Atlas Mountains', title: 'Mountain Escape', icon: Mountain, highlights: ['Day trip to Ourika Valley or Imlil', 'Berber village lunch with valley views', 'Waterfall hike through walnut groves', 'Return for sunset rooftop drinks'] },
  { day: 4, location: 'Desert (Agafay or Sahara)', title: 'Desert Romance', icon: Tent, highlights: ['Drive to Agafay Desert or begin Sahara journey', 'Check into luxury desert camp', 'Sunset camel trek across the dunes', 'Candlelit dinner and stargazing'] },
  { day: 5, location: 'Essaouira', title: 'Coastal Charm', icon: Wind, highlights: ['Transfer to the Atlantic coast', 'Walk the ramparts and explore the medina', 'Fresh seafood lunch at the harbor', 'Sunset horse riding on the beach'] },
  { day: 6, location: 'Essaouira', title: 'Slow Day by the Sea', icon: Waves, highlights: ['Morning at a beach or riad pool', 'Art gallery browsing in the medina', 'Cooking class together in the afternoon', 'Farewell dinner with ocean views at Taros'] },
  { day: 7, location: 'Departure', title: 'Last Morning', icon: Coffee, highlights: ['Breakfast on the terrace one last time', 'Final souvenir shopping', 'Transfer to Marrakech or Essaouira airport'] },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIERS
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Budget Romance',
    icon: Wallet,
    totalBudget: 'From 8,000-13,000 MAD / 7 days for two',
    description: 'Charming guesthouses, local dining, shared tours, and free romantic experiences like sunset walks and souk exploration.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    breakdown: [
      { item: 'Accommodation', cost: 'From 3,500 MAD', detail: 'Charming guesthouse or budget riad' },
      { item: 'Food & Drink', cost: 'From 2,000 MAD', detail: 'Local restaurants and street food' },
      { item: 'Transport', cost: 'From 1,000 MAD', detail: 'Buses, shared taxis' },
      { item: 'Activities', cost: 'From 1,500 MAD', detail: 'Shared desert tour, hammam, museum entry' },
    ],
  },
  {
    tier: 'Mid-Range Romance',
    icon: Gem,
    totalBudget: 'From 16,000-28,000 MAD / 7 days for two',
    description: 'Boutique riads, excellent restaurants, private tours, and key romantic experiences like desert glamping and couples spa.',
    color: 'text-[var(--color-accent)]',
    bgColor: 'bg-[var(--color-accent)]/10',
    breakdown: [
      { item: 'Accommodation', cost: 'From 7,000 MAD', detail: 'Boutique riads with pools and rooftops' },
      { item: 'Food & Drink', cost: 'From 3,500 MAD', detail: 'Riad dinners and good restaurants' },
      { item: 'Transport', cost: 'From 2,000 MAD', detail: 'Private transfers and rental car' },
      { item: 'Activities', cost: 'From 3,500 MAD', detail: 'Desert camp, hammam, cooking class, balloon' },
    ],
  },
  {
    tier: 'Luxury Romance',
    icon: Crown,
    totalBudget: 'From 40,000-80,000 MAD / 7 days for two',
    description: 'Five-star riads, private desert camps, fine dining, personal guides, spa treatments, and every luxury imaginable.',
    color: 'text-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]/10',
    breakdown: [
      { item: 'Accommodation', cost: 'From 21,000 MAD', detail: '5-star riads and luxury camps' },
      { item: 'Food & Drink', cost: 'From 7,000 MAD', detail: 'Fine dining and private chef meals' },
      { item: 'Transport', cost: 'From 5,000 MAD', detail: 'Private driver and luxury transfers' },
      { item: 'Activities', cost: 'From 7,000 MAD', detail: 'Private tours, spa, balloon, exclusive experiences' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  { question: 'What makes Morocco such a romantic destination?', answer: 'Morocco combines exotic luxury with affordability. Intimate riads with private courtyards, rooftop dinners under the stars, Sahara glamping, traditional hammam spa rituals, and a culture steeped in hospitality create an atmosphere that is deeply, effortlessly romantic. The architecture, cuisine, and landscapes are among the most beautiful in the world.' },
  { question: 'Is Morocco safe for romantic getaways?', answer: 'Morocco is generally very safe for tourists, including couples. Tourist areas in major cities are well-policed. Standard travel precautions apply: be aware of your surroundings in busy medinas, use registered taxis, and keep valuables secure. Romantic riads and hotels provide a safe, private retreat within the bustling cities.' },
  { question: 'Can unmarried couples share a room in Morocco?', answer: 'Moroccan law technically prohibits unmarried Moroccan couples from sharing a room, but this rule is very rarely applied to foreign tourists. International hotels, tourist-oriented riads, and guesthouses accommodate unmarried foreign couples routinely without questions or marriage certificate requests.' },
  { question: 'What should we wear on a romantic trip to Morocco?', answer: 'Dress modestly in public areas, covering shoulders and knees, especially in medinas and near mosques. Smart-casual attire works well for romantic restaurants and rooftop dinners. At riad pools and beaches, swimwear is fine. Bring layers for cool desert evenings and a scarf for both style and sun protection.' },
  { question: 'Is a romantic getaway in Morocco good value for money?', answer: 'Absolutely. Morocco offers extraordinary value. A luxury riad suite that would cost thousands of euros per night in Europe starts from 1,500-3,000 MAD in Morocco. A multi-course rooftop dinner for two with wine costs a fraction of European fine dining prices. Even luxury romantic getaways are remarkably affordable by international standards.' },
  { question: 'How far in advance should we book a romantic trip?', answer: 'Book at least 3-6 months ahead for peak season (March-May, September-November), especially for the most popular romantic riads which have only 5-10 rooms. Desert camp bookings and hot air balloon rides should also be secured early. Off-season (June-August excluding coast, December-February) offers more last-minute availability and better rates.' },
  { question: 'Can we celebrate a special occasion in Morocco?', answer: 'Morocco is exceptional for anniversaries, proposals, and milestone celebrations. Most riads and luxury hotels offer romantic packages including rose petal room setups, champagne, private rooftop dinners, couples hammam, and even surprise musicians. Simply mention the occasion when booking and the staff will help create an unforgettable celebration.' },
  { question: 'Is public affection acceptable in Morocco?', answer: 'Morocco is a Muslim-majority country and public displays of affection should be kept modest. Holding hands is generally fine in tourist areas. Kissing and overt physical affection in public are frowned upon. Within your riad, hotel, or restaurant you can be completely relaxed. Respecting local customs earns genuine warmth from Moroccans.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoRomanticGetawaysPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li><Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1"><Home className="w-3.5 h-3.5" /> Home</Link></li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Romantic Getaways Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 hero-overlay">
        <div className="absolute inset-0 -z-10">
          <img
            src="/images/hero-couples-morocco.webp"
            alt="Romantic candlelit rooftop dinner for two at a Moroccan riad with lanterns and Atlas Mountain views at sunset"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="container-morocco text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 mb-6">
            <Heart className="w-4 h-4 text-[var(--color-gold)]" />
            Romantic Travel Guide 2026
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Romantic Getaways in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            From lantern-lit riad courtyards to Sahara nights under a million stars, Morocco
            is one of the most romantic destinations on Earth. Discover luxury riads, desert glamping,
            rooftop dinners, beach escapes, and unforgettable couple experiences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#cities" className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold">
              <MapPin className="w-4 h-4" /> Romantic Cities
            </a>
            <a href="#experiences" className="inline-flex items-center gap-2 px-6 py-3 border border-white/40 text-white rounded-lg hover:bg-white/10 transition-colors font-[family-name:var(--font-heading)] font-semibold">
              <Sparkles className="w-4 h-4" /> Couple Experiences
            </a>
          </div>
        </div>
      </section>

      {/* ── Why Morocco for Romance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Morocco for a Romantic Getaway?
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-10">
            Morocco offers something no other destination can match: affordable exotic luxury wrapped
            in a thousand years of culture, stunning natural diversity from desert to coast to mountains,
            and a warmth of hospitality that makes every couple feel like honored guests. Whether you
            are celebrating an anniversary, planning a honeymoon, or simply escaping the everyday,
            Morocco rewards lovers with sensory richness and memories that last a lifetime.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="card-moroccan p-4 text-center">
              <Bed className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Intimate Riads</span>
              <p className="text-xs text-[var(--text-muted)] mt-1">Private courtyards and plunge pools</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Star className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Desert Stars</span>
              <p className="text-xs text-[var(--text-muted)] mt-1">Glamping under the Milky Way</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Utensils className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Rooftop Dining</span>
              <p className="text-xs text-[var(--text-muted)] mt-1">Candlelit dinners above medinas</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <DollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Great Value</span>
              <p className="text-xs text-[var(--text-muted)] mt-1">Luxury for a fraction of European prices</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Most Romantic Cities ── */}
      <section id="cities" className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Romantic Cities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each Moroccan city offers a distinct flavor of romance. Here are the top destinations
            for couples seeking an unforgettable getaway.
          </p>

          <div className="space-y-10">
            {romanticCities.map((item) => {
              const CityIcon = item.icon;
              return (
                <div key={item.city} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {item.city}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-semibold">
                        {item.tagline}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{item.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><Users className="w-3 h-3 text-[var(--color-accent)]" /> <strong>Best for:</strong> {item.bestFor}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> {item.budget}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Romantic Accommodations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Accommodations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From intimate boutique riads to palatial kasbahs and Sahara glamping camps, Morocco
            offers some of the most romantic stays in the world.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {romanticAccommodations.map((item) => {
              const AccIcon = item.icon;
              return (
                <div key={item.type} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.type}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{item.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="space-y-1.5">
                    {item.topPicks.map((pick, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                        <Award className="w-3 h-3 text-[var(--color-gold)]" />
                        {pick}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are indicative and may vary by season and availability. Book early for peak season.
          </p>
        </div>
      </section>

      {/* ── Romantic Experiences ── */}
      <section id="experiences" className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Unforgettable Romantic Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From hammam rituals to sunset camel rides and hot air balloons, these are the
            experiences that make a Moroccan romantic getaway truly extraordinary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {romanticExperiences.map((item) => {
              const ActivityIcon = item.icon;
              return (
                <div key={item.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.activity}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5" />
                          {item.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                    <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                    <strong>Best in:</strong> {item.bestIn}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Romantic Dining ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Dining Spots Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a paradise for food-loving couples. From hidden garden restaurants to
            ocean-view rooftops, these are the most romantic dining experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {romanticDining.map((item) => {
              const DineIcon = item.icon;
              return (
                <div key={item.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span>{item.cuisine}</span>
                        <span className="flex items-center gap-1"><DollarSign className="w-3 h-3" /> {item.price}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.description}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are approximate and may vary. Reservations recommended for all romantic dining spots. Seasonal pricing may change.
          </p>
        </div>
      </section>

      {/* ── Desert Romance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sahara Desert Romance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Nothing bonds a couple quite like the shared experience of the Sahara. The towering
            golden dunes, the profound silence, and a sky so thick with stars that you lose
            yourselves in wonder. It is the most profoundly romantic night many couples ever experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Luxury desert camps near Merzouga start from 3,000 MAD per night for two. Private exclusive camps from 5,000 MAD. Seasonal pricing may vary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {desertExperiences.map((item) => {
              const DesertIcon = item.icon;
              return (
                <div key={item.highlight} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <DesertIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.highlight}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Beach Romance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Romance in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Atlantic and Mediterranean coastlines offer stunning beach escapes for
            couples who want to combine sun, sand, and romance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beachDestinations.map((item) => {
              const BeachIcon = item.icon;
              return (
                <div key={item.beach} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <BeachIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.beach}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                  <div className="flex flex-col gap-1 text-xs text-[var(--text-muted)]">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-[var(--color-accent)]" /> <strong>Best for:</strong> {item.bestFor}</span>
                    <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" /> {item.budget}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time for Romance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for a Romantic Getaway
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your romantic trip right makes all the difference. Here is what to expect each season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bestSeasons.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <span className={`text-xs font-semibold ${season.ratingColor}`}>{season.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{season.description}</p>
                  <div className="space-y-2">
                    {season.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Romantic Itineraries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Itinerary Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Whether you have a weekend or a full week, here are curated romantic routes through Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All itineraries can be customized. Swap destinations based on your interests and travel style.
          </p>

          {/* Weekend Getaway */}
          <div className="max-w-4xl mx-auto mb-14">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              <Sparkles className="w-5 h-5 inline mr-1 text-[var(--color-accent)]" />
              Weekend Romantic Getaway (2 Days)
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {itineraryWeekend.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <DayIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">Day {day.day}</span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin className="w-3 h-3" /> {day.location}</span>
                        </div>
                        <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">{day.title}</h4>
                        <div className="space-y-2">
                          {day.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" /> {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* One Week Itinerary */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 text-center">
              <Globe className="w-5 h-5 inline mr-1 text-[var(--color-accent)]" />
              7-Day Romantic Morocco Itinerary
            </h3>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-6">
                {itineraryWeek.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <DayIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="card-moroccan p-5 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">Day {day.day}</span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1"><MapPin className="w-3 h-3" /> {day.location}</span>
                        </div>
                        <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">{day.title}</h4>
                        <div className="space-y-2">
                          {day.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" /> {h}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Romantic Getaway Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic budgets for every level of romantic getaway. All prices are for two people for 7 days.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices in Moroccan Dirhams (MAD). 1 USD is approximately 10 MAD, 1 EUR approximately 11 MAD (as of 2026). Seasonal pricing may vary.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-full ${tier.bgColor} flex items-center justify-center shrink-0`}>
                      <TierIcon className={`w-5 h-5 ${tier.color}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tier.tier}
                      </h3>
                      <span className={`text-xs font-semibold ${tier.color}`}>{tier.totalBudget}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>
                  <div className="space-y-3">
                    {tier.breakdown.map((line, i) => (
                      <div key={i} className="border-b border-[var(--border-default)] pb-2 last:border-b-0">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-xs font-medium text-[var(--text-primary)]">{line.item}</span>
                          <span className={`text-xs font-semibold ${tier.color}`}>{line.cost}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)]">{line.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {[
              { href: '/romantic', icon: Heart, title: 'Romantic Morocco', desc: 'Romantic experiences and sunset spots across Morocco.' },
              { href: '/morocco-for-couples', icon: Users, title: 'Morocco for Couples', desc: 'Complete couple travel guide with cultural tips.' },
              { href: '/morocco-honeymoon-guide', icon: Crown, title: 'Honeymoon Guide', desc: 'Detailed honeymoon itinerary with luxury riads.' },
              { href: '/morocco-wedding-venues', icon: Gem, title: 'Wedding Venues', desc: 'Stunning venues for destination weddings.' },
              { href: '/morocco-luxury-travel', icon: Award, title: 'Luxury Travel', desc: 'Five-star hotels and the finest experiences.' },
              { href: '/morocco-best-riads', icon: Bed, title: 'Best Riads', desc: 'Top-rated riads in Marrakech, Fes, and more.' },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Heart className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Romantic Morocco Getaway?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco awaits with lantern-lit courtyards, desert skies full of stars, rooftop
            dinners above ancient medinas, and memories that will last a lifetime. Start
            planning your romantic escape today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-honeymoon-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Crown className="w-4 h-4" />
              Honeymoon Itinerary Guide
            </Link>
            <Link
              href="/morocco-for-couples"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Users className="w-4 h-4" />
              Couples Travel Guide
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-6">
            All prices listed in Moroccan Dirhams (MAD). Prices are estimates and may vary by season, availability, and provider.
            Last updated: March 2026.
          </p>
        </div>
      </section>
    </>
  );
}

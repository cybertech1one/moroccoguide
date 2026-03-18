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
  CalendarHeart,
  Globe,
  MessageCircle,
  Bed,
  Coffee,
  Sun,
  Thermometer,
  Plane,
  Wallet,
  Calendar,
  Map,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Honeymoon Guide 2026 | Itinerary, Luxury Riads & Romantic Experiences',
  description:
    'Plan the perfect Morocco honeymoon. 7-day itinerary, luxury riads, Sahara desert glamping, romantic activities, budget tips, and the best honeymoon destinations from Marrakech to the Atlas Mountains. Prices in MAD.',
  keywords: [
    'Morocco honeymoon',
    'Morocco honeymoon itinerary',
    'Morocco honeymoon guide',
    'honeymoon in Morocco',
    'Marrakech honeymoon',
    'Sahara desert honeymoon',
    'Morocco luxury honeymoon',
    'romantic Morocco trip',
    'Morocco honeymoon packages',
    'Morocco honeymoon budget',
    'best time honeymoon Morocco',
    'Morocco honeymoon destinations',
    'honeymoon riads Morocco',
    'Essaouira honeymoon',
    'Fes honeymoon',
    'Atlas Mountains honeymoon',
    'Morocco honeymoon activities',
    'desert glamping honeymoon Morocco',
    'Morocco honeymoon hotels',
    'Morocco romantic getaway 2026',
  ],
  openGraph: {
    title: 'Morocco Honeymoon Guide 2026 | Itinerary, Luxury Riads & Romantic Experiences',
    description:
      'Plan your dream Morocco honeymoon. Luxury riads, Sahara desert glamping, romantic dinners, and a complete 7-day itinerary with prices and expert tips.',
    url: `${BASE_URL}/morocco-honeymoon-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-couples-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Romantic Moroccan riad courtyard with rose petals and lanterns, perfect honeymoon setting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Honeymoon Guide 2026 | Itinerary & Luxury Experiences',
    description:
      'Luxury riads, Sahara glamping, romantic dinners, and a 7-day honeymoon itinerary. The complete guide to honeymooning in Morocco.',
    images: [`${BASE_URL}/images/hero-couples-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-honeymoon-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-honeymoon-guide`,
  name: 'Morocco Honeymoon Guide 2026 | Itinerary, Luxury Riads & Romantic Experiences',
  description:
    'The ultimate Morocco honeymoon guide. Luxury riads, Sahara desert glamping, romantic activities, a complete 7-day itinerary, budget tips, and the best honeymoon destinations from Marrakech to the Atlas Mountains.',
  url: `${BASE_URL}/morocco-honeymoon-guide`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-honeymoon-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Honeymoon Guide', item: `${BASE_URL}/morocco-honeymoon-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good honeymoon destination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is an exceptional honeymoon destination. It offers luxury riads with private plunge pools and rooftop terraces, Sahara desert glamping under the Milky Way, world-class spa experiences, romantic dining, and stunning landscapes from the Atlas Mountains to the Atlantic coast. The combination of exotic culture, affordable luxury, and incredible food makes it one of the most romantic destinations in the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Morocco honeymoon cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mid-range Morocco honeymoon for 7 days costs from 15,000-25,000 MAD per couple including romantic riad accommodation, dining, activities, and transport. A luxury honeymoon with 5-star riads, private desert camps, spa treatments, and fine dining costs from 35,000-70,000 MAD per couple for a week. Budget-conscious honeymooners can enjoy Morocco for from 8,000-12,000 MAD per week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a Morocco honeymoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for a Morocco honeymoon are March to May and September to November. The weather is warm but comfortable, the light is perfect for photographs, and crowds are smaller than peak summer. For desert experiences, October to March is ideal. Avoid July and August in Marrakech when temperatures exceed 40 degrees Celsius. Spring brings wildflowers and pleasant temperatures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I include in a 7-day Morocco honeymoon itinerary?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A perfect 7-day Morocco honeymoon typically includes 2-3 nights in Marrakech for riad stays, rooftop dinners, and hammam experiences; 2 nights in the Sahara Desert for camel rides and luxury glamping; and 2 nights in either Essaouira for coastal romance or Fes for cultural immersion. Include a hot air balloon ride, a couples cooking class, and at least one private dinner.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most romantic activities for honeymooners in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top honeymoon activities include private rooftop dinners with rose petals and candles (from 600 MAD per couple), sunrise hot air balloon rides over Marrakech (from 2,000 MAD per person), couples hammam and spa experiences (from 1,200 MAD for two), sunset camel treks in the Sahara (from 300 MAD per person), private cooking classes (from 400 MAD per couple), and overnight luxury desert glamping (from 3,000 MAD per night).',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Moroccan city is best for a honeymoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is the most popular honeymoon city with its luxury riads, rooftop restaurants, and proximity to the Atlas Mountains and Agafay Desert. Essaouira offers bohemian coastal romance with sunset beach walks. Fes provides deep cultural immersion with stunning palatial riads. Most honeymooners combine two or three cities for the best experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a visa for Morocco honeymoon?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of the US, UK, EU, Canada, Australia, and many other countries do not need a visa for stays up to 90 days in Morocco. Your passport must be valid for at least 6 months from entry date. Check with the Moroccan embassy for your specific nationality before traveling.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there honeymoon packages available in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many luxury riads and travel agencies offer honeymoon packages. These typically include airport transfers, romantic riad accommodation with suite upgrades, couples spa treatments, private dinners, desert excursions, and guided tours. Packages range from 20,000 MAD for mid-range to over 80,000 MAD for ultra-luxury experiences per couple for 7 days.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST HONEYMOON DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const honeymoonDestinations = [
  {
    city: 'Marrakech',
    icon: Star,
    image: '/images/hero-marrakech-medina.webp',
    tagline: 'The Jewel of Every Morocco Honeymoon',
    description:
      'Marrakech is where most honeymoons begin, and for good reason. The city wraps you in sensory magic from the moment you arrive: the scent of orange blossom floating through riad courtyards, the warm glow of brass lanterns on zellige-tiled walls, the call to prayer drifting across rose-tinted rooftops at dusk. Luxury riads offer plunge pools, rooftop dining under the stars, and private hammam experiences. The medina\'s labyrinthine alleys reveal one surprise after another, from hidden palace gardens to artisan workshops.',
    highlights: [
      'World-class luxury riad accommodation',
      'Rooftop candlelit dinners with Atlas views',
      'Sunrise hot air balloon rides for two',
      'Private couples hammam and spa treatments',
      'Day trips to Ourika Valley and Ouzoud Falls',
      'Jardin Majorelle and Secret Garden visits',
    ],
    bestFor: 'First-time visitors, luxury seekers, foodies',
    budget: 'From 1,500 MAD/night for a romantic riad suite',
  },
  {
    city: 'Essaouira',
    icon: Wind,
    image: '/images/hero-essaouira-ramparts.webp',
    tagline: 'Bohemian Coastal Romance by the Atlantic',
    description:
      'Essaouira is Marrakech\'s cooler, calmer counterpart and a perfect honeymoon contrast. This whitewashed coastal town wrapped in Atlantic breezes offers a different kind of romance: long walks on windswept beaches at sunset, fresh oysters and seafood by the harbor, horse riding along the shoreline, and a laid-back Bohemian art scene. The pace is slower, the streets quieter, and the vibe more intimate. Many honeymooners spend three nights in Marrakech followed by two in Essaouira for the ultimate combination.',
    highlights: [
      'Sunset walks along the beach and ramparts',
      'Horse riding for two on the Atlantic shore',
      'Fresh seafood at the picturesque harbor',
      'Charming boutique riad stays in the medina',
      'Art galleries and coastal creative scene',
      'Windsurfing and kitesurfing adventures',
    ],
    bestFor: 'Beach-loving couples, nature seekers, creative spirits',
    budget: 'From 800 MAD/night for a charming boutique riad',
  },
  {
    city: 'Sahara Desert (Merzouga)',
    icon: Tent,
    image: '/images/hero-sahara-merzouga.webp',
    tagline: 'An Unforgettable Night Under the Stars',
    description:
      'No Morocco honeymoon is complete without a night in the Sahara. The journey to Merzouga takes you through the dramatic Dades Valley, past the rose-colored kasbahs of the south, and into the towering golden dunes of Erg Chebbi. Luxury desert camps offer king-size beds in lavish tents, private terraces overlooking the dunes, candlelit dinners in the sand, and a sky so full of stars it takes your breath away. A sunset camel trek into the dunes followed by a night of absolute silence and celestial beauty is the highlight of many honeymooners\' entire trip.',
    highlights: [
      'Luxury glamping with king-size beds and en-suite bathrooms',
      'Sunset camel trek across golden Erg Chebbi dunes',
      'Candlelit dinner served in the desert under the stars',
      'Stargazing with zero light pollution',
      'Sunrise from the top of the dunes',
      'Traditional Berber music around the campfire',
    ],
    bestFor: 'Adventure-seeking couples, stargazers, photographers',
    budget: 'From 3,000 MAD/night for luxury desert glamping for two',
  },
  {
    city: 'Fes',
    icon: BookOpen,
    image: '/images/hero-fes-medina.webp',
    tagline: 'Timeless Romance in the Ancient Capital',
    description:
      'Fes is Morocco\'s cultural and spiritual heart, and its ancient medina, the largest car-free urban area on Earth, is an extraordinary honeymoon setting. The palatial riads of Fes are among the most beautiful in the country, with soaring courtyard ceilings, intricate plasterwork, and cedar wood carvings that took artisans years to complete. Fes is quieter and more contemplative than Marrakech, offering a deeper immersion into Moroccan culture. Dine in restored palaces, explore the medieval tanneries, and lose yourselves in the thousand-year-old streets together.',
    highlights: [
      'Palatial riads with museum-quality architecture',
      'Rooftop dining overlooking the ancient medina',
      'Medieval tanneries and artisan workshops',
      'Private guided tours of the oldest university',
      'Cooking classes in a traditional Fassi home',
      'Bou Inania and Al-Attarine madrasa visits',
    ],
    bestFor: 'Culture lovers, history enthusiasts, foodies',
    budget: 'From 1,200 MAD/night for a palatial riad suite',
  },
  {
    city: 'Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas-mountains.webp',
    tagline: 'Mountain Luxury and Berber Hospitality',
    description:
      'The Atlas Mountains offer honeymooners a dramatic change of scenery from the medina. Luxury mountain lodges and kasbah hotels perch above traditional Berber villages with sweeping views of snow-capped peaks and terraced valleys. The air is fresh, the silence is profound, and the landscapes are breathtaking. From the lush Ourika Valley to the dramatic Tizi n\'Tichka pass, the Atlas is where you reconnect with nature and each other. Many lodges offer infinity pools, spa treatments with mountain views, and guided hikes through wildflower meadows.',
    highlights: [
      'Luxury mountain lodges with infinity pools',
      'Guided hiking through Berber villages',
      'Spa treatments with panoramic mountain views',
      'Traditional Berber lunch in a village home',
      'Dramatic pass roads and valley viewpoints',
      'Cool mountain air as a retreat from the heat',
    ],
    bestFor: 'Nature-loving couples, hikers, wellness seekers',
    budget: 'From 2,500 MAD/night for a luxury mountain lodge',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LUXURY RIADS & HOTELS FOR HONEYMOONS
   ═══════════════════════════════════════════════════════════════ */

const honeymoonAccommodation = [
  {
    rank: 1,
    name: 'Royal Mansour',
    city: 'Marrakech',
    type: 'Ultra-Luxury Palace Hotel',
    icon: Crown,
    price: 'From 12,000 MAD per night',
    description:
      'The Royal Mansour is not merely a hotel; it is a private medina built by King Mohammed VI. Each accommodation is a three-story riad with its own plunge pool, rooftop terrace, and private butler. The underground spa is one of the finest in Africa. For honeymooners, the level of privacy and opulence is unmatched anywhere in Morocco. Dinner at La Grande Table Marocaine is a culinary event.',
    highlights: ['Private three-story riad suites', 'Personal butler service', 'Underground spa complex', 'Michelin-worthy dining'],
  },
  {
    rank: 2,
    name: 'La Sultana Marrakech',
    city: 'Marrakech',
    type: 'Luxury Palace Riad',
    icon: Crown,
    price: 'From 4,500 MAD per night',
    description:
      'Five interconnected riads forming one of the most opulent stays in Morocco. Private plunge pools, a rooftop spa with city views, and suites decorated with museum-quality antiques. The private couple hammam experience here is legendary among honeymooners. Each room tells a different story from Moroccan history. The rooftop pool overlooking the Saadian Tombs is exquisite.',
    highlights: ['Private plunge pools in suites', 'Rooftop spa for two', 'Museum-quality interiors', 'Legendary couple hammam'],
  },
  {
    rank: 3,
    name: 'Riad Yasmine',
    city: 'Marrakech',
    type: 'Boutique Riad',
    icon: Heart,
    price: 'From 1,800 MAD per night',
    description:
      'Perhaps the most photographed riad in Morocco and a honeymoon favorite. The turquoise plunge pool surrounded by lush greenery and zellige tilework is achingly beautiful. Rooms are elegantly decorated with Berber textiles and brass fixtures. The rooftop terrace offers candlelit dinners with Atlas Mountain views. Breakfast is served poolside. The ambiance is deeply romantic without being ostentatious.',
    highlights: ['Iconic turquoise plunge pool', 'Rooftop candlelit dinners', 'Atlas Mountain views', 'Zellige-decorated suites'],
  },
  {
    rank: 4,
    name: 'Dar Ahlam',
    city: 'Ouarzazate / Skoura Oasis',
    type: 'Luxury Desert Retreat',
    icon: Sparkles,
    price: 'From 6,000 MAD per night',
    description:
      'The "House of Dreams" is one of the most extraordinary honeymoon stays on Earth. This restored kasbah in the Skoura oasis has just 14 suites, offering a level of personalization impossible at larger hotels. There are no menus; the chef prepares whatever your heart desires. Dinner might be served in the rose garden, on the roof, in the palm grove, or in the desert under the stars. Every day is a surprise.',
    highlights: ['Utterly personalized no-menu dining', 'Surprise dinner locations nightly', 'Restored kasbah architecture', 'Private desert excursions'],
  },
  {
    rank: 5,
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    type: 'Mountain Luxury Resort',
    icon: Mountain,
    price: 'From 5,000 MAD per night',
    description:
      'Sir Richard Branson\'s mountain retreat in the High Atlas. Perched above a Berber village with sweeping views of peaks and valleys, it combines Moroccan artisanship with world-class luxury. The infinity pool, the spa with mountain views, and the private terrace suites create one of Morocco\'s most romantic settings. Many honeymooners book the master suite with its own private garden and pool.',
    highlights: ['Infinity pool with mountain panorama', 'Spa with panoramic terrace', 'Private Berber village setting', 'Helicopter arrival option'],
  },
  {
    rank: 6,
    name: 'Scarabeo Camp',
    city: 'Agafay Desert (near Marrakech)',
    type: 'Desert Glamping',
    icon: Tent,
    price: 'From 3,000 MAD per night',
    description:
      'Luxury desert glamping just 40 minutes from Marrakech. The Agafay stone desert provides a Saharan-like landscape without the long drive to Merzouga, making it perfect for honeymooners with limited time. Tented suites have real beds, hot showers, and private terraces facing the Atlas Mountains. Dinner is served under the stars with live music. The silence at night, broken only by the wind, is profoundly romantic.',
    highlights: ['Luxury tented suites', 'Dinner under the stars', 'Atlas Mountain backdrop', 'Just 40 min from Marrakech'],
  },
  {
    rank: 7,
    name: 'L\'Heure Bleue Palais',
    city: 'Essaouira',
    type: 'Heritage Palace Hotel',
    icon: Building,
    price: 'From 2,200 MAD per night',
    description:
      'Essaouira\'s most elegant address and a wonderful honeymoon base for the coastal portion of your trip. This heritage palace near the ramparts features an indoor pool, a cinema room, and a rooftop terrace with 360-degree ocean and medina views. The suites are grand without being ostentatious. The evening rooftop aperitif watching the sun set over the Atlantic is unforgettable.',
    highlights: ['Rooftop sunset terrace', 'Indoor heated pool', 'Ocean and medina views', 'Heritage palace atmosphere'],
  },
  {
    rank: 8,
    name: 'Riad Fes',
    city: 'Fes',
    type: 'Palatial Riad & Spa',
    icon: Gem,
    price: 'From 2,800 MAD per night',
    description:
      'The finest riad in Fes and a palatial honeymoon retreat. Set in the heart of the ancient medina, Riad Fes features soaring zouak-painted ceilings, a candlelit pool, a world-class restaurant, and suites that would not be out of place in a museum. The bar overlooking the medina is one of the most atmospheric spots in all of Morocco. The intimate scale ensures attentive, personalized service.',
    highlights: ['Zouak-painted palatial ceilings', 'Candlelit pool courtyard', 'Medina-view rooftop bar', 'Award-winning restaurant'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC HONEYMOON ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const honeymoonActivities = [
  {
    activity: 'Sunrise Hot Air Balloon Ride',
    icon: Compass,
    price: 'From 2,000 MAD per person',
    duration: '3-4 hours (including transfer)',
    description:
      'Float silently over the Marrakech palmeraie and the Atlas foothills as the sun rises. The world below is quiet, the air is cool, and the view stretches to the snow-capped High Atlas. Many operators include a Berber breakfast after landing. For an unforgettable honeymoon memory, request a private balloon for two.',
    bestIn: 'Marrakech',
    honeymoonTip: 'Book a private balloon (from 5,000 MAD for two) for the most intimate experience',
  },
  {
    activity: 'Private Couples Hammam & Spa',
    icon: Sparkles,
    price: 'From 1,200 MAD for two',
    duration: '90 minutes to 2 hours',
    description:
      'A traditional Moroccan hammam is an essential honeymoon experience. In a private hammam, you share a beautiful steam room, receive side-by-side body scrubs with black soap and kessa gloves, enjoy argan oil massages, and relax in a private lounge with mint tea and Moroccan pastries. The best spas use rose petals, orange blossom water, and pure argan oil.',
    bestIn: 'Marrakech, Fes, Essaouira',
    honeymoonTip: 'Ask for the honeymoon package with rose petals, champagne, and extended massage',
  },
  {
    activity: 'Sunset Camel Trek in the Sahara',
    icon: Sunset,
    price: 'From 300 MAD per person',
    duration: '1-2 hours',
    description:
      'Riding a camel into the golden Sahara dunes at sunset is the quintessential Moroccan honeymoon experience. The shifting colors of the Erg Chebbi dunes, from gold to orange to deep crimson, create a spectacle that stays with you forever. Most treks include mint tea at a panoramic viewpoint on top of the dunes.',
    bestIn: 'Merzouga, Agafay Desert',
    honeymoonTip: 'Request a private trek (from 800 MAD for two) to ride side by side without other groups',
  },
  {
    activity: 'Private Cooking Class for Two',
    icon: Utensils,
    price: 'From 400 MAD per couple',
    duration: '3-4 hours',
    description:
      'Learn to make a traditional Moroccan tagine, couscous, or pastilla together. Many classes begin with a guided souk visit to select fresh ingredients, which is an adventure in itself. You cook side by side with a local chef in a beautiful riad kitchen, then enjoy the meal you prepared on a rooftop terrace.',
    bestIn: 'Marrakech, Fes',
    honeymoonTip: 'Choose a class at a riad with a rooftop terrace so you dine with views',
  },
  {
    activity: 'Private Rooftop Dinner',
    icon: Heart,
    price: 'From 600 MAD per couple',
    duration: '2-3 hours',
    description:
      'Many riads offer private rooftop dinners designed specifically for honeymooners. A table set with brass lanterns, rose petals, and candles. A multi-course Moroccan feast served under the stars. Some include live Gnawa or Andalusian music. This is Morocco at its most romantic, and the photographs are unforgettable.',
    bestIn: 'Marrakech, Fes, Essaouira',
    honeymoonTip: 'Ask your riad to arrange this on arrival night as a special honeymoon welcome',
  },
  {
    activity: 'Beach Horse Riding at Sunset',
    icon: Wind,
    price: 'From 400 MAD per person',
    duration: '1.5-2 hours',
    description:
      'Ride along the Atlantic coast on horseback as the sun sets over the ocean. Essaouira\'s long, wide beach is perfect for this experience. The horses are well-trained, and guides accommodate all experience levels. The combination of ocean spray, golden light, the rhythm of the ride, and your partner beside you is profoundly romantic.',
    bestIn: 'Essaouira, Agadir',
    honeymoonTip: 'Book the last ride of the day to catch the sunset over the Atlantic',
  },
  {
    activity: 'Atlas Mountain Private Day Trip',
    icon: Mountain,
    price: 'From 800 MAD per couple (private transfer)',
    duration: 'Full day',
    description:
      'Escape the city heat with a private day trip to the Atlas Mountains. Visit the Ourika Valley with its terraced Berber villages and cascading waterfalls, or drive the dramatic Tizi n\'Test pass. Enjoy a traditional Berber lunch in a village home with panoramic valley views. The mountain air and landscapes are a refreshing contrast to the medina.',
    bestIn: 'From Marrakech',
    honeymoonTip: 'Combine with a visit to Kasbah Tamadot for lunch at their terrace restaurant',
  },
  {
    activity: 'Overnight Luxury Desert Camp',
    icon: Tent,
    price: 'From 3,000 MAD per night for two',
    duration: '2-3 days recommended',
    description:
      'Spend the night in a luxury desert camp at the edge of the Erg Chebbi dunes. The best camps offer king-size beds in lavish tents with en-suite bathrooms, private terraces, and butler service. Dinner by candlelight in the desert with traditional music, followed by stargazing with zero light pollution, is the most magical night of any Morocco honeymoon.',
    bestIn: 'Merzouga, Zagora, Agafay',
    honeymoonTip: 'Book the premium tent with a private terrace and request a stargazing setup',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: 7-DAY HONEYMOON ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const sevenDayItinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech: Welcome to Morocco',
    icon: Plane,
    location: 'Marrakech',
    description:
      'Arrive at Marrakech Menara Airport where your riad\'s private transfer awaits. Check into your luxury riad in the heart of the medina. Take the afternoon to settle in: explore the riad\'s courtyard and plunge pool, enjoy mint tea on the rooftop terrace, and orient yourselves to the sights and sounds of the medina. In the evening, enjoy your first rooftop dinner at Nomad or Le Jardin, or arrange a private welcome dinner at your riad with rose petals and candles.',
    highlights: ['Airport private transfer', 'Check into luxury riad', 'Explore the riad and medina', 'Romantic welcome dinner'],
    meals: 'Dinner: Private rooftop dinner at riad (from 600 MAD per couple)',
    accommodation: 'Luxury riad in Marrakech medina (from 1,800 MAD/night)',
  },
  {
    day: 2,
    title: 'Marrakech: Medina Magic and Hammam Bliss',
    icon: Sparkles,
    location: 'Marrakech',
    description:
      'Start the day with a leisurely breakfast on your riad rooftop. Spend the morning exploring the medina together: visit the Bahia Palace, marvel at the zellige tilework and painted cedar ceilings, then wander through the colorful souks. After lunch at Cafe des Epices, retreat to the Heritage Spa or your riad\'s private hammam for a couples spa experience. In the evening, visit Jardin Majorelle at golden hour, then dine at La Table du Riad for an intimate multi-course Moroccan feast.',
    highlights: ['Bahia Palace visit', 'Souk exploration for two', 'Couples hammam spa experience', 'Jardin Majorelle at golden hour'],
    meals: 'Lunch: Cafe des Epices (from 150 MAD pp) | Dinner: La Table du Riad (from 350 MAD pp)',
    accommodation: 'Same luxury riad in Marrakech medina',
  },
  {
    day: 3,
    title: 'Marrakech: Sunrise Balloon and Farewell Dinner',
    icon: Compass,
    location: 'Marrakech',
    description:
      'Wake before dawn for the most spectacular experience of the trip: a sunrise hot air balloon ride over the Marrakech palmeraie. Float silently above the landscape as the Atlas Mountains glow pink and gold. After landing, enjoy a traditional Berber breakfast. Return to the riad for a lazy afternoon by the pool. In the evening, visit Le Jardin Secret for sunset views from the tower, then enjoy a final Marrakech dinner at Dar Yacout, one of the city\'s most legendary dining palaces.',
    highlights: ['Sunrise hot air balloon ride', 'Berber breakfast after landing', 'Lazy riad afternoon', 'Dinner at legendary Dar Yacout'],
    meals: 'Breakfast: Berber post-balloon (included) | Dinner: Dar Yacout (from 500 MAD pp)',
    accommodation: 'Same luxury riad in Marrakech medina',
  },
  {
    day: 4,
    title: 'Journey to the Sahara: Kasbahs and Rose Valleys',
    icon: Map,
    location: 'Marrakech to Dades Valley',
    description:
      'Depart Marrakech with your private driver for the journey south. Cross the Tizi n\'Tichka pass with its dramatic mountain views, then descend to the UNESCO World Heritage kasbah of Ait Benhaddou, where countless films have been shot. After a guided tour and lunch, continue through the Valley of Roses and into the spectacular Dades Gorge. Check into a charming kasbah hotel perched on the gorge rim with staggering views.',
    highlights: ['Tizi n\'Tichka mountain pass', 'UNESCO Ait Benhaddou kasbah', 'Valley of Roses drive', 'Dades Gorge sunset views'],
    meals: 'Lunch: Ait Benhaddou restaurant (from 120 MAD pp) | Dinner: Kasbah hotel (included)',
    accommodation: 'Kasbah hotel in Dades Valley (from 1,200 MAD/night)',
  },
  {
    day: 5,
    title: 'Sahara Desert: Camel Trek and Starlit Glamping',
    icon: Tent,
    location: 'Dades Valley to Merzouga',
    description:
      'Continue east through the Todra Gorge with its towering 300-meter canyon walls, then onward across the hamada desert to Merzouga, gateway to the Erg Chebbi dunes. Arrive in the afternoon and prepare for the highlight of your honeymoon: a sunset camel trek into the golden dunes. Your camels carry you to a luxury desert camp where a private candlelit dinner awaits in the sand. After dinner, lie on Berber carpets and stargaze with zero light pollution. The Milky Way has never been so vivid.',
    highlights: ['Todra Gorge visit', 'Sunset camel trek into Erg Chebbi', 'Candlelit desert dinner', 'Stargazing under the Milky Way'],
    meals: 'Lunch: En route (from 100 MAD pp) | Dinner: Private desert dinner (included with camp)',
    accommodation: 'Luxury desert camp in Merzouga (from 3,000 MAD/night)',
  },
  {
    day: 6,
    title: 'Sahara Sunrise and Return to Marrakech',
    icon: Sun,
    location: 'Merzouga to Marrakech (flight or drive)',
    description:
      'Wake before dawn to climb the dunes and watch the sunrise paint the Sahara in shades of gold, orange, and rose. After a leisurely camp breakfast, you have two options: fly back to Marrakech from Errachidia airport (1 hour flight, from 1,500 MAD pp) or begin the scenic drive back. If driving, the return route through the Draa Valley offers different landscapes. Arrive in Marrakech by evening and check into your riad for one final night. Enjoy a relaxed dinner at Le Jardin or order room service and savor the quiet.',
    highlights: ['Sahara sunrise from the dunes', 'Camp breakfast in the desert', 'Flight or scenic return drive', 'Final evening in Marrakech'],
    meals: 'Breakfast: Desert camp (included) | Dinner: Le Jardin (from 250 MAD pp)',
    accommodation: 'Luxury riad in Marrakech (from 1,800 MAD/night)',
  },
  {
    day: 7,
    title: 'Departure: Last Moments in Morocco',
    icon: Heart,
    location: 'Marrakech',
    description:
      'Enjoy a final breakfast on your riad rooftop, savoring the views and the mint tea one last time. If your flight is in the afternoon, use the morning for last-minute souk shopping: pick up argan oil, leather goods, or a piece of Moroccan pottery as a honeymoon memento. Many riads offer late checkout for honeymooners. Your riad arranges the private airport transfer, and you leave Morocco with memories that will last a lifetime.',
    highlights: ['Final rooftop breakfast', 'Souk shopping for mementos', 'Late checkout (request)', 'Private airport transfer'],
    meals: 'Breakfast: Riad rooftop (included)',
    accommodation: 'Departure day',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HONEYMOON BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Mid-Range Honeymoon',
    icon: Wallet,
    totalBudget: 'From 15,000 - 25,000 MAD per couple (7 days)',
    color: 'text-[var(--color-accent)]',
    bgColor: 'bg-[var(--color-accent)]/10',
    description: 'Beautiful romantic riads, good restaurants, key experiences, and shared desert tours. A wonderful honeymoon that balances quality and value.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 6,000 - 10,000 MAD', detail: 'Charming riads with pool, from 1,000-1,700 MAD/night' },
      { item: 'Desert excursion (2 days/1 night)', cost: 'From 3,000 - 5,000 MAD', detail: 'Shared tour with mid-range desert camp' },
      { item: 'Dining (7 days)', cost: 'From 2,500 - 4,000 MAD', detail: 'Mix of riad dinners and restaurant meals' },
      { item: 'Activities', cost: 'From 2,000 - 3,500 MAD', detail: 'Hammam, cooking class, guided tours' },
      { item: 'Transport', cost: 'From 1,500 - 2,500 MAD', detail: 'Airport transfers, taxis, intercity travel' },
    ],
  },
  {
    tier: 'Luxury Honeymoon',
    icon: Crown,
    totalBudget: 'From 35,000 - 55,000 MAD per couple (7 days)',
    color: 'text-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]/10',
    description: 'Five-star riads with suites, private transfers throughout, premium desert camps, fine dining, and signature experiences. The honeymoon of a lifetime.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 15,000 - 25,000 MAD', detail: 'Luxury riad suites, from 2,500-4,500 MAD/night' },
      { item: 'Desert excursion (2 days/1 night)', cost: 'From 6,000 - 10,000 MAD', detail: 'Private tour with luxury glamping' },
      { item: 'Dining (7 days)', cost: 'From 5,000 - 8,000 MAD', detail: 'Fine dining, private rooftop dinners, wine' },
      { item: 'Activities', cost: 'From 5,000 - 8,000 MAD', detail: 'Private balloon, couples spa, private cooking class' },
      { item: 'Transport', cost: 'From 4,000 - 6,000 MAD', detail: 'All private transfers, luxury vehicles' },
    ],
  },
  {
    tier: 'Ultra-Luxury Honeymoon',
    icon: Gem,
    totalBudget: 'From 70,000 - 120,000+ MAD per couple (7 days)',
    color: 'text-purple-600',
    bgColor: 'bg-purple-600/10',
    description: 'Palace-level hotels, private butlers, helicopter transfers, exclusive desert camps, Michelin-level dining, and completely bespoke experiences designed around your preferences.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 35,000 - 60,000 MAD', detail: 'Palace suites at Royal Mansour level, from 6,000-12,000 MAD/night' },
      { item: 'Desert excursion (2 days/1 night)', cost: 'From 12,000 - 20,000 MAD', detail: 'Private ultra-luxury camp, helicopter option' },
      { item: 'Dining (7 days)', cost: 'From 8,000 - 15,000 MAD', detail: 'Palace restaurants, private chef experiences' },
      { item: 'Activities', cost: 'From 10,000 - 18,000 MAD', detail: 'Private balloon, royal spa, bespoke experiences' },
      { item: 'Transport', cost: 'From 5,000 - 10,000 MAD', detail: 'Private drivers, helicopter transfers' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME FOR HONEYMOON
   ═══════════════════════════════════════════════════════════════ */

const bestTimeMonths = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    rating: 'Excellent',
    ratingColor: 'text-green-600',
    description:
      'The best overall season for a Morocco honeymoon. Temperatures are warm but comfortable (20-28 degrees Celsius), wildflowers bloom in the Atlas Mountains and valleys, and the light is golden and perfect for photography. The desert is pleasant before summer heat arrives. Gardens like Majorelle are at their most vibrant. Slightly fewer crowds than autumn.',
    highlights: ['Wildflower season in the Atlas', 'Pleasant desert temperatures', 'Rose harvest in Dades Valley (May)', 'Comfortable city temperatures'],
  },
  {
    season: 'Autumn (September - November)',
    icon: Sunset,
    rating: 'Excellent',
    ratingColor: 'text-green-600',
    description:
      'Equally wonderful for honeymooners. Summer heat fades to comfortable warmth, the light turns golden, and the date harvest season brings a festive atmosphere to the palm oases. The Sahara is cooling down to perfect temperatures. October and November are widely considered the most pleasant months in Marrakech. Hotel rates may be slightly higher due to peak season.',
    highlights: ['Golden autumn light', 'Perfect desert temperatures', 'Date harvest festivals', 'Comfortable across all regions'],
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    rating: 'Good',
    ratingColor: 'text-amber-600',
    description:
      'Winter offers a unique honeymoon experience. Marrakech enjoys mild, sunny days (16-20 degrees Celsius), though evenings can be cool. The Sahara is comfortable during the day but cold at night, so bring warm layers for desert camping. The Atlas Mountains may have snow, creating dramatic landscapes. Christmas and New Year in Marrakech are magical, with riads offering special celebrations.',
    highlights: ['Mild sunny city weather', 'Snow-capped Atlas backdrop', 'Festive Christmas/New Year', 'Fewer tourists in January'],
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    rating: 'Not Recommended',
    ratingColor: 'text-red-600',
    description:
      'Summer is the least suitable season for a Morocco honeymoon. Marrakech regularly exceeds 40 degrees Celsius, the Sahara is dangerously hot, and sightseeing becomes exhausting. If you must travel in summer, focus on the coast: Essaouira stays pleasant year-round thanks to the Atlantic breeze. Some honeymooners combine Essaouira with the Atlas Mountains to avoid the heat.',
    highlights: ['Extremely hot inland cities', 'Essaouira remains pleasant', 'Atlas Mountains are cooler', 'Lowest hotel prices'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HONEYMOON PACKAGES
   ═══════════════════════════════════════════════════════════════ */

const honeymoonPackages = [
  {
    name: 'Classic Marrakech & Desert',
    duration: '7 days / 6 nights',
    icon: Star,
    route: 'Marrakech (3N) - Sahara Desert (1N) - Dades Valley (1N) - Marrakech (1N)',
    description:
      'The most popular honeymoon package combining the romance of Marrakech with the magic of the Sahara. Includes luxury riad accommodation, a couples hammam, a hot air balloon ride, the full desert experience with camel trek and luxury glamping, and private transfers throughout. The perfect balance of culture, adventure, and relaxation.',
    includes: [
      'Luxury riad accommodation throughout',
      'All private transfers and desert 4x4',
      'Sunrise hot air balloon ride',
      'Couples hammam experience',
      'Sunset camel trek and luxury desert camp',
      'One private rooftop dinner',
      'English-speaking driver-guide',
    ],
    price: 'From 25,000 MAD per couple (mid-range) / from 50,000 MAD (luxury)',
  },
  {
    name: 'Imperial Cities Romance',
    duration: '8 days / 7 nights',
    icon: Building,
    route: 'Marrakech (3N) - Fes (2N) - Chefchaouen (2N)',
    description:
      'A honeymoon for couples who love culture, history, and photography. Begin in Marrakech with riad luxury and rooftop dining, then fly to Fes for the deep cultural immersion of the ancient medina. End in the magical Blue City of Chefchaouen for mountain walks, blue-washed streets, and quiet terrace evenings. Each city offers a completely different romantic atmosphere.',
    includes: [
      'Palatial riad accommodation throughout',
      'Domestic flight Marrakech to Fes',
      'Private guided Fes medina tour',
      'Couples cooking class in Fes',
      'Private transfer Fes to Chefchaouen',
      'Sunset hike to Spanish Mosque viewpoint',
      'Daily breakfasts included',
    ],
    price: 'From 22,000 MAD per couple (mid-range) / from 45,000 MAD (luxury)',
  },
  {
    name: 'Luxury Coast & Mountain',
    duration: '7 days / 6 nights',
    icon: Mountain,
    route: 'Marrakech (2N) - Atlas Mountains (2N) - Essaouira (2N)',
    description:
      'This honeymoon package combines three distinct Moroccan landscapes. Start in Marrakech for medina exploration and spa time, retreat to a luxury Atlas Mountain lodge for hiking and wellness, then finish on the Atlantic coast in Essaouira for sunset walks and fresh seafood. Ideal for couples who love nature and want to avoid the heavy tourist trail.',
    includes: [
      'Luxury accommodation at each destination',
      'All private transfers throughout',
      'Couples spa treatment at mountain lodge',
      'Guided Atlas Mountain hike',
      'Beach horse riding in Essaouira',
      'Farewell seafood dinner at the harbor',
      'Daily breakfasts included',
    ],
    price: 'From 20,000 MAD per couple (mid-range) / from 42,000 MAD (luxury)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Morocco a good honeymoon destination?',
    answer:
      'Morocco is an exceptional honeymoon destination. It offers luxury riads with private plunge pools and rooftop terraces, Sahara desert glamping under the Milky Way, world-class spa experiences, romantic dining in restored palaces, and stunning landscapes from the Atlas Mountains to the Atlantic coast. The combination of exotic culture, affordable luxury, incredible food, and genuine hospitality makes it one of the most romantic destinations in the world. Morocco consistently ranks among the top honeymoon destinations for couples seeking something beyond the typical beach resort.',
  },
  {
    question: 'How much does a Morocco honeymoon cost?',
    answer:
      'A mid-range Morocco honeymoon for 7 days costs from 15,000-25,000 MAD per couple including romantic riad accommodation, dining at good restaurants, key activities, and internal transport. A luxury honeymoon with 5-star riads, private desert camps, spa treatments, and fine dining costs from 35,000-70,000 MAD per couple for a week. Budget-conscious honeymooners can enjoy Morocco beautifully for from 8,000-12,000 MAD per week by staying in charming but simpler guesthouses and dining at local restaurants. Morocco offers exceptional value for money compared to European or Caribbean honeymoon destinations.',
  },
  {
    question: 'What is the best time of year for a Morocco honeymoon?',
    answer:
      'The best months for a Morocco honeymoon are March to May and September to November. The weather is warm but comfortable (20-28 degrees Celsius), the light is perfect for photographs, and crowds are thinner than peak summer. For desert experiences, October to March is ideal as the Sahara summer heat is brutal. Spring is particularly beautiful with wildflowers in the Atlas Mountains. Avoid July and August in Marrakech when temperatures regularly exceed 40 degrees Celsius. Essaouira on the coast is pleasant year-round.',
  },
  {
    question: 'Do I need a visa for a Morocco honeymoon?',
    answer:
      'Citizens of the US, UK, EU, Canada, Australia, and many other countries do not need a visa for stays up to 90 days in Morocco. Your passport must be valid for at least 6 months from your date of entry. A honeymoon typically lasts 7-14 days, well within the visa-free allowance. Check with the Moroccan embassy or consulate for your specific nationality before booking.',
  },
  {
    question: 'Can unmarried couples share a hotel room in Morocco?',
    answer:
      'Technically, Moroccan law prohibits unmarried Moroccan couples from sharing a room. However, for foreign tourists, this rule is very rarely enforced. International hotels, tourist-oriented riads, and guesthouses routinely accommodate unmarried foreign couples without any issue. You will not be asked for a marriage certificate. Simply book a double room as you would anywhere else in the world. That said, this guide focuses on honeymooners, who are by definition married or newly married.',
  },
  {
    question: 'Is Morocco safe for honeymooners?',
    answer:
      'Morocco is a safe country for tourists and honeymooners. The main tourist cities of Marrakech, Fes, Essaouira, and Chefchaouen are well-policed and accustomed to international visitors. Petty crime like pickpocketing exists as in any tourist destination, so keep valuables secure. Avoid poorly lit medina alleys at night, and use your riad\'s taxi service for late returns. The Sahara desert tours are well-organized and safe. Overall, Morocco is one of the safest countries in Africa for tourism.',
  },
  {
    question: 'What should I pack for a Morocco honeymoon?',
    answer:
      'Pack modest, comfortable clothing that covers shoulders and knees for medina exploration. Bring layers for desert evenings (surprisingly cold at night), comfortable walking shoes for cobblestone medinas, sunscreen and sunglasses, a swimsuit for riad pools and hammams, and something elegant for rooftop dinners. For the desert, bring a scarf to protect against sand and wind. A small daypack is useful for day trips. Leave room in your suitcase for souk purchases like leather goods, ceramics, and argan oil.',
  },
  {
    question: 'Are there honeymoon packages available in Morocco?',
    answer:
      'Yes, many luxury riads, tour operators, and travel agencies offer honeymoon packages. These typically include airport transfers, romantic riad accommodation with suite upgrades, couples spa treatments, private dinners, desert excursions with luxury glamping, and guided tours. Packages range from 20,000 MAD for mid-range to over 80,000 MAD for ultra-luxury experiences per couple for 7 days. Many riads also offer special honeymoon add-ons like rose petal baths, champagne on arrival, and rooftop dinner setups.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHoneymoonGuidePage() {
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
            backgroundImage: 'url(/images/hero-couples-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Honeymoon Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Honeymoon Planning
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Honeymoon Guide:
            <br className="hidden md:block" /> Your Dream Trip Awaits
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Luxury riads with plunge pools, Sahara desert glamping under the Milky Way, sunrise balloon
            rides, and candlelit rooftop dinners. Everything you need to plan the perfect honeymoon in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is the Perfect Honeymoon Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has quietly become one of the world&apos;s most sought-after honeymoon destinations,
                and for good reason. This is a country where romance is woven into the very fabric of
                daily life. The scent of orange blossom drifts through riad courtyards. Brass lanterns
                cast warm golden light on ancient zellige-tiled walls. Rooftop terraces overlook
                thousand-year-old medinas as the sun sets behind the snow-capped Atlas Mountains.
                The Sahara Desert reveals more stars than you ever believed existed.
              </p>
              <p>
                For honeymooners, Morocco offers a rare and intoxicating combination: exotic adventure
                and intimate luxury, all at a fraction of the cost of comparable destinations in Europe
                or the Caribbean. You can spend the morning lost together in a labyrinthine medina,
                the afternoon being pampered in a private rose-petal hammam, and the evening dining
                on a candlelit rooftop with views that stretch to the mountains. The next day, you
                might be riding camels into the Sahara at sunset or floating over the desert in a
                hot air balloon at sunrise.
              </p>
              <p>
                This guide is specifically designed for honeymooners. It covers the best honeymoon
                destinations, luxury riads and hotels, romantic activities, a detailed 7-day
                itinerary with day-by-day plans, realistic budgets at every price point, the best
                time to visit, honeymoon packages, and answers to every question you might have.
                Whether you are dreaming of a desert adventure, a cultural immersion, or a spa-filled
                escape, Morocco delivers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Honeymoon Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Honeymoon Destinations in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From the sensory magic of Marrakech to the star-filled silence of the Sahara, each destination
            offers a different flavor of romance for your honeymoon.
          </p>

          <div className="space-y-10">
            {honeymoonDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={dest.image}
                        alt={`${dest.city} honeymoon destination in Morocco for newlyweds`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <div className="flex items-center gap-2 mb-1">
                          <DestIcon className="w-5 h-5 text-white" />
                          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                            {dest.city}
                          </h3>
                        </div>
                        <p className="text-sm text-white/80 italic">{dest.tagline}</p>
                      </div>
                    </div>
                    <div className="p-6 lg:p-8">
                      <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">{dest.description}</p>
                      <div className="space-y-2 mb-4">
                        {dest.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-muted)]">
                            <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-default)]">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          <strong>Best for:</strong> {dest.bestFor}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {dest.budget}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Luxury Riads & Hotels ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            8 Best Honeymoon Hotels &amp; Riads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From palace-level luxury to intimate boutique riads, these are the most romantic places
            to stay on your Morocco honeymoon.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season. Peak season (October-April) and holidays may be 30-50% higher. Book well in advance for honeymoon travel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {honeymoonAccommodation.map((stay) => {
              const StayIcon = stay.icon;
              return (
                <div key={stay.rank} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <span className="text-sm font-bold text-[var(--color-accent)]">#{stay.rank}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {stay.name}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {stay.city}
                        </span>
                        <span className="flex items-center gap-1">
                          <StayIcon className="w-3.5 h-3.5" />
                          {stay.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {stay.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{stay.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {stay.highlights.map((highlight, i) => (
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

      {/* ── Romantic Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CalendarHeart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Romantic Honeymoon Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Experiences that make a Morocco honeymoon truly unforgettable. From balloon rides at
            sunrise to candlelit dinners in the Sahara.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {honeymoonActivities.map((item) => {
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
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                      <strong>Best in:</strong> {item.bestIn}
                    </div>
                    <div className="flex items-start gap-1.5 p-2 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-3 h-3 mt-0.5 text-[var(--color-accent)] shrink-0" />
                      <span className="text-[var(--text-secondary)] italic">{item.honeymoonTip}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 7-Day Honeymoon Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Perfect 7-Day Morocco Honeymoon Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A day-by-day plan combining the romance of Marrakech with the magic of the Sahara Desert.
            This is the most popular Morocco honeymoon route.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            This itinerary can be customized. Add Essaouira for coastal romance or Fes for cultural depth. Your riad or tour operator can adjust to your preferences.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {sevenDayItinerary.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <DayIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded">
                            Day {day.day}
                          </span>
                          <span className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {day.location}
                          </span>
                        </div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          {day.title}
                        </h3>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">{day.description}</p>
                        <div className="space-y-2 mb-4">
                          {day.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col gap-2 pt-3 border-t border-[var(--border-default)]">
                          <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <Utensils className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {day.meals}
                          </div>
                          <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <Bed className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {day.accommodation}
                          </div>
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

      {/* ── Honeymoon Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Honeymoon Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic budgets for every level of honeymoon, from mid-range romance to ultra-luxury indulgence.
            All prices are for two people for 7 days.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are in Moroccan Dirhams (MAD). 1 USD is approximately 10 MAD, 1 EUR approximately 11 MAD, 1 GBP approximately 13 MAD (as of 2026).
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

      {/* ── Best Time for Honeymoon ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for a Morocco Honeymoon
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your honeymoon right makes all the difference. Here is what to expect in each season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {bestTimeMonths.map((season) => {
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

      {/* ── Honeymoon Packages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Honeymoon Packages
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three curated honeymoon routes with different themes. Each can be customized to your
            preferences and budget.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {honeymoonPackages.map((pkg) => {
              const PkgIcon = pkg.icon;
              return (
                <div key={pkg.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PkgIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {pkg.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" />
                        {pkg.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--color-accent)] font-medium mb-3 p-2 bg-[var(--color-accent)]/5 rounded-lg">
                    <Compass className="w-3 h-3" />
                    {pkg.route}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{pkg.description}</p>
                  <div className="space-y-2 mb-4">
                    {pkg.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="pt-3 border-t border-[var(--border-default)]">
                    <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                      {pkg.price}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Honeymoon Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Honeymoon Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Riads 3-6 Months Ahead
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The most romantic riads have only 5-10 rooms and sell out months ahead, especially
                during peak season (October-April). For a honeymoon, book at least 3-6 months in
                advance. Mention that it is your honeymoon when booking; many riads offer complimentary
                upgrades, rose petal decorations, or a bottle of champagne for honeymooners.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Cultural Sensitivity
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is a Muslim country and modest dress is appreciated in public, especially
                in medinas and near mosques. Holding hands is fine for married couples, but avoid
                kissing in public. Within your riad, hotel, or restaurant, you can be more relaxed.
                This cultural respect enhances your experience and earns warm local hospitality.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping on Your Honeymoon
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tip from 10-20 MAD for small services (porters, taxi help), from 20-50 MAD for
                restaurant waiters (10% of the bill), and from 50-100 MAD per day for guides and
                drivers. At luxury riads, a tip for staff who arrange your private dinner or
                special honeymoon setup is warmly appreciated (from 50-100 MAD). Keep small bills handy.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Honeymoon Photography
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco is exceptionally photogenic, and your honeymoon photos will be stunning.
                For professional couple photoshoots, hire a local photographer (from 1,500 MAD for a
                2-hour session). The best light is at sunrise and the hour before sunset. Ask
                before photographing local people; some may request a small tip (from 10 MAD).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dealing with Touts
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In the medinas of Marrakech and Fes, you may encounter persistent touts offering
                directions, shops, or restaurant recommendations. A polite but firm &quot;la,
                shukran&quot; (no, thank you) is sufficient. Walking confidently as a couple reduces
                approaches. Do not engage if you are not interested; just keep walking with a smile.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Let Your Riad Arrange Everything
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A good riad is your greatest honeymoon ally. Ask them to arrange rooftop dinners,
                spa bookings, desert excursions, restaurant reservations, airport transfers, and
                special honeymoon surprises. Riad staff know the city intimately and can often
                access experiences not available to walk-in tourists. The best staff anticipate your needs.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Travel Insurance
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always purchase comprehensive travel insurance for your honeymoon. Ensure it covers
                medical emergencies, trip cancellation, lost luggage, and adventure activities like
                camel riding and hot air balloon flights. Morocco has good private hospitals in
                major cities, but insurance provides essential peace of mind.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Coffee className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Do Not Over-Schedule
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The biggest honeymoon mistake is trying to see everything. Morocco rewards slow
                travel. Leave time for lazy riad mornings by the pool, spontaneous souk wandering,
                and simply sitting on a rooftop terrace together watching the world go by. The
                most romantic moments are often unplanned. Build in at least one completely free day.
              </p>
            </div>
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Honeymoon
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/honeymoon" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Honeymoon in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                More honeymoon inspiration, romantic cities, and couples travel advice.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-for-couples" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco for Couples
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                PDA guidelines, sunset spots, proposal ideas, and romantic restaurants.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-luxury-hotels" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Hotels
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest palace hotels and luxury accommodation across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Bed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Riads
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top-rated riads in Marrakech, Fes, Essaouira, and Chefchaouen.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Couple-friendly hammams, spa experiences, and wellness retreats.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Heart className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Plan Your Morocco Honeymoon?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco awaits with open arms, lantern-lit courtyards, desert skies full of stars,
            and memories that will last a lifetime. Start planning your dream honeymoon today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-for-couples"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Users className="w-4 h-4" />
              Explore Morocco for Couples
            </Link>
            <Link
              href="/morocco-spa-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-semibold"
            >
              <Sparkles className="w-4 h-4" />
              Spa &amp; Hammam Guide
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

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
  MessageCircle,
  Bed,
  Coffee,
  Sun,
  Thermometer,
  Wallet,
  Calendar,
  Map,
  AlertTriangle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco for Couples 2026 | Romantic Trip Guide, Riads & Experiences',
  description:
    'Plan the perfect romantic Morocco trip for couples. Romantic cities, desert camps, rooftop dinners, spa days, cooking classes, cultural tips, LGBTQ+ awareness, best seasons, itineraries, and budget advice. Prices in MAD.',
  keywords: [
    'Morocco for couples',
    'romantic Morocco trip',
    'Morocco couple travel guide',
    'Morocco honeymoon alternative',
    'romantic things to do Morocco',
    'Morocco romantic getaway',
    'couples trip Morocco',
    'Morocco romantic cities',
    'romantic riads Morocco',
    'Morocco couple itinerary',
    'Morocco couples experiences',
    'desert camp couples Morocco',
    'rooftop dinner Morocco couples',
    'Morocco spa couples',
    'Morocco couple budget',
    'Morocco LGBTQ travel',
    'Morocco cultural tips couples',
    'Morocco photography spots couples',
    'Morocco romantic destinations 2026',
    'Morocco couple travel tips',
  ],
  openGraph: {
    title: 'Morocco for Couples 2026 | Romantic Trip Guide, Riads & Experiences',
    description:
      'The ultimate couple travel guide to Morocco. Romantic cities, luxury riads, desert glamping, rooftop dinners, and curated itineraries with prices and expert tips.',
    url: `${BASE_URL}/morocco-for-couples`,
    images: [
      {
        url: `${BASE_URL}/images/hero-couples-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Couple enjoying a rooftop dinner in a Moroccan riad with lanterns and Atlas Mountain views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco for Couples 2026 | Romantic Trip Guide & Experiences',
    description:
      'Romantic riads, Sahara glamping, rooftop dinners, and couple itineraries. The complete guide to visiting Morocco as a couple.',
    images: [`${BASE_URL}/images/hero-couples-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-for-couples` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-for-couples`,
  name: 'Morocco for Couples 2026 | Romantic Trip Guide, Riads & Experiences',
  description:
    'The ultimate couple travel guide to Morocco. Romantic cities, luxury riads, desert glamping, rooftop dinners, cooking classes, cultural sensitivity tips, and curated couple itineraries with prices.',
  url: `${BASE_URL}/morocco-for-couples`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-for-couples`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco for Couples', item: `${BASE_URL}/morocco-for-couples` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco a good destination for couples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is one of the most romantic destinations in the world. Couples can enjoy luxury riads with plunge pools, candlelit rooftop dinners overlooking ancient medinas, Sahara desert glamping under the Milky Way, couples hammam experiences, and stunning photography at every turn. The combination of exotic culture, affordable luxury, extraordinary food, and warm hospitality makes Morocco ideal for couples at every stage of their relationship.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can unmarried couples share a hotel room in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan law technically prohibits unmarried Moroccan couples from sharing a room, but this rule is very rarely applied to foreign tourists. International hotels, tourist-oriented riads, and guesthouses routinely accommodate unmarried foreign couples without any questions. You will not be asked for a marriage certificate. Simply book a double room as you would anywhere else.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is public affection acceptable in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a Muslim-majority country and public displays of affection should be kept modest. Holding hands is generally fine, especially in tourist areas, but kissing and overt physical affection in public are frowned upon. Within your riad, hotel, or restaurant you can be more relaxed. Respecting local customs enhances your experience and earns genuine warmth from Moroccans.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for LGBTQ+ couples?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Same-sex relationships are illegal in Morocco, and LGBTQ+ travelers should exercise discretion. Many LGBTQ+ travelers do visit Morocco without incident by being mindful of public behavior. Avoid public displays of affection, and book accommodations at internationally-oriented riads in tourist areas. While attitudes are gradually evolving in larger cities, caution is strongly advised.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a couples trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget-friendly couple trip to Morocco for 7 days costs from 7,000-12,000 MAD including charming guesthouse stays, local dining, and shared tours. A mid-range trip with romantic riads, good restaurants, and key experiences costs from 15,000-25,000 MAD per couple. A luxury romantic getaway with 5-star riads, private desert camps, spa treatments, and fine dining costs from 35,000-70,000 MAD per couple for a week.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a couples trip to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for couples are March to May and September to November. Temperatures are warm but comfortable (20-28 degrees Celsius), the light is perfect for photography, and crowds are smaller. Spring brings wildflowers to the Atlas Mountains and the rose harvest in May. Autumn offers golden light and perfect desert temperatures. Avoid July and August in Marrakech when temperatures exceed 40 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most romantic cities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech is the most popular romantic city with luxury riads, rooftop dining, and easy access to desert experiences. Essaouira offers laid-back coastal romance with sunset beach walks and fresh seafood. Fes provides cultural depth with palatial riads and ancient medina charm. Chefchaouen is a photogenic Blue City with mountain scenery. Most couples combine two or three cities for variety.',
      },
    },
    {
      '@type': 'Question',
      name: 'What romantic experiences can couples enjoy in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Top couple experiences include private rooftop dinners with rose petals and candles (from 600 MAD per couple), sunrise hot air balloon rides (from 2,000 MAD per person), couples hammam spa sessions (from 1,200 MAD for two), sunset camel treks in the Sahara (from 300 MAD per person), private cooking classes (from 400 MAD per couple), luxury desert glamping (from 3,000 MAD per night), and beach horse riding at sunset (from 400 MAD per person).',
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
    image: '/images/hero-marrakech-medina.webp',
    tagline: 'The Red City of Romance and Sensory Magic',
    description:
      'Marrakech is the beating heart of couple travel in Morocco. From the moment you step through the carved wooden door of your riad into a courtyard filled with orange blossom and the soft glow of brass lanterns, you understand why this city captivates lovers from around the world. Luxury riads offer private plunge pools, candlelit rooftop terraces with Atlas Mountain views, and couples hammam experiences that leave you floating. The medina is an adventure for two, with hidden palace gardens, artisan souks bursting with color, and rooftop restaurants where the sunset paints the sky above a thousand-year-old skyline.',
    highlights: [
      'Luxury riads with private courtyards and pools',
      'Candlelit rooftop dinners with mountain views',
      'Couples hammam spa experiences',
      'Jardin Majorelle and Le Jardin Secret strolls',
      'Souk shopping for handmade treasures',
      'Day trips to Agafay Desert or Atlas foothills',
    ],
    bestFor: 'First-time visitors, luxury seekers, foodies',
    budget: 'From 1,500 MAD/night for a romantic riad suite',
  },
  {
    city: 'Essaouira',
    icon: Wind,
    image: '/images/hero-essaouira-ramparts.webp',
    tagline: 'Windswept Atlantic Romance',
    description:
      'Essaouira is the perfect counterpoint to the intensity of Marrakech. This whitewashed coastal town offers a slower, more intimate kind of romance. Walk hand in hand along the ramparts as the Atlantic crashes below, share fresh oysters at the harbor while seagulls wheel overhead, and ride horses together along the wide empty beach at sunset. The medina is small enough to explore without a guide, and the laid-back creative atmosphere, with its art galleries, surf culture, and musicians, creates a bohemian backdrop for couples who prefer quiet beauty over crowds.',
    highlights: [
      'Sunset walks along the beach and ramparts',
      'Horse riding for two on the Atlantic shore',
      'Fresh seafood at the picturesque harbor',
      'Boutique riads in the charming medina',
      'Art galleries and live Gnawa music',
      'Windsurfing and water sports together',
    ],
    bestFor: 'Beach-loving couples, nature seekers, creative spirits',
    budget: 'From 800 MAD/night for a charming boutique riad',
  },
  {
    city: 'Fes',
    icon: BookOpen,
    image: '/images/hero-fes-medina.webp',
    tagline: 'Ancient Romance in the Imperial Capital',
    description:
      'Fes is where you fall in love with Morocco on a deeper level. The ancient medina, the largest car-free urban area on Earth, wraps you in a thousand years of history. Palatial riads here rival museums, with soaring plasterwork ceilings, hand-carved cedar, and zouak painting that took artisans years to complete. The city is quieter and more contemplative than Marrakech, offering couples a chance to lose themselves in winding medieval lanes, discover hidden courtyard gardens, share a tagine in a restored palace, and connect over the weight of centuries of culture.',
    highlights: [
      'Palatial riads with museum-quality architecture',
      'Rooftop dining above the medieval medina',
      'Private guided medina walking tours',
      'Cooking classes in a traditional Fassi home',
      'Madrasa visits with stunning tilework',
      'Artisan workshops and tannery views',
    ],
    bestFor: 'Culture lovers, history enthusiasts, foodies',
    budget: 'From 1,200 MAD/night for a palatial riad suite',
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    image: '/images/hero-chefchaouen-blue.webp',
    tagline: 'The Blue City of Photographs and Quiet Moments',
    description:
      'Chefchaouen is one of the most photogenic places on Earth and a dream destination for couples who love capturing memories. Every corner of this mountain town is washed in shades of blue, from powder to indigo, creating an otherworldly backdrop for couple photos. The pace is deliciously slow: spend mornings sipping coffee at a shaded terrace, afternoons hiking to the Spanish Mosque viewpoint for panoramic valley views, and evenings sharing local goat cheese and freshly baked bread. The Rif Mountain setting adds a touch of alpine romance to an already enchanting town.',
    highlights: [
      'Endless blue-washed streets for couple photos',
      'Spanish Mosque sunset hike for two',
      'Mountain terrace cafes with valley views',
      'Local artisan shopping in quiet souks',
      'Akchour Waterfalls day trip',
      'Rif Mountain walks through pine forests',
    ],
    bestFor: 'Photography enthusiasts, hikers, slow travelers',
    budget: 'From 500 MAD/night for a blue-washed riad',
  },
  {
    city: 'Sahara Desert (Merzouga)',
    icon: Tent,
    image: '/images/hero-sahara-merzouga.webp',
    tagline: 'Starlit Nights at the Edge of the World',
    description:
      'Nothing bonds a couple quite like the shared experience of the Sahara. The journey south through the Dades and Todra gorges is dramatic enough, but when you finally reach the towering golden dunes of Erg Chebbi and climb onto a camel as the sun begins to set, you enter a world that feels like it belongs to just the two of you. Luxury desert camps offer king-size beds under canvas, candlelit dinners in the sand, Berber music by the campfire, and a sky so thick with stars that you lose yourselves in silence. It is the most profoundly romantic night many couples ever experience.',
    highlights: [
      'Sunset camel trek across golden dunes',
      'Luxury glamping with king-size beds',
      'Candlelit dinner served in the desert',
      'Stargazing with zero light pollution',
      'Sunrise from the top of the dunes',
      'Berber music around the campfire',
    ],
    bestFor: 'Adventure-seeking couples, stargazers, photographers',
    budget: 'From 3,000 MAD/night for luxury desert glamping for two',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC RIADS FOR COUPLES
   ═══════════════════════════════════════════════════════════════ */

const romanticRiads = [
  {
    name: 'Riad Yasmine',
    city: 'Marrakech',
    icon: Heart,
    price: 'From 1,800 MAD per night',
    description:
      'The most Instagrammed riad in Morocco. The turquoise plunge pool surrounded by lush greenery and zellige tilework is achingly beautiful. Rooms are elegantly decorated with Berber textiles and brass fixtures. Rooftop candlelit dinners with Atlas views make this a couple favorite.',
    highlights: ['Iconic turquoise plunge pool', 'Rooftop candlelit dinners', 'Atlas Mountain views', 'Zellige-decorated suites'],
  },
  {
    name: 'La Sultana Marrakech',
    city: 'Marrakech',
    icon: Crown,
    price: 'From 4,500 MAD per night',
    description:
      'Five interconnected riads forming one of the most opulent stays in Morocco. Private plunge pools in suites, a rooftop spa with panoramic views, and museum-quality antique interiors. The couples hammam here is legendary among visiting lovers.',
    highlights: ['Private plunge pools in suites', 'Rooftop spa for two', 'Museum-quality interiors', 'Legendary couple hammam'],
  },
  {
    name: 'Dar Ahlam',
    city: 'Skoura Oasis',
    icon: Sparkles,
    price: 'From 6,000 MAD per night',
    description:
      'The "House of Dreams" is one of the most extraordinary romantic stays on Earth. This restored kasbah has just 14 suites with utterly personalized service. There are no menus; the chef prepares whatever you desire. Dinner might be served in the rose garden, on the roof, or in the desert under the stars.',
    highlights: ['Personalized no-menu dining', 'Surprise dinner locations nightly', 'Restored kasbah architecture', 'Private desert excursions'],
  },
  {
    name: 'Riad Fes',
    city: 'Fes',
    icon: Gem,
    price: 'From 2,800 MAD per night',
    description:
      'The finest riad in Fes and a palatial retreat for couples. Soaring zouak-painted ceilings, a candlelit pool courtyard, and an award-winning restaurant. The rooftop bar overlooking the medina is one of the most atmospheric spots in all of Morocco.',
    highlights: ['Zouak-painted palatial ceilings', 'Candlelit pool courtyard', 'Medina-view rooftop bar', 'Award-winning restaurant'],
  },
  {
    name: 'L\'Heure Bleue Palais',
    city: 'Essaouira',
    icon: Building,
    price: 'From 2,200 MAD per night',
    description:
      'Essaouira\'s most elegant address with an indoor pool, cinema room, and rooftop terrace offering 360-degree ocean and medina views. The evening aperitif watching the sun set over the Atlantic from the rooftop is unforgettable for couples.',
    highlights: ['Rooftop sunset terrace', 'Indoor heated pool', 'Ocean and medina views', 'Heritage palace atmosphere'],
  },
  {
    name: 'Lina Ryad & Spa',
    city: 'Chefchaouen',
    icon: Sparkles,
    price: 'From 1,400 MAD per night',
    description:
      'A luxury gem in the Blue City with a heated pool, excellent spa, and beautifully appointed rooms. The rooftop terrace offers stunning views of the blue medina and Rif Mountains. A tranquil base for couples exploring Chefchaouen.',
    highlights: ['Heated pool and spa', 'Rif Mountain panoramic views', 'Blue-washed courtyards', 'Peaceful garden setting'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COUPLE EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const coupleExperiences = [
  {
    activity: 'Private Rooftop Dinner',
    icon: Heart,
    price: 'From 600 MAD per couple',
    duration: '2-3 hours',
    description:
      'A table set with brass lanterns, rose petals, and flickering candles on a private rooftop terrace. A multi-course Moroccan feast served under the stars with views over the medina skyline. Some riads include live Gnawa or Andalusian music. This is Morocco at its most romantic.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    activity: 'Luxury Desert Glamping',
    icon: Tent,
    price: 'From 3,000 MAD per night for two',
    duration: '2-3 days recommended',
    description:
      'Spend the night in a luxury camp at the edge of the Erg Chebbi dunes. King-size beds in lavish tents with en-suite bathrooms, private terraces, and butler service. Candlelit dinner in the sand followed by stargazing with zero light pollution. The silence is profoundly romantic.',
    bestIn: 'Merzouga, Agafay Desert',
  },
  {
    activity: 'Couples Hammam & Spa',
    icon: Sparkles,
    price: 'From 1,200 MAD for two',
    duration: '90 minutes to 2 hours',
    description:
      'Share a private steam room, receive side-by-side body scrubs with black soap and kessa gloves, enjoy argan oil massages, and relax in a private lounge with mint tea and pastries. The best spas use rose petals, orange blossom water, and pure argan oil.',
    bestIn: 'Marrakech, Fes, Essaouira',
  },
  {
    activity: 'Private Cooking Class',
    icon: Utensils,
    price: 'From 400 MAD per couple',
    duration: '3-4 hours',
    description:
      'Learn to make a traditional Moroccan tagine, couscous, or pastilla together. Many classes begin with a guided souk visit to select fresh ingredients. Cook side by side in a beautiful riad kitchen, then enjoy the meal you prepared on a rooftop terrace.',
    bestIn: 'Marrakech, Fes',
  },
  {
    activity: 'Sunrise Hot Air Balloon Ride',
    icon: Compass,
    price: 'From 2,000 MAD per person',
    duration: '3-4 hours (including transfer)',
    description:
      'Float silently over the Marrakech palmeraie and Atlas foothills as the sun rises. The world below is quiet, the air is cool, and the view stretches to the snow-capped High Atlas. Request a private balloon for two for the most intimate experience.',
    bestIn: 'Marrakech',
  },
  {
    activity: 'Sunset Beach Horse Riding',
    icon: Wind,
    price: 'From 400 MAD per person',
    duration: '1.5-2 hours',
    description:
      'Ride along the Atlantic coast on horseback as the sun sets over the ocean. Essaouira\'s long, wide beach is perfect for this experience. The combination of ocean spray, golden light, and riding side by side is profoundly romantic.',
    bestIn: 'Essaouira, Agadir',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY SPOTS FOR COUPLES
   ═══════════════════════════════════════════════════════════════ */

const photoSpots = [
  {
    spot: 'Riad Yasmine Pool',
    city: 'Marrakech',
    description: 'The iconic turquoise pool framed by lush greenery and zellige tilework. Best shot at midday when the light hits the water.',
  },
  {
    spot: 'Bahia Palace Courtyards',
    city: 'Marrakech',
    description: 'Intricate zellige mosaics and painted cedar ceilings create a palatial backdrop. Visit early morning for empty courtyards.',
  },
  {
    spot: 'Chefchaouen Blue Streets',
    city: 'Chefchaouen',
    description: 'Every corner is a photo opportunity. The blue-washed steps and doorways are endlessly photogenic for couple portraits.',
  },
  {
    spot: 'Erg Chebbi Dunes at Sunset',
    city: 'Merzouga',
    description: 'Golden dunes shifting from amber to crimson as the sun sets. The silhouette of two people on a dune ridge is iconic.',
  },
  {
    spot: 'Essaouira Ramparts',
    city: 'Essaouira',
    description: 'Dramatic ocean views from the centuries-old Portuguese fortifications. The golden hour light here is extraordinary.',
  },
  {
    spot: 'Bou Inania Madrasa',
    city: 'Fes',
    description: 'Jaw-dropping carved stucco, zellige tilework, and cedar mashrabiya screens in one of the finest buildings in Morocco.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Budget-Friendly Romance',
    icon: Wallet,
    totalBudget: 'From 7,000 - 12,000 MAD per couple (7 days)',
    color: 'text-green-600',
    bgColor: 'bg-green-600/10',
    description: 'Charming guesthouses, local restaurants, shared desert tours, and walking explorations. Proof that romance in Morocco does not require a fortune.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 3,000 - 5,000 MAD', detail: 'Charming guesthouses, from 500-850 MAD/night' },
      { item: 'Desert excursion (2 days/1 night)', cost: 'From 1,500 - 2,500 MAD', detail: 'Shared tour with standard desert camp' },
      { item: 'Dining (7 days)', cost: 'From 1,500 - 2,500 MAD', detail: 'Local restaurants and street food' },
      { item: 'Activities', cost: 'From 500 - 1,000 MAD', detail: 'Walking tours, free gardens, one hammam' },
      { item: 'Transport', cost: 'From 500 - 1,000 MAD', detail: 'Buses, shared taxis, local transport' },
    ],
  },
  {
    tier: 'Mid-Range Romance',
    icon: Wallet,
    totalBudget: 'From 15,000 - 25,000 MAD per couple (7 days)',
    color: 'text-[var(--color-accent)]',
    bgColor: 'bg-[var(--color-accent)]/10',
    description: 'Beautiful romantic riads, good restaurants, key experiences, and a private desert tour. The sweet spot of quality and value for most couples.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 6,000 - 10,000 MAD', detail: 'Romantic riads with pool, from 1,000-1,700 MAD/night' },
      { item: 'Desert excursion (2 days/1 night)', cost: 'From 3,000 - 5,000 MAD', detail: 'Private tour with mid-range desert camp' },
      { item: 'Dining (7 days)', cost: 'From 2,500 - 4,000 MAD', detail: 'Mix of riad dinners and restaurant meals' },
      { item: 'Activities', cost: 'From 2,000 - 3,500 MAD', detail: 'Hammam, cooking class, guided tours' },
      { item: 'Transport', cost: 'From 1,500 - 2,500 MAD', detail: 'Airport transfers, taxis, intercity travel' },
    ],
  },
  {
    tier: 'Luxury Romance',
    icon: Crown,
    totalBudget: 'From 35,000 - 70,000 MAD per couple (7 days)',
    color: 'text-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]/10',
    description: 'Five-star riads with suites, private transfers throughout, premium desert camps, fine dining, and signature experiences. No detail overlooked.',
    breakdown: [
      { item: 'Accommodation (6 nights)', cost: 'From 15,000 - 30,000 MAD', detail: 'Luxury riad suites, from 2,500-5,000 MAD/night' },
      { item: 'Desert excursion (2 days/1 night)', cost: 'From 6,000 - 12,000 MAD', detail: 'Private tour with luxury glamping' },
      { item: 'Dining (7 days)', cost: 'From 5,000 - 10,000 MAD', detail: 'Fine dining, private rooftop dinners' },
      { item: 'Activities', cost: 'From 5,000 - 10,000 MAD', detail: 'Private balloon, couples spa, cooking class' },
      { item: 'Transport', cost: 'From 4,000 - 8,000 MAD', detail: 'All private transfers, luxury vehicles' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST SEASONS FOR COUPLES
   ═══════════════════════════════════════════════════════════════ */

const bestSeasons = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    rating: 'Excellent',
    ratingColor: 'text-green-600',
    description:
      'The ideal season for couples. Warm days (20-28 degrees), wildflowers in the Atlas, the rose harvest in the Dades Valley in May, and golden light perfect for photography. Gardens are at peak bloom, and the desert is comfortable before summer heat.',
    highlights: ['Wildflower blooms in Atlas valleys', 'Pleasant desert temperatures', 'Rose harvest in Dades (May)', 'Perfect photography light'],
  },
  {
    season: 'Autumn (September - November)',
    icon: Sunset,
    rating: 'Excellent',
    ratingColor: 'text-green-600',
    description:
      'Equally wonderful for couples. Summer heat fades to comfortable warmth, golden afternoon light bathes every surface, and the date harvest brings festive energy to the oases. October and November are widely considered the most pleasant months in Marrakech.',
    highlights: ['Golden autumn light for photos', 'Perfect desert temperatures', 'Date harvest festivals', 'Comfortable across all regions'],
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    rating: 'Good',
    ratingColor: 'text-amber-600',
    description:
      'Mild, sunny city days (16-20 degrees) with cool evenings, creating a cozy atmosphere in lantern-lit riads. Snow-capped Atlas views add drama. Christmas and New Year in Marrakech are magical, with many riads offering special celebrations for couples.',
    highlights: ['Cozy riad evenings', 'Snow-capped Atlas backdrop', 'Festive holiday atmosphere', 'Fewer tourists in January'],
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    rating: 'Not Recommended',
    ratingColor: 'text-red-600',
    description:
      'Inland cities regularly exceed 40 degrees and the desert is dangerously hot. If you must visit in summer, focus on coastal Essaouira, which stays pleasant year-round thanks to Atlantic breezes, or retreat to the cooler Atlas Mountains.',
    highlights: ['Extremely hot inland cities', 'Essaouira remains pleasant', 'Atlas Mountains are cooler', 'Lowest hotel prices'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROMANTIC ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const coupleItinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech: First Impressions',
    icon: Map,
    location: 'Marrakech',
    description:
      'Arrive at Marrakech Menara Airport where your riad\'s private transfer awaits. Check into your romantic riad in the medina and let the courtyard, with its fountain, orange trees, and brass lanterns, set the mood. Spend the afternoon by the pool or exploring the immediate neighborhood. In the evening, enjoy your first rooftop dinner together, watching the sun set behind the Atlas Mountains as the call to prayer echoes across the city.',
    highlights: ['Private airport transfer', 'Riad check-in and courtyard discovery', 'Poolside afternoon', 'Rooftop welcome dinner'],
  },
  {
    day: 2,
    title: 'Marrakech: Medina Magic and Hammam Bliss',
    icon: Sparkles,
    location: 'Marrakech',
    description:
      'Explore the medina together: visit the Bahia Palace, wander the colorful souks, and get intentionally lost in the labyrinthine lanes. After lunch at a shaded terrace, retreat to a couples hammam for side-by-side scrubs, argan oil massages, and mint tea in a private lounge. In the evening, visit Jardin Majorelle at golden hour, then dine at a candlelit restaurant.',
    highlights: ['Bahia Palace visit', 'Souk exploration for two', 'Couples hammam and spa', 'Jardin Majorelle at golden hour'],
  },
  {
    day: 3,
    title: 'Desert Road: Kasbahs and Gorges',
    icon: Mountain,
    location: 'Marrakech to Dades Valley',
    description:
      'Depart with your private driver over the Tizi n\'Tichka pass. Stop at the UNESCO kasbah of Ait Benhaddou for photos together against the ancient fortress, then continue through the Valley of Roses into the spectacular Dades Gorge. Check into a kasbah hotel perched on the rim with staggering canyon views.',
    highlights: ['Tizi n\'Tichka mountain pass', 'Ait Benhaddou couple photos', 'Valley of Roses drive', 'Kasbah hotel with gorge views'],
  },
  {
    day: 4,
    title: 'Sahara: Camel Trek and Desert Night',
    icon: Tent,
    location: 'Dades to Merzouga',
    description:
      'Continue through the Todra Gorge to Merzouga. In the late afternoon, climb onto camels and ride side by side into the golden Erg Chebbi dunes as the sun sets. At your luxury camp, a private candlelit dinner in the sand awaits, followed by Berber drumming by the fire and stargazing under the Milky Way.',
    highlights: ['Todra Gorge visit', 'Sunset camel trek together', 'Candlelit desert dinner', 'Milky Way stargazing'],
  },
  {
    day: 5,
    title: 'Sahara Sunrise and Essaouira',
    icon: Sun,
    location: 'Merzouga to Essaouira (via flight or drive)',
    description:
      'Wake before dawn to watch the sunrise paint the dunes in gold and rose. After a leisurely camp breakfast, fly or drive to Essaouira for a change of scenery. Check into a coastal riad and spend the evening walking the ramparts at sunset, then share fresh seafood at the harbor.',
    highlights: ['Sahara sunrise from the dunes', 'Coastal arrival in Essaouira', 'Rampart sunset walk', 'Harbor seafood dinner'],
  },
  {
    day: 6,
    title: 'Essaouira: Beach and Bohemian Vibes',
    icon: Wind,
    location: 'Essaouira',
    description:
      'A relaxed day by the ocean. Spend the morning browsing art galleries and boutiques in the medina, then head to the beach for a sunset horse ride along the shore. Return for dinner at a rooftop restaurant overlooking the Atlantic, or arrange a private dinner at your riad.',
    highlights: ['Art gallery and boutique browsing', 'Beach horse riding at sunset', 'Atlantic coast relaxation', 'Rooftop seafood dinner'],
  },
  {
    day: 7,
    title: 'Return to Marrakech: Farewell',
    icon: Heart,
    location: 'Essaouira to Marrakech',
    description:
      'Drive back to Marrakech (3 hours) and enjoy a final afternoon together. Pick up souvenirs in the souks, visit a garden, or simply relax at your riad pool. End your trip with a memorable farewell dinner at a palatial restaurant, savoring the flavors and atmosphere one last time before departure.',
    highlights: ['Scenic coastal drive', 'Last-minute souk shopping', 'Final riad pool time', 'Farewell dinner at a palace restaurant'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Morocco a good destination for couples?',
    answer:
      'Morocco is one of the most romantic destinations in the world. Couples enjoy luxury riads with plunge pools, candlelit rooftop dinners overlooking ancient medinas, Sahara desert glamping under the Milky Way, couples hammam experiences, and stunning photography at every turn. The combination of exotic culture, affordable luxury, extraordinary food, and warm hospitality makes Morocco ideal for couples, whether you are celebrating an anniversary, a birthday, a proposal, or simply quality time together.',
  },
  {
    question: 'Can unmarried couples share a hotel room in Morocco?',
    answer:
      'Moroccan law technically prohibits unmarried Moroccan couples from sharing a room, but this rule is very rarely applied to foreign tourists. International hotels, tourist-oriented riads, and guesthouses routinely accommodate unmarried foreign couples without any questions. You will not be asked for a marriage certificate. Simply book a double room as you would anywhere else in the world.',
  },
  {
    question: 'Is public affection acceptable in Morocco?',
    answer:
      'Morocco is a Muslim-majority country and public displays of affection should be kept modest. Holding hands is generally fine, especially in tourist areas like Marrakech and Essaouira, but kissing and overt physical affection in public are frowned upon and can draw unwanted attention. Within your riad, hotel, or restaurant you can be completely relaxed. Respecting local customs enhances your experience and earns genuine warmth from the people you meet.',
  },
  {
    question: 'Is Morocco safe for LGBTQ+ couples?',
    answer:
      'Same-sex relationships are illegal in Morocco, and LGBTQ+ travelers should exercise discretion. Many LGBTQ+ travelers do visit Morocco without incident by being mindful of public behavior and avoiding displays of affection. Book accommodations at internationally-oriented riads in tourist areas where staff are accustomed to diverse guests. While attitudes are gradually evolving in larger cities, caution is strongly advised. Research current conditions before your trip.',
  },
  {
    question: 'How much does a couples trip to Morocco cost?',
    answer:
      'A budget-friendly couple trip for 7 days costs from 7,000-12,000 MAD including guesthouse stays, local dining, and shared tours. A mid-range trip with romantic riads and key experiences costs from 15,000-25,000 MAD per couple. A luxury romantic getaway with 5-star riads, private desert camps, spa treatments, and fine dining costs from 35,000-70,000 MAD per couple for a week. Morocco offers exceptional value compared to European or Caribbean destinations.',
  },
  {
    question: 'What is the best time of year for a couples trip to Morocco?',
    answer:
      'The best months are March to May and September to November. Temperatures are warm but comfortable (20-28 degrees Celsius), the light is perfect for photographs, and crowds are smaller. Spring brings wildflowers and the rose harvest. Autumn offers golden light and perfect desert temperatures. Avoid July and August inland when temperatures exceed 40 degrees, though Essaouira on the coast is pleasant year-round.',
  },
  {
    question: 'What should couples wear in Morocco?',
    answer:
      'Dress modestly in public, covering shoulders and knees, especially in medinas and near mosques. Loose, breathable fabrics work best in the heat. At your riad pool or a private hotel, swimwear is perfectly fine. For rooftop dinners, smart-casual is the norm. Bring layers for desert evenings (surprisingly cold at night), comfortable walking shoes for cobblestones, and a scarf that doubles as sun and sand protection.',
  },
  {
    question: 'What are the most romantic experiences for couples in Morocco?',
    answer:
      'Top couple experiences include private rooftop dinners with rose petals and candles (from 600 MAD per couple), sunrise hot air balloon rides over Marrakech (from 2,000 MAD per person), couples hammam spa sessions (from 1,200 MAD for two), sunset camel treks in the Sahara (from 300 MAD per person), private cooking classes (from 400 MAD per couple), luxury desert glamping (from 3,000 MAD per night), and beach horse riding at sunset in Essaouira (from 400 MAD per person). Seasonal pricing may vary.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoForCouplesPage() {
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
            <span className="text-white">Morocco for Couples</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Heart className="w-4 h-4" />
            Couple Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco for Couples:
            <br className="hidden md:block" /> Your Romantic Escape
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Rooftop dinners under the stars, desert glamping at the edge of the Sahara, couples
            hammam rituals, and the world&apos;s most photogenic streets. The complete guide to
            experiencing Morocco as a couple.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Perfect for Couples
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is not just a honeymoon destination. It is one of the most romantic places
                on Earth for couples at every stage: anniversaries, milestone birthdays, proposals,
                rekindling trips, or simply a week of quality time far from the everyday. The country
                wraps you in beauty from the moment you arrive. Orange blossom drifts through riad
                courtyards. Brass lanterns cast warm light on hand-cut zellige tiles. Rooftop terraces
                open to skies that shift from gold to pink to deep violet as the call to prayer echoes
                across ancient rooftops.
              </p>
              <p>
                What makes Morocco truly special for couples is the range of experiences packed into
                one compact country. In a single week, you can wake in a luxury riad with a private
                plunge pool, ride camels into the Sahara at sunset, share a candlelit dinner in the
                desert under the Milky Way, gallop on horseback along an Atlantic beach, explore a
                medieval medina hand in hand, and be pampered in a rose-petal hammam. No other
                destination at this price point delivers such variety and romance.
              </p>
              <p>
                This guide covers everything couples need to know: the most romantic cities, where
                to stay, experiences designed for two, cultural sensitivity and LGBTQ+ awareness,
                photography spots, the best seasons to visit, a 7-day couple itinerary, and realistic
                budgets from backpacker to luxury. Whether you are planning a romantic Morocco trip as
                a honeymoon alternative or simply want the trip of a lifetime together, this is your
                starting point.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Most Romantic Cities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Romantic Cities in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each city offers a different flavor of romance, from sensory overload in Marrakech
            to windswept coastal walks in Essaouira and starlit desert silence in the Sahara.
          </p>

          <div className="space-y-10">
            {romanticCities.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.city} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={dest.image}
                        alt={`${dest.city} romantic destination for couples in Morocco`}
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

      {/* ── Romantic Riads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Romantic Riads for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From intimate boutique stays to palatial retreats, these riads set the stage for
            an unforgettable romantic trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates and vary by season. Peak season (October-April) and holidays may be 30-50% higher.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {romanticRiads.map((riad) => {
              const RiadIcon = riad.icon;
              return (
                <div key={riad.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RiadIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {riad.name}
                      </h3>
                      <span className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5" />
                        {riad.city}
                      </span>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {riad.price}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{riad.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {riad.highlights.map((highlight, i) => (
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

      {/* ── Couple Experiences ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Unforgettable Couple Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From desert glamping to rooftop dinners and hammam rituals, these are the experiences
            that make a Morocco couple trip truly special.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coupleExperiences.map((item) => {
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

      {/* ── Cultural Sensitivity & LGBTQ+ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cultural Sensitivity for Couples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Public Displays of Affection
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Holding hands is generally fine in tourist areas. Kissing and overt physical
                affection in public are frowned upon. Within your riad, hotel, or restaurant,
                you can be completely relaxed. Respecting this boundary enhances your experience
                and earns genuine warmth from locals, who will often go out of their way for you.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Unmarried Couples
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                While Moroccan law prohibits unmarried Moroccan couples from sharing a room,
                this rule is very rarely applied to foreign tourists. International hotels and
                tourist riads accommodate unmarried foreign couples routinely. You will not be
                asked for a marriage certificate. Book double rooms normally.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                LGBTQ+ Awareness
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Same-sex relationships are illegal in Morocco. LGBTQ+ travelers should exercise
                discretion and avoid public displays of affection. Many LGBTQ+ travelers visit
                Morocco without incident by being mindful. Book internationally-oriented riads
                in tourist areas. While attitudes are slowly evolving in cities like Marrakech,
                caution is strongly advised. Research current conditions before your trip.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Code
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dress modestly in public, covering shoulders and knees, especially in medinas
                and near mosques. Loose, breathable fabrics are ideal. At riad pools and private
                hotels, swimwear is fine. For rooftop dinners, smart-casual is the norm. Bring
                layers for cool desert evenings and a scarf for sun and sand protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Photography Spots for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco is one of the most photogenic countries on Earth. These spots are perfect
            for couple portraits and memories.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            For professional couple photoshoots, hire a local photographer from 1,500 MAD for a 2-hour session. Best light is at sunrise and the hour before sunset.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photoSpots.map((spot) => (
              <div key={spot.spot} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Camera className="w-4 h-4 text-[var(--color-accent)]" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {spot.spot}
                  </h3>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)] mb-2">
                  <MapPin className="w-3 h-3" />
                  {spot.city}
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{spot.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7-Day Couple Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            7-Day Romantic Morocco Itinerary for Couples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A curated week combining medina magic, desert adventure, and coastal relaxation.
            The most romantic route through Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            This itinerary can be customized. Swap Essaouira for Fes for cultural depth, or add Chefchaouen for mountain scenery.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {coupleItinerary.map((day) => {
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
                        <div className="space-y-2">
                          {day.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                              {highlight}
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Couples Trip Budget Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic budgets for every level of couple trip, from budget-friendly to luxury indulgence.
            All prices are for two people for 7 days.
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

      {/* ── Best Time for Couples ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for a Couples Trip to Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing your trip right makes all the difference. Here is what to expect each season.
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

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Tips for Couples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Book Riads Early
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The most romantic riads have only 5-10 rooms and sell out months ahead. Book at
                least 3-6 months in advance for peak season. Mention special occasions when
                booking; many riads offer complimentary rose petals, champagne, or upgrades.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Let Your Riad Arrange Everything
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A good riad is your greatest travel ally. Ask them to arrange rooftop dinners,
                spa bookings, desert excursions, restaurant reservations, and airport transfers.
                Riad staff know the city intimately and can access experiences not available to
                walk-in tourists.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dealing with Touts
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In Marrakech and Fes medinas, you may encounter persistent touts. A polite but
                firm &quot;la, shukran&quot; (no, thank you) is enough. Walking confidently as a
                couple reduces approaches. Do not engage if not interested; smile and keep walking.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Coffee className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Do Not Over-Schedule
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The biggest travel mistake is trying to see everything. Morocco rewards slow
                travel. Leave time for lazy riad mornings by the pool, spontaneous souk wandering,
                and sitting on a rooftop together watching the world. The most romantic moments
                are unplanned.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Travel Insurance
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always purchase comprehensive travel insurance. Ensure it covers medical
                emergencies, trip cancellation, lost luggage, and adventure activities like
                camel riding and hot air balloon flights. Morocco has good private hospitals
                in major cities, but insurance provides essential peace of mind.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tip from 10-20 MAD for small services, from 20-50 MAD for restaurant waiters
                (10% of the bill), and from 50-100 MAD per day for guides and drivers. A tip
                for staff who arrange special setups at your riad is warmly appreciated. Keep
                small bills handy throughout your trip.
              </p>
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/romantic" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Romantic Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The most romantic experiences, destinations, and sunset spots across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/honeymoon" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Gem className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Honeymoon Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Planning a honeymoon? Our dedicated guide covers everything for newlyweds.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-honeymoon-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Honeymoon Itinerary
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A detailed 7-day honeymoon itinerary with luxury riads and desert glamping.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-best-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
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
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
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
            Ready to Plan Your Romantic Morocco Trip?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco awaits with lantern-lit courtyards, desert skies full of stars, rooftop
            dinners above ancient medinas, and memories that will last a lifetime. Start
            planning your couple getaway today.
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

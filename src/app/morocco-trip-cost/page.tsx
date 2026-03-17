import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  DollarSign,
  Plane,
  Bed,
  UtensilsCrossed,
  Bus,
  Ticket,
  ShoppingBag,
  Lightbulb,
  AlertTriangle,
  ArrowRight,
  Info,
  CheckCircle,
  TrendingDown,
  TrendingUp,
  Calendar,
  CreditCard,
  Banknote,
  Landmark,
  Star,
  MapPin,
  Wifi,
  Smartphone,
  Users,
  Clock,
  CircleDot,
  Gem,
  Compass,
  Building,
  Sun,
  Snowflake,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'How Much Does a Trip to Morocco Cost in 2026? | Complete Budget Breakdown',
  description:
    'Complete Morocco trip cost breakdown for 2026. Daily budgets from 350 MAD (backpacker) to 5,000+ MAD (luxury). Flights, accommodation, food, transport, activities, and money-saving tips. Plan your Morocco budget with real prices.',
  keywords: [
    'how much does a trip to Morocco cost',
    'Morocco trip cost',
    'Morocco travel budget',
    'Morocco budget breakdown',
    'Morocco daily budget',
    'Morocco backpacker budget',
    'Morocco luxury travel cost',
    'Morocco accommodation prices',
    'Morocco food prices',
    'Morocco transport costs',
    'Morocco trip cost 2026',
    'Morocco travel expenses',
    'Morocco money saving tips',
    'is Morocco expensive',
    'Morocco cheap travel',
    'Morocco vacation cost',
    'Morocco holiday budget',
    'Morocco currency exchange',
    'Morocco tipping guide',
    'Morocco hidden costs',
  ],
  openGraph: {
    title: 'How Much Does a Trip to Morocco Cost in 2026? | Complete Budget Breakdown',
    description:
      'Complete Morocco trip cost breakdown for every budget tier. From 350 MAD/day backpacker to 5,000+ MAD/day luxury. Real prices for flights, accommodation, food, transport, and activities.',
    url: `${BASE_URL}/morocco-trip-cost`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-market.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan market souk with spices and handicrafts, representing travel costs and shopping in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Much Does a Trip to Morocco Cost in 2026?',
    description:
      'From 350 MAD/day backpacker to 5,000+ MAD luxury. Complete breakdown of flights, hotels, food, transport, and activities with real 2026 prices.',
    images: [`${BASE_URL}/images/hero-morocco-market.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-trip-cost` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-trip-cost`,
  name: 'How Much Does a Trip to Morocco Cost in 2026? | Complete Budget Breakdown',
  description:
    'Complete Morocco trip cost breakdown for 2026. Daily budgets from 350 MAD (backpacker) to 5,000+ MAD (luxury). Flights, accommodation, food, transport, activities, and money-saving tips.',
  url: `${BASE_URL}/morocco-trip-cost`,
  image: `${BASE_URL}/images/hero-morocco-market.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-trip-cost`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Trip Cost', item: `${BASE_URL}/morocco-trip-cost` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a 10-day trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 10-day Morocco trip costs from 3,500 MAD (budget/backpacker), from 10,000 MAD (mid-range), or from 50,000 MAD (luxury) per person, excluding international flights. Budget travelers can manage on from 350 MAD per day, while mid-range travelers spend from 1,000-2,000 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco cheap to travel?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is very affordable compared to Europe and North America. Street food costs from 15-40 MAD, hostel beds from 80 MAD, and local transport from 5 MAD. Mid-range travelers find excellent value with riad stays from 400 MAD and full restaurant meals from 80 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What currency should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Moroccan Dirham (MAD) is the local currency. Bring Euros or US Dollars to exchange upon arrival. ATMs are widely available in cities. Credit cards are accepted at hotels and upscale restaurants but cash is essential for souks, taxis, and street food.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget per day in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget/backpacker: from 350-500 MAD per day. Mid-range: from 1,000-2,000 MAD per day. Luxury: from 3,000-5,000+ MAD per day. These include accommodation, food, transport, and activities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to tip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping is customary in Morocco. Restaurant tips are 10-15% of the bill. For guides, from 100-200 MAD per day is standard. Porters and hotel staff expect from 10-20 MAD. Small tips of from 5-10 MAD are common for small services.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the hidden costs of traveling in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common hidden costs include: tipping culture (budget from 50-100 MAD daily), tourist tax at hotels (from 25-35 MAD per night), unofficial guides seeking tips in medinas, taxi overcharging without meters, and haggling markup on souk purchases. Photography fees at some monuments cost from 10-20 MAD.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: FLIGHT COSTS
   ═══════════════════════════════════════════════════════════════ */

const flightCosts = [
  {
    region: 'Europe (Western)',
    examples: 'London, Paris, Madrid, Amsterdam',
    budget: 'From 500 MAD one-way',
    average: 'From 1,500-3,000 MAD round-trip',
    peak: 'From 3,000-5,000 MAD round-trip',
    note: 'Best deals with Ryanair, easyJet, Transavia. Book 2-3 months ahead.',
  },
  {
    region: 'North America',
    examples: 'New York, Montreal, Washington DC',
    budget: 'From 4,000 MAD one-way',
    average: 'From 7,000-12,000 MAD round-trip',
    peak: 'From 12,000-18,000 MAD round-trip',
    note: 'Royal Air Maroc direct from NYC/Montreal. Via Europe often cheaper.',
  },
  {
    region: 'Middle East & Gulf',
    examples: 'Dubai, Doha, Riyadh',
    budget: 'From 2,500 MAD one-way',
    average: 'From 5,000-9,000 MAD round-trip',
    peak: 'From 9,000-14,000 MAD round-trip',
    note: 'Emirates, Qatar Airways, Saudia. Good connectivity via hubs.',
  },
  {
    region: 'Sub-Saharan Africa',
    examples: 'Dakar, Abidjan, Lagos',
    budget: 'From 2,000 MAD one-way',
    average: 'From 4,000-7,000 MAD round-trip',
    peak: 'From 7,000-11,000 MAD round-trip',
    note: 'Royal Air Maroc has strongest African network from Casablanca.',
  },
  {
    region: 'Asia',
    examples: 'Istanbul, Bangkok, Delhi',
    budget: 'From 3,500 MAD one-way',
    average: 'From 6,000-10,000 MAD round-trip',
    peak: 'From 10,000-16,000 MAD round-trip',
    note: 'Usually 1-2 stops. Turkish Airlines via Istanbul is popular.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION COSTS
   ═══════════════════════════════════════════════════════════════ */

const accommodationCosts = [
  {
    type: 'Hostel Dorm Bed',
    icon: Users,
    budget: 'Budget',
    priceRange: 'From 80-200 MAD per night',
    description: 'Shared dormitory rooms in hostels found in all major cities. Often includes basic breakfast and Wi-Fi. Best options in Marrakech, Fes, and Essaouira.',
    bestFor: 'Backpackers and solo travelers',
  },
  {
    type: 'Budget Guesthouse / Hostel Private',
    icon: Bed,
    budget: 'Budget',
    priceRange: 'From 200-400 MAD per night',
    description: 'Private rooms in guesthouses or hostels. Clean, basic, often with shared bathrooms. Located in or near medinas. Some include breakfast.',
    bestFor: 'Budget travelers wanting privacy',
  },
  {
    type: 'Mid-Range Riad',
    icon: Building,
    budget: 'Mid-Range',
    priceRange: 'From 400-1,000 MAD per night',
    description: 'Traditional Moroccan courtyard houses converted to guesthouses. Private rooms with en-suite bathrooms, breakfast included. Beautiful architecture with rooftop terraces.',
    bestFor: 'Couples and mid-range travelers',
  },
  {
    type: 'Boutique Riad',
    icon: Star,
    budget: 'Mid-Range to Luxury',
    priceRange: 'From 1,000-2,500 MAD per night',
    description: 'Beautifully restored riads with high-end décor, plunge pools, spa services, and gourmet breakfast. Personalized service with typically 4-8 rooms.',
    bestFor: 'Couples and discerning travelers',
  },
  {
    type: 'Luxury Hotel / Resort',
    icon: Gem,
    budget: 'Luxury',
    priceRange: 'From 2,500-8,000 MAD per night',
    description: 'International chain hotels and Moroccan luxury properties. Full amenities: pool, spa, multiple restaurants, concierge. Properties like La Mamounia, Royal Mansour, Amanjena.',
    bestFor: 'Luxury travelers',
  },
  {
    type: 'Desert Camp (Basic)',
    icon: Compass,
    budget: 'Budget to Mid-Range',
    priceRange: 'From 300-600 MAD per night',
    description: 'Basic Berber tents in the Sahara with shared facilities. Includes dinner and breakfast. Part of desert tour packages.',
    bestFor: 'Adventurous travelers on a budget',
  },
  {
    type: 'Desert Camp (Luxury)',
    icon: Gem,
    budget: 'Luxury',
    priceRange: 'From 1,500-5,000 MAD per night',
    description: 'Luxury glamping in the Sahara with private tents, en-suite bathrooms, fine dining under the stars, and private camel rides.',
    bestFor: 'Luxury travelers seeking unique experiences',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD COSTS
   ═══════════════════════════════════════════════════════════════ */

const foodCosts = [
  {
    category: 'Street Food & Quick Bites',
    icon: UtensilsCrossed,
    items: [
      { item: 'Msemen (flatbread) with honey', price: 'From 5 MAD' },
      { item: 'Sandwich (kefta, shawarma, or tuna)', price: 'From 15-25 MAD' },
      { item: 'Harira soup (bowl)', price: 'From 10-15 MAD' },
      { item: 'Snail soup (babbouche)', price: 'From 10 MAD' },
      { item: 'Freshly squeezed orange juice', price: 'From 5-10 MAD' },
      { item: 'Moroccan mint tea', price: 'From 10-15 MAD' },
      { item: 'Pastilla (savory pastry)', price: 'From 20-30 MAD' },
      { item: 'Brochettes (kebabs)', price: 'From 20-35 MAD' },
    ],
  },
  {
    category: 'Local Restaurants',
    icon: UtensilsCrossed,
    items: [
      { item: 'Tagine (chicken or vegetable)', price: 'From 40-70 MAD' },
      { item: 'Couscous (Friday special)', price: 'From 40-60 MAD' },
      { item: 'Grilled fish (Essaouira)', price: 'From 50-80 MAD' },
      { item: 'Tanjia (Marrakech specialty)', price: 'From 60-90 MAD' },
      { item: 'Full meal with bread and salads', price: 'From 60-100 MAD' },
      { item: 'Soft drink or water', price: 'From 10-15 MAD' },
    ],
  },
  {
    category: 'Mid-Range Restaurants',
    icon: Star,
    items: [
      { item: 'Starter + main course', price: 'From 120-200 MAD' },
      { item: 'Full three-course meal', price: 'From 200-350 MAD' },
      { item: 'Bottle of Moroccan wine', price: 'From 150-250 MAD' },
      { item: 'Cocktails (hotel bars)', price: 'From 80-150 MAD' },
      { item: 'Riad dinner experience', price: 'From 250-400 MAD' },
    ],
  },
  {
    category: 'Fine Dining & Luxury',
    icon: Gem,
    items: [
      { item: 'Tasting menu (upscale riad)', price: 'From 500-800 MAD' },
      { item: 'Hotel restaurant dinner', price: 'From 600-1,200 MAD' },
      { item: 'Fine dining with wine pairing', price: 'From 800-1,500 MAD' },
      { item: 'Private chef experience', price: 'From 1,500-3,000 MAD' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT COSTS
   ═══════════════════════════════════════════════════════════════ */

const transportCosts = [
  { mode: 'ONCF Train (2nd class)', route: 'Marrakech to Fes', price: 'From 200 MAD', note: 'Comfortable, scenic 7-hour journey. Book at station.' },
  { mode: 'ONCF Train (1st class)', route: 'Marrakech to Fes', price: 'From 300 MAD', note: 'Reserved seating, air-conditioned, quieter.' },
  { mode: 'Al Boraq High-Speed Train', route: 'Casablanca to Tangier', price: 'From 250 MAD', note: '2 hours 10 minutes. Africa\'s only high-speed rail.' },
  { mode: 'CTM Bus', route: 'Major city to city', price: 'From 80-200 MAD', note: 'Reliable, air-conditioned. Book online at ctm.ma.' },
  { mode: 'Supratours Bus', route: 'Major city to city', price: 'From 80-180 MAD', note: 'Affiliated with ONCF. Connects rail-less cities.' },
  { mode: 'Grand Taxi (shared)', route: 'City to city (per seat)', price: 'From 30-100 MAD', note: 'Shared Mercedes sedans. Fast but crowded (6 passengers).' },
  { mode: 'Petit Taxi', route: 'Within city', price: 'From 10-30 MAD', note: 'Metered (insist on meter). Short city rides.' },
  { mode: 'Ride-hailing (inDrive/Careem)', route: 'Within city', price: 'From 15-50 MAD', note: 'Available in Casablanca, Marrakech, Rabat. Set your price.' },
  { mode: 'Car Rental (economy)', route: 'Per day, basic insurance', price: 'From 250-400 MAD', note: 'Manual transmission. Gas from 14 MAD/liter. Tolls extra.' },
  { mode: 'Car Rental (SUV)', route: 'Per day, full insurance', price: 'From 600-1,200 MAD', note: 'Recommended for Atlas Mountains and southern routes.' },
  { mode: 'Airport Transfer (shared)', route: 'Marrakech airport to medina', price: 'From 70 MAD', note: 'Shared shuttle bus or arranged via hostel/hotel.' },
  { mode: 'Airport Transfer (private)', route: 'Marrakech airport to medina', price: 'From 150-250 MAD', note: 'Pre-booked private driver. Recommended for first-timers.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVITY COSTS
   ═══════════════════════════════════════════════════════════════ */

const activityCosts = [
  { activity: '3-Day Sahara Desert Tour (from Marrakech)', budget: 'From 800 MAD', midRange: 'From 1,500 MAD', luxury: 'From 4,000 MAD', note: 'Includes transport, meals, camp. Luxury adds private camp, 4x4.' },
  { activity: 'Cooking Class (half-day)', budget: 'From 250 MAD', midRange: 'From 400 MAD', luxury: 'From 800 MAD', note: 'Includes market visit, ingredients, and meal. Available in all major cities.' },
  { activity: 'Traditional Hammam', budget: 'From 50 MAD', midRange: 'From 300 MAD', luxury: 'From 1,500 MAD', note: 'Public hammam vs. boutique spa vs. luxury resort spa.' },
  { activity: 'Guided Medina Tour', budget: 'From 100 MAD', midRange: 'From 300 MAD', luxury: 'From 800 MAD', note: 'Unofficial guide vs. licensed guide vs. private cultural experience.' },
  { activity: 'Atlas Mountains Day Hike', budget: 'From 200 MAD', midRange: 'From 500 MAD', luxury: 'From 1,500 MAD', note: 'Self-guided with mule vs. guided hike vs. private luxury trek.' },
  { activity: 'Camel Ride (1-2 hours)', budget: 'From 150 MAD', midRange: 'From 300 MAD', luxury: 'From 600 MAD', note: 'Beach camel ride vs. desert edge vs. private sunset experience.' },
  { activity: 'Surfing Lesson (2 hours)', budget: 'From 200 MAD', midRange: 'From 400 MAD', luxury: 'From 800 MAD', note: 'Group lesson vs. semi-private vs. private with video analysis.' },
  { activity: 'Museum / Monument Entry', budget: 'From 10 MAD', midRange: 'From 70 MAD', luxury: 'From 70 MAD', note: 'Many museums from 10-70 MAD. Some monuments free on certain days.' },
  { activity: 'Hot Air Balloon (Marrakech)', budget: '-', midRange: 'From 1,800 MAD', luxury: 'From 3,000 MAD', note: 'Standard vs. private flight. Includes breakfast. Seasonal.' },
  { activity: 'Quad Biking (Agafay/Palmeraie)', budget: 'From 300 MAD', midRange: 'From 500 MAD', luxury: 'From 1,000 MAD', note: '1-hour to half-day. Group vs. private. Dust protection included.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAILY BUDGET TIERS
   ═══════════════════════════════════════════════════════════════ */

const budgetTiers = [
  {
    tier: 'Budget / Backpacker',
    icon: TrendingDown,
    color: 'var(--color-accent)',
    dailyTotal: 'From 350-500 MAD / day',
    tenDayTotal: 'From 3,500-5,000 MAD (10 days)',
    breakdown: [
      { category: 'Accommodation', amount: 'From 80-200 MAD', detail: 'Hostel dorm or budget guesthouse' },
      { category: 'Food', amount: 'From 80-120 MAD', detail: 'Street food, local restaurants, self-catering' },
      { category: 'Transport', amount: 'From 30-60 MAD', detail: 'Walking, shared grands taxis, buses' },
      { category: 'Activities', amount: 'From 50-80 MAD', detail: 'Free walking, public hammam, budget tours' },
      { category: 'Miscellaneous', amount: 'From 30-50 MAD', detail: 'Water, SIM data, tips, small purchases' },
    ],
    tips: [
      'Stay in hostel dorms in cities, Couchsurf in smaller towns',
      'Eat where locals eat: street food stalls and hole-in-the-wall restaurants',
      'Use CTM and Supratours buses instead of trains for cheaper routes',
      'Walk everywhere within medinas (they are pedestrian-only anyway)',
      'Visit free attractions: beaches, medina wandering, mosques (exterior), public squares',
    ],
  },
  {
    tier: 'Mid-Range / Comfortable',
    icon: CircleDot,
    color: 'var(--color-gold)',
    dailyTotal: 'From 1,000-2,000 MAD / day',
    tenDayTotal: 'From 10,000-20,000 MAD (10 days)',
    breakdown: [
      { category: 'Accommodation', amount: 'From 400-1,000 MAD', detail: 'Mid-range riad with breakfast' },
      { category: 'Food', amount: 'From 200-400 MAD', detail: 'Mix of local and mid-range restaurants' },
      { category: 'Transport', amount: 'From 100-200 MAD', detail: 'Trains, private taxis, occasional ride-hailing' },
      { category: 'Activities', amount: 'From 200-300 MAD', detail: 'Guided tours, cooking class, spa visit' },
      { category: 'Miscellaneous', amount: 'From 100-150 MAD', detail: 'Tips, souvenirs, SIM card, photography fees' },
    ],
    tips: [
      'Book riads directly for better rates than booking platforms',
      'Mix street food lunches with sit-down restaurant dinners',
      'Take first-class trains for comfort on long routes',
      'Book desert tours in advance online for better deals than medina touts',
      'Visit souks on weekday mornings for better haggling leverage',
    ],
  },
  {
    tier: 'Luxury / Premium',
    icon: Gem,
    color: 'var(--color-gold)',
    dailyTotal: 'From 3,000-5,000+ MAD / day',
    tenDayTotal: 'From 30,000-50,000+ MAD (10 days)',
    breakdown: [
      { category: 'Accommodation', amount: 'From 2,000-8,000 MAD', detail: 'Boutique riad, luxury hotel, or resort' },
      { category: 'Food', amount: 'From 500-1,200 MAD', detail: 'Fine dining, hotel restaurants, wine pairing' },
      { category: 'Transport', amount: 'From 200-500 MAD', detail: 'Private driver, first-class train, airport transfers' },
      { category: 'Activities', amount: 'From 500-1,500 MAD', detail: 'Private tours, luxury spa, hot air balloon' },
      { category: 'Miscellaneous', amount: 'From 200-500 MAD', detail: 'Premium shopping, tips, photography, premium SIM' },
    ],
    tips: [
      'Book La Mamounia, Royal Mansour, or Amanjena for the ultimate Morocco experience',
      'Hire a private driver for the entire trip (from 800-1,200 MAD per day)',
      'Arrange private cooking classes with a well-known Moroccan chef',
      'Stay in a luxury Sahara camp with private tent and stargazing telescope',
      'Commission custom leather goods and ceramics directly from artisans',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: 10-DAY TRIP EXAMPLES
   ═══════════════════════════════════════════════════════════════ */

const tenDayExamples = [
  {
    tier: 'Budget Backpacker',
    icon: TrendingDown,
    route: 'Marrakech (3) > Essaouira (2) > Fes (3) > Chefchaouen (2)',
    items: [
      { item: 'Flights (Europe round-trip)', cost: 'From 2,000 MAD' },
      { item: 'Hostel dorms (10 nights)', cost: 'From 1,000 MAD' },
      { item: 'Food (street food + local)', cost: 'From 1,000 MAD' },
      { item: 'Transport (buses + shared taxis)', cost: 'From 400 MAD' },
      { item: 'Activities (hammam, walking tours)', cost: 'From 300 MAD' },
      { item: 'SIM card + data', cost: 'From 50 MAD' },
      { item: 'Tips + miscellaneous', cost: 'From 250 MAD' },
    ],
    total: 'From 5,000 MAD total (excl. flights)',
    withFlights: 'From 7,000 MAD total (with flights from Europe)',
  },
  {
    tier: 'Mid-Range Comfort',
    icon: CircleDot,
    route: 'Marrakech (3) > Sahara Tour (3) > Fes (2) > Chefchaouen (2)',
    items: [
      { item: 'Flights (Europe round-trip)', cost: 'From 2,500 MAD' },
      { item: 'Riads with breakfast (10 nights)', cost: 'From 6,000 MAD' },
      { item: 'Food (mixed dining)', cost: 'From 2,500 MAD' },
      { item: 'Transport (trains + private taxis)', cost: 'From 1,500 MAD' },
      { item: '3-Day Sahara Tour', cost: 'From 1,500 MAD' },
      { item: 'Activities (cooking class, spa, tours)', cost: 'From 1,500 MAD' },
      { item: 'Shopping (souvenirs)', cost: 'From 1,000 MAD' },
      { item: 'Tips + miscellaneous', cost: 'From 500 MAD' },
    ],
    total: 'From 15,000 MAD total (excl. flights)',
    withFlights: 'From 17,500 MAD total (with flights from Europe)',
  },
  {
    tier: 'Luxury Experience',
    icon: Gem,
    route: 'Marrakech (4) > Sahara Luxury Camp (2) > Fes (2) > Tangier (2)',
    items: [
      { item: 'Flights (business class, Europe)', cost: 'From 12,000 MAD' },
      { item: 'Luxury hotels/riads (10 nights)', cost: 'From 30,000 MAD' },
      { item: 'Fine dining + wine', cost: 'From 8,000 MAD' },
      { item: 'Private driver (10 days)', cost: 'From 10,000 MAD' },
      { item: 'Luxury Sahara camp (2 nights)', cost: 'From 8,000 MAD' },
      { item: 'Activities (private tours, spa, balloon)', cost: 'From 8,000 MAD' },
      { item: 'Premium shopping', cost: 'From 5,000 MAD' },
      { item: 'Tips + miscellaneous', cost: 'From 2,000 MAD' },
    ],
    total: 'From 71,000 MAD total (excl. flights)',
    withFlights: 'From 83,000 MAD total (with business flights)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL PRICE VARIATIONS
   ═══════════════════════════════════════════════════════════════ */

const seasonalPricing = [
  {
    season: 'Peak Season',
    months: 'October - April',
    icon: Sun,
    priceImpact: '+20-40% on accommodation',
    description: 'Best weather for sightseeing. Christmas/New Year and Easter see the highest prices. Book 2-3 months ahead for popular riads. Desert tours also peak.',
    tips: 'Book accommodation and desert tours well in advance. Consider lesser-known cities like Meknes or Tetouan for better rates.',
  },
  {
    season: 'Shoulder Season',
    months: 'May, September',
    icon: Calendar,
    priceImpact: 'Standard pricing',
    description: 'Excellent time to visit. Warm but not extreme. Good availability and standard pricing. May is particularly pleasant in the north and coast.',
    tips: 'Best value period. You get good weather with lower prices and fewer crowds than peak season.',
  },
  {
    season: 'Low Season',
    months: 'June - August',
    icon: Snowflake,
    priceImpact: '-20-40% on accommodation',
    description: 'Extremely hot inland (40-48 degrees in Marrakech, Fes, and the desert). Coastal cities (Essaouira, Agadir, Tangier) remain pleasant. Ramadan may overlap.',
    tips: 'Focus on coastal cities and the north. Inland accommodation drops significantly. Great for beach holidays and surfing.',
  },
  {
    season: 'Ramadan Period',
    months: 'Varies yearly',
    icon: Calendar,
    priceImpact: 'Mixed - some discounts, some closures',
    description: 'Many local restaurants close during the day. Tourist restaurants remain open. A unique cultural experience but requires planning. Some riads offer discounts.',
    tips: 'Hotel restaurants stay open for tourists. Carry water and snacks for daytime. Experience iftar (breaking fast) dinners.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MONEY-SAVING TIPS
   ═══════════════════════════════════════════════════════════════ */

const moneySavingTips = [
  {
    tip: 'Eat Where Locals Eat',
    icon: UtensilsCrossed,
    description: 'Skip the tourist-facing restaurants on main squares. Walk two streets deeper into the medina or visit the ville nouvelle. A tagine that costs from 90 MAD on Jemaa el-Fna costs from 40 MAD in a local neighborhood.',
    savings: 'Save from 50-100 MAD per meal',
  },
  {
    tip: 'Stay in the Ville Nouvelle',
    icon: Building,
    description: 'Medina riads are atmospheric but come at a premium. Hotels and guesthouses in the new town (ville nouvelle) are often 30-50% cheaper for equivalent quality.',
    savings: 'Save from 100-300 MAD per night',
  },
  {
    tip: 'Use CTM or Supratours Buses',
    icon: Bus,
    description: 'Comfortable, air-conditioned, and significantly cheaper than trains for many routes. Marrakech to Essaouira by bus is from 80 MAD vs. from 200 MAD by grand taxi.',
    savings: 'Save from 50-120 MAD per journey',
  },
  {
    tip: 'Haggle Properly in Souks',
    icon: ShoppingBag,
    description: 'Start at 30-40% of the first quoted price and work toward 50-60%. Walk away if the price is too high. The vendor will often call you back. Never buy from the first shop.',
    savings: 'Save 40-60% on purchases',
  },
  {
    tip: 'Book Desert Tours Online',
    icon: Compass,
    description: 'Medina touts add 30-50% commission. Book directly with operators online or through your riad. A 3-day Sahara tour that touts sell for from 2,000 MAD can be found for from 1,000 MAD online.',
    savings: 'Save from 500-1,000 MAD per tour',
  },
  {
    tip: 'Exchange Currency Wisely',
    icon: Banknote,
    description: 'Airport exchange rates are terrible (5-10% markup). Use ATMs in the city center. Avoid exchanging in tourist areas. Some banks charge zero ATM fees for foreign cards.',
    savings: 'Save 5-10% on all cash',
  },
  {
    tip: 'Drink Tap Water (Filtered) or Buy Wholesale',
    icon: CircleDot,
    description: 'Buy 5-liter bottles from supermarkets (from 8 MAD) instead of tourist-priced 0.5L bottles (from 10 MAD). Alternatively, carry a filter bottle and drink tap water safely.',
    savings: 'Save from 30-50 MAD per day',
  },
  {
    tip: 'Travel During Shoulder Season',
    icon: Calendar,
    description: 'May and September offer the best balance of weather, prices, and crowds. Accommodation can be 20-40% cheaper than peak season. Desert tours also drop in price.',
    savings: 'Save 20-40% on accommodation',
  },
  {
    tip: 'Get a Moroccan SIM Card',
    icon: Smartphone,
    description: 'Buy a prepaid SIM from Maroc Telecom, Orange, or inwi at the airport or any shop. From 30-50 MAD for SIM plus several GB of data. Far cheaper than international roaming.',
    savings: 'Save from 100+ MAD per day vs. roaming',
  },
  {
    tip: 'Skip the Paid Guides at Monuments',
    icon: Landmark,
    description: 'Many monuments have plaques and information in English. Self-guided visits are perfectly doable. Download offline maps and audio guides before arriving.',
    savings: 'Save from 100-300 MAD per site',
  },
  {
    tip: 'Take the Public Hammam',
    icon: CircleDot,
    description: 'A public hammam experience from 50 MAD is often more authentic than a luxury spa from 500 MAD. Buy your own savon beldi and kessa glove from an herbalist for from 35 MAD total.',
    savings: 'Save from 250-450 MAD per visit',
  },
  {
    tip: 'Insist on Taxi Meters',
    icon: Bus,
    description: 'Petit taxis are legally required to use meters. Always insist. A metered ride across Marrakech costs from 15-25 MAD. Without the meter, drivers often charge from 50-100 MAD.',
    savings: 'Save from 25-75 MAD per ride',
  },
  {
    tip: 'Book Flights via Budget Airlines',
    icon: Plane,
    description: 'Ryanair, easyJet, Transavia, and Wizz Air fly to Morocco from Europe for as little as from 500 MAD one-way. Be flexible with dates and book 2-3 months ahead.',
    savings: 'Save from 1,000-3,000 MAD on flights',
  },
  {
    tip: 'Cook Simple Meals',
    icon: UtensilsCrossed,
    description: 'Many hostels and riads have kitchens. Buy fresh produce from the souk: tomatoes, bread, cheese, and fruit for from 20-30 MAD total. Perfect for breakfast and lunch.',
    savings: 'Save from 50-100 MAD per day',
  },
  {
    tip: 'Use Free Walking Tours',
    icon: MapPin,
    description: 'Several companies offer free walking tours in Marrakech, Fes, and Casablanca (tip-based). A great way to orient yourself and learn history without the cost of a private guide.',
    savings: 'Save from 200-500 MAD per tour',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HIDDEN COSTS
   ═══════════════════════════════════════════════════════════════ */

const hiddenCosts = [
  {
    cost: 'Tourist Tax (Taxe de Séjour)',
    amount: 'From 25-35 MAD per person per night',
    icon: Landmark,
    description: 'Charged at all classified hotels and riads. Often not included in online booking prices. Budget from 250-350 MAD for a 10-night trip.',
  },
  {
    cost: 'Tipping Culture',
    amount: 'From 50-100 MAD per day',
    icon: Banknote,
    description: 'Tips are expected everywhere: restaurants (10-15%), hotel porters (from 10-20 MAD), taxi roundups, guides (from 100-200 MAD/day), and anyone who provides a service. Budget from 50-100 MAD daily.',
  },
  {
    cost: 'Unofficial Medina Guides',
    amount: 'From 50-200 MAD demanded',
    icon: AlertTriangle,
    description: 'Locals who offer to "help" you find your riad or "show" you the tanneries will ask for money. Politely decline or agree on a price before accepting help. Budget from 20 MAD if you accept.',
  },
  {
    cost: 'Photography Fees',
    amount: 'From 10-20 MAD per photo',
    icon: AlertTriangle,
    description: 'Some monuments charge for cameras. People in traditional dress or with animals in tourist areas expect from 10-20 MAD for photos. Always ask before photographing people.',
  },
  {
    cost: 'Taxi Overcharging',
    amount: 'From 30-80 MAD extra per ride',
    icon: Bus,
    description: 'Taxi drivers regularly overcharge tourists, especially from airports and train stations. Always insist on the meter, agree on price before getting in, or use ride-hailing apps.',
  },
  {
    cost: 'Souk Markup',
    amount: '200-400% above fair price',
    icon: ShoppingBag,
    description: 'Initial asking prices in souks are typically 3-5 times the fair price. Research prices online before shopping. The "my friend has a shop" ploy is always a commission scheme.',
  },
  {
    cost: 'ATM Fees',
    amount: 'From 30-50 MAD per withdrawal',
    icon: CreditCard,
    description: 'Moroccan ATMs charge from 30-50 MAD per foreign card withdrawal. Withdraw larger amounts less frequently. Some international banks reimburse ATM fees.',
  },
  {
    cost: 'Baggage Fees (Budget Airlines)',
    amount: 'From 200-500 MAD per bag',
    icon: Plane,
    description: 'Budget airlines charge for checked baggage. A cheap flight can double in price with baggage. Pack carry-on only if possible.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SHOPPING COSTS
   ═══════════════════════════════════════════════════════════════ */

const shoppingCosts = [
  { item: 'Leather bag (handmade)', fairPrice: 'From 200-500 MAD', touristPrice: 'From 600-1,500 MAD' },
  { item: 'Leather babouche slippers', fairPrice: 'From 60-150 MAD', touristPrice: 'From 200-400 MAD' },
  { item: 'Ceramic tagine (decorative)', fairPrice: 'From 80-200 MAD', touristPrice: 'From 300-600 MAD' },
  { item: 'Argan oil (1 liter, cosmetic)', fairPrice: 'From 200-350 MAD', touristPrice: 'From 500-900 MAD' },
  { item: 'Moroccan rug (small, 1x1.5m)', fairPrice: 'From 500-1,500 MAD', touristPrice: 'From 2,000-5,000 MAD' },
  { item: 'Moroccan rug (large, 2x3m)', fairPrice: 'From 2,000-5,000 MAD', touristPrice: 'From 6,000-15,000 MAD' },
  { item: 'Spice set (gift box)', fairPrice: 'From 30-60 MAD', touristPrice: 'From 100-200 MAD' },
  { item: 'Moroccan lantern (brass)', fairPrice: 'From 150-400 MAD', touristPrice: 'From 400-1,000 MAD' },
  { item: 'Silver berber jewelry', fairPrice: 'From 100-500 MAD', touristPrice: 'From 300-1,200 MAD' },
  { item: 'Zellige tile set (coasters)', fairPrice: 'From 50-100 MAD', touristPrice: 'From 150-300 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CURRENCY & EXCHANGE
   ═══════════════════════════════════════════════════════════════ */

const currencyTips = [
  {
    tip: 'Best Exchange Method',
    icon: Banknote,
    description: 'ATMs in city centers offer the best rates. Withdraw from 2,000-3,000 MAD at a time to minimize per-transaction fees. Bank ATMs (BMCE, Attijariwafa) are most reliable.',
  },
  {
    tip: 'What to Bring',
    icon: CreditCard,
    description: 'Bring Euros or US Dollars as backup. Both are easily exchanged. British Pounds are also accepted at exchange bureaus but less universally.',
  },
  {
    tip: 'Credit Card Acceptance',
    icon: CreditCard,
    description: 'Hotels, upscale restaurants, and some shops accept Visa and Mastercard. Cash is king in souks, for taxis, street food, and small businesses. Carry cash always.',
  },
  {
    tip: 'Avoid Airport Exchange',
    icon: AlertTriangle,
    description: 'Airport exchange rates have 5-10% markup. Only exchange a small amount (from 200-300 MAD) for the taxi to your hotel, then use city ATMs.',
  },
  {
    tip: 'Beware Dynamic Currency Conversion',
    icon: AlertTriangle,
    description: 'When paying by card, always choose to pay in MAD, not your home currency. Dynamic currency conversion adds 3-5% in hidden fees.',
  },
  {
    tip: 'Keep Small Bills',
    icon: Banknote,
    description: 'Many taxi drivers and small vendors cannot break 200 MAD notes. Keep a supply of 20 MAD and 50 MAD notes for daily expenses and tips.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SIM CARD & CONNECTIVITY
   ═══════════════════════════════════════════════════════════════ */

const simCardOptions = [
  { provider: 'Maroc Telecom', simCost: 'From 30 MAD', dataPlan: 'From 20 MAD for 5GB', coverage: 'Best overall coverage, especially rural', note: 'Largest network. Recommended for Sahara and mountain trips.' },
  { provider: 'Orange Morocco', simCost: 'From 30 MAD', dataPlan: 'From 20 MAD for 5GB', coverage: 'Good urban coverage', note: 'Good data speeds in cities. Holiday tourist packages available.' },
  { provider: 'inwi', simCost: 'From 20 MAD', dataPlan: 'From 15 MAD for 3GB', coverage: 'Good urban, limited rural', note: 'Cheapest option. Fine for city-only trips.' },
  { provider: 'eSIM (Airalo/Holafly)', simCost: 'From 80-150 MAD', dataPlan: 'Included (1-10GB)', coverage: 'Depends on partner network', note: 'No physical SIM needed. Buy before arrival. Data only, no calls.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TIPPING GUIDE
   ═══════════════════════════════════════════════════════════════ */

const tippingGuide = [
  { service: 'Restaurant', amount: '10-15% of bill', note: 'Leave cash on the table. Not always included in the bill.' },
  { service: 'Cafe / Mint Tea', amount: 'From 2-5 MAD', note: 'Round up or leave small change.' },
  { service: 'Hotel Porter', amount: 'From 10-20 MAD per bag', note: 'Give directly when they carry your bags.' },
  { service: 'Hotel Housekeeping', amount: 'From 20-50 MAD per stay', note: 'Leave at end of stay on the bed or with a note.' },
  { service: 'Riad Staff', amount: 'From 50-100 MAD per stay', note: 'A collective tip at checkout split among staff.' },
  { service: 'Taxi Driver', amount: 'Round up to nearest 5 MAD', note: 'Not mandatory but appreciated.' },
  { service: 'Licensed Tour Guide', amount: 'From 100-200 MAD per day', note: 'Higher for exceptional service or private tours.' },
  { service: 'Desert Tour Driver/Guide', amount: 'From 100-200 MAD per day', note: 'Per guide. Give at end of tour.' },
  { service: 'Hammam Kessala (Scrubber)', amount: 'From 20-50 MAD', note: 'Essential. This is how they earn most of their income.' },
  { service: 'Parking Attendant', amount: 'From 5-10 MAD', note: 'The informal guardians who watch your car.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a 10-day trip to Morocco cost?',
    answer: 'A 10-day Morocco trip costs from 3,500 MAD (budget/backpacker), from 10,000-20,000 MAD (mid-range), or from 30,000-50,000+ MAD (luxury) per person, excluding international flights. From Europe, budget flights add from 1,500-3,000 MAD round-trip. From North America, add from 7,000-12,000 MAD round-trip.',
  },
  {
    question: 'Is Morocco expensive compared to other destinations?',
    answer: 'Morocco is one of the most affordable destinations reachable from Europe. It is significantly cheaper than Southern Europe, comparable to Turkey and Egypt, and slightly more expensive than Southeast Asia. A backpacker can survive on from 350 MAD per day, which is difficult to achieve in most European countries.',
  },
  {
    question: 'What currency should I bring to Morocco?',
    answer: 'The Moroccan Dirham (MAD) is the local currency. Bring Euros or US Dollars as backup. ATMs are widely available in cities and towns. Credit cards are accepted at hotels and upscale restaurants, but cash is essential for souks, taxis, street food, and small businesses. The Dirham is a restricted currency and cannot be purchased outside Morocco.',
  },
  {
    question: 'How much should I budget per day in Morocco?',
    answer: 'Budget/backpacker: from 350-500 MAD per day. Mid-range: from 1,000-2,000 MAD per day. Luxury: from 3,000-5,000+ MAD per day. These figures include accommodation, food, local transport, and activities. International flights are extra.',
  },
  {
    question: 'Do I need to tip in Morocco?',
    answer: 'Tipping is customary and expected in Morocco. Restaurants: 10-15%. Hotel porters: from 10-20 MAD per bag. Tour guides: from 100-200 MAD per day. Hammam attendants: from 20-50 MAD. Taxi drivers: round up to the nearest 5 MAD. Budget from 50-100 MAD per day for tips across all services.',
  },
  {
    question: 'What are the hidden costs of traveling in Morocco?',
    answer: 'The main hidden costs are: tourist tax at hotels (from 25-35 MAD per night), tipping culture (from 50-100 MAD daily), unofficial medina guides requesting money, taxi overcharging without meters, ATM withdrawal fees (from 30-50 MAD), and inflated souk prices requiring haggling. Photography fees at some sites cost from 10-20 MAD.',
  },
  {
    question: 'Is it cheaper to book Morocco tours in advance or on arrival?',
    answer: 'Both have merits. Booking online in advance typically saves 20-30% on multi-day tours (like Sahara trips) compared to medina tout prices. However, day activities and cooking classes can sometimes be found cheaper locally. The best approach is to book major tours online and negotiate smaller activities on the ground.',
  },
  {
    question: 'Should I carry cash or use cards in Morocco?',
    answer: 'Carry both, but prioritize cash. Souks, taxis, street food, small restaurants, and most local businesses are cash-only. Hotels, upscale restaurants, and some shops accept Visa/Mastercard. Withdraw cash from ATMs in city centers for the best rates. Keep small bills (20 MAD and 50 MAD notes) for daily expenses.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTripCostPage() {
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
            backgroundImage: 'url(/images/hero-morocco-market.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Trip Cost</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <DollarSign className="w-4 h-4" />
            Travel Budget Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            How Much Does a Trip
            <br className="hidden md:block" /> to Morocco Cost?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Complete 2026 cost breakdown from 350 MAD/day backpacker budgets to
            5,000+ MAD/day luxury experiences. Real prices, no guesswork.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: Incredible Value at Every Budget Level
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most rewarding travel destinations in the world, and one of the
                most affordable. Whether you are a backpacker stretching every Dirham or a luxury
                traveler seeking world-class experiences, Morocco delivers extraordinary value.
              </p>
              <p>
                A backpacker can eat well, sleep comfortably, and explore endlessly on from 350 MAD per
                day. A mid-range traveler can stay in beautiful riads, eat exquisite food, and join
                guided tours for from 1,000-2,000 MAD per day. And luxury travelers will find that
                Morocco&apos;s finest hotels and experiences rival those anywhere in the world at a fraction
                of Western prices.
              </p>
              <p>
                This guide breaks down every cost category with real 2026 prices. We cover flights,
                accommodation, food, transport, activities, shopping, tipping, SIM cards, and the hidden
                costs that catch travelers off guard. By the end, you will know exactly how much your
                Morocco trip will cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Budget Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How much you need per day in Morocco depends on your travel style. Here are the three main budget tiers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in Moroccan Dirham (MAD). Seasonal pricing applies during peak months (October-April) when accommodation may increase by 20-40%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <TierIcon className="w-5 h-5" style={{ color: tier.color }} />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tier.tier}
                    </h3>
                  </div>
                  <div className="text-2xl font-bold text-[var(--color-accent)] mb-1">
                    {tier.dailyTotal}
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mb-6">
                    {tier.tenDayTotal}
                  </div>
                  <div className="space-y-3 mb-6">
                    {tier.breakdown.map((item) => (
                      <div key={item.category} className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-secondary)]">{item.category}</span>
                        <span className="font-semibold text-[var(--text-primary)]">{item.amount}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border-primary)] pt-4">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-2">Top Tips:</p>
                    <ul className="space-y-1.5">
                      {tier.tips.slice(0, 3).map((tip, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Flight Costs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Flight Costs to Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            International flights are typically the biggest single expense. Main airports: Marrakech (RAK), Casablanca (CMN), Fes (FEZ), Tangier (TNG), and Agadir (AGA).
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are approximate for 2026 and vary by airline, booking time, and season. Book 2-3 months ahead for best deals.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {flightCosts.map((flight) => (
              <div key={flight.region} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {flight.region}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)]">{flight.examples}</p>
                  </div>
                  <Plane className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                    <p className="text-xs text-[var(--text-muted)] mb-1">Budget (One-Way)</p>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">{flight.budget}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                    <p className="text-xs text-[var(--text-muted)] mb-1">Average (Round-Trip)</p>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">{flight.average}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                    <p className="text-xs text-[var(--text-muted)] mb-1">Peak Season (Round-Trip)</p>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">{flight.peak}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  <Info className="w-3 h-3 inline mr-1" />
                  {flight.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodation Costs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco offers everything from from 80 MAD hostel dorms to from 8,000 MAD luxury suites. Riads (traditional courtyard houses) offer the most uniquely Moroccan experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per room per night. Peak season (October-April) adds 20-40%. Add tourist tax of from 25-35 MAD per person per night.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {accommodationCosts.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{acc.budget}</span>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {acc.priceRange}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] mb-2">{acc.description}</p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Users className="w-3 h-3 inline mr-1" />
                    Best for: {acc.bestFor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food Costs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <UtensilsCrossed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Dining Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Moroccan food is one of the great cuisines of the world, and it is remarkably affordable. From 5 MAD street food to 1,500 MAD fine dining.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Tourist-area restaurants charge 30-50% more than local neighborhoods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {foodCosts.map((category) => {
              const FoodIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FoodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-2.5">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-secondary)]">{item.item}</span>
                        <span className="font-semibold text-[var(--color-accent)] shrink-0 ml-4">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Daily Food Budget Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 80-120 MAD/day</p>
                  <p className="text-xs text-[var(--text-muted)]">Street food, local restaurants, self-catering</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 200-400 MAD/day</p>
                  <p className="text-xs text-[var(--text-muted)]">Mixed street food and sit-down restaurants</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 500-1,200 MAD/day</p>
                  <p className="text-xs text-[var(--text-muted)]">Fine dining, hotel restaurants, wine pairing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport Costs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco has an excellent transport network. Trains connect major cities, buses reach everywhere, and taxis cover local routes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Taxi fares may vary during late night hours. Car rental prices are per day before fuel.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Transport Mode</div>
                <div className="p-3 px-4">Route / Use</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {transportCosts.map((item, i) => (
                <div
                  key={item.mode + item.route}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.mode}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.route}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)] text-xs">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Activity Costs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activity &amp; Experience Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From free medina wandering to luxury hot air balloon rides. Activity costs vary enormously based on your chosen experience level.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices per person. Group tours are cheaper than private experiences.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4 col-span-1">Activity</div>
                <div className="p-3 px-4">Budget</div>
                <div className="p-3 px-4">Mid-Range</div>
                <div className="p-3 px-4">Luxury</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {activityCosts.map((item, i) => (
                <div
                  key={item.activity}
                  className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)] col-span-1">{item.activity}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.budget}</div>
                  <div className="p-3 px-4 text-[var(--color-gold)] font-semibold">{item.midRange}</div>
                  <div className="p-3 px-4 text-[var(--text-primary)] font-semibold">{item.luxury}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)] text-xs">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Shopping Costs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping: Fair Prices vs. Tourist Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Haggling is essential in Moroccan souks. Knowing fair prices before you shop is your best defense against overpaying.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Fair prices assume successful haggling. Tourist prices are what you might pay without negotiating. Start at 30-40% of the asking price.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">
                  <CheckCircle className="w-3.5 h-3.5 inline mr-1" />
                  Fair Price (Haggled)
                </div>
                <div className="p-3 px-4">
                  <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
                  Tourist Price (No Haggling)
                </div>
              </div>
              {shoppingCosts.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-green-700 font-semibold">{item.fairPrice}</div>
                  <div className="p-3 px-4 text-red-600 font-semibold">{item.touristPrice}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 10-Day Trip Cost Examples ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            10-Day Trip Cost: Real Examples
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three complete 10-day Morocco itineraries with full cost breakdowns. These are realistic totals based on current 2026 prices.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tenDayExamples.map((example) => {
              const ExIcon = example.icon;
              return (
                <div key={example.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <ExIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {example.tier}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-4">
                    <MapPin className="w-3 h-3" />
                    {example.route}
                  </div>
                  <div className="space-y-2.5 mb-6">
                    {example.items.map((item, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-[var(--text-secondary)]">{item.item}</span>
                        <span className="font-semibold text-[var(--text-primary)] shrink-0 ml-2">{item.cost}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[var(--border-primary)] pt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="font-bold text-[var(--text-primary)]">Total (excl. flights)</span>
                      <span className="font-bold text-[var(--color-accent)]">{example.total}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-bold text-[var(--text-primary)]">Total (with flights)</span>
                      <span className="font-bold text-[var(--color-accent)]">{example.withFlights}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Price Variations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TrendingUp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Price Variations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When you visit Morocco significantly affects your costs. Timing your trip right can save 20-40% on your total budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {seasonalPricing.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{season.months}</p>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    {season.priceImpact}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {season.tips}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Money-Saving Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            15 Money-Saving Tips for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical, tested strategies to stretch your budget further without sacrificing the quality of your Morocco experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {moneySavingTips.map((tip, index) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {tip.tip}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                    {tip.savings}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Hidden Costs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Hidden Costs Travelers Miss
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are the costs that rarely appear in budget guides but add up quickly. Being aware of them helps you budget accurately.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {hiddenCosts.map((item) => {
              const CostIcon = item.icon;
              return (
                <div key={item.cost} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                      <CostIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.cost}
                      </h3>
                      <span className="text-xs font-semibold text-red-600">{item.amount}</span>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tipping Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Complete Tipping Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tipping is an important part of Moroccan culture. Knowing the expected amounts helps you budget and show appreciation appropriately.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Suggested Tip</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {tippingGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.amount}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SIM Card & Connectivity ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            SIM Cards &amp; Connectivity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Staying connected in Morocco is cheap and easy. A local SIM card is one of the best investments you can make.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Provider</div>
                <div className="p-3 px-4">SIM Cost</div>
                <div className="p-3 px-4">Data Plan</div>
                <div className="p-3 px-4">Coverage</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {simCardOptions.map((item, i) => (
                <div
                  key={item.provider}
                  className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.provider}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.simCost}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.dataPlan}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)] text-xs">{item.coverage}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)] text-xs">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Currency & Exchange Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CreditCard className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Currency &amp; Exchange Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Moroccan Dirham (MAD) is a restricted currency. You cannot buy it before arriving. Here is how to handle money wisely.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {currencyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
            Continue Planning Your Morocco Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed strategies for traveling Morocco on a shoestring budget with insider tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/backpacking" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Backpacking Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete backpacker guide with routes, hostels, and survival tips for Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Bed className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Where to Stay
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete accommodation guide from hostels to luxury riads across every Moroccan city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

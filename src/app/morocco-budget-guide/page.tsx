import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  DollarSign,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building,
  BookOpen,
  ShieldCheck,
  Star,
  MapPin,
  Banknote,
  HelpCircle,
  CreditCard,
  Landmark,
  Wallet,
  HandCoins,
  TrendingUp,
  Calculator,
  Globe,
  Clock,
  Receipt,
  Utensils,
  Bus,
  Bed,
  Ticket,
  Lightbulb,
  Heart,
  Compass,
} from 'lucide-react';

/* =================================================================
   CONSTANTS
   ================================================================= */

const BASE_URL = 'https://citytoursmorocco.com';

/* =================================================================
   SEO METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Morocco Budget Guide 2026 | How Much Does Morocco Cost?',
  description:
    'Complete Morocco budget travel guide. Daily cost breakdowns for budget, mid-range, and luxury travelers. Accommodation, food, transport, and activity prices in MAD. Money-saving tips, cheapest cities, haggling advice, and budget itineraries.',
  keywords: [
    'Morocco budget travel',
    'how much does Morocco cost',
    'Morocco on a budget',
    'cheap Morocco travel guide',
    'Morocco daily budget',
    'Morocco travel costs 2026',
    'Morocco cheap travel',
    'Morocco backpacker budget',
    'Morocco accommodation costs',
    'Morocco food prices',
    'Morocco transport costs',
    'cheapest cities Morocco',
    'Morocco haggling guide',
    'Morocco tipping guide',
    'Morocco money saving tips',
    'Morocco budget itinerary',
    'Morocco free things to do',
    'Morocco trip cost breakdown',
  ],
  openGraph: {
    title: 'Morocco Budget Guide 2026 | How Much Does Morocco Cost?',
    description:
      'Plan your Morocco trip on any budget. Daily costs, cheapest cities, money-saving tips, haggling advice, and sample itineraries from budget to luxury.',
    url: `${BASE_URL}/morocco-budget-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-money.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan market stall with spices and handcrafted goods in a traditional souk',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Budget Guide 2026 | How Much Does Morocco Cost?',
    description:
      'Daily cost breakdowns, cheapest cities, money-saving tips, and budget itineraries for traveling Morocco affordably.',
    images: [`${BASE_URL}/images/hero-morocco-money.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-budget-guide` },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-budget-guide`,
  name: 'Morocco Budget Guide 2026 | How Much Does Morocco Cost?',
  description:
    'Complete Morocco budget travel guide. Daily cost breakdowns for budget, mid-range, and luxury travelers. Accommodation, food, transport, and activity prices in MAD.',
  url: `${BASE_URL}/morocco-budget-guide`,
  image: `${BASE_URL}/images/hero-morocco-money.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-budget-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Budget Guide', item: `${BASE_URL}/morocco-budget-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a trip to Morocco cost per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget traveler can expect to spend from 350-550 MAD (roughly $35-55 USD) per day covering hostel accommodation, street food, local transport, and free or low-cost activities. Mid-range travelers typically spend from 800-1,400 MAD ($80-140 USD) per day for a comfortable riad, restaurant meals, and guided tours. Luxury travelers should budget from 2,500-5,000+ MAD ($250-500+ USD) per day for five-star hotels, fine dining, and private experiences.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco cheap for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is one of the most affordable destinations in North Africa and the Mediterranean region. Street food meals cost from 15-40 MAD, hostel beds from 80-150 MAD, and local bus rides from 5-10 MAD. Compared to Europe, travelers can enjoy a rich cultural experience at a fraction of the cost. However, tourist-heavy cities like Marrakech tend to be pricier than smaller towns.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest city to visit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Meknes is widely considered the cheapest major city in Morocco, with budget accommodation from 100-200 MAD per night and meals from 20-40 MAD. Other affordable cities include Tetouan, Taroudant, Tiznit, and Essaouira (outside peak season). Even popular destinations like Fes and Chefchaouen are more affordable than Marrakech and Casablanca.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget for food in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget travelers can eat well on from 80-120 MAD per day by choosing street food stalls, local snack shops, and market produce. A tagine at a local restaurant costs from 35-60 MAD, a sandwich from 15-25 MAD, and mint tea from 5-10 MAD. Mid-range restaurant meals run from 80-150 MAD per person. Fine dining starts from 200 MAD and up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is haggling expected in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, haggling is a normal and expected part of shopping in Moroccan souks and markets. Vendors set initial prices 2-3 times higher than what they expect to receive. Start your offer at 30-40% of the asking price and negotiate from there. Haggling does not apply to fixed-price shops, supermarkets, restaurants, or transport with meters.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does transport cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Local petit taxis within cities cost from 10-30 MAD per ride. City buses run from 4-6 MAD. Intercity trains from Marrakech to Casablanca cost from 90-150 MAD in second class. CTM and Supratours intercity buses range from 80-200 MAD depending on distance. Grand taxis for shared rides between towns cost from 20-60 MAD per seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the best free things to do in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco offers many free experiences: exploring medina streets and alleyways, watching artisans work in traditional tanneries (viewed from shops), relaxing on Atlantic beaches in Essaouira and Agadir, wandering through the blue streets of Chefchaouen, visiting mosques exteriors, enjoying Jemaa el-Fna square entertainment in Marrakech, hiking in nearby hills, and browsing colorful souks without obligation to buy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping is customary but modest amounts are appropriate. Restaurant tips are from 10-15% of the bill. Cafe tips run from 2-10 MAD. Hotel porters expect from 10-20 MAD per bag. Taxi drivers appreciate rounding up to the nearest 5-10 MAD. Full-day tour guides typically receive from 100-200 MAD. Parking attendants get from 5-10 MAD. Always tip in dirhams, not foreign currency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel Morocco for two weeks on a tight budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. A two-week Morocco trip on a tight budget is achievable for from 5,000-8,000 MAD ($500-800 USD) total, excluding international flights. Stay in hostels, eat street food, use shared grand taxis and buses, visit free attractions, and choose affordable cities like Meknes and Essaouira. A Sahara desert trip (from 800-1,200 MAD for a 2-day tour) is the biggest single expense but worth budgeting for.',
      },
    },
  ],
};

/* =================================================================
   DATA: DAILY BUDGET BREAKDOWN
   ================================================================= */

const dailyBudgets = [
  {
    level: 'Budget Traveler',
    range: 'From 350-550 MAD / day',
    usd: '~$35-55 USD',
    icon: Wallet,
    highlight: false,
    items: [
      { category: 'Accommodation', cost: 'From 80-200 MAD', detail: 'Hostel dorm or basic guesthouse' },
      { category: 'Food', cost: 'From 80-120 MAD', detail: 'Street food, market stalls, local cafes' },
      { category: 'Transport', cost: 'From 20-50 MAD', detail: 'City buses, walking, shared taxis' },
      { category: 'Activities', cost: 'From 30-80 MAD', detail: 'Free sites, budget museums, walking tours' },
      { category: 'Miscellaneous', cost: 'From 40-60 MAD', detail: 'Tips, water, SIM data, snacks' },
    ],
  },
  {
    level: 'Mid-Range Traveler',
    range: 'From 800-1,400 MAD / day',
    usd: '~$80-140 USD',
    icon: Star,
    highlight: true,
    items: [
      { category: 'Accommodation', cost: 'From 400-700 MAD', detail: 'Charming riad or 3-star hotel' },
      { category: 'Food', cost: 'From 150-300 MAD', detail: 'Mix of local and tourist restaurants' },
      { category: 'Transport', cost: 'From 50-100 MAD', detail: 'Petit taxis, occasional private transfer' },
      { category: 'Activities', cost: 'From 100-200 MAD', detail: 'Guided tours, museums, hammam visits' },
      { category: 'Miscellaneous', cost: 'From 100-150 MAD', detail: 'Tips, shopping, cafe treats' },
    ],
  },
  {
    level: 'Luxury Traveler',
    range: 'From 2,500-5,000+ MAD / day',
    usd: '~$250-500+ USD',
    icon: TrendingUp,
    highlight: false,
    items: [
      { category: 'Accommodation', cost: 'From 1,500-3,000 MAD', detail: 'Luxury riad, 5-star hotel, palace' },
      { category: 'Food', cost: 'From 400-800 MAD', detail: 'Fine dining, cooking classes, wine' },
      { category: 'Transport', cost: 'From 200-400 MAD', detail: 'Private driver, airport transfers' },
      { category: 'Activities', cost: 'From 300-500 MAD', detail: 'Private guides, spa, exclusive tours' },
      { category: 'Miscellaneous', cost: 'From 200-300 MAD', detail: 'Premium tips, souvenirs, extras' },
    ],
  },
] as const;

/* =================================================================
   DATA: ACCOMMODATION COSTS
   ================================================================= */

const accommodationCosts = [
  { type: 'Hostel dorm bed', range: 'From 80-150 MAD', detail: 'Shared room, basic amenities, social atmosphere', icon: Bed },
  { type: 'Budget guesthouse', range: 'From 150-300 MAD', detail: 'Private room, shared bathroom, breakfast included', icon: Building },
  { type: 'Mid-range riad', range: 'From 400-800 MAD', detail: 'Private room, en-suite, courtyard, breakfast', icon: Star },
  { type: '3-star hotel', range: 'From 350-600 MAD', detail: 'Standard room, restaurant, modern amenities', icon: Building },
  { type: 'Luxury riad', range: 'From 1,000-2,500 MAD', detail: 'Suite, rooftop terrace, pool, spa access', icon: Heart },
  { type: '5-star hotel', range: 'From 1,500-4,000+ MAD', detail: 'Full service, multiple restaurants, pool, spa', icon: Landmark },
] as const;

/* =================================================================
   DATA: FOOD COSTS
   ================================================================= */

const foodCosts = [
  { item: 'Street food sandwich (bocadillo)', price: 'From 15-25 MAD', icon: Utensils },
  { item: 'Tagine at a local restaurant', price: 'From 35-60 MAD', icon: Utensils },
  { item: 'Couscous Friday lunch', price: 'From 30-50 MAD', icon: Utensils },
  { item: 'Mint tea (atay)', price: 'From 5-10 MAD', icon: Utensils },
  { item: 'Fresh orange juice', price: 'From 5-10 MAD', icon: Utensils },
  { item: 'Pastilla or harira soup', price: 'From 10-25 MAD', icon: Utensils },
  { item: 'Mid-range restaurant meal', price: 'From 80-150 MAD', icon: Star },
  { item: 'Fine dining main course', price: 'From 150-300 MAD', icon: TrendingUp },
  { item: 'Market fruit (per kg)', price: 'From 5-15 MAD', icon: Receipt },
  { item: 'Water bottle (1.5L)', price: 'From 5-8 MAD', icon: Receipt },
] as const;

/* =================================================================
   DATA: TRANSPORT COSTS
   ================================================================= */

const transportCosts = [
  { mode: 'Petit taxi (within city)', price: 'From 10-30 MAD', detail: 'Insist on the meter; short rides in medina areas', icon: MapPin },
  { mode: 'City bus', price: 'From 4-6 MAD', detail: 'Cheapest option; crowded but covers main routes', icon: Bus },
  { mode: 'Grand taxi (shared, intercity)', price: 'From 20-60 MAD/seat', detail: 'Shared Mercedes rides between nearby towns', icon: Compass },
  { mode: 'CTM / Supratours bus', price: 'From 80-200 MAD', detail: 'Comfortable intercity coaches with A/C and luggage', icon: Bus },
  { mode: 'ONCF train (2nd class)', price: 'From 90-150 MAD', detail: 'Marrakech-Casablanca, Fes-Rabat routes', icon: Clock },
  { mode: 'ONCF train (1st class)', price: 'From 140-220 MAD', detail: 'Wider seats, quieter, reserved seating', icon: Star },
  { mode: 'Al Boraq high-speed train', price: 'From 150-300 MAD', detail: 'Tangier-Casablanca in 2h10m, modern and fast', icon: TrendingUp },
  { mode: 'Car rental (per day)', price: 'From 250-500 MAD', detail: 'Economy car; fuel extra at from 14-16 MAD/liter', icon: Globe },
] as const;

/* =================================================================
   DATA: ACTIVITY COSTS
   ================================================================= */

const activityCosts = [
  { activity: 'Museum entry (Dar Si Said, etc.)', price: 'From 20-70 MAD', category: 'Culture' },
  { activity: 'Bahia Palace, Marrakech', price: 'From 70 MAD', category: 'Culture' },
  { activity: 'Traditional hammam (public)', price: 'From 15-30 MAD', category: 'Wellness' },
  { activity: 'Tourist hammam with scrub', price: 'From 150-400 MAD', category: 'Wellness' },
  { activity: 'Sahara desert 2-day tour', price: 'From 800-1,500 MAD', category: 'Adventure' },
  { activity: 'Guided medina walking tour', price: 'From 150-300 MAD', category: 'Culture' },
  { activity: 'Cooking class (half day)', price: 'From 300-600 MAD', category: 'Food' },
  { activity: 'Surfing lesson (2 hours)', price: 'From 200-400 MAD', category: 'Adventure' },
  { activity: 'Camel ride (1 hour)', price: 'From 150-300 MAD', category: 'Adventure' },
  { activity: 'Day trip to Ouzoud Falls', price: 'From 250-500 MAD', category: 'Nature' },
] as const;

/* =================================================================
   DATA: MONEY-SAVING TIPS
   ================================================================= */

const moneySavingTips = [
  {
    title: 'Eat where locals eat',
    icon: Utensils,
    detail:
      'Skip tourist restaurants on main squares and head to the side streets where Moroccans dine. A hearty tagine at a local joint costs from 35-50 MAD versus from 80-150 MAD at a tourist-facing establishment. Follow the crowds of local diners for the best value and freshest food.',
  },
  {
    title: 'Use public transport',
    icon: Bus,
    detail:
      'City buses cost from 4-6 MAD per ride. Shared grand taxis between towns are from 20-60 MAD per seat. The CTM and Supratours bus networks connect all major cities comfortably for a fraction of private transfer costs. Trains are the most comfortable budget option for longer routes.',
  },
  {
    title: 'Stay in hostels and guesthouses',
    icon: Bed,
    detail:
      'Hostel dorms range from 80-150 MAD per night and often include breakfast and a social atmosphere. Budget guesthouses (maisons d\'hotes) offer private rooms from 150-300 MAD. Many include breakfast and can arrange activities at lower prices than booking directly.',
  },
  {
    title: 'Shop at local markets',
    icon: Receipt,
    detail:
      'Buy fresh fruit, bread, olives, and cheese from souks and neighborhood markets. A filling picnic lunch costs from 20-40 MAD versus from 60-100 MAD at a restaurant. Markets also have the freshest ingredients and give you a chance to practice your haggling.',
  },
  {
    title: 'Haggle with confidence',
    icon: HandCoins,
    detail:
      'Start at 30-40% of the asking price and work up. Vendors expect negotiation and their initial prices are 2-3 times what they will accept. Walking away is your most powerful tool. Compare prices at multiple stalls before buying. Never haggle if you do not intend to purchase.',
  },
  {
    title: 'Travel in shoulder season',
    icon: Clock,
    detail:
      'Visit in March-April or October-November for lower prices and fewer crowds. Accommodation rates drop 20-40% outside peak season (December-February and June-August). You also get milder weather and shorter queues at popular sites.',
  },
] as const;

/* =================================================================
   DATA: FREE THINGS TO DO
   ================================================================= */

const freeThings = [
  { activity: 'Wander the medina streets and alleyways', city: 'All cities', icon: MapPin },
  { activity: 'Watch the sunset at Jemaa el-Fna', city: 'Marrakech', icon: Globe },
  { activity: 'Stroll the blue-painted streets', city: 'Chefchaouen', icon: Compass },
  { activity: 'Relax on Atlantic beaches', city: 'Essaouira, Agadir, Taghazout', icon: Globe },
  { activity: 'View tannery vats from shop terraces', city: 'Fes, Marrakech', icon: MapPin },
  { activity: 'Explore the Kasbah des Oudaias', city: 'Rabat', icon: Landmark },
  { activity: 'Admire Hassan II Mosque exterior', city: 'Casablanca', icon: Building },
  { activity: 'Hike trails in the foothills', city: 'Atlas Mountains', icon: Compass },
  { activity: 'Browse spice and artisan souks', city: 'All cities', icon: Receipt },
  { activity: 'Watch street performers and storytellers', city: 'Marrakech, Fes', icon: Star },
] as const;

/* =================================================================
   DATA: CHEAPEST CITIES
   ================================================================= */

const cheapestCities = [
  {
    city: 'Meknes',
    dailyBudget: 'From 250-400 MAD / day',
    icon: Landmark,
    highlights: 'Imperial city with fewer tourists, cheap riads, excellent street food, Bab Mansour gate, Roman ruins at Volubilis nearby.',
  },
  {
    city: 'Tetouan',
    dailyBudget: 'From 280-420 MAD / day',
    icon: Building,
    highlights: 'UNESCO medina, Spanish-Moroccan architecture, authentic local culture, proximity to Mediterranean beaches.',
  },
  {
    city: 'Essaouira',
    dailyBudget: 'From 300-450 MAD / day',
    icon: Globe,
    highlights: 'Laid-back coastal town, affordable seafood, windsurfing, art galleries, peaceful medina. Pricier in July-August.',
  },
  {
    city: 'Chefchaouen',
    dailyBudget: 'From 300-450 MAD / day',
    icon: Compass,
    highlights: 'The blue city, affordable guesthouses, mountain hiking, photogenic streets, relaxed atmosphere.',
  },
  {
    city: 'Taroudant',
    dailyBudget: 'From 250-380 MAD / day',
    icon: MapPin,
    highlights: 'Known as "little Marrakech" without the crowds or prices. Authentic souk, terracotta ramparts, great base for Anti-Atlas.',
  },
] as const;

/* =================================================================
   DATA: HAGGLING GUIDE
   ================================================================= */

const hagglingSteps = [
  {
    step: 1,
    title: 'Browse without buying first',
    icon: Compass,
    detail: 'Walk through the souk to see what is available and get a feel for typical prices. Check 3-4 stalls selling similar items. This gives you a realistic baseline before any negotiation.',
  },
  {
    step: 2,
    title: 'Show polite interest, not desperation',
    icon: BookOpen,
    detail: 'If you seem too eager, the vendor will hold firm on a high price. Ask about the item casually. Handle it, ask where it was made, but do not gush about how much you love it.',
  },
  {
    step: 3,
    title: 'Start at 30-40% of the asking price',
    icon: Calculator,
    detail: 'The vendor expects this. Their opening price is 2-3 times what they will accept. Starting low gives both sides room to negotiate. Never offer more than you are willing to pay.',
  },
  {
    step: 4,
    title: 'Negotiate slowly and stay friendly',
    icon: HandCoins,
    detail: 'Haggling is a social ritual, not a confrontation. Smile, joke, drink tea if offered. Exchange counteroffers gradually. The vendor will come down, and you come up, meeting somewhere around 50-60% of the original ask.',
  },
  {
    step: 5,
    title: 'Use the walk-away technique',
    icon: ArrowRight,
    detail: 'If the price is still too high, politely thank the vendor and walk away. In most cases, they will call you back with a lower offer. This is the most effective bargaining tool, but only use it if you are genuinely prepared to leave.',
  },
  {
    step: 6,
    title: 'Bundle items for a better deal',
    icon: Receipt,
    detail: 'Buying multiple items from the same vendor gives you leverage. Offer a total price for everything rather than negotiating piece by piece. Vendors prefer larger transactions and will give a better overall rate.',
  },
] as const;

/* =================================================================
   DATA: TIPPING GUIDE
   ================================================================= */

const tippingGuide = [
  { service: 'Restaurant meal', amount: 'From 10-15% of bill', note: 'Leave cash on the table; tips on cards rarely reach staff' },
  { service: 'Cafe (mint tea, coffee)', amount: 'From 2-10 MAD', note: 'Round up or leave small coins' },
  { service: 'Hotel porter', amount: 'From 10-20 MAD per bag', note: 'Tip upon delivery to your room' },
  { service: 'Riad housekeeper', amount: 'From 20-50 MAD per day', note: 'Leave at end of stay in an envelope' },
  { service: 'Taxi driver', amount: 'Round up to nearest 5-10 MAD', note: 'Not obligatory but appreciated' },
  { service: 'Tour guide (full day)', amount: 'From 100-200 MAD', note: 'More for exceptional private guides' },
  { service: 'Parking attendant', amount: 'From 5-10 MAD', note: 'Pay when you return to your vehicle' },
  { service: 'Gas station attendant', amount: 'From 5 MAD', note: 'For windscreen cleaning or fuel service' },
] as const;

/* =================================================================
   DATA: BUDGET ITINERARY SAMPLES
   ================================================================= */

const budgetItineraries = [
  {
    title: '7-Day Budget Itinerary',
    totalCost: 'From 3,000-4,500 MAD total',
    icon: Clock,
    days: [
      { day: 'Days 1-2', city: 'Marrakech', activities: 'Free medina walk, Jemaa el-Fna, street food, public hammam' },
      { day: 'Day 3', city: 'Essaouira', activities: 'Bus to Essaouira (from 80 MAD), beach, ramparts walk, seafood grill' },
      { day: 'Day 4', city: 'Essaouira', activities: 'Port area, free art galleries, souk browsing, sunset on the wall' },
      { day: 'Day 5', city: 'Marrakech', activities: 'Return bus, Bahia Palace (from 70 MAD), Mellah, Saadian Tombs' },
      { day: 'Days 6-7', city: 'Day trips', activities: 'Ouzoud Falls day trip or Atlas foothills hike, departure' },
    ],
  },
  {
    title: '14-Day Budget Itinerary',
    totalCost: 'From 5,500-8,000 MAD total',
    icon: Compass,
    days: [
      { day: 'Days 1-3', city: 'Marrakech', activities: 'Medina, souks, street food, Majorelle (from 70 MAD), hammam' },
      { day: 'Days 4-5', city: 'Essaouira', activities: 'Beach, ramparts, seafood, surfing lesson (optional from 200 MAD)' },
      { day: 'Days 6-7', city: 'Sahara desert', activities: '2-day desert tour from Marrakech (from 800-1,200 MAD)' },
      { day: 'Days 8-9', city: 'Fes', activities: 'Train/bus to Fes, tanneries, medina, Bou Inania Medersa' },
      { day: 'Days 10-11', city: 'Chefchaouen', activities: 'Bus to Chefchaouen, blue streets, mountain hike, local food' },
      { day: 'Days 12-13', city: 'Meknes / Volubilis', activities: 'Grand taxi to Meknes, Bab Mansour, Roman ruins day trip' },
      { day: 'Day 14', city: 'Departure', activities: 'Train to Casablanca or Marrakech for flight' },
    ],
  },
] as const;

/* =================================================================
   DATA: FAQ
   ================================================================= */

const faqs = [
  {
    question: 'How much does a trip to Morocco cost per day?',
    answer:
      'A budget traveler can expect to spend from 350-550 MAD (roughly $35-55 USD) per day covering hostel accommodation, street food, local transport, and free or low-cost activities. Mid-range travelers typically spend from 800-1,400 MAD ($80-140 USD) per day for a comfortable riad, restaurant meals, and guided tours. Luxury travelers should budget from 2,500-5,000+ MAD ($250-500+ USD) per day. Seasonal pricing can change, so always check current rates.',
  },
  {
    question: 'Is Morocco cheap for tourists?',
    answer:
      'Yes, Morocco is one of the most affordable destinations in North Africa and the Mediterranean. Street food meals cost from 15-40 MAD, hostel beds from 80-150 MAD, and local bus rides from 4-6 MAD. Compared to Western Europe, travelers enjoy a rich cultural experience at a fraction of the cost. Tourist-heavy areas in Marrakech tend to be pricier, but smaller cities like Meknes and Taroudant are remarkably affordable.',
  },
  {
    question: 'What is the cheapest city to visit in Morocco?',
    answer:
      'Meknes is widely considered the cheapest major city, with budget accommodation from 100-200 MAD per night and restaurant meals from 25-50 MAD. Taroudant, Tiznit, and Tetouan are also very affordable. Even popular destinations like Fes, Essaouira, and Chefchaouen are significantly cheaper than Marrakech and Casablanca.',
  },
  {
    question: 'How much should I budget for food in Morocco?',
    answer:
      'Budget travelers can eat well for from 80-120 MAD per day by choosing street food stalls, local snack shops, and market produce. Mid-range diners should budget from 150-300 MAD per day. A tagine at a local restaurant costs from 35-60 MAD, fresh orange juice from 5-10 MAD, and a mid-range restaurant meal from 80-150 MAD per person.',
  },
  {
    question: 'Is haggling expected in Morocco?',
    answer:
      'Yes, haggling is a normal and expected part of shopping in Moroccan souks and markets. Vendors set initial prices 2-3 times higher than what they expect to receive. Start your offer at 30-40% of the asking price and negotiate from there. Haggling does not apply in fixed-price shops, supermarkets, restaurants, or metered taxis.',
  },
  {
    question: 'How much does transport cost in Morocco?',
    answer:
      'Local petit taxis cost from 10-30 MAD per ride. City buses run from 4-6 MAD. Intercity trains from Marrakech to Casablanca cost from 90-150 MAD in second class. CTM and Supratours intercity buses range from 80-200 MAD. Grand taxis for shared rides between towns cost from 20-60 MAD per seat. The Al Boraq high-speed train is from 150-300 MAD.',
  },
  {
    question: 'What are the best free things to do in Morocco?',
    answer:
      'Morocco offers many free experiences: exploring medina streets, watching artisans at tanneries from shop terraces, relaxing on Atlantic beaches, wandering Chefchaouen\'s blue streets, visiting mosque exteriors, enjoying Jemaa el-Fna entertainment in Marrakech, hiking Atlas Mountain foothills, and browsing colorful souks. Some of Morocco\'s best moments cost nothing at all.',
  },
  {
    question: 'How much should I tip in Morocco?',
    answer:
      'Tipping is customary but modest amounts are appropriate. Restaurant tips are from 10-15% of the bill. Cafe tips run from 2-10 MAD. Hotel porters expect from 10-20 MAD per bag. Taxi drivers appreciate rounding up to the nearest 5-10 MAD. Tour guides typically receive from 100-200 MAD for a full day. Always tip in dirhams using your right hand.',
  },
  {
    question: 'Can I travel Morocco for two weeks on a tight budget?',
    answer:
      'Absolutely. A two-week Morocco trip on a tight budget is achievable for from 5,500-8,000 MAD ($550-800 USD) total, excluding international flights. Stay in hostels, eat street food, use shared grand taxis and buses, visit free attractions, and choose affordable cities like Meknes and Essaouira. A Sahara desert trip (from 800-1,200 MAD) is the biggest single expense but is worth budgeting for.',
  },
];

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function MoroccoBudgetGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco-money.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Budget Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wallet className="w-4 h-4" />
            Budget Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Budget Guide:
            <br className="hidden md:block" /> How Much Does It Cost?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your complete guide to traveling Morocco on any budget. Daily cost
            breakdowns, cheapest cities, money-saving tips, haggling strategies,
            and sample itineraries from backpacker to luxury.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Overview -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Is Morocco Expensive? The Short Answer
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong>Morocco is one of the most affordable travel destinations</strong> accessible
                from Europe and North America. With a daily budget of from 350-550 MAD ($35-55 USD),
                backpackers can enjoy comfortable hostels, delicious street food, and local transport.
                Mid-range travelers spend from 800-1,400 MAD ($80-140 USD) per day for charming riads
                and guided experiences. Even luxury travel in Morocco costs a fraction of what you
                would pay in Western Europe.
              </p>
              <p>
                The key to stretching your money in Morocco is understanding <strong>where to spend
                and where to save</strong>. Eating like a local, using public transport, visiting free
                attractions, and mastering the art of haggling can dramatically reduce your daily costs.
                This guide breaks down every category of expense so you can plan your trip with confidence.
              </p>
              <p>
                All prices are in <strong>Moroccan dirhams (MAD)</strong>. As of early 2026, 1 USD is
                approximately 9.5-10 MAD and 1 EUR is approximately 10.5-11 MAD. Seasonal pricing can
                change, so always verify current rates before your trip.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <Wallet className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Budget / Day</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 350 MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Star className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Mid-Range / Day</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 800 MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <TrendingUp className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Luxury / Day</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 2,500 MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Calculator className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">2 Weeks Budget</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 5,500 MAD</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Daily Budget Breakdown -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calculator className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How much to budget per day in Morocco, broken down by travel style. All amounts in MAD. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyBudgets.map((budget) => {
              const BudgetIcon = budget.icon;
              return (
                <div
                  key={budget.level}
                  className={`card-moroccan p-6 ${budget.highlight ? 'border-2 border-[var(--color-accent)]' : ''}`}
                >
                  <div className="text-center mb-5">
                    <div className={`w-12 h-12 rounded-full ${budget.highlight ? 'bg-[var(--color-accent)]/10' : 'bg-[var(--surface-muted)]'} flex items-center justify-center mx-auto mb-3`}>
                      <BudgetIcon className={`w-6 h-6 ${budget.highlight ? 'text-[var(--color-accent)]' : 'text-[var(--color-gold)]'}`} />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {budget.level}
                    </h3>
                    <div className="text-2xl font-bold text-[var(--color-accent)]">{budget.range}</div>
                    <div className="text-sm text-[var(--text-muted)]">{budget.usd}</div>
                  </div>
                  <ul className="space-y-3">
                    {budget.items.map((item) => (
                      <li key={item.category} className="flex items-start justify-between text-sm">
                        <div>
                          <span className="font-medium text-[var(--text-primary)]">{item.category}</span>
                          <span className="block text-xs text-[var(--text-muted)]">{item.detail}</span>
                        </div>
                        <span className="text-[var(--color-accent)] font-semibold shrink-0 ml-3">{item.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Accommodation Costs -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From hostel dorms to luxury riads, Morocco has accommodation for every budget. Prices vary by city and season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accommodationCosts.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {acc.type}
                  </h3>
                  <div className="text-lg font-bold text-[var(--color-accent)] mb-1">{acc.range}</div>
                  <p className="text-xs text-[var(--text-secondary)]">{acc.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Budget Accommodation Tip
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Book directly with riads and guesthouses for better rates than booking platforms.
                  Many small properties offer a 10-20% discount for direct bookings. Also, staying
                  slightly outside the main medina can save 30-50% while being just a short walk from
                  the action. Seasonal pricing can change significantly between high and low season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Food Costs -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Drink Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan food is delicious and affordable. Street food and local restaurants offer the best value.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-2 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Item</div>
              <div className="p-3 px-4">Typical Price</div>
            </div>
            {foodCosts.map((food, i) => (
              <div
                key={food.item}
                className={`grid grid-cols-2 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{food.item}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{food.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Transport Costs -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Getting around Morocco is affordable, especially with public transport. Here are typical costs for every mode.
          </p>

          <div className="space-y-4">
            {transportCosts.map((t) => {
              const TIcon = t.icon;
              return (
                <div key={t.mode} className="card-moroccan p-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {t.mode}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">{t.detail}</p>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-accent)] shrink-0">{t.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Activity Costs -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activity &amp; Excursion Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From museums to desert tours, here is what popular activities cost in Morocco. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activityCosts.map((a) => (
              <div key={a.activity} className="card-moroccan p-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-[var(--text-primary)]">{a.activity}</h3>
                  <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] mt-1">
                    {a.category}
                  </span>
                </div>
                <div className="text-sm font-bold text-[var(--color-accent)] shrink-0 ml-3">{a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Money-Saving Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Money-Saving Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical strategies to stretch your dirham further without sacrificing quality or experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {moneySavingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Free Things to Do -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Free Things to Do in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Some of Morocco&apos;s best experiences cost nothing at all. These free activities are perfect for budget travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {freeThings.map((ft) => {
              const FreeIcon = ft.icon;
              return (
                <div key={ft.activity} className="card-moroccan p-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                    <FreeIcon className="w-4 h-4 text-[var(--color-gold)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-[var(--text-primary)]">{ft.activity}</h3>
                    <p className="text-xs text-[var(--text-muted)]">{ft.city}</p>
                  </div>
                  <span className="ml-auto px-2 py-0.5 text-xs font-bold rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] shrink-0">
                    FREE
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Cheapest Cities -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cheapest Cities to Visit in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Skip the tourist markups. These cities offer authentic Moroccan experiences at the lowest prices.
          </p>

          <div className="space-y-6">
            {cheapestCities.map((c) => {
              const CityIcon = c.icon;
              return (
                <div key={c.city} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {c.city}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-accent)]">{c.dailyBudget}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{c.highlights}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Haggling Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Haggle in Moroccan Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Mastering the art of negotiation is essential for budget travelers. Follow these steps and you will save significantly.
          </p>

          <div className="space-y-4">
            {hagglingSteps.map((h) => {
              const StepIcon = h.icon;
              return (
                <div key={h.step} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] text-white flex items-center justify-center shrink-0 text-lg font-bold">
                    {h.step}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <StepIcon className="w-4 h-4 text-[var(--color-accent)]" />
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {h.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{h.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  When NOT to Haggle
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Do not haggle at fixed-price shops (look for posted prices), supermarkets, pharmacies,
                  restaurants, cafes, or when using metered taxis. Attempting to bargain in these settings
                  is considered rude. Haggling is strictly for souks, market stalls, and informal vendors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Tipping Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping Guide for Budget Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tipping is customary in Morocco. Here are appropriate amounts that show respect without breaking your budget.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Service</div>
              <div className="p-3 px-4">Amount</div>
              <div className="p-3 px-4">Note</div>
            </div>
            {tippingGuide.map((t, i) => (
              <div
                key={t.service}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{t.service}</div>
                <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{t.amount}</div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{t.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Budget Itinerary Examples -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample Budget Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Realistic itineraries for budget travelers, with estimated total costs excluding international flights. Seasonal pricing can change.
          </p>

          <div className="space-y-8">
            {budgetItineraries.map((itin) => (
              <div key={itin.title} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {itin.title}
                  </h3>
                  <span className="text-sm font-bold text-[var(--color-accent)]">{itin.totalCost}</span>
                </div>
                <div className="space-y-3">
                  {itin.days.map((d) => (
                    <div key={d.day} className="flex items-start gap-3">
                      <div className="w-20 shrink-0">
                        <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                          {d.day}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-[var(--text-primary)]">{d.city}</span>
                        <p className="text-xs text-[var(--text-secondary)]">{d.activities}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Morocco Budget Travel
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel &amp; Budget Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wallet className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco affordably without missing out.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-trip-cost" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Calculator className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Trip Cost Breakdown
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed cost breakdown for a Morocco trip by budget level.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-currency-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Banknote className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Currency Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Moroccan dirham explained: exchange rates, ATMs, and tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/backpacking" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Backpacking Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Routes, hostels, and tips for backpackers exploring Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/money" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <CreditCard className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Money Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                ATMs, exchange, cards vs cash, and practical money advice.
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

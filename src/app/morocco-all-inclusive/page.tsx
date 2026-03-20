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
  Mountain,
  Globe,
  MessageCircle,
  Bed,
  Sun,
  Plane,
  Wallet,
  Calendar,
  Map,
  Wine,
  Umbrella,
  CircleDollarSign,
  Package,
  Scale,
  ThumbsUp,
  ThumbsDown,
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
  title: 'Morocco All Inclusive Holidays 2026 | Resorts, Packages & Booking Guide',
  description:
    'Complete guide to all-inclusive holidays in Morocco. Best resorts in Agadir, Marrakech, Saïdia & Essaouira. Package types, price comparison by season, booking tips & what is included. Prices in MAD.',
  keywords: [
    'Morocco all inclusive',
    'all inclusive holidays Morocco',
    'Morocco package holidays',
    'all inclusive resorts Morocco',
    'Agadir all inclusive',
    'Marrakech all inclusive',
    'Saïdia all inclusive',
    'Morocco beach resort all inclusive',
    'cheap all inclusive Morocco',
    'luxury all inclusive Morocco',
    'Morocco family all inclusive',
    'Morocco couples all inclusive',
    'Morocco all inclusive 2026',
    'best all inclusive Morocco',
    'Morocco holiday packages',
    'Morocco resort holidays',
    'all inclusive deals Morocco',
    'Morocco vacation packages',
    'Morocco package deals 2026',
    'all inclusive hotels Morocco',
  ],
  openGraph: {
    title: 'Morocco All Inclusive Holidays 2026 | Resorts, Packages & Booking Guide',
    description:
      'The definitive guide to all-inclusive holidays in Morocco. Best resorts, package types, seasonal prices, and expert booking tips for the perfect Morocco vacation.',
    url: `${BASE_URL}/morocco-all-inclusive`,
    images: [
      {
        url: `${BASE_URL}/images/hero-agadir.webp`,
        width: 1200,
        height: 630,
        alt: 'Beautiful all-inclusive beach resort in Agadir Morocco with pool and ocean views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco All Inclusive Holidays 2026 | Resorts & Packages',
    description:
      'Best all-inclusive resorts, package types, seasonal prices, and booking tips for Morocco holidays.',
    images: [`${BASE_URL}/images/hero-agadir.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-all-inclusive` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-all-inclusive`,
  name: 'Morocco All Inclusive Holidays 2026 | Resorts, Packages & Booking Guide',
  description:
    'Complete guide to all-inclusive holidays in Morocco. Best resorts in Agadir, Marrakech, Saïdia and Essaouira, package types, seasonal price comparison, booking tips, and what is included in Morocco all-inclusive packages.',
  url: `${BASE_URL}/morocco-all-inclusive`,
  image: `${BASE_URL}/images/hero-agadir.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-all-inclusive`,
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
      { '@type': 'ListItem', position: 2, name: 'All Inclusive Morocco', item: `${BASE_URL}/morocco-all-inclusive` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does an all-inclusive holiday in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All-inclusive Morocco holidays range from 800-2,500 MAD per person per night depending on the resort, season, and star rating. A 7-night budget-friendly all-inclusive in Agadir starts from around 5,600 MAD per person, while luxury all-inclusive packages in Marrakech or Saïdia range from 10,000-17,500 MAD per person per week. Peak season (July-August and Christmas/New Year) typically adds 30-50% to base prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is included in a Morocco all-inclusive package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard all-inclusive packages in Morocco include accommodation, breakfast, lunch, dinner at buffet restaurants, local alcoholic and soft drinks, pool access, basic entertainment, and sometimes beach access. Premium all-inclusive adds a la carte restaurants, premium drinks, spa credits, excursion discounts, and airport transfers. Flights are sometimes included in tour operator packages but usually booked separately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Agadir or Marrakech better for an all-inclusive holiday?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Agadir is ideal for beach-focused all-inclusive holidays with purpose-built resorts along 10km of sandy coastline and 300+ sunshine days per year. Marrakech suits travelers who want a city-and-culture all-inclusive combining luxury riad stays with guided tours of the medina, souks, and nearby Atlas Mountains. Many visitors combine both destinations for a 10-14 day trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the cheapest time to book an all-inclusive to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest months for all-inclusive Morocco holidays are November to mid-December and January to February (excluding New Year). Agadir remains warm (18-22 degrees Celsius) even in winter, making it excellent value year-round. Book 3-6 months in advance for the best deals, or look for last-minute offers 2-3 weeks before departure for discounts of up to 40%.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are all-inclusive resorts in Morocco good for families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has excellent family-friendly all-inclusive resorts, particularly in Agadir and Saïdia. Top family options include kids clubs, children pools, waterslides, family suites, baby amenities, and organized activities. Resorts like RIU Tikida Beach Agadir and Iberostar Saïdia offer dedicated children facilities, animation teams, and family-oriented entertainment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it better to book all-inclusive or travel independently in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All-inclusive suits families wanting stress-free beach holidays, first-time visitors, and budget-conscious travelers who prefer knowing costs upfront. Independent travel offers more cultural immersion, flexibility, authentic food experiences in local restaurants, and access to riads and guesthouses. A hybrid approach works well: book 4-5 nights all-inclusive in Agadir for relaxation, then travel independently through Marrakech and the desert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Morocco all-inclusive resorts serve alcohol?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most all-inclusive resorts in Morocco serve alcoholic beverages. Morocco is relatively liberal compared to other Muslim-majority countries, and international resort brands operate with full bar services. Standard all-inclusive typically includes local beers, house wines, and basic spirits. Premium all-inclusive upgrades to imported brands and cocktails. Some riads and smaller properties may not serve alcohol.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine an all-inclusive stay with tours and excursions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Many travelers book 5-7 nights all-inclusive at a beach resort in Agadir or Saïdia, then add 2-3 days of touring. Popular add-ons include day trips to Marrakech, Essaouira, or the Atlas Mountains from Agadir, and Sahara desert overnight excursions. Some premium all-inclusive packages include one or two guided excursions in the price.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP ALL-INCLUSIVE DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const destinations = [
  {
    name: 'Agadir',
    icon: Sun,
    image: '/images/hero-agadir.webp',
    tagline: 'Morocco\'s All-Inclusive Capital',
    climate: '300+ days of sunshine, 18-32°C year-round',
    beach: '10 km of golden sand beach',
    price: 'From 800 MAD per person per night',
    description:
      'Agadir is Morocco\'s undisputed all-inclusive capital. Purpose-built resorts line the sweeping 10 km Atlantic beach, offering everything from budget 3-star packages to 5-star luxury. The mild year-round climate (even winter averages 20°C) makes it a 12-month destination. Major international chains like RIU, Iberostar, and Sofitel operate large-scale all-inclusive properties with multiple pools, restaurants, and entertainment. Agadir\'s modern promenade has shops and restaurants for evenings outside the resort.',
    bestFor: 'Beach holidays, families, budget all-inclusive, winter sun',
  },
  {
    name: 'Marrakech',
    icon: Sparkles,
    image: '/images/hero-marrakech.webp',
    tagline: 'Culture & Luxury Combined',
    climate: 'Hot summers, mild winters, best in spring/autumn',
    beach: 'No beach (city destination)',
    price: 'From 1,200 MAD per person per night',
    description:
      'Marrakech all-inclusive packages take a different form: luxury riad or hotel stays combined with guided tours, meals at top restaurants, hammam visits, and cultural experiences. Rather than a beach resort, you get an immersive city experience with costs covered upfront. Several 5-star properties like Kenzi Club Agdal Medina and Iberostar Palmeraie Marrakech offer traditional resort-style all-inclusive with large pools, multiple restaurants, and entertainment in garden settings outside the medina.',
    bestFor: 'Culture seekers, couples, luxury all-inclusive, foodies',
  },
  {
    name: 'Saïdia',
    icon: Waves,
    image: '/images/hero-coastal.webp',
    tagline: 'The Blue Pearl of the Mediterranean',
    climate: 'Hot dry summers, mild winters, 320 sunshine days',
    beach: '14 km of Mediterranean beach',
    price: 'From 900 MAD per person per night',
    description:
      'Saïdia on Morocco\'s Mediterranean coast boasts 14 km of pristine beach and a purpose-built resort complex. The Mediterrània Saïdia complex features 5-star all-inclusive hotels, an 18-hole golf course, a marina, and an aquapark. The water is warmer and calmer than Agadir\'s Atlantic, making it ideal for families with young children. Saïdia is less well-known internationally, which means fewer crowds and often better value than Agadir, especially in peak summer.',
    bestFor: 'Mediterranean beach lovers, golf, families with small children',
  },
  {
    name: 'Essaouira',
    icon: Mountain,
    image: '/images/hero-essaouira.webp',
    tagline: 'Boutique All-Inclusive by the Atlantic',
    climate: 'Mild and breezy year-round, 18-26°C',
    beach: 'Long sandy beach with consistent wind',
    price: 'From 1,000 MAD per person per night',
    description:
      'Essaouira offers a more boutique approach to all-inclusive. Rather than large resorts, you find luxury riads and smaller hotels offering full-board packages with curated experiences: cooking classes, art gallery tours, wind sports, and excursions to argan cooperatives. The Sofitel Essaouira Mogador Golf & Spa is the main international-standard all-inclusive property, set on a golf course with ocean views. Essaouira appeals to travelers who want the convenience of all-inclusive without the resort-bubble feel.',
    bestFor: 'Boutique luxury, wind sports, art and culture, couples',
  },
  {
    name: 'Taghazout',
    icon: Sunset,
    image: '/images/hero-surf-taghazout.webp',
    tagline: 'Surf & Wellness All-Inclusive',
    climate: 'Warm year-round, best waves October-April',
    beach: 'Multiple surf breaks along the coast',
    price: 'From 1,100 MAD per person per night',
    description:
      'Taghazout has emerged as Morocco\'s surf and wellness all-inclusive destination. Boutique surf camps and yoga retreats offer packages that include accommodation, all meals, surf or yoga lessons, equipment rental, and guided excursions. The Hyatt Place Taghazout Bay and nearby resort developments offer more conventional all-inclusive options with pools, restaurants, and spa facilities. This is all-inclusive for the active traveler who wants to surf, hike, and practice yoga.',
    bestFor: 'Surfers, yoga enthusiasts, active holidays, wellness seekers',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ALL-INCLUSIVE PACKAGE TYPES
   ═══════════════════════════════════════════════════════════════ */

const packageTypes = [
  {
    type: 'Beach Resort All-Inclusive',
    icon: Umbrella,
    price: 'From 800-2,000 MAD per person per night',
    description:
      'The classic all-inclusive formula: a beachfront resort with buffet restaurants, pool bars, entertainment, and direct beach access. Agadir and Saïdia are the primary destinations. Expect multiple pools, kids clubs, evening shows, and sports facilities. Best for families and sun-seekers who want a hassle-free holiday.',
    includes: ['Buffet meals (breakfast, lunch, dinner)', 'Local drinks and cocktails', 'Pool and beach access', 'Evening entertainment', 'Kids club and activities', 'Basic sports (tennis, volleyball)'],
    extras: ['A la carte restaurants', 'Premium spirits', 'Spa treatments', 'Excursions and day trips', 'Airport transfers', 'Water sports equipment'],
  },
  {
    type: 'City Riad & Tours Package',
    icon: Building,
    price: 'From 1,500-3,500 MAD per person per night',
    description:
      'An all-inclusive city experience based in a luxury riad or boutique hotel. Packages include accommodation, all meals (often at different restaurants around the city), guided medina tours, hammam visits, and cultural activities. Available in Marrakech and Fes. This is all-inclusive for travelers who want depth rather than beach.',
    includes: ['Luxury riad accommodation', 'Breakfast and dinner', 'Guided medina tour', 'Hammam experience', 'Airport transfers', 'Welcome mint tea ceremony'],
    extras: ['Private chef dinner', 'Cooking class', 'Day trip to Atlas Mountains', 'Hot air balloon ride', 'Shopping guide service', 'Spa and wellness add-ons'],
  },
  {
    type: 'Desert & Culture Combo',
    icon: Map,
    price: 'From 2,000-4,000 MAD per person per night',
    description:
      'The most adventurous all-inclusive option combines multiple destinations into one pre-planned itinerary. A typical 7-10 day package covers Marrakech, the Atlas Mountains, Sahara Desert (with overnight glamping), and a coastal city. All transport, accommodation, meals, and guided experiences are included. Ideal for first-time visitors who want to see the highlights.',
    includes: ['Multi-city accommodation', 'All meals and snacks', 'Private transport between cities', 'Desert overnight with camel trek', 'English-speaking guide', 'All entrance fees'],
    extras: ['Luxury desert camp upgrade', 'Helicopter transfers', 'Premium hotel upgrades', 'Photography guide', 'Wine tasting experiences', 'Extended desert stay'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST RESORTS BY CATEGORY
   ═══════════════════════════════════════════════════════════════ */

const resortsByCategory = [
  {
    category: 'Best for Families',
    icon: Users,
    resorts: [
      { name: 'RIU Tikida Beach', location: 'Agadir', stars: 4, price: 'From 900 MAD/night', highlight: 'Kids club, waterslides, family suites, animation team' },
      { name: 'Iberostar Founty Beach', location: 'Agadir', stars: 4, price: 'From 850 MAD/night', highlight: 'Star Camp kids program, family pool, beachfront location' },
      { name: 'Be Live Experience Saïdia', location: 'Saïdia', stars: 4, price: 'From 800 MAD/night', highlight: 'Aquapark access, shallow pool area, family rooms' },
      { name: 'Kenzi Club Agdal Medina', location: 'Marrakech', stars: 5, price: 'From 1,400 MAD/night', highlight: 'Garden resort with kids pool, near medina access' },
    ],
  },
  {
    category: 'Best for Couples',
    icon: Heart,
    resorts: [
      { name: 'Sofitel Agadir Royal Bay', location: 'Agadir', stars: 5, price: 'From 1,800 MAD/night', highlight: 'Adults pool area, couples spa, gourmet dining' },
      { name: 'Sofitel Essaouira Mogador', location: 'Essaouira', stars: 5, price: 'From 2,000 MAD/night', highlight: 'Golf course, ocean views, romantic setting' },
      { name: 'Fairmont Royal Palm', location: 'Marrakech', stars: 5, price: 'From 2,500 MAD/night', highlight: 'Private villas, world-class spa, golf course' },
      { name: 'Mazagan Beach Resort', location: 'El Jadida', stars: 5, price: 'From 1,600 MAD/night', highlight: 'Casino, spa, golf, refined adult atmosphere' },
    ],
  },
  {
    category: 'Best Luxury All-Inclusive',
    icon: Crown,
    resorts: [
      { name: 'Royal Mansour', location: 'Marrakech', stars: 5, price: 'From 12,000 MAD/night', highlight: 'Private riad suites, butler service, world-class spa' },
      { name: 'Four Seasons Marrakech', location: 'Marrakech', stars: 5, price: 'From 5,000 MAD/night', highlight: 'Two pools, Berber tents, panoramic Atlas views' },
      { name: 'La Mamounia', location: 'Marrakech', stars: 5, price: 'From 8,000 MAD/night', highlight: 'Legendary palace, 8 hectares of gardens, iconic spa' },
      { name: 'Banyan Tree Tamouda Bay', location: 'Tetouan', stars: 5, price: 'From 4,500 MAD/night', highlight: 'Private pool villas, Mediterranean coast, Asian-inspired spa' },
    ],
  },
  {
    category: 'Best Budget All-Inclusive',
    icon: Wallet,
    resorts: [
      { name: 'Labranda Les Dunes d\'Or', location: 'Agadir', stars: 4, price: 'From 650 MAD/night', highlight: 'Great value beachfront, large pool, reliable quality' },
      { name: 'Hotel Timoulay', location: 'Agadir', stars: 4, price: 'From 600 MAD/night', highlight: 'Well-maintained, good food, short walk to beach' },
      { name: 'Kenzi Europa', location: 'Agadir', stars: 4, price: 'From 700 MAD/night', highlight: 'Central location, heated pool, excellent buffet' },
      { name: 'Oasis Village', location: 'Agadir', stars: 3, price: 'From 500 MAD/night', highlight: 'Budget-friendly, clean rooms, pool and gardens' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalPrices = [
  { season: 'Low Season', months: 'November-February (excl. Christmas/NYE)', agadir: 'From 600-1,000 MAD', marrakech: 'From 1,000-1,800 MAD', saidia: 'From 700-1,100 MAD', icon: DollarSign, note: 'Best deals. Agadir still warm (18-22°C). Fewer crowds.' },
  { season: 'Shoulder Season', months: 'March-May & September-October', agadir: 'From 900-1,500 MAD', marrakech: 'From 1,400-2,500 MAD', saidia: 'From 900-1,500 MAD', icon: CircleDollarSign, note: 'Best weather-to-price ratio. Pleasant 22-28°C. Book 3 months ahead.' },
  { season: 'Peak Season', months: 'June-August', agadir: 'From 1,200-2,000 MAD', marrakech: 'From 1,800-3,000 MAD', saidia: 'From 1,200-2,000 MAD', icon: Gem, note: 'Highest prices. Agadir & Saïdia best. Marrakech can exceed 40°C.' },
  { season: 'Festive Season', months: 'Christmas & New Year (2 weeks)', agadir: 'From 1,500-2,500 MAD', marrakech: 'From 2,200-4,000 MAD', saidia: 'From 1,400-2,200 MAD', icon: Star, note: 'Premium pricing. Book 6+ months ahead. Minimum stay requirements.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonPoints = [
  { factor: 'Budget Control', allInclusive: 'Costs known upfront, minimal surprises', independent: 'Flexible but harder to predict total spend', winner: 'all-inclusive' },
  { factor: 'Food Experience', allInclusive: 'Resort buffets, limited local cuisine', independent: 'Authentic Moroccan food, street food, local gems', winner: 'independent' },
  { factor: 'Cultural Immersion', allInclusive: 'Resort-focused, organized excursions', independent: 'Deep immersion, spontaneous discoveries', winner: 'independent' },
  { factor: 'Convenience', allInclusive: 'Everything arranged, zero planning stress', independent: 'Requires research, navigation, language skills', winner: 'all-inclusive' },
  { factor: 'Family Friendliness', allInclusive: 'Kids clubs, safe pools, entertainment', independent: 'More challenging with young children', winner: 'all-inclusive' },
  { factor: 'Value for Money', allInclusive: 'Good value if you use all facilities', independent: 'Can be cheaper or more expensive depending on choices', winner: 'tie' },
  { factor: 'Flexibility', allInclusive: 'Locked into resort, set meal times', independent: 'Complete freedom to change plans daily', winner: 'independent' },
  { factor: 'Accommodation Variety', allInclusive: 'Standard resort rooms', independent: 'Riads, kasbahs, desert camps, guesthouses', winner: 'independent' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAMPLE ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const sampleItineraries = [
  {
    title: '7-Night Beach All-Inclusive',
    destination: 'Agadir',
    icon: Sun,
    budget: 'From 5,600 MAD per person',
    days: [
      { day: 'Day 1', activity: 'Arrive at Agadir Al Massira Airport. Transfer to resort. Welcome drink and pool time.' },
      { day: 'Day 2-3', activity: 'Beach and pool relaxation. Use resort sports facilities. Evening entertainment.' },
      { day: 'Day 4', activity: 'Day trip to Paradise Valley or Taghazout (optional extra or included in premium packages).' },
      { day: 'Day 5-6', activity: 'Beach relaxation, spa treatment, explore Agadir marina and souk.' },
      { day: 'Day 7', activity: 'Day trip to Essaouira or Tiznit (optional extra). Final evening gala dinner.' },
      { day: 'Day 8', activity: 'Breakfast and airport transfer. Departure.' },
    ],
    bestFor: 'Families, couples seeking relaxation, winter sun seekers',
  },
  {
    title: '10-Night Culture & Desert Combo',
    destination: 'Multi-City',
    icon: Map,
    budget: 'From 15,000 MAD per person',
    days: [
      { day: 'Day 1-3', activity: 'Marrakech: Luxury riad, guided medina tour, Jardin Majorelle, hammam, cooking class.' },
      { day: 'Day 4', activity: 'Drive through the High Atlas to Ait Benhaddou kasbah. Overnight in Ouarzazate.' },
      { day: 'Day 5-6', activity: 'Todra Gorge, Dades Valley, and into the Sahara. Overnight glamping at Erg Chebbi.' },
      { day: 'Day 7', activity: 'Return drive via Midelt and Middle Atlas cedar forests to Fes.' },
      { day: 'Day 8-9', activity: 'Fes: Guided medina tour, tanneries, Al-Qarawiyyin area, traditional dinner.' },
      { day: 'Day 10-11', activity: 'Transfer to Agadir or Essaouira for 2 nights of beach relaxation. Departure.' },
    ],
    bestFor: 'First-time visitors wanting to see highlights, adventurous couples, culture enthusiasts',
  },
  {
    title: '5-Night Luxury City Package',
    destination: 'Marrakech',
    icon: Crown,
    budget: 'From 12,000 MAD per person',
    days: [
      { day: 'Day 1', activity: 'VIP airport transfer. Check into 5-star palace hotel. Welcome dinner on rooftop.' },
      { day: 'Day 2', activity: 'Private guided medina tour. Lunch at Nomad. Afternoon hammam at Royal Mansour spa.' },
      { day: 'Day 3', activity: 'Hot air balloon at sunrise. Jardin Majorelle and YSL Museum. Fine dining at Dar Yacout.' },
      { day: 'Day 4', activity: 'Day trip to Atlas Mountains or Essaouira. Sunset cocktails at pool.' },
      { day: 'Day 5', activity: 'Free morning for shopping. Cooking class. Farewell dinner at La Mamounia gardens.' },
      { day: 'Day 6', activity: 'Breakfast and private airport transfer. Departure.' },
    ],
    bestFor: 'Couples, honeymoons, luxury seekers, foodies, repeat visitors',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Luxury Hotels Morocco', href: '/morocco-luxury-hotels', icon: Crown, description: 'The finest 5-star palace hotels, luxury riads, and boutique stays across Morocco.' },
  { title: 'Luxury Travel Morocco', href: '/morocco-luxury-travel', icon: Gem, description: 'Private experiences, helicopter tours, and VIP itineraries for the ultimate Morocco trip.' },
  { title: 'Morocco Accommodations', href: '/accommodations', icon: Bed, description: 'Complete guide to riads, hotels, hostels, and guesthouses across all cities.' },
  { title: 'Morocco for Couples', href: '/morocco-for-couples', icon: Heart, description: 'Romantic getaways, honeymoon ideas, and the best couple experiences in Morocco.' },
  { title: 'Morocco with Kids', href: '/morocco-with-kids', icon: Users, description: 'Family travel tips, kid-friendly activities, and safe destinations for families.' },
  { title: 'Morocco Trip Cost', href: '/morocco-trip-cost', icon: Wallet, description: 'Detailed budget breakdown covering hotels, food, transport, and activities.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAllInclusivePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO SECTION ── */}
      <section className="relative h-[70vh] min-h-[520px]">
        <img src="/images/hero-agadir.webp" alt="All-inclusive beach resort in Agadir Morocco with golden sand, pool area, and Atlantic Ocean views" className="absolute inset-0 w-full h-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Package className="w-4 h-4" /> Complete All-Inclusive Guide 2026
          </span>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight mb-6">
            Morocco All Inclusive Holidays
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl text-white/90 mb-8">
            From sun-drenched Agadir beach resorts to luxury Marrakech riad packages and Sahara desert combos. Your complete guide to stress-free Morocco vacations with everything included.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full"><MapPin className="w-4 h-4" /> 5 Destinations</span>
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full"><Building className="w-4 h-4" /> 16+ Resorts Reviewed</span>
            <span className="flex items-center gap-2 bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full"><DollarSign className="w-4 h-4" /> Prices in MAD</span>
          </div>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <nav className="container-morocco py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li><Link href="/" className="flex items-center gap-1 hover:text-[#A0522D] transition-colors"><Home className="w-3.5 h-3.5" /> Home</Link></li>
          <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
          <li className="text-[#A0522D] font-medium">All Inclusive Morocco</li>
        </ol>
      </nav>

      {/* ── INTRO SECTION ── */}
      <section className="container-morocco py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Why Choose an All-Inclusive Holiday in Morocco?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Morocco has transformed into one of the most exciting all-inclusive destinations within a short flight of Europe. Whether you want a week of sunshine on Agadir&apos;s golden beach, a cultural deep-dive into Marrakech with every detail arranged, or a multi-city adventure covering desert, mountains, and coast, there is an all-inclusive package to match.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            The appeal is simple: Morocco offers extraordinary diversity at prices significantly below comparable European or Caribbean destinations. A week of all-inclusive in Agadir can cost less than a budget break in southern Spain, yet you get year-round sunshine, exotic culture, world-class food, and landscapes that range from Sahara dunes to snow-capped Atlas peaks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Sun, title: '300+ Days of Sunshine', text: 'Agadir enjoys more sunshine than the Canary Islands. Even winter averages 20°C, making Morocco a genuine year-round destination.' },
            { icon: DollarSign, title: 'Exceptional Value', text: 'All-inclusive packages start from 500 MAD per person per night. Morocco offers 5-star quality at 3-star European prices.' },
            { icon: Globe, title: 'Incredible Diversity', text: 'Beach, desert, mountains, ancient cities. No other all-inclusive destination offers this range of experiences in one country.' },
          ].map((item) => (
            <div key={item.title} className="card-moroccan p-6 text-center">
              <item.icon className="w-10 h-10 text-[#C4960C] mx-auto mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TOP ALL-INCLUSIVE DESTINATIONS ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <MapPin className="w-4 h-4" /> Best Destinations
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top 5 All-Inclusive Destinations in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From Atlantic beach resorts to Mediterranean hideaways and cultural city packages, these are the destinations where all-inclusive truly shines.
            </p>
          </div>

          <div className="space-y-8">
            {destinations.map((dest, idx) => (
              <div key={dest.name} className="card-moroccan overflow-hidden">
                <div className={`grid md:grid-cols-2 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`relative h-64 md:h-auto ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <img src={dest.image} alt={`All-inclusive resort destination ${dest.name} Morocco`} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-[#A0522D] text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <dest.icon className="w-4 h-4" /> #{idx + 1}
                    </div>
                  </div>
                  <div className={`p-6 md:p-8 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900 mb-1">{dest.name}</h3>
                    <p className="text-[#A0522D] font-medium text-sm mb-4">{dest.tagline}</p>
                    <p className="text-gray-700 mb-4 leading-relaxed">{dest.description}</p>
                    <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                      <div className="flex items-start gap-2"><Sun className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" /> <span className="text-gray-600">{dest.climate}</span></div>
                      <div className="flex items-start gap-2"><Waves className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" /> <span className="text-gray-600">{dest.beach}</span></div>
                      <div className="flex items-start gap-2"><DollarSign className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" /> <span className="text-gray-600">{dest.price}</span></div>
                      <div className="flex items-start gap-2"><Star className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" /> <span className="text-gray-600">{dest.bestFor}</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PACKAGE TYPES ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
            <Package className="w-4 h-4" /> Package Types
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Types of All-Inclusive Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            &quot;All-inclusive&quot; in Morocco means different things depending on the destination and provider. Here are the three main formats.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packageTypes.map((pkg) => (
            <div key={pkg.type} className="card-moroccan p-6">
              <pkg.icon className="w-10 h-10 text-[#C4960C] mb-4" />
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 mb-2">{pkg.type}</h3>
              <p className="text-[#A0522D] text-sm font-semibold mb-3">{pkg.price}</p>
              <p className="text-gray-700 text-sm mb-5 leading-relaxed">{pkg.description}</p>

              <div className="mb-4">
                <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" /> Typically Included
                </h4>
                <ul className="space-y-1.5">
                  {pkg.includes.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#C4960C]" /> Usually Extra
                </h4>
                <ul className="space-y-1.5">
                  {pkg.extras.map((item) => (
                    <li key={item} className="text-gray-600 text-sm flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-gray-400 mt-0.5 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── BEST RESORTS BY CATEGORY ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <Award className="w-4 h-4" /> Top Resorts
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Best All-Inclusive Resorts by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hand-picked resorts for every type of traveler, from families to couples to luxury seekers and budget-conscious holidaymakers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {resortsByCategory.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                    <cat.icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900">{cat.category}</h3>
                </div>
                <div className="space-y-4">
                  {cat.resorts.map((resort) => (
                    <div key={resort.name} className="border-l-3 border-[#C4960C] pl-4 py-2">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-gray-900">{resort.name}</h4>
                        <span className="text-xs text-white bg-[#A0522D] px-2 py-0.5 rounded-full">{resort.stars} Stars</span>
                      </div>
                      <p className="text-sm text-gray-500 flex items-center gap-1 mb-1"><MapPin className="w-3 h-3" /> {resort.location}</p>
                      <p className="text-sm text-[#A0522D] font-medium mb-1">{resort.price}</p>
                      <p className="text-sm text-gray-600">{resort.highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-amber-50/50 border-[#C4960C]/20">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#C4960C] mt-0.5 shrink-0" />
              <p className="text-sm text-gray-700">
                <strong>Seasonal pricing note:</strong> All prices shown are indicative starting rates and vary significantly by season, room type, and booking platform. Peak season (July-August, Christmas/New Year) typically adds 30-50% to base rates. Early booking and shoulder-season travel offer the best value. Always confirm current rates directly with the property or booking platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEASONAL PRICE GUIDE ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-4 h-4" /> Seasonal Prices
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Price Guide by Season & Destination
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            All-inclusive rates per person per night vary dramatically by season. Here is what to expect at each time of year.
          </p>
        </div>

        <div className="space-y-6">
          {seasonalPrices.map((season) => (
            <div key={season.season} className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <season.icon className="w-8 h-8 text-[#C4960C]" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{season.season}</h3>
                  <p className="text-sm text-gray-500">{season.months}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-[#FAF8F5] rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 mb-1">Agadir</p>
                  <p className="font-semibold text-[#A0522D]">{season.agadir}</p>
                </div>
                <div className="bg-[#FAF8F5] rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 mb-1">Marrakech</p>
                  <p className="font-semibold text-[#A0522D]">{season.marrakech}</p>
                </div>
                <div className="bg-[#FAF8F5] rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500 mb-1">Saïdia</p>
                  <p className="font-semibold text-[#A0522D]">{season.saidia}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 flex items-start gap-2">
                <Info className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" /> {season.note}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ALL-INCLUSIVE VS INDEPENDENT TRAVEL ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <Scale className="w-4 h-4" /> Comparison
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All-Inclusive vs. Independent Travel
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Both approaches have genuine strengths. The right choice depends on your travel style, budget, and what you want from Morocco.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#A0522D] text-white">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Factor</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">All-Inclusive</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-semibold">Independent</th>
                    <th className="text-center p-4 font-[family-name:var(--font-heading)] font-semibold">Edge</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPoints.map((point, idx) => (
                    <tr key={point.factor} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                      <td className="p-4 font-semibold text-gray-900">{point.factor}</td>
                      <td className="p-4 text-gray-700">{point.allInclusive}</td>
                      <td className="p-4 text-gray-700">{point.independent}</td>
                      <td className="p-4 text-center">
                        {point.winner === 'all-inclusive' && <span className="inline-flex items-center gap-1 text-xs bg-[#A0522D]/10 text-[#A0522D] px-2 py-1 rounded-full"><ThumbsUp className="w-3 h-3" /> AI</span>}
                        {point.winner === 'independent' && <span className="inline-flex items-center gap-1 text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"><ThumbsUp className="w-3 h-3" /> Ind.</span>}
                        {point.winner === 'tie' && <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"><Scale className="w-3 h-3" /> Tie</span>}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6 border-l-4 border-[#A0522D]">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-[#A0522D]" /> Choose All-Inclusive If...
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" /> You want a stress-free beach holiday with zero planning</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" /> You are traveling with young children who need routine and facilities</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" /> You prefer knowing your holiday cost upfront before departure</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 shrink-0" /> It is your first time visiting Morocco and you want an easy introduction</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-blue-600">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" /> Choose Independent If...
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> You want authentic Moroccan food beyond resort buffets</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> You prefer staying in traditional riads and kasbahs</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> You want full flexibility to change plans and explore spontaneously</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" /> You have visited Morocco before and want deeper cultural immersion</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOOKING TIPS ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-4 h-4" /> Expert Advice
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Booking Tips for Morocco All-Inclusive
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Smart booking strategies can save you 20-40% on an identical all-inclusive holiday. Here is how to get the best deal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Calendar,
              title: 'When to Book',
              tips: [
                'Book 3-6 months ahead for shoulder season (March-May, Sept-Oct) for the best balance of price and availability.',
                'Christmas and New Year require 6+ months advance booking. Prices surge 40-50% and minimum stays apply.',
                'Last-minute deals (2-3 weeks before departure) can offer 20-40% off, but you lose choice of room and dates.',
                'January and February are the cheapest months to book all-inclusive in Agadir, with prices 30-40% below summer.',
              ],
            },
            {
              icon: Globe,
              title: 'Best Booking Platforms',
              tips: [
                'Tour operators (TUI, Jet2, Thomas Cook) bundle flights and transfers, often undercutting DIY bookings.',
                'Booking.com and Hotels.com offer flexible cancellation on all-inclusive hotel-only deals.',
                'Direct hotel booking sometimes includes room upgrades or spa credits not available through third parties.',
                'Compare package deals on Skyscanner, Kayak, or lastminute.com for the broadest price overview.',
              ],
            },
            {
              icon: ShieldCheck,
              title: 'What to Check Before Booking',
              tips: [
                'Confirm exactly what "all-inclusive" means. Some properties call half-board "all-inclusive" if drinks are added.',
                'Check if airport transfers are included. A taxi from Agadir airport to resort hotels costs from 200-350 MAD.',
                'Read recent reviews specifically mentioning the all-inclusive food quality and drink selection.',
                'Verify whether children stay free and up to what age. Policies vary widely between properties.',
              ],
            },
            {
              icon: Award,
              title: 'Getting the Best Value',
              tips: [
                'Shoulder season in Agadir (March-May, September-October) offers peak-season weather at low-season prices.',
                'Consider half-board plus excursions instead of all-inclusive if you want to explore outside the resort.',
                'Package holidays with flights often cost less than booking hotel and flights separately.',
                'Ask about premium all-inclusive upgrades. The extra cost for a la carte dining and premium drinks is often small.',
              ],
            },
          ].map((section) => (
            <div key={section.title} className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <section.icon className="w-8 h-8 text-[#C4960C]" />
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-3">
                {section.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-[#C4960C] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT TO LOOK FOR ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-4 h-4" /> Checklist
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What to Look For in an All-Inclusive Morocco Deal
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not all packages are created equal. Use this checklist to evaluate any all-inclusive offer before booking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Utensils, title: 'Food Quality', text: 'Look for resorts with multiple restaurants beyond the main buffet. A la carte options indicate higher food standards. Check reviews mentioning variety and freshness.' },
              { icon: Wine, title: 'Drinks Package', text: 'Standard all-inclusive usually means local brands only. Premium upgrades add imported spirits, cocktails, and better wines. Check what hours the bars operate.' },
              { icon: Bed, title: 'Room Standard', text: 'Sea-view rooms cost 20-40% more but are worth it for longer stays. Check room size, balcony, and renovation date. Recently renovated rooms make a significant difference.' },
              { icon: Waves, title: 'Beach & Pool', text: 'Direct beach access versus a road crossing matters. Check if sunbeds and umbrellas are included. Multiple pools (adult, family, heated) add real value.' },
              { icon: Users, title: 'Kids Facilities', text: 'For families: check kids club hours, age ranges, language of staff, waterslides, and whether babysitting is available. Not all resorts genuinely cater to children.' },
              { icon: Camera, title: 'Excursion Options', text: 'Good all-inclusive resorts offer bookable excursions from a desk in the lobby. Some premium packages include one or two free trips. Compare excursion prices with local tour operators.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <item.icon className="w-8 h-8 text-[#C4960C] mb-3" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAMPLE ITINERARIES ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
            <Plane className="w-4 h-4" /> Itinerary Ideas
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sample All-Inclusive Itineraries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Three popular all-inclusive itinerary formats to inspire your Morocco holiday planning, from beach-only to multi-city adventures.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {sampleItineraries.map((itin) => (
            <div key={itin.title} className="card-moroccan p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                  <itin.icon className="w-6 h-6 text-[#C4960C]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{itin.title}</h3>
                  <p className="text-sm text-[#A0522D]">{itin.destination}</p>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#C4960C] mb-4 flex items-center gap-1">
                <Wallet className="w-4 h-4" /> {itin.budget}
              </p>
              <div className="space-y-3 mb-5 flex-grow">
                {itin.days.map((d) => (
                  <div key={d.day} className="flex items-start gap-3 text-sm">
                    <span className="font-semibold text-[#A0522D] min-w-[55px] shrink-0">{d.day}</span>
                    <span className="text-gray-700">{d.activity}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Star className="w-3 h-3 text-[#C4960C]" /> <strong>Best for:</strong> {itin.bestFor}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 card-moroccan p-5 bg-amber-50/50 border-[#C4960C]/20">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-[#C4960C] mt-0.5 shrink-0" />
            <p className="text-sm text-gray-700">
              <strong>Pricing disclaimer:</strong> All itinerary prices are approximate starting rates per person based on double occupancy during shoulder season. Actual costs vary by season, hotel choice, and inclusions. Festive season and summer peak add 30-50% to these estimates. Always confirm current pricing with your tour operator or hotel.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="container-morocco py-16">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-4 h-4" /> Common Questions
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about booking an all-inclusive holiday in Morocco.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqJsonLd.mainEntity.map((faq, idx) => (
            <div key={idx} className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900 mb-3 flex items-start gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#A0522D] text-white text-sm font-bold shrink-0">{idx + 1}</span>
                {faq.name}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm pl-10">
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 text-[#A0522D] text-sm font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-4 h-4" /> Continue Reading
            </span>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-4">
              Related Morocco Guides
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[#A0522D]/30 transition-all duration-300">
                <guide.icon className="w-8 h-8 text-[#C4960C] mb-3 group-hover:text-[#A0522D] transition-colors" />
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900 mb-2 group-hover:text-[#A0522D] transition-colors flex items-center gap-2">
                  {guide.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ── */}
      <section className="zellige-border">
        <div className="moroccan-pattern py-16">
          <div className="container-morocco text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Book Your All-Inclusive Morocco Holiday?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-8">
              From sunny Agadir beach resorts to cultural Marrakech packages, Morocco offers all-inclusive holidays for every budget and travel style. Start planning your perfect getaway today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/morocco-trip-cost" className="inline-flex items-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#8B4526] transition-colors">
                <Wallet className="w-5 h-5" /> Plan Your Budget
              </Link>
              <Link href="/accommodations" className="inline-flex items-center gap-2 bg-white border-2 border-[#A0522D] text-[#A0522D] px-6 py-3 rounded-lg font-semibold hover:bg-[#A0522D]/5 transition-colors">
                <Bed className="w-5 h-5" /> Browse Accommodations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

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
  Waves,
  Sun,
  Snowflake,
  Leaf,
  Flower2,
  Calendar,
  Tag,
  Bed,
  Globe,
  Lightbulb,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Luxury Hotels Guide 2026 | Top 8 Five-Star Hotels & Resorts',
  description:
    'Complete guide to Morocco\'s finest luxury hotels and resorts. From La Mamounia and Royal Mansour in Marrakech to beach resorts and Atlas Mountain retreats. Room rates from 3,500 MAD, seasonal pricing, booking tips, and insider recommendations for the best luxury stays in Morocco.',
  keywords: [
    'Morocco luxury hotels',
    'best hotels Morocco',
    'La Mamounia Marrakech',
    'Royal Mansour Marrakech',
    'Kasbah Tamadot Morocco',
    'Mazagan Beach Resort',
    'Sofitel Tamuda Bay',
    'Four Seasons Casablanca',
    'Fairmont Royal Palm Marrakech',
    'Palais Namaskar Marrakech',
    'luxury hotels Marrakech',
    'five star hotels Morocco',
    'Morocco palace hotels',
    'luxury resorts Morocco',
    'boutique riads Morocco',
    'desert luxury camps Morocco',
    'beach resorts Morocco',
    'Morocco hotel prices 2026',
    'best time to visit Morocco hotels',
    'Morocco luxury accommodation',
    'Morocco honeymoon hotels',
    'luxury travel Morocco',
  ],
  openGraph: {
    title: 'Morocco Luxury Hotels Guide 2026 | Top 8 Five-Star Hotels & Resorts',
    description:
      'Discover Morocco\'s finest luxury hotels. From legendary palace hotels in Marrakech to Atlantic beach resorts and Atlas Mountain retreats. Complete guide with prices, seasonal tips, and insider recommendations.',
    url: `${BASE_URL}/morocco-luxury-hotels`,
    images: [
      {
        url: `${BASE_URL}/images/cover-morocco-luxury.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxury hotel courtyard in Morocco with zellige tilework, fountain, and palm trees under warm golden light',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Luxury Hotels Guide 2026 | Top 8 Five-Star Hotels & Resorts',
    description:
      'From La Mamounia to desert glamping camps. Complete guide to Morocco\'s finest luxury hotels with prices from 3,500 MAD, seasonal tips, and booking advice.',
    images: [`${BASE_URL}/images/cover-morocco-luxury.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-luxury-hotels` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-luxury-hotels`,
  name: 'Morocco Luxury Hotels Guide 2026 | Top 8 Five-Star Hotels & Resorts',
  description:
    'Complete guide to Morocco\'s finest luxury hotels and resorts. From palace hotels and desert camps to boutique riads and beach resorts, with seasonal pricing and booking tips.',
  url: `${BASE_URL}/morocco-luxury-hotels`,
  image: `${BASE_URL}/images/cover-morocco-luxury.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-luxury-hotels`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Luxury Hotels Guide', item: `${BASE_URL}/morocco-luxury-hotels` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 8 LUXURY HOTELS
   ═══════════════════════════════════════════════════════════════ */

const luxuryHotels = [
  {
    name: 'La Mamounia',
    city: 'Marrakech',
    stars: 5,
    priceRange: 'From 5,500 MAD per night',
    description:
      'The crown jewel of Moroccan hospitality, La Mamounia has welcomed royalty, heads of state, and celebrities since 1923. Set within a century-old palace surrounded by lush gardens designed by Jacques Majorelle, this legendary hotel blends Moorish architecture with Art Deco elegance. Its 2,500 sqm spa, three Michelin-worthy restaurants, and legendary bar have made it consistently one of the world\'s most celebrated hotels. Winston Churchill called it "the most lovely spot in the whole world."',
    image: '/images/hero-marrakech.webp',
    highlights: ['Historic palace setting since 1923', 'Three world-class restaurants', '2,500 sqm luxury spa', 'Eight hectares of private gardens'],
    amenities: ['Heated outdoor pool', 'Hammam & spa', 'Fine dining', 'Private gardens', 'Butler service', 'Fitness center'],
    bestFor: 'History lovers, honeymooners, and those seeking the quintessential Moroccan palace experience',
  },
  {
    name: 'Royal Mansour',
    city: 'Marrakech',
    stars: 5,
    priceRange: 'From 8,000 MAD per night',
    description:
      'Commissioned by King Mohammed VI himself, the Royal Mansour is not a hotel in the conventional sense. It is a private medina of 53 individual riads, each with its own plunge pool, rooftop terrace, and butler. The level of craftsmanship is staggering: 1,500 artisans spent three years hand-carving the zellige, stucco, and cedarwood throughout the property. Service is delivered through underground tunnels so guests are never disturbed. The three-Michelin-starred restaurant Le Jardin adds to its unmatched culinary credentials.',
    image: '/images/art-moroccan-riad-courtyard.webp',
    highlights: ['53 private riads with individual plunge pools', 'Three-Michelin-starred restaurant', 'Underground tunnel service system', '1,500 artisans over three years of construction'],
    amenities: ['Private plunge pools', 'Personal butler', 'Award-winning spa', 'Multiple restaurants', 'Rooftop terraces', 'Kids\' club'],
    bestFor: 'Ultra-luxury travelers, privacy seekers, and those who appreciate extraordinary craftsmanship',
  },
  {
    name: 'Kasbah Tamadot',
    city: 'Atlas Mountains',
    stars: 5,
    priceRange: 'From 4,500 MAD per night',
    description:
      'Sir Richard Branson\'s Moroccan retreat sits at 1,300 meters in the foothills of the High Atlas, overlooking the Berber village of Asni. Originally purchased by Branson\'s mother Eve after she fell in love with the views, the kasbah combines Berber hospitality with Virgin Limited Edition luxury. Each of the 28 rooms is individually decorated with antiques collected by the Branson family. The infinity pool appears to float above the mountains, and the on-site mule treks and cooking classes immerse guests in authentic Berber culture.',
    image: '/images/hero-atlas.webp',
    highlights: ['Panoramic Atlas Mountain views', 'Individually decorated rooms with Branson family antiques', 'Infinity pool overlooking Berber villages', 'Authentic Berber cultural experiences'],
    amenities: ['Infinity pool', 'Mountain spa', 'Berber cooking classes', 'Mule trekking', 'Tennis court', 'Yoga deck'],
    bestFor: 'Mountain lovers, adventure seekers, and those wanting luxury combined with authentic Berber culture',
  },
  {
    name: 'Mazagan Beach & Golf Resort',
    city: 'El Jadida',
    stars: 5,
    priceRange: 'From 3,500 MAD per night',
    description:
      'Morocco\'s largest luxury beach resort stretches along seven kilometers of Atlantic coastline near the historic Portuguese city of El Jadida. The 500-room resort is a self-contained world with an 18-hole Gary Player championship golf course, a 2,000 sqm spa, a casino, and more than seven restaurants. The resort caters equally well to families and couples, with a comprehensive kids\' club and an adults-only pool. The architecture draws on Moorish design with a contemporary beach resort sensibility.',
    image: '/images/card-beach.webp',
    highlights: ['Seven kilometers of private Atlantic beach', '18-hole Gary Player championship golf course', '2,000 sqm spa with hydrotherapy circuit', 'Morocco\'s premier casino'],
    amenities: ['Private beach', 'Golf course', 'Casino', 'Multiple pools', 'Kids\' club', 'Seven restaurants'],
    bestFor: 'Families, golf enthusiasts, and those seeking a comprehensive beach resort experience',
  },
  {
    name: 'Sofitel Tamuda Bay Beach & Spa',
    city: 'Tetouan',
    stars: 5,
    priceRange: 'From 4,000 MAD per night',
    description:
      'Perched on the stunning Mediterranean coast between Tetouan and the Rif Mountains, the Sofitel Tamuda Bay is Morocco\'s most elegant beach resort. Every one of its 128 rooms and suites faces the sea, and the design blends French luxury with Moroccan craftsmanship. The So SPA with L\'Occitane offers treatments using locally sourced argan oil and rose water. The private beach club, with its Balinese beds and dedicated butler service, creates a Mediterranean riviera atmosphere that is rare in Morocco.',
    image: '/images/hero-agadir.webp',
    highlights: ['Direct Mediterranean beachfront', 'All rooms face the sea', 'So SPA with L\'Occitane products', 'Private beach club with butler service'],
    amenities: ['Private beach', 'Infinity pool', 'L\'Occitane spa', 'Beach club', 'Fine dining', 'Water sports'],
    bestFor: 'Beach lovers, couples, and those seeking a Mediterranean luxury experience in Morocco',
  },
  {
    name: 'Four Seasons Hotel Casablanca',
    city: 'Casablanca',
    stars: 5,
    priceRange: 'From 5,000 MAD per night',
    description:
      'The Four Seasons Casablanca is a striking urban resort overlooking the Atlantic Ocean, set within extensive Andalusian-style gardens. Its 186 rooms and suites are the most spacious in the city, with many featuring ocean views and private balconies. The property houses Casablanca\'s finest spa, a heated outdoor pool flanked by cabanas, and a signature restaurant that blends Moroccan and French cuisine. Its position between the ocean and the Hassan II Mosque makes it the definitive luxury address in Morocco\'s largest city.',
    image: '/images/hero-casablanca-skyline.webp',
    highlights: ['Atlantic Ocean views', 'Andalusian-style gardens', 'Casablanca\'s premier spa', 'Walking distance to Hassan II Mosque'],
    amenities: ['Ocean-view pool', 'Full-service spa', 'Multiple restaurants', 'Fitness center', 'Tennis courts', 'Concierge'],
    bestFor: 'Business travelers, city explorers, and those who appreciate Four Seasons service standards',
  },
  {
    name: 'Fairmont Royal Palm Marrakech',
    city: 'Marrakech',
    stars: 5,
    priceRange: 'From 4,200 MAD per night',
    description:
      'Set on 231 hectares of olive groves with the Atlas Mountains as a backdrop, the Fairmont Royal Palm is Marrakech\'s most expansive luxury resort. The property features an 18-hole golf course designed by Cabell B. Robinson, the largest hotel pool in North Africa, and private villas with their own pools and gardens. The resort maintains a working olive farm, and guests can join harvest activities in season. The 3,500 sqm spa is among the most comprehensive in the country, offering traditional hammam alongside cutting-edge treatments.',
    image: '/images/art-moroccan-garden.webp',
    highlights: ['231 hectares of olive groves', 'Largest hotel pool in North Africa', '18-hole championship golf course', '3,500 sqm spa'],
    amenities: ['Championship golf', 'Enormous pool', 'Private villas', 'Spa & hammam', 'Tennis academy', 'Kids\' club'],
    bestFor: 'Golf lovers, families wanting space, and those seeking a resort experience outside the medina',
  },
  {
    name: 'Palais Namaskar',
    city: 'Marrakech',
    stars: 5,
    priceRange: 'From 6,000 MAD per night',
    description:
      'Palais Namaskar redefines luxury hospitality by merging Moroccan palace architecture with influences from Bali, India, and Japan. Set within 12 acres of landscaped gardens featuring four lakes, the property offers just 41 suites and villas, each with extraordinary scale and design. The water suites float over lotus-covered pools; the palace suites feature double-height ceilings and private terraces. The restaurant serves fusion cuisine that mirrors the property\'s multicultural design philosophy. It is perhaps Morocco\'s most visually striking hotel.',
    image: '/images/photo-riad-courtyard.webp',
    highlights: ['Multicultural design merging Moroccan, Balinese, and Asian influences', 'Water suites floating over lotus pools', 'Only 41 rooms for ultimate exclusivity', 'Twelve acres of landscaped gardens with four lakes'],
    amenities: ['Multiple pools', 'Private gardens', 'Destination spa', 'Fusion restaurant', 'Lake suites', 'Yoga pavilion'],
    bestFor: 'Design enthusiasts, honeymooners, and those seeking a truly unique architectural experience',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HOTEL CATEGORIES
   ═══════════════════════════════════════════════════════════════ */

const hotelCategories = [
  {
    name: 'Palace Hotels',
    icon: Crown,
    image: '/images/hero-bahia-palace.webp',
    description:
      'Morocco\'s palace hotels are the pinnacle of hospitality, often housed in historic buildings or purpose-built to replicate the grandeur of royal residences. Expect zellige tilework, carved stucco, cedarwood ceilings, grand courtyards with marble fountains, and service that reflects centuries of Moroccan hospitality tradition. Many are in Marrakech, where the tradition of palatial luxury is strongest.',
    priceRange: 'From 5,000 MAD to 15,000 MAD per night',
    examples: ['La Mamounia', 'Royal Mansour', 'Palais Namaskar', 'Amanjena'],
    highlights: ['Historic or historically-inspired architecture', 'World-class restaurants and spas', 'Vast private gardens and courtyards', 'Butler and concierge service'],
  },
  {
    name: 'Desert Luxury Camps',
    icon: Star,
    image: '/images/hero-desert-glamping.webp',
    description:
      'The Sahara Desert near Merzouga and Zagora has given rise to a new category of luxury: desert glamping camps that offer five-star comfort under the stars. These camps feature lavish tents with proper beds, en-suite bathrooms, and often private decks for stargazing. Evening entertainment includes traditional Gnawa music, campfire dinners, and camel treks at sunset. The silence and immensity of the desert create an experience that no palace hotel can replicate.',
    priceRange: 'From 3,000 MAD to 8,000 MAD per night',
    examples: ['Scarabeo Camp', 'Desert Luxury Camp Merzouga', 'Erg Chigaga Luxury Camp', 'Kam Kam Dunes'],
    highlights: ['Luxury tents with en-suite bathrooms', 'Saharan sunset camel treks', 'Stargazing in zero light pollution', 'Traditional Berber campfire dinners'],
  },
  {
    name: 'Boutique Riads',
    icon: Gem,
    image: '/images/card-riad.webp',
    description:
      'The riad is Morocco\'s most distinctive accommodation. These traditional houses, built around a central courtyard with a garden or fountain, have been lovingly restored into intimate boutique hotels. The best riads offer just 5 to 15 rooms, ensuring personalized service. Many feature rooftop terraces with medina views, plunge pools, and home-cooked meals that rival the finest restaurants. Staying in a riad is not just accommodation; it is a cultural immersion.',
    priceRange: 'From 1,500 MAD to 5,000 MAD per night',
    examples: ['Riad Kniza', 'Riad Fes', 'Riad Laaroussa', 'Dar Ahlam'],
    highlights: ['Intimate settings with 5-15 rooms', 'Central courtyards with fountains', 'Rooftop terraces with medina views', 'Personalized home-cooked cuisine'],
  },
  {
    name: 'Beach Resorts',
    icon: Waves,
    image: '/images/hero-essaouira-ramparts.webp',
    description:
      'Morocco\'s Atlantic and Mediterranean coasts host world-class beach resorts that rival the best in the Mediterranean. From the windswept shores of Essaouira to the calm waters of Tamuda Bay, these resorts combine ocean access with full resort amenities. Many feature golf courses, thalassotherapy spas, and water sports facilities. The beach resort experience in Morocco offers excellent value compared to similar properties in Southern Europe.',
    priceRange: 'From 2,500 MAD to 7,000 MAD per night',
    examples: ['Mazagan Beach Resort', 'Sofitel Tamuda Bay', 'Sofitel Essaouira Mogador', 'Banyan Tree Tamouda Bay'],
    highlights: ['Direct beach access', 'Championship golf courses', 'Thalassotherapy and ocean spas', 'Water sports and ocean activities'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL PRICING
   ═══════════════════════════════════════════════════════════════ */

const seasonalPricing = [
  {
    season: 'Peak Season (October - April)',
    icon: Sun,
    priceRange: 'From 4,000 MAD to 15,000 MAD per night',
    description:
      'The most popular time to visit Morocco, with perfect weather in Marrakech and the south. Hotel rates are at their highest, and availability can be tight at the most popular properties. Christmas, New Year, and Easter see the steepest premiums, with some hotels charging 50-100% above standard rates.',
    tip: 'Book at least 3-4 months in advance for peak-season stays. Many luxury hotels offer early-booking discounts of 10-15% for reservations made 90+ days ahead.',
    color: 'var(--color-accent)',
  },
  {
    season: 'Shoulder Season (May - June, September)',
    icon: Leaf,
    priceRange: 'From 3,000 MAD to 10,000 MAD per night',
    description:
      'An excellent time for value. Weather is still pleasant (though warmer in the south), crowds are thinner, and hotel rates drop by 20-30% compared to peak season. September is particularly good as the summer heat fades but the crowds have not yet returned.',
    tip: 'The best balance of price and weather. Many hotels offer complimentary upgrades during shoulder season when occupancy is lower.',
    color: 'var(--color-gold)',
  },
  {
    season: 'Summer (July - August)',
    icon: Snowflake,
    priceRange: 'From 2,500 MAD to 7,000 MAD per night',
    description:
      'Marrakech and inland cities can exceed 45 degrees Celsius, making this the low season for most luxury hotels. However, beach resorts on the Atlantic and Mediterranean coasts thrive during summer. Expect the lowest rates of the year at inland properties, but higher rates at coastal resorts.',
    tip: 'For inland hotels, summer is when you get the best deals. Beach resorts are the exception and will be at peak pricing. Consider the Atlas Mountains as a cool alternative.',
    color: '#4A90D9',
  },
  {
    season: 'Ramadan Period (Varies Annually)',
    icon: Calendar,
    priceRange: 'From 2,000 MAD to 6,000 MAD per night',
    description:
      'During Ramadan, many Moroccans travel domestically and some restaurants operate reduced hours during the day. Luxury hotels continue to serve meals to guests but the atmosphere is more subdued. Rates are often at their lowest, making this a unique opportunity for budget-conscious luxury travelers who respect the cultural moment.',
    tip: 'An excellent time for deals if you are comfortable with the cultural context. Hotel restaurants always remain open for guests. The iftar (breaking of fast) dinners are a special cultural experience.',
    color: '#7B68AE',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Direct for Best Perks',
    icon: Globe,
    description:
      'While third-party sites may show lower rates, booking directly through the hotel\'s website often comes with perks: complimentary breakfast, room upgrades, late checkout, and spa credits. Many luxury hotels in Morocco price-match third-party sites and add these extras when you book direct.',
  },
  {
    title: 'Ask About Package Deals',
    icon: Tag,
    description:
      'Most luxury hotels offer packages that bundle accommodation with airport transfers, spa treatments, or dining credits. These packages can save 15-25% compared to booking everything separately. Ask about honeymoon, anniversary, and golf packages specifically.',
  },
  {
    title: 'Consider Half-Board or Full-Board',
    icon: Bed,
    description:
      'Many Moroccan luxury hotels offer half-board (breakfast and dinner) or full-board rates that represent excellent value. Since hotel restaurants in Morocco are often among the best in the city, this can save significantly compared to dining out at similar quality restaurants.',
  },
  {
    title: 'Travel Midweek for Lower Rates',
    icon: Calendar,
    description:
      'Sunday through Thursday stays are typically 10-20% cheaper than Friday and Saturday nights at most Moroccan luxury hotels. If your dates are flexible, arriving on a Sunday or Monday and departing midweek can yield meaningful savings.',
  },
  {
    title: 'Join Loyalty Programs Before Booking',
    icon: Award,
    description:
      'Properties like Four Seasons, Fairmont, and Sofitel belong to larger hotel groups with loyalty programs. Sign up before your first booking to start earning points. Elite members often receive complimentary upgrades, late checkout, and welcome amenities even on their first stay.',
  },
  {
    title: 'Book During Moroccan Holidays for Unique Experiences',
    icon: Sparkles,
    description:
      'While prices may be higher during Moroccan holidays, the cultural programming at luxury hotels is extraordinary. Many properties host special dinners, traditional music performances, and cultural activities during Eid, Throne Day, and other celebrations that are unavailable at other times.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE OVERVIEW
   ═══════════════════════════════════════════════════════════════ */

const priceOverview = [
  { category: 'Boutique Riad (Luxury)', price: 'From 1,500 MAD per night', note: '5-15 rooms, intimate and personalized' },
  { category: 'Desert Luxury Camp', price: 'From 3,000 MAD per night', note: 'Glamping with five-star amenities' },
  { category: 'Beach Resort (5-Star)', price: 'From 3,500 MAD per night', note: 'Full resort with pool, beach, golf' },
  { category: 'Mountain Retreat', price: 'From 4,000 MAD per night', note: 'Atlas Mountain setting with activities' },
  { category: 'City Palace Hotel', price: 'From 5,000 MAD per night', note: 'Historic grandeur, world-class dining' },
  { category: 'Ultra-Luxury Riad/Palace', price: 'From 8,000 MAD per night', note: 'Private riads, butler service, Michelin dining' },
  { category: 'Private Villa Rental', price: 'From 10,000 MAD per night', note: 'Staffed villa with cook, pool, gardens' },
  { category: 'Royal Suite (Top Properties)', price: 'From 25,000 MAD per night', note: 'The pinnacle: personal staff, maximum space' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best luxury hotel in Morocco overall?',
    answer:
      'La Mamounia and Royal Mansour in Marrakech consistently rank as Morocco\'s top two luxury hotels. La Mamounia offers a more historic, classic experience, while the Royal Mansour provides unmatched privacy with its individual riad concept. Both deliver extraordinary service, dining, and spa experiences. Your choice depends on whether you prefer the heritage and gardens of La Mamounia (from 5,500 MAD per night) or the contemporary ultra-luxury of the Royal Mansour (from 8,000 MAD per night).',
  },
  {
    question: 'Is it worth paying more for a palace hotel versus a boutique riad?',
    answer:
      'Both offer exceptional experiences, but they are fundamentally different. Palace hotels provide grand public spaces, multiple restaurants, large pools, and comprehensive amenities. Boutique riads offer intimacy, personalized attention, and a feeling of being a guest in a private home. Many travelers stay at both during a single trip: a palace hotel for the resort experience and a riad for the cultural immersion. Luxury riads start from 1,500 MAD per night, while palace hotels start from 5,000 MAD per night.',
  },
  {
    question: 'When is the cheapest time to book luxury hotels in Morocco?',
    answer:
      'July and August offer the lowest rates at inland hotels, with discounts of 30-50% compared to peak season. However, temperatures in Marrakech regularly exceed 40 degrees Celsius. For the best balance of price and comfort, target May, June, or September, when rates are 20-30% below peak but the weather is still pleasant. Ramadan also brings lower rates at many properties.',
  },
  {
    question: 'Do Morocco luxury hotels cater to families with children?',
    answer:
      'Many do, and some are specifically designed for families. Mazagan Beach Resort and Fairmont Royal Palm both have excellent kids\' clubs, family pools, and child-friendly dining options. The Four Seasons Casablanca offers complimentary amenities for children. Desert camps can also be family-friendly for children over six years old. Boutique riads with fewer than 10 rooms may be less suited to young children due to plunge pools and steep stairs.',
  },
  {
    question: 'How far in advance should I book luxury hotels in Morocco?',
    answer:
      'For peak season (October to April), book at least 3-4 months in advance, and 6 months or more for Christmas and New Year stays. For shoulder season, 4-6 weeks is usually sufficient. Properties with fewer than 20 rooms, such as boutique riads and intimate desert camps, sell out faster than large resorts. The Royal Mansour and La Mamounia can be fully booked months in advance during peak periods.',
  },
  {
    question: 'Are luxury hotel prices in Morocco good value compared to Europe?',
    answer:
      'Exceptional value. A five-star luxury experience in Morocco typically costs 30-50% less than equivalent properties in France, Italy, or Spain. A night at La Mamounia (from 5,500 MAD, approximately 500 EUR) delivers a level of service, craftsmanship, and dining that would cost 800-1,200 EUR at comparable European palace hotels. The exchange rate further benefits visitors paying in EUR, GBP, or USD.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLuxuryHotelsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/cover-morocco-luxury.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Luxury Hotels Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Luxury Accommodation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Luxury Hotels Guide:
            <br className="hidden md:block" /> Top 8 Five-Star Hotels &amp; Resorts
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From legendary palace hotels in Marrakech to Atlas Mountain retreats and Atlantic
            beach resorts. Your complete guide to the finest luxury stays in Morocco, with prices
            from 3,500 MAD per night.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is One of the World&apos;s Great Luxury Destinations
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco occupies a unique position in the global luxury travel landscape. It is
                one of the few countries where centuries-old craftsmanship, from zellige tilework
                to hand-carved cedarwood, is not merely preserved as museum artifact but actively
                employed in the creation of contemporary luxury. The result is hotels that feel
                both ancient and modern, rooted in tradition yet entirely fresh.
              </p>
              <p>
                The range of experiences is extraordinary. Within a single trip, you can sleep in
                a restored 17th-century riad in the Fes medina, a contemporary glass-and-stone
                suite overlooking the Atlas Mountains, a tented camp under the Saharan stars, and
                an Atlantic-facing beach villa. No other destination offers this diversity within
                such a compact geography.
              </p>
              <p>
                Crucially, luxury in Morocco remains exceptional value. A night at one of the
                world&apos;s finest palace hotels here costs a fraction of what you would pay for a
                comparable experience in London, Paris, or Dubai. The service, the food, the
                architecture, and the cultural richness are equal to the best anywhere, but the
                prices start from 3,500 MAD per night, making world-class luxury genuinely
                accessible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Hotel Price Overview
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay across different tiers of luxury accommodation in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices for standard rooms. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when rates may increase by 30-100%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceOverview.map((item, i) => (
                <div
                  key={item.category}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top 8 Luxury Hotel Profiles ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 8 Luxury Hotels in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From historic palace hotels and mountain retreats to beach resorts and design masterpieces, these are Morocco&apos;s finest luxury properties.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting rates and vary by season, room type, and availability.
          </p>

          <div className="space-y-12">
            {luxuryHotels.map((hotel, index) => (
              <div key={hotel.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Image side */}
                  <div className={`relative h-64 lg:h-auto min-h-[320px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img
                      src={hotel.image}
                      alt={`${hotel.name} luxury hotel in ${hotel.city}, Morocco - exterior and grounds`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-semibold text-[var(--color-accent)]">
                      <Crown className="w-3.5 h-3.5" />
                      #{index + 1}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1">
                      {Array.from({ length: hotel.stars }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`p-6 lg:p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {hotel.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-[var(--text-muted)] mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {hotel.city}, Morocco
                        </div>
                      </div>
                    </div>

                    <div className="inline-block px-3 py-1 text-sm font-semibold rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-4">
                      {hotel.priceRange}
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                      {hotel.description}
                    </p>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Highlights
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {hotel.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-3">
                        Key Amenities
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {hotel.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hotel Categories ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Luxury Accommodation in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers four distinct categories of luxury accommodation, each with its own character and appeal.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hotelCategories.map((category) => {
              const CategoryIcon = category.icon;
              return (
                <div key={category.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-52">
                    <img
                      src={category.image}
                      alt={`${category.name} luxury accommodation in Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-white" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                        {category.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 backdrop-blur-sm text-[var(--color-accent)]">
                      {category.priceRange}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
                        Notable Properties
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, i) => (
                          <span key={i} className="inline-flex items-center px-2.5 py-1 text-xs rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {category.highlights.map((highlight, i) => (
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
      </section>

      {/* ── Seasonal Pricing Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Pricing Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When you visit significantly impacts what you pay. Here is how rates vary across the year at Morocco&apos;s luxury hotels.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {seasonalPricing.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${season.color}15` }}
                    >
                      <SeasonIcon className="w-6 h-6" style={{ color: season.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <div className="inline-block px-2 py-0.5 text-xs font-medium rounded mt-1" style={{ backgroundColor: `${season.color}15`, color: season.color }}>
                        {season.priceRange}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                    {season.description}
                  </p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {season.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Expert Booking Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for getting the best value at Morocco&apos;s luxury hotels.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Luxury Hotel Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-marrakech.webp"
                alt="Marrakech cityscape with palace hotels, minarets, and the Atlas Mountains in the background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Marrakech Palace Hotels</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-desert-glamping.webp"
                alt="Luxury desert camp in the Sahara with elegant tented suites under a starlit sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sahara Desert Luxury Camps</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="Mountain retreat hotel in the High Atlas with panoramic views over valleys and Berber villages"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlas Mountain Retreats</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/images/card-riad.webp"
                alt="Interior courtyard of a luxury boutique riad in Morocco with zellige tilework and central fountain"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Boutique Riad Courtyards</p>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <img
                src="/images/card-beach.webp"
                alt="Luxury beach resort on Morocco's Atlantic coast with infinity pool overlooking the ocean"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Atlantic Beach Resorts</p>
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
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/morocco-spa-guide" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spa &amp; Hammam Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From traditional public hammams at 50 MAD to world-class luxury spa rituals. Complete wellness guide with prices and etiquette.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/luxury" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest hotels, riads, restaurants, and experiences for luxury travelers across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/city/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Marrakech: medina, souks, palaces, gardens, restaurants, and nightlife.
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

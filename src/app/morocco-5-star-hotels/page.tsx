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
  Crown,
  Waves,
  Wifi,
  UtensilsCrossed,
  CalendarCheck,
  BadgePercent,
  Tent,
  Globe,
  BedDouble,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best 5-Star Hotels in Morocco 2026 | Luxury Resorts, Palace Hotels & Premium Stays',
  description:
    'Complete guide to Morocco\'s best 5-star hotels. From Royal Mansour and La Mamounia in Marrakech to desert luxury camps in the Sahara. Palace hotels, beach resorts, price ranges from 3,000 MAD/night, best time to book, and insider tips for luxury stays.',
  keywords: [
    '5 star hotels morocco',
    'luxury hotel morocco',
    'morocco 5 star resorts',
    'five star hotels in morocco',
    'best luxury hotels in morocco',
    'morocco luxury hotels',
    'most luxurious hotel in morocco',
    '5 star hotels in morocco',
    'palace hotels morocco',
    'morocco luxury resorts',
    'Royal Mansour Marrakech',
    'La Mamounia hotel',
    'Four Seasons Morocco',
    'luxury beach resort morocco',
    'desert luxury camp morocco',
    'morocco hotel prices 2026',
    'all inclusive luxury morocco',
    'boutique luxury hotel morocco',
    'five star hotel marrakech',
    'casablanca luxury hotel',
    'fes palace hotel',
    'agadir 5 star resort',
  ],
  openGraph: {
    title: 'Best 5-Star Hotels in Morocco 2026 | Luxury Resorts, Palace Hotels & Premium Stays',
    description:
      'Discover Morocco\'s finest 5-star hotels. From iconic palace hotels in Marrakech to luxury beach resorts in Agadir and exclusive desert camps in the Sahara. Complete guide with prices, amenities, and booking tips.',
    url: `${BASE_URL}/morocco-5-star-hotels`,
    images: [
      {
        url: `${BASE_URL}/images/hero-luxury-hotel.webp`,
        width: 1200,
        height: 630,
        alt: 'Luxurious 5-star hotel in Morocco with traditional Moorish architecture and lush courtyard gardens',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best 5-Star Hotels in Morocco 2026 | Palace Hotels & Luxury Resorts',
    description:
      'From Royal Mansour to desert luxury camps. Complete guide to Morocco\'s best 5-star hotels with prices, amenities, and insider tips for the ultimate luxury stay.',
    images: [`${BASE_URL}/images/hero-luxury-hotel.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-5-star-hotels` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-5-star-hotels`,
  name: 'Best 5-Star Hotels in Morocco 2026 | Luxury Resorts, Palace Hotels & Premium Stays',
  description:
    'Complete guide to Morocco\'s best 5-star hotels. Palace hotels, luxury beach resorts, desert camps, price ranges, amenities, and insider booking tips.',
  url: `${BASE_URL}/morocco-5-star-hotels`,
  image: `${BASE_URL}/images/hero-luxury-hotel.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-5-star-hotels`,
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
      { '@type': 'ListItem', position: 2, name: 'Best 5-Star Hotels in Morocco', item: `${BASE_URL}/morocco-5-star-hotels` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most luxurious hotel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Royal Mansour Marrakech is widely regarded as the most luxurious hotel in Morocco. Owned by King Mohammed VI, it features private riads with plunge pools, a 2,500 sqm spa, and impeccable service. Rates start from 15,000 MAD per night for entry-level riads.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a 5-star hotel cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five-star hotels in Morocco range from 3,000 MAD per night for properties like Hyatt Regency Casablanca to over 25,000 MAD per night for ultra-luxury suites at Royal Mansour or Amanjena. The average price for a standard room at a top 5-star property is from 5,000-8,000 MAD per night. Seasonal pricing applies, with peak rates during October-April.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to book a luxury hotel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Book 3-6 months in advance for peak season (October-April) to secure the best rooms and rates. For the lowest prices, visit during shoulder seasons (May-June or September) when temperatures are pleasant and rates drop by 30-40%. Ramadan periods often offer significant discounts at luxury properties.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco 5-star hotels all-inclusive?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Morocco 5-star hotels operate on a bed-and-breakfast or half-board basis. True all-inclusive packages are mainly found at beach resorts in Agadir and Saaidia. City palace hotels like Royal Mansour and La Mamounia offer room-only or B&B rates, as guests typically explore the city for dining.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to tip at 5-star hotels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping is customary and appreciated at Moroccan luxury hotels. Standard tips: porters from 20-50 MAD per bag, housekeeping from 20-50 MAD per day, concierge from 50-100 MAD for special arrangements, and restaurant servers 10-15% if service is not included. Some ultra-luxury properties include a service charge.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 5-STAR HOTELS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const hotelsByCity = [
  {
    city: 'Marrakech',
    icon: Star,
    description:
      'The undisputed luxury capital of Morocco. Marrakech boasts the highest concentration of world-class 5-star hotels, from restored royal palaces to modern international brands, all within reach of the vibrant medina.',
    hotels: [
      {
        name: 'Royal Mansour',
        type: 'Palace Hotel',
        icon: Crown,
        price: 'From 15,000 MAD/night',
        description:
          'The crown jewel of Moroccan hospitality. Owned by King Mohammed VI, each accommodation is a private three-story riad with its own plunge pool, rooftop terrace, and dedicated butler. The 2,500 sqm spa, Michelin-starred dining, and secret underground tunnels for staff make this unlike any hotel on Earth.',
        highlights: ['Private riads with plunge pools', 'Underground staff tunnels', '2,500 sqm spa', 'Michelin-starred restaurants'],
      },
      {
        name: 'La Mamounia',
        type: 'Grand Palace Hotel',
        icon: Crown,
        price: 'From 6,000 MAD/night',
        description:
          'A legend since 1929, La Mamounia sits within 8 hectares of historic gardens originally gifted by a sultan as a wedding present. Winston Churchill called it "the most lovely spot in the whole world." Renovated to perfection, it blends Art Deco elegance with Moorish craftsmanship.',
        highlights: ['8 hectares of historic gardens', 'Art Deco meets Moorish design', 'Iconic celebrity heritage', '2,500 sqm world-class spa'],
      },
      {
        name: 'Four Seasons Resort Marrakech',
        type: 'International Luxury',
        icon: Award,
        price: 'From 5,500 MAD/night',
        description:
          'Set on a sprawling estate just south of the medina with views of the Atlas Mountains. Two swimming pools, a championship-level tennis court, and a spa that ranks among the finest in Africa. The property feels like a self-contained oasis of calm.',
        highlights: ['Atlas Mountain views', 'Two swimming pools', 'Championship tennis court', 'Family-friendly luxury'],
      },
      {
        name: 'Selman Marrakech',
        type: 'Boutique Palace',
        icon: Gem,
        price: 'From 5,000 MAD/night',
        description:
          'Famous for its thoroughbred Arabian horses that roam the grounds. The 60-meter heated pool is one of the longest private hotel pools in Morocco. Architecturally stunning with intricate plasterwork, zellige tilework, and soaring ceilings throughout.',
        highlights: ['Arabian horses on grounds', '60-meter heated pool', 'Exquisite Moorish architecture', 'Extensive private gardens'],
      },
    ],
  },
  {
    city: 'Fes',
    icon: Building,
    description:
      'The spiritual and cultural heart of Morocco offers a more intimate luxury experience. Fes 5-star properties tend to be restored palaces within the ancient medina, offering an immersion in history that no modern resort can match.',
    hotels: [
      {
        name: 'Palais Faraj Suites & Spa',
        type: 'Heritage Palace',
        icon: Crown,
        price: 'From 3,500 MAD/night',
        description:
          'Perched on a hilltop at the edge of the Fes medina, this restored 19th-century palace offers sweeping panoramic views over the old city. The rooftop restaurant and bar provide what many consider the finest vista in all of Fes. The spa features a traditional hammam with heated marble.',
        highlights: ['Panoramic medina views', 'Restored 19th-century palace', 'Rooftop dining with views', 'Traditional hammam spa'],
      },
      {
        name: 'Riad Fes',
        type: 'Luxury Riad-Hotel',
        icon: Gem,
        price: 'From 3,000 MAD/night',
        description:
          'A masterful conversion of two historic houses in the heart of the medina. The 30 rooms and suites feature museum-quality zellige tilework, carved cedarwood, and stucco craftsmanship. The bar and Moroccan restaurant are among the best in Fes.',
        highlights: ['Museum-quality tilework', 'Heart of the medina', 'Award-winning restaurant', 'Intimate 30-room property'],
      },
    ],
  },
  {
    city: 'Casablanca',
    icon: Building,
    description:
      'Morocco\'s business capital and largest city offers modern international luxury with an ocean-facing twist. The 5-star hotels here cater to both business travelers and those seeking a cosmopolitan Moroccan experience.',
    hotels: [
      {
        name: 'Four Seasons Hotel Casablanca',
        type: 'International Luxury',
        icon: Award,
        price: 'From 4,500 MAD/night',
        description:
          'Casablanca\'s premier luxury address, set on the Atlantic coastline with stunning ocean views from most rooms. The property features beautifully landscaped gardens, an oceanfront pool, and a spa with panoramic sea views. The dining options include Moroccan, French, and Japanese cuisine.',
        highlights: ['Atlantic Ocean views', 'Oceanfront pool', 'Multiple dining venues', 'Panoramic spa'],
      },
      {
        name: 'Hyatt Regency Casablanca',
        type: 'Business Luxury',
        icon: Building,
        price: 'From 3,000 MAD/night',
        description:
          'Located on Place des Nations Unies in the commercial heart of the city. A sleek, modern property that serves as the hub for international business travelers. The rooftop pool and bar offer views over the cityscape, and the proximity to the medina and Hassan II Mosque is unmatched.',
        highlights: ['Central business location', 'Rooftop pool and bar', 'Near Hassan II Mosque', 'Modern conference facilities'],
      },
    ],
  },
  {
    city: 'Rabat',
    icon: Building,
    description:
      'The capital city has a quieter, more refined luxury scene. Rabat\'s 5-star hotels combine political sophistication with Moroccan elegance, often hosting heads of state and dignitaries.',
    hotels: [
      {
        name: 'Sofitel Rabat Jardin des Roses',
        type: 'Garden Palace',
        icon: Crown,
        price: 'From 3,500 MAD/night',
        description:
          'Set within a magnificent 17-hectare Andalusian garden that is one of the most beautiful hotel grounds in all of Africa. The property blends French colonial elegance with Moroccan design, and the So SPA is a sanctuary of calm. The garden alone, with its 2,000 rose bushes, justifies the stay.',
        highlights: ['17-hectare Andalusian garden', '2,000 rose bushes', 'So SPA wellness center', 'Diplomatic district location'],
      },
    ],
  },
  {
    city: 'Essaouira',
    icon: Waves,
    description:
      'The windswept Atlantic coastal town offers a different kind of luxury: intimate, artistic, and infused with ocean air. Essaouira\'s 5-star properties combine heritage architecture with the laid-back coastal atmosphere.',
    hotels: [
      {
        name: 'Heure Bleue Palais',
        type: 'Heritage Palace',
        icon: Crown,
        price: 'From 3,200 MAD/night',
        description:
          'A meticulously restored palace within the medina walls, just steps from the Atlantic ramparts. Features a rooftop pool with ocean views, a cinema room, and interiors that blend European elegance with Moroccan artisanship. The most refined address in Essaouira.',
        highlights: ['Rooftop pool with ocean views', 'Private cinema room', 'Steps from the ramparts', 'Award-winning restoration'],
      },
    ],
  },
  {
    city: 'Agadir',
    icon: Waves,
    description:
      'Morocco\'s premier beach destination for resort-style luxury. Agadir\'s 5-star hotels line a sweeping 10-kilometer beach and offer the full resort experience with pools, spas, golf, and all-inclusive packages.',
    hotels: [
      {
        name: 'Sofitel Agadir Royal Bay Resort',
        type: 'Beach Resort',
        icon: Award,
        price: 'From 3,500 MAD/night',
        description:
          'The flagship luxury property on Agadir\'s beachfront. A grand Moorish-style resort with direct beach access, three pools, a championship golf course nearby, and a comprehensive spa. The architecture evokes a Moroccan palace transplanted to the seaside.',
        highlights: ['Direct beach access', 'Three swimming pools', 'Near golf course', 'Moorish palace architecture'],
      },
      {
        name: 'Tikida Palace Agadir',
        type: 'Beach Palace',
        icon: Gem,
        price: 'From 2,800 MAD/night',
        description:
          'A Moroccan-owned palace resort set in lush tropical gardens along the beachfront. Known for exceptional service and a more authentic Moroccan feel than international chain resorts. The thalassotherapy spa uses Atlantic seawater for healing treatments.',
        highlights: ['Tropical garden setting', 'Thalassotherapy spa', 'Authentic Moroccan character', 'Beachfront location'],
      },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT LUXURY CAMPS
   ═══════════════════════════════════════════════════════════════ */

const desertLuxuryCamps = [
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert (45 min from Marrakech)',
    price: 'From 4,000 MAD/night',
    description:
      'Glamping redefined in the stone desert of Agafay. Each tent features a king-size bed, private bathroom, and a terrace with Atlas Mountain views. Dinner under the stars, camel rides, and sunrise yoga complete the experience.',
    highlights: ['Atlas Mountain views', 'Private bathrooms', 'Stargazing terrace', 'Camel rides included'],
  },
  {
    name: 'Merzouga Luxury Desert Camp',
    location: 'Erg Chebbi, Sahara',
    price: 'From 5,000 MAD/night',
    description:
      'True Sahara luxury at the foot of the towering Erg Chebbi dunes. Spacious tents with en-suite bathrooms, air conditioning, and Berber-style interiors. The evening includes traditional Berber music, a multi-course dinner, and the most spectacular stargazing in Morocco.',
    highlights: ['En-suite air-conditioned tents', 'Erg Chebbi dune location', 'Traditional Berber entertainment', 'World-class stargazing'],
  },
  {
    name: 'Kam Kam Dunes Luxury Camp',
    location: 'Erg Chebbi, Merzouga',
    price: 'From 6,000 MAD/night',
    description:
      'Among the most exclusive desert experiences in North Africa. Each suite tent includes a private terrace, outdoor shower, and handcrafted Moroccan furnishings. A private chef prepares gourmet meals, and personalized excursions include sandboarding and 4x4 desert tours.',
    highlights: ['Suite tents with private terraces', 'Private chef experience', 'Sandboarding excursions', 'Handcrafted Moroccan furnishings'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: AMENITIES TO EXPECT
   ═══════════════════════════════════════════════════════════════ */

const luxuryAmenities = [
  {
    category: 'Room & Suite Features',
    icon: BedDouble,
    items: [
      'King-size beds with premium Egyptian cotton linens',
      'Marble bathrooms with rain shower and soaking tub',
      'Private balcony or terrace (most properties)',
      'In-room safe, minibar, and Nespresso machine',
      'Complimentary high-speed WiFi throughout',
      'Turndown service with Moroccan pastries',
    ],
  },
  {
    category: 'Dining & Beverage',
    icon: UtensilsCrossed,
    items: [
      'Multiple on-site restaurants (Moroccan, international, fine dining)',
      'In-room dining available 24 hours',
      'Poolside bar and lounge service',
      'Complimentary Moroccan mint tea on arrival',
      'Sommelier service with Moroccan and international wines',
      'Cooking classes featuring local cuisine',
    ],
  },
  {
    category: 'Wellness & Recreation',
    icon: Sparkles,
    items: [
      'Full-service spa with traditional hammam',
      'Heated outdoor and/or indoor swimming pools',
      'Fitness center with modern equipment',
      'Yoga and meditation sessions (select properties)',
      'Golf course access or on-site facilities',
      'Tennis courts and water sports (resort properties)',
    ],
  },
  {
    category: 'Service & Concierge',
    icon: ShieldCheck,
    items: [
      'Dedicated concierge for tours and restaurant bookings',
      'Airport transfers in luxury vehicles',
      'Butler service (ultra-luxury properties)',
      'Multilingual staff (Arabic, French, English, Spanish)',
      'Valet parking and car rental arrangements',
      'Childcare and kids\' club (family properties)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE RANGES
   ═══════════════════════════════════════════════════════════════ */

const priceRanges = [
  { tier: 'Entry-Level 5-Star', range: 'From 2,500-4,000 MAD/night', examples: 'Hyatt Regency Casablanca, Tikida Palace Agadir', description: 'International-standard 5-star amenities. Modern rooms, pool, spa, and dining. Excellent value for the quality.' },
  { tier: 'Premium 5-Star', range: 'From 4,000-7,000 MAD/night', examples: 'Four Seasons Marrakech, Sofitel Rabat, Heure Bleue Palais', description: 'World-class service, exceptional dining, stunning grounds. The sweet spot of luxury and value in Morocco.' },
  { tier: 'Ultra-Luxury Palace', range: 'From 7,000-15,000 MAD/night', examples: 'La Mamounia, Selman Marrakech, Palais Faraj', description: 'Iconic properties with heritage, bespoke service, and extraordinary architecture. Once-in-a-lifetime stays.' },
  { tier: 'Royal / Aman Tier', range: 'From 15,000-30,000+ MAD/night', examples: 'Royal Mansour, Amanjena', description: 'The absolute pinnacle. Private riads, personal butlers, Michelin dining. Reserved for those seeking the extraordinary.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ALL-INCLUSIVE VS BOUTIQUE COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const stayComparison = [
  {
    aspect: 'Best For',
    allInclusive: 'Beach holidays, families, couples wanting hassle-free relaxation. Popular in Agadir and Saaidia.',
    boutique: 'Cultural immersion, city exploration, couples, honeymooners. Popular in Marrakech, Fes, Essaouira.',
  },
  {
    aspect: 'Pricing Model',
    allInclusive: 'One upfront price covers rooms, meals, drinks, and often activities. From 4,000 MAD/night for two.',
    boutique: 'Room rate plus separate charges for dining, spa, and excursions. From 3,000 MAD/night room only.',
  },
  {
    aspect: 'Dining Experience',
    allInclusive: 'Buffet restaurants, themed dinner nights, pool bars. Good variety but less personalized.',
    boutique: 'Intimate restaurants, chef-prepared menus, local ingredients. Often among the best dining in the city.',
  },
  {
    aspect: 'Atmosphere',
    allInclusive: 'Resort-style with pools, entertainment programs, and scheduled activities. Lively and social.',
    boutique: 'Intimate, quiet, design-focused. Each property has a unique character. Privacy is prioritized.',
  },
  {
    aspect: 'Location',
    allInclusive: 'Typically beachfront or in resort zones outside city centers. Self-contained compounds.',
    boutique: 'Often within medinas or historic quarters. Walking distance to cultural sites and souks.',
  },
  {
    aspect: 'Value Assessment',
    allInclusive: 'Better value if you eat and drink a lot. Can save 30-40% vs paying for everything separately.',
    boutique: 'Better value if you want to explore and eat outside. Pay only for what you use.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LOYALTY PROGRAMS
   ═══════════════════════════════════════════════════════════════ */

const loyaltyPrograms = [
  {
    program: 'Marriott Bonvoy',
    icon: Globe,
    hotels: 'Royal Mansour (Luxury Collection), multiple Mariott properties in Marrakech and Casablanca',
    benefits: 'Points earning on stays, room upgrades, late checkout, and lounge access at Platinum tier and above.',
  },
  {
    program: 'World of Hyatt',
    icon: Globe,
    hotels: 'Hyatt Regency Casablanca, Park Hyatt Marrakech',
    benefits: 'Points earning, suite upgrades for Globalists, complimentary breakfast, and late checkout.',
  },
  {
    program: 'Accor Live Limitless',
    icon: Globe,
    hotels: 'Sofitel Marrakech, Sofitel Rabat, Sofitel Agadir, Fairmont Royal Palm Marrakech',
    benefits: 'Points earning, room upgrades, welcome amenities, and access to exclusive member experiences.',
  },
  {
    program: 'Four Seasons Preferred Partner',
    icon: Globe,
    hotels: 'Four Seasons Marrakech, Four Seasons Casablanca',
    benefits: 'Complimentary breakfast, room upgrades, early check-in, late checkout, and resort credits.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Morocco5StarHotelsPage() {
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
            backgroundImage: 'url(/images/hero-luxury-hotel.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Best 5-Star Hotels in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Crown className="w-4 h-4" />
            Luxury Accommodation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best 5-Star Hotels in Morocco:
            <br className="hidden md:block" /> Luxury Resorts &amp; Palace Stays
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From royal palace hotels where kings have slept to desert camps under Saharan stars.
            Your complete guide to Morocco&apos;s finest luxury accommodation from 2,800 MAD per night.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco&apos;s 5-Star Hotels: Where Heritage Meets World-Class Luxury
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has quietly become one of the world&apos;s most compelling luxury hotel destinations.
                What sets it apart is something no amount of money can manufacture elsewhere: centuries of
                palatial architecture, master artisans who still practice zellige tilework and carved plaster
                by hand, and a hospitality culture rooted in the sacred Moroccan tradition that a guest is a
                gift from God.
              </p>
              <p>
                The result is a collection of 5-star hotels that range from converted royal palaces in
                Marrakech&apos;s ancient medina to sleek Atlantic-facing resorts in Casablanca, from
                intimate heritage retreats in Fes to full-scale beach compounds in Agadir. Whether you
                are drawn to La Mamounia&apos;s legendary gardens or the silent luxury of a Saharan desert
                camp, Morocco delivers an experience that rival destinations simply cannot replicate.
              </p>
              <p>
                This guide covers every major 5-star property across Morocco&apos;s key destinations, with
                current pricing, amenity breakdowns, booking strategies, and honest assessments to help
                you choose the perfect luxury stay. Prices start from 2,800 MAD per night and climb to
                over 30,000 MAD for the most exclusive suites. Seasonal pricing applies throughout the
                year, with peak rates during October through April.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Ranges ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            5-Star Hotel Price Tiers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect at each price level across Morocco&apos;s luxury hotel landscape.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting rates per room per night. Seasonal pricing applies — peak season (October-April) rates may be 30-50% higher than low season.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Tier</div>
                <div className="p-3 px-4">Price Range</div>
                <div className="p-3 px-4">Examples</div>
                <div className="p-3 px-4">What to Expect</div>
              </div>
              {priceRanges.map((item, i) => (
                <div
                  key={item.tier}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.tier}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.range}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.examples}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Hotels by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best 5-Star Hotels by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A city-by-city breakdown of Morocco&apos;s finest luxury properties with current pricing and key features.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting rates and may vary by season, room type, and availability.
          </p>

          {hotelsByCity.map((cityData) => {
            const CityIcon = cityData.icon;
            return (
              <div key={cityData.city} className="mb-12 last:mb-0">
                <div className="flex items-center gap-3 mb-4">
                  <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {cityData.city}
                  </h3>
                </div>
                <p className="text-[var(--text-secondary)] mb-6 max-w-3xl">{cityData.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cityData.hotels.map((hotel) => {
                    const HotelIcon = hotel.icon;
                    return (
                      <div key={hotel.name} className="card-moroccan p-6">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                            <HotelIcon className="w-5 h-5 text-[var(--color-accent)]" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                              {hotel.name}
                            </h4>
                            <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3.5 h-3.5" />
                                {cityData.city}
                              </span>
                              <span className="flex items-center gap-1">
                                <Star className="w-3.5 h-3.5" />
                                {hotel.type}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                          {hotel.price}
                        </div>
                        <p className="text-sm text-[var(--text-secondary)] mb-4">{hotel.description}</p>
                        <div className="grid grid-cols-2 gap-2">
                          {hotel.highlights.map((highlight, i) => (
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
            );
          })}
        </div>
      </section>

      {/* ── Desert Luxury Camps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luxury Desert Camps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s most unique luxury stays. Five-star comfort under Saharan skies, where the silence is the greatest amenity of all.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {desertLuxuryCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan p-6">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {camp.name}
                </h3>
                <p className="flex items-center gap-1 text-sm text-[var(--text-muted)] mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {camp.location}
                </p>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {camp.price}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{camp.description}</p>
                <div className="space-y-2">
                  {camp.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Amenities to Expect ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gem className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect at a 5-Star Hotel in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Standard amenities and services across Morocco&apos;s luxury hotel tier. Most properties exceed these expectations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {luxuryAmenities.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-2.5">
                    {category.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
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

      {/* ── All-Inclusive vs Boutique ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Coffee className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            All-Inclusive Resort vs. Boutique Palace Hotel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two distinct approaches to 5-star luxury in Morocco. Which style suits your travel personality?
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {stayComparison.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Waves className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">All-Inclusive Resort</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.allInclusive}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Gem className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Boutique Palace Hotel</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.boutique}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Book ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <CalendarCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Book &amp; Insider Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Peak Season (October-April)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The most popular period with the best weather. Book 3-6 months in advance for top properties
                like Royal Mansour and La Mamounia. Prices are at their highest, but the experience is at its peak
                with pleasant temperatures and clear skies. Christmas and New Year weeks are the most expensive.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Shoulder Season (May-June, September)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The best value period for luxury stays. Rates drop 30-40% from peak, and properties are less
                crowded. Weather is warm but manageable. Many hotels offer special packages during these months.
                Book 1-2 months in advance for the best selection.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ramadan Period
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Luxury hotels remain fully operational during Ramadan with normal dining hours for guests.
                Some of the best rates of the year can be found during this period. It is a unique cultural
                experience, and the iftar dinners at top hotels are spectacular events worth attending.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BadgePercent className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Money-Saving Strategies
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book directly with hotels for best-rate guarantees and complimentary upgrades. Use loyalty
                program status for free breakfast and late checkout. Consider midweek stays over weekends.
                Ask about long-stay discounts for bookings of 4+ nights. Some properties offer free nights
                on extended stays.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wifi className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Platforms
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Direct bookings through hotel websites often include complimentary breakfast, upgrades, or spa
                credits not available on third-party sites. For chain hotels, use the brand&apos;s app for
                exclusive member rates. Amex Fine Hotels &amp; Resorts and Virtuoso agents can unlock additional
                perks at select properties.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Cancellation Policies
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Most 5-star Moroccan hotels offer free cancellation up to 48-72 hours before arrival. Peak
                season bookings may require a non-refundable deposit. Always book flexible rates when possible,
                even if slightly more expensive. Travel insurance is recommended for premium bookings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Loyalty Programs ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Loyalty Programs &amp; Hotel Rewards
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Maximize your luxury stay by leveraging hotel loyalty programs active across Morocco&apos;s 5-star properties.
          </p>

          <div className="space-y-6">
            {loyaltyPrograms.map((program) => {
              const ProgramIcon = program.icon;
              return (
                <div key={program.program} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <ProgramIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {program.program}
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase mb-1">Properties in Morocco</p>
                      <p className="text-sm text-[var(--text-secondary)]">{program.hotels}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-muted)] uppercase mb-1">Key Benefits</p>
                      <p className="text-sm text-[var(--text-secondary)]">{program.benefits}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the most luxurious hotel in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The Royal Mansour Marrakech is widely regarded as the most luxurious hotel in Morocco and
                one of the finest in the world. Owned by King Mohammed VI, it features private riads with
                plunge pools, a 2,500 sqm spa, and an underground network of tunnels so staff can provide
                service without being seen. Rates start from 15,000 MAD per night.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a 5-star hotel cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Five-star hotels in Morocco range from 2,800 MAD per night for entry-level properties like
                Tikida Palace Agadir to over 25,000 MAD per night for ultra-luxury suites at Royal Mansour
                or Amanjena. The average price for a standard room at a top 5-star property is from
                5,000-8,000 MAD per night. Seasonal pricing applies, with peak rates during October through April
                and discounts of 30-40% during shoulder season months.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to book a luxury hotel in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Book 3-6 months in advance for peak season (October-April) to secure the best rooms and
                rates. For the lowest prices, visit during the shoulder seasons of May-June or September
                when temperatures are pleasant and rates drop significantly. Ramadan also offers excellent
                value at luxury properties, as hotels remain fully operational for international guests.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are Morocco 5-star hotels all-inclusive?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Most Morocco 5-star hotels operate on a bed-and-breakfast or half-board basis. True
                all-inclusive packages are mainly found at beach resorts in Agadir and Saaidia. City
                palace hotels like Royal Mansour and La Mamounia offer room-only or B&amp;B rates, as
                guests typically prefer to explore the city and its restaurants independently.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to tip at 5-star hotels in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Tipping is customary and warmly appreciated at Moroccan luxury hotels. Standard guidance:
                porters from 20-50 MAD per bag, housekeeping from 20-50 MAD per day, concierge from 50-100 MAD
                for special arrangements, and restaurant servers 10-15% if service charge is not already
                included on the bill. Some ultra-luxury properties include a service charge in all prices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-luxury-riads" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Crown className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Luxury Riads in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The finest boutique riads offering intimate luxury within Morocco&apos;s ancient medinas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-all-inclusive" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                All-Inclusive Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to all-inclusive resorts across Morocco&apos;s beach destinations.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-riads-vs-hotels" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Riads vs. Hotels
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Which accommodation style suits you best? An honest comparison to help you decide.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-spa-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Spa Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Top 20 spa and hammam experiences across Morocco, from traditional to ultra-luxury.
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

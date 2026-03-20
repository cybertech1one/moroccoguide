import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  Shield,
  AlertTriangle,
  Globe,
  Wallet,
  BookOpen,
  Luggage,
  Lightbulb,
  Banknote,
  Compass,
  Users,
  Zap,
  Train,
  Ticket,
  Info,
  Navigation,
  Timer,
  CreditCard,
  Wifi,
  BadgeCheck,
  HelpCircle,
  Mountain,
  Eye,
  Bus,
  Car,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Train Guide 2026 | ONCF Network, Al Boraq High-Speed & Scenic Routes',
  description:
    'The ultimate Morocco train guide for 2026. ONCF network overview, Al Boraq high-speed rail, major routes with prices, ticket classes, station guides, scenic journeys, train vs bus comparison, and booking tips. Your complete resource for trains in Morocco.',
  keywords: [
    'Morocco train guide',
    'trains in Morocco',
    'ONCF Morocco train guide',
    'Morocco railway guide',
    'Al Boraq high-speed train Morocco',
    'Morocco train routes 2026',
    'Morocco train tickets online',
    'Casablanca to Marrakech train',
    'Casablanca to Fes train',
    'Tangier Al Boraq train',
    'Rabat to Fes train',
    'Marrakech to Tangier train',
    'ONCF train classes',
    'Morocco train stations',
    'Morocco scenic train routes',
    'Morocco train vs bus',
    'Morocco train prices 2026',
    'ONCF booking online',
    'Morocco rail network map',
    'Morocco train travel tips',
    'Morocco first class train',
    'Morocco overnight train',
  ],
  openGraph: {
    title: 'Morocco Train Guide 2026 | ONCF Network, Al Boraq & Scenic Routes',
    description:
      'Your complete guide to trains in Morocco. ONCF network, Al Boraq high-speed rail, routes, prices, ticket classes, scenic journeys, and practical tips for navigating Morocco by rail.',
    url: `${BASE_URL}/morocco-train-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Al Boraq high-speed train at a Moroccan railway station with passengers boarding for a journey across Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Train Guide 2026 | ONCF & Al Boraq Complete Guide',
    description:
      'ONCF network overview, Al Boraq high-speed service, route maps, ticket classes, scenic journeys, and everything you need to ride trains in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-train-guide` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-train-guide`,
  name: 'Morocco Train Guide 2026 | ONCF Network, Al Boraq High-Speed & Scenic Routes',
  description:
    'Comprehensive guide to the Moroccan railway system including ONCF network overview, Al Boraq high-speed service, major routes with timetables and fares, ticket classes, station facilities, scenic train journeys, and practical travel tips.',
  url: `${BASE_URL}/morocco-train-guide`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-train-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Train Guide', item: `${BASE_URL}/morocco-train-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best way to travel between cities in Morocco by train?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ONCF railway connects all major Moroccan cities. For the Tangier-Casablanca corridor, the Al Boraq high-speed train is the fastest option at 2 hours 10 minutes. For Marrakech-Casablanca, conventional trains run 10+ times daily in about 2 hours 40 minutes. Book online at oncf.ma for e-tickets or buy at any station counter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do train tickets cost in Morocco in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco train fares are very affordable. Second-class tickets start from 30 MAD for short trips like Fes-Meknes. Marrakech to Casablanca costs from 100 MAD in second class. Al Boraq high-speed tickets from Tangier to Casablanca start from 149 MAD in economy and from 229 MAD in first class. Prices may vary seasonally, and early booking can secure lower fares.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Al Boraq high-speed train worth taking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. The Al Boraq is Africa\'s only high-speed train, reaching 320 km/h and cutting the Tangier-Casablanca journey from nearly 5 hours to just 2 hours 10 minutes. The trains are modern, comfortable, and well-maintained with air conditioning, luggage storage, and a cafe car. First class includes Wi-Fi and power outlets at every seat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy Morocco train tickets online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ONCF offers online ticket booking at oncf.ma and through the ONCF mobile app (iOS and Android). The platform accepts international credit cards and generates e-tickets you can show on your phone. For Al Boraq high-speed trains, online booking is recommended as seats can sell out. Conventional train tickets can also be purchased at station counters and self-service kiosks.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most scenic train route in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Casablanca to Oujda route via Fes and Taza is considered the most scenic, passing through the Taza Gap between the Rif and Middle Atlas mountains. The Casablanca to Fes route also offers beautiful countryside views through the Saiss Plain. For coastal scenery, the Casablanca-Rabat shuttle runs close to the Atlantic coast in places.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take the train or bus in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trains are faster, more comfortable, and more reliable for routes they cover (Tangier-Casa-Rabat-Fes-Marrakech-Oujda corridor). Buses serve more destinations, including cities not on the rail network like Chefchaouen, Essaouira, and Ouarzazate. CTM and Supratours are the best bus companies. For the main intercity routes, trains are the better choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there overnight trains in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Casablanca to Oujda route offers overnight service with couchette compartments. The journey takes 9-10 hours and departs in the evening, arriving the next morning. Couchettes have 4-berth compartments with bedding. Book in advance as couchettes are limited. This is the only route currently offering overnight sleeper service.',
      },
    },
  ],
};

/* =====================================================================
   DATA: NETWORK OVERVIEW
   ===================================================================== */

const networkHighlights = [
  {
    label: 'Total Network',
    value: '2,110+ km',
    detail: 'Connecting all major cities from Tangier to Marrakech',
    icon: Navigation,
  },
  {
    label: 'High-Speed Line',
    value: '186 km',
    detail: 'Al Boraq: Tangier - Kenitra at 320 km/h',
    icon: Zap,
  },
  {
    label: 'Annual Passengers',
    value: '40M+',
    detail: 'One of Africa\'s busiest rail networks',
    icon: Users,
  },
  {
    label: 'Starting Fare',
    value: 'From 30 MAD',
    detail: 'Short-distance second-class tickets',
    icon: Banknote,
  },
];

/* =====================================================================
   DATA: MAJOR ROUTES WITH PRICES
   ===================================================================== */

const majorRoutes = [
  {
    route: 'Casablanca to Marrakech',
    duration: '2h 40min',
    frequency: '10+ daily',
    secondClass: 'From 100 MAD',
    firstClass: 'From 150 MAD',
    stops: 'Casa Voyageurs - Settat - Marrakech',
    highlight: 'Most popular tourist route with frequent departures throughout the day',
    scenic: 'Farmland and plains of the Chaouia-Ouardigha region',
  },
  {
    route: 'Casablanca to Fes',
    duration: '3h 30min',
    frequency: '8+ daily',
    secondClass: 'From 130 MAD',
    firstClass: 'From 195 MAD',
    stops: 'Casa Voyageurs - Rabat Ville - Meknes - Fes',
    highlight: 'Scenic interior route connecting the economic and cultural capitals',
    scenic: 'Rolling countryside through the Saiss Plain and Gharb region',
  },
  {
    route: 'Tangier to Casablanca (Al Boraq)',
    duration: '2h 10min',
    frequency: '12+ daily',
    secondClass: 'From 149 MAD (economy)',
    firstClass: 'From 229 MAD',
    stops: 'Tangier Ville - Kenitra - Rabat Agdal - Casa Voyageurs',
    highlight: 'Africa\'s only high-speed train at 320 km/h',
    scenic: 'Coastal glimpses and the Gharb agricultural plain at high speed',
  },
  {
    route: 'Rabat to Fes',
    duration: '2h 30min',
    frequency: '8+ daily',
    secondClass: 'From 100 MAD',
    firstClass: 'From 150 MAD',
    stops: 'Rabat Ville - Meknes - Fes',
    highlight: 'Links the capital to the spiritual heart of Morocco',
    scenic: 'Interior plains with views of olive groves and farmland',
  },
  {
    route: 'Marrakech to Tangier',
    duration: '5h - 5h 30min',
    frequency: '4+ daily (via Casa)',
    secondClass: 'From 250 MAD',
    firstClass: 'From 375 MAD',
    stops: 'Marrakech - Casa Voyageurs - Rabat - Kenitra - Tangier',
    highlight: 'Full north-south traverse with transfer at Casablanca',
    scenic: 'Diverse landscapes from arid south to green north',
  },
];

/* =====================================================================
   DATA: AL BORAQ SPECIFICATIONS
   ===================================================================== */

const alBoraqSpecs = [
  { label: 'Maximum Speed', value: '320 km/h' },
  { label: 'Route', value: 'Tangier Ville - Kenitra - Rabat Agdal - Casa Voyageurs' },
  { label: 'Journey Time', value: '2 hours 10 minutes (Tangier to Casablanca)' },
  { label: 'Daily Services', value: '12+ departures in each direction' },
  { label: 'Technology', value: 'Alstom Euroduplex (TGV-based double-decker)' },
  { label: 'Launched', value: 'November 2018 by King Mohammed VI' },
];

const alBoraqFares = [
  { route: 'Tangier - Casablanca', economy: 'From 149 MAD', first: 'From 229 MAD' },
  { route: 'Tangier - Rabat', economy: 'From 119 MAD', first: 'From 189 MAD' },
  { route: 'Tangier - Kenitra', economy: 'From 99 MAD', first: 'From 159 MAD' },
  { route: 'Kenitra - Casablanca', economy: 'From 79 MAD', first: 'From 129 MAD' },
  { route: 'Rabat - Casablanca', economy: 'From 69 MAD', first: 'From 109 MAD' },
];

/* =====================================================================
   DATA: TICKET CLASSES
   ===================================================================== */

const trainClasses = [
  {
    name: 'Second Class (Conventional)',
    icon: Users,
    features: [
      'Comfortable seats in a 2+2 layout',
      'Air conditioning on most services',
      'Overhead luggage racks for standard bags',
      'Ideal for short to medium trips under 3 hours',
      'Starting from 30 MAD for short routes',
    ],
    best: 'Budget-conscious travelers and short intercity trips',
  },
  {
    name: 'First Class (Conventional)',
    icon: Star,
    features: [
      'Wider, reclining seats in a 2+1 configuration',
      'Guaranteed air conditioning and quieter environment',
      'Power outlets at select seats',
      'Fewer passengers per carriage for more privacy',
      'Approximately 50% more than second class',
    ],
    best: 'Comfort seekers, business travelers, and longer journeys',
  },
  {
    name: 'Al Boraq Economy',
    icon: Train,
    features: [
      'Modern high-speed seating in 2+2 layout',
      'Full air conditioning and smooth high-speed ride',
      'Dedicated luggage storage areas per carriage',
      'Access to onboard cafe car with snacks and drinks',
      'Starting from 149 MAD (Tangier-Casablanca)',
    ],
    best: 'Travelers wanting high-speed at an affordable price',
  },
  {
    name: 'Al Boraq First Class',
    icon: BadgeCheck,
    features: [
      'Premium wide seats in a spacious 2+1 layout',
      'Complimentary Wi-Fi throughout the journey',
      'Power outlets and USB ports at every seat',
      'Priority boarding with dedicated first-class lounge access',
      'Starting from 229 MAD (Tangier-Casablanca)',
    ],
    best: 'Maximum comfort and productivity on the high-speed line',
  },
  {
    name: 'Couchette (Overnight)',
    icon: Shield,
    features: [
      'Available on the Casablanca-Oujda overnight service',
      '4-berth compartments with bedding and pillows',
      'Lockable compartment door for security',
      'Saves a night of accommodation costs',
      'Book well in advance as berths are limited',
    ],
    best: 'Overnight travel on the long Casablanca-Oujda route',
  },
];

/* =====================================================================
   DATA: HOW TO BUY TICKETS
   ===================================================================== */

const ticketBuyingMethods = [
  {
    method: 'ONCF Website (oncf.ma)',
    detail: 'Book online with international credit cards. The French-language site generates e-tickets you can show on your phone or print. Create an account to manage bookings and access your travel history. Best for advance Al Boraq bookings.',
    icon: Globe,
  },
  {
    method: 'ONCF Mobile App',
    detail: 'Available on iOS and Android. Search schedules, book tickets, and store digital passes. Push notifications alert you to delays or changes. Register with your email to sync across devices.',
    icon: CreditCard,
  },
  {
    method: 'Station Ticket Counters',
    detail: 'Every major station has staffed ticket windows open from early morning until evening. Pay with cash (MAD) or bank card. Staff usually speak French and sometimes basic English. Lines can be long during holidays.',
    icon: Ticket,
  },
  {
    method: 'Self-Service Kiosks',
    detail: 'Available at major stations including Casablanca Voyageurs, Rabat Ville, and Tangier Ville. Touchscreen interface in French and Arabic. Accept bank cards for fast transactions with no queuing.',
    icon: Timer,
  },
  {
    method: 'Walk-Up Purchase',
    detail: 'For conventional trains, walk-up tickets are almost always available. Second class rarely sells out except during major holidays like Eid and summer vacation. Simply arrive, buy your ticket, and board.',
    icon: CheckCircle,
  },
];

/* =====================================================================
   DATA: STATION GUIDE
   ===================================================================== */

const stationGuide = [
  {
    city: 'Casablanca Voyageurs',
    description: 'Morocco\'s main railway hub for north-south and east-west lines. Connected to the tramway. Restaurants, ATMs, currency exchange, luggage storage (from 20 MAD), and Wi-Fi.',
    connections: 'All major routes converge here. Transfer for Marrakech-Fes and Marrakech-Tangier.',
  },
  {
    city: 'Rabat Ville',
    description: 'Central station near the medina. Tram stop directly outside. Clean waiting areas, cafes, ATMs, and real-time departure boards.',
    connections: 'Direct to Fes, Casablanca, Meknes. Al Boraq stops at Rabat Agdal instead.',
  },
  {
    city: 'Marrakech',
    description: 'Southern terminus. Walking distance to Jemaa el-Fna (15 min). Taxi rank and bus connections outside. ATMs and cafes inside.',
    connections: 'Direct to Casablanca (2h 40min). Connect at Casa Voyageurs for Fes and Tangier.',
  },
  {
    city: 'Fes',
    description: 'Gateway to the oldest imperial city. Red petit taxis queue outside (from 15 MAD to medina). ATMs, cafe, and luggage carts available.',
    connections: 'Direct to Casablanca, Rabat, Meknes, Oujda, and Tangier (via Sidi Kacem).',
  },
  {
    city: 'Tangier Ville',
    description: 'Al Boraq terminus and gateway to Europe. Modern station with excellent facilities. Connected to the port for ferries to Spain.',
    connections: 'Al Boraq to Casablanca (2h 10min). Conventional services to Fes and east.',
  },
  {
    city: 'Meknes',
    description: 'Compact station serving the imperial city. Quick taxi rides to the medina. Small waiting area with basic amenities.',
    connections: 'Fes (45 min), Rabat (2 hours), Casablanca (3 hours). On the east-west corridor.',
  },
];

/* =====================================================================
   DATA: TRAVEL TIPS
   ===================================================================== */

const travelTips = [
  {
    title: 'Arrive Early for Best Seats',
    text: 'Conventional trains do not assign seats. Arrive 15-20 minutes before departure to secure a window seat. For Al Boraq, arrive 20-30 minutes early as seats are assigned and boarding closes before departure.',
    icon: Clock,
  },
  {
    title: 'Guard Your Luggage',
    text: 'Keep bags in sight at all times. Use overhead racks for suitcases but keep valuables (passport, wallet, phone) in a daypack on your lap. First class is quieter and offers more security for solo travelers.',
    icon: Luggage,
  },
  {
    title: 'Bring Food and Water',
    text: 'Al Boraq has a cafe car, but conventional trains have limited food service. Station kiosks sell sandwiches from 15 MAD. Pack water and snacks for any journey over 2 hours to stay comfortable.',
    icon: BookOpen,
  },
  {
    title: 'Use the ONCF App for Schedules',
    text: 'Download the ONCF mobile app for real-time departure information, schedule changes, and delay notifications. It works offline for stored tickets. Most station boards display information in French.',
    icon: Globe,
  },
  {
    title: 'Allow Time for Casablanca Transfers',
    text: 'Many journeys require a transfer at Casa Voyageurs. Allow at least 30-45 minutes between connecting trains. The station has cafes, ATMs, and clear signage to help navigate between platforms.',
    icon: Navigation,
  },
  {
    title: 'Charge Your Devices',
    text: 'Al Boraq first class has outlets at every seat. Conventional first class has limited outlets. Bring a portable charger for second class where power access is minimal. A Moroccan SIM with data is more reliable than onboard Wi-Fi.',
    icon: Wifi,
  },
];

/* =====================================================================
   DATA: TRAIN VS BUS VS DRIVING
   ===================================================================== */

const transportComparison = [
  {
    mode: 'Train (ONCF)',
    icon: Train,
    pros: [
      'Fastest for major routes (Tangier-Casa in 2h 10min)',
      'Most comfortable with AC, legroom, and no traffic',
      'Affordable fares starting from 30 MAD',
      'Stations in city centers for easy access',
    ],
    cons: [
      'No trains to Chefchaouen, Essaouira, or Ouarzazate',
      'Can be crowded during holidays',
    ],
    bestFor: 'Tangier-Casablanca-Rabat-Fes-Marrakech corridor',
  },
  {
    mode: 'Bus (CTM/Supratours)',
    icon: Bus,
    pros: [
      'Serves cities not on the rail network',
      'Very affordable, often cheaper than trains',
      'Modern coaches with AC on premium lines',
    ],
    cons: [
      'Slower than trains on equivalent routes',
      'Subject to traffic delays and road conditions',
      'Bus stations often outside city centers',
    ],
    bestFor: 'Destinations not served by rail and budget travel',
  },
  {
    mode: 'Rental Car / Driving',
    icon: Car,
    pros: [
      'Freedom to explore off-the-beaten-path places',
      'Access to Atlas Mountains and Sahara',
      'Cost-effective for groups of 3-4 people',
    ],
    cons: [
      'Chaotic driving conditions in cities',
      'Fuel, tolls, and parking costs add up',
      'International driving permit may be required',
    ],
    bestFor: 'Road trips, desert circuits, and group travel',
  },
];

/* =====================================================================
   DATA: SCENIC ROUTES
   ===================================================================== */

const scenicRoutes = [
  {
    route: 'Fes to Oujda via Taza',
    duration: '5h - 6h',
    description: 'The most dramatic train scenery in Morocco. The line threads through the Taza Gap, a narrow corridor between the Rif Mountains to the north and the Middle Atlas to the south. Watch for gorges, forested hillsides, and dramatic rock formations.',
    bestSeat: 'Right side heading east for the best mountain views',
  },
  {
    route: 'Casablanca to Fes',
    duration: '3h 30min',
    description: 'After leaving the Casablanca suburbs, the landscape opens into the green Gharb Plain, one of Morocco\'s most fertile regions. Between Meknes and Fes, rolling hills dotted with olive groves create a quintessentially Moroccan panorama.',
    bestSeat: 'Left side heading north for views of the Saiss Plain',
  },
  {
    route: 'Tangier to Casablanca (Al Boraq)',
    duration: '2h 10min',
    description: 'The high-speed line between Kenitra and Tangier offers fleeting glimpses of the Atlantic coast and the lush Gharb agricultural plain. The speed itself is part of the experience as the fastest train in Africa.',
    bestSeat: 'Either side; the speed is the main attraction',
  },
  {
    route: 'Casablanca to Marrakech',
    duration: '2h 40min',
    description: 'The route crosses the Chaouia-Ouardigha farmland before the landscape gradually becomes more arid approaching Marrakech. On clear days, the snow-capped High Atlas Mountains come into view as you near Marrakech.',
    bestSeat: 'Left side heading south for Atlas Mountain views on clear days',
  },
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/trains',
    title: 'Trains in Morocco',
    description: 'Quick reference for all train services, timetables, and ONCF network across Morocco.',
    icon: Train,
  },
  {
    href: '/morocco-train-routes',
    title: 'Morocco Train Routes',
    description: 'Detailed route-by-route breakdown with maps, stops, and city-to-city connections.',
    icon: Navigation,
  },
  {
    href: '/morocco-train-travel',
    title: 'Morocco Train Travel',
    description: 'Practical guide to riding Moroccan trains with booking strategies and luggage rules.',
    icon: Ticket,
  },
  {
    href: '/public-transport',
    title: 'Morocco Public Transport',
    description: 'Buses, trams, grand taxis, and local transit for navigating cities and towns.',
    icon: MapPin,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Complete overview of every transport option for getting around Morocco.',
    icon: Compass,
  },
  {
    href: '/morocco-car-rental',
    title: 'Morocco Car Rental',
    description: 'Rental agencies, prices, insurance tips, and driving advice for self-drive travel.',
    icon: Car,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoTrainGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Train Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Train className="w-4 h-4" />
            Complete Railway Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Train Guide
            <br className="hidden md:block" /> ONCF, Al Boraq &amp; Beyond
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your complete guide to exploring Morocco by rail. From Africa&apos;s fastest
            high-speed train to scenic cross-country routes, discover how to navigate the
            ONCF network like a seasoned traveler.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Travel Morocco by Train?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco boasts one of Africa&apos;s most developed railway systems, and for visitors it
                represents the most comfortable, efficient, and affordable way to connect major cities.
                Operated by <strong>ONCF (Office National des Chemins de Fer)</strong>, the network
                stretches over 2,110 kilometers from Tangier to Marrakech, with key stops in Casablanca,
                Rabat, Meknes, Fes, and Oujda.
              </p>
              <p>
                The headline attraction is the <strong>Al Boraq high-speed train</strong> &mdash;
                Africa&apos;s first and only high-speed rail service. Launched in November 2018, Al Boraq
                connects Tangier to Casablanca at speeds up to 320 km/h in just 2 hours and 10 minutes,
                a journey that previously took nearly 5 hours by conventional rail.
              </p>
              <p>
                Whether you are planning a quick commute between Casablanca and Rabat, a cultural journey
                from Fes to Meknes, or the north-south traverse from Tangier to Marrakech, this guide
                covers everything: ONCF network details, Al Boraq specifications, routes with prices,
                ticket classes, station facilities, scenic journeys, and practical travel tips.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ONCF Network at a Glance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            ONCF Network at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about Morocco&apos;s national railway and one of Africa&apos;s best rail systems.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {networkHighlights.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Understanding the ONCF Network
            </h3>
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong className="text-[var(--text-primary)]">ONCF</strong> has operated Morocco&apos;s
                railways since 1963. The network runs along two corridors: a north-south axis connecting
                Tangier to Marrakech via Casablanca and Rabat, and an east-west line from Casablanca
                through Fes to Oujda near the Algerian border. The busiest segment is the
                Casablanca-Rabat shuttle, running every 30 minutes with over 30 daily departures. ONCF
                continues to invest in modernization, with upgraded rolling stock, digital ticketing,
                renovated stations, and plans to extend the high-speed network to Marrakech and Agadir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Routes with Prices ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Train Routes &amp; Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key rail connections with journey times, frequencies, and fares for both classes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {majorRoutes.map((r) => (
              <div key={r.route} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {r.route}
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Duration:</strong> {r.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Frequency:</strong> {r.frequency}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>2nd Class:</strong> {r.secondClass}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    <span><strong>1st Class:</strong> {r.firstClass}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Stops:</strong> {r.stops}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--color-accent)] font-medium">{r.highlight}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Seasonal pricing may apply. Fares are approximate and may change. Always verify at oncf.ma before travel.
          </p>
        </div>
      </section>

      {/* ── Al Boraq High-Speed Train ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Zap className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Al Boraq: Africa&apos;s High-Speed Train
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The fastest train on the African continent, connecting Tangier to Casablanca
            at 320 km/h in just over 2 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Key Specifications
              </h3>
              <ul className="space-y-3">
                {alBoraqSpecs.map((spec) => (
                  <li key={spec.label} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">{spec.label}:</strong> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Al Boraq Fares (2026)
              </h3>
              <div className="space-y-4">
                {alBoraqFares.map((fare) => (
                  <div key={fare.route} className="border-b border-[var(--border-primary)] pb-3 last:border-0 last:pb-0">
                    <p className="font-semibold text-[var(--text-primary)] mb-1">{fare.route}</p>
                    <div className="flex gap-4 text-sm text-[var(--text-secondary)]">
                      <span>Economy: {fare.economy}</span>
                      <span>First: {fare.first}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-4">
                Seasonal pricing may apply. Book early for the best fares.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Future Expansion</p>
                <p className="text-[var(--text-secondary)]">
                  ONCF plans to extend the high-speed network southward to Marrakech and eventually
                  to Agadir, and eastward to Fes and Oujda. Once the Casablanca-Marrakech high-speed
                  line is completed, the journey will drop from 2 hours 40 minutes to under 90 minutes.
                  Follow oncf.ma for updates on these ambitious expansion plans.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Train Classes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Train Classes Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From budget-friendly second class to premium Al Boraq first class and overnight couchettes.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trainClasses.map((tc) => {
              const TcIcon = tc.icon;
              return (
                <div key={tc.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TcIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tc.name}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {tc.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--text-primary)]">Best for:</strong> {tc.best}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to Buy Tickets ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Buy Train Tickets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five ways to purchase ONCF tickets, from online booking to walk-up purchases at the station.
          </p>

          <div className="space-y-4">
            {ticketBuyingMethods.map((bt) => {
              const BtIcon = bt.icon;
              return (
                <div key={bt.method} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <BtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {bt.method}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{bt.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Holiday Booking Warning</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  During Eid al-Fitr, Eid al-Adha, and the summer holiday period (July-August),
                  trains sell out quickly. Book Al Boraq at least a week in advance and conventional
                  first class at least 2-3 days ahead. The Carte Fidilite loyalty card offers up to
                  30% off for frequent travelers &mdash; ask at any station counter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Station Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Station Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect at Morocco&apos;s key railway stations, including facilities and onward connections.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {stationGuide.map((station) => (
              <div key={station.city} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {station.city}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{station.description}</p>
                <div className="pt-2 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--color-accent)]">Connections:</strong> {station.connections}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Travel Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Train Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for a smooth, comfortable journey on Moroccan trains.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {travelTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Train vs Bus vs Driving ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Train vs Bus vs Driving
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How does the train stack up against other ways to get around Morocco?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {transportComparison.map((mode) => {
              const ModeIcon = mode.icon;
              return (
                <div key={mode.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <ModeIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {mode.mode}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {mode.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wide mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {mode.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--text-primary)]">Best for:</strong> {mode.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Scenic Train Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Most Scenic Train Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s most visually stunning rail journeys for travelers who love window-seat views.
          </p>

          <div className="space-y-5">
            {scenicRoutes.map((sr) => (
              <div key={sr.route} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {sr.route}
                  </h3>
                  <span className="ml-auto text-sm text-[var(--text-muted)] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {sr.duration}
                  </span>
                </div>
                <p className="text-[var(--text-secondary)] mb-3">{sr.description}</p>
                <p className="text-xs text-[var(--color-accent)] font-medium">
                  <strong>Best seat:</strong> {sr.bestSeat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about trains in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Transport Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco journey with these detailed guides.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center max-w-3xl">
          <Train className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Rail Journey
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco&apos;s trains connect ancient medinas, coastal cities, and imperial capitals
            in comfort and style. From the blazing speed of Al Boraq to the scenic charm of
            conventional routes through the countryside, the railway is the smartest way to
            explore this extraordinary country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-train-routes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Explore Train Routes
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Compass className="w-5 h-5" />
              All Transport Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

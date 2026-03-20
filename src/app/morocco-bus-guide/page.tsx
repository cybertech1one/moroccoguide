import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight, Home, ArrowRight, MapPin, Clock, Star, CheckCircle,
  Shield, AlertTriangle, Globe, Wallet, BookOpen, Luggage, Lightbulb,
  Banknote, Compass, Users, Zap, Train, Ticket, Info, Navigation,
  Timer, CreditCard, Wifi, BadgeCheck, HelpCircle, Bus, Car,
  Moon, ThumbsUp, Phone, Coffee,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Bus Guide 2026 | CTM, Supratours & Local Bus Travel Tips',
  description:
    'The ultimate Morocco bus travel guide for 2026. CTM vs Supratours comparison, major routes with prices, how to buy tickets, bus station guides, night buses, grand taxi alternatives, and essential tips for traveling Morocco by bus.',
  keywords: [
    'Morocco bus travel',
    'CTM bus Morocco',
    'how to travel by bus in Morocco',
    'Supratours bus Morocco',
    'Morocco bus routes 2026',
    'Morocco bus tickets',
    'CTM vs Supratours',
    'Morocco bus prices',
    'Marrakech to Fes bus',
    'Casablanca to Chefchaouen bus',
    'Morocco night bus',
    'Morocco bus stations',
    'Morocco long distance bus',
    'Morocco bus travel tips',
    'grand taxi Morocco',
    'Morocco public transport',
    'CTM bus tickets online',
    'Morocco bus vs train',
    'Morocco intercity bus',
    'Morocco budget travel bus',
    'Supratours Marrakech Essaouira',
    'Morocco bus comfort amenities',
  ],
  openGraph: {
    title: 'Morocco Bus Guide 2026 | CTM, Supratours & Local Bus Travel',
    description:
      'Your complete guide to bus travel in Morocco. CTM and Supratours comparison, routes, prices, ticket booking, station guides, night buses, and practical tips for navigating Morocco by bus.',
    url: `${BASE_URL}/morocco-bus-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Modern CTM bus at a Moroccan bus station with travelers preparing for an intercity journey across Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Bus Guide 2026 | CTM & Supratours Complete Guide',
    description:
      'CTM vs Supratours comparison, major routes with prices, ticket booking, bus station guides, night buses, and everything you need to travel Morocco by bus.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-bus-guide` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-bus-guide`,
  name: 'Morocco Bus Guide 2026 | CTM, Supratours & Local Bus Travel Tips',
  description:
    'Comprehensive guide to bus travel in Morocco including CTM and Supratours comparison, major intercity routes with fares, ticket booking methods, bus station facilities, night bus travel, grand taxi alternatives, and practical travel tips.',
  url: `${BASE_URL}/morocco-bus-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-bus-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Bus Guide', item: `${BASE_URL}/morocco-bus-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best bus company in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CTM is widely considered the best bus company in Morocco with modern coaches, air conditioning, reliable schedules, and assigned seating. Supratours (operated by ONCF) is the other premium option, especially good for routes connecting to train stations. Both are significantly more comfortable than local bus companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a bus ticket cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bus fares are very affordable. CTM prices range from 40 MAD for short routes to 250 MAD for long-distance journeys. Supratours prices are similar. Local bus companies are 20-40% cheaper but less comfortable. Prices may vary seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy Morocco bus tickets online?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CTM offers online booking at ctm.ma with international credit card support. You receive an e-ticket by email. Supratours tickets can be booked at oncf.ma or at Supratours offices near train stations. Local bus tickets are only available at the station or on the bus.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to travel by bus in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bus travel in Morocco is generally very safe, especially on CTM and Supratours which maintain vehicles well and employ professional drivers. Keep valuables in your daypack. Night buses are safe on premium lines. Local bus companies have older vehicles, so premium operators are recommended for longer journeys.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get from Marrakech to the Sahara Desert by bus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Supratours runs a direct bus from Marrakech to Ouarzazate (4-5 hours, from 100 MAD), and CTM operates Marrakech to Errachidia (8-9 hours, from 160 MAD). From Errachidia, reach Merzouga by grand taxi. Many travelers prefer a shared desert tour from Marrakech which includes transport, accommodation, and camel trekking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take the bus or train in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trains are faster and more comfortable on the Tangier-Casablanca-Rabat-Fes-Marrakech corridor. Buses serve far more destinations including Chefchaouen, Essaouira, Ouarzazate, and Agadir which have no rail service. For cities on the train line, choose the train. For everywhere else, buses are your best option.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there overnight buses in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, CTM and Supratours operate overnight services on routes like Marrakech to Tangier, Casablanca to Dakhla, and Fes to Agadir. They depart between 9 PM and midnight, arriving the next morning. CTM night buses have reclining seats and AC. Bring a jacket and neck pillow.',
      },
    },
  ],
};

/* =====================================================================
   DATA: BUS TRAVEL OVERVIEW
   ===================================================================== */

const busHighlights = [
  {
    label: 'Bus Network',
    value: '2,000+ Routes',
    detail: 'Connecting every city, town, and village across Morocco',
    icon: Navigation,
  },
  {
    label: 'Premium Operators',
    value: 'CTM & Supratours',
    detail: 'Modern AC coaches with assigned seating and luggage holds',
    icon: BadgeCheck,
  },
  {
    label: 'Daily Departures',
    value: '500+',
    detail: 'Frequent services on major intercity routes nationwide',
    icon: Timer,
  },
  {
    label: 'Starting Fare',
    value: 'From 30 MAD',
    detail: 'Short-distance bus tickets on local and premium lines',
    icon: Banknote,
  },
];

/* =====================================================================
   DATA: BUS COMPANIES COMPARISON
   ===================================================================== */

const busCompanies = [
  {
    name: 'CTM (Compagnie de Transports au Maroc)',
    icon: Star,
    tier: 'Premium National',
    features: [
      'Morocco\'s oldest and most trusted bus company, operating since 1919',
      'Modern fleet with air conditioning, reclining seats, and luggage holds',
      'Online booking at ctm.ma with e-ticket delivery by email',
      'Own dedicated bus stations (gare routiere CTM) in most cities',
      'Luggage stored securely in the hold with numbered tags',
    ],
    routes: 'All major intercity routes plus southern Morocco and the Sahara',
    priceRange: 'From 40 MAD (short routes) to 350 MAD (long-distance)',
    best: 'Reliable schedules, comfort, and the widest national coverage',
  },
  {
    name: 'Supratours (ONCF)',
    icon: Zap,
    tier: 'Premium Railway-Linked',
    features: [
      'Operated by ONCF (national railway) to extend the rail network by road',
      'Modern coaches with AC, comfortable seating, and onboard toilets',
      'Stations next to ONCF train stations for seamless transfers',
      'Tickets available at Supratours offices, oncf.ma, and ONCF app',
      'Coordinates schedules with train arrivals and departures',
    ],
    routes: 'Marrakech-Essaouira, Marrakech-Ouarzazate, Nador-Fes, Tetouan-Tangier, and more',
    priceRange: 'From 40 MAD (short routes) to 300 MAD (long-distance)',
    best: 'Rail connections, Essaouira and desert routes, and modern comfort',
  },
  {
    name: 'Local Bus Companies',
    icon: Users,
    tier: 'Budget Regional',
    features: [
      'Multiple private operators serving regional and rural routes',
      'Significantly cheaper fares, often 20-40% less than CTM',
      'More frequent departures but less predictable schedules',
      'Older vehicles with basic amenities and no guaranteed AC',
      'Tickets bought at the station counter or directly from the driver',
    ],
    routes: 'Regional connections, rural villages, and short-distance hops',
    priceRange: 'From 15 MAD (short routes) to 200 MAD (long-distance)',
    best: 'Budget travelers, rural destinations, and spontaneous travel',
  },
];

/* =====================================================================
   DATA: MAJOR BUS ROUTES WITH PRICES
   ===================================================================== */

const majorBusRoutes = [
  {
    route: 'Marrakech to Essaouira',
    duration: '2h 30min - 3h',
    operator: 'Supratours / CTM',
    ctmPrice: 'From 80 MAD',
    frequency: '8+ daily',
    stops: 'Marrakech - Chichaoua - Essaouira',
    highlight: 'The most popular bus route for tourists, connecting the Red City to the coastal gem',
  },
  {
    route: 'Casablanca to Chefchaouen',
    duration: '5h - 6h',
    operator: 'CTM',
    ctmPrice: 'From 130 MAD',
    frequency: '3-4 daily',
    stops: 'Casablanca - Rabat - Ouazzane - Chefchaouen',
    highlight: 'The only practical public transport to Morocco\'s famous Blue City',
  },
  {
    route: 'Fes to Chefchaouen',
    duration: '4h - 4h 30min',
    operator: 'CTM / Local',
    ctmPrice: 'From 75 MAD',
    frequency: '3-5 daily',
    stops: 'Fes - Ouazzane - Chefchaouen',
    highlight: 'Popular route through the Rif Mountains connecting two essential Morocco stops',
  },
  {
    route: 'Marrakech to Ouarzazate',
    duration: '4h - 5h',
    operator: 'Supratours / CTM',
    ctmPrice: 'From 100 MAD',
    frequency: '4-6 daily',
    stops: 'Marrakech - Tizi n\'Tichka Pass - Ouarzazate',
    highlight: 'Dramatic Atlas Mountain crossing via the highest paved pass in Morocco',
  },
  {
    route: 'Marrakech to Fes',
    duration: '7h - 8h',
    operator: 'CTM / Supratours',
    ctmPrice: 'From 180 MAD',
    frequency: '5+ daily',
    stops: 'Marrakech - Beni Mellal - Fes (or via Casablanca)',
    highlight: 'Long but scenic journey between Morocco\'s two most visited cities',
  },
  {
    route: 'Tangier to Chefchaouen',
    duration: '3h - 3h 30min',
    operator: 'CTM / Local',
    ctmPrice: 'From 60 MAD',
    frequency: '5+ daily',
    stops: 'Tangier - Tetouan - Chefchaouen',
    highlight: 'Gateway from the port city to the Blue Pearl of the Rif Mountains',
  },
  {
    route: 'Marrakech to Agadir',
    duration: '3h - 3h 30min',
    operator: 'CTM / Supratours',
    ctmPrice: 'From 100 MAD',
    frequency: '8+ daily',
    stops: 'Marrakech - Chichaoua - Agadir',
    highlight: 'Quick connection to Morocco\'s main beach resort city on the Atlantic coast',
  },
];

/* =====================================================================
   DATA: HOW TO BUY TICKETS
   ===================================================================== */

const ticketBuyingMethods = [
  {
    method: 'CTM Website (ctm.ma)',
    detail: 'Book CTM tickets online with international credit cards. The bilingual site (French/Arabic) generates e-tickets you can show on your phone or print. Create an account to manage bookings. Best for advance reservations on popular routes like Marrakech-Essaouira.',
    icon: Globe,
  },
  {
    method: 'Supratours / ONCF Website (oncf.ma)',
    detail: 'Supratours tickets are available through the ONCF platform and mobile app. Book alongside train connections for seamless multi-modal journeys. E-tickets are sent by email. Especially useful for combined train-bus itineraries.',
    icon: CreditCard,
  },
  {
    method: 'Bus Station Ticket Counters',
    detail: 'Every city has a gare routiere (bus station) with ticket counters for all operators. CTM often has its own separate station nearby. Pay with cash (MAD) at the counter. Arrive 30-60 minutes before departure for popular routes. Staff speak French and Arabic.',
    icon: Ticket,
  },
  {
    method: 'Supratours Offices at Train Stations',
    detail: 'Supratours maintains offices at or near major ONCF train stations. Buy bus tickets there for connecting services. This is especially convenient when arriving by train and continuing by bus to cities like Essaouira or Chefchaouen.',
    icon: Phone,
  },
  {
    method: 'On the Bus (Local Companies)',
    detail: 'For local and regional bus companies, you can often buy tickets directly from the driver or a conductor as you board. Cash only (MAD). No reserved seating on local buses. Arrive early to secure a good seat near the front.',
    icon: CheckCircle,
  },
];

/* =====================================================================
   DATA: BUS STATION GUIDE
   ===================================================================== */

const busStationGuide = [
  {
    city: 'Marrakech (Gare Routiere / CTM Station)',
    description: 'The main gare routiere is near Bab Doukkala, a 15-minute walk from Jemaa el-Fna. CTM has a separate modern station nearby on Rue Abou Baker Seddik. Supratours departs from next to the train station. Cafes, ATMs, and petit taxis available at all locations.',
    connections: 'Essaouira (2.5h), Ouarzazate (4h), Agadir (3h), Fes (7h), Casablanca (3h), Tangier (8h)',
  },
  {
    city: 'Casablanca (Gare Routiere Ouled Ziane)',
    description: 'The main bus station serves CTM, Supratours, and local operators. Modern facilities with waiting areas, cafes, ATMs, and luggage storage. Connected to the city by petit taxi (from 20 MAD to centre ville).',
    connections: 'All major cities. Hub for north-south and east-west routes across Morocco.',
  },
  {
    city: 'Fes (Gare Routiere / CTM Station)',
    description: 'The main gare routiere is south of the medina. CTM\'s station is on Avenue Mohammed V near the Ville Nouvelle. Supratours is near the train station. Petit taxis to the medina cost from 15 MAD.',
    connections: 'Chefchaouen (4h), Meknes (1h), Casablanca (4h), Marrakech (7h), Ouarzazate (9h)',
  },
  {
    city: 'Tangier (Gare Routiere / CTM Station)',
    description: 'The main bus station is south of the city centre. CTM operates from a dedicated terminal. Supratours departs from near Tangier Ville train station. Grand taxis to the port or medina cost from 15 MAD. Good connections to the Rif region.',
    connections: 'Chefchaouen (3h), Tetouan (1h), Casablanca (6h), Fes (5h), Rabat (3.5h)',
  },
  {
    city: 'Agadir (Gare Routiere)',
    description: 'Located in Talborjt district near the centre. Modern station serving CTM and local operators. Key southern hub for Essaouira, Tiznit, and the deep south.',
    connections: 'Marrakech (3h), Essaouira (3h), Taroudant (1.5h), Tiznit (1.5h), Casablanca (8h)',
  },
];

/* =====================================================================
   DATA: COMFORT AND AMENITIES
   ===================================================================== */

const comfortAmenities = [
  {
    title: 'Air Conditioning',
    text: 'CTM and Supratours buses are fully air-conditioned. The AC can be powerful, so bring a light layer. Local buses have variable AC quality, and some older vehicles rely on open windows for ventilation.',
    icon: Zap,
  },
  {
    title: 'Onboard Toilets',
    text: 'Supratours coaches generally have onboard toilets. CTM buses make rest stops every 2-3 hours on long routes where toilet facilities and cafes are available. Local buses stop less predictably.',
    icon: Shield,
  },
  {
    title: 'Luggage Storage',
    text: 'CTM and Supratours store luggage in the hold with numbered tags. You receive a receipt to claim your bag. There is a small luggage fee (from 5-10 MAD per bag) on CTM services. Keep valuables in your carry-on daypack.',
    icon: Luggage,
  },
  {
    title: 'Wi-Fi and Charging',
    text: 'Some newer CTM and Supratours coaches offer Wi-Fi, but it is unreliable. Charging ports are rare on buses. Bring a portable power bank and download entertainment or maps offline before departure.',
    icon: Wifi,
  },
  {
    title: 'Seat Comfort',
    text: 'CTM and Supratours offer reclining seats with reasonable legroom, similar to European coach services. Local buses have fixed seats with minimal padding. For journeys over 4 hours, a neck pillow makes a significant difference.',
    icon: ThumbsUp,
  },
  {
    title: 'Rest Stops',
    text: 'Long-distance buses make scheduled stops at roadside rest areas with cafes, toilets, and small shops. Stops typically last 15-20 minutes. These are your chance to stretch, eat, and use proper facilities. Drivers announce the stop duration.',
    icon: Coffee,
  },
];

/* =====================================================================
   DATA: NIGHT BUSES
   ===================================================================== */

const nightBusRoutes = [
  {
    route: 'Marrakech to Tangier',
    departure: '9:00 PM - 10:00 PM',
    arrival: '5:00 AM - 7:00 AM',
    operator: 'CTM',
    price: 'From 250 MAD',
    note: 'Saves a hotel night on the full north-south traverse',
  },
  {
    route: 'Casablanca to Dakhla',
    departure: '8:00 PM',
    arrival: 'Next afternoon',
    operator: 'CTM',
    price: 'From 400 MAD',
    note: 'Morocco\'s longest bus route through the Western Sahara (18+ hours)',
  },
  {
    route: 'Marrakech to Errachidia',
    departure: '10:00 PM - 11:00 PM',
    arrival: '5:00 AM - 7:00 AM',
    operator: 'CTM / Supratours',
    price: 'From 160 MAD',
    note: 'Gateway to Merzouga and the Sahara Desert erg dunes',
  },
];

/* =====================================================================
   DATA: GRAND TAXIS AS ALTERNATIVES
   ===================================================================== */

const grandTaxiInfo = [
  {
    label: 'What Are Grand Taxis?',
    text: 'Grand taxis are shared Mercedes sedans or minivans operating fixed routes between cities. They depart when full (usually 6 passengers) and are faster than buses on many routes. They fill a crucial gap where bus service is limited.',
  },
  {
    label: 'How They Work',
    text: 'Head to the grand taxi stand (usually near the bus station) and state your destination. Pay the standard fare. Wait until the taxi fills up, or pay for empty seats to leave immediately. No advance booking; first come, first served.',
  },
  {
    label: 'Typical Prices',
    text: 'Fares are fixed per person: Fes to Meknes from 30 MAD, Marrakech to Ourika Valley from 25 MAD, Agadir to Taroudant from 30 MAD. Charter the entire taxi for roughly 6 times the per-person rate.',
  },
  {
    label: 'Best Use Cases',
    text: 'Grand taxis excel for short-to-medium routes under 2 hours, destinations without bus service, and last-mile connections from stations to nearby towns.',
  },
];

/* =====================================================================
   DATA: BUS TRAVEL TIPS
   ===================================================================== */

const travelTips = [
  {
    title: 'Book CTM in Advance Online',
    text: 'Popular routes like Marrakech to Essaouira and Fes to Chefchaouen sell out, especially on weekends and holidays. Book at ctm.ma at least 1-2 days ahead. Supratours can be booked at oncf.ma. Walk-up tickets are riskier on peak days.',
    icon: Globe,
  },
  {
    title: 'Arrive 30 Minutes Early',
    text: 'CTM and Supratours buses depart on time. Arrive at least 30 minutes before departure to check in luggage and find your seat. For local buses, arrive 45-60 minutes early to secure a ticket and a seat near the front.',
    icon: Clock,
  },
  {
    title: 'Pack Food, Water, and Layers',
    text: 'Most buses have no onboard food service. Bring at least 1.5 liters of water and snacks for any journey over 2 hours. Air conditioning can be aggressive on premium buses, so pack a light jacket or scarf. Rest stops have basic cafes.',
    icon: BookOpen,
  },
  {
    title: 'Keep Valuables in Your Daypack',
    text: 'Store large bags in the luggage hold (you get a numbered tag receipt from CTM). Keep your passport, money, phone, and camera in a small daypack at your seat. Theft from the hold is rare but prevention is easy.',
    icon: Shield,
  },
  {
    title: 'Know the Luggage Fees',
    text: 'CTM charges a small fee (from 5-10 MAD per bag) for hold luggage. Supratours usually includes one bag free. Local buses may charge informally. Have small bills ready for luggage handlers who load your bags.',
    icon: Luggage,
  },
  {
    title: 'Download Offline Maps',
    text: 'Download your destination area in Google Maps or Maps.me before boarding. Wi-Fi is unreliable on all services. Offline maps help you track your location, know when your stop is approaching, and navigate upon arrival.',
    icon: Compass,
  },
];

/* =====================================================================
   DATA: BUS VS TRAIN COMPARISON
   ===================================================================== */

const busVsTrainComparison = [
  {
    criteria: 'Network Coverage',
    bus: 'Serves every city and most towns, including Chefchaouen, Essaouira, Ouarzazate, and the Sahara',
    train: 'Limited to the Tangier-Casablanca-Rabat-Fes-Marrakech-Oujda corridor',
    winner: 'Bus',
  },
  {
    criteria: 'Speed',
    bus: 'Slower due to road conditions and stops. Marrakech-Fes takes 7-8 hours by bus',
    train: 'Faster on available routes. Marrakech-Fes takes 7h via Casa transfer by train, Al Boraq is very fast',
    winner: 'Train',
  },
  {
    criteria: 'Comfort',
    bus: 'CTM/Supratours are comfortable with AC and reclining seats. Local buses are basic',
    train: 'More spacious, smoother ride, ability to walk around. First class is excellent',
    winner: 'Train',
  },
  {
    criteria: 'Price',
    bus: 'Generally 10-30% cheaper than trains on equivalent routes',
    train: 'Slightly more expensive but excellent value for the speed and comfort',
    winner: 'Bus',
  },
  {
    criteria: 'Reliability',
    bus: 'Subject to traffic, road conditions, and variable schedules for local operators',
    train: 'More punctual with fixed timetables and dedicated tracks',
    winner: 'Train',
  },
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/public-transport',
    title: 'Morocco Public Transport',
    description: 'Complete guide to buses, trams, grand taxis, and local transit across Morocco.',
    icon: Bus,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Overview of every transport option for getting around Morocco efficiently.',
    icon: Compass,
  },
  {
    href: '/morocco-train-guide',
    title: 'Morocco Train Guide',
    description: 'ONCF railway network, Al Boraq high-speed service, routes, prices, and tips.',
    icon: Train,
  },
  {
    href: '/morocco-car-rental',
    title: 'Morocco Car Rental',
    description: 'Rental agencies, prices, insurance, and driving advice for self-drive travel.',
    icon: Car,
  },
  {
    href: '/morocco-train-travel',
    title: 'Morocco Train Travel',
    description: 'Practical guide to riding Moroccan trains with booking strategies and luggage rules.',
    icon: Ticket,
  },
  {
    href: '/driving',
    title: 'Driving in Morocco',
    description: 'Road conditions, traffic rules, fuel costs, and tips for driving across Morocco.',
    icon: Navigation,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoBusGuidePage() {
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
            <span className="text-white">Morocco Bus Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Bus className="w-4 h-4" />
            Complete Bus Travel Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Bus Guide
            <br className="hidden md:block" /> CTM, Supratours &amp; Beyond
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Your complete guide to traveling Morocco by bus. From premium CTM coaches
            to local services, discover how to navigate the country&apos;s most extensive
            transport network affordably and comfortably.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Backbone of Morocco Transport
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Buses are the most widely used form of intercity transport in Morocco, and for good
                reason. While the train network is limited to a single corridor, buses reach every
                corner of the country &mdash; from the blue alleys of Chefchaouen to the edge of the
                Sahara at Merzouga, from the Atlantic surf of Essaouira to the mountain passes of the
                High Atlas.
              </p>
              <p>
                Two premium operators dominate: <strong>CTM (Compagnie de Transports au Maroc)</strong>,
                Morocco&apos;s national bus company operating since 1919, and <strong>Supratours</strong>,
                operated by ONCF (the national railway) to extend the rail network by road. Both offer
                modern air-conditioned coaches, assigned seating, and online booking. A network of
                local bus companies fills in the gaps with cheaper, more frequent, and more rustic services.
              </p>
              <p>
                Whether you are backpacking on a tight budget, planning a first trip to Morocco, or
                exploring destinations off the beaten path, this guide covers everything you need to
                know about bus travel: operators, routes, prices, stations, night buses, grand taxi
                alternatives, and practical tips for comfortable journeys.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bus Network at a Glance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Bus Network at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about Morocco&apos;s bus system and why it is the transport backbone of the country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {busHighlights.map((fact) => {
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
        </div>
      </section>

      {/* ── CTM vs Supratours vs Local ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            CTM vs Supratours vs Local Buses
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the three tiers of bus travel in Morocco helps you choose the right service for your journey.
          </p>

          <div className="grid lg:grid-cols-3 gap-6">
            {busCompanies.map((company) => {
              const CompIcon = company.icon;
              return (
                <div key={company.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CompIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide">
                      {company.tier}
                    </span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {company.name}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {company.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--text-primary)]">Key routes:</strong> {company.routes}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--color-accent)]">Prices:</strong> {company.priceRange}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--text-primary)]">Best for:</strong> {company.best}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Major Bus Routes with Prices ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Bus Routes &amp; Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most popular intercity bus connections with journey times, operators, and CTM/Supratours fares.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {majorBusRoutes.map((r) => (
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
                    <BadgeCheck className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Operator:</strong> {r.operator}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    <span><strong>CTM Price:</strong> {r.ctmPrice}</span>
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
            Seasonal pricing may apply. Fares are approximate and may change. Always verify at ctm.ma or oncf.ma before travel.
          </p>
        </div>
      </section>

      {/* ── How to Buy Bus Tickets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Buy Bus Tickets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five ways to purchase bus tickets in Morocco, from online booking to walk-up purchases.
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
                  buses sell out quickly on popular routes. Book CTM at least 3-5 days in advance
                  for Marrakech-Essaouira, Fes-Chefchaouen, and Tangier-Chefchaouen. Local buses
                  can be standing-room only during peak periods &mdash; avoid them for long journeys
                  on holidays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bus Station Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Bus Station Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect at Morocco&apos;s key bus stations, including facilities and onward connections.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {busStationGuide.map((station) => (
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

      {/* ── Comfort and Amenities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ThumbsUp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Comfort &amp; Amenities on Moroccan Buses
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect onboard CTM, Supratours, and local bus services across Morocco.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {comfortAmenities.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Night Buses ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Night Buses &amp; Long-Distance Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Save time and accommodation costs by traveling overnight on Morocco&apos;s long-distance bus routes.
          </p>

          <div className="space-y-4 mb-8">
            {nightBusRoutes.map((nb) => (
              <div key={nb.route} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {nb.route}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span>Dep: {nb.departure}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Timer className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span>Arr: {nb.arrival}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span>{nb.operator}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Banknote className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    <span>{nb.price}</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-medium mt-3">{nb.note}</p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Night Bus Tips</p>
                <p className="text-[var(--text-secondary)]">
                  Bring a neck pillow, eye mask, and warm layer for overnight journeys. CTM
                  night buses have reclining seats and working AC. Keep your valuables close and
                  set a phone alarm for your arrival time. The bus will make 1-2 rest stops during
                  the night. Light sleepers should bring earplugs as road noise is constant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grand Taxis as Alternatives ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Grand Taxis: The Bus Alternative
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Shared grand taxis fill the gap between bus routes and are often faster for short-to-medium distances.
          </p>

          <div className="space-y-4">
            {grandTaxiInfo.map((item) => (
              <div key={item.label} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-5 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <strong className="text-[var(--text-primary)]">Safety note:</strong> Grand taxis can be cramped (6 passengers in a sedan). Pay for an extra seat for comfort. Always agree on the fare before getting in. Newer minivan taxis offer more space. Seasonal pricing may apply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bus Travel Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Bus Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for smooth, comfortable bus journeys across Morocco.
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

      {/* ── Bus vs Train Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bus vs Train: Which Should You Choose?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A head-to-head comparison to help you decide the best transport for each leg of your Morocco trip.
          </p>

          <div className="space-y-4">
            {busVsTrainComparison.map((row) => (
              <div key={row.criteria} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {row.criteria}
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className={`p-3 rounded-lg ${row.winner === 'Bus' ? 'bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20' : 'bg-[var(--surface-muted)]'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Bus className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="font-semibold text-[var(--text-primary)]">Bus</span>
                      {row.winner === 'Bus' && <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] ml-auto" />}
                    </div>
                    <p className="text-[var(--text-secondary)]">{row.bus}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${row.winner === 'Train' ? 'bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20' : 'bg-[var(--surface-muted)]'}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <Train className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="font-semibold text-[var(--text-primary)]">Train</span>
                      {row.winner === 'Train' && <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)] ml-auto" />}
                    </div>
                    <p className="text-[var(--text-secondary)]">{row.train}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-8 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">The Smart Strategy</p>
                <p className="text-[var(--text-secondary)]">
                  Most travelers use a mix of both. Take trains for the main corridor (Tangier, Casablanca,
                  Rabat, Fes, Marrakech) where they are faster and more comfortable, then switch to CTM or
                  Supratours buses for destinations the railway does not reach &mdash; Chefchaouen, Essaouira,
                  Ouarzazate, Agadir, and the Sahara. Supratours is especially convenient for seamless
                  train-to-bus connections.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about bus travel in Morocco.
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
      <section className="py-16 md:py-20">
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center max-w-3xl">
          <Bus className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your Bus Journey
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco&apos;s bus network connects ancient medinas, coastal towns, mountain villages,
            and desert gateways. From the comfort of CTM coaches to local services through the
            Atlas Mountains, bus travel is the most versatile way to explore Morocco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/public-transport" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors">
              <Navigation className="w-5 h-5" /> Public Transport Guide
            </Link>
            <Link href="/transport" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors">
              <Compass className="w-5 h-5" /> All Transport Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

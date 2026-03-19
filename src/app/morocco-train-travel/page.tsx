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
  ShieldCheck,
  CircleAlert,
  BadgeCheck,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Train Travel 2026 | ONCF Routes, Al Boraq & Booking Guide',
  description:
    'Complete guide to Morocco train travel in 2026. ONCF routes, Al Boraq high-speed train, Marrakech-Casablanca-Rabat-Tangier timetables, ticket classes, booking tips, station guide, and luggage rules. Everything you need to ride Moroccan trains.',
  keywords: [
    'Morocco train travel',
    'ONCF Morocco trains',
    'Al Boraq high-speed train',
    'Morocco train routes',
    'Morocco train timetable',
    'Morocco train tickets',
    'Marrakech to Casablanca train',
    'Casablanca to Rabat train',
    'Tangier to Casablanca train',
    'Fes to Casablanca train',
    'ONCF booking',
    'Morocco rail travel',
    'Morocco train classes',
    'Morocco train stations',
    'Morocco train luggage',
    'Morocco train safety',
    'Morocco train prices',
    'Morocco train 2026',
  ],
  openGraph: {
    title: 'Morocco Train Travel 2026 | ONCF Routes, Al Boraq & Booking Guide',
    description:
      'Everything you need to know about traveling by train in Morocco. ONCF network, Al Boraq high-speed rail, routes, schedules, ticket classes, and practical tips.',
    url: `${BASE_URL}/morocco-train-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Modern Moroccan train at a station platform representing the ONCF rail network across Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Train Travel 2026 | ONCF & Al Boraq Guide',
    description:
      'ONCF routes, Al Boraq high-speed train, ticket classes, booking tips, and station guide for Morocco rail travel.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-train-travel` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-train-travel`,
  name: 'Morocco Train Travel 2026 | ONCF Routes, Al Boraq & Booking Guide',
  description:
    'Comprehensive guide to traveling by train in Morocco covering the ONCF rail network, Al Boraq high-speed service, routes, timetables, ticket classes, booking strategies, station guides, luggage rules, and safety tips.',
  url: `${BASE_URL}/morocco-train-travel`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-train-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Train Travel', item: `${BASE_URL}/morocco-train-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I book train tickets in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can book ONCF train tickets online at oncf.ma or through the ONCF mobile app. Tickets are also available at station counters and self-service kiosks. For Al Boraq high-speed trains, advance booking is recommended as seats can sell out. Online bookings accept international credit cards and generate e-tickets you can show on your phone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the Al Boraq high-speed train in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Al Boraq high-speed train reaches speeds up to 320 km/h, making it the fastest train in Africa. It connects Tangier to Casablanca in approximately 2 hours and 10 minutes, compared to nearly 5 hours on the conventional service. The line stops at Kenitra and Rabat along the way.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between first class and second class on Moroccan trains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First class offers wider seats in a 2+1 configuration, air conditioning, power outlets, and quieter carriages with fewer passengers. Second class has a 2+2 seat layout and is more crowded but perfectly comfortable for most journeys. First class costs roughly 50% more than second class. Both classes are clean and well-maintained.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a train ticket cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco train fares are very affordable. A second-class ticket from Marrakech to Casablanca costs from 100 MAD (approximately 10 USD). Casablanca to Rabat starts from 50 MAD. Al Boraq high-speed tickets from Tangier to Casablanca start from 149 MAD in economy and from 229 MAD in first class. Prices may vary seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to travel by train in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, train travel in Morocco is generally very safe. ONCF trains are modern, well-maintained, and patrolled by security staff. Keep your belongings close, especially on busy routes. First class is quieter and more secure. Avoid displaying expensive items and keep luggage in sight. Night trains are safe but stay alert at station platforms after dark.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring luggage on Moroccan trains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, passengers can bring luggage on Moroccan trains at no extra charge. Overhead racks accommodate standard suitcases and backpacks. There is no strict weight limit for carry-on luggage, but you should be able to lift your bags onto the racks yourself. Al Boraq trains have dedicated luggage storage areas at the end of each carriage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Moroccan trains run on time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Al Boraq high-speed trains are generally very punctual. Conventional ONCF services are reasonably reliable but delays of 15 to 30 minutes can occur, especially on longer routes. Allow buffer time for connections. During holidays like Eid and summer vacation, trains may be more crowded and slightly delayed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there Wi-Fi on Moroccan trains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Al Boraq high-speed trains offer complimentary Wi-Fi in first class, though speeds can be inconsistent. Conventional ONCF trains do not have Wi-Fi. A Moroccan SIM card with a data plan (from 30 MAD) is the most reliable way to stay connected during your train journey. Cell coverage is good along most routes.',
      },
    },
  ],
};

/* =====================================================================
   DATA: ONCF QUICK FACTS
   ===================================================================== */

const quickFacts = [
  {
    label: 'Rail Network',
    value: '2,110+ km',
    detail: 'Connecting all major Moroccan cities',
    icon: Navigation,
  },
  {
    label: 'Al Boraq Speed',
    value: 'Up to 320 km/h',
    detail: 'Fastest train in Africa',
    icon: Zap,
  },
  {
    label: 'Cheapest Ticket',
    value: 'From 30 MAD',
    detail: 'Short-distance second-class fares',
    icon: Banknote,
  },
  {
    label: 'Book Online',
    value: 'oncf.ma',
    detail: 'E-tickets accepted on all trains',
    icon: Globe,
  },
];

/* =====================================================================
   DATA: MAJOR TRAIN ROUTES
   ===================================================================== */

const majorRoutes = [
  {
    route: 'Tangier to Casablanca (Al Boraq)',
    duration: '2h 10min',
    frequency: '12+ daily',
    price: 'From 149 MAD (economy)',
    stops: 'Tangier Ville - Kenitra - Rabat Agdal - Casa Voyageurs',
    highlight: 'High-speed at 320 km/h, the fastest train in Africa',
  },
  {
    route: 'Marrakech to Casablanca',
    duration: '2h 40min',
    frequency: '10+ daily',
    price: 'From 100 MAD (2nd class)',
    stops: 'Marrakech - Settat - Casa Voyageurs',
    highlight: 'Most popular tourist route, frequent departures',
  },
  {
    route: 'Casablanca to Rabat',
    duration: '50min - 1h',
    frequency: '30+ daily (shuttle)',
    price: 'From 50 MAD (2nd class)',
    stops: 'Casa Voyageurs - Casa Port - Mohammedia - Rabat Ville',
    highlight: 'Ultra-frequent shuttle service, runs every 30 minutes',
  },
  {
    route: 'Casablanca to Fes',
    duration: '3h 30min',
    frequency: '8+ daily',
    price: 'From 130 MAD (2nd class)',
    stops: 'Casa Voyageurs - Rabat - Meknes - Fes',
    highlight: 'Scenic route through inland Morocco',
  },
  {
    route: 'Fes to Meknes',
    duration: '45min',
    frequency: '8+ daily',
    price: 'From 30 MAD (2nd class)',
    stops: 'Fes - Meknes',
    highlight: 'Quick connection between two imperial cities',
  },
  {
    route: 'Rabat to Fes',
    duration: '2h 30min',
    frequency: '8+ daily',
    price: 'From 100 MAD (2nd class)',
    stops: 'Rabat Ville - Meknes - Fes',
    highlight: 'Direct route linking the capital to the cultural heart',
  },
  {
    route: 'Marrakech to Tangier',
    duration: '5h - 5h 30min',
    frequency: '4+ daily (via Casa)',
    price: 'From 250 MAD (2nd class)',
    stops: 'Marrakech - Casa - Rabat - Kenitra - Tangier',
    highlight: 'Full north-south traverse, transfer at Casa Voyageurs',
  },
  {
    route: 'Casablanca to Oujda',
    duration: '9h - 10h',
    frequency: '2 daily',
    price: 'From 200 MAD (2nd class)',
    stops: 'Casa - Fes - Taza - Oujda',
    highlight: 'Longest route, overnight option available',
  },
];

/* =====================================================================
   DATA: TICKET CLASSES
   ===================================================================== */

const ticketClasses = [
  {
    name: 'Second Class (Conventional)',
    icon: Users,
    features: [
      'Comfortable seats in a 2+2 configuration',
      'Air conditioning on most services',
      'Overhead luggage racks',
      'Good for short to medium journeys',
      'Most affordable option starting from 30 MAD',
    ],
    best: 'Budget travelers and short trips under 2 hours',
  },
  {
    name: 'First Class (Conventional)',
    icon: Star,
    features: [
      'Wider seats in a 2+1 configuration',
      'Guaranteed air conditioning',
      'Power outlets at select seats',
      'Quieter carriages with fewer passengers',
      'Roughly 50% more than second class',
    ],
    best: 'Longer journeys, comfort seekers, and business travelers',
  },
  {
    name: 'Al Boraq Economy',
    icon: Train,
    features: [
      'Modern high-speed seating (2+2)',
      'Air conditioning and smooth ride',
      'Complimentary luggage storage areas',
      'Onboard cafe car available',
      'Starting from 149 MAD (Tangier-Casablanca)',
    ],
    best: 'High-speed travel at the best price',
  },
  {
    name: 'Al Boraq First Class',
    icon: BadgeCheck,
    features: [
      'Premium wide seats in a 2+1 layout',
      'Complimentary Wi-Fi access',
      'Power outlets at every seat',
      'Priority boarding and quieter cabin',
      'Starting from 229 MAD (Tangier-Casablanca)',
    ],
    best: 'Maximum comfort on the high-speed line',
  },
];

/* =====================================================================
   DATA: BOOKING TIPS
   ===================================================================== */

const bookingTips = [
  {
    tip: 'Book online at oncf.ma',
    detail: 'The official ONCF website accepts international credit cards and generates e-tickets you can show on your phone. The site is available in French and Arabic.',
    icon: Globe,
  },
  {
    tip: 'Download the ONCF app',
    detail: 'Available on iOS and Android, the app allows booking, schedule checking, and digital ticket storage. Register with your email to manage all bookings.',
    icon: CreditCard,
  },
  {
    tip: 'Book Al Boraq in advance',
    detail: 'High-speed trains can sell out, especially on weekends and holidays. Book at least 2-3 days ahead for guaranteed seating. Early booking also secures the best fares.',
    icon: Timer,
  },
  {
    tip: 'Buy at station counters',
    detail: 'Every major station has ticket windows open from early morning. Bring cash (MAD) or a card. Self-service kiosks at larger stations accept cards and speed up the process.',
    icon: Ticket,
  },
  {
    tip: 'Conventional trains allow walk-up',
    detail: 'For regular ONCF services, you can usually buy tickets just before departure. Second class rarely sells out except during Eid and summer holidays.',
    icon: CheckCircle,
  },
  {
    tip: 'Check the Carte Fidilite loyalty card',
    detail: 'Frequent travelers can save with the ONCF loyalty program offering discounts of up to 30% on regular routes. Ask at any ticket counter for enrollment.',
    icon: Wallet,
  },
];

/* =====================================================================
   DATA: KEY STATIONS
   ===================================================================== */

const keyStations = [
  {
    city: 'Casablanca Voyageurs',
    tips: 'Main hub for all routes. Connected to tram line. Restaurants, ATMs, and luggage storage available. Transfer point between north-south and east-west lines.',
  },
  {
    city: 'Casablanca Port (Casa Port)',
    tips: 'Near the old medina and Hassan II Mosque. Used for the Casablanca-Rabat shuttle. Smaller than Casa Voyageurs but well-connected by tram.',
  },
  {
    city: 'Rabat Ville',
    tips: 'Central location near the medina. Connections to Fes, Marrakech, and Tangier. Tram stop right outside. Clean facilities with cafes and ATMs.',
  },
  {
    city: 'Rabat Agdal',
    tips: 'Al Boraq high-speed stop in Rabat. Modern station in the Agdal neighborhood. Taxi rank outside. Slightly further from the medina than Rabat Ville.',
  },
  {
    city: 'Marrakech',
    tips: 'End of the southern line. Walking distance to Jemaa el-Fna (15 minutes). Taxi rank and bus connections outside. ATMs and cafes inside the station.',
  },
  {
    city: 'Fes',
    tips: 'Serves the Fes medina. Petit taxis (red) queue outside for rides to the old city. Well-maintained station with ATMs and a small cafe.',
  },
  {
    city: 'Tangier Ville',
    tips: 'Al Boraq terminus in northern Morocco. Modern station with excellent facilities. Connected to the port area. Gateway to Spain via ferry to Tarifa.',
  },
  {
    city: 'Meknes',
    tips: 'Compact station for visiting the imperial city. Quick connections to Fes (45 min). Taxi rank outside for the short ride to the medina.',
  },
];

/* =====================================================================
   DATA: LUGGAGE TIPS
   ===================================================================== */

const luggageTips = [
  'No strict weight limit for carry-on luggage, but you must be able to lift bags onto overhead racks yourself',
  'Al Boraq trains have dedicated luggage storage areas at the end of each carriage for larger suitcases',
  'Conventional trains have overhead racks; standard suitcases and backpacks fit comfortably',
  'Keep valuables (passport, wallet, phone) in a daypack on your lap rather than in overhead storage',
  'Casablanca Voyageurs has a left-luggage office (consigne) for storing bags during layovers from 20 MAD per item',
  'Avoid blocking aisles with bags; train staff may ask you to relocate oversized luggage',
  'Bicycles can be transported on conventional trains for a small fee; check at the ticket counter',
  'Musical instruments and sports equipment are allowed but may require an additional seat booking on busy trains',
];

/* =====================================================================
   DATA: SAFETY TIPS
   ===================================================================== */

const safetyTips = [
  'Keep your bags in sight at all times, especially on crowded second-class carriages during peak hours',
  'First class is quieter and offers more security for solo travelers and those carrying valuable equipment',
  'Avoid displaying expensive electronics or jewelry; use headphones to enjoy content discreetly',
  'Train stations are generally safe but stay alert at platforms after dark, especially at smaller stations',
  'ONCF security personnel patrol trains and stations; report any concerns to uniformed staff',
  'Use the overhead rack or under-seat space for bags rather than leaving them in the aisle',
  'On overnight trains, sleep with your daypack as a pillow and keep your phone and wallet close',
  'Save the ONCF customer service number on your phone: +212 890 20 30 40',
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/morocco-train-routes',
    title: 'Morocco Train Routes',
    description: 'Detailed route maps, timetables, and city-to-city connections across the ONCF network.',
    icon: Navigation,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Complete overview of all transport options including trains, buses, taxis, and flights.',
    icon: Compass,
  },
  {
    href: '/public-transport',
    title: 'Morocco Public Transport',
    description: 'Buses, trams, grand taxis, and local transit options for navigating Moroccan cities.',
    icon: MapPin,
  },
  {
    href: '/morocco-trip-cost',
    title: 'Morocco Trip Cost Guide',
    description: 'Budgeting for your Morocco trip including transport, accommodation, food, and activities.',
    icon: Wallet,
  },
  {
    href: '/driving',
    title: 'Driving in Morocco',
    description: 'Rental cars, road conditions, fuel prices, and tips for self-driving across Morocco.',
    icon: Globe,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoTrainTravelPage() {
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
            <span className="text-white">Morocco Train Travel</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Train className="w-4 h-4" />
            Rail Travel Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Train Travel
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know about ONCF trains, the Al Boraq high-speed service,
            routes, schedules, ticket classes, and practical tips for riding the rails across Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Traveling Morocco by Train
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s railway network is one of the best in Africa and offers travelers a comfortable,
                affordable, and scenic way to connect the country&apos;s major cities. Operated by ONCF (Office
                National des Chemins de Fer), the rail system links Tangier in the north to Marrakech in the
                south, with key stops in Casablanca, Rabat, Meknes, Fes, and beyond.
              </p>
              <p>
                The crown jewel of Moroccan rail is the <strong>Al Boraq high-speed train</strong> &mdash;
                Africa&apos;s first and only high-speed rail service. Launched in 2018, Al Boraq whisks
                passengers from Tangier to Casablanca at speeds up to 320 km/h in just over two hours, a
                journey that previously took nearly five hours.
              </p>
              <p>
                Whether you are planning a quick day trip from Casablanca to Rabat, a scenic ride through
                the interior to Fes, or the full north-south journey from Tangier to Marrakech, this guide
                covers everything you need: routes, fares, booking strategies, station tips, and the
                practical details that make train travel in Morocco smooth and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Rail at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about the ONCF railway network and what to expect when traveling by train in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
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

      {/* ── ONCF Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            ONCF: Morocco&apos;s National Railway
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the operator behind Morocco&apos;s rail network.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong className="text-[var(--text-primary)]">ONCF (Office National des Chemins de Fer)</strong> has
                operated Morocco&apos;s railways since 1963. The network spans over 2,110 kilometers of track
                and carries more than 40 million passengers annually. It is the backbone of intercity transport
                in Morocco and a reliable alternative to long-distance buses and domestic flights.
              </p>
              <p>
                The network consists of two main axes: a north-south line connecting Tangier to Marrakech via
                Casablanca and Rabat, and an east-west line running from Casablanca through Fes to Oujda near
                the Algerian border. The Casablanca-Rabat shuttle, running every 30 minutes, is one of the
                busiest commuter routes in Africa.
              </p>
              <p>
                ONCF has invested heavily in modernization. Beyond the Al Boraq high-speed service, conventional
                trains have been upgraded with air conditioning, comfortable seating, and digital ticketing.
                Stations across the network have undergone renovation with improved facilities, accessibility
                features, and real-time departure boards.
              </p>
            </div>
          </div>
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
            The fastest train on the African continent, connecting Tangier to Casablanca in just over 2 hours.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Key Specifications
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Top Speed', value: '320 km/h' },
                  { label: 'Route', value: 'Tangier - Kenitra - Rabat - Casablanca' },
                  { label: 'Journey Time', value: '2 hours 10 minutes (Tangier-Casa)' },
                  { label: 'Frequency', value: '12+ departures daily each direction' },
                  { label: 'Launched', value: 'November 2018' },
                  { label: 'Technology', value: 'TGV-based (Alstom duplex trainsets)' },
                ].map((spec) => (
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
                {[
                  { route: 'Tangier - Casablanca', economy: 'From 149 MAD', first: 'From 229 MAD' },
                  { route: 'Tangier - Rabat', economy: 'From 119 MAD', first: 'From 189 MAD' },
                  { route: 'Tangier - Kenitra', economy: 'From 99 MAD', first: 'From 159 MAD' },
                  { route: 'Kenitra - Casablanca', economy: 'From 79 MAD', first: 'From 129 MAD' },
                ].map((fare) => (
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
                <p className="font-semibold text-[var(--text-primary)] mb-1">Pro Tip: Al Boraq Extension</p>
                <p className="text-[var(--text-secondary)]">
                  ONCF plans to extend the high-speed network south to Marrakech and east to Fes in the coming
                  years. Once completed, the Casablanca to Marrakech journey will drop from 2 hours 40 minutes
                  to under 90 minutes. Check oncf.ma for the latest updates on expansion timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Routes & Timetable ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Train Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key rail connections across Morocco with approximate journey times, frequencies, and fares.
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
                    <span><strong>Price:</strong> {r.price}</span>
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
            Timetables and prices may vary seasonally. Always verify current schedules at oncf.ma before travel.
          </p>
        </div>
      </section>

      {/* ── Ticket Classes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ticket Classes Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choose the right class for your journey, budget, and comfort preferences.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {ticketClasses.map((tc) => {
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

      {/* ── Booking Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking Tips &amp; Strategies
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to buy tickets, when to book, and ways to save on your Morocco train journeys.
          </p>

          <div className="space-y-4">
            {bookingTips.map((bt) => {
              const BtIcon = bt.icon;
              return (
                <div key={bt.tip} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <BtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {bt.tip}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{bt.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Station Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Station Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect at Morocco&apos;s busiest train stations and practical tips for each.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {keyStations.map((station) => (
              <div key={station.city} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {station.city}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{station.tips}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Luggage Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Luggage Rules &amp; Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you can bring on board and how to manage your bags during train journeys.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {luggageTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Safety on Trains ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety on Moroccan Trains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan trains are generally very safe. Follow these tips for a worry-free journey.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {safetyTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Holiday Travel Warning</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Trains are extremely crowded during Eid al-Fitr, Eid al-Adha, and summer holidays
                  (July-August). Book well in advance for these periods and consider first class for
                  a more comfortable journey. Arrive at the station at least 30 minutes before departure
                  during peak travel times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Travel Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for making the most of train travel across Morocco.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Arrive Early',
                text: 'Get to the station 15-20 minutes before departure for conventional trains and 20-30 minutes for Al Boraq. Seats are not reserved on conventional trains, so arriving early secures a window seat.',
                icon: Clock,
              },
              {
                title: 'Bring Snacks & Water',
                text: 'While Al Boraq has a cafe car, conventional trains have limited food options. Pack water and snacks, especially for journeys over 2 hours. Station kiosks sell sandwiches from 15 MAD.',
                icon: BookOpen,
              },
              {
                title: 'Wi-Fi & Connectivity',
                text: 'Al Boraq first class offers Wi-Fi but speeds vary. A Moroccan SIM card (from 30 MAD with data) is more reliable. Maroc Telecom has the best coverage along rail corridors.',
                icon: Wifi,
              },
              {
                title: 'Transfers at Casablanca',
                text: 'Many routes require a transfer at Casa Voyageurs. Allow at least 30-45 minutes between trains. The station has cafes, ATMs, and clear signage in French and Arabic.',
                icon: Navigation,
              },
              {
                title: 'Power Outlets',
                text: 'Al Boraq first class has outlets at every seat. Conventional first class has them at select seats. Bring a portable charger as second class has limited power access.',
                icon: Zap,
              },
              {
                title: 'Photography from Trains',
                text: 'The Casablanca-Fes route offers beautiful countryside views. Sit on the left side heading north from Fes for the best scenery through the Saiss Plain and Gharb region.',
                icon: Compass,
              },
            ].map((tip) => {
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

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about train travel in Morocco.
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
          <Train className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Ride the Rails?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco&apos;s train network makes it easy to explore the country&apos;s most iconic cities
            in comfort and style. From the high-speed Al Boraq to scenic conventional routes, the railway
            connects you to ancient medinas, coastal cities, and everything in between.
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

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
  Globe,
  BookOpen,
  Luggage,
  Users,
  Zap,
  Train,
  Ticket,
  Info,
  Timer,
  CreditCard,
  Wifi,
  ShieldCheck,
  HelpCircle,
  DollarSign,
  Utensils,
  Building,
  Sparkles,
  Moon,
  ArrowLeftRight,
  Award,
  Landmark,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Train Travel 2026 | ONCF Routes, Al Boraq High-Speed & Ticket Guide',
  description:
    'Complete guide to Morocco train travel. ONCF Morocco rail network, Al Boraq high-speed train, Marrakech to Fez train, morocco train tickets and schedule, ticket classes, station guides, night trains, train vs bus comparison, and budget tips for 2026.',
  keywords: [
    'morocco train',
    'ONCF morocco',
    'morocco train tickets',
    'marrakech to fez train',
    'train travel morocco',
    'al boraq high speed train',
    'morocco train schedule',
    'Morocco train routes',
    'Morocco train prices 2026',
    'Casablanca to Rabat train',
    'Tangier to Casablanca train',
    'Morocco night train',
    'Morocco train vs bus',
    'ONCF booking online',
    'Morocco rail pass',
    'Morocco train first class',
    'Morocco train second class',
    'Morocco train stations',
  ],
  openGraph: {
    title: 'Morocco Train Travel 2026 | ONCF Routes, Al Boraq & Booking Guide',
    description:
      'Everything you need to know about train travel in Morocco. ONCF network, Al Boraq high-speed rail, routes, schedules, ticket classes, night trains, and practical tips.',
    url: `${BASE_URL}/morocco-train-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan train at a station platform representing the ONCF rail network across Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Train Travel 2026 | ONCF & Al Boraq Guide',
    description:
      'ONCF routes, Al Boraq high-speed train, ticket classes, booking tips, night trains, and station guide for Morocco rail travel.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-train-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-train-travel`,
  name: 'Morocco Train Travel 2026 | ONCF Routes, Al Boraq & Booking Guide',
  description:
    'Comprehensive guide to train travel in Morocco covering the ONCF rail network, Al Boraq high-speed service, routes, timetables, ticket classes, night trains, train vs bus comparison, booking strategies, station guides, and budget tips.',
  url: `${BASE_URL}/morocco-train-travel`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-train-travel`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Train Travel Guide', item: `${BASE_URL}/morocco-train-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I buy Morocco train tickets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can buy ONCF train tickets online at oncf.ma, through the ONCF mobile app (iOS and Android), at station ticket counters, or at self-service kiosks in larger stations. Online bookings accept international credit cards and generate e-tickets you can show on your phone. For Al Boraq high-speed trains, advance booking is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the Al Boraq high-speed train in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Al Boraq high-speed train reaches speeds up to 320 km/h, making it the fastest train in Africa. It connects Tangier to Casablanca in approximately 2 hours 10 minutes, compared to nearly 5 hours on the conventional service. The line stops at Kenitra and Rabat along the way.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is the Marrakech to Fez train journey?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Marrakech to Fez train takes approximately 7 hours with a transfer at Casablanca Voyageurs. The Marrakech-Casablanca leg takes about 2 hours 40 minutes, and the Casablanca-Fez leg takes about 3 hours 30 minutes. There is no direct train between Marrakech and Fez. Second-class tickets cost from 200 MAD for the full journey.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Morocco train schedule like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ONCF trains run from approximately 6:00 AM to 10:00 PM on most routes. The Casablanca-Rabat shuttle runs every 30 minutes. Al Boraq high-speed trains have 12+ daily departures. Major routes like Casablanca-Fez and Casablanca-Marrakech have 8-10 daily services. Check oncf.ma for the latest Morocco train schedule.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a night train in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco does not operate dedicated sleeper trains with berths. However, the Casablanca to Oujda route (9-10 hours) has late evening departures that arrive the following morning. These are standard seated trains, not sleeper carriages. For long overnight journeys, first class is recommended for wider seats and more comfort.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Morocco train better than the bus?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trains are generally faster, more comfortable, and more spacious than buses for routes they cover. However, buses (CTM and Supratours) reach destinations trains cannot, such as Chefchaouen, Essaouira, Ouarzazate, and the Sahara. Trains are better for Casablanca-Rabat, Fez-Meknes, and Tangier-Casablanca. Use buses for off-network destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Morocco train ticket cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco train fares are very affordable. Second-class examples: Casablanca-Rabat from 50 MAD, Marrakech-Casablanca from 100 MAD, Casablanca-Fez from 130 MAD. Al Boraq high-speed from Tangier to Casablanca starts from 149 MAD economy, from 229 MAD first class. Prices may vary seasonally.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I bring luggage on Moroccan trains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, passengers can bring luggage on Moroccan trains at no extra charge. Overhead racks accommodate standard suitcases and backpacks. There is no strict weight limit, but you must be able to lift your bags onto the racks. Al Boraq trains have dedicated luggage storage areas at the end of each carriage.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: QUICK FACTS
   ═══════════════════════════════════════════════════════════════ */

const quickFacts = [
  { label: 'Rail Network', value: '2,110+ km', detail: 'Connecting all major Moroccan cities', icon: Train },
  { label: 'Al Boraq Speed', value: 'Up to 320 km/h', detail: 'Fastest train in Africa', icon: Zap },
  { label: 'Cheapest Ticket', value: 'From 30 MAD', detail: 'Short-distance second-class fares', icon: DollarSign },
  { label: 'Book Online', value: 'oncf.ma', detail: 'E-tickets accepted on all trains', icon: Globe },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR ROUTES
   ═══════════════════════════════════════════════════════════════ */

const majorRoutes = [
  { route: 'Tangier to Casablanca (Al Boraq)', duration: '2h 10min', frequency: '12+ daily', price: 'From 149 MAD (economy)', stops: 'Tangier Ville - Kenitra - Rabat Agdal - Casa Voyageurs', highlight: 'High-speed at 320 km/h — the fastest train in Africa' },
  { route: 'Marrakech to Casablanca', duration: '2h 40min', frequency: '10+ daily', price: 'From 100 MAD (2nd class)', stops: 'Marrakech - Settat - Casa Voyageurs', highlight: 'Most popular tourist route with frequent departures' },
  { route: 'Casablanca to Rabat', duration: '50min - 1h', frequency: '30+ daily (shuttle)', price: 'From 50 MAD (2nd class)', stops: 'Casa Voyageurs - Casa Port - Mohammedia - Rabat Ville', highlight: 'Ultra-frequent shuttle service, runs every 30 minutes' },
  { route: 'Casablanca to Fes', duration: '3h 30min', frequency: '8+ daily', price: 'From 130 MAD (2nd class)', stops: 'Casa Voyageurs - Rabat - Meknes - Fes', highlight: 'Scenic route through inland Morocco' },
  { route: 'Marrakech to Fes (via Casablanca)', duration: '~7h (transfer)', frequency: '8+ daily (each leg)', price: 'From 200 MAD (2nd class)', stops: 'Marrakech - Casa Voyageurs - Rabat - Meknes - Fes', highlight: 'No direct service — transfer at Casablanca Voyageurs' },
  { route: 'Fes to Meknes', duration: '45min', frequency: '8+ daily', price: 'From 30 MAD (2nd class)', stops: 'Fes - Meknes', highlight: 'Quick hop between two imperial cities' },
  { route: 'Rabat to Fes', duration: '2h 30min', frequency: '8+ daily', price: 'From 100 MAD (2nd class)', stops: 'Rabat Ville - Meknes - Fes', highlight: 'Direct route linking the capital to the cultural heart' },
  { route: 'Casablanca to Oujda', duration: '9h - 10h', frequency: '2 daily', price: 'From 200 MAD (2nd class)', stops: 'Casa - Fes - Taza - Oujda', highlight: 'Longest ONCF route — overnight departure available' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TICKET CLASSES
   ═══════════════════════════════════════════════════════════════ */

const ticketClasses = [
  { name: 'Second Class (Conventional)', icon: Users, features: ['Comfortable seats in a 2+2 layout', 'Air conditioning on most services', 'Overhead luggage racks', 'Good for short to medium journeys', 'Most affordable option starting from 30 MAD'], best: 'Budget travelers and short trips under 2 hours' },
  { name: 'First Class (Conventional)', icon: Star, features: ['Wider seats in a 2+1 configuration', 'Guaranteed air conditioning', 'Power outlets at select seats', 'Quieter carriages with fewer passengers', 'Roughly 50% more than second class'], best: 'Longer journeys, comfort seekers, and business travelers' },
  { name: 'Al Boraq Economy', icon: Train, features: ['Modern high-speed seating (2+2)', 'Air conditioning and smooth ride', 'Dedicated luggage storage areas', 'Onboard cafe car available', 'Starting from 149 MAD (Tangier-Casablanca)'], best: 'High-speed travel at the best price' },
  { name: 'Al Boraq First Class', icon: Award, features: ['Premium wide seats in a 2+1 layout', 'Complimentary Wi-Fi access', 'Power outlets at every seat', 'Priority boarding and quieter cabin', 'Starting from 229 MAD (Tangier-Casablanca)'], best: 'Maximum comfort on the high-speed line' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING METHODS
   ═══════════════════════════════════════════════════════════════ */

const bookingMethods = [
  { method: 'ONCF Website (oncf.ma)', detail: 'The official site accepts international credit cards and generates e-tickets. Available in French and Arabic. Best for advance Al Boraq bookings.', icon: Globe },
  { method: 'ONCF Mobile App', detail: 'Available on iOS and Android. Book tickets, check the Morocco train schedule, store digital tickets, and receive delay notifications.', icon: CreditCard },
  { method: 'Station Ticket Counters', detail: 'Open from early morning at all stations. Pay with MAD cash or card. Staff speak French and sometimes basic English.', icon: Building },
  { method: 'Self-Service Kiosks', detail: 'Found at larger stations like Casa Voyageurs, Rabat Ville, and Marrakech. Accept cards and dispense printed tickets quickly.', icon: Ticket },
  { method: 'Walk-Up for Conventional Trains', detail: 'Regular ONCF services rarely sell out except during Eid and summer holidays. You can buy tickets minutes before departure for most conventional routes.', icon: CheckCircle },
  { method: 'Carte Fidilite Loyalty Card', detail: 'Frequent travelers can enroll at any ticket counter for the ONCF loyalty program offering discounts of up to 30% on regular routes.', icon: Sparkles },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY STATIONS
   ═══════════════════════════════════════════════════════════════ */

const keyStations = [
  { city: 'Casablanca Voyageurs', food: 'Restaurants, cafes, sandwich kiosks', amenities: 'ATMs, luggage storage (from 20 MAD), tram connection, taxi rank, Wi-Fi in waiting area', tips: 'Main hub for all routes. Transfer point between north-south and east-west lines.' },
  { city: 'Casablanca Port (Casa Port)', food: 'Small cafe and kiosk', amenities: 'ATM, tram stop, near Hassan II Mosque', tips: 'Used for the Casablanca-Rabat shuttle. Smaller but well-connected.' },
  { city: 'Rabat Ville', food: 'Station cafe, nearby restaurants on Avenue Mohammed V', amenities: 'ATMs, tram stop outside, clean restrooms, luggage storage', tips: 'Central location near the medina. Connections to Fes, Marrakech, and Tangier.' },
  { city: 'Marrakech', food: 'Cafe, bakery, snack kiosks inside station', amenities: 'ATMs, taxi rank, 15-min walk to Jemaa el-Fna, bus connections', tips: 'End of the southern line. Modernized station with good facilities.' },
  { city: 'Fes', food: 'Small cafe and convenience shop', amenities: 'ATMs, petit taxi (red) queue outside, clean facilities', tips: 'Gateway to the world-famous Fes medina. Taxis to old city from 15 MAD.' },
  { city: 'Tangier Ville', food: 'Modern food court, cafe', amenities: 'ATMs, taxi rank, port connection for ferries to Spain', tips: 'Al Boraq terminus. Modern station with excellent facilities.' },
  { city: 'Meknes', food: 'Kiosk and nearby street vendors', amenities: 'ATM, taxi rank outside', tips: 'Compact station. Quick connections to Fes (45 min) and onward.' },
  { city: 'Rabat Agdal', food: 'Small cafe', amenities: 'Modern platform, taxi rank', tips: 'Al Boraq stop in Rabat. Slightly further from medina than Rabat Ville.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAIN VS BUS
   ═══════════════════════════════════════════════════════════════ */

const trainVsBus = [
  { factor: 'Speed', train: 'Faster on served routes (Al Boraq: 320 km/h)', bus: 'Slower but covers more destinations' },
  { factor: 'Comfort', train: 'Spacious seats, walkable aisles, restrooms on board', bus: 'Comfortable but more cramped, limited legroom' },
  { factor: 'Price', train: 'Slightly higher (from 30 MAD short trips)', bus: 'Usually cheaper (CTM from 25 MAD short trips)' },
  { factor: 'Network', train: 'Limited to major cities on rail lines', bus: 'Reaches Chefchaouen, Essaouira, Ouarzazate, Sahara' },
  { factor: 'Reliability', train: 'Generally punctual (Al Boraq very reliable)', bus: 'Subject to road traffic and delays' },
  { factor: 'Scenery', train: 'Good views, especially Fes-Meknes corridor', bus: 'Mountain passes and coastal roads can be spectacular' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET TIPS
   ═══════════════════════════════════════════════════════════════ */

const budgetTips = [
  { tip: 'Travel Second Class', detail: 'Second class is perfectly comfortable for journeys under 3 hours and costs roughly 40% less than first class. Great for the Casablanca-Rabat shuttle.' },
  { tip: 'Book Al Boraq Early', detail: 'Al Boraq fares increase closer to departure. Booking 3-7 days ahead can save you 20-30% compared to same-day tickets.' },
  { tip: 'Use the Carte Fidilite', detail: 'ONCF loyalty card offers up to 30% discount for frequent rail travelers. Free to enroll at any station counter.' },
  { tip: 'Combine Train and Bus', detail: 'Take the train for major city hops and switch to CTM or Supratours buses for off-network destinations like Chefchaouen or Essaouira.' },
  { tip: 'Avoid Holiday Surcharges', detail: 'Prices can spike during Eid and summer. Travel mid-week and outside peak periods for the lowest fares.' },
  { tip: 'Pack Your Own Food', detail: 'Station and onboard food is reasonably priced but bringing your own snacks and water saves 30-50 MAD per trip on longer journeys.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { href: '/transport', title: 'Morocco Transport Guide', description: 'Complete overview of all transport options including trains, buses, taxis, and flights.', icon: ArrowLeftRight },
  { href: '/public-transport', title: 'Public Transport', description: 'City buses, trams, grand taxis, and local transit for navigating Moroccan cities.', icon: MapPin },
  { href: '/morocco-trip-cost', title: 'Morocco Trip Cost', description: 'Full budgeting breakdown including transport, accommodation, food, and activities.', icon: DollarSign },
  { href: '/first-time-morocco', title: 'First Time in Morocco', description: 'Essential advice for first-time visitors covering culture, safety, money, and more.', icon: Sparkles },
  { href: '/casablanca', title: 'Casablanca City Guide', description: 'Explore Morocco\'s largest city — the main rail hub connecting north and south.', icon: Landmark },
  { href: '/driving', title: 'Driving in Morocco', description: 'Rental cars, road conditions, fuel prices, and tips for self-driving across the country.', icon: Globe },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

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
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-morocco.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Train Travel Guide</span>
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
            Everything you need to know about ONCF Morocco trains, the Al Boraq high-speed service,
            morocco train tickets, schedules, routes from Marrakech to Fez, and practical tips for riding the rails.
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
                Morocco&apos;s railway network is one of the best in Africa and offers travelers a comfortable,
                affordable, and scenic way to connect the country&apos;s major cities. Operated by <strong>ONCF
                (Office National des Chemins de Fer)</strong>, the rail system links Tangier in the north to
                Marrakech in the south, with key stops in Casablanca, Rabat, Meknes, Fes, and beyond.
              </p>
              <p>
                The crown jewel is the <strong>Al Boraq high-speed train</strong> &mdash; Africa&apos;s first
                and only high-speed rail service. Launched in 2018, Al Boraq whisks passengers from Tangier to
                Casablanca at speeds up to 320 km/h in just over two hours, a journey that previously took
                nearly five hours by conventional train.
              </p>
              <p>
                Whether you are planning a quick day trip from Casablanca to Rabat, a scenic ride through the
                interior to Fes, the Marrakech to Fez train journey via Casablanca, or the full north-south
                crossing from Tangier to Marrakech, this guide covers everything: the morocco train schedule,
                routes, fares, booking strategies, station tips, night trains, a train versus bus comparison,
                and the practical details that make train travel in Morocco smooth and enjoyable.
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
            Key facts about the ONCF Morocco railway network and what to expect when traveling by train.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">{fact.value}</p>
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
                operated Morocco&apos;s railways since 1963. The network spans over 2,110 kilometers of track and
                carries more than 40 million passengers annually. It is the backbone of intercity transport in Morocco
                and a reliable alternative to long-distance buses and domestic flights.
              </p>
              <p>
                The network consists of two main axes: a <strong>north-south line</strong> connecting Tangier to
                Marrakech via Casablanca and Rabat, and an <strong>east-west line</strong> running from Casablanca
                through Fes to Oujda near the Algerian border. The Casablanca-Rabat shuttle, running every 30
                minutes, is one of the busiest commuter routes in Africa.
              </p>
              <p>
                ONCF has invested heavily in modernization. Beyond the Al Boraq high-speed service, conventional
                trains have been upgraded with air conditioning, comfortable seating, and digital ticketing. Stations
                across the network have undergone renovation with improved facilities, accessibility features, and
                real-time departure boards showing the current morocco train schedule.
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
              <Sparkles className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Future Expansion</p>
                <p className="text-[var(--text-secondary)]">
                  ONCF plans to extend the high-speed network south to Marrakech and east to Fes. Once completed,
                  the Casablanca to Marrakech journey will drop from 2 hours 40 minutes to under 90 minutes, and
                  a direct Marrakech to Fez train via high-speed rail will become a reality. Check oncf.ma for
                  the latest updates on expansion timelines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Major Routes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Major Morocco Train Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key rail connections with approximate journey times, frequency, and fares for the morocco train schedule.
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
                    <DollarSign className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
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
            Timetables and prices may vary seasonally. Always verify the current morocco train schedule at oncf.ma.
          </p>
        </div>
      </section>

      {/* ── Ticket Classes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Ticket className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Train Ticket Classes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choose the right class for your journey, budget, and comfort needs.
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

      {/* ── How to Buy Tickets ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Buy Morocco Train Tickets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Multiple ways to purchase your morocco train tickets, from online booking to station counters.
          </p>
          <div className="space-y-4">
            {bookingMethods.map((bm) => {
              const BmIcon = bm.icon;
              return (
                <div key={bm.method} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <BmIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {bm.method}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{bm.detail}</p>
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
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Train Station Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Food, amenities, and practical tips for Morocco&apos;s busiest train stations.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {keyStations.map((station) => (
              <div key={station.city} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {station.city}
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <Utensils className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span><strong>Food:</strong> {station.food}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span><strong>Amenities:</strong> {station.amenities}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{station.tips}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marrakech to Fez Train Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Marrakech to Fez Train: Complete Route Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Marrakech to Fez train is one of the most searched routes by tourists. Here is everything you
            need to know about this popular connection between Morocco&apos;s two most iconic cities.
          </p>
          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                There is <strong>no direct Marrakech to Fez train</strong>. The journey requires a transfer at
                Casablanca Voyageurs. The total travel time is approximately 7 hours: about 2 hours 40 minutes
                from Marrakech to Casablanca, a 30-45 minute transfer, and then 3 hours 30 minutes from
                Casablanca to Fes.
              </p>
              <p>
                <strong>Combined fare in second class starts from 200 MAD</strong> (about 20 USD) for both legs.
                First class costs from 300 MAD. Buy both tickets at Marrakech station or online at oncf.ma. Some
                travelers also consider the Supratours or CTM bus (about 8 hours direct) as an alternative, but
                the train is faster and more comfortable if you do not mind the transfer.
              </p>
              <p>
                <strong>Best strategy:</strong> Take an early morning departure from Marrakech (around 7:00 AM)
                to arrive in Casablanca by 9:40 AM. Catch the 10:15 AM or 10:45 AM train to Fes and arrive by
                early afternoon. This gives you the rest of the day to explore the Fes medina.
              </p>
              <p>
                The Casablanca-Fes leg passes through Rabat and Meknes, both of which make excellent day-trip
                stops if you want to break the journey. Consider spending a night in Meknes, the often-overlooked
                imperial city, before continuing to Fes the next morning (only 45 minutes away). Seasonal pricing
                may apply on both route segments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Night Trains ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Moon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Night Trains &amp; Overnight Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to know about late-evening and overnight train journeys in Morocco.
          </p>
          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco does not operate dedicated sleeper trains with berths or couchettes like European night
                trains. However, there are late-evening departures on longer routes that function as de facto
                overnight services, arriving the following morning.
              </p>
              <p>
                The <strong>Casablanca to Oujda</strong> route (9-10 hours) is the most common overnight option.
                Late departures from Casa Voyageurs arrive in Oujda early the next morning. These are standard
                seated coaches, not sleeper carriages, so first class with its wider 2+1 seats is strongly
                recommended for any attempt to sleep on board.
              </p>
              <p>
                For the popular <strong>Marrakech to Fez train</strong> journey, there is no true overnight option
                since the last connections via Casablanca depart in the early evening and arrive in Fes by late
                night. Plan to travel during the day for this route.
              </p>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] pt-2">
                Tips for Overnight Travel
              </h3>
              <ul className="space-y-2">
                {[
                  'Book first class for wider seats that recline further — essential for sleeping comfort',
                  'Bring a travel pillow, blanket, and eye mask as these are not provided',
                  'Keep your phone, wallet, and passport in a body-worn pouch rather than in luggage racks',
                  'Pack snacks and water — there is no food service on conventional overnight trains',
                  'Set multiple alarms for your destination stop so you do not sleep past it',
                  'Arrive early to secure a window seat where you can lean against the wall',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Train vs Bus ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ArrowLeftRight className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Train vs Bus in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When to take the train and when a bus is the better choice.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Factor</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      <Train className="w-4 h-4 inline mr-1" />Train
                    </th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      <Users className="w-4 h-4 inline mr-1" />Bus
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trainVsBus.map((row, i) => (
                    <tr key={row.factor} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.factor}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.train}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.bus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Best Strategy</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Use trains for the main corridor cities (Tangier, Rabat, Casablanca, Meknes, Fes, Marrakech)
                  and switch to CTM or Supratours buses for destinations like Chefchaouen, Essaouira, Ouarzazate,
                  Merzouga, and the Sahara desert towns that the rail network does not reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Luggage Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
              {[
                'No strict weight limit for carry-on luggage, but you must be able to lift bags onto overhead racks yourself',
                'Al Boraq trains have dedicated luggage storage areas at the end of each carriage for larger suitcases',
                'Conventional trains have overhead racks — standard suitcases and backpacks fit comfortably',
                'Keep valuables (passport, wallet, phone) in a daypack on your lap rather than in overhead storage',
                'Casablanca Voyageurs has a left-luggage office (consigne) for storing bags during layovers from 20 MAD per item',
                'Avoid blocking aisles with bags — train staff may ask you to relocate oversized luggage',
                'Bicycles can be transported on conventional trains for a small fee; check at the ticket counter',
                'Musical instruments and sports equipment are allowed but may require an additional seat on busy trains',
              ].map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── WiFi & Comfort ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Wi-Fi, Power &amp; Comfort
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Staying connected and comfortable during your Morocco train journey.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Wi-Fi Availability', text: 'Al Boraq first class offers complimentary Wi-Fi, though speeds can be inconsistent. Conventional ONCF trains do not have Wi-Fi. A Moroccan SIM card with data (from 30 MAD from Maroc Telecom, Inwi, or Orange) is the most reliable way to stay connected. Cell coverage is good along most rail corridors.', icon: Wifi },
              { title: 'Power Outlets', text: 'Al Boraq first class has power outlets at every seat. Conventional first class has them at select seats only. Second class on conventional trains has very limited or no outlets. Bring a portable charger (power bank) for longer journeys, especially if traveling second class.', icon: Zap },
              { title: 'Air Conditioning', text: 'All Al Boraq trains and most conventional first-class carriages are air-conditioned. Second class has AC on most services but it can be less effective on older stock. In summer, first class is worth the upgrade for reliable climate control.', icon: Star },
              { title: 'Onboard Cafe (Al Boraq)', text: 'Al Boraq high-speed trains feature a cafe car selling hot and cold drinks, sandwiches, snacks, and light meals at reasonable prices. Conventional trains do not have onboard catering, so bring your own food and water for longer trips.', icon: Utensils },
            ].map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Budget Travel by Train ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Train Travel in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to save money on morocco train tickets and stretch your travel budget further.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {budgetTips.map((bt) => (
              <div key={bt.tip} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {bt.tip}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{bt.detail}</p>
              </div>
            ))}
          </div>
          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Sparkles className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Rail Pass Note</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  ONCF does not currently offer an unlimited rail pass similar to European Eurail passes. The
                  Carte Fidilite loyalty card is the closest equivalent, offering percentage discounts rather
                  than unlimited travel. For most tourists visiting for 1-2 weeks, buying individual tickets
                  is the most practical approach. Prices may change seasonally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety & Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety &amp; Practical Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Moroccan trains are generally very safe. These tips will help you have a smooth, worry-free journey.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Keep Bags in Sight',
                text: 'Store your bag on the overhead rack directly above you or between your feet. On crowded second-class services during peak hours, keep your daypack on your lap with zippers facing your body.',
                icon: Luggage,
              },
              {
                title: 'First Class for Solo Travelers',
                text: 'First class is quieter, less crowded, and offers more personal space. Solo travelers and those carrying camera equipment or laptops will appreciate the extra security and comfort.',
                icon: Star,
              },
              {
                title: 'Stay Alert at Stations',
                text: 'Train stations are generally safe, but stay aware of your surroundings on platforms, especially after dark at smaller stations. ONCF security personnel patrol all major stations and trains.',
                icon: ShieldCheck,
              },
              {
                title: 'Arrive Early for Al Boraq',
                text: 'Arrive 20-30 minutes before departure for Al Boraq services. Conventional trains require 15-20 minutes. During holidays (Eid, summer), arrive 30+ minutes early as stations get very busy.',
                icon: Clock,
              },
              {
                title: 'Photography from Trains',
                text: 'The Casablanca-Fes route offers beautiful countryside views. Sit on the left side heading north from Fes for the best scenery. The Tangier-Rabat Al Boraq route has Atlantic coast glimpses.',
                icon: Sparkles,
              },
              {
                title: 'ONCF Customer Service',
                text: 'Save the ONCF helpline on your phone: +212 890 20 30 40. Staff at major stations speak French and sometimes basic English. The ONCF app also has a help section.',
                icon: Info,
              },
              {
                title: 'Holiday Crowding',
                text: 'Trains are extremely busy during Eid al-Fitr, Eid al-Adha, and summer (July-August). Book well ahead for these periods. Consider first class or Al Boraq for guaranteed seating.',
                icon: Users,
              },
              {
                title: 'Transfers at Casablanca',
                text: 'Many routes require a transfer at Casa Voyageurs. Allow at least 30-45 minutes between trains. The station has clear signage in French and Arabic, cafes, ATMs, and a luggage office.',
                icon: Building,
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
            Answers to the most common questions about morocco train travel, morocco train tickets, and the ONCF network.
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
            Related Travel Guides
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
            Ready to Ride the Rails?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco&apos;s train network makes it easy to explore the country&apos;s most iconic cities in
            comfort and style. From the Al Boraq high-speed train to scenic conventional routes and the
            Marrakech to Fez train journey, the railway connects you to ancient medinas, coastal cities,
            and everything in between.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <ArrowLeftRight className="w-5 h-5" />
              All Transport Options
            </Link>
            <Link
              href="/first-time-morocco"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              First Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

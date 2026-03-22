import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Ship,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Info,
  Lightbulb,
  Compass,
  Calendar,
  AlertTriangle,
  Globe,
  Sparkles,
  Ticket,
  Users,
  Car,
  Luggage,
  CreditCard,
  Banknote,
  FileText,
  Anchor,
  Navigation,
  Bus,
  Train,
  CircleAlert,
  ShieldCheck,
  Wind,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Spain to Morocco Ferry Guide 2026: Routes, Prices & Tips',
  description:
    'Complete Spain to Morocco ferry guide for 2026. Tarifa-Tangier (35min, from 39 EUR), Algeciras-Tanger Med (1h, from 35 EUR). Companies, booking tips, immigration, onward transport. Walk-on and car ferry options.',
  keywords: [
    'spain to morocco ferry',
    'tarifa to tangier ferry',
    'ferry to morocco',
    'morocco ferry prices 2026',
    'algeciras to tangier',
    'ferry from spain to morocco',
    'tarifa tangier ferry schedule',
    'morocco ferry booking',
    'spain morocco ferry companies',
    'gibraltar to tangier ferry',
    'ferry tangier prices',
    'how to get to morocco from spain',
    'morocco by ferry',
    'tanger med ferry',
    'FRS ferry morocco',
  ],
  openGraph: {
    title: 'Spain to Morocco Ferry Guide 2026: Routes, Prices & Tips',
    description:
      'Everything you need to know about taking the ferry from Spain to Morocco. Routes, prices, companies, booking tips, and what to expect at the port.',
    url: `${BASE_URL}/spain-to-morocco-ferry`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tangier-bay.webp`,
        width: 1200,
        height: 630,
        alt: 'View of Tangier Bay from the ferry approaching Morocco from Spain across the Strait of Gibraltar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spain to Morocco Ferry Guide 2026',
    description:
      'Tarifa-Tangier 35min from 39 EUR, Algeciras-Tanger Med 1h from 35 EUR. Complete guide with booking tips and immigration info.',
    images: [`${BASE_URL}/images/hero-tangier-bay.webp`],
  },
  alternates: { canonical: `${BASE_URL}/spain-to-morocco-ferry` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/spain-to-morocco-ferry`,
  name: 'Spain to Morocco Ferry Guide 2026: Routes, Prices & Tips',
  description:
    'Complete guide to ferry crossings from Spain to Morocco. Routes from Tarifa, Algeciras, and Gibraltar to Tangier and Tanger Med. Prices, schedules, companies, and practical tips.',
  url: `${BASE_URL}/spain-to-morocco-ferry`,
  image: `${BASE_URL}/images/hero-tangier-bay.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/spain-to-morocco-ferry`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Country', name: 'Morocco' },
    { '@type': 'Country', name: 'Spain' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Spain to Morocco Ferry', item: `${BASE_URL}/spain-to-morocco-ferry` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How long is the ferry from Spain to Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The fastest crossing is Tarifa to Tangier Ville at 35 minutes by fast ferry. Algeciras to Tanger Med takes about 1 hour. Algeciras to Ceuta takes 1 hour. Longer routes from Barcelona or Genoa to Tanger Med take 24-48 hours.' } },
    { '@type': 'Question', name: 'How much does the ferry from Spain to Morocco cost?', acceptedAnswer: { '@type': 'Answer', text: 'Walk-on passenger fares start from 39 EUR (Tarifa-Tangier) and from 35 EUR (Algeciras-Tanger Med) one way. Car + driver packages start from 100-150 EUR one way depending on the route and season. Prices increase significantly in July-August. Seasonal pricing can change.' } },
    { '@type': 'Question', name: 'Which is the best ferry route to Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The Tarifa to Tangier Ville route is the best for foot passengers as it arrives in Tangier city center and takes only 35 minutes. For drivers, Algeciras to Tanger Med is better as it has more frequent departures and the new Tanger Med port has excellent road connections.' } },
    { '@type': 'Question', name: 'Do you need a visa for Morocco from Spain?', acceptedAnswer: { '@type': 'Answer', text: 'Citizens of the EU, UK, US, Canada, Australia, and many other countries do not need a visa for Morocco for stays up to 90 days. Your passport must be valid for at least 6 months from your date of entry. You will fill out an entry card on the ferry or at the port.' } },
    { '@type': 'Question', name: 'Can you do a day trip from Spain to Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, day trips from Tarifa to Tangier are very popular. The 35-minute crossing allows you to spend 6-8 hours in Tangier. Many organized day trips depart from Tarifa, Malaga, or the Costa del Sol from around 60-80 EUR including ferry, guide, and lunch. Independent day trips are easy too.' } },
    { '@type': 'Question', name: 'Is the ferry from Spain to Morocco safe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, the Strait of Gibraltar ferry services are operated by established companies with modern vessels. The crossing is short (35-60 minutes on main routes) and the strait is one of the busiest waterways in the world. Seasickness is possible in winter when seas are rougher, but summer crossings are typically smooth.' } },
  ],
};

/* ===============================================================
   DATA: FERRY ROUTES
   =============================================================== */

const ferryRoutes = [
  {
    from: 'Tarifa',
    to: 'Tangier Ville',
    icon: Ship,
    duration: '35 minutes',
    frequency: '6-8 daily',
    walkOn: 'From 39 EUR',
    withCar: 'Not available (foot passengers only on most services)',
    companies: ['FRS'],
    recommended: true,
    description:
      'The most popular route for foot passengers and the fastest crossing of the Strait of Gibraltar. The ferry arrives at Tangier Ville port, right next to the medina, making it ideal for travelers who want immediate access to the city. The 35-minute crossing offers spectacular views of both coastlines and often dolphins in the strait.',
    pros: ['Fastest crossing (35 min)', 'Arrives in Tangier city center', 'Multiple daily departures', 'Best views of the strait'],
    cons: ['No car ferry on most services', 'Small port can be crowded in summer', 'Limited departures in winter'],
  },
  {
    from: 'Algeciras',
    to: 'Tanger Med',
    icon: Ship,
    duration: '1 hour',
    frequency: '10-12 daily',
    walkOn: 'From 35 EUR',
    withCar: 'From 100 EUR (car + driver)',
    companies: ['Trasmediterranea', 'Balearia', 'Inter Shipping', 'FRS'],
    recommended: true,
    description:
      'The busiest route across the strait with the most frequent departures. Tanger Med is a modern port 40 km east of Tangier city. Best choice for drivers as it connects directly to the highway network. Walk-on passengers need to arrange transport from Tanger Med to Tangier city (shuttle bus, grand taxi, or pre-arranged transfer).',
    pros: ['Most frequent departures', 'Cheapest fares available', 'Multiple companies (competition)', 'Car-friendly port'],
    cons: ['Arrives 40 km from Tangier', 'Need onward transport to city', 'Large industrial port feel', 'Longer crossing than Tarifa'],
  },
  {
    from: 'Algeciras',
    to: 'Ceuta',
    icon: Ship,
    duration: '1 hour',
    frequency: '6-10 daily',
    walkOn: 'From 35 EUR',
    withCar: 'From 90 EUR (car + driver)',
    companies: ['Trasmediterranea', 'Balearia', 'FRS'],
    recommended: false,
    description:
      'Ceuta is a Spanish enclave on the Moroccan coast. This route technically stays within Spain. From Ceuta, you walk across the border into Morocco at the Tarajal border crossing, then take transport to Tetouan or Tangier. Popular with locals and budget travelers, but adds complexity with a land border crossing.',
    pros: ['Frequent departures', 'Affordable fares', 'Interesting border crossing experience', 'Option to visit Ceuta'],
    cons: ['Requires land border crossing', 'Border queues can be long (1-2 hours)', 'Not direct to Moroccan cities', 'Confusing for first-timers'],
  },
  {
    from: 'Gibraltar',
    to: 'Tangier Ville',
    icon: Anchor,
    duration: '1 hour 20 minutes',
    frequency: '1-2 daily (seasonal)',
    walkOn: 'From 45 EUR',
    withCar: 'Not available',
    companies: ['FRS'],
    recommended: false,
    description:
      'A scenic crossing from the British territory of Gibraltar directly to Tangier city center. Less frequent than Tarifa or Algeciras routes and often seasonal (April-October). Nice option if you are visiting Gibraltar and want to continue to Morocco. Passport control at Gibraltar can add time.',
    pros: ['Arrives in Tangier center', 'Scenic crossing', 'Combine with Gibraltar visit', 'Avoid Spanish port hassle'],
    cons: ['Limited departures', 'Seasonal service', 'More expensive than alternatives', 'Gibraltar border queues possible'],
  },
  {
    from: 'Barcelona',
    to: 'Tanger Med',
    icon: Globe,
    duration: '24-32 hours',
    frequency: '2-4 weekly',
    walkOn: 'From 80 EUR',
    withCar: 'From 200 EUR (car + driver)',
    companies: ['GNV (Grandi Navi Veloci)', 'Grimaldi Lines'],
    recommended: false,
    description:
      'Overnight ferry crossing from Barcelona to Tanger Med. A completely different experience from the short strait crossings -- this is a mini-cruise with cabins, restaurants, and entertainment. Popular with Moroccan residents in Spain returning for holidays and with travelers who want to bring a vehicle from northern Spain.',
    pros: ['No need to drive to southern Spain', 'Cabin accommodation included', 'Bring your car from Catalonia', 'Unique travel experience'],
    cons: ['Very long crossing (24-32 hours)', 'Significantly more expensive', 'Infrequent departures', 'Can be rough seas in winter'],
  },
] as const;

/* ===============================================================
   DATA: FERRY COMPANIES
   =============================================================== */

const ferryCompanies = [
  {
    name: 'FRS (Forschungsschiffahrt)',
    icon: Star,
    routes: 'Tarifa-Tangier, Algeciras-Tanger Med, Algeciras-Ceuta, Gibraltar-Tangier',
    website: 'frs.es',
    description: 'The most popular company for the Tarifa-Tangier route. German-owned with modern fast ferries. Reliable schedules and good online booking. The go-to choice for foot passengers crossing the strait.',
    tips: 'Book online for the best prices. Check-in opens 1 hour before departure. Arrive at least 45 minutes early in summer.',
  },
  {
    name: 'Inter Shipping',
    icon: Ship,
    routes: 'Algeciras-Tanger Med',
    website: 'intershipping.es',
    description: 'Operates conventional and fast ferries between Algeciras and Tanger Med. Often the cheapest option for this route. Good for both passengers and vehicles.',
    tips: 'Prices are competitive, especially for last-minute bookings. Less polished than FRS but reliable service.',
  },
  {
    name: 'Balearia',
    icon: Anchor,
    routes: 'Algeciras-Tanger Med, Algeciras-Ceuta',
    website: 'balearia.com',
    description: 'Major Spanish ferry company with a large fleet. Modern vessels with comfortable seating, cafeterias, and car decks. Good online booking platform with multi-language support.',
    tips: 'Book through their app for occasional discounts. Their loyalty program offers savings for frequent travelers.',
  },
  {
    name: 'Trasmediterranea',
    icon: Navigation,
    routes: 'Algeciras-Tanger Med, Algeciras-Ceuta',
    website: 'trasmediterranea.es',
    description: 'Historic Spanish ferry company operating since 1917. Part of the Armas Trasmediterranea group. Operates large conventional ferries ideal for vehicle transport. Established and reliable.',
    tips: 'Good for families and those bringing cars. Their larger vessels are more stable in rough weather. Book well ahead for summer travel.',
  },
  {
    name: 'GNV (Grandi Navi Veloci)',
    icon: Globe,
    routes: 'Barcelona-Tanger Med, Genoa-Tanger Med',
    website: 'gnv.it',
    description: 'Italian company operating long-distance overnight ferries from Barcelona and Genoa to Tanger Med. Large cruise-ferry style vessels with cabins, restaurants, pools, and entertainment.',
    tips: 'Book a cabin for overnight crossings. Deck passage is the cheapest option. Book 1-2 months ahead for summer travel. Great for road trips from northern Europe.',
  },
] as const;

/* ===============================================================
   DATA: AT THE PORT
   =============================================================== */

const portTips = [
  {
    icon: FileText,
    title: 'Immigration & Passport Control',
    description: 'Most nationalities (EU, UK, US, Canada, Australia) get visa-free entry to Morocco for up to 90 days. Your passport must be valid for at least 6 months. You will fill out a blue entry card (available on the ferry or at the port). Immigration is processed either on the ferry or at the port -- the process takes 10-30 minutes depending on the queue.',
  },
  {
    icon: ShieldCheck,
    title: 'Customs',
    description: 'Customs inspection varies. Foot passengers usually pass through quickly. Vehicles may be inspected. You can bring up to 200 cigarettes, 1 liter of spirits, and personal items duty-free. Importing drones requires advance permission. Prescription medicines should have documentation.',
  },
  {
    icon: Banknote,
    title: 'Currency Exchange',
    description: 'Exchange a small amount of euros to dirhams at the port for immediate needs (taxi, tips, water). Rates at ports are poor -- exchange from 500 MAD max. ATMs are available at Tangier Ville port and near Tanger Med. Better rates are found at banks and exchange bureaux in Tangier city center.',
  },
  {
    icon: CircleAlert,
    title: 'Unofficial Guides & Touts',
    description: 'At Tangier Ville port, you will encounter people offering to be your guide, carry your bags, or arrange taxis. Politely decline unless you want their help. Official taxis are available outside the port terminal. Pre-arrange a transfer through your riad to avoid hassle.',
  },
  {
    icon: CreditCard,
    title: 'SIM Card & Connectivity',
    description: 'Buy a Moroccan SIM card at the port or in Tangier. Maroc Telecom, Orange, and Inwi have shops near the port. A SIM with 5-10 GB data costs from 30-50 MAD. The port has limited WiFi. Your European SIM may work but roaming charges apply outside EU roaming agreements.',
  },
  {
    icon: Luggage,
    title: 'Luggage & Security',
    description: 'Keep your luggage with you at all times. There is no luggage storage at Tangier Ville port. At Tanger Med, the terminal is larger with more facilities. Travel light for the ferry crossing. If you have large bags, arrange a transfer rather than navigating the medina streets.',
  },
] as const;

/* ===============================================================
   DATA: ONWARD TRANSPORT FROM TANGIER
   =============================================================== */

const onwardTransport = [
  {
    mode: 'Petit Taxi (within Tangier)',
    icon: Car,
    from: 'Tangier Ville port',
    price: 'From 15-30 MAD',
    description: 'Small blue taxis take you anywhere within Tangier city. Insist on the meter. From the port to the medina is about 15 MAD. From the port to Tangier Ville train station is about 20 MAD.',
  },
  {
    mode: 'Shuttle Bus (Tanger Med)',
    icon: Bus,
    from: 'Tanger Med port',
    price: 'From 20-30 MAD',
    description: 'Shuttle buses connect Tanger Med port to Tangier city center (40 km, about 1 hour). Also connects to Tanger Med train station for Al Boraq high-speed services.',
  },
  {
    mode: 'Grand Taxi to Chefchaouen',
    icon: Car,
    from: 'Tangier',
    price: 'From 80-100 MAD per seat',
    description: 'Shared grand taxis depart from the Tangier bus station to Chefchaouen (2 hours). Wait until the taxi fills (6 passengers) or pay for all seats for a private ride (from 500 MAD).',
  },
  {
    mode: 'Al Boraq Train to Casablanca',
    icon: Train,
    from: 'Tangier Ville Station',
    price: 'From 149 MAD (1st class)',
    description: 'Africa\'s only high-speed train connects Tangier to Casablanca in just 2 hours 10 minutes, stopping at Kenitra and Rabat. Modern, comfortable, and reliable. Book online at oncf.ma.',
  },
  {
    mode: 'CTM/Supratours Bus',
    icon: Bus,
    from: 'Tangier Bus Station',
    price: 'From 80-200 MAD',
    description: 'Air-conditioned intercity buses to Chefchaouen (from 80 MAD, 3-4h), Fes (from 120 MAD, 5-6h), Casablanca (from 150 MAD, 5h), and Marrakech (from 200 MAD, 9h).',
  },
  {
    mode: 'Private Transfer',
    icon: Users,
    from: 'Port',
    price: 'From 200-500 MAD',
    description: 'Pre-arranged private transfers are the most comfortable option. Your riad or hotel can arrange a driver to meet you at the port. Recommended for first-time visitors and those with heavy luggage.',
  },
] as const;

/* ===============================================================
   DATA: BOOKING TIPS
   =============================================================== */

const bookingTips = [
  {
    icon: Calendar,
    title: 'When to Book',
    tip: 'For summer travel (July-August), book 2-4 weeks in advance, especially for car ferries. Shoulder season (May-June, September-October) can often be booked a few days ahead. Winter crossings rarely sell out for foot passengers.',
  },
  {
    icon: Ticket,
    title: 'Walk-On vs Car',
    tip: 'Walk-on passengers have more flexibility. You can buy tickets at the port and take the next available ferry. Car ferries require advance booking in summer and cost significantly more. The Tarifa-Tangier route is primarily foot passengers only.',
  },
  {
    icon: CreditCard,
    title: 'Where to Book',
    tip: 'Book directly on ferry company websites (frs.es, balearia.com) for the best prices. Third-party booking sites like Direct Ferries compare prices across companies. Port ticket offices are available but prices may be higher and queues longer.',
  },
  {
    icon: Clock,
    title: 'Check-In & Boarding',
    tip: 'Arrive at the port at least 1 hour before departure (1.5 hours in summer). Check-in closes 30 minutes before departure for foot passengers and 45 minutes for vehicles. Tarifa is a small port -- arrive early to find parking if driving.',
  },
  {
    icon: AlertTriangle,
    title: 'Cancellations & Weather',
    tip: 'Strong winds in the Strait of Gibraltar (levante wind) can cause cancellations, especially in winter. Most companies offer free rebooking to the next available ferry. Check weather forecasts and sign up for company notifications before your travel date.',
  },
  {
    icon: Wind,
    title: 'Seasickness',
    tip: 'The strait crossing is short (35-60 minutes) and modern ferries are stable. However, in rough weather the sea can be choppy. If prone to seasickness, take medication before boarding, sit in the center of the vessel (less motion), and focus on the horizon.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'Tangier Guide', href: '/tangier', description: 'Complete city guide for where the ferry arrives' },
  { title: 'Things to Do in Tangier', href: '/things-to-do-tangier', description: 'Top attractions and activities' },
  { title: 'Day Trips from Tangier', href: '/day-trips-from-tangier', description: 'Excursions from your arrival city' },
  { title: 'How Many Days in Morocco?', href: '/how-many-days-in-morocco', description: 'Plan your trip length after arriving' },
  { title: 'Morocco Transport Guide', href: '/transport', description: 'Getting around Morocco by train, bus, taxi' },
  { title: 'Is Morocco Expensive?', href: '/is-morocco-expensive', description: 'Budget planning for your Morocco trip' },
  { title: 'First Time in Morocco', href: '/first-time', description: 'Essential tips for first-time visitors' },
  { title: 'Morocco Airport Guide', href: '/airports', description: 'Alternative: flying into Morocco' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function SpainToMoroccoFerryPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* -- JSON-LD -- */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ============== HERO ============== */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-tangier-bay.webp"
          alt="View of Tangier Bay from the Strait of Gibraltar with ferry approaching the Moroccan coast"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
            Spain to Morocco Ferry Guide 2026
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl opacity-95">
            Complete guide to routes, prices, companies & tips for crossing the Strait of Gibraltar
          </p>
        </div>
      </section>

      {/* ============== BREADCRUMBS ============== */}
      <nav aria-label="Breadcrumb" className="container-morocco py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-1 flex-wrap">
          <li className="flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li className="text-[#A0522D] font-medium">Spain to Morocco Ferry</li>
        </ol>
      </nav>

      {/* ============== QUICK ANSWER ============== */}
      <section className="container-morocco py-8">
        <div className="max-w-3xl mx-auto">
          <div className="card-moroccan p-6 md:p-8 border-l-4 border-[#A0522D]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[#A0522D] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-3">
                  The Quick Guide
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>The fastest and most popular route is Tarifa to Tangier Ville (35 minutes, from 39 EUR one way).</strong> This drops you right in Tangier city center. FRS operates 6-8 daily ferries. For drivers, <strong>Algeciras to Tanger Med (1 hour, from 35 EUR walk-on, from 100 EUR with car)</strong> is the better option with more frequent departures.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>In summer (July-August), book 2-4 weeks ahead.</strong> Walk-on passengers can usually find same-day tickets in shoulder season and winter. No visa is required for EU, UK, US, Canadian, and Australian citizens (up to 90 days). Seasonal pricing can change.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Fastest Route', value: '35 min', sub: 'Tarifa - Tangier' },
              { label: 'Cheapest Fare', value: 'From 35 EUR', sub: 'Walk-on passenger' },
              { label: 'Busiest Route', value: '12/day', sub: 'Algeciras - Tanger Med' },
              { label: 'Peak Season', value: 'Jul-Aug', sub: 'Book 2-4 weeks ahead' },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-4 text-center">
                <p className="text-xs text-gray-500 uppercase tracking-wide">{stat.label}</p>
                <p className="font-[family-name:var(--font-display)] text-xl font-bold text-[#A0522D]">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Crossing the Strait of Gibraltar by ferry is the most romantic way to enter Morocco and the most popular entry point for travelers coming from Europe by land. Just 14 kilometers separate Spain from Morocco at the strait&apos;s narrowest point, making this one of the world&apos;s most dramatic border crossings -- a passage between two continents, two cultures, and two worlds.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Several ferry companies operate multiple daily crossings year-round. The choice of route depends on whether you are a foot passenger or bringing a vehicle, where you are coming from in Spain, and which Moroccan city you want to reach first. This guide covers every route, company, and practical detail you need.
            </p>
          </div>
        </div>
      </section>

      {/* ============== FERRY ROUTES ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Ferry Routes: Spain to Morocco
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Five main routes connect Spain (and Gibraltar) to Morocco. The top two cover 90% of travelers. Seasonal pricing can change.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {ferryRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <div key={`${route.from}-${route.to}`} className={`card-moroccan p-5 md:p-6 ${route.recommended ? 'border-l-4 border-[#A0522D]' : ''}`}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">
                          {route.from} to {route.to}
                        </h3>
                        {route.recommended && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold bg-[#A0522D] text-white">
                            <Star className="w-3 h-3" />
                            Recommended
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{route.duration}</span>
                        <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{route.frequency}</span>
                        <span className="flex items-center gap-1 text-[#A0522D] font-semibold"><Ticket className="w-3.5 h-3.5" />{route.walkOn}</span>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-3">{route.description}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm mb-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="font-semibold text-gray-800 text-xs mb-1">Walk-on: {route.walkOn}</p>
                          <p className="text-gray-600 text-xs">With car: {route.withCar}</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <p className="font-semibold text-gray-800 text-xs mb-1">Companies:</p>
                          <p className="text-gray-600 text-xs">{route.companies.join(', ')}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div>
                          <p className="font-semibold text-green-700 mb-1">Pros:</p>
                          <ul className="space-y-0.5">
                            {route.pros.map((pro) => (
                              <li key={pro} className="flex items-start gap-1 text-gray-600">
                                <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="font-semibold text-red-700 mb-1">Cons:</p>
                          <ul className="space-y-0.5">
                            {route.cons.map((con) => (
                              <li key={con} className="flex items-start gap-1 text-gray-600">
                                <AlertTriangle className="w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" />
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== FERRY COMPANIES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Ferry Companies
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Five main companies operate the Spain-Morocco ferry routes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {ferryCompanies.map((company) => {
            const Icon = company.icon;
            return (
              <div key={company.name} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C4960C]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900">{company.name}</h3>
                    <span className="text-xs text-gray-500">{company.website}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-2">{company.description}</p>
                <div className="bg-gray-50 rounded-lg p-3 text-xs mb-2">
                  <p className="font-semibold text-gray-800">Routes: {company.routes}</p>
                </div>
                <div className="flex items-start gap-1.5 text-xs text-gray-500">
                  <Lightbulb className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <span>{company.tips}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== BOOKING TIPS ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Booking Tips & Practical Advice
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Essential advice for a smooth crossing
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {bookingTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== AT THE PORT ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          At the Port: What to Expect
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Immigration, customs, currency, and getting out of the port area
        </p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {portTips.map((tip) => {
            const Icon = tip.icon;
            return (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C4960C]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900 mb-1">{tip.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== ONWARD TRANSPORT ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Onward Transport from Tangier
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            How to get from the port to your final destination in Morocco. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {onwardTransport.map((transport) => {
              const Icon = transport.icon;
              return (
                <div key={transport.mode} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900">{transport.mode}</h3>
                      <span className="text-sm font-semibold text-[#A0522D]">{transport.price}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{transport.description}</p>
                  <p className="text-gray-500 text-xs mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    From: {transport.from}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== STEP BY STEP ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Step-by-Step: Your First Crossing
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          A walkthrough of the Tarifa to Tangier crossing, the most popular route for foot passengers
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {[
              { step: 1, title: 'Arrive in Tarifa', desc: 'The port is in the center of town, walkable from the bus station. If driving, park at the port car park (from 10 EUR/day) or in town. Arrive at least 1 hour before departure.' },
              { step: 2, title: 'Check-In & Immigration', desc: 'Present your passport and ticket at the FRS counter. You will receive a boarding pass. Spanish exit immigration is quick (often just a passport scan). Fill out the blue Moroccan entry card if provided.' },
              { step: 3, title: 'Board the Ferry', desc: 'Walk onto the ferry via the gangway. Find a seat on the upper deck for the best views. The ferry has indoor seating, a cafe, and outdoor decks. WiFi is available on most vessels.' },
              { step: 4, title: 'Enjoy the Crossing', desc: 'The 35-minute crossing offers views of both coastlines, the Rock of Gibraltar, and often dolphins. Keep your passport handy as Moroccan immigration officers process passengers on the ferry itself on some sailings.' },
              { step: 5, title: 'Moroccan Immigration', desc: 'If not processed on the ferry, proceed to passport control at Tangier Ville port. Present your passport and completed entry card. The officer will stamp your passport with a 90-day entry. Process takes 5-20 minutes.' },
              { step: 6, title: 'Exit the Port', desc: 'Walk through the port terminal and exit. Decline unsolicited guides. Official petit taxis are available outside. The medina is a 10-minute walk uphill. If your riad has arranged a pickup, look for someone holding a sign with your name.' },
              { step: 7, title: 'Welcome to Morocco', desc: 'You are now in Tangier. Exchange some euros at a bureau de change (or use an ATM), buy a SIM card, and begin your Morocco adventure. The medina, Kasbah, and Grand Socco are all within walking distance of the port.' },
            ].map((step) => (
              <div key={step.step} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D] flex items-center justify-center text-white">
                  <span className="font-[family-name:var(--font-display)] font-bold">{step.step}</span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="card-moroccan p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-[family-name:var(--font-display)] font-bold text-gray-900 hover:text-[#A0522D] transition-colors">
                  {faq.name}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============== RELATED GUIDES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:border-[#A0522D] transition-colors group">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900 group-hover:text-[#A0522D] transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-medium mt-3">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-[#A0522D] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Cross the Strait?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
            The ferry from Spain to Morocco is one of the world&apos;s great border crossings. In just 35 minutes, you will travel between two continents and arrive in a completely different world.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/things-to-do-tangier"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Things to Do in Tangier
            </Link>
            <Link
              href="/how-many-days-in-morocco"
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Plan Your Trip Length
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

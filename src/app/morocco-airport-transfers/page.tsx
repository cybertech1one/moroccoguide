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
  Plane,
  Car,
  Bus,
  Info,
  Navigation,
  Timer,
  CreditCard,
  ShieldCheck,
  CircleAlert,
  BadgeCheck,
  HelpCircle,
  Phone,
  MessageSquare,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Airport Transfers 2026 | Taxi, Bus & Private Transfer Guide',
  description:
    'Complete guide to Morocco airport transfers in 2026. How to get from Marrakech Menara, Casablanca Mohammed V, Fes-Saiss, Tangier, Agadir, and Rabat airports to city centres. Taxi fares, bus routes, private transfers, booking tips, and scam avoidance.',
  keywords: [
    'Morocco airport transfer',
    'Marrakech airport to city',
    'Casablanca airport transfer',
    'Fes airport taxi',
    'Tangier airport transfer',
    'Agadir airport transfer',
    'Rabat airport transfer',
    'Morocco airport taxi price',
    'Morocco airport bus',
    'private transfer Morocco',
    'Marrakech Menara airport',
    'Mohammed V airport transfer',
    'Morocco airport scam',
    'Morocco airport to hotel',
    'Morocco airport transfer cost',
    'Morocco airport shuttle',
    'airport taxi Morocco 2026',
  ],
  openGraph: {
    title: 'Morocco Airport Transfers 2026 | Taxi, Bus & Private Transfer Guide',
    description:
      'Everything you need to know about getting from Morocco airports to your hotel. Taxi fares, bus options, private transfers, booking tips, and scam avoidance for all major airports.',
    url: `${BASE_URL}/morocco-airport-transfers`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Taxis waiting outside a Moroccan airport terminal representing airport transfer options across Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Airport Transfers 2026 | Taxi, Bus & Private Transfer Guide',
    description:
      'Taxi fares, bus routes, private transfers, and scam avoidance tips for all major Moroccan airports.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-airport-transfers` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-airport-transfers`,
  name: 'Morocco Airport Transfers 2026 | Taxi, Bus & Private Transfer Guide',
  description:
    'Comprehensive guide to airport transfers in Morocco covering taxi fares, bus routes, private transfer services, booking strategies, scam avoidance, and practical tips for getting from all major Moroccan airports to city centres.',
  url: `${BASE_URL}/morocco-airport-transfers`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-airport-transfers`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Airport Transfers', item: `${BASE_URL}/morocco-airport-transfers` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much is a taxi from Marrakech airport to the city centre?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An official taxi from Marrakech Menara Airport to the medina or Gueliz costs from 100 to 150 MAD during the day. At night, fares may be slightly higher. Always agree on the fare before getting in or insist the driver uses the meter. A fixed-price booth inside the arrivals hall posts official rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a bus from Casablanca Mohammed V Airport to the city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, there is a direct train from Mohammed V Airport to Casablanca city centre (Casa Voyageurs station) running every hour from early morning to late evening. The journey takes about 45 minutes and costs from 60 MAD. There is no regular public bus service, but CTM coaches and private shuttles are available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a private airport transfer in Morocco in advance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pre-booking a private transfer is recommended for first-time visitors, late-night arrivals, families with luggage, and anyone who wants a hassle-free experience. Your driver will meet you in arrivals with a name sign. Prices are fixed and usually include waiting time. Many riads and hotels can arrange transfers for you.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I avoid airport taxi scams in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the official taxi rank outside the arrivals terminal rather than accepting offers from touts inside the building. Agree on the fare before getting in, or insist on the meter. Check the official price board at the airport. Avoid anyone who approaches you inside the terminal offering a ride. Pre-booking a transfer eliminates scam risk entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a bus from Marrakech airport to the city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the number 19 bus connects Marrakech Menara Airport to Jemaa el-Fna in the medina. It costs from 30 MAD and runs every 20-30 minutes during the day. The journey takes around 20-30 minutes depending on traffic. It is a budget-friendly option but can be crowded and does not run late at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far are Morocco airports from city centres?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech Menara is 6 km from the medina (15 minutes). Casablanca Mohammed V is 30 km from the city (45 minutes). Fes-Saiss is 15 km from the medina (20 minutes). Tangier Ibn Battouta is 15 km from the city (20 minutes). Agadir Al Massira is 25 km away (30 minutes). Rabat-Sale is 10 km from central Rabat (20 minutes).',
      },
    },
    {
      '@type': 'Question',
      name: 'Do Moroccan airports have ride-hailing apps?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Careem (owned by Uber) operates in Casablanca, Rabat, and Marrakech and can be used for airport pickups. InDrive is also gaining popularity. However, app-based rides may not always be available immediately at smaller airports. Having a pre-booked transfer or using the official taxi rank remains the most reliable option.',
      },
    },
  ],
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  {
    label: 'Major Airports',
    value: '6 International',
    detail: 'Marrakech, Casablanca, Fes, Tangier, Agadir, Rabat',
    icon: Plane,
  },
  {
    label: 'Cheapest Transfer',
    value: 'From 30 MAD',
    detail: 'Airport bus in Marrakech (line 19)',
    icon: Banknote,
  },
  {
    label: 'Private Transfer',
    value: 'From 200 MAD',
    detail: 'Pre-booked sedan with meet & greet',
    icon: Car,
  },
  {
    label: 'Book Ahead',
    value: 'Recommended',
    detail: 'Especially for late-night arrivals',
    icon: ShieldCheck,
  },
];

/* =====================================================================
   DATA: AIRPORT TRANSFER DETAILS
   ===================================================================== */

const airportTransfers = [
  {
    airport: 'Marrakech Menara Airport (RAK)',
    distance: '6 km from medina (15 minutes)',
    taxi: 'Official taxi from 100-150 MAD to medina/Gueliz. Fixed-price board in arrivals hall. Grand taxis (shared) available for from 20 MAD per seat to Jemaa el-Fna area.',
    bus: 'Line 19 bus to Jemaa el-Fna from 30 MAD. Runs every 20-30 minutes during the day. Takes 20-30 minutes. Does not run late at night.',
    privateTransfer: 'From 200 MAD for a sedan, from 350 MAD for a minivan. Driver meets you in arrivals with a name sign. Door-to-door to your riad or hotel.',
    tips: 'The closest airport to the city in Morocco. Walk past the touts inside and use the official taxi rank outside. Many riads arrange free or discounted pickup if you book directly.',
  },
  {
    airport: 'Casablanca Mohammed V Airport (CMN)',
    distance: '30 km from city centre (45 minutes)',
    taxi: 'Official taxi from 300-400 MAD to central Casablanca. Meter should be used but agree on fare first. Petit taxis (red) are cheaper but may refuse airport runs.',
    bus: 'No regular public bus. Direct ONCF train to Casa Voyageurs station every hour from 60 MAD (45 minutes). CTM coaches run to the city centre from 50 MAD.',
    privateTransfer: 'From 350 MAD for a sedan. Popular for business travelers. Can include drop-off at Casablanca hotels or onward transfer to Rabat (from 600 MAD).',
    tips: 'The train is the best value option. The station is directly connected to Terminal 1 via a covered walkway. Last train around 22:00. For late arrivals, pre-book a private transfer.',
  },
  {
    airport: 'Fes-Saiss Airport (FEZ)',
    distance: '15 km from medina (20 minutes)',
    taxi: 'Official taxi from 150-200 MAD to the medina. Fixed fare posted at airport. Grand taxis available from 30 MAD per seat if sharing.',
    bus: 'Line 16 bus runs to the city centre from 5 MAD but is infrequent and slow. Not practical with heavy luggage.',
    privateTransfer: 'From 250 MAD for a sedan. Highly recommended for first-time visitors navigating to riads inside the medina where taxis cannot enter.',
    tips: 'Medina riads often cannot be reached by car. Your driver or riad staff will arrange a porter to walk you the final stretch through narrow alleys. Confirm this arrangement beforehand.',
  },
  {
    airport: 'Tangier Ibn Battouta Airport (TNG)',
    distance: '15 km from city centre (20 minutes)',
    taxi: 'Official taxi from 150-200 MAD to Tangier city centre or port area. Meters are rarely used; agree on the fare before departure.',
    bus: 'Alsa bus line runs to the city centre from 10 MAD. Frequency is limited, about every 30-60 minutes during peak hours.',
    privateTransfer: 'From 250 MAD for a sedan. Can include onward travel to Chefchaouen (from 1,200 MAD) or Asilah (from 500 MAD).',
    tips: 'If connecting to a ferry to Spain, confirm your taxi goes to Tanger Med port (50 km away, from 500 MAD) rather than the old city port. These are very different destinations.',
  },
  {
    airport: 'Agadir Al Massira Airport (AGA)',
    distance: '25 km from city centre (30 minutes)',
    taxi: 'Official taxi from 200-300 MAD to Agadir beach area or city centre. One of the longer airport-to-city distances in Morocco.',
    bus: 'Limited bus service. Bus 22 runs from the airport but is infrequent and not tourist-friendly. Not recommended with luggage.',
    privateTransfer: 'From 300 MAD for a sedan. Many beach resorts in Taghazout (40 km) offer shuttle services from 400-600 MAD.',
    tips: 'Most package holiday hotels include airport transfers. If yours does not, book a private transfer in advance. Taxi touts are aggressive at Agadir airport; walk to the official rank.',
  },
  {
    airport: 'Rabat-Sale Airport (RBA)',
    distance: '10 km from central Rabat (20 minutes)',
    taxi: 'Official taxi from 150-200 MAD to central Rabat. Petit taxis (blue) are the standard option. Agree on the fare before departing.',
    bus: 'Stareo bus line connects the airport to Rabat city centre from 20 MAD. Runs hourly. The tramway stop is a short taxi ride from the airport.',
    privateTransfer: 'From 200 MAD for a sedan. Often combined with Casablanca drop-off from 500 MAD for travelers continuing south.',
    tips: 'A smaller, less chaotic airport. Taxis are generally more honest here. Consider the tram once you reach Rabat city as it connects major landmarks efficiently.',
  },
];

/* =====================================================================
   DATA: TRANSFER TYPE COMPARISON
   ===================================================================== */

const transferTypes = [
  {
    name: 'Official Airport Taxi',
    icon: Car,
    pros: [
      'Available immediately outside arrivals at all airports',
      'No advance booking needed',
      'Can negotiate fare or use meter',
      'Faster than buses, especially with luggage',
    ],
    cons: [
      'Overcharging risk if you do not agree on fare first',
      'Language barrier with some drivers',
      'Cannot always reach riad doorsteps in medinas',
      'Variable vehicle quality and air conditioning',
    ],
    price: 'From 100-400 MAD depending on airport and distance',
    best: 'Solo travelers and couples comfortable negotiating',
  },
  {
    name: 'Airport Bus / Train',
    icon: Bus,
    pros: [
      'Cheapest option by far (from 5-60 MAD)',
      'ONCF train at Casablanca is fast and reliable',
      'No negotiation or scam risk',
      'Good for budget backpackers with light luggage',
    ],
    cons: [
      'Limited routes and schedules at most airports',
      'Not practical with heavy suitcases',
      'Does not run late at night',
      'Drops you at a central stop, not your hotel door',
    ],
    price: 'From 5-60 MAD depending on airport and service',
    best: 'Budget travelers arriving during the day with light bags',
  },
  {
    name: 'Pre-Booked Private Transfer',
    icon: ShieldCheck,
    pros: [
      'Driver meets you in arrivals with name sign',
      'Fixed price agreed in advance, no surprises',
      'Door-to-door service including medina riads',
      'Modern, air-conditioned vehicles with space for luggage',
    ],
    cons: [
      'Most expensive option (from 200-600 MAD)',
      'Requires advance booking (at least 24 hours)',
      'Less flexibility if flight is delayed (though most include wait time)',
      'May feel unnecessary at smaller, calmer airports',
    ],
    price: 'From 200-600 MAD depending on airport, distance, and vehicle',
    best: 'First-time visitors, families, late-night arrivals, and anyone wanting zero hassle',
  },
];

/* =====================================================================
   DATA: BOOKING TIPS
   ===================================================================== */

const bookingTips = [
  {
    tip: 'Book through your riad or hotel',
    detail: 'Most accommodation in Morocco can arrange airport transfers, often at competitive rates. This is the easiest option and ensures someone trustworthy is waiting for you. Confirm the price and vehicle type in advance by email.',
    icon: Star,
  },
  {
    tip: 'Use reputable transfer platforms',
    detail: 'Services like GetTransfer, Welcome Pickups, and local operators found on Viator or GetYourGuide offer pre-paid, reviewed transfers with meet-and-greet service. Pay online to avoid cash confusion on arrival.',
    icon: Globe,
  },
  {
    tip: 'Share your flight details',
    detail: 'When booking, provide your flight number and arrival time. Good transfer services track your flight and adjust pickup time for delays. This saves you from waiting or paying extra if your flight is late.',
    icon: Plane,
  },
  {
    tip: 'Confirm the night before',
    detail: 'Send a quick WhatsApp message to your driver or transfer company the evening before your flight. Reconfirm the pickup time, meeting point, and your phone number. This small step prevents no-shows.',
    icon: Phone,
  },
  {
    tip: 'Have your accommodation address ready',
    detail: 'Save your riad or hotel address in Arabic and French on your phone. For medina riads, have the GPS coordinates or a well-known nearby landmark. Drivers may not know every small riad by name.',
    icon: MapPin,
  },
  {
    tip: 'Carry small bills for taxis',
    detail: 'Taxi drivers rarely have change for 200 MAD notes. Withdraw cash at the airport ATM and break large notes at the currency exchange or airport shop. Having exact change avoids the classic overcharging trick.',
    icon: Banknote,
  },
];

/* =====================================================================
   DATA: SCAM AVOIDANCE
   ===================================================================== */

const scamWarnings = [
  {
    scam: 'Unofficial touts inside the terminal',
    description: 'People in plain clothes approach you in the arrivals hall offering taxi rides. They are not official taxi drivers and will charge 2-3 times the real fare. They may wear lanyards or badges that look official but are not.',
    prevention: 'Walk past everyone inside the terminal. Only use the official taxi rank outside the building, where vehicles are marked and regulated. Official drivers never solicit inside the building.',
  },
  {
    scam: 'No meter, inflated fare',
    description: 'The driver claims the meter is broken or refuses to turn it on, then quotes an inflated price at the end of the ride. This is especially common at Marrakech and Agadir airports.',
    prevention: 'Agree on the total fare before getting in the car. Check the official price board at the airport. If the driver refuses, choose another taxi. Some airports have fixed-fare booths where you pay in advance.',
  },
  {
    scam: 'Wrong change trick',
    description: 'You hand over a 200 MAD note but the driver claims you gave 20 MAD, pocketing the difference. Happens most often at night when lighting is poor and you are tired from a long flight.',
    prevention: 'State the denomination clearly as you hand it over. Use exact change when possible. In dim lighting, use your phone flashlight to check notes. Withdraw small bills from the airport ATM.',
  },
  {
    scam: 'Detour to a shop or hotel',
    description: 'The driver takes you to a different hotel or a friend&apos;s shop claiming your riad is closed, full, or does not exist. They earn commission from the alternative place they bring you to.',
    prevention: 'Insist on your original destination. Have the address and phone number ready. Call your riad to confirm they are expecting you. Never accept a driver&apos;s claim that your accommodation has closed.',
  },
  {
    scam: 'Luggage held hostage',
    description: 'The driver puts your bags in the trunk, then demands an inflated fare knowing you cannot leave without your luggage. Particularly common with larger suitcases that you cannot grab quickly.',
    prevention: 'Keep carry-on bags with you in the back seat. Agree on the fare before luggage goes in the trunk. For private transfers, the price is pre-paid so this cannot happen.',
  },
  {
    scam: 'Fake shared taxi overcharge',
    description: 'A driver offers a shared grand taxi ride at a low per-person rate, then drives you alone and charges the full fare for all seats, claiming no other passengers showed up.',
    prevention: 'Only board grand taxis that already have other passengers waiting. If the taxi is empty, clarify whether you are paying per seat or per vehicle before departure.',
  },
  {
    scam: 'Unnecessary motorway toll charges',
    description: 'On the road from Casablanca or Agadir airports, drivers may claim motorway tolls are extra and charge an inflated amount on top of the agreed fare.',
    prevention: 'Ask whether tolls are included in the quoted price before departing. For pre-booked transfers, tolls are always included. Toll charges from Casablanca airport are typically 10-20 MAD.',
  },
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/morocco-airports-guide',
    title: 'Morocco Airports Guide',
    description: 'Terminal layouts, facilities, lounges, visa info, and practical tips for every Moroccan airport.',
    icon: Plane,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Complete overview of trains, buses, taxis, flights, and all transport options across Morocco.',
    icon: Compass,
  },
  {
    href: '/morocco-train-travel',
    title: 'Morocco Train Travel',
    description: 'ONCF routes, Al Boraq high-speed rail, ticket classes, timetables, and booking strategies.',
    icon: Navigation,
  },
  {
    href: '/morocco-trip-cost',
    title: 'Morocco Trip Cost Guide',
    description: 'Budget breakdown for transport, accommodation, food, and activities across Morocco.',
    icon: Wallet,
  },
  {
    href: '/scams',
    title: 'Morocco Scam Guide',
    description: 'Common tourist scams, how to recognize them, and practical strategies to stay safe.',
    icon: Shield,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoAirportTransfersPage() {
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
            <span className="text-white">Morocco Airport Transfers</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Plane className="w-4 h-4" />
            Airport Transfer Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Airport Transfers
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            How to get from every major Moroccan airport to your hotel. Taxi fares, bus routes,
            private transfers, booking tips, and scam avoidance for stress-free arrivals.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Getting From the Airport to Your Hotel in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Landing in Morocco is exciting, but navigating the airport transfer can be one of the most
                stressful parts of the trip &mdash; especially for first-time visitors. Every major Moroccan
                airport has its own quirks, from aggressive taxi touts at Marrakech Menara to the surprisingly
                efficient train link at Casablanca Mohammed V.
              </p>
              <p>
                This guide covers all six major international airports and breaks down every transfer option:
                official taxis, public buses, the Casablanca airport train, and pre-booked private transfers.
                You&apos;ll find real prices in Moroccan dirhams, honest comparisons, and the practical tips
                that guidebooks often leave out.
              </p>
              <p>
                Whether you&apos;re a budget backpacker catching the bus from Marrakech airport or a family
                booking a private sedan to your Fes riad, this guide ensures you start your Morocco trip
                with confidence rather than confusion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Airport Transfers at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about getting from Moroccan airports to city centres.
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

      {/* ── Airport-by-Airport Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Airport-by-Airport Transfer Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Detailed transfer options, prices, and tips for each major Moroccan airport.
          </p>

          <div className="space-y-8">
            {airportTransfers.map((airport) => (
              <div key={airport.airport} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">
                  {airport.airport}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-5">
                  <Clock className="w-4 h-4 inline-block mr-1" />
                  {airport.distance}
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Car className="w-4 h-4 text-[var(--color-accent)]" />
                      <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">Taxi</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{airport.taxi}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Bus className="w-4 h-4 text-[var(--color-accent)]" />
                      <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">Bus / Train</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{airport.bus}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                      <p className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-sm">Private Transfer</p>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{airport.privateTransfer}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[var(--color-accent)]/5 rounded-lg p-4">
                  <Lightbulb className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Local tip:</strong> {airport.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Prices may vary seasonally and are approximate. Always confirm current fares before travel.
          </p>
        </div>
      </section>

      {/* ── Taxi vs Bus vs Private Transfer ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Taxi vs Bus vs Private Transfer
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Compare the three main transfer options to choose the right one for your trip.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {transferTypes.map((tt) => {
              const TtIcon = tt.icon;
              return (
                <div key={tt.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TtIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tt.name}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-2">Pros</p>
                    <ul className="space-y-1.5">
                      {tt.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wide mb-2">Cons</p>
                    <ul className="space-y-1.5">
                      {tt.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CircleAlert className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-[var(--border-primary)] space-y-2">
                    <p className="text-sm text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Price:</strong> {tt.price}
                    </p>
                    <p className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--text-primary)]">Best for:</strong> {tt.best}
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
            How to arrange your airport transfer for a smooth, stress-free arrival in Morocco.
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

      {/* ── Scam Avoidance ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Airport Transfer Scams &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common tricks targeting tourists at Moroccan airports and practical strategies to stay safe.
          </p>

          <div className="space-y-5">
            {scamWarnings.map((sw) => (
              <div key={sw.scam} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CircleAlert className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {sw.scam}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3 ml-8">{sw.description}</p>
                <div className="flex items-start gap-3 ml-8 bg-green-50 dark:bg-green-950/20 rounded-lg p-3">
                  <Shield className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">How to avoid:</strong> {sw.prevention}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">The Simplest Way to Avoid All Scams</p>
                <p className="text-[var(--text-secondary)]">
                  Pre-book a private transfer through your hotel or a reputable platform. When someone is
                  waiting for you with a name sign and the price is already paid, none of these scams can
                  happen. The small premium over a taxi is worth the peace of mind, especially on your
                  first visit to Morocco.
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
            Practical Arrival Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Insider advice for making your airport arrival in Morocco as smooth as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Get Cash at the Airport',
                text: 'ATMs are available in all airport arrivals halls. Withdraw Moroccan dirhams before leaving the terminal. Airport exchange rates are fair. You will need cash for taxis, tips, and small purchases.',
                icon: Banknote,
              },
              {
                title: 'Buy a SIM Card',
                text: 'Maroc Telecom, Inwi, and Orange have kiosks at most airports. A tourist SIM with data costs from 30-50 MAD. Having mobile data lets you use maps, translation apps, and contact your driver.',
                icon: Phone,
              },
              {
                title: 'Screenshot Your Riad Address',
                text: 'Save your accommodation address, phone number, and directions in a screenshot or offline note. If your phone has no signal or battery, you can still show the driver where to go.',
                icon: MessageSquare,
              },
              {
                title: 'Allow Extra Time at Night',
                text: 'Late-night arrivals (after 22:00) have fewer transfer options. Buses stop running, the Casablanca airport train has a last departure around 22:00, and fewer taxis are available. Book a private transfer for late flights.',
                icon: Clock,
              },
              {
                title: 'Tip Appropriately',
                text: 'A 10-20 MAD tip for a taxi driver is appreciated but not required. For private transfer drivers who help with luggage, 20-30 MAD is generous. Porters at medina entrances expect 10-20 MAD per bag.',
                icon: Wallet,
              },
              {
                title: 'Know Your Terminal',
                text: 'Casablanca Mohammed V has two terminals. Confirm which one your flight arrives at before booking transfers. The train station connects to Terminal 1. Terminal 2 is a short shuttle ride away.',
                icon: Info,
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

      {/* ── Ride-Hailing Apps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Zap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Ride-Hailing Apps in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            App-based alternatives to traditional taxis for airport transfers.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Careem (by Uber)
              </h3>
              <ul className="space-y-2">
                {[
                  'Available in Casablanca, Rabat, and Marrakech',
                  'Fixed prices shown before you book, no negotiation needed',
                  'Pay by card or cash through the app',
                  'Driver ratings and vehicle details visible before pickup',
                  'Can schedule rides in advance for airport pickups',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                InDrive &amp; Other Apps
              </h3>
              <ul className="space-y-2">
                {[
                  'InDrive lets you propose your own fare, drivers accept or counter',
                  'Growing in popularity across Morocco in 2026',
                  'Heetch also operates in Casablanca and some cities',
                  'Download apps before arriving as airport Wi-Fi can be slow',
                  'Requires a local or international SIM with data to function',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">App Availability Warning</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Ride-hailing apps may not have drivers available at smaller airports like Fes-Saiss,
                  Agadir Al Massira, or Rabat-Sale, especially late at night. Do not rely solely on
                  apps for your airport transfer. Always have a backup plan: the official taxi rank or
                  a pre-booked private transfer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect on Arrival ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect When You Land
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A step-by-step walkthrough of the arrival process at Moroccan airports.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <ol className="space-y-5">
              {[
                {
                  step: 'Passport Control',
                  detail: 'Fill out the entry form on the plane or at the counter. Have your passport, return ticket, and hotel booking confirmation ready. Most nationalities get a 90-day visa-free stamp. Lines can take 20-45 minutes at busy airports like Marrakech.',
                },
                {
                  step: 'Baggage Claim',
                  detail: 'Collect your luggage from the carousel. Trolleys are usually free. If your bag is missing, report to the airline desk immediately with your baggage tag receipt before leaving the restricted area.',
                },
                {
                  step: 'Customs',
                  detail: 'Walk through the green channel if you have nothing to declare. Morocco allows duty-free import of personal items, 1 litre of alcohol, and 200 cigarettes. Declare items worth over 2,000 MAD.',
                },
                {
                  step: 'Arrivals Hall',
                  detail: 'You will exit into the public arrivals area. Here you will find ATMs, currency exchange, SIM card kiosks, and your pre-booked driver if applicable. Ignore anyone who approaches you with unsolicited offers.',
                },
                {
                  step: 'Find Your Transfer',
                  detail: 'For pre-booked transfers, look for your name on a sign. For taxis, exit the building and follow signs to the official taxi rank. For buses, look for posted schedules and designated stops outside the terminal.',
                },
              ].map((s, i) => (
                <li key={s.step} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {s.step}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{s.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
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
            Answers to the most common questions about Morocco airport transfers.
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
          <Plane className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Arrive in Morocco With Confidence
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            A smooth airport transfer sets the tone for your entire Morocco trip. Whether you choose
            a budget-friendly bus, an official taxi, or a pre-booked private ride, knowing your options
            in advance means less stress and more time enjoying this incredible country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-airports-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Plane className="w-5 h-5" />
              Airport Guide
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

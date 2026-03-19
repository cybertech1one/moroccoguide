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
  Car,
  Fuel,
  Info,
  Navigation,
  Timer,
  CreditCard,
  ShieldCheck,
  CircleAlert,
  Mountain,
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
  title: 'Morocco Road Trip Guide 2026 | Self-Drive Itineraries, Routes & Driving Tips',
  description:
    'Complete Morocco road trip guide for 2026. Car rental tips, driving rules, license requirements, fuel costs, toll roads, best road trip routes, mountain passes, desert driving, safety advice, and GPS navigation. Plan your Morocco self-drive adventure.',
  keywords: [
    'Morocco road trip',
    'driving in Morocco',
    'Morocco self-drive',
    'Morocco road trip itinerary',
    'Morocco car rental',
    'Morocco driving tips',
    'Morocco road conditions',
    'Morocco toll roads',
    'Morocco fuel prices',
    'Morocco mountain passes',
    'Morocco desert driving',
    'Morocco road trip routes',
    'Morocco driving license',
    'Morocco road safety',
    'Morocco GPS navigation',
    'Morocco road trip 2026',
    'Morocco self-drive holiday',
    'rent a car Morocco',
  ],
  openGraph: {
    title: 'Morocco Road Trip Guide 2026 | Self-Drive Itineraries, Routes & Driving Tips',
    description:
      'Plan the ultimate Morocco road trip. Car rentals, driving rules, best routes from coast to desert, mountain passes, fuel costs, and practical self-drive tips for 2026.',
    url: `${BASE_URL}/morocco-road-trip-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic Moroccan road winding through the Atlas Mountains with dramatic landscape views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Road Trip Guide 2026 | Self-Drive Routes & Tips',
    description:
      'Car rental tips, driving rules, best road trip routes, mountain passes, desert driving, and practical advice for a Morocco self-drive adventure.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-road-trip-guide` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-road-trip-guide`,
  name: 'Morocco Road Trip Guide 2026 | Self-Drive Itineraries, Routes & Driving Tips',
  description:
    'Comprehensive guide to road tripping in Morocco covering car rental, driving rules, license requirements, fuel costs, toll roads, best road trip routes, mountain passes, desert driving, parking, GPS navigation, and safety tips.',
  url: `${BASE_URL}/morocco-road-trip-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-road-trip-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Road Trip Guide', item: `${BASE_URL}/morocco-road-trip-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an international driving permit to drive in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, an International Driving Permit (IDP) is strongly recommended and often required alongside your home country license. While some rental agencies accept EU or US licenses alone, police checkpoints may ask for an IDP. Obtain one from your national automobile association before traveling. It must be accompanied by your original license at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a car in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car rental in Morocco starts from around 250 MAD per day for an economy car and from 500 MAD per day for an SUV or 4x4. Prices vary by season, with summer and holiday periods being more expensive. International agencies like Europcar and Hertz operate alongside local companies. Always check that insurance, mileage, and taxes are included in the quoted price.',
      },
    },
    {
      '@type': 'Question',
      name: 'What side of the road do you drive on in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco drives on the right side of the road, the same as continental Europe and the United States. Vehicles are left-hand drive. If you are from the UK, Australia, or another left-driving country, take extra care at roundabouts, intersections, and when overtaking. Roundabouts give priority to traffic already in the circle.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are the roads in Morocco safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Major highways and national roads in Morocco are generally well-maintained and safe. The motorway network (autoroutes) connecting Tangier, Rabat, Casablanca, Marrakech, and Agadir is modern with good signage. However, secondary rural roads can be narrow with sharp turns, especially in mountain areas. Avoid driving at night in rural zones due to unlit vehicles, livestock, and pedestrians on the road.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does fuel cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Fuel prices in Morocco are approximately 13 to 15 MAD per liter for gasoline (essence) and 11 to 13 MAD per liter for diesel (gasoil) as of 2026. Diesel is more common and cheaper. Fuel stations are plentiful along highways and in cities but can be sparse in remote areas like the Sahara fringes and deep Atlas valleys. Always fill up before heading into remote zones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive a rental car into the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard rental car agreements prohibit driving on unpaved desert tracks. To reach Sahara destinations like Merzouga or Erg Chebbi, the paved road from Errachidia is accessible in a regular car. However, if you plan off-road desert excursions, you need a 4x4 rental with explicit off-road permission. Some agencies offer specific Sahara packages. Always check your rental agreement for off-road restrictions.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there toll roads in Morocco and how do I pay?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has an extensive toll motorway (autoroute) network operated by ADM. Tolls are paid at booths using cash (MAD) or the Jawaz electronic tag. For example, the Casablanca to Marrakech toll costs approximately 70 MAD and Casablanca to Tangier about 150 MAD. Rental cars sometimes come with a Jawaz tag included. Motorways are well-maintained, have rest areas, and speed limits of 120 km/h.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a Morocco road trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months for a Morocco road trip are March to May and September to November. Spring offers wildflowers, green landscapes, and mild temperatures perfect for mountain passes. Autumn brings warm days and cool evenings ideal for desert routes. Summer (June-August) is extremely hot in the interior and Sahara region, while winter (December-February) can bring snow to Atlas Mountain passes, sometimes closing roads temporarily.',
      },
    },
  ],
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  {
    label: 'Motorway Network',
    value: '1,800+ km',
    detail: 'Modern toll highways connecting major cities',
    icon: Navigation,
  },
  {
    label: 'Fuel Cost',
    value: 'From 11 MAD/L',
    detail: 'Diesel is cheapest; fill up before remote areas',
    icon: Fuel,
  },
  {
    label: 'Car Rental',
    value: 'From 250 MAD/day',
    detail: 'Economy cars; 4x4s from 500 MAD/day',
    icon: Car,
  },
  {
    label: 'Speed Limit',
    value: '120 km/h max',
    detail: 'Motorways; 60 km/h in towns, 100 km/h national roads',
    icon: Zap,
  },
];

/* =====================================================================
   DATA: BEST ROAD TRIP ROUTES
   ===================================================================== */

const bestRoutes = [
  {
    name: 'Marrakech to Ouarzazate via Tizi n\'Tichka',
    distance: '200 km',
    duration: '4-5 hours',
    highlights: 'Atlas Mountains, Tizi n\'Tichka pass (2,260m), Ait Benhaddou kasbah, argan forests',
    difficulty: 'Moderate - winding mountain roads with sharp hairpin turns',
    bestTime: 'April to November (pass may close in heavy winter snow)',
  },
  {
    name: 'Ouarzazate to Merzouga (Route of a Thousand Kasbahs)',
    distance: '360 km',
    duration: '5-6 hours',
    highlights: 'Dades Valley, Todra Gorge, Tinghir oasis, Erfoud fossils, Erg Chebbi dunes',
    difficulty: 'Easy to moderate - mostly flat paved road through valleys',
    bestTime: 'October to April (summer temperatures exceed 45C in the desert)',
  },
  {
    name: 'Tangier to Chefchaouen',
    distance: '115 km',
    duration: '2-3 hours',
    highlights: 'Rif Mountains, lush valleys, the famous blue city, scenic mountain villages',
    difficulty: 'Easy - well-paved road with gentle mountain curves',
    bestTime: 'Year-round; spring is greenest, autumn has clear skies',
  },
  {
    name: 'Agadir to Essaouira (Coastal Route)',
    distance: '175 km',
    duration: '2.5-3 hours',
    highlights: 'Atlantic coast, argan cooperatives, Taghazout surf beach, fishing villages, wind-sculpted cliffs',
    difficulty: 'Easy - flat coastal highway with ocean panoramas',
    bestTime: 'Year-round; summer for beaches, winter for surfing',
  },
  {
    name: 'Fes to Ifrane to Azrou (Middle Atlas Loop)',
    distance: '130 km (round trip)',
    duration: '3-4 hours',
    highlights: 'Cedar forests, Barbary macaques, Ifrane "Little Switzerland", Azrou artisan crafts',
    difficulty: 'Easy - excellent road through alpine-like scenery',
    bestTime: 'Year-round; snow possible December to February',
  },
  {
    name: 'Casablanca to El Jadida to Oualidia',
    distance: '200 km',
    duration: '3-4 hours',
    highlights: 'Portuguese cistern, Oualidia lagoon, oyster farms, Atlantic beaches, Azemmour medina',
    difficulty: 'Easy - flat coastal road with minimal traffic',
    bestTime: 'April to October for swimming; year-round for oysters',
  },
  {
    name: 'Marrakech to Essaouira via Imi n\'Tanout',
    distance: '190 km',
    duration: '2.5-3 hours',
    highlights: 'Argan groves, Berber villages, wind-swept Atlantic arrival, Mogador island views',
    difficulty: 'Easy - straight highway with argan woodland scenery',
    bestTime: 'Year-round; spring for wildflowers along the road',
  },
];

/* =====================================================================
   DATA: CAR RENTAL TIPS
   ===================================================================== */

const carRentalTips = [
  {
    tip: 'Book through reputable agencies',
    detail: 'International chains like Europcar, Hertz, Sixt, and Avis have offices at major airports and cities. Local agencies like Medloc and Afrique Cars often offer lower prices. Compare on sites like DiscoverCars or rentalcars.com for the best deals.',
    icon: Globe,
  },
  {
    tip: 'Inspect the car thoroughly',
    detail: 'Take photos and video of every scratch, dent, and interior stain before leaving the lot. Ensure the agent documents existing damage on the rental agreement. Check tire condition, spare tire, and that the jack and warning triangle are present.',
    icon: CheckCircle,
  },
  {
    tip: 'Choose the right vehicle',
    detail: 'A standard sedan handles highways and most paved roads. For Atlas Mountain passes, Sahara approaches, or off-road tracks, rent a 4x4 SUV. Manual transmission is standard; automatic costs more and should be reserved in advance.',
    icon: Car,
  },
  {
    tip: 'Understand insurance options',
    detail: 'Basic CDW (Collision Damage Waiver) is usually included, but the excess can be high (from 5,000 to 15,000 MAD). Consider purchasing full coverage or Super CDW to reduce the excess to zero. Third-party liability insurance is mandatory in Morocco.',
    icon: Shield,
  },
  {
    tip: 'Check mileage limits',
    detail: 'Some rentals include unlimited mileage while others cap at 200-300 km per day with charges for overages. For a road trip covering long distances, always confirm unlimited kilometers are included in your rate.',
    icon: Navigation,
  },
  {
    tip: 'Airport vs city pickup',
    detail: 'Airport pickups are convenient but carry a surcharge of 10-15%. Picking up from a downtown office can save money. Confirm 24-hour return options if your flight departs early or arrives late.',
    icon: MapPin,
  },
];

/* =====================================================================
   DATA: DRIVING RULES
   ===================================================================== */

const drivingRules = [
  'Drive on the right side of the road; overtake on the left',
  'Speed limits: 60 km/h in towns, 80-100 km/h on national roads, 120 km/h on motorways',
  'Seatbelts are mandatory for all passengers; children under 10 must sit in the back',
  'Mobile phone use while driving is illegal; hands-free devices are permitted',
  'Blood alcohol limit is 0.02% (effectively zero tolerance); penalties include fines and vehicle impound',
  'Roundabouts give priority to vehicles already in the circle (yield on entry)',
  'Headlights must be on from dusk to dawn and in tunnels; daytime running lights are recommended',
  'Horn use is restricted in urban areas between 9 PM and 6 AM',
  'You must carry your license, IDP, passport, rental agreement, and insurance documents at all times',
  'Police checkpoints are common, especially near cities and at regional borders; always stop when flagged',
];

/* =====================================================================
   DATA: TOLL ROAD INFO
   ===================================================================== */

const tollRoutes = [
  { route: 'Casablanca to Rabat', distance: '90 km', toll: 'From 30 MAD' },
  { route: 'Casablanca to Marrakech', distance: '240 km', toll: 'From 70 MAD' },
  { route: 'Casablanca to Tangier', distance: '340 km', toll: 'From 150 MAD' },
  { route: 'Casablanca to Fes', distance: '300 km', toll: 'From 100 MAD' },
  { route: 'Casablanca to Agadir', distance: '460 km', toll: 'From 140 MAD' },
  { route: 'Marrakech to Agadir', distance: '250 km', toll: 'From 80 MAD' },
  { route: 'Rabat to Fes', distance: '210 km', toll: 'From 80 MAD' },
  { route: 'Tangier to Tetouan', distance: '65 km', toll: 'From 20 MAD' },
];

/* =====================================================================
   DATA: SAFETY TIPS
   ===================================================================== */

const safetyTips = [
  'Avoid driving at night in rural areas due to unlit vehicles, livestock, donkeys, and pedestrians on the road',
  'Mountain roads have steep drops with limited guardrails; drive slowly on hairpin turns and honk before blind bends',
  'Keep doors locked and windows up in cities; do not leave valuables visible in the car',
  'Carry a reflective vest, warning triangle, and fire extinguisher as required by Moroccan law',
  'In the Sahara fringe areas, bring extra water, a charged phone, and inform someone of your route',
  'Watch for speed bumps (dos d\'ane) at village entrances; they are often unmarked and severe',
  'Be cautious of motorcycles and scooters weaving through traffic in cities like Marrakech and Fes',
  'Pull over safely to take photos; stopping on mountain curves or narrow roads is extremely dangerous',
];

/* =====================================================================
   DATA: PARKING TIPS
   ===================================================================== */

const parkingTips = [
  {
    title: 'Gardien System',
    text: 'In most Moroccan cities, unofficial parking attendants (gardiens) in high-visibility vests watch your car. Pay 5-10 MAD for daytime parking and 10-20 MAD for overnight. This system is widely accepted and your car is generally safer when a gardien is present.',
    icon: Users,
  },
  {
    title: 'Hotel Parking',
    text: 'Most riads and hotels in medina areas do not have parking. They will direct you to a nearby guarded lot or garage. Budget from 30 to 50 MAD per night for secure garage parking near medinas in Marrakech, Fes, and other cities.',
    icon: MapPin,
  },
  {
    title: 'City Parking Zones',
    text: 'Blue-line zones in cities require a ticket from a machine or a horodateur receipt. Yellow curbs mean no parking. Green zones are typically free. In Casablanca and Rabat, parking apps are increasingly available for meter payment.',
    icon: Info,
  },
  {
    title: 'Avoid Medina Driving',
    text: 'Never attempt to drive into a medina. The narrow alleyways are pedestrian-only and you risk getting stuck. Park outside the medina walls at a designated lot and walk or take a petit taxi to your accommodation.',
    icon: AlertTriangle,
  },
];

/* =====================================================================
   DATA: GPS & NAVIGATION TIPS
   ===================================================================== */

const navigationTips = [
  'Download offline maps on Google Maps or Maps.me before your trip; cell coverage drops in rural Atlas and Sahara areas',
  'Waze works well in Morocco for real-time traffic and police checkpoint warnings in urban zones',
  'Road signs are in Arabic and French; motorway signs are green, national road signs are red',
  'GPS coordinates for kasbahs and remote destinations are more reliable than street addresses',
  'Buy a Moroccan SIM card (from 30 MAD with data) at the airport for live navigation; Maroc Telecom has the best rural coverage',
  'Carry a paper road map from a bookstore as a backup; the Michelin Morocco map is excellent for trip planning',
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/road-trips',
    title: 'Morocco Road Trips',
    description: 'Curated road trip itineraries from weekend getaways to epic cross-country drives across Morocco.',
    icon: Compass,
  },
  {
    href: '/driving',
    title: 'Driving in Morocco',
    description: 'Detailed rules of the road, license requirements, insurance, and tips for foreign drivers.',
    icon: Car,
  },
  {
    href: '/morocco-road-trip-routes',
    title: 'Morocco Road Trip Routes',
    description: 'Scenic routes through mountains, deserts, and coasts with detailed stop-by-stop guides.',
    icon: Navigation,
  },
  {
    href: '/transport',
    title: 'Morocco Transport Guide',
    description: 'Complete overview of all transport options including cars, trains, buses, taxis, and flights.',
    icon: Globe,
  },
  {
    href: '/morocco-trip-cost',
    title: 'Morocco Trip Cost Guide',
    description: 'Budgeting for your Morocco road trip including fuel, tolls, accommodation, food, and activities.',
    icon: Wallet,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoRoadTripGuidePage() {
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
            <span className="text-white">Morocco Road Trip Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Self-Drive Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Road Trip
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to plan a self-drive adventure across Morocco &mdash; car rentals,
            driving rules, scenic routes, mountain passes, desert roads, and practical tips for the open road.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Road Trip Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most rewarding countries in Africa &mdash; and indeed the world &mdash;
                for a road trip. Within a single day of driving you can traverse snow-capped Atlas Mountain
                passes, descend into palm-filled oasis valleys, cruise along windswept Atlantic coastline,
                and arrive at the golden dunes of the Sahara Desert.
              </p>
              <p>
                The country&apos;s modern motorway network connects the major cities quickly and safely,
                while a web of scenic national roads and mountain routes leads to hidden kasbahs, Berber
                villages, and landscapes that feel untouched by time. Self-driving gives you the freedom
                to stop wherever the view demands it, explore off-the-beaten-path towns, and set your
                own pace through one of the most diverse terrains on Earth.
              </p>
              <p>
                Whether you are planning a week-long loop from Marrakech through the Atlas and Sahara,
                a coastal cruise from Tangier to Essaouira, or a quick weekend escape to Chefchaouen,
                this guide covers every practical detail: renting a car, understanding the rules of the
                road, navigating toll highways, tackling mountain passes, and staying safe from the
                motorway to the desert track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Driving at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about road conditions, costs, and what to expect when driving across Morocco.
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

      {/* ── Car Rental Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CreditCard className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Car Rental Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to choose, book, and collect your rental car for a hassle-free Morocco road trip.
          </p>

          <div className="space-y-4">
            {carRentalTips.map((bt) => {
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

      {/* ── Driving Rules & License ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Driving Rules &amp; License Requirements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential rules of the road every visitor must know before driving in Morocco.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {drivingRules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">License Tip</p>
                <p className="text-[var(--text-secondary)]">
                  Get your International Driving Permit (IDP) before you leave home. In the US, AAA issues
                  them for about $20. In the UK, apply through the Post Office. The IDP is a translation of
                  your license and is valid for one year. Some rental agencies and police will not accept a
                  foreign license without an accompanying IDP.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fuel Costs ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fuel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fuel Costs &amp; Stations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect at the pump and how to budget for fuel across Morocco.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Fuel Prices (2026 Estimates)
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Gasoline (Essence/Sans Plomb)', value: 'From 13-15 MAD per liter' },
                  { label: 'Diesel (Gasoil)', value: 'From 11-13 MAD per liter' },
                  { label: 'Average Full Tank (50L)', value: 'From 550-750 MAD' },
                  { label: 'Marrakech to Ouarzazate Trip', value: 'Approx. 200-250 MAD in fuel' },
                  { label: 'Full Morocco Loop (2,500 km)', value: 'Approx. 2,000-2,800 MAD total fuel' },
                ].map((spec) => (
                  <li key={spec.label} className="flex items-start gap-3">
                    <Banknote className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">{spec.label}:</strong> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-4">
                Fuel prices may change seasonally. Prices are approximate for 2026.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Station Tips
              </h3>
              <ul className="space-y-3">
                {[
                  'Major brands include Afriquia, Shell, and TotalEnergies with stations every 30-50 km on highways',
                  'Most stations accept cash (MAD) only; a few in cities take credit cards',
                  'Attendants pump fuel for you at most stations; a tip of 2-5 MAD is appreciated',
                  'Stations in remote Atlas and desert areas may close early; fill up by noon in isolated zones',
                  'Diesel is the default fuel for most Moroccan cars; double-check your rental car fuel type before filling',
                  'Rest areas on motorways have fuel, toilets, cafes, and sometimes prayer rooms',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Toll Roads ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Toll Roads &amp; Motorways
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s autoroute network is modern, safe, and well-maintained. Here are the key tolls.
          </p>

          <div className="card-moroccan p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Distance</th>
                    <th className="text-left py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Toll</th>
                  </tr>
                </thead>
                <tbody>
                  {tollRoutes.map((tr) => (
                    <tr key={tr.route} className="border-b border-[var(--border-primary)] last:border-0">
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{tr.route}</td>
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{tr.distance}</td>
                      <td className="py-3 font-semibold text-[var(--color-accent)]">{tr.toll}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4">
              Tolls are paid at booths with cash (MAD) or Jawaz electronic tag. Seasonal pricing may apply.
            </p>
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Jawaz Tag Tip</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  The Jawaz electronic toll tag lets you pass through toll booths without stopping. Some
                  rental cars come with one pre-installed. If not, you can purchase a tag at any motorway
                  toll station. Load it with credit and it deducts tolls automatically. This saves significant
                  time on long trips, especially during holiday traffic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Road Trip Routes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Road Trip Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Seven unforgettable drives across Morocco &mdash; from coastal highways to mountain passes and desert roads.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {bestRoutes.map((r) => (
              <div key={r.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {r.name}
                </h3>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Distance:</strong> {r.distance}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Duration:</strong> {r.duration}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Highlights:</strong> {r.highlights}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Mountain className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Difficulty:</strong> {r.difficulty}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--color-accent)] font-medium">Best time: {r.bestTime}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8">
            Road conditions and travel times may vary seasonally. Always check current conditions before departure.
          </p>
        </div>
      </section>

      {/* ── Mountain Passes & Desert Driving ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mountain Passes &amp; Desert Driving
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Special considerations for Morocco&apos;s most dramatic driving terrain.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Atlas Mountain Passes
              </h3>
              <ul className="space-y-3">
                {[
                  'Tizi n\'Tichka (2,260m): The highest paved pass, linking Marrakech to Ouarzazate with stunning hairpin curves',
                  'Tizi n\'Test (2,092m): A narrower, more dramatic route south of Marrakech through the western High Atlas',
                  'Tizi n\'Talrhemt (1,907m): On the road from Beni Mellal to Azilal, offering panoramic views of the High Atlas',
                  'Snow chains may be required December through February; check conditions before crossing in winter',
                  'Start mountain drives early in the morning for the best visibility and to avoid afternoon fog',
                  'Use low gear on descents to save your brakes; mountain roads are steep and winding',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Desert &amp; Off-Road Driving
              </h3>
              <ul className="space-y-3">
                {[
                  'The paved road reaches Merzouga and Erg Chebbi; a regular car handles this route fine',
                  'Off-road desert tracks require a 4x4 with high clearance and explicit rental permission',
                  'Reduce tire pressure slightly on sand for better traction; re-inflate when back on tarmac',
                  'Carry at least 5 liters of extra water, sun protection, and a fully charged phone',
                  'Sandstorms can reduce visibility to near zero; pull over, turn off the engine, and wait it out',
                  'Never drive alone into the deep desert without GPS, recovery gear, and a planned route shared with others',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Winter Mountain Warning</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Atlas Mountain passes can close temporarily during heavy snowfall between December and
                  February. The Tizi n&apos;Tichka and Tizi n&apos;Test passes are most affected. Check with
                  local authorities or your hotel before attempting a winter crossing. Snow chains are sold
                  at roadside vendors near the pass entrances from around 200 MAD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parking Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Parking in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to park safely and affordably across Moroccan cities and towns.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {parkingTips.map((tip) => {
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

      {/* ── GPS & Navigation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            GPS &amp; Navigation Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to navigate Morocco&apos;s roads confidently with the right tools and preparation.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {navigationTips.map((tip) => (
                <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Safety on the Road ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Road Safety Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Stay safe on Moroccan roads with these essential driving safety guidelines.
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

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <CircleAlert className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Emergency Numbers</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Police: 19 | Gendarmerie (rural): 177 | Ambulance: 15 | Fire: 15 |
                  Highway assistance (ADM): 5050. Save these numbers in your phone before your trip.
                  In case of an accident, do not move the vehicles until police arrive and file an
                  official report (constat amiable) for insurance purposes.
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
            Answers to the most common questions about road tripping and driving in Morocco.
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
            Related Road Trip Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco driving adventure with these detailed guides.
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
          <Car className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco&apos;s diverse landscapes make it one of the world&apos;s greatest road trip destinations.
            From the Atlantic coast to the Sahara, from bustling medinas to silent mountain passes, every
            kilometer reveals something new. Rent a car, plan your route, and discover Morocco at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Explore Road Trip Routes
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Globe className="w-5 h-5" />
              All Transport Options
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

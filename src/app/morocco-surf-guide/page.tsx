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
  Award,
  Globe,
  Mountain,
  Waves,
  Wind,
  Sun,
  Compass,
  Calendar,
  Thermometer,
  Anchor,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Surfing Morocco 2026 | Best Surf Spots, Camps & Beginner Guide',
  description:
    'Complete guide to surfing in Morocco. Best surf spots in Taghazout, Imsouane, Essaouira, Sidi Kaouki, Anchor Point, and Dakhla. Surf camp prices, wetsuit advice, beginner tips, equipment rental, and kitesurfing info.',
  keywords: [
    'surfing morocco',
    'best surf spots morocco',
    'taghazout surf',
    'morocco surf camp',
    'surf morocco beginners',
    'imsouane surf',
    'anchor point morocco',
    'killer point morocco',
    'dakhla kitesurfing',
    'essaouira surf',
    'sidi kaouki surf',
    'morocco surf season',
    'surf school morocco',
    'surf equipment rental morocco',
    'taghazout surf camp',
    'morocco wave guide',
    'beginner surf morocco',
    'morocco surf accommodation',
    'kitesurfing dakhla',
    'morocco water temperature',
  ],
  openGraph: {
    title: 'Surfing Morocco 2026 | Best Surf Spots, Camps & Beginner Guide',
    description:
      'Find the best waves in Morocco. Taghazout, Imsouane, Anchor Point, Dakhla, and more. Surf camps from 3,500 MAD/week, equipment rental, and seasonal wave forecasts.',
    url: `${BASE_URL}/morocco-surf-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-surfing.webp`,
        width: 1200,
        height: 630,
        alt: 'Surfer riding a wave at Taghazout with the Moroccan coastline in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surfing Morocco 2026 | Best Surf Spots & Camps',
    description:
      'Complete surf guide to Morocco. Top breaks from Taghazout to Dakhla, camp prices, wetsuit advice, and beginner-friendly spots.',
    images: [`${BASE_URL}/images/hero-surfing.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-surf-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-surf-guide`,
  name: 'Surfing Morocco 2026 | Best Surf Spots, Camps & Beginner Guide',
  description:
    'Complete guide to surfing in Morocco. Best surf spots, surf camps with prices, wetsuit advice, beginner tips, equipment rental, and kitesurfing info for Taghazout, Imsouane, Essaouira, and Dakhla.',
  url: `${BASE_URL}/morocco-surf-guide`,
  image: `${BASE_URL}/images/hero-surfing.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-surf-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Surfing Morocco', item: `${BASE_URL}/morocco-surf-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to surf in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The prime surf season runs from September through April. Winter months (December-February) deliver the biggest swells, with waves reaching 2-4 meters at exposed breaks like Anchor Point and Killer Point. September-November and March-April offer cleaner conditions with smaller 1-2 meter swells, ideal for intermediate surfers and beginners. Summer (June-August) is flat on the Atlantic coast but good for kitesurfing in Dakhla and Essaouira.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco good for beginner surfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is excellent for beginners. Spots like Taghazout Beach, Imsouane Bay, Sidi Kaouki, and Essaouira Moulay Bouzerktoune offer gentle, forgiving waves that break over sand. Dozens of surf schools operate in these areas with lessons starting from 350 MAD for a two-hour group session including board and wetsuit. The long, slow-rolling wave at Imsouane Bay is often called the longest wave in Africa and is perfect for learning longboarding.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a surf camp cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surf camp packages in Morocco start from 3,500 MAD per week (around 350 USD) for basic shared accommodation with daily surf guiding. Mid-range camps with private rooms, daily lessons, yoga, and meals run from 5,500 MAD to 8,000 MAD per week. Premium camps with ocean-view rooms, video analysis, and airport transfers cost from 10,000 MAD per week. Most camps include board rental, wetsuit, and transport to surf spots.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a wetsuit to surf in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a wetsuit is recommended year-round. Water temperature ranges from 16°C in January to 22°C in September. A 3/2mm fullsuit covers October through May. In summer (June-September), a 2mm shorty or spring suit works for most people. Many surf camps include wetsuit rental, or you can rent one locally from 50-80 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best surf spot for experienced surfers in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anchor Point near Taghazout is Morocco\'s most famous expert wave: a long, hollow right-hand point break that barrels over a shallow reef. On a solid northwest swell, rides of 200-300 meters are possible. Killer Point, just north, produces powerful, fast rights that break over rock. Boilers, at the base of a cliff, delivers heavy barrels. The Dakhla peninsula offers world-class point breaks for experienced surfers who want uncrowded lineups.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I rent surf equipment in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Surf equipment is widely available for rent in Taghazout, Essaouira, Imsouane, and Sidi Kaouki. Softboard rental starts from 100 MAD per day, hardboards from 150 MAD per day, and wetsuits from 50 MAD per day. Most surf shops also sell wax, leashes, and fins. Board repair services are available in Taghazout and Essaouira. For multi-week rentals, negotiate a weekly rate and expect 30-40% off the daily price.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is kitesurfing good in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is a world-class kitesurfing destination. Dakhla, in the southern Sahara region, has 300+ wind days per year with consistent 18-25 knot trade winds and a massive flat-water lagoon. Essaouira is known as the "Wind City of Africa" with strong afternoon thermals from April to September. Moulay Bouzerktoune near Essaouira combines wave kitesurfing with flat-water spots. Kite equipment rental starts from 500 MAD per day in Dakhla.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Taghazout from Agadir airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taghazout is 19 km north of Agadir. A grand taxi from Agadir airport costs from 200-300 MAD (negotiate before boarding). Many surf camps offer airport transfers for from 150-250 MAD. The local bus from Agadir Souk El Had station costs 7 MAD but does not go directly to the airport. Alternatively, ride-hailing apps like inDrive operate in Agadir and charge from 150-200 MAD for the airport-to-Taghazout trip.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP SURF SPOTS
   ═══════════════════════════════════════════════════════════════ */

const surfSpots = [
  {
    name: 'Anchor Point',
    location: 'Taghazout',
    icon: Anchor,
    level: 'Advanced',
    waveType: 'Right-hand point break over reef',
    waveSize: '1.5 - 4m',
    bestSeason: 'October - March',
    description:
      'Morocco\'s crown jewel. A long, hollow right-hand point break that peels for 200-300 meters on a solid northwest swell. The takeoff is steep and fast, and the inside section can barrel over shallow rock. Needs a 1.5m+ swell to start working. Gets crowded when it\'s on, so paddle out early. Located just north of Taghazout village, accessible by a 15-minute walk from the main road.',
    bottom: 'Rock / Reef',
  },
  {
    name: 'Killer Point',
    location: 'North of Taghazout',
    icon: Mountain,
    level: 'Advanced',
    waveType: 'Right-hand point break over rock',
    waveSize: '1.5 - 5m',
    bestSeason: 'November - February',
    description:
      'A powerful, fast right that breaks along a cliff face. Named after the orcas once spotted offshore. Handles big swells better than Anchor Point and stays cleaner in strong winds. The paddle out goes through a channel next to the cliff. Not for the faint-hearted: heavy wipeouts push surfers toward rocks. Best on a solid 2m+ northwest swell with light east winds.',
    bottom: 'Rock / Boulder',
  },
  {
    name: 'Imsouane Bay',
    location: 'Imsouane',
    icon: Waves,
    level: 'Beginner / Longboard',
    waveType: 'Slow right-hand point break',
    waveSize: '0.5 - 2m',
    bestSeason: 'September - April',
    description:
      'A crescent-shaped bay that produces what many call the longest rideable wave in Africa. On a good day, rides extend 600+ meters on a gentle, peeling right-hander perfect for longboarding and learning. The wave breaks slow and forgiving over sand and rock. The bay also protects from wind, making it surfable when other spots are blown out. The fishing village has a laid-back atmosphere with cheap tagines and fresh seafood.',
    bottom: 'Sand / Rock',
  },
  {
    name: 'Imsouane Cathedral',
    location: 'Imsouane',
    icon: Sparkles,
    level: 'Intermediate / Advanced',
    waveType: 'Hollow right-hand reef break',
    waveSize: '1 - 3m',
    bestSeason: 'October - March',
    description:
      'On the opposite side of the Imsouane headland from the bay, Cathedral delivers faster, more powerful waves. A hollow right breaks over a rocky shelf with barrel sections on bigger swells. The cliff backdrop creates a natural amphitheater. Handles up to 3m before closing out. Much less crowded than the bay side.',
    bottom: 'Rock / Reef',
  },
  {
    name: 'Taghazout Beach (Panoramas)',
    location: 'Taghazout',
    icon: Sun,
    level: 'Beginner / Intermediate',
    waveType: 'Beach break',
    waveSize: '0.5 - 1.5m',
    bestSeason: 'September - May',
    description:
      'The main beach in front of Taghazout village. Multiple peaks break over sand, making it forgiving for beginners and fun for intermediate surfers on smaller days. All the surf schools operate here. Walk-in access from the village, with cafes and board rental shops right on the sand. Can get crowded mid-morning when schools arrive.',
    bottom: 'Sand',
  },
  {
    name: 'Sidi Kaouki',
    location: '25 km south of Essaouira',
    icon: Wind,
    level: 'Beginner / Intermediate',
    waveType: 'Beach break',
    waveSize: '0.5 - 2m',
    bestSeason: 'October - April',
    description:
      'A long, open beach with consistent waves and fewer crowds than Taghazout. The exposed position picks up every swell, but afternoons get windy. Mornings offer glassy conditions from 7-11am. A handful of guesthouses and surf camps line the beach. Also popular for horse and camel rides. The village has a mellow, off-grid vibe that draws long-stay surfers and yoga retreaters.',
    bottom: 'Sand',
  },
  {
    name: 'Essaouira (Moulay Bouzerktoune)',
    location: 'Essaouira region',
    icon: Wind,
    level: 'Intermediate / Kitesurfing',
    waveType: 'Beach and reef breaks',
    waveSize: '0.5 - 2.5m',
    bestSeason: 'Surf: Oct-Apr / Kite: Apr-Sep',
    description:
      'Moulay Bouzerktoune, 20 km north of Essaouira, has a right-hand point break and a beach break. The point works on north swells and can hold up to 2.5m. Essaouira\'s main beach is too windy for surfing most days but ranks among the world\'s best kitesurfing spots. Consistent 20-30 knot winds blow from April through September. Multiple kite schools charge from 500 MAD per two-hour lesson.',
    bottom: 'Sand / Reef',
  },
  {
    name: 'Dakhla',
    location: 'Western Sahara region',
    icon: Compass,
    level: 'Intermediate / Kitesurfing',
    waveType: 'Point breaks + flat-water lagoon',
    waveSize: 'Surf: 1-3m / Lagoon: flat',
    bestSeason: 'Year-round (wind); Surf: Oct-Mar',
    description:
      'A remote peninsula 1,200 km south of Agadir surrounded by desert and Atlantic Ocean. The 40 km Dakhla lagoon has butter-flat water with 300+ wind days per year at 18-25 knots, making it a global top-three kitesurfing destination. Outside the lagoon, uncrowded point breaks fire on northwest swells. The speed sailing record for Morocco was set here. Flights from Casablanca take 2.5 hours.',
    bottom: 'Sand / Rock',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SURF CAMPS
   ═══════════════════════════════════════════════════════════════ */

const surfCamps = [
  {
    tier: 'Budget',
    icon: DollarSign,
    price: 'From 3,500 MAD / week',
    includes: 'Shared dorm, daily surf guiding, board & wetsuit',
    locations: 'Taghazout, Imsouane, Sidi Kaouki',
    description:
      'Shared rooms with 4-6 beds, communal kitchen, rooftop terrace. Daily transport to the best break of the day. Board and wetsuit included. Breakfast usually provided; lunch and dinner on your own. Good for solo travelers and social surfers who want to keep costs down.',
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    price: 'From 5,500 MAD / week',
    includes: 'Private/twin room, daily lessons, yoga, half-board meals',
    locations: 'Taghazout, Tamraght, Imsouane',
    description:
      'Private or shared twin rooms. Daily two-hour surf lessons with certified ISA instructors, morning yoga sessions, and half-board meals (breakfast + dinner). Video analysis at most camps. Some include sunset excursions to Paradise Valley or Agadir souk trips.',
  },
  {
    tier: 'Premium',
    icon: Award,
    price: 'From 10,000 MAD / week',
    includes: 'Ocean-view suite, private coaching, full board, airport transfer',
    locations: 'Taghazout, Banana Point area',
    description:
      'Boutique riad-style accommodation with pool, ocean views, and private terraces. One-on-one coaching, video feedback, and customized surf plans. Full-board meals with locally sourced organic food. Airport pickup from Agadir included. Some premium camps limit groups to 8-10 guests for an uncrowded experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WATER TEMPERATURE
   ═══════════════════════════════════════════════════════════════ */

const waterTemp = [
  { month: 'Jan', temp: '16°C', wetsuit: '4/3mm fullsuit' },
  { month: 'Feb', temp: '16°C', wetsuit: '4/3mm fullsuit' },
  { month: 'Mar', temp: '17°C', wetsuit: '3/2mm fullsuit' },
  { month: 'Apr', temp: '17°C', wetsuit: '3/2mm fullsuit' },
  { month: 'May', temp: '18°C', wetsuit: '3/2mm fullsuit' },
  { month: 'Jun', temp: '19°C', wetsuit: '3/2mm or spring suit' },
  { month: 'Jul', temp: '20°C', wetsuit: '2mm shorty' },
  { month: 'Aug', temp: '21°C', wetsuit: '2mm shorty' },
  { month: 'Sep', temp: '22°C', wetsuit: '2mm shorty' },
  { month: 'Oct', temp: '21°C', wetsuit: '3/2mm fullsuit' },
  { month: 'Nov', temp: '19°C', wetsuit: '3/2mm fullsuit' },
  { month: 'Dec', temp: '17°C', wetsuit: '3/2mm fullsuit' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EQUIPMENT RENTAL PRICES
   ═══════════════════════════════════════════════════════════════ */

const rentalPrices = [
  { item: 'Softboard (foam)', daily: 'From 100 MAD', weekly: 'From 500 MAD' },
  { item: 'Hardboard (shortboard)', daily: 'From 150 MAD', weekly: 'From 700 MAD' },
  { item: 'Longboard (9ft+)', daily: 'From 200 MAD', weekly: 'From 900 MAD' },
  { item: 'Wetsuit (3/2mm)', daily: 'From 50 MAD', weekly: 'From 250 MAD' },
  { item: 'Kite equipment (full)', daily: 'From 500 MAD', weekly: 'From 2,500 MAD' },
  { item: 'Bodyboard', daily: 'From 60 MAD', weekly: 'From 300 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSurfGuidePage() {
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
            backgroundImage: 'url(/images/hero-surfing.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Surfing Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Surf &amp; Ocean Sports
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Surfing Morocco:
            <br className="hidden md:block" /> Best Waves, Camps &amp; Spots
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            1,835 km of Atlantic coastline. World-class point breaks. Year-round surf.
            From the long rollers of Imsouane to the barrels of Anchor Point, Morocco delivers.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Surfers Keep Coming Back to Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits in the path of every North Atlantic swell that rolls south from Iceland and the British Isles.
                The coastline faces west-northwest, catching energy from storms thousands of kilometers away and
                channeling it into reef breaks, point breaks, and sandy beach breaks that work at every tide.
                Add 300+ days of sunshine, water warm enough for a 3/2mm wetsuit, tagine dinners for 40 MAD,
                and surf camps starting from 3,500 MAD per week, and you start to understand why the
                Taghazout-to-Imsouane corridor has become one of the most popular surf destinations on the planet.
              </p>
              <p>
                The surf scene here took off in the 1970s when traveling Australian and European surfers discovered
                Anchor Point. By the 2000s, Taghazout had exploded with camps, schools, and cafes. Today, the coast
                from Safi south to Sidi Ifni holds over 50 named breaks. Further south, the Dakhla peninsula sits
                at the edge of the Sahara with uncrowded waves and some of the most consistent kite winds on Earth.
                This guide covers every spot, season, camp tier, and piece of gear you need to plan a Morocco surf trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Surf Season Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Seasons in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has waves year-round, but swell size and consistency shift with the seasons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                Peak Season: December - February
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                North Atlantic storms send consistent 2-4 meter swells down the coast. Anchor Point, Killer Point,
                and Boilers fire regularly. Water drops to 16°C (pack a 4/3mm). Taghazout gets busy with European surfers
                escaping winter. Book camps at least a month ahead. Expect 15-20 surfable days per month.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Waves className="w-3.5 h-3.5" />
                <span>Best for: Advanced surfers chasing big swells</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--color-gold)]" />
                Shoulder Season: Sep-Nov &amp; Mar-Apr
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Cleaner swells in the 1-2 meter range. Lighter winds mean glassy mornings. Water temperature sits
                between 17-22°C. Fewer crowds, lower camp prices. Imsouane Bay, Taghazout Beach, and Sidi Kaouki
                produce fun, manageable waves for intermediates and beginners. September and October are the sweet spot
                for warm water and consistent surf.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Waves className="w-3.5 h-3.5" />
                <span>Best for: Intermediates & beginners, best value for money</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Wind className="w-5 h-5 text-[var(--color-gold)]" />
                Summer: June - August
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Flat on the Atlantic coast. Swells drop below 0.5 meters most days. Not worth visiting for surfing
                unless you combine it with kitesurfing in Essaouira or Dakhla, where 20-30 knot winds blow daily.
                Water warms to 20-22°C. If you must surf in summer, Imsouane Bay occasionally picks up small
                south swells that other spots miss.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Wind className="w-3.5 h-3.5" />
                <span>Best for: Kitesurfing and windsurfing</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[var(--color-gold)]" />
                Dakhla: Year-Round
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Dakhla operates on different rules. The trade winds blow 300+ days per year at 18-25 knots, making
                it Africa&apos;s best kitesurfing spot. The lagoon stays flat regardless of ocean swell. For wave surfers,
                the outer peninsula breaks from October through March on northwest swells. Air temperature stays
                between 20-30°C year-round.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Compass className="w-3.5 h-3.5" />
                <span>Best for: Kitesurfers, intermediate wave surfers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Surf Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Surf Spots in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From heavy reef breaks to mellow longboard waves, Morocco has a spot for every level.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {surfSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <spot.icon className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {spot.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {spot.location}
                    </p>
                  </div>
                  <span className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full ${
                    spot.level.includes('Advanced')
                      ? 'bg-red-100 text-red-700'
                      : spot.level.includes('Intermediate')
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-green-100 text-green-700'
                  }`}>
                    {spot.level}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{spot.description}</p>
                <div className="grid grid-cols-2 gap-3 text-xs text-[var(--text-muted)]">
                  <div className="flex items-center gap-1.5">
                    <Waves className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>{spot.waveType}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mountain className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>Size: {spot.waveSize}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>{spot.bestSeason}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Info className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    <span>Bottom: {spot.bottom}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surf Camps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Camps in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dozens of camps operate between Taghazout and Imsouane. Here is what each tier gets you. Seasonal pricing can change.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {surfCamps.map((camp) => (
              <div key={camp.tier} className="card-moroccan p-6 flex flex-col">
                <camp.icon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {camp.tier}
                </h3>
                <p className="text-sm font-semibold text-[var(--color-accent)] mb-3">{camp.price}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-4 flex-grow">{camp.description}</p>
                <div className="space-y-2 text-xs text-[var(--text-muted)] border-t border-[var(--border-primary)] pt-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span>{camp.includes}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span>{camp.locations}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Water Temperature & Wetsuit Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Temperature &amp; Wetsuit Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Canary Current keeps Morocco&apos;s Atlantic coast cooler than you might expect for Africa. Pack the right rubber.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 md:grid-cols-12 gap-0">
              {waterTemp.map((m) => (
                <div key={m.month} className="p-3 text-center border-b border-r border-[var(--border-primary)] last:border-r-0">
                  <p className="text-xs font-bold text-[var(--text-primary)]">{m.month}</p>
                  <p className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">{m.temp}</p>
                  <p className="text-[10px] text-[var(--text-muted)] leading-tight mt-1">{m.wetsuit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                Winter Kit (Oct - May)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A 3/2mm fullsuit handles most of the season. For January and February, bring a 4/3mm if you run cold.
                Boots (2mm) are worth packing for rocky entries at Anchor Point and Killer Point. Reef booties also
                protect against sea urchins in the shallows.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                Summer Kit (Jun - Sep)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A 2mm shorty or spring suit works from June through September. Some surfers trunk it in August
                and September when water reaches 21-22°C. Rashguard recommended for sun protection
                during long sessions. SPF 50 reef-safe sunscreen is essential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment Rental ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Equipment Rental Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Rental shops line the main strips of Taghazout, Imsouane, and Essaouira. Seasonal pricing can change.
          </p>
          <div className="card-moroccan overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--surface-muted)]">
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Equipment</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Daily Rate</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Weekly Rate</th>
                </tr>
              </thead>
              <tbody>
                {rentalPrices.map((r) => (
                  <tr key={r.item} className="border-t border-[var(--border-primary)]">
                    <td className="p-3 text-[var(--text-secondary)]">{r.item}</td>
                    <td className="p-3 text-[var(--text-primary)] font-medium">{r.daily}</td>
                    <td className="p-3 text-[var(--text-primary)] font-medium">{r.weekly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex items-start gap-2 text-sm text-[var(--text-muted)]">
            <Info className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-accent)]" />
            <p>
              Multi-week rentals typically get 30-40% off the daily rate. Board repair services are available in
              Taghazout (from 50 MAD for ding repair) and Essaouira. Bringing your own board? Surfboard bags fly
              free or cheap on Royal Air Maroc and Ryanair from Europe.
            </p>
          </div>
        </div>
      </section>

      {/* ── Beginner vs Advanced Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beginner vs Advanced: Where to Surf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                Beginner Spots
              </h3>
              <div className="space-y-3">
                {[
                  { spot: 'Imsouane Bay', detail: 'Africa\'s longest wave. Gentle, rolling rights over sand. Rides up to 600m on good days.' },
                  { spot: 'Taghazout Beach', detail: 'Sandy beach break right in front of the village. Dozens of surf schools. Waves 0.5-1.5m.' },
                  { spot: 'Sidi Kaouki', detail: 'Open beach, fewer people, consistent whitewater. Glassy mornings before the wind arrives at noon.' },
                  { spot: 'Essaouira Beach', detail: 'Small waves, sandy bottom, warm-up spot before heading to Moulay Bouz. Good for absolute first-timers.' },
                ].map((b) => (
                  <div key={b.spot} className="flex items-start gap-2">
                    <Waves className="w-4 h-4 mt-0.5 shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{b.spot}</p>
                      <p className="text-xs text-[var(--text-muted)]">{b.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-green-50 text-xs text-green-800">
                <strong>Lesson price:</strong> From 350 MAD for a 2-hour group session (board + wetsuit included).
                Private lessons from 600 MAD per hour.
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-red-600" />
                Advanced Spots
              </h3>
              <div className="space-y-3">
                {[
                  { spot: 'Anchor Point', detail: 'Long, hollow right over reef. 200-300m rides. Needs 1.5m+ swell. The benchmark Moroccan wave.' },
                  { spot: 'Killer Point', detail: 'Heavy, fast rights next to a cliff. Holds big swells up to 5m. Paddle out through a rock channel.' },
                  { spot: 'Boilers', detail: 'Short, intense barrel at the base of a cliff. Named for the shipwreck boiler visible at low tide.' },
                  { spot: 'Dakhla Points', detail: 'Remote reef and point breaks south of the lagoon. Uncrowded, powerful, and raw. Bring your own supplies.' },
                ].map((a) => (
                  <div key={a.spot} className="flex items-start gap-2">
                    <Waves className="w-4 h-4 mt-0.5 shrink-0 text-red-600" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{a.spot}</p>
                      <p className="text-xs text-[var(--text-muted)]">{a.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 rounded-lg bg-red-50 text-xs text-red-800">
                <strong>Safety:</strong> Reef breaks are sharp. Carry a first-aid kit. Know the channels. Never surf
                Anchor Point or Killer Point alone, and check conditions with locals before paddling out.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Surf Culture & Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Culture &amp; Lineup Etiquette
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Respect the Locals',
                icon: Heart,
                text: 'Moroccan surfers have priority at their home breaks. Taghazout locals charge Anchor Point and Killer Point daily. Don\'t paddle straight to the peak on your first session. Sit wide, watch the lineup, take the wider sets, and earn your spot.',
              },
              {
                title: 'Don\'t Drop In',
                icon: ShieldCheck,
                text: 'The person closest to the breaking part of the wave has right of way. At point breaks like Anchor Point, the priority system is strict. Dropping in (taking off on someone else\'s wave) will get you called out fast.',
              },
              {
                title: 'Keep Beaches Clean',
                icon: Sparkles,
                text: 'Morocco\'s surf communities are fighting a plastic waste problem. Pick up trash after your session. Several Taghazout organizations run weekly beach cleanups. Join one and meet locals.',
              },
              {
                title: 'Respect Ramadan',
                icon: Calendar,
                text: 'During Ramadan, eating, drinking, and smoking in public during daylight hours is disrespectful. Surf camps still operate, but be discreet about snacking between sessions. Restaurant hours shift to evening.',
              },
              {
                title: 'Dress Modestly Onshore',
                icon: Users,
                text: 'Morocco is a Muslim country. Cover up when walking through town. No shirtless walks through the Taghazout medina or Imsouane village. Bikinis on the beach are fine; bikinis in the souk are not.',
              },
              {
                title: 'Support the Community',
                icon: DollarSign,
                text: 'Eat at local restaurants (tagine from 40 MAD), buy from village shops, tip generously. Many surf schools hire local instructors. Choose camps that reinvest in their communities.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <item.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kitesurfing Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wind className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kitesurfing in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two world-class kite destinations: Dakhla for flat-water perfection, Essaouira for wave riding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Dakhla Lagoon
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                The 40 km lagoon between the Dakhla peninsula and the mainland is knee-to-waist deep for hundreds of
                meters, with a sandy bottom and zero chop. Wind blows side-onshore at 18-25 knots 300+ days per year.
                Beginners can stand up if they fall. Advanced riders practice kite loops and strapless freestyle in
                perfect conditions. A growing number of camps line the lagoon with direct beach access.
              </p>
              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Wind: 18-25 knots, 300+ days/year</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Kite lesson: from 500 MAD / 2 hours. Full course (10 hrs): from 4,000 MAD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Best months: April - October (strongest, most consistent)</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Essaouira &amp; Moulay Bouzerktoune
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Essaouira earns its nickname &quot;Wind City of Africa&quot; with powerful thermal winds from April to
                September. The main beach hosts dozens of kite schools and flat sections behind the breakwater.
                For wave kiting, Moulay Bouzerktoune (20 km north) has clean swells and side-offshore wind, attracting
                sponsored riders for photo shoots. The town itself is a UNESCO medina with excellent restaurants and riads.
              </p>
              <div className="space-y-2 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1.5">
                  <Wind className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Wind: 20-30 knots, Apr-Sep (afternoon thermals)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Kite lesson: from 500 MAD / 2 hours</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                  <span>Best months: May - August (strongest winds)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodation Near Surf Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Home className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay
          </h2>
          <div className="space-y-6">
            {[
              {
                area: 'Taghazout Village',
                description: 'The epicenter of Moroccan surf. Walk to Panoramas and Hash Point. Dozens of guesthouses, hostels, and apartments line the clifftop. Budget rooms from 150 MAD/night; mid-range apartments from 400 MAD/night. Rooftop cafes, yoga shalas, and a growing restaurant scene.',
                tip: 'Book early for December-February. Some apartments rent month-to-month from 4,000 MAD for long-stay surfers.',
              },
              {
                area: 'Tamraght (Banana Village)',
                description: '3 km south of Taghazout with a quieter, more residential feel. Close to Banana Beach and Devil\'s Rock. Most surf camps are based here because rents are lower. Shared apartments from 100 MAD/night; private rooms from 250 MAD/night.',
                tip: 'Good for a social atmosphere. Many camps cluster here, so you\'ll meet surfers from around the world.',
              },
              {
                area: 'Imsouane',
                description: 'A fishing village with a backpacker vibe. Guesthouses perch above the bay with direct wave views. Cheap fresh fish tagines from 40 MAD. Rooms from 120 MAD/night. Limited nightlife; perfect for early-to-bed, early-to-surf types.',
                tip: 'The bay walk to the point takes 5 minutes. Bring cash; ATMs are unreliable.',
              },
              {
                area: 'Sidi Kaouki',
                description: 'A handful of guesthouses and eco-lodges face the beach. No ATMs, one shop, total disconnect. Budget rooms from 100 MAD/night. Some lodges offer yoga and horse rides.',
                tip: 'Best for surfers who want to unplug. Stock up on supplies in Essaouira before arriving.',
              },
              {
                area: 'Dakhla',
                description: 'Kite camps on the lagoon offer all-inclusive packages from 7,000 MAD/week with accommodation, meals, equipment, and boat shuttles. In Dakhla city, budget hotels from 200 MAD/night. The airport has direct flights from Casablanca.',
                tip: 'Lagoon camps fill up fast in peak wind season (June-August). Book two months ahead.',
              },
            ].map((acc) => (
              <div key={acc.area} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {acc.area}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{acc.description}</p>
                <div className="flex items-start gap-2 text-xs text-[var(--color-accent)]">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>{acc.tip}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surf Schools ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Schools &amp; Lessons
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            ISA-certified and local instructors operate across the coast. Most schools use soft-top boards for safety.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Group Lessons
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>2-hour session: from 350 MAD (board + wetsuit included)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Max 6-8 students per instructor</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>3-day package: from 900 MAD (most popular option)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Available in Taghazout, Imsouane, Sidi Kaouki, Essaouira</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Private Coaching
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>1-hour session: from 600 MAD (one-on-one)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Video analysis: from 800 MAD per session (film + review)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>5-day intensive: from 3,500 MAD (advance your level fast)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>ISA-certified instructors available at major surf towns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Surf Coast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-surfing.webp', alt: 'Surfer catching a wave at Anchor Point near Taghazout Morocco', label: 'Anchor Point, Taghazout' },
              { src: '/images/hero-essaouira.webp', alt: 'Windy coastline at Essaouira Morocco with kitesurfers on the water', label: 'Essaouira Wind City' },
              { src: '/images/hero-beaches.webp', alt: 'Long sandy beach in Sidi Kaouki Morocco with waves breaking in the background', label: 'Sidi Kaouki Beach' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
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
            {[
              { q: 'When is the best time to surf in Morocco?', a: 'September through April. Winter (December-February) brings the biggest swells at 2-4 meters. Shoulder months (September-November, March-April) offer 1-2 meter waves with lighter crowds and warmer water. Summer is flat on the Atlantic coast but prime for kitesurfing.' },
              { q: 'Is Morocco good for beginner surfers?', a: 'Excellent. Imsouane Bay, Taghazout Beach, Sidi Kaouki, and Essaouira all have gentle, forgiving waves over sand. Surf schools charge from 350 MAD for a two-hour group lesson with board and wetsuit. Imsouane Bay\'s slow-rolling wave is ideal for learning to longboard.' },
              { q: 'How much does a surf camp cost in Morocco?', a: 'Budget camps start from 3,500 MAD per week (shared dorm, guiding, board). Mid-range with private rooms, lessons, and meals: from 5,500-8,000 MAD per week. Premium with coaching, pool, and full board: from 10,000 MAD per week. Seasonal pricing can change.' },
              { q: 'Do I need a wetsuit to surf in Morocco?', a: 'Yes. Water ranges from 16\u00B0C in January to 22\u00B0C in September. A 3/2mm fullsuit covers October through May. A 2mm shorty works in summer. Wetsuit rental costs from 50 MAD per day.' },
              { q: 'What is the best surf spot for experienced surfers?', a: 'Anchor Point near Taghazout: a long, hollow right-hand point break with 200-300 meter rides on solid northwest swells. Killer Point handles bigger swells up to 5 meters. Dakhla\'s outer peninsula has uncrowded, powerful breaks for surfers willing to travel.' },
              { q: 'Can I rent surf equipment in Morocco?', a: 'Widely available in Taghazout, Imsouane, Essaouira, and Sidi Kaouki. Softboards from 100 MAD/day, hardboards from 150 MAD/day, wetsuits from 50 MAD/day. Weekly rates save 30-40%.' },
              { q: 'Is kitesurfing good in Morocco?', a: 'World-class. Dakhla has 300+ wind days at 18-25 knots with a massive flat-water lagoon. Essaouira blows 20-30 knots from April through September. Kite gear rental starts from 500 MAD/day. Lessons from 500 MAD for a two-hour session.' },
              { q: 'How do I get to Taghazout from Agadir airport?', a: 'Taghazout is 19 km north of Agadir. Grand taxi from the airport: from 200-300 MAD. Many surf camps offer transfers for from 150-250 MAD. The local bus from Agadir costs 7 MAD but does not serve the airport directly. Ride-hailing apps like inDrive charge from 150-200 MAD.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
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
            <Link href="/morocco-beaches" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Beaches in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From Legzira&apos;s red arches to Dakhla&apos;s white sand. The best coastal spots for swimming and sunbathing.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wind className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Wind City of Africa. UNESCO medina, fresh seafood, art galleries, and world-class kitesurfing.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco on a budget. Transport, food, accommodation, and money-saving tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-yoga-retreats" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Yoga Retreats
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Many surf camps combine daily yoga with surfing. Find the best surf-and-yoga retreats in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Catch Your First Moroccan Wave?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From beginner beach breaks to world-class barrels, Morocco&apos;s 1,835 km of Atlantic
            coastline has a wave with your name on it. Grab a board and go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-beaches"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Waves className="w-5 h-5" />
              Explore Morocco Beaches
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Wind className="w-5 h-5" />
              Visit Essaouira
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

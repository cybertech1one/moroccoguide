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
  AlertTriangle,
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
  MessageCircleQuestion,
  BookOpen,
  Bed,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-surf-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Surf Guide 2026 | Best Spots, Camps, Seasons & Beginner Tips',
  description:
    'Complete Morocco surf guide covering Taghazout, Imsouane, Essaouira, Anchor Point, Killer Point, Sidi Kaouki, and Tamri. Surf season calendar, wave types, beginner vs advanced spots, surf camp prices from 3,500 MAD/week, board rental, wetsuit advice, yoga-surf combos, and budget trip planning.',
  keywords: [
    'Morocco surf guide 2026',
    'best surf spots Morocco',
    'Taghazout surf',
    'Imsouane surfing',
    'Anchor Point Morocco',
    'Killer Point Morocco',
    'Essaouira surf',
    'Sidi Kaouki surf',
    'Tamri surf Morocco',
    'Morocco surf season',
    'surf camp Morocco',
    'surf school Morocco',
    'beginner surf Morocco',
    'Morocco wave guide',
    'surfboard rental Morocco',
    'wetsuit Morocco',
    'yoga surf Morocco',
    'budget surf trip Morocco',
    'surf accommodation Taghazout',
  ],
  openGraph: {
    title: 'Morocco Surf Guide 2026 | Best Spots, Camps, Seasons & Beginner Tips',
    description:
      'From the endless rollers of Imsouane to the barrels of Anchor Point. Surf spots, camp pricing from 3,500 MAD/week, gear rental, wetsuit guide, yoga-surf combos, and budget planning for Morocco surf trips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-surfing.webp`,
        width: 1200,
        height: 630,
        alt: 'Surfer riding a wave at Anchor Point near Taghazout on the Atlantic coast of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Surf Guide 2026 | Spots, Camps & Beginner Tips',
    description:
      'Taghazout, Imsouane, Anchor Point, Killer Point, Essaouira, Sidi Kaouki, Tamri. Surf season, camps, board rental, wetsuit guide, yoga combos, and budget surf trips.',
    images: [`${BASE_URL}/images/hero-surfing.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'When is the best time to surf in Morocco?',
    a: 'September through April delivers consistent Atlantic swells. December to February brings the biggest waves at 2-4 meters, ideal for advanced surfers. Shoulder months (September-November, March-April) produce clean 1-2 meter swells with warmer water and lighter crowds, making them the best window for intermediates and beginners.',
  },
  {
    q: 'Is Morocco a good destination for beginner surfers?',
    a: 'Morocco is one of the best places in the world to learn. Imsouane Bay rolls slow, forgiving waves over sand with rides up to 600 meters. Taghazout Beach, Sidi Kaouki, and Essaouira all have gentle beach breaks with dozens of surf schools. Group lessons start from 350 MAD for two hours with board and wetsuit included.',
  },
  {
    q: 'How much does a surf camp cost in Morocco?',
    a: 'Budget hostel-style camps with shared rooms and daily guiding start from 3,500 MAD per week. Mid-range camps with private rooms, daily lessons, meals, and yoga run from 5,500 MAD to 8,000 MAD per week. Premium camps with coaching, video analysis, pool access, and full board charge from 10,000 MAD per week. Seasonal pricing can change.',
  },
  {
    q: 'Do I need a wetsuit for surfing in Morocco?',
    a: 'Yes, for most of the year. Water temperatures range from 16 degrees Celsius in January to 22 degrees in September. A 3/2mm fullsuit handles October through May. A 4/3mm is worth packing for January and February if you run cold. A 2mm shorty or spring suit works from June through September. Rental costs from 50 MAD per day.',
  },
  {
    q: 'What is the best surf spot for experienced surfers in Morocco?',
    a: 'Anchor Point near Taghazout is the benchmark: a long, hollow right-hand point break offering 200 to 300 meter rides on solid northwest swells. Killer Point holds bigger swells up to 5 meters with fast, powerful rights below a cliff. Boilers is a short, intense barrel. Tamri has an exposed beach break with heavy peaks.',
  },
  {
    q: 'Can I rent surf equipment in Taghazout and Imsouane?',
    a: 'Rental shops line the main strips of both towns. Softboards cost from 100 MAD per day, hardboards from 150 MAD, and wetsuits from 50 MAD per day. Weekly rates save 30 to 40 percent. Board repair services are available from 50 MAD for a ding fix. Bringing your own board is easy as Royal Air Maroc and budget carriers from Europe carry surfboards free or cheap.',
  },
  {
    q: 'Are there yoga and surf combo retreats in Morocco?',
    a: 'Dozens of camps along the Taghazout-Imsouane corridor combine daily sunrise yoga with morning and afternoon surf sessions. Week-long yoga-surf packages start from 5,500 MAD including accommodation, meals, yoga classes, and surf guiding. Some retreats add meditation, breathwork, and sound healing sessions.',
  },
  {
    q: 'How do I get to Taghazout from Agadir airport?',
    a: 'Taghazout sits 19 km north of Agadir Al Massira Airport. A grand taxi from the airport costs from 200 to 300 MAD. Many surf camps offer transfers for from 150 to 250 MAD. The local bus from Agadir city center costs 7 MAD but does not go to the airport directly. Ride-hailing apps like inDrive charge from 150 to 200 MAD.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Surf Guide 2026',
  description:
    'Complete guide to surfing in Morocco covering the best surf spots, surf season calendar, beginner and advanced breaks, surf camps, board rental, wetsuit requirements, yoga-surf retreats, and budget planning.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-surfing.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Surf Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: SURF SPOTS
   ================================================================ */

const surfSpots = [
  {
    name: 'Anchor Point',
    location: 'Taghazout, 19 km north of Agadir',
    icon: Anchor,
    level: 'Advanced',
    waveType: 'Right-hand point break',
    waveSize: '1.5 - 3.5m',
    bottom: 'Rocky reef',
    bestSeason: 'Oct - Mar',
    description:
      'The crown jewel of Moroccan surfing. A long, hollow right that peels over flat reef for 200 to 300 meters on solid northwest swells. Needs a minimum 1.5 meter swell to break properly. The takeoff zone is tight and local surfers charge hard. Paddle out through the channel on the south side of the point.',
  },
  {
    name: 'Killer Point',
    location: 'North of Taghazout, cliff access',
    icon: Mountain,
    level: 'Advanced',
    waveType: 'Right-hand reef break',
    waveSize: '2 - 5m',
    bottom: 'Rock / reef',
    bestSeason: 'Nov - Feb',
    description:
      'A heavy, fast right that breaks below a cliff face. Holds swells up to 5 meters. Entry and exit through a rocky channel require confidence and timing. Named after the falcons (not the wave), though the power earns the reputation. The hike down takes 10 minutes over loose ground.',
  },
  {
    name: 'Imsouane Bay',
    location: 'Imsouane, 90 km north of Agadir',
    icon: Waves,
    level: 'Beginner - Intermediate',
    waveType: 'Right-hand point / bay break',
    waveSize: '0.5 - 2m',
    bottom: 'Sand',
    bestSeason: 'Sep - Apr',
    description:
      'Home to what many call the longest wave in Africa. Gentle, rolling rights break across the bay on any northwest swell, offering rides of 300 to 600 meters on good days. Perfect for longboarding, learning, and mellow sessions. The fishing village vibe and cheap tagines add to the draw.',
  },
  {
    name: 'Taghazout Beach',
    location: 'Taghazout village center',
    icon: Sun,
    level: 'Beginner',
    waveType: 'Beach break',
    waveSize: '0.5 - 1.5m',
    bottom: 'Sand',
    bestSeason: 'Year-round (best Sep - Apr)',
    description:
      'The sandy beach right in front of Taghazout village. Multiple peaks shift with the sandbars. Dozens of surf schools set up here daily. Manageable whitewater for first-timers and fun, punchy waves for intermediates on bigger days. Walking distance to cafes, shops, and rental outlets.',
  },
  {
    name: 'Essaouira Beach',
    location: 'Essaouira, Atlantic coast',
    icon: Wind,
    level: 'Beginner',
    waveType: 'Beach break',
    waveSize: '0.5 - 1.5m',
    bottom: 'Sand',
    bestSeason: 'Sep - Apr (windy May - Aug)',
    description:
      'A wide, exposed beach south of the UNESCO medina. Small waves and a sandy bottom make it forgiving for absolute beginners. Mornings are glassy before the famous afternoon trade winds arrive. Double-duty destination: surf in the morning, kitesurf or windsurf in the afternoon.',
  },
  {
    name: 'Sidi Kaouki',
    location: '25 km south of Essaouira',
    icon: Compass,
    level: 'Beginner - Intermediate',
    waveType: 'Beach break',
    waveSize: '0.5 - 2m',
    bottom: 'Sand',
    bestSeason: 'Sep - Apr',
    description:
      'A long, open beach with far fewer people than Taghazout. Consistent whitewater for learners and clean peaks for intermediates. Glassy mornings before the wind picks up around noon. A handful of eco-lodges and guesthouses face the break. No ATMs; bring cash from Essaouira.',
  },
  {
    name: 'Tamri',
    location: '60 km north of Agadir',
    icon: Globe,
    level: 'Intermediate - Advanced',
    waveType: 'Beach break / river mouth',
    waveSize: '1 - 3m',
    bottom: 'Sand',
    bestSeason: 'Oct - Mar',
    description:
      'A raw, exposed beach break near the mouth of the Tamri River. Heavy peaks shift with sand movement and river flow. Less crowded than the Taghazout corridor because access is rougher and there are no nearby surf camps. Strong currents after rain. Suited to surfers comfortable in powerful, unpredictable beach break.',
  },
  {
    name: 'Boilers',
    location: 'Between Killer Point and Anchor Point',
    icon: Star,
    level: 'Expert',
    waveType: 'Short barrel / reef break',
    waveSize: '1.5 - 3m',
    bottom: 'Rock / reef',
    bestSeason: 'Nov - Feb',
    description:
      'Named for the shipwreck boiler visible at low tide. A short, intense wave that barrels over shallow reef at the base of a cliff. Takeoff is critical. Wipeouts put you on rock. Only for experienced surfers with reef-break confidence. The reward is a clean, punchy tube on the right day.',
  },
];

/* ================================================================
   DATA: SURF CAMPS
   ================================================================ */

const surfCamps = [
  {
    tier: 'Budget Camp',
    icon: Users,
    price: 'From 3,500 MAD / week',
    description:
      'Shared dorm rooms (4 to 8 beds), daily surf guiding to the best breaks, basic breakfast. You cook dinner or eat at local restaurants (tagine from 40 MAD). Social atmosphere with communal areas, rooftop hangouts, and nightly bonfires.',
    includes: 'Shared dorm, surf guiding, breakfast, board storage',
    locations: 'Tamraght (Banana Village), Taghazout outskirts, Imsouane',
  },
  {
    tier: 'Mid-Range Camp',
    icon: Award,
    price: 'From 5,500 MAD / week',
    description:
      'Private or twin rooms with en-suite bathrooms. Daily surf lessons or guiding, breakfast and dinner included. Many add morning yoga sessions and transport to breaks further afield. Boards and wetsuits provided. Pool or ocean-view terrace.',
    includes: 'Private room, lessons/guiding, 2 meals, yoga, board + wetsuit',
    locations: 'Taghazout, Tamraght, Imsouane, Sidi Kaouki',
  },
  {
    tier: 'Premium Camp',
    icon: Star,
    price: 'From 10,000 MAD / week',
    description:
      'Boutique-level accommodation with full board (three meals plus snacks). Professional coaching with video analysis, small group ratios (max 4 per coach). Pool, spa access, airport transfers. Some offer surf-safari day trips to remote breaks south of Imsouane.',
    includes: 'Private room, coaching, video, full board, pool, transfers',
    locations: 'Taghazout, Tamraght, select Agadir beachfront',
  },
];

/* ================================================================
   DATA: WATER TEMPERATURE & WETSUIT
   ================================================================ */

const waterTemp = [
  { month: 'Jan', temp: '16°C', wetsuit: '4/3mm' },
  { month: 'Feb', temp: '16°C', wetsuit: '4/3mm' },
  { month: 'Mar', temp: '17°C', wetsuit: '3/2mm' },
  { month: 'Apr', temp: '17°C', wetsuit: '3/2mm' },
  { month: 'May', temp: '18°C', wetsuit: '3/2mm' },
  { month: 'Jun', temp: '19°C', wetsuit: '2mm' },
  { month: 'Jul', temp: '20°C', wetsuit: '2mm' },
  { month: 'Aug', temp: '21°C', wetsuit: 'Shorty' },
  { month: 'Sep', temp: '22°C', wetsuit: 'Shorty' },
  { month: 'Oct', temp: '20°C', wetsuit: '3/2mm' },
  { month: 'Nov', temp: '18°C', wetsuit: '3/2mm' },
  { month: 'Dec', temp: '17°C', wetsuit: '3/2mm' },
];

/* ================================================================
   DATA: EQUIPMENT RENTAL PRICES
   ================================================================ */

const rentalPrices = [
  { item: 'Softboard (foam)', daily: 'From 100 MAD', weekly: 'From 500 MAD' },
  { item: 'Hardboard (fibreglass)', daily: 'From 150 MAD', weekly: 'From 700 MAD' },
  { item: 'Longboard (9ft+)', daily: 'From 200 MAD', weekly: 'From 900 MAD' },
  { item: 'Wetsuit (3/2mm full)', daily: 'From 50 MAD', weekly: 'From 250 MAD' },
  { item: 'Wetsuit (4/3mm full)', daily: 'From 70 MAD', weekly: 'From 350 MAD' },
  { item: 'Booties (reef shoes)', daily: 'From 30 MAD', weekly: 'From 150 MAD' },
  { item: 'Board + wetsuit combo', daily: 'From 130 MAD', weekly: 'From 650 MAD' },
  { item: 'Bodyboard', daily: 'From 60 MAD', weekly: 'From 300 MAD' },
];

/* ================================================================
   DATA: BUDGET BREAKDOWN
   ================================================================ */

const budgetItems = [
  { category: 'Accommodation (hostel / shared room)', cost: 'From 100 MAD / night', note: 'Tamraght and Imsouane cheapest' },
  { category: 'Board + wetsuit rental', cost: 'From 130 MAD / day', note: 'Weekly rate saves 30-40%' },
  { category: 'Tagine lunch or dinner', cost: 'From 40 MAD', note: 'Local restaurants in the village' },
  { category: 'Breakfast (cafe)', cost: 'From 30 MAD', note: 'Pancakes, coffee, juice' },
  { category: 'Grand taxi (Agadir to Taghazout)', cost: 'From 15 MAD', note: 'Shared seat, one way' },
  { category: 'Surf lesson (2 hr group)', cost: 'From 350 MAD', note: 'Board + wetsuit included' },
  { category: 'Total budget week estimate', cost: 'From 3,000 MAD', note: 'Self-catering, own gear or weekly rental' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoSurfGuide() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-end pb-16">
        <img
          src="/images/hero-surfing.webp"
          alt="Surfer riding a clean right-hand wave at Anchor Point near Taghazout Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Surf Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Surf &amp; Ocean Sports
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Surf Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            1,835 km of Atlantic coastline. World-class point breaks. Year-round waves.
            From the endless rollers of Imsouane to the barrels of Anchor Point, here is everything you need to plan a Morocco surf trip.
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
                Morocco sits directly in the path of North Atlantic swells that roll south from Iceland, the British Isles,
                and the mid-ocean storm track. The coastline faces west-northwest, catching that energy and channeling it into
                reef breaks, point breaks, and sandy beach breaks that work across all tides. Add 300-plus days of sunshine,
                water warm enough for a 3/2mm wetsuit for most of the year, tagine dinners for 40 MAD, and surf camps starting
                from 3,500 MAD per week, and you begin to understand why the Taghazout-to-Imsouane corridor ranks among the
                most sought-after surf destinations on the planet.
              </p>
              <p>
                The surf scene here took off in the 1970s when traveling Australian and European surfers discovered Anchor Point.
                By the 2000s, Taghazout had grown into a full surf town with camps, schools, and rooftop cafes. Today, the
                stretch from Safi south to Sidi Ifni holds over 50 named breaks. This guide covers every major spot,
                the surf season month by month, camp tiers and pricing, gear rental, wetsuit requirements, yoga-surf retreats,
                and how to do it all on a budget.
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
            Morocco has rideable waves year-round, but swell size, consistency, and water temperature shift with the seasons.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                Peak Season: December - February
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                North Atlantic storms send consistent 2 to 4 meter swells down the coast. Anchor Point, Killer Point,
                and Boilers fire regularly. Water drops to 16 degrees Celsius. Pack a 4/3mm fullsuit. Taghazout fills up with
                European surfers escaping winter. Book camps at least a month ahead. Expect 15 to 20 surfable days per month.
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
                Cleaner swells in the 1 to 2 meter range. Lighter offshore winds mean glassy mornings. Water temperature
                sits between 17 and 22 degrees. Fewer crowds, lower camp prices. Imsouane Bay, Taghazout Beach, and
                Sidi Kaouki produce fun, manageable waves. September and October are the sweet spot for warm water and
                consistent surf at the best value.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Waves className="w-3.5 h-3.5" />
                <span>Best for: Intermediates, beginners, best value</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Wind className="w-5 h-5 text-[var(--color-gold)]" />
                Summer: June - August
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Largely flat on the Atlantic surf coast. Swells drop below 0.5 meters most days. Not worth visiting for
                surfing alone unless you combine it with kitesurfing in Essaouira or Dakhla, where 20 to 30 knot trade winds
                blow daily. Water warms to 20 to 22 degrees. If you must surf in summer, Imsouane Bay occasionally picks up
                small south swells that other spots miss.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Wind className="w-3.5 h-3.5" />
                <span>Best for: Kitesurfing and windsurfing</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[var(--color-gold)]" />
                Year-Round Wild Card: Imsouane
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Imsouane Bay picks up swell from a wider window than most Moroccan spots thanks to the shape of the bay and
                its northwest-facing point. Even in the smaller summer months, it catches enough energy for mellow longboard
                sessions. Combine with the fishing village atmosphere and you have a viable 12-month surf destination for
                anyone who does not need overhead waves to be happy.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Compass className="w-3.5 h-3.5" />
                <span>Best for: Longboarders, mellow surfers</span>
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
            From heavy reef breaks to mellow longboard waves, Morocco has a spot for every skill level.
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
                    spot.level.includes('Expert')
                      ? 'bg-purple-100 text-purple-700'
                      : spot.level.includes('Advanced')
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

      {/* ── Beginner vs Advanced ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
                  { spot: 'Imsouane Bay', detail: 'The longest wave in Africa. Gentle, rolling rights over sand. Rides up to 600 meters on good days. The go-to for first-time longboarders.' },
                  { spot: 'Taghazout Beach', detail: 'Sandy beach break in front of the village. Dozens of surf schools. Waves 0.5 to 1.5 meters. Walk to cafes between sessions.' },
                  { spot: 'Sidi Kaouki', detail: 'Open beach, fewer people, consistent whitewater. Glassy mornings before wind arrives around noon. Off-grid atmosphere.' },
                  { spot: 'Essaouira Beach', detail: 'Small waves, sandy bottom. Good for absolute first-timers. Combine morning surf with afternoon kitesurfing or medina exploration.' },
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
                  { spot: 'Anchor Point', detail: 'Long, hollow right over reef. 200-300m rides. Needs 1.5m+ swell. The benchmark Moroccan wave for good reason.' },
                  { spot: 'Killer Point', detail: 'Heavy, fast rights next to a cliff. Holds big swells up to 5m. Paddle out through a rock channel. Bring reef booties.' },
                  { spot: 'Boilers', detail: 'Short, intense barrel at the base of a cliff. Named for the shipwreck boiler visible at low tide. Shallow and sharp.' },
                  { spot: 'Tamri', detail: 'Exposed beach break with heavy, shifting peaks at the river mouth. No crowds, no camps. Bring your own supplies and confidence.' },
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
                <strong>Safety:</strong> Reef breaks are sharp. Carry a first-aid kit. Know the paddle-out channels. Never surf
                Anchor Point or Killer Point alone, and check conditions with locals before going out.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Surf Camps ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Camps &amp; Schools
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dozens of camps operate between Taghazout and Imsouane. Here is what each tier offers. Seasonal pricing can change.
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
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <span>Max 6-8 students per ISA-certified instructor</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>3-day package: from 900 MAD (most popular option)</span>
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
                  <span>1-hour one-on-one: from 600 MAD</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Video analysis session: from 800 MAD (film + review)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>5-day intensive: from 3,500 MAD (fast progression)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Water Temperature & Wetsuit Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
                A 3/2mm fullsuit handles most of the season. For January and February, a 4/3mm is worth packing if you run cold.
                Reef booties (2mm) protect against sea urchins in the shallows and make rocky entries at Anchor Point and
                Killer Point far more comfortable. A hood is overkill for Morocco.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                Summer Kit (Jun - Sep)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A 2mm shorty or spring suit works from June through September. Some surfers go with just boardshorts
                in August and September when water reaches 21 to 22 degrees. A rashguard is recommended for sun protection
                during long sessions. SPF 50 reef-safe sunscreen is not optional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Equipment Rental ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Board Rental &amp; Equipment Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Rental shops line the main strips of Taghazout, Imsouane, Essaouira, and Sidi Kaouki. Seasonal pricing can change.
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
              Multi-week rentals typically get 30 to 40 percent off the daily rate. Board repair services cost from 50 MAD
              for a ding fix in Taghazout and Essaouira. Bringing your own board? Surfboard bags fly free or cheap on
              Royal Air Maroc and Ryanair from Europe.
            </p>
          </div>
        </div>
      </section>

      {/* ── Surf Culture & Etiquette ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
                text: 'Moroccan surfers have priority at their home breaks. Taghazout locals charge Anchor Point and Killer Point daily. Do not paddle straight to the peak on your first session. Sit wide, watch the lineup, take the wider sets, and earn your position gradually.',
              },
              {
                title: 'Priority Rules',
                icon: ShieldCheck,
                text: 'The surfer closest to the breaking part of the wave has right of way. At point breaks like Anchor Point, the priority system is strict. Dropping in on someone else will get you called out quickly. If in doubt, pull back.',
              },
              {
                title: 'Keep Beaches Clean',
                icon: Sparkles,
                text: 'Morocco\'s surf communities are fighting a plastic waste problem. Pick up trash after your session. Several Taghazout organizations run weekly beach cleanups you can join and meet locals through.',
              },
              {
                title: 'Respect Ramadan',
                icon: Calendar,
                text: 'During Ramadan, eating, drinking, and smoking in public during daylight hours is disrespectful. Surf camps still operate, but be discreet about snacking between sessions. Restaurant hours shift to evening.',
              },
              {
                title: 'Dress Modestly Onshore',
                icon: Users,
                text: 'Morocco is a Muslim country. Cover up when walking through town. No shirtless walks through the Taghazout medina or Imsouane village. Beachwear at the beach is fine; beachwear in the souk is not.',
              },
              {
                title: 'Support the Community',
                icon: DollarSign,
                text: 'Eat at local restaurants (tagine from 40 MAD), buy from village shops, tip generously. Many surf schools hire local instructors. Choose camps that reinvest in their communities rather than foreign-owned operations that send profits abroad.',
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

      {/* ── Yoga & Surf Combos ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Yoga &amp; Surf Retreats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Taghazout-Imsouane corridor has become a global hub for surf-and-yoga retreats. Sunrise yoga, morning surf,
            afternoon session, sunset stretch. The daily rhythm suits both body and mind.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-[var(--color-accent)]" />
                What a Typical Week Looks Like
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>07:00</strong> Sunrise yoga on the rooftop terrace (vinyasa or hatha)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>08:30</strong> Breakfast (fresh juice, msemmen, eggs, coffee)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>09:30</strong> Morning surf session (2-3 hours, guided or coached)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>13:00</strong> Lunch, free time, explore town</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>15:30</strong> Afternoon surf session (optional)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>18:00</strong> Sunset yoga / yin session, then dinner</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                Yoga-Surf Pricing
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Budget yoga-surf week (shared room, 1 yoga/day, guiding): from 5,500 MAD</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Mid-range (private room, 2 yoga/day, lessons, meals): from 8,000 MAD</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Premium (boutique villa, full board, coaching, spa): from 14,000 MAD</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Drop-in yoga class (non-guests): from 100 MAD per session</span>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-amber-50 text-xs text-amber-800">
                <strong>Styles offered:</strong> Most retreats teach vinyasa flow and yin yoga. Some add breathwork,
                sound healing, and meditation. A few run teacher-training programs (200hr YTT) alongside surf guiding.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Surf Trip ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Surf Trip Planning
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco remains one of the cheapest surf destinations accessible from Europe. Here is what a week costs if you keep it lean.
          </p>
          <div className="card-moroccan overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[var(--surface-muted)]">
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Category</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Cost</th>
                  <th className="text-left p-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Note</th>
                </tr>
              </thead>
              <tbody>
                {budgetItems.map((b) => (
                  <tr key={b.category} className="border-t border-[var(--border-primary)]">
                    <td className="p-3 text-[var(--text-secondary)]">{b.category}</td>
                    <td className="p-3 text-[var(--text-primary)] font-medium">{b.cost}</td>
                    <td className="p-3 text-[var(--text-muted)] text-xs">{b.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                Save on Flights
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ryanair, Transavia, and EasyJet fly to Agadir and Marrakech from dozens of European cities. Booking 6 to 8
                weeks ahead gets the best fares. Surfboard carriage is free or cheap on most carriers out of Europe.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Bed className="w-5 h-5 text-[var(--color-accent)]" />
                Long-Stay Deals
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Many Taghazout and Tamraght apartments offer monthly rates from 4,000 MAD for long-stay surfers. Imsouane
                guesthouses drop prices for stays beyond two weeks. Negotiate directly with hosts rather than booking platforms.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
                Self-Catering
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Taghazout has a small Marjane and several grocery shops. Buy vegetables, bread, eggs, and sardines at the local
                market. Cooking your own meals cuts food costs to from 50 MAD per day. Most guesthouses and camps have shared kitchens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodation Near Breaks ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Home className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay Near the Breaks
          </h2>
          <div className="space-y-6">
            {[
              {
                area: 'Taghazout Village',
                description: 'The epicenter of Moroccan surf. Walk to Panoramas and Hash Point. Dozens of guesthouses, hostels, and apartments line the clifftop. Budget rooms from 150 MAD per night; mid-range apartments from 400 MAD per night. Rooftop cafes, yoga shalas, and a growing restaurant scene.',
                tip: 'Book early for December through February. Some apartments rent month-to-month from 4,000 MAD for long-stay surfers.',
              },
              {
                area: 'Tamraght (Banana Village)',
                description: '3 km south of Taghazout with a quieter, more residential feel. Close to Banana Beach and Devil\'s Rock. Most surf camps are based here because rents are lower. Shared apartments from 100 MAD per night; private rooms from 250 MAD per night.',
                tip: 'Good for a social atmosphere. Many camps cluster here, so you will meet surfers from around the world.',
              },
              {
                area: 'Imsouane',
                description: 'A fishing village with a backpacker vibe. Guesthouses perch above the bay with direct wave views. Cheap fresh fish tagines from 40 MAD. Rooms from 120 MAD per night. Limited nightlife; built for early-to-bed, early-to-surf routines.',
                tip: 'The walk from the bay to the point takes 5 minutes. Bring cash; ATMs are unreliable here.',
              },
              {
                area: 'Sidi Kaouki',
                description: 'A handful of guesthouses and eco-lodges face the beach. No ATMs, one shop, total disconnection from the world. Budget rooms from 100 MAD per night. Some lodges offer yoga and horseback riding along the sand.',
                tip: 'Stock up on supplies in Essaouira (25 km north) before arriving. This is off-grid living.',
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

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Surf Coast
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-surfing.webp', alt: 'Surfer catching a wave at Anchor Point near Taghazout Morocco with rocky coastline in the background', label: 'Anchor Point, Taghazout' },
              { src: '/images/hero-essaouira.webp', alt: 'Windy coastline at Essaouira Morocco with kitesurfers riding on choppy Atlantic waters', label: 'Essaouira Wind City' },
              { src: '/images/hero-beaches.webp', alt: 'Long sandy beach at Sidi Kaouki Morocco with clean waves breaking under clear skies', label: 'Sidi Kaouki Beach' },
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
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about surfing in Morocco.
          </p>
          <div className="space-y-6">
            {faqItems.map((faq) => (
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
                How to travel Morocco on a budget. Transport, food, accommodation, and money-saving strategies.
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
                Find the best surf-and-yoga retreats across the Moroccan coast. Daily yoga, morning surf, sunset stretch.
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
            coastline has a wave for every surfer. Grab a board and go.
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

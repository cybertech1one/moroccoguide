import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Sun,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Compass,
  Gem,
  CircleDot,
  Mountain,
  Award,
  BookOpen,
  Crown,
  Camera,
  Tent,
  Moon,
  Navigation,
  Luggage,
  Route,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Sahara Desert Morocco Guide 2026 | Merzouga, Zagora, Camel Treks & Desert Camps',
  description:
    'Complete Sahara desert Morocco guide. Erg Chebbi vs Erg Chigaga comparison, Merzouga camel treks from 350 MAD, luxury desert camps, sandboarding, stargazing, multi-day tours from Marrakech and Fes. Best time to visit, packing tips, and budget advice.',
  keywords: [
    'Sahara desert Morocco guide',
    'Merzouga desert',
    'Morocco desert tour',
    'camel trek Sahara',
    'desert camp Morocco',
    'Erg Chebbi Morocco',
    'Erg Chigaga Morocco',
    'Zagora desert',
    'luxury desert camp Morocco',
    'Morocco desert glamping',
    'sandboarding Morocco',
    'stargazing Sahara',
    'Marrakech to Sahara',
    'Fes to Merzouga',
    'Morocco camel ride',
    'desert tour from Marrakech',
    'Morocco desert itinerary',
    'best time Sahara Morocco',
    'Morocco desert camping',
    'Sahara sunrise camel trek',
    'Morocco adventure travel',
    'Draa Valley Morocco',
  ],
  openGraph: {
    title: 'Sahara Desert Morocco Guide 2026 | Merzouga, Zagora, Camel Treks & Desert Camps',
    description:
      'Your ultimate guide to Morocco\'s Sahara desert. From budget camel treks at 350 MAD to luxury desert camps under the stars. Erg Chebbi, Erg Chigaga, sandboarding, stargazing, and multi-day itineraries.',
    url: `${BASE_URL}/morocco-sahara-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-sahara.webp`,
        width: 1200,
        height: 630,
        alt: 'Golden sand dunes of Erg Chebbi in the Sahara Desert near Merzouga, Morocco at sunrise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sahara Desert Morocco Guide 2026 | Merzouga, Zagora & Desert Camps',
    description:
      'From camel treks at 350 MAD to luxury glamping under Saharan stars. Complete guide to Morocco\'s desert with itineraries, prices, and insider tips.',
    images: [`${BASE_URL}/images/hero-sahara.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-sahara-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-sahara-guide`,
  name: 'Sahara Desert Morocco Guide 2026 | Merzouga, Zagora, Camel Treks & Desert Camps',
  description:
    'Complete guide to Morocco\'s Sahara desert. Erg Chebbi vs Erg Chigaga, Merzouga, Zagora, camel treks, luxury desert camps, sandboarding, stargazing, and multi-day itineraries from Marrakech and Fes.',
  url: `${BASE_URL}/morocco-sahara-guide`,
  image: `${BASE_URL}/images/hero-sahara.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-sahara-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Sahara Desert Guide', item: `${BASE_URL}/morocco-sahara-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How long does it take to get from Marrakech to Merzouga?', acceptedAnswer: { '@type': 'Answer', text: 'Approximately 9-10 hours (550 km) via Ouarzazate. Most travelers split the journey over 2 days.' } },
    { '@type': 'Question', name: 'What is the best time to visit the Sahara Desert in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'October to April is ideal with 15-25 C days. Avoid June-August when temperatures exceed 45 C.' } },
    { '@type': 'Question', name: 'Is a camel trek in the Sahara safe for beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Camels are well-trained and guides walk alongside. Children aged 6+ can participate.' } },
    { '@type': 'Question', name: 'What is the difference between Erg Chebbi and Erg Chigaga?', acceptedAnswer: { '@type': 'Answer', text: 'Erg Chebbi has taller dunes (150m) and more infrastructure. Erg Chigaga is more remote and authentic.' } },
    { '@type': 'Question', name: 'How much does a desert camp cost in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Budget from 250 MAD, mid-range from 800 MAD, luxury from 2,500 MAD per person per night.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ERG CHEBBI VS ERG CHIGAGA COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const ergComparison = [
  {
    aspect: 'Location & Access',
    chebbi: 'Near Merzouga, 550 km from Marrakech (9-10 hrs), 480 km from Fes (7-8 hrs). Paved road to the dune edge.',
    chigaga: 'Near M\'hamid, 600 km from Marrakech (9 hrs). Requires 4x4 for the final 50 km off-road to the dunes.',
  },
  {
    aspect: 'Dune Height & Scale',
    chebbi: 'Up to 150 meters tall (highest in Morocco). Compact erg: 22 km long, 5 km wide.',
    chigaga: 'Up to 100 meters tall. Vast erg: 40 km long, 15 km wide. More expansive landscape.',
  },
  {
    aspect: 'Crowds & Tourism',
    chebbi: 'More popular. Merzouga has hotels, restaurants, and shops right at the dune base.',
    chigaga: 'Far fewer tourists. No permanent town. More secluded and authentic.',
  },
  {
    aspect: 'Camp Options',
    chebbi: 'Wide range: budget bivouacs (from 250 MAD) to ultra-luxury (from 3,500 MAD). Over 60 camps.',
    chigaga: 'Fewer but higher quality. Mostly mid-range to luxury (from 1,200 MAD). About 15 camps.',
  },
  {
    aspect: 'Best For',
    chebbi: 'First-timers, families, photographers seeking tall dunes, travelers on tight schedules.',
    chigaga: 'Experienced travelers seeking solitude, adventure lovers, astrophotography enthusiasts.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT CAMP TIERS
   ═══════════════════════════════════════════════════════════════ */

const campTiers = [
  {
    tier: 'Budget Bivouac',
    icon: Tent,
    price: 'From 250 MAD per person',
    description: 'Basic Berber-style tents with shared mattresses on sand. Communal bathrooms, traditional dinner and breakfast included. Perfect for backpackers seeking authentic desert nights.',
    features: ['Shared tents (4-8 people)', 'Mattress and blankets', 'Communal toilets', 'Traditional tagine dinner', 'Campfire with drums'],
  },
  {
    tier: 'Standard Camp',
    icon: Tent,
    price: 'From 500 MAD per person',
    description: 'Private or semi-private tents with proper beds and bedding. Shared but clean bathrooms, better meals. A good balance of comfort and value for most travelers.',
    features: ['Private tent (2 people)', 'Real beds with linens', 'Shared clean bathrooms', 'Multi-course dinner', 'Sandboarding included'],
  },
  {
    tier: 'Luxury Camp',
    icon: Crown,
    price: 'From 1,500 MAD per person',
    description: 'Well-appointed tents with furniture, carpets, and lighting. Private en-suite bathroom with hot shower. Excellent dining and professional staff with tailored experiences.',
    features: ['Furnished private tent', 'En-suite hot shower', 'Gourmet Moroccan dinner', 'Cocktails at sunset', 'Private camel trek'],
  },
  {
    tier: 'Ultra-Luxury Glamping',
    icon: Gem,
    price: 'From 3,500 MAD per person',
    description: 'Five-star desert experience: king beds, luxury linens, full bathrooms, even air conditioning. Gourmet dining, premium drinks, and bespoke desert excursions.',
    features: ['King bed with premium linens', 'Full private bathroom', 'Gourmet dining with wine', 'Personal guide', 'Sunrise yoga sessions'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CAMEL TREK OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const camelTreks = [
  {
    name: 'Sunset Camel Trek',
    duration: '1.5-2 hours',
    price: 'From 350 MAD per person',
    description: 'The most popular option. Ride into Erg Chebbi as the sun paints the dunes orange and pink, stopping at a dune summit for photos before continuing to camp.',
    ideal: 'First-timers, families, photographers',
  },
  {
    name: 'Sunrise Camel Trek',
    duration: '1.5-2 hours',
    description: 'Wake before dawn and ride to the highest dunes to watch the sunrise over the Sahara. Early morning light creates extraordinary shadow patterns across the sand.',
    price: 'Usually included with overnight camp',
    ideal: 'Early risers, photographers, romantics',
  },
  {
    name: 'Full-Day Camel Trek',
    duration: '6-8 hours',
    price: 'From 700 MAD per person',
    description: 'Ride through rocky hamada, sandy erg, and dried river beds. Lunch prepared in the shade of the dunes. Experience the true vastness of the Sahara.',
    ideal: 'Adventure seekers, experienced riders',
  },
  {
    name: 'Multi-Day Camel Expedition',
    duration: '2-5 days',
    price: 'From 2,000 MAD per person',
    description: 'Travel between remote nomad encampments, sleep under the stars, meals cooked over campfires. The ultimate Saharan adventure revealing the desert\'s true scale.',
    ideal: 'Serious adventurers, cultural immersion seekers',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const desertActivities = [
  {
    activity: 'Sandboarding',
    icon: Mountain,
    price: 'From 150 MAD (or free at many camps)',
    description: 'Surf the dunes of Erg Chebbi on a sandboard. No experience needed. Guides take you to the best slopes and the soft sand makes falls painless.',
  },
  {
    activity: 'Stargazing',
    icon: Moon,
    price: 'Free at camps, guided sessions from 200 MAD',
    description: 'The Sahara offers some of the clearest night skies on Earth. Zero light pollution lets you see the Milky Way with the naked eye. Some luxury camps provide telescopes and astronomy guides.',
  },
  {
    activity: 'ATV / Quad Biking',
    icon: Navigation,
    price: 'From 400 MAD per hour',
    description: 'Rip across the desert on an ATV quad bike. Popular at Erg Chebbi with guided circuits through dunes and hamada (rocky desert). Helmets and instruction provided.',
  },
  {
    activity: '4x4 Desert Excursion',
    icon: Compass,
    price: 'From 800 MAD per vehicle',
    description: 'Visit remote oases, dried lake beds, fossil sites, and nomad settlements unreachable on foot. Essential for reaching Erg Chigaga from M\'hamid.',
  },
  {
    activity: 'Gnawa Music Evening',
    icon: Sparkles,
    price: 'From 100 MAD (often included at camps)',
    description: 'Hypnotic rhythms around a campfire under the stars. This UNESCO-recognized musical tradition has its spiritual home in Khamlia village near Merzouga.',
  },
  {
    activity: 'Fossil Hunting',
    icon: CircleDot,
    price: 'Free to explore, guided trips from 200 MAD',
    description: 'The Erfoud-Rissani region has trilobites, ammonites, and orthoceras dating back 350-450 million years. Visit fossil quarries and the Erfoud museum.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MULTI-DAY ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    title: 'Marrakech to Merzouga — 3 Days / 2 Nights',
    icon: Route,
    price: 'From 2,500 MAD per person (shared group tour)',
    days: [
      { day: 'Day 1', route: 'Marrakech to Dades Valley', highlights: 'Cross the Tizi n\'Tichka pass (2,260m), visit Ait Benhaddou kasbah (UNESCO), overnight in the Dades Gorge.' },
      { day: 'Day 2', route: 'Dades Valley to Merzouga', highlights: 'Drive through Todra Gorge, arrive at Erg Chebbi. Sunset camel trek, overnight at desert camp.' },
      { day: 'Day 3', route: 'Merzouga to Marrakech (or Fes)', highlights: 'Sunrise on the dunes, breakfast at camp. Drive back to Marrakech, or continue to Fes (6-7 hours).' },
    ],
  },
  {
    title: 'Fes to Merzouga — 2 Days / 1 Night',
    icon: Route,
    price: 'From 1,800 MAD per person (shared group tour)',
    days: [
      { day: 'Day 1', route: 'Fes to Merzouga via Ifrane & Midelt', highlights: 'Middle Atlas cedar forests, Ifrane, Midelt, Tizi n\'Talghemt pass. Sunset camel trek, overnight at desert camp.' },
      { day: 'Day 2', route: 'Merzouga to Fes (or Marrakech)', highlights: 'Sunrise from the dunes, explore Khamlia village. Return to Fes, or continue to Marrakech (add one night).' },
    ],
  },
  {
    title: 'Grand Desert Circuit — 5 Days / 4 Nights',
    icon: Route,
    price: 'From 5,500 MAD per person (private tour)',
    days: [
      { day: 'Day 1', route: 'Marrakech to Ouarzazate', highlights: 'Atlas Mountain crossing, visit UNESCO Ait Benhaddou kasbah, explore Ouarzazate film studios.' },
      { day: 'Day 2', route: 'Ouarzazate to Todra Gorge', highlights: 'Road of a Thousand Kasbahs, hike Todra Gorge, overnight in the Dades Valley.' },
      { day: 'Day 3', route: 'Gorges to Merzouga', highlights: 'Arrive at Erg Chebbi, sunset camel trek, luxury desert camp with Gnawa music.' },
      { day: 'Day 4', route: 'Merzouga to Zagora', highlights: 'Sunrise on dunes, drive through Rissani and Draa Valley date palms, overnight near Zagora.' },
      { day: 'Day 5', route: 'Zagora to Marrakech', highlights: 'Famous "Timbuktu 52 days" sign, drive the Draa Valley, return to Marrakech.' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  { item: 'Headscarf / Cheche', note: 'Sun and sand protection. Buy a Berber cheche in Merzouga from 30 MAD.' },
  { item: 'Sunscreen SPF 50+', note: 'Reapply every 2 hours. Bring lip balm with SPF as well.' },
  { item: 'Sunglasses', note: 'UV-rated with a strap. The glare off the sand is intense.' },
  { item: 'Warm layers', note: 'Nights drop to 0-5 degrees C in winter. Fleece, warm socks, down jacket.' },
  { item: 'Closed-toe shoes', note: 'For hot sand and rocky terrain. Sandals fine in camp only.' },
  { item: 'Water bottle (2L min)', note: 'Camps provide water but carry extra. Electrolyte packets useful.' },
  { item: 'Camera + extra batteries', note: 'Cold nights drain batteries. Ziplock bag protects from sand.' },
  { item: 'Headlamp / flashlight', note: 'Essential for navigating camp at night. Budget camps have minimal lighting.' },
  { item: 'Cash in MAD', note: 'No ATMs in the desert. From 200 MAD for tips is customary.' },
  { item: 'Light long-sleeve clothing', note: 'Sun protection by day, warmth at night. Cotton or linen.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Sunset camel trek (1.5-2 hrs)', price: 'From 350 MAD', note: 'Per person, includes guide' },
  { service: 'Budget desert camp (per night)', price: 'From 250 MAD', note: 'Shared tent, meals included' },
  { service: 'Mid-range desert camp', price: 'From 800 MAD', note: 'Private tent, en-suite' },
  { service: 'Luxury glamping camp', price: 'From 2,500 MAD', note: 'Full luxury, gourmet meals' },
  { service: 'ATV quad biking (1 hour)', price: 'From 400 MAD', note: 'Per person, helmet included' },
  { service: 'Sandboarding', price: 'From 150 MAD', note: 'Often free at camps' },
  { service: '4x4 half-day excursion', price: 'From 800 MAD', note: 'Per vehicle (up to 4 pax)' },
  { service: '3-day Marrakech-Merzouga tour', price: 'From 2,500 MAD', note: 'Per person, shared group' },
  { service: '3-day private tour', price: 'From 6,000 MAD', note: 'Per person, private vehicle' },
  { service: 'Fes-Merzouga 2-day tour', price: 'From 1,800 MAD', note: 'Per person, shared group' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO VISIT
   ═══════════════════════════════════════════════════════════════ */

const seasons = [
  {
    season: 'Peak Season (Oct-Nov)',
    icon: Sun,
    temp: '20-28 C day / 10-15 C night',
    verdict: 'Ideal',
    description: 'Perfect temperatures and clear skies. The most popular period, so book camps and tours well in advance.',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Thermometer,
    temp: '15-22 C day / 0-5 C night',
    verdict: 'Great (cold nights)',
    description: 'Comfortable days but cold nights. Fewer crowds. Crystal-clear skies make this the best period for stargazing.',
  },
  {
    season: 'Spring (Mar-Apr)',
    icon: Sun,
    temp: '22-30 C day / 10-18 C night',
    verdict: 'Excellent',
    description: 'Warming temperatures, longer days. Great before summer heat. Wind can bring occasional sandstorms.',
  },
  {
    season: 'Summer (May-Sep)',
    icon: AlertTriangle,
    temp: '38-50 C day / 25-30 C night',
    verdict: 'Not recommended',
    description: 'Extremely hot and dangerous. Temperatures exceed 45 C. Only venture out at sunrise or sunset. Many camps close.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSaharaGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[var(--text-primary)] font-medium">Sahara Desert Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-sahara.webp"
          alt="Golden sand dunes of Erg Chebbi in the Sahara Desert near Merzouga, Morocco at sunrise with camel caravan silhouette"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            <span>Ultimate Morocco Desert Guide 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Sahara Desert Morocco
            <span className="block text-[var(--color-gold)]">Merzouga, Zagora &amp; Beyond</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 font-[family-name:var(--font-heading)]">
            Camel treks from 350 MAD, luxury desert camps under the stars, sandboarding on golden dunes, and nights
            filled with Gnawa music and a billion stars. Your complete Sahara guide.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <MapPin className="w-3.5 h-3.5" /> Erg Chebbi &amp; Erg Chigaga
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <DollarSign className="w-3.5 h-3.5" /> Camel treks from 350 MAD
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <Moon className="w-3.5 h-3.5" /> Desert camps &amp; glamping
            </span>
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why the Sahara is Morocco&apos;s Most Unforgettable Experience
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              The Sahara Desert is the single experience that defines a trip to Morocco. The world&apos;s largest
              hot desert stretches across 9.2 million square kilometers of North Africa, and Morocco&apos;s
              southeastern frontier offers the most accessible gateway to its magnificent sand seas. From the
              towering golden dunes of Erg Chebbi near Merzouga to the vast wilderness of Erg Chigaga beyond
              Zagora, Morocco&apos;s Sahara delivers an experience no photograph can fully capture.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Whether you dream of riding a camel across amber dunes at sunset, sleeping beneath a billion
              stars, sandboarding down 150-meter slopes, or sipping mint tea in a luxury desert camp, this
              guide covers everything you need to plan your perfect Sahara adventure.
            </p>
            <p className="text-sm text-[var(--text-muted)]">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              All prices listed are starting prices as of 2026. Seasonal pricing applies, especially during peak tourist months (October-April) and holiday periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── Erg Chebbi vs Erg Chigaga Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Erg Chebbi vs. Erg Chigaga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has two major sand seas (ergs) worth visiting. Here is how they compare to help you choose the right one for your trip.
          </p>
          <div className="max-w-5xl mx-auto space-y-6">
            {ergComparison.map((item) => (
              <div key={item.aspect} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  {item.aspect}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Erg Chebbi (Merzouga)</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.chebbi}</p>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Compass className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--color-gold)]">Erg Chigaga (M&apos;hamid)</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.chigaga}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Merzouga Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Merzouga &amp; Erg Chebbi Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The gateway to Morocco&apos;s most iconic desert landscape. Everything you need to know about visiting Merzouga and the Erg Chebbi dunes.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              About Merzouga
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              Merzouga is a small Berber village at the foot of Erg Chebbi, Morocco&apos;s tallest sand dune system.
              It now has paved road access, hotels, riads, and organized tourism infrastructure. The real attraction
              is the wall of golden dunes rising dramatically behind the town. The surrounding area includes Berber
              and Gnawa communities, seasonal flamingo lakes (Dayet Srji), rich fossil deposits, and the village of
              Khamlia, where descendants of sub-Saharan Africans maintain the Gnawa musical tradition.
            </p>
          </div>
          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Getting to Merzouga
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[var(--text-secondary)]">
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--text-primary)] mb-2">From Marrakech (550 km)</p>
                <p>9-10 hours via Ouarzazate and Erfoud. Most travelers split this into a 2-3 day tour. Private transfer from 3,500 MAD.</p>
              </div>
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                <p className="font-semibold text-[var(--text-primary)] mb-2">From Fes (480 km)</p>
                <p>7-8 hours via Ifrane and Errachidia through the Middle Atlas. Supratours bus daily from 200 MAD.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Zagora & Draa Valley ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Zagora &amp; the Draa Valley
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The southern gateway to Morocco&apos;s desert, where the lush Draa Valley gives way to the vast emptiness of the Sahara.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              About Zagora
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Zagora sits at the edge of the Draa Valley, Morocco&apos;s longest river valley and one of the largest
              date palm oasis systems in the world. Famous for its &quot;Timbuktu 52 Days&quot; sign, it is the
              starting point for Erg Chigaga trips and the gateway to M&apos;hamid el Ghizlane. The Draa Valley
              drive from Ouarzazate is one of Morocco&apos;s most scenic, passing fortified villages, kasbahs, and
              endless date palms. At 6-7 hours from Marrakech, it is a good option for travelers with limited time.
            </p>
          </div>
          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              M&apos;hamid el Ghizlane — The Last Town
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              An hour south of Zagora, M&apos;hamid is literally the end of the road. This windswept town is
              the departure point for Erg Chigaga, 50 km into the desert by 4x4. It hosts the annual Taragalte
              music festival and a weekly Monday souk. Erg Chigaga excursions start from 1,200 MAD per person
              for a 2-day trip including camp and meals.
            </p>
          </div>
        </div>
      </section>

      {/* ── Camel Trek Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Trek Options
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            No Sahara visit is complete without a camel ride. Choose from short sunset treks to multi-day expeditions through the dunes.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April). Group sizes and private options affect pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {camelTreks.map((trek) => (
              <div key={trek.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {trek.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0 ml-4">
                    <Clock className="w-3 h-3" />
                    {trek.duration}
                  </div>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {trek.price}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{trek.description}</p>
                <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                  <Users className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  <span><strong>Best for:</strong> {trek.ideal}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Desert Camp Tiers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Camp Guide — Budget to Ultra-Luxury
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From basic Berber bivouacs to five-star glamping with king beds and gourmet dining, there is a desert camp for every budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person per night and include dinner and breakfast unless noted. Seasonal pricing applies during peak months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campTiers.map((camp) => {
              const CampIcon = camp.icon;
              return (
                <div key={camp.tier} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CampIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {camp.tier}
                      </h3>
                      <span className="text-sm text-[var(--color-accent)] font-semibold">{camp.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{camp.description}</p>
                  <div className="space-y-2">
                    {camp.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Desert Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Activities Beyond the Camel Trek
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara offers far more than camel rides. From adrenaline-pumping sandboarding to serene stargazing, here is what to do in the desert.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desertActivities.map((act) => {
              const ActIcon = act.icon;
              return (
                <div key={act.activity} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ActIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {act.activity}
                  </h3>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-2">
                    {act.price}
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{act.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Visit ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is everything in the desert. The difference between the best and worst months is the difference between magic and misery.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {seasons.map((s) => {
              const SeasonIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {s.season}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                        <Thermometer className="w-3 h-3" /> {s.temp}
                      </div>
                    </div>
                  </div>
                  <div className={`inline-block px-2 py-0.5 text-xs font-medium rounded mb-3 ${
                    s.verdict === 'Not recommended'
                      ? 'bg-red-100 text-red-700'
                      : s.verdict === 'Ideal' || s.verdict === 'Excellent'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {s.verdict}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{s.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sahara Desert Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for desert experiences, camps, and tours in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when luxury camp and tour prices may increase by 20-40%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Day Itineraries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Multi-Day Desert Tour Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The most popular routes to reach the Sahara from Morocco&apos;s major cities, with day-by-day breakdowns and pricing.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {itineraries.map((itin) => (
              <div key={itin.title} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-accent)]/5 p-6 border-b border-[var(--border-primary)]">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {itin.title}
                  </h3>
                  <span className="text-sm text-[var(--color-accent)] font-semibold">{itin.price}</span>
                </div>
                <div className="p-6 space-y-4">
                  {itin.days.map((d) => (
                    <div key={d.day} className="flex gap-4">
                      <div className="w-16 shrink-0">
                        <span className="inline-block px-2 py-1 bg-[var(--color-accent)] text-white text-xs font-bold rounded">
                          {d.day}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)] mb-1">{d.route}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{d.highlights}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The desert environment demands specific preparation. Pack smart and you will be comfortable; forget something and you will regret it.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-2 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Essential Item</div>
              <div className="p-3 px-4">Why You Need It</div>
            </div>
            {packingEssentials.map((item, i) => (
              <div
                key={item.item}
                className={`grid grid-cols-2 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] shrink-0" />
                  {item.item}
                </div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Desert Travelers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Health &amp; Safety
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dehydration is the biggest risk. Drink at least 3 liters of water daily. Wear sunscreen and head covering
                at all times. Carry basic first aid and any personal medications.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Etiquette
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Camel guides: from 50-100 MAD per person. Camp staff: from 50 MAD per night. Tour drivers: from 100-200
                MAD per day. Always tip in cash (MAD). Tips are a significant part of desert workers&apos; income.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Camera className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Golden hour creates the best dune shadows. Use a UV filter and lens cloth. Keep cameras in sealed bags
                when not shooting. Cold nights drain batteries fast — carry spares in your sleeping bag.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Advice
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book 1-2 weeks ahead in peak season. Compare multiple operators. Be wary of very cheap offers that cut
                corners on food and safety. Confirm exactly what is included in the price.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Responsible Tourism
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Choose camps that treat camels well and employ local guides. Carry out all rubbish. Ask permission
                before photographing locals. Buy handicrafts directly from artisans.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Info className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Connectivity
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Mobile signal works in Merzouga and Zagora but vanishes in the dunes. Most camps are intentionally
                off-grid. Download offline maps before heading into the desert.
              </p>
            </div>
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
                How long does it take to get from Marrakech to Merzouga?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Approximately 9-10 hours (550 km) via Ouarzazate and Todra Gorge. Most travelers split the journey
                over 2 days, stopping in the Dades Valley, making the drive part of the adventure.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit the Sahara Desert in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                October to April is ideal, with October-November and March-April being the sweet spots (15-25 C
                daytime). Winter nights drop to 0-5 C. Avoid June-August when temperatures exceed 45 C.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is a camel trek in the Sahara safe for beginners?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. The dromedary camels are well-trained and docile, with experienced guides walking alongside.
                Short 1.5-2 hour sunset treks are perfect for first-timers. Children aged 6+ can join with adult
                supervision. Bring a cushion or scarf for saddle comfort on longer treks.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the difference between Erg Chebbi and Erg Chigaga?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Erg Chebbi (Merzouga) has taller dunes (150m), paved access, 60+ camps. Erg Chigaga (M&apos;hamid) is
                more remote, needs a 4x4, has fewer but higher-quality camps, and a more authentic uncrowded experience.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a desert camp experience cost in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget camps start from 250 MAD per person per night. Mid-range with private tents: from 800 MAD.
                Luxury glamping: from 2,500 MAD. Ultra-luxury can exceed 5,000 MAD. Seasonal pricing applies,
                with peak season (October-April) being 20-40% more expensive.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I visit the Sahara as a day trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not realistically. Erg Chebbi is 9-10 hours from Marrakech. The minimum is 2 nights (one en route,
                one in the desert). A 3-day / 2-night tour is the most popular option. Zagora is closer (6-7 hours
                from Marrakech) but still requires an overnight stay.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/morocco-desert-glamping', icon: Tent, title: 'Desert Glamping Guide', desc: 'Morocco\'s best luxury desert camps, from Erg Chebbi to Agafay.' },
              { href: '/day-trips-from-marrakech', icon: MapPin, title: 'Day Trips from Marrakech', desc: 'Atlas Mountains, Ourika Valley, and Agafay Desert excursions.' },
              { href: '/day-trips-from-fes', icon: Compass, title: 'Day Trips from Fes', desc: 'Middle Atlas, Ifrane, Volubilis, and cedar forest adventures.' },
              { href: '/morocco-photography-locations', icon: Camera, title: 'Photography Locations', desc: 'The most photogenic spots from desert dunes to blue streets.' },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience the Sahara?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            From sunrise camel treks to starlit desert camps, the Sahara is an experience that stays with you forever.
            Start planning your Morocco desert adventure today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-desert-glamping"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-accent)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Tent className="w-4 h-4" />
              Explore Desert Camps
            </Link>
            <Link
              href="/day-trips-from-marrakech"
              className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
              Tours from Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
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
  Camera,
  Building,
  Award,
  BookOpen,
  Footprints,
  Sun,
  Snowflake,
  Tent,
  Binoculars,
  TreeDeciduous,
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
  title: 'Atlas Mountains Morocco Guide 2026 | Hiking, Toubkal, Berber Villages & Activities',
  description:
    'Complete Atlas Mountains guide for hikers and travelers. Climb Mount Toubkal (4,167m), explore Berber villages, trek the High Atlas, visit Ouzoud Falls, and discover Ourika Valley. Routes, difficulty levels, prices, accommodation, and packing tips.',
  keywords: [
    'Atlas Mountains Morocco guide',
    'Mount Toubkal',
    'Atlas Mountains hiking',
    'Berber villages Atlas',
    'Atlas Mountains trekking',
    'High Atlas Morocco',
    'Middle Atlas Morocco',
    'Anti-Atlas Morocco',
    'Imlil Morocco',
    'Ourika Valley',
    'Ait Bougmez Valley',
    'Ouzoud Falls',
    'Atlas Mountains accommodation',
    'Morocco trekking routes',
    'Atlas Mountains best time',
    'Toubkal summit guide',
    'Atlas Mountains wildlife',
    'Morocco mountain guide',
    'Atlas gites refuges',
    'Atlas Mountains packing list',
    'Berber culture Atlas',
    'Atlas Mountains tours',
  ],
  openGraph: {
    title: 'Atlas Mountains Morocco Guide 2026 | Hiking, Toubkal, Berber Villages & Activities',
    description:
      'Your complete guide to the Atlas Mountains. From Mount Toubkal summit treks to peaceful Berber villages. Routes, prices, accommodation, and insider tips for every level.',
    url: `${BASE_URL}/morocco-atlas-mountains`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the snow-capped High Atlas Mountains with terraced Berber village in the foreground',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Mountains Morocco Guide 2026 | Hiking, Toubkal & Villages',
    description:
      'Complete guide to the Atlas Mountains. Summit Mount Toubkal, explore Berber villages, trek ancient routes. Difficulty levels, prices, and accommodation for every traveler.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-atlas-mountains` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-atlas-mountains`,
  name: 'Atlas Mountains Morocco Guide 2026 | Hiking, Toubkal, Berber Villages & Activities',
  description:
    'Complete guide to Morocco\'s Atlas Mountains. Hiking routes, Mount Toubkal summit, Berber villages, Ourika Valley, Ouzoud Falls, wildlife, accommodation, and practical tips.',
  url: `${BASE_URL}/morocco-atlas-mountains`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-atlas-mountains`,
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
      { '@type': 'ListItem', position: 2, name: 'Atlas Mountains Guide', item: `${BASE_URL}/morocco-atlas-mountains` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How difficult is it to climb Mount Toubkal?',
      acceptedAnswer: { '@type': 'Answer', text: 'Mount Toubkal (4,167m) is a non-technical trek suitable for fit hikers. The standard 2-day route from Imlil is graded moderate to challenging. Main difficulties are altitude, steep scree, and cold temperatures. A certified mountain guide is required.' },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit the Atlas Mountains?',
      acceptedAnswer: { '@type': 'Answer', text: 'The best months for hiking are April to June and September to October, with mild temperatures and clear skies. Summer is hot at lower elevations but fine at altitude. Winter brings snow above 2,000m, making Toubkal a mountaineering challenge requiring crampons and ice axes.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide to trek in the Atlas Mountains?',
      acceptedAnswer: { '@type': 'Answer', text: 'A certified guide is legally required for Mount Toubkal and recommended for multi-day treks. For day hikes in the Ourika Valley or Imlil, a guide is optional but helpful. Guides cost from 500 MAD per day.' },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to trek Mount Toubkal?',
      acceptedAnswer: { '@type': 'Answer', text: 'A standard 2-day Toubkal trek costs from 2,000-4,000 MAD per person including guide, mule, meals, and refuge. Budget options from 1,500 MAD in groups. Luxury guided treks from 8,000 MAD per person.' },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for Atlas Mountains hiking?',
      acceptedAnswer: { '@type': 'Answer', text: 'Essential items: sturdy hiking boots, layered clothing, waterproof jacket, sun protection, daypack, water bottles (2-3L), headlamp, first aid kit, and snacks. For Toubkal, add warm layers, gloves, and sleeping bag liner. In winter, crampons and ice axes are essential above 3,000m.' },
    },
    {
      '@type': 'Question',
      name: 'Can I visit the Atlas Mountains as a day trip from Marrakech?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Ourika Valley is 45 minutes from Marrakech, Imlil is 90 minutes. Popular day trips include Ourika Valley waterfalls, walks around Imlil, and Ouzoud Falls (2.5 hours). Multi-day treks require at least 2 days.' },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: THREE ATLAS RANGES
   ═══════════════════════════════════════════════════════════════ */

const atlasRanges = [
  {
    name: 'High Atlas',
    icon: Mountain,
    elevation: '2,000m - 4,167m',
    description:
      'The backbone of Morocco stretching 700km. Home to Mount Toubkal (4,167m), North Africa\'s highest peak. Deep valleys shelter Berber villages with terraced orchards. The landscape shifts from lush green valleys to snow-dusted rocky peaks.',
    highlights: ['Mount Toubkal summit', 'Imlil base village', 'Ait Bougmez Valley', 'Tizi n\'Tichka pass', 'M\'Goun Massif'],
    bestFor: 'Serious trekking, Toubkal summit, multi-day routes, Berber village stays',
    bestTime: 'April-June, September-October',
  },
  {
    name: 'Middle Atlas',
    icon: TreeDeciduous,
    elevation: '1,000m - 3,340m',
    description:
      'A greener, gentler range covered in cedar and oak forests that feel more European than African. Home to the Barbary macaques of Ifrane, crater lakes, and waterfalls. Often combined with a trip to Fes or Meknes.',
    highlights: ['Cedar forests of Azrou', 'Ifrane national park', 'Barbary macaques', 'Ouzoud Falls', 'Aguelmam Azigza lake'],
    bestFor: 'Nature walks, wildlife, cooler climate, cedar forests, family trips',
    bestTime: 'Year-round (spring and autumn ideal)',
  },
  {
    name: 'Anti-Atlas',
    icon: Sun,
    elevation: '1,000m - 2,531m',
    description:
      'Morocco\'s oldest mountain range with rocks over two billion years old. Dry, dramatic, and far less visited. A landscape of pink granite, volcanic formations, oases, and ancient kasbahs. Tafraoute is famous for painted rocks and February almond blossoms.',
    highlights: ['Tafraoute painted rocks', 'Ameln Valley', 'Jebel Lkest trek', 'Prehistoric rock engravings', 'Almond blossom season'],
    bestFor: 'Off-the-beaten-path trekking, geology, desert-mountain scenery, photography',
    bestTime: 'October-April (too hot in summer)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TREKKING ROUTES
   ═══════════════════════════════════════════════════════════════ */

const trekkingRoutes = [
  {
    name: 'Mount Toubkal Summit (Standard Route)',
    duration: '2 days / 1 night',
    difficulty: 'Moderate-Challenging',
    distance: '~20 km round trip',
    elevation: '4,167m summit',
    icon: Mountain,
    price: 'From 2,000 MAD per person (guided)',
    description:
      'The classic ascent of North Africa\'s highest peak. Day 1: Hike from Imlil (1,740m) through walnut groves to the Toubkal Refuge (3,207m) in 5-6 hours. Day 2: Early summit push via the south cwm, reaching the top in 3-4 hours. Non-technical but steep and exposed near the summit.',
    highlights: ['North Africa\'s highest peak', 'Overnight at mountain refuge', 'Panoramic summit views to the Sahara', 'Berber village trail'],
  },
  {
    name: 'Toubkal Circuit',
    duration: '5-7 days',
    difficulty: 'Challenging',
    distance: '~70 km',
    elevation: 'Up to 4,167m',
    icon: Route,
    price: 'From 5,000 MAD per person (guided)',
    description:
      'Full circumnavigation of the Toubkal massif via the Azzaden Valley, Lac d\'Ifni, and remote Berber settlements before summiting. Showcases the full diversity of the High Atlas from verdant valleys to glacial lakes. Nights in gites and refuges.',
    highlights: ['Lac d\'Ifni (2,295m)', 'Azzaden Valley', 'Multiple high passes', 'Remote Berber villages'],
  },
  {
    name: 'M\'Goun Traverse',
    duration: '4-6 days',
    difficulty: 'Challenging',
    distance: '~55 km',
    elevation: 'Up to 4,068m',
    icon: Route,
    price: 'From 4,500 MAD per person (guided)',
    description:
      'Traverse of Morocco\'s second-highest peak from Ait Bougmez ("Happy Valley") across high plateaus and gorges, descending through the Valley of the Roses to Kelaat M\'Gouna. Less crowded than Toubkal with equally stunning scenery.',
    highlights: ['Second-highest peak in Morocco', 'Ait Bougmez Happy Valley', 'Valley of the Roses', 'Nomadic shepherds'],
  },
  {
    name: 'Ourika Valley Day Hike',
    duration: '1 day',
    difficulty: 'Easy-Moderate',
    distance: '~8 km',
    elevation: 'Up to 1,500m',
    icon: Footprints,
    price: 'From 300 MAD per person (guided)',
    description:
      'The most accessible Atlas experience from Marrakech (45 minutes). Follow the Ourika River through seven waterfalls, Berber villages, and terraced gardens. Well-marked and family-friendly with mint tea stops along the way.',
    highlights: ['Seven waterfalls', 'Berber house visits', 'Traditional lunch option', '45 minutes from Marrakech'],
  },
  {
    name: 'Jebel Saghro Circuit',
    duration: '4-5 days',
    difficulty: 'Moderate',
    distance: '~50 km',
    elevation: 'Up to 2,712m',
    icon: Sun,
    price: 'From 3,500 MAD per person (guided)',
    description:
      'Desert mountain trek between the High Atlas and the Sahara. Volcanic rock formations, vast plateaus, and semi-nomadic Ait Atta Berber camps. The ideal winter trek when the High Atlas is snow-covered. Dramatic, otherworldly landscape.',
    highlights: ['Winter trekking option', 'Volcanic landscapes', 'Nomadic Berber camps', 'Desert-mountain scenery'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KEY DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const keyDestinations = [
  {
    name: 'Imlil',
    icon: Building,
    type: 'Gateway Village',
    description:
      'The main trailhead for Toubkal and the most popular High Atlas trekking base. This Berber village at 1,740m sits 90 minutes from Marrakech, with guesthouses, gear shops, guide offices, and a Saturday souk. Mule trails fan out into the mountains in every direction.',
    mustDo: ['Book a certified mountain guide', 'Visit the Saturday souk', 'Stay in a traditional gite', 'Hike to Armed village'],
  },
  {
    name: 'Ourika Valley',
    icon: TreeDeciduous,
    type: 'Day Trip Valley',
    description:
      'The closest Atlas experience to Marrakech (45 minutes). The valley follows the Ourika River through Berber villages to the Setti Fatma waterfalls. Lush and green with terraced gardens, fruit stalls, and pottery cooperatives. Popular with tourists and locals escaping summer heat.',
    mustDo: ['Hike to Setti Fatma waterfalls', 'Visit an argan oil cooperative', 'Eat trout at a riverside restaurant', 'Explore the Berber market'],
  },
  {
    name: 'Ait Bougmez Valley',
    icon: Compass,
    type: 'Remote Valley',
    description:
      'The "Happy Valley" at 1,800m, surrounded by 3,000m+ peaks. Far less visited than Imlil, offering a genuine glimpse of traditional mountain life. Starting point for the M\'Goun traverse and several multi-day treks through welcoming Berber communities.',
    mustDo: ['Walk through the barley fields', 'Visit the dinosaur footprints', 'Trek to the Agouti granaries', 'Stay with a Berber family'],
  },
  {
    name: 'Ouzoud Falls',
    icon: Sparkles,
    type: 'Natural Wonder',
    description:
      'Morocco\'s most spectacular waterfall, plunging 110 meters into a red-rock gorge. About 2.5 hours from Marrakech in the Middle Atlas. Barbary macaques live in surrounding olive groves. Boat rides, natural swimming pools, and sunset rainbows make this unforgettable.',
    mustDo: ['Boat ride at the base', 'Swim in the natural pools', 'Spot Barbary macaques', 'Watch sunset rainbows'],
  },
  {
    name: 'Tafraoute',
    icon: Camera,
    type: 'Anti-Atlas Hub',
    description:
      'A small town in a valley of pink granite boulders in the Anti-Atlas. Famous for painted rocks by Belgian artist Jean Verame and almond blossoms in February. The Ameln Valley has over 25 cliff-clinging Berber villages. The base for exploring Morocco\'s least-visited mountain range.',
    mustDo: ['See the painted rocks', 'Visit during almond blossom season', 'Explore Ameln Valley villages', 'Hike Jebel Lkest'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodationTypes = [
  {
    type: 'Mountain Gite (Refuge)',
    icon: Building,
    price: 'From 150 MAD per night',
    description:
      'Basic mountain lodges run by local Berber families offering simple rooms with mattresses on the floor, shared bathrooms, and home-cooked tagine or couscous. The standard accommodation on multi-day treks. Blankets provided but bring a sleeping bag liner for comfort.',
    bestFor: 'Multi-day treks, authentic experience, budget travelers',
  },
  {
    type: 'Toubkal Refuge (CAF/NFMG)',
    icon: Mountain,
    price: 'From 200 MAD per night',
    description:
      'The main refuge on the Toubkal trail at 3,207m, managed by the National Federation of Mountain Guides. Bunk beds, basic meals, and toilet facilities. Very busy in peak season (April-June). Advance booking recommended.',
    bestFor: 'Toubkal summit attempt, one-night stays',
  },
  {
    type: 'Village Guesthouse (Riad)',
    icon: Star,
    price: 'From 400 MAD per night',
    description:
      'Upgraded guesthouses in Imlil, Ourika, and Ait Bougmez with private rooms, en-suite bathrooms, hot showers, and terraces with mountain views. Excellent home-cooked meals. A step up from basic gites while retaining mountain village atmosphere.',
    bestFor: 'Comfort-seeking trekkers, couples, base camp stays',
  },
  {
    type: 'Luxury Mountain Lodge',
    icon: Award,
    price: 'From 2,500 MAD per night',
    description:
      'High-end properties like Kasbah du Toubkal and Kasbah Tamadot offering luxury rooms, gourmet dining, spa facilities, heated pools, and private guided treks. Seasonal pricing applies with peak rates in spring and autumn.',
    bestFor: 'Luxury travelers, honeymoons, comfort with mountain access',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  { category: 'Footwear & Clothing', items: ['Sturdy hiking boots (broken in)', 'Moisture-wicking base layers', 'Warm fleece or down jacket', 'Waterproof shell jacket', 'Sun hat, beanie, and gloves', 'Thick socks (3+ pairs)'] },
  { category: 'Gear', items: ['Daypack (30-40L)', 'Headlamp with spare batteries', 'Trekking poles', 'Sleeping bag liner', 'Water bottles (2-3L)', 'Sunglasses with UV protection'] },
  { category: 'Health & Essentials', items: ['Sunscreen SPF 50+ and first aid kit', 'Blister plasters and personal meds', 'Altitude sickness medication (Diamox)', 'Cash (MAD) and offline maps', 'Snacks, toilet paper, hand sanitizer', 'Portable power bank'] },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WILDLIFE
   ═══════════════════════════════════════════════════════════════ */

const wildlife = [
  { name: 'Barbary Macaque', where: 'Middle Atlas cedar forests (Azrou, Ifrane)', status: 'Endangered', description: 'The only wild primate in Africa north of the Sahara. Populations thrive in the cedar forests around Azrou. They are habituated to visitors but should not be fed.' },
  { name: 'Barbary Sheep (Aoudad)', where: 'High Atlas rocky slopes', status: 'Vulnerable', description: 'A stocky, sure-footed wild sheep found on remote rocky slopes above 2,500m. Rarely seen but their tracks are common on the Toubkal and M\'Goun routes.' },
  { name: 'Golden Eagle', where: 'Throughout the Atlas ranges', status: 'Protected', description: 'Morocco\'s most majestic raptor. Pairs nest on cliff ledges throughout the High and Anti-Atlas. Often spotted soaring on thermals above the valleys.' },
  { name: 'Barbary Ground Squirrel', where: 'Anti-Atlas, lower Atlas slopes', status: 'Common', description: 'A charming, striped ground squirrel found in rocky terrain. Often seen near picnic spots and villages, especially in the Anti-Atlas.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Certified mountain guide (per day)', price: 'From 500 MAD', note: 'Required for Toubkal; covers navigation and logistics' },
  { service: 'Mule and muleteer (per day)', price: 'From 300 MAD', note: 'Carries up to 40kg of gear on trekking routes' },
  { service: 'Toubkal 2-day guided trek', price: 'From 2,000 MAD', note: 'Per person, includes guide, meals, refuge' },
  { service: 'Gite accommodation (per night)', price: 'From 150 MAD', note: 'Basic room, dinner and breakfast included' },
  { service: 'Toubkal Refuge (per night)', price: 'From 200 MAD', note: 'Bunk bed and basic meals at 3,207m' },
  { service: 'Village guesthouse (per night)', price: 'From 400 MAD', note: 'Private room, en-suite, mountain views' },
  { service: 'Luxury lodge (per night)', price: 'From 2,500 MAD', note: 'Kasbah du Toubkal, Kasbah Tamadot level' },
  { service: 'Ourika Valley day trip (guided)', price: 'From 300 MAD', note: 'From Marrakech with transport and guide' },
  { service: 'Transfer Marrakech to Imlil', price: 'From 350 MAD', note: 'Private taxi, 90-minute drive' },
  { service: 'Grand taxi to Imlil (shared)', price: 'From 50 MAD', note: 'Per person from Marrakech' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAtlasMountainsPage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Atlas Mountains Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Hiking &amp; Adventure
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Atlas Mountains Morocco:
            <br className="hidden md:block" /> Complete Hiking &amp; Travel Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the 4,167m summit of Mount Toubkal to ancient Berber villages nestled
            in green valleys. Your definitive guide to trekking, exploring, and experiencing
            Morocco&apos;s greatest mountain range.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why the Atlas Mountains Should Be on Every Morocco Itinerary
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Atlas Mountains are the spine of Morocco, a wall of rock and snow separating
                the fertile coastal plains from the Sahara Desert. Stretching over 2,500 kilometers,
                the Atlas divides into three distinct ranges: the High Atlas, the Middle Atlas, and the
                Anti-Atlas, each with its own character, ecology, and appeal.
              </p>
              <p>
                For travelers, the Atlas Mountains offer towering peaks, deep gorges, terraced valleys,
                and Berber villages where life has changed little in centuries. Whether you are a serious
                trekker aiming for Toubkal&apos;s summit, a day-tripper exploring the Ourika Valley, or a
                photographer chasing light on Anti-Atlas granite, these mountains deliver.
              </p>
              <p>
                The Amazigh (Berber) people have inhabited these mountains for thousands of years, and
                their hospitality is legendary. A night in a mountain gite, sharing tagine and mint tea
                by a wood fire, is one of Morocco&apos;s most memorable experiences. The mountains are
                not just scenery. They are a living culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Ranges ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            High Atlas vs. Middle Atlas vs. Anti-Atlas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has three distinct Atlas ranges. Each offers a completely different landscape, altitude, and experience.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {atlasRanges.map((range) => {
              const RangeIcon = range.icon;
              return (
                <div key={range.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <RangeIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {range.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{range.elevation}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{range.description}</p>
                  <div className="space-y-2 mb-4">
                    {range.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {h}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg space-y-1">
                    <p className="text-xs text-[var(--text-primary)]">
                      <span className="font-semibold">Best for:</span> {range.bestFor}
                    </p>
                    <p className="text-xs text-[var(--text-primary)]">
                      <span className="font-semibold">Best time:</span> {range.bestTime}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mount Toubkal Summit Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Mount Toubkal Summit Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            North Africa&apos;s highest peak at 4,167 meters. Here is everything you need to know to reach the summit.
          </p>

          <div className="space-y-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Day 1: Imlil to Toubkal Refuge (5-6 hours)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Start from Imlil (1,740m) early morning. Climb through walnut groves, past Armed village (1,900m),
                and up a rocky valley following the Mizane River. The final approach to the Toubkal Refuge (3,207m)
                is a steady scree climb. Mules carry heavy gear. Arrive by early afternoon and rest for summit day.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Footprints className="w-3 h-3 text-[var(--color-accent)]" /> ~10 km</span>
                <span className="flex items-center gap-1"><Mountain className="w-3 h-3 text-[var(--color-accent)]" /> +1,467m elevation</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" /> 5-6 hours</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Day 2: Summit Push and Descent (7-9 hours total)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Wake at 5:00 AM for a pre-dawn departure. The trail climbs steeply through the south cwm over loose
                scree. The final 500m of elevation gain is a relentless zigzag in thin air. The summit pyramid is
                marked with a triangulation pillar with views stretching to the Sahara and the Atlantic. Descend to
                the refuge, then continue to Imlil by mid-afternoon.
              </p>
              <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Footprints className="w-3 h-3 text-[var(--color-accent)]" /> ~10 km</span>
                <span className="flex items-center gap-1"><Mountain className="w-3 h-3 text-[var(--color-accent)]" /> +960m / -2,427m</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" /> 7-9 hours</span>
              </div>
            </div>

            <div className="card-moroccan p-6 border-l-4 border-[var(--color-gold)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Important Safety Notes
                  </h3>
                  <ul className="space-y-1 text-xs text-[var(--text-secondary)]">
                    <li>A certified mountain guide is legally required for Toubkal.</li>
                    <li>In winter (November-April), crampons and an ice axe are essential above 3,000m.</li>
                    <li>Altitude sickness can affect anyone above 3,000m. Ascend slowly and hydrate well.</li>
                    <li>Weather changes rapidly. Carry waterproof layers even on clear days.</li>
                    <li>Start early on summit day to avoid afternoon clouds and wind.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trekking Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Trekking Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From gentle day walks to week-long traverses, the Atlas Mountains offer routes for every level.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person and may vary by season, group size, and operator. Seasonal pricing applies during peak months.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trekkingRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RouteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--text-muted)] mt-1">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{route.duration}</span>
                        <span className="flex items-center gap-1"><Mountain className="w-3 h-3" />{route.elevation}</span>
                        <span className="flex items-center gap-1"><Footprints className="w-3 h-3" />{route.distance}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {route.difficulty}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {route.price}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{route.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {route.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Key Destinations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Must-Visit Atlas Destinations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains are far more than just Toubkal. These are the essential places to experience the full range of mountain Morocco.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {keyDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {dest.name}
                      </h3>
                      <span className="text-xs text-[var(--color-gold)] font-medium">{dest.type}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {dest.mustDo.map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <Star className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Hike ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit the Atlas Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The ideal time depends on your destination and activity. Here is a season-by-season breakdown.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-green-600" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Spring (March - May)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best overall season. Valleys are green with wildflowers, almond and cherry trees
                blossom, and temperatures are comfortable (15-25 C in valleys, 5-15 C at altitude).
                Snow recedes from Toubkal by late April. Busiest but with good reason.
              </p>
              <div className="flex items-center gap-1 text-xs text-green-600 font-medium">
                <CheckCircle className="w-3 h-3" /> Peak hiking season
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Summer (June - August)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hot at lower elevations (35 C+) but pleasant above 3,000m. Ourika Valley and Imlil
                popular with Moroccans escaping city heat. Toubkal is snow-free and at its most
                accessible. Hydration is critical.
              </p>
              <div className="flex items-center gap-1 text-xs text-amber-500 font-medium">
                <CheckCircle className="w-3 h-3" /> Good for high-altitude treks
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <TreeDeciduous className="w-5 h-5 text-orange-600" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Autumn (September - November)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Excellent trekking season. September and October are dry and warm with fewer crowds.
                Walnut harvest in Imlil valley in October. Exceptional photography light. First snows
                arrive on the highest peaks by late November.
              </p>
              <div className="flex items-center gap-1 text-xs text-orange-600 font-medium">
                <CheckCircle className="w-3 h-3" /> Excellent, fewer crowds
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Snowflake className="w-5 h-5 text-blue-500" />
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Winter (December - February)
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                High Atlas snow-covered above 2,000m. Toubkal requires crampons, ice axes, and
                experience. Lower valleys remain accessible. Anti-Atlas and Jebel Saghro ideal for
                winter trekking. Oukaimeden ski resort operates December to March.
              </p>
              <div className="flex items-center gap-1 text-xs text-blue-500 font-medium">
                <Snowflake className="w-3 h-3" /> Winter mountaineering / low-altitude treks
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay in the Atlas Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From basic mountain refuges to luxury kasbahs, the Atlas offers accommodation for every budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates. Seasonal pricing applies during peak trekking months (April-June, September-October) and holiday periods.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {accommodationTypes.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{acc.price}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{acc.description}</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <Users className="w-3 h-3 text-[var(--color-gold)]" />
                    <span className="font-medium">Best for:</span> {acc.bestFor}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Atlas Mountains Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to budget for trekking, accommodation, transport, and guides in the Atlas Mountains.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Peak season (April-June, September-October) and holiday periods may see increases of 20-30%.
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

      {/* ── Wildlife ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Binoculars className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Atlas Mountains Wildlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains are home to several endemic and endangered species. Keep your eyes open on the trail.
          </p>

          <div className="space-y-4">
            {wildlife.map((animal) => (
              <div key={animal.name} className="card-moroccan p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {animal.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium shrink-0 ml-4">
                    {animal.status}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2">{animal.description}</p>
                <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                  <MapPin className="w-3 h-3 text-[var(--color-accent)]" />
                  {animal.where}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for Atlas Mountains Hiking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A complete packing checklist for Atlas Mountains treks, whether a day hike or a week-long expedition.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingList.map((cat) => (
              <div key={cat.category} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3 uppercase tracking-wider">
                  {cat.category}
                </h3>
                <div className="space-y-2">
                  {cat.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Berber Villages & Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Berber Villages &amp; Mountain Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Amazigh (Berber) people are the soul of the Atlas Mountains. A certified guide opens doors to authentic experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Homestays &amp; Village Life
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Many families offer homestays: traditional rooms with thick carpets, home-cooked tagine, bread from
                communal ovens. From 150-300 MAD per person with dinner and breakfast. Weekly souks (Imlil Saturday,
                Ourika Monday) offer carpets, honey, walnuts, and handmade pottery. Dress modestly, ask before
                photographing, and remove shoes when entering homes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Hiring a Certified Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Only hire NFMG-certified guides (from 500 MAD per day). They handle navigation, safety, mule
                logistics, gite bookings, and cultural interpretation. Required for Toubkal, recommended for all
                multi-day treks. Find guides at the Bureau des Guides in Imlil or through Marrakech agencies.
                Tip 100-200 MAD per day for guides, 50-100 MAD for muleteers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about visiting and trekking in the Atlas Mountains.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
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
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco adventure with these related guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/day-trips-from-marrakech" className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Marrakech
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Ourika Valley, Ouzoud Falls, Imlil, and more accessible mountain excursions from the Red City.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-3 font-medium">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link href="/morocco-hiking-guide" className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Footprints className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Hiking Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                Complete hiking guide covering trails, difficulty levels, gear, and safety across all of Morocco.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-3 font-medium">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link href="/morocco-photography-locations" className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Camera className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Photography Locations
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                The best spots for photography in Morocco, including Atlas Mountain vistas and Berber villages.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-3 font-medium">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>

            <Link href="/morocco-surfing-guide" className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Compass className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Surfing Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">
                From Atlas mountain treks to Atlantic coast waves. Combine a mountain and surf adventure in Morocco.
              </p>
              <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-3 font-medium">
                Read guide <ArrowRight className="w-3 h-3" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Mountain className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Explore the Atlas Mountains?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Whether summiting Toubkal, exploring Berber villages, or escaping to the mountains
            for a day, the Atlas delivers an unforgettable experience. Start planning today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/day-trips-from-marrakech" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-medium">
              Day Trips from Marrakech <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/morocco-hiking-guide" className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-medium">
              Full Hiking Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

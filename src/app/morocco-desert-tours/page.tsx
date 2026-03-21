import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Sun,
  Clock,
  Info,
  ArrowRight,
  Compass,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Moon,
  Tent,
  Mountain,
  Camera,
  Luggage,
  Calendar,
  Sunrise,
  MessageCircleQuestion,
  Navigation,
  Flame,
  Eye,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-desert-tours`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Desert Tours 2026 | Merzouga, Zagora, Erg Chebbi & Sahara Guide',
  description:
    'Complete guide to Morocco desert tours: Merzouga vs Zagora, Erg Chebbi vs Erg Chigaga dunes, camel trekking, 4x4 excursions, luxury and budget desert camps, 2-day to 4-day Sahara itineraries from Marrakech, Draa Valley, Dades Gorge, best season, packing list, and pricing from 800 MAD.',
  keywords: [
    'Morocco desert tour',
    'Merzouga desert tour',
    'Zagora desert tour',
    'Erg Chebbi camel trek',
    'Erg Chigaga desert camp',
    'Sahara desert Morocco',
    'Morocco camel trekking',
    'luxury desert camp Morocco',
    'Marrakech to Sahara tour',
    '3 day desert tour Morocco',
    'Morocco 4x4 desert excursion',
    'Dades Gorge tour',
    'Draa Valley Morocco',
    'overnight desert camp Morocco',
    'Morocco desert tour price 2026',
    'best time Sahara Morocco',
    'Morocco desert glamping',
    'Sahara sunrise camel ride',
  ],
  openGraph: {
    title: 'Morocco Desert Tours 2026 | Merzouga, Zagora, Erg Chebbi & Sahara Guide',
    description:
      'Plan your Sahara desert adventure: Merzouga vs Zagora comparison, camel treks, luxury camps, 4x4 tours, multi-day itineraries from Marrakech through Dades Gorge and Draa Valley, pricing from 800 MAD, and expert tips for the desert.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-camel-caravan-sahara.webp`,
        width: 1200,
        height: 630,
        alt: 'Camel caravan crossing golden Sahara sand dunes at sunset in Merzouga, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Desert Tours 2026 | Sahara Camel Treks, Camps & Itineraries',
    description:
      'Merzouga vs Zagora, Erg Chebbi vs Erg Chigaga, camel trekking, luxury and budget camps, 2-day to 4-day itineraries from Marrakech, and everything you need for the Sahara.',
    images: [`${BASE_URL}/images/hero-camel-caravan-sahara.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How many days do I need for a Morocco desert tour?',
    a: 'A minimum of 2 days/1 night gets you to Zagora with a basic desert camp stay. For Merzouga and Erg Chebbi, you need at least 3 days/2 nights from Marrakech. A 4-day trip allows proper time at Dades Gorge, the Draa Valley, and sunrise/sunset camel rides without rushing. Most travelers say 3 days is the sweet spot.',
  },
  {
    q: 'Is the camel ride painful or uncomfortable?',
    a: 'The ride takes 60-90 minutes each way to reach the camp from the dune edge. Camels sway side-to-side, which can feel awkward at first. Wear long trousers to prevent chafing, and grip the front handle firmly when the camel stands up or sits down (those are the most jarring moments). Most people adapt within 10 minutes. If you have back problems, ask about 4x4 transfers to the camp instead.',
  },
  {
    q: 'What is the difference between Erg Chebbi and Erg Chigaga?',
    a: 'Erg Chebbi (near Merzouga) has dunes up to 150 meters tall, is easier to reach, and has more camp options ranging from budget to ultra-luxury. Erg Chigaga (near M\'Hamid) has wider, flatter dune fields, fewer tourists, and a more remote feel. Chigaga requires a 4x4 to access (no paved road), while Chebbi is reachable by regular vehicle. Choose Chebbi for convenience and towering dunes; choose Chigaga for solitude.',
  },
  {
    q: 'Are luxury desert camps worth the extra cost?',
    a: 'Luxury camps (from 2,500 MAD per person) offer en-suite bathrooms with hot showers, proper beds with quality linens, electricity, full-course dinners with wine, and private terraces facing the dunes. Budget camps (from 300 MAD) have shared bathrooms, foam mattresses on the floor, and basic tagine dinners. The sunrise and stargazing are identical at both. If comfort after a long day of driving matters to you, the upgrade is significant.',
  },
  {
    q: 'Can I do a desert tour in summer?',
    a: 'You can, but temperatures reach 45-50 degrees Celsius during the day from June to August. Most reputable tour operators still run trips year-round, but activities shift to early morning and late evening. Many camps have air-conditioned common areas. If summer is your only option, book a luxury camp with proper cooling and plan camel rides exclusively around sunrise.',
  },
  {
    q: 'How do I avoid scams on Morocco desert tours?',
    a: 'Book directly with established operators who have consistent online reviews across multiple platforms. Avoid anyone who approaches you at bus stations or in Jemaa el-Fnaa offering "special deals." Get the full itinerary in writing before paying, including camp name, meal inclusions, and vehicle type. Pay a deposit (not full amount) upfront, with the balance after day one. If a price seems too low (under 600 MAD for 3 days), the operator is cutting corners on food, camp quality, or driver pay.',
  },
  {
    q: 'Do I need a guide or can I drive to the desert myself?',
    a: 'You can drive yourself to Merzouga on paved roads (N10 highway). However, a guide adds massive value: they handle the route through the Atlas passes, know the best photo stops, arrange the camp and camel logistics, and drive on sandy tracks you should not attempt in a rental car. Self-driving to Erg Chigaga is not recommended at all because the last 50 km is unmarked sand track requiring a true 4x4 and desert navigation experience.',
  },
  {
    q: 'What should I pack for an overnight desert camp?',
    a: 'Bring a warm jacket or fleece (desert nights drop to 5-10 degrees Celsius even in spring), a headlamp or torch, sunscreen, sunglasses, a scarf for wind/sand protection, comfortable closed-toe shoes, toiletries, and a portable battery bank for your phone. Leave large suitcases in Marrakech and bring only an overnight bag. Luxury camps provide towels and toiletries; budget camps provide blankets only.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Desert Tours 2026 — Merzouga, Zagora, Erg Chebbi & Sahara Guide',
  description:
    'Complete guide to Morocco desert tours covering Merzouga, Zagora, Erg Chebbi, Erg Chigaga, camel trekking, 4x4 excursions, luxury and budget camps, multi-day itineraries, and practical planning advice.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-camel-caravan-sahara.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Desert Tours', item: PAGE_URL },
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
   DATA: MERZOUGA vs ZAGORA COMPARISON
   ================================================================ */

const desertComparison = [
  {
    feature: 'Distance from Marrakech',
    merzouga: '560 km (9-10 hours driving)',
    zagora: '360 km (6-7 hours driving)',
  },
  {
    feature: 'Dune Field',
    merzouga: 'Erg Chebbi — dunes up to 150 m tall',
    zagora: 'Erg Chigaga (50 km past Zagora) or smaller dunes at Tinfou',
  },
  {
    feature: 'Minimum Trip Length',
    merzouga: '3 days / 2 nights from Marrakech',
    zagora: '2 days / 1 night from Marrakech',
  },
  {
    feature: 'Tourist Volume',
    merzouga: 'Higher — more camps, more organized tours',
    zagora: 'Lower — especially at Erg Chigaga',
  },
  {
    feature: 'Camp Options',
    merzouga: 'Budget to ultra-luxury (50+ camps)',
    zagora: 'Fewer options, mostly mid-range and basic',
  },
  {
    feature: 'Road Access',
    merzouga: 'Fully paved to the dune edge',
    zagora: 'Paved to Zagora; 4x4 only to Erg Chigaga',
  },
  {
    feature: 'Best For',
    merzouga: 'First-timers, photographers, luxury seekers',
    zagora: 'Short trips, off-the-beaten-path travelers',
  },
];

/* ================================================================
   DATA: MULTI-DAY ITINERARIES
   ================================================================ */

const itineraries = [
  {
    days: '2-Day / 1-Night',
    destination: 'Zagora / Draa Valley',
    icon: Clock,
    stops: [
      'Day 1: Marrakech — Tizi n\'Tichka Pass (2,260 m) — Aït Benhaddou — Ouarzazate — Draa Valley — Zagora — camel ride to desert camp',
      'Day 2: Sunrise over dunes — camel ride back — Ouarzazate — return to Marrakech by evening',
    ],
    price: 'From 800 MAD per person (group) / from 2,500 MAD private',
    note: 'The fastest Sahara option, but long driving days (6-7 hours each way). Good for travelers with limited time. You see the Draa Valley but skip Dades Gorge.',
  },
  {
    days: '3-Day / 2-Night',
    destination: 'Merzouga / Erg Chebbi',
    icon: Compass,
    stops: [
      'Day 1: Marrakech — Tizi n\'Tichka — Aït Benhaddou — Ouarzazate — Dades Gorge (overnight)',
      'Day 2: Dades Gorge — Todra Gorge — Erfoud — Merzouga — camel trek to Erg Chebbi camp (overnight in desert)',
      'Day 3: Sunrise camel ride — Merzouga — Erfoud — Ouarzazate or direct to Marrakech',
    ],
    price: 'From 1,200 MAD per person (group) / from 4,000 MAD private',
    note: 'The most popular itinerary. Covers all the highlights: kasbahs, gorges, and the full Erg Chebbi experience. Day 3 is a long drive back.',
  },
  {
    days: '4-Day / 3-Night',
    destination: 'Merzouga + Dades + Draa',
    icon: Navigation,
    stops: [
      'Day 1: Marrakech — Tizi n\'Tichka — Aït Benhaddou — Ouarzazate — Skoura oasis (overnight)',
      'Day 2: Dades Gorge — Todra Gorge — Erfoud — Merzouga — camel trek to desert camp (overnight)',
      'Day 3: Sunrise — morning in Merzouga (optional sandboarding, quad, or nomad visit) — Rissani — N\'Kob — Draa Valley (overnight)',
      'Day 4: Draa Valley — Agdz — Ouarzazate — Tizi n\'Tichka — Marrakech',
    ],
    price: 'From 1,800 MAD per person (group) / from 5,500 MAD private',
    note: 'The recommended itinerary for anyone who can spare the time. No day feels rushed. You get both the Dades and Draa Valleys, a full morning at the dunes, and a different return route so you do not repeat scenery.',
  },
];

/* ================================================================
   DATA: CAMP TIERS
   ================================================================ */

const campTiers = [
  {
    tier: 'Budget / Standard Camp',
    icon: Tent,
    price: 'From 300 MAD per person',
    sleeping: 'Shared Berber tents, foam mattresses on the floor, heavy blankets',
    bathroom: 'Shared (usually 2-3 stalls for the camp), basic toilets',
    meals: 'Tagine dinner, bread, mint tea, simple breakfast',
    extras: 'Campfire with drum music, basic stargazing',
    electricity: 'Limited or none — bring a battery bank',
    bestFor: 'Backpackers, budget travelers, those who prioritize the experience over amenities',
  },
  {
    tier: 'Mid-Range Camp',
    icon: Moon,
    price: 'From 800 MAD per person',
    sleeping: 'Private tents with real beds, sheets, and pillows',
    bathroom: 'Private or semi-private, some with hot water',
    meals: 'Multi-course dinner, breakfast buffet, afternoon tea on arrival',
    extras: 'Berber music, sandboarding, optional quad biking (extra cost)',
    electricity: 'Solar-charged outlets for phone charging',
    bestFor: 'Most travelers — solid balance of comfort and authenticity',
  },
  {
    tier: 'Luxury / Glamping Camp',
    icon: Star,
    price: 'From 2,500 MAD per person',
    sleeping: 'Spacious furnished tents with king beds, rugs, and private terraces',
    bathroom: 'Full en-suite with hot shower, flush toilet, sink',
    meals: 'Gourmet multi-course dinner (sometimes with wine), fresh juices, cooked breakfast',
    extras: 'Private sunset camel ride, guided stargazing with telescopes, spa treatments at some camps',
    electricity: 'Full power, some tents have air conditioning',
    bestFor: 'Couples, honeymooners, luxury travelers who want the desert without roughing it',
  },
];

/* ================================================================
   DATA: PACKING LIST
   ================================================================ */

const packingItems = [
  { item: 'Warm jacket or fleece', reason: 'Nights drop to 5-10 degrees C, even in October', icon: Thermometer },
  { item: 'Headlamp or torch', reason: 'Camps have minimal lighting; essential for nighttime walks', icon: Eye },
  { item: 'Scarf or shemagh', reason: 'Protects face and neck from sand and wind', icon: ShieldCheck },
  { item: 'Sunscreen SPF 50+', reason: 'No shade in the dunes — UV exposure is intense', icon: Sun },
  { item: 'Sunglasses with secure fit', reason: 'Sand glare is blinding, especially at sunrise', icon: Sunrise },
  { item: 'Closed-toe shoes + sandals', reason: 'Boots for dune walking; sandals for camp', icon: Mountain },
  { item: 'Small overnight bag', reason: 'Leave main luggage in Marrakech; only bring essentials', icon: Luggage },
  { item: 'Portable battery bank', reason: 'Charging points are scarce at budget and mid-range camps', icon: Flame },
  { item: 'Camera with extra batteries', reason: 'Cold nights drain batteries fast; sunrise is unmissable', icon: Camera },
  { item: 'Toiletries + wet wipes', reason: 'Budget camps have limited water; wet wipes are invaluable', icon: CheckCircle },
];

/* ================================================================
   DATA: SEASONAL GUIDE
   ================================================================ */

const seasons = [
  {
    period: 'October - November',
    rating: 'Best',
    temp: '25-32 C day / 10-15 C night',
    description: 'The ideal window. Warm days, cool nights, minimal wind. Peak season for camps, so book early. Clear skies almost guaranteed.',
  },
  {
    period: 'March - April',
    rating: 'Best',
    temp: '22-30 C day / 8-14 C night',
    description: 'Spring brings similar conditions to autumn. Occasional sandstorms in March, but generally excellent. Wildflowers along the Draa Valley.',
  },
  {
    period: 'December - February',
    rating: 'Good',
    temp: '18-22 C day / 0-8 C night',
    description: 'Comfortable daytime temperatures, but nights can drop near freezing. Bring proper cold-weather layers. Fewer tourists and lower prices. Stargazing is exceptional in winter due to dry, clear air.',
  },
  {
    period: 'May - September',
    rating: 'Challenging',
    temp: '38-50 C day / 20-28 C night',
    description: 'Extreme heat makes daytime activities difficult. Tours still operate, but camel rides shift to sunrise only. Book luxury camps with air conditioning. Prices drop significantly. Not recommended for first-timers.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoDesertToursPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero ── */}
      <section className="relative h-[70vh] min-h-[480px] flex items-end">
        <img
          src="/images/hero-camel-caravan-sahara.webp"
          alt="Camel caravan crossing golden Sahara sand dunes at sunset near Merzouga, Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10 pb-12 md:pb-16">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-white/80 text-sm mb-4">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Desert Tours</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white max-w-3xl leading-tight">
            Morocco Desert Tours
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl font-[family-name:var(--font-heading)]">
            Erg Chebbi dunes, camel treks, overnight Sahara camps, and multi-day itineraries through the Atlas Mountains, Dades Gorge, and Draa Valley.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-6">
            The Sahara Desert Experience
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              The Sahara is the image most people carry when they think of Morocco. A line of camels silhouetted against
              towering golden dunes, a sky full of stars with zero light pollution, and the silence that only a desert
              can deliver. For many travelers, the desert overnight is the single most memorable part of their trip.
            </p>
            <p>
              Morocco&apos;s two main desert destinations are <strong>Erg Chebbi</strong> near Merzouga and <strong>Erg Chigaga</strong> beyond
              Zagora. Both offer camel trekking, overnight camps, and the full Saharan experience, but they differ
              in accessibility, scale, and crowd levels. This guide breaks down exactly how to choose between them,
              what each multi-day itinerary looks like, how much to budget, and what the tours actually involve hour
              by hour.
            </p>
            <p>
              Every route from Marrakech crosses the High Atlas Mountains via the Tizi n&apos;Tichka Pass and passes
              through landscapes that shift from green valleys to red-earth kasbahs to barren hamada before the sand
              sea begins. The journey itself is half the attraction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Merzouga vs Zagora Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Merzouga vs Zagora: Which Desert?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The two main gateways to Morocco&apos;s Sahara offer different experiences. Here is a direct comparison.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Feature</div>
                <div className="p-3 px-4">Merzouga / Erg Chebbi</div>
                <div className="p-3 px-4">Zagora / Erg Chigaga</div>
              </div>
              {desertComparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.feature}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{row.merzouga}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{row.zagora}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-52">
                <img
                  src="/images/hero-merzouga.webp"
                  alt="Towering orange sand dunes of Erg Chebbi at sunrise near Merzouga, Morocco"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-[family-name:var(--font-display)] font-bold text-white">
                  Erg Chebbi, Merzouga
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Erg Chebbi is Morocco&apos;s postcard desert. Dunes tower up to 150 meters and shift color from gold
                  at midday to deep orange at sunset to pink at dawn. The town of Merzouga sits right at the dune
                  edge, so you can literally walk from your hotel into the sand. Over 50 camps operate here,
                  from basic bivouacs to properties with swimming pools. The area also offers sandboarding,
                  quad biking, and visits to Khamlia village for Gnawa music. The downside: popularity means
                  you will share the sunrise with other groups.
                </p>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="relative h-52">
                <img
                  src="/images/hero-desert.webp"
                  alt="Vast open dune field of Erg Chigaga in southern Morocco with no other tourists visible"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-xl font-[family-name:var(--font-display)] font-bold text-white">
                  Erg Chigaga, Zagora
                </h3>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Erg Chigaga stretches 40 km long and 15 km wide, making it Morocco&apos;s largest dune system.
                  Reaching it requires a 4x4 journey across 50 km of rough piste from M&apos;Hamid el Ghizlane,
                  which keeps mass tourism out. Dunes here are lower (40-60 meters) but the isolation is
                  powerful — at night you may be the only camp in sight. The Draa Valley route to Zagora
                  passes through date palm oases and Berber villages that feel untouched. The downside:
                  longer travel time and fewer camp choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Route: Key Stops ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Key Stops Along the Way
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The drive from Marrakech to the desert is packed with landmarks. Here are the highlights you should not skip.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Tizi n&apos;Tichka Pass (2,260 m)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The highest paved pass in North Africa winds through the High Atlas with hairpin turns and
                panoramic views of terraced Berber villages below. The road is well-maintained but narrow in
                sections. Your driver will stop at viewpoints. In winter (December-February), the pass can
                have snow, which adds an hour to the crossing. Stock up on snacks and water at the roadside
                stalls at the summit.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                A&iuml;t Benhaddou (UNESCO)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                This fortified ksar (village) is Morocco&apos;s most photographed kasbah and a UNESCO World Heritage
                Site. It has appeared in Gladiator, Game of Thrones, and Lawrence of Arabia. The ksar sits on a
                hillside overlooking a river, and you can walk through its narrow alleys and climb to the top
                for sweeping views. Allow 45-90 minutes. Entrance is free, but local guides at the gate charge
                from 50 MAD for a walkthrough.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Dades Gorge &amp; Dades Valley
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A river-carved canyon with rust-red walls rising vertically on both sides. The famous serpentine
                road of Dades (the &quot;Road of a Thousand Kasbahs&quot;) features a series of switchbacks that
                make for iconic photos. Small guesthouses line the gorge floor, and an overnight here breaks
                up the drive to Merzouga. Morning light turns the canyon walls deep amber. Hikes range from
                easy riverside walks to challenging scrambles up side canyons.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Todra Gorge
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                A narrow slot canyon where 300-meter limestone walls close in to just 10 meters apart at the
                tightest point. The river runs along the canyon floor, and rock climbers come from across Europe
                to tackle the routes on these walls. A short walk into the canyon from the parking area takes
                20 minutes. The gorge is on the route between Dades and Merzouga, so most tours include a
                30-60 minute stop here.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Draa Valley
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco&apos;s longest river feeds a 200-km palm oasis that stretches from Ouarzazate to Zagora.
                The valley floor is carpeted with date palms, while crumbling kasbahs dot the ridgelines above.
                The N9 road runs through the heart of it, and the scenery rivals anything in southern Morocco.
                Agdz, the gateway town, has excellent small guesthouses. The Draa is on the Zagora route and
                the return leg of 4-day Merzouga itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Day Itineraries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Tour Itineraries from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three proven itineraries ranging from a quick 2-day dash to a relaxed 4-day circuit.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {itineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.days} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] text-white p-4 flex items-center gap-3">
                    <ItinIcon className="w-6 h-6" />
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">
                        {itin.days} — {itin.destination}
                      </h3>
                      <p className="text-sm text-white/80">{itin.price}. Seasonal pricing can change.</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3 mb-4">
                      {itin.stops.map((stop, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                          <ChevronRight className="w-4 h-4 text-[var(--color-gold)] shrink-0 mt-0.5" />
                          <span>{stop}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        <Info className="w-4 h-4 inline text-[var(--color-accent)] mr-1" />
                        {itin.note}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Camel Trekking Details ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camel Trekking: What to Expect
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The camel ride is the defining moment of a Morocco desert tour. Here is what actually happens.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Ride to Camp (Sunset)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                You meet your camel and guide at the dune edge, usually around 4:00-5:00 PM depending on
                the season. The guide helps you mount — camels fold their legs to let you on, then stand
                up back-first (lean back hard during this moment). The caravan walks single-file into the
                dunes for 60-90 minutes. Your guide leads the first camel; the rest follow nose-to-tail.
                The route crests several dune ridges, and the guide stops at a high point for sunset photos.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">
                Included in all desert tour packages. Solo camel rides from 200 MAD for 1 hour.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Evening at Camp
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                After arriving at camp, you settle into your tent, then gather around the fire for mint tea.
                Dinner is served communal-style — usually a tagine or couscous with vegetables. After dinner,
                the camp staff play Berber drums (bendir) and sing traditional songs. At most camps, you can
                climb a nearby dune for stargazing. The Sahara has some of the darkest skies in North Africa,
                and the Milky Way is visible to the naked eye on clear nights. Temperatures drop sharply after
                sundown, so have your warm layers ready.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Sunrise Ride (Morning)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                Your guide wakes the camp around 5:30-6:00 AM. You ride or walk up the tallest nearby dune
                to watch the sun climb over the Algerian border. The light show lasts about 20 minutes — the
                dunes cycle through purple, pink, orange, and finally gold. This is the best photo opportunity
                of the entire trip. After sunrise, you ride back to the dune edge and return to Merzouga or
                Zagora for breakfast and the drive back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4x4 Desert Excursions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            4x4 Desert Excursions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Camels are not the only way in. 4x4 vehicles open up remote areas that are inaccessible on foot or camelback.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Erg Chigaga 4x4 Transfer
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                The 50 km from M&apos;Hamid to Erg Chigaga has no paved road. Experienced drivers navigate by
                landmarks and GPS across stony desert and dry lake beds. The drive takes 2-3 hours and is
                an adventure on its own. This is the only way to reach Chigaga camps.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 1,500 MAD for a round-trip 4x4 transfer per vehicle</p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Merzouga Desert Loop
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                A half-day 4x4 circuit around Erg Chebbi visits a seasonal salt lake (Dayet Srji, which
                attracts flamingos in spring), an abandoned mine, Berber nomad families, and the Gnawa
                music village of Khamlia. Stops include mint tea with nomads and a traditional Gnawa
                music performance.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 400 MAD per person (group) / from 1,200 MAD private vehicle</p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Paris-Dakar Rally Tracks
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                The original Paris-Dakar rally crossed this region, and some operators run adrenaline-focused
                4x4 tours along old rally sections near Merzouga. Expect fast driving over flat hamada desert,
                sharp turns through narrow canyon passages, and plenty of dust.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 600 MAD per person for a half-day rally experience</p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Multi-Day 4x4 Expedition
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                For serious off-road enthusiasts, 5-7 day expeditions run from Ouarzazate through remote
                oases, dried riverbeds, and desert plateaus to Erg Chigaga and back. These trips use Land
                Cruisers or Land Rovers and include wild camping under the stars.
              </p>
              <p className="text-xs text-[var(--color-accent)] font-semibold">From 8,000 MAD per person for 5 days (all-inclusive). Seasonal pricing can change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Camp Tiers ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Camp Types: Budget to Luxury
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Not all desert camps are created equal. Here is what each tier actually provides.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are per person per night in Moroccan Dirhams. Seasonal pricing can change during peak months (October-December, March-April).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campTiers.map((camp) => {
              const CampIcon = camp.icon;
              return (
                <div key={camp.tier} className="card-moroccan p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <CampIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {camp.tier}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-semibold">{camp.price}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm flex-1">
                    {[
                      { label: 'Sleeping', value: camp.sleeping },
                      { label: 'Bathroom', value: camp.bathroom },
                      { label: 'Meals', value: camp.meals },
                      { label: 'Extras', value: camp.extras },
                      { label: 'Electricity', value: camp.electricity },
                    ].map((detail) => (
                      <div key={detail.label}>
                        <span className="font-medium text-[var(--text-primary)]">{detail.label}: </span>
                        <span className="text-[var(--text-secondary)]">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Users className="w-3 h-3 inline mr-1" />
                      Best for: {camp.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Scenes from the Sahara
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-sunrise.webp"
                alt="Golden sunrise over Erg Chebbi sand dunes with long shadows stretching across the desert"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Sunrise at Erg Chebbi</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-camp.webp"
                alt="Berber desert camp with traditional tents and campfire under a starry night sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Desert Camp at Night</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-camel-sunset.webp"
                alt="Silhouette of camel caravan crossing dunes during golden hour in the Moroccan Sahara"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Camel Caravan at Sunset</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Pack ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Packing Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light. Leave your main luggage at your Marrakech hotel and bring only an overnight bag for the desert.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {packingItems.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0 mt-0.5">
                      <PackIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.item}
                      </h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for a Desert Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara&apos;s extremes make timing critical. October-November and March-April are the prime windows.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {seasons.map((season) => (
              <div key={season.period} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {season.period}
                  </h3>
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      season.rating === 'Best'
                        ? 'bg-green-100 text-green-800'
                        : season.rating === 'Good'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-orange-100 text-orange-800'
                    }`}
                  >
                    {season.rating}
                  </span>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">
                  <Thermometer className="w-3.5 h-3.5 inline mr-1" />
                  {season.temp}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{season.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avoiding Scams & Touts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Avoiding Desert Tour Scams
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The desert tour industry has its share of dishonest operators. These red flags will help you book with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                rule: 'Suspiciously low prices',
                text: 'A 3-day tour for under 600 MAD per person means the operator is cutting costs on food, camp quality, or driver wages. Fuel alone for the 1,100 km round trip costs several hundred dirhams. Realistic group pricing starts from 1,200 MAD for 3 days.',
              },
              {
                rule: 'Bus station and square touts',
                text: 'Anyone approaching you at the CTM station, Supratours, or Jemaa el-Fnaa is a commission-based middleman, not the actual tour operator. They add 30-50% markup. Book directly with the company that owns the vehicles and camps.',
              },
              {
                rule: 'No written itinerary',
                text: 'Legitimate operators provide a detailed breakdown: exact stops, camp name, meal inclusions, vehicle type, group size, and cancellation policy. If someone says "trust me, everything is included," walk away.',
              },
              {
                rule: 'Bait-and-switch camps',
                text: 'Some operators promise a luxury camp but deliver a basic one. Ask for the camp name upfront and verify it has independent reviews online. Request photos of the specific tents and bathrooms.',
              },
              {
                rule: 'Full payment demanded upfront',
                text: 'Standard practice is a deposit (30-50%) to secure the booking, with the balance paid after day one or at the camp. Any operator demanding 100% cash upfront with no refund policy is a risk.',
              },
              {
                rule: 'Unscheduled shopping stops',
                text: 'Some drivers earn commissions from carpet shops and fossil dealers. A brief stop is fine if you are interested, but if the driver pressures you to enter shops or makes multiple unannounced stops, the tour has been padded with commission visits.',
              },
            ].map((item) => (
              <div key={item.rule} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.rule}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Tour Pricing Overview
          </h2>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are per person in Moroccan Dirhams. Group tours assume 6-15 travelers. Seasonal pricing can change during peak months.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Group Price (MAD)</div>
                <div className="p-3 px-4">Private Price (MAD)</div>
              </div>
              {[
                { service: '2-day Zagora tour', group: 'From 800', priv: 'From 2,500' },
                { service: '3-day Merzouga tour', group: 'From 1,200', priv: 'From 4,000' },
                { service: '4-day Merzouga + Draa', group: 'From 1,800', priv: 'From 5,500' },
                { service: 'Budget camp upgrade', group: 'Included', priv: 'Included' },
                { service: 'Mid-range camp upgrade', group: 'From +300', priv: 'From +300' },
                { service: 'Luxury camp upgrade', group: 'From +1,500', priv: 'From +1,500' },
                { service: 'Solo camel ride (1 hour)', group: 'From 200', priv: 'From 200' },
                { service: 'Quad biking (1 hour)', group: 'From 350', priv: 'From 350' },
                { service: 'Sandboarding', group: 'From 150', priv: 'From 150' },
              ].map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.group}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.priv}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Desert Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Details that experienced desert travelers know but first-timers often miss.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Bring cash for extras',
                text: 'There are no ATMs between Ouarzazate and Merzouga (a 5-hour stretch). Bring enough cash for tips, drinks, quad biking, and souvenirs. Budget from 300-500 MAD in extra cash beyond the tour cost.',
                icon: DollarSign,
              },
              {
                title: 'Phone signal and WiFi',
                text: 'You will lose mobile signal 30 minutes before reaching Merzouga and regain it in town. Camps have zero signal. Some luxury camps offer satellite WiFi, but it is slow. Prepare to be disconnected for 18-24 hours.',
                icon: AlertTriangle,
              },
              {
                title: 'Motion sickness on mountain roads',
                text: 'The Tichka Pass and Dades Gorge roads have relentless switchbacks. Take motion sickness medication before the drive, sit in the front seat if possible, and keep the window cracked for fresh air.',
                icon: ShieldCheck,
              },
              {
                title: 'Tip your camel guide',
                text: 'The cameleer who leads your group earns very little from the tour company. A tip of from 50-100 MAD per person is standard and deeply appreciated. Hand it to the guide directly, not to the tour leader.',
                icon: Users,
              },
              {
                title: 'Protect your camera gear',
                text: 'Fine Saharan sand gets into everything. Keep your camera in a sealed bag when not shooting. Use a UV filter on your lens as a sacrificial protector. Wipe gear down with a microfiber cloth before changing lenses.',
                icon: Camera,
              },
              {
                title: 'Manage expectations on group tours',
                text: 'Group tours mean shared vehicles with 6-15 strangers, fixed schedules, and photo stops decided by the driver. If you want flexibility to linger at Dades Gorge or skip the fossil shop, book a private tour.',
                icon: Users,
              },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
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
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real questions from travelers planning their first Sahara desert tour.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Sahara Stargazing Guide',
                description: 'Dark sky locations, best months for stargazing, and astronomy tours in the Moroccan Sahara.',
                href: '/morocco-sahara-stargazing',
                icon: Moon,
              },
              {
                title: 'Desert Glamping',
                description: 'Luxury desert camps with en-suite bathrooms, gourmet dining, and private dune experiences.',
                href: '/morocco-desert-glamping',
                icon: Star,
              },
              {
                title: '4x4 Tours Morocco',
                description: 'Off-road adventures from Atlas passes to desert tracks, vehicle options, and expedition planning.',
                href: '/morocco-4x4-tours',
                icon: Compass,
              },
              {
                title: 'Morocco Camping Guide',
                description: 'Wild camping, organized campsites, rooftop tents, and camping gear advice for Morocco.',
                href: '/morocco-camping',
                icon: Tent,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience the Sahara?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8 text-lg">
            From the towering dunes of Erg Chebbi to the remote silence of Erg Chigaga, Morocco&apos;s
            desert delivers moments you will carry for a lifetime. Start planning your desert adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[var(--color-accent)] font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Plan Your Desert Tour <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/desert"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore All Desert Experiences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Compass,
  Train,
  Utensils,
  Bed,
  Camera,
  Sun,
  Sunset,
  Moon,
  Map,
  Luggage,
  CalendarDays,
  Zap,
  Globe,
  Landmark,
  MountainSnow,
  Waypoints,
  Mountain,
  Tent,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco 10 Day Itinerary 2026 | Complete Route from Marrakech to Chefchaouen',
  description:
    'Plan the ultimate 10 days in Morocco with our day-by-day itinerary: Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen. Transport, accommodation, meals, and costs in MAD.',
  keywords: [
    'Morocco 10 day itinerary',
    'Morocco 10 days',
    '10 day Morocco trip',
    'Morocco itinerary 10 days',
    'Marrakech to Chefchaouen itinerary',
    'Morocco travel itinerary',
    'Morocco 10 day route',
    'Morocco Sahara desert itinerary',
    'Marrakech to Sahara to Fes',
    'Morocco 2026 itinerary',
    'best Morocco itinerary',
    'Morocco road trip 10 days',
    'Morocco two weeks',
    'Fes to Chefchaouen day trip',
    'Atlas Mountains to desert',
    'Morocco trip planner',
    'Todra Gorge itinerary',
    'Morocco budget 10 days',
    'Morocco backpacking route',
    'Morocco highlights itinerary',
  ],
  openGraph: {
    title: 'Morocco 10 Day Itinerary 2026 | Complete Route from Marrakech to Chefchaouen',
    description:
      'Day-by-day 10-day Morocco itinerary covering Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen with transport, accommodation, and costs.',
    url: `${BASE_URL}/morocco-itinerary-10-days`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-itinerary.webp`,
        width: 1200,
        height: 630,
        alt: 'Sweeping Moroccan landscape with desert dunes and traditional kasbahs against a golden sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 10 Day Itinerary 2026 | Marrakech to Chefchaouen',
    description:
      'Complete 10-day Morocco itinerary: Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen. Day-by-day plans with costs.',
    images: [`${BASE_URL}/images/hero-morocco-itinerary.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-itinerary-10-days` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-itinerary-10-days`,
  name: 'Morocco 10 Day Itinerary 2026 | Complete Route from Marrakech to Chefchaouen',
  description:
    'Plan the ultimate 10 days in Morocco with a day-by-day itinerary covering Marrakech, Atlas Mountains, Sahara Desert, Todra Gorge, Fes, and Chefchaouen. Includes transport, accommodation, meals, and costs in MAD.',
  url: `${BASE_URL}/morocco-itinerary-10-days`,
  image: `${BASE_URL}/images/hero-morocco-itinerary.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-itinerary-10-days`,
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
      { '@type': 'ListItem', position: 2, name: '10-Day Morocco Itinerary', item: `${BASE_URL}/morocco-itinerary-10-days` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is 10 days enough for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ten days is the sweet spot for a first visit to Morocco. It gives you time to explore Marrakech, cross the Atlas Mountains, spend a night in the Sahara Desert, discover Fes, and visit the blue city of Chefchaouen without feeling rushed. You can comfortably cover the most iconic highlights at a moderate pace.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a 10-day Morocco trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget 10-day trip costs from 6,000 MAD per person excluding flights (hostels, street food, shared transport). Mid-range travelers should budget from 15,000 MAD (riads, restaurants, private transfers). Luxury travelers can expect from 40,000 MAD or more (5-star accommodation, private guides, fine dining). Prices vary by season.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best route for 10 days in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic route runs Marrakech to Atlas Mountains to Sahara Desert to Todra Gorge to Fes to Chefchaouen. This covers the most diverse landscapes and experiences in Morocco: imperial cities, mountains, desert, gorges, and the famous blue city. It works as a one-way route so you do not backtrack.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a tour or travel independently for 10 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both options work well. Independent travel is cheaper and more flexible, but requires more planning especially for the desert section. A private or small-group tour (from 8,000 MAD for 3 days Marrakech to Fes via desert) handles logistics for the trickiest segments. Many travelers book a tour for the desert portion and travel independently for the rest.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for a 10-day Morocco trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March to May and September to November offer the best conditions. Spring brings wildflowers in the Atlas and comfortable desert temperatures. Autumn has warm days and cool nights. Summer is extremely hot in Marrakech and the desert (45+ degrees Celsius). Winter is pleasant in cities but cold in mountains and desert at night.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to fly into one city and out of another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An open-jaw flight (fly into Marrakech, out of Tangier or Fes) saves a full day of backtracking and is highly recommended for this itinerary. If you must use the same airport, budget an extra day to return from Chefchaouen or Fes to Marrakech by bus or domestic flight.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: 10-DAY COST BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { category: 'Accommodation (10 nights)', budget: 'From 2,000 MAD', midRange: 'From 6,000 MAD', luxury: 'From 25,000 MAD' },
  { category: 'Food & Drinks (10 days)', budget: 'From 1,500 MAD', midRange: 'From 4,000 MAD', luxury: 'From 10,000 MAD' },
  { category: 'Transport (all segments)', budget: 'From 1,200 MAD', midRange: 'From 3,000 MAD', luxury: 'From 8,000 MAD' },
  { category: 'Desert Tour (2 days/1 night)', budget: 'From 600 MAD (group)', midRange: 'From 1,500 MAD (private)', luxury: 'From 4,000 MAD (luxury camp)' },
  { category: 'Activities & Entries', budget: 'From 500 MAD', midRange: 'From 1,200 MAD', luxury: 'From 3,000 MAD' },
  { category: 'Guides & Tips', budget: 'From 200 MAD', midRange: 'From 800 MAD', luxury: 'From 2,000 MAD' },
  { category: '10-Day Total (est.)', budget: 'From 6,000 MAD', midRange: 'From 15,000 MAD', luxury: 'From 40,000 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT SEGMENTS
   ═══════════════════════════════════════════════════════════════ */

const transportSegments = [
  { from: 'Marrakech', to: 'Atlas Mountains / Ait Benhaddou', method: 'Private transfer or shared minibus', duration: '3-4 hours', cost: 'From 150 MAD (shared) / 1,200 MAD (private)' },
  { from: 'Ait Benhaddou', to: 'Merzouga (Sahara)', method: 'Desert tour vehicle', duration: '6-7 hours via Todra', cost: 'Included in desert tour' },
  { from: 'Merzouga', to: 'Fes', method: 'Desert tour vehicle or shared minibus', duration: '7-8 hours', cost: 'From 200 MAD (shared) / included in tour' },
  { from: 'Fes', to: 'Chefchaouen', method: 'CTM bus or private transfer', duration: '4 hours', cost: 'From 75 MAD (bus) / 1,500 MAD (private)' },
  { from: 'Chefchaouen', to: 'Tangier / Airport', method: 'CTM bus or grand taxi', duration: '2-3 hours', cost: 'From 60 MAD (bus) / 300 MAD (taxi)' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoItinerary10DaysPage() {
  return (
    <>
      {/* -- JSON-LD -- */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-morocco-itinerary.webp"
          alt="Sweeping Moroccan landscape from Marrakech medina rooftops through Atlas Mountains to golden Sahara dunes at sunset"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
            <CalendarDays className="w-4 h-4" />
            <span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            Morocco 10-Day Itinerary
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            The definitive day-by-day route from Marrakech through the Atlas Mountains and Sahara Desert to Fes and Chefchaouen. Transport, meals, accommodation, and costs included.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> 6 Destinations
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" /> Full Cost Breakdown
            </span>
            <span className="flex items-center gap-1.5">
              <Tent className="w-4 h-4" /> Desert Night Included
            </span>
          </div>
        </div>
      </section>

      {/* -- Breadcrumb -- */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-primary)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3 h-3" />
            <li className="text-[var(--text-primary)] font-medium">10-Day Morocco Itinerary</li>
          </ol>
        </div>
      </nav>

      {/* -- Overview Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              The Classic Morocco Circuit
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Ten days is the ideal duration for a first trip to Morocco. This route takes you from the vibrant souks of
              Marrakech over the High Atlas Mountains, through the stunning Sahara Desert, into the ancient medina of Fes,
              and finishes in the blue-washed streets of Chefchaouen. It is a one-way route, so you never backtrack. Fly
              into Marrakech and out of Tangier (or Fes) for maximum efficiency.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { icon: Landmark, label: 'D1-2', place: 'Marrakech' },
              { icon: Mountain, label: 'D3', place: 'Atlas & Ait Benhaddou' },
              { icon: Tent, label: 'D4-5', place: 'Sahara Desert' },
              { icon: MountainSnow, label: 'D6', place: 'Todra Gorge' },
              { icon: Building, label: 'D7-8', place: 'Fes' },
              { icon: Camera, label: 'D9-10', place: 'Chefchaouen & Depart' },
            ].map((stop) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.label} className="card-moroccan p-4 text-center">
                  <StopIcon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-xs font-semibold text-[var(--color-accent)]">{stop.label}</p>
                  <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stop.place}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          DAY-BY-DAY ITINERARY
          ══════════════════════════════════════════════════════════════ */}

      {/* -- Days 1-2: Marrakech -- */}
      <section id="days-1-2" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Landmark className="w-4 h-4" /> Days 1-2
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Marrakech &mdash; The Red City
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Ease into Morocco with two full days exploring the sensory overload of Marrakech. Palaces, souks, gardens, and some of the best food on the continent.
            </p>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 1: Arrival &amp; Southern Medina
              </h3>
            </div>
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning &amp; Afternoon</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Arrive at Marrakech Menara Airport and transfer to your riad (pre-book from 150 MAD). After settling in, walk to the Bahia Palace (entry from 70 MAD) to admire the zellige-tiled courtyards and painted cedar ceilings. Continue to the Saadian Tombs (from 70 MAD), a hidden 16th-century necropolis with stunning Italian Carrara marble. Stroll past the Koutoubia Mosque for photos of its iconic 77-meter minaret.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Entries from 140 MAD</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3-4 hours</span>
                </div>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Head to Jemaa el-Fnaa as it transforms at sunset. Watch storytellers, musicians, and snake charmers from a rooftop cafe (mint tea from 20 MAD), then descend into the food stalls for dinner. Stalls 1, 14, and 32 are reliable choices. A full meal of grilled meats, salads, and bread costs from 40 MAD. For a special first evening, book Nomad (from 150 MAD per person) overlooking the spice square.
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 2: Souks, Gardens &amp; Hammam
              </h3>
            </div>
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:00 - 12:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Visit Jardin Majorelle (from 70 MAD) at opening to avoid crowds. The cobalt-blue villa and exotic cacti are one of Morocco&apos;s most photographed sights. Walk next door to the Yves Saint Laurent Museum (from 100 MAD). Return to the medina and dive into the souks: spice souk (Rahba Kedima), leather souk, and carpet souk. Note prices on the first pass and return later to bargain.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Info className="w-3 h-3 text-[var(--color-accent)]" />Bargain to 40-60% of first asking price</span>
                </div>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon &amp; Evening</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Lunch at Cafe Clock Marrakech: camel burger from 85 MAD or vegetable tagine from 65 MAD. Afternoon: visit Ben Youssef Madrasa (from 50 MAD), one of North Africa&apos;s largest theological colleges, then the Maison de la Photographie (from 50 MAD) for early Moroccan photos and a rooftop terrace. End the day with a traditional hammam (public from 50 MAD or spa from 300 MAD). Early dinner and pack for tomorrow&apos;s Atlas crossing.
                </p>
              </div>
              <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay (2 nights)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>Budget:</strong> Hostel in medina from 150 MAD/night | <strong>Mid-range:</strong> Riad in Derb Dabachi from 500 MAD/night | <strong>Luxury:</strong> La Mamounia from 5,000 MAD/night
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day 3: Atlas Mountains -- */}
      <section id="day-3" className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Mountain className="w-4 h-4" /> Day 3
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Atlas Mountains &amp; Ait Benhaddou
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Cross the High Atlas via the Tizi n&apos;Tichka pass at 2,260 meters and descend to the UNESCO-listed kasbah of Ait Benhaddou on the edge of the Sahara.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">3</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day 3: Over the Atlas to Ait Benhaddou
            </h3>
          </div>
          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (7:00 - 13:00)</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Depart Marrakech early by shared minibus (from 150 MAD) or private transfer (from 1,200 MAD for the car). The drive crosses the Tizi n&apos;Tichka pass with stops at Berber villages and an argan oil cooperative (free entry). The mountain scenery is stunning, with terraced valleys and snow-capped peaks visible in spring. Arrive at the UNESCO World Heritage kasbah of Ait Benhaddou by midday.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3-4 hours driving</span>
                <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Tizi n&apos;Tichka photo stops</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon &amp; Evening</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Ait Benhaddou, the fortified ksar that has appeared in Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the river (wade or take the bridge) and climb to the top for panoramic views of the desert fringe. Lunch at a local restaurant with terrace views (tagine from 50 MAD). Sunset from the hilltop is extraordinary. Dinner and overnight in a guesthouse in Ait Benhaddou or nearby Ouarzazate.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />UNESCO World Heritage Site</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Guesthouse from 250 MAD/night</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Days 4-5: Sahara Desert -- */}
      <section id="days-4-5" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Tent className="w-4 h-4" /> Days 4-5
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Sahara Desert &mdash; Erg Chebbi
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Drive through the Dades Valley to Merzouga and ride camels into the Erg Chebbi dunes for an unforgettable night under the Saharan stars.
            </p>
          </div>

          {/* Day 4 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">4</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 4: Road of a Thousand Kasbahs to Merzouga
              </h3>
            </div>
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Full Day Drive (7:00 - 17:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  This is a long but spectacular driving day through the Dades Valley, also known as the Road of a Thousand Kasbahs. Stop at the Skoura palm oasis and the Roses Valley (Kelaat M&apos;Gouna). Lunch in Tinghir (tagine from 45 MAD) before a brief stop at Todra Gorge for a preview of Day 6. Continue through Erfoud to Merzouga, arriving as the dunes glow orange in the late afternoon light.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />6-7 hours total driving</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" />Multiple scenic stops</span>
                </div>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening: Camel Trek &amp; Desert Camp</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  At Merzouga, mount your camel (included in desert tour) for a 1.5-hour trek into the Erg Chebbi dunes. Watch the sunset from the top of a 150-meter dune. Arrive at your desert camp for Berber drumming, a traditional dinner under the stars, and a night in a Saharan tent. Group tours from 600 MAD, private camps from 1,500 MAD, luxury glamping from 4,000 MAD per person.
                </p>
              </div>
            </div>
          </div>

          {/* Day 5 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">5</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 5: Sahara Sunrise &amp; Desert Exploration
              </h3>
            </div>
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (5:30 - 12:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Wake before dawn to climb a dune for the Sahara sunrise, one of the most unforgettable moments of any Morocco trip. The dunes shift from purple to pink to gold as the sun crests the horizon. Camel ride back to Merzouga, then breakfast at your hotel. Spend the morning exploring: visit a Gnawa village, try sandboarding on the dunes (from 100 MAD), or relax at your hotel pool.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />Highlight: Sahara sunrise</span>
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Best photos at dawn</span>
                </div>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon &amp; Evening</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Optional: 4x4 excursion deeper into the desert to visit nomadic Berber families (from 400 MAD). Otherwise, relax and enjoy the desert scenery. Second night in Merzouga at a hotel or guesthouse (from 200 MAD/night for budget, from 600 MAD/night mid-range). Dinner at your hotel or a local restaurant: pizza and tagine are both popular in Merzouga (from 50 MAD).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day 6: Todra Gorge -- */}
      <section id="day-6" className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <MountainSnow className="w-4 h-4" /> Day 6
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Todra Gorge
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Travel from the desert to the dramatic 300-meter canyon walls of Todra Gorge, one of Morocco&apos;s most spectacular natural wonders.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">6</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day 6: Merzouga to Todra Gorge
            </h3>
          </div>
          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:00 - 13:00)</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Drive from Merzouga to Todra Gorge via Erfoud and Tinghir (approximately 3 hours). The landscape transitions from flat desert hammada to lush palm-lined river valleys. Stop in Tinghir for a panoramic view of the oasis from the hillside road. Arrive at the gorge entrance, where 300-meter limestone walls narrow to just 10 meters apart.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3 hours driving</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon &amp; Evening</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hike into the gorge along the river (easy, flat walk). Rock climbers tackle the canyon walls (gear rental from 200 MAD). Lunch at one of the riverside restaurants inside the gorge (tagine from 50 MAD). For a longer hike, follow the trail through Berber villages above the gorge (2-3 hours, guide recommended from 200 MAD). Overnight at a hotel at the gorge entrance or in Tinghir (from 200 MAD/night).
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />300-meter canyon walls</span>
                <span className="flex items-center gap-1"><Compass className="w-3 h-3 text-[var(--color-accent)]" />Hiking and rock climbing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Days 7-8: Fes -- */}
      <section id="days-7-8" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Building className="w-4 h-4" /> Days 7-8
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fes &mdash; The Spiritual Capital
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Two full days to explore the world&apos;s largest car-free urban area. Fes el-Bali is a labyrinth of 9,000 streets with medieval universities, tanneries, and artisan workshops unchanged for centuries.
            </p>
          </div>

          {/* Day 7 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">7</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 7: Todra to Fes &amp; First Evening
              </h3>
            </div>
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Train className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Transfer to Fes (7:00 - 15:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  The drive from Todra Gorge to Fes takes approximately 7-8 hours via the Midelt route through the Middle Atlas. Shared minibuses from 200 MAD or private transfer from 2,000 MAD. Stop in Midelt for lunch (kefta tagine from 40 MAD) and enjoy the cedar forests and Barbary macaques near Ifrane. Arrive in Fes by mid-afternoon.
                </p>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening in Fes</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Settle into your riad and take a gentle introductory walk through Fes el-Bali as evening falls. The dimly lit alleys and calls to prayer create an atmospheric welcome. Dinner at Cafe Clock Fes (camel burger from 80 MAD) or a traditional restaurant on Talaa Kebira for harira soup and msemen (from 30 MAD).
                </p>
              </div>
            </div>
          </div>

          {/* Day 8 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">8</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 8: Fes Medina Deep Dive
              </h3>
            </div>
            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:00 - 12:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Hire an official guide (from 300 MAD for half day) at Bab Boujloud, the iconic blue gate. Visit the Al-Qarawiyyin Mosque (courtyard viewable from the entrance, the world&apos;s oldest university), the Bou Inania Madrasa (from 20 MAD) with its extraordinary carved stucco and zellige, and the Chouara Tanneries (rooftop viewpoints free, mint sprig from 5 MAD). The tanneries are most photogenic in morning light.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Guide from 300 MAD + entries from 20 MAD</span>
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Tanneries best before 11 AM</span>
                </div>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  The Ruined Garden (from 100 MAD per person), a restaurant set in the atmospheric ruins of a riad courtyard, serves excellent pigeon pastilla and lamb with prunes. For budget dining, find rfissa (lentil and shredded msemen stew) near the Attarine Madrasa from 25 MAD.
                </p>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon &amp; Evening</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Explore Fes el-Jdid: the Royal Palace gates (exterior, free), the Mellah (Jewish Quarter) with its balconied architecture, and the Dar Batha Museum (from 20 MAD) for Fassi ceramics. Take a taxi (from 15 MAD) to the Merenid Tombs for a panoramic sunset over the entire medina. Dinner at Dar Roumana (tasting menu from 350 MAD) or join a Fes food tour (from 400 MAD) for street food including sfenj and bocadillos.
                </p>
              </div>
              <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay in Fes (2 nights)</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>Budget:</strong> Funky Fes Hostel from 120 MAD/night | <strong>Mid-range:</strong> Riad Fes Maya from 500 MAD/night | <strong>Luxury:</strong> Palais Amani from 2,000 MAD/night
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day 9: Chefchaouen -- */}
      <section id="day-9" className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Camera className="w-4 h-4" /> Day 9
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Chefchaouen &mdash; The Blue City
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Travel from Fes to Morocco&apos;s most photogenic town, where every wall, step, and doorway is painted in shades of blue against the backdrop of the Rif Mountains.
            </p>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">9</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day 9: Fes to Chefchaouen
            </h3>
          </div>
          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning: Transfer (8:00 - 12:00)</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                CTM bus from Fes to Chefchaouen takes approximately 4 hours (from 75 MAD). Private transfer from 1,500 MAD. The drive passes through rolling farmland and the foothills of the Rif Mountains. Arrive by noon and check into your riad in the blue medina.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />4 hours by bus</span>
                <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />From 75 MAD by bus</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (13:00 - 18:00)</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The entire medina is your attraction. Walk the narrow blue-painted streets, photograph every angle along Rue Targui, and visit the Kasbah Museum (from 10 MAD) in Place Outa el-Hammam. Explore the Ras el-Maa waterfall at the edge of town where locals wash carpets. The best light for photography is during the golden hour before sunset. Pick up local goat cheese, woven blankets, or handmade soap as souvenirs.
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Morocco&apos;s most photographed town</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Dinner at Casa Aladdin (from 60 MAD) for rooftop views over the medina, or Bab Ssour (from 50 MAD) for traditional Riffian cuisine. Chefchaouen is quieter and more relaxed than Marrakech or Fes, making it the perfect place to unwind before your departure day.
              </p>
            </div>
            <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
              <div className="flex items-center gap-2 mb-2">
                <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay</span>
              </div>
              <p className="text-xs text-[var(--text-secondary)]">
                <strong>Budget:</strong> Hostel from 100 MAD/night | <strong>Mid-range:</strong> Riad in medina from 350 MAD/night | <strong>Luxury:</strong> Lina Ryad &amp; Spa from 1,500 MAD/night
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day 10: Departure -- */}
      <section id="day-10" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Globe className="w-4 h-4" /> Day 10
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Departure Day
            </h2>
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-sm">10</span>
            </div>
            <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Day 10: Final Morning &amp; Departure
            </h3>
          </div>
          <div className="space-y-4">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning Options</h4>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Early risers can hike to the Spanish Mosque viewpoint above Chefchaouen (30-minute walk) for a final panoramic view of the blue city against the Rif Mountains. Return for breakfast at your riad and last-minute souvenir shopping.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Waypoints className="w-5 h-5 text-[var(--color-accent)]" />
                <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Departure Options</h4>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="p-3 bg-white rounded-lg">
                  <strong className="text-[var(--text-primary)]">Tangier Airport (TNG):</strong> CTM bus or grand taxi (2-3 hours, from 60 MAD). Closest airport with international flights to Europe.
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <strong className="text-[var(--text-primary)]">Fes Airport (FEZ):</strong> Return to Fes by bus (4 hours, from 75 MAD). Good for direct flights to European hubs.
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <strong className="text-[var(--text-primary)]">Return to Marrakech:</strong> Bus from Chefchaouen to Marrakech (10-12 hours, from 250 MAD) or fly Tangier to Marrakech (from 400 MAD one way). Only if you must use the same airport.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Transport Overview -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport Between Destinations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get between each stop on the 10-day route. Prices are starting prices per person and may vary by season.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                  <div className="p-3 px-4">From</div>
                  <div className="p-3 px-4">To</div>
                  <div className="p-3 px-4">Method</div>
                  <div className="p-3 px-4">Duration</div>
                  <div className="p-3 px-4">Cost</div>
                </div>
                {transportSegments.map((seg, i) => (
                  <div
                    key={seg.from + seg.to}
                    className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{seg.from}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{seg.to}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{seg.method}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{seg.duration}</div>
                    <div className="p-3 px-4 text-[var(--color-accent)]">{seg.cost}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Accommodation Overview -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation Strategy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where to stay each night across the 10-day route. Book riads in Marrakech and Fes well in advance during peak season (October-April).
          </p>
          <div className="space-y-4">
            {[
              { nights: 'Nights 1-2', place: 'Marrakech', note: 'Stay in a riad inside the medina for walking access to souks and palaces. Derb Dabachi and Mouassine are central neighborhoods.' },
              { nights: 'Night 3', place: 'Ait Benhaddou / Ouarzazate', note: 'Simple guesthouses with rooftop terraces facing the kasbah. Book one with breakfast included.' },
              { nights: 'Night 4', place: 'Sahara Desert Camp', note: 'Included in desert tour packages. Standard tents, luxury tents, and glamping options available.' },
              { nights: 'Night 5', place: 'Merzouga', note: 'Hotel or guesthouse at the edge of the dunes. Many have pools, a welcome luxury after the desert.' },
              { nights: 'Night 6', place: 'Todra Gorge / Tinghir', note: 'Hotels at the gorge entrance or in Tinghir town. Gorge-side hotels have the best settings.' },
              { nights: 'Nights 7-8', place: 'Fes', note: 'Traditional riads in Fes el-Bali. The area near Bab Boujloud is convenient for sightseeing.' },
              { nights: 'Night 9', place: 'Chefchaouen', note: 'Blue-painted riads inside the medina. Small, charming, and affordable compared to Marrakech.' },
            ].map((stay) => (
              <div key={stay.nights} className="card-moroccan p-5 flex gap-4">
                <div className="shrink-0 w-20 text-center">
                  <p className="text-xs font-semibold text-[var(--color-accent)]">{stay.nights}</p>
                  <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stay.place}</p>
                </div>
                <p className="text-sm text-[var(--text-secondary)] border-l border-[var(--border-primary)] pl-4">{stay.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Budget Breakdown -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            10-Day Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect across budget, mid-range, and luxury tiers for 10 days in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person, excluding international flights. Seasonal pricing can change, with peak season (October-April) approximately 20-30% higher.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                  <div className="p-3 px-4">Category</div>
                  <div className="p-3 px-4">Budget</div>
                  <div className="p-3 px-4">Mid-Range</div>
                  <div className="p-3 px-4">Luxury</div>
                </div>
                {costBreakdown.map((item, i) => (
                  <div
                    key={item.category}
                    className={`grid grid-cols-4 gap-0 text-sm ${
                      item.category.includes('Total')
                        ? 'bg-[var(--color-accent)]/5 font-semibold'
                        : i % 2 === 0
                          ? 'bg-white'
                          : 'bg-[var(--surface-muted)]'
                    }`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.category}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{item.budget}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{item.midRange}</div>
                    <div className="p-3 px-4 text-[var(--color-accent)]">{item.luxury}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is 10 days enough for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Ten days is the sweet spot for a first visit. You can comfortably explore Marrakech, cross the Atlas Mountains, spend a night in the Sahara, discover Fes, and visit Chefchaouen at a moderate pace. You will cover the most iconic highlights without feeling rushed. For a more relaxed pace or to add Essaouira, consider 12-14 days.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a 10-day Morocco trip cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Excluding international flights, a budget trip costs from 6,000 MAD per person (hostels, street food, shared transport). Mid-range travelers should budget from 15,000 MAD (riads, restaurants, private transfers for some segments). Luxury travelers can expect from 40,000 MAD or more (5-star accommodation, private guides, fine dining). Seasonal pricing can change these estimates.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best route for 10 days in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The classic route runs Marrakech to Atlas Mountains to Sahara Desert to Todra Gorge to Fes to Chefchaouen. This covers the most diverse landscapes and experiences: imperial cities, mountains, desert, gorges, and the famous blue city. It works as a one-way route so you never retrace your steps.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Should I book a tour or travel independently?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Both work well. Independent travel is cheaper and more flexible but requires more planning, especially for the desert section. Many travelers book a 3-day group or private tour for the Marrakech-to-Fes desert crossing (from 2,000 MAD group, from 8,000 MAD private) and handle the rest independently. This hybrid approach balances convenience with freedom.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time for a 10-day Morocco trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                March to May and September to November offer the best conditions. Spring brings wildflowers in the Atlas and comfortable desert temperatures. Autumn has warm days and cool evenings. Summer (June-August) is extremely hot in Marrakech and the desert (45+ degrees Celsius). Winter is pleasant in cities but cold in mountains and desert at night.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to fly into one city and out of another?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                An open-jaw flight (fly into Marrakech, out of Tangier or Fes) is highly recommended. It saves a full day of backtracking and makes the route much more efficient. Most European airlines offer flexible multi-city bookings. If you must use the same airport, budget an extra day for the return journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/itineraries" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                All Morocco Itineraries
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Browse itineraries from 3 days to 2 weeks, covering every region and travel style.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Explore <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-3-days" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <CalendarDays className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                3 Days in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Short on time? Three optimized itineraries for a weekend or long-weekend trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-trip-cost" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Trip Cost Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed breakdowns of what everything costs in Morocco, from riads to tagines to transport.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential tips, cultural etiquette, safety advice, and what to expect on your first visit.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech-to-sahara" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech to Sahara Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about the desert crossing: tour options, camp types, what to pack, and camel trek details.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

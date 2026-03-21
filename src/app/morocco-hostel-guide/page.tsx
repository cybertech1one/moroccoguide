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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Award,
  BookOpen,
  Wifi,
  Bed,
  Coffee,
  Lock,
  Globe,
  Utensils,
  Music,
  Moon,
  Sun,
  MessageCircle,
  ThumbsUp,
  Luggage,
  CalendarDays,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   DATA — TOP 20 HOSTELS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const hostels = [
  {
    city: 'Marrakech',
    places: [
      { name: 'Waka Waka Hostel', dorm: 120, privRoom: 350, rating: 4.8, vibe: 'Social & rooftop parties', highlight: 'Legendary rooftop terrace overlooking the Atlas Mountains, organized group dinners, and a ground-floor cafe that doubles as a co-working space.' },
      { name: 'Equity Point Marrakech', dorm: 100, privRoom: 300, rating: 4.6, vibe: 'Pool & chill', highlight: 'One of the few hostels in the medina with a swimming pool. Traditional riad architecture with a large central courtyard and reliable hot showers.' },
      { name: 'Rodamon Riad Marrakech', dorm: 110, privRoom: 320, rating: 4.7, vibe: 'Cultural immersion', highlight: 'Converted 18th-century riad with original zellige tilework. Free walking tours of the medina depart daily at 10 AM. Quiet hours enforced after 11 PM.' },
      { name: 'Hostel Kif Kif', dorm: 90, privRoom: 280, rating: 4.4, vibe: 'Laid-back local feel', highlight: 'Run by a Moroccan-French couple. The smallest hostel on this list with only 24 beds, so you actually get to know everyone. Excellent breakfast included.' },
    ],
  },
  {
    city: 'Fes',
    places: [
      { name: 'Funky Fes Hostel', dorm: 100, privRoom: 280, rating: 4.7, vibe: 'Social & tours', highlight: 'Daily guided walks through the Fes el-Bali medina at no extra charge. The rooftop terrace serves Moroccan mint tea every afternoon at 4 PM.' },
      { name: 'Dar Batha Hostel', dorm: 95, privRoom: 260, rating: 4.5, vibe: 'Quiet & historic', highlight: 'Steps from the Dar Batha Museum. Thick riad walls keep rooms cool in summer without AC. Private rooms have hand-carved cedar doors.' },
      { name: 'Medina Social Club', dorm: 105, privRoom: 290, rating: 4.6, vibe: 'Art & community', highlight: 'Weekly live Gnaoua music sessions and a small gallery showcasing local artists. The communal kitchen is the best-equipped of any Fes hostel.' },
    ],
  },
  {
    city: 'Essaouira',
    places: [
      { name: 'Hostel des Voyageurs', dorm: 90, privRoom: 250, rating: 4.5, vibe: 'Surf & beach', highlight: 'Five-minute walk to the main beach. Board storage room and rinse station. Partnerships with local surf schools get guests 15% off lessons.' },
      { name: 'The Chill Art Hostel', dorm: 85, privRoom: 240, rating: 4.4, vibe: 'Creative & relaxed', highlight: 'Artist-in-residence program means the walls change every month. Guitar corner, book exchange, and a courtyard where cats outnumber humans.' },
    ],
  },
  {
    city: 'Chefchaouen',
    places: [
      { name: 'Hostel Ole Chefchaouen', dorm: 80, privRoom: 220, rating: 4.6, vibe: 'Mountain & social', highlight: 'In the heart of the blue medina. Organizes group hikes to the Akchour waterfalls (from 150 MAD per person including transport). Hammock-filled terrace.' },
      { name: 'Casa Perleta', dorm: 75, privRoom: 200, rating: 4.3, vibe: 'Budget & cozy', highlight: 'The cheapest dorm beds in Chefchaouen. Small but clean, with thick wool blankets for cold mountain nights. Family-run with genuine Rif hospitality.' },
    ],
  },
  {
    city: 'Rabat',
    places: [
      { name: 'Rabat Youth Hostel (HI)', dorm: 85, privRoom: 230, rating: 4.2, vibe: 'Clean & central', highlight: 'Affiliated with Hostelling International. Located near the Kasbah of the Udayas. Breakfast included, with a secure luggage room for late checkout.' },
      { name: 'The Repose Rabat', dorm: 95, privRoom: 270, rating: 4.5, vibe: 'Modern & boutique', highlight: 'Feels more like a boutique hotel than a hostel. USB charging at every bunk, blackout curtains on dorms, and a co-working lounge with fast fiber internet.' },
    ],
  },
  {
    city: 'Tangier',
    places: [
      { name: 'Dar Nour Tangier', dorm: 100, privRoom: 280, rating: 4.6, vibe: 'Views & culture', highlight: 'Perched above the medina with direct views of the Strait of Gibraltar. On clear days you can see Spain. Weekly cooking classes teach harira and pastilla.' },
      { name: 'Tangier Hostel Central', dorm: 80, privRoom: 220, rating: 4.3, vibe: 'Backpacker hub', highlight: 'Two blocks from the Grand Socco. The go-to spot for travelers arriving by ferry from Tarifa. Staff help arrange onward transport to Chefchaouen.' },
    ],
  },
  {
    city: 'Merzouga (Sahara)',
    places: [
      { name: 'Hostel Merzouga Desert', dorm: 110, privRoom: 300, rating: 4.7, vibe: 'Desert adventure', highlight: 'Overnight camel treks to desert camps leave from the front door. Dorms have thick walls against the daytime heat. Stargazing sessions on the dune-facing terrace.' },
      { name: 'Sahara Stars Camp & Hostel', dorm: 120, privRoom: 350, rating: 4.5, vibe: 'Glamping meets hostel', highlight: 'Hybrid concept: hostel-style dorms in the village plus luxury desert tents for an upgrade. Sandboarding and 4x4 excursions bookable on-site.' },
    ],
  },
] as const;

const faqs = [
  {
    q: 'Are hostels in Morocco safe for solo travelers?',
    a: 'Yes. Most hostels listed here have 24-hour reception, lockers in dorm rooms, and security cameras at entrances. Solo female travelers report feeling comfortable at well-reviewed hostels, particularly Waka Waka, Rodamon, and Equity Point. Always use your locker and carry a padlock.',
  },
  {
    q: 'What is the average price for a hostel dorm bed in Morocco?',
    a: 'Dorm beds range from 75 MAD to 130 MAD per night (about 7 to 13 USD) depending on the city and season. Chefchaouen and smaller towns sit at the low end, while Marrakech and desert hostels cost more. Prices rise 20-30% during peak season (March-May, September-November).',
  },
  {
    q: 'Do Moroccan hostels include breakfast?',
    a: 'About 70% of hostels include a basic Moroccan breakfast: msemen (flatbread), olive oil, jam, cheese triangles, and mint tea or coffee. Some charge from 20 MAD extra. Always confirm at booking. The included breakfasts at Hostel Kif Kif and Rabat Youth Hostel stand out.',
  },
  {
    q: 'Can I book hostels in Morocco on Hostelworld or Booking.com?',
    a: 'Most appear on Hostelworld, Booking.com, and HostelBookers. Booking direct through the hostel website or WhatsApp sometimes gets you a 5-10% discount. During peak season, book 2-3 weeks ahead for popular spots like Waka Waka and Funky Fes.',
  },
  {
    q: 'What should I bring to a hostel in Morocco?',
    a: 'A padlock (most hostels provide lockers but not locks), quick-dry towel, flip-flops for showers, earplugs, eye mask, and a universal power adapter (Morocco uses Type C and E plugs, 220V). A sleeping bag liner adds comfort on older mattresses.',
  },
  {
    q: 'Is Wi-Fi reliable at Moroccan hostels?',
    a: 'Wi-Fi exists at nearly every hostel but speeds vary. Expect 5-15 Mbps in major cities like Marrakech and Rabat, enough for messaging and light browsing. Video calls can be hit-or-miss in Chefchaouen and Merzouga. Buy a local Maroc Telecom or Inwi SIM (from 30 MAD) as backup.',
  },
  {
    q: 'Are mixed dorms the norm, or can I get a female-only dorm?',
    a: 'Most hostels offer both mixed and female-only dorms. Female-only rooms fill up faster, so book early. Waka Waka, Equity Point, and Rodamon all have dedicated female dorms with separate bathroom access.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Hostels in Morocco 2026 | Top 20 Budget Accommodation Guide',
  description:
    'Complete guide to the 20 best hostels in Morocco for 2026. Dorm beds from 75 MAD, private rooms from 200 MAD. City-by-city breakdown for Marrakech, Fes, Essaouira, Chefchaouen, Rabat, Tangier, and the Sahara. Booking tips, packing lists, and hostel etiquette.',
  keywords: [
    'morocco hostels',
    'best hostels morocco',
    'budget accommodation morocco',
    'morocco backpacker hostels',
    'cheap hostels marrakech',
    'hostels fes morocco',
    'hostels chefchaouen',
    'morocco dorm rooms',
    'backpacking morocco accommodation',
    'hostel prices morocco 2026',
    'solo travel morocco hostels',
    'morocco hostel guide',
    'waka waka hostel marrakech',
    'funky fes hostel',
    'morocco budget travel',
    'hostel etiquette morocco',
    'female dorms morocco',
    'sahara desert hostel',
    'essaouira hostels',
    'tangier hostels',
  ],
  openGraph: {
    title: 'Best Hostels in Morocco 2026 | Top 20 Budget Accommodation Guide',
    description:
      'The 20 best hostels across Morocco from 75 MAD per night. Marrakech, Fes, Essaouira, Chefchaouen, Rabat, Tangier, and the Sahara — dorm prices, ratings, booking tips, and honest reviews.',
    url: `${BASE_URL}/morocco-hostel-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hostels.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Moroccan hostel rooftop terrace with travelers socializing over mint tea at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Hostels in Morocco 2026 | Top 20 Budget Guide',
    description:
      'Dorm beds from 75 MAD. The 20 best hostels across 7 Moroccan cities with prices, vibes, booking tips, and what to pack.',
    images: [`${BASE_URL}/images/hero-hostels.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-hostel-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-hostel-guide`,
  name: 'Best Hostels in Morocco 2026 — Top 20 Budget Accommodation Guide',
  description:
    'Comprehensive guide to the 20 best hostels across Morocco. City-by-city breakdown with dorm and private room prices, hostel etiquette, booking strategies, and packing lists for budget travelers.',
  url: `${BASE_URL}/morocco-hostel-guide`,
  image: `${BASE_URL}/images/hero-hostels.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-hostel-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: f.a,
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   HELPER — STAR RATING
   ═══════════════════════════════════════════════════════════════ */

function StarRating({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-[var(--color-gold)]">
      <Star className="h-4 w-4 fill-current" />
      <span className="font-semibold text-sm">{rating}</span>
    </span>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHostelGuide() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO
          ══════════════════════════════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[520px] flex items-center justify-center bg-gradient-to-br from-[#2D1810] via-[#4A2C1A] to-[#1a0f08]">
        <div className="hero-overlay absolute inset-0 opacity-30" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/90 px-4 py-1.5 rounded-full text-sm mb-6">
            <Bed className="h-4 w-4" />
            Budget Accommodation Guide
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[family-name:var(--font-display)] leading-tight mb-6">
            Best Hostels in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-8">
            20 top-rated hostels across 7 cities — from Marrakech rooftop terraces to Sahara desert dorms. Dorm beds from 75 MAD per night.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> 7 cities covered</span>
            <span className="flex items-center gap-1.5"><Building className="h-4 w-4" /> 20 hostels reviewed</span>
            <span className="flex items-center gap-1.5"><DollarSign className="h-4 w-4" /> From 75 MAD/night</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4" /> Updated March 2026</span>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BREADCRUMBS
          ══════════════════════════════════════════════════════════ */}
      <nav className="bg-white border-b border-gray-100" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-gray-500">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="flex items-center gap-1.5">
              <Link href="/accommodations" className="hover:text-[var(--color-accent)] transition-colors">
                Accommodations
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li className="text-[var(--color-accent)] font-medium">Best Hostels in Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════════════
          INTRO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              Why Morocco Belongs on Every Backpacker&apos;s List
            </h2>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-4">
              Morocco delivers one of the best value-for-money backpacking experiences anywhere in the world. A dorm bed costs less than a coffee in Paris. A private room runs about the same as a fast-food meal in London. And the experiences — haggling in Fes&apos;s 9th-century medina, sunrise over the Sahara dunes, fresh seafood grills on the Essaouira port — cost nothing or close to it.
            </p>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-4">
              The hostel scene has matured rapidly since 2018. Where you once had to choose between a grim guesthouse or a splurge on a riad, today&apos;s hostels occupy beautifully restored traditional buildings with modern plumbing, strong Wi-Fi, and social programming that brings travelers together. Marrakech alone has over 30 hostels; Chefchaouen has seen a dozen open in the last three years.
            </p>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
              This guide covers 20 hostels across 7 cities, each one personally vetted and cross-referenced with recent reviews from Hostelworld, Google, and Booking.com. We list real 2026 prices, honest assessments of the vibe, and the specific details that matter: locker size, shower pressure, noise levels, and breakfast quality.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          QUICK PRICE COMPARISON
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Morocco Hostel Prices at a Glance
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Average nightly rates by city. Prices reflect low-season 2026 rates — expect 20-30% increases during March-May and September-November.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { city: 'Marrakech', dorm: '90–120', priv: '280–350', icon: Building },
              { city: 'Fes', dorm: '95–105', priv: '260–290', icon: BookOpen },
              { city: 'Chefchaouen', dorm: '75–80', priv: '200–220', icon: Moon },
              { city: 'Essaouira', dorm: '85–90', priv: '240–250', icon: Sun },
              { city: 'Rabat', dorm: '85–95', priv: '230–270', icon: ShieldCheck },
              { city: 'Tangier', dorm: '80–100', priv: '220–280', icon: Globe },
              { city: 'Merzouga', dorm: '110–120', priv: '300–350', icon: Star },
              { city: 'All Morocco', dorm: '75–130', priv: '200–350', icon: DollarSign },
            ].map((item) => (
              <div key={item.city} className="card-moroccan p-5 text-center">
                <item.icon className="h-6 w-6 text-[var(--color-accent)] mx-auto mb-3" />
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2">{item.city}</h3>
                <p className="text-sm text-gray-600">Dorm: from {item.dorm.split('–')[0]} MAD</p>
                <p className="text-sm text-gray-600">Private: from {item.priv.split('–')[0]} MAD</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          TOP 20 HOSTELS — CITY BY CITY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Top 20 Hostels by City
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Each hostel rated on cleanliness, location, social atmosphere, and value. Prices are for standard dorm beds and the cheapest private room.
            </p>
          </div>

          <div className="space-y-14">
            {hostels.map((cityGroup) => (
              <div key={cityGroup.city}>
                <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-[var(--color-accent)]" />
                  {cityGroup.city}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {cityGroup.places.map((hostel) => (
                    <div key={hostel.name} className="card-moroccan p-6 hover:shadow-lg transition-shadow">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-bold font-[family-name:var(--font-heading)] text-gray-900">
                          {hostel.name}
                        </h4>
                        <StarRating rating={hostel.rating} />
                      </div>
                      <div className="flex flex-wrap gap-3 mb-3 text-sm">
                        <span className="inline-flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-1 rounded-full text-[var(--color-accent)] font-medium">
                          <Bed className="h-3.5 w-3.5" /> Dorm from {hostel.dorm} MAD
                        </span>
                        <span className="inline-flex items-center gap-1 bg-[#FAF8F5] px-2.5 py-1 rounded-full text-gray-700 font-medium">
                          <Lock className="h-3.5 w-3.5" /> Private from {hostel.privRoom} MAD
                        </span>
                      </div>
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--color-gold)] font-semibold mb-3">
                        <Music className="h-3.5 w-3.5" /> {hostel.vibe}
                      </span>
                      <p className="text-gray-600 text-sm leading-relaxed font-[family-name:var(--font-heading)]">
                        {hostel.highlight}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          DORM VS PRIVATE ROOM
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Dorms vs. Private Rooms: Which Should You Book?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-accent)]">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-7 w-7 text-[var(--color-accent)]" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900">Dorm Rooms</h3>
              </div>
              <ul className="space-y-3 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span>From 75 MAD/night — the cheapest option in Morocco outside camping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span>Best for solo travelers who want to meet people quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span>Most dorms have 4-8 beds; 4-bed dorms cost from 10-20 MAD more</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Noise and light disturbances — bring earplugs and an eye mask</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Shared bathrooms; hot water runs out in 8+ bed dorms during peak morning hours</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-gold)]">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-7 w-7 text-[var(--color-gold)]" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900">Private Rooms</h3>
              </div>
              <ul className="space-y-3 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span>From 200 MAD/night — still 40-60% cheaper than budget hotels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span>Ideal for couples or travelers who need solid sleep before early buses</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                  <span>Many include en-suite bathrooms; always ask before booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <span>Limited availability — only 2-4 private rooms per hostel, book early</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 shrink-0" />
                  <span>You miss the social element; make an effort in common areas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SOCIAL VS QUIET HOSTELS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-4">
            Social Hostels vs. Quiet Hostels
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
            Your choice matters more than you think. A party hostel and a quiet riad-hostel deliver completely different experiences.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Music className="h-6 w-6 text-[var(--color-accent)]" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900">Social / Party Hostels</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4 font-[family-name:var(--font-heading)]">
                These hostels organize group activities: pub crawls, cooking classes, day trips, rooftop dinners. Common areas stay buzzing past midnight.
              </p>
              <div className="space-y-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <p><span className="font-semibold text-gray-800">Best picks:</span> Waka Waka (Marrakech), Funky Fes (Fes), Hostel Ole (Chefchaouen)</p>
                <p><span className="font-semibold text-gray-800">Expect:</span> Louder after 10 PM, group dynamics, instant friend-making</p>
                <p><span className="font-semibold text-gray-800">Avoid if:</span> You need early mornings or deep sleep</p>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-4">
                <Moon className="h-6 w-6 text-[var(--color-gold)]" />
                <h3 className="text-xl font-bold font-[family-name:var(--font-heading)] text-gray-900">Quiet / Cultural Hostels</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4 font-[family-name:var(--font-heading)]">
                Restored riads and traditional houses with an emphasis on Moroccan culture, reading nooks, and respectful quiet hours after 10-11 PM.
              </p>
              <div className="space-y-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                <p><span className="font-semibold text-gray-800">Best picks:</span> Rodamon (Marrakech), Dar Batha (Fes), The Repose (Rabat)</p>
                <p><span className="font-semibold text-gray-800">Expect:</span> Enforced quiet hours, older age range (25-45), cultural programming</p>
                <p><span className="font-semibold text-gray-800">Avoid if:</span> You want nightly social events or a group travel squad</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOSTEL ETIQUETTE IN MOROCCO
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Hostel Etiquette in Morocco
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { icon: Moon, title: 'Respect Quiet Hours', text: 'Most hostels enforce quiet hours from 10 or 11 PM. During Ramadan, be extra considerate — staff may be fasting and sleeping lighter. Keep phone calls and music to common areas.' },
              { icon: Utensils, title: 'Kitchen Protocol', text: 'Label your food in the shared fridge. Clean dishes immediately after use — this is the #1 complaint at Moroccan hostels. Some hostels ban cooking strong-smelling fish (ask first).' },
              { icon: ShieldCheck, title: 'Dress Modestly in Common Areas', text: 'Morocco is a Muslim-majority country. Cover shoulders and knees in shared spaces. Swimwear belongs at the pool only. Hostel staff appreciate guests who respect local norms.' },
              { icon: Coffee, title: 'Share the Mint Tea', text: 'Moroccan hostel culture revolves around mint tea. If a staff member offers tea, accept — it signals friendship. Return the gesture by offering to buy tea or snacks for the communal table.' },
              { icon: Lock, title: 'Lock Your Valuables', text: 'Use the lockers provided. Keep passports, cash, and electronics locked up even during the day. Carry your own padlock — most hostels sell them from 20 MAD, but they are often flimsy.' },
              { icon: Globe, title: 'Learn Basic Darija', text: 'A few Arabic phrases go far: "Salaam" (hello), "Shukran" (thank you), "Bslama" (goodbye). Staff at Moroccan hostels speak Arabic, French, and usually English — but Darija earns instant respect.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5 flex gap-4">
                <item.icon className="h-6 w-6 text-[var(--color-accent)] shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BOOKING TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Booking Tips That Save Real Money
          </h2>
          <div className="space-y-5">
            {[
              { icon: CalendarDays, title: 'Book 2-3 Weeks Ahead for Peak Season', text: 'March through May and September through November fill the best hostels fast. Waka Waka and Funky Fes sell out 3 weeks ahead during Easter and October. Low season (June-August, December-February) you can often walk in.' },
              { icon: DollarSign, title: 'Book Direct for the Best Price', text: 'Hostelworld charges a 12-15% booking fee. Many Moroccan hostels offer a direct discount if you message them on WhatsApp or Instagram. Ask: "Do you have a direct booking price?" You will often save 10-30 MAD per night.' },
              { icon: MessageCircle, title: 'Read Reviews from the Last 3 Months', text: 'Moroccan hostels change management and quality quickly. A 4.8-star hostel from 2024 might be a 3.5 today. Filter reviews by date. Look specifically for comments about hot water, Wi-Fi speed, and mattress quality.' },
              { icon: Luggage, title: 'Confirm Bed Assignment Before Paying', text: 'Some budget hostels overbook and put extra mattresses on the floor during peak periods. Confirm your exact bed type (bunk vs. pod, top vs. bottom) in writing before arriving. Screenshot your confirmation.' },
              { icon: Wifi, title: 'Ask About Wi-Fi Speed Before Booking', text: 'If you work remotely, ask the hostel for a speed test screenshot. Anything below 10 Mbps will struggle with video calls. The Repose (Rabat) and Waka Waka (Marrakech) offer the most reliable connections.' },
              { icon: ThumbsUp, title: 'Use Flexible Cancellation When Available', text: 'Choose refundable rates even if they cost from 10 MAD more. Plans change constantly in Morocco — buses get cancelled, you fall in love with a city and want to stay longer. Non-refundable rates lock you in.' },
            ].map((item, idx) => (
              <div key={item.title} className="card-moroccan p-5 flex gap-4 items-start">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-[var(--color-accent)] text-white text-sm font-bold shrink-0">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-1 flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-[var(--color-accent)]" />
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT TO BRING — PACKING LIST
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-4">
            Hostel Packing List for Morocco
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
            Pack these items and your hostel experience improves dramatically. Skip them and you will buy them in Morocco anyway (at a markup).
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { item: 'Padlock (combination)', why: 'Locker security. Bring two — one for your main bag, one for the dorm locker.' },
              { item: 'Quick-dry microfiber towel', why: 'Most hostels charge from 15 MAD to rent towels. Your own dries in 2 hours.' },
              { item: 'Earplugs + eye mask', why: 'Non-negotiable for dorms. Silicone earplugs block snoring better than foam.' },
              { item: 'Flip-flops / shower shoes', why: 'Shared bathrooms. Protect your feet. Buy rubber sandals in any souk from 20 MAD.' },
              { item: 'Universal power adapter', why: 'Morocco uses Type C/E plugs (220V). Bring a 2-port USB adapter to save outlet space.' },
              { item: 'Sleeping bag liner', why: 'Adds warmth in mountain hostels (Chefchaouen) and hygiene on older mattresses.' },
              { item: 'Headlamp or clip light', why: 'Read or pack your bag at 5 AM without waking the entire dorm room.' },
              { item: 'Dry bags / packing cubes', why: 'Keep belongings organized. A 5L dry bag protects electronics from hammam steam.' },
              { item: 'Reusable water bottle', why: 'Fill at hostel water coolers. Saves from 5-10 MAD per day on bottled water.' },
            ].map((pack) => (
              <div key={pack.item} className="card-moroccan p-4">
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 text-sm mb-1 flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-green-600 shrink-0" />
                  {pack.item}
                </h3>
                <p className="text-gray-600 text-xs font-[family-name:var(--font-heading)] leading-relaxed">{pack.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BUDGET DAILY BREAKDOWN
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Daily Budget Breakdown for Hostel Travelers
          </h2>
          <div className="card-moroccan p-6 zellige-border">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-4 text-lg">Shoestring Budget</h3>
                <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <li className="flex justify-between"><span>Dorm bed</span><span className="font-semibold">from 80 MAD</span></li>
                  <li className="flex justify-between"><span>Street food (3 meals)</span><span className="font-semibold">from 60 MAD</span></li>
                  <li className="flex justify-between"><span>Local transport</span><span className="font-semibold">from 15 MAD</span></li>
                  <li className="flex justify-between"><span>Water + snacks</span><span className="font-semibold">from 15 MAD</span></li>
                  <li className="flex justify-between border-t pt-2 mt-2 font-bold text-[var(--color-accent)]">
                    <span>Daily total</span><span>from 170 MAD (~17 USD)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-4 text-lg">Comfortable Budget</h3>
                <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <li className="flex justify-between"><span>Private room</span><span className="font-semibold">from 250 MAD</span></li>
                  <li className="flex justify-between"><span>Cafe meals (3 meals)</span><span className="font-semibold">from 120 MAD</span></li>
                  <li className="flex justify-between"><span>Taxi + activities</span><span className="font-semibold">from 80 MAD</span></li>
                  <li className="flex justify-between"><span>Coffee, snacks, tips</span><span className="font-semibold">from 50 MAD</span></li>
                  <li className="flex justify-between border-t pt-2 mt-2 font-bold text-[var(--color-gold)]">
                    <span>Daily total</span><span>from 500 MAD (~50 USD)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqs.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2 flex items-start gap-2">
                  <Info className="h-5 w-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          INSIDER TIPS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Insider Tips from Long-Term Morocco Travelers
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Award, title: 'Arrive Before 2 PM', text: 'Check-in at most Moroccan hostels opens at 2-3 PM. Arrive early and your bag gets stored, but you also get first pick of beds. Bottom bunks and beds near power outlets go first.' },
              { icon: Users, title: 'Join the WhatsApp Group', text: 'Many hostels run a guest WhatsApp or Telegram group. Join on arrival — travelers share real-time tips about restaurant deals, transport schedules, and group trips forming for the next day.' },
              { icon: Coffee, title: 'Eat Where Staff Eat', text: 'Ask hostel staff where they grab lunch. Their picks cost 30-50% less than anything on TripAdvisor. The best tagine you eat in Morocco will come from a hole-in-the-wall that staff recommended.' },
              { icon: Globe, title: 'Travel Between Cities on CTM Buses', text: 'CTM and Supratours operate the most reliable intercity buses. Book at the station or on ctm.ma one day ahead. Marrakech to Essaouira costs from 80 MAD (3 hours), Fes to Chefchaouen from 75 MAD (4 hours).' },
              { icon: Clock, title: 'Use Medina Hostels as Navigation Anchors', text: 'Getting lost in Fes or Marrakech medinas is inevitable. Save your hostel location on Google Maps offline and pin it on Maps.me. Ask for the nearest mosque or landmark name so you can ask locals for directions.' },
              { icon: ShieldCheck, title: 'Keep a Separate Cash Stash', text: 'ATMs exist in every city, but they sometimes run out on weekends. Keep from 500 MAD in a hidden pocket or money belt as emergency cash. Hostels usually accept cash only; a few now take card.' },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                <tip.icon className="h-6 w-6 text-[var(--color-gold)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST HOSTEL-HOPPING ROUTES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-4">
            Hostel-Hopping Routes Across Morocco
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
            Three tested routes that connect the best hostels with efficient transport links. Each route assumes 2-3 nights per city.
          </p>
          <div className="space-y-8">
            {[
              {
                name: 'The Classic Loop (2 Weeks)',
                route: 'Marrakech → Essaouira → Marrakech → Fes → Chefchaouen → Tangier',
                days: '14 days',
                budget: 'from 2,400 MAD total accommodation',
                hostels: 'Waka Waka → Hostel des Voyageurs → Funky Fes → Hostel Ole → Dar Nour',
                transport: 'CTM buses between all cities. Marrakech to Essaouira (from 80 MAD, 3h). Marrakech to Fes (from 180 MAD, 7h or train from 200 MAD, 7h). Fes to Chefchaouen (from 75 MAD, 4h). Chefchaouen to Tangier (from 50 MAD, 3h).',
                notes: 'The most popular backpacker route in Morocco. Book Waka Waka and Funky Fes at least 2 weeks ahead during spring and fall. This loop lets you exit from Tangier by ferry to Spain if continuing to Europe.',
              },
              {
                name: 'The Desert Circuit (10 Days)',
                route: 'Marrakech → Ouarzazate → Merzouga → Fes',
                days: '10 days',
                budget: 'from 1,800 MAD total accommodation',
                hostels: 'Rodamon → local guesthouse → Hostel Merzouga Desert → Dar Batha',
                transport: 'Supratours bus Marrakech to Ouarzazate (from 100 MAD, 4h). Shared grand taxi Ouarzazate to Merzouga (from 150 MAD, 6h). Supratours Merzouga to Fes (from 200 MAD, 10h overnight).',
                notes: 'Ouarzazate lacks true hostels — book a budget guesthouse (from 150 MAD private room). The overnight bus from Merzouga to Fes saves a night of accommodation and arrives at 6 AM, perfect for an early medina walk.',
              },
              {
                name: 'The Northern Run (7 Days)',
                route: 'Tangier → Chefchaouen → Fes → Rabat',
                days: '7 days',
                budget: 'from 1,200 MAD total accommodation',
                hostels: 'Tangier Hostel Central → Casa Perleta → Medina Social Club → The Repose',
                transport: 'CTM Tangier to Chefchaouen (from 50 MAD, 3h). CTM Chefchaouen to Fes (from 75 MAD, 4h). Train Fes to Rabat (from 90 MAD, 2.5h).',
                notes: 'Ideal for travelers arriving by ferry from Spain. The train from Fes to Rabat is the most comfortable intercity transport in Morocco — air-conditioned, on time, and scenic. End in Rabat for a flight home from its well-connected airport.',
              },
            ].map((route) => (
              <div key={route.name} className="card-moroccan p-6 zellige-border">
                <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-1">
                  {route.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4 font-[family-name:var(--font-heading)]">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {route.days}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {route.budget}</span>
                </div>
                <div className="space-y-3 text-sm font-[family-name:var(--font-heading)]">
                  <p className="text-gray-800">
                    <span className="font-semibold text-[var(--color-accent)]">Route:</span> {route.route}
                  </p>
                  <p className="text-gray-800">
                    <span className="font-semibold text-[var(--color-accent)]">Hostels:</span> {route.hostels}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-gray-900">Transport:</span> {route.transport}
                  </p>
                  <p className="text-gray-600 italic">{route.notes}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEASONAL HOSTEL GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            When to Book: Seasonal Hostel Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                season: 'Spring (March–May)',
                icon: Sun,
                status: 'Peak Season',
                statusColor: 'text-red-600',
                desc: 'The busiest period for Moroccan hostels. Temperatures sit between 18-28C across most cities. Book 2-3 weeks ahead for Marrakech and Fes. Prices jump 20-30% above listed rates. Easter week sells out fast at social hostels.',
                tip: 'If you want a social hostel during spring, book the moment you know your dates. Quiet hostels have more last-minute availability.',
              },
              {
                season: 'Summer (June–August)',
                icon: Star,
                status: 'Low Season (Hot)',
                statusColor: 'text-green-600',
                desc: 'Interior cities like Marrakech and Fes hit 40-45C. Coastal hostels in Essaouira and Tangier stay pleasant (22-28C). Marrakech hostels drop prices by 30-40%. Many offer walk-in discounts. Sahara hostels are nearly empty.',
                tip: 'Focus on Essaouira and Chefchaouen in summer. Essaouira stays cool thanks to Atlantic trade winds. Mountain hostels in Chefchaouen rarely exceed 30C.',
              },
              {
                season: 'Fall (September–November)',
                icon: Moon,
                status: 'Peak Season',
                statusColor: 'text-red-600',
                desc: 'Second peak after summer heat breaks. October is the single busiest month for Moroccan hostels. Temperatures drop to a comfortable 20-30C. Desert hostels reopen for camel treks. Same booking rules as spring apply.',
                tip: 'October in Marrakech is the hardest month to find beds. Book Waka Waka and Equity Point 3 weeks ahead. Consider less-touristed Rabat as a Marrakech alternative.',
              },
              {
                season: 'Winter (December–February)',
                icon: Moon,
                status: 'Low Season (Cold)',
                statusColor: 'text-green-600',
                desc: 'The coldest months, especially in mountain and desert areas. Chefchaouen drops to 5-8C at night. Heating in hostels ranges from adequate (Rodamon) to nonexistent (budget Chefchaouen options). Great deals across the board.',
                tip: 'Pack warm layers and a sleeping bag liner for winter. Ask hostels specifically about heating before booking. Sahara hostel nights are magical — clear skies, no crowds, and from 20-30% lower prices.',
              },
            ].map((s) => (
              <div key={s.season} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold font-[family-name:var(--font-heading)] text-gray-900 flex items-center gap-2">
                    <s.icon className="h-5 w-5 text-[var(--color-accent)]" />
                    {s.season}
                  </h3>
                  <span className={`text-xs font-semibold ${s.statusColor}`}>{s.status}</span>
                </div>
                <p className="text-gray-700 text-sm font-[family-name:var(--font-heading)] leading-relaxed mb-3">
                  {s.desc}
                </p>
                <div className="bg-[#FAF8F5] rounded-lg p-3">
                  <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <span className="font-semibold text-[var(--color-gold)]">Pro tip:</span> {s.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          COMMON MISTAKES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            8 Mistakes First-Time Hostel Guests Make in Morocco
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                mistake: 'Booking the cheapest option without reading reviews',
                fix: 'A 60 MAD dorm might save 20 MAD but cost you sleep. Filter by reviews from the last 6 months. Pay the extra 15-20 MAD for a 4.5+ rated hostel.',
              },
              {
                mistake: 'Arriving without cash',
                fix: 'Most Moroccan hostels do not accept credit cards. Withdraw MAD at the airport or city ATM before checking in. Budget from 200-300 MAD cash for the first two nights plus meals.',
              },
              {
                mistake: 'Expecting hotel-level amenities',
                fix: 'Hostels provide a bed, Wi-Fi, and common areas. Towels, toiletries, and hair dryers are rarely included. Bring your own or buy locally. Adjust expectations and you will enjoy the experience more.',
              },
              {
                mistake: 'Not bringing a padlock',
                fix: 'The single most common regret. Lockers exist at 90% of hostels, but locks are your responsibility. Combination locks from 30 MAD work better than key locks (keys get lost).',
              },
              {
                mistake: 'Skipping the hostel common areas',
                fix: 'The rooftop or courtyard is where travel friendships start. Eat dinner there, join a card game, ask someone about their route. Solo travelers who avoid common areas miss half the hostel experience.',
              },
              {
                mistake: 'Booking every night in advance',
                fix: 'Leave 2-3 nights unbooked in a 2-week trip. Plans change in Morocco. You might want an extra day in Chefchaouen or skip a city entirely. Flexible cancellation policies help, but unbooked nights give true freedom.',
              },
              {
                mistake: 'Ignoring the medina location factor',
                fix: 'A hostel "in the medina" can mean 2 minutes from the main square or 25 minutes deep in the labyrinth. Check Google Maps for the exact pin and read reviews about how easy it is to find at night.',
              },
              {
                mistake: 'Forgetting about checkout and luggage storage',
                fix: 'Most hostels have a 10-11 AM checkout. If your bus leaves at 5 PM, confirm free luggage storage. Nearly all hostels offer it, but some charge from 10-20 MAD. Secure your valuables inside locked bags.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2 flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                  {item.mistake}
                </h3>
                <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed pl-7">
                  <span className="font-semibold text-green-700">Fix:</span> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          HOSTEL FACILITIES CHECKLIST
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-4">
            What to Check Before You Book
          </h2>
          <p className="text-center text-gray-600 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
            Not all hostels list these details upfront. Send a quick message asking about the items that matter most to your comfort.
          </p>
          <div className="card-moroccan p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: Wifi, label: 'Wi-Fi speed (ask for a speed test)' },
                { icon: Bed, label: 'Mattress type and bed size' },
                { icon: Lock, label: 'Locker size (will your bag fit?)' },
                { icon: Coffee, label: 'Breakfast included or extra cost' },
                { icon: Users, label: 'Dorm size (4-bed vs 8-bed vs 12-bed)' },
                { icon: Clock, label: 'Check-in / check-out times' },
                { icon: ShieldCheck, label: '24-hour reception or key code entry' },
                { icon: Building, label: 'Air conditioning or fan (summer)' },
                { icon: Moon, label: 'Heating system (winter)' },
                { icon: Luggage, label: 'Free luggage storage after checkout' },
                { icon: Globe, label: 'Airport or station pickup available' },
                { icon: Utensils, label: 'Kitchen access and cooking facilities' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-sm font-[family-name:var(--font-heading)] text-gray-700">
                  <item.icon className="h-4 w-4 text-[var(--color-accent)] shrink-0" />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED GUIDES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 text-center mb-10">
            Related Guides
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { href: '/budget-travel', title: 'Morocco Budget Travel Guide', desc: 'Complete budget breakdown for traveling Morocco on any wallet size.' },
              { href: '/morocco-backpacking-guide', title: 'Backpacking Morocco', desc: 'Routes, itineraries, and gear advice for backpacking the kingdom.' },
              { href: '/accommodations', title: 'Morocco Accommodation Guide', desc: 'Riads, hotels, guesthouses, and camping — all accommodation types explained.' },
              { href: '/safety', title: 'Morocco Safety Guide', desc: 'Scam awareness, safe neighborhoods, and solo travel safety tips.' },
              { href: '/transport', title: 'Getting Around Morocco', desc: 'Buses, trains, grand taxis, and domestic flights — transport explained.' },
              { href: '/first-time', title: 'First Time in Morocco', desc: 'Everything a first-time visitor needs to know before arrival.' },
              { href: '/packing', title: 'Morocco Packing List', desc: 'Season-by-season packing guide with cultural dress code tips.' },
              { href: '/food-guide', title: 'Morocco Food Guide', desc: 'Street food, restaurant etiquette, and the dishes you must try.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="font-bold font-[family-name:var(--font-heading)] text-gray-900 mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-1.5">
                  {guide.title}
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)]">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA
          ══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-[#2D1810] via-[#4A2C1A] to-[#1a0f08] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] mb-6">
            Ready to Book Your Morocco Hostel?
          </h2>
          <p className="text-white/80 font-[family-name:var(--font-heading)] text-lg mb-8">
            From 75 MAD per night, Morocco offers some of the most affordable and characterful hostel stays on the planet. Pick your city, grab a dorm bed, and let the medina do the rest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/budget-travel"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] hover:bg-[#8B4726] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              Full Budget Guide
            </Link>
            <Link
              href="/morocco-backpacking-guide"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-semibold transition-colors backdrop-blur-sm"
            >
              <Luggage className="h-5 w-5" />
              Backpacking Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

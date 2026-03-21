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
  Sun,
  Moon,
  Compass,
  Camera,
  Thermometer,
  Heart,
  HelpCircle,
  Tent,
  Mountain,
  Footprints,
  Luggage,
  Calendar,
  Eye,
  Sunrise,
  Shield,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Camel Trekking Morocco 2026 | Sahara Desert Rides & Multi-Day Treks',
  description:
    'Complete guide to camel trekking in Morocco. Compare Merzouga vs Zagora, sunset rides from 250 MAD, overnight desert camps, and multi-day Sahara treks. Includes packing lists, ethical operators, best seasons, and honest pricing.',
  keywords: [
    'camel trekking morocco',
    'sahara camel ride',
    'morocco desert camel tour',
    'merzouga camel trek',
    'zagora camel trek',
    'sahara desert tour morocco',
    'overnight camel trek morocco',
    'morocco camel ride price',
    'erg chebbi camel trek',
    'erg chigaga camel trek',
    'sunset camel ride morocco',
    'multi-day camel trek sahara',
    'morocco desert camp',
    'luxury desert camp morocco',
    'camel trekking merzouga',
    'sahara desert experience',
    'morocco camel tour cost',
    'best camel trek morocco 2026',
    'ethical camel trekking morocco',
    'what to wear camel trek morocco',
  ],
  openGraph: {
    title: 'Camel Trekking Morocco 2026 | Sahara Desert Rides & Multi-Day Treks',
    description:
      'Plan your Sahara camel trek with real prices, route comparisons, and ethical operator tips. From 1-hour sunset rides to 5-day expeditions across Erg Chebbi and Erg Chigaga.',
    url: `${BASE_URL}/morocco-camel-trekking`,
    images: [
      {
        url: `${BASE_URL}/images/hero-camel-trekking.webp`,
        width: 1200,
        height: 630,
        alt: 'Camel caravan crossing golden sand dunes of Erg Chebbi at sunset near Merzouga, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camel Trekking Morocco 2026 | Sahara Rides & Treks Guide',
    description:
      'Sunset rides from 250 MAD, overnight camps from 600 MAD, multi-day treks from 2,500 MAD. Everything you need to plan a camel trek in Morocco.',
    images: [`${BASE_URL}/images/hero-camel-trekking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-camel-trekking` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravelGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-camel-trekking`,
  name: 'Camel Trekking Morocco 2026 | Sahara Desert Rides & Multi-Day Treks',
  description:
    'Complete guide to camel trekking in Morocco. Compare Merzouga vs Zagora, sunset rides, overnight camps, multi-day Sahara expeditions. Includes pricing, packing lists, and ethical considerations.',
  url: `${BASE_URL}/morocco-camel-trekking`,
  image: `${BASE_URL}/images/hero-camel-trekking.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-camel-trekking`,
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
      { '@type': 'ListItem', position: 2, name: 'Camel Trekking Morocco', item: `${BASE_URL}/morocco-camel-trekking` },
    ],
  },
};

const faqItems = [
  {
    question: 'How much does a camel trek cost in Morocco?',
    answer:
      'Prices vary by trek type and season. A 1-hour sunset ride costs from 250 MAD per person. Overnight treks with desert camp stays run from 600 MAD to 2,500 MAD depending on camp quality (basic bivouac vs luxury). Multi-day treks (3-5 days) start from 2,500 MAD and reach 8,000+ MAD for premium guided expeditions. Seasonal pricing can change — peak season (October-April) commands higher rates.',
  },
  {
    question: 'Is Merzouga or Zagora better for camel trekking?',
    answer:
      'Merzouga (Erg Chebbi) offers taller dunes reaching 150 meters, more dramatic scenery, and better-established luxury camps. Zagora (Erg Chigaga) has fewer tourists, a more remote atmosphere, and requires a longer journey to reach the big dunes. Choose Merzouga for accessibility and infrastructure, Zagora for solitude and an off-grid experience.',
  },
  {
    question: 'What should I wear on a camel trek in Morocco?',
    answer:
      'Wear loose-fitting, breathable layers in light colors. Long pants protect your legs from chafing against the saddle. Closed-toe shoes or boots with ankle support work best. Bring a headscarf or shemagh to shield against sand and sun. Avoid shorts, flip-flops, and dark-colored clothing that absorbs heat. Temperatures drop sharply after sunset, so pack a warm fleece or jacket for overnight treks.',
  },
  {
    question: 'Are camel treks in Morocco ethical?',
    answer:
      'Reputable operators follow strict animal welfare practices — camels carry reasonable loads, receive regular veterinary checkups, rest during the hottest hours, and graze freely when not working. Look for operators who limit riding time to 2-3 hours per session, rotate their camels, and keep animals in good body condition. Avoid any operator who whips camels, overloads them, or uses visibly malnourished animals.',
  },
  {
    question: 'When is the best time to do a camel trek in Morocco?',
    answer:
      'October through April offers the most comfortable temperatures, with daytime highs of 20-28\u00B0C. March and October strike the best balance — warm days, cool nights, and clear skies. Avoid June through August when daytime temperatures exceed 45\u00B0C in the Sahara. December and January bring cold desert nights (sometimes below 5\u00B0C), so pack extra layers for winter treks.',
  },
  {
    question: 'Can children do a camel trek in Morocco?',
    answer:
      'Yes. Most operators accept children aged 4 and older for short sunset rides. Children under 8 typically ride with an adult or a guide walks alongside holding the camel. Overnight treks work well for kids aged 8 and above. Multi-day treks are best suited for teens and adults due to the physical demands. Always confirm age policies with your specific operator before booking.',
  },
  {
    question: 'Do I need to book a camel trek in advance?',
    answer:
      'During peak season (October-April), book at least 2-3 weeks ahead for overnight and multi-day treks, especially at luxury camps that fill quickly. Short sunset rides can often be arranged same-day through your hotel or riad in Merzouga. For budget and mid-range overnight camps, 3-5 days advance booking is usually sufficient outside of Christmas/New Year and Easter periods.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TREK TYPES
   ═══════════════════════════════════════════════════════════════ */

const trekTypes = [
  {
    name: 'Sunset / Sunrise Ride',
    duration: '1-2 hours',
    icon: Sunrise,
    price: 'From 250 MAD per person',
    difficulty: 'Easy',
    bestFor: 'First-timers, families, short trips',
    description:
      'The most popular option. You ride a camel across the dunes for 45-90 minutes, stop at a viewpoint for sunset or sunrise photos, and return. Some operators include mint tea at a dune crest. No camping involved — you return to your hotel or riad the same evening.',
    includes: ['Guided camel ride', 'Tea at dune viewpoint', 'Photo stops', 'Hotel pickup (Merzouga)'],
  },
  {
    name: 'Overnight Desert Camp Trek',
    duration: '1 night / 2 days',
    icon: Tent,
    price: 'From 600 MAD per person',
    difficulty: 'Easy to Moderate',
    bestFor: 'Couples, small groups, first desert camp experience',
    description:
      'Ride camels to a desert camp (1.5-2 hours), spend the night under the stars, and ride back after sunrise. Camps range from basic bivouacs with shared toilets to luxury tented suites with private bathrooms, hot showers, and king-size beds. Dinner and breakfast included at all levels.',
    includes: ['Camel ride (both ways)', 'Desert camp stay', 'Dinner & breakfast', 'Berber drumming & music', 'Sandboarding (most camps)'],
  },
  {
    name: 'Multi-Day Sahara Trek',
    duration: '3-7 days',
    icon: Compass,
    price: 'From 2,500 MAD per person',
    difficulty: 'Moderate to Challenging',
    bestFor: 'Adventure seekers, photographers, experienced travelers',
    description:
      'A genuine desert expedition. You ride 4-6 hours daily across varied terrain — dune fields, rocky hammada, dried riverbeds, and oasis settlements. Nights rotate between wild bivouacs and established camps. A support vehicle carries heavy gear and water. Guides share Berber navigation techniques, desert ecology, and nomadic traditions.',
    includes: ['All meals', 'Experienced Berber guide', 'Support vehicle', 'Camping equipment', 'Water supply', 'First aid kit'],
  },
  {
    name: 'Luxury Private Trek',
    duration: '2-4 days',
    icon: Star,
    price: 'From 5,000 MAD per person',
    difficulty: 'Easy to Moderate',
    bestFor: 'Special occasions, honeymooners, luxury travelers',
    description:
      'A private camel trek with a dedicated guide, cook, and camp crew. You ride at your own pace with rest stops whenever needed. Nights are spent in exclusive private camps with carpeted tents, real beds, gourmet meals, and sometimes even solar-powered electricity. Routes are customized to your interests and fitness level.',
    includes: ['Private guide & cook', 'Luxury camp setup', 'Gourmet meals & wine', 'Photography assistance', 'Custom route', '4x4 backup vehicle'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MERZOUGA vs ZAGORA COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const comparisonData = [
  { feature: 'Dune Field', merzouga: 'Erg Chebbi — up to 150m tall', zagora: 'Erg Chigaga — up to 300m tall' },
  { feature: 'Distance from Marrakech', merzouga: '9-10 hours by road', zagora: '6-7 hours (Zagora town), 9+ hours to Erg Chigaga' },
  { feature: 'Tourist Volume', merzouga: 'Higher — well-established tourism hub', zagora: 'Lower — more remote, fewer visitors' },
  { feature: 'Camp Quality Range', merzouga: 'Budget to ultra-luxury (100+ camps)', zagora: 'Budget to luxury (30+ camps)' },
  { feature: 'Dune Accessibility', merzouga: '15-90 min camel ride to dunes', zagora: '2-3 hour drive from Zagora town to Erg Chigaga' },
  { feature: 'Best For', merzouga: 'Short trips, first-timers, luxury seekers', zagora: 'Off-grid adventure, solitude, multi-day treks' },
  { feature: 'Sunset Ride Price', merzouga: 'From 250 MAD', zagora: 'From 300 MAD' },
  { feature: 'Overnight Camp Price', merzouga: 'From 600 MAD', zagora: 'From 800 MAD' },
  { feature: 'Star Visibility', merzouga: 'Excellent (some light pollution from town)', zagora: 'Exceptional (zero light pollution at Erg Chigaga)' },
  { feature: 'Nearby Attractions', merzouga: 'Khamlia village, fossil sites, Rissani souk', zagora: 'Draa Valley, Tamegroute pottery, Ait Isfoul oasis' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  { category: 'Clothing', items: ['Loose long pants (avoid jeans — chafing)', 'Light long-sleeve shirts', 'Warm fleece or jacket (overnight)', 'Headscarf / shemagh / buff', 'Closed-toe shoes with ankle support', 'Warm socks for cold nights', 'Swimwear (some luxury camps have pools)'] },
  { category: 'Protection', items: ['Sunscreen SPF 50+', 'UV-rated sunglasses with strap', 'Lip balm with SPF', 'Wide-brim hat or cap', 'Insect repellent (seasonal)'] },
  { category: 'Gear', items: ['Headlamp or flashlight', 'Refillable water bottle (2L minimum)', 'Small daypack for essentials', 'Camera with dust-proof bag or cover', 'Power bank (no outlets in basic camps)', 'Zip-lock bags for electronics & documents'] },
  { category: 'Health & Comfort', items: ['Personal medications', 'Hand sanitizer & wet wipes', 'Toilet paper (basic camps may lack it)', 'Eye drops (sand and dry air)', 'Blister plasters', 'Ear plugs (camp generators, donkeys)'] },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasons = [
  {
    name: 'Peak Season',
    months: 'October - November',
    icon: Sun,
    temp: '22-30\u00B0C days / 10-15\u00B0C nights',
    rating: 5,
    notes: 'Ideal conditions. Warm days, cool nights, clear skies. Book 3-4 weeks ahead. Prices at their highest.',
  },
  {
    name: 'High Season',
    months: 'March - April',
    icon: Sun,
    temp: '24-32\u00B0C days / 12-18\u00B0C nights',
    rating: 5,
    notes: 'Spring brings wildflowers to the desert edges. Occasional sandstorms in March. Easter is extremely busy.',
  },
  {
    name: 'Shoulder Season',
    months: 'December - February',
    icon: Moon,
    temp: '16-22\u00B0C days / 2-8\u00B0C nights',
    rating: 4,
    notes: 'Cold nights require serious layers. Daytime riding is pleasant. Fewer crowds. Christmas/New Year books out fast.',
  },
  {
    name: 'Shoulder Season',
    months: 'May & September',
    icon: Thermometer,
    temp: '32-40\u00B0C days / 18-24\u00B0C nights',
    rating: 3,
    notes: 'Getting hot. Early morning and sunset rides only. Some operators reduce schedules. Lower prices and fewer tourists.',
  },
  {
    name: 'Off Season',
    months: 'June - August',
    icon: AlertTriangle,
    temp: '40-50\u00B0C days / 25-32\u00B0C nights',
    rating: 1,
    notes: 'Dangerously hot. Most reputable operators suspend multi-day treks. Only ultra-short sunrise rides at dawn. Not recommended.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ETHICAL CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const ethicalChecklist = [
  'Camels appear well-fed with good body condition — no visible ribs or hip bones',
  'Saddle pads are thick and clean with no sores or raw patches on the animal',
  'Camels rest in shade during midday heat and have constant access to water',
  'Maximum 2-3 hours of riding per session with breaks',
  'Operator rotates camels so no single animal works every day',
  'Guide handles camels gently — no whipping, kicking, or yanking the lead rope',
  'Camels graze freely when not working (not kept permanently tied or hobbled)',
  'Operator can tell you each camel\'s name, age, and history',
  'Group sizes stay small (6-8 riders maximum per guide)',
  'Veterinary records available on request',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const priceBreakdown = [
  { trek: 'Sunset / Sunrise Ride (1-2 hrs)', budget: 'From 250 MAD', mid: 'From 400 MAD', luxury: 'From 700 MAD' },
  { trek: 'Overnight — Basic Bivouac', budget: 'From 600 MAD', mid: '\u2014', luxury: '\u2014' },
  { trek: 'Overnight — Standard Camp', budget: '\u2014', mid: 'From 1,200 MAD', luxury: '\u2014' },
  { trek: 'Overnight — Luxury Camp', budget: '\u2014', mid: '\u2014', luxury: 'From 2,500 MAD' },
  { trek: '3-Day Trek', budget: 'From 2,500 MAD', mid: 'From 4,000 MAD', luxury: 'From 7,000 MAD' },
  { trek: '5-Day Expedition', budget: 'From 4,000 MAD', mid: 'From 6,500 MAD', luxury: 'From 12,000 MAD' },
  { trek: 'Private Sunset Ride (couple)', budget: '\u2014', mid: 'From 800 MAD', luxury: 'From 1,500 MAD' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCamelTrekkingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravelGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-camel-trekking.webp"
            alt="Camel caravan crossing golden Erg Chebbi dunes at sunset near Merzouga, Morocco"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="hero-overlay" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
            Camel Trekking in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-[family-name:var(--font-heading)] max-w-3xl mx-auto">
            Sahara Desert Rides &amp; Multi-Day Treks &mdash; From 1-Hour Sunset Rides to 5-Day Expeditions Across Erg Chebbi and Erg Chigaga
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#trek-types" className="bg-[var(--color-accent)] hover:bg-[#8B4526] text-white px-6 py-3 rounded-lg font-semibold transition-all">
              Explore Trek Types
            </a>
            <a href="#prices" className="border-2 border-white text-white hover:bg-white/10 px-6 py-3 rounded-lg font-semibold transition-all">
              View Prices
            </a>
          </div>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[#FAF8F5] border-b border-gray-200" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li className="flex items-center gap-1">
              <Home className="w-4 h-4" />
              <Link href="/" className="hover:text-[var(--color-accent)]">Home</Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li className="text-[var(--color-accent)] font-medium">Camel Trekking Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-[family-name:var(--font-display)]">
              Why Morocco&apos;s Sahara Camel Treks Draw 300,000+ Riders Each Year
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-4 font-[family-name:var(--font-heading)]">
              <p>
                Riding a camel across the Sahara ranks among Morocco&apos;s most sought-after experiences.
                The country&apos;s two major dune fields &mdash; Erg Chebbi near Merzouga and Erg Chigaga beyond Zagora &mdash;
                offer distinctly different landscapes, from towering 150-meter sand mountains to vast, flat
                desert plains stretching to the Algerian border.
              </p>
              <p>
                The camel trek industry has matured significantly since the early 2000s. Today, you can choose
                between a quick sunset ride lasting under two hours, an overnight stay at a desert camp (ranging
                from basic Berber bivouacs to air-conditioned luxury tents), or a multi-day expedition that
                traces ancient trans-Saharan trade routes.
              </p>
              <p>
                This guide breaks down every option with real prices, honest comparisons between Merzouga and
                Zagora, practical packing lists, and a framework for identifying ethical operators who treat
                their animals well. All prices reflect 2026 rates, though seasonal pricing can change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trek Types ── */}
      <section id="trek-types" className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Types of Camel Treks in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Four main formats exist, each suited to different budgets, time constraints, and adventure levels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {trekTypes.map((trek) => (
              <div key={trek.name} className="card-moroccan p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[var(--color-accent)]/10">
                    <trek.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                      {trek.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-gray-600">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {trek.duration}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {trek.price}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 font-[family-name:var(--font-heading)]">{trek.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 bg-amber-50 text-amber-800 rounded-full font-medium">
                    {trek.difficulty}
                  </span>
                  <span className="text-xs px-3 py-1 bg-blue-50 text-blue-800 rounded-full font-medium">
                    {trek.bestFor}
                  </span>
                </div>
                <div className="border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">Typically Includes:</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                    {trek.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-display)]">
              What to Expect on a Sahara Camel Trek
            </h2>
            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <Footprints className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">The Mount &amp; Dismount</h3>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                      Camels kneel for you to climb on. When they stand, they lurch forward then backward &mdash; hold the front handle firmly and lean back. Dismounting reverses the process. Your guide will coach you through the first time. It feels unstable for about 30 seconds, then your body adjusts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <Eye className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">The Ride Itself</h3>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                      Camel riding uses a side-to-side swaying motion, different from horseback riding. After 20-30 minutes, most people find a rhythm. Inner thigh muscles do the most work. If you feel sore, ask the guide to stop &mdash; walking alongside the camel on flat stretches is common and welcomed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <Moon className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">Desert Camp Nights</h3>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                      Evening camps follow a pattern: arrive, settle into your tent, watch sunset from the dunes, eat a tagine dinner around a fire, listen to Berber drumming and Gnawa music. After the fire dies, the Saharan night sky reveals itself &mdash; on moonless nights, you can see the Milky Way band stretching horizon to horizon. Most people sleep on mattresses outside their tent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <Camera className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)]">Photography Conditions</h3>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                      Golden hour at Erg Chebbi lasts 40-50 minutes. The dunes shift from orange to deep red to purple. Sand gets everywhere &mdash; bring a dust-proof bag or use zip-lock bags for camera gear. Phone cameras work fine for most shots, but a wide-angle lens captures the dune scale that phone cameras compress. Your guide will know the best dune crests for caravan silhouette shots.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Merzouga vs Zagora ── */}
      <section id="comparison" className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Merzouga vs Zagora: Which Sahara Trek?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Morocco has two primary desert trekking regions. Here is a side-by-side breakdown.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--color-accent)] text-white">
                  <th className="p-4 text-left font-semibold font-[family-name:var(--font-heading)]">Feature</th>
                  <th className="p-4 text-left font-semibold font-[family-name:var(--font-heading)]">Merzouga (Erg Chebbi)</th>
                  <th className="p-4 text-left font-semibold font-[family-name:var(--font-heading)]">Zagora (Erg Chigaga)</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={row.feature} className={idx % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900 text-sm">{row.feature}</td>
                    <td className="p-4 text-gray-700 text-sm">{row.merzouga}</td>
                    <td className="p-4 text-gray-700 text-sm">{row.zagora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
                <MapPin className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Choose Merzouga If...
              </h3>
              <ul className="space-y-2 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You have limited time (2-3 days for the desert portion)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You want a luxury desert camp with real amenities</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You prefer well-maintained roads and easy access</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You want tall, photogenic dunes close to accommodation</li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-gold)]">
              <h3 className="text-xl font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
                <Compass className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Choose Zagora If...
              </h3>
              <ul className="space-y-2 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You want a remote, crowd-free desert experience</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> Stargazing is a priority (zero light pollution at Chigaga)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You have 4+ days to dedicate to the desert</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" /> You enjoy rugged, off-road adventure over comfort</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Wear ── */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              What to Wear on a Camel Trek
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Desert conditions shift dramatically between day and night. Dress in layers you can peel off or add back quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <Sun className="w-6 h-6 text-amber-500" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">Daytime (Hot)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Light-colored, loose cotton or linen pants</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Long-sleeve breathable shirt (sun protection)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Headscarf wrapped as turban (guides will help)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Closed-toe shoes &mdash; not sandals</li>
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <Moon className="w-6 h-6 text-indigo-500" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">Nighttime (Cold)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Warm fleece mid-layer or down jacket</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Thick wool or thermal socks</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Beanie or warm hat (Dec-Feb especially)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" /> Thermal base layer for winter treks</li>
              </ul>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">Avoid Wearing</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Jeans &mdash; stiff fabric causes saddle chafing</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Flip-flops or open-toe sandals &mdash; hot sand burns</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Dark or black clothing &mdash; absorbs desert heat</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Shorts &mdash; inner thigh rubs raw against saddle leather</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ethical Considerations ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
                Ethical Camel Trekking: What to Look For
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
                Animal welfare varies between operators. Use this checklist to evaluate any trek company before booking.
              </p>
            </div>

            <div className="card-moroccan p-8 border-l-4 border-green-600">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-7 h-7 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">Green Flags &mdash; Signs of a Responsible Operator</h3>
              </div>
              <ul className="space-y-3">
                {ethicalChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700 font-[family-name:var(--font-heading)]">
                    <ShieldCheck className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6 mt-6 border-l-4 border-red-500 bg-red-50/50">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900 font-[family-name:var(--font-display)]">Red Flags &mdash; Walk Away</h3>
              </div>
              <ul className="space-y-2 text-gray-700 font-[family-name:var(--font-heading)]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Camels have visible wounds, sores, or exposed bones</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Guide uses a stick, whip, or metal rod on the animals</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Camels carry more than one adult rider at a time</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> No shade, water, or rest breaks provided during hot hours</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" /> Operator refuses to answer welfare questions or gets defensive</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section id="seasons" className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Best Time for Camel Trekking in Morocco
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              The Sahara&apos;s extreme temperatures make timing critical. Here is a month-by-month breakdown.
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {seasons.map((season, idx) => (
              <div key={idx} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex items-center gap-3 min-w-[200px]">
                    <season.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{season.name}</h3>
                      <p className="text-sm text-gray-500">{season.months}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 min-w-[120px]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < season.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 mb-1"><Thermometer className="w-4 h-4 inline mr-1" />{season.temp}</p>
                    <p className="text-gray-700 text-sm font-[family-name:var(--font-heading)]">{season.notes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prices ── */}
      <section id="prices" className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Camel Trek Prices in Morocco (2026)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Per-person rates across budget, mid-range, and luxury tiers. Seasonal pricing can change &mdash; book direct with operators for the best rates.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[var(--color-accent)] text-white">
                  <th className="p-4 text-left font-semibold font-[family-name:var(--font-heading)]">Trek Type</th>
                  <th className="p-4 text-center font-semibold font-[family-name:var(--font-heading)]">Budget</th>
                  <th className="p-4 text-center font-semibold font-[family-name:var(--font-heading)]">Mid-Range</th>
                  <th className="p-4 text-center font-semibold font-[family-name:var(--font-heading)]">Luxury</th>
                </tr>
              </thead>
              <tbody>
                {priceBreakdown.map((row, idx) => (
                  <tr key={row.trek} className={idx % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-white'}>
                    <td className="p-4 font-semibold text-gray-900 text-sm">{row.trek}</td>
                    <td className="p-4 text-center text-gray-700 text-sm">{row.budget}</td>
                    <td className="p-4 text-center text-gray-700 text-sm">{row.mid}</td>
                    <td className="p-4 text-center text-gray-700 text-sm">{row.luxury}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 max-w-4xl mx-auto">
            <div className="card-moroccan p-6 bg-amber-50/50 border-l-4 border-[var(--color-gold)]">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                <div className="font-[family-name:var(--font-heading)]">
                  <h3 className="font-bold text-gray-900 mb-2">Pricing Notes</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>All prices are per person and based on double occupancy for camps.</li>
                    <li>Solo travelers pay 20-40% more at most operators (no sharing cost).</li>
                    <li>Groups of 4+ often negotiate 10-15% discounts on multi-day treks.</li>
                    <li>Christmas, New Year, and Easter carry 25-50% peak surcharges at luxury camps.</li>
                    <li>Prices at the Merzouga dune parking lot start lower but quality varies wildly.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section id="packing" className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Packing List for Sahara Camel Treks
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              What to bring depends on trek length. This list covers overnight and multi-day treks. For sunset rides, just bring sunscreen, water, and a camera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packingList.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)] flex items-center gap-2">
                  <Luggage className="w-5 h-5 text-[var(--color-accent)]" />
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-700 text-sm font-[family-name:var(--font-heading)]">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pro Tips ── */}
      <section className="bg-white py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-display)]">
              Insider Tips From Desert Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">Book Direct, Not Through Hotels</h3>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">Hotels in Merzouga take 20-30% commission. Contact camp operators directly via WhatsApp or their website. You pay less and more money reaches the guides.</p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">Full Moon vs New Moon</h3>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">Full moon nights illuminate the dunes beautifully but wash out the stars. New moon nights deliver the Milky Way in full force. Check the lunar calendar before booking if stargazing matters to you.</p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">Ask About Group Size</h3>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">Some budget operators pack 15-20 riders on a single caravan. The experience suffers &mdash; long waits, rushed stops, impersonal service. Ask the exact group size before paying. Six to eight riders per guide is the sweet spot.</p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">Tipping Your Guide</h3>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">Standard tipping: 50-100 MAD for sunset rides, 100-200 MAD per day for overnight/multi-day treks. Tip the camel handler separately &mdash; they often receive the lowest wages. Give tips directly in cash at the end of the trek.</p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Mountain className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">Combine with Other Experiences</h3>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">Most Merzouga operators also offer sandboarding, quad biking, and visits to Khamlia village for Gnawa music. Multi-day treks from Zagora can include stops at Draa Valley kasbahs and Tamegroute&apos;s green-glazed pottery workshops.</p>
                  </div>
                </div>
              </div>
              <div className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <Thermometer className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1 font-[family-name:var(--font-display)]">Hydration Strategy</h3>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">Drink 3-4 liters of water per day in the desert, starting the day before your trek. Dehydration hits fast in dry heat because sweat evaporates instantly &mdash; you don&apos;t feel how much water you&apos;re losing. Carry electrolyte tablets or oral rehydration salts.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting There: Logistics ── */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-[family-name:var(--font-display)]">
              Getting to the Desert: Transport &amp; Logistics
            </h2>

            <div className="space-y-6">
              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  From Marrakech to Merzouga
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-3">
                  The drive takes 9-10 hours on the N10 through the Tizi n&apos;Tichka pass, Ouarzazate, and the Dades/Todra Gorges. Most travelers split this into a 2-day road trip with an overnight in Ouarzazate or Tinghir. Direct shared minibuses (CTM or Supratours) run daily and cost from 250 MAD one-way. Private transfers run from 2,500-3,500 MAD for the car.
                </p>
                <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                  Flights from Casablanca to Errachidia (the nearest airport, 1.5 hours from Merzouga) operate 3-4 times weekly on Royal Air Maroc. From Errachidia, arrange a transfer through your camp or hire a grand taxi for from 350 MAD.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[var(--color-accent)]" />
                  From Marrakech to Zagora &amp; Erg Chigaga
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-3">
                  Zagora town sits 6-7 hours from Marrakech via the Tizi n&apos;Tichka and Draa Valley &mdash; a scenic route passing through Ouarzazate and Agdz. CTM buses run this route daily for from 180 MAD.
                </p>
                <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                  Reaching Erg Chigaga from Zagora requires another 2-3 hours by 4x4 across rough piste tracks. No public transport covers this leg &mdash; your trek operator handles it. This remoteness is exactly what makes Chigaga special.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)] flex items-center gap-2">
                  <Star className="w-5 h-5 text-[var(--color-accent)]" />
                  Where to Stay Before &amp; After Your Trek
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-heading)]">
                  In Merzouga, dozens of riads and auberges line the road facing Erg Chebbi. Budget rooms start from 200 MAD/night; mid-range riads with pool and breakfast from 500 MAD. Most trek operators will pick you up directly from your accommodation. In Zagora, hotels cluster along Avenue Mohammed V &mdash; book one with air conditioning and a pool if arriving in the warmer months.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section id="faq" className="bg-white py-16">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Frequently Asked Questions: Camel Trekking Morocco
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 font-[family-name:var(--font-display)]">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-[family-name:var(--font-display)]">
              Related Morocco Guides
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { title: 'Camping in Morocco', href: '/camping', desc: 'Desert camps, Atlas bivouacs, and coastal camping spots across Morocco.' },
              { title: 'Stargazing Guide', href: '/stargazing', desc: 'Best dark-sky locations, Sahara astronomy, and stargazing tour operators.' },
              { title: 'Budget Travel Morocco', href: '/budget-travel', desc: 'Travel Morocco on 300-500 MAD/day with real cost breakdowns.' },
              { title: 'What to Pack for Morocco', href: '/packing', desc: 'Season-by-season packing lists for every type of Moroccan trip.' },
              { title: 'Adventure Activities', href: '/adventure', desc: 'Trekking, surfing, sandboarding, quad biking, and more active experiences.' },
              { title: 'Morocco for First-Timers', href: '/first-time', desc: 'Essential tips, cultural etiquette, and planning advice for your first visit.' },
              { title: 'Best Time to Visit', href: '/best-time-visit-morocco', desc: 'Month-by-month climate guide for every region of Morocco.' },
              { title: 'Sahara Desert Guide', href: '/sahara-desert', desc: 'Complete guide to reaching, exploring, and experiencing the Moroccan Sahara.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2 font-[family-name:var(--font-display)] group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                  {guide.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-[family-name:var(--font-display)]">
            Ready to Ride Through the Sahara?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Explore our city guides for Merzouga, Ouarzazate, and Zagora to plan the full desert leg of your Morocco trip.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/merzouga"
              className="bg-white text-[var(--color-accent)] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              Explore Merzouga <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ouarzazate"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all inline-flex items-center gap-2"
            >
              Explore Ouarzazate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

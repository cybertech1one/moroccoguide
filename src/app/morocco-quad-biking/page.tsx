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
  Mountain,
  Compass,
  Gauge,
  Shield,
  Sun,
  Wind,
  Calendar,
  Camera,
  Bike,
  Flag,
  Glasses,
  Map,
  Timer,
  Zap,
  Award,
  BookOpen,
  Heart,
  CircleDot,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Quad Biking & ATV Guide 2026 | Best Desert, Dune & Mountain Tours',
  description:
    'Complete guide to quad biking and ATV tours across Morocco. Marrakech Palmeraie quads from 350 MAD, Agafay desert trails, Merzouga sand dune ATVs, Essaouira beach rides, Atlas Mountains off-road. Safety tips, operators, prices, and booking advice.',
  keywords: [
    'Morocco quad biking',
    'ATV tours Morocco',
    'quad biking Marrakech',
    'Palmeraie quad tour',
    'Agafay desert quad',
    'Merzouga ATV tour',
    'Essaouira beach quad',
    'Atlas Mountains quad biking',
    'Ouarzazate desert ATV',
    'Morocco desert quad tour',
    'quad biking prices Morocco',
    'best quad tours Morocco 2026',
    'sunset quad tour Marrakech',
    'sand dune ATV Sahara',
    'Morocco adventure sports',
    'quad biking safety Morocco',
    'family quad biking Morocco',
    'group quad tours Morocco',
    'Morocco off-road adventure',
    'quad biking age limit Morocco',
  ],
  openGraph: {
    title: 'Morocco Quad Biking & ATV Guide 2026 | Best Desert, Dune & Mountain Tours',
    description:
      'Ride through Moroccan deserts, dunes, and mountains on powerful ATVs. From Marrakech Palmeraie half-day rides to full Sahara dune adventures. Prices from 350 MAD, all skill levels welcome.',
    url: `${BASE_URL}/morocco-quad-biking`,
    images: [
      {
        url: `${BASE_URL}/images/hero-quad-biking.webp`,
        width: 1200,
        height: 630,
        alt: 'Quad bikes lined up at the edge of Moroccan desert dunes with golden sand stretching to the horizon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Quad Biking & ATV Guide 2026 | Desert, Dune & Mountain Tours',
    description:
      'Complete guide to quad biking across Morocco. Palmeraie, Agafay, Merzouga, Essaouira, Atlas Mountains. Prices, operators, safety tips, and booking advice.',
    images: [`${BASE_URL}/images/hero-quad-biking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-quad-biking` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-quad-biking`,
  name: 'Morocco Quad Biking & ATV Guide 2026 | Best Desert, Dune & Mountain Tours',
  description:
    'Complete guide to quad biking and ATV tours across Morocco. Covering Marrakech Palmeraie, Agafay Desert, Merzouga Dunes, Essaouira beaches, Atlas Mountains, and Ouarzazate trails.',
  url: `${BASE_URL}/morocco-quad-biking`,
  image: `${BASE_URL}/images/hero-quad-biking.webp`,
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
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: `${BASE_URL}/morocco-quad-biking`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Quad Biking & ATV Guide', item: `${BASE_URL}/morocco-quad-biking` },
    ],
  },
};

const faqItems = [
  {
    question: 'Do I need a license to ride a quad bike in Morocco?',
    answer:
      'No driving license is required for guided quad tours in Morocco. Tour operators provide all necessary training before each ride. However, if you want to rent a quad independently (rare), a valid driving license may be requested by some rental agencies.',
  },
  {
    question: 'What is the minimum age for quad biking in Morocco?',
    answer:
      'Most operators set the minimum age at 16 for solo riders, though some allow riders as young as 12 on smaller 90cc quads. Children aged 6 and above can typically ride as passengers with an adult on larger machines. Always confirm age policies with your chosen operator before booking.',
  },
  {
    question: 'What should I wear for a quad biking tour in Morocco?',
    answer:
      'Wear long trousers, closed-toe shoes or boots, and a long-sleeved top. Bring sunglasses or goggles to protect from dust and sand. Operators provide helmets and often goggles, but bringing your own sunglasses is recommended. Avoid loose scarves or clothing that could catch in moving parts.',
  },
  {
    question: 'Is quad biking safe in Morocco?',
    answer:
      'Quad biking is generally safe when done with reputable operators who provide proper safety equipment and briefings. Key safety measures include mandatory helmets, speed-limit enforcement on tours, trained guides riding alongside the group, and well-maintained machines. Always choose licensed operators with good reviews.',
  },
  {
    question: 'What is the best time of year for quad biking in Morocco?',
    answer:
      'The best months are October through April when temperatures are comfortable (18-28°C). Summer rides in the desert can exceed 45°C and are only recommended at sunrise or sunset. Spring (March-May) offers the best combination of pleasant weather and green landscapes, especially around the Palmeraie and Atlas foothills.',
  },
  {
    question: 'How much does quad biking cost in Morocco?',
    answer:
      'Prices vary by location and duration. A 2-hour Palmeraie tour starts from 350 MAD per person. Half-day Agafay desert rides run from 600 MAD. Full-day Merzouga dune adventures cost from 900 MAD. Sunset tours with tea and snacks are from 500 MAD. Private tours typically cost 30-50% more than group options.',
  },
  {
    question: 'Can beginners ride quad bikes in Morocco?',
    answer:
      'Absolutely. Most Morocco quad tours are designed for first-time riders. You will receive a 15-20 minute briefing covering acceleration, braking, steering, and terrain handling. Guides adjust the pace to the least experienced rider in the group. Automatic transmission quads are standard, so no gear-shifting knowledge is needed.',
  },
  {
    question: 'What happens if the quad bike breaks down during a tour?',
    answer:
      'Reputable operators carry basic repair kits and have backup quads available. Most guided tours include a support vehicle trailing the group with spare parts, water, and first-aid supplies. If a mechanical issue cannot be resolved on-site, the operator will arrange a replacement vehicle or transport you back. Breakdowns are covered in the tour price.',
  },
  {
    question: 'Should I book a group or private quad tour?',
    answer:
      'Group tours (6-12 riders) are more affordable and social. Private tours offer flexibility with pace, route, and stops for photography. For couples or families, private tours are often worth the premium. If you are an experienced rider wanting to push speed limits, private tours allow more freedom. Budget travelers will find group tours excellent value.',
  },
  {
    question: 'Can I take photos during a quad biking tour?',
    answer:
      'Yes. Most tours include 2-3 planned photo stops at scenic viewpoints. Some operators provide an action camera mount for your quad. Secure your phone in a zipped pocket or waterproof pouch to prevent loss from vibrations. Avoid using your phone while riding. Guides are usually happy to take photos of your group during stops.',
  },
];

const faqJsonLd = {
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
   DATA: TOP QUAD BIKING DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const quadDestinations = [
  {
    name: 'Marrakech Palmeraie',
    icon: Compass,
    terrain: 'Palm groves, dirt tracks, Berber villages',
    duration: '2 hours',
    price: 'from 350 MAD',
    difficulty: 'Beginner-friendly',
    bestFor: 'First-timers and families',
    description:
      'The most popular quad biking spot in Morocco. The Palmeraie stretches across 13,000 hectares of palm groves northeast of Marrakech. Trails wind through dusty paths between palm trees, past Berber farmsteads, and along irrigation channels. The flat terrain makes this perfect for beginners, and the proximity to Marrakech (15-minute transfer) keeps it convenient.',
    highlights: ['Hotel pickup included', 'Berber village visits', 'Mint tea break at local home', 'Flat, easy terrain'],
    operators: ['Palmeraie Quad', 'Marrakech Quad Adventure', 'Atlas Quad Excursions'],
  },
  {
    name: 'Agafay Desert',
    icon: Sun,
    terrain: 'Rocky desert, stone plateaus, dry riverbeds',
    duration: '2-4 hours',
    price: 'from 600 MAD',
    difficulty: 'Intermediate',
    bestFor: 'Photographers and sunset seekers',
    description:
      'The Agafay stone desert lies just 30 km south of Marrakech, offering a dramatically different landscape from the Palmeraie. This lunar-like terrain of rocky hills and barren plateaus creates an otherworldly riding experience. The lack of sand makes handling more predictable than Saharan dunes, yet the terrain is far more challenging than the Palmeraie. Sunset rides here are spectacular, with the Atlas Mountains silhouetted against orange skies.',
    highlights: ['Atlas Mountain panoramas', 'Sunset tour option with dinner', 'Rocky desert landscape', 'Glamping camp stopovers'],
    operators: ['Agafay Desert Quad', 'Morocco Desert Adventures', 'Scarabeo Camp Quad Tours'],
  },
  {
    name: 'Merzouga & Erg Chebbi Dunes',
    icon: Wind,
    terrain: 'Sand dunes, hard-packed desert, oasis trails',
    duration: '1-3 hours',
    price: 'from 500 MAD',
    difficulty: 'Intermediate to Advanced',
    bestFor: 'Thrill seekers and desert lovers',
    description:
      'Riding ATVs across the towering Erg Chebbi sand dunes near Merzouga is the ultimate Moroccan quad experience. Dunes rise up to 150 meters, and the constantly shifting sands demand real skill. Operators use powerful 250cc-450cc machines built for deep sand. Sunrise rides launch from desert camps before the heat builds. The contrast between golden dunes, black rocky hammada, and green oasis palmeries creates a varied and visually stunning ride.',
    highlights: ['Sahara sand dune riding', 'Sunrise and sunset tours', 'Desert camp combo packages', 'Powerful dune-spec quads'],
    operators: ['Merzouga Quad Excursions', 'Sahara ATV Adventures', 'Erg Chebbi Quad Tours'],
  },
  {
    name: 'Essaouira Beach & Dunes',
    icon: Compass,
    terrain: 'Atlantic beach, coastal dunes, argan forest trails',
    duration: '2-3 hours',
    price: 'from 450 MAD',
    difficulty: 'Beginner to Intermediate',
    bestFor: 'Beach lovers and wind sports fans',
    description:
      'Essaouira offers a unique coastal quad experience along wide Atlantic beaches and forested sand dunes south of the medina. Rides typically head along Sidi Kaouki beach, through argan tree forests where goats climb the branches, and across the coastal dune systems. The Atlantic wind keeps temperatures comfortable even in summer. Low-tide rides on hard-packed sand allow for exhilarating speed runs along the shoreline.',
    highlights: ['Beach riding at low tide', 'Argan forest trails', 'Cooler coastal temperatures', 'Combine with camel ride on beach'],
    operators: ['Essaouira Quad Tours', 'Atlantic Adventures', 'Mogador Quad Experience'],
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    terrain: 'Mountain trails, river valleys, Berber villages',
    duration: '4-8 hours',
    price: 'from 900 MAD',
    difficulty: 'Intermediate to Advanced',
    bestFor: 'Experienced riders and nature enthusiasts',
    description:
      'Full-day Atlas Mountain quad expeditions take riders through remote valleys, across riverbeds, and up mountain trails with breathtaking elevation changes. Routes typically depart from Marrakech heading toward the Ourika Valley or Toubkal foothills. You will pass through traditional Berber villages at altitude, ford seasonal streams, and navigate rocky switchbacks. The scenery shifts from arid lowlands to terraced green valleys as you climb.',
    highlights: ['Dramatic elevation changes', 'Berber village lunch stops', 'River ford crossings', 'Full-day adventure expeditions'],
    operators: ['Atlas Mountain Quad Tours', 'High Atlas Adventures', 'Toubkal Quad Expeditions'],
  },
  {
    name: 'Ouarzazate & Draa Valley',
    icon: Map,
    terrain: 'Desert plains, kasbah trails, oasis tracks',
    duration: '3-6 hours',
    price: 'from 700 MAD',
    difficulty: 'Intermediate',
    bestFor: 'Film location fans and culture seekers',
    description:
      'Ouarzazate sits at the crossroads between the Atlas Mountains and the Sahara, surrounded by the dramatic landscape used in countless Hollywood productions. Quad trails here wind past ancient kasbahs, through the Draa Valley palm groves, and across the vast Hammada desert. The terrain is predominantly hard-packed stone desert interspersed with sandy stretches. Routes often include stops at the Ait Benhaddou UNESCO kasbah and the Fint Oasis.',
    highlights: ['Film location landscape', 'Kasbah and oasis stops', 'Wide open desert riding', 'Less crowded than Marrakech'],
    operators: ['Ouarzazate Quad Adventures', 'Draa Valley ATV Tours', 'Kasbah Quad Expeditions'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO WEAR & BRING
   ═══════════════════════════════════════════════════════════════ */

const gearChecklist = [
  { item: 'Closed-toe shoes or boots', note: 'Ankle support recommended for dune riding', icon: CheckCircle },
  { item: 'Long trousers', note: 'Protects legs from sun, sand spray, and engine heat', icon: CheckCircle },
  { item: 'Long-sleeved breathable top', note: 'Sun and wind protection without overheating', icon: CheckCircle },
  { item: 'Sunglasses or goggles', note: 'Essential for dust and sand protection', icon: Glasses },
  { item: 'Sunscreen SPF 50+', note: 'Apply before the ride; reapply is difficult with gloves', icon: Sun },
  { item: 'Buff or neck gaiter', note: 'Pull over nose and mouth in dusty conditions', icon: Shield },
  { item: 'Small backpack or waist bag', note: 'Secure phone, wallet, water — nothing loose', icon: CheckCircle },
  { item: 'Water bottle (1-2 liters)', note: 'Most operators provide water but bring extra in summer', icon: CheckCircle },
  { item: 'Camera with wrist strap', note: 'GoPro mounts available on some quads; secure everything', icon: Camera },
  { item: 'Light jacket (winter/Atlas)', note: 'Mornings can be cold at altitude or in the desert before sunrise', icon: Wind },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  { tip: 'Always wear the provided helmet — no exceptions', icon: ShieldCheck },
  { tip: 'Follow the guide at all times; do not ride off the designated trail', icon: Flag },
  { tip: 'Maintain a safe distance of at least 5 meters from the quad ahead', icon: Gauge },
  { tip: 'Avoid sudden braking on sand — use gradual deceleration', icon: AlertTriangle },
  { tip: 'Keep both hands on the handlebars while the quad is moving', icon: Shield },
  { tip: 'Do not stand up on the quad while riding over bumps or dunes', icon: AlertTriangle },
  { tip: 'Signal the guide immediately if you feel unwell or your quad acts abnormally', icon: Info },
  { tip: 'Stay hydrated — heat exhaustion is the most common medical issue on desert rides', icon: Heart },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const tourTypes = [
  {
    type: 'Group Tour',
    icon: Users,
    priceRange: 'from 350 MAD',
    groupSize: '6-12 riders',
    pros: ['Most affordable option', 'Social atmosphere', 'Fixed departure times', 'Great for solo travelers'],
    cons: ['Fixed pace set by slowest rider', 'Less flexibility for stops', 'Standard routes only'],
  },
  {
    type: 'Private Tour',
    icon: Star,
    priceRange: 'from 600 MAD',
    groupSize: '1-4 riders',
    pros: ['Custom pace and route', 'Unlimited photo stops', 'Flexible departure time', 'Personalized attention from guide'],
    cons: ['30-50% higher cost', 'Less social', 'Need to book 24+ hours ahead'],
  },
  {
    type: 'Sunset/Sunrise Special',
    icon: Sun,
    priceRange: 'from 500 MAD',
    groupSize: '4-8 riders',
    pros: ['Cooler riding temperatures', 'Stunning golden light', 'Often includes tea/snacks', 'Best for photography'],
    cons: ['Limited availability', 'Shorter riding window', 'Early wake-up for sunrise tours'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Morocco Adventure Sports', href: '/morocco-adventure-sports', description: 'Surfing, paragliding, rock climbing, and more extreme activities across Morocco' },
  { title: 'Morocco Desert Tour Guide', href: '/morocco-desert-tour', description: 'Complete Sahara desert tour planning: routes, camps, camel treks, and stargazing' },
  { title: 'Morocco Camel Trekking', href: '/morocco-camel-trekking', description: 'Camel ride options from 1-hour Palmeraie walks to multi-day Sahara expeditions' },
  { title: 'Morocco Outdoor Activities', href: '/morocco-outdoor-activities', description: 'Hiking, cycling, horse riding, and every outdoor pursuit Morocco offers' },
  { title: 'Morocco Desert Glamping', href: '/morocco-desert-glamping', description: 'Luxury desert camps with hot showers, gourmet dining, and star-filled skies' },
  { title: 'Morocco Surfing Guide', href: '/morocco-surfing-guide', description: 'Atlantic coast surf spots from Taghazout to Essaouira for every skill level' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoQuadBikingPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative h-[55vh] min-h-[420px] w-full overflow-hidden">
        <img
          src="/images/hero-quad-biking.webp"
          alt="Quad bikes racing across golden Moroccan desert sand with dust trails behind them"
          className="absolute inset-0 h-full w-full object-cover"
          width={1400}
          height={700}
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 flex h-full flex-col justify-end pb-12">
          <h1 className="mb-4 max-w-3xl text-4xl font-bold text-white md:text-5xl lg:text-6xl font-[family-name:var(--font-display)]">
            Morocco Quad Biking &amp; ATV Guide 2026
          </h1>
          <p className="max-w-2xl text-lg text-white/90 md:text-xl font-[family-name:var(--font-heading)]">
            From Marrakech palm groves to Saharan sand dunes — the complete guide to quad biking across Morocco with prices, routes, operators, and safety essentials.
          </p>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
      <nav aria-label="Breadcrumb" className="container-morocco py-4">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-[#A0522D]/70">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="flex items-center gap-1 hover:text-[#A0522D] transition-colors">
              <Home className="h-3.5 w-3.5" />
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
          </li>
          <li className="font-medium text-[#A0522D]">Morocco Quad Biking &amp; ATV Guide</li>
        </ol>
      </nav>

      {/* ── Introduction ── */}
      <section className="container-morocco py-10">
        <div className="mx-auto max-w-4xl">
          <div className="card-moroccan p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#A0522D]/10">
                <Bike className="h-6 w-6 text-[#A0522D]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                  Why Morocco Is a World-Class Quad Biking Destination
                </h2>
              </div>
            </div>
            <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)]">
              <p>
                Morocco offers some of the most diverse quad biking terrain on Earth. Within a single country, you can ride through palm-shaded oases, across rock-strewn lunar deserts, up mountain switchbacks, along Atlantic beach flats, and over towering Saharan sand dunes. This range of landscapes, combined with year-round riding weather and competitive pricing, has made Morocco one of the top quad biking destinations globally.
              </p>
              <p>
                The industry here has matured significantly over the past decade. Professional operators now run well-maintained fleets of automatic ATVs ranging from 150cc beginner machines to 450cc dune-spec powerhouses. Safety standards have improved across the board, with helmets, goggles, briefings, and support vehicles now standard on quality tours. Group sizes have also shrunk — most reputable operators cap rides at 8-12 quads to keep the experience manageable and safe.
              </p>
              <p>
                Pricing remains highly accessible compared to similar experiences in the UAE, Australia, or the US. A solid 2-hour quad tour in Morocco starts from 350 MAD (roughly $35 USD), making it an adventure almost every traveler can afford. Full-day expeditions through the Atlas Mountains or across Erg Chebbi dunes deliver genuine expedition-level excitement without expedition-level costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Bar ── */}
      <section className="bg-[#A0522D]/5 py-8">
        <div className="container-morocco">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { label: 'Starting Price', value: 'from 350 MAD', icon: DollarSign },
              { label: 'Top Locations', value: '6 Regions', icon: MapPin },
              { label: 'Tour Duration', value: '1-8 Hours', icon: Timer },
              { label: 'Min. Age (solo)', value: '16 Years', icon: Users },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-5 text-center">
                <stat.icon className="mx-auto mb-2 h-6 w-6 text-[#C4960C]" />
                <p className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">{stat.value}</p>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top 6 Quad Biking Destinations ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Top 6 Quad Biking Destinations in Morocco
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 font-[family-name:var(--font-heading)]">
              Each region delivers a distinct riding experience — from gentle Palmeraie trails to adrenaline-pumping Saharan dune runs. Here is what to expect at each location.
            </p>
          </div>

          <div className="space-y-8">
            {quadDestinations.map((dest, idx) => (
              <div key={dest.name} className="card-moroccan overflow-hidden">
                <div className="border-b border-[#A0522D]/10 bg-[#A0522D]/5 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4960C]/15 text-[#C4960C] font-bold font-[family-name:var(--font-display)]">
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-[family-name:var(--font-display)]">{dest.name}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {dest.duration}</span>
                        <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {dest.price}</span>
                        <span className="flex items-center gap-1"><Gauge className="h-3.5 w-3.5" /> {dest.difficulty}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="mb-4 text-gray-700 font-[family-name:var(--font-heading)]">{dest.description}</p>

                  <div className="mb-4 rounded-lg bg-[#FAF8F5] p-4">
                    <p className="mb-1 text-sm font-semibold text-[#A0522D] font-[family-name:var(--font-heading)]">Terrain</p>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{dest.terrain}</p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-1 text-sm font-semibold text-[#A0522D] font-[family-name:var(--font-heading)]">Best for</p>
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{dest.bestFor}</p>
                  </div>

                  <div className="mb-4">
                    <p className="mb-2 text-sm font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Highlights</p>
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {dest.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C4960C]" />
                          {h}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Known Operators</p>
                    <div className="flex flex-wrap gap-2">
                      {dest.operators.map((op) => (
                        <span key={op} className="rounded-full bg-[#A0522D]/8 px-3 py-1 text-xs font-medium text-[#A0522D] font-[family-name:var(--font-heading)]">
                          {op}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Group vs Private vs Sunset Tours ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                Group vs Private vs Sunset Tours
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 font-[family-name:var(--font-heading)]">
                Choosing the right tour format makes a significant difference to your experience. Here is a direct comparison.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {tourTypes.map((tour) => (
                <div key={tour.type} className="card-moroccan p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4960C]/15">
                      <tour.icon className="h-5 w-5 text-[#C4960C]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{tour.type}</h3>
                      <p className="text-sm text-[#A0522D] font-[family-name:var(--font-heading)]">{tour.priceRange}</p>
                    </div>
                  </div>
                  <p className="mb-3 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                    <Users className="mr-1 inline h-3.5 w-3.5" /> {tour.groupSize}
                  </p>
                  <div className="mb-3">
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-green-700 font-[family-name:var(--font-heading)]">Advantages</p>
                    {tour.pros.map((pro) => (
                      <div key={pro} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)] mb-1">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-green-600" />
                        {pro}
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-amber-700 font-[family-name:var(--font-heading)]">Considerations</p>
                    {tour.cons.map((con) => (
                      <div key={con} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)] mb-1">
                        <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-500" />
                        {con}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety Requirements ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Safety Requirements &amp; Best Practices
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 font-[family-name:var(--font-heading)]">
              Quad biking carries inherent risks. Following these guidelines dramatically reduces the chance of injury.
            </p>
          </div>

          <div className="card-moroccan p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              {safetyTips.map((s) => (
                <div key={s.tip} className="flex items-start gap-3 rounded-lg bg-[#FAF8F5] p-4">
                  <s.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A0522D]" />
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{s.tip}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 card-moroccan p-6 border-l-4 border-[#C4960C]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
              <div>
                <p className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Important: Travel Insurance</p>
                <p className="mt-1 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  Standard travel insurance often excludes motorized adventure activities. Before your trip, confirm your policy covers quad biking or purchase a specific adventure sports rider. Medical evacuation from remote desert or mountain locations can cost upward of 20,000 MAD without coverage. Several operators require proof of insurance before allowing participation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Wear & Bring ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                What to Wear &amp; Bring
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 font-[family-name:var(--font-heading)]">
                Proper gear transforms a good quad ride into a comfortable one. Operators provide helmets and sometimes goggles — everything else is on you.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="space-y-3">
                {gearChecklist.map((g) => (
                  <div key={g.item} className="flex items-start gap-3 rounded-lg border border-gray-100 bg-white p-4">
                    <g.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                    <div>
                      <p className="font-medium text-gray-900 font-[family-name:var(--font-heading)]">{g.item}</p>
                      <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{g.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Morocco Quad Biking Price Guide 2026
            </h2>
            <p className="mx-auto max-w-2xl text-gray-600 font-[family-name:var(--font-heading)]">
              Prices vary by location, duration, and tour type. Seasonal pricing can change — the figures below reflect current standard rates.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm font-[family-name:var(--font-heading)]">
                <thead>
                  <tr className="border-b border-[#A0522D]/10 bg-[#A0522D]/5">
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Experience</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Duration</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Group Price</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-900">Private Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { exp: 'Palmeraie Quad Tour', dur: '2 hours', group: 'from 350 MAD', priv: 'from 550 MAD' },
                    { exp: 'Agafay Desert Ride', dur: '2-3 hours', group: 'from 600 MAD', priv: 'from 900 MAD' },
                    { exp: 'Agafay Sunset + Dinner', dur: '4 hours', group: 'from 800 MAD', priv: 'from 1,200 MAD' },
                    { exp: 'Merzouga Dune ATV', dur: '1-2 hours', group: 'from 500 MAD', priv: 'from 800 MAD' },
                    { exp: 'Merzouga Full Experience', dur: '3 hours', group: 'from 900 MAD', priv: 'from 1,400 MAD' },
                    { exp: 'Essaouira Beach Quad', dur: '2-3 hours', group: 'from 450 MAD', priv: 'from 700 MAD' },
                    { exp: 'Atlas Mountain Expedition', dur: '6-8 hours', group: 'from 900 MAD', priv: 'from 1,500 MAD' },
                    { exp: 'Ouarzazate Desert Trail', dur: '3-4 hours', group: 'from 700 MAD', priv: 'from 1,100 MAD' },
                  ].map((row) => (
                    <tr key={row.exp} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.exp}</td>
                      <td className="px-4 py-3 text-gray-600">{row.dur}</td>
                      <td className="px-4 py-3 text-[#A0522D] font-semibold">{row.group}</td>
                      <td className="px-4 py-3 text-[#A0522D] font-semibold">{row.priv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-[#A0522D]/10 bg-[#FAF8F5] px-4 py-3">
              <p className="text-xs text-gray-500 font-[family-name:var(--font-heading)]">
                <Info className="mr-1 inline h-3.5 w-3.5" />
                Prices are per person for the 2025-2026 season. Seasonal pricing can change. Most tours include hotel pickup/drop-off in the city center. Fuel and equipment are included in all prices listed above.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Choosing an Operator ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                How to Choose a Reputable Operator
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 font-[family-name:var(--font-heading)]">
                Not all quad tour companies deliver the same quality. Use these criteria to filter the best from the rest.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  title: 'Check Recent Reviews',
                  detail: 'Look for operators with 100+ reviews on TripAdvisor or Google, with ratings above 4.5/5. Read the 1-star reviews carefully — repeated complaints about safety or vehicle condition are red flags.',
                  icon: Star,
                },
                {
                  title: 'Inspect the Machines',
                  detail: 'Quality operators maintain their fleet meticulously. Quads should have working brakes, functioning headlights, proper tire tread, and no visible fluid leaks. Ask when the last service was performed.',
                  icon: Zap,
                },
                {
                  title: 'Ask About Insurance',
                  detail: 'The operator should carry third-party liability insurance. Ask to see their certificate. If they cannot produce one, walk away. Some premium operators also include rider injury coverage.',
                  icon: Shield,
                },
                {
                  title: 'Verify Safety Equipment',
                  detail: 'At minimum: CE-rated helmets in good condition, goggles or face shields, and a first-aid kit. Better operators also provide gloves, knee guards, and carry a support vehicle with supplies.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Briefing Quality',
                  detail: 'A proper safety briefing lasts 15-20 minutes and covers quad controls, body positioning, terrain-specific techniques, hand signals, and emergency procedures. Skip anyone who rushes through this.',
                  icon: BookOpen,
                },
                {
                  title: 'Guide-to-Rider Ratio',
                  detail: 'The best operators maintain a maximum ratio of 1 guide per 6 riders. Tours with 12+ riders and a single guide cannot provide adequate safety oversight. Ask about ratios before booking.',
                  icon: Users,
                },
              ].map((item) => (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="mb-3 flex items-center gap-2.5">
                    <item.icon className="h-5 w-5 text-[#C4960C]" />
                    <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Time to Go ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
            Best Time of Year for Quad Biking
          </h2>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { season: 'Spring (Mar-May)', rating: 'Excellent', temp: '20-30°C', notes: 'Green landscapes, comfortable temperatures, clear skies. Peak season for Atlas Mountain rides.', icon: Compass },
              { season: 'Summer (Jun-Aug)', rating: 'Hot', temp: '35-48°C', notes: 'Desert rides only at dawn/dusk. Essaouira coast stays comfortable thanks to Atlantic winds. Avoid midday rides.', icon: Sun },
              { season: 'Autumn (Sep-Nov)', rating: 'Excellent', temp: '22-32°C', notes: 'Temperatures cool from October. Crowds thin after summer. Ideal for all locations especially Sahara.', icon: Wind },
              { season: 'Winter (Dec-Feb)', rating: 'Good', temp: '12-22°C', notes: 'Cool mornings, warm afternoons. Snow possible in Atlas above 2,000m. Desert days are pleasant, nights cold.', icon: Calendar },
            ].map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <s.icon className="mb-2 h-6 w-6 text-[#C4960C]" />
                <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{s.season}</h3>
                <span className={`mb-2 inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${
                  s.rating === 'Excellent' ? 'bg-green-100 text-green-800' :
                  s.rating === 'Good' ? 'bg-blue-100 text-blue-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {s.rating} — {s.temp}
                </span>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{s.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pro Tips ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Insider Tips from Experienced Riders
            </h2>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                { tip: 'Book the first morning slot (7-8 AM) for Palmeraie rides. The dust from previous groups settles overnight, and the light is golden for photos.', icon: Camera },
                { tip: 'For Merzouga dune rides, request the newer 450cc Yamaha or Can-Am machines. Older 250cc quads struggle on steep dune faces and can get bogged down.', icon: Zap },
                { tip: 'Negotiate prices if booking multiple activities with the same operator. A quad + camel ride combo in Marrakech can save 20-30% versus booking separately.', icon: DollarSign },
                { tip: 'Eat a light breakfast before riding. Heavy meals combined with vibration and heat increase the risk of motion sickness on bumpy desert tracks.', icon: Heart },
                { tip: 'If you have riding experience, tell your guide before departure. They can place experienced riders at the back of the group where the terrain is most churned up — which is actually more fun.', icon: Flag },
                { tip: 'Apply sunscreen to the backs of your hands and your neck 30 minutes before riding. These areas burn fastest and cannot be protected once you are wearing gloves and a helmet.', icon: Sun },
              ].map((t, i) => (
                <div key={i} className="card-moroccan p-5 flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C4960C]/15">
                    <t.icon className="h-4 w-4 text-[#C4960C]" />
                  </div>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{t.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Age Limits & Family Info ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
            Age Limits &amp; Family Quad Biking
          </h2>

          <div className="card-moroccan p-6">
            <div className="space-y-6 font-[family-name:var(--font-heading)]">
              <div className="rounded-lg bg-[#FAF8F5] p-5">
                <h3 className="mb-3 font-bold text-gray-900 font-[family-name:var(--font-display)]">Age Requirements by Category</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#A0522D]" />
                    <div><strong>Solo riders (full-size quads 150cc+):</strong> Minimum 16 years old at most operators. Some require 18 for machines above 250cc.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#A0522D]" />
                    <div><strong>Junior riders (small 90cc quads):</strong> Available for children aged 12-15 at select operators. Restricted speed, flat terrain only.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#A0522D]" />
                    <div><strong>Passengers (riding with an adult):</strong> Children aged 6 and above can ride as passengers on tandem quads. The adult driver must be 18+.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#A0522D]" />
                    <div><strong>Under 6:</strong> Not permitted on any quad tours for safety reasons. Consider a camel ride or horse-drawn carriage as a family alternative.</div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="mb-3 font-bold text-gray-900 font-[family-name:var(--font-display)]">Family-Friendly Recommendations</h3>
                <p className="mb-3 text-sm text-gray-700">
                  The Marrakech Palmeraie is the best location for families. Flat terrain, short duration (2 hours), and proximity to the city make it convenient and safe. Several operators run dedicated family sessions with reduced group sizes and gentler pacing. The Essaouira beach runs are another solid family choice — the hard-packed sand is easy to ride and the coastal breeze keeps things cool.
                </p>
                <p className="text-sm text-gray-700">
                  Avoid taking children on Merzouga dune rides or Atlas Mountain expeditions. The terrain is unpredictable, distances from medical facilities are significant, and the physical demands can be too much for younger riders. Stick to the Palmeraie or Essaouira for anyone under 16.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 text-center">
              <h2 className="mb-3 text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 font-[family-name:var(--font-heading)]">
                Common questions about quad biking in Morocco, answered by riders who have done it.
              </p>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <div key={i} className="card-moroccan p-5">
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#C4960C]/15 text-xs font-bold text-[#C4960C] font-[family-name:var(--font-display)]">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{faq.question}</h3>
                      <p className="mt-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Terrain-Specific Riding Techniques ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
            Terrain-Specific Riding Techniques
          </h2>
          <p className="mb-8 text-center text-gray-600 font-[family-name:var(--font-heading)]">
            Each Moroccan landscape demands different riding approaches. Understanding these basics before your tour gives you a significant advantage.
          </p>

          <div className="space-y-5">
            {[
              {
                terrain: 'Sand Dunes (Merzouga)',
                icon: Wind,
                techniques: [
                  'Maintain momentum — stopping on soft sand means getting stuck. Keep a steady throttle through deep sections.',
                  'Lean back slightly when climbing dune faces to keep the front wheels from digging in.',
                  'On descents, shift your weight forward and use engine braking rather than the hand brake.',
                  'Follow your guide\'s tracks exactly. They know where the sand is firmest.',
                ],
              },
              {
                terrain: 'Rocky Desert (Agafay & Ouarzazate)',
                icon: Mountain,
                techniques: [
                  'Stand slightly on the pegs when crossing rough patches to let the quad absorb impacts through its suspension.',
                  'Avoid sharp turns on loose gravel — the quad can slide sideways. Wide, sweeping turns maintain traction.',
                  'Watch for dry riverbeds (oueds) — the sandy bottom can be deceptively soft compared to the surrounding rock.',
                  'Keep your speed moderate over stone fields. A punctured tire in a remote location is a serious delay.',
                ],
              },
              {
                terrain: 'Beach Sand (Essaouira)',
                icon: Compass,
                techniques: [
                  'Ride on the hard-packed sand between the tide line and the dry sand. This zone offers the best traction.',
                  'Avoid riding too close to the waterline — incoming waves can catch you off-guard and saltwater damages quad components.',
                  'Wet sand is grippy but hides rocks and debris. Stay alert for obstacles partially buried by the tide.',
                  'Wind gusts along the Atlantic coast can push a quad sideways. Grip firmly and keep your body centered.',
                ],
              },
              {
                terrain: 'Mountain Trails (Atlas)',
                icon: Map,
                techniques: [
                  'On uphill sections, lean forward over the handlebars and maintain consistent throttle. Hesitation causes wheel spin.',
                  'Approach river crossings slowly, in a low gear if available. Walk the crossing first if unsure of depth.',
                  'On narrow trails with drop-offs, keep your eyes on where you want to go — not on the edge. Target fixation is the main cause of trail-edge incidents.',
                  'Allow extra following distance on descents. Loose stones kicked up by the quad ahead can hit your visor or hands.',
                ],
              },
            ].map((t) => (
              <div key={t.terrain} className="card-moroccan overflow-hidden">
                <div className="flex items-center gap-3 border-b border-[#A0522D]/10 bg-[#A0522D]/5 px-5 py-3">
                  <t.icon className="h-5 w-5 text-[#C4960C]" />
                  <h3 className="font-bold text-gray-900 font-[family-name:var(--font-display)]">{t.terrain}</h3>
                </div>
                <div className="p-5 space-y-2">
                  {t.techniques.map((tech, j) => (
                    <div key={j} className="flex items-start gap-2.5 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <Gauge className="mt-0.5 h-4 w-4 shrink-0 text-[#A0522D]" />
                      <p>{tech}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Environmental Responsibility ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Riding Responsibly in Morocco
            </h2>
            <div className="card-moroccan p-6">
              <div className="space-y-4 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <p>
                  Quad biking has an environmental footprint. Noise disturbs wildlife, tires erode fragile desert crusts, and exhaust pollutes pristine air. Responsible operators are working to minimize these impacts, and riders can help by following a few principles.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { rule: 'Stay on designated trails at all times. Off-trail riding destroys desert flora that can take decades to recover.', icon: Flag },
                    { rule: 'Carry all trash out with you. The desert does not decompose plastic or aluminium — your water bottle will sit there for centuries.', icon: Shield },
                    { rule: 'Choose operators with newer, fuel-efficient machines. Four-stroke engines are significantly cleaner than older two-stroke models.', icon: Zap },
                    { rule: 'Respect local communities. Slow down through Berber villages, wave to residents, and avoid raising unnecessary dust near homes and livestock.', icon: Heart },
                  ].map((r, i) => (
                    <div key={i} className="flex items-start gap-3 rounded-lg bg-[#FAF8F5] p-4">
                      <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#A0522D]" />
                      <p>{r.rule}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Booking Tips ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
            Booking &amp; Practical Advice
          </h2>

          <div className="card-moroccan p-6">
            <div className="space-y-5 font-[family-name:var(--font-heading)] text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                <div>
                  <p className="font-semibold text-gray-900">Book Direct vs. Through Your Riad</p>
                  <p className="mt-1">Booking through your riad or hotel adds a 15-30% commission markup. Book directly with operators via WhatsApp, their website, or platforms like GetYourGuide and Viator for better rates. However, riad bookings offer convenience and accountability if something goes wrong.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                <div>
                  <p className="font-semibold text-gray-900">How Far in Advance to Book</p>
                  <p className="mt-1">During peak season (October-April), book 2-3 days ahead for group tours and 3-5 days for private tours. In summer, same-day booking is usually possible. Sunset tours fill up fastest — book these as early as possible, especially for Agafay.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <DollarSign className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                <div>
                  <p className="font-semibold text-gray-900">Tipping Etiquette</p>
                  <p className="mt-1">Tipping your guide is customary but not mandatory. A tip of 50-100 MAD per person for a half-day tour is generous and appreciated. For full-day expeditions with outstanding guides, 150-200 MAD is appropriate. Tip in cash at the end of the ride.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="mt-0.5 h-5 w-5 shrink-0 text-[#C4960C]" />
                <div>
                  <p className="font-semibold text-gray-900">Cancellation Policies</p>
                  <p className="mt-1">Most operators offer free cancellation up to 24 hours before departure. Some weather-dependent tours (especially desert rides during sandstorms) may be rescheduled at no charge. Always confirm the cancellation policy at booking time and get written confirmation via email or WhatsApp.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="bg-[#A0522D]/5 py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Related Adventure Guides
            </h2>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <h3 className="mb-2 font-bold text-gray-900 group-hover:text-[#A0522D] transition-colors font-[family-name:var(--font-display)]">
                    {guide.title}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600 font-[family-name:var(--font-heading)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[#A0522D] font-[family-name:var(--font-heading)]">
                    Read guide <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-3xl text-center">
          <div className="zellige-border card-moroccan p-10">
            <Bike className="mx-auto mb-4 h-10 w-10 text-[#C4960C]" />
            <h2 className="mb-4 text-2xl font-bold text-gray-900 font-[family-name:var(--font-display)]">
              Ready to Hit the Trails?
            </h2>
            <p className="mb-6 text-gray-600 font-[family-name:var(--font-heading)]">
              Morocco&apos;s diverse terrain is waiting. From the palm groves of the Palmeraie to the towering dunes of Erg Chebbi, there is a quad biking adventure for every skill level and budget. Book with a reputable operator, gear up properly, and prepare for one of the most exhilarating ways to explore this country.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/morocco-adventure-sports"
                className="inline-flex items-center gap-2 rounded-lg bg-[#A0522D] px-6 py-3 font-medium text-white shadow-md transition-colors hover:bg-[#8B4726] font-[family-name:var(--font-heading)]"
              >
                Explore More Adventures <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/morocco-desert-tour"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#A0522D] px-6 py-3 font-medium text-[#A0522D] transition-colors hover:bg-[#A0522D] hover:text-white font-[family-name:var(--font-heading)]"
              >
                Desert Tour Guide <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

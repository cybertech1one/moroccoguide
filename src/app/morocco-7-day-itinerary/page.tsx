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
  Sun,
  Moon,
  Mountain,
  Compass,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Camera,
  Utensils,
  Bus,
  BedDouble,
  Luggage,
  CalendarDays,
  Sunrise,
  Sunset,
  MessageCircleQuestion,
  Banknote,
  ShieldCheck,
  Footprints,
  Map,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-7-day-itinerary`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco 7-Day Itinerary 2026 | Marrakech, Sahara Desert & Fes Route',
  description:
    'Day-by-day Morocco 7-day itinerary covering Marrakech, Atlas Mountains, Ait Benhaddou, Sahara Desert camel trek, and Fes medina. Budget, mid-range & luxury options with daily plans, accommodation picks, transport, and costs from 4,500 MAD.',
  keywords: [
    'Morocco 7 day itinerary',
    '7 days in Morocco',
    'Morocco one week itinerary',
    'Marrakech to Fes itinerary',
    'Morocco Sahara desert itinerary',
    'Morocco trip plan 7 days',
    'Morocco travel itinerary 2026',
    'Marrakech Sahara Fes route',
    'Morocco week trip plan',
    'best Morocco itinerary 7 days',
    'Morocco road trip itinerary',
    'Atlas Mountains day trip',
    'Ait Benhaddou visit',
    'Merzouga camel trek',
    'Fes medina guide',
    'Morocco budget itinerary',
    'Morocco luxury itinerary',
  ],
  openGraph: {
    title: 'Morocco 7-Day Itinerary 2026 | Marrakech, Sahara Desert & Fes Route',
    description:
      'Complete day-by-day Morocco itinerary: Marrakech souks, Atlas Mountains, Ait Benhaddou kasbah, Sahara Desert overnight camp, and Fes medina. Three budget tiers with accommodation, meals, and transport details.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech medina with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 7-Day Itinerary 2026 | Marrakech, Sahara & Fes',
    description:
      'Day-by-day 7-day Morocco route: Marrakech, Atlas Mountains, Sahara Desert camel trek, and Fes. Budget, mid-range & luxury breakdowns with costs from 4,500 MAD.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is 7 days enough for Morocco?',
    a: 'Seven days is enough to cover the classic Marrakech-Sahara-Fes route at a comfortable pace. You will have two full days in Marrakech, a day crossing the Atlas Mountains and visiting Ait Benhaddou, a night in the Sahara Desert, and two days exploring Fes. If you want to add coastal cities like Essaouira or Chefchaouen, consider a 10-day itinerary instead.',
  },
  {
    q: 'How much does a 7-day Morocco trip cost?',
    a: 'A budget 7-day trip costs from 4,500 MAD per person (roughly 450 USD) covering hostels, street food, and shared transport. Mid-range travelers spend from 12,000 MAD per person with riad accommodation, private transport, and restaurant meals. Luxury trips run from 25,000 MAD per person with boutique riads, private guides, and fine dining. Seasonal pricing can change.',
  },
  {
    q: 'Should I book a tour or travel independently for 7 days in Morocco?',
    a: 'The Marrakech-to-Fes desert route is best done with a private driver or group tour because public transport between the Atlas Mountains, Ait Benhaddou, and the Sahara is limited and time-consuming. Marrakech and Fes are easy to explore independently on foot. Many travelers book a 3-day desert tour for the middle section and handle the cities on their own.',
  },
  {
    q: 'What is the best time of year for a 7-day Morocco trip?',
    a: 'March to May and September to November offer the best weather for this route. Summers (June-August) bring extreme heat in the desert with temperatures above 45 degrees Celsius. Winter (December-February) can be cold in the Atlas and desert at night but is pleasant in the cities. Ramadan dates shift yearly and affect restaurant hours.',
  },
  {
    q: 'Is it safe to travel from Marrakech to Fes through the desert?',
    a: 'Yes. The Marrakech-Sahara-Fes route is the most popular tourist circuit in Morocco and is well-traveled year-round. Roads are paved and in good condition. Hiring a reputable driver or joining an organized tour adds a layer of security. Solo female travelers regularly complete this route without issues.',
  },
  {
    q: 'Can I do the 7-day itinerary in reverse, starting from Fes?',
    a: 'Absolutely. The Fes-Sahara-Marrakech direction works equally well. Some travelers prefer ending in Marrakech because it has more evening entertainment and shopping for last-day souvenirs. The mountain passes and scenery are equally impressive in both directions.',
  },
  {
    q: 'What should I pack for a 7-day Morocco trip?',
    a: 'Pack layers for temperature swings between hot days and cold desert nights. Bring comfortable walking shoes for medina cobblestones, a scarf for sun and wind protection, sunscreen, a headlamp for the desert camp, and a small daypack. Women may want a loose shawl for covering shoulders at mosques and rural areas.',
  },
  {
    q: 'Do I need a visa for Morocco?',
    a: 'Citizens of the US, UK, EU, Canada, Australia, and many other countries receive a 90-day visa-free entry on arrival. Your passport must be valid for at least six months beyond your travel dates. Check the Moroccan consulate website for the full list of visa-exempt nationalities before booking.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco 7-Day Itinerary 2026 — Marrakech, Sahara Desert & Fes',
  description:
    'Complete day-by-day 7-day Morocco itinerary covering Marrakech, Atlas Mountains, Ait Benhaddou, Sahara Desert, and Fes with budget, mid-range, and luxury options.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
      { '@type': 'ListItem', position: 2, name: '7-Day Morocco Itinerary', item: PAGE_URL },
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
   DATA: DAILY ITINERARY
   ================================================================ */

const itineraryDays = [
  {
    day: '1',
    title: 'Arrive in Marrakech & Explore the Medina',
    location: 'Marrakech',
    icon: MapPin,
    morning: {
      title: 'Arrival & Check-In',
      description:
        'Fly into Marrakech Menara Airport (RAK). Most international flights arrive by midday. A taxi from the airport to the medina costs from 70 MAD (agree on the price before getting in). Check into your riad in the medina — the Derb Dabachi and Riad Zitoun areas put you within walking distance of everything. Settle in, drink the welcome mint tea your host offers, and get your bearings from the rooftop terrace.',
    },
    afternoon: {
      title: 'Jemaa el-Fnaa & Souk Circuit',
      description:
        'Walk to Jemaa el-Fnaa, the main square that transforms hourly. By late afternoon the food stalls start firing up and musicians gather. Before the crowds peak, duck into the northern souks: the dyers souk (Souk Sebbaghine), the leather goods alley, and the spice stalls along Rahba Kedima. Haggling is expected — start at 40% of the asking price and meet somewhere in the middle. End the evening with dinner at the food stalls in the square (a full meal costs from 40 MAD) or at a rooftop restaurant overlooking the chaos below.',
    },
    meals: 'Street food dinner at Jemaa el-Fnaa from 40 MAD. Rooftop restaurants from 120 MAD.',
    budgetStay: 'Hostel dorm in the medina from 80 MAD per night (Hostel Kif Kif, Rodamon Riad)',
    midStay: 'Traditional riad from 400 MAD per night (Riad Dar Zaman, Riad BE)',
    luxuryStay: 'Boutique riad from 1,500 MAD per night (La Mamounia, Royal Mansour)',
  },
  {
    day: '2',
    title: 'Marrakech Deep Dive — Palaces, Gardens & Hammam',
    location: 'Marrakech',
    icon: Building,
    morning: {
      title: 'Bahia Palace & Saadian Tombs',
      description:
        'Start early at Bahia Palace (entry from 70 MAD), a 19th-century masterpiece of carved cedarwood, painted ceilings, and courtyard gardens. It opens at 9:00, and the first hour is the quietest. From there, walk 10 minutes south to the Saadian Tombs (entry from 70 MAD), rediscovered in 1917 after being sealed for centuries. The Italian Carrara marble mausoleum of Sultan Ahmed al-Mansour is the highlight. If time allows, detour to the Mellah (Jewish quarter) and the Lazama Synagogue.',
    },
    afternoon: {
      title: 'Jardin Majorelle, YSL Museum & Hammam',
      description:
        'Take a taxi (from 20 MAD) to Jardin Majorelle in Gueliz (entry from 70 MAD). The cobalt-blue villa and cactus gardens take about an hour. The adjacent Yves Saint Laurent Museum (from 100 MAD) is worth it for the architecture alone. Return to the medina by mid-afternoon and book a hammam session — a public hammam scrub costs from 50 MAD, or splurge on a luxury spa treatment from 500 MAD at Heritage Spa or Les Bains de Marrakech. Your skin will thank you before the desert days ahead.',
    },
    meals: 'Breakfast at riad (included). Lunch at Cafe Clock from 80 MAD. Dinner at Nomad from 150 MAD.',
    budgetStay: 'Same hostel as Day 1',
    midStay: 'Same riad as Day 1',
    luxuryStay: 'Same luxury riad as Day 1',
  },
  {
    day: '3',
    title: 'Atlas Mountains & Ait Benhaddou Kasbah',
    location: 'High Atlas / Ouarzazate',
    icon: Mountain,
    morning: {
      title: 'Cross the Tizi n\'Tichka Pass',
      description:
        'Leave Marrakech by 7:30 AM. The drive over the Tizi n\'Tichka pass (2,260 meters) takes about 3.5 hours and is one of the most scenic roads in North Africa. The highway winds through Berber villages, argan tree forests, and rust-red gorges. Your driver will stop at a panoramic viewpoint near the summit. On the descent toward Ouarzazate, the landscape shifts from green valleys to dry, dramatic desert terrain. Shared group tours from Marrakech cost from 350 MAD per person; private drivers from 1,200 MAD for the vehicle.',
    },
    afternoon: {
      title: 'Ait Benhaddou & Overnight Near Ouarzazate',
      description:
        'Arrive at Ait Benhaddou, the UNESCO-listed fortified ksar (village) used as a filming location for Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the shallow river on foot (or via a footbridge in high water) and climb through the tiered mudbrick houses to the granary at the top for a full panorama of the palm-lined valley. Entry is free, though a local guide (from 100 MAD) adds context about Berber architecture and film history. Continue to your overnight stop near Ouarzazate or in the Dades Valley, depending on your route.',
    },
    meals: 'Lunch at a roadside restaurant near Tichka from 60 MAD (tagine and bread). Dinner at your guesthouse from 100 MAD.',
    budgetStay: 'Guesthouse near Ait Benhaddou from 150 MAD per night',
    midStay: 'Kasbah hotel from 500 MAD per night (Kasbah Ellouze, Dar Daif)',
    luxuryStay: 'Boutique kasbah from 1,800 MAD per night (Kasbah Tamadot, Ksar Ighnda)',
  },
  {
    day: '4',
    title: 'Sahara Desert — Dunes, Camels & Desert Camp',
    location: 'Merzouga / Erg Chebbi',
    icon: Sun,
    morning: {
      title: 'Drive Through Todra Gorge to Merzouga',
      description:
        'An early start for the long drive east (6-7 hours with stops). The route passes through the Dades Valley and optionally through Todra Gorge, where 300-meter limestone cliffs tower over a narrow canyon with a river running through it. A 30-minute walk into the gorge is enough to appreciate the scale. Continue through Tinghir and Errachidia, watching the landscape flatten into hammada (rocky desert) before the first golden dunes of Erg Chebbi appear near Merzouga.',
    },
    afternoon: {
      title: 'Camel Trek & Overnight Desert Camp',
      description:
        'Arrive in Merzouga by mid-afternoon. After refreshments at a hotel on the edge of the dunes, mount your camel for the trek into Erg Chebbi. The ride to camp takes 60-90 minutes, winding between dunes that reach up to 150 meters high. At camp, climb a dune for sunset — the light turns the sand from gold to deep orange to purple. After dark, dinner is served in a Berber tent (usually tagine, couscous, and fruit). Drum music and stargazing follow. The Sahara sky, free of light pollution, is staggering.',
    },
    meals: 'Lunch en route from 60 MAD. Dinner at desert camp (included with camp booking).',
    budgetStay: 'Shared desert camp from 250 MAD per person (basic tents, shared facilities)',
    midStay: 'Private tent at a mid-range camp from 600 MAD per person (en-suite bathroom, hot shower)',
    luxuryStay: 'Luxury desert camp from 2,500 MAD per person (heated tent, private terrace, full-course dinner)',
  },
  {
    day: '5',
    title: 'Sahara Sunrise & Drive to Fes',
    location: 'Merzouga to Fes',
    icon: Sunrise,
    morning: {
      title: 'Desert Sunrise & Departure',
      description:
        'Wake before dawn — your camp host will knock on your tent around 5:30 AM. Climb the nearest high dune and watch the sunrise paint the Sahara in pinks and golds. This is the single most photographed moment on the entire route. After breakfast at camp, ride the camels back to Merzouga. Shower and change at a hotel near the dunes, then begin the long drive north toward Fes.',
    },
    afternoon: {
      title: 'Midelt & the Middle Atlas',
      description:
        'The drive from Merzouga to Fes takes 7-8 hours via Errachidia and Midelt. It is long but the scenery shifts constantly: flat desert gives way to cedar forests and the green Middle Atlas highlands. Stop in Midelt for lunch — this small mountain town is known for apple orchards and fossils. The Zad Pass (2,178 meters) near Ifrane offers a surprising landscape of European-style forests. If you spot Barbary macaques near Azrou, a quick stop is worth it. Arrive in Fes by early evening.',
    },
    meals: 'Breakfast at desert camp (included). Lunch in Midelt from 60 MAD. Dinner in Fes medina from 100 MAD.',
    budgetStay: 'Hostel in Fes medina from 80 MAD per night (Funky Fes, Dar Bouali)',
    midStay: 'Traditional riad in Fes from 400 MAD per night (Riad Fes Maya, Riad Laaroussa)',
    luxuryStay: 'Palace riad from 2,000 MAD per night (Palais Faraj, Riad Fes)',
  },
  {
    day: '6',
    title: 'Fes Medina — Tanneries, Madrasas & Crafts',
    location: 'Fes',
    icon: Compass,
    morning: {
      title: 'Bou Inania Medersa & Fes el-Bali',
      description:
        'Hire a local guide (from 300 MAD for a half-day) for your first plunge into Fes el-Bali, the largest car-free urban zone in the world. Start at Bab Boujloud (the Blue Gate) and walk to Bou Inania Medersa (entry from 30 MAD), a 14th-century theological school with intricate stucco, cedarwood, and zellige tilework. Continue deeper into the medina past the Attarine Medersa and the Kairaouine Mosque — the oldest continuously operating university in the world, founded in 859 AD. Non-Muslims cannot enter the mosque but can admire the courtyard through the open doors.',
    },
    afternoon: {
      title: 'Chouara Tanneries & Artisan Quarter',
      description:
        'Navigate to the Chouara Tanneries, where leather has been dyed using the same methods since the 11th century. View from a leather shop terrace above — vendors offer sprigs of mint to counter the smell. The sight of workers knee-deep in vats of saffron-yellow, poppy-red, and indigo dye is unforgettable. After the tanneries, wander through the coppersmith and woodworking quarters. Fes is the best city in Morocco for artisan shopping: hand-painted ceramics, embroidered leather, and brass lanterns. End the day with a traditional pastilla (pigeon or chicken pie) at a medina restaurant.',
    },
    meals: 'Breakfast at riad (included). Lunch at Cafe Clock Fes from 80 MAD. Dinner at The Ruined Garden from 150 MAD.',
    budgetStay: 'Same hostel as Day 5',
    midStay: 'Same riad as Day 5',
    luxuryStay: 'Same palace riad as Day 5',
  },
  {
    day: '7',
    title: 'Fes Pottery, Panoramic Views & Departure',
    location: 'Fes',
    icon: Camera,
    morning: {
      title: 'Fes Pottery Quarter & Merenid Tombs',
      description:
        'Take a taxi (from 15 MAD) to the Fes pottery cooperative in the Ain Nokbi neighborhood. Watch artisans hand-paint geometric and floral patterns onto plates, bowls, and tiles using techniques unchanged for centuries. Prices are fixed and fair, and they ship internationally. From there, drive up to the Merenid Tombs on the hill above the medina. The tombs themselves are ruined, but the panoramic view of Fes el-Bali spread below — a sea of white buildings, green-tiled minarets, and satellite dishes — is the best in the city. Morning light is ideal for photographs.',
    },
    afternoon: {
      title: 'Last Shopping & Departure',
      description:
        'Return to the medina for final purchases. The Talaa Kebira street has the highest concentration of shops. Moroccan saffron (check for authenticity — real saffron has thin red threads, no yellow), argan oil, preserved lemons, and ceramic tagines make excellent gifts. If flying out of Fes-Saiss Airport (FEZ), it is 25 minutes from the medina by taxi (from 120 MAD). If continuing to Chefchaouen, shared taxis (grands taxis) depart from the gare routiere and take about 4 hours (from 75 MAD per seat).',
    },
    meals: 'Breakfast at riad (included). Lunch in medina from 60 MAD.',
    budgetStay: 'N/A — departure day',
    midStay: 'N/A — departure day',
    luxuryStay: 'N/A — departure day',
  },
] as const;

/* ================================================================
   DATA: BUDGET BREAKDOWN
   ================================================================ */

const budgetTiers = [
  {
    tier: 'Budget',
    icon: Banknote,
    perDay: 'from 650 MAD / day',
    total: 'from 4,500 MAD total',
    color: 'text-green-700',
    bg: 'bg-green-50',
    details: [
      'Hostels and basic guesthouses',
      'Street food and market meals',
      'Shared desert tour (3-day Marrakech to Fes)',
      'Shared taxis and buses between cities',
      'Self-guided medina walks',
      'Basic shared desert camp',
    ],
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    perDay: 'from 1,700 MAD / day',
    total: 'from 12,000 MAD total',
    color: 'text-[var(--color-accent)]',
    bg: 'bg-orange-50',
    details: [
      'Traditional riads with breakfast included',
      'Restaurant meals and cafe lunches',
      'Private driver for desert segment',
      'Domestic flights or private transfers',
      'Half-day guided tours in each city',
      'Private tent desert camp with en-suite',
    ],
  },
  {
    tier: 'Luxury',
    icon: Building,
    perDay: 'from 3,500 MAD / day',
    total: 'from 25,000 MAD total',
    color: 'text-[var(--color-gold)]',
    bg: 'bg-amber-50',
    details: [
      'Boutique palace riads and 5-star hotels',
      'Fine dining at top restaurants',
      'Private vehicle with English-speaking guide',
      'VIP airport transfers',
      'Private guided tours with local historians',
      'Luxury desert camp with heated tents',
    ],
  },
] as const;

/* ================================================================
   DATA: ESSENTIAL PACKING LIST
   ================================================================ */

const packingEssentials = [
  { item: 'Comfortable walking shoes', note: 'Medina cobblestones are uneven' },
  { item: 'Light layers + warm jacket', note: 'Desert nights drop to 5-10 degrees Celsius' },
  { item: 'Sunscreen SPF 50+', note: 'UV is strong, especially at altitude and in the desert' },
  { item: 'Scarf or shawl', note: 'Sun protection, sand cover, and cultural respect' },
  { item: 'Headlamp or small flashlight', note: 'Desert camps and dark medina alleys at night' },
  { item: 'Reusable water bottle', note: 'Refill at riads to reduce plastic waste' },
  { item: 'Power adapter (Type C/E)', note: 'Morocco uses European-style plugs' },
  { item: 'Cash in small denominations', note: 'Many medina shops and taxis are cash-only' },
] as const;

/* ================================================================
   DATA: TRANSPORT OPTIONS
   ================================================================ */

const transportOptions = [
  {
    mode: 'Private Driver',
    cost: 'from 1,200 MAD per day',
    best: 'Flexible schedule, door-to-door, commentary from a local',
    note: 'Book through your riad or a reputable agency. Agree on price, route, and stops in advance.',
  },
  {
    mode: 'Group Desert Tour (3 days)',
    cost: 'from 900 MAD per person',
    best: 'Budget-friendly, social, no planning required',
    note: 'Runs daily from Marrakech to Fes (or reverse). Typically 15-person minibus.',
  },
  {
    mode: 'CTM / Supratours Bus',
    cost: 'from 100-250 MAD per route',
    best: 'Comfortable, air-conditioned, reliable schedules',
    note: 'Best for Marrakech-Ouarzazate or Fes-Marrakech direct. Does not serve desert camps.',
  },
  {
    mode: 'Grand Taxi',
    cost: 'from 50-150 MAD per seat',
    best: 'Faster than buses for medium distances',
    note: 'Shared taxis depart when full (6 passengers). Pay for extra seats for more space.',
  },
  {
    mode: 'Domestic Flight',
    cost: 'from 400 MAD one-way',
    best: 'Skip the long Fes-Marrakech return drive',
    note: 'Royal Air Maroc and Air Arabia fly Fes-Marrakech in 1 hour.',
  },
] as const;

/* ================================================================
   COMPONENT
   ================================================================ */

export default function Morocco7DayItinerary() {
  return (
    <>
      {/* ── JSON-LD ─────────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* ── HERO ──────────────────────────────────────────────── */}
        <section className="relative h-[55vh] min-h-[420px]">
          <img
            src="/images/hero-marrakech.webp"
            alt="Marrakech medina rooftops at golden hour with Atlas Mountains on the horizon"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
          <div className="container-morocco relative z-10 flex h-full flex-col justify-end pb-12">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-white/80">
              <Link href="/" className="flex items-center gap-1 hover:text-white">
                <Home className="h-3.5 w-3.5" /> Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-white">7-Day Morocco Itinerary</span>
            </nav>
            <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
              Morocco 7-Day Itinerary
            </h1>
            <p className="mt-3 max-w-2xl font-[family-name:var(--font-heading)] text-lg text-white/90 md:text-xl">
              Marrakech, Atlas Mountains, Sahara Desert &amp; Fes — a complete week covering Morocco&apos;s most iconic route with daily plans for every budget.
            </p>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────────── */}
        <section className="container-morocco py-14">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              One Week, Four Worlds
            </h2>
            <div className="mt-5 space-y-4 font-[family-name:var(--font-heading)] text-gray-700 leading-relaxed">
              <p>
                The Marrakech-to-Fes loop is Morocco&apos;s most popular route for good reason. In seven days you move from the sensory overload of Marrakech&apos;s souks through the snow-capped High Atlas, across the Hollywood-famous kasbah of Ait Benhaddou, into the golden dunes of the Sahara, and finally into the ancient scholarly city of Fes. Each day delivers a completely different landscape and cultural experience.
              </p>
              <p>
                This itinerary works in either direction. We start in Marrakech because most international flights land there, but the Fes-first version is equally valid. Every day includes morning and afternoon plans, meal suggestions, and accommodation picks across three budget tiers. Seasonal pricing can change, so treat all costs as starting points.
              </p>
            </div>
          </div>
        </section>

        {/* ── ROUTE OVERVIEW ────────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-morocco">
            <div className="mx-auto max-w-3xl text-center">
              <Map className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                Route Overview
              </h2>
              <p className="mt-3 font-[family-name:var(--font-heading)] text-gray-600">
                Total driving distance: approximately 1,100 km across 7 days
              </p>
            </div>

            <div className="zellige-border mt-10 rounded-2xl bg-[#FAF8F5] p-8">
              <div className="grid gap-4 md:grid-cols-6">
                {[
                  { label: 'Day 1-2', city: 'Marrakech', km: 'Start' },
                  { label: 'Day 3', city: 'Atlas / Ait Benhaddou', km: '185 km' },
                  { label: 'Day 4', city: 'Merzouga / Sahara', km: '360 km' },
                  { label: 'Day 5', city: 'Drive to Fes', km: '460 km' },
                  { label: 'Day 6', city: 'Fes Medina', km: 'On foot' },
                  { label: 'Day 7', city: 'Fes & Depart', km: 'End' },
                ].map((stop, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-bold text-white">
                      {stop.label.replace('Day ', '')}
                    </span>
                    <p className="mt-2 font-[family-name:var(--font-heading)] text-sm font-semibold text-gray-800">
                      {stop.city}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">{stop.km}</p>
                    {i < 5 && (
                      <ArrowRight className="mt-2 h-4 w-4 text-[var(--color-gold)] md:hidden" />
                    )}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-center font-[family-name:var(--font-heading)] text-sm text-gray-500">
                The route crosses two major mountain passes: Tizi n&apos;Tichka (2,260m) and Zad Pass (2,178m). All roads are paved and regularly maintained.
              </p>
            </div>
          </div>
        </section>

        {/* ── DAY-BY-DAY ITINERARY ──────────────────────────────── */}
        <section className="container-morocco py-14">
          <div className="text-center">
            <CalendarDays className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              Day-by-Day Itinerary
            </h2>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600">
              Detailed morning and afternoon plans with meal and accommodation picks
            </p>
          </div>

          <div className="mt-10 space-y-10">
            {itineraryDays.map((day) => {
              const DayIcon = day.icon;
              return (
                <div key={day.day} className="card-moroccan overflow-hidden rounded-2xl">
                  {/* Day Header */}
                  <div className="moroccan-pattern bg-[var(--color-accent)] px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-xl font-bold text-white">
                        {day.day}
                      </span>
                      <div>
                        <h3 className="font-[family-name:var(--font-display)] text-xl text-white md:text-2xl">
                          Day {day.day}: {day.title}
                        </h3>
                        <p className="mt-0.5 flex items-center gap-1 text-sm text-white/80">
                          <DayIcon className="h-3.5 w-3.5" /> {day.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Morning */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <Sunrise className="h-5 w-5 text-[var(--color-gold)]" />
                        <div className="mt-1 h-full w-px bg-[var(--color-gold)]/30" />
                      </div>
                      <div className="pb-6">
                        <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-800">
                          Morning: {day.morning.title}
                        </h4>
                        <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600 leading-relaxed">
                          {day.morning.description}
                        </p>
                      </div>
                    </div>

                    {/* Afternoon */}
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <Sunset className="h-5 w-5 text-[var(--color-accent)]" />
                      </div>
                      <div className="pb-4">
                        <h4 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-800">
                          Afternoon: {day.afternoon.title}
                        </h4>
                        <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600 leading-relaxed">
                          {day.afternoon.description}
                        </p>
                      </div>
                    </div>

                    {/* Meals & Accommodation */}
                    <div className="mt-4 grid gap-3 border-t border-gray-100 pt-4 md:grid-cols-2">
                      <div>
                        <p className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <Utensils className="h-4 w-4 text-[var(--color-accent)]" /> Meals
                        </p>
                        <p className="mt-1 text-sm text-gray-600">{day.meals}</p>
                      </div>
                      <div>
                        <p className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          <BedDouble className="h-4 w-4 text-[var(--color-accent)]" /> Where to Stay
                        </p>
                        <div className="mt-1 space-y-1 text-sm text-gray-600">
                          <p><span className="font-medium text-green-700">Budget:</span> {day.budgetStay}</p>
                          <p><span className="font-medium text-[var(--color-accent)]">Mid-Range:</span> {day.midStay}</p>
                          <p><span className="font-medium text-[var(--color-gold)]">Luxury:</span> {day.luxuryStay}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── BUDGET BREAKDOWN ──────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-morocco">
            <div className="text-center">
              <DollarSign className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                Budget Breakdown
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600">
                Three tiers for every travel style. Seasonal pricing can change.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {budgetTiers.map((tier) => {
                const TierIcon = tier.icon;
                return (
                  <div key={tier.tier} className={`card-moroccan rounded-2xl ${tier.bg} p-6`}>
                    <div className="flex items-center gap-3">
                      <TierIcon className={`h-7 w-7 ${tier.color}`} />
                      <h3 className={`font-[family-name:var(--font-display)] text-xl ${tier.color}`}>
                        {tier.tier}
                      </h3>
                    </div>
                    <p className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-bold text-gray-800">
                      {tier.perDay}
                    </p>
                    <p className="text-sm text-gray-500">{tier.total} (7 days)</p>
                    <ul className="mt-4 space-y-2">
                      {tier.details.map((d, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className={`mt-0.5 h-4 w-4 flex-shrink-0 ${tier.color}`} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── TRANSPORT OPTIONS ─────────────────────────────────── */}
        <section className="container-morocco py-14">
          <div className="text-center">
            <Bus className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              Getting Around
            </h2>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600">
              Transport options for each segment of the route
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {transportOptions.map((t, i) => (
              <div key={i} className="card-moroccan rounded-xl p-5">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-800">
                      {t.mode}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{t.best}</p>
                  </div>
                  <span className="inline-block rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
                    {t.cost}
                  </span>
                </div>
                <p className="mt-2 flex items-start gap-2 text-sm text-gray-500">
                  <Info className="mt-0.5 h-4 w-4 flex-shrink-0" /> {t.note}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── PACKING ESSENTIALS ────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-morocco">
            <div className="text-center">
              <Luggage className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                Packing Essentials
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600">
                What to bring for a week across mountains, desert, and medinas
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {packingEssentials.map((p, i) => (
                <div key={i} className="card-moroccan rounded-xl p-4">
                  <p className="flex items-center gap-2 font-[family-name:var(--font-heading)] font-semibold text-gray-800">
                    <CheckCircle className="h-4 w-4 text-[var(--color-accent)]" />
                    {p.item}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">{p.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRACTICAL TIPS ────────────────────────────────────── */}
        <section className="container-morocco py-14">
          <div className="text-center">
            <ShieldCheck className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              Practical Tips for the Route
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-5">
            {[
              {
                icon: Banknote,
                title: 'Money & Cash',
                text: 'ATMs are available in Marrakech, Ouarzazate, and Fes but not in Merzouga or small mountain villages. Withdraw enough dirhams before leaving Marrakech to cover the desert segment. Most riads accept cards; desert camps and roadside restaurants typically do not.',
              },
              {
                icon: Clock,
                title: 'Timing & Pace',
                text: 'Days 3, 4, and 5 involve long drives (5-8 hours each). If you get carsick, sit in the front seat and bring motion-sickness medication. The drives are scenic and include planned stops, but they are tiring. The city days (1, 2, 6, 7) are walking-heavy — expect 15,000 to 20,000 steps each day in the medinas.',
              },
              {
                icon: AlertTriangle,
                title: 'Scam Awareness',
                text: 'Common tactics: "The road is closed, I will show you another way" (it is not closed), fake guides at medina entrances, and carpet shop invitations disguised as tea offers. Stay polite but firm. A clear "la, shukran" (no, thank you) works in most situations.',
              },
              {
                icon: Users,
                title: 'Solo vs. Group Travel',
                text: 'Solo travelers can join shared 3-day desert tours from Marrakech to Fes starting from 900 MAD. Groups of 3-4 save money by splitting a private driver. Couples often find mid-range private tours the best value at from 2,500 MAD per person for the desert segment.',
              },
              {
                icon: Moon,
                title: 'Desert Night Temperatures',
                text: 'The Sahara drops sharply at night, sometimes to 5 degrees Celsius in winter. Luxury camps provide blankets and heating; basic camps may not. Bring a warm layer even if daytime temperatures are in the 30s.',
              },
              {
                icon: Footprints,
                title: 'Walking in the Medina',
                text: 'Both Marrakech and Fes medinas have narrow, winding streets with no sidewalks. Mopeds and donkeys share the path with pedestrians. Step aside when you hear "balek!" (watch out). Flat, closed-toe shoes with good grip are essential on the polished stone surfaces.',
              },
            ].map((tip, i) => {
              const TipIcon = tip.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                      <TipIcon className="h-5 w-5 text-[var(--color-accent)]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-800">
                      {tip.title}
                    </h3>
                    <p className="mt-1 font-[family-name:var(--font-heading)] text-sm text-gray-600 leading-relaxed">
                      {tip.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── FOOD ALONG THE ROUTE ──────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-morocco">
            <div className="text-center">
              <Utensils className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                What to Eat Along the Route
              </h2>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600">
                Regional specialties to try at each stop
              </p>
            </div>

            <div className="mx-auto mt-10 max-w-3xl space-y-6">
              {[
                {
                  city: 'Marrakech',
                  dishes: [
                    { name: 'Tanjia', desc: 'Slow-cooked lamb or beef in an urn buried in hot ashes. A Marrakech-only specialty. Order at Chez Lamine near Jemaa el-Fnaa from 60 MAD.' },
                    { name: 'Snail soup (Babbouche)', desc: 'Ladled from giant pots in the square. Locals swear by it as a digestive aid. From 5 MAD per cup.' },
                    { name: 'Msemen with amlou', desc: 'Flaky flatbread dipped in a paste of argan oil, almonds, and honey. The best breakfast in the city, from 10 MAD.' },
                  ],
                },
                {
                  city: 'Atlas & Ouarzazate',
                  dishes: [
                    { name: 'Berber tagine', desc: 'Chicken or lamb slow-cooked with preserved lemons and olives in a clay pot. Roadside restaurants serve generous portions from 50 MAD.' },
                    { name: 'Berber omelette', desc: 'Eggs, tomatoes, onions, and cumin cooked in a tagine. A hearty mountain lunch from 30 MAD.' },
                  ],
                },
                {
                  city: 'Sahara Desert',
                  dishes: [
                    { name: 'Medfouna', desc: 'Called "Berber pizza" — a flatbread stuffed with spiced meat, onions, and almonds, baked in sand. A desert-region specialty from 40 MAD.' },
                    { name: 'Desert camp dinner', desc: 'Most camps serve vegetable tagine, couscous, salads, and seasonal fruit. Meals are included in your camp booking.' },
                  ],
                },
                {
                  city: 'Fes',
                  dishes: [
                    { name: 'Pastilla (b\'stilla)', desc: 'A layered pie of shredded pigeon or chicken, almonds, eggs, and cinnamon wrapped in warqa pastry and dusted with powdered sugar. Fes is the home of this dish. From 80 MAD at The Ruined Garden.' },
                    { name: 'Harira', desc: 'Thick tomato-based soup with lentils, chickpeas, and lamb. Eaten daily during Ramadan but available year-round at medina stalls from 10 MAD.' },
                    { name: 'Mechoui', desc: 'Whole lamb slow-roasted in a clay pit until the meat falls off the bone. Sold by weight at specialist stalls near Bab Boujloud from 80 MAD per portion.' },
                  ],
                },
              ].map((city, i) => (
                <div key={i} className="card-moroccan rounded-xl p-5">
                  <h3 className="flex items-center gap-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-800">
                    <MapPin className="h-4 w-4 text-[var(--color-accent)]" /> {city.city}
                  </h3>
                  <div className="mt-3 space-y-3">
                    {city.dishes.map((dish, j) => (
                      <div key={j} className="border-l-2 border-[var(--color-gold)]/30 pl-4">
                        <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-accent)]">
                          {dish.name}
                        </p>
                        <p className="mt-0.5 text-sm text-gray-600">{dish.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DAY-BY-DAY COST TABLE ─────────────────────────────── */}
        <section className="container-morocco py-14">
          <div className="text-center">
            <Banknote className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              Daily Cost Summary
            </h2>
            <p className="mt-2 font-[family-name:var(--font-heading)] text-gray-600">
              Estimated per-person spending by day (mid-range tier). Seasonal pricing can change.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-3xl overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]/20">
                  <th className="pb-3 pr-4 font-[family-name:var(--font-heading)] font-semibold text-gray-800">Day</th>
                  <th className="pb-3 pr-4 font-[family-name:var(--font-heading)] font-semibold text-gray-800">Accommodation</th>
                  <th className="pb-3 pr-4 font-[family-name:var(--font-heading)] font-semibold text-gray-800">Meals</th>
                  <th className="pb-3 pr-4 font-[family-name:var(--font-heading)] font-semibold text-gray-800">Transport</th>
                  <th className="pb-3 font-[family-name:var(--font-heading)] font-semibold text-gray-800">Activities</th>
                </tr>
              </thead>
              <tbody className="font-[family-name:var(--font-heading)] text-gray-600">
                {[
                  { day: '1', acc: 'from 400', meals: 'from 200', transport: 'from 70', act: 'Free (souks)' },
                  { day: '2', acc: 'from 400', meals: 'from 310', transport: 'from 40', act: 'from 310' },
                  { day: '3', acc: 'from 500', meals: 'from 160', transport: 'from 600', act: 'from 100' },
                  { day: '4', acc: 'from 600', meals: 'from 120', transport: 'Included', act: 'Included' },
                  { day: '5', acc: 'from 400', meals: 'from 160', transport: 'Included', act: 'Free (drive)' },
                  { day: '6', acc: 'from 400', meals: 'from 310', transport: 'from 30', act: 'from 330' },
                  { day: '7', acc: 'N/A', meals: 'from 140', transport: 'from 135', act: 'Free (pottery)' },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-gray-100">
                    <td className="py-3 pr-4 font-semibold text-gray-800">Day {row.day}</td>
                    <td className="py-3 pr-4">{row.acc} MAD</td>
                    <td className="py-3 pr-4">{row.meals} MAD</td>
                    <td className="py-3 pr-4">{row.transport} MAD</td>
                    <td className="py-3">{row.act} MAD</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="mt-4 text-center text-xs text-gray-500">
              All figures are per person in Moroccan Dirhams (MAD). Transport costs for Days 3-5 assume a shared 3-day desert tour. Private driver rates differ.
            </p>
          </div>
        </section>

        {/* ── BEST TIME TO GO ───────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-morocco">
            <div className="mx-auto max-w-3xl">
              <div className="text-center">
                <Sun className="mx-auto h-10 w-10 text-[var(--color-gold)]" />
                <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
                  Best Time to Travel This Route
                </h2>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    season: 'Spring (Mar-May)',
                    verdict: 'Ideal',
                    desc: 'Warm days, cool nights, wildflowers in the Atlas. Comfortable desert temperatures around 25-30 degrees Celsius.',
                  },
                  {
                    season: 'Autumn (Sep-Nov)',
                    verdict: 'Ideal',
                    desc: 'Similar to spring with fewer crowds. October is arguably the single best month for this route.',
                  },
                  {
                    season: 'Summer (Jun-Aug)',
                    verdict: 'Hot',
                    desc: 'Desert temperatures exceed 45 degrees Celsius. Marrakech hits 40+. Possible but exhausting. Limit outdoor time to mornings and evenings.',
                  },
                  {
                    season: 'Winter (Dec-Feb)',
                    verdict: 'Cool',
                    desc: 'Cities are pleasant at 15-20 degrees. Atlas passes can have snow. Desert nights drop below 5 degrees. Warm layers are essential.',
                  },
                ].map((s, i) => (
                  <div key={i} className="card-moroccan rounded-xl p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-800">
                        {s.season}
                      </h3>
                      <span className={`rounded-full px-3 py-0.5 text-xs font-bold ${
                        s.verdict === 'Ideal'
                          ? 'bg-green-100 text-green-700'
                          : s.verdict === 'Hot'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-blue-100 text-blue-700'
                      }`}>
                        {s.verdict}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────────── */}
        <section className="container-morocco py-14">
          <div className="text-center">
            <MessageCircleQuestion className="mx-auto h-10 w-10 text-[var(--color-accent)]" />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-3xl space-y-6">
            {faqItems.map((faq, i) => (
              <div key={i} className="card-moroccan rounded-xl p-5">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-800">
                  {faq.q}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-heading)] text-sm text-gray-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── RELATED GUIDES ────────────────────────────────────── */}
        <section className="bg-white py-14">
          <div className="container-morocco">
            <h2 className="text-center font-[family-name:var(--font-display)] text-3xl text-[var(--color-accent)]">
              Related Guides
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  href: '/morocco-10-day-itinerary',
                  title: '10-Day Morocco Itinerary',
                  desc: 'Add Essaouira, Chefchaouen, or the Dades Valley for a deeper exploration of the country.',
                  icon: CalendarDays,
                },
                {
                  href: '/morocco-first-time',
                  title: 'First Time in Morocco',
                  desc: 'Everything first-timers need to know about culture, safety, etiquette, and expectations.',
                  icon: Compass,
                },
                {
                  href: '/morocco-budget-calculator',
                  title: 'Morocco Budget Calculator',
                  desc: 'Calculate your exact trip costs with our interactive budget planning tool.',
                  icon: DollarSign,
                },
                {
                  href: '/morocco-desert-tours',
                  title: 'Sahara Desert Tours',
                  desc: 'Compare desert tour operators, routes, camp tiers, and camel trek options.',
                  icon: Sun,
                },
              ].map((guide, i) => {
                const GuideIcon = guide.icon;
                return (
                  <Link
                    key={i}
                    href={guide.href}
                    className="card-moroccan group rounded-xl p-5 transition-shadow hover:shadow-lg"
                  >
                    <GuideIcon className="h-7 w-7 text-[var(--color-accent)] transition-transform group-hover:scale-110" />
                    <h3 className="mt-3 font-[family-name:var(--font-heading)] font-semibold text-gray-800 group-hover:text-[var(--color-accent)]">
                      {guide.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{guide.desc}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read guide <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────────── */}
        <section className="moroccan-pattern bg-[var(--color-accent)] py-16">
          <div className="container-morocco text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white md:text-4xl">
              Ready to Book Your 7-Day Morocco Adventure?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl font-[family-name:var(--font-heading)] text-lg text-white/90">
              From the labyrinthine souks of Marrakech to the silence of the Sahara at dawn, seven days in Morocco will reshape how you think about travel. Start planning your route today.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/morocco-desert-tours"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-[family-name:var(--font-heading)] font-semibold text-[var(--color-accent)] shadow-lg transition-transform hover:scale-105"
              >
                <Compass className="h-5 w-5" /> Browse Desert Tours
              </Link>
              <Link
                href="/morocco-budget-calculator"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-3 font-[family-name:var(--font-heading)] font-semibold text-white transition-colors hover:bg-white hover:text-[var(--color-accent)]"
              >
                <DollarSign className="h-5 w-5" /> Calculate Your Budget
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  DollarSign,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  Backpack,
  BedDouble,
  Utensils,
  Bus,
  Compass,
  Mountain,
  Globe,
  Calendar,
  Users,
  AlertTriangle,
  Lightbulb,
  Map,
  Sun,
  Wallet,
  Route,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Backpacking Morocco 2026 | Budget Guide, Hostels, Routes & Tips',
  description:
    'Complete backpacking Morocco guide for 2026. Daily budget under 300 MAD, best hostels in Marrakech, Fes, Chefchaouen and Essaouira, classic 2-3 week routes, cheap eats, transport tips, and safety advice for solo backpackers.',
  keywords: [
    'backpacking morocco',
    'morocco backpacking guide',
    'backpacking morocco budget',
    'morocco hostel guide',
    'backpacking north africa',
    'morocco on a budget',
    'cheap travel morocco',
    'morocco backpacker route',
    'solo backpacking morocco',
    'morocco hostels 2026',
    'CTM bus morocco',
    'morocco budget travel',
    'morocco cheap eats',
    'backpacking marrakech',
    'morocco travel budget breakdown',
    'grand taxi morocco',
    'morocco packing list backpacker',
    'meeting travelers morocco',
    'morocco backpacker safety',
    'best time backpack morocco',
  ],
  openGraph: {
    title: 'Backpacking Morocco 2026 | Budget Guide, Hostels, Routes & Tips',
    description:
      'Travel Morocco on under 300 MAD per day. Real hostel names, actual prices, tested backpacker routes, and practical budget tips from the ground.',
    url: `${BASE_URL}/morocco-backpacking`,
    images: [
      {
        url: `${BASE_URL}/images/hero-backpacking.webp`,
        width: 1200,
        height: 630,
        alt: 'Backpacker walking through a narrow medina alley in Morocco with a backpack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backpacking Morocco 2026 | Budget Guide & Hostel Tips',
    description:
      'Under 300 MAD/day in Morocco. Tested hostels, bus routes, cheap eats, and a practical 2-3 week backpacker itinerary across the country.',
    images: [`${BASE_URL}/images/hero-backpacking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-backpacking` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-backpacking`,
  name: 'Backpacking Morocco 2026 | Budget Guide, Hostels, Routes & Tips',
  description:
    'Complete backpacking Morocco guide. Daily budget under 300 MAD, best hostels by city, classic 2-3 week routes, cheap eats, transport, and safety for solo backpackers.',
  url: `${BASE_URL}/morocco-backpacking`,
  image: `${BASE_URL}/images/hero-backpacking.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-backpacking`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Backpacking Guide', item: `${BASE_URL}/morocco-backpacking` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to backpack Morocco per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget backpackers can get by on 200-300 MAD per day (roughly 20-30 USD). This covers a hostel dorm bed (from 80 MAD), three meals from street stalls and local restaurants (from 80 MAD total), local transport, and a few small expenses. Mid-range backpackers spending 400-500 MAD per day can afford private hostel rooms and sit-down restaurants.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo backpackers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for solo backpackers. Petty theft and scams targeting tourists are the main concerns, not violent crime. Keep valuables hidden, ignore unofficial guides in medinas, and avoid poorly lit areas at night. Female solo travelers should dress modestly and may face more persistent attention in some cities, but thousands travel Morocco solo each year without incident.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best backpacker route through Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The classic 2-3 week loop starts in Marrakech, heads to Essaouira (coast), then Chefchaouen (blue city), Fes (imperial city), Merzouga (Sahara desert), through the Todra Gorge, and back to Marrakech. This route covers major highlights and is well-served by CTM buses and grands taxis.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year to backpack Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'March to May and September to November are ideal. Summer (June-August) pushes inland temperatures above 40C in Marrakech, Fes, and the desert. Winter (December-February) is fine for coastal and southern cities, but the Atlas Mountains get snow and some passes close. Shoulder seasons have mild weather, fewer crowds, and lower hostel prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do backpackers get around Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CTM and Supratours run reliable intercity buses at budget-friendly prices (Marrakech to Essaouira costs from 80 MAD). Grands taxis (shared Mercedes sedans) connect smaller towns for even less. The ONCF train links Marrakech, Casablanca, Rabat, Meknes, and Fes. Hitchhiking is common in rural areas and generally safe, though slower.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to book hostels in advance in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'During peak season (March-May, September-November) and major holidays, book at least a few days ahead in popular cities like Marrakech, Chefchaouen, and Fes. In the off-season, you can usually show up and find a dorm bed. Booking apps like Hostelworld and Booking.com work well in Morocco, and many hostels also accept walk-ins at a slight discount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use ATMs easily while backpacking Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ATMs are plentiful in cities and larger towns. BMCE, Attijariwafa, and CIH bank ATMs accept international cards. Withdrawal fees are typically 25-35 MAD per transaction, so take out larger amounts less frequently. Small towns and rural areas often lack ATMs, so carry cash. Credit cards are accepted at upscale restaurants and riads, but street vendors, souks, and local eateries are cash only.',
      },
    },
    {
      '@type': 'Question',
      name: 'What common mistakes do first-time backpackers make in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The biggest mistakes: not agreeing on taxi prices before getting in, following strangers who offer to "help" you find your riad (they collect commission), changing money at airport kiosks (poor rates), packing too much (you can buy anything in Morocco cheaply), skipping smaller cities like Meknes or Essaouira, and not carrying small bills for tipping and small purchases.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: DAILY BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  { category: 'Hostel Dorm Bed', icon: BedDouble, budget: 'From 80 MAD', mid: 'From 150 MAD', notes: 'Dorm bed vs. private room in a hostel riad' },
  { category: 'Breakfast', icon: Coffee, budget: 'From 15 MAD', mid: 'From 30 MAD', notes: 'Msemen + mint tea from a cart vs. hostel breakfast' },
  { category: 'Lunch', icon: Utensils, budget: 'From 25 MAD', mid: 'From 50 MAD', notes: 'Street sandwich or soup vs. sit-down restaurant' },
  { category: 'Dinner', icon: Utensils, budget: 'From 35 MAD', mid: 'From 70 MAD', notes: 'Tagine at a local spot vs. rooftop restaurant' },
  { category: 'Transport (daily avg)', icon: Bus, budget: 'From 20 MAD', mid: 'From 50 MAD', notes: 'Walking + petit taxi vs. intercity bus days' },
  { category: 'Water & Snacks', icon: DollarSign, budget: 'From 10 MAD', mid: 'From 20 MAD', notes: '1.5L bottle + fruit from a souk' },
  { category: 'Activities', icon: Compass, budget: 'From 0 MAD', mid: 'From 80 MAD', notes: 'Free medina walking vs. guided tour or museum' },
  { category: 'Daily Total', icon: Wallet, budget: 'From 185 MAD', mid: 'From 450 MAD', notes: 'Approx. 18 USD vs. 45 USD at current rates' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST HOSTELS BY CITY
   ═══════════════════════════════════════════════════════════════ */

const hostelsByCity = [
  {
    city: 'Marrakech',
    hostels: [
      { name: 'Wicked Hostel', dorm: 'From 90 MAD', vibe: 'Social rooftop, pool, free breakfast. In Gueliz near the train station.', rating: '9.0' },
      { name: 'Hostel Kif Kif', dorm: 'From 80 MAD', vibe: 'Medina riad with a courtyard. Walking distance to Jemaa el-Fna.', rating: '8.7' },
      { name: 'Equity Point Marrakech', dorm: 'From 100 MAD', vibe: 'Large hostel with hammam, pool, and organized day trips to Ouzoud Falls.', rating: '8.5' },
    ],
  },
  {
    city: 'Fes',
    hostels: [
      { name: 'Funky Fes', dorm: 'From 80 MAD', vibe: 'Right inside the medina. Rooftop terrace overlooking the tanneries.', rating: '8.8' },
      { name: 'Hostel Dar Jannat', dorm: 'From 70 MAD', vibe: 'Quiet riad near Bab Boujloud. Cheap private rooms from 200 MAD.', rating: '8.4' },
    ],
  },
  {
    city: 'Chefchaouen',
    hostels: [
      { name: 'Hostel Aline', dorm: 'From 70 MAD', vibe: 'Blue-painted riad with mountain views. Communal dinners bring travelers together.', rating: '9.1' },
      { name: 'Casa Perleta', dorm: 'From 80 MAD', vibe: 'Colorful courtyard, free tea, helpful staff who arrange hikes to Akchour.', rating: '8.9' },
    ],
  },
  {
    city: 'Essaouira',
    hostels: [
      { name: 'Hostel des Voyageurs', dorm: 'From 80 MAD', vibe: 'Steps from the port. Surf-friendly, board storage, communal kitchen.', rating: '8.6' },
      { name: 'The Melting Pot Essaouira', dorm: 'From 90 MAD', vibe: 'Social atmosphere, rooftop sunset sessions, free walking tour included.', rating: '8.8' },
    ],
  },
  {
    city: 'Merzouga (Sahara)',
    hostels: [
      { name: 'Camel Trekking Hostel', dorm: 'From 60 MAD', vibe: 'Basic but functional. Organizes overnight desert camps from 250 MAD including camel ride, dinner, and tent.', rating: '8.2' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CLASSIC BACKPACKER ROUTES
   ═══════════════════════════════════════════════════════════════ */

const backpackerRoutes = [
  {
    name: 'The Classic Loop (2-3 Weeks)',
    icon: Route,
    stops: 'Marrakech > Essaouira > Chefchaouen > Fes > Merzouga > Todra Gorge > Marrakech',
    days: '14-21 days',
    description: 'The most popular backpacker circuit. Start in Marrakech, detour west to Essaouira for the coast, head north to the blue city Chefchaouen, cross to Fes for imperial history, drop south into the Sahara at Merzouga, wind through the Todra Gorge, and loop back to Marrakech.',
    budget: 'From 3,500 MAD total transport',
  },
  {
    name: 'Northern Explorer (10-14 Days)',
    icon: Map,
    stops: 'Tangier > Chefchaouen > Fes > Meknes > Rabat > Casablanca',
    days: '10-14 days',
    description: 'Ideal if you arrive by ferry from Spain. Hit the atmospheric port of Tangier, spend two to three days in Chefchaouen, explore the vast medina of Fes, see the underrated imperial city of Meknes, and finish along the Atlantic coast. Trains connect Rabat, Meknes, Fes, and Casablanca efficiently.',
    budget: 'From 2,000 MAD total transport',
  },
  {
    name: 'Southern Desert & Mountains (2 Weeks)',
    icon: Mountain,
    stops: 'Marrakech > Ait Benhaddou > Todra Gorge > Merzouga > Ouarzazate > Marrakech',
    days: '12-16 days',
    description: 'For backpackers who want mountain passes, kasbahs, and the Sahara without the northern cities. Cross the Tizi n\'Tichka pass, explore the UNESCO ksar of Ait Benhaddou, hike the Todra Gorge, camp in Erg Chebbi dunes, and return via the Draa Valley. Shared grands taxis handle most of these routes.',
    budget: 'From 2,500 MAD total transport',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHEAP EATS
   ═══════════════════════════════════════════════════════════════ */

const cheapEats = [
  { item: 'Harira (lentil & tomato soup)', price: 'From 5 MAD', where: 'Everywhere. The national soup, sold at street stalls especially during Ramadan.' },
  { item: 'Msemen (stuffed flatbread)', price: 'From 3 MAD', where: 'Cart vendors on every corner. Filled with cheese, honey, or kefta (minced meat).' },
  { item: 'Bocadillo (baguette sandwich)', price: 'From 15 MAD', where: 'Hole-in-the-wall sandwich shops. Tuna, egg, or kefta with harissa and olives.' },
  { item: 'Tagine (chicken or vegetable)', price: 'From 30 MAD', where: 'Hole-in-the-wall restaurants away from tourist squares. Ask locals for their spot.' },
  { item: 'Brochettes (kebab skewers)', price: 'From 5 MAD per skewer', where: 'Grill stalls near bus stations and market areas. Lamb, chicken, or kefta.' },
  { item: 'Fresh orange juice', price: 'From 5 MAD', where: 'Juice stalls in every city. Jemaa el-Fna in Marrakech has the most famous row of stands.' },
  { item: 'Mint tea', price: 'From 8 MAD', where: 'Cafes everywhere. Sit with locals and people-watch. Free refills at most places.' },
  { item: 'Avocado smoothie', price: 'From 15 MAD', where: 'Juice shops in Marrakech, Chefchaouen, and Essaouira. Blended with milk and almonds.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingEssentials = [
  { item: '40-50L backpack (no bigger)', reason: 'You will carry it through medina alleys. Anything over 50L becomes a liability on buses and in tight spaces.' },
  { item: 'Padlock for hostel lockers', reason: 'Most hostels provide lockers but not locks. A small combination lock saves repeat purchases.' },
  { item: 'Lightweight scarf or sarong', reason: 'Covers shoulders at mosques, blocks sand in the desert, doubles as a towel or blanket on overnight buses.' },
  { item: 'Headlamp', reason: 'Medina alleys have zero street lighting. Essential for desert camps and early bus departures.' },
  { item: 'Reusable water bottle with filter', reason: 'Tap water is not drinkable. A LifeStraw or Grayl bottle saves plastic and money over weeks.' },
  { item: 'Flip-flops for showers', reason: 'Hostel bathrooms are shared. Protect your feet and use them in hammams too.' },
  { item: 'Dry bag or rain cover', reason: 'Sudden rain in the Rif, splashes from medina carts, and desert sand all threaten your gear.' },
  { item: 'Toilet paper or tissues', reason: 'Public toilets rarely supply it. Carry a small roll at all times.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON MISTAKES
   ═══════════════════════════════════════════════════════════════ */

const commonMistakes = [
  { mistake: 'Following strangers into the medina', fix: 'Download offline maps (Maps.me or Google Maps). If someone insists on guiding you, agree on a price upfront or firmly decline.' },
  { mistake: 'Not agreeing on taxi prices before riding', fix: 'Petit taxis in cities should use the meter. If the driver refuses, get another taxi. Grands taxis between cities have fixed prices -- ask other passengers.' },
  { mistake: 'Changing money at the airport', fix: 'Airport exchange kiosks take a 10-15% margin. Withdraw from ATMs instead, or change a small amount at the airport and find a better bureau in the medina.' },
  { mistake: 'Overpacking', fix: 'Morocco has cheap clothing, toiletries, and gear in every medina. Pack light and buy what you need on the ground.' },
  { mistake: 'Only visiting Marrakech and Fes', fix: 'Smaller cities like Meknes, Essaouira, Chefchaouen, and Rabat offer more relaxed atmospheres and fewer tourist-targeting scams.' },
  { mistake: 'Eating only on Jemaa el-Fna', fix: 'The famous food stalls charge double and quality varies. Walk five minutes into the medina for better food at half the price.' },
  { mistake: 'Skipping the Sahara due to cost', fix: 'Budget desert tours from Marrakech start from 600 MAD for two days. From Merzouga, a basic overnight camel trek costs from 250 MAD. Far cheaper than you think.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBackpackingPage() {
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
            backgroundImage: 'url(/images/hero-backpacking.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Backpacking Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Backpack className="w-4 h-4" />
            Budget Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Backpacking Morocco:
            <br className="hidden md:block" /> The Complete Budget Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Travel Morocco on under 300 MAD per day. Real hostel names, tested routes,
            actual prices, and hard-won advice from the ground.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is One of the Best Budget Destinations on Earth
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco runs on a different price clock than Europe. A full tagine dinner costs less than
                a London coffee. Hostel dorm beds in converted riads go for under 100 MAD a night. The bus
                from Marrakech to Essaouira -- three hours through argan forests -- sets you back 80 MAD.
                This is a country where backpackers routinely spend less than 200 MAD per day and still eat
                well, sleep comfortably, and move between cities without stress.
              </p>
              <p>
                The geography packs variety into a small footprint. Atlantic beaches, the Sahara desert,
                snow-capped Atlas peaks, and ancient medinas are all reachable within a single bus ride
                from each other. Add a well-established hostel scene, reliable public transport, and a
                backpacker trail that has been running for decades, and you get a country built for
                budget travel. This guide covers the practical details: what things actually cost, which
                hostels to book, how to move between cities, and the mistakes that drain your wallet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily Budget Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What backpackers actually spend per day in Morocco, split across two spending levels.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices reflect 2026 averages. Seasonal pricing, especially in peak months, can push costs up 20-30%.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-4 gap-2 mb-4 px-4 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">
              <span className="col-span-1">Expense</span>
              <span className="text-center">Shoestring</span>
              <span className="text-center">Comfortable</span>
              <span className="hidden md:block">Notes</span>
            </div>
            <div className="space-y-3">
              {budgetBreakdown.map((item) => {
                const ItemIcon = item.icon;
                const isTotal = item.category === 'Daily Total';
                return (
                  <div key={item.category} className={`card-moroccan p-4 ${isTotal ? 'ring-2 ring-[var(--color-accent)]/30' : ''}`}>
                    <div className="grid grid-cols-4 gap-2 items-center">
                      <div className="col-span-1 flex items-center gap-2">
                        <ItemIcon className={`w-4 h-4 shrink-0 ${isTotal ? 'text-[var(--color-accent)]' : 'text-[var(--text-muted)]'}`} />
                        <span className={`text-sm ${isTotal ? 'font-bold text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                          {item.category}
                        </span>
                      </div>
                      <span className={`text-center text-sm ${isTotal ? 'font-bold text-[var(--color-accent)]' : 'text-[var(--text-secondary)]'}`}>
                        {item.budget}
                      </span>
                      <span className={`text-center text-sm ${isTotal ? 'font-bold text-[var(--color-accent)]' : 'text-[var(--text-secondary)]'}`}>
                        {item.mid}
                      </span>
                      <span className="hidden md:block text-xs text-[var(--text-muted)]">{item.notes}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Hostels by City ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BedDouble className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Hostels by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Tested backpacker hostels with real names, actual dorm prices, and what makes each one worth booking.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Dorm prices shown are starting rates. Expect increases during peak season and holidays.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {hostelsByCity.map((city) => (
              <div key={city.city}>
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {city.hostels.map((hostel) => (
                    <div key={hostel.name} className="card-moroccan p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {hostel.name}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-[var(--color-gold)]">
                          <Star className="w-3 h-3 fill-current" />
                          {hostel.rating}
                        </div>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">{hostel.vibe}</p>
                      <div className="flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                        <DollarSign className="w-3 h-3" />
                        {hostel.dorm} / dorm bed
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Backpacker Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Classic Backpacker Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tested routes covering Morocco&apos;s highlights, from the quick northern loop to the full-country circuit.
          </p>

          <div className="space-y-6">
            {backpackerRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RouteIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {route.name}
                        </h3>
                        <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                          <Clock className="w-3 h-3" />
                          {route.days}
                        </div>
                      </div>
                      <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">{route.stops}</p>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{route.description}</p>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <DollarSign className="w-3 h-3" />
                        Transport estimate: {route.budget}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Transport Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around on a Budget
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has solid public transport. Here is how to use each option and what it actually costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Bus,
                title: 'CTM & Supratours Buses',
                text: 'The backbone of backpacker transport. CTM operates modern coaches with AC, assigned seats, and luggage holds. Buy tickets online or at the station (arrive 30 minutes early). Supratours connects to ONCF train routes. Marrakech to Fes: from 190 MAD. Marrakech to Essaouira: from 80 MAD. Fes to Chefchaouen: from 75 MAD.',
              },
              {
                icon: Users,
                title: 'Grands Taxis (Shared)',
                text: 'Older Mercedes sedans that seat six passengers and depart when full. Cheaper than buses for short hops. Fixed prices -- ask fellow passengers what they paid. Chefchaouen to Fes: from 65 MAD. Essaouira to Marrakech: from 60 MAD. Merzouga to Tinghir: from 50 MAD. No reservations; show up at the taxi stand and wait.',
              },
              {
                icon: Route,
                title: 'ONCF Trains',
                text: 'Clean, punctual, and affordable. Second-class seats cost roughly 50% less than first. The main line connects Marrakech, Casablanca, Rabat, Meknes, and Fes. Marrakech to Fes: from 150 MAD in second class. The new Al Boraq high-speed train links Tangier to Casablanca in 2 hours 10 minutes for from 150 MAD.',
              },
              {
                icon: Compass,
                title: 'Hitchhiking',
                text: 'Common and culturally accepted in rural Morocco, especially in the Atlas Mountains and southern regions. Truck drivers and locals regularly pick up travelers. Offer to contribute fuel money (from 20 MAD). Not recommended for solo female travelers or at night. Use common sense: stick to daytime, main roads, and trust your instincts.',
              },
            ].map((transport) => {
              const TIcon = transport.icon;
              return (
                <div key={transport.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <TIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {transport.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{transport.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cheap Eats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cheap Eats: What to Eat &amp; What It Costs
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Moroccan street food is filling, delicious, and absurdly cheap. A full day of eating costs less than a single restaurant meal back home.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices reflect local eateries away from tourist hotspots. Tourist-facing restaurants charge 2-3x these rates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {cheapEats.map((eat) => (
              <div key={eat.item} className="card-moroccan p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {eat.item}
                  </h3>
                  <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-0.5 rounded shrink-0 ml-2">
                    {eat.price}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">{eat.where}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Free Things to Do Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best experiences in Morocco cost nothing. Your feet and curiosity are the only requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { activity: 'Get lost in the Fes medina', detail: 'The world\'s largest car-free urban zone. Wander for hours through 9,000+ alleys. No map needed -- getting lost is the point.' },
              { activity: 'Watch sunset from the Essaouira ramparts', detail: 'The 18th-century sea walls face due west. Fishermen bring in the catch below while the sky turns orange.' },
              { activity: 'Hike the hills above Chefchaouen', detail: 'The Spanish Mosque trail takes 30 minutes and delivers panoramic views over the entire blue city. Go for sunrise.' },
              { activity: 'Explore the Marrakech souks', detail: 'No purchase necessary. The dyers\' souk, spice souk, and metalworkers\' souk are free spectacles of color and craft.' },
              { activity: 'Swim at Legzira Beach', detail: 'Dramatic red stone arches frame the Atlantic near Sidi Ifni. No entrance fee, no crowds outside summer.' },
              { activity: 'Walk through Ait Benhaddou', detail: 'This UNESCO ksar is free to enter. Climb to the top for Draa Valley views. Morning light is best for photos.' },
              { activity: 'People-watch at a cafe terrace', detail: 'Order a single mint tea (from 8 MAD) and sit for hours. Nobody rushes you. Moroccans invented slow cafe culture.' },
              { activity: 'Visit the Hassan II Mosque exterior (Casablanca)', detail: 'The world\'s third-largest mosque sits on the Atlantic. The exterior plaza and ocean views are free. Interior tours from 130 MAD.' },
            ].map((item) => (
              <div key={item.activity} className="card-moroccan p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.activity}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meeting Other Travelers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Meeting Other Backpackers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has a strong backpacker community. Here is where connections happen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Hostel Common Areas & Rooftops', text: 'The social hostels listed above are designed for this. Communal dinners at Hostel Aline in Chefchaouen and rooftop hangouts at Wicked in Marrakech are where travel friendships start.' },
              { title: 'Shared Grands Taxis', text: 'Six strangers crammed into a Mercedes for three hours. You will talk. Some of the best travel friendships form on these rides, and it is common to continue traveling together afterward.' },
              { title: 'Desert Tours from Marrakech', text: 'Budget two or three-day Sahara tours group backpackers together. Sharing a campfire under Saharan stars bonds people fast. Group rates also bring individual costs down.' },
              { title: 'Chefchaouen & Essaouira', text: 'These two cities attract longer-staying backpackers. The pace is slower, people linger, and you see the same faces at cafes. Easiest places in Morocco to build a travel crew.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Backpacker Packing Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack less than you think. Morocco has cheap shops everywhere, and a heavy bag ruins medina navigation.
          </p>

          <div className="space-y-4">
            {packingEssentials.map((item) => (
              <div key={item.item} className="card-moroccan p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.item}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)]">{item.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety for Solo Backpackers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety for Solo Backpackers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is not dangerous, but it demands street smarts. Scams and hassle are more common than crime.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: 'Violent Crime Is Rare', text: 'Morocco\'s violent crime rate against tourists is low. The main risks are pickpocketing in crowded medinas and scams targeting foreigners. Stay alert in crowds, keep valuables in a money belt, and avoid displaying expensive gear.' },
              { icon: AlertTriangle, title: 'The Unofficial Guide Scam', text: 'In Fes and Marrakech, people approach offering to "help" you find your riad. They lead you in circles, then demand payment or steer you to shops that pay them commission. Use GPS, decline firmly, and walk away.' },
              { icon: Users, title: 'Solo Female Travelers', text: 'Thousands of women backpack Morocco solo each year. Dress modestly (shoulders and knees covered), ignore catcalls, and consider staying in female dorms. The Rif and rural areas tend to be more conservative. Trust your instincts and connect with other travelers.' },
              { icon: Lightbulb, title: 'Night Safety', text: 'Main tourist areas are well-lit and busy until late. Avoid empty medina alleys after dark. Stick to petit taxis rather than walking alone at night. Share taxi rides with other backpackers when possible.' },
              { icon: Globe, title: 'Cannabis in the Rif', text: 'Northern Morocco, especially around Ketama, is a major cannabis-producing region. Locals may offer you kif (marijuana) persistently. Possession is illegal and police sometimes target tourists. Decline and move on. Do not buy from strangers.' },
              { icon: DollarSign, title: 'Price Gouging', text: 'Some taxi drivers, shop owners, and restaurant owners charge tourists several times the local price. Always confirm prices before buying, eating, or riding. Learn the standard rates. A petit taxi across central Marrakech should cost from 15-25 MAD by meter.' },
            ].map((item) => {
              const SIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <SIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best & Worst Months ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best &amp; Worst Months to Backpack Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing changes everything. The difference between peak summer and shoulder season is both comfort and cost.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5 ring-2 ring-green-500/20">
              <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-500/10 text-green-700 mb-3">
                Best Season
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                March - May
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Warm but not brutal. Wildflowers in the Atlas. Ideal for desert trips before summer heat
                arrives. Hostels are busy but not fully booked. Prices sit at moderate levels.
              </p>
            </div>
            <div className="card-moroccan p-5 ring-2 ring-green-500/20">
              <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-500/10 text-green-700 mb-3">
                Best Season
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                September - November
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Summer heat breaks by mid-September. October is arguably the single best month: warm
                coast, cool mountains, and the Sahara is tolerable. Harvest season brings festivals in
                Berber villages. Hostel prices drop after the European summer rush.
              </p>
            </div>
            <div className="card-moroccan p-5 ring-2 ring-red-500/20">
              <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-red-500/10 text-red-700 mb-3">
                Hardest Season
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                June - August
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Marrakech and Fes hit 40-45C. The Sahara is unbearable. Only the coast stays
                pleasant (Essaouira barely cracks 25C). If you come in summer, stick to Essaouira,
                Tangier, and the Atlantic coast. Many inland hostels raise prices for air-conditioned rooms.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-5 mt-6">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Winter (December - February)
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  A mixed bag. Coastal cities like Essaouira and Agadir stay mild (16-20C). Marrakech is pleasant
                  during the day but cold at night. The Atlas Mountains get snow, closing some passes and making trekking
                  difficult. Hostel prices drop to their lowest. Great for budget-conscious travelers who skip the mountains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Mistakes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Backpacker Mistakes (and How to Avoid Them)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every one of these has cost someone money, time, or patience. Learn from their experience.
          </p>

          <div className="space-y-4">
            {commonMistakes.map((item) => (
              <div key={item.mistake} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-red-500" />
                  <div className="flex-1">
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.mistake}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold text-[var(--color-accent)]">Fix:</span> {item.fix}
                    </p>
                  </div>
                </div>
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
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to backpack Morocco per day?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget backpackers spend 200-300 MAD per day (roughly 20-30 USD). That covers a hostel dorm
                bed from 80 MAD, three meals from street stalls and local restaurants totaling around 80 MAD,
                local transport, and minor expenses. Comfortable backpackers spending 400-500 MAD per day can
                afford private hostel rooms and sit-down restaurants.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo backpackers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Generally safe. Petty theft and scams are the main concerns, not violent crime. Keep valuables
                hidden, ignore unofficial guides in medinas, and avoid poorly lit areas at night. Female solo
                travelers should dress modestly and may face persistent attention in some cities. Thousands
                travel Morocco solo each year without incident.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best backpacker route through Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The classic 2-3 week loop: Marrakech to Essaouira, north to Chefchaouen, across to Fes,
                south to Merzouga for the Sahara, through the Todra Gorge, and back to Marrakech. This hits
                the major highlights and is well-connected by CTM buses and grands taxis.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time of year to backpack Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                March to May and September to November. Summer pushes inland temperatures above 40C. Winter
                is fine for coastal cities but brings snow to the Atlas. Shoulder seasons offer mild weather,
                fewer crowds, and lower hostel prices.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do backpackers get around Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                CTM and Supratours run reliable intercity buses at budget prices. Grands taxis (shared Mercedes
                sedans) connect smaller towns even cheaper. ONCF trains link Marrakech, Casablanca, Rabat,
                Meknes, and Fes. Hitchhiking is common and culturally accepted in rural areas.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need to book hostels in advance?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                During peak season (March-May, September-November) and holidays, book a few days ahead in
                Marrakech, Chefchaouen, and Fes. Off-season, walk-ins are usually fine. Hostelworld and
                Booking.com work well. Many hostels offer a small discount for walk-in guests.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I use ATMs easily while backpacking Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                ATMs are plentiful in cities. BMCE, Attijariwafa, and CIH bank ATMs accept international
                cards with fees around 25-35 MAD per withdrawal. Take out larger amounts less often to
                minimize fees. Small towns and rural areas often lack ATMs, so carry cash. Souks, street
                vendors, and local eateries are cash only.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What common mistakes do first-time backpackers make?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not agreeing on taxi prices beforehand, following strangers who offer to &quot;help&quot; find
                your riad, changing money at airport kiosks (terrible rates), overpacking, only visiting
                Marrakech and Fes, and eating exclusively in tourist squares where prices are double.
              </p>
            </div>
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
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed cost breakdowns, money-saving strategies, and budget planning for Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-safety" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Scam awareness, solo travel safety, emergency contacts, and neighborhood guides.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Street food, regional dishes, restaurant etiquette, and the best things to eat city by city.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-transport" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Buses, trains, grands taxis, and domestic flights. Routes, prices, and booking tips.
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
            Ready to Backpack Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Grab a 40L pack, book a one-way flight, and figure out the rest on the ground.
            Morocco rewards the spontaneous. Your budget will stretch further than you expect.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-budget-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Wallet className="w-5 h-5" />
              Plan Your Budget
            </Link>
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Compass className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

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
  Wallet,
  Route,
  Coffee,
  Droplets,
  MessageCircleQuestion,
  Tent,
  Heart,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-backpacking`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Backpacking Morocco 2026 | Budget Guide, Hostels, Routes & Daily Costs',
  description:
    'Complete backpacking Morocco guide for 2026. Daily budget from 185 MAD, best hostels in Marrakech, Fes, Chefchaouen and Essaouira, 2-week to 1-month itineraries, cheap eats, CTM/Supratours/grand taxi transport, solo backpacker safety, packing list, water & hygiene tips, and scams to avoid.',
  keywords: [
    'backpacking morocco',
    'morocco backpacking guide 2026',
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
    'morocco backpacker safety',
    'morocco bivouac camping',
    'morocco scams to avoid',
  ],
  openGraph: {
    title: 'Backpacking Morocco 2026 | Budget Guide, Hostels, Routes & Daily Costs',
    description:
      'Travel Morocco on under 300 MAD per day. Hostel picks, actual prices, tested 2-week to 1-month backpacker routes, cheap eats, transport, solo safety, and scams to avoid.',
    url: PAGE_URL,
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
    title: 'Backpacking Morocco 2026 | Budget Guide & Routes',
    description:
      'Under 300 MAD/day. Tested hostels, bus routes, cheap eats, 2-week to 1-month itineraries, and practical safety tips for backpackers.',
    images: [`${BASE_URL}/images/hero-backpacking.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'How much does it cost to backpack Morocco per day?',
    a: 'Budget backpackers spend from 185 MAD to 300 MAD per day (roughly 18-30 USD). That covers a hostel dorm bed from 80 MAD, three meals from street stalls totaling around 80 MAD, local transport, and minor expenses. Mid-range backpackers spending 400-500 MAD per day can afford private hostel rooms and sit-down restaurants. Seasonal pricing can change during peak months.',
  },
  {
    q: 'Is Morocco safe for solo backpackers?',
    a: 'Morocco is generally safe for solo backpackers. Petty theft and scams targeting tourists are the main concerns, not violent crime. Keep valuables hidden, ignore unofficial guides in medinas, and avoid poorly lit areas at night. Female solo travelers should dress modestly and may face persistent attention in some cities. Thousands travel Morocco solo each year without incident.',
  },
  {
    q: 'What is the best backpacker route through Morocco?',
    a: 'The classic 2-3 week loop starts in Marrakech, heads to Essaouira for the coast, north to Chefchaouen (blue city), across to Fes (imperial city), south to Merzouga for the Sahara, through the Todra Gorge, and back to Marrakech. CTM buses and grands taxis cover every leg of this route.',
  },
  {
    q: 'What is the best time of year to backpack Morocco?',
    a: 'March to May and September to November are ideal. Summer pushes inland temperatures above 40C in Marrakech, Fes, and the desert. Winter is fine for coastal cities but the Atlas Mountains get snow and some passes close. Shoulder seasons offer mild weather, fewer crowds, and lower hostel prices.',
  },
  {
    q: 'Can I wild camp or bivouac in Morocco?',
    a: 'Wild camping (bivouac) is technically legal in rural Morocco outside of national parks and military zones. Many backpackers camp for free on beaches south of Agadir, in the Atlas foothills, and near oases in the Draa Valley. Bring a lightweight tent, tell someone your plans, and avoid camping near towns. Organized bivouac camps in the Sahara cost from 150 MAD per night including dinner and breakfast.',
  },
  {
    q: 'Is tap water safe to drink in Morocco?',
    a: 'Tap water in Morocco is treated but not recommended for travelers. Buy sealed 1.5L bottles from 5 MAD, or carry a filter bottle (LifeStraw, Grayl) to save money and reduce plastic. Avoid ice in drinks outside tourist restaurants. Brush your teeth with bottled water in rural areas. Street food vendors use tap water for cooking, which is safe since it is boiled.',
  },
  {
    q: 'How do backpackers get around Morocco?',
    a: 'CTM and Supratours run reliable intercity buses at budget prices (Marrakech to Essaouira from 80 MAD). Grands taxis (shared Mercedes sedans) connect smaller towns for even less. ONCF trains link Marrakech, Casablanca, Rabat, Meknes, and Fes. Local petit taxis handle in-city trips from 10 MAD. Hitchhiking is culturally accepted in rural areas.',
  },
  {
    q: 'Do I need to book hostels in advance?',
    a: 'During peak season (March-May, September-November) and holidays, book a few days ahead in Marrakech, Chefchaouen, and Fes. Off-season, walk-ins are usually fine. Hostelworld and Booking.com work well. Many hostels offer a small discount for walk-in guests paying cash.',
  },
  {
    q: 'What common scams should backpackers watch for?',
    a: 'The most common: fake guides leading you into the medina and demanding payment, taxi drivers refusing to use meters, shops claiming goods are "antique" at inflated prices, henna artists grabbing your hand and demanding from 200 MAD, and people offering to show you a "shortcut" to your riad. Agree on all prices before any service, download offline maps, and walk away from unsolicited help.',
  },
  {
    q: 'Can I use ATMs easily while backpacking Morocco?',
    a: 'ATMs are plentiful in cities. BMCE, Attijariwafa, and CIH bank ATMs accept international cards. Withdrawal fees run 25-35 MAD per transaction, so take out larger amounts less often. Small towns and rural areas may lack ATMs, so carry cash reserves. Souks, street vendors, and local eateries are cash only.',
  },
];

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Backpacking Morocco 2026 | Budget Guide, Hostels, Routes & Daily Costs',
  description:
    'Complete backpacking Morocco guide covering budget accommodation, daily costs, backpacker routes, cheap eats, transport, solo travel safety, packing list, and scams to avoid.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-backpacking.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Backpacking Guide', item: PAGE_URL },
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
   DATA: DAILY BUDGET BREAKDOWN
   ================================================================ */

const budgetBreakdown = [
  { category: 'Hostel Dorm Bed', icon: BedDouble, budget: 'From 80 MAD', mid: 'From 150 MAD', notes: 'Dorm bed vs. private room in a hostel riad' },
  { category: 'Breakfast', icon: Coffee, budget: 'From 15 MAD', mid: 'From 30 MAD', notes: 'Msemen + mint tea from a cart vs. hostel buffet' },
  { category: 'Lunch', icon: Utensils, budget: 'From 25 MAD', mid: 'From 50 MAD', notes: 'Street sandwich or harira vs. sit-down restaurant' },
  { category: 'Dinner', icon: Utensils, budget: 'From 35 MAD', mid: 'From 70 MAD', notes: 'Tagine at a local spot vs. rooftop restaurant' },
  { category: 'Transport (daily avg)', icon: Bus, budget: 'From 20 MAD', mid: 'From 50 MAD', notes: 'Walking + petit taxi vs. intercity bus days' },
  { category: 'Water & Snacks', icon: Droplets, budget: 'From 10 MAD', mid: 'From 20 MAD', notes: '1.5L bottle + fruit from a souk' },
  { category: 'Activities', icon: Compass, budget: 'From 0 MAD', mid: 'From 80 MAD', notes: 'Free medina walking vs. guided tour or museum' },
  { category: 'Daily Total', icon: Wallet, budget: 'From 185 MAD', mid: 'From 450 MAD', notes: 'Approx. 18 USD vs. 45 USD at current rates' },
] as const;

/* ================================================================
   DATA: ACCOMMODATION OPTIONS
   ================================================================ */

const accommodationTypes = [
  {
    type: 'Hostels (Auberges)',
    icon: BedDouble,
    price: 'From 60 MAD dorm, from 150 MAD private',
    description: 'The backbone of budget travel in Morocco. Most hostels are converted riads with courtyards, rooftop terraces, and communal kitchens. Marrakech, Fes, Chefchaouen, and Essaouira have the best hostel scenes. Free Wi-Fi, lockers, and breakfast are standard at rated hostels.',
    tip: 'Book on Hostelworld for reviews, but ask about walk-in cash discounts at the door.',
  },
  {
    type: 'Bivouac Camps (Desert)',
    icon: Tent,
    price: 'From 150 MAD with dinner and breakfast',
    description: 'Semi-permanent tent camps in the Sahara dunes near Merzouga and M\'Hamid. Basic bivouacs use Berber tents with shared mattresses, communal fire, and desert sky overhead. A camel ride to camp is usually included. Luxury bivouacs with private tents and showers exist from 500 MAD.',
    tip: 'Basic bivouacs are the authentic experience. You do not need the luxury version to enjoy the Sahara.',
  },
  {
    type: 'Wild Camping (Bivouac Libre)',
    icon: Mountain,
    price: 'Free',
    description: 'Legal in rural Morocco outside national parks. Popular spots include beaches south of Agadir (Imsouane, Sidi Ifni), Atlas Mountain foothills, and Draa Valley oases. Bring a lightweight tent, sleeping bag, and headlamp. No facilities, so carry water and pack out all trash.',
    tip: 'Tell your hostel or a local where you plan to camp. Avoid spots near military installations.',
  },
  {
    type: 'Campgrounds',
    icon: Tent,
    price: 'From 30 MAD per person per night',
    description: 'Organized campsites exist in Essaouira, Taghazout, Dakhla, the Todra Gorge, and near major trekking areas. Most offer basic toilets, cold showers, and sometimes a small shop. Some accept campervans. Quality ranges wildly.',
    tip: 'Camping Municipal sites are the cheapest but most basic. Private campings near beaches are worth the extra 20 MAD.',
  },
] as const;

/* ================================================================
   DATA: BEST HOSTELS BY CITY
   ================================================================ */

const hostelsByCity = [
  {
    city: 'Marrakech',
    hostels: [
      { name: 'Wicked Hostel', dorm: 'From 90 MAD', vibe: 'Social rooftop, pool, free breakfast. In Gueliz near the train station.', rating: '9.0' },
      { name: 'Hostel Kif Kif', dorm: 'From 80 MAD', vibe: 'Medina riad with a courtyard. Walking distance to Jemaa el-Fna.', rating: '8.7' },
      { name: 'Equity Point Marrakech', dorm: 'From 100 MAD', vibe: 'Large hostel with hammam, pool, and organized trips to Ouzoud Falls.', rating: '8.5' },
    ],
  },
  {
    city: 'Fes',
    hostels: [
      { name: 'Funky Fes', dorm: 'From 80 MAD', vibe: 'Inside the medina. Rooftop terrace overlooking the tanneries.', rating: '8.8' },
      { name: 'Hostel Dar Jannat', dorm: 'From 70 MAD', vibe: 'Quiet riad near Bab Boujloud. Private rooms from 200 MAD.', rating: '8.4' },
    ],
  },
  {
    city: 'Chefchaouen',
    hostels: [
      { name: 'Hostel Aline', dorm: 'From 70 MAD', vibe: 'Blue-painted riad with mountain views. Communal dinners every night.', rating: '9.1' },
      { name: 'Casa Perleta', dorm: 'From 80 MAD', vibe: 'Colorful courtyard, free tea, staff who arrange Akchour hikes.', rating: '8.9' },
    ],
  },
  {
    city: 'Essaouira',
    hostels: [
      { name: 'Hostel des Voyageurs', dorm: 'From 80 MAD', vibe: 'Steps from the port. Surf-friendly with board storage and kitchen.', rating: '8.6' },
      { name: 'The Melting Pot', dorm: 'From 90 MAD', vibe: 'Social atmosphere, rooftop sunset sessions, free walking tour.', rating: '8.8' },
    ],
  },
  {
    city: 'Merzouga (Sahara)',
    hostels: [
      { name: 'Camel Trekking Hostel', dorm: 'From 60 MAD', vibe: 'Basic but functional. Overnight desert camps from 250 MAD including camel ride.', rating: '8.2' },
    ],
  },
] as const;

/* ================================================================
   DATA: BACKPACKER ITINERARIES
   ================================================================ */

const itineraries = [
  {
    name: '2 Weeks: The Classic Loop',
    icon: Route,
    stops: 'Marrakech (3) > Essaouira (2) > Chefchaouen (2) > Fes (3) > Merzouga (2) > Marrakech (2)',
    days: '14 days',
    description: 'The most popular backpacker circuit. Covers the medina chaos of Marrakech, coastal winds of Essaouira, blue alleys of Chefchaouen, labyrinthine Fes, and a night under Sahara stars. Well-connected by CTM buses.',
    budget: 'From 3,500 MAD total transport',
  },
  {
    name: '3 Weeks: Extended Explorer',
    icon: Map,
    stops: 'Tangier (2) > Chefchaouen (3) > Fes (3) > Merzouga (2) > Todra Gorge (2) > Ouarzazate (1) > Marrakech (3) > Essaouira (3) > Marrakech (1)',
    days: '21 days',
    description: 'Start by ferry from Spain into Tangier. Work south through the Rif Mountains and imperial cities, then loop through the desert and gorges. End with Atlantic sunsets in Essaouira. The extra week lets you slow down and connect with other travelers.',
    budget: 'From 4,500 MAD total transport',
  },
  {
    name: '1 Month: Full Morocco',
    icon: Globe,
    stops: 'Tangier (2) > Chefchaouen (3) > Fes (3) > Meknes (2) > Rabat (2) > Casablanca (1) > Essaouira (3) > Agadir/Taghazout (3) > Marrakech (3) > Merzouga (2) > Todra Gorge (2) > Dades Valley (2) > Marrakech (2)',
    days: '30 days',
    description: 'The full experience. Cover every major region: the Rif Mountains, imperial cities, Atlantic coast, surf towns, Sahara desert, and dramatic gorges. A month lets you take rest days, do multi-day Atlas treks, surf in Taghazout, and still have flex time for unexpected discoveries.',
    budget: 'From 6,000 MAD total transport',
  },
] as const;

/* ================================================================
   DATA: CHEAP EATS
   ================================================================ */

const cheapEats = [
  { item: 'Harira (lentil & tomato soup)', price: 'From 5 MAD', where: 'Street stalls everywhere. The national soup, especially common during Ramadan.' },
  { item: 'Msemen (stuffed flatbread)', price: 'From 3 MAD', where: 'Cart vendors on every corner. Filled with cheese, honey, or kefta (minced meat).' },
  { item: 'Bocadillo (baguette sandwich)', price: 'From 15 MAD', where: 'Hole-in-the-wall shops. Tuna, egg, or kefta with harissa and olives.' },
  { item: 'Tagine (chicken or vegetable)', price: 'From 30 MAD', where: 'Local restaurants away from tourist squares. Ask locals for their spot.' },
  { item: 'Brochettes (kebab skewers)', price: 'From 5 MAD per skewer', where: 'Grill stalls near bus stations and markets. Lamb, chicken, or kefta.' },
  { item: 'Fresh orange juice', price: 'From 5 MAD', where: 'Juice stalls in every city. Marrakech has the most famous row on Jemaa el-Fna.' },
  { item: 'Mint tea', price: 'From 8 MAD', where: 'Cafes everywhere. Sit with locals and people-watch. Free refills at most spots.' },
  { item: 'Avocado smoothie', price: 'From 15 MAD', where: 'Juice shops in Marrakech, Chefchaouen, and Essaouira. Blended with milk and almonds.' },
] as const;

/* ================================================================
   DATA: TRANSPORT OPTIONS
   ================================================================ */

const transportOptions = [
  { mode: 'CTM Bus', icon: Bus, price: 'From 60 MAD intercity', description: 'Government-run coaches with AC, assigned seats, and luggage compartments. Reliable schedules. Book online at ctm.ma or at the station.' },
  { mode: 'Supratours Bus', icon: Bus, price: 'From 70 MAD intercity', description: 'Run by the railway company. Connects to ONCF train stations. Similar comfort to CTM. Covers routes CTM misses, like Marrakech to Essaouira.' },
  { mode: 'ONCF Train', icon: Route, price: 'From 50 MAD second class', description: 'Covers Marrakech-Casablanca-Rabat-Meknes-Fes corridor. Second class is comfortable enough. Al Boraq high-speed links Tangier to Casablanca in 2h10m.' },
  { mode: 'Grand Taxi (Shared)', icon: MapPin, price: 'From 20 MAD per seat', description: 'Shared Mercedes sedans that run fixed routes between towns. Wait at the taxi rank until six passengers fill the car. Cheapest intercity option. Cramped but fast.' },
  { mode: 'Petit Taxi', icon: MapPin, price: 'From 10 MAD in-city', description: 'Small colored taxis for in-city trips. Insist on the meter. Maximum three passengers. Cannot leave the city limits.' },
] as const;

/* ================================================================
   DATA: PACKING LIST
   ================================================================ */

const packingEssentials = [
  { item: '40-50L backpack (no bigger)', reason: 'You will carry it through medina alleys. Anything over 50L becomes a liability on buses and in tight spaces.' },
  { item: 'Padlock for hostel lockers', reason: 'Most hostels provide lockers but not locks. A small combination lock saves repeat purchases.' },
  { item: 'Lightweight scarf or sarong', reason: 'Covers shoulders at mosques, blocks sand in the desert, doubles as a towel or blanket on overnight buses.' },
  { item: 'Headlamp', reason: 'Medina alleys have zero street lighting. Essential for desert camps and early morning bus departures.' },
  { item: 'Reusable water bottle with filter', reason: 'Tap water is not drinkable. A LifeStraw or Grayl bottle saves money and plastic over weeks.' },
  { item: 'Flip-flops for showers', reason: 'Hostel bathrooms are shared. Also needed for hammams.' },
  { item: 'Dry bag or rain cover', reason: 'Sudden rain in the Rif, medina splashes, and desert sand all threaten your gear.' },
  { item: 'Toilet paper or tissues', reason: 'Public toilets rarely supply it. Carry a small roll at all times.' },
  { item: 'Power bank (10,000+ mAh)', reason: 'Not every hostel has outlets by the bed. Long bus rides drain your phone navigation.' },
  { item: 'Quick-dry towel', reason: 'Many hostels charge for towel rental. A microfiber towel packs small and dries in an hour.' },
] as const;

/* ================================================================
   DATA: SCAMS TO AVOID
   ================================================================ */

const scamsToAvoid = [
  { scam: 'The Fake Guide', description: 'Someone offers to "help" you find your riad, walks you through the medina, then demands from 100-300 MAD. Use offline maps (Maps.me or Google Maps) and decline firmly.', risk: 'High' },
  { scam: 'Henna Hand Grab', description: 'A woman grabs your hand and applies henna before you agree, then demands from 200 MAD. If someone reaches for your hand, pull it back immediately and keep walking.', risk: 'High' },
  { scam: 'Taxi Meter Refusal', description: 'Petit taxi drivers claim the meter is broken and quote inflated prices. Walk away and flag another taxi. There are always more taxis.', risk: 'Medium' },
  { scam: 'The Leather Shop Tour', description: 'Someone leads you to a tannery "viewpoint" (which is free from many rooftops), hands you mint to hold under your nose, then pressures you into a leather shop. The guide collects commission on anything you buy.', risk: 'Medium' },
  { scam: 'Airport Money Exchange', description: 'Airport kiosks take a 10-15% margin on currency exchange. Withdraw from ATMs inside the airport instead, or change a minimal amount and find a better rate in the city.', risk: 'Low' },
  { scam: 'The Friendship Bracelet', description: 'Someone ties a bracelet on your wrist and demands payment. Keep your hands in your pockets when strangers approach with string or bracelets in tourist areas.', risk: 'Medium' },
] as const;

/* ================================================================
   DATA: WATER & HYGIENE TIPS
   ================================================================ */

const hygieneItems = [
  { tip: 'Drink bottled or filtered water only', detail: 'Tap water is chlorinated in cities but can cause stomach issues for travelers. Buy sealed 1.5L bottles from 5 MAD at any hanout (corner shop). A Grayl or LifeStraw filter bottle pays for itself in two weeks.' },
  { tip: 'Avoid ice in drinks', detail: 'Tourist restaurants in Marrakech and Fes typically use purified ice, but street stalls and local cafes may not. Stick to hot tea or bottled drinks from stalls.' },
  { tip: 'Eat where locals eat', detail: 'High customer turnover means fresh food. If a street stall has a line of Moroccans, the food is safe. Empty tourist restaurants are a bigger risk than busy street carts.' },
  { tip: 'Carry hand sanitizer', detail: 'Not every restaurant has a sink. Moroccan meals often involve eating bread with your hands. Sanitize before eating and after using public transport.' },
  { tip: 'Pack basic medication', detail: 'Bring Imodium, rehydration salts, and activated charcoal. Pharmacies (marked with a green cross) are on every block and sell medication cheaply without prescriptions, but having supplies saves time during an episode.' },
  { tip: 'Use squat toilets correctly', detail: 'Many public toilets are squat-style. Carry your own tissue. Some charge from 1-2 MAD for entry. Cafes and restaurants rarely mind if you use their toilet after buying a tea.' },
] as const;

/* ================================================================
   DATA: COMMON BACKPACKER MISTAKES
   ================================================================ */

const commonMistakes = [
  { mistake: 'Following strangers into the medina', fix: 'Download offline maps (Maps.me or Google Maps). If someone insists on guiding you, agree on a price upfront or firmly decline.' },
  { mistake: 'Not agreeing on prices before service', fix: 'Petit taxis should use the meter. Grand taxi prices are fixed -- ask other passengers. Agree on tour and guide fees before starting.' },
  { mistake: 'Changing money at the airport', fix: 'Airport kiosks take a 10-15% margin. Withdraw from ATMs instead, or change a small amount and find a better bureau in the medina.' },
  { mistake: 'Overpacking', fix: 'Morocco has cheap clothing and toiletries in every medina. Pack light and buy what you need on the ground for a fraction of Western prices.' },
  { mistake: 'Only visiting Marrakech and Fes', fix: 'Smaller cities like Meknes, Essaouira, Chefchaouen, and Rabat offer more relaxed atmospheres and fewer scams.' },
  { mistake: 'Eating on Jemaa el-Fna exclusively', fix: 'The famous food stalls charge double. Walk five minutes into the medina for better food at half the price.' },
  { mistake: 'Skipping the Sahara due to cost', fix: 'Budget desert tours from Marrakech start from 600 MAD for two days. From Merzouga, a basic overnight camel trek costs from 250 MAD.' },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoBackpackingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-backpacking.webp)' }}
        />
        <div className="hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <nav className="flex items-center justify-center gap-1 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Backpacking Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Backpacking Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Morocco runs on from 185 MAD per day if you know where to sleep, eat, and ride. Hostel dorms
            from 60 MAD, tagines from 30 MAD, and CTM buses connecting every major city. This guide covers
            every detail for budget overland travel through North Africa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <DollarSign className="w-4 h-4 inline mr-1" /> From 185 MAD/day
            </span>
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <Calendar className="w-4 h-4 inline mr-1" /> 2-4 week routes
            </span>
            <span className="bg-white/20 backdrop-blur px-4 py-2 rounded-full text-white text-sm">
              <BedDouble className="w-4 h-4 inline mr-1" /> Hostels from 60 MAD
            </span>
          </div>
        </div>
      </section>

      {/* ── Intro Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Backpackers Keep Coming Back to Morocco
          </h2>
          <div className="prose prose-lg text-[var(--text-secondary)] space-y-4">
            <p>
              Morocco sits eight miles from Europe across the Strait of Gibraltar, yet feels like a different
              continent. The medina of Fes alone has over 9,000 streets. The Sahara starts four hours south
              of Marrakech. Atlantic surf breaks line the coast from Taghazout to Dakhla. And the entire
              country operates on prices that make Southeast Asia look expensive.
            </p>
            <p>
              A hostel dorm costs from 60 MAD. A full tagine with bread costs from 30 MAD. A CTM bus from
              Marrakech to Fes runs from 180 MAD for seven hours of air-conditioned travel. Backpackers who
              stay a month regularly spend less than they would on rent back home. The infrastructure is solid,
              the food is remarkable, and the landscapes shift from snow-capped mountains to orange sand dunes
              within a single day of travel.
            </p>
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
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            What a day actually costs on the ground, split between shoestring and comfortable backpacker budgets.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal pricing can change during peak months.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Shoestring</div>
                <div className="p-3 px-4">Comfortable</div>
                <div className="p-3 px-4">Notes</div>
              </div>
              {budgetBreakdown.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={item.category}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'} ${item.category === 'Daily Total' ? 'font-bold border-t-2 border-[var(--color-accent)]' : ''}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <ItemIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 hidden sm:block" />
                      {item.category}
                    </div>
                    <div className="p-3 px-4 text-[var(--color-accent)]">{item.budget}</div>
                    <div className="p-3 px-4 text-[var(--color-gold)]">{item.mid}</div>
                    <div className="p-3 px-4 text-[var(--text-muted)] hidden sm:block">{item.notes}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodation Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BedDouble className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Accommodation: Hostels, Bivouacs &amp; Camping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four ways to sleep cheap across Morocco, from social hostel dorms to free wild camping.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationTypes.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <p className="text-sm text-[var(--color-accent)] font-semibold">{acc.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{acc.description}</p>
                  <div className="flex items-start gap-2 text-xs text-[var(--color-gold)]">
                    <Lightbulb className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{acc.tip}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Hostels by City ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Top Hostels by City
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tested picks with real ratings. Prices are for dorm beds and seasonal pricing can change.
          </p>

          <div className="space-y-8">
            {hostelsByCity.map((city) => (
              <div key={city.city} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-accent)] px-6 py-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5" /> {city.city}
                  </h3>
                </div>
                <div className="divide-y divide-[var(--border)]">
                  {city.hostels.map((hostel) => (
                    <div key={hostel.name} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{hostel.name}</span>
                          <span className="text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] px-2 py-0.5 rounded-full font-semibold">{hostel.rating}</span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">{hostel.vibe}</p>
                      </div>
                      <span className="text-sm text-[var(--color-accent)] font-semibold whitespace-nowrap">{hostel.dorm}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Backpacker Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Backpacker Itineraries: 2 Weeks to 1 Month
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three tested routes covering different timeframes and budgets. Numbers in parentheses are nights per stop.
          </p>

          <div className="space-y-6">
            {itineraries.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <RouteIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {route.name}
                        </h3>
                        <div className="flex gap-3 text-xs">
                          <span className="text-[var(--color-accent)] font-semibold flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {route.days}
                          </span>
                          <span className="text-[var(--color-gold)] font-semibold flex items-center gap-1">
                            <DollarSign className="w-3 h-3" /> {route.budget}
                          </span>
                        </div>
                      </div>
                      <p className="text-xs font-mono text-[var(--color-accent)] bg-[var(--surface-muted)] rounded px-3 py-2 mb-3 overflow-x-auto">
                        {route.stops}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">{route.description}</p>
                    </div>
                  </div>
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
            Cheap Eats: What Backpackers Actually Eat
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Street food and local restaurants keep daily food costs under 80 MAD if you eat where Moroccans eat.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {cheapEats.map((food) => (
              <div key={food.item} className="card-moroccan p-4 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{food.item}</span>
                    <span className="text-xs text-[var(--color-accent)] font-semibold">{food.price}</span>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)]">{food.where}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Public Transport ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around: CTM, Supratours, Trains &amp; Grand Taxis
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has a solid public transport network. You never need to rent a car.
          </p>

          <div className="space-y-4 max-w-4xl mx-auto">
            {transportOptions.map((t) => {
              const TIcon = t.icon;
              return (
                <div key={t.mode} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                    <TIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{t.mode}</h3>
                      <span className="text-xs text-[var(--color-accent)] font-semibold">{t.price}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{t.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-8 card-moroccan p-5">
            <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-[var(--color-gold)]" />
              Key Routes &amp; Sample Prices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[var(--text-secondary)]">
              <p><span className="font-medium text-[var(--text-primary)]">Marrakech to Essaouira:</span> CTM from 80 MAD (3h)</p>
              <p><span className="font-medium text-[var(--text-primary)]">Marrakech to Fes:</span> CTM from 180 MAD (7h)</p>
              <p><span className="font-medium text-[var(--text-primary)]">Fes to Chefchaouen:</span> CTM from 75 MAD (4h)</p>
              <p><span className="font-medium text-[var(--text-primary)]">Marrakech to Merzouga:</span> Supratours from 200 MAD (10h)</p>
              <p><span className="font-medium text-[var(--text-primary)]">Casablanca to Rabat:</span> Train from 45 MAD (1h)</p>
              <p><span className="font-medium text-[var(--text-primary)]">Tangier to Casablanca:</span> Al Boraq from 150 MAD (2h10m)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solo Backpacking & Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Solo Backpacking &amp; Safety
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical safety knowledge for independent travelers, including advice for solo female backpackers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'General Safety', icon: ShieldCheck, text: 'Morocco has low violent crime. Your main risks are petty theft in crowded medinas and tourist-targeting scams. Use a money belt, keep phone in a zipped pocket, and stay aware in busy souks.' },
              { title: 'Solo Female Travel', icon: Heart, text: 'Thousands of women backpack Morocco solo each year. Dress modestly (shoulders and knees covered), be firm with unwanted attention, and stay in well-reviewed hostels. Female-only dorms are available at most hostels in Marrakech and Fes.' },
              { title: 'Night Safety', icon: AlertTriangle, text: 'Medina alleys empty after 10 PM. Stick to main routes at night. The ville nouvelle (modern district) in each city is better lit and more populated after dark. Take petit taxis rather than walking alone late.' },
              { title: 'Emergency Numbers', icon: Info, text: 'Police: 19. Gendarmerie (rural): 177. Ambulance: 15. Tourist Police offices exist in Marrakech (Jemaa el-Fna), Fes (Bab Boujloud), and Casablanca. They handle tourist complaints and speak French.' },
              { title: 'Valuables', icon: Wallet, text: 'Leave your passport locked at the hostel. Carry a photocopy. Split cash between your daypack and a hidden pouch. Only take out what you need for the day.' },
              { title: 'Health Insurance', icon: CheckCircle, text: 'Travel insurance is essential. SafetyWing and World Nomads cover Morocco. Pharmacies handle most minor issues cheaply. Clinics in major cities are adequate for non-emergency care.' },
            ].map((item) => {
              const SIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <SIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.title}</h3>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Backpacker Community ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Backpacker Community &amp; Meeting Other Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has a strong backpacker scene. Finding travel partners is straightforward if you stay in the right places.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Hostel Common Areas', text: 'Riads converted into hostels have central courtyards where travelers naturally converge. Rooftop terraces at sunset are where most travel friendships start. Wicked Hostel (Marrakech) and Hostel Aline (Chefchaouen) are known for their social atmospheres.' },
              { title: 'Communal Dinners', text: 'Many hostels organize group dinners from 40 MAD per person. Cooking classes in Fes and Marrakech attract backpackers looking for shared experiences. These are the easiest way to meet people if you arrive solo.' },
              { title: 'Organized Day Trips', text: 'Hostels arrange group trips to Ouzoud Falls, the Sahara, Akchour Waterfalls, and the Atlas Mountains. Group tours split costs and pair you with other backpackers heading the same direction. Sahara desert trips from hostels start from 250 MAD.' },
              { title: 'Surf & Adventure Meetups', text: 'Taghazout and Essaouira have surf hostels where travelers stay for weeks. The surf community is tight-knit. Climbing meetups happen near Todra Gorge. Trekking groups form organically at Imlil for Toubkal ascents.' },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scams to Avoid ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Scams to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These are not unique to Morocco, but knowing them in advance saves money and frustration.
          </p>

          <div className="space-y-4">
            {scamsToAvoid.map((item) => (
              <div key={item.scam} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className={`w-4 h-4 mt-0.5 shrink-0 ${item.risk === 'High' ? 'text-red-500' : item.risk === 'Medium' ? 'text-amber-500' : 'text-yellow-400'}`} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.scam}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.risk === 'High' ? 'bg-red-100 text-red-700' : item.risk === 'Medium' ? 'bg-amber-100 text-amber-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {item.risk} risk
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Water & Hygiene ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water &amp; Hygiene Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Stomach issues are the most common backpacker complaint. A few precautions make a big difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hygieneItems.map((item) => (
              <div key={item.tip} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.tip}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Time to Backpack ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Backpack Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Season choice affects your comfort, budget, and crowd levels significantly.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Spring (March - May) — Best Overall
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Warm days (22-28C), cool nights, wildflowers in the Atlas. Almond trees bloom in February-March.
                    Hostels fill up in April but remain affordable. The Sahara is comfortable during the day. Ideal
                    for trekking, city exploration, and coastal stops. Book hostels in Chefchaouen and Marrakech
                    a few days ahead during Easter week.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Autumn (September - November) — Best Value
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Similar temperatures to spring but fewer European tourists. September is still warm. October
                    and November are perfect for desert trips as the extreme heat fades. Hostel prices drop slightly.
                    Dates ripen in the oases. The surf season starts on the Atlantic coast in late October.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Summer (June - August) — Challenging Inland
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Marrakech and Fes exceed 40C regularly. The Sahara is dangerously hot. Stick to coastal cities
                    (Essaouira, Asilah, Agadir) and the Rif Mountains (Chefchaouen) where temperatures stay around
                    25-30C. Hostel prices drop in inland cities. The coast gets busy with Moroccan holidaymakers
                    in August.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Winter (December - February) — Budget Season
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Coastal cities like Essaouira and Agadir remain mild (16-20C). Marrakech is pleasant during the
                    day but cold at night. The Atlas Mountains get snow, closing some passes and making trekking
                    harder. Hostel prices hit their annual low. Great for budget-conscious travelers who skip
                    the mountains and focus on cities, coast, and southern desert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Backpacker Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Ten essentials that experienced Morocco backpackers carry. Everything else you can buy cheaply in any medina.
          </p>

          <div className="space-y-3">
            {packingEssentials.map((item) => (
              <div key={item.item} className="card-moroccan p-4 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{item.item}</span>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{item.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Mistakes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Backpacker Mistakes (and Fixes)
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions from backpackers planning a Morocco trip.
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
                title: 'Budget Travel Guide',
                description: 'Detailed cost breakdowns, money-saving strategies, and budget planning for every region of Morocco.',
                href: '/morocco-budget-travel',
                icon: DollarSign,
              },
              {
                title: 'Safety Guide',
                description: 'Scam awareness, solo travel safety, emergency contacts, and neighborhood safety guides by city.',
                href: '/morocco-safety-tips',
                icon: ShieldCheck,
              },
              {
                title: 'Food Guide',
                description: 'Street food, regional dishes, restaurant etiquette, and the best cheap eats city by city across Morocco.',
                href: '/morocco-food-guide',
                icon: Utensils,
              },
              {
                title: 'Transport Guide',
                description: 'CTM buses, Supratours, ONCF trains, grands taxis, and domestic flights. Routes, prices, and booking.',
                href: '/public-transport',
                icon: Bus,
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

      {/* ── More Backpacking Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Backpacking Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-hostel-guide', title: 'Hostel Guide', desc: 'In-depth hostel reviews for every major city with dorm prices, photos, and booking tips.' },
              { href: '/morocco-camping-guide', title: 'Camping Guide', desc: 'Wild camping spots, organized campgrounds, desert bivouacs, and gear recommendations.' },
              { href: '/morocco-packing-list', title: 'Packing List', desc: 'Complete packing list by season with weight recommendations and gear reviews.' },
              { href: '/morocco-scams-safety', title: 'Scams & Safety', desc: 'Extended guide to every known tourist scam in Morocco with prevention strategies.' },
              { href: '/solo-travel', title: 'Solo Travel Guide', desc: 'Tips for solo travelers including female solo travel, meeting people, and staying safe.' },
              { href: '/morocco-budget-guide', title: 'Budget Planning', desc: 'Month-by-month cost analysis, cheapest cities, and strategies to extend your trip.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
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

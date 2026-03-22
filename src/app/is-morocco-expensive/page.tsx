import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Bed,
  UtensilsCrossed,
  Ticket,
  ShoppingBag,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Star,
  MapPin,
  Clock,
  AlertTriangle,
  Heart,
  Globe,
  Sparkles,
  Compass,
  Users,
  Landmark,
  Coffee,
  Droplets,
  Phone,
  Banknote,
  CircleDollarSign,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Is Morocco Expensive? Real Costs Breakdown 2026 | Budget Guide',
  description:
    'Is Morocco expensive to visit in 2026? Complete cost breakdown: accommodation from 80 MAD, food from 15 MAD, transport, activities. Budget $30-50/day, mid-range $80-150/day, luxury $200+/day. City comparisons and 10 money-saving tips.',
  keywords: [
    'is morocco expensive',
    'morocco cost of travel',
    'how much does morocco cost',
    'morocco prices 2026',
    'morocco budget',
    'morocco travel cost',
    'morocco daily budget',
    'how expensive is morocco',
    'morocco trip cost',
    'morocco cheap travel',
    'morocco backpacking budget',
    'morocco food prices',
    'morocco hotel prices',
    'morocco accommodation costs',
    'morocco vs europe cost',
  ],
  openGraph: {
    title: 'Is Morocco Expensive? Real Costs Breakdown 2026',
    description:
      'Complete Morocco cost guide: accommodation, food, transport, activities by budget level. City comparisons and money-saving tips. Budget travelers: $30-50/day.',
    url: `${BASE_URL}/is-morocco-expensive`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Colorful Morocco medina market with spices, textiles, and ceramics on display',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Is Morocco Expensive? 2026 Cost Breakdown',
    description:
      'Real prices: hostel from 80 MAD, street food from 15 MAD, tagine from 40 MAD. Budget $30-50/day. Full breakdown inside.',
    images: [`${BASE_URL}/images/hero-morocco-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/is-morocco-expensive` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/is-morocco-expensive`,
  name: 'Is Morocco Expensive? Real Costs Breakdown 2026',
  description:
    'Complete guide to Morocco travel costs in 2026. Detailed price breakdowns for accommodation, food, transport, and activities across budget, mid-range, and luxury levels.',
  url: `${BASE_URL}/is-morocco-expensive`,
  image: `${BASE_URL}/images/hero-morocco-medina.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/is-morocco-expensive`,
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
      { '@type': 'ListItem', position: 2, name: 'Is Morocco Expensive?', item: `${BASE_URL}/is-morocco-expensive` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Morocco expensive to visit?', acceptedAnswer: { '@type': 'Answer', text: 'No, Morocco is one of the most affordable travel destinations accessible from Europe. Budget travelers can spend $30-50 per day, mid-range travelers $80-150 per day, and luxury travelers $200+ per day. It is significantly cheaper than Western Europe and comparable to Southeast Asian prices for many categories.' } },
    { '@type': 'Question', name: 'How much does a trip to Morocco cost per day?', acceptedAnswer: { '@type': 'Answer', text: 'A budget trip costs $30-50/day (300-500 MAD) including hostel dorm, street food, and local transport. A mid-range trip costs $80-150/day (800-1,500 MAD) with a riad, restaurant meals, and guided tours. A luxury trip costs $200+/day (2,000+ MAD) with 5-star hotels, fine dining, and private guides.' } },
    { '@type': 'Question', name: 'Is Morocco cheaper than Europe?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, significantly. A meal in Morocco costs 30-60% less than the same quality meal in Spain, France, or Italy. Accommodation is 40-60% cheaper. A luxury riad in Marrakech costs what a mid-range hotel costs in Paris. Transport is also cheaper: a 3-hour bus ride costs from 80 MAD (about $8).' } },
    { '@type': 'Question', name: 'What are the hidden costs in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Common hidden costs include: tipping (10-15% in restaurants, 20-50 MAD for guides), hammam extras (scrub 50-100 MAD, massage 100-200 MAD), tourist tax at hotels (25-35 MAD per night), SIM card (30-50 MAD), bottled water (5-10 MAD per day), and souk shopping where prices are not fixed.' } },
    { '@type': 'Question', name: 'Is Marrakech more expensive than Fes?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, Marrakech is the most expensive city in Morocco for tourists. Accommodation and dining are 20-40% more expensive than Fes. Riads in Marrakech start from 500 MAD while equivalent riads in Fes start from 350 MAD. Street food prices are similar across cities, but restaurant prices vary significantly.' } },
    { '@type': 'Question', name: 'How much should I budget for a week in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'For a 7-day Morocco trip: budget travelers should plan $250-350 (2,500-3,500 MAD), mid-range travelers $600-1,000 (6,000-10,000 MAD), and luxury travelers $1,500+ (15,000+ MAD). This covers accommodation, food, transport, and activities but not international flights.' } },
  ],
};

/* ===============================================================
   DATA: ACCOMMODATION PRICES
   =============================================================== */

const accommodationPrices = [
  {
    type: 'Hostel Dorm Bed',
    icon: Users,
    budget: 'From 80-150 MAD',
    budgetUSD: '$8-15',
    description: 'Dormitory beds in well-rated hostels, typically 4-8 beds per room. Most include breakfast and free WiFi. Available in all major cities. Quality hostels in Marrakech start slightly higher at from 100 MAD.',
  },
  {
    type: 'Budget Riad/Guesthouse',
    icon: Bed,
    budget: 'From 200-400 MAD',
    budgetUSD: '$20-40',
    description: 'Private rooms in smaller riads or guesthouses. Includes breakfast, often with rooftop terrace access. Beautiful traditional architecture with zellige tiles and courtyard. Best value in Fes and smaller cities.',
  },
  {
    type: 'Mid-Range Riad',
    icon: Bed,
    budget: 'From 400-800 MAD',
    budgetUSD: '$40-80',
    description: 'Charming riads with full breakfast, air conditioning, plunge pool or courtyard fountain. Includes personalized service, restaurant recommendations, and booking assistance. The sweet spot for most travelers.',
  },
  {
    type: 'Luxury Riad/Boutique Hotel',
    icon: Star,
    budget: 'From 1,200-3,000 MAD',
    budgetUSD: '$120-300',
    description: 'Beautifully restored historic riads or boutique hotels with pools, hammams, fine dining, and premium furnishings. Properties like Riad Fes or Riad Kniza in Marrakech. Exceptional value compared to European luxury hotels.',
  },
  {
    type: 'Five-Star Resort/Palace',
    icon: Sparkles,
    budget: 'From 3,000-10,000+ MAD',
    budgetUSD: '$300-1,000+',
    description: 'World-class properties like La Mamounia, Royal Mansour, or Amanjena in Marrakech. Full-service resorts with spas, multiple restaurants, gardens, and butler service. Still 30-50% cheaper than equivalent properties in Europe.',
  },
] as const;

/* ===============================================================
   DATA: FOOD PRICES
   =============================================================== */

const foodPrices = [
  {
    category: 'Street Food & Snacks',
    icon: UtensilsCrossed,
    items: [
      { item: 'Fresh orange juice', price: 'From 5-10 MAD' },
      { item: 'Msemen (Moroccan pancake)', price: 'From 3-5 MAD' },
      { item: 'Harira soup (bowl)', price: 'From 5-10 MAD' },
      { item: 'Grilled meat sandwich', price: 'From 15-25 MAD' },
      { item: 'Snail soup', price: 'From 5-10 MAD' },
      { item: 'Moroccan pastries (piece)', price: 'From 3-8 MAD' },
      { item: 'Street food meal', price: 'From 20-40 MAD' },
    ],
  },
  {
    category: 'Casual Restaurants',
    icon: Coffee,
    items: [
      { item: 'Tagine (chicken/lamb)', price: 'From 40-80 MAD' },
      { item: 'Couscous Friday special', price: 'From 40-70 MAD' },
      { item: 'Moroccan salad plate', price: 'From 25-40 MAD' },
      { item: 'Pastilla (savoury pie)', price: 'From 40-70 MAD' },
      { item: 'Grilled fish/sardines', price: 'From 40-80 MAD' },
      { item: 'Mint tea', price: 'From 10-20 MAD' },
      { item: 'Soft drink/water', price: 'From 5-15 MAD' },
    ],
  },
  {
    category: 'Mid-Range Restaurants',
    icon: Landmark,
    items: [
      { item: 'Three-course meal', price: 'From 100-200 MAD' },
      { item: 'Riad restaurant dinner', price: 'From 150-300 MAD' },
      { item: 'Rooftop restaurant meal', price: 'From 100-250 MAD' },
      { item: 'Seafood in Essaouira', price: 'From 80-150 MAD' },
      { item: 'Wine (bottle, restaurant)', price: 'From 150-300 MAD' },
      { item: 'Beer (bottle, restaurant)', price: 'From 30-60 MAD' },
      { item: 'Coffee (cafe)', price: 'From 12-25 MAD' },
    ],
  },
  {
    category: 'Fine Dining',
    icon: Star,
    items: [
      { item: 'Multi-course tasting menu', price: 'From 500-1,200 MAD' },
      { item: 'Fine-dining riad dinner', price: 'From 400-800 MAD' },
      { item: 'La Mamounia restaurant', price: 'From 600-1,500 MAD' },
      { item: 'Cocktail bar drinks', price: 'From 80-150 MAD' },
      { item: 'Afternoon tea at luxury hotel', price: 'From 150-300 MAD' },
      { item: 'Private dining experience', price: 'From 800-2,000 MAD' },
      { item: 'Wine pairing dinner', price: 'From 600-1,200 MAD' },
    ],
  },
] as const;

/* ===============================================================
   DATA: TRANSPORT PRICES
   =============================================================== */

const transportPrices = [
  { mode: 'Petit taxi (within city)', price: 'From 10-30 MAD', notes: 'Metered in most cities. Insist on the meter. Short rides should not exceed 20 MAD.' },
  { mode: 'Grand taxi (intercity, per seat)', price: 'From 30-100 MAD', notes: 'Shared taxis between cities. Wait until all 6 seats are filled or pay for empty seats.' },
  { mode: 'CTM bus (intercity)', price: 'From 80-200 MAD', notes: 'Air-conditioned, reserved seats, luggage storage. Marrakech-Fes from 190 MAD.' },
  { mode: 'Supratours bus', price: 'From 70-180 MAD', notes: 'ONCF rail company buses. Connects to train stations. Marrakech-Essaouira from 80 MAD.' },
  { mode: 'Train (ONCF)', price: 'From 80-250 MAD', notes: 'First class recommended. Casablanca-Marrakech from 149 MAD (1st class). Comfortable and reliable.' },
  { mode: 'Al Boraq high-speed train', price: 'From 149-300 MAD', notes: 'Casablanca-Tangier in 2 hours. Book online for best prices. Business class from 300 MAD.' },
  { mode: 'Domestic flight', price: 'From 400-1,200 MAD', notes: 'Royal Air Maroc, Air Arabia. Marrakech-Fes from 400 MAD one way. Book 2-4 weeks ahead.' },
  { mode: 'Car rental', price: 'From 250-600 MAD/day', notes: 'Manual transmission cheaper. International license recommended. Fuel from 12 MAD/liter.' },
] as const;

/* ===============================================================
   DATA: ACTIVITY PRICES
   =============================================================== */

const activityPrices = [
  { activity: 'Bahia Palace, Marrakech', price: 'From 70 MAD' },
  { activity: 'Majorelle Garden + Berber Museum', price: 'From 70 MAD' },
  { activity: 'Hassan II Mosque guided tour', price: 'From 130 MAD' },
  { activity: 'Guided medina tour (half day)', price: 'From 500 MAD' },
  { activity: 'Cooking class (4-5 hours)', price: 'From 350 MAD' },
  { activity: 'Traditional hammam (local)', price: 'From 15-30 MAD' },
  { activity: 'Tourist hammam + scrub', price: 'From 200-500 MAD' },
  { activity: 'Sahara Desert 3-day tour', price: 'From 1,500 MAD' },
  { activity: 'Hot air balloon (Marrakech)', price: 'From 1,800 MAD' },
  { activity: 'Camel ride (1 hour)', price: 'From 200 MAD' },
  { activity: 'Surfing lesson (2 hours)', price: 'From 300 MAD' },
  { activity: 'Atlas Mountains day trip', price: 'From 300 MAD' },
] as const;

/* ===============================================================
   DATA: CITY COST COMPARISON
   =============================================================== */

const cityCosts = [
  {
    city: 'Marrakech',
    icon: Star,
    level: 'Most Expensive',
    color: '#dc2626',
    budget: 'From 350-500 MAD/day',
    midRange: 'From 900-1,500 MAD/day',
    notes: 'Highest tourist prices. Riad accommodation costs 20-40% more than other cities. Restaurant prices inflated in tourist areas. Medina shopping requires strong bargaining skills.',
  },
  {
    city: 'Fes',
    icon: Compass,
    level: 'Moderate',
    color: '#C4960C',
    budget: 'From 250-400 MAD/day',
    midRange: 'From 700-1,200 MAD/day',
    notes: 'Noticeably cheaper than Marrakech for similar quality. Riads offer excellent value. Fewer tourist traps. Food prices are 20-30% lower. The medina feels more authentic.',
  },
  {
    city: 'Chefchaouen',
    icon: MapPin,
    level: 'Affordable',
    color: '#16a34a',
    budget: 'From 200-350 MAD/day',
    midRange: 'From 600-1,000 MAD/day',
    notes: 'Small town with lower prices overall. Budget guesthouses and cheap restaurants. Limited luxury options. Great value for backpackers and budget travelers.',
  },
  {
    city: 'Essaouira',
    icon: Globe,
    level: 'Moderate',
    color: '#C4960C',
    budget: 'From 250-400 MAD/day',
    midRange: 'From 700-1,200 MAD/day',
    notes: 'Beach town pricing. Seafood at the port is incredibly cheap (from 30 MAD). Accommodation ranges widely. Fewer upscale restaurants than Marrakech.',
  },
  {
    city: 'Casablanca',
    icon: Landmark,
    level: 'Moderate-High',
    color: '#ea580c',
    budget: 'From 300-450 MAD/day',
    midRange: 'From 800-1,400 MAD/day',
    notes: 'Business city with modern prices. Hotels can be expensive near the city center. Food is reasonable outside tourist spots. Not a budget destination.',
  },
  {
    city: 'Meknes / Smaller Cities',
    icon: Heart,
    level: 'Most Affordable',
    color: '#16a34a',
    budget: 'From 150-300 MAD/day',
    midRange: 'From 500-900 MAD/day',
    notes: 'The cheapest places to visit in Morocco. Meknes, Tetouan, and smaller towns offer local prices. Excellent value for budget travelers willing to go off the beaten path.',
  },
] as const;

/* ===============================================================
   DATA: HIDDEN COSTS
   =============================================================== */

const hiddenCosts = [
  { icon: Banknote, cost: 'Tipping', amount: '10-15% at restaurants, from 20-50 MAD for guides, 5-10 MAD for bag carriers', description: 'Tipping is expected and an important part of service workers\' income. Budget from 50-100 MAD per day for tips.' },
  { icon: Droplets, cost: 'Hammam Extras', amount: 'Scrub from 50-100 MAD, massage from 100-200 MAD', description: 'The basic hammam entry is cheap, but most tourists add a scrub and massage, doubling the cost.' },
  { icon: Bed, cost: 'Tourist Tax', amount: 'From 25-35 MAD per night', description: 'A nightly tourism tax charged at hotels and riads. Often not included in online booking prices.' },
  { icon: Phone, cost: 'SIM Card & Data', amount: 'From 30-50 MAD for SIM + data', description: 'Maroc Telecom, Orange, or Inwi. From 30 MAD for a SIM with 5-10 GB data. Buy at the airport or any tabac shop.' },
  { icon: Ticket, cost: 'Museum & Site Tickets', amount: 'From 20-130 MAD each', description: 'Multiple sites per day adds up. Budget from 100-200 MAD per day for entrance fees in Marrakech or Fes.' },
  { icon: ShoppingBag, cost: 'Souk Shopping', amount: 'Varies wildly', description: 'Easy to overspend. Set a shopping budget before entering the souks. Bargaining can cut prices 30-60%.' },
] as const;

/* ===============================================================
   DATA: MONEY-SAVING TIPS
   =============================================================== */

const savingTips = [
  { title: 'Eat Where Locals Eat', tip: 'Skip the tourist restaurants around Jemaa el-Fna and find local spots in the medina side streets. A full meal for from 25-40 MAD vs from 80-150 MAD in tourist spots. Look for places full of Moroccan families.' },
  { title: 'Use Local Hammams', tip: 'Local public hammams cost from 15-30 MAD (bring your own soap, towel, and flip-flops). Tourist hammams charge from 200-500 MAD for the same experience with extras. The local version is more authentic too.' },
  { title: 'Take Buses, Not Private Transfers', tip: 'CTM and Supratours buses are comfortable and a fraction of the cost of private transfers. Marrakech to Fes: from 190 MAD (bus) vs from 2,000 MAD (private car). Book in advance online for the best seats.' },
  { title: 'Bargain Everything in the Souks', tip: 'Start at 30-40% of the quoted price. Be prepared to walk away. Shopkeepers expect negotiation and the initial price is inflated for tourists. Compare prices at multiple stalls for common items.' },
  { title: 'Visit During Shoulder Season', tip: 'March-May and September-November offer the best prices. Accommodation drops 20-40% compared to peak season (Christmas, Easter, summer). Weather is also more comfortable.' },
  { title: 'Stay in Fes Instead of Marrakech', tip: 'Fes offers similar experiences at 20-40% lower prices. Riads, food, and guides are all cheaper. The medina is arguably more authentic and less commercialized. Plan more days in Fes and fewer in Marrakech.' },
  { title: 'Cook at Your Riad', tip: 'Some riads have shared kitchens. Buy fresh produce at local markets: tomatoes from 3 MAD/kg, bread from 1-2 MAD/loaf, olives from 15 MAD/kg. A cooking class (from 350 MAD) also provides a full meal.' },
  { title: 'Book Desert Tours from Marrakech or Fes', tip: 'Book 3-day desert tours locally in Marrakech or Fes from 1,500 MAD per person, not through international agencies charging 5,000+ MAD. Ask at your riad for trusted operators.' },
  { title: 'Use Petit Taxis with Meters', tip: 'Always insist on the meter (compteur). If the driver refuses, find another taxi. Late at night, expect to pay 50% more (legitimate nighttime surcharge). Never accept a price without the meter in cities.' },
  { title: 'Carry Small Bills', tip: 'Break large bills at hotels or shops. Street vendors and taxi drivers often claim to have no change for 200 MAD notes. Keep a supply of 10, 20, and 50 MAD notes for daily transactions.' },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'Morocco Budget Guide', href: '/morocco-budget-guide', description: 'Detailed budget travel strategies' },
  { title: 'How Many Days in Morocco?', href: '/how-many-days-in-morocco', description: 'Plan your ideal trip length' },
  { title: 'Morocco Trip Cost Calculator', href: '/morocco-trip-cost', description: 'Estimate your full trip cost' },
  { title: 'Budget Travel Tips', href: '/budget-travel', description: 'Save money across Morocco' },
  { title: 'Money & Currency Guide', href: '/money', description: 'MAD, ATMs, cards, and tipping' },
  { title: 'Morocco 7-Day Itinerary', href: '/morocco-7-day-itinerary', description: 'Most popular trip with costs' },
  { title: 'First Time in Morocco', href: '/first-time', description: 'Essential tips for beginners' },
  { title: 'Moroccan Food Guide', href: '/cuisine', description: 'Where to eat and what to try' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function IsMoroccoExpensivePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* -- JSON-LD -- */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ============== HERO ============== */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-morocco-medina.webp"
          alt="Colorful Moroccan medina market with vibrant spices, textiles, and ceramics on display"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
            Is Morocco Expensive?
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl opacity-95">
            Real costs breakdown for every budget level in 2026
          </p>
        </div>
      </section>

      {/* ============== BREADCRUMBS ============== */}
      <nav aria-label="Breadcrumb" className="container-morocco py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-1 flex-wrap">
          <li className="flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li className="text-[#A0522D] font-medium">Is Morocco Expensive?</li>
        </ol>
      </nav>

      {/* ============== QUICK ANSWER ============== */}
      <section className="container-morocco py-8">
        <div className="max-w-3xl mx-auto">
          <div className="card-moroccan p-6 md:p-8 border-l-4 border-[#A0522D]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[#A0522D] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-3">
                  The Quick Answer: No, Morocco Is Affordable
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Morocco is one of the most affordable travel destinations easily accessible from Europe and North America. <strong>Budget travelers can comfortably travel on $30-50 (300-500 MAD) per day</strong>, including accommodation, food, and local transport. Mid-range travelers spending $80-150 (800-1,500 MAD) per day enjoy charming riads, restaurant meals, and guided experiences.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Even luxury travel in Morocco offers exceptional value: a stay at a beautifully restored five-star riad in Marrakech costs what a standard hotel room costs in Paris or London. Morocco is <strong>40-60% cheaper than Western Europe</strong> and comparable to popular budget destinations like Southeast Asia and Eastern Europe.
                </p>
              </div>
            </div>
          </div>

          {/* Budget Level Cards */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { level: 'Budget', daily: '$30-50/day', mad: '300-500 MAD', color: '#16a34a', desc: 'Hostel dorm, street food, buses, free attractions' },
              { level: 'Mid-Range', daily: '$80-150/day', mad: '800-1,500 MAD', color: '#C4960C', desc: 'Riad, restaurants, guided tours, cooking classes' },
              { level: 'Luxury', daily: '$200+/day', mad: '2,000+ MAD', color: '#A0522D', desc: '5-star hotels, fine dining, private guides, spa' },
            ].map((item) => (
              <div key={item.level} className="card-moroccan p-5 text-center">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white mb-2" style={{ backgroundColor: item.color }}>
                  {item.level}
                </span>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900">{item.daily}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.mad}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              The Moroccan dirham (MAD) is a semi-controlled currency that has remained relatively stable. As of 2026, 1 USD equals approximately 10 MAD and 1 EUR equals approximately 11 MAD. Prices throughout Morocco are generally listed in dirhams, though some tourist-oriented businesses quote in euros.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The biggest variable in Morocco travel costs is shopping. The souks are designed to separate tourists from their money, and it is very easy to overspend on leather goods, carpets, ceramics, and argan products. Set a shopping budget before you arrive and stick to it. Everything else -- accommodation, food, transport -- is remarkably affordable. Seasonal pricing can change, so the prices below reflect typical 2026 rates.
            </p>
          </div>
        </div>
      </section>

      {/* ============== ACCOMMODATION PRICES ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Accommodation Costs
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Morocco offers exceptional accommodation value, from atmospheric hostels to world-class luxury riads. Seasonal pricing can change.
          </p>

          <div className="space-y-4 max-w-4xl mx-auto">
            {accommodationPrices.map((acc) => {
              const Icon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{acc.type}</h3>
                        <span className="text-sm font-bold text-[#A0522D]">{acc.budget}</span>
                        <span className="text-xs text-gray-400">({acc.budgetUSD})</span>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">{acc.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== FOOD PRICES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Food & Drink Costs
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          From 5 MAD street food to fine dining -- Morocco caters to every budget. Seasonal pricing can change.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {foodPrices.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.category} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C4960C]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{category.category}</h3>
                </div>
                <div className="space-y-2">
                  {category.items.map((item) => (
                    <div key={item.item} className="flex items-center justify-between text-sm py-1 border-b border-gray-50 last:border-0">
                      <span className="text-gray-700">{item.item}</span>
                      <span className="font-semibold text-gray-900 text-right ml-3">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== TRANSPORT PRICES ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Transport Costs
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Getting around Morocco is affordable. Buses and trains offer excellent value. Seasonal pricing can change.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#A0522D] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Transport</th>
                      <th className="px-4 py-3 text-left font-semibold">Price</th>
                      <th className="px-4 py-3 text-left font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {transportPrices.map((row) => (
                      <tr key={row.mode} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.mode}</td>
                        <td className="px-4 py-3 text-[#A0522D] font-semibold whitespace-nowrap">{row.price}</td>
                        <td className="px-4 py-3 text-gray-600">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== ACTIVITY PRICES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Activity & Attraction Costs
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Entrance fees are generally low. Guided experiences and adventure activities are where costs rise. Seasonal pricing can change.
        </p>

        <div className="max-w-3xl mx-auto">
          <div className="card-moroccan p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activityPrices.map((item) => (
                <div key={item.activity} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-gray-700 text-sm flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-[#A0522D] flex-shrink-0" />
                    {item.activity}
                  </span>
                  <span className="font-semibold text-gray-900 text-sm text-right ml-3">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============== CITY COMPARISON ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            City-by-City Cost Comparison
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Prices vary significantly between cities. Marrakech is the most expensive, smaller cities offer the best value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {cityCosts.map((city) => {
              const Icon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{city.city}</h3>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ backgroundColor: city.color }}>
                        {city.level}
                      </span>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 mb-3 text-sm">
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-600">Budget:</span>
                      <span className="font-semibold text-gray-900">{city.budget}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Mid-Range:</span>
                      <span className="font-semibold text-gray-900">{city.midRange}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{city.notes}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== HIDDEN COSTS ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Hidden Costs Travelers Forget
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Budget an extra 100-200 MAD per day for these commonly overlooked expenses
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {hiddenCosts.map((cost) => {
            const Icon = cost.icon;
            return (
              <div key={cost.cost} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C4960C]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900">{cost.cost}</h3>
                    <span className="text-xs text-[#A0522D] font-semibold">{cost.amount}</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">{cost.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== DESTINATION COMPARISON ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Morocco vs Other Destinations
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            How Morocco compares to other popular travel destinations on a daily budget basis
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#A0522D] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Destination</th>
                      <th className="px-4 py-3 text-center font-semibold">Budget/Day</th>
                      <th className="px-4 py-3 text-center font-semibold">Mid-Range/Day</th>
                      <th className="px-4 py-3 text-center font-semibold">vs Morocco</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      { dest: 'Morocco', budget: '$30-50', mid: '$80-150', vs: 'Baseline', color: '#A0522D' },
                      { dest: 'Spain', budget: '$60-90', mid: '$150-250', vs: '80-100% more', color: '#dc2626' },
                      { dest: 'France', budget: '$80-120', mid: '$200-350', vs: '100-150% more', color: '#dc2626' },
                      { dest: 'Turkey', budget: '$35-55', mid: '$90-160', vs: 'Similar', color: '#C4960C' },
                      { dest: 'Thailand', budget: '$25-40', mid: '$60-120', vs: '10-20% less', color: '#16a34a' },
                      { dest: 'Portugal', budget: '$50-75', mid: '$120-200', vs: '50-70% more', color: '#ea580c' },
                      { dest: 'Egypt', budget: '$25-40', mid: '$60-120', vs: '10-20% less', color: '#16a34a' },
                      { dest: 'Greece', budget: '$55-80', mid: '$130-220', vs: '60-80% more', color: '#dc2626' },
                    ].map((row) => (
                      <tr key={row.dest} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-gray-900">{row.dest}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row.budget}</td>
                        <td className="px-4 py-3 text-center text-gray-600">{row.mid}</td>
                        <td className="px-4 py-3 text-center">
                          <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white" style={{ backgroundColor: row.color }}>
                            {row.vs}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============== SAVING TIPS ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          10 Tips to Save Money in Morocco
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Practical strategies that can save you 30-50% on your daily budget
        </p>

        <div className="space-y-4 max-w-4xl mx-auto">
          {savingTips.map((tip, idx) => (
            <div key={tip.title} className="card-moroccan p-5">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#A0522D] flex items-center justify-center text-white">
                  <span className="font-[family-name:var(--font-display)] text-sm font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900 mb-1">{tip.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="card-moroccan p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-[family-name:var(--font-display)] font-bold text-gray-900 hover:text-[#A0522D] transition-colors">
                  {faq.name}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============== RELATED GUIDES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:border-[#A0522D] transition-colors group">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900 group-hover:text-[#A0522D] transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-medium mt-3">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-[#A0522D] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Morocco Fits Every Budget
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
            From $30/day backpacking adventures to world-class luxury experiences, Morocco delivers incredible value. Start planning your trip with our detailed guides.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <CircleDollarSign className="w-5 h-5" />
              Budget Travel Guide
            </Link>
            <Link
              href="/how-many-days-in-morocco"
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Plan Your Trip Length
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

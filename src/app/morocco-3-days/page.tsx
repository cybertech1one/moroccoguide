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
  AlertTriangle,
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
  CircleDot,
  Waypoints,
  Landmark,
  MountainSnow,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: '3 Days in Morocco 2026 | Three Perfect 3-Day Itineraries with Costs',
  description:
    'Plan the perfect 3 days in Morocco with our three detailed itineraries: Marrakech Focus, Imperial Cities Express, and Coast & Culture. Day-by-day schedules with morning, afternoon, and evening plans, meal recommendations, transport, accommodation, and estimated costs in MAD.',
  keywords: [
    '3 days in Morocco',
    'Morocco 3 day itinerary',
    'Morocco short trip',
    'Marrakech 3 days',
    'Morocco weekend trip',
    'Morocco itinerary 2026',
    'imperial cities Morocco',
    'Marrakech to Fes itinerary',
    'Casablanca to Chefchaouen',
    'Morocco coast itinerary',
    'Morocco travel plan',
    'short trip Morocco',
    'Morocco 3 day budget',
    'Marrakech day trip Ouzoud',
    'Morocco express tour',
    'best 3 days Morocco',
    'Morocco long weekend',
    'Fes Marrakech train',
    'Essaouira day trip',
    'Morocco whirlwind tour',
  ],
  openGraph: {
    title: '3 Days in Morocco 2026 | Three Perfect 3-Day Itineraries with Costs',
    description:
      'Three detailed 3-day Morocco itineraries with day-by-day plans, meals, transport, accommodation, and costs. Marrakech Focus, Imperial Cities Express, and Coast & Culture routes.',
    url: `${BASE_URL}/morocco-3-days`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-itinerary.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Moroccan cityscape with traditional architecture and vibrant market scene',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '3 Days in Morocco 2026 | Three Perfect Itineraries',
    description:
      'Three detailed 3-day Morocco itineraries: Marrakech Focus, Imperial Cities Express, Coast & Culture. Complete with costs, meals, and transport.',
    images: [`${BASE_URL}/images/hero-morocco-itinerary.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-3-days` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-3-days`,
  name: '3 Days in Morocco 2026 | Three Perfect 3-Day Itineraries with Costs',
  description:
    'Plan the perfect 3 days in Morocco with three detailed itineraries covering Marrakech, Imperial Cities, and the Atlantic Coast. Day-by-day schedules with costs in MAD.',
  url: `${BASE_URL}/morocco-3-days`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/morocco-3-days`,
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
      { '@type': 'ListItem', position: 2, name: '3 Days in Morocco', item: `${BASE_URL}/morocco-3-days` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is 3 days enough to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three days is enough to explore one city deeply (like Marrakech) or get a fast-paced taste of two cities. You will not see everything, but you can experience the highlights, key landmarks, excellent food, and the unique atmosphere that makes Morocco unforgettable.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a 3-day trip to Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget 3-day trip costs from 1,800 MAD (excluding flights), a mid-range trip from 4,500 MAD, and a luxury trip from 12,000 MAD. This includes accommodation, meals, transport, and activities. Flights are additional and vary by origin.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best 3-day itinerary for first-time visitors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For first-time visitors, the Marrakech Focus itinerary is ideal. It lets you immerse yourself in one city without the stress of inter-city travel. You will experience the medina, souks, palaces, gardens, and a day trip to the Atlas Mountains or Ouzoud Waterfalls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel from Marrakech to Fes in 3 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but it is a fast-paced trip. The direct train takes about 7 hours. Many travelers take the overnight bus or book a private transfer via the Middle Atlas. Our Imperial Cities Express itinerary covers this route with time for exploration in both cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a 3-day Morocco trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack light layers, comfortable walking shoes, a scarf for mosque visits, sunscreen, and a small daypack. Morocco can be warm during the day and cool at night. A power bank is essential for navigation. Keep luggage minimal for ease of transport between cities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to travel between Moroccan cities in 3 days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco has a reliable transport network. ONCF trains connect major cities, CTM and Supratours buses are comfortable and punctual, and private transfers are widely available. Book transport in advance during peak season (October-April) to secure your preferred times.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: ITINERARY COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const itineraryComparison = [
  {
    aspect: 'Best For',
    marrakech: 'First-timers, culture lovers, relaxed pace',
    imperial: 'History buffs, adventurous travelers',
    coast: 'Architecture fans, beach lovers, photographers',
  },
  {
    aspect: 'Cities Visited',
    marrakech: 'Marrakech + day trip',
    imperial: 'Marrakech and Fes',
    coast: 'Casablanca, Rabat, Essaouira or Chefchaouen',
  },
  {
    aspect: 'Pace',
    marrakech: 'Relaxed to moderate',
    imperial: 'Fast-paced',
    coast: 'Moderate',
  },
  {
    aspect: 'Transport Needed',
    marrakech: 'Walking + 1 day trip transfer',
    imperial: 'Train or private transfer',
    coast: 'Train + bus or private transfer',
  },
  {
    aspect: 'Budget (3 Days)',
    marrakech: 'From 1,800 MAD',
    imperial: 'From 3,200 MAD',
    coast: 'From 2,800 MAD',
  },
  {
    aspect: 'Mid-Range (3 Days)',
    marrakech: 'From 4,500 MAD',
    imperial: 'From 6,500 MAD',
    coast: 'From 5,500 MAD',
  },
  {
    aspect: 'Luxury (3 Days)',
    marrakech: 'From 12,000 MAD',
    imperial: 'From 15,000 MAD',
    coast: 'From 13,000 MAD',
  },
  {
    aspect: 'Physical Demand',
    marrakech: 'Low to moderate (walking in medina)',
    imperial: 'Moderate to high (travel days)',
    coast: 'Moderate (some long transfers)',
  },
  {
    aspect: 'Top Highlight',
    marrakech: 'Jemaa el-Fnaa at sunset',
    imperial: 'Fes medina exploration',
    coast: 'Atlantic coastline views',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MAXIMIZING SHORT TRIPS TIPS
   ═══════════════════════════════════════════════════════════════ */

const shortTripTips = [
  {
    title: 'Book Airport Transfers in Advance',
    description:
      'Pre-arrange your airport pickup to avoid haggling with taxi drivers upon arrival. Most riads and hotels offer transfers from 150 MAD. This saves 30-45 minutes of negotiation and stress, especially after a long flight.',
    icon: Luggage,
  },
  {
    title: 'Stay Inside the Medina',
    description:
      'Choose accommodation within the old medina walls. This puts you within walking distance of major attractions and saves time on transport. Riads in the medina start from 350 MAD per night and offer an authentic Moroccan experience.',
    icon: Building,
  },
  {
    title: 'Download Offline Maps',
    description:
      'Download the area in Google Maps or Maps.me for offline use before you arrive. Medina streets are labyrinthine, and mobile data can be unreliable in narrow alleyways. GPS works without data and is essential for navigation.',
    icon: Map,
  },
  {
    title: 'Pre-Book Key Experiences',
    description:
      'Reserve guided tours, cooking classes, and hammam sessions before arrival. Popular experiences sell out, especially during peak season. Pre-booking also locks in prices and eliminates time spent arranging things on the ground.',
    icon: CalendarDays,
  },
  {
    title: 'Use the ONCF Train App',
    description:
      'Download the ONCF app to check train schedules and buy tickets in advance. First-class tickets from Marrakech to Fes cost from 295 MAD and the journey takes about 7 hours. Booking ahead ensures you get the departure time you want.',
    icon: Train,
  },
  {
    title: 'Eat Where Locals Eat',
    description:
      'Skip tourist restaurants near main squares. Walk two streets back from the main attractions for food stalls and restaurants where locals eat. A full tagine meal costs from 35 MAD at local spots versus from 120 MAD at tourist restaurants.',
    icon: Utensils,
  },
  {
    title: 'Start Early Each Day',
    description:
      'Begin your sightseeing by 8:00 AM. Mornings are cooler, crowds are thinner, and the light is best for photography. Many souks and markets are at their most atmospheric before 10:00 AM. Use evenings for dining and rooftop terraces.',
    icon: Sun,
  },
  {
    title: 'Get a Local SIM Card',
    description:
      'Buy a prepaid SIM from Maroc Telecom or Inwi at the airport. Plans start from 50 MAD for 5 GB of data. This gives you WhatsApp for communicating with guides and drivers, plus Google Maps access throughout your trip.',
    icon: Zap,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COST BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { category: 'Budget Riad/Hostel (per night)', budget: 'From 150 MAD', midRange: 'From 500 MAD', luxury: 'From 2,500 MAD' },
  { category: 'Breakfast', budget: 'From 25 MAD', midRange: 'From 60 MAD (included)', luxury: 'From 150 MAD (included)' },
  { category: 'Lunch', budget: 'From 35 MAD', midRange: 'From 80 MAD', luxury: 'From 250 MAD' },
  { category: 'Dinner', budget: 'From 45 MAD', midRange: 'From 120 MAD', luxury: 'From 400 MAD' },
  { category: 'Local Transport (per day)', budget: 'From 20 MAD', midRange: 'From 80 MAD', luxury: 'From 500 MAD (private)' },
  { category: 'Inter-City Train (one way)', budget: 'From 145 MAD (2nd class)', midRange: 'From 295 MAD (1st class)', luxury: 'From 1,500 MAD (private transfer)' },
  { category: 'Guided Tour (half day)', budget: 'From 200 MAD (group)', midRange: 'From 400 MAD (small group)', luxury: 'From 1,000 MAD (private)' },
  { category: 'Museum/Palace Entry', budget: 'From 20 MAD', midRange: 'From 20 MAD', luxury: 'From 20 MAD' },
  { category: 'Hammam Experience', budget: 'From 50 MAD (public)', midRange: 'From 300 MAD (spa)', luxury: 'From 800 MAD (luxury spa)' },
  { category: '3-Day Total (est.)', budget: 'From 1,800 MAD', midRange: 'From 4,500 MAD', luxury: 'From 12,000 MAD' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function Morocco3DaysPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-morocco-itinerary.webp"
          alt="Panoramic view of Moroccan medina rooftops at golden hour with Atlas Mountains in the distance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm mb-6">
            <CalendarDays className="w-4 h-4" />
            <span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            3 Days in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Three expertly planned itineraries to make the most of a short trip. Day-by-day schedules with meals, transport, accommodation, and costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> 3 Unique Routes
            </span>
            <span className="flex items-center gap-1.5">
              <DollarSign className="w-4 h-4" /> Full Cost Breakdowns
            </span>
            <span className="flex items-center gap-1.5">
              <Utensils className="w-4 h-4" /> Meal Recommendations
            </span>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb ── */}
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
            <li className="text-[var(--text-primary)] font-medium">3 Days in Morocco</li>
          </ol>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Make Every Hour Count
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              Three days in Morocco is short but powerful. Whether you want to lose yourself in the labyrinthine
              souks of Marrakech, race between imperial cities by train, or chase the Atlantic coastline from
              Casablanca to Essaouira, there is an itinerary here that fits your style. Each route below includes
              a detailed day-by-day plan with morning, afternoon, and evening activities, where to eat, how to
              get around, where to sleep, and what it all costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="#itinerary-1" className="card-moroccan p-6 text-center group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Landmark className="w-7 h-7 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Itinerary 1
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">Marrakech Focus</p>
              <p className="text-xs text-[var(--text-muted)]">Deep dive into the Red City with a day trip to the Atlas Mountains or Ouzoud Waterfalls</p>
            </a>
            <a href="#itinerary-2" className="card-moroccan p-6 text-center group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Train className="w-7 h-7 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Itinerary 2
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">Imperial Cities Express</p>
              <p className="text-xs text-[var(--text-muted)]">Marrakech to Fes by train or private transfer through the Middle Atlas</p>
            </a>
            <a href="#itinerary-3" className="card-moroccan p-6 text-center group hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                <Waves className="w-7 h-7 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Itinerary 3
              </h3>
              <p className="text-sm font-semibold text-[var(--color-accent)] mb-2">Coast &amp; Culture</p>
              <p className="text-xs text-[var(--text-muted)]">Casablanca to Rabat with an extension to Chefchaouen or Essaouira</p>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ITINERARY 1: MARRAKECH FOCUS
          ══════════════════════════════════════════════════════════════ */}

      <section id="itinerary-1" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Landmark className="w-4 h-4" /> Itinerary 1
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Marrakech Focus
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              The best option for first-time visitors. Spend three full days exploring the Red City in depth, with a day trip to either the Ouzoud Waterfalls or the Ourika Valley in the Atlas Mountains.
            </p>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 1: The Heart of Marrakech
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:00 - 12:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Start at the Koutoubia Mosque (exterior only, from 0 MAD) for photos of the iconic minaret in soft morning light. Walk through the olive garden beside it, then head to the Bahia Palace (entry from 70 MAD) to explore its stunning zellige-tiled courtyards and painted cedar ceilings. Allow 60-90 minutes. Continue on foot to the Saadian Tombs (entry from 70 MAD), a hidden necropolis rediscovered in 1917. The intricate Italian Carrara marble and carved cedarwood are worth the short wait in line.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Entries from 140 MAD total</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3-4 hours</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-[var(--color-accent)]" />Southern medina</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Walk to Cafe Clock Marrakech in the Kasbah area for a Moroccan-fusion lunch. Try their famous camel burger (from 85 MAD) or a classic vegetable tagine (from 65 MAD). For a budget option, head to the food stalls in the Mellah (Jewish Quarter) for brochettes and bread (from 25 MAD).
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (14:00 - 18:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Dive into the souks from the north side of Jemaa el-Fnaa. Navigate through the spice souk (Rahba Kedima), the leather souk, the carpet souk, and the metalworkers&apos; quarter. Do not buy on your first pass. Instead, note prices and locations. Return to your favorite shops later for bargaining. Allow 2-3 hours. Aim to emerge at the Maison de la Photographie (entry from 50 MAD) for a fascinating collection of early Moroccan photographs and a rooftop terrace with Atlas Mountain views.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />From 50 MAD (museum)</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3-4 hours</span>
                  <span className="flex items-center gap-1"><Info className="w-3 h-3 text-[var(--color-accent)]" />Bargain to 40-60% of first price</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (18:00 - 22:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Head to Jemaa el-Fnaa as it transforms at sunset. Watch the storytellers, musicians, and performers from a rooftop cafe first (mint tea from 20 MAD), then descend into the food stalls for dinner. Stall 1, 14, and 32 are reliable choices. A full meal of grilled meats, salads, and bread costs from 40 MAD. For a special evening, book dinner at Nomad (from 150 MAD per person) overlooking the spice square.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Dinner from 40 MAD</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />Highlight: Jemaa el-Fnaa at sunset</span>
                </div>
              </div>

              <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>Budget:</strong> Hostel Riad Marrakech from 150 MAD/night (dorm) | <strong>Mid-range:</strong> Riad in Derb Dabachi area from 500 MAD/night | <strong>Luxury:</strong> La Mamounia or Royal Mansour from 5,000 MAD/night
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 2: Day Trip to Ouzoud Waterfalls or Ourika Valley
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (7:00 - 12:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>Option A: Ouzoud Waterfalls</strong> (2.5 hours from Marrakech). Depart at 7:00 AM with a shared minibus (from 150 MAD return) or private driver (from 800 MAD return). The 110-meter cascades are Morocco&apos;s most spectacular waterfalls. Hike down to the base (30 minutes) for a boat ride to the base of the falls (from 20 MAD). Barbary macaques are common along the trail.
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  <strong>Option B: Ourika Valley</strong> (1.5 hours from Marrakech). A closer option if you prefer a shorter drive. Shared transport from 100 MAD return. Explore the Setti Fatma waterfalls (guide from 100 MAD), visit a Berber village, and stop at a local argan oil cooperative (free entry). The valley is greener and more accessible than Ouzoud.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Transport from 100 MAD return</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />Full day excursion</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  At Ouzoud, eat at one of the riverside restaurants overlooking the falls. Fresh tagine with chicken and olives from 50 MAD. At Ourika, try a traditional Berber lunch in Setti Fatma village: couscous Friday special from 45 MAD, or tagine from 50 MAD. Both locations serve fresh-squeezed orange juice from 15 MAD.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (14:00 - 17:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Continue exploring your chosen destination. At Ouzoud, swim in the natural pools at the base of the falls (seasonal) and hike the upper trail for panoramic views. At Ourika, visit the Berber museum and explore the terraced gardens along the river. Begin the return journey to Marrakech by 16:00 to arrive before dark.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (19:00 - 22:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Back in Marrakech, reward yourself with a traditional hammam experience. A public hammam costs from 50 MAD or a mid-range spa hammam from 300 MAD. Afterwards, dinner at Al Fassia (from 150 MAD per person), an all-women-run restaurant famous for its traditional Moroccan cuisine, or grab street food from the Jemaa el-Fnaa stalls once more.
                </p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 3: Gardens, Palaces &amp; Souvenirs
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:30 - 12:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Start at the Jardin Majorelle (entry from 70 MAD, Berber Museum additional from 30 MAD). Arrive right when it opens at 8:00 AM to avoid crowds. The cobalt-blue villa surrounded by exotic cacti and bougainvillea is one of Morocco&apos;s most photographed sites. Allow 60-90 minutes. Walk next door to the Yves Saint Laurent Museum (from 100 MAD) for its striking architecture and rotating fashion exhibits. Continue to the nearby Jardin Secret (from 60 MAD) for a peaceful hour among restored Islamic gardens.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Entries from 260 MAD total</span>
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Top photography spot</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  For your final lunch, splurge on a rooftop terrace. Le Jardin (from 120 MAD per person) in the medina offers excellent Moroccan-Mediterranean fusion in a lush garden setting. Budget travelers can find excellent msemen (Moroccan flatbread with honey) and fresh juice in the streets around Mouassine fountain from 20 MAD.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (14:00 - 18:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Dedicated souvenir shopping time. Return to the souks armed with knowledge from Day 1. Top purchases: leather goods from the tanneries (bags from 150 MAD), handwoven rugs (from 500 MAD), argan oil (from 80 MAD for cosmetic grade), spices (from 10 MAD per bag), and ceramics (from 30 MAD). Visit the Ensemble Artisanal (government fixed-price cooperative) to calibrate fair prices before bargaining in the souks.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Info className="w-3 h-3 text-[var(--color-accent)]" />Visit Ensemble Artisanal first for fixed prices</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (18:00 - 21:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  End your trip with a Moroccan cooking class (from 350 MAD including market visit and dinner). Learn to make tagine, couscous, and Moroccan salads. Alternatively, book a farewell dinner at Dar Yacout (from 600 MAD per person) for a multi-course palace dining experience with live Andalusian music. For a budget-friendly finale, enjoy a final sunset from a rooftop cafe with mint tea (from 20 MAD) and pastilla.
                </p>
              </div>

              <div className="card-moroccan p-4 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-gold)]">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Itinerary 1 Cost Summary</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[var(--text-secondary)]">
                  <div><strong>Budget:</strong> From 1,800 MAD (3 days, hostel, street food, shared transport)</div>
                  <div><strong>Mid-range:</strong> From 4,500 MAD (3 days, riad, restaurants, private day trip)</div>
                  <div><strong>Luxury:</strong> From 12,000 MAD (3 days, 5-star hotel, fine dining, private guides)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ITINERARY 2: IMPERIAL CITIES EXPRESS
          ══════════════════════════════════════════════════════════════ */}

      <section id="itinerary-2" className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Train className="w-4 h-4" /> Itinerary 2
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Imperial Cities Express
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Connect Morocco&apos;s two greatest imperial cities in three days. Start in Marrakech, travel to Fes by train or private transfer, and experience two radically different medinas. Fast-paced but unforgettable.
            </p>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 1: Marrakech Highlights
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:00 - 12:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Hit the ground running. Visit the Bahia Palace (from 70 MAD) at opening time, then walk to the nearby El Badi Palace ruins (from 70 MAD) for a sobering contrast between glory and decay. The rooftop views of the stork-nested ramparts are exceptional. Continue to the Saadian Tombs (from 70 MAD) to complete the southern medina&apos;s big three.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Entries from 210 MAD total</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3-4 hours</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Quick but excellent lunch at Mechoui Alley near the Jemaa el-Fnaa. Slow-roasted lamb (mechoui) is carved to order and served with cumin salt and bread. A generous portion costs from 50 MAD. Pair with a fresh orange juice (from 5 MAD) from the square&apos;s famous juice stands.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (13:30 - 17:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Take a taxi to Jardin Majorelle (from 70 MAD entry, taxi from 20 MAD). Spend an hour among the cobalt-blue structures and lush gardens. Return to the medina for a focused souk visit. With limited time, target the spice souk for saffron (from 15 MAD/gram) and Rahba Kedima for argan products. Head to Ben Youssef Madrasa (from 50 MAD) if time allows, one of North Africa&apos;s largest theological colleges with stunning carved stucco.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />From 120 MAD (garden + madrasa)</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />3-4 hours</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (18:00 - 22:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Experience Jemaa el-Fnaa at its evening peak. Watch the snake charmers, henna artists, and gnawa musicians from a rooftop cafe, then eat at the food stalls (dinner from 40 MAD). Pack your bags for tomorrow&apos;s early departure. If taking the overnight bus to Fes (departing around 21:30, from 200 MAD), head to the CTM station after dinner.
                </p>
              </div>

              <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>Budget:</strong> Riad near Jemaa el-Fnaa from 200 MAD/night | <strong>Mid-range:</strong> Boutique riad in Mouassine from 600 MAD/night | <strong>Luxury:</strong> Riad Kniza or Riad l&apos;Orangeraie from 2,500 MAD/night
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 2: Marrakech to Fes
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Train className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Transport Options</h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <strong className="text-[var(--text-primary)]">ONCF Train (recommended):</strong> Departs Marrakech at 7:00 AM or 8:15 AM. Arrives Fes after approximately 7 hours. First class from 295 MAD, second class from 145 MAD. Comfortable with air conditioning and a cafe car. Book via the ONCF app.
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <strong className="text-[var(--text-primary)]">Private Transfer via Middle Atlas:</strong> From 2,500 MAD for the car (up to 4 passengers). Takes 5-6 hours via Beni Mellal with stops at Ouzoud viewpoint and the cedar forests of Ifrane. More scenic and flexible.
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <strong className="text-[var(--text-primary)]">CTM/Supratours Bus:</strong> From 200 MAD. Departs multiple times daily. Takes 8-9 hours. Comfortable but long. Overnight option saves a hotel night.
                  </div>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  If taking the train, bring food from Marrakech (sandwiches and fruit from 30 MAD) or buy from the cafe car (from 40 MAD). If driving via the Middle Atlas, stop in Beni Mellal or Azrou for a local lunch of kefta tagine and bread (from 40 MAD).
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening in Fes (18:00 - 22:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Arrive in Fes and settle into your riad. Take a gentle introductory walk through the Fes el-Bali medina as evening falls. The dimly lit alleys and calls to prayer create an atmospheric welcome. Dinner at Cafe Clock Fes (from 80 MAD) for camel burger or pastilla, or at a traditional restaurant in the Talaa Kebira for harira soup and msemen (from 30 MAD).
                </p>
              </div>

              <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay in Fes</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>Budget:</strong> Funky Fes Hostel from 120 MAD/night | <strong>Mid-range:</strong> Riad Fes Maya from 500 MAD/night | <strong>Luxury:</strong> Palais Amani or Riad Fes from 2,000 MAD/night
                </p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 3: Fes Medina Deep Dive
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:00 - 12:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Hire an official guide (from 300 MAD for half day) at Bab Boujloud, the iconic blue gate. The Fes medina is the world&apos;s largest car-free urban area and genuinely requires a guide for first-timers. Visit the Al-Qarawiyyin Mosque (courtyard viewable from the door, the world&apos;s oldest university), the Bou Inania Madrasa (from 20 MAD, exceptional carved stucco and zellige), and the tanneries of Chouara (rooftop viewpoints are free, mint sprig from 5 MAD for the smell). The tanneries are most photogenic in morning light.
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
                  Eat at The Ruined Garden (from 100 MAD per person), a restaurant set in the atmospheric ruins of a riad courtyard. Their Fassi specialties include pigeon pastilla and lamb with prunes. For budget dining, find a hole-in-the-wall serving rfissa (lentil and shredded msemen stew) from 25 MAD near the Attarine Madrasa.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (14:00 - 17:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Explore the Fes el-Jdid (New Fes) neighborhood. Visit the Royal Palace gates (exterior only, free), the Mellah (Jewish Quarter) with its distinctive balconied architecture, and the Dar Batha Museum (from 20 MAD) for Fassi ceramics and woodwork. Take a taxi (from 15 MAD) to the Merenid Tombs on the hill above the city for a panoramic sunset view over the entire medina. This is the single best viewpoint in Fes.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />Highlight: Merenid Tombs sunset panorama</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (18:00 - 21:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Final evening in Morocco. For a memorable farewell, book dinner at Dar Roumana (from 350 MAD for tasting menu), widely regarded as one of Fes&apos;s finest restaurants. The rooftop terrace overlooks the medina at night. Alternatively, join a Fes food tour (from 400 MAD) to sample street food like sfenj (Moroccan doughnuts), bocadillos, and freshly pressed sugar cane juice.
                </p>
              </div>

              <div className="card-moroccan p-4 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-gold)]">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Itinerary 2 Cost Summary</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[var(--text-secondary)]">
                  <div><strong>Budget:</strong> From 3,200 MAD (3 days, hostels, 2nd class train, street food)</div>
                  <div><strong>Mid-range:</strong> From 6,500 MAD (3 days, riads, 1st class train, restaurants)</div>
                  <div><strong>Luxury:</strong> From 15,000 MAD (3 days, palace riads, private transfer, fine dining)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          ITINERARY 3: COAST & CULTURE
          ══════════════════════════════════════════════════════════════ */}

      <section id="itinerary-3" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[var(--color-accent)]/10 px-4 py-1.5 rounded-full text-sm font-medium text-[var(--color-accent)] mb-4">
              <Waves className="w-4 h-4" /> Itinerary 3
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Coast &amp; Culture
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Explore Morocco&apos;s Atlantic coast and its most diverse cities. Start in Casablanca, visit the capital Rabat, and choose between the blue mountain town of Chefchaouen or the windswept artist haven of Essaouira.
            </p>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 1: Casablanca
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (8:30 - 12:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Start at the Hassan II Mosque (guided tour from 130 MAD), one of the world&apos;s largest mosques and the only one in Morocco open to non-Muslims. The guided tour is mandatory and takes about an hour. The retractable roof, glass floor over the Atlantic, and 210-meter minaret are extraordinary. Book the 9:00 AM or 10:00 AM tour in English. Afterwards, walk along the Corniche seafront promenade for Atlantic views and stop at the Ain Diab lighthouse.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Tour from 130 MAD</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[var(--color-accent)]" />2-3 hours</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />Must-see landmark</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Head to the Central Market (Marche Central) area for the freshest seafood in Morocco. Restaurants like La Bavaroise serve grilled fish platters from 80 MAD. For a quick bite, the fish sandwich stalls outside the market sell generous portions from 20 MAD. Pair with a fresh avocado juice from a nearby juice bar (from 15 MAD).
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (14:00 - 18:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Explore Casablanca&apos;s Art Deco heritage in the Quartier Habous (New Medina), built in the 1930s as a French interpretation of traditional Moroccan architecture. Browse the olive market and pastry shops. Walk through the Mauresque quarter to see the blend of Art Deco and Islamic design. Visit the Villa des Arts (from 20 MAD) for contemporary Moroccan art. End at the Mohammed V Square to see the grand courthouse and fountain.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><Building className="w-3 h-3 text-[var(--color-accent)]" />Art Deco architecture walking tour</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (19:00 - 22:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Dinner at Rick&apos;s Cafe (from 200 MAD per person), the Casablanca-themed restaurant inspired by the 1942 film. Housed in a beautifully restored riad with a pianist and classic atmosphere. For a more local experience, dine at La Sqala (from 100 MAD per person) in a historic bastion near the old medina, known for its garden courtyard and traditional Moroccan cuisine.
                </p>
              </div>

              <div className="card-moroccan p-4 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <Bed className="w-4 h-4 text-[var(--color-accent)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Where to Stay</span>
                </div>
                <p className="text-xs text-[var(--text-secondary)]">
                  <strong>Budget:</strong> HI Hostel Casablanca from 180 MAD/night | <strong>Mid-range:</strong> Hotel Transatlantique from 500 MAD/night | <strong>Luxury:</strong> Four Seasons Casablanca from 4,000 MAD/night
                </p>
              </div>
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 2: Rabat &mdash; The Capital
              </h3>
            </div>

            <div className="space-y-4">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Train className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Getting to Rabat</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Take the ONCF train from Casablanca Voyageurs station. Trains depart every 30 minutes and take just 55 minutes. First class from 75 MAD, second class from 50 MAD. The Al Boraq high-speed train is even faster at 45 minutes from 99 MAD. Arrive by 9:00 AM for a full day.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Morning (9:00 - 12:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Begin at the Hassan Tower and Mohammed V Mausoleum (free entry). The unfinished 12th-century minaret and its forest of broken columns is one of Morocco&apos;s most evocative ruins. The adjacent mausoleum is a masterwork of modern Moroccan craftsmanship in marble and zellige. Continue to the Kasbah of the Udayas, a 12th-century fortress overlooking the Bou Regreg river. Wander the blue-and-white painted streets and visit the Andalusian Gardens (free).
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Free entry to all morning sights</span>
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Kasbah streets are highly photogenic</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Lunch</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Eat at the Kasbah des Oudayas cafe for mint tea and light lunch with river views (from 50 MAD). For something more substantial, walk into Rabat&apos;s medina to find local restaurants serving chicken pastilla (from 35 MAD) and fish chermoula (from 45 MAD). The medina is less touristy than Marrakech or Fes and prices reflect this.
                </p>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Sunset className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Afternoon (14:00 - 17:30)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  Visit the Chellah necropolis (from 20 MAD), a stunning Roman-era ruin overgrown with fig trees and inhabited by storks. One of Morocco&apos;s most atmospheric sites. Then explore the Mohammed VI Museum of Modern and Contemporary Art (from 40 MAD), the country&apos;s premier art museum with rotating international exhibitions alongside Moroccan masters.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Entries from 60 MAD total</span>
                  <span className="flex items-center gap-1"><Star className="w-3 h-3 text-[var(--color-gold)]" />Chellah is a hidden gem</span>
                </div>
              </div>

              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Moon className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Evening (18:00 - 21:00)</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  Return to Casablanca by train (55 minutes, last trains around 21:30) or stay overnight in Rabat for an early morning departure. Dinner in Rabat at Dar Zaki (from 120 MAD per person) for exceptional Moroccan home cooking, or at Cosmopolitan (from 90 MAD) near the Agdal district for a modern bistro atmosphere.
                </p>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                Day 3: Chefchaouen or Essaouira
              </h3>
            </div>

            <div className="space-y-4">
              {/* Option A: Chefchaouen */}
              <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-3">
                  <MountainSnow className="w-5 h-5 text-[var(--color-accent)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Option A: Chefchaouen (The Blue City)</h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    <strong className="text-[var(--text-primary)]">Getting There:</strong> From Rabat, CTM bus takes approximately 4 hours (from 120 MAD). Alternatively, private transfer from 1,500 MAD. Depart early (6:00 AM) to maximize time. From Casablanca, add 1 hour.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Morning/Afternoon:</strong> Arrive by late morning. The entire medina is painted in shades of blue, making it one of the most photogenic places in Africa. Walk the narrow streets, visit the Kasbah Museum (from 10 MAD), and explore the Ras el-Maa waterfall at the edge of town where locals wash carpets. The best photography spots are along Rue Targui and around the main square, Place Outa el-Hammam.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Lunch/Dinner:</strong> Casa Aladdin (from 60 MAD) for rooftop views over the medina. Try the local goat cheese and bread (from 25 MAD). For dinner, Bab Ssour (from 50 MAD) serves traditional Riffian cuisine.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Day total from 300 MAD</span>
                  <span className="flex items-center gap-1"><Camera className="w-3 h-3 text-[var(--color-accent)]" />Morocco&apos;s most photographed town</span>
                </div>
              </div>

              {/* Option B: Essaouira */}
              <div className="card-moroccan p-6 border-l-4 border-[var(--color-gold)]">
                <div className="flex items-center gap-2 mb-3">
                  <Waves className="w-5 h-5 text-[var(--color-gold)]" />
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Option B: Essaouira (The Wind City)</h4>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    <strong className="text-[var(--text-primary)]">Getting There:</strong> From Casablanca, Supratours bus takes approximately 6 hours (from 160 MAD). Alternatively, fly from Casablanca (seasonal, from 500 MAD one way). Private transfer from 2,000 MAD. An early start is essential.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Morning/Afternoon:</strong> Arrive around noon. Walk the ramparts of the Skala de la Ville (free) for dramatic Atlantic views and see the bronze cannons. The fishing port is a spectacle of activity; watch the catch come in and choose your fish to be grilled on the spot (from 50 MAD for a full plate). Explore the medina&apos;s art galleries (Essaouira is renowned for its Gnawa music and thuya wood crafts), and walk the vast windswept beach stretching south.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Lunch/Dinner:</strong> Fresh grilled fish at the port (from 50 MAD). For dinner, try La Table by Madada (from 150 MAD) for refined Moroccan-French cuisine, or Taros Cafe (from 80 MAD) for rooftop Atlantic sunset views.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-3 text-xs text-[var(--text-muted)]">
                  <span className="flex items-center gap-1"><DollarSign className="w-3 h-3 text-[var(--color-accent)]" />Day total from 350 MAD</span>
                  <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-[var(--color-accent)]" />UNESCO World Heritage medina</span>
                </div>
              </div>

              <div className="card-moroccan p-4 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-gold)]">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-[var(--color-gold)]" />
                  <span className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Itinerary 3 Cost Summary</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs text-[var(--text-secondary)]">
                  <div><strong>Budget:</strong> From 2,800 MAD (3 days, hostels, buses, local food)</div>
                  <div><strong>Mid-range:</strong> From 5,500 MAD (3 days, hotels, 1st class trains, restaurants)</div>
                  <div><strong>Luxury:</strong> From 13,000 MAD (3 days, luxury hotels, private transfers, fine dining)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Itinerary Comparison Table ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Itinerary Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not sure which route to choose? This side-by-side comparison covers every key factor to help you decide.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                  <div className="p-3 px-4">Aspect</div>
                  <div className="p-3 px-4 flex items-center gap-1"><Landmark className="w-3.5 h-3.5" /> Marrakech Focus</div>
                  <div className="p-3 px-4 flex items-center gap-1"><Train className="w-3.5 h-3.5" /> Imperial Cities</div>
                  <div className="p-3 px-4 flex items-center gap-1"><Waves className="w-3.5 h-3.5" /> Coast &amp; Culture</div>
                </div>
                {itineraryComparison.map((item, i) => (
                  <div
                    key={item.aspect}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.aspect}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{item.marrakech}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{item.imperial}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{item.coast}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Detailed Cost Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            3-Day Cost Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay across budget, mid-range, and luxury tiers for a 3-day Morocco trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Actual costs vary by season, with peak season (October-April) prices 20-30% higher.
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

      {/* ── Tips for Maximizing Short Trips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Zap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tips for Maximizing a Short Morocco Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            With only 3 days, every hour counts. These strategies help you see more, spend less, and avoid common time-wasting mistakes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shortTripTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Packing Essentials ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            3-Day Packing Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light and smart. A carry-on sized bag is ideal for a 3-day Morocco trip, especially if you are moving between cities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Must-Have Items
              </h3>
              <div className="space-y-2">
                {[
                  'Comfortable walking shoes (you will walk 15,000+ steps daily)',
                  'Light layers (warm days, cool evenings)',
                  'Scarf or shawl (for mosque visits and sun protection)',
                  'Sunscreen and sunglasses (strong UV even in winter)',
                  'Power bank (10,000 mAh minimum for navigation)',
                  'Small daypack (for day trips and souk shopping)',
                  'Cash in MAD (ATMs available but cash is king in medinas)',
                  'Reusable water bottle (refill at riads to save money)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Leave Behind
              </h3>
              <div className="space-y-2">
                {[
                  'Formal clothing (Morocco is casual, even at nice restaurants)',
                  'Large suitcase (hard to navigate in medina alleyways)',
                  'Excessive electronics (phone and power bank are enough)',
                  'Expensive jewelry (unnecessary and attracts attention)',
                  'Heavy guidebooks (use offline maps and saved articles instead)',
                  'Too many outfits (laundry service from 30 MAD at most riads)',
                  'European plug adapters (Morocco uses Type C/E, same as Europe)',
                  'Rigid itinerary mindset (leave room for spontaneous discoveries)',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--text-muted)]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
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
                Is 3 days enough to visit Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Three days is enough to explore one city deeply (like Marrakech) or get a fast-paced taste of two cities. You will not see everything, but you can experience the highlights, key landmarks, excellent food, and the unique atmosphere that makes Morocco unforgettable. If possible, extend to 4-5 days to add a desert or mountain excursion.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a 3-day trip to Morocco cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Excluding international flights, a budget 3-day trip costs from 1,800 MAD per person (hostel dorms, street food, shared transport). A comfortable mid-range trip costs from 4,500 MAD (riad accommodation, sit-down restaurants, first-class trains). A luxury trip costs from 12,000 MAD (5-star hotels, private transfers, fine dining, private guides).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best 3-day itinerary for first-time visitors?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For first-time visitors, the Marrakech Focus itinerary (Itinerary 1) is ideal. It lets you immerse yourself in one city without the stress of inter-city travel. You will experience the medina, souks, palaces, gardens, and a day trip to the Atlas Mountains or Ouzoud Waterfalls. This relaxed pace lets you absorb Moroccan culture rather than rushing between cities.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I travel from Marrakech to Fes in 3 days?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, but it is a fast-paced trip. The ONCF train takes approximately 7 hours direct. One day for Marrakech, the transfer day (with time in Fes in the evening), and a full day in Fes gives you a solid experience of both cities. Consider the overnight CTM bus (from 200 MAD) to save a night&apos;s accommodation and maximize your daylight hours in each city.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I pack for a 3-day Morocco trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Pack in a carry-on sized bag with light layers, comfortable walking shoes, a scarf for mosque visits, sunscreen, and a power bank. Morocco can be warm during the day and cool at night. A small daypack is essential for day trips. Bring cash in MAD (ATMs are widely available). Keep luggage minimal, especially if moving between cities, as medina alleyways are narrow and not suited to large suitcases.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to travel between Moroccan cities in 3 days?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Morocco has a reliable and safe transport network. ONCF trains connect major cities with comfortable, air-conditioned carriages. CTM and Supratours buses are modern and punctual. Private transfers with vetted drivers are widely available. Book transport in advance during peak season (October-April) to secure your preferred departure times. Avoid driving yourself as a first-time visitor.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                When is the best time of year for a 3-day Morocco trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                March to May and September to November offer the best weather for a short trip. Temperatures are comfortable for walking (18-28 degrees Celsius), crowds are manageable, and prices are moderate. Summer (June-August) is extremely hot in Marrakech and Fes (40+ degrees Celsius). Winter (December-February) is pleasant in Marrakech but cold in Chefchaouen and the mountains. Ramadan dates vary annually and affect restaurant hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa for a 3-day Morocco trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Citizens of the US, UK, EU, Canada, Australia, and many other countries receive a 90-day visa-free stamp on arrival. No advance visa application is required. Your passport must be valid for at least 6 months beyond your travel dates. Check current visa requirements for your specific nationality before booking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Landmark className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to Morocco&apos;s most popular city, with neighborhoods, restaurants, riads, and insider tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/fes" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Building className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Navigate the world&apos;s largest car-free urban area. Tanneries, medersas, and the best food in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed cost breakdowns, money-saving strategies, and budget itineraries for every type of traveler.
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

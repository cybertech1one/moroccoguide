import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Info,
  Lightbulb,
  Sun,
  Compass,
  Mountain,
  Camera,
  Heart,
  Globe,
  Users,
  Sparkles,
  AlertTriangle,
  Footprints,
  Sunrise,
  Waves,
  UtensilsCrossed,
  ShoppingBag,
  Landmark,
  Flower2,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'How Many Days in Marrakech Do You Need? 2026 Day-by-Day Guide',
  description:
    'Find out how many days you need in Marrakech in 2026. Day-by-day breakdown covering the medina, palaces, Majorelle Garden, day trips, cooking classes, and hammams. First-time and repeat visitor tips.',
  keywords: [
    'how many days in marrakech',
    'marrakech trip length',
    'how long to spend in marrakech',
    'marrakech itinerary days',
    'days needed in marrakech',
    'marrakech day by day',
    'marrakech 2 days',
    'marrakech 3 days',
    'marrakech 4 days',
    'marrakech 5 days',
    'marrakech itinerary 2026',
    'is 2 days enough in marrakech',
    'is 3 days enough in marrakech',
    'how long in marrakech',
  ],
  openGraph: {
    title: 'How Many Days in Marrakech Do You Need? 2026 Day-by-Day Guide',
    description:
      'Complete day-by-day breakdown for planning your Marrakech trip. 2-3 days minimum, 4-5 for deeper exploration. Includes day trip options and expert tips.',
    url: `${BASE_URL}/how-many-days-in-marrakech`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Aerial view of Marrakech medina with Koutoubia Mosque minaret and Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Days in Marrakech? 2026 Guide',
    description:
      'Day-by-day breakdown: medina, palaces, gardens, day trips, cooking classes. 2-3 days minimum, 4-5 for deeper exploration.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/how-many-days-in-marrakech` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/how-many-days-in-marrakech`,
  name: 'How Many Days in Marrakech Do You Need? 2026 Day-by-Day Guide',
  description:
    'Complete day-by-day guide to planning your time in Marrakech. Minimum 2-3 days for highlights, 4-5 days for deeper exploration with day trips.',
  url: `${BASE_URL}/how-many-days-in-marrakech`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  mainEntityOfPage: `${BASE_URL}/how-many-days-in-marrakech`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Marrakech',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Marrakech', item: `${BASE_URL}/marrakech` },
      { '@type': 'ListItem', position: 3, name: 'How Many Days', item: `${BASE_URL}/how-many-days-in-marrakech` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many days do you need in Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'You need a minimum of 2-3 days in Marrakech. Two days covers the essential medina, Jemaa el-Fna, major palaces, and Majorelle Garden. Three days adds a day trip to the Atlas Mountains or Essaouira. Four to five days allows deeper exploration including cooking classes, hammams, hidden riads, and multiple day trip options.' } },
    { '@type': 'Question', name: 'Is 2 days enough for Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Two days is enough to see the main highlights: Jemaa el-Fna, the souks, Bahia Palace, Saadian Tombs, Koutoubia Mosque, and Majorelle Garden. However, you will be on a tight schedule and won\'t have time for day trips, cooking classes, or leisurely exploration. If possible, add a third day.' } },
    { '@type': 'Question', name: 'Is 5 days too many for Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Five days is not too many if you include day trips. Day 1-2: Marrakech highlights. Day 3: Atlas Mountains or Ourika Valley. Day 4: Cooking class and hammam. Day 5: Essaouira day trip or shopping and hidden gems. Without day trips, 3 days in Marrakech city itself is sufficient.' } },
    { '@type': 'Question', name: 'What should I do on my first day in Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Spend your first day in the medina. Start at the Koutoubia Mosque, explore the souks (leather, spices, textiles, metalwork), visit Bahia Palace (from 70 MAD), and end at Jemaa el-Fna square for sunset when the food stalls open. Wear comfortable shoes and stay hydrated.' } },
    { '@type': 'Question', name: 'What are the best day trips from Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'The best day trips are: Atlas Mountains and Imlil village (from 300 MAD by grand taxi), Ouzoud Falls (3 hours, from 200 MAD by bus), Ourika Valley (45 minutes, from 100 MAD by grand taxi), Essaouira (2.5 hours, from 80 MAD by bus), and Ait Benhaddou kasbah (3.5 hours, from 400 MAD by tour). Each adds a full day to your itinerary.' } },
    { '@type': 'Question', name: 'When is the best time to visit Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'March to May and September to November are ideal with temperatures of 22-30 degrees. Summer (June-August) sees temperatures above 40 degrees, making outdoor sightseeing uncomfortable between 11 AM and 5 PM. Winter (December-February) is mild (15-20 degrees) with occasional rain but fewer crowds.' } },
  ],
};

/* ===============================================================
   DATA: DAY-BY-DAY BREAKDOWN
   =============================================================== */

const dayBreakdown = [
  {
    day: 1,
    title: 'Medina, Souks & Jemaa el-Fna',
    icon: Compass,
    theme: 'Essential Marrakech',
    morning: {
      title: 'Morning: Koutoubia & Souks',
      activities: [
        'Start at the Koutoubia Mosque (exterior only for non-Muslims) -- the 12th-century minaret is the city\'s most recognizable landmark at 77 meters tall',
        'Enter the medina through Bab Agnaou or via the main souks entrance near Jemaa el-Fna',
        'Explore the Souk Semmarine (textiles), Souk des Babouches (leather slippers), Souk Haddadine (metalwork), and Souk des Teinturiers (dyers\' quarter)',
        'Navigate slowly -- the souks are organized by craft and each quarter has its own character',
      ],
    },
    afternoon: {
      title: 'Afternoon: Palaces & History',
      activities: [
        'Visit Bahia Palace (from 70 MAD) -- 8,000 sq meters of stunning zellige tilework, carved stucco, and painted cedar ceilings',
        'Walk to the nearby Saadian Tombs (from 70 MAD) -- the beautifully decorated 16th-century royal necropolis hidden behind a narrow passage',
        'Explore the mellah (historic Jewish quarter) with its distinctive buildings and the Lazama Synagogue',
        'Stop for mint tea on a rooftop terrace with medina views (from 20 MAD)',
      ],
    },
    evening: {
      title: 'Evening: Jemaa el-Fna',
      activities: [
        'Arrive at Jemaa el-Fna by 5 PM to watch the transformation from daytime market to evening spectacle',
        'Experience the food stalls serving grilled meats, harira soup, snails, fresh orange juice (from 5 MAD), and Moroccan salads',
        'Watch Gnaoua musicians, storytellers, henna artists, and Berber acrobats',
        'Dine at the food stalls (a full meal costs from 30-60 MAD) or try a rooftop restaurant overlooking the square',
      ],
    },
    budget: 'From 200-400 MAD for the day (entrance fees, food, tea)',
  },
  {
    day: 2,
    title: 'Gardens, Museums & Hammam',
    icon: Flower2,
    theme: 'Culture & Relaxation',
    morning: {
      title: 'Morning: Majorelle Garden & YSL Museum',
      activities: [
        'Arrive at Majorelle Garden (from 70 MAD) when it opens at 8 AM to avoid crowds -- the cobalt blue villa and botanical garden created by Jacques Majorelle in the 1920s',
        'Visit the Berber Museum inside the garden (included in ticket) with its excellent collection of Amazigh jewelry, textiles, and artifacts',
        'Next door, the Yves Saint Laurent Museum (from 100 MAD) showcases the designer\'s Morocco-inspired haute couture in a stunning modern building',
        'Walk through Gueliz (the new town) for breakfast at a French-style cafe on Avenue Mohammed V',
      ],
    },
    afternoon: {
      title: 'Afternoon: Ben Youssef & Hidden Gems',
      activities: [
        'Visit the Ben Youssef Madrasa (from 50 MAD) -- the largest Islamic college in Morocco with intricate stucco work and zellige from the 14th century',
        'Explore the Museum of Marrakech (from 50 MAD) in a converted 19th-century palace',
        'Visit Dar Si Said Museum (Museum of Moroccan Arts, from 30 MAD) for woodwork, carpets, and Berber crafts',
        'Wander through the Mouassine quarter discovering hidden fondouks (caravanserais) and artisan workshops',
      ],
    },
    evening: {
      title: 'Evening: Hammam Experience',
      activities: [
        'Experience a traditional hammam -- the quintessential Moroccan bathing ritual combining steam, black soap scrub, and ghassoul clay',
        'Heritage Spa or Les Bains de Marrakech offer luxurious tourist-friendly hammams from 400 MAD with massage',
        'For an authentic local experience, Hammam Dar el-Bacha costs from 15 MAD (bring your own towel and soap)',
        'End with dinner at a riad restaurant in the medina -- traditional pastilla, tagine, or couscous from 80 MAD',
      ],
    },
    budget: 'From 350-800 MAD for the day (entrance fees, hammam, meals)',
  },
  {
    day: 3,
    title: 'Day Trip: Atlas Mountains or Ouzoud Falls',
    icon: Mountain,
    theme: 'Day Trip Adventure',
    morning: {
      title: 'Option A: Atlas Mountains & Imlil',
      activities: [
        'Depart Marrakech at 8 AM for the 90-minute drive to Imlil village (1,740 meters) in the High Atlas Mountains',
        'Hike through Berber villages with views of Mount Toubkal (4,167 meters, North Africa\'s highest peak)',
        'Visit the Kasbah du Toubkal, a former fortress converted into a mountain lodge with panoramic terrace',
        'Lunch with a Berber family in their home (from 100 MAD) -- freshly baked bread, tagine, mint tea',
      ],
    },
    afternoon: {
      title: 'Option B: Ouzoud Falls',
      activities: [
        'Depart at 8 AM for the 3-hour drive to Ouzoud Falls, the highest waterfall in North Africa at 110 meters',
        'Hike down to the base of the falls for swimming in the natural pools (seasonal)',
        'Spot Barbary macaques (monkeys) in the olive groves along the trail',
        'Take a boat ride at the base of the falls (from 20 MAD) for close-up views of the cascading water',
      ],
    },
    evening: {
      title: 'Evening: Return to Marrakech',
      activities: [
        'Return to Marrakech by late afternoon/early evening',
        'If energy permits, revisit Jemaa el-Fna for a final evening session',
        'Alternatively, enjoy a rooftop dinner at a riad with live Gnaoua music',
        'Rest and recharge for continued Morocco travels or departure the next day',
      ],
    },
    budget: 'From 300-600 MAD for the day (transport, guide, lunch, activities)',
  },
  {
    day: 4,
    title: 'Cooking Class, Shopping & Hidden Riads',
    icon: UtensilsCrossed,
    theme: 'Deep Dive Experiences',
    morning: {
      title: 'Morning: Moroccan Cooking Class',
      activities: [
        'Join a cooking class (from 350 MAD) starting with a guided visit to a local souk to buy fresh ingredients',
        'Learn to prepare classic Moroccan dishes: tagine (chicken with preserved lemons and olives), pastilla, Moroccan salads, and fresh bread',
        'Discover the spices that define Moroccan cuisine: ras el hanout, cumin, saffron, and preserved lemons',
        'Enjoy the meal you prepared with mint tea and pastries for dessert',
      ],
    },
    afternoon: {
      title: 'Afternoon: Strategic Shopping',
      activities: [
        'Return to the souks with purpose: leather goods in Souk Cherratine, ceramics near Souk des Potiers, spices at Rahba Kedima',
        'Visit a carpet cooperative for an authentic (pressure-free) carpet viewing and mint tea ceremony',
        'Explore artisan workshops in the Mouassine and Sidi Abdelaziz quarters for contemporary Moroccan design',
        'Key prices: leather babouches from 80 MAD, argan oil from 150 MAD/liter, spice mixes from 30 MAD, ceramics from 50 MAD',
      ],
    },
    evening: {
      title: 'Evening: Hidden Marrakech',
      activities: [
        'Visit Le Jardin Secret (from 50 MAD) -- a recently restored historic riad with two gardens (Islamic and exotic) and a tower with 360-degree views',
        'Explore the Dar el-Bacha quarter and the Musee des Confluences (from 50 MAD) in the former palace of the Pasha of Marrakech',
        'End with a farewell dinner at a fine-dining riad restaurant: La Maison Arabe, Dar Yacout, or Nomad from 300 MAD',
        'Walk through the illuminated medina at night for a final atmospheric experience',
      ],
    },
    budget: 'From 500-1,200 MAD for the day (cooking class, shopping, dinner)',
  },
  {
    day: 5,
    title: 'Essaouira Day Trip or Ourika Valley',
    icon: Waves,
    theme: 'Coast or Valley Escape',
    morning: {
      title: 'Option A: Essaouira (Atlantic Coast)',
      activities: [
        'Depart at 8 AM for the 2.5-hour drive to Essaouira, the wind-swept Atlantic coastal town',
        'Explore the 18th-century Portuguese ramparts with views of the Iles Purpuraires',
        'Walk through the medina (UNESCO World Heritage Site) -- more relaxed and grid-like than Marrakech',
        'Visit the thuya wood artisan workshops unique to Essaouira',
      ],
    },
    afternoon: {
      title: 'Option B: Ourika Valley',
      activities: [
        'Drive 45 minutes south to the Ourika Valley in the foothills of the Atlas Mountains',
        'Visit an argan oil cooperative to see traditional production methods (free, tips appreciated)',
        'Hike to the Setti Fatma waterfalls (7 cascades, from 10 MAD for guide)',
        'Browse the Saturday Berber market (if timing aligns) for local produce, spices, and crafts',
      ],
    },
    evening: {
      title: 'Evening: Final Marrakech Experience',
      activities: [
        'If in Essaouira: enjoy a seafood lunch at the port (grilled fish from 50 MAD), browse art galleries, relax on the beach before returning to Marrakech',
        'If in Ourika: return to Marrakech for afternoon tea at La Mamounia garden terrace (from 150 MAD)',
        'Last-minute souvenir shopping in the souks or Gueliz boutiques',
        'Farewell dinner and departure from Marrakech',
      ],
    },
    budget: 'From 250-500 MAD for the day (transport, meals, activities)',
  },
] as const;

/* ===============================================================
   DATA: VISITOR TYPE RECOMMENDATIONS
   =============================================================== */

const visitorTypes = [
  {
    type: 'First-Time Visitor',
    icon: Star,
    recommended: '3-4 days',
    reason: 'Three days covers the essential medina, palaces, gardens, and one day trip. A fourth day allows a cooking class or hammam and deeper souk exploration. This gives you a complete Marrakech experience without feeling rushed.',
    mustDo: ['Jemaa el-Fna at sunset', 'Bahia Palace', 'Majorelle Garden', 'Souks shopping', 'Atlas or Essaouira day trip'],
  },
  {
    type: 'Repeat Visitor',
    icon: Heart,
    recommended: '2-3 days',
    reason: 'Returning visitors can skip the main attractions and focus on deeper experiences: cooking classes, lesser-known museums, artisan workshops in the Mouassine quarter, contemporary art galleries in Gueliz, and relaxed riad stays.',
    mustDo: ['Cooking class', 'Le Jardin Secret', 'Dar el-Bacha Museum', 'Gueliz art galleries', 'Fine dining riad experience'],
  },
  {
    type: 'Families with Children',
    icon: Users,
    recommended: '3 days',
    reason: 'Children need a slower pace and breaks from the intensity of the medina. Three days allows morning sightseeing with afternoon pool time at your riad. The Majorelle Garden, Jemaa el-Fna food stalls, and camel rides near the Palmeraie are kid favorites.',
    mustDo: ['Jemaa el-Fna food stalls', 'Majorelle Garden', 'Palmeraie camel ride', 'Cooking class', 'Hotel pool time'],
  },
  {
    type: 'Budget Traveler',
    icon: Lightbulb,
    recommended: '3-4 days',
    reason: 'Budget travelers benefit from extra days as the cheapest experiences (medina wandering, people watching, street food) are time-intensive. Three to four days at a hostel with free medina exploration and cheap street food keeps costs low while maximizing the experience.',
    mustDo: ['Free medina walks', 'Street food tour', 'Koutoubia Mosque (free)', 'Rooftop terraces', 'Local hammam (from 15 MAD)'],
  },
  {
    type: 'Photography Enthusiast',
    icon: Camera,
    recommended: '4-5 days',
    reason: 'Marrakech is extremely photogenic but the best light is early morning and late afternoon. Four to five days allows you to capture the medina at different times of day, visit the souks when light filters through the covered passages, and shoot golden hour at multiple locations.',
    mustDo: ['Sunrise from a riad rooftop', 'Dyer\'s quarter colors', 'Jemaa el-Fna at blue hour', 'Majorelle blue walls', 'Atlas Mountains landscape'],
  },
  {
    type: 'Part of a Larger Morocco Trip',
    icon: Globe,
    recommended: '2 days',
    reason: 'If Marrakech is one stop on a longer Morocco itinerary, two full days is sufficient to cover the highlights. Focus on the medina, Jemaa el-Fna, one palace, and Majorelle Garden. Use Marrakech as a base for your desert departure.',
    mustDo: ['Jemaa el-Fna', 'Souks', 'Bahia Palace', 'Majorelle Garden', 'Evening food stalls'],
  },
] as const;

/* ===============================================================
   DATA: WITH VS WITHOUT DAY TRIPS
   =============================================================== */

const dayTripOptions = [
  {
    destination: 'Atlas Mountains & Imlil',
    icon: Mountain,
    travelTime: '1.5 hours each way',
    fullDay: true,
    cost: 'From 300 MAD (grand taxi) or from 500 MAD (guided tour)',
    highlights: 'Berber villages, Mount Toubkal views, lunch with a local family, waterfalls',
    bestFor: 'Nature lovers, hikers, photographers, cultural immersion',
  },
  {
    destination: 'Essaouira',
    icon: Waves,
    travelTime: '2.5 hours each way',
    fullDay: true,
    cost: 'From 80 MAD (Supratours bus) or from 600 MAD (private transfer)',
    highlights: 'Atlantic coast, Portuguese ramparts, medina, seafood, Gnaoua music heritage',
    bestFor: 'Beach lovers, seafood fans, windsurfers, relaxation',
  },
  {
    destination: 'Ouzoud Falls',
    icon: Sunrise,
    travelTime: '3 hours each way',
    fullDay: true,
    cost: 'From 200 MAD (shared transport) or from 500 MAD (guided tour)',
    highlights: 'North Africa\'s highest waterfall, Barbary macaques, boat ride, swimming',
    bestFor: 'Nature lovers, adventure seekers, families',
  },
  {
    destination: 'Ourika Valley',
    icon: Footprints,
    travelTime: '45 minutes each way',
    fullDay: false,
    cost: 'From 100 MAD (grand taxi) or from 400 MAD (guided tour)',
    highlights: 'Atlas foothills, Setti Fatma waterfalls, argan cooperative, Saturday market',
    bestFor: 'Half-day option, argan oil shopping, light hiking',
  },
  {
    destination: 'Ait Benhaddou',
    icon: Landmark,
    travelTime: '3.5 hours each way',
    fullDay: true,
    cost: 'From 400 MAD (guided tour)',
    highlights: 'UNESCO kasbah, Game of Thrones filming location, Ouarzazate film studios',
    bestFor: 'History buffs, film fans, photography, architecture',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'How Many Days in Morocco?', href: '/how-many-days-in-morocco', description: 'Overall Morocco trip length planning guide' },
  { title: 'Things to Do in Marrakech', href: '/things-to-do-marrakech', description: 'Complete guide to Marrakech activities' },
  { title: 'Day Trips from Marrakech', href: '/day-trips-from-marrakech', description: 'Best excursions from the Red City' },
  { title: 'Marrakech on a Budget', href: '/budget-travel', description: 'How to enjoy Marrakech without breaking the bank' },
  { title: 'Is Morocco Expensive?', href: '/is-morocco-expensive', description: 'Full cost breakdown for Morocco travel' },
  { title: 'Morocco 7-Day Itinerary', href: '/morocco-7-day-itinerary', description: 'Most popular Morocco trip including Marrakech' },
  { title: 'Marrakech Food Guide', href: '/cuisine', description: 'Where and what to eat in Morocco' },
  { title: 'Best Time to Visit', href: '/best-time-visit-morocco', description: 'When to plan your Marrakech trip' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function HowManyDaysInMarrakechPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* -- JSON-LD -- */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ============== HERO ============== */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-marrakech.webp"
          alt="Aerial view of Marrakech medina with Koutoubia Mosque and Atlas Mountains in the distance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
            How Many Days in Marrakech Do You Need?
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl opacity-95">
            A complete day-by-day breakdown to plan your perfect Marrakech visit in 2026
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
          <li>
            <Link href="/marrakech" className="hover:text-[#A0522D] transition-colors">Marrakech</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li className="text-[#A0522D] font-medium">How Many Days</li>
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
                  The Quick Answer
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>You need a minimum of 2-3 days in Marrakech.</strong> Two full days covers the essential medina, Jemaa el-Fna, major palaces, and Majorelle Garden. Three days adds a day trip to the Atlas Mountains or Essaouira.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>For deeper exploration, plan 4-5 days.</strong> This allows cooking classes, hammam experiences, strategic souk shopping, hidden gems like Le Jardin Secret, and two day trips. If Marrakech is part of a larger Morocco trip, 2 days is sufficient.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { days: '1 Day', verdict: 'Too rushed', color: '#dc2626' },
              { days: '2 Days', verdict: 'Minimum', color: '#C4960C' },
              { days: '3 Days', verdict: 'Recommended', color: '#A0522D' },
              { days: '4-5 Days', verdict: 'Ideal', color: '#16a34a' },
            ].map((item) => (
              <div key={item.days} className="card-moroccan p-4 text-center">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">{item.days}</h3>
                <span className="inline-block px-2 py-0.5 rounded-full text-xs font-bold text-white mt-1" style={{ backgroundColor: item.color }}>
                  {item.verdict}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              Marrakech is the most visited city in Morocco and the most common starting point for any Morocco trip. Known as the &quot;Red City&quot; for its distinctive terracotta-colored buildings, Marrakech packs an extraordinary density of experiences into a compact area: the world-famous Jemaa el-Fna square, miles of labyrinthine souks, stunning Islamic architecture, tranquil gardens, and some of Africa&apos;s finest cuisine.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The question of how many days to spend here depends heavily on whether you plan to take day trips, your tolerance for sensory intensity (the medina is loud, colorful, and overwhelming for many), and whether Marrakech is your only Morocco destination or part of a larger itinerary.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Below is our detailed day-by-day breakdown, covering everything from the must-see highlights to hidden gems that most tourists miss. We also provide tailored recommendations for different traveler types.
            </p>
          </div>
        </div>
      </section>

      {/* ============== DAY-BY-DAY BREAKDOWN ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Day-by-Day Breakdown
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          A detailed plan for how to spend each day in Marrakech, from essential highlights to deeper exploration
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {dayBreakdown.map((day) => {
            const Icon = day.icon;
            return (
              <div key={day.day} className="card-moroccan p-5 md:p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#A0522D] flex items-center justify-center text-white">
                    <span className="font-[family-name:var(--font-display)] text-xl font-bold">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">
                      Day {day.day}: {day.title}
                    </h3>
                    <span className="text-sm text-[#A0522D] font-medium flex items-center gap-1">
                      <Icon className="w-4 h-4" />
                      {day.theme}
                    </span>
                  </div>
                </div>

                <div className="space-y-5">
                  {[day.morning, day.afternoon, day.evening].map((period) => (
                    <div key={period.title}>
                      <h4 className="font-[family-name:var(--font-heading)] font-bold text-gray-800 mb-2 flex items-center gap-2">
                        <Sun className="w-4 h-4 text-[#C4960C]" />
                        {period.title}
                      </h4>
                      <ul className="space-y-2 ml-6">
                        {period.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm leading-relaxed">
                            <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-2 text-sm text-gray-500">
                  <Lightbulb className="w-4 h-4 text-[#C4960C]" />
                  <span>Estimated budget: {day.budget}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== VISITOR TYPES ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Recommendations by Visitor Type
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Your ideal Marrakech trip length depends on your travel style and situation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {visitorTypes.map((vt) => {
              const Icon = vt.icon;
              return (
                <div key={vt.type} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#A0522D]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900">{vt.type}</h3>
                      <span className="text-sm font-semibold text-[#C4960C]">{vt.recommended}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{vt.reason}</p>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="font-semibold text-gray-800 text-xs mb-2">Must-Do:</p>
                    <ul className="space-y-1">
                      {vt.mustDo.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-gray-600 text-xs">
                          <CheckCircle className="w-3 h-3 text-[#A0522D] flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== DAY TRIPS ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          With vs Without Day Trips
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-4">
          Day trips add at least 1-2 days to your Marrakech visit but are highly recommended
        </p>

        <div className="max-w-4xl mx-auto mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-moroccan p-5 border-l-4 border-[#A0522D]">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900 mb-2">Without Day Trips: 2-3 Days</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Focus entirely on the city: medina, souks, palaces, gardens, food, and hammam. Two days covers the essentials, three allows a relaxed pace and deeper exploration of neighborhoods like Mouassine and the mellah. Ideal if Marrakech is a short stop on a larger Morocco itinerary.
              </p>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[#C4960C]">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900 mb-2">With Day Trips: 4-5 Days</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Add 1-2 day trips to your base Marrakech stay. The Atlas Mountains and Essaouira are the most popular additions. Each full-day trip adds a day to your itinerary. The Ourika Valley is a half-day option that can be combined with an afternoon in the city.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {dayTripOptions.map((trip) => {
            const Icon = trip.icon;
            return (
              <div key={trip.destination} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C4960C]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{trip.destination}</h3>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 text-gray-600">
                        {trip.fullDay ? 'Full day' : 'Half day'}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{trip.travelTime}</span>
                      <span className="flex items-center gap-1"><Lightbulb className="w-3.5 h-3.5" />{trip.cost}</span>
                    </div>
                    <p className="text-gray-700 text-sm">{trip.highlights}</p>
                    <p className="text-gray-500 text-xs mt-1">Best for: {trip.bestFor}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== PRACTICAL TIPS ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Practical Tips for Marrakech
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { icon: Sun, title: 'Best Time to Visit', tip: 'March-May and September-November are ideal. Summer exceeds 40 degrees. Plan sightseeing for mornings and evenings in hot months.' },
              { icon: MapPin, title: 'Stay in the Medina', tip: 'Book a riad inside the medina for the authentic experience. Most attractions are walkable. Riads from 400 MAD/night offer courtyards, rooftop terraces, and breakfast.' },
              { icon: Footprints, title: 'Wear Good Shoes', tip: 'The medina streets are uneven cobblestones, steep in places, and occasionally slippery. Flat, comfortable shoes are essential. You will walk 10-15 km per day easily.' },
              { icon: AlertTriangle, title: 'Beware of False Guides', tip: 'Self-appointed "guides" approach tourists in the medina. Politely decline. If you want a guide, book through your riad or a licensed agency. Official guides cost from 500 MAD per half day.' },
              { icon: ShoppingBag, title: 'Bargaining in Souks', tip: 'Start at 30-40% of the asking price and work up. Fixed-price shops exist in Gueliz and some medina boutiques. Compare prices at multiple stalls before buying.' },
              { icon: UtensilsCrossed, title: 'Food Safety', tip: 'Street food at Jemaa el-Fna is generally safe. Choose busy stalls with high turnover. Avoid tap water, drink bottled water (from 5 MAD). The orange juice stalls are safe and delicious (from 5 MAD).' },
            ].map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-[#A0522D]" />
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="container-morocco py-10">
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
      </section>

      {/* ============== RELATED GUIDES ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
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
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-[#A0522D] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Plan Your Marrakech Trip Today
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
            Whether you have 2 days or 5, Marrakech promises an unforgettable experience. Explore our detailed guides for day trips, dining, shopping, and accommodations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/things-to-do-marrakech"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Things to Do in Marrakech
            </Link>
            <Link
              href="/day-trips-from-marrakech"
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Day Trips from Marrakech
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

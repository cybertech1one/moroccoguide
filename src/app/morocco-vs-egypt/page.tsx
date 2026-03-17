import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Waves,
  Mountain,
  Utensils,
  Sun,
  Moon,
  ShoppingBag,
  Plane,
  Globe,
  Camera,
  Compass,
  Scale,
  CircleDot,
  Calendar,
  Landmark,
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
  title: 'Morocco vs Egypt 2026 | Honest Comparison Guide for Travelers',
  description:
    'Morocco vs Egypt: which North African destination is right for you? Complete head-to-head comparison of costs, culture, food, safety, weather, activities, nightlife, shopping, and visa requirements. Budget breakdowns in MAD with practical tips for 2026.',
  keywords: [
    'Morocco vs Egypt',
    'Morocco or Egypt',
    'Morocco Egypt comparison',
    'North Africa travel',
    'Morocco vs Egypt cost',
    'Morocco vs Egypt safety',
    'Morocco vs Egypt food',
    'Morocco vs Egypt weather',
    'Morocco vs Egypt activities',
    'should I visit Morocco or Egypt',
    'Morocco Egypt budget comparison',
    'Morocco vs Egypt 2026',
    'best North Africa destination',
    'Morocco travel guide',
    'Egypt travel guide',
    'Morocco vs Egypt beaches',
    'Morocco vs Egypt desert',
    'Morocco vs Egypt nightlife',
    'Morocco vs Egypt visa',
    'Morocco vs Egypt best time to visit',
  ],
  openGraph: {
    title: 'Morocco vs Egypt 2026 | Honest Comparison Guide for Travelers',
    description:
      'Complete head-to-head comparison: costs, culture, food, safety, weather, activities, and more. Find out which North African destination suits your travel style.',
    url: `${BASE_URL}/morocco-vs-egypt`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-landscape.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Moroccan landscape with Atlas Mountains and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco vs Egypt 2026 | Which Should You Visit?',
    description:
      'Head-to-head comparison of costs, culture, food, safety, weather, and activities. The honest guide to choosing between Morocco and Egypt.',
    images: [`${BASE_URL}/images/hero-morocco-landscape.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-vs-egypt` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-vs-egypt`,
  name: 'Morocco vs Egypt 2026 | Honest Comparison Guide for Travelers',
  description:
    'Complete head-to-head comparison of Morocco and Egypt covering costs, culture, food, safety, weather, activities, nightlife, shopping, and visa requirements for 2026 travelers.',
  url: `${BASE_URL}/morocco-vs-egypt`,
  image: `${BASE_URL}/images/hero-morocco-landscape.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-vs-egypt`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Country', name: 'Morocco' },
    { '@type': 'Country', name: 'Egypt' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco vs Egypt', item: `${BASE_URL}/morocco-vs-egypt` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco or Egypt cheaper for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Egypt is slightly cheaper overall, especially for accommodation and food. However, Morocco offers better value in the mid-range segment with superior riad accommodations and diverse cuisine. A comfortable daily budget in Morocco is from 800 MAD, while Egypt is roughly 15-20% less.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safer than Egypt for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both countries are generally safe for tourists. Morocco ranks slightly higher on global safety indices for tourism. Both require standard travel precautions. Morocco has a well-developed tourist police force, and violent crime against tourists is extremely rare in both countries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which has better food: Morocco or Egypt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is widely considered to have the more diverse and refined cuisine, with tagines, couscous, pastilla, and regional specialties. Egypt has excellent street food including koshari, ful medames, and shawarma. Both offer incredible food experiences at affordable prices.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit both Morocco and Egypt in one trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Direct flights between Casablanca and Cairo take around 4.5 hours and cost from 2,500 MAD one-way. A combined 2-week trip works well: one week in each country. Royal Air Maroc and EgyptAir operate regular connections.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which country has better beaches: Morocco or Egypt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Egypt wins for Red Sea resort beaches with world-class snorkeling and diving. Morocco wins for Atlantic surfing, wild coastal scenery, and Mediterranean coves. Morocco offers more variety while Egypt has clearer, warmer waters year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Morocco vs Egypt?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is best from March to May and September to November. Egypt is best from October to April when temperatures are moderate. Summer (June-August) is uncomfortably hot in both countries, especially inland. Morocco has a cooler coast year-round.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: HEAD-TO-HEAD COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonTable = [
  {
    category: 'Daily Budget (Comfortable)',
    morocco: 'From 800 MAD / ~$80 USD',
    egypt: 'From 650 MAD / ~$65 USD',
    winner: 'egypt',
    icon: DollarSign,
  },
  {
    category: 'Hostel / Budget Stay',
    morocco: 'From 120 MAD / night',
    egypt: 'From 90 MAD / night',
    winner: 'egypt',
    icon: Building,
  },
  {
    category: 'Mid-Range Hotel / Riad',
    morocco: 'From 500 MAD / night',
    egypt: 'From 400 MAD / night',
    winner: 'tie',
    icon: Star,
  },
  {
    category: 'Street Food Meal',
    morocco: 'From 25 MAD',
    egypt: 'From 15 MAD',
    winner: 'egypt',
    icon: Utensils,
  },
  {
    category: 'Restaurant Meal (Mid-Range)',
    morocco: 'From 80 MAD',
    egypt: 'From 60 MAD',
    winner: 'egypt',
    icon: Utensils,
  },
  {
    category: 'Food Quality & Variety',
    morocco: 'Diverse, refined, regional specialties',
    egypt: 'Excellent street food, fewer fine dining options',
    winner: 'morocco',
    icon: Award,
  },
  {
    category: 'Historical Sites',
    morocco: 'Medinas, kasbahs, Roman ruins',
    egypt: 'Pyramids, temples, pharaonic monuments',
    winner: 'egypt',
    icon: Landmark,
  },
  {
    category: 'Cultural Diversity',
    morocco: 'Arab, Berber, Andalusian, French, African',
    egypt: 'Ancient Egyptian, Coptic, Islamic, Nubian',
    winner: 'morocco',
    icon: Globe,
  },
  {
    category: 'Desert Experience',
    morocco: 'Sahara dunes (Merzouga, Zagora)',
    egypt: 'Western Desert, White Desert, Siwa',
    winner: 'tie',
    icon: Sun,
  },
  {
    category: 'Beaches',
    morocco: 'Atlantic surf, Mediterranean coves',
    egypt: 'Red Sea resorts, world-class diving',
    winner: 'tie',
    icon: Waves,
  },
  {
    category: 'Mountains & Trekking',
    morocco: 'Atlas Mountains, Toubkal (4,167m)',
    egypt: 'Mount Sinai (2,285m), limited trekking',
    winner: 'morocco',
    icon: Mountain,
  },
  {
    category: 'Nightlife',
    morocco: 'Marrakech and Casablanca clubs',
    egypt: 'Cairo nightlife, Sharm el-Sheikh',
    winner: 'tie',
    icon: Moon,
  },
  {
    category: 'Shopping & Souks',
    morocco: 'Legendary souks, artisan crafts',
    egypt: 'Khan el-Khalili, papyrus, spices',
    winner: 'morocco',
    icon: ShoppingBag,
  },
  {
    category: 'Safety',
    morocco: 'Very safe, tourist police',
    egypt: 'Generally safe, some restricted zones',
    winner: 'morocco',
    icon: ShieldCheck,
  },
  {
    category: 'Ease of Travel',
    morocco: 'Good trains, buses, internal flights',
    egypt: 'Trains, domestic flights, Nile cruises',
    winner: 'tie',
    icon: Plane,
  },
  {
    category: 'Weather Comfort',
    morocco: 'Mediterranean and Atlantic moderation',
    egypt: 'Hot desert climate, mild winters',
    winner: 'morocco',
    icon: Thermometer,
  },
  {
    category: 'Visa (US/EU Citizens)',
    morocco: '90 days visa-free',
    egypt: 'e-Visa or visa on arrival required',
    winner: 'morocco',
    icon: BookOpen,
  },
  {
    category: 'Photography',
    morocco: 'Colorful medinas, mountains, coast',
    egypt: 'Iconic monuments, Nile, desert',
    winner: 'tie',
    icon: Camera,
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  {
    tier: 'Backpacker',
    icon: Compass,
    morocco: {
      daily: 'From 400 MAD',
      accommodation: 'From 120 MAD (hostel dorm)',
      food: 'From 100 MAD (street food and markets)',
      transport: 'From 80 MAD (buses, shared taxis)',
      activities: 'From 100 MAD (free medinas, budget tours)',
    },
    egypt: {
      daily: 'From 300 MAD equivalent',
      accommodation: 'From 90 MAD (hostel dorm)',
      food: 'From 60 MAD (street food)',
      transport: 'From 70 MAD (buses, metro)',
      activities: 'From 80 MAD (some sites have high entry fees)',
    },
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    morocco: {
      daily: 'From 800 MAD',
      accommodation: 'From 500 MAD (riad or boutique hotel)',
      food: 'From 150 MAD (restaurants and cafes)',
      transport: 'From 50 MAD (trains, comfortable buses)',
      activities: 'From 100 MAD (guided tours, entrance fees)',
    },
    egypt: {
      daily: 'From 650 MAD equivalent',
      accommodation: 'From 400 MAD (3-4 star hotel)',
      food: 'From 100 MAD (restaurants)',
      transport: 'From 50 MAD (taxis, trains)',
      activities: 'From 100 MAD (temple entries, guides)',
    },
  },
  {
    tier: 'Luxury',
    icon: Crown,
    morocco: {
      daily: 'From 3,000 MAD',
      accommodation: 'From 2,000 MAD (luxury riad or 5-star)',
      food: 'From 500 MAD (fine dining)',
      transport: 'From 200 MAD (private drivers)',
      activities: 'From 300 MAD (private guides, exclusive experiences)',
    },
    egypt: {
      daily: 'From 2,500 MAD equivalent',
      accommodation: 'From 1,800 MAD (5-star hotel or Nile cruise)',
      food: 'From 350 MAD (fine dining)',
      transport: 'From 150 MAD (private driver)',
      activities: 'From 200 MAD (private Egyptologist guides)',
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT EACH COUNTRY DOES BETTER
   ═══════════════════════════════════════════════════════════════ */

const moroccoWins = [
  {
    title: 'Diverse Landscapes',
    icon: Mountain,
    description:
      'Within a single country you get Atlantic coastline, Mediterranean beaches, the High Atlas Mountains at 4,167 meters, Sahara sand dunes, lush valleys, and cedar forests. Egypt is predominantly desert with the Nile corridor.',
  },
  {
    title: 'Food & Culinary Culture',
    icon: Utensils,
    description:
      'Moroccan cuisine is among the most celebrated in the world. Tagines, couscous, pastilla, harira, and regional specialties from Fes, Marrakech, and the coast offer extraordinary variety. The food alone is worth the trip.',
  },
  {
    title: 'Artisan Crafts & Shopping',
    icon: ShoppingBag,
    description:
      'Morocco\'s souks are legendary. Hand-woven carpets, leather goods from the tanneries of Fes, zellige tilework, argan oil, brass lanterns, and Berber jewelry are authentic crafts you will not find anywhere else.',
  },
  {
    title: 'Accommodation Charm',
    icon: Building,
    description:
      'The Moroccan riad experience is unique in the world. Staying in a centuries-old courtyard house with zellige tilework, fountain gardens, and rooftop terraces is unlike any hotel. Riads start from 500 MAD per night.',
  },
  {
    title: 'Trekking & Adventure',
    icon: Compass,
    description:
      'The Atlas Mountains offer world-class trekking, including Mount Toubkal, North Africa\'s highest peak. Multi-day treks through Berber villages, gorge walks in the Todra and Dades gorges, and surfing on the Atlantic coast.',
  },
  {
    title: 'Moderate Climate',
    icon: Thermometer,
    description:
      'Morocco\'s Atlantic and Mediterranean coasts keep temperatures moderate year-round. Essaouira rarely exceeds 28 degrees Celsius even in summer. Egypt\'s inland temperatures regularly surpass 40 degrees Celsius in summer.',
  },
  {
    title: 'Visa-Free Entry',
    icon: BookOpen,
    description:
      'US, EU, UK, Canadian, and Australian citizens get 90 days visa-free in Morocco. No pre-arrangement needed. Egypt requires an e-Visa or visa on arrival, adding an extra step and from 250 MAD in fees.',
  },
  {
    title: 'Wine & Nightlife Freedom',
    icon: Moon,
    description:
      'Morocco produces its own wine and has a more relaxed attitude toward alcohol in tourist areas. Bars, rooftop lounges, and nightclubs in Marrakech and Casablanca are vibrant. Egypt has more restrictions on alcohol availability.',
  },
];

const egyptWins = [
  {
    title: 'Ancient Monuments',
    icon: Landmark,
    description:
      'The Pyramids of Giza, the Sphinx, Luxor Temple, Valley of the Kings, Abu Simbel, and Karnak are among the most awe-inspiring archaeological sites on Earth. Nothing in Morocco compares to the sheer scale and age of these monuments.',
  },
  {
    title: 'Budget-Friendliness',
    icon: DollarSign,
    description:
      'Egypt is 15-20% cheaper than Morocco on average. Street food, accommodation, and local transport are all more affordable. A comfortable day in Egypt costs roughly from 650 MAD equivalent versus from 800 MAD in Morocco.',
  },
  {
    title: 'Red Sea Diving & Snorkeling',
    icon: Waves,
    description:
      'The Red Sea has some of the best diving and snorkeling on the planet. Crystal-clear warm water, vibrant coral reefs, and marine life including dolphins, sea turtles, and whale sharks. Sharm el-Sheikh and Hurghada are world-class dive destinations.',
  },
  {
    title: 'Nile River Cruises',
    icon: Compass,
    description:
      'A multi-day cruise down the Nile from Luxor to Aswan is a bucket-list experience. Sailing past ancient temples on a traditional felucca or luxury cruise ship is something Morocco simply cannot replicate.',
  },
  {
    title: 'Iconic Photography',
    icon: Camera,
    description:
      'The Pyramids at sunrise, the temples of Luxor at sunset, the Nile at golden hour. Egypt offers some of the most instantly recognizable and iconic photography locations anywhere in the world.',
  },
  {
    title: 'Museum Collections',
    icon: Building,
    description:
      'The Grand Egyptian Museum in Giza (opened 2024) is the largest archaeological museum in the world. King Tutankhamun\'s complete treasure collection and thousands of artifacts spanning millennia are housed here.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMBINING BOTH COUNTRIES
   ═══════════════════════════════════════════════════════════════ */

const combinedItinerary = [
  {
    day: 'Days 1-3',
    location: 'Marrakech, Morocco',
    icon: Star,
    highlights: 'Jemaa el-Fnaa, souks, Bahia Palace, Majorelle Garden, hammam experience, Moroccan cuisine',
  },
  {
    day: 'Days 4-5',
    location: 'Sahara Desert, Morocco',
    icon: Sun,
    highlights: 'Camel trek to Merzouga dunes, overnight in desert camp, sunrise over the Sahara, Todra Gorge',
  },
  {
    day: 'Days 6-7',
    location: 'Fes, Morocco',
    icon: Building,
    highlights: 'World\'s oldest medina, Chouara tanneries, Al-Qarawiyyin, Bou Inania Madrasa, Fassi cuisine',
  },
  {
    day: 'Day 8',
    location: 'Fly Casablanca to Cairo',
    icon: Plane,
    highlights: 'From 2,500 MAD one-way on Royal Air Maroc or EgyptAir. Flight time approximately 4.5 hours',
  },
  {
    day: 'Days 8-10',
    location: 'Cairo, Egypt',
    icon: Landmark,
    highlights: 'Pyramids of Giza, Sphinx, Grand Egyptian Museum, Khan el-Khalili bazaar, Islamic Cairo',
  },
  {
    day: 'Days 11-13',
    location: 'Luxor & Aswan, Egypt',
    icon: Compass,
    highlights: 'Valley of the Kings, Karnak Temple, Nile felucca cruise, Abu Simbel day trip, Philae Temple',
  },
  {
    day: 'Day 14',
    location: 'Departure',
    icon: Plane,
    highlights: 'Fly home from Cairo or Luxor. Consider a Red Sea extension if time permits',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEATHER COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const weatherComparison = [
  {
    season: 'Spring (Mar-May)',
    morocco: 'Ideal. 18-28 degrees C. Wildflowers in the Atlas. Perfect for trekking and city exploration.',
    egypt: 'Good but warming fast. 22-35 degrees C. Khamseen (hot desert wind) possible in March-April.',
    bestFor: 'Morocco',
  },
  {
    season: 'Summer (Jun-Aug)',
    morocco: 'Hot inland (35-45 degrees C in Marrakech). Coast stays pleasant (22-28 degrees C in Essaouira).',
    egypt: 'Extremely hot (38-48 degrees C). Sightseeing is exhausting. Red Sea coast is bearable.',
    bestFor: 'Morocco',
  },
  {
    season: 'Autumn (Sep-Nov)',
    morocco: 'Ideal. 20-30 degrees C. Warm seas, comfortable cities. Best overall season.',
    egypt: 'Good. Cooling from October. 25-35 degrees C. Good for sightseeing once heat breaks.',
    bestFor: 'Tie',
  },
  {
    season: 'Winter (Dec-Feb)',
    morocco: 'Mild coast (15-20 degrees C). Cold mountains with snow. Rain possible in north.',
    egypt: 'Perfect for sightseeing (15-25 degrees C). Nile cruises at their best. Cool desert nights.',
    bestFor: 'Egypt',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Is Morocco or Egypt cheaper for tourists in 2026?',
    answer:
      'Egypt is approximately 15-20% cheaper than Morocco for budget and mid-range travelers. Street food in Egypt costs from 15 MAD equivalent versus from 25 MAD in Morocco, and budget accommodation is from 90 MAD versus from 120 MAD. However, Morocco offers better value in the mid-range segment, particularly with riad accommodations that have no equivalent in Egypt. For luxury travel, both countries offer excellent value compared to Europe.',
  },
  {
    question: 'Is Morocco safer than Egypt for solo female travelers?',
    answer:
      'Both countries require awareness, but Morocco has invested heavily in tourist safety infrastructure. Tourist police are present in all major cities, and violent crime against visitors is extremely rare. Solo female travelers report that Morocco can involve more street harassment in some areas, but the situation has improved significantly. Egypt has similar challenges in busy tourist areas. In both countries, modest dress helps, and organized tours provide an extra layer of comfort for solo travelers.',
  },
  {
    question: 'Which has better food: Morocco or Egypt?',
    answer:
      'Morocco is widely considered to have one of the world\'s great cuisines. The diversity of tagines, couscous preparations, pastilla, harira soup, and regional specialties is extraordinary. Egyptian food is more street-food oriented, with excellent koshari, ful medames, shawarma, and kofta. Morocco wins on fine dining and variety; Egypt wins on cheap, filling street food. A restaurant meal in Morocco costs from 80 MAD versus from 60 MAD in Egypt.',
  },
  {
    question: 'Can I visit both Morocco and Egypt in one trip?',
    answer:
      'Absolutely. Direct flights between Casablanca and Cairo take approximately 4.5 hours and cost from 2,500 MAD one-way. Royal Air Maroc and EgyptAir operate regular connections. A two-week itinerary splitting one week per country works perfectly. Start in Morocco (Marrakech, desert, Fes) then fly to Egypt (Cairo, Luxor, Aswan). No separate visa is needed for Morocco (visa-free for most nationalities), and Egypt offers e-Visas or visas on arrival.',
  },
  {
    question: 'Which country is better for families with children?',
    answer:
      'Morocco is slightly better for families due to its moderate climate, diverse activities, and family-friendly riad accommodations. Children love camel rides in the Sahara, splashing on Atlantic beaches, and exploring the colorful souks. Egypt can be challenging with very young children due to extreme heat (especially in summer) and the distances between major sites. However, older children fascinated by ancient Egypt will find the Pyramids and temples unforgettable.',
  },
  {
    question: 'What is the best time to visit Morocco versus Egypt?',
    answer:
      'Morocco is best in spring (March to May) and autumn (September to November) when temperatures are comfortable across the entire country. Egypt is best in winter (October to April) when the oppressive summer heat has broken. Avoid both countries in July and August if possible. If you must visit in summer, Morocco\'s Atlantic coast (Essaouira, Agadir) stays pleasant, while Egypt\'s Red Sea coast (Hurghada, Sharm el-Sheikh) is bearable for beach holidays.',
  },
  {
    question: 'Do I need a visa for Morocco and Egypt?',
    answer:
      'Morocco grants visa-free entry for 90 days to citizens of the US, EU, UK, Canada, Australia, and many other countries. Simply show up with a valid passport. Egypt requires a visa: US and EU citizens can get an e-Visa online (from 250 MAD equivalent) or a visa on arrival at Egyptian airports. The e-Visa is recommended to avoid airport queues. Both countries require a passport valid for at least six months beyond your entry date.',
  },
  {
    question: 'Which has better shopping: Morocco or Egypt?',
    answer:
      'Morocco wins decisively for shopping. The souks of Marrakech and Fes are among the world\'s great marketplaces, offering hand-woven carpets, leather goods, argan oil, ceramics, brass lanterns, Berber jewelry, and spices. Egypt\'s Khan el-Khalili bazaar is atmospheric but more oriented toward mass-produced souvenirs. Moroccan crafts tend to be more authentic and higher quality. Expect to haggle in both countries; starting at 30-50% of the asking price is standard.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVsEgyptPage() {
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
            backgroundImage: 'url(/images/hero-morocco-landscape.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco vs Egypt</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            Destination Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco vs Egypt:
            <br className="hidden md:block" /> Which Should You Visit in 2026?
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The honest head-to-head comparison. Costs, culture, food, safety, weather,
            activities, and everything else you need to choose between North Africa&apos;s
            two greatest destinations.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Two Giants of North Africa
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco and Egypt are the two most popular destinations in North Africa, and for good
                reason. Both offer ancient cultures, warm hospitality, incredible food, and experiences
                you cannot find anywhere else on Earth. But they are very different countries, and
                choosing between them depends on what kind of traveler you are.
              </p>
              <p>
                Morocco gives you the sensory overload of Marrakech&apos;s souks, the silence of the
                Sahara, the peaks of the Atlas Mountains, Atlantic surf, and one of the world&apos;s
                greatest cuisines. Egypt gives you the Pyramids, the Nile, the Red Sea, and 5,000
                years of civilization carved into stone.
              </p>
              <p>
                This guide compares them head-to-head across every dimension that matters to travelers:
                cost, culture, food, safety, weather, activities, nightlife, shopping, and logistics.
                We will be honest about where each country excels and where it falls short.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Head-to-Head Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Head-to-Head Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How Morocco and Egypt compare across 18 key categories that matter most to travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are in MAD or MAD equivalent. Prices reflect 2026 mid-season rates for comfortable travel.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Morocco</div>
                <div className="p-3 px-4">Egypt</div>
                <div className="p-3 px-4 text-center">Edge</div>
              </div>
              {comparisonTable.map((row, i) => {
                const RowIcon = row.icon;
                return (
                  <div
                    key={row.category}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <RowIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 hidden md:block" />
                      {row.category}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'morocco' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.morocco}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'egypt' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.egypt}
                    </div>
                    <div className="p-3 px-4 text-center">
                      {row.winner === 'morocco' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                          <CheckCircle className="w-3.5 h-3.5" /> Morocco
                        </span>
                      )}
                      {row.winner === 'egypt' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
                          <CircleDot className="w-3.5 h-3.5" /> Egypt
                        </span>
                      )}
                      {row.winner === 'tie' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)]">
                          <Scale className="w-3.5 h-3.5" /> Tie
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Breakdown by Travel Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you will actually spend per day in each country, broken down by travel style from backpacker to luxury.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tier.tier}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                      <h4 className="text-sm font-semibold text-[var(--color-accent)] mb-3 flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" /> Morocco
                      </h4>
                      <div className="text-xl font-bold text-[var(--text-primary)] mb-2">{tier.morocco.daily}<span className="text-sm font-normal text-[var(--text-muted)]"> / day</span></div>
                      <div className="space-y-1 text-xs text-[var(--text-secondary)]">
                        <p><span className="font-medium">Stay:</span> {tier.morocco.accommodation}</p>
                        <p><span className="font-medium">Food:</span> {tier.morocco.food}</p>
                        <p><span className="font-medium">Transport:</span> {tier.morocco.transport}</p>
                        <p><span className="font-medium">Activities:</span> {tier.morocco.activities}</p>
                      </div>
                    </div>

                    <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                      <h4 className="text-sm font-semibold text-[var(--text-muted)] mb-3 flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" /> Egypt
                      </h4>
                      <div className="text-xl font-bold text-[var(--text-primary)] mb-2">{tier.egypt.daily}<span className="text-sm font-normal text-[var(--text-muted)]"> / day</span></div>
                      <div className="space-y-1 text-xs text-[var(--text-secondary)]">
                        <p><span className="font-medium">Stay:</span> {tier.egypt.accommodation}</p>
                        <p><span className="font-medium">Food:</span> {tier.egypt.food}</p>
                        <p><span className="font-medium">Transport:</span> {tier.egypt.transport}</p>
                        <p><span className="font-medium">Activities:</span> {tier.egypt.activities}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Culture & History ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; History
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both countries have extraordinary histories, but the experiences are fundamentally different.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Morocco: A Living Culture
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Morocco&apos;s cultural richness is something you live and breathe rather than observe behind glass.
                The medinas of Fes and Marrakech are UNESCO World Heritage Sites that are still functioning neighborhoods
                where hundreds of thousands of people live, work, and trade. The souk artisans making leather goods in Fes
                use techniques unchanged for a thousand years. Berber communities in the Atlas Mountains maintain traditions
                dating back millennia. You eat the culture, hear it in the call to prayer, feel it in the hammam,
                and see it in the zellige tilework on every surface.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Medinas of Fes and Marrakech', 'Berber villages', 'Hammam rituals', 'Artisan souks', 'Andalusian architecture', 'Gnawa music'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-muted)] mb-3">
                Egypt: Ancient Monuments
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Egypt&apos;s cultural draw is primarily its ancient heritage. The Pyramids of Giza are 4,500 years old
                and remain one of the Seven Wonders of the Ancient World. The Valley of the Kings, Karnak Temple, and
                Abu Simbel are staggering in scale. The Grand Egyptian Museum, opened in 2024, houses the world&apos;s
                largest collection of pharaonic artifacts. Modern Egyptian culture is vibrant too, with a thriving
                music scene, Coptic Christian heritage, and bustling Cairo street life, but most visitors come for
                the ancient sites.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Pyramids of Giza', 'Valley of the Kings', 'Karnak Temple', 'Abu Simbel', 'Grand Egyptian Museum', 'Islamic Cairo'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)]">
                    <CircleDot className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Food Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food: The Decisive Factor for Many Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both countries offer incredible flavors, but the dining experiences are very different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Star className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Moroccan Cuisine
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Widely ranked among the world&apos;s top cuisines. Moroccan cooking is slow, layered,
                and uses dozens of spices in careful combination.
              </p>
              <div className="space-y-2">
                {[
                  { dish: 'Tagine', price: 'From 40 MAD', desc: 'Slow-cooked stews in iconic conical pots' },
                  { dish: 'Couscous Friday', price: 'From 50 MAD', desc: 'The sacred weekly family meal' },
                  { dish: 'Pastilla', price: 'From 35 MAD', desc: 'Sweet and savory flaky pastry' },
                  { dish: 'Harira', price: 'From 10 MAD', desc: 'Rich tomato and lentil soup' },
                  { dish: 'Mechoui', price: 'From 80 MAD', desc: 'Slow-roasted whole lamb' },
                  { dish: 'Mint Tea', price: 'From 10 MAD', desc: 'The national drink and social ritual' },
                ].map((item) => (
                  <div key={item.dish} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                    <div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.dish}</span>
                      <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                  <Coffee className="w-4 h-4 text-[var(--text-muted)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-muted)]">
                  Egyptian Cuisine
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                Hearty, filling, and incredibly affordable. Egyptian food is comfort food at its finest,
                with a strong street food culture.
              </p>
              <div className="space-y-2">
                {[
                  { dish: 'Koshari', price: 'From 15 MAD eq.', desc: 'National dish: rice, lentils, pasta, tomato' },
                  { dish: 'Ful Medames', price: 'From 10 MAD eq.', desc: 'Slow-cooked fava beans, breakfast staple' },
                  { dish: 'Shawarma', price: 'From 20 MAD eq.', desc: 'Spit-roasted meat in pita bread' },
                  { dish: 'Molokhia', price: 'From 25 MAD eq.', desc: 'Green soup served over rice with chicken' },
                  { dish: 'Kofta', price: 'From 30 MAD eq.', desc: 'Spiced minced meat, grilled on skewers' },
                  { dish: 'Turkish Coffee', price: 'From 8 MAD eq.', desc: 'Strong, sweet, served in tiny cups' },
                ].map((item) => (
                  <div key={item.dish} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                    <div>
                      <span className="text-sm font-medium text-[var(--text-primary)]">{item.dish}</span>
                      <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                    </div>
                    <span className="text-xs font-semibold text-[var(--text-muted)] shrink-0 ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Verdict on Food
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Morocco wins on culinary diversity, fine dining, and overall food quality. The tagine alone
              has hundreds of variations across regions. Egypt wins on affordability and street food
              convenience. If food is a major motivation for your trip, Morocco is the clear choice.
              A food tour in Marrakech costs from 350 MAD and is one of the best culinary experiences in
              North Africa.
            </p>
          </div>
        </div>
      </section>

      {/* ── Weather Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Weather &amp; Best Time to Visit
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Climate is a major factor. Morocco has more variety; Egypt has more extremes.
          </p>

          <div className="max-w-4xl mx-auto space-y-6">
            {weatherComparison.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {season.season}
                  </h3>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    season.bestFor === 'Morocco'
                      ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                      : season.bestFor === 'Egypt'
                        ? 'bg-[var(--surface-muted)] text-[var(--text-muted)]'
                        : 'bg-[var(--color-gold)]/10 text-[var(--color-gold)]'
                  }`}>
                    Best: {season.bestFor}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-semibold text-[var(--color-accent)]">Morocco</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{season.morocco}</p>
                  </div>
                  <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Sun className="w-4 h-4 text-[var(--text-muted)]" />
                      <span className="text-sm font-semibold text-[var(--text-muted)]">Egypt</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{season.egypt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety &amp; Ease of Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both countries welcome millions of tourists annually. Here is what to expect on the ground.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                <ShieldCheck className="w-5 h-5 inline mr-1" /> Morocco
              </h3>
              <div className="space-y-3">
                {[
                  'Tourist police present in all major cities',
                  'Violent crime against tourists is extremely rare',
                  'Well-developed train network (ONCF) linking major cities',
                  'High-speed TGV train: Casablanca to Tangier in 2 hours',
                  'CTM and Supratours buses cover the entire country',
                  'Internal flights between major cities from 400 MAD',
                  'Visa-free entry for 90 days (most nationalities)',
                  'French and Arabic widely spoken; English in tourist areas',
                  'Petty crime (pickpocketing) in souks requires vigilance',
                  'Scams: fake guides, overcharging taxis (use Careem app)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-muted)] mb-4">
                <ShieldCheck className="w-5 h-5 inline mr-1" /> Egypt
              </h3>
              <div className="space-y-3">
                {[
                  'Tourist police at major archaeological sites',
                  'Generally safe; some areas require guided visits only',
                  'Cairo metro system efficient but crowded',
                  'Domestic flights connect Cairo, Luxor, Aswan, Hurghada',
                  'Nile cruises are a transport and tourism experience combined',
                  'Long-distance trains between Cairo and Luxor/Aswan',
                  'e-Visa or visa on arrival required (from 250 MAD equivalent)',
                  'Arabic primary; English at tourist sites and hotels',
                  'Aggressive touts and taxi drivers at tourist spots',
                  'Some restricted zones near borders (Sinai checkpoints)',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CircleDot className="w-4 h-4 text-[var(--text-muted)] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Activities Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Activities &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From desert treks to underwater adventures, both countries pack in extraordinary experiences.
          </p>

          <div className="space-y-6">
            {[
              {
                activity: 'Desert Experience',
                icon: Sun,
                morocco: 'Sahara sand dunes at Merzouga and Zagora. Camel treks, overnight camps under the stars, 4x4 adventures, and sandboarding. The Erg Chebbi dunes reach 150 meters high. Two-day desert tours cost from 800 MAD.',
                egypt: 'Western Desert, White Desert, and Siwa Oasis. Less touristy, more remote. White Desert has surreal chalk formations. Black Desert and Crystal Mountain are unique. Two-day tours from 600 MAD equivalent.',
              },
              {
                activity: 'Beaches & Water',
                icon: Waves,
                morocco: 'Atlantic surfing at Taghazout and Essaouira. Mediterranean beaches near Al Hoceima. Kitesurfing at Dakhla. Wild, rugged coastlines. Water is cooler (18-23 degrees C). Surf lessons from 300 MAD.',
                egypt: 'Red Sea world-class diving and snorkeling. Warm, crystal-clear water (24-30 degrees C). Coral reefs, dolphins, sea turtles. Sharm el-Sheikh and Hurghada are resort hubs. Dive courses from 2,000 MAD equivalent.',
              },
              {
                activity: 'Mountains & Trekking',
                icon: Mountain,
                morocco: 'Atlas Mountains offer exceptional trekking. Mount Toubkal (4,167m) is North Africa\'s highest peak, summitable in 2 days. Multi-day treks through Berber villages. Gorge walks in Todra and Dades. Trek guides from 500 MAD per day.',
                egypt: 'Mount Sinai (2,285m) is a spiritual trek with sunrise views from the summit. Limited other trekking. Red Sea Mountains offer some hiking. Overall, Morocco is far superior for mountain activities.',
              },
              {
                activity: 'City Exploration',
                icon: Building,
                morocco: 'Marrakech, Fes, Chefchaouen, Essaouira, Tangier. Each city has a distinct character. Getting lost in the medinas is the point. Colorful, chaotic, and endlessly photogenic. Guided medina tours from 200 MAD.',
                egypt: 'Cairo is overwhelming and fascinating. Islamic Cairo, Coptic Cairo, and modern Cairo are three different worlds. Luxor is an open-air museum. Alexandria has Mediterranean charm. Cairo city tours from 150 MAD equivalent.',
              },
              {
                activity: 'Nightlife & Entertainment',
                icon: Moon,
                morocco: 'Marrakech has Africa\'s best nightlife scene. Rooftop bars, nightclubs, live music venues. Casablanca has sophisticated lounge culture. Moroccan wine available. Jemaa el-Fnaa is nightly street entertainment. Entry to clubs from 100 MAD.',
                egypt: 'Cairo has a vibrant nightlife with river cruise parties and upscale bars. Sharm el-Sheikh has resort nightlife. Alcohol more restricted but available in hotels and licensed restaurants. Cairo Nile dinner cruises from 350 MAD equivalent.',
              },
            ].map((item) => {
              const ActivityIcon = item.icon;
              return (
                <div key={item.activity} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    {item.activity}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-[var(--color-accent)]">Morocco</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.morocco}</p>
                    </div>
                    <div className="p-4 bg-[var(--surface-muted)] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-[var(--text-muted)]" />
                        <span className="text-sm font-semibold text-[var(--text-muted)]">Egypt</span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{item.egypt}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Choose Morocco If... ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Choose Morocco If...
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is the better choice when these priorities match your travel style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {moroccoWins.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Choose Egypt If... ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDot className="w-8 h-8 inline-block text-[var(--text-muted)] mr-2" />
            Choose Egypt If...
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Egypt is the better choice when these are your top priorities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {egyptWins.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ItemIcon className="w-5 h-5 text-[var(--text-muted)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Shopping Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Shopping &amp; Souks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has one of the world&apos;s greatest shopping cultures. Here is what to expect in each country.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Morocco&apos;s Souks
              </h3>
              <div className="space-y-3">
                {[
                  { item: 'Hand-woven Berber carpets', price: 'From 500 MAD' },
                  { item: 'Leather goods (bags, jackets)', price: 'From 200 MAD' },
                  { item: 'Argan oil (cosmetic grade)', price: 'From 80 MAD' },
                  { item: 'Ceramic tagine pot', price: 'From 50 MAD' },
                  { item: 'Brass lanterns', price: 'From 150 MAD' },
                  { item: 'Berber silver jewelry', price: 'From 100 MAD' },
                  { item: 'Zellige mosaic mirrors', price: 'From 120 MAD' },
                  { item: 'Spice selections', price: 'From 30 MAD' },
                ].map((product) => (
                  <div key={product.item} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">{product.item}</span>
                    <span className="text-[var(--color-accent)] font-semibold shrink-0 ml-2">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-muted)] mb-4">
                Egypt&apos;s Markets
              </h3>
              <div className="space-y-3">
                {[
                  { item: 'Papyrus paintings', price: 'From 50 MAD eq.' },
                  { item: 'Alabaster vases', price: 'From 80 MAD eq.' },
                  { item: 'Perfume oils and essences', price: 'From 40 MAD eq.' },
                  { item: 'Egyptian cotton products', price: 'From 100 MAD eq.' },
                  { item: 'Cartouche jewelry (gold/silver)', price: 'From 150 MAD eq.' },
                  { item: 'Spice blends (duqqa)', price: 'From 20 MAD eq.' },
                  { item: 'Shisha pipes', price: 'From 60 MAD eq.' },
                  { item: 'Khan el-Khalili souvenirs', price: 'From 30 MAD eq.' },
                ].map((product) => (
                  <div key={product.item} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">{product.item}</span>
                    <span className="text-[var(--text-muted)] font-semibold shrink-0 ml-2">{product.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa Requirements ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa Requirements
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco wins on visa convenience. Here is what each country requires by nationality.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Nationality</div>
                <div className="p-3 px-4">Morocco</div>
                <div className="p-3 px-4">Egypt</div>
              </div>
              {[
                { nationality: 'US Citizens', morocco: '90 days visa-free', egypt: 'e-Visa or visa on arrival' },
                { nationality: 'EU Citizens', morocco: '90 days visa-free', egypt: 'e-Visa or visa on arrival' },
                { nationality: 'UK Citizens', morocco: '90 days visa-free', egypt: 'e-Visa or visa on arrival' },
                { nationality: 'Canadian Citizens', morocco: '90 days visa-free', egypt: 'e-Visa or visa on arrival' },
                { nationality: 'Australian Citizens', morocco: '90 days visa-free', egypt: 'e-Visa or visa on arrival' },
                { nationality: 'Indian Citizens', morocco: 'Visa required', egypt: 'e-Visa available' },
              ].map((row, i) => (
                <div
                  key={row.nationality}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.nationality}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{row.morocco}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{row.egypt}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              Egypt e-Visa costs approximately from 250 MAD equivalent. Passport must be valid for 6+ months for both countries.
            </p>
          </div>
        </div>
      </section>

      {/* ── Combining Both Countries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Not Both? The 2-Week Combined Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            If you have two weeks, you can experience the best of both countries. Here is a suggested itinerary.
          </p>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

            <div className="space-y-6">
              {combinedItinerary.map((stop) => {
                const StopIcon = stop.icon;
                return (
                  <div key={stop.day} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <StopIcon className="w-5 h-5 text-white" />
                    </div>
                    <div className="card-moroccan p-5 flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {stop.location}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)] shrink-0 ml-4 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {stop.day}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{stop.highlights}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Combined Trip Budget
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A 14-day combined Morocco and Egypt trip at mid-range comfort costs approximately from 12,000 MAD
              total including flights between countries. This covers accommodation, food, transport, activities, and the
              inter-country flight. Backpackers can do it from 7,000 MAD; luxury travelers should budget from 40,000 MAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Both Countries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Haggling
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Both countries have a haggling culture in markets. Start at 30-50% of the asking price in
                Morocco and 25-40% in Egypt. Be friendly, be willing to walk away, and remember that the
                final price should feel fair to both sides. Fixed-price shops exist in both countries for
                those who prefer not to negotiate.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Culture
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Tipping is expected in both countries. In Morocco, tip from 10-20 MAD for small services,
                10-15% at restaurants, and from 50-100 MAD per day for guides. Egypt has a similar culture
                called &quot;baksheesh&quot; where small tips are expected for almost any service rendered.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dress Code
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Both are Muslim-majority countries. Modest dress is respectful, especially when visiting
                religious sites. Cover shoulders and knees. Morocco is slightly more relaxed in tourist
                areas and beach towns. Egypt expects more conservative dress outside resort areas.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Language
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco: Arabic and Amazigh are official languages. French is widely spoken. English is
                growing, especially among younger Moroccans and in tourist areas. Egypt: Arabic is the
                primary language. English is spoken at hotels, tourist sites, and by guides.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Ramadan Considerations
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Both countries observe Ramadan. Many restaurants close during daytime fasting hours,
                though tourist establishments often remain open. Ramadan is a beautiful time to visit
                for cultural immersion, but plan around adjusted hours. Iftar meals are special communal
                experiences in both countries.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Plane className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Getting There
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco: Main airports are Marrakech (RAK) and Casablanca (CMN). Many direct flights
                from Europe and North America. Egypt: Cairo (CAI) is the main hub, with Hurghada and
                Sharm el-Sheikh serving resort areas. Both countries are well-connected internationally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final Verdict ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Final Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our honest assessment after comparing every dimension.
          </p>

          <div className="card-moroccan p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Morocco wins on overall travel experience.</strong> The
                combination of diverse landscapes, world-class cuisine, unique riad accommodations, vibrant
                souks, and visa-free entry makes it the more well-rounded destination. Morocco rewards
                travelers who love to eat, explore, shop, and immerse themselves in living culture.
              </p>
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">Egypt wins on ancient history and marine life.</strong> If
                seeing the Pyramids and Pharaonic temples is a lifelong dream, or if world-class diving in the
                Red Sea is your priority, Egypt delivers experiences that Morocco simply cannot match. Egypt is
                also 15-20% cheaper overall.
              </p>
              <p className="text-lg">
                <strong className="text-[var(--text-primary)]">The best answer?</strong> Visit both. A two-week
                itinerary splitting one week per country gives you the best of North Africa. Start in Morocco
                for the food, the souks, and the mountains. Then fly to Egypt for the monuments and the Nile.
                You will not regret it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/best-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Time to Visit Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Month-by-month guide to weather, festivals, and the ideal time for your Moroccan adventure.
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
                Detailed cost breakdown for every budget level, from backpacker to luxury traveler.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/sahara-desert" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything about Morocco&apos;s Sahara: camel treks, desert camps, and unforgettable stargazing.
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

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
  DollarSign,
  CheckCircle,
  Users,
  Award,
  Globe,
  Waves,
  Wind,
  Sun,
  Compass,
  Calendar,
  Thermometer,
  Anchor,
  BarChart3,
  GraduationCap,
  Zap,
  CloudSun,
  Navigation,
  BookOpen,
  AlertTriangle,
  TrendingUp,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Kitesurfing Guide 2026 | Dakhla, Essaouira & Best Kite Spots',
  description:
    'Complete guide to kitesurfing in Morocco. Dakhla lagoon, Essaouira, Moulay Bousselham, Sidi Kaouki, Oualidia. Wind conditions, IKO kite schools, equipment rental prices, flat water vs wave spots, and seasonal wind charts for 2026.',
  keywords: [
    'kitesurfing morocco',
    'dakhla kitesurfing',
    'essaouira kitesurfing',
    'morocco kite spots',
    'dakhla lagoon kitesurf',
    'kite school morocco',
    'morocco wind conditions',
    'alize trade winds morocco',
    'kitesurf equipment rental morocco',
    'IKO certification morocco',
    'flat water kitesurfing morocco',
    'wave kitesurfing morocco',
    'moulay bousselham kite',
    'sidi kaouki kitesurf',
    'oualidia kitesurfing',
    'morocco kite season',
    'kite camp dakhla',
    'beginner kitesurfing morocco',
    'morocco wind chart',
    'kitesurf accommodation dakhla',
  ],
  openGraph: {
    title: 'Morocco Kitesurfing Guide 2026 | Dakhla, Essaouira & Best Kite Spots',
    description:
      'Dakhla lagoon, Essaouira, and more: Morocco has 300+ wind days per year and flat-water lagoons that rank among the world\'s best kite destinations. Full guide with wind data, school prices, and gear rental.',
    url: `${BASE_URL}/morocco-kite-surfing`,
    images: [
      {
        url: `${BASE_URL}/images/hero-surfing.webp`,
        width: 1200,
        height: 630,
        alt: 'Kitesurfer riding across the flat turquoise waters of the Dakhla lagoon in Morocco with desert sand dunes in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Kitesurfing Guide 2026 | Dakhla, Essaouira & Top Spots',
    description:
      'Complete kitesurfing guide to Morocco. Dakhla lagoon, Essaouira wind city, IKO schools, gear rental from 500 MAD/day, and seasonal wind charts.',
    images: [`${BASE_URL}/images/hero-surfing.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-kite-surfing` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-kite-surfing`,
  name: 'Morocco Kitesurfing Guide 2026 | Dakhla, Essaouira & Best Kite Spots',
  description:
    'Complete guide to kitesurfing in Morocco. Dakhla lagoon, Essaouira, Moulay Bousselham, Sidi Kaouki, Oualidia. Wind conditions, IKO kite schools, equipment rental, and seasonal wind charts.',
  url: `${BASE_URL}/morocco-kite-surfing`,
  image: `${BASE_URL}/images/hero-surfing.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-kite-surfing`,
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
      { '@type': 'ListItem', position: 2, name: 'Kitesurfing Morocco', item: `${BASE_URL}/morocco-kite-surfing` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the best time to kitesurf in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The prime kitesurfing season runs from April through September when the Alize trade winds blow consistently at 18-30 knots along the Atlantic coast. Essaouira peaks June-August with 25-30 knot afternoon thermals. Dakhla delivers reliable 18-25 knot winds year-round, with 300+ wind days annually. Winter (November-February) still works in Dakhla but Essaouira wind drops below 15 knots most days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dakhla good for beginner kitesurfers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dakhla is one of the best places on Earth to learn kitesurfing. The 40 km lagoon has flat, shallow water (waist-deep for hundreds of meters), steady side-onshore wind, and no waves or current. Multiple IKO-certified schools offer beginner packages from 4,500 MAD for a 3-day course. The consistent wind means fewer cancelled lessons compared to other destinations.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does kite equipment rental cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Full kite equipment rental (kite, bar, harness, board) starts from 500 MAD per day in Dakhla and Essaouira. Weekly rates run from 2,500 MAD. Board-only rental costs from 150 MAD per day. Most schools offer rental discounts for students who completed lessons with them. Bringing your own gear saves money on longer trips. Seasonal pricing can change.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kite size do I need for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For the main April-September season, a 9m kite covers most riders (65-85 kg) in typical 20-25 knot conditions. Carry a 7m for strong wind days above 25 knots. A 12m works as a light-wind backup for 15-18 knot days. In Dakhla, the wind is more consistent so a two-kite quiver of 9m and 12m covers 90% of sessions. Heavier riders (85-100 kg) should size up by one step.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is IKO certification and do I need it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'IKO (International Kiteboarding Organization) is the global standard for kitesurf instruction. IKO certification proves you have completed structured training and can safely operate kite equipment. Many rental shops in Morocco require at least IKO Level 2 (independent riding) before renting gear. IKO schools in Dakhla and Essaouira issue certification cards after completing courses, typically 3-5 days of lessons.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I kitesurf in Essaouira as a beginner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira is challenging for beginners. The wind is strong and gusty (often 25-30 knots in summer), the main beach has shore break and rocks, and the water is choppy. Beginners should start at Moulay Bouzerktoune (20 km north) which has a more sheltered setup, or travel to Sidi Kaouki which has a sandy beach with fewer obstacles. For the easiest learning experience, Dakhla surpasses all other Moroccan spots.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Dakhla for kitesurfing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dakhla has a domestic airport (VIL) with daily flights from Casablanca taking 2.5 hours. Royal Air Maroc and Air Arabia operate this route, with fares from 800 MAD one-way if booked early. From the airport, most kite camps offer free transfers to the lagoon (15-20 minute drive). Driving from Agadir takes approximately 18 hours. There are no direct international flights to Dakhla; all routes connect through Casablanca.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between flat water and wave kitesurfing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Flat water spots (Dakhla lagoon, Oualidia lagoon) have no waves, making them ideal for beginners, freestyle tricks, and foiling. Wave spots (Essaouira beach, Moulay Bouzerktoune, the open ocean side of Dakhla) have swell that advanced riders use for jumps, wave riding, and strapless surfboard kiting. Most intermediate and advanced kiters enjoy both styles. Morocco is rare in offering world-class flat water and wave spots within the same country.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: KITE SPOTS
   ═══════════════════════════════════════════════════════════════ */

const kiteSpots = [
  {
    name: 'Dakhla Lagoon',
    location: 'Dakhla, Western Sahara region',
    icon: Compass,
    level: 'All Levels',
    waterType: 'Flat water lagoon',
    windRange: '18-25 knots',
    windDays: '300+ per year',
    bestSeason: 'Year-round',
    description:
      'A 40 km lagoon between the Dakhla peninsula and mainland Africa. Shallow water extends hundreds of meters from shore, staying waist-deep and flat — perfect for learning, freestyle, and foiling. The Alize trade winds blow side-onshore from the north, creating safe conditions with no risk of being blown out to sea. Speed record attempts happen on the southern flat sections. The lagoon water reaches 22-24°C in summer and 18°C in winter. At least 15 kite schools and camps line the eastern shore.',
    highlights: ['Waist-deep flat water for 500m+', '300+ wind days', 'IKO schools on-site', 'Desert-lagoon landscape'],
  },
  {
    name: 'Dakhla Ocean Side',
    location: 'Dakhla peninsula, outer coast',
    icon: Waves,
    level: 'Advanced',
    waterType: 'Ocean waves (1-3m)',
    windRange: '18-28 knots',
    windDays: '280+ per year',
    bestSeason: 'October - March (best swell)',
    description:
      'The Atlantic-facing side picks up northwest swells breaking over sand and reef. Advanced riders use strapless surfboards for wave riding or twin-tips for big jumps. The wind blows cross-offshore, so a safety boat is essential. Several camps organize guided downwind runs along the peninsula. Uncrowded and raw — Saharan desert meets open Atlantic.',
    highlights: ['Wave riding on kite', 'Uncrowded breaks', 'Downwinder runs'],
  },
  {
    name: 'Essaouira Main Beach',
    location: 'Essaouira',
    icon: Wind,
    level: 'Intermediate / Advanced',
    waterType: 'Choppy with shore break',
    windRange: '20-30 knots',
    windDays: '200+ per year',
    bestSeason: 'April - September',
    description:
      'Known as the "Wind City of Africa," Essaouira receives powerful thermal winds that accelerate between the mainland and the Mogador islands. The main beach south of the medina is wide and sandy, but shore break and rocks near the harbor demand experience. In peak summer, 30-knot gusts are common. Launch and landing zones are designated on the southern section. The medina, restaurants, and nightlife make Essaouira the most social kite destination in Morocco.',
    highlights: ['Strong reliable thermals', 'UNESCO medina nearby', 'Multiple kite schools'],
  },
  {
    name: 'Moulay Bouzerktoune',
    location: '20 km north of Essaouira',
    icon: Navigation,
    level: 'Intermediate',
    waterType: 'Mixed: flat inside, waves outside',
    windRange: '18-25 knots',
    windDays: '180+ per year',
    bestSeason: 'April - September',
    description:
      'A curved bay with more protection than Essaouira main beach. The inside stays relatively flat while the outer section has waves for advanced riders. The right-hand point break on the south side draws wave-riding kiteboarders. Less crowded than Essaouira, with several kite schools running summer sessions. A handful of guesthouses serve the kite crowd. 25 minutes by car from Essaouira.',
    highlights: ['Sheltered bay for learning', 'Point break for wave riding', 'Less crowded'],
  },
  {
    name: 'Sidi Kaouki',
    location: '25 km south of Essaouira',
    icon: Sun,
    level: 'Beginner / Intermediate',
    waterType: 'Beach break, sandy bottom',
    windRange: '15-25 knots',
    windDays: '160+ per year',
    bestSeason: 'April - September',
    description:
      'A long, open beach with fewer rocks and less shore break than Essaouira. Wind arrives slightly later (around noon vs 10am) and blows 2-3 knots lighter, making it friendlier for learners. Sandy bottom and gradual depth reduce injury risk. Two kite schools operate here. Guesthouses from 250 MAD per night. The village has a quiet, low-key atmosphere for long-stay visitors.',
    highlights: ['Sandy bottom, safer for beginners', 'Lighter wind than Essaouira', 'Affordable guesthouses'],
  },
  {
    name: 'Moulay Bousselham',
    location: 'North coast, between Rabat and Tangier',
    icon: Anchor,
    level: 'Beginner / Intermediate',
    waterType: 'Lagoon (Merja Zerga)',
    windRange: '15-22 knots',
    windDays: '120+ per year',
    bestSeason: 'June - September',
    description:
      'The Merja Zerga lagoon sits behind a sandbar on the north coast. Shallow, flat water makes it a natural teaching ground, though wind is less consistent than Dakhla or Essaouira. Summer afternoon thermals produce rideable conditions. Also a Ramsar-listed birdwatching wetland. Less developed than southern spots, with basic accommodation from 200 MAD per night.',
    highlights: ['Flat lagoon water', 'Birdwatching reserve', 'Close to Rabat (2h drive)'],
  },
  {
    name: 'Oualidia',
    location: 'Atlantic coast, between El Jadida and Safi',
    icon: Sparkles,
    level: 'Beginner / Intermediate',
    waterType: 'Sheltered lagoon',
    windRange: '15-20 knots',
    windDays: '100+ per year',
    bestSeason: 'June - August',
    description:
      'A crescent-shaped lagoon famous for its oyster farms and calm turquoise water. Sheltered from ocean swell, creating butter-flat conditions when the wind cooperates. Wind is the weak point: consistent days are fewer, and the lagoon works best on strong thermal afternoons in July-August. No dedicated kite schools yet, but experienced riders bring their own gear. Zero crowds and excellent seafood (oysters from 60 MAD per dozen).',
    highlights: ['Calm lagoon water', 'Zero crowds', 'Famous oyster restaurants'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WIND SEASON CHART
   ═══════════════════════════════════════════════════════════════ */

const windChart = [
  { month: 'Jan', dakhla: '16-20 kts', essaouira: '10-15 kts', dakhlaProb: '75%', essProb: '30%', temp: '18°C' },
  { month: 'Feb', dakhla: '16-20 kts', essaouira: '10-16 kts', dakhlaProb: '75%', essProb: '35%', temp: '18°C' },
  { month: 'Mar', dakhla: '18-22 kts', essaouira: '14-18 kts', dakhlaProb: '80%', essProb: '45%', temp: '19°C' },
  { month: 'Apr', dakhla: '18-24 kts', essaouira: '16-22 kts', dakhlaProb: '85%', essProb: '60%', temp: '20°C' },
  { month: 'May', dakhla: '20-25 kts', essaouira: '18-25 kts', dakhlaProb: '90%', essProb: '70%', temp: '21°C' },
  { month: 'Jun', dakhla: '20-25 kts', essaouira: '22-28 kts', dakhlaProb: '90%', essProb: '85%', temp: '22°C' },
  { month: 'Jul', dakhla: '20-25 kts', essaouira: '25-30 kts', dakhlaProb: '92%', essProb: '90%', temp: '23°C' },
  { month: 'Aug', dakhla: '20-25 kts', essaouira: '25-30 kts', dakhlaProb: '92%', essProb: '90%', temp: '24°C' },
  { month: 'Sep', dakhla: '18-24 kts', essaouira: '18-24 kts', dakhlaProb: '85%', essProb: '65%', temp: '23°C' },
  { month: 'Oct', dakhla: '18-22 kts', essaouira: '12-18 kts', dakhlaProb: '80%', essProb: '40%', temp: '22°C' },
  { month: 'Nov', dakhla: '16-20 kts', essaouira: '10-15 kts', dakhlaProb: '75%', essProb: '30%', temp: '20°C' },
  { month: 'Dec', dakhla: '16-20 kts', essaouira: '10-14 kts', dakhlaProb: '75%', essProb: '25%', temp: '19°C' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KITE SCHOOLS
   ═══════════════════════════════════════════════════════════════ */

const kiteSchools = [
  {
    name: 'Dakhla Attitude',
    location: 'Dakhla Lagoon',
    iko: true,
    languages: 'English, French, Arabic, Spanish',
    beginnerCourse: 'From 4,500 MAD (3 days)',
    rental: 'From 500 MAD/day',
    description: 'One of the original Dakhla kite camps. IKO-certified instructors, on-site accommodation, restaurant, and pool. Radio helmets for real-time coaching. Advanced clinics in foiling and wave riding.',
  },
  {
    name: 'Dakhla Spirit',
    location: 'Dakhla Lagoon',
    iko: true,
    languages: 'English, French, Arabic',
    beginnerCourse: 'From 4,200 MAD (3 days)',
    rental: 'From 450 MAD/day',
    description: 'Boutique camp with small group lessons (max 3 per instructor). Latest Duotone and North equipment updated annually. Also offers SUP and wing foiling. Eco-bungalows with lagoon views.',
  },
  {
    name: 'Explora Watersports',
    location: 'Essaouira',
    iko: true,
    languages: 'English, French, German',
    beginnerCourse: 'From 3,800 MAD (3 days)',
    rental: 'From 500 MAD/day',
    description: 'Essaouira main beach location. IKO Level 1-3 courses and instructor training. Teaches beginners at Sidi Kaouki, intermediate-advanced at Essaouira. Gear storage for riders with own equipment.',
  },
  {
    name: 'ION Club Essaouira',
    location: 'Essaouira',
    iko: true,
    languages: 'English, French, German, Spanish',
    beginnerCourse: 'From 4,000 MAD (3 days)',
    rental: 'From 550 MAD/day',
    description: 'Global ION Club network. Large equipment fleet, rescue boat on standby, experienced international instructors. Also offers windsurfing and wing foiling. Beachfront location with storage lockers.',
  },
];

const rentalPrices = [
  { item: 'Full kite setup (kite, bar, harness, board)', daily: 'From 500 MAD', weekly: 'From 2,500 MAD' },
  { item: 'Kite + bar only', daily: 'From 350 MAD', weekly: 'From 1,800 MAD' },
  { item: 'Twin-tip board only', daily: 'From 150 MAD', weekly: 'From 700 MAD' },
  { item: 'Foil board + hydrofoil', daily: 'From 400 MAD', weekly: 'From 2,000 MAD' },
  { item: 'Harness only', daily: 'From 80 MAD', weekly: 'From 350 MAD' },
  { item: 'Wetsuit (3/2mm)', daily: 'From 60 MAD', weekly: 'From 280 MAD' },
];

/* ═══════════════════════════════════════════════════════════════ */

const progressionLevels = [
  {
    level: 'Beginner (IKO Level 1-2)',
    icon: GraduationCap,
    duration: '3-5 days of lessons',
    description: 'Kite setup, safety systems, body dragging, water start, and first rides upwind. By the end of IKO Level 2, you can ride independently in both directions and self-rescue.',
    bestSpots: 'Dakhla Lagoon, Sidi Kaouki, Moulay Bousselham',
    cost: 'From 4,000 MAD for a 3-day course',
  },
  {
    level: 'Intermediate (IKO Level 3)',
    icon: TrendingUp,
    duration: '2-4 weeks of riding after certification',
    description: 'Consistent upwind riding, transitions (switching direction), first jumps, and speed control. You can ride independently at most spots with side-onshore or side-shore wind.',
    bestSpots: 'Dakhla Lagoon, Moulay Bouzerktoune, Sidi Kaouki',
    cost: 'Coaching clinics from 1,500 MAD/day',
  },
  {
    level: 'Advanced (IKO Level 4+)',
    icon: Zap,
    duration: 'Ongoing progression',
    description: 'Big air jumps, handle passes, kite loops, strapless wave riding, and hydrofoil sessions. Advanced riders explore the Dakhla ocean side, Essaouira in full power, and downwinders along the peninsula.',
    bestSpots: 'Essaouira, Dakhla Ocean Side, Moulay Bouzerktoune',
    cost: 'Private coaching from 2,000 MAD/day',
  },
];

/* ═══════════════════════════════════════════════════════════════ */

const accommodation = [
  {
    location: 'Dakhla Lagoon',
    budget: 'From 300 MAD/night (shared room in kite camp)',
    midRange: 'From 600 MAD/night (private bungalow with lagoon view)',
    premium: 'From 1,200 MAD/night (luxury eco-lodge, full board)',
    notes: 'Most camps include accommodation in packages. Booking camp + lessons + stay together saves 15-25%. Half-board or full-board recommended — limited independent restaurants near the lagoon.',
  },
  {
    location: 'Essaouira',
    budget: 'From 200 MAD/night (hostel in medina)',
    midRange: 'From 500 MAD/night (riad in medina)',
    premium: 'From 1,500 MAD/night (beachfront hotel)',
    notes: 'Widest accommodation range. Hundreds of riads within walking distance of the beach. Store kite gear at your school — hauling it through narrow medina streets is impractical.',
  },
];

/* ═══════════════════════════════════════════════════════════════ */

export default function MoroccoKiteSurfingPage() {
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
            backgroundImage: 'url(/images/hero-surfing.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Kitesurfing Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wind className="w-4 h-4" />
            Wind &amp; Water Sports
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Kitesurfing Morocco:
            <br className="hidden md:block" /> Dakhla, Essaouira &amp; Beyond
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            300+ wind days per year. Flat-water lagoons. Desert coastlines.
            Morocco ranks among the world&apos;s top three kitesurfing destinations — and the cost of riding here is a fraction of European spots.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Became a Global Kitesurfing Capital
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s 3,500 km coastline sits squarely in the path of the Alize trade winds — the same atmospheric engine
                that powered sailing ships across the Atlantic for centuries. These winds blow from the north-northeast along
                the coast, accelerating through gaps in the terrain and creating some of the most reliable kite conditions
                anywhere on the planet. Dakhla, deep in the south, records 300+ wind days per year. Essaouira, further north,
                earns the title &quot;Wind City of Africa&quot; with brutal summer thermals that routinely hit 30 knots.
              </p>
              <p>
                What sets Morocco apart is the variety of riding conditions within one country. Dakhla&apos;s 40 km lagoon
                gives you glass-flat water, waist-deep for hundreds of meters — arguably the safest place on Earth to learn
                kitesurfing. Cross to the ocean side and you have open-Atlantic wave riding over empty desert breaks.
                Essaouira serves powered-up freeriding with a UNESCO medina to explore after sessions. Spots like Oualidia,
                Moulay Bousselham, and Sidi Kaouki fill in the gaps with mellower wind and uncrowded setups.
                Add IKO-certified kite schools (beginner courses from 4,000 MAD), gear rental at a fraction of
                European prices, and tagine dinners for 40 MAD, and you understand why the international
                kite community keeps returning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Wind Conditions & Alize Trade Winds ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wind className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Understanding Morocco&apos;s Wind
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Alize trade winds drive Morocco&apos;s kite season. Here is how they work and when they blow.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-gold)]" />
                The Alize Trade Winds
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Alize are trade winds created by the Azores high-pressure system over the mid-Atlantic. Air circulates
                clockwise, sending north-northeasterly winds down the Moroccan coast. In Dakhla (23°N), they blow year-round.
                In Essaouira (31°N), the effect is strongest April through September as the high strengthens in summer.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Wind className="w-3.5 h-3.5" />
                <span>Direction: NNE to N (side-onshore at most spots)</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <CloudSun className="w-5 h-5 text-[var(--color-gold)]" />
                Thermal Effect in Essaouira
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essaouira gets a double boost: trade wind plus local thermal. Inland plains heat up, sucking cool ocean
                air onshore with 5-10 extra knots. Mornings start at 12-15 knots, peaking at 25-30 knots between 2pm
                and 6pm. By sunset, the thermal collapses and wind drops.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Clock className="w-3.5 h-3.5" />
                <span>Peak hours: 2pm - 6pm (thermal boost)</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5 text-[var(--color-gold)]" />
                Dakhla: The Year-Round Machine
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Permanently under the Azores high influence, Dakhla gets 18-25 knot winds nearly every day. Spring and
                summer gusts exceed 25 knots; even December-January average 16-20 knots. Wind direction is remarkably
                stable (N to NNE, side-onshore on the lagoon), making Dakhla a global benchmark for kite instruction.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Reliability: 80-92% wind probability year-round</span>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)]" />
                Chergui: The Eastern Spoiler
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Occasionally a hot, dry wind called the Chergui blows from the Sahara interior. This kills the trade
                wind for 2-5 days and raises temperatures by 10-15°C. In Essaouira, it brings 40°C+ heat and zero
                rideable wind. In Dakhla, the trade wind usually reasserts within 24-48 hours. Most common in spring
                (March-May) and early autumn. Check forecasts before booking fixed-date trips.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--color-accent)]">
                <Thermometer className="w-3.5 h-3.5" />
                <span>Duration: typically 2-5 days, most common in spring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seasonal Wind Chart ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BarChart3 className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Monthly Wind Chart: Dakhla vs Essaouira
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Average wind ranges and probability of rideable days (15+ knots) by month.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]/20">
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Month</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Dakhla Wind</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Dakhla %</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Essaouira Wind</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Essaouira %</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Water Temp</th>
                </tr>
              </thead>
              <tbody>
                {windChart.map((row, i) => (
                  <tr key={row.month} className={`border-b border-[var(--color-accent)]/10 ${i % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}`}>
                    <td className="py-3 px-4 font-medium text-[var(--text-primary)]">{row.month}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.dakhla}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        parseInt(row.dakhlaProb) >= 85
                          ? 'bg-green-100 text-green-700'
                          : parseInt(row.dakhlaProb) >= 75
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                      }`}>{row.dakhlaProb}</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.essaouira}</td>
                    <td className="py-3 px-4">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        parseInt(row.essProb) >= 70
                          ? 'bg-green-100 text-green-700'
                          : parseInt(row.essProb) >= 40
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                      }`}>{row.essProb}</span>
                    </td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{row.temp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-4 text-center">
            Wind probability = percentage of days with 4+ hours of 15+ knot wind. Based on historical averages; conditions can change.
          </p>
        </div>
      </section>

      {/* ── Kite Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Kitesurfing Spots in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Dakhla&apos;s Saharan lagoon to the windswept Atlantic coast — every kite riding style covered.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {kiteSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <spot.icon className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {spot.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {spot.location}
                    </p>
                  </div>
                  <span className={`ml-auto text-xs font-medium px-2.5 py-1 rounded-full ${
                    spot.level.includes('Advanced')
                      ? 'bg-red-100 text-red-700'
                      : spot.level.includes('Intermediate')
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-green-100 text-green-700'
                  }`}>
                    {spot.level}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{spot.description}</p>
                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Waves className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {spot.waterType}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Wind className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {spot.windRange}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {spot.bestSeason}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Sun className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {spot.windDays} wind days
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {spot.highlights.map((h) => (
                    <span key={h} className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2.5 py-1 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flat Water vs Wave Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Flat Water vs Wave Riding
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is one of the few countries that excels at both styles. Here is what each involves.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[var(--color-gold)]" />
                Flat Water Spots
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Dakhla Lagoon</strong> — The gold standard. 40 km of glass-flat water. Ideal for learning, freestyle, and foiling.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Oualidia Lagoon</strong> — Smaller and less windy, but flat and sheltered. Bring your own gear; no rental shops.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Moulay Bousselham (Merja Zerga)</strong> — Shallow lagoon on the north coast. Wind is seasonal but water is flat.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded-lg text-xs text-green-700">
                <Info className="w-3.5 h-3.5 inline mr-1" />
                Flat water suits beginners, freestylers, and foilers. Fewer hazards, easier relaunching, and safer crashes.
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <Waves className="w-5 h-5 text-[var(--color-gold)]" />
                Wave Spots
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Essaouira Beach</strong> — Choppy shore break with strong wind. Intermediate+ for jumping and wave hits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Moulay Bouzerktoune</strong> — Right-hand point break for strapless wave riding. Mixed conditions inside/outside the bay.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <span><strong>Dakhla Ocean Side</strong> — Open-Atlantic swells along the peninsula. Cross-offshore wind; safety boat recommended.</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                <Info className="w-3.5 h-3.5 inline mr-1" />
                Wave spots demand board control, wave reading, and self-rescue skills. IKO Level 3+ recommended.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Progression Levels ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kitesurfing Progression in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From first kite flights to big-air loops — here is what each progression stage looks like and where to ride.
          </p>
          <div className="space-y-6">
            {progressionLevels.map((pl) => (
              <div key={pl.level} className="card-moroccan p-6">
                <div className="flex items-start gap-3">
                  <pl.icon className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {pl.level}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)] mb-3">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {pl.duration}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{pl.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3 text-xs">
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <MapPin className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        <strong>Best spots:</strong> {pl.bestSpots}
                      </span>
                      <span className="flex items-center gap-1.5 text-[var(--text-muted)]">
                        <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        {pl.cost}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IKO Certification ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            IKO Certification in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The International Kiteboarding Organization (IKO) sets the global standard for kitesurf instruction.
            Here is what the levels mean and why certification matters.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="card-moroccan p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-green-700 font-bold text-lg">1</span>
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">IKO Level 1: Discovery</h3>
              <p className="text-sm text-[var(--text-secondary)]">Kite setup, safety systems, wind window theory, body dragging. Self-rescue procedures. Typically completed in 1-2 days.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-amber-700 font-bold text-lg">2</span>
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">IKO Level 2: Intermediate</h3>
              <p className="text-sm text-[var(--text-secondary)]">Water start, controlled riding in both directions, upwind riding. Minimum level most rental shops require. Takes 2-4 days.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-700 font-bold text-lg">3</span>
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">IKO Level 3+: Independent</h3>
              <p className="text-sm text-[var(--text-secondary)]">Transitions, jumps, toeside riding, self-rescue in all conditions. Prerequisite for advanced coaching clinics.</p>
            </div>
          </div>
          <div className="card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-[var(--color-accent)] shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Why IKO Matters in Morocco
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most rental operations in Dakhla and Essaouira require IKO Level 2 proof before handing over equipment.
                  Without certification, expect a supervised assessment (from 300 MAD) or short course.
                  All schools listed in this guide are IKO-certified and issue internationally recognized kite cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Kite Schools ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Kite Schools in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All schools below hold IKO certification and offer courses in multiple languages. Seasonal pricing can change.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {kiteSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <div className="flex items-start gap-3 mb-4">
                  <Award className="w-7 h-7 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {school.name}
                    </h3>
                    <p className="text-xs text-[var(--text-muted)]">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {school.location}
                    </p>
                  </div>
                  {school.iko && (
                    <span className="ml-auto text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" />
                      IKO Certified
                    </span>
                  )}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-4">{school.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Globe className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {school.languages}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Beginner course: {school.beginnerCourse}
                  </div>
                  <div className="flex items-center gap-1.5 text-[var(--text-muted)]">
                    <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    Gear rental: {school.rental}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Equipment Rental Prices ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Equipment Rental Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Prices from kite schools and rental shops in Dakhla and Essaouira. Weekly rates offer significant savings. Seasonal pricing can change.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="border-b-2 border-[var(--color-accent)]/20">
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Equipment</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Daily Rate</th>
                  <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Weekly Rate</th>
                </tr>
              </thead>
              <tbody>
                {rentalPrices.map((item, i) => (
                  <tr key={item.item} className={`border-b border-[var(--color-accent)]/10 ${i % 2 === 0 ? 'bg-[var(--surface-muted)]' : ''}`}>
                    <td className="py-3 px-4 text-[var(--text-primary)]">{item.item}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{item.daily}</td>
                    <td className="py-3 px-4 text-[var(--text-secondary)]">{item.weekly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 card-moroccan p-5">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Bring Your Own or Rent?
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              For trips under 7 days, renting is more practical — no excess baggage fees and no transit damage risk.
              For stays of 2+ weeks, bringing your own gear saves money. Airlines charge from 500-1,000 MAD each way
              for a kite bag. Both Dakhla and Essaouira have kite repair services. Dakhla camps sometimes sell
              end-of-season demo kites at 40-50% off retail.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accommodation Near Kite Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay Near Kite Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Budget, mid-range, and premium options at each major kitesurfing location. Seasonal pricing can change.
          </p>
          <div className="space-y-6">
            {accommodation.map((acc) => (
              <div key={acc.location} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  {acc.location}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  <div className="text-sm">
                    <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">Budget</span>
                    <p className="text-[var(--text-secondary)] mt-1">{acc.budget}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">Mid-range</span>
                    <p className="text-[var(--text-secondary)] mt-1">{acc.midRange}</p>
                  </div>
                  <div className="text-sm">
                    <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">Premium</span>
                    <p className="text-[var(--text-secondary)] mt-1">{acc.premium}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  <Info className="w-3 h-3 inline mr-1" />
                  {acc.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Kitesurfing Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Gear advice, safety essentials, and logistics to make your trip run smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Wind className="w-5 h-5 text-[var(--color-accent)]" />
                Kite Size Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For a 75 kg rider: 9m is the workhorse (20-25 knots). Pack a 7m for overpowered days (25-30 knots) and
                a 12m for lighter sessions (15-18 knots). Two-kite quiver of 9m + 12m covers most Dakhla sessions.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Thermometer className="w-5 h-5 text-[var(--color-accent)]" />
                Wetsuit Advice
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Shorty or boardshorts in Dakhla June-September (22-24°C). 3/2mm full suit October-May and all
                Essaouira sessions (17-20°C plus wind chill). Booties recommended at rocky spots like Moulay Bouzerktoune.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)]" />
                Safety Essentials
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Always ride with a safety leash and helmet (especially in Essaouira). In Dakhla lagoon, wear
                neoprene shoes — shallow bottom can cause foot injuries. On ocean-side sessions, carry a GPS
                tracker or phone in a waterproof pouch.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
                Getting Around
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Dakhla: free camp transfers and daily lagoon transport. Essaouira: kite beach is a 15-minute
                walk from the medina. Moulay Bouzerktoune and Sidi Kaouki need a taxi (from 100 MAD each way)
                or rental car (from 300 MAD/day).
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)]" />
                Budget Breakdown
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A 7-day Dakhla trip: from 8,000-15,000 MAD per person (flights from 1,600 MAD round trip,
                accommodation from 2,100 MAD, gear rental from 2,500 MAD, food from 1,400 MAD).
                Essaouira runs 20-30% cheaper — no domestic flight needed from Marrakech (3-hour bus, from 80 MAD).
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Sun className="w-5 h-5 text-[var(--color-accent)]" />
                Rest Day Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Dakhla: desert excursions to the White Dune, sand-boarding, and flamingo watching.
                Essaouira: UNESCO medina, Skala ramparts, sardines at the port, thuya wood crafts.
                Sidi Kaouki: horse rides on the beach, yoga sessions, and sunset cliff walks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              { q: 'When is the best time to kitesurf in Morocco?', a: 'April through September for Essaouira and the northern coast. Dakhla works year-round with 300+ wind days. Peak wind in Essaouira: June-August (25-30 knots). Dakhla peaks April-September but stays rideable through winter.' },
              { q: 'Is Dakhla good for beginner kitesurfers?', a: 'Arguably the best beginner spot on the planet. Flat, shallow lagoon water, steady side-onshore wind, no current or waves. IKO schools charge from 4,000 MAD for a 3-day beginner course.' },
              { q: 'How much does kite equipment rental cost?', a: 'Full setup: from 500 MAD/day or from 2,500 MAD/week. Board only: from 150 MAD/day. Wetsuit: from 60 MAD/day. Seasonal pricing can change.' },
              { q: 'What kite size do I need for Morocco?', a: 'For a 75 kg rider: 9m covers most days (20-25 knots), 7m for strong days (25-30 knots), 12m for light days (15-18 knots). A two-kite quiver of 9m and 12m handles 90% of Dakhla sessions.' },
              { q: 'What is IKO certification and do I need it?', a: 'IKO is the global instruction standard. Most Moroccan rental shops require IKO Level 2 (independent riding) before renting gear. Schools issue IKO cards after 3-5 day courses.' },
              { q: 'Can I kitesurf in Essaouira as a beginner?', a: 'Challenging due to strong gusty wind (25-30 knots), shore break, and rocks. Start at Sidi Kaouki or Moulay Bouzerktoune instead. For the easiest learning, go to Dakhla.' },
              { q: 'How do I get to Dakhla?', a: 'Daily flights from Casablanca (2.5 hours, from 800 MAD one-way). Most camps offer free airport transfers. No direct international flights — all routes connect through Casablanca.' },
              { q: 'Flat water vs wave kitesurfing?', a: 'Flat water (Dakhla lagoon, Oualidia): no waves, ideal for learning, freestyle, foiling. Wave spots (Essaouira, Moulay Bouzerktoune, Dakhla ocean side): swell for jumping and wave riding. Morocco excels at both.' },
            ].map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-surf-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Surfing Morocco Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Taghazout, Imsouane, Anchor Point, and more. Complete guide to Morocco&apos;s best surf breaks and camps.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wind className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Wind City of Africa. UNESCO medina, seafood, art galleries, and world-class kitesurfing conditions.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-beaches" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Best Beaches in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From Legzira&apos;s red arches to Dakhla&apos;s white sand. The best coastal spots for swimming, sunbathing, and water sports.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Travel Morocco on a budget. Transport, food, accommodation, and money-saving tips for every type of traveler.
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
            Ready to Ride Morocco&apos;s Wind?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the flat turquoise lagoon of Dakhla to the raw Atlantic power of Essaouira,
            Morocco delivers 300+ days of kitable wind at prices that make European spots look overpriced.
            Pack your harness and go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-surf-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Waves className="w-5 h-5" />
              Explore Surf Guide
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Wind className="w-5 h-5" />
              Visit Essaouira
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Wind,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Plane,
  Compass,
  Sun,
  Waves,
  Fish,
  Camera,
  Tent,
  Building,
  Utensils,
  CloudSun,
  Globe,
  Navigation,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Dakhla Travel Guide 2026 | Kitesurfing Paradise, Lagoon & Desert Coast',
  description:
    'Complete Dakhla Morocco travel guide. World-class kitesurfing on the lagoon, White Dune, Dragon Island, desert tours, flamingos, seafood, and Saharan adventure. Best months, kite schools, accommodation, and prices.',
  keywords: [
    'dakhla morocco',
    'dakhla kitesurfing',
    'dakhla lagoon',
    'dakhla travel guide',
    'dakhla kitesurf',
    'things to do dakhla',
    'dakhla wind conditions',
    'dakhla kite schools',
    'dakhla white dune',
    'dakhla dragon island',
    'dakhla desert tours',
    'dakhla flamingos',
    'dakhla accommodation',
    'dakhla eco camp',
    'dakhla seafood',
    'dakhla weather',
    'dakhla flights',
    'dakhla windsurfing',
    'dakhla fishing',
    'dakhla sand dune surfing',
    'dakhla ocean kayaking',
    'dakhla morocco guide 2026',
  ],
  openGraph: {
    title: 'Dakhla Travel Guide 2026 | Kitesurfing Paradise, Lagoon & Desert Coast',
    description:
      'Discover Dakhla, Morocco\'s Saharan kitesurfing paradise. World-class lagoon, year-round wind, White Dune, desert tours, flamingos, and fresh seafood. Complete travel guide with prices.',
    url: `${BASE_URL}/dakhla-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-dakhla.webp`,
        width: 1200,
        height: 630,
        alt: 'Dakhla lagoon at sunset with kitesurfers riding turquoise waters against the Saharan desert backdrop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dakhla Travel Guide 2026 | Morocco\'s Kitesurfing Paradise',
    description:
      'World-class kitesurfing, the White Dune, Dragon Island, desert tours, and the freshest seafood in Morocco. Your complete Dakhla travel guide.',
    images: [`${BASE_URL}/images/hero-dakhla.webp`],
  },
  alternates: { canonical: `${BASE_URL}/dakhla-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/dakhla-guide`,
  name: 'Dakhla Travel Guide 2026 | Kitesurfing Paradise, Lagoon & Desert Coast',
  description:
    'Complete travel guide to Dakhla, Morocco. World-class kitesurfing lagoon, desert tours, wildlife, seafood, accommodation, and practical travel tips.',
  url: `${BASE_URL}/dakhla-guide`,
  image: `${BASE_URL}/images/hero-dakhla.webp`,
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
  mainEntityOfPage: `${BASE_URL}/dakhla-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Place',
    name: 'Dakhla',
    containedInPlace: {
      '@type': 'Country',
      name: 'Morocco',
    },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Dakhla Travel Guide', item: `${BASE_URL}/dakhla-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time to visit Dakhla for kitesurfing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dakhla has wind year-round, but the best months for kitesurfing are April to September when trade winds are strongest and most consistent, blowing 20-30 knots almost daily. Winter months (November to February) still have rideable days but are less consistent.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Dakhla Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most practical way is to fly from Casablanca to Dakhla Airport (VIL). Royal Air Maroc operates daily flights, taking about 2 hours 30 minutes. Flights from Casablanca start from around 1,200 MAD one-way if booked in advance. Driving from Casablanca takes approximately 18-20 hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Dakhla safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Dakhla is very safe for tourists. It is a peaceful town with a welcoming atmosphere. The kitesurfing community is international and well-established. Standard travel precautions apply, but violent crime targeting tourists is extremely rare.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need kitesurfing experience to visit Dakhla?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not at all. While Dakhla is famous for kitesurfing, it offers desert tours, fishing, wildlife watching, kayaking, and incredible seafood. Beginners can also take kite lessons on the flat-water lagoon, which is one of the safest places in the world to learn.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a kitesurfing lesson cost in Dakhla?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Group kitesurfing lessons in Dakhla start from around 500 MAD per hour. A full beginner course (8-12 hours over several days) ranges from 3,500 to 5,500 MAD depending on the school. Private lessons start from 800 MAD per hour. Equipment rental for experienced riders starts from 600 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the White Dune in Dakhla?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The White Dune (Dune Blanche) is a stunning white sand dune that rises from the Dakhla lagoon. It is a popular spot for kitesurfers, sandboarders, and those who want to enjoy a surreal desert-meets-ocean landscape. Many kite camps organize excursions there.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: THINGS TO DO IN DAKHLA
   ═══════════════════════════════════════════════════════════════ */

const thingsToDo = [
  {
    activity: 'Kitesurfing on the Lagoon',
    icon: Wind,
    description:
      'The Dakhla lagoon is one of the world\'s top kitesurfing destinations. Flat water, consistent wind, and vast open space create ideal conditions for riders of all levels. The lagoon is shallow for hundreds of meters, making it exceptionally safe for beginners.',
    price: 'From 500 MAD per lesson, from 600 MAD/day equipment rental',
    bestTime: 'April to September (peak wind), rideable year-round',
  },
  {
    activity: 'Visit the White Dune (Dune Blanche)',
    icon: Sun,
    description:
      'A surreal white sand dune rising from the turquoise lagoon. This Instagram-worthy spot is perfect for sandboarding, swimming, and watching kitesurfers against the Saharan backdrop. Accessible by boat or 4x4 from most kite camps.',
    price: 'From 200 MAD for boat transfer, or included in camp excursions',
    bestTime: 'Year-round, best in morning light for photography',
  },
  {
    activity: 'Dragon Island Exploration',
    icon: Compass,
    description:
      'A remote island in the lagoon shaped like a dragon when viewed from above. The island is a nesting ground for birds and offers pristine beaches with zero crowds. Reached by boat, it is one of Dakhla\'s most magical spots.',
    price: 'From 300 MAD for a guided boat trip',
    bestTime: 'Year-round, avoid nesting season disruptions (spring)',
  },
  {
    activity: 'Desert Excursions & Saharan Tours',
    icon: Navigation,
    description:
      'Venture into the Saharan landscape surrounding Dakhla by 4x4. Visit nomadic camps, ancient rock engravings, oasis springs, and endless golden dunes. Overnight desert camping under the stars is an unforgettable experience.',
    price: 'From 800 MAD for a half-day 4x4 tour, from 1,500 MAD overnight',
    bestTime: 'October to April (cooler temperatures for desert exploration)',
  },
  {
    activity: 'Flamingo & Wildlife Watching',
    icon: Camera,
    description:
      'The Dakhla lagoon is a vital wetland habitat. Thousands of flamingos, herons, cormorants, and migratory birds gather here. Monk seals and dolphins are occasionally spotted in the outer bay. A birdwatcher\'s paradise.',
    price: 'From 250 MAD for a guided birdwatching tour',
    bestTime: 'November to March (peak migratory season)',
  },
  {
    activity: 'Windsurfing',
    icon: Waves,
    description:
      'The same wind that makes Dakhla a kitesurfing mecca also creates world-class windsurfing conditions. Several schools and camps offer equipment rental and lessons. The flat lagoon water is ideal for speed runs and freestyle.',
    price: 'From 500 MAD per lesson, from 550 MAD/day rental',
    bestTime: 'April to September (strongest winds)',
  },
  {
    activity: 'Sport Fishing & Spearfishing',
    icon: Fish,
    description:
      'Dakhla\'s Atlantic waters teem with fish. Shore casting, boat fishing, and spearfishing are all popular. Target species include sea bass, corvina, dentex, and meagre. Several operators offer fully equipped fishing boats.',
    price: 'From 1,000 MAD for a half-day boat fishing trip',
    bestTime: 'Year-round, best catches October to May',
  },
  {
    activity: 'Ocean Kayaking',
    icon: Sparkles,
    description:
      'Paddle through the calm lagoon waters at sunrise or sunset, gliding past flamingos and over crystal-clear shallows. Sea kayaking in the outer bay offers more adventure, with the chance to explore sea caves and rocky coastline.',
    price: 'From 200 MAD per hour kayak rental, from 400 MAD guided trip',
    bestTime: 'Year-round, calmest mornings',
  },
  {
    activity: 'Sand Dune Surfing (Sandboarding)',
    icon: Globe,
    description:
      'The Saharan dunes around Dakhla offer excellent sandboarding terrain. The White Dune is the most popular spot, but local guides can take you to larger, more remote dunes for a thrilling ride.',
    price: 'From 150 MAD board rental, from 400 MAD guided session',
    bestTime: 'Year-round, cooler months preferred',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: KITE SCHOOLS & CAMPS
   ═══════════════════════════════════════════════════════════════ */

const kiteSchools = [
  {
    name: 'Dakhla Attitude',
    type: 'Kite Camp & School',
    description: 'One of the most established kite camps, located right on the lagoon with butter-flat water. IKO-certified instruction, equipment rental, and all-inclusive packages with accommodation.',
    price: 'From 4,500 MAD for 5-day course, from 1,200 MAD/night all-inclusive',
    highlights: ['IKO-certified instructors', 'Lagoon-front location', 'All-inclusive packages', 'Equipment storage'],
  },
  {
    name: 'Dakhla Club',
    type: 'Premium Kite Resort',
    description: 'Premium all-inclusive resort with direct lagoon access, pool, restaurant, and spa. Dedicated shallow-water teaching zone for beginners. Popular with European kiters on week-long packages.',
    price: 'From 1,500 MAD/night all-inclusive, from 5,000 MAD course package',
    highlights: ['Swimming pool & spa', 'Dedicated beginner zone', 'European-standard comfort', 'Airport transfers'],
  },
  {
    name: 'Westpoint Surf Village',
    type: 'Eco Camp',
    description: 'Eco-friendly camp on the ocean side combining kitesurfing with surfing, offering access to both the lagoon and Atlantic swells. Relaxed atmosphere with communal dining and beachfront bungalows.',
    price: 'From 700 MAD/night, from 3,500 MAD beginner course',
    highlights: ['Ocean + lagoon access', 'Surf & kite combo', 'Eco-friendly ethos', 'Communal atmosphere'],
  },
  {
    name: 'KiteWorldWide Dakhla',
    type: 'International Kite Camp',
    description: 'International kite travel brand offering professionally organized trips with top-quality equipment on a prime lagoon spot. Their downwinder trips along the peninsula are legendary.',
    price: 'From 1,300 MAD/night, from 4,000 MAD course package',
    highlights: ['International brand quality', 'Downwinder excursions', 'Premium equipment', 'Multilingual staff'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const accommodation = [
  {
    category: 'Kite Camps (Lagoon)',
    icon: Tent,
    options: [
      { name: 'Dakhla Attitude', price: 'From 1,200 MAD/night', style: 'All-inclusive lagoon bungalows' },
      { name: 'Dakhla Club', price: 'From 1,500 MAD/night', style: 'Premium resort, pool & spa' },
      { name: 'KiteWorldWide', price: 'From 1,300 MAD/night', style: 'Camp bungalows, prime spot' },
    ],
    description: 'All-inclusive camps with meals, equipment, and transfers. The top choice for kitesurfers. Seasonal pricing applies during peak months.',
  },
  {
    category: 'Eco Camps',
    icon: Sparkles,
    options: [
      { name: 'Westpoint Surf Village', price: 'From 700 MAD/night', style: 'Beachfront eco bungalows' },
      { name: 'Heliophora', price: 'From 600 MAD/night', style: 'Eco-lodge, organic garden' },
      { name: 'PK25', price: 'From 500 MAD/night', style: 'Desert camp at km 25' },
    ],
    description: 'Sustainable camps blending comfort with nature. Authentic Saharan atmosphere at gentler prices. Seasonal pricing applies.',
  },
  {
    category: 'Hotels in Dakhla Town',
    icon: Building,
    options: [
      { name: 'Hotel Sahara Regency', price: 'From 600 MAD/night', style: '4-star city hotel' },
      { name: 'Hotel Calipau', price: 'From 400 MAD/night', style: 'Central mid-range' },
      { name: 'Qualipau Hotel', price: 'From 350 MAD/night', style: 'Budget-friendly' },
    ],
    description: 'In-town hotels near restaurants and shops, 10-20 minutes from the lagoon. Prices may vary by season.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WEATHER BY MONTH
   ═══════════════════════════════════════════════════════════════ */

const weatherData = [
  { month: 'Jan', temp: '18°C', wind: '15-20 kts', rain: 'Low', kiteRating: 'Good' },
  { month: 'Feb', temp: '19°C', wind: '15-22 kts', rain: 'Low', kiteRating: 'Good' },
  { month: 'Mar', temp: '20°C', wind: '18-25 kts', rain: 'Very Low', kiteRating: 'Very Good' },
  { month: 'Apr', temp: '21°C', wind: '20-28 kts', rain: 'None', kiteRating: 'Excellent' },
  { month: 'May', temp: '22°C', wind: '22-30 kts', rain: 'None', kiteRating: 'Excellent' },
  { month: 'Jun', temp: '24°C', wind: '22-30 kts', rain: 'None', kiteRating: 'Excellent' },
  { month: 'Jul', temp: '26°C', wind: '20-28 kts', rain: 'None', kiteRating: 'Excellent' },
  { month: 'Aug', temp: '27°C', wind: '20-28 kts', rain: 'None', kiteRating: 'Excellent' },
  { month: 'Sep', temp: '26°C', wind: '18-25 kts', rain: 'None', kiteRating: 'Very Good' },
  { month: 'Oct', temp: '24°C', wind: '15-22 kts', rain: 'Low', kiteRating: 'Good' },
  { month: 'Nov', temp: '21°C', wind: '15-20 kts', rain: 'Low', kiteRating: 'Good' },
  { month: 'Dec', temp: '19°C', wind: '15-20 kts', rain: 'Low', kiteRating: 'Good' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RESTAURANTS & SEAFOOD
   ═══════════════════════════════════════════════════════════════ */

const restaurants = [
  {
    name: 'Casa Manolo',
    cuisine: 'Seafood & Spanish-Moroccan',
    price: 'From 80 MAD per dish',
    description: 'A Dakhla institution. Fresh-caught fish, lobster, oysters, and seafood paella with ocean views. A favorite among kiters and locals alike.',
  },
  {
    name: 'Restaurant La Terrasse',
    cuisine: 'Moroccan & Seafood',
    price: 'From 60 MAD per dish',
    description: 'Traditional Moroccan dishes alongside fresh seafood. The fish tagine with chermoula is outstanding. Rooftop terrace with panoramic bay views.',
  },
  {
    name: 'Villa Dakhla',
    cuisine: 'Mediterranean-Moroccan Fusion',
    price: 'From 100 MAD per dish',
    description: 'Upscale dining with creative fusion dishes using local seafood. Wine-friendly, popular for special occasions. Reservations recommended during peak kite season.',
  },
  {
    name: 'Cafe Restaurant Porto Rico',
    cuisine: 'Casual Seafood & Moroccan',
    price: 'From 40 MAD per dish',
    description: 'A local favorite for affordable, generous portions of grilled fish and Moroccan staples. No-frills setting, unbeatable fish quality. Cash only.',
  },
  {
    name: 'Oyster Farms (Ostreiculture)',
    cuisine: 'Fresh Oysters',
    price: 'From 50 MAD per dozen',
    description: 'Dakhla is Morocco\'s oyster capital. Visit lagoon farms for the freshest oysters, shucked to order and served with lemon. A unique Dakhla experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: 'Flight Casablanca-Dakhla (one-way)', price: 'From 1,200 MAD', note: 'Book 2-4 weeks in advance for best fares' },
  { service: 'Kite lesson (group, per hour)', price: 'From 500 MAD', note: 'Group of 2-4 students' },
  { service: 'Kite lesson (private, per hour)', price: 'From 800 MAD', note: 'One-on-one instruction' },
  { service: 'Full beginner course (8-12 hrs)', price: 'From 3,500 MAD', note: 'Over 3-5 days, equipment included' },
  { service: 'Kite equipment rental (per day)', price: 'From 600 MAD', note: 'Kite, board, harness' },
  { service: 'White Dune boat trip', price: 'From 200 MAD', note: 'Round trip from lagoon camps' },
  { service: 'Desert 4x4 excursion (half-day)', price: 'From 800 MAD', note: 'Per person, minimum 2 people' },
  { service: 'Overnight desert camp', price: 'From 1,500 MAD', note: 'Includes dinner, breakfast, tent' },
  { service: 'Fishing boat trip (half-day)', price: 'From 1,000 MAD', note: 'Equipment and guide included' },
  { service: 'Kayak rental (per hour)', price: 'From 200 MAD', note: 'Single or double kayak' },
  { service: 'Fresh oysters (per dozen)', price: 'From 50 MAD', note: 'Direct from the oyster farms' },
  { service: 'Seafood restaurant meal', price: 'From 60 MAD', note: 'Main course with sides' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function DakhlaGuidePage() {
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
            backgroundImage: 'url(/images/hero-dakhla.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Dakhla Travel Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wind className="w-4 h-4" />
            Kitesurfing &amp; Desert Coast
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Dakhla Travel Guide:
            <br className="hidden md:block" /> Morocco&apos;s Kitesurfing Paradise
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Where the Sahara meets the Atlantic. World-class kitesurfing, a turquoise lagoon,
            flamingos, desert dunes, and the freshest oysters in Morocco. Your complete guide to Dakhla.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Dakhla Is One of Morocco&apos;s Most Extraordinary Destinations
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Dakhla sits on a narrow peninsula stretching 40 kilometers into the Atlantic, creating a
                vast sheltered lagoon that has become one of the planet&apos;s most celebrated kitesurfing
                spots. But Dakhla is far more than a wind sport destination. It is a place where the Sahara
                runs directly into turquoise waters, where flamingos wade through shallows beside sand
                dunes, and where freshly shucked oysters are harvested from the lagoon that morning.
              </p>
              <p>
                Located in southern Morocco, roughly 1,600 kilometers from Casablanca, Dakhla feels like
                the edge of the world. The light is extraordinary, the landscape stark and beautiful,
                the pace of life gloriously slow. For travelers seeking something truly different from the
                medinas of Marrakech and Fes, Dakhla offers a raw, unspoiled Morocco few visitors see.
              </p>
              <p>
                Whether you come to ride legendary trade winds, explore the desert by 4x4, watch thousands
                of migratory birds, or disconnect in a beachfront eco-camp, Dakhla will leave an impression
                that lasts far longer than the journey to get there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Makes Dakhla Special ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Makes Dakhla Special
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A unique combination of geography, climate, and culture that you simply will not find anywhere else.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Wind className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                300+ Wind Days Per Year
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The Saharan thermal effect and Atlantic trade winds combine to produce consistent, rideable wind almost every day. Peak season sees 25-30 knots daily.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Waves className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                The Perfect Lagoon
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The lagoon stretches over 35 km with vast knee-deep sections. Flat water, warm temperatures, and open space create arguably the safest kitesurfing lagoon in the world.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Sun className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Sahara Meets the Sea
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Golden Saharan dunes dissolve into the Atlantic on this peninsula. The White Dune rises from the lagoon like a mirage, creating landscapes found nowhere else on Earth.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Camera className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Wildlife Paradise
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A Ramsar-designated wetland where thousands of flamingos, herons, and migratory birds gather. Mediterranean monk seals and dolphins inhabit the outer waters.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Fish className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Morocco&apos;s Oyster Capital
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                The nutrient-rich lagoon waters produce Morocco&apos;s finest oysters. Visit the
                oyster farms for freshly shucked oysters from 50 MAD per dozen. The seafood across
                Dakhla is extraordinary and remarkably affordable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                <Heart className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Off the Beaten Path
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Unlike bustling northern medinas, Dakhla is peaceful and uncrowded. It attracts wind chasers, adventurers, and travelers seeking authenticity far from the tourist trail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Things To Do ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Things To Do in Dakhla
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From world-class water sports to desert adventures and wildlife encounters, Dakhla offers far more than kitesurfing.
          </p>

          <div className="space-y-6 max-w-4xl mx-auto">
            {thingsToDo.map((item) => {
              const ItemIcon = item.icon;
              return (
                <div key={item.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {item.activity}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3 text-[var(--color-accent)]" />
                          {item.price}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[var(--color-accent)]" />
                          {item.bestTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Kitesurfing Schools & Camps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wind className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Kitesurfing Schools &amp; Camps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Dakhla&apos;s kite camps are the heart of the destination. Most offer all-inclusive packages
            combining accommodation, meals, lessons, and equipment.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (April-September), when rates may increase by 15-25%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {kiteSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                    {school.type}
                  </span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 mt-2">
                  {school.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{school.description}</p>
                <div className="flex items-center gap-1 text-sm text-[var(--color-accent)] font-semibold mb-3">
                  <DollarSign className="w-3.5 h-3.5" />
                  {school.price}
                </div>
                <div className="flex flex-wrap gap-2">
                  {school.highlights.map((h) => (
                    <span key={h} className="text-xs px-2 py-1 rounded bg-[var(--surface-muted)] text-[var(--text-muted)]">
                      <CheckCircle className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Weather & Wind Chart ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CloudSun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dakhla Weather &amp; Wind Year-Round
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dakhla enjoys a mild, arid climate with warm temperatures and consistent wind throughout the year. Here is what to expect each month.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Month</div>
                <div className="p-3 px-4">Avg Temp</div>
                <div className="p-3 px-4">Wind Range</div>
                <div className="p-3 px-4">Rain</div>
                <div className="p-3 px-4">Kite Rating</div>
              </div>
              {weatherData.map((item, i) => (
                <div
                  key={item.month}
                  className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.month}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">
                    <Thermometer className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                    {item.temp}
                  </div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.wind}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.rain}</div>
                  <div className="p-3 px-4">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      item.kiteRating === 'Excellent'
                        ? 'bg-green-100 text-green-700'
                        : item.kiteRating === 'Very Good'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {item.kiteRating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where To Stay in Dakhla
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From all-inclusive lagoon-front kite camps to eco-lodges and town hotels. The right accommodation depends on what you came to do.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {accommodation.map((cat) => {
              const CatIcon = cat.icon;
              return (
                <div key={cat.category} className="card-moroccan p-6">
                  <CatIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {cat.category}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-4">{cat.description}</p>
                  <div className="space-y-3">
                    {cat.options.map((opt) => (
                      <div key={opt.name} className="border-t border-[var(--border-base)] pt-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-[var(--text-primary)]">{opt.name}</span>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[var(--text-muted)]">
                          <span>{opt.style}</span>
                          <span className="text-[var(--color-accent)] font-semibold">{opt.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Restaurants & Seafood ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Restaurants &amp; Seafood in Dakhla
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dakhla&apos;s food scene revolves around the sea. Expect the freshest fish, lobster, and oysters
            at prices that would be unthinkable in Europe. Seasonal pricing may apply at upscale venues.
          </p>

          <div className="space-y-6">
            {restaurants.map((rest) => (
              <div key={rest.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {rest.name}
                  </h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                    {rest.cuisine}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{rest.description}</p>
                <div className="flex items-center gap-1 text-sm text-[var(--color-accent)] font-semibold">
                  <DollarSign className="w-3.5 h-3.5" />
                  {rest.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dakhla Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for activities, food, and services in Dakhla.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak kite season (April-September) and holiday periods.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Service</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.service}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.service}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to Dakhla
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Dakhla is remote, but well-connected by air. Here are your options for reaching this Saharan paradise.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Plane className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                By Air (Recommended)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Dakhla Airport (VIL) receives daily flights from Casablanca via Royal Air Maroc, taking about 2.5 hours. Fares start from around 1,200 MAD one-way when booked in advance. Seasonal charters also operate from European cities during peak kite season.
              </p>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <CheckCircle className="w-3 h-3 text-[var(--color-gold)]" />
                Most kite camps include airport transfers in their packages
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Navigation className="w-4 h-4 inline mr-2 text-[var(--color-accent)]" />
                By Road
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The drive from Casablanca is ~1,600 km (18-20 hours) on the well-maintained N1 through Agadir, Tiznit, Tan-Tan, and Laayoune. CTM and Supratours buses operate with an overnight stop. Only for road-trip enthusiasts.
              </p>
              <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                <AlertTriangle className="w-3 h-3 text-[var(--color-gold)]" />
                Carry extra water and fuel for the southern stretch
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Visiting Dakhla
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sun className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sun Protection Is Essential
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dakhla&apos;s Saharan sun is intense year-round. High-SPF sunscreen, a hat, and UV-protective
                clothing are non-negotiable. The wind can mask the heat, making sunburn a common hazard for
                kitesurfers. Reapply sunscreen every 2 hours on the water.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Cash Is King
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                While some kite camps and hotels accept cards, many restaurants and small businesses in
                Dakhla are cash-only. There are ATMs in town, but bring enough dirhams for a few days.
                The nearest city with full banking services is Laayoune (550 km north).
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Plan for a Minimum of 5 Days
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dakhla is not a weekend trip. Between the travel time, acclimatizing to the wind patterns,
                and exploring everything the peninsula has to offer, a minimum of 5-7 days is recommended.
                Kitesurfers typically stay 7-14 days to maximize their sessions.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Respect Local Culture
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Dakhla has a Sahrawi (Saharan) culture distinct from northern Morocco. The local people
                are Hassaniya-speaking and follow Saharan traditions. Dress modestly in town, ask permission
                before photographing people, and be respectful during prayer times.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Thermometer className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Pack Layers for Evenings
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                While days are warm, the Atlantic breeze makes evenings cool, especially from November
                to March. A light jacket or fleece is essential. The wind can also make it feel cooler
                than the thermometer suggests, especially on the water.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Sparkles className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Try the Local Tea Ceremony
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Sahrawi tea is different from Moroccan mint tea. It is prepared in three rounds with
                different flavors: the first bitter like life, the second sweet like love, the third
                gentle like death. Accepting tea is a sign of respect and friendship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Dakhla
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time to visit Dakhla for kitesurfing?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                April to September offers the strongest and most consistent trade winds at 20-30 knots daily. Winter months still have rideable days but are less consistent. Water temperatures remain comfortable year-round at 18-22 degrees Celsius.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How do I get to Dakhla Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Fly from Casablanca to Dakhla Airport (VIL) with Royal Air Maroc. Daily flights take about 2.5 hours, starting from around 1,200 MAD one-way. Driving from Casablanca takes 18-20 hours on the N1.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Dakhla safe for tourists?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, Dakhla is very safe. It is a peaceful town with a welcoming atmosphere and a well-established international kitesurfing community. Violent crime targeting tourists is extremely rare. Solo female travelers also report feeling safe.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need kitesurfing experience to visit Dakhla?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Not at all. Dakhla offers desert tours, fishing, wildlife watching, kayaking, sandboarding, and incredible seafood. Beginners can take kite lessons on the flat-water lagoon, one of the safest places to learn thanks to its shallow, obstacle-free waters.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a kitesurfing lesson cost in Dakhla?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Group lessons start from 500 MAD per hour. Full beginner courses (8-12 hours) range from 3,500 to 5,500 MAD. Private lessons start from 800 MAD per hour. Equipment rental starts from 600 MAD per day. Seasonal pricing may apply.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the White Dune in Dakhla?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The White Dune (Dune Blanche) is a stunning white sand dune rising from the lagoon. It is a popular spot for kitesurfers, sandboarders, and photographers. Most kite camps organize excursions there, typically from 200 MAD for the boat transfer.
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
            <Link href="/morocco-surfing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Surfing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From Taghazout to Imsouane, discover Morocco&apos;s world-class surf breaks and surf culture.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-outdoor-activities" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Outdoor Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, trekking, desert tours, and adventure sports across Morocco&apos;s diverse landscapes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-beaches-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Beaches Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best beaches along Morocco&apos;s Atlantic and Mediterranean coasts for swimming and relaxation.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-wildlife-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Wildlife Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Flamingos, Barbary macaques, desert wildlife, and birdwatching across Morocco&apos;s ecosystems.
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

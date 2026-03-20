import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
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
  Crown,
  Utensils,
  Plane,
  Globe,
  Camera,
  Compass,
  Scale,
  CircleDot,
  Wind,
  Waves,
  Music,
  Palette,
  Sunset,
  Anchor,
  Fish,
  Coffee,
  Shell,
} from 'lucide-react';

/* ================================================================
   CONSTANTS
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Essaouira vs Agadir 2026 | Which Morocco Beach Town Should You Visit?',
  description:
    'Essaouira vs Agadir: the ultimate Morocco beach comparison. Beaches, surf, culture, food, accommodation, nightlife, water sports, and costs. Honest head-to-head with prices in MAD for 2026.',
  keywords: [
    'Essaouira vs Agadir',
    'Agadir or Essaouira',
    'Essaouira or Agadir',
    'Morocco beach town comparison',
    'should I visit Essaouira or Agadir',
    'Essaouira vs Agadir beaches',
    'Essaouira vs Agadir surfing',
    'Essaouira vs Agadir cost',
    'Essaouira vs Agadir nightlife',
    'best beach town Morocco',
    'Morocco Atlantic coast',
    'Essaouira vs Agadir accommodation',
    'Essaouira vs Agadir families',
    'Essaouira vs Agadir wind',
    'Morocco beach holiday 2026',
    'Essaouira vs Agadir water sports',
  ],
  openGraph: {
    title: 'Essaouira vs Agadir 2026 | Which Morocco Beach Town Should You Visit?',
    description:
      'Complete head-to-head comparison of Morocco\'s two Atlantic coast gems. Beaches, culture, surf, food, costs, and which suits your travel style.',
    url: `${BASE_URL}/essaouira-vs-agadir`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Essaouira fortified coastal town with blue boats in the harbor and Atlantic waves',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Essaouira vs Agadir 2026 | Morocco Beach Showdown',
    description:
      'Head-to-head comparison: beaches, surf, culture, food, water sports, and costs. The honest guide to choosing between Morocco\'s two Atlantic coast towns.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/essaouira-vs-agadir` },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/essaouira-vs-agadir`,
  name: 'Essaouira vs Agadir 2026 | Which Morocco Beach Town Should You Visit?',
  description:
    'Complete head-to-head comparison of Essaouira and Agadir covering beaches, culture, surf, food, accommodation, nightlife, water sports, and costs for 2026 travelers.',
  url: `${BASE_URL}/essaouira-vs-agadir`,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/essaouira-vs-agadir`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Essaouira', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
    { '@type': 'City', name: 'Agadir', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Essaouira vs Agadir', item: `${BASE_URL}/essaouira-vs-agadir` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is Essaouira or Agadir better for a beach holiday?', acceptedAnswer: { '@type': 'Answer', text: 'Agadir is better for a classic beach holiday with calm water, long sandy shores, and warm temperatures. Essaouira is better for wind sports and bohemian atmosphere but the beach is windier and the water cooler.' } },
    { '@type': 'Question', name: 'Which is windier, Essaouira or Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Essaouira is significantly windier, especially from April to September when the Alizee trade winds blow consistently. This makes it a world-class kitesurfing and windsurfing destination but less ideal for sunbathing. Agadir is more sheltered.' } },
    { '@type': 'Question', name: 'Is Essaouira or Agadir cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Essaouira is slightly cheaper for accommodation (riads from 300 MAD vs resort hotels from 500 MAD in Agadir) and food. However, Agadir has more budget all-inclusive resort options. Seasonal pricing can change during peak periods.' } },
    { '@type': 'Question', name: 'How far apart are Essaouira and Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Approximately 175 km apart, about 2.5-3 hours by car or bus. Supratours and CTM run regular services from 70 MAD. There is no train connection between the two cities.' } },
    { '@type': 'Question', name: 'Which has a better medina: Essaouira or Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Essaouira has a far superior medina - a UNESCO-listed 18th century Portuguese-Moroccan fortified town with art galleries, boutiques, and the iconic ramparts. Agadir was rebuilt after the 1960 earthquake and has no historic medina.' } },
    { '@type': 'Question', name: 'Can I visit both Essaouira and Agadir in one trip?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Spend 2-3 days in each with a scenic coastal drive between them. The route passes through beautiful argan tree country. Combined, they give you the full Atlantic Morocco experience.' } },
    { '@type': 'Question', name: 'Which is better for families: Essaouira or Agadir?', acceptedAnswer: { '@type': 'Answer', text: 'Agadir is better for families with young children thanks to calm beaches, resort pools, waterparks, and warmer water. Essaouira suits families with older children who enjoy wind sports and cultural exploration.' } },
    { '@type': 'Question', name: 'Is Essaouira or Agadir better for surfing?', acceptedAnswer: { '@type': 'Answer', text: 'Essaouira is better for wind-powered sports (kitesurfing, windsurfing) while nearby Sidi Kaouki offers excellent wave surfing. Agadir area (Taghazout, Tamraght) is Morocco\'s top wave surfing destination with consistent swells.' } },
  ],
};

/* ================================================================ */

const comparisonTable = [
  { category: 'Overall Vibe', essaouira: 'Bohemian, artistic, windswept', agadir: 'Modern resort, relaxed, sunny', winner: 'tie', icon: Heart },
  { category: 'Beach Type', essaouira: 'Wide, windy, great for surfing', agadir: 'Long, calm, golden sand', winner: 'tie', icon: Waves },
  { category: 'Wind Level', essaouira: 'Very windy (Alizee trade winds)', agadir: 'Sheltered, moderate breeze', winner: 'agadir', icon: Wind },
  { category: 'Water Temp', essaouira: '17-21 degrees C (cooler)', agadir: '19-23 degrees C (warmer)', winner: 'agadir', icon: Thermometer },
  { category: 'Medina', essaouira: 'UNESCO-listed, 18th century', agadir: 'No historic medina (rebuilt 1960)', winner: 'essaouira', icon: MapPin },
  { category: 'Airport', essaouira: 'Mogador (ESU) - Limited flights', agadir: 'Al Massira (AGA) - International hub', winner: 'agadir', icon: Plane },
  { category: 'Culture & Art', essaouira: 'Galleries, Gnaoua music, film sets', agadir: 'Modern museums, marina promenade', winner: 'essaouira', icon: Palette },
  { category: 'Nightlife', essaouira: 'Low-key cafes and riads', agadir: 'Bars, clubs, resort entertainment', winner: 'agadir', icon: Music },
  { category: 'Budget-Friendliness', essaouira: 'Cheaper riads and restaurants', agadir: 'All-inclusive resort deals', winner: 'tie', icon: DollarSign },
  { category: 'Best For', essaouira: 'Wind sports, culture, photography', agadir: 'Sunbathing, families, relaxation', winner: 'tie', icon: Star },
  { category: 'Seafood', essaouira: 'Legendary port fish grills', agadir: 'Restaurants and marina dining', winner: 'essaouira', icon: Fish },
  { category: 'Tourist Crowds', essaouira: 'Moderate, indie travelers', agadir: 'High, package tourism', winner: 'essaouira', icon: Users },
];

/* ================================================================ */

const budgetBreakdown = [
  {
    tier: 'Budget',
    icon: Compass,
    essaouira: {
      daily: 'From 250 MAD',
      accommodation: 'From 80 MAD (hostel or basic riad)',
      food: 'From 60 MAD (port grills, street food)',
      transport: 'From 10 MAD (walking city, occasional taxi)',
      activities: 'From 100 MAD (beach, medina, free galleries)',
    },
    agadir: {
      daily: 'From 350 MAD',
      accommodation: 'From 150 MAD (budget hotel or hostel)',
      food: 'From 80 MAD (cafes, beach restaurants)',
      transport: 'From 20 MAD (local buses, petit taxis)',
      activities: 'From 100 MAD (beach, souk, promenade)',
    },
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    essaouira: {
      daily: 'From 600 MAD',
      accommodation: 'From 300 MAD (charming medina riad)',
      food: 'From 120 MAD (restaurants, fresh seafood)',
      transport: 'From 30 MAD (walking + occasional excursion)',
      activities: 'From 150 MAD (surf lesson, cooking class)',
    },
    agadir: {
      daily: 'From 800 MAD',
      accommodation: 'From 500 MAD (beachfront hotel)',
      food: 'From 130 MAD (marina dining, restaurants)',
      transport: 'From 40 MAD (taxis, hotel shuttle)',
      activities: 'From 130 MAD (jet ski, boat trip, golf)',
    },
  },
  {
    tier: 'Luxury',
    icon: Crown,
    essaouira: {
      daily: 'From 2,000 MAD',
      accommodation: 'From 1,500 MAD (boutique riad or Heure Bleue)',
      food: 'From 300 MAD (fine dining, private chef)',
      transport: 'From 50 MAD (private transfers)',
      activities: 'From 150 MAD (private surf, quad, spa)',
    },
    agadir: {
      daily: 'From 3,000 MAD',
      accommodation: 'From 2,000 MAD (5-star resort, Sofitel, Tikida)',
      food: 'From 400 MAD (resort dining, upscale restaurants)',
      transport: 'From 100 MAD (private driver, transfers)',
      activities: 'From 500 MAD (golf, spa packages, yacht)',
    },
  },
];

/* ================================================================ */

const essaouiraWins = [
  {
    title: 'UNESCO Medina & Culture',
    icon: MapPin,
    description:
      'An 18th century Portuguese-Moroccan fortified town with art galleries, Gnaoua music heritage, and whitewashed alleyways draped in blue shutters. Walk the ramparts at sunset for one of Morocco\'s most iconic views.',
  },
  {
    title: 'Wind Sports Capital',
    icon: Wind,
    description:
      'The Alizee trade winds blow from April to September, making Essaouira one of the world\'s top kitesurfing and windsurfing destinations. Lessons from 400 MAD. Equipment rental from 200 MAD per session.',
  },
  {
    title: 'Authentic Seafood',
    icon: Fish,
    description:
      'The port fish market and outdoor grills serve the freshest catch in Morocco. Choose your fish, have it grilled on the spot. Full seafood platters from 60 MAD. An unforgettable experience.',
  },
  {
    title: 'Artistic & Bohemian Soul',
    icon: Palette,
    description:
      'Jimi Hendrix and Orson Welles were drawn here. Today, art galleries line the medina, the annual Gnaoua World Music Festival draws global artists, and creative energy fills every alley.',
  },
  {
    title: 'Photography Paradise',
    icon: Camera,
    description:
      'Blue fishing boats, whitewashed ramparts, Atlantic spray, argan-climbing goats nearby, and golden hour light that photographers dream about. Far fewer tourists in your shots than Agadir.',
  },
  {
    title: 'Escape the Crowds',
    icon: ShieldCheck,
    description:
      'While Agadir fills with package tourists, Essaouira attracts independent travelers, artists, and surfers. A more personal, relaxed experience without mass tourism infrastructure.',
  },
];

const agadirWins = [
  {
    title: 'Calm, Warm Beaches',
    icon: Waves,
    description:
      'A 10 km crescent of golden sand with calm, swimmable water and warm temperatures year-round. Average 300 days of sunshine. Perfect for sunbathing, swimming, and building sandcastles with kids.',
  },
  {
    title: 'Family-Friendly Infrastructure',
    icon: Users,
    description:
      'Resort pools, waterparks, organized beach activities, kids clubs, and a wide promenade. Hotels with all-inclusive packages make family logistics easy. Safer swimming conditions for children.',
  },
  {
    title: 'International Airport Hub',
    icon: Plane,
    description:
      'Al Massira Airport (AGA) has direct flights from dozens of European cities including budget airlines. Essaouira\'s tiny Mogador airport has very limited connections.',
  },
  {
    title: 'Nightlife & Entertainment',
    icon: Music,
    description:
      'Beach bars, hotel clubs, the marina district, and a lively promenade scene. Essaouira rolls up the sidewalks after dinner. Agadir keeps the party going into the small hours.',
  },
  {
    title: 'Modern Comfort & Resorts',
    icon: Building,
    description:
      'International hotel chains, modern spas, championship golf courses (Golf du Soleil, Golf de l\'Ocean), and contemporary amenities. For travelers who prefer resorts over riads.',
  },
  {
    title: 'All-Season Warmth',
    icon: Sunset,
    description:
      'Even in winter, Agadir averages 20-22 degrees C with sunshine. Essaouira\'s wind chill makes it feel cooler year-round. Agadir is Morocco\'s sunniest city with 300+ days of sun.',
  },
];

/* ================================================================ */

const travelerTypes = [
  { type: 'Families with Kids', recommendation: 'Agadir', icon: Users, reason: 'Calm beaches, resort pools, waterparks, and all-inclusive options. Safe swimming and modern amenities.' },
  { type: 'Surfers & Kitesurfers', recommendation: 'Essaouira', icon: Wind, reason: 'World-class wind sports, nearby Sidi Kaouki for wave surfing. Lessons from 400 MAD.' },
  { type: 'Culture Lovers', recommendation: 'Essaouira', icon: Palette, reason: 'UNESCO medina, Gnaoua music, art galleries, and Portuguese-Moroccan heritage. No contest.' },
  { type: 'Budget Travelers', recommendation: 'Essaouira', icon: DollarSign, reason: 'Cheaper riads from 300 MAD, affordable port seafood, and free medina exploration.' },
  { type: 'Luxury Seekers', recommendation: 'Agadir', icon: Crown, reason: '5-star resorts, golf courses, spas, and marina fine dining. International-standard luxury.' },
  { type: 'Photographers', recommendation: 'Essaouira', icon: Camera, reason: 'Blue boats, ramparts, whitewashed alleys, and golden light. One of Morocco\'s most photogenic towns.' },
  { type: 'Nightlife Fans', recommendation: 'Agadir', icon: Music, reason: 'Beach bars, nightclubs, hotel entertainment, and a vibrant marina scene after dark.' },
  { type: 'Couples & Honeymooners', recommendation: 'Essaouira', icon: Heart, reason: 'Romantic riad courtyards, sunset rampart walks, intimate seafood dinners. Far more character.' },
];

/* ================================================================ */

const combinedItinerary = [
  { day: 'Days 1-2', location: 'Arrive Essaouira', icon: Plane, highlights: 'Settle into a medina riad, explore the ramparts at sunset, dinner at the port fish grills, wander the art galleries and Gnaoua music shops' },
  { day: 'Day 3', location: 'Essaouira Beach & Surf', icon: Wind, highlights: 'Morning kitesurfing or windsurfing lesson, afternoon at the beach, visit the spice and argan oil souks, rooftop dinner' },
  { day: 'Day 4', location: 'Sidi Kaouki Day Trip', icon: Waves, highlights: 'Drive 25 km south to Sidi Kaouki for wave surfing, horseback riding on the beach, fresh seafood lunch, return to Essaouira for sunset' },
  { day: 'Day 5', location: 'Drive to Agadir', icon: Compass, highlights: 'Scenic 2.5-hour coastal drive through argan country. Stop to see goats in argan trees. Arrive Agadir, check into beachfront hotel' },
  { day: 'Days 6-7', location: 'Agadir Beach & Activities', icon: Sunset, highlights: 'Beach days, jet skiing, Agadir marina lunch, Souk El Had shopping, sunset from the Kasbah ruins, evening promenade and nightlife' },
  { day: 'Day 8', location: 'Taghazout Surf Day Trip', icon: Anchor, highlights: 'Drive 20 minutes north to Taghazout surf village. Surf lessons, beach cafe lunch, browse the surf shops, return to Agadir' },
  { day: 'Day 9', location: 'Departure from Agadir', icon: Plane, highlights: 'Final beach morning, pick up argan oil souvenirs from Souk El Had, depart from Al Massira Airport' },
];

/* ================================================================ */

const faqs = [
  {
    question: 'Is Essaouira or Agadir better for a beach holiday?',
    answer:
      'It depends on your style. Agadir has calm, warm water perfect for swimming and sunbathing on a 10 km sandy beach. Essaouira has a dramatic windswept beach ideal for surf and kite sports but less suited to traditional sunbathing. Families and resort lovers choose Agadir; adventurers and culture seekers choose Essaouira.',
  },
  {
    question: 'Which is windier: Essaouira or Agadir?',
    answer:
      'Essaouira is significantly windier. The Alizee trade winds blow strongly from April through September, earning it the nickname "Wind City of Africa." This is great for kitesurfing and windsurfing but can be intense for beach lounging. Agadir sits in a more sheltered bay with moderate breezes.',
  },
  {
    question: 'Is Essaouira or Agadir cheaper?',
    answer:
      'Essaouira is generally cheaper. Charming riads from 300 MAD versus beachfront hotels from 500 MAD in Agadir. Port seafood from 60 MAD versus from 100 MAD at Agadir restaurants. However, Agadir offers all-inclusive resort packages that can represent good value. Seasonal pricing can change during peak periods.',
  },
  {
    question: 'How far apart are Essaouira and Agadir?',
    answer:
      'Approximately 175 km, about 2.5-3 hours by car or bus. Supratours and CTM run regular services from 70 MAD. The scenic drive passes through beautiful argan tree country. There is no train connection between the two cities.',
  },
  {
    question: 'Which has a better medina?',
    answer:
      'Essaouira wins by a wide margin. Its UNESCO-listed 18th century fortified medina is one of Morocco\'s most beautiful, with whitewashed buildings, blue shutters, art galleries, and iconic ramparts. Agadir was rebuilt after the devastating 1960 earthquake and has no historic medina, though Souk El Had is worth visiting.',
  },
  {
    question: 'Can I visit both in one trip?',
    answer:
      'Absolutely. Spend 2-3 days in Essaouira for the culture and wind sports, then drive to Agadir (2.5 hours) for beach relaxation and resort amenities. The coastal drive through argan country is scenic. Combined, you get the full Atlantic Morocco experience.',
  },
  {
    question: 'Which is better for families?',
    answer:
      'Agadir for families with young children: calm swimming beaches, resort pools, waterparks, kids clubs, and modern infrastructure. Essaouira suits families with older children (10+) who enjoy wind sports, cultural exploration, and a more adventurous atmosphere.',
  },
  {
    question: 'Is Essaouira or Agadir better for surfing?',
    answer:
      'Essaouira excels at wind-powered sports (kitesurfing, windsurfing) while nearby Sidi Kaouki has excellent wave surfing. For dedicated wave surfing, Taghazout and Tamraght near Agadir are Morocco\'s premier surf spots with consistent Atlantic swells and a laid-back surf culture.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function EssaouiraVsAgadirPage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-essaouira.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Essaouira vs Agadir</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            Beach Town Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Essaouira vs Agadir:
            <br className="hidden md:block" /> Morocco&apos;s Atlantic Coast Showdown
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Two Atlantic coast gems, two completely different beach experiences.
            The honest comparison to help you choose between Morocco&apos;s bohemian
            wind city and its modern resort capital in 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Two Shores, One Coastline, Worlds Apart
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s Atlantic coast offers two standout destinations just 175 km apart,
                yet they feel like different countries. Essaouira is the bohemian wind city: a
                UNESCO-listed medina, art galleries in every alley, legendary port seafood, and
                trade winds that draw kitesurfers from around the world. Agadir is the modern
                beach resort: 10 km of golden sand, calm warm water, international hotels, and
                300 days of sunshine per year.
              </p>
              <p>
                One wraps you in centuries of culture and the raw power of the Atlantic. The
                other pampers you with poolside comfort and a gentle sea breeze. This guide
                compares them across every dimension that matters so you can pick the right
                beach town for your trip, or better yet, combine them both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- At-a-Glance Comparison Table -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            At-a-Glance Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How Essaouira and Agadir compare across 12 key categories that matter most to travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices in MAD reflect 2026 mid-season rates. Seasonal pricing can change.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Essaouira</div>
                <div className="p-3 px-4">Agadir</div>
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
                    <div className={`p-3 px-4 ${row.winner === 'essaouira' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.essaouira}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'agadir' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.agadir}
                    </div>
                    <div className="p-3 px-4 text-center">
                      {row.winner === 'essaouira' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                          <CheckCircle className="w-3.5 h-3.5" /> Essaouira
                        </span>
                      )}
                      {row.winner === 'agadir' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
                          <CircleDot className="w-3.5 h-3.5" /> Agadir
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

      {/* -- Culture & Atmosphere -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; Atmosphere
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One is a living piece of history; the other is a modern creation. The cultural gap is enormous.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Essaouira: The Bohemian Wind City
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Built in the 18th century by Sultan Mohammed III with French architect Theodore
                Cornut, Essaouira blends Moroccan, Portuguese, and French influences into
                something unique. The medina is UNESCO-listed, the Gnaoua music tradition is
                intangible cultural heritage, and artists from Jimi Hendrix to Orson Welles
                found inspiration here. Every alley holds a gallery, a music shop, or a spice
                merchant. The port is a working fishing harbor where the day&apos;s catch is
                grilled steps from the boats.
              </p>
              <div className="flex flex-wrap gap-2">
                {['UNESCO medina (2001)', 'Gnaoua music heritage', 'Art galleries everywhere', 'Portuguese ramparts', 'Working fishing port', 'Jimi Hendrix connection'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Agadir: The Modern Resort Capital
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Agadir was almost entirely destroyed by a devastating earthquake in 1960 and
                rebuilt as a modern city. There is no ancient medina or historic architecture.
                Instead, you get wide boulevards, a palm-lined beach promenade, international
                hotels, and a marina district with upscale restaurants. The Kasbah ruins on the
                hilltop offer panoramic views and a reminder of what was lost. Agadir prioritizes
                comfort and convenience over history.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Rebuilt after 1960 earthquake', 'Modern beach promenade', 'Marina district', 'Souk El Had (largest in region)', 'Kasbah hilltop ruins', '300+ days of sunshine'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Beach Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Beach Showdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both have Atlantic beaches, but the experiences could not be more different.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Wind className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Essaouira Beach
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  'Wide sandy beach stretching south toward Sidi Kaouki',
                  'Strong Alizee trade winds, especially April-September',
                  'Cooler water (17-21 degrees C), strong currents',
                  'World-class for kitesurfing, windsurfing, and sand yachting',
                  'Camel rides along the shore from 100 MAD',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Sunset className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Agadir Beach
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  '10 km crescent of golden sand, one of Morocco\'s longest',
                  'Sheltered bay with calm, warm water for swimming',
                  'Warmer water (19-23 degrees C), gentle waves',
                  'Sun loungers, parasols, and beach clubs along the shore',
                  'Jet skiing, banana boats, and paddleboarding available',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CircleDot className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Beach Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Agadir wins for traditional beach holidays: calm water, warm sun, and lounger-and-cocktail
              comfort. Essaouira wins for active beach days: surf, kite, and the dramatic feeling of
              wind and waves. If you want to swim and sunbathe, choose Agadir. If you want to ride
              the wind, choose Essaouira.
            </p>
          </div>
        </div>
      </section>

      {/* -- Things to Do -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Things to Do Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Beyond the beach: what each town offers for exploration and adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Essaouira Activities', icon: Palette,
                items: [
                  { activity: 'Walk the ramparts at sunset', price: 'Free' },
                  { activity: 'Kitesurfing/windsurfing lesson', price: 'From 400 MAD' },
                  { activity: 'Port fish grill lunch', price: 'From 60 MAD' },
                  { activity: 'Art gallery hopping in the medina', price: 'Free' },
                  { activity: 'Cooking class (Moroccan seafood)', price: 'From 350 MAD' },
                  { activity: 'Sidi Kaouki surf day trip', price: 'From 200 MAD' },
                  { activity: 'Camel ride on the beach', price: 'From 100 MAD' },
                  { activity: 'Gnaoua music experience', price: 'From 50 MAD' },
                ],
              },
              {
                title: 'Agadir Activities', icon: Anchor,
                items: [
                  { activity: 'Beach day with lounger and parasol', price: 'From 50 MAD' },
                  { activity: 'Jet skiing or banana boat', price: 'From 200 MAD' },
                  { activity: 'Souk El Had shopping', price: 'Free entry' },
                  { activity: 'Kasbah ruins sunset viewpoint', price: 'Free' },
                  { activity: 'Marina dining and stroll', price: 'From 100 MAD' },
                  { activity: 'Golf (Golf du Soleil)', price: 'From 400 MAD' },
                  { activity: 'Taghazout surf excursion', price: 'From 300 MAD' },
                  { activity: 'Paradise Valley day trip', price: 'From 250 MAD' },
                ],
              },
            ].map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <SectionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{section.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.activity} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                        <span className="text-sm text-[var(--text-primary)]">{item.activity}</span>
                        <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Food & Dining -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both towns serve Atlantic seafood, but the dining cultures are distinct.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Essaouira Dining', icon: Fish,
                intro: 'Morocco\'s seafood capital. The port grills are legendary. Fresh, simple, unforgettable.',
                dishes: [
                  { dish: 'Port fish grill platter', price: 'From 60 MAD', desc: 'Choose your catch, grilled on the spot' },
                  { dish: 'Sardine chermoula', price: 'From 30 MAD', desc: 'Marinated sardines, Essaouira specialty' },
                  { dish: 'Seafood tagine', price: 'From 50 MAD', desc: 'Fish with preserved lemons and olives' },
                  { dish: 'Fresh oysters', price: 'From 40 MAD', desc: 'Atlantic oysters at the port' },
                  { dish: 'Cooking class', price: 'From 350 MAD', desc: 'Learn Souiri seafood recipes' },
                ],
              },
              {
                title: 'Agadir Dining', icon: Coffee,
                intro: 'International variety meets Moroccan flavors. Marina fine dining to casual beach cafes.',
                dishes: [
                  { dish: 'Marina restaurant meal', price: 'From 100 MAD', desc: 'Upscale seafood with ocean views' },
                  { dish: 'Beach cafe lunch', price: 'From 60 MAD', desc: 'Fresh fish, salads, and tajines' },
                  { dish: 'Souk El Had street food', price: 'From 20 MAD', desc: 'Local snacks and grilled meats' },
                  { dish: 'Resort buffet dinner', price: 'From 150 MAD', desc: 'International and Moroccan cuisine' },
                  { dish: 'Promenade ice cream', price: 'From 15 MAD', desc: 'Gelato along the corniche' },
                ],
              },
            ].map((cuisine) => {
              const CuisineIcon = cuisine.icon;
              return (
                <div key={cuisine.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CuisineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{cuisine.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{cuisine.intro}</p>
                  <div className="space-y-2">
                    {cuisine.dishes.map((item) => (
                      <div key={item.dish} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                        <div><span className="text-sm font-medium text-[var(--text-primary)]">{item.dish}</span><p className="text-xs text-[var(--text-muted)]">{item.desc}</p></div>
                        <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Food Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Essaouira wins for seafood lovers who want the freshest catch grilled at the port,
              authentic Moroccan flavors, and an unforgettable atmosphere. Agadir wins for dining
              variety: international cuisine, resort dining, and the upscale marina scene. Seasonal
              pricing can change restaurant costs during peak periods.
            </p>
          </div>
        </div>
      </section>

      {/* -- Accommodation -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essaouira riads vs Agadir resorts: completely different hospitality experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Essaouira: Riads &amp; Boutique Hotels
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  { type: 'Budget hostels', price: 'From 80 MAD', note: 'Dorms and basic rooms in the medina' },
                  { type: 'Charming riads', price: 'From 300 MAD', note: 'Courtyard homes with rooftop terraces' },
                  { type: 'Boutique hotels', price: 'From 800 MAD', note: 'Design-led, ocean views, hammam' },
                  { type: 'Luxury (Heure Bleue Palais)', price: 'From 1,500 MAD', note: 'Essaouira\'s finest with pool and spa' },
                ].map((acc) => (
                  <div key={acc.type} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                    <div><span className="font-medium text-[var(--text-primary)]">{acc.type}</span><p className="text-xs text-[var(--text-muted)]">{acc.note}</p></div>
                    <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{acc.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Agadir: Resorts &amp; Hotels
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                {[
                  { type: 'Budget hotels', price: 'From 150 MAD', note: 'Basic rooms near the beach strip' },
                  { type: 'Beachfront hotels', price: 'From 500 MAD', note: 'Pool, beach access, breakfast included' },
                  { type: 'All-inclusive resorts', price: 'From 900 MAD', note: 'RIU, Iberostar, meals and drinks included' },
                  { type: '5-star luxury (Sofitel, Tikida)', price: 'From 2,000 MAD', note: 'Spa, golf, private beach, fine dining' },
                ].map((acc) => (
                  <div key={acc.type} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                    <div><span className="font-medium text-[var(--text-primary)]">{acc.type}</span><p className="text-xs text-[var(--text-muted)]">{acc.note}</p></div>
                    <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{acc.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Water Sports -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Sports
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Wind-powered thrills vs motorized fun: two different approaches to ocean adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Essaouira: Wind Is King
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The Alizee trade winds make Essaouira one of the world&apos;s top destinations
                for wind-powered sports. Consistent winds from April to September.
              </p>
              <div className="space-y-2">
                {[
                  { sport: 'Kitesurfing lesson (2 hrs)', price: 'From 400 MAD' },
                  { sport: 'Windsurfing rental (half day)', price: 'From 200 MAD' },
                  { sport: 'Sand yachting session', price: 'From 150 MAD' },
                  { sport: 'Wave surfing at Sidi Kaouki', price: 'From 250 MAD' },
                  { sport: 'Stand-up paddleboarding', price: 'From 100 MAD' },
                ].map((item) => (
                  <div key={item.sport} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                    <span className="text-sm text-[var(--text-primary)]">{item.sport}</span>
                    <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Agadir: Calm Water Adventures
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Sheltered waters make Agadir ideal for motorized sports and family-friendly
                activities. Warmer water extends the comfortable season.
              </p>
              <div className="space-y-2">
                {[
                  { sport: 'Jet ski rental (30 min)', price: 'From 200 MAD' },
                  { sport: 'Banana boat ride', price: 'From 100 MAD' },
                  { sport: 'Glass-bottom boat tour', price: 'From 150 MAD' },
                  { sport: 'Parasailing', price: 'From 300 MAD' },
                  { sport: 'Fishing boat excursion', price: 'From 400 MAD' },
                ].map((item) => (
                  <div key={item.sport} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                    <span className="text-sm text-[var(--text-primary)]">{item.sport}</span>
                    <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Nightlife -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Nightlife &amp; Entertainment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A tale of two evenings: rooftop tranquility vs resort party scene.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Essaouira Evenings
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  'Intimate rooftop riad terraces with mint tea or wine',
                  'Live Gnaoua music in medina cafes and cultural venues',
                  'Quiet medina strolls under lantern light after dinner',
                  'Annual Gnaoua World Music Festival (June) transforms the city',
                  'Early to bed: most places wind down by 22:00-23:00',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Shell className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Agadir Evenings
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {[
                  'Beach bars and hotel clubs with DJs and live music',
                  'Marina district cocktails with ocean-view terraces',
                  'Promenade evening strolls with street performers',
                  'Nightclubs open until 03:00-04:00 AM in tourist zone',
                  'Resort entertainment: shows, themed nights, poolside parties',
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <Music className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Cost Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost Comparison by Travel Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you will actually spend per day in each town across three budget levels.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tier.tier}</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Essaouira', data: tier.essaouira, color: 'text-[var(--color-accent)]' },
                      { label: 'Agadir', data: tier.agadir, color: 'text-[var(--text-muted)]' },
                    ].map((town) => (
                      <div key={town.label} className="p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-semibold ${town.color}`}>{town.label}</span>
                          <span className="text-base font-bold text-[var(--text-primary)]">{town.data.daily}<span className="text-xs font-normal text-[var(--text-muted)]">/day</span></span>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] space-y-0.5">
                          <p>Stay: {town.data.accommodation} | Food: {town.data.food}</p>
                          <p>Transport: {town.data.transport} | Activities: {town.data.activities}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in MAD. Seasonal pricing can change during peak periods (Easter, Christmas, summer).
          </p>
        </div>
      </section>

      {/* -- Choose Essaouira If... / Choose Agadir If... -- */}
      {[
        { title: 'Choose Essaouira If...', icon: CheckCircle, items: essaouiraWins, bg: '', pattern: '' },
        { title: 'Choose Agadir If...', icon: CircleDot, items: agadirWins, bg: 'bg-[var(--surface-muted)]', pattern: 'moroccan-pattern' },
      ].map((section) => {
        const SectionIcon = section.icon;
        return (
          <section key={section.title} className={`py-16 md:py-20 ${section.bg} ${section.pattern}`}>
            <div className="container-morocco">
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
                <SectionIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.title} className="card-moroccan p-5">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                        <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* -- Which to Visit by Traveler Type -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Town by Traveler Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A quick guide based on what matters most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelerTypes.map((tt) => {
              const TypeIcon = tt.icon;
              return (
                <div key={tt.type} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TypeIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{tt.type}</span>
                    <span className={`text-xs font-semibold ml-2 ${tt.recommendation === 'Essaouira' ? 'text-[var(--color-accent)]' : 'text-[var(--color-gold)]'}`}>{tt.recommendation}</span>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{tt.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Combined Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Not Both? The 9-Day Atlantic Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best answer is to combine them. Here is a suggested itinerary covering both Atlantic gems.
          </p>

          <div className="space-y-4">
            {combinedItinerary.map((stop) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.day} className="card-moroccan p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <StopIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stop.location}</h3>
                      <span className="text-xs text-[var(--text-muted)] shrink-0 ml-2">{stop.day}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{stop.highlights}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Combined Trip Budget
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A 9-day Essaouira and Agadir itinerary at mid-range comfort costs approximately from 6,500 MAD
              total including the inter-city bus or car rental. Budget travelers can do it from 3,000 MAD;
              luxury travelers should expect from 22,000 MAD. Seasonal pricing can change these estimates
              during peak periods. Book accommodation in advance for best rates.
            </p>
          </div>
        </div>
      </section>

      {/* -- Final Verdict -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Final Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our honest assessment after comparing every dimension.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p><strong className="text-[var(--text-primary)]">Essaouira wins on culture, character, and authenticity.</strong> A UNESCO medina, legendary seafood port, world-class wind sports, and a bohemian soul that draws artists and adventurers. Morocco at its most photogenic and atmospheric.</p>
              <p><strong className="text-[var(--text-primary)]">Agadir wins on comfort, warmth, and family-friendliness.</strong> Calm beaches, resort luxury, nightlife, modern amenities, and 300 days of guaranteed sunshine. The easier, more predictable beach holiday.</p>
              <p><strong className="text-[var(--text-primary)]">The best answer?</strong> Visit both. Start in Essaouira for the wind, culture, and seafood, then drive south to Agadir for beach relaxation and resort comfort. Together they reveal the full breadth of Morocco&apos;s Atlantic coast: the town that kept its ancient soul, and the city that built a new one from the ground up.</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
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

      {/* -- Related Pages -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/essaouira', icon: Wind, title: 'Essaouira Complete Guide', desc: 'Everything about the Wind City: medina, beaches, Gnaoua music, and local tips.' },
              { href: '/agadir', icon: Sunset, title: 'Agadir Complete Guide', desc: 'Morocco\'s sunniest beach resort: beaches, marina, activities, and practical info.' },
              { href: '/things-to-do-essaouira', icon: Palette, title: 'Things to Do in Essaouira', desc: 'From rampart walks to port grills: the complete Essaouira activity guide.' },
              { href: '/things-to-do-agadir', icon: Anchor, title: 'Things to Do in Agadir', desc: 'Beaches, water sports, Souk El Had, and day trips from Morocco\'s resort capital.' },
              { href: '/morocco-beach-towns', icon: Waves, title: 'Morocco Beach Towns Guide', desc: 'Every coastal destination ranked: from Tangier to Dakhla and everywhere between.' },
              { href: '/best-beaches-morocco', icon: Star, title: 'Best Beaches in Morocco', desc: 'The definitive ranking of Morocco\'s finest Atlantic and Mediterranean beaches.' },
            ].map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link key={link.href} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <LinkIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Heart,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Compass,
  Award,
  BookOpen,
  Crown,
  Waves,
  Sun,
  Calendar,
  Flag,
  Target,
  Zap,
  Globe,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Horse Riding Guide 2026 | Beach Rides, Atlas Treks & Fantasia Shows',
  description:
    'Complete guide to horse riding in Morocco. Explore the Barb horse breed, beach rides in Essaouira and Dakhla, Atlas Mountains treks, desert horseback excursions, Fantasia (Tbourida) shows, riding schools, multi-day equestrian tours, and polo in Marrakech. Prices from 350 MAD.',
  keywords: [
    'Morocco horse riding',
    'horse riding Morocco',
    'Barb horse Morocco',
    'Essaouira beach horse riding',
    'Atlas Mountains horse trek',
    'Morocco equestrian tours',
    'Fantasia show Morocco',
    'Tbourida Morocco',
    'Dakhla horse riding',
    'Marrakech polo',
    'Morocco riding school',
    'desert horse riding Morocco',
    'multi-day horse trek Morocco',
    'Morocco horseback tour',
    'Royal Equestrian Federation Morocco',
    'horse riding prices Morocco 2026',
    'Morocco equestrian holiday',
    'Barb horse breed',
    'Morocco horse culture',
    'horse riding Marrakech',
  ],
  openGraph: {
    title: 'Morocco Horse Riding Guide 2026 | Beach Rides, Atlas Treks & Fantasia Shows',
    description:
      'Discover Morocco on horseback. From Atlantic beach gallops and Atlas Mountain treks to desert excursions and legendary Fantasia shows. Complete guide with prices, top operators, and booking tips.',
    url: `${BASE_URL}/morocco-horse-riding`,
    images: [
      {
        url: `${BASE_URL}/images/hero-horse-riding.webp`,
        width: 1200,
        height: 630,
        alt: 'Horseback rider galloping along a Moroccan Atlantic beach at sunset with dramatic sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Horse Riding Guide 2026 | Beach Rides, Atlas Treks & Fantasia',
    description:
      'Complete guide to horse riding in Morocco. Barb horses, beach rides, Atlas treks, desert excursions, Fantasia shows, and multi-day equestrian tours from 350 MAD.',
    images: [`${BASE_URL}/images/hero-horse-riding.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-horse-riding` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-horse-riding`,
  name: 'Morocco Horse Riding Guide 2026 | Beach Rides, Atlas Treks & Fantasia Shows',
  description:
    'Complete guide to horse riding in Morocco. Barb horses, beach rides, Atlas treks, desert excursions, Fantasia shows, riding schools, and multi-day equestrian tours.',
  url: `${BASE_URL}/morocco-horse-riding`,
  image: `${BASE_URL}/images/hero-horse-riding.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-horse-riding`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Horse Riding Guide', item: `${BASE_URL}/morocco-horse-riding` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need riding experience to go horse riding in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Most operators offer beginner-friendly rides with calm, well-trained horses and patient guides. Beach walks and short countryside rides are ideal for first-timers. Advanced gallops, multi-day treks, and mountain rides require intermediate or advanced skills.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Barb horse breed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Barb (or Berber horse) is a North African breed originating from Morocco, Algeria, and Tunisia. Known for stamina, surefootedness on rocky terrain, and a calm temperament, the Barb has influenced many European breeds including the Thoroughbred and Andalusian. Morocco is home to the largest Barb population in the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does horse riding cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A one-hour beach or countryside ride starts from 350 MAD. Half-day excursions cost from 700 MAD. Full-day rides with lunch run from 1,200 MAD. Multi-day treks range from 3,500 MAD to 12,000 MAD depending on duration, route, and accommodation level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Fantasia show (Tbourida)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tbourida, commonly called Fantasia, is a traditional Moroccan equestrian performance where a group of riders in traditional dress charge in formation and fire their rifles simultaneously at full gallop. It is recognized by UNESCO as Intangible Cultural Heritage and is performed at moussems (festivals) across Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for horse riding in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) are ideal, with mild temperatures perfect for riding. Summer is best for coastal and mountain rides where temperatures stay manageable. Winter is suitable for southern desert rides and Saharan edge excursions. Avoid the hottest inland months (July-August) for long rides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where are the best beach horse riding spots in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira offers the most popular beach rides with wide, firm sand beaches perfect for galloping. Dakhla in the southern Saharan coast provides dramatic lagoon and dune riding. Oualidia on the central coast combines beach riding with the famous oyster lagoon. Sidi Kaouki near Essaouira is ideal for quieter, less crowded rides.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do a multi-day horse riding trek in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multi-day treks are available in the Atlas Mountains (2-7 days), through the Saharan edge (3-5 days), and along coastal routes (2-4 days). These typically include all meals, accommodation in guesthouses or bivouac camps, an experienced guide, and a well-trained horse matched to your skill level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I wear for horse riding in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wear long trousers (not jeans with thick inner seams), closed-toe boots or shoes with a small heel, and sun protection. Most operators provide helmets, but bringing your own is recommended for multi-day treks. In cooler months, layer up as mountain temperatures drop quickly. Sunglasses with a strap are essential.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RIDING EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const ridingExperiences = [
  {
    title: 'Beach Riding — Essaouira',
    location: 'Essaouira Coast',
    icon: Waves,
    duration: '1-3 hours',
    level: 'All levels',
    price: 'From 350 MAD (1 hour)',
    description:
      'Essaouira&apos;s wide, windswept Atlantic beaches provide the most iconic horse riding setting in Morocco. Firm sand stretches for kilometers, allowing beginners to walk safely and experienced riders to gallop freely. The late afternoon light turns the coastline golden, making sunset rides particularly memorable. Several operators run daily departures from the beach south of the medina.',
    highlights: ['Sunset gallops on firm sand', 'Year-round riding', 'Beginner-friendly walks available', 'Atlantic Ocean backdrop'],
  },
  {
    title: 'Lagoon & Dune Riding — Dakhla',
    location: 'Dakhla Peninsula',
    icon: Sun,
    duration: '2-5 hours',
    level: 'Intermediate+',
    price: 'From 600 MAD (2 hours)',
    description:
      'Dakhla sits on a narrow peninsula separating the Atlantic from a vast turquoise lagoon. Riding here means crossing white sand dunes, splashing through shallow lagoon waters, and cantering along deserted coastline. The landscape feels otherworldly — Saharan sand meeting the ocean. Few tourists make it this far south, so the experience is genuinely remote and exclusive.',
    highlights: ['Saharan-Atlantic landscape', 'Turquoise lagoon crossings', 'Remote and uncrowded', 'Combine with kitesurfing'],
  },
  {
    title: 'Atlas Mountain Treks',
    location: 'High Atlas & Toubkal Region',
    icon: Mountain,
    duration: '1-7 days',
    level: 'Intermediate to Advanced',
    price: 'From 1,200 MAD (full day)',
    description:
      'The Atlas Mountains are Morocco&apos;s ultimate equestrian frontier. Trails wind through Berber villages, walnut groves, and high-altitude plateaus with views stretching to the Sahara. The Barb horse excels here — surefooted on rocky switchbacks, steady on narrow mountain paths. Multi-day treks follow ancient trading routes, with overnight stays in village guesthouses or mountain refuges.',
    highlights: ['Berber village stops', 'High-altitude plateaus', 'Ancient trading routes', 'Mountain refuge overnights'],
  },
  {
    title: 'Desert Edge Excursions',
    location: 'Merzouga & Zagora',
    icon: Compass,
    duration: '2-4 hours',
    level: 'Intermediate',
    price: 'From 800 MAD (half day)',
    description:
      'While camels dominate the Saharan tourism scene, horseback excursions along the desert edge offer a faster, more thrilling alternative. Rides depart from the oasis towns of Merzouga and Zagora, crossing rocky hammada (stone desert) and skirting the first dunes of the Erg Chebbi or Erg Chigaga. The contrast between dark volcanic rock and golden sand is striking.',
    highlights: ['Oasis-to-dune routes', 'Faster than camel treks', 'Volcanic rock landscapes', 'Saharan sunset views'],
  },
  {
    title: 'Countryside & Olive Grove Rides',
    location: 'Marrakech Palmeraie & Ourika Valley',
    icon: Globe,
    duration: '1-3 hours',
    level: 'All levels',
    price: 'From 400 MAD (1 hour)',
    description:
      'The palm-studded countryside around Marrakech offers gentle, scenic rides that suit families and beginners. Trails pass through olive groves, Berber hamlets, and date palm oases with the snow-capped Atlas as a backdrop. The Palmeraie area north of Marrakech is the most accessible starting point, just 20 minutes from the medina.',
    highlights: ['Atlas Mountain views', '20 minutes from Marrakech', 'Family-friendly', 'Olive grove trails'],
  },
  {
    title: 'Coastal Trail — Oualidia',
    location: 'Oualidia Lagoon',
    icon: Waves,
    duration: '1.5-3 hours',
    level: 'All levels',
    price: 'From 450 MAD (1.5 hours)',
    description:
      'Oualidia&apos;s sheltered lagoon, famous for its oyster farms, creates a unique coastal riding environment. Rides traverse the sandy cliffs above the lagoon, descend to the beach, and pass through farmland where the smell of eucalyptus and salt air mingles. The pace is relaxed, and the setting is among the most photogenic on Morocco&apos;s Atlantic coast.',
    highlights: ['Lagoon cliff-top views', 'Oyster farm scenery', 'Eucalyptus-scented trails', 'Sheltered from Atlantic wind'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: RIDING SCHOOLS & OPERATORS
   ═══════════════════════════════════════════════════════════════ */

const ridingSchools = [
  {
    name: 'La Maison du Cheval — Essaouira',
    region: 'Essaouira',
    specialty: 'Beach rides & multi-day coastal treks',
    languages: 'French, English, Arabic',
    priceRange: 'From 400 MAD per hour',
    description: 'One of Essaouira&apos;s most established operators. Their horses are Barb-Arab crosses, well-fed, and cared for. They offer everything from one-hour beach walks to five-day coastal camping treks. The owner is a former competitive rider with deep knowledge of the region.',
    bestFor: 'Beach gallops and multi-day adventures',
  },
  {
    name: 'Les Cavaliers de l&apos;Atlas — Marrakech',
    region: 'Marrakech / Atlas Foothills',
    specialty: 'Mountain treks & Palmeraie rides',
    languages: 'French, English, Spanish',
    priceRange: 'From 500 MAD per hour',
    description: 'Specializing in Atlas Mountain equestrian treks, this Marrakech-based operator runs day rides in the Palmeraie and multi-day expeditions into the High Atlas. Their guides are from local Berber families who have ridden these mountain paths for generations.',
    bestFor: 'Mountain treks with cultural immersion',
  },
  {
    name: 'Royal Club Equestre — Marrakech',
    region: 'Marrakech',
    specialty: 'Dressage, show jumping, polo',
    languages: 'French, English, Arabic',
    priceRange: 'From 600 MAD per lesson',
    description: 'Affiliated with the Royal Moroccan Equestrian Federation (FRMSE), this club offers structured riding lessons, dressage training, and access to polo facilities. The grounds are well-maintained, and the instructors hold international certifications. A good option for experienced riders seeking formal instruction.',
    bestFor: 'Structured lessons and competitive riding',
  },
  {
    name: 'Ranch de Diabat — Essaouira',
    region: 'Essaouira / Sidi Kaouki',
    specialty: 'Beach rides & countryside excursions',
    languages: 'French, English',
    priceRange: 'From 350 MAD per hour',
    description: 'Located between Essaouira and the village of Sidi Kaouki, this ranch offers rides along the quieter southern beaches. Their smaller group sizes (maximum 6 riders) ensure a more personalized experience. Horses are well-matched to rider ability.',
    bestFor: 'Small-group beach rides away from crowds',
  },
  {
    name: 'Atlas Equestrian Centre — Ouirgane',
    region: 'Ouirgane Valley (Atlas)',
    specialty: 'Multi-day mountain treks',
    languages: 'French, English',
    priceRange: 'From 3,500 MAD (2-day trek)',
    description: 'Based in the lush Ouirgane Valley, an hour south of Marrakech, this centre runs some of Morocco&apos;s finest multi-day mountain rides. Routes follow mule trails through juniper forests and Berber settlements. Overnights in mountain guesthouses include traditional Berber meals.',
    bestFor: 'Immersive multi-day mountain experiences',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { service: '1-hour beach ride (walk & trot)', price: 'From 350 MAD', note: 'Beginner-friendly, guided' },
  { service: '1-hour beach ride (with gallop)', price: 'From 450 MAD', note: 'Intermediate+ riders' },
  { service: '2-hour countryside ride', price: 'From 600 MAD', note: 'Palmeraie, olive groves' },
  { service: 'Half-day excursion (4 hours)', price: 'From 900 MAD', note: 'Includes snack or light lunch' },
  { service: 'Full-day ride with lunch', price: 'From 1,200 MAD', note: 'Mountain or coastal route' },
  { service: '2-day Atlas Mountain trek', price: 'From 3,500 MAD', note: 'All meals & guesthouse included' },
  { service: '5-day equestrian expedition', price: 'From 8,000 MAD', note: 'Full board, guide, support vehicle' },
  { service: '7-day grand trek', price: 'From 12,000 MAD', note: 'Premium route, mixed terrain' },
  { service: 'Polo lesson (1 hour)', price: 'From 800 MAD', note: 'Horse, equipment, instructor included' },
  { service: 'Riding lesson (arena, 1 hour)', price: 'From 500 MAD', note: 'Dressage or jumping basics' },
  { service: 'Fantasia show attendance', price: 'From 200 MAD', note: 'Tourist-oriented performances' },
  { service: 'Private sunset beach ride', price: 'From 700 MAD', note: 'Exclusive guide, 1.5 hours' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    rating: 'Peak Season',
    description: 'The ideal window. Wildflowers blanket the Atlas foothills, rivers run full, and temperatures sit between 18-28°C. Green valleys, clear skies, and long daylight hours make this the top choice for multi-day treks. Moussem season begins, bringing Fantasia performances across the country.',
    bestFor: 'Multi-day Atlas treks, countryside rides, Fantasia festivals',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    rating: 'Good (Coastal/Mountain)',
    description: 'Inland temperatures soar past 40°C, making midday riding uncomfortable anywhere except the coast and mountains. Essaouira stays cool (20-25°C) thanks to Atlantic winds. Early morning and late afternoon rides work well everywhere. Mountain rides above 2,000m remain pleasant.',
    bestFor: 'Essaouira beach gallops, high-altitude Atlas rides, early morning desert edge',
  },
  {
    season: 'Autumn (September - November)',
    icon: Sun,
    rating: 'Peak Season',
    description: 'Temperatures cool to comfortable levels across the country. The harvest season transforms the countryside with golden light and the scent of olives and dates. Major Fantasia festivals take place in September and October. Desert edges become rideable again as heat subsides.',
    bestFor: 'Desert edge excursions, harvest-season countryside, Fantasia shows',
  },
  {
    season: 'Winter (December - February)',
    icon: Mountain,
    rating: 'Good (South & Coast)',
    description: 'High Atlas passes can be snow-covered and impassable on horseback. Coastal and southern routes remain excellent, with Dakhla enjoying warm, dry weather year-round. Marrakech Palmeraie rides are pleasant, and the desert edges offer crisp, clear riding conditions.',
    bestFor: 'Dakhla rides, southern desert, Marrakech Palmeraie, coastal routes',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: EXPERIENCE LEVELS
   ═══════════════════════════════════════════════════════════════ */

const experienceLevels = [
  {
    level: 'Complete Beginner',
    icon: Target,
    description: 'Never sat on a horse before. You will start with a brief ground lesson covering mounting, basic steering, and stopping. Rides are at a walk, led by a guide on foot or horseback. Beach walks and Palmeraie ambles are ideal first experiences.',
    suitableRides: ['1-hour beach walk', 'Palmeraie countryside', 'Oualidia lagoon walk', 'Marrakech garden rides'],
    notRecommended: 'Multi-day treks, mountain rides, galloping excursions',
  },
  {
    level: 'Novice (1-20 hours)',
    icon: Flag,
    description: 'You can mount, steer, and maintain a basic trot. Some confidence in the saddle but not yet independent. Guided rides at walk and trot on varied terrain are appropriate. You may attempt a short controlled canter on flat ground with instructor permission.',
    suitableRides: ['2-hour beach rides', 'Half-day countryside', 'Gentle Atlas foothills', 'Coastal trails'],
    notRecommended: 'Multi-day mountain treks, desert gallops, steep terrain',
  },
  {
    level: 'Intermediate (20-100 hours)',
    icon: Zap,
    description: 'You can walk, trot, and canter confidently and control the horse independently on open terrain. You are comfortable at a gallop on flat ground and can handle mild slopes. Most rides in Morocco are accessible to intermediate riders, including shorter multi-day treks.',
    suitableRides: ['Beach gallops', '2-3 day mountain treks', 'Desert edge excursions', 'All half/full-day rides'],
    notRecommended: 'Advanced 7-day mountain expeditions with steep passes',
  },
  {
    level: 'Advanced (100+ hours)',
    icon: Award,
    description: 'You ride regularly, can handle all gaits on any terrain, and are comfortable with spirited or green horses. Every ride in Morocco is open to you, including week-long High Atlas traversals, fast desert gallops, and technical mountain switchbacks.',
    suitableRides: ['All rides and treks', '7-day grand expeditions', 'Polo lessons', 'Competitive events'],
    notRecommended: 'Nothing — all experiences are available',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: EQUIPMENT CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const equipmentChecklist = [
  { item: 'Riding helmet', essential: true, note: 'Most operators provide helmets, but bring your own for multi-day treks.' },
  { item: 'Long trousers', essential: true, note: 'Riding breeches or lightweight cargo trousers. Avoid thick-seam jeans.' },
  { item: 'Closed-toe boots', essential: true, note: 'Ankle boots with a small heel prevent foot slipping through the stirrup.' },
  { item: 'Sunscreen (SPF 50)', essential: true, note: 'Sand and water reflection intensifies UV on beach and desert rides.' },
  { item: 'Sunglasses with strap', essential: true, note: 'A retainer strap keeps them secure at canter and gallop speeds.' },
  { item: 'Water bottle (1.5L+)', essential: true, note: 'Minimum for half-day rides. Multi-day treks include water supply.' },
  { item: 'Riding gloves', essential: false, note: 'Prevent blisters on longer rides. Lightweight leather or synthetic.' },
  { item: 'Light layers', essential: false, note: 'Mountain and evening temps drop sharply. Fleece or windbreaker packs small.' },
  { item: 'Camera with strap', essential: false, note: 'Neck strap keeps hands free. GoPro chest mounts work for action shots.' },
  { item: 'Small backpack', essential: false, note: 'For personal items on longer rides. Some operators provide saddlebags.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHorseRidingPage() {
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
            backgroundImage: 'url(/images/hero-horse-riding.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Horse Riding Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Adventure &amp; Equestrian
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Horse Riding Guide:
            <br className="hidden md:block" /> Beach Gallops, Mountain Treks &amp; Fantasia
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From Atlantic sunset gallops on Barb horses to week-long Atlas Mountain expeditions
            and the thundering spectacle of Tbourida. Your complete guide to riding in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: A Kingdom Built on Horseback
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s relationship with the horse runs deeper than tourism brochures suggest.
                For centuries, the Barb horse carried Berber warriors across mountain passes, Saadian
                sultans into battle, and Moroccan cavalry into the pages of history. Today, the Kingdom
                maintains one of the most active equestrian cultures in Africa, with the Royal Moroccan
                Equestrian Federation (FRMSE) overseeing breeding programs, competitions, and the
                preservation of Tbourida — the dramatic mounted gunpowder charge recognized by UNESCO.
              </p>
              <p>
                For visitors, this deep-rooted horse culture translates into riding experiences that go
                far beyond a tourist trot. You can gallop along Essaouira&apos;s windswept beaches on a
                purebred Barb, trek through the High Atlas on trails that have served as trade routes for
                a thousand years, or watch a Fantasia troupe perform the synchronized charge that has
                defined Moroccan horsemanship since the 15th century. This guide covers the Barb breed,
                beach and mountain rides, multi-day tours, Fantasia shows, riding schools, polo, equipment,
                and pricing from 350 MAD per hour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Barb Horse ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Barb Horse: Morocco&apos;s Noble Breed
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the oldest and most influential horse breeds in the world, shaped by the Maghreb&apos;s mountains, deserts, and coastline.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <BookOpen className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Origins &amp; History
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Barb (known locally as the &quot;cheval Barbe&quot;) originated in the Maghreb region of North
                Africa, with Morocco holding the largest breeding population. Archaeological evidence
                places the breed&apos;s ancestors in the region at least 4,000 years ago. Berber tribesmen
                selectively bred these horses for endurance and agility on rocky, mountainous terrain.
                When the Moors crossed into Iberia in 711 AD, Barb horses came with them, eventually
                influencing the Andalusian, Lusitano, and through them, the Thoroughbred.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Star className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Physical Characteristics
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Standing 14.2 to 15.2 hands, the Barb is compact and muscular with a slightly convex
                (Roman) nose profile, a deep chest, and powerful hindquarters. The breed&apos;s legs are
                notably clean-boned and hard, developed over millennia on rocky terrain. Common colors
                include grey, bay, chestnut, and black. Unlike the Arab, the Barb carries its tail low
                and has a quieter, more stoic temperament — qualities that make it exceptionally reliable
                on mountain trails and in crowded festival settings.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <ShieldCheck className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Why Riders Love the Barb
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Surefooted on rocky, uneven mountain trails where other breeds stumble</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Exceptional stamina for long-distance riding in heat and altitude</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Calm, sensible temperament — less spooky than Arabians or Thoroughbreds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Naturally frugal, thriving on less feed and water than European breeds</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Explosive short-distance speed — essential for the Tbourida charge</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Globe className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Conservation &amp; the FRMSE
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Royal Moroccan Equestrian Federation (F&eacute;d&eacute;ration Royale Marocaine des Sports
                &Eacute;questres, FRMSE) manages the national stud book for the Barb breed. Morocco&apos;s royal
                studs at Mekn&egrave;s and Bouznika maintain purebred Barb lines, and the annual Salon du
                Cheval in El Jadida — Africa&apos;s largest horse fair — showcases breeding standards and
                competition results. The FRMSE also certifies riding schools and competition venues
                across the country, ensuring standards of horse welfare and rider safety.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Riding Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Horse Riding Experiences in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Six distinct riding environments across Morocco&apos;s diverse geography, each offering a completely different equestrian experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies — peak season (spring and autumn) may see rates increase by 15-25%.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ridingExperiences.map((ride) => {
              const RideIcon = ride.icon;
              return (
                <div key={ride.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {ride.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {ride.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {ride.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {ride.price}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {ride.level}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{ride.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {ride.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Fantasia / Tbourida ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Flag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tbourida (Fantasia): Morocco&apos;s Mounted Spectacle
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A UNESCO-recognized tradition where horsemen charge in formation and fire their rifles in unison at full gallop.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                What Is Tbourida?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                Tbourida — known to foreigners as &quot;Fantasia&quot; — is a traditional equestrian display that
                simulates a cavalry charge. A &quot;sorba&quot; (team) of 7 to 15 riders, dressed in white
                djellabas with colored sashes and carrying ornate antique rifles (moukhalas), line up at one
                end of a long field. On the master&apos;s signal, they charge at full gallop in tight formation,
                raising their rifles overhead. At the precise moment — while still at full speed — every
                rider fires simultaneously, producing a single thunderclap of gunpowder smoke. The
                synchronization of the volley is the measure of a team&apos;s skill.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                UNESCO inscribed Tbourida on the Representative List of the Intangible Cultural Heritage
                of Humanity in 2021, recognizing its importance as a living tradition that binds
                communities across Morocco. Each region has its own troupes, funded by local families who
                consider participation a matter of deep pride. The horses used are almost exclusively
                purebred or part-bred Barbs, prized for their explosive acceleration and steady nerves
                amid the noise and crowds.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Where and When to See Tbourida
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <Calendar className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    Moussem Festivals
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    The most authentic Tbourida takes place at moussems — religious and cultural festivals
                    held in towns and villages across Morocco. Major moussems occur in Tan-Tan (June),
                    Moulay Abdellah near El Jadida (August), Tissa near Fes (October), and Mekn&egrave;s
                    (September). These are multi-day events with food, music, and multiple Tbourida
                    performances daily.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <Star className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
                    Salon du Cheval — El Jadida
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Held annually in October, the Salon du Cheval at El Jadida is Africa&apos;s largest
                    equestrian event. It features competitive Tbourida, horse breed judging, equestrian
                    shows, and an extensive trade exhibition. Over 300,000 visitors attend across the
                    week-long event. Entry starts from 50 MAD for general admission. The competitive
                    Tbourida finals on the closing day are the undisputed highlight.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    Tourist-Oriented Shows
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    Several dinner-show venues in Marrakech and Agadir stage nightly Fantasia performances
                    combined with Moroccan buffet dinners, folk music, and belly dancing. While less
                    authentic than moussem performances, they are easily accessible and run year-round.
                    Expect to pay from 200 MAD for entry, or from 500 MAD with a full dinner package.
                  </p>
                </div>
                <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                    What to Know Before Going
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    The rifles fire blanks, but they are loud — ear protection is sensible for those close
                    to the charge line. Arrive early for front-row positions at moussems, as crowds build
                    quickly. The best photography angles are at the end of the charge line, where the
                    synchronized volley and cloud of gunpowder smoke create the most dramatic frames.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Horse Riding Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for horse riding experiences across Morocco, from hourly beach rides to week-long expeditions.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (March-May, September-November), when rates may increase by 15-25%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Experience</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Details</div>
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

      {/* ── Riding Schools & Operators ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riding Schools &amp; Tour Operators
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Established operators across Morocco with strong safety records, healthy horses, and experienced multilingual guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ridingSchools.map((school) => (
              <div key={school.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {school.name}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {school.region}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5" />
                    {school.languages}
                  </span>
                </div>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                  {school.priceRange}
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{school.description}</p>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {school.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience Levels ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Riding Experience Levels &amp; Suitable Rides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Operators in Morocco grade rides by experience level. Here is what each level means and which experiences match your ability.
          </p>

          <div className="space-y-6">
            {experienceLevels.map((exp) => {
              const LevelIcon = exp.icon;
              return (
                <div key={exp.level} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <LevelIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {exp.level}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)]" />
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Suitable Rides</span>
                      </div>
                      <ul className="space-y-1">
                        {exp.suitableRides.map((ride, i) => (
                          <li key={i} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                            <ChevronRight className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                            {ride}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-sm font-semibold text-[var(--text-primary)]">Not Recommended</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)]">{exp.notRecommended}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Polo in Marrakech ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Crown className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Polo in Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s polo scene is concentrated in Marrakech, where royal patronage and international investment have built world-class facilities.
          </p>

          <div className="card-moroccan p-6 mb-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Jnan Amar Polo Club
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Located 15 minutes north of Marrakech, Jnan Amar is Morocco&apos;s premier polo venue. The
              club features two full-size polo fields, a stick-and-ball practice area, stabling for 100+
              horses, and a luxury clubhouse. Founded in 2010, it hosts the annual Moroccan Open and
              draws players from Argentina, the UK, and the Gulf States. Non-members can book intro
              lessons and arena polo sessions with club professionals.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-[var(--surface-muted)] rounded-lg">
                <DollarSign className="w-4 h-4 mx-auto text-[var(--color-accent)] mb-1" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">Intro Lesson</p>
                <p className="text-xs text-[var(--color-accent)]">From 800 MAD</p>
              </div>
              <div className="text-center p-3 bg-[var(--surface-muted)] rounded-lg">
                <Clock className="w-4 h-4 mx-auto text-[var(--color-accent)] mb-1" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">Arena Polo</p>
                <p className="text-xs text-[var(--color-accent)]">From 1,200 MAD</p>
              </div>
              <div className="text-center p-3 bg-[var(--surface-muted)] rounded-lg">
                <Users className="w-4 h-4 mx-auto text-[var(--color-accent)] mb-1" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">Spectator Entry</p>
                <p className="text-xs text-[var(--color-accent)]">Free (tournament days)</p>
              </div>
              <div className="text-center p-3 bg-[var(--surface-muted)] rounded-lg">
                <Calendar className="w-4 h-4 mx-auto text-[var(--color-accent)] mb-1" />
                <p className="text-xs font-semibold text-[var(--text-primary)]">Season</p>
                <p className="text-xs text-[var(--color-accent)]">October - May</p>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Amelkis Polo Club
            </h3>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Sitting on the Route de Ouarzazate with Atlas Mountain views from the field, Amelkis
              caters to experienced players and beginners alike, offering stick-and-ball sessions,
              arena polo, and chukka matches. Introductory packages with brunch start from 1,000 MAD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Seasonal Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Ride: Seasonal Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s diverse climate means there is always somewhere good to ride. Here is how each season shapes your options.
          </p>

          <div className="space-y-6">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <SeasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                    </div>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {season.rating}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {season.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Equipment Checklist ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Equipment &amp; Packing Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring for horse riding in Morocco, whether it is a one-hour beach ride or a week-long mountain expedition.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-12 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="col-span-4 p-3 px-4">Item</div>
              <div className="col-span-2 p-3 px-4 text-center">Priority</div>
              <div className="col-span-6 p-3 px-4">Notes</div>
            </div>
            {equipmentChecklist.map((item, i) => (
              <div
                key={item.item}
                className={`grid grid-cols-12 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="col-span-4 p-3 px-4 font-medium text-[var(--text-primary)]">{item.item}</div>
                <div className="col-span-2 p-3 px-4 text-center">
                  {item.essential ? (
                    <span className="inline-block px-2 py-0.5 text-xs rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">Essential</span>
                  ) : (
                    <span className="inline-block px-2 py-0.5 text-xs rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">Optional</span>
                  )}
                </div>
                <div className="col-span-6 p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Riders in Morocco
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Horse Welfare Standards
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Choose operators whose horses look healthy: alert eyes, smooth coats, no visible sores under
                the saddle area, and adequate body weight. Reputable operators limit riding hours and rotate
                horses. Ask how many rides the horse does per day — a responsible answer is one or two.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Your Guide
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A tip of 50-100 MAD is standard for a half-day ride with a good guide. For multi-day treks
                where your guide cooks, navigates, and manages the horses, 100-200 MAD per day is appropriate.
                Tips go directly to the guide, not the company. Cash is expected.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Heart className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Physical Preparation
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Riding uses muscles you may not regularly exercise, particularly inner thighs and lower
                back. For multi-day treks, do some squats and leg stretches in the weeks beforehand. After
                long rides, walk and stretch before sitting down — your legs will stiffen quickly if you
                rest immediately.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Travel Insurance
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Confirm that your travel insurance covers horse riding. Many standard policies exclude
                equestrian activities. If you are doing a multi-day trek, mountain ride, or anything beyond
                a basic guided walk, check the policy wording carefully. Some operators require a signed
                waiver before riding.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking &amp; Timing
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book multi-day treks at least 2-3 weeks in advance, especially during spring and autumn
                peak seasons. Same-day bookings are usually possible for hourly beach rides. Early morning
                (8-10am) and late afternoon (4-6pm) are the most comfortable times to ride, avoiding the
                midday heat that makes both horse and rider miserable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Photography While Riding
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                A phone in a zipped pocket works for casual shots during walk breaks. For action footage,
                a GoPro with a chest mount captures smooth video without requiring hands. Avoid holding
                a phone at anything faster than a walk — one stumble and it is gone. Ask your guide to
                take photos of you from the ground for the best angles.
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
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.acceptedAnswer.text}
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
            <Link href="/adventure" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Adventure Activities
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, sandboarding, paragliding, and more active experiences across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/atlas-mountains" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking routes, Berber villages, mountain lodges, and practical tips for the High Atlas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/essaouira" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Essaouira City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The windy city on the Atlantic. Beaches, medina, seafood, surf, and the famous Gnaoua Festival.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/berber-culture" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture &amp; Heritage
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Amazigh history, traditions, villages, and how to experience authentic Berber hospitality.
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

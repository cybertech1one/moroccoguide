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
  Gem,
  Building,
  Award,
  BookOpen,
  Crown,
  Mountain,
  Globe,
  Landmark,
  Compass,
  Camera,
  Sun,
  Waves,
  Utensils,
  Calendar,
  Anchor,
  Fish,
  Shield,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Al Hoceima Guide 2026 | Beaches, National Park, Rif Mountains & Mediterranean Morocco',
  description:
    'Complete travel guide to Al Hoceima, Morocco. Discover stunning Mediterranean beaches like Quemado and Cala Iris, explore Al Hoceima National Park, enjoy water sports, Amazigh Rif culture, fresh seafood, hiking trails, and day trips along the northern coast.',
  keywords: [
    'al hoceima',
    'things to do in al hoceima',
    'al hoceima beach',
    'al hoceima morocco',
    'al hoceima national park',
    'quemado beach al hoceima',
    'cala iris morocco',
    'rif mountains morocco',
    'al hoceima diving',
    'al hoceima water sports',
    'amazigh culture rif',
    'al hoceima hotels',
    'al hoceima restaurants',
    'badis beach morocco',
    'souani beach al hoceima',
    'mediterranean morocco beaches',
    'al hoceima airport',
    'things to do al hoceima 2026',
    'al hoceima day trips',
    'rif seafood morocco',
    'northern morocco coast',
    'al hoceima travel guide',
  ],
  openGraph: {
    title: 'Al Hoceima Guide 2026 | Beaches, National Park & Rif Culture',
    description:
      'Discover Al Hoceima, where the Rif Mountains meet the Mediterranean. Pristine beaches, a marine national park, Amazigh heritage, fresh seafood, and dramatic coastal landscapes await.',
    url: `${BASE_URL}/al-hoceima-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-al-hoceima.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Al Hoceima bay with Mediterranean waters and Rif Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Hoceima Guide 2026 | Beaches, National Park & Mediterranean Morocco',
    description:
      'Complete guide to Al Hoceima. Stunning beaches, Al Hoceima National Park, Rif Mountain culture, fresh seafood, water sports, and northern Morocco coastal adventures.',
    images: [`${BASE_URL}/images/hero-al-hoceima.webp`],
  },
  alternates: { canonical: `${BASE_URL}/al-hoceima-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/al-hoceima-guide`,
  name: 'Al Hoceima Guide 2026 | Beaches, National Park, Rif Mountains & Mediterranean Morocco',
  description:
    'Complete travel guide to Al Hoceima, Morocco. Discover stunning Mediterranean beaches, Al Hoceima National Park, Amazigh Rif culture, fresh seafood, water sports, and dramatic coastal landscapes.',
  url: `${BASE_URL}/al-hoceima-guide`,
  image: `${BASE_URL}/images/hero-al-hoceima.webp`,
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
  mainEntityOfPage: `${BASE_URL}/al-hoceima-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'City',
    name: 'Al Hoceima',
    containedInPlace: { '@type': 'Country', name: 'Morocco' },
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Al Hoceima Guide', item: `${BASE_URL}/al-hoceima-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Al Hoceima worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Al Hoceima offers pristine Mediterranean beaches, a national park with excellent diving, dramatic Rif Mountain scenery, and authentic Amazigh culture untouched by mass tourism. Ideal for travelers seeking a genuine Moroccan coastal experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Al Hoceima?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'June through September for beaches and water sports (22-25 degrees water temperature). Spring and autumn are perfect for hiking with mild temperatures and fewer crowds. Winter is cooler but pleasant, rarely below 10 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Al Hoceima?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Al Hoceima has Charif Al Idrissi Airport (AHU) with flights from Casablanca. CTM buses connect to Nador (2h), Fes (6h), and Tangier (6h). By car from Fes takes 5 hours via scenic Rif roads. Grand taxis from Nador cost around 50 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'What language do people speak in Al Hoceima?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The primary local language is Tarifit, the Amazigh dialect of the Rif region. Most residents also speak Darija (Moroccan Arabic) and many speak French or Spanish, given the region\'s historical ties to Spain. English is less common than in southern tourist cities, so learning a few Tarifit or French phrases is helpful and appreciated by locals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Al Hoceima safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Al Hoceima is generally very safe for tourists. The Rif region is known for its warm hospitality, and violent crime against tourists is extremely rare. Standard precautions apply: keep valuables secure, be aware of your surroundings, and respect local customs. The town is smaller and more relaxed than major Moroccan cities, making it easy to navigate safely on foot.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I go diving or snorkeling in Al Hoceima?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Al Hoceima National Park is one of Morocco\'s best diving destinations with visibility up to 30 meters, Posidonia seagrass beds, sea caves, and marine life including grouper, dolphins, and sea turtles. Guided dives from 400 MAD. Snorkeling is excellent at Cala Iris.',
      },
    },
    {
      '@type': 'Question',
      name: 'What food should I try in Al Hoceima?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Try grilled sardines at the port, caldero (Rif fish stew), seafood tagine with chermoula, and Rif-style couscous with fish. Don\'t miss msemmen with honey and Rif mint tea. A full seafood meal costs from 60 MAD at local spots.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST BEACHES
   ═══════════════════════════════════════════════════════════════ */

const beaches = [
  {
    name: 'Quemado Beach (Plage Quemado)',
    icon: Waves,
    description:
      'The main city beach and heart of Al Hoceima\'s social life. This crescent-shaped bay offers calm turquoise waters, golden sand, and a stunning Rif Mountain backdrop. Lined with cafes and restaurants, Quemado is perfect for swimming and watching spectacular Mediterranean sunsets.',
    facilities: 'Restaurants, cafes, sun loungers, showers, parking',
    bestFor: 'Families, swimming, sunset watching',
    access: 'Walking distance from city center',
  },
  {
    name: 'Cala Iris Beach',
    icon: Gem,
    description:
      'Often called the most beautiful beach in northern Morocco, Cala Iris sits in a sheltered cove 50 km west within the national park. Crystal-clear turquoise waters, dramatic cliffs, and a tiny fishing village create an almost Caribbean-like atmosphere. Boats depart here to explore hidden coves.',
    facilities: 'Small restaurants, boat tours, basic amenities',
    bestFor: 'Snorkeling, boat trips, photography',
    access: '50 km west, accessible by car or grand taxi',
  },
  {
    name: 'Badis Beach (Plage Badis)',
    icon: Anchor,
    description:
      'A remote, wild beach near the ruins of the historic Badis fortress. Dark sand, powerful waves, and raw natural beauty feel untouched by time. The Penon de Velez de la Gomera, a tiny Spanish territory, sits just offshore. Ideal for adventurous travelers valuing solitude.',
    facilities: 'Minimal - bring your own supplies',
    bestFor: 'Adventure seekers, history buffs, solitude',
    access: '60 km west via mountain road, 4x4 recommended',
  },
  {
    name: 'Souani Beach (Plage Souani)',
    icon: Sun,
    description:
      'A sheltered bay east of the city center, popular with locals and offering a relaxed alternative to Quemado. Exceptionally calm, clear waters make it one of the best swimming spots. Pine trees provide natural shade, and seafood shacks serve fresh catches of the day.',
    facilities: 'Seafood restaurants, parking, natural shade',
    bestFor: 'Swimming, local seafood, relaxation',
    access: '5 km east of city center by car or taxi',
  },
  {
    name: 'Tala Youssef Beach',
    icon: Star,
    description:
      'Nestled in a bay surrounded by green hills 15 km east, Tala Youssef combines sandy beach with fishing village charm. Calm, shallow waters are excellent for families. Fresh fish restaurants along the waterfront serve the morning catch at affordable prices.',
    facilities: 'Fish restaurants, parking, basic amenities',
    bestFor: 'Families, fresh seafood, calm swimming',
    access: '15 km east, reachable by car or local transport',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: NATIONAL PARK ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const parkActivities = [
  {
    name: 'Coastal Hiking Trails',
    icon: Compass,
    description:
      'The clifftop paths between Cala Iris and Badis wind along sheer limestone cliffs with views of hidden coves, sea stacks, and the Mediterranean far below. Trails range from easy two-hour walks to challenging full-day treks through pine forests.',
    difficulty: 'Easy to challenging depending on route',
    duration: '2 to 8 hours',
    price: 'Free entry; guided hikes from 200 MAD',
  },
  {
    name: 'Scuba Diving & Snorkeling',
    icon: Waves,
    description:
      'The marine park protects biodiverse waters with Posidonia seagrass meadows, underwater caves, and reefs teeming with grouper, barracuda, moray eels, and octopus. Dolphins are regularly spotted, and visibility reaches up to 30 meters in summer.',
    difficulty: 'Beginner to advanced sites available',
    duration: 'Half-day or full-day dive trips',
    price: 'From 400 MAD per guided dive with equipment',
  },
  {
    name: 'Bird Watching',
    icon: Camera,
    description:
      'A critical stopover for migratory birds between Europe and Africa. Over 180 species recorded, including Audouin\'s gull, Eleonora\'s falcon, Bonelli\'s eagle, and osprey. Spring and autumn bring thousands of raptors and songbirds.',
    difficulty: 'Easy - suitable for all levels',
    duration: '2 to 5 hours',
    price: 'Free; guided birding tours from 250 MAD',
  },
  {
    name: 'Boat Tours & Island Visits',
    icon: Anchor,
    description:
      'Local fishermen offer boat tours along the spectacular coastline, visiting sea caves, secluded beaches only accessible by water, and pristine snorkeling spots. Some tours include the Penon de Alhucemas and the Three Islands nature reserve.',
    difficulty: 'Easy - no experience needed',
    duration: '2 to 4 hours',
    price: 'From 150 MAD per person for group tours',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WATER SPORTS
   ═══════════════════════════════════════════════════════════════ */

const waterSports = [
  {
    name: 'Kayaking & Canoeing',
    icon: Waves,
    description:
      'Paddle along the coastline exploring sea caves, hidden coves, and cliff formations. Rentals available at Quemado Beach and Cala Iris during summer. Guided tours visit the best national park spots.',
    price: 'From 150 MAD per hour rental; guided tours from 300 MAD',
  },
  {
    name: 'Jet Skiing & Parasailing',
    icon: Sparkles,
    description:
      'During peak summer (July-August), operators at Quemado Beach offer jet skis and parasailing. Parasailing gives aerial views of the bay and Rif Mountains. Jet skis let you explore nearby coves.',
    price: 'Jet ski from 300 MAD per 30 min; parasailing from 200 MAD',
  },
  {
    name: 'Fishing Trips',
    icon: Fish,
    description:
      'Join local fishermen at dawn for authentic Mediterranean fishing. Traditional boats target sea bream, swordfish, sardines, and red mullet. Your catch can be grilled at waterfront restaurants.',
    price: 'From 200 MAD per person for a half-day trip',
  },
  {
    name: 'Stand-Up Paddleboarding',
    icon: Sun,
    description:
      'Calm waters at Quemado Bay and Souani Beach are ideal for SUP. Boards available for summer rental. Early mornings offer glass-like conditions perfect for peaceful paddling.',
    price: 'From 100 MAD per hour rental',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: LOCAL CUISINE
   ═══════════════════════════════════════════════════════════════ */

const localCuisine = [
  {
    name: 'Grilled Fresh Sardines',
    icon: Utensils,
    description:
      'Al Hoceima\'s signature dish: sardines grilled whole over charcoal and served with chermoula, fresh bread, and salad. Fish comes straight from the morning catch, ensuring unbeatable freshness at remarkably low prices.',
    price: 'From 25 MAD for a generous portion',
    where: 'Port restaurants, Quemado Beach cafes',
  },
  {
    name: 'Caldero (Rif Fish Stew)',
    icon: Utensils,
    description:
      'A hearty fish stew with Spanish-Rif origins featuring a tomato-pepper base with sea bream, monkfish, and prawns. Seasoned with saffron, cumin, and hot peppers, served with crusty bread for dipping.',
    price: 'From 50 MAD at local restaurants',
    where: 'Traditional Rif restaurants, family-run eateries',
  },
  {
    name: 'Seafood Tagine with Chermoula',
    icon: Utensils,
    description:
      'A coastal twist on Morocco\'s national dish: fresh fish, shrimp, or calamari slow-cooked with potatoes, tomatoes, preserved lemons, and olives in a clay tagine with generous chermoula sauce.',
    price: 'From 60 MAD at local spots, from 100 MAD at tourist restaurants',
    where: 'Restaurants throughout the city and beachfront',
  },
  {
    name: 'Rif Couscous with Fish',
    icon: Utensils,
    description:
      'Unlike most of Morocco, the Rif coastal tradition tops hand-rolled couscous with a stew of seasonal fish, chickpeas, turnips, and zucchini. This Friday lunch tradition brings families together weekly.',
    price: 'From 40 MAD at local restaurants',
    where: 'Family restaurants, especially on Fridays',
  },
  {
    name: 'Msemmen & Seafood Fritters',
    icon: Utensils,
    description:
      'Start mornings with msemmen (flaky flatbread) with honey and butter. For savory, try beignets de poisson (fish fritters) sold near the port. Pair with strong Rif mint tea for the full breakfast experience.',
    price: 'Msemmen from 5 MAD; fish fritters from 10 MAD',
    where: 'Street vendors, cafes, port area',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO STAY
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    name: 'Hotel Suites Mohammed V',
    type: 'Upscale Hotel',
    icon: Crown,
    description:
      'The top hotel in Al Hoceima on a hilltop with panoramic bay views. Modern rooms with sea-view balconies, outdoor pool, and a restaurant serving Moroccan and international cuisine.',
    price: 'From 800 MAD per night',
    location: 'Hilltop overlooking Quemado Bay',
  },
  {
    name: 'Hotel Nacional Al Hoceima',
    type: 'Mid-Range Hotel',
    icon: Building,
    description:
      'Well-maintained mid-range option in the city center, walking distance to Quemado Beach. Clean rooms with AC, private bathrooms, rooftop terrace, and a restaurant with good Moroccan cuisine.',
    price: 'From 400 MAD per night',
    location: 'City center, near Quemado Beach',
  },
  {
    name: 'Rif Guesthouses & Riads',
    type: 'Guesthouse',
    icon: Heart,
    description:
      'Family-run guesthouses offer authentic Rif hospitality with clean rooms, home-cooked meals, and warm personal attention. Some in surrounding villages offer stunning mountain views.',
    price: 'From 200 MAD per night including breakfast',
    location: 'City and surrounding villages',
  },
  {
    name: 'Beachfront Apartments',
    type: 'Self-Catering',
    icon: Sun,
    description:
      'Furnished apartments near Quemado Beach and Souani available for short-term rental in summer. Kitchens, living spaces, and often sea-view balconies. Ideal for families or longer stays.',
    price: 'From 350 MAD per night for a one-bedroom',
    location: 'Beachfront areas throughout the city',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS
   ═══════════════════════════════════════════════════════════════ */

const dayTrips = [
  {
    name: 'Cala Iris & Penon de Alhucemas',
    icon: Anchor,
    distance: '50 km west',
    description:
      'Drive the coastal road to Cala Iris, stopping at cliff viewpoints. Hire a boat to visit the Penon de Alhucemas (Spanish islet fortress) and hidden coves. Swim in crystal-clear waters and lunch on fresh fish.',
    duration: 'Full day',
  },
  {
    name: 'Isly Bay & Torres de Alcala',
    icon: Landmark,
    distance: '55 km east',
    description:
      'Discover Isly Bay\'s turquoise waters and continue to Torres de Alcala, a fishing village with a 16th-century Spanish fortress. The drive follows a dramatic corniche road with Mediterranean views.',
    duration: 'Full day',
  },
  {
    name: 'Bades & Penon de Velez',
    icon: Globe,
    distance: '60 km west',
    description:
      'Visit ruins of Bades, a medieval port, overlooking a wild beach. The Penon de Velez de la Gomera sits offshore, connected by a sand isthmus forming the world\'s shortest international border at 85 meters.',
    duration: 'Full day',
  },
  {
    name: 'Ketama & Rif Mountain Villages',
    icon: Mountain,
    distance: '100 km south',
    description:
      'Drive through cedar forests and Amazigh villages with terraced hillsides and panoramic valleys. Stop at local markets for Rif honey, handwoven textiles, and aromatic herbs.',
    duration: 'Full day',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING THERE
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  {
    name: 'By Air',
    icon: Globe,
    description:
      'Charif Al Idrissi Airport (AHU), 17 km southeast. Royal Air Maroc flies from Casablanca (1h15). Flights increase in summer. Airport taxis cost from 100 MAD to city center.',
  },
  {
    name: 'By Bus',
    icon: Compass,
    description:
      'CTM and Supratours coaches serve Al Hoceima. From Nador: 2h (from 40 MAD). From Fes: 6h (from 120 MAD). From Tangier: 6h (from 130 MAD). From Casablanca: 10h (from 200 MAD). CTM buses have AC.',
  },
  {
    name: 'By Car',
    icon: MapPin,
    description:
      'From Fes: 5 hours via N8 through Taza (one of Morocco\'s most scenic drives). From Nador: 2 hours via N16. From Tangier: 5-6 hours via A1 to Tetouan then east. Roads are well-maintained but winding.',
  },
  {
    name: 'By Grand Taxi',
    icon: Users,
    description:
      'Shared grand taxis to Nador (from 50 MAD, 2 hours) and other towns. Private taxis from Nador airport cost from 400 MAD. Grand taxis depart when full; morning departures are most reliable.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CROSS-LINK GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    title: 'Best Beaches in Morocco',
    href: '/best-beaches-morocco',
    description: 'Discover the top coastal destinations across Morocco, from Atlantic surf spots to Mediterranean coves.',
  },
  {
    title: 'Chefchaouen Guide',
    href: '/chefchaouen',
    description: 'Explore the Blue Pearl of the Rif Mountains, just a scenic drive from Al Hoceima.',
  },
  {
    title: 'Morocco National Parks',
    href: '/national-parks',
    description: 'Complete guide to Morocco\'s protected areas, from mountains to coastlines.',
  },
  {
    title: 'Berber Culture in Morocco',
    href: '/morocco-berber-culture',
    description: 'Discover the rich Amazigh heritage, traditions, and village experiences across Morocco.',
  },
  {
    title: 'Morocco Surfing Guide',
    href: '/morocco-surfing-guide',
    description: 'From Atlantic swells to Mediterranean waves, find the best surf spots in Morocco.',
  },
  {
    title: 'Things to Do in Tangier',
    href: '/things-to-do-tangier',
    description: 'Explore northern Morocco\'s gateway city where the Atlantic meets the Mediterranean.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function AlHoceimaGuidePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ─────────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="hero-overlay relative isolate overflow-hidden bg-gradient-to-br from-sky-900 via-blue-800 to-cyan-700 py-28 text-white lg:py-36">
        <div className="moroccan-pattern absolute inset-0 opacity-10" />
        <div className="container-morocco relative z-10 text-center">
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center justify-center gap-1 text-sm text-white/80">
            <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-3.5 w-3.5" /> Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">Al Hoceima Guide</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Al Hoceima Travel Guide 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-[family-name:var(--font-heading)] text-lg leading-relaxed text-white/90 sm:text-xl">
            Where the rugged Rif Mountains plunge into the turquoise Mediterranean. Pristine
            beaches, a marine national park, vibrant Amazigh culture, and Morocco&apos;s freshest
            seafood in this unspoiled coastal gem.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm">
            {[
              { icon: Waves, label: 'Mediterranean Coast' },
              { icon: Mountain, label: 'Rif Mountains' },
              { icon: Shield, label: 'National Park' },
              { icon: Fish, label: 'Fresh Seafood' },
            ].map((tag) => (
              <span key={tag.label} className="flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2">
                <tag.icon className="h-4 w-4" /> {tag.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTRODUCTION ────────────────────────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
            <MapPin className="h-4 w-4" /> Northern Morocco
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Discover Al Hoceima
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-gray-600">
            Tucked into a dramatic amphitheatre where the Rif Mountains cascade down to the
            Mediterranean, Al Hoceima is one of Morocco&apos;s best-kept secrets. This small coastal
            city offers an authentic window into Rif Amazigh culture, with pristine beaches rivaling
            southern Europe and a marine national park protecting the western Mediterranean&apos;s
            richest biodiversity. Once known as Villa Sanjurjo during the Spanish protectorate, that
            Iberian influence lingers in the architecture, local dialect, and dishes like caldero.
            Today, Al Hoceima is the cultural capital of the Rif, where Tarifit is the mother tongue
            and traditions run deep.
          </p>
        </div>
      </section>

      {/* ── BEST BEACHES ────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-1.5 text-sm font-semibold text-cyan-700">
              <Waves className="h-4 w-4" /> Coastal Paradise
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Best Beaches in Al Hoceima
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Al Hoceima&apos;s coastline features some of the most beautiful Mediterranean beaches
              in all of North Africa. From bustling city beaches to remote hidden coves, each offers
              a unique experience.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {beaches.map((beach) => (
              <article key={beach.name} className="card-moroccan group overflow-hidden rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                    <beach.icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">
                    {beach.name}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{beach.description}</p>
                <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                  <p className="flex items-center gap-1.5">
                    <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                    <strong>Facilities:</strong> {beach.facilities}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Star className="h-3.5 w-3.5 text-[var(--color-gold)]" />
                    <strong>Best for:</strong> {beach.bestFor}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[var(--color-accent)]" />
                    <strong>Access:</strong> {beach.access}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NATIONAL PARK ───────────────────────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-sm font-semibold text-green-700">
            <Shield className="h-4 w-4" /> Protected Area
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Al Hoceima National Park
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Established in 2004, Al Hoceima National Park spans 48,460 hectares of both terrestrial
            and marine environments. It is Morocco&apos;s only national park with a significant marine
            component, protecting dramatic sea cliffs, Posidonia seagrass meadows, and some of the
            last pristine Mediterranean coastline in North Africa.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {parkActivities.map((activity) => (
            <article key={activity.name} className="card-moroccan rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
                  <activity.icon className="h-5 w-5" />
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">
                  {activity.name}
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{activity.description}</p>
              <div className="mt-4 space-y-2 border-t border-gray-100 pt-4 text-xs text-gray-500">
                <p className="flex items-center gap-1.5">
                  <Info className="h-3.5 w-3.5 text-blue-500" />
                  <strong>Difficulty:</strong> {activity.difficulty}
                </p>
                <p className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-amber-500" />
                  <strong>Duration:</strong> {activity.duration}
                </p>
                <p className="flex items-center gap-1.5">
                  <DollarSign className="h-3.5 w-3.5 text-green-500" />
                  <strong>Price:</strong> {activity.price}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="zellige-border mt-10 rounded-xl bg-green-50 p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
            <p className="text-sm text-green-700">
              <strong className="text-green-800">Conservation Note:</strong> The park protects endangered species including the osprey and Mediterranean monk seal. Follow marked trails, avoid disturbing wildlife, and never collect marine specimens. Seasonal pricing for guided activities can change.
            </p>
          </div>
        </div>
      </section>

      {/* ── WATER SPORTS ────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
              <Waves className="h-4 w-4" /> Adventure
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Water Sports &amp; Activities
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Calm Mediterranean waters make Al Hoceima a water sport playground. Most activities
              run June through September, with some extending into May and October.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {waterSports.map((sport) => (
              <article key={sport.name} className="card-moroccan rounded-2xl p-5 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600"><sport.icon className="h-6 w-6" /></span>
                <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{sport.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{sport.description}</p>
                <p className="mt-3 text-xs font-semibold text-[var(--color-accent)]">{sport.price}</p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">Seasonal pricing can change. Prices may vary by operator and season.</p>
        </div>
      </section>

      {/* ── RIF CULTURE & AMAZIGH HERITAGE ──────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
            <BookOpen className="h-4 w-4" /> Cultural Heritage
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Rif Mountain Culture &amp; Amazigh Heritage
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            The Rif Amazigh people have maintained their unique identity, language, and traditions
            for millennia. Al Hoceima is the cultural heart of this distinct region.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { icon: Award, title: 'Tarifit Language & Identity', text: 'Tarifit is the Amazigh language of the Rif, spoken by approximately 4 million people. Since 2011, Tamazight is an official language of Morocco. Learning even "azul" (hello) earns genuine smiles from locals.' },
            { icon: Calendar, title: 'Festivals & Celebrations', text: 'The annual Festival International d\'Al Hoceima celebrates Rif culture each summer. Yennayer, the Amazigh New Year (January 13th), brings traditional feasts. Rif weddings last three days with gasba and adjoun drums.' },
            { icon: Landmark, title: 'Historical Significance', text: 'In the 1920s, Abd el-Krim led the Rif War against colonial forces, establishing the Republic of the Rif. Al Hoceima\'s history as Villa Sanjurjo is visible in architecture blending Rif, Spanish, and Moroccan styles.' },
            { icon: Gem, title: 'Crafts & Local Markets', text: 'Weekly souks showcase Rif artisanal traditions: handwoven textiles in red, black, and white; carved woodwork; straw hats; honey, olive oil, and herbs. Visit rural souks for the most authentic experience.' },
          ].map((item) => (
            <div key={item.title} className="card-moroccan rounded-2xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600"><item.icon className="h-5 w-5" /></span>
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{item.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── LOCAL CUISINE ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-700">
              <Utensils className="h-4 w-4" /> Food &amp; Drink
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Local Cuisine &amp; Seafood
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              A Mediterranean fishing port blending Rif Amazigh traditions with Spanish influences,
              creating dishes you won&apos;t find elsewhere in Morocco.
            </p>
          </div>
          <div className="mt-10 space-y-5">
            {localCuisine.map((dish) => (
              <article key={dish.name} className="card-moroccan flex flex-col gap-4 rounded-2xl p-6 md:flex-row md:items-start">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600"><dish.icon className="h-6 w-6" /></span>
                <div className="flex-1">
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{dish.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{dish.description}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-green-500" /> {dish.price}</span>
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-[var(--color-accent)]" /> {dish.where}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400">Seasonal pricing can change. Prices may vary by restaurant and season.</p>
        </div>
      </section>

      {/* ── WHERE TO STAY ───────────────────────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-purple-50 px-4 py-1.5 text-sm font-semibold text-purple-700">
            <Building className="h-4 w-4" /> Accommodation
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Where to Stay in Al Hoceima
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            From upscale sea-view hotels to family-run guesthouses. The compact city keeps most
            options within easy reach of beaches and restaurants.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {accommodations.map((place) => (
            <article key={place.name} className="card-moroccan rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600"><place.icon className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{place.name}</h3>
                  <p className="text-xs font-medium text-purple-600">{place.type}</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{place.description}</p>
              <div className="mt-4 flex flex-wrap gap-4 border-t border-gray-100 pt-4 text-xs text-gray-500">
                <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-green-500" /> {place.price}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-[var(--color-accent)]" /> {place.location}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-gray-400">Seasonal pricing can change. Book July-August well in advance.</p>
      </section>

      {/* ── GETTING THERE ───────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-semibold text-indigo-700">
              <Compass className="h-4 w-4" /> Transport
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Getting to Al Hoceima
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Multiple transport options make Al Hoceima accessible. The Rif Mountain road journey
              is part of the adventure.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {transportOptions.map((option) => (
              <article key={option.name} className="card-moroccan rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600"><option.icon className="h-5 w-5" /></span>
                  <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{option.name}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{option.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST TIME TO VISIT ──────────────────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-semibold text-yellow-700">
            <Sun className="h-4 w-4" /> When to Go
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Best Time to Visit Al Hoceima
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Waves, color: 'blue', title: 'Summer (Jun - Sep)', text: 'Water 22-25 degrees, air 28-32. Perfect for swimming, diving, and water sports. Busiest months; book July-August in advance.', best: 'Beach & Water Sports' },
            { icon: Mountain, color: 'green', title: 'Spring & Autumn (Apr-May, Sep-Oct)', text: 'Mild 18-25 degrees, fewer crowds, lower prices. Spring wildflowers; autumn retains warm seas. Ideal for hiking.', best: 'Hiking & Exploration' },
            { icon: Camera, color: 'amber', title: 'Winter (Nov - Mar)', text: 'Mild 10-16 degrees with occasional rain. Quietest season for authentic experiences. January Yennayer celebrations.', best: 'Culture & Budget Travel' },
          ].map((season) => (
            <div key={season.title} className="card-moroccan rounded-2xl p-6 text-center">
              <span className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-${season.color}-50 text-${season.color}-600`}>
                <season.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{season.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{season.text}</p>
              <p className={`mt-2 text-xs font-semibold text-${season.color}-600`}>Best for: {season.best}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DAY TRIPS ───────────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-4 py-1.5 text-sm font-semibold text-teal-700">
              <Compass className="h-4 w-4" /> Excursions
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Day Trips from Al Hoceima
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Hidden beaches, historical sites, and mountain scenery along dramatic coastal and
              mountain roads.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {dayTrips.map((trip) => (
              <article key={trip.name} className="card-moroccan rounded-2xl p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-600"><trip.icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{trip.name}</h3>
                    <p className="text-xs text-gray-500">{trip.distance} from Al Hoceima</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{trip.description}</p>
                <p className="mt-3 flex items-center gap-1 text-xs font-medium text-teal-600"><Clock className="h-3.5 w-3.5" /> {trip.duration}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NIGHTLIFE & ENTERTAINMENT ───────────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-pink-50 px-4 py-1.5 text-sm font-semibold text-pink-700">
            <Sparkles className="h-4 w-4" /> After Dark
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Nightlife &amp; Entertainment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Al Hoceima&apos;s nightlife is relaxed and centered around the Mediterranean promenade,
            with its own laid-back charm.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: Utensils, title: 'Waterfront Dining', text: 'The Quemado promenade comes alive evenings with restaurants serving fresh seafood under the stars. In summer, beachside chiringuitos add Mediterranean atmosphere. Dinner starts late, around 9 PM.' },
            { icon: Users, title: 'Paseo & Cafe Culture', text: 'Locals stroll the corniche in the cool evenings, stopping at cafes for mint tea, coffee, or juice. This paseo tradition is the social heart of the city.' },
            { icon: Star, title: 'Summer Festivals', text: 'Summer brings outdoor events, live music, and the annual international festival featuring Riffian and international artists. Open-air cinema and art exhibitions round out the calendar.' },
          ].map((item) => (
            <div key={item.title} className="card-moroccan rounded-2xl p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-50 text-pink-600">
                <item.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-heading)] text-base font-bold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRACTICAL TIPS ──────────────────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-1.5 text-sm font-semibold text-gray-700">
              <Info className="h-4 w-4" /> Essential Info
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Practical Tips for Al Hoceima
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Currency & Payments', text: 'ATMs available in the city center. Carry cash for markets, taxis, and small establishments. Currency is Moroccan Dirham (MAD).' },
              { title: 'Dress Code', text: 'Relaxed but modest clothing appreciated away from the beach. Swimwear fine at the beach; cover up in town. Respect customs during Ramadan.' },
              { title: 'Connectivity', text: 'WiFi at hotels and cafes. SIM cards (Maroc Telecom, Inwi, Orange) from 30 MAD. Coverage can be spotty in remote areas.' },
              { title: 'Getting Around', text: 'City center is walkable. Petit taxis from 10 MAD. Rent a car for beaches and day trips. Grand taxis for regional travel.' },
              { title: 'Health & Safety', text: 'Public hospital and private clinics available. Bottled water recommended. Sun protection essential in summer. Swim where lifeguards are present.' },
              { title: 'Useful Tarifit', text: 'Azul (Hello), Tanmirt (Thank you), Manzkin? (How are you?), Labas (Fine). Locals appreciate any effort to speak Tarifit.' },
            ].map((tip) => (
              <div key={tip.title} className="flex items-start gap-3 rounded-xl border border-gray-100 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900">{tip.title}</h4>
                  <p className="mt-1 text-xs text-gray-600">{tip.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="container-morocco py-16 lg:py-20">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-accent)]">
            <Info className="h-4 w-4" /> FAQ
          </span>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {faqJsonLd.mainEntity.map((faq, idx) => (
            <details key={idx} className="group rounded-xl border border-gray-200 bg-white" {...(idx === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer items-center gap-3 p-5 font-[family-name:var(--font-heading)] font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-[var(--color-accent)] transition-transform group-open:rotate-90" />
                {faq.name}
              </summary>
              <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-sm leading-relaxed text-gray-600">{faq.acceptedAnswer.text}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ── RELATED GUIDES (Cross-Links) ────────────────────── */}
      <section className="bg-white py-16 lg:py-20">
        <div className="container-morocco">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)]/10 px-4 py-1.5 text-sm font-semibold text-[var(--color-gold)]">
              <BookOpen className="h-4 w-4" /> Explore More
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 sm:text-4xl">
              Related Travel Guides
            </h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan group flex flex-col rounded-2xl p-5 hover:shadow-md">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-bold text-gray-900 group-hover:text-[var(--color-accent)]">{guide.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{guide.description}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]">Read guide <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-sky-900 via-blue-800 to-cyan-700 py-16 text-white">
        <div className="container-morocco text-center">
          <Sparkles className="mx-auto h-10 w-10 text-cyan-300" />
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
            Ready to Explore Al Hoceima?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
            From Quemado Beach to the dramatic cliffs of Al Hoceima National Park, this
            Mediterranean gem awaits. Start planning your Rif coast adventure today.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/best-beaches-morocco" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-sky-900 hover:bg-gray-100">
              Explore Morocco Beaches <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/national-parks" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Morocco National Parks <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

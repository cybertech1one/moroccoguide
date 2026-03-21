import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Waves,
  Sun,
  Wind,
  Clock,
  Info,
  ArrowRight,
  Compass,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Anchor,
  Building,
  Calendar,
  MessageCircleQuestion,
  Plane,
  Bed,
  Camera,
  Shell,
  Fish,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-beach-towns`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Best Beach Towns in Morocco 2026 | Essaouira, Taghazout, Asilah & More',
  description:
    'Complete guide to Morocco\'s best beach towns. Essaouira for wind sports, Taghazout for surfing, Asilah for art, Mirleft for off-the-radar escapes, Dakhla for world-class kitesurfing, Oualidia for lagoon swimming, plus Legzira and Sidi Ifni. Atlantic vs Mediterranean coast, best season, accommodation, and how to get there.',
  keywords: [
    'Morocco beach towns',
    'best beaches Morocco',
    'Essaouira beach guide',
    'Taghazout surf town',
    'Asilah Morocco',
    'Mirleft beach Morocco',
    'Sidi Ifni Morocco',
    'Dakhla kitesurfing',
    'Legzira beach arches',
    'Oualidia lagoon Morocco',
    'Morocco Atlantic coast',
    'Morocco Mediterranean coast',
    'Morocco coastal towns 2026',
    'Morocco beach holiday',
    'surf towns Morocco',
    'Morocco seaside accommodation',
    'Morocco beach travel guide',
    'family beach Morocco',
  ],
  openGraph: {
    title: 'Best Beach Towns in Morocco 2026 | Essaouira, Taghazout, Asilah & More',
    description:
      'From the wind-battered Atlantic coast to the calm Mediterranean shores, Morocco has beach towns for every type of traveler. Surf breaks, artist enclaves, hidden coves, lagoon swimming, and world-class kitesurfing — all with Moroccan food and culture steps from the sand.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue fishing boats in the harbor of Essaouira with the fortified medina walls in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Beach Towns in Morocco 2026 | Complete Coastal Guide',
    description:
      'Essaouira, Taghazout, Asilah, Mirleft, Dakhla, Oualidia, Legzira & Sidi Ifni — the definitive guide to Morocco\'s coastal towns with best seasons, activities, accommodation, and travel tips.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'What is the best beach town in Morocco for surfing?',
    a: 'Taghazout is the undisputed surf capital. The town sits on a coastline with over a dozen breaks suited to all levels, from the gentle foam of Panoramas to the powerful barrels of Killer Point and Anchor Point. December through March delivers the biggest swells. Surf camps and board rentals start from 200 MAD per day.',
  },
  {
    q: 'Is it safe to swim at Morocco\'s Atlantic beaches?',
    a: 'Many Atlantic beaches have strong currents, undertow, and large waves. Stick to beaches with lifeguards on duty, especially Essaouira\'s main beach, Legzira (watch the tide), and Oualidia\'s lagoon, which is the safest swimming spot on the Atlantic coast. The Mediterranean side around Al Hoceima and Saidia has calmer, warmer water better suited to casual swimmers.',
  },
  {
    q: 'When is the best time to visit Morocco\'s beach towns?',
    a: 'June through September offers the warmest water and most sunshine. Essaouira and Taghazout stay windy year-round, making them ideal for wind sports even in winter. Dakhla is best from March to November for kitesurfing. Oualidia and Asilah are most pleasant from May through October. Avoid the Atlantic coast in January if you just want to sunbathe — water temperatures drop to 16-17 degrees Celsius.',
  },
  {
    q: 'How do I get to Taghazout from Marrakech?',
    a: 'Take a direct bus from Marrakech to Agadir (3.5 hours, from 80 MAD on CTM or Supratours). From Agadir, a grand taxi to Taghazout costs from 100 MAD per person (20 minutes). Alternatively, rent a car at Agadir airport — the drive from Marrakech to Taghazout takes about 3.5 hours via the toll motorway through Agadir.',
  },
  {
    q: 'Can I find budget accommodation in Moroccan beach towns?',
    a: 'Absolutely. Taghazout has hostels from 80 MAD per night and surf camp packages (board, lessons, accommodation, meals) from 500 MAD per day. Mirleft has guesthouses from 150 MAD. Sidi Ifni has basic hotels from 120 MAD. Essaouira has the widest range, from 100 MAD hostels to luxury riads at 2,000+ MAD. Seasonal pricing can change in July-August when rates across all towns rise 30-50 percent.',
  },
  {
    q: 'Which Moroccan beach town is best for families with children?',
    a: 'Oualidia. The protected lagoon has calm, shallow water that is ideal for young children. The town is quiet, uncrowded, and known for its oyster farms and fresh seafood. Essaouira is a strong second choice — the medina is walkable, camel rides are available on the beach, and there are plenty of family-friendly riads.',
  },
  {
    q: 'Is Dakhla worth the long journey from northern Morocco?',
    a: 'If you are into kitesurfing, windsurfing, or want a genuinely remote Atlantic experience, yes. Dakhla sits on a peninsula in the Saharan south with a massive lagoon that produces flat, warm water and consistent wind — arguably the best kite spot in Africa. Getting there requires a flight from Casablanca (2 hours) or a very long drive (18+ hours from Marrakech). Most visitors stay at all-inclusive kite camps.',
  },
  {
    q: 'What is the difference between Morocco\'s Atlantic and Mediterranean coasts?',
    a: 'The Atlantic coast is longer, wilder, and windier — perfect for surfing and wind sports but cold for swimming outside summer. The Mediterranean coast (from Tangier east to Saidia) has warmer, calmer water, smaller waves, and a more European beach-holiday feel. The Atlantic has more character and culture; the Mediterranean has more resort infrastructure and family-friendly beaches.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Best Beach Towns in Morocco 2026',
  description:
    'Complete guide to Morocco\'s best coastal towns including Essaouira, Taghazout, Asilah, Mirleft, Sidi Ifni, Dakhla, Legzira, and Oualidia. Covers Atlantic and Mediterranean coasts, activities, accommodation, best seasons, and getting there.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Beach Towns', item: PAGE_URL },
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
   DATA: BEACH TOWNS
   ================================================================ */

const beachTowns = [
  {
    name: 'Essaouira',
    slug: '/morocco-essaouira',
    vibe: 'Wind City — artists, surfers, backpackers',
    icon: Wind,
    image: '/images/hero-essaouira.webp',
    bestSeason: 'April-June & September-October (less wind). Wind sports: year-round.',
    gettingThere: 'Direct buses from Marrakech (2.5h, from 70 MAD). Shared grand taxis available. Small airport with limited domestic flights.',
    beaches: [
      'Main Beach — wide, sandy, constant wind. Camel rides, football, kite flyers. Strong currents make swimming tricky.',
      'Sidi Kaouki — 25 km south. Quieter, great for surfing and horseback riding along the shore.',
      'Moulay Bouzerktoun — 20 km north. One of Morocco\'s top windsurfing and kitesurfing spots.',
    ],
    activities: 'Windsurfing, kitesurfing, surfing at Sidi Kaouki, camel rides, fishing trips, medina exploring, Gnaoua music scene, argan oil cooperative visits.',
    accommodation: 'Riads in the medina from 250 MAD, hostels from 100 MAD, beachfront hotels from 600 MAD. The medina has the most character; beachside spots like Ocean Vagabond offer direct sand access.',
    description:
      'Essaouira is the beach town that does not need sunshine to impress. The Atlantic wind hammers this fortified port city almost every day, which is exactly why windsurfers and kitesurfers keep coming back. Behind the ramparts, the medina is a UNESCO World Heritage Site — a compact grid of blue-shuttered streets, art galleries, thuya wood workshops, and seafood grills. The pace is slower than Marrakech, the touts are fewer, and the Gnaoua World Music Festival each June draws crowds from across the globe. The fishing port is worth a morning visit: watch boats unload sardines and sea bream, then eat grilled fish at the harbor stalls for from 40 MAD a plate.',
  },
  {
    name: 'Taghazout',
    slug: '/taghazout',
    vibe: 'Surf capital — backpackers, wave riders, yoga retreats',
    icon: Waves,
    image: '/images/hero-taghazout.webp',
    bestSeason: 'Surfing: October-March (biggest swells). Sunshine: year-round.',
    gettingThere: 'Fly into Agadir Al Massira airport. Grand taxi from Agadir center (from 100 MAD, 20 min). Bus from Marrakech to Agadir (3.5h, from 80 MAD), then taxi north.',
    beaches: [
      'Taghazout Beach — the main village beach. Mellow wave for longboarding, right in front of the cafes.',
      'Anchor Point — world-class right-hand point break. Experienced surfers only. Best December-February.',
      'Panoramas — gentle beach break south of the village. Perfect for beginners and surf lessons.',
      'Killer Point — heavy, hollow wave over rocks. Advanced surfers, big swell days only.',
    ],
    activities: 'Surfing (lessons from 300 MAD), yoga retreats, cliff jumping at Paradise Valley, day trips to Agadir and Tiznit, skateparking at Taghazout Bay resort.',
    accommodation: 'Surf hostels from 80 MAD/night, surf camp packages (7 nights + lessons) from 3,500 MAD, boutique guesthouses from 400 MAD, Taghazout Bay luxury resort from 1,500 MAD.',
    description:
      'Taghazout was a fishing village until surfers discovered its point breaks in the 1960s. Today it is Morocco\'s surf headquarters — a single street of cafes, board rental shops, and rooftop terraces looking out at the Atlantic. The vibe is laid-back to the point of horizontal. Mornings start with yoga on a rooftop, afternoons are spent chasing waves, and evenings end with tagine and mint tea. The coastline north and south of town holds over a dozen breaks, from beginner-friendly Panoramas to the powerful Anchor Point, considered one of the best right-hand point breaks in North Africa. A massive luxury development (Taghazout Bay) has added upscale hotels without erasing the scruffy charm of the old village.',
  },
  {
    name: 'Asilah',
    slug: '/asilah',
    vibe: 'Art town — culture, murals, family-friendly',
    icon: Camera,
    image: '/images/hero-asilah.webp',
    bestSeason: 'June-September (warm water, outdoor murals festival in August).',
    gettingThere: 'Train from Tangier (45 min, from 25 MAD). Train from Casablanca (4.5h). Grand taxis from Tangier. Easy day trip from Tangier.',
    beaches: [
      'Paradise Beach (Rmilat) — calm, clean, sandy. Popular with Moroccan families in summer.',
      'Town Beach — right below the medina walls. Small but scenic with views of the Portuguese ramparts.',
    ],
    activities: 'Mural walking tours, Portuguese ramparts exploration, Asilah Arts Festival (August), horseback riding, fresh seafood dining, day trips to Larache and Lixus ruins.',
    accommodation: 'Riads inside the medina from 300 MAD, budget pensions from 150 MAD, beach apartments for rent from 400 MAD/night in summer. Seasonal pricing can change — August rates double.',
    description:
      'Asilah is the quietest, most refined beach town on Morocco\'s Atlantic coast. The medina is tiny, immaculate, and covered in murals — repainted each summer during the annual Asilah Arts Festival, which has run since 1978. Portuguese fortifications ring the old town, and from the ramparts you can watch the sun drop into the Atlantic. The beaches north of town are calm and family-friendly, a contrast to the rough Atlantic surf further south. Asilah draws Moroccan and Spanish weekenders rather than backpackers, so the restaurants tend to be a step above the average coastal town. Fresh fish, Spanish-influenced tapas, and strong coffee dominate the dining scene. The train connection to Tangier makes this an easy day trip or a peaceful base for exploring the north.',
  },
  {
    name: 'Mirleft',
    slug: '/mirleft',
    vibe: 'Off-the-radar — independent travelers, empty beaches',
    icon: Compass,
    image: '/images/hero-mirleft.webp',
    bestSeason: 'March-June & September-November. Summer is hot but quiet.',
    gettingThere: 'Grand taxi from Tiznit (30 min, from 20 MAD). Bus from Agadir to Tiznit (2h), then taxi. No direct transport from Marrakech — route through Agadir and Tiznit.',
    beaches: [
      'Plage Marabout — dramatic cliff-backed beach with a white marabout (shrine) on the headland. Swimmable in calm conditions.',
      'Aftas Beach — sheltered cove with calmer water than the open beaches.',
      'Sidi Mohammed Ben Abdellah — long, empty stretch south of town. Almost always deserted.',
    ],
    activities: 'Beach walking, cliff hiking, surfing (uncrowded breaks), birdwatching, day trips to Legzira and Sidi Ifni, visiting the weekly souk.',
    accommodation: 'Guesthouses from 150 MAD, small hotels from 200 MAD, a handful of boutique stays from 500 MAD. No large hotels or resorts — that is the point.',
    description:
      'Mirleft is what Taghazout looked like 20 years ago. This small town sits above a series of cliff-backed coves on the Anti-Atlas coast, two hours south of Agadir. There are no resorts, no chain restaurants, and no crowds. The beaches are reached by scrambling down rocky paths, and on most days you will have an entire cove to yourself. A growing number of guesthouses and a few cafes have appeared, but the infrastructure is deliberately minimal. Travelers come here specifically to disconnect. The weekly souk brings the surrounding Berber countryside into town, and the sunsets from the cliff paths are some of the finest on the Moroccan coast.',
  },
  {
    name: 'Sidi Ifni',
    slug: '/sidi-ifni',
    vibe: 'Retro colonial — Art Deco, fishing town, melancholy charm',
    icon: Building,
    image: '/images/hero-sidi-ifni.webp',
    bestSeason: 'March-November. Fog rolls in during winter mornings but burns off by midday.',
    gettingThere: 'Grand taxi from Tiznit (1.5h, from 40 MAD) or from Mirleft (30 min). No train station. Bus service from Agadir via Tiznit.',
    beaches: [
      'Town Beach — long, wide, often foggy in the morning. Fishing boats pulled up on the sand.',
      'Legzira Beach — 10 km south (technically its own area). Famous for its monumental red stone arches carved by the Atlantic.',
    ],
    activities: 'Art Deco architecture walks, seafood at the port, day trip to Legzira arches, surfing, exploring abandoned Spanish colonial buildings.',
    accommodation: 'Basic hotels from 120 MAD, guesthouses from 200 MAD, a few renovated riads from 400 MAD. Very limited luxury options.',
    description:
      'Sidi Ifni was the last Spanish territory in Morocco, handed back only in 1969. The Art Deco cinema, the old Spanish consulate, and the crumbling airstrip are reminders of that colonial chapter. The town sits on a cliff above a wide beach, wrapped in Atlantic fog more mornings than not. There is a faded, end-of-the-road atmosphere that appeals to a specific kind of traveler — the type who finds beauty in peeling paint and empty plazas. The fishing port produces some of the freshest and cheapest seafood on the coast. Grilled sole and chips at a port-side stall costs from 30 MAD. Legzira Beach, with its famous red stone arches, is a 15-minute drive south and is the primary reason many visitors pass through.',
  },
  {
    name: 'Dakhla',
    slug: '/dakhla',
    vibe: 'Extreme sports — kitesurfing, remote Saharan peninsula',
    icon: Wind,
    image: '/images/hero-dakhla.webp',
    bestSeason: 'March-November for kiting (wind 80%+ of days). Fishing: year-round.',
    gettingThere: 'Flights from Casablanca (2h, from 800 MAD one-way on Royal Air Maroc). Driving from Marrakech takes 18+ hours. Most visitors fly.',
    beaches: [
      'Dakhla Lagoon — 40 km long, flat water, consistent wind. The main kite and windsurf playground.',
      'Foum El Bouir — white sand on the lagoon, shallow for miles. Speed kiting and freestyle.',
      'PK25 — a kite camp zone on the lagoon. Flat water, no obstacles, ideal for learning.',
      'Atlantic Side — open ocean beaches with waves. Less developed, good for surfing and fishing.',
    ],
    activities: 'Kitesurfing (camps from 5,000 MAD/week all-inclusive), windsurfing, stand-up paddle, fishing trips, flamingo watching, desert excursions, oyster farm visits.',
    accommodation: 'Kite camps from 800 MAD/night (all-inclusive with gear), town hotels from 300 MAD, eco-lodges on the lagoon from 600 MAD. Most visitors book all-inclusive kite packages.',
    description:
      'Dakhla is not a beach town in the traditional sense — it is a wind-sports mecca at the edge of the Sahara. The town sits on a narrow peninsula jutting into the Atlantic, creating a 40 km lagoon with flat, warm water and near-constant trade winds. Professional kitesurfers rank it among the top five spots on Earth. The surrounding landscape is pure desert: sand, sky, and ocean merging at the horizon. Getting here requires either a flight from Casablanca or a multi-day drive through Western Sahara. The remoteness is part of the draw. Oyster farms dot the lagoon, flamingos wade in the shallows, and at night the star visibility is extraordinary. Several well-run kite camps offer all-inclusive packages that handle logistics in a region where independent travel takes effort.',
  },
  {
    name: 'Legzira',
    slug: '/legzira',
    vibe: 'Natural wonder — dramatic arches, photography, sunsets',
    icon: Camera,
    image: '/images/hero-legzira.webp',
    bestSeason: 'March-November. Low tide is essential for walking under the arches.',
    gettingThere: 'Grand taxi from Sidi Ifni (15 min, from 20 MAD). From Tiznit, grand taxi to Sidi Ifni then onward. No public bus to the beach itself.',
    beaches: [
      'Legzira Beach — the main attraction. Red and orange stone arches sculpted by millennia of wave erosion. One major arch collapsed in 2016; remaining formations are still spectacular.',
    ],
    activities: 'Photography, beach walking at low tide, swimming (careful of currents), surfing, sunset watching, paragliding from the cliffs above.',
    accommodation: 'A handful of cliffside guesthouses from 200 MAD with direct beach views. Basic auberges from 150 MAD. Most visitors stay in Sidi Ifni or Mirleft and day-trip to Legzira.',
    description:
      'Legzira is a beach, not a town, but it deserves a place on this list for its geological drama alone. Massive red sandstone arches rise from the sand, carved into shape by Atlantic waves over millions of years. One of the two largest arches collapsed in September 2016, but the remaining formations are still among the most photographed natural features in Morocco. Visiting requires timing: at high tide, the beach disappears and the arches are inaccessible. Check the tide tables and arrive two hours before low tide for the best light and the most walking room. The cliffs above offer paragliding launches, and a few guesthouses perched on the edge serve meals with a view that would cost ten times as much anywhere in southern Europe.',
  },
  {
    name: 'Oualidia',
    slug: '/oualidia',
    vibe: 'Lagoon town — families, oysters, calm water',
    icon: Shell,
    image: '/images/hero-oualidia.webp',
    bestSeason: 'May-October. Water is warmest July-September.',
    gettingThere: 'Grand taxi from El Jadida (1h, from 30 MAD). Bus from Casablanca to El Jadida (1.5h), then taxi. Driving from Marrakech takes about 3.5 hours.',
    beaches: [
      'Oualidia Lagoon — calm, shallow, sheltered from Atlantic waves by a sandbar. Safe swimming for children.',
      'Outer Beach — beyond the sandbar, open Atlantic. Stronger waves, surfable on good days.',
    ],
    activities: 'Lagoon swimming, kayaking, oyster tasting (from 50 MAD per dozen), birdwatching (flamingos, herons), surfing on the outer beach, boat rides.',
    accommodation: 'Small hotels from 250 MAD, La Sultana Oualidia (luxury) from 2,500 MAD, guesthouses from 200 MAD. Limited options overall — book ahead in summer. Seasonal pricing can change in July-August.',
    description:
      'Oualidia is where Moroccans go when they want a beach that is actually safe to swim in. The town wraps around a crescent-shaped lagoon protected from the Atlantic by a natural sandbar, creating a pool of calm, warm water that is perfect for families and non-swimmers. Oualidia is also Morocco\'s oyster capital — the lagoon\'s clean, nutrient-rich water supports several oyster farms, and you can eat a dozen freshly shucked oysters with lemon for from 50 MAD at waterside shacks. The town itself is small and unhurried. Birdwatchers come for the flamingos and herons that feed in the lagoon at dawn. La Sultana, one of Morocco\'s finest boutique hotels, sits on the lagoon shore and offers a rare taste of luxury in an otherwise low-key destination.',
  },
];

/* ================================================================
   DATA: ATLANTIC vs MEDITERRANEAN COMPARISON
   ================================================================ */

const coastComparison = [
  { feature: 'Water Temperature (Summer)', atlantic: '19-22 degrees C', mediterranean: '23-26 degrees C' },
  { feature: 'Water Temperature (Winter)', atlantic: '16-18 degrees C', mediterranean: '15-17 degrees C' },
  { feature: 'Wave Conditions', atlantic: 'Large swells, strong currents', mediterranean: 'Calm, small waves' },
  { feature: 'Wind', atlantic: 'Strong and constant (especially Essaouira)', mediterranean: 'Light to moderate' },
  { feature: 'Best For', atlantic: 'Surfing, kitesurfing, dramatic scenery', mediterranean: 'Swimming, family holidays, resort stays' },
  { feature: 'Coast Length', atlantic: 'Approx. 2,800 km', mediterranean: 'Approx. 500 km' },
  { feature: 'Key Towns', atlantic: 'Essaouira, Taghazout, Asilah, Mirleft', mediterranean: 'Al Hoceima, Saidia, M\'diq, Fnideq' },
  { feature: 'Tourism Style', atlantic: 'Independent, surf culture, bohemian', mediterranean: 'Resort, beach clubs, European influence' },
  { feature: 'Sand Color', atlantic: 'Golden to red (Legzira)', mediterranean: 'White to golden' },
  { feature: 'Seafood Speciality', atlantic: 'Sardines, sea bream, oysters (Oualidia)', mediterranean: 'Prawns, squid, anchovies' },
];

/* ================================================================
   DATA: PACKING ESSENTIALS
   ================================================================ */

const packingItems = [
  { item: 'Reef-safe sunscreen', reason: 'UV is intense on the Moroccan coast year-round. Reef-safe formulas protect marine life in shallow reef areas.' },
  { item: 'Rash guard or UV shirt', reason: 'Doubles as sun protection and wetsuit for warmer months. Essential for surfing and snorkeling.' },
  { item: 'Water shoes or reef sandals', reason: 'Rocky entries at Mirleft, Legzira, and many surf breaks. Protects against sea urchins.' },
  { item: 'Windbreaker or light jacket', reason: 'Essaouira and Taghazout get cold wind even in summer. Evenings on the coast cool down fast.' },
  { item: 'Tide chart app', reason: 'Critical for Legzira (arches accessible at low tide only) and reef-break surfing at Taghazout.' },
  { item: 'Modest swimwear cover-up', reason: 'Morocco is conservative. A sarong or cover-up is appreciated when walking from beach to town.' },
];

/* ================================================================
   DATA: WATER ACTIVITIES OVERVIEW
   ================================================================ */

const waterActivities = [
  {
    activity: 'Surfing',
    icon: Waves,
    bestSpot: 'Taghazout & Sidi Kaouki',
    season: 'October-March (biggest swells)',
    price: 'From 200 MAD/day (board rental), from 300 MAD (lesson)',
    level: 'All levels — beginner spots and expert-only point breaks',
  },
  {
    activity: 'Kitesurfing',
    icon: Wind,
    bestSpot: 'Dakhla Lagoon & Moulay Bouzerktoun',
    season: 'March-November (Dakhla), June-September (Essaouira)',
    price: 'From 500 MAD/session, from 5,000 MAD/week camp',
    level: 'Intermediate to advanced (Dakhla has beginner areas)',
  },
  {
    activity: 'Windsurfing',
    icon: Wind,
    bestSpot: 'Essaouira & Dakhla',
    season: 'Year-round (Essaouira), March-November (Dakhla)',
    price: 'From 400 MAD/half-day rental',
    level: 'Intermediate to advanced',
  },
  {
    activity: 'Kayaking & SUP',
    icon: Anchor,
    bestSpot: 'Oualidia Lagoon & Dakhla',
    season: 'May-October',
    price: 'From 100 MAD/hour',
    level: 'All levels — lagoon conditions are flat and calm',
  },
  {
    activity: 'Fishing Trips',
    icon: Fish,
    bestSpot: 'Essaouira, Sidi Ifni, Dakhla',
    season: 'Year-round',
    price: 'From 300 MAD/half-day on a local boat',
    level: 'No experience needed',
  },
  {
    activity: 'Snorkeling & Diving',
    icon: Waves,
    bestSpot: 'Al Hoceima (Mediterranean), Cap Spartel',
    season: 'June-September (clearest water)',
    price: 'From 400 MAD/dive, from 100 MAD/snorkel rental',
    level: 'All levels (snorkeling), certified divers (scuba)',
  },
];

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoBeachTownsPage() {
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

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-essaouira.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Beach Towns</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Coastal Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco&apos;s Best
            <br className="hidden md:block" /> Beach Towns
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the wind-hammered surf breaks of Taghazout to the calm lagoon at Oualidia and the
            Saharan kitesurfing paradise of Dakhla — a complete guide to Morocco&apos;s 3,500 km coastline.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Two Coasts, Dozens of Beach Towns, One Country
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco has over 3,500 km of coastline split between the Atlantic Ocean and the Mediterranean
              Sea. The Atlantic side is wild, windswept, and home to some of the best surf breaks in
              Africa. The Mediterranean side is calmer, warmer, and draws Moroccan families and European
              holidaymakers looking for blue water and soft sand.
            </p>
            <p>
              Between these two coasts, Morocco offers beach towns that range from fishing villages
              barely touched by tourism to fully equipped surf towns with yoga studios on every corner.
              You can eat freshly shucked oysters at a lagoon in Oualidia, watch the sun set through
              red stone arches at Legzira, ride world-class waves at Taghazout, or kitesurf across a
              Saharan lagoon in Dakhla where the nearest city is a full day&apos;s drive away.
            </p>
            <p>
              This guide covers eight of the best beach towns and coastal destinations in Morocco,
              with practical information on how to get there, where to stay, what to do, and when to
              go. Each town has a distinct personality, and choosing the right one depends on what
              you want from a coastal trip.
            </p>
          </div>
        </div>
      </section>

      {/* ── Beach Towns ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The 8 Best Beach Towns in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each town serves a different type of traveler. Surfers, artists, families, kite addicts,
            and solitude-seekers all have a place on Morocco&apos;s coast.
          </p>

          <div className="space-y-10">
            {beachTowns.map((town) => {
              const TownIcon = town.icon;
              return (
                <div key={town.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56 md:h-64">
                    <img
                      src={town.image}
                      alt={`${town.name} beach town on the Moroccan coast`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <TownIcon className="w-5 h-5 text-white" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white">
                        {town.name}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs">
                      {town.vibe}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                      {town.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                          <Waves className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Beaches
                        </h4>
                        <ul className="space-y-1.5">
                          {town.beaches.map((beach) => (
                            <li key={beach} className="text-xs text-[var(--text-secondary)] flex items-start gap-1.5">
                              <CheckCircle className="w-3 h-3 text-[var(--color-gold)] shrink-0 mt-0.5" />
                              <span>{beach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wide mb-2 flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 text-[var(--color-accent)]" /> Activities
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)]">{town.activities}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <div className="flex items-center gap-1.5 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          <Calendar className="w-3 h-3 text-[var(--color-accent)]" /> Best Season
                        </div>
                        <p className="text-[var(--text-secondary)]">{town.bestSeason}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <div className="flex items-center gap-1.5 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          <Plane className="w-3 h-3 text-[var(--color-accent)]" /> Getting There
                        </div>
                        <p className="text-[var(--text-secondary)]">{town.gettingThere}</p>
                      </div>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                        <div className="flex items-center gap-1.5 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                          <Bed className="w-3 h-3 text-[var(--color-accent)]" /> Accommodation
                        </div>
                        <p className="text-[var(--text-secondary)]">{town.accommodation}</p>
                      </div>
                    </div>

                    {town.slug && (
                      <div className="mt-4 pt-4 border-t border-[var(--border)]">
                        <Link
                          href={town.slug}
                          className="inline-flex items-center gap-1.5 text-sm text-[var(--color-accent)] font-medium hover:text-[var(--color-primary)] transition-colors"
                        >
                          Full {town.name} Guide <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Atlantic vs Mediterranean ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Atlantic Coast vs Mediterranean Coast
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            Morocco&apos;s two coastlines could belong to different countries. Here is how they compare.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Water temperatures are approximate and vary by specific location and year.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                  <div className="p-3 px-4">Feature</div>
                  <div className="p-3 px-4">Atlantic Coast</div>
                  <div className="p-3 px-4">Mediterranean Coast</div>
                </div>
                {coastComparison.map((row, i) => (
                  <div
                    key={row.feature}
                    className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.feature}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{row.atlantic}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{row.mediterranean}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Water Activities ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Anchor className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Activities Along the Coast
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s coast supports everything from beginner surf lessons to professional kitesurfing
            competitions. Here is what you can do and what it costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {waterActivities.map((act) => {
              const ActIcon = act.icon;
              return (
                <div key={act.activity} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <ActIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {act.activity}
                  </h3>
                  <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                    <p><span className="font-medium text-[var(--text-primary)]">Best spot:</span> {act.bestSpot}</p>
                    <p><span className="font-medium text-[var(--text-primary)]">Season:</span> {act.season}</p>
                    <p><span className="font-medium text-[var(--text-primary)]">Level:</span> {act.level}</p>
                    <p className="text-[var(--color-accent)] font-semibold">{act.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Choosing Your Beach Town ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Beach Town Is Right for You?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Waves className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                For Surfers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong>Taghazout</strong> is the obvious choice, with breaks for every level within walking distance.
                Beginners should head to Panoramas or book a surf camp with daily lessons. Advanced riders should time a
                visit for December-February when Anchor Point and Killer Point deliver serious Atlantic swell. Sidi Kaouki
                (near Essaouira) is a quieter alternative.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Wind className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                For Kitesurfers &amp; Windsurfers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong>Dakhla</strong> for flat-water lagoon conditions and near-guaranteed wind. <strong>Essaouira</strong> and
                Moulay Bouzerktoun for wave riding in wind. Dakhla is remote and requires a flight, but the lagoon conditions
                are world-class. Essaouira is easier to reach and has a full medina to explore between sessions.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                For Families
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong>Oualidia</strong> has the safest swimming on the Atlantic coast thanks to its protected lagoon. Children
                can paddle in shallow, calm water while parents eat oysters. <strong>Asilah</strong> is another strong pick —
                the Paradise Beach is calm, the medina is safe for wandering, and the train connection to Tangier makes logistics simple.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                For Photographers &amp; Artists
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong>Asilah</strong> for the mural-covered medina and rampart sunsets. <strong>Legzira</strong> for the
                red stone arches at golden hour. <strong>Essaouira</strong> for the fishing port, blue boats, and medina light.
                Sidi Ifni&apos;s Art Deco architecture offers a different, more melancholic visual palette.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                For Off-the-Beaten-Path Travelers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong>Mirleft</strong> delivers empty beaches, cliff-backed coves, and minimal tourist infrastructure.
                <strong> Sidi Ifni</strong> has a faded, end-of-the-road character that rewards slow travelers. Both are reachable
                from Tiznit and can be combined in a southern coast road trip with Legzira.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                For Budget Travelers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                <strong>Taghazout</strong> hostels start from 80 MAD. <strong>Sidi Ifni</strong> hotels from 120 MAD.
                <strong> Mirleft</strong> guesthouses from 150 MAD. All three towns have cheap eats under 40 MAD.
                Essaouira has the widest range of budget options but prices jump in summer. Avoid July-August if you are
                counting dirhams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing for the Coast ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Coastal Packing Essentials
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six items that make a real difference on Morocco&apos;s coast.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingItems.map((item) => (
              <div key={item.item} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {item.item}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Beach Safety in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlantic is powerful and unpredictable. Respect it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Rip Currents Are Common',
                text: 'Atlantic beaches regularly produce strong rip currents. If caught, do not swim against it. Swim parallel to shore until free, then angle back in. Many beaches lack lifeguards — ask locals about conditions before entering.',
              },
              {
                title: 'Check Tides Before Visiting Legzira',
                text: 'At high tide, the beach at Legzira disappears completely and the arches become inaccessible. People have been trapped by rising water. Check tide charts online and arrive at least two hours before low tide.',
              },
              {
                title: 'Surf Within Your Level',
                text: 'Anchor Point, Killer Point, and Boilers near Taghazout are expert-only breaks over shallow reef and rocks. Beginners should stick to beach breaks like Panoramas. Surf schools will direct you to appropriate spots.',
              },
              {
                title: 'Sun and Wind Combine for Fast Burns',
                text: 'The Atlantic wind cools your skin, masking UV exposure. Apply sunscreen every 90 minutes even on overcast days. Essaouira\'s wind makes cloud cover deceptive — you can burn badly without feeling hot.',
              },
              {
                title: 'Jellyfish Season (August-September)',
                text: 'Portuguese man-of-war and other jellyfish appear along the Atlantic coast in late summer. Watch for them on the sand. If stung, rinse with seawater (not fresh water) and seek a pharmacy for antihistamine cream.',
              },
              {
                title: 'Valuables on the Beach',
                text: 'Do not leave bags unattended on busy beaches in Essaouira or Asilah during peak season. Use waterproof pouches for phones and cash. At quieter spots like Mirleft or Sidi Ifni, theft is rare but basic precautions still apply.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  {tip.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coastal Food ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Fish className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Eating on the Coast
          </h2>
          <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco&apos;s coastal cuisine revolves around seafood, and the further south you go, the cheaper
              and fresher it gets. At Essaouira&apos;s fish market stalls, you pick your fish from the
              display, the cook grills it over charcoal, and you eat it with bread, harissa, and a salad
              for from 40 MAD. In Sidi Ifni, a full plate of grilled sole with fries costs from 30 MAD
              at the port.
            </p>
            <p>
              Oualidia is Morocco&apos;s oyster capital. Freshly shucked oysters with lemon cost from 50 MAD
              per dozen at lagoon-side stands. The more formal restaurants serve them with mignonette and
              champagne. Sardines — grilled whole, drizzled with chermoula, and served on newspaper — are
              the coast&apos;s signature street food, available everywhere from Tangier to Dakhla for from 15 MAD.
            </p>
            <p>
              Tagines and couscous remain staples even at the beach. Fish tagine with tomatoes, potatoes,
              and preserved lemon is the coastal version of Morocco&apos;s national dish. In Asilah, the Spanish
              influence shows up in tapas bars and seafood paella. Taghazout&apos;s surf cafes serve smoothie
              bowls, avocado toast, and international dishes alongside traditional fare — a reflection of
              its international surf crowd.
            </p>
          </div>
        </div>
      </section>

      {/* ── Seasonal Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            When to Visit: Season by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing depends entirely on what you want to do.
          </p>

          <div className="space-y-6">
            {[
              {
                season: 'Spring (March-May)',
                icon: Thermometer,
                conditions: 'Air: 18-24 degrees C. Water: 17-19 degrees C. Moderate wind.',
                highlights: 'Wildflowers along the coast, uncrowded beaches, good surfing conditions. Mirleft and Legzira are at their best. Dakhla kite season begins.',
                note: 'Water is still cool for swimming. A wetsuit is needed for surfing.',
              },
              {
                season: 'Summer (June-August)',
                icon: Sun,
                conditions: 'Air: 25-35 degrees C. Water: 20-23 degrees C. Strong wind at Essaouira.',
                highlights: 'Peak beach season. Warmest water temperatures. Asilah Arts Festival in August. All towns busy with Moroccan and European visitors.',
                note: 'Accommodation prices peak in July-August. Book ahead for Essaouira and Oualidia. Essaouira stays windy — not a sunbathing beach.',
              },
              {
                season: 'Autumn (September-November)',
                icon: Wind,
                conditions: 'Air: 20-28 degrees C. Water: 20-22 degrees C. Wind easing.',
                highlights: 'Still warm enough for swimming through October. Surf season building. Fewer crowds after schools restart. Excellent for Taghazout and Dakhla.',
                note: 'September can bring jellyfish to Atlantic beaches. October is the sweet spot for most towns.',
              },
              {
                season: 'Winter (December-February)',
                icon: Waves,
                conditions: 'Air: 12-18 degrees C. Water: 16-18 degrees C. Big Atlantic swells.',
                highlights: 'Prime surf season at Taghazout. Whale watching possible off the south coast. Quiet towns, low prices. Dakhla wind drops — less ideal for kiting.',
                note: 'Too cold for casual beach swimming on the Atlantic. The Mediterranean coast is equally cold. This is a surf-and-explore season, not a sunbathe-and-swim season.',
              },
            ].map((s) => {
              const SIcon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <SIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {s.season}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--color-accent)] font-semibold mb-2">{s.conditions}</p>
                  <p className="text-sm text-[var(--text-secondary)] mb-2">{s.highlights}</p>
                  <p className="text-xs text-[var(--text-muted)] flex items-start gap-1.5">
                    <Info className="w-3 h-3 shrink-0 mt-0.5" /> {s.note}
                  </p>
                </div>
              );
            })}
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
            Answers to the most common questions about Morocco&apos;s beach towns.
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
                title: 'Morocco Surfing Guide',
                description: 'Detailed surf spot guide covering every break from Taghazout to Sidi Kaouki, with swell charts and season tips.',
                href: '/morocco-surfing',
                icon: Waves,
              },
              {
                title: 'Morocco Kitesurfing Guide',
                description: 'Dakhla, Essaouira, and Moulay Bouzerktoun — the best kite spots, wind statistics, and camp recommendations.',
                href: '/morocco-kite-surfing',
                icon: Wind,
              },
              {
                title: 'Best Beaches in Morocco',
                description: 'Ranked list of Morocco\'s finest beaches across both coasts, with access info and crowd levels.',
                href: '/morocco-best-beaches',
                icon: Sun,
              },
              {
                title: 'Essaouira City Guide',
                description: 'Full guide to Essaouira: medina, riads, restaurants, Gnaoua festival, argan cooperatives, and day trips.',
                href: '/morocco-essaouira',
                icon: MapPin,
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

      {/* ── More Coastal Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Coastal &amp; Outdoor Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-fishing-guide', title: 'Fishing in Morocco', desc: 'Sea fishing charters, river fishing in the Atlas, and lake fishing — species, seasons, and permits.' },
              { href: '/morocco-camping-guide', title: 'Camping Guide', desc: 'Beach camping, desert bivouacs, and mountain wild camping — regulations, gear, and best sites.' },
              { href: '/morocco-road-trips', title: 'Road Trip Routes', desc: 'Coastal road trip itineraries connecting beach towns from Tangier to Dakhla with driving times and stops.' },
              { href: '/morocco-yoga-retreats', title: 'Yoga Retreats', desc: 'Beachside yoga retreats in Taghazout, Essaouira, and Dakhla combining surf, yoga, and Moroccan cuisine.' },
              { href: '/morocco-family-travel', title: 'Family Travel Guide', desc: 'Kid-friendly beaches, family riads, and practical tips for traveling Morocco with children.' },
              { href: '/morocco-budget-travel', title: 'Budget Travel', desc: 'How to travel Morocco on a tight budget: cheap eats, hostels, transport savings, and free activities.' },
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

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <Waves className="w-10 h-10 text-[var(--color-primary)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Hit the Coast?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Explore our city guides, surf reports, and transport information
            to plan your Moroccan beach trip.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Cities
            </Link>
            <Link
              href="/morocco-surfing"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Waves className="w-4 h-4" /> Surfing Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <Clock className="w-4 h-4" /> Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Wind,
  Clock,
  Info,
  ArrowRight,
  Compass,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Waves,
  Sun,
  CloudSun,
  Bike,
  Camera,
  Heart,
  Flame,
  TrendingUp,
  Award,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Outdoor Activities Guide 2026 | Adventure Sports, Nature & Active Holidays',
  description:
    'Complete guide to outdoor activities in Morocco. Hiking the Atlas Mountains, rock climbing Todra Gorge, surfing Taghazout, kitesurfing Dakhla, desert camel treks, mountain biking, paragliding, canyoning, hot air ballooning, and more. Prices, seasons, and expert tips.',
  keywords: [
    'outdoor activities morocco',
    'nature tours morocco',
    'morocco adventure activities',
    'climbing morocco',
    'rock climbing morocco',
    'water activities morocco',
    'water sports morocco',
    'hiking atlas mountains',
    'surfing taghazout morocco',
    'kitesurfing dakhla',
    'mountain biking morocco',
    'paragliding morocco',
    'camel trekking sahara',
    'canyoning morocco',
    'hot air balloon marrakech',
    'morocco adventure sports',
    'toubkal trek',
    'todra gorge climbing',
    'sandboarding morocco',
    'horseback riding morocco',
    'white water rafting morocco',
    'zip lining morocco',
  ],
  openGraph: {
    title: 'Morocco Outdoor Activities Guide 2026 | Adventure Sports, Nature & Active Holidays',
    description:
      'From Atlas Mountain treks to Sahara sandboarding, Atlantic surfing to Dakhla kitesurfing. Complete guide to Morocco\'s best outdoor adventures with prices, seasons, and expert tips.',
    url: `${BASE_URL}/morocco-outdoor-activities`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas-mountains.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Atlas Mountains in Morocco with hikers on a trail surrounded by dramatic peaks',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Outdoor Activities Guide 2026 | Adventure & Nature',
    description:
      'Hiking, climbing, surfing, kitesurfing, mountain biking, paragliding, and more. Complete guide to outdoor adventures across Morocco with prices and seasonal tips.',
    images: [`${BASE_URL}/images/hero-atlas-mountains.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-outdoor-activities` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-outdoor-activities`,
  name: 'Morocco Outdoor Activities Guide 2026 | Adventure Sports, Nature & Active Holidays',
  description:
    'Complete guide to outdoor activities in Morocco. Hiking, rock climbing, surfing, kitesurfing, desert treks, mountain biking, paragliding, canyoning, and more.',
  url: `${BASE_URL}/morocco-outdoor-activities`,
  image: `${BASE_URL}/images/hero-atlas-mountains.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-outdoor-activities`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Outdoor Activities', item: `${BASE_URL}/morocco-outdoor-activities` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best time of year for outdoor activities in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) are ideal for most outdoor activities. Summer is best for water sports and high-altitude hiking. Winter offers surfing on the Atlantic coast and skiing in the Atlas Mountains.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for hiking in the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A licensed guide is mandatory for Toubkal National Park and strongly recommended for all multi-day treks. For day hikes in well-marked areas like Imlil Valley, experienced hikers can go independently, but a local guide enhances safety and cultural understanding. Guides cost from 500 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is rock climbing in Morocco suitable for beginners?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Todra Gorge and Tafraoute both have routes ranging from beginner (5a-5c French grade) to expert (8b+). Several outfitters in Todra Gorge offer half-day introductory courses from 400 MAD including equipment rental.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best surfing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taghazout is Morocco\'s surfing capital with consistent waves year-round. Imsouane has one of the longest right-hand point breaks in Africa. Essaouira is ideal for beginners with gentler waves. The best surfing season is September to April when Atlantic swells are strongest.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a camel trek in the Sahara cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sunset camel ride costs from 200 MAD per person. An overnight desert camp experience with camel trek, dinner, and breakfast starts from 600 MAD. Multi-day treks into the deep Sahara range from 1,500 to 4,000 MAD depending on duration and camp luxury level.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: LAND ADVENTURES
   ═══════════════════════════════════════════════════════════════ */

const landAdventures = [
  {
    name: 'Hiking & Trekking',
    icon: Mountain,
    locations: 'Atlas Mountains, Toubkal, Mgoun, Rif Mountains',
    price: 'From 500 MAD per day with guide',
    season: 'March-November (year-round at lower altitudes)',
    difficulty: 'Easy to Expert',
    description:
      'Morocco is a trekker\'s paradise. The High Atlas offers North Africa\'s highest peak, Jebel Toubkal (4,167m), summitable in two days. The Mgoun Traverse is a stunning multi-day trek through remote Berber villages. The Rif Mountains near Chefchaouen provide gentler, green-valley hikes with fewer crowds.',
    highlights: ['Toubkal summit (2-day trek)', 'Mgoun Traverse (3-6 days)', 'Imlil Valley day hikes', 'Rif Mountains from Chefchaouen', 'Ait Bougmez Valley (Happy Valley)'],
  },
  {
    name: 'Rock Climbing',
    icon: TrendingUp,
    locations: 'Todra Gorge, Tafraoute, Anti-Atlas',
    price: 'From 400 MAD half-day with guide',
    season: 'October-May (avoid summer heat)',
    difficulty: 'Beginner to Expert',
    description:
      'Todra Gorge is Morocco\'s premier climbing destination with over 300 bolted routes on 300-meter limestone walls. Routes range from French grade 5a to 8b+. Tafraoute in the Anti-Atlas offers granite bouldering and multi-pitch trad climbing amidst surreal painted rock formations. Both areas have established climbing schools.',
    highlights: ['300+ routes in Todra Gorge', 'Granite bouldering in Tafraoute', 'Multi-pitch routes up to 300m', 'Climbing schools for beginners', 'Equipment rental available on-site'],
  },
  {
    name: 'Mountain Biking',
    icon: Bike,
    locations: 'Atlas Mountains, Ouarzazate, Agafay Desert',
    price: 'From 600 MAD per day with bike rental',
    season: 'September-June',
    difficulty: 'Moderate to Expert',
    description:
      'Morocco\'s diverse terrain makes it a mountain biking hotspot. The High Atlas passes offer challenging descents with jaw-dropping views. The Agafay Desert near Marrakech provides a moonscape setting for easier rides. Multi-day routes connect kasbahs along the old caravan trails from Marrakech to the Sahara.',
    highlights: ['Atlas pass descents', 'Agafay Desert moonscape rides', 'Kasbah-to-kasbah routes', 'Dades Valley single-track', 'Guided multi-day tours'],
  },
  {
    name: 'Camel Trekking',
    icon: Compass,
    locations: 'Merzouga (Erg Chebbi), Zagora (Erg Chigaga)',
    price: 'From 200 MAD (sunset ride) / 600 MAD (overnight)',
    season: 'October-April (avoid summer heat)',
    difficulty: 'Easy',
    description:
      'No Morocco trip is complete without a camel trek into the Sahara. Erg Chebbi near Merzouga has the most accessible towering sand dunes (up to 150m). Erg Chigaga near Zagora is more remote and less touristy. Overnight treks include a desert camp with traditional dinner, Berber music, and stargazing under some of the clearest skies on Earth.',
    highlights: ['Erg Chebbi dunes (150m high)', 'Desert camp with Berber music', 'Sunrise & sunset treks', 'Multi-day deep desert expeditions', 'Erg Chigaga for solitude'],
  },
  {
    name: 'Quad & ATV Desert Riding',
    icon: Flame,
    locations: 'Agafay Desert, Merzouga, Marrakech outskirts',
    price: 'From 400 MAD per hour',
    season: 'Year-round',
    difficulty: 'Easy to Moderate',
    description:
      'Quad biking through the Agafay Desert or around the palm groves of Marrakech is one of the most popular adventure activities. The Agafay\'s rocky desert landscape, just 30 minutes from Marrakech, provides an adrenaline-pumping ride through valleys, dried riverbeds, and past Berber villages. No experience needed.',
    highlights: ['Agafay Desert 2-hour tours', 'Merzouga sand dune rides', 'No experience required', 'Sunset quad tours available', 'Combination packages with camel rides'],
  },
  {
    name: 'Horseback Riding',
    icon: Wind,
    locations: 'Essaouira beach, Atlas foothills, Oualidia',
    price: 'From 300 MAD per hour',
    season: 'Year-round',
    difficulty: 'Easy to Moderate',
    description:
      'Ride along Essaouira\'s windswept Atlantic beach at sunset, canter through the olive groves of the Atlas foothills, or explore the countryside near Oualidia lagoon. Morocco has a deep equestrian tradition, and many stables offer well-trained Barb and Arab-Barb horses. Multi-day riding holidays are available through the Atlas.',
    highlights: ['Essaouira beach sunset rides', 'Atlas foothill trails', 'Traditional Barb horses', 'Multi-day riding holidays', 'Beginners welcome at most stables'],
  },
  {
    name: 'Sandboarding',
    icon: TrendingUp,
    locations: 'Erg Chebbi (Merzouga), Erg Chigaga',
    price: 'From 150 MAD per session',
    season: 'October-April',
    difficulty: 'Easy to Moderate',
    description:
      'Ride the dunes of the Sahara on a sandboard. Erg Chebbi\'s 150-meter dunes near Merzouga offer some of the best sandboarding terrain in North Africa. Most desert camps include sandboarding as part of their overnight packages. Boards are typically provided free at camps, or can be rented from outfitters in Merzouga town.',
    highlights: ['Erg Chebbi 150m dunes', 'Often included in camp packages', 'No experience needed', 'Best at sunrise (cooler sand)', 'Combine with camel trek'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WATER & AIR ADVENTURES
   ═══════════════════════════════════════════════════════════════ */

const waterAirAdventures = [
  {
    name: 'Surfing',
    icon: Waves,
    locations: 'Taghazout, Essaouira, Imsouane, Sidi Kaouki',
    price: 'From 300 MAD per lesson / 150 MAD board rental per day',
    season: 'September-April (best swells), year-round possible',
    difficulty: 'Beginner to Expert',
    description:
      'Morocco\'s 3,500km Atlantic coastline delivers world-class surf. Taghazout is the epicenter, with consistent point breaks like Anchor Point, Killer Point, and Hash Point drawing international surfers. Imsouane boasts one of the longest right-hand point breaks in Africa. Essaouira and Sidi Kaouki are gentler, perfect for beginners.',
    highlights: ['Taghazout world-class point breaks', 'Imsouane longest right in Africa', 'Essaouira beginner-friendly waves', 'Dozens of surf camps & schools', 'Water temp 16-22 C (wetsuit needed)'],
  },
  {
    name: 'Kitesurfing & Windsurfing',
    icon: Wind,
    locations: 'Dakhla, Essaouira, Moulay Bousselham',
    price: 'From 800 MAD per lesson / 400 MAD equipment rental per day',
    season: 'April-October (strongest winds)',
    difficulty: 'Beginner to Expert',
    description:
      'Dakhla is a world-renowned kitesurfing mecca, with a massive lagoon offering flat water and consistent 20-30 knot winds almost year-round. Essaouira, nicknamed the "Wind City of Africa," delivers reliable trade winds from April to September. Both have excellent kite schools with IKO-certified instructors.',
    highlights: ['Dakhla lagoon: flat water paradise', 'Essaouira: consistent trade winds', 'IKO-certified kite schools', '20-30 knot winds reliably', 'Windsurfing also excellent at both'],
  },
  {
    name: 'Kayaking & Stand-Up Paddleboarding',
    icon: Waves,
    locations: 'Bin El Ouidane, Oualidia Lagoon, Essaouira',
    price: 'From 200 MAD per hour',
    season: 'April-October',
    difficulty: 'Easy',
    description:
      'Paddle the turquoise waters of Bin El Ouidane lake in the Atlas foothills, explore the calm Oualidia Lagoon alongside flamingos, or SUP along Essaouira\'s coastline. Sea kayaking excursions from Essaouira explore hidden coves along the Atlantic coast. Inland, several Atlas reservoirs offer peaceful paddling.',
    highlights: ['Bin El Ouidane turquoise lake', 'Oualidia Lagoon with flamingos', 'Essaouira coastal kayaking', 'SUP rentals at beach towns', 'Calm conditions for beginners'],
  },
  {
    name: 'White Water Rafting',
    icon: Waves,
    locations: 'Ourika Valley, Ahansal River, Oum Er-Rbia',
    price: 'From 500 MAD per half-day',
    season: 'March-May (spring snowmelt)',
    difficulty: 'Moderate to Expert',
    description:
      'Spring snowmelt from the Atlas Mountains feeds several raftable rivers. The Ahansal River in the Central High Atlas offers Class III-IV rapids through spectacular gorges. The Ourika Valley near Marrakech provides easier Class II-III runs, making it accessible for day trips. The season is short but thrilling.',
    highlights: ['Ahansal River Class III-IV', 'Ourika Valley day trips from Marrakech', 'Spring snowmelt season (March-May)', 'All equipment provided', 'Minimum age typically 12+'],
  },
  {
    name: 'Canyoning',
    icon: Mountain,
    locations: 'Akchour (Chefchaouen), Ourika Valley, Todra area',
    price: 'From 600 MAD per day with guide',
    season: 'April-October',
    difficulty: 'Moderate to Expert',
    description:
      'Morocco\'s gorges and canyons offer superb canyoning. The Akchour waterfalls near Chefchaouen combine rappelling, swimming, and cliff jumping through lush Rif Mountain canyons. The Todra area has drier technical canyons. Guided trips include all equipment: harnesses, helmets, ropes, and wetsuits.',
    highlights: ['Akchour waterfalls near Chefchaouen', 'Rappelling & cliff jumping', 'All equipment provided', 'Full-day guided adventures', 'Combine with rock climbing'],
  },
  {
    name: 'Paragliding',
    icon: Wind,
    locations: 'Aguergour (Marrakech), Ait Baha, Dakhla',
    price: 'From 800 MAD per tandem flight',
    season: 'Year-round (best March-November)',
    difficulty: 'Easy (tandem) / Expert (solo)',
    description:
      'Soar over the Atlas foothills on a tandem paragliding flight. The Aguergour launch site near Marrakech offers 20-40 minute flights with views of the High Atlas, the Haouz plain, and on clear days, the Sahara edge. Dakhla provides coastal soaring over the lagoon. No experience needed for tandem flights.',
    highlights: ['Tandem flights (no experience needed)', 'Atlas Mountain panoramas', 'Flights 20-40 minutes', 'GoPro video available', 'Professional certified pilots'],
  },
  {
    name: 'Hot Air Ballooning',
    icon: Sun,
    locations: 'Marrakech (Agafay/Atlas views)',
    price: 'From 1,800 MAD per person',
    season: 'Year-round (weather permitting)',
    difficulty: 'Easy',
    description:
      'Drift over the Marrakech countryside at sunrise in a hot air balloon. The one-hour flight offers 360-degree views of the snow-capped Atlas Mountains, the Agafay Desert, palm groves, and traditional Berber villages. Flights depart at dawn and include a traditional Berber breakfast upon landing.',
    highlights: ['Sunrise flights over Atlas views', 'Berber breakfast included', '1-hour flight duration', 'Small group (max 16 passengers)', 'Hotel pickup from Marrakech'],
  },
  {
    name: 'Zip-Lining',
    icon: TrendingUp,
    locations: 'Atlas Mountains (Terres d\'Amanar), Ouirgane',
    price: 'From 250 MAD per person',
    season: 'Year-round',
    difficulty: 'Easy',
    description:
      'Terres d\'Amanar adventure park in the Atlas Mountains, 30 minutes from Marrakech, offers zip-lines up to 300 meters long over pine-forested valleys. The park also features via ferrata, rope bridges, and an aerial obstacle course. A great half-day family activity easily combined with an Atlas Mountain day trip.',
    highlights: ['Zip-lines up to 300m long', '30 minutes from Marrakech', 'Family-friendly (age 6+)', 'Via ferrata & rope courses', 'Combine with Atlas day trip'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL ACTIVITY CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const seasonalCalendar = [
  {
    season: 'Spring (March-May)',
    icon: CloudSun,
    weather: '18-28 C, mild with occasional rain',
    topActivities: ['Atlas trekking (wildflowers)', 'White water rafting (snowmelt)', 'Rock climbing (ideal temps)', 'Canyoning season opens', 'Mountain biking'],
    notes: 'The best all-around season. Wildflowers carpet the Atlas valleys. Rivers run high for rafting. Temperatures are perfect for exertion.',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    weather: '30-45 C, hot and dry inland',
    topActivities: ['Surfing (smaller swells)', 'Kitesurfing Dakhla & Essaouira', 'High-altitude trekking only', 'Water activities (coast)', 'SUP & kayaking'],
    notes: 'Too hot for desert and low-altitude activities. Stick to the coast or above 2,500m elevation. Essaouira and Dakhla are windiest.',
  },
  {
    season: 'Autumn (September-November)',
    icon: CloudSun,
    weather: '20-30 C, warm and dry',
    topActivities: ['Surfing (swells return)', 'Rock climbing (cooler gorges)', 'Camel trekking (desert cools)', 'Mountain biking', 'Paragliding'],
    notes: 'Excellent all-around season. Surf swells rebuild. The desert becomes accessible again. Warm but manageable temperatures everywhere.',
  },
  {
    season: 'Winter (December-February)',
    icon: Thermometer,
    weather: '8-18 C, cool with rain in north',
    topActivities: ['Surfing (biggest swells)', 'Desert trekking (coolest)', 'Sandboarding', 'Hot air ballooning', 'Horseback riding'],
    notes: 'Best surf season with powerful Atlantic swells. Desert is pleasantly cool. High Atlas may have snow above 2,500m. Some passes close.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  { activity: 'Toubkal summit trek (2 days)', price: 'From 1,500 MAD', note: 'With licensed guide, meals, and refuge stay' },
  { activity: 'Rock climbing half-day', price: 'From 400 MAD', note: 'Guide + equipment included, Todra Gorge' },
  { activity: 'Surf lesson (2 hours)', price: 'From 300 MAD', note: 'Board, wetsuit, and instructor included' },
  { activity: 'Kitesurfing lesson (3 hours)', price: 'From 800 MAD', note: 'IKO-certified instructor, all gear included' },
  { activity: 'Camel trek (sunset ride)', price: 'From 200 MAD', note: '1.5-hour ride, Merzouga or Zagora' },
  { activity: 'Overnight desert camp', price: 'From 600 MAD', note: 'Camel trek, dinner, camp, breakfast' },
  { activity: 'Quad biking (2 hours)', price: 'From 400 MAD', note: 'Agafay Desert, no license needed' },
  { activity: 'Hot air balloon (1 hour)', price: 'From 1,800 MAD', note: 'Sunrise flight, breakfast included' },
  { activity: 'Paragliding tandem flight', price: 'From 800 MAD', note: '20-40 min flight, video available' },
  { activity: 'Mountain bike day rental', price: 'From 300 MAD', note: 'Quality hardtail MTB with helmet' },
  { activity: 'White water rafting (half-day)', price: 'From 500 MAD', note: 'All equipment, spring season only' },
  { activity: 'Zip-line adventure park', price: 'From 250 MAD', note: 'Terres d\'Amanar, half-day package' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFETY TIPS
   ═══════════════════════════════════════════════════════════════ */

const safetyTips = [
  {
    tip: 'Use Licensed Guides',
    icon: ShieldCheck,
    description:
      'Always hire a licensed guide for mountain trekking (mandatory in Toubkal National Park). Look for the official badge. Unlicensed guides lack insurance and emergency protocols.',
  },
  {
    tip: 'Check Equipment',
    icon: CheckCircle,
    description:
      'For climbing, paragliding, and canyoning, verify CE-certified equipment. Reputable outfitters show certifications upfront. Avoid heavily discounted operators with worn gear.',
  },
  {
    tip: 'Respect Altitude',
    icon: Mountain,
    description:
      'Toubkal peaks at 4,167m. Altitude sickness starts at 2,500m. Spend a night at the refuge (3,207m) to acclimatize. Descend immediately if you get severe headaches or nausea.',
  },
  {
    tip: 'Sun & Heat Protection',
    icon: Sun,
    description:
      'Use SPF 50+ sunscreen, wear a hat and UV sunglasses. Avoid strenuous activity between 11am-3pm in summer. Carry at least 3 liters of water per day in mountains or desert.',
  },
  {
    tip: 'Water Safety',
    icon: Waves,
    description:
      'Atlantic currents can be powerful. Only surf at established spots with others present. Always wear life jackets for kayaking and rafting. Check conditions with locals first.',
  },
  {
    tip: 'Travel Insurance',
    icon: Heart,
    description:
      'Standard policies often exclude adventure sports. Get specialized coverage (from 300 MAD per week) that includes climbing, paragliding, and helicopter evacuation.',
  },
  {
    tip: 'Weather Awareness',
    icon: AlertTriangle,
    description:
      'Flash floods in gorges are a real risk during autumn and spring rains. Never camp in dry riverbeds (oueds). Check forecasts daily and listen to your guide.',
  },
  {
    tip: 'Book Reputable Operators',
    icon: Star,
    description:
      'Check reviews before booking. Ask for certifications: UIAGM for mountain guides, IKO for kite instructors, USHPA for paragliding. Expect a safety briefing before any activity.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoOutdoorActivitiesPage() {
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
            backgroundImage: 'url(/images/hero-atlas-mountains.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Outdoor Activities</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Adventure &amp; Nature
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Outdoor Activities:
            <br className="hidden md:block" /> Adventure Sports &amp; Nature
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From summiting North Africa&apos;s highest peak to surfing world-class Atlantic
            breaks, kitesurfing Saharan lagoons to climbing 300-meter gorge walls. Your
            complete guide to adventure in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is an Outdoor Adventure Powerhouse
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Few countries pack as much geographic diversity into a single destination as Morocco. Within a single day, you can trek snow-dusted Atlas peaks, ride camels across Saharan dunes, and surf Atlantic rollers. This extraordinary range of landscapes, combined with year-round sunshine, affordable prices, and a growing network of professional outfitters, makes Morocco one of the world&apos;s most compelling outdoor adventure destinations.
              </p>
              <p>
                The Atlas Mountains stretch over 2,500 kilometers, offering everything from gentle valley walks to technical alpine ascents. The 3,500-kilometer Atlantic coastline delivers world-class surf and wind conditions. The Sahara provides the ultimate desert experience, while the gorges and canyons of the east offer rock climbing and canyoning that rival Europe.
              </p>
              <p>
                Whether you are a hardcore adventure athlete chasing big walls and big waves, or a family looking for a gentle camel ride and a zip-line through pine forests, Morocco has an outdoor experience perfectly suited to your appetite for adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Price Quick Reference ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Outdoor Activity Price Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to expect to pay for the most popular outdoor activities across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when activity prices may increase by 15-30%.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Activity</div>
                <div className="p-3 px-4">Price</div>
                <div className="p-3 px-4">Details</div>
              </div>
              {priceGuide.map((item, i) => (
                <div
                  key={item.activity}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.activity}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.price}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Land Adventures ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Land Adventures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From Atlas peaks to Saharan sands, Morocco&apos;s land-based adventures span mountains, gorges, deserts, and valleys.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {landAdventures.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-1">
                        <MapPin className="w-3 h-3" />
                        {activity.locations}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {activity.price}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {activity.season}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--surface-muted)] text-[var(--text-muted)]">
                      {activity.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{activity.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activity.highlights.map((highlight, i) => (
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

      {/* ── Water & Air Adventures ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Waves className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water &amp; Air Adventures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Atlantic surf breaks, Saharan lagoons, mountain rivers, and thermal updrafts over the Atlas. Morocco&apos;s water and air sports are world-class.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {waterAirAdventures.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] mt-1">
                        <MapPin className="w-3 h-3" />
                        {activity.locations}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {activity.price}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                      {activity.season}
                    </span>
                    <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--surface-muted)] text-[var(--text-muted)]">
                      {activity.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{activity.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activity.highlights.map((highlight, i) => (
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

      {/* ── Seasonal Activity Calendar ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Seasonal Activity Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Plan your adventure trip around the best seasons for each activity. Morocco offers outdoor pursuits year-round, but timing matters.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasonalCalendar.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                        <Thermometer className="w-3 h-3" />
                        {season.weather}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    {season.topActivities.map((activity, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0 text-[var(--color-accent)]" />
                        {activity}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Info className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {season.notes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Adventure Safety Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s outdoor adventures are safe when approached responsibly. Follow these guidelines for a secure experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Destinations for Outdoor Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Outdoor Destinations at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region of Morocco specializes in different adventures. Here is where to go for what.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Mountain className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                High Atlas Mountains
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Home to Jebel Toubkal, the Mgoun massif, and countless trekking routes. Also the hub for mountain biking, paragliding, and zip-lining at Terres d&apos;Amanar.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Trekking</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Mountain Biking</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Paragliding</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Zip-lining</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Waves className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Atlantic Coast (Taghazout, Essaouira, Imsouane)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s surf corridor from Safi to Agadir. Taghazout has world-class point breaks, Essaouira adds kitesurfing with legendary winds, and Imsouane offers a mellow longboard vibe.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Surfing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Kitesurfing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Windsurfing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">SUP</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Sahara Desert (Merzouga &amp; Zagora)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Bucket-list desert adventures. Erg Chebbi has photogenic 150m dunes for camel treks, sandboarding, and quad biking. Erg Chigaga offers remote wilderness camping under clear skies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Camel Trekking</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Sandboarding</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Quad Biking</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <TrendingUp className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Todra &amp; Dades Gorges
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Todra Gorge is Morocco&apos;s rock climbing capital with 300+ bolted routes. Dades Gorge offers mountain biking along the road of a thousand kasbahs. Both gorges have excellent canyoning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Rock Climbing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Mountain Biking</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Canyoning</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wind className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Dakhla
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                A global kitesurfing mecca. The vast Dakhla lagoon offers flat, warm water with consistent 20-30 knot winds almost year-round. Growing eco-lodges and kite camps serve adventure travelers.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Kitesurfing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">Windsurfing</span>
                <span className="text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">SUP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Adventure Travelers
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Best Overall Months
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                March-May and September-November offer the widest range of activities. Moderate temperatures, accessible desert, building surf, and snow-free mountains below 3,000m.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Budget Tips
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book directly with local operators (hotel concierges add 30-50% markup). Group tours are cheaper per person. Bring your own gear if you are a serious climber or surfer. Negotiate for multi-day packages.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Family-Friendly Activities
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Camel rides (age 4+), zip-lining at Terres d&apos;Amanar (age 6+), easy surf lessons in Essaouira, hot air ballooning, horseback riding, and gentle Atlas Valley hikes from Imlil. Quad biking typically age 16+.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Compass className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                What to Pack
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Layers for mountain temperature swings, SPF 50+ sunscreen, headlamp for desert camps, sturdy hiking boots, water shoes for canyoning, and a dry bag for water sports. Most specialist equipment is available for rental.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <ShieldCheck className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Fitness Requirements
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Day hikes and camel rides need no special fitness. Toubkal requires decent cardio. Multi-day treks demand stamina. Climbing benefits from upper body strength but beginners can start easy. Surfing and kitesurfing are physically demanding.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Star className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Booking Advice
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Book popular activities at least a week ahead during peak season. Surf camps fill months ahead in winter. Local operators often use WhatsApp for quick booking. Confirm prices and inclusions in writing.
              </p>
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
                What is the best time of year for outdoor activities in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spring (March-May) and autumn (September-November) are ideal for most activities. Summer is best for water sports and high-altitude hiking. Winter offers the best surfing with powerful Atlantic swells and the desert at its most pleasant. The shoulder seasons give you the widest range of options.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a guide for hiking in the Atlas Mountains?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A licensed guide is mandatory for Toubkal National Park and strongly recommended for all multi-day treks. For day hikes in well-marked areas like Imlil Valley, experienced hikers can go independently, but a local guide enhances safety and cultural understanding. Guides cost from 500 MAD per day.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is rock climbing in Morocco suitable for beginners?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Todra Gorge and Tafraoute have routes from beginner (5a-5c French grade) to expert (8b+). Several outfitters offer half-day introductory courses from 400 MAD including all equipment. The gorge&apos;s limestone is excellent quality with well-maintained bolted routes.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Where is the best surfing in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Taghazout is the surfing capital with consistent waves and famous breaks like Anchor Point and Killer Point. Imsouane has one of the longest right-hand point breaks in Africa. Essaouira is ideal for beginners. The best season is September to April when Atlantic swells are strongest.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a camel trek in the Sahara cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A sunset camel ride costs from 200 MAD per person. Overnight desert camp with camel trek, dinner, Berber music, and breakfast starts from 600 MAD. Multi-day treks range from 1,500 to 4,000 MAD depending on duration and camp luxury level. Seasonal pricing applies during peak season (October-April).
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I do outdoor activities during Ramadan?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, most outdoor activities continue during Ramadan, especially those run by tourism-focused operators. Some local guides may be fasting, which can affect energy for strenuous activities. Be respectful by not eating or drinking openly in front of fasting locals during daylight hours.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What adventure activities can I do near Marrakech as a day trip?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech is an excellent base. Within 30-60 minutes: Agafay Desert for quad biking, Terres d&apos;Amanar for zip-lining, Aguergour for paragliding, Imlil for Atlas day hikes, and the Ourika Valley for canyoning or rafting in spring. Hot air balloons depart from the outskirts at sunrise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Adventure Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete trekking guide to the High Atlas, including Toubkal, Mgoun, and hidden Berber valleys.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-surfing-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Surfing Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Every surf break from Taghazout to Imsouane. Surf camps, board rentals, and seasonal swell forecasts.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-sahara-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Sahara Desert Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Erg Chebbi, Erg Chigaga, desert camps, camel treks, and stargazing in the world&apos;s greatest desert.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-adventure-sports" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Flame className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Adventure Sports Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Extreme sports in Morocco: paragliding, canyoning, rock climbing, and adrenaline-pumping activities.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Ready for Your Morocco Adventure?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Morocco offers one of the most diverse outdoor adventure landscapes on the planet.
            Whether you dream of summiting Toubkal, riding perfect waves at Taghazout, soaring
            over the Atlas, or trekking the Sahara by camel, your adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-medium"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas
            </Link>
            <Link
              href="/morocco-surfing-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Waves className="w-5 h-5" />
              Discover Surfing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

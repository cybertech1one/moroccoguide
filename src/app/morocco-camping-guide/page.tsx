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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Sun,
  Moon,
  Compass,
  Camera,
  Tent,
  Calendar,
  Thermometer,
  Backpack,
  Car,
  Sparkles,
  Sunrise,
  Droplets,
  Wind,
  Globe,
  Heart,
  Flame,
  CloudRain,
  Eye,
} from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Camping in Morocco 2026 | Wild Camping, Glamping & Desert Camps Guide',
  description:
    'Complete guide to camping in Morocco. Wild camping rules, organized campsites, luxury glamping, and Sahara desert camps. Best spots in the Atlas Mountains, Sahara, coast, Todra & Dades Gorges. Gear lists, safety tips, and prices from 50 MAD per night.',
  keywords: [
    'camping in Morocco',
    'Morocco glamping',
    'wild camping Morocco',
    'Morocco camping guide',
    'desert camping Morocco',
    'Sahara desert camp',
    'Atlas Mountains camping',
    'Morocco campsites',
    'luxury glamping Morocco',
    'Morocco camping spots',
    'beach camping Morocco',
    'Todra Gorge camping',
    'Dades Valley camping',
    'Morocco camping gear',
    'camping Morocco safety',
    'Morocco camping prices',
    'Morocco bivouac',
    'Morocco overlanding',
    'Morocco camping 2026',
    'best camping Morocco',
  ],
  openGraph: {
    title: 'Camping in Morocco 2026 | Wild Camping, Glamping & Desert Camps Guide',
    description:
      'Plan your Morocco camping adventure. Wild camping, organized sites, luxury glamping, and Sahara desert camps. Best spots, gear lists, safety tips, and prices from 50 MAD.',
    url: `${BASE_URL}/morocco-camping-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-camping.webp`,
        width: 1200,
        height: 630,
        alt: 'Camping tent set up in the Moroccan landscape with mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camping in Morocco 2026 | Wild Camping, Glamping & Desert Camps',
    description:
      'Everything you need for camping in Morocco: wild camping, glamping, desert camps, best spots, gear, safety, and prices from 50 MAD per night.',
    images: [`${BASE_URL}/images/hero-camping.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-camping-guide` },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-camping-guide`,
  name: 'Camping in Morocco 2026 | Wild Camping, Glamping & Desert Camps Guide',
  description:
    'The complete guide to camping in Morocco. Covers wild camping, organized campsites, luxury glamping, Sahara desert camps, best camping spots, gear, safety, seasons, and prices.',
  url: `${BASE_URL}/morocco-camping-guide`,
  image: `${BASE_URL}/images/hero-camping.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-camping-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Atlas Mountains' },
    { '@type': 'Place', name: 'Sahara Desert' },
    { '@type': 'Place', name: 'Todra Gorge' },
    { '@type': 'Place', name: 'Dades Valley' },
    { '@type': 'Place', name: 'Morocco' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Camping in Morocco', item: `${BASE_URL}/morocco-camping-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is wild camping legal in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wild camping is technically not regulated by a specific law in Morocco and is widely tolerated in rural, desert, and mountain areas. Avoid pitching tents near military zones, private farmland without permission, or in national parks without a permit. Always ask locals for permission when camping near villages.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does camping in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wild camping is free. Organized campsites cost from 50 to 150 MAD per person per night for a tent pitch with basic facilities. Mid-range camps with hot showers and electricity run from 150 to 400 MAD. Luxury glamping experiences in the Sahara start from 2,000 MAD per person per night and can exceed 15,000 MAD for ultra-luxury desert camps.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for camping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) are ideal for camping across Morocco. Summer is good for Atlas Mountain and coastal camping but too hot for desert camping. Winter is mild along the coast but cold in the mountains and desert at night, sometimes dropping below freezing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a 4x4 to go camping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. Many organized campsites and coastal spots are accessible by standard car. However, for remote desert camping at Erg Chebbi or Erg Chigaga, Atlas Mountain bivouac sites, and off-road adventures, a 4x4 or high-clearance vehicle is highly recommended. Some Sahara camps provide 4x4 transfers from the nearest town.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gear do I need for camping in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential gear includes a 3-season tent (windproof for desert), sleeping bag rated to 0 degrees Celsius for mountain and winter camping, sleeping pad, headlamp, water purification method, sun protection (SPF 50+, hat, sunglasses), warm layers for cold nights, and a portable stove if cooking. Glamping requires none of this as everything is provided.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is camping in Morocco safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally very safe for camping. Rural communities are welcoming and theft is rare in remote areas. Take standard precautions: camp in visible areas, secure valuables, avoid isolated urban fringes, and let someone know your plans. In the desert, always carry extra water and never camp in dry riverbeds (oueds) due to flash flood risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I camp on the beach in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beach camping is common along the Atlantic coast, especially south of Agadir near Taghazout, Imsouane, Legzira, and around Dakhla. Some beaches have organized campgrounds with facilities. Wild beach camping is tolerated in quieter spots but avoid areas with security patrols near major tourist beaches or ports.',
      },
    },
  ],
};

/* ===================================================================
   DATA: TYPES OF CAMPING
   =================================================================== */

const campingTypes = [
  {
    title: 'Wild Camping (Bivouac)',
    icon: Tent,
    image: '/images/hero-sahara-camp.webp',
    price: 'Free',
    description:
      'Wild camping, or bivouacking, is widely tolerated across Morocco in rural, desert, and mountain areas. Pitch your tent on open land, under the stars in the Sahara, or at high altitude in the Atlas Mountains. There is no specific law prohibiting it, though you should avoid private farmland, military zones, and national parks without a permit.',
    highlights: [
      'Completely free with total location freedom',
      'Widely tolerated in desert, mountain, and rural areas',
      'Best experienced with overlanding or road-trip setups',
      'Ask local permission when near villages for safety and goodwill',
    ],
    bestFor: 'Experienced campers, overlanders, road-trippers, and budget travelers',
  },
  {
    title: 'Organized Campsites',
    icon: MapPin,
    image: '/images/hero-atlas-village.webp',
    price: 'From 50 MAD per person per night',
    description:
      'Morocco has a growing network of organized campgrounds, from basic plots with a water tap and shared toilet to well-equipped sites with hot showers, electricity, Wi-Fi, swimming pools, and on-site restaurants. Found near popular tourist areas including Chefchaouen, Todra Gorge, Dades Valley, the coast, and around Marrakech.',
    highlights: [
      'Secure sites with fencing and sometimes a guardian',
      'Facilities range from basic to resort-level amenities',
      'Many accept campervans, roof-top tents, and standard tents',
      'Social atmosphere: meet fellow travelers from around the world',
    ],
    bestFor: 'Families, first-time campers, vanlifers, and travelers wanting a reliable base',
  },
  {
    title: 'Luxury Glamping',
    icon: Sparkles,
    image: '/images/hero-desert-glamping.webp',
    price: 'From 2,000 MAD per person per night',
    description:
      'Morocco is one of the world&apos;s top glamping destinations. Stay in lavish tented suites with king-size beds, en-suite bathrooms, hot showers, sometimes private plunge pools, and gourmet Moroccan dining under the stars. The Sahara Desert is the most iconic setting, but luxury eco-camps also exist in the Atlas Mountains and along the coast.',
    highlights: [
      'Hotel-quality comfort in stunning natural settings',
      'Private tented suites with real beds and en-suite bathrooms',
      'Gourmet multi-course Moroccan dinners and wine',
      'Curated experiences: private camel treks, stargazing, spa treatments',
    ],
    bestFor: 'Honeymooners, couples, luxury travelers, and those who want nature without roughing it',
  },
  {
    title: 'Sahara Desert Camps',
    icon: Moon,
    image: '/images/hero-sahara-night.webp',
    price: 'From 300 MAD per person per night',
    description:
      'Desert camps are the backbone of Morocco&apos;s Sahara tourism. Ranging from simple Berber-style bivouacs with mattresses on the sand to mid-range camps with private tents and shared bathrooms, these camps sit among the towering dunes of Erg Chebbi or Erg Chigaga. Most are reached by camel trek or 4x4 from the edge of the dunes.',
    highlights: [
      'Authentic Berber hospitality with traditional meals and music',
      'Camel trek to and from camp through golden dunes',
      'Unforgettable Sahara sunrises and sunsets',
      'Some of the best stargazing on the planet with zero light pollution',
    ],
    bestFor: 'First-time desert visitors, groups, solo travelers, and anyone on a moderate budget',
  },
];

/* ===================================================================
   DATA: BEST CAMPING SPOTS
   =================================================================== */

const campingSpots = [
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    altitude: '1,500 - 4,000 m',
    bestSeason: 'April to October',
    description:
      'The High Atlas offers some of Morocco&apos;s most spectacular camping. Pitch your tent in alpine meadows surrounded by snow-capped peaks, beside rushing mountain streams, or at the foot of North Africa&apos;s tallest peak, Jebel Toubkal (4,167 m). Organized mountain refuges provide basic shelter, while wild camping spots abound for experienced trekkers.',
    topSites: [
      { name: 'Imlil Valley', detail: 'Base camp for Toubkal treks, organized campsites and guesthouses, from 80 MAD per night' },
      { name: 'Azzaden Valley', detail: 'Remote and beautiful, less visited than Imlil, wild camping welcomed by local Berbers' },
      { name: 'Lac d&apos;Ifni', detail: 'Morocco&apos;s only natural lake at 2,312 m, spectacular wild camping by the water' },
      { name: 'Ouirgane Valley', detail: 'Gentle terrain with olive groves, eco-lodges and camping, from 60 MAD per night' },
    ],
    tips: 'Nights are cold above 2,000 m even in summer. Bring a sleeping bag rated to 0 degrees Celsius. Altitude sickness is possible above 3,000 m: acclimatize gradually.',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    image: '/images/hero-sahara-sunrise.webp',
    altitude: '400 - 800 m',
    bestSeason: 'October to April',
    description:
      'Camping in the Sahara is the quintessential Moroccan experience. Erg Chebbi near Merzouga and Erg Chigaga near M&apos;Hamid offer hundreds of desert camps from budget bivouacs to ultra-luxury glamping. Fall asleep to silence, wake to sunrise over golden dunes, and experience a sky so full of stars it feels unreal.',
    topSites: [
      { name: 'Erg Chebbi (Merzouga)', detail: 'Most popular dune field, dozens of camps at all price levels, dunes up to 150 m' },
      { name: 'Erg Chigaga (M&apos;Hamid)', detail: 'Remote and wild, requires 4x4 access, fewer tourists, dunes up to 300 m' },
      { name: 'Zagora area', detail: 'Gateway to the Draa Valley desert, smaller dunes, traditional Berber camps' },
      { name: 'Tinfou Dunes', detail: 'A single photogenic dune near Zagora, easy access, good for quick overnight camps' },
    ],
    tips: 'Desert temperatures swing wildly: 40+ degrees by day and near freezing at night in winter. Always carry at least 3 liters of water per person per day. Never camp in dry riverbeds.',
  },
  {
    region: 'Atlantic Coast',
    icon: Wind,
    image: '/images/hero-coastal.webp',
    altitude: '0 - 50 m',
    bestSeason: 'Year-round (best May to October)',
    description:
      'Morocco&apos;s Atlantic coastline stretches over 2,000 km with countless wild beach camping spots and organized campgrounds. The coast south of Agadir is a paradise for surfers, vanlifers, and beach campers. Strong ocean breezes keep temperatures comfortable even in summer. Seafood is cheap and fresh from local fishermen.',
    topSites: [
      { name: 'Taghazout area', detail: 'Surf capital of Morocco, multiple campgrounds with ocean views, from 70 MAD per night' },
      { name: 'Imsouane', detail: 'Laid-back fishing village with a legendary wave, cliffside camping spots' },
      { name: 'Legzira Beach', detail: 'Dramatic red rock arches, wild camping tolerated on quieter stretches' },
      { name: 'Dakhla', detail: 'Kitesurfing paradise in the south, organized camps and wild spots on the lagoon' },
    ],
    tips: 'Coastal winds can be fierce: stake your tent well and use a windbreak. Ocean fog can make mornings damp. Secure food from stray animals.',
  },
  {
    region: 'Todra & Dades Gorges',
    icon: Eye,
    image: '/images/hero-todra-gorge.webp',
    altitude: '1,400 - 2,000 m',
    bestSeason: 'March to November',
    description:
      'The dramatic canyon walls of Todra Gorge (300 m high, just 10 m wide at the narrows) and the winding road through Dades Valley offer spectacular camping. Several organized campgrounds sit along both gorges with stunning views. Rock climbers flock to Todra for its world-class vertical walls.',
    topSites: [
      { name: 'Todra Gorge campgrounds', detail: 'Multiple sites within the canyon, shaded by palms, from 50 MAD per tent pitch' },
      { name: 'Upper Dades Valley', detail: 'Wild camping along the road of hairpin bends with jaw-dropping canyon views' },
      { name: 'Ait Ouglif', detail: 'Quiet village base near Todra with basic camping and Berber guesthouse options' },
      { name: 'Monkey Fingers (Dades)', detail: 'Unique rock formations, several organized campsites with pool access, from 80 MAD' },
    ],
    tips: 'Flash flooding is a real risk in gorges after rain. Never camp on the gorge floor during rainy season. Water levels can rise meters within minutes.',
  },
];

/* ===================================================================
   DATA: GEAR & PACKING
   =================================================================== */

const gearList = [
  {
    category: 'Shelter & Sleep',
    icon: Tent,
    items: [
      { item: '3-season tent (windproof)', why: 'Essential for desert and mountain camping where wind can be fierce' },
      { item: 'Sleeping bag (0 to 5 degrees rated)', why: 'Mountain and desert nights can drop near freezing even in shoulder season' },
      { item: 'Sleeping pad or inflatable mat', why: 'Insulation from cold ground is as important as your sleeping bag' },
      { item: 'Tent footprint or ground sheet', why: 'Protects tent floor from rocks and thorns common in Moroccan terrain' },
    ],
  },
  {
    category: 'Clothing & Protection',
    icon: ShieldCheck,
    items: [
      { item: 'Headscarf or cheche turban', why: 'Multi-purpose: sun protection, sand shield, and culturally appropriate head cover' },
      { item: 'Warm fleece and down jacket', why: 'Temperatures plummet at night in desert and mountain, even in spring and autumn' },
      { item: 'Lightweight long trousers and shirts', why: 'Sun and insect protection during the day, culturally respectful in rural areas' },
      { item: 'Sturdy hiking boots and camp sandals', why: 'Boots for rocky terrain, sandals for camp and sand dunes' },
    ],
  },
  {
    category: 'Sun, Water & Health',
    icon: Sun,
    items: [
      { item: 'Sunscreen SPF 50+ and lip balm', why: 'Moroccan sun is intense year-round, especially at altitude and in the desert' },
      { item: 'Water purification (filter or tablets)', why: 'Tap water is not always safe for drinking, river water needs treatment' },
      { item: 'Refillable water bottles (3L+ capacity)', why: 'Carry at least 3 liters per person per day in hot and desert conditions' },
      { item: 'First aid kit with personal medications', why: 'Nearest pharmacy can be hours away in remote camping areas' },
    ],
  },
  {
    category: 'Cooking & Gear',
    icon: Flame,
    items: [
      { item: 'Portable camping stove and fuel', why: 'Open fires are restricted in some areas; a stove is more reliable and eco-friendly' },
      { item: 'Headlamp with spare batteries', why: 'Essential for camp at night, finding your way to facilities, and early morning starts' },
      { item: 'Portable power bank (10,000+ mAh)', why: 'Phone reception exists in most areas but charging options are limited off-grid' },
      { item: 'Ziplock bags and dry bags', why: 'Protect electronics from sand, dust, and unexpected rain' },
    ],
  },
];

/* ===================================================================
   DATA: SAFETY TIPS
   =================================================================== */

const safetyTips = [
  {
    title: 'Water Supply',
    icon: Droplets,
    description: 'Carry at least 3 liters per person per day. In the desert, increase to 5 liters. Water sources in mountains may look clean but should be purified. Never rely on finding water in the Sahara.',
  },
  {
    title: 'Flash Floods',
    icon: CloudRain,
    description: 'Never camp in dry riverbeds (oueds). Flash floods can arrive with zero warning after rain many kilometers upstream. The Todra and Dades Gorges are particularly at risk during autumn and spring rains.',
  },
  {
    title: 'Wildlife & Insects',
    icon: Eye,
    description: 'Shake out shoes and clothes before wearing them: scorpions shelter in dark places. Snakes are rare but exist in desert and rocky areas. Use a sealed tent and check around your camp at dusk.',
  },
  {
    title: 'Temperature Extremes',
    icon: Thermometer,
    description: 'Desert temperatures can swing from 45 degrees by day to near 0 at night. Mountain camping above 2,500 m can drop below freezing year-round. Always pack warm layers regardless of daytime heat.',
  },
  {
    title: 'Navigation & Communication',
    icon: Compass,
    description: 'Download offline maps before heading to remote areas. Phone signal exists along major roads but disappears in deep gorges and desert. Tell someone your planned route and expected return time.',
  },
  {
    title: 'Local Respect & Permissions',
    icon: Heart,
    description: 'Ask permission before camping near villages. Respect local customs: dress modestly, avoid camping too close to homes, and never leave trash behind. Moroccan rural communities are famously hospitable when approached respectfully.',
  },
];

/* ===================================================================
   DATA: BEST SEASON
   =================================================================== */

const seasonGuide = [
  {
    season: 'Spring (Mar-May)',
    icon: Sun,
    tempRange: '15-30 C (varies by region)',
    rating: 'Excellent',
    description:
      'The best overall season for camping in Morocco. Warm days, cool nights, wildflowers in the Atlas, and comfortable desert temperatures. The Valley of Roses blooms in April. Ideal for all types of camping across every region.',
    recommendation: 'Book Atlas treks and desert camps early. Spring is peak season for outdoor activities.',
  },
  {
    season: 'Summer (Jun-Aug)',
    icon: Thermometer,
    tempRange: '20-45+ C (coast cooler)',
    rating: 'Good for Coast & Mountains',
    description:
      'Too hot for desert camping (45+ degrees). Excellent for Atlantic coast camping with ocean breezes and Atlas Mountain camping above 2,000 m where temperatures stay pleasant. The coast is busy with domestic tourists in July-August.',
    recommendation: 'Stick to coastal and mountain camping. Avoid the Sahara entirely from June to September.',
  },
  {
    season: 'Autumn (Sep-Nov)',
    icon: Wind,
    tempRange: '15-32 C (varies by region)',
    rating: 'Excellent',
    description:
      'Rivals spring as the best camping season. Summer heat fades, the desert becomes comfortable again, and the coast empties after summer crowds. October and November are superb for Sahara desert camps with warm days and cool nights.',
    recommendation: 'Prime time for desert camping. Book Sahara camps in advance as October-November is peak desert season.',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Moon,
    tempRange: '5-20 C (coast milder)',
    rating: 'Good for Coast & Desert',
    description:
      'Mild along the coast and pleasant in the desert during the day. Mountain camping is cold and snow blocks high passes. Desert nights can drop near freezing. The south coast near Dakhla stays warm year-round.',
    recommendation: 'Focus on coastal camping or daytime desert trips. Pack serious cold-weather gear for mountain or desert nights.',
  },
];

/* ===================================================================
   DATA: LUXURY DESERT CAMPS
   =================================================================== */

const luxuryCamps = [
  {
    name: 'Premium Glamping at Erg Chebbi',
    location: 'Merzouga, Sahara Desert',
    priceFrom: 'From 3,000 MAD per person per night',
    features: [
      'Private tented suites with king-size beds and Berber rugs',
      'En-suite bathrooms with hot showers and flushing toilets',
      'Multi-course Moroccan dinner under the stars with live music',
      'Private camel trek at sunset and sunrise',
      'Telescope-guided stargazing sessions',
    ],
  },
  {
    name: 'Ultra-Luxury Desert Retreat',
    location: 'Erg Chigaga, remote Sahara',
    priceFrom: 'From 8,000 MAD per person per night',
    features: [
      'Private luxury tented villas with sitting areas and private terraces',
      'En-suite marble bathrooms with heated water and luxury amenities',
      'Gourmet dining with Moroccan wine pairings and private chef',
      'Private 4x4 desert excursions and exclusive dune access',
      'On-site spa with argan oil massage treatments among the dunes',
    ],
  },
  {
    name: 'Atlas Mountain Eco-Lodge Glamping',
    location: 'High Atlas, near Imlil',
    priceFrom: 'From 2,000 MAD per person per night',
    features: [
      'Luxury safari tents on raised wooden platforms with mountain views',
      'Farm-to-table organic Berber cuisine with local ingredients',
      'Guided mountain treks with experienced Berber guides',
      'Yoga and wellness sessions with Atlas panoramas',
      'Heated tents with wood-burning stoves for cold mountain nights',
    ],
  },
];

/* ===================================================================
   DATA: FAQs
   =================================================================== */

const faqs = [
  {
    question: 'Is wild camping legal in Morocco?',
    answer:
      'Wild camping is not specifically regulated by Moroccan law and is widely tolerated in rural, desert, and mountain areas. Avoid private farmland without asking, military zones, and national parks without a permit. Always ask local permission when near villages. In practice, thousands of campers and overlanders wild camp across Morocco every year without issues.',
  },
  {
    question: 'How much does camping in Morocco cost?',
    answer:
      'Wild camping is free. Organized campsites cost from 50 to 150 MAD per person per night for a basic tent pitch. Mid-range camps with hot showers and electricity run from 150 to 400 MAD. Standard Sahara desert camps start from 300 MAD per person including dinner and breakfast. Luxury glamping ranges from 2,000 to 15,000 MAD per person per night depending on the camp level.',
  },
  {
    question: 'What is the best time of year for camping in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) are ideal across all regions. Summer works for coast and mountain camping but is too hot for the desert. Winter is mild on the coast but cold in mountains and desert at night. October-November is the sweet spot for Sahara camping with warm days and cool, clear nights.',
  },
  {
    question: 'Do I need a 4x4 to go camping in Morocco?',
    answer:
      'Not for all camping. Coastal campgrounds and many organized sites are reachable by standard car. However, a 4x4 or high-clearance vehicle is recommended for remote Atlas camping, desert camps at Erg Chebbi and essential for Erg Chigaga, and off-road exploration. Many Sahara camps offer 4x4 transfers from the nearest town if you do not have your own vehicle.',
  },
  {
    question: 'Is camping in Morocco safe?',
    answer:
      'Very safe overall. Morocco is one of the safest countries in North Africa. Rural communities are welcoming and hospitable. Standard precautions apply: camp in visible areas, secure valuables, avoid isolated urban fringes, never camp in dry riverbeds due to flash flood risk, and carry sufficient water. Scorpions exist so always shake out shoes and clothes.',
  },
  {
    question: 'Can I camp on the beach in Morocco?',
    answer:
      'Beach camping is common along the Atlantic coast. Popular spots include Taghazout, Imsouane, Legzira, and Dakhla. Some beaches have organized campgrounds with basic facilities. Wild beach camping is tolerated in quieter, rural stretches but avoid areas near ports, major tourist beaches with security patrols, or anywhere signs prohibit it.',
  },
  {
    question: 'What gear do I need for camping in Morocco?',
    answer:
      'Essential gear includes a windproof 3-season tent, sleeping bag rated to 0 degrees Celsius for mountains and winter, sleeping pad, headlamp, water purification, sunscreen SPF 50+, warm layers for cold nights, and a portable stove if self-catering. For glamping and organized desert camps, everything is provided and you only need personal items and warm clothes for the night.',
  },
];

/* ===================================================================
   DATA: RELATED GUIDES
   =================================================================== */

const relatedGuides = [
  {
    href: '/camping',
    icon: Tent,
    title: 'Camping Destinations in Morocco',
    description: 'Explore all of Morocco&apos;s best camping destinations from coast to desert with regional guides and campsite listings.',
  },
  {
    href: '/sahara',
    icon: Sun,
    title: 'Complete Sahara Guide',
    description: 'Everything about the Moroccan Sahara: geography, culture, Berber traditions, and how to experience this vast desert.',
  },
  {
    href: '/desert-adventures',
    icon: Compass,
    title: 'Desert Adventures in Morocco',
    description: 'Quad biking, sandboarding, 4x4 safaris, camel trekking, and adrenaline activities in the Sahara Desert.',
  },
  {
    href: '/morocco-road-trip-routes',
    icon: Car,
    title: 'Morocco Road Trip Routes',
    description: 'Self-drive itineraries across Morocco including the classic desert loop, coastal routes, and Atlas Mountain circuits.',
  },
  {
    href: '/stargazing',
    icon: Moon,
    title: 'Stargazing in Morocco',
    description: 'The best dark-sky locations in Morocco for stargazing, from the Sahara Desert to remote Atlas Mountain passes.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoCampingGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-camping.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Camping in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Tent className="w-4 h-4" />
            Camping, Glamping &amp; Desert Camps
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Camping in Morocco:
            <br className="hidden md:block" /> The Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From wild bivouacs under Sahara stars to luxury glamping with king-size beds among the dunes.
            Every type of camping, the best spots, gear lists, safety tips, and prices from 50 MAD per night.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Camp in Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most diverse and rewarding camping destinations on earth. Within a single
                trip you can pitch your tent on a wild Atlantic beach, beside a roaring mountain stream in the
                High Atlas, inside a dramatic canyon at Todra Gorge, and under a sky of infinite stars in the
                Sahara Desert. The landscape changes every hour as you drive south from the green hills of the
                north to the golden dunes of the deep south.
              </p>
              <p>
                Camping culture runs deep in Morocco. Berber nomads have camped across these mountains and
                deserts for millennia. Today, a modern camping scene thrives alongside traditional bivouacs:
                organized campgrounds with hot showers and pools, world-class luxury glamping camps in the
                Sahara rivaling five-star hotels, and thousands of wild camping spots where you will not see
                another soul. Whether your budget is 50 MAD or 15,000 MAD per night, Morocco has your perfect
                camping experience waiting.
              </p>
              <p>
                This guide covers every aspect of camping in Morocco: the four main types of camping, the best
                spots across five regions, what gear to bring, essential safety advice, the best time of year to
                go, a look at luxury desert camps, and answers to every common question.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Stats -- */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">4 Types</div>
              <div className="text-sm text-[var(--text-muted)]">Wild, organized, glamping, desert</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">50 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Campsite starting price</div>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">5 Regions</div>
              <div className="text-sm text-[var(--text-muted)]">Atlas, Sahara, coast, gorges</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Year-Round</div>
              <div className="text-sm text-[var(--text-muted)]">Something in season every month</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Types of Camping -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Camping in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers four distinct camping experiences. Choose based on your comfort level, budget, and sense of adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {campingTypes.map((type) => {
              const TypeIcon = type.icon;
              return (
                <div key={type.title} className="card-moroccan overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={type.image}
                      alt={`${type.title} in Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <TypeIcon className="w-5 h-5" />
                        {type.title}
                      </h3>
                      <div className="text-sm text-white/80 font-medium mt-1">
                        <DollarSign className="w-3.5 h-3.5 inline" /> {type.price}
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{type.description}</p>
                    <div className="space-y-2 mb-4">
                      {type.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-xs text-[var(--text-muted)]">
                      <Users className="w-3.5 h-3.5 inline text-[var(--color-accent)] mr-1" />
                      <strong>Best for:</strong> {type.bestFor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Camping Spots -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Camping Spots in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From snow-capped peaks to golden dunes and windswept beaches, these are the top regions for camping in Morocco.
          </p>

          <div className="space-y-10">
            {campingSpots.map((spot) => {
              const SpotIcon = spot.icon;
              return (
                <div key={spot.region} className="card-moroccan overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="relative h-64 lg:h-auto">
                      <img
                        src={spot.image}
                        alt={`Camping in the ${spot.region} of Morocco`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                      <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                          <SpotIcon className="w-6 h-6" />
                          {spot.region}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-white/70 mt-1">
                          <span><Mountain className="w-3.5 h-3.5 inline mr-1" />{spot.altitude}</span>
                          <span><Calendar className="w-3.5 h-3.5 inline mr-1" />{spot.bestSeason}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:col-span-2 p-6">
                      <p className="text-sm text-[var(--text-secondary)] mb-5">{spot.description}</p>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        <Star className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
                        Top Camping Sites
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
                        {spot.topSites.map((site, i) => (
                          <div key={i} className="bg-[var(--surface-muted)] p-3 rounded-lg">
                            <div className="text-sm font-bold text-[var(--text-primary)]">{site.name}</div>
                            <div className="text-xs text-[var(--text-muted)] mt-1">{site.detail}</div>
                          </div>
                        ))}
                      </div>
                      <div className="flex items-start gap-2 text-xs text-[var(--text-muted)] bg-amber-50 dark:bg-amber-900/10 p-3 rounded-lg">
                        <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span><strong>Tip:</strong> {spot.tips}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gear & Packing -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camping Gear &amp; Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What to bring for camping in Morocco. Adapt this list to your camping style: wild campers need everything, glampers need almost nothing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            If you are staying at organized desert camps or glamping, shelter, bedding, and meals are provided. Bring only personal items and warm layers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gearList.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((gear, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-[var(--text-primary)]">{gear.item}</div>
                          <div className="text-xs text-[var(--text-muted)]">{gear.why}</div>
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

      {/* -- Safety Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Camping Safety in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a very safe camping destination. Follow these essential guidelines for a trouble-free experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Season -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time of Year for Camping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers year-round camping, but the best region changes with the seasons. Here is when and where to go.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span><Thermometer className="w-3 h-3 inline mr-1" />{season.tempRange}</span>
                        <span className="px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                          {season.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-xs text-[var(--text-muted)]">
                    <Info className="w-3.5 h-3.5 inline text-[var(--color-gold)] mr-1" />
                    {season.recommendation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Luxury Desert Camps -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sparkles className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Luxury Desert Camps &amp; Glamping
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a world leader in luxury glamping. These premium experiences combine five-star comfort with breathtaking natural settings.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and rates may be higher during peak months (October-April).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {luxuryCamps.map((camp) => (
              <div key={camp.name} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-accent)] p-5 text-white">
                  <Sparkles className="w-6 h-6 mb-2" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">{camp.name}</h3>
                  <div className="text-sm text-white/70 mt-1">
                    <MapPin className="w-3.5 h-3.5 inline mr-1" />
                    {camp.location}
                  </div>
                  <div className="text-sm font-medium mt-2 text-white/90">{camp.priceFrom}</div>
                </div>
                <div className="p-5">
                  <div className="space-y-2">
                    {camp.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about camping in Morocco, answered by experienced travelers.
          </p>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco outdoor adventure with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mt-1">{guide.description}</p>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] mt-2">
                        Read guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Tent className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Camp in Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Whether you choose a wild bivouac under the Sahara stars, an organized campsite in the Atlas
            Mountains, or a luxury glamping experience among golden dunes, Morocco offers some of the most
            unforgettable camping on the planet. Start planning your adventure today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/sahara"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-[family-name:var(--font-heading)] font-medium"
            >
              <Sun className="w-4 h-4" />
              Explore the Sahara
            </Link>
            <Link
              href="/camping"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-[family-name:var(--font-heading)] font-medium"
            >
              <MapPin className="w-4 h-4" />
              Browse Camping Spots
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

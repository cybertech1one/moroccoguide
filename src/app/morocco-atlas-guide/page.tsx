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
  Compass,
  Camera,
  Route,
  Calendar,
  Thermometer,
  Award,
  Footprints,
  Droplets,
  Wind,
  Globe,
  Heart,
  BookOpen,
  TrendingUp,
  Gauge,
  Tent,
  Car,
  Sunrise,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Atlas Mountains Morocco Guide 2026 | Trekking, Day Trips & Things to Do',
  description:
    'Complete guide to the Atlas Mountains in Morocco. High Atlas vs Middle Atlas vs Anti-Atlas, Toubkal summit, Imlil base camp, Ourika Valley, Ouzoud Falls, Berber villages, Ait Bougmez, best seasons, guided treks & transport from Marrakech. Prices from 200 MAD.',
  keywords: [
    'Atlas Mountains Morocco',
    'Atlas Mountains trekking',
    'things to do Atlas Mountains',
    'Atlas Mountains day trip',
    'High Atlas Morocco',
    'Middle Atlas Morocco',
    'Anti-Atlas Morocco',
    'Toubkal summit trek',
    'Imlil base camp',
    'Ourika Valley day trip',
    'Ouzoud Falls Morocco',
    'Berber villages Atlas Mountains',
    'Ait Bougmez valley',
    'Atlas Mountains accommodation',
    'Marrakech to Atlas Mountains',
    'Atlas Mountains guide 2026',
    'Atlas Mountains best season',
    'guided trekking Atlas Mountains',
    'Atlas Mountains from Marrakech',
    'Morocco mountain guide',
  ],
  openGraph: {
    title: 'Atlas Mountains Morocco Guide 2026 | Trekking, Day Trips & Things to Do',
    description:
      'Everything you need to explore the Atlas Mountains: High Atlas, Middle Atlas, Anti-Atlas, Toubkal, Imlil, Ourika Valley, Ouzoud Falls, Berber villages. Prices from 200 MAD.',
    url: `${BASE_URL}/morocco-atlas-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of the Atlas Mountains in Morocco with snow-capped peaks and Berber villages in the valleys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Mountains Morocco Guide 2026 | Trekking & Day Trips',
    description:
      'High Atlas, Middle Atlas & Anti-Atlas explored. Toubkal summit, Imlil, Ourika Valley, Ouzoud Falls, Berber villages. Costs from 200 MAD, best seasons & transport.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-atlas-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-atlas-guide`,
  name: 'Atlas Mountains Morocco Guide 2026 | Trekking, Day Trips & Things to Do',
  description:
    'Complete guide to the Atlas Mountains in Morocco. Three ranges, top destinations, trekking routes, accommodation, transport, and costs.',
  url: `${BASE_URL}/morocco-atlas-guide`,
  image: `${BASE_URL}/images/hero-atlas.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-atlas-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Atlas Mountains' },
    { '@type': 'Place', name: 'High Atlas' },
    { '@type': 'Place', name: 'Middle Atlas' },
    { '@type': 'Place', name: 'Anti-Atlas' },
    { '@type': 'Place', name: 'Mount Toubkal' },
    { '@type': 'Place', name: 'Imlil' },
    { '@type': 'Place', name: 'Ourika Valley' },
    { '@type': 'Place', name: 'Ouzoud Falls' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Atlas Mountains Guide', item: `${BASE_URL}/morocco-atlas-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get to the Atlas Mountains from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Atlas Mountains begin just 30 minutes south of Marrakech. Grand taxis to Imlil cost from 200-300 MAD and take about 90 minutes. Shared minibuses run to Ourika Valley for 20-30 MAD. Private transfers cost from 400-600 MAD one way. Many hotels arrange day trips with transport included from 500 MAD per person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer ideal conditions with mild temperatures and clear skies. Summer (June-August) is best for high-altitude trekking above 3,000 meters. Winter (December-February) brings snow above 2,500 meters, perfect for the Anti-Atlas and lower valleys but requiring technical gear for high passes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A guide is strongly recommended for multi-day treks and summit attempts like Toubkal. For day trips to Ourika Valley or Ouzoud Falls, you can visit independently. Licensed mountain guides cost from 500-1,000 MAD per day and provide navigation, safety, cultural insight, and logistical support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between the High Atlas, Middle Atlas, and Anti-Atlas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The High Atlas is the tallest range with peaks above 4,000 meters, home to Toubkal and dramatic Berber villages. The Middle Atlas is lower, greener, with cedar forests, lakes, and Barbary macaques near Ifrane and Azrou. The Anti-Atlas is the oldest range with desert landscapes, granite formations, and oasis valleys in the south.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Atlas Mountains day trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An independent day trip to Ourika Valley costs from 200-400 MAD including transport and lunch. Organized day tours from Marrakech cost from 500-1,200 MAD per person including transport, guide, and lunch. Ouzoud Falls day trips cost from 400-800 MAD. The Toubkal base camp day hike costs from 300-600 MAD with a local guide.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do the Toubkal summit as a day trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, the Toubkal summit is not a day trip. The standard route takes 2 days with an overnight at the Toubkal Refuge at 3,207 meters. However, you can do a day hike from Imlil to the Toubkal Refuge and back, or explore the Imlil valley trails as a day trip from Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where should I stay in the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Imlil is the most popular base with guesthouses from 200-500 MAD per night. The Ourika Valley has eco-lodges from 400-1,200 MAD. Kasbah-style hotels near Ait Bougmez cost from 300-800 MAD. Mountain refuges like the Toubkal Refuge cost from 150-250 MAD for a dormitory bed. Camping is free in most areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Atlas Mountains safe for tourists?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Atlas Mountains are very safe for tourists. Berber communities are famously hospitable. The main risks are altitude sickness above 3,000 meters, weather changes, and rough terrain. Hiring a licensed guide eliminates most safety concerns. Solo female travelers report feeling welcome and safe throughout the region.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: THREE RANGES
   ═══════════════════════════════════════════════════════════════ */

const atlasRanges = [
  {
    name: 'High Atlas',
    subtitle: 'North Africa\'s rooftop with peaks above 4,000 m',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    elevation: '2,000-4,167 m',
    highlights: 'Toubkal, Imlil, Ourika Valley, Ait Bougmez',
    bestFor: 'Trekking, summit climbing, Berber culture',
    bestSeason: 'April-October (trekking), December-March (skiing)',
    description:
      'The High Atlas is the backbone of Morocco, stretching 700 kilometers from the Atlantic coast to the Algerian border. This is where North Africa\'s highest peaks rise above ancient Berber villages, where mule trails wind through walnut groves and terraced fields, and where the summit of Jebel Toubkal at 4,167 meters rewards climbers with views stretching from the Sahara to the sea. The High Atlas is the primary destination for trekkers visiting Morocco.',
    keyAttractions: [
      'Jebel Toubkal: North Africa\'s highest peak at 4,167 meters',
      'Imlil: the main trekking hub and gateway to Toubkal',
      'Ourika Valley: popular day trip with waterfalls and gardens',
      'Ait Bougmez: the "Happy Valley" for multi-day treks',
      'Tizi n\'Tichka pass: dramatic road crossing at 2,260 meters',
    ],
  },
  {
    name: 'Middle Atlas',
    subtitle: 'Cedar forests, lakes, and Barbary macaques',
    icon: Globe,
    image: '/images/hero-hiking-atlas.webp',
    elevation: '1,000-3,340 m',
    highlights: 'Ifrane, Azrou, Ras el Ma, Bin el Ouidane',
    bestFor: 'Nature walks, wildlife, cooler climate escapes',
    bestSeason: 'Year-round (best April-June, September-November)',
    description:
      'The Middle Atlas is Morocco\'s green heart: a lower, lusher range carpeted in cedar and oak forests, dotted with crater lakes, and home to the last wild Barbary macaques in Africa. The charming town of Ifrane, nicknamed "Little Switzerland," sits at 1,650 meters and feels nothing like the rest of Morocco with its clean streets, alpine architecture, and winter snowfall. The Middle Atlas is less visited by tourists, making it perfect for those seeking tranquility.',
    keyAttractions: [
      'Ifrane: "Little Switzerland" with alpine architecture',
      'Azrou cedar forest: home to wild Barbary macaques',
      'Bin el Ouidane: turquoise reservoir for kayaking and swimming',
      'Ras el Ma springs: natural water source in forested hills',
      'Michlifen ski resort: Morocco\'s most accessible winter sport',
    ],
  },
  {
    name: 'Anti-Atlas',
    subtitle: 'Ancient desert mountains with oasis valleys',
    icon: Sunrise,
    image: '/images/hero-trekking.webp',
    elevation: '500-2,712 m',
    highlights: 'Tafraoute, Jebel Saghro, Ameln Valley, Paradise Valley',
    bestFor: 'Desert trekking, rock climbing, photography',
    bestSeason: 'October-April (too hot in summer)',
    description:
      'The Anti-Atlas is Morocco\'s oldest mountain range, formed over 300 million years ago, and it shows in its dramatic weathered granite formations, painted gorges, and stark desert beauty. This is the Morocco of pink-hued villages nestled among almond groves, of prehistoric rock art, and of vast silence under star-filled skies. The Anti-Atlas is at its best when the High Atlas is snow-covered, making it the premier winter trekking destination.',
    keyAttractions: [
      'Tafraoute: pink granite boulder fields and painted rocks',
      'Jebel Saghro: volcanic massif between Atlas and Sahara',
      'Ameln Valley: 26 villages carved into cliff faces',
      'Paradise Valley: palm-lined pools near Agadir',
      'Ait Mansour gorge: dramatic canyon with ancient granaries',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const topDestinations = [
  {
    name: 'Toubkal Summit',
    icon: Mountain,
    range: 'High Atlas',
    duration: '2-3 days',
    difficulty: 'Moderate-Challenging',
    price: 'From 2,500 MAD guided',
    description: 'North Africa\'s highest peak at 4,167 meters. The standard route from Imlil takes 2 days with an overnight at the refuge. No technical climbing in summer, but altitude demands good fitness and acclimatization.',
    highlights: ['360-degree panorama from the summit', 'Overnight at Toubkal Refuge (3,207 m)', 'Berber villages en route'],
  },
  {
    name: 'Imlil Base Camp',
    icon: Tent,
    range: 'High Atlas',
    duration: '1-3 days',
    difficulty: 'Easy-Moderate',
    price: 'From 200 MAD independent',
    description: 'The main gateway to Toubkal at 1,740 meters. Imlil is a charming Berber village with guesthouses, cafes, and trails radiating in every direction. Perfect for day walks, acclimatization, and experiencing mountain village life.',
    highlights: ['Network of easy day walks through walnut groves', 'Traditional Berber guesthouses with rooftop terraces', 'Starting point for Toubkal and Azzaden Valley treks'],
  },
  {
    name: 'Ourika Valley',
    icon: Droplets,
    range: 'High Atlas',
    duration: 'Day trip',
    difficulty: 'Easy',
    price: 'From 200 MAD independent',
    description: 'The most accessible Atlas experience from Marrakech, just 45 minutes south. A lush valley with seven waterfalls, Berber villages clinging to hillsides, aromatic herb gardens, and riverside restaurants. The classic Atlas Mountains day trip.',
    highlights: ['Setti Fatma seven waterfalls hike', 'Berber village visits with mint tea', 'Aromatic and medicinal garden tours'],
  },
  {
    name: 'Ouzoud Falls',
    icon: Droplets,
    range: 'Middle Atlas',
    duration: 'Day trip',
    difficulty: 'Easy',
    price: 'From 400 MAD from Marrakech',
    description: 'Morocco\'s most spectacular waterfall, plunging 110 meters in three cascades surrounded by olive groves and red cliffs. Wild Barbary macaques play in the trees, and rainbow mist rises from the plunge pool. A 2.5-hour drive from Marrakech.',
    highlights: ['110-meter cascading waterfall with rainbow mist', 'Wild Barbary macaques in surrounding trees', 'Boat rides at the base of the falls'],
  },
  {
    name: 'Ait Bougmez Valley',
    icon: Heart,
    range: 'Central High Atlas',
    duration: '3-5 days',
    difficulty: 'Moderate',
    price: 'From 800 MAD per day guided',
    description: 'Known as the "Happy Valley," Ait Bougmez is a remote, wide valley surrounded by 3,000-meter peaks. Traditional Berber agriculture, ancient granaries, dinosaur footprints, and some of Morocco\'s finest multi-day trekking routes make this a hidden treasure.',
    highlights: ['Traditional Berber farming villages with earth architecture', 'Gateway to M\'Goun summit (4,071 m)', 'Dinosaur footprints and prehistoric rock carvings'],
  },
  {
    name: 'Berber Villages',
    icon: Users,
    range: 'All three ranges',
    duration: '1-4 days',
    difficulty: 'Easy-Moderate',
    price: 'From 300 MAD per day with guide',
    description: 'The soul of the Atlas Mountains is in its Berber villages. Earth-built houses clinging to hillsides, terraced fields irrigated by ancient channels, communal ovens, and legendary hospitality. Villages like Armed, Aremd, Tacheddirt, and Setti Fatma offer authentic cultural immersion.',
    highlights: ['Overnight homestays with Berber families', 'Traditional cooking classes and bread baking', 'Seasonal festivals and weekly souks'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONS
   ═══════════════════════════════════════════════════════════════ */

const seasonGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    tempDay: '15-25 C (valleys), 5-15 C (peaks)',
    rating: 'Excellent',
    description:
      'The best overall season for the Atlas Mountains. Wildflowers carpet the valleys, waterfalls flow with snowmelt, almond trees blossom in the Anti-Atlas, and temperatures are ideal for trekking. April is the single best month for most visitors.',
    bestFor: 'Ourika Valley, Imlil day walks, Anti-Atlas, Ouzoud Falls',
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    tempDay: '30-40 C (valleys), 15-25 C (peaks)',
    rating: 'Good (high altitude)',
    description:
      'Too hot for low-elevation day trips but the prime season for high-altitude trekking. This is when Toubkal, M\'Goun, and high passes are snow-free and accessible. Start early each day and carry plenty of water.',
    bestFor: 'Toubkal summit, M\'Goun traverse, Ait Bougmez multi-day treks',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    tempDay: '18-28 C (valleys), 8-18 C (peaks)',
    rating: 'Excellent',
    description:
      'Warm, stable weather with fewer crowds than spring. October is arguably the finest month for Atlas trekking: golden light, comfortable temperatures, and the harvest season brings villages to life. High passes remain open until late November.',
    bestFor: 'All destinations, especially Ait Bougmez and Berber village treks',
  },
  {
    season: 'Winter (December-February)',
    icon: Droplets,
    tempDay: '10-18 C (valleys), -5 to 5 C (peaks)',
    rating: 'Limited to Specialist',
    description:
      'Snow covers the High Atlas above 2,500 meters, closing many trekking routes. However, the Anti-Atlas and lower valleys like Ourika remain accessible with crisp, clear weather. Oukaimeden ski resort opens, and Jebel Saghro is at its winter best.',
    bestFor: 'Anti-Atlas, Jebel Saghro, Ourika Valley, Oukaimeden skiing',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodationTypes = [
  {
    type: 'Mountain Gites (Guesthouses)',
    icon: Tent,
    priceRange: 'From 200-500 MAD per night',
    description: 'Traditional Berber guesthouses offering simple rooms, shared bathrooms, and home-cooked meals. Found in every trekking village. The most authentic and affordable way to stay in the mountains.',
    includes: ['Dinner and breakfast included', 'Mattress and blankets on floor or bed', 'Shared bathroom facilities', 'Rooftop terrace with mountain views'],
  },
  {
    type: 'Eco-Lodges & Kasbah Hotels',
    icon: Award,
    priceRange: 'From 600-2,500 MAD per night',
    description: 'Mid-range to upscale properties blending traditional architecture with modern comfort. Heated pools, hammams, and gourmet Moroccan cuisine in stunning mountain settings.',
    includes: ['Private en-suite rooms', 'Swimming pool and hammam', 'Restaurant with local cuisine', 'Organized excursions and guides'],
  },
  {
    type: 'Mountain Refuges',
    icon: Mountain,
    priceRange: 'From 150-250 MAD per night',
    description: 'Alpine-style shelters on trekking routes, most famously the Toubkal Refuge at 3,207 meters. Basic dormitory beds with meals available. Essential for summit treks and multi-day routes.',
    includes: ['Dormitory bed with mattress', 'Meals available from 80-150 MAD', 'Basic washing facilities', 'Communal dining area'],
  },
  {
    type: 'Camping',
    icon: Compass,
    priceRange: 'Free to 50 MAD per night',
    description: 'Wild camping is permitted in most mountain areas. Organized campsites exist near popular trailheads. Guided treks often include camping with all equipment provided by the support team.',
    includes: ['Freedom to camp almost anywhere', 'Equipment provided on guided treks', 'Campfire cooking with guide teams', 'Stargazing under clear mountain skies'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT FROM MARRAKECH
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  { destination: 'Imlil (Toubkal gateway)', method: 'Grand taxi', cost: 'From 200-300 MAD', time: '90 minutes', notes: 'Shared taxis from Bab er-Rob; or private for 400-600 MAD' },
  { destination: 'Ourika Valley', method: 'Shared minibus / grand taxi', cost: 'From 20-50 MAD', time: '45-60 minutes', notes: 'Frequent departures from Bab er-Rob; most affordable option' },
  { destination: 'Ouzoud Falls', method: 'Organized day trip', cost: 'From 400-800 MAD', time: '2.5 hours each way', notes: 'Public transport requires 2 changes; tours far more convenient' },
  { destination: 'Ait Bougmez Valley', method: 'Private transfer / rental car', cost: 'From 800-1,500 MAD', time: '4-5 hours', notes: 'Remote location; no direct public transport. 4x4 recommended in winter' },
  { destination: 'Oukaimeden (ski resort)', method: 'Grand taxi / private car', cost: 'From 200-500 MAD', time: '75 minutes', notes: 'Winding mountain road; chains required in winter snow' },
  { destination: 'Tizi n\'Tichka pass', method: 'Bus / private car', cost: 'From 60-100 MAD', time: '2 hours', notes: 'On the Marrakech-Ouarzazate road; CTM and Supratours buses available' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How do I get to the Atlas Mountains from Marrakech?',
    answer:
      'The Atlas Mountains begin just 30 minutes south of Marrakech. Grand taxis to Imlil cost from 200-300 MAD (90 minutes). Shared minibuses run to Ourika Valley for 20-50 MAD (45 minutes). Private transfers cost from 400-600 MAD. Many hotels and riads arrange day trips with transport included from 500 MAD per person.',
  },
  {
    question: 'What is the best time to visit the Atlas Mountains?',
    answer:
      'Spring (March-May) and autumn (September-November) offer the best conditions with mild temperatures and clear skies. Summer (June-August) is ideal for high-altitude trekking. Winter brings snow above 2,500 meters, perfect for the Anti-Atlas and skiing at Oukaimeden. April and October are widely considered the two finest months.',
  },
  {
    question: 'Do I need a guide for the Atlas Mountains?',
    answer:
      'A guide is strongly recommended for multi-day treks and summit attempts like Toubkal. For day trips to Ourika Valley or Ouzoud Falls, you can visit independently. Licensed mountain guides cost from 500-1,000 MAD per day and provide navigation, safety, cultural insight, and logistical support. Guides must be licensed by the Moroccan government.',
  },
  {
    question: 'What is the difference between the High Atlas, Middle Atlas, and Anti-Atlas?',
    answer:
      'The High Atlas is the tallest range (peaks above 4,000 m) with dramatic Berber villages and serious trekking. The Middle Atlas is lower and greener with cedar forests, lakes, and Barbary macaques near Ifrane. The Anti-Atlas is the oldest range (300+ million years) with desert landscapes, granite formations, and oasis valleys in the south.',
  },
  {
    question: 'How much does an Atlas Mountains day trip cost?',
    answer:
      'An independent day trip to Ourika Valley costs from 200-400 MAD including transport and lunch. Organized tours from Marrakech cost from 500-1,200 MAD per person including transport, guide, and lunch. Ouzoud Falls tours cost from 400-800 MAD. Prices vary seasonally, and costs can change based on group size and operator.',
  },
  {
    question: 'Can I do the Toubkal summit as a day trip?',
    answer:
      'No, the Toubkal summit requires at least 2 days with an overnight at the refuge (3,207 m). You can, however, do a day hike from Imlil to the refuge and back, or explore the Imlil valley trails as a day trip from Marrakech. The Imlil area itself makes an excellent day trip even without attempting the summit.',
  },
  {
    question: 'Where should I stay in the Atlas Mountains?',
    answer:
      'Imlil has guesthouses from 200-500 MAD per night and is the best trekking base. Ourika Valley has eco-lodges from 400-1,200 MAD for a scenic retreat. Kasbah hotels near Ait Bougmez cost from 300-800 MAD. The Toubkal Refuge offers dormitory beds from 150-250 MAD. Camping is free in most areas. Seasonal pricing applies.',
  },
  {
    question: 'Is the Atlas Mountains safe for tourists?',
    answer:
      'Yes, the Atlas Mountains are very safe. Berber communities are famously hospitable and welcoming. The main risks are altitude sickness above 3,000 meters, rapid weather changes, and rough terrain on unmarked trails. Hiring a licensed guide eliminates most safety concerns. Solo female travelers consistently report feeling welcome and safe.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/atlas-mountains',
    icon: Mountain,
    title: 'Atlas Mountains Complete Guide',
    description: 'In-depth coverage of every village, pass, and valley across all three Atlas ranges.',
  },
  {
    href: '/trekking',
    icon: Footprints,
    title: 'Trekking in Morocco',
    description: 'Detailed trekking routes, multi-day itineraries, and trail maps across Morocco\'s diverse landscapes.',
  },
  {
    href: '/morocco-hiking-guide',
    icon: Route,
    title: 'Morocco Hiking Guide',
    description: 'Top treks, difficulty ratings, packing lists, and costs for every hiking region in Morocco.',
  },
  {
    href: '/mountains',
    icon: TrendingUp,
    title: 'Mountains of Morocco',
    description: 'All of Morocco\'s mountain ranges explored: geography, culture, climate, and adventure.',
  },
  {
    href: '/adventure',
    icon: Compass,
    title: 'Adventure Activities Morocco',
    description: 'Beyond trekking: mountain biking, rock climbing, skiing, paragliding, and desert adventures.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoAtlasGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-atlas.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Atlas Mountains Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Atlas Mountains Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Atlas Mountains Guide:
            <br className="hidden md:block" /> Trekking, Day Trips &amp; Things to Do
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Three mountain ranges, one extraordinary destination. From the 4,167-meter summit of Toubkal
            to gentle valley day trips from Marrakech. Complete guide with costs from 200 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why the Atlas Mountains Are Morocco&apos;s Greatest Natural Wonder
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Atlas Mountains are the spine of Morocco, a vast chain of three distinct ranges stretching
                over 2,500 kilometers from the Atlantic coast to the eastern borders. They divide the fertile
                plains of the north from the Sahara Desert to the south, creating a world of snow-capped summits,
                deep gorges, cedar forests, and ancient Berber villages that has captivated travelers for centuries.
                Whether you are seeking a challenging multi-day trek to the summit of North Africa&apos;s highest
                peak or a leisurely day trip from Marrakech through flower-filled valleys, the Atlas Mountains
                deliver an experience unlike anywhere else on earth.
              </p>
              <p>
                What sets the Atlas apart is its extraordinary diversity. The High Atlas thrusts peaks above
                4,000 meters where alpine conditions demand serious trekking gear. An hour&apos;s drive away,
                the Middle Atlas offers cool cedar forests and crater lakes that feel like Northern Europe. Further
                south, the Anti-Atlas presents a landscape of pink granite, desert oases, and ancient rock
                formations over 300 million years old. Add in the warmth of Berber hospitality, where every
                village trail leads to an invitation for mint tea, and you have one of the world&apos;s most
                rewarding mountain destinations.
              </p>
              <p>
                This guide covers all three Atlas ranges, the top destinations, the best seasons, how to get
                there from Marrakech, where to stay, guided versus self-guided options, transport details,
                costs, and answers to every common question about visiting the Atlas Mountains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">4,167 m</div>
              <div className="text-sm text-[var(--text-muted)]">Toubkal summit</div>
            </div>
            <div className="text-center">
              <Route className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">3 Ranges</div>
              <div className="text-sm text-[var(--text-muted)]">High, Middle &amp; Anti-Atlas</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">200 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting cost (day trip)</div>
            </div>
            <div className="text-center">
              <Car className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">45 min</div>
              <div className="text-sm text-[var(--text-muted)]">From Marrakech</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Three Ranges ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            High Atlas vs Middle Atlas vs Anti-Atlas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three distinct mountain ranges, each with its own character, landscape, and appeal. Understanding
            the differences helps you choose the right Atlas experience.
          </p>

          <div className="space-y-10">
            {atlasRanges.map((range) => {
              const RangeIcon = range.icon;
              return (
                <div key={range.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56 md:h-64">
                    <img
                      src={range.image}
                      alt={`${range.name} mountain range landscape in Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <RangeIcon className="w-6 h-6" />
                        {range.name}
                      </h3>
                      <p className="text-sm text-white/80 mt-1">{range.subtitle}</p>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                      {range.elevation}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <MapPin className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Highlights</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{range.highlights}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Star className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Best For</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{range.bestFor}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center col-span-2 md:col-span-1">
                        <Calendar className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Best Season</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{range.bestSeason}</div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">{range.description}</p>

                    <div>
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                        <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                        Key Attractions
                      </h4>
                      <div className="space-y-2">
                        {range.keyAttractions.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Top Destinations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Things to Do in the Atlas Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From summiting North Africa&apos;s highest peak to sipping mint tea in a Berber village, these are the
            essential Atlas Mountains experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and costs may vary by group size and operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {topDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {dest.name}
                      </h3>
                      <span className="text-xs text-[var(--text-muted)]">{dest.range}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-[var(--color-accent)]" /> {dest.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                      <Gauge className="w-3 h-3 text-[var(--color-accent)]" /> {dest.difficulty}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full font-bold text-[var(--color-accent)]">
                      <DollarSign className="w-3 h-3" /> {dest.price}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4">{dest.description}</p>

                  <div className="space-y-1.5">
                    {dest.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Guided vs Self-Guided ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided vs Self-Guided: How to Explore
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Your Atlas Mountains experience depends on the type of adventure you want. Here are the three
            main approaches, with honest advice on when each works best.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">Guided Day Trip</h3>
                </div>
                <p className="text-white/80 text-sm">From 500-1,200 MAD per person</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  The easiest way to experience the Atlas. A driver picks you up from your Marrakech hotel,
                  a guide leads you through villages and trails, and lunch is included. Ideal for Ourika Valley,
                  Ouzoud Falls, and Imlil day visits.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Hotel pickup and drop-off included
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    English-speaking guide and driver
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Traditional Berber lunch included
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    No planning or navigation needed
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> First-time visitors, families, limited time in Marrakech
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">Guided Multi-Day Trek</h3>
                </div>
                <p className="text-white/80 text-sm">From 800-2,000 MAD per day per person</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  The definitive Atlas experience. A licensed mountain guide, muleteers, a cook, and pre-arranged
                  accommodation at gites or campsites. Essential for Toubkal, M&apos;Goun, Ait Bougmez, and
                  remote valley circuits.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Licensed mountain guide with local knowledge
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Mule support for luggage and equipment
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    All meals prepared by camp cook
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Deep cultural immersion with Berber communities
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> Trekkers, summit seekers, cultural immersion, remote valleys
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Footprints className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">Self-Guided Exploration</h3>
                </div>
                <p className="text-white/80 text-sm">From 200-500 MAD per day</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Take a grand taxi or rent a car and explore at your own pace. Best for Ourika Valley,
                  Imlil day walks, and the Tizi n&apos;Tichka road. Not recommended for remote multi-day
                  routes where trails are unmarked.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Complete freedom of schedule and pace
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Lowest daily cost (transport and meals only)
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Spontaneous detours and village encounters
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Guesthouses welcome walk-in travelers
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> Experienced travelers, day trips, well-marked routes, budget travelers
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Safety Note
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    For any trek above 3,000 meters or on unmarked trails, always hire a <strong>licensed mountain guide</strong>.
                    Morocco requires guides to be government-certified, ensuring they have first aid training, route knowledge,
                    and emergency protocols. A guide costs from 500-1,000 MAD per day and is the single best investment you
                    can make for safety and cultural connection in the Atlas Mountains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit the Atlas Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains offer year-round experiences, but the ideal season depends on your
            chosen destination and activity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                    <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold ${
                      season.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                      season.rating.includes('Good') ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {season.rating}
                    </span>
                  </div>
                  <div className="text-sm text-[var(--text-muted)] mb-3">
                    <Thermometer className="w-3.5 h-3.5 inline mr-1" />
                    {season.tempDay}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <div className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--color-accent)]">Best for:</strong> {season.bestFor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay in the Atlas Mountains
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From basic mountain refuges to luxury kasbah hotels, the Atlas offers accommodation for every
            budget and style.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are starting rates per night. Seasonal pricing applies and costs may vary.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationTypes.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <AccIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-accent)]">{acc.priceRange}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{acc.description}</p>
                  <div className="space-y-1.5">
                    {acc.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                        <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Transport from Marrakech ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting There from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Marrakech is the gateway to the Atlas Mountains. Here is how to reach each major destination
            with current prices and journey times.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="bg-[var(--color-accent)] p-4 text-white">
              <div className="grid grid-cols-4 gap-4 text-sm font-bold">
                <span>Destination</span>
                <span>Transport</span>
                <span>Cost</span>
                <span>Time</span>
              </div>
            </div>
            <div className="divide-y divide-[var(--border-primary)]">
              {transportOptions.map((row, i) => (
                <div key={i} className="p-4">
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <span className="font-medium text-[var(--text-primary)]">{row.destination}</span>
                    <span className="text-[var(--text-secondary)]">{row.method}</span>
                    <span className="text-[var(--color-accent)] font-bold">{row.cost}</span>
                    <span className="text-[var(--text-secondary)]">{row.time}</span>
                  </div>
                  <div className="text-xs text-[var(--text-muted)] mt-1 ml-0">{row.notes}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-moroccan p-6 mt-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Transport Tips
                </h4>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <p>
                    <strong>Grand taxis</strong> depart from Bab er-Rob in Marrakech when full (6 passengers).
                    You can buy extra seats to leave sooner. Agree on the price before departing.
                  </p>
                  <p>
                    <strong>Rental cars</strong> give maximum flexibility. Roads to Ourika and Imlil are paved.
                    For Ait Bougmez, a 4x4 is recommended, especially in winter. International driving permit required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about visiting the Atlas Mountains, answered by experienced travelers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] ml-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Atlas Mountains adventure with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <GuideIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Mountain className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Explore the Atlas Mountains?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From summit treks to valley day trips, the Atlas Mountains offer adventures for every traveler.
            Start planning your journey with our detailed guides and discover Morocco&apos;s greatest
            natural wonder.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains Guide
            </Link>
            <Link
              href="/morocco-hiking-guide"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Route className="w-5 h-5" />
              Morocco Hiking Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

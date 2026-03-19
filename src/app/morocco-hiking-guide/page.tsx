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
  Backpack,
  Award,
  Footprints,
  Droplets,
  Wind,
  Globe,
  Heart,
  BookOpen,
  TrendingUp,
  Gauge,
  Shirt,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Hiking Guide 2026 | Best Treks, Trails & Trekking Tips',
  description:
    'The ultimate guide to hiking in Morocco. Top treks including Toubkal, M\'Goun, Jebel Saghro, Todra Gorge, Rif Mountains & Ouirgane Valley. Difficulty ratings, guided vs independent, packing list, best season & costs from 300 MAD.',
  keywords: [
    'hiking in Morocco',
    'Morocco trekking guide',
    'Morocco hiking trails',
    'Toubkal trek',
    'Mount Toubkal hiking',
    'M\'Goun traverse',
    'Jebel Saghro trek',
    'Todra Gorge hiking',
    'Rif Mountains Morocco',
    'Atlas Mountains hiking',
    'Morocco trekking tours',
    'best hikes Morocco',
    'Morocco hiking cost',
    'guided trekking Morocco',
    'Morocco hiking packing list',
    'Morocco hiking season',
    'Morocco mountain trekking',
    'High Atlas hiking',
    'Anti-Atlas trekking',
    'Morocco hiking guide 2026',
  ],
  openGraph: {
    title: 'Morocco Hiking Guide 2026 | Best Treks, Trails & Trekking Tips',
    description:
      'Plan your Morocco hiking adventure. Top treks from Toubkal to the Rif Mountains, difficulty ratings, guided vs independent options, and costs from 300 MAD per day.',
    url: `${BASE_URL}/morocco-hiking-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hiking-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Hikers trekking through the High Atlas Mountains in Morocco with snow-capped peaks in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Hiking Guide 2026 | Best Treks & Trekking Tips',
    description:
      'Everything you need for hiking in Morocco: Toubkal, M\'Goun, Jebel Saghro, Todra Gorge, Rif Mountains. Costs from 300 MAD, best season, packing list & expert tips.',
    images: [`${BASE_URL}/images/hero-hiking-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-hiking-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-hiking-guide`,
  name: 'Morocco Hiking Guide 2026 | Best Treks, Trails & Trekking Tips',
  description:
    'The ultimate guide to hiking in Morocco. Top treks, difficulty ratings, guided vs independent, packing list, best season, and costs.',
  url: `${BASE_URL}/morocco-hiking-guide`,
  image: `${BASE_URL}/images/hero-hiking-atlas.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-hiking-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'High Atlas Mountains' },
    { '@type': 'Place', name: 'Mount Toubkal' },
    { '@type': 'Place', name: 'M\'Goun Massif' },
    { '@type': 'Place', name: 'Jebel Saghro' },
    { '@type': 'Place', name: 'Todra Gorge' },
    { '@type': 'Place', name: 'Rif Mountains' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Hiking Guide', item: `${BASE_URL}/morocco-hiking-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does hiking in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget independent hiking costs from 300-500 MAD per day including accommodation and meals at guesthouses. Guided group treks cost from 800-1,500 MAD per day per person including guide, mules, meals, and camping or gite accommodation. The Toubkal summit trek costs from 2,500 MAD for a 2-day guided trip. Private guided treks cost from 2,000-4,000 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide for hiking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A guide is not legally required for most trails, but it is strongly recommended for multi-day treks, summit attempts like Toubkal, and remote routes like M\'Goun and Jebel Saghro where trails are unmarked. Day hikes in the Ouirgane Valley or around Imlil can be done independently. Guides cost from 500-1,000 MAD per day and provide navigation, cultural insight, and logistical support.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for hiking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) are the best seasons for hiking in Morocco. Spring brings wildflowers and snowmelt waterfalls while autumn offers warm days and cool nights. Summer is too hot for lower elevations but suitable for high-altitude treks above 3,000 meters. Winter brings snow to the High Atlas, making summit routes impassable without crampons.',
      },
    },
    {
      '@type': 'Question',
      name: 'How difficult is the Toubkal trek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard 2-day Toubkal trek is rated moderate to challenging. Day one is a 5-6 hour hike from Imlil (1,740 m) to the Toubkal Refuge (3,207 m). Day two is a 4-5 hour summit push to 4,167 meters and descent back to Imlil. No technical climbing is required in summer, but good fitness, proper acclimatization, and sturdy hiking boots are essential. In winter, crampons and an ice axe are necessary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for hiking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential items include sturdy hiking boots (broken in), a daypack (30-40 liters), layers for temperature changes, sun protection (hat, sunscreen SPF 50+, sunglasses), a refillable water bottle with purification tablets, a headlamp, a first aid kit, and trekking poles for steep terrain. For multi-day treks, bring a sleeping bag rated to 0 degrees Celsius and moisture-wicking base layers.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners hike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Morocco offers hikes for every level. Beginners can enjoy gentle day walks in the Ouirgane Valley, Todra Gorge, or around Imlil without any technical skills. The key is choosing the right trail for your fitness level and hiring a guide for anything beyond well-marked paths. Many guided group treks are paced for average fitness.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP HIKES
   ═══════════════════════════════════════════════════════════════ */

const topHikes = [
  {
    name: 'Mount Toubkal',
    subtitle: 'North Africa\'s highest peak at 4,167 m',
    icon: Mountain,
    image: '/images/hero-toubkal.webp',
    region: 'High Atlas',
    duration: '2-3 days',
    distance: '22 km round trip',
    elevation: '4,167 m summit',
    difficulty: 'Moderate to Challenging',
    bestSeason: 'May-October (summer ascent), Dec-March (winter with crampons)',
    price: 'From 2,500 MAD guided (2 days)',
    description:
      'The crown jewel of Moroccan hiking. Toubkal is the highest peak in North Africa and a bucket-list summit for trekkers worldwide. The standard route from Imlil passes through Berber villages, walnut groves, and alpine scree before reaching the Toubkal Refuge at 3,207 meters. The pre-dawn summit push rewards you with panoramic views stretching from the Sahara to the Atlantic on clear days.',
    highlights: [
      'Highest point in North Africa at 4,167 meters',
      'No technical climbing required in summer months',
      'Stunning views of the entire Atlas range from the summit',
      'Overnight at the Toubkal Refuge with fellow trekkers',
      'Berber village of Imlil as a charming base camp',
    ],
    tips: [
      'Acclimatize in Imlil (1,740 m) for at least one night before ascending',
      'Start the summit push before dawn to reach the top by mid-morning',
      'Bring layers: temperatures drop below freezing at the summit year-round',
      'Winter ascents require crampons, ice axe, and alpine experience',
    ],
  },
  {
    name: 'M\'Goun Traverse',
    subtitle: 'Morocco\'s premier multi-day trek across the High Atlas',
    icon: Route,
    image: '/images/hero-atlas.webp',
    region: 'Central High Atlas',
    duration: '5-7 days',
    distance: '70-90 km',
    elevation: '4,071 m (M\'Goun summit)',
    difficulty: 'Challenging',
    bestSeason: 'June-September',
    price: 'From 5,000 MAD guided (6 days)',
    description:
      'The M\'Goun traverse is widely considered the finest multi-day trek in Morocco. Crossing the Central High Atlas from Ait Bouguemez (the Happy Valley) to the Rose Valley, the route winds through dramatic gorges, past nomadic Berber camps, over high passes exceeding 3,500 meters, and offers the option to summit M\'Goun, Morocco\'s third-highest peak. This is remote, wild, and profoundly beautiful.',
    highlights: [
      'Morocco\'s third-highest peak at 4,071 meters',
      'Traverse through the spectacular Ait Bouguemez Valley',
      'Dramatic canyon sections with river crossings',
      'Far fewer trekkers than Toubkal for a true wilderness feel',
    ],
    tips: [
      'A licensed guide and mule support are essential for this remote route',
      'River crossings can be knee-deep in early summer after snowmelt',
      'Carry water purification as natural sources may need treatment',
      'Book a guide who knows the route well; trails are unmarked in places',
    ],
  },
  {
    name: 'Jebel Saghro',
    subtitle: 'Volcanic desert mountains between the Atlas and Sahara',
    icon: Compass,
    image: '/images/hero-trekking.webp',
    region: 'Anti-Atlas / Pre-Sahara',
    duration: '4-6 days',
    distance: '50-80 km',
    elevation: '2,712 m (Jebel Amlal)',
    difficulty: 'Moderate',
    bestSeason: 'October-April (winter trekking)',
    price: 'From 4,000 MAD guided (5 days)',
    description:
      'Jebel Saghro is Morocco\'s best-kept trekking secret. This volcanic massif between the High Atlas and the Sahara offers dramatic rock formations, deep gorges, and a landscape that feels like another planet. Unlike the High Atlas, Saghro is at its best in winter when the higher mountains are snow-covered, making it a year-round trekking destination. The Ait Atta Berber people call these mountains home.',
    highlights: [
      'Spectacular volcanic rock formations and pinnacles',
      'Perfect winter trekking when the High Atlas has snow',
      'Encounter nomadic Ait Atta Berber communities',
      'Dramatic desert-meets-mountain landscape unlike anywhere else',
    ],
    tips: [
      'This is the ideal trek for November to March when other routes are closed',
      'Nights are cold in winter: bring a sleeping bag rated to minus 5 degrees',
      'Water sources are scarce; your guide will know where to refill',
      'Wind can be fierce on exposed ridges: pack a windproof layer',
    ],
  },
  {
    name: 'Todra Gorge',
    subtitle: 'Dramatic canyon walls rising 300 meters from the riverbed',
    icon: MapPin,
    image: '/images/hero-atlas-village.webp',
    region: 'Eastern High Atlas',
    duration: '1-2 days',
    distance: '10-20 km (day hikes)',
    elevation: '1,400-2,200 m',
    difficulty: 'Easy to Moderate',
    bestSeason: 'March-May, September-November',
    price: 'From 300 MAD independent day hike',
    description:
      'Todra Gorge is one of Morocco\'s most dramatic natural wonders: a narrow canyon where limestone walls soar 300 meters on either side, barely 10 meters apart at the narrowest point. While rock climbers flock here for the world-class routes, hikers enjoy the gorge floor walk and the network of trails climbing above the canyon to Berber villages perched on the clifftops. A perfect introduction to Atlas hiking.',
    highlights: [
      'Towering 300-meter limestone canyon walls',
      'Easy gorge floor walk accessible to all fitness levels',
      'Trails above the gorge to hidden Berber villages',
      'World-class rock climbing routes (150+ routes)',
      'Palm-lined river oasis at the gorge entrance',
    ],
    tips: [
      'Visit early morning for the best light and fewer crowds',
      'The gorge floor is flat and easy; the cliff-top trails are steeper',
      'Combine with nearby Dades Gorge for a two-gorge hiking day',
      'Rock climbing gear can be rented locally for experienced climbers',
    ],
  },
  {
    name: 'Rif Mountains',
    subtitle: 'Lush green peaks above the blue city of Chefchaouen',
    icon: Wind,
    image: '/images/hero-hiking-atlas.webp',
    region: 'Northern Morocco',
    duration: '2-4 days',
    distance: '15-50 km',
    elevation: '2,448 m (Jebel Tidiquin)',
    difficulty: 'Easy to Moderate',
    bestSeason: 'April-June, September-October',
    price: 'From 400 MAD per day guided',
    description:
      'The Rif Mountains are Morocco\'s green lung: lush cedar and pine forests, cascading waterfalls, wildflower meadows, and panoramic views of the Mediterranean coast. Based from the enchanting blue city of Chefchaouen, hikers can explore Talassemtane National Park, climb to the God\'s Bridge natural rock arch, and trek through landscapes that feel more like the Swiss Alps than North Africa. The Rif offers a completely different hiking experience from the Atlas.',
    highlights: [
      'Lush green forests of cedar, pine, and fir trees',
      'God\'s Bridge (Pont de Dieu) natural rock arch',
      'Akchour waterfalls: a popular and photogenic day hike',
      'Talassemtane National Park with endemic species',
    ],
    tips: [
      'Base yourself in Chefchaouen for easy access to multiple trails',
      'The Akchour waterfalls hike is the most popular: go early to avoid crowds',
      'Trails can be muddy after rain; waterproof boots are recommended',
      'Hire a local guide for anything beyond the main marked trails',
    ],
  },
  {
    name: 'Ouirgane Valley',
    subtitle: 'Gentle hills and Berber villages in the western High Atlas',
    icon: Heart,
    image: '/images/art-atlas-mountain-village.webp',
    region: 'Western High Atlas',
    duration: '1-3 days',
    distance: '8-25 km',
    elevation: '1,000-2,000 m',
    difficulty: 'Easy',
    bestSeason: 'Year-round (best March-May, October-November)',
    price: 'From 300 MAD independent, from 600 MAD guided',
    description:
      'Just 60 kilometers south of Marrakech, the Ouirgane Valley is the perfect introduction to Atlas hiking for beginners and families. Rolling hills dotted with olive and almond groves, quiet Berber villages where donkeys carry goods along ancient paths, and the sparkling Ouirgane reservoir create a gentle, pastoral landscape. Several excellent eco-lodges make this an ideal base for day walks without the commitment of a multi-day trek.',
    highlights: [
      'Only 60 km from Marrakech: easy day trip or overnight',
      'Gentle terrain suitable for families and beginners',
      'Authentic Berber villages with traditional hospitality',
      'Excellent eco-lodges and guesthouses for overnight stays',
    ],
    tips: [
      'Perfect for travelers who want Atlas scenery without a strenuous trek',
      'Combine with a visit to the Tin Mal Mosque (12th-century Almohad ruin)',
      'Local guides from the village offer the most authentic experience',
      'A great acclimatization walk before attempting Toubkal',
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DIFFICULTY RATINGS
   ═══════════════════════════════════════════════════════════════ */

const difficultyRatings = [
  {
    level: 'Easy',
    icon: Footprints,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    hours: '3-5 hours per day',
    fitness: 'Basic fitness, comfortable walking for 2-3 hours',
    terrain: 'Well-defined paths, gentle gradients, village trails',
    examples: 'Ouirgane Valley, Todra Gorge floor, Imlil day walks',
  },
  {
    level: 'Moderate',
    icon: TrendingUp,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    hours: '5-7 hours per day',
    fitness: 'Regular exercise, able to walk 5+ hours with a daypack',
    terrain: 'Mountain paths, some steep sections, uneven ground, possible river crossings',
    examples: 'Jebel Saghro, Rif Mountains, Toubkal (summer)',
  },
  {
    level: 'Challenging',
    icon: Mountain,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    hours: '7-10 hours per day',
    fitness: 'Strong fitness, hiking experience, comfortable at altitude',
    terrain: 'Steep ascents, high altitude (3,500+ m), scree, exposure, possible snow',
    examples: 'M\'Goun traverse, Toubkal (winter), multi-day High Atlas circuits',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GUIDED VS INDEPENDENT
   ═══════════════════════════════════════════════════════════════ */

const hikingStyles = [
  {
    style: 'Guided Group Trek',
    icon: Users,
    priceRange: 'From 800-1,500 MAD per day per person',
    groupSize: '4-12 trekkers',
    description:
      'Join a group with a licensed mountain guide, muleteers for luggage, a camp cook, and pre-arranged accommodation. The most popular and hassle-free way to trek in Morocco. Everything is organized: you just walk and enjoy.',
    includes: [
      'Licensed mountain guide (English or French speaking)',
      'Mule support for luggage and equipment',
      'All meals prepared by a camp cook',
      'Accommodation in gites, refuges, or tents',
      'Camping equipment if bivouacking',
    ],
    bestFor: 'First-time trekkers in Morocco, solo travelers, those wanting a social experience',
  },
  {
    style: 'Private Guided Trek',
    icon: Compass,
    priceRange: 'From 2,000-4,000 MAD per day (for the group)',
    groupSize: '1-6 trekkers (your own group)',
    description:
      'Your own dedicated guide and support team, with a fully customizable itinerary. Set your own pace, choose your route variations, and enjoy a more personal experience with deeper cultural immersion.',
    includes: [
      'Private licensed guide exclusively for your group',
      'Mule support and dedicated cook',
      'Flexible itinerary adjusted to your pace',
      'Choice of accommodation type',
      'All meals and camping equipment',
    ],
    bestFor: 'Couples, families, experienced trekkers wanting flexibility, photographers',
  },
  {
    style: 'Independent Hiking',
    icon: Footprints,
    priceRange: 'From 300-500 MAD per day (gite + meals)',
    groupSize: 'Solo or your own group',
    description:
      'Navigate trails yourself using maps, GPS tracks, and local knowledge. Possible on well-marked routes like the Toubkal standard path or Todra Gorge. Not recommended for remote multi-day routes where trails are unmarked and conditions change rapidly.',
    includes: [
      'Freedom to set your own pace and schedule',
      'Lower daily cost (accommodation and meals only)',
      'Guesthouses and refuges welcome independent hikers',
      'GPS tracks available for popular routes',
      'Village shops provide basic supplies',
    ],
    bestFor: 'Experienced hikers, well-marked routes only, budget travelers, day hikes near villages',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Footwear & Clothing',
    icon: Shirt,
    items: [
      { item: 'Sturdy hiking boots (ankle-supporting, broken in)', why: 'Rocky terrain demands ankle support; blisters ruin treks' },
      { item: 'Moisture-wicking base layers', why: 'Cotton retains sweat and causes chafing on long days' },
      { item: 'Insulating mid-layer (fleece or down)', why: 'Temperatures at altitude drop rapidly after sunset' },
      { item: 'Waterproof and windproof jacket', why: 'Weather changes quickly in the mountains; rain is possible in spring and autumn' },
      { item: 'Lightweight trekking trousers (zip-off)', why: 'Convertible for varying conditions; avoid shorts on thorny trails' },
      { item: 'Warm hat and sun hat', why: 'Sun is intense during the day; cold bites at altitude in the evening' },
      { item: 'Trekking socks (merino wool)', why: 'Prevent blisters and wick moisture better than cotton' },
    ],
  },
  {
    category: 'Gear & Equipment',
    icon: Backpack,
    items: [
      { item: 'Daypack (30-40 liters)', why: 'Carry water, snacks, layers, and camera for each day\'s hike' },
      { item: 'Trekking poles (collapsible)', why: 'Reduce knee strain on steep descents and improve stability on scree' },
      { item: 'Headlamp with spare batteries', why: 'Essential for pre-dawn summit starts and dark gites' },
      { item: 'Sleeping bag (rated to 0 degrees Celsius)', why: 'Mountain refuges provide mattresses but not always warm bedding' },
      { item: 'Refillable water bottle (1.5L minimum)', why: 'Stay hydrated at altitude; dehydration causes altitude sickness' },
      { item: 'Water purification tablets', why: 'Natural water sources may need treatment on remote trails' },
    ],
  },
  {
    category: 'Sun & Health',
    icon: Sun,
    items: [
      { item: 'Sunscreen SPF 50+', why: 'UV intensity increases 10% per 1,000 m of elevation gained' },
      { item: 'UV-protection sunglasses (Category 3+)', why: 'Snow glare and high-altitude sun can damage eyes permanently' },
      { item: 'Lip balm with SPF', why: 'Dry mountain air and sun crack lips within hours' },
      { item: 'First aid kit', why: 'Plasters, antiseptic, ibuprofen, altitude sickness medication, personal prescriptions' },
      { item: 'Insect repellent', why: 'Mosquitoes present near water sources in warmer valleys' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASON GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    tempDay: '15-25 C (valleys), 5-15 C (high altitude)',
    rating: 'Excellent',
    description:
      'The best overall season for hiking in Morocco. Wildflowers carpet the valleys, waterfalls flow with snowmelt, and temperatures are ideal for trekking at all elevations. April and May offer the widest range of accessible routes. Snow may linger on Toubkal until late May.',
    recommended: 'Ouirgane, Todra Gorge, Rif Mountains, lower Atlas routes',
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    tempDay: '30-40 C (valleys), 15-25 C (high altitude)',
    rating: 'Good (high altitude only)',
    description:
      'Too hot for low-elevation hikes but perfect for high-altitude trekking. This is prime Toubkal and M\'Goun season when snow has melted from the passes. Start early each day to avoid afternoon heat and thunderstorms. The Rif Mountains and Ouirgane are uncomfortably warm.',
    recommended: 'Toubkal summit, M\'Goun traverse, high passes above 3,000 m',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    tempDay: '18-28 C (valleys), 8-18 C (high altitude)',
    rating: 'Excellent',
    description:
      'Warm stable weather, fewer crowds than spring, and golden autumn light make this an ideal trekking season. October is arguably the single best month for hiking in Morocco. Jebel Saghro becomes accessible as temperatures cool. High passes remain snow-free until late November.',
    recommended: 'All routes at all elevations; Jebel Saghro starts in late October',
  },
  {
    season: 'Winter (December-February)',
    icon: Droplets,
    tempDay: '10-18 C (valleys), -5 to 5 C (high altitude)',
    rating: 'Limited (low altitude) to Advanced (high altitude)',
    description:
      'Snow covers the High Atlas above 2,500 meters, closing many passes and summit routes. However, Jebel Saghro and lower Todra Gorge hikes are at their best in winter: crisp, clear days with pleasant temperatures. Toubkal in winter is a serious mountaineering objective requiring technical gear.',
    recommended: 'Jebel Saghro, Todra Gorge, Ouirgane Valley, Anti-Atlas',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COSTS BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { item: 'Licensed mountain guide', cost: 'From 500-1,000 MAD per day', notes: 'Required for remote routes; recommended for all multi-day treks' },
  { item: 'Mule and muleteer', cost: 'From 200-350 MAD per day', notes: 'Carries up to 40 kg of gear and supplies per mule' },
  { item: 'Gite accommodation', cost: 'From 100-200 MAD per night', notes: 'Basic village guesthouse with mattress, blankets, and meals' },
  { item: 'Mountain refuge (Toubkal)', cost: 'From 150-250 MAD per night', notes: 'Dormitory bed; meals available from 80-150 MAD' },
  { item: 'Meals at gites', cost: 'From 60-120 MAD per meal', notes: 'Tagine, couscous, bread, and mint tea are standard fare' },
  { item: 'Transport to trailhead', cost: 'From 150-500 MAD', notes: 'Grand taxi from Marrakech to Imlil from 150-200 MAD' },
  { item: 'Toubkal National Park fee', cost: 'From 20 MAD per person', notes: 'Paid at the park entrance in Imlil' },
  { item: 'Tips for guide and muleteer', cost: 'From 100-200 MAD per day', notes: 'Customary; guides earn modest base wages' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does hiking in Morocco cost?',
    answer:
      'Budget independent hiking costs from 300-500 MAD per day for gite accommodation and meals. Guided group treks cost from 800-1,500 MAD per day per person, all-inclusive. The Toubkal 2-day guided trek costs from 2,500 MAD. Private guided treks run from 2,000-4,000 MAD per day for the entire group. Costs vary by season, group size, and route remoteness.',
  },
  {
    question: 'Do I need a guide for hiking in Morocco?',
    answer:
      'A guide is strongly recommended for multi-day treks, summit attempts, and remote routes where trails are unmarked. Day hikes near Imlil, Todra Gorge, and the Ouirgane Valley can be done independently. Licensed mountain guides cost from 500-1,000 MAD per day and provide navigation, cultural insight, and logistical support. For Toubkal, a guide is practically essential.',
  },
  {
    question: 'What is the best time of year for hiking in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) offer the best conditions: mild temperatures, clear skies, and the widest range of accessible routes. Summer (June-August) is ideal for high-altitude treks like Toubkal and M\'Goun. Winter (December-February) is perfect for Jebel Saghro and lower-elevation hikes, but the High Atlas has snow above 2,500 meters.',
  },
  {
    question: 'How difficult is the Toubkal trek?',
    answer:
      'The standard summer route is moderate to challenging. It takes 2 days: 5-6 hours hiking on day one to the refuge at 3,207 meters, then a 4-5 hour summit push to 4,167 meters and descent. No technical climbing is needed in summer. Good fitness, proper boots, and acclimatization are essential. In winter, it becomes a serious mountaineering route requiring crampons and ice axes.',
  },
  {
    question: 'Can beginners hike in Morocco?',
    answer:
      'Absolutely. Morocco has hikes for every level. Beginners should start with the Ouirgane Valley, Todra Gorge floor, or gentle day walks around Imlil. These require no technical skill and can be done independently or with a guide. Many guided group treks are paced for average fitness. Build up to Toubkal or the M\'Goun traverse after gaining confidence on easier routes.',
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
    description: 'Everything about the High Atlas, Middle Atlas, and Anti-Atlas: villages, passes, culture, and how to explore.',
  },
  {
    href: '/trekking',
    icon: Footprints,
    title: 'Trekking in Morocco',
    description: 'Detailed trekking routes, multi-day itineraries, and trail maps across Morocco\'s diverse landscapes.',
  },
  {
    href: '/national-parks',
    icon: Globe,
    title: 'Morocco National Parks Guide',
    description: 'Toubkal, Talassemtane, Ifrane, and more: Morocco\'s protected areas and the best trails within them.',
  },
  {
    href: '/best-time-visit-morocco',
    icon: Calendar,
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month climate guide to help you choose the perfect time for your hiking trip.',
  },
  {
    href: '/morocco-road-trip-routes',
    icon: Route,
    title: 'Morocco Road Trip Routes',
    description: 'Self-drive itineraries that combine hiking trailheads with scenic drives across the Atlas and beyond.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoHikingGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-hiking-atlas.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Hiking Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            Hiking &amp; Trekking in Morocco
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Hiking Guide:
            <br className="hidden md:block" /> Best Treks &amp; Trails 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the summit of Toubkal at 4,167 meters to gentle valley walks near Marrakech. Difficulty ratings,
            guided vs independent options, packing lists, and costs from 300 MAD per day.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Hiking in Morocco Is Extraordinary
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is one of the most diverse hiking destinations on earth. Within a few hours&apos; drive you
                can move from the snow-capped peaks of the High Atlas, where North Africa&apos;s highest summit
                pierces the sky at 4,167 meters, to volcanic desert mountains where the Sahara begins, to lush
                green forests in the Rif where waterfalls cascade through cedar groves. No other country in North
                Africa offers such variety of terrain, altitude, and landscape in such a compact area.
              </p>
              <p>
                What makes Moroccan hiking truly special is the human dimension. Trails pass through ancient
                Berber villages where hospitality is a way of life, not a tourism product. You will be invited for
                mint tea by families who have lived in these mountains for generations. Mule trains carry your gear
                while you walk unburdened through gorges, over passes, and across high plateaus that feel like the
                roof of the world. Whether you are a seasoned mountaineer targeting Toubkal in winter or a
                first-time hiker seeking a gentle valley walk, Morocco has a trail waiting for you.
              </p>
              <p>
                This guide covers the six best hikes in Morocco, from multi-day traverses to easy day walks.
                You will find difficulty ratings, guided versus independent options, a complete packing list,
                the best season for each trek, a detailed cost breakdown, and answers to every common question
                about hiking in Morocco.
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
              <div className="text-sm text-[var(--text-muted)]">Highest peak (Toubkal)</div>
            </div>
            <div className="text-center">
              <Route className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">6 Regions</div>
              <div className="text-sm text-[var(--text-muted)]">Distinct trekking areas</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">300 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting cost per day</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Year-round</div>
              <div className="text-sm text-[var(--text-muted)]">Trekking season (varies by area)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Hikes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Mountain className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top 6 Hikes in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From North Africa&apos;s highest summit to gentle valley strolls, these are the essential hikes every
            trekker should know about.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and costs may vary by group size and guide.
          </p>

          <div className="space-y-12">
            {topHikes.map((hike) => {
              const HikeIcon = hike.icon;
              return (
                <div key={hike.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56 md:h-64">
                    <img
                      src={hike.image}
                      alt={`${hike.name} hiking trail in the ${hike.region}, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <HikeIcon className="w-6 h-6" />
                        {hike.name}
                      </h3>
                      <p className="text-sm text-white/80 mt-1">{hike.subtitle}</p>
                    </div>
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                      {hike.difficulty}
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Key stats grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Clock className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Duration</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{hike.duration}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <Footprints className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Distance</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{hike.distance}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <TrendingUp className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Elevation</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{hike.elevation}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                        <DollarSign className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                        <div className="text-xs text-[var(--text-muted)]">Price</div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">{hike.price}</div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">{hike.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                          Highlights
                        </h4>
                        <div className="space-y-2">
                          {hike.highlights.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                          <Info className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
                          Trail Tips
                        </h4>
                        <div className="space-y-2">
                          {hike.tips.map((tip, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                              {tip}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[var(--border-primary)] flex flex-wrap gap-4 text-xs text-[var(--text-muted)]">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {hike.region}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {hike.bestSeason}</span>
                      <span className="flex items-center gap-1"><Gauge className="w-3 h-3" /> {hike.difficulty}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Difficulty Ratings ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gauge className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Difficulty Ratings Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choose the right trek for your fitness level. Morocco has hikes for absolute beginners through to
            experienced mountaineers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {difficultyRatings.map((rating) => {
              const RatingIcon = rating.icon;
              return (
                <div key={rating.level} className={`card-moroccan p-6 border-t-4 ${rating.borderColor}`}>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${rating.bgColor} ${rating.color} text-sm font-bold mb-4`}>
                    <RatingIcon className="w-4 h-4" />
                    {rating.level}
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">Daily Hiking Time</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{rating.hours}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">Fitness Required</div>
                      <div className="text-sm text-[var(--text-secondary)]">{rating.fitness}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">Terrain</div>
                      <div className="text-sm text-[var(--text-secondary)]">{rating.terrain}</div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--text-muted)] mb-1">Example Routes</div>
                      <div className="text-sm text-[var(--color-accent)] font-medium">{rating.examples}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Guided vs Independent ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided vs Independent Hiking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three ways to hike Morocco, each with distinct advantages. Your choice depends on experience, budget,
            and the route you want to tackle.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {hikingStyles.map((style) => {
              const StyleIcon = style.icon;
              return (
                <div key={style.style} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-5 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <StyleIcon className="w-5 h-5" />
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">{style.style}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{style.priceRange}</p>
                    <p className="text-white/70 text-xs mt-1">Group: {style.groupSize}</p>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{style.description}</p>
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Includes</h4>
                    <div className="space-y-1.5 mb-4">
                      {style.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="pt-3 border-t border-[var(--border-primary)]">
                      <div className="text-xs text-[var(--text-muted)]">
                        <strong className="text-[var(--text-primary)]">Best for:</strong> {style.bestFor}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Our Recommendation
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    If this is your first trek in Morocco, choose a <strong>guided group trek</strong>. The cost is
                    reasonable (from 800 MAD per day all-inclusive), the logistics are handled for you, and walking
                    with a knowledgeable local guide transforms a good hike into an unforgettable cultural experience.
                    Save independent hiking for well-marked day routes or after you have gained experience on Moroccan trails.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring for hiking in Morocco. Adjust based on season, altitude, and trek duration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packingList.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <CatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item, i) => (
                      <div key={i}>
                        <div className="flex items-start gap-2 text-sm font-medium text-[var(--text-primary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                          {item.item}
                        </div>
                        <p className="text-xs text-[var(--text-muted)] ml-5 mt-0.5">{item.why}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Hiking in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco offers year-round trekking, but the best route for you depends entirely on the season.
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
                      <strong className="text-[var(--color-accent)]">Recommended routes:</strong> {season.recommended}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Costs Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Hiking Costs Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A detailed breakdown of what hiking in Morocco costs. Prices are starting figures and may vary by season,
            route, group size, and negotiation.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="bg-[var(--color-accent)] p-4 text-white">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>Item</span>
                <span>Cost</span>
                <span>Notes</span>
              </div>
            </div>
            <div className="divide-y divide-[var(--border-primary)]">
              {costBreakdown.map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 p-4 text-sm">
                  <span className="font-medium text-[var(--text-primary)]">{row.item}</span>
                  <span className="text-[var(--color-accent)] font-bold">{row.cost}</span>
                  <span className="text-[var(--text-muted)] text-xs">{row.notes}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="card-moroccan p-5 text-center">
              <Footprints className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Budget (Independent)</div>
              <div className="text-lg font-bold text-[var(--color-accent)] font-[family-name:var(--font-display)]">From 300-500 MAD/day</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Gite + meals, self-guided</div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Users className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Mid-Range (Guided Group)</div>
              <div className="text-lg font-bold text-[var(--color-gold)] font-[family-name:var(--font-display)]">From 800-1,500 MAD/day</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Guide, mules, meals, accommodation</div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Award className="w-6 h-6 text-[var(--color-gold)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Premium (Private Guide)</div>
              <div className="text-lg font-bold text-[var(--color-gold)] font-[family-name:var(--font-display)]">From 2,000-4,000 MAD/day</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">Private guide, full flexibility</div>
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
            Everything you need to know about hiking in Morocco, answered by experienced trekkers.
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
            Continue planning your Morocco hiking adventure with these in-depth guides.
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
            Ready to Hike Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From the summit of Toubkal to gentle valley walks, Morocco&apos;s trails are calling. Start planning
            your trek with our detailed guides, or explore more of what this extraordinary country has to offer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas Mountains
            </Link>
            <Link
              href="/trekking"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Route className="w-5 h-5" />
              View All Trekking Routes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

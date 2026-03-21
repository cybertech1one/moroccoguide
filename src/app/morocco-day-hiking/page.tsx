import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Mountain,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Footprints,
  Compass,
  Sun,
  CloudRain,
  Backpack,
  TrendingUp,
  Route,
  Droplets,
  Camera,
  Calendar,
  HelpCircle,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Day Hikes in Morocco 2026 | Atlas Mountains, Gorges & Coastal Trails',
  description:
    'Discover the 15 best day hikes in Morocco, from Toubkal base camp and Ourika Valley in the Atlas Mountains to Todra Gorge, Akchour waterfalls, and coastal trails near Agadir. Difficulty ratings, guide requirements, gear lists, and seasonal advice.',
  keywords: [
    'morocco day hikes',
    'hiking morocco',
    'atlas mountains day hike',
    'morocco trekking day trips',
    'toubkal day hike',
    'ourika valley hike',
    'ouzoud falls trail',
    'akchour waterfalls hike',
    'todra gorge hiking',
    'dades gorge trail',
    'paradise valley agadir',
    'morocco hiking guide 2026',
    'atlas mountains trekking',
    'morocco gorge hikes',
    'morocco coastal trails',
    'best hikes morocco',
    'morocco outdoor activities',
    'day trekking morocco',
    'morocco hiking difficulty',
    'morocco hiking season',
    'chefchaouen hiking',
    'imlil hiking',
  ],
  openGraph: {
    title: 'Best Day Hikes in Morocco 2026 | Atlas Mountains, Gorges & Coastal Trails',
    description:
      'The 15 best day hikes in Morocco with difficulty ratings, guide info, gear lists, and seasonal advice. From Atlas peaks to desert gorges and coastal paths.',
    url: `${BASE_URL}/morocco-day-hiking`,
    images: [
      {
        url: `${BASE_URL}/images/hero-hiking.webp`,
        width: 1200,
        height: 630,
        alt: 'Hikers on a trail in the High Atlas Mountains of Morocco with snow-capped peaks in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Hikes in Morocco 2026 | 15 Trails You Must Walk',
    description:
      'From Toubkal base camp to Todra Gorge and Paradise Valley. The definitive guide to day hiking in Morocco with difficulty ratings and practical tips.',
    images: [`${BASE_URL}/images/hero-hiking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-day-hiking` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-day-hiking`,
  name: 'Best Day Hikes in Morocco 2026 | Atlas Mountains, Gorges & Coastal Trails',
  description:
    'Comprehensive guide to the 15 best day hikes in Morocco, covering Atlas Mountains, gorges, waterfalls, and coastal trails with difficulty ratings and practical information.',
  url: `${BASE_URL}/morocco-day-hiking`,
  image: `${BASE_URL}/images/hero-hiking.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-day-hiking`,
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
      { '@type': 'ListItem', position: 2, name: 'Day Hikes in Morocco', item: `${BASE_URL}/morocco-day-hiking` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a guide for day hiking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For well-marked trails like Ourika Valley and Ouzoud Falls, a guide is optional. For Atlas Mountain hikes above 2,500m, remote gorge routes, and the Toubkal base camp trail, hiring a licensed mountain guide is strongly recommended for safety and navigation. Guides typically cost from 300 to 600 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season for hiking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) and autumn (September to November) offer the best hiking conditions. Summer is too hot for desert gorges and low-altitude trails, though high Atlas routes above 2,500m remain pleasant. Winter brings snow to peaks above 2,000m but is fine for coastal and gorge hikes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a day hike in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many trails are free to access. Licensed mountain guides charge from 300 to 600 MAD per day. Mule hire for gear costs from 200 MAD. National park entry fees range from 20 to 40 MAD. A guided day trip from Marrakech to the Atlas Mountains typically costs from 400 to 800 MAD per person including transport.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners hike in the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Several Atlas trails suit beginners, including the Ourika Valley walk, the path to Setti Fatma waterfalls, and the lower sections of the Imlil Valley. These routes follow clear paths, gain moderate elevation, and can be completed in 3 to 5 hours. A reasonable level of fitness is sufficient.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gear do I need for a day hike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential gear includes sturdy hiking boots with ankle support, a daypack (20-30L), 2-3 liters of water, sun hat, sunscreen SPF 50+, sunglasses, layers for temperature changes, and a basic first aid kit. For gorge hikes, bring water-resistant footwear. Trekking poles are helpful on steep Atlas terrain.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco hiking trails well marked?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Trail marking varies significantly. Popular routes like Toubkal, Ourika, and Ouzoud have visible paths and occasional paint markers. More remote trails in the Anti-Atlas and lesser-visited gorges have minimal signage. Downloading offline maps (Maps.me or AllTrails) and hiring a local guide for unmarked routes is advisable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to hike alone in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Popular trails near tourist hubs (Imlil, Ourika, Ouzoud) are generally safe for solo hikers during daylight hours. Remote mountain and desert routes should not be attempted alone due to navigation challenges and lack of mobile coverage. Women traveling solo report positive experiences on busy trails but may prefer a guide for isolated areas.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP 15 DAY HIKES
   ═══════════════════════════════════════════════════════════════ */

const dayHikes = [
  {
    rank: 1,
    name: 'Toubkal Base Camp from Imlil',
    region: 'High Atlas',
    icon: Mountain,
    difficulty: 'Moderate-Hard',
    distance: '12 km round trip',
    duration: '6-7 hours',
    elevation: '1,740m to 3,207m',
    guideRequired: 'Recommended',
    price: 'From 400 MAD with guide',
    bestSeason: 'April to October',
    description:
      'The most popular high-altitude day hike in North Africa. Starting from the Berber village of Imlil (1,740m), the trail climbs through walnut groves and terraced fields to the Toubkal refuge at 3,207m. The path is well-worn but steep in sections, with expansive views of the High Atlas ridgeline opening up after the first hour. Most hikers stop at the refuge for mint tea before descending.',
    highlights: ['Berber village scenery', 'Refuge du Toubkal views', 'Walnut grove trail sections', 'Mule support available'],
  },
  {
    rank: 2,
    name: 'Ourika Valley Walk',
    region: 'High Atlas',
    icon: Droplets,
    difficulty: 'Easy-Moderate',
    distance: '6 km round trip',
    duration: '3-4 hours',
    elevation: '1,000m to 1,500m',
    guideRequired: 'Optional',
    price: 'Free (guide from 300 MAD)',
    bestSeason: 'March to November',
    description:
      'A gentle valley walk just 45 minutes from Marrakech, following the Ourika River through Berber settlements. The trail passes through irrigated terraces growing saffron and medicinal herbs, with several riverside cafes offering tagine lunches. The final stretch climbs to a series of small cascades where locals swim in summer months.',
    highlights: ['Riverside path', 'Berber village stops', 'Seasonal wildflowers', 'Easy access from Marrakech'],
  },
  {
    rank: 3,
    name: 'Ouzoud Falls Trail',
    region: 'Middle Atlas',
    icon: Droplets,
    difficulty: 'Easy',
    distance: '4 km loop',
    duration: '2-3 hours',
    elevation: '300m gain',
    guideRequired: 'No',
    price: 'Free access',
    bestSeason: 'Year-round (best March-June)',
    description:
      'Morocco\'s tallest waterfalls at 110 meters, set in a red canyon surrounded by olive groves. The well-maintained trail descends to the base of the falls where rainbow mist hangs in the air during spring flow. Barbary macaques live in the surrounding trees and are commonly seen along the path. Boat rides at the base cost from 20 MAD.',
    highlights: ['110m waterfall', 'Barbary macaque sightings', 'Rainbow mist in spring', 'Boat rides at the base'],
  },
  {
    rank: 4,
    name: 'Akchour Waterfalls from Chefchaouen',
    region: 'Rif Mountains',
    icon: Droplets,
    difficulty: 'Moderate',
    distance: '10 km round trip',
    duration: '5-6 hours',
    elevation: '600m gain',
    guideRequired: 'Optional',
    price: 'From 10 MAD park entry',
    bestSeason: 'April to October',
    description:
      'A rewarding trail through the Talassemtane National Park, starting 30 minutes from Chefchaouen. The path follows a turquoise river to the small waterfall (1.5 hours) and continues to the grand waterfall (3 hours). The trail includes rock scrambling, river crossings on stepping stones, and sections carved into cliff faces. The natural rock bridge of God\'s Bridge lies on a separate fork.',
    highlights: ['Turquoise river pools', 'Two distinct waterfalls', 'God\'s Bridge rock arch', 'National park setting'],
  },
  {
    rank: 5,
    name: 'Todra Gorge Walk',
    region: 'Eastern High Atlas',
    icon: Route,
    difficulty: 'Easy-Moderate',
    distance: '8 km round trip',
    duration: '3-4 hours',
    elevation: '200m gain',
    guideRequired: 'Optional',
    price: 'Free access',
    bestSeason: 'October to May',
    description:
      'Walking between 300-meter-high limestone walls that narrow to just 10 meters apart, Todra Gorge is among the most dramatic landscapes in Morocco. The main trail follows the gorge floor along the river, then climbs to Berber villages perched on the canyon rim. The early morning light turns the rock faces orange and pink. Rock climbers scale the walls year-round.',
    highlights: ['300m canyon walls', 'Morning light photography', 'Rock climbing spectating', 'Riverside walking'],
  },
  {
    rank: 6,
    name: 'Dades Gorge Circuit',
    region: 'Eastern High Atlas',
    icon: Route,
    difficulty: 'Moderate',
    distance: '14 km loop',
    duration: '5-6 hours',
    elevation: '500m gain',
    guideRequired: 'Recommended',
    price: 'From 350 MAD with guide',
    bestSeason: 'October to May',
    description:
      'The Dades Gorge trail loops through layered sandstone formations that geologists call "monkey fingers" for their tall, eroded pillars. Starting from the main road near the famous hairpin bends, the trail crosses the Dades River and climbs to a plateau with panoramic views of the gorge below. Several Berber families along the route offer tea and homemade bread.',
    highlights: ['Monkey finger rock formations', 'Hairpin bend viewpoint', 'Berber hospitality en route', 'Layered geology'],
  },
  {
    rank: 7,
    name: 'Paradise Valley Trail',
    region: 'Souss-Massa (near Agadir)',
    icon: Sun,
    difficulty: 'Easy-Moderate',
    distance: '5 km round trip',
    duration: '3-4 hours',
    elevation: '250m gain',
    guideRequired: 'No',
    price: 'From 20 MAD parking',
    bestSeason: 'March to November',
    description:
      'A series of natural swimming pools connected by a trail through a palm-lined canyon, 30 minutes north of Agadir. The turquoise rock pools are fed by mountain springs and range from shallow wading spots to deep swimming holes surrounded by smooth boulders. Locals offer cliff jumping guidance at the deeper pools. The trail involves some rock scrambling but nothing technical.',
    highlights: ['Natural swimming pools', 'Palm-lined canyon', 'Cliff jumping spots', 'Short drive from Agadir'],
  },
  {
    rank: 8,
    name: 'Cascades de Setti Fatma',
    region: 'High Atlas (Ourika Valley)',
    icon: Droplets,
    difficulty: 'Moderate',
    distance: '5 km round trip',
    duration: '3-4 hours',
    elevation: '400m gain',
    guideRequired: 'Recommended for upper falls',
    price: 'From 100 MAD local guide tip',
    bestSeason: 'March to October',
    description:
      'Seven waterfalls stacked above the village of Setti Fatma at the head of the Ourika Valley. The trail to the first two falls is straightforward, crossing the river on stepping stones. Reaching the upper falls requires scrambling up wet rock with the help of local guides who know the handholds. Each cascade feeds a pool where hikers cool off between climbs.',
    highlights: ['Seven tiered waterfalls', 'Natural swimming pools', 'Village lunch stops', 'River crossings'],
  },
  {
    rank: 9,
    name: 'Tizi n\'Test Pass Trail',
    region: 'High Atlas',
    icon: TrendingUp,
    difficulty: 'Hard',
    distance: '16 km point-to-point',
    duration: '7-8 hours',
    elevation: '2,092m pass',
    guideRequired: 'Yes',
    price: 'From 500 MAD with guide',
    bestSeason: 'May to October',
    description:
      'One of the great mountain pass trails of North Africa, crossing the High Atlas at 2,092 meters. The route follows ancient trade paths used by caravans traveling between Marrakech and the Souss Valley. The trail passes through juniper forests, crosses high pastures where semi-nomadic families graze sheep, and reaches a viewpoint overlooking the Souss plain stretching to the Atlantic.',
    highlights: ['Historic caravan route', 'Juniper forest sections', 'Souss Valley panorama', 'Remote mountain pass'],
  },
  {
    rank: 10,
    name: 'Ait Bouguemez Valley Circuit',
    region: 'Central High Atlas',
    icon: Compass,
    difficulty: 'Moderate',
    distance: '12 km loop',
    duration: '5-6 hours',
    elevation: '450m gain',
    guideRequired: 'Recommended',
    price: 'From 350 MAD with guide',
    bestSeason: 'April to November',
    description:
      'Known as the "Happy Valley," Ait Bouguemez is a broad, fertile valley ringed by 3,000-meter peaks. The day circuit links several traditional Berber villages built from rammed earth, passing through irrigated barley fields and apple orchards. Dinosaur footprints are embedded in a rock outcrop midway along the route. The valley sees fewer tourists than Imlil, preserving its rural character.',
    highlights: ['Dinosaur footprint site', 'Traditional earth architecture', 'Apple orchard walks', 'Quiet alternative to Imlil'],
  },
  {
    rank: 11,
    name: 'Jebel Zagora Sunrise Hike',
    region: 'Draa Valley',
    icon: Sun,
    difficulty: 'Moderate',
    distance: '6 km round trip',
    duration: '3-4 hours',
    elevation: '500m gain',
    guideRequired: 'Optional',
    price: 'Free access',
    bestSeason: 'October to April',
    description:
      'A pre-dawn hike up the rocky hill overlooking Zagora, the gateway town to the Sahara. The summit reveals a 360-degree panorama of the Draa Valley oasis, its palm groves stretching along the river, and the hammada desert beyond. The famous "Timbuktu 52 jours" sign sits at the base. The ascent follows a clear path with some loose rock sections near the top.',
    highlights: ['Sahara edge panorama', 'Draa Valley sunrise', 'Palm grove views', 'Desert landscape transition'],
  },
  {
    rank: 12,
    name: 'Cap Spartel Coastal Walk',
    region: 'Tangier Peninsula',
    icon: Compass,
    difficulty: 'Easy',
    distance: '7 km one-way',
    duration: '2-3 hours',
    elevation: 'Minimal',
    guideRequired: 'No',
    price: 'From 50 MAD Caves of Hercules entry',
    bestSeason: 'Year-round',
    description:
      'A coastal path from the Cap Spartel lighthouse, where the Atlantic meets the Mediterranean, south along clifftop trails to the Caves of Hercules. The walk follows a mixture of sandy paths and rocky headlands with views across the Strait of Gibraltar to Spain. The Caves of Hercules feature a sea-facing opening shaped like the map of Africa. Whale watching is possible during spring migration.',
    highlights: ['Atlantic-Mediterranean meeting point', 'Caves of Hercules', 'Views of Spain', 'Lighthouse starting point'],
  },
  {
    rank: 13,
    name: 'Ifrane Cedar Forest Loop',
    region: 'Middle Atlas',
    icon: Mountain,
    difficulty: 'Easy',
    distance: '8 km loop',
    duration: '3-4 hours',
    elevation: '200m gain',
    guideRequired: 'No',
    price: 'Free access',
    bestSeason: 'Year-round',
    description:
      'A gentle forest walk through the Cedre Gouraud forest near Ifrane, home to some of Morocco\'s oldest Atlas cedar trees, several over 800 years old. The trail loops through the forest at 1,650 meters altitude where the air is cool even in summer. Barbary macaques are abundant and accustomed to hikers. The nearby town of Ifrane, built in French Alpine style, makes an unusual contrast.',
    highlights: ['800-year-old cedar trees', 'Barbary macaque habitat', 'Cool summer temperatures', 'French Alpine town nearby'],
  },
  {
    rank: 14,
    name: 'Imi n\'Ifri Natural Bridge',
    region: 'Middle Atlas',
    icon: Route,
    difficulty: 'Easy',
    distance: '4 km round trip',
    duration: '2 hours',
    elevation: '150m gain',
    guideRequired: 'No',
    price: 'From 10 MAD site entry',
    bestSeason: 'Year-round',
    description:
      'A short walk to one of Morocco\'s most unusual geological formations: a massive natural rock bridge spanning a river gorge near Demnate. The bridge is 30 meters high and covered with stalactites on its underside. The trail descends into the gorge where the river flows beneath the arch, with nesting storks visible on the cliffs above during spring. A swimming pool forms below the bridge in wet months.',
    highlights: ['30m natural rock bridge', 'Stalactite formations', 'Nesting stork colony', 'River gorge swimming'],
  },
  {
    rank: 15,
    name: 'Tafraout Painted Rocks Circuit',
    region: 'Anti-Atlas',
    icon: Camera,
    difficulty: 'Easy-Moderate',
    distance: '9 km loop',
    duration: '4-5 hours',
    elevation: '300m gain',
    guideRequired: 'Optional',
    price: 'Free access',
    bestSeason: 'October to April',
    description:
      'A loop trail through the granite boulder landscape near Tafraout, passing the famous painted rocks created by Belgian artist Jean Verame in 1984. The massive boulders, painted in vivid blues and reds, sit among naturally pink and orange granite formations. The trail continues through almond groves that bloom white and pink in February, with views of the Ameln Valley and its cliff-perched villages.',
    highlights: ['Jean Verame painted boulders', 'Almond blossom in February', 'Granite boulder landscape', 'Ameln Valley views'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ESSENTIAL GEAR
   ═══════════════════════════════════════════════════════════════ */

const essentialGear = [
  { item: 'Hiking boots with ankle support', note: 'Broken-in before your trip; essential for rocky Atlas terrain' },
  { item: 'Daypack (20-30 liters)', note: 'With hip belt for comfort on longer hikes' },
  { item: 'Water (2-3 liters minimum)', note: 'No reliable water sources on most trails; carry purification tablets as backup' },
  { item: 'Sun hat and sunglasses', note: 'UV intensity is high at altitude; polarized lenses help on reflective rock' },
  { item: 'Sunscreen SPF 50+', note: 'Reapply every 2 hours; altitude increases UV exposure significantly' },
  { item: 'Layering system', note: 'Temperature can drop 10-15 degrees from valley to ridge; bring a fleece and wind shell' },
  { item: 'Trekking poles', note: 'Highly recommended for steep descents and river crossings; collapsible for transport' },
  { item: 'First aid kit', note: 'Blister plasters, antiseptic, pain relief, anti-diarrhea medication, and elastic bandage' },
  { item: 'Headlamp', note: 'Essential for early starts and in case a hike runs longer than expected' },
  { item: 'Offline maps', note: 'Download Maps.me or AllTrails maps; mobile coverage is unreliable on mountain trails' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Droplets,
    conditions: 'Wildflowers across the Atlas, waterfalls at peak flow, comfortable temperatures at all altitudes. Snow remains on passes above 3,000m through April.',
    bestFor: 'Ourika Valley, Ouzoud Falls, Akchour, Setti Fatma, Tafraout almond trails',
    avoid: 'High passes may still be snow-covered in March',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    conditions: 'Hot at low elevations (40+ degrees in gorges). High Atlas above 2,500m remains pleasant at 20-25 degrees. Dry conditions throughout.',
    bestFor: 'Toubkal base camp, high Atlas passes, Ifrane cedar forest, Paradise Valley swimming',
    avoid: 'Todra Gorge, Dades Gorge, Jebel Zagora, any low-altitude desert trails',
  },
  {
    season: 'Autumn (September-November)',
    icon: CloudRain,
    conditions: 'Temperatures cool, gorges become comfortable again. October is arguably the best overall month. Occasional rain begins in November.',
    bestFor: 'All 15 hikes are accessible; the widest seasonal window for hiking in Morocco',
    avoid: 'Late November flash flood risk in narrow gorges after rain',
  },
  {
    season: 'Winter (December-February)',
    icon: Thermometer,
    conditions: 'Snow on Atlas peaks above 2,000m. Desert and coastal trails are pleasant. Short daylight hours limit longer hikes.',
    bestFor: 'Cap Spartel, Todra Gorge, Dades Gorge, Tafraout, Imi n\'Ifri',
    avoid: 'Toubkal base camp, Tizi n\'Test, Ait Bouguemez (snow and ice)',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DIFFICULTY SCALE
   ═══════════════════════════════════════════════════════════════ */

const difficultyScale = [
  { level: 'Easy', color: 'text-green-700 bg-green-50', description: 'Well-maintained paths, minimal elevation gain, suitable for all fitness levels including families with children.' },
  { level: 'Easy-Moderate', color: 'text-emerald-700 bg-emerald-50', description: 'Clear trails with some uneven terrain and moderate elevation gain. Basic fitness required.' },
  { level: 'Moderate', color: 'text-amber-700 bg-amber-50', description: 'Sustained climbing, rocky sections, possible river crossings. Regular exercise recommended.' },
  { level: 'Moderate-Hard', color: 'text-orange-700 bg-orange-50', description: 'Significant elevation gain, steep sections, altitude effects possible. Good fitness essential.' },
  { level: 'Hard', color: 'text-red-700 bg-red-50', description: 'Long distance, high altitude, exposed sections, and remote terrain. Strong fitness and hiking experience required.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqData = [
  {
    question: 'Do I need a guide for day hiking in Morocco?',
    answer: 'For well-marked trails like Ourika Valley and Ouzoud Falls, a guide is optional. For Atlas Mountain hikes above 2,500m, remote gorge routes, and the Toubkal base camp trail, hiring a licensed mountain guide is strongly recommended for safety and navigation. Guides typically cost from 300 to 600 MAD per day.',
  },
  {
    question: 'What is the best season for hiking in Morocco?',
    answer: 'Spring (March to May) and autumn (September to November) offer the best hiking conditions. Summer is too hot for desert gorges and low-altitude trails, though high Atlas routes above 2,500m remain pleasant. Winter brings snow to peaks above 2,000m but is fine for coastal and gorge hikes.',
  },
  {
    question: 'How much does a day hike in Morocco cost?',
    answer: 'Many trails are free to access. Licensed mountain guides charge from 300 to 600 MAD per day. Mule hire for gear costs from 200 MAD. National park entry fees range from 20 to 40 MAD. A guided day trip from Marrakech to the Atlas Mountains typically costs from 400 to 800 MAD per person including transport.',
  },
  {
    question: 'Can beginners hike in the Atlas Mountains?',
    answer: 'Yes. Several Atlas trails suit beginners, including the Ourika Valley walk, the path to Setti Fatma waterfalls, and the lower sections of the Imlil Valley. These routes follow clear paths, gain moderate elevation, and can be completed in 3 to 5 hours. A reasonable level of fitness is sufficient.',
  },
  {
    question: 'What gear do I need for a day hike in Morocco?',
    answer: 'Essential gear includes sturdy hiking boots with ankle support, a daypack (20-30L), 2-3 liters of water, sun hat, sunscreen SPF 50+, sunglasses, layers for temperature changes, and a basic first aid kit. For gorge hikes, bring water-resistant footwear. Trekking poles are helpful on steep Atlas terrain.',
  },
  {
    question: 'Are Morocco hiking trails well marked?',
    answer: 'Trail marking varies significantly. Popular routes like Toubkal, Ourika, and Ouzoud have visible paths and occasional paint markers. More remote trails in the Anti-Atlas and lesser-visited gorges have minimal signage. Downloading offline maps (Maps.me or AllTrails) and hiring a local guide for unmarked routes is advisable.',
  },
  {
    question: 'Is it safe to hike alone in Morocco?',
    answer: 'Popular trails near tourist hubs (Imlil, Ourika, Ouzoud) are generally safe for solo hikers during daylight hours. Remote mountain and desert routes should not be attempted alone due to navigation challenges and lack of mobile coverage. Women traveling solo report positive experiences on busy trails but may prefer a guide for isolated areas.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Morocco Camping Guide', href: '/morocco-camping-guide', description: 'Wild camping, glamping sites, and overnight Atlas treks' },
  { title: 'Morocco Weather Guide', href: '/morocco-weather-guide', description: 'Monthly climate data and what to expect across regions' },
  { title: 'Morocco Packing List', href: '/morocco-packing-list', description: 'Complete packing guide for every type of Morocco trip' },
  { title: 'Morocco Safety Tips', href: '/morocco-safety-tips', description: 'Staying safe in cities, mountains, and the desert' },
  { title: 'Morocco Transport Guide', href: '/morocco-transport-guide', description: 'Getting to trailheads by bus, taxi, and rental car' },
  { title: 'Marrakech City Guide', href: '/marrakech', description: 'Base yourself here for Atlas Mountain day hikes' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   HELPER: Difficulty Badge
   ═══════════════════════════════════════════════════════════════ */

function getDifficultyStyle(difficulty: string) {
  if (difficulty === 'Easy') return 'text-green-700 bg-green-50 border-green-200';
  if (difficulty === 'Easy-Moderate') return 'text-emerald-700 bg-emerald-50 border-emerald-200';
  if (difficulty === 'Moderate') return 'text-amber-700 bg-amber-50 border-amber-200';
  if (difficulty === 'Moderate-Hard') return 'text-orange-700 bg-orange-50 border-orange-200';
  if (difficulty === 'Hard') return 'text-red-700 bg-red-50 border-red-200';
  return 'text-gray-700 bg-gray-50 border-gray-200';
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDayHikingPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-stone-800 via-stone-700 to-amber-900">
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 text-center py-20 px-4">
          <p className="text-amber-300 font-[family-name:var(--font-heading)] text-sm tracking-widest uppercase mb-4">
            Morocco Outdoor Guide 2026
          </p>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Best Day Hikes in Morocco
          </h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-heading)]">
            From the snow-capped peaks of the High Atlas to red sandstone gorges and Atlantic cliff paths.
            15 day hikes with difficulty ratings, guide requirements, gear lists, and seasonal advice.
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ──────────────────────────────────────── */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-stone-200">
        <div className="container-morocco py-3 px-4">
          <ol className="flex items-center gap-2 text-sm text-stone-500 font-[family-name:var(--font-heading)]">
            <li className="flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[#A0522D] font-medium">Day Hikes in Morocco</li>
          </ol>
        </div>
      </nav>

      <main className="bg-[#FAF8F5]">

        {/* ── INTRO ────────────────────────────────────────────── */}
        <section className="container-morocco py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-6">
              Why Morocco Is a Day Hiker&apos;s Destination
            </h2>
            <div className="prose prose-stone max-w-none font-[family-name:var(--font-heading)] text-stone-600 leading-relaxed space-y-4">
              <p>
                Morocco packs an extraordinary range of terrain into a country the size of California. Within a few hours of Marrakech, you can walk through 4,000-meter mountain passes, swim in waterfall pools, or follow gorge trails between 300-meter canyon walls. The High Atlas, Middle Atlas, Rif Mountains, and Anti-Atlas each offer distinct hiking character, and nearly all of the country&apos;s best trails can be completed as day hikes from nearby towns.
              </p>
              <p>
                Unlike multi-day treks that require camping gear and logistics, these 15 routes let you return to a comfortable guesthouse each evening. Most are accessible from major tourist cities, making them straightforward to fit into a broader Morocco itinerary. Whether you want a gentle valley walk through Berber villages or a strenuous climb to a 3,200-meter refuge, this guide covers the practical details you need.
              </p>
              <p>
                Moroccan trails also stand apart for their cultural dimension. Many routes pass through working Berber villages where families still farm terraced hillsides, herd goats on high pastures, and welcome hikers with mint tea. Hiring a local guide not only improves safety on remote trails but supports mountain communities directly. This guide covers all 15 hikes with honest difficulty assessments, current pricing (seasonal rates can change), and the information you need to plan each walk with confidence.
              </p>
            </div>
          </div>
        </section>

        {/* ── DIFFICULTY SCALE ─────────────────────────────────── */}
        <section className="container-morocco pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-stone-800 mb-6 flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-[#A0522D]" />
              Understanding the Difficulty Ratings
            </h2>
            <div className="grid gap-3">
              {difficultyScale.map((level) => (
                <div key={level.level} className={`flex items-start gap-4 p-4 rounded-lg border ${level.color}`}>
                  <span className="font-[family-name:var(--font-heading)] font-semibold text-sm min-w-[120px]">{level.level}</span>
                  <span className="font-[family-name:var(--font-heading)] text-sm">{level.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TOP 15 HIKES ─────────────────────────────────────── */}
        <section className="container-morocco pb-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-3 text-center">
              The 15 Best Day Hikes in Morocco
            </h2>
            <p className="text-center text-stone-500 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
              Ranked by overall hiking experience, factoring in scenery, accessibility, and trail quality. Seasonal pricing can change.
            </p>

            <div className="space-y-8">
              {dayHikes.map((hike) => {
                const Icon = hike.icon;
                return (
                  <article key={hike.rank} className="card-moroccan p-6 md:p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                        <span className="font-[family-name:var(--font-display)] text-lg font-bold text-[#A0522D]">
                          {hike.rank}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl text-stone-800 mb-1">
                          {hike.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 text-sm font-[family-name:var(--font-heading)]">
                          <span className="flex items-center gap-1 text-[#A0522D]">
                            <MapPin className="w-3.5 h-3.5" />
                            {hike.region}
                          </span>
                          <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${getDifficultyStyle(hike.difficulty)}`}>
                            {hike.difficulty}
                          </span>
                        </div>
                      </div>
                      <Icon className="w-7 h-7 text-[#C4960C] flex-shrink-0 hidden md:block" />
                    </div>

                    <p className="font-[family-name:var(--font-heading)] text-stone-600 leading-relaxed mb-5">
                      {hike.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-5">
                      <div className="bg-stone-50 rounded-lg p-3 text-center">
                        <Footprints className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <p className="text-xs text-stone-500 font-[family-name:var(--font-heading)]">Distance</p>
                        <p className="text-sm font-semibold text-stone-700 font-[family-name:var(--font-heading)]">{hike.distance}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3 text-center">
                        <Clock className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <p className="text-xs text-stone-500 font-[family-name:var(--font-heading)]">Duration</p>
                        <p className="text-sm font-semibold text-stone-700 font-[family-name:var(--font-heading)]">{hike.duration}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3 text-center">
                        <TrendingUp className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <p className="text-xs text-stone-500 font-[family-name:var(--font-heading)]">Elevation</p>
                        <p className="text-sm font-semibold text-stone-700 font-[family-name:var(--font-heading)]">{hike.elevation}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3 text-center">
                        <Users className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <p className="text-xs text-stone-500 font-[family-name:var(--font-heading)]">Guide</p>
                        <p className="text-sm font-semibold text-stone-700 font-[family-name:var(--font-heading)]">{hike.guideRequired}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3 text-center">
                        <DollarSign className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <p className="text-xs text-stone-500 font-[family-name:var(--font-heading)]">Cost</p>
                        <p className="text-sm font-semibold text-stone-700 font-[family-name:var(--font-heading)]">{hike.price}</p>
                      </div>
                      <div className="bg-stone-50 rounded-lg p-3 text-center">
                        <Calendar className="w-4 h-4 text-[#A0522D] mx-auto mb-1" />
                        <p className="text-xs text-stone-500 font-[family-name:var(--font-heading)]">Best Season</p>
                        <p className="text-sm font-semibold text-stone-700 font-[family-name:var(--font-heading)]">{hike.bestSeason}</p>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {hike.highlights.map((h) => (
                        <span key={h} className="flex items-center gap-1.5 text-xs font-[family-name:var(--font-heading)] text-[#A0522D] bg-[#A0522D]/5 px-3 py-1.5 rounded-full">
                          <CheckCircle className="w-3 h-3" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── SEASONAL GUIDE ───────────────────────────────────── */}
        <section className="bg-white border-y border-stone-200">
          <div className="container-morocco py-16 px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-3 text-center">
                When to Hike: Seasonal Guide
              </h2>
              <p className="text-center text-stone-500 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
                Morocco&apos;s hiking seasons vary by region and altitude. Choose the right time for your chosen trail.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {seasonalGuide.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div key={s.season} className="card-moroccan p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#C4960C]" />
                        </div>
                        <h3 className="font-[family-name:var(--font-display)] text-lg text-stone-800">{s.season}</h3>
                      </div>
                      <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed mb-4">
                        {s.conditions}
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <p className="font-[family-name:var(--font-heading)] text-sm text-stone-700">
                            <span className="font-semibold">Best for:</span> {s.bestFor}
                          </p>
                        </div>
                        <div className="flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                          <p className="font-[family-name:var(--font-heading)] text-sm text-stone-700">
                            <span className="font-semibold">Avoid:</span> {s.avoid}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── ESSENTIAL GEAR ───────────────────────────────────── */}
        <section className="container-morocco py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-3 text-center">
              Essential Day Hiking Gear
            </h2>
            <p className="text-center text-stone-500 font-[family-name:var(--font-heading)] mb-10 max-w-2xl mx-auto">
              What to carry on every day hike in Morocco, regardless of difficulty level.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {essentialGear.map((g) => (
                <div key={g.item} className="card-moroccan p-5 flex items-start gap-4">
                  <Backpack className="w-5 h-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-[family-name:var(--font-heading)] font-semibold text-stone-800 text-sm">{g.item}</p>
                    <p className="font-[family-name:var(--font-heading)] text-stone-500 text-xs mt-1">{g.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GUIDE & SAFETY TIPS ──────────────────────────────── */}
        <section className="bg-white border-y border-stone-200">
          <div className="container-morocco py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-8 text-center">
                Hiring a Guide & Staying Safe
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-stone-800 mb-4 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#A0522D]" />
                    Licensed Mountain Guides
                  </h3>
                  <div className="space-y-3 font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                    <p>
                      Morocco requires licensed guides for hikes in national parks and above certain altitudes. Licensed guides carry official identification and have completed training through the Centre de Formation aux Metiers de Montagne in Tabant.
                    </p>
                    <p>
                      Day guide rates range from 300 to 600 MAD depending on the route and group size. Seasonal pricing can change. Book through your accommodation, the local Bureau des Guides, or a reputable tour agency. Avoid unlicensed guides who approach at trailheads.
                    </p>
                    <p>
                      Mules can be hired from 200 MAD per day to carry gear on Atlas trails, particularly useful on the Toubkal and Tizi n&apos;Test routes. The muleteer typically walks with the group and doubles as a trail navigator.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-stone-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-[#C4960C]" />
                    Safety Considerations
                  </h3>
                  <ul className="space-y-3 font-[family-name:var(--font-heading)] text-stone-600 text-sm">
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span>Start early, especially in summer. Most hikers depart by 7:00 AM to avoid midday heat and afternoon storms in the Atlas.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span>Tell your accommodation where you are hiking and your expected return time. Mobile coverage is unreliable on mountain trails.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span>Flash floods are a real danger in narrow gorges (Todra, Dades) after rainfall. Check local weather before entering any canyon.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span>Altitude sickness can affect hikers above 2,500m. Ascend gradually, stay hydrated, and descend if you experience headaches or dizziness.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span>Carry at least 2 liters of water per person. There are no reliable water refill points on most trails outside of villages.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      <span>Travel insurance with mountain rescue coverage is strongly advised for any Atlas hike. Standard policies often exclude altitudes above 2,000m.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GETTING TO TRAILHEADS ────────────────────────────── */}
        <section className="container-morocco py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-6 text-center">
              Getting to the Trailheads
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-moroccan p-5 text-center">
                <Compass className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-stone-800 mb-2">From Marrakech</h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Imlil (1.5 hrs), Ourika Valley (45 min), Setti Fatma (1.5 hrs), Ouzoud Falls (2.5 hrs). Grand taxis from Bab er-Rob or arranged through your riad. Day trip transport from 300 MAD return.
                </p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Compass className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-stone-800 mb-2">From Fes & North</h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Ifrane cedar forest (1 hr from Fes), Akchour from Chefchaouen (30 min), Cap Spartel from Tangier (15 min). Shared taxis and local buses serve these routes regularly.
                </p>
              </div>
              <div className="card-moroccan p-5 text-center">
                <Compass className="w-8 h-8 text-[#A0522D] mx-auto mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg text-stone-800 mb-2">From Ouarzazate & South</h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Todra Gorge from Tinghir (15 min), Dades Gorge from Boumalne (30 min), Jebel Zagora (in town), Tafraout (3 hrs from Agadir). A rental car is recommended for southern routes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HIKING ETIQUETTE ───────────────────────────────── */}
        <section className="container-morocco py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-6 text-center">
              Trail Etiquette & Respect
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-stone-800 text-sm mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#A0522D]" />
                  In Berber Villages
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Ask permission before photographing people. Dress modestly when passing through settlements. If a family offers you tea, accepting is a sign of respect. A small tip of 10-20 MAD is appreciated but not expected.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-stone-800 text-sm mb-2 flex items-center gap-2">
                  <Mountain className="w-4 h-4 text-[#A0522D]" />
                  On the Trail
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Carry out all rubbish. Stay on marked paths to avoid eroding hillsides. Yield to mule trains on narrow sections. Avoid picking plants or disturbing wildlife. Close any gates you pass through on agricultural land.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-stone-800 text-sm mb-2 flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-[#A0522D]" />
                  Water Sources
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Village irrigation channels (seguias) are vital for agriculture. Do not bathe in or contaminate them. If you swim in waterfall pools, use biodegradable sunscreen. Many communities depend on these water sources year-round.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-stone-800 text-sm mb-2 flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-[#A0522D]" />
                  Supporting Local Economy
                </h3>
                <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed">
                  Hire local guides rather than relying solely on GPS. Eat lunch at trailside village cafes. Buy water and snacks from village shops rather than carrying everything from the city. These small purchases make a meaningful difference in mountain communities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────── */}
        <section className="bg-white border-y border-stone-200">
          <div className="container-morocco py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-3 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-center text-stone-500 font-[family-name:var(--font-heading)] mb-10">
                Common questions about day hiking in Morocco, answered with practical detail.
              </p>

              <div className="space-y-6">
                {faqData.map((faq, i) => (
                  <div key={i} className="card-moroccan p-6">
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-stone-800 mb-3 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="font-[family-name:var(--font-heading)] text-stone-600 text-sm leading-relaxed pl-8">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED GUIDES ───────────────────────────────────── */}
        <section className="container-morocco py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-stone-800 mb-3 text-center">
              Related Morocco Guides
            </h2>
            <p className="text-center text-stone-500 font-[family-name:var(--font-heading)] mb-10">
              Plan the rest of your Morocco adventure with these companion guides.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedGuides.map((guide) => (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[#A0522D]/30 transition-colors">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-base text-stone-800 group-hover:text-[#A0522D] transition-colors mb-1">
                        {guide.title}
                      </h3>
                      <p className="font-[family-name:var(--font-heading)] text-stone-500 text-sm">
                        {guide.description}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#A0522D] transition-colors flex-shrink-0 mt-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-stone-800 to-amber-900">
          <div className="container-morocco py-16 px-4 text-center">
            <Star className="w-10 h-10 text-[#C4960C] mx-auto mb-4" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-white mb-4">
              Ready to Hit the Trail?
            </h2>
            <p className="font-[family-name:var(--font-heading)] text-stone-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Morocco&apos;s mountains, gorges, and coastline offer some of the most diverse day hiking in North Africa. Whether you choose a gentle valley walk or an Atlas peak ascent, every trail rewards you with landscapes found nowhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/marrakech"
                className="inline-flex items-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-medium hover:bg-[#8B4726] transition-colors"
              >
                <BookOpen className="w-4 h-4" />
                Explore Marrakech
              </Link>
              <Link
                href="/morocco-camping-guide"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-[family-name:var(--font-heading)] font-medium hover:bg-white/20 transition-colors border border-white/20"
              >
                <Mountain className="w-4 h-4" />
                Camping Guide
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
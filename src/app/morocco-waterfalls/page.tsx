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
  Footprints,
  Droplets,
  Wind,
  BookOpen,
  Gauge,
  Car,
  Backpack,
  Waves,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Waterfalls in Morocco 2026 | Ouzoud Falls, Akchour & Swimming Guide',
  description:
    'Complete guide to the best waterfalls in Morocco. Ouzoud Falls, Akchour waterfalls, Paradise Valley, Setti Fatma, Sources Oum er Rbia, Cascades d\'Imouzzer. Hiking difficulty, swimming spots, best seasons, how to get there & guided tours. Prices from 100 MAD.',
  keywords: [
    'Morocco waterfalls',
    'Ouzoud Falls Morocco',
    'Akchour waterfalls',
    'best waterfalls Morocco',
    'Paradise Valley Morocco',
    'Setti Fatma waterfalls',
    'Cascades d\'Imouzzer',
    'Sources Oum er Rbia',
    'waterfall swimming Morocco',
    'Ouzoud Falls day trip',
    'Akchour Chefchaouen waterfall',
    'Morocco waterfall hike',
    'waterfalls near Marrakech',
    'waterfalls near Chefchaouen',
    'Morocco waterfall guide 2026',
    'best waterfall hikes Morocco',
    'Morocco nature guide',
  ],
  openGraph: {
    title: 'Best Waterfalls in Morocco 2026 | Ouzoud Falls, Akchour & Swimming Guide',
    description:
      'Top 10 waterfalls in Morocco: Ouzoud Falls, Akchour, Paradise Valley, Setti Fatma, Sources Oum er Rbia, Cascades d\'Imouzzer. Swimming, hiking, best seasons & costs from 100 MAD.',
    url: `${BASE_URL}/morocco-waterfalls`,
    images: [
      {
        url: `${BASE_URL}/images/hero-waterfalls.webp`,
        width: 1200,
        height: 630,
        alt: 'Ouzoud Falls cascading 110 meters into a turquoise pool surrounded by lush greenery in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Waterfalls in Morocco 2026 | Ouzoud, Akchour & More',
    description:
      'Top 10 Morocco waterfalls with swimming, hiking, photography tips. Ouzoud Falls, Akchour, Paradise Valley, Setti Fatma. Costs from 100 MAD, best seasons & transport.',
    images: [`${BASE_URL}/images/hero-waterfalls.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-waterfalls` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-waterfalls`,
  name: 'Best Waterfalls in Morocco 2026 | Ouzoud Falls, Akchour & Swimming Guide',
  description:
    'Complete guide to the best waterfalls in Morocco. Top 10 waterfalls, hiking difficulty, swimming spots, best seasons, transport, and costs.',
  url: `${BASE_URL}/morocco-waterfalls`,
  image: `${BASE_URL}/images/hero-waterfalls.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-waterfalls`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Ouzoud Falls' },
    { '@type': 'Place', name: 'Akchour Waterfalls' },
    { '@type': 'Place', name: 'Paradise Valley' },
    { '@type': 'Place', name: 'Setti Fatma Waterfalls' },
    { '@type': 'Place', name: 'Sources Oum er Rbia' },
    { '@type': 'Place', name: 'Cascades d\'Imouzzer' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Waterfalls Guide', item: `${BASE_URL}/morocco-waterfalls` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the most beautiful waterfall in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ouzoud Falls is widely considered the most beautiful waterfall in Morocco. At 110 meters high with three cascading tiers, rainbow mist, wild Barbary macaques, and turquoise plunge pools, it is one of the most spectacular waterfalls in all of North Africa. Akchour waterfall near Chefchaouen is a close second for its stunning blue pools and gorge scenery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you swim in Morocco waterfalls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many Morocco waterfalls have swimming spots. Ouzoud Falls has a large plunge pool at the base, Paradise Valley has natural rock pools ideal for swimming, and Akchour has the famous God\'s Bridge pool. The best swimming season is May through September when water levels are comfortable and temperatures are warm. Always check local conditions and be cautious of currents after heavy rain.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Ouzoud Falls from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ouzoud Falls is about 150 kilometers northeast of Marrakech, a 2.5-hour drive. The easiest option is an organized day trip from 400-800 MAD per person including transport, guide, and often lunch. You can also take a shared grand taxi from Marrakech to Azilal (from 60 MAD, 2 hours) then another taxi to Ouzoud village (from 20 MAD, 30 minutes). Rental cars offer the most flexibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit Morocco waterfalls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) is the best time to visit Morocco waterfalls. Snowmelt from the Atlas Mountains feeds the cascades at their most powerful, wildflowers bloom along the trails, and temperatures are ideal for hiking. Autumn (September-November) is also excellent. Some waterfalls reduce to a trickle in late summer (August-September). Ouzoud Falls flows year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco waterfall hikes difficult?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Morocco waterfall hikes are easy to moderate. Ouzoud Falls requires only a short walk down steps to the base. Paradise Valley involves scrambling over rocks for about 45 minutes. Akchour is a moderate 3-4 hour return hike along a river gorge. Setti Fatma\'s upper waterfalls require some scrambling with a local guide. No technical climbing equipment is needed for any of these waterfalls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a guide to visit waterfalls in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A guide is not required for Ouzoud Falls or Paradise Valley as the paths are well-marked. For Setti Fatma\'s upper waterfalls, a local guide (from 100-200 MAD) is strongly recommended as the scramble can be tricky. Akchour trails are mostly clear but a guide helps navigate river crossings. Organized tours from cities eliminate all planning for from 400-1,200 MAD per person.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to visit Ouzoud Falls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ouzoud Falls has no entrance fee. A boat ride at the base costs from 20-30 MAD per person. Lunch at a riverside restaurant costs from 60-120 MAD. Day trip tours from Marrakech cost from 400-800 MAD including transport and guide. Independent travel by grand taxi costs from 80-100 MAD each way. Parking costs 10-20 MAD if driving. Seasonal pricing applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which waterfalls are closest to Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Akchour waterfalls are the closest major waterfalls to Chefchaouen, located about 30 kilometers away in Talassemtane National Park. The site includes a small waterfall (1.5 hours hike), the grand waterfall (3-4 hours return), and the famous God\'s Bridge natural rock arch. Grand taxis from Chefchaouen to Akchour cost from 30-50 MAD per person.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP WATERFALLS
   ═══════════════════════════════════════════════════════════════ */

const topWaterfalls = [
  {
    name: 'Ouzoud Falls',
    icon: Droplets,
    region: 'Middle Atlas, near Azilal',
    height: '110 meters (3 tiers)',
    difficulty: 'Easy',
    swimming: 'Yes - large plunge pool',
    bestSeason: 'Year-round (peak: March-June)',
    price: 'Free entry, tours from 400 MAD',
    description: 'Morocco\'s most famous waterfall and one of the grandest in North Africa. Three cascading tiers plunge 110 meters into a turquoise pool surrounded by olive groves and red cliffs. Rainbow mist hangs in the air, wild Barbary macaques swing through the trees, and small boat rides take you to the base of the falls. The most popular waterfall day trip from Marrakech.',
    highlights: ['110-meter triple cascade with rainbow mist', 'Wild Barbary macaques in surrounding olive trees', 'Boat rides at the base for from 20 MAD', 'Riverside restaurants with views of the falls'],
  },
  {
    name: 'Akchour Waterfalls',
    icon: Droplets,
    region: 'Rif Mountains, near Chefchaouen',
    height: '20 m (small) / 60 m (grand)',
    difficulty: 'Moderate',
    swimming: 'Yes - God\'s Bridge pool',
    bestSeason: 'March-November',
    price: 'Park fee from 20 MAD',
    description: 'Hidden in Talassemtane National Park near Chefchaouen, the Akchour waterfalls are among Morocco\'s most beautiful. The trail follows a forested river gorge with crystal-clear pools and leads to both a small waterfall and a spectacular grand waterfall. The famous God\'s Bridge, a natural rock arch over a deep turquoise pool, is an unmissable detour along the way.',
    highlights: ['Grand waterfall cascading 60 meters into a gorge', 'God\'s Bridge natural rock arch with swimming pool', 'Stunning river gorge through Rif mountain forest', 'Easy day trip from Chefchaouen (30 km)'],
  },
  {
    name: 'Paradise Valley',
    icon: Waves,
    region: 'Anti-Atlas, near Agadir',
    height: 'Multiple cascades (5-15 m)',
    difficulty: 'Easy-Moderate',
    swimming: 'Yes - multiple natural pools',
    bestSeason: 'April-October',
    price: 'Free entry',
    description: 'A series of natural rock pools and small waterfalls carved into a palm-lined gorge between Agadir and Imouzzer. The turquoise pools, surrounded by red rock walls and lush vegetation, create a natural swimming paradise. Rock jumping from low ledges is popular, and the setting feels like a hidden oasis. The contrast between the dry surrounding landscape and this lush valley is extraordinary.',
    highlights: ['Chain of turquoise natural swimming pools', 'Rock jumping from natural ledges (3-5 m)', 'Palm-lined gorge with dramatic red cliffs', 'Only 45 minutes from Agadir beach resorts'],
  },
  {
    name: 'Setti Fatma Waterfalls',
    icon: Droplets,
    region: 'High Atlas, Ourika Valley',
    height: '7 cascades (total 200+ m)',
    difficulty: 'Easy (first) / Moderate (upper)',
    swimming: 'Yes - pools at lower falls',
    bestSeason: 'March-June (peak flow)',
    price: 'Guide from 100 MAD for upper falls',
    description: 'Seven tiered waterfalls above the Berber village of Setti Fatma in the Ourika Valley, the most accessible waterfall experience from Marrakech. The first waterfall is an easy 30-minute walk; reaching all seven requires scrambling with a local guide. The village at the base has riverside restaurants perched over the rushing water, where you eat tagine with your feet dangling above the current.',
    highlights: ['Seven cascading waterfalls over 200+ meters', 'Riverside restaurants built over rushing water', 'Just 60 km from Marrakech (1 hour drive)', 'Berber village experience with mint tea invitations'],
  },
  {
    name: 'Sources Oum er Rbia',
    icon: Droplets,
    region: 'Middle Atlas, near Khenifra',
    height: '40+ springs (cascading)',
    difficulty: 'Easy',
    swimming: 'No (sacred site)',
    bestSeason: 'Year-round',
    price: 'Free entry',
    description: 'The dramatic source of Morocco\'s longest river, where over forty springs burst from the limestone mountainside simultaneously, creating a thundering wall of cascading water. The Oum er Rbia (Mother of Spring) is fed by Atlas snowmelt and the sight of dozens of waterfalls erupting from bare rock is unlike anything else in Morocco. A sacred site for local Amazigh communities, surrounded by cedar forests.',
    highlights: ['40+ springs erupting from cliff face simultaneously', 'Source of Morocco\'s longest river (555 km)', 'Sacred Amazigh site with cultural significance', 'Cedar forest setting in the Middle Atlas'],
  },
  {
    name: 'Cascades d\'Imouzzer',
    icon: Droplets,
    region: 'Western Atlas, near Agadir',
    height: '30 meters',
    difficulty: 'Easy',
    swimming: 'Limited pools below',
    bestSeason: 'February-May (dry season: no flow)',
    price: 'Free entry',
    description: 'A striking 30-meter waterfall near the village of Imouzzer Ida Outanane, set in a dramatic canyon above Agadir. The falls are seasonal, flowing powerfully after winter rains and drying to a trickle by late summer. The surrounding area is known for its honey production, and the "Honey Festival" in May celebrates the local beekeeping tradition. Combined with Paradise Valley for an excellent day trip from Agadir.',
    highlights: ['30-meter falls in a dramatic canyon setting', 'Famous local honey and annual Honey Festival', 'Combined day trip with nearby Paradise Valley', 'Panoramic viewpoints over the Atlas foothills'],
  },
  {
    name: 'Cascades de Tizgha',
    icon: Droplets,
    region: 'Middle Atlas, near Azilal',
    height: '25 meters',
    difficulty: 'Moderate',
    swimming: 'Yes - small pools',
    bestSeason: 'March-June',
    price: 'Free entry',
    description: 'A lesser-known gem near the Ouzoud Falls area, the Tizgha cascades tumble through terraced travertine pools in a remote mountain setting. Far fewer visitors than neighboring Ouzoud, this waterfall rewards those willing to venture off the main tourist trail. The surrounding landscape of red earth, olive groves, and traditional Berber farms adds to the authentic experience.',
    highlights: ['Travertine terraced pools with cascading water', 'Far fewer tourists than nearby Ouzoud Falls', 'Authentic Berber farming landscape', 'Combinable with Ouzoud Falls in one trip'],
  },
  {
    name: 'Cascades d\'Imi-n-Ifri',
    icon: Droplets,
    region: 'Middle Atlas, near Demnate',
    height: '15 meters into cave',
    difficulty: 'Easy',
    swimming: 'No (cave setting)',
    bestSeason: 'Year-round',
    price: 'From 10 MAD entry',
    description: 'A unique natural wonder where a waterfall plunges into a massive natural bridge and cave system near the town of Demnate. The limestone arch, sometimes called the "Natural Bridge of Imi-n-Ifri," spans 30 meters above the river below. Swallows and bats nest in the cave ceiling, and the interplay of light and water inside the grotto creates an atmospheric experience unlike any other waterfall in Morocco.',
    highlights: ['Waterfall inside a massive natural cave', '30-meter natural limestone bridge arch', 'Unique atmosphere with bats and swallows', 'En route between Marrakech and Ouzoud Falls'],
  },
  {
    name: 'Cascades de Kefrida',
    icon: Droplets,
    region: 'Kabylie, Bejaia region',
    height: '35 meters',
    difficulty: 'Moderate',
    swimming: 'Yes - pool at base',
    bestSeason: 'March-June',
    price: 'Free entry',
    description: 'Tucked in the forests of northeastern Morocco near the Rif mountains, the Kefrida waterfalls offer a quiet, forested escape. Multiple cascades flow through dense oak and pine woodland, with a refreshing pool at the base of the main 35-meter drop. This is waterfall country for hikers who want solitude and immersion in nature rather than organized tourism.',
    highlights: ['35-meter main cascade in dense forest', 'Multiple smaller cascades along the trail', 'Swimming pool at base surrounded by forest', 'Quiet alternative far from tourist circuits'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONAL GUIDE
   ═══════════════════════════════════════════════════════════════ */

const seasonGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    rating: 'Best',
    tempDay: '18-28 C',
    description:
      'The absolute best season for Morocco waterfalls. Atlas snowmelt feeds the cascades at their most powerful, wildflowers line the hiking trails, and temperatures are perfect for both hiking and swimming. Ouzoud roars with spray, Akchour pools fill to their bluest, and Setti Fatma\'s seven falls flow in full force.',
    topPicks: 'All waterfalls at peak flow, especially Ouzoud, Setti Fatma, and Cascades d\'Imouzzer',
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    rating: 'Good',
    tempDay: '28-40 C',
    description:
      'Hot weather makes waterfall pools irresistible for swimming. Ouzoud Falls flows year-round and is refreshing even in peak heat. Paradise Valley pools are at their best for swimming. Some seasonal falls like Cascades d\'Imouzzer may reduce to a trickle. Start hikes early to avoid midday heat.',
    topPicks: 'Paradise Valley swimming, Ouzoud Falls, Akchour pools (early morning)',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    rating: 'Good',
    tempDay: '18-30 C',
    description:
      'Warm weather continues with fewer crowds. Water levels depend on recent rainfall; early autumn can be dry, but late October rains revive many cascades. Excellent hiking weather with golden light for photography. The harvest season means villages near waterfalls buzz with activity.',
    topPicks: 'Ouzoud Falls, Akchour (after October rains), Sources Oum er Rbia',
  },
  {
    season: 'Winter (December-February)',
    icon: Droplets,
    rating: 'Mixed',
    tempDay: '8-18 C',
    description:
      'Winter rains feed the waterfalls powerfully, but trails can be muddy and slippery. Ouzoud is spectacular in winter with heavy flow but fewer visitors. Mountain roads to remote falls may be challenging. Swimming is too cold for most. Best for dramatic photography of waterfalls at full power.',
    topPicks: 'Ouzoud Falls (dramatic flow), Sources Oum er Rbia, Cascades d\'Imi-n-Ifri',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO BRING
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  { item: 'Water shoes or sturdy sandals', icon: Footprints, note: 'Essential for rocky pools and river crossings' },
  { item: 'Swimsuit and quick-dry towel', icon: Waves, note: 'Many waterfalls have swimming spots' },
  { item: 'Waterproof phone case or dry bag', icon: Droplets, note: 'Spray and splashing are constant near falls' },
  { item: 'Sunscreen SPF 50+ and hat', icon: Sun, note: 'Little shade on some approach trails' },
  { item: 'Hiking shoes (for Akchour and Setti Fatma)', icon: Footprints, note: 'Rocky terrain on longer hikes' },
  { item: 'Camera with polarizing filter', icon: Camera, note: 'Cuts glare on water, deepens blue tones' },
  { item: '2+ liters of water per person', icon: Droplets, note: 'Few water refill points on most trails' },
  { item: 'Cash in small denominations', icon: DollarSign, note: 'For guides, boat rides, and village cafes' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the most beautiful waterfall in Morocco?',
    answer:
      'Ouzoud Falls is widely considered the most beautiful waterfall in Morocco. At 110 meters with three cascading tiers, rainbow mist, wild Barbary macaques, and turquoise plunge pools, it is one of the grandest waterfalls in North Africa. Akchour waterfall near Chefchaouen is a close second for its stunning blue pools and dramatic gorge scenery.',
  },
  {
    question: 'Can you swim in Morocco waterfalls?',
    answer:
      'Yes, many Morocco waterfalls have excellent swimming spots. Ouzoud Falls has a large plunge pool at the base, Paradise Valley has multiple natural rock pools perfect for swimming, and Akchour has the famous God\'s Bridge pool. The best swimming season is May through September. Always check local conditions and be cautious of currents after heavy rain.',
  },
  {
    question: 'How do I get to Ouzoud Falls from Marrakech?',
    answer:
      'Ouzoud Falls is about 150 km northeast of Marrakech, a 2.5-hour drive. Organized day trips cost from 400-800 MAD per person including transport, guide, and often lunch. You can take a shared grand taxi from Marrakech to Azilal (from 60 MAD, 2 hours) then another taxi to Ouzoud (from 20 MAD, 30 minutes). Rental cars offer maximum flexibility. Seasonal pricing applies.',
  },
  {
    question: 'What is the best time to visit Morocco waterfalls?',
    answer:
      'Spring (March-May) is the best season. Atlas snowmelt feeds the cascades at peak power, wildflowers bloom along trails, and temperatures are ideal. Autumn (September-November) is also excellent. Some waterfalls reduce to a trickle in late summer. Ouzoud Falls flows year-round regardless of season.',
  },
  {
    question: 'Are Morocco waterfall hikes difficult?',
    answer:
      'Most waterfall hikes are easy to moderate. Ouzoud Falls requires only a short walk down steps. Paradise Valley involves scrambling over rocks for about 45 minutes. Akchour is a moderate 3-4 hour return hike along a river gorge. Setti Fatma\'s upper waterfalls require some scrambling with a local guide. No technical climbing equipment is needed.',
  },
  {
    question: 'Do I need a guide to visit waterfalls in Morocco?',
    answer:
      'A guide is not required for Ouzoud Falls or Paradise Valley as paths are well-marked. For Setti Fatma\'s upper waterfalls, a local guide (from 100-200 MAD) is strongly recommended as the scramble can be tricky. Akchour trails are mostly clear but a guide helps navigate river crossings. Organized tours from cities cost from 400-1,200 MAD per person.',
  },
  {
    question: 'How much does it cost to visit Ouzoud Falls?',
    answer:
      'Ouzoud Falls has no entrance fee. A boat ride at the base costs from 20-30 MAD per person. Lunch at a riverside restaurant costs from 60-120 MAD. Day trip tours from Marrakech cost from 400-800 MAD including transport and guide. Grand taxis cost from 80-100 MAD each way. Parking costs 10-20 MAD. Prices are seasonal and may vary.',
  },
  {
    question: 'Which waterfalls are closest to Chefchaouen?',
    answer:
      'The Akchour waterfalls are the closest major waterfalls to Chefchaouen, about 30 km away in Talassemtane National Park. The site includes a small waterfall (1.5 hours hike), the grand waterfall (3-4 hours return), and God\'s Bridge natural rock arch. Grand taxis from Chefchaouen to Akchour cost from 30-50 MAD per person.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY TIPS
   ═══════════════════════════════════════════════════════════════ */

const photoTips = [
  { tip: 'Use a polarizing filter to cut reflections and deepen pool colors', icon: Camera },
  { tip: 'Shoot in the morning (7-10 am) for soft light and fewer crowds', icon: Sun },
  { tip: 'Slow shutter speed (1/4 second or longer) creates silky water effects', icon: Clock },
  { tip: 'Bring a waterproof case -- spray reaches further than you expect', icon: Droplets },
  { tip: 'Include people for scale, especially at tall falls like Ouzoud', icon: Users },
  { tip: 'Shoot from the base looking up for the most dramatic angles', icon: Mountain },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/national-parks',
    icon: Compass,
    title: 'National Parks of Morocco',
    description: 'Explore Morocco\'s protected areas including Talassemtane, Toubkal, and Souss-Massa national parks.',
  },
  {
    href: '/trekking',
    icon: Footprints,
    title: 'Trekking in Morocco',
    description: 'Multi-day routes, trail maps, and packing lists for Morocco\'s best trekking adventures.',
  },
  {
    href: '/morocco-hiking-guide',
    icon: Route,
    title: 'Morocco Hiking Guide',
    description: 'Top hikes, difficulty ratings, costs, and detailed trail information for every hiking region.',
  },
  {
    href: '/morocco-atlas-guide',
    icon: Mountain,
    title: 'Atlas Mountains Guide',
    description: 'High Atlas, Middle Atlas, and Anti-Atlas explored: trekking, day trips, and things to do.',
  },
  {
    href: '/adventure',
    icon: Backpack,
    title: 'Adventure Activities Morocco',
    description: 'Beyond waterfalls: canyoning, rock climbing, mountain biking, and outdoor adventures across Morocco.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoWaterfallsPage() {
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
          style={{ backgroundImage: 'url(/images/hero-waterfalls.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Waterfalls Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Morocco Waterfalls
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Waterfalls in Morocco:
            <br className="hidden md:block" /> Swimming, Hiking &amp; Photography
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the 110-meter cascades of Ouzoud to the turquoise pools of Akchour and Paradise Valley.
            Complete guide to Morocco&apos;s most spectacular waterfalls with costs from 100 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is a Waterfall Paradise
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is not the first country most people associate with waterfalls, yet its Atlas Mountains,
                Rif ranges, and hidden gorges conceal some of North Africa&apos;s most breathtaking cascades.
                Fed by snowmelt from peaks above 4,000 meters, these waterfalls carve through red rock canyons,
                tumble into turquoise pools, and create natural swimming spots that rival anything in the tropics.
                From the thundering 110-meter drop of Ouzoud Falls to the secret blue pools of Akchour near
                Chefchaouen, Morocco&apos;s waterfalls are among the country&apos;s greatest hidden treasures.
              </p>
              <p>
                What makes Morocco&apos;s waterfalls special is their diversity and accessibility. Setti Fatma in
                the Ourika Valley is just an hour from Marrakech, making it the easiest day trip for waterfall
                seekers. Paradise Valley near Agadir combines beach holidays with mountain pool swimming.
                The Sources Oum er Rbia, where forty springs explode from a mountainside, is a geological wonder
                that feels like another planet. Whether you want a gentle stroll to a scenic cascade or a full-day
                hike through mountain gorges to a hidden plunge pool, Morocco delivers.
              </p>
              <p>
                This guide covers the best waterfalls in Morocco, how to reach each one, hiking difficulty,
                where you can swim, the best seasons to visit, what to bring, guided tours versus self-guided
                options, photography tips, and answers to every common question about chasing waterfalls
                across this extraordinary country.
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
              <Droplets className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">110 m</div>
              <div className="text-sm text-[var(--text-muted)]">Ouzoud Falls height</div>
            </div>
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">9 Falls</div>
              <div className="text-sm text-[var(--text-muted)]">Major waterfalls covered</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">100 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting cost (self-guided)</div>
            </div>
            <div className="text-center">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">6 Pools</div>
              <div className="text-sm text-[var(--text-muted)]">Swimmable waterfall sites</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Waterfalls ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Droplets className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Top Waterfalls in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the iconic cascades of Ouzoud to hidden gems in the Rif Mountains, these are
            Morocco&apos;s most spectacular waterfalls worth traveling for.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and costs may vary by operator.
          </p>

          <div className="space-y-8">
            {topWaterfalls.map((fall) => {
              const FallIcon = fall.icon;
              return (
                <div key={fall.name} className="card-moroccan overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <FallIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {fall.name}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)]">{fall.region}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Mountain className="w-3 h-3 text-[var(--color-accent)]" /> {fall.height}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Gauge className="w-3 h-3 text-[var(--color-accent)]" /> {fall.difficulty}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Waves className="w-3 h-3 text-[var(--color-accent)]" /> {fall.swimming}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Calendar className="w-3 h-3 text-[var(--color-accent)]" /> {fall.bestSeason}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full font-bold text-[var(--color-accent)]">
                        <DollarSign className="w-3 h-3" /> {fall.price}
                      </span>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] mb-4">{fall.description}</p>

                    <div className="space-y-1.5">
                      {fall.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Guided vs Self-Guided ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided Tours vs Self-Guided Visits
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both approaches work well for Morocco&apos;s waterfalls. Here is an honest comparison to help you
            choose the right option for your trip.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">Guided Day Trip</h3>
                </div>
                <p className="text-white/80 text-sm">From 400-1,200 MAD per person</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  A driver picks you up from your hotel, handles all navigation, and a guide shares local
                  knowledge about the falls, the geology, and nearby villages. Lunch is often included.
                  Ideal for Ouzoud Falls, Ourika Valley, and remote waterfalls.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Hotel pickup and drop-off included
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Local knowledge and hidden viewpoints
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    No navigation or driving stress
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Traditional lunch often included
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> Ouzoud Falls, remote waterfalls, families, first-time visitors
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">Self-Guided Visit</h3>
                </div>
                <p className="text-white/80 text-sm">From 100-300 MAD per person</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Take a grand taxi, shared minibus, or rental car and explore at your own pace. Works
                  well for waterfalls with clear trails like Ouzoud, Paradise Valley, and Akchour.
                  Budget-friendly and lets you linger as long as you want.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Complete freedom of schedule and pace
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Significantly lower cost per person
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Stay and swim as long as you wish
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Combine multiple falls in one trip
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> Paradise Valley, Akchour, budget travelers, experienced hikers
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
                    For Setti Fatma&apos;s upper waterfalls, always hire a <strong>local guide</strong> (from 100-200 MAD).
                    The scramble to the upper falls involves exposed sections and wet rocks. At Akchour, river crossings
                    can be dangerous after heavy rain. Never swim alone at any waterfall, and always check water depth
                    before jumping or diving. Flash floods are rare but possible in gorge settings after storms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Season ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit Morocco Waterfalls
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Water levels, swimming conditions, and trail access vary dramatically by season. Plan your
            visit around these conditions for the best experience.
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
                      season.rating === 'Best' ? 'bg-green-100 text-green-700' :
                      season.rating === 'Good' ? 'bg-amber-100 text-amber-700' :
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
                      <strong className="text-[var(--color-accent)]">Top picks:</strong> {season.topPicks}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── What to Bring ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Bring to Morocco Waterfalls
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right gear makes the difference between a great waterfall day and a frustrating one.
            Pack these essentials for any waterfall visit.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingList.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div key={i} className="card-moroccan p-4 flex items-start gap-3">
                  <ItemIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-[var(--text-primary)]">{item.item}</div>
                    <div className="text-xs text-[var(--text-muted)]">{item.note}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Waterfall Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s waterfalls are incredibly photogenic. These tips will help you capture stunning
            images whether you are using a phone or a professional camera.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photoTips.map((tip, i) => {
              const TipIcon = tip.icon;
              return (
                <div key={i} className="card-moroccan p-5">
                  <TipIcon className="w-6 h-6 text-[var(--color-accent)] mb-3" />
                  <p className="text-sm text-[var(--text-secondary)]">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Get to Morocco&apos;s Waterfalls
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transport options and journey times from the nearest major city to each waterfall.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                Ouzoud Falls (from Marrakech)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                150 km northeast, 2.5 hours by road. <strong>Day trips:</strong> from 400-800 MAD per person with transport and guide.
                <strong> Grand taxi:</strong> Marrakech to Azilal from 60 MAD (2 hours) then local taxi from 20 MAD.
                <strong> Rental car:</strong> paved road, easy drive with parking from 10-20 MAD.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                Akchour Waterfalls (from Chefchaouen)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                30 km south, 45 minutes by road. <strong>Grand taxi:</strong> from 30-50 MAD per person from Chefchaouen.
                <strong> Organized tour:</strong> from 300-600 MAD including guide. <strong>Rental car:</strong> paved road
                with parking at trailhead. Talassemtane National Park entry from 20 MAD.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                Paradise Valley (from Agadir)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                25 km north, 45 minutes by road. <strong>Grand taxi:</strong> from 20-40 MAD from Agadir.
                <strong> Day trip:</strong> often combined with Cascades d&apos;Imouzzer from 300-600 MAD.
                <strong> Rental car:</strong> easiest option, paved road to the parking area. Free entry.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                Setti Fatma (from Marrakech)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                60 km south, 1 hour via Ourika Valley road. <strong>Shared minibus:</strong> from 20-30 MAD from Bab er-Rob.
                <strong> Day trip:</strong> from 400-800 MAD including Ourika Valley tour. <strong>Grand taxi:</strong> from
                50-100 MAD. The most accessible waterfall from Marrakech.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                Sources Oum er Rbia (from Khenifra or Beni Mellal)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                40 km from Khenifra, 1 hour by road. <strong>Grand taxi:</strong> from 30-50 MAD from Khenifra.
                Best reached by <strong>rental car</strong> as public transport connections are infrequent.
                Can be combined with a wider Middle Atlas road trip. Free entry.
              </p>
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
                    <strong>Grand taxis</strong> are the most common transport to waterfalls. They depart when
                    full (6 passengers). You can buy extra seats to leave sooner. Always agree on the price
                    and whether it includes the return trip before departing.
                  </p>
                  <p>
                    <strong>Rental cars</strong> offer the most flexibility, especially for combining multiple
                    waterfalls. Roads to Ouzoud, Paradise Valley, and Setti Fatma are fully paved. Check
                    road conditions in winter for remote falls. Prices are seasonal and may vary.
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
            Everything you need to know about visiting waterfalls in Morocco, answered by experienced travelers.
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
            Continue planning your Morocco waterfall adventure with these in-depth guides.
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
          <Droplets className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Chase Morocco&apos;s Waterfalls?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From the thundering cascades of Ouzoud to the hidden pools of Paradise Valley,
            Morocco&apos;s waterfalls offer unforgettable adventures. Start planning your
            waterfall journey today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/morocco-atlas-guide"
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

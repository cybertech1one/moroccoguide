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
  Waves,
  Gauge,
  Car,
  Wind,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-waterfall-hikes`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Waterfall Hikes 2026 | Ouzoud Falls, Akchour, Paradise Valley & Trail Guide',
  description:
    'Complete hiking guide to Morocco\'s best waterfalls. Trail details for Ouzoud Falls, Akchour Waterfalls, Cascades d\'Imouzzer, Paradise Valley, Setti Fatma, and more. Difficulty levels, best seasons, gear lists, guide costs from 100 MAD, and transport info.',
  keywords: [
    'morocco waterfall hikes',
    'ouzoud falls hike',
    'akchour waterfall trail',
    'paradise valley hike morocco',
    'setti fatma waterfall hike',
    'cascades imouzzer hike',
    'morocco waterfall trail guide',
    'hiking to waterfalls morocco',
    'best waterfall hikes morocco',
    'morocco waterfall trekking',
    'atlas mountains waterfall hike',
    'rif mountains waterfall trail',
    'waterfall day hike morocco',
    'morocco waterfall hiking difficulty',
    'morocco waterfall swimming hike',
    'ouzoud falls trail guide',
    'akchour trail chefchaouen',
    'ourika valley waterfall hike',
    'morocco outdoor hiking guide 2026',
  ],
  openGraph: {
    title: 'Morocco Waterfall Hikes 2026 | Ouzoud, Akchour, Paradise Valley Trail Guide',
    description:
      'Detailed hiking trails to Morocco\'s top waterfalls. Ouzoud Falls, Akchour, Paradise Valley, Setti Fatma, Cascades d\'Imouzzer. Difficulty ratings, distances, gear, and costs from 100 MAD.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-waterfalls.webp`,
        width: 1200,
        height: 630,
        alt: 'Hiker on a trail approaching Ouzoud Falls in Morocco with mist rising from the cascade',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Waterfall Hikes 2026 | Complete Trail Guide',
    description:
      'Trail-by-trail guide to hiking Morocco\'s best waterfalls. Ouzoud Falls, Akchour, Paradise Valley, Setti Fatma. Difficulty ratings, gear lists, and costs from 100 MAD.',
    images: [`${BASE_URL}/images/hero-waterfalls.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD STRUCTURED DATA
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Waterfall Hikes 2026 | Ouzoud Falls, Akchour, Paradise Valley & Trail Guide',
  description:
    'Comprehensive hiking guide to Morocco\'s best waterfall trails. Ouzoud Falls, Akchour Waterfalls, Cascades d\'Imouzzer, Paradise Valley, Setti Fatma. Difficulty levels, distances, seasonal advice, gear lists, and costs.',
  url: PAGE_URL,
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
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
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
    { '@type': 'Place', name: 'Cascades d\'Imouzzer' },
    { '@type': 'Place', name: 'Sources Oum er Rbia' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Waterfall Hikes in Morocco', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the easiest waterfall hike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ouzoud Falls is the easiest waterfall to reach in Morocco. A paved stairway and maintained path descend from the village to the base of the 110-meter falls in about 20 minutes. No scrambling, no river crossings, and no guide needed. The full loop trail around the falls takes 2-3 hours at a relaxed pace and is suitable for families with children.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is the Akchour waterfall hike from Chefchaouen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Akchour trail starts about 30 km south of Chefchaouen (45-minute drive). From the trailhead, the small waterfall is 3 km each way (1.5-2 hours return). The grand waterfall is 5 km each way (3-4 hours return). The God\'s Bridge detour adds roughly 1 hour. Most hikers spend a full day combining the grand waterfall with God\'s Bridge.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need hiking boots for Morocco waterfall hikes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Ouzoud Falls and Paradise Valley, sturdy sandals or trail shoes are sufficient. For Akchour, Setti Fatma\'s upper waterfalls, and Sources Oum er Rbia, proper hiking shoes with grip are strongly recommended due to wet rocks and river crossings. Bring water shoes as well if you plan to swim, as pool bottoms can be slippery.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you hike to Setti Fatma waterfalls without a guide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The first waterfall at Setti Fatma is reachable without a guide -- the path from the village is straightforward, about 30 minutes over rocky terrain. For the upper six waterfalls, hiring a local guide (from 100-200 MAD) is strongly recommended. The scramble becomes steep and exposed, with sections where you need to use handholds on wet rock. Guides know the safest route.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year to hike to waterfalls in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March to May) is the ideal season. Atlas snowmelt feeds the waterfalls at maximum power, trails are lined with wildflowers, and daytime temperatures range from 18 to 28 degrees. Autumn (September to November) is the second-best window. Summer hikes are possible but start early to beat the heat. Winter offers dramatic water flow but muddy, slippery trails.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the Paradise Valley hike safe for kids?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The approach to Paradise Valley is manageable for children aged 8 and up who are comfortable scrambling over rocks. The first few pools are accessible with supervision. Deeper pools and cliff-jumping spots are not suitable for young children. There are no railings or safety barriers. Always watch children closely near water and slippery rocks.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a guided waterfall hike cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Costs vary by waterfall and format. A local village guide at Setti Fatma costs from 100-200 MAD per group. Licensed mountain guides for Atlas waterfall routes charge from 300-600 MAD per day. Organized day trips from Marrakech to Ouzoud Falls cost from 400-800 MAD per person including transport and lunch. Seasonal pricing applies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring on a waterfall hike in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential items include hiking shoes with good grip, 2-3 liters of water, swimsuit and quick-dry towel, waterproof phone case, sunscreen SPF 50+, sun hat, cash in small denominations for guides and cafes, and a packed lunch for longer trails. A polarizing filter for your camera cuts glare on water surfaces. Bring layers if hiking above 1,500 meters.',
      },
    },
  ],
};

/* ================================================================
   DATA: WATERFALL HIKE TRAILS
   ================================================================ */

const waterfallTrails = [
  {
    name: 'Ouzoud Falls Loop Trail',
    icon: Droplets,
    region: 'Middle Atlas, near Azilal',
    distance: '4 km loop',
    duration: '2-3 hours',
    elevation: '300 m descent and ascent',
    difficulty: 'Easy',
    swimming: true,
    guideNeeded: 'No',
    cost: 'Free entry, boat ride from 20 MAD',
    bestSeason: 'Year-round (peak flow: March-June)',
    trailDescription:
      'The trail begins at the car park in Ouzoud village, where paved steps and a dirt path descend through olive groves toward the canyon rim. After 15 minutes, the first viewpoint opens up with a head-on perspective of the 110-meter triple cascade. The path continues down to the base of the falls where a turquoise plunge pool collects the spray. Small wooden boats ferry visitors across the pool for views from directly beneath the falling water. A loop trail climbs back up the opposite side of the gorge through terraced olive farms, with wild Barbary macaques often visible in the branches overhead.',
    highlights: ['110-meter triple cascade with rainbow mist in morning light', 'Wild Barbary macaques in surrounding olive trees', 'Boat ride at the falls base from 20 MAD per person', 'Riverside tagine restaurants with waterfall views'],
    gettingThere: 'From Marrakech: 150 km northeast, 2.5-hour drive. Day tours from 400 MAD. Grand taxi to Azilal from 60 MAD, then local taxi from 20 MAD.',
  },
  {
    name: 'Akchour Grand Waterfall Trail',
    icon: Mountain,
    region: 'Rif Mountains, Talassemtane National Park',
    distance: '10 km round trip',
    duration: '4-5 hours',
    elevation: '600 m gain',
    difficulty: 'Moderate',
    swimming: true,
    guideNeeded: 'Optional (helpful for river crossings)',
    cost: 'Park entry from 20 MAD, guide from 200 MAD',
    bestSeason: 'April-November',
    trailDescription:
      'Starting from the park entrance 30 km south of Chefchaouen, the trail immediately enters a forested river gorge with crystal-clear pools at every bend. The first 3 km follow a well-marked path along the left bank, crossing the river on stepping stones several times. At the fork, the right branch leads to God\'s Bridge (a natural rock arch over a deep turquoise pool), while the left continues up the gorge to the grand waterfall. The final kilometer narrows with rock scrambling along the canyon wall, ending at a 60-meter cascade plunging into a misty amphitheater. The small waterfall (20 m) is a shorter 3 km detour on the same trail.',
    highlights: ['60-meter grand waterfall in a forested gorge amphitheater', 'God\'s Bridge natural rock arch with deep swimming pool', 'River crossings on stepping stones through turquoise water', 'Talassemtane National Park cedar and fir forest'],
    gettingThere: 'From Chefchaouen: 30 km, 45 minutes by car. Grand taxi from 30-50 MAD per person. No reliable public bus.',
  },
  {
    name: 'Paradise Valley Rock Pool Trail',
    icon: Waves,
    region: 'Anti-Atlas, between Agadir and Imouzzer',
    distance: '5 km round trip',
    duration: '3-4 hours',
    elevation: '250 m gain',
    difficulty: 'Easy-Moderate',
    swimming: true,
    guideNeeded: 'No',
    cost: 'Free entry, parking from 20 MAD',
    bestSeason: 'April-October',
    trailDescription:
      'From the parking area off the Agadir-Imouzzer road, the trail drops into a palm-lined gorge carved between red sandstone walls. The first pool appears after 20 minutes of walking over smooth boulders. A chain of progressively deeper natural pools stretches up the gorge, connected by short scrambles over dry rock ledges. The turquoise water is spring-fed and cold even in summer. Several flat rocks alongside the pools serve as natural sunbathing platforms. Rock jumping from ledges of 3-5 meters is common at the middle pools, though depth should always be checked first. The trail becomes rougher after the seventh pool, with larger boulders requiring hands-on scrambling.',
    highlights: ['Chain of turquoise natural swimming pools in a red gorge', 'Rock jumping from natural ledges at 3-5 meters', 'Palm-lined canyon with dramatic cliff walls', 'Just 45 minutes north of Agadir beach resorts'],
    gettingThere: 'From Agadir: 25 km north, 45 minutes by road. Grand taxi from 20-40 MAD. Rental car is easiest.',
  },
  {
    name: 'Setti Fatma Seven Waterfalls Trail',
    icon: TrendingUp,
    region: 'High Atlas, Ourika Valley',
    distance: '5 km round trip',
    duration: '3-5 hours (depends on how many falls)',
    elevation: '400 m gain (all seven falls)',
    difficulty: 'Easy (first fall) / Moderate-Hard (upper falls)',
    swimming: true,
    guideNeeded: 'Recommended for upper falls (from 100-200 MAD)',
    cost: 'Free access, guide tip from 100 MAD',
    bestSeason: 'March-October',
    trailDescription:
      'The trail starts from the Berber village of Setti Fatma, crossing the Ourika River on stepping stones (locals help for small tips). The path to the first waterfall is clear and takes about 30 minutes, climbing through boulder-strewn terrain alongside the rushing stream. A pool at the base of the first cascade is deep enough for swimming. Beyond the first fall, the terrain changes dramatically: the route becomes a scramble up wet rock faces, with local guides pointing out handholds and safe footing. Each successive waterfall is harder to reach. Most visitors stop at the second or third cascade. The full ascent to all seven requires 3-4 hours of climbing, a head for heights, and dry conditions.',
    highlights: ['Seven tiered waterfalls totaling over 200 meters of cascades', 'Riverside tagine restaurants built over the rushing Ourika River', 'Only 60 km from Marrakech, the closest mountain waterfall day trip', 'Berber village experience with mint tea and local crafts'],
    gettingThere: 'From Marrakech: 60 km south, 1 hour. Shared minibus from Bab er-Rob from 20-30 MAD. Day tours from 400 MAD.',
  },
  {
    name: 'Cascades d\'Imouzzer Canyon Trail',
    icon: Droplets,
    region: 'Western Atlas, near Agadir',
    distance: '3 km round trip',
    duration: '1.5-2 hours',
    elevation: '150 m descent',
    difficulty: 'Easy',
    swimming: false,
    guideNeeded: 'No',
    cost: 'Free entry',
    bestSeason: 'February-May (seasonal waterfall)',
    trailDescription:
      'From the village of Imouzzer Ida Outanane, a paved path leads to a dramatic canyon overlook where the 30-meter waterfall drops into a narrow ravine. The trail descends via stone steps to a lower viewpoint closer to the falls. The waterfall is seasonal, flowing strongly after winter rains from January through May and often drying to bare rock by July. The surrounding area is famous for its argan and almond trees, and local honey production draws visitors to the annual Honey Festival in May. The return climb is straightforward on the same path. Combine this with Paradise Valley (30 minutes away by car) for a full day trip from Agadir.',
    highlights: ['30-meter waterfall in a dramatic slot canyon setting', 'Famous local honey and the annual May Honey Festival', 'Easy to combine with nearby Paradise Valley in one day', 'Panoramic viewpoints over the Atlas foothills to the coast'],
    gettingThere: 'From Agadir: 60 km northeast, 1.5 hours by road. Day trips combining with Paradise Valley from 300-600 MAD.',
  },
  {
    name: 'Sources Oum er Rbia Springs Walk',
    icon: Droplets,
    region: 'Middle Atlas, near Khenifra',
    distance: '2 km round trip',
    duration: '1-1.5 hours',
    elevation: '100 m descent',
    difficulty: 'Easy',
    swimming: false,
    guideNeeded: 'No',
    cost: 'Free entry',
    bestSeason: 'Year-round',
    trailDescription:
      'The path from the parking area follows a maintained trail down to the mountainside where over forty springs explode simultaneously from the limestone cliff face. The result is a thundering wall of cascading water that feeds Morocco\'s longest river, the Oum er Rbia (555 km to the Atlantic). Unlike a single waterfall, the scene here is dozens of streams erupting from bare rock at different heights, merging into a roaring torrent below. The site is sacred to local Amazigh communities. Cedar forests surround the springs at this Middle Atlas altitude of 1,600 meters. The walk itself is short and gentle, making this more of a scenic visit than a proper hike, but the geological spectacle is unlike anything else in the country.',
    highlights: ['40+ springs erupting from a limestone cliff simultaneously', 'Source of Morocco\'s longest river, the Oum er Rbia (555 km)', 'Sacred Amazigh site with deep cultural significance', 'Cedar forest setting at 1,600 meters in the Middle Atlas'],
    gettingThere: 'From Khenifra: 40 km, 1 hour by road. Best reached by rental car. Grand taxi from 30-50 MAD.',
  },
] as const;

/* ================================================================
   DATA: DIFFICULTY COMPARISON
   ================================================================ */

const difficultyScale = [
  {
    level: 'Easy',
    icon: Footprints,
    color: 'bg-green-100 text-green-700',
    trails: 'Ouzoud Falls Loop, Cascades d\'Imouzzer, Sources Oum er Rbia',
    description: 'Maintained paths, stone steps, minimal scrambling. Suitable for families with children and people of average fitness. No special footwear required beyond comfortable walking shoes.',
  },
  {
    level: 'Easy-Moderate',
    icon: Route,
    color: 'bg-amber-100 text-amber-700',
    trails: 'Paradise Valley, Setti Fatma (first waterfall only)',
    description: 'Some rock scrambling and boulder hopping. Trail shoes recommended. Comfortable for regular walkers. Minor river crossings possible. Children 8+ with supervision.',
  },
  {
    level: 'Moderate',
    icon: Mountain,
    color: 'bg-orange-100 text-orange-700',
    trails: 'Akchour Grand Waterfall, Setti Fatma (upper falls)',
    description: 'Multiple river crossings, rock scrambling, narrow gorge sections. Hiking shoes with ankle support recommended. Reasonable fitness required. Guide helpful for Akchour, recommended for Setti Fatma upper falls.',
  },
  {
    level: 'Moderate-Hard',
    icon: TrendingUp,
    color: 'bg-red-100 text-red-700',
    trails: 'Setti Fatma (all seven waterfalls)',
    description: 'Steep scrambles on wet rock, exposed sections with drop-offs, handholds required. Local guide essential. Not suitable for those with vertigo. Dry conditions strongly preferred.',
  },
] as const;

/* ================================================================
   DATA: SEASONAL HIKING CONDITIONS
   ================================================================ */

const seasonalConditions = [
  {
    season: 'Spring (March-May)',
    icon: Droplets,
    rating: 'Best',
    conditions: 'Peak water flow from Atlas snowmelt. Wildflowers along every trail. Temperatures perfect for hiking at 18-28 degrees. All trails accessible. Pools filling to their deepest and bluest.',
    recommended: 'All waterfall hikes, especially Ouzoud, Setti Fatma, and Akchour at peak flow',
    caution: 'River crossings at Akchour can be swift in March-April after heavy melt',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    rating: 'Good',
    conditions: 'Hot at lower elevations (35-42 degrees in valleys). Swimming pools are irresistible. Some seasonal falls like Cascades d\'Imouzzer dry up. Start all hikes before 8:00 AM to beat the heat.',
    recommended: 'Paradise Valley (swimming), Ouzoud Falls (year-round flow), Akchour (early morning)',
    caution: 'Cascades d\'Imouzzer may be dry. Heat exhaustion risk at midday on exposed trails',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    rating: 'Good',
    conditions: 'Temperatures cool to comfortable hiking range. Fewer crowds than spring. October rains begin to revive seasonal waterfalls. Golden afternoon light for photography.',
    recommended: 'Ouzoud Falls, Akchour (after October rains), Sources Oum er Rbia, Paradise Valley',
    caution: 'Flash flood risk in gorges after sudden storms, particularly in November',
  },
  {
    season: 'Winter (December-February)',
    icon: CloudRain,
    rating: 'Mixed',
    conditions: 'Heavy rainfall feeds waterfalls at full power. Trails can be muddy and slippery. Mountain roads to remote falls may be impassable. Swimming is too cold. Dramatic photo opportunities.',
    recommended: 'Ouzoud Falls (spectacular heavy flow), Sources Oum er Rbia, Cascades d\'Imi-n-Ifri',
    caution: 'Wet rock scrambles at Setti Fatma become dangerous. Check road conditions before driving',
  },
] as const;

/* ================================================================
   DATA: ESSENTIAL GEAR
   ================================================================ */

const hikingGear = [
  { item: 'Hiking shoes with ankle support and grip', icon: Footprints, note: 'Essential for Akchour and Setti Fatma. Trail shoes fine for Ouzoud and Paradise Valley.' },
  { item: 'Water shoes or sturdy sandals', icon: Waves, note: 'For river crossings and rocky pool bottoms. Keens or Tevas work well.' },
  { item: 'Swimsuit and quick-dry towel', icon: Droplets, note: 'Many waterfalls have swimmable pools. Microfiber towels save pack space.' },
  { item: '2-3 liters of water per person', icon: Droplets, note: 'No reliable water sources on trails. Bring purification tablets as backup.' },
  { item: 'Sunscreen SPF 50+ and wide-brim hat', icon: Sun, note: 'UV intensity increases at altitude. Reapply every 2 hours on exposed trails.' },
  { item: 'Waterproof phone case or dry bag', icon: Camera, note: 'Spray and splashing are constant near falls. Protect electronics.' },
  { item: 'Cash in small denominations (MAD)', icon: DollarSign, note: 'For local guides, boat rides, tips, parking, and village cafe lunches.' },
  { item: 'Light layers and wind shell', icon: Wind, note: 'Gorge and canyon temperatures drop sharply in shade. Mountain elevations are cooler.' },
  { item: 'Basic first aid kit', icon: ShieldCheck, note: 'Blister plasters, antiseptic wipes, pain relief, and an elastic bandage for ankle twists.' },
  { item: 'Offline maps (Maps.me or AllTrails)', icon: Compass, note: 'Mobile coverage is unreliable at most waterfall trailheads.' },
] as const;

/* ================================================================
   DATA: FAQ
   ================================================================ */

const faqs = [
  {
    question: 'What is the easiest waterfall hike in Morocco?',
    answer:
      'Ouzoud Falls is the easiest waterfall to reach. A paved stairway and maintained path descend from the village to the base of the 110-meter falls in about 20 minutes. No scrambling, no river crossings, and no guide needed. The full loop trail takes 2-3 hours at a relaxed pace and works for families with children.',
  },
  {
    question: 'How long is the Akchour waterfall hike from Chefchaouen?',
    answer:
      'The trailhead is a 45-minute drive from Chefchaouen. From there, the small waterfall is 3 km each way (1.5-2 hours return). The grand waterfall is 5 km each way (3-4 hours return). The God\'s Bridge detour adds roughly 1 hour. Most hikers spend a full day combining the grand waterfall with God\'s Bridge.',
  },
  {
    question: 'Do I need hiking boots for Morocco waterfall hikes?',
    answer:
      'For Ouzoud Falls and Paradise Valley, sturdy sandals or trail shoes are sufficient. For Akchour, Setti Fatma\'s upper waterfalls, and Sources Oum er Rbia, proper hiking shoes with grip are strongly recommended due to wet rocks and river crossings. Bring water shoes if you plan to swim.',
  },
  {
    question: 'Can you hike to Setti Fatma waterfalls without a guide?',
    answer:
      'The first waterfall is reachable without a guide -- the path from the village is straightforward, about 30 minutes over rocky terrain. For the upper six waterfalls, hiring a local guide (from 100-200 MAD) is strongly recommended. The scramble becomes steep and exposed, with sections requiring handholds on wet rock.',
  },
  {
    question: 'When is the best time of year to hike to waterfalls in Morocco?',
    answer:
      'Spring (March to May) is the ideal season. Atlas snowmelt feeds waterfalls at maximum power, trails are lined with wildflowers, and daytime temperatures range from 18 to 28 degrees. Autumn (September to November) is the second-best window. Summer hikes work but require early starts to beat the heat.',
  },
  {
    question: 'Is the Paradise Valley hike safe for kids?',
    answer:
      'The approach is manageable for children aged 8 and up who are comfortable scrambling over rocks. The first few pools are accessible with supervision. Deeper pools and cliff-jumping spots are not suitable for young children. There are no railings or safety barriers anywhere.',
  },
  {
    question: 'How much does a guided waterfall hike cost in Morocco?',
    answer:
      'Costs vary by waterfall and format. A local village guide at Setti Fatma costs from 100-200 MAD per group. Licensed mountain guides charge from 300-600 MAD per day. Organized day trips from Marrakech to Ouzoud Falls cost from 400-800 MAD per person including transport and lunch. Seasonal pricing applies.',
  },
  {
    question: 'What should I bring on a waterfall hike in Morocco?',
    answer:
      'Essential items: hiking shoes with good grip, 2-3 liters of water, swimsuit and quick-dry towel, waterproof phone case, sunscreen SPF 50+, sun hat, cash in small denominations, and a packed lunch for longer trails. A polarizing filter for your camera cuts glare on water. Bring layers if hiking above 1,500 meters.',
  },
] as const;

/* ================================================================
   DATA: RELATED GUIDES
   ================================================================ */

const relatedGuides = [
  {
    href: '/morocco-day-hiking',
    icon: Route,
    title: 'Best Day Hikes in Morocco',
    description: '15 top day hikes across the Atlas Mountains, gorges, and coastal trails with difficulty ratings and practical details.',
  },
  {
    href: '/morocco-atlas-mountains',
    icon: Mountain,
    title: 'Atlas Mountains Guide',
    description: 'Complete guide to the High Atlas, Middle Atlas, and Anti-Atlas: trekking, villages, and seasonal advice.',
  },
  {
    href: '/morocco-road-trip',
    icon: Car,
    title: 'Morocco Road Trip Guide',
    description: 'Self-drive itineraries connecting waterfalls, gorges, mountains, and desert landscapes across Morocco.',
  },
  {
    href: '/morocco-nature-parks',
    icon: Compass,
    title: 'Morocco Nature Parks',
    description: 'National parks and protected areas including Talassemtane, Toubkal, Souss-Massa, and Ifrane cedar forests.',
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoWaterfallHikesPage() {
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
            <span className="text-white">Waterfall Hikes in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Droplets className="w-4 h-4" />
            Waterfall Hiking Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Waterfall Hikes in Morocco:
            <br className="hidden md:block" /> Trail-by-Trail Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Detailed hiking trails to Ouzoud Falls, Akchour, Paradise Valley, Setti Fatma,
            and more. Distances, difficulty ratings, gear advice, and costs from 100 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Hiking to Morocco&apos;s Waterfalls
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s waterfalls are earned on foot. The best cascades in the country hide at the end
                of gorge trails, behind Berber villages, and deep inside national parks where the only way
                in is walking. That effort is exactly what makes them worth it. Standing at the base of
                Ouzoud&apos;s 110-meter cascade after descending through olive groves, or reaching Akchour&apos;s
                grand waterfall after hours of rock-hopping through a turquoise river gorge, delivers a
                satisfaction that no roadside viewpoint can match.
              </p>
              <p>
                The Atlas Mountains, Rif ranges, and Anti-Atlas foothills create the conditions for dozens
                of waterfalls across the country. Snowmelt from peaks above 4,000 meters feeds rivers that
                carve through red sandstone, limestone, and granite, forming cascades that range from gentle
                curtains of mist to thundering 110-meter drops. Some, like the Sources Oum er Rbia, are
                geological anomalies where forty springs explode from a cliff face at once. Others, like
                Paradise Valley, form chains of turquoise swimming pools connected by small cascades through
                palm-lined canyons.
              </p>
              <p>
                This guide breaks down every major waterfall hike in Morocco trail by trail. You will find
                exact distances, elevation gains, difficulty ratings, what footwear to bring, where you can
                swim, when the water flows strongest, how to arrange transport, and what a guide costs.
                Each trail has been walked and described with the practical detail that hikers actually need
                to plan their day.
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
              <Route className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">6 Trails</div>
              <div className="text-sm text-[var(--text-muted)]">Waterfall hikes covered</div>
            </div>
            <div className="text-center">
              <Gauge className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Easy-Hard</div>
              <div className="text-sm text-[var(--text-muted)]">Difficulty range</div>
            </div>
            <div className="text-center">
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">4 Pools</div>
              <div className="text-sm text-[var(--text-muted)]">Swimmable waterfall hikes</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">100 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting guide cost</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Waterfall Trail Details ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Waterfall Hiking Trails in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Each trail described with distance, elevation, difficulty, and step-by-step route details
            so you know exactly what to expect before you lace up.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and costs may vary by operator.
          </p>

          <div className="space-y-8">
            {waterfallTrails.map((trail) => {
              const TrailIcon = trail.icon;
              return (
                <div key={trail.name} className="card-moroccan overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrailIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {trail.name}
                        </h3>
                        <span className="text-xs text-[var(--text-muted)]">{trail.region}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Route className="w-3 h-3 text-[var(--color-accent)]" /> {trail.distance}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 text-[var(--color-accent)]" /> {trail.duration}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <TrendingUp className="w-3 h-3 text-[var(--color-accent)]" /> {trail.elevation}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full">
                        <Gauge className="w-3 h-3 text-[var(--color-accent)]" /> {trail.difficulty}
                      </span>
                      {trail.swimming && (
                        <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                          <Waves className="w-3 h-3" /> Swimming
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1 text-xs bg-[var(--surface-muted)] px-2 py-1 rounded-full font-bold text-[var(--color-accent)]">
                        <DollarSign className="w-3 h-3" /> {trail.cost}
                      </span>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <Footprints className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                        Trail Description
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{trail.trailDescription}</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                        Highlights
                      </h4>
                      <div className="space-y-1.5">
                        {trail.highlights.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-sm bg-[var(--surface-muted)] p-3 rounded-lg">
                      <Car className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold text-[var(--text-primary)]">Getting there: </span>
                        <span className="text-[var(--text-secondary)]">{trail.gettingThere}</span>
                      </div>
                    </div>

                    <div className="mt-3 flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <Users className="w-3.5 h-3.5" />
                      Guide: {trail.guideNeeded}
                      <span className="mx-1">|</span>
                      <Calendar className="w-3.5 h-3.5" />
                      Best: {trail.bestSeason}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Difficulty Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gauge className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Trail Difficulty Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pick the right trail for your fitness level and experience. Morocco&apos;s waterfall
            hikes range from gentle strolls to serious scrambles.
          </p>

          <div className="space-y-4">
            {difficultyScale.map((level) => {
              const LevelIcon = level.icon;
              return (
                <div key={level.level} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <LevelIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {level.level}
                    </h3>
                    <span className={`ml-auto px-3 py-0.5 rounded-full text-xs font-bold ${level.color}`}>
                      {level.level}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{level.description}</p>
                  <div className="text-xs text-[var(--text-muted)] pt-3 border-t border-[var(--border-primary)]">
                    <strong className="text-[var(--color-accent)]">Trails:</strong> {level.trails}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Hiking Conditions ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Waterfall Hikes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Water levels, trail conditions, and hiking comfort vary dramatically by season.
            Timing your trip right means the difference between a thundering cascade and dry rock.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalConditions.map((season) => {
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
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.conditions}</p>
                  <div className="space-y-2 pt-3 border-t border-[var(--border-primary)]">
                    <div className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--color-accent)]">Recommended:</strong> {season.recommended}
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">
                      <AlertTriangle className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      <strong>Caution:</strong> {season.caution}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Essential Gear ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Bring on a Waterfall Hike
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The right gear keeps you safe and comfortable. Pack these essentials for any
            waterfall hike in Morocco, whether it is a 1-hour stroll or a full-day trek.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hikingGear.map((item, i) => {
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

      {/* ── Safety on Waterfall Hikes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety on Waterfall Trails
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s waterfall trails are generally safe, but moving water and wet rock
            demand respect. Follow these guidelines to stay out of trouble.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Flash Floods in Gorges
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Narrow gorges like Akchour and Paradise Valley can flood rapidly after heavy rain,
                    even if the sky is clear at your location. Rain upstream in the mountains can send
                    a wall of water through a gorge with little warning. Check weather forecasts for
                    the entire Atlas region before hiking, not just for your trailhead. Avoid gorge
                    hikes if rain is forecast anywhere in the catchment area.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Wet Rock and Slippery Surfaces
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Rocks near waterfalls are covered in a thin film of algae that becomes extremely
                    slippery when wet. This is the most common cause of injuries at Setti Fatma and
                    Akchour. Wear shoes with aggressive tread patterns and take your time on descents.
                    Trekking poles help with balance on wet terrain. Never run on wet rock.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Swimming Safety
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Always check water depth before jumping or diving into plunge pools. Currents
                    near the base of active waterfalls can pull swimmers under. Never swim alone.
                    Cold water temperatures (especially in spring from snowmelt) can cause cramps.
                    At Paradise Valley, rock jumping is popular but several injuries occur each year
                    from jumping into shallow sections. Ask locals about safe jumping points.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    When to Hire a Guide
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    A guide is essential for Setti Fatma&apos;s upper waterfalls (above the second cascade)
                    and recommended for Akchour in high water conditions. Local village guides at Setti
                    Fatma cost from 100-200 MAD and know every handhold on the scramble. At Akchour,
                    guides (from 200-300 MAD) help navigate tricky river crossings. For Ouzoud Falls
                    and Paradise Valley, guides are unnecessary as trails are well-marked.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photographing Morocco&apos;s Waterfalls
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tips for capturing these cascades at their most dramatic, from phone cameras
            to professional gear.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card-moroccan p-5">
              <Camera className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Polarizing Filter</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Cuts reflections on water surfaces and deepens the blue-green tones of pools.
                The single most useful filter for waterfall photography.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Sun className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Morning Light</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Shoot between 7-10 AM for soft, warm light. At Ouzoud, morning sun creates
                rainbows in the spray. Gorge waterfalls like Akchour stay in shade until midmorning.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Clock className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Slow Shutter</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Use 1/4 second or longer to create silky water effects. A mini tripod or flat
                rock stabilizes your camera. Phone users can try long-exposure modes.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Droplets className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Waterproof Protection</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Spray reaches further than you expect near active falls. A waterproof phone case
                or ziplock bag protects your gear. Wipe lenses between shots.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Users className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">People for Scale</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Include a person in the frame to convey the height of tall falls like Ouzoud
                (110 m) or Akchour&apos;s grand cascade (60 m). The human figure makes the scene hit harder.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Mountain className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Low Angles</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Shoot from the base looking up for the most dramatic compositions. At Ouzoud,
                the boat ride puts you at water level for an unforgettable perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport Overview ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to the Trailheads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to reach each waterfall trailhead from the nearest major city.
            Options range from organized tours to rental cars to public grand taxis.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                From Marrakech
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><strong>Ouzoud Falls:</strong> 150 km, 2.5 hours. Day tours from 400 MAD.</p>
                <p><strong>Setti Fatma:</strong> 60 km, 1 hour. Shared minibus from 20 MAD.</p>
                <p><strong>Sources Oum er Rbia:</strong> 250 km, 3.5 hours. Best by rental car.</p>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                From Chefchaouen
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><strong>Akchour Waterfalls:</strong> 30 km, 45 minutes. Grand taxi from 30 MAD.</p>
                <p>Talassemtane National Park entry from 20 MAD at the trailhead.</p>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                From Agadir
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><strong>Paradise Valley:</strong> 25 km, 45 minutes. Grand taxi from 20 MAD.</p>
                <p><strong>Cascades d&apos;Imouzzer:</strong> 60 km, 1.5 hours. Day tours from 300 MAD combining both.</p>
              </div>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <Info className="w-4 h-4 text-[var(--color-accent)]" />
                Transport Tips
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <p><strong>Grand taxis</strong> depart when full (6 passengers). Buy extra seats to leave sooner.</p>
                <p><strong>Rental cars</strong> give maximum flexibility for combining multiple waterfalls. All main roads are paved.</p>
                <p>Always agree on price and return arrangements before departing. Prices are seasonal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guided vs Solo ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Guided Hike vs Going Solo
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both approaches work. Here is an honest breakdown so you can choose what
            fits your budget, experience, and comfort level.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">With a Guide</h3>
                </div>
                <p className="text-white/80 text-sm">From 100-600 MAD depending on trail and format</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Local guides know every handhold at Setti Fatma, the safest river crossings at
                  Akchour, and the best viewpoints that most visitors walk past. Organized day trips
                  from cities handle all logistics including transport and lunch.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Essential for Setti Fatma upper waterfalls (safety)
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Local knowledge of hidden pools and viewpoints
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Day trips eliminate navigation and parking hassle
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Supports local village economies directly
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> Setti Fatma upper falls, Akchour in high water, first-time visitors, families
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="bg-[var(--color-accent)] p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Compass className="w-5 h-5" />
                  <h3 className="text-lg font-[family-name:var(--font-display)] font-bold">Self-Guided</h3>
                </div>
                <p className="text-white/80 text-sm">From 20-100 MAD (transport and entry only)</p>
              </div>
              <div className="p-5">
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  Grab a grand taxi or drive yourself, follow the trail at your own pace, and swim
                  as long as you want. Works perfectly for well-marked trails like Ouzoud, Paradise
                  Valley, and Cascades d&apos;Imouzzer.
                </p>
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Total freedom of pace and schedule
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Fraction of the cost of organized tours
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Linger at pools, skip crowds, set your own hours
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                    Combine multiple waterfalls in one day by car
                  </div>
                </div>
                <div className="pt-3 border-t border-[var(--border-primary)]">
                  <div className="text-xs text-[var(--text-muted)]">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> Ouzoud Falls, Paradise Valley, budget travelers, experienced hikers
                  </div>
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
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Real questions from travelers planning waterfall hikes in Morocco, answered with
            practical details.
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
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco hiking and nature adventures with these detailed guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
            Start Planning Your Waterfall Hike
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From the easy loop trail at Ouzoud to the full-day scramble at Setti Fatma,
            Morocco&apos;s waterfall hikes deliver scenery that no photograph can fully capture.
            Pick your trail, pack your bag, and go find falling water.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/morocco-day-hiking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Route className="w-5 h-5" />
              Day Hikes Guide
            </Link>
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  Calendar,
  Star,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Lightbulb,
  Shield,
  Sun,
  CloudSnow,
  Users,
  Heart,
  TreePine,
  Tent,
  Backpack,
  Compass,
  Route,
  TrendingUp,
  BadgeCheck,
  Footprints,
  Utensils,
  GlassWater,
  Timer,
  Navigation,
  Leaf,
  Baby,
  PersonStanding,
  Download,
  Map,
  BookOpen,
  DollarSign,
  Bed,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Trekking & Hiking in Morocco 2025-2026 | Mount Toubkal, Atlas Mountains Guide | CityGuide',
  description:
    'Complete trekking and hiking guide for Morocco. Mount Toubkal summit, Atlas Mountains trails, top 15 treks ranked by difficulty, guide hiring, mountain refuges, packing lists, and seasonal advice for 2025-2026.',
  keywords: [
    'Morocco trekking',
    'Mount Toubkal',
    'Atlas Mountains hiking',
    'Morocco hiking guide',
    'Toubkal summit',
    'Morocco trail guide',
    'Imlil Morocco',
    'Mgoun traverse',
    'Jebel Saghro',
    'Morocco mountain guide',
    'Atlas trekking season',
    'Morocco packing list trekking',
    'Berber villages trekking',
    'Morocco adventure',
    'Akchour waterfalls',
    'Morocco family hiking',
    'women trekking Morocco',
  ],
  openGraph: {
    title: 'Trekking & Hiking in Morocco 2025-2026 | Complete Guide | CityGuide',
    description:
      'Everything you need to know about trekking in Morocco. Mount Toubkal, top trails, guide hiring, mountain refuges, packing lists, and expert tips.',
    url: 'https://cityguide.ma/trekking',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Mount Toubkal summit in the High Atlas Mountains of Morocco',
      },
    ],
  },
  alternates: { canonical: 'https://cityguide.ma/trekking' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Trekking & Hiking in Morocco',
  description:
    'Complete guide to trekking and hiking in the Atlas Mountains and beyond, including Mount Toubkal, top trails, guides, and practical logistics.',
  url: 'https://cityguide.ma/trekking',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://cityguide.ma' },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.0596,
    longitude: -7.9154,
    name: 'Mount Toubkal, High Atlas Mountains',
  },
  touristType: ['Adventure Travelers', 'Hikers', 'Trekkers', 'Nature Enthusiasts'],
};

/* ===================================================================
   TREK DATA
   =================================================================== */

interface TrekInfo {
  rank: number;
  name: string;
  region: string;
  difficulty: 'easy' | 'easy-moderate' | 'moderate' | 'moderate-hard' | 'hard';
  duration: string;
  distance: string;
  maxAltitude: string;
  bestSeason: string;
  highlights: string[];
  description: string;
  guideRequired: boolean;
}

const treks: TrekInfo[] = [
  {
    rank: 1,
    name: 'Mount Toubkal Summit',
    region: 'High Atlas',
    difficulty: 'moderate-hard',
    duration: '2-3 days',
    distance: '28 km round trip',
    maxAltitude: '4,167m',
    bestSeason: 'April-June, September-October',
    highlights: [
      'North Africa\'s highest peak',
      'Panoramic views across the Atlas range to the Sahara',
      'Overnight at Toubkal Refuge (3,207m)',
      'Summit sunrise experience',
    ],
    description:
      'The crown jewel of Moroccan trekking. The standard 2-day route from Imlil is achievable for fit hikers with no technical climbing required, though the final summit push is steep and demanding at altitude. The extended 6-day circuit adds the beautiful Lac d\'Ifni and remote valleys.',
    guideRequired: false,
  },
  {
    rank: 2,
    name: "M'goun Traverse",
    region: 'Central High Atlas',
    difficulty: 'hard',
    duration: '5-6 days',
    distance: '65-80 km',
    maxAltitude: '4,068m',
    bestSeason: 'June-September',
    highlights: [
      'Morocco\'s second-highest peak',
      'Remote valleys and gorges',
      'Traditional Berber villages untouched by tourism',
      'Dramatic river canyon crossings',
    ],
    description:
      'A challenging multi-day traverse through some of Morocco\'s most spectacular and remote mountain scenery. The route crosses high passes, descends through dramatic gorges, and passes through villages where traditional Berber life continues unchanged. This is serious trekking for experienced hikers.',
    guideRequired: true,
  },
  {
    rank: 3,
    name: 'Jebel Saghro Circuit',
    region: 'Anti-Atlas',
    difficulty: 'moderate',
    duration: '4-5 days',
    distance: '55-65 km',
    maxAltitude: '2,712m',
    bestSeason: 'October-April',
    highlights: [
      'Volcanic desert landscape',
      'Dramatic rock formations and pinnacles',
      'Nomadic Ait Atta Berber camps',
      'Perfect winter trekking alternative to snowy Atlas',
    ],
    description:
      'The ideal winter trek when the High Atlas is snow-covered. Jebel Saghro offers an otherworldly volcanic landscape of basalt towers, deep gorges, and arid plateaus. The terrain is more like Arizona than the Alps, and encounters with semi-nomadic Berber communities are a highlight.',
    guideRequired: true,
  },
  {
    rank: 4,
    name: 'Ait Bouguemez Valley',
    region: 'Central High Atlas',
    difficulty: 'easy-moderate',
    duration: '3-4 days',
    distance: '40-50 km',
    maxAltitude: '2,200m',
    bestSeason: 'April-October',
    highlights: [
      '"Happy Valley" - one of Morocco\'s most beautiful valleys',
      'Terraced fields and walnut groves',
      'Ancient granaries (agadirs)',
      'Warm Berber hospitality',
    ],
    description:
      'Known as the "Happy Valley," Ait Bouguemez is a gentle, scenic trek perfect for those who want cultural immersion without extreme altitude. The valley is lined with traditional stone villages, irrigated terraces, and orchards. Homestays with Berber families are the highlight of this route.',
    guideRequired: false,
  },
  {
    rank: 5,
    name: 'Ourika Valley Day Hike',
    region: 'High Atlas (near Marrakech)',
    difficulty: 'easy',
    duration: '1 day',
    distance: '8-12 km',
    maxAltitude: '1,500m',
    bestSeason: 'Year-round (avoid flash floods Nov-Mar)',
    highlights: [
      'Just 45 minutes from Marrakech',
      'Seven waterfalls trail',
      'Berber villages and tea houses',
      'Saffron gardens in Tnine Ourika',
    ],
    description:
      'The easiest introduction to Atlas hiking, perfect for a half-day or full-day trip from Marrakech. Follow the Ourika River through terraced villages to a series of waterfalls. Riverside restaurants offer tagine lunches with stunning views. Be cautious near the river after rainfall.',
    guideRequired: false,
  },
  {
    rank: 6,
    name: 'Setti Fatma Waterfalls',
    region: 'High Atlas (Ourika Valley)',
    difficulty: 'easy',
    duration: 'Half day',
    distance: '4-5 km round trip',
    maxAltitude: '1,400m',
    bestSeason: 'April-October',
    highlights: [
      'Seven cascading waterfalls',
      'Natural swimming pools in summer',
      'Traditional Berber village',
      'Riverside lunch spots',
    ],
    description:
      'A popular day trip from Marrakech, the Setti Fatma waterfall trail is accessible to most fitness levels. The first two waterfalls are easy to reach; the upper falls require some scrambling over rocks. Local guides offer their services at the trailhead for a small fee. The village hosts a famous moussem (festival) each August.',
    guideRequired: false,
  },
  {
    rank: 7,
    name: 'Akchour Waterfalls',
    region: 'Rif Mountains (near Chefchaouen)',
    difficulty: 'easy-moderate',
    duration: '1 day',
    distance: '10-14 km round trip',
    maxAltitude: '800m',
    bestSeason: 'March-November',
    highlights: [
      'Turquoise natural pools',
      'God\'s Bridge (natural rock arch)',
      'Lush green forested valleys',
      'Swimming in crystal-clear water',
    ],
    description:
      'Located in the Talassemtane National Park near Chefchaouen, Akchour offers some of Morocco\'s most stunning waterfall scenery. Two trails split from the village: one leads to the waterfalls and natural pools, the other to God\'s Bridge, a dramatic natural rock arch spanning a gorge. Both can be combined in a full day.',
    guideRequired: false,
  },
  {
    rank: 8,
    name: 'Jebel Sirwa',
    region: 'Anti-Atlas',
    difficulty: 'moderate',
    duration: '4 days',
    distance: '45-55 km',
    maxAltitude: '3,305m',
    bestSeason: 'October-May',
    highlights: [
      'Extinct volcanic peak',
      'Saffron-growing villages',
      'Dramatic basalt formations',
      'Very few other trekkers',
    ],
    description:
      'Jebel Sirwa sits between the High Atlas and Anti-Atlas, offering a unique trek through saffron-growing country. The landscape is volcanic and dramatic, with far fewer trekkers than Toubkal or M\'goun. October-November timing coincides with the saffron harvest, adding a cultural dimension to the adventure.',
    guideRequired: true,
  },
  {
    rank: 9,
    name: 'Tazaghart Plateau',
    region: 'High Atlas',
    difficulty: 'moderate',
    duration: '2-3 days',
    distance: '20-25 km',
    maxAltitude: '3,843m',
    bestSeason: 'May-October',
    highlights: [
      'Dramatic high-altitude plateau',
      'Less crowded alternative to Toubkal',
      'Stunning views of Toubkal massif',
      'CAF refuge at Lepiney',
    ],
    description:
      'The Tazaghart Plateau offers a rewarding alternative to the more popular Toubkal route, with dramatic high-altitude terrain and far fewer fellow trekkers. The route passes through the Azzaden Valley and climbs to the Tazaghart Refuge before reaching the exposed plateau. Excellent views of the entire Toubkal massif.',
    guideRequired: false,
  },
  {
    rank: 10,
    name: "Imlil to Lac d'Ifni",
    region: 'High Atlas',
    difficulty: 'moderate',
    duration: '2 days',
    distance: '22-26 km',
    maxAltitude: '3,600m (Tizi n\'Ouanoums pass)',
    bestSeason: 'May-October',
    highlights: [
      'Morocco\'s largest mountain lake',
      'Stunning turquoise glacial lake',
      'High mountain passes',
      'Less crowded than Toubkal route',
    ],
    description:
      'This route leads from the trekking hub of Imlil over a high pass to Lac d\'Ifni, a stunning turquoise lake nestled at 2,312m. It is Morocco\'s largest natural mountain lake and offers superb wild camping. Often combined with a Toubkal summit as part of a 3-4 day circuit.',
    guideRequired: false,
  },
  {
    rank: 11,
    name: 'Todra Gorge to Dades Valley',
    region: 'Eastern High Atlas',
    difficulty: 'moderate',
    duration: '3-4 days',
    distance: '40-50 km',
    maxAltitude: '2,800m',
    bestSeason: 'March-May, September-November',
    highlights: [
      'Dramatic 300m-high gorge walls',
      'Palm-lined river valleys',
      'Kasbahs and fortified villages',
      'Rock climbing opportunities in Todra',
    ],
    description:
      'Connecting two of Morocco\'s most dramatic gorges, this trek traverses the rugged terrain between the Todra and Dades valleys. The route passes through remote Berber villages, over mountain passes, and alongside dramatic cliff faces. Spring brings wildflowers; autumn offers perfect temperatures.',
    guideRequired: true,
  },
  {
    rank: 12,
    name: 'Bou Iblane Summit',
    region: 'Middle Atlas',
    difficulty: 'moderate-hard',
    duration: '2-3 days',
    distance: '25-30 km',
    maxAltitude: '3,340m',
    bestSeason: 'June-September',
    highlights: [
      'Middle Atlas highest peak',
      'Cedar and oak forests',
      'Barbary macaque sightings',
      'Solitude and untouched wilderness',
    ],
    description:
      'Bou Iblane is one of the least-visited major peaks in Morocco, offering true wilderness trekking in the Middle Atlas. Dense cedar forests give way to alpine meadows and rocky ridges. Wildlife sightings are common, including Barbary macaques, eagles, and wild boar. Infrastructure is minimal &mdash; this is for experienced trekkers.',
    guideRequired: true,
  },
  {
    rank: 13,
    name: 'Paradise Valley',
    region: 'Western High Atlas (near Agadir)',
    difficulty: 'easy',
    duration: 'Half day to 1 day',
    distance: '5-8 km',
    maxAltitude: '600m',
    bestSeason: 'March-November',
    highlights: [
      'Natural rock pools and waterfalls',
      'Palm-fringed canyon',
      'Swimming in warm emerald pools',
      'Easy access from Agadir or Taghazout',
    ],
    description:
      'A chain of natural rock pools and small waterfalls set in a palm-fringed canyon between Agadir and Imouzzer. Paradise Valley is more of a nature walk and swimming excursion than serious trekking, making it ideal for families, casual hikers, or a day off from more demanding trails.',
    guideRequired: false,
  },
  {
    rank: 14,
    name: 'Azzaden Valley Circuit',
    region: 'High Atlas',
    difficulty: 'easy-moderate',
    duration: '2-3 days',
    distance: '25-30 km',
    maxAltitude: '2,500m',
    bestSeason: 'April-November',
    highlights: [
      'Pristine valley with walnut groves',
      'Traditional Berber villages',
      'Azzaden Trekking Lodge',
      'Quieter alternative to Imlil trails',
    ],
    description:
      'The Azzaden Valley, just west of Imlil, is one of the High Atlas\'s best-kept secrets. A gentle circuit through terraced villages, walnut forests, and mountain streams offers an authentic glimpse of mountain life without the intensity of high-altitude trekking. The Azzaden Trekking Lodge provides comfortable accommodation.',
    guideRequired: false,
  },
  {
    rank: 15,
    name: 'Tichka Plateau',
    region: 'High Atlas',
    difficulty: 'easy-moderate',
    duration: '2 days',
    distance: '18-22 km',
    maxAltitude: '2,260m',
    bestSeason: 'Year-round',
    highlights: [
      'High pastoral plateau',
      'Berber shepherd encounters',
      'Wildflower meadows in spring',
      'Gateway to the Tizi n\'Tichka pass',
    ],
    description:
      'The Tichka Plateau above the famous Tizi n\'Tichka mountain pass offers easy trekking through pastoral landscapes. Berber shepherds graze their flocks across wide grasslands, and the views extend to snow-capped peaks. Spring covers the plateau in wildflowers. A good option for those seeking gentle walking with cultural encounters.',
    guideRequired: false,
  },
];

/* ===================================================================
   TOUBKAL ROUTE DATA
   =================================================================== */

interface RouteDay {
  day: string;
  title: string;
  description: string;
  elevation: string;
  distance: string;
  duration: string;
}

const toubkalStandardRoute: RouteDay[] = [
  {
    day: 'Day 1',
    title: 'Imlil to Toubkal Refuge',
    description:
      'Begin at Imlil village (1,740m). Trek through the Armed valley, passing walnut groves and the village of Sidi Chamarouch (a pilgrimage site with a white-painted boulder). Steady uphill on a well-marked mule track to the Toubkal Refuge (Refuge du Toubkal), run by the CAF (Club Alpin Francais). Settle in, acclimatize, and prepare for the early morning summit push.',
    elevation: '1,740m to 3,207m (+1,467m)',
    distance: '10 km',
    duration: '5-6 hours',
  },
  {
    day: 'Day 2',
    title: 'Summit and Descent to Imlil',
    description:
      'Pre-dawn start (around 5:00 AM) to reach the summit for sunrise. The trail climbs steeply through a boulder field and scree slopes. The final section is a scramble over large rocks, marked with cairns. On clear days, views extend from the Sahara to the Atlantic. After celebrating at the summit pyramid, descend the same route back to the refuge for tea, then continue down to Imlil.',
    elevation: '3,207m to 4,167m, then down to 1,740m',
    distance: '18 km',
    duration: '8-10 hours (3-4 up, 5-6 down)',
  },
];

const toubkalExtendedRoute: RouteDay[] = [
  {
    day: 'Day 1',
    title: 'Imlil to Around village',
    description: 'Gentle trek from Imlil through the Armed valley to the traditional village of Around (Aremd). Explore the village, visit a Berber household, and acclimatize to the altitude.',
    elevation: '1,740m to 1,940m',
    distance: '3 km',
    duration: '1.5 hours',
  },
  {
    day: 'Day 2',
    title: 'Around to Azib Tamsoult',
    description: 'Cross the Tizi Mzik pass (2,489m) and descend into the Azzaden Valley. Continue to the shepherd camp of Azib Tamsoult with stunning views of the southern Atlas.',
    elevation: '1,940m to 2,489m to 2,250m',
    distance: '14 km',
    duration: '6-7 hours',
  },
  {
    day: 'Day 3',
    title: 'Azib Tamsoult to Lac d\'Ifni',
    description: 'Trek south over the Tizi n\'Ouanoums pass (3,664m), the highest pass of the circuit. Descend to the stunning turquoise Lac d\'Ifni, Morocco\'s largest natural mountain lake. Wild camp or use basic shelter.',
    elevation: '2,250m to 3,664m to 2,312m',
    distance: '12 km',
    duration: '7-8 hours',
  },
  {
    day: 'Day 4',
    title: 'Lac d\'Ifni to Toubkal Refuge',
    description: 'Climb from the lake up the Ikhibi Sud valley to join the standard Toubkal route near the refuge. This is a long ascending day through increasingly barren terrain.',
    elevation: '2,312m to 3,207m',
    distance: '8 km',
    duration: '5-6 hours',
  },
  {
    day: 'Day 5',
    title: 'Summit and Descent to Refuge',
    description: 'Pre-dawn summit push. The route is the same as the standard ascent through the south cwm and scree slopes. Return to the refuge for a well-earned rest.',
    elevation: '3,207m to 4,167m to 3,207m',
    distance: '8 km',
    duration: '6-8 hours',
  },
  {
    day: 'Day 6',
    title: 'Refuge to Imlil',
    description: 'Final descent through the valley of the Mizane river. Stop at Sidi Chamarouch for tea, then continue down to Imlil. Celebration lunch in the village.',
    elevation: '3,207m to 1,740m',
    distance: '10 km',
    duration: '3-4 hours',
  },
];

/* ===================================================================
   SEASONAL DATA
   =================================================================== */

interface SeasonInfo {
  season: string;
  months: string;
  highAtlas: string;
  antiAtlas: string;
  rif: string;
  temperature: string;
  recommendation: string;
}

const seasons: SeasonInfo[] = [
  {
    season: 'Spring',
    months: 'March - May',
    highAtlas: 'Excellent. Snow melting, wildflowers blooming, rivers flowing. Higher passes may have snow until late May.',
    antiAtlas: 'Perfect conditions. Not yet too hot, green landscapes after winter rains.',
    rif: 'Ideal. Lush green forests, waterfalls at full flow, comfortable temperatures.',
    temperature: '10-25 C at lower altitudes, -5 to 15 C above 3,000m',
    recommendation: 'Best overall season for most treks. Book guides in advance for April-May.',
  },
  {
    season: 'Summer',
    months: 'June - August',
    highAtlas: 'Good for high-altitude treks (above 2,500m). Snow-free passes. Very hot at lower altitudes.',
    antiAtlas: 'Too hot for comfortable trekking. Temperatures exceed 40 C. Avoid.',
    rif: 'Hot but manageable. Forest cover provides shade. Early morning starts recommended.',
    temperature: '25-40 C at lower altitudes, 5-20 C above 3,000m',
    recommendation: 'Best for Toubkal and high-altitude treks. Start early, carry extra water.',
  },
  {
    season: 'Autumn',
    months: 'September - November',
    highAtlas: 'Excellent. Stable weather, clear skies, comfortable temperatures. The best month overall is October.',
    antiAtlas: 'Becoming pleasant. October onward is ideal for Jebel Saghro and Sirwa.',
    rif: 'Good. Warm but not hot. Harvest season adds cultural interest.',
    temperature: '15-30 C at lower altitudes, 0-15 C above 3,000m',
    recommendation: 'Arguably the best season. October is peak trekking month across all regions.',
  },
  {
    season: 'Winter',
    months: 'December - February',
    highAtlas: 'Snow above 2,000m. Technical equipment needed for Toubkal. Beautiful but challenging.',
    antiAtlas: 'Ideal for Jebel Saghro. Pleasant daytime temperatures, cold nights. The premier winter trekking destination.',
    rif: 'Wet and cold. Not recommended unless you enjoy rain and mud.',
    temperature: '5-18 C at lower altitudes, -15 to 5 C above 3,000m',
    recommendation: 'Head to Jebel Saghro or Anti-Atlas. High Atlas for experienced winter trekkers only.',
  },
];

/* ===================================================================
   PACKING LIST DATA
   =================================================================== */

interface PackingCategory {
  category: string;
  items: string[];
}

const packingList: PackingCategory[] = [
  {
    category: 'Clothing',
    items: [
      'Moisture-wicking base layers (2-3 sets)',
      'Insulating fleece or down mid-layer',
      'Waterproof and windproof shell jacket',
      'Trekking trousers (zip-off legs useful)',
      'Warm hat and sun hat',
      'Buff or bandana (sun and dust protection)',
      'Warm gloves (essential above 3,000m)',
      'Thermal underwear for cold nights',
      'Comfortable camp clothes',
    ],
  },
  {
    category: 'Footwear',
    items: [
      'Broken-in hiking boots with ankle support',
      'Merino wool trekking socks (3-4 pairs)',
      'Camp sandals or lightweight shoes',
      'Gaiters for scree sections (optional but useful for Toubkal)',
      'Blister prevention tape (Compeed or Leukotape)',
    ],
  },
  {
    category: 'Equipment',
    items: [
      'Daypack (30-40L for multi-day, 20L for day hikes)',
      'Sleeping bag (comfort rating -5 C for refuges)',
      'Trekking poles (highly recommended for descents)',
      'Headlamp with spare batteries',
      'Sunglasses (UV400 protection, Category 3-4)',
      'Water bottles or hydration bladder (2-3L capacity)',
      'Water purification tablets or filter',
      'Lightweight dry bags for electronics',
    ],
  },
  {
    category: 'Health & Safety',
    items: [
      'First aid kit (see our Health Guide for details)',
      'SPF 50+ sunscreen and lip balm with SPF',
      'Insect repellent',
      'Altitude sickness medication (consult doctor)',
      'Oral rehydration salts',
      'Personal medications with doctor\'s letter',
      'Emergency whistle',
      'Emergency blanket',
    ],
  },
  {
    category: 'Navigation & Tech',
    items: [
      'Offline maps downloaded (Maps.me or AllTrails)',
      'Portable power bank (10,000+ mAh)',
      'Phone with GPS capability',
      'Physical map of the area (available in Imlil shops)',
      'Compass (optional but good backup)',
      'Camera with extra memory cards',
    ],
  },
  {
    category: 'Food & Drink',
    items: [
      'High-energy snacks (nuts, dried fruit, energy bars)',
      'Electrolyte powder packets',
      'Instant coffee or tea bags (refuges have hot water)',
      'Reusable water bottle (LifeStraw or Grayl for purifying)',
      'Chocolate and sweets for quick energy',
    ],
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function TrekkingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
            alt="Trekkers on the trail to Mount Toubkal summit in the High Atlas Mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Trekking</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Adventure &amp; Outdoors
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Trekking &amp; Hiking Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From the 4,167-meter summit of Mount Toubkal to gentle waterfall walks near Chefchaouen &mdash; Morocco offers world-class trekking through dramatic landscapes, ancient Berber villages, and some of North Africa&apos;s most spectacular wilderness.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          OVERVIEW / WHY TREK IN MOROCCO
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Trek in Morocco?
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco is one of the great trekking destinations in the world, yet it remains far less crowded than Nepal, Peru, or the European Alps. The Atlas Mountains form the backbone of the country, stretching over 2,500 kilometers from the Atlantic coast to the Algerian border, with peaks exceeding 4,000 meters and valleys that have changed little in centuries.
            </p>
            <p>
              What makes Morocco special is the combination of dramatic mountain scenery, living Berber culture, and accessibility. You can fly into Marrakech in the morning and be trekking through traditional villages by the afternoon. The infrastructure of guides, mountain refuges, and mule support makes multi-day treks manageable even for those new to trekking, while remote routes like the M&apos;goun Traverse challenge experienced adventurers.
            </p>
            <p>
              Year-round trekking is possible by shifting between regions: the High Atlas in spring and autumn, the Anti-Atlas and Jebel Saghro in winter, and the Rif Mountains whenever you seek green, forested landscapes. Morocco offers everything from gentle half-day walks to demanding week-long expeditions.
            </p>
          </div>

          {/* Trekking at a Glance */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-primary)]">4,167m</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Highest Peak (Toubkal)</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)]">15+</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Major Trek Routes</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-primary)]">Year-Round</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Trekking Season</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-2xl font-bold text-[var(--color-green)]">2,500km</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Atlas Mountain Range</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MOUNT TOUBKAL DETAILED GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Mountain className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Mount Toubkal (4,167m) &mdash; North Africa&apos;s Highest Peak
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1548820557-f0c4bc936f9b?w=800&q=80"
                  alt="Mount Toubkal summit view with trekkers at the summit pyramid"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Mount Toubkal is the highest peak in North Africa and the most popular trek in Morocco. Standing at 4,167 meters in the heart of the High Atlas, it is achievable for fit hikers with no technical climbing experience required. The standard 2-day route from the village of Imlil is the most common approach.
                  </p>
                  <p>
                    Despite being classified as a &quot;walk-up&quot; in mountaineering terms, Toubkal should not be underestimated. The altitude is significant, the final summit push is steep and exposed, and conditions can change rapidly. Proper preparation and equipment are essential.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Key Information</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <TrendingUp className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Difficulty</p>
                      <p className="text-sm text-[var(--text-secondary)]">Moderate-Hard. No technical skills required, but fitness and altitude tolerance are essential.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <Timer className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Fitness Requirements</p>
                      <p className="text-sm text-[var(--text-secondary)]">You should be able to hike 6-8 hours with a daypack and have experience with steep terrain. Regular cardio fitness is essential. Start training 8-12 weeks before.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <Mountain className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Altitude Preparation</p>
                      <p className="text-sm text-[var(--text-secondary)]">Spend at least 1 night in Imlil (1,740m) before starting. Hydrate aggressively. Consider an extra acclimatization day. 20-25% of trekkers experience altitude symptoms.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <Calendar className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Best Season</p>
                      <p className="text-sm text-[var(--text-secondary)]">April-June and September-October. Summer (July-August) is snow-free but very hot at lower elevations. Winter requires crampons and ice axe.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                    <DollarSign className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Typical Cost</p>
                      <p className="text-sm text-[var(--text-secondary)]">DIY: 800-1,200 MAD ($80-120 USD) for refuge, meals, and mule. With guide: 2,500-4,000 MAD ($250-400 USD) all-inclusive for 2 days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Standard 2-Day Route */}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Route className="w-5 h-5 text-[var(--color-primary)]" />
            Standard 2-Day Route from Imlil
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {toubkalStandardRoute.map((day) => (
              <div key={day.day} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-sm">
                    {day.day.split(' ')[1]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)]">{day.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{day.day}</p>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{day.description}</p>
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2 rounded-lg bg-[var(--surface-muted)] text-center">
                    <p className="text-xs text-[var(--text-secondary)]">Elevation</p>
                    <p className="text-xs font-bold text-[var(--text-primary)]">{day.elevation}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--surface-muted)] text-center">
                    <p className="text-xs text-[var(--text-secondary)]">Distance</p>
                    <p className="text-xs font-bold text-[var(--text-primary)]">{day.distance}</p>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--surface-muted)] text-center">
                    <p className="text-xs text-[var(--text-secondary)]">Duration</p>
                    <p className="text-xs font-bold text-[var(--text-primary)]">{day.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Extended 6-Day Circuit */}
          <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
            <Compass className="w-5 h-5 text-[var(--color-primary)]" />
            Extended 6-Day Toubkal Circuit
          </h3>
          <p className="text-[var(--text-secondary)] mb-6 max-w-3xl">
            The extended circuit adds Lac d&apos;Ifni and remote valleys for a more comprehensive mountain experience. This route is best done with a guide and mule support.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {toubkalExtendedRoute.map((day) => (
              <div key={day.day} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs">
                    {day.day.split(' ')[1]}
                  </div>
                  <h4 className="font-bold text-[var(--text-primary)] text-sm">{day.title}</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-3">{day.description}</p>
                <div className="flex gap-2 text-xs">
                  <span className="px-2 py-1 rounded-md bg-[var(--surface-muted)] text-[var(--text-secondary)]">{day.distance}</span>
                  <span className="px-2 py-1 rounded-md bg-[var(--surface-muted)] text-[var(--text-secondary)]">{day.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TOP 15 TREKS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Footprints className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Top 15 Treks Ranked by Difficulty
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            From gentle waterfall walks to demanding multi-day mountain traverses, Morocco has a trek for every fitness level and ambition. Here are our top 15 routes, ranked and reviewed.
          </p>

          <div className="space-y-6">
            {treks.map((trek) => (
              <div key={trek.rank} className="card-moroccan p-6">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-center gap-4 lg:min-w-[140px]">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-lg">
                      #{trek.rank}
                    </div>
                    <div className="lg:hidden">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{trek.name}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{trek.region}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="hidden lg:block mb-3">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{trek.name}</h3>
                      <p className="text-sm text-[var(--text-secondary)]">{trek.region}</p>
                    </div>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">{trek.description}</p>

                    {/* Trek Details */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        trek.difficulty === 'easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400' :
                        trek.difficulty === 'easy-moderate' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400' :
                        trek.difficulty === 'moderate' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/20 dark:text-amber-400' :
                        trek.difficulty === 'moderate-hard' ? 'bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400' :
                        'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400'
                      }`}>
                        {trek.difficulty}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                        {trek.duration}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                        {trek.distance}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)]">
                        Max: {trek.maxAltitude}
                      </span>
                      {trek.guideRequired && (
                        <span className="px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
                          Guide recommended
                        </span>
                      )}
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3">
                      {trek.highlights.map((highlight) => (
                        <span key={highlight} className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                          <Star className="w-3 h-3 text-[var(--color-accent)]" />
                          {highlight}
                        </span>
                      ))}
                    </div>

                    {/* Best Season */}
                    <div className="mt-3 flex items-center gap-2 text-xs text-[var(--text-secondary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      <strong className="text-[var(--text-primary)]">Best season:</strong> {trek.bestSeason}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HIRING A GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-white/10">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white">
              Hiring a Mountain Guide
            </h2>
          </div>
          <p className="text-white/70 mb-8 max-w-3xl">
            While not legally required for most treks, hiring a certified mountain guide is strongly recommended for safety, navigation, cultural insight, and to support the local Berber economy. Guides make the difference between a good trek and an unforgettable one.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Why Hire a Guide?</h3>
              </div>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Safety in remote areas with no cell coverage</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Navigation on unmarked or confusing trails</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Cultural bridge to Berber communities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Altitude sickness awareness and management</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Logistics: mules, accommodation, meals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                  <span>Local knowledge of weather and conditions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <BadgeCheck className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Certified Guides</h3>
              </div>
              <div className="space-y-3 text-white/70 text-sm">
                <p>
                  Look for guides certified by CFAMM (Centre de Formation aux Metiers de Montagne) in Tabant. Certified guides carry an official card and have completed rigorous training in mountain safety, first aid, and navigation.
                </p>
                <p>
                  <strong className="text-white">Bureau des Guides</strong> offices in Imlil, Tabant, and other trekking hubs are the official booking points. Avoid hiring unofficial guides who approach you at trailheads.
                </p>
                <p>
                  Your hotel, riad, or a reputable trekking agency can arrange certified guides with verified credentials. Book at least 2-3 weeks in advance during peak season (April-May, September-October).
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-5 h-5 text-green-400" />
                <h3 className="text-lg font-bold text-white">Guide Costs (2025-2026)</h3>
              </div>
              <ul className="space-y-3 text-white/70 text-sm">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Day hike guide:</strong> 400-600 MAD/day ($40-60 USD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Multi-day trek guide:</strong> 500-800 MAD/day ($50-80 USD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Mule + muleteer:</strong> 200-300 MAD/day ($20-30 USD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Cook (multi-day):</strong> 250-400 MAD/day ($25-40 USD)</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Tip (standard):</strong> 50-100 MAD/day for guide, 30-50 MAD/day for muleteer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MOUNTAIN REFUGES & ACCOMMODATION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Bed className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Mountain Refuges &amp; Accommodation
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Tent className="w-5 h-5 text-[var(--color-primary)]" />
                  CAF Mountain Refuges
                </h3>
                <div className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                  <p>
                    The Club Alpin Francais (CAF) operates several mountain refuges (huts) in the High Atlas, with the Toubkal Refuge (Refuge du Toubkal) at 3,207m being the most famous and heavily used. These are basic shared dormitories with mattresses, blankets, a kitchen area, and a communal dining space.
                  </p>
                  <p>
                    The newly renovated Les Mouflons du Toubkal refuge offers a more comfortable alternative to the original CAF refuge, with better facilities and meal service. Both refuges fill up quickly during peak season &mdash; book in advance.
                  </p>
                  <p>
                    <strong className="text-[var(--text-primary)]">Refuge costs:</strong> 100-200 MAD ($10-20 USD) per night for a bunk. Meals are available at 50-100 MAD per meal. Bring your own sleeping bag for warmth as blankets alone may not suffice.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <Home className="w-5 h-5 text-[var(--color-primary)]" />
                  Other Accommodation
                </h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Berber gites (homestays):</strong> Family-run guesthouses in villages along trekking routes. Simple but charming rooms with home-cooked meals. 150-300 MAD ($15-30 USD) half-board. The most authentic accommodation experience.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Trekking lodges:</strong> More comfortable options like the Kasbah du Toubkal in Imlil and the Azzaden Trekking Lodge. Modern comforts with mountain views. 500-1,500 MAD ($50-150 USD) per night.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Wild camping:</strong> Permitted in most mountain areas. Bivouac sites near refuges are popular. Bring a lightweight tent, sleeping bag rated for cold nights (-5 C and below above 3,000m), and pack out all waste.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                    <span><strong className="text-[var(--text-primary)]">Shepherd shelters (azib):</strong> Basic stone shelters used by shepherds, sometimes available for trekkers on remote routes. Ask your guide to arrange. Bring your own food and sleeping equipment.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TREKKING SEASONS BY REGION
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Calendar className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Trekking Seasons by Region
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            Morocco&apos;s diverse geography means there is always somewhere to trek. Understanding the seasonal conditions by region is crucial for planning a safe and enjoyable trip.
          </p>

          <div className="space-y-6">
            {seasons.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`inline-flex p-2 rounded-lg ${
                    season.season === 'Spring' ? 'bg-green-100 dark:bg-green-900/10 text-green-700 dark:text-green-400' :
                    season.season === 'Summer' ? 'bg-amber-100 dark:bg-amber-900/10 text-amber-700 dark:text-amber-400' :
                    season.season === 'Autumn' ? 'bg-orange-100 dark:bg-orange-900/10 text-orange-700 dark:text-orange-400' :
                    'bg-blue-100 dark:bg-blue-900/10 text-blue-700 dark:text-blue-400'
                  }`}>
                    {season.season === 'Spring' ? <TreePine className="w-5 h-5" /> :
                     season.season === 'Summer' ? <Sun className="w-5 h-5" /> :
                     season.season === 'Autumn' ? <Leaf className="w-5 h-5" /> :
                     <CloudSnow className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">{season.season}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{season.months} | {season.temperature}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">High Atlas</p>
                    <p className="text-sm text-[var(--text-secondary)]">{season.highAtlas}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Anti-Atlas / Saghro</p>
                    <p className="text-sm text-[var(--text-secondary)]">{season.antiAtlas}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1">Rif Mountains</p>
                    <p className="text-sm text-[var(--text-secondary)]">{season.rif}</p>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/10">
                  <p className="text-sm">
                    <strong className="text-blue-700 dark:text-blue-400">Recommendation:</strong>{' '}
                    <span className="text-[var(--text-secondary)]">{season.recommendation}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PACKING LIST
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Backpack className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Packing List for Moroccan Treks
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] mb-8 max-w-3xl">
            This packing list covers multi-day treks in the Atlas Mountains. Adjust based on season, duration, and whether you are using mule support (which carries heavier gear). For day hikes, take a lighter subset.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingList.map((group) => (
              <div key={group.category} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-3 text-sm uppercase tracking-wide">{group.category}</h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[var(--text-secondary)] text-sm">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          ALTITUDE MANAGEMENT
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Altitude Management Tips
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/10 mb-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-amber-700 dark:text-amber-400 mb-1">Altitude Is a Serious Concern on Toubkal</h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    At 4,167m, Toubkal is high enough to cause acute mountain sickness (AMS) in 20-25% of trekkers. Most ascend too quickly from Marrakech (450m) to the summit in just 2 days, giving the body insufficient time to acclimatize.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Acclimatization Strategy</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Spend 1-2 nights in Imlil (1,740m)</strong> before starting your trek. This gives your body a head start on acclimatization.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Climb high, sleep low.</strong> On your acclimatization day in Imlil, hike up to 2,500-3,000m and return to sleep at a lower elevation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Hydrate aggressively.</strong> Drink 3-4 liters per day at altitude. Dehydration worsens altitude symptoms. Avoid alcohol for the first 48 hours above 2,500m.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Eat carbohydrate-rich meals.</strong> Your body burns more calories at altitude and works more efficiently on carbohydrates than fats or proteins.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Warning Signs</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Mild AMS:</strong> Headache, nausea, fatigue, loss of appetite, difficulty sleeping. Common above 2,500m. Rest and hydrate. Take paracetamol for headache. If symptoms do not improve in 24 hours, descend.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Severe AMS / HACE:</strong> Confusion, loss of coordination (ataxia), severe headache unresponsive to medication. This is a medical emergency. Descend immediately and seek help.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">HAPE (High Altitude Pulmonary Edema):</strong> Breathlessness at rest, persistent cough, blue lips. Extremely serious. Descend immediately. This can be fatal if ignored.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Diamox (acetazolamide):</strong> A prescription medication that can prevent and treat mild AMS. Consult your doctor before travel. Take 125mg twice daily starting 24 hours before ascending above 2,500m.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BERBER VILLAGE ENCOUNTERS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Users className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Berber Village Encounters
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1500554861934-691ee8b30561?w=800&q=80"
                  alt="Traditional Berber village in the Atlas Mountains with terraced fields"
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                <div className="space-y-4 text-[var(--text-secondary)] text-sm leading-relaxed">
                  <p>
                    One of the great privileges of trekking in Morocco is passing through traditional Berber (Amazigh) villages where life follows ancient rhythms. Many of these communities have remained largely unchanged for centuries, with subsistence farming, traditional architecture, and a social structure centered on community and hospitality.
                  </p>
                  <p>
                    Berber hospitality is legendary. It is common to be invited for mint tea by villagers you meet along the trail. Accepting these invitations is one of the most rewarding aspects of trekking in Morocco. Your guide can facilitate conversations and cultural exchange.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Respectful Trekking Through Villages</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Ask before photographing.</strong> Always ask permission before taking photos of people, especially women and children. Some communities are uncomfortable with photography. A smile and a gesture go a long way.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Dress modestly.</strong> Cover shoulders and knees when passing through villages, even if you are hot from trekking. This shows respect for conservative rural communities.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Learn basic Amazigh greetings.</strong> &quot;Azul&quot; (hello) and &quot;Tanmirt&quot; (thank you) in Tamazight will delight your hosts and open doors that remain closed to less respectful visitors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Support the local economy.</strong> Buy supplies from village shops rather than bringing everything from the city. Stay in local gites when possible. Small purchases make a real difference.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Do not give sweets or money to children.</strong> This encourages begging. If you want to help, donate to village schools or community projects. Ask your guide for appropriate ways to contribute.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MULTI-DAY TREK LOGISTICS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Multi-Day Trek Logistics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
                Mules &amp; Porters
              </h3>
              <div className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  Mules are the traditional pack animals of the Atlas Mountains and an essential part of multi-day trek logistics. Each mule can carry approximately 40-50 kg and is led by a muleteer (usually from a local village).
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Cost:</strong> 200-300 MAD per day ($20-30 USD) for mule and muleteer combined. Tip the muleteer 30-50 MAD per day in addition.
                </p>
                <p>
                  Pack your gear in soft duffel bags (not hard-sided cases) for easy loading. Keep your daypack with essentials like water, snacks, camera, rain jacket, and sun protection.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Utensils className="w-5 h-5 text-[var(--color-primary)]" />
                Food &amp; Meals
              </h3>
              <div className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  On guided multi-day treks, a cook typically prepares all meals. Expect hearty Moroccan food: tagines, couscous, lentil soup, fresh bread, fruit, and copious mint tea. Meals are usually excellent and plentiful.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Dietary requirements:</strong> Inform your guide of any allergies or dietary restrictions at booking. Vegetarian options are easily accommodated. Vegan and gluten-free require more advance planning.
                </p>
                <p>
                  Bring personal snacks for the trail: energy bars, nuts, dried fruit, and chocolate. These are not always available in mountain villages.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <GlassWater className="w-5 h-5 text-[var(--color-primary)]" />
                Water &amp; Purification
              </h3>
              <div className="space-y-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                <p>
                  Mountain streams in the High Atlas are generally clean above 3,000m, but purification is always recommended. Below this altitude, livestock and villages contaminate water sources.
                </p>
                <p>
                  <strong className="text-[var(--text-primary)]">Options:</strong> Water purification tablets (cheapest), SteriPEN UV purifier (fastest), Grayl or LifeStraw filter bottles (most convenient), or boiling water (refuges can provide hot water).
                </p>
                <p>
                  Carry 2-3 liters of water capacity and refill at every opportunity. At altitude, you need a minimum of 3-4 liters per day. Start each day with full bottles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRAIL MAPS & GPX
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Map className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Trail Maps &amp; GPX Downloads
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Digital Navigation</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Download className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Maps.me:</strong> Free offline maps with hiking trails marked. Download the Morocco region before your trip. Excellent for basic navigation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Download className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">AllTrails:</strong> User-uploaded trails with reviews and GPS tracks. Search for &quot;Toubkal&quot; or &quot;Atlas Mountains&quot; for downloadable GPX files.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Download className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Wikiloc:</strong> Large database of user-contributed GPS tracks for Moroccan trails. Premium version allows offline use.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Download className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Google Maps offline:</strong> Download the area for basic navigation. Trails are not always shown but useful for road access and villages.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Physical Maps &amp; Guidebooks</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">1:50,000 topographic maps:</strong> Available from Division de la Cartographie in Rabat, or from shops in Imlil and Marrakech. Essential for serious off-trail navigation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Cicerone guidebook:</strong> &quot;Trekking in the Moroccan Atlas&quot; by Alan Palmer is the definitive English-language guide with detailed route descriptions and maps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">West Col maps:</strong> &quot;Toubkal&quot; 1:50,000 map by West Col Productions is a classic trekking map specifically for the Toubkal area.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Cell coverage note:</strong> Signal is available in Imlil and some valley villages but nonexistent on trails and at altitude. Always have offline navigation capability.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RESPONSIBLE TREKKING
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Leaf className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Responsible Trekking Practices
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ul className="space-y-4 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Pack it in, pack it out.</strong> Carry all rubbish with you, including food waste, until you can dispose of it properly. Morocco&apos;s mountains face increasing litter problems, especially on popular routes like Toubkal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Stay on marked trails.</strong> Erosion is a growing concern in the Atlas Mountains. Cutting switchbacks damages vegetation and causes soil erosion. Stick to established paths.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Respect water sources.</strong> Do not wash, swim, or use soap near rivers and streams that communities depend on for drinking water. Use biodegradable soap at least 60 meters from water sources.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Leaf className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Toilet etiquette.</strong> Use facilities when available. Otherwise, dig a hole at least 15 cm deep and 60 meters from trails and water sources. Pack out toilet paper in a sealed bag.</span>
                </li>
              </ul>
              <ul className="space-y-4 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Hire local.</strong> Use local guides, muleteers, and guesthouses. Tourism income is the primary livelihood for many mountain communities. Choose operators that pay fair wages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Fair treatment of mules.</strong> Ensure your trekking operator does not overload mules (40-50 kg maximum). Report any signs of animal mistreatment to your guide or operator.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Bring reusable items.</strong> A reusable water bottle with a filter, reusable bags, and a metal spork reduce waste. Avoid single-use plastic wherever possible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Community projects.</strong> Consider donating to organizations like the Education For All Morocco foundation, which builds girls&apos; boarding houses in mountain villages, enabling education access.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WOMEN TREKKING IN MOROCCO
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <PersonStanding className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Women Trekking in Morocco
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Women trek safely and successfully in Morocco every day, both solo and in groups. The mountain areas are generally more conservative than cities but also more welcoming and less prone to the hassle that can occur in tourist hotspots. Berber mountain communities are known for their genuine hospitality toward all visitors.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Practical Advice</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Hire a guide.</strong> A local male guide provides an implicit &quot;companion&quot; that reduces unwanted attention and opens cultural doors. Female guides exist but are rare in the mountain guiding profession.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Dress modestly in villages.</strong> Loose-fitting trekking clothes that cover shoulders and knees are both culturally appropriate and practical. A lightweight scarf is useful for visiting homes or mosques.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Women-only group treks</strong> are offered by several operators. These can be a comfortable option for solo female travelers and often include female Moroccan staff where possible.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Safety Considerations</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>On established routes like Toubkal, you will encounter many other trekkers. Solo female trekkers on these routes report feeling safe.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>For remote multi-day treks (M&apos;goun, Saghro), solo female trekking without a guide is not recommended simply due to the isolation and navigation challenges.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Bathroom privacy can be a concern. Carry a lightweight towel or sarong for privacy on the trail. Your guide will point out appropriate spots.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Pack sufficient menstrual hygiene products as these may not be available in mountain villages. Bring sealed bags for disposal.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAMILY-FRIENDLY HIKES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Baby className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Family-Friendly Hikes
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Morocco offers wonderful hiking experiences for families with children. The key is choosing routes with manageable distances, interesting features to keep children engaged, and easy access to food and water. The following hikes are suitable for families with children aged 6 and above.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Best Family Hikes</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Ourika Valley (near Marrakech):</strong> Easy riverside walk with waterfalls, Berber tea houses, and potential swimming. 45 minutes from Marrakech. Half-day excursion.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Paradise Valley (near Agadir):</strong> Natural rock pools and gentle walking in a palm canyon. Children love swimming in the warm pools. Very accessible.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Imlil village walks:</strong> Gentle walks around the village and to nearby hamlets. Mule rides available for tired legs. Use Imlil as a mountain base for 2-3 days.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Ait Bouguemez Valley:</strong> Gentle valley walks with cultural interest. Dinosaur footprint sites fascinate children. Welcoming villages with family gites.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong className="text-[var(--text-primary)]">Akchour (near Chefchaouen):</strong> The lower waterfall walk is manageable for older children. Natural swimming pools. God&apos;s Bridge is impressive but requires sure-footedness.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-3">Tips for Hiking with Children</h3>
                <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Start early in the morning to avoid midday heat. Children overheat faster than adults.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Carry extra water and snacks. Double what you think you need. Children dehydrate quickly at altitude and in heat.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Apply sunscreen frequently and insist on hats. The Moroccan sun is strong, especially at altitude.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Hire a mule for children who tire on longer walks. Muleteers are experienced with child riders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Do not attempt altitude above 3,000m with children under 10. Their bodies acclimatize less predictably than adults.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>A guide with family experience makes a huge difference. They know child-friendly stops and can tell stories that keep young trekkers motivated.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
            Ready to Hit the Trails?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether you are summiting North Africa&apos;s highest peak or wandering through a flower-filled valley, Morocco&apos;s trails offer adventure, culture, and natural beauty in equal measure. Prepare well, respect the mountains, and you will be rewarded with memories that last a lifetime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/health"
              className="inline-flex items-center gap-2 bg-white text-[var(--color-primary-900)] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              Health Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Safety Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/best-time"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Best Time to Visit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

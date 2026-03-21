import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  Star,
  Sun,
  Calendar,
  MapPin,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Shield,
  Compass,
  Thermometer,
  Wind,
  Users,
  Heart,
  Info,
  Lightbulb,
  ArrowRight,
  TrendingUp,
  Clock,
  Layers,
  Award,
  Anchor,
  Target,
  BookOpen,
  Gauge,
  Footprints,
  Wrench,
  PhoneCall,
  Globe,
  CloudSun,
  Snowflake,
  Leaf,
  Flower2,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Rock Climbing in Morocco 2025-2026 | Todra Gorge, Taghia Canyon, Anti-Atlas Bouldering Guide',
  description:
    'Complete guide to rock climbing in Morocco. Todra Gorge sport climbing, Taghia Canyon big walls, Anti-Atlas bouldering, Chefchaouen crags, Ourika Valley routes, multi-pitch trad, guide companies, gear rental, grades, and seasonal conditions for 2025-2026.',
  keywords: [
    'Morocco rock climbing',
    'Todra Gorge climbing',
    'Taghia Canyon climbing',
    'Anti-Atlas bouldering',
    'Chefchaouen climbing',
    'Ourika Valley climbing',
    'Morocco sport climbing',
    'Morocco trad climbing',
    'Morocco bouldering',
    'Morocco multi-pitch',
    'climbing Morocco guide',
    'best climbing Morocco',
    'Morocco climbing season',
    'Morocco climbing grades',
    'Morocco climbing gear rental',
    'Morocco climbing guide companies',
    'Todra Gorge routes',
    'Taghia big wall climbing',
    'rock climbing North Africa',
    'limestone climbing Morocco',
    'granite bouldering Morocco',
    'Morocco climbing trip',
    'Morocco crag guide',
    'adventure travel Morocco',
  ],
  openGraph: {
    title: 'Rock Climbing in Morocco 2025-2026 | Complete Guide | CityGuide',
    description:
      'Everything you need to know about rock climbing in Morocco. Todra Gorge sport routes, Taghia big walls, Anti-Atlas bouldering, seasonal advice, guide companies, and gear rental.',
    url: 'https://citytoursmorocco.com/morocco-rock-climbing',
    images: [
      {
        url: '/images/hero-atlas.webp',
        width: 1200,
        height: 630,
        alt: 'Rock climbing on limestone cliffs in Todra Gorge, Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rock Climbing in Morocco | Complete Guide',
    description:
      'Todra Gorge sport climbing, Taghia big walls, Anti-Atlas bouldering, Chefchaouen crags, and more across Morocco.',
    images: ['/images/hero-atlas.webp'],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-rock-climbing' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Rock Climbing in Morocco',
  description:
    'Comprehensive guide to rock climbing destinations across Morocco, including Todra Gorge, Taghia Canyon, Anti-Atlas bouldering, and Chefchaouen crags.',
  url: 'https://citytoursmorocco.com/morocco-rock-climbing',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Thing',
    name: 'Rock Climbing',
    description: 'Sport climbing, trad climbing, bouldering, and multi-pitch routes in Morocco',
  },
};

const faqItems = [
  {
    q: 'What is the best time of year for rock climbing in Morocco?',
    a: 'The prime climbing season runs from October through April. Todra Gorge and the Anti-Atlas are best from November to March when temperatures hover between 10-22 degrees Celsius. Taghia Canyon is accessible from May to November, since snowmelt blocks access in winter. Spring (March-April) and autumn (October-November) offer the most versatile conditions for visiting multiple areas.',
  },
  {
    q: 'Do I need a climbing guide in Morocco?',
    a: 'For Todra Gorge sport climbing, experienced climbers can operate independently with a guidebook. Taghia Canyon requires a local guide for approach logistics and route-finding on big walls. Anti-Atlas bouldering is largely self-directed but a local contact helps with access. First-time visitors to any area benefit from hiring a guide for at least the first day to learn approach trails and local ethics.',
  },
  {
    q: 'What climbing grades are available in Morocco?',
    a: 'Morocco covers the full spectrum. Todra Gorge has single-pitch sport routes from French 4a to 8b, with the bulk of classic lines in the 5c-7a range. Taghia offers multi-pitch trad and mixed routes from TD- to ED+ (French alpine grades). Anti-Atlas bouldering ranges from V0 to V12. Beginners have plenty of options at Todra and Ourika Valley.',
  },
  {
    q: 'Can I rent climbing gear in Morocco?',
    a: 'Gear rental is available in Tinghir (for Todra Gorge) and through guide companies in Marrakech. Expect to pay from 150 MAD per day for a harness and shoes, or from 400 MAD per day for a full sport climbing rack. Quality varies, so inspect rental gear carefully. For Taghia and trad climbing, bring your own rack as rental options for cams and nuts are limited.',
  },
  {
    q: 'How do I get to Todra Gorge from Marrakech?',
    a: 'The most common route is via the N10 highway through Ouarzazate, then east on the N10 to Tinghir. The drive takes approximately 7-8 hours (420 km). Shared grands taxis run from Marrakech to Ouarzazate (from 120 MAD), then Ouarzazate to Tinghir (from 80 MAD). CTM and Supratours buses also cover the route with one transfer. From Tinghir, the gorge is 14 km north by taxi (from 30 MAD).',
  },
  {
    q: 'Is climbing bolting ethics an issue in Morocco?',
    a: 'Morocco uses a mix of French and British ethics depending on the area. Todra Gorge is predominantly sport-bolted using expansion bolts and glue-in anchors. Taghia follows a strict trad and ground-up ethic on new routes, with retro-bolting strongly discouraged. Always check local ethics before placing fixed gear. The Moroccan climbing community actively maintains bolts at Todra, with periodic rebolting campaigns.',
  },
  {
    q: 'What are the risks of climbing in Morocco?',
    a: 'Objective hazards include loose rock on some Todra sectors, flash flooding in gorge bottoms during rain, and remoteness at Taghia (helicopter rescue is not always feasible). Heat exhaustion affects climbers at low-elevation crags in summer. Medical facilities are basic in climbing areas; the nearest well-equipped hospitals are in Ouarzazate, Errachidia, or Marrakech. Travel insurance with climbing coverage and evacuation is strongly recommended.',
  },
  {
    q: 'Can beginners go rock climbing in Morocco?',
    a: 'Absolutely. Todra Gorge has dozens of well-bolted routes in the 4a-5c range on excellent limestone. Ourika Valley near Marrakech offers introductory sport climbing with easy access. Several guide companies run beginner courses including gear, instruction, and transport from Marrakech starting from 600 MAD per person. The Petit Gorge sector at Todra is particularly beginner-friendly with short approaches and low-angle faces.',
  },
  {
    q: 'Where should I stay when climbing at Todra Gorge?',
    a: 'Most climbers stay in the gorge itself, where several hotels and guesthouses sit at the base of the cliffs. Hotel Yasmina and Auberge Le Festival are popular with climbers and charge from 200 MAD per night for a double room. Camping near the gorge mouth costs from 50 MAD per night. Tinghir town (14 km south) has more amenities and budget options from 150 MAD per night.',
  },
  {
    q: 'What guidebooks cover Moroccan climbing?',
    a: 'The definitive Todra Gorge guide is "Todra Gorge" by Toni Roca, covering 300+ routes with topos and photos. For Taghia, "Escalades au Maroc" by Claude Gardien covers the major lines. Online resources include thecrag.com and 27crags.com for updated route databases. Local guides often have handwritten topos for newer or lesser-known sectors not yet in published guides.',
  },
];

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
};

/* ===================================================================
   CLIMBING AREA DATA
   =================================================================== */

interface ClimbingArea {
  name: string;
  region: string;
  type: 'sport' | 'trad' | 'bouldering' | 'multi-pitch' | 'mixed';
  description: string;
  highlights: string[];
  routeCount: string;
  gradeRange: string;
  bestSeason: string;
  approach: string;
  rockType: string;
  nearestTown: string;
}

const climbingAreas: ClimbingArea[] = [
  {
    name: 'Todra Gorge',
    region: 'Eastern High Atlas',
    type: 'sport',
    description:
      'Morocco\'s flagship climbing destination and one of the great limestone gorges of the world. Sheer orange and grey walls rise 300 meters on either side of a narrow canyon carved by the Todra River. The gorge contains over 300 bolted sport routes across more than 20 sectors, concentrated on the east and west walls of the main gorge and the Petit Gorge downstream. The rock is compact Jurassic limestone with features ranging from technical slabs and vertical faces to powerful overhangs and tufa columns. Route quality is consistently high, with many three-star classics in every grade. The climbing community here is well-established, with local Amazigh climbers maintaining bolts and developing new lines every season.',
    highlights: [
      '300+ bolted sport routes across 20+ sectors',
      'Iconic Pilier du Couchant — the gorge\'s signature wall',
      'Petit Gorge offers sheltered beginner terrain',
      'Year-round afternoon shade on the east wall',
      'Active local climbing community with route maintenance',
    ],
    routeCount: '300+',
    gradeRange: '4a – 8b (French)',
    bestSeason: 'October – April',
    approach: '0-30 minutes walk from road',
    rockType: 'Jurassic limestone',
    nearestTown: 'Tinghir (14 km)',
  },
  {
    name: 'Taghia Canyon',
    region: 'Central High Atlas',
    type: 'multi-pitch',
    description:
      'Often called the "Yosemite of Africa," Taghia is a remote canyon system in the Central High Atlas with sheer 800-meter limestone walls that attract the world\'s top alpinists. The village of Taghia sits at 1,900 meters and is accessible only by a 3-hour mule track or rough 4x4 piste from Zawyat Ahansal. This isolation preserves both the climbing and the traditional Amazigh way of life. Big wall routes here follow crack systems, dihedrals, and aretes up monolithic towers like the Oujdad and Taoujdad. First ascents continue to be made by international teams pushing the boundaries of Moroccan alpinism. The ground-up trad ethic is strictly observed.',
    highlights: [
      '800m+ limestone walls rivaling Verdon and Yosemite',
      'World-class multi-pitch trad routes on Oujdad and Taoujdad',
      'Remote Amazigh village setting at 1,900m',
      'Strict ground-up first ascent ethic',
      'Continuous new route development by international teams',
    ],
    routeCount: '100+',
    gradeRange: 'TD- to ED+ (Alpine), 6a – 8a (French free)',
    bestSeason: 'May – November',
    approach: '3-hour mule track from Zawyat Ahansal',
    rockType: 'Compact limestone, vertical to overhanging',
    nearestTown: 'Zawyat Ahansal (3-hour approach)',
  },
  {
    name: 'Anti-Atlas Bouldering',
    region: 'Anti-Atlas Mountains',
    type: 'bouldering',
    description:
      'The Anti-Atlas region south of Tafraout contains one of the most extraordinary bouldering landscapes in the world. Vast fields of pink and red granite boulders scatter across a desert landscape of almond trees, oases, and ancient kasbahs. The rock quality is superb — coarse-grained granite with edges, slopers, crimps, and cracks in every combination. The main areas around Tafraout, including the Painted Rocks (Napoleon\'s Hat), Ameln Valley, and the Idaougnidif sector, hold thousands of problems from easy circuits to desperate projects. Belgian climber Claude Remy pioneered development here in the 1990s, and new problems are still being discovered on boulders that have never been touched.',
    highlights: [
      'Thousands of granite boulders in a desert landscape',
      'Superb pink granite with varied features',
      'Ameln Valley circuits for all abilities',
      'Painted Rocks sector near Napoleon\'s Hat',
      'Winter sun and warm temperatures when Europe is frozen',
    ],
    routeCount: '2,000+ problems',
    gradeRange: 'V0 – V12 (Hueco)',
    bestSeason: 'November – March',
    approach: '5-30 minutes walk from road',
    rockType: 'Pink and red granite',
    nearestTown: 'Tafraout (0-15 km)',
  },
  {
    name: 'Chefchaouen Crags',
    region: 'Rif Mountains',
    type: 'sport',
    description:
      'The blue-washed mountain town of Chefchaouen sits beneath the twin peaks of Jebel Chefchaouen (Tisouka at 2,050m) and offers several limestone crags within walking distance of the medina. The main climbing areas include the Ras el Ma sector above the famous water source, the Tissouka buttress on the approach to the peak, and the Pont de Dieu natural arch area. The rock is grey Rif limestone, generally well-featured with pockets, tufas, and edges. Development is ongoing, with local and Spanish climbers adding new routes each season. The combination of climbing, the stunning blue medina, and Rif Mountain hiking makes Chefchaouen a compelling multi-activity base.',
    highlights: [
      'Limestone crags minutes from the blue medina',
      'Ras el Ma sector above the natural spring',
      'Pont de Dieu natural arch area',
      'Combined climbing and medina culture experience',
      'Ongoing route development by local climbers',
    ],
    routeCount: '80+',
    gradeRange: '5a – 7c (French)',
    bestSeason: 'October – May',
    approach: '15-45 minutes walk from medina',
    rockType: 'Grey Rif limestone',
    nearestTown: 'Chefchaouen (0 km)',
  },
  {
    name: 'Ourika Valley',
    region: 'High Atlas (near Marrakech)',
    type: 'sport',
    description:
      'The closest developed crag to Marrakech, Ourika Valley offers a collection of single-pitch sport routes on limestone walls in the foothills of the High Atlas. The main sector is located approximately 45 minutes from Marrakech along the S513 road into the valley. The crag faces south, making it an ideal winter-sun destination, and the routes tend toward technical vertical face climbing on pocketed limestone. Several Marrakech-based guide companies use Ourika as their primary venue for introductory climbing courses. The valley itself is a popular day-trip destination with Berber villages, waterfalls, and the Setti Fatma trail system.',
    highlights: [
      'Closest developed crag to Marrakech (45 min drive)',
      'South-facing winter sun wall',
      'Ideal for beginner and intermediate sport climbers',
      'Combined with Ourika Valley sightseeing',
      'Multiple guide companies offer courses here',
    ],
    routeCount: '40+',
    gradeRange: '4b – 7a (French)',
    bestSeason: 'October – April',
    approach: '10-20 minutes walk from road',
    rockType: 'Pocketed limestone',
    nearestTown: 'Marrakech (45 km)',
  },
  {
    name: 'Zawyat Ahansal Gorges',
    region: 'Central High Atlas',
    type: 'mixed',
    description:
      'The gateway to Taghia also harbors its own climbing in a series of narrow limestone gorges along the Ahansal River valley. Sport routes and short multi-pitch lines adorn the walls of the Ahansal and Cathedral gorges, offering a less committing alternative to Taghia\'s big walls. The rock is similar quality limestone, and the gorge setting provides shade during hot months. This area serves as an excellent warm-up zone before heading into Taghia, or as a destination in its own right for climbers seeking moderate multi-pitch in a wild setting. Route development continues, particularly on the north-facing walls of the Cathedral gorge.',
    highlights: [
      'Sport and multi-pitch routes in gorge settings',
      'Excellent warm-up for Taghia expeditions',
      'Cathedral gorge\'s north-facing walls stay cool',
      'Less committing than Taghia big walls',
      'Active route development on new sectors',
    ],
    routeCount: '60+',
    gradeRange: '5a – 7b (French)',
    bestSeason: 'April – November',
    approach: '15-60 minutes walk',
    rockType: 'Limestone',
    nearestTown: 'Zawyat Ahansal (0-5 km)',
  },
  {
    name: 'Aoujgal Boulders (Tafraout)',
    region: 'Anti-Atlas',
    type: 'bouldering',
    description:
      'A specific world-class bouldering area within the greater Tafraout region, the Aoujgal area contains dense concentrations of high-quality granite boulders on a hillside above the village. The landings are generally flat and sandy, making this one of the more pad-friendly areas in the Anti-Atlas. Problems tend toward steep, powerful climbing on edges and crimps, with a higher density of hard problems (V6-V12) than the Ameln Valley. The rock surface is rougher here due to the aspect and altitude, providing excellent friction even in warmer temperatures. Several international bouldering comps have used this area as a venue.',
    highlights: [
      'Dense concentration of hard boulder problems',
      'Flat sandy landings ideal for pad placement',
      'Rough granite texture with excellent friction',
      'International bouldering competition venue',
      'Steep powerful climbing on edges and crimps',
    ],
    routeCount: '400+ problems',
    gradeRange: 'V2 – V12 (Hueco)',
    bestSeason: 'November – February',
    approach: '5-15 minutes walk from road',
    rockType: 'Coarse granite',
    nearestTown: 'Tafraout (8 km)',
  },
  {
    name: 'Jebel el Kest',
    region: 'Anti-Atlas',
    type: 'trad',
    description:
      'Rising to 2,359 meters above the Ameln Valley near Tafraout, Jebel el Kest offers adventurous trad climbing on quartzite ridges and faces. The classic route follows the long south ridge traverse, a full-day outing on exposed terrain with sustained grade IV-V climbing and spectacular views over the Anti-Atlas plateau. Shorter crack lines on the lower buttresses provide single-pitch trad options. The quartzite rock is well-featured with splitter cracks, but protection can be spaced. This mountain appeals to climbers seeking an adventure experience beyond the bolted sport crags, with route-finding skills and self-sufficiency essential.',
    highlights: [
      'Full-day south ridge traverse at 2,359m',
      'Exposed quartzite ridge climbing',
      'Splitter crack lines on lower buttresses',
      'Spectacular Anti-Atlas panoramas',
      'Adventure climbing requiring route-finding skills',
    ],
    routeCount: '20+',
    gradeRange: 'IV – VI (UIAA)',
    bestSeason: 'November – March',
    approach: '1-3 hours from Ameln Valley',
    rockType: 'Quartzite',
    nearestTown: 'Tafraout (10 km)',
  },
  {
    name: 'Bin el Ouidane',
    region: 'Middle Atlas',
    type: 'sport',
    description:
      'The limestone cliffs above Bin el Ouidane reservoir in the Middle Atlas provide a scenic sport climbing venue that remains relatively under-the-radar compared to Todra. The main crags face the turquoise reservoir waters and offer predominantly vertical to slightly overhanging climbing on well-featured grey limestone. Routes range from accessible single-pitch outings to challenging steep lines. The area benefits from proximity to the Ouzoud waterfalls and the Azilal region, making it a practical stop on a central Morocco circuit. A small but growing number of routes are being developed by local and French climbers.',
    highlights: [
      'Cliffs overlooking turquoise Bin el Ouidane reservoir',
      'Under-developed potential for new routes',
      'Combine with Ouzoud Falls visit (1 hour away)',
      'Well-featured grey limestone faces',
      'Quiet alternative to busier Todra crags',
    ],
    routeCount: '50+',
    gradeRange: '5a – 7b (French)',
    bestSeason: 'October – May',
    approach: '10-30 minutes walk',
    rockType: 'Grey limestone',
    nearestTown: 'Bin el Ouidane (5 km)',
  },
  {
    name: 'Gorges du Dadès',
    region: 'Central High Atlas',
    type: 'sport',
    description:
      'The Dadès Gorge, famous for its serpentine road and red rock formations, also holds scattered climbing potential on its dramatic canyon walls. The gorge\'s Jurassic limestone offers both established and developing sport crags, with the best climbing concentrated in the narrower upper gorge above the famous hairpin bends. The red-orange rock provides an aesthetic contrast to the grey limestone of Todra, and the climbing tends toward technical face moves on small pockets and edges. The gorge is significantly less crowded than Todra, appealing to climbers seeking solitude. New route development is ongoing, with significant unclimbed potential on the upper walls.',
    highlights: [
      'Dramatic red-orange limestone canyon walls',
      'Famous serpentine road with hairpin bends',
      'Far less crowded than Todra Gorge',
      'Technical face climbing on pockets and edges',
      'Significant unclimbed potential for new routes',
    ],
    routeCount: '30+',
    gradeRange: '5b – 7a (French)',
    bestSeason: 'October – April',
    approach: '5-20 minutes walk from road',
    rockType: 'Red-orange Jurassic limestone',
    nearestTown: 'Boumalne Dadès (25 km)',
  },
  {
    name: 'Akchour (Rif Mountains)',
    region: 'Rif Mountains',
    type: 'sport',
    description:
      'Located in the Talassemtane National Park near Chefchaouen, the Akchour area features limestone crags above the famous Pont de Dieu natural rock bridge and turquoise river pools. The climbing here is relatively new, with routes established primarily by Spanish and Moroccan climbers. The setting is extraordinary — routes ascend above cascading waterfalls and deep swimming holes in the Farda River gorge. The approach hike itself is one of the most scenic in northern Morocco. The crag stays shaded in the gorge, making it viable even in warmer months, though spring and autumn remain optimal.',
    highlights: [
      'Routes above the Pont de Dieu natural rock bridge',
      'Turquoise river pools and waterfalls below the crag',
      'Located in Talassemtane National Park',
      'Shaded gorge climbing viable in warmer months',
      'Scenic 45-minute approach hike',
    ],
    routeCount: '25+',
    gradeRange: '5b – 7a (French)',
    bestSeason: 'March – June, September – November',
    approach: '45 minutes walk from parking area',
    rockType: 'Rif limestone',
    nearestTown: 'Chefchaouen (30 km)',
  },
];

/* ===================================================================
   GUIDE COMPANIES DATA
   =================================================================== */

interface GuideCompany {
  name: string;
  location: string;
  speciality: string;
  priceFrom: string;
  services: string[];
}

const guideCompanies: GuideCompany[] = [
  {
    name: 'Climb Morocco',
    location: 'Tinghir / Todra Gorge',
    speciality: 'Sport climbing courses and multi-pitch guiding at Todra',
    priceFrom: 'from 600 MAD/day',
    services: ['Single-pitch guiding', 'Multi-pitch courses', 'Gear rental', 'Accommodation packages'],
  },
  {
    name: 'Taghia Aventure',
    location: 'Zawyat Ahansal / Taghia',
    speciality: 'Big wall guiding and logistics for Taghia Canyon',
    priceFrom: 'from 1,200 MAD/day',
    services: ['Mule transport to Taghia', 'Big wall guiding', 'Village guesthouse booking', 'Portering'],
  },
  {
    name: 'Atlas Rock Climbing',
    location: 'Marrakech',
    speciality: 'Ourika Valley and Atlas day trips from Marrakech',
    priceFrom: 'from 800 MAD/day',
    services: ['Beginner courses', 'Transport from Marrakech', 'Full gear provision', 'Photography'],
  },
  {
    name: 'Morocco Vertical',
    location: 'Todra Gorge / Tafraout',
    speciality: 'Multi-area climbing trips combining Todra and Anti-Atlas',
    priceFrom: 'from 900 MAD/day',
    services: ['Multi-day climbing tours', 'Bouldering tours', 'Guidebook sales', 'Crash pad rental'],
  },
  {
    name: 'Rif Adventures',
    location: 'Chefchaouen',
    speciality: 'Rif Mountains climbing, hiking, and canyoning',
    priceFrom: 'from 700 MAD/day',
    services: ['Chefchaouen crag guiding', 'Akchour approach logistics', 'Canyoning trips', 'Mountain biking'],
  },
];

/* ===================================================================
   GEAR RENTAL PRICING
   =================================================================== */

const gearRentalPrices = [
  { item: 'Climbing shoes (per day)', price: 'from 80 MAD', note: 'Sizes 36-46, quality varies' },
  { item: 'Harness (per day)', price: 'from 60 MAD', note: 'Adjustable sport harness' },
  { item: 'Helmet (per day)', price: 'from 40 MAD', note: 'Essential for gorge climbing' },
  { item: 'Rope — 70m single (per day)', price: 'from 120 MAD', note: 'Inspect for wear before use' },
  { item: 'Quickdraw set — 12 (per day)', price: 'from 100 MAD', note: 'Sport draws with wiregate' },
  { item: 'Full sport rack (per day)', price: 'from 400 MAD', note: 'Rope, draws, harness, shoes, helmet, belay device' },
  { item: 'Crash pad — bouldering (per day)', price: 'from 80 MAD', note: 'Available in Tafraout and Todra' },
  { item: 'Trad rack — cams and nuts (per day)', price: 'from 300 MAD', note: 'Limited availability, book ahead' },
];

/* ===================================================================
   SEASONAL CONDITIONS
   =================================================================== */

const seasonalConditions = [
  {
    season: 'Autumn (October – November)',
    icon: Leaf,
    conditions: 'Prime season for Todra Gorge and Anti-Atlas. Temperatures drop from summer extremes to a comfortable 15-25 degrees Celsius. Dry conditions with minimal rain. Post-harvest almond groves provide beautiful approaches in the Anti-Atlas. Taghia remains accessible before winter snows close the passes.',
    bestFor: 'Todra Gorge, Anti-Atlas bouldering, Taghia (early autumn)',
    avoid: 'None — this is the optimal window for most areas',
  },
  {
    season: 'Winter (December – February)',
    icon: Snowflake,
    conditions: 'Anti-Atlas and southern areas at their best with daytime temperatures of 12-20 degrees Celsius and brilliant sunshine. Todra Gorge is climbable but cold in shade (5-10 degrees Celsius). Taghia and high Atlas crags are snow-covered and inaccessible. Short days limit climbing hours. The Rif can be wet.',
    bestFor: 'Anti-Atlas bouldering, Ourika Valley, Todra (sun-facing walls)',
    avoid: 'Taghia Canyon, high-altitude crags, Rif Mountains',
  },
  {
    season: 'Spring (March – May)',
    icon: Flower2,
    conditions: 'Transitional period with warming temperatures. Todra and the gorges are excellent through April. Almond blossom season in the Anti-Atlas (February-March) provides stunning backdrops to bouldering sessions. Taghia becomes accessible from late April as snow melts. Occasional rain in the Rif but generally stable.',
    bestFor: 'All areas from April onward, Anti-Atlas through March',
    avoid: 'Taghia (March-April snowmelt), Rif in heavy rain periods',
  },
  {
    season: 'Summer (June – September)',
    icon: Sun,
    conditions: 'Scorching heat makes low-elevation crags unbearable (40+ degrees Celsius at Todra). Taghia Canyon is at its prime — warm days, long light, and accessible approaches. Chefchaouen crags are viable in early morning. Anti-Atlas is too hot for bouldering. High Atlas crags above 2,500m can be pleasant.',
    bestFor: 'Taghia Canyon, high-altitude crags, Chefchaouen (early AM)',
    avoid: 'Todra Gorge, Anti-Atlas, all low-elevation crags',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoroccoRockClimbingPage() {
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

      {/* ─── Breadcrumb ─── */}
      <nav aria-label="Breadcrumb" className="bg-[var(--surface)] border-b border-[var(--border-light)]">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-accent)] transition-colors">
                <Home className="w-3.5 h-3.5" />
                Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li>
              <Link href="/activities" className="hover:text-[var(--color-accent)] transition-colors">
                Activities
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Rock Climbing</li>
          </ol>
        </div>
      </nav>

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero-atlas.webp"
          alt="Limestone cliffs of Todra Gorge rising 300 meters above the canyon floor in Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center py-20">
          <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Mountain className="w-4 h-4" />
            Adventure Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Rock Climbing in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed font-[family-name:var(--font-heading)]">
            From the 300-meter limestone walls of Todra Gorge to the granite boulderfields of the Anti-Atlas
            and the remote big walls of Taghia Canyon — Morocco holds some of the finest climbing
            in North Africa and the Mediterranean basin.
          </p>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <Compass className="w-4 h-4" />
                Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Why Climb in Morocco?
              </h2>
            </div>
            <div className="prose prose-lg max-w-none text-[var(--text-secondary)] leading-relaxed space-y-4">
              <p>
                Morocco sits at the geological crossroads of the African and European tectonic plates,
                and this collision has produced a climber&apos;s paradise of limestone gorges, granite
                massifs, and quartzite ridges stretching from the Rif Mountains in the north to the
                Anti-Atlas in the south. The country offers sport climbing, traditional crack and face
                routes, bouldering, and alpine-scale multi-pitch walls — all within a day&apos;s drive
                of each other.
              </p>
              <p>
                The climbing season effectively runs year-round if you follow the sun. When European
                crags are locked in winter ice, Morocco&apos;s Anti-Atlas basks in 18-degree sunshine.
                When summer makes the gorges unbearable, Taghia Canyon at 1,900 meters offers perfect
                alpine conditions for big wall free climbing. This seasonal diversity, combined with
                affordable living costs, rich Amazigh culture, and landscapes that rival the American
                Southwest or the Kalymnos archipelago, makes Morocco a top-tier international climbing destination.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {[
                { icon: Mountain, label: 'Climbing Areas', value: '15+' },
                { icon: TrendingUp, label: 'Established Routes', value: '3,000+' },
                { icon: Gauge, label: 'Grade Range', value: '4a – 8b' },
                { icon: Calendar, label: 'Season', value: 'Year-round' },
              ].map((stat) => (
                <div key={stat.label} className="card-moroccan p-4 text-center">
                  <stat.icon className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Climbing Disciplines ─── */}
      <section className="py-16 md:py-24 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Layers className="w-4 h-4" />
              Disciplines
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Climbing Styles Available in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco caters to every discipline, from bolt-clipping sport climbers to
              trad warriors, boulderers, and big wall alpinists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: 'Sport Climbing',
                text: 'Over 500 bolted routes on limestone across Todra Gorge, Chefchaouen, Ourika Valley, and Dadès Gorge. Well-maintained bolt lines, accessible approaches, and year-round options make sport climbing the most popular discipline.',
                areas: 'Todra, Chefchaouen, Ourika, Dadès',
              },
              {
                icon: Anchor,
                title: 'Trad Climbing',
                text: 'Crack systems and natural lines on the big walls of Taghia, the quartzite ridges of Jebel el Kest, and scattered traditional routes throughout the Atlas ranges. Gear placement skills and self-rescue knowledge are essential.',
                areas: 'Taghia, Jebel el Kest, High Atlas',
              },
              {
                icon: Footprints,
                title: 'Bouldering',
                text: 'The Anti-Atlas granite around Tafraout hosts thousands of problems in an otherworldly desert landscape. From mellow circuits on perfect edges to powerful V10+ testpieces on steep overhangs. Bring your own pads or rent locally.',
                areas: 'Tafraout, Aoujgal, Ameln Valley',
              },
              {
                icon: TrendingUp,
                title: 'Multi-Pitch',
                text: 'Taghia Canyon\'s 800-meter walls are the crown jewel, but multi-pitch routes also exist at Todra Gorge (3-6 pitches) and in the Zawyat Ahansal gorges. Ranges from well-bolted sport multi-pitch to ground-up trad adventures.',
                areas: 'Taghia, Todra, Zawyat Ahansal',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">{item.text}</p>
                <p className="text-xs text-[var(--text-muted)]">
                  <span className="font-semibold text-[var(--text-secondary)]">Key areas:</span> {item.areas}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Climbing Areas ─── */}
      <section id="climbing-areas" className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <MapPin className="w-4 h-4" />
              Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top Climbing Areas in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed profiles of the country&apos;s finest crags, gorges, and boulderfields —
              with route counts, grade ranges, approach information, and seasonal recommendations.
            </p>
          </div>

          <div className="space-y-8">
            {climbingAreas.map((area, index) => (
              <div
                key={area.name}
                className="card-moroccan overflow-hidden"
              >
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="tag tag-accent">
                          {area.type === 'multi-pitch' ? 'Multi-Pitch' : area.type.charAt(0).toUpperCase() + area.type.slice(1)}
                        </span>
                        <span className="tag tag-primary">{area.region}</span>
                      </div>
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {index + 1}. {area.name}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
                      <TrendingUp className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-sm font-bold text-[var(--color-accent)]">{area.routeCount} routes</span>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                    {area.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-5">
                    <div className="flex items-center gap-2 text-sm">
                      <Gauge className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span className="text-[var(--text-secondary)]"><span className="font-semibold">Grades:</span> {area.gradeRange}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span className="text-[var(--text-secondary)]"><span className="font-semibold">Season:</span> {area.bestSeason}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-secondary)]"><span className="font-semibold">Approach:</span> {area.approach}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                      <span className="text-[var(--text-secondary)]"><span className="font-semibold">Rock:</span> {area.rockType}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
                      <span className="text-[var(--text-secondary)]"><span className="font-semibold">Town:</span> {area.nearestTown}</span>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
                    {area.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Seasonal Conditions ─── */}
      <section className="py-16 md:py-24 section-warm">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <CloudSun className="w-4 h-4" />
              When to Climb
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Seasonal Conditions by Area
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s diverse geography means that at least one climbing area is in season
              during every month of the year. Follow the sun and the temperatures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalConditions.map((s) => (
              <div key={s.season} className="card-moroccan p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent-50)] flex items-center justify-center">
                    <s.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {s.season}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {s.conditions}
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-green)]">
                      <CheckCircle className="w-3.5 h-3.5" /> Best for:
                    </span>{' '}
                    <span className="text-[var(--text-secondary)]">{s.bestFor}</span>
                  </p>
                  <p className="text-sm">
                    <span className="inline-flex items-center gap-1.5 font-semibold text-[var(--color-red)]">
                      <AlertTriangle className="w-3.5 h-3.5" /> Avoid:
                    </span>{' '}
                    <span className="text-[var(--text-secondary)]">{s.avoid}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Guide Companies ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Users className="w-4 h-4" />
              Professional Guiding
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Climbing Guide Companies
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Local and international guide services operating across Morocco&apos;s climbing areas.
              Prices are approximate and may vary by season and group size.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guideCompanies.map((company) => (
              <div key={company.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {company.name}
                  </h3>
                  <span className="text-sm font-bold text-[var(--color-green)] whitespace-nowrap">
                    {company.priceFrom}
                  </span>
                </div>
                <p className="flex items-center gap-1.5 text-sm text-[var(--color-secondary)] font-medium mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  {company.location}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {company.speciality}
                </p>
                <ul className="space-y-1.5">
                  {company.services.map((s) => (
                    <li key={s} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gear Rental & Costs ─── */}
      <section className="py-16 md:py-24 section-warm">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <Wrench className="w-4 h-4" />
                Equipment
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Gear Rental &amp; Costs
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Rental gear is available primarily in Tinghir (for Todra Gorge), Tafraout (Anti-Atlas),
                and through Marrakech-based operators. Seasonal pricing can change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {gearRentalPrices.map((row) => (
                <div key={row.item} className="flex items-center justify-between p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-light)]">
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{row.item}</p>
                    <p className="text-xs text-[var(--text-muted)]">{row.note}</p>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-green)] whitespace-nowrap ml-4">
                    {row.price}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Bring Your Own Gear When Possible
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Rental gear quality is inconsistent in Morocco. Climbing shoes in particular
                    are often well-worn and available in limited sizes. If you are planning a
                    dedicated climbing trip, bring your own shoes, harness, and belay device at
                    minimum. Ropes, quickdraws, and helmets are more reliably available for rent.
                    For trad climbing at Taghia or Jebel el Kest, you must bring your own rack —
                    cam and nut rental is extremely limited and rarely in good condition.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Safety & Ethics ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Shield className="w-4 h-4" />
              Safety &amp; Ethics
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Staying Safe &amp; Climbing Responsibly
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Safety Considerations
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Loose rock is present on many Todra sectors, particularly on routes that see less traffic. Wear a helmet and communicate clearly with your belayer about rockfall.',
                  'Flash flooding can occur in gorge bottoms with little warning. Monitor weather forecasts and avoid gorge floors during or after heavy rain, especially in spring.',
                  'Taghia is extremely remote with no helicopter rescue guarantee. Self-rescue skills, first aid training, and satellite communication devices are strongly recommended.',
                  'Heat exhaustion is a real hazard at low-elevation crags from May through September. Start early, climb in the shade, and carry at least 3 liters of water per person.',
                  'Medical facilities near climbing areas are basic. The nearest hospitals with trauma capability are in Ouarzazate, Errachidia, and Marrakech. Carry a comprehensive first aid kit.',
                  'Travel insurance with specific climbing coverage (including rescue and evacuation) is essential. Verify your policy covers the grades and altitudes you plan to climb.',
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Ethics &amp; Respect
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Respect local bolting ethics. Todra is sport-bolted; Taghia follows a strict ground-up trad ethic. Never retro-bolt existing trad routes without community consensus.',
                  'Leave no trace at all climbing areas. Pack out all tape, chalk bags, food waste, and human waste. Chalk marks on boulders in the Anti-Atlas persist for years in the dry climate.',
                  'Respect local communities. Many climbing areas border Amazigh villages. Dress modestly when passing through settlements, ask permission before photographing people, and support local businesses.',
                  'Minimize chalk use on dark rock, and use a chalk ball rather than loose chalk when bouldering in the Anti-Atlas to reduce visual impact on the granite.',
                  'Stay on established approach trails to avoid erosion. Many approach paths cross fragile desert and mountain terrain that takes decades to recover from foot traffic.',
                  'Support local guides and guesthouses. The climbing economy provides important income to remote mountain communities. Hire local for logistics even if you do not need a climbing guide.',
                ].map((ethic, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    {ethic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Practical Information ─── */}
      <section className="py-16 md:py-24 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <BookOpen className="w-4 h-4" />
              Practical Info
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Planning Your Climbing Trip
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Globe,
                title: 'Getting There',
                text: 'Fly into Marrakech (RAK), Ouarzazate (OZZ), or Errachidia (ERH) for Todra Gorge and Taghia. Tangier (TNG) or Fes (FEZ) for Rif climbing at Chefchaouen. Agadir (AGA) for Anti-Atlas bouldering. Internal flights are limited; most transfers involve road travel.',
              },
              {
                icon: DollarSign,
                title: 'Budget Planning',
                text: 'A climbing trip in Morocco runs from 300-600 MAD per day covering accommodation, meals, and transport. Guesthouse doubles start from 200 MAD per night. Meals at local restaurants cost from 30-80 MAD. Grand taxi rides between towns from 20-150 MAD. Guide fees from 600-1,200 MAD per day.',
              },
              {
                icon: PhoneCall,
                title: 'Communication',
                text: 'Mobile coverage exists at Todra Gorge and most towns but drops out in Taghia and remote Anti-Atlas areas. Buy a Maroc Telecom or Inwi SIM at the airport (from 30 MAD) for data. Satellite communicators (Garmin InReach) are recommended for Taghia expeditions.',
              },
              {
                icon: Thermometer,
                title: 'Altitude & Acclimatization',
                text: 'Most climbing areas sit between 1,000-2,000 meters. Taghia approaches top out around 2,500m and Jebel el Kest reaches 2,359m. Altitude sickness is rarely an issue, but staying hydrated and allowing a rest day upon arrival is sensible if coming from sea level.',
              },
              {
                icon: Shield,
                title: 'Insurance & Rescue',
                text: 'Standard travel insurance typically excludes climbing above certain grades. Ensure your policy covers technical rock climbing, including rope work and altitudes up to 3,000m. Mountain rescue in Morocco is limited; self-rescue skills are critical at remote venues like Taghia.',
              },
              {
                icon: Info,
                title: 'Guidebooks & Topos',
                text: '"Todra Gorge" by Toni Roca is the definitive single-pitch guide. "Escalades au Maroc" by Claude Gardien covers Taghia. Online databases at thecrag.com and 27crags.com provide free route information. Local guides carry handwritten topos for newer sectors.',
              },
            ].map((item) => (
              <div key={item.title} className="card-moroccan p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
                <Info className="w-4 h-4" />
                Common Questions
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, i) => (
                <div key={i} className="card-moroccan p-6">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
              Ready to Climb in Morocco?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From single-pitch sport routes above the Todra River to 800-meter big walls
              in Taghia Canyon and granite bouldering under Anti-Atlas sunshine — Morocco
              delivers world-class climbing with Amazigh hospitality at a fraction of European prices.
              Plan your trip around the seasons, hire a local guide for your first day, and
              pack your sense of adventure.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Mountain,
                  title: 'Choose Your Crag',
                  text: 'Todra for sport, Taghia for big walls, Tafraout for bouldering. Match your style to Morocco\'s diverse terrain.',
                },
                {
                  icon: Calendar,
                  title: 'Time It Right',
                  text: 'October-April for gorges and desert crags. May-November for Taghia. Follow the seasons for year-round climbing.',
                },
                {
                  icon: Compass,
                  title: 'Plan Your Circuit',
                  text: 'Combine Todra, the Anti-Atlas, and Chefchaouen for the ultimate 2-3 week Moroccan climbing road trip.',
                },
              ].map((item) => (
                <div key={item.title} className="glass-dark rounded-xl p-6 text-center">
                  <item.icon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/atlas-mountains" className="btn-accent btn-lg">
                Atlas Mountains Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/adventure" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Adventure Activities
                <Mountain className="w-5 h-5" />
              </Link>
              <Link href="/camping" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Camping Guide
                <Compass className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Guides ─── */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Related Adventure Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/camping', title: 'Camping & Glamping', desc: 'Complete guide to camping across Morocco, from Sahara luxury camps to Atlas Mountain bivouacs and wild camping on the Atlantic coast.' },
              { href: '/trekking', title: 'Trekking Guide', desc: 'Multi-day treks through the High Atlas, Rif Mountains, and Anti-Atlas including Mount Toubkal, M\'Goun traverse, and Jebel Saghro.' },
              { href: '/atlas-mountains', title: 'Atlas Mountains', desc: 'Your complete guide to the High Atlas, Middle Atlas, and Anti-Atlas ranges — villages, valleys, passes, and peaks.' },
              { href: '/adventure', title: 'Adventure Activities', desc: 'Surfing, sandboarding, mountain biking, paragliding, canyoning, and more active pursuits across Morocco.' },
              { href: '/best-time-visit-morocco', title: 'Best Time to Visit', desc: 'Season-by-season breakdown of weather, crowds, and prices to help you pick the right time for your climbing trip.' },
              { href: '/budget-travel', title: 'Budget Travel Guide', desc: 'How to travel Morocco on a budget — covering accommodation, food, transport, and tips for climbers on a shoestring.' },
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

      {/* ─── Zellige Divider ─── */}
      <div className="zellige-border" />
    </>
  );
}

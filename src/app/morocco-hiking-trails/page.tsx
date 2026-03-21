import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
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
  Route,
  Calendar,
  Backpack,
  Footprints,
  TrendingUp,
  Tent,
  BookOpen,
  Shield,
  Map,
  MessageCircleQuestion,
  CloudSun,
  Signpost,
  Timer,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-hiking-trails`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Hiking Trails Guide 2026 | 15 Best Routes by Difficulty',
  description:
    'Detailed Morocco hiking trails guide with 15 routes rated by difficulty. Toubkal summit, M\'Goun traverse, Jebel Saghro loop, Rif Mountains, Ouzoud Falls, Todra Gorge & Dades Valley trails. Distances, elevation gains, GPS waypoints, permits, refuges, gear lists & seasonal timing.',
  keywords: [
    'Morocco hiking trails',
    'Morocco hiking trails guide 2026',
    'best hiking trails Morocco',
    'Toubkal summit trail',
    'M\'Goun traverse route',
    'Jebel Saghro hiking',
    'Rif Mountains trails',
    'Ouzoud Falls trail',
    'Todra Gorge hike',
    'Dades Valley trek',
    'Atlas Mountains trails',
    'Morocco trail difficulty rating',
    'Morocco mountain huts refuges',
    'Morocco hiking permits',
    'altitude sickness Morocco',
    'day hikes Morocco cities',
    'Morocco trail maps',
    'Morocco trekking gear list',
    'guided hiking Morocco',
    'Morocco hiking season 2026',
  ],
  openGraph: {
    title: 'Morocco Hiking Trails Guide 2026 | 15 Best Routes by Difficulty',
    description:
      'Plan your Morocco trek with 15 detailed trail profiles. Distances, elevation gains, difficulty ratings, permit requirements, refuge locations, gear checklists, and costs from 0 MAD for free trails to guided expeditions.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-hiking-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Hiking trail winding through the High Atlas Mountains of Morocco with terraced Berber villages below',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Hiking Trails 2026 | 15 Routes with Distances & Elevations',
    description:
      'Full trail profiles for Morocco\'s best hikes: Toubkal, M\'Goun, Jebel Saghro, Rif Mountains, Ouzoud Falls, Todra Gorge. Gear, permits, refuges & altitude tips.',
    images: [`${BASE_URL}/images/hero-hiking-atlas.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Do I need a permit to hike in Morocco?',
    a: 'Most trails in Morocco are open-access and do not require permits. The Toubkal National Park charges from 20 MAD for entry. The M\'Goun area within the Mgoun Geopark is free but registration at trailheads is encouraged. No permits are needed for Jebel Saghro, Rif Mountains, or most Anti-Atlas trails. If you hire a licensed mountain guide, they handle any paperwork.',
  },
  {
    q: 'When is the best season to hike in Morocco?',
    a: 'April to June and September to November are ideal for most trails. High Atlas routes above 3,000m are best from June to September when snow melts. Jebel Saghro and Anti-Atlas are perfect from October to April when the desert climate is mild. The Rif Mountains are greenest from March to May. Avoid the High Atlas in winter unless you have mountaineering experience and proper gear.',
  },
  {
    q: 'Can I hike Toubkal without a guide?',
    a: 'Technically yes, the Toubkal summit trail from Imlil is well-marked and does not legally require a guide. However, hiring a licensed guide (from 500 MAD per day) is strongly recommended for safety, navigation in poor weather, and supporting the local economy. Above 3,500m, conditions change rapidly and altitude sickness is a real risk. Solo hikers should register at the Imlil bureau des guides.',
  },
  {
    q: 'What altitude sickness precautions should I take in the Atlas Mountains?',
    a: 'Acclimatize by spending one night at the Toubkal refuge (3,207m) before summiting. Drink at least 3 liters of water per day above 2,500m. Ascend no more than 500m in sleeping elevation per day. Symptoms include headache, nausea, and dizziness. Descend immediately if symptoms worsen. Diamox (acetazolamide) can be purchased at pharmacies in Marrakech without prescription from 30 MAD per box.',
  },
  {
    q: 'How much does a guided multi-day trek cost in Morocco?',
    a: 'Budget 3-day treks with a local guide, mules, cook, and mountain hut accommodation start from 2,500 MAD per person. Mid-range treks with private tents and better meals run from 4,000 MAD. Premium agency-organized treks with full logistics cost from 6,000 MAD. Day hikes with a guide start from 500 MAD. Seasonal pricing can change during peak months of April, October, and December.',
  },
  {
    q: 'Are there mountain huts (refuges) on Morocco\'s trails?',
    a: 'The High Atlas has several refuges managed by the Club Alpin Francais (CAF) and CFAMM. The main ones are Refuge du Toubkal (3,207m, from 150 MAD per night), Refuge Lépiney (3,000m), Refuge Tazaghart (3,000m), and Refuge Afella (2,600m). They provide mattresses, blankets, cooking facilities, and basic meals. Booking is first-come-first-served except for large groups. Jebel Saghro and M\'Goun routes use Berber gite homestays instead.',
  },
  {
    q: 'What gear do I need for hiking in the Atlas Mountains?',
    a: 'For day hikes: sturdy hiking boots, 2L water, sun hat, sunscreen SPF 50, layers, rain jacket, and a headlamp. For multi-day treks add: sleeping bag rated to -5C for refuges, trekking poles, first aid kit, water purification tablets, and warm fleece. Crampons and an ice axe are essential for Toubkal from November to May. Gear can be rented in Imlil from 50 MAD per item per day.',
  },
  {
    q: 'Can I do day hikes from Marrakech without joining a tour?',
    a: 'Yes. Take a grand taxi from Marrakech to Imlil (from 75 MAD, 90 minutes) for High Atlas day hikes. The Imlil to Armed village loop is a scenic 3-hour walk with no guide needed. For Ouzoud Falls, grand taxis depart from Bab Ghmat (from 50 MAD, 2.5 hours). The Paradise Valley near Agadir is reachable by taxi (from 100 MAD). All three are well-marked and suitable for independent hikers.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Hiking Trails Guide 2026',
  description:
    'Comprehensive guide to Morocco hiking trails with 15 detailed route profiles covering the High Atlas, Anti-Atlas, Rif Mountains, and gorge regions. Includes distances, elevation gains, difficulty ratings, permits, mountain refuges, gear checklists, and seasonal timing.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-hiking-atlas.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Hiking Trails', item: PAGE_URL },
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
   DATA: EASY TRAILS
   ================================================================ */

const easyTrails = [
  {
    name: 'Imlil to Armed Village Loop',
    region: 'High Atlas, near Marrakech',
    distance: '6 km round trip',
    elevation: '+350m / -350m',
    duration: '2.5-3 hours',
    season: 'Year-round (icy patches Dec-Feb)',
    trailhead: 'Imlil village center (1,740m)',
    description:
      'A gentle circuit through walnut groves and terraced fields connecting the gateway village of Imlil with the traditional Berber settlement of Armed. The path follows irrigation channels carved into the mountainside and crosses a stone bridge over the Imlil river. Armed sits at the base of the Toubkal massif, offering postcard views of North Africa\'s highest peak without any serious climbing.',
    highlights: 'Berber homestays, walnut orchards, Toubkal views, mule bridges',
    gettingThere: 'Grand taxi from Marrakech to Imlil from 75 MAD (90 min)',
    guideNeeded: false,
  },
  {
    name: 'Ouzoud Falls Trail',
    region: 'Middle Atlas, Azilal Province',
    distance: '4 km loop',
    elevation: '+200m / -200m',
    duration: '2-3 hours',
    season: 'Year-round (fullest flow Mar-May)',
    trailhead: 'Ouzoud village parking area (900m)',
    description:
      'Morocco\'s most spectacular waterfall drops 110 meters over red-ochre cliffs into natural swimming pools. The trail descends through olive groves to the base of the falls where rainbow mist hangs permanently in the air. A secondary path loops along the gorge rim offering aerial views. Barbary macaques populate the trees along the cliff edges, and local boatmen offer rides under the falls from 20 MAD.',
    highlights: 'Triple cascade, Barbary macaques, swimming pools, rainbow mist, olive mills',
    gettingThere: 'Grand taxi from Marrakech from 50 MAD (2.5 hours) or from Beni Mellal from 30 MAD (1 hour)',
    guideNeeded: false,
  },
  {
    name: 'Akchour Waterfalls & God\'s Bridge',
    region: 'Rif Mountains, near Chefchaouen',
    distance: '8 km out-and-back',
    elevation: '+400m / -400m',
    duration: '3-4 hours',
    season: 'Mar-Nov (slippery in rain)',
    trailhead: 'Akchour village (450m)',
    description:
      'Starting from the small Rif village of Akchour, this trail follows the Farda River upstream through a lush, green gorge. The path splits at a fork: left leads to the small waterfall (1.5 km) with a natural swimming hole, right continues to God\'s Bridge, a massive natural rock arch spanning the canyon. Most hikers do both branches as a figure-eight loop. The gorge walls are draped in ferns, and the water runs ice-cold even in summer.',
    highlights: 'Natural rock bridge, two waterfalls, swimming gorge, Rif pine forests',
    gettingThere: 'Grand taxi from Chefchaouen from 30 MAD (45 min)',
    guideNeeded: false,
  },
  {
    name: 'Paradise Valley',
    region: 'Western High Atlas, near Agadir',
    distance: '5 km out-and-back',
    elevation: '+150m / -150m',
    duration: '2-3 hours',
    season: 'Year-round (best Mar-Jun & Sep-Nov)',
    trailhead: 'Imouzzer road parking (350m)',
    description:
      'A chain of turquoise rock pools connected by small cascades in a palm-lined canyon between Agadir and Imouzzer Ida Outanane. The trail is more of a scramble over boulders and through shallow water than a traditional path. Each pool is deeper and more secluded than the last. Local families picnic at the lower pools on weekends, while the upper pools remain quiet on most days.',
    highlights: 'Natural swimming pools, palm canyon, cliff jumping spots, Berber village above',
    gettingThere: 'Grand taxi from Agadir from 100 MAD (1 hour) or organized day trip',
    guideNeeded: false,
  },
  {
    name: 'Ouirgane Valley Circuit',
    region: 'High Atlas foothills, south of Marrakech',
    distance: '10 km loop',
    elevation: '+450m / -450m',
    duration: '4-5 hours',
    season: 'Year-round (wildflowers Apr-May)',
    trailhead: 'Ouirgane village (1,070m)',
    description:
      'A quiet circuit through the agricultural heartland of the western High Atlas. The trail passes through Berber hamlets where saffron and lavender are cultivated on irrigated terraces. A salt mine along the route has been worked for centuries. The reservoir of Lalla Takerkoust is visible from the ridge. Unlike the Toubkal corridor, this area sees very few foreign hikers and the trail encounters are almost exclusively with local farmers and shepherds.',
    highlights: 'Saffron fields, ancient salt mine, reservoir views, quiet Berber villages',
    gettingThere: 'Bus or grand taxi from Marrakech via Asni from 40 MAD (1.5 hours)',
    guideNeeded: false,
  },
] as const;

/* ================================================================
   DATA: MODERATE TRAILS
   ================================================================ */

const moderateTrails = [
  {
    name: 'Todra Gorge Trail',
    region: 'Eastern High Atlas, Tinghir Province',
    distance: '14 km out-and-back',
    elevation: '+650m / -650m',
    duration: '5-6 hours',
    season: 'Sep-Jun (extreme heat Jul-Aug)',
    trailhead: 'Todra Gorge hotel zone (1,400m)',
    description:
      'The trail begins at the mouth of Todra Gorge where 300-meter vertical limestone walls narrow to just 10 meters apart. After passing the famous narrows used by rock climbers, the path ascends the gorge floor along the Todra River. Beyond the tourist zone, the canyon opens into a hidden valley with Berber settlements and palmeries. The full trail continues to a high pass with views over the Saharan fringe. Most hikers turn around at the first village of Tizgui (7 km).',
    highlights: '300m canyon walls, rock climbing area, hidden palmeries, Saharan views',
    gettingThere: 'Grand taxi from Tinghir from 20 MAD (30 min), bus from Ouarzazate from 80 MAD',
    guideNeeded: false,
  },
  {
    name: 'Dades Valley Monkey Fingers Trail',
    region: 'Dades Gorge, Boumalne Province',
    distance: '12 km loop',
    elevation: '+700m / -700m',
    duration: '5-7 hours',
    season: 'Sep-Jun (scorching Jul-Aug)',
    trailhead: 'Dades Gorge road km 25 (1,600m)',
    description:
      'The iconic "Monkey Fingers" are erosion-sculpted sandstone towers rising along the Dades River like petrified organ pipes. The trail climbs from the gorge road through the rock formations, along a ridgeline above the canyon, and descends through a Berber hamlet to loop back along the river. Navigation can be tricky where goat paths intersect the main trail, so downloading a GPX track or hiring a local guide is wise.',
    highlights: 'Sandstone hoodoos, gorge panoramas, kasbahs, nomad encounters',
    gettingThere: 'Grand taxi from Boumalne Dades from 20 MAD or drive the scenic gorge road',
    guideNeeded: true,
  },
  {
    name: 'Tizi n\'Tamatert Pass from Imlil',
    region: 'High Atlas, Marrakech corridor',
    distance: '16 km point-to-point (Imlil to Tachdirt)',
    elevation: '+1,060m / -600m',
    duration: '6-7 hours',
    season: 'Apr-Nov (snow-blocked Dec-Mar)',
    trailhead: 'Imlil (1,740m) to Tachdirt (2,300m)',
    description:
      'A classic High Atlas day crossing over the Tizi n\'Tamatert pass at 2,279m. The ascent from Imlil follows a mule trail through juniper scrub with expanding views of the Toubkal massif behind you. The pass itself is a wide saddle with prayer cairns and panoramic vistas of both valleys. The descent drops into the remote Imenane Valley and the small trading village of Tachdirt, where a CAF refuge offers overnight stays.',
    highlights: 'Pass crossing, Toubkal massif views, Imenane Valley, CAF refuge, mule caravans',
    gettingThere: 'Grand taxi from Marrakech to Imlil from 75 MAD; return from Tachdirt by arranged taxi or walk back via alternate route',
    guideNeeded: false,
  },
  {
    name: 'Jebel Lkest Circuit',
    region: 'Anti-Atlas, Tiznit Province',
    distance: '18 km loop',
    elevation: '+900m / -900m',
    duration: '7-8 hours',
    season: 'Oct-Apr (too hot May-Sep)',
    trailhead: 'Anezi village (1,200m)',
    description:
      'A hidden gem in the Anti-Atlas that most hikers overlook entirely. Jebel Lkest (2,359m) rises above painted desert landscapes dotted with argan trees and ancient stone granaries called agadirs. The circuit ascends through a boulder field, crosses a dramatic rocky ridge, and descends through the Ameln Valley with its 26 cliff villages strung along the north face. The summit offers 360-degree views from the Sahara to the Atlantic.',
    highlights: 'Cliff granaries, painted desert, argan forests, 360-degree summit views, Ameln Valley villages',
    gettingThere: 'Grand taxi from Tiznit from 40 MAD or from Tafraout from 20 MAD',
    guideNeeded: true,
  },
  {
    name: 'Bou Iblane Summit Trail',
    region: 'Middle Atlas, Taza Province',
    distance: '15 km out-and-back',
    elevation: '+1,100m / -1,100m',
    duration: '7-9 hours',
    season: 'Jun-Oct (deep snow Nov-May)',
    trailhead: 'Taffert village (2,200m)',
    description:
      'Bou Iblane (3,190m) is the highest peak in the Middle Atlas and one of Morocco\'s least-visited major summits. The trail crosses alpine meadows carpeted with wildflowers in June and July, passes cedar forests inhabited by Barbary macaques, and finishes with a rocky scramble to a pointed summit. The views extend to the Rif Mountains in the north and the High Atlas in the south. Expect total solitude on most days.',
    highlights: 'Alpine meadows, cedar forests, Barbary macaques, total solitude, dual mountain range views',
    gettingThere: 'Drive or taxi from Taza (2 hours on mountain road); no public transport to trailhead',
    guideNeeded: true,
  },
] as const;

/* ================================================================
   DATA: CHALLENGING TRAILS
   ================================================================ */

const challengingTrails = [
  {
    name: 'Toubkal Summit (2-Day)',
    region: 'High Atlas, Toubkal National Park',
    distance: '20 km round trip',
    elevation: '+2,467m / -2,467m from Imlil',
    duration: 'Day 1: 5-6h to refuge. Day 2: 4-5h summit + 3-4h descent',
    season: 'Jun-Sep (snow route Nov-May requires crampons)',
    trailhead: 'Imlil village (1,740m), summit at 4,167m',
    description:
      'The highest peak in North Africa draws thousands of trekkers each year, but the final push above 3,800m is genuinely demanding. Day one follows the Mizane Valley through the shrine village of Sidi Chamharouch (2,310m) to the Toubkal Refuge at 3,207m. Day two starts before dawn for the 960m ascent over loose scree and rocky switchbacks. The summit ridge narrows with exposure on both sides. Clear mornings reveal the Sahara to the south and the Atlantic coast to the west.',
    highlights: 'North Africa\'s highest point, Sahara-to-sea panorama, Sidi Chamharouch shrine, CAF refuge',
    gettingThere: 'Grand taxi Marrakech to Imlil from 75 MAD; guide from 500 MAD/day recommended',
    guideNeeded: false,
    permitNote: 'Toubkal National Park entry from 20 MAD',
  },
  {
    name: 'M\'Goun Traverse (3-4 Days)',
    region: 'Central High Atlas, Azilal-Ouarzazate',
    distance: '50-65 km depending on route',
    elevation: 'Cumulative +3,500m / -3,800m',
    duration: '3-4 days (summit day is 10-12 hours)',
    season: 'Jun-Oct (snow on summit Nov-May)',
    trailhead: 'Tabant or Agouti village (1,800m), summit at 4,068m',
    description:
      'Morocco\'s second-highest peak and arguably its finest multi-day trek. The classic route starts in the Ait Bougmez Valley ("Happy Valley"), climbs through high-altitude pastures used by transhumant shepherds, crosses the M\'Goun summit at 4,068m, and descends the dramatic M\'Goun Gorge to the town of El Kelaa M\'Gouna. The summit ridge is a broad plateau above the snowline, less technical than Toubkal but longer and more remote. A guide and mule support are essential as the route is unmarked in places.',
    highlights: 'Ait Bougmez Valley, transhumant camps, 4,068m summit, M\'Goun Gorge descent, rose valley finish',
    gettingThere: 'Grand taxi to Tabant from Azilal from 30 MAD; Azilal from Marrakech from 60 MAD',
    guideNeeded: true,
    permitNote: 'Free access; registration at Tabant bureau des guides',
  },
  {
    name: 'Jebel Saghro Circuit (3-5 Days)',
    region: 'Anti-Atlas / pre-Saharan zone',
    distance: '45-70 km depending on route',
    elevation: 'Cumulative +2,800m / -2,800m',
    duration: '3-5 days',
    season: 'Oct-Apr (unbearable heat May-Sep)',
    trailhead: 'N\'Kob or Kelaat M\'Gouna (1,200-1,400m), highest point Amalou n\'Mansour at 2,712m',
    description:
      'A volcanic desert mountain range between the High Atlas and the Sahara, Jebel Saghro looks like a landscape from another planet. Basalt pinnacles, canyon systems, and flat-topped mesa formations dominate the terrain. The classic circuit from N\'Kob crosses the Tizi n\'Ouarg pass and threads through the Bab n\'Ali needle formations. Nomadic Ait Atta families camp with their goat herds along the route and sometimes invite trekkers for tea. The climate allows comfortable hiking when the High Atlas is buried in snow.',
    highlights: 'Bab n\'Ali rock needles, volcanic desert, nomad encounters, winter trekking, canyon camping',
    gettingThere: 'Grand taxi to N\'Kob from Ouarzazate from 50 MAD or from Tinghir from 60 MAD',
    guideNeeded: true,
    permitNote: 'No permit required; guide essential for navigation',
  },
  {
    name: 'Rif Mountains Traverse: Chefchaouen to Bab Taza',
    region: 'Rif Mountains, northern Morocco',
    distance: '35 km point-to-point',
    elevation: 'Cumulative +2,200m / -1,900m',
    duration: '2-3 days',
    season: 'Apr-Jun & Sep-Nov (wet winters, hot summers)',
    trailhead: 'Chefchaouen (660m) to Bab Taza (900m), highest point Jebel Lakraa (2,159m)',
    description:
      'The Rif Mountains are Morocco\'s greenest and most overlooked hiking region. This traverse from the blue-washed town of Chefchaouen crosses cedar and fir forests on the north slopes, summits Jebel Lakraa — the Rif\'s highest point — and descends through the Talassemtane National Park. The forest canopy shelters the endangered Barbary fir (Abies maroccana), found nowhere else on Earth. Accommodation is in village gites or wild camping.',
    highlights: 'Chefchaouen start, endemic Barbary fir, Talassemtane park, Jebel Lakraa summit, isolated villages',
    gettingThere: 'CTM bus to Chefchaouen from Tangier from 75 MAD or from Fes from 75 MAD',
    guideNeeded: true,
    permitNote: 'Talassemtane National Park: free entry, guides available at park office in Bab Taza',
  },
  {
    name: 'Toubkal Winter Circuit (3 Days)',
    region: 'High Atlas, Toubkal National Park',
    distance: '30 km circuit',
    elevation: 'Cumulative +3,000m / -3,000m',
    duration: '3 days',
    season: 'Dec-Mar (technical winter mountaineering)',
    trailhead: 'Imlil (1,740m), via Tazaghart refuge and Toubkal summit',
    description:
      'The winter circuit adds a mountaineering dimension to the standard Toubkal trek. Day one ascends to the Tazaghart refuge (3,000m) on the western approach. Day two crosses the Tizi n\'Ouanoums pass (3,664m) in crampons and continues to the Toubkal refuge. Day three summits and descends. The route requires ice axe, crampons, rope, and winter mountaineering experience. Avalanche awareness is critical on north-facing slopes after snowfall. This is a serious undertaking, not a casual trek.',
    highlights: 'Winter mountaineering, snow-covered Atlas, Tazaghart refuge, technical pass crossing',
    gettingThere: 'Same as standard Toubkal; hire certified mountain guide with winter experience from 800 MAD/day',
    guideNeeded: true,
    permitNote: 'Toubkal National Park from 20 MAD; certified guide mandatory for safety',
  },
] as const;

/* ================================================================
   DATA: DAY HIKES FROM MAJOR CITIES
   ================================================================ */

const dayHikes = [
  {
    city: 'Marrakech',
    hikes: [
      { trail: 'Imlil-Armed loop', time: '90 min transfer + 3h hike', cost: 'From 75 MAD taxi' },
      { trail: 'Ouzoud Falls', time: '2.5h transfer + 3h hike', cost: 'From 50 MAD taxi' },
      { trail: 'Ouirgane Valley', time: '1.5h transfer + 4h hike', cost: 'From 40 MAD taxi' },
    ],
  },
  {
    city: 'Fes',
    hikes: [
      { trail: 'Tazzeka National Park loop', time: '1.5h transfer + 4h hike', cost: 'From 60 MAD taxi' },
      { trail: 'Bhalil caves & hills', time: '40 min transfer + 2h hike', cost: 'From 30 MAD taxi' },
      { trail: 'Ifrane cedar forest walk', time: '1h transfer + 3h hike', cost: 'From 50 MAD taxi' },
    ],
  },
  {
    city: 'Chefchaouen',
    hikes: [
      { trail: 'Akchour waterfalls & God\'s Bridge', time: '45 min transfer + 4h hike', cost: 'From 30 MAD taxi' },
      { trail: 'Ras el-Maa to Spanish Mosque', time: 'Walk from medina + 1h hike', cost: 'Free' },
      { trail: 'Jebel el-Kelaa viewpoint', time: 'Walk from medina + 2h hike', cost: 'Free' },
    ],
  },
  {
    city: 'Agadir',
    hikes: [
      { trail: 'Paradise Valley pools', time: '1h transfer + 3h hike', cost: 'From 100 MAD taxi' },
      { trail: 'Imouzzer Ida Outanane falls', time: '1.5h transfer + 2h hike', cost: 'From 80 MAD taxi' },
      { trail: 'Massa National Park coast walk', time: '1h transfer + 3h hike', cost: 'From 70 MAD taxi' },
    ],
  },
] as const;

/* ================================================================
   DATA: GEAR CHECKLIST
   ================================================================ */

const gearEssentials = [
  { item: 'Hiking boots (broken in, ankle support)', category: 'Footwear', multiDay: true, dayHike: true },
  { item: 'Wool or synthetic hiking socks (2+ pairs)', category: 'Footwear', multiDay: true, dayHike: true },
  { item: 'Sun hat with neck flap or buff', category: 'Protection', multiDay: true, dayHike: true },
  { item: 'Sunscreen SPF 50 + lip balm SPF 30', category: 'Protection', multiDay: true, dayHike: true },
  { item: 'Sunglasses (UV400, wraparound)', category: 'Protection', multiDay: true, dayHike: true },
  { item: 'Rain jacket (lightweight, packable)', category: 'Clothing', multiDay: true, dayHike: true },
  { item: 'Warm fleece or down jacket', category: 'Clothing', multiDay: true, dayHike: false },
  { item: 'Base layer (merino or synthetic)', category: 'Clothing', multiDay: true, dayHike: false },
  { item: 'Trekking poles (collapsible)', category: 'Gear', multiDay: true, dayHike: false },
  { item: 'Headlamp + spare batteries', category: 'Gear', multiDay: true, dayHike: true },
  { item: 'Water bottles or hydration bladder (3L capacity)', category: 'Hydration', multiDay: true, dayHike: true },
  { item: 'Water purification tablets or filter', category: 'Hydration', multiDay: true, dayHike: false },
  { item: 'First aid kit (blister care, painkillers, altitude meds)', category: 'Safety', multiDay: true, dayHike: true },
  { item: 'Sleeping bag (-5C rated for refuges)', category: 'Sleep', multiDay: true, dayHike: false },
  { item: 'Sleeping mat (if camping, refuges have mattresses)', category: 'Sleep', multiDay: true, dayHike: false },
  { item: 'Crampons + ice axe (winter routes only)', category: 'Technical', multiDay: true, dayHike: false },
] as const;

/* ================================================================
   DATA: MOUNTAIN REFUGES
   ================================================================ */

const refuges = [
  {
    name: 'Refuge du Toubkal (Les Mouflons)',
    altitude: '3,207m',
    capacity: '74 beds',
    price: 'From 150 MAD/night (CAF members from 100 MAD)',
    facilities: 'Mattresses, blankets, kitchen, meals available, solar electricity, cold water',
    access: '5-6 hours from Imlil via Mizane Valley',
  },
  {
    name: 'Refuge Lépiney',
    altitude: '3,000m',
    capacity: '22 beds',
    price: 'From 120 MAD/night',
    facilities: 'Mattresses, blankets, basic kitchen, no meals, no electricity',
    access: '5 hours from Imlil via Tizi n\'Mzik pass; used for Akioud and Afella routes',
  },
  {
    name: 'Refuge Tazaghart',
    altitude: '3,000m',
    capacity: '24 beds',
    price: 'From 120 MAD/night',
    facilities: 'Mattresses, blankets, kitchen, no meals, solar lighting',
    access: '5-6 hours from Imlil via western approach; base for winter Toubkal circuit',
  },
  {
    name: 'Refuge Afella',
    altitude: '2,600m',
    capacity: '18 beds',
    price: 'From 100 MAD/night',
    facilities: 'Mattresses, basic kitchen, water source nearby',
    access: '4 hours from Imlil or 3 hours from Lépiney; quieter alternative to Toubkal refuge',
  },
  {
    name: 'Gite d\'Etape Tabant',
    altitude: '1,850m',
    capacity: '20-30 beds',
    price: 'From 80 MAD/night with dinner and breakfast',
    facilities: 'Berber homestay, full meals, hot showers, garden courtyard',
    access: 'M\'Goun trailhead village in Ait Bougmez Valley; start point for M\'Goun traverse',
  },
] as const;

/* ================================================================
   DATA: SEASONAL CALENDAR
   ================================================================ */

const seasonalCalendar = [
  {
    months: 'December - February',
    highAtlas: 'Snow above 2,500m. Toubkal requires crampons and ice axe. Refuges open but cold.',
    antiAtlas: 'Peak season. Comfortable 15-20C days, cool nights. Jebel Saghro at its best.',
    rif: 'Wet and cold. Trails muddy. Not recommended for multi-day treks.',
    gorges: 'Pleasant daytime temperatures. Flash flood risk after heavy rain.',
  },
  {
    months: 'March - May',
    highAtlas: 'Snow melting above 3,000m. Lower trails open with wildflowers. Toubkal accessible from late May.',
    antiAtlas: 'Good conditions ending. Warming up by May. Last chance for Saghro until October.',
    rif: 'Best season. Green forests, wildflowers, comfortable temperatures.',
    gorges: 'Ideal conditions. Rivers flowing from snowmelt. Not yet too hot.',
  },
  {
    months: 'June - August',
    highAtlas: 'Peak trekking season. Snow-free above 3,500m. Long days. Busy on Toubkal trail.',
    antiAtlas: 'Extremely hot (40C+). All trails inadvisable. Heat exhaustion risk.',
    rif: 'Hot and hazy. Possible but less comfortable. Start early, finish by noon.',
    gorges: 'Scorching. Only early morning hikes. Todra and Dades above 40C by midday.',
  },
  {
    months: 'September - November',
    highAtlas: 'Excellent conditions. Fewer crowds than summer. First snow possible late November.',
    antiAtlas: 'Season reopens October. Cooling temperatures. Jebel Saghro ideal from mid-October.',
    rif: 'Good autumn hiking. Rains return late November.',
    gorges: 'Warming down to comfortable levels. September can still be hot. October-November ideal.',
  },
] as const;

/* ================================================================
   COMPONENT
   ================================================================ */

export default function MoroccoHikingTrailsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-hiking-atlas.webp"
          alt="Hiking trail cutting through the High Atlas Mountains of Morocco with terraced Berber villages in the valley below"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 flex h-full flex-col justify-end pb-12">
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-white/80">
            <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-3.5 w-3.5" />Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white font-medium">Morocco Hiking Trails</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Morocco Hiking Trails Guide 2026
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 font-[family-name:var(--font-heading)]">
            15 trail profiles across the High Atlas, Anti-Atlas, Rif Mountains, and gorge country — with distances, elevation gains, difficulty ratings, and everything you need to plan your trek.
          </p>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-3xl space-y-5 text-gray-700 leading-relaxed">
          <p>
            Morocco holds some of the most diverse hiking terrain on the African continent. Within a single country you can climb a 4,000-meter summit in the morning, descend through Berber villages into a desert gorge by afternoon, and camp under the stars in a volcanic badland by nightfall. The trail network ranges from well-trodden paths with mountain refuges to unmarked routes through country where no signpost exists and navigation relies on local knowledge or GPS.
          </p>
          <p>
            This guide breaks down 15 specific trails across four difficulty tiers. Each listing includes the exact distance, elevation gain, seasonal window, trailhead location, and whether you need a guide. Below the trail profiles you will find a complete gear checklist, mountain refuge directory, seasonal planning calendar, altitude sickness prevention protocol, and day-hike options from Marrakech, Fes, Chefchaouen, and Agadir.
          </p>
          <div className="card-moroccan p-5 border-l-4 border-[#C4960C] bg-amber-50/60">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <strong>How to use this guide:</strong> Trails are organized by difficulty — easy (half-day, minimal elevation), moderate (full-day, sustained climbing), and challenging (multi-day or high-altitude). Scroll to your experience level or use the links below to jump to a section.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Easy Trails ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <Footprints className="h-5 w-5 text-green-700" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Easy Trails</h2>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 mt-0.5">Half-day hikes, under 500m elevation gain, no guide required</p>
            </div>
          </div>
          <div className="space-y-6">
            {easyTrails.map((trail) => (
              <div key={trail.name} className="card-moroccan p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">Easy</span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="h-3 w-3" />{trail.region}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3">{trail.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{trail.description}</p>
                    <p className="text-sm text-gray-600"><strong>Highlights:</strong> {trail.highlights}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:w-64 flex-shrink-0 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600"><Route className="h-4 w-4 text-[#A0522D]" /><span>{trail.distance}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><TrendingUp className="h-4 w-4 text-[#A0522D]" /><span>{trail.elevation}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Clock className="h-4 w-4 text-[#A0522D]" /><span>{trail.duration}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Calendar className="h-4 w-4 text-[#A0522D]" /><span>{trail.season}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Signpost className="h-4 w-4 text-[#A0522D]" /><span>{trail.trailhead}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Compass className="h-4 w-4 text-[#A0522D]" /><span>{trail.gettingThere}</span></div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4 text-[#A0522D]" />
                      <span>{trail.guideNeeded ? 'Guide recommended' : 'No guide needed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Moderate Trails ── */}
      <section className="py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Mountain className="h-5 w-5 text-amber-700" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Moderate Trails</h2>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 mt-0.5">Full-day hikes, 600-1,100m elevation gain, some route-finding required</p>
            </div>
          </div>
          <div className="space-y-6">
            {moderateTrails.map((trail) => (
              <div key={trail.name} className="card-moroccan p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">Moderate</span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="h-3 w-3" />{trail.region}</span>
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3">{trail.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{trail.description}</p>
                    <p className="text-sm text-gray-600"><strong>Highlights:</strong> {trail.highlights}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:w-64 flex-shrink-0 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600"><Route className="h-4 w-4 text-[#A0522D]" /><span>{trail.distance}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><TrendingUp className="h-4 w-4 text-[#A0522D]" /><span>{trail.elevation}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Clock className="h-4 w-4 text-[#A0522D]" /><span>{trail.duration}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Calendar className="h-4 w-4 text-[#A0522D]" /><span>{trail.season}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Signpost className="h-4 w-4 text-[#A0522D]" /><span>{trail.trailhead}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Compass className="h-4 w-4 text-[#A0522D]" /><span>{trail.gettingThere}</span></div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4 text-[#A0522D]" />
                      <span>{trail.guideNeeded ? 'Guide recommended' : 'No guide needed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Challenging Trails ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
              <TrendingUp className="h-5 w-5 text-red-700" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Challenging Trails</h2>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 mt-0.5">Multi-day treks, high altitude, significant exposure, guide recommended</p>
            </div>
          </div>
          <div className="space-y-6">
            {challengingTrails.map((trail) => (
              <div key={trail.name} className="card-moroccan p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">Challenging</span>
                      <span className="text-xs text-gray-400">|</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1"><MapPin className="h-3 w-3" />{trail.region}</span>
                      {trail.permitNote && (
                        <>
                          <span className="text-xs text-gray-400">|</span>
                          <span className="text-xs text-amber-700 flex items-center gap-1"><Shield className="h-3 w-3" />{trail.permitNote}</span>
                        </>
                      )}
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-3">{trail.name}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">{trail.description}</p>
                    <p className="text-sm text-gray-600"><strong>Highlights:</strong> {trail.highlights}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:w-64 flex-shrink-0 space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600"><Route className="h-4 w-4 text-[#A0522D]" /><span>{trail.distance}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><TrendingUp className="h-4 w-4 text-[#A0522D]" /><span>{trail.elevation}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Timer className="h-4 w-4 text-[#A0522D]" /><span>{trail.duration}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Calendar className="h-4 w-4 text-[#A0522D]" /><span>{trail.season}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Signpost className="h-4 w-4 text-[#A0522D]" /><span>{trail.trailhead}</span></div>
                    <div className="flex items-center gap-2 text-gray-600"><Compass className="h-4 w-4 text-[#A0522D]" /><span>{trail.gettingThere}</span></div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Users className="h-4 w-4 text-[#A0522D]" />
                      <span>{trail.guideNeeded ? 'Guide strongly recommended' : 'Guide optional'}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seasonal Calendar ── */}
      <section className="py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <CloudSun className="h-5 w-5 text-blue-700" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Seasonal Trail Calendar</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#A0522D] text-white">
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">Season</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">High Atlas</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">Anti-Atlas / Saghro</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">Rif Mountains</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">Gorges</th>
                </tr>
              </thead>
              <tbody>
                {seasonalCalendar.map((row, i) => (
                  <tr key={row.months} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                    <td className="p-3 font-semibold text-[#A0522D] whitespace-nowrap">{row.months}</td>
                    <td className="p-3 text-gray-700">{row.highAtlas}</td>
                    <td className="p-3 text-gray-700">{row.antiAtlas}</td>
                    <td className="p-3 text-gray-700">{row.rif}</td>
                    <td className="p-3 text-gray-700">{row.gorges}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Mountain Refuges ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <Tent className="h-5 w-5 text-orange-700" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Mountain Refuges & Huts</h2>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 mt-0.5">Overnight accommodation on multi-day treks</p>
            </div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {refuges.map((r) => (
              <div key={r.name} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-gray-900 mb-3">{r.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2"><Mountain className="h-4 w-4 text-[#A0522D]" /><span>Altitude: {r.altitude}</span></div>
                  <div className="flex items-center gap-2"><Users className="h-4 w-4 text-[#A0522D]" /><span>Capacity: {r.capacity}</span></div>
                  <div className="flex items-center gap-2"><DollarSign className="h-4 w-4 text-[#A0522D]" /><span>{r.price}</span></div>
                  <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#A0522D]" /><span>{r.facilities}</span></div>
                  <div className="flex items-center gap-2"><Route className="h-4 w-4 text-[#A0522D]" /><span>{r.access}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Hikes from Cities ── */}
      <section className="py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
              <Sun className="h-5 w-5 text-purple-700" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Day Hikes from Major Cities</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {dayHikes.map((city) => (
              <div key={city.city} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[#A0522D] mb-4">{city.city}</h3>
                <div className="space-y-3">
                  {city.hikes.map((h) => (
                    <div key={h.trail} className="flex items-start gap-3 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium text-gray-900">{h.trail}</span>
                        <div className="text-gray-500 mt-0.5">{h.time} | {h.cost}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gear Checklist ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
              <Backpack className="h-5 w-5 text-indigo-700" />
            </div>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Gear Checklist</h2>
              <p className="font-[family-name:var(--font-heading)] text-sm text-gray-500 mt-0.5">What to pack for day hikes vs multi-day treks</p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#A0522D] text-white">
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">Item</th>
                  <th className="p-3 text-left font-[family-name:var(--font-heading)] font-semibold">Category</th>
                  <th className="p-3 text-center font-[family-name:var(--font-heading)] font-semibold">Day Hike</th>
                  <th className="p-3 text-center font-[family-name:var(--font-heading)] font-semibold">Multi-Day</th>
                </tr>
              </thead>
              <tbody>
                {gearEssentials.map((g, i) => (
                  <tr key={g.item} className={i % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}>
                    <td className="p-3 text-gray-700">{g.item}</td>
                    <td className="p-3 text-gray-500">{g.category}</td>
                    <td className="p-3 text-center">{g.dayHike ? <CheckCircle className="h-4 w-4 text-green-600 mx-auto" /> : <span className="text-gray-300">--</span>}</td>
                    <td className="p-3 text-center">{g.multiDay ? <CheckCircle className="h-4 w-4 text-green-600 mx-auto" /> : <span className="text-gray-300">--</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 card-moroccan p-4 border-l-4 border-[#A0522D] bg-orange-50/50">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <strong>Gear rental in Imlil:</strong> Trekking poles, crampons, ice axes, sleeping bags, and backpacks can be rented from shops in Imlil village from 50 MAD per item per day. Quality varies, so inspect before paying. Bring your own boots — rental boots are a recipe for blisters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Altitude Sickness ── */}
      <section className="py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                <AlertTriangle className="h-5 w-5 text-red-700" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Altitude Sickness Prevention</h2>
            </div>
            <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Acute Mountain Sickness (AMS) can affect anyone above 2,500m, regardless of fitness. On the Toubkal trail, hikers ascend from 1,740m to 4,167m in under 48 hours — a rate that outpaces the body&apos;s ability to acclimatize for many people. The M&apos;Goun traverse reaches 4,068m with a similar rapid gain. Take these precautions seriously.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="card-moroccan p-4">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-green-600" />Prevention</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Sleep one night at the refuge (3,207m) before summiting</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Drink 3-4 liters of water per day above 2,500m</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Limit altitude gain to 500m per sleeping elevation per day</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Avoid alcohol above 3,000m</li>
                    <li className="flex items-start gap-2"><CheckCircle className="h-3.5 w-3.5 text-green-500 mt-0.5 flex-shrink-0" />Consider Diamox (from 30 MAD at Marrakech pharmacies)</li>
                  </ul>
                </div>
                <div className="card-moroccan p-4">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2 flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-red-600" />Warning Signs</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2"><AlertTriangle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />Persistent headache unresponsive to ibuprofen</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />Nausea, vomiting, loss of appetite</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />Dizziness, confusion, or unusual fatigue</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" />Difficulty breathing at rest</li>
                    <li className="flex items-start gap-2"><AlertTriangle className="h-3.5 w-3.5 text-red-500 mt-0.5 flex-shrink-0" /><strong>Descend immediately if symptoms worsen</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Guided vs Independent ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-100">
              <Compass className="h-5 w-5 text-teal-700" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Guided vs Independent Hiking</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Users className="h-5 w-5 text-[#A0522D]" />Guided Treks
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Best for:</strong> Multi-day routes (M&apos;Goun, Saghro, Rif traverse), winter Toubkal, first-time Atlas hikers, and anyone who prefers not to handle logistics.</p>
                <p><strong>What&apos;s included:</strong> Licensed mountain guide, mule support for bags, cook for multi-day treks, route navigation, cultural interpretation, emergency response knowledge.</p>
                <p><strong>Cost:</strong> Day hike with guide from 500 MAD. 3-day guided trek with meals, mules, and gite stays from 2,500 MAD per person. Premium full-service treks from 6,000 MAD.</p>
                <p><strong>How to book:</strong> The bureau des guides in Imlil, Tabant, and N&apos;Kob can match you with a licensed guide on the spot. For organized group treks, book through agencies in Marrakech or Ouarzazate at least one week ahead. Seasonal pricing can change during peak months.</p>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Map className="h-5 w-5 text-[#A0522D]" />Independent Hiking
              </h3>
              <div className="space-y-3 text-sm text-gray-700">
                <p><strong>Best for:</strong> Easy trails (Ouzoud, Akchour, Paradise Valley), the Imlil-Armed loop, Tizi n&apos;Tamatert pass, standard summer Toubkal, and experienced trekkers with navigation skills.</p>
                <p><strong>What you need:</strong> Downloaded GPX tracks (AllTrails and Wikiloc have Morocco coverage), offline maps (Maps.me or OsmAnd), compass or GPS device, sufficient water and food, and registration at the local bureau des guides for multi-day routes.</p>
                <p><strong>Cost savings:</strong> No guide fees. Budget for accommodation (refuges from 100 MAD, gites from 80 MAD), food (tajine in village gites from 50 MAD), and transport (grand taxis from 20-100 MAD depending on distance).</p>
                <p><strong>Risks:</strong> Unmarked trail junctions, rapid weather changes above 3,000m, limited mobile signal in valleys, and difficulty communicating with Berber-speaking villagers in remote areas. Carry a basic Darija phrasebook.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Permits & Practicalities ── */}
      <section className="py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-100">
                <BookOpen className="h-5 w-5 text-sky-700" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Permits & Practical Details</h2>
            </div>
            <div className="space-y-5 text-sm text-gray-700 leading-relaxed">
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Trail Permits</h3>
                <p>Morocco does not have a blanket permit system for hiking. Toubkal National Park charges an entry fee from 20 MAD at the Imlil trailhead. Talassemtane National Park (Rif Mountains) is free but has a registration desk. The M&apos;Goun Geopark area encourages registration at the Tabant bureau des guides. All other trails in this guide are open-access with no fees or permits required.</p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Trail Maps & Navigation</h3>
                <p>Paper maps covering the Toubkal area are published by Editorial Piolet (1:50,000 scale) and available in Imlil and Marrakech bookshops from 80 MAD. For digital navigation, download offline maps through Maps.me, OsmAnd, or Avenza Maps before leaving your accommodation. GPX tracks for all 15 trails in this guide are available on Wikiloc and AllTrails. Mobile signal is unreliable above 2,000m and nonexistent in most gorge bottoms.</p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Water & Food on the Trail</h3>
                <p>Carry at least 2 liters for a day hike and 3 liters for full-day routes. Mountain springs exist but are not reliably safe. Use purification tablets (from 40 MAD per pack at Marrakech pharmacies) or a portable filter. On multi-day treks, your guide or cook typically sources water from known safe springs. Village gites serve simple meals (tajine, bread, mint tea) from 50 MAD. Stock up on snacks in Marrakech or the nearest town — trailhead villages have limited supplies.</p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">Insurance & Emergency</h3>
                <p>Travel insurance with mountain rescue coverage is essential for any trek above 2,500m. Standard travel policies often exclude activities above 3,000m or 4,000m, so read the fine print. The Toubkal refuge has a satellite phone for emergencies. In the High Atlas, mule evacuation to Imlil takes 4-6 hours from the refuge. Helicopter rescue exists but response times are unpredictable. Carry a personal locator beacon (PLB) for remote routes like M&apos;Goun and Saghro.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-100">
                <MessageCircleQuestion className="h-5 w-5 text-violet-700" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqItems.map((faq) => (
                <details key={faq.q} className="group card-moroccan">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-[family-name:var(--font-heading)] font-semibold text-gray-900 text-sm">
                    {faq.q}
                    <ChevronRight className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{faq.a}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-14">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-8">Related Guides</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Morocco Hiking Guide', href: '/morocco-hiking-guide', desc: 'General overview of trekking in Morocco with cost breakdowns and planning tips' },
              { title: 'Day Hikes from Cities', href: '/morocco-day-hiking', desc: 'Half-day and full-day hike itineraries accessible from Morocco\'s main cities' },
              { title: 'Morocco Camping Guide', href: '/camping', desc: 'Wild camping rules, campsite directory, and gear recommendations for Morocco' },
              { title: 'Atlas Mountains Guide', href: '/atlas-mountains', desc: 'Complete guide to the High Atlas, Middle Atlas, and Anti-Atlas mountain ranges' },
              { title: 'Morocco Waterfall Hikes', href: '/morocco-waterfall-hikes', desc: 'Best waterfall trails including Ouzoud, Akchour, and hidden cascades' },
              { title: 'Morocco Budget Travel', href: '/budget-travel', desc: 'How to travel Morocco on a budget including transport, food, and accommodation' },
              { title: 'Morocco Packing List', href: '/packing', desc: 'What to pack for Morocco across seasons and activity types' },
              { title: 'Morocco Health & Safety', href: '/health', desc: 'Health precautions, vaccinations, altitude tips, and emergency contacts' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-md transition-shadow">
                <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] group-hover:text-[#C4960C] transition-colors mb-2 flex items-center gap-2">
                  {guide.title}
                  <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-gray-500">{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#A0522D] py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
            Ready to Hit the Trail?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/90 font-[family-name:var(--font-heading)]">
            From easy waterfall walks to high-altitude summit pushes, Morocco&apos;s trail network rewards every level of hiker. Plan your route, check the season, pack your gear, and go.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/morocco-hiking-guide"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] shadow hover:bg-gray-50 transition-colors"
            >
              Read the Full Hiking Guide <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-[family-name:var(--font-heading)] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore the Atlas Mountains <Mountain className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

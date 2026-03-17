import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Mountain,
  MapPin,
  Clock,
  Star,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Thermometer,
  Footprints,
  Compass,
  Sun,
  CloudSnow,
  Users,
  Tent,
  Heart,
  Backpack,
  Landmark,
  Shield,
  TreePine,
  Snowflake,
  Lightbulb,
  ArrowUp,
  Route,
  Camera,
  Info,
  TrendingUp,
  Calendar,
  ArrowRight,
  Bed,
  CloudRain,
  Wind,
  Leaf,
  Eye,
  Phone,
  Navigation,
  Flame,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Atlas Mountains Trekking Guide 2025-2026 | Toubkal, Berber Villages, Multi-Day Routes',
  description:
    'Complete Atlas Mountains trekking guide for Morocco. Mount Toubkal (4,167m), Berber village treks, multi-day routes, day hikes from Marrakech, trekking seasons, mountain safety, accommodation, budget tips, and photography advice.',
  keywords: [
    'Atlas Mountains trekking',
    'Mount Toubkal trek',
    'Morocco trekking guide',
    'High Atlas hiking',
    'Berber village trek',
    'Imlil trekking',
    'Toubkal summit',
    'Mgoun traverse',
    'Jebel Saghro trek',
    'Atlas Mountains day hikes',
    'Marrakech day hikes',
    'Ourika Valley hike',
    'Morocco mountain guide',
    'Atlas trekking season',
    'Morocco altitude sickness',
    'Atlas Mountains accommodation',
    'Morocco trekking budget',
    'Atlas Mountains photography',
  ],
  openGraph: {
    title: 'Atlas Mountains Trekking Guide - Morocco 2025-2026',
    description:
      'From the summit of Toubkal to hidden Berber valleys. Complete trekking guide with routes, seasons, safety, accommodation, and budget tips.',
    url: 'https://citytoursmorocco.com/atlas-mountains',
    images: [
      {
        url: '/images/hero-atlas.webp',
        width: 1200,
        height: 630,
        alt: 'Atlas Mountains trekking trail with snow-capped peaks and Berber villages',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atlas Mountains Trekking Guide | Morocco',
    description:
      'Mount Toubkal, Berber villages, multi-day routes, day hikes, and everything you need for Atlas Mountains trekking in Morocco.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/atlas-mountains' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Atlas Mountains Trekking - Morocco',
  description:
    'Comprehensive trekking guide for the Atlas Mountains of Morocco, covering Mount Toubkal, Berber village treks, multi-day routes, day hikes, seasons, safety, and practical logistics.',
  url: 'https://citytoursmorocco.com/atlas-mountains',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.0596,
    longitude: -7.9154,
    name: 'Mount Toubkal, High Atlas Mountains, Morocco',
  },
  touristType: ['Adventure Travelers', 'Hikers', 'Trekkers', 'Nature Enthusiasts', 'Mountain Climbers'],
};

/* ===================================================================
   DATA: ATLAS MOUNTAIN RANGES
   =================================================================== */

const atlasRanges = [
  {
    name: 'High Atlas',
    nameBerber: 'Idraren Draren',
    elevation: 'Up to 4,167m (Jebel Toubkal)',
    description:
      'The backbone of Morocco, stretching over 1,000 km from the Atlantic coast near Agadir to the northeast. The High Atlas is home to North Africa\'s highest peak, Jebel Toubkal (4,167m), and dozens of summits above 3,000m. This is where the most popular trekking routes are found, from the classic Toubkal summit to the remote Mgoun Traverse. Deep valleys shelter traditional Berber villages where life follows rhythms that have persisted for centuries. The terrain ranges from lush walnut groves at lower elevations to stark, moonlike scree fields above 3,500m.',
    highlights: ['North Africa\'s highest peak (4,167m)', 'Most popular trekking region', 'Spectacular gorges and valleys', 'Traditional Berber villages'],
    bestTime: 'April-June, September-November',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Middle Atlas',
    nameBerber: 'Idraren n Wammas',
    elevation: 'Up to 3,340m (Jebel Bou Iblane)',
    description:
      'The green heart of Morocco. The Middle Atlas is covered in dense cedar, oak, and pine forests and is home to the endangered Barbary macaque, the only African primate found north of the Sahara. The region includes natural lakes, waterfalls, and the town of Ifrane, known as "Little Switzerland" for its French colonial chalet architecture. Less dramatic than the High Atlas but more accessible, the Middle Atlas offers gentler terrain, cooler temperatures, and excellent wildlife viewing opportunities that make it ideal for less experienced trekkers and families.',
    highlights: ['Cedar forests and Barbary macaques', 'Natural lakes and waterfalls', 'Ifrane and Azrou', 'Gentler trekking terrain'],
    bestTime: 'Year-round (skiing Dec-Mar, hiking Apr-Nov)',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Anti-Atlas',
    nameBerber: 'Idraren n Dern',
    elevation: 'Up to 2,712m (Jebel Saghro)',
    description:
      'The oldest mountain range in Morocco, with geological formations dating back over two billion years to the Precambrian era. The Anti-Atlas rises south of the High Atlas and extends toward the Sahara, creating surreal landscapes of volcanic rock formations, painted gorges, and oasis valleys. Less visited than the High Atlas, it offers extraordinary geology, the famous almond blossoms of Tafraoute in February, and some of the most otherworldly trekking terrain in Africa. The Jebel Saghro massif is the premier trekking destination here, particularly during the winter months when the High Atlas is snowbound.',
    highlights: ['Ancient geological formations', 'Best winter trekking', 'Volcanic rock pinnacles', 'Almond blossoms in February'],
    bestTime: 'October-April (too hot in summer)',
    image: '/images/hero-trekking.webp',
  },
];

/* ===================================================================
   DATA: MOUNT TOUBKAL TREK
   =================================================================== */

const toubkalRoutes = [
  {
    name: 'Standard Route (South Cirque)',
    duration: '2 days',
    difficulty: 'Moderate-Challenging',
    description:
      'The most popular route to the summit. Day 1: Trek from Imlil (1,740m) through the Mizane Valley past Aremd village and the Sidi Chamharouch shrine to the Toubkal Refuge (Les Mouflons, 3,207m). Distance 10 km, 5-6 hours. Day 2: Depart at dawn for the summit via the south cirque, ascending 960m over scree and boulder fields. The final 500m is loose rock requiring careful footwork. Summit to Imlil return takes 7-9 hours total. Non-technical but physically demanding at altitude.',
    bestFor: 'First-time Toubkal trekkers with good fitness',
  },
  {
    name: 'Toubkal Circuit (via Lac d\'Ifni)',
    duration: '4-6 days',
    difficulty: 'Challenging',
    description:
      'An extended route that combines the Toubkal summit with Morocco\'s largest natural mountain lake. From Imlil, head south over the Tizi n\'Ouanoums pass (3,664m) to Lac d\'Ifni (2,312m), a stunning turquoise lake set in a barren cirque. Continue to the Toubkal Refuge, summit Toubkal, then return via the Azzaden Valley. This circuit avoids the crowds of the standard route and offers far more varied scenery, including wild camping by the lake.',
    bestFor: 'Experienced trekkers wanting a fuller High Atlas experience',
  },
  {
    name: 'Winter Ascent',
    duration: '2-3 days',
    difficulty: 'Very Challenging',
    description:
      'From December to March, Toubkal becomes an alpine mountaineering objective. The standard route is covered in snow and ice, requiring crampons, ice axes, and alpine experience. Temperatures at the refuge can drop to -20C, and whiteout conditions are common. Winter ascents should only be attempted with an experienced mountain guide and full winter mountaineering equipment. The reward is a truly spectacular snow-covered summit with far fewer people.',
    bestFor: 'Experienced mountaineers with winter alpine skills',
  },
];

const toubkalPackingEssentials = [
  { category: 'Footwear', items: ['Broken-in hiking boots with ankle support', 'Trail sandals for refuge evenings', 'Moisture-wicking socks (3 pairs)', 'Gaiters for scree slopes (summit day)'] },
  { category: 'Clothing', items: ['Moisture-wicking base layers (merino wool ideal)', 'Insulating fleece or down jacket', 'Waterproof shell jacket', 'Hiking trousers', 'Sun hat and warm beanie', 'Insulated gloves', 'Buff or neck gaiter'] },
  { category: 'Gear', items: ['30-40L daypack with hip belt', 'Trekking poles (essential for scree)', 'Headlamp with spare batteries', 'Sleeping bag liner (refuge provides blankets)', 'Water bottles (2L minimum)', 'Water purification tablets', 'Sunglasses (Category 3-4 UV)'] },
  { category: 'Health', items: ['Sunscreen SPF 50+', 'First aid kit with blister plasters', 'Altitude medication (Diamox)', 'Personal medications', 'Electrolyte sachets', 'Lip balm with SPF', 'Toilet paper and hand sanitizer'] },
];

const toubkalCosts = [
  { item: 'Licensed mountain guide (2-day trek)', cost: '800-1,200 MAD', note: 'Mandatory since 2019 regulation. Split between group.' },
  { item: 'Mule and muleteer', cost: '300-500 MAD per day', note: 'Carries bags to the refuge. One mule carries for 2-3 people.' },
  { item: 'Toubkal Refuge (Les Mouflons)', cost: '150-200 MAD per night', note: 'Bunk bed, blankets, basic meals available (50-100 MAD).' },
  { item: 'Meals at refuge', cost: '50-100 MAD per meal', note: 'Simple but filling tagine, soup, bread. Bring extra snacks.' },
  { item: 'Transport Marrakech to Imlil', cost: '150-300 MAD', note: 'Grand taxi shared (150 MAD) or private transfer (300 MAD).' },
  { item: 'Crampons and ice axe rental (winter)', cost: '100-200 MAD per day', note: 'Available in Imlil. Check condition carefully.' },
  { item: 'Total budget (2-day guided trek)', cost: '2,000-4,000 MAD', note: 'Per person for 2-person group, all-inclusive.' },
];

/* ===================================================================
   DATA: BERBER VILLAGE TREKS
   =================================================================== */

const berberTreks = [
  {
    village: 'Imlil and Aremd',
    altitude: '1,740m - 1,900m',
    duration: '1-2 days',
    difficulty: 'Easy-Moderate',
    description:
      'The most accessible Berber mountain experience. Imlil is the main gateway to Toubkal, with guesthouses, cafes, and the Bureau des Guides. A 45-minute uphill walk leads to Aremd, a traditional car-free village perched above the valley with stunning Toubkal views. Stone houses cascade down the hillside amid walnut and cherry trees. Stay overnight in a family gite, share a home-cooked tagine dinner, and watch the stars in air cleaner than anywhere in lowland Morocco. The Monday souk in Asni (30 minutes downhill) is an authentic mountain market worth timing your visit around.',
    highlights: ['Toubkal gateway village', 'Car-free Aremd village', 'Family gite stays', 'Kasbah du Toubkal'],
    fromMarrakech: '90 minutes by car (60 km via Asni)',
    image: '/images/hero-atlas.webp',
  },
  {
    village: 'Azzaden Valley',
    altitude: '1,800m - 3,500m',
    duration: '2-4 days',
    difficulty: 'Easy-Moderate',
    description:
      'A gentler alternative to the Toubkal summit that explores one of the most beautiful valleys in the High Atlas. The Azzaden Valley lies south of Imlil and is reached by crossing the Tizi Mzik pass (2,489m). The trek winds through terraced fields, walnut groves, and Berber villages connected by ancient mule tracks. Stay in village gites and experience authentic mountain hospitality with home-cooked tagines and fresh bread baked in communal tandoor ovens. The Azzaden Trekking Lodge offers more comfortable accommodation. This is the ideal route for those who want the Atlas experience without the high-altitude challenge of Toubkal.',
    highlights: ['Terraced valleys and walnut groves', 'Village gite homestays', 'Ancient mule tracks', 'Azzaden Trekking Lodge'],
    fromMarrakech: '2 hours (90 min drive + 30 min walk)',
    image: '/images/hero-trekking.webp',
  },
  {
    village: 'Ait Bouguemez (Happy Valley)',
    altitude: '1,800m - 2,200m',
    duration: '3-5 days',
    difficulty: 'Easy-Moderate',
    description:
      'Known as the "Happy Valley" for its extraordinary beauty and the warmth of its inhabitants, Ait Bouguemez is one of Morocco\'s most rewarding trekking destinations. The valley stretches for 30 km through the Central High Atlas, lined with stone villages, irrigated terraces, and ancient communal granaries (agadirs) that date back centuries. Unlike the busy Toubkal region, Ait Bouguemez sees far fewer tourists, offering a more intimate cultural experience. The valley is the starting point for the Mgoun Traverse and offers excellent day hikes to surrounding ridges and plateaus. Spring brings wildflowers and snowmelt cascades; autumn offers harvest festivals and golden light.',
    highlights: ['30 km of pristine valley', 'Ancient granaries (agadirs)', 'Starting point for Mgoun', 'Fewer tourists than Toubkal'],
    fromMarrakech: '5-6 hours by road (200 km via Azilal)',
    image: '/images/hero-atlas.webp',
  },
];

const berberEtiquette = [
  { rule: 'Remove shoes before entering a home', detail: 'Your host will indicate where to leave footwear. Socks are fine indoors.' },
  { rule: 'Accept mint tea when offered', detail: 'Refusing tea is considered impolite. Three glasses is customary. The first is bitter as life, the second strong as love, the third sweet as death.' },
  { rule: 'Eat with your right hand', detail: 'Meals are communal, eaten from a shared dish. Tear bread with your right hand to scoop food.' },
  { rule: 'Ask before photographing people', detail: 'Always request permission before taking portraits. Many Berber women prefer not to be photographed.' },
  { rule: 'Dress modestly', detail: 'Cover shoulders and knees, especially in villages. This applies to both men and women.' },
  { rule: 'Bring a small gift', detail: 'School supplies for children, fruit, sugar, or tea are always appreciated. Avoid giving money to children.' },
];

/* ===================================================================
   DATA: MULTI-DAY TREK ROUTES
   =================================================================== */

const multiDayRoutes = [
  {
    name: 'Toubkal Circuit',
    duration: '4-6 days',
    distance: '60-80 km',
    maxAltitude: '4,167m',
    difficulty: 'Challenging',
    description:
      'The most comprehensive High Atlas trek, combining the Toubkal summit with the stunning Lac d\'Ifni and the remote Azzaden Valley. Starting from Imlil, the route heads south over the Tizi n\'Ouanoums pass (3,664m) to Lac d\'Ifni, Morocco\'s largest natural mountain lake. From the lake, traverse to the Toubkal Refuge, summit Toubkal, then descend through the Azzaden Valley via a different pass back to Imlil. This circuit offers far more variety than the standard two-day summit and avoids retracing your steps. Wild camping by Lac d\'Ifni under a sky of stars is an unforgettable experience.',
    itinerary: [
      'Day 1: Imlil to Azib Tamsoult (2,500m) via Tizi Mzik, 6 hours',
      'Day 2: Azib Tamsoult to Lac d\'Ifni (2,312m) via Tizi n\'Ouanoums (3,664m), 7 hours',
      'Day 3: Lac d\'Ifni to Toubkal Refuge (3,207m), 5 hours',
      'Day 4: Summit Toubkal (4,167m) and descend to Refuge, 7-9 hours',
      'Day 5: Refuge to Imlil via Mizane Valley, 5 hours',
    ],
    bestSeason: 'May-June, September-October',
    guideRequired: true,
    price: '4,000-7,000 MAD (guided, all-inclusive)',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Mgoun Traverse',
    duration: '5-7 days',
    distance: '70-100 km',
    maxAltitude: '4,071m',
    difficulty: 'Very Challenging',
    description:
      'Morocco\'s most rewarding multi-day trek and the country\'s second-highest peak. The Mgoun Traverse crosses the Central High Atlas from north to south, starting in the Ait Bouguemez "Happy Valley" and finishing in the Valley of Roses near El Kelaa Mgouna. The route passes through the spectacular Mgoun Gorge, sometimes called Morocco\'s "Grand Canyon" with walls reaching 300m in height. You wade through knee-deep river water in the gorge, camp wild in alpine meadows above 3,500m, and pass through remote villages where tourism remains a novelty. This is serious mountain trekking that requires fitness, experience, and a competent guide.',
    itinerary: [
      'Day 1: Tabant to Agouti (1,800m), acclimatization walk, 3 hours',
      'Day 2: Agouti to Tarkeddit Plateau (3,200m), 7 hours',
      'Day 3: Tarkeddit to Mgoun summit (4,071m) and camp at Ouillim (3,000m), 9 hours',
      'Day 4: Ouillim into the Mgoun Gorge (2,200m), wading river crossings, 7 hours',
      'Day 5: Through the gorge to Amesker village (1,800m), 6 hours',
      'Day 6: Amesker to El Kelaa Mgouna (1,450m), 5 hours',
    ],
    bestSeason: 'June-September (gorge requires low water levels)',
    guideRequired: true,
    price: '5,000-8,000 MAD (guided, 6 days all-inclusive)',
    image: '/images/hero-trekking.webp',
  },
  {
    name: 'Jebel Saghro Circuit',
    duration: '4-6 days',
    distance: '55-80 km',
    maxAltitude: '2,712m',
    difficulty: 'Moderate',
    description:
      'The best winter trek in Morocco. When the High Atlas is snowbound from December to March, the Jebel Saghro massif in the Anti-Atlas offers spectacular trekking through volcanic landscapes that look like they belong on another planet. Basalt towers, deep canyons, and pinnacle formations create an otherworldly backdrop. The route passes through semi-nomadic Ait Atta Berber territory, and you camp wild among extraordinary rock formations. The iconic Bab n\'Ali twin rock towers are the visual highlight. Lower altitude and southern exposure mean warm days even in midwinter, though nights can be cold.',
    itinerary: [
      'Day 1: Tagdilt n\'Bour to Igli camp (1,800m), 5 hours',
      'Day 2: Igli to Bab n\'Ali (2,200m), the iconic twin rock gateway, 6 hours',
      'Day 3: Bab n\'Ali to Kouaouch Plateau (2,500m), 7 hours',
      'Day 4: Kouaouch to nomad camps and Afougal Gorge (2,100m), 5 hours',
      'Day 5: Descent to N\'Kob or Boumalne Dades, 5 hours',
    ],
    bestSeason: 'October-April (too hot May-September)',
    guideRequired: true,
    price: '3,000-5,500 MAD (guided, 5 days all-inclusive)',
    image: '/images/hero-atlas.webp',
  },
];

/* ===================================================================
   DATA: DAY HIKES FROM MARRAKECH
   =================================================================== */

const dayHikes = [
  {
    name: 'Ourika Valley',
    distance: '60 km from Marrakech',
    driveTime: '45-60 minutes',
    hikeDuration: '3-5 hours',
    difficulty: 'Easy',
    elevation: '1,000m - 1,500m',
    description:
      'The closest and most accessible Atlas experience from Marrakech. The Ourika Valley follows a rushing river into the foothills of the High Atlas, passing through Berber villages, saffron farms, and argan cooperatives. The main hiking objective is the Setti Fatma waterfalls, a chain of seven cascading falls. The first two are accessible to anyone with reasonable mobility; the upper falls require scrambling over rocks with the help of a local guide. River-side restaurants serve excellent tagine lunches with mountain views. Visit the Safran de l\'Ourika garden (30 MAD) to learn about the world\'s most expensive spice, grown right here.',
    highlights: ['Setti Fatma waterfalls', 'Saffron farm visit', 'Berber village walk', 'River-side tagine lunch'],
    tip: 'Avoid after heavy rain as flash floods are a real risk in the valley. The Monday souk in Tnine Ourika is one of the most authentic mountain markets.',
  },
  {
    name: 'Imlil Valley Walk',
    distance: '60 km from Marrakech',
    driveTime: '90 minutes',
    hikeDuration: '4-6 hours',
    difficulty: 'Easy-Moderate',
    elevation: '1,740m - 1,900m',
    description:
      'A day trip to the Toubkal gateway village with a walk through terraced mountain villages. From Imlil, hike uphill to the car-free village of Aremd (45 minutes) for spectacular views of the Toubkal massif. Continue to the Kasbah du Toubkal for lunch on their panoramic terrace (stunning views, excellent food, 150-300 MAD for lunch). For a longer walk, continue up the Mizane Valley to the Sidi Chamharouch shrine (2,310m), a sacred site with a white-painted rock where Moroccans come for healing. Total walking time from Imlil to Sidi Chamharouch and back is 5-6 hours.',
    highlights: ['Aremd village visit', 'Kasbah du Toubkal lunch', 'Toubkal massif views', 'Sidi Chamharouch shrine'],
    tip: 'Combine with a stop in Asni on the way back. Grand taxis from Marrakech depart from the station near Bab er-Rob.',
  },
  {
    name: 'Ouzoud Falls',
    distance: '150 km from Marrakech',
    driveTime: '2.5-3 hours',
    hikeDuration: '2-3 hours',
    difficulty: 'Easy',
    elevation: '800m - 1,000m',
    description:
      'North Africa\'s highest waterfall at 110 meters, cascading in three dramatic tiers into a gorge of red rock and olive trees. Wild Barbary macaques swing in the surrounding trees, and a permanent rainbow forms in the mist on sunny days. Take a small boat to the base (20 MAD) for the full experience of the falls\' power. A canyon rim trail (2-3 hours loop) offers dramatic viewpoints from above. The area is popular with Moroccan families on weekends, creating a festive atmosphere with grilled meat vendors and mint tea stalls. Weekdays are much quieter.',
    highlights: ['110m three-tier waterfall', 'Barbary macaque viewing', 'Boat ride at the base', 'Canyon rim hiking trail'],
    tip: 'Visit on a weekday to avoid crowds. Wear proper shoes as the trails to the base are steep and slippery. Do not feed the macaques. Morning light creates the best rainbow in the mist.',
  },
  {
    name: 'Oukaimeden Plateau',
    distance: '75 km from Marrakech',
    driveTime: '90 minutes',
    hikeDuration: '3-5 hours',
    difficulty: 'Moderate',
    elevation: '2,600m - 3,258m',
    description:
      'Africa\'s highest ski resort in winter transforms into an excellent hiking zone in summer. The drive up from the Ourika Valley is scenic, climbing through switchbacks with increasingly dramatic views. In summer, hike to the summit of Jebel Oukaimeden (3,258m) for 360-degree High Atlas panoramas including Toubkal on clear days. The plateau is scattered with Bronze Age petroglyphs (2,000-3,000 years old) depicting weapons, animals, and hunting scenes. Wildflowers carpet the meadows from May to July. In winter (December-March), basic ski lifts operate when snow allows.',
    highlights: ['Bronze Age petroglyphs', 'Summit panoramic views', 'Summer wildflower meadows', 'Winter skiing (seasonal)'],
    tip: 'Altitude hits quickly here. Take it slow if you are coming directly from Marrakech. Bring warm layers as it is significantly cooler than the city.',
  },
];

/* ===================================================================
   DATA: TREKKING SEASONS
   =================================================================== */

const trekkingSeasons = [
  {
    season: 'Spring (April - June)',
    icon: Leaf,
    rating: 'Best',
    ratingColor: '#22c55e',
    highAtlas: 'Ideal. Wildflowers bloom, rivers run full from snowmelt, temperatures are pleasant (15-25C at 2,000m). Snow lingers above 3,500m into May but the standard Toubkal route is usually clear by mid-April. The most colorful time in the mountains.',
    middleAtlas: 'Excellent. Green forests, full lakes, pleasant temperatures. Barbary macaques are active.',
    antiAtlas: 'Good in April, becoming hot by June. Almond blossom season ends in March.',
    crowdLevel: 'Moderate. April is quiet; May and June see more trekkers.',
  },
  {
    season: 'Summer (July - August)',
    icon: Sun,
    rating: 'Good for High Atlas',
    ratingColor: '#C4960C',
    highAtlas: 'Hot at lower elevations but fine above 2,500m. All high passes are snow-free. Toubkal is busy. The Mgoun Traverse is best done now as the gorge water levels are lowest. Long daylight hours. Afternoon thunderstorms possible above 3,000m.',
    middleAtlas: 'Pleasant. Forests offer cool shade. Lakes are warm enough for swimming.',
    antiAtlas: 'Too hot for trekking. Temperatures routinely exceed 40C. Avoid.',
    crowdLevel: 'High. Peak season for Toubkal. Book refuges and guides well ahead.',
  },
  {
    season: 'Autumn (September - November)',
    icon: TreePine,
    rating: 'Best',
    ratingColor: '#22c55e',
    highAtlas: 'Arguably the finest trekking season. Stable weather, clear skies, pleasant temperatures, and thinning crowds after October. Snow returns to high peaks by late November. Harvest season in the valleys brings festivals and golden light.',
    middleAtlas: 'Beautiful autumn colors in the cedar forests. Cooler temperatures.',
    antiAtlas: 'Excellent from October onward. The Jebel Saghro season begins.',
    crowdLevel: 'Moderate in September, quieter October-November.',
  },
  {
    season: 'Winter (December - March)',
    icon: Snowflake,
    rating: 'Specialist',
    ratingColor: '#A0522D',
    highAtlas: 'Snow covers everything above 2,500m. Toubkal becomes a winter mountaineering objective requiring crampons and ice axes. Lower valleys remain accessible. Oukaimeden ski season. Beautiful but demanding.',
    middleAtlas: 'Snow in Ifrane and Azrou. Michlifen ski resort operates. Cold but scenic.',
    antiAtlas: 'Prime season. Jebel Saghro is warm and spectacular. The best time for Anti-Atlas trekking.',
    crowdLevel: 'Low in High Atlas. Saghro sees steady winter traffic.',
  },
];

/* ===================================================================
   DATA: GUIDED VS INDEPENDENT
   =================================================================== */

const guidedVsIndependent = {
  guided: {
    title: 'Guided Trekking',
    pros: [
      'Safety at altitude and in remote terrain',
      'Local knowledge of routes, weather, and conditions',
      'Cultural access to Berber communities and homes',
      'Logistics handled: mules, meals, accommodation',
      'Emergency response and first aid expertise',
      'Support for the local mountain economy',
    ],
    cons: [
      'Less flexibility in pace and schedule',
      'Higher cost (800-1,500 MAD per day for guide)',
      'Group dynamics may not suit solo preferences',
    ],
    cost: '800-1,500 MAD per day (guide only). All-inclusive guided treks with mules, meals, and accommodation: 2,000-4,000 MAD per day per person.',
    tip: 'Always use guides licensed by the Bureau des Guides in Imlil or certified through CFAMM (Centre de Formation aux Metiers de Montagne). Unlicensed guides lack training and insurance.',
  },
  independent: {
    title: 'Independent Trekking',
    pros: [
      'Complete freedom of pace and schedule',
      'Lower cost',
      'Solitude on the trail',
      'Sense of self-reliance and adventure',
    ],
    cons: [
      'Navigation challenges (trails are not always marked)',
      'No emergency support in remote areas',
      'Limited cultural access without a local intermediary',
      'Must carry all your own gear and food',
      'Mandatory guide requirements for some peaks',
    ],
    cost: '500-1,500 MAD per day (food, accommodation, transport only)',
    tip: 'Independent trekking is feasible for well-marked routes like the Ourika Valley, Imlil to Aremd, and lower-altitude trails. For Toubkal, Mgoun, and multi-day routes, a guide is strongly recommended for safety and increasingly required by regulation.',
  },
};

/* ===================================================================
   DATA: TRAIL ACCOMMODATION
   =================================================================== */

const trailAccommodation = [
  {
    type: 'Mountain Refuges',
    icon: Mountain,
    priceRange: '100-200 MAD per night',
    description:
      'Basic alpine refuges on major trekking routes. The most famous is the CAF Toubkal Refuge (Les Mouflons) at 3,207m, an essential overnight stop for Toubkal summit attempts. Expect bunk beds or sleeping platforms, shared blankets (bring a sleeping bag liner), basic communal kitchen facilities, and simple meals available for purchase. Cold water only. The Lepiney Refuge (Tazaghart) and the Neltner Refuge are other options in the Toubkal massif. Refuges get very busy in peak season; arrive early or book ahead.',
    tips: ['Bring a sleeping bag liner for hygiene', 'Arrive before 3pm to secure a spot', 'Meals are basic but filling: tagine, soup, bread', 'Charge devices at the refuge (limited sockets)'],
  },
  {
    type: 'Village Gites',
    icon: Bed,
    priceRange: '150-400 MAD per night (dinner and breakfast included)',
    description:
      'Family-run guesthouses in Berber villages that form the backbone of trekking accommodation in the Atlas. Expect mattresses on the floor with heavy blankets in a shared room, shared squat toilets (sometimes Western), and hot water from a bucket or solar heater. Rooms are clean and basic. The highlight is the food: home-cooked tagines, freshly baked bread from the communal tandoor, seasonal salads, and endless mint tea. Meals are communal, eaten on the floor from a shared dish. Gites are found in every trekking village and represent the most authentic mountain experience.',
    tips: ['Bring earplugs and a headlamp for shared rooms', 'Tipping the cook is appreciated (20-50 MAD)', 'Vegetarian food is easy to arrange', 'Ask your guide to call ahead to reserve'],
  },
  {
    type: 'Camping',
    icon: Tent,
    priceRange: 'Free to 100 MAD per night',
    description:
      'Wild camping is generally permitted in the mountains above the village line, and multi-day treks like the Mgoun Traverse and Jebel Saghro circuit rely on it. Your guide will know the best spots with water sources, wind protection, and level ground. On guided treks, the mule team carries tents, cooking equipment, and food. Organized campsites with basic facilities exist near popular trailheads like Imlil and Setti Fatma. Nights above 3,000m can be bitterly cold even in summer, so a proper sleeping bag is essential.',
    tips: ['Carry out all rubbish (leave no trace)', 'Never camp near water sources', 'A four-season sleeping bag is needed above 3,000m', 'Bring a foam mat as well as an inflatable for insulation'],
  },
  {
    type: 'Luxury Mountain Lodges',
    icon: Landmark,
    priceRange: '1,200-5,000+ MAD per night',
    description:
      'For those who want mountain scenery without roughing it. The Kasbah du Toubkal in Imlil is the flagship: a restored hilltop kasbah with panoramic Toubkal views, hammam, excellent Berber cuisine, and a community-oriented ethos. Kasbah Tamadot, Richard Branson\'s property above Imlil, offers ultra-luxury with infinity pool and spa. The Azzaden Trekking Lodge provides comfortable accommodation deep in the Azzaden Valley. These lodges make excellent bases for day hikes or bookends for a multi-day trek.',
    tips: ['Book Kasbah du Toubkal well ahead in peak season', 'Day visitors can lunch at Kasbah du Toubkal', 'Lodges arrange guided treks and mule transport', 'Wi-Fi is available but signal quality varies'],
  },
];

/* ===================================================================
   DATA: MOUNTAIN SAFETY & HEALTH
   =================================================================== */

const altitudeInfo = [
  {
    title: 'Understanding Altitude Sickness',
    icon: ArrowUp,
    content:
      'Acute Mountain Sickness (AMS) can affect anyone above 2,500m, regardless of age or fitness. On Toubkal (4,167m) and Mgoun (4,071m), AMS is a genuine concern because the typical two-day itinerary involves rapid altitude gain. Symptoms include headache, nausea, dizziness, fatigue, loss of appetite, and disturbed sleep. Mild symptoms are common and usually manageable. AMS is not related to fitness; marathon runners and elite athletes can be affected just as much as casual hikers.',
  },
  {
    title: 'Prevention',
    icon: Shield,
    content:
      'Ascend gradually when possible. Spend an extra night at the Toubkal Refuge (3,207m) to acclimatize before the summit push. Drink 3-4 liters of water per day. Avoid alcohol and sleeping pills. Eat carbohydrate-rich meals. Consider prophylactic Acetazolamide (Diamox, 125mg twice daily), available over the counter in Moroccan pharmacies for about 30 MAD per box. Start the day before ascent. If you have time, spend a night in Imlil before starting the trek to begin acclimatization at 1,740m.',
  },
  {
    title: 'Warning Signs - Descend Immediately',
    icon: AlertTriangle,
    content:
      'Descend immediately if mild symptoms worsen to include: severe headache unresponsive to painkillers, persistent vomiting, confusion or disorientation, difficulty breathing at rest, loss of coordination (ataxia), or a wet cough. These indicate potentially life-threatening HACE (High Altitude Cerebral Edema) or HAPE (High Altitude Pulmonary Edema). The treatment is always descent. Never ascend further with worsening symptoms. On Toubkal, the nearest medical facility is in Asni, 1.5-2 hours from the refuge by mule.',
  },
  {
    title: 'The Golden Rule',
    icon: CheckCircle,
    content:
      'If you feel unwell at altitude, assume it is AMS until proven otherwise. Descending even 500m usually brings rapid improvement. Your guide should carry a basic first aid kit and know the fastest descent routes. For Toubkal, the Neltner valley descent to Imlil is the quickest evacuation route. Helicopter rescue is theoretically available but response times are slow and landing conditions are not always favorable.',
  },
];

const weatherHazards = [
  { hazard: 'Afternoon thunderstorms', detail: 'Common above 3,000m in summer (July-August). Start summit pushes at dawn to descend before afternoon storms. Lightning on exposed ridges is dangerous.', icon: CloudRain },
  { hazard: 'Whiteout conditions', detail: 'Winter and early spring can bring sudden fog and snow that obliterates visibility on high ridges. GPS and compass skills are essential. Do not continue if you cannot see the trail.', icon: CloudSnow },
  { hazard: 'Extreme cold', detail: 'Temperatures at the Toubkal Refuge can drop to -20C in winter. Even in summer, nights above 3,000m can reach -5C. Hypothermia is a real risk for under-prepared trekkers.', icon: Thermometer },
  { hazard: 'Sunburn and heat', detail: 'UV radiation increases dramatically with altitude. At 4,000m, UV is approximately 40% stronger than at sea level. Apply SPF 50+ sunscreen every 2 hours and wear a hat and sunglasses.', icon: Sun },
  { hazard: 'Flash floods', detail: 'River valleys (especially Ourika) can flood with terrifying speed after rainfall. Never camp in a dry riverbed. Check weather forecasts and heed local warnings.', icon: Wind },
  { hazard: 'Dehydration', detail: 'Dry mountain air and physical exertion cause rapid fluid loss. Drink at least 3 liters per day, more at altitude. Carry water purification as mountain streams may contain Giardia.', icon: Flame },
];

const emergencyContacts = [
  { service: 'Moroccan Emergency Number', number: '150 (SAMU)', note: 'Ambulance and medical emergencies. French and Arabic.' },
  { service: 'Gendarmerie Royale', number: '177', note: 'Mountain rescue coordination. Coverage is limited in remote areas.' },
  { service: 'Tourist Police', number: '190', note: 'Tourist-specific assistance.' },
  { service: 'Imlil Bureau des Guides', number: '+212 524 485611', note: 'Local mountain guide office. Can coordinate rescue from Toubkal area.' },
  { service: 'Toubkal Refuge', number: '+212 668 737373', note: 'Les Mouflons refuge. Can relay emergency messages.' },
];

/* ===================================================================
   DATA: FLORA & WILDLIFE
   =================================================================== */

const floraWildlife = [
  {
    category: 'Mammals',
    icon: Eye,
    species: [
      { name: 'Barbary Macaque', location: 'Middle Atlas (Azrou cedar forest), Ouzoud', status: 'Endangered. Morocco has the largest remaining population (5,000-8,000).' },
      { name: 'Barbary Sheep (Aoudad)', location: 'High Atlas, Anti-Atlas rocky terrain', status: 'Rare and elusive. Best chance: Toubkal National Park, early morning.' },
      { name: 'Barbary Ground Squirrel', location: 'Anti-Atlas, lower High Atlas', status: 'Common. Often seen around trekking camps.' },
      { name: 'Wild Boar', location: 'Middle Atlas forests, Rif Mountains', status: 'Common but rarely seen. Look for tracks and rooting.' },
    ],
  },
  {
    category: 'Birds',
    icon: Eye,
    species: [
      { name: 'Lammergeier (Bearded Vulture)', location: 'High Atlas cliffs, Toubkal massif', status: 'Rare. Wingspan up to 2.8m. Drops bones from height to crack them.' },
      { name: 'Golden Eagle', location: 'All Atlas ranges', status: 'Uncommon but regularly spotted soaring over ridges.' },
      { name: 'Bonelli\'s Eagle', location: 'Gorges and cliff faces', status: 'Resident in Todra and Dades gorges.' },
      { name: 'Moussier\'s Redstart', location: 'Endemic to North Africa, all Atlas ranges', status: 'Common and conspicuous. Bright orange and black.' },
    ],
  },
  {
    category: 'Flora',
    icon: Leaf,
    species: [
      { name: 'Atlas Cedar', location: 'Middle Atlas (Azrou, Ifrane), 1,500-2,500m', status: 'Endangered. Some specimens are 800+ years old and 40m tall.' },
      { name: 'Argan Tree', location: 'Western foothills, endemic to Morocco', status: 'UNESCO Biosphere Reserve. Source of valuable argan oil.' },
      { name: 'Alpine Wildflowers', location: 'High Atlas meadows above 2,500m, May-July', status: 'Spectacular displays of orchids, irises, and buttercups.' },
      { name: 'Thuya (Barbary Thuja)', location: 'Middle Atlas, Anti-Atlas', status: 'Ancient conifer valued for fragrant wood. Heavily exploited.' },
    ],
  },
];

/* ===================================================================
   DATA: PHOTOGRAPHY TIPS
   =================================================================== */

const photographyTips = [
  {
    title: 'Golden Hours in the Mountains',
    tip: 'The hour after sunrise and before sunset transforms the Atlas into a photographer\'s paradise. Dawn light paints the peaks in shades of gold, pink, and amber. From the Toubkal summit, sunrise reveals the Sahara to the south in a golden haze. The Azzaden Valley is particularly photogenic in late afternoon when sidelighting accentuates the terraced hillsides.',
  },
  {
    title: 'Portraits and People',
    tip: 'Always ask permission before photographing Berber villagers, and respect refusals gracefully. Many older women and some men prefer not to be photographed. Building rapport over mint tea before asking usually yields more natural portraits. A guide who knows the community is invaluable for this. Avoid photographing children without parental consent. Offering to show the image on your screen afterwards is appreciated.',
  },
  {
    title: 'Gear Recommendations',
    tip: 'A lightweight mirrorless camera with a 24-70mm lens covers most mountain scenarios. Add a wide-angle (16-35mm) for dramatic landscapes and gorges. A telephoto (70-200mm) is useful for wildlife and compressed mountain perspectives. Protect gear from dust in a weatherproof camera bag. Bring spare batteries as cold temperatures drain them rapidly at altitude. A polarizing filter deepens blue skies and reduces glare on water.',
  },
  {
    title: 'Landscape Compositions',
    tip: 'Use foreground elements like rocks, wildflowers, or mule tracks to create depth. The winding paths through Berber villages make excellent leading lines. Include people for scale in vast mountain panoramas. Shooting down into valleys from high passes creates dramatic layered compositions. The red-rock gorges of Todra and Dades offer extraordinary color contrasts against blue skies.',
  },
  {
    title: 'Night Sky Photography',
    tip: 'The Atlas Mountains offer some of the darkest skies in the western Mediterranean. Above 2,000m and away from villages, the Milky Way is spectacular. Lac d\'Ifni and the Toubkal Refuge are outstanding for astrophotography. Use a sturdy tripod, wide aperture (f/2.8 or wider), ISO 3200-6400, and 15-25 second exposures. New moon phases are obviously best.',
  },
  {
    title: 'Phone Photography',
    tip: 'Modern smartphones produce excellent mountain photos. Use HDR mode for high-contrast scenes. The panorama function works brilliantly for wide mountain vistas. Clean your lens frequently as mountain dust accumulates. Enable grid lines for level horizons. Download offline maps (Maps.me or Google Maps) as navigation doubles as location documentation.',
  },
];

/* ===================================================================
   DATA: BUDGET GUIDE
   =================================================================== */

const budgetCategories = [
  {
    category: 'Budget Trekking',
    dailyCost: '300-600 MAD per day',
    icon: Tent,
    details: [
      'Independent trekking on marked trails',
      'Village gites for accommodation (150-300 MAD)',
      'Meals in gites or self-catered (50-100 MAD)',
      'Grand taxi transport (shared, 15-50 MAD per leg)',
      'No guide on easy routes',
    ],
    bestFor: 'Solo backpackers and experienced trekkers on easy, well-marked routes like Ourika Valley or Imlil area walks.',
  },
  {
    category: 'Mid-Range Trekking',
    dailyCost: '800-1,500 MAD per day',
    icon: Backpack,
    details: [
      'Licensed mountain guide included',
      'Mule support for gear transport',
      'Gite or refuge accommodation',
      'All meals provided (gite home-cooking)',
      'Private transport from Marrakech',
    ],
    bestFor: 'Most trekkers. Covers Toubkal summit, Azzaden Valley, and mid-range multi-day treks. Best balance of value and experience.',
  },
  {
    category: 'Luxury Trekking',
    dailyCost: '2,500-5,000+ MAD per day',
    icon: Star,
    details: [
      'Premium guide with small group or private service',
      'Kasbah or lodge accommodation (Kasbah du Toubkal level)',
      'Gourmet meals with wine',
      'Quality camping gear on multi-day treks',
      'Private 4x4 transfers throughout',
      'Photography guide or cultural specialist available',
    ],
    bestFor: 'Travelers who want mountain experiences without compromising comfort. Honeymoons, special occasions, photography tours.',
  },
];

const typicalCosts = [
  { item: 'Licensed mountain guide', cost: '800-1,500 MAD/day', note: 'Shared between group members' },
  { item: 'Mule and muleteer', cost: '300-500 MAD/day', note: 'One mule carries for 2-3 trekkers' },
  { item: 'Village gite (B&B + dinner)', cost: '150-400 MAD/night', note: 'Per person, all meals included' },
  { item: 'Mountain refuge', cost: '100-200 MAD/night', note: 'Bunk bed, meals extra (50-100 MAD)' },
  { item: 'Grand taxi Marrakech-Imlil', cost: '150 MAD shared / 300 MAD private', note: 'Per vehicle, fits 6 passengers' },
  { item: 'Trekking pole rental', cost: '30-50 MAD/day', note: 'Available in Imlil' },
  { item: 'Sleeping bag rental', cost: '50-100 MAD/day', note: 'Available in Imlil. Quality varies.' },
  { item: 'Crampon and ice axe rental (winter)', cost: '100-200 MAD/day', note: 'Essential December-March on Toubkal' },
  { item: 'Day trip Marrakech to Ourika (guided)', cost: '300-800 MAD', note: 'Transport, guide, lunch included' },
  { item: 'Toubkal 2-day guided trek (per person)', cost: '2,000-4,000 MAD', note: 'Guide, mule, refuge, meals included' },
];

/* ===================================================================
   DATA: PRACTICAL TIPS
   =================================================================== */

const practicalTips = [
  {
    title: 'Getting to the Trailheads',
    icon: Navigation,
    content:
      'Most trekking starts from Imlil, 60 km south of Marrakech. Grand taxis depart from near Bab er-Rob in Marrakech to Asni (25 MAD, 1 hour) where you transfer to another taxi to Imlil (15 MAD, 30 min). Alternatively, arrange a private transfer (300-500 MAD direct to Imlil). For the Ait Bouguemez Valley, take a bus or grand taxi to Azilal (3 hours) then another taxi to Tabant (2 hours). For Jebel Saghro, the gateway towns are N\'Kob and Boumalne Dades, both accessible from Ouarzazate.',
  },
  {
    title: 'Water and Hydration',
    icon: Flame,
    content:
      'Mountain streams in the Atlas are not reliably clean due to livestock grazing. Always purify water using tablets (Micropur or Aquatabs, available in Marrakech pharmacies), a SteriPen, or a filter. Carry at least 2 liters at all times and drink 3-4 liters per day at altitude. In summer, streams above 3,000m may dry up. Your guide will know current water source conditions. Electrolyte sachets help prevent dehydration and cramping.',
  },
  {
    title: 'Money and Supplies',
    icon: DollarSign,
    content:
      'Carry sufficient cash in Moroccan dirhams. There are no ATMs in the mountains; the last reliable ATMs are in Imlil, Asni, Azilal, and Boumalne Dades. Gites and guides accept cash only. Stock up on snacks, batteries, and any specialty items in Marrakech. Imlil has basic shops selling water, biscuits, and canned goods, but choice is limited. Pharmacies in Imlil sell basic first aid supplies and Diamox.',
  },
  {
    title: 'Mobile Phone Coverage',
    icon: Phone,
    content:
      'Maroc Telecom has the best mountain coverage among Moroccan operators. You will have signal in most villages and on some ridgelines, but expect no coverage in deep valleys, gorges, and above 3,000m on many routes. Download offline maps before you leave (Maps.me and Gaia GPS are the best for Atlas trails). WhatsApp is the standard communication method in Morocco and works wherever you have data. Consider a satellite communicator (Garmin InReach) for remote multi-day treks.',
  },
  {
    title: 'Travel Insurance',
    icon: Shield,
    content:
      'Standard travel insurance may not cover trekking above certain altitudes or in remote areas. Ensure your policy explicitly covers trekking up to 4,200m, helicopter evacuation, and mountain rescue. World Nomads and Global Rescue are popular choices among trekkers. Keep your policy details accessible at all times. Note that mountain rescue in Morocco is not as developed as in European countries; evacuation by mule to the nearest road may be the first step.',
  },
  {
    title: 'Responsible Trekking',
    icon: Heart,
    content:
      'The Atlas Mountains are under increasing environmental pressure from tourism. Carry out all rubbish, including biodegradable waste. Use established toilet areas at refuges and gites. If camping wild, dig a cat-hole at least 30 cm deep and 100m from water sources. Do not pick wildflowers or disturb wildlife. Support the local economy by using licensed guides, staying in village gites, and buying supplies locally. Respect the pace and customs of mountain life.',
  },
];

/* ===================================================================
   DATA: RELATED PAGES
   =================================================================== */

const relatedPages = [
  { title: 'Mountains of Morocco', href: '/mountains', description: 'Complete guide to all four mountain ranges, gorges, waterfalls, and ski resorts.' },
  { title: 'Trekking & Hiking', href: '/trekking', description: 'Top 15 treks ranked by difficulty with detailed route descriptions and packing lists.' },
  { title: 'Camping in Morocco', href: '/camping', description: 'Wild camping regulations, organized campsites, and gear advice for Morocco.' },
  { title: 'Adventure Activities', href: '/adventure', description: 'Rock climbing, mountain biking, paragliding, and other adventure sports.' },
  { title: 'Berber Culture', href: '/berber-culture', description: 'History, traditions, language, and hospitality of the Amazigh people.' },
  { title: 'Best Time to Visit', href: '/best-time', description: 'Month-by-month weather guide for planning your Morocco trip.' },
  { title: 'National Parks', href: '/national-parks', description: 'Toubkal, Talassemtane, Ifrane, and other protected areas in Morocco.' },
  { title: 'Wildlife & Birdwatching', href: '/wildlife', description: 'Barbary macaques, raptors, desert wildlife, and where to find them.' },
];

/* ===================================================================
   COMPONENT
   =================================================================== */

export default function AtlasMountainsTrekkingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ============================================================
          HERO SECTION
          ============================================================ */}
      <section className="relative py-20 md:py-32 overflow-hidden">
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
            <Link href="/mountains" className="hover:text-white transition-colors">
              Mountains
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Atlas Mountains Trekking</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Atlas Mountains Trekking Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the 4,167-meter summit of Toubkal to hidden Berber valleys and volcanic desert peaks. Everything you need to trek North Africa&apos;s greatest mountain range.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ============================================================
          INTRODUCTION
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Trekking in the Atlas Mountains
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The Atlas Mountains are Morocco&apos;s most dramatic natural feature: a 2,500-kilometer chain of peaks, valleys, and gorges that cuts diagonally across the country from the Atlantic coast to the Algerian border. For trekkers, they offer an extraordinary range of experiences &mdash; from a half-day waterfall walk an hour from Marrakech to a week-long traverse of some of the most remote mountain terrain in North Africa.
              </p>
              <p>
                At the heart of it all stands <strong>Jebel Toubkal</strong>, the highest peak in North Africa at 4,167 meters. Toubkal is the most popular trek in Morocco and achievable by any fit hiker in two days, yet it delivers genuine alpine drama: a sunrise summit with views stretching from the Sahara to the Atlantic. But the Atlas offers far more than Toubkal alone.
              </p>
              <p>
                The <strong>High Atlas</strong> is the main trekking range, home to Toubkal, the Mgoun Traverse, and dozens of valleys where traditional Berber villages cling to terraced hillsides. The <strong>Middle Atlas</strong> offers gentler, forested terrain with cedar groves and endangered Barbary macaques. The <strong>Anti-Atlas</strong>, the oldest range, rewards winter trekkers with volcanic landscapes and nomadic Berber encounters in the Jebel Saghro massif.
              </p>
              <p>
                Whether you are a first-time hiker looking for a day trip from Marrakech, an experienced trekker planning a multi-day expedition, or a culture-focused traveler wanting to stay in Berber village guesthouses, this guide covers every aspect of trekking in the Atlas Mountains: routes, seasons, safety, accommodation, costs, gear, and practical tips earned from years on these trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          THREE ATLAS RANGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Three Ranges, Three Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s Atlas Mountains are not one range but three distinct chains, each with its own character, trekking season, and appeal.
          </p>
          <div className="space-y-8">
            {atlasRanges.map((range) => (
              <div key={range.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  <div className="lg:col-span-2 relative h-64 lg:h-auto overflow-hidden">
                    <img src={range.image} alt={range.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="tag tag-accent">{range.elevation}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-3 p-8">
                    <div className="flex items-baseline gap-3 mb-3">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {range.name}
                      </h3>
                      <span className="text-sm text-[var(--text-muted)] italic">{range.nameBerber}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{range.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {range.highlights.map((h) => (
                        <span key={h} className="tag tag-primary">{h}</span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-[var(--text-muted)]">
                      <span>
                        <Calendar className="w-3.5 h-3.5 inline mr-1" />
                        Best time: {range.bestTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MOUNT TOUBKAL TREK
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              <Mountain className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
              Mount Toubkal &mdash; North Africa&apos;s Highest Peak
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              At 4,167 meters, Jebel Toubkal is the crown jewel of Moroccan trekking. Achievable by fit hikers in two days, it delivers genuine alpine drama just 90 minutes from Marrakech.
            </p>
          </div>

          {/* Toubkal Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Summit Elevation', value: '4,167m', icon: ArrowUp },
              { label: 'Standard Duration', value: '2-3 days', icon: Clock },
              { label: 'Best Season', value: 'Apr-Jun, Sep-Nov', icon: Sun },
              { label: 'Difficulty', value: 'Moderate-Challenging', icon: TrendingUp },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-5 text-center">
                <stat.icon className="w-6 h-6 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-xl font-bold text-[var(--text-primary)]">{stat.value}</p>
                <p className="text-sm text-[var(--text-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Toubkal Routes */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Routes to the Summit
          </h3>
          <div className="space-y-6 mb-12">
            {toubkalRoutes.map((route) => (
              <div key={route.name} className="card-moroccan p-6">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">{route.name}</h4>
                  <span className="tag tag-accent">{route.duration}</span>
                  <span className="tag tag-primary">{route.difficulty}</span>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-3">{route.description}</p>
                <p className="text-sm text-[var(--text-muted)]">
                  <Users className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                  <strong>Best for:</strong> {route.bestFor}
                </p>
              </div>
            ))}
          </div>

          {/* Toubkal Costs */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <DollarSign className="w-6 h-6 inline text-[var(--color-primary)] mr-1" />
            Toubkal Trek Costs
          </h3>
          <div className="card-moroccan overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Cost</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {toubkalCosts.map((cost) => (
                    <tr key={cost.item} className="border-t border-[var(--border-light)]">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{cost.item}</td>
                      <td className="p-4 text-[var(--color-primary)] font-semibold whitespace-nowrap">{cost.cost}</td>
                      <td className="p-4 text-[var(--text-muted)]">{cost.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Toubkal Packing */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Backpack className="w-6 h-6 inline text-[var(--color-primary)] mr-1" />
            What to Pack for Toubkal
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {toubkalPackingEssentials.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <h4 className="font-bold text-[var(--text-primary)] mb-3">{cat.category}</h4>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BERBER VILLAGE TREKS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Berber Village Treks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The mountains are not just about peaks and passes. The traditional Berber villages that dot the Atlas valleys offer some of the most rewarding cultural experiences in Morocco.
          </p>

          <div className="space-y-8 mb-12">
            {berberTreks.map((trek, index) => (
              <div key={trek.village} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className={`relative h-64 lg:h-auto overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <img src={trek.image} alt={trek.village} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="tag tag-accent">{trek.altitude}</span>
                    </div>
                  </div>
                  <div className={`lg:col-span-2 p-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {trek.village}
                      </h3>
                      <span className="tag tag-primary">{trek.difficulty}</span>
                      <span className="text-sm text-[var(--text-muted)]">
                        <Clock className="w-3.5 h-3.5 inline mr-1" />{trek.duration}
                      </span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{trek.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {trek.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1 rounded-full border border-[var(--border-light)]">
                          {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-[var(--text-muted)]">
                      <MapPin className="w-3.5 h-3.5 inline mr-1" />
                      From Marrakech: {trek.fromMarrakech}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Berber Etiquette */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Village Etiquette
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {berberEtiquette.map((item) => (
              <div key={item.rule} className="card-moroccan p-5">
                <h4 className="font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] mt-0.5 shrink-0" />
                  {item.rule}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MULTI-DAY TREK ROUTES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Multi-Day Trek Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            For those who want to go deeper into the Atlas. These multi-day routes offer the most immersive trekking experiences in Morocco.
          </p>

          <div className="space-y-10">
            {multiDayRoutes.map((route) => (
              <div key={route.name} className="card-moroccan overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  <div className="relative h-64 lg:h-auto overflow-hidden">
                    <img src={route.image} alt={route.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute top-3 left-3">
                      <span className="tag tag-accent">{route.maxAltitude}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      {route.guideRequired && (
                        <span className="tag tag-primary">Guide required</span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-4">
                      <span><Footprints className="w-3.5 h-3.5 inline mr-1" />{route.difficulty}</span>
                      <span><Clock className="w-3.5 h-3.5 inline mr-1" />{route.duration}</span>
                      <span><Compass className="w-3.5 h-3.5 inline mr-1" />{route.distance}</span>
                      <span><DollarSign className="w-3.5 h-3.5 inline mr-1" />{route.price}</span>
                    </div>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{route.description}</p>

                    {/* Itinerary */}
                    <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-[var(--color-primary)]" />
                        Day-by-Day Itinerary
                      </h4>
                      <ul className="space-y-2">
                        {route.itinerary.map((day) => (
                          <li key={day} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                            {day}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)]">
                      <Sun className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                      <strong>Best season:</strong> {route.bestSeason}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          DAY HIKES FROM MARRAKECH
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Day Hikes from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You do not need to be a serious trekker to experience the Atlas Mountains. These day trips offer stunning mountain scenery without an overnight commitment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayHikes.map((hike) => (
              <div key={hike.name} className="card-moroccan p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">{hike.name}</h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mb-3">
                  <span><MapPin className="w-3.5 h-3.5 inline mr-1" />{hike.distance}</span>
                  <span><Clock className="w-3.5 h-3.5 inline mr-1" />{hike.hikeDuration}</span>
                  <span><Footprints className="w-3.5 h-3.5 inline mr-1" />{hike.difficulty}</span>
                  <span><ArrowUp className="w-3.5 h-3.5 inline mr-1" />{hike.elevation}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{hike.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hike.highlights.map((h) => (
                    <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-2 py-1 rounded-full border border-[var(--border-light)]">
                      {h}
                    </span>
                  ))}
                </div>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                    <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                    <strong>Tip:</strong> {hike.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TREKKING SEASONS GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Trekking Seasons Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            When you trek matters as much as where. Each season transforms the Atlas into a different landscape with different challenges and rewards.
          </p>
          <div className="space-y-6">
            {trekkingSeasons.map((s) => (
              <div key={s.season} className="card-moroccan p-6">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <s.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{s.season}</h3>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: s.ratingColor }}
                  >
                    {s.rating}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">
                      <Mountain className="w-3.5 h-3.5 inline mr-1" /> High Atlas
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{s.highAtlas}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">
                      <TreePine className="w-3.5 h-3.5 inline mr-1" /> Middle Atlas
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{s.middleAtlas}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">
                      <Compass className="w-3.5 h-3.5 inline mr-1" /> Anti-Atlas
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{s.antiAtlas}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-primary)] mb-1">
                      <Users className="w-3.5 h-3.5 inline mr-1" /> Crowd Level
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{s.crowdLevel}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GUIDED VS INDEPENDENT TREKKING
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Guided vs Independent Trekking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            One of the most important decisions for your Atlas trek. Both approaches have merits, and the right choice depends on your experience, route, and priorities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guided */}
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Users className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{guidedVsIndependent.guided.title}</h3>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Advantages</p>
                <ul className="space-y-2">
                  {guidedVsIndependent.guided.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Disadvantages</p>
                <ul className="space-y-2">
                  {guidedVsIndependent.guided.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <AlertTriangle className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-[var(--color-primary)] font-semibold mb-2">
                <DollarSign className="w-3.5 h-3.5 inline mr-1" />
                {guidedVsIndependent.guided.cost}
              </p>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 mt-3">
                <p className="text-sm text-[var(--text-muted)]">
                  <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                  {guidedVsIndependent.guided.tip}
                </p>
              </div>
            </div>

            {/* Independent */}
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
                <Compass className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{guidedVsIndependent.independent.title}</h3>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Advantages</p>
                <ul className="space-y-2">
                  {guidedVsIndependent.independent.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <p className="text-sm font-semibold text-[var(--text-primary)] mb-2">Disadvantages</p>
                <ul className="space-y-2">
                  {guidedVsIndependent.independent.cons.map((con) => (
                    <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <AlertTriangle className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm text-[var(--color-primary)] font-semibold mb-2">
                <DollarSign className="w-3.5 h-3.5 inline mr-1" />
                {guidedVsIndependent.independent.cost}
              </p>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 mt-3">
                <p className="text-sm text-[var(--text-muted)]">
                  <Lightbulb className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                  {guidedVsIndependent.independent.tip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ACCOMMODATION ON THE TRAIL
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Accommodation on the Trail
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From basic mountain refuges to luxury kasbahs, the Atlas offers accommodation for every budget and comfort level.
          </p>
          <div className="space-y-6">
            {trailAccommodation.map((acc) => (
              <div key={acc.type} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                    <acc.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-[var(--text-primary)]">{acc.type}</h3>
                      <span className="text-sm font-semibold text-[var(--color-primary)]">{acc.priceRange}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{acc.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {acc.tips.map((tip) => (
                        <span key={tip} className="text-xs bg-[var(--surface-muted)] text-[var(--text-muted)] px-3 py-1.5 rounded-full">
                          <Lightbulb className="w-3 h-3 inline mr-1" />{tip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          MOUNTAIN SAFETY & HEALTH
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Mountain Safety &amp; Health
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains are generally safe for trekkers, but altitude, weather, and remoteness demand preparation and respect.
          </p>

          {/* Altitude Sickness */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Altitude Sickness
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {altitudeInfo.map((info) => (
              <div key={info.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <info.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  <h4 className="text-lg font-bold text-[var(--text-primary)]">{info.title}</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{info.content}</p>
              </div>
            ))}
          </div>

          {/* Weather Hazards */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Weather &amp; Environmental Hazards
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {weatherHazards.map((h) => (
              <div key={h.hazard} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <h.icon className="w-4 h-4 text-[var(--color-accent)]" />
                  <h4 className="font-bold text-[var(--text-primary)] text-sm">{h.hazard}</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{h.detail}</p>
              </div>
            ))}
          </div>

          {/* Emergency Contacts */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Phone className="w-6 h-6 inline text-[var(--color-primary)] mr-1" />
            Emergency Contacts
          </h3>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Service</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Number</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {emergencyContacts.map((contact) => (
                    <tr key={contact.service} className="border-t border-[var(--border-light)]">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{contact.service}</td>
                      <td className="p-4 text-[var(--color-primary)] font-semibold whitespace-nowrap">{contact.number}</td>
                      <td className="p-4 text-[var(--text-muted)]">{contact.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FLORA & WILDLIFE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Leaf className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Flora &amp; Wildlife
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains harbor a surprising diversity of plant and animal life, including several species found nowhere else on Earth.
          </p>
          <div className="space-y-8">
            {floraWildlife.map((category) => (
              <div key={category.category} className="card-moroccan p-6">
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <category.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  {category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.species.map((s) => (
                    <div key={s.name} className="bg-[var(--surface-muted)] rounded-lg p-4">
                      <h4 className="font-semibold text-[var(--text-primary)] mb-1">{s.name}</h4>
                      <p className="text-sm text-[var(--text-muted)] mb-1">
                        <MapPin className="w-3 h-3 inline mr-1" />{s.location}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.status}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PHOTOGRAPHY TIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Photography Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Atlas Mountains offer extraordinary photographic opportunities. These tips will help you capture the drama and beauty of the range.
          </p>
          <div className="space-y-4">
            {photographyTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          BUDGET GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Budget Guide for Trekking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Trekking in the Atlas Mountains is excellent value compared to alpine destinations in Europe. Here is what to expect at every budget level.
          </p>

          {/* Budget Tiers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {budgetCategories.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3">
                  <cat.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{cat.category}</h3>
                <p className="text-sm font-semibold text-[var(--color-primary)] mb-3">{cat.dailyCost}</p>
                <ul className="space-y-2 mb-4">
                  {cat.details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] mt-0.5 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-sm text-[var(--text-muted)]">
                    <Users className="w-3.5 h-3.5 inline mr-1" />
                    <strong>Best for:</strong> {cat.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Typical Costs Table */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Typical Costs at a Glance
          </h3>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Item</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Cost</th>
                    <th className="text-left p-4 font-semibold text-[var(--text-primary)]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {typicalCosts.map((cost) => (
                    <tr key={cost.item} className="border-t border-[var(--border-light)]">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{cost.item}</td>
                      <td className="p-4 text-[var(--color-primary)] font-semibold whitespace-nowrap">{cost.cost}</td>
                      <td className="p-4 text-[var(--text-muted)]">{cost.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PRACTICAL TIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline text-[var(--color-primary)] mr-2" />
            Practical Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential logistics and practical advice that will make your Atlas trekking experience smoother and more enjoyable.
          </p>
          <div className="space-y-4">
            {practicalTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 shrink-0 mt-0.5">
                    <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{tip.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page) => (
              <Link key={page.href} href={page.href} className="card-moroccan p-5 group hover:border-[var(--color-primary)] transition-colors">
                <h3 className="font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                  {page.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Mountain & Adventure Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Mountain & Outdoor Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-road-trip-routes', title: 'Road Trip Routes', desc: 'Drive through Tizi n\'Tichka and Tizi n\'Test passes.' },
              { href: '/morocco-day-trips', title: 'Day Trips', desc: 'Ourika Valley and Imlil from Marrakech in a day.' },
              { href: '/photography-guide', title: 'Photography Guide', desc: 'Capture mountain landscapes, Berber villages, and gorges.' },
              { href: '/morocco-weather-monthly', title: 'Weather Guide', desc: 'Best months for trekking and mountain activities.' },
              { href: '/morocco-travel-insurance', title: 'Travel Insurance', desc: 'Adventure sports coverage for trekking and climbing.' },
              { href: '/morocco-safety-tips', title: 'Safety Tips', desc: 'Mountain safety, altitude, and emergency contacts.' },
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

      {/* ============================================================
          CTA SECTION
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Trek the Atlas?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Whether you are aiming for the summit of Toubkal or exploring Berber villages in the valleys below, your Atlas adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-4 h-4" /> Browse Mountain Treks
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Tent,
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
  Flame,
  Users,
  Baby,
  Heart,
  Backpack,
  Info,
  Lightbulb,
  ArrowRight,
  Waves,
  Sparkles,
  Bug,
  PersonStanding,
  CloudSun,
  Snowflake,
  Leaf,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Camping & Glamping in Morocco 2025-2026 | Sahara Desert Camps, Atlas Mountains, Luxury Glamping',
  description:
    'Complete guide to camping and glamping in Morocco. Sahara desert luxury camps, Atlas Mountain bivouacs, wild camping regulations, beach camping on the Atlantic coast, glamping at Scarabeo Camp, Berber nomadic experiences, family camping tips, gear lists, and seasonal advice for 2025-2026.',
  keywords: [
    'Morocco camping',
    'Morocco glamping',
    'Sahara desert camping',
    'Atlas Mountains camping',
    'luxury glamping Morocco',
    'Scarabeo Camp Marrakech',
    'wild camping Morocco',
    'Morocco bivouac',
    'beach camping Morocco',
    'Todra Gorge camping',
    'Dades Valley camping',
    'Paradise Valley camping',
    'Ouzoud camping',
    'Morocco camping gear',
    'Morocco camping season',
    'Berber camping experience',
    'family camping Morocco',
    'solo camping Morocco',
    'Morocco desert camp',
    'Merzouga luxury camp',
    'Morocco camping safety',
    'Rif Mountains camping',
    'Atlantic coast camping',
    'Morocco camping regulations',
    'nomadic camping Morocco',
  ],
  openGraph: {
    title: 'Camping & Glamping in Morocco 2025-2026 | Complete Guide | CityGuide',
    description:
      'Everything you need to know about camping and glamping in Morocco. Sahara desert luxury camps, Atlas Mountain bivouacs, wild camping tips, beach camping, and Berber nomadic experiences.',
    url: 'https://citytoursmorocco.com/camping',
    images: [
      {
        url: '/images/hero-camping.webp',
        width: 1200,
        height: 630,
        alt: 'Luxury desert camp under starry skies in the Moroccan Sahara',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Camping & Glamping in Morocco | Complete Guide',
    description:
      'Sahara luxury camps, Atlas Mountain bivouacs, wild camping, beach camping, and Berber nomadic experiences in Morocco.',
    images: [
      '/images/hero-camping.webp',
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/camping' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Camping & Glamping in Morocco',
  description:
    'Complete guide to camping and glamping experiences across Morocco, from Sahara desert luxury camps to Atlas Mountain bivouacs and Atlantic coast beach camping.',
  url: 'https://citytoursmorocco.com/camping',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.7917,
    longitude: -7.0926,
    name: 'Morocco',
  },
  touristType: [
    'Adventure Travelers',
    'Glamping Enthusiasts',
    'Nature Lovers',
    'Family Travelers',
    'Budget Backpackers',
  ],
};

/* ===================================================================
   CAMPING SPOT DATA
   =================================================================== */

interface CampingSpot {
  name: string;
  region: string;
  type: 'desert' | 'mountain' | 'gorge' | 'valley' | 'waterfall' | 'beach' | 'forest';
  description: string;
  highlights: string[];
  bestSeason: string;
  priceRange: string;
  nearestTown: string;
  altitude: string;
  image: string;
}

const campingSpots: CampingSpot[] = [
  {
    name: 'Erg Chebbi, Merzouga',
    region: 'Sahara Desert',
    type: 'desert',
    description:
      'The most iconic camping destination in Morocco. Towering orange dunes reaching 150 meters provide the backdrop for unforgettable nights beneath the Milky Way. Over 100 camps line the western edge of the dune field, ranging from basic bivouacs where you sleep on mats under the stars to ultra-luxury glamping with king-size beds, en-suite bathrooms, and private chefs. The sunrise and sunset light shows here are legendary, painting the dunes in shades of gold, rose, and deep purple.',
    highlights: [
      'Tallest sand dunes in Morocco (150m)',
      'Bortle 1-2 dark sky rating for stargazing',
      'Gnaoua music at Khamlia village nearby',
      'Camel trekking into the dune field',
      'Sandboarding on pristine slopes',
    ],
    bestSeason: 'October-April',
    priceRange: '400-8,000+ MAD/night',
    nearestTown: 'Merzouga (0 km) / Rissani (35 km)',
    altitude: '700m',
    image: '/images/hero-desert.webp',
  },
  {
    name: 'Jebel Toubkal Base Camp',
    region: 'High Atlas Mountains',
    type: 'mountain',
    description:
      'The base camp for North Africa\'s highest peak sits at 3,207 meters in a dramatic cirque of rock and scree. The Toubkal Refuge serves as the primary overnight point, but wild camping is permitted in the surrounding area during summer months. The scenery is raw and alpine, with views across the Atlas range stretching to the Anti-Atlas on clear days. In spring, the lower slopes come alive with wildflowers, while winter brings serious snow and ice that transforms the mountain into a genuine mountaineering challenge.',
    highlights: [
      'Gateway to Mount Toubkal (4,167m)',
      'Alpine scenery above the treeline',
      'Lac d\'Ifni on the extended circuit',
      'Berber villages on approach from Imlil',
      'Spring wildflower meadows at lower elevations',
    ],
    bestSeason: 'April-June, September-October',
    priceRange: '150-500 MAD/night (refuge), Free (wild camping)',
    nearestTown: 'Imlil (9 km trail)',
    altitude: '3,207m (refuge)',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Todra Gorge',
    region: 'Eastern High Atlas',
    type: 'gorge',
    description:
      'A spectacular limestone canyon where sheer walls rise 300 meters on either side of a narrow river passage. Camping at the base of the gorge or in the wider valley upstream offers a dramatic natural amphitheater experience. The gorge is also a world-class rock climbing destination with over 150 bolted routes. At dawn, the first light creeps down the east-facing walls in a golden curtain that photographers travel thousands of miles to capture. Several organized campsites sit near the gorge mouth, while wilder camping options lie further up the valley.',
    highlights: [
      '300m sheer limestone canyon walls',
      'World-class rock climbing (150+ routes)',
      'River swimming in summer months',
      'Palmeries and Berber villages upstream',
      'Dawn light photography in the gorge',
    ],
    bestSeason: 'March-May, September-November',
    priceRange: '50-300 MAD/night',
    nearestTown: 'Tinghir (14 km)',
    altitude: '1,400m',
    image: '/images/hero-camping.webp',
  },
  {
    name: 'Dades Valley & Gorge',
    region: 'Central High Atlas',
    type: 'valley',
    description:
      'The Dades Valley stretches from Ouarzazate eastward, carved by the Dades River through a landscape of red rock formations, crumbling kasbahs, and terraced almond orchards. The gorge section features the famous serpentine road with its hairpin bends climbing through dramatic rock towers. Camping in the valley offers solitude among some of Morocco\'s most extraordinary geology. The "Monkey Fingers" rock formations near Tamellalt are particularly surreal, rising like organ pipes from the valley floor.',
    highlights: [
      'Dramatic red rock formations (Monkey Fingers)',
      'Famous serpentine road through the gorge',
      'Ancient kasbahs dotting the valley',
      'Almond blossom season (February)',
      'Rose harvest in nearby Kelaat M\'Gouna (May)',
    ],
    bestSeason: 'March-May, September-November',
    priceRange: '50-400 MAD/night',
    nearestTown: 'Boumalne Dades (25 km to gorge)',
    altitude: '1,500-1,800m',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Paradise Valley',
    region: 'Souss-Massa (near Agadir)',
    type: 'valley',
    description:
      'A hidden gem tucked into the western foothills of the Anti-Atlas, Paradise Valley is a series of natural rock pools, waterfalls, and palm-shaded swimming holes connected by a winding river gorge. The valley feels almost tropical, with oleander, carob, and argan trees lining the pools. Camping here is unofficial but widely practiced on the flat terraces above the river. The water is crystal clear and deep enough for cliff jumping in several spots. It is a favorite escape for surfers and travelers based in Agadir or Taghazout.',
    highlights: [
      'Natural rock pools and swimming holes',
      'Cliff jumping into deep turquoise pools',
      'Lush palm and argan tree canopy',
      'Only 30 minutes from Agadir/Taghazout',
      'Peaceful riverside wild camping',
    ],
    bestSeason: 'April-October',
    priceRange: 'Free (wild camping) / 50-100 MAD (local sites)',
    nearestTown: 'Agadir (30 km) / Taghazout (20 km)',
    altitude: '300-500m',
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Ouzoud Falls',
    region: 'Middle Atlas',
    type: 'waterfall',
    description:
      'Morocco\'s most spectacular waterfall plunges 110 meters in three tiers surrounded by olive groves and red cliff faces. The mist from the falls creates a microclimate of lush vegetation and rainbows. Several campgrounds and guesthouses sit near the rim, and it is possible to camp on the plateau above the falls for stunning sunset views. Barbary macaques inhabit the cliffs and are a constant source of entertainment. The base of the falls has a natural swimming pool that is refreshing in summer heat.',
    highlights: [
      '110-meter triple-tiered waterfall',
      'Barbary macaque colony on the cliffs',
      'Rainbow mist at the waterfall base',
      'Olive grove campgrounds near the rim',
      'Natural swimming pool at the base',
    ],
    bestSeason: 'March-June, September-November',
    priceRange: '30-200 MAD/night',
    nearestTown: 'Azilal (32 km)',
    altitude: '900m',
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Erg Chigaga',
    region: 'Deep Sahara (M\'Hamid)',
    type: 'desert',
    description:
      'Morocco\'s largest and most remote dune field stretches 40 km long and 15 km wide, with dunes reaching 300 meters. Accessible only by 4x4 or multi-day camel trek from M\'Hamid El Ghizlane, Erg Chigaga offers the kind of desert solitude that Erg Chebbi can no longer match. Fewer than a dozen camps operate here, and it is entirely possible to have a dune field the size of a small country to yourself. The silence is total and the night sky rivals the best observatories on Earth.',
    highlights: [
      'Morocco\'s largest dune field (40 km long)',
      'Dunes up to 300 meters high',
      'True wilderness with minimal camps',
      '4x4 or camel-only access',
      'Taragalte Music Festival (October)',
    ],
    bestSeason: 'October-April',
    priceRange: '600-6,000 MAD/night',
    nearestTown: 'M\'Hamid El Ghizlane (50 km off-road)',
    altitude: '450m',
    image: '/images/hero-sahara-sunrise.webp',
  },
  {
    name: 'Legzira & Sidi Ifni Coast',
    region: 'Atlantic Coast (South)',
    type: 'beach',
    description:
      'The dramatic red stone arches of Legzira Beach create one of the most photogenic camping backdrops in all of Morocco. While one of the two original arches collapsed in 2016, the remaining arch and the surrounding cliffs of layered red and ochre sandstone are still breathtaking. The beach stretches for kilometers with virtually no development. Wild camping on the sand or the cliff tops is common among surfers and overlanders. Nearby Sidi Ifni, a former Spanish colonial town, provides supplies and a charming Art Deco atmosphere.',
    highlights: [
      'Iconic red stone natural arch',
      'Kilometers of empty beach',
      'Reliable surf breaks nearby',
      'Sidi Ifni\'s Art Deco colonial architecture',
      'Spectacular sunsets over the Atlantic',
    ],
    bestSeason: 'Year-round (best April-October)',
    priceRange: 'Free (wild camping)',
    nearestTown: 'Sidi Ifni (10 km)',
    altitude: '0-50m',
    image: '/images/card-beach.webp',
  },
];

/* ===================================================================
   GLAMPING DATA
   =================================================================== */

interface GlampingSite {
  name: string;
  location: string;
  description: string;
  priceRange: string;
  features: string[];
  bestFor: string;
  rating: number;
  image: string;
}

const glampingSites: GlampingSite[] = [
  {
    name: 'Scarabeo Camp',
    location: 'Agafay Desert, near Marrakech',
    description:
      'Set against the stark beauty of the Agafay stone desert with the snow-capped Atlas Mountains as a backdrop, Scarabeo Camp is the most accessible luxury camping experience in Morocco. Just 40 minutes from Marrakech, it offers an authentic desert atmosphere without the 10-hour drive to the Sahara. Each tent is individually designed with Berber textiles, vintage furniture, and private terraces. The communal areas feature fire pits, a pool, and a restaurant serving farm-to-table Moroccan cuisine. At night, the camp goes dark and the stargazing is remarkable given the proximity to the city.',
    priceRange: '2,500-5,000 MAD/night',
    features: [
      'Only 40 minutes from Marrakech',
      'Designer Berber tents with private terraces',
      'Swimming pool with Atlas Mountain views',
      'Farm-to-table restaurant and bar',
      'Camel rides, quad biking, and horseback riding',
      'Yoga sessions and spa treatments available',
    ],
    bestFor: 'Couples, luxury seekers, short trips from Marrakech',
    rating: 5,
    image: '/images/hero-marrakech.webp',
  },
  {
    name: 'Desert Luxury Camp Merzouga',
    location: 'Erg Chebbi, Merzouga',
    description:
      'One of the highest-rated luxury camps in the Erg Chebbi dune field, this camp sets the standard for Sahara glamping. Each tent features a proper king-size bed with premium linens, hand-woven Berber carpets, lantern lighting, and a private en-suite bathroom with hot shower. The camp sits deep enough in the dunes that you cannot see any roads, buildings, or other camps. Dinner is a multi-course affair prepared by a dedicated chef, served by candlelight with the dunes glowing under the moonlight.',
    priceRange: '3,000-6,500 MAD/night',
    features: [
      'Private tents with king beds and en-suite bathrooms',
      'Deep dune location with zero visual pollution',
      'Multi-course gourmet dinner by candlelight',
      'Private sunrise and sunset camel treks',
      'Telescope-guided stargazing sessions',
      'Sandboarding equipment provided',
    ],
    bestFor: 'Honeymooners, photographers, bucket-list travelers',
    rating: 5,
    image: '/images/hero-camping.webp',
  },
  {
    name: 'Kam Kam Dunes',
    location: 'Erg Chebbi, Merzouga',
    description:
      'An ultra-premium camp that pushes the boundaries of what is possible in the middle of a sand desert. The signature experience is the private candlelit dinner on top of a dune, accessible only by camel, where your table for two is set with white linen and silverware against a backdrop of infinite sand. The tents are among the largest in any Sahara camp, with separate living and sleeping areas, heated in winter, and each decorated with museum-quality Berber antiques.',
    priceRange: '4,500-9,000 MAD/night',
    features: [
      'Private dune-top dining experience',
      'Oversized luxury tents with living areas',
      'Heated tents in winter months',
      'Museum-quality Berber antique decor',
      'Personal guide and dedicated camel',
      'Champagne sunset and sunrise experiences',
    ],
    bestFor: 'Ultra-luxury travelers, special celebrations, proposals',
    rating: 5,
    image: '/images/hero-camping.webp',
  },
  {
    name: 'Terres d\'Amanar',
    location: 'Atlas Mountains, near Marrakech',
    description:
      'An eco-lodge and adventure park set in a 12-hectare forest of pine, olive, and carob trees in the Atlas foothills, just one hour from Marrakech. Accommodation includes treehouse cabins, Berber tents, and traditional stone lodges. The adventure activities range from zip-lining and rock climbing to mountain biking and horse trekking. It is one of the best family glamping options in Morocco, combining comfortable accommodation with genuine outdoor adventure in a safe, managed environment.',
    priceRange: '1,200-3,500 MAD/night',
    features: [
      'Treehouse cabins in a pine forest',
      'Zip-line and adventure park on-site',
      'Mountain biking and horse trekking',
      'Traditional Berber cooking workshops',
      'Only 1 hour from Marrakech',
      'Excellent for families with children',
    ],
    bestFor: 'Families, adventure seekers, eco-conscious travelers',
    rating: 4,
    image: '/images/hero-camping.webp',
  },
  {
    name: 'Erg Chigaga Luxury Desert Camp',
    location: 'Erg Chigaga, M\'Hamid',
    description:
      'The most exclusive camp in Morocco\'s largest dune field. Reaching this camp requires a 2-hour 4x4 drive across the stony desert from M\'Hamid, which keeps visitor numbers low and the experience genuinely remote. Each of the 12 tents is a private suite with handcrafted furniture, thick Berber carpets, and full en-suite facilities including hot rain showers. The isolation means zero light pollution and some of the best stargazing conditions on the African continent.',
    priceRange: '3,500-7,000 MAD/night',
    features: [
      'Only 12 tents for maximum exclusivity',
      'Full en-suite with hot rain showers',
      '2-hour 4x4 transfer included in price',
      'Multi-day camel expeditions available',
      'Zero light pollution stargazing',
      'Visiting nomad family encounters arranged',
    ],
    bestFor: 'Adventurers seeking luxury, solitude lovers, photographers',
    rating: 5,
    image: '/images/hero-atlas.webp',
  },
  {
    name: 'Bab El Oued Eco Lodge',
    location: 'Taghazout, Atlantic Coast',
    description:
      'A boho-chic surf and glamping retreat perched on the cliffs above one of Morocco\'s best surf breaks. The lodge combines Moroccan architecture with coastal bohemian style, offering bell tents, yurts, and surf shacks with ocean views. The rooftop terrace is the social hub, with yoga sessions at sunrise and communal dinners at sunset. The surf guides know every break from Taghazout to Imsouane, and boards and wetsuits are available for all levels.',
    priceRange: '800-2,500 MAD/night',
    features: [
      'Clifftop location above premium surf breaks',
      'Bell tents and yurts with ocean views',
      'Daily surf guiding and equipment rental',
      'Rooftop yoga at sunrise',
      'Communal kitchen and dinners',
      'Walking distance to Taghazout village',
    ],
    bestFor: 'Surfers, yoga practitioners, digital nomads',
    rating: 4,
    image: '/images/hero-trekking.webp',
  },
];

/* ===================================================================
   SEASONAL GUIDE DATA
   =================================================================== */

interface SeasonInfo {
  season: string;
  months: string;
  icon: typeof Sun;
  temp: string;
  rating: number;
  desertVerdict: string;
  mountainVerdict: string;
  coastVerdict: string;
  highlights: string[];
}

const seasonalGuide: SeasonInfo[] = [
  {
    season: 'Autumn',
    months: 'September - November',
    icon: Leaf,
    temp: '18-32C day / 8-20C night',
    rating: 5,
    desertVerdict: 'Perfect. Warm days, cool nights, clear skies. The absolute best window. October is peak season, so book desert camps well in advance.',
    mountainVerdict: 'Excellent. Comfortable hiking temperatures, stable weather, and the autumn colors in walnut and poplar groves are stunning. September can still be warm at lower elevations.',
    coastVerdict: 'Great. Water is still warm from summer, beach crowds thin out, and the surf season begins in earnest. Perfect for beach camping without the August heat.',
    highlights: ['Date harvest in the oases (Oct-Nov)', 'Taragalte Festival at Erg Chigaga (Oct)', 'Atlas autumn foliage', 'Surf season begins'],
  },
  {
    season: 'Spring',
    months: 'March - May',
    icon: CloudSun,
    temp: '16-30C day / 6-18C night',
    rating: 5,
    desertVerdict: 'Excellent. Comfortable temperatures and occasional wildflowers in the oases. Slightly less crowded than autumn and prices may be lower.',
    mountainVerdict: 'Best for lower elevations and gorges. Higher passes may still have snow until May. Wildflowers carpet the valleys in April. Some treks above 3,000m require snow gear until late May.',
    coastVerdict: 'Good. Pleasant temperatures for beach camping. Water is still cool (16-19C) but warms through the season. Almond and argan blossoms inland.',
    highlights: ['Almond blossom season (Feb-Mar)', 'Rose harvest in Kelaat M\'Gouna (May)', 'Atlas wildflower meadows (Apr)', 'Comfortable desert temps'],
  },
  {
    season: 'Winter',
    months: 'December - February',
    icon: Snowflake,
    temp: '12-22C day / 0-10C night',
    rating: 3,
    desertVerdict: 'Cold nights (can drop below freezing) but pleasant days. Pack serious warm layers for evenings. Desert camps provide extra blankets. Fewer tourists means better deals.',
    mountainVerdict: 'Snow at higher elevations makes many treks impassable without winter gear. Lower valleys and gorges remain accessible and pleasantly cool. Toubkal becomes a winter mountaineering objective.',
    coastVerdict: 'Mild and pleasant for camping. Daytime temperatures are comfortable. Rain is possible but brief. Atlantic storms bring the biggest surf swells of the year.',
    highlights: ['Cheapest camp prices of the year', 'Snow-capped Atlas photography', 'Big wave surf season', 'Clearest desert skies'],
  },
  {
    season: 'Summer',
    months: 'June - August',
    icon: Sun,
    temp: '30-48C day / 18-30C night',
    rating: 2,
    desertVerdict: 'Dangerously hot. Daytime temperatures exceed 45C regularly. Most Sahara camps close entirely June-August. Strongly advised against for desert camping.',
    mountainVerdict: 'The best and only comfortable camping zone in summer. High Atlas and Rif mountains offer cool temperatures and green landscapes. This is peak trekking season for Toubkal and M\'goun.',
    coastVerdict: 'Hot inland but the Atlantic coast is tempered by ocean breezes. Beach camping is popular but crowded, especially with Moroccan families during school holidays (July-August).',
    highlights: ['High Atlas trekking season', 'Beach camping on the coast', 'Mountain festivals', 'Escape the heat at altitude'],
  },
];

/* ===================================================================
   CAMPING GEAR DATA
   =================================================================== */

const gearCategories = [
  {
    category: 'Shelter & Sleep',
    icon: Tent,
    items: [
      { name: 'Tent (3-season minimum)', note: 'Freestanding preferred for sandy/rocky ground where stakes may not hold. A 4-season tent is needed for winter Atlas camping above 2,500m.' },
      { name: 'Sleeping bag', note: 'Desert: comfort rating 5C for winter, 15C for spring/autumn. Mountains: comfort rating -5C to -10C for winter, 5C for summer.' },
      { name: 'Sleeping pad', note: 'Inflatable pad for comfort. Closed-cell foam pad as backup (doubles as camp seat). R-value 3+ for desert winter, 5+ for mountain winter.' },
      { name: 'Pillow (compressible)', note: 'Luxury item but transformative for sleep quality. Stuff sack filled with clothes works as a free alternative.' },
    ],
  },
  {
    category: 'Cooking & Water',
    icon: Flame,
    items: [
      { name: 'Camping stove + fuel', note: 'Butane canisters (Butagaz brand) are available at hardware stores and some grocery shops in Moroccan towns. Screw-top canisters are rarer. Bring an adapter if using international brands.' },
      { name: 'Cookware set', note: 'A small pot, pan, and utensil set is sufficient. Titanium saves weight for trekking. Consider a Moroccan tagine pot for car camping authenticity.' },
      { name: 'Water purification', note: 'Essential. Carry purification tablets (Micropur or Aquatabs) or a filter (Sawyer Squeeze / LifeStraw). Municipal tap water in cities is generally safe but taste varies. Stream water in mountains should always be treated.' },
      { name: 'Water containers', note: 'Carry minimum 4L per person per day in the desert. Collapsible water containers (10-20L) for base camp. Hard-sided Nalgene bottles for daily use.' },
    ],
  },
  {
    category: 'Clothing',
    icon: Backpack,
    items: [
      { name: 'Layering system', note: 'Desert temperatures swing 25-30C between day and night. Pack lightweight sun protection for day and warm fleece/down for evenings. Merino wool base layers work in all conditions.' },
      { name: 'Sun protection clothing', note: 'Lightweight long-sleeve shirt with UPF rating, wide-brim hat, and a cheche (desert headscarf, buy locally for 30-50 MAD). Buff/neck gaiter for dust protection.' },
      { name: 'Sturdy footwear', note: 'Hiking boots for mountains, sandals for desert camps, and closed-toe water shoes for gorge swimming. Break in boots before your trip.' },
      { name: 'Rain jacket', note: 'Lightweight packable rain shell. Useful for Atlas Mountains spring/autumn and unexpected coastal weather. Not needed for Sahara camping.' },
    ],
  },
  {
    category: 'Safety & Navigation',
    icon: Shield,
    items: [
      { name: 'Headlamp + spare batteries', note: 'Essential for every camping scenario. Red light mode preserves night vision for stargazing. Rechargeable models with USB-C are most practical.' },
      { name: 'First aid kit', note: 'Include blister treatment, antihistamines, electrolyte packets, antiseptic, bandages, tweezers, and any personal medications. Pharmacies in Moroccan towns are well-stocked for resupply.' },
      { name: 'Navigation tools', note: 'Downloaded offline maps (Maps.me or Google Maps offline) are essential. Physical compass as backup. GPS tracks for remote treks. Cell coverage is spotty in mountains and nonexistent in deep desert.' },
      { name: 'Emergency whistle + mirror', note: 'Universal distress signal: 6 blasts per minute. A signal mirror can be seen for 30+ km in the desert. Weigh almost nothing and could save your life.' },
    ],
  },
];

/* ===================================================================
   SAFETY TIPS DATA
   =================================================================== */

const safetyTips = [
  {
    category: 'Wildlife',
    icon: Bug,
    tips: [
      'Scorpions are present in both desert and mountain environments. Always shake out shoes, clothing, and sleeping bags before use. Use a headlamp when walking at night.',
      'Snakes (horned vipers in the desert, Montpellier snakes in mountains) are shy and rarely encountered. Watch where you step and place your hands when scrambling over rocks.',
      'Barbary macaques near Ouzoud and in the Middle Atlas can be aggressive around food. Secure all food in your tent or vehicle and never feed them directly.',
      'Feral dogs near rural settlements can be territorial at night. A strong headlamp beam and firm voice are usually sufficient to deter them. Carry a walking stick if concerned.',
    ],
  },
  {
    category: 'Weather',
    icon: Wind,
    tips: [
      'Desert temperatures can drop below freezing in winter and exceed 50C in summer. Always check forecasts and pack for both extremes during shoulder seasons.',
      'Flash floods are a serious risk in gorges and dry riverbeds (oueds), especially from October to April. Never camp in a wadi or dry riverbed. Even distant rainfall can cause sudden flooding.',
      'Sandstorms can arise with little warning in the Sahara. If caught in one, turn your back to the wind, cover your face, and wait. They rarely last more than 30 minutes but visibility drops to zero.',
      'Mountain weather changes rapidly. Afternoon thunderstorms are common in the Atlas from June to September. Start hikes early and plan to be off ridgelines and summits by early afternoon.',
    ],
  },
  {
    category: 'Terrain',
    icon: Mountain,
    tips: [
      'Loose rock and scree are common on Atlas Mountain trails. Trekking poles provide stability and reduce knee strain on descents. Gaiters keep stones out of boots.',
      'Soft sand in the Sahara makes walking exhausting. Expect to cover distance at one-third your normal pace. Wear gaiters or wrap ankles with a scarf to keep sand out of shoes.',
      'River crossings in mountain valleys can be tricky after rain. Unbuckle your backpack waist strap before crossing so you can shed it if you fall. Use trekking poles for balance.',
      'Cliff edges near gorges and waterfalls are often unfenced and can be undercut. Stay well back from edges, especially with children. Rock near waterfalls is often slippery with spray.',
    ],
  },
];

/* ===================================================================
   BERBER / NOMADIC EXPERIENCE DATA
   =================================================================== */

const nomadicExperiences = [
  {
    title: 'Homestay with Berber Families',
    description:
      'Stay with a local Berber family in their traditional home in the Atlas Mountains or desert-edge villages. You will share meals cooked on a communal fire, sleep on thick carpets in the family salon, and learn about a way of life that has persisted for millennia. These homestays are often arranged through local guides and provide a far more meaningful cultural exchange than any hotel could offer. Expect warm hospitality, endless mint tea, and possibly some help with the day\'s farming or herding tasks.',
    practicalInfo: 'Cost: 200-500 MAD per person including meals. Arrange through licensed mountain guides or recommended guesthouses. Bring a small gift (sugar, tea, fruit, school supplies for children). Dress modestly. Learn a few Tamazight phrases: "Azul" (hello), "Tanmirt" (thank you).',
  },
  {
    title: 'Nomad Camp Experience',
    description:
      'Join semi-nomadic families who still migrate with their goat herds between seasonal pastures in the Saharan fringe and the High Atlas. These are not staged tourist experiences but genuine encounters with families living as their ancestors did. You may help gather firewood, milk goats, bake bread in sand ovens, and share a meal of tagine cooked over an open fire. The experience is rustic, the hospitality is extraordinary, and the insights into traditional Amazigh life are priceless.',
    practicalInfo: 'Best arranged through guides from Zagora, M\'Hamid, or Jebel Saghro area. Cost: 300-800 MAD per person per night. Bring your own sleeping bag. Facilities are basic (no running water, no electricity). Best season: October-April when nomads are in the lower desert areas.',
  },
  {
    title: 'Communal Camping with Local Guides',
    description:
      'Many licensed Moroccan mountain and desert guides offer multi-day camping trips where you trek together, camp together, and eat together around the same fire. These trips often include a muleteer (for carrying gear in the mountains) or cameleer (in the desert) and a cook who transforms basic ingredients into remarkable meals over a camp stove. The pace is relaxed, the conversation rich, and the insider knowledge about local plants, geology, and culture is invaluable.',
    practicalInfo: 'Cost: 500-1,200 MAD per person per day (all-inclusive: guide, food, camping gear, mule/camel). Licensed guides carry official credentials (carte de guide). Verify through the local Bureau des Guides. Tip: 50-100 MAD per day per guide is standard.',
  },
];

/* ===================================================================
   WILD CAMPING REGULATIONS
   =================================================================== */

const campingRegulations = [
  {
    rule: 'Wild camping is generally tolerated across Morocco',
    detail: 'There is no specific law prohibiting camping in the open countryside. Moroccan authorities are generally relaxed about camping in rural and desert areas. However, "tolerated" is not the same as "legally guaranteed." Use common sense and respect for the land.',
  },
  {
    rule: 'Always ask permission near villages or private land',
    detail: 'If you are near a settlement, ask the nearest resident or village elder for permission. This is both respectful and practical, as it ensures locals know you are there and may even offer hospitality, directions to water, or warnings about local hazards.',
  },
  {
    rule: 'National parks and protected areas may have restrictions',
    detail: 'Toubkal National Park, Souss-Massa National Park, and other protected areas may require permits or restrict camping to designated areas. Check with local park offices before setting up camp. Fines exist but are rarely enforced.',
  },
  {
    rule: 'Beach camping is common but varies by location',
    detail: 'Remote Atlantic beaches south of Agadir are popular for wild camping, especially among overlanders. Some popular beaches near tourist towns have informal restrictions. Avoid camping on beaches within municipal boundaries of towns.',
  },
  {
    rule: 'Military and border zones are strictly off-limits',
    detail: 'Areas near the Algerian and Mauritanian borders, and zones marked as military, are restricted. This applies particularly to the eastern Sahara and parts of the Western Sahara. Obey all signage and checkpoints.',
  },
  {
    rule: 'Leave No Trace principles are expected',
    detail: 'Morocco has a growing litter problem in natural areas. Pack out all trash, bury human waste at least 20 cm deep and 60 meters from water sources, and leave your campsite cleaner than you found it. This is non-negotiable for responsible camping.',
  },
];

/* ===================================================================
   BIVOUAC VS CAMPSITE DATA
   =================================================================== */

const bivouacVsCampsite = {
  bivouac: {
    title: 'Bivouac (Wild Camping)',
    description: 'Setting up your own tent or sleeping under the stars in an undeveloped location. You carry your own gear and supplies, choose your own spot, and are fully self-sufficient.',
    pros: [
      'Complete freedom to camp where you choose',
      'Free (no fees in most locations)',
      'Solitude and connection with nature',
      'Flexibility to move daily',
      'Authentic wilderness experience',
    ],
    cons: [
      'No facilities (water, toilets, showers)',
      'Must carry all gear and supplies',
      'Safety responsibility is entirely yours',
      'Requires experience and preparation',
      'No security for belongings',
    ],
    bestFor: 'Experienced campers, overlanders, budget travelers, trekkers',
  },
  campsite: {
    title: 'Established Campsite',
    description: 'Organized camping grounds with marked pitches, basic facilities, and often a guardian or manager. Morocco has a network of municipal and private campsites, particularly along the major tourist routes.',
    pros: [
      'Running water, toilets, and sometimes hot showers',
      'Security (often gated with a guardian)',
      'Electricity hookups for campervans',
      'Social atmosphere with other travelers',
      'Local knowledge from campsite staff',
    ],
    cons: [
      'Fees range from 30-150 MAD per person/night',
      'Can be basic and poorly maintained',
      'Less flexibility in location choice',
      'May be noisy with other campers',
      'Peak season crowding at popular sites',
    ],
    bestFor: 'Families, campervans/overlanders, first-time campers, those wanting facilities',
  },
};

/* ===================================================================
   FAMILY & SOLO CAMPING DATA
   =================================================================== */

const familyCampingTips = [
  'Choose established campsites or organized glamping over wild camping for safety, facilities, and social interaction for children.',
  'The Agafay Desert near Marrakech is ideal for a family introduction to desert camping, as it is close to medical facilities and not as extreme as the Sahara.',
  'Terres d\'Amanar in the Atlas foothills combines glamping with a full adventure park (zip-lines, rope courses, pony rides) and is only one hour from Marrakech.',
  'Pack familiar snacks and foods for children. Moroccan cuisine is generally mild but tagines may be too spicy for young palates. Most camps can prepare plain options if asked.',
  'Carry a dedicated first aid kit for children including fever medication, oral rehydration salts, antihistamine cream for insect bites, and sun protection.',
  'Avoid desert camping with children under 5 during winter (too cold at night) or summer (dangerously hot). Spring and autumn are the safest seasons.',
  'Beach camping at places like Essaouira or Mirleft offers the easiest family camping: warm weather, swimming, and nearby town amenities.',
  'Pre-book glamping accommodations with real beds for younger children who may not sleep well in tents on the ground.',
];

const soloCampingTips = [
  'Share your detailed itinerary with someone at home and check in regularly when you have cell coverage.',
  'Morocco is generally safe for solo camping, but avoid extremely remote areas without telling someone your plans.',
  'Join organized group treks for Atlas Mountain camping. The Bureau des Guides in Imlil, Marrakech, and Ouarzazate can connect you with licensed guides and other trekkers.',
  'For solo desert camping, always go with an organized camp or guide. The Sahara is genuinely dangerous if you get lost, as landmarks shift with the sand.',
  'Hostels in Marrakech, Fes, and Merzouga often organize group camping trips that are perfect for solo travelers seeking company.',
  'As a solo female camper, organized camps and established campsites are recommended over wild camping. Morocco is generally safe but solo women may attract unwanted attention in very remote areas.',
  'Carry a personal locator beacon (PLB) or satellite messenger (Garmin inReach) if camping solo in remote mountain or desert areas without cell coverage.',
  'Learn basic Arabic or French greetings. Even a few words dramatically change how local people interact with you and can open doors to invitations and assistance.',
];

/* ===================================================================
   BEACH CAMPING DATA
   =================================================================== */

const beachCampingSpots = [
  {
    name: 'Taghazout to Imsouane Coast',
    description: 'The surf coast between Agadir and Essaouira is Morocco\'s premier beach camping corridor. Dozens of secluded coves and long sandy beaches offer free wild camping with world-class surf right in front of your tent. The fishing village of Imsouane has one of the longest right-hand point breaks in Africa.',
    bestFor: 'Surfers, vanlifers, long-term travelers',
  },
  {
    name: 'Legzira Beach',
    description: 'Famous for its dramatic red stone arches (one collapsed in 2016, one remains). Kilometers of empty beach south of Sidi Ifni with reliable camping conditions. Sunsets here are among the most spectacular on the Moroccan coast.',
    bestFor: 'Photography, solitude seekers, overlanders',
  },
  {
    name: 'Moulay Bousselham Lagoon',
    description: 'A vast coastal lagoon on the Atlantic north of Rabat, renowned for birdwatching (flamingos, spoonbills, terns). Camping on the sand spit between the lagoon and the ocean offers a unique dual-water experience.',
    bestFor: 'Birdwatchers, families, nature lovers',
  },
  {
    name: 'Sidi Kaouki',
    description: 'A windswept beach 25 km south of Essaouira popular with surfers and kiters. A handful of informal campgrounds sit behind the dunes, and the village has basic supplies and surf rentals.',
    bestFor: 'Windsurfers, kitesurfers, budget travelers',
  },
  {
    name: 'Mirleft',
    description: 'A charming small town perched on cliffs above a series of sheltered coves. Each beach has its own character, from surf-pounded strands to calm swimming bays. The cliff-top views are extraordinary for coastal camping.',
    bestFor: 'Families, mixed-activity travelers, cliff camping',
  },
];

/* ===================================================================
   MOUNTAIN CAMPING DATA
   =================================================================== */

const mountainCampingZones = [
  {
    name: 'High Atlas Central (Toubkal Region)',
    altitude: '1,500-4,167m',
    terrain: 'Alpine valleys, scree slopes, glacier remnants, and dramatic cirques. Below 2,500m, walnut and almond groves line the valleys with Berber villages.',
    keyAreas: 'Imlil Valley, Toubkal Refuge area, Lac d\'Ifni, Azzaden Valley, Tacheddirt Plateau',
    bestCamping: 'Flat terraces along the Imlil to Toubkal trail. Azzaden Valley offers beautiful riverside camping with fewer trekkers. The Tacheddirt Plateau has wide open camping with 360-degree mountain views.',
    season: 'April-October for trekking camps; December-March for experienced winter camping only',
  },
  {
    name: 'Rif Mountains (Chefchaouen Region)',
    altitude: '500-2,456m (Jebel Tidiquin)',
    terrain: 'Dense cedar and oak forests, limestone ridges, deep river valleys, and the distinctive blue-washed towns. More humid than the Atlas with a Mediterranean climate.',
    keyAreas: 'Talassemtane National Park, Akchour Waterfalls trail, God\'s Bridge, Jebel Kelti, Bab Taza forests',
    bestCamping: 'Forest clearings in Talassemtane offer the most atmospheric camping in the Rif, with ancient cedars overhead and the sound of running water. The Akchour area has riverside camping near the waterfalls.',
    season: 'April-June and September-November. Winter is wet and cold. Summer can be hot at lower elevations.',
  },
  {
    name: 'Jebel Saghro',
    altitude: '1,200-2,712m',
    terrain: 'Volcanic desert mountains with dramatic basalt pillars, natural rock arches, and boulder-strewn plateaus. The landscape resembles Arizona more than Africa. Sparse vegetation except after rain.',
    keyAreas: 'Bab n\'Ali (iconic rock formation), Handour Valley, Tizi n\'Ouarg pass, Amalou n\'Mansour',
    bestCamping: 'The wide valleys around Bab n\'Ali offer flat camping with extraordinary rock scenery. The Handour Valley has sheltered spots between boulder fields. This is nomad country, and encounters with goat herds are common.',
    season: 'October-April (too hot in summer). This is the premier winter trekking and camping destination in Morocco.',
  },
  {
    name: 'M\'goun Massif & Central Atlas',
    altitude: '1,800-4,068m',
    terrain: 'High plateaus, deep gorges, and North Africa\'s second-highest peak. The M\'goun Gorge is one of Morocco\'s most spectacular canyoning routes. Nomadic Berber camps dot the highland pastures.',
    keyAreas: 'M\'goun summit circuit, Arous Gorge, Ait Bouguemez Valley (Happy Valley), Imilchil plateau',
    bestCamping: 'The Ait Bouguemez Valley floor offers idyllic camping among fields and walnut groves with mountain walls on all sides. The highland plateaus above 3,000m provide wild alpine camping with zero facilities.',
    season: 'June-September for high altitude; April-November for lower valleys',
  },
];

/* ===================================================================
   COMPONENT: PAGE
   =================================================================== */

export default function CampingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-camping.webp"
            alt="Luxury desert camp under starry skies in the Moroccan Sahara"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent" />

        <div className="container-morocco relative z-10 pb-16 pt-32">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors flex items-center">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Camping & Glamping</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium">
                <Tent className="w-4 h-4 text-[var(--color-accent)]" />
                Outdoor Adventures
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium">
                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                Updated 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-[1.1]">
              Camping & Glamping
              <span className="block text-[var(--color-accent)]">in Morocco</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
              From Sahara desert luxury camps beneath the Milky Way to wild bivouacs in the
              High Atlas, Morocco offers some of the most extraordinary camping experiences
              on Earth. Sleep under a billion stars, wake to sunrise over towering dunes, and
              discover a land where outdoor adventure meets ancient hospitality.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#camping-spots" className="btn-primary btn-lg">
                Explore Camping Spots
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#glamping" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Luxury Glamping
                <Sparkles className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '8+', label: 'Regions to Camp', icon: MapPin },
              { value: '100+', label: 'Desert Camps', icon: Tent },
              { value: '365', label: 'Days of Sun', icon: Sun },
              { value: '4,167m', label: 'Highest Camp', icon: Mountain },
            ].map((stat) => (
              <div key={stat.label} className="glass-dark rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                <div className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Zellige Divider ─── */}
      <div className="zellige-border" />

      {/* ─── Introduction Section ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Compass className="w-4 h-4" />
              Why Camp in Morocco
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              A Land Made for Sleeping Under the Stars
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              Morocco is one of the few countries where you can camp in the Sahara Desert on Monday,
              pitch your tent at the base of a 4,000-meter mountain on Wednesday, and fall asleep to
              Atlantic waves on Friday. With over 300 days of sunshine, a tradition of outdoor
              hospitality stretching back millennia, and landscapes that range from snow-capped peaks
              to tropical palm oases, Morocco is a camper&apos;s paradise. Whether you are a budget
              backpacker seeking free bivouac spots, a family looking for a safe and memorable
              glamping experience, or a luxury traveler wanting a desert camp with king-size beds
              and private chefs, this guide covers every option.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Sun,
                  title: 'Perfect Climate',
                  text: 'Over 300 days of sunshine annually. Dry, clear skies from the coast to the Sahara make camping comfortable most of the year.',
                },
                {
                  icon: Mountain,
                  title: 'Diverse Landscapes',
                  text: 'Sahara dunes, High Atlas peaks, Atlantic beaches, cedar forests, limestone gorges, and volcanic desert mountains. All within one country.',
                },
                {
                  icon: Heart,
                  title: 'Berber Hospitality',
                  text: 'Moroccan outdoor culture is deeply hospitable. Local families and guides welcome campers with mint tea, shared meals, and genuine warmth.',
                },
              ].map((item) => (
                <div key={item.title} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center mx-auto mb-4">
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
        </div>
      </section>

      {/* ─── Top Camping Spots ─── */}
      <section id="camping-spots" className="py-16 md:py-24 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <MapPin className="w-4 h-4" />
              Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Camping Spots in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From towering Sahara dunes to thundering waterfalls, these are the finest
              places to pitch a tent or roll out a sleeping bag in Morocco.
            </p>
          </div>

          <div className="space-y-8">
            {campingSpots.map((spot, index) => (
              <div
                key={spot.name}
                className="card-moroccan overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                  <div className="relative h-64 lg:h-auto lg:min-h-[400px]">
                    <img
                      src={spot.image}
                      alt={`Camping at ${spot.name}, Morocco`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="tag tag-accent">
                        {spot.type.charAt(0).toUpperCase() + spot.type.slice(1)}
                      </span>
                      <span className="tag tag-primary">{spot.region}</span>
                    </div>
                  </div>
                  <div className="p-6 lg:p-8 flex flex-col justify-center" style={{ direction: 'ltr' }}>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {spot.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {spot.description}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-[var(--color-secondary)]" />
                        <span className="text-[var(--text-secondary)]">{spot.bestSeason}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <DollarSign className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-[var(--text-secondary)]">{spot.priceRange}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-[var(--color-secondary)]" />
                        <span className="text-[var(--text-secondary)]">{spot.nearestTown}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                        <span className="text-[var(--text-secondary)]">{spot.altitude}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {spot.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Luxury Glamping Section ─── */}
      <section id="glamping" className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Sparkles className="w-4 h-4" />
              Premium Experiences
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Luxury Glamping in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              For those who want the magic of sleeping outdoors without sacrificing comfort.
              These camps offer king-size beds, gourmet dining, and private bathrooms in some
              of the most spectacular settings on Earth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glampingSites.map((site) => (
              <div key={site.name} className="card-featured overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={site.image}
                    alt={`${site.name} glamping in Morocco`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                    <Star className="w-3.5 h-3.5 text-[var(--color-accent)] fill-[var(--color-accent)]" />
                    {site.rating}/5
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="price-badge">{site.priceRange}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                    {site.name}
                  </h3>
                  <p className="flex items-center gap-1.5 text-sm text-[var(--color-secondary)] font-medium mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {site.location}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 line-clamp-3">
                    {site.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {site.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-secondary)]">Best for:</span>{' '}
                      {site.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bivouac vs Campsite ─── */}
      <section className="py-16 md:py-24 section-warm">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Info className="w-4 h-4" />
              Know the Difference
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Bivouac vs Established Campsites
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding your options is the first step to planning the right
              camping experience in Morocco.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.values(bivouacVsCampsite).map((option) => (
              <div key={option.title} className="card-moroccan p-6 lg:p-8">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {option.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {option.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-[var(--color-green)] uppercase tracking-wider mb-3">
                      <CheckCircle className="w-4 h-4" />
                      Advantages
                    </h4>
                    <ul className="space-y-2">
                      {option.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-[var(--color-error)] uppercase tracking-wider mb-3">
                      <AlertTriangle className="w-4 h-4" />
                      Considerations
                    </h4>
                    <ul className="space-y-2">
                      {option.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3.5 h-3.5 text-[var(--color-error)]/60 shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-[var(--border-light)]">
                  <p className="text-sm text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-secondary)]">Best for:</span>{' '}
                    {option.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Wild Camping Regulations ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <Shield className="w-4 h-4" />
                Regulations
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Wild Camping Rules & Regulations
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                What you need to know about camping freely in Morocco.
              </p>
            </div>

            <div className="space-y-4">
              {campingRegulations.map((reg, i) => (
                <div key={i} className="card-moroccan p-5 lg:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-sm font-bold text-[var(--color-secondary)]">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {reg.rule}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {reg.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Seasonal Guide ─── */}
      <section id="seasons" className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Calendar className="w-4 h-4" />
              When to Go
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Seasonal Camping Guide
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Morocco&apos;s camping season varies dramatically by region. Here is when to go
              where for the best experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalGuide.map((season) => (
              <div key={season.season} className="glass-dark rounded-xl p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <season.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                      {season.season}
                    </h3>
                    <p className="text-sm text-white/60">{season.months}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < season.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-white/60 mb-4">
                  <Thermometer className="w-4 h-4" />
                  {season.temp}
                </div>
                <div className="space-y-3 mb-4">
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-accent)] mb-1 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5" /> Desert
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">{season.desertVerdict}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-accent)] mb-1 flex items-center gap-1.5">
                      <Mountain className="w-3.5 h-3.5" /> Mountains
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">{season.mountainVerdict}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-accent)] mb-1 flex items-center gap-1.5">
                      <Waves className="w-3.5 h-3.5" /> Coast
                    </h4>
                    <p className="text-sm text-white/70 leading-relaxed">{season.coastVerdict}</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-2">Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {season.highlights.map((h) => (
                      <span key={h} className="text-xs bg-white/10 text-white/70 px-2.5 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Essential Gear ─── */}
      <section id="gear" className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Backpack className="w-4 h-4" />
              Packing List
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Camping Gear for Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to bring, what to buy locally, and what you can leave at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {gearCategories.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6 lg:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                    <cat.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {cat.category}
                  </h3>
                </div>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="border-l-2 border-[var(--color-accent)] pl-4">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-1">{item.name}</h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pro Tip */}
          <div className="mt-8 p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Pro Tip: Buy Locally
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco&apos;s medina markets sell excellent camping supplies at a fraction of Western prices.
                  The cheche (desert headscarf) sold in every souk for 30-50 MAD is the single most useful
                  piece of camping gear in Morocco. It serves as sun protection, dust mask, towel, pillow,
                  and turban. Wool blankets from Berber cooperatives are warm, durable, and make great souvenirs.
                  Butane gas canisters (Butagaz) are available at hardware stores in every town for 15-25 MAD.
                  Marrakech has several outdoor equipment shops near Place Jemaa el-Fna for last-minute needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Safety Section ─── */}
      <section id="safety" className="py-16 md:py-24 section-warm">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Shield className="w-4 h-4" />
              Stay Safe
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety Tips for Camping in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is a safe country for outdoor activities, but the natural environment
              demands respect and preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {safetyTips.map((section) => (
              <div key={section.category} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                    <section.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {section.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <AlertTriangle className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Berber / Nomadic Experiences ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Users className="w-4 h-4" />
              Cultural Immersion
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Nomadic Camping with Berber Communities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The most memorable camping experiences in Morocco are not about the tent
              but about the people. Sharing a fire with Berber families connects you to
              traditions stretching back thousands of years.
            </p>
          </div>

          <div className="space-y-6">
            {nomadicExperiences.map((exp) => (
              <div key={exp.title} className="card-moroccan p-6 lg:p-8">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {exp.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--color-sand-200)]">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {exp.practicalInfo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Beach Camping ─── */}
      <section className="py-16 md:py-24 section-warm">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Waves className="w-4 h-4" />
              Coastal Adventures
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Beach Camping Along the Atlantic Coast
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s 3,500 km coastline is dotted with wild beaches, surf breaks,
              and clifftop camping spots that rival anything in Europe or California.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beachCampingSpots.map((spot, i) => (
              <div key={spot.name} className={`card-moroccan p-6 ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center">
                    <Waves className="w-5 h-5 text-[var(--color-secondary)]" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {spot.name}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {spot.description}
                </p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)]">
                    <span className="font-semibold text-[var(--text-secondary)]">Best for:</span>{' '}
                    {spot.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mountain Camping Zones ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Mountain className="w-4 h-4" />
              High Country
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Mountain Camping in the Atlas & Rif
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s mountain ranges offer alpine-quality camping with a North African
              twist: Berber villages, walnut groves, and dramatic geological formations.
            </p>
          </div>

          <div className="space-y-6">
            {mountainCampingZones.map((zone) => (
              <div key={zone.name} className="card-moroccan p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="lg:w-2/3">
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {zone.name}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] mb-3">
                      <span className="flex items-center gap-1.5">
                        <Mountain className="w-3.5 h-3.5" /> {zone.altitude}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" /> {zone.season}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                      <span className="font-semibold">Terrain:</span> {zone.terrain}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-semibold">Best camping:</span> {zone.bestCamping}
                    </p>
                  </div>
                  <div className="lg:w-1/3">
                    <div className="p-4 rounded-lg bg-[var(--color-sand-50)] border border-[var(--color-sand-200)]">
                      <h4 className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider mb-2">
                        Key Areas
                      </h4>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {zone.keyAreas}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Family & Solo Camping ─── */}
      <section className="py-16 md:py-24 section-warm">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Users className="w-4 h-4" />
              For Every Traveler
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Family & Solo Camping Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Family Section */}
            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-50)] flex items-center justify-center">
                  <Baby className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Camping with Families
                </h3>
              </div>
              <ul className="space-y-3">
                {familyCampingTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Solo Section */}
            <div className="card-moroccan p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                  <PersonStanding className="w-5 h-5 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Solo Camping
                </h3>
              </div>
              <ul className="space-y-3">
                {soloCampingTips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Budget Camping Section ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <DollarSign className="w-4 h-4" />
                Budget Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Budget Camping in Morocco
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Morocco is one of the most affordable camping destinations in the world.
                Here is what things cost and how to stretch your budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {[
                { item: 'Wild camping / bivouac', cost: 'Free', note: 'Everywhere except restricted areas' },
                { item: 'Municipal / basic campsite', cost: '30-80 MAD/night', note: 'Per person, tent pitch included' },
                { item: 'Private campsite (with facilities)', cost: '60-150 MAD/night', note: 'Per person, hot shower and electric' },
                { item: 'Budget desert camp (Sahara)', cost: '400-800 MAD/night', note: 'Includes dinner, breakfast, camel ride' },
                { item: 'Mid-range desert camp', cost: '1,200-2,500 MAD/night', note: 'Private tent, en-suite, meals' },
                { item: 'Luxury glamping', cost: '2,500-9,000 MAD/night', note: 'Full luxury with all amenities' },
                { item: 'Butane gas canister', cost: '15-25 MAD', note: 'Butagaz brand, hardware stores' },
                { item: 'Cheche (desert headscarf)', cost: '30-50 MAD', note: 'Essential multi-purpose gear' },
              ].map((row) => (
                <div key={row.item} className="flex items-center justify-between p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-light)]">
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{row.item}</p>
                    <p className="text-xs text-[var(--text-muted)]">{row.note}</p>
                  </div>
                  <span className="text-sm font-bold text-[var(--color-green)] whitespace-nowrap ml-4">
                    {row.cost}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Budget Camping Daily Estimate
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    A budget camper carrying their own gear and cooking their own food can
                    comfortably travel Morocco for 150-250 MAD per day (15-25 USD). This covers
                    occasional campsite fees, food from local markets (fresh bread 1-3 MAD, vegetables
                    from souks, tagine ingredients for 30-50 MAD), transport between locations on local
                    buses, and the occasional hot shower at a campsite. Wild camping with your own food
                    and water can bring costs close to zero outside of transport.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Practical Tips / Final CTA ─── */}
      <section className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
              Ready to Camp in Morocco?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Whether you choose a luxury desert glamping tent with a private chef or a simple
              bivouac under the Atlas stars, camping in Morocco will give you memories that
              last a lifetime. The key is choosing the right season, the right region, and
              the right level of comfort for your travel style.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Tent,
                  title: 'Choose Your Style',
                  text: 'Luxury glamping, established campsite, or wild bivouac. Morocco has options for every budget and comfort level.',
                },
                {
                  icon: Calendar,
                  title: 'Pick Your Season',
                  text: 'Autumn (Oct-Nov) is the sweet spot for most regions. Summer is mountain-only. Winter is beautiful but cold at night.',
                },
                {
                  icon: Compass,
                  title: 'Plan Your Route',
                  text: 'Combine desert, mountains, and coast for the ultimate camping road trip through Morocco.',
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
              <Link href="/desert" className="btn-accent btn-lg">
                Sahara Desert Guide
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/trekking" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Trekking Guide
                <Mountain className="w-5 h-5" />
              </Link>
              <Link href="/beaches" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Beach Guide
                <Waves className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Zellige Divider ─── */}
      <div className="zellige-border" />
    </>
  );
}

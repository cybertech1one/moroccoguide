import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Snowflake,
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
  Clock,
  Users,
  Car,
  Info,
  Lightbulb,
  ArrowRight,
  TreePine,
  Sparkles,
  Camera,
  Footprints,
  TrendingUp,
  Ticket,
  Backpack,
  CloudSnow,
  MountainSnow,
  Layers,
  Route,
  Gem,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Skiing & Winter Sports in Morocco 2025-2026 | Oukaimeden, Michlifen, Atlas Mountains',
  description:
    'Complete guide to skiing and winter sports in Morocco. Oukaimeden ski resort near Marrakech, Michlifen near Ifrane, snowshoeing in the Atlas Mountains, winter trekking, ice climbing, ski-and-desert combo itineraries, lift passes, equipment rental, season guide, and practical tips for 2025-2026.',
  keywords: [
    'Morocco skiing',
    'Oukaimeden ski resort',
    'skiing in Africa',
    'Michlifen ski resort',
    'Morocco winter sports',
    'Atlas Mountains skiing',
    'Oukaimeden lift pass',
    'Morocco snow',
    'ski Morocco Marrakech',
    'Ifrane skiing',
    'Morocco snowshoeing',
    'winter trekking Morocco',
    'Toubkal winter',
    'Morocco ice climbing',
    'ski and desert Morocco',
    'highest ski lift Africa',
    'Morocco ski season',
    'Oukaimeden equipment rental',
    'Morocco snow conditions',
    'Atlas Mountains winter',
    'Morocco ski resort guide',
    'Oukaimeden slopes',
    'Michlifen cross-country skiing',
    'Morocco winter travel',
    'Morocco ski budget',
  ],
  openGraph: {
    title: 'Skiing & Winter Sports in Morocco 2025-2026 | Complete Guide | CityGuide',
    description:
      'Everything you need to know about skiing and winter sports in Morocco. Oukaimeden and Michlifen ski resorts, snowshoeing, winter trekking, ice climbing, and unique ski-and-desert itineraries.',
    url: 'https://citytoursmorocco.com/skiing',
    images: [
      {
        url: '/images/hero-ski-oukaimeden.webp',
        width: 1200,
        height: 630,
        alt: 'Skiers on the slopes of Oukaimeden with snow-covered Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skiing & Winter Sports in Morocco | Complete Guide',
    description:
      'Oukaimeden and Michlifen ski resorts, snowshoeing, winter trekking, ice climbing, and ski-and-desert combo itineraries in Morocco.',
    images: [
      '/images/hero-ski-oukaimeden.webp',
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/skiing' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Skiing & Winter Sports in Morocco',
  description:
    'Complete guide to skiing and winter sports in Morocco, including Oukaimeden ski resort near Marrakech, Michlifen near Ifrane, snowshoeing, winter trekking, and unique ski-and-desert experiences.',
  url: 'https://citytoursmorocco.com/skiing',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 31.2060,
    longitude: -7.8626,
    name: 'Oukaimeden, Morocco',
  },
  touristType: [
    'Ski Enthusiasts',
    'Winter Sports Travelers',
    'Adventure Seekers',
    'Family Travelers',
    'Unique Experience Seekers',
  ],
};

/* ===================================================================
   OUKAIMEDEN SLOPE DATA
   =================================================================== */

interface Slope {
  name: string;
  difficulty: 'green' | 'blue' | 'red' | 'black';
  length: string;
  description: string;
}

const oukaimedenSlopes: Slope[] = [
  {
    name: 'Piste des Debutants',
    difficulty: 'green',
    length: '400m',
    description: 'Gentle beginner slope near the base area with a consistent shallow gradient. Ideal for first-time skiers and children learning the basics. Served by a button lift.',
  },
  {
    name: 'Piste de la Vallee',
    difficulty: 'green',
    length: '500m',
    description: 'A wide, open green run through the lower valley area. Good visibility and forgiving terrain make this an excellent progression slope after mastering the basics.',
  },
  {
    name: 'Piste Centrale',
    difficulty: 'blue',
    length: '800m',
    description: 'The main intermediate run down the center of the ski area. Moderate gradients with some gentle turns and undulations. The most popular slope at the resort.',
  },
  {
    name: 'Piste du Plateau',
    difficulty: 'blue',
    length: '700m',
    description: 'A scenic intermediate run across the upper plateau with panoramic views of the Atlas range. Wider sections allow for practice carving and speed control.',
  },
  {
    name: 'Piste Nord',
    difficulty: 'blue',
    length: '900m',
    description: 'The north-facing intermediate slope that holds snow the longest thanks to reduced sun exposure. Often has the best conditions late in the season.',
  },
  {
    name: 'Piste des Rochers',
    difficulty: 'red',
    length: '1,100m',
    description: 'A challenging run weaving between rock outcrops with steeper pitches and variable terrain. Requires confident parallel skiing and the ability to handle changing snow conditions.',
  },
  {
    name: 'Piste du Sommet',
    difficulty: 'red',
    length: '1,400m',
    description: 'The longest run at Oukaimeden, descending from near the summit at 3,258m. Starts steep with exposed sections before easing into a sustained intermediate pitch through the lower bowl.',
  },
  {
    name: 'Couloir de l\'Aigle',
    difficulty: 'black',
    length: '600m',
    description: 'The most demanding run at Oukaimeden. A narrow, steep couloir that requires expert skiing skills. Often mogulled and can be icy in the morning. Not always open due to conditions.',
  },
];

const difficultyColors: Record<string, { bg: string; text: string; label: string }> = {
  green: { bg: '#22C55E', text: '#FFFFFF', label: 'Green (Beginner)' },
  blue: { bg: '#3B82F6', text: '#FFFFFF', label: 'Blue (Intermediate)' },
  red: { bg: '#EF4444', text: '#FFFFFF', label: 'Red (Advanced)' },
  black: { bg: '#1A1814', text: '#FFFFFF', label: 'Black (Expert)' },
};

/* ===================================================================
   WINTER ACTIVITIES DATA
   =================================================================== */

interface WinterActivity {
  title: string;
  location: string;
  description: string;
  difficulty: string;
  season: string;
  tips: string[];
  icon: typeof Snowflake;
}

const winterActivities: WinterActivity[] = [
  {
    title: 'Snowshoeing in the High Atlas',
    location: 'Imlil Valley, Ourika Valley, Toubkal foothills',
    description:
      'Snowshoeing is the most accessible winter activity in the Atlas Mountains, requiring no technical skill and offering stunning scenery through snow-covered Berber villages, walnut groves, and high-altitude plateaus. Local guides in Imlil and Ourika can arrange half-day and full-day snowshoe treks from December through March, with routes adapted to fitness levels. The silence of the snow-blanketed mountains, broken only by the crunch of your snowshoes and the occasional call of a Barbary partridge, is profoundly peaceful.',
    difficulty: 'Easy to Moderate',
    season: 'December to March',
    tips: [
      'Hire snowshoes through guides in Imlil (150-200 MAD/day rental)',
      'Half-day guided snowshoe trek costs 300-500 MAD per person',
      'Gaiters are essential to keep snow out of your boots',
      'Start early in the morning when the snow is firmest',
      'Bring trekking poles for balance on steeper terrain',
    ],
    icon: Footprints,
  },
  {
    title: 'Winter Trekking to Toubkal Summit',
    location: 'Toubkal National Park, High Atlas',
    description:
      'Summiting Jebel Toubkal (4,167m) in winter is a serious mountaineering endeavor that transforms North Africa\'s highest peak from a demanding hike into a genuine alpine challenge. The route from Imlil requires crampons, ice axes, and winter mountaineering experience. Snow can be waist-deep on the upper slopes, winds can be severe, and temperatures regularly drop below -20C at the summit. Despite the difficulty, winter Toubkal offers breathtaking views of the snow-covered Atlas range, total solitude compared to the busy summer season, and a genuine sense of achievement.',
    difficulty: 'Advanced (mountaineering experience required)',
    season: 'December to March',
    tips: [
      'A licensed mountain guide is mandatory for winter ascents',
      'Crampons and ice axes are essential above 3,500m',
      'Allow 3 days minimum (Imlil to refuge, summit attempt, descent)',
      'The Toubkal Refuge (3,207m) is open year-round but book ahead in winter',
      'Carry a 4-season sleeping bag rated to -15C minimum',
      'Check weather forecasts obsessively and be prepared to turn back',
    ],
    icon: MountainSnow,
  },
  {
    title: 'Ice Climbing',
    location: 'Todra Gorge, High Atlas cirques',
    description:
      'When temperatures plunge in the High Atlas between January and February, seasonal waterfalls and seeps freeze into ice pillars and curtains that attract climbers from across Europe. Todra Gorge, famous for its rock climbing in warmer months, occasionally forms climbable ice when conditions align. The cirques and north-facing gullies around Toubkal and M\'goun also develop ice routes. This is a niche activity dependent on specific cold spells, but when it happens, the ice climbing in Morocco is surprisingly good and virtually uncrowded. No fixed infrastructure exists, so climbers need to be fully self-sufficient with their own gear.',
    difficulty: 'Expert (technical climbing experience required)',
    season: 'January to February (weather dependent)',
    tips: [
      'Bring all your own ice climbing gear as none is available locally',
      'Conditions are highly variable and cannot be guaranteed',
      'Connect with Moroccan climbing communities online for current conditions',
      'A local rock climbing guide from Todra can help access ice formations',
      'The ice season is extremely short, often only 2-4 weeks',
      'Always climb with a partner and carry emergency bivouac gear',
    ],
    icon: Mountain,
  },
  {
    title: 'Cross-Country Skiing at Michlifen',
    location: 'Michlifen, near Ifrane, Middle Atlas',
    description:
      'The gentle, rolling terrain around Michlifen and the cedar forests of the Middle Atlas provide surprisingly good cross-country skiing when snow conditions allow. The area around Ifrane, known as the "Switzerland of Morocco," receives consistent snowfall from December through February, and the relatively flat plateaus and forest trails are naturally suited to Nordic skiing. While there are no groomed trails or formal cross-country infrastructure, the terrain is open enough to create your own routes through the cedar groves where you may spot Barbary macaques sheltering from the snow.',
    difficulty: 'Easy to Moderate',
    season: 'December to February',
    tips: [
      'Bring your own cross-country ski equipment as rental is unavailable',
      'The plateau areas around Michlifen offer the best open terrain',
      'Cedar forest trails provide sheltered skiing on windy days',
      'Ask locally about snow depth before heading out as conditions vary greatly',
      'Combine with a visit to Ifrane and its charming European-style architecture',
    ],
    icon: TreePine,
  },
];

/* ===================================================================
   SKI + DESERT ITINERARY DATA
   =================================================================== */

interface ItineraryDay {
  day: string;
  title: string;
  location: string;
  activities: string[];
  overnight: string;
  icon: typeof Snowflake;
}

const skiDesertItinerary: ItineraryDay[] = [
  {
    day: 'Day 1',
    title: 'Arrive in Marrakech',
    location: 'Marrakech',
    activities: [
      'Arrive at Marrakech Menara Airport',
      'Transfer to riad in the medina',
      'Explore Jemaa el-Fnaa square in the evening',
      'Traditional Moroccan dinner on a rooftop terrace',
    ],
    overnight: 'Riad in Marrakech Medina',
    icon: MapPin,
  },
  {
    day: 'Day 2',
    title: 'Skiing at Oukaimeden',
    location: 'Oukaimeden (75km from Marrakech)',
    activities: [
      'Early morning drive to Oukaimeden (1.5 hours)',
      'Full day skiing or snowboarding on the Atlas slopes',
      'Lunch at one of the slope-side cafes',
      'Visit the prehistoric rock engravings near the resort',
      'Return to Marrakech by sunset',
    ],
    overnight: 'Riad in Marrakech',
    icon: Snowflake,
  },
  {
    day: 'Day 3',
    title: 'Cross the Atlas to the Desert',
    location: 'Marrakech to Dades Valley via Tizi n\'Tichka',
    activities: [
      'Drive over the Tizi n\'Tichka pass (2,260m) with snow-capped views',
      'Stop at Ait Benhaddou kasbah (UNESCO World Heritage Site)',
      'Lunch in Ouarzazate, the "Gateway to the Sahara"',
      'Continue through the Valley of Roses to the Dades Gorge',
    ],
    overnight: 'Guesthouse in Dades Valley',
    icon: Car,
  },
  {
    day: 'Day 4',
    title: 'Into the Sahara',
    location: 'Dades Valley to Merzouga (Erg Chebbi)',
    activities: [
      'Morning drive through the Todra Gorge',
      'Continue through the Ziz Valley palm oasis',
      'Arrive at Merzouga by early afternoon',
      'Camel trek into the Erg Chebbi dunes at sunset',
      'Traditional Gnaoua music around the campfire',
      'Sleep under the stars in a desert camp',
    ],
    overnight: 'Luxury Desert Camp, Erg Chebbi',
    icon: Sun,
  },
  {
    day: 'Day 5',
    title: 'Sahara Sunrise & Return',
    location: 'Merzouga to Marrakech',
    activities: [
      'Wake before dawn for sunrise over the dunes',
      'Sandboarding on the morning dunes',
      'Breakfast at the desert camp',
      'Begin the return drive to Marrakech (full day)',
      'Optional stop in Ouarzazate for the Cinema Museum',
    ],
    overnight: 'Riad in Marrakech (or depart)',
    icon: Camera,
  },
];

/* ===================================================================
   SEASONAL SNOW DATA
   =================================================================== */

interface MonthSnowData {
  month: string;
  snowChance: string;
  avgDepth: string;
  rating: number;
  notes: string;
}

const snowCalendar: MonthSnowData[] = [
  {
    month: 'November',
    snowChance: '20-30%',
    avgDepth: '0-15 cm',
    rating: 1,
    notes: 'Early season. Snow occasionally dusts the peaks above 2,800m but rarely enough for skiing. Lifts are not yet operational. Good for pre-season reconnaissance.',
  },
  {
    month: 'December',
    snowChance: '50-65%',
    avgDepth: '10-40 cm',
    rating: 3,
    notes: 'Season typically opens mid to late December depending on snowfall. Coverage can be patchy and limited to upper slopes. Best after a good storm cycle. Lifts operate on weekends and holidays.',
  },
  {
    month: 'January',
    snowChance: '70-80%',
    avgDepth: '20-60 cm',
    rating: 4,
    notes: 'The most reliable month for snow. Cold temperatures preserve the snowpack. The upper slopes usually have decent coverage. Weekdays are quiet and lifts may only run on weekends unless conditions are exceptional.',
  },
  {
    month: 'February',
    snowChance: '65-75%',
    avgDepth: '25-70 cm',
    rating: 5,
    notes: 'Peak season and typically the best conditions. The accumulated snowpack from December and January combines with fresh February storms. This is the month to plan your trip around. School holidays bring more crowds.',
  },
  {
    month: 'March',
    snowChance: '40-55%',
    avgDepth: '10-50 cm',
    rating: 3,
    notes: 'Late season with increasingly warm temperatures. Snow melts quickly at lower elevations but upper runs can still hold snow. Spring corn snow conditions in the afternoon can be enjoyable. Last chance for the season.',
  },
  {
    month: 'April',
    snowChance: '10-20%',
    avgDepth: '0-20 cm',
    rating: 1,
    notes: 'Season is effectively over. Occasional late-season snowfalls dust the highest peaks but the ski area is closed. Winter trekking transitions to spring hiking. Snow remains on Toubkal summit.',
  },
];

/* ===================================================================
   BUDGET DATA
   =================================================================== */

interface BudgetItem {
  item: string;
  cost: string;
  note: string;
}

const budgetBreakdown: BudgetItem[] = [
  { item: 'Oukaimeden lift pass (full day)', cost: '100 MAD', note: 'Approximately 10 USD / 9 EUR' },
  { item: 'Oukaimeden lift pass (half day)', cost: '60 MAD', note: 'Afternoon only, from 12:30pm' },
  { item: 'Ski equipment rental (full set)', cost: '200-300 MAD/day', note: 'Skis, boots, and poles' },
  { item: 'Snowboard rental', cost: '250-350 MAD/day', note: 'Board and boots' },
  { item: 'Ski clothing rental', cost: '100-150 MAD/day', note: 'Jacket and pants (limited selection)' },
  { item: 'Ski instructor (private)', cost: '300-500 MAD/hour', note: 'Negotiate for multi-hour packages' },
  { item: 'Ski instructor (group)', cost: '150-200 MAD/person', note: 'Per session, usually 2 hours' },
  { item: 'Grand taxi Marrakech to Oukaimeden', cost: '400-600 MAD', note: 'Round trip for the whole taxi (up to 6 people)' },
  { item: 'Private transfer Marrakech to Oukaimeden', cost: '800-1,200 MAD', note: 'Round trip with driver waiting' },
  { item: 'Lunch at slope-side cafe', cost: '60-120 MAD', note: 'Tagine, harira soup, or sandwiches' },
  { item: 'Hot drinks (mint tea / coffee)', cost: '10-20 MAD', note: 'At the resort cafes' },
  { item: 'Accommodation near Oukaimeden', cost: '400-1,200 MAD/night', note: 'Chalet or guesthouse (limited options)' },
  { item: 'Michlifen lift pass', cost: '80 MAD', note: 'Full day at Michlifen resort' },
  { item: 'Snowshoe rental (via guide)', cost: '150-200 MAD/day', note: 'Usually included in guided trek price' },
  { item: 'Guided snowshoe trek', cost: '300-600 MAD/person', note: 'Half day, includes equipment' },
  { item: 'Winter Toubkal guided ascent', cost: '3,000-5,000 MAD/person', note: '3-day package with guide, refuge, meals' },
];

/* ===================================================================
   PACKING LIST DATA
   =================================================================== */

interface PackingCategory {
  category: string;
  icon: typeof Snowflake;
  items: { name: string; note: string }[];
}

const packingList: PackingCategory[] = [
  {
    category: 'Ski & Snow Essentials',
    icon: Snowflake,
    items: [
      { name: 'Ski goggles or sunglasses (Category 4)', note: 'The UV at 2,600m+ is intense. Snow blindness is a real risk. Bring goggles for skiing and high-category sunglasses for off-slope.' },
      { name: 'Sunscreen SPF 50+', note: 'Apply generously and reapply every 2 hours. The combination of altitude, snow reflection, and African sun is brutal on exposed skin.' },
      { name: 'Lip balm with SPF', note: 'Cracked and sunburned lips are the most common complaint. Bring several and keep one in every pocket.' },
      { name: 'Helmet', note: 'Not widely available for rental at Oukaimeden. Bring your own if you value head protection, especially for the red and black runs.' },
    ],
  },
  {
    category: 'Clothing Layers',
    icon: Layers,
    items: [
      { name: 'Base layer (merino wool or synthetic)', note: 'Temperature swings between sun and shade can be 15-20C. Merino wool regulates temperature and resists odor across long days.' },
      { name: 'Mid layer (fleece or light down)', note: 'A packable down jacket works perfectly as a mid-layer while skiing and as an outer layer for apres-ski evenings.' },
      { name: 'Waterproof outer layer (jacket and pants)', note: 'Snow conditions can be wet and heavy. A waterproof shell is essential. If you do not own ski gear, renting locally is possible but quality varies.' },
      { name: 'Warm gloves or mittens', note: 'Temperatures at the summit lift (3,258m) can drop well below freezing even on sunny days. Waterproof insulated gloves are non-negotiable.' },
      { name: 'Warm hat and neck gaiter', note: 'Heat loss from an uncovered head is significant at altitude. A balaclava or buff is useful for windy summit runs.' },
      { name: 'Warm socks (2-3 pairs)', note: 'Merino wool ski socks are ideal. Avoid cotton. Bring extras as rental boots can cause blisters with the wrong sock.' },
    ],
  },
  {
    category: 'Vehicle & Road Safety',
    icon: Car,
    items: [
      { name: 'Snow chains or winter tires', note: 'The road from Marrakech to Oukaimeden climbs from 450m to 2,600m and can be covered in snow and ice. Chains are sometimes mandatory and checked by police.' },
      { name: 'Full fuel tank', note: 'Fill up in Marrakech before heading to the mountains. There are no fuel stations on the Oukaimeden road.' },
      { name: 'Emergency blanket and warm clothing in car', note: 'If you get stuck or the road is closed, you may need to wait. Carry extra layers, water, and snacks.' },
      { name: 'Phone charger and offline maps', note: 'Cell coverage can be spotty on mountain roads. Download offline maps of the route before departure. Battery drains faster in cold temperatures.' },
    ],
  },
  {
    category: 'General',
    icon: Backpack,
    items: [
      { name: 'Cash (Moroccan Dirhams)', note: 'Oukaimeden has no ATMs. Bring enough cash for lift passes, rentals, food, and tips. Card payment is not accepted at the resort.' },
      { name: 'Thermos with hot drink', note: 'Bring your own hot tea or coffee from Marrakech. Cafe options at the resort are limited and you will appreciate a warm drink on the slopes.' },
      { name: 'Small backpack', note: 'For carrying extra layers, snacks, water, sunscreen, and camera while on the mountain.' },
      { name: 'Camera with extra battery', note: 'The contrast of snow-covered Atlas peaks against deep blue African sky is extraordinarily photogenic. Cold drains batteries fast, so keep spares warm in your pocket.' },
    ],
  },
];

/* ===================================================================
   COMPONENT: PAGE
   =================================================================== */

export default function SkiingPage() {
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
            src="/images/hero-ski-oukaimeden.webp"
            alt="Skiers on the slopes of Oukaimeden with snow-covered Atlas Mountains in the background"
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
            <Link href="/activities" className="hover:text-white transition-colors">
              Activities
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Skiing & Winter Sports</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium">
                <Snowflake className="w-4 h-4 text-[var(--color-accent)]" />
                Winter Sports
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-white/90 font-medium">
                <Sparkles className="w-4 h-4 text-[var(--color-accent)]" />
                Updated 2026
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-[1.1]">
              Skiing & Winter Sports
              <span className="block text-[var(--color-accent)]">in Morocco</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl font-[family-name:var(--font-body)]">
              Yes, you can ski in Africa. Just 90 minutes from Marrakech, the Atlas Mountains
              transform into a winter wonderland with North Africa&apos;s most popular ski resort,
              the highest ski lift on the continent, and a snow season that runs from December
              to March.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#oukaimeden" className="btn-primary btn-lg">
                Oukaimeden Resort
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#winter-activities" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Winter Activities
                <Snowflake className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { value: '3,258m', label: 'Highest Ski Lift in Africa', icon: TrendingUp },
              { value: '8', label: 'Ski Slopes', icon: Mountain },
              { value: '100 MAD', label: 'Day Lift Pass', icon: Ticket },
              { value: 'Dec-Mar', label: 'Ski Season', icon: Snowflake },
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
              <Snowflake className="w-4 h-4" />
              Yes, You Can Ski in Morocco
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Africa&apos;s Most Popular Ski Destination
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-4">
              When most travelers picture Morocco, they imagine sun-baked medinas, endless desert
              dunes, and swaying palm trees. What they do not expect is snow-capped peaks, ski lifts,
              and people carving turns on groomed slopes just a short drive from Marrakech. Yet Morocco
              is home to Africa&apos;s most visited ski resort and a winter sports culture that dates
              back to the French colonial era.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              The High Atlas Mountains rise to over 4,000 meters, catching moisture from Atlantic
              weather systems and receiving reliable snowfall from December through March. At
              Oukaimeden, 75 kilometers from Marrakech, skiers ride the highest ski lift on the
              African continent to 3,258 meters, then descend slopes with views stretching from
              the Sahara to the Atlantic on clear days. It is not the Alps, but that is precisely
              the point. Skiing in Morocco is an utterly unique experience that combines genuine
              snow sports with North African culture, cuisine, and hospitality.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Mountain,
                  title: 'Highest Lift in Africa',
                  text: 'The main chairlift at Oukaimeden reaches 3,258 meters, making it the highest ski lift anywhere on the African continent.',
                },
                {
                  icon: MapPin,
                  title: '90 Minutes from Marrakech',
                  text: 'No other ski resort in the world sits so close to a major city famous for its souks, spice markets, and 25C winter afternoons.',
                },
                {
                  icon: Gem,
                  title: 'Unique Combination',
                  text: 'Ski in the morning and ride a camel at sunset. Morocco is the only place on Earth where this itinerary is genuinely possible.',
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

      {/* ─── Oukaimeden Section ─── */}
      <section id="oukaimeden" className="py-16 md:py-24 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Mountain className="w-4 h-4" />
              Main Resort
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Oukaimeden Ski Resort
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Africa&apos;s premier ski destination, perched at 2,600 meters in the heart of
              the High Atlas Mountains.
            </p>
          </div>

          {/* Resort Overview Card */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto lg:min-h-[500px]">
                <img
                  src="/images/hero-ski-oukaimeden.webp"
                  alt="Panoramic view of Oukaimeden ski resort in the Atlas Mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(164, 82, 45, 0.85)' }}
                  >
                    Africa&apos;s #1 Ski Resort
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                  Oukaimeden at a Glance
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Oukaimeden (pronounced &quot;oo-KAI-meh-den&quot;) is a ski resort and mountain village
                  located 75 kilometers south of Marrakech in the High Atlas Mountains. Founded as a ski
                  station during the French Protectorate era in the 1930s, it has been Morocco&apos;s
                  primary winter sports destination for nearly a century. The resort sits in a broad,
                  south-facing bowl at 2,600 meters altitude, with its highest lift reaching 3,258
                  meters, making it the highest ski lift on the African continent. On a clear day from
                  the summit, you can see the Sahara Desert to the south and the Atlantic Ocean to the
                  west simultaneously.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Altitude', value: '2,600 - 3,258m', icon: TrendingUp },
                    { label: 'Distance from Marrakech', value: '75 km (1.5 hr)', icon: Car },
                    { label: 'Number of Slopes', value: '7 slopes + 1 black', icon: Mountain },
                    { label: 'Season', value: 'December - March', icon: Calendar },
                    { label: 'Lift Pass', value: '100 MAD/day', icon: Ticket },
                    { label: 'Equipment Rental', value: '200-300 MAD/day', icon: Snowflake },
                  ].map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <detail.icon className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{detail.label}</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-lg bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-bold text-[var(--text-primary)]">Important:</span>{' '}
                      Oukaimeden is not a modern European-style resort. Facilities are basic, snow
                      grooming is minimal, and lift infrastructure is dated. Come with an adventurous
                      mindset and an appreciation for the extraordinary uniqueness of the experience
                      rather than expectations of alpine luxury.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Get There */}
          <div className="card-moroccan p-6 lg:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                <Car className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                Getting to Oukaimeden from Marrakech
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">By Grand Taxi</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The most common option. Grand taxis depart from near the main bus station in
                  Marrakech. A whole taxi (6 seats) costs 400-600 MAD round trip. Negotiate the
                  price and waiting time before departure. The driver will wait while you ski and
                  bring you back. Journey takes approximately 1.5 hours each way, depending on
                  road conditions and whether chains are required.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">By Private Transfer / Rental Car</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Hotels and riads can arrange private transfers for 800-1,200 MAD round trip. If
                  driving yourself, a 4x4 or vehicle with snow chains is strongly recommended in
                  winter. The road is paved but climbs steeply through switchbacks and can be
                  snow-covered above 2,000 meters. Police may check for chains at a checkpoint
                  before the final ascent.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">The Road Itself</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  The drive from Marrakech is spectacular. You climb from the dusty red plains at
                  450 meters through terraced Berber villages clinging to mountainsides, past
                  walnut groves and rushing streams, to the snow line at around 2,000 meters.
                  The final stretch to Oukaimeden winds through a dramatic rocky landscape that
                  looks nothing like the Morocco most visitors imagine.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-lg bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="font-bold text-[var(--text-primary)]">Snow chains advisory:</span>{' '}
                  Chains can be purchased in Marrakech at automotive supply shops for 200-400 MAD, or
                  rented at the roadside stalls on the approach road for 50-100 MAD. Practice fitting
                  them before you need to in the cold and dark. The road to Oukaimeden can be temporarily
                  closed during heavy snowfall; check conditions by calling your hotel or the local
                  gendarmerie before departure.
                </p>
              </div>
            </div>
          </div>

          {/* Slopes Section */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                <Mountain className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                Slopes & Runs
              </h3>
            </div>

            {/* Difficulty Legend */}
            <div className="flex flex-wrap gap-3 mb-6">
              {Object.entries(difficultyColors).map(([key, val]) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: val.bg }}
                  />
                  <span className="text-sm text-[var(--text-secondary)]">{val.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {oukaimedenSlopes.map((slope) => (
                <div key={slope.name} className="card-moroccan p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          backgroundColor: difficultyColors[slope.difficulty].bg,
                          color: difficultyColors[slope.difficulty].text,
                        }}
                      >
                        {slope.difficulty.charAt(0).toUpperCase()}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-[var(--text-primary)]">{slope.name}</h4>
                        <p className="text-xs text-[var(--text-muted)]">{difficultyColors[slope.difficulty].label}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[var(--color-accent)] bg-[var(--color-accent-50)] px-2.5 py-1 rounded-full">
                      {slope.length}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{slope.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Apres-Ski */}
          <div className="card-moroccan p-6 lg:p-8 mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                <Users className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                Apr&egrave;s-Ski at Oukaimeden
              </h3>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
              Do not come to Oukaimeden expecting the apr&egrave;s-ski scene of Val d&apos;Is&egrave;re
              or Verbier. This is a Moroccan mountain village, and the post-ski experience reflects
              that in the best possible way. What you will find is far more charming and authentic
              than any overpriced European ski bar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Slope-Side Cafes',
                  text: 'Several small cafes at the base of the slopes serve hot mint tea, Moroccan harira soup, tagines, and grilled meats. Sitting on a terrace with a steaming glass of mint tea while watching the last skiers come down as the sun sets behind the Atlas peaks is a quintessentially Moroccan winter experience.',
                },
                {
                  title: 'Local Berber Hospitality',
                  text: 'The village of Oukaimeden has a small permanent population of Berber families who welcome visitors warmly. Do not be surprised if you are invited for tea in someone\'s home. This kind of spontaneous hospitality is what makes Morocco special.',
                },
                {
                  title: 'Chalet Accommodation',
                  text: 'A handful of chalets and guesthouses operate in and around Oukaimeden for those who want to stay overnight. Facilities are basic but comfortable, with wood-burning stoves, warm blankets, and home-cooked Moroccan meals. Staying overnight means you can be first on the slopes.',
                },
                {
                  title: 'Stargazing',
                  text: 'At 2,600 meters with minimal light pollution, Oukaimeden offers remarkable stargazing. The village is home to a small astronomical observatory. On clear winter nights, the Milky Way arcs overhead with a brilliance that lowland visitors rarely experience.',
                },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-light)]">
                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2">{item.title}</h4>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Rock Engravings */}
          <div className="card-moroccan p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-[var(--color-secondary-50)] flex items-center justify-center">
                <Camera className="w-5 h-5 text-[var(--color-secondary)]" />
              </div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                Prehistoric Rock Engravings
              </h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-3">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  One of the most fascinating and often overlooked aspects of Oukaimeden is its
                  collection of prehistoric rock engravings (petroglyphs) scattered across the
                  plateau around the ski resort. Dating back approximately 2,000 to 3,000 years,
                  these carvings depict weapons, animals (including elephants, rhinoceroses, and
                  antelopes that once roamed the area), geometric patterns, and human figures.
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  The engravings provide evidence that the Oukaimeden plateau has been an important
                  gathering place for millennia, likely used as a summer pasture by ancient pastoral
                  communities. Over 150 individual engravings have been catalogued, spread across
                  several rock surfaces within walking distance of the ski lifts.
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  You can visit the engravings on a short walk from the resort (ask locally for
                  directions). A local guide can provide context and help you find the less obvious
                  carvings. The engravings are unprotected and exposed to the elements, so tread
                  carefully and do not touch them. This is a remarkable cultural site that happens
                  to share space with a ski resort.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="space-y-3">
                  {[
                    { label: 'Age', value: '2,000 - 3,000 years old' },
                    { label: 'Number catalogued', value: '150+ individual engravings' },
                    { label: 'Subjects', value: 'Animals, weapons, geometric patterns, human figures' },
                    { label: 'Distance from lifts', value: '10-20 minute walk' },
                    { label: 'Best time to visit', value: 'Late afternoon when shadows accentuate the carvings' },
                    { label: 'Guide recommended', value: 'Yes, to find less visible carvings' },
                  ].map((fact) => (
                    <div key={fact.label} className="flex items-start gap-3 p-3 rounded-lg bg-[var(--surface)] border border-[var(--border-light)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{fact.label}</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{fact.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Michlifen Section ─── */}
      <section id="michlifen" className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <TreePine className="w-4 h-4" />
              Family-Friendly Resort
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Michlifen Ski Resort
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              A gentler alternative in the Middle Atlas, set among ancient cedar forests near
              the charming town of Ifrane.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-6 lg:p-10">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                  The &quot;Switzerland of Morocco&quot;
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Michlifen is a small ski area located near Ifrane, a town in the Middle Atlas
                  that is often called the &quot;Switzerland of Morocco&quot; for its European-style
                  architecture, manicured gardens, and the coldest temperatures recorded anywhere in
                  Africa (-23.2C in 1935). The ski area sits at approximately 2,000 meters in an
                  extinct volcanic crater surrounded by one of the largest and most beautiful cedar
                  forests in North Africa.
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                  Compared to Oukaimeden, Michlifen is gentler, more family-oriented, and set in
                  a completely different landscape. The slopes are shorter and less steep, making it
                  ideal for beginners and families with children. The surrounding cedar forest, home
                  to endangered Barbary macaques, adds a magical dimension to the experience. When
                  the snow blankets the cedars and macaques huddle together on snow-covered branches,
                  the scene is surreal.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Altitude', value: '~2,000m', icon: TrendingUp },
                    { label: 'Nearest City', value: 'Ifrane (17 km)', icon: MapPin },
                    { label: 'Best For', value: 'Families & Beginners', icon: Users },
                    { label: 'Season', value: 'December - February', icon: Calendar },
                    { label: 'Lift Pass', value: '~80 MAD/day', icon: Ticket },
                    { label: 'Special Feature', value: 'Cedar forest skiing', icon: TreePine },
                  ].map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <detail.icon className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{detail.label}</p>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{detail.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-[var(--text-primary)]">Highlights</h4>
                  {[
                    'Gentle slopes perfectly suited for beginners and families with young children',
                    'Surrounded by ancient Cedrus atlantica forest, a UNESCO Biosphere Reserve',
                    'Cross-country skiing opportunities on the rolling plateau terrain',
                    'Barbary macaque encounters in the nearby Ifrane National Park',
                    'The charming town of Ifrane offers restaurants, cafes, and comfortable hotels',
                    'Less crowded than Oukaimeden with a more relaxed, local atmosphere',
                    'Combine with a visit to the Azrou cedar forest and its famous monkey population',
                  ].map((highlight) => (
                    <div key={highlight} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--text-secondary)]">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 lg:h-auto lg:min-h-[600px]">
                <img
                  src="/images/hero-atlas.webp"
                  alt="Snow-covered cedar forest near Michlifen with the Middle Atlas Mountains"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(164, 82, 45, 0.85)' }}
                  >
                    Family Friendly
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Michlifen vs Oukaimeden Comparison */}
          <div className="mt-10">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6 text-center">
              Oukaimeden vs. Michlifen: Which Resort to Choose?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  resort: 'Oukaimeden',
                  pros: [
                    'Higher altitude means more reliable snow',
                    'More varied terrain with 8 slopes across all difficulty levels',
                    'Highest ski lift in Africa adds a unique bragging right',
                    'Closer to Marrakech (the most popular tourist base)',
                    'Better for intermediate and advanced skiers',
                    'Prehistoric rock engravings add cultural interest',
                  ],
                  cons: [
                    'Steeper mountain road requiring chains',
                    'More basic and dated infrastructure',
                    'Can be crowded on weekends and holidays',
                    'Limited apres-ski and accommodation options',
                  ],
                  bestFor: 'Experienced skiers, adventure seekers, those based in Marrakech',
                },
                {
                  resort: 'Michlifen',
                  pros: [
                    'Gentler slopes ideal for beginners and children',
                    'Beautiful cedar forest setting',
                    'The town of Ifrane offers better accommodation and dining',
                    'Less crowded and more relaxed atmosphere',
                    'Cross-country skiing opportunities',
                    'Barbary macaque encounters nearby',
                  ],
                  cons: [
                    'Lower altitude means less reliable snow coverage',
                    'Fewer and shorter runs with limited challenge for experienced skiers',
                    'Further from Marrakech (5+ hours by road)',
                    'Shorter snow season than Oukaimeden',
                  ],
                  bestFor: 'Families, beginners, those based in Fes or Meknes',
                },
              ].map((option) => (
                <div key={option.resort} className="card-moroccan p-6">
                  <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 text-center">
                    {option.resort}
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="flex items-center gap-2 text-sm font-bold text-[var(--color-green)] uppercase tracking-wider mb-3">
                        <CheckCircle className="w-4 h-4" />
                        Advantages
                      </h5>
                      <ul className="space-y-2">
                        {option.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--color-green)]/60 shrink-0 mt-0.5" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="flex items-center gap-2 text-sm font-bold text-[var(--color-error)] uppercase tracking-wider mb-3">
                        <AlertTriangle className="w-4 h-4" />
                        Considerations
                      </h5>
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
                  <div className="mt-4 pt-4 border-t border-[var(--border-light)]">
                    <p className="text-sm text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-secondary)]">Best for:</span>{' '}
                      {option.bestFor}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Other Winter Activities ─── */}
      <section id="winter-activities" className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Compass className="w-4 h-4" />
              Beyond the Slopes
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Winter Activities in the Atlas
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Skiing is just the beginning. The Atlas Mountains offer a full range of
              winter adventures for every skill level and ambition.
            </p>
          </div>

          <div className="space-y-8">
            {winterActivities.map((activity) => (
              <div key={activity.title} className="glass-dark rounded-xl p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                        <activity.icon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                          {activity.title}
                        </h3>
                        <p className="text-sm text-white/50">{activity.location}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed mb-4">
                      {activity.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <span className="text-xs bg-white/10 text-white/70 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Shield className="w-3 h-3" />
                        {activity.difficulty}
                      </span>
                      <span className="text-xs bg-white/10 text-white/70 px-3 py-1.5 rounded-full flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {activity.season}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[var(--color-accent)] uppercase tracking-wider mb-3">
                      Tips & Practical Info
                    </h4>
                    <ul className="space-y-2">
                      {activity.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-white/60">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-accent)]/60 shrink-0 mt-0.5" />
                          {tip}
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

      {/* ─── Ski + Desert Itinerary ─── */}
      <section id="ski-desert" className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <Route className="w-4 h-4" />
                Unique Itinerary
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Ski in the Morning, Camel Ride by Evening
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Morocco is the only country on Earth where you can combine skiing in the
                Atlas Mountains with a camel trek into the Sahara Desert in a single trip.
                Here is a suggested 5-day itinerary that captures both extremes.
              </p>
            </div>

            <div className="space-y-6">
              {skiDesertItinerary.map((day, index) => (
                <div key={day.day} className="card-moroccan p-5 lg:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center shrink-0">
                      <day.icon className="w-6 h-6 text-[var(--color-secondary)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider">
                          {day.day}
                        </span>
                        {index === 1 && (
                          <span className="text-xs font-bold text-white bg-[var(--color-accent)] px-2 py-0.5 rounded-full">
                            Ski Day
                          </span>
                        )}
                        {index === 3 && (
                          <span className="text-xs font-bold text-white bg-[var(--color-accent)] px-2 py-0.5 rounded-full">
                            Desert Day
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {day.title}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)] mb-3 flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" />
                        {day.location}
                      </p>
                      <ul className="space-y-1.5 mb-3">
                        {day.activities.map((activity) => (
                          <li key={activity} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs text-[var(--text-muted)] flex items-center gap-1.5">
                        <Home className="w-3 h-3" />
                        <span className="font-semibold">Overnight:</span> {day.overnight}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Itinerary Note
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    This itinerary works best in January or February when snow conditions at
                    Oukaimeden are most reliable and the Sahara is comfortably cool. The driving
                    distances are significant (Marrakech to Merzouga is approximately 550 km), so
                    consider flying into Marrakech and out of Errachidia or Ouarzazate to minimize
                    backtracking. A 4x4 vehicle is recommended but not essential if road conditions
                    are good. Most hotels and riads in Marrakech can arrange the entire trip with a
                    private driver for 5,000-8,000 MAD for the desert portion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── When to Go / Snow Calendar ─── */}
      <section id="when-to-go" className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-accent)] mb-4">
              <Calendar className="w-4 h-4" />
              When to Go
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Snow Season Calendar
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Morocco&apos;s ski season is short and weather-dependent. Here is a month-by-month
              guide to snow conditions at Oukaimeden and the Atlas Mountains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {snowCalendar.map((month) => (
              <div key={month.month} className="glass-dark rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    {month.month}
                  </h3>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < month.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-white/20'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <CloudSnow className="w-4 h-4 text-white/50" />
                    <div>
                      <p className="text-xs text-white/40">Snow Chance</p>
                      <p className="text-sm font-semibold text-white">{month.snowChance}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-white/50" />
                    <div>
                      <p className="text-xs text-white/40">Avg. Depth</p>
                      <p className="text-sm font-semibold text-white">{month.avgDepth}</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">{month.notes}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 glass-dark rounded-xl p-6 lg:p-8">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-white mb-2">
                  When to Plan Your Trip
                </h3>
                <p className="text-sm text-white/70 leading-relaxed mb-3">
                  The single best month for skiing in Morocco is February. The snowpack has
                  accumulated from earlier storms, temperatures are cold enough to preserve the
                  snow, and fresh snowfall is still likely. If you can only visit once, aim for
                  the second or third week of February.
                </p>
                <p className="text-sm text-white/70 leading-relaxed">
                  However, Moroccan snow is inherently unpredictable. Some years see heavy
                  December snowfall while other years barely receive snow until late January. The
                  key strategy is to be in Marrakech and treat Oukaimeden as a day trip opportunity.
                  Monitor weather forecasts, and when a storm delivers fresh snow, head to the
                  mountains the next morning. This flexibility is easier than committing to specific
                  ski dates weeks in advance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What to Pack ─── */}
      <section id="packing" className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
              <Backpack className="w-4 h-4" />
              Packing List
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Pack for Skiing in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Oukaimeden does not have the rental shops of a European resort. Bring what you can
              and plan carefully for what you will rent on-site.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packingList.map((cat) => (
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

          <div className="mt-8 p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
            <div className="flex items-start gap-4">
              <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Pro Tip: Rent Skis, Bring Everything Else
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Unless you are driving to Morocco with your own equipment, renting skis and boots
                  at Oukaimeden is the most practical option. The rental equipment is basic but
                  functional for a day on these slopes. However, do bring your own ski clothing
                  (jacket, pants, gloves, goggles, helmet) as the rental clothing selection is
                  extremely limited and the quality is poor. Sunscreen and goggles are absolutely
                  essential at 3,000+ meters in Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Budget Breakdown ─── */}
      <section id="budget" className="py-16 md:py-24 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <DollarSign className="w-4 h-4" />
                Budget Guide
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Skiing in Morocco: Budget Breakdown
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Skiing in Morocco is remarkably affordable compared to European and North American
                resorts. Here is what everything costs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {budgetBreakdown.map((row) => (
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

            {/* Budget Scenarios */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  title: 'Budget Day Trip',
                  total: '~600-900 MAD',
                  totalUSD: '~60-90 USD',
                  items: [
                    'Grand taxi share: 70-100 MAD/person',
                    'Lift pass: 100 MAD',
                    'Equipment rental: 200-300 MAD',
                    'Lunch & tea: 80-120 MAD',
                  ],
                  icon: DollarSign,
                },
                {
                  title: 'Comfortable Day Trip',
                  total: '~1,500-2,200 MAD',
                  totalUSD: '~150-220 USD',
                  items: [
                    'Private transfer (split 2): 400-600 MAD/person',
                    'Lift pass: 100 MAD',
                    'Equipment + clothing rental: 350-450 MAD',
                    'Ski instructor (2 hr): 200-300 MAD',
                    'Lunch & drinks: 120-200 MAD',
                  ],
                  icon: Star,
                },
                {
                  title: 'Overnight Experience',
                  total: '~2,500-4,000 MAD',
                  totalUSD: '~250-400 USD',
                  items: [
                    'Private transfer: 800-1,200 MAD',
                    'Lift pass (2 days): 200 MAD',
                    'Equipment rental (2 days): 400-600 MAD',
                    'Chalet accommodation: 400-1,200 MAD',
                    'Meals (2 days): 250-400 MAD',
                  ],
                  icon: Gem,
                },
              ].map((scenario) => (
                <div key={scenario.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center">
                      <scenario.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                    </div>
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {scenario.title}
                    </h4>
                  </div>
                  <ul className="space-y-2 mb-4">
                    {scenario.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t border-[var(--border-light)]">
                    <p className="text-lg font-bold text-[var(--color-accent)]">{scenario.total}</p>
                    <p className="text-xs text-[var(--text-muted)]">{scenario.totalUSD} per person</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Value Comparison
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    A full day of skiing at Oukaimeden (lift pass + rental + lunch) costs roughly
                    400-500 MAD (40-50 USD). For comparison, a single day lift pass alone at major
                    European resorts like Courchevel or Zermatt costs 60-80 EUR (650-870 MAD) before
                    rentals or food. Morocco is not competing on ski infrastructure, but on value,
                    uniqueness, and the sheer novelty of skiing in Africa, it is unbeatable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Practical Road Conditions ─── */}
      <section className="py-16 md:py-24 bg-[var(--background)]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-[var(--color-secondary)] mb-4">
                <Shield className="w-4 h-4" />
                Practical Information
              </span>
              <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Road Conditions & Safety
              </h2>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
                Essential information for getting to the slopes safely.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Snow Chains Are Not Optional',
                  detail: 'The road from Marrakech to Oukaimeden climbs 2,150 meters in 75 kilometers. Above approximately 2,000 meters, the road can be covered in compacted snow and ice from December to March. Police set up a checkpoint on the approach road and can refuse passage to vehicles without chains. Chains can be purchased in Marrakech (200-400 MAD) or rented from roadside stalls near the checkpoint (50-100 MAD). If you have never fitted chains, practice in your hotel car park.',
                  icon: AlertTriangle,
                },
                {
                  title: 'Road Closures',
                  detail: 'During and immediately after heavy snowfall, the road to Oukaimeden may be closed entirely. Closures typically last a few hours to half a day while snowplows clear the route. There is no official road condition website, but calling your hotel, the Oukaimeden gendarmerie, or checking local social media groups provides the most current information. Do not attempt to bypass a road closure.',
                  icon: Shield,
                },
                {
                  title: 'Driving Tips',
                  detail: 'Leave Marrakech early (7-8 AM) to maximize your time on the slopes. The road is well-paved but narrow with hairpin bends and no guardrails in places. Drive slowly, especially on descent when ice is more treacherous. Keep your fuel tank full as there are no fuel stations on the mountain road. A 4x4 or AWD vehicle provides extra confidence but is not strictly necessary with chains fitted.',
                  icon: Car,
                },
                {
                  title: 'Emergency Preparedness',
                  detail: 'Carry warm blankets, extra water, snacks, a fully charged phone, and a portable charger in your vehicle. Cell coverage is intermittent on the mountain road. If you break down or get stuck, stay with your vehicle. Other drivers or gendarmerie patrols will eventually pass. The mountain can be surprisingly cold and exposed if you have to wait.',
                  icon: Info,
                },
                {
                  title: 'Returning After Dark',
                  detail: 'If possible, begin your descent before sunset. The mountain road is unlit and the combination of darkness, ice, and sharp curves demands extreme caution. If you must drive after dark, use low beams, reduce speed significantly, and be alert for pedestrians and livestock on the road through villages at lower elevations.',
                  icon: Clock,
                },
              ].map((item, i) => (
                <div key={i} className="card-moroccan p-5 lg:p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-secondary-50)] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-[var(--color-secondary)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-[var(--color-accent-50)] border border-[var(--color-accent-200)]">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Pro Tip: Hire a Local Driver
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Unless you are an experienced mountain driver, the most stress-free option is
                    to hire a grand taxi or private driver who knows the Oukaimeden road intimately.
                    Local drivers navigate the switchbacks, snow, and chain checkpoints with the ease
                    of daily practice. They will fit the chains in minutes (a process that can take a
                    novice 30 frustrating minutes in the cold) and know exactly when to apply them and
                    when the road is safe without. The cost of a private driver (800-1,200 MAD round trip)
                    is modest compared to the peace of mind.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Pages / Final CTA ─── */}
      <section className="py-16 md:py-24 section-dark moroccan-pattern-dark">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-6">
              Continue Exploring Morocco
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Skiing is just one facet of Morocco&apos;s extraordinary diversity. From the
              snow-capped Atlas to the sun-drenched Sahara, from the surf breaks of the
              Atlantic to the ancient medinas of Fes and Marrakech, there is always more
              to discover.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                {
                  icon: Mountain,
                  title: 'Trekking & Hiking',
                  text: 'When the snow melts, the Atlas Mountains become a world-class trekking destination. Explore the same peaks on foot from April to October.',
                  href: '/trekking',
                },
                {
                  icon: Sun,
                  title: 'Sahara Desert',
                  text: 'Complete your ski-and-desert adventure with a night under the stars in the Erg Chebbi or Erg Chigaga dune fields.',
                  href: '/desert',
                },
                {
                  icon: Compass,
                  title: 'Adventure Activities',
                  text: 'Rock climbing, mountain biking, paragliding, and more. Morocco is an adventure playground in every season.',
                  href: '/adventure',
                },
              ].map((item) => (
                <Link key={item.title} href={item.href} className="glass-dark rounded-xl p-6 text-center block hover:bg-white/10 transition-colors">
                  <item.icon className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.text}</p>
                </Link>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
              {[
                { label: 'Atlas Mountains', href: '/atlas-mountains' },
                { label: 'Camping & Glamping', href: '/camping' },
                { label: 'Best Time to Visit', href: '/best-time' },
                { label: 'Weather Guide', href: '/weather' },
                { label: 'Marrakech Guide', href: '/marrakech' },
                { label: 'Road Trips', href: '/road-trips' },
                { label: 'Transport Guide', href: '/transport' },
                { label: 'Packing Guide', href: '/packing' },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-[var(--color-accent)] transition-colors py-2 px-3 rounded-lg border border-white/10 hover:border-[var(--color-accent)]/30 text-center"
                >
                  {link.label}
                </Link>
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
              <Link href="/adventure" className="btn-ghost btn-lg text-white border-white/30 hover:bg-white/10">
                Adventure Guide
                <Compass className="w-5 h-5" />
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

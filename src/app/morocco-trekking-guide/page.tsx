import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Mountain,
  Compass,
  Tent,
  Sun,
  Footprints,
  Timer,
  Triangle,
  Shield,
  Globe,
  Landmark,
  ThermometerSun,
  CloudSnow,
  Backpack,
  Route,
  Calendar,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Trekking in Morocco 2026 | Atlas Mountains, Toubkal & Best Hiking Routes',
  description:
    'Complete guide to trekking in Morocco. Mount Toubkal summit routes, M\'Goun Traverse, Jebel Saghro desert treks, Rif Mountains hiking, day hikes near Marrakech, gear lists, guide costs, mountain refuges, and best seasons for Atlas Mountains trekking.',
  keywords: [
    'trekking in morocco',
    'morocco hiking',
    'toubkal trek',
    'atlas mountains trekking',
    'morocco trekking tours',
    'best hikes in morocco',
    'mount toubkal hiking',
    'mgoun traverse morocco',
    'jebel saghro trek',
    'rif mountains hiking',
    'morocco mountain guide',
    'imlil trekking',
    'ourika valley hike',
    'morocco trekking season',
    'atlas mountains hiking guide',
    'morocco adventure trekking',
    'high atlas trekking',
    'chefchaouen hiking trails',
    'ait bougmez trekking',
    'morocco trek gear list',
  ],
  openGraph: {
    title: 'Trekking in Morocco 2026 | Atlas Mountains, Toubkal & Best Hiking Routes',
    description:
      'Summit North Africa\'s highest peak, traverse the M\'Goun massif, trek desert mountains in Jebel Saghro, and discover hidden valleys. Your complete Morocco trekking guide.',
    url: `${BASE_URL}/morocco-trekking-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-trekking.webp`,
        width: 1200,
        height: 630,
        alt: 'Trekkers on a mountain trail in the High Atlas Mountains of Morocco with snow-capped peaks in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trekking in Morocco 2026 | Atlas Mountains, Toubkal & Best Hiking Routes',
    description:
      'Complete guide to Morocco\'s best treks: Toubkal summit, M\'Goun Traverse, Jebel Saghro, Rif Mountains, and day hikes from Marrakech. Routes, costs, gear, and seasons.',
    images: [`${BASE_URL}/images/hero-trekking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-trekking-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-trekking-guide`,
  name: 'Trekking in Morocco 2026 | Atlas Mountains, Toubkal & Best Hiking Routes',
  description:
    'Complete guide to trekking in Morocco. Mount Toubkal summit routes, M\'Goun Traverse, Jebel Saghro desert treks, Rif Mountains hiking, day hikes near Marrakech, gear lists, guide costs, mountain refuges, and best seasons.',
  url: `${BASE_URL}/morocco-trekking-guide`,
  image: `${BASE_URL}/images/hero-trekking.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-trekking-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Trekking Guide', item: `${BASE_URL}/morocco-trekking-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a guide to trek in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Toubkal and all treks above 3,000m, a licensed mountain guide is legally required since 2015. Day hikes in the Ourika Valley or around Imlil at lower elevations can be done independently on marked trails. However, a guide is strongly recommended even for moderate treks due to poorly marked paths, language barriers, and safety. Official mountain guides cost from 500 MAD per day, while local village guides charge from 300 MAD per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for trekking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best trekking season depends on the region. For the High Atlas and Toubkal, mid-June through September offers snow-free summits. Spring (April-May) brings wildflowers but lingering snow above 3,500m. The Jebel Saghro and Anti-Atlas are best in autumn (October-November) and winter (December-February) when temperatures are comfortable. The Rif Mountains are ideal in spring and early summer. Avoid the High Atlas in winter unless equipped for snow and ice climbing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How difficult is the Toubkal trek?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The standard two-day Toubkal route from Imlil is graded moderate to strenuous. No technical climbing is needed in summer, but the final ascent involves steep scree slopes at altitude. The main challenge is altitude: at 4,167m, some trekkers experience mild altitude sickness. A reasonable level of fitness is needed — you should be comfortable walking 6-8 hours with elevation gain of 1,000m per day. Winter ascents require crampons, ice axes, and mountaineering experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Toubkal trek cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard two-day Toubkal trek costs from 1,500 MAD to 3,000 MAD per person in a group, including a licensed guide, mule transport for bags, refuge accommodation, and meals. Private guided treks start from 4,000 MAD for two days. Budget trekkers can reduce costs by arranging a guide independently in Imlil (from 500 MAD/day) and paying for refuge beds (from 150 MAD/night) and meals separately. Seasonal pricing may vary.',
      },
    },
    {
      '@type': 'Question',
      name: 'What gear do I need for trekking in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential gear includes sturdy hiking boots (broken in before your trip), a daypack (30-40L), sun protection (hat, sunscreen SPF 50, sunglasses), layers for temperature changes (it can drop below freezing above 3,000m even in summer evenings), a headlamp, water purification, and a basic first-aid kit. For multi-day treks, bring a sleeping bag rated to -5C for refuges. Trekking poles are highly recommended for steep descents. Rain gear is essential in spring.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can beginners trek in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Morocco has excellent options for all fitness levels. Day hikes in the Ourika Valley (2-3 hours, minimal elevation gain) and walks around Imlil to Aremd village are perfect for beginners. The Ait Bougmez (Happy Valley) offers gentle valley walks with stunning scenery. Even the Toubkal trek is achievable for fit beginners who prepare with regular cardio exercise for 6-8 weeks beforehand. Start with shorter hikes and build up.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are mountain refuges in Morocco comfortable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mountain refuges (gites) vary widely. The CAF Toubkal Refuge at 3,207m has dormitory bunks, basic toilets, cold showers, a dining area, and a kitchen. It sleeps around 80 people and gets crowded in summer. Les Mouflons refuge is a newer alternative nearby with better facilities. Village gites in Ait Bougmez and elsewhere offer mattresses on floors, shared bathrooms, and home-cooked meals. Bring your own sleeping bag for warmth and hygiene. Expect basic but functional accommodation.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MAJOR TREKS
   ═══════════════════════════════════════════════════════════════ */

const majorTreks = [
  {
    name: 'Mount Toubkal Summit',
    elevation: '4,167m',
    duration: '2-3 days',
    difficulty: 'Moderate-Strenuous',
    icon: Mountain,
    image: '/images/hero-toubkal.webp',
    description:
      'North Africa\'s highest peak sits just 65km south of Marrakech. The standard route starts from Imlil (1,740m), climbs through walnut groves to the Toubkal Refuge at 3,207m on day one (5-6 hours), then tackles the summit via the South Cwm on day two. The final 960m of ascent crosses steep, loose scree that demands patience and steady footing. Clear days reward you with views stretching from the Sahara to the Atlantic. A three-day itinerary via the Azzaden Valley adds variety and better acclimatization.',
    highlights: ['Highest peak in North Africa', 'No technical climbing in summer', 'Stunning Sahara-to-sea panoramas', 'Accessible from Marrakech in 90 minutes'],
    season: 'June to September (snow-free); April-May and October with crampons',
    cost: 'From 1,500 MAD per person (group), from 4,000 MAD (private)',
  },
  {
    name: 'M\'Goun Traverse',
    elevation: '4,071m',
    duration: '5-7 days',
    difficulty: 'Strenuous',
    icon: Route,
    image: '/images/hero-hiking-atlas.webp',
    description:
      'Morocco\'s second-highest peak and a far wilder experience than Toubkal. The classic traverse runs from Ait Bougmez Valley over the M\'Goun massif and down through the spectacular M\'Goun Gorge to Kelaat M\'Gouna in the Valley of Roses. You cross passes above 3,800m, camp beside rivers, and walk through a gorge so narrow you wade through ankle-deep water. Very few other trekkers. This is the trek for those who want Morocco\'s backcountry all to themselves.',
    highlights: ['Morocco\'s second-highest summit', 'Dramatic gorge walking', 'Almost no other trekkers', 'Valley of Roses endpoint'],
    season: 'June to September (high passes); gorge section possible April-October',
    cost: 'From 4,500 MAD per person for 6 days (group of 4+)',
  },
  {
    name: 'Jebel Saghro Circuit',
    elevation: '2,712m (Amalou n\'Mansour)',
    duration: '4-6 days',
    difficulty: 'Moderate',
    icon: Sun,
    image: '/images/hero-atlas.webp',
    description:
      'A desert mountain range between the High Atlas and the Sahara, Jebel Saghro delivers volcanic pinnacles, basalt towers, and vast plateaus dotted with nomad camps. The terrain looks like something from another planet. Daytime temperatures stay pleasant in winter when the High Atlas is buried in snow, making this the perfect cold-season alternative. Nights are bitingly cold, dropping below freezing, but skies are crystalline. Camp among the rock formations and share tea with semi-nomadic Ait Atta families still herding goats across these ancient landscapes.',
    highlights: ['Perfect winter trek', 'Volcanic rock formations', 'Nomadic Ait Atta encounters', 'Clear skies and zero crowds'],
    season: 'October to April (too hot May-September)',
    cost: 'From 3,500 MAD per person for 5 days (group)',
  },
  {
    name: 'Ait Bougmez Valley Walks',
    elevation: '1,800-2,200m',
    duration: '2-5 days',
    difficulty: 'Easy-Moderate',
    icon: Heart,
    image: '/images/art-atlas-mountain-village.webp',
    description:
      'Called the "Happy Valley" by locals, Ait Bougmez stretches 30km through the Central High Atlas. The walking here is gentler: terraced wheat fields, walnut orchards, ancient communal granaries perched on hilltops, and Berber villages where daily life has barely changed in centuries. A network of mule paths connects villages, and you can string together day walks or do a point-to-point traverse. The valley also serves as a base for tackling M\'Goun. Less tourist infrastructure means more authentic interactions.',
    highlights: ['Gentle terrain for all levels', 'Centuries-old Berber villages', 'Ancient granary visits', 'Base camp for M\'Goun'],
    season: 'April to November (road can close in winter snow)',
    cost: 'From 300 MAD per day for guide; gite stays from 200 MAD with meals',
  },
  {
    name: 'Rif Mountains & Chefchaouen',
    elevation: '2,448m (Jebel Tidiquin)',
    duration: '1-4 days',
    difficulty: 'Easy-Moderate',
    icon: Compass,
    image: '/images/hero-atlas-village.webp',
    description:
      'The Rif range running along Morocco\'s northern Mediterranean coast stays green year-round, draped in cedar and cork oak forests. Chefchaouen, the famous blue city, sits at 600m and makes an ideal base for day hikes into the surrounding hills. The Talassemtane National Park shelters endangered Barbary macaques and the rare Moroccan fir. Trails climb to the "Bridge of God" natural rock arch and through the Akchour waterfalls. Multi-day treks connect mountain villages where Tarifit Berber is the first language.',
    highlights: ['Green forests and waterfalls', 'Akchour falls day hike', 'Bridge of God rock arch', 'Barbary macaque sightings'],
    season: 'March to June, September to November (wet winters, hot summers)',
    cost: 'From 250 MAD per day for a local guide',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY HIKES NEAR MARRAKECH
   ═══════════════════════════════════════════════════════════════ */

const dayHikes = [
  {
    name: 'Imlil to Aremd Village',
    distance: '5km round trip',
    time: '2-3 hours',
    difficulty: 'Easy',
    description:
      'A gentle walk from Imlil up to the traditional Berber village of Aremd at 1,940m. The path follows irrigation channels through walnut terraces with Toubkal looming above. Stop for mint tea on a rooftop terrace. Perfect first-day acclimatization walk or standalone half-day outing from Marrakech.',
  },
  {
    name: 'Ourika Valley Waterfalls',
    distance: '7km round trip',
    time: '3-4 hours',
    difficulty: 'Easy-Moderate',
    description:
      'Just 45 minutes from Marrakech, the Ourika Valley narrows into a gorge with seven cascading waterfalls. The trail follows the riverbed upward, crossing the water several times on stepping stones. The first two falls are straightforward; reaching the seventh requires scrambling over boulders. Local guides at the trailhead charge from 100 MAD. Avoid after heavy rain — flash floods are a real danger.',
  },
  {
    name: 'Azzaden Valley Loop',
    distance: '18km',
    time: '7-8 hours',
    difficulty: 'Moderate-Strenuous',
    description:
      'A full-day circuit from Imlil dropping into the spectacular Azzaden Valley via the Tizi n\'Mzik pass (2,489m). You descend past isolated hamlets, cross the Azzaden river, and return via a different trail. Longer and more demanding than the Aremd walk, but far quieter. Pack lunch and plenty of water. Can be split into two days with an overnight in the Azzaden Trekking Lodge.',
  },
  {
    name: 'Oukaaimeden Plateau',
    distance: '10km',
    time: '4-5 hours',
    difficulty: 'Moderate',
    description:
      'Morocco\'s ski resort at 2,600m transforms into excellent hiking terrain from May to October. Rock engravings dating back 3,000 years dot the plateau, and the 360-degree views over the High Atlas are hard to beat. Drive 75 minutes from Marrakech, park at the resort, and walk the ridge trails. Altitude makes this more tiring than it looks on paper.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GEAR LIST
   ═══════════════════════════════════════════════════════════════ */

const gearCategories = [
  {
    category: 'Footwear & Clothing',
    icon: Footprints,
    items: [
      'Sturdy hiking boots (ankle support, broken in)',
      'Lightweight trail shoes for camp',
      'Moisture-wicking base layers (2-3)',
      'Fleece or insulating mid-layer',
      'Waterproof shell jacket',
      'Trekking trousers (zip-off recommended)',
      'Warm hat and sun hat',
      'Buff or neck gaiter for dust',
      'Gloves (essential above 3,000m)',
    ],
  },
  {
    category: 'Equipment',
    icon: Backpack,
    items: [
      'Daypack 30-40L (or 60L for multi-day if no mules)',
      'Sleeping bag rated to -5C (refuges provide mattresses)',
      'Trekking poles (highly recommended)',
      'Headlamp with spare batteries',
      'Water bottles or hydration bladder (3L capacity)',
      'Water purification tablets or filter',
      'Sunglasses (UV400, Category 3-4)',
      'Sunscreen SPF 50+',
    ],
  },
  {
    category: 'Safety & Navigation',
    icon: Shield,
    items: [
      'Basic first-aid kit (blister plasters, painkillers, Imodium)',
      'Altitude sickness medication (Diamox, consult your doctor)',
      'Map of the area (paper backup)',
      'Phone with offline maps (maps.me or AllTrails)',
      'Emergency whistle',
      'Emergency foil blanket',
      'Travel insurance with mountain rescue coverage',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SEASONS
   ═══════════════════════════════════════════════════════════════ */

const trekkingSeasons = [
  {
    region: 'High Atlas (Toubkal, M\'Goun)',
    icon: Mountain,
    best: 'June - September',
    shoulder: 'April - May, October',
    avoid: 'November - March (snow, ice)',
    notes: 'Snow lingers above 3,500m until late May. Summer days reach 30C at altitude but nights drop to 0C. Crampons and ice axes needed October-May for summits.',
  },
  {
    region: 'Jebel Saghro & Anti-Atlas',
    icon: Sun,
    best: 'October - April',
    shoulder: 'September, May',
    avoid: 'June - August (extreme heat)',
    notes: 'Winter daytime temps 15-20C, perfect for walking. Night temps plummet below 0C. Zero shade — carry extra water. This is your winter trekking destination.',
  },
  {
    region: 'Rif Mountains',
    icon: CloudSnow,
    best: 'March - June, September - November',
    shoulder: 'July (hot), February (wet)',
    avoid: 'December - January (heavy rain/snow)',
    notes: 'Wettest mountains in Morocco. Green and lush but trails get muddy. Spring wildflowers are spectacular. Summer can be humid.',
  },
  {
    region: 'Ait Bougmez Valley',
    icon: Heart,
    best: 'April - November',
    shoulder: 'March (unpredictable)',
    avoid: 'December - February (road closures)',
    notes: 'The valley road from Azilal can close after heavy snow. Autumn harvest season (September-October) is culturally rich. Spring brings almond blossoms.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MOUNTAIN ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodations = [
  {
    name: 'CAF Toubkal Refuge',
    location: 'Toubkal base, 3,207m',
    type: 'Mountain refuge',
    description: 'The main staging post for Toubkal summit attempts. Dormitory bunks, basic kitchen, dining area, cold water only. Gets extremely crowded July-August with 80+ people. Book ahead in peak season through the CAF (Club Alpin Francais) or arrange through your guide.',
    price: 'From 150 MAD per night (members), from 200 MAD (non-members)',
  },
  {
    name: 'Les Mouflons Refuge',
    location: 'Near Toubkal Refuge, 3,207m',
    type: 'Mountain refuge',
    description: 'A newer, privately run alternative to the CAF refuge. Cleaner facilities, smaller dormitories, and better food. Slightly more expensive but worth it for the improved comfort. Fills up fast — reservations essential in summer.',
    price: 'From 250 MAD per night with dinner and breakfast',
  },
  {
    name: 'Village Gites',
    location: 'Throughout the Atlas',
    type: 'Guesthouse',
    description: 'Family-run guesthouses found in every trekking village. Mattresses on the floor in shared rooms, communal bathrooms, and home-cooked tagine for dinner. The best part of staying in gites is the cultural exchange — you eat with the family and hear stories over mint tea. Quality varies enormously.',
    price: 'From 150 MAD with dinner and breakfast, from 200 MAD half-board',
  },
  {
    name: 'Wild Camping',
    location: 'Above the tree line',
    type: 'Tent',
    description: 'Legal and free above the cultivated zone. Multi-day treks on M\'Goun and Saghro rely on camping. Guides arrange mules to carry tents and cooking equipment. You provide your sleeping bag; the team handles everything else. Falling asleep under the Atlas stars with zero light pollution is one of Morocco\'s great experiences.',
    price: 'Equipment included in guided trek packages',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoTrekkingGuidePage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[70vh] flex items-center justify-center">
        <img
          src="/images/hero-trekking.webp"
          alt="Trekkers ascending a rocky trail in the High Atlas Mountains of Morocco with dramatic peaks and blue sky"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 container-morocco text-center text-white py-24">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/80 mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Trekking Guide</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold mb-6">
            Trekking in Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            From the 4,167m summit of Toubkal to desert canyons in Jebel Saghro, Morocco packs an
            extraordinary range of trekking terrain into a country the size of California.
            This is your complete guide to hiking Morocco&apos;s mountains.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Mountain className="w-4 h-4" /> 4,167m Highest Peak
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Compass className="w-4 h-4" /> 5 Mountain Ranges
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4" /> Year-Round Trekking
            </span>
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Why Trek in Morocco?
          </h2>
          <div className="prose prose-lg max-w-none text-[var(--text-secondary)]">
            <p className="text-lg leading-relaxed mb-4">
              Morocco sits at the crossroads of the Sahara, the Mediterranean, and the Atlantic, and
              its mountains reflect that collision of worlds. The High Atlas runs 750km northeast to
              southwest like a spine, separating the green, fertile north from the arid pre-Sahara.
              Peaks above 4,000m carry snow eight months of the year. Thirty kilometers south, Jebel
              Saghro bakes under desert sun and looks more like Arizona than Africa.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              What makes trekking here different from the Alps or the Himalayas is the human
              landscape. Berber villages cling to every habitable slope. Stone-walled terraces climb
              impossible gradients. Mule paths centuries old connect communities that still run on
              seasonal rhythms. You don&apos;t just walk through scenery here — you walk through a
              living culture.
            </p>
            <p className="text-lg leading-relaxed">
              And the logistics are surprisingly accessible. Imlil, the main trailhead for Toubkal,
              is 90 minutes by taxi from Marrakech&apos;s Jemaa el-Fnaa. Guides, mules, and refuges
              are well-established. Costs are a fraction of comparable treks in Nepal or Patagonia.
              A two-day Toubkal summit trip starts from 1,500 MAD per person in a group — roughly
              $150 USD.
            </p>
          </div>
        </div>
      </section>

      {/* ── Major Treks Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Morocco&apos;s Best Multi-Day Treks
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five classic routes spanning the full spectrum of Moroccan mountain terrain — from
            the country&apos;s highest summit to gentle valley walks.
          </p>

          <div className="space-y-8">
            {majorTreks.map((trek) => (
              <div key={trek.name} className="card-moroccan overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-64 md:h-auto relative">
                    <img
                      src={trek.image}
                      alt={`${trek.name} trekking route in Morocco's Atlas Mountains`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        {trek.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-start gap-3 mb-3">
                      <trek.icon className="w-7 h-7 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {trek.name}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-secondary)] mt-1">
                          <span className="flex items-center gap-1">
                            <Triangle className="w-3.5 h-3.5" /> {trek.elevation}
                          </span>
                          <span className="flex items-center gap-1">
                            <Timer className="w-3.5 h-3.5" /> {trek.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Sun className="w-3.5 h-3.5" /> {trek.season}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-4 leading-relaxed">
                      {trek.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {trek.highlights.map((h) => (
                        <span key={h} className="text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-2.5 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3 text-[var(--color-accent)]" /> {h}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">
                      <DollarSign className="w-4 h-4 inline -mt-0.5" /> {trek.cost}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Hikes Near Marrakech ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Day Hikes Near Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            No multi-day commitment needed. These hikes start within 90 minutes of Marrakech
            and get you back in time for dinner in the medina.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dayHikes.map((hike) => (
              <div key={hike.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Footprints className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {hike.name}
                  </h3>
                </div>
                <div className="flex gap-4 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <Route className="w-3.5 h-3.5" /> {hike.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {hike.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" /> {hike.difficulty}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {hike.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Guide Requirements ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Guides, Mules & Logistics
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has a well-organized trekking infrastructure. Here&apos;s how it works.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-7 h-7 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Licensed Mountain Guides
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                    Since 2015, a licensed guide is legally required for treks above 3,000m and in
                    national park areas. Licensed guides complete a rigorous two-year training
                    program at CFAMM in Tabant, covering first aid, mountain rescue, languages,
                    and cultural heritage. They carry official ID cards. Insist on seeing one.
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    From 500 MAD per day for a licensed mountain guide. Seasonal pricing may vary.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4">
                <Users className="w-7 h-7 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Local Village Guides
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                    For lower-altitude walks and day hikes, local village guides know every path,
                    shortcut, and family in the valley. They may not have official mountain guide
                    certification, but their local knowledge is unbeatable. Hire through guesthouses
                    or the Bureau des Guides in Imlil.
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    From 300 MAD per day for a local guide. Seasonal pricing may vary.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4">
                <Landmark className="w-7 h-7 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Mule Support
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">
                    Mules carry gear, food, and camping equipment on multi-day treks. A single
                    mule hauls up to 80kg and is led by a muleteer who also helps with camp
                    setup and cooking. This lets you walk with just a daypack. Mule transport is
                    arranged through your guide. Tip the muleteer separately at the end of the
                    trek — from 50 MAD per day is standard.
                  </p>
                  <p className="text-sm font-semibold text-[var(--color-accent)]">
                    From 200 MAD per day per mule (includes muleteer). Seasonal pricing may vary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fitness Preparation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Fitness Preparation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You don&apos;t need to be an ultramarathon runner, but some preparation goes a long way —
            especially for high-altitude treks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 text-center">
              <Timer className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                8 Weeks Before
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Start with 30-minute walks four times per week. Build to 60-minute sessions
                including hills or stairs. Add a loaded daypack (8-10kg) twice a week.
                Cardiovascular fitness matters more than strength.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <Footprints className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                4 Weeks Before
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Do one long walk per week (3-5 hours) on hilly terrain. Practice in the boots
                you&apos;ll wear in Morocco. Two shorter sessions mid-week. Target 15-20km on
                your longest walk. Break in boots completely.
              </p>
            </div>

            <div className="card-moroccan p-6 text-center">
              <Mountain className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-4" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Altitude Awareness
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Above 3,000m, altitude affects everyone regardless of fitness. Ascend
                gradually. Sleep no more than 500m higher than the previous night. Drink 3-4L
                of water daily. Headache and nausea are warning signs — descend if they worsen.
                Diamox (consult your doctor) can help prevent symptoms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gear & Packing List ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Gear &amp; Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s mountains demand respect. Temperatures swing 30+ degrees between
            midday sun and pre-dawn cold at altitude. Pack for both extremes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {gearCategories.map((cat) => (
              <div key={cat.category} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <cat.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {cat.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Buying Gear in Morocco
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Imlil has a few shops selling basic trekking supplies — gloves, hats, water bottles,
                  snacks — but selection is limited and prices are tourist-inflated. Marrakech has
                  Decathlon (in the Menara Mall) with good-quality budget gear. Bring specialized items
                  from home. Crampons and ice axes can sometimes be rented from guides in Imlil for
                  winter treks (from 100 MAD per item per day).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mountain Accommodation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Mountain Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Forget luxury hotels. Up here, it&apos;s refuges, gites, and starlit camping.
            Each has its charm.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodations.map((acc) => (
              <div key={acc.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-1">
                  <Tent className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {acc.name}
                  </h3>
                </div>
                <div className="flex gap-3 text-xs text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {acc.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building className="w-3.5 h-3.5" /> {acc.type}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {acc.description}
                </p>
                <p className="text-sm font-semibold text-[var(--color-accent)]">
                  <DollarSign className="w-4 h-4 inline -mt-0.5" /> {acc.price}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trekking Seasons ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Best Trekking Seasons by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s trekking regions operate on different seasonal clocks.
            Pick the right region for the right month and you&apos;ll have ideal conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trekkingSeasons.map((s) => (
              <div key={s.region} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <s.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {s.region}
                  </h3>
                </div>
                <div className="space-y-2 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-20 font-semibold text-green-700">Best:</span>
                    <span className="text-[var(--text-secondary)]">{s.best}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-20 font-semibold text-yellow-700">Shoulder:</span>
                    <span className="text-[var(--text-secondary)]">{s.shoulder}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-20 font-semibold text-red-700">Avoid:</span>
                    <span className="text-[var(--text-secondary)]">{s.avoid}</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed italic">
                  {s.notes}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trekking Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Safety on the Trail
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <ThermometerSun className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Sun &amp; Heat
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    UV intensity at 3,000m+ is ferocious. Apply SPF 50 every two hours,
                    wear a wide-brimmed hat, and drink at least 3L of water per day.
                    Start early — be walking by 7am to avoid the midday blaze.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <CloudSnow className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Cold &amp; Altitude
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Temperatures above 3,500m can drop to -15C in winter and below
                    freezing year-round overnight. Layer up. Hypothermia catches
                    underprepared trekkers every season, even in summer.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Travel Insurance
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Standard travel insurance rarely covers trekking above 2,500m.
                    Check your policy carefully. Get coverage that includes helicopter
                    evacuation and mountain rescue. World Nomads and Global Rescue are
                    popular with Atlas trekkers.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    Water &amp; Food Safety
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Never drink untreated stream water — livestock graze upstream.
                    Use purification tablets or a filter. Guided treks include meals,
                    but carry energy bars and dried fruit as backup. Village shops
                    sell basics but stock is unpredictable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Morocco&apos;s Trekking Landscapes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { src: '/images/hero-toubkal.webp', alt: 'Snow-dusted summit of Mount Toubkal, the highest peak in North Africa at 4,167 meters', label: 'Mount Toubkal Summit' },
              { src: '/images/hero-hiking-atlas.webp', alt: 'Trekker on a high mountain trail crossing the M\'Goun massif in the Central High Atlas', label: 'M\'Goun Traverse' },
              { src: '/images/art-atlas-mountain-village.webp', alt: 'Traditional Berber village with terraced fields in the Ait Bougmez Happy Valley', label: 'Ait Bougmez Valley' },
            ].map((img) => (
              <div key={img.label} className="relative h-72 rounded-xl overflow-hidden">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <p className="absolute bottom-4 left-4 text-white text-sm font-medium">{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a guide to trek in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For Toubkal and all treks above 3,000m, a licensed mountain guide is legally required
                since 2015. Day hikes in the Ourika Valley or lower-altitude walks around Imlil can
                be done independently on marked trails. A guide is still recommended for safety,
                navigation, and cultural connection. Official mountain guides cost from 500 MAD per day;
                local village guides from 300 MAD per day.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time for trekking in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                It depends on the region. High Atlas summits (Toubkal, M&apos;Goun) are best from
                mid-June through September when passes are snow-free. Jebel Saghro and the Anti-Atlas
                are ideal October through April — too hot in summer. The Rif Mountains peak in spring
                (March-June) with wildflowers and comfortable temperatures. Morocco has a trekking
                option for every month of the year.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How difficult is the Toubkal trek?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The standard two-day route rates moderate to strenuous. No technical climbing is
                required in summer — just steep scree and sustained uphill. The main challenge
                is altitude at 4,167m, where thin air slows everyone. Expect 5-6 hours to the
                refuge on day one and 4-5 hours to the summit on day two. A reasonable fitness
                level and comfortable walking 6-8 hours per day are needed. Winter ascents require
                crampons, ice axes, and mountaineering skills.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does a Toubkal trek cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A two-day guided group trek costs from 1,500 MAD to 3,000 MAD per person,
                covering guide, mule transport, refuge accommodation, and meals. Private guided
                treks start from 4,000 MAD for two days. Budget trekkers can arrange a guide in
                Imlil (from 500 MAD/day) and pay refuge beds (from 150 MAD/night) and meals
                separately. Seasonal pricing can change, especially in peak summer months.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What gear do I need for trekking in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Essentials: sturdy hiking boots (broken in), 30-40L daypack, sun protection (SPF 50,
                hat, quality sunglasses), layered clothing for 30-degree temperature swings, a
                headlamp, water purification, and a first-aid kit. Multi-day treks need a sleeping
                bag rated to -5C for refuges. Trekking poles help enormously on steep descents.
                Bring rain gear in spring. Crampons and ice axes are necessary October through May
                for high summits.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can beginners trek in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Day hikes in the Ourika Valley (2-3 hours, easy terrain) and Imlil to Aremd
                (5km, gentle slopes) suit complete beginners. The Ait Bougmez Valley offers flat
                to rolling walks with stunning mountain backdrops. Even Toubkal is achievable for
                fit beginners who prepare with regular cardio training for 6-8 weeks. Start with
                shorter hikes and build up during your trip.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are mountain refuges in Morocco comfortable?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Expect functional, not fancy. The CAF Toubkal Refuge at 3,207m has dormitory
                bunks for 80, basic toilets, cold showers, and a dining area. It gets packed
                in July-August. Les Mouflons refuge nearby is newer and cleaner. Village gites
                offer floor mattresses, shared bathrooms, and home-cooked meals. Always bring
                your own sleeping bag for warmth and hygiene. The experience is part of the
                adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to the High, Middle, and Anti-Atlas ranges including villages, drives, and cultural highlights.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-camping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Tent className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Camping in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Wild camping rules, established campsites, desert bivouacs, and everything for sleeping under Moroccan skies.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-berber-culture" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Berber Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Amazigh heritage, traditions, village life, crafts, and music — the culture you experience on every mountain trek.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-backpacking-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Backpack className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Backpacking Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Budget routes, hostel tips, transport hacks, and itineraries for independent travelers exploring Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Hit the Trail?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Morocco&apos;s mountains are calling. Plan your Toubkal summit attempt, explore
            hidden valleys, or simply walk between Berber villages in the Atlas. The trails
            are waiting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Mountain className="w-5 h-5" />
              Explore the Atlas Mountains
            </Link>
            <Link
              href="/morocco-adventure-tours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Browse Adventure Tours
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

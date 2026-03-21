import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Droplets,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Thermometer,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Compass,
  Waves,
  MessageCircleQuestion,
  TrendingUp,
  Calendar,
  Footprints,
  Shield,
  Sun,
  Backpack,
  Camera,
  Route,
  CircleAlert,
  Gauge,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-canyoning`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Canyoning & Gorge Adventures 2026 | Todra, Akchour, Paradise Valley',
  description:
    'Complete guide to canyoning and gorge adventures in Morocco. Explore Todra Gorge, Akchour waterfalls, Paradise Valley, Ouzoud Falls, Dades Gorge, and Ourika Valley. Cliff jumping, rappelling, river trekking, swimming holes, guided tours from 300 MAD, difficulty levels, equipment, and safety.',
  keywords: [
    'Morocco canyoning',
    'Todra Gorge canyoning',
    'Akchour waterfalls Morocco',
    'Paradise Valley Agadir',
    'Morocco gorge adventures',
    'Ouzoud Falls Morocco',
    'Dades Gorge hiking',
    'Morocco cliff jumping',
    'Morocco rappelling',
    'river trekking Morocco',
    'Morocco swimming holes',
    'Ourika Valley waterfalls',
    'canyoning Morocco guided tours',
    'Morocco adventure sports',
    'gorge hiking Morocco 2026',
    'Setti Fatma cascades',
    'Morocco outdoor activities',
    'family canyoning Morocco',
  ],
  openGraph: {
    title: 'Morocco Canyoning & Gorge Adventures 2026 | Todra, Akchour, Paradise Valley',
    description:
      'Explore Morocco\'s most dramatic gorges and canyons. From Todra Gorge rappelling to Akchour waterfall treks and Paradise Valley cliff jumps, this guide covers every canyon adventure with prices, difficulty ratings, and safety tips.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-todra-gorge-canyon.webp`,
        width: 1200,
        height: 630,
        alt: 'Todra Gorge towering canyon walls with river flowing through narrow passage in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Canyoning & Gorge Adventures 2026 | Complete Guide',
    description:
      'Todra Gorge, Akchour, Paradise Valley, Ouzoud Falls — full guide to Morocco canyoning with prices, difficulty levels, gear, safety, and family options.',
    images: [`${BASE_URL}/images/hero-todra-gorge-canyon.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is canyoning in Morocco safe for beginners?',
    a: 'Yes. Several gorges offer beginner-friendly routes with no technical skills required. Paradise Valley and the first Setti Fatma cascade involve straightforward walking and wading. Guided trips always include safety briefings and equipment. Choose a licensed guide and a route rated "easy" for your first time.',
  },
  {
    q: 'What is the best time of year for canyoning in Morocco?',
    a: 'April to June and September to November offer the best conditions. Water levels are manageable, temperatures are comfortable (20-30 C), and gorges are not overcrowded. July and August are scorching in the south but acceptable in the Rif Mountains (Akchour). Avoid December to February in the Atlas when snowmelt raises water levels unpredictably.',
  },
  {
    q: 'How much does a guided canyoning trip cost in Morocco?',
    a: 'Half-day guided trips start from 300 MAD per person for group excursions at Paradise Valley or Ourika Valley. Full-day technical canyoning at Todra Gorge costs from 600 MAD per person including equipment. Multi-day canyoning expeditions in the High Atlas range from 2,000 MAD to 5,000 MAD per person. Seasonal pricing can change during peak months.',
  },
  {
    q: 'Do I need to bring my own equipment for canyoning?',
    a: 'Licensed guides provide all technical equipment: harnesses, helmets, ropes, carabiners, and wetsuits where needed. You should bring sturdy water shoes or hiking sandals with grip, a swimsuit, sunscreen, a dry bag for electronics, and at least 2 liters of water. Some operators rent water shoes for from 50 MAD.',
  },
  {
    q: 'Can children do canyoning in Morocco?',
    a: 'Yes. Paradise Valley, Ourika Valley, and the lower pools of Ouzoud Falls are suitable for children aged 6 and older with supervision. Guided family trips at Paradise Valley start from 200 MAD per child. Technical canyoning with rappelling is generally restricted to ages 12 and up. Always confirm age requirements with your operator.',
  },
  {
    q: 'How fit do I need to be for gorge hiking in Morocco?',
    a: 'Basic gorge walks at Ouzoud Falls or the Dades Valley require only moderate fitness and the ability to walk on uneven terrain for 2-3 hours. Technical canyoning at Todra Gorge demands good cardiovascular fitness and comfort with heights. Multi-day expeditions require strong endurance. Most operators list fitness requirements on their booking pages.',
  },
  {
    q: 'Is cliff jumping safe at Paradise Valley?',
    a: 'Cliff jumping at Paradise Valley is popular but carries real risk. Jump only from established platforms where locals jump and always check water depth first. Heights range from 2 meters to 10 meters. Never jump headfirst. Injuries from hitting submerged rocks do occur when people jump at unmarked spots. A local guide costs from 100 MAD and can show you the safe jumps.',
  },
  {
    q: 'What should I know about flash floods in Moroccan gorges?',
    a: 'Flash floods are the biggest danger in Moroccan canyons. They can occur even when skies are clear overhead if it rains upstream. Never camp in a gorge bed. Check weather forecasts for the entire watershed, not just your location. If water levels rise suddenly or the water turns muddy, move to high ground immediately. Licensed guides monitor conditions and carry emergency communication devices.',
  },
  {
    q: 'Can I do canyoning independently without a guide?',
    a: 'Easy gorge walks at Ouzoud Falls, Ourika Valley first cascade, and Dades Valley viewpoints are safe without a guide. Technical canyoning with rappelling, cliff descents, or river crossings should always be done with a licensed guide. Self-guided technical canyoning has led to serious accidents in Todra Gorge and Akchour. Guides cost from 300 MAD per day and the investment is worth your safety.',
  },
  {
    q: 'What is the difference between gorge hiking and technical canyoning?',
    a: 'Gorge hiking follows trails alongside or through a canyon, involving walking, scrambling, and occasional wading. Technical canyoning adds rappelling (abseiling) down waterfalls, swimming through pools, and using ropes to navigate vertical drops. Gorge hiking requires no equipment beyond good shoes. Technical canyoning requires harnesses, helmets, ropes, and professional guidance.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Canyoning & Gorge Adventures 2026',
  description:
    'Complete guide to canyoning and gorge adventures in Morocco covering Todra Gorge, Akchour waterfalls, Paradise Valley, Ouzoud Falls, Dades Gorge, Ourika Valley, guided tours, equipment, safety, and pricing.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-todra-gorge-canyon.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Canyoning & Gorge Adventures', item: PAGE_URL },
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
   DATA: TOP CANYONING DESTINATIONS
   ================================================================ */

const destinations = [
  {
    name: 'Todra Gorge',
    region: 'Tinghir, Draa-Tafilalet',
    icon: Mountain,
    image: '/images/hero-todra-gorge-canyon.webp',
    difficulty: 'Moderate to Advanced',
    bestSeason: 'March - June, September - November',
    activities: ['Technical canyoning', 'Rock climbing', 'Rappelling', 'Gorge hiking', 'River wading'],
    description:
      'Morocco\'s most iconic canyon. Todra\'s limestone walls rise 300 meters on either side of a narrow passage just 10 meters wide at its tightest point. The gorge stretches 40 km through the eastern High Atlas, but the most dramatic section is the final 600 meters where the walls close in around the Todra River. Technical canyoning routes involve rappelling down 15-30 meter drops and swimming through cold pools fed by mountain springs.',
    price: 'From 600 MAD (full-day guided canyoning with equipment)',
    tips: 'Water temperatures hover around 15 C year-round in the deep pools. A wetsuit is strongly recommended. The gorge floor can be slippery — bring shoes with aggressive grip.',
  },
  {
    name: 'Akchour Waterfalls',
    region: 'Talassemtane National Park, Chefchaouen',
    icon: Droplets,
    image: '/images/hero-paradise-valley.webp',
    difficulty: 'Easy to Moderate',
    bestSeason: 'April - October',
    activities: ['Waterfall trekking', 'Swimming', 'Cliff jumping', 'Canyon exploration', 'Photography'],
    description:
      'Two spectacular waterfalls in the Rif Mountains accessible from Chefchaouen. The small waterfall (20 meters) is a 45-minute hike along a river trail with swimming pools along the way. The large waterfall (cascades of over 100 meters total) requires a more demanding 2-hour trek through dense forest. The turquoise pools beneath both falls are deep enough for swimming. The God\'s Bridge natural rock arch adds a dramatic geological feature to the trek.',
    price: 'From 200 MAD (guided half-day from Chefchaouen)',
    tips: 'Start early to avoid crowds, especially on weekends. The trail to the large waterfall is steep in sections and requires good footwear. Bring lunch — there are no vendors past the trailhead.',
  },
  {
    name: 'Paradise Valley',
    region: 'Imouzzer Ida Outanane, near Agadir',
    icon: Waves,
    image: '/images/hero-paradise-valley-pool.webp',
    difficulty: 'Easy to Moderate',
    bestSeason: 'April - November',
    activities: ['Cliff jumping', 'Natural pool swimming', 'Rock scrambling', 'Gorge walking', 'Picnicking'],
    description:
      'A series of turquoise natural pools and small waterfalls carved into a palm-lined gorge about 30 km north of Agadir. The valley got its name from Jimi Hendrix, who reportedly visited in the late 1960s. Cliff jumps range from gentle 2-meter drops suitable for families to adrenaline-pumping 10-meter leaps for experienced jumpers. The pools are connected by short scrambles over smooth rocks, creating a natural water park atmosphere.',
    price: 'From 100 MAD (local guide for the full valley circuit)',
    tips: 'Wear water shoes — the rocks between pools are polished and slippery. Visit on weekdays to avoid weekend crowds from Agadir. There is a small cafe at the upper entrance selling drinks and tagine.',
  },
  {
    name: 'Ourika Valley & Setti Fatma',
    region: 'High Atlas, 60 km from Marrakech',
    icon: Footprints,
    image: '/images/hero-atlas.webp',
    difficulty: 'Easy to Moderate',
    bestSeason: 'March - November',
    activities: ['Waterfall hiking', 'River trekking', 'Swimming', 'Berber village visits', 'Botanical walks'],
    description:
      'Seven cascading waterfalls above the village of Setti Fatma in the Ourika Valley. The first waterfall is a 30-minute scramble from the village and is suitable for most fitness levels. Each successive waterfall demands more climbing skill, with the seventh requiring technical scrambling. The Ourika River runs through the valley floor with shallow pools for cooling off. This is the most accessible gorge adventure from Marrakech and works perfectly as a day trip.',
    price: 'From 150 MAD (local guide for 3 waterfalls)',
    tips: 'The trail beyond the second waterfall is exposed in places — use a guide. Flash floods in August 1995 killed hundreds here; always monitor weather and heed local warnings. Riverside restaurants serve fresh trout and tagine.',
  },
  {
    name: 'Ouzoud Falls',
    region: 'Azilal Province, Middle Atlas',
    icon: Droplets,
    image: '/images/hero-ouzoud-falls.webp',
    difficulty: 'Easy',
    bestSeason: 'Year-round (best March - June)',
    activities: ['Waterfall viewing', 'Swimming', 'Boat rides', 'Barbary macaque spotting', 'Gorge walking'],
    description:
      'Morocco\'s tallest waterfall at 110 meters, plunging in multiple tiers into a wide basin surrounded by olive trees. Stairways and trails lead from the rim to the base where you can swim in the mist-cooled pools. Small boats ferry visitors to the base of the falls for from 20 MAD. Barbary macaques live in the surrounding trees and are regularly spotted. The gorge below the falls offers a scenic walk along the El-Abid River with additional smaller cascades.',
    price: 'From 50 MAD (parking + boat ride)',
    tips: 'Spring delivers the most powerful water flow. The pools at the base are cold even in summer. Do not feed the macaques — it disrupts their natural behavior. A paved path makes the upper viewpoints accessible for wheelchairs.',
  },
  {
    name: 'Gorges du Dades',
    region: 'Boumalne Dades, Draa-Tafilalet',
    icon: Route,
    image: '/images/hero-dades-gorge.webp',
    difficulty: 'Easy to Advanced (route-dependent)',
    bestSeason: 'March - June, September - November',
    activities: ['Gorge driving', 'Canyon hiking', 'Rock climbing', 'Photography', 'Mountain biking'],
    description:
      'A 25 km stretch of dramatic rock formations carved by the Dades River through layers of red and orange limestone. The famous hairpin road (Tizi n\'Ouano pass) is an attraction in itself. Beyond the road, hiking trails lead into side canyons with natural rock arches, slot canyons, and formations that locals call "monkey fingers" — tall, narrow rock pillars created by erosion. Technical canyoning routes exist deeper in the gorge system, accessible only with experienced guides.',
    price: 'From 400 MAD (full-day guided canyon hike)',
    tips: 'The hairpin road is narrow and steep — drive slowly or hire a local driver. Guesthouses inside the gorge offer overnight stays from 250 MAD including dinner. Sunrise from the gorge rim is spectacular.',
  },
] as const;

/* ================================================================
   DATA: ACTIVITY TYPES & DIFFICULTY GUIDE
   ================================================================ */

const activityTypes = [
  {
    activity: 'Gorge Walking',
    icon: Footprints,
    difficulty: 'Easy',
    fitness: 'Basic — ability to walk 2-3 hours on uneven ground',
    equipment: 'Sturdy shoes, water, sunscreen',
    description:
      'Following trails along canyon floors or riverside paths. Involves walking, light scrambling, and occasional stream crossings. No ropes or harnesses needed. Suitable for families and first-timers.',
    locations: 'Ouzoud Falls, Dades Valley, lower Ourika Valley',
  },
  {
    activity: 'Waterfall Trekking',
    icon: Droplets,
    difficulty: 'Easy to Moderate',
    fitness: 'Moderate — able to hike uphill for 1-2 hours with uneven footing',
    equipment: 'Hiking shoes with grip, water shoes for pools, dry bag',
    description:
      'Hiking to reach waterfalls, often involving river crossings, rock hopping, and short scrambles. Some sections may require using hands to pull yourself up. Swimming is usually part of the experience.',
    locations: 'Akchour, Setti Fatma, Paradise Valley',
  },
  {
    activity: 'Cliff Jumping',
    icon: TrendingUp,
    difficulty: 'Moderate to Advanced',
    fitness: 'Good — confident swimmer with comfort around heights',
    equipment: 'Swimsuit, water shoes, towel',
    description:
      'Jumping from rock ledges into deep natural pools. Heights vary from 2 meters (family-friendly) to 10+ meters (experienced only). Always check water depth before jumping. Never dive headfirst into natural water.',
    locations: 'Paradise Valley, Akchour lower pools, Ourika River pools',
  },
  {
    activity: 'Rappelling (Abseiling)',
    icon: TrendingUp,
    difficulty: 'Advanced',
    fitness: 'Strong — comfortable with exposure and sustained physical effort',
    equipment: 'All provided by guide: harness, helmet, ropes, carabiners, descender',
    description:
      'Descending canyon walls and waterfall faces on ropes. Technical skill is taught on-site by guides. Drops range from 10 meters to 30 meters. The combination of height, water spray, and slippery rock demands focus and trust in your equipment.',
    locations: 'Todra Gorge, upper Akchour canyon, High Atlas routes',
  },
  {
    activity: 'River Trekking (Aqua Hiking)',
    icon: Waves,
    difficulty: 'Moderate',
    fitness: 'Good — strong swimmer, comfortable in moving water',
    equipment: 'Wetsuit (provided), water shoes, helmet, dry bag',
    description:
      'Walking, wading, and swimming through river-carved canyons where the trail IS the river. You follow the water downstream, navigating pools, small rapids, and underwater obstacles. Water temperatures in Atlas canyons sit between 12 C and 18 C.',
    locations: 'Todra River, Imi n\'Ifri gorge, M\'Goun Canyon',
  },
] as const;

/* ================================================================
   DATA: PRICE GUIDE
   ================================================================ */

const priceGuide = [
  { service: 'Local guide (Ouzoud or Ourika, half day)', price: 'From 150 MAD', note: 'Group rate per person, minimum 2' },
  { service: 'Paradise Valley guided circuit', price: 'From 100 MAD', note: 'Local guide for full valley loop' },
  { service: 'Akchour waterfall trek with guide', price: 'From 200 MAD', note: 'Half-day from Chefchaouen' },
  { service: 'Todra Gorge full-day canyoning', price: 'From 600 MAD', note: 'All equipment included' },
  { service: 'Dades Gorge guided canyon hike', price: 'From 400 MAD', note: 'Full day with transport from Boumalne' },
  { service: 'Multi-day Atlas canyoning expedition', price: 'From 2,000 MAD', note: '2-3 days, meals and camping included' },
  { service: 'Technical rappelling course (half day)', price: 'From 500 MAD', note: 'Instruction + equipment + 3-4 rappels' },
  { service: 'Family canyon adventure (Paradise Valley)', price: 'From 200 MAD per child', note: 'Reduced rate, ages 6-12' },
  { service: 'Wetsuit rental', price: 'From 80 MAD per day', note: 'Where not included with guided trip' },
  { service: 'Water shoe rental', price: 'From 50 MAD per day', note: 'Available at most gorge entrances' },
  { service: 'Boat ride (Ouzoud Falls base)', price: 'From 20 MAD', note: 'Short ride to base of falls' },
  { service: 'Day trip from Marrakech (Ouzoud or Ourika)', price: 'From 350 MAD', note: 'Transport, guide, lunch included' },
] as const;

/* ================================================================
   DATA: ESSENTIAL GEAR CHECKLIST
   ================================================================ */

const gearChecklist = [
  { item: 'Water shoes with grip soles', icon: Footprints, priority: 'Essential', note: 'Rocks in Moroccan gorges are polished smooth. Regular hiking boots get waterlogged. Neoprene water shoes with rubber soles provide the best grip in wet canyons.' },
  { item: 'Dry bag (20-30L)', icon: Backpack, priority: 'Essential', note: 'Keeps phone, wallet, camera, and dry clothes safe during river crossings and pool swims. Clip it to your harness during rappels.' },
  { item: 'Sunscreen SPF 50+', icon: Sun, priority: 'Essential', note: 'Canyon walls reflect UV light intensely. Apply waterproof sunscreen before entering the gorge and reapply after swimming. Sunburn is the most common canyoning complaint.' },
  { item: 'Quick-dry clothing', icon: Backpack, priority: 'Essential', note: 'Cotton absorbs water and stays cold. Synthetic or merino layers dry fast and maintain warmth. Avoid jeans in any canyon environment.' },
  { item: 'Waterproof phone case', icon: Camera, priority: 'Recommended', note: 'A sealed waterproof pouch costs from 30 MAD and lets you photograph without risking your phone. Test the seal before entering water.' },
  { item: 'Headlamp', icon: Sun, priority: 'Recommended', note: 'Some canyon sections and rock overhangs are dark. A small headlamp is lightweight and invaluable if your trip runs late.' },
  { item: '2+ liters of water', icon: Droplets, priority: 'Essential', note: 'Dehydration happens fast in Moroccan heat, even when surrounded by water. River water in most gorges is not safe to drink without treatment.' },
  { item: 'First-aid basics', icon: Shield, priority: 'Recommended', note: 'Band-aids, antiseptic wipes, blister tape. Scrapes on rock are common. Guides carry first aid kits but having your own basics is wise.' },
] as const;

/* ================================================================
   DATA: SAFETY PROTOCOLS
   ================================================================ */

const safetyRules = [
  { title: 'Check Weather Before Every Trip', icon: AlertTriangle, text: 'Flash floods kill more people in Moroccan gorges than any other hazard. Check the forecast for the entire upstream watershed, not just your location. If rain is predicted anywhere in the catchment, postpone your trip.' },
  { title: 'Use Licensed Guides for Technical Routes', icon: ShieldCheck, text: 'Morocco requires licensed mountain guides for technical canyoning. Ask to see credentials. Licensed guides carry insurance, emergency communication devices, and first-aid training. The lowest-priced option is rarely the safest.' },
  { title: 'Never Jump Without Checking Depth', icon: CircleAlert, text: 'Water levels in natural pools change with seasons and rainfall. A pool that was 4 meters deep last month may be 1 meter deep today. Always enter feet-first. Always have someone check the pool before you jump.' },
  { title: 'Tell Someone Your Plan', icon: Users, text: 'Share your route, expected return time, and guide contact with your accommodation. Mobile phone signal is spotty or absent in most Moroccan gorges. If something goes wrong, rescuers need to know where to look.' },
  { title: 'Respect Water Temperature', icon: Thermometer, text: 'Atlas Mountain pools sit between 12 C and 18 C even in summer. Cold water shock causes involuntary gasping and can lead to drowning. Enter cold pools gradually. Wear a wetsuit for extended swims or any river trekking.' },
  { title: 'Know Your Limits', icon: Gauge, text: 'Turning back is not failure. If a scramble or jump feels beyond your ability, there is no shame in finding another route or sitting it out. Group pressure has led to more canyoning injuries than any technical failure.' },
] as const;

/* ================================================================
   DATA: SEASONAL CALENDAR
   ================================================================ */

const seasonalCalendar = [
  { season: 'Spring (March - May)', icon: Droplets, rating: 'Peak Season', waterLevel: 'High — snowmelt feeds powerful falls', temp: '18-28 C', highlights: 'Ouzoud Falls at maximum power. Akchour pools fill to the brim. Wildflowers line canyon trails. Best time for waterfall photography.', caution: 'Rivers run fast in March. Check conditions with guides before river trekking.' },
  { season: 'Summer (June - August)', icon: Sun, rating: 'Good (north) / Hot (south)', waterLevel: 'Moderate dropping to low', temp: '28-42 C', highlights: 'Paradise Valley at its most inviting. Akchour perfect for swimming. Early mornings ideal for Todra to beat the heat.', caution: 'Temperatures above 40 C in southern gorges. Start all activities before 9 AM. Carry extra water. Some smaller falls dry up by August.' },
  { season: 'Autumn (September - November)', icon: Calendar, rating: 'Peak Season', waterLevel: 'Moderate — autumn rains recharge pools', temp: '16-30 C', highlights: 'Comfortable temperatures across all regions. Fewer tourists than spring. Dades Gorge colors shift to deeper reds and oranges. Excellent for multi-day expeditions.', caution: 'October and November can bring sudden heavy rains. Flash flood risk increases. Always check forecasts.' },
  { season: 'Winter (December - February)', icon: Mountain, rating: 'Limited', waterLevel: 'Variable — high after storms, frozen at altitude', temp: '5-18 C', highlights: 'Ouzoud Falls dramatic with heavy flow. Dades Gorge hiking possible on clear days. Fewer crowds mean solitude in the canyons.', caution: 'Snow above 2,000 meters closes many Atlas routes. Water temperatures drop below 10 C. Wetsuit mandatory for any water activity. Short daylight hours limit trip duration.' },
] as const;

/* ================================================================
   DATA: RELATED GUIDES
   ================================================================ */

const relatedGuides = [
  { title: 'Morocco Hiking Guide', href: '/morocco-hiking-guide', description: 'Trail routes, difficulty ratings, and Atlas Mountain trekking essentials' },
  { title: 'Morocco Rock Climbing', href: '/morocco-rock-climbing', description: 'Todra Gorge climbing routes, Taghia canyon, and bouldering spots' },
  { title: 'Morocco Waterfalls Guide', href: '/morocco-waterfalls-guide', description: 'Complete guide to every major waterfall in Morocco' },
  { title: 'Paradise Valley', href: '/paradise-valley', description: 'Detailed guide to the pools, jumps, and trails near Agadir' },
  { title: 'Todra Gorge', href: '/todra-gorge', description: 'Full guide to accommodation, hiking, and activities in the gorge' },
  { title: 'Morocco Adventure Sports', href: '/morocco-adventure-sports', description: 'Surfing, paragliding, quad biking, and more outdoor pursuits' },
  { title: 'Morocco Camping Guide', href: '/morocco-camping-guide', description: 'Wild camping rules, campsite listings, and gear advice' },
  { title: 'Atlas Mountains Guide', href: '/morocco-atlas-guide', description: 'Regions, passes, villages, and seasonal travel tips' },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoCanyoningPage() {
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

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-todra-gorge-canyon.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Canyoning &amp; Gorge Adventures</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Mountain className="w-4 h-4" />
            <span>Updated March 2026</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-white leading-tight mb-6">
            Morocco Canyoning &amp;<br />Gorge Adventures
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl font-[family-name:var(--font-heading)]">
            From the 300-meter walls of Todra Gorge to the turquoise pools of Paradise Valley, Morocco
            hides some of the most dramatic canyon landscapes in North Africa. Rappel waterfalls, leap
            from cliffs into crystal pools, and trek through slot canyons carved over millennia. This
            guide covers every major gorge, activity type, difficulty level, and price.
          </p>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              Why Morocco for Canyoning
            </h2>
            <div className="prose prose-lg text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
              <p>
                Morocco sits at the collision point of the Sahara, the Atlantic, and the Atlas Mountains.
                That geology has carved a network of gorges, slot canyons, and waterfall systems that rival
                anything in southern Europe or the American Southwest — at a fraction of the cost. A full-day
                guided canyoning trip with equipment starts from 600 MAD (roughly 55 EUR), compared to
                200+ EUR in Spain or France.
              </p>
              <p>
                The diversity is what sets Morocco apart. In a single week, you can rappel through the
                limestone corridors of Todra Gorge, swim beneath the hundred-meter Akchour cascades in the
                Rif Mountains, cliff-jump into the palm-shaded pools of Paradise Valley, and hike past
                Barbary macaques at the 110-meter Ouzoud Falls. Each gorge has its own character, its own
                micro-climate, and its own level of challenge.
              </p>
              <p>
                Canyoning infrastructure has grown rapidly since 2020. Licensed guides operate across all
                major gorge systems, equipment standards have improved, and routes are better documented.
                Family-friendly options now exist at Paradise Valley and Ourika Valley for children as
                young as six. Technical multi-day expeditions through the M&apos;Goun Canyon system push
                into genuine wilderness that few travelers ever see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Destinations ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Top Canyoning Destinations
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Six gorge systems across Morocco, each with distinct character, challenge level, and scenery.
            </p>
          </div>
          <div className="space-y-10">
            {destinations.map((dest) => {
              const Icon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <img
                        src={dest.image}
                        alt={`${dest.name} canyon landscape in Morocco`}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                            {dest.name}
                          </h3>
                          <p className="text-sm text-gray-500 font-[family-name:var(--font-heading)] flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {dest.region}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-4 leading-relaxed">
                        {dest.description}
                      </p>
                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Gauge className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="font-[family-name:var(--font-heading)]">{dest.difficulty}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="font-[family-name:var(--font-heading)]">{dest.bestSeason}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[var(--color-accent)] font-semibold col-span-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="font-[family-name:var(--font-heading)]">{dest.price}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dest.activities.map((act) => (
                          <span key={act} className="px-3 py-1 bg-[var(--color-accent)]/5 text-[var(--color-accent)] text-xs font-medium rounded-full font-[family-name:var(--font-heading)]">
                            {act}
                          </span>
                        ))}
                      </div>
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                        <p className="text-sm text-amber-800 font-[family-name:var(--font-heading)] flex items-start gap-2">
                          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                          {dest.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Activity Types & Difficulty ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Activity Types &amp; Difficulty Levels
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Understand what each canyon activity involves before you book.
            </p>
          </div>
          <div className="space-y-6">
            {activityTypes.map((act) => {
              const Icon = act.icon;
              return (
                <div key={act.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">
                          {act.activity}
                        </h3>
                        <span className={`px-3 py-0.5 rounded-full text-xs font-semibold font-[family-name:var(--font-heading)] ${
                          act.difficulty === 'Easy'
                            ? 'bg-green-100 text-green-700'
                            : act.difficulty === 'Easy to Moderate'
                            ? 'bg-emerald-100 text-emerald-700'
                            : act.difficulty === 'Moderate'
                            ? 'bg-yellow-100 text-yellow-700'
                            : act.difficulty === 'Moderate to Advanced'
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {act.difficulty}
                        </span>
                      </div>
                      <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-3 leading-relaxed">
                        {act.description}
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Fitness: </span>
                          <span className="text-gray-600 font-[family-name:var(--font-heading)]">{act.fitness}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Gear: </span>
                          <span className="text-gray-600 font-[family-name:var(--font-heading)]">{act.equipment}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Where: </span>
                          <span className="text-gray-600 font-[family-name:var(--font-heading)]">{act.locations}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Seasonal Calendar ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              When to Go: Seasonal Calendar
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Timing your trip right makes the difference between an epic adventure and a dangerous one.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {seasonalCalendar.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[var(--color-gold)]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900">
                        {s.season}
                      </h3>
                      <span className={`text-xs font-semibold font-[family-name:var(--font-heading)] px-2 py-0.5 rounded-full ${
                        s.rating === 'Peak Season' ? 'bg-green-100 text-green-700' :
                        s.rating === 'Limited' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {s.rating}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm font-[family-name:var(--font-heading)]">
                    <p className="text-gray-600"><span className="font-semibold text-gray-800">Temperature:</span> {s.temp}</p>
                    <p className="text-gray-600"><span className="font-semibold text-gray-800">Water:</span> {s.waterLevel}</p>
                    <p className="text-gray-700 leading-relaxed">{s.highlights}</p>
                    <p className="text-amber-700 flex items-start gap-1.5 mt-2">
                      <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                      {s.caution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Essential Gear ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Essential Gear Checklist
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Guides provide technical equipment (ropes, harnesses, helmets). Everything below is your responsibility.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {gearChecklist.map((gear) => {
              const Icon = gear.icon;
              return (
                <div key={gear.item} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold font-[family-name:var(--font-display)] text-gray-900">
                        {gear.item}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-[family-name:var(--font-heading)] ${
                        gear.priority === 'Essential' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {gear.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">
                      {gear.note}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Safety Section ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-[family-name:var(--font-heading)]">Critical Safety Information</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Canyon Safety Rules
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Moroccan gorges are real wilderness. These rules are not suggestions — they exist because people have been hurt or killed ignoring them.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyRules.map((rule) => {
              const Icon = rule.icon;
              return (
                <div key={rule.title} className="card-moroccan p-6 border-l-4 border-l-red-400">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-red-600" />
                    </div>
                    <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 text-sm">
                      {rule.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                    {rule.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Price Guide ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Price Guide
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              What canyoning and gorge adventures cost across Morocco. Seasonal pricing can change during peak tourist months.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="zellige-border" />
              <div className="divide-y divide-gray-100">
                {priceGuide.map((item, idx) => (
                  <div key={idx} className="p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 hover:bg-gray-50 transition-colors">
                    <div className="flex-1">
                      <span className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">
                        {item.service}
                      </span>
                      <span className="text-sm text-gray-500 font-[family-name:var(--font-heading)] ml-2">
                        {item.note}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[var(--color-accent)] font-bold font-[family-name:var(--font-heading)] whitespace-nowrap">
                      <DollarSign className="w-4 h-4" />
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Family-Friendly Options ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-gold)]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[var(--color-gold)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                Family-Friendly Canyon Adventures
              </h2>
            </div>
            <div className="prose prose-lg text-gray-700 font-[family-name:var(--font-heading)] space-y-4 mb-8">
              <p>
                Not every gorge adventure requires ropes and harnesses. Several of Morocco&apos;s best canyon
                experiences are accessible to children aged 6 and older with adult supervision. The key
                is choosing the right location and the right level of activity.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)]" />
                  Paradise Valley
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                  The lower pools have gentle 1-2 meter cliff jumps that children love. Shallow wading sections
                  between pools let kids explore safely. Pack a picnic and spend the morning in the water. A local
                  guide (from 100 MAD) knows the safest pools for young swimmers.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-semibold font-[family-name:var(--font-heading)]">Ages 6+ with supervision</p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)]" />
                  Ouzoud Falls
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                  Paved paths lead to viewpoints suitable for strollers. The boat ride to the base of the falls
                  (from 20 MAD) thrills children without any risk. Barbary macaques in the trees add a wildlife
                  element. The upper rim has guardrails at the main viewing platforms.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-semibold font-[family-name:var(--font-heading)]">All ages</p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2 flex items-center gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)]" />
                  Ourika Valley (1st Cascade)
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-3">
                  The hike to the first Setti Fatma waterfall is 30 minutes on a marked trail. Children manage
                  it comfortably with one hand-holding section. Riverside restaurants serve lunch while kids
                  splash in the shallow pools below the village. Stay at the first cascade — higher ones are
                  too exposed for young hikers.
                </p>
                <p className="text-xs text-[var(--color-accent)] font-semibold font-[family-name:var(--font-heading)]">Ages 6+ with guide</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Choosing a Guide ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              How to Choose a Canyoning Guide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-gray-900">Ask for credentials</h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      Licensed mountain guides in Morocco carry an official card issued by the Ministry of Tourism.
                      Ask to see it. Unlicensed guides are common at popular spots and may lack training.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-gray-900">Inspect equipment</h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      Ropes should be free of visible damage. Harnesses and helmets should be CE-certified.
                      Carabiners should lock automatically. If gear looks worn or improvised, walk away.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-gray-900">Check group size</h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      A maximum of 8 participants per guide is the standard for technical canyoning. Larger groups
                      mean longer waits at rappel stations and less individual attention during safety briefings.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-gray-900">Confirm insurance</h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      Reputable operators carry liability insurance. Ask before booking. Your own travel insurance
                      should also cover adventure sports — standard policies often exclude canyoning. Check your
                      policy wording before departure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-gray-900">Read recent reviews</h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      Check Google Maps, TripAdvisor, and GetYourGuide for reviews from the past 6 months.
                      Pay attention to comments about equipment condition and guide communication skills.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold font-[family-name:var(--font-heading)] text-gray-900">Discuss the plan in advance</h4>
                    <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                      A good guide will explain the route, time estimate, difficulty, escape points, and weather
                      contingency before you start. If the briefing feels rushed or vague, reconsider.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-semibold mb-4">
              <MessageCircleQuestion className="w-4 h-4" />
              <span className="font-[family-name:var(--font-heading)]">Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-6">
                <h3 className="text-lg font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-start gap-3">
                  <span className="w-7 h-7 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  {faq.q}
                </h3>
                <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed pl-10">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Getting There & Logistics ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              Getting There &amp; Logistics
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  From Marrakech
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Ourika Valley / Setti Fatma:</strong> 60 km south, 1.5 hours by car or shared taxi from Bab Er-Rob (from 25 MAD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Ouzoud Falls:</strong> 150 km northeast, 2.5 hours. Day trips available from 350 MAD with transport</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Todra Gorge:</strong> 480 km east via N10, 7-8 hours. Overnight in Tinghir recommended</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Dades Gorge:</strong> 370 km east, 5-6 hours. Often combined with Todra in a 2-3 day loop</span>
                  </li>
                </ul>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  From Other Cities
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Agadir to Paradise Valley:</strong> 30 km north, 40 minutes. Grand taxis from Agadir bus station (from 15 MAD)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Chefchaouen to Akchour:</strong> 30 km, 45 minutes by taxi (from 100 MAD for the car). Shared transport on weekends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Ouarzazate to Dades:</strong> 115 km east, 1.5 hours along the N10. CTM buses run daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] flex-shrink-0 mt-1" />
                    <span><strong>Errachidia to Todra:</strong> 65 km west, 1 hour. Most convenient gateway for flights from Casablanca</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
              <p className="text-sm text-amber-800 font-[family-name:var(--font-heading)] flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  Renting a car gives maximum flexibility for gorge-hopping, especially along the Dades-Todra corridor.
                  A 4x4 is only necessary for off-road tracks to remote canyons. Standard roads to all six destinations
                  listed in this guide are paved and accessible by sedan. Fuel stations are available in Tinghir, Boumalne
                  Dades, Azilal, and Imouzzer.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="py-16 bg-white">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 flex items-center justify-center">
                <Camera className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                Canyon Photography Tips
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Light &amp; Timing</h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                  Canyon walls create harsh shadows midday. Shoot in the first 2 hours after sunrise or the last 2
                  before sunset for warm, even light. Todra Gorge is best photographed around 10 AM when sunlight
                  reaches the canyon floor. Overcast days give the most balanced exposure for waterfall shots.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Gear Protection</h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                  Waterfall mist and river spray will reach your lens. Carry a microfiber cloth in a ziplock bag.
                  Use a UV filter as a sacrificial front element. For action shots at Paradise Valley, a GoPro or
                  waterproof action camera is more practical than a DSLR. A dry bag rated IPX8 protects gear during
                  crossings.
                </p>
              </div>
              <div className="card-moroccan p-5">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2">Composition</h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                  Include a person for scale — Todra&apos;s 300-meter walls look like small cliffs without a human
                  reference point. Use long exposures (1-4 seconds) to blur waterfall motion at Ouzoud and Akchour.
                  Wide-angle lenses (16-24mm) capture the full height of narrow gorge walls.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
              Related Guides
            </h2>
            <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)]">
              Continue planning your Morocco adventure.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {relatedGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <h3 className="font-bold font-[family-name:var(--font-display)] text-gray-900 mb-2 group-hover:text-[var(--color-accent)] transition-colors flex items-center gap-2">
                  {guide.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                  {guide.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
            Ready to Explore Morocco&apos;s Gorges?
          </h2>
          <p className="text-lg text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto mb-8">
            From the towering walls of Todra to the turquoise pools of Paradise Valley, Morocco&apos;s canyons
            are waiting. Book a licensed guide, pack your water shoes, and step into some of the most
            dramatic landscapes in North Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-adventure-tours"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[#8B4726] transition-colors font-semibold font-[family-name:var(--font-heading)]"
            >
              <Compass className="w-5 h-5" />
              Browse Adventure Tours
            </Link>
            <Link
              href="/morocco-outdoor-activities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] border-2 border-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-semibold font-[family-name:var(--font-heading)]"
            >
              <Mountain className="w-5 h-5" />
              All Outdoor Activities
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
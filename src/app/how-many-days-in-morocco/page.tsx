import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  Clock,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Info,
  Lightbulb,
  Sun,
  Compass,
  Mountain,
  Camera,
  Heart,
  Globe,
  Users,
  Sparkles,
  AlertTriangle,
  Plane,
  Footprints,
  Sunrise,
  Tent,
  Waves,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'How Many Days Do You Need in Morocco? 2026 Trip Length Guide',
  description:
    'Find out exactly how many days you need in Morocco in 2026. Data-driven recommendations for 5, 7, 10, and 14-day trips. City-by-city day breakdowns, sample itineraries by trip type, and expert planning tips.',
  keywords: [
    'how many days in morocco',
    'morocco trip length',
    'how long to spend in morocco',
    'ideal morocco trip duration',
    'morocco itinerary days',
    'how many days do you need in morocco',
    'morocco trip planning',
    'morocco vacation length',
    'best morocco itinerary length',
    'morocco travel duration 2026',
    'days needed for morocco',
    'morocco holiday length',
    'morocco trip how many days',
    'planning morocco trip duration',
  ],
  openGraph: {
    title: 'How Many Days Do You Need in Morocco? 2026 Trip Length Guide',
    description:
      'Data-driven guide to planning your Morocco trip length. City-by-city day recommendations, sample itineraries for 5-14 days, and expert tips for maximizing your time.',
    url: `${BASE_URL}/how-many-days-in-morocco`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco showcasing diverse landscapes from medina rooftops to Sahara dunes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Many Days Do You Need in Morocco? 2026 Guide',
    description:
      'The definitive guide to how long you should spend in Morocco. 5, 7, 10, or 14 days? City-by-city breakdowns and sample itineraries.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/how-many-days-in-morocco` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/how-many-days-in-morocco`,
  name: 'How Many Days Do You Need in Morocco? 2026 Trip Length Guide',
  description:
    'Data-driven guide to planning your ideal Morocco trip length. Recommendations for 5, 7, 10, and 14-day trips with city-by-city day breakdowns and sample itineraries.',
  url: `${BASE_URL}/how-many-days-in-morocco`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
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
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/how-many-days-in-morocco`,
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
      { '@type': 'ListItem', position: 2, name: 'How Many Days in Morocco', item: `${BASE_URL}/how-many-days-in-morocco` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How many days do you need in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The ideal Morocco trip is 10-14 days, which allows you to visit Marrakech (2-3 days), Fes (2-3 days), the Sahara Desert (2-3 days), and a coastal city like Essaouira (1-2 days). However, 7 days is the most popular trip length and sufficient for a highlights tour. A minimum of 5 days lets you see one region well.' } },
    { '@type': 'Question', name: 'Is 5 days enough for Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Five days is enough for one region of Morocco. A common 5-day itinerary covers Marrakech (2 days), a Sahara Desert excursion (2 days), and a day trip to Essaouira or the Atlas Mountains. You will need to choose between northern Morocco (Fes, Chefchaouen) or southern Morocco (Marrakech, desert) as covering both is too rushed.' } },
    { '@type': 'Question', name: 'Is 7 days enough for Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Seven days is the most popular trip length and a great balance. A typical 7-day itinerary includes Marrakech (2 days), a Sahara Desert tour via the Dades Valley (3 days), and Fes (2 days). This gives you the imperial cities and the desert experience. Add an extra day for Chefchaouen if you skip Marrakech exploration.' } },
    { '@type': 'Question', name: 'Is 2 weeks too long in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Two weeks is not too long. Morocco has extraordinary diversity: imperial cities, Sahara dunes, Atlas Mountains, Atlantic beaches, blue villages, and Roman ruins. A 14-day trip lets you experience Marrakech, Fes, Chefchaouen, the Sahara, Essaouira, and the Atlas Mountains at a comfortable pace without rushing.' } },
    { '@type': 'Question', name: 'What is the best month to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'April-May and September-October are the best months. Temperatures are warm but not extreme (22-30 degrees), crowds are moderate, and prices are reasonable. Summer (July-August) brings intense heat inland (40+ degrees in Marrakech and the desert). Winter (December-February) is mild on the coast but cold in the mountains and desert at night.' } },
    { '@type': 'Question', name: 'How many days do you need in Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Two to three days is ideal for Marrakech. Day 1: explore the medina, Jemaa el-Fna square, and souks. Day 2: visit Bahia Palace, Majorelle Garden, Saadian Tombs, and enjoy a hammam. Day 3: take a day trip to the Atlas Mountains, Ourika Valley, or Ouzoud Falls. One day is too rushed; four days allows deeper exploration including cooking classes and hidden riads.' } },
  ],
};

/* ===============================================================
   DATA: CITY-BY-CITY RECOMMENDATIONS
   =============================================================== */

const cityRecommendations = [
  {
    city: 'Marrakech',
    icon: Star,
    daysMin: 2,
    daysIdeal: 3,
    priority: 'Must Visit',
    highlights: 'Jemaa el-Fna, souks, Bahia Palace, Majorelle Garden, medina, hammam, cooking classes',
    description:
      'Morocco\'s most vibrant city demands at least 2 full days. The medina alone takes a full day to explore properly, with its labyrinthine souks, stunning palaces, and the legendary Jemaa el-Fna square. A third day allows for a day trip to the Atlas Mountains or Essaouira, or deeper exploration of the city\'s riads, museums, and culinary scene.',
    dayTrips: 'Atlas Mountains, Ourika Valley, Ouzoud Falls, Essaouira',
    link: '/how-many-days-in-marrakech',
  },
  {
    city: 'Fes',
    icon: Compass,
    daysMin: 2,
    daysIdeal: 3,
    priority: 'Must Visit',
    highlights: 'Fes el-Bali medina, tanneries, Bou Inania Madrasa, Merenid Tombs, Dar Batha Museum',
    description:
      'Fes has the world\'s largest car-free urban area and its medieval medina is a UNESCO World Heritage Site with over 9,000 alleyways. Two days gives you time for a guided medina walk, the tanneries, major madrasas, and the Jewish quarter. A third day allows visiting the Merenid Tombs at sunset and taking a day trip to Volubilis or Meknes.',
    dayTrips: 'Volubilis, Meknes, Ifrane, Sefrou',
    link: '/fes',
  },
  {
    city: 'Chefchaouen',
    icon: Camera,
    daysMin: 1,
    daysIdeal: 2,
    priority: 'Highly Recommended',
    highlights: 'Blue medina, Ras el-Maa waterfall, Spanish Mosque hike, Akchour waterfalls',
    description:
      'The famous blue city is smaller than Marrakech or Fes and can technically be seen in one day. However, two days lets you properly explore the blue-washed medina, hike to the Spanish Mosque for sunset views, visit the Ras el-Maa waterfall, and take a half-day trip to the stunning Akchour waterfalls in the Rif Mountains.',
    dayTrips: 'Akchour waterfalls, Talassemtane National Park',
    link: '/chefchaouen',
  },
  {
    city: 'Sahara Desert',
    icon: Sunrise,
    daysMin: 2,
    daysIdeal: 3,
    priority: 'Must Visit',
    highlights: 'Erg Chebbi dunes, camel trek, desert camp, Dades Gorge, Todra Gorge, Ait Benhaddou',
    description:
      'The Sahara Desert experience typically involves a multi-day tour from Marrakech or Fes. A 2-day/1-night trip gets you to the dunes for a camel ride and overnight in a desert camp, but it is very rushed. A 3-day trip via the Dades Valley and Todra Gorge is far more enjoyable and includes Ait Benhaddou, the Draa Valley, and proper time at the dunes for sunrise and sunset.',
    dayTrips: 'Ait Benhaddou, Ouarzazate, Dades Gorge, Todra Gorge',
    link: '/desert',
  },
  {
    city: 'Essaouira',
    icon: Waves,
    daysMin: 1,
    daysIdeal: 2,
    priority: 'Recommended',
    highlights: 'Atlantic coast, Portuguese ramparts, fish market, Gnaoua music, windsurfing, medina',
    description:
      'This laid-back coastal city is a perfect counterpoint to the intensity of Marrakech. One day covers the medina, ramparts, port, and fish market. Two days allows you to enjoy the beach, try water sports, explore the art galleries in the medina, and experience the famous seafood scene at a leisurely pace.',
    dayTrips: 'Argan oil cooperatives, Sidi Kaouki beach',
    link: '/essaouira',
  },
  {
    city: 'Casablanca',
    icon: Globe,
    daysMin: 1,
    daysIdeal: 1,
    priority: 'Optional',
    highlights: 'Hassan II Mosque, Corniche, Art Deco architecture, Morocco Mall, Rick\'s Cafe',
    description:
      'Morocco\'s economic capital is a modern city with one world-class sight: the Hassan II Mosque, the largest in Africa. Most travelers spend just one day here, combining a mosque visit with the Corniche promenade, a walk through the Art Deco city center, and an optional visit to Rick\'s Cafe. Many travelers use Casablanca as an arrival/departure point only.',
    dayTrips: 'El Jadida, Rabat',
    link: '/casablanca',
  },
  {
    city: 'Rabat',
    icon: Footprints,
    daysMin: 1,
    daysIdeal: 1,
    priority: 'Optional',
    highlights: 'Hassan Tower, Kasbah des Oudaias, Chellah ruins, Mohammed V Mausoleum, medina',
    description:
      'Morocco\'s capital is often overlooked but rewards a day visit with the impressive Hassan Tower and Mohammed V Mausoleum, the charming Kasbah des Oudaias overlooking the Atlantic, and the atmospheric Chellah ruins with storks nesting on Roman and Islamic monuments. The medina is more relaxed and less touristy than Marrakech or Fes.',
    dayTrips: 'Sale, Kenitra',
    link: '/rabat',
  },
  {
    city: 'Tangier',
    icon: Mountain,
    daysMin: 1,
    daysIdeal: 2,
    priority: 'Recommended',
    highlights: 'Kasbah Museum, Cap Spartel, Hercules Caves, medina, Cafe Hafa, new marina',
    description:
      'The gateway between Africa and Europe has been transformed in recent years. One day covers the medina, Kasbah Museum, and Cafe Hafa sunset. Two days allows for Cap Spartel, the Hercules Caves, the new marina, and a day trip to the white-washed town of Asilah. Essential if arriving by ferry from Spain.',
    dayTrips: 'Asilah, Cap Spartel, Hercules Caves',
    link: '/tangier',
  },
] as const;

/* ===============================================================
   DATA: TRIP TYPE RECOMMENDATIONS
   =============================================================== */

const tripTypes = [
  {
    type: 'Cities Only',
    icon: MapPin,
    idealDays: '7-10 days',
    description: 'Focus on Morocco\'s imperial cities and cultural sites. Best for history buffs, photographers, and food lovers who want to explore medinas, palaces, museums, and culinary traditions in depth.',
    itinerary: 'Casablanca (1) - Rabat (1) - Fes (2-3) - Chefchaouen (1-2) - Marrakech (2-3)',
    bestFor: 'Culture, history, food, photography',
  },
  {
    type: 'Desert + Cities',
    icon: Sunrise,
    idealDays: '7-10 days',
    description: 'The most popular combination. Experience the imperial cities and the magic of the Sahara Desert. Includes dramatic mountain passes, ancient kasbahs, and a night under the stars in the dunes.',
    itinerary: 'Marrakech (2) - Desert via Dades (3) - Fes (2-3)',
    bestFor: 'Adventure, culture, photography, unique experiences',
  },
  {
    type: 'Full Circuit',
    icon: Globe,
    idealDays: '12-14 days',
    description: 'The comprehensive Morocco experience covering north to south. Includes imperial cities, the Sahara, coastal towns, and mountain regions. Requires good planning but delivers the complete picture of Morocco\'s diversity.',
    itinerary: 'Casablanca (1) - Rabat (1) - Chefchaouen (2) - Fes (2) - Desert (3) - Marrakech (2) - Essaouira (1-2)',
    bestFor: 'First-time visitors with time, comprehensive travel',
  },
  {
    type: 'Relaxation Focused',
    icon: Heart,
    idealDays: '7-10 days',
    description: 'Slow-paced trip combining Morocco\'s most beautiful coastal towns with selective cultural experiences. Emphasis on riads, hammams, beach time, cooking classes, and leisurely medina exploration.',
    itinerary: 'Marrakech (3) - Essaouira (2-3) - Agadir/Taghazout (2-3)',
    bestFor: 'Couples, relaxation seekers, beach lovers',
  },
  {
    type: 'Adventure & Outdoors',
    icon: Mountain,
    idealDays: '10-14 days',
    description: 'For active travelers who want hiking, surfing, and desert adventures alongside cultural highlights. Includes Atlas Mountains trekking, Sahara exploration, and Atlantic coast activities.',
    itinerary: 'Marrakech (2) - Atlas Mountains (2-3) - Desert (3) - Essaouira/Taghazout (2-3) - Fes (2)',
    bestFor: 'Active travelers, hikers, surfers, nature lovers',
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARIES
   =============================================================== */

const sampleItineraries = [
  {
    days: 5,
    title: '5 Days: Southern Morocco Highlights',
    icon: Clock,
    pace: 'Fast-paced',
    bestFor: 'Limited vacation time, first taste of Morocco',
    schedule: [
      { day: 'Day 1', location: 'Marrakech', activities: 'Arrive, explore Jemaa el-Fna, souks, evening food stalls' },
      { day: 'Day 2', location: 'Marrakech', activities: 'Bahia Palace, Majorelle Garden, Saadian Tombs, hammam' },
      { day: 'Day 3', location: 'Marrakech to Desert', activities: 'Drive via Ait Benhaddou, Dades Gorge, overnight Dades' },
      { day: 'Day 4', location: 'Desert', activities: 'Todra Gorge, drive to Merzouga, camel trek, desert camp' },
      { day: 'Day 5', location: 'Desert to Marrakech', activities: 'Desert sunrise, return drive to Marrakech, depart' },
    ],
  },
  {
    days: 7,
    title: '7 Days: Marrakech, Desert & Fes',
    icon: Calendar,
    pace: 'Moderate',
    bestFor: 'Most popular trip length, great balance of experiences',
    schedule: [
      { day: 'Day 1', location: 'Marrakech', activities: 'Arrive, Jemaa el-Fna, souks, street food dinner' },
      { day: 'Day 2', location: 'Marrakech', activities: 'Bahia Palace, Majorelle Garden, mellah, cooking class' },
      { day: 'Day 3', location: 'Marrakech to Dades', activities: 'Drive via Ait Benhaddou, Ouarzazate, Dades Gorge' },
      { day: 'Day 4', location: 'Dades to Merzouga', activities: 'Todra Gorge, drive to Merzouga, camel trek, desert camp' },
      { day: 'Day 5', location: 'Merzouga to Fes', activities: 'Desert sunrise, drive to Fes via Ziz Gorge and Ifrane' },
      { day: 'Day 6', location: 'Fes', activities: 'Guided medina tour, tanneries, Bou Inania Madrasa, mellah' },
      { day: 'Day 7', location: 'Fes', activities: 'Merenid Tombs sunrise, Dar Batha Museum, depart' },
    ],
  },
  {
    days: 10,
    title: '10 Days: North to South Explorer',
    icon: Compass,
    pace: 'Comfortable',
    bestFor: 'Balanced trip covering major highlights without rushing',
    schedule: [
      { day: 'Day 1', location: 'Casablanca/Rabat', activities: 'Arrive, Hassan II Mosque or Rabat Kasbah des Oudaias' },
      { day: 'Day 2', location: 'Fes', activities: 'Travel to Fes, evening medina walk, rooftop dinner' },
      { day: 'Day 3', location: 'Fes', activities: 'Full-day medina tour: tanneries, madrasas, mellah, souks' },
      { day: 'Day 4', location: 'Chefchaouen', activities: 'Drive to Chefchaouen, explore blue medina, sunset hike' },
      { day: 'Day 5', location: 'Chefchaouen to Fes', activities: 'Morning Akchour waterfalls, return to Fes' },
      { day: 'Day 6', location: 'Fes to Dades', activities: 'Drive south via Midelt, Ziz Gorge, Erfoud to Dades' },
      { day: 'Day 7', location: 'Dades to Merzouga', activities: 'Todra Gorge, drive to Merzouga, camel trek, desert camp' },
      { day: 'Day 8', location: 'Merzouga to Marrakech', activities: 'Desert sunrise, drive via Ouarzazate, Ait Benhaddou' },
      { day: 'Day 9', location: 'Marrakech', activities: 'Medina, Jemaa el-Fna, Bahia Palace, Majorelle Garden' },
      { day: 'Day 10', location: 'Marrakech', activities: 'Morning hammam, souks shopping, cooking class, depart' },
    ],
  },
  {
    days: 14,
    title: '14 Days: The Complete Morocco Experience',
    icon: Star,
    pace: 'Relaxed',
    bestFor: 'First-time visitors who want to see it all, comprehensive trip',
    schedule: [
      { day: 'Day 1', location: 'Casablanca', activities: 'Arrive, Hassan II Mosque, Corniche, Art Deco walk' },
      { day: 'Day 2', location: 'Rabat', activities: 'Hassan Tower, Kasbah des Oudaias, Chellah ruins' },
      { day: 'Day 3', location: 'Chefchaouen', activities: 'Drive to Chefchaouen, explore blue medina, rooftop dinner' },
      { day: 'Day 4', location: 'Chefchaouen', activities: 'Spanish Mosque hike, Akchour waterfalls, Ras el-Maa' },
      { day: 'Day 5', location: 'Fes', activities: 'Drive to Fes, evening medina walk, street food tour' },
      { day: 'Day 6', location: 'Fes', activities: 'Full-day guided tour: tanneries, madrasas, mellah, souks' },
      { day: 'Day 7', location: 'Fes/Meknes', activities: 'Day trip to Meknes and Volubilis Roman ruins' },
      { day: 'Day 8', location: 'Fes to Dades', activities: 'Drive south via Midelt, Ziz Gorge to Dades Valley' },
      { day: 'Day 9', location: 'Dades to Merzouga', activities: 'Todra Gorge, drive to Merzouga, camel trek, desert camp' },
      { day: 'Day 10', location: 'Merzouga to Ouarzazate', activities: 'Desert sunrise, drive via Draa Valley, overnight Ouarzazate' },
      { day: 'Day 11', location: 'Ouarzazate to Marrakech', activities: 'Ait Benhaddou morning, Atlas Mountain pass, arrive Marrakech' },
      { day: 'Day 12', location: 'Marrakech', activities: 'Medina, Jemaa el-Fna, Bahia Palace, Saadian Tombs, hammam' },
      { day: 'Day 13', location: 'Essaouira', activities: 'Day trip: medina, ramparts, port, seafood lunch, beach' },
      { day: 'Day 14', location: 'Marrakech', activities: 'Majorelle Garden, cooking class, souks shopping, depart' },
    ],
  },
] as const;

/* ===============================================================
   DATA: PRACTICAL TIPS
   =============================================================== */

const planningTips = [
  {
    icon: Plane,
    title: 'Factor In Travel Days',
    tip: 'Morocco\'s distances are longer than they appear on a map. Marrakech to Fes via the desert is a 3-day journey by road. Internal flights between Marrakech, Fes, and Casablanca take just 1 hour and cost from 400 MAD, saving a full day of driving.',
  },
  {
    icon: Sun,
    title: 'Consider the Season',
    tip: 'In summer (July-August), heat limits sightseeing to mornings and evenings, so you may need extra days. Spring and fall allow full days of activity. Winter is pleasant on the coast but cold in the mountains and desert.',
  },
  {
    icon: Users,
    title: 'Group vs Solo Travel',
    tip: 'Guided group tours typically cover Morocco in 7-10 days at a fast pace. Independent travelers should add 1-2 buffer days for flexibility, delayed transport, or spontaneous discoveries.',
  },
  {
    icon: Tent,
    title: 'Don\'t Over-Plan',
    tip: 'Some of the best Morocco experiences are unplanned: a tea invitation from a shopkeeper, discovering a hidden riad, or an impromptu cooking lesson. Leave at least 1-2 days without fixed plans in your itinerary.',
  },
  {
    icon: AlertTriangle,
    title: 'Account for Jet Lag',
    tip: 'If flying from North America or Asia, plan a lighter first day. Morocco is on GMT+1 year-round. Don\'t schedule a guided tour for your arrival morning after a transatlantic flight.',
  },
  {
    icon: Sparkles,
    title: 'Quality Over Quantity',
    tip: 'It\'s better to spend 3 days in Marrakech and 3 in Fes than to rush through 6 cities in a week. Morocco rewards slow travel and deep exploration. Each medina alone could fill multiple days.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'How Many Days in Marrakech?', href: '/how-many-days-in-marrakech', description: 'Day-by-day breakdown for planning your time in Marrakech' },
  { title: 'Morocco 7-Day Itinerary', href: '/morocco-7-day-itinerary', description: 'The most popular Morocco trip length with detailed daily plans' },
  { title: 'Morocco 10-Day Itinerary', href: '/morocco-10-day-itinerary', description: 'Our recommended trip length for first-time visitors' },
  { title: 'Morocco 14-Day Itinerary', href: '/morocco-2-week-itinerary', description: 'The comprehensive 2-week Morocco experience' },
  { title: 'Is Morocco Expensive?', href: '/is-morocco-expensive', description: 'Real costs breakdown and budget tips for 2026' },
  { title: 'Morocco Budget Guide', href: '/morocco-budget-guide', description: 'How to travel Morocco on any budget' },
  { title: 'Best Time to Visit Morocco', href: '/best-time-visit-morocco', description: 'Month-by-month weather and crowd guide' },
  { title: 'First Time in Morocco', href: '/first-time', description: 'Essential tips for first-time Morocco visitors' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function HowManyDaysInMoroccoPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* -- JSON-LD -- */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ============== HERO ============== */}
      <section className="relative h-[55vh] min-h-[420px]">
        <img
          src="/images/hero-morocco.webp"
          alt="Panoramic view of Morocco showing diverse landscapes from imperial city medinas to Sahara Desert dunes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-4xl leading-tight">
            How Many Days Do You Need in Morocco?
          </h1>
          <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl max-w-2xl opacity-95">
            The definitive 2026 guide to planning your ideal Morocco trip length
          </p>
        </div>
      </section>

      {/* ============== BREADCRUMBS ============== */}
      <nav aria-label="Breadcrumb" className="container-morocco py-3 text-sm text-gray-500">
        <ol className="flex items-center gap-1 flex-wrap">
          <li className="flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <Link href="/" className="hover:text-[#A0522D] transition-colors">Home</Link>
          </li>
          <ChevronRight className="w-3.5 h-3.5" />
          <li className="text-[#A0522D] font-medium">How Many Days in Morocco</li>
        </ol>
      </nav>

      {/* ============== INTRO ============== */}
      <section className="container-morocco py-8">
        <div className="max-w-3xl mx-auto">
          <div className="card-moroccan p-6 md:p-8 border-l-4 border-[#A0522D]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[#A0522D] mt-1 flex-shrink-0" />
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-3">
                  The Quick Answer
                </h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>The ideal Morocco trip is 10-14 days</strong>, giving you time to explore the imperial cities, Sahara Desert, and coast without rushing. However, <strong>7 days is the most popular trip length</strong> and sufficient for a highlights tour of Marrakech, the desert, and Fes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>A minimum of 5 days</strong> lets you experience one region well, typically southern Morocco (Marrakech + desert) or northern Morocco (Fes + Chefchaouen). With fewer than 5 days, you are better off focusing on a single city like Marrakech.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              &quot;How many days do I need in Morocco?&quot; is the number one trip planning question we receive, and the answer depends on your travel style, interests, and which regions you want to explore. Morocco is deceptively large -- roughly the size of California -- with landscapes ranging from Sahara dunes to snow-capped mountains, Atlantic beaches to ancient medinas.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              The country&apos;s transport infrastructure has improved dramatically with the Al Boraq high-speed train between Casablanca and Tangier, but travel between major destinations still takes significant time. Marrakech to Fes is an 8-hour drive or a 7-hour bus ride. Understanding these distances is essential for planning a realistic itinerary.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              This guide provides data-driven recommendations based on thousands of traveler experiences. We break down the ideal number of days for each city, offer sample itineraries for 5 to 14 days, and help you choose the right trip length for your travel style.
            </p>
          </div>
        </div>
      </section>

      {/* ============== AT A GLANCE ============== */}
      <section className="container-morocco py-8">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Morocco Trip Length at a Glance
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {[
            { days: '5 Days', label: 'Minimum', color: '#C4960C', desc: 'One region: Marrakech + desert OR Fes + Chefchaouen', pace: 'Fast-paced' },
            { days: '7 Days', label: 'Most Popular', color: '#A0522D', desc: 'Marrakech, Sahara Desert via Dades, and Fes', pace: 'Moderate' },
            { days: '10 Days', label: 'Recommended', color: '#A0522D', desc: 'Imperial cities, desert, coast, relaxed pace', pace: 'Comfortable' },
            { days: '14 Days', label: 'Ideal', color: '#C4960C', desc: 'Complete Morocco: north, south, coast, mountains', pace: 'Relaxed' },
          ].map((item) => (
            <div key={item.days} className="card-moroccan p-5 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-3" style={{ backgroundColor: `${item.color}15` }}>
                <Calendar className="w-7 h-7" style={{ color: item.color }} />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900">{item.days}</h3>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mt-1 mb-3" style={{ backgroundColor: item.color }}>
                {item.label}
              </span>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              <p className="text-gray-500 text-xs mt-2">Pace: {item.pace}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============== CITY-BY-CITY RECOMMENDATIONS ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          City-by-City Day Recommendations
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          How long to spend in each major Morocco destination, based on traveler feedback and our own experience
        </p>

        <div className="space-y-6 max-w-4xl mx-auto">
          {cityRecommendations.map((city) => {
            const Icon = city.icon;
            return (
              <div key={city.city} className="card-moroccan p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">
                        <Link href={city.link} className="hover:text-[#A0522D] transition-colors">{city.city}</Link>
                      </h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold bg-[#A0522D]/10 text-[#A0522D]">
                        <Clock className="w-3 h-3" />
                        {city.daysMin}-{city.daysIdeal} days
                      </span>
                      <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${city.priority === 'Must Visit' ? 'bg-[#C4960C]/15 text-[#C4960C]' : city.priority === 'Highly Recommended' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                        {city.priority}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3">{city.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600"><strong>Highlights:</strong> {city.highlights}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600"><strong>Day trips:</strong> {city.dayTrips}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== TRIP TYPES ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Trip Length by Travel Style
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Your ideal trip length depends on your interests and travel style. Here are five popular approaches.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {tripTypes.map((trip) => {
              const Icon = trip.icon;
              return (
                <div key={trip.type} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C4960C]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900">{trip.type}</h3>
                      <span className="text-sm font-semibold text-[#A0522D]">{trip.idealDays}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-3">{trip.description}</p>
                  <div className="bg-gray-50 rounded-lg p-3 text-sm mb-2">
                    <p className="font-semibold text-gray-800 mb-1">Sample Route:</p>
                    <p className="text-gray-600">{trip.itinerary}</p>
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    Best for: {trip.bestFor}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== SAMPLE ITINERARIES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Sample Itineraries: 5, 7, 10 & 14 Days
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Detailed day-by-day schedules for the most popular trip lengths
        </p>

        <div className="space-y-8 max-w-4xl mx-auto">
          {sampleItineraries.map((itinerary) => {
            const Icon = itinerary.icon;
            return (
              <div key={itinerary.days} className="card-moroccan p-5 md:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">{itinerary.title}</h3>
                    <div className="flex gap-3 text-sm text-gray-500">
                      <span>Pace: {itinerary.pace}</span>
                      <span>Best for: {itinerary.bestFor}</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {itinerary.schedule.map((day) => (
                    <div key={day.day} className="flex items-start gap-3 pl-2 border-l-2 border-[#A0522D]/20 hover:border-[#A0522D] transition-colors">
                      <div className="flex-shrink-0">
                        <span className="inline-block px-2 py-0.5 bg-[#A0522D]/10 text-[#A0522D] text-xs font-bold rounded">{day.day}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">{day.location}</span>
                        <p className="text-gray-600 text-sm">{day.activities}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    href={`/morocco-${itinerary.days === 14 ? '2-week' : `${itinerary.days}-day`}-itinerary`}
                    className="inline-flex items-center gap-2 text-[#A0522D] hover:text-[#8B4513] font-medium text-sm transition-colors"
                  >
                    View detailed {itinerary.days}-day itinerary
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============== PLANNING TIPS ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
            Planning Tips to Maximize Your Time
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
            Essential advice for making the most of however many days you have
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {planningTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#C4960C]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-display)] text-base font-bold text-gray-900">{tip.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============== TRANSPORT OVERVIEW ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-3">
          Travel Times Between Major Cities
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Understanding Morocco&apos;s distances is crucial for realistic trip planning
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#A0522D] text-white">
                    <th className="px-4 py-3 text-left font-semibold">Route</th>
                    <th className="px-4 py-3 text-center font-semibold">By Car</th>
                    <th className="px-4 py-3 text-center font-semibold">By Bus</th>
                    <th className="px-4 py-3 text-center font-semibold">By Train</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { route: 'Marrakech - Fes', car: '5.5 hours', bus: '7 hours', train: '7 hours' },
                    { route: 'Marrakech - Essaouira', car: '2.5 hours', bus: '3 hours', train: 'No service' },
                    { route: 'Marrakech - Merzouga (Sahara)', car: '8 hours', bus: '10 hours', train: 'No service' },
                    { route: 'Fes - Chefchaouen', car: '3.5 hours', bus: '4 hours', train: 'No service' },
                    { route: 'Casablanca - Marrakech', car: '2.5 hours', bus: '3.5 hours', train: '2.5 hours' },
                    { route: 'Casablanca - Tangier', car: '3.5 hours', bus: '5 hours', train: '2 hours (Al Boraq)' },
                    { route: 'Fes - Merzouga (Sahara)', car: '7 hours', bus: '9 hours', train: 'No service' },
                    { route: 'Tangier - Chefchaouen', car: '2 hours', bus: '3 hours', train: 'No service' },
                  ].map((row) => (
                    <tr key={row.route} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{row.route}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.car}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.bus}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{row.train}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 flex items-start gap-2 text-sm text-gray-500">
            <Lightbulb className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
            <p>
              <strong>Pro tip:</strong> Internal flights between Marrakech, Fes, and Casablanca cost from 400 MAD one way and take just 1 hour. Royal Air Maroc and Air Arabia Morocco operate daily flights. This can save you an entire day of ground transport.
            </p>
          </div>
        </div>
      </section>

      {/* ============== FAQ ============== */}
      <section className="bg-white py-10">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <details key={faq.name} className="card-moroccan p-5 group">
                <summary className="flex items-center justify-between cursor-pointer list-none font-[family-name:var(--font-display)] font-bold text-gray-900 hover:text-[#A0522D] transition-colors">
                  {faq.name}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                </summary>
                <p className="mt-3 text-gray-700 leading-relaxed text-sm">{faq.acceptedAnswer.text}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ============== RELATED GUIDES ============== */}
      <section className="container-morocco py-10">
        <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-gray-900 text-center mb-8">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:border-[#A0522D] transition-colors group">
              <h3 className="font-[family-name:var(--font-display)] font-bold text-gray-900 group-hover:text-[#A0522D] transition-colors mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
              <span className="inline-flex items-center gap-1 text-[#A0522D] text-sm font-medium mt-3">
                Read guide <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ============== CTA ============== */}
      <section className="bg-[#A0522D] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Plan Your Morocco Trip?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6 leading-relaxed">
            Whether you have 5 days or 2 weeks, Morocco will exceed your expectations. Browse our detailed itineraries and city guides to start building your perfect trip.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Browse Itineraries
            </Link>
            <Link
              href="/morocco-trip-cost"
              className="inline-flex items-center gap-2 bg-transparent text-white border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <CheckCircle className="w-5 h-5" />
              Estimate Trip Cost
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

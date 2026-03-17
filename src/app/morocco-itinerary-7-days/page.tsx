import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Sun,
  Sunset,
  Moon,
  Coins,
  Car,
  Train,
  UtensilsCrossed,
  Camera,
  Star,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Calendar,
  Wallet,
  Mountain,
  Building2,
  Compass,
  Luggage,
  Coffee,
  Bed,
  Thermometer,
  Route,
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: '7 Day Morocco Itinerary 2026: Marrakech, Desert, Fes Day-by-Day Guide | CityGuide',
  description:
    'The perfect 7 day Morocco itinerary covering Marrakech, Atlas Mountains, Sahara Desert, and Fes. Day-by-day breakdown with morning/afternoon/evening plans, restaurant suggestions, transport details, and budget breakdown in MAD.',
  keywords: [
    '7 day Morocco itinerary',
    'Morocco itinerary 1 week',
    'Morocco 7 days',
    'Marrakech to Fes itinerary',
    'Morocco desert itinerary',
    'one week Morocco',
    'Morocco itinerary 2026',
    'best Morocco itinerary',
    'Morocco trip planner',
    'Marrakech Sahara Fes route',
    'Morocco budget itinerary',
    'Morocco luxury itinerary',
    'Ait Benhaddou itinerary',
    'Merzouga desert itinerary',
    'Todra Gorge itinerary',
    'Morocco day by day',
  ],
  openGraph: {
    title: '7 Day Morocco Itinerary 2026: The Perfect Week',
    description:
      'Day-by-day Morocco itinerary: Marrakech, Atlas Mountains, Sahara Desert camel trek, Todra Gorge, and Fes. Real costs in MAD and practical transport details.',
    url: 'https://citytoursmorocco.com/morocco-itinerary-7-days',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Marrakech with the Koutoubia Mosque and Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '7 Day Morocco Itinerary 2026',
    description: 'The perfect week in Morocco: Marrakech, desert, and Fes day by day.',
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-itinerary-7-days' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TouristTrip',
      name: '7-Day Morocco Itinerary: Marrakech, Desert & Fes',
      description: 'A week-long Morocco itinerary covering the most iconic destinations from Marrakech to Fes via the Sahara Desert.',
      touristType: ['Cultural', 'Adventure', 'Sightseeing'],
      itinerary: {
        '@type': 'ItemList',
        numberOfItems: 7,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Day 1: Arrive Marrakech' },
          { '@type': 'ListItem', position: 2, name: 'Day 2: Marrakech Exploration' },
          { '@type': 'ListItem', position: 3, name: 'Day 3: Atlas Mountains' },
          { '@type': 'ListItem', position: 4, name: 'Day 4: Desert Road via Ait Benhaddou' },
          { '@type': 'ListItem', position: 5, name: 'Day 5: Merzouga & Sahara Desert' },
          { '@type': 'ListItem', position: 6, name: 'Day 6: Drive to Fes via Todra Gorge' },
          { '@type': 'ListItem', position: 7, name: 'Day 7: Fes & Departure' },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
        { '@type': 'ListItem', position: 2, name: '7-Day Morocco Itinerary', item: 'https://citytoursmorocco.com/morocco-itinerary-7-days' },
      ],
    },
  ],
};

/* =====================================================================
   ITINERARY DATA
   ===================================================================== */

interface DayPlan {
  day: number;
  title: string;
  location: string;
  image: string;
  imageAlt: string;
  overview: string;
  morning: string;
  afternoon: string;
  evening: string;
  transport: string;
  eating: string;
  estimatedCost: { budget: string; midRange: string; luxury: string };
  tips: string[];
}

const itinerary: DayPlan[] = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    location: 'Marrakech',
    image: '/images/hero-marrakech.webp',
    imageAlt: 'Panoramic view of Marrakech with the Koutoubia Mosque and Atlas Mountains',
    overview: 'Land in Marrakech, settle into your riad in the medina, and ease into Morocco with an evening stroll through the sensory overload of Jemaa el-Fnaa.',
    morning: 'Arrive at Marrakech Menara Airport. Taxi or pre-arranged transfer to your riad (from 150 MAD for a taxi, or from 30 MAD shared airport bus to Jemaa el-Fnaa). Check into your riad, enjoy the welcome mint tea, and rest after your flight.',
    afternoon: 'Take a gentle walk through the northern souks near Mouassine. Browse without buying on day one -- get a feel for prices and the haggling rhythm. Visit the Mouassine Fountain and the small Mouassine Museum of Perfumes if open. Get your bearings in the medina.',
    evening: 'Head to Jemaa el-Fnaa as the sun sets. Watch the food stalls set up, listen to the musicians, and join the crowds. Eat at the square for your first meal -- grilled meats, snail soup, fresh orange juice (4 MAD per glass). For a sit-down option, try Cafe des Epices on Rahba Kedima for rooftop views.',
    transport: 'Airport taxi: from 150 MAD. Airport bus (line 19): 30 MAD. Walking within the medina.',
    eating: 'Jemaa el-Fnaa food stalls (from 30 MAD per person), Cafe des Epices (from 80 MAD), Nomad (from 150 MAD for modern Moroccan cuisine).',
    estimatedCost: { budget: '400 MAD', midRange: '800 MAD', luxury: '2,000 MAD' },
    tips: [
      'Pre-arrange your riad transfer to avoid taxi negotiation stress on arrival',
      'Do not buy anything in the souks on day one -- use it as reconnaissance',
      'Jemaa el-Fnaa food stalls in the center of the square are for tourists; locals eat at the edges',
    ],
  },
  {
    day: 2,
    title: 'Marrakech Deep Dive',
    location: 'Marrakech',
    image: '/images/hero-bahia-palace.webp',
    imageAlt: 'Ornate interior courtyard of Bahia Palace with zellige tiles and painted cedar ceilings',
    overview: 'A full day exploring Marrakech\'s finest palaces, gardens, and cultural highlights, capped with a cooking class to learn tagine and couscous.',
    morning: 'Start early at Bahia Palace (70 MAD entry) before the tour groups arrive. The 19th-century palace showcases the finest zellige, carved cedar, and painted ceilings in Marrakech. Then walk to the nearby Saadian Tombs (70 MAD) for exquisite Andalusian funerary architecture.',
    afternoon: 'Taxi to Jardin Majorelle (150 MAD entry, plus 30 MAD for the Berber Museum). The cobalt-blue garden created by Jacques Majorelle and later owned by Yves Saint Laurent is a refreshing escape from the medina heat. Allow 1-2 hours. Afterward, visit the YSL Museum next door (100 MAD) if fashion interests you.',
    evening: 'Take a Moroccan cooking class (from 400 MAD per person for 3-4 hours including market visit and meal). Learn to prepare tagine, Moroccan salads, and pastilla. You eat what you cook for dinner. Alternatively, dine at Al Fassia (Moroccan fine dining run entirely by women, mains from 120 MAD).',
    transport: 'Walking within the medina. Taxi to Majorelle: from 20 MAD each way.',
    eating: 'Cooking class dinner or Al Fassia (from 150 MAD), street food lunch in the souk (from 30 MAD).',
    estimatedCost: { budget: '500 MAD', midRange: '1,200 MAD', luxury: '3,000 MAD' },
    tips: [
      'Bahia Palace opens at 09:00 -- arrive right at opening to beat the crowds',
      'Combine Majorelle and YSL Museum on one ticket if available',
      'Book your cooking class the day before through your riad',
    ],
  },
  {
    day: 3,
    title: 'Atlas Mountains Day Trip',
    location: 'Atlas Mountains',
    image: '/images/hero-atlas.webp',
    imageAlt: 'Panoramic view of the High Atlas Mountains with terraced Berber villages and snow-capped peaks',
    overview: 'Escape the city into the High Atlas Mountains for Berber villages, stunning scenery, and the spectacular Ouzoud Waterfalls or an Imlil Valley trek.',
    morning: 'Depart Marrakech at 08:00 for the Atlas Mountains. Option A: Ouzoud Waterfalls (2.5-hour drive, 150m cascading falls with Barbary macaques). Option B: Imlil Valley (1.5-hour drive, gateway to Toubkal, Morocco\'s highest peak). Both are equally rewarding. Hire a shared day trip through your riad (from 400 MAD per person) or rent a car.',
    afternoon: 'At Ouzoud: hike down to the base of the falls, take a boat ride (20 MAD), and eat grilled tagine at the riverside restaurants (from 60 MAD). At Imlil: hike to the Berber village of Armed (1 hour each way), enjoy lunch in a traditional Berber home (from 80 MAD including mint tea), and admire the terraced walnut and cherry orchards.',
    evening: 'Return to Marrakech by 18:00-19:00. Refresh at your riad and head out for dinner. Try Le Jardin (hidden garden restaurant in the medina, mains from 100 MAD) or the rooftop restaurant at Terrasse des Epices.',
    transport: 'Shared day trip: from 400 MAD per person. Private driver: from 1,000 MAD for the vehicle. Return by evening.',
    eating: 'Lunch at falls/village: from 60 MAD. Dinner in Marrakech: from 100 MAD.',
    estimatedCost: { budget: '600 MAD', midRange: '1,000 MAD', luxury: '2,500 MAD' },
    tips: [
      'Ouzoud is better for non-hikers; Imlil is better for those wanting a mountain experience',
      'Bring layers -- the mountains are significantly cooler than Marrakech',
      'A shared minibus trip is the most economical option and includes hotel pickup',
    ],
  },
  {
    day: 4,
    title: 'Desert Road: Ait Benhaddou & Ouarzazate',
    location: 'Ait Benhaddou / Ouarzazate / Dades Valley',
    image: '/images/hero-ait-benhaddou.webp',
    imageAlt: 'The ancient fortified village of Ait Benhaddou with its earthen towers against a blue sky',
    overview: 'The epic drive from Marrakech toward the desert via the Tizi n\'Tichka pass, the UNESCO-listed Ait Benhaddou kasbah, and the film studios of Ouarzazate.',
    morning: 'Depart Marrakech at 07:00 for the Tizi n\'Tichka pass (2,260m altitude). The drive is spectacular, winding through the High Atlas with stunning valley views. Stop at the pass for photos and a hot coffee. Arrive at Ait Benhaddou by 10:30. This UNESCO World Heritage ksar (fortified village) has appeared in Gladiator, Game of Thrones, and Lawrence of Arabia.',
    afternoon: 'Explore Ait Benhaddou on foot (allow 1.5-2 hours). Cross the river and climb to the top for panoramic views. Continue to Ouarzazate (30 minutes) for lunch and a visit to Atlas Studios (50 MAD entry), where countless Hollywood and Bollywood productions have been filmed. Then drive through the Dades Valley toward the desert.',
    evening: 'Arrive at your guesthouse in the Dades Valley or continue to Tinghir area by 18:00-19:00. The drive through the Valley of Roses and Dades Gorge is breathtaking in the golden hour. Enjoy a simple but delicious dinner at your guesthouse (set menu: from 80 MAD).',
    transport: 'Private driver for 3-day desert circuit: from 2,500 MAD total. Shared tour: from 1,200 MAD for 3 days. Distance: ~350km today.',
    eating: 'Lunch in Ouarzazate: from 60 MAD. Dinner at guesthouse: from 80 MAD.',
    estimatedCost: { budget: '500 MAD', midRange: '900 MAD', luxury: '2,000 MAD' },
    tips: [
      'Most travelers do days 4-6 as a 3-day desert tour from Marrakech ending in Fes',
      'The Tizi n\'Tichka pass can be cold even in summer -- bring a jacket',
      'Ait Benhaddou is best photographed in the morning light',
    ],
  },
  {
    day: 5,
    title: 'Sahara Desert & Merzouga',
    location: 'Merzouga / Erg Chebbi',
    image: '/images/hero-desert.webp',
    imageAlt: 'Golden sand dunes of the Sahara Desert at sunrise with a camel caravan silhouetted against the sky',
    overview: 'The highlight of many Morocco trips: camel trekking into the Erg Chebbi dunes, a night in a desert camp under a canopy of stars, and a sunrise you will never forget.',
    morning: 'If staying in the Dades/Todra area, drive to Merzouga via the Todra Gorge (stop for 30 minutes to admire the 300m canyon walls). Arrive in Merzouga by lunchtime. Check into your desert hotel or auberge at the edge of the dunes. Lunch at the hotel (from 80 MAD) and rest during the hottest hours.',
    afternoon: 'At 16:00-17:00 (depending on season), mount your camel for the 1-1.5 hour trek into the Erg Chebbi dunes. The camel ride takes you deep into the sand sea, passing dunes reaching up to 150 meters high. Arrive at your desert camp as the sun begins to set. Watch the sunset from the top of a nearby dune.',
    evening: 'Dinner at the desert camp around a communal table (included in most camp packages). After dinner, Berber musicians play drums and sing traditional songs around a campfire under the Milky Way. The star-gazing in the Sahara is extraordinary -- no light pollution for hundreds of kilometers. Sleep in a Berber-style tent.',
    transport: 'Part of 3-day circuit. Camel trek: included in most desert tours or from 300 MAD if booked separately.',
    eating: 'All meals typically included in desert tour package. Lunch: from 80 MAD if separate. Camp dinner: included.',
    estimatedCost: { budget: '400 MAD', midRange: '800 MAD', luxury: '3,000 MAD' },
    tips: [
      'Luxury camps offer private tents with real beds, en-suite bathrooms, and hot showers',
      'Budget camps are simpler but the desert experience is equally magical',
      'Bring a scarf to wrap around your face during the camel ride -- sand gets everywhere',
      'Wake before dawn to watch the sunrise from the dunes -- it is unforgettable',
    ],
  },
  {
    day: 6,
    title: 'Drive to Fes via Todra Gorge & Ifrane',
    location: 'Todra Gorge / Ifrane / Fes',
    image: '/images/hero-todra-gorge.webp',
    imageAlt: 'The towering walls of Todra Gorge with a narrow river running through the canyon floor',
    overview: 'A long but scenic driving day from the desert to Fes, passing through the dramatic Todra Gorge, the cedar forests of the Middle Atlas, and the "Switzerland of Morocco" town of Ifrane.',
    morning: 'Wake for sunrise over the Sahara dunes (the single best photo opportunity of the trip). Return to Merzouga by camel or 4x4. Breakfast, shower, and depart by 08:00-09:00. If you have not already visited Todra Gorge, stop here for 45 minutes to walk between the 300m canyon walls.',
    afternoon: 'Continue north through the Middle Atlas Mountains. Stop in Midelt for a roadside lunch (from 40 MAD). The landscape shifts from desert to cedar forest as you climb. Stop at the Azrou Cedar Forest to see the wild Barbary macaques. Pass through Ifrane, a surreal European-looking town at 1,650m altitude with flower gardens and a famous stone lion statue.',
    evening: 'Arrive in Fes by 17:00-18:00. Check into your riad in the Fes el-Bali medina. Enjoy mint tea and rest. For dinner, walk to Cafe Clock (famous for its camel burger, 85 MAD) or ask your riad to prepare a traditional dinner (from 150 MAD).',
    transport: 'Part of 3-day circuit. Total driving distance: approximately 480km (8-9 hours with stops).',
    eating: 'Lunch in Midelt: from 40 MAD. Dinner at Cafe Clock: from 80 MAD.',
    estimatedCost: { budget: '400 MAD', midRange: '700 MAD', luxury: '1,800 MAD' },
    tips: [
      'This is the longest driving day -- bring snacks, water, and entertainment',
      'The Azrou cedar forest monkeys are wild but habituated to humans -- do not feed them',
      'Ifrane is dramatically different from anything else in Morocco -- worth a 20-minute stop',
    ],
  },
  {
    day: 7,
    title: 'Fes Medina & Departure',
    location: 'Fes',
    image: '/images/hero-fes-tanneries.webp',
    imageAlt: 'Aerial view of the Chouara tanneries in Fes with colorful dye vats and the medina in the background',
    overview: 'A packed final day exploring the world\'s largest car-free urban area: the magnificent Fes el-Bali medina with its tanneries, mosques, madrasas, and ancient trades.',
    morning: 'Start at Bab Boujloud (the iconic Blue Gate) and enter the Fes el-Bali medina. Visit the Bou Inania Madrasa (30 MAD), one of the finest examples of Marinid architecture. Walk through the spice and metalwork souks toward the Karaouine Mosque (exterior only for non-Muslims), founded in 859 AD and often cited as the world\'s oldest continuously operating university.',
    afternoon: 'Visit the Chouara Tanneries (viewed from the surrounding leather shops -- buy a sprig of mint to hold under your nose). The sight of workers dyeing leather in ancient stone vats using techniques unchanged for centuries is unforgettable. Then visit the Nejjarine Museum of Wood Arts (60 MAD) for a quieter cultural experience and rooftop views.',
    evening: 'If departing from Fes: Fes-Saiss Airport is 15km south (taxi: from 120 MAD). If departing from Marrakech: take the Al Boraq high-speed train Fes-to-Marrakech (from 149 MAD, about 7 hours with change in Kenitra). Alternatively, fly Fes to major European cities directly.',
    transport: 'Walking in the medina. Taxi to Fes airport: from 120 MAD. Train Fes-Marrakech: from 149 MAD.',
    eating: 'Breakfast at riad (included). Lunch at The Ruined Garden (from 100 MAD, beautiful garden restaurant). Final snack: sfenj (Moroccan donuts, from 2 MAD each).',
    estimatedCost: { budget: '350 MAD', midRange: '700 MAD', luxury: '1,500 MAD' },
    tips: [
      'Hire a guide for Fes medina (from 300 MAD for half day) -- it is genuinely easy to get lost',
      'The tanneries smell intense -- the mint sprig from leather shop vendors helps',
      'If flying out, book a late afternoon or evening flight to maximize your Fes time',
    ],
  },
];

/* =====================================================================
   BUDGET BREAKDOWN
   ===================================================================== */

const budgetBreakdown = [
  { category: 'Accommodation (7 nights)', budget: '2,100 MAD', midRange: '5,600 MAD', luxury: '17,500 MAD', note: 'Riads and desert camp' },
  { category: 'Food & Drinks', budget: '1,400 MAD', midRange: '3,500 MAD', luxury: '7,000 MAD', note: '3 meals + snacks daily' },
  { category: 'Transport', budget: '1,800 MAD', midRange: '3,000 MAD', luxury: '5,000 MAD', note: 'Flights, tours, taxis' },
  { category: 'Activities & Entry', budget: '800 MAD', midRange: '1,500 MAD', luxury: '4,000 MAD', note: 'Sites, classes, tours' },
  { category: 'Shopping & Souvenirs', budget: '500 MAD', midRange: '1,500 MAD', luxury: '5,000 MAD', note: 'Gifts, crafts, spices' },
  { category: 'Tips & Misc', budget: '400 MAD', midRange: '900 MAD', luxury: '1,500 MAD', note: 'Guides, services, emergency' },
];

const budgetTotals = { budget: '~7,000 MAD', midRange: '~16,000 MAD', luxury: '~40,000 MAD' };

/* =====================================================================
   QUICK STATS
   ===================================================================== */

const quickStats = [
  { icon: <Calendar className="w-5 h-5" />, label: 'Duration', value: '7 Days', detail: '6 nights' },
  { icon: <MapPin className="w-5 h-5" />, label: 'Cities', value: '4 Stops', detail: 'MAR-Atlas-Sahara-FES' },
  { icon: <Route className="w-5 h-5" />, label: 'Distance', value: '~1,100 km', detail: 'Total route' },
  { icon: <Wallet className="w-5 h-5" />, label: 'Budget', value: '7,000 MAD', detail: 'Minimum total' },
  { icon: <Compass className="w-5 h-5" />, label: 'Best Season', value: 'Oct-Apr', detail: 'Mild temperatures' },
  { icon: <Star className="w-5 h-5" />, label: 'Highlight', value: 'Sahara Camp', detail: 'Night under stars' },
];

/* =====================================================================
   PAGE (Server Component)
   ===================================================================== */

export default function SevenDayItineraryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ---- Breadcrumb ---- */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">7-Day Itinerary</li>
        </ol>
      </nav>

      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-marrakech.webp"
            alt="Panoramic view of Marrakech with the Koutoubia Mosque and Atlas Mountains in the background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Trip Planning
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              7-Day Morocco Itinerary: Marrakech, Desert &amp; Fes
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
              The classic one-week route through Morocco, covering medinas, mountains, Sahara dunes, and ancient cities. Day-by-day breakdown with real costs, transport details, and restaurant picks.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ---- Quick Stats ---- */}
      <section className="container-morocco py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickStats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border-primary p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#FAF8F5] text-[#A0522D] mb-2">
                {stat.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide">{stat.label}</p>
              <p className="font-[family-name:var(--font-heading)] font-bold text-lg text-text-primary">{stat.value}</p>
              <p className="text-xs text-text-muted">{stat.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Route Overview ---- */}
      <section className="container-morocco pb-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-6">
            Route Overview
          </h2>
          <div className="prose prose-lg text-text-secondary space-y-4">
            <p>
              This itinerary follows the most popular Morocco route: starting in Marrakech, heading south through the Atlas Mountains and across the Sahara Desert, then finishing in Fes. It covers the three experiences that define a first visit to Morocco: the chaos and beauty of the medinas, the raw majesty of the Sahara, and the historical depth of the imperial cities.
            </p>
            <p>
              The route works in either direction (Fes to Marrakech is equally valid), but Marrakech to Fes is more common because Marrakech has better international flight connections. You will need a combination of organized tours (for the desert section), taxis, and walking.
            </p>
            <p>
              For a longer trip covering more of Morocco, see our{' '}
              <Link href="/morocco-itinerary-14-days" className="text-[#A0522D] underline hover:no-underline">14-day grand tour itinerary</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Route Images ---- */}
      <section className="container-morocco pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: '/images/hero-marrakech.webp', alt: 'Marrakech skyline with Koutoubia Mosque', label: 'Marrakech' },
            { src: '/images/hero-ait-benhaddou.webp', alt: 'Ait Benhaddou fortified village', label: 'Ait Benhaddou' },
            { src: '/images/hero-sahara-sunrise.webp', alt: 'Sahara Desert sunrise with camel silhouettes', label: 'Sahara Desert' },
            { src: '/images/hero-fes-tanneries.webp', alt: 'Fes tanneries with colorful dye vats', label: 'Fes' },
          ].map((img) => (
            <div key={img.label} className="relative rounded-xl overflow-hidden aspect-[4/3]">
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                <p className="text-white font-[family-name:var(--font-heading)] font-bold text-sm">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---- Day-by-Day Itinerary ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-10 text-center">
            Day-by-Day Itinerary
          </h2>

          <div className="space-y-12">
            {itinerary.map((day) => (
              <article key={day.day} className="bg-white rounded-xl border border-border-primary overflow-hidden" id={`day-${day.day}`}>
                {/* Day Header Image */}
                <div className="relative h-48 md:h-64">
                  <img src={day.image} alt={day.imageAlt} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="bg-[#A0522D] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Day {day.day}
                    </span>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mt-2">
                      {day.title}
                    </h3>
                    <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" /> {day.location}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <p className="text-text-secondary leading-relaxed mb-6">{day.overview}</p>

                  {/* Time-of-Day Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-amber-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sun className="w-4 h-4 text-amber-600" />
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-amber-800 text-sm">Morning</h4>
                      </div>
                      <p className="text-sm text-amber-900/80 leading-relaxed">{day.morning}</p>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Sunset className="w-4 h-4 text-orange-600" />
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-orange-800 text-sm">Afternoon</h4>
                      </div>
                      <p className="text-sm text-orange-900/80 leading-relaxed">{day.afternoon}</p>
                    </div>
                    <div className="bg-indigo-50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Moon className="w-4 h-4 text-indigo-600" />
                        <h4 className="font-[family-name:var(--font-heading)] font-bold text-indigo-800 text-sm">Evening</h4>
                      </div>
                      <p className="text-sm text-indigo-900/80 leading-relaxed">{day.evening}</p>
                    </div>
                  </div>

                  {/* Practical Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Car className="w-4 h-4 text-[#A0522D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-text-primary uppercase tracking-wide">Transport</p>
                        <p className="text-sm text-text-secondary">{day.transport}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <UtensilsCrossed className="w-4 h-4 text-[#A0522D] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-text-primary uppercase tracking-wide">Where to Eat</p>
                        <p className="text-sm text-text-secondary">{day.eating}</p>
                      </div>
                    </div>
                  </div>

                  {/* Daily Budget */}
                  <div className="bg-[#FAF8F5] rounded-lg p-4 mb-4">
                    <p className="text-xs font-medium text-text-primary uppercase tracking-wide mb-2">Estimated Daily Cost (Per Person)</p>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-sm"><span className="text-emerald-700 font-medium">Budget:</span> {day.estimatedCost.budget}</span>
                      <span className="text-sm"><span className="text-blue-700 font-medium">Mid-Range:</span> {day.estimatedCost.midRange}</span>
                      <span className="text-sm"><span className="text-amber-700 font-medium">Luxury:</span> {day.estimatedCost.luxury}</span>
                    </div>
                  </div>

                  {/* Tips */}
                  <div>
                    <p className="text-xs font-medium text-text-primary uppercase tracking-wide mb-2">Pro Tips</p>
                    <ul className="space-y-1">
                      {day.tips.map((tip) => (
                        <li key={tip} className="text-sm text-text-secondary flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 flex-shrink-0" /> {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Budget Breakdown ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-4 text-center">
          7-Day Budget Breakdown
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-2xl mx-auto">
          All costs are per person in Moroccan Dirhams (MAD). Budget assumes shared rooms and transport, luxury assumes private vehicles and top-tier riads.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full max-w-4xl mx-auto bg-white rounded-xl border border-border-primary overflow-hidden">
            <thead className="bg-[#FAF8F5]">
              <tr>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-text-primary text-sm">Category</th>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-emerald-700 text-sm">Budget</th>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-blue-700 text-sm">Mid-Range</th>
                <th className="text-left px-4 py-3 font-[family-name:var(--font-heading)] text-amber-700 text-sm">Luxury</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              {budgetBreakdown.map((row) => (
                <tr key={row.category} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 text-sm">
                    <span className="font-medium text-text-primary">{row.category}</span>
                    <br /><span className="text-text-muted text-xs">{row.note}</span>
                  </td>
                  <td className="px-4 py-3 text-sm text-emerald-700 font-medium">{row.budget}</td>
                  <td className="px-4 py-3 text-sm text-blue-700 font-medium">{row.midRange}</td>
                  <td className="px-4 py-3 text-sm text-amber-700 font-medium">{row.luxury}</td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-[#FAF8F5] font-bold">
              <tr>
                <td className="px-4 py-3 text-sm text-text-primary">Total (7 Days)</td>
                <td className="px-4 py-3 text-sm text-emerald-700">{budgetTotals.budget}</td>
                <td className="px-4 py-3 text-sm text-blue-700">{budgetTotals.midRange}</td>
                <td className="px-4 py-3 text-sm text-amber-700">{budgetTotals.luxury}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>

      {/* ---- Essential Tips ---- */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-8 text-center">
            Essential Tips for Your 7-Day Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Calendar className="w-5 h-5" />, title: 'Best Time to Go', text: 'October through April for mild temperatures. March-April offers wildflowers. Avoid July-August when desert temperatures exceed 45 degrees Celsius and Marrakech reaches 40+.' },
              { icon: <Luggage className="w-5 h-5" />, title: 'Packing Essentials', text: 'Layers (cold in mountains, hot in desert), comfortable walking shoes, a scarf for dust/sun, sunscreen SPF50, power adapter (Type C/E), and a small daypack.' },
              { icon: <Wallet className="w-5 h-5" />, title: 'Money Tips', text: 'ATMs are widely available in cities but not in the desert. Carry cash (MAD) for days 4-6. Credit cards accepted at larger hotels and restaurants. Always have small bills for tips.' },
              { icon: <Camera className="w-5 h-5" />, title: 'Photography', text: 'Ask permission before photographing people. The best light is early morning and golden hour. The desert sunrise on Day 5 is the single best photo opportunity of the trip.' },
              { icon: <AlertTriangle className="w-5 h-5" />, title: 'Common Scams', text: 'Beware of "closed" attractions (guide redirects you), false directions for tips, and unofficial guides. Agree on prices before services. Use registered guides through your riad.' },
              { icon: <Thermometer className="w-5 h-5" />, title: 'Health & Hydration', text: 'Drink only bottled water. Stay hydrated especially in the desert. Bring basic medications. Pharmacies in cities are well-stocked and pharmacists often speak French.' },
            ].map((tip) => (
              <div key={tip.title} className="bg-white rounded-xl border border-border-primary p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#FAF8F5] text-[#A0522D]">
                    {tip.icon}
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary">{tip.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Related Pages ---- */}
      <section className="container-morocco py-16">
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-text-primary mb-8 text-center">
          Related Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { title: '14-Day Grand Tour', href: '/morocco-itinerary-14-days', desc: 'Extend your trip with Chefchaouen, Tangier, and Rabat' },
            { title: 'Best Riads in Morocco', href: '/moroccan-riads', desc: 'Where to stay on each night of this itinerary' },
            { title: 'Budget Travel Guide', href: '/budget-travel', desc: 'How to see Morocco on a tight budget' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="bg-white rounded-xl border border-border-primary p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-[family-name:var(--font-heading)] font-bold text-text-primary mb-2 group-hover:text-[#A0522D] transition-colors flex items-center gap-2">
                {link.title} <ArrowRight className="w-4 h-4" />
              </h3>
              <p className="text-text-secondary text-sm">{link.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

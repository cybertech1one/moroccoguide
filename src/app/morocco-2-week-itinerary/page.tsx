import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  Calendar,
  Compass,
  Sun,
  Mountain,
  Camera,
  Wallet,
  Train,
  Bed,
  Utensils,
  CheckCircle,
  AlertTriangle,
  MessageCircleQuestion,
  Navigation,
  Sunrise,
  Landmark,
  Globe,
  Map,
  ShoppingBag,
  Wind,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-2-week-itinerary`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco 2 Week Itinerary 2026 | 14-Day Grand Tour Route & Budget Guide',
  description:
    'Complete 14-day Morocco itinerary covering Casablanca, Rabat, Chefchaouen, Fes, Merzouga Sahara, Ouarzazate, Marrakech, and Essaouira. Day-by-day route with budget, mid-range, and luxury breakdowns, transport links, and accommodation tips.',
  keywords: [
    'Morocco 2 week itinerary',
    '14 day Morocco itinerary',
    'Morocco grand tour',
    'two weeks in Morocco',
    'Morocco 14 day route',
    'Morocco travel itinerary 2026',
    'Casablanca to Marrakech route',
    'Fes Sahara Marrakech itinerary',
    'Morocco road trip 14 days',
    'best Morocco itinerary',
    'Morocco backpacking route',
    'Chefchaouen Fes Merzouga route',
    'Morocco budget itinerary',
    'Morocco luxury itinerary',
    'Sahara desert Morocco trip',
    'Morocco travel planning',
  ],
  openGraph: {
    title: 'Morocco 2 Week Itinerary 2026 | 14-Day Grand Tour Route & Budget Guide',
    description:
      'Day-by-day 14-day Morocco itinerary from Casablanca to Essaouira. Imperial cities, Sahara desert, Atlas Mountains, and Atlantic coast with budget, mid-range, and luxury options.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/art-morocco-illustrated-map.webp`,
        width: 1200,
        height: 630,
        alt: 'Illustrated map of Morocco showing a 14-day travel route through major cities and the Sahara desert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco 2 Week Itinerary 2026 | Complete 14-Day Grand Tour',
    description:
      '14-day route through Casablanca, Rabat, Chefchaouen, Fes, Sahara, Ouarzazate, Marrakech & Essaouira. Budget breakdowns and daily highlights.',
    images: [`${BASE_URL}/images/art-morocco-illustrated-map.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Is 2 weeks enough to see Morocco?',
    a: 'Two weeks is the ideal duration for a first trip to Morocco. It allows you to cover the four imperial cities (Casablanca, Rabat, Meknes, Fes), the Sahara desert, the Atlas Mountains, Marrakech, and a coastal town without rushing. Shorter trips of 7 or 10 days work too but require cutting destinations.',
  },
  {
    q: 'How much does a 2-week Morocco trip cost?',
    a: 'Budget travelers spend from 500 MAD per day (approximately 50 USD) covering hostels, street food, and public transport. Mid-range travelers spend from 1,200 MAD per day on riads, restaurants, and some private transfers. Luxury travelers spend from 3,000 MAD per day on boutique hotels, private guides, and fine dining. Total costs for 14 days range from 7,000 MAD to 42,000 MAD per person. Seasonal pricing can change during peak months.',
  },
  {
    q: 'What is the best time of year for a 2-week Morocco trip?',
    a: 'March to May and September to November offer the best weather across all regions. Summer (June-August) is extremely hot inland and in the desert but pleasant on the coast. Winter (December-February) is good for the desert and southern regions but cold in the mountains and northern cities.',
  },
  {
    q: 'Should I rent a car or use public transport in Morocco?',
    a: 'Both work well for this itinerary. Renting a car gives maximum flexibility, especially for the Middle Atlas, Todra Gorge, and Dades Valley sections. CTM and Supratours buses connect all major cities reliably. Trains run between Casablanca, Rabat, Fes, and Marrakech. Many travelers use a mix of trains for the north and a private driver for the desert loop.',
  },
  {
    q: 'Do I need a guide for the Sahara desert portion?',
    a: 'Yes. You cannot drive into the Erg Chebbi dunes yourself. All Sahara experiences depart from Merzouga or Hassilabied with a local guide, camels, and a desert camp. Book through your riad or a reputable agency. Overnight camel treks with desert camping start from 400 MAD per person.',
  },
  {
    q: 'Can I do this itinerary in reverse?',
    a: 'Absolutely. Starting in Marrakech and ending in Casablanca works just as well. Many international flights arrive in Marrakech. The reverse route lets you start with the souks and end with the Sahara, which some travelers prefer as a grand finale.',
  },
  {
    q: 'Is this itinerary suitable for solo female travelers?',
    a: 'Morocco is well-traveled by solo women. Stay in well-reviewed riads, use reputable transport companies (CTM, Supratours, ONCF trains), and dress modestly outside beach areas. The medinas can feel intense at first but become comfortable within a day. Chefchaouen and Essaouira are particularly relaxed and popular with solo travelers.',
  },
  {
    q: 'What should I pack for a 2-week Morocco trip?',
    a: 'Layers are essential since temperatures vary widely between the desert, mountains, and coast. Pack comfortable walking shoes, a scarf for sun and mosque visits, a warm jacket for desert nights and mountain passes, swimwear for riads and the coast, and a daypack. Sunscreen and a reusable water bottle are must-haves.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco 2 Week Itinerary 2026 - 14-Day Grand Tour',
  description:
    'Complete 14-day Morocco itinerary covering Casablanca, Rabat, Chefchaouen, Fes, Merzouga, Ouarzazate, Marrakech, and Essaouira with budget, mid-range, and luxury breakdowns.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/art-morocco-illustrated-map.webp`,
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
      { '@type': 'ListItem', position: 2, name: '2 Week Morocco Itinerary', item: PAGE_URL },
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
   DATA: ROUTE OVERVIEW
   ================================================================ */

const routeStops = [
  { city: 'Casablanca', days: 'Day 1', nights: 1, icon: Landmark },
  { city: 'Rabat', days: 'Day 2', nights: 1, icon: Landmark },
  { city: 'Chefchaouen', days: 'Day 3-4', nights: 2, icon: Camera },
  { city: 'Fes', days: 'Day 5-6', nights: 2, icon: Star },
  { city: 'Ifrane & Middle Atlas', days: 'Day 7', nights: 0, icon: Mountain },
  { city: 'Merzouga & Sahara', days: 'Day 8-9', nights: 2, icon: Sun },
  { city: 'Todra & Dades Gorges', days: 'Day 10', nights: 1, icon: Mountain },
  { city: 'Ouarzazate & Ait Benhaddou', days: 'Day 11', nights: 1, icon: Landmark },
  { city: 'Marrakech', days: 'Day 12-13', nights: 2, icon: Compass },
  { city: 'Essaouira', days: 'Day 14', nights: 0, icon: Wind },
];

/* ================================================================
   DATA: DAY-BY-DAY ITINERARY
   ================================================================ */

const itineraryDays = [
  {
    day: 1,
    title: 'Casablanca \u2014 Arrival & Art Deco',
    city: 'Casablanca',
    icon: Landmark,
    highlights: [
      'Hassan II Mosque \u2014 one of the largest mosques in the world, with a retractable roof over the Atlantic (guided tours from 130 MAD)',
      'Walk the Corniche seaside promenade along the ocean',
      'Explore the Art Deco quarter around Boulevard Mohammed V',
      'Evening meal at a seafood restaurant in the old port area',
    ],
    transport: 'Airport transfer by taxi (from 250 MAD) or airport train to Casa-Voyageurs station (from 70 MAD).',
    stayTip: 'Stay near Casa-Voyageurs station for easy departure the next morning. The Gauthier neighborhood has good mid-range hotels.',
  },
  {
    day: 2,
    title: 'Rabat \u2014 Capital, Kasbah & Gardens',
    city: 'Rabat',
    icon: Landmark,
    highlights: [
      'Morning train from Casablanca to Rabat (50 minutes, from 50 MAD)',
      'Kasbah of the Udayas \u2014 blue-and-white alleyways overlooking the Bou Regreg river',
      'Hassan Tower and the Mausoleum of Mohammed V',
      'Chellah necropolis \u2014 Roman and Marinid ruins with nesting storks',
      'Afternoon bus or grand taxi to Chefchaouen (4-5 hours, from 100 MAD)',
    ],
    transport: 'Train from Casablanca. CTM bus or grand taxi onward to Chefchaouen.',
    stayTip: 'If arriving late to Chefchaouen, book a riad inside the medina so you wake up surrounded by blue walls.',
  },
  {
    day: 3,
    title: 'Chefchaouen \u2014 The Blue City, Day One',
    city: 'Chefchaouen',
    icon: Camera,
    highlights: [
      'Wander the blue-painted medina streets at your own pace',
      'Plaza Uta el-Hammam \u2014 the main square with the 15th-century Grand Mosque and old kasbah',
      'Visit the kasbah museum and its tranquil Andalusian garden (from 10 MAD)',
      'Shop for local goat cheese, woven blankets, and handmade soap',
      'Sunset from the Spanish Mosque hilltop (20-minute uphill walk from the medina)',
    ],
    transport: 'Everything in Chefchaouen is walkable.',
    stayTip: 'Riads in the medina run from 300 MAD per night. Look for rooftop terraces with mountain views.',
  },
  {
    day: 4,
    title: 'Chefchaouen \u2014 Rif Mountains & Akchour',
    city: 'Chefchaouen',
    icon: Mountain,
    highlights: [
      'Day hike to Akchour waterfalls \u2014 a 90-minute drive plus a 2-hour trail each way through the Rif Mountains',
      'Alternatively, hike the Ras el-Maa river trail from the northeast corner of the medina',
      'Afternoon: return to the medina for a hammam visit or cooking class',
      'Final evening stroll through the blue streets before departing the next morning',
    ],
    transport: 'Grand taxi to Akchour trailhead (from 50 MAD shared, from 200 MAD private). Or walk 30 minutes to Ras el-Maa.',
    stayTip: 'Same riad as the previous night.',
  },
  {
    day: 5,
    title: 'Fes \u2014 Medina Immersion',
    city: 'Fes',
    icon: Star,
    highlights: [
      'Morning bus or grand taxi from Chefchaouen to Fes (4 hours, from 75 MAD)',
      'Afternoon: enter the Fes el-Bali medina through Bab Boujloud (the Blue Gate)',
      'Bou Inania Medersa \u2014 stunning 14th-century Marinid architecture (from 20 MAD)',
      'Walk through the tanneries district and view the Chouara Tanneries from a leather shop terrace',
      'Dinner in the medina \u2014 try a slow-cooked tanjia or pastilla',
    ],
    transport: 'CTM bus or Supratours from Chefchaouen.',
    stayTip: 'Stay in a riad near Bab Boujloud or Talaa Kebira for easy medina access. Traditional riads start from 400 MAD per night.',
  },
  {
    day: 6,
    title: 'Fes \u2014 Crafts, Food & Panoramic Views',
    city: 'Fes',
    icon: ShoppingBag,
    highlights: [
      'Al-Attarine Medersa \u2014 intricate carved cedar and zellige tilework',
      'Nejjarine Museum of Wooden Arts and Crafts in a beautifully restored foundouk',
      'Explore the metalwork, pottery, and textile souks in the northern medina',
      'Lunch: classic Fassi cuisine \u2014 rfissa, harira, or couscous with seven vegetables',
      'Late afternoon: panoramic views from the Marinid Tombs above the medina',
      'Optional: evening food tour through the medina (from 400 MAD per person)',
    ],
    transport: 'Walking within the medina. Taxi to the Marinid Tombs viewpoint (from 20 MAD).',
    stayTip: 'Same riad as the previous night.',
  },
  {
    day: 7,
    title: 'Ifrane & Middle Atlas \u2014 Cedar Forests',
    city: 'Ifrane / Middle Atlas',
    icon: Mountain,
    highlights: [
      'Morning departure from Fes heading south through the Middle Atlas',
      'Ifrane \u2014 a Swiss-style mountain town with clean air and European architecture',
      'Azrou cedar forest \u2014 home to Barbary macaques living wild in ancient cedar trees',
      'Drive through the Ziz Valley as the landscape shifts from green hills to red desert',
      'Arrive in Errachidia or continue to Erfoud by evening',
    ],
    transport: 'Rental car is ideal for this stretch. Alternatively, book a shared transfer from Fes to Merzouga (from 200 MAD, 8-9 hours).',
    stayTip: 'If driving, overnight in Erfoud or continue to Merzouga. Hotels in Erfoud from 250 MAD.',
  },
  {
    day: 8,
    title: 'Merzouga \u2014 Erg Chebbi & Camel Trek',
    city: 'Merzouga',
    icon: Sun,
    highlights: [
      'Morning arrival in Merzouga if not already there',
      'Visit a Gnawa village and learn about Saharan music traditions',
      'Optional: 4x4 desert excursion to nearby nomad camps and fossil sites',
      'Late afternoon: mount camels for the trek into Erg Chebbi dunes (from 400 MAD per person)',
      'Watch sunset from the top of a high dune',
      'Overnight in a desert camp \u2014 Berber drums, campfire dinner, and a sky full of stars',
    ],
    transport: 'Transfer from Erfoud to Merzouga (30 minutes). Camel trek arranged through your accommodation or tour agency.',
    stayTip: 'Budget camps start from 300 MAD per person including dinner and breakfast. Luxury desert camps run from 1,500 MAD.',
  },
  {
    day: 9,
    title: 'Merzouga \u2014 Sunrise & Departure',
    city: 'Merzouga',
    icon: Sunrise,
    highlights: [
      'Wake before dawn for sunrise over the Sahara \u2014 the dunes shift from deep purple to gold',
      'Camel ride back to Merzouga',
      'Breakfast at your riad, then relax or swim in a hotel pool',
      'Optional: sandboarding on the dunes or quad biking (from 300 MAD)',
      'Afternoon departure toward Tinghir and the Todra Gorge (4-5 hours driving)',
    ],
    transport: 'Rental car or private driver. Shared minibus options exist but are less frequent.',
    stayTip: 'Stay near Todra Gorge tonight. Guesthouses at the gorge mouth start from 200 MAD.',
  },
  {
    day: 10,
    title: 'Todra Gorge & Dades Valley',
    city: 'Todra / Dades',
    icon: Mountain,
    highlights: [
      'Morning walk into Todra Gorge \u2014 300-meter-high canyon walls towering over a narrow river',
      'Rock climbing is available for experienced climbers (guided sessions from 400 MAD)',
      'Drive the Road of a Thousand Kasbahs through the Dades Valley',
      'Stop at the hairpin turns of the Dades Gorge road for dramatic photographs',
      'Continue to Ouarzazate (2-3 hours) or overnight in Boumalne Dades',
    ],
    transport: 'Car or private driver recommended. The winding roads are scenic but require confidence.',
    stayTip: 'Kasbah-style hotels along the Dades Valley offer memorable stays from 350 MAD with half-board.',
  },
  {
    day: 11,
    title: 'Ouarzazate & Ait Benhaddou',
    city: 'Ouarzazate',
    icon: Landmark,
    highlights: [
      'Ait Benhaddou \u2014 UNESCO World Heritage ksar (fortified village) used in Gladiator, Game of Thrones, and dozens of other productions',
      'Cross the river and climb to the top of the ksar for panoramic views of the valley',
      'Atlas Studios in Ouarzazate \u2014 one of the largest film studios in the world (tours from 50 MAD)',
      'Taourirt Kasbah \u2014 a 19th-century fortress in the center of Ouarzazate',
      'Afternoon: drive over the Tizi n&apos;Tichka pass (2,260 m) toward Marrakech (4-5 hours)',
    ],
    transport: 'Car or private transfer. CTM buses also run from Ouarzazate to Marrakech (from 100 MAD, 5 hours).',
    stayTip: 'If you prefer not to drive the pass at night, stay in Ouarzazate and cross to Marrakech on Day 12 morning. Hotels from 300 MAD.',
  },
  {
    day: 12,
    title: 'Marrakech \u2014 Souks, Palaces & Jemaa el-Fnaa',
    city: 'Marrakech',
    icon: Compass,
    highlights: [
      'Morning in the souks \u2014 leather, spices, lamps, and carpets through a maze of covered alleys',
      'Bahia Palace \u2014 19th-century masterpiece of painted cedar ceilings and courtyard gardens (from 70 MAD)',
      'Saadian Tombs \u2014 hidden for centuries, rediscovered in 1917, with intricate marble and gold leaf (from 70 MAD)',
      'Late afternoon: Jardin Majorelle \u2014 Yves Saint Laurent&apos;s cobalt blue garden (from 70 MAD)',
      'Evening: Jemaa el-Fnaa square at dusk \u2014 food stalls, musicians, storytellers, and the smoke of a hundred grills',
    ],
    transport: 'Medina is walkable. Taxi to Majorelle from the medina (from 20 MAD).',
    stayTip: 'Riads inside the medina provide the classic Marrakech experience. Budget riads from 350 MAD, boutique riads from 800 MAD per night.',
  },
  {
    day: 13,
    title: 'Marrakech \u2014 Day Trip or Deep Dive',
    city: 'Marrakech',
    icon: Globe,
    highlights: [
      'Option A: Day trip to Ourika Valley in the High Atlas (1 hour drive) \u2014 Berber villages, waterfalls, and saffron gardens',
      'Option B: Hammam and spa morning (from 300 MAD), followed by a Moroccan cooking class (from 400 MAD)',
      'Option C: Ben Youssef Medersa, Maison de la Photographie, and the mellah (Jewish quarter)',
      'Afternoon: final shopping in the souks \u2014 stock up on spices, argan oil, and ceramics',
      'Farewell dinner on a riad rooftop with Atlas Mountain views',
    ],
    transport: 'Ourika Valley by grand taxi (from 250 MAD round trip) or organized tour.',
    stayTip: 'Same riad as the previous night.',
  },
  {
    day: 14,
    title: 'Essaouira \u2014 Atlantic Coast & Departure',
    city: 'Essaouira',
    icon: Wind,
    highlights: [
      'Morning bus from Marrakech to Essaouira (2.5-3 hours, from 80 MAD via Supratours)',
      'Walk the ramparts (skala) overlooking the Atlantic and the Iles Purpuraires',
      'Fish lunch at the port \u2014 grilled sardines, calamari, and shrimp chosen from the stalls (from 60 MAD)',
      'Browse the thuya wood workshops and art galleries in the medina',
      'Late afternoon: beach walk along the wide sandy shore south of the medina',
      'Return to Marrakech for evening flight, or stay overnight and fly out the next morning',
    ],
    transport: 'Supratours or CTM bus from Marrakech. Return bus also runs late afternoon. Private transfer from 600 MAD.',
    stayTip: 'If staying overnight, riads in the Essaouira medina start from 300 MAD. The town is compact and walkable.',
  },
];

/* ================================================================
   DATA: BUDGET BREAKDOWN
   ================================================================ */

const budgetTiers = [
  {
    tier: 'Budget',
    icon: Wallet,
    dailyCost: 'From 500 MAD/day',
    total14: 'From 7,000 MAD total',
    accommodation: 'Hostels (from 100 MAD dorm) and budget guesthouses (from 200 MAD private room)',
    food: 'Street food and local restaurants \u2014 tagine from 35 MAD, sandwich from 15 MAD, mint tea from 5 MAD',
    transport: 'CTM/Supratours buses, ONCF trains, shared grand taxis',
    activities: 'Free walking, public hammams (from 50 MAD), negotiated museum entries',
    style: 'Slow-paced, local experience, occasional splurge on a nice riad night or cooking class',
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    dailyCost: 'From 1,200 MAD/day',
    total14: 'From 16,800 MAD total',
    accommodation: 'Traditional riads with breakfast (from 400 MAD), occasionally a boutique hotel (from 700 MAD)',
    food: 'Mix of restaurants and street food \u2014 set menus from 120 MAD, rooftop dinners from 200 MAD',
    transport: 'First-class trains, private transfers for desert segment, occasional taxi',
    activities: 'Guided medina tours, cooking classes, desert camp upgrade, hammam spa packages',
    style: 'Comfortable and authentic with key experiences included, no need to count every dirham',
  },
  {
    tier: 'Luxury',
    icon: Landmark,
    dailyCost: 'From 3,000 MAD/day',
    total14: 'From 42,000 MAD total',
    accommodation: 'Boutique hotels and palace riads (from 1,500 MAD), luxury desert camp (from 2,500 MAD)',
    food: 'Fine dining, private chef experiences, wine with meals \u2014 from 400 MAD per dinner',
    transport: 'Private driver and vehicle throughout (from 1,200 MAD/day), domestic flights for long segments',
    activities: 'Private guides, VIP desert experience, exclusive hammam suites, hot air balloon over Marrakech',
    style: 'Seamless, personalized, and indulgent \u2014 every detail arranged in advance',
  },
];

/* ================================================================
   DATA: PACKING ESSENTIALS
   ================================================================ */

const packingTips = [
  { item: 'Layers', detail: 'Desert days hit 40 degrees but nights drop to 5 degrees. Mountain passes are cold year-round. A light down jacket covers all bases.', icon: Sun },
  { item: 'Comfortable Walking Shoes', detail: 'Medina streets are uneven cobblestone and often steep. Sandals for the beach, closed shoes for everything else.', icon: Navigation },
  { item: 'Scarf or Shawl', detail: 'Doubles as sun protection, mosque cover-up, desert sand shield, and blanket on chilly bus rides.', icon: Wind },
  { item: 'Daypack', detail: 'A small backpack for daily excursions. Leave the big bag at your accommodation.', icon: ShoppingBag },
  { item: 'Reusable Water Bottle', detail: 'Tap water is not drinkable. Refill at filtered stations in riads and hotels to reduce plastic waste.', icon: CheckCircle },
  { item: 'Power Adapter', detail: 'Morocco uses European-style Type C and E plugs (220V). Bring a universal adapter.', icon: Info },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function Morocco2WeekItineraryPage() {
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

      {/* -- Hero -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/art-morocco-illustrated-map.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">2 Week Morocco Itinerary</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Calendar className="w-4 h-4" />
            14-Day Grand Tour
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco 2 Week Itinerary
            <br className="hidden md:block" /> The Complete Grand Tour
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            14 days across eight destinations &mdash; imperial cities, Sahara dunes, mountain gorges,
            and Atlantic coast. Day-by-day route with real costs and practical logistics.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Two Weeks Is the Sweet Spot
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco packs an extraordinary range of landscapes and cultures into a country the
              size of California. You can stand in the medina of Fes, surrounded by a thousand years
              of unbroken urban life, and 48 hours later sleep under the stars in the Sahara. Two
              days after that, you are eating grilled sardines on the Atlantic coast while the wind
              off the ocean tangles your hair.
            </p>
            <p>
              A week is enough to scratch the surface. Ten days lets you cover the highlights
              without lingering. But two weeks is where Morocco opens up properly. You get time
              to sit in a Chefchaouen caf&eacute; and watch the light change on the blue walls. You
              can spend a full day in the Fes medina and still have tomorrow to go deeper. You can
              linger in the Dades Valley instead of blowing through it on the way to somewhere else.
            </p>
            <p>
              This itinerary follows a natural loop: fly into Casablanca, sweep north to
              Chefchaouen, cut east to Fes, drop south through the Middle Atlas into the Sahara,
              trace the southern oasis route west through Ouarzazate, and finish in Marrakech with
              a day trip to Essaouira. The geography flows. Backtracking is minimal. Every day
              brings a different landscape.
            </p>
          </div>
        </div>
      </section>

      {/* -- Route Overview -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Route Overview
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A counterclockwise loop covering Morocco&apos;s north, east, south, and west.
            Total driving distance: approximately 2,400 km.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan p-6 md:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {routeStops.map((stop, i) => {
                  const StopIcon = stop.icon;
                  return (
                    <div key={stop.city} className="flex items-center gap-3 sm:flex-col sm:items-center sm:text-center">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                          <StopIcon className="w-5 h-5 text-white" />
                        </div>
                        {i < routeStops.length - 1 && (
                          <ArrowRight className="w-4 h-4 text-[var(--color-accent)]/50 absolute -right-5 top-1/2 -translate-y-1/2 hidden lg:block" />
                        )}
                      </div>
                      <div>
                        <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">
                          {stop.city}
                        </p>
                        <p className="text-xs text-[var(--color-accent)] font-medium">{stop.days}</p>
                        {stop.nights > 0 && (
                          <p className="text-xs text-[var(--text-muted)]">
                            {stop.nights} night{stop.nights > 1 ? 's' : ''}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-[var(--border)]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-accent)]">14</p>
                    <p className="text-xs text-[var(--text-muted)]">Days</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-accent)]">8</p>
                    <p className="text-xs text-[var(--text-muted)]">Destinations</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-accent)]">~2,400 km</p>
                    <p className="text-xs text-[var(--text-muted)]">Total Distance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day-by-Day Itinerary -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day-by-Day Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each day includes top highlights, transport options, and accommodation tips.
            Adjust the pace to match your travel style.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />
              <div className="space-y-8">
                {itineraryDays.map((day) => {
                  const DayIcon = day.icon;
                  return (
                    <div key={day.day} className="relative flex gap-6" id={`day-${day.day}`}>
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{day.day}</span>
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {day.title}
                          </h3>
                          <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] shrink-0">
                            <DayIcon className="w-3.5 h-3.5" />
                            {day.city}
                          </div>
                        </div>

                        <ul className="space-y-2 mb-4">
                          {day.highlights.map((h, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-1 shrink-0" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                            <Train className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                            <p className="text-xs text-[var(--text-muted)]">
                              <span className="font-semibold text-[var(--text-primary)]">Transport:</span> {day.transport}
                            </p>
                          </div>
                          <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                            <Bed className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                            <p className="text-xs text-[var(--text-muted)]">
                              <span className="font-semibold text-[var(--text-primary)]">Stay:</span> {day.stayTip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Budget Breakdown -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Breakdown: Three Ways to Do It
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-3">
            The same 14-day route at three price levels. All costs are per person.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in Moroccan Dirhams (MAD). Seasonal pricing can change during peak months (October-April and Christmas/New Year).
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetTiers.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                    <TierIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {tier.tier}
                  </h3>
                  <p className="text-sm text-[var(--color-accent)] font-semibold mb-1">{tier.dailyCost}</p>
                  <p className="text-xs text-[var(--text-muted)] mb-5">{tier.total14}</p>

                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-semibold text-[var(--color-accent)] flex items-center gap-1 mb-1">
                        <Bed className="w-3.5 h-3.5" /> Accommodation
                      </span>
                      <span className="text-[var(--text-secondary)]">{tier.accommodation}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)] flex items-center gap-1 mb-1">
                        <Utensils className="w-3.5 h-3.5" /> Food
                      </span>
                      <span className="text-[var(--text-secondary)]">{tier.food}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)] flex items-center gap-1 mb-1">
                        <Train className="w-3.5 h-3.5" /> Transport
                      </span>
                      <span className="text-[var(--text-secondary)]">{tier.transport}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)] flex items-center gap-1 mb-1">
                        <Compass className="w-3.5 h-3.5" /> Activities
                      </span>
                      <span className="text-[var(--text-secondary)]">{tier.activities}</span>
                    </div>
                    <div className="pt-3 border-t border-[var(--border)]">
                      <span className="font-semibold text-[var(--color-accent)]">Style:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{tier.style}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Transport Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around: Transport for Each Segment
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s transport network is better than many travelers expect.
            Here is the best option for each leg of this route.
          </p>

          <div className="space-y-4">
            {[
              { leg: 'Casablanca to Rabat', best: 'Train (ONCF)', time: '50 min', cost: 'From 50 MAD', note: 'Trains depart every 30 minutes. Fast, comfortable, and the easiest leg of the trip.' },
              { leg: 'Rabat to Chefchaouen', best: 'CTM Bus or Grand Taxi', time: '4-5 hours', cost: 'From 100 MAD', note: 'No direct train. CTM bus is the most comfortable. Grand taxis are faster but cramped.' },
              { leg: 'Chefchaouen to Fes', best: 'CTM Bus or Grand Taxi', time: '4 hours', cost: 'From 75 MAD', note: 'Scenic mountain drive through the Rif. Morning departures are most reliable.' },
              { leg: 'Fes to Merzouga', best: 'Private Transfer or Rental Car', time: '8-9 hours', cost: 'From 200 MAD (shared) / from 1,500 MAD (private)', note: 'No train. The drive through the Middle Atlas is spectacular. Most travelers break it at Ifrane or Midelt.' },
              { leg: 'Merzouga to Ouarzazate', best: 'Rental Car or Private Driver', time: '6-7 hours (via Todra/Dades)', cost: 'From 1,200 MAD/day (private driver)', note: 'The Route of a Thousand Kasbahs. No reliable public transport covers the gorges.' },
              { leg: 'Ouarzazate to Marrakech', best: 'CTM Bus or Private Transfer', time: '4-5 hours', cost: 'From 100 MAD (bus)', note: 'Over the Tizi n&apos;Tichka pass at 2,260 m. Dramatic switchbacks. Do this in daylight.' },
              { leg: 'Marrakech to Essaouira', best: 'Supratours Bus', time: '2.5-3 hours', cost: 'From 80 MAD', note: 'Supratours runs multiple daily departures. Book a day ahead in peak season.' },
            ].map((seg) => (
              <div key={seg.leg} className="card-moroccan p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {seg.leg}
                  </h3>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1 text-[var(--color-accent)] font-semibold">
                      <Clock className="w-3 h-3" /> {seg.time}
                    </span>
                    <span className="text-[var(--color-gold)] font-semibold">{seg.cost}</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-1">
                  <span className="font-semibold">Best option:</span> {seg.best}
                </p>
                <p className="text-xs text-[var(--text-muted)]">{seg.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Packing Essentials -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShoppingBag className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Essentials for 14 Days
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You will cross deserts, mountains, and coastline. Pack for all three.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.item} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Pro Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pro Tips for the 14-Day Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Lessons learned from travelers who have done this loop multiple times.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Book Desert Camps Early',
                text: 'Merzouga desert camps sell out during peak season, especially October through December. Reserve at least two weeks ahead. Your riad in Fes can often arrange the booking.',
              },
              {
                title: 'Carry Cash Outside Major Cities',
                text: 'ATMs are plentiful in Casablanca, Fes, and Marrakech. They thin out between Midelt and Ouarzazate. Withdraw enough MAD in Fes to cover the desert and gorge segment.',
              },
              {
                title: 'Negotiate Grand Taxi Fares Before Getting In',
                text: 'Grand taxis are shared and have fixed routes at fixed prices locals know. Ask your riad host what the fair price is, then confirm with the driver before departure.',
              },
              {
                title: 'Build in Rest Days',
                text: 'This itinerary moves every 1-2 days. If you feel rushed, swap the Ifrane day for an extra night in Chefchaouen or Fes. The Middle Atlas drive can merge with the Merzouga transit day.',
              },
              {
                title: 'Download Offline Maps',
                text: 'Data coverage drops in the Middle Atlas and between Merzouga and Ouarzazate. Download Google Maps or Maps.me offline maps for the entire country before you leave.',
              },
              {
                title: 'Learn Five Arabic Phrases',
                text: 'Salam (hello), shukran (thank you), la shukran (no thank you), bslemma (goodbye), and bezzaf (too much / enough). These five phrases change how people interact with you.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {tip.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Best Time to Visit -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sun className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for the 14-Day Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a year-round destination, but some months work better for the full loop.
          </p>

          <div className="space-y-4">
            {[
              {
                season: 'March - May (Spring)',
                rating: 'Best Overall',
                detail: 'Warm days, cool nights, wildflowers in the Atlas, comfortable desert temperatures. Shoulder season pricing on accommodation. The Dades Valley rose harvest happens in late April and May.',
              },
              {
                season: 'September - November (Autumn)',
                rating: 'Excellent',
                detail: 'Similar to spring with slightly warmer desert days. Date harvest season in the oases. October is the start of peak tourist season in Marrakech, so book riads early.',
              },
              {
                season: 'December - February (Winter)',
                rating: 'Good (with caveats)',
                detail: 'Perfect desert temperatures. Chefchaouen and the Middle Atlas can be cold and occasionally snowy. Marrakech is mild during the day but chilly at night. Fewer crowds and lower prices.',
              },
              {
                season: 'June - August (Summer)',
                rating: 'Challenging',
                detail: 'Fes and Marrakech regularly exceed 40 degrees. The desert is brutally hot. Essaouira and the northern coast remain pleasant. If you travel in summer, plan desert days for early morning and late afternoon only.',
              },
            ].map((s) => (
              <div key={s.season} className="card-moroccan p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {s.season}
                  </h3>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    s.rating === 'Best Overall'
                      ? 'bg-green-100 text-green-700'
                      : s.rating === 'Excellent'
                        ? 'bg-blue-100 text-blue-700'
                        : s.rating === 'Good (with caveats)'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                  }`}>
                    {s.rating}
                  </span>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Food Highlights -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Eat Along the Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Each region has its own specialties. Here is what to order and where.
          </p>

          <div className="space-y-4">
            {[
              { city: 'Casablanca', dish: 'Seafood pastilla and fresh Atlantic fish', detail: 'The port restaurants serve the day&apos;s catch grilled whole with chermoula sauce. Seafood pastilla, flaky pastry with shrimp and vermicelli, is a Casablanca specialty. From 80 MAD.' },
              { city: 'Chefchaouen', dish: 'Goat cheese and mountain herbs', detail: 'The Rif Mountains produce excellent goat cheese served with fresh bread and local honey. Ras el hanout from Chefchaouen&apos;s spice shops is some of the best in Morocco. From 30 MAD.' },
              { city: 'Fes', dish: 'Pastilla, rfissa, and mechoui', detail: 'Fes is Morocco&apos;s culinary capital. Try pigeon pastilla (sweet and savory), rfissa (shredded msemen with lentils and chicken), and slow-roasted mechoui lamb. From 50 MAD at local restaurants.' },
              { city: 'Merzouga', dish: 'Desert bread (medfouna) and camel tagine', detail: 'Berber pizza (medfouna) is bread stuffed with spiced meat and baked in hot sand. Camel meat tagine is available at some desert camps. Both are unique to the region. From 60 MAD.' },
              { city: 'Ouarzazate', dish: 'Berber omelette and date milk', detail: 'A Berber omelette with tomatoes, onions, and cumin is the standard breakfast across the south. Fresh date milkshakes in the oasis towns are addictive. From 25 MAD.' },
              { city: 'Marrakech', dish: 'Tanjia and Jemaa el-Fnaa street food', detail: 'Tanjia is Marrakech&apos;s signature dish: beef or lamb slow-cooked in a clay pot in the hammam furnace. At the night market, try sheep head, snails, and fresh-squeezed orange juice. From 4 MAD for juice, from 40 MAD for tanjia.' },
              { city: 'Essaouira', dish: 'Grilled sardines and argan amlou', detail: 'The fish stalls at the port grill sardines, prawns, and calamari to order. Amlou, a paste of argan oil, almonds, and honey, is the local answer to peanut butter. From 60 MAD for a full fish plate.' },
            ].map((food) => (
              <div key={food.city} className="card-moroccan p-5">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {food.city}: {food.dish}
                  </h3>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{food.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about planning a 2-week Morocco trip.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: '10-Day Morocco Itinerary',
                description: 'A shorter version of the grand tour focusing on Fes, the Sahara, and Marrakech for travelers with limited time.',
                href: '/morocco-10-day-itinerary',
                icon: Calendar,
              },
              {
                title: '7-Day Morocco Itinerary',
                description: 'One week covering the essential triangle: Marrakech, Fes, and the Sahara desert.',
                href: '/morocco-7-day-itinerary',
                icon: Clock,
              },
              {
                title: 'Morocco Budget Calculator',
                description: 'Interactive tool to estimate your total trip cost based on travel style, duration, and activities.',
                href: '/morocco-budget-calculator',
                icon: Wallet,
              },
              {
                title: 'Morocco Transport Guide',
                description: 'Trains, buses, grand taxis, and rental cars: how to get between every city in Morocco.',
                href: '/morocco-transport',
                icon: Train,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA Section -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your 14-Day Morocco Adventure?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Two weeks is all you need to experience Morocco from coast to desert to mountain.
            Start with this route and make it your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-budget-calculator"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Wallet className="w-5 h-5" />
              Calculate Your Budget
            </Link>
            <Link
              href="/morocco-transport"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 transition-colors"
            >
              <Train className="w-5 h-5" />
              Transport Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

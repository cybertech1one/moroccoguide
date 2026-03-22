import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Camera,
  UtensilsCrossed,
  Music,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Heart,
  Sparkles,
  Globe,
  AlertTriangle,
  Thermometer,
  CloudRain,
  Mountain,
  Waves,
  Wallet,
  Users,
  Sunset,
  Wind,
  ShieldCheck,
  Luggage,
  TreesIcon,
  Tent,
  Film,
  Trophy,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in October 2026 | Best Month to Visit - Weather & Guide',
  description:
    'October is arguably the best month to visit Morocco. Perfect temperatures for desert, cities, coast, and hiking. Complete 2026 guide with weather by region, Date Festival in Erfoud, film festivals, packing tips, and itineraries.',
  keywords: [
    'morocco in october',
    'visiting morocco october',
    'morocco october weather',
    'best time visit morocco october',
    'best month visit morocco',
    'morocco autumn travel',
    'erfoud date festival',
    'morocco october temperature',
    'sahara desert october',
    'marrakech october weather',
    'morocco travel guide october',
    'morocco perfect weather',
    'morocco film festival',
    'morocco hiking october',
    'morocco october budget',
  ],
  openGraph: {
    title: 'Visiting Morocco in October 2026 | Arguably the Best Month to Visit',
    description:
      'October brings perfect temperatures across Morocco: ideal for desert, cities, coast, and hiking. Date Festival in Erfoud, film festivals, and the best weather of the year.',
    url: `${BASE_URL}/morocco-in-october`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco in October with golden autumn light over desert dunes and clear blue skies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco in October 2026 | The Best Month to Visit',
    description:
      'Perfect weather everywhere, Date Festival in Erfoud, ideal for desert and hiking. Complete guide with weather, events, and practical tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-october` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-october`,
  name: 'Visiting Morocco in October 2026 | Best Month to Visit - Weather & Guide',
  description:
    'October is widely considered the best month to visit Morocco. Perfect temperatures for the Sahara, imperial cities, coast, and Atlas hiking. Date Festival, film festivals, and excellent value.',
  url: `${BASE_URL}/morocco-in-october`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-october`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Time to Visit', item: `${BASE_URL}/best-time-visit-morocco` },
      { '@type': 'ListItem', position: 3, name: 'October', item: `${BASE_URL}/morocco-in-october` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is October the best month to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Many travel experts and experienced Morocco travelers consider October the best month to visit. Temperatures are perfect across all regions: 20-28 degrees in cities, 18-32 in the Sahara (ideal for camping), 20-25 on the coast, and 8-20 in the mountains (perfect for hiking). Crowds are moderate, prices are shoulder-season, and the Date Festival in Erfoud adds a unique cultural event.' } },
    { '@type': 'Question', name: 'What is the weather like in Morocco in October?', acceptedAnswer: { '@type': 'Answer', text: 'October weather is near-perfect across Morocco. Coastal cities enjoy 20-25 degrees with warm seas still swimmable. Interior cities like Marrakech and Fes see 20-28 degrees — warm days with pleasantly cool evenings. The Sahara ranges 18-32 degrees with comfortable temperatures day and night. Atlas Mountains range 8-20 degrees, ideal for hiking. Rainfall increases slightly but remains low with 2-4 rainy days possible in northern regions.' } },
    { '@type': 'Question', name: 'What is the Date Festival in Erfoud?', acceptedAnswer: { '@type': 'Answer', text: 'The International Date Festival (Salon International des Dattes) in Erfoud celebrates the annual date harvest in the Tafilalet region, the largest palm oasis in Morocco. Held in mid to late October, it features date tastings, agricultural exhibitions, folklore performances, Fantasia horse displays, and a market selling dozens of date varieties. It is a vibrant, authentic cultural event that draws visitors from across Morocco.' } },
    { '@type': 'Question', name: 'Can you still swim in Morocco in October?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, swimming is still possible in October, particularly in the first half of the month. Atlantic water temperatures are around 20-22 degrees in Agadir and Essaouira, and Mediterranean temperatures near Tangier are similar. Agadir and the southern Atlantic coast remain the warmest for swimming. By late October, some travelers may find the water cool, but beach weather generally holds through the month.' } },
    { '@type': 'Question', name: 'Is October good for the Sahara Desert?', acceptedAnswer: { '@type': 'Answer', text: 'October is one of the best months for the Sahara. Daytime temperatures of 25-32 degrees are warm but not extreme, and nights cool to 15-20 degrees making sleeping in desert camps comfortable. The clear autumn skies offer exceptional stargazing. Both Merzouga (Erg Chebbi) and Zagora (Erg Chigaga) camps operate at full capacity. It is the heart of desert touring season.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in October?', acceptedAnswer: { '@type': 'Answer', text: 'Pack layers for variable temperatures. Lightweight clothing for warm days, plus a medium-weight jacket or sweater for cooler evenings and mountain excursions. A light rain jacket is advisable as occasional showers are possible. Comfortable walking shoes, sun protection (hat, sunscreen, sunglasses), and modest clothing for cultural sites. If hiking in the Atlas, bring proper trekking gear and warm layers for altitude.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherRegions = [
  {
    region: 'Atlantic Coast',
    cities: 'Essaouira, Agadir, Rabat, Casablanca',
    icon: Waves,
    tempRange: '20-25 C',
    rainfall: 'Low (2-4 rainy days)',
    highlights: 'Warm and pleasant. Sea temperatures around 20-22 degrees still permit swimming, especially in Agadir. Essaouira wind picks up slightly but days are sunny and comfortable. Beach season extends through October in the south.',
    rating: 'Excellent',
  },
  {
    region: 'Mediterranean Coast',
    cities: 'Tangier, Tetouan, Al Hoceima, Nador',
    icon: Sun,
    tempRange: '18-24 C',
    rainfall: 'Moderate (3-5 rainy days)',
    highlights: 'Warm days with occasional showers starting in the north. Swimming still possible, especially early October. Tangier is atmospheric with autumn light. The Rif Mountains behind the coast take on autumn colors.',
    rating: 'Very Good',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes, Rabat',
    icon: Thermometer,
    tempRange: '20-28 C',
    rainfall: 'Low (1-3 rainy days)',
    highlights: 'The Goldilocks month — not too hot, not too cold. Marrakech averages 25-27 degrees, perfect for medina exploration at any hour. Fes is similarly comfortable. Evening temperatures around 15-18 degrees are ideal for rooftop dining.',
    rating: 'Excellent',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, Draa Valley, Erfoud',
    icon: Tent,
    tempRange: '18-32 C',
    rainfall: 'Virtually none',
    highlights: 'Peak desert season begins. Daytime warmth without summer extremes, cool comfortable nights (15-20 degrees) perfect for sleeping under the stars. The Date Festival in Erfoud celebrates the harvest. Crystal-clear skies for stargazing.',
    rating: 'Excellent',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ouarzazate, Dades Valley, Todra Gorge',
    icon: Mountain,
    tempRange: '8-20 C',
    rainfall: 'Low-Moderate (2-4 rainy days)',
    highlights: 'Excellent hiking conditions continue. Lower temperatures than September but all passes remain accessible before winter snows. Autumn colors appear in the valleys. Cool nights require warmer layers. First frost possible at high altitude.',
    rating: 'Very Good',
  },
] as const;

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const octoberEvents = [
  {
    name: 'International Date Festival (Erfoud)',
    icon: TreesIcon,
    dates: 'Mid to Late October (varies annually)',
    location: 'Erfoud, Tafilalet Region',
    description: 'The Salon International des Dattes is the marquee event of October in Morocco. Held in Erfoud, the gateway to the Sahara and the heart of the Tafilalet palm oasis (the largest in Morocco), this festival celebrates the annual date harvest that sustains the region. Dozens of date varieties are showcased — from golden Boufeggouss to plump Medjool and honey-sweet Aziza. Agricultural exhibitions, folklore performances featuring Gnawa and Amazigh music, spectacular Fantasia horse charges, and a bustling market draw thousands of Moroccan and international visitors.',
    price: 'Free entry to most events / Market purchases from 20 MAD',
    tip: 'Combine the Date Festival with a Merzouga desert excursion — Erfoud is just 50 km from the Erg Chebbi dunes. Buy dates directly from producers for the best prices and freshness. The Fantasia displays are spectacular — arrive early for the best viewing positions.',
  },
  {
    name: 'Film Festivals',
    icon: Film,
    dates: 'Various dates in October',
    location: 'Tangier, Tetouan, Ouarzazate',
    description: 'October marks the beginning of Morocco film festival season. The Tangier National Film Festival and Tetouan Mediterranean Film Festival often fall in this period, celebrating Moroccan and international cinema. Ouarzazate, known as the "Hollywood of Africa" for its Atlas Studios where films like Gladiator and Game of Thrones were filmed, hosts its own events. These festivals offer screenings, director Q&As, and a glimpse into Morocco thriving film industry.',
    price: 'From 50 MAD per screening / Some free outdoor screenings',
    tip: 'Check festival websites for exact 2026 dates as they vary annually. Ouarzazate Atlas Studios (from 60 MAD entry) is worth visiting regardless of festivals — see the sets of Gladiator, Kingdom of Heaven, and Game of Thrones up close.',
  },
  {
    name: 'Date Harvest Season (Continues)',
    icon: Calendar,
    dates: 'September - November',
    location: 'Draa Valley, Zagora, Erfoud, Tinghir, Figuig',
    description: 'The date harvest that began in September reaches its peak in October across southeastern Morocco. The Draa Valley, Ziz Valley, and Tafilalet oases are alive with activity as communities harvest, sort, and process millions of dates. This is the heart of the season when the freshest, most diverse varieties are available. Palm groves stretch for hundreds of kilometers, and the combination of golden dates, red kasbahs, and clear desert skies creates an unforgettable landscape.',
    price: 'Free to observe / From 50 MAD for guided palm grove visits',
    tip: 'Drive the N10 road between Erfoud and Rissani through the Tafilalet palm groves during harvest — it is one of the most atmospheric drives in Morocco. Visit a date sorting cooperative to see the processing and taste varieties you have never encountered in Europe.',
  },
  {
    name: 'Marathon des Sables (Registration Period)',
    icon: Trophy,
    dates: 'Race in April, but October is peak registration',
    location: 'Sahara Desert (south of Ouarzazate)',
    description: 'While the actual Marathon des Sables takes place in April, October is when many runners visit Morocco to train and scout the terrain ahead of registration deadlines. This legendary ultra-marathon — a 250 km, 6-day self-sufficiency race across the Sahara — is considered the toughest footrace on Earth. The October conditions (similar temperatures to race week) make it the ideal training month. Even non-runners can visit the race route areas and run shorter desert sections.',
    price: 'Race entry from 35,000 MAD / Training runs are free',
    tip: 'If you are considering running the Marathon des Sables, October is the perfect month to experience Sahara conditions similar to race week. Several Ouarzazate-based running clubs organize group training sessions in the desert.',
  },
] as const;

/* ===============================================================
   DATA: TOP DESTINATIONS IN OCTOBER
   =============================================================== */

const topDestinations = [
  {
    name: 'Marrakech',
    icon: Star,
    why: 'October in Marrakech is close to perfection. Daily temperatures of 25-27 degrees mean comfortable exploration at any hour, including the midday souks that are punishing in summer. Evening temperatures of 15-18 degrees are ideal for rooftop dining and Jemaa el-Fnaa nightlife. Shoulder-season pricing continues with riads 20-30 percent below peak rates.',
    highlights: 'Jemaa el-Fnaa at sunset, Bahia Palace, Majorelle Garden, comfortable souk shopping, rooftop dinners, Jardin Secret, hammams',
    budget: 'Riads from 450 MAD/night, meals from 40 MAD, guided tour from 300 MAD',
  },
  {
    name: 'Sahara Desert (Merzouga & Zagora)',
    icon: Tent,
    why: 'October is peak Sahara season. The combination of warm days (25-32 degrees), cool comfortable nights (15-20 degrees), and crystal-clear skies creates the ideal desert experience. Camel treks are enjoyable throughout the day, overnight camps are comfortable without extreme cold or heat, and the stargazing is extraordinary.',
    highlights: 'Erg Chebbi sunrise, camel trekking, luxury desert camps, Date Festival in Erfoud, Todra Gorge, Draa Valley palm oases',
    budget: 'Desert tour from Marrakech from 1,200 MAD (2 days), luxury camp from 2,500 MAD/night',
  },
  {
    name: 'Fes',
    icon: Globe,
    why: 'October transforms the Fes medina into the most enjoyable version of itself. Temperatures of 20-26 degrees eliminate the summer swelter that can make navigating the 9,000-street labyrinth exhausting. The tanneries are less overpowering, the artisan workshops are comfortable to linger in, and the quality of light filtering through narrow alleys is photographers dream material.',
    highlights: 'Fes el-Bali medina, Al Quaraouiyine, Chouara Tanneries, Bou Inania Medersa, ceramics quarter, rooftop dining',
    budget: 'Riads from 400 MAD/night, guided medina tour from 350 MAD, cooking class from 400 MAD',
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    why: 'October hiking conditions remain excellent, with all major passes still accessible before winter snows arrive (typically November-December). Autumn colors begin to appear in the valleys, and the air has a crispness that makes trekking energizing rather than exhausting. Toubkal summit is still achievable, and multi-day treks through Berber villages are at their most comfortable.',
    highlights: 'Toubkal summit, Ait Bougmez Valley, Dades and Todra Gorges, Berber villages, autumn valley colors',
    budget: 'Toubkal 2-day trek from 1,500 MAD with guide, guesthouse from 250 MAD/night',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    why: 'October Essaouira is a treasure — warm enough for beach walks and outdoor dining (20-24 degrees), with the fierce summer winds moderating. The medina is uncrowded, the art galleries have fresh autumn exhibitions, and the port seafood is superb. This is one of the best months to experience Essaouira without the summer wind or winter rain.',
    highlights: 'Medina rampart walks, port seafood, art galleries, beach walks, Gnawa music, sunset from Skala',
    budget: 'Riads from 350 MAD/night, seafood lunch from 60 MAD, cooking class from 350 MAD',
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    why: 'The Blue Pearl is at its photographic best in October. The lower autumn sun creates dramatic shadows in the blue-washed alleys, autumn light turns the white and blue facades luminous, and the Rif Mountains behind the town begin to show autumn colors. Fewer tourists mean you can photograph iconic spots without crowds.',
    highlights: 'Blue medina photography, Rif Mountain hiking, Ras El Maa waterfall, Spanish Mosque viewpoint, local crafts',
    budget: 'Hotels from 300 MAD/night, meals from 35 MAD, Rif hike from 200 MAD with guide',
  },
] as const;

/* ===============================================================
   DATA: PACKING ESSENTIALS
   =============================================================== */

const packingEssentials = [
  {
    item: 'Layering system for variable temperatures',
    icon: Thermometer,
    detail: 'October temperatures swing significantly between day and night, and between regions. Pack a base of lightweight clothing plus medium layers (sweater, light jacket) that you can add or remove. Cotton, linen, and merino wool work well.',
  },
  {
    item: 'Medium-weight jacket or fleece',
    icon: Wind,
    detail: 'Essential for Atlas Mountain excursions, desert evenings, and cooler city nights. A packable down jacket or fleece provides warmth without bulk. Evenings in Chefchaouen and Fes can drop below 15 degrees.',
  },
  {
    item: 'Light rain jacket',
    icon: CloudRain,
    detail: 'October sees the first rains after the dry summer, particularly in northern Morocco, the Rif Mountains, and Atlantic coast. A packable waterproof layer is wise insurance. Compact umbrellas also work for city visits.',
  },
  {
    item: 'Sun protection',
    icon: ShieldCheck,
    detail: 'Despite cooler temperatures, UV levels remain significant in Morocco October sun, especially at altitude and in the desert. Pack SPF 30-50 sunscreen, a hat with brim, and quality sunglasses.',
  },
  {
    item: 'Comfortable walking shoes and sandals',
    icon: Compass,
    detail: 'Sturdy shoes for medina cobblestones and mountain trails. Sandals for relaxed settings and beach. If planning Atlas trekking, bring proper hiking boots and break them in before the trip.',
  },
  {
    item: 'Scarf or shawl (multipurpose)',
    icon: Heart,
    detail: 'A large scarf serves as a head covering for mosques and cultural sites, a light wrap for chilly evenings, wind protection in the desert, and a shopping bag in the souks. Choose a natural fiber that breathes.',
  },
] as const;

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  {
    tip: 'October shoulder-season rates continue',
    description: 'Hotels and riads maintain shoulder-season pricing through October, with rates 20-30 percent below the November-March high season that kicks in as European autumn holidays begin. Lock in October rates for the best weather-to-price ratio of the year.',
    savings: 'Save 20-30% on accommodation',
  },
  {
    tip: 'Book desert tours locally in Ouarzazate or Marrakech',
    description: 'October is peak desert season, but tours booked on the ground in Morocco cost far less than online bookings from abroad. A 2-day Merzouga excursion from Marrakech starts from 1,200 MAD locally versus 3,000-4,000 MAD booked from Europe.',
    savings: 'Save 40-60% on desert tours',
  },
  {
    tip: 'Take the train between imperial cities',
    description: 'ONCF trains connect Marrakech, Casablanca, Rabat, Meknes, and Fes with comfortable, affordable service. First class Marrakech to Fes from 200 MAD. The Al Boraq high-speed train links Tangier to Casablanca from 150 MAD in just over 2 hours.',
    savings: 'Save 70-85% vs private transfer',
  },
  {
    tip: 'Visit the Date Festival in Erfoud for free food',
    description: 'The Date Festival offers free tastings of dozens of date varieties. Buy kilos of premium Medjool dates directly from producers for a fraction of European prices — from 40-60 MAD per kilogram versus the equivalent of 200+ MAD in European shops.',
    savings: 'Save 70% on premium dates',
  },
  {
    tip: 'Eat tagine for lunch, not dinner',
    description: 'Local restaurants serve the same tagines for lunch that tourist establishments charge double for at dinner. A lamb tagine from 40-60 MAD at a lunchtime neighborhood restaurant versus from 120-180 MAD at a tourist dinner spot. Quality is often better at local places.',
    savings: 'Save 50-70% on main meals',
  },
  {
    tip: 'Negotiate multi-day tour packages',
    description: 'October guides and tour operators are hungry for business as they ramp up for the high season. Multi-day packages covering desert, gorges, and Atlas mountains can be negotiated at significant discounts if you commit to 4+ days with the same operator.',
    savings: 'Save 15-25% on multi-day tours',
  },
] as const;

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  {
    tip: 'October light is a photographer paradise',
    icon: Camera,
    description: 'The autumn sun angle creates warm golden light that transforms every scene. The quality of light in October is widely considered the best of the year for photography. Sunrise over Erg Chebbi, afternoon in the Fes medina, and sunset from Marrakech rooftops are all extraordinary.',
  },
  {
    tip: 'Book the Sahara for mid-October',
    icon: Tent,
    description: 'Mid-October offers the sweet spot — warm enough days for comfortable desert activities, cool enough nights for restful sleep in camps, and the Date Festival in nearby Erfoud adds cultural depth. The desert sky in mid-October is among the clearest of the year.',
  },
  {
    tip: 'Combine desert and gorges in one circuit',
    icon: Compass,
    description: 'October weather makes the classic "Southern Circuit" from Marrakech ideal: Ait Benhaddou, Ouarzazate, Dades Gorge, Todra Gorge, Merzouga, Erfoud (Date Festival), and back. This 4-5 day route covers the best of southeastern Morocco in perfect conditions.',
  },
  {
    tip: 'Atlas trekking window is closing',
    icon: Mountain,
    description: 'October is the last reliable month for high-altitude Atlas trekking before winter snows. If you want to summit Toubkal (4,167m) or trek the Mgoun Massif, prioritize early to mid-October. By late October, first snows may dust the highest peaks.',
  },
  {
    tip: 'Festival season offers free entertainment',
    icon: Music,
    description: 'Beyond the Date Festival, October brings film festivals, music events, and local moussems across Morocco. Many offer free public events, outdoor screenings, and street performances that bring cities to life with cultural energy.',
  },
  {
    tip: 'Book ahead for Erfoud during Date Festival',
    icon: CheckCircle,
    description: 'Erfoud accommodation fills completely during the Date Festival. Book at least 3-4 weeks in advance, or stay in nearby Rissani or Merzouga and day-trip to the festival. Many desert camps offer special Date Festival packages.',
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARY
   =============================================================== */

const sampleItinerary = [
  {
    day: 'Days 1-2',
    title: 'Marrakech: Perfect Weather Exploration',
    morning: 'Arrive in Marrakech to perfect 25-degree weather. Day 1: Bahia Palace (from 70 MAD), Saadian Tombs (from 70 MAD), and the Mellah neighborhood. Lunch at a local cafe near Jemaa el-Fnaa (from 40 MAD). Day 2: Majorelle Garden and YSL Museum (from 150 MAD combined).',
    afternoon: 'Souk exploration in the most comfortable temperatures of the year. Leather, spices, ceramics, and textiles. No need to retreat from midday heat. Hammam in the late afternoon (from 100 MAD). Visit Jardin Secret (from 80 MAD) for tranquil garden architecture.',
    evening: 'Rooftop dinner with perfect evening temperatures of 16-18 degrees (from 150 MAD). Walk through Jemaa el-Fnaa night market (from 30 MAD) with comfortable evening air. The square is at its atmospheric best in October — busy but not summer-overwhelmed.',
  },
  {
    day: 'Days 3-5',
    title: 'Southern Circuit: Gorges, Desert & Date Festival',
    morning: 'Day 3: Cross the High Atlas via Tizi n Tichka. Stop at Ait Benhaddou (from 20 MAD). Lunch in Ouarzazate (from 50 MAD). Continue to Dades Gorge for the night. Day 4: Todra Gorge walk (free), then onward to Erfoud for the Date Festival.',
    afternoon: 'Day 4-5: Explore the Date Festival — tastings, Fantasia displays, folklore performances. Drive to Merzouga (50 km) for afternoon camel trek into Erg Chebbi dunes (included in most tours). Sunset over the dunes followed by dinner at desert camp.',
    evening: 'Night in a Sahara desert camp (from 800 MAD) with October clear skies — the Milky Way is stunningly visible. Temperature around 18-20 degrees is comfortable for stargazing. Sunrise camel ride back from the dunes before driving to Fes via the Ziz Valley.',
  },
  {
    day: 'Days 6-7',
    title: 'Fes: Medina in Perfect Conditions',
    morning: 'Full-day guided tour of Fes el-Bali (from 350 MAD). October temperatures make the medina a pleasure to explore rather than an endurance test. Al Quaraouiyine courtyard, Chouara Tanneries (from 20 MAD), Bou Inania Medersa (from 20 MAD). Day 7: Ceramics workshop (from 200 MAD).',
    afternoon: 'Day 7: Excursion to Meknes (30 minutes by train, from 25 MAD) and the Roman ruins of Volubilis (from 70 MAD). October light on the ancient mosaics and columns is exceptional. Return to Fes for hammam and final souk shopping.',
    evening: 'Multi-course Fassi dinner in a traditional palace restaurant (from 250 MAD). October evening temperatures of 15-17 degrees are perfect for dining in riad courtyards. Post-dinner walk along the illuminated Fes city walls.',
  },
  {
    day: 'Days 8-9',
    title: 'Chefchaouen or Essaouira: Blue or Blue',
    morning: 'Option A: Chefchaouen (4 hours from Fes). The Blue Pearl in October morning light is extraordinary — low sun creating dramatic shadows on blue walls. Wander the medina, visit the kasbah (from 10 MAD), and hike to the Spanish Mosque viewpoint.',
    afternoon: 'Option B: Essaouira (train to Marrakech, then bus). Beach walk along the Atlantic in warm October sunshine. Port seafood lunch (from 60 MAD). Rampart walks and medina art galleries. Gnawa music at a local venue in the evening.',
    evening: 'Final evening in your chosen destination. In Chefchaouen: dinner at a rooftop restaurant overlooking the blue medina (from 80 MAD). In Essaouira: fresh seafood dinner at the port (from 80 MAD) followed by a sunset walk along the beach.',
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'Is October really the best month to visit Morocco?',
    answer: 'Many seasoned Morocco travelers and travel experts consider October the best month to visit, and the data supports this. Temperatures are ideal across all regions: warm enough for comfortable outdoor activities but without summer extremes. The Sahara is at peak season, the Atlas Mountains offer excellent hiking before winter snows, coastal cities are warm for beach walks, and imperial cities are perfect for exploration. Add the Date Festival in Erfoud, film festivals, and shoulder-season pricing, and October delivers the best overall experience-to-value ratio.',
  },
  {
    question: 'What is the weather like in Morocco in October?',
    answer: 'October offers near-perfect conditions across Morocco. Coastal cities see 20-25 degrees with warm but cooling seas (20-22 degrees). Interior cities like Marrakech and Fes enjoy 20-28 degrees with pleasantly cool evenings. The Sahara ranges 18-32 degrees with comfortable nights for camping. The Atlas Mountains are 8-20 degrees, ideal for hiking. Rainfall is low but increasing: expect 1-3 rainy days in most regions, with slightly more in the north (3-5 days).',
  },
  {
    question: 'Is October too cold for the beach in Morocco?',
    answer: 'Not at all, particularly in Agadir and the southern Atlantic coast where October temperatures reach 24-26 degrees and sea temperatures hold around 21-22 degrees. Essaouira is warm for beach walks and outdoor dining, though swimming depends on personal cold tolerance. Mediterranean beaches near Tangier are warmer but water is cooling. Early October generally offers better beach conditions than late October.',
  },
  {
    question: 'How crowded is Morocco in October?',
    answer: 'October is pleasantly moderate in terms of crowds. Summer mass tourism has ended, but the winter high season (November-March for desert and cultural tours) has not fully begun. You will share popular sites with other travelers but without the overwhelming crush of peak periods. The Date Festival in Erfoud draws crowds locally, and popular desert camps book up, but cities and coastal towns are comfortably manageable.',
  },
  {
    question: 'What is the cheapest way to travel Morocco in October?',
    answer: 'Use ONCF trains between major cities (Marrakech-Fes from 200 MAD first class). Stay in budget riads and guesthouses (from 250-400 MAD per night). Eat at local restaurants where tagines cost from 40-60 MAD. Book desert tours locally rather than from abroad (save 40-60 percent). Use shared grand taxis for shorter intercity routes (Fes-Meknes from 25 MAD). Visit free attractions: medina walks, beach walks, souk exploration, and festival events.',
  },
  {
    question: 'Should I book tours and accommodation in advance for October?',
    answer: 'For desert camps and tours during the Date Festival period (mid-late October), book 3-4 weeks ahead. Popular riads in Marrakech and Fes should be booked 2-3 weeks in advance. For the rest of October, 1-2 weeks advance booking is usually sufficient. Walking-in without reservations is possible for budget accommodation but risky for mid-range and luxury options, especially on weekends.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-september',
    title: 'Morocco in September',
    description: 'Early autumn shoulder season with easing heat and great value.',
    icon: Calendar,
  },
  {
    href: '/morocco-in-november',
    title: 'Morocco in November',
    description: 'Late autumn with cooler weather, rain, and low-season prices.',
    icon: CloudRain,
  },
  {
    href: '/best-time-visit-morocco',
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month breakdown for every type of traveler.',
    icon: Clock,
  },
  {
    href: '/morocco-sahara-guide',
    title: 'Sahara Desert Guide',
    description: 'Complete guide to desert tours, camps, and camel treks.',
    icon: Tent,
  },
  {
    href: '/morocco-hiking-guide',
    title: 'Hiking in Morocco',
    description: 'Atlas trails, Toubkal, gorges, and day hikes from cities.',
    icon: Mountain,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInOctoberPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/best-time-visit-morocco" className="hover:text-white transition-colors">
              Best Time to Visit
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">October</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Star className="w-4 h-4" />
            Best Month to Visit
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco in October
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Arguably the best month to visit Morocco. Perfect temperatures for the Sahara, imperial cities,
            coast, and Atlas hiking. Your complete guide to weather, the Date Festival, and making the most
            of Morocco&apos;s golden month.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              October: Morocco&apos;s Perfect Month
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                If you could only visit Morocco once and had to choose a single month, most experienced
                travelers would tell you to choose October. This is the month when everything aligns:
                summer heat has fully receded, winter rains have not yet arrived, and temperatures across
                every region settle into a comfortable range that makes all activities — from Sahara
                camping to Atlas hiking, medina exploring to beach walking — genuinely enjoyable.
              </p>
              <p>
                In Marrakech, the thermometer hovers around a perfect 25-27 degrees Celsius, turning
                the formerly sweltering medina into a paradise for exploration. In the Sahara, days
                are warm without being extreme and nights cool enough for comfortable sleep under
                diamond-clear skies. The Atlas Mountains offer the last reliable window for high-altitude
                trekking before winter snows arrive. And along the coast, sea temperatures at their
                annual peak still permit swimming while the fierce summer winds ease.
              </p>
              <p>
                October also brings unique cultural experiences. The International Date Festival in
                Erfoud celebrates the harvest that sustains the Saharan oases, with tastings, Fantasia
                horse charges, and folklore performances. Film festivals light up Tangier and Ouarzazate.
                And as a shoulder-season month, October offers this excellence at prices 20-30 percent
                below the winter peak season that begins in November.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Weather by Region -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            October Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            October delivers near-perfect conditions across Morocco. Here is what to expect in each region.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are approximate ranges. Early October is warmer than late October across all regions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {weatherRegions.map((region) => {
              const WeatherIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <WeatherIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{region.cities}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)]">
                      <Thermometer className="w-4 h-4" />
                      {region.tempRange}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
                      <CloudRain className="w-3.5 h-3.5" />
                      {region.rainfall}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {region.highlights}
                  </p>
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700">
                    {region.rating}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Events & Festivals -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            October Events &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Date Festival in Erfoud headlines October, alongside film festivals and the
            continuation of the harvest season across Morocco&apos;s oases.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Festival dates vary annually. Check official sources for confirmed 2026 schedules.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {octoberEvents.map((event) => {
              const EventIcon = event.icon;
              return (
                <div key={event.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EventIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {event.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {event.dates}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5" />
                          {event.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {event.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Insider Tip:</span>{' '}
                      {event.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Top Destinations -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Destinations in October
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            October is the rare month when every destination in Morocco works perfectly.
            These six offer particularly compelling reasons to visit.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {topDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {dest.name}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {dest.why}
                  </p>
                  <div className="mb-3">
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Highlights:</span>{' '}
                      {dest.highlights}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Wallet className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Budget:</span>{' '}
                      {dest.budget}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Packing Essentials -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for October
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            October requires a layering strategy. Warm days and cool evenings across most regions,
            with wider temperature swings in the mountains and desert.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packingEssentials.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Budget Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wallet className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Budget Tips for October
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            October offers the best weather at shoulder-season prices. Here is how to maximize your budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {budgetTips.map((tip, index) => (
              <div key={tip.tip} className="card-moroccan p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                    <span className="text-xs font-bold text-[var(--color-gold)]">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.tip}
                    </h3>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-2">{tip.description}</p>
                <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-green-50 text-green-700">
                  {tip.savings}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insider Tips for October
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Expert knowledge to help you make the most of Morocco&apos;s best month.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const InsiderIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <InsiderIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.tip}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 9-Day October Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The ultimate October route: imperial cities, Sahara desert with Date Festival, and the coast or mountains.
          </p>

          <div className="space-y-6">
            {sampleItinerary.map((day) => (
              <div key={day.day} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {day.day}: {day.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Morning</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.morning}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sun className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Afternoon</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.afternoon}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">Evening</p>
                      <p className="text-xs text-[var(--text-secondary)]">{day.evening}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Budget Summary */}
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                9-Day Budget Summary (per person)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 6,000-9,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Hostels, street food, buses, shared desert tour</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 15,000-22,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Riads, restaurants, private desert camp, guided tours</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 30,000-50,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Boutique hotels, private tours, luxury camps, fine dining</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Morocco Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-6 group hover:shadow-lg transition-shadow"
                >
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3 h-3" />
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
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for October in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The best month to visit Morocco awaits. Perfect weather, the Date Festival in Erfoud,
            ideal Sahara conditions, and shoulder-season prices. Start planning your October 2026
            adventure today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Best Time to Visit
            </Link>
            <Link
              href="/morocco-sahara-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Tent className="w-5 h-5" />
              Sahara Desert Guide
            </Link>
            <Link
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wallet className="w-5 h-5" />
              Budget Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

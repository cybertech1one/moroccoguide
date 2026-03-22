import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  Music,
  Compass,
  Clock,
  Lightbulb,
  ArrowRight,
  CheckCircle,
  Calendar,
  Ticket,
  Sun,
  Sparkles,
  Globe,
  Mountain,
  Thermometer,
  CloudSun,
  Flower2,
  Waves,
  Shirt,
  DollarSign,
  Users,
  Plane,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in May 2026 | Weather, Festivals & Travel Guide',
  description:
    'Complete guide to visiting Morocco in May 2026. Rose Festival in Kelaat M\'Gouna, peak trekking season in the Atlas, warm weather, and ideal conditions across all regions. Weather by city, costs, and insider tips.',
  keywords: [
    'morocco in may',
    'visiting morocco may',
    'morocco may weather',
    'rose festival morocco may',
    'morocco may 2026',
    'best time to visit morocco',
    'morocco spring travel',
    'kelaat mgouna rose festival',
    'gnaoua festival essaouira',
    'atlas trekking may',
    'morocco may temperatures',
    'morocco late spring',
    'morocco may itinerary',
    'morocco may what to wear',
    'morocco festivals may',
  ],
  openGraph: {
    title: 'Visiting Morocco in May 2026 | Weather, Festivals & Travel Guide',
    description:
      'Plan your May trip to Morocco. Rose Festival, Atlas trekking, perfect weather coast to desert. Complete guide with temperatures, events, costs, and packing tips.',
    url: `${BASE_URL}/morocco-in-may`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Stunning view of Morocco in May with blooming roses in the Dades Valley and the snow-capped Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in May 2026 | Complete Guide',
    description:
      'Rose Festival, Atlas trekking, warm weather, and perfect conditions everywhere. Your complete guide to Morocco in May with weather, events, and tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-may` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-may`,
  name: 'Visiting Morocco in May 2026 | Weather, Festivals & Travel Guide',
  description:
    'Complete guide to visiting Morocco in May. Rose Festival, peak trekking, warm weather, and ideal conditions across all regions.',
  url: `${BASE_URL}/morocco-in-may`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-may`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in May', item: `${BASE_URL}/morocco-in-may` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the weather like in Morocco in May?', acceptedAnswer: { '@type': 'Answer', text: 'May is one of the best months to visit Morocco. Coastal cities like Essaouira and Agadir enjoy 20-25 degrees Celsius, interior cities like Marrakech and Fes reach 22-30 degrees, the Sahara ranges from 20-35 degrees, and the Atlas Mountains are a pleasant 10-22 degrees. Rainfall is minimal across most regions.' } },
    { '@type': 'Question', name: 'Is May a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'May is arguably the best month to visit Morocco. The weather is warm but not yet scorching, the Rose Festival takes place in Kelaat M\'Gouna, trekking conditions in the Atlas are ideal, and all destinations from coast to desert are accessible and enjoyable. It falls in the shoulder season so crowds are moderate and prices reasonable.' } },
    { '@type': 'Question', name: 'What festivals happen in Morocco in May?', acceptedAnswer: { '@type': 'Answer', text: 'The main festival in May is the Festival of Roses (Moussem des Roses) in Kelaat M\'Gouna in the Dades Valley, usually held in the second or third week of May. The Gnaoua World Music Festival in Essaouira sometimes falls in late May or early June. Marrakech may host cultural events and art exhibitions throughout the month.' } },
    { '@type': 'Question', name: 'Can you trek in the Atlas Mountains in May?', acceptedAnswer: { '@type': 'Answer', text: 'May is peak trekking season in the Atlas Mountains. Snow has melted from lower passes, wildflowers carpet the valleys, and temperatures are ideal for hiking (10-22 degrees). Toubkal summit attempts are possible though some snow may remain above 3,500 meters. The Mgoun traverse and Ait Bougmez valley treks are spectacular in May.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in May?', acceptedAnswer: { '@type': 'Answer', text: 'Pack light layers: cotton shirts, lightweight trousers, a light jacket for evenings and mountain areas, comfortable walking shoes, sunscreen, sunglasses, and a hat. If visiting the coast, bring a windbreaker as Essaouira can be breezy. For Atlas trekking, pack proper hiking boots, warm layers for altitude, and rain protection. Modest clothing is recommended for medina visits.' } },
    { '@type': 'Question', name: 'How crowded is Morocco in May?', acceptedAnswer: { '@type': 'Answer', text: 'May is a shoulder season month, busier than winter but less crowded than the peak summer months of July-August or the October-November autumn season. Popular spots like Marrakech and Fes will have moderate tourist numbers. The Rose Festival area gets busy during the event week. Booking accommodation 2-3 weeks ahead is advisable for popular cities.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    cities: 'Essaouira, Agadir, Casablanca, Rabat',
    tempRange: '20-25°C',
    rainfall: 'Minimal (1-3 days)',
    icon: Waves,
    description: 'Perfect beach weather with gentle sea breezes. Essaouira is windy but sunny. Agadir is the warmest coastal city. Ocean temperature around 18-20°C — refreshing but swimmable.',
    highlight: 'Ideal coastal conditions',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes',
    tempRange: '22-30°C',
    rainfall: 'Very low (0-2 days)',
    icon: Sun,
    description: 'Warm and dry with long sunny days. Comfortable for sightseeing without the oppressive summer heat. Evenings are pleasant for dining outdoors. Marrakech averages 28°C during the day.',
    highlight: 'Warm days, cool evenings',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, M\'Hamid',
    tempRange: '20-35°C',
    rainfall: 'Almost none',
    icon: Thermometer,
    description: 'Getting warmer but still manageable for desert experiences. Nights are comfortable at 18-22°C. Camel treks and desert camps are pleasant. By late May, midday temperatures start climbing toward summer levels.',
    highlight: 'Last comfortable desert month',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ouarzazate, Azrou, Ifrane',
    tempRange: '10-22°C',
    rainfall: 'Light (2-4 days)',
    icon: Mountain,
    description: 'Peak trekking conditions. Snow receding from high passes, wildflowers blooming in valleys. Days are warm and sunny, nights require layers. Higher altitudes (above 3,000m) can still see occasional frost.',
    highlight: 'Peak trekking season',
  },
  {
    region: 'Northern Morocco',
    cities: 'Tangier, Chefchaouen, Tetouan',
    tempRange: '18-25°C',
    rainfall: 'Low (2-4 days)',
    icon: CloudSun,
    description: 'Spring at its finest in the north. Chefchaouen is particularly beautiful with lush green surroundings. Tangier enjoys warm days with Atlantic breezes. Rif Mountains are green and inviting.',
    highlight: 'Lush and green landscapes',
  },
] as const;

/* ===============================================================
   DATA: TOP EXPERIENCES IN MAY
   =============================================================== */

const topExperiences = [
  {
    name: 'Festival of Roses (Kelaat M\'Gouna)',
    icon: Flower2,
    category: 'Festival & Culture',
    location: 'Kelaat M\'Gouna, Dades Valley',
    duration: '2-3 days',
    cost: 'Free (town events) / From 200 MAD (guided tours)',
    description:
      'The annual Moussem des Roses celebrates the Damascena rose harvest in the Dades Valley, known as the Valley of Roses. Held in the second or third week of May, this vibrant festival features a grand parade with floats decorated in millions of rose petals, the crowning of Miss Rose, traditional Amazigh (Berber) music and dance performances, a rose-themed souk selling rosewater, rose oil, rose soap, and dried roses. The entire valley is fragrant with blooming roses — an unforgettable sensory experience. Local cooperatives offer tours of their distilleries where rose essential oil is extracted using traditional copper alembics.',
    insiderTip:
      'Arrive a day early to explore the valley before the crowds. Stay in a local guesthouse in Kelaat M\'Gouna or nearby Boumalne Dades. The festival parade is usually on Saturday — confirm exact dates locally as they depend on the harvest. Buy rose products directly from cooperatives for the best quality and prices. The drive from Marrakech takes about 6 hours via Ouarzazate.',
  },
  {
    name: 'Atlas Mountains Trekking',
    icon: Mountain,
    category: 'Adventure & Nature',
    location: 'High Atlas, Central Atlas, Anti-Atlas',
    duration: '1-7 days',
    cost: 'From 500 MAD/day (guided trek with meals)',
    description:
      'May is the gold standard for Atlas trekking. The snow line has retreated above 3,500 meters, alpine meadows burst with wildflowers — purple irises, red poppies, yellow broom — and Amazigh villages are alive with agricultural activity. The Toubkal Circuit (3-4 days) takes you to North Africa\'s highest peak at 4,167 meters. The M\'Goun Traverse (4-6 days) crosses remote valleys and high passes. Shorter options include the Azzaden Valley (2 days) from Imlil or the Ait Bougmez Valley (happy valley) with its stunning terraced fields and traditional kasbahs.',
    insiderTip:
      'Book a licensed mountain guide through the Bureau des Guides in Imlil (from 500 MAD/day including meals). For Toubkal, be prepared for snow patches above 3,800m — crampons may be needed in early May. The Ait Bougmez valley is less touristy and equally spectacular. Bring layers, sun protection, and proper hiking boots. Acclimatize for a day in Imlil (1,740m) before attempting higher altitudes.',
  },
  {
    name: 'Gnaoua World Music Festival (Essaouira)',
    icon: Music,
    category: 'Music & Culture',
    location: 'Essaouira',
    duration: '3-4 days',
    cost: 'Free (outdoor stages) / From 200 MAD (reserved seating)',
    description:
      'One of Africa\'s premier music festivals, the Gnaoua World Music Festival brings together Gnaoua master musicians (maalems) with international jazz, blues, and world music artists for an extraordinary fusion of sounds. The festival transforms Essaouira\'s medina and beach into open-air concert venues with multiple stages. Note: the festival date varies between late May and late June — check the official schedule for 2026. Gnaoua music, with its hypnotic rhythms rooted in sub-Saharan spiritual traditions, is UNESCO-listed Intangible Cultural Heritage.',
    insiderTip:
      'The main stage on Place Moulay Hassan is free and hosts the biggest acts from 9 PM onward. Arrive by 6 PM for a good spot. Book Essaouira accommodation months in advance if your dates overlap with the festival — prices double and availability vanishes. The intimate indoor concerts at smaller venues (riads, Dar Souiri) are the hidden gems of the festival. Essaouira is windy even in May — bring a jacket for evening concerts.',
  },
  {
    name: 'Dades & Todra Gorges',
    icon: Compass,
    category: 'Nature & Adventure',
    location: 'Dades Valley & Tinghir',
    duration: '2-3 days',
    cost: 'From 300 MAD (transport + accommodation)',
    description:
      'The dramatic canyon country of southeastern Morocco is at its best in May. The Todra Gorge — a 300-meter-deep slot canyon near Tinghir — is perfect for hiking and rock climbing in spring temperatures. The Dades Gorge offers a winding road through spectacular rock formations and the famous switchback road. Combine with the Rose Festival for the ultimate May road trip through the Valley of Roses, past red kasbahs and palm-lined oases.',
    insiderTip:
      'The Dades Gorge road is one of Morocco\'s most scenic drives. Stay at a guesthouse perched on the gorge rim for sunset and sunrise views (from 400 MAD including dinner and breakfast). In the Todra Gorge, arrive early morning when sunlight illuminates the canyon walls. Rock climbers will find over 300 bolted routes. The road connecting the two gorges via the "Road of 1,000 Kasbahs" is extraordinary.',
  },
  {
    name: 'Marrakech Without the Heat',
    icon: Landmark,
    category: 'City & Culture',
    location: 'Marrakech',
    duration: '2-4 days',
    cost: 'From 500 MAD/day',
    description:
      'May is the sweet spot for Marrakech — warm enough for rooftop dining and pool days, cool enough for comfortable medina exploration. The Jardin Majorelle garden is lush and green, Jemaa el-Fna square buzzes with energy every evening, and the souks are alive without the suffocating summer heat. Day temperatures average 28°C with cool evenings around 16°C. This is arguably the best month to experience everything Marrakech offers.',
    insiderTip:
      'Start mornings early (by 9 AM) for souk shopping when it\'s coolest. Long lunches at courtyard restaurants — Nomad, Le Jardin, Dar Yacout — are a May pleasure. Afternoons are perfect for museums (Musee Yves Saint Laurent, Photography Museum) or hammam visits. Jemaa el-Fna comes alive from 5 PM with food stalls, musicians, and performers. Book a riad with a plunge pool for afternoon refreshment.',
  },
  {
    name: 'Coastal Road Trip',
    icon: Globe,
    category: 'Road Trip & Beach',
    location: 'Essaouira to Agadir coastline',
    duration: '3-5 days',
    cost: 'From 400 MAD/day (car rental + fuel + accommodation)',
    description:
      'May offers ideal conditions for Morocco\'s stunning Atlantic coast road trip. Drive from Essaouira south through Sidi Kaouki, Imsouane (the surfing paradise), Taghazout, and down to Agadir and beyond to Legzira\'s famous rock arches. The coast is uncrowded, surf is consistent, and temperatures hover at a perfect 22-25°C. Beach towns have their summer infrastructure open but without the July-August crowds.',
    insiderTip:
      'Rent a car in Essaouira or Agadir (from 300 MAD/day). Imsouane is the hidden gem — a tiny fishing village with a legendary long right-hand wave and fresh seafood served on the cliff. Taghazout is the surf capital with excellent cafes and yoga retreats. Drive the coast road (not the highway) for the best views. Budget for fresh seafood lunches at beach shacks (from 60 MAD for grilled fish).',
  },
] as const;

/* ===============================================================
   DATA: WHAT TO DO BY DESTINATION
   =============================================================== */

const destinationGuide = [
  {
    destination: 'Marrakech',
    icon: Landmark,
    rating: 'Excellent',
    whyVisit: 'Warm but comfortable (22-30°C). Perfect for medina exploration, gardens, rooftop dining. Ideal month before summer heat.',
    mustDo: 'Jemaa el-Fna at sunset, Jardin Majorelle, Bahia Palace, souk shopping, day trip to Ourika Valley',
  },
  {
    destination: 'Fes',
    icon: Star,
    rating: 'Excellent',
    whyVisit: 'Spring warmth (20-28°C) without summer intensity. Tanneries, medina, and spiritual sites at their most pleasant.',
    mustDo: 'Fes el-Bali medina, Chouara Tannery, Bou Inania Medersa, Volubilis day trip, Fes cooking class',
  },
  {
    destination: 'Essaouira',
    icon: Waves,
    rating: 'Excellent',
    whyVisit: 'Sunny and breezy (20-24°C). Potential Gnaoua Festival dates. Great for surfing, art galleries, fresh seafood.',
    mustDo: 'Medina walks, ramparts sunset, port fish market, surfing at Sidi Kaouki, Gnaoua music venues',
  },
  {
    destination: 'Chefchaouen',
    icon: Camera,
    rating: 'Excellent',
    whyVisit: 'Lush green Rif Mountains frame the blue city beautifully (18-25°C). Wildflowers, waterfalls, perfect hiking.',
    mustDo: 'Blue medina photography, Ras el-Maa waterfall, Akchour waterfalls hike, Spanish Mosque sunset',
  },
  {
    destination: 'Sahara Desert',
    icon: Thermometer,
    rating: 'Good (early May)',
    whyVisit: 'Last month for comfortable desert camping (20-35°C). Nights are warm enough for pleasant stargazing. Late May gets hot.',
    mustDo: 'Erg Chebbi camel trek, luxury desert camp, sunrise dunes, sandboarding, Gnaoua music around campfire',
  },
  {
    destination: 'Atlas Mountains',
    icon: Mountain,
    rating: 'Excellent',
    whyVisit: 'Peak season for trekking. Wildflowers, accessible passes, comfortable temperatures (10-22°C).',
    mustDo: 'Toubkal ascent, M\'Goun Traverse, Ait Bougmez valley, Ourika Valley waterfalls, Berber village homestay',
  },
] as const;

/* ===============================================================
   DATA: PRACTICAL TIPS
   =============================================================== */

const practicalTips = [
  {
    icon: Shirt,
    title: 'What to Pack',
    tips: [
      'Light cotton clothing for daytime warmth',
      'Light jacket or cardigan for cool evenings',
      'Comfortable walking shoes for medinas',
      'Hiking boots if trekking in the Atlas',
      'Sun hat, quality sunscreen (SPF 50+), sunglasses',
      'Windbreaker for coastal towns (especially Essaouira)',
      'Layers for mountain areas where temperatures drop',
      'Modest clothing for mosque and medina visits',
    ],
  },
  {
    icon: DollarSign,
    title: 'Budget Expectations',
    tips: [
      'Accommodation: from 250 MAD (budget) to 2,000+ MAD (luxury riad)',
      'Meals: from 30 MAD (street food) to 300 MAD (fine dining)',
      'Transport: from 25 MAD (bus) to 500 MAD/day (private driver)',
      'Guided treks: from 500 MAD/day (guide + meals)',
      'Museum entry: from 10-70 MAD per site',
      'May is shoulder season — prices are moderate',
      'Rose Festival week sees higher prices in Dades Valley',
      'Seasonal pricing can change — confirm before booking',
    ],
  },
  {
    icon: Plane,
    title: 'Getting Around',
    tips: [
      'Domestic flights connect Casablanca to major cities (from 500 MAD)',
      'ONCF trains link Casablanca, Rabat, Fes, Marrakech, Tangier',
      'CTM and Supratours buses cover routes trains miss',
      'Car rental ideal for Rose Valley and coast (from 300 MAD/day)',
      'Grand taxis for intercity travel (negotiate prices)',
      'May has no major holiday disruptions to transport',
      'Book Rose Festival area transport and accommodation early',
      'Al Boraq high-speed train: Tangier-Casablanca in 2 hours',
    ],
  },
  {
    icon: Users,
    title: 'Cultural Considerations',
    tips: [
      'Ramadan may overlap with May some years — check 2026 dates',
      'Respectful dress in medinas: cover shoulders and knees',
      'Ask before photographing people, especially in rural areas',
      'Friday afternoons: many shops close for mosque prayers',
      'Tipping: 10-15% in restaurants, 20-50 MAD for guides',
      'Bargain respectfully in souks — start at 40-50% of asking price',
      'Learn basic French or Arabic phrases — locals appreciate the effort',
      'Rose Festival is a family event — dress respectfully',
    ],
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARIES
   =============================================================== */

const sampleItineraries = [
  {
    title: '7-Day Classic May Itinerary',
    description: 'The best of Morocco in peak spring conditions',
    days: [
      { day: 1, location: 'Marrakech', activity: 'Arrive, explore Jemaa el-Fna, rooftop dinner' },
      { day: 2, location: 'Marrakech', activity: 'Souks, Bahia Palace, Jardin Majorelle, hammam' },
      { day: 3, location: 'Rose Valley', activity: 'Drive to Dades Valley, Rose Festival or rose cooperative visits' },
      { day: 4, location: 'Dades/Todra', activity: 'Todra Gorge hike, Dades Gorge scenic drive' },
      { day: 5, location: 'Sahara', activity: 'Drive to Merzouga, camel trek, desert camp sunset' },
      { day: 6, location: 'Fes', activity: 'Drive to Fes via Ziz Gorge, evening medina walk' },
      { day: 7, location: 'Fes', activity: 'Full day: medina, tanneries, Bou Inania, departure' },
    ],
  },
  {
    title: '5-Day Coast & Mountains',
    description: 'Atlantic coast and Atlas trekking in perfect May weather',
    days: [
      { day: 1, location: 'Essaouira', activity: 'Arrive, medina, ramparts, port fish lunch, sunset' },
      { day: 2, location: 'Essaouira', activity: 'Surfing/Gnaoua music, beach day, gallery visits' },
      { day: 3, location: 'Marrakech', activity: 'Drive to Marrakech, afternoon souks, Jemaa el-Fna' },
      { day: 4, location: 'Atlas Mountains', activity: 'Day trek in Ourika or Imlil valley, waterfalls' },
      { day: 5, location: 'Marrakech', activity: 'Gardens, museums, final shopping, departure' },
    ],
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What is the weather like in Morocco in May?',
    answer: 'May brings warm, mostly dry weather across Morocco. Coastal cities enjoy 20-25°C with ocean breezes, interior cities like Marrakech and Fes reach 22-30°C, the Sahara ranges from 20-35°C (still manageable for desert experiences), and the Atlas Mountains are a trekker\'s paradise at 10-22°C. Rainfall is minimal with perhaps 1-3 rainy days in the north and virtually none in the south. UV levels are high so sun protection is essential.',
  },
  {
    question: 'Is May a good time to visit Morocco?',
    answer: 'May is arguably the single best month to visit Morocco. Every region is accessible and enjoyable. The weather is warm without the extreme summer heat, the Rose Festival adds a unique cultural experience, Atlas trekking is at its peak, the coast is uncrowded with good surf, and the desert is still comfortable for overnight camps. It sits in the sweet spot between the wet spring and scorching summer. Prices and crowds are moderate compared to peak seasons.',
  },
  {
    question: 'When is the Rose Festival in Morocco?',
    answer: 'The Festival of Roses (Moussem des Roses) takes place annually in Kelaat M\'Gouna in the Dades Valley, typically during the second or third week of May. The exact dates depend on the rose harvest, which varies with rainfall and temperature. The festival usually runs for 3 days with the main parade on Saturday. Check locally or with tour operators for confirmed 2026 dates. The surrounding Valley of Roses is fragrant with blooming Damascena roses throughout May.',
  },
  {
    question: 'Can I visit the Sahara Desert in May?',
    answer: 'Yes, early to mid-May is the last comfortable window for Sahara experiences. Daytime temperatures reach 30-35°C which is warm but bearable, and nights are pleasant at 18-22°C — ideal for sleeping under the stars at desert camps. By late May, temperatures start climbing toward summer levels. Book morning or late afternoon camel treks to avoid midday heat. Merzouga and M\'Hamid are the main desert gateways.',
  },
  {
    question: 'What should I wear in Morocco in May?',
    answer: 'Light, breathable clothing in natural fabrics works best. Pack cotton shirts, lightweight trousers or long skirts, comfortable walking shoes for medinas, and a light jacket for evenings. For coastal areas (especially Essaouira), bring a windbreaker. For Atlas trekking, pack proper hiking boots, warm layers for altitude (it can drop to 5°C at high camps), and rain protection. Always have a hat and sunglasses. Respectful dress covering shoulders and knees is appreciated in medinas and rural areas.',
  },
  {
    question: 'How busy is Morocco in May?',
    answer: 'May is a pleasant shoulder season with moderate tourism. You will encounter other travelers in popular spots like Marrakech, Fes, and Essaouira, but nothing like the July-August European holiday rush or the October-November peak. Booking accommodation 1-2 weeks ahead is usually sufficient for most cities. Exceptions: the Rose Festival area (book well ahead) and Essaouira if the Gnaoua Festival falls in late May (book months ahead). Many travelers consider May the ideal balance of good weather and manageable crowds.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-june',
    title: 'Morocco in June',
    description: 'Summer begins: Gnaoua Festival, coast season, and how to handle the heat.',
    icon: Sun,
  },
  {
    href: '/best-beaches-morocco',
    title: 'Best Beaches',
    description: 'Top Atlantic and Mediterranean beaches for your May coastal escape.',
    icon: Waves,
  },
  {
    href: '/atlas-mountains',
    title: 'Atlas Mountains Guide',
    description: 'Trekking routes, villages, and adventure in peak season.',
    icon: Mountain,
  },
  {
    href: '/marrakech',
    title: 'Marrakech Guide',
    description: 'Everything to see, do, and eat in the Red City.',
    icon: Landmark,
  },
  {
    href: '/morocco-budget-travel',
    title: 'Budget Travel Tips',
    description: 'How to explore Morocco affordably in any season.',
    icon: DollarSign,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInMayPage() {
  return (
    <>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* -- Hero Section -- */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-morocco.webp"
          alt="Morocco in May with blooming roses in the Dades Valley and the Atlas Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calendar className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Monthly Travel Guide</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Visiting Morocco in May
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Rose festivals, peak trekking, warm sunshine, and ideal conditions across every region.
            May is Morocco at its most magnificent.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <Thermometer className="w-4 h-4" /> 20-30°C average
            </span>
            <span className="flex items-center gap-1">
              <CloudSun className="w-4 h-4" /> Minimal rain
            </span>
            <span className="flex items-center gap-1">
              <Flower2 className="w-4 h-4" /> Rose Festival season
            </span>
            <span className="flex items-center gap-1">
              <Mountain className="w-4 h-4" /> Peak trekking
            </span>
          </div>
        </div>
      </section>

      {/* -- Breadcrumbs -- */}
      <div className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
        <div className="container-morocco py-3">
          <nav className="flex items-center gap-2 text-sm text-[var(--text-muted)]">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[var(--text-primary)] font-medium">Morocco in May</span>
          </nav>
        </div>
      </div>

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why May Is Morocco&apos;s Best-Kept Secret
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              May sits in a golden window for Morocco travel. Winter rains have painted the landscape green,
              summer heat has not yet arrived, and the country bursts with cultural festivals and natural beauty.
              The famous Rose Festival fills the Dades Valley with fragrance and celebration. Atlas peaks shed
              their snow to reveal wildflower meadows. Coastal towns are sunny and uncrowded. The Sahara is
              still accessible for overnight camps. From Tangier to the desert, every corner of Morocco is
              at its finest in May.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="card-moroccan p-6 text-center">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Perfect Weather
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Warm sunshine without extreme heat. Every region is comfortable for exploration and outdoor activities.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Flower2 className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Rose Festival
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The annual Festival of Roses in Kelaat M&apos;Gouna is a unique celebration of the Damascena rose harvest.
              </p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Peak Trekking
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Atlas Mountains are in prime condition with wildflowers, clear skies, and accessible high passes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Weather by Region -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            May Weather Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            May delivers consistently warm, dry weather with regional variations. Here is what to expect in each area.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {weatherByRegion.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{region.cities}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Thermometer className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-sm font-semibold text-[var(--text-primary)]">{region.tempRange}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <CloudSun className="w-4 h-4 text-[var(--color-gold)]" />
                      <span className="text-xs text-[var(--text-muted)]">{region.rainfall}</span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{region.description}</p>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">{region.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Top Experiences -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Top Experiences in Morocco in May
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From rose-scented valleys to mountain peaks and music-filled medinas, May delivers Morocco&apos;s finest experiences.
          </p>
          <div className="space-y-8">
            {topExperiences.map((experience, idx) => {
              const ExpIcon = experience.icon;
              return (
                <div key={experience.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex items-center gap-4 md:w-1/3">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <span className="text-lg font-bold text-white">{idx + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {experience.name}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <ExpIcon className="w-4 h-4 text-[var(--color-accent)]" />
                          <span className="text-xs text-[var(--text-muted)]">{experience.category}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex flex-wrap gap-4 mb-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {experience.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {experience.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Ticket className="w-3 h-3" /> {experience.cost}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-4">{experience.description}</p>
                      <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Insider Tip</p>
                            <p className="text-xs text-[var(--text-secondary)]">{experience.insiderTip}</p>
                          </div>
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

      {/* -- Destination Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Go in Morocco in May
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every major destination is excellent in May. Here is your region-by-region breakdown.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinationGuide.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.destination} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {dest.destination}
                    </h3>
                  </div>
                  <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded mb-3">
                    <CheckCircle className="w-3 h-3" /> {dest.rating}
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{dest.whyVisit}</p>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1">Must-Do:</p>
                    <p className="text-xs text-[var(--text-muted)]">{dest.mustDo}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Sample Itineraries -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            May Itinerary Ideas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Two suggested routes to make the most of Morocco in May.
          </p>
          <div className="space-y-8">
            {sampleItineraries.map((itinerary) => (
              <div key={itinerary.title} className="card-moroccan p-6 md:p-8">
                <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {itinerary.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{itinerary.description}</p>
                <div className="space-y-3">
                  {itinerary.days.map((day) => (
                    <div key={day.day} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-white">{day.day}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{day.location}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{day.activity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Practical Tips for May Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know to plan your May trip smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {practicalTips.map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <SectionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip) => (
                      <li key={tip} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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
                  <p className="text-xs text-[var(--text-secondary)] mb-3">{guide.description}</p>
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
            Ready to Experience Morocco in May?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the rose-scented valleys of the Dades to the snow-capped peaks of the Atlas and the
            sun-drenched Atlantic coast, May is Morocco at its absolute finest. Start planning today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Marrakech Guide
            </Link>
            <Link
              href="/atlas-mountains"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Atlas Mountains
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Essaouira Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

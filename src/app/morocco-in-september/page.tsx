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
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in September 2026 | Weather, Events & Travel Guide',
  description:
    'Complete guide to visiting Morocco in September 2026. Early autumn brings easing heat, thinning crowds, and excellent shoulder-season value. Weather by region, festivals, Sahara trips, packing tips, and budget advice.',
  keywords: [
    'morocco in september',
    'visiting morocco september',
    'morocco september weather',
    'morocco autumn travel',
    'morocco shoulder season',
    'september morocco temperature',
    'morocco september events',
    'sahara desert september',
    'marrakech september weather',
    'morocco travel guide september',
    'best time visit morocco',
    'morocco fall travel',
    'tanjazz festival tangier',
    'morocco date harvest',
    'morocco budget september',
  ],
  openGraph: {
    title: 'Visiting Morocco in September 2026 | Weather, Events & Travel Guide',
    description:
      'Early autumn in Morocco: heat easing, crowds thinning, and shoulder-season value. Complete guide with weather by region, festivals, Sahara advice, and budget tips for September 2026.',
    url: `${BASE_URL}/morocco-in-september`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco landscape in early autumn with golden light over the medina and Atlas Mountains in the distance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in September 2026 | Complete Guide',
    description:
      'September is Morocco shoulder season at its best. Easing heat, fewer crowds, great prices. Weather, events, Sahara trips, and packing tips.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-september` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-september`,
  name: 'Visiting Morocco in September 2026 | Weather, Events & Travel Guide',
  description:
    'Complete guide to visiting Morocco in September. Early autumn brings easing heat, shoulder-season value, Tanjazz Festival, date harvests, and comfortable Sahara temperatures.',
  url: `${BASE_URL}/morocco-in-september`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-september`,
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
      { '@type': 'ListItem', position: 3, name: 'September', item: `${BASE_URL}/morocco-in-september` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is September a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'September is an excellent time to visit Morocco. It marks the beginning of the shoulder season with summer heat easing, crowds thinning after the August peak, and prices dropping from high-season rates. The Sahara becomes comfortable again, coastal cities are warm but pleasant (22-27 degrees Celsius), and cultural events like the Tanjazz Festival add to the appeal.' } },
    { '@type': 'Question', name: 'What is the weather like in Morocco in September?', acceptedAnswer: { '@type': 'Answer', text: 'September weather varies by region. Coastal cities like Essaouira and Tangier see 22-27 degrees Celsius with minimal rain. Interior cities like Marrakech and Fes range from 25-35 degrees, still warm but cooling from summer peaks. The Sahara ranges 22-38 degrees with comfortable mornings and evenings. The Atlas Mountains are pleasant at 12-25 degrees, ideal for hiking.' } },
    { '@type': 'Question', name: 'What events happen in Morocco in September?', acceptedAnswer: { '@type': 'Answer', text: 'September hosts the Tanjazz Festival in Tangier (one of Africa top jazz festivals), the Meknes Olive Festival celebrating the early olive harvest, and the date harvest season in the Draa Valley and Saharan oases. Various moussems (religious festivals) also take place across the country, and Ramadan dates should be checked as they shift annually.' } },
    { '@type': 'Question', name: 'Can you visit the Sahara Desert in September?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, September is when the Sahara becomes comfortable again after the extreme summer heat. Daytime temperatures range 28-38 degrees with cooler mornings and evenings (22-25 degrees), making camel treks, overnight camps, and stargazing enjoyable. It is the start of the desert high season which runs through to April.' } },
    { '@type': 'Question', name: 'Are prices lower in Morocco in September?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, September marks the beginning of shoulder season pricing. Hotel rates in Marrakech and other popular destinations drop 20-35 percent from August peaks. Riads that charge from 800-1,200 MAD per night in summer may offer rooms from 500-800 MAD. Flight prices also tend to decrease as European school holidays end. Early September still sees some summer pricing, with better deals from mid-September onward.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in September?', acceptedAnswer: { '@type': 'Answer', text: 'Pack lightweight, breathable clothing for warm days, plus a light layer for cooler evenings (especially in the mountains and desert after dark). Sun protection remains essential: hat, sunscreen, and sunglasses. Comfortable walking shoes are a must. If visiting the coast, bring a light windbreaker as Atlantic breezes pick up. Modest clothing covering shoulders and knees is respectful, especially outside tourist zones.' } },
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
    tempRange: '22-27 C',
    rainfall: 'Minimal (1-2 rainy days)',
    highlights: 'Warm seas for swimming, Atlantic breezes keep it comfortable, beach season still strong. Essaouira wind eases slightly compared to summer.',
    rating: 'Excellent',
  },
  {
    region: 'Mediterranean Coast',
    cities: 'Tangier, Tetouan, Al Hoceima',
    icon: Sun,
    tempRange: '22-28 C',
    rainfall: 'Very low (0-1 rainy days)',
    highlights: 'Warm Mediterranean waters, crowds thin after Spanish holiday season ends. Tangier buzzes with Tanjazz energy. Perfect swimming conditions.',
    rating: 'Excellent',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes',
    icon: Thermometer,
    tempRange: '25-35 C',
    rainfall: 'Very low (0-1 rainy days)',
    highlights: 'Still warm but noticeably cooler than July-August peaks. Early mornings and evenings comfortable for medina exploration. Marrakech hovers around 30-33 degrees.',
    rating: 'Very Good',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, Draa Valley',
    icon: Tent,
    tempRange: '22-38 C',
    rainfall: 'Virtually none',
    highlights: 'The desert reopens for comfortable tourism after summer extremes. Mornings and evenings are pleasant (22-25 degrees), daytime still hot but manageable. Camel treks and overnight camps resume in full.',
    rating: 'Very Good',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ouarzazate, Dades Valley',
    icon: Mountain,
    tempRange: '12-25 C',
    rainfall: 'Low (1-3 rainy days)',
    highlights: 'Ideal hiking temperatures. High passes are accessible and snow-free. Valleys are warm during the day, pleasantly cool at night. Perfect for trekking to Toubkal summit.',
    rating: 'Excellent',
  },
] as const;

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const septemberEvents = [
  {
    name: 'Tanjazz Festival (Tangier)',
    icon: Music,
    dates: 'Mid-September (dates vary annually)',
    location: 'Tangier',
    description: 'One of the most prestigious jazz festivals in Africa, Tanjazz transforms Tangier into a global music destination. Founded in 2000, the festival attracts international and Moroccan artists performing across intimate venues throughout the city — from the Palais des Institutions Italiennes to open-air stages overlooking the Strait of Gibraltar. Past performers include Marcus Miller, Richard Bona, and Dhafer Youssef. The festival blends jazz with Gnawa, Andalusian, and world music traditions.',
    price: 'From 200 MAD per concert / Festival passes available',
    tip: 'Book Tangier accommodation early as the city fills up during Tanjazz. Many free fringe events happen in cafes and public squares around the medina. Combine with a weekend exploring Tangier itself.',
  },
  {
    name: 'Meknes Olive Festival',
    icon: TreesIcon,
    dates: 'Late September / Early October',
    location: 'Meknes',
    description: 'The Meknes-Tafilalet region is the olive heartland of Morocco, producing some of the finest olive oil in North Africa. The annual Olive Festival celebrates the beginning of the harvest season with tastings, agricultural exhibitions, cooking demonstrations, and cultural performances. Local cooperatives showcase their cold-pressed oils, and visitors can learn about the centuries-old tradition of olive cultivation that defines the Meknes countryside.',
    price: 'Free entry to most events',
    tip: 'Visit the olive groves surrounding Meknes to see the harvest in progress. The volubilis ruins nearby are surrounded by ancient olive trees — a beautiful setting in the September light.',
  },
  {
    name: 'Date Harvest Season',
    icon: Calendar,
    dates: 'September - October',
    location: 'Draa Valley, Zagora, Erfoud, Tinghir',
    description: 'September marks the start of the annual date harvest across Morocco southeastern oases. The Draa Valley — one of the longest palm oases in the world — comes alive as farming communities gather millions of dates from towering palm trees. Visitors can witness the traditional harvesting process, visit date sorting cooperatives, and taste dozens of varieties from golden Boufeggouss to dark Medjool. The harvest is a joyful time in these desert communities.',
    price: 'Free to observe / From 50 MAD for guided palm grove visits',
    tip: 'Time your Sahara trip to coincide with the harvest. The Draa Valley between Ouarzazate and Zagora is particularly scenic with date-laden palms against red kasbahs. Fresh dates picked that morning are a revelation compared to imported ones.',
  },
  {
    name: 'Moussem Festivals (Various)',
    icon: Sparkles,
    dates: 'Throughout September (dates vary)',
    location: 'Various cities and villages',
    description: 'Moussems are traditional religious and cultural festivals held throughout Morocco, often honoring a local saint or celebrating a seasonal event. September sees several moussems in rural areas, particularly in the Middle Atlas and Souss regions. These are authentic cultural experiences rarely seen by tourists, featuring Fantasia horse displays, traditional music, communal feasting, and vibrant local markets. Each moussem is unique to its community.',
    price: 'Free',
    tip: 'Ask at local tourist offices or your riad for current moussem dates, as they change annually. These events offer a window into Moroccan culture that most tourists never see. Dress modestly and ask permission before photographing.',
  },
] as const;

/* ===============================================================
   DATA: TOP DESTINATIONS IN SEPTEMBER
   =============================================================== */

const topDestinations = [
  {
    name: 'Marrakech',
    icon: Star,
    why: 'Shoulder season brings relief from summer extremes. Temperatures around 30-33 degrees are warm but manageable, and the medina is noticeably less crowded than July-August. Riad prices drop 20-35 percent. Evening dining on rooftop terraces is comfortable without the summer swelter.',
    highlights: 'Jemaa el-Fnaa at sunset, Bahia Palace, Majorelle Garden, souks with fewer tourists, comfortable hammam weather',
    budget: 'Riads from 500 MAD/night, meals from 40 MAD, guided medina tour from 300 MAD',
  },
  {
    name: 'Sahara Desert (Merzouga & Zagora)',
    icon: Tent,
    why: 'The desert becomes accessible again after summer extremes. Morning and evening temperatures of 22-25 degrees make camel treks enjoyable, and the clear September skies offer spectacular stargazing. This is the start of the desert high season that runs through April.',
    highlights: 'Erg Chebbi dunes, camel trekking, luxury desert camps, stargazing, sunrise over dunes, Gnawa music',
    budget: 'Desert tour from Marrakech from 1,200 MAD (2 days), luxury camp from 2,500 MAD/night',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    why: 'The famous Essaouira wind eases slightly in September while temperatures remain warm (22-26 degrees). The beach is excellent for swimming, and the atmospheric medina is less crowded. Seafood is at peak freshness as fishing season continues strong.',
    highlights: 'Beach walks, medina art galleries, seafood at the port, kitesurfing, Gnawa music venues, sunset rampart walks',
    budget: 'Riads from 400 MAD/night, port seafood lunch from 60 MAD, hammam from 100 MAD',
  },
  {
    name: 'Fes',
    icon: Globe,
    why: 'Early autumn transforms the Fes medina experience. Summer heat that can make the narrow alleys oppressive lifts to a comfortable 25-30 degrees. The tanneries are less pungent, and the souks are easier to navigate without summer crowds. Cultural life resumes after the summer lull.',
    highlights: 'Fes el-Bali medina, Al Quaraouiyine University, Chouara Tanneries, Bou Inania Medersa, ceramics workshops',
    budget: 'Riads from 450 MAD/night, guided medina tour from 350 MAD, pottery workshop from 200 MAD',
  },
  {
    name: 'Tangier',
    icon: Compass,
    why: 'September in Tangier is magical — warm Mediterranean weather, the Tanjazz Festival, and a distinctly cosmopolitan atmosphere as the city creative scene ramps up for autumn. Ferry traffic to Spain is manageable again after the summer Moroccan diaspora rush.',
    highlights: 'Tanjazz Festival, Kasbah Museum, Cafe Hafa sunset, Cap Spartel, Hercules Caves, medina exploration',
    budget: 'Hotels from 400 MAD/night, Tanjazz tickets from 200 MAD, grand taxi to Cap Spartel from 200 MAD',
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    why: 'September is arguably the best month for Atlas hiking. Snow has long melted from high passes, temperatures at altitude are comfortable (12-25 degrees), and the air is crystal clear. Toubkal ascent is at its most accessible, and the valleys are green from lingering summer rains.',
    highlights: 'Toubkal summit trek, Imlil Valley, Ourika Valley day trips, Berber villages, Ait Bougmez Valley',
    budget: 'Toubkal 2-day trek from 1,500 MAD with guide, Imlil guesthouse from 300 MAD/night',
  },
] as const;

/* ===============================================================
   DATA: PACKING ESSENTIALS
   =============================================================== */

const packingEssentials = [
  {
    item: 'Lightweight breathable clothing',
    icon: Sun,
    detail: 'Cotton or linen shirts and trousers. Days are still warm across most regions, especially interior cities. Pack modest options covering shoulders and knees for medina visits and mosques.',
  },
  {
    item: 'Light evening layer',
    icon: Sunset,
    detail: 'A light cardigan, fleece, or long-sleeve shirt for cooler evenings, particularly in the mountains, desert after dark, and coastal cities where Atlantic breezes pick up.',
  },
  {
    item: 'Sun protection',
    icon: ShieldCheck,
    detail: 'Wide-brimmed hat, SPF 50 sunscreen, quality sunglasses. UV levels remain high in September across Morocco. Essential for Sahara visits and beach days.',
  },
  {
    item: 'Comfortable walking shoes',
    icon: Compass,
    detail: 'Sturdy, broken-in shoes for medina cobblestones and Atlas trails. Sandals for beach and relaxed settings. If trekking, bring proper hiking boots.',
  },
  {
    item: 'Light windbreaker or rain jacket',
    icon: CloudRain,
    detail: 'Coastal cities get Atlantic breezes and occasional late-September showers. A packable waterproof layer is wise insurance, especially for mountain excursions.',
  },
  {
    item: 'Daypack and water bottle',
    icon: Luggage,
    detail: 'A small daypack for excursions. Refillable water bottle with filter for mountain hikes. Stay hydrated — September air can be deceptively dry.',
  },
] as const;

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  {
    tip: 'Book mid-September onward for best prices',
    description: 'Early September still sees some summer pricing as European travelers take late holidays. From mid-September, shoulder-season rates kick in with hotel prices dropping 20-35 percent across the country.',
    savings: 'Save 20-35% on accommodation',
  },
  {
    tip: 'Negotiate riad rates for longer stays',
    description: 'Riad owners are keen to fill rooms as summer crowds vanish. Stays of 3+ nights can often be negotiated at a significant discount, especially when booking directly rather than through platforms.',
    savings: 'Save 10-20% on 3+ night stays',
  },
  {
    tip: 'Fly midweek for cheaper fares',
    description: 'September sees fewer charter flights and lower demand. Tuesday, Wednesday, and Thursday flights from European hubs offer the best value. Budget carriers like Ryanair serve Marrakech and Fes.',
    savings: 'Save 30-50% on flights',
  },
  {
    tip: 'Eat where locals eat',
    description: 'Street food and local restaurants serve tagines from 30-50 MAD and sandwiches from 15-25 MAD. Jemaa el-Fnaa food stalls, port restaurants in Essaouira, and neighborhood cafes offer authentic meals at a fraction of tourist restaurant prices.',
    savings: 'Save 50-70% on meals',
  },
  {
    tip: 'Use shared grand taxis for intercity travel',
    description: 'Grand taxis between cities cost a fraction of private transfers. Marrakech to Essaouira from 80 MAD, Fes to Meknes from 25 MAD. CTM and Supratours buses offer comfortable, air-conditioned intercity connections.',
    savings: 'Save 60-80% vs private transfer',
  },
  {
    tip: 'Book Sahara tours from Marrakech or Ouarzazate',
    description: 'Desert tours booked locally in Morocco cost significantly less than those booked online from abroad. A 2-day Merzouga tour from Marrakech starts from 1,200 MAD locally versus 3,000+ MAD booked from Europe.',
    savings: 'Save 40-60% on desert tours',
  },
] as const;

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  {
    tip: 'Check Ramadan dates before booking',
    icon: Calendar,
    description: 'Ramadan shifts annually on the Islamic calendar. If it overlaps with your September trip, many restaurants close during daytime, opening hours change, and the atmosphere transforms. It is a fascinating cultural experience but requires planning.',
  },
  {
    tip: 'September light is photographers golden hour',
    icon: Camera,
    description: 'The lower sun angle of early autumn creates extraordinary light for photography. The golden hour lasts longer than summer, and the quality of light in medinas, on Atlas peaks, and over Sahara dunes is unmatched. Pack a polarizing filter.',
  },
  {
    tip: 'Shoulder season means better service',
    icon: Heart,
    description: 'With fewer tourists competing for attention, September visitors often receive more personalized service at riads, restaurants, and on tours. Guides have more time, chefs prepare dishes with extra care, and riad owners are more available for recommendations.',
  },
  {
    tip: 'Atlas trekking is at its peak',
    icon: Mountain,
    description: 'September offers the best trekking conditions of the year. All high passes are snow-free, temperatures at altitude are comfortable, and trails are dry. Book a guide for Toubkal summit or multi-day treks through the Ait Bougmez Valley.',
  },
  {
    tip: 'Coastal swimming is excellent',
    icon: Waves,
    description: 'Atlantic and Mediterranean water temperatures peak in September (21-24 degrees Celsius) after absorbing summer heat. Beaches are less crowded than August but still warm enough for comfortable swimming through the month.',
  },
  {
    tip: 'Book popular riads 2-3 weeks ahead',
    icon: CheckCircle,
    description: 'While September is shoulder season, the best-rated riads in Marrakech, Fes, and Essaouira still fill up, especially during Tanjazz and around any lingering holiday weekends. Two to three weeks advance booking ensures your first choice.',
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARY
   =============================================================== */

const sampleItinerary = [
  {
    day: 'Days 1-2',
    title: 'Marrakech: Medina, Souks & Gardens',
    morning: 'Arrive in Marrakech and settle into your riad. Walk to Jemaa el-Fnaa in the late morning to see the square come alive. Visit Bahia Palace (from 70 MAD) and explore the Mellah district. Lunch at a local cafe near the square (from 40 MAD).',
    afternoon: 'Day 2: Majorelle Garden and YSL Museum (from 150 MAD combined). Afternoon souk exploration for leather goods, spices, and ceramics. September crowds are manageable so bargaining is more relaxed. Hammam in the evening (from 100 MAD).',
    evening: 'Rooftop dinner overlooking the medina (from 150 MAD). The September air temperature makes rooftop dining ideal. Walk through the illuminated Jemaa el-Fnaa to experience the night food market (from 30 MAD).',
  },
  {
    day: 'Days 3-4',
    title: 'Atlas Mountains & Sahara Transit',
    morning: 'Depart for the Sahara via the Tizi n Tichka pass. September conditions are perfect for this dramatic drive through the High Atlas. Stop at Ait Benhaddou kasbah (from 20 MAD). Lunch in Ouarzazate (from 50 MAD).',
    afternoon: 'Continue through the Draa Valley to Zagora or onward to Merzouga. Witness the date harvest in progress along the palm-lined road. Arrive at your desert camp by late afternoon. Camel trek into the dunes for sunset (included in most tours).',
    evening: 'Night in a desert camp under September stars (from 800 MAD). The Milky Way is spectacularly visible in the clear desert sky. Morning sunrise over the dunes before returning to Ouarzazate or continuing to Fes.',
  },
  {
    day: 'Days 5-6',
    title: 'Fes: Ancient Medina & Culture',
    morning: 'Full-day guided tour of Fes el-Bali medina (from 350 MAD with guide). Visit Al Quaraouiyine University courtyard, Chouara Tanneries (from 20 MAD), and Bou Inania Medersa (from 20 MAD). The September heat is gentler in the shaded alleys.',
    afternoon: 'Day 6: Pottery workshop in the Fes ceramics quarter (from 200 MAD). Visit Merenid Tombs for panoramic views of the medina. Explore the Jewish Quarter (Mellah) and its synagogue. Shopping for ceramics and textiles.',
    evening: 'Dinner in a traditional Fassi riad with multi-course Moroccan feast (from 250 MAD). September evenings in Fes are pleasantly cool, perfect for a post-dinner walk along the city walls.',
  },
  {
    day: 'Days 7-8',
    title: 'Coast: Essaouira or Tangier',
    morning: 'Travel to the coast. Essaouira: walk the ramparts, explore the medina, and enjoy port seafood (from 60 MAD). Or Tangier: time it for Tanjazz Festival if mid-September. Kasbah Museum (from 20 MAD), Cap Spartel, Cafe Hafa sunset.',
    afternoon: 'Beach time — September water temperatures peak around 21-23 degrees. Essaouira beach walk or Tangier Bay swimming. Wind is manageable for beach lounging (unlike summer in Essaouira). Kitesurfing or surfing options available.',
    evening: 'Final evening: seafood dinner on the coast (from 80 MAD). In Tangier, catch a Tanjazz performance (from 200 MAD). In Essaouira, enjoy Gnawa music at a medina venue. September evenings on the coast have a magical quality.',
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'Is September a good time to visit Morocco?',
    answer: 'September is one of the best months to visit Morocco. The extreme summer heat begins to ease, the crowds from July-August thin dramatically, and shoulder-season pricing kicks in from mid-September. The Sahara becomes comfortable for camping and camel treks, the Atlas Mountains offer perfect trekking conditions, and coastal cities remain warm for swimming. Cultural events like the Tanjazz Festival and the date harvest add unique experiences.',
  },
  {
    question: 'What is the weather like in Morocco in September?',
    answer: 'Weather varies significantly by region. Coastal cities range from 22-28 degrees Celsius with minimal rain and warm sea temperatures. Interior cities like Marrakech and Fes see 25-35 degrees — still warm but noticeably cooler than the July-August peaks. The Sahara ranges 22-38 degrees with comfortable mornings and evenings. Atlas Mountains are ideal at 12-25 degrees. Rainfall is very low across the country, with at most 1-3 rainy days in mountain regions.',
  },
  {
    question: 'Is September shoulder season in Morocco?',
    answer: 'Yes, September marks the transition from high season (June-August for European tourists) to shoulder season. Early September still sees some summer visitors, but from mid-September onward, tourist numbers drop significantly. Hotel prices decrease 20-35 percent, riads are less fully booked, and popular sites are noticeably less crowded. It offers an excellent value-to-experience ratio.',
  },
  {
    question: 'What should I pack for Morocco in September?',
    answer: 'Pack lightweight, breathable clothing for warm days, modest enough to cover shoulders and knees for cultural sites. Bring a light layer for cooler evenings, especially in the mountains and desert after dark. Sun protection is essential — hat, SPF 50 sunscreen, sunglasses. Comfortable walking shoes for medina cobblestones. A light windbreaker or rain jacket is wise for coastal areas and late-September mountain visits. A swimsuit for the coast.',
  },
  {
    question: 'Can I swim in Morocco in September?',
    answer: 'Absolutely. September offers the best swimming conditions of the year. Atlantic and Mediterranean water temperatures peak at 21-24 degrees Celsius after absorbing summer heat. Agadir, Taghazout, and Essaouira beaches on the Atlantic coast, and the Mediterranean beaches near Al Hoceima and Tangier, are all excellent. Beach clubs and seaside restaurants remain in full summer operation through September.',
  },
  {
    question: 'How much does a September trip to Morocco cost?',
    answer: 'A budget trip can be done from 500-800 MAD per day covering basic accommodation, street food, and local transport. Mid-range travelers should budget 1,200-2,000 MAD per day for riad accommodation, restaurant meals, and guided excursions. Luxury travelers can expect from 3,000-5,000 MAD per day for boutique hotels, private tours, and fine dining. September shoulder-season pricing makes all levels more affordable than summer peaks.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-october',
    title: 'Morocco in October',
    description: 'Arguably the best month to visit — perfect temperatures everywhere.',
    icon: Calendar,
  },
  {
    href: '/best-time-visit-morocco',
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month breakdown to find your ideal travel window.',
    icon: Clock,
  },
  {
    href: '/morocco-sahara-guide',
    title: 'Sahara Desert Guide',
    description: 'Everything you need to know about desert tours and camps.',
    icon: Tent,
  },
  {
    href: '/morocco-hiking-guide',
    title: 'Hiking in Morocco',
    description: 'Atlas trails, Toubkal summit, and day hikes from major cities.',
    icon: Mountain,
  },
  {
    href: '/morocco-budget-guide',
    title: 'Morocco Budget Guide',
    description: 'How to travel Morocco on any budget with real prices in MAD.',
    icon: Wallet,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInSeptemberPage() {
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
            <span className="text-white">September</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Thermometer className="w-4 h-4" />
            Monthly Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco in September
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Early autumn brings easing heat, thinning crowds, and exceptional shoulder-season value.
            Your complete guide to weather, festivals, destinations, and practical tips for September travel.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              September: The Start of Morocco&apos;s Golden Season
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                September marks the beginning of what many seasoned travelers consider Morocco&apos;s
                finest period. The blistering heat of July and August begins to relent, European summer
                crowds dissipate as school holidays end, and the entire country settles into a warm,
                golden-lit shoulder season that offers the best balance of weather, value, and experience.
              </p>
              <p>
                This is the month when the Sahara becomes comfortable again — mornings and evenings
                cool enough for camel treks and overnight camps under star-filled skies. The Atlas
                Mountains reach peak hiking conditions with snow-free passes and crisp, clear air.
                Coastal cities remain warm enough for swimming, with sea temperatures at their annual
                high. And in the imperial cities, the medinas of Marrakech and Fes transform from
                summer furnaces into pleasantly warm labyrinths perfect for exploration.
              </p>
              <p>
                Culturally, September brings the acclaimed Tanjazz Festival to Tangier, the olive
                harvest to Meknes, and the date harvest to the Draa Valley oases. Prices drop
                20-35 percent from summer peaks, and the quality of experience rises as riad owners,
                guides, and restaurateurs emerge from the summer crush to give individual travelers
                the attention they deserve.
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
            September Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s diverse geography creates dramatically different conditions across regions.
            Here is what to expect in each area during September.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are approximate ranges. Actual conditions vary by altitude and specific location.
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
            September Events &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From world-class jazz in Tangier to ancient harvest celebrations in the oases,
            September offers unique cultural experiences across Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Festival dates may vary annually. Check official sources for 2026 schedules before planning.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {septemberEvents.map((event) => {
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
            Best Destinations in September
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every major destination in Morocco works well in September. These six offer
            particularly compelling reasons to visit during early autumn.
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
            What to Pack for September
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            September in Morocco is warm but transitioning. Pack for hot days and cooler evenings,
            with layers for mountain and desert temperature swings.
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
            Budget Tips for September
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Shoulder season means better value across the board. Here is how to maximize your savings.
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
            Insider Tips for September
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge that transforms a good September trip into an extraordinary one.
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
            Sample 8-Day September Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A practical route covering the highlights of Morocco in September, from imperial cities to the Sahara and coast.
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
                8-Day Budget Summary (per person)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Budget Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 5,000-8,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Hostels, street food, buses, shared desert tour</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 12,000-18,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Riads, restaurants, private desert camp, guided tours</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 25,000-40,000 MAD</p>
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
            Ready for September in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Early autumn is when Morocco shines brightest — comfortable temperatures, fewer crowds,
            shoulder-season prices, and a calendar full of festivals and harvests. Start planning
            your September 2026 adventure today.
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
              href="/morocco-hiking-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Mountain className="w-5 h-5" />
              Hiking Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

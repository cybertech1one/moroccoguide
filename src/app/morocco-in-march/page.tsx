import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Landmark,
  Star,
  Camera,
  UtensilsCrossed,
  Mountain,
  Compass,
  Lightbulb,
  ArrowRight,
  Info,
  CheckCircle,
  Calendar,
  Sun,
  Heart,
  Wind,
  Globe,
  AlertTriangle,
  Thermometer,
  CloudSun,
  Flower2,
  Users,
  ThumbsUp,
  ThumbsDown,
  Footprints,
  Umbrella,
  Shirt,
  Luggage,
  CircleDollarSign,
  Music,
  Coffee,
  Waves,
  MoonStar,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in March 2026 | Spring Weather, Wildflowers & Guide',
  description:
    'Complete guide to visiting Morocco in March 2026. Early spring weather by region, wildflower season, Ramadan considerations, hiking conditions, costs, crowd levels, and sample itinerary.',
  keywords: [
    'morocco in march',
    'visiting morocco march',
    'morocco march weather',
    'morocco spring travel',
    'morocco wildflowers march',
    'morocco march temperature',
    'morocco shoulder season',
    'marrakech march weather',
    'morocco hiking march',
    'morocco ramadan travel',
    'morocco march itinerary',
    'atlas mountains march',
    'morocco spring break',
    'morocco march guide',
    'morocco spring flowers',
    'best time visit morocco spring',
  ],
  openGraph: {
    title: 'Visiting Morocco in March 2026 | Spring Weather, Wildflowers & Guide',
    description:
      'Experience Morocco early spring: wildflowers, warming temperatures, shoulder-season prices, and ideal hiking weather. Complete March travel guide with weather, packing tips, and itinerary.',
    url: `${BASE_URL}/morocco-in-march`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Wildflowers blooming in the Moroccan countryside with Atlas Mountains in the background in March',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in March 2026 | Spring Travel Guide',
    description:
      'Wildflowers, warming weather, shoulder-season pricing, and ideal hiking conditions. Your complete guide to Morocco in March.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-march` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-march`,
  name: 'Visiting Morocco in March 2026 | Spring Weather, Wildflowers & Travel Guide',
  description:
    'Complete guide to visiting Morocco in March. Early spring weather, wildflowers, hiking, festivals, best destinations, costs, and a 7-day itinerary.',
  url: `${BASE_URL}/morocco-in-march`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-march`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in March', item: `${BASE_URL}/morocco-in-march` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the weather like in Morocco in March?', acceptedAnswer: { '@type': 'Answer', text: 'March brings pleasant spring weather across most of Morocco. Coastal areas reach 17-21 degrees, interior cities like Marrakech see 15-22 degrees, the Sahara warms to 12-26 degrees, and the Atlas Mountains range from 0-12 degrees with snow still at higher elevations. It is one of the most comfortable months for outdoor activities.' } },
    { '@type': 'Question', name: 'Is March a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'March is excellent for visiting Morocco. It marks the beginning of spring with wildflowers, warming temperatures ideal for hiking and sightseeing, and shoulder-season pricing that offers better value than peak months. The main consideration is Ramadan, which sometimes falls in March — check dates for the current year.' } },
    { '@type': 'Question', name: 'Does Ramadan affect travel in Morocco in March?', acceptedAnswer: { '@type': 'Answer', text: 'Ramadan is based on the Islamic lunar calendar and sometimes falls partially in March. During Ramadan, many restaurants are closed during daylight hours, though tourist-oriented establishments remain open. Attractions operate with reduced hours. It can be a fascinating cultural experience if you are respectful, but it requires some planning adjustment.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in March?', acceptedAnswer: { '@type': 'Answer', text: 'Pack versatile layers: light long-sleeve shirts, a medium-weight jacket for evenings, comfortable walking or hiking shoes, sunglasses, sunscreen, and a light rain jacket. March weather can swing from warm afternoons (22 degrees) to cool evenings (10 degrees). Hiking boots if planning Atlas Mountain treks.' } },
    { '@type': 'Question', name: 'Is March good for hiking in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'March is one of the best months for hiking. Lower and mid-altitude trails in the Atlas Mountains are accessible and carpeted with wildflowers. Temperatures are comfortable for exertion. The Toubkal summit may still require crampons and winter gear. The Dades and Todra gorges are ideal for hiking in March.' } },
    { '@type': 'Question', name: 'How much does it cost to visit Morocco in March?', acceptedAnswer: { '@type': 'Answer', text: 'March is shoulder season with moderate pricing. Budget travelers can spend from 500-700 MAD per day, mid-range from 900-1,600 MAD. Prices are 10-25% below peak season (April-May), though higher than deep winter. Late March prices begin rising as peak season approaches.' } },
  ],
};

/* ===============================================================
   DATA: WEATHER BY REGION
   =============================================================== */

const weatherByRegion = [
  {
    region: 'Atlantic Coast',
    icon: Waves,
    cities: 'Essaouira, Agadir, El Jadida, Rabat',
    tempRange: '17-21 C',
    rainfall: 'Moderate (30-50 mm)',
    description: 'The Atlantic coast in March is increasingly pleasant, with Agadir reaching 23-24 degrees on sunny days and genuine beach weather emerging. Essaouira sees its trade winds moderate slightly, with more calm, sunny days interspersed with breezy ones. Rabat and Casablanca enjoy spring warmth with occasional rain showers. Sea temperature rises to around 18 degrees, still cool for swimming but ideal for surfing. The coastal towns begin their transition to the livelier spring atmosphere.',
    bestFor: 'Surfing, beach walks, coastal photography, early beach season in Agadir',
  },
  {
    region: 'Interior Cities',
    icon: Landmark,
    cities: 'Marrakech, Fes, Meknes',
    tempRange: '15-22 C',
    rainfall: 'Light (20-35 mm)',
    description: 'March is one of the best months for exploring Marrakech and Fes. Daytime temperatures climb to a comfortable 22-24 degrees, warm enough for outdoor dining and rooftop lounging, but cool enough for extended medina exploration. Mornings remain fresh (10-12 degrees) but the chill lifts quickly. The gardens of Marrakech are at their spring best, with roses and bougainvillea beginning to bloom. Rain is less frequent than winter, usually limited to brief afternoon showers. The first spring tourists arrive in late March.',
    bestFor: 'Sightseeing, garden visits, outdoor dining, photography',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    cities: 'Merzouga, M\'Hamid, Zagora',
    tempRange: '12-26 C',
    rainfall: 'Minimal (under 5 mm)',
    description: 'The Sahara in March transitions toward warmer conditions, with daytime temperatures reaching 24-26 degrees — still very comfortable for camel treks and dune exploration, but noticeably warmer than winter months. Nights are milder at 12 degrees, making desert camping more comfortable. The longer daylight hours allow for extended dune exploration and photography. Sand storms become slightly more possible as spring winds pick up, but they remain infrequent. It is the last really comfortable month before summer heat arrives.',
    bestFor: 'Camel treks, comfortable camping, photography, last chance before heat',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Imlil, Ouarzazate, Dades Valley',
    tempRange: '0-12 C',
    rainfall: 'Mixed (rain below, snow above)',
    description: 'March is the month the Atlas Mountains begin their transformation from winter to spring. Snow persists above 2,500 meters but the lower valleys around Imlil (1,740 meters) and the Dades and Todra gorges are increasingly pleasant for hiking. Wildflowers begin appearing on lower slopes, and the Berber villages come alive with agricultural activity. Trekking to the Toubkal summit is possible but requires winter mountaineering equipment. The Ourika Valley and Ait Bougmez (Happy Valley) are particularly beautiful as the terraced fields turn green.',
    bestFor: 'Lower altitude hiking, wildflower walks, gorge exploration, valley treks',
  },
  {
    region: 'Mediterranean Coast',
    icon: CloudSun,
    cities: 'Tangier, Chefchaouen, Al Hoceima',
    tempRange: '14-19 C',
    rainfall: 'Moderate (40-60 mm)',
    description: 'The northern Mediterranean coast warms gradually in March, with Tangier and Chefchaouen seeing pleasant daytime temperatures around 19 degrees. Chefchaouen blue medina is beautiful against the backdrop of fresh green hillsides, and the Rif Mountains begin their spring bloom. Rain remains a possibility, especially in early March, but the dramatic cloud formations over the mountains create atmospheric photography conditions. The region is quieter than the south in terms of tourism.',
    bestFor: 'Chefchaouen photography, Rif Mountain walks, authentic northern Morocco',
  },
];

/* ===============================================================
   DATA: BEST DESTINATIONS IN MARCH
   =============================================================== */

const bestDestinations = [
  {
    name: 'Marrakech',
    icon: Star,
    highlight: 'Perfect sightseeing weather, gardens in bloom',
    description: 'March Marrakech hits the sweet spot: warm enough for comfortable exploration (22-24 degrees), cool enough to avoid the exhausting heat of summer, and not yet crowded with the peak-season masses. The Jardin Majorelle, Menara Gardens, and Agdal Gardens show their spring colors, with bougainvillea, roses, and jasmine beginning to bloom. Rooftop restaurants reopen for the season, and the Jemaa el-Fnaa comes alive with longer evenings. Riad prices edge up from winter lows but remain below April-May peaks.',
    cost: 'Budget from 550-900 MAD/day',
  },
  {
    name: 'Atlas Mountains (Hiking)',
    icon: Mountain,
    highlight: 'Wildflower trails, accessible valley treks, mountain villages',
    description: 'March is when the Atlas Mountains reveal their gentler side. The lower valleys around Imlil, the Ourika Valley, and the Ait Bougmez (Happy Valley) are carpeted with wildflowers: poppies, irises, wild orchids, and lavender. Berber villages perched on hillsides are surrounded by freshly green terraced fields. Day hikes and 2-3 day treks through the valleys are at their most rewarding, with comfortable temperatures and stunning scenery. The higher peaks remain snow-capped, providing a dramatic backdrop.',
    cost: 'Day hike from 300 MAD guided, multi-day from 1,200 MAD',
  },
  {
    name: 'Dades & Todra Gorges',
    icon: Compass,
    highlight: 'Ideal gorge hiking weather, dramatic rock formations',
    description: 'The Dades and Todra gorges in the eastern High Atlas are at their best in March. The towering canyon walls of Todra (300 meters high) and the winding road through the Dades Valley are spectacular in the spring light. Temperatures in the gorges are perfect for hiking (18-22 degrees), and the seasonal waterfalls are fed by snowmelt from above. Rock climbers flock to Todra for its world-class limestone walls. The kasbahs along the route are less visited than in peak season.',
    cost: 'Budget from 400-650 MAD/day',
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    highlight: 'Blue medina against fresh green hillsides, quiet streets',
    description: 'The famous blue city of Chefchaouen is hauntingly beautiful in March. The freshly washed blue walls glow against the backdrop of the Rif Mountains turning green with spring growth. The medina is quiet enough to explore without competing for photo angles, and the surrounding hills offer excellent day hikes to the Spanish Mosque viewpoint and beyond. Rain occasionally adds a moody atmosphere, and the waterfalls of Ras el-Maa run strong with spring meltwater. Accommodation is affordable and readily available.',
    cost: 'Budget from 350-550 MAD/day',
  },
  {
    name: 'Fes',
    icon: Landmark,
    highlight: 'Comfortable medina temperatures, spring cultural calendar',
    description: 'Fes in March strikes an ideal balance. The ancient medina is warm enough for full-day exploration without overheating, and the first spring tourists have not yet arrived in numbers. The University of Al-Qarawiyyin complex, the tanneries, and the countless artisan workshops are accessible without the summer heat that can make the narrow medina alleys oppressive. Cooking classes, ceramic workshops, and guided walking tours operate with flexible scheduling. The Sacred Music Festival preparations begin.',
    cost: 'Budget from 450-750 MAD/day',
  },
  {
    name: 'Essaouira & Atlantic Coast',
    icon: Wind,
    highlight: 'Calming winds, excellent surf, spring migration birds',
    description: 'Essaouira in March sees its fierce winter winds begin to moderate, offering more days of calm, sunny weather alongside the classic breezy days that define the town. The surf remains excellent with consistent Atlantic swells. Birdwatchers benefit from early spring migration, with species arriving from sub-Saharan Africa. The Ile de Mogador offshore becomes a breeding ground for Eleonora falcons. The medina artisan scene is active, with woodworkers and painters preparing for the busier months ahead.',
    cost: 'Budget from 400-650 MAD/day',
  },
];

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const eventsAndFestivals = [
  {
    name: 'Ramadan (Check Dates)',
    icon: MoonStar,
    date: 'Varies (lunar calendar)',
    location: 'Nationwide',
    description: 'Ramadan, the Islamic holy month of fasting from dawn to dusk, sometimes falls partially or fully in March depending on the year. Check the current year dates before planning. During Ramadan, many restaurants close during daylight hours (tourist restaurants usually remain open), attractions may have reduced hours, and the pace of life slows during the day. The evening iftar (breaking of fast) is a beautiful cultural experience, with communal meals and festive atmospheres after sunset. Traveling during Ramadan requires flexibility but offers unique cultural insight.',
  },
  {
    name: 'Spring Equinox',
    icon: Sun,
    date: 'March 20-21',
    location: 'Nationwide',
    description: 'The spring equinox marks equal day and night, and in Morocco it coincides with the visible transformation of the landscape. While not a formal holiday, the equinox period sees traditional agricultural communities mark the turning of the season. In the Atlas villages, spring planting begins in earnest. For travelers, it marks the transition to longer days and warmer evenings, making late afternoon and early evening activities increasingly enjoyable.',
  },
  {
    name: 'Spring Break Tourism',
    icon: Users,
    date: 'Late March (varies by country)',
    location: 'Marrakech, Fes, Sahara',
    description: 'American and European spring break periods begin in late March, bringing an influx of younger travelers to Morocco main destinations. Marrakech sees the biggest impact, with riad bookings increasing and prices rising for the last week of March. If budget is a concern, plan your March trip for the first three weeks when shoulder-season pricing still applies. The atmosphere is energetic and international, particularly in Marrakech nightlife and activity scene.',
  },
  {
    name: 'Wildflower Season Begins',
    icon: Flower2,
    date: 'March - April',
    location: 'Atlas Mountains, Rif Mountains, countryside',
    description: 'March marks the beginning of Morocco wildflower season, which peaks in April. The Atlas foothills, the Rif Mountains around Chefchaouen, and the plains between cities transform with poppies, wild irises, lavender, and dozens of endemic species. The Ourika Valley, Ait Bougmez Valley, and the hills around Ifrane are particularly spectacular. Guided botanical walks are available through some eco-lodges. The wildflower carpets create exceptional photography opportunities against the mountain backdrops.',
  },
];

/* ===============================================================
   DATA: WHAT TO PACK
   =============================================================== */

const packingList = [
  { item: 'Versatile Layers', icon: Shirt, description: 'Light long-sleeve shirts, a medium jacket, and a warm layer for evenings. March temperatures swing from 10 degrees in the morning to 24 degrees at midday. Layering is essential for adjusting throughout the day. A light fleece or cardigan works well for restaurants and evening walks.' },
  { item: 'Hiking Shoes', icon: Footprints, description: 'If planning any Atlas Mountain exploration, bring proper trail shoes or light hiking boots. The trails are increasingly accessible in March but can be muddy from snowmelt and spring rain. Good ankle support is important on rocky paths. For cities only, comfortable walking shoes suffice.' },
  { item: 'Light Rain Jacket', icon: Umbrella, description: 'March rain is less frequent than winter but still possible, especially in the north and mountains. A compact, packable rain jacket takes minimal space and provides essential protection for unexpected afternoon showers. It also doubles as a windbreaker for Essaouira.' },
  { item: 'Sun Protection', icon: Sun, description: 'The March sun is strong, particularly in the south and at altitude. Sunscreen (SPF 30+), quality sunglasses, and a sun hat are essential. UV radiation increases significantly as spring progresses. Apply sunscreen even on overcast days, as UV penetrates clouds.' },
  { item: 'Wildflower Field Guide', icon: Flower2, description: 'If you are interested in the wildflower season, a North African or Mediterranean wildflower identification guide enhances the experience enormously. Several apps also work offline. Morocco hosts over 4,000 plant species, many endemic to the region.' },
  { item: 'Daypack', icon: Luggage, description: 'A comfortable daypack for hiking, day trips, and medina exploration. Choose one with good back ventilation as March days can be warm. Include a water bottle, sunscreen, snacks, rain jacket, and camera. A 20-25 liter pack is ideal.' },
];

/* ===============================================================
   DATA: COSTS IN MARCH
   =============================================================== */

const marchCosts = [
  { category: 'Riad/Hotel (budget)', icon: MapPin, lowSeason: 'From 300-500 MAD/night', highSeason: 'From 500-900 MAD/night', savings: 'Save 20-40%' },
  { category: 'Riad/Hotel (mid-range)', icon: Star, lowSeason: 'From 600-1,200 MAD/night', highSeason: 'From 1,000-2,000 MAD/night', savings: 'Save 25-40%' },
  { category: 'Food (per day)', icon: UtensilsCrossed, lowSeason: 'From 120-280 MAD', highSeason: 'From 150-300 MAD', savings: 'Save 10-20%' },
  { category: 'Sahara Desert Tour (2 days)', icon: Compass, lowSeason: 'From 900-1,600 MAD', highSeason: 'From 1,200-2,500 MAD', savings: 'Save 20-35%' },
  { category: 'Guided Hiking (per day)', icon: Mountain, lowSeason: 'From 300-600 MAD', highSeason: 'From 400-800 MAD', savings: 'Save 20-30%' },
  { category: 'Domestic Flights', icon: Globe, lowSeason: 'From 400-800 MAD', highSeason: 'From 500-1,200 MAD', savings: 'Save 20-35%' },
];

/* ===============================================================
   DATA: PROS AND CONS
   =============================================================== */

const prosAndCons = {
  pros: [
    { point: 'Ideal sightseeing temperatures', description: 'March offers warm days (20-24 degrees) without the exhausting heat of summer. Perfect for extended outdoor exploration and hiking.' },
    { point: 'Wildflower season begins', description: 'The Atlas foothills and countryside burst into bloom with poppies, irises, and wild orchids. A photographer and nature lover dream month.' },
    { point: 'Shoulder-season pricing', description: 'Prices are 10-25% below peak season (April-May), offering good value. Early March retains near-winter pricing.' },
    { point: 'Excellent hiking conditions', description: 'Lower and mid-altitude trails are accessible, temperatures are comfortable for exertion, and the scenery is at its spring best.' },
    { point: 'Longer daylight hours', description: 'Days are noticeably longer than winter, with sunset around 6:30-7:00 PM allowing for fuller days of sightseeing and golden hour photography.' },
    { point: 'Last month of Sahara comfort', description: 'The desert is warm but not yet hot, with temperatures around 24-26 degrees. After March, summer heat makes desert travel less pleasant.' },
  ],
  cons: [
    { point: 'Ramadan may apply', description: 'Depending on the year, Ramadan may fall partially in March. This affects restaurant availability during daytime and attraction opening hours.' },
    { point: 'Spring break crowds (late March)', description: 'The last week of March sees increased tourism from European and American spring break travelers, particularly in Marrakech.' },
    { point: 'Prices rising', description: 'While still shoulder season, prices trend upward throughout March, especially for accommodation in popular destinations.' },
    { point: 'Variable mountain weather', description: 'The Atlas Mountains can see sudden weather changes in March, including unexpected snowfall at higher elevations. Check conditions before mountain excursions.' },
    { point: 'Occasional rain in the north', description: 'Northern Morocco still receives some spring rain, particularly in early March. Chefchaouen and Tangier may have rainy days.' },
    { point: 'High Atlas summit not accessible', description: 'Toubkal and other high peaks still require full winter equipment. True summit season begins in May-June.' },
  ],
};

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Check Ramadan Dates', icon: MoonStar, description: 'Ramadan shifts 10-11 days earlier each year on the Gregorian calendar. Check whether it overlaps with your March dates. If it does, tourist restaurants remain open, but plan meals in advance and be respectful of those fasting around you.' },
  { tip: 'Book Early March for Best Value', icon: CircleDollarSign, description: 'Early March (first two weeks) offers the best balance of improving weather and low prices. By the third week, spring break travelers arrive and prices begin their climb to peak season. Book accommodation 2-3 weeks ahead for early March dates.' },
  { tip: 'Best Wildflower Locations', icon: Flower2, description: 'The Ourika Valley (30 minutes from Marrakech), the Ait Bougmez Valley (Happy Valley), and the hills around Azrou and Ifrane offer the best wildflower displays in March. Hire a local guide who knows the blooming spots for the current season.' },
  { tip: 'Layer for Temperature Swings', icon: Thermometer, description: 'March has the biggest temperature range of any month: 10 degrees at dawn, 24 degrees at midday, 12 degrees after sunset. Dress in layers you can add and remove easily. The difference between sun and shade is dramatic.' },
  { tip: 'Sahara: Go Early in March', icon: Compass, description: 'Early March has the most comfortable desert temperatures. By late March, daytime heat can reach 28 degrees in the dunes, approaching uncomfortable levels for midday exploration. Book your desert tour for the first two weeks if possible.' },
  { tip: 'Photography Golden Hour', icon: Camera, description: 'March golden hour light is exceptional. The low sun angle creates long shadows in the medinas, illuminates mountain landscapes dramatically, and bathes the kasbahs in warm tones. Schedule photography sessions for the first and last two hours of daylight.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is the weather like in Morocco in March?', answer: 'March offers pleasant spring weather. Coastal areas reach 17-21 degrees, interior cities 15-22 degrees, the Sahara 12-26 degrees, and the Atlas Mountains 0-12 degrees. Days are warm and sunny, mornings cool, and rain is possible in the north but becoming less frequent. It is one of the most comfortable months for travel.' },
  { question: 'Is March a good time to visit Morocco?', answer: 'March is excellent for visiting. The weather is warm enough for all outdoor activities, wildflowers begin blooming, and prices remain below peak season. The main considerations are Ramadan (check dates) and increasing crowds in late March from spring break tourism. Early March offers the best value.' },
  { question: 'Does Ramadan affect travel in Morocco in March?', answer: 'Ramadan dates shift annually. When it falls in March, most tourist restaurants stay open during the day, but some local eateries close until sunset. Attractions may have reduced hours. The evening iftar meal is a wonderful cultural experience. Be respectful: avoid eating, drinking, or smoking in public during fasting hours.' },
  { question: 'What should I pack for Morocco in March?', answer: 'Pack versatile layers for 10-24 degree temperature swings: light long-sleeve shirts, a medium jacket, hiking shoes if trekking, a light rain jacket, sunscreen (SPF 30+), sunglasses, and a sun hat. A daypack for hiking and day trips is essential. March requires more sun protection than winter months.' },
  { question: 'Is March good for hiking in Morocco?', answer: 'March is one of the best hiking months. Lower Atlas trails are accessible, wildflowers carpet the hillsides, and temperatures (15-22 degrees) are ideal for exertion. Day hikes from Imlil, the Ourika Valley, and gorge walks in Dades and Todra are excellent. The Toubkal summit still requires winter equipment.' },
  { question: 'How much does it cost to visit Morocco in March?', answer: 'March is shoulder season. Budget travelers spend from 500-700 MAD per day, mid-range from 900-1,600 MAD. Prices are 10-25% below peak but higher than deep winter. Early March is cheapest; late March prices begin rising toward peak season rates.' },
  { question: 'Is March too early for the beach in Morocco?', answer: 'True beach season begins in May-June. However, Agadir offers genuine beach weather in March with temperatures reaching 23-24 degrees. Sea temperature is around 18 degrees, suitable for brave swimmers. Surfing with a wetsuit is excellent. Essaouira and other coast towns are pleasant for walks but not sunbathing.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-in-february', icon: Calendar, title: 'Morocco in February', description: 'Almond blossoms in Tafraout, late-winter savings, and comfortable Sahara temperatures.' },
  { href: '/morocco-in-april', icon: Calendar, title: 'Morocco in April', description: 'Peak spring: Rose Festival, best hiking weather, and ideal conditions everywhere.' },
  { href: '/best-time-to-visit-morocco', icon: Sun, title: 'Best Time to Visit Morocco', description: 'Month-by-month breakdown of weather, festivals, and crowd levels across the country.' },
  { href: '/morocco-hiking-guide', icon: Mountain, title: 'Morocco Hiking Guide', description: 'Trails, routes, and practical advice for hiking in the Atlas Mountains and beyond.' },
  { href: '/morocco-packing-list', icon: Luggage, title: 'Morocco Packing List', description: 'Season-by-season guide to packing for every region of Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInMarchPage() {
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
            <span className="text-white">Morocco in March</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flower2 className="w-4 h-4" />
            Monthly Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Visiting Morocco
            <br className="hidden md:block" /> in March
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Early spring magic: wildflowers in the Atlas, perfect sightseeing weather, shoulder-season
            prices, and the beginning of Morocco most beautiful season. Your complete March 2026 guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Visit Morocco in March?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                March is when Morocco shakes off winter and springs to life, both literally and
                figuratively. The Atlas Mountain foothills erupt in wildflowers, Marrakech gardens
                burst into color, and the lengthening days bring a palpable energy to the medinas
                and souks. After months of cooler temperatures and quiet streets, Morocco begins
                its transition to the glorious spring season that draws travelers from around the
                globe.
              </p>
              <p>
                For the savvy traveler, March offers a compelling proposition: the weather of spring
                with the prices of winter. The first two weeks of March still benefit from
                low-season accommodation rates and uncrowded attractions, while temperatures have
                risen to comfortable levels for all-day outdoor exploration. Hiking in the Atlas
                becomes a joy rather than an endurance test, the Sahara Desert sits at its last
                comfortable temperatures before summer heat arrives, and the gorges and valleys
                of the south are at their most photogenic.
              </p>
              <p>
                The one variable to consider is Ramadan, which shifts dates annually and sometimes
                falls partially in March. Far from being a deterrent, traveling during Ramadan can
                be a profoundly enriching experience if approached with respect and flexibility.
                The evening iftar meal, when the fast is broken at sunset, transforms cities into
                communal celebrations of food and gratitude. Whether you come for the wildflowers,
                the hiking, the cultural depth, or the shoulder-season value, March rewards
                travelers with one of the most balanced and beautiful months in Morocco calendar.
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
            March Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Spring arrives at different speeds across Morocco. The south warms quickly while the
            mountains hold onto winter, creating diverse experiences within a single country.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures shown are typical daily ranges. Conditions can vary year to year.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {weatherByRegion.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <RegionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {region.region}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                          {region.tempRange}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {region.cities}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Umbrella className="w-3.5 h-3.5" />
                          {region.rainfall}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {region.description}
                  </p>
                  <div className="flex items-start gap-2 p-4 bg-[var(--surface-muted)] rounded-lg">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span>{' '}
                      {region.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Best Destinations -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Destinations in March
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From wildflower-covered mountains to warming desert sands, these destinations deliver
            the most rewarding March experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All costs are indicative starting prices in MAD. Seasonal pricing can change.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {bestDestinations.map((dest) => {
              const DestIcon = dest.icon;
              return (
                <div key={dest.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <DestIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {dest.name}
                        </h3>
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          {dest.cost}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--color-accent)] font-medium">{dest.highlight}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Events & Festivals -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Music className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            March Events &amp; Considerations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From wildflower season to Ramadan considerations, March brings both natural spectacles
            and cultural events worth planning around.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {eventsAndFestivals.map((event) => {
              const EventIcon = event.icon;
              return (
                <div key={event.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <EventIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {event.name}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)]">
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {event.date}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- What to Pack -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Luggage className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack for March
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            March packing is all about versatility. You need options for warm afternoons, cool
            evenings, possible rain, and potentially serious hiking.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packingList.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.item}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Costs Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDollarSign className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            March Costs vs. Peak Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            March is shoulder season with moderate savings, especially in the first two weeks.
            Prices rise through the month as spring tourism picks up.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal pricing can change.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {marchCosts.map((cost) => {
              const CostIcon = cost.icon;
              return (
                <div key={cost.category} className="card-moroccan p-5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center shrink-0">
                      <CostIcon className="w-5 h-5 text-[var(--color-gold)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {cost.category}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)]">
                        <span>March: <span className="text-green-700 font-medium">{cost.lowSeason}</span></span>
                        <span>Peak: <span className="text-[var(--text-secondary)]">{cost.highSeason}</span></span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-50 text-green-700">
                      {cost.savings}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Pros and Cons -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pros &amp; Cons of March Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest assessment to help you decide if March is the right month for your Morocco trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-green-700 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" />
                Advantages
              </h3>
              <div className="space-y-3">
                {prosAndCons.pros.map((pro) => (
                  <div key={pro.point} className="card-moroccan p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{pro.point}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{pro.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-red-700 mb-4 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5" />
                Disadvantages
              </h3>
              <div className="space-y-3">
                {prosAndCons.cons.map((con) => (
                  <div key={con.point} className="card-moroccan p-4">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{con.point}</p>
                        <p className="text-xs text-[var(--text-secondary)] mt-1">{con.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Sample 7-Day Itinerary -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Sample 7-Day March Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A spring-focused week blending hiking, culture, and diverse landscapes.
            Estimated total cost from 6,000-10,000 MAD per person.
          </p>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: 'Arrive in Marrakech',
                morning: 'Arrive at Marrakech Menara Airport. Check into a medina riad (from 400 MAD/night). Walk to the Jemaa el-Fnaa and soak in the spring atmosphere with comfortable temperatures.',
                afternoon: 'Visit the Jardin Majorelle (from 70 MAD) with its early spring blooms. Continue to the YSL Museum. Explore the Gueliz neighborhood for boutique shopping and cafe culture.',
                evening: 'Dinner on a rooftop terrace — March evenings are mild enough for outdoor dining (from 100 MAD). Walk through the Jemaa el-Fnaa as the food stalls light up.',
              },
              {
                day: 2,
                title: 'Marrakech Historic Sites',
                morning: 'Bahia Palace (from 70 MAD), Saadian Tombs (from 70 MAD), and the Mellah. The March light through the palace courtyards creates beautiful patterns on the zellige tilework.',
                afternoon: 'Cooking class learning tagine, couscous, and Moroccan salads (from 350 MAD). A perfect way to understand Moroccan culture through its cuisine. Shop for spices in the souk.',
                evening: 'Traditional hammam experience (from 150 MAD). Farewell to Marrakech or extended evening exploring the medina alleys and hidden squares.',
              },
              {
                day: 3,
                title: 'Atlas Mountains Hiking',
                morning: 'Day trip to the Ourika Valley (from 300 MAD guided, 45 minutes from Marrakech). Hike through wildflower-covered terraces to the Setti Fatma waterfalls. March is when the valley is at its greenest.',
                afternoon: 'Visit a Berber village and enjoy lunch in a traditional home overlooking the valley (from 60 MAD). Learn about argan oil production at a local cooperative.',
                evening: 'Return to Marrakech. Rooftop dinner with views of the snow-capped Atlas turning pink at sunset (from 120 MAD).',
              },
              {
                day: 4,
                title: 'Marrakech to Dades Valley',
                morning: 'Drive over the Tizi n\'Tichka pass toward the Sahara-side of the Atlas. Stop at Ait Benhaddou kasbah (from 20 MAD), stunning against the spring-green valley floor.',
                afternoon: 'Continue to the Dades Valley, passing through the Rose Valley (roses not yet blooming but the valley is beautiful). Arrive at a guesthouse in the Dades Gorge (from 300 MAD/night).',
                evening: 'Walk through the lower gorge in the golden evening light. Dinner at your guesthouse with valley views (from 80 MAD). The March night sky from the gorge is remarkable.',
              },
              {
                day: 5,
                title: 'Todra Gorge & Desert Edge',
                morning: 'Drive to the Todra Gorge (1.5 hours). Walk through the dramatic 300-meter canyon walls. March temperatures are perfect for gorge hiking (18-22 degrees).',
                afternoon: 'Continue to the Sahara, arriving at Merzouga by late afternoon. Camel trek into the Erg Chebbi dunes for sunset. March days in the desert are warm but not hot.',
                evening: 'Overnight in a desert camp (2-day desert experience from 900 MAD). Dinner under the stars with Berber music. March desert nights are cool but comfortable.',
              },
              {
                day: 6,
                title: 'Sahara to Fes',
                morning: 'Sunrise over the dunes — March sunrises are spectacular with clear skies and golden light. Breakfast in camp, then begin the drive to Fes via the Ziz Valley and Middle Atlas.',
                afternoon: 'Stop in Ifrane for lunch and the cedar forests of Azrou. If wildflowers have started, the Middle Atlas is carpeted in color. Arrive in Fes by evening.',
                evening: 'Check into a Fes riad (from 350 MAD/night). Quiet dinner in the medina (from 70 MAD). The Fes medina by night is atmospheric and peaceful in March.',
              },
              {
                day: 7,
                title: 'Fes Medina & Departure',
                morning: 'Guided tour of Fes el-Bali (from 300 MAD half-day): tanneries, Bou Inania Medersa, Nejjarine Museum. March crowds are minimal, allowing intimate exploration of the world largest car-free urban area.',
                afternoon: 'Al-Attarine Medersa, souk shopping for ceramics and leather. Coffee at a medina cafe (from 15 MAD). Transfer to Fes airport or train station for onward journey.',
                evening: 'If extending: take the train to Chefchaouen (via bus from Fes, from 75 MAD, 4 hours). The blue city in March spring light is unforgettable.',
              },
            ].map((day) => (
              <div key={day.day} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center">
                    <span className="text-sm font-bold text-white">{day.day}</span>
                  </div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Day {day.day}: {day.title}
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
          </div>
        </div>
      </section>

      {/* -- Insider Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Lightbulb className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            Insider Tips for March
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge to help you navigate the spring shoulder season for maximum enjoyment
            and value.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {insiderTips.map((item) => {
              const TipIcon = item.icon;
              return (
                <div key={item.tip} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
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

      {/* -- FAQs -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Common questions about visiting Morocco in March, answered with practical detail.
          </p>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco trip with these complementary guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[var(--color-accent)]/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                    <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)] mt-3 font-medium">
                    Read guide <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- CTA -- */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience March in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Discover wildflower-covered mountains, perfect sightseeing weather, and shoulder-season
            value. Start planning your spring Moroccan adventure today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Browse Itineraries
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              <Globe className="w-5 h-5" />
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

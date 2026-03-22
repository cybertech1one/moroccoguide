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
  Clock,
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
  TreesIcon,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in April 2026 | Rose Festival, Hiking & Travel Guide',
  description:
    'Complete guide to visiting Morocco in April 2026. Peak spring weather, Festival of Roses in Kelaat M\'Gouna, best hiking conditions, Easter crowds, costs, and sample itinerary.',
  keywords: [
    'morocco in april',
    'visiting morocco april',
    'morocco april weather',
    'rose festival morocco',
    'festival of roses kelaat mgouna',
    'morocco spring travel april',
    'morocco april temperature',
    'atlas mountains hiking april',
    'morocco easter travel',
    'morocco april itinerary',
    'best time visit morocco',
    'morocco peak season spring',
    'morocco april guide',
    'morocco trekking april',
    'morocco gorges april',
    'rose valley morocco',
  ],
  openGraph: {
    title: 'Visiting Morocco in April 2026 | Rose Festival, Hiking & Travel Guide',
    description:
      'Peak spring in Morocco: the Festival of Roses, ideal hiking weather in the Atlas, perfect conditions everywhere, and a complete April travel guide.',
    url: `${BASE_URL}/morocco-in-april`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Rose petals and Atlas Mountain scenery during spring in Morocco in April',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Visiting Morocco in April 2026 | Rose Festival & Spring Guide',
    description:
      'Festival of Roses, Atlas Mountain trekking, gorge adventures, and perfect weather. Your complete guide to April in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-april` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-april`,
  name: 'Visiting Morocco in April 2026 | Rose Festival, Hiking & Travel Guide',
  description:
    'Complete guide to visiting Morocco in April. Peak spring weather, Festival of Roses, hiking conditions, Easter considerations, costs, and a 7-day itinerary.',
  url: `${BASE_URL}/morocco-in-april`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-april`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco in April', item: `${BASE_URL}/morocco-in-april` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the weather like in Morocco in April?', acceptedAnswer: { '@type': 'Answer', text: 'April brings near-perfect weather across Morocco. Coastal areas reach 18-23 degrees, interior cities like Marrakech see 18-26 degrees, the Sahara warms to 15-30 degrees, and the Atlas Mountains range from 5-18 degrees with snow melting at lower elevations. It is widely considered one of the two best months to visit Morocco.' } },
    { '@type': 'Question', name: 'Is April a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'April is one of the best months to visit Morocco. Weather is warm and sunny everywhere, the Festival of Roses takes place in the Dades Valley, hiking conditions in the Atlas are ideal, and the wildflower season is at its peak. The only drawbacks are peak-season pricing and Easter week crowds in popular destinations.' } },
    { '@type': 'Question', name: 'When is the Rose Festival in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The Festival of Roses (Moussem des Roses) takes place in Kelaat M\'Gouna in the Dades Valley, typically in late April or early May when the Damascene roses are in bloom. The festival features a rose queen pageant, traditional music, Berber dances, and a vibrant souk selling rose products. Exact dates vary each year depending on the harvest.' } },
    { '@type': 'Question', name: 'What should I pack for Morocco in April?', acceptedAnswer: { '@type': 'Answer', text: 'Pack light, breathable clothing for warm days (25+ degrees), a light jacket for cooler evenings, comfortable hiking shoes for Atlas trails, sunscreen (SPF 50), sunglasses, and a sun hat. April is warm enough for short sleeves during the day but evenings can still be cool in mountain areas. A light scarf for wind and modesty is useful.' } },
    { '@type': 'Question', name: 'Is April expensive for Morocco travel?', acceptedAnswer: { '@type': 'Answer', text: 'April is peak season with the highest prices of the year alongside October. Accommodation costs are at full rates, popular riads require advance booking, and tour prices are not typically negotiable. Budget travelers should book 4-6 weeks ahead. Despite higher prices, the weather and conditions justify the premium for many travelers.' } },
    { '@type': 'Question', name: 'Can you hike Toubkal in April?', acceptedAnswer: { '@type': 'Answer', text: 'April is an excellent month for Toubkal. The summit (4,167 meters) is accessible but may still have snow patches requiring crampons and ice axes. Lower trails around Imlil are snow-free and wildflower-covered. The Toubkal summit typically becomes fully accessible without winter equipment from mid-May. April hikers should be prepared for both spring and winter conditions.' } },
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
    tempRange: '18-23 C',
    rainfall: 'Low (15-30 mm)',
    description: 'April on the Atlantic coast is glorious. Agadir reaches 25-26 degrees with reliable sunshine and warming sea temperatures (around 19 degrees). Essaouira trade winds remain present but interspersed with calm, warm days perfect for beach strolling and medina exploration. Rabat and Casablanca enjoy warm spring weather with minimal rain. The coastal wildflowers are in full bloom, and the Atlantic surf remains consistent. Swimming becomes possible for hardier visitors, though true beach season is still a month away.',
    bestFor: 'Surfing, beach walks, outdoor dining, coastal exploration',
  },
  {
    region: 'Interior Cities',
    icon: Landmark,
    cities: 'Marrakech, Fes, Meknes',
    tempRange: '18-26 C',
    rainfall: 'Low (15-25 mm)',
    description: 'April is the prime month for Marrakech and Fes. Daytime temperatures of 25-28 degrees are warm but not yet oppressive, with cool and pleasant evenings around 14-16 degrees. Gardens are in full spring glory, with roses, jasmine, and bougainvillea at their peak. Rooftop terraces and outdoor restaurants operate at full capacity. The Jemaa el-Fnaa is at its most vibrant with longer evenings. This is peak tourist season, so popular attractions draw queues during midday. Morning and late afternoon visits are most comfortable.',
    bestFor: 'Garden visits, outdoor dining, rooftop experiences, cultural festivals',
  },
  {
    region: 'Sahara Desert',
    icon: Sun,
    cities: 'Merzouga, M\'Hamid, Zagora',
    tempRange: '15-30 C',
    rainfall: 'Minimal (under 5 mm)',
    description: 'April marks the transition of the Sahara from comfortable spring to building heat. Daytime temperatures reach 28-30 degrees, warm but still manageable for morning and late afternoon exploration. Midday becomes hot, requiring shade and hydration. Nights are mild (15 degrees), making camping very comfortable without the need for heavy layers. This is the last comfortable month for desert visits before the summer furnace. Sandstorms become slightly more frequent as the sirocco winds begin.',
    bestFor: 'Last comfortable desert camping, early morning dune walks, sunset treks',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Imlil, Ouarzazate, Dades Valley, Rose Valley',
    tempRange: '5-18 C',
    rainfall: 'Light (20-35 mm)',
    description: 'April is the premier month for Atlas Mountain hiking. Snow retreats above 3,000 meters, opening the mid-altitude trails that were closed in winter. The valleys are carpeted in wildflowers, the Berber villages bustle with spring agricultural activity, and the air is clear and warm. The Dades and Rose valleys bloom with wild roses, and the gorges are ideal for hiking. The Toubkal region is accessible though the summit may still have snow patches. Multi-day treks through the Ait Bougmez Valley and the M\'Goun Massif are spectacular.',
    bestFor: 'Trekking, wildflowers, Rose Valley, gorge hiking, mountain villages',
  },
  {
    region: 'Mediterranean Coast',
    icon: CloudSun,
    cities: 'Tangier, Chefchaouen, Al Hoceima',
    tempRange: '16-22 C',
    rainfall: 'Low (20-35 mm)',
    description: 'The northern Mediterranean coast blooms in April, with Chefchaouen surrounded by lush green hillsides and wildflower meadows. Tangier is warm and pleasant, with outdoor cafe culture returning to its boulevards. Al Hoceima on the Rif coast sees warm days and the beginning of beach season. Rain is increasingly rare, and the sunshine hours extend significantly. The Rif Mountains are at their greenest and most photogenic, with traditional agriculture creating a patchwork of color across the hillsides.',
    bestFor: 'Chefchaouen photography, Rif hiking, coastal exploration, outdoor culture',
  },
];

/* ===============================================================
   DATA: BEST DESTINATIONS IN APRIL
   =============================================================== */

const bestDestinations = [
  {
    name: 'Dades Valley & Rose Valley',
    icon: Flower2,
    highlight: 'Festival of Roses, blooming Damascene rose fields',
    description: 'April is the month the Dades Valley earns its nickname, the Valley of Roses. Millions of Damascene roses bloom in the fields between Kelaat M\'Gouna and Boumalne Dades, filling the air with their perfume and turning the valley pink. The Festival of Roses (Moussem des Roses), typically held in late April or early May, draws thousands with its rose queen pageant, Berber music and dance performances, and a vibrant souk selling rose water, rose oil, and rose-based cosmetics. Even outside the festival dates, visiting the rose fields and local distilleries is unforgettable.',
    cost: 'Budget from 400-700 MAD/day',
  },
  {
    name: 'Atlas Mountains (Trekking)',
    icon: Mountain,
    highlight: 'Best hiking month: wildflowers, accessible trails, clear skies',
    description: 'April is universally considered the best month for Atlas Mountain hiking. Snow has retreated from the mid-altitude trails, wildflowers carpet every slope and valley, and temperatures at hiking elevations (1,500-3,000 meters) are ideal at 12-18 degrees. Multi-day treks through the Ait Bougmez Valley, the M\'Goun Massif, and the Toubkal circuit are at their most rewarding. Day hikes from Imlil through Berber villages surrounded by almond and walnut trees are accessible to all fitness levels. Mountain lodges and guesthouses are open and welcoming.',
    cost: 'Day hike from 350 MAD guided, multi-day from 1,500 MAD',
  },
  {
    name: 'Marrakech',
    icon: Star,
    highlight: 'Peak spring: gardens in full bloom, vibrant cultural scene',
    description: 'April Marrakech is the city at its very best. The temperature is warm enough for rooftop lounging and outdoor dining but not the punishing heat of July-August. The Jardin Majorelle, Menara Gardens, and Le Jardin Secret are in full spring bloom, creating some of the most photographed scenes in the country. The cultural calendar picks up with art exhibitions, gallery openings, and the buildup to the summer festival season. This is peak tourist season, so book accommodation 4-6 weeks ahead and visit major sites early in the morning.',
    cost: 'Budget from 700-1,200 MAD/day',
  },
  {
    name: 'Todra & Dades Gorges',
    icon: Compass,
    highlight: 'Perfect gorge hiking, rock climbing season opens',
    description: 'The Todra and Dades gorges are at their absolute best in April. The 300-meter canyon walls of Todra are bathed in spring light, creating dramatic color contrasts between the red rock and the blue sky. Temperatures in the gorges are ideal for hiking (20-24 degrees), and the seasonal waterfalls from snowmelt cascade down the cliff faces. Rock climbers from around the world arrive for the limestone walls of Todra, which offer routes from beginner to extreme. The drive through the Dades Gorge, with its winding road of a thousand kasbahs, is one of Morocco most scenic routes.',
    cost: 'Budget from 400-650 MAD/day',
  },
  {
    name: 'Chefchaouen',
    icon: Camera,
    highlight: 'Blue city in peak spring color, green Rif Mountains',
    description: 'Chefchaouen in April is a photographer paradise. The famous blue medina glows against the backdrop of the Rif Mountains at their most vividly green, with wildflower meadows stretching up the hillsides. The weather is warm enough for comfortable all-day exploration, and the rooftop terraces offer stunning views over the valley. Hiking to the Spanish Mosque viewpoint and the Akchour Waterfalls are April highlights. The town is busier than winter months but not yet overwhelmed by summer tourism.',
    cost: 'Budget from 400-600 MAD/day',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    highlight: 'Warming coast, wind festival preparations, gnaoua culture',
    description: 'April Essaouira hits the sweet spot between the wild winter Atlantic and the intense summer trade winds. Calm, warm days become more frequent, and the medina comes alive with preparations for the legendary Gnaoua World Music Festival (June). The fishing port is active, the art galleries showcase new spring exhibitions, and the coastal walks along the ramparts are comfortable and beautiful. Surfing remains excellent, and the beach is increasingly pleasant for sunbathing on calm days. Essaouira is also preparing for peak season with fresh medina murals and restored riads.',
    cost: 'Budget from 450-700 MAD/day',
  },
];

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const eventsAndFestivals = [
  {
    name: 'Festival of Roses (Moussem des Roses)',
    icon: Flower2,
    date: 'Late April - Early May (varies)',
    location: 'Kelaat M\'Gouna, Dades Valley',
    description: 'The highlight of Morocco April calendar and one of the country most famous festivals. When millions of Damascene roses bloom in the valley between Kelaat M\'Gouna and Boumalne Dades, the town celebrates with a multi-day festival featuring a rose queen competition, traditional Ahwach dances, Berber music, horse parades, and a souk selling rose products. The surrounding valley is carpeted in pink and the air is perfumed with roses. Even if your visit does not coincide with the festival dates, the rose harvest and distilleries are fascinating to witness.',
  },
  {
    name: 'Easter Week',
    icon: Calendar,
    date: 'Varies (March-April)',
    location: 'Nationwide (tourist areas)',
    description: 'Easter is one of the busiest periods for Morocco tourism, with European visitors arriving for the school holidays. Marrakech, Fes, and the Sahara see the biggest influx. Prices for accommodation rise to full peak-season rates, and popular riads sell out weeks in advance. If traveling during Easter week, book accommodation and tours at least 6 weeks ahead. Outside the major tourist cities, Easter has minimal impact on daily life, as Morocco is a Muslim country.',
  },
  {
    name: 'Gnaoua Festival Preparations',
    icon: Music,
    date: 'April (rehearsals and buildup)',
    location: 'Essaouira',
    description: 'While the Gnaoua World Music Festival itself takes place in June, April sees rehearsals, workshops, and smaller performances by gnaoua musicians in Essaouira. The spiritual music tradition, rooted in sub-Saharan African heritage and Sufi mysticism, permeates the town atmosphere. Some riads and cultural centers host intimate gnaoua performances in April. It is a chance to experience the music in a more personal setting before the festival crowds arrive.',
  },
  {
    name: 'Wildflower Peak Season',
    icon: TreesIcon,
    date: 'April - May',
    location: 'Atlas Mountains, Rif, countryside',
    description: 'April is the peak of Morocco wildflower season. The Atlas foothills, the Rif Mountains, and the agricultural plains between cities are transformed by carpets of poppies, wild irises, lavender, cistus, and dozens of endemic species. The Ourika Valley, Ait Bougmez, and the cedar forests around Azrou are particularly spectacular. Guided botanical walks reveal the extraordinary diversity of Morocco flora, which includes over 4,000 species. The wildflower displays against snow-capped mountain backdrops create world-class photography opportunities.',
  },
];

/* ===============================================================
   DATA: WHAT TO PACK
   =============================================================== */

const packingList = [
  { item: 'Light, Breathable Clothing', icon: Shirt, description: 'Short-sleeve shirts, light trousers, and breathable fabrics for warm days (25-28 degrees in cities). Cotton and linen work well. Modest clothing that covers shoulders and knees is respectful for visiting religious sites and conservative areas.' },
  { item: 'Light Jacket or Cardigan', icon: Wind, description: 'April evenings can still be cool (14-16 degrees in cities, 8-10 degrees in mountains). A light jacket, cardigan, or shawl is needed for after-sunset outings, rooftop dinners, and mountain areas. Layering remains important despite the warmth.' },
  { item: 'Hiking Boots', icon: Footprints, description: 'Essential if planning any Atlas Mountain hiking, gorge walks, or Rose Valley exploration. Choose lightweight trail shoes with good ankle support and grip. Trails can be rocky and uneven. Break in new boots before your trip to avoid blisters.' },
  { item: 'Strong Sun Protection', icon: Sun, description: 'April sun is intense, especially at altitude and in the desert. Pack SPF 50 sunscreen, UV-protective sunglasses, and a wide-brimmed hat. Reapply sunscreen every 2 hours. The combination of altitude and clear skies dramatically increases UV exposure in the mountains.' },
  { item: 'Daypack & Water Bottle', icon: Luggage, description: 'A comfortable daypack (20-25 liters) for day hikes, gorge walks, and city exploration. Include a reusable water bottle (refill from bottled water). April heat means hydration is essential. Pack snacks, sunscreen, rain jacket, and camera in your daypack.' },
  { item: 'Camera Equipment', icon: Camera, description: 'April is one of Morocco most photogenic months. Roses in the Dades Valley, wildflowers in the Atlas, blue Chefchaouen against green mountains, and golden kasbahs. Bring a versatile lens (24-105mm equivalent), extra batteries, and plenty of storage. A polarizing filter enhances the deep April skies.' },
];

/* ===============================================================
   DATA: COSTS IN APRIL
   =============================================================== */

const aprilCosts = [
  { category: 'Riad/Hotel (budget)', icon: MapPin, peakPrice: 'From 450-800 MAD/night', lowPrice: 'From 200-400 MAD/night', note: 'Peak season rates' },
  { category: 'Riad/Hotel (mid-range)', icon: Star, peakPrice: 'From 900-2,000 MAD/night', lowPrice: 'From 500-1,000 MAD/night', note: 'Book 4-6 weeks ahead' },
  { category: 'Food (per day)', icon: UtensilsCrossed, peakPrice: 'From 150-350 MAD', lowPrice: 'From 100-250 MAD', note: 'Restaurant prices stable' },
  { category: 'Sahara Desert Tour (2 days)', icon: Compass, peakPrice: 'From 1,200-2,500 MAD', lowPrice: 'From 800-1,500 MAD', note: 'Last comfortable month' },
  { category: 'Guided Hiking (per day)', icon: Mountain, peakPrice: 'From 400-800 MAD', lowPrice: 'From 300-600 MAD', note: 'Peak demand, book ahead' },
  { category: 'Domestic Flights', icon: Globe, peakPrice: 'From 500-1,200 MAD', lowPrice: 'From 300-700 MAD', note: 'Book early for savings' },
];

/* ===============================================================
   DATA: PROS AND CONS
   =============================================================== */

const prosAndCons = {
  pros: [
    { point: 'Perfect weather everywhere', description: 'April offers ideal temperatures in every region: warm cities, comfortable mountains, and the last tolerable desert heat. It is widely considered one of Morocco two best months (with October).' },
    { point: 'Festival of Roses', description: 'One of Morocco most spectacular cultural events, the Rose Festival in Kelaat M\'Gouna celebrates the Damascene rose harvest with music, dance, and vibrant celebrations.' },
    { point: 'Peak wildflower season', description: 'The Atlas foothills, Rif Mountains, and countryside are at their most colorful, with carpets of poppies, irises, and endemic wildflowers creating spectacular landscapes.' },
    { point: 'Best hiking month', description: 'Mid-altitude Atlas trails are snow-free and wildflower-covered. Gorges are at ideal temperatures. Multi-day treks offer the year best conditions.' },
    { point: 'Gardens in full bloom', description: 'Marrakech and Fes gardens reach their peak in April, with roses, jasmine, bougainvillea, and wisteria creating stunning displays.' },
    { point: 'Longer days', description: 'Sunset around 7:15-7:30 PM gives significantly more daylight for sightseeing, photography, and outdoor activities compared to winter months.' },
  ],
  cons: [
    { point: 'Peak-season prices', description: 'April is peak season with full-rate pricing. Accommodation, tours, and flights cost 30-50% more than low season. Budget travelers feel the impact most.' },
    { point: 'Crowds at major sites', description: 'Popular attractions in Marrakech, Fes, and the Sahara draw significant crowds, especially during Easter week. Morning visits are essential to avoid the midday crush.' },
    { point: 'Easter week premium', description: 'The Easter holiday period brings the highest demand of the spring season. Prices spike further, and availability tightens. Book 6+ weeks ahead for Easter travel.' },
    { point: 'Sahara getting hot', description: 'Late April temperatures in the desert reach 30+ degrees at midday. Desert tours are still possible but require early morning and late afternoon timing to avoid the heat.' },
    { point: 'Advance booking essential', description: 'Popular riads, desert camps, and hiking guides must be booked well in advance. Spontaneous travel is more difficult than in low season.' },
    { point: 'Occasional sirocco winds', description: 'Hot, dusty winds from the Sahara (chergui/sirocco) can occasionally push temperatures up sharply and create hazy conditions for a day or two.' },
  ],
};

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  { tip: 'Rose Festival Timing', icon: Flower2, description: 'The Rose Festival dates depend on the harvest, which varies by year. Follow Moroccan tourism social media or contact local operators for confirmed dates. Even if you miss the festival itself, the rose fields bloom throughout late April and early May.' },
  { tip: 'Book 4-6 Weeks Ahead', icon: AlertTriangle, description: 'April is peak season. Riads, desert tours, and hiking guides fill up. For Easter week, book 8+ weeks ahead. Last-minute bookings are possible but at premium prices with limited choice.' },
  { tip: 'Visit Sites Early Morning', icon: Clock, description: 'Major attractions like the Bahia Palace, Saadian Tombs, and Fes tanneries are busy from 10 AM to 4 PM. Arrive when they open (typically 9 AM) for a crowd-free experience and the best morning light for photography.' },
  { tip: 'Desert: Go Early in the Month', icon: Thermometer, description: 'Early April temperatures in the Sahara are comfortable (25-28 degrees). By late April, midday heat reaches 30+ degrees. If the desert is on your itinerary, schedule it for the first week of April.' },
  { tip: 'Combine Roses and Gorges', icon: Compass, description: 'The Rose Valley, Dades Gorge, and Todra Gorge are all within a 2-3 hour driving radius. Combine them in a 3-4 day loop from Marrakech for an unforgettable April itinerary that captures the best of the season.' },
  { tip: 'Hydration Strategy', icon: Lightbulb, description: 'April warmth catches some travelers off guard. Carry water at all times, especially when hiking. Drink 2-3 liters daily, more during activity. Signs of dehydration include headaches and fatigue. Moroccan mint tea, while delicious, is not a substitute for water.' },
];

/* ===============================================================
   DATA: FAQS
   =============================================================== */

const faqs = [
  { question: 'What is the weather like in Morocco in April?', answer: 'April weather is near-perfect. Coastal areas reach 18-23 degrees, interior cities like Marrakech see 18-26 degrees with warm sunny days, the Sahara reaches 15-30 degrees, and the Atlas Mountains range from 5-18 degrees with excellent hiking conditions. Rain is minimal, sunshine is abundant, and evenings are pleasantly cool.' },
  { question: 'Is April a good time to visit Morocco?', answer: 'April is widely considered one of the two best months to visit Morocco (along with October). The weather is ideal everywhere, the Festival of Roses takes place, wildflowers peak, and hiking conditions are perfect. The trade-off is peak-season pricing and crowds at popular sites.' },
  { question: 'When is the Rose Festival in Morocco?', answer: 'The Festival of Roses (Moussem des Roses) takes place in Kelaat M\'Gouna in the Dades Valley, typically late April or early May. The exact dates depend on the rose harvest timing, which varies year to year. The festival features a rose queen pageant, traditional Berber music and dance, horse parades, and a souk of rose products.' },
  { question: 'What should I pack for Morocco in April?', answer: 'Pack light, breathable clothing for warm days, a light jacket for evenings, hiking boots for Atlas trails, SPF 50 sunscreen, UV sunglasses, a wide-brimmed hat, and a reusable water bottle. April is warm enough for short sleeves but bring a layer for cooler evenings and mountain areas.' },
  { question: 'Is April expensive for Morocco travel?', answer: 'April is peak season with the highest prices alongside October. Accommodation runs 30-50% above low-season rates. Easter week sees further price premiums. Budget travelers should book 4-6 weeks ahead and consider lesser-known destinations for better value. Food and local transport costs remain relatively stable year-round.' },
  { question: 'Can you hike Toubkal in April?', answer: 'April is excellent for Toubkal trekking. The summit (4,167 meters) is accessible but may have snow patches requiring crampons. Lower trails from Imlil are snow-free and wildflower-covered. Hire an experienced guide familiar with April conditions. The summit trek typically takes 2 days with an overnight at the Toubkal Refuge.' },
  { question: 'Is April too hot for the Sahara Desert?', answer: 'Early April is comfortable with temperatures of 25-28 degrees. Late April reaches 30+ degrees at midday, making afternoon dune exploration uncomfortable. Schedule desert activities for early morning and late afternoon. Night camping remains very comfortable. Consider going in the first two weeks of April for the best conditions.' },
];

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { href: '/morocco-in-march', icon: Calendar, title: 'Morocco in March', description: 'Early spring wildflowers, shoulder-season pricing, and the transition to warmer weather.' },
  { href: '/best-time-to-visit-morocco', icon: Sun, title: 'Best Time to Visit Morocco', description: 'Month-by-month breakdown of weather, festivals, and crowd levels across the country.' },
  { href: '/morocco-hiking-guide', icon: Mountain, title: 'Morocco Hiking Guide', description: 'Trails, routes, and practical advice for hiking in the Atlas Mountains and beyond.' },
  { href: '/morocco-road-trip-routes', icon: Compass, title: 'Morocco Road Trip Routes', description: 'Scenic driving routes through Morocco, from coast to mountains to desert.' },
  { href: '/morocco-packing-list', icon: Luggage, title: 'Morocco Packing List', description: 'Season-by-season guide to packing for every region of Morocco.' },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInAprilPage() {
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
            <span className="text-white">Morocco in April</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Flower2 className="w-4 h-4" />
            Monthly Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Visiting Morocco
            <br className="hidden md:block" /> in April
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Peak spring perfection: the Festival of Roses, Atlas Mountain trekking at its finest,
            wildflower-covered landscapes, and ideal weather everywhere. Your complete April 2026 guide.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Visit Morocco in April?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                April is Morocco in full bloom, in every sense. The country transforms into a
                land of extraordinary natural beauty, cultural celebration, and near-perfect weather.
                In the Dades Valley, millions of Damascene roses unfurl their petals, scenting the
                air and painting the landscape pink for the famous Festival of Roses. In the Atlas
                Mountains, wildflower meadows carpet the hillsides beneath snow-dusted peaks.
                In Marrakech, the gardens of Majorelle and the Menara reach their spring zenith.
              </p>
              <p>
                The weather in April is exceptional across the entire country. Marrakech enjoys
                warm, sunny days of 25-28 degrees perfect for outdoor exploration, while the
                Atlas Mountains offer the year best trekking conditions with clear skies and
                comfortable hiking temperatures. The gorges of Todra and Dades are ideal for
                walking and rock climbing, the northern Rif around Chefchaouen is at its most
                vividly green, and even the Sahara remains accessible for those who schedule
                activities around the midday heat.
              </p>
              <p>
                The trade-off for April perfection is peak-season pricing and increased tourist
                numbers. Popular riads require advance booking, major attractions draw queues
                at midday, and Easter week brings an additional surge of European visitors. Yet
                for most travelers, the combination of ideal weather, spectacular natural events,
                and the sheer energy of Morocco in spring makes April the most rewarding month
                to visit. Those who plan ahead and book early will experience the country at its
                magnificent, blooming best.
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
            April Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            April delivers warm, sunny weather across the entire country. Every region offers
            comfortable conditions for outdoor activities and exploration.
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
            Best Destinations in April
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the rose-perfumed Dades Valley to Atlas Mountain trails and the blue streets of
            Chefchaouen, these destinations define April in Morocco.
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
            April Events &amp; Festivals
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Festival of Roses headlines an April filled with cultural celebrations, natural
            spectacles, and the building energy of Morocco peak travel season.
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
            What to Pack for April
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            April packing tilts toward warm-weather gear, but do not forget layers for mountain
            evenings and strong sun protection for increasingly intense UV levels.
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

      {/* -- Costs -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDollarSign className="w-8 h-8 inline-block text-[var(--color-gold)] mr-2" />
            April Costs (Peak Season)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            April is peak season with prices at their highest. Here is what to budget compared to
            low-season rates to understand the premium.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices in MAD. Seasonal pricing can change. Book early for best rates.
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            {aprilCosts.map((cost) => {
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
                        <span>April: <span className="text-[var(--color-accent)] font-medium">{cost.peakPrice}</span></span>
                        <span>Low season: <span className="text-green-700">{cost.lowPrice}</span></span>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                      {cost.note}
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
            Pros &amp; Cons of April Travel
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            An honest assessment to help you decide if April is the right month for your Morocco trip.
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
            Sample 7-Day April Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A spring-optimized week capturing roses, gorges, mountains, and medina culture.
            Estimated total cost from 7,000-12,000 MAD per person (peak season).
          </p>

          <div className="space-y-6">
            {[
              {
                day: 1,
                title: 'Arrive in Marrakech',
                morning: 'Arrive and check into your pre-booked riad (from 500 MAD/night peak). Stroll through the Jemaa el-Fnaa in the pleasant April warmth. The square is buzzing with spring energy.',
                afternoon: 'Jardin Majorelle and YSL Museum (from 70 MAD combined) — arrive early to avoid midday crowds. The garden is at its absolute peak in April with bougainvillea and water lilies in bloom.',
                evening: 'Rooftop dinner with views over the medina and the Atlas Mountains still carrying snow on their peaks (from 120 MAD). Walk through the vibrant evening Jemaa el-Fnaa.',
              },
              {
                day: 2,
                title: 'Marrakech to Ait Benhaddou & Dades',
                morning: 'Depart over the Tizi n\'Tichka pass toward the Sahara side. The pass is clear in April with spectacular views. Stop at Ait Benhaddou kasbah (from 20 MAD) in the warm spring light.',
                afternoon: 'Continue through the Rose Valley — if late April, the Damascene roses may be in bloom, turning the valley pink and perfuming the air. Arrive at a guesthouse in the Dades Gorge (from 350 MAD/night).',
                evening: 'Walk through the lower Dades Gorge in the golden evening light. The April sunset on the red canyon walls is spectacular. Dinner at your guesthouse (from 80 MAD).',
              },
              {
                day: 3,
                title: 'Dades Gorge, Todra Gorge & Roses',
                morning: 'If the Rose Festival is running, visit Kelaat M\'Gouna for the celebrations. Otherwise, explore the rose cooperatives and distilleries where rose water and oil are produced (from 20 MAD visits).',
                afternoon: 'Drive to the Todra Gorge (1.5 hours). Walk through the 300-meter canyon in perfect April temperatures (22 degrees). Watch rock climbers on the limestone walls. Optional: hire a guide for a deeper gorge hike (from 200 MAD).',
                evening: 'Return to Dades or continue to Tinghir. Traditional Berber dinner in a family guesthouse (from 70 MAD). The star-filled April sky over the gorge is extraordinary.',
              },
              {
                day: 4,
                title: 'Desert Experience',
                morning: 'Drive to Merzouga and the Erg Chebbi dunes (3-4 hours from Tinghir). The April morning drive through the Tafilalet oases is beautiful with date palms in their green spring foliage.',
                afternoon: 'Arrive at Merzouga. Rest during the warmer midday hours. Late afternoon: camel trek into the dunes for sunset (included in camp stays). April sunsets paint the dunes in deep amber and rose.',
                evening: 'Dinner and overnight in a luxury desert camp (from 1,200 MAD per person for the full experience). Berber music around the campfire. April night temperatures are mild and comfortable for stargazing.',
              },
              {
                day: 5,
                title: 'Sahara to Atlas Mountains',
                morning: 'Sunrise over Erg Chebbi — the April dawn creates spectacular light shows on the dunes. Breakfast in camp, then drive toward the Middle Atlas via the Ziz Valley palm oasis.',
                afternoon: 'Stop in Azrou for the cedar forests and Barbary macaque monkeys. Continue to a mountain lodge near Ifrane or Beni Mellal (from 400 MAD/night). The Middle Atlas wildflowers are at their peak.',
                evening: 'Peaceful evening at a mountain lodge. The crisp April mountain air and the sound of birdsong make for a restorative night after the desert.',
              },
              {
                day: 6,
                title: 'Atlas Mountains to Fes',
                morning: 'Drive to Fes (2-3 hours from Middle Atlas). Check into a medina riad (from 450 MAD/night). Begin exploring with a guided medina tour (from 350 MAD half-day) covering the tanneries and Bou Inania Medersa.',
                afternoon: 'Al-Attarine Medersa, Nejjarine Museum, and the artisan souks. April is peak season but the Fes medina absorbs crowds into its 9,000 alleys better than most cities. Shop for ceramics, leather, and textiles.',
                evening: 'Dinner at a Fassi riad restaurant with traditional cuisine: pastilla, lamb tagine, and orange-blossom pastries (from 120 MAD). The April evening in the candlelit riad courtyard is unforgettable.',
              },
              {
                day: 7,
                title: 'Fes & Departure',
                morning: 'Visit the Merenid Tombs for panoramic views of Fes el-Bali spread below. Last souk shopping and haggling. Coffee at a historic medina cafe (from 15 MAD).',
                afternoon: 'Optional: day trip to Volubilis Roman ruins (from 20 MAD entry, 1 hour from Fes) — the wildflowers among the ancient columns are extraordinary in April. Or depart from Fes Saiss airport.',
                evening: 'If extending: take the bus to Chefchaouen (from 75 MAD, 4 hours) for the blue city at its spring best, or the train to Tangier (from 100 MAD, 4.5 hours) for a Mediterranean coastal finish.',
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
            Insider Tips for April
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential advice for navigating peak season, timing the Rose Festival, and making the
            most of April perfect conditions.
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
            Common questions about visiting Morocco in April, answered with practical detail.
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
            Ready to Experience April in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Discover the Festival of Roses, trek the Atlas Mountains in full bloom, and experience
            Morocco at its most beautiful. Book early for the best April experience.
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

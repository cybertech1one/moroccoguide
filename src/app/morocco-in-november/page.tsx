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
  Snowflake,
  Umbrella,
} from 'lucide-react';

/* -- CONSTANTS -- */

const BASE_URL = 'https://citytoursmorocco.com';

/* -- SEO METADATA -- */

export const metadata: Metadata = {
  title: 'Visiting Morocco in November 2026 | Low Season Prices, Weather & Guide',
  description:
    'Complete guide to visiting Morocco in November 2026. Late autumn brings cooler temperatures, occasional rain, low-season prices, the olive harvest, and first Atlas snow. Ideal for budget travel, cultural immersion, and fewer tourists.',
  keywords: [
    'morocco in november',
    'visiting morocco november',
    'morocco november weather',
    'morocco low season',
    'morocco autumn travel',
    'morocco budget travel november',
    'marrakech november weather',
    'morocco november temperature',
    'marrakech international film festival',
    'morocco olive harvest',
    'atlas mountains snow november',
    'sahara november',
    'morocco rainy season',
    'morocco cheap travel',
    'morocco fewer tourists',
  ],
  openGraph: {
    title: 'Visiting Morocco in November 2026 | Low Season Prices & Fewer Crowds',
    description:
      'November in Morocco: cooler weather, olive harvest, Marrakech Film Festival, first Atlas snow, and low-season prices. Ideal for budget-conscious cultural travelers.',
    url: `${BASE_URL}/morocco-in-november`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco in November with dramatic clouds over the Atlas Mountains and medina rooftops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco in November 2026 | Budget Travel Guide',
    description:
      'Cooler weather, fewer tourists, low-season prices. Olive harvest, Marrakech Film Festival, pleasant Sahara. Complete guide for November visitors.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-in-november` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-in-november`,
  name: 'Visiting Morocco in November 2026 | Low Season Prices, Weather & Guide',
  description:
    'November in Morocco brings cooler temperatures, occasional rain, low-season prices, olive harvest, Marrakech International Film Festival, and first Atlas snow. Ideal for budget travel and cultural immersion.',
  url: `${BASE_URL}/morocco-in-november`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-in-november`,
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
      { '@type': 'ListItem', position: 3, name: 'November', item: `${BASE_URL}/morocco-in-november` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is November a good time to visit Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'November is an excellent choice for travelers seeking fewer crowds, lower prices, and authentic cultural experiences. While temperatures are cooler and occasional rain is possible (especially in the north), the weather remains mild by European winter standards. Marrakech averages 18-22 degrees, the Sahara is pleasant (12-25 degrees), and the olive harvest and Marrakech International Film Festival add unique experiences. Budget travelers and culture seekers will find November especially rewarding.' } },
    { '@type': 'Question', name: 'What is the weather like in Morocco in November?', acceptedAnswer: { '@type': 'Answer', text: 'November weather varies by region. Coastal cities see 17-22 degrees with increasing rain (4-7 rainy days). Interior cities like Marrakech average 15-22 degrees with pleasant days and cool evenings. The Sahara ranges 12-25 degrees — comfortable days and chilly nights requiring warm layers. Atlas Mountains drop to 2-12 degrees with first snow on high peaks. Northern Morocco (Tangier, Chefchaouen) is the wettest area.' } },
    { '@type': 'Question', name: 'Does it rain a lot in Morocco in November?', acceptedAnswer: { '@type': 'Answer', text: 'November marks the start of Morocco wet season, but rain is far from constant. Most areas see 4-7 rainy days across the entire month, often as brief afternoon showers rather than all-day rain. The north (Tangier, Chefchaouen, Rif) receives the most rain. Marrakech and the south remain relatively dry. The Sahara sees virtually no rain. Pack a light waterproof layer and an umbrella, but do not expect rain to dominate your trip.' } },
    { '@type': 'Question', name: 'Are prices lower in Morocco in November?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, November is low season in most of Morocco. Hotel and riad prices drop 25-40 percent from peak season rates. A riad that charges from 1,000-1,500 MAD per night in peak season may offer rooms from 500-800 MAD in November. Flights from Europe are also cheaper, and tour operators offer discounts to fill spots. The exception is the Marrakech International Film Festival period, when Marrakech prices temporarily rise.' } },
    { '@type': 'Question', name: 'Can you visit the Sahara Desert in November?', acceptedAnswer: { '@type': 'Answer', text: 'November is a good month for the Sahara. Daytime temperatures of 20-25 degrees are comfortable for camel treks and exploration. However, nights can be cold (8-12 degrees), so bring warm layers for overnight camps. The clear November skies offer excellent stargazing. Desert camps are less crowded than in October or December-January, and tour prices are competitive.' } },
    { '@type': 'Question', name: 'What events happen in Morocco in November?', acceptedAnswer: { '@type': 'Answer', text: 'The Marrakech International Film Festival (FIFM) is the headline event, attracting global cinema stars and directors to the Red City. The olive harvest continues across the Meknes and Fes regions, with pressing cooperatives welcoming visitors. First snow appears on the High Atlas peaks, and the cultural calendar includes various art exhibitions and performances as Morocco cultural season resumes after summer.' } },
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
    tempRange: '17-22 C',
    rainfall: 'Moderate (4-7 rainy days)',
    highlights: 'Mild by European winter standards but cooling. Agadir remains the warmest coastal city (20-24 degrees). Essaouira has atmospheric misty mornings. Swimming is cool but possible for hardy swimmers in Agadir. Surfing season begins on the Atlantic.',
    rating: 'Good',
  },
  {
    region: 'Mediterranean Coast',
    cities: 'Tangier, Tetouan, Al Hoceima',
    icon: CloudRain,
    tempRange: '14-19 C',
    rainfall: 'High (6-9 rainy days)',
    highlights: 'The wettest region in November. Tangier gets moody and atmospheric with rain and dramatic skies. The Rif Mountains are green and lush. Not ideal for beach holidays but excellent for photography and cultural exploration.',
    rating: 'Fair',
  },
  {
    region: 'Interior Cities',
    cities: 'Marrakech, Fes, Meknes',
    icon: Thermometer,
    tempRange: '15-22 C',
    rainfall: 'Low-Moderate (3-5 rainy days)',
    highlights: 'Pleasant daytime temperatures for medina exploration. Marrakech averages 18-22 degrees with sunny spells between occasional showers. Fes is cooler (15-19 degrees). Evenings drop to 8-12 degrees — bring warm layers. Riads with fireplaces come into their own.',
    rating: 'Very Good',
  },
  {
    region: 'Sahara Desert',
    cities: 'Merzouga, Zagora, Draa Valley',
    icon: Tent,
    tempRange: '12-25 C',
    rainfall: 'Virtually none',
    highlights: 'Comfortable daytime temperatures for desert activities. Nights are genuinely cold (8-12 degrees) — warm sleeping bags essential in camps. Clear skies make for spectacular stargazing. Fewer tourists than October or December. The desert at its most peaceful.',
    rating: 'Very Good',
  },
  {
    region: 'Atlas Mountains',
    cities: 'Imlil, Ouarzazate, Dades Valley',
    icon: Snowflake,
    tempRange: '2-12 C',
    rainfall: 'Moderate (4-6 rainy/snowy days)',
    highlights: 'First snow arrives on peaks above 3,000m. Toubkal may have snow from mid-November. Lower valleys and gorges remain accessible with cooler but manageable temperatures. The Dades and Todra Gorges are excellent. High-altitude trekking season is ending.',
    rating: 'Fair to Good',
  },
] as const;

/* ===============================================================
   DATA: EVENTS & FESTIVALS
   =============================================================== */

const novemberEvents = [
  {
    name: 'Marrakech International Film Festival (FIFM)',
    icon: Film,
    dates: 'Late November / Early December (varies)',
    location: 'Marrakech',
    description: 'The Marrakech International Film Festival (Festival International du Film de Marrakech) is Morocco most glamorous cultural event. Founded in 2001 under the patronage of King Mohammed VI, it attracts A-list celebrities, acclaimed directors, and cinema professionals from around the world. Past honorees include Martin Scorsese, Francis Ford Coppola, Judi Dench, and Abbas Kiarostami. The festival screens dozens of Moroccan, African, and international films, with public screenings, masterclasses, and red carpet events transforming the city.',
    price: 'Public screenings from 50 MAD / Gala events by invitation',
    tip: 'Book Marrakech accommodation early if your trip coincides with FIFM — the city fills up and prices spike during the festival. Free outdoor screenings often take place in Jemaa el-Fnaa. The festival creates a uniquely glamorous atmosphere in the medina.',
  },
  {
    name: 'Olive Harvest Season',
    icon: TreesIcon,
    dates: 'October - December (peaks November)',
    location: 'Meknes, Fes Region, Rif Mountains',
    description: 'November is the heart of the Moroccan olive harvest. The Meknes-Fes region, the Rif Mountains, and the Souss plain near Agadir are Morocco major olive-producing areas. Millions of olive trees are harvested by hand, and the first cold-pressed oils of the season appear in markets and cooperatives. Visiting a pressing cooperative to see traditional and modern extraction methods and taste fresh oil is a memorable November experience. The Meknassi olive variety produces particularly fine oil.',
    price: 'Free to observe / Cooperative visits from 50 MAD / Fresh oil from 80 MAD per liter',
    tip: 'Drive through the olive groves between Meknes and Volubilis during harvest — the rolling hills are beautiful with nets spread under silver-green trees. Buy fresh cold-pressed oil directly from cooperatives for the best quality and price. The new season oil has a distinctive peppery freshness.',
  },
  {
    name: 'First Snow on Atlas Peaks',
    icon: Snowflake,
    dates: 'Mid to Late November (varies)',
    location: 'High Atlas Mountains',
    description: 'The first snowfall on the Atlas peaks is one of November most dramatic natural events. Toubkal (4,167m), Mgoun (4,071m), and the surrounding high peaks receive their first dusting of snow, creating a stunning contrast with the warm-toned valleys below. The snow line typically sits above 3,000m in November, leaving lower valleys and gorges accessible. From Marrakech, the snow-capped Atlas are visible on clear days, creating a remarkable backdrop to the Red City.',
    price: 'Free (viewing from distance) / Atlas day trips from Marrakech from 400 MAD',
    tip: 'The view of snow-capped Atlas peaks from the Koutoubia Mosque gardens in Marrakech is one of Morocco most iconic sights. Take an Imlil Valley day trip (from 400 MAD with transport) to see the snow up close. High-altitude trekking above 3,000m may require crampons and winter gear from mid-November.',
  },
  {
    name: 'Surf Season Opens in Earnest',
    icon: Waves,
    dates: 'November - March',
    location: 'Taghazout, Essaouira, Sidi Ifni, Imsouane',
    description: 'November marks the start of Morocco prime surf season. Atlantic swells increase dramatically as winter storms track across the North Atlantic, delivering consistent waves to the Moroccan coast. Taghazout, south of Agadir, becomes the epicenter of global surf culture with waves ranging from beginner-friendly beach breaks to expert-level point breaks. Surf camps and schools ramp up operations, and the international surf community descends on the coast.',
    price: 'Surf lesson from 350 MAD / Board rental from 150 MAD per day / Surf camp from 800 MAD per night (all-inclusive)',
    tip: 'Taghazout is the surf capital, but Imsouane (40 km north of Agadir) offers arguably the longest right-hand point break in Africa and a mellower vibe. Sidi Kaouki near Essaouira is excellent for beginners. November swells are building — December and January bring the biggest waves.',
  },
] as const;

/* ===============================================================
   DATA: TOP DESTINATIONS IN NOVEMBER
   =============================================================== */

const topDestinations = [
  {
    name: 'Marrakech',
    icon: Star,
    why: 'November Marrakech is a revelation for travelers who dislike crowds. Daytime temperatures of 18-22 degrees are ideal for exploring the medina, souks, and gardens without jostling for space. Low-season prices mean riads that charge from 1,000+ MAD in peak season offer rooms from 500-700 MAD. The Marrakech International Film Festival (if it falls in late November) adds glamour and cultural energy.',
    highlights: 'Uncrowded souks, comfortable Jemaa el-Fnaa, Bahia Palace, Majorelle Garden, rooftop dining, Film Festival, hammam season',
    budget: 'Riads from 400 MAD/night, meals from 35 MAD, guided tour from 250 MAD',
  },
  {
    name: 'Sahara Desert (Merzouga & Zagora)',
    icon: Tent,
    why: 'The Sahara in November offers a more intimate experience than the busier October season. Daytime temperatures of 20-25 degrees are comfortable, though nights drop to 8-12 degrees requiring warm layers. The lower tourist numbers mean you may have dune sunrises nearly to yourself. Desert camps often offer November discounts.',
    highlights: 'Erg Chebbi sunrise, quiet camel treks, stargazing in cold clear skies, Gnawa music, desert silence',
    budget: 'Desert tour from Marrakech from 1,000 MAD (2 days), luxury camp from 2,000 MAD/night',
  },
  {
    name: 'Essaouira',
    icon: Wind,
    why: 'November Essaouira trades the fierce summer wind for a moodier, more atmospheric experience. Occasional Atlantic mists roll through the medina, creating ethereal photography opportunities. The surfing season kicks off with increasing swells. Seafood is at its best, and the medina creative community is in full autumn swing with gallery openings and studio visits.',
    highlights: 'Atmospheric medina, surf season start, Gnawa music, seafood at the port, art galleries, uncrowded ramparts',
    budget: 'Riads from 300 MAD/night, seafood lunch from 50 MAD, surf lesson from 350 MAD',
  },
  {
    name: 'Fes',
    icon: Globe,
    why: 'November is one of the most rewarding months to visit Fes. The medina is genuinely uncrowded, allowing you to explore the 9,000 streets at your own pace and connect with artisans who have time to demonstrate their crafts. The cooler temperatures (15-19 degrees) make the medina comfortable, and the olive harvest in the surrounding countryside adds a seasonal dimension. Fireside dinners in historic riads are quintessentially November.',
    highlights: 'Uncrowded Fes el-Bali, artisan workshops, Chouara Tanneries, olive harvest excursion, fireside riad dining',
    budget: 'Riads from 350 MAD/night, guided tour from 300 MAD, olive oil cooperative visit from 50 MAD',
  },
  {
    name: 'Agadir & Taghazout',
    icon: Waves,
    why: 'The southern Atlantic coast is Morocco warmest region in November, with Agadir seeing 20-24 degrees and plenty of sunshine. Taghazout surf season is opening with increasingly consistent swells. The beach resort vibe continues while the rest of Morocco cools down. This is the best November destination for sun-seekers and surfers alike.',
    highlights: 'Beach days in warmth, surf season start, Souss-Massa National Park, Agadir kasbah, Paradise Valley',
    budget: 'Hotels from 350 MAD/night, surf camp from 800 MAD/night all-inclusive, meals from 40 MAD',
  },
  {
    name: 'Ouarzazate & Draa Valley',
    icon: Sunset,
    why: 'The gateway to the Sahara is particularly beautiful in November. The date harvest concludes in the Draa Valley palm oases, temperatures are mild (15-22 degrees), and the dramatic kasbahs and gorges are bathed in warm autumn light. Ouarzazate Atlas Studios offer a fascinating visit. The Dades and Todra Gorges are excellent for hiking in cooler conditions.',
    highlights: 'Ait Benhaddou, Atlas Studios, Dades Gorge, Todra Gorge, Draa Valley, last dates of the season',
    budget: 'Hotels from 300 MAD/night, Atlas Studios from 60 MAD, gorge day trip from 500 MAD',
  },
] as const;

/* ===============================================================
   DATA: PACKING ESSENTIALS
   =============================================================== */

const packingEssentials = [
  {
    item: 'Warm layers and a proper jacket',
    icon: Wind,
    detail: 'November evenings across Morocco are genuinely cool (8-15 degrees in most regions). A warm jacket, sweater, and long trousers are essential. For Sahara nights (8-12 degrees) and Atlas visits (near freezing), pack thermal layers.',
  },
  {
    item: 'Rain jacket and compact umbrella',
    icon: Umbrella,
    detail: 'November marks the start of the rainy season, particularly in northern Morocco. A packable waterproof jacket is essential. A compact umbrella is practical for medina visits where narrow alleys funnel rain.',
  },
  {
    item: 'Warm sleepwear for desert nights',
    icon: Tent,
    detail: 'Sahara desert camps can drop to 8-10 degrees overnight in November. Most camps provide blankets, but pack warm sleepwear and thick socks. A hot water bottle (or a Nalgene bottle filled with hot water) is a desert traveler secret.',
  },
  {
    item: 'Sun protection (still needed)',
    icon: ShieldCheck,
    detail: 'Despite cooler temperatures, Morocco November sun can still burn, especially in the Sahara and at altitude. Pack SPF 30+ sunscreen, sunglasses, and a hat for sunny days.',
  },
  {
    item: 'Comfortable waterproof shoes',
    icon: Compass,
    detail: 'Medina cobblestones become slippery in rain. Waterproof walking shoes with good grip are invaluable in November. Pack hiking boots if visiting the Atlas or gorges. Flip-flops for hammams.',
  },
  {
    item: 'Scarf and warm hat',
    icon: Heart,
    detail: 'A warm scarf serves double duty as wind protection, cultural covering, and evening warmth. A warm hat is essential for Atlas excursions and early-morning Sahara sunrises when temperatures can be near freezing.',
  },
] as const;

/* ===============================================================
   DATA: BUDGET TIPS
   =============================================================== */

const budgetTips = [
  {
    tip: 'Low-season riad prices are the best of the year',
    description: 'November is low season across Morocco (except during the Film Festival). Riads drop prices 25-40 percent. Premium Marrakech riads from 500-700 MAD per night instead of from 1,000-1,500 MAD. Book directly with riads for the best rates — many waive booking platform fees.',
    savings: 'Save 25-40% on accommodation',
  },
  {
    tip: 'Fly on budget carriers for rock-bottom fares',
    description: 'November is one of the cheapest months to fly to Morocco from Europe. Ryanair, easyJet, and Transavia offer fares to Marrakech and Fes from major European cities. Midweek flights are particularly cheap. Book 4-6 weeks ahead for the best deals.',
    savings: 'Save 40-60% on flights',
  },
  {
    tip: 'Negotiate everything harder in low season',
    description: 'With fewer tourists, shopkeepers, guides, and taxi drivers are more willing to negotiate. Souk prices can be bargained down further than in peak season. Tour guides offer competitive rates for private tours. Riad owners may offer free upgrades or extras for direct bookings.',
    savings: 'Save 20-30% on shopping and tours',
  },
  {
    tip: 'Take advantage of surf camp packages',
    description: 'November is early surf season in Taghazout and Essaouira. Surf camps offer introductory packages to fill beds before the December-February peak. Week-long all-inclusive camps (accommodation, meals, lessons, board rental) from 3,500-5,000 MAD — exceptional value.',
    savings: 'Save 30-40% on surf packages',
  },
  {
    tip: 'Visit Sahara midweek for best camp prices',
    description: 'Desert camps offer lower rates for midweek stays in November. A Tuesday-Wednesday overnight in a quality camp can cost 30-40 percent less than a Friday-Saturday stay. Some camps offer 2-for-1 deals or free upgrades in quieter periods.',
    savings: 'Save 30-40% on desert camps',
  },
  {
    tip: 'Warm up with Morocco cheapest comfort food',
    description: 'November is harira season — the hearty Moroccan soup of lentils, chickpeas, tomatoes, and spices served everywhere from 10-20 MAD per bowl. Street stalls sell roasted chestnuts, warm msemen flatbreads, and steaming mint tea. The most comforting and cheapest eating of the year.',
    savings: 'Save 50-70% on comfort meals',
  },
] as const;

/* ===============================================================
   DATA: INSIDER TIPS
   =============================================================== */

const insiderTips = [
  {
    tip: 'November rain creates stunning photography',
    icon: Camera,
    description: 'Rain-slicked medina streets reflect lantern light and create dramatic compositions. Moody skies over the Atlas and coast add atmosphere that clear-sky summer photos lack. Pack a weather-sealed camera or protective cover and embrace the conditions.',
  },
  {
    tip: 'Riads with fireplaces are November luxury',
    icon: Heart,
    description: 'Many traditional riads have working fireplaces in their salons. After a day exploring cool medinas, returning to a fire-warmed riad with mint tea is a quintessential November experience. Ask about fireplaces when booking — not all riads have them.',
  },
  {
    tip: 'The olive harvest is an immersive experience',
    icon: TreesIcon,
    description: 'Visit the olive groves around Meknes, Fes, or the Rif Mountains during November to see the harvest in progress. Many cooperatives welcome visitors for tastings and tours. The fresh cold-pressed oil of the season is a revelation — grassy, peppery, and nothing like supermarket oil.',
  },
  {
    tip: 'Desert dawn in November is magical but cold',
    icon: Sunset,
    description: 'November Sahara sunrises over the dunes are among the most beautiful of the year, with cold clear air creating crisp visibility. But temperatures at dawn can be 5-8 degrees. Wear every warm layer you brought and wrap up for the camel ride. The reward is worth the cold.',
  },
  {
    tip: 'Surf season is starting — catch the early waves',
    icon: Waves,
    description: 'November marks the beginning of Morocco legendary surf season. Atlantic swells are building but not yet at the powerful winter peak. This makes November ideal for intermediate surfers who want good waves without December-January intensity. Taghazout and Imsouane are the hotspots.',
  },
  {
    tip: 'Pack for four seasons in one day',
    icon: AlertTriangle,
    description: 'November Morocco can deliver sunshine, rain, wind, and cold in a single day. Layering is essential. Start the morning bundled up, peel layers as the sun warms, carry a rain jacket just in case, and bundle up again as evening falls. Versatility is key.',
  },
] as const;

/* ===============================================================
   DATA: SAMPLE ITINERARY
   =============================================================== */

const sampleItinerary = [
  {
    day: 'Days 1-3',
    title: 'Marrakech: Low-Season Luxury at Budget Prices',
    morning: 'Day 1: Arrive in Marrakech. Settle into your riad (from 400 MAD/night — rooms that cost double in peak season). Walk to Jemaa el-Fnaa, noticeably less crowded and more enjoyable in November. Bahia Palace (from 70 MAD) without the usual queues.',
    afternoon: 'Day 2-3: Majorelle Garden and YSL Museum (from 150 MAD combined) at a leisurely pace. Souk exploration with more relaxed bargaining — vendors have time for conversation. Cooking class (from 400 MAD) to learn tagine and pastilla preparation. Hammam (from 100 MAD) — perfect November activity.',
    evening: 'Dinner in a riad courtyard or by the fireplace (from 150 MAD). If your trip coincides with the Film Festival, attend a public screening. November Jemaa el-Fnaa is atmospheric with steam rising from food stalls in the cool evening air (meals from 30 MAD).',
  },
  {
    day: 'Days 4-5',
    title: 'Atlas Mountains & Sahara Transit',
    morning: 'Day 4: Drive to the Sahara via the Atlas. November views of the first snow on high peaks against clear skies are spectacular. Ait Benhaddou (from 20 MAD), lunch in Ouarzazate (from 50 MAD). Continue to Merzouga or Zagora.',
    afternoon: 'Day 4-5: Camel trek into Erg Chebbi dunes for sunset (included in most tours). The November desert is peaceful with fewer tourists. Arrive at camp, enjoy Berber music and dinner. Stargazing in cold, crystal-clear November skies is extraordinary.',
    evening: 'Night in desert camp (from 700 MAD in November low season). Wake early for sunrise — bundle up warmly as dawn temperatures can be 5-8 degrees. The morning light on the dunes in cold clear air is among the most beautiful sights in Morocco.',
  },
  {
    day: 'Days 6-7',
    title: 'Fes: Uncrowded Medina & Olive Country',
    morning: 'Day 6: Full-day in Fes el-Bali medina (guided tour from 300 MAD). November crowds are minimal, allowing genuine exploration. Al Quaraouiyine, Chouara Tanneries (from 20 MAD), artisan workshops where craftsmen have time to demonstrate their work.',
    afternoon: 'Day 7: Excursion to olive groves and cooperatives between Meknes and Fes. See the harvest in progress, taste fresh-pressed oil, and visit the Roman ruins at Volubilis (from 70 MAD). The November light on the ancient columns and mosaics is extraordinary.',
    evening: 'Fireside dinner in a Fes riad — many historic riads light fires in their salons during November. Multi-course Fassi feast (from 200 MAD). The warmth of Moroccan hospitality is most felt in the cooler months when riad staff go the extra mile to make guests comfortable.',
  },
  {
    day: 'Days 8-9',
    title: 'Coast: Surfing or Southern Sun',
    morning: 'Option A: Essaouira for atmospheric medina walks and early surf season. Morning mist through the ramparts creates moody photography. Surf lesson on the beach (from 350 MAD). Option B: Agadir/Taghazout for Morocco warmest November weather.',
    afternoon: 'Essaouira: Port seafood lunch (from 50 MAD), medina art galleries, Gnawa music venues. Taghazout: Surf sessions as Atlantic swells build, beach time in 22-degree warmth, Paradise Valley day trip (from 200 MAD).',
    evening: 'Final evening: seafood dinner on the coast (from 70 MAD). Reflect on a November trip that delivered the authentic Morocco — fewer tourists, genuine connections, dramatic weather, and prices that made luxury accessible.',
  },
] as const;

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'Is November a good time to visit Morocco?',
    answer: 'November is an excellent choice for the right type of traveler. If you prioritize lower prices, fewer crowds, authentic cultural experiences, and do not mind cooler temperatures and occasional rain, November delivers outstanding value. Marrakech and the interior cities are pleasantly cool (15-22 degrees), the Sahara is comfortable by day (20-25 degrees though cold at night), and unique experiences like the olive harvest, surf season opening, and first Atlas snow add seasonal charm. It is less ideal for beach holidays (except Agadir) or high-altitude Atlas trekking.',
  },
  {
    question: 'What is the weather like in Morocco in November?',
    answer: 'November weather is cooler than autumn months but still mild by European standards. Coastal cities: 17-22 degrees with 4-7 rainy days. Interior cities (Marrakech, Fes): 15-22 degrees with occasional showers. Sahara: 12-25 degrees with cold nights. Atlas Mountains: 2-12 degrees with first snow on high peaks. Northern Morocco (Tangier, Rif) is the wettest. Southern coast (Agadir) is the warmest and driest. Pack layers and a rain jacket.',
  },
  {
    question: 'How cold does it get in Morocco in November?',
    answer: 'The coldest November temperatures are in the Atlas Mountains, where overnight lows near freezing (0-2 degrees) are possible above 2,000m. In the Sahara, nights drop to 8-12 degrees. In cities like Fes and Marrakech, overnight lows of 8-12 degrees are common. Coastal cities stay milder at 12-15 degrees overnight. Daytime temperatures remain comfortable in most regions — the cold is primarily an evening and nighttime concern. Warm layers and a good jacket are essential.',
  },
  {
    question: 'Is November too cold for the desert?',
    answer: 'Not at all — November days in the Sahara are comfortable at 20-25 degrees, perfect for camel treks, dune exploration, and camp activities. Nights are cold (8-12 degrees at best, 5 degrees at dawn) and require warm layers, but most desert camps provide heavy blankets and some offer heated tents. The cold clear skies make November stargazing exceptional. Pack thermal sleepwear, warm socks, and a fleece or down jacket for early morning and evening.',
  },
  {
    question: 'What is the Marrakech International Film Festival?',
    answer: 'The FIFM (Festival International du Film de Marrakech) is one of Africa most prestigious film festivals. Founded in 2001 under royal patronage, it screens international and Moroccan films, hosts masterclasses with acclaimed directors, and attracts Hollywood and world cinema stars. Public screenings are affordable (from 50 MAD), and free outdoor screenings sometimes occur in Jemaa el-Fnaa. The festival typically falls in late November or early December. It transforms Marrakech atmosphere with red carpets, celebrity sightings, and cultural events.',
  },
  {
    question: 'What should I pack for Morocco in November?',
    answer: 'Pack warm layers: a proper jacket, sweaters, and long trousers for cool evenings and mornings. A rain jacket and compact umbrella for northern and coastal areas. Sun protection for sunny days (still strong UV). Comfortable waterproof walking shoes. For Sahara trips: thermal sleepwear, warm socks, a fleece, and a warm hat. For the Atlas: proper hiking gear if trekking, plus cold-weather layers. A versatile scarf for warmth and cultural sensitivity.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  {
    href: '/morocco-in-october',
    title: 'Morocco in October',
    description: 'The best month to visit — perfect weather and Date Festival.',
    icon: Sun,
  },
  {
    href: '/morocco-in-december',
    title: 'Morocco in December',
    description: 'Winter travel, Christmas getaway, and skiing in the Atlas.',
    icon: Snowflake,
  },
  {
    href: '/best-time-visit-morocco',
    title: 'Best Time to Visit Morocco',
    description: 'Month-by-month breakdown for planning your trip.',
    icon: Clock,
  },
  {
    href: '/morocco-budget-guide',
    title: 'Morocco Budget Guide',
    description: 'Maximize November low-season savings with budget strategies.',
    icon: Wallet,
  },
  {
    href: '/morocco-surf-guide',
    title: 'Surfing in Morocco',
    description: 'November starts the legendary Atlantic surf season.',
    icon: Waves,
  },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MoroccoInNovemberPage() {
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
            <span className="text-white">November</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wallet className="w-4 h-4" />
            Low Season Value
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco in November
            <br className="hidden md:block" /> 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Late autumn brings cooler temperatures, fewer tourists, and low-season prices. The olive harvest,
            Marrakech Film Festival, and first Atlas snow create unique experiences. Your complete guide
            to November travel.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              November: Morocco&apos;s Hidden Gem Month
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                November divides Morocco visitors into two camps: those who avoid it because of
                cooler temperatures and rain, and those who have discovered that November offers
                something the peak months cannot — an authentic, uncrowded, affordable Morocco
                where genuine connections with people and places replace the transactional tourism
                of busier seasons.
              </p>
              <p>
                The numbers tell the story. Hotels and riads drop prices 25-40 percent from peak
                rates. The Marrakech medina, often overwhelmingly crowded in peak season, becomes
                navigable and enjoyable. Artisans in Fes have time to demonstrate their crafts and
                share stories rather than rushing from one tour group to the next. Desert camps offer
                discounts and upgrades. And the atmospheric conditions — moody skies, rain-slicked
                medina streets reflecting lantern light, first snow on the Atlas peaks — create
                photography and experiences that sunny-season visitors never see.
              </p>
              <p>
                November also brings unique seasonal events. The olive harvest peaks across the
                Meknes and Fes regions, with pressing cooperatives welcoming visitors to taste the
                fresh oil. The Marrakech International Film Festival (if it falls in late November)
                transforms the Red City into a glamorous cinema hub. And the Atlantic surf season
                begins in earnest, with swells building at Taghazout and Essaouira. For travelers
                willing to pack an extra layer and carry a rain jacket, November Morocco is deeply
                rewarding.
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
            November Weather by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            November brings cooler temperatures and the start of the rainy season. Conditions vary
            dramatically by region — the south remains warm while the north gets wet.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are approximate ranges. Early November is warmer than late November.
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
            <Film className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            November Events &amp; Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the glamour of the Marrakech Film Festival to the earthiness of the olive harvest,
            November offers unique seasonal experiences.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Festival dates vary annually. Check official sources for confirmed 2026 schedules.
          </p>

          <div className="space-y-8 max-w-5xl mx-auto">
            {novemberEvents.map((event) => {
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
            Best Destinations in November
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Focus on interior cities, the Sahara, and the southern coast for the best November
            experience. Avoid the rainy north unless you embrace atmospheric conditions.
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
            What to Pack for November
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            November requires genuine warm clothing, especially for evenings. Think layers, waterproofing,
            and versatility for Morocco&apos;s variable late-autumn conditions.
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
            Budget Tips for November
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            November is one of the cheapest months to visit Morocco. Low-season pricing across
            accommodation, flights, and tours makes luxury accessible on a budget.
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
            Insider Tips for November
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Local knowledge for making the most of Morocco&apos;s quiet, atmospheric late-autumn month.
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
            Sample 9-Day November Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A route focusing on the best November destinations: Marrakech, Sahara, Fes, and the coast.
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
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 4,500-7,500 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Hostels, street food, buses, shared desert tour</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 11,000-17,000 MAD</p>
                  <p className="text-xs text-[var(--text-muted)]">Riads, restaurants, private desert camp, guided tours</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Luxury Traveler</p>
                  <p className="text-lg font-bold text-[var(--color-accent)]">From 22,000-38,000 MAD</p>
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
            Ready for November in Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Fewer tourists, lower prices, and authentic experiences await. From the olive harvest
            and Marrakech Film Festival to peaceful Sahara nights and the start of surf season,
            November Morocco rewards those who embrace the quiet season.
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
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Wallet className="w-5 h-5" />
              Budget Guide
            </Link>
            <Link
              href="/morocco-surf-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-[family-name:var(--font-heading)] font-bold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              <Waves className="w-5 h-5" />
              Surfing Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Calendar,
  Sun,
  CloudRain,
  Snowflake,
  Thermometer,
  Mountain,
  Waves,
  MapPin,
  ArrowRight,
  Info,
  CheckCircle,
  TrendingUp,
  TrendingDown,
  Star,
  Users,
  Camera,
  Compass,
  Shirt,
  Backpack,
  Lightbulb,
  Globe,
  CloudSun,
  Sparkles,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Time to Visit Morocco in 2026 | Month-by-Month Guide',
  description:
    'Discover the best time to visit Morocco in 2026. Month-by-month weather breakdown, regional climate guide, peak vs off-season pricing, festival calendar, and packing tips. Plan your perfect Morocco trip.',
  keywords: [
    'best time to visit Morocco',
    'best time to visit Morocco 2026',
    'Morocco weather by month',
    'Morocco travel seasons',
    'when to go to Morocco',
    'Morocco peak season',
    'Morocco off season',
    'Morocco shoulder season',
    'Morocco weather guide',
    'Morocco climate',
    'Morocco rainy season',
    'Morocco summer heat',
    'Morocco winter travel',
    'Morocco spring travel',
    'best month to visit Morocco',
    'Morocco festival calendar',
    'Morocco packing list',
    'Morocco regional weather',
    'Morocco desert weather',
    'Morocco beach season',
  ],
  openGraph: {
    title: 'Best Time to Visit Morocco in 2026 | Month-by-Month Guide',
    description:
      'Complete month-by-month guide to visiting Morocco. Weather data, regional climate breakdown, festival calendar, and seasonal packing tips for every type of traveler.',
    url: `${BASE_URL}/best-time-visit-morocco`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco showcasing diverse landscapes from mountains to desert, representing the best time to visit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Time to Visit Morocco in 2026 | Month-by-Month Guide',
    description:
      'Month-by-month weather, peak vs off-season pricing, festival calendar, and packing tips. Everything you need to plan your perfect Morocco trip.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/best-time-visit-morocco` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/best-time-visit-morocco`,
  name: 'Best Time to Visit Morocco in 2026 | Month-by-Month Guide',
  description:
    'Discover the best time to visit Morocco in 2026. Month-by-month weather breakdown, regional climate guide, peak vs off-season pricing, festival calendar, and packing tips.',
  url: `${BASE_URL}/best-time-visit-morocco`,
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
  datePublished: '2026-03-17',
  dateModified: '2026-03-17',
  mainEntityOfPage: `${BASE_URL}/best-time-visit-morocco`,
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
      { '@type': 'ListItem', position: 2, name: 'Best Time to Visit Morocco', item: `${BASE_URL}/best-time-visit-morocco` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best month to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months to visit Morocco are March-May (spring) and September-November (autumn). These shoulder seasons offer pleasant temperatures of 20-28 degrees Celsius, fewer crowds than peak winter months, and lower prices. October is widely considered the single best month, combining warm weather, clear skies, and the start of the cultural festival season.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco too hot in summer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inland cities like Marrakech and Fes can reach 40-48 degrees Celsius in July and August, which many travelers find uncomfortably hot. However, coastal cities like Essaouira (20-25 degrees), Agadir (25-30 degrees), and Tangier (25-30 degrees) remain pleasant in summer. The Atlantic coast benefits from cool ocean breezes. Summer is also ideal for surfing in Taghazout and beach holidays.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the rainy season in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco receives most of its rainfall between November and March, with December and January being the wettest months. However, Morocco is generally a dry country. Northern cities like Tangier and Chefchaouen receive more rain than southern destinations. The Sahara Desert remains dry year-round. Rain rarely lasts all day and should not deter visitors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you visit the Sahara Desert year-round?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Sahara Desert is best visited from October to April when daytime temperatures are comfortable (20-30 degrees) and nights are cool. June through August can see temperatures exceeding 50 degrees, making desert tours uncomfortable and potentially dangerous. March-April and October-November are the sweet spots with warm days and manageable nights.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the cheapest time to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest time to visit Morocco is June through August (excluding Ramadan), when accommodation prices in inland cities drop by 20-40%. However, coastal cities maintain higher prices during European summer holidays. The other affordable period is late January through mid-March (excluding any festival dates). Shoulder months of May and November also offer good value.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Packing depends on the season. Year-round essentials include modest clothing that covers shoulders and knees, comfortable walking shoes, sunscreen, and sunglasses. In summer, pack light breathable fabrics and a hat. In winter, bring warm layers as evenings can be cold (5-10 degrees in the mountains, 10-15 degrees in cities). Always pack a light jacket for air-conditioned spaces and desert nights.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ramadan affect travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ramadan affects daily rhythms but should not deter visitors. Many local restaurants close during daylight hours, but tourist-oriented restaurants, hotel restaurants, and international chains remain open. Experiencing iftar (the evening meal breaking the fast) is a cultural highlight. Some riads offer discounted rates during Ramadan. Be respectful by not eating or drinking conspicuously in public during fasting hours.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time for hiking in the Atlas Mountains?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best hiking months are April-June and September-October. Spring brings wildflowers and snowmelt waterfalls. Autumn offers clear skies and comfortable temperatures. Summer hiking is possible at higher elevations but hot in the valleys. Winter hiking requires proper equipment as passes above 2,500m may have snow. Mount Toubkal is best climbed June-September when snow has cleared.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: MONTH-BY-MONTH GUIDE
   ═══════════════════════════════════════════════════════════════ */

const monthlyGuide = [
  {
    month: 'January',
    season: 'Winter',
    icon: Snowflake,
    rating: 3,
    avgTemp: '8-18',
    rainfall: '30-50mm',
    crowd: 'Moderate',
    priceLevel: 'Peak (New Year) then drops',
    highlights: [
      'Skiing in Oukaimeden and Ifrane',
      'Low crowds after New Year',
      'Almond blossoms begin in Tafraoute late January',
      'Comfortable Sahara Desert temperatures',
    ],
    considerations: [
      'Cold evenings in inland cities (5-10 degrees)',
      'Mountain passes may be closed by snow',
      'Shorter daylight hours (sunset around 17:30)',
      'Rain possible in northern cities',
    ],
    bestFor: 'Desert trips, winter sports, city exploration, budget travelers (after Jan 5)',
    weatherSummary: 'Cool and pleasant during the day in Marrakech (18 degrees), cold in the mountains with snow above 2,000m. Coastal cities mild (15-17 degrees). Best month for the Sahara with clear, cool conditions.',
  },
  {
    month: 'February',
    season: 'Winter',
    icon: Snowflake,
    rating: 3,
    avgTemp: '10-20',
    rainfall: '25-45mm',
    crowd: 'Low',
    priceLevel: 'Low to Moderate',
    highlights: [
      'Almond Blossom Festival in Tafraoute',
      'Lowest prices of the year for accommodation',
      'Great weather in the Sahara (15-25 degrees)',
      'Early wildflowers in the Sous Valley',
    ],
    considerations: [
      'Rain still possible in the north',
      'Cool evenings require warm layers',
      'Some mountain trails still snowbound',
      'Ramadan may overlap (check dates)',
    ],
    bestFor: 'Budget travelers, almond blossom season, desert trips, avoiding crowds',
    weatherSummary: 'Warming slightly from January. Marrakech reaches 20 degrees during the day. The south is pleasant and dry. Northern Morocco remains cool with occasional showers. Snow lingers on Atlas peaks.',
  },
  {
    month: 'March',
    season: 'Spring',
    icon: Sun,
    rating: 4,
    avgTemp: '12-23',
    rainfall: '20-40mm',
    crowd: 'Moderate',
    priceLevel: 'Moderate',
    highlights: [
      'Spring wildflowers across the countryside',
      'Perfect temperatures for city sightseeing',
      'Great time for Atlas Mountain trekking',
      'Rose season begins in the Dades Valley',
    ],
    considerations: [
      'Occasional rain showers (carry a light jacket)',
      'Accommodation prices start rising for Easter',
      'Sandstorms possible in the south',
      'Ramadan may overlap (check dates)',
    ],
    bestFor: 'City exploration, hiking, photography, all-around travel',
    weatherSummary: 'Spring arrives with warm days (23 degrees in Marrakech) and cool evenings. Excellent hiking weather in the Atlas. The desert is comfortable but warming. Coastal cities pleasant at 17-20 degrees.',
  },
  {
    month: 'April',
    season: 'Spring',
    icon: Sun,
    rating: 5,
    avgTemp: '15-26',
    rainfall: '15-30mm',
    crowd: 'High (Easter)',
    priceLevel: 'Peak around Easter, otherwise Moderate',
    highlights: [
      'Rose Festival in Kelaat Mgouna (late April/May)',
      'Perfect weather across the country',
      'Lush green landscapes after winter rains',
      'Ideal for trekking and outdoor activities',
    ],
    considerations: [
      'Easter week brings peak crowds and prices',
      'Book accommodation well in advance for Easter',
      'Desert warming up (can reach 30+ degrees by late April)',
      'Popular with European school holidays',
    ],
    bestFor: 'Hiking, festivals, photography, general sightseeing, families',
    weatherSummary: 'One of the best months. Warm and sunny (26 degrees in Marrakech) with minimal rain. The Atlas Mountains are accessible and green. Coastal cities ideal at 19-22 degrees. Desert still comfortable.',
  },
  {
    month: 'May',
    season: 'Spring/Summer',
    icon: Sun,
    rating: 5,
    avgTemp: '18-30',
    rainfall: '5-15mm',
    crowd: 'Moderate',
    priceLevel: 'Shoulder (great value)',
    highlights: [
      'Rose harvest and festivals in the Dades Valley',
      'Gnaoua World Music Festival in Essaouira (June but prep in May)',
      'Beach season begins on the Atlantic coast',
      'Excellent value as summer prices have not started',
    ],
    considerations: [
      'Inland temperatures rising (30 degrees in Marrakech)',
      'Desert becoming hot for midday activities',
      'Book coastal accommodation as summer demand builds',
      'Ramadan may overlap (check dates)',
    ],
    bestFor: 'Best value month, coastal trips, festivals, hiking (early May), surfing',
    weatherSummary: 'Warm and dry. Marrakech hits 30 degrees, perfect for those who enjoy heat. Coastal cities delightfully comfortable at 21-24 degrees with ocean breezes. Mountains excellent for trekking before summer heat. Desert heating up.',
  },
  {
    month: 'June',
    season: 'Summer',
    icon: Thermometer,
    rating: 3,
    avgTemp: '22-35',
    rainfall: '0-5mm',
    crowd: 'Moderate to High (coast)',
    priceLevel: 'High on coast, Low inland',
    highlights: [
      'Gnaoua World Music Festival in Essaouira',
      'Beach season in full swing',
      'Inland accommodation prices drop significantly',
      'Long daylight hours (sunset after 20:00)',
    ],
    considerations: [
      'Marrakech and Fes reach 35-40 degrees',
      'Desert tours uncomfortable (45+ degrees)',
      'Stay near the coast or at altitude',
      'Air conditioning essential for inland hotels',
    ],
    bestFor: 'Beach holidays, Essaouira, surfing, Tangier, mountain retreats',
    weatherSummary: 'Hot inland, pleasant on the coast. Essaouira stays cool at 20-24 degrees with Atlantic breezes. Marrakech scorches at 35-40 degrees. Atlas Mountains offer refuge at altitude. Desert is off-limits for most travelers.',
  },
  {
    month: 'July',
    season: 'Summer',
    icon: Thermometer,
    rating: 2,
    avgTemp: '25-40',
    rainfall: '0mm',
    crowd: 'High (European holidays)',
    priceLevel: 'High on coast, Low inland',
    highlights: [
      'Festival of World Sacred Music in Fes (sometimes June)',
      'Excellent surfing conditions in Taghazout',
      'Best time for Essaouira wind and kitesurfing',
      'Major discounts on inland accommodation',
    ],
    considerations: [
      'Extreme heat in Marrakech and Fes (40-48 degrees)',
      'Sahara impossible for most travelers',
      'Coastal areas packed with Moroccan and European vacationers',
      'Ramadan may overlap (check dates)',
    ],
    bestFor: 'Coastal towns only (Essaouira, Agadir, Tangier), surfing, kitesurfing',
    weatherSummary: 'Peak heat. Marrakech regularly hits 42-48 degrees. Fes similarly brutal. The coast is the only comfortable option: Essaouira at 20-25 degrees, Agadir at 25-28 degrees. Mountains warm but bearable at higher elevations.',
  },
  {
    month: 'August',
    season: 'Summer',
    icon: Thermometer,
    rating: 2,
    avgTemp: '25-40',
    rainfall: '0mm',
    crowd: 'High (European holidays)',
    priceLevel: 'High on coast, Low inland',
    highlights: [
      'Moussem festivals across the country',
      'Surfing season continues strong',
      'Deepest discounts on inland accommodation',
      'Longer stays in mountain villages',
    ],
    considerations: [
      'Hottest month inland (Marrakech 45+ degrees)',
      'Sahara Desert trips not recommended',
      'Beaches very crowded on weekends',
      'Many Moroccans vacation domestically, filling coastal hotels',
    ],
    bestFor: 'Coastal retreats, mountain villages, surfing, budget inland travel',
    weatherSummary: 'Similar to July but potentially hotter inland. Marrakech and Fes are at their most extreme. Coastal cities remain the refuge, though crowded. The Atlas Mountains at 1,500m+ are manageable for trekking.',
  },
  {
    month: 'September',
    season: 'Autumn',
    icon: CloudSun,
    rating: 4,
    avgTemp: '20-33',
    rainfall: '5-15mm',
    crowd: 'Moderate',
    priceLevel: 'Shoulder (great value)',
    highlights: [
      'Heat starts to break inland',
      'Excellent value before peak season pricing',
      'Date harvest in the Draa Valley',
      'Surfing season continues in Taghazout',
    ],
    considerations: [
      'Early September still hot in Marrakech (33-38 degrees)',
      'Desert tours return by late September',
      'First rains possible in the north',
      'Some summer-only coastal businesses wind down',
    ],
    bestFor: 'Great value, returning to inland cities, late-season surfing, date harvest',
    weatherSummary: 'Transitional month. Early September is still hot inland but temperatures drop noticeably by month end. Marrakech goes from 38 to 30 degrees. Coast remains pleasant at 22-26 degrees. Desert tours resume late in the month.',
  },
  {
    month: 'October',
    season: 'Autumn',
    icon: Sun,
    rating: 5,
    avgTemp: '16-28',
    rainfall: '15-30mm',
    crowd: 'High',
    priceLevel: 'Peak season begins',
    highlights: [
      'Widely considered the best month to visit',
      'Perfect temperatures for every activity',
      'Sahara Desert tours in ideal conditions',
      'Date Festival in Erfoud',
    ],
    considerations: [
      'Peak season pricing starts for accommodation',
      'Popular with European autumn break travelers',
      'Book desert tours and riads in advance',
      'Occasional rain showers in the north',
    ],
    bestFor: 'Everything: desert, hiking, cities, coast, festivals, photography',
    weatherSummary: 'Near-perfect conditions nationwide. Marrakech at 25-28 degrees, Fes at 22-25 degrees, coast at 20-24 degrees, desert at 25-30 degrees during the day. Clear skies, comfortable nights. The gold standard month for Morocco travel.',
  },
  {
    month: 'November',
    season: 'Autumn',
    icon: CloudRain,
    rating: 4,
    avgTemp: '12-22',
    rainfall: '25-50mm',
    crowd: 'Moderate to High',
    priceLevel: 'Peak season',
    highlights: [
      'Olive harvest across the country',
      'Marrakech International Film Festival',
      'Still excellent for desert trips',
      'Fewer crowds than October at similar prices',
    ],
    considerations: [
      'Rain becomes more frequent, especially in the north',
      'Evenings getting cool (need warm layers)',
      'Shorter days (sunset around 17:30)',
      'Mountain trekking season ending at high altitude',
    ],
    bestFor: 'Desert trips, city exploration, cultural events, olive harvest experiences',
    weatherSummary: 'Cooling down but still pleasant. Marrakech at 20-22 degrees, perfect for sightseeing. Northern Morocco wetter. Desert conditions excellent with cool nights. Atlas Mountains starting to get cold at altitude.',
  },
  {
    month: 'December',
    season: 'Winter',
    icon: Snowflake,
    rating: 3,
    avgTemp: '8-18',
    rainfall: '30-55mm',
    crowd: 'High (Christmas/New Year)',
    priceLevel: 'Peak (very high Christmas week)',
    highlights: [
      'Festive atmosphere in tourist areas',
      'Skiing season begins in Oukaimeden',
      'New Year celebrations in Marrakech',
      'Comfortable Sahara conditions',
    ],
    considerations: [
      'Christmas/New Year is the most expensive period',
      'Book 3-4 months ahead for holiday dates',
      'Cold evenings (warm layers essential)',
      'Rain possible in the north and west',
    ],
    bestFor: 'Holiday getaway, winter sun, desert trips, skiing, festive atmosphere',
    weatherSummary: 'Cool and brisk. Marrakech at 16-18 degrees during the day, dropping to 6-8 degrees at night. Atlas peaks snow-capped. Coast mild at 14-17 degrees. Desert pleasant during the day (20-22 degrees), cold at night (5-8 degrees).',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: REGIONAL WEATHER
   ═══════════════════════════════════════════════════════════════ */

const regionalWeather = [
  {
    region: 'Marrakech & Interior',
    icon: Sun,
    cities: 'Marrakech, Fes, Meknes, Beni Mellal',
    climate: 'Semi-arid continental',
    summer: '35-48 degrees. Extremely hot June-August. Dry heat.',
    winter: '8-20 degrees. Cool days, cold nights. Occasional rain.',
    bestMonths: 'March-May, October-November',
    note: 'Inland cities experience the most extreme temperature swings. Summer sightseeing is best done early morning and late afternoon with a long midday break.',
  },
  {
    region: 'Atlantic Coast',
    icon: Waves,
    cities: 'Essaouira, Agadir, El Jadida, Oualidia',
    climate: 'Mediterranean oceanic',
    summer: '20-28 degrees. Ocean breezes keep temperatures comfortable. Essaouira notably cooler and windier.',
    winter: '12-18 degrees. Mild and pleasant. Some rain.',
    bestMonths: 'June-September (beach), Year-round (Agadir)',
    note: 'The Atlantic coast is Morocco\'s great temperature regulator. Essaouira rarely exceeds 25 degrees even in August, making it a summer refuge.',
  },
  {
    region: 'Mediterranean North',
    icon: CloudRain,
    cities: 'Tangier, Tetouan, Chefchaouen, Al Hoceima',
    climate: 'Mediterranean',
    summer: '25-32 degrees. Warm and mostly dry. Popular beach season.',
    winter: '8-16 degrees. Wettest region in Morocco. Green and lush.',
    bestMonths: 'May-June, September-October',
    note: 'The Rif Mountains behind these cities trap moisture, making this Morocco\'s greenest and wettest region. Chefchaouen is photogenic year-round but best in spring and autumn.',
  },
  {
    region: 'Atlas Mountains',
    icon: Mountain,
    cities: 'Imlil, Oukaimeden, Ifrane, Azrou, Demnate',
    climate: 'Mountain / Alpine',
    summer: '20-30 degrees at 1,500m. Cooler at higher altitudes. Excellent hiking.',
    winter: '0-10 degrees at 1,500m. Snow above 2,000m. Ski season.',
    bestMonths: 'April-June, September-October (trekking)',
    note: 'Temperature drops roughly 6 degrees for every 1,000m of elevation gain. Ifrane regularly records the coldest temperatures in Africa. Oukaimeden offers Africa\'s highest ski resort.',
  },
  {
    region: 'Sahara Desert & Southeast',
    icon: Thermometer,
    cities: 'Merzouga, Zagora, Ouarzazate, Errachidia, Tinghir',
    climate: 'Hot desert (BWh)',
    summer: '40-50+ degrees. Dangerous heat. Not recommended June-August.',
    winter: '5-22 degrees. Cool days, very cold nights (near freezing).',
    bestMonths: 'October-April (avoid mid-summer)',
    note: 'The Sahara has the most extreme conditions. Desert camps are best enjoyed October-April. Merzouga and Erg Chebbi are spectacular at sunrise and sunset year-round, but midday summer heat can be lethal.',
  },
  {
    region: 'Souss-Massa & Anti-Atlas',
    icon: Sun,
    cities: 'Agadir, Taroudant, Tiznit, Tafraoute, Sidi Ifni',
    climate: 'Semi-arid to arid',
    summer: '25-35 degrees. Hot but drier than the north. Ocean influence in Agadir.',
    winter: '12-22 degrees. Warm and dry. Morocco\'s winter sun destination.',
    bestMonths: 'October-May (almost year-round)',
    note: 'This region offers some of Morocco\'s most consistent weather. Agadir gets over 300 days of sunshine per year. Tafraoute in the Anti-Atlas is spectacular in February for almond blossoms.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME BY ACTIVITY
   ═══════════════════════════════════════════════════════════════ */

const activitySeasons = [
  {
    activity: 'Sahara Desert Tour',
    icon: Compass,
    bestMonths: 'October - April',
    peakMonth: 'October / March',
    avoid: 'June - August (extreme heat)',
    description: 'Daytime temperatures of 20-30 degrees make desert camping and camel trekking enjoyable. Nights are cool but manageable with blankets provided at camps. Sunrise and sunset over the dunes are magical in the clear autumn and spring air.',
    priceNote: 'Desert tour prices are stable year-round as most operators do not run summer tours. Book 1-2 weeks ahead in peak season.',
  },
  {
    activity: 'Hiking & Trekking (Atlas Mountains)',
    icon: Mountain,
    bestMonths: 'April - June, September - October',
    peakMonth: 'May / October',
    avoid: 'December - February (snow at altitude)',
    description: 'Spring brings wildflowers and waterfalls from snowmelt. Autumn offers clear skies and stable weather. Mount Toubkal (4,167m) is best climbed June-September when the summit is snow-free. Lower altitude hikes like the Ourika Valley are accessible year-round.',
    priceNote: 'Mountain guides charge standard rates year-round. Mule hire from 300 MAD per day. Refuge stays from 150 MAD per night.',
  },
  {
    activity: 'Beach & Swimming',
    icon: Waves,
    bestMonths: 'June - September',
    peakMonth: 'July / August',
    avoid: 'December - February (cold water)',
    description: 'Atlantic water temperatures range from 17 degrees in winter to 22 degrees in summer. Agadir and Sidi Ifni have the warmest water. Essaouira is windy and cool even in summer (great for wind sports, less ideal for sunbathing). Mediterranean beaches near Al Hoceima are warmest.',
    priceNote: 'Coastal accommodation peaks in July-August. Book from 500 MAD per night for a decent beachfront hotel in Agadir during summer.',
  },
  {
    activity: 'Surfing',
    icon: Waves,
    bestMonths: 'September - April (main swell)',
    peakMonth: 'December / January',
    avoid: 'No bad month (year-round)',
    description: 'Morocco is a world-class surf destination. Winter brings the biggest Atlantic swells to Taghazout, Imsouane, and Sidi Kaouki. Summer has smaller, cleaner waves ideal for beginners. Essaouira offers consistent wind for kitesurfing year-round.',
    priceNote: 'Surf camp packages from 2,500 MAD per week including lessons, board rental, and accommodation. Winter is peak surf season with higher rates.',
  },
  {
    activity: 'City Sightseeing',
    icon: MapPin,
    bestMonths: 'March - May, October - November',
    peakMonth: 'April / October',
    avoid: 'July - August (extreme heat inland)',
    description: 'Exploring the medinas of Marrakech, Fes, and Meknes is best when temperatures are comfortable (18-28 degrees). Walking the narrow streets and alleys in 45-degree heat is exhausting and potentially dangerous. Spring and autumn allow all-day exploration.',
    priceNote: 'Riad prices in Marrakech range from 400 MAD (low season) to 1,500+ MAD (Christmas/Easter). October averages from 600-800 MAD for a mid-range riad.',
  },
  {
    activity: 'Photography',
    icon: Camera,
    bestMonths: 'October - November, March - April',
    peakMonth: 'October',
    avoid: 'Summer haze inland',
    description: 'Golden-hour light in Morocco is spectacular in autumn and spring. Clear skies, warm tones on sandstone architecture, and comfortable temperatures for carrying equipment. The Sahara at sunrise in October is every photographer\'s dream.',
    priceNote: 'Photography tours from 800 MAD per day with a local guide who knows the best angles and timing.',
  },
  {
    activity: 'Cultural Festivals',
    icon: Star,
    bestMonths: 'May - July, October - December',
    peakMonth: 'June (Gnaoua Festival)',
    avoid: 'No bad month (festivals year-round)',
    description: 'Morocco has a rich festival calendar. The Gnaoua Festival (Essaouira, June) and Fes Festival of World Sacred Music (June) are the biggest. The Rose Festival (May), Date Festival (October), and Marrakech International Film Festival (November/December) are also highlights.',
    priceNote: 'Festival periods see accommodation prices spike 50-100% in the host city. Book 2-3 months ahead.',
  },
  {
    activity: 'Skiing & Winter Sports',
    icon: Snowflake,
    bestMonths: 'December - March',
    peakMonth: 'January / February',
    avoid: 'May - October (no snow)',
    description: 'Oukaimeden (75km from Marrakech) is Africa\'s most accessible ski resort at 2,600m. Ifrane and Michlifen in the Middle Atlas also offer skiing. Conditions vary year to year. Equipment rental available on-site.',
    priceNote: 'Ski pass from 150 MAD per day. Equipment rental from 200 MAD per day. Combine with a Marrakech city break for a unique experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PEAK VS SHOULDER VS OFF-SEASON
   ═══════════════════════════════════════════════════════════════ */

const seasonComparison = [
  {
    season: 'Peak Season',
    months: 'October - December, March - April (+ Christmas/Easter)',
    icon: TrendingUp,
    color: 'var(--color-accent)',
    weather: 'Ideal: 18-28 degrees in most regions',
    crowds: 'High, especially in Marrakech and Fes',
    prices: '+20-40% on accommodation, tours sell out',
    pros: [
      'Best weather for sightseeing and desert trips',
      'All attractions and tours fully operational',
      'Festival and cultural events calendar packed',
      'Comfortable for all types of activities',
    ],
    cons: [
      'Higher accommodation and flight prices',
      'Popular riads book out 2-3 months ahead',
      'Busier medinas and tourist attractions',
      'Desert camps fully booked on weekends',
    ],
    budgetTip: 'Book riads directly for 10-20% less than Booking.com. Visit lesser-known cities like Meknes, Tetouan, or Taroudant for peak-season weather at off-season prices.',
  },
  {
    season: 'Shoulder Season',
    months: 'May, September, November',
    icon: CloudSun,
    color: 'var(--color-gold)',
    weather: 'Warm: 22-33 degrees, transitional',
    crowds: 'Moderate, manageable everywhere',
    prices: 'Standard pricing, good availability',
    pros: [
      'Best value: good weather at lower prices',
      'Fewer crowds at major attractions',
      'Easier to find last-minute accommodation',
      'May and September have long daylight hours',
    ],
    cons: [
      'May can be hot inland, September still warm',
      'November brings increasing rain in the north',
      'Some seasonal tours not yet running or winding down',
      'Less festival activity than peak season',
    ],
    budgetTip: 'May is arguably the single best value month in Morocco. Great weather, low prices, and manageable crowds. September offers similar value as summer winds down.',
  },
  {
    season: 'Off-Season',
    months: 'June - August, January - February',
    icon: TrendingDown,
    color: 'var(--color-accent)',
    weather: 'Summer: 35-48 degrees inland / Winter: 8-18 degrees',
    crowds: 'Low inland, High on coast (summer)',
    prices: '-20-40% inland, variable on coast',
    pros: [
      'Biggest discounts on inland accommodation',
      'Authentic local experience (fewer tourists)',
      'Coastal cities pleasant in summer',
      'Winter sun in Agadir and the south',
    ],
    cons: [
      'Summer heat makes inland cities difficult',
      'Sahara tours limited or suspended in summer',
      'Winter evenings cold, especially in mountains',
      'Some restaurants/tours reduce hours or close',
    ],
    budgetTip: 'Combine an inland city visit (at rock-bottom prices) with a coastal stay for the best of both worlds. Fly into Marrakech, spend 2 days, then head to Essaouira for the coast.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FESTIVAL CALENDAR
   ═══════════════════════════════════════════════════════════════ */

const festivalCalendar = [
  { month: 'January', festival: 'Marrakech Marathon', location: 'Marrakech', type: 'Sports', description: 'International marathon through the streets and outskirts of Marrakech. Attracts thousands of runners worldwide.' },
  { month: 'February', festival: 'Almond Blossom Festival', location: 'Tafraoute', type: 'Cultural', description: 'Celebration of the almond harvest with traditional music, dance, and local products in the stunning Anti-Atlas.' },
  { month: 'March', festival: 'International Nomads Festival', location: 'M\'hamid El Ghizlane', type: 'Cultural', description: 'Celebration of nomadic Saharan culture with music, poetry, camel races, and traditional crafts at the edge of the desert.' },
  { month: 'April', festival: 'Jazz au Chellah', location: 'Rabat', type: 'Music', description: 'International jazz festival held in the atmospheric ruins of the ancient Chellah necropolis in Morocco\'s capital.' },
  { month: 'May', festival: 'Rose Festival (Moussem des Roses)', location: 'Kelaat M\'gouna', type: 'Cultural', description: 'Celebrates the rose harvest in the Valley of Roses. Parades, music, and the crowning of a Rose Queen. The valley turns pink with Damask roses.' },
  { month: 'June', festival: 'Gnaoua World Music Festival', location: 'Essaouira', type: 'Music', description: 'Morocco\'s premier music festival. Four days of Gnaoua spiritual music, jazz, blues, and world music. Free outdoor concerts throughout the medina.' },
  { month: 'June', festival: 'Fes Festival of World Sacred Music', location: 'Fes', type: 'Music', description: 'World-renowned festival bringing together sacred music traditions from across the globe. Concerts in historic venues including Bab Al Makina.' },
  { month: 'July', festival: 'Festival Timitar', location: 'Agadir', type: 'Music', description: 'Celebrates Amazigh (Berber) culture through music, featuring both traditional and contemporary artists. Free outdoor concerts.' },
  { month: 'August', festival: 'Moussem of Moulay Abdellah', location: 'El Jadida', type: 'Religious', description: 'Traditional moussem (pilgrimage festival) with equestrian fantasia displays, traditional music, and religious ceremonies.' },
  { month: 'September', festival: 'Tanjazz Festival', location: 'Tangier', type: 'Music', description: 'International jazz festival in the cosmopolitan city of Tangier. Concerts in venues across the city with Mediterranean backdrop.' },
  { month: 'October', festival: 'Date Festival (Moussem des Dattes)', location: 'Erfoud', type: 'Cultural', description: 'Celebration of the date harvest in the Tafilalet oasis. Traditional music, dance, and camel races. Perfectly timed with ideal Sahara weather.' },
  { month: 'November', festival: 'Marrakech International Film Festival', location: 'Marrakech', type: 'Film', description: 'Star-studded film festival attracting international directors and actors. Screenings in Jemaa el-Fna and the Palais des Congres.' },
  { month: 'December', festival: 'New Year Celebrations', location: 'Marrakech, Tangier', type: 'Cultural', description: 'Major tourist cities host New Year celebrations with special events, dinners, and parties. Marrakech\'s Jemaa el-Fna is the focal point.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING TIPS BY SEASON
   ═══════════════════════════════════════════════════════════════ */

const packingGuide = [
  {
    season: 'Spring (March - May)',
    icon: Sun,
    essentials: [
      'Light layers (temperatures fluctuate 15-30 degrees)',
      'Comfortable walking shoes (broken-in, medina-ready)',
      'Light rain jacket or packable windbreaker',
      'Sunscreen SPF 50+ and sunglasses',
      'Modest clothing covering shoulders and knees',
      'Light scarf or shawl (sun protection and mosque visits)',
      'Hat or cap for sun protection',
    ],
    extras: [
      'Hiking boots if visiting the Atlas Mountains',
      'Swimsuit for riad pools and hammams',
      'Light fleece for cool mountain evenings',
    ],
  },
  {
    season: 'Summer (June - August)',
    icon: Thermometer,
    essentials: [
      'Lightweight, breathable, loose-fitting clothing',
      'Wide-brimmed hat (essential for sun protection)',
      'High-SPF sunscreen and after-sun lotion',
      'Refillable water bottle (stay hydrated)',
      'Light cotton scarves (versatile: sun cover, modesty, dust)',
      'Comfortable sandals and breathable walking shoes',
      'Moisture-wicking fabrics (avoid synthetic in heat)',
    ],
    extras: [
      'Portable fan or cooling towel for inland cities',
      'Electrolyte packets for dehydration prevention',
      'Swimsuit and rash guard for surfing',
    ],
  },
  {
    season: 'Autumn (September - November)',
    icon: CloudSun,
    essentials: [
      'Mix of light and medium-weight layers',
      'Comfortable closed-toe walking shoes',
      'Light jacket or cardigan for evenings',
      'Sunscreen and sunglasses (still sunny)',
      'Modest clothing for cultural sites',
      'Small daypack for excursions',
      'Rain jacket (especially November)',
    ],
    extras: [
      'Warm layer for desert nights (temperatures drop to 10 degrees)',
      'Camera gear (October light is phenomenal)',
      'Binoculars for birdwatching season',
    ],
  },
  {
    season: 'Winter (December - February)',
    icon: Snowflake,
    essentials: [
      'Warm layers (fleece, sweater, light down jacket)',
      'Warm closed-toe shoes or boots',
      'Waterproof outer layer for rain',
      'Scarf, hat, and gloves (essential for mountains and desert nights)',
      'Warm pajamas (many riads have limited heating)',
      'Thermal base layer for mountain excursions',
      'Umbrella (compact, travel-sized)',
    ],
    extras: [
      'Ski gear if visiting Oukaimeden (rentals available)',
      'Hand warmers for cold desert nights',
      'Hot water bottle (some riads provide them)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQS
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'What is the best month to visit Morocco?',
    answer: 'The best months to visit Morocco are March-May (spring) and September-November (autumn). These shoulder seasons offer pleasant temperatures of 20-28 degrees, fewer crowds than peak winter months, and lower prices. October is widely considered the single best month, combining warm weather, clear skies, and the start of the cultural festival season.',
  },
  {
    question: 'Is Morocco too hot in summer?',
    answer: 'Inland cities like Marrakech and Fes can reach 40-48 degrees in July and August, which many travelers find uncomfortably hot. However, coastal cities like Essaouira (20-25 degrees), Agadir (25-30 degrees), and Tangier (25-30 degrees) remain pleasant. The Atlantic coast benefits from cool ocean breezes. Summer is ideal for beach holidays and surfing.',
  },
  {
    question: 'What is the rainy season in Morocco?',
    answer: 'Morocco receives most of its rainfall between November and March, with December and January being the wettest months. However, Morocco is generally a dry country. Northern cities like Tangier and Chefchaouen receive more rain than southern destinations. The Sahara Desert remains dry year-round. Rain rarely lasts all day and should not deter visitors.',
  },
  {
    question: 'Can you visit the Sahara Desert year-round?',
    answer: 'The Sahara Desert is best visited from October to April when daytime temperatures are comfortable (20-30 degrees) and nights are cool. June through August can see temperatures exceeding 50 degrees, making desert tours uncomfortable and potentially dangerous. March-April and October-November are the sweet spots with warm days and manageable nights.',
  },
  {
    question: 'When is the cheapest time to visit Morocco?',
    answer: 'The cheapest time to visit Morocco is June through August (excluding Ramadan), when accommodation prices in inland cities drop by 20-40%. However, coastal cities maintain higher prices during European summer holidays. The other affordable period is late January through mid-March. Shoulder months of May and November also offer good value with better weather.',
  },
  {
    question: 'What should I pack for Morocco?',
    answer: 'Packing depends on the season and region. Year-round essentials include modest clothing covering shoulders and knees, comfortable walking shoes, sunscreen, and sunglasses. Summer requires light breathable fabrics and a hat. Winter requires warm layers as evenings can drop to 5-10 degrees in the mountains and 10-15 degrees in cities. Always carry a light jacket for air-conditioned spaces and desert nights.',
  },
  {
    question: 'Does Ramadan affect travel in Morocco?',
    answer: 'Ramadan affects daily rhythms but should not deter visitors. Many local restaurants close during daylight hours, but tourist-oriented restaurants, hotel restaurants, and international chains remain open. Experiencing iftar (the evening meal breaking the fast) is a cultural highlight. Some riads offer discounted rates during Ramadan. Be respectful by not eating or drinking conspicuously in public during fasting hours.',
  },
  {
    question: 'When is the best time for hiking in the Atlas Mountains?',
    answer: 'The best hiking months are April-June and September-October. Spring brings wildflowers and snowmelt waterfalls. Autumn offers clear skies and comfortable temperatures. Summer hiking is possible at higher elevations but hot in the valleys. Winter hiking requires proper equipment as passes above 2,500m may have snow. Mount Toubkal is best climbed June-September.',
  },
  {
    question: 'Is Morocco cold in winter?',
    answer: 'Morocco can be surprisingly cold in winter. Marrakech drops to 6-8 degrees at night in December-January. Fes is colder still. Mountain towns like Ifrane regularly see below-zero temperatures. Many traditional riads have limited central heating. Bring warm layers and expect cool interiors. The south (Agadir, Taroudant) is warmer, earning it the nickname "Morocco\'s winter sun."',
  },
  {
    question: 'What is the best time to visit Chefchaouen?',
    answer: 'Chefchaouen is best visited in April-May or September-October when temperatures are comfortable (18-25 degrees) and the blue streets photograph beautifully in clear light. Summer can be warm (30+ degrees) but manageable due to the elevation (600m). Winter is cool and rainy. The town is least crowded on weekdays outside school holidays.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/morocco-weather-monthly',
    icon: CloudRain,
    title: 'Morocco Weather by Month',
    description: 'Detailed weather data for every region including temperature charts, rainfall averages, and sunshine hours.',
  },
  {
    href: '/morocco-trip-cost',
    icon: TrendingUp,
    title: 'Morocco Trip Cost Guide',
    description: 'Complete budget breakdown from backpacker to luxury. Real 2026 prices for flights, hotels, food, and activities.',
  },
  {
    href: '/first-time',
    icon: Globe,
    title: 'First Time in Morocco',
    description: 'Essential tips for first-time visitors. What to expect, cultural norms, safety advice, and common mistakes to avoid.',
  },
  {
    href: '/packing',
    icon: Backpack,
    title: 'Morocco Packing List',
    description: 'Complete packing guide by season and activity. What to wear, what to leave behind, and gear recommendations.',
  },
  {
    href: '/what-to-wear-in-morocco',
    icon: Shirt,
    title: 'What to Wear in Morocco',
    description: 'Dress code guide for every situation: medinas, mosques, desert, beach, mountains, and nightlife.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function BestTimeVisitMoroccoPage() {
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

      {/* ── Hero Section ── */}
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
            <span className="text-white">Best Time to Visit Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Calendar className="w-4 h-4" />
            Seasonal Travel Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Time to Visit
            <br className="hidden md:block" /> Morocco in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Month-by-month weather, regional climate guide, festival calendar,
            and seasonal tips to plan your perfect Moroccan adventure.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              When Should You Visit Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is a year-round destination, but the timing of your visit dramatically affects
                your experience. The difference between visiting Marrakech in October (a pleasant 26
                degrees) and August (a scorching 45 degrees) is the difference between an unforgettable
                trip and an endurance test.
              </p>
              <p>
                The short answer: <strong>October and April are the best months</strong> to visit
                Morocco. But the real answer depends on what you want to do, where you want to go, and
                how much you want to spend. A surfer chasing winter swells in Taghazout has different
                needs than a family exploring the medina in Fes.
              </p>
              <p>
                This guide breaks down every month, every region, and every activity so you can find
                your perfect window. We cover weather patterns, crowd levels, pricing trends, festival
                dates, and packing advice for each season.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Season Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Season Overview at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Understanding Morocco&apos;s three travel seasons helps you choose the right time and budget for your trip.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices, crowds, and weather vary significantly by region. Coastal and inland Morocco can feel like different countries.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seasonComparison.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <SeasonIcon className="w-5 h-5" style={{ color: season.color }} />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--color-accent)] font-semibold mb-1">{season.months}</p>
                  <div className="space-y-2 mb-5 text-sm">
                    <div className="flex items-start gap-2">
                      <Thermometer className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--text-muted)]" />
                      <span className="text-[var(--text-secondary)]">{season.weather}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--text-muted)]" />
                      <span className="text-[var(--text-secondary)]">{season.crowds}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingUp className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--text-muted)]" />
                      <span className="text-[var(--text-secondary)]">{season.prices}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-2">Advantages:</p>
                    <ul className="space-y-1.5">
                      {season.pros.slice(0, 3).map((pro, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-[var(--border-primary)] pt-4">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <Lightbulb className="w-3 h-3 inline mr-1 text-[var(--color-gold)]" />
                      {season.budgetTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Month-by-Month Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Month-by-Month Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Every month in Morocco has its own character. Here is what to expect each month, from weather and crowds to festivals and activities.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Ratings are out of 5 stars for overall travel conditions. Temperatures are in Celsius and represent averages across regions.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {monthlyGuide.map((month) => {
              const MonthIcon = month.icon;
              return (
                <div key={month.month} className="card-moroccan p-6 md:p-8" id={month.month.toLowerCase()}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                        <MonthIcon className="w-6 h-6 text-[var(--color-accent)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {month.month}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)]">{month.season}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < month.rating ? 'text-[var(--color-gold)] fill-[var(--color-gold)]' : 'text-gray-200'}`}
                          />
                        ))}
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-medium">
                        <Thermometer className="w-3 h-3" />
                        {month.avgTemp} degrees
                      </div>
                      <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 text-blue-600 text-xs font-medium">
                        <CloudRain className="w-3 h-3" />
                        {month.rainfall}
                      </div>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                    {month.weatherSummary}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                      <p className="text-xs text-[var(--text-muted)] mb-1">Crowds</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{month.crowd}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                      <p className="text-xs text-[var(--text-muted)] mb-1">Price Level</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{month.priceLevel}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                      <p className="text-xs text-[var(--text-muted)] mb-1">Best For</p>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{month.bestFor}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                        Highlights
                      </p>
                      <ul className="space-y-1.5">
                        {month.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-1">
                        <Info className="w-3.5 h-3.5 text-blue-500" />
                        Things to Consider
                      </p>
                      <ul className="space-y-1.5">
                        {month.considerations.map((consideration, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <Info className="w-3 h-3 mt-0.5 shrink-0 text-blue-400" />
                            {consideration}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Regional Weather Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Regional Weather Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco spans from Mediterranean coastline to Sahara Desert. Each region has its own distinct climate personality.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Temperatures are approximate averages. Microclimates exist, especially in mountain valleys and coastal areas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regionalWeather.map((region) => {
              const RegionIcon = region.icon;
              return (
                <div key={region.region} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <RegionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {region.region}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{region.climate}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-3">{region.cities}</p>
                  <div className="space-y-2 mb-4">
                    <div className="bg-[var(--surface-muted)] p-2 rounded">
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">
                        <Sun className="w-3 h-3 inline mr-1" />
                        Summer
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">{region.summer}</p>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-2 rounded">
                      <p className="text-xs text-[var(--text-muted)] mb-0.5">
                        <Snowflake className="w-3 h-3 inline mr-1" />
                        Winter
                      </p>
                      <p className="text-xs text-[var(--text-secondary)]">{region.winter}</p>
                    </div>
                  </div>
                  <div className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-3">
                    Best: {region.bestMonths}
                  </div>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed">{region.note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time by Activity ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time for Each Activity
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What you plan to do in Morocco matters more than broad season generalizations. Here is when to go for each major activity.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Combining activities? October and April let you do almost everything in a single trip.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {activitySeasons.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.activity} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.activity}
                      </h3>
                      <div className="flex items-center flex-wrap gap-2 mt-1">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700">
                          <CheckCircle className="w-3 h-3" />
                          Best: {activity.bestMonths}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                          <Star className="w-3 h-3" />
                          Peak: {activity.peakMonth}
                        </span>
                        {activity.avoid !== 'No bad month (year-round)' && activity.avoid !== 'No bad month (festivals year-round)' && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-medium bg-red-50 text-red-600">
                            Avoid: {activity.avoid}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    {activity.description}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    <Info className="w-3 h-3 inline mr-1" />
                    {activity.priceNote}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Festival Calendar ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Festival &amp; Events Calendar
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco hosts festivals year-round, from world-renowned music events to intimate local celebrations. Timing your visit around a festival adds a memorable dimension.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Festival dates shift annually. Check official websites for confirmed 2026 dates. Islamic holidays follow the lunar calendar and move each year.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Month</div>
                <div className="p-3 px-4">Festival</div>
                <div className="p-3 px-4">Location</div>
                <div className="p-3 px-4">Type</div>
                <div className="p-3 px-4">Description</div>
              </div>
              {festivalCalendar.map((item, i) => (
                <div
                  key={item.festival}
                  className={`grid grid-cols-5 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.month}</div>
                  <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{item.festival}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.location}</div>
                  <div className="p-3 px-4">
                    <span className="inline-block px-1.5 py-0.5 rounded text-xs bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {item.type}
                    </span>
                  </div>
                  <div className="p-3 px-4 text-[var(--text-muted)] text-xs">{item.description}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="card-moroccan p-6 bg-white">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Ramadan in Morocco
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                    Ramadan follows the Islamic lunar calendar and shifts approximately 10-11 days earlier each year.
                    In 2026, Ramadan is expected to fall approximately in <strong>February-March</strong> (check
                    confirmed dates closer to the time).
                  </p>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    During Ramadan, the rhythm of daily life changes. Many local restaurants and cafes close during
                    daylight fasting hours. However, tourist restaurants, hotel restaurants, and international chains
                    remain open. Evenings come alive with iftar celebrations.
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[var(--text-primary)] mb-2">Tips for Visiting During Ramadan:</p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      Be respectful: avoid eating, drinking, or smoking in public during fasting hours
                    </li>
                    <li className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      Experience iftar (the evening fast-breaking meal) for a cultural highlight
                    </li>
                    <li className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      Some riads and hotels offer Ramadan discounts of 10-20%
                    </li>
                    <li className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      Medinas are quieter during the day but vibrant at night
                    </li>
                    <li className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                      <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                      Carry water and snacks for daytime when exploring remote areas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing Tips by Season ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Pack by Season
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Packing for Morocco requires thinking about both the weather and cultural norms. Here is what to bring each season.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Morocco is a Muslim country. Modest clothing (covering shoulders and knees) is appreciated everywhere and required at religious sites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {packingGuide.map((season) => {
              const PackIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center">
                      <PackIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-2">Essentials:</p>
                    <ul className="space-y-1.5">
                      {season.essentials.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t border-[var(--border-primary)] pt-3">
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-2">Nice to Have:</p>
                    <ul className="space-y-1.5">
                      {season.extras.map((item, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                          <Sparkles className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-5xl mx-auto mt-8">
            <div className="card-moroccan p-6 bg-[var(--surface-muted)]">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lightbulb className="w-5 h-5 inline mr-2 text-[var(--color-gold)]" />
                Year-Round Packing Essentials
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Footwear</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Broken-in walking shoes</p>
                  <p className="text-xs text-[var(--text-muted)]">Medina cobblestones are uneven. Skip the new shoes.</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Sun Protection</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">SPF 50+, sunglasses, hat</p>
                  <p className="text-xs text-[var(--text-muted)]">Morocco sun is intense even in winter months.</p>
                </div>
                <div className="p-3 bg-white rounded-lg">
                  <p className="text-xs text-[var(--text-muted)] mb-1">Versatile Layer</p>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">Light scarf or shawl</p>
                  <p className="text-xs text-[var(--text-muted)]">Sun cover, modesty layer, dust shield, and warmth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Planning Your Morocco Trip
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-3">
                    {guide.description}
                  </p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-sahara-sunrise.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Plan Your Morocco Trip?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Now that you know the best time to visit, start building your itinerary. Whether you choose
            the golden days of October or the budget-friendly shoulder season, Morocco will reward you
            with experiences you will never forget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-trip-cost"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors font-semibold"
            >
              <TrendingUp className="w-5 h-5" />
              Plan Your Budget
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-semibold border border-white/30"
            >
              <Globe className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
            <Link
              href="/packing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-colors font-semibold border border-white/30"
            >
              <Backpack className="w-5 h-5" />
              Packing List
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

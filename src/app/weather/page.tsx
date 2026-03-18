import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Sun,
  CloudRain,
  Thermometer,
  Users,
  DollarSign,
  Calendar,
  Mountain,
  Waves,
  Wind,
  Snowflake,
  Camera,
  Compass,
  ArrowRight,
  MapPin,
  Backpack,
  CheckCircle,
  Star,
  AlertTriangle,
  Shield,
  Clock,
  CloudSun,
  Droplets,
  TrendingUp,
  Shirt,
  Globe,
  Heart,
  Footprints,
  Umbrella,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Weather & Climate Guide | Regional Forecasts & Monthly Data | CityGuide',
  description:
    'Complete Morocco weather and climate guide with monthly temperatures, rainfall, and regional breakdowns for Marrakech, Fes, Chefchaouen, Essaouira, the Sahara Desert, Atlas Mountains, and Agadir. Plan your trip with accurate weather data, packing tips, and seasonal advice.',
  keywords: [
    'Morocco weather',
    'Morocco climate',
    'Morocco temperature',
    'Marrakech weather',
    'Fes weather',
    'Sahara Desert temperature',
    'Atlas Mountains climate',
    'Essaouira weather',
    'Chefchaouen weather',
    'Agadir weather',
    'Morocco monthly weather',
    'Morocco rainfall',
    'Morocco climate zones',
    'Morocco weather by month',
    'best weather Morocco',
    'Morocco heat wave',
    'Morocco winter weather',
    'Morocco summer temperature',
    'what to wear Morocco',
    'Morocco climate change',
  ],
  openGraph: {
    title: 'Morocco Weather & Climate Guide - Regional Forecasts & Monthly Data',
    description:
      'Comprehensive guide to Morocco weather and climate with monthly data, regional breakdowns, packing advice, and extreme weather warnings for all major destinations.',
    url: 'https://citytoursmorocco.com/weather',
    images: [
      {
        url: '/images/hero-desert.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco showing diverse climate zones from mountains to desert',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/weather' },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://citytoursmorocco.com/weather',
      name: 'Morocco Weather & Climate Guide',
      description:
        'Comprehensive guide to Morocco weather and climate covering all regions, monthly data, seasonal packing advice, and extreme weather warnings.',
      url: 'https://citytoursmorocco.com/weather',
      isPartOf: {
        '@type': 'WebSite',
        name: 'CityGuide Morocco',
        url: 'https://citytoursmorocco.com',
      },
      about: {
        '@type': 'Country',
        name: 'Morocco',
      },
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
          { '@type': 'ListItem', position: 2, name: 'Weather & Climate', item: 'https://citytoursmorocco.com/weather' },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is the hottest month in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'August is the hottest month in Morocco. Marrakech averages 38-42 C (100-108 F), while the Sahara Desert can exceed 50 C (122 F). Coastal cities like Essaouira remain much cooler at 22-25 C (72-77 F).',
          },
        },
        {
          '@type': 'Question',
          name: 'Does it snow in Morocco?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Morocco receives significant snowfall in the Atlas Mountains from November through May. Ski resorts operate at Oukaimeden (near Marrakech) and Michlifen (near Ifrane). Ifrane, known as the Switzerland of Morocco, regularly records sub-zero temperatures.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best month to visit Morocco for good weather?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'April, May, and October offer the best weather across Morocco, with comfortable temperatures of 22-28 C (72-82 F), minimal rainfall, and pleasant conditions in every region including the desert and mountains.',
          },
        },
        {
          '@type': 'Question',
          name: 'How cold does the Sahara Desert get at night?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The Sahara Desert in Morocco can drop to 0-5 C (32-41 F) on winter nights (December-February), with the temperature swing from day to night often exceeding 20 C. Even in shoulder months, nighttime temperatures can fall to 10-15 C.',
          },
        },
      ],
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   CLIMATE ZONES DATA
   ═══════════════════════════════════════════════════════════════ */

const climateZones = [
  {
    name: 'Mediterranean Coast',
    icon: Waves,
    regions: 'Tangier, Tetouan, Al Hoceima, Nador, Ceuta border',
    description:
      'Classic Mediterranean climate with mild, wet winters and warm, dry summers. Sea breezes keep coastal temperatures moderate year-round. Winters average 12-18 C (54-64 F) with periodic rainfall, while summers reach 27-32 C (81-90 F) with virtually no rain from June to September. The Strait of Gibraltar area is notably windier than the eastern Mediterranean coast.',
    annualRainfall: '500-800mm',
    sunnyDays: '260-280',
    color: '#1A1814',
  },
  {
    name: 'Atlantic Coast',
    icon: Wind,
    regions: 'Rabat, Casablanca, El Jadida, Essaouira, Agadir, Sidi Ifni',
    description:
      'Moderated by the cool Canary Current, the Atlantic coast enjoys remarkably stable temperatures. Essaouira rarely exceeds 25 C (77 F) even in summer due to persistent trade winds. Agadir basks in 300+ days of sunshine, making it Morocco&apos;s sunniest destination. Fog is common in Casablanca during morning hours in summer months.',
    annualRainfall: '250-500mm',
    sunnyDays: '280-320',
    color: '#A0522D',
  },
  {
    name: 'Interior / Continental',
    icon: Sun,
    regions: 'Marrakech, Fes, Meknes, Beni Mellal, Khouribga',
    description:
      'Dramatic temperature extremes define the interior. Marrakech can soar past 45 C (113 F) in July-August and drop to 5-8 C (41-46 F) on winter nights. Fes experiences similar extremes with colder, wetter winters. Spring and autumn offer an ideal sweet spot of 22-28 C (72-82 F). Daily temperature swings of 15-20 C are common throughout the year.',
    annualRainfall: '200-400mm',
    sunnyDays: '270-300',
    color: '#C4960C',
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    regions: 'High Atlas, Middle Atlas, Anti-Atlas, Ifrane, Oukaimeden, Toubkal',
    description:
      'Alpine conditions prevail above 2,000m. Heavy snow blankets the High Atlas from November through May, with the ski resort of Oukaimeden (2,600m) receiving 1-2 meters of accumulation. Ifrane, at 1,650m, is Morocco&apos;s coldest town, recording Africa&apos;s lowest temperature of -23.9 C (-11 F) in 1935. Summer days are warm (20-28 C / 68-82 F) with cool nights.',
    annualRainfall: '600-1200mm',
    sunnyDays: '220-260',
    color: '#1A1814',
  },
  {
    name: 'Saharan / Pre-Saharan',
    icon: Thermometer,
    regions: 'Ouarzazate, Merzouga, Zagora, Errachidia, Tata, M&apos;hamid',
    description:
      'Extreme continental desert climate with the widest temperature ranges in Morocco. Summer highs regularly exceed 45 C (113 F) in Merzouga and Zagora, while winter nights can approach freezing. Ouarzazate, the gateway city, sees moderate winters (17-20 C / 63-68 F daytime) and scorching summers (38-42 C / 100-108 F). Rain is exceptionally rare, averaging under 100mm annually.',
    annualRainfall: '50-150mm',
    sunnyDays: '310-340',
    color: '#A0522D',
  },
];

/* ═══════════════════════════════════════════════════════════════
   MONTH-BY-MONTH WEATHER DATA
   ═══════════════════════════════════════════════════════════════ */

const months = [
  {
    name: 'January',
    tempHighC: '17-18',
    tempHighF: '63-64',
    tempLowC: '5-8',
    tempLowF: '41-46',
    rainfall: '30-40mm',
    rainfallDays: '5-8',
    sunshine: '6-7 hrs',
    humidity: '70-80%',
    crowds: 'Low',
    bestDestinations: 'Marrakech, Agadir, Ouarzazate, Merzouga, Sahara Desert',
    whatToPack: 'Warm layers, waterproof jacket, thermal base layer for desert nights, warm hat and gloves for Atlas excursions, sturdy waterproof shoes',
    description:
      'January is Morocco&apos;s quietest and coldest month. Daytime temperatures in Marrakech hover around 17-18 C (63-64 F) with crisp, clear skies, but nights drop to 5-6 C (41-43 F). The High Atlas is blanketed in snow, and skiing is possible at Oukaimeden. The Sahara offers mild daytime conditions (18-22 C / 64-72 F) but bitterly cold nights near freezing. Agadir remains the warmest option at 20-21 C (68-70 F). Northern cities like Tangier and Fes experience the most rainfall. Budget travelers find the best hotel deals of the year, with riad prices 40-50% below peak season.',
  },
  {
    name: 'February',
    tempHighC: '18-20',
    tempHighF: '64-68',
    tempLowC: '6-9',
    tempLowF: '43-48',
    rainfall: '25-35mm',
    rainfallDays: '5-7',
    sunshine: '7-8 hrs',
    humidity: '65-75%',
    crowds: 'Low',
    bestDestinations: 'Tafraoute (almond blossoms), Marrakech, Agadir, Fes, Sahara',
    whatToPack: 'Layers for variable temperatures, camera for almond blossoms, warm evening wear, rain jacket, comfortable walking shoes',
    description:
      'February brings the spectacular almond blossom season to the Anti-Atlas, particularly around Tafraoute, where pink and white blossoms contrast dramatically with red rock landscapes. Temperatures begin to rise, with Marrakech reaching 19-20 C (66-68 F). The desert remains ideal for camping under the stars. Rain is still possible in the north and Atlas regions but becomes less frequent. Fes can be chilly (15-17 C / 59-63 F) with occasional morning frost. This is an outstanding value month with few tourists at major attractions.',
  },
  {
    name: 'March',
    tempHighC: '21-24',
    tempHighF: '70-75',
    tempLowC: '9-12',
    tempLowF: '48-54',
    rainfall: '20-30mm',
    rainfallDays: '4-6',
    sunshine: '7-9 hrs',
    humidity: '60-70%',
    crowds: 'Medium',
    bestDestinations: 'Fes, Chefchaouen, Marrakech, High Atlas foothills, Essaouira',
    whatToPack: 'Light jacket, t-shirts, sun protection, comfortable walking shoes, light scarf, rain layer for occasional showers',
    description:
      'Spring arrives across Morocco with wildflowers carpeting the Atlas foothills and the Rif Mountains turning emerald green. Temperatures are perfect for sightseeing: Marrakech hits 23-24 C (73-75 F), Fes a comfortable 20-21 C (68-70 F). The trekking season begins in the lower Atlas. Chefchaouen is at its most photogenic with lush greenery framing the blue-washed walls. Tourist numbers start to rise but remain manageable. The desert is warm but not yet oppressive at 25-28 C (77-82 F). Occasional rain showers are still possible, especially in northern regions.',
  },
  {
    name: 'April',
    tempHighC: '23-27',
    tempHighF: '73-81',
    tempLowC: '11-15',
    tempLowF: '52-59',
    rainfall: '15-25mm',
    rainfallDays: '3-5',
    sunshine: '8-10 hrs',
    humidity: '55-65%',
    crowds: 'Medium-High',
    bestDestinations: 'Dades Valley (rose harvest), Marrakech, Essaouira, Fes, Atlas trekking',
    whatToPack: 'Light layers, sun hat, strong sunscreen (SPF 50), trekking boots for Atlas, breathable fabrics, camera for rose valley',
    description:
      'One of the two best months to visit Morocco. The Dades Valley rose harvest fills the air with fragrance, culminating in the Rose Festival in Kelaat M&apos;gouna. Weather is ideal nearly everywhere: Marrakech 25-27 C (77-81 F), coastal cities 20-23 C (68-73 F), and Atlas trekking conditions are superb. The desert begins to warm (28-32 C / 82-90 F), making this the tail end of comfortable desert visits. Easter can bring a tourism spike and higher prices in popular destinations. Rain becomes rare outside the mountains.',
  },
  {
    name: 'May',
    tempHighC: '26-31',
    tempHighF: '79-88',
    tempLowC: '14-18',
    tempLowF: '57-64',
    rainfall: '5-15mm',
    rainfallDays: '1-3',
    sunshine: '9-11 hrs',
    humidity: '50-60%',
    crowds: 'Medium',
    bestDestinations: 'Everywhere -- this is the ideal all-around month',
    whatToPack: 'Light breathable clothing, sunscreen, sun hat, swimwear for coast, light evening layer, comfortable walking shoes',
    description:
      'Arguably the single best month to visit Morocco. Warm enough for Atlantic beaches (water 18-19 C / 64-66 F), cool enough for medina exploration, and perfect for High Atlas trekking where wildflower meadows peak. Marrakech is warm at 29-31 C (84-88 F) but not yet punishing. The desert is manageable in the early morning and evening but heating up midday. Tourist density dips between Easter and the summer rush, creating a sweet spot of excellent weather and moderate crowds. Long daylight hours (14+ hours) maximize your sightseeing time.',
  },
  {
    name: 'June',
    tempHighC: '29-36',
    tempHighF: '84-97',
    tempLowC: '17-21',
    tempLowF: '63-70',
    rainfall: '1-5mm',
    rainfallDays: '0-1',
    sunshine: '10-12 hrs',
    humidity: '40-55%',
    crowds: 'Medium-High',
    bestDestinations: 'Essaouira, Tangier, Agadir, Chefchaouen, Mediterranean beaches',
    whatToPack: 'Lightweight breathable fabrics, SPF 50 sunscreen, wide-brimmed hat, refillable water bottle, swimwear, light cardigan for air-conditioned spaces',
    description:
      'Festival season launches with the Gnaoua World Music Festival in Essaouira and the Fes Festival of World Sacred Music. Interior cities like Marrakech (34-36 C / 93-97 F) and Fes (32-35 C / 90-95 F) start getting seriously hot in the afternoon, though mornings and evenings remain pleasant. The Atlantic coast is perfect: Essaouira stays breezy at 22-24 C (72-75 F), and Agadir warms to 25-27 C (77-81 F). Beach season is in full swing. The Sahara is now too hot for comfortable touring, with temperatures exceeding 40 C (104 F).',
  },
  {
    name: 'July',
    tempHighC: '33-41',
    tempHighF: '91-106',
    tempLowC: '19-25',
    tempLowF: '66-77',
    rainfall: '0-2mm',
    rainfallDays: '0',
    sunshine: '10-12 hrs',
    humidity: '30-45%',
    crowds: 'High',
    bestDestinations: 'Essaouira, Agadir, Tangier, Asilah, Mediterranean coast, Middle Atlas',
    whatToPack: 'Ultra-light clothing, multiple sunscreen applications daily, electrolyte packets, swimwear, sandals, evening wear for coastal restaurants',
    description:
      'Peak heat drives visitors to the coast, where conditions remain ideal. Marrakech and Fes can be punishing at 38-42 C (100-108 F) in the afternoon, though riad courtyards and pools provide refuge. The Sahara is virtually off-limits, exceeding 48 C (118 F). Atlantic coastal cities buzz with energy: Essaouira (22-24 C / 72-75 F), Agadir (27-29 C / 81-84 F), and Tangier (28-30 C / 82-86 F). The Marrakech Popular Arts Festival draws visitors despite the heat. For a cool escape, head to the Middle Atlas towns of Ifrane (28-30 C / 82-86 F) or Azrou.',
  },
  {
    name: 'August',
    tempHighC: '34-43',
    tempHighF: '93-109',
    tempLowC: '20-26',
    tempLowF: '68-79',
    rainfall: '0-1mm',
    rainfallDays: '0',
    sunshine: '10-12 hrs',
    humidity: '30-45%',
    crowds: 'Highest',
    bestDestinations: 'Essaouira, Agadir, Tangier, Ifrane (mountain cool), Asilah, Al Hoceima',
    whatToPack: 'Minimal lightweight clothing, maximum sun protection, portable fan, insulated water bottle, pre-booked accommodations essential',
    description:
      'The busiest, hottest, and most expensive month. Moroccan families join international tourists at coastal resorts, and beach towns reach full capacity. Book accommodation months in advance. Marrakech regularly hits 42-45 C (108-113 F) and the Sahara can exceed 50 C (122 F). Coastal cities are the only sensible option: Essaouira remains cool at 22-25 C (72-77 F) thanks to the Alizee winds. The Asilah Arts Festival brings culture to the northern coast. Mountain retreats like Ifrane and Azrou offer a temperate alternative at 28-30 C (82-86 F).',
  },
  {
    name: 'September',
    tempHighC: '29-36',
    tempHighF: '84-97',
    tempLowC: '17-22',
    tempLowF: '63-72',
    rainfall: '5-15mm',
    rainfallDays: '1-3',
    sunshine: '9-10 hrs',
    humidity: '45-60%',
    crowds: 'Medium',
    bestDestinations: 'Marrakech, Fes, Essaouira, Ouarzazate, coast',
    whatToPack: 'Light clothing with a layer for evenings, sun protection, comfortable walking shoes, swimwear for beach and pools',
    description:
      'An exceptional shoulder-season month. The worst heat breaks by mid-September, summer crowds thin dramatically, and prices drop 20-30%. The coast remains warm enough for swimming (Atlantic water peaks at 20-22 C / 68-72 F). Interior cities like Marrakech cool to 30-33 C (86-91 F), making medina exploration enjoyable again. The desert begins to become accessible again toward month&apos;s end, with Merzouga dropping to 33-36 C (91-97 F). Fes hosts the Tanjazz festival. This is one of the best value months for Morocco travel.',
  },
  {
    name: 'October',
    tempHighC: '25-30',
    tempHighF: '77-86',
    tempLowC: '13-18',
    tempLowF: '55-64',
    rainfall: '15-30mm',
    rainfallDays: '3-5',
    sunshine: '8-9 hrs',
    humidity: '55-65%',
    crowds: 'Medium',
    bestDestinations: 'High Atlas (trekking), Merzouga, Zagora, Marrakech, Fes, Dades Gorge',
    whatToPack: 'Layers for variable temperatures, trekking gear for Atlas, warm layer for desert nights, camera for golden light, light rain jacket',
    description:
      'The second-best month alongside May. October brings the famous Imilchil Marriage Festival in the High Atlas, where Berber tribes gather for a traditional betrothal ceremony. The date harvest transforms Saharan oases into bustling markets. Trekking conditions are perfect with clear skies and 20-25 C (68-77 F) at altitude. The desert returns to its best with daytime highs of 28-30 C (82-86 F) and crisp, starry nights at 14-16 C (57-61 F). First autumn rains bring welcome green to parched landscapes. Golden afternoon light makes this a photographer&apos;s dream month.',
  },
  {
    name: 'November',
    tempHighC: '21-24',
    tempHighF: '70-75',
    tempLowC: '9-13',
    tempLowF: '48-55',
    rainfall: '25-40mm',
    rainfallDays: '5-7',
    sunshine: '7-8 hrs',
    humidity: '65-75%',
    crowds: 'Low',
    bestDestinations: 'Marrakech, Ouarzazate, Agadir, Fes, Sahara',
    whatToPack: 'Medium-weight layers, warm jacket for evenings, waterproof outer layer, warm clothes for desert nights, closed waterproof shoes',
    description:
      'A hidden gem month for Morocco travel. Tourist numbers drop significantly, autumn light is golden and ideal for photography, and temperatures are comfortable everywhere. Marrakech sits at a pleasant 22-24 C (72-75 F). The Marrakech International Film Festival brings a touch of glamour in late November. First snows dust the High Atlas peaks, creating dramatic backdrops. The Sahara is excellent with mild days (22-25 C / 72-77 F) though nights require warm layers (8-10 C / 46-50 F). Rain becomes more frequent in northern Morocco and the Rif Mountains. Hotel prices are 30-40% below peak.',
  },
  {
    name: 'December',
    tempHighC: '17-20',
    tempHighF: '63-68',
    tempLowC: '5-9',
    tempLowF: '41-48',
    rainfall: '30-45mm',
    rainfallDays: '5-8',
    sunshine: '6-7 hrs',
    humidity: '70-80%',
    crowds: 'Low-Medium',
    bestDestinations: 'Marrakech, Fes, Agadir, Merzouga, Atlas Mountains (snow scenery)',
    whatToPack: 'Warm coat and layers, warm hat and gloves, waterproof jacket, thermal sleepwear (riads can be cold), warm base layer for desert camping, sturdy waterproof shoes',
    description:
      'Snow-capped Atlas Mountains create a dramatic backdrop for the red walls of Marrakech. Early December is quiet and affordable, though prices spike 50-80% during Christmas and New Year. Daytime temperatures in Marrakech are mild at 18-20 C (64-68 F), but evenings are chilly at 6-8 C (43-46 F). The desert offers clear skies and cool but comfortable daytime conditions (18-22 C / 64-72 F), though nights near Merzouga can drop to 2-5 C (36-41 F). Fes is cold and atmospheric, with occasional rain. Agadir remains the warmest option at 20-21 C (68-70 F). Evenings by a riad fireplace with mint tea are a quintessential winter Morocco experience.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   REGIONAL CLIMATE DETAILS
   ═══════════════════════════════════════════════════════════════ */

const regionalDetails = [
  {
    city: 'Marrakech',
    icon: Sun,
    tagline: 'Hot summers, mild winters, year-round sunshine',
    image: '/images/hero-marrakech.webp',
    overview:
      'Morocco&apos;s most visited city sits at the foot of the High Atlas at 450m elevation. Its continental climate produces blazing summers and surprisingly cool winters. The medina&apos;s narrow alleys provide natural shade, but open areas like Jemaa el-Fnaa can be punishing in summer.',
    winterTemp: '18 C / 64 F (day) | 6 C / 43 F (night)',
    summerTemp: '38 C / 100 F (day) | 22 C / 72 F (night)',
    annualRain: '240mm in 30 rainy days',
    sunDays: '300+ days of sunshine',
    bestMonths: 'March-May, October-November',
    avoidMonths: 'July-August (extreme heat)',
    tips: [
      'Summer afternoons (2-5pm) can exceed 45 C (113 F) -- stay in your riad during these hours',
      'Winter nights are cold; many riads lack central heating, so request extra blankets',
      'The temperature difference between shaded medina alleys and open squares can be 8-10 C',
      'Spring and autumn offer the magical combination of warm days and cool, comfortable evenings',
      'Morning is the best time for Jemaa el-Fnaa in summer; evening brings cooler temperatures and the food stalls',
    ],
  },
  {
    city: 'Fes',
    icon: CloudRain,
    tagline: 'Extreme heat in summer, cold and rainy winters',
    image: '/images/hero-fes-tanneries.webp',
    overview:
      'Situated in a bowl-shaped valley at 410m elevation, Fes experiences more extreme weather than Marrakech. Its position between the Rif and Middle Atlas mountains channels cold, wet air in winter and traps heat in summer. The ancient medina&apos;s deep, narrow streets provide some climate relief.',
    winterTemp: '15 C / 59 F (day) | 4 C / 39 F (night)',
    summerTemp: '36 C / 97 F (day) | 20 C / 68 F (night)',
    annualRain: '500mm in 55 rainy days',
    sunDays: '260+ days of sunshine',
    bestMonths: 'April-May, September-October',
    avoidMonths: 'July-August (stifling), January (cold rain)',
    tips: [
      'Fes receives nearly twice the rainfall of Marrakech -- always carry a compact umbrella in winter',
      'The tanneries are best visited in cooler months when the smell is less intense',
      'Summer heat combined with humidity from nearby rivers makes Fes feel hotter than Marrakech',
      'Morning frost is possible December through February, with occasional temperatures below 0 C (32 F)',
      'The Fes Festival of World Sacred Music (June) coincides with the start of the hot season',
    ],
  },
  {
    city: 'Chefchaouen',
    icon: Mountain,
    tagline: 'Rif Mountain climate with cool summers and wet winters',
    image: '/images/hero-chefchaouen-drone.webp',
    overview:
      'The Blue Pearl sits at 560m in the Rif Mountains, giving it a distinctly different climate from lowland Morocco. Its mountain setting means cooler temperatures, more rainfall, and misty mornings that add an ethereal quality to the blue-washed medina. Surrounding cedar forests keep the air fresh.',
    winterTemp: '13 C / 55 F (day) | 3 C / 37 F (night)',
    summerTemp: '32 C / 90 F (day) | 17 C / 63 F (night)',
    annualRain: '700mm in 65 rainy days',
    sunDays: '240+ days of sunshine',
    bestMonths: 'April-June, September-October',
    avoidMonths: 'December-February (cold rain and fog)',
    tips: [
      'Chefchaouen receives the most rainfall of any major tourist destination in Morocco',
      'Morning mist and fog can obscure mountain views November through March but create atmospheric photos',
      'Summer evenings are pleasantly cool -- perfect for rooftop dining with mountain views',
      'The surrounding Rif Mountains are lush and green in spring, dry and brown by late summer',
      'Bring warm layers even in summer; nighttime temperatures drop quickly after sunset',
    ],
  },
  {
    city: 'Essaouira',
    icon: Wind,
    tagline: 'Atlantic wind, moderate year-round temperatures',
    image: '/images/hero-coastal.webp',
    overview:
      'The Windy City of Morocco lives up to its name. Persistent Alizee trade winds from the Atlantic keep Essaouira remarkably cool even in the height of summer, making it a natural refuge from interior heat. The same winds make it a world-class destination for kitesurfing and windsurfing but can make beach lounging uncomfortable.',
    winterTemp: '18 C / 64 F (day) | 10 C / 50 F (night)',
    summerTemp: '24 C / 75 F (day) | 18 C / 64 F (night)',
    annualRain: '300mm in 25 rainy days',
    sunDays: '280+ days of sunshine',
    bestMonths: 'May-June, September-October (warm with less wind)',
    avoidMonths: 'None -- pleasant year-round, though windy July-August',
    tips: [
      'Pack a windbreaker regardless of season; the trade winds can be strong and persistent',
      'Water temperature ranges from 16 C (61 F) in winter to 20 C (68 F) in summer -- always chilly',
      'The famous Gnaoua Festival (June) brings the liveliest atmosphere of the year',
      'Essaouira is 8-12 C cooler than Marrakech year-round, making it the perfect day trip in summer',
      'Morning fog can roll in from the Atlantic, usually clearing by late morning',
      'Wind is strongest June-September; if you dislike wind, visit in spring or autumn',
    ],
  },
  {
    city: 'Sahara Desert',
    icon: Thermometer,
    tagline: 'Extreme temperature ranges, scorching summers, cold nights',
    image: '/images/hero-sahara-sunrise.webp',
    overview:
      'The Moroccan Sahara around Merzouga and Zagora features the most extreme weather in the country. The dunes of Erg Chebbi near Merzouga and Erg Chigaga near M&apos;hamid experience the full force of the desert climate: scorching daytime heat, freezing nighttime cold, and occasional sandstorms. The temperature difference between day and night can exceed 25 C (45 F).',
    winterTemp: '20 C / 68 F (day) | 2 C / 36 F (night)',
    summerTemp: '45 C / 113 F (day) | 25 C / 77 F (night)',
    annualRain: '50-80mm in 10 rainy days',
    sunDays: '330+ days of sunshine',
    bestMonths: 'October-November, February-April',
    avoidMonths: 'June-August (dangerously hot)',
    tips: [
      'Summer temperatures can exceed 50 C (122 F) -- desert tours do not operate in peak summer',
      'Winter nights can drop below freezing; bring thermal layers for overnight desert camps',
      'The sirocco (chergui) wind brings hot, sand-laden air from the south, mainly in spring',
      'Sandstorms can occur March through May and reduce visibility to near zero',
      'Sunrise over the dunes is best October-March when clear, crisp air maximizes visibility',
      'Always carry at least 3 liters of water per person when venturing into the desert',
    ],
  },
  {
    city: 'Atlas Mountains',
    icon: Snowflake,
    tagline: 'Snow in winter, cool summers, alpine conditions above 2,000m',
    image: '/images/hero-atlas.webp',
    overview:
      'The Atlas range creates Morocco&apos;s most dramatic climate contrasts. At the 4,167m summit of Jebel Toubkal, conditions are genuinely alpine, while valleys below enjoy a Mediterranean microclimate. The mountains act as a weather barrier between wet northern Morocco and the dry Saharan south. Trekking routes span every difficulty level and climate zone.',
    winterTemp: '8 C / 46 F (day) | -5 C / 23 F (night) at 2,500m',
    summerTemp: '25 C / 77 F (day) | 10 C / 50 F (night) at 2,500m',
    annualRain: '800-1200mm (higher elevations)',
    sunDays: '230+ days of sunshine',
    bestMonths: 'June-September (trekking), January-March (skiing)',
    avoidMonths: 'November-December (unpredictable transitions)',
    tips: [
      'Weather can change rapidly at altitude; always carry rain gear and warm layers when trekking',
      'The Toubkal summit is only reliably snow-free from mid-June to mid-October',
      'Oukaimeden ski resort operates January-March, with basic lifts and equipment rental',
      'Altitude sickness is possible above 3,000m -- acclimatize gradually on multi-day treks',
      'Mountain refuges provide basic shelter but bring a sleeping bag rated to -10 C for winter',
      'The Ait Bougmez Valley (Happy Valley) has its own mild microclimate protected by surrounding peaks',
    ],
  },
  {
    city: 'Agadir',
    icon: Sun,
    tagline: 'Sunshine 300+ days per year, Morocco&apos;s warmest winter destination',
    image: '/images/card-beach.webp',
    overview:
      'Rebuilt after the devastating 1960 earthquake, Agadir is Morocco&apos;s premier beach resort city and its warmest year-round destination. The Canary Current moderates summer heat while the sheltered bay position protects it from the Atlantic winds that buffet Essaouira. With over 300 sunny days and minimal rainfall, it is the most reliable destination for guaranteed good weather.',
    winterTemp: '21 C / 70 F (day) | 10 C / 50 F (night)',
    summerTemp: '28 C / 82 F (day) | 19 C / 66 F (night)',
    annualRain: '250mm in 20 rainy days',
    sunDays: '320+ days of sunshine',
    bestMonths: 'Year-round, peak beach season June-September',
    avoidMonths: 'None -- pleasant year-round',
    tips: [
      'Agadir is the best winter sun destination in Morocco, with temperatures 3-5 C warmer than Marrakech',
      'Atlantic water temperature ranges from 16 C (61 F) in February to 22 C (72 F) in September',
      'Morning coastal fog is common in summer but clears quickly',
      'The nearby Paradise Valley offers a cool mountain retreat when the city feels warm',
      'Taghazout, 20km north, is the surf capital with consistent waves October through March',
      'Unlike interior Morocco, Agadir rarely exceeds 30 C (86 F) even in peak summer',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   BEST TIME BY ACTIVITY
   ═══════════════════════════════════════════════════════════════ */

const activitiesByWeather = [
  {
    activity: 'Trekking & Hiking',
    icon: Footprints,
    bestMonths: 'April-May, September-October',
    peakMonth: 'October',
    description:
      'Spring and autumn deliver perfect trekking temperatures of 15-25 C (59-77 F) at altitude, with clear skies and minimal rainfall. The Toubkal summit is reliably snow-free from mid-June to mid-October. Summer trekking is possible but hot below 2,000m. Winter treks require full alpine gear and experience with snow and ice.',
    color: '#1A1814',
  },
  {
    activity: 'Desert Expeditions',
    icon: Sun,
    bestMonths: 'October-March',
    peakMonth: 'November',
    description:
      'The Sahara is best when daytime temperatures stay below 30 C (86 F). October-November and February-March offer the most comfortable conditions. December-January desert nights drop near freezing but days are glorious at 18-22 C (64-72 F). Camel treks, 4x4 tours, and luxury desert camps all operate during this season.',
    color: '#C4960C',
  },
  {
    activity: 'Beach Holidays',
    icon: Waves,
    bestMonths: 'June-September',
    peakMonth: 'August',
    description:
      'Atlantic water temperatures peak at 20-22 C (68-72 F) in August-September. Agadir is the warmest beach destination year-round. The Mediterranean coast (Al Hoceima, Saidia) offers warmer water than the Atlantic. Essaouira is always breezy and cooler. Beach season extends to October in southern Morocco.',
    color: '#A0522D',
  },
  {
    activity: 'City Sightseeing',
    icon: Camera,
    bestMonths: 'March-May, October-November',
    peakMonth: 'April',
    description:
      'Exploring Marrakech, Fes, and Meknes is most enjoyable at 20-28 C (68-82 F). Summer heat in interior cities makes long medina walks exhausting and potentially dangerous. Winter is viable but chilly evenings limit outdoor dining. The shoulder seasons offer the golden combination of comfortable temperatures, fewer crowds, and good light for photography.',
    color: '#1A1814',
  },
  {
    activity: 'Skiing',
    icon: Snowflake,
    bestMonths: 'January-March',
    peakMonth: 'February',
    description:
      'Oukaimeden (2,600m) near Marrakech and Michlifen near Ifrane offer Morocco&apos;s unique skiing experience. Snow coverage is unreliable but peaks in January-February with 1-2m accumulation. Facilities are basic compared to European resorts. The novelty of skiing in Africa with views toward the Sahara makes it worthwhile.',
    color: '#C4960C',
  },
  {
    activity: 'Surfing & Water Sports',
    icon: Wind,
    bestMonths: 'October-March (surf), April-September (kitesurf)',
    peakMonth: 'December',
    description:
      'Winter Atlantic swells deliver world-class waves to Taghazout, Imsouane, and the Essaouira-Agadir stretch. Water is 16-18 C (61-64 F), requiring a wetsuit. Summer waves are smaller but suitable for beginners. Kitesurfing peaks in Essaouira (April-September) and Dakhla (March-November) when trade winds are strongest.',
    color: '#A0522D',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RAMADAN WEATHER CONSIDERATIONS
   ═══════════════════════════════════════════════════════════════ */

const ramadanInfo = {
  title: 'Ramadan & Weather Considerations',
  intro:
    'Ramadan follows the Islamic lunar calendar, moving approximately 11 days earlier each year. When Ramadan falls during hot summer months, the combination of fasting and high temperatures significantly impacts daily life and the tourism experience.',
  considerations: [
    {
      heading: 'Summer Ramadan (Hardest Period)',
      text: 'When Ramadan coincides with June-August, locals fast through 15+ hours of extreme heat. Many restaurants close during daylight hours, and service may be slower. Staff working in 40 C+ heat without water deserve extra patience and understanding.',
    },
    {
      heading: 'Winter Ramadan (Mildest Period)',
      text: 'When Ramadan falls in November-February, fasting hours are shorter (10-11 hours) and temperatures are cool. The impact on tourism is minimal, and the Iftar (breaking fast) experience at sunset is particularly atmospheric in the cool evening air.',
    },
    {
      heading: 'Practical Impact',
      text: 'Tourist restaurants in major cities generally remain open year-round, but local eateries may close until sunset. The daily Iftar meal at sunset is a wonderful cultural experience -- many riads offer special Iftar dinners. Night markets and restaurants become lively after dark.',
    },
    {
      heading: 'Weather-Adjusted Travel Tips',
      text: 'During summer Ramadan, plan activities for early morning and late evening. Carry extra water (it is acceptable for tourists to drink publicly, but be discreet and respectful). Alcohol service may be limited even in tourist areas. The celebratory atmosphere of Eid al-Fitr at the end of Ramadan is worth experiencing.',
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   EXTREME WEATHER WARNINGS
   ═══════════════════════════════════════════════════════════════ */

const extremeWeatherWarnings = [
  {
    type: 'Extreme Summer Heat',
    icon: Thermometer,
    severity: 'High',
    when: 'July-August',
    where: 'Marrakech, Fes, Sahara Desert, Interior Morocco',
    description:
      'Temperatures in Marrakech regularly reach 42-45 C (108-113 F) and can exceed 48 C (118 F) during heat waves. The Sahara can surpass 50 C (122 F). Heatstroke is a genuine medical risk. In 2023, Morocco experienced a record heat wave with temperatures exceeding 50 C in some interior regions.',
    precautions: [
      'Stay indoors between 12pm and 4pm during peak heat',
      'Drink at least 3-4 liters of water per day',
      'Wear loose, light-colored clothing and a wide-brimmed hat',
      'Carry electrolyte supplements -- sweating depletes salt rapidly',
      'Choose accommodations with air conditioning, not just fans',
      'Recognize heat exhaustion symptoms: dizziness, nausea, rapid pulse',
    ],
  },
  {
    type: 'Flash Floods',
    icon: CloudRain,
    severity: 'Medium-High',
    when: 'September-November, occasionally March-April',
    where: 'Atlas Mountains, Draa Valley, Dades Gorge, southern oases, dry riverbeds (wadis)',
    description:
      'Sudden, intense rainfall over the Atlas Mountains can cause devastating flash floods in canyons, gorges, and dry riverbeds (wadis). These floods arrive with little warning and carry enormous force. In 2024, severe flooding in southeastern Morocco caused significant damage. Wadis that appear bone-dry can fill to raging torrents within minutes.',
    precautions: [
      'Never camp in or near dry riverbeds (wadis), even in seemingly clear weather',
      'Check weather forecasts before entering gorges like Todra or Dades',
      'Be prepared for road closures in mountain areas after heavy rain',
      'If driving, never attempt to cross flooded roads -- turn around',
      'Mountain trails can become dangerously slippery after rain',
      'Keep emergency supplies in your vehicle when traveling in remote areas',
    ],
  },
  {
    type: 'Sandstorms (Sirocco/Chergui)',
    icon: Wind,
    severity: 'Medium',
    when: 'March-May (peak), occasionally October',
    where: 'Sahara Desert, pre-Saharan regions, Ouarzazate, occasionally Marrakech',
    description:
      'The sirocco (called chergui in Morocco) brings hot, dust-laden winds from the Sahara that can reduce visibility to under 100 meters. These storms can last from hours to several days, coating everything in fine orange dust. They occasionally reach as far north as Marrakech and even southern Spain.',
    precautions: [
      'Cover your nose and mouth with a scarf or buff during sandstorms',
      'Protect electronics and camera equipment with sealed bags',
      'Carry eye protection -- sunglasses or goggles',
      'Desert tours may be cancelled during storms; have backup plans',
      'Flights from Ouarzazate and Errachidia can be delayed or diverted',
      'If caught driving, pull over and wait with hazard lights on',
    ],
  },
  {
    type: 'Mountain Cold & Snow',
    icon: Snowflake,
    severity: 'Medium',
    when: 'November-April',
    where: 'High Atlas, Middle Atlas, passes above 2,000m',
    description:
      'The Atlas Mountains receive significant snowfall, and passes like Tizi n&apos;Tichka (2,260m) can be temporarily closed. Temperatures at altitude drop well below freezing, and blizzard conditions are possible. Trekkers caught unprepared above 3,000m face genuine hypothermia risk. Even the town of Ifrane regularly records temperatures of -10 C (14 F).',
    precautions: [
      'Check road conditions before crossing high passes in winter',
      'Carry snow chains if driving over the Atlas November through April',
      'Do not attempt high-altitude treks without proper winter equipment and experience',
      'Mountain refuges may close or be understaffed in deep winter',
      'Hire a local guide for any winter trekking above 2,500m',
      'Dress in layers with a waterproof, windproof outer shell',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   CLIMATE CHANGE IMPACTS
   ═══════════════════════════════════════════════════════════════ */

const climateChangeImpacts = [
  {
    impact: 'Rising Temperatures',
    icon: TrendingUp,
    description:
      'Morocco has warmed by approximately 1.4 C since 1960, with acceleration in recent decades. Heat waves are becoming more frequent, intense, and longer-lasting. Summer peak temperatures in Marrakech that once reached 42-43 C are now regularly hitting 45-48 C. Scientists project an additional 1.5-3 C rise by 2050.',
  },
  {
    impact: 'Declining Rainfall',
    icon: Droplets,
    description:
      'Annual rainfall has decreased by 15-20% since the 1970s across most of Morocco. The country has experienced a prolonged drought since 2018, with devastating impacts on agriculture and water supplies. Reservoirs in 2024 fell to under 30% capacity. Some regions that once received reliable winter rains now experience multi-year dry spells.',
  },
  {
    impact: 'Shrinking Snowpack',
    icon: Snowflake,
    description:
      'Atlas Mountain snow cover has decreased dramatically, with the ski season at Oukaimeden becoming increasingly unreliable. Glaciers on Toubkal and surrounding peaks have largely disappeared. Reduced snowmelt threatens water supplies for downstream cities and agriculture, affecting millions of people.',
  },
  {
    impact: 'Impact on Tourism',
    icon: Globe,
    description:
      'The traditional shoulder seasons (April-May, October-November) are expanding as tourists avoid increasingly extreme summers. Desert tourism is concentrating into a shorter window as the heat season lengthens. Coastal destinations like Essaouira and Agadir are gaining popularity as cool-weather alternatives. Water restrictions may affect hotel pools and gardens during droughts.',
  },
  {
    impact: 'Extreme Weather Events',
    icon: AlertTriangle,
    description:
      'Paradoxically, while overall rainfall decreases, intense precipitation events are becoming more common and severe. Flash flooding, once rare, now occurs more frequently in autumn. The 2023 earthquake, while not climate-related, highlighted Morocco&apos;s vulnerability to natural disasters. Travelers should monitor weather alerts and have flexible itineraries.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   WHAT TO WEAR BY SEASON
   ═══════════════════════════════════════════════════════════════ */

const whatToWear = [
  {
    season: 'Spring (March-May)',
    icon: CloudSun,
    essentials: [
      'Light layers: t-shirts with a packable jacket for mornings and evenings',
      'Comfortable walking shoes with good grip for cobblestone medinas',
      'Sunscreen (SPF 50) and a quality sun hat -- UV is strong even in spring',
      'Light scarf or shawl for mosque visits and wind protection',
      'Rain jacket or compact umbrella for occasional spring showers',
      'Trekking boots and moisture-wicking base layers for Atlas hikes',
      'Breathable cotton or linen trousers (respectful and practical)',
    ],
    notes: 'Spring offers the widest temperature range within a single day. You may start the morning in a jacket, shed layers by noon, and need the jacket again after sunset. Temperatures can vary 15 C between morning and afternoon.',
  },
  {
    season: 'Summer (June-August)',
    icon: Sun,
    essentials: [
      'Ultra-lightweight, breathable fabrics (linen, cotton, or technical moisture-wicking)',
      'Wide-brimmed hat and SPF 50+ sunscreen reapplied every 2 hours',
      'Refillable insulated water bottle -- essential in 40 C+ heat',
      'Swimwear for coast and hotel pools',
      'Light cardigan or wrap for over-air-conditioned restaurants and malls',
      'Sandals for casual wear plus closed-toe shoes for medina walking',
      'Loose, long-sleeved tops for sun protection (cooler than exposed skin in extreme heat)',
    ],
    notes: 'Avoid dark colors that absorb heat. Cotton becomes heavy with sweat -- technical fabrics or linen are superior choices. Dress modestly out of respect, but prioritize heat safety. A wet bandana around the neck provides evaporative cooling.',
  },
  {
    season: 'Autumn (September-November)',
    icon: Wind,
    essentials: [
      'Similar to spring: layering is essential for fluctuating temperatures',
      'Medium-weight jacket for cooler evenings, especially from October onward',
      'Comfortable shoes for long medina explorations (the best walking season)',
      'Camera gear -- autumn light in Morocco is world-class for photography',
      'Warm layers for overnight desert camps (October onward, nights drop quickly)',
      'Light rain gear for November, especially in northern regions',
      'Dust-proof bag or cover for electronics in pre-Saharan areas',
    ],
    notes: 'Autumn transitions rapidly from warm to cool. September still feels like summer, but by November evenings are genuinely cold. The golden light makes every outfit look good in photos -- pack your favorite pieces.',
  },
  {
    season: 'Winter (December-February)',
    icon: Snowflake,
    essentials: [
      'Warm coat, fleece, and thermal base layers (riads and older buildings can be very cold)',
      'Warm hat, gloves, and scarf for Atlas Mountain areas and desert nights',
      'Waterproof jacket and shoes for winter rains, especially in the north',
      'Warm sleepwear and even socks for bed (many traditional riads lack central heating)',
      'Thermal underlayers for Sahara desert camping (nights can approach 0 C / 32 F)',
      'Sturdy waterproof walking shoes or boots',
      'Hand warmers and a small travel blanket for long bus journeys in the mountains',
    ],
    notes: 'Winter in Morocco catches many visitors off guard. The image of sun-drenched deserts does not match the reality of shivering in an unheated riad in Fes at 4 C. Pack as you would for a European autumn, with extra warm layers for mountain and desert areas.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   RELATED PAGES
   ═══════════════════════════════════════════════════════════════ */

const relatedPages = [
  {
    title: 'Best Time to Visit Morocco',
    href: '/best-time',
    description: 'Month-by-month guide comparing weather, crowds, prices, and festivals to find your ideal travel window.',
    icon: Calendar,
  },
  {
    title: 'What to Pack for Morocco',
    href: '/tips',
    description: 'Complete packing lists for every season, activity, and region with insider tips from experienced travelers.',
    icon: Backpack,
  },
  {
    title: 'Morocco Trekking Guide',
    href: '/trekking',
    description: 'Atlas Mountain trails, difficulty levels, seasonal conditions, and equipment recommendations.',
    icon: Mountain,
  },
  {
    title: 'Sahara Desert Guide',
    href: '/sahara-guide',
    description: 'Desert camps, camel treks, seasonal considerations, and surviving the heat safely.',
    icon: Compass,
  },
  {
    title: 'Morocco Beach Guide',
    href: '/beaches',
    description: 'Atlantic and Mediterranean beaches, water temperatures, surf conditions, and coastal road trips.',
    icon: Waves,
  },
  {
    title: 'Morocco Safety Tips',
    href: '/safety',
    description: 'Health advice, extreme weather preparedness, and staying safe during your Morocco trip.',
    icon: Shield,
  },
];

/* ═══════════════════════════════════════════════════════════════
   HELPER FUNCTIONS
   ═══════════════════════════════════════════════════════════════ */

function crowdColor(level: string): string {
  if (level.includes('Highest') || level.includes('Very High')) return '#C4960C';
  if (level.includes('High')) return '#A0522D';
  if (level.includes('Medium')) return '#A0522D';
  return '#2d6a4f';
}

function severityColor(level: string): string {
  if (level === 'High') return '#dc2626';
  if (level === 'Medium-High') return '#ea580c';
  return '#C4960C';
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT (Server)
   ═══════════════════════════════════════════════════════════════ */

export default function WeatherPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-morocco.webp"
            alt="Panoramic view of Morocco showcasing diverse climate zones from snow-capped Atlas Mountains to golden Sahara dunes"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Weather &amp; Climate</span>
          </nav>

          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Planning Your Trip
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Weather &amp; Climate Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Mediterranean shores to Saharan dunes, Atlas snowfields to Atlantic surf breaks &mdash;
              understand Morocco&apos;s five distinct climate zones to plan the perfect trip with the right
              gear at the right time.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Thermometer className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-sm">5 Climate Zones</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Sun className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-sm">300+ Sunny Days (South)</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Mountain className="w-4 h-4 text-[var(--color-accent)]" />
                <span className="text-sm">-24 C to 50 C Range</span>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLIMATE ZONES OVERVIEW
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(26, 24, 20, 0.1)' }}>
              <Globe className="w-6 h-6" style={{ color: '#1A1814' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Five Climate Zones
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is one of the most climatically diverse countries on Earth. Within a few hours&apos;
              drive, you can move from snow-capped mountains to scorching desert, from windswept Atlantic
              cliffs to sheltered Mediterranean coves.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {climateZones.map((zone) => (
              <div key={zone.name} className="card-moroccan p-6">
                <div
                  className="inline-flex p-3 rounded-xl mb-4"
                  style={{ backgroundColor: `${zone.color}15` }}
                >
                  <zone.icon className="w-6 h-6" style={{ color: zone.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {zone.name}
                </h3>
                <p className="text-xs text-[var(--text-muted)] mb-3">{zone.regions}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {zone.description}
                </p>
                <div className="flex gap-4 pt-3 border-t border-[var(--border-light)]">
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Annual Rain</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{zone.annualRainfall}</span>
                  </div>
                  <div>
                    <span className="text-xs text-[var(--text-muted)] block">Sunny Days</span>
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{zone.sunnyDays}/yr</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          MONTHLY WEATHER GUIDE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)' }}>
              <Calendar className="w-6 h-6" style={{ color: '#A0522D' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Monthly Weather Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed weather data for every month of the year, including temperatures in both Celsius
              and Fahrenheit, rainfall, best destinations, crowd levels, and packing recommendations.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {months.map((month, index) => (
              <article key={month.name} className="card-moroccan overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Month Header */}
                  <div className="lg:w-56 shrink-0 bg-[var(--color-primary)]/5 p-6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                    <span className="text-4xl font-bold font-[family-name:var(--font-display)] text-[var(--color-primary)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {month.name}
                    </h3>
                    <span
                      className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        color: crowdColor(month.crowds),
                        backgroundColor: `${crowdColor(month.crowds)}15`,
                      }}
                    >
                      {month.crowds} Season
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    {/* Stats Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4" style={{ color: '#dc2626' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">High</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {month.tempHighC} C / {month.tempHighF} F
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Thermometer className="w-4 h-4" style={{ color: '#2563eb' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Low</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {month.tempLowC} C / {month.tempLowF} F
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <CloudRain className="w-4 h-4" style={{ color: '#6366f1' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Rainfall</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {month.rainfall}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4" style={{ color: '#C4960C' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Sunshine</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">
                            {month.sunshine}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-4">
                      {month.description}
                    </p>

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">
                          <MapPin className="w-3.5 h-3.5 inline mr-1" style={{ color: '#A0522D' }} />
                          Best Destinations:{' '}
                        </span>
                        <span className="text-[var(--text-secondary)]">{month.bestDestinations}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-[var(--text-primary)]">
                          <Backpack className="w-3.5 h-3.5 inline mr-1" style={{ color: '#A0522D' }} />
                          What to Pack:{' '}
                        </span>
                        <span className="text-[var(--text-secondary)]">{month.whatToPack}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          REGIONAL CLIMATE DETAILS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(26, 24, 20, 0.1)' }}>
              <MapPin className="w-6 h-6" style={{ color: '#1A1814' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Regional Climate Details
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              In-depth weather profiles for Morocco&apos;s most popular destinations, with specific
              temperature data, best visiting months, and local climate tips from experienced travelers.
            </p>
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {regionalDetails.map((region) => (
              <article key={region.city} className="card-moroccan overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-72 shrink-0 relative">
                    <img
                      src={region.image}
                      alt={`${region.city} cityscape showing typical weather conditions`}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:bg-gradient-to-r" />
                    <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
                      <h3 className="text-2xl font-bold text-white font-[family-name:var(--font-display)]">
                        {region.city}
                      </h3>
                      <p className="text-sm text-white/80">{region.tagline}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8 flex-1">
                    <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-5">
                      {region.overview}
                    </p>

                    {/* Weather Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                      <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(220, 38, 38, 0.05)' }}>
                        <Thermometer className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#dc2626' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Summer</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{region.summerTemp}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(37, 99, 235, 0.05)' }}>
                        <Snowflake className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#2563eb' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Winter</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{region.winterTemp}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(99, 102, 241, 0.05)' }}>
                        <CloudRain className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#6366f1' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Annual Rain</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{region.annualRain}</span>
                        </div>
                      </div>
                      <div className="flex items-start gap-3 p-3 rounded-lg" style={{ backgroundColor: 'rgba(196, 150, 12, 0.05)' }}>
                        <Sun className="w-4 h-4 mt-0.5 shrink-0" style={{ color: '#C4960C' }} />
                        <div>
                          <span className="text-xs text-[var(--text-muted)] block">Sunny Days</span>
                          <span className="text-sm font-semibold text-[var(--text-primary)]">{region.sunDays}</span>
                        </div>
                      </div>
                    </div>

                    {/* Best / Avoid */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-5 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 shrink-0" style={{ color: '#2d6a4f' }} />
                        <span>
                          <span className="font-semibold text-[var(--text-primary)]">Best months: </span>
                          <span className="text-[var(--text-secondary)]">{region.bestMonths}</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 shrink-0" style={{ color: '#dc2626' }} />
                        <span>
                          <span className="font-semibold text-[var(--text-primary)]">Avoid: </span>
                          <span className="text-[var(--text-secondary)]">{region.avoidMonths}</span>
                        </span>
                      </div>
                    </div>

                    {/* Tips */}
                    <div className="pt-4 border-t border-[var(--border-light)]">
                      <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Local Weather Tips</h4>
                      <ul className="space-y-2">
                        {region.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <Star className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#C4960C' }} />
                            <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BEST TIME BY ACTIVITY
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(26, 24, 20, 0.1)' }}>
              <Compass className="w-6 h-6" style={{ color: '#1A1814' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best Weather for Each Activity
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              The right weather makes or breaks an activity. Here is when conditions are optimal for
              Morocco&apos;s most popular experiences, based on temperature, precipitation, and wind data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {activitiesByWeather.map((item) => (
              <div key={item.activity} className="card-moroccan p-6">
                <div
                  className="inline-flex p-3 rounded-xl mb-4"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                  {item.activity}
                </h3>
                <p className="text-sm font-semibold mb-1" style={{ color: '#A0522D' }}>
                  {item.bestMonths}
                </p>
                <p className="text-xs text-[var(--text-muted)] mb-3">
                  Peak month: {item.peakMonth}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RAMADAN & WEATHER CONSIDERATIONS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(196, 150, 12, 0.1)' }}>
              <Heart className="w-6 h-6" style={{ color: '#C4960C' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              {ramadanInfo.title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              {ramadanInfo.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {ramadanInfo.considerations.map((item) => (
              <div key={item.heading} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.heading}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Ramadan Date Reference */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6" style={{ borderLeft: '4px solid #C4960C' }}>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                Approximate Ramadan Dates (shifts ~11 days earlier each year)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: '#C4960C' }} />
                  <span className="text-[var(--text-secondary)]">2025: ~February 28 - March 30</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: '#C4960C' }} />
                  <span className="text-[var(--text-secondary)]">2026: ~February 17 - March 19</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: '#C4960C' }} />
                  <span className="text-[var(--text-secondary)]">2027: ~February 7 - March 8</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5" style={{ color: '#C4960C' }} />
                  <span className="text-[var(--text-secondary)]">2028: ~January 27 - February 25</span>
                </div>
              </div>
              <p className="text-xs text-[var(--text-muted)] mt-3">
                Exact dates depend on moon sighting and may vary by 1-2 days. Check closer to your travel dates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          EXTREME WEATHER WARNINGS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}>
              <AlertTriangle className="w-6 h-6" style={{ color: '#dc2626' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Extreme Weather Warnings
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s diverse geography produces several extreme weather hazards that travelers
              must understand. Being prepared can mean the difference between discomfort and danger.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {extremeWeatherWarnings.map((warning) => (
              <article key={warning.type} className="card-moroccan overflow-hidden">
                <div
                  className="p-4 flex items-center gap-3"
                  style={{ backgroundColor: `${severityColor(warning.severity)}08` }}
                >
                  <div
                    className="inline-flex p-2 rounded-lg"
                    style={{ backgroundColor: `${severityColor(warning.severity)}15` }}
                  >
                    <warning.icon className="w-5 h-5" style={{ color: severityColor(warning.severity) }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                      {warning.type}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)]">
                      <span>Severity: <strong style={{ color: severityColor(warning.severity) }}>{warning.severity}</strong></span>
                      <span>When: <strong>{warning.when}</strong></span>
                      <span>Where: <strong>{warning.where}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed mb-5">
                    {warning.description}
                  </p>

                  <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">Safety Precautions</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {warning.precautions.map((precaution, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <Shield className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#2d6a4f' }} />
                        <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{precaution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CLIMATE CHANGE IMPACTS
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)' }}>
              <TrendingUp className="w-6 h-6" style={{ color: '#A0522D' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Climate Change &amp; Morocco Tourism
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is among the countries most affected by climate change in the Mediterranean region.
              Understanding these shifts helps travelers make informed decisions and plan resilient itineraries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {climateChangeImpacts.map((item) => (
              <div key={item.impact} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)' }}>
                  <item.icon className="w-6 h-6" style={{ color: '#A0522D' }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {item.impact}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Responsible Travel Note */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6" style={{ borderLeft: '4px solid #2d6a4f' }}>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                Traveling Responsibly in a Changing Climate
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco is investing heavily in renewable energy (the Noor-Ouarzazate solar complex is
                one of the world&apos;s largest) and water conservation. As a visitor, you can help by
                conserving water at your accommodation, choosing eco-friendly tours, supporting local
                businesses, and being flexible with your itinerary when weather conditions demand
                changes. Consider visiting during shoulder seasons to reduce pressure on peak-season
                resources and infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT TO WEAR BY SEASON
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(196, 150, 12, 0.1)' }}>
              <Shirt className="w-6 h-6" style={{ color: '#C4960C' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What to Wear by Season
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dressing appropriately for Morocco means balancing climate comfort with cultural respect.
              Here is your complete seasonal wardrobe guide with practical packing recommendations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whatToWear.map((season) => (
              <div key={season.season} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2.5 rounded-xl" style={{ backgroundColor: 'rgba(196, 150, 12, 0.1)' }}>
                    <season.icon className="w-5 h-5" style={{ color: '#C4960C' }} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {season.season}
                  </h3>
                </div>

                <ul className="space-y-2.5 mb-4">
                  {season.essentials.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#2d6a4f' }} />
                      <span className="text-sm text-[var(--text-secondary)] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-[var(--border-light)]">
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed italic">
                    {season.notes}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cultural Dress Note */}
          <div className="max-w-3xl mx-auto mt-8">
            <div className="card-moroccan p-6" style={{ borderLeft: '4px solid #A0522D' }}>
              <h3 className="text-base font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2">
                A Note on Modest Dress
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco is a Muslim country, and while tourist areas are generally relaxed about Western
                clothing, dressing modestly shows respect and reduces unwanted attention. For both men and
                women, covering shoulders and knees is advisable outside beach areas. Women should carry a
                scarf for mosque visits (where entry is permitted). In rural and conservative areas like the
                Rif Mountains and deep south, more conservative dress is appreciated. Fortunately, modest
                clothing also happens to be the most practical choice for sun and heat protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          QUICK REFERENCE TEMPERATURE TABLE
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(26, 24, 20, 0.1)' }}>
              <Thermometer className="w-6 h-6" style={{ color: '#1A1814' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quick Temperature Reference
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Compare average high temperatures across Morocco&apos;s key destinations at a glance.
              All temperatures in degrees Celsius, with Fahrenheit in parentheses.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'rgba(26, 24, 20, 0.05)' }}>
                    <th className="text-left p-4 font-bold text-[var(--text-primary)] sticky left-0 bg-white z-10">City</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Jan</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Feb</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Mar</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Apr</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">May</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Jun</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Jul</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Aug</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Sep</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Oct</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Nov</th>
                    <th className="text-center p-3 font-bold text-[var(--text-primary)]">Dec</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { city: 'Marrakech', temps: ['18 (64)', '20 (68)', '23 (73)', '26 (79)', '30 (86)', '34 (93)', '38 (100)', '38 (100)', '33 (91)', '28 (82)', '23 (73)', '19 (66)'] },
                    { city: 'Fes', temps: ['15 (59)', '17 (63)', '20 (68)', '22 (72)', '27 (81)', '32 (90)', '36 (97)', '36 (97)', '31 (88)', '25 (77)', '19 (66)', '16 (61)'] },
                    { city: 'Chefchaouen', temps: ['13 (55)', '14 (57)', '17 (63)', '19 (66)', '23 (73)', '28 (82)', '32 (90)', '32 (90)', '28 (82)', '22 (72)', '17 (63)', '14 (57)'] },
                    { city: 'Essaouira', temps: ['18 (64)', '18 (64)', '19 (66)', '19 (66)', '21 (70)', '22 (72)', '23 (73)', '24 (75)', '23 (73)', '22 (72)', '20 (68)', '18 (64)'] },
                    { city: 'Agadir', temps: ['21 (70)', '21 (70)', '22 (72)', '22 (72)', '24 (75)', '25 (77)', '27 (81)', '28 (82)', '27 (81)', '26 (79)', '23 (73)', '21 (70)'] },
                    { city: 'Casablanca', temps: ['17 (63)', '18 (64)', '19 (66)', '20 (68)', '22 (72)', '24 (75)', '26 (79)', '27 (81)', '26 (79)', '24 (75)', '20 (68)', '18 (64)'] },
                    { city: 'Tangier', temps: ['15 (59)', '16 (61)', '17 (63)', '19 (66)', '22 (72)', '25 (77)', '29 (84)', '29 (84)', '27 (81)', '23 (73)', '19 (66)', '16 (61)'] },
                    { city: 'Ouarzazate', temps: ['17 (63)', '19 (66)', '22 (72)', '26 (79)', '31 (88)', '36 (97)', '40 (104)', '39 (102)', '34 (93)', '28 (82)', '22 (72)', '18 (64)'] },
                    { city: 'Merzouga', temps: ['20 (68)', '22 (72)', '26 (79)', '30 (86)', '35 (95)', '40 (104)', '45 (113)', '44 (111)', '38 (100)', '31 (88)', '25 (77)', '20 (68)'] },
                    { city: 'Ifrane', temps: ['9 (48)', '10 (50)', '14 (57)', '16 (61)', '21 (70)', '27 (81)', '33 (91)', '33 (91)', '27 (81)', '21 (70)', '14 (57)', '10 (50)'] },
                  ].map((row, index) => (
                    <tr
                      key={row.city}
                      className={index % 2 === 0 ? '' : ''}
                      style={index % 2 !== 0 ? { backgroundColor: 'rgba(26, 24, 20, 0.02)' } : {}}
                    >
                      <td className="p-4 font-semibold text-[var(--text-primary)] sticky left-0 bg-inherit whitespace-nowrap">{row.city}</td>
                      {row.temps.map((temp, i) => {
                        const numTemp = parseInt(temp);
                        let cellColor = '#1A1814';
                        if (numTemp >= 38) cellColor = '#dc2626';
                        else if (numTemp >= 30) cellColor = '#ea580c';
                        else if (numTemp >= 24) cellColor = '#C4960C';
                        else if (numTemp <= 12) cellColor = '#2563eb';
                        return (
                          <td
                            key={i}
                            className="p-3 text-center text-xs whitespace-nowrap"
                            style={{ color: cellColor }}
                          >
                            {temp}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 border-t border-[var(--border-light)] text-xs text-[var(--text-muted)]">
              Values shown are average daily high temperatures. Actual conditions vary by year.
              <span style={{ color: '#dc2626' }}> Red</span> = extreme heat (38 C+),
              <span style={{ color: '#ea580c' }}> orange</span> = hot (30-37 C),
              <span style={{ color: '#C4960C' }}> gold</span> = warm (24-29 C),
              <span style={{ color: '#1A1814' }}> default</span> = comfortable (13-23 C),
              <span style={{ color: '#2563eb' }}> blue</span> = cool (12 C or below).
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RELATED PAGES
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(26, 24, 20, 0.1)' }}>
              <Compass className="w-6 h-6" style={{ color: '#1A1814' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Planning Your Trip
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Now that you understand Morocco&apos;s weather, explore these related guides to fine-tune
              your travel plans.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-6 group hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex p-3 rounded-xl mb-4" style={{ backgroundColor: 'rgba(160, 82, 45, 0.1)' }}>
                  <page.icon className="w-6 h-6" style={{ color: '#A0522D' }} />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {page.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold" style={{ color: '#A0522D' }}>
                  Read Guide <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CTA SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Experience Morocco&apos;s Climate Diversity?
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            From snow-dusted Atlas peaks to sun-drenched Saharan dunes, Morocco offers a world of
            weather in a single country. Start planning your trip with the weather on your side.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/best-time"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Calendar className="w-4 h-4" /> Best Time to Visit
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Browse Itineraries
            </Link>
          </div>
        </div>
      </section>

      {/* Planning Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Plan Your Trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/what-to-wear-in-morocco', title: 'What to Wear in Morocco', desc: 'Season-by-season dress code guide for every region and occasion.' },
              { href: '/packing', title: 'Packing Checklist', desc: 'Complete packing list organized by season, activity, and travel style.' },
              { href: '/morocco-trip-cost', title: 'Trip Cost Breakdown', desc: 'How much to budget daily for accommodation, food, transport, and activities.' },
              { href: '/morocco-weather-monthly', title: 'Monthly Weather Guide', desc: 'Detailed month-by-month weather data for every major Moroccan destination.' },
              { href: '/first-time', title: 'First-Time Visitor Guide', desc: 'Everything you need to know before your first trip to Morocco.' },
              { href: '/morocco-3-days', title: 'Morocco in 3 Days', desc: 'Short trip? Make the most of 3 days with this optimized itinerary.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

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
  Shield,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Sun,
  Compass,
  Calendar,
  Car,
  Navigation,
  Bus,
  Map,
  Camera,
  TreePine,
  Waves,
  Thermometer,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Best Day Trips from Fes 2026 | Top 10 Excursions, Prices & Tips',
  description:
    'Discover the 10 best day trips from Fes in 2026. Meknes & Volubilis, Ifrane, Middle Atlas cedar forests, Moulay Idriss Zerhoun, Azrou, Bhalil cave houses, and more. Guided tours from 350 MAD, DIY options from 30 MAD.',
  keywords: [
    'day trips from Fes',
    'Fes day trips',
    'best day trips from Fez Morocco',
    'Fes excursions',
    'Meknes day trip from Fes',
    'Volubilis from Fes',
    'Ifrane from Fes',
    'Middle Atlas from Fes',
    'Moulay Idriss Zerhoun',
    'Azrou Barbary macaques',
    'Bhalil cave houses',
    'Sefrou cherry festival',
    'Fes day tours 2026',
    'things to do near Fes',
    'Fes excursion prices',
    'guided tours from Fes',
    'Taza from Fes',
    'Sidi Harazem thermal springs',
  ],
  openGraph: {
    title: 'Best Day Trips from Fes 2026 | Top 10 Excursions & Prices',
    description:
      'The 10 best day trips from Fes with prices, transport options, and insider tips. From Volubilis Roman ruins to Ifrane cedar forests, Moulay Idriss to Middle Atlas Barbary macaques. DIY and guided tours compared.',
    url: `${BASE_URL}/day-trips-from-fes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Fes medina with surrounding hills and Middle Atlas Mountains in the distance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Trips from Fes 2026 | Top 10 Excursions',
    description:
      'Meknes & Volubilis, Ifrane, Middle Atlas, Moulay Idriss, Azrou, Bhalil & more. Complete guide with prices from 30 MAD.',
    images: [`${BASE_URL}/images/hero-fes-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/day-trips-from-fes` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/day-trips-from-fes`,
  name: 'Best Day Trips from Fes 2026 | Top 10 Excursions, Prices & Tips',
  description:
    'Complete guide to the 10 best day trips from Fes including Meknes & Volubilis, Ifrane, Middle Atlas cedar forests, Moulay Idriss Zerhoun, Azrou, Bhalil, Sefrou, Taza, and more. Prices, transport, DIY vs guided options.',
  url: `${BASE_URL}/day-trips-from-fes`,
  image: `${BASE_URL}/images/hero-fes-medina.webp`,
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
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/day-trips-from-fes`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Fes' },
    { '@type': 'City', name: 'Meknes' },
    { '@type': 'Place', name: 'Volubilis' },
    { '@type': 'City', name: 'Ifrane' },
    { '@type': 'Place', name: 'Middle Atlas' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Day Trips from Fes', item: `${BASE_URL}/day-trips-from-fes` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best day trips from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular day trips from Fes are Meknes and Volubilis (Roman ruins and imperial city), Ifrane (the Switzerland of Morocco), Middle Atlas cedar forests with Barbary macaques near Azrou, Moulay Idriss Zerhoun (Morocco\'s holiest town), and Sefrou (cherry festival town). Other excellent options include Bhalil (troglodyte cave houses), Taza, Sidi Harazem thermal springs, and Immouzzer Kandar.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do day trips from Fes cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY day trips from Fes can cost as little as from 30-60 MAD per person for nearby destinations like Sefrou or Sidi Harazem by grand taxi. Guided group day tours range from 350 MAD to 700 MAD per person depending on the destination and inclusions. Private tours start from 1,000 MAD for 1-2 people. The combined Meknes and Volubilis guided tour is typically from 450 MAD per person including lunch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I visit Meknes and Volubilis in one day from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, combining Meknes and Volubilis is the most popular day trip from Fes and works perfectly as a single-day excursion. Most tours visit Volubilis Roman ruins first (morning), then continue to Meknes for lunch and sightseeing. The total driving time is about 2 hours. By grand taxi, you can reach Meknes in 1 hour (from 30 MAD) and take another taxi to Volubilis.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get to Ifrane from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ifrane is approximately 60 km south of Fes (about 1 hour by car). Grand taxis to Ifrane depart from the main taxi station in Fes and cost from 35 MAD per person. CTM buses also serve the route. You can combine Ifrane with a visit to Azrou and the cedar forests for a full Middle Atlas day trip. Guided tours typically cost from 400 MAD per person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season for day trips from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) are ideal with pleasant temperatures and green landscapes. Summer (June-August) is hot in Fes (35-40C) but the Middle Atlas destinations like Ifrane and Azrou offer cool relief at altitude. Winter (December-February) is mild in Fes but cold in the mountains with possible snow in Ifrane and the cedar forests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I see Barbary macaques near Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Barbary macaques live in the cedar forests of the Middle Atlas between Azrou and Ifrane, about 70 km south of Fes. The most reliable spot is the Cedre Gouraud forest near Azrou. Most Ifrane/Middle Atlas day trips from Fes include a stop to see the monkeys. You can also drive yourself and park at the forest viewpoints along the N13 road. Do not feed the monkeys as it is harmful to them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Moulay Idriss Zerhoun worth visiting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Moulay Idriss Zerhoun is a beautiful hilltop town that is considered the holiest place in Morocco, as it contains the tomb of Moulay Idriss I, the founder of the first Moroccan dynasty. The town has stunning views, whitewashed houses, and a peaceful atmosphere. Non-Muslims cannot enter the shrine, but the town itself is wonderful to explore. It is easily combined with Volubilis, which is only 4 km away.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a guided tour or go independently from Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Meknes, Sefrou, and Sidi Harazem, going independently by grand taxi is easy and cheap. For the Meknes-Volubilis combination, a guided tour is more practical as Volubilis is remote. For Ifrane, Azrou, and the cedar forests, a tour provides a convenient loop. For Bhalil and Moulay Idriss, you can manage independently with grand taxis but a guide adds valuable cultural context. Most tours can be booked through your riad the day before.',
      },
    },
  ],
};

/* ===============================================================
   DATA: DAY TRIPS
   =============================================================== */

const dayTrips = [
  {
    name: 'Meknes & Volubilis',
    icon: Camera,
    distance: '60 km to Meknes + 33 km to Volubilis (2 hrs total)',
    guidedPrice: 'From 450 MAD',
    diyPrice: 'From 100 MAD',
    bestSeason: 'Year-round (best spring)',
    highlights: ['Bab Mansour grand gateway', 'Volubilis Roman mosaics', 'Heri es-Souani granaries', 'Moulay Ismail mausoleum', 'Place el-Hedim square'],
    description:
      'The combined Meknes and Volubilis day trip is the single most popular excursion from Fes and one of Morocco\'s must-do experiences. Meknes, one of Morocco\'s four imperial cities, was built by Sultan Moulay Ismail in the 17th century with monumental gates, vast granaries, and a grand square rivaling Marrakech\'s Jemaa el-Fna. Volubilis, 33 km north, is Morocco\'s best-preserved Roman archaeological site with stunning floor mosaics, triumphal arches, and columns dating to the 2nd and 3rd centuries AD.',
    transport: 'Grand taxis from Fes to Meknes from 30 MAD (1 hour), then grand taxi from Meknes to Volubilis from 40 MAD. Trains also run Fes-Meknes from 25 MAD. By car, take the A2 motorway.',
    tip: 'Visit Volubilis first thing in the morning when the light is best for photography and before tour buses arrive. Bring a hat and water as the ruins have no shade. The Meknes medina is compact and walkable.',
    guidedIncludes: 'Hotel pickup in Fes, transport, licensed guide at Volubilis and Meknes, entry fees, and lunch in Meknes',
  },
  {
    name: 'Ifrane (Switzerland of Morocco)',
    icon: TreePine,
    distance: '60 km (1 hour)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 35 MAD',
    bestSeason: 'Year-round',
    highlights: ['Alpine-style architecture', 'Stone lion sculpture', 'University campus gardens', 'Clean mountain air', 'Snow in winter months'],
    description:
      'Ifrane is unlike anywhere else in Morocco. Built by the French as a hill station in 1929, this immaculate mountain town looks transplanted from the Swiss Alps with its red-roofed chalets, manicured gardens, and tree-lined avenues. At 1,665 meters elevation, Ifrane is noticeably cooler than Fes and even receives heavy snowfall in winter, making it Morocco\'s unofficial ski destination. The famous stone lion sculpture in the town center is one of Morocco\'s most photographed landmarks.',
    transport: 'Grand taxis from Fes main station from 35 MAD per person (1 hour). CTM buses also serve the route. By car, take the N8 south. The road is modern and well-maintained.',
    tip: 'Combine with Azrou and the cedar forests for a full Middle Atlas day. In summer, Ifrane is a cool escape from Fes\'s 40C heat. In winter, bring warm layers as temperatures drop below zero.',
    guidedIncludes: 'Hotel pickup in Fes, transport, guided walk of Ifrane, cedar forest visit, and sometimes lunch',
  },
  {
    name: 'Middle Atlas Cedar Forests & Azrou',
    icon: TreePine,
    distance: '75 km (1.5 hours)',
    guidedPrice: 'From 450 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Barbary macaque monkeys', 'Ancient cedar trees', 'Azrou Berber market', 'Mountain scenery', 'Cedre Gouraud forest'],
    description:
      'The Middle Atlas cedar forests between Ifrane and Azrou are home to some of Morocco\'s oldest and largest cedar trees, many over 800 years old. The star attraction is the colony of Barbary macaques (the only wild monkey species in Africa north of the Sahara) that live in the Cedre Gouraud forest. These curious primates are accustomed to visitors and often approach for photos. The nearby town of Azrou is a traditional Berber settlement known for its Tuesday and Thursday markets and carpet-weaving cooperatives.',
    transport: 'Grand taxis to Azrou from Fes from 40 MAD (1.5 hours). From Azrou, hire a local taxi to the cedar forest for from 50 MAD return. By car, continue south from Ifrane on the N13.',
    tip: 'Do not feed the monkeys as it disrupts their natural diet and makes them aggressive. Visit the Azrou carpet cooperative to see traditional Berber weaving. The forest is stunning in autumn when the leaves change color.',
    guidedIncludes: 'Hotel pickup in Fes, transport, Ifrane stop, cedar forest walk, Azrou visit, and lunch',
  },
  {
    name: 'Moulay Idriss Zerhoun',
    icon: Star,
    distance: '55 km (1 hour)',
    guidedPrice: 'From 350 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Year-round',
    highlights: ['Morocco\'s holiest town', 'Hilltop panoramic views', 'Whitewashed medina', 'Tomb of Moulay Idriss I', 'Traditional olive oil production'],
    description:
      'Moulay Idriss Zerhoun is the spiritual heart of Morocco, built around the tomb of Moulay Idriss I who brought Islam to Morocco in 789 AD and founded the first Moroccan dynasty. The town tumbles down two hills in a cascade of whitewashed houses with green-tiled roofs, and was closed to non-Muslims until 2005. While non-Muslims still cannot enter the shrine itself, the town is a fascinating and atmospheric place to wander. The panoramic terrace offers sweeping views over the Saiss plain to the Rif Mountains.',
    transport: 'Grand taxis from Meknes to Moulay Idriss from 15 MAD (30 minutes). From Fes, go via Meknes or take a direct grand taxi for from 50 MAD. Easily combined with Volubilis, which is only 4 km away.',
    tip: 'Visit on a Saturday for the weekly moussem (market). Try the local specialty of nougat and roasted almonds. Be respectful around the shrine area. Combine with Volubilis for a half-day cultural experience.',
    guidedIncludes: 'Hotel pickup in Fes, transport, guided walk, Volubilis entry and guide, and lunch',
  },
  {
    name: 'Sefrou',
    icon: Sun,
    distance: '28 km (30 minutes)',
    guidedPrice: 'From 300 MAD',
    diyPrice: 'From 20 MAD',
    bestSeason: 'June (Cherry Festival), spring',
    highlights: ['Annual Cherry Festival', 'Riverside medina', 'Jewish heritage quarter', 'Bou Iblane waterfall', 'Traditional market town feel'],
    description:
      'Sefrou is a charming small town just 30 minutes south of Fes, known for its annual Cherry Festival (Fete des Cerises) held every June since 1920, one of Morocco\'s oldest cultural festivals. The town has a well-preserved medina bisected by Oued Aggay river, creating a unique waterside atmosphere with old bridges and mill houses. Sefrou was historically home to a large Jewish community, and the restored mellah (Jewish quarter) with its synagogue is one of the best preserved in Morocco.',
    transport: 'Grand taxis from Fes to Sefrou from 20 MAD per person, departing frequently (30 minutes). The road is straightforward. By car, take the P20 south from Fes.',
    tip: 'Time your visit for the Cherry Festival in mid-June for parades, music, and cherry-themed celebrations. Visit the small waterfall (Cascades de Sefrou) on the edge of town. The souk on Thursday is particularly vibrant.',
    guidedIncludes: 'Hotel pickup in Fes, transport, medina walk, mellah visit, waterfall stop, and lunch',
  },
  {
    name: 'Bhalil (Cave Houses)',
    icon: Mountain,
    distance: '30 km (35 minutes)',
    guidedPrice: 'From 300 MAD',
    diyPrice: 'From 20 MAD',
    bestSeason: 'Year-round',
    highlights: ['Troglodyte cave dwellings', 'Colorful hillside town', 'Living cave-house visits', 'Traditional weaving workshops', 'Off-the-beaten-path feel'],
    description:
      'Bhalil is one of Morocco\'s hidden gems, a colorful hillside town where some residents still live in troglodyte cave houses carved into the rock face centuries ago. Local families welcome visitors into their cave homes, which are surprisingly spacious and naturally cool in summer. The town itself is a painter\'s dream with its pastel-colored houses tumbling down the hillside, and it sees almost no tourists compared to nearby Fes. Bhalil is also known for its traditional djellaba-sewing workshops.',
    transport: 'Grand taxis from Fes to Bhalil from 20 MAD (35 minutes). From Sefrou, grand taxis to Bhalil cost from 5 MAD (10 minutes). Easily combined with Sefrou for a half-day trip.',
    tip: 'Ask locals to guide you to the cave houses; they will happily show you around for a small tip (from 20 MAD). Combine with Sefrou for a full day exploring two of Morocco\'s most authentic small towns. Photography of the colorful houses is best in morning light.',
    guidedIncludes: 'Hotel pickup in Fes, transport, local cave house visits, Sefrou stop, and lunch',
  },
  {
    name: 'Taza',
    icon: Compass,
    distance: '120 km (1.5 hours)',
    guidedPrice: 'From 500 MAD',
    diyPrice: 'From 60 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Ancient medina on hilltop', 'Taza Gap mountain pass', 'Friouato Caves (deepest in Africa)', 'Great Mosque (12th century)', 'Strategic fortress history'],
    description:
      'Taza sits at a strategic mountain pass between the Rif and Middle Atlas ranges, the famous Taza Gap that has been a crucial corridor throughout Moroccan history. The old medina perches on a rocky hilltop with commanding views over the surrounding plains. Taza\'s Great Mosque dates to the Almohad era (12th century) and is one of Morocco\'s oldest. The nearby Friouato Caves (Gouffre du Friouato), 26 km southwest, are among the deepest caves in Africa at 272 meters, with a dramatic descent on 500+ steps.',
    transport: 'Trains from Fes to Taza from 50 MAD (1.5 hours), running several times daily. Grand taxis also available from 60 MAD. By car, take the A2 motorway east. The Friouato Caves require a local taxi or car from Taza.',
    tip: 'The Friouato Caves require a guide (available at the site from 100 MAD) and moderate fitness for the 500+ step descent. Wear sturdy shoes and bring a flashlight. The old medina in Taza is best explored with a local guide.',
    guidedIncludes: 'Hotel pickup in Fes, transport, medina tour, Friouato Caves guide and entry, and lunch',
  },
  {
    name: 'Sidi Harazem Thermal Springs',
    icon: Waves,
    distance: '15 km (20 minutes)',
    guidedPrice: 'From 200 MAD',
    diyPrice: 'From 10 MAD',
    bestSeason: 'Year-round',
    highlights: ['Natural thermal springs', 'Local spa culture', 'Traditional hammam experience', 'Popular weekend retreat', 'Closest day trip from Fes'],
    description:
      'Sidi Harazem is the closest excursion from Fes, a small spa town built around natural thermal springs that have been used for bathing and healing since Roman times. The thermal water is naturally warm and mineral-rich, said to benefit skin conditions and joint pain. The town has a relaxed, local feel with public bathing pools, traditional hammams, and picnic areas shaded by eucalyptus trees. It is where Fassis (residents of Fes) go for a quick half-day escape and is a fascinating glimpse into everyday Moroccan leisure culture.',
    transport: 'Grand taxis from Fes to Sidi Harazem from 10 MAD per person (20 minutes). Buses also run frequently. By car, head east from Fes on the N6. This is an easy half-day trip.',
    tip: 'Visit on a weekday for a quieter experience; weekends are crowded with local families. Bring your own towel and swimwear. The thermal pools are gender-separated. Combine with a morning exploring the Fes medina for a full day.',
    guidedIncludes: 'Hotel pickup, transport, hammam session, and guide to explain the thermal traditions',
  },
  {
    name: 'Immouzzer Kandar',
    icon: Mountain,
    distance: '45 km (45 minutes)',
    guidedPrice: 'From 300 MAD',
    diyPrice: 'From 25 MAD',
    bestSeason: 'Summer & autumn',
    highlights: ['Mountain lake Dayet Aoua', 'Apple orchards', 'French colonial architecture', 'Cool summer retreat', 'Apple Festival in autumn'],
    description:
      'Immouzzer Kandar is a pleasant Middle Atlas hill town at 1,345 meters, known for its crisp mountain air, apple orchards, and the scenic Dayet Aoua lake nearby. Founded as a French resort town, it retains some charming colonial architecture mixed with traditional Berber houses. The town comes alive during the Apple Festival (Fete des Pommes) in October. Dayet Aoua, a natural lake 9 km from town, is surrounded by cedar and oak forests and is a peaceful spot for walking and birdwatching.',
    transport: 'Grand taxis from Fes to Immouzzer Kandar from 25 MAD (45 minutes). Located on the N8 road to Ifrane. By car, it is a straightforward drive south. Can be combined with Ifrane for a Middle Atlas loop.',
    tip: 'Visit Dayet Aoua in the early morning for the best birdwatching. The lake sometimes dries up in late summer. Combine with Ifrane and Azrou for a full Middle Atlas day trip. Try the local apple juice and apple-blossom honey.',
    guidedIncludes: 'Hotel pickup in Fes, transport, town walk, Dayet Aoua lake visit, and lunch',
  },
  {
    name: 'Full Middle Atlas Loop',
    icon: Map,
    distance: '160 km loop (3-4 hours driving)',
    guidedPrice: 'From 550 MAD',
    diyPrice: 'From 150 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Immouzzer Kandar, Ifrane, Azrou combined', 'Cedar forests and monkeys', 'Mountain lakes', 'Alpine and Berber towns', 'Full-day adventure'],
    description:
      'The full Middle Atlas loop is the ultimate day trip from Fes for nature lovers, combining the best of the Middle Atlas in one circular route. The typical itinerary runs south from Fes to Immouzzer Kandar, continues to Ifrane, then southeast to the Cedre Gouraud cedar forest for Barbary macaques, through Azrou for its Berber market, and back to Fes via the N8. This full-day circuit passes through some of Morocco\'s most varied landscapes: from the Saiss plain to mountain lakes, alpine towns, ancient forests, and Berber highlands.',
    transport: 'Best done by rental car or guided tour as the loop covers multiple stops. By grand taxi, you would need to arrange separate taxis for each leg. A rental car gives maximum flexibility for stops.',
    tip: 'Start early (8 AM) to complete the full loop comfortably. Pack a picnic to eat at one of the forest clearings. The loop works equally well in either direction. In winter, check road conditions as snow can close mountain passes.',
    guidedIncludes: 'Hotel pickup in Fes, full-day transport, guide, all stops, and lunch at a local restaurant in Azrou or Ifrane',
  },
] as const;

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { trip: 'Meknes & Volubilis', distance: '60 + 33 km', time: '2 hrs total', guidedPrice: 'From 450 MAD', diyPrice: 'From 100 MAD', difficulty: 'Easy' },
  { trip: 'Ifrane', distance: '60 km', time: '1 hr', guidedPrice: 'From 400 MAD', diyPrice: 'From 35 MAD', difficulty: 'Easy' },
  { trip: 'Cedar Forests & Azrou', distance: '75 km', time: '1.5 hrs', guidedPrice: 'From 450 MAD', diyPrice: 'From 50 MAD', difficulty: 'Easy' },
  { trip: 'Moulay Idriss Zerhoun', distance: '55 km', time: '1 hr', guidedPrice: 'From 350 MAD', diyPrice: 'From 50 MAD', difficulty: 'Easy' },
  { trip: 'Sefrou', distance: '28 km', time: '30 min', guidedPrice: 'From 300 MAD', diyPrice: 'From 20 MAD', difficulty: 'Easy' },
  { trip: 'Bhalil', distance: '30 km', time: '35 min', guidedPrice: 'From 300 MAD', diyPrice: 'From 20 MAD', difficulty: 'Easy' },
  { trip: 'Taza', distance: '120 km', time: '1.5 hrs', guidedPrice: 'From 500 MAD', diyPrice: 'From 60 MAD', difficulty: 'Moderate' },
  { trip: 'Sidi Harazem', distance: '15 km', time: '20 min', guidedPrice: 'From 200 MAD', diyPrice: 'From 10 MAD', difficulty: 'Easy' },
  { trip: 'Immouzzer Kandar', distance: '45 km', time: '45 min', guidedPrice: 'From 300 MAD', diyPrice: 'From 25 MAD', difficulty: 'Easy' },
  { trip: 'Full Middle Atlas Loop', distance: '160 km loop', time: '3-4 hrs', guidedPrice: 'From 550 MAD', diyPrice: 'From 150 MAD', difficulty: 'Full day' },
];

/* ===============================================================
   DATA: SEASONAL GUIDE
   =============================================================== */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    temp: '18-28 C',
    description: 'The best season for most day trips from Fes. Wildflowers carpet the Middle Atlas, Volubilis fields are green, and temperatures are perfect. Cherry blossoms in Sefrou add color.',
    bestTrips: ['Volubilis (green fields, wildflowers)', 'Middle Atlas (spring blooms)', 'Moulay Idriss (pleasant walks)', 'Sefrou (cherry blossom season)'],
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    temp: '33-42 C',
    description: 'Fes is extremely hot in summer, making mountain day trips essential for relief. Ifrane and the cedar forests are 10-15 degrees cooler. Sidi Harazem springs are popular for cooling off.',
    bestTrips: ['Ifrane (cool mountain escape)', 'Cedar forests (shade and altitude)', 'Sidi Harazem (thermal pools)', 'Sefrou Cherry Festival (June)'],
  },
  {
    season: 'Autumn (September-November)',
    icon: Calendar,
    temp: '18-30 C',
    description: 'Excellent for day trips with warm but comfortable temperatures and fewer tourists. The cedar forests show autumn colors, and Immouzzer Kandar celebrates its Apple Festival in October.',
    bestTrips: ['Full Middle Atlas loop (autumn colors)', 'Immouzzer Kandar (Apple Festival)', 'Taza (comfortable for cave exploration)', 'Bhalil (mild weather for walking)'],
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    temp: '8-16 C',
    description: 'Mild in Fes with cool evenings. Snow covers Ifrane and the cedar forests, creating a magical landscape. Fewer tourists at Volubilis and Meknes mean a more intimate experience.',
    bestTrips: ['Meknes (mild weather, few crowds)', 'Volubilis (peaceful visit)', 'Ifrane (snow-covered charm)', 'Sidi Harazem (warm thermal waters)'],
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What are the best day trips from Fes?',
    answer:
      'The most popular day trips from Fes are Meknes and Volubilis (Roman ruins and imperial city, 1-2 hours away), Ifrane (alpine hill town, 1 hour), Middle Atlas cedar forests with Barbary macaques near Azrou (1.5 hours), and Moulay Idriss Zerhoun (Morocco\'s holiest town, 1 hour). For a shorter trip, Sefrou, Bhalil, and Sidi Harazem are all within 30-35 minutes of Fes.',
  },
  {
    question: 'How much do day trips from Fes cost?',
    answer:
      'DIY day trips can cost as little as from 10 MAD per person for Sidi Harazem (grand taxi fare). Guided group day tours range from 300 MAD to 550 MAD per person depending on the destination and inclusions. The most popular guided trip (Meknes and Volubilis) is typically from 450 MAD with lunch included. Private guided tours start from 1,000 MAD per vehicle. Prices are seasonal and may change during peak periods.',
  },
  {
    question: 'Can I visit Meknes and Volubilis in one day from Fes?',
    answer:
      'Yes, this is the most popular day trip from Fes and works perfectly as a single-day excursion. Most tours visit Volubilis first in the morning, then continue to Meknes for lunch and sightseeing. By DIY, take a grand taxi to Meknes (from 30 MAD, 1 hour), then another to Volubilis (from 40 MAD). By car, the total driving is about 2 hours. Allow 2 hours at Volubilis and 3-4 hours in Meknes.',
  },
  {
    question: 'How do I get to Ifrane from Fes?',
    answer:
      'Grand taxis from Fes to Ifrane depart from the main taxi station and cost from 35 MAD per person (1 hour). CTM buses also run the route. By car, take the N8 highway south; the road is modern and well-maintained. You can combine Ifrane with Azrou and the cedar forests for a full Middle Atlas day trip. Guided tours including all stops cost from 400 MAD per person.',
  },
  {
    question: 'What is the best season for day trips from Fes?',
    answer:
      'Spring (March-May) and autumn (September-November) offer the most pleasant temperatures and scenery. Summer (June-August) is very hot in Fes (35-40C) but Middle Atlas destinations like Ifrane offer cool relief. Winter is mild in Fes but cold in the mountains, with snow adding charm to Ifrane. The Cherry Festival in Sefrou (June) and Apple Festival in Immouzzer Kandar (October) are seasonal highlights.',
  },
  {
    question: 'Where can I see Barbary macaques near Fes?',
    answer:
      'Barbary macaques live in the cedar forests near Azrou, about 75 km south of Fes. The Cedre Gouraud forest is the most reliable spot. Most Ifrane/Middle Atlas tours include this stop. You can also drive yourself and park at the forest viewpoints along the N13. The monkeys are usually visible from the roadside. Do not feed them as it is harmful and can make them aggressive.',
  },
  {
    question: 'Is Moulay Idriss Zerhoun worth visiting?',
    answer:
      'Absolutely. Moulay Idriss Zerhoun is Morocco\'s holiest town, built around the tomb of the founder of the first Moroccan dynasty. The hilltop setting offers stunning panoramic views, the whitewashed medina is atmospheric, and the town sees few tourists. Non-Muslims cannot enter the shrine, but the town is wonderful to explore. It is easily combined with Volubilis, only 4 km away, for a half-day cultural trip.',
  },
  {
    question: 'Should I book a guided tour or go independently from Fes?',
    answer:
      'For Meknes alone, Sefrou, and Sidi Harazem, going independently by grand taxi is simple and much cheaper. For the Meknes-Volubilis combination, a guided tour is more convenient. For Ifrane, Azrou, and the cedar forests, a tour provides a logical loop route. For Bhalil and Taza, independent travel works but a guide adds valuable context. Most riad owners in Fes can arrange tours the day before your trip.',
  },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function DayTripsFromFesPage() {
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
            backgroundImage: 'url(/images/hero-fes-medina.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Day Trips from Fes</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Excursions &amp; Day Tours
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Day Trips from Fes
            <br className="hidden md:block" /> in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            10 incredible day trips from Roman ruins and imperial cities to cedar forests,
            mountain lakes, and ancient cave houses. Guided tours from 200 MAD, DIY from 10 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Fes Is an Excellent Base for Day Trips
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Fes sits at a geographical crossroads between the Rif Mountains to the north,
                the Middle Atlas to the south, and the fertile Saiss plain stretching west toward
                Meknes. This strategic position makes it one of Morocco&apos;s best bases for day
                trips, with imperial cities, Roman ruins, alpine hill towns, ancient cedar forests,
                and hidden villages all within a 1-2 hour drive.
              </p>
              <p>
                Unlike Marrakech, where the main day trips require long drives over mountain passes,
                many of Fes&apos;s best excursions are remarkably close. Sefrou and Bhalil are just
                30 minutes away, Meknes is an hour by train, and even the cedar forests with their
                Barbary macaques are only 1.5 hours south. This means less time on the road and
                more time exploring.
              </p>
              <p>
                This guide covers the 10 best day trips from Fes with honest advice on transport
                options, costs, what is included on guided tours, the best season for each trip,
                and whether to go DIY or book a tour.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Quick Stats -- */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">10</div>
              <div className="text-sm text-[var(--text-muted)]">Day trip destinations</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">20 min</div>
              <div className="text-sm text-[var(--text-muted)]">Closest trip</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">10 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Cheapest DIY trip</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">200 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Guided tours from</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day Trip Cards -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            10 Best Day Trips from Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From 20-minute escapes to full-day adventures, these are the top excursions from Fes for every type of traveler.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary by season, group size, and provider. Always confirm current rates before booking.
          </p>

          <div className="space-y-8">
            {dayTrips.map((trip, index) => {
              const TripIcon = trip.icon;
              return (
                <div key={trip.name} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-5 text-white">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-sm font-bold">
                        {index + 1}
                      </span>
                      <TripIcon className="w-6 h-6" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">{trip.name}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mt-2">
                      <span className="flex items-center gap-1"><Navigation className="w-3.5 h-3.5" /> {trip.distance}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> Guided: {trip.guidedPrice}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {trip.bestSeason}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mb-5">
                      <DollarSign className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-sm font-medium text-[var(--text-primary)]">
                        Guided: {trip.guidedPrice} per person | DIY: {trip.diyPrice} per person
                      </p>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-5">{trip.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Highlights</h4>
                        <div className="space-y-2">
                          {trip.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Getting There</h4>
                        <p className="text-sm text-[var(--text-secondary)] mb-3">{trip.transport}</p>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Guided Tour Includes</h4>
                        <p className="text-sm text-[var(--text-secondary)]">{trip.guidedIncludes}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {trip.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Comparison Table -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Comparison Table
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All 10 day trips at a glance with distances, prices, and difficulty levels.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="card-moroccan overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Day Trip</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Distance</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Drive Time</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Guided Price</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">DIY Price</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Difficulty</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.trip} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 font-medium text-[var(--text-primary)]">{row.trip}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.distance}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.time}</td>
                      <td className="p-3 text-[var(--color-accent)] font-medium">{row.guidedPrice}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.diyPrice}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.difficulty}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)] max-w-lg mx-auto mt-4">
            <Info className="w-3 h-3 inline mr-1" />
            Guided prices are per person for group tours. Private tours are typically 2-3x higher.
            All prices are starting prices and seasonal pricing may apply.
          </p>
        </div>
      </section>

      {/* -- DIY vs Guided -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            DIY vs Guided Tours: Which Should You Choose?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Many day trips from Fes are easy to do independently by grand taxi or train. Others benefit from a guide and organized transport.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Car className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Best for DIY
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Meknes</strong> - Train from 25 MAD or grand taxi from 30 MAD, 1 hour</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Sefrou</strong> - Grand taxi from 20 MAD, just 30 minutes away</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Sidi Harazem</strong> - Grand taxi from 10 MAD, 20 minutes</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Bhalil</strong> - Grand taxi from 20 MAD, combine with Sefrou</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                  DIY saves 60-80% compared to guided tours and many Fes day trips have excellent public transport links.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <Shield className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Better with a Guide
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Meknes + Volubilis</strong> - Volubilis is remote, guide explains ruins</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Middle Atlas Loop</strong> - Multiple stops, guide plans the route</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Taza + Friouato Caves</strong> - Caves require a guide for safety</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Cedar Forests</strong> - Guide finds the best macaque spots</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                  Guided tours include hotel pickup, knowledgeable guides, and often lunch. Book through your riad or a reputable agency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Transport Options -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting Around: Transport from Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fes has excellent transport connections to nearby cities and towns. Here are your options for each mode.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Car className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Grand Taxis</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Shared taxis (6 passengers) depart from the main gare routiere when full. The cheapest and most flexible option for most destinations. Fares are fixed per route.
              </p>
              <div className="space-y-1 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Meknes: from 30 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Ifrane: from 35 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Sefrou: from 20 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Sidi Harazem: from 10 MAD</div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Bus className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Trains & Buses</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                ONCF trains serve Meknes (from 25 MAD, 50 min) and Taza (from 50 MAD, 1.5 hrs). CTM and Supratours buses cover wider routes including Ifrane and Azrou.
              </p>
              <div className="space-y-1 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Train to Meknes: from 25 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Train to Taza: from 50 MAD</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> CTM bus to Ifrane: from 40 MAD</div>
              </div>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Rental Car</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The best option for the Middle Atlas loop and multi-stop trips. Rental cars from 300 MAD/day from agencies near Fes train station. Roads are generally well-maintained.
              </p>
              <div className="space-y-1 text-xs text-[var(--text-muted)]">
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Best for: Middle Atlas loop</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Best for: Volubilis access</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[var(--color-gold)]" /> Best for: Flexible schedules</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Seasonal Guide -- */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Each Day Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Fes has hot summers and mild winters, while the Middle Atlas mountains add altitude and cooler temperatures to the mix.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {seasonalGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {season.season}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Thermometer className="w-3 h-3" />
                        {season.temp}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{season.description}</p>
                  <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Best Trips This Season</h4>
                  <div className="space-y-1.5">
                    {season.bestTrips.map((trip, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {trip}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gallery -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Landscapes Around Fes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-volubilis-ruins.webp"
                alt="Volubilis Roman ruins with ancient columns and mosaic floors against blue Moroccan sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Volubilis Roman Ruins</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ifrane-cedar-forest.webp"
                alt="Ancient cedar trees in the Middle Atlas forest near Ifrane with dappled sunlight"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Middle Atlas Cedar Forest</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-meknes-gate.webp"
                alt="Bab Mansour grand gate in Meknes with intricate zellige tilework and carved stucco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Bab Mansour, Meknes</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Day Trips from Fes
          </h2>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Book tours through your riad or a reputable agency; avoid street touts near Bab Bou Jeloud
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Start early (7-8 AM) to make the most of your day and avoid midday heat in summer
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Bring cash in small denominations for grand taxis, tips, entry fees, and local purchases
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Carry sunscreen, a hat, and water, especially at Volubilis where there is no shade
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Grand taxis leave when full (6 passengers); arrive early for popular routes
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Confirm tour price includes lunch, transport, and entry fees before booking
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Dress modestly at Moulay Idriss Zerhoun and around religious sites
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Bring warm layers for Middle Atlas trips as mountain temperatures are 10-15C cooler than Fes
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
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/fes-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Fes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about Fes: medina, tanneries, riads, food, and practical travel tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/things-to-do-fes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Things to Do in Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to attractions, activities, and experiences within the Fes medina and beyond.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                12 best day trips from Marrakech including Ouzoud Falls, Ourika Valley, Essaouira, and Ait Ben Haddou.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-road-trip-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Road Trip Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Self-drive routes, rental car tips, road conditions, and scenic driving itineraries across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/meknes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Camera className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Meknes City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Imperial city of Moulay Ismail: Bab Mansour, granaries, medina, and Morocco&apos;s underrated gem.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/public-transport" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Public Transport in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, grand taxis, and getting around Morocco on a budget with practical transport tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

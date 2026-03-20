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
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Mountain,
  Sun,
  Compass,
  Calendar,
  Thermometer,
  Car,
  Navigation,
  Bus,
  Map,
  Camera,
  Droplets,
  Waves,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Best Day Trips from Marrakech 2026 | Top 12 Excursions, Prices & Tips',
  description:
    'Discover the 12 best day trips from Marrakech in 2026. Ouzoud Falls, Ourika Valley, Essaouira, Ait Ben Haddou, Imlil, Agafay Desert, and more. Prices from 150 MAD, guided tours from 350 MAD. DIY and guided options compared.',
  keywords: [
    'day trips from Marrakech',
    'Marrakech excursions',
    'best day trips Marrakech',
    'Marrakech day tour',
    'Ouzoud Falls from Marrakech',
    'Ourika Valley day trip',
    'Essaouira from Marrakech',
    'Ait Ben Haddou day trip',
    'Imlil from Marrakech',
    'Agafay Desert Marrakech',
    'Marrakech day trips 2026',
    'things to do near Marrakech',
    'Marrakech excursion prices',
    'guided tours from Marrakech',
    'DIY day trips Marrakech',
    'Atlas Mountains from Marrakech',
    'Paradise Valley Marrakech',
    'Lalla Takerkoust lake',
  ],
  openGraph: {
    title: 'Best Day Trips from Marrakech 2026 | Top 12 Excursions & Prices',
    description:
      'The 12 best day trips from Marrakech with prices, transport options, and insider tips. From Ouzoud Falls to Essaouira, Ourika Valley to the Agafay Desert. DIY and guided tours compared.',
    url: `${BASE_URL}/day-trips-from-marrakech`,
    images: [
      {
        url: `${BASE_URL}/images/hero-atlas.webp`,
        width: 1200,
        height: 630,
        alt: 'Atlas Mountains landscape near Marrakech with traditional Berber villages and terraced valleys',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Trips from Marrakech 2026 | Top 12 Excursions',
    description:
      'Ouzoud Falls, Essaouira, Ourika Valley, Ait Ben Haddou, Imlil, Agafay Desert & more. Complete guide with prices from 150 MAD.',
    images: [`${BASE_URL}/images/hero-atlas.webp`],
  },
  alternates: { canonical: `${BASE_URL}/day-trips-from-marrakech` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/day-trips-from-marrakech`,
  name: 'Best Day Trips from Marrakech 2026 | Top 12 Excursions, Prices & Tips',
  description:
    'Complete guide to the 12 best day trips from Marrakech including Ouzoud Falls, Ourika Valley, Essaouira, Ait Ben Haddou, Imlil, Agafay Desert, and more. Prices, transport, DIY vs guided options.',
  url: `${BASE_URL}/day-trips-from-marrakech`,
  image: `${BASE_URL}/images/hero-atlas.webp`,
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
  mainEntityOfPage: `${BASE_URL}/day-trips-from-marrakech`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Marrakech' },
    { '@type': 'Place', name: 'Atlas Mountains' },
    { '@type': 'Place', name: 'Ouzoud Falls' },
    { '@type': 'City', name: 'Essaouira' },
    { '@type': 'Place', name: 'Ait Ben Haddou' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Day Trips from Marrakech', item: `${BASE_URL}/day-trips-from-marrakech` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best day trips from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular day trips from Marrakech are Ouzoud Falls (stunning waterfalls), Ourika Valley (easy Atlas Mountains escape), Essaouira (coastal town), Ait Ben Haddou (UNESCO kasbah), and Imlil (gateway to Mount Toubkal). Other excellent options include Agafay Desert, Paradise Valley, Ouarzazate, Imi n\'Ifri, and Lalla Takerkoust lake.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do day trips from Marrakech cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY day trips can cost as little as 150-300 MAD per person for transport and entry fees. Guided group tours range from 350 MAD to 800 MAD per person depending on the destination and inclusions. Private tours start from 1,200 MAD for 1-2 people. Essaouira and Ait Ben Haddou guided tours are typically from 450-600 MAD per person including lunch.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I do day trips from Marrakech without a guide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many day trips are easy to do independently. Ourika Valley and Lalla Takerkoust are reachable by shared taxi (grand taxi) for as little as 25-40 MAD. Essaouira has regular CTM and Supratours buses from 80 MAD one-way. However, Ouzoud Falls and Ait Ben Haddou are harder without a car, so a guided tour or rental car is recommended.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best day trip from Marrakech for families?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ourika Valley is ideal for families: it is only 45 minutes from Marrakech, offers gentle walks along the river, Berber village visits, and local restaurants. Lalla Takerkoust lake is another family-friendly option with boat rides, swimming, and lakeside cafes. For older children, Ouzoud Falls combines hiking and wildlife (Barbary macaques).',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Essaouira from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira is approximately 190 km from Marrakech (2.5-3 hours by car or bus). The drive is straightforward on a modern road. CTM and Supratours buses run multiple times daily from 80 MAD one-way. It makes a long but rewarding day trip, or you can stay overnight for a more relaxed visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Ouzoud Falls worth visiting from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Ouzoud Falls is the most spectacular waterfall in North Africa at 110 meters high. The trip takes about 2.5 hours each way from Marrakech. You can swim in the natural pools at the base, spot Barbary macaques, and take a boat ride. Most visitors spend 2-3 hours at the falls. Go on weekdays to avoid crowds.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season for day trips from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) are ideal: pleasant temperatures, fewer crowds, and green landscapes. Summer (June-August) is extremely hot in Marrakech (40+C), though mountain trips to Ourika and Imlil offer cool relief. Winter (December-February) is mild in Marrakech but cold in the mountains with possible snow above 2,000 meters.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I book a guided tour or go independently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the destination. For Ourika Valley, Essaouira, and Lalla Takerkoust, going independently is easy and cheaper. For Ouzoud Falls, Ait Ben Haddou, and Ouarzazate, a guided tour is more practical as public transport is limited. For Imlil and Atlas Mountains, a guide adds cultural insight and ensures safety on mountain trails.',
      },
    },
  ],
};

/* ===============================================================
   DATA: DAY TRIPS
   =============================================================== */

const dayTrips = [
  {
    name: 'Ouzoud Falls',
    icon: Droplets,
    distance: '150 km (2.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 150 MAD',
    bestSeason: 'Spring (March-May)',
    highlights: ['110-meter cascading waterfalls', 'Barbary macaque monkeys', 'Natural swimming pools', 'Boat rides at the base', 'Rainbow mist in sunlight'],
    description:
      'Ouzoud Falls is the most dramatic natural attraction near Marrakech and the tallest waterfall in North Africa. The falls cascade 110 meters down through olive groves into a deep gorge where you can swim, take a small boat ride, and spot wild Barbary macaques swinging through the trees. The path down to the base takes about 20 minutes and is well-maintained with cafes along the way.',
    transport: 'No direct public bus. Grand taxis from Bab Ghmat are unreliable. Best by guided tour or rental car. Drive via Beni Mellal road (N8 then R304).',
    tip: 'Visit on a weekday to avoid weekend crowds from Casablanca and Beni Mellal. The falls are most powerful in spring after winter rains. Bring a swimsuit for the pools at the base.',
    guidedIncludes: 'Hotel pickup, transport, guide, lunch, and boat ride at the falls',
  },
  {
    name: 'Ourika Valley',
    icon: Mountain,
    distance: '45 km (1 hour)',
    guidedPrice: 'From 350 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Year-round (best spring)',
    highlights: ['Atlas Mountain scenery', 'Berber villages', 'Seven small waterfalls', 'Saffron garden visits', 'River-side restaurants'],
    description:
      'The Ourika Valley is the easiest and closest Atlas Mountains escape from Marrakech. The road follows the Ourika River upstream through a lush valley dotted with traditional Berber villages, terraced farms, and small waterfalls. At the end of the road, a 45-minute hike leads to the Setti Fatma waterfalls. The valley floor has excellent riverside restaurants where you can eat tagine with your feet almost in the water.',
    transport: 'Shared grand taxis from Bab Rob in Marrakech cost from 25-40 MAD per person. They run frequently throughout the day. Return taxis are easy to find in the valley.',
    tip: 'Combine with a visit to a traditional Berber house and an argan or saffron cooperative. Go early to avoid afternoon heat in summer. Flash floods can occur in autumn; check conditions.',
    guidedIncludes: 'Hotel pickup, transport, Berber village visit, lunch, and saffron garden tour',
  },
  {
    name: 'Essaouira',
    icon: Waves,
    distance: '190 km (2.5-3 hours)',
    guidedPrice: 'From 450 MAD',
    diyPrice: 'From 160 MAD',
    bestSeason: 'Year-round',
    highlights: ['Historic Portuguese ramparts', 'Active fishing port', 'Blue-and-white medina', 'Fresh seafood grills', 'Art galleries and wind surfing'],
    description:
      'Essaouira is a laid-back Atlantic coast town that offers a complete contrast to the heat and intensity of Marrakech. The UNESCO-listed medina is painted in blue and white, the fishing port is alive with activity, and the wide beach stretches for miles. It is windier and cooler than Marrakech, which makes it a perfect summer escape. The medina is compact and easy to explore on foot without getting lost.',
    transport: 'CTM and Supratours buses from Marrakech bus station from 80 MAD one-way, 2.5 hours. Runs multiple times daily. By car, the road is modern and fast. Grand taxis also available.',
    tip: 'This is a long day trip (5-6 hours of travel). Consider staying overnight for a more relaxed visit. Budget at least 3-4 hours to explore the medina, port, and eat fresh seafood.',
    guidedIncludes: 'Hotel pickup, transport, guided medina walk, argan cooperative visit, free time, and sometimes lunch',
  },
  {
    name: 'Ait Ben Haddou',
    icon: Camera,
    distance: '185 km (3.5 hours)',
    guidedPrice: 'From 500 MAD',
    diyPrice: 'From 250 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['UNESCO World Heritage Site', 'Game of Thrones filming location', 'Ancient ksar (fortified village)', 'Panoramic desert views', 'Local artisan workshops'],
    description:
      'Ait Ben Haddou is Morocco\'s most famous kasbah and a UNESCO World Heritage Site. This stunning fortified village of red earth buildings has been used as a filming location for Gladiator, Game of Thrones, and Lawrence of Arabia. The ksar sits on a hillside overlooking the Ounila River valley with dramatic desert mountains behind. You can walk through the narrow lanes, climb to the top for panoramic views, and visit artisan workshops.',
    transport: 'No direct public transport. Drive via the Tizi n\'Tichka pass (N9) or take a guided tour. The road is mountainous but well-maintained. Some tours combine with Ouarzazate.',
    tip: 'Visit early morning for the best light on the kasbah and fewer tour groups. The drive over the Tizi n\'Tichka pass is spectacular in itself. Combine with a stop at the Ouarzazate film studios for a full day.',
    guidedIncludes: 'Hotel pickup, transport over Atlas Mountains, local guide at the ksar, lunch, and sometimes Ouarzazate visit',
  },
  {
    name: 'Imlil & Toubkal Region',
    icon: Mountain,
    distance: '65 km (1.5 hours)',
    guidedPrice: 'From 450 MAD',
    diyPrice: 'From 100 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Gateway to Mount Toubkal', 'Berber mountain villages', 'Walnut and apple orchards', 'Mule trek options', 'Traditional gite lunch'],
    description:
      'Imlil is a small Berber village nestled at 1,740 meters in the High Atlas, serving as the base for climbing Mount Toubkal (4,167 m), North Africa\'s highest peak. Even without climbing Toubkal, Imlil makes an excellent day trip for its mountain scenery, traditional villages, and fresh air. A popular half-day hike goes from Imlil to the village of Armed (1 hour each way), passing through walnut groves with views of Toubkal.',
    transport: 'Grand taxis from Marrakech to Asni (from 30 MAD), then transfer to Imlil (from 20 MAD). By car, drive via Asni on the Tizi n\'Test road (S501). Parking available in Imlil.',
    tip: 'Hire a local guide in Imlil (from 300 MAD/day) for the best experience. They know hidden trails and can arrange lunch in a Berber home. Snow blocks higher trails December-March.',
    guidedIncludes: 'Hotel pickup, transport, licensed mountain guide, village visit, and traditional Berber lunch',
  },
  {
    name: 'Agafay Desert',
    icon: Sun,
    distance: '40 km (45 minutes)',
    guidedPrice: 'From 600 MAD',
    diyPrice: 'From 200 MAD',
    bestSeason: 'Year-round (avoid summer midday)',
    highlights: ['Rocky desert landscape', 'Sunset camel rides', 'Luxury desert camps', 'Quad biking and buggy rides', 'Atlas Mountain views'],
    description:
      'The Agafay Desert is a rocky, lunar-like landscape just 45 minutes from Marrakech that offers a taste of the desert without the 10-hour drive to the Sahara. While not a sand desert (it is more of an arid stony plain), Agafay has dramatic scenery with the Atlas Mountains as a backdrop. Most visitors come for sunset camel rides, quad biking, or an overnight stay in one of the luxury glamping camps.',
    transport: 'No public transport. Drive via the road to Amizmiz or take a guided tour. Most tours include hotel pickup. Taxis can take you but negotiate a return pickup time.',
    tip: 'The best experience is an overnight stay at a desert camp, but a half-day sunset trip works well as a day excursion. Combine with a camel ride and traditional dinner for the full experience.',
    guidedIncludes: 'Hotel pickup, transport, camel ride, quad biking option, Berber tea, and sunset dinner',
  },
  {
    name: 'Ouarzazate',
    icon: Camera,
    distance: '200 km (4 hours)',
    guidedPrice: 'From 550 MAD',
    diyPrice: 'From 250 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Atlas Film Studios', 'Kasbah Taourirt', 'Gateway to the Sahara', 'Cinema Museum', 'Draa Valley views'],
    description:
      'Known as the "Hollywood of Africa," Ouarzazate is home to the Atlas Film Studios where movies like Gladiator, Kingdom of Heaven, and The Mummy were filmed. The town sits on the edge of the desert beyond the Atlas Mountains and serves as the gateway to the Sahara. The Kasbah Taourirt in the town center is worth exploring, and the drive over the Tizi n\'Tichka pass is one of Morocco\'s most scenic roads.',
    transport: 'CTM and Supratours buses from Marrakech (from 90 MAD, 4 hours). By car via N9 over Tizi n\'Tichka pass. Often combined with Ait Ben Haddou.',
    tip: 'This is a very long day trip. Most travelers combine Ouarzazate with Ait Ben Haddou in a single guided tour. Consider an overnight stay to break up the journey and visit the film studios without rushing.',
    guidedIncludes: 'Hotel pickup, transport, film studios entry, Ait Ben Haddou visit, guide, and lunch',
  },
  {
    name: 'Paradise Valley',
    icon: Droplets,
    distance: '185 km (2.5 hours)',
    guidedPrice: 'From 500 MAD',
    diyPrice: 'From 200 MAD',
    bestSeason: 'Spring & summer (May-September)',
    highlights: ['Natural rock pools', 'Crystal-clear swimming', 'Palm-lined gorge', 'Cliff jumping spots', 'Peaceful mountain setting'],
    description:
      'Paradise Valley is a hidden gorge between Marrakech and Agadir filled with natural rock pools, palm trees, and crystal-clear water perfect for swimming. The valley is reached by a short hike from the road (about 30 minutes) through a beautiful palm-shaded canyon. The rock pools are deep enough for swimming and there are natural cliff-jumping spots for the adventurous. Local guides at the trailhead will show you the best pools.',
    transport: 'No public transport. Drive via the Agadir road, turning off near Imouzzer Ida Outanane. Best with a rental car or guided tour. The last section is a rough track.',
    tip: 'Bring water shoes for the rocky riverbed. Visit between May and September when the pools are fullest and the weather is warm enough for swimming. The pools can be crowded on weekends.',
    guidedIncludes: 'Hotel pickup, transport, local guide, swimming time, and sometimes lunch at a local restaurant',
  },
  {
    name: 'Imi n\'Ifri (Natural Bridge)',
    icon: Mountain,
    distance: '80 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 100 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Natural rock bridge', 'Cathedral-like cave', 'Stalactites and stalagmites', 'River canyon walk', 'Birdwatching'],
    description:
      'Imi n\'Ifri, meaning "Mouth of the Cave" in Berber, is a spectacular natural rock bridge and cave near the town of Demnate. The massive natural arch spans a river gorge and contains a cathedral-like cavern with stalactites, nesting birds, and dappled light. It is one of Morocco\'s most impressive geological formations and remains relatively unknown to tourists. The walk from the parking area takes about 15 minutes.',
    transport: 'No direct public transport to the site. Grand taxis to Demnate from Marrakech (from 50 MAD) then a local taxi to Imi n\'Ifri (from 30 MAD). Best by car or guided tour.',
    tip: 'Combine with a visit to the town of Demnate, known for its pottery and olive oil. Bring a flashlight to explore deeper into the cave. The site is peaceful on weekdays with almost no other visitors.',
    guidedIncludes: 'Hotel pickup, transport, local guide, Demnate town visit, and lunch',
  },
  {
    name: 'Lalla Takerkoust Lake',
    icon: Waves,
    distance: '40 km (45 minutes)',
    guidedPrice: 'From 350 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Year-round',
    highlights: ['Lake and Atlas views', 'Jet skiing and boat rides', 'Lakeside restaurants', 'Camel rides', 'Family-friendly activities'],
    description:
      'Lalla Takerkoust is a large artificial lake just 45 minutes south of Marrakech, backed by the snow-capped Atlas Mountains. The lake is a popular local escape with jet skiing, boat rides, and camel treks along the shore. Several lakeside restaurants serve excellent Moroccan food with views of the water and mountains. It is one of the closest and easiest day trips from Marrakech, perfect for families.',
    transport: 'Grand taxis from Marrakech (from 30 MAD per person). By car, drive south via the road to Amizmiz. Some tours combine with Agafay Desert or Kik Plateau.',
    tip: 'Visit on a weekday for a quieter experience. The water level varies by season; spring has the most water. Combine with Agafay Desert for a full day of desert and lake scenery.',
    guidedIncludes: 'Hotel pickup, transport, boat ride, camel trek, and lunch at a lakeside restaurant',
  },
  {
    name: 'Three Valleys & Atlas Mountains',
    icon: Compass,
    distance: '60 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 100 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Asni, Ouirgane, and Imlil valleys', 'Berber market visits', 'Mountain panoramas', 'Argan oil cooperatives', 'Traditional Berber lunch'],
    description:
      'The "Three Valleys" tour is one of the most popular organized day trips from Marrakech, taking you through three distinct Atlas Mountain valleys: Asni, Ouirgane, and Imlil. Each valley has its own character, from the bustling Saturday market at Asni to the peaceful lake at Ouirgane and the mountain village of Imlil. The tour provides a well-rounded introduction to Berber culture and Atlas Mountain life.',
    transport: 'Best as a guided tour for the three-valley combination. By car, drive south on the Tizi n\'Test road. Grand taxis serve Asni directly from Marrakech.',
    tip: 'Try to visit on a Saturday when Asni has its vibrant weekly market. Each valley is interesting in its own right, so do not rush. The Ouirgane valley is the most peaceful and least visited.',
    guidedIncludes: 'Hotel pickup, transport through three valleys, Berber village visits, argan cooperative, and traditional lunch',
  },
  {
    name: 'Kik Plateau & Atlas Views',
    icon: Map,
    distance: '55 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 80 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Panoramic Atlas views', 'Traditional Berber villages', 'Rolling plateau landscape', 'Off-the-beaten-path feel', 'Photography opportunities'],
    description:
      'The Kik Plateau is an elevated tableland south of Marrakech that offers some of the most spectacular panoramic views of the High Atlas Mountains. Unlike the more popular Ourika Valley, the Kik Plateau sees far fewer tourists, giving you an authentic glimpse of rural Berber life. The plateau is dotted with small villages, grazing flocks, and ancient stone walls, all set against the dramatic backdrop of snow-capped peaks.',
    transport: 'No public transport. Drive via the Amizmiz road, turning off onto a plateau track. A 4x4 or high-clearance vehicle is recommended. Best as a guided tour.',
    tip: 'Combine with Lalla Takerkoust lake for a full day. The plateau is windy; bring a light jacket even in summer. Sunset from the Kik Plateau is extraordinary.',
    guidedIncludes: 'Hotel pickup, 4x4 transport, Berber village visit, panoramic stops, and traditional lunch',
  },
] as const;

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { trip: 'Ouzoud Falls', distance: '150 km', time: '2.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 150 MAD', difficulty: 'Easy' },
  { trip: 'Ourika Valley', distance: '45 km', time: '1 hr', guidedPrice: 'From 350 MAD', diyPrice: 'From 50 MAD', difficulty: 'Easy' },
  { trip: 'Essaouira', distance: '190 km', time: '2.5 hrs', guidedPrice: 'From 450 MAD', diyPrice: 'From 160 MAD', difficulty: 'Easy' },
  { trip: 'Ait Ben Haddou', distance: '185 km', time: '3.5 hrs', guidedPrice: 'From 500 MAD', diyPrice: 'From 250 MAD', difficulty: 'Moderate' },
  { trip: 'Imlil / Toubkal', distance: '65 km', time: '1.5 hrs', guidedPrice: 'From 450 MAD', diyPrice: 'From 100 MAD', difficulty: 'Moderate' },
  { trip: 'Agafay Desert', distance: '40 km', time: '45 min', guidedPrice: 'From 600 MAD', diyPrice: 'From 200 MAD', difficulty: 'Easy' },
  { trip: 'Ouarzazate', distance: '200 km', time: '4 hrs', guidedPrice: 'From 550 MAD', diyPrice: 'From 250 MAD', difficulty: 'Long day' },
  { trip: 'Paradise Valley', distance: '185 km', time: '2.5 hrs', guidedPrice: 'From 500 MAD', diyPrice: 'From 200 MAD', difficulty: 'Moderate' },
  { trip: 'Imi n\'Ifri', distance: '80 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 100 MAD', difficulty: 'Easy' },
  { trip: 'Lalla Takerkoust', distance: '40 km', time: '45 min', guidedPrice: 'From 350 MAD', diyPrice: 'From 50 MAD', difficulty: 'Easy' },
  { trip: 'Three Valleys', distance: '60 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 100 MAD', difficulty: 'Easy' },
  { trip: 'Kik Plateau', distance: '55 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 80 MAD', difficulty: 'Moderate' },
];

/* ===============================================================
   DATA: SEASONAL GUIDE
   =============================================================== */

const seasonalGuide = [
  {
    season: 'Spring (March-May)',
    icon: Sun,
    temp: '20-30 C',
    description: 'The best season for most day trips. Wildflowers in the Atlas, full waterfalls at Ouzoud, and pleasant temperatures everywhere. Green landscapes and clear mountain views.',
    bestTrips: ['Ouzoud Falls (peak flow)', 'Ourika Valley (wildflowers)', 'Imlil (snow-capped peaks)', 'Ait Ben Haddou (comfortable temps)'],
  },
  {
    season: 'Summer (June-August)',
    icon: Thermometer,
    temp: '35-45 C',
    description: 'Extremely hot in Marrakech and desert areas. Mountain and water day trips provide welcome relief. Essaouira\'s coastal breeze is a perfect escape from the heat.',
    bestTrips: ['Essaouira (cool sea breeze)', 'Paradise Valley (swimming)', 'Ourika Valley (cooler altitude)', 'Lalla Takerkoust (water sports)'],
  },
  {
    season: 'Autumn (September-November)',
    icon: Calendar,
    temp: '20-32 C',
    description: 'Excellent for day trips with warm but manageable temperatures. Fewer tourists than spring. Harvest season in the Atlas with dates, walnuts, and saffron being gathered.',
    bestTrips: ['Three Valleys (harvest season)', 'Agafay Desert (mild heat)', 'Ait Ben Haddou (golden light)', 'Kik Plateau (clear skies)'],
  },
  {
    season: 'Winter (December-February)',
    icon: Mountain,
    temp: '12-20 C',
    description: 'Mild and pleasant in Marrakech with cool evenings. Snow in the Atlas above 2,000 m makes mountain trips spectacular. Fewer tourists and lower prices on tours.',
    bestTrips: ['Essaouira (mild coastal weather)', 'Ouzoud Falls (fewer crowds)', 'Agafay Desert (comfortable temps)', 'Imi n\'Ifri (peaceful visit)'],
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What are the best day trips from Marrakech?',
    answer:
      'The most popular day trips from Marrakech are Ouzoud Falls (stunning 110m waterfalls, 2.5 hours away), Ourika Valley (closest Atlas Mountains escape, just 1 hour), Essaouira (laid-back coastal town, 2.5 hours), Ait Ben Haddou (UNESCO kasbah, 3.5 hours), and Imlil (mountain village and Toubkal gateway, 1.5 hours). Other excellent options include Agafay Desert, Paradise Valley, and the Three Valleys tour.',
  },
  {
    question: 'How much do day trips from Marrakech cost?',
    answer:
      'DIY day trips can cost as little as from 50 MAD per person for nearby destinations like Ourika Valley or Lalla Takerkoust (grand taxi fare). Guided group day tours range from 350 MAD to 800 MAD per person depending on the destination and what is included. Private guided tours start from 1,200 MAD per vehicle. Prices are seasonal and may change during peak periods.',
  },
  {
    question: 'Can I do day trips from Marrakech without a guide?',
    answer:
      'Yes, many day trips are easy to do independently. Ourika Valley and Lalla Takerkoust are reachable by grand taxi for from 25-40 MAD. Essaouira has CTM and Supratours buses from 80 MAD. However, Ouzoud Falls and Ait Ben Haddou have limited public transport, so a guided tour or rental car is recommended for those destinations.',
  },
  {
    question: 'What is the best day trip from Marrakech for families?',
    answer:
      'Ourika Valley is ideal for families: it is only 45 minutes from Marrakech, offers gentle walks along the river, Berber village visits, and riverside restaurants. Lalla Takerkoust lake is another family-friendly option with boat rides, jet skiing, and lakeside cafes. For older children, Ouzoud Falls combines hiking and wildlife spotting.',
  },
  {
    question: 'How far is Essaouira from Marrakech?',
    answer:
      'Essaouira is approximately 190 km from Marrakech, which takes 2.5 to 3 hours by car or bus. CTM and Supratours buses run multiple times daily from 80 MAD one-way. It makes a long but rewarding day trip. You will have about 4-5 hours to explore the medina, port, and eat fresh seafood before heading back.',
  },
  {
    question: 'Is Ouzoud Falls worth visiting from Marrakech?',
    answer:
      'Absolutely. Ouzoud Falls is the tallest waterfall in North Africa at 110 meters and one of Morocco\'s most impressive natural sights. The trip takes about 2.5 hours each way. You can swim in natural pools, spot Barbary macaques, and take a boat ride. Most visitors spend 2-3 hours at the falls. Visit on a weekday to avoid crowds.',
  },
  {
    question: 'What is the best season for day trips from Marrakech?',
    answer:
      'Spring (March-May) and autumn (September-November) are ideal for most day trips with pleasant temperatures and fewer crowds. Summer (June-August) is extremely hot (40+C), though coastal (Essaouira) and mountain (Ourika, Imlil) trips offer relief. Winter (December-February) is mild in Marrakech but cold in the mountains.',
  },
  {
    question: 'Should I book a guided tour or go independently?',
    answer:
      'For Ourika Valley, Essaouira, and Lalla Takerkoust, going independently is easy and cheaper. For Ouzoud Falls, Ait Ben Haddou, and Ouarzazate, a guided tour is more practical due to limited public transport. For Imlil and mountain hikes, a local guide adds cultural context and ensures safety on trails. Most tours can be booked the day before from your riad.',
  },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function DayTripsFromMarrakechPage() {
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
            backgroundImage: 'url(/images/hero-atlas.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Day Trips from Marrakech</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Excursions &amp; Day Tours
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Day Trips from Marrakech
            <br className="hidden md:block" /> in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            12 incredible day trips from waterfalls and Atlas Mountain valleys to coastal towns and
            desert landscapes. Guided tours from 350 MAD, DIY options from 50 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Marrakech Is the Best Base for Day Trips in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Marrakech&apos;s central location at the foot of the Atlas Mountains makes it the
                perfect launchpad for some of Morocco&apos;s most spectacular day trips. Within a
                2-hour drive, you can reach soaring waterfalls, mountain villages, desert landscapes,
                and historic kasbahs. Go a little further and you hit the Atlantic coast at Essaouira
                or the film studios of Ouarzazate.
              </p>
              <p>
                Whether you prefer an organized guided tour with hotel pickup or the independence of
                doing it yourself by grand taxi and local bus, there is a day trip for every budget.
                The closest excursions like Ourika Valley and Agafay Desert cost as little as from 50 MAD
                by public transport, while guided tours to farther destinations like Ait Ben Haddou
                start from around 500 MAD with everything included.
              </p>
              <p>
                This guide covers the 12 best day trips from Marrakech with honest advice on
                transport options, costs, what is included on guided tours, the best season for each
                trip, and whether to go DIY or book a tour.
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
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">12</div>
              <div className="text-sm text-[var(--text-muted)]">Day trip destinations</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">45 min</div>
              <div className="text-sm text-[var(--text-muted)]">Closest trip</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">50 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Cheapest DIY trip</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">350 MAD</div>
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
            12 Best Day Trips from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From 45-minute escapes to full-day adventures, these are the top excursions from Marrakech for every type of traveler.
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
            All 12 day trips at a glance with distances, prices, and difficulty levels.
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
            Some day trips are easy to do independently, while others are much better with a guide. Here is an honest comparison.
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
                  <span><strong>Ourika Valley</strong> - Grand taxis from 25 MAD, frequent service</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Essaouira</strong> - CTM/Supratours buses from 80 MAD, easy to explore</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Lalla Takerkoust</strong> - Grand taxis from 30 MAD, simple route</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                  <span><strong>Imlil</strong> - Grand taxis via Asni from 50 MAD total</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[var(--surface-muted)] rounded-lg">
                <p className="text-xs text-[var(--text-muted)]">
                  <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                  DIY saves 50-70% compared to guided tours and gives you total flexibility with your schedule.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Better with a Guide
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Ouzoud Falls</strong> - No reliable public transport, guide adds context</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Ait Ben Haddou</strong> - Remote, mountain driving, guide explains history</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Ouarzazate</strong> - Very long drive, studio access easier with a tour</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <span><strong>Agafay Desert</strong> - No public transport, camp access via tour operators</span>
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

      {/* -- Seasonal Guide -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Each Day Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s climate varies dramatically between coast, mountains, and desert. Here is when to take each day trip.
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
            Landscapes Around Marrakech
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ouzoud-falls.webp"
                alt="Ouzoud Falls cascading down 110 meters surrounded by lush vegetation near Marrakech"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ouzoud Falls</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ait-benhaddou.webp"
                alt="Ait Ben Haddou UNESCO kasbah with desert mountains in background"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Ben Haddou</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-essaouira.webp"
                alt="Essaouira coastal town with blue boats in the harbor and white medina walls"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Essaouira</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Day Trips from Marrakech
          </h2>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Book tours through your riad or a reputable agency; avoid street touts
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Start early (7-8 AM) to maximize your time and avoid midday heat
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Bring cash in small denominations for tips, entry fees, and local purchases
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Carry sunscreen, a hat, and water on all trips, especially in summer
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Grand taxis (shared) leave from specific stations for each destination
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Confirm the tour price includes lunch, transport, and entry fees before booking
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Dress modestly for village visits; cover shoulders and knees
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Download offline maps; mobile coverage is patchy in the mountains
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
            <Link href="/day-trips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Day Trips Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Day trips and excursions from every major city in Morocco including Fes, Casablanca, and Tangier.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/things-to-do-marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Things to Do in Marrakech
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to attractions, activities, and experiences within Marrakech itself.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-atlas-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Hiking, trekking, and exploring the High Atlas, Middle Atlas, and Anti-Atlas mountain ranges.
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
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about Marrakech: medina, souks, riads, food, and practical travel tips.
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

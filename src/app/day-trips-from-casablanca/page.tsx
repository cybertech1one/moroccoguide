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
  Train,
  Car,
  Navigation,
  Bus,
  Map,
  Camera,
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
  title: 'Best Day Trips from Casablanca 2026 | Top 11 Excursions, Prices & Tips',
  description:
    'Discover the 11 best day trips from Casablanca in 2026. Rabat, El Jadida, Mohammedia, Azemmour, Marrakech by train, Ifrane, Bin El Ouidane & more. Guided tours from 300 MAD, DIY from 40 MAD. Train, car & bus options compared.',
  keywords: [
    'day trips from Casablanca',
    'Casablanca day trips',
    'best day trips from Casablanca Morocco',
    'Casablanca excursions',
    'Rabat from Casablanca',
    'El Jadida day trip',
    'Mohammedia beach',
    'Azemmour day trip',
    'Marrakech from Casablanca train',
    'Ifrane from Casablanca',
    'Bin El Ouidane from Casablanca',
    'things to do near Casablanca',
    'Casablanca day tours 2026',
    'guided tours from Casablanca',
    'DIY day trips Casablanca',
  ],
  openGraph: {
    title: 'Best Day Trips from Casablanca 2026 | Top 11 Excursions & Prices',
    description:
      'The 11 best day trips from Casablanca with prices, transport options, and insider tips. From Rabat and El Jadida to Marrakech by express train. DIY and guided tours compared.',
    url: `${BASE_URL}/day-trips-from-casablanca`,
    images: [
      {
        url: `${BASE_URL}/images/hero-casablanca-skyline.webp`,
        width: 1200,
        height: 630,
        alt: 'Casablanca skyline with Hassan II Mosque along the Atlantic coast at golden hour',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Trips from Casablanca 2026 | Top 11 Excursions',
    description:
      'Rabat, El Jadida, Mohammedia, Azemmour, Marrakech by train & more. Complete guide with prices from 40 MAD.',
    images: [`${BASE_URL}/images/hero-casablanca-skyline.webp`],
  },
  alternates: { canonical: `${BASE_URL}/day-trips-from-casablanca` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/day-trips-from-casablanca`,
  name: 'Best Day Trips from Casablanca 2026 | Top 11 Excursions, Prices & Tips',
  description:
    'Complete guide to the 11 best day trips from Casablanca including Rabat, El Jadida, Mohammedia, Azemmour, Marrakech by train, Ifrane, Bin El Ouidane, and more. Prices, transport, DIY vs guided options.',
  url: `${BASE_URL}/day-trips-from-casablanca`,
  image: `${BASE_URL}/images/hero-casablanca-skyline.webp`,
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
  mainEntityOfPage: `${BASE_URL}/day-trips-from-casablanca`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Casablanca' },
    { '@type': 'City', name: 'Rabat' },
    { '@type': 'City', name: 'El Jadida' },
    { '@type': 'City', name: 'Mohammedia' },
    { '@type': 'City', name: 'Marrakech' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Day Trips from Casablanca', item: `${BASE_URL}/day-trips-from-casablanca` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the best day trips from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular day trips from Casablanca are Rabat (the capital, only 1 hour by train), El Jadida (UNESCO Portuguese cistern, 1.5 hours), Mohammedia (beach town, 30 minutes), Azemmour (artistic village, 1.5 hours), and Marrakech by Al Boraq express train (2.5 hours). Other great options include Ifrane, Bouznika, Settat, Oulmes, Bin El Ouidane, and Khouribga.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do day trips from Casablanca cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'DIY day trips from Casablanca can cost as little as from 40-80 MAD per person for nearby destinations like Mohammedia or Rabat by train. Guided group tours range from 300 MAD to 700 MAD per person depending on the destination. The Al Boraq express train to Marrakech costs from 149 MAD one-way. Prices are seasonal and may change.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take a day trip from Casablanca to Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the Al Boraq high-speed train makes Marrakech a feasible day trip from Casablanca. The journey takes approximately 2 hours 45 minutes with trains departing from Casa Voyageurs station. Take an early morning departure and a late evening return to maximize your time. You will have 6-8 hours in Marrakech.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get from Casablanca to Rabat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The easiest way is by train. ONCF trains run from Casablanca Voyageurs to Rabat Ville every 30 minutes throughout the day. The journey takes about 1 hour and costs from 40 MAD in second class. You can also take the Al Boraq high-speed train which takes only 45 minutes. Grand taxis and buses are also available.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is El Jadida worth visiting from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. El Jadida is one of the best day trips from Casablanca. The UNESCO-listed Portuguese cistern is stunning and unique in Morocco. The fortified old town (Cite Portugaise) has charming streets and sea views. The beach is excellent and the seafood is superb. The drive takes about 1.5 hours on a modern highway.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season for day trips from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) are ideal with pleasant temperatures and sunny skies. Summer (June-August) is warm but the Atlantic coast keeps Casablanca cooler than inland cities. Beach trips to Mohammedia and Bouznika are perfect in summer. Winter (December-February) is mild with occasional rain but still good for cultural trips to Rabat or El Jadida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I rent a car or take the train for day trips from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Rabat and Marrakech, the train is the best option as it is fast, reliable, and avoids traffic and parking hassles. For El Jadida, Azemmour, and coastal towns, a rental car gives you the most flexibility. For more remote destinations like Bin El Ouidane, Oulmes, or Ifrane, a car is essential as public transport is limited or very slow.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far is Mohammedia from Casablanca?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mohammedia is only 25 km north of Casablanca, making it the closest day trip option. By train it takes about 20 minutes from Casa Voyageurs station, and the fare is from 15 MAD. By car the drive takes 25-30 minutes via the coastal highway. It is a popular beach escape for Casablanca residents, especially in summer.',
      },
    },
  ],
};

/* ===============================================================
   DATA: DAY TRIPS
   =============================================================== */

const dayTrips = [
  {
    name: 'Rabat',
    icon: MapPin,
    distance: '87 km (1 hour by train)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 40 MAD',
    bestSeason: 'Year-round',
    highlights: ['Hassan Tower and Mohammed V Mausoleum', 'Kasbah of the Udayas', 'Chellah necropolis ruins', 'Modern art museum', 'Medina and souks'],
    description:
      'Rabat, Morocco\'s capital city, is one of the easiest and most rewarding day trips from Casablanca. The city blends imperial history with modern elegance. The iconic Hassan Tower, the ornate Mohammed V Mausoleum, and the ancient Chellah necropolis are must-sees. The Kasbah of the Udayas, perched above the Bou Regreg river, has a tranquil Andalusian garden and blue-and-white painted streets reminiscent of Chefchaouen. Rabat\'s medina is compact and hassle-free compared to other Moroccan cities.',
    transport: 'ONCF trains run every 30 minutes from Casa Voyageurs to Rabat Ville (from 40 MAD, 1 hour). Al Boraq high-speed train takes 45 minutes (from 79 MAD). Grand taxis also available.',
    tip: 'Take an early train and start with the Hassan Tower area, then walk through the medina to the Kasbah of the Udayas for lunch with river views. Save Chellah for the afternoon when the light is golden.',
    guidedIncludes: 'Hotel pickup, transport, guided city tour covering Hassan Tower, Kasbah, Chellah, and medina walk with lunch',
  },
  {
    name: 'El Jadida',
    icon: Camera,
    distance: '106 km (1.5 hours)',
    guidedPrice: 'From 450 MAD',
    diyPrice: 'From 60 MAD',
    bestSeason: 'Year-round',
    highlights: ['UNESCO Portuguese Cistern', 'Cite Portugaise fortified town', 'Atlantic beach promenade', 'Fresh seafood restaurants', 'Church of the Assumption'],
    description:
      'El Jadida is home to one of Morocco\'s most atmospheric historical sites: the Portuguese Cistern, a UNESCO World Heritage underground chamber where stone columns are reflected in a shallow pool of water. The fortified old town, known as the Cite Portugaise, was built by the Portuguese in the 16th century and retains its European character with rampart walks offering Atlantic views. Outside the walls, El Jadida has a lovely beach, a long promenade, and some of the best seafood on the Atlantic coast.',
    transport: 'CTM and other buses from Casablanca bus station (from 40 MAD, 1.5 hours). By car via the A1 highway, the drive is fast and straightforward. No direct train service.',
    tip: 'The Portuguese Cistern is small; combine it with a walk around the ramparts and lunch at a seafood restaurant near the port. The beach is best in summer. Visit midweek to avoid weekend crowds from Casablanca.',
    guidedIncludes: 'Hotel pickup, transport, guided tour of the Cite Portugaise and cistern, rampart walk, and seafood lunch',
  },
  {
    name: 'Mohammedia',
    icon: Waves,
    distance: '25 km (30 minutes)',
    guidedPrice: 'From 300 MAD',
    diyPrice: 'From 15 MAD',
    bestSeason: 'Summer (June-September)',
    highlights: ['Sandy beaches and swimming', 'Coastal promenade', 'Golf courses', 'Fresh fish restaurants', 'Relaxed seaside atmosphere'],
    description:
      'Mohammedia is Casablanca\'s nearest beach escape, just 25 km up the coast. This relaxed seaside town has clean sandy beaches, a lively promenade, and excellent fish restaurants along the waterfront. Known as the "City of Flowers and Golf," Mohammedia has a colonial-era charm with tree-lined boulevards and two golf courses. It is where Casablanca residents go on weekends to escape the city heat, making it perfect for a half-day or full-day beach outing.',
    transport: 'ONCF trains from Casa Voyageurs (from 15 MAD, 20 minutes, frequent service). Grand taxis from Casablanca are also cheap and fast. By car, take the coastal highway A3.',
    tip: 'Go on a weekday to have the beach almost to yourself. The fish market near the port sells incredibly fresh catch that nearby restaurants will cook for you. Combine with a morning in Casablanca.',
    guidedIncludes: 'Hotel pickup, transport, beach time, golf course visit option, and fresh fish lunch at a local restaurant',
  },
  {
    name: 'Azemmour',
    icon: Camera,
    distance: '85 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Street art murals throughout medina', 'Portuguese ramparts', 'Oum Er-Rbia river estuary', 'Haouzia beach nearby', 'Artisan workshops'],
    description:
      'Azemmour is a hidden gem that few tourists visit, making it one of the most authentic day trips from Casablanca. This small fortified town on the Oum Er-Rbia river has Portuguese-era ramparts, a whitewashed medina filled with colorful street art murals, and a peaceful atmosphere worlds away from Morocco\'s bustling cities. Local artists have transformed abandoned houses into open-air galleries. The nearby Haouzia beach is vast, uncrowded, and backed by a pine forest ideal for picnics.',
    transport: 'Buses from Casablanca to Azemmour (from 35 MAD, 1.5 hours). Often combined with El Jadida as they are only 17 km apart. By car, take the A1 highway toward El Jadida and exit at Azemmour.',
    tip: 'Combine Azemmour and El Jadida in a single day trip as they are only 20 minutes apart. Start at Azemmour in the morning for the street art and quiet medina, then continue to El Jadida for the cistern and lunch.',
    guidedIncludes: 'Hotel pickup, transport, guided medina and street art walk, rampart visit, and often combined with El Jadida',
  },
  {
    name: 'Bouznika',
    icon: Waves,
    distance: '50 km (40 minutes)',
    guidedPrice: 'From 350 MAD',
    diyPrice: 'From 25 MAD',
    bestSeason: 'Summer (June-September)',
    highlights: ['Long sandy beach', 'Water sports and surfing', 'Beachside restaurants', 'Family-friendly atmosphere', 'Bouznika Bay resort area'],
    description:
      'Bouznika is a popular beach resort town halfway between Casablanca and Rabat, known for its long golden beach and laid-back atmosphere. The town has developed into a weekend retreat with beachside restaurants, water sports rentals, and family-friendly facilities. Bouznika Bay is particularly scenic with a crescent-shaped beach sheltered from strong Atlantic winds. Surfing, bodyboarding, and jet skiing are available in season. The town itself is quiet and pleasant for a stroll.',
    transport: 'ONCF trains from Casa Voyageurs stop at Bouznika (from 20 MAD, 30 minutes). By car, take the A1 highway toward Rabat and exit at Bouznika. Grand taxis also available.',
    tip: 'Bouznika is at its best from June to September when the water is warm enough for swimming. The beach can get crowded on weekends; go on a weekday for a more relaxed experience. There are several good beachside cafes for fresh juice and grilled fish.',
    guidedIncludes: 'Hotel pickup, transport, beach time, water sports option, and grilled fish lunch at a beachside restaurant',
  },
  {
    name: 'Settat',
    icon: Compass,
    distance: '72 km (1 hour)',
    guidedPrice: 'From 350 MAD',
    diyPrice: 'From 35 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Kasbah Ismailia fortress', 'Traditional weekly souk', 'Rural Chaouia plain landscape', 'Authentic Moroccan town experience', 'Local gastronomy'],
    description:
      'Settat offers a glimpse into everyday Moroccan life that most tourists never see. This agricultural market town on the Chaouia plain is home to the historic Kasbah Ismailia, built by Sultan Moulay Ismail in the 17th century. The weekly souk is a colorful affair with local produce, livestock, and household goods. Settat is not a tourist town, which makes it perfect for travelers seeking authentic Morocco. The surrounding countryside is a patchwork of wheat fields, olive groves, and rural villages.',
    transport: 'ONCF trains from Casa Voyageurs to Settat (from 30 MAD, 50 minutes). Buses also available from Casablanca bus station. By car, take the A7 highway south.',
    tip: 'Time your visit with the weekly souk (check locally for the day) for the most lively experience. Settat is a working town, so dress modestly and be respectful. Try the local specialties: rfissa and msemen with honey.',
    guidedIncludes: 'Hotel pickup, transport, Kasbah Ismailia visit, souk walk, local lunch, and countryside drive',
  },
  {
    name: 'Ifrane',
    icon: Mountain,
    distance: '260 km (3 hours)',
    guidedPrice: 'From 600 MAD',
    diyPrice: 'From 120 MAD',
    bestSeason: 'Year-round (snow in winter)',
    highlights: ['Swiss-style alpine architecture', 'Cedar forests and Barbary macaques', 'Lion of Ifrane stone sculpture', 'Al Akhawayn University campus', 'Cool mountain climate'],
    description:
      'Ifrane is Morocco\'s most unexpected town: a clean, orderly alpine-style settlement in the Middle Atlas Mountains that looks more like Switzerland than North Africa. Built by the French in the 1930s, Ifrane has red-roofed chalets, manicured gardens, and a famous stone lion sculpture. Nearby, the Azrou cedar forest is home to endangered Barbary macaques that you can observe from close range. In winter, Michlifen ski resort offers Morocco\'s best skiing. The cool mountain air is a welcome contrast to Casablanca\'s heat.',
    transport: 'No direct train. CTM buses from Casablanca to Ifrane (from 90 MAD, 3-3.5 hours). By car, drive via Meknes on the A2 highway then south on the N13. A rental car is recommended for flexibility.',
    tip: 'This is a long day trip. Leave Casablanca early (7 AM) and plan to return by evening. Stop at the Azrou cedar forest to see Barbary macaques. In winter (December-March), bring warm clothing as temperatures drop below zero.',
    guidedIncludes: 'Hotel pickup, transport, Ifrane town tour, cedar forest visit with macaque spotting, and lunch at a local restaurant',
  },
  {
    name: 'Oulmes',
    icon: Mountain,
    distance: '170 km (2.5 hours)',
    guidedPrice: 'From 500 MAD',
    diyPrice: 'From 80 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['Natural hot springs', 'Lalla Haya waterfall', 'Mountain scenery', 'Source of famous Oulmes mineral water', 'Traditional Berber villages'],
    description:
      'Oulmes is a small mountain town in the Middle Atlas known throughout Morocco for its mineral water that is sold nationwide. The area around Oulmes has natural hot springs where locals bathe, the scenic Lalla Haya waterfall, and beautiful mountain terrain covered in cork oak and cedar forests. The town sits at 1,100 meters altitude, making it pleasantly cool even in summer. This is rural Morocco at its most authentic, with traditional Berber villages dotting the surrounding hills.',
    transport: 'No direct train or regular bus service. Best reached by rental car via the R401 from Rommani. Grand taxis from Casablanca are unreliable for this route. A car is strongly recommended.',
    tip: 'Combine Oulmes with a visit to the Lalla Haya waterfall (about 10 km from town). The hot springs are most enjoyable in cooler months. Bring your own lunch or eat at one of the simple local restaurants.',
    guidedIncludes: 'Hotel pickup, transport, hot springs visit, Lalla Haya waterfall, village tour, and picnic lunch',
  },
  {
    name: 'Khouribga',
    icon: Compass,
    distance: '120 km (1.5 hours)',
    guidedPrice: 'From 400 MAD',
    diyPrice: 'From 50 MAD',
    bestSeason: 'Spring & autumn',
    highlights: ['OCP phosphate mining heritage', 'Geological museum', 'Art deco architecture', 'Weekly traditional souk', 'Surrounding plateau landscape'],
    description:
      'Khouribga is the capital of Morocco\'s phosphate mining region, sitting atop one of the world\'s largest phosphate reserves. While not a typical tourist destination, it offers a fascinating look at an industry that drives Morocco\'s economy. The OCP geological museum showcases impressive mineral and fossil collections. The town has some interesting art deco colonial architecture and a vibrant weekly souk. The surrounding plateau landscape is dramatic, with red earth and vast horizons.',
    transport: 'ONCF trains from Casa Voyageurs to Khouribga (from 45 MAD, 1.5 hours). Buses also run regularly. By car, take the A11 highway east.',
    tip: 'Visit the OCP museum for a unique perspective on Morocco\'s mining heritage. The town is best visited on souk day for atmosphere. Combine with a drive through the dramatic phosphate plateau landscape.',
    guidedIncludes: 'Hotel pickup, transport, geological museum visit, town tour, souk walk, and local lunch',
  },
  {
    name: 'Bin El Ouidane',
    icon: Waves,
    distance: '260 km (3.5 hours)',
    guidedPrice: 'From 650 MAD',
    diyPrice: 'From 150 MAD',
    bestSeason: 'Spring & summer (April-September)',
    highlights: ['Turquoise mountain lake', 'Atlas Mountain backdrop', 'Kayaking and boat trips', 'Dramatic dam engineering', 'Peaceful mountain scenery'],
    description:
      'Bin El Ouidane is one of Morocco\'s most beautiful inland lakes, a vast turquoise reservoir nestled among the foothills of the High Atlas Mountains. The dam, built in the 1950s, created a stunning body of water surrounded by barren mountains that change color throughout the day. Boat trips, kayaking, and fishing are available on the lake. The drive from Casablanca passes through the Tadla plain and climbs into the mountains, offering increasingly dramatic scenery. Several lakeside guesthouses serve fresh trout.',
    transport: 'No direct train or regular bus service. Best reached by rental car via Beni Mellal on the A8 highway then south on the R304. The last stretch is a winding mountain road with spectacular views.',
    tip: 'This is a long day trip best started early. Combine with a stop in Beni Mellal for breakfast. The lake is most beautiful in spring when the water level is highest. Consider an overnight stay at a lakeside guesthouse for a more relaxed experience.',
    guidedIncludes: 'Hotel pickup, transport, boat trip on the lake, dam viewpoint, Beni Mellal stop, and lakeside trout lunch',
  },
  {
    name: 'Marrakech (Express Train)',
    icon: Train,
    distance: '240 km (2 hr 45 min by train)',
    guidedPrice: 'From 700 MAD',
    diyPrice: 'From 149 MAD',
    bestSeason: 'Year-round (avoid summer midday)',
    highlights: ['Jemaa el-Fnaa square', 'Bahia Palace and Ben Youssef Madrasa', 'Souks and artisan quarter', 'Koutoubia Mosque views', 'Majorelle Garden'],
    description:
      'The Al Boraq high-speed train has made Marrakech a feasible day trip from Casablanca. Departing from Casa Voyageurs station, you arrive at Marrakech station in approximately 2 hours 45 minutes. This gives you 6-8 hours to explore the Red City\'s highlights: the bustling Jemaa el-Fnaa square, the intricate Bahia Palace, the labyrinthine souks, and the stunning Ben Youssef Madrasa. Take an early morning departure and a late evening return to maximize your time in one of Morocco\'s most captivating cities.',
    transport: 'Al Boraq trains from Casa Voyageurs to Marrakech (from 149 MAD first class, 2 hr 45 min). Regular ONCF trains also available (from 100 MAD, 3.5 hours). Book online at oncf.ma for best prices.',
    tip: 'Take the earliest Al Boraq departure (around 7 AM) to arrive by 10 AM. Head straight to the medina and souks while it is cool. Visit palaces midday when the sun is strong. Return to Jemaa el-Fnaa in the late afternoon for the food stalls and entertainment.',
    guidedIncludes: 'Train tickets, local guide in Marrakech, Bahia Palace and Ben Youssef Madrasa entry, souk tour, and traditional lunch in the medina',
  },
] as const;

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { trip: 'Rabat', distance: '87 km', time: '1 hr', guidedPrice: 'From 400 MAD', diyPrice: 'From 40 MAD', difficulty: 'Easy' },
  { trip: 'El Jadida', distance: '106 km', time: '1.5 hrs', guidedPrice: 'From 450 MAD', diyPrice: 'From 60 MAD', difficulty: 'Easy' },
  { trip: 'Mohammedia', distance: '25 km', time: '30 min', guidedPrice: 'From 300 MAD', diyPrice: 'From 15 MAD', difficulty: 'Easy' },
  { trip: 'Azemmour', distance: '85 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 50 MAD', difficulty: 'Easy' },
  { trip: 'Bouznika', distance: '50 km', time: '40 min', guidedPrice: 'From 350 MAD', diyPrice: 'From 25 MAD', difficulty: 'Easy' },
  { trip: 'Settat', distance: '72 km', time: '1 hr', guidedPrice: 'From 350 MAD', diyPrice: 'From 35 MAD', difficulty: 'Easy' },
  { trip: 'Ifrane', distance: '260 km', time: '3 hrs', guidedPrice: 'From 600 MAD', diyPrice: 'From 120 MAD', difficulty: 'Long day' },
  { trip: 'Oulmes', distance: '170 km', time: '2.5 hrs', guidedPrice: 'From 500 MAD', diyPrice: 'From 80 MAD', difficulty: 'Moderate' },
  { trip: 'Khouribga', distance: '120 km', time: '1.5 hrs', guidedPrice: 'From 400 MAD', diyPrice: 'From 50 MAD', difficulty: 'Easy' },
  { trip: 'Bin El Ouidane', distance: '260 km', time: '3.5 hrs', guidedPrice: 'From 650 MAD', diyPrice: 'From 150 MAD', difficulty: 'Long day' },
  { trip: 'Marrakech', distance: '240 km', time: '2 hr 45', guidedPrice: 'From 700 MAD', diyPrice: 'From 149 MAD', difficulty: 'Long day' },
];

/* ===============================================================
   DATA: TRANSPORT COMPARISON
   =============================================================== */

const transportOptions = [
  {
    mode: 'Train (ONCF / Al Boraq)',
    icon: Train,
    pros: ['Fast and reliable for Rabat, Mohammedia, Marrakech', 'No traffic or parking worries', 'Comfortable seats with AC', 'Affordable fares from 15 MAD'],
    cons: ['Limited destinations (only cities on rail lines)', 'Fixed schedules, less flexibility', 'Stations may be outside city centers'],
    bestFor: 'Rabat, Mohammedia, Bouznika, Settat, Khouribga, Marrakech',
  },
  {
    mode: 'Rental Car (Self-Drive)',
    icon: Car,
    pros: ['Total flexibility and freedom', 'Access remote destinations easily', 'Stop wherever you want', 'Cheaper for groups of 3-4 people'],
    cons: ['Moroccan driving can be intense', 'Parking difficult in city centers', 'Fuel and toll costs add up', 'Need international driving permit'],
    bestFor: 'El Jadida, Azemmour, Ifrane, Oulmes, Bin El Ouidane, Khouribga',
  },
  {
    mode: 'Organized Tour (Guided)',
    icon: Users,
    pros: ['No planning or navigation needed', 'Local guide with deep knowledge', 'Lunch and entry fees included', 'Hotel pickup and drop-off'],
    cons: ['Fixed itinerary, less flexibility', 'More expensive per person', 'Group tours may feel rushed', 'Dependent on group pace'],
    bestFor: 'First-time visitors, solo travelers, multi-stop day trips',
  },
];

/* ===============================================================
   DATA: FAQs
   =============================================================== */

const faqs = [
  {
    question: 'What are the best day trips from Casablanca?',
    answer:
      'The most popular day trips from Casablanca are Rabat (the capital, only 1 hour by train), El Jadida (UNESCO Portuguese cistern, 1.5 hours by car), Mohammedia (beach town, just 30 minutes), Azemmour (artistic village with street art, 1.5 hours), and Marrakech by Al Boraq express train (2 hours 45 minutes). For nature lovers, Ifrane (Swiss-style mountain town), Bin El Ouidane (turquoise lake), and Oulmes (hot springs) are excellent options.',
  },
  {
    question: 'How much do day trips from Casablanca cost?',
    answer:
      'DIY day trips can cost as little as from 15 MAD per person for a train to Mohammedia or from 40 MAD for a train to Rabat. Guided group tours range from 300 MAD to 700 MAD per person depending on the destination. Private guided tours start from 1,500 MAD per vehicle. The Al Boraq express train to Marrakech costs from 149 MAD one-way in first class. Prices are seasonal and may change during peak periods.',
  },
  {
    question: 'Can I take a day trip from Casablanca to Marrakech?',
    answer:
      'Yes, the Al Boraq high-speed train makes Marrakech a feasible day trip. The journey takes about 2 hours 45 minutes from Casa Voyageurs station. Take the earliest departure (around 7 AM) and a late evening return to get 6-8 hours in Marrakech. You can explore Jemaa el-Fnaa, visit Bahia Palace, browse the souks, and enjoy a traditional lunch in the medina.',
  },
  {
    question: 'How do I get from Casablanca to Rabat?',
    answer:
      'The easiest way is by train. ONCF trains run from Casa Voyageurs to Rabat Ville every 30 minutes, taking about 1 hour and costing from 40 MAD in second class. The Al Boraq high-speed train takes only 45 minutes from 79 MAD. Grand taxis and CTM buses are also available but trains are faster, more comfortable, and more reliable.',
  },
  {
    question: 'Is El Jadida worth visiting from Casablanca?',
    answer:
      'Absolutely. El Jadida has the stunning UNESCO-listed Portuguese Cistern, one of Morocco\'s most unique historical sites. The fortified Cite Portugaise has charming streets, rampart walks with Atlantic views, and excellent seafood restaurants. The beach is good for swimming in summer. The drive takes about 1.5 hours on a modern highway. Combine it with nearby Azemmour for a full day.',
  },
  {
    question: 'What is the best season for day trips from Casablanca?',
    answer:
      'Spring (March-May) and autumn (September-November) are ideal for most day trips with pleasant temperatures from 18-28 degrees. Summer (June-August) is perfect for beach trips to Mohammedia, Bouznika, and El Jadida, though inland destinations can be hot. Winter (December-February) is mild on the coast with occasional rain, and it is a great time for cultural trips to Rabat or snowy visits to Ifrane.',
  },
  {
    question: 'Should I rent a car or take the train for day trips from Casablanca?',
    answer:
      'For Rabat and Marrakech, the train is the best option: fast, reliable, and avoids traffic. For El Jadida, Azemmour, and coastal towns, a rental car gives more flexibility. For remote destinations like Bin El Ouidane, Oulmes, or Ifrane, a car is essential as public transport is limited. For shorter beach trips (Mohammedia, Bouznika), the train is cheapest and easiest.',
  },
  {
    question: 'How far is Mohammedia from Casablanca?',
    answer:
      'Mohammedia is only 25 km north of Casablanca, the closest day trip option. By train it takes about 20 minutes from Casa Voyageurs station with fares from 15 MAD. By car the drive takes 25-30 minutes via the coastal highway. It is a popular beach escape for Casablanca residents and is perfect for a half-day outing or a relaxed full-day beach trip.',
  },
];

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function DayTripsFromCasablancaPage() {
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
            backgroundImage: 'url(/images/hero-casablanca-skyline.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Day Trips from Casablanca</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Excursions &amp; Day Tours
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Day Trips from Casablanca
            <br className="hidden md:block" /> in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            11 incredible day trips from coastal towns and imperial cities to mountain lakes and
            alpine villages. Train trips from 15 MAD, guided tours from 300 MAD.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Introduction -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Casablanca Is a Great Base for Day Trips in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Casablanca&apos;s position on Morocco&apos;s Atlantic coast and its role as the
                country&apos;s transport hub make it an excellent launchpad for day trips in every
                direction. The Al Boraq high-speed train connects you to Rabat in 45 minutes and
                Marrakech in under 3 hours. Regular ONCF trains reach a dozen cities. Modern highways
                fan out to the coast, the plains, and the mountains.
              </p>
              <p>
                To the south, the Portuguese-era coastal towns of El Jadida and Azemmour offer
                history and art. North along the coast, beach towns like Mohammedia and Bouznika
                provide easy seaside escapes. Inland, the Middle Atlas Mountains hold surprises like
                the alpine town of Ifrane, the hot springs of Oulmes, and the turquoise waters of
                Bin El Ouidane lake.
              </p>
              <p>
                This guide covers the 11 best day trips from Casablanca with honest advice on
                transport options, costs, what to expect, the best season for each trip, and
                whether to go DIY or book a guided tour.
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
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">11</div>
              <div className="text-sm text-[var(--text-muted)]">Day trip destinations</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">20 min</div>
              <div className="text-sm text-[var(--text-muted)]">Closest trip (Mohammedia)</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">15 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Cheapest DIY trip</div>
            </div>
            <div className="text-center">
              <Train className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">6</div>
              <div className="text-sm text-[var(--text-muted)]">Reachable by train</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Day Trip Cards -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            11 Best Day Trips from Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From 20-minute train rides to full-day mountain adventures, these are the top excursions from Casablanca for every type of traveler.
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
            All 11 day trips at a glance with distances, prices, and difficulty levels.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="card-moroccan overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Day Trip</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Distance</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Travel Time</th>
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

      {/* -- Transport Comparison -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Train vs Self-Drive vs Guided Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Casablanca has excellent rail connections, but some destinations require a car. Here is an honest comparison of your transport options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {transportOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.mode} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OptionIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {option.mode}
                    </h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-green-700 mb-2">Advantages</h4>
                    <div className="space-y-1.5">
                      {option.pros.map((pro, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                          {pro}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-amber-700 mb-2">Drawbacks</h4>
                    <div className="space-y-1.5">
                      {option.cons.map((con, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                          {con}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">
                      <Star className="w-3 h-3 inline text-[var(--color-gold)] mr-1" />
                      <span className="font-semibold">Best for:</span> {option.bestFor}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Gallery -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Destinations Around Casablanca
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-rabat-kasbah.webp"
                alt="Kasbah of the Udayas in Rabat with blue and white painted walls overlooking the Bou Regreg river"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Rabat - Kasbah of the Udayas</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-el-jadida.webp"
                alt="Portuguese Cistern in El Jadida with stone columns reflected in water and light streaming through the ceiling"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">El Jadida - Portuguese Cistern</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ifrane.webp"
                alt="Alpine-style architecture and manicured gardens in the mountain town of Ifrane, Middle Atlas"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ifrane - Switzerland of Morocco</p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Seasonal Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Season for Each Day Trip
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Casablanca&apos;s Atlantic coast enjoys mild weather year-round, but inland and mountain destinations vary significantly by season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Sun className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Spring (March-May)
                  </h3>
                  <div className="text-xs text-[var(--text-muted)]">18-26 C on the coast</div>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">The best all-round season. Pleasant coastal temperatures, wildflowers in the countryside, and comfortable driving conditions. Green landscapes throughout the Chaouia plain and Middle Atlas.</p>
              <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Best Trips This Season</h4>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Azemmour (wildflowers and cool weather)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Bin El Ouidane (lake at peak water level)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Oulmes (hot springs most enjoyable)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Ifrane (cedar forests coming alive)
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Waves className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Summer (June-August)
                  </h3>
                  <div className="text-xs text-[var(--text-muted)]">24-30 C on the coast, hotter inland</div>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Beach season is in full swing. Atlantic coast towns are perfect, but inland trips can be very hot. Ifrane offers cool mountain relief. Avoid midday travel on inland routes.</p>
              <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Best Trips This Season</h4>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Mohammedia (peak beach season)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Bouznika (warm water, water sports)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  El Jadida (beach and seafood)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Ifrane (cool mountain escape)
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Autumn (September-November)
                  </h3>
                  <div className="text-xs text-[var(--text-muted)]">20-28 C on the coast</div>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Excellent for all destinations. Warm but manageable temperatures, fewer tourists, and beautiful golden light. Harvest season in rural areas with olive and date picking.</p>
              <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Best Trips This Season</h4>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Settat (harvest season at the souk)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Rabat (comfortable for sightseeing)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Marrakech (pleasant before winter)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Khouribga (comfortable plateau weather)
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Mountain className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    Winter (December-February)
                  </h3>
                  <div className="text-xs text-[var(--text-muted)]">12-18 C on the coast, snow in mountains</div>
                </div>
              </div>
              <p className="text-sm text-[var(--text-secondary)] mb-4">Mild on the coast with occasional rain. Mountain destinations can be cold with snow. Fewer tourists and lower prices. Cultural city trips work well. Ifrane transforms into a winter wonderland.</p>
              <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Best Trips This Season</h4>
              <div className="space-y-1.5">
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Rabat (mild weather, fewer crowds)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  El Jadida (mild coastal weather)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Ifrane (skiing at Michlifen)
                </div>
                <div className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                  <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  Marrakech (comfortable winter temps)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Practical Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips for Day Trips from Casablanca
          </h2>

          <div className="card-moroccan p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Buy train tickets online at oncf.ma to guarantee seats on busy routes
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Start early (7-8 AM) especially for longer trips to Ifrane or Bin El Ouidane
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Bring cash in small denominations; ATMs are scarce in smaller towns
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Carry sunscreen and a hat for beach and coastal trips, especially in summer
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Casa Voyageurs is the main station; Casa Port serves some local routes
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Confirm tour inclusions (transport, meals, entries) before booking
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Highway tolls add up for self-drivers; carry small change for toll booths
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Download offline maps; mobile coverage is patchy in mountain areas
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Dress modestly when visiting rural towns and smaller communities
              </div>
              <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                Combine nearby destinations (Azemmour + El Jadida, Mohammedia + Bouznika)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/casablanca" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Casablanca City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about Casablanca: Hassan II Mosque, corniche, Art Deco architecture, and practical travel tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/things-to-do-casablanca" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Things to Do in Casablanca
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to attractions, activities, and experiences within Casablanca itself.
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
                12 best excursions from Marrakech including Ouzoud Falls, Ourika Valley, Essaouira, and Ait Ben Haddou.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/day-trips-from-fes" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Day Trips from Fes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Explore Volubilis, Meknes, Ifrane, and the Middle Atlas from Morocco&apos;s cultural capital.
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
            <Link href="/public-transport" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Public Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, grand taxis, and city transport across Morocco. Schedules, prices, and booking tips.
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

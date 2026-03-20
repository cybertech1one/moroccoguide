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
  Compass,
  Mountain,
  Bus,
  Car,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Camera,
  Sun,
  Calendar,
  Navigation,
  Milestone,
  Sunrise,
  Building,
  Waves,
  Shield,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Day Trips in Morocco 2026 | Excursions from Marrakech, Fez, Tangier & Casablanca',
  description:
    'Complete guide to the best day trips in Morocco. 17 top excursions from Marrakech (Ourika Valley, Ouzoud Falls, Essaouira, Ait Benhaddou, Ouirgane), Fez (Meknes, Volubilis, Ifrane, Sefrou), Tangier (Chefchaouen, Asilah, Cap Spartel), and Casablanca (Rabat, El Jadida). Prices, transport, and insider tips.',
  keywords: [
    'best day trips morocco',
    'day trips from marrakech',
    'day trips from fez',
    'morocco excursions',
    'day tours morocco',
    'Ouzoud Waterfalls day trip',
    'Essaouira day trip from Marrakech',
    'Chefchaouen day trip',
    'Ait Benhaddou excursion',
    'Ourika Valley trip',
    'Volubilis Roman ruins',
    'Meknes day trip from Fez',
    'Ouirgane day trip',
    'Sefrou cherry festival',
    'Ifrane Morocco',
    'Asilah day trip Tangier',
    'Cap Spartel Hercules Caves',
    'Rabat day trip Casablanca',
    'El Jadida Portuguese cistern',
    'Morocco guided tours 2026',
  ],
  openGraph: {
    title: 'Best Day Trips in Morocco 2026 | 17 Top Excursions',
    description:
      '17 incredible day trips from Marrakech, Fez, Tangier, and Casablanca. Transport options, costs from 25 MAD, drive times, and expert tips for every excursion.',
    url: `${BASE_URL}/morocco-day-trips`,
    images: [
      {
        url: `${BASE_URL}/images/hero-day-trips.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan mountain road winding past kasbahs and Atlas peaks on a clear day',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Trips in Morocco 2026 | 17 Top Excursions',
    description:
      'The best day trips from Marrakech, Fez, Casablanca, and Tangier. Full guide with transport, costs from 25 MAD, and insider tips.',
    images: [`${BASE_URL}/images/hero-day-trips.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-day-trips` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA (TravelGuide)
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-day-trips`,
  name: 'Best Day Trips in Morocco 2026 | Excursions from Marrakech, Fez, Tangier & Casablanca',
  description:
    'Complete guide to the best day trips in Morocco. 17 excursions from Marrakech, Fez, Tangier, and Casablanca with transport options, costs, and insider tips.',
  url: `${BASE_URL}/morocco-day-trips`,
  image: `${BASE_URL}/images/hero-day-trips.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-17',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-day-trips`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morocco Day Trips',
        item: `${BASE_URL}/morocco-day-trips`,
      },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA (FAQPage)
   ═══════════════════════════════════════════════════════════════ */

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is it safe to take day trips in Morocco independently?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Morocco is safe for independent day trips on well-traveled routes. Trains and CTM buses are reliable. For remote spots like Ouzoud Falls or Ait Benhaddou, a private driver is recommended since roads can be unpredictable. Always share your plan with your riad.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a typical Morocco day trip cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget trips on public transport start from 100 MAD per person. Mid-range private tours start from 300 MAD including guide and transport. Premium private excursions with lunch run from 800 MAD. Prices vary by destination, season, and group size.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I rent a car or hire a driver in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car rental is available from 250 MAD per day, but Moroccan driving conditions are challenging: aggressive traffic, inconsistent signage, and narrow mountain roads. Most travelers prefer hiring a car with driver, which costs from 500 MAD per day and removes the stress of navigation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a day trip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring at least 1.5 liters of water, sunscreen, a hat, comfortable walking shoes, cash in small bills (card payment is rare outside cities), a light jacket for mountain destinations, and a phone charger. For waterfall trips, pack a swimsuit and quick-dry towel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which day trips work well for families with children?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essaouira, Ourika Valley, Ifrane, Asilah, and Rabat are all excellent for families. Kids love the monkey encounters at Ouzoud Falls and the Azrou Cedar Forest. Longer drives like Chefchaouen from Fez or Ait Benhaddou can tire young children. Private transport lets families stop as needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best season for day trips in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring (March-May) and autumn (September-November) offer the best conditions for most day trips: comfortable temperatures, green landscapes, and manageable tourist numbers. Summer works for coastal trips to Essaouira and Asilah but is brutal at inland sites. Winter is mild on the coast, cold in the mountains.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM MARRAKECH
   ═══════════════════════════════════════════════════════════════ */

const marrakechTrips = [
  {
    name: 'Ourika Valley',
    distance: '60 km south',
    duration: '1-1.5 hours each way',
    icon: Mountain,
    description:
      'The closest Atlas escape from Marrakech. A single road follows the Ourika River through terraced Berber villages clinging to steep green hillsides. At the end of the road in Setti Fatma, a chain of seven waterfalls demands a scramble over wet boulders with a local guide. Stop along the way at a saffron cooperative, peek inside a traditional Berber home, or time your visit for the Monday souk at Tnine Ourika where locals trade livestock, spices, and handwoven blankets. The valley runs 10-15 degrees cooler than the city in summer.',
    highlights: [
      'Setti Fatma waterfall hike',
      'Saffron farm visits',
      'Monday souk at Tnine Ourika',
      'Traditional Berber house tours',
      'Summer heat escape',
    ],
    transport:
      'Grand taxi from Bab Er Rob (from 25 MAD per person shared), private car/driver (from 500 MAD round trip), organized tour (from 200 MAD per person).',
    cost: 'From 25 MAD (shared taxi). Waterfall guide from 100 MAD. Berber house visit from 20 MAD.',
    bestTime: 'Spring for wildflowers, summer to escape city heat. Avoid heavy rain when the river floods.',
    tip: 'The waterfall hike requires a local guide (mandatory fee). Wear shoes with grip; the rocks are slippery. The valley road has no guardrails; pick your driver carefully.',
  },
  {
    name: 'Ouzoud Waterfalls',
    distance: '150 km northeast',
    duration: '2.5 hours each way',
    icon: Waves,
    description:
      'North Africa\u2019s most spectacular falls. Three cascades plunge 110 meters over red-rock cliffs into a gorge lined with ancient olive trees. Barbary macaques patrol the paths, snatching unguarded snacks from tourists. At the base, small wooden boats ferry visitors through the mist for close-up views. A rainbow almost always hangs in the spray on sunny mornings. The surrounding trails loop through olive groves with basic restaurants serving tagine overlooking the gorge.',
    highlights: [
      '110-meter cascading waterfalls',
      'Barbary macaque monkeys',
      'Boat ride at the falls base',
      'Olive grove hiking trails',
      'Tagine with waterfall views',
    ],
    transport:
      'Shared minivan (from 80 MAD one way), private car/driver (from 800 MAD round trip), organized tour (from 250 MAD per person), or CTM bus to Azilal then local taxi.',
    cost: 'From 80 MAD (transport only). Boat ride from 20 MAD. Lunch from 50 MAD.',
    bestTime: 'March-May when water flow peaks. August can reduce the falls to a trickle.',
    tip: 'Wear sturdy shoes for the steep descent. Arrive before 10am to dodge the crowds. The monkeys will steal anything; secure bags and food.',
  },
  {
    name: 'Essaouira',
    distance: '175 km west',
    duration: '2.5-3 hours each way',
    icon: Waves,
    description:
      'A windswept Atlantic port town with a UNESCO-listed medina, Portuguese ramparts, and some of the cheapest seafood in the country. Blue fishing boats line the harbor; the day\u2019s catch gets grilled on open fires at the port stalls within hours. Walk the ramparts where Orson Welles filmed Othello, browse the thuya wood workshops in the medina, and wander streets that double as a permanent art gallery. The beach stretches for miles south of town, drawing windsurfers and kitesurfers from across Europe.',
    highlights: [
      'UNESCO medina and Portuguese ramparts',
      'Fresh-grilled port seafood from 30 MAD',
      'Thuya woodworking souks',
      'Windsurfing and kitesurfing beach',
      'Game of Thrones filming locations',
    ],
    transport:
      'Supratours bus (from 80 MAD one way, 2.5 hours), private car/driver (from 1,000 MAD round trip), grand taxi, or organized tour (from 300 MAD per person).',
    cost: 'From 80 MAD (bus). Port seafood lunch from 60 MAD. Ramparts entry free.',
    bestTime: 'April-June and September-October. Summer brings strong wind (great for surfers, less so for sunbathers).',
    tip: 'The Supratours bus is comfortable and leaves from the Marrakech train station. Eat at the port fish stalls, not the tourist restaurants. A sardine plate costs from 30 MAD.',
  },
  {
    name: 'Ait Benhaddou',
    distance: '185 km southeast',
    duration: '3-3.5 hours each way',
    icon: Building,
    description:
      'A UNESCO ksar (fortified village) built from rammed earth, rising like a sand castle from the riverbed with the Atlas Mountains behind it. Gladiator, Game of Thrones, and Lawrence of Arabia all filmed here. Cross the shallow river (or the footbridge) and climb through the crumbling towers to the summit for a panoramic view that stretches to the horizon. The drive itself crosses the Tizi n\u2019Tichka pass at 2,260 meters, with hairpin bends through stunning mountain scenery.',
    highlights: [
      'UNESCO World Heritage ksar',
      'Hollywood and TV filming location',
      'Tizi n\u2019Tichka mountain pass at 2,260m',
      'Panoramic views from the summit',
      'Traditional rammed-earth architecture',
    ],
    transport:
      'Private car/driver (from 1,200 MAD round trip), organized tour (from 350 MAD per person), or shared transport via Ouarzazate. No direct public bus.',
    cost: 'From 350 MAD (organized tour). Ksar entry free (guide from 100 MAD). Lunch from 60 MAD.',
    bestTime: 'October-April for bearable temperatures. Summer exceeds 40 degrees at the ksar.',
    tip: 'Leave by 7am. The Tizi n\u2019Tichka pass has severe hairpin turns; bring motion sickness medication if needed. Consider adding a stop in Ouarzazate\u2019s Atlas Film Studios.',
  },
  {
    name: 'Ouirgane',
    distance: '61 km south',
    duration: '1-1.5 hours each way',
    icon: Mountain,
    description:
      'A quiet Atlas valley that most tourists skip entirely. Ouirgane sits at 1,000 meters in a wide green basin surrounded by juniper and oak forests. A small reservoir (Barrage Ouirgane) mirrors the mountains on still days. The hamlet has a handful of excellent auberges serving traditional Berber lunches on garden terraces. Walking trails lead through salt mines, Berber hamlets, and orchards of almond and olive trees. Thursday is market day, when Berber families descend from surrounding villages to trade.',
    highlights: [
      'Barrage Ouirgane mountain lake',
      'Salt mine walking trails',
      'Berber auberge lunches on garden terraces',
      'Thursday weekly souk',
      'Almond and olive orchards',
    ],
    transport:
      'Grand taxi toward Taroudant (from 30 MAD per person to Asni junction, then local taxi), private car/driver (from 500 MAD round trip), or organized Atlas excursion.',
    cost: 'From 30 MAD (shared taxi segment). Auberge lunch from 100 MAD. Trail walks free.',
    bestTime: 'February-March for almond blossoms. Spring and autumn for hiking. Summer is warm but comfortable at altitude.',
    tip: 'Ouirgane works as a half-day trip or a relaxed full day. The road continues to Tin Mal Mosque (12th-century Almohad), adding 30 minutes but major historical weight to the excursion.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM FEZ
   ═══════════════════════════════════════════════════════════════ */

const fezTrips = [
  {
    name: 'Meknes & Volubilis',
    distance: '60 km west + 30 km north',
    duration: '1h to Meknes, 30min more to Volubilis',
    icon: Building,
    description:
      'Two destinations, one extraordinary day. Meknes is the overlooked imperial city: Bab Mansour, arguably Morocco\u2019s grandest gate, fronts a plaza where locals drink orange juice for 5 MAD. Underground, the Heri es-Souani granaries stretch into darkness like a Roman cathedral. Then drive 30 km north to Volubilis, where 2,000-year-old Roman mosaics lie uncovered under the open sky. The House of Orpheus and House of Venus still have intact floor mosaics depicting mythological scenes. A triumphal arch dedicated to Caracalla anchors the ruins.',
    highlights: [
      'Bab Mansour gate in Meknes',
      'Heri es-Souani underground granaries',
      'Volubilis Roman mosaics (UNESCO)',
      'Triumphal Arch of Caracalla',
      'Two cities in a single day',
    ],
    transport:
      'Train to Meknes (from 25 MAD, 40 minutes), then grand taxi to Volubilis (from 30 MAD shared). Private car/driver (from 700 MAD round trip). Tour (from 300 MAD per person).',
    cost: 'From 25 MAD (train to Meknes). Volubilis entry from 70 MAD. Guide from 150 MAD.',
    bestTime: 'Spring and autumn for comfortable walking at Volubilis. The site has almost no shade.',
    tip: 'Hit Volubilis first thing (opens 8am) before the heat, then Meknes in the afternoon. The mosaics in the House of Orpheus are the highlight; look for the Orpheus charming animals scene.',
  },
  {
    name: 'Ifrane & Azrou Cedar Forest',
    distance: '77 km south + 17 km further',
    duration: '1-1.5 hours each way',
    icon: Mountain,
    description:
      'Morocco\u2019s alpine surprise. Ifrane was built by the French in 1929 as a hill station and still looks like a Swiss village: manicured lawns, peaked roofs, and a famous stone lion sculpture that every visitor photographs. The town holds Morocco\u2019s cold record at minus 23 degrees Celsius. Continue 17 km south to the Azrou Cedar Forest, where enormous Atlas cedars tower over a troop of Barbary macaques. The monkeys are habituated to humans and will approach for peanuts, making for excellent (if slightly chaotic) wildlife encounters.',
    highlights: [
      'Ifrane\u2019s European-style architecture',
      'Giant stone lion sculpture',
      'Ancient Atlas cedar forest',
      'Barbary macaque encounters in Azrou',
      'Cool mountain air in summer',
    ],
    transport:
      'Grand taxi (from 35 MAD per person shared), CTM bus to Ifrane (from 40 MAD), private car/driver (from 600 MAD round trip), or tour (from 250 MAD per person).',
    cost: 'From 35 MAD (shared taxi). Cedar forest entry free. Peanuts for monkeys from 10 MAD.',
    bestTime: 'Summer for cool relief from Fez heat. Winter for snow. Spring for wildflowers.',
    tip: 'The macaques look friendly but can bite. Place peanuts on the ground rather than hand-feeding. Ifrane\u2019s bakeries serve excellent French-style pastries.',
  },
  {
    name: 'Sefrou',
    distance: '28 km south',
    duration: '30-40 minutes each way',
    icon: Sunrise,
    description:
      'A compact medina town with a dramatic riverside gorge running through its center. Sefrou was once called "Little Jerusalem" for its large Jewish community, and the mellah (Jewish quarter) preserves narrow alleys, synagogue ruins, and carved wooden balconies. The Oued Aggai river drops through a waterfall in the middle of town, flanked by cafes where old men play cards. Sefrou hosts Morocco\u2019s Cherry Festival each June, a three-day celebration with a cherry queen coronation, folk music, and mountains of fresh cherries sold by the kilo.',
    highlights: [
      'Riverside gorge and waterfall through town',
      'Historic mellah (Jewish quarter)',
      'June Cherry Festival',
      'Compact, tourist-free medina',
      'Traditional craft workshops',
    ],
    transport:
      'Grand taxi from Fez (from 10 MAD per person shared, 30 minutes). Private car/driver (from 300 MAD round trip). No organized tours; this is a DIY excursion.',
    cost: 'From 10 MAD (shared taxi). Town entry free. Cherry festival free. Lunch from 35 MAD.',
    bestTime: 'June for the Cherry Festival. Spring for pleasant weather. Year-round for the medina.',
    tip: 'Sefrou is close enough for a half-day trip. Combine it with Bhalil, 5 km south, where Berber families still live in cave houses carved into the hillside. Ask at the Bhalil mosque for a cave house tour (from 20 MAD).',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM TANGIER
   ═══════════════════════════════════════════════════════════════ */

const tangierTrips = [
  {
    name: 'Chefchaouen',
    distance: '115 km southeast',
    duration: '2-2.5 hours each way',
    icon: Camera,
    description:
      'The Blue Pearl. Every wall, step, and doorway in this Rif Mountain medina is painted in shades of blue, from powder to cobalt to deep indigo. The drive from Tangier cuts through green valleys and small Rif villages, offering scenery that the longer Fez route cannot match. Inside the medina, lose yourself in blue alleyways, photograph the famous blue steps near Ras El Maa waterfall, shop for woven blankets and local goat cheese (jben), and drink fresh juice in the central Plaza Uta el-Hammam.',
    highlights: [
      'World-famous blue-painted medina',
      'Rif Mountain scenic drive',
      'Plaza Uta el-Hammam',
      'Ras El Maa waterfall',
      'Unique Rif handicrafts and jben cheese',
    ],
    transport:
      'CTM bus (from 55 MAD one way, 2.5 hours), private car/driver (from 1,000 MAD round trip), organized tour (from 400 MAD per person), or grand taxi.',
    cost: 'From 55 MAD (bus). Kasbah museum from 60 MAD. Lunch from 50 MAD.',
    bestTime: 'March-May and September-November. The blue paint is most vivid after rain.',
    tip: 'From Tangier, Chefchaouen is a far easier day trip than from Fez (2 hours vs 4). Leave by 8am. Wednesday is souk day.',
  },
  {
    name: 'Asilah',
    distance: '46 km southwest',
    duration: '45 minutes each way',
    icon: Camera,
    description:
      'A pocket-sized Atlantic town wrapped in Portuguese ramparts and covered in murals. Asilah\u2019s medina is one of Morocco\u2019s cleanest and most photogenic: whitewashed walls serve as canvases for artists who repaint them during the annual Arts Festival each July-August. Walk the sea-facing ramparts for Atlantic views, poke into small galleries selling original paintings, and finish the afternoon on Paradise Beach, a long sandy stretch just south of town. Seafood restaurants line the ramparts and serve grilled fish for half the price of Tangier.',
    highlights: [
      'Mural-covered whitewashed medina',
      'Portuguese ramparts with ocean views',
      'Paradise Beach swimming',
      'Annual Arts Festival (July-August)',
      'Affordable rampart seafood restaurants',
    ],
    transport:
      'Train (from 20 MAD, 45 minutes), grand taxi (from 15 MAD shared), CTM bus (from 20 MAD), or private car/driver (from 400 MAD round trip).',
    cost: 'From 15 MAD (shared taxi). Beach and medina free. Lunch from 50 MAD.',
    bestTime: 'June-September for beach weather. July-August for the Arts Festival.',
    tip: 'Asilah takes half a day. Combine it with Cap Spartel if you have a car. The rampart restaurants serve the best-value seafood on this coast.',
  },
  {
    name: 'Cap Spartel & Hercules Caves',
    distance: '14 km west + 5 km south',
    duration: '20 minutes each way',
    icon: Compass,
    description:
      'The point where the Atlantic meets the Mediterranean. Cap Spartel sits at Africa\u2019s northwestern tip, marked by an 1864 lighthouse with views over the Strait of Gibraltar to the Spanish coast on clear days. Five kilometers south, the Grottes d\u2019Hercule are sea caves used since prehistoric times. The cave opening facing the ocean is shaped like a reversed map of Africa, a detail that draws photographers from around the world. The coastal road between the two passes Robinson Beach, one of Tangier\u2019s best swimming spots.',
    highlights: [
      'Atlantic meets Mediterranean viewpoint',
      '1864 lighthouse at Cap Spartel',
      'Africa-shaped Hercules Cave opening',
      'Spain visible across the Strait',
      'Robinson Beach for swimming',
    ],
    transport:
      'Petit taxi from Tangier (from 100 MAD round trip with waiting), private car/driver (from 300 MAD half-day), or combined Tangier city tour (from 200 MAD per person).',
    cost: 'From 100 MAD (taxi round trip). Hercules Caves entry from 60 MAD. Lighthouse exterior free.',
    bestTime: 'Year-round. Clear days for Spain visibility. Sunset at Cap Spartel is legendary.',
    tip: 'Arrive at the caves early or late to avoid tour groups. Negotiate taxi fare before departing Tangier. Robinson Beach, midway between the sites, is worth a stop.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM CASABLANCA
   ═══════════════════════════════════════════════════════════════ */

const casablancaTrips = [
  {
    name: 'Rabat',
    distance: '87 km northeast',
    duration: '50 min-1 hour each way',
    icon: Building,
    description:
      'Morocco\u2019s capital is the easiest day trip from Casablanca. The Al Boraq high-speed train covers the distance in under 50 minutes. Start at the Kasbah des Oudaias, a cliff-top fortress with blue-and-white streets that rival Chefchaouen and zero crowds. Walk to the incomplete Hassan Tower, the skeleton of what would have been the world\u2019s largest mosque, then enter the ornate Mausoleum of Mohammed V next door. The Chellah, a medieval necropolis overrun by gardens and nesting storks, closes the loop. Rabat\u2019s medina is calm and hassle-free, a refreshing change from Marrakech.',
    highlights: [
      'Kasbah des Oudaias blue-and-white streets',
      'Hassan Tower and Mohammed V Mausoleum',
      'Chellah necropolis with nesting storks',
      'Calm, manageable medina',
      'Al Boraq high-speed train (under 50 min)',
    ],
    transport:
      'Al Boraq high-speed train (from 79 MAD first class, 50 min) or ONCF standard train (from 37 MAD, 1 hour). Train beats taxi in every way.',
    cost: 'From 37 MAD (train). Hassan Tower free. Chellah from 70 MAD. Kasbah entry free.',
    bestTime: 'Year-round. Rabat\u2019s Atlantic position keeps temperatures mild. Spring is best.',
    tip: 'Buy your return ticket at the same time. The Kasbah des Oudaias cafe overlooking the Atlantic serves some of the best mint tea in Morocco.',
  },
  {
    name: 'El Jadida',
    distance: '100 km southwest',
    duration: '1.5 hours each way',
    icon: Building,
    description:
      'A UNESCO coastal town shaped by 200 years of Portuguese rule. The Cite Portugaise, a 16th-century fortified enclave, contains the star attraction: an underground cistern where stone columns reflect perfectly in shallow water, creating an effect that looks more like a cathedral than a water tank. Walk the ramparts for ocean panoramas, explore the old Portuguese church, and eat at one of the simple seafood restaurants near the harbor. The beach stretching south fills with Moroccan families on weekends.',
    highlights: [
      'Portuguese cistern reflections (UNESCO)',
      'Rampart walks with ocean views',
      'Cite Portugaise fortified quarter',
      'Affordable harbor seafood',
      'Sandy beach south of town',
    ],
    transport:
      'ONCF train (from 45 MAD, 1.5 hours), CTM bus (from 50 MAD), private car/driver (from 700 MAD round trip), or grand taxi.',
    cost: 'From 45 MAD (train). Cistern entry from 20 MAD. Seafood lunch from 60 MAD.',
    bestTime: 'April-October for beach weather. The cistern is extraordinary year-round.',
    tip: 'Do not skip the Portuguese cistern. The reflected ceiling in shallow water is one of Morocco\u2019s most photographable sights. Walk the full rampart circuit.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const transportMethods = [
  {
    method: 'Grand Taxi',
    icon: Car,
    price: 'From 15 MAD per person (shared)',
    desc: 'Shared taxis departing when full (6 passengers). Cheapest option for most routes. Negotiate before boarding. Buy extra seats for comfort.',
    pros: ['Cheapest option', 'Frequent departures', 'Goes almost everywhere'],
    cons: ['Cramped with 6 passengers', 'No fixed schedule', 'Uncomfortable on long routes'],
  },
  {
    method: 'CTM / Supratours Bus',
    icon: Bus,
    price: 'From 25 MAD per trip',
    desc: 'Air-conditioned coaches with fixed schedules. CTM and Supratours (ONCF rail affiliate) are the top operators. Tickets available online or at the station.',
    pros: ['Air-conditioned and comfortable', 'Fixed reliable schedules', 'Very affordable'],
    cons: ['Limited routes for day trips', 'Fixed departure times only', 'Stations outside medinas'],
  },
  {
    method: 'Train (ONCF)',
    icon: Navigation,
    price: 'From 25 MAD per trip',
    desc: 'Morocco\u2019s rail network links major cities. Al Boraq high-speed runs Tangier-Rabat-Casablanca. Standard trains connect Fez, Meknes, Marrakech, and more.',
    pros: ['Most comfortable option', 'Scenic routes', 'Al Boraq high-speed available'],
    cons: ['Major cities only', 'No mountain/rural routes', 'Book ahead in peak season'],
  },
  {
    method: 'Private Car & Driver',
    icon: Car,
    price: 'From 300 MAD per half-day',
    desc: 'Maximum flexibility. Your riad can arrange a driver, or book through a licensed agency. The driver handles roads, parking, and navigation.',
    pros: ['Total flexibility', 'Door-to-door service', 'Stop anywhere you want'],
    cons: ['Most expensive option', 'Quality varies by driver', 'Negotiate everything upfront'],
  },
  {
    method: 'Organized Tour',
    icon: Users,
    price: 'From 200 MAD per person',
    desc: 'Group or private tours including transport, guide, and sometimes lunch. Bookable via hotel, local agencies, GetYourGuide, or Viator.',
    pros: ['All-inclusive convenience', 'Expert guide included', 'Zero planning required'],
    cons: ['Less flexibility', 'Fixed itinerary', 'Group tours mean waiting'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Through Your Riad',
    icon: Building,
    text: 'Riad owners maintain trusted networks of drivers and guides. They negotiate fair prices and handle logistics. Expect a small markup over DIY booking, but the reliability is worth every dirham.',
  },
  {
    title: 'Group vs. Private Tours',
    icon: Users,
    text: 'Group tours start from 200 MAD per person. Private tours start from 500 MAD but let you choose departure time, stops, and pace. For couples or small groups, private often matches the group per-person cost.',
  },
  {
    title: 'Verify Prices Before Leaving',
    icon: DollarSign,
    text: 'Confirm the total price, inclusions (lunch, entry fees, guide), and extras before you depart. Get it in writing or via WhatsApp. All prices in this guide are starting prices; seasonal pricing applies in peak months.',
  },
  {
    title: 'Depart Early, Return Late',
    icon: Sunrise,
    text: 'For long day trips (Ait Benhaddou, Chefchaouen, Ouzoud), leave by 7am. Traffic out of Marrakech and Fez thickens after 9am. Early arrival also means beating the tour bus crowds.',
  },
  {
    title: 'Check Vehicle Credentials',
    icon: Shield,
    text: 'Licensed tourist vehicles carry a white license plate. Confirm working seatbelts, air conditioning, and that the driver speaks your language (or arrange a separate guide). Mountain roads demand a confident driver.',
  },
  {
    title: 'Plan Around Ramadan',
    icon: Calendar,
    text: 'During Ramadan, restaurants at day trip destinations may close in daylight hours. Public holidays bring heavier traffic. Mid-week trips outside school holidays deliver the quietest, most enjoyable excursions.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    q: 'Is it safe to take day trips in Morocco independently?',
    a: 'Yes. Morocco is safe for independent travel on well-serviced routes. Trains and CTM buses are reliable and comfortable. For remote destinations like Ouzoud Falls or Ait Benhaddou, a private driver is the better choice since road conditions vary. Share your itinerary with your riad before heading out.',
  },
  {
    q: 'How much should I budget for a typical day trip?',
    a: 'Budget excursions on public transport start from 100 MAD per person including transport and basic entry fees. Mid-range private tours with a guide start from 300 MAD. Premium all-inclusive private car trips with lunch run from 800 MAD. Prices shift with destination, season, and group size.',
  },
  {
    q: 'Should I rent a car or hire a driver?',
    a: 'Car rental runs from 250 MAD per day, but Moroccan roads are challenging: aggressive drivers, inconsistent signage, mountain passes with hairpin turns, and livestock on rural roads. Most visitors prefer a car with driver from 500 MAD per day, removing the stress entirely.',
  },
  {
    q: 'What should I pack for a day trip?',
    a: 'Essentials: 1.5 liters of water minimum, sunscreen, hat, walking shoes with grip, cash in small bills (card acceptance is rare outside cities), a light jacket for mountain stops, and a charger. Waterfall trips call for a swimsuit and quick-dry towel.',
  },
  {
    q: 'Which day trips are best for families with kids?',
    a: 'Essaouira, Ourika Valley, Ifrane, Asilah, and Rabat all work well for families. The monkey encounters at Ouzoud Falls and Azrou Cedar Forest are a hit with children. Long drives to Chefchaouen from Fez or Ait Benhaddou may tire young kids. Private transport gives families the flexibility to stop for breaks.',
  },
  {
    q: 'What is the best time of year for Morocco day trips?',
    a: 'Spring (March-May) and autumn (September-November) offer the best conditions: comfortable temperatures, green landscapes, and manageable crowds. Summer is perfect for coastal trips (Essaouira, Asilah) but punishing at inland sites. Winter stays mild on the coast but turns cold in the mountains, with occasional snow above 1,500 meters.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   HELPER: TRIP CARD COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function TripCard({ trip }: { trip: (typeof marrakechTrips)[number] | (typeof fezTrips)[number] | (typeof tangierTrips)[number] | (typeof casablancaTrips)[number] }) {
  const Icon = trip.icon;
  return (
    <div className="card-moroccan p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-[var(--color-accent)]" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
            {trip.name}
          </h3>
          <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted)] mt-1">
            <span className="flex items-center gap-1">
              <Milestone className="w-3.5 h-3.5" />
              {trip.distance}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {trip.duration}
            </span>
          </div>
        </div>
      </div>

      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{trip.description}</p>

      {/* Highlights */}
      <div className="mb-4">
        <h4 className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] uppercase tracking-wider mb-2">
          Highlights
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {trip.highlights.map((h, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
              {h}
            </div>
          ))}
        </div>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
        <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <Bus className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="font-semibold text-[var(--text-primary)]">Transport</span>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed">{trip.transport}</p>
        </div>
        <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="font-semibold text-[var(--text-primary)]">Cost</span>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed">{trip.cost}</p>
        </div>
        <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <Sun className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="font-semibold text-[var(--text-primary)]">Best Time</span>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed">{trip.bestTime}</p>
        </div>
        <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
          <div className="flex items-center gap-1.5 mb-1">
            <Info className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            <span className="font-semibold text-[var(--text-primary)]">Insider Tip</span>
          </div>
          <p className="text-[var(--text-muted)] leading-relaxed">{trip.tip}</p>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDayTripsPage() {
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
          style={{ backgroundImage: 'url(/images/hero-day-trips.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Day Trips</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Day Trips &amp; Excursions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Best Day Trips in Morocco:
            <br className="hidden md:block" /> 17 Unmissable Excursions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Waterfalls, Roman ruins, blue mountain towns, and Atlantic fishing ports.
            The best day trips from Marrakech, Fez, Tangier, and Casablanca with
            transport, costs, and real insider tips.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Day Trips Matter in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s cities are extraordinary. But the country&apos;s real range reveals itself
                the moment you leave them. Within two or three hours of any major base, the landscape
                shifts completely: red-cliff waterfalls, 2,000-year-old Roman mosaics baking under
                open sky, a blue mountain medina painted in every shade of indigo, salt-sprayed Atlantic
                ramparts where fishermen grill the morning catch.
              </p>
              <p>
                A single day trip from Marrakech can take you over a 2,260-meter mountain pass to a ksar
                that starred in Gladiator, or drop you into a cool High Atlas valley where saffron farmers
                invite you in for tea. From Fez, a 40-minute train reaches an imperial city most tourists
                overlook entirely. From Tangier, the blue streets of Chefchaouen are closer than the airport.
              </p>
              <p>
                This guide covers 17 day trips from Morocco&apos;s four most popular bases. Each includes
                exact distances, drive times, transport options from as little as 10 MAD, and the
                practical tips that separate a good outing from a great one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Day Trips from Marrakech ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Marrakech
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Five excursions ranging from a quick Atlas valley escape to a full-day
            kasbah adventure across the Tichka pass.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April).
          </p>
          <div className="space-y-8">
            {marrakechTrips.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Fez ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Fez
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Roman ruins, cedar forests with wild monkeys, and a cherry-festival
            town most tourists have never heard of.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April).
          </p>
          <div className="space-y-8">
            {fezTrips.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Tangier ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The Blue City, a mural-covered art town, and the dramatic point where
            two oceans collide.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April).
          </p>
          <div className="space-y-8">
            {tangierTrips.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Casablanca ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fast trains connect Morocco&apos;s largest city to the elegant capital
            and a UNESCO Portuguese fortress town.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak months (October-April).
          </p>
          <div className="space-y-8">
            {casablancaTrips.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport Options Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Group Tour vs. Private vs. Self-Drive
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Five transport methods, each with trade-offs. Your choice depends on
            budget, comfort, and how much flexibility you want.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportMethods.map((transport) => {
              const TransIcon = transport.icon;
              return (
                <div key={transport.method} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TransIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {transport.method}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-semibold">{transport.price}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{transport.desc}</p>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs font-semibold text-[var(--color-gold)]">Pros:</span>
                      <div className="mt-1 space-y-1">
                        {transport.pros.map((pro, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                            <CheckCircle className="w-3 h-3 shrink-0 text-[var(--color-gold)]" />
                            {pro}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[var(--text-muted)]">Cons:</span>
                      <div className="mt-1 space-y-1">
                        {transport.cons.map((con, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-[var(--text-muted)]">
                            <AlertTriangle className="w-3 h-3 shrink-0 text-[var(--text-muted)]" />
                            {con}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Booking & Planning Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Booking &amp; Planning Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice for planning day trips across Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quick Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            All 17 Day Trips at a Glance
          </h2>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All costs are starting prices. Seasonal pricing applies during peak periods.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden overflow-x-auto">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                  <div className="p-3 px-4">Destination</div>
                  <div className="p-3 px-4">From City</div>
                  <div className="p-3 px-4">Distance / Time</div>
                  <div className="p-3 px-4">Budget From</div>
                </div>
                {[
                  { dest: 'Ourika Valley', city: 'Marrakech', dist: '60 km / 1h', budget: '25 MAD' },
                  { dest: 'Ouzoud Waterfalls', city: 'Marrakech', dist: '150 km / 2.5h', budget: '80 MAD' },
                  { dest: 'Essaouira', city: 'Marrakech', dist: '175 km / 2.5h', budget: '80 MAD' },
                  { dest: 'Ait Benhaddou', city: 'Marrakech', dist: '185 km / 3h', budget: '350 MAD' },
                  { dest: 'Ouirgane', city: 'Marrakech', dist: '61 km / 1h', budget: '30 MAD' },
                  { dest: 'Meknes & Volubilis', city: 'Fez', dist: '60 km / 1h', budget: '25 MAD' },
                  { dest: 'Ifrane & Azrou', city: 'Fez', dist: '77 km / 1h', budget: '35 MAD' },
                  { dest: 'Sefrou', city: 'Fez', dist: '28 km / 30m', budget: '10 MAD' },
                  { dest: 'Chefchaouen', city: 'Tangier', dist: '115 km / 2h', budget: '55 MAD' },
                  { dest: 'Asilah', city: 'Tangier', dist: '46 km / 45m', budget: '15 MAD' },
                  { dest: 'Cap Spartel / Caves', city: 'Tangier', dist: '14 km / 20m', budget: '100 MAD' },
                  { dest: 'Rabat', city: 'Casablanca', dist: '87 km / 50m', budget: '37 MAD' },
                  { dest: 'El Jadida', city: 'Casablanca', dist: '100 km / 1.5h', budget: '45 MAD' },
                ].map((row, i) => (
                  <div
                    key={`${row.dest}-${row.city}`}
                    className={`grid grid-cols-4 gap-0 text-sm ${
                      i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'
                    }`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{row.dest}</div>
                    <div className="p-3 px-4 text-[var(--text-secondary)]">{row.city}</div>
                    <div className="p-3 px-4 text-[var(--text-muted)]">{row.dist}</div>
                    <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">From {row.budget}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/marrakech" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to Marrakech&apos;s medina, souks, palaces, and gardens.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/atlas-mountains" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, Berber villages, and mountain adventures in the High Atlas.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Navigation className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, grand taxis, and how to get around Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco on a budget, from 300 MAD per day.
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

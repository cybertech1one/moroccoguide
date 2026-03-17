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
  title: 'Morocco Day Trips Guide 2026 | Best Day Trips from Marrakech, Fes, Casablanca & Tangier',
  description:
    'Complete guide to the best day trips from Morocco\'s major cities. 15 incredible excursions from Marrakech, Fes, Casablanca, and Tangier including Ouzoud Waterfalls, Essaouira, Chefchaouen, Ait Benhaddou, Volubilis, and more. Transport options, costs, and insider tips.',
  keywords: [
    'Morocco day trips',
    'day trips from Marrakech',
    'day trips from Fes',
    'day trips from Casablanca',
    'day trips from Tangier',
    'Ouzoud Waterfalls day trip',
    'Essaouira day trip',
    'Chefchaouen day trip',
    'Ait Benhaddou excursion',
    'Ourika Valley trip',
    'Volubilis Roman ruins',
    'Meknes day trip',
    'Imlil Toubkal base',
    'Ifrane Morocco',
    'Asilah day trip',
    'Morocco excursions 2026',
    'Morocco transport options',
    'Morocco guided tours',
    'El Jadida Portuguese city',
    'Cap Spartel Tangier',
    'Hercules Caves Morocco',
    'Rabat day trip Casablanca',
    'Moulay Idriss Zerhoun',
    'Azemmour Morocco',
  ],
  openGraph: {
    title: 'Morocco Day Trips Guide 2026 | Best Day Trips from Marrakech, Fes, Casablanca & Tangier',
    description:
      'Discover 15 incredible day trips from Morocco\'s major cities. From Ouzoud Waterfalls to Chefchaouen\'s blue streets, with transport options, costs from 50 MAD, and expert insider tips.',
    url: `${BASE_URL}/morocco-day-trips`,
    images: [
      {
        url: `${BASE_URL}/images/hero-day-trips.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic Moroccan landscape with mountains, kasbahs, and winding roads perfect for day trips',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Day Trips Guide 2026 | 15 Best Excursions',
    description:
      'The best day trips from Marrakech, Fes, Casablanca, and Tangier. Complete guide with transport, costs from 50 MAD, and insider tips for every excursion.',
    images: [`${BASE_URL}/images/hero-day-trips.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-day-trips` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-day-trips`,
  name: 'Morocco Day Trips Guide 2026 | Best Day Trips from Marrakech, Fes, Casablanca & Tangier',
  description:
    'Complete guide to the best day trips from Morocco\'s major cities. 15 incredible excursions with transport options, costs, and insider tips.',
  url: `${BASE_URL}/morocco-day-trips`,
  image: `${BASE_URL}/images/hero-day-trips.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-day-trips`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Day Trips Guide', item: `${BASE_URL}/morocco-day-trips` },
    ],
  },
};

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM MARRAKECH
   ═══════════════════════════════════════════════════════════════ */

const dayTripsFromMarrakech = [
  {
    name: 'Ouzoud Waterfalls',
    distance: '150 km northeast',
    duration: '2.5 hours each way',
    icon: Waves,
    description:
      'The most spectacular waterfalls in North Africa. The cascades plunge 110 meters over red-rock cliffs into a gorge lined with olive groves. Barbary macaques swing through the trees, and a rainbow often arcs through the mist at the base. You can take a small boat ride at the bottom for an up-close view of the falls, then hike the surrounding trails. The village above has simple restaurants serving tagine with panoramic views.',
    highlights: [
      '110-meter cascading waterfalls',
      'Barbary macaque monkeys',
      'Boat ride at the base of the falls',
      'Olive grove hiking trails',
      'Traditional lunch with waterfall views',
    ],
    transportOptions: 'Shared minivan (from 80 MAD one way), private car/driver (from 800 MAD round trip), organized tour (from 250 MAD per person), or CTM bus to Azilal then local taxi.',
    cost: 'From 80 MAD (transport only). Boat ride from 20 MAD. Lunch from 50 MAD.',
    bestTime: 'Spring (March-May) when water flow is strongest. Avoid August when the falls can slow to a trickle.',
    tips: 'Wear sturdy shoes for the steep descent to the base. Arrive before 10am to avoid crowds. The monkeys are bold; secure your food and belongings.',
  },
  {
    name: 'Essaouira',
    distance: '175 km west',
    duration: '2.5-3 hours each way',
    icon: Waves,
    description:
      'A UNESCO-listed coastal medina with Portuguese ramparts, vibrant blue fishing boats, and some of the best seafood in Morocco. Essaouira is a complete change of pace from Marrakech: cool Atlantic breezes replace the inland heat, and the laid-back atmosphere is perfect for wandering. Explore the medina\'s art galleries, walk the ramparts where Game of Thrones was filmed, watch the fishing boats unload their catch, and eat grilled sardines on the port.',
    highlights: [
      'UNESCO World Heritage medina',
      'Atlantic seafood at the port',
      'Portuguese rampart walks',
      'Art galleries and woodworking souks',
      'Windsurfing and kitesurfing beach',
    ],
    transportOptions: 'Supratours bus (from 80 MAD one way, 2.5 hours), private car/driver (from 1,000 MAD round trip), organized tour (from 300 MAD per person), or grand taxi.',
    cost: 'From 80 MAD (transport only). Seafood lunch from 60 MAD. Ramparts entry free.',
    bestTime: 'Year-round, but April-June and September-October are ideal. Summer can be windy (great for windsurfers).',
    tips: 'Start early to maximize time in Essaouira. The Supratours bus is comfortable and reliable. Eat at the port fish stalls for the freshest, cheapest seafood in town.',
  },
  {
    name: 'Ourika Valley',
    distance: '60 km south',
    duration: '1-1.5 hours each way',
    icon: Mountain,
    description:
      'The closest escape from Marrakech into the High Atlas Mountains. The Ourika Valley follows a river through Berber villages clinging to green hillsides. At the end of the road, a series of small waterfalls offer a refreshing hike. Along the way, stop at a saffron farm, visit a traditional Berber house, and browse the Monday souk if your timing is right. The valley is noticeably cooler than Marrakech, making it a perfect summer escape.',
    highlights: [
      'Berber village visits',
      'Waterfall hike at Setti Fatma',
      'Saffron and aromatic plant gardens',
      'Traditional Berber house tours',
      'Monday souk at Tnine Ourika',
    ],
    transportOptions: 'Grand taxi from Bab Er Rob (from 25 MAD per person shared), private car/driver (from 500 MAD round trip), organized tour (from 200 MAD per person).',
    cost: 'From 25 MAD (shared taxi). Waterfall guide from 100 MAD. Berber house visit from 20 MAD.',
    bestTime: 'Spring for wildflowers, summer to escape Marrakech heat. Avoid during heavy rain when the river can flood.',
    tips: 'The waterfall hike requires a local guide (mandatory fee). Wear shoes with grip as rocks are slippery. The valley road has no barriers; choose your driver carefully.',
  },
  {
    name: 'Ait Benhaddou',
    distance: '185 km southeast',
    duration: '3-3.5 hours each way',
    icon: Building,
    description:
      'A UNESCO World Heritage ksar (fortified village) that has served as a backdrop for dozens of Hollywood films including Gladiator, Game of Thrones, and Lawrence of Arabia. The earthen architecture rises dramatically from the riverbed, with the snow-capped Atlas Mountains behind. Cross the river (or the footbridge) and climb to the top of the ksar for breathtaking panoramic views. The drive itself crosses the spectacular Tizi n\'Tichka pass at 2,260 meters.',
    highlights: [
      'UNESCO World Heritage Site',
      'Hollywood filming location',
      'Tizi n\'Tichka mountain pass (2,260m)',
      'Panoramic views from the ksar summit',
      'Traditional earthen architecture',
    ],
    transportOptions: 'Private car/driver (from 1,200 MAD round trip), organized tour (from 350 MAD per person), or shared transport via Ouarzazate. No direct public bus.',
    cost: 'From 350 MAD (organized tour). Ksar entry free (guide from 100 MAD). Lunch from 60 MAD.',
    bestTime: 'October-April for comfortable temperatures. The drive is stunning year-round. Summer can exceed 40 degrees at the ksar.',
    tips: 'This is a long day. Leave by 7am and consider combining with a stop in Ouarzazate. The Tizi n\'Tichka pass has hairpin turns; if prone to motion sickness, bring medication.',
  },
  {
    name: 'Imlil &amp; Toubkal Base',
    distance: '64 km south',
    duration: '1.5 hours each way',
    icon: Mountain,
    description:
      'The gateway to North Africa\'s highest peak, Jebel Toubkal (4,167m). Even if you are not climbing the summit, Imlil is a beautiful Berber mountain village at 1,740 meters that offers excellent day hiking. Walk through walnut groves and terraced fields to the village of Armed, visit the Kasbah du Toubkal (a stunning mountain lodge), and enjoy lunch with views of the surrounding peaks. The air is crisp and clean, and the scenery is a world away from the bustle of Marrakech.',
    highlights: [
      'Gateway to Jebel Toubkal (4,167m)',
      'Berber mountain village experience',
      'Kasbah du Toubkal visit',
      'Day hiking through walnut groves',
      'Panoramic High Atlas views',
    ],
    transportOptions: 'Grand taxi from Marrakech (from 50 MAD per person shared, change at Asni), private car/driver (from 600 MAD round trip), organized trek (from 300 MAD per person).',
    cost: 'From 50 MAD (shared taxi). Kasbah du Toubkal lunch from 200 MAD. Hiking guide from 300 MAD per day.',
    bestTime: 'April-June and September-November. Winter brings snow (beautiful but cold). July-August is hot at lower elevations.',
    tips: 'Altitude can affect some visitors; take the hike slowly and drink water. Mules can carry your bags if needed. The Kasbah du Toubkal rooftop lunch must be booked in advance.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM FES
   ═══════════════════════════════════════════════════════════════ */

const dayTripsFromFes = [
  {
    name: 'Meknes &amp; Volubilis',
    distance: '60 km west (Meknes) + 30 km north (Volubilis)',
    duration: '1 hour to Meknes, then 30 min to Volubilis',
    icon: Building,
    description:
      'A double-header day trip that combines an imperial city with Morocco\'s finest Roman ruins. Meknes, one of Morocco\'s four imperial cities, boasts the monumental Bab Mansour gate, the vast Heri es-Souani granaries, and a relaxed medina with far fewer tourists than Fes or Marrakech. Then continue to Volubilis, a UNESCO World Heritage Site with remarkably preserved Roman mosaics, a triumphal arch, and a basilica dating to the 3rd century. The site sits on a fertile plain with sweeping views of the surrounding countryside.',
    highlights: [
      'Bab Mansour gate in Meknes',
      'Heri es-Souani royal granaries',
      'Volubilis Roman mosaics (UNESCO)',
      'Triumphal Arch of Caracalla',
      'Two cities in one day trip',
    ],
    transportOptions: 'Train to Meknes (from 25 MAD, 40 minutes), then grand taxi to Volubilis (from 30 MAD shared). Private car/driver (from 700 MAD round trip). Organized tour (from 300 MAD per person).',
    cost: 'From 25 MAD (train to Meknes). Volubilis entry from 70 MAD. Guide from 150 MAD.',
    bestTime: 'Spring and autumn for comfortable walking temperatures at Volubilis. The site has minimal shade.',
    tips: 'Visit Volubilis first (opens at 8am) before the heat builds, then Meknes in the afternoon. Bring a hat and water for Volubilis. The mosaics in the House of Orpheus and House of Venus are the highlights.',
  },
  {
    name: 'Ifrane &amp; Azrou Cedar Forest',
    distance: '77 km south (Ifrane) + 17 km further (Azrou)',
    duration: '1-1.5 hours each way',
    icon: Mountain,
    description:
      'A jarring contrast to the ancient medinas of Morocco. Ifrane, nicknamed "Little Switzerland," is a clean, green town with European-style architecture, manicured gardens, and even a giant stone lion sculpture. Built by the French in 1929 as a hill station, it holds Morocco\'s record for the coldest temperature (-23 degrees Celsius). Continue to the Azrou Cedar Forest (Foret des Cedres), home to enormous Atlas cedars and a troop of friendly Barbary macaques who will happily pose for photos in exchange for peanuts.',
    highlights: [
      'Ifrane\'s European-style architecture',
      'Giant stone lion sculpture',
      'Ancient Atlas cedar forest',
      'Barbary macaque monkeys in Azrou',
      'Cool mountain air escape',
    ],
    transportOptions: 'Grand taxi (from 35 MAD per person shared), CTM bus to Ifrane (from 40 MAD), private car/driver (from 600 MAD round trip), organized tour (from 250 MAD per person).',
    cost: 'From 35 MAD (shared taxi). Cedar forest entry free. Peanuts for monkeys from 10 MAD.',
    bestTime: 'Year-round. Summer for cool relief from Fes heat. Winter for potential snow. Spring for wildflowers.',
    tips: 'The macaques look cute but can bite. Do not hand-feed them; place peanuts on the ground. Ifrane has excellent bakeries for a French-style pastry stop.',
  },
  {
    name: 'Chefchaouen (Long Day Trip)',
    distance: '200 km northwest',
    duration: '3.5-4 hours each way',
    icon: Camera,
    description:
      'The famous Blue City nestled in the Rif Mountains. Every wall, step, and doorway in the medina is painted in shades of blue, creating one of the most photogenic towns on earth. While most visitors stay overnight, it is possible as a very long day trip from Fes if you leave early. Wander the blue-washed streets, visit the kasbah museum, drink mint tea in the shady Plaza Uta el-Hammam, and browse the leather and wool crafts unique to the Rif region.',
    highlights: [
      'Blue-painted medina streets',
      'Plaza Uta el-Hammam',
      'Kasbah museum and gardens',
      'Rif Mountain scenery on the drive',
      'Unique local handicrafts',
    ],
    transportOptions: 'CTM bus (from 75 MAD one way, 4 hours), private car/driver (from 1,400 MAD round trip), organized tour (from 500 MAD per person). No train service.',
    cost: 'From 75 MAD (bus one way). Kasbah entry from 60 MAD. Lunch from 50 MAD.',
    bestTime: 'March-May and September-November. Summer is hot. The blue paint is most vivid after rainfall.',
    tips: 'This is the longest day trip on our list. Leave Fes by 6am. Consider staying overnight instead if your schedule allows. An overnight trip gives you sunset and sunrise in the blue medina, which is far superior.',
  },
  {
    name: 'Moulay Idriss Zerhoun',
    distance: '55 km west',
    duration: '1 hour each way',
    icon: Building,
    description:
      'Morocco\'s holiest town, draped over two hills above the Volubilis plain. Named after Moulay Idriss I, the founder of Morocco\'s first dynasty, this whitewashed pilgrimage town was closed to non-Muslims overnight until 2005. Today visitors are welcome to explore the winding streets, enjoy panoramic views from the terraces, and soak in the atmosphere of a town that feels genuinely untouched by tourism. The Saturday souk is particularly lively. Combine with Volubilis, which is just 4 km away.',
    highlights: [
      'Morocco\'s holiest pilgrimage town',
      'Panoramic views from twin hills',
      'Untouched-by-tourism atmosphere',
      'Saturday souk (weekly market)',
      'Easy combination with Volubilis (4 km)',
    ],
    transportOptions: 'Grand taxi from Fes (from 30 MAD per person shared), private car/driver (from 500 MAD round trip including Volubilis), organized tour often combined with Meknes/Volubilis.',
    cost: 'From 30 MAD (shared taxi). Town entry free. Lunch from 40 MAD.',
    bestTime: 'Year-round. The annual moussem (pilgrimage festival) in August-September is spectacular but very crowded.',
    tips: 'Non-Muslims cannot enter the mausoleum of Moulay Idriss but can view it from the terrace above. Be respectful of the town\'s sacred status. Combine with Volubilis for a full day.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM CASABLANCA
   ═══════════════════════════════════════════════════════════════ */

const dayTripsFromCasablanca = [
  {
    name: 'Rabat',
    distance: '87 km northeast',
    duration: '1 hour each way',
    icon: Building,
    description:
      'Morocco\'s elegant capital city is the easiest and most rewarding day trip from Casablanca. The fast train covers the distance in under an hour. Explore the UNESCO-listed Kasbah des Oudaias, a fortress perched above the Atlantic with blue-and-white streets rivaling Chefchaouen. Visit the Hassan Tower, the incomplete minaret of what would have been the world\'s largest mosque. See the ornate Mausoleum of Mohammed V. Wander the walled medina, which is calmer and more manageable than most in Morocco. The Chellah, a medieval necropolis overtaken by gardens and nesting storks, is a hidden gem.',
    highlights: [
      'Kasbah des Oudaias (UNESCO)',
      'Hassan Tower and Mohammed V Mausoleum',
      'Chellah necropolis and gardens',
      'Manageable, calm medina',
      'Fast train connection (under 1 hour)',
    ],
    transportOptions: 'Al Boraq high-speed train (from 79 MAD first class, 50 minutes) or ONCF regular train (from 37 MAD, 1 hour). Grand taxi available but train is far superior.',
    cost: 'From 37 MAD (train). Hassan Tower entry free. Chellah from 70 MAD. Kasbah entry free.',
    bestTime: 'Year-round. Rabat has mild weather thanks to the Atlantic. Spring is particularly pleasant.',
    tips: 'Take the train, not a taxi. Buy your return ticket at the same time. The Kasbah des Oudaias cafe overlooking the ocean is one of the best tea spots in Morocco.',
  },
  {
    name: 'El Jadida',
    distance: '100 km southwest',
    duration: '1.5 hours each way',
    icon: Building,
    description:
      'A UNESCO World Heritage coastal town with a fascinating Portuguese legacy. The Cite Portugaise (Portuguese City) is the star attraction: a 16th-century fortified town with an eerie underground cistern that reflects in the water like a cathedral. Walk the ramparts for ocean views, explore the old Portuguese church, and watch the waves crash against the seawall. The beach stretching south of town is popular with Moroccan families on weekends. The seafood here is excellent and cheaper than in more touristy coastal towns.',
    highlights: [
      'Portuguese cistern (UNESCO)',
      'Rampart walks with ocean views',
      'Cite Portugaise fortified town',
      'Excellent, affordable seafood',
      'Sandy beach south of town',
    ],
    transportOptions: 'ONCF train (from 45 MAD, 1.5 hours, limited departures), CTM bus (from 50 MAD, 1.5 hours), private car/driver (from 700 MAD round trip), or grand taxi.',
    cost: 'From 45 MAD (train). Cistern entry from 20 MAD. Seafood lunch from 60 MAD.',
    bestTime: 'April-October for beach weather. The cistern is fascinating year-round.',
    tips: 'The Portuguese cistern is often missed by visitors; do not skip it. The reflected ceiling in the shallow water is one of Morocco\'s most photographable sights. Walk the full rampart circuit for the best views.',
  },
  {
    name: 'Azemmour',
    distance: '75 km southwest',
    duration: '1-1.5 hours each way',
    icon: Camera,
    description:
      'One of Morocco\'s best-kept secrets. This tiny, walled medina town sits at the mouth of the Oum er-Rbia River and has almost no tourism infrastructure, which is precisely its charm. The Portuguese-era ramparts are intact, the streets are decorated with murals by local and international artists, and the old mellah (Jewish quarter) retains its original architecture. Azemmour is often combined with El Jadida, which is just 15 km further south. The town has a thriving street art scene that has transformed its walls into an open-air gallery.',
    highlights: [
      'Portuguese-era ramparts',
      'Street art murals throughout medina',
      'Historic mellah (Jewish quarter)',
      'Zero-tourism authentic atmosphere',
      'Easy combination with El Jadida',
    ],
    transportOptions: 'Grand taxi from Casablanca (from 40 MAD per person shared), CTM bus to El Jadida then local taxi (from 60 MAD total), private car/driver (from 600 MAD round trip including El Jadida).',
    cost: 'From 40 MAD (shared taxi). Town entry free. Lunch from 40 MAD.',
    bestTime: 'Year-round. Spring and autumn are most comfortable.',
    tips: 'Combine Azemmour with El Jadida for a full day. There are few restaurants; the cafes near the ramparts serve simple but good food. Ask locals to point out the best murals.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: DAY TRIPS FROM TANGIER
   ═══════════════════════════════════════════════════════════════ */

const dayTripsFromTangier = [
  {
    name: 'Chefchaouen',
    distance: '115 km southeast',
    duration: '2-2.5 hours each way',
    icon: Camera,
    description:
      'The Blue Pearl of Morocco. This iconic mountain town is closer to Tangier than to Fes, making it an excellent day trip from the north. The entire medina is painted in every shade of blue imaginable, from powder to cobalt to indigo. The drive through the Rif Mountains is scenic, passing through green valleys and small villages. In Chefchaouen, lose yourself in the blue alleyways, photograph the famous blue steps and doorways, shop for woven blankets and goat cheese unique to the Rif, and relax in the central plaza with a glass of fresh orange juice.',
    highlights: [
      'World-famous blue medina',
      'Rif Mountain scenic drive',
      'Unique Rif handicrafts and foods',
      'Central plaza atmosphere',
      'Photography at every turn',
    ],
    transportOptions: 'CTM bus (from 55 MAD one way, 2.5 hours), private car/driver (from 1,000 MAD round trip), organized tour (from 400 MAD per person), or grand taxi.',
    cost: 'From 55 MAD (bus one way). Kasbah museum from 60 MAD. Lunch from 50 MAD.',
    bestTime: 'March-May and September-November. Summer is warm but manageable in the mountains.',
    tips: 'From Tangier, Chefchaouen is a much more comfortable day trip than from Fes. Leave by 8am to have a full day. Wednesday is the weekly souk day in Chefchaouen.',
  },
  {
    name: 'Asilah',
    distance: '46 km southwest',
    duration: '45 minutes each way',
    icon: Waves,
    description:
      'A charming Atlantic coastal town with Portuguese fortifications, whitewashed walls covered in murals, and a laid-back arts scene. Asilah is one of the closest and easiest day trips from Tangier. The medina is tiny, clean, and beautiful, with galleries and craft shops tucked into its narrow streets. Walk the ramparts overlooking the ocean, visit the Raissouni Palace, and spend the afternoon on Paradise Beach, a long sandy stretch just south of town. The annual Asilah Arts Festival (July-August) transforms the town into an open-air arts celebration.',
    highlights: [
      'Whitewashed medina with murals',
      'Portuguese ramparts and ocean views',
      'Paradise Beach for swimming',
      'Annual arts festival (July-August)',
      'Art galleries and craft shops',
    ],
    transportOptions: 'Train (from 20 MAD, 45 minutes), grand taxi (from 15 MAD per person shared), CTM bus (from 20 MAD), or private car/driver (from 400 MAD round trip).',
    cost: 'From 15 MAD (shared taxi). Beach and medina free. Lunch from 50 MAD.',
    bestTime: 'June-September for beach weather. July-August for the arts festival. Spring and autumn for quieter visits.',
    tips: 'Asilah is small enough to see in half a day. Consider combining with Cap Spartel if you have a car. The seafood restaurants along the ramparts are excellent and affordable.',
  },
  {
    name: 'Cap Spartel &amp; Hercules Caves',
    distance: '14 km west (Cap Spartel) + 5 km south (Caves)',
    duration: '20 minutes each way',
    icon: Compass,
    description:
      'The dramatic point where the Atlantic Ocean meets the Mediterranean Sea. Cap Spartel is the northwestern tip of the African continent, marked by a picturesque lighthouse built in 1864. The views over the Strait of Gibraltar, with the coast of Spain visible on clear days, are magnificent. Just south of the cape, the Grottes d\'Hercule (Hercules Caves) are a network of sea caves that have been used since prehistoric times. The cave opening facing the ocean is shaped like the map of Africa in reverse. The surrounding coastline has wild beaches and luxury villas.',
    highlights: [
      'Where Atlantic meets Mediterranean',
      'Cape lighthouse built in 1864',
      'Hercules Caves with Africa-shaped opening',
      'Views of Spain across the Strait',
      'Wild beaches and coastal walks',
    ],
    transportOptions: 'Petit taxi from Tangier (from 100 MAD round trip with waiting), private car/driver (from 300 MAD half-day), organized tour often combined with Tangier city tour (from 200 MAD per person).',
    cost: 'From 100 MAD (taxi round trip). Hercules Caves entry from 60 MAD. Cap Spartel lighthouse exterior free.',
    bestTime: 'Year-round. Clear days for best Spain visibility. Sunset at Cap Spartel is spectacular.',
    tips: 'The caves are a tourist hotspot; arrive early or late in the day. Negotiate taxi fare before departing. The coastal road between Cap Spartel and the caves passes Robinson Beach, one of Tangier\'s best swimming spots.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BOOKING & PLANNING TIPS
   ═══════════════════════════════════════════════════════════════ */

const bookingTips = [
  {
    title: 'Book Through Your Riad or Hotel',
    icon: Building,
    description:
      'Your accommodation is often the best place to arrange day trips. Riad owners have trusted drivers and guides, can negotiate fair prices on your behalf, and handle the logistics. Expect to pay slightly more than arranging independently, but the convenience and reliability are worth it.',
  },
  {
    title: 'Compare Group vs. Private Tours',
    icon: Users,
    description:
      'Group tours start from 200 MAD per person and are sociable and cost-effective. Private tours start from 500 MAD and offer flexibility: you choose departure time, stops, and pace. For couples or small groups, private tours often work out to a similar per-person price with far more freedom.',
  },
  {
    title: 'Verify Prices Before Departing',
    icon: DollarSign,
    description:
      'Always confirm the total price, what is included (lunch, entry fees, guide), and what is extra before departing. Get the agreement in writing or via WhatsApp message. Reputable operators are transparent about pricing. All prices in this guide are starting prices; seasonal pricing applies during peak months.',
  },
  {
    title: 'Start Early, Return Late',
    icon: Sunrise,
    description:
      'For longer day trips (Ait Benhaddou, Chefchaouen, Ouzoud), leave by 7am to maximize your time at the destination. Traffic out of Marrakech and Fes can be heavy after 9am. An early start also means arriving before the tourist crowds.',
  },
  {
    title: 'Check Vehicle and Driver Credentials',
    icon: Shield,
    description:
      'If hiring a private driver, ensure the vehicle has functioning seatbelts and air conditioning. Licensed tourist transport vehicles have a white plate. Your driver should speak your language or you will need a separate guide. Confirm the driver knows the route.',
  },
  {
    title: 'Plan for Ramadan and Public Holidays',
    icon: Calendar,
    description:
      'During Ramadan, some restaurants at day trip destinations may be closed during daylight hours. Public holidays can mean heavier traffic and crowded destinations. Conversely, visiting during quieter periods (mid-week, outside school holidays) means a more peaceful experience.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT OPTIONS OVERVIEW
   ═══════════════════════════════════════════════════════════════ */

const transportOverview = [
  {
    method: 'Grand Taxi',
    icon: Car,
    priceRange: 'From 15 MAD per person (shared)',
    description:
      'Shared taxis that depart when full (6 passengers). The most affordable option for many routes. Negotiate the price before getting in. You can buy extra seats for more comfort.',
    pros: ['Cheapest option', 'Frequent departures', 'Authentic experience'],
    cons: ['Cramped with 6 passengers', 'No fixed schedule', 'Can be uncomfortable on long routes'],
  },
  {
    method: 'CTM / Supratours Bus',
    icon: Bus,
    priceRange: 'From 25 MAD per trip',
    description:
      'Comfortable, air-conditioned coaches with fixed schedules. CTM and Supratours (the ONCF rail affiliate) are the two best bus operators. Tickets can be booked online or at the station.',
    pros: ['Comfortable and air-conditioned', 'Fixed schedules', 'Affordable'],
    cons: ['Limited routes for day trips', 'Fixed departure times', 'Stations may be outside medina'],
  },
  {
    method: 'Train (ONCF)',
    icon: Navigation,
    priceRange: 'From 25 MAD per trip',
    description:
      'Morocco\'s rail network connects major cities. The Al Boraq high-speed train runs Tangier-Casablanca-Rabat. Standard trains connect Fes, Meknes, Marrakech, and more. Comfortable, scenic, and reliable.',
    pros: ['Most comfortable option', 'Scenic routes', 'Al Boraq high-speed available'],
    cons: ['Limited network (major cities only)', 'Not available for mountain/rural destinations', 'Advance booking recommended'],
  },
  {
    method: 'Private Car & Driver',
    icon: Car,
    priceRange: 'From 300 MAD per half-day',
    description:
      'Hire a car with driver for maximum flexibility. Your riad can arrange this, or book through a licensed agency. The driver handles navigation, parking, and road conditions while you enjoy the scenery.',
    pros: ['Complete flexibility', 'Door-to-door service', 'Can stop anywhere'],
    cons: ['Most expensive option', 'Quality varies', 'Negotiate clearly beforehand'],
  },
  {
    method: 'Organized Tour',
    icon: Users,
    priceRange: 'From 200 MAD per person',
    description:
      'Guided group or private tours that include transport, guide, and sometimes lunch. Bookable through your hotel, local agencies, or platforms like GetYourGuide and Viator. The easiest, most hands-off option.',
    pros: ['All-inclusive convenience', 'Expert guide included', 'No planning required'],
    cons: ['Less flexibility', 'Fixed itinerary', 'Group tours mean waiting for others'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqItems = [
  {
    question: 'Is it safe to do day trips in Morocco independently?',
    answer:
      'Yes, Morocco is generally safe for independent day trips, especially on well-traveled routes. Trains and CTM buses are reliable and comfortable. For remote destinations like Ouzoud Waterfalls or Ait Benhaddou, hiring a private driver is recommended as road conditions can vary. Always share your itinerary with your riad or hotel.',
  },
  {
    question: 'How much should I budget for a typical day trip?',
    answer:
      'Budget day trips using public transport start from 100 MAD per person (transport plus entry fees). Mid-range private tours start from 300 MAD per person including guide and transport. Luxury private car day trips with guide and lunch included start from 800 MAD per person. All prices are starting prices and vary by destination, season, and group size.',
  },
  {
    question: 'Can I rent a car and drive myself on day trips?',
    answer:
      'Yes, car rental is available in all major cities from 250 MAD per day. However, driving in Morocco can be challenging: road conditions vary, signage is inconsistent, and driving styles are aggressive by European standards. Mountain passes like Tizi n\'Tichka require confident driving. For most visitors, hiring a car with driver is a better option.',
  },
  {
    question: 'What should I pack for a day trip in Morocco?',
    answer:
      'Essentials include: water (at least 1.5 liters), sunscreen, hat, comfortable walking shoes, cash in small denominations (many day trip destinations have limited card payment), a light jacket (mountain destinations are cooler), and a phone charger. For waterfall trips, bring a swimsuit and quick-dry towel.',
  },
  {
    question: 'Are day trips suitable for children and families?',
    answer:
      'Most day trips in this guide are family-friendly. Essaouira, Ourika Valley, Ifrane, Asilah, and Rabat are particularly good for families. The monkey encounters at Ouzoud and Azrou are a hit with children. Long drives (Chefchaouen from Fes, Ait Benhaddou) may tire young children. Private transport gives families the flexibility to stop as needed.',
  },
  {
    question: 'What is the best time of year for day trips in Morocco?',
    answer:
      'Spring (March-May) and autumn (September-November) offer the best conditions for most day trips: comfortable temperatures, green landscapes, and manageable tourist numbers. Summer (June-August) is extremely hot for inland destinations like Ait Benhaddou but perfect for coastal trips to Essaouira and Asilah. Winter (December-February) is mild on the coast but cold in the mountains.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   HELPER: TRIP CARD COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function TripCard({ trip }: { trip: { name: string; distance: string; duration: string; icon: React.ComponentType<{ className?: string }>; description: string; highlights: readonly string[]; transportOptions: string; cost: string; bestTime: string; tips: string } }) {
  const TripIcon = trip.icon;
  return (
    <div className="card-moroccan p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
          <TripIcon className="w-6 h-6 text-[var(--color-accent)]" />
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
          {trip.highlights.map((highlight, i) => (
            <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
              {highlight}
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
          <p className="text-[var(--text-muted)] leading-relaxed">{trip.transportOptions}</p>
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
          <p className="text-[var(--text-muted)] leading-relaxed">{trip.tips}</p>
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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-day-trips.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Day Trips Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Day Trips &amp; Excursions
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Day Trips Guide:
            <br className="hidden md:block" /> 15 Incredible Excursions
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From cascading waterfalls and ancient Roman ruins to blue-painted mountain towns and
            Atlantic coastal gems. The best day trips from Marrakech, Fes, Casablanca, and Tangier.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Day Trips Are Essential to Your Morocco Experience
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco&apos;s cities are extraordinary, but the real magic often lies just beyond their walls.
                Within a few hours of any major city, you will find waterfalls cascading over red cliffs,
                Roman ruins with intact mosaics, UNESCO-listed kasbahs that starred in Hollywood films,
                and mountain villages where Berber traditions have endured for centuries.
              </p>
              <p>
                Day trips reveal the incredible diversity packed into this compact country. Leave
                Marrakech&apos;s bustling medina in the morning and by noon you could be hiking in the High
                Atlas, eating fresh seafood on the Atlantic coast, or standing in a 2,000-year-old
                Roman basilica. The landscapes shift dramatically: from desert plains to cedar forests,
                from snow-capped peaks to windswept beaches.
              </p>
              <p>
                This guide covers 15 of the best day trips from Morocco&apos;s four most-visited cities.
                Each includes detailed transport options, costs starting from as little as 15 MAD,
                and the insider tips that make the difference between a good trip and an unforgettable one.
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
            Marrakech is the most popular base for day trips in Morocco, with waterfalls, mountains,
            coastal towns, and ancient kasbahs all within reach.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods.
          </p>

          <div className="space-y-8">
            {dayTripsFromMarrakech.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Fes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Fes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Fes offers access to Roman ruins, cedar forests with wild monkeys, Morocco&apos;s holiest town,
            and the famous Blue City of Chefchaouen.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods.
          </p>

          <div className="space-y-8">
            {dayTripsFromFes.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Casablanca ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Casablanca
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Morocco&apos;s largest city has excellent rail connections, making the elegant capital Rabat and
            the Portuguese-influenced coastal towns easy to reach.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods.
          </p>

          <div className="space-y-8">
            {dayTripsFromCasablanca.map((trip) => (
              <TripCard key={trip.name} trip={trip} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Day Trips from Tangier ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Day Trips from Tangier
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From Africa&apos;s northwestern tip, explore the Blue City, charming Atlantic art towns, and the
            dramatic point where two oceans meet.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods.
          </p>

          <div className="space-y-8">
            {dayTripsFromTangier.map((trip) => (
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
            Transport Options for Day Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding your transport options is key to planning the perfect day trip. Here is how each method compares.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {transportOverview.map((transport) => {
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
                      <p className="text-xs text-[var(--color-accent)] font-semibold">{transport.priceRange}</p>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{transport.description}</p>
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
            Day Trip Planning Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Practical advice to help you plan, book, and enjoy your day trips across Morocco.
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
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.description}</p>
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
            Day Trips at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A quick comparison of all 15 day trips to help you choose the right excursion.
          </p>
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
                  { dest: 'Ouzoud Waterfalls', city: 'Marrakech', dist: '150 km / 2.5h', budget: '80 MAD' },
                  { dest: 'Essaouira', city: 'Marrakech', dist: '175 km / 2.5h', budget: '80 MAD' },
                  { dest: 'Ourika Valley', city: 'Marrakech', dist: '60 km / 1h', budget: '25 MAD' },
                  { dest: 'Ait Benhaddou', city: 'Marrakech', dist: '185 km / 3h', budget: '350 MAD' },
                  { dest: 'Imlil / Toubkal Base', city: 'Marrakech', dist: '64 km / 1.5h', budget: '50 MAD' },
                  { dest: 'Meknes & Volubilis', city: 'Fes', dist: '60 km / 1h', budget: '25 MAD' },
                  { dest: 'Ifrane & Azrou', city: 'Fes', dist: '77 km / 1h', budget: '35 MAD' },
                  { dest: 'Chefchaouen', city: 'Fes', dist: '200 km / 3.5h', budget: '75 MAD' },
                  { dest: 'Moulay Idriss', city: 'Fes', dist: '55 km / 1h', budget: '30 MAD' },
                  { dest: 'Rabat', city: 'Casablanca', dist: '87 km / 1h', budget: '37 MAD' },
                  { dest: 'El Jadida', city: 'Casablanca', dist: '100 km / 1.5h', budget: '45 MAD' },
                  { dest: 'Azemmour', city: 'Casablanca', dist: '75 km / 1h', budget: '40 MAD' },
                  { dest: 'Chefchaouen', city: 'Tangier', dist: '115 km / 2h', budget: '55 MAD' },
                  { dest: 'Asilah', city: 'Tangier', dist: '46 km / 45m', budget: '15 MAD' },
                  { dest: 'Cap Spartel / Caves', city: 'Tangier', dist: '14 km / 20m', budget: '100 MAD' },
                ].map((row, i) => (
                  <div
                    key={`${row.dest}-${row.city}`}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/marrakech" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech City Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The complete guide to exploring Marrakech&apos;s medina, souks, palaces, and gardens.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/atlas-mountains" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Atlas Mountains Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trekking, Berber villages, and mountain adventures in the High Atlas and beyond.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Navigation className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, grand taxis, and everything you need to know about getting around Morocco.
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

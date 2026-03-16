import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Car,
  Bus,
  Users,
  Star,
  Camera,
  Mountain,
  Waves,
  TreePine,
  Landmark,
  Sun,
  Thermometer,
  Lightbulb,
  ArrowRight,
  Compass,
  Route,
  Wallet,
  Shield,
  CalendarDays,
  AlertTriangle,
  Footprints,
  Binoculars,
  CircleDollarSign,
  Navigation,
  Info,
} from 'lucide-react';

/* ======================================================================
   SEO METADATA
   ====================================================================== */

export const metadata: Metadata = {
  title: 'Best Day Trips in Morocco | 25+ Excursions from Every Major City',
  description:
    'Plan unforgettable day trips from Marrakech, Fes, Casablanca, Tangier, and Agadir. Explore waterfalls, UNESCO kasbahs, Roman ruins, blue cities, surf villages, and hidden gems with our expert guide to 25+ excursions.',
  keywords: [
    'day trips morocco',
    'day trips from marrakech',
    'day trips from fes',
    'excursions morocco',
    'ouzoud waterfalls day trip',
    'ourika valley marrakech',
    'essaouira day trip',
    'ait benhaddou tour',
    'chefchaouen day trip',
    'volubilis roman ruins',
    'day trips from casablanca',
    'day trips from tangier',
    'day trips from agadir',
    'morocco excursions 2026',
    'paradise valley agadir',
    'legzira beach trip',
    'taghazout surf',
    'ifrane morocco',
    'el jadida day trip',
    'morocco travel guide',
    'cape spartel tangier',
    'imlil toubkal day trip',
    'meknes day trip from fes',
    'azemmour hidden gem',
  ],
  openGraph: {
    title: 'Best Day Trips in Morocco | 25+ Excursions from Every Major City',
    description:
      'From Saharan kasbahs to Atlantic surf villages. The ultimate guide to Morocco day trips with insider tips, costs, and transport options.',
    url: 'https://cityguide.ma/day-trips',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Ouzoud Waterfalls cascading into emerald pools in Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Day Trips in Morocco | 25+ Excursions',
    description:
      'Waterfalls, kasbahs, Roman ruins, blue cities, and surf villages. Expert guide to day trips from every major Moroccan city.',
  },
  alternates: { canonical: 'https://cityguide.ma/day-trips' },
};

/* ======================================================================
   JSON-LD STRUCTURED DATA
   ====================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Best Day Trips in Morocco',
  description:
    'A comprehensive guide to 25+ day trips and excursions from major Moroccan cities including Marrakech, Fes, Casablanca, Tangier, and Agadir.',
  url: 'https://cityguide.ma/day-trips',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide',
    url: 'https://cityguide.ma',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'TouristTrip',
          name: 'Ourika Valley Day Trip from Marrakech',
          description: 'Visit Setti Fatma waterfalls and traditional Berber villages in the Atlas foothills.',
          touristType: 'Nature lovers',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'TouristTrip',
          name: 'Ouzoud Waterfalls Day Trip from Marrakech',
          description: '110-meter cascading waterfalls with Barbary macaques and rainbow mist.',
          touristType: 'Nature lovers',
        },
      },
      {
        '@type': 'ListItem',
        position: 3,
        item: {
          '@type': 'TouristTrip',
          name: 'Chefchaouen Day Trip from Tangier',
          description: 'The iconic blue-painted medina in the Rif Mountains.',
          touristType: 'Photographers',
        },
      },
      {
        '@type': 'ListItem',
        position: 4,
        item: {
          '@type': 'TouristTrip',
          name: 'Ait Benhaddou Day Trip from Marrakech',
          description: 'UNESCO World Heritage kasbah and Game of Thrones filming location.',
          touristType: 'History and film buffs',
        },
      },
      {
        '@type': 'ListItem',
        position: 5,
        item: {
          '@type': 'TouristTrip',
          name: 'Volubilis Day Trip from Fes',
          description: 'Best-preserved Roman ruins in North Africa, a UNESCO World Heritage Site.',
          touristType: 'History enthusiasts',
        },
      },
    ],
  },
};

/* ======================================================================
   DATA TYPES
   ====================================================================== */

type DepartureCity = 'Marrakech' | 'Fes' | 'Casablanca' | 'Tangier' | 'Agadir';
type Effort = 'Easy' | 'Moderate' | 'Challenging';
type TripCategory = 'nature' | 'history' | 'beach' | 'culture' | 'adventure' | 'wildlife';

interface DayTrip {
  name: string;
  tagline: string;
  departureCity: DepartureCity;
  distance: string;
  duration: string;
  effort: Effort;
  bestTime: string;
  image: string;
  highlights: string[];
  transport: string[];
  costRange: string;
  costBreakdown: string;
  proTip: string;
  whatToSee: string[];
  category: TripCategory;
  returnBy: string;
}

/* ======================================================================
   DAY TRIPS DATA - 25 TRIPS ORGANIZED BY CITY
   ====================================================================== */

const dayTrips: DayTrip[] = [
  /* --- FROM MARRAKECH --- */
  {
    name: 'Ourika Valley',
    tagline: 'Setti Fatma waterfalls and Berber villages in the Atlas foothills',
    departureCity: 'Marrakech',
    distance: '60 km',
    duration: '1 hour',
    effort: 'Moderate',
    bestTime: 'March - June, September - November',
    image: 'https://images.unsplash.com/photo-1570197571499-166b36435e9f?q=80&w=800',
    highlights: [
      'Seven-tiered Setti Fatma waterfalls hidden in a rocky gorge',
      'Traditional Berber villages with terraced gardens along the river',
      'Weekly Berber market on Mondays with local crafts and spices',
      'Riverside restaurants serving fresh tagine with valley views',
    ],
    transport: ['Rental car via R-route P2017', 'Shared grand taxi from Bab Er-Rob (25 MAD)', 'Organized half-day tour (250-400 MAD)'],
    costRange: '150-400 MAD per person',
    costBreakdown: 'Transport 25-150 MAD, guide 100-200 MAD, lunch 40-80 MAD',
    proTip:
      'Hire a local guide at the trailhead for the waterfall hike. The path is unmarked and slippery after rain. Negotiate the price before starting -- expect 100-150 MAD for the 2-hour round trip.',
    whatToSee: ['Setti Fatma waterfalls (7 tiers)', 'Berber village homes', 'Monday souk (weekly market)', 'Aromatic herb gardens', 'Traditional pottery workshops'],
    category: 'nature',
    returnBy: 'Late afternoon (half-day trip)',
  },
  {
    name: 'Ouzoud Waterfalls',
    tagline: '110m cascading falls with Barbary macaques and rainbow mist',
    departureCity: 'Marrakech',
    distance: '150 km',
    duration: '2.5 hours',
    effort: 'Moderate',
    bestTime: 'March - June (peak water flow)',
    image: 'https://images.unsplash.com/photo-1547037579-f0fc020ac3be?q=80&w=800',
    highlights: [
      'Tallest waterfalls in North Africa at 110 meters with rainbow mist',
      'Wild Barbary macaques playing in the olive groves near the falls',
      'Boat rides at the base of the falls through emerald pools (20 MAD)',
      'Traditional water mills and olive presses along the hiking trail',
    ],
    transport: ['Rental car via N8 highway', 'Organized full-day group tour (300-500 MAD)', 'Private driver for flexibility (800-1200 MAD)'],
    costRange: '200-500 MAD per person',
    costBreakdown: 'Transport 100-300 MAD, boat ride 20 MAD, guide 50-100 MAD, lunch 40-80 MAD',
    proTip:
      'Arrive before 10am to beat the tour groups. The boat ride costs 20 MAD and gets you right under the falls. Bring a rain jacket for the spray.',
    whatToSee: ['Main 110m waterfall cascade', 'Barbary macaque colony', 'Traditional olive mills', 'Natural swimming pools', 'Viewing platforms at multiple levels'],
    category: 'nature',
    returnBy: 'Evening (full-day trip)',
  },
  {
    name: 'Essaouira',
    tagline: 'UNESCO coastal escape with fresh seafood, art, and Atlantic winds',
    departureCity: 'Marrakech',
    distance: '175 km',
    duration: '2.5 hours',
    effort: 'Easy',
    bestTime: 'Year-round (windiest June - August)',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800',
    highlights: [
      'UNESCO-listed medina with blue-shuttered whitewashed buildings',
      'Fresh grilled sardines and seafood at the bustling port market',
      'Skala de la Ville ramparts with Atlantic ocean panoramas',
      'Art galleries and Gnaoua music heritage throughout the medina',
    ],
    transport: ['Supratours direct bus (3 hours, 80 MAD)', 'Rental car via A7 motorway', 'Organized day tour with hotel pickup (350-600 MAD)'],
    costRange: '250-600 MAD per person',
    costBreakdown: 'Transport 80-200 MAD, seafood lunch 40-100 MAD, medina exploration free',
    proTip:
      'Take the early Supratours bus at 8:30am. Lunch at the fish market stalls in the port is an unmissable experience at under 60 MAD for a huge seafood platter.',
    whatToSee: ['Skala de la Ville ramparts', 'Port fish market', 'Medina art galleries', 'Gnaoua World Music Festival (June)', 'Beach and kite-surfing'],
    category: 'beach',
    returnBy: 'Evening (full-day trip)',
  },
  {
    name: 'Ait Benhaddou',
    tagline: 'UNESCO kasbah, Game of Thrones filming location, and Tizi n\'Tichka pass',
    departureCity: 'Marrakech',
    distance: '185 km',
    duration: '3.5 hours',
    effort: 'Moderate',
    bestTime: 'October - April (avoid summer heat)',
    image: 'https://images.unsplash.com/photo-1548017544-13e612e42a90?q=80&w=800',
    highlights: [
      'UNESCO World Heritage fortified village dating to the 11th century',
      'Filming location for Gladiator, Game of Thrones, and Lawrence of Arabia',
      'Dramatic Tizi n\'Tichka mountain pass at 2,260 meters on the drive',
      'Sunset views over the kasbah reflected in the Ounila River',
    ],
    transport: ['Rental car via N9 over Tizi n\'Tichka', 'Organized tour often combined with Ouarzazate (500-900 MAD)', 'Private driver recommended for comfort (1000-1500 MAD)'],
    costRange: '300-700 MAD per person',
    costBreakdown: 'Transport 200-400 MAD, kasbah guide 100-150 MAD, lunch 50-80 MAD, argan cooperative free',
    proTip:
      'Cross the river on stepping stones to enter the kasbah from the east side for the best photos. The west side has a footbridge. Combine with Ouarzazate for a full day.',
    whatToSee: ['Kasbah fortified village', 'Film set props and locations', 'Tizi n\'Tichka pass viewpoints', 'Argan oil cooperatives along the road', 'Ounila River crossing'],
    category: 'history',
    returnBy: 'Late evening (long full-day trip)',
  },
  {
    name: 'Imlil & Toubkal Base',
    tagline: 'High Atlas trekking village at 1,740m with stunning mountain panoramas',
    departureCity: 'Marrakech',
    distance: '65 km',
    duration: '1.5 hours',
    effort: 'Challenging',
    bestTime: 'April - June, September - October',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=800',
    highlights: [
      'Gateway village to North Africa\'s highest peak, Jebel Toubkal (4,167m)',
      'Day hike to Armed Refuge or Tizi Mzik pass with stunning panoramas',
      'Walnut-tree-shaded Berber villages with traditional guesthouses',
      'Mule-supported treks through terraced valleys and alpine meadows',
    ],
    transport: ['Rental car or taxi via Asni (300-400 MAD)', 'Shared grand taxi from Marrakech (50 MAD)', 'Organized trekking day trip with guide (500-900 MAD)'],
    costRange: '200-600 MAD per person',
    costBreakdown: 'Transport 50-200 MAD, guide 200-300 MAD, mule support 150-200 MAD, lunch 40-80 MAD',
    proTip:
      'You do not need to summit Toubkal for an amazing day. The walk from Imlil to the Toubkal Refuge (3,207m) is doable in a long day and gives you alpine scenery without the full climb.',
    whatToSee: ['Imlil village and walnut groves', 'Armed village and waterfall', 'Toubkal Refuge (3,207m)', 'Tizi Mzik pass viewpoint', 'Berber guesthouses with mint tea'],
    category: 'adventure',
    returnBy: 'Late afternoon (full-day trip)',
  },
  {
    name: 'Ouarzazate',
    tagline: 'Atlas Film Studios and the gateway to Morocco\'s desert south',
    departureCity: 'Marrakech',
    distance: '200 km',
    duration: '4 hours',
    effort: 'Easy',
    bestTime: 'October - April',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?q=80&w=800',
    highlights: [
      'Atlas Film Studios where blockbusters from The Mummy to Inception were shot',
      'Taourirt Kasbah, a sprawling 19th-century fortress in the town center',
      'Gateway to the Draa Valley and Road of a Thousand Kasbahs',
      'Fint Oasis, a hidden palm-filled canyon just outside town',
    ],
    transport: ['Rental car via N9 (scenic mountain drive)', 'CTM or Supratours bus service (100-120 MAD)', 'Organized tour combined with Ait Benhaddou (500-900 MAD)'],
    costRange: '300-800 MAD per person',
    costBreakdown: 'Transport 100-300 MAD, Atlas Studios entry 60 MAD, Taourirt Kasbah entry 20 MAD, lunch 50-80 MAD',
    proTip:
      'The Atlas Film Studios tour takes about 1.5 hours. Book the morning slot and continue to Ait Benhaddou in the afternoon to make the most of the long drive.',
    whatToSee: ['Atlas Film Studios', 'Taourirt Kasbah', 'Fint Oasis palm canyon', 'Cinema Museum', 'Draa Valley viewpoint'],
    category: 'culture',
    returnBy: 'Late evening (long full-day trip)',
  },

  /* --- FROM FES --- */
  {
    name: 'Volubilis',
    tagline: 'Best-preserved Roman ruins in North Africa with intact floor mosaics',
    departureCity: 'Fes',
    distance: '70 km',
    duration: '1 hour',
    effort: 'Easy',
    bestTime: 'March - May, September - November',
    image: 'https://images.unsplash.com/photo-1580922531613-c4e19e0e2e56?q=80&w=800',
    highlights: [
      'UNESCO World Heritage Roman city with intact mosaics and archways',
      'Triumphal Arch of Caracalla and the Basilica dominating the skyline',
      'Stunning floor mosaics of Orpheus, Bacchus, and the Labors of Hercules',
      'Panoramic hilltop setting overlooking fertile plains and olive groves',
    ],
    transport: ['Rental car via N13 (1 hour)', 'Grand taxi from Fes (negotiate 300-400 MAD round trip)', 'Organized half-day tour combining Meknes and Moulay Idriss (400-700 MAD)'],
    costRange: '150-400 MAD per person',
    costBreakdown: 'Transport 100-200 MAD, entry fee 70 MAD, guide 100-150 MAD (recommended)',
    proTip:
      'Visit early morning or late afternoon when the light is golden and the crowds thin. The 70 MAD entry fee is well worth it. Bring water as there is little shade on site.',
    whatToSee: ['Triumphal Arch of Caracalla', 'House of Orpheus mosaics', 'House of Venus', 'Basilica and Capitol', 'Oil press complex'],
    category: 'history',
    returnBy: 'Afternoon (half-day trip)',
  },
  {
    name: 'Meknes',
    tagline: 'Imperial city with monumental Bab Mansour and royal granaries',
    departureCity: 'Fes',
    distance: '65 km',
    duration: '1 hour',
    effort: 'Easy',
    bestTime: 'Year-round',
    image: 'https://images.unsplash.com/photo-1560614861-4bdb77ade040?q=80&w=800',
    highlights: [
      'Bab Mansour, one of the grandest gates in all of North Africa',
      'Heri es-Souani royal granaries with their vast underground chambers',
      'Place el-Hedim, the city\'s lively main square with food vendors',
      'Less touristy than Fes with equally authentic medina experiences',
    ],
    transport: ['ONCF train (40 minutes, 25 MAD each way)', 'Grand taxi or bus (15-20 MAD)', 'Rental car via A2 motorway'],
    costRange: '100-350 MAD per person',
    costBreakdown: 'Train 50 MAD round trip, Heri es-Souani 10 MAD, Royal Stables 10 MAD, lunch 40-80 MAD',
    proTip:
      'Take the morning train from Fes and combine Meknes with a taxi to Volubilis and Moulay Idriss for the ultimate triple day trip. The train costs just 25 MAD each way.',
    whatToSee: ['Bab Mansour gate', 'Heri es-Souani granaries', 'Place el-Hedim square', 'Mausoleum of Moulay Ismail', 'Dar Jamai Museum'],
    category: 'history',
    returnBy: 'Evening (full-day if combined with Volubilis)',
  },
  {
    name: 'Moulay Idriss Zerhoun',
    tagline: 'Morocco\'s holiest town perched on twin sacred hilltops',
    departureCity: 'Fes',
    distance: '60 km',
    duration: '1 hour',
    effort: 'Easy',
    bestTime: 'Year-round (Moussem festival in August)',
    image: 'https://images.unsplash.com/photo-1545042679-2a5c9fa45a38?q=80&w=800',
    highlights: [
      'Sacred town built around the tomb of Morocco\'s founding saint, Moulay Idriss I',
      'Whitewashed hillside architecture cascading down twin green peaks',
      'Panoramic terrace views over the Volubilis plain and Zerhoun hills',
      'Authentic Moroccan town life with very few tourists',
    ],
    transport: ['Grand taxi from Meknes (20 minutes, 10 MAD)', 'Rental car via Volubilis road', 'Organized tour with Volubilis and Meknes (400-700 MAD)'],
    costRange: '100-300 MAD per person',
    costBreakdown: 'Transport 10-100 MAD, exploration free, mint tea 10-15 MAD, lunch 30-60 MAD',
    proTip:
      'Non-Muslims cannot enter the main sanctuary, but the town itself is open to explore. Visit the rooftop terrace cafes for mint tea with panoramic views. Combine with Volubilis, just 5 km away.',
    whatToSee: ['Town panoramic terraces', 'Green-tiled cylindrical minaret (only one in Morocco)', 'Olive oil presses', 'Local pottery workshops', 'Volubilis views from hilltop'],
    category: 'culture',
    returnBy: 'Afternoon (combine with Volubilis)',
  },
  {
    name: 'Ifrane',
    tagline: '"Little Switzerland" with alpine chalets, snow, and cedar forests',
    departureCity: 'Fes',
    distance: '65 km',
    duration: '1 hour',
    effort: 'Easy',
    bestTime: 'December - March (snow), May - October (hiking)',
    image: 'https://images.unsplash.com/photo-1580746738099-78d6833b3f84?q=80&w=800',
    highlights: [
      'Alpine-style town with red-roofed chalets and manicured gardens',
      'Snow-capped peaks in winter, making it Morocco\'s ski destination',
      'The iconic stone lion sculpture carved by a German prisoner of war',
      'Lake Dayet Aoua for lakeside walks and birdwatching',
    ],
    transport: ['Rental car via N8 (scenic mountain road)', 'CTM bus service (35 MAD)', 'Organized nature day trip (300-500 MAD)'],
    costRange: '150-350 MAD per person',
    costBreakdown: 'Transport 35-150 MAD, park entry free, lunch 40-80 MAD',
    proTip:
      'Ifrane is a perfect escape from summer heat as temperatures stay 10-15 degrees cooler than Fes. Continue to Azrou cedar forest for Barbary macaques to make it a full day.',
    whatToSee: ['Stone lion sculpture', 'Al Akhawayn University campus', 'Lake Dayet Aoua', 'Royal Palace gardens (exterior)', 'Michlifen ski resort (winter)'],
    category: 'nature',
    returnBy: 'Late afternoon (half to full day)',
  },
  {
    name: 'Azrou Cedar Forest',
    tagline: 'Ancient cedar groves with wild Barbary macaque colonies',
    departureCity: 'Fes',
    distance: '80 km',
    duration: '1.5 hours',
    effort: 'Easy',
    bestTime: 'April - November',
    image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800',
    highlights: [
      'Centuries-old Atlas cedar forest with towering ancient trees',
      'Wild Barbary macaque colonies that approach visitors for food',
      'Traditional Amazigh market town of Azrou with carpet cooperatives',
      'Cool mountain air and peaceful forest walks among giant cedars',
    ],
    transport: ['Rental car via Ifrane (1.5 hours)', 'Grand taxi from Fes with stops (80-120 MAD)', 'Organized nature tour combining Ifrane (350-600 MAD)'],
    costRange: '150-400 MAD per person',
    costBreakdown: 'Transport 80-200 MAD, forest free, Azrou carpet cooperative free, lunch 30-60 MAD',
    proTip:
      'Do not feed the macaques despite locals selling peanuts. It habituates them to humans and can lead to aggression. Simply observe from a respectful distance.',
    whatToSee: ['Gouraud Cedar (800+ year old tree)', 'Barbary macaque groups', 'Azrou carpet cooperatives', 'Traditional Amazigh market', 'Forest walking trails'],
    category: 'wildlife',
    returnBy: 'Late afternoon (full-day with Ifrane)',
  },

  /* --- FROM CASABLANCA --- */
  {
    name: 'El Jadida',
    tagline: 'Portuguese cistern with ethereal reflections and UNESCO fortifications',
    departureCity: 'Casablanca',
    distance: '100 km',
    duration: '1.5 hours',
    effort: 'Easy',
    bestTime: 'Year-round',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=800',
    highlights: [
      'UNESCO-listed Portuguese Cistern with its ethereal reflections on the water',
      'Fortified Cite Portugaise with thick rampart walls and sea views',
      'Long sandy beach popular with Moroccan families on weekends',
      'Fresh seafood restaurants lining the corniche boulevard',
    ],
    transport: ['ONCF train (1.5 hours, 55-75 MAD)', 'Rental car via A1 motorway', 'CTM bus service from Casablanca (45 MAD)'],
    costRange: '100-350 MAD per person',
    costBreakdown: 'Transport 45-150 MAD, Portuguese Cistern entry 20 MAD, ramparts free, lunch 50-100 MAD',
    proTip:
      'The Portuguese Cistern is the star attraction but closes at 6pm. Visit first thing in the morning when light streams through the ceiling hole, creating a magical mirror effect on the water.',
    whatToSee: ['Portuguese Cistern (Orson Welles filmed here)', 'Cite Portugaise ramparts', 'Church of the Assumption', 'El Jadida Beach', 'Sidi Bouzid beach and cafes'],
    category: 'history',
    returnBy: 'Evening (full-day trip)',
  },
  {
    name: 'Rabat',
    tagline: 'Kasbah Udayas, Hassan Tower, and the refined Moroccan capital',
    departureCity: 'Casablanca',
    distance: '90 km',
    duration: '1 hour',
    effort: 'Easy',
    bestTime: 'Year-round',
    image: 'https://images.unsplash.com/photo-1569587112025-0d460e81a126?q=80&w=800',
    highlights: [
      'Kasbah des Oudayas with its blue-and-white painted streets and Atlantic views',
      'Hassan Tower and the ornate Mohammed V Mausoleum',
      'Chellah necropolis with Roman ruins, nesting storks, and lush gardens',
      'Modern capital city feel with wide boulevards and the royal palace',
    ],
    transport: ['ONCF Al Boraq high-speed train (45 minutes, 75-149 MAD)', 'Rental car via A1 motorway', 'CTM bus service (60 MAD)'],
    costRange: '100-400 MAD per person',
    costBreakdown: 'Al Boraq train 75-149 MAD, Hassan Tower free, Chellah entry 70 MAD, lunch 50-100 MAD',
    proTip:
      'Take the Al Boraq high-speed train for a comfortable and fast journey. The Kasbah des Oudayas is free to enter and has a lovely Andalusian garden cafe inside with ocean views.',
    whatToSee: ['Hassan Tower & Mohammed V Mausoleum', 'Kasbah des Oudayas', 'Chellah Necropolis', 'Mohammed VI Museum of Modern Art', 'Rabat Medina'],
    category: 'culture',
    returnBy: 'Evening (full-day trip)',
  },
  {
    name: 'Azemmour',
    tagline: 'Hidden artistic gem with street art murals and Portuguese ramparts',
    departureCity: 'Casablanca',
    distance: '85 km',
    duration: '1.5 hours',
    effort: 'Easy',
    bestTime: 'March - November',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=800',
    highlights: [
      'Medina walls covered in vibrant street art and murals by international artists',
      'Portuguese-era ramparts overlooking the Oum Er-Rbia river mouth',
      'Almost zero tourists, offering an authentic and undiscovered Moroccan experience',
      'Haouzia Beach nearby for a quiet swim in the Atlantic',
    ],
    transport: ['Rental car via coastal road (1.5 hours)', 'Grand taxi from El Jadida (15 minutes, 10 MAD)', 'Combine with El Jadida day trip (recommended)'],
    costRange: '80-250 MAD per person',
    costBreakdown: 'Transport 10-100 MAD, exploration free, coffee 10-20 MAD, lunch 30-60 MAD',
    proTip:
      'Ask any local kid to show you the best street art locations in the medina. The entire town can be explored in 2-3 hours, so pair it with El Jadida for a full day out.',
    whatToSee: ['Street art murals throughout medina', 'Portuguese ramparts', 'Oum Er-Rbia river views', 'Haouzia Beach', 'Kasbah quarter'],
    category: 'culture',
    returnBy: 'Afternoon (combine with El Jadida)',
  },
  {
    name: 'Mohammedia',
    tagline: 'Casablanca\'s beach escape with golden sand and seafood',
    departureCity: 'Casablanca',
    distance: '25 km',
    duration: '30 minutes',
    effort: 'Easy',
    bestTime: 'May - October',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: [
      'Sandy beaches with calmer water than central Casablanca',
      'Royal Golf de Mohammedia, one of Morocco\'s oldest courses',
      'Lively corniche with seafood restaurants and ocean-view cafes',
      'Kasbah of Mohammedia with its historic medina quarter',
    ],
    transport: ['ONCF commuter train (25 minutes, 15 MAD)', 'Rental car via A1 (30 minutes)', 'Grand taxi from Casa Voyageurs (20 MAD)'],
    costRange: '50-250 MAD per person',
    costBreakdown: 'Train 30 MAD round trip, beach free, seafood lunch 50-120 MAD',
    proTip:
      'This is where Casablancais go for a beach day. The commuter train runs every 30 minutes and costs just 15 MAD. Avoid weekends in summer when beaches are packed.',
    whatToSee: ['Mohammedia Beach', 'Fish market and port', 'Corniche seafood restaurants', 'Royal Golf course', 'Kasbah medina quarter'],
    category: 'beach',
    returnBy: 'Evening (half to full day)',
  },

  /* --- FROM TANGIER --- */
  {
    name: 'Chefchaouen',
    tagline: 'The iconic blue pearl of the Rif Mountains',
    departureCity: 'Tangier',
    distance: '115 km',
    duration: '2 hours',
    effort: 'Easy',
    bestTime: 'March - June, September - November',
    image: 'https://images.unsplash.com/photo-1553244695-ba57fe8f5b84?q=80&w=800',
    highlights: [
      'Entire medina painted in mesmerizing shades of blue and indigo',
      'Ras El Maa waterfall at the edge of the medina where locals gather',
      'Spanish Mosque hilltop viewpoint with panoramic sunset views',
      'Mountain-fresh goat cheese and handwoven Rif blankets at local shops',
    ],
    transport: ['Rental car via N2 (scenic mountain road)', 'CTM bus (3-4 hours with stops, 75 MAD)', 'Organized day tour from Tangier (500-800 MAD)'],
    costRange: '200-500 MAD per person',
    costBreakdown: 'Transport 75-250 MAD, medina exploration free, lunch 40-80 MAD, Rif blanket souvenirs 100-300 MAD',
    proTip:
      'A day trip is tight. Leave Tangier by 7am to maximize your time. Head straight to the Spanish Mosque viewpoint for morning light, then explore the medina as shops open.',
    whatToSee: ['Blue-painted medina streets', 'Place Outa el-Hammam central square', 'Ras El Maa waterfall', 'Spanish Mosque sunset viewpoint', 'Kasbah Museum and gardens'],
    category: 'culture',
    returnBy: 'Late evening (long full-day trip)',
  },
  {
    name: 'Asilah',
    tagline: 'Whitewashed artistic town with murals and Atlantic beaches',
    departureCity: 'Tangier',
    distance: '45 km',
    duration: '45 minutes',
    effort: 'Easy',
    bestTime: 'June - September (Asilah Festival in July)',
    image: 'https://images.unsplash.com/photo-1560614861-4bdb77ade040?q=80&w=800',
    highlights: [
      'Medina walls adorned with colorful murals refreshed annually at the arts festival',
      'Portuguese ramparts and sea walls with crashing Atlantic waves below',
      'Paradise Beach, a wide sandy stretch just south of the medina',
      'Laid-back artistic atmosphere with galleries and craft workshops',
    ],
    transport: ['ONCF train (45 minutes from Tangier Ville, 20 MAD)', 'Grand taxi from Tangier (30 MAD)', 'Rental car via coastal N1'],
    costRange: '80-300 MAD per person',
    costBreakdown: 'Train 40 MAD round trip, medina free, Paradise Beach free, lunch 40-80 MAD',
    proTip:
      'Visit during the Asilah International Cultural Festival in July when artists paint fresh murals on the medina walls. The train from Tangier is cheap, reliable, and scenic along the coast.',
    whatToSee: ['Medina street art murals', 'Portuguese ramparts and tower', 'Raissouli Palace', 'Paradise Beach', 'Hassan II Cultural Center'],
    category: 'culture',
    returnBy: 'Late afternoon (half-day or full-day)',
  },
  {
    name: 'Cape Spartel & Hercules Cave',
    tagline: 'Where the Atlantic meets the Mediterranean at Africa\'s northwest tip',
    departureCity: 'Tangier',
    distance: '14 km',
    duration: '20 minutes',
    effort: 'Easy',
    bestTime: 'Year-round',
    image: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?q=80&w=800',
    highlights: [
      'Lighthouse marking where the Atlantic Ocean meets the Mediterranean Sea',
      'Hercules Cave with its Africa-shaped opening to the sea',
      'Stunning clifftop views over two bodies of water merging',
      'Luxury restaurants and beach clubs along the Diplomatic Forest road',
    ],
    transport: ['Taxi from Tangier (20 minutes, 100-150 MAD round trip)', 'Rental car (short scenic drive)', 'Part of a Tangier city tour circuit'],
    costRange: '50-200 MAD per person',
    costBreakdown: 'Taxi 100-150 MAD round trip, Hercules Cave entry 10 MAD, lighthouse area free',
    proTip:
      'Visit Hercules Cave first (entry 10 MAD), then drive to Cape Spartel lighthouse for sunset. The cave\'s sea-facing opening is shaped like the map of Africa, best photographed in afternoon light.',
    whatToSee: ['Hercules Cave (Africa-shaped opening)', 'Cape Spartel lighthouse', 'Two-ocean meeting point', 'Diplomatic Forest', 'Robinson Beach'],
    category: 'nature',
    returnBy: 'Sunset (half-day trip)',
  },
  {
    name: 'Tetouan',
    tagline: 'Andalusian UNESCO medina with Mediterranean beach access',
    departureCity: 'Tangier',
    distance: '65 km',
    duration: '1 hour',
    effort: 'Easy',
    bestTime: 'March - November',
    image: 'https://images.unsplash.com/photo-1571401835393-8c5f40381b4f?q=80&w=800',
    highlights: [
      'UNESCO-listed medina showcasing rare Andalusian-Moroccan architecture',
      'Royal Palace square (Feddan) with its ornate facades and gardens',
      'Ethnographic Museum housed in a restored royal bastion',
      'Martil and M\'diq Mediterranean beaches just 10 km away',
    ],
    transport: ['Grand taxi from Tangier (1 hour, 25 MAD)', 'CTM bus service (30 MAD)', 'Rental car via N2 highway'],
    costRange: '100-300 MAD per person',
    costBreakdown: 'Transport 25-60 MAD, medina free, Ethnographic Museum 10 MAD, lunch 30-60 MAD',
    proTip:
      'Tetouan\'s medina is one of the most authentic in Morocco, with almost no tourist shops. The ceramics and embroidery here are distinctly Andalusian. Combine with a swim at Martil Beach.',
    whatToSee: ['UNESCO medina (Andalusian architecture)', 'Place Hassan II (Feddan)', 'Ethnographic Museum', 'Artisanal School', 'Martil Beach (10 km)'],
    category: 'history',
    returnBy: 'Evening (full-day trip)',
  },

  /* --- FROM AGADIR --- */
  {
    name: 'Taghazout',
    tagline: 'World-class surf village with bohemian soul and rooftop cafes',
    departureCity: 'Agadir',
    distance: '20 km',
    duration: '30 minutes',
    effort: 'Easy',
    bestTime: 'September - April (surf), Year-round (village)',
    image: 'https://images.unsplash.com/photo-1502680390548-bdbac40f0100?q=80&w=800',
    highlights: [
      'Legendary surf breaks including Anchor Point and Killer Point',
      'Bohemian fishing village with rooftop cafes and ocean views',
      'Surf schools and board rentals for every level from beginner to pro',
      'Fresh-caught fish grilled on the beach at sunset',
    ],
    transport: ['Local bus 32 from Agadir (30 minutes, 7 MAD)', 'Grand taxi from Agadir center (15 MAD)', 'Rental car via coastal N1'],
    costRange: '50-300 MAD per person',
    costBreakdown: 'Bus 14 MAD round trip, surf lesson 200-400 MAD, board rental 100-150 MAD/day, lunch 40-80 MAD',
    proTip:
      'Even non-surfers love Taghazout. Grab a smoothie bowl at one of the surf cafes, watch the sunset from the rooftop terraces, and have fresh fish grilled at the small stands near the harbor.',
    whatToSee: ['Anchor Point surf break', 'Hash Point and Panoramas', 'Fishing village harbor', 'Rooftop sunset terraces', 'Banana Point (beginner surf)'],
    category: 'beach',
    returnBy: 'Sunset (half-day or full-day)',
  },
  {
    name: 'Paradise Valley',
    tagline: 'Natural swimming pools and palm-lined canyon oasis',
    departureCity: 'Agadir',
    distance: '45 km',
    duration: '1 hour',
    effort: 'Moderate',
    bestTime: 'April - October (pools fill with spring melt)',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800',
    highlights: [
      'Crystal-clear natural swimming pools carved into canyon rock',
      'Palm tree-lined gorge with dramatic cliff walls towering above',
      'Rock jumping spots ranging from 2 to 10 meters for thrill seekers',
      'Traditional Berber villages and argan tree groves along the approach',
    ],
    transport: ['Rental car via Taghazout turnoff (only practical option)', 'Organized tour from Agadir (250-400 MAD)', 'Grand taxi to village then 30-minute walk down (100 MAD)'],
    costRange: '100-350 MAD per person',
    costBreakdown: 'Transport 100-200 MAD, valley entry free, local guide tip 20-50 MAD, snacks from home',
    proTip:
      'Wear sturdy shoes for the rocky descent into the valley. The deepest pools are about a 30-minute walk from the parking area. Bring snacks as there are no restaurants at the pools.',
    whatToSee: ['Natural rock pools', 'Palm tree canyon', 'Rock jumping platforms', 'Berber villages', 'Argan tree groves'],
    category: 'adventure',
    returnBy: 'Late afternoon (half-day trip)',
  },
  {
    name: 'Tiznit',
    tagline: 'Silver jewelry capital of Morocco behind pink ramparts',
    departureCity: 'Agadir',
    distance: '80 km',
    duration: '1.5 hours',
    effort: 'Easy',
    bestTime: 'Year-round',
    image: 'https://images.unsplash.com/photo-1590501006614-e53ad7753e3f?q=80&w=800',
    highlights: [
      'Centuries-old silver jewelry souk with Amazigh artisans at work',
      'Pink-walled medina enclosed by 5 km of crenellated ramparts',
      'Main square with its historic source bleue freshwater spring',
      'Gateway to the Anti-Atlas and the stunning coastal road to Mirleft',
    ],
    transport: ['Rental car via N1 highway (1.5 hours)', 'CTM bus service (30 MAD, regular departures)', 'Grand taxi from Agadir Souk El Had (40 MAD)'],
    costRange: '80-300 MAD per person',
    costBreakdown: 'Transport 30-80 MAD, medina free, silver bracelet 100-500 MAD, lunch 30-60 MAD',
    proTip:
      'The jewelry souk is the real draw. Berber silver bracelets and fibulas make unique souvenirs. Prices are already reasonable, but gentle bargaining is expected. Ask to see the workshop behind the shop.',
    whatToSee: ['Silver jewelry souk', 'Pink ramparts (5 km circuit)', 'Source Bleue spring', 'Great Mosque', 'Artisan workshops'],
    category: 'culture',
    returnBy: 'Afternoon (half-day trip)',
  },
  {
    name: 'Taroudant',
    tagline: '"Little Marrakech" behind complete Saadian-era mud ramparts',
    departureCity: 'Agadir',
    distance: '85 km',
    duration: '1.5 hours',
    effort: 'Easy',
    bestTime: 'October - May (cooler months)',
    image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=800',
    highlights: [
      'Complete circuit of Saadian-era red mud ramparts encircling the town',
      'Two distinct souks: Arab souk for spices and Berber souk for crafts',
      'Fraction of the tourists compared to Marrakech with similar atmosphere',
      'Backdrop of snow-capped High Atlas peaks visible from the ramparts',
    ],
    transport: ['Rental car via N10 (1.5 hours)', 'CTM and local bus service (35 MAD)', 'Organized day tour from Agadir (350-550 MAD)'],
    costRange: '80-300 MAD per person',
    costBreakdown: 'Transport 35-100 MAD, bicycle rental 50-80 MAD/day, medina free, lunch 30-60 MAD',
    proTip:
      'Rent a bicycle from the Palais Salam hotel area and cycle the full circuit of the ramparts. It takes about 45 minutes and gives you incredible views of the Atlas Mountains and the old town.',
    whatToSee: ['Complete rampart circuit by bicycle', 'Arab souk (spices, dried fruits)', 'Berber souk (leather, crafts)', 'Tanneries quarter', 'Palais Salam gardens'],
    category: 'culture',
    returnBy: 'Afternoon (half-day trip)',
  },
  {
    name: 'Legzira Beach',
    tagline: 'Dramatic red stone arches sculpted by Atlantic waves',
    departureCity: 'Agadir',
    distance: '150 km',
    duration: '2.5 hours',
    effort: 'Easy',
    bestTime: 'September - November',
    image: 'https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=800',
    highlights: [
      'Towering natural red stone arches sculpted by centuries of Atlantic waves',
      'Miles of deserted golden-red sand backed by dramatic cliffs',
      'Spectacular sunset light turning the arches deep orange and crimson',
      'Small cliffside cafes serving fresh fish with uninterrupted ocean views',
    ],
    transport: ['Rental car via N1 coastal road (2.5 hours)', 'Grand taxi from Tiznit (1 hour, 50-80 MAD)', 'Organized full-day excursion from Agadir (400-700 MAD)'],
    costRange: '150-400 MAD per person',
    costBreakdown: 'Transport 100-250 MAD, beach free, cliffside fish lunch 50-100 MAD',
    proTip:
      'Check tide tables before visiting. The arches are only accessible at low tide. Arrive 2 hours before sunset for the best photography conditions when the red rock glows in warm light.',
    whatToSee: ['Red stone natural arches', 'Miles of empty beach', 'Cliff-top viewpoints', 'Fishing village', 'Sunset photography spot'],
    category: 'beach',
    returnBy: 'Late evening (full-day trip)',
  },
  {
    name: 'Souss-Massa National Park',
    tagline: 'Endangered Northern Bald Ibis habitat and estuary wetlands',
    departureCity: 'Agadir',
    distance: '60 km',
    duration: '1 hour',
    effort: 'Moderate',
    bestTime: 'October - March (migratory birds)',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=800',
    highlights: [
      'Home to the critically endangered Northern Bald Ibis colony',
      'Diverse habitats from sand dunes to estuary wetlands and argan forests',
      'Over 275 bird species including flamingos, herons, and raptors',
      'Wild landscapes where the Souss and Massa rivers meet the Atlantic',
    ],
    transport: ['Rental car via coast road (only practical option)', 'Organized birding tour with naturalist guide (400-800 MAD)', 'Private driver with park permit (500-700 MAD)'],
    costRange: '150-500 MAD per person',
    costBreakdown: 'Transport 150-300 MAD, park entry 20 MAD, local guide 100-200 MAD, binoculars rental 50 MAD',
    proTip:
      'Hire a local guide at the park entrance. They know exactly where the bald ibis colonies nest and where flamingos gather. Binoculars are essential and early morning yields the best sightings.',
    whatToSee: ['Northern Bald Ibis nesting colony', 'Flamingo lagoons', 'Estuary wetlands', 'Argan forest trails', 'Atlantic dune systems'],
    category: 'wildlife',
    returnBy: 'Afternoon (half-day trip)',
  },
];

/* ======================================================================
   CITY CONFIGURATION
   ====================================================================== */

const cityConfig: Record<DepartureCity, { color: string; icon: typeof MapPin; count: number; tagline: string; image: string }> = {
  Marrakech: {
    color: 'var(--color-primary)',
    icon: Compass,
    count: dayTrips.filter((t) => t.departureCity === 'Marrakech').length,
    tagline: 'Imperial red city at the foot of the Atlas Mountains',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4fe6?q=80&w=400',
  },
  Fes: {
    color: 'var(--color-secondary)',
    icon: Landmark,
    count: dayTrips.filter((t) => t.departureCity === 'Fes').length,
    tagline: 'Medieval medina and spiritual capital of Morocco',
    image: 'https://images.unsplash.com/photo-1553531889-e6cf4d692b1b?q=80&w=400',
  },
  Casablanca: {
    color: 'var(--color-accent)',
    icon: Waves,
    count: dayTrips.filter((t) => t.departureCity === 'Casablanca').length,
    tagline: 'Economic powerhouse and Atlantic coast metropolis',
    image: 'https://images.unsplash.com/photo-1577147443647-81856d5151af?q=80&w=400',
  },
  Tangier: {
    color: 'var(--color-primary)',
    icon: Route,
    count: dayTrips.filter((t) => t.departureCity === 'Tangier').length,
    tagline: 'Gateway to Africa where two seas meet',
    image: 'https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?q=80&w=400',
  },
  Agadir: {
    color: 'var(--color-secondary)',
    icon: Sun,
    count: dayTrips.filter((t) => t.departureCity === 'Agadir').length,
    tagline: 'Sun-drenched beach capital and surf hub',
    image: 'https://images.unsplash.com/photo-1560703650-ef3e0f254ae0?q=80&w=400',
  },
};

const departureCities: DepartureCity[] = ['Marrakech', 'Fes', 'Casablanca', 'Tangier', 'Agadir'];

function getEffortStyle(effort: Effort): string {
  switch (effort) {
    case 'Easy':
      return 'tag-primary';
    case 'Moderate':
      return 'tag-secondary';
    case 'Challenging':
      return 'tag-accent';
  }
}

function getCategoryIcon(category: TripCategory) {
  switch (category) {
    case 'nature':
      return TreePine;
    case 'history':
      return Landmark;
    case 'beach':
      return Waves;
    case 'culture':
      return Star;
    case 'adventure':
      return Mountain;
    case 'wildlife':
      return Binoculars;
  }
}

function getCategoryLabel(category: TripCategory): string {
  switch (category) {
    case 'nature':
      return 'Nature';
    case 'history':
      return 'History & Heritage';
    case 'beach':
      return 'Beach & Coast';
    case 'culture':
      return 'Culture';
    case 'adventure':
      return 'Adventure';
    case 'wildlife':
      return 'Wildlife';
  }
}

/* ======================================================================
   PAGE COMPONENT
   ====================================================================== */

export default function DayTripsPage() {
  const totalTrips = dayTrips.length;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&h=900&fit=crop"
          alt="Ouzoud Waterfalls cascading through lush Moroccan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-6">
            <Compass className="w-4 h-4 text-white" />
            <span className="text-white/90 text-sm font-medium tracking-wide">
              {totalTrips} Curated Excursions from 5 Cities
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            Unforgettable Day Trips<br />Across Morocco
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
            From thundering waterfalls and ancient Roman ruins to blue-painted medinas
            and red-arched beaches. Your definitive guide to the best excursions from every major city,
            with real distances, honest costs, and insider tips.
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav
        aria-label="Breadcrumb"
        className="container-morocco py-4 border-b border-[var(--border-light)]"
      >
        <ol className="flex items-center gap-1.5 text-sm text-[var(--text-muted)]">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-[var(--color-primary)] transition-colors">
              <Home className="w-3.5 h-3.5" />
              Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-[var(--text-primary)] font-medium">Day Trips</li>
        </ol>
      </nav>

      {/* ── Introduction ── */}
      <section className="container-morocco py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-6">
            Why Day Trips Are the Best Way to See Morocco
          </h2>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
            Morocco packs extraordinary diversity into a compact geography. Within a few hours
            of any major city, you can stand beneath towering waterfalls, explore
            2,000-year-old Roman mosaics, wander through blue-painted mountain villages,
            or surf world-class Atlantic swells.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            This guide covers {totalTrips} carefully selected day trips from five departure
            cities, each with detailed transport options, honest cost estimates in Moroccan
            dirhams, and insider tips from years of on-the-ground experience. Whether you have a rental car
            or rely on public transport, there is an adventure waiting just beyond the city gates.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12 max-w-5xl mx-auto">
          {[
            { icon: MapPin, label: 'Destinations', value: `${totalTrips}` },
            { icon: Navigation, label: 'Departure Cities', value: '5' },
            { icon: Clock, label: 'Shortest Trip', value: '20 min' },
            { icon: CircleDollarSign, label: 'Budget From', value: '50 MAD' },
            { icon: Footprints, label: 'Categories', value: '6' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card-moroccan p-4 md:p-5 text-center"
            >
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-[var(--color-primary)]" />
              <div className="text-xl md:text-2xl font-bold text-[var(--text-primary)]">{stat.value}</div>
              <div className="text-xs md:text-sm text-[var(--text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Quick Navigation ── */}
      <section className="bg-[var(--surface-muted)] border-y border-[var(--border-light)]">
        <div className="container-morocco py-8">
          <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)] mb-2 text-center">
            Jump to Departure City
          </h3>
          <p className="text-sm text-[var(--text-muted)] text-center mb-5">
            Select your base city to see available day trips
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {departureCities.map((city) => {
              const config = cityConfig[city];
              const CityIcon = config.icon;
              return (
                <a
                  key={city}
                  href={`#from-${city.toLowerCase()}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[var(--border-light)] bg-white hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all text-sm font-medium text-[var(--text-secondary)] shadow-sm"
                >
                  <CityIcon className="w-4 h-4" />
                  {city}
                  <span className="text-xs bg-[var(--surface-muted)] px-2 py-0.5 rounded-full text-[var(--text-muted)]">{config.count}</span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Day Trips by City ── */}
      {departureCities.map((city) => {
        const trips = dayTrips.filter((t) => t.departureCity === city);
        const config = cityConfig[city];
        const CityIcon = config.icon;

        return (
          <section
            key={city}
            id={`from-${city.toLowerCase()}`}
            className="container-morocco py-12 md:py-16 scroll-mt-24"
          >
            {/* City Header */}
            <div className="flex items-start gap-4 mb-8">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center gradient-moroccan shrink-0"
              >
                <CityIcon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)]">
                  Day Trips from {city}
                </h2>
                <p className="text-[var(--text-secondary)] mt-1">
                  {config.tagline}
                </p>
                <p className="text-sm text-[var(--text-muted)] mt-1">
                  {trips.length} excursion{trips.length !== 1 ? 's' : ''} available
                </p>
              </div>
            </div>

            {/* Trip Cards */}
            <div className="grid gap-8">
              {trips.map((trip, index) => {
                const CategoryIcon = getCategoryIcon(trip.category);
                return (
                  <article
                    key={trip.name}
                    className="card-moroccan overflow-hidden"
                  >
                    <div className="grid md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr]">
                      {/* Image */}
                      <div className="relative h-64 md:h-full min-h-[280px]">
                        <img
                          src={trip.image}
                          alt={`${trip.name} - ${trip.tagline}`}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading={index < 2 && city === 'Marrakech' ? 'eager' : 'lazy'}
                        />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          <span className={getEffortStyle(trip.effort)}>
                            {trip.effort}
                          </span>
                          <span className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white">
                            <CategoryIcon className="w-3 h-3" />
                            {getCategoryLabel(trip.category)}
                          </span>
                        </div>
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {trip.duration} drive
                          </span>
                          <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-1.5">
                            <Route className="w-3.5 h-3.5" />
                            {trip.distance}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-8">
                        {/* Header */}
                        <div className="mb-3">
                          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-[var(--text-primary)]">
                            {trip.name}
                          </h3>
                          <p className="text-[var(--text-secondary)] mt-1">
                            {trip.tagline}
                          </p>
                        </div>

                        {/* Meta Row */}
                        <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-5 pb-5 border-b border-[var(--border-light)]">
                          <span className="flex items-center gap-1.5">
                            <CalendarDays className="w-4 h-4 text-[var(--color-primary)]" />
                            {trip.bestTime}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Wallet className="w-4 h-4 text-[var(--color-primary)]" />
                            {trip.costRange}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-[var(--color-primary)]" />
                            Return: {trip.returnBy}
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-3 flex items-center gap-1.5">
                            <Star className="w-4 h-4 text-[var(--color-primary)]" />
                            Highlights
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-2">
                            {trip.highlights.map((highlight) => (
                              <li
                                key={highlight}
                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                              >
                                <ChevronRight className="w-4 h-4 mt-0.5 text-[var(--color-primary)] shrink-0" />
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* What to See */}
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-3 flex items-center gap-1.5">
                            <Camera className="w-4 h-4 text-[var(--color-primary)]" />
                            What to See
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.whatToSee.map((item) => (
                              <span
                                key={item}
                                className="inline-block text-xs px-2.5 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Transport Options */}
                        <div className="mb-5">
                          <h4 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-3 flex items-center gap-1.5">
                            <Car className="w-4 h-4 text-[var(--color-primary)]" />
                            Getting There
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {trip.transport.map((option) => (
                              <span
                                key={option}
                                className="inline-flex items-center gap-1.5 text-xs bg-[var(--surface-muted)] text-[var(--text-secondary)] px-3 py-1.5 rounded-full border border-[var(--border-light)]"
                              >
                                {option.toLowerCase().includes('bus') || option.toLowerCase().includes('train') ? (
                                  <Bus className="w-3 h-3" />
                                ) : option.toLowerCase().includes('taxi') || option.toLowerCase().includes('car') ? (
                                  <Car className="w-3 h-3" />
                                ) : (
                                  <Users className="w-3 h-3" />
                                )}
                                {option}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Cost Breakdown */}
                        <div className="mb-5 bg-[var(--surface-muted)] border border-[var(--border-light)] rounded-lg p-3.5">
                          <h4 className="text-xs font-semibold text-[var(--text-primary)] uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                            <CircleDollarSign className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                            Cost Breakdown
                          </h4>
                          <p className="text-sm text-[var(--text-secondary)]">
                            {trip.costBreakdown}
                          </p>
                        </div>

                        {/* Pro Tip */}
                        <div className="bg-[var(--color-primary)]/5 border border-[var(--color-primary)]/20 rounded-xl p-4 flex gap-3">
                          <Lightbulb className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-semibold text-[var(--color-primary)] uppercase tracking-wide">
                              Insider Tip
                            </span>
                            <p className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
                              {trip.proTip}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}

      {/* ── Distance & Time Quick Reference ── */}
      <section className="bg-[var(--surface-muted)] border-t border-[var(--border-light)]">
        <div className="container-morocco py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4">
              Quick Reference: All Day Trips at a Glance
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Compare distances, drive times, effort levels, and costs across all {totalTrips} day trips to find the perfect excursion for your schedule and budget.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)] border-b border-[var(--border-default)]">
                    <th className="text-left px-4 py-3 font-semibold text-[var(--text-primary)]">Destination</th>
                    <th className="text-left px-4 py-3 font-semibold text-[var(--text-primary)]">From</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Distance</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Drive</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Effort</th>
                    <th className="text-center px-4 py-3 font-semibold text-[var(--text-primary)]">Type</th>
                    <th className="text-right px-4 py-3 font-semibold text-[var(--text-primary)]">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {dayTrips.map((trip, index) => {
                    const CategoryIcon = getCategoryIcon(trip.category);
                    return (
                      <tr
                        key={`${trip.departureCity}-${trip.name}`}
                        className={`border-b border-[var(--border-light)] hover:bg-[var(--surface-muted)]/50 transition-colors ${
                          index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]/30'
                        }`}
                      >
                        <td className="px-4 py-3 font-medium text-[var(--text-primary)]">
                          <a href={`#from-${trip.departureCity.toLowerCase()}`} className="hover:text-[var(--color-primary)] transition-colors">
                            {trip.name}
                          </a>
                        </td>
                        <td className="px-4 py-3 text-[var(--text-secondary)]">{trip.departureCity}</td>
                        <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{trip.distance}</td>
                        <td className="px-4 py-3 text-center text-[var(--text-secondary)]">{trip.duration}</td>
                        <td className="px-4 py-3 text-center">
                          <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${
                            trip.effort === 'Easy'
                              ? 'bg-green-100 text-green-700'
                              : trip.effort === 'Moderate'
                              ? 'bg-amber-100 text-amber-700'
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {trip.effort}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
                            <CategoryIcon className="w-3 h-3" />
                            {getCategoryLabel(trip.category)}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right text-[var(--text-secondary)] whitespace-nowrap">{trip.costRange}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Planning Tips Section ── */}
      <section className="moroccan-pattern">
        <div className="container-morocco py-12 md:py-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-[var(--text-primary)] text-center mb-10">
            Essential Day Trip Planning Tips
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Car,
                title: 'Transport Choices',
                text: 'Rental cars offer the most flexibility. Grand taxis are affordable shared rides -- negotiate before boarding. CTM and Supratours buses are reliable for popular routes. Organized tours remove all logistics but cost 2-3x more.',
              },
              {
                icon: Shield,
                title: 'Safety First',
                text: 'Always tell your riad where you are going. Carry cash in smaller bills (10, 20, 50 MAD) as ATMs outside cities are rare. Download offline maps before heading into rural areas. Carry water and sunscreen year-round.',
              },
              {
                icon: Clock,
                title: 'Timing Matters',
                text: 'Leave early to beat both heat and crowds. Most sites are best before 10am or after 4pm. Friday afternoons many small-town businesses close for prayer. During Ramadan, restaurant hours vary significantly.',
              },
              {
                icon: Thermometer,
                title: 'Seasonal Planning',
                text: 'Spring (March-May) and autumn (September-November) offer ideal weather for most trips. Summer heat makes inland excursions uncomfortable above 40C. Winter brings snow to mountain passes like Tizi n\'Tichka.',
              },
              {
                icon: Camera,
                title: 'Photo Etiquette',
                text: 'Always ask permission before photographing people, especially in rural Berber communities. Some appreciate a small tip (5-10 MAD) for photos. Early morning and golden hour light is exceptional across Morocco.',
              },
              {
                icon: Wallet,
                title: 'Budget Smart',
                text: 'Cost ranges include typical transport, entry fees, and a meal. Sharing grand taxis with other travelers cuts costs dramatically. Markets and small restaurants rarely accept cards -- carry cash.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <tip.icon className="w-8 h-8 text-[var(--color-primary)] mb-3" />
                <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--text-primary)] mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tip.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Important Notes ── */}
      <section className="bg-[var(--surface-muted)] border-t border-[var(--border-light)]">
        <div className="container-morocco py-12 md:py-16">
          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan p-6 md:p-8 border-l-4 border-l-[var(--color-primary)]">
              <div className="flex items-start gap-3 mb-4">
                <Info className="w-6 h-6 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold text-[var(--text-primary)]">
                  About Our Cost Estimates
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed pl-9">
                <p>
                  All prices are in Moroccan Dirhams (MAD). At the time of writing, 1 USD is approximately
                  10 MAD, 1 EUR is approximately 11 MAD, and 1 GBP is approximately 13 MAD.
                </p>
                <p>
                  Cost ranges represent per-person estimates including transport, entry fees, a meal,
                  and basic expenses. The lower end assumes shared transport and budget dining.
                  The upper end reflects private transport, guided tours, and restaurant meals.
                </p>
                <p>
                  Prices for organized tours, entrance fees, and transport may change seasonally.
                  We recommend confirming current prices locally. Tips for guides (10-15% of tour
                  cost) and drivers (20-50 MAD) are customary but not included in our estimates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="relative overflow-hidden gradient-moroccan">
        <div className="container-morocco py-16 text-center relative z-10">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Explore Beyond the City Walls?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Combine multiple day trips into a complete Morocco itinerary.
            Our travel planning tools help you build the perfect route across the kingdom.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-[var(--color-primary)] font-medium hover:bg-white/90 transition-opacity"
            >
              Browse Itineraries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/tours"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Organized Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/regions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-white text-white font-medium hover:bg-white/10 transition-colors"
            >
              Explore Regions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

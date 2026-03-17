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
  Moon,
  Compass,
  Camera,
  Tent,
  Route,
  Calendar,
  Thermometer,
  Backpack,
  Car,
  Award,
  Sunrise,
  Navigation,
  Milestone,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Marrakech to Sahara Desert Tour Guide 2026 | Prices, Routes & Itineraries',
  description:
    'Complete guide to getting from Marrakech to the Sahara Desert (Merzouga & Erg Chebbi). Compare 2-day, 3-day & 4-day tour itineraries. Prices from 1,500 MAD for group tours to luxury private options. Route stops, desert camps, camel treks, and packing tips.',
  keywords: [
    'Marrakech to Sahara desert',
    'Marrakech to Merzouga',
    'Sahara desert tour Morocco',
    'Erg Chebbi tour',
    'Marrakech desert tour prices',
    '3 day Sahara tour',
    '2 day desert tour Marrakech',
    'Marrakech to Sahara route',
    'Morocco desert camp',
    'luxury desert camp Morocco',
    'camel trek Sahara',
    'Ait Benhaddou tour',
    'Todra Gorge tour',
    'Dades Gorge Morocco',
    'Tizi n Tichka pass',
    'Ouarzazate day trip',
    'Merzouga desert experience',
    'Morocco Sahara prices 2026',
    'sandboarding Morocco',
    'sunrise Sahara desert',
    'self drive Sahara Morocco',
    'budget desert tour Morocco',
    'private Sahara tour Morocco',
  ],
  openGraph: {
    title: 'Marrakech to Sahara Desert Tour Guide 2026 | Prices, Routes & Itineraries',
    description:
      'Everything you need to plan your Marrakech to Sahara desert trip. Compare tours from 1,500 MAD, explore route stops, desert camp types, and get expert packing advice.',
    url: `${BASE_URL}/marrakech-to-sahara`,
    images: [
      {
        url: `${BASE_URL}/images/hero-sahara-dunes.webp`,
        width: 1200,
        height: 630,
        alt: 'Golden sand dunes of Erg Chebbi in the Sahara Desert at sunset with camel caravan silhouette',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrakech to Sahara Desert Tour Guide 2026',
    description:
      'From 1,500 MAD group tours to luxury private camps. Complete guide with itineraries, route stops, prices, and desert survival tips.',
    images: [`${BASE_URL}/images/hero-sahara-dunes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/marrakech-to-sahara` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/marrakech-to-sahara`,
  name: 'Marrakech to Sahara Desert Tour Guide 2026 | Prices, Routes & Itineraries',
  description:
    'Complete guide to getting from Marrakech to the Sahara Desert. Compare tour options, prices, routes, desert camp types, and practical tips for the journey.',
  url: `${BASE_URL}/marrakech-to-sahara`,
  image: `${BASE_URL}/images/hero-sahara-dunes.webp`,
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
  mainEntityOfPage: `${BASE_URL}/marrakech-to-sahara`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Sahara Desert' },
    { '@type': 'Place', name: 'Merzouga' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'City', name: 'Marrakech' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Marrakech to Sahara Desert', item: `${BASE_URL}/marrakech-to-sahara` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to get from Marrakech to the Sahara Desert?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The drive from Marrakech to Merzouga (Erg Chebbi) takes approximately 9-10 hours one way via the N10 through Ouarzazate. Most tours split this into a 2 or 3-day journey with stops at Ait Benhaddou, Dades Gorge, and Todra Gorge along the way.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Marrakech to Sahara desert tour cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget group tours start from 1,500 MAD per person for a 3-day trip. Mid-range private tours cost from 3,500 MAD per person. Luxury private tours with premium desert camps start from 8,000 MAD per person. Prices vary by season, group size, and accommodation level.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to visit the Sahara Desert from Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best months are October to April when daytime temperatures are comfortable (20-30 degrees Celsius). March and April offer the best balance of mild weather and clear skies. Avoid June to August when temperatures can exceed 50 degrees Celsius in the desert.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive myself from Marrakech to the Sahara?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, the road from Marrakech to Merzouga is fully paved and in good condition. A standard rental car works fine for the main road. The journey is approximately 560 km via Ouarzazate and takes 9-10 hours. You will need a 4x4 only to reach some remote desert camps off the main road.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a Sahara Desert trip?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential items include a headscarf or turban for sand protection, sunscreen (SPF 50+), warm layers for cold desert nights (temperatures can drop to 5 degrees Celsius), comfortable walking shoes, a headlamp or flashlight, sunglasses, and a refillable water bottle. Desert camps provide blankets but bring a warm jacket for stargazing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Erg Chebbi and Erg Chigaga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erg Chebbi (near Merzouga) has the tallest dunes reaching 150 meters and is more accessible, with most tours going here. Erg Chigaga (near M Hamid) is more remote and less touristy but requires a 4x4 and longer travel time. Erg Chebbi is better for first-time visitors; Erg Chigaga suits those seeking complete solitude.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const tourOptions = [
  {
    duration: '2-Day Express Tour',
    nights: '1 night in desert',
    icon: Clock,
    bestFor: 'Time-limited travelers who want a taste of the Sahara',
    overview:
      'The fastest way to experience the Sahara from Marrakech. This is a demanding tour with long driving days (9-10 hours each way), but you still get the full desert camp experience with a camel trek and sunrise over the dunes.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Marrakech to Merzouga',
        details:
          'Depart Marrakech early morning (5:00-6:00 AM). Cross the Tizi n\'Tichka Pass (2,260m). Brief photo stop at Ait Benhaddou. Lunch in Ouarzazate. Continue through Tinghir and the Ziz Valley. Arrive in Merzouga late afternoon. Transfer to camels for a 1-hour ride to the desert camp. Watch the sunset over Erg Chebbi. Dinner under the stars with traditional Berber music and drumming.',
      },
      {
        day: 'Day 2',
        title: 'Merzouga to Marrakech',
        details:
          'Wake before dawn for the sunrise over the dunes. Camel ride back to Merzouga. Breakfast and shower. Depart for the long drive back to Marrakech via the same route or alternative road through Rissani and Errachidia. Arrive in Marrakech late evening (9:00-10:00 PM).',
      },
    ],
    priceRange: {
      budget: 'From 1,200 MAD per person (group)',
      midRange: 'From 2,500 MAD per person (private)',
      luxury: 'From 5,000 MAD per person (private luxury)',
    },
    pros: ['Maximum desert time for minimum days off', 'Still includes camel trek and desert camp', 'Most affordable option'],
    cons: ['Extremely long driving days (18-20 hours total)', 'Limited stops at attractions along the way', 'Tiring, especially for children or elderly travelers'],
  },
  {
    duration: '3-Day Classic Tour',
    nights: '1 night in desert, 1 night in Dades/Todra',
    icon: Star,
    bestFor: 'The most popular option, balancing time with sightseeing',
    overview:
      'The classic Marrakech-to-Sahara tour and by far the most popular option. Three days allows comfortable driving with proper stops at every major attraction along the route. You spend one night in the Dades or Todra Gorge area and one night in a desert camp.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Marrakech to Dades Gorge',
        details:
          'Depart Marrakech morning (8:00 AM). Cross the Tizi n\'Tichka Pass with photo stops at scenic viewpoints. Visit the UNESCO World Heritage site of Ait Benhaddou kasbah (1.5 hours). Lunch in Ouarzazate with optional visit to Atlas Studios. Drive through the Valley of Roses and the Road of a Thousand Kasbahs. Arrive at Dades Gorge for overnight. Dinner at hotel/riad.',
      },
      {
        day: 'Day 2',
        title: 'Dades Gorge to Merzouga',
        details:
          'Morning walk in Dades Gorge. Drive to Todra Gorge for a 1-hour walk between the 300-meter canyon walls. Continue through Tinejdad, Goulmima, and Erfoud (optional fossil workshop visit). Arrive in Merzouga mid-afternoon. Camel ride to desert camp in Erg Chebbi (1 hour). Sunset over the dunes. Dinner, Berber music, and stargazing at camp.',
      },
      {
        day: 'Day 3',
        title: 'Merzouga to Marrakech',
        details:
          'Sunrise over the dunes. Camel ride back. Breakfast, shower, and optional sandboarding. Depart Merzouga for the return to Marrakech via Errachidia, Midelt, and the Middle Atlas (different route back). Lunch in Midelt. Pass through Ifrane and Beni Mellal. Arrive Marrakech evening (7:00-8:00 PM).',
      },
    ],
    priceRange: {
      budget: 'From 1,500 MAD per person (group)',
      midRange: 'From 3,500 MAD per person (private)',
      luxury: 'From 8,000 MAD per person (private luxury)',
    },
    pros: ['Best value for money and time', 'Comfortable driving distances each day', 'Covers all major route highlights', 'Different outbound and return routes'],
    cons: ['Day 3 return drive is still long (8-9 hours)', 'Only one night in the desert', 'Group tours may feel rushed at stops'],
  },
  {
    duration: '4-Day Extended Tour',
    nights: '2 nights in desert area, 1 night in gorge',
    icon: Award,
    bestFor: 'Travelers who want a deeper, more relaxed Sahara experience',
    overview:
      'The extended tour adds a second night near the desert, giving you a full day to explore Merzouga, visit nomad families, take a 4x4 desert excursion, or simply relax at your camp. No rushing, no exhausting long drives, and the richest experience of the route.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Marrakech to Dades Gorge',
        details:
          'Depart Marrakech (8:00 AM). Cross Tizi n\'Tichka Pass. Extended visit to Ait Benhaddou with guided tour of the kasbah interior. Lunch in Ouarzazate with visit to Taourirt Kasbah. Drive through the Rose Valley with optional stop at a rose water distillery (seasonal, April-May). Arrive Dades Gorge. Evening walk and dinner at hotel.',
      },
      {
        day: 'Day 2',
        title: 'Dades Gorge to Merzouga',
        details:
          'Morning exploration of the dramatic hairpin bends of upper Dades Gorge. Drive to Todra Gorge for a leisurely walk and tea at the canyon. Continue through the Ziz Valley palm groves with photo stops. Arrive Merzouga mid-afternoon. Camel trek to desert camp. Sunset, dinner under the stars, traditional music, and stargazing.',
      },
      {
        day: 'Day 3',
        title: 'Full Day in the Desert',
        details:
          'Sunrise over the dunes. After breakfast, choose your activities: 4x4 excursion to visit Khamlia village to hear Gnawa music, visit a nomad family for tea, explore a fossil quarry, try sandboarding on the dunes, or simply relax at the camp with a book. Optional quad biking or buggy tour. Second sunset over the dunes. Second night at desert camp or upgrade to a luxury camp.',
      },
      {
        day: 'Day 4',
        title: 'Merzouga to Marrakech',
        details:
          'Final sunrise. Camel ride back. Breakfast and departure. Return via the scenic route through Errachidia, over the Middle Atlas through the cedar forests of Azrou (optional Barbary macaque spotting), and through Ifrane. Lunch stop in Beni Mellal or Midelt. Arrive Marrakech evening (7:00-8:00 PM).',
      },
    ],
    priceRange: {
      budget: 'From 2,200 MAD per person (group)',
      midRange: 'From 5,000 MAD per person (private)',
      luxury: 'From 12,000 MAD per person (private luxury)',
    },
    pros: ['Full day to explore the desert properly', 'Visit Khamlia, nomads, and local sights', 'Two sunrises and two sunsets over the dunes', 'Most relaxed pace with no rushing'],
    cons: ['Requires more time off', 'Higher total cost', 'Day 4 return is still a long drive'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR PRICES BY TYPE
   ═══════════════════════════════════════════════════════════════ */

const tourPricing = [
  {
    type: 'Budget Group Tour',
    icon: Users,
    color: 'var(--color-accent)',
    priceRange: 'From 1,500 MAD per person (3-day)',
    groupSize: '15-20 people per bus',
    description:
      'The most affordable way to reach the Sahara. You travel in a minibus with other travelers, share a standard desert camp, and follow a fixed itinerary. Meals are basic but filling. Stops are shorter to keep the schedule.',
    includes: [
      'Transport in air-conditioned minibus',
      'Hotel/riad accommodation (shared rooms)',
      'Standard desert camp (shared tent)',
      'Camel ride to/from camp',
      'Breakfast and dinner daily',
      'English-speaking guide/driver',
    ],
    doesNotInclude: [
      'Lunches (from 60-100 MAD at roadside restaurants)',
      'Drinks and snacks',
      'Entry fees to sites (from 20-70 MAD each)',
      'Tips for driver and camp staff',
      'Travel insurance',
    ],
  },
  {
    type: 'Mid-Range Private Tour',
    icon: Car,
    color: 'var(--color-gold)',
    priceRange: 'From 3,500 MAD per person (3-day)',
    groupSize: 'Private: 2-6 people per vehicle',
    description:
      'A private tour with your own driver-guide, a comfortable 4x4 or minivan, and better accommodation. You control the pace and can linger at stops. Meals are included at better restaurants and the desert camp is upgraded.',
    includes: [
      'Private 4x4 or minivan with driver-guide',
      'Mid-range hotel/riad accommodation (private rooms)',
      'Mid-range desert camp (private tent with beds)',
      'Camel ride to/from camp',
      'All meals (breakfast, lunch, dinner)',
      'English-speaking licensed guide',
      'Entrance fees to major sites',
      'Bottled water in vehicle',
    ],
    doesNotInclude: [
      'Alcoholic drinks',
      'Optional activities (quad biking, sandboarding)',
      'Tips for driver, guide, and camp staff',
      'Travel insurance',
    ],
  },
  {
    type: 'Luxury Private Tour',
    icon: Star,
    color: 'var(--color-gold)',
    priceRange: 'From 8,000 MAD per person (3-day)',
    groupSize: 'Private: 2-4 people in luxury 4x4',
    description:
      'The premium Sahara experience. Travel in a luxury Land Cruiser or similar, stay at the best hotels along the route, and sleep in a luxury desert camp with private tented suites, real beds, en-suite bathrooms, and gourmet dining under the stars.',
    includes: [
      'Luxury 4x4 (Land Cruiser or similar)',
      'Boutique hotel/riad accommodation (superior rooms)',
      'Luxury desert camp (private suite with en-suite bathroom)',
      'Private camel trek with experienced guide',
      'All gourmet meals and drinks (including wine with dinner)',
      'Licensed English/French-speaking expert guide',
      'All entrance fees and activities',
      'Welcome mint tea and pastries at each stop',
      'Sandboarding equipment',
      'Stargazing with telescope at camp',
      'Private sunrise/sunset viewing',
    ],
    doesNotInclude: [
      'International flights',
      'Travel insurance',
      'Personal shopping',
      'Tips (recommended: from 200-400 MAD per day for guide)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ROUTE STOPS
   ═══════════════════════════════════════════════════════════════ */

const routeStops = [
  {
    name: 'Tizi n\'Tichka Pass',
    icon: Mountain,
    altitude: '2,260 meters',
    distanceFromMarrakech: '100 km (2 hours)',
    image: '/images/photo-atlas-mountain-pass.webp',
    description:
      'The highest paved mountain pass in North Africa. Built by the French Foreign Legion in the 1930s, this winding road through the High Atlas offers breathtaking views of snow-capped peaks, terraced Berber villages, and deep valleys. In winter, the pass can be snow-covered but is almost always open.',
    highlights: ['Panoramic mountain views', 'Roadside mineral sellers', 'Berber villages visible from road', 'Snow in winter months'],
    tipText: 'Stop at the summit viewpoint for photos. The roadside sellers offer argan oil products at good prices, but quality varies.',
    timeNeeded: '30-45 minutes for photo stops',
  },
  {
    name: 'Ait Benhaddou',
    icon: Award,
    altitude: '1,300 meters',
    distanceFromMarrakech: '190 km (3.5 hours)',
    image: '/images/photo-ait-benhaddou.webp',
    description:
      'A UNESCO World Heritage Site and one of Morocco\'s most iconic sights. This fortified ksar (village) is a masterpiece of southern Moroccan earthen architecture. Used as a filming location for Gladiator, Game of Thrones, and Lawrence of Arabia. Climb to the top for views across the oasis and river below.',
    highlights: ['UNESCO World Heritage Site', 'Film location for Hollywood productions', 'Stunning earthen architecture', 'River crossing to reach the kasbah'],
    tipText: 'Allow at least 1.5 hours to properly explore. The climb to the top is moderate and well worth it. A local guide (from 50 MAD) adds context to the history.',
    timeNeeded: '1.5-2 hours',
  },
  {
    name: 'Ouarzazate',
    icon: Camera,
    altitude: '1,160 meters',
    distanceFromMarrakech: '200 km (4 hours)',
    image: '/images/photo-ouarzazate-kasbah.webp',
    description:
      'Known as the "Gateway to the Sahara" and the "Hollywood of Africa." Home to Atlas Studios, the largest film studio in the world by area. The Taourirt Kasbah in the center is a remarkable example of southern Moroccan architecture. Most tours stop here for lunch.',
    highlights: ['Atlas Studios tour available', 'Taourirt Kasbah', 'Gateway to the desert', 'Good lunch stop with restaurants'],
    tipText: 'Atlas Studios (from 60 MAD entry) is interesting for film buffs. If short on time, the Taourirt Kasbah is the quicker stop. Great restaurants along the main boulevard.',
    timeNeeded: '1-2 hours (or more for Atlas Studios)',
  },
  {
    name: 'Dades Gorge',
    icon: Mountain,
    altitude: '1,500-1,800 meters',
    distanceFromMarrakech: '330 km (5.5 hours)',
    image: '/images/photo-dades-gorge.webp',
    description:
      'A dramatic river canyon carved by the Dades River over millions of years. The gorge features the famous "Road of a Thousand Kasbahs" and a series of hairpin bends that are among the most photographed roads in Morocco. The upper gorge narrows to just 20 meters wide with 300-meter-high walls.',
    highlights: ['Famous hairpin bends', 'Road of a Thousand Kasbahs', 'Dramatic canyon walls', 'Overnight stop on 3-day tours'],
    tipText: 'The hairpin bends of the upper gorge are a must-see. Most hotels in the gorge have terraces overlooking the canyon. This is where you spend your first night on a 3-day tour.',
    timeNeeded: 'Overnight stop recommended',
  },
  {
    name: 'Todra Gorge',
    icon: Navigation,
    altitude: '1,400 meters',
    distanceFromMarrakech: '370 km (6.5 hours)',
    image: '/images/photo-todra-gorge.webp',
    description:
      'One of the most spectacular natural landmarks in Morocco. At its narrowest point, the canyon walls rise 300 meters on either side of the river with a gap of only 10 meters. The morning light illuminating the canyon is unforgettable. A popular rock-climbing destination with routes for all levels.',
    highlights: ['300-meter canyon walls', 'Only 10 meters wide at narrowest', 'Rock climbing opportunities', 'Morning light is spectacular'],
    tipText: 'Arrive in the morning when sunlight enters the canyon floor. Walk at least 1 km into the gorge for the best narrows. Rock climbing guides available from 300 MAD for a half-day.',
    timeNeeded: '1-1.5 hours',
  },
  {
    name: 'Merzouga & Erg Chebbi',
    icon: Sun,
    altitude: '700 meters (desert floor)',
    distanceFromMarrakech: '560 km (9-10 hours)',
    image: '/images/hero-sahara-dunes.webp',
    description:
      'The final destination. Merzouga is a small village at the edge of Erg Chebbi, the largest sand sea in Morocco with dunes reaching up to 150 meters. This is where you board your camel for the ride into the desert camp. The golden-orange dunes against the blue sky create an otherworldly landscape.',
    highlights: ['Dunes up to 150 meters high', 'Camel treks into the desert', 'Desert camps with stargazing', 'Sunrise and sunset spectacles'],
    tipText: 'The camel ride to camp takes about 1 hour. Bring a scarf to wrap around your face against the sand. Camera batteries drain fast in extreme cold or heat.',
    timeNeeded: '1-3 nights recommended',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT CAMP TYPES
   ═══════════════════════════════════════════════════════════════ */

const desertCampTypes = [
  {
    type: 'Budget Camp',
    icon: Tent,
    pricePerNight: 'From 250 MAD per person',
    description:
      'Basic Berber-style tents with mattresses on the floor, shared blankets, and communal toilet facilities. The experience is authentic and you are right among the dunes. Meals are simple but traditional: tagine, couscous, bread, and mint tea.',
    features: [
      'Berber tent accommodation (shared)',
      'Mattress and blankets on floor',
      'Shared bathroom facilities',
      'Basic lighting (candles or battery lamps)',
      'Traditional dinner and breakfast',
      'Camel ride to/from camp',
      'Berber music around campfire',
    ],
    bestFor: 'Budget travelers, backpackers, and those wanting a raw desert experience',
    rating: 'Basic comfort, maximum authenticity',
  },
  {
    type: 'Standard Camp',
    icon: Tent,
    pricePerNight: 'From 500 MAD per person',
    description:
      'Upgraded tents with proper beds, clean linens, and pillows. Each tent typically sleeps 2-4 people. Shared but cleaner bathroom facilities with basic showers. Better meals with more variety and sometimes a communal dining tent.',
    features: [
      'Private or semi-private tent',
      'Real beds with clean linens and pillows',
      'Shared bathroom with shower',
      'Solar or generator lighting',
      'Improved dinner and breakfast',
      'Camel ride to/from camp',
      'Berber music and campfire',
      'Sandboarding available',
    ],
    bestFor: 'Couples, families, and travelers wanting comfort without luxury pricing',
    rating: 'Good comfort, good value',
  },
  {
    type: 'Luxury Camp',
    icon: Star,
    pricePerNight: 'From 1,500 MAD per person',
    description:
      'The five-star desert experience. Private tented suites with en-suite bathrooms, hot showers, flushing toilets, and sometimes even air conditioning. Real beds with premium bedding. Gourmet dining with multiple courses. Some luxury camps have a swimming pool.',
    features: [
      'Private tented suite (30+ sqm)',
      'En-suite bathroom with hot shower and toilet',
      'King-size bed with luxury bedding',
      'Electricity and device charging',
      'Gourmet multi-course dinner',
      'Private camel trek',
      'Stargazing with telescope',
      'Welcome tea ceremony',
      'Desert excursions included',
      'Some camps have swimming pools',
    ],
    bestFor: 'Honeymoons, special occasions, luxury travelers, and those who want comfort in the wilderness',
    rating: 'Maximum comfort, unforgettable experience',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT EXPERIENCES
   ═══════════════════════════════════════════════════════════════ */

const desertExperiences = [
  {
    name: 'Camel Trek',
    icon: Route,
    duration: '1-2 hours each way',
    description:
      'The quintessential Sahara experience. Ride a dromedary camel through the golden dunes to your desert camp. The swaying rhythm of the camel, the silence of the desert, and the changing light on the dunes create a memory that lasts a lifetime. All tours include a camel trek.',
    tip: 'Wear long trousers to avoid chafing. Hold the saddle handle, lean back when going downhill, forward when going uphill. Bring a scarf to wrap your face against blowing sand.',
  },
  {
    name: 'Sunrise & Sunset',
    icon: Sunrise,
    duration: '30-60 minutes each',
    description:
      'The dunes of Erg Chebbi shift from gold to orange to crimson as the sun rises and sets. Watching the sunrise from the top of a dune, with the desert stretching in every direction, is one of the most profound natural spectacles you will ever witness. Your camp host will wake you in time.',
    tip: 'Climb the dune behind your camp for the best views. Sunrise is at approximately 6:30 AM in winter, 5:30 AM in summer. Bring warm layers as pre-dawn temperatures can be near freezing.',
  },
  {
    name: 'Sandboarding',
    icon: Mountain,
    duration: '1-2 hours',
    description:
      'Strap on a board and slide down the steep faces of the Erg Chebbi dunes. It works best on the harder-packed slopes and is easier to learn than snowboarding. Most desert camps have boards available, and the dunes near camp serve as the slopes. No experience necessary.',
    tip: 'Best done in the early morning or late afternoon when the sand is cooler and firmer. Wax the bottom of your board with candle wax for faster runs.',
  },
  {
    name: 'Stargazing',
    icon: Moon,
    duration: '1-2 hours',
    description:
      'The Sahara is one of the darkest places on earth, free from light pollution. On a clear night, the Milky Way is clearly visible with the naked eye, and shooting stars are common. Luxury camps provide telescopes and sometimes a guide to explain the constellations. The silence adds to the intensity.',
    tip: 'New moon nights offer the best stargazing. Check the moon phase before booking. Bring a warm blanket to lie on the sand.',
  },
  {
    name: 'Khamlia Village & Gnawa Music',
    icon: Users,
    duration: '1-1.5 hours',
    description:
      'Khamlia is a small village near Merzouga inhabited by descendants of sub-Saharan African people who settled centuries ago. The village is famous for Gnawa music, a spiritual trance music with roots in West Africa. Local musicians perform for visitors and the experience is deeply moving.',
    tip: 'A donation of from 50-100 MAD per person is customary. The music sessions are informal and you can stay as long as you like. CDs and instruments are available for purchase.',
  },
  {
    name: 'Nomad Family Visit',
    icon: Tent,
    duration: '30-60 minutes',
    description:
      'Visit a semi-nomadic Berber family living in the desert near Merzouga. They will welcome you with tea and show you their way of life, including how they make bread, tend goats, and survive in the harsh desert environment. A humbling and eye-opening encounter.',
    tip: 'Bring a small gift: sugar, tea, school supplies, or cooking oil. These are appreciated far more than money. Ask before photographing people.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Clothing & Protection',
    icon: ShieldCheck,
    items: [
      { item: 'Headscarf or turban (cheche)', why: 'Essential sand protection. Available in Merzouga from 30 MAD' },
      { item: 'Warm jacket or fleece', why: 'Desert nights can drop to 5 degrees Celsius, even in spring' },
      { item: 'Long trousers', why: 'Protect against camel chafing and sun exposure' },
      { item: 'T-shirts and light layers', why: 'Daytime temperatures can be warm; layering is key' },
      { item: 'Warm socks and sleepwear', why: 'Desert camps get cold at night, even with blankets' },
      { item: 'Comfortable closed-toe shoes', why: 'For walking on sand and rocky terrain' },
      { item: 'Sandals or flip-flops', why: 'For camp and quick trips outside the tent' },
    ],
  },
  {
    category: 'Sun & Health',
    icon: Sun,
    items: [
      { item: 'Sunscreen SPF 50+', why: 'Desert sun is intense even in winter. Reapply every 2 hours' },
      { item: 'Sunglasses (UV protection)', why: 'The sand reflects sunlight and can damage eyes' },
      { item: 'Lip balm with SPF', why: 'Desert air is extremely dry and lips crack quickly' },
      { item: 'Moisturizer', why: 'Dry desert air dehydrates skin rapidly' },
      { item: 'Refillable water bottle', why: 'Stay hydrated. Aim for 3+ liters per day in the desert' },
      { item: 'Basic first aid kit', why: 'Plasters, antiseptic, any personal medications' },
    ],
  },
  {
    category: 'Gear & Essentials',
    icon: Backpack,
    items: [
      { item: 'Headlamp or flashlight', why: 'Desert camps have limited lighting. Essential for night walks' },
      { item: 'Portable power bank', why: 'Limited or no charging at budget/standard camps' },
      { item: 'Camera with extra batteries', why: 'Batteries drain fast in extreme temperatures' },
      { item: 'Small daypack', why: 'For items you need on the camel ride (leave main bag in Merzouga)' },
      { item: 'Ziplock bags', why: 'Protect phone and camera from sand' },
      { item: 'Wet wipes and toilet paper', why: 'Basic camps have limited supplies' },
      { item: 'Earplugs and eye mask', why: 'Camp can be noisy with wind or other guests' },
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME TO GO
   ═══════════════════════════════════════════════════════════════ */

const seasonGuide = [
  {
    season: 'Peak Season (Oct-Nov)',
    icon: Star,
    tempDay: '25-32 C',
    tempNight: '12-18 C',
    rating: 'Excellent',
    description:
      'The most popular time to visit. Summer heat has broken, days are warm and sunny, and nights are pleasantly cool. Dunes have the best golden color in the autumn light. Book well in advance as desert camps fill up quickly.',
    crowdLevel: 'High',
    priceImpact: 'Peak pricing. Tours cost 20-30% more than low season.',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Moon,
    tempDay: '18-22 C',
    tempNight: '0-8 C',
    rating: 'Good',
    description:
      'Days are mild and perfect for sightseeing and camel riding. Nights are genuinely cold, sometimes near freezing, so bring proper warm layers. Snow is possible on the Atlas passes. Fewer crowds and lower prices.',
    crowdLevel: 'Medium',
    priceImpact: 'Standard pricing. Good deals available on group tours.',
  },
  {
    season: 'Spring (Mar-Apr)',
    icon: Sun,
    tempDay: '22-30 C',
    tempNight: '10-16 C',
    rating: 'Excellent',
    description:
      'Many consider this the best time to visit. Temperatures are warm but not extreme, the Valley of Roses blooms in April, and the Atlas Mountains still have snow caps for dramatic photography. Nights are cool but not freezing.',
    crowdLevel: 'High',
    priceImpact: 'Peak pricing, especially around Easter.',
  },
  {
    season: 'Early Summer (May-Jun)',
    icon: Thermometer,
    tempDay: '35-42 C',
    tempNight: '20-25 C',
    rating: 'Fair',
    description:
      'Temperatures rise significantly but are manageable, especially in May. June can be very hot in the desert. The advantage is smaller crowds and lower prices. Early morning and evening activities are most enjoyable.',
    crowdLevel: 'Low',
    priceImpact: 'Discounted pricing. Negotiate hard for better rates.',
  },
  {
    season: 'High Summer (Jul-Sep)',
    icon: AlertTriangle,
    tempDay: '42-50+ C',
    tempNight: '25-32 C',
    rating: 'Not Recommended',
    description:
      'Extreme heat makes the desert dangerous and unpleasant. Daytime temperatures regularly exceed 45 degrees Celsius. Sand is too hot to walk on barefoot. Even nights offer little relief. Most responsible operators discourage summer tours.',
    crowdLevel: 'Very Low',
    priceImpact: 'Lowest prices, but the heat makes it not worthwhile.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SELF-DRIVE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const selfDriveRoute = [
  {
    segment: 'Marrakech to Ouarzazate',
    distance: '200 km',
    duration: '4 hours',
    road: 'N9 over Tizi n\'Tichka Pass',
    description:
      'Well-paved but very winding mountain road with many hairpin bends. The Tizi n\'Tichka Pass reaches 2,260 meters. Take it slow, use low gears on descents, and watch for trucks. In winter, check conditions as snow is possible.',
    fuelStop: 'Fill up in Marrakech. Fuel available in Ouarzazate.',
  },
  {
    segment: 'Ouarzazate to Tinghir',
    distance: '170 km',
    duration: '2.5 hours',
    road: 'N10 (Road of a Thousand Kasbahs)',
    description:
      'A beautiful and well-maintained road through the Dades Valley. Relatively flat and easy to drive. Passes through the Valley of Roses (bloom season: April-May) and numerous kasbahs. Watch for slow-moving trucks and donkeys.',
    fuelStop: 'Fuel stations in Boumalne Dades and Tinghir.',
  },
  {
    segment: 'Tinghir to Erfoud',
    distance: '120 km',
    duration: '2 hours',
    road: 'N10 continuing east',
    description:
      'Good paved road through increasingly arid landscape. The Ziz Valley section is spectacular with palm groves and the Ziz Gorge. A French Foreign Legion outpost is visible along the way. The landscape shifts from mountain to desert.',
    fuelStop: 'Fuel available in Tinejdad and Erfoud.',
  },
  {
    segment: 'Erfoud to Merzouga',
    distance: '50 km',
    duration: '45 minutes',
    road: 'N13 south to Rissani, then local road',
    description:
      'The final stretch. Good paved road to Rissani, then a decent road to Merzouga. The first sight of the Erg Chebbi dunes appearing on the horizon is unforgettable. Your accommodation can arrange parking and camel transfer.',
    fuelStop: 'Last fuel in Erfoud or Rissani. No fuel in Merzouga.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQs
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How long does it take to get from Marrakech to the Sahara Desert?',
    answer:
      'The drive from Marrakech to Merzouga (Erg Chebbi) takes approximately 9-10 hours one way via the N10 through Ouarzazate. The total distance is about 560 km. Most tours split this into a 2 or 3-day journey with stops at Ait Benhaddou, the gorges, and other attractions along the way. Nobody should try to do this as a day trip.',
  },
  {
    question: 'How much does a Marrakech to Sahara desert tour cost?',
    answer:
      'Budget group tours start from 1,500 MAD per person for a 3-day trip. Mid-range private tours cost from 3,500 MAD per person. Luxury private tours with premium desert camps start from 8,000 MAD per person. The price varies based on season (October-April is peak), group size, accommodation level, and what is included. Solo travelers often pay a supplement of 300-500 MAD.',
  },
  {
    question: 'What is the best time to visit the Sahara Desert from Marrakech?',
    answer:
      'The best months are October to April when daytime temperatures are comfortable (18-32 degrees Celsius). March and April offer the best balance of mild weather, clear skies, and the Valley of Roses in bloom. Avoid June to September when temperatures can exceed 50 degrees Celsius in the desert. Winter (December-February) is good for daytime but pack warm layers as nights can drop near freezing.',
  },
  {
    question: 'Can I drive myself from Marrakech to the Sahara?',
    answer:
      'Yes, the road from Marrakech to Merzouga is fully paved and in good condition. A standard rental car works fine for the main road. The journey is approximately 560 km via Ouarzazate and takes 9-10 hours. You will need a 4x4 only to reach some remote desert camps off the main road. Fuel stops are available every 100-150 km. A rental car costs from 350 MAD per day plus fuel (around 800 MAD total for the round trip).',
  },
  {
    question: 'What should I pack for a Sahara Desert trip?',
    answer:
      'Essential items include a headscarf or turban (cheche) for sand protection (available in Merzouga from 30 MAD), sunscreen SPF 50+, warm layers for cold desert nights (temperatures can drop to 5 degrees Celsius even in spring), comfortable walking shoes, a headlamp or flashlight, sunglasses, a refillable water bottle, and a portable power bank. Desert camps provide blankets but bring a warm jacket for stargazing.',
  },
  {
    question: 'What is the difference between Erg Chebbi and Erg Chigaga?',
    answer:
      'Erg Chebbi (near Merzouga) has the tallest dunes reaching 150 meters and is more accessible from Marrakech (560 km). Most tours go here. Erg Chigaga (near M\'Hamid) is more remote and less touristy but requires a 4x4 for the last section and takes longer to reach. Erg Chebbi is better for first-time visitors and those short on time. Erg Chigaga suits those seeking complete solitude and a more off-grid adventure.',
  },
  {
    question: 'Is the camel ride difficult or uncomfortable?',
    answer:
      'The camel ride to camp takes about 1 hour and most people find it enjoyable once they get used to the swaying motion. It is not physically demanding but can cause thigh chafing if you wear shorts. Wear long trousers, hold the saddle handle, and lean back when the camel goes downhill. If you have mobility issues, most camps can arrange a 4x4 transfer instead of a camel ride at no extra charge.',
  },
  {
    question: 'Is it safe to travel from Marrakech to the Sahara?',
    answer:
      'Yes, the Marrakech to Merzouga route is very safe and well-traveled by thousands of tourists every week. The roads are in good condition, the towns along the route are welcoming, and the desert camps have years of experience hosting international visitors. Standard travel precautions apply: keep valuables secure, stay hydrated, and follow your guide\'s instructions in the desert.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MarrakechToSaharaPage() {
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
            backgroundImage: 'url(/images/hero-sahara-dunes.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Marrakech to Sahara Desert</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Desert Tours &amp; Itineraries
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Marrakech to Sahara Desert:
            <br className="hidden md:block" /> Complete Tour Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 1,500 MAD group tours to luxury private camps under the stars. Everything you need
            to plan the trip of a lifetime across the Atlas Mountains to the golden dunes of Erg Chebbi.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Journey from Marrakech to the Sahara
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The trip from Marrakech to the Sahara Desert is not just a transfer from A to B. It is one
                of the greatest road journeys in the world. In 560 kilometers, you cross the snow-capped
                High Atlas Mountains, walk through a UNESCO World Heritage kasbah, drive along the Road
                of a Thousand Kasbahs, thread between 300-meter canyon walls, and arrive at the edge of
                the largest desert on earth.
              </p>
              <p>
                The destination is Erg Chebbi near Merzouga, where golden sand dunes rise up to 150 meters
                high. Here, you ride a camel into the desert, sleep under a sky with more stars than you
                have ever seen, and wake to a sunrise that paints the dunes in shades of gold, orange, and crimson.
              </p>
              <p>
                Whether you choose a budget group tour from 1,500 MAD or a luxury private experience from
                8,000 MAD, this guide covers everything: tour options, prices, route stops, desert camp
                types, what to pack, and when to go. Read on to plan the perfect Sahara adventure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Route className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">560 km</div>
              <div className="text-sm text-[var(--text-muted)]">Marrakech to Merzouga</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">9-10 hrs</div>
              <div className="text-sm text-[var(--text-muted)]">Driving time (one way)</div>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">2,260 m</div>
              <div className="text-sm text-[var(--text-muted)]">Highest point (Tizi n&apos;Tichka)</div>
            </div>
            <div className="text-center">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">150 m</div>
              <div className="text-sm text-[var(--text-muted)]">Tallest dunes (Erg Chebbi)</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tour Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tour Options: 2-Day, 3-Day &amp; 4-Day Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Choose your ideal itinerary based on your time, budget, and how deeply you want to experience the route.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person based on double occupancy. Seasonal pricing applies during peak months (October-April) and holiday periods.
          </p>

          <div className="space-y-12">
            {tourOptions.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.duration} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <TourIcon className="w-6 h-6" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold">{tour.duration}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{tour.nights}</p>
                    <p className="text-white/90 mt-1 font-medium">{tour.bestFor}</p>
                  </div>

                  <div className="p-6">
                    <p className="text-[var(--text-secondary)] mb-6">{tour.overview}</p>

                    {/* Itinerary */}
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      Day-by-Day Itinerary
                    </h4>
                    <div className="space-y-4 mb-8">
                      {tour.itinerary.map((day) => (
                        <div key={day.day} className="bg-[var(--surface-muted)] p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)] text-white text-xs font-bold">
                              {day.day.replace('Day ', '')}
                            </span>
                            <h5 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                              {day.title}
                            </h5>
                          </div>
                          <p className="text-sm text-[var(--text-secondary)] ml-10">{day.details}</p>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <h4 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      <DollarSign className="w-5 h-5 inline text-[var(--color-accent)] mr-1" />
                      Pricing
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Users className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Budget Group</div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">{tour.priceRange.budget}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Car className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Private</div>
                        <div className="text-sm font-bold text-[var(--color-gold)]">{tour.priceRange.midRange}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Star className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Luxury Private</div>
                        <div className="text-sm font-bold text-[var(--color-gold)]">{tour.priceRange.luxury}</div>
                      </div>
                    </div>

                    {/* Pros & Cons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Advantages</h4>
                        <div className="space-y-2">
                          {tour.pros.map((pro, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                              {pro}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Drawbacks</h4>
                        <div className="space-y-2">
                          {tour.cons.map((con, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              {con}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tour Pricing Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tour Prices &amp; What&apos;s Included
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Detailed breakdown of what you get at each price level for a standard 3-day Marrakech to Sahara tour.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies during peak tourist months (October-April) and holiday periods, when prices may increase by 20-30%.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {tourPricing.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.type} className="card-moroccan overflow-hidden">
                  <div className="p-6 text-center border-b border-[var(--border-default)]">
                    <TierIcon className="w-10 h-10 mx-auto mb-3" style={{ color: tier.color }} />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {tier.type}
                    </h3>
                    <div className="text-lg font-bold" style={{ color: tier.color }}>
                      {tier.priceRange}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">{tier.groupSize}</div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-[var(--text-secondary)] mb-4">{tier.description}</p>

                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                      <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                      Included
                    </h4>
                    <div className="space-y-2 mb-6">
                      {tier.includes.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3">
                      <AlertTriangle className="w-4 h-4 inline text-amber-500 mr-1" />
                      Not Included
                    </h4>
                    <div className="space-y-2">
                      {tier.doesNotInclude.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                          <AlertTriangle className="w-3 h-3 text-amber-500 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Route Stops ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Milestone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Route: Major Stops from Marrakech to Merzouga
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Every stop along the route is an attraction in itself. Here is what you will see on the way to the Sahara.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-10">
                {routeStops.map((stop, index) => {
                  const StopIcon = stop.icon;
                  return (
                    <div key={stop.name} className="relative flex gap-6">
                      {/* Stop number circle */}
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>

                      <div className="card-moroccan overflow-hidden flex-1">
                        <div className="relative h-48">
                          <img
                            src={stop.image}
                            alt={`${stop.name} on the Marrakech to Sahara route, Morocco`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                              <StopIcon className="w-5 h-5" />
                              {stop.name}
                            </h3>
                            <div className="flex items-center gap-4 text-xs text-white/70 mt-1">
                              <span>{stop.altitude} altitude</span>
                              <span>{stop.distanceFromMarrakech} from Marrakech</span>
                            </div>
                          </div>
                        </div>
                        <div className="p-6">
                          <p className="text-sm text-[var(--text-secondary)] mb-4">{stop.description}</p>

                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {stop.highlights.map((highlight, i) => (
                              <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                                <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                                {highlight}
                              </div>
                            ))}
                          </div>

                          <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                            <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                            <div>
                              <p className="text-xs text-[var(--text-muted)]">
                                <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {stop.tipText}
                              </p>
                              <p className="text-xs text-[var(--color-accent)] font-medium mt-1">
                                <Clock className="w-3 h-3 inline mr-1" />
                                Time needed: {stop.timeNeeded}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Desert Camp Types ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Tent className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Camp Types
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Your desert camp is where the magic happens. Choose the level of comfort that suits your style and budget.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person per night. Seasonal pricing applies during peak months.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {desertCampTypes.map((camp) => {
              const CampIcon = camp.icon;
              return (
                <div key={camp.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CampIcon className="w-8 h-8 text-[var(--color-accent)]" />
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {camp.type}
                      </h3>
                      <div className="text-sm font-bold text-[var(--color-accent)]">{camp.pricePerNight}</div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{camp.description}</p>
                  <div className="space-y-2 mb-4">
                    {camp.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Best for:</span> {camp.bestFor}
                    </p>
                    <p className="text-xs text-[var(--color-accent)] font-medium mt-1">{camp.rating}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Desert Experiences ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect: Desert Experiences
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The Sahara offers experiences you cannot find anywhere else on earth. Here is what awaits you among the dunes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {desertExperiences.map((exp) => {
              const ExpIcon = exp.icon;
              return (
                <div key={exp.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ExpIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {exp.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" />
                        {exp.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{exp.description}</p>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {exp.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Self-Drive Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Self-Drive Option: Marrakech to Merzouga by Car
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Prefer to drive yourself? The route is fully paved and a standard rental car handles it fine. Here is the road broken down into segments.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Car rental from 350 MAD per day. Fuel for the round trip approximately 800 MAD. Total self-drive cost from 2,500 MAD for 4 days including car, fuel, and accommodation.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {selfDriveRoute.map((segment, index) => (
                  <div key={segment.segment} className="relative flex gap-6">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>

                    <div className="card-moroccan p-6 flex-1">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                        {segment.segment}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Route className="w-3 h-3" />
                          {segment.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {segment.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Navigation className="w-3 h-3" />
                          {segment.road}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-3">{segment.description}</p>
                      <div className="flex items-center gap-2 text-xs text-[var(--color-accent)] font-medium">
                        <DollarSign className="w-3 h-3" />
                        Fuel: {segment.fuelStop}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Self-drive tips */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Self-Drive Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Fill your tank before the Tizi n&apos;Tichka Pass and before entering Merzouga
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  International driving license required alongside your home license
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Speed limits: 120 km/h highways, 60 km/h towns, 40 km/h villages
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Watch for radar traps, especially approaching towns
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Avoid driving at night on mountain roads: livestock, unlit vehicles, and pedestrians
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Download offline Google Maps for the entire route before departing
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring for your Sahara adventure. Pack light but pack smart: desert temperatures swing from scorching days to near-freezing nights.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packingList.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CatIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((entry, i) => (
                      <div key={i} className="border-b border-[var(--border-default)] pb-3 last:border-0 last:pb-0">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                          <div>
                            <span className="text-sm font-medium text-[var(--text-primary)]">{entry.item}</span>
                            <p className="text-xs text-[var(--text-muted)] mt-0.5">{entry.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Best Time to Go ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Time to Visit the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is critical for a Sahara trip. The difference between the best and worst months is the difference between paradise and dangerous heat.
          </p>

          <div className="max-w-5xl mx-auto space-y-6">
            {seasonGuide.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-2">
                        <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {season.season}
                        </h3>
                        <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded ${
                          season.rating === 'Excellent'
                            ? 'bg-green-100 text-green-700'
                            : season.rating === 'Good'
                            ? 'bg-blue-100 text-blue-700'
                            : season.rating === 'Fair'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-red-100 text-red-700'
                        }`}>
                          {season.rating}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                        <span className="flex items-center gap-1">
                          <Thermometer className="w-3 h-3" />
                          Day: {season.tempDay}
                        </span>
                        <span className="flex items-center gap-1">
                          <Moon className="w-3 h-3" />
                          Night: {season.tempNight}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          Crowds: {season.crowdLevel}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">{season.description}</p>
                      <p className="text-xs text-[var(--color-accent)] font-medium">
                        <DollarSign className="w-3 h-3 inline mr-1" />
                        {season.priceImpact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery / Atmosphere ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Sahara Desert Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-dunes.webp"
                alt="Golden sand dunes of Erg Chebbi in the Sahara Desert near Merzouga, Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Erg Chebbi Dunes, Merzouga</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-ait-benhaddou.webp"
                alt="Ait Benhaddou kasbah UNESCO World Heritage Site on the Marrakech to Sahara route"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou Kasbah</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-todra-gorge.webp"
                alt="Todra Gorge with towering 300-meter canyon walls on the route to Sahara Desert"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Todra Gorge Canyon</p>
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

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20">
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
                Your complete guide to exploring Marrakech: medina, souks, riads, and the best things to do.
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
                Trekking, day trips, and mountain experiences in the High Atlas from Marrakech.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/adventure" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Adventure Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                From desert safaris to mountain treks: the ultimate adventure travel guide for Morocco.
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

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
  Route,
  Calendar,
  Thermometer,
  Car,
  Navigation,
  Train,
  Bus,
  Plane,
  Map,
  Fuel,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Marrakech to Fes 2026 | Train, Bus, Car & Desert Route Guide',
  description:
    'Complete guide to getting from Marrakech to Fes. Compare direct trains (from 220 MAD, 7 hours), CTM buses (from 180 MAD), private cars, scenic desert routes, and flights. Route stops include Beni Mellal, Ifrane, and the Middle Atlas.',
  keywords: [
    'Marrakech to Fes',
    'how to get from Marrakech to Fes',
    'Marrakech to Fez train',
    'Marrakech to Fes bus',
    'Marrakech Fes drive',
    'Marrakech to Fes route',
    'train Morocco Marrakech Fes',
    'CTM bus Marrakech Fes',
    'Supratours Marrakech Fes',
    'Marrakech to Fes via desert',
    'Marrakech to Fes via Sahara',
    '3 day desert tour Marrakech to Fes',
    'Marrakech to Fes private transfer',
    'Marrakech to Fes flight',
    'Morocco train travel 2026',
    'Beni Mellal stop',
    'Ifrane Middle Atlas',
    'driving Marrakech to Fes',
    'Marrakech to Fes distance',
    'Marrakech to Fes time',
  ],
  openGraph: {
    title: 'Marrakech to Fes 2026 | Train, Bus, Car & Desert Route Guide',
    description:
      'Every way to travel from Marrakech to Fes compared: trains from 220 MAD, CTM buses from 180 MAD, private transfers, the scenic 3-day desert route, and flights. Practical tips and stops along the way.',
    url: `${BASE_URL}/marrakech-to-fes`,
    images: [
      {
        url: `${BASE_URL}/images/hero-fes-medina.webp`,
        width: 1200,
        height: 630,
        alt: 'View over the ancient medina of Fes from above, with traditional Moroccan architecture and green-tiled rooftops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrakech to Fes 2026 | Complete Travel Guide',
    description:
      'Trains from 220 MAD, buses from 180 MAD, driving routes, and the epic 3-day desert route. Every option for getting from Marrakech to Fes compared.',
    images: [`${BASE_URL}/images/hero-fes-medina.webp`],
  },
  alternates: { canonical: `${BASE_URL}/marrakech-to-fes` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/marrakech-to-fes`,
  name: 'Marrakech to Fes 2026 | Train, Bus, Car & Desert Route Guide',
  description:
    'Complete guide to every transport option from Marrakech to Fes including train, bus, private car, scenic desert route, and flights. Prices, schedules, and route stops.',
  url: `${BASE_URL}/marrakech-to-fes`,
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
  mainEntityOfPage: `${BASE_URL}/marrakech-to-fes`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Marrakech' },
    { '@type': 'City', name: 'Fes' },
    { '@type': 'Place', name: 'Middle Atlas Mountains' },
    { '@type': 'City', name: 'Ifrane' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Marrakech to Fes', item: `${BASE_URL}/marrakech-to-fes` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to get from Marrakech to Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By direct train it takes approximately 7 hours. By CTM or Supratours bus, the journey is around 8-9 hours. Driving takes about 5.5-6 hours via the A2 motorway (530 km). The scenic 3-day desert route via the Sahara covers over 1,000 km with overnight stops.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to get from Marrakech to Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest option is the CTM bus from 180 MAD or Supratours bus from 190 MAD. The direct ONCF train starts from 220 MAD for second class. Both depart from Marrakech multiple times daily. Booking online in advance sometimes offers discounts on train tickets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a direct train from Marrakech to Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, ONCF operates direct trains from Marrakech to Fes daily. The journey takes approximately 7 hours with stops at Casablanca, Rabat, Kenitra, and Meknes. Trains depart several times per day. First class costs from 330 MAD and second class from 220 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fly from Marrakech to Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Royal Air Maroc and sometimes budget carriers operate flights between Marrakech Menara Airport (RAK) and Fes-Saiss Airport (FEZ). The flight takes just 1 hour. However, flights are infrequent and often more expensive than ground transport. Prices start from around 600 MAD one-way but availability is limited.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best way to get from Marrakech to Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The train is the best option for most travelers: it is comfortable, reliable, affordable (from 220 MAD), and scenic. For those with more time, the 3-day desert route via the Sahara is an unforgettable journey that combines transport with sightseeing. Driving is fastest (5.5 hours) for those wanting flexibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I take the 3-day desert route from Marrakech to Fes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 3-day desert route via Merzouga is one of the best experiences in Morocco. Instead of a direct transfer, you cross the Atlas Mountains, visit Ait Benhaddou, sleep in a Sahara desert camp, and enter Fes via the scenic Middle Atlas. Tours start from 2,500 MAD per person and include accommodation, meals, and a camel trek.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  {
    mode: 'Direct Train (ONCF)',
    icon: Train,
    duration: '7 hours',
    priceRange: 'From 220 MAD (2nd class) / From 330 MAD (1st class)',
    frequency: '4-6 departures daily',
    bestFor: 'Most travelers: comfortable, reliable, and affordable',
    description:
      'The ONCF train is the most popular way to travel from Marrakech to Fes. Trains are air-conditioned, reasonably comfortable, and run on a predictable schedule. The route passes through Casablanca and Rabat, where you may need to change trains depending on the service. Some direct services run without a change.',
    pros: [
      'Comfortable reclining seats with legroom',
      'Air-conditioned carriages',
      'Onboard cafe car for food and drinks',
      'Arrives at Fes city center station',
      'Power outlets in first class',
      'Scenic route through Moroccan countryside',
    ],
    cons: [
      'Some services require a change at Casablanca or Rabat',
      'Trains can run late by 30-60 minutes',
      'No WiFi on most services',
      'Luggage space can fill up quickly',
    ],
    tip: 'Book first class for the extra legroom and guaranteed seat assignment. Trains departing early morning tend to be less crowded. Buy tickets at the station or online at oncf-voyages.ma.',
  },
  {
    mode: 'CTM / Supratours Bus',
    icon: Bus,
    duration: '8-9 hours',
    priceRange: 'From 180 MAD (CTM) / From 190 MAD (Supratours)',
    frequency: '3-5 departures daily',
    bestFor: 'Budget travelers and those wanting a direct service without changes',
    description:
      'CTM and Supratours operate comfortable long-distance buses between Marrakech and Fes. These are premium bus services with air conditioning, reclining seats, and a scheduled rest stop. CTM buses depart from the CTM station in Gueliz. Supratours buses depart from next to Marrakech train station.',
    pros: [
      'Cheapest option for the journey',
      'Direct service with no changes required',
      'Air-conditioned with reclining seats',
      'One or two rest stops with cafes',
      'Luggage stored safely underneath',
    ],
    cons: [
      'Longer journey than the train (8-9 hours)',
      'Less legroom than train first class',
      'Rest stops are brief (15-20 minutes)',
      'Can feel cramped on fully booked services',
      'Road delays possible in bad weather',
    ],
    tip: 'Book CTM tickets at ctm.ma or at the station. Supratours tickets can be bought at the Supratours office next to the train station. Arrive 30 minutes early to secure your luggage space.',
  },
  {
    mode: 'Private Car / Transfer',
    icon: Car,
    duration: '5.5-6 hours',
    priceRange: 'From 2,000 MAD (private transfer) / From 350 MAD per day (rental)',
    frequency: 'Anytime (on your schedule)',
    bestFor: 'Families, groups, or travelers wanting flexibility to stop along the way',
    description:
      'Driving from Marrakech to Fes via the A2 motorway is the fastest option at around 530 km. The route is entirely on modern toll roads and is straightforward to navigate. A private transfer with a driver is the most comfortable door-to-door option. Self-drive in a rental car gives you the freedom to stop at Beni Mellal, Khouribga, or detour to Ifrane.',
    pros: [
      'Fastest transport option (5.5 hours)',
      'Door-to-door convenience',
      'Stop wherever you want along the way',
      'Comfortable for families with luggage',
      'Modern toll motorway the entire route',
    ],
    cons: [
      'Most expensive option (transfer or rental plus fuel plus tolls)',
      'Toll fees total approximately 200 MAD',
      'Fuel costs around 400-500 MAD one way',
      'Rental car requires an international driving permit',
      'Parking in Fes medina is challenging',
    ],
    tip: 'If renting, book from Marrakech and drop off in Fes (one-way drop-off fee from 500 MAD). For private transfers, negotiate the price before departure and confirm it includes tolls and fuel.',
  },
  {
    mode: 'Shared Tour via Desert (3-Day)',
    icon: Compass,
    duration: '3 days / 2 nights',
    priceRange: 'From 2,500 MAD per person (group) / From 5,000 MAD (private)',
    frequency: 'Daily departures from Marrakech',
    bestFor: 'Travelers who want the journey to be the destination',
    description:
      'The most spectacular way to travel from Marrakech to Fes is the 3-day desert route via the Sahara. Instead of a direct transfer, you cross the High Atlas, visit Ait Benhaddou, stay overnight in the Dades or Todra Gorge, ride camels to a Sahara desert camp, and then travel north through the Middle Atlas to Fes. This is not just transport; it is one of Morocco\'s best experiences.',
    pros: [
      'Includes the Sahara desert experience with camel trek',
      'Visit Ait Benhaddou, gorges, and the Middle Atlas',
      'Accommodation and most meals included',
      'Arrive in Fes instead of returning to Marrakech',
      'Different route every day with diverse landscapes',
    ],
    cons: [
      'Takes 3 days instead of one',
      'More expensive than direct transport',
      'Long driving days (5-8 hours each)',
      'Group tours follow a fixed schedule',
      'Not ideal if you are short on time',
    ],
    tip: 'This is the best-value option if you planned to do a Sahara desert tour anyway. Instead of the standard return-to-Marrakech tour, book the Marrakech-to-Fes version and combine transport with sightseeing.',
  },
  {
    mode: 'Flight',
    icon: Plane,
    duration: '1 hour',
    priceRange: 'From 600 MAD one-way (when available)',
    frequency: 'Limited: 1-3 flights per week (seasonal)',
    bestFor: 'Business travelers or those extremely short on time',
    description:
      'Royal Air Maroc operates occasional flights between Marrakech Menara Airport (RAK) and Fes-Saiss Airport (FEZ). The flight takes just 1 hour but availability is limited. With check-in time and airport transfers, the total journey is closer to 4 hours, making it comparable to driving. Flights are often more expensive than ground transport.',
    pros: [
      'Fastest option at just 1 hour flight time',
      'Avoids road travel entirely',
      'Comfortable for those who dislike long drives',
    ],
    cons: [
      'Very limited flight schedule (not daily)',
      'Often more expensive than train or bus',
      'Airport transfers add time and cost on both ends',
      'Baggage fees may apply on budget carriers',
      'Flights sometimes cancelled due to low demand',
    ],
    tip: 'Check Royal Air Maroc (royalairmaroc.com) well in advance. If no direct flight exists for your dates, consider flying via Casablanca, though this adds significant time. Most travelers find the train more practical.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonData = [
  { mode: 'Train (ONCF)', time: '7 hours', price: 'From 220 MAD', comfort: 'Good', scenic: 'Moderate', flexibility: 'Fixed schedule' },
  { mode: 'CTM Bus', time: '8-9 hours', price: 'From 180 MAD', comfort: 'Fair', scenic: 'Moderate', flexibility: 'Fixed schedule' },
  { mode: 'Private Car', time: '5.5 hours', price: 'From 2,000 MAD', comfort: 'Excellent', scenic: 'Low (motorway)', flexibility: 'Total' },
  { mode: 'Self-Drive', time: '5.5 hours', price: 'From 850 MAD', comfort: 'Good', scenic: 'Customizable', flexibility: 'Total' },
  { mode: 'Desert Route', time: '3 days', price: 'From 2,500 MAD', comfort: 'Good', scenic: 'Exceptional', flexibility: 'Fixed itinerary' },
  { mode: 'Flight', time: '1 hour', price: 'From 600 MAD', comfort: 'Good', scenic: 'Aerial only', flexibility: 'Limited schedule' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT ROUTE ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const desertRouteItinerary = [
  {
    day: 'Day 1',
    title: 'Marrakech to Dades Gorge',
    distance: '330 km',
    duration: '6 hours driving',
    highlights: [
      'Cross Tizi n\'Tichka Pass (2,260 m) through the High Atlas',
      'Visit the UNESCO site of Ait Benhaddou kasbah',
      'Lunch in Ouarzazate, the "Gateway to the Desert"',
      'Drive the Road of a Thousand Kasbahs',
      'Overnight at a hotel in Dades Gorge or Boumalne Dades',
    ],
    description:
      'Depart Marrakech early morning. The road climbs through the High Atlas over the Tizi n\'Tichka Pass, Morocco\'s highest paved mountain pass. Stop at the stunning Ait Benhaddou before continuing through the Dades Valley to your overnight stay in the dramatic Dades Gorge.',
  },
  {
    day: 'Day 2',
    title: 'Dades Gorge to Sahara Desert (Merzouga)',
    distance: '300 km',
    duration: '5 hours driving',
    highlights: [
      'Morning walk in Dades Gorge canyon',
      'Visit Todra Gorge with 300-meter canyon walls',
      'Drive through the Ziz Valley palm groves',
      'Arrive at Merzouga and ride camels to the desert camp',
      'Sunset over Erg Chebbi dunes, dinner and stargazing at camp',
    ],
    description:
      'After exploring the gorges in the morning, continue east through increasingly arid landscapes to the edge of the Sahara. Arrive in Merzouga mid-afternoon and transfer to camels for the ride into the golden dunes of Erg Chebbi. Sleep under the stars in a desert camp.',
  },
  {
    day: 'Day 3',
    title: 'Sahara Desert to Fes via Middle Atlas',
    distance: '480 km',
    duration: '8 hours driving',
    highlights: [
      'Sunrise over the Sahara dunes',
      'Camel ride back and breakfast at camp',
      'Drive north through Errachidia and Midelt',
      'Pass through cedar forests and see Barbary macaques near Azrou',
      'Stop at Ifrane, Morocco\'s "Little Switzerland"',
      'Arrive in Fes by evening',
    ],
    description:
      'Wake before dawn for a magnificent desert sunrise. After breakfast, begin the long but beautiful drive north through the Middle Atlas. The landscape transforms from desert to lush cedar forests. Stop at Ifrane and Azrou before arriving in Fes by evening, completing one of Morocco\'s most epic journeys.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAIN DETAILS
   ═══════════════════════════════════════════════════════════════ */

const trainSchedule = [
  { departure: '06:45', arrival: '13:50', type: 'Direct / 1 change', class: '1st & 2nd' },
  { departure: '08:15', arrival: '15:25', type: 'Via Casablanca', class: '1st & 2nd' },
  { departure: '11:00', arrival: '18:10', type: 'Via Casablanca', class: '1st & 2nd' },
  { departure: '14:30', arrival: '21:35', type: 'Direct / 1 change', class: '1st & 2nd' },
  { departure: '16:00', arrival: '23:05', type: 'Via Rabat', class: '1st & 2nd' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DRIVING ROUTE SEGMENTS
   ═══════════════════════════════════════════════════════════════ */

const drivingSegments = [
  {
    segment: 'Marrakech to Beni Mellal',
    distance: '210 km',
    duration: '2.5 hours',
    road: 'A2 Motorway (toll)',
    description:
      'Modern toll motorway heading northeast from Marrakech. The road passes through flat agricultural plains with views of the Atlas Mountains to the south. Beni Mellal is a good first rest stop with cafes and fuel stations.',
    tollCost: 'From 70 MAD',
  },
  {
    segment: 'Beni Mellal to Khouribga',
    distance: '120 km',
    duration: '1.5 hours',
    road: 'A2 Motorway (toll)',
    description:
      'Continue on the motorway through the phosphate-rich Khouribga region. The landscape becomes more industrial before returning to green countryside. Straightforward driving with little traffic outside peak hours.',
    tollCost: 'From 50 MAD',
  },
  {
    segment: 'Khouribga to Fes',
    distance: '200 km',
    duration: '2 hours',
    road: 'A2 Motorway (toll)',
    description:
      'The final stretch of motorway. As you approach Fes, the landscape becomes greener and hilly. Exit the motorway and follow signs to Fes centre. The old medina is best reached by taxi from a parking area outside the walls, as the narrow streets do not allow cars.',
    tollCost: 'From 80 MAD',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: STOPS ALONG THE WAY
   ═══════════════════════════════════════════════════════════════ */

const routeStops = [
  {
    name: 'Beni Mellal',
    icon: MapPin,
    description:
      'A mid-sized Moroccan city at the foot of the Middle Atlas Mountains. Beni Mellal is known for its olive groves, the Ain Asserdoun spring with its cascading gardens, and the Kasbah of Ras el-Ain overlooking the city. It makes an excellent rest stop roughly halfway between Marrakech and Fes on the motorway route.',
    highlights: ['Ain Asserdoun gardens and spring', 'Kasbah Ras el-Ain viewpoint', 'Local olive oil market', 'Authentic Moroccan restaurants'],
    timeNeeded: '30 minutes (rest stop) to 2 hours (visit)',
  },
  {
    name: 'Ifrane',
    icon: Mountain,
    description:
      'Known as "Little Switzerland" or the "Switzerland of Morocco," Ifrane is a clean, green mountain town at 1,665 meters elevation in the Middle Atlas. Built during the French Protectorate, it has a distinctly Alpine appearance with red-roofed chalets, manicured gardens, and a famous stone lion sculpture. Ifrane is a stop on the 3-day desert route.',
    highlights: ['Alpine-style architecture unique in Morocco', 'Stone lion sculpture (landmark)', 'Ifrane National Park and cedar forests', 'Cool temperatures year-round'],
    timeNeeded: '30-60 minutes',
  },
  {
    name: 'Middle Atlas Cedar Forests (Azrou)',
    icon: Mountain,
    description:
      'The cedar forests around Azrou, south of Ifrane, are home to wild Barbary macaques, the only primates in Africa north of the Sahara. The forests are vast, peaceful, and a complete contrast to the desert landscape you may have just left behind. Many tours stop here for 30 minutes to see the monkeys and stretch your legs.',
    highlights: ['Wild Barbary macaque monkeys', 'Ancient Atlas cedar trees', 'Cool mountain air after desert heat', 'Photo opportunities with wildlife'],
    timeNeeded: '30-45 minutes',
  },
  {
    name: 'Meknes',
    icon: MapPin,
    description:
      'One of Morocco\'s four Imperial Cities, Meknes is often skipped by travelers heading to Fes but is worth a stop if you are driving. The massive Bab Mansour gate is one of the most impressive in Morocco. Meknes is less touristy than Fes and has excellent food. It is only 60 km from Fes on the motorway.',
    highlights: ['Bab Mansour gate (one of Africa\'s largest)', 'Heri es-Souani (royal granaries)', 'Less crowded than Fes', 'Excellent street food and restaurants'],
    timeNeeded: '1-3 hours (detour from motorway)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQs
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How long does it take to get from Marrakech to Fes?',
    answer:
      'By direct train it takes approximately 7 hours. By CTM or Supratours bus, the journey is around 8-9 hours. Driving takes about 5.5-6 hours via the A2 motorway (530 km). The scenic 3-day desert route via the Sahara covers over 1,000 km with overnight stops. Flights take 1 hour but are infrequent.',
  },
  {
    question: 'What is the cheapest way to get from Marrakech to Fes?',
    answer:
      'The cheapest option is the CTM bus from 180 MAD or Supratours bus from 190 MAD. The direct ONCF train starts from 220 MAD for second class. Both depart from Marrakech multiple times daily. Booking online in advance sometimes offers discounts on train tickets.',
  },
  {
    question: 'Is there a direct train from Marrakech to Fes?',
    answer:
      'ONCF operates trains from Marrakech to Fes daily. Some services are direct while others require a quick change at Casablanca Voyageurs or Rabat. The journey takes approximately 7 hours. First class costs from 330 MAD and second class from 220 MAD. Check oncf-voyages.ma for current schedules.',
  },
  {
    question: 'Can I fly from Marrakech to Fes?',
    answer:
      'Royal Air Maroc occasionally operates flights between Marrakech (RAK) and Fes (FEZ). The flight takes just 1 hour, but services are infrequent, sometimes only 1-3 times per week, and seasonal. Prices start from around 600 MAD one-way. With airport transfers, the total journey time is comparable to driving.',
  },
  {
    question: 'What is the best way to get from Marrakech to Fes?',
    answer:
      'The train is the best option for most travelers: it is comfortable, reliable, and affordable at from 220 MAD for second class. For those with more time, the 3-day desert route via the Sahara is an unforgettable experience that combines transport with sightseeing. Driving is the fastest option at 5.5 hours for those wanting maximum flexibility.',
  },
  {
    question: 'Should I take the 3-day desert route from Marrakech to Fes?',
    answer:
      'Absolutely, if you have the time and budget. The 3-day desert route via Merzouga is one of the best experiences in Morocco. You cross the Atlas Mountains, visit Ait Benhaddou, sleep in a Sahara desert camp, and enter Fes via the Middle Atlas. Tours start from 2,500 MAD per person including accommodation, meals, and a camel trek.',
  },
  {
    question: 'Is it safe to drive from Marrakech to Fes?',
    answer:
      'Yes, the A2 motorway connecting Marrakech and Fes is modern, well-maintained, and straightforward to drive. Speed limits are clearly posted and toll booths accept cash and cards. The main caution is to avoid driving at night and watch for speed cameras approaching towns. An international driving permit is required alongside your home license.',
  },
  {
    question: 'What should I see between Marrakech and Fes?',
    answer:
      'On the direct motorway route, Beni Mellal and Meknes are the main stops. On the scenic desert route, highlights include the Tizi n\'Tichka mountain pass, Ait Benhaddou kasbah, Dades and Todra Gorges, the Sahara dunes, Ifrane, and the Middle Atlas cedar forests with Barbary macaques. The desert route is far more scenic.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MarrakechToFesPage() {
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
            <span className="text-white">Marrakech to Fes</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Route className="w-4 h-4" />
            Transport &amp; Route Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Marrakech to Fes:
            <br className="hidden md:block" /> Every Way to Travel in 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Trains from 220 MAD, buses from 180 MAD, private transfers, the epic 3-day desert route,
            and flights. Compare every option for getting between Morocco&apos;s two greatest cities.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Getting from Marrakech to Fes
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Marrakech and Fes are Morocco&apos;s two most visited cities, separated by roughly 530 km of
                motorway or, if you choose the scenic route, over 1,000 km of the most spectacular landscapes
                in North Africa. Most travelers visit both cities, and how you travel between them can be as
                memorable as the cities themselves.
              </p>
              <p>
                The direct options are straightforward: a 7-hour train, an 8-hour bus, or a 5.5-hour drive
                on modern toll roads. But the route that travelers remember forever is the 3-day journey via
                the Sahara Desert, crossing the High Atlas, spending a night under the stars in the dunes, and
                arriving in Fes through the cedar forests of the Middle Atlas.
              </p>
              <p>
                This guide compares every option in detail, including prices, schedules, comfort levels, and
                practical tips, so you can choose the right way to travel for your trip.
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
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">530 km</div>
              <div className="text-sm text-[var(--text-muted)]">Direct distance</div>
            </div>
            <div className="text-center">
              <Train className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">7 hrs</div>
              <div className="text-sm text-[var(--text-muted)]">By train</div>
            </div>
            <div className="text-center">
              <Car className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">5.5 hrs</div>
              <div className="text-sm text-[var(--text-muted)]">By car</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">180 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Cheapest option</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transport Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            All Transport Options Compared
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Five ways to travel from Marrakech to Fes, from the cheapest bus to the unforgettable desert route.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing applies and schedules may change. Always confirm times before travel.
          </p>

          <div className="space-y-8">
            {transportOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.mode} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-5 text-white">
                    <div className="flex items-center gap-3 mb-1">
                      <OptionIcon className="w-6 h-6" />
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">{option.mode}</h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mt-2">
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {option.duration}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-3.5 h-3.5" /> {option.priceRange}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {option.frequency}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mb-5">
                      <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-sm font-medium text-[var(--text-primary)]">Best for: {option.bestFor}</p>
                    </div>

                    <p className="text-[var(--text-secondary)] mb-6">{option.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Advantages</h4>
                        <div className="space-y-2">
                          {option.pros.map((pro, i) => (
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
                          {option.cons.map((con, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                              <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                              {con}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <p className="text-xs text-[var(--text-muted)]">
                        <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {option.tip}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Map className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Comparison Table
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            All six transport options at a glance so you can quickly decide what works best for your trip.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <div className="card-moroccan overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Transport</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Time</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Price</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Comfort</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Scenery</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Flexibility</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, i) => (
                    <tr key={row.mode} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 font-medium text-[var(--text-primary)]">{row.mode}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.time}</td>
                      <td className="p-3 text-[var(--color-accent)] font-medium">{row.price}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.comfort}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.scenic}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{row.flexibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-xs text-[var(--text-muted)] max-w-lg mx-auto mt-4">
            <Info className="w-3 h-3 inline mr-1" />
            Self-drive price includes car rental (from 350 MAD/day), fuel (from 400 MAD), and tolls (from 200 MAD).
            Seasonal pricing may apply across all transport types.
          </p>
        </div>
      </section>

      {/* ── Scenic Desert Route ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The 3-Day Desert Route: Marrakech to Fes via the Sahara
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The most spectacular way to travel between Marrakech and Fes. Combine your transfer with the
            best sightseeing Morocco has to offer.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices start from 2,500 MAD per person for group tours. Private tours from 5,000 MAD per person. Seasonal pricing applies during peak months.
          </p>

          <div className="max-w-4xl mx-auto space-y-8">
            {desertRouteItinerary.map((day, index) => (
              <div key={day.day} className="card-moroccan overflow-hidden">
                <div className="bg-[var(--color-accent)] p-5 text-white">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white text-sm font-bold">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-display)] font-bold">{day.day}: {day.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-white/80 mt-1">
                        <span className="flex items-center gap-1"><Route className="w-3.5 h-3.5" /> {day.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {day.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[var(--text-secondary)] mb-5">{day.description}</p>
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">Highlights</h4>
                  <div className="space-y-2">
                    {day.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Train Details ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Train className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Train Schedule &amp; Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Approximate ONCF train departures from Marrakech to Fes. Schedules change seasonally, so always confirm at oncf-voyages.ma before travel.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="card-moroccan overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white">
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Departs Marrakech</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Arrives Fes</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Route</th>
                    <th className="p-3 text-left font-[family-name:var(--font-heading)]">Class</th>
                  </tr>
                </thead>
                <tbody>
                  {trainSchedule.map((train, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 font-medium text-[var(--text-primary)]">{train.departure}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{train.arrival}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{train.type}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{train.class}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Train Travel Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Buy tickets online at oncf-voyages.ma or at the station ticket window
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  First class has assigned seats, power outlets, and more legroom
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Arrive 20-30 minutes before departure to find your carriage
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  The cafe car sells coffee, sandwiches, and snacks
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Keep luggage close and visible; overhead racks fill up fast
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  If changing at Casablanca, follow signs to your connecting platform
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Route ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Driving Route: Marrakech to Fes by Car
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            The A2 motorway makes the drive straightforward. Here is the route broken down into segments with toll costs and driving tips.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Total tolls approximately 200 MAD. Fuel approximately 400-500 MAD one way. Car rental from 350 MAD per day plus one-way drop-off fee from 500 MAD.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {drivingSegments.map((segment, index) => (
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
                        <Fuel className="w-3 h-3" />
                        Toll: {segment.tollCost}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6 mt-10">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Driving Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Speed limit on motorway: 120 km/h, strictly enforced with radar
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Toll booths accept cash (MAD) and some accept contactless cards
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  International driving permit required alongside your home license
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Fuel stations are frequent along the A2 motorway
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Park outside Fes medina and take a taxi in; streets are too narrow for cars
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Download offline maps before departure; coverage gaps exist on some stretches
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stops Along the Way ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Stops Along the Way
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Whether you drive the motorway or take the desert route, these are the key places worth stopping at between Marrakech and Fes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {routeStops.map((stop) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <StopIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {stop.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-[var(--text-muted)]">
                        <Clock className="w-3 h-3" />
                        {stop.timeNeeded}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{stop.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {stop.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            The Journey Between Two Imperial Cities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-al-boraq-train.webp"
                alt="Moroccan ONCF train for travel between Marrakech and Fes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">ONCF Train, Morocco</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ifrane-cedar-forest.webp"
                alt="Cedar forest in the Middle Atlas near Ifrane on the route from Marrakech to Fes"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Middle Atlas Cedar Forest</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-fes.webp"
                alt="Panoramic view of Fes medina, the destination city from Marrakech"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Fes Medina</p>
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
            Related Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/morocco-train-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Train className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Train Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete ONCF train network guide: routes, prices, schedules, and tips for traveling Morocco by rail.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/marrakech-to-sahara" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sun className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Marrakech to Sahara Desert
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Full guide to desert tours from Marrakech: 2, 3, and 4-day itineraries, prices, and camp types.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/driving" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Driving in Morocco Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Rental cars, road rules, fuel costs, and everything you need to know about self-driving in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-itinerary-10-days" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                10-Day Morocco Itinerary
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The perfect 10-day Morocco route covering Marrakech, the Sahara, Fes, and more with day-by-day planning.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Navigation className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, taxis, and flights: the complete guide to getting around Morocco as a visitor.
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

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
  Sparkles,
  Droplets,
  Wind,
  Globe,
  Phone,
  Mail,
  BookOpen,
  Heart,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Desert Tour 2026 | Sahara Tours, Prices & Complete Guide',
  description:
    'The ultimate guide to Morocco desert tours. Compare 1-night, 2-night & 3-night Sahara tours plus luxury glamping. Erg Chebbi vs Erg Chigaga, camel trekking, sandboarding, prices from 1,200 MAD. Best time to go, packing list, and how to book.',
  keywords: [
    'Morocco desert tour',
    'Sahara desert tour Morocco',
    'Morocco Sahara tour',
    'desert tour Morocco prices',
    'Erg Chebbi tour',
    'Erg Chigaga tour',
    'Sahara camel trek',
    'luxury desert glamping Morocco',
    'Morocco desert camp',
    'sandboarding Sahara',
    'Merzouga desert tour',
    'M Hamid desert tour',
    'overnight Sahara tour',
    'Morocco desert tour cost',
    'best desert tour Morocco',
    'Sahara sunrise tour',
    'Morocco desert safari',
    'Sahara stargazing Morocco',
    'Morocco desert adventure',
    'budget desert tour Morocco',
    'private Sahara tour',
    'Morocco desert tour 2026',
  ],
  openGraph: {
    title: 'Morocco Desert Tour 2026 | Sahara Tours, Prices & Complete Guide',
    description:
      'Plan your perfect Morocco desert tour. Compare Erg Chebbi and Erg Chigaga, 1-night to 3-night itineraries, luxury glamping, camel trekking, and sandboarding. Prices from 1,200 MAD.',
    url: `${BASE_URL}/morocco-desert-tour`,
    images: [
      {
        url: `${BASE_URL}/images/hero-sahara-dunes.webp`,
        width: 1200,
        height: 630,
        alt: 'Golden sand dunes of the Sahara Desert in Morocco at sunset with camel caravan silhouette',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Desert Tour 2026 | Sahara Tours, Prices & Guide',
    description:
      'Everything you need for a Morocco desert tour: Erg Chebbi vs Erg Chigaga, prices from 1,200 MAD, luxury glamping, camel trekking, sandboarding, and expert tips.',
    images: [`${BASE_URL}/images/hero-sahara-dunes.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-desert-tour` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-desert-tour`,
  name: 'Morocco Desert Tour 2026 | Sahara Tours, Prices & Complete Guide',
  description:
    'The ultimate guide to Morocco desert tours. Compare tour durations, desert locations, camp types, activities, prices, and practical tips for exploring the Sahara.',
  url: `${BASE_URL}/morocco-desert-tour`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-desert-tour`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Sahara Desert' },
    { '@type': 'Place', name: 'Erg Chebbi' },
    { '@type': 'Place', name: 'Erg Chigaga' },
    { '@type': 'Place', name: 'Merzouga' },
    { '@type': 'Place', name: 'M\'Hamid El Ghizlane' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Desert Tour', item: `${BASE_URL}/morocco-desert-tour` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a Morocco desert tour cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget group desert tours start from 1,200 MAD per person for a 1-night experience. A classic 2-night tour costs from 1,500 MAD per person in a group or from 3,500 MAD private. Luxury glamping experiences start from 8,000 MAD per person. Prices vary by season, group size, and camp quality.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Erg Chebbi and Erg Chigaga?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Erg Chebbi near Merzouga has dunes up to 150 meters high, is more accessible, and has more tour infrastructure. Erg Chigaga near M\'Hamid is more remote, less touristy, and requires a 4x4 for the last 50 km. Erg Chebbi is better for first-time visitors; Erg Chigaga is ideal for adventurers seeking solitude.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a Morocco desert tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'October to April is the best period, with March-April and October-November offering the ideal balance of warm days (22-32 degrees Celsius) and cool nights. Avoid June to September when desert temperatures can exceed 50 degrees Celsius. Winter (December-February) is pleasant by day but cold at night, sometimes near freezing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a desert tour in Morocco be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A minimum of 2 days and 1 night is needed for a desert experience, though 3 days and 2 nights is the most popular option. For a deep immersion with a full day exploring the desert, 4 days and 3 nights is ideal. One-night tours involve long driving days but still include a camel trek and desert camp.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a camel trek included in Morocco desert tours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, virtually all Morocco desert tours include a camel trek to the desert camp. The ride typically takes 1 to 1.5 hours each way through the dunes. If you cannot ride a camel due to mobility issues, most camps offer a 4x4 transfer alternative at no extra charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a Sahara desert tour?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential items include a headscarf or cheche for sand protection, sunscreen SPF 50+, warm layers for cold nights (temperatures can drop to 5 degrees Celsius), comfortable closed-toe shoes, a headlamp, sunglasses, a refillable water bottle, and a portable power bank. Pack light and leave your main luggage at the hotel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I go sandboarding in the Sahara Desert in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, sandboarding is available at both Erg Chebbi and Erg Chigaga. Most desert camps provide boards free of charge. No experience is needed. The best time is early morning or late afternoon when the sand is cooler and firmer. The tall dunes of Erg Chebbi offer the longest runs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco desert tours safe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco desert tours are very safe. The routes are well-established and used by thousands of tourists every week. Reputable tour operators use experienced drivers and guides familiar with the terrain. Standard precautions apply: stay hydrated, follow your guide in the dunes, and protect yourself from the sun.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR DURATIONS
   ═══════════════════════════════════════════════════════════════ */

const tourDurations = [
  {
    title: '1-Night Desert Tour',
    subtitle: '2 days / 1 night in desert camp',
    icon: Clock,
    bestFor: 'Time-limited travelers who want a taste of the Sahara without committing 3+ days',
    overview:
      'The quickest way to experience the magic of the Sahara. You drive from Marrakech, Fes, or Ouarzazate, arrive at the dune edge by late afternoon, ride a camel to your camp for sunset, spend the night under the stars, and watch sunrise over the dunes before returning. The driving is long but the reward is real.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Departure City to Desert Camp',
        details:
          'Early departure (5:00-6:00 AM from Marrakech or 8:00 AM from Fes). Drive across the Atlas Mountains or Middle Atlas with scenic stops. Arrive at the desert edge (Merzouga or M\'Hamid) by mid-afternoon. Board camels for a 1-hour ride through the golden dunes to your desert camp. Watch the sunset paint the dunes crimson and gold. Traditional Berber dinner with music and drumming around the campfire. Stargazing in the clearest skies you have ever seen.',
      },
      {
        day: 'Day 2',
        title: 'Desert Camp to Departure City',
        details:
          'Wake before dawn and climb a dune for a spectacular sunrise. The silence and scale of the desert at dawn is unforgettable. Camel ride back to the village. Breakfast and shower. Begin the return drive with stops at major landmarks along the route. Arrive back at your starting city by evening (8:00-10:00 PM).',
      },
    ],
    priceRange: {
      budget: 'From 1,200 MAD per person (group)',
      midRange: 'From 2,500 MAD per person (private)',
      luxury: 'From 5,000 MAD per person (private luxury)',
    },
    pros: ['Minimum time commitment for a full desert experience', 'Still includes camel trek, camp, sunset, and sunrise', 'Most affordable option'],
    cons: ['Very long driving days (up to 10 hours each way from Marrakech)', 'Limited time for exploration', 'Tiring for children and elderly travelers'],
  },
  {
    title: '2-Night Desert Tour',
    subtitle: '3 days / 1 night in desert + 1 night en route',
    icon: Star,
    bestFor: 'The most popular choice: the perfect balance of desert time, sightseeing, and comfort',
    overview:
      'The classic Morocco desert tour. Three days allows comfortable driving with proper stops at the Atlas Mountains, Ait Benhaddou, Dades or Todra Gorge, and the Sahara. You spend one night at a scenic gorge hotel and one night in a desert camp, returning via a different route for maximum variety.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Departure to Dades or Todra Gorge',
        details:
          'Morning departure. Cross the High Atlas via the Tizi n\'Tichka Pass (2,260 m). Visit the UNESCO World Heritage kasbah of Ait Benhaddou. Lunch in Ouarzazate, the "Gateway to the Sahara." Continue along the Road of a Thousand Kasbahs through the Valley of Roses. Overnight in the dramatic Dades or Todra Gorge.',
      },
      {
        day: 'Day 2',
        title: 'Gorge to Sahara Desert Camp',
        details:
          'Morning walk in the gorge. Drive through the Ziz Valley palm groves and the increasingly arid desert landscape. Arrive at the dune edge mid-afternoon. Camel trek through Erg Chebbi or Erg Chigaga dunes to your camp (1-1.5 hours). Sunset from the top of a towering dune. Berber dinner, traditional music, and campfire. Stargazing with no light pollution.',
      },
      {
        day: 'Day 3',
        title: 'Desert Sunrise and Return',
        details:
          'Pre-dawn wake-up for the iconic Sahara sunrise. Camel ride back. Breakfast and shower. Optional sandboarding session. Return via a different route (through Errachidia, Middle Atlas cedar forests, and Ifrane on the Marrakech route, or through Rissani and Ziz Gorge on the Fes route). Arrive at your city by evening.',
      },
    ],
    priceRange: {
      budget: 'From 1,500 MAD per person (group)',
      midRange: 'From 3,500 MAD per person (private)',
      luxury: 'From 8,000 MAD per person (private luxury)',
    },
    pros: ['Best value for money and time', 'Covers major route highlights comfortably', 'Different outbound and return routes', 'Includes gorge sightseeing and desert camp'],
    cons: ['Only one night in the desert', 'Day 3 return drive is still long', 'Group tours may feel rushed at photo stops'],
  },
  {
    title: '3-Night Desert Tour',
    subtitle: '4 days / 2 nights in desert + 1 night en route',
    icon: Award,
    bestFor: 'Travelers who want a deeper, more immersive Sahara experience with time to truly explore',
    overview:
      'The extended tour adds a second night in the desert area, giving you a full day to explore the dunes, visit nomad families, take a 4x4 excursion to remote villages, try sandboarding and quad biking, or simply sit in the silence of the Sahara. No rushing, no long drives, and the most authentic desert experience available.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Departure to Gorge Region',
        details:
          'Morning departure with a relaxed pace. Cross the Atlas Mountains with extended photo stops at scenic viewpoints. Guided visit to Ait Benhaddou kasbah interior. Lunch in Ouarzazate with optional Atlas Studios visit. Continue through the Valley of Roses (seasonal bloom April-May) to Dades or Todra Gorge. Evening walk and dinner at a cliffside hotel.',
      },
      {
        day: 'Day 2',
        title: 'Gorge to Desert Camp',
        details:
          'Leisurely morning exploring the gorge: walk through the dramatic narrows of Todra (300 m canyon walls, 10 m gap) or drive the hairpin bends of upper Dades. Continue through the Ziz Valley with photo stops at the palm oases. Arrive at the desert mid-afternoon. Camel trek to your camp. First sunset over the dunes. Dinner and stargazing.',
      },
      {
        day: 'Day 3',
        title: 'Full Day in the Sahara',
        details:
          'Sunrise over the dunes. After breakfast, a full day of desert activities: 4x4 excursion to Khamlia village for Gnawa music, visit a nomadic Berber family for tea, explore a fossil quarry, try sandboarding on the tallest dunes, or simply relax at camp. Optional quad biking or buggy tour. Second sunset and second night at camp or upgrade to a luxury glamping tent.',
      },
      {
        day: 'Day 4',
        title: 'Final Sunrise and Return',
        details:
          'Second sunrise (often even more moving than the first). Camel ride back. Breakfast and departure. Return via scenic route through cedar forests of Azrou (optional Barbary macaque spotting), through Ifrane. Lunch stop in Beni Mellal or Midelt. Arrive at your destination city by evening.',
      },
    ],
    priceRange: {
      budget: 'From 2,200 MAD per person (group)',
      midRange: 'From 5,000 MAD per person (private)',
      luxury: 'From 12,000 MAD per person (private luxury)',
    },
    pros: ['Full day to explore the desert deeply', 'Visit villages, nomads, and hidden gems', 'Two sunrises and two sunsets over the dunes', 'The most relaxed, authentic experience'],
    cons: ['Requires more days off', 'Higher total cost', 'Day 4 return is still a long drive'],
  },
  {
    title: 'Luxury Glamping Experience',
    subtitle: '2-4 nights in a premium desert resort',
    icon: Sparkles,
    bestFor: 'Honeymoons, anniversaries, luxury travelers, and anyone seeking five-star comfort among the dunes',
    overview:
      'Luxury glamping in the Sahara is a world apart from standard camping. Private tented suites with king-size beds, en-suite bathrooms with hot showers, and sometimes even private plunge pools. Gourmet multi-course dinners under the stars, private camel treks, telescopes for stargazing, and spa treatments in the desert. Several camps in Erg Chebbi and Erg Chigaga rival the best hotels in Morocco.',
    itinerary: [
      {
        day: 'Day 1',
        title: 'Luxury Transfer to Desert',
        details:
          'Private luxury 4x4 (Land Cruiser or similar) picks you up from your riad. Scenic drive with gourmet picnic lunch en route. Arrival at the luxury camp with welcome champagne and traditional tea ceremony. Private sunset camel trek with your personal guide. Multi-course dinner under the stars with Moroccan wine.',
      },
      {
        day: 'Day 2',
        title: 'Desert Immersion',
        details:
          'Private sunrise viewing from the highest dune. Breakfast at leisure in your tent or the communal dining pavilion. Morning spa treatment: massage with argan oil in the open air. Afternoon 4x4 desert excursion to hidden oases and nomad camps. Return for sandboarding, or relax by the pool. Sunset cocktails. Private stargazing with a telescope and astronomer guide.',
      },
      {
        day: 'Day 3-4',
        title: 'Extended Stay or Return',
        details:
          'Additional nights allow for deeper exploration: quad biking, photography workshops, cooking classes, or simply reading by the pool surrounded by dunes. On your final morning, a leisurely departure with a scenic return drive and stops at key sights along the way.',
      },
    ],
    priceRange: {
      budget: 'From 5,000 MAD per person per night',
      midRange: 'From 8,000 MAD per person per night',
      luxury: 'From 15,000 MAD per person per night (ultra-luxury)',
    },
    pros: ['Five-star comfort in the wilderness', 'Private suites with en-suite bathrooms', 'Gourmet dining and spa treatments', 'Completely private and exclusive'],
    cons: ['Premium pricing', 'Limited availability: book weeks or months ahead', 'Some camps close in summer months'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ERG CHEBBI VS ERG CHIGAGA
   ═══════════════════════════════════════════════════════════════ */

const desertComparison = [
  {
    name: 'Erg Chebbi',
    location: 'Near Merzouga, southeastern Morocco',
    icon: Sun,
    image: '/images/hero-sahara-dunes.webp',
    duneHeight: 'Up to 150 meters',
    accessFrom: 'Marrakech (560 km, 9-10 hrs) or Fes (480 km, 8-9 hrs)',
    accessibility: 'Paved road all the way to Merzouga',
    tourInfrastructure: 'Extensive: dozens of camps from budget to ultra-luxury',
    atmosphere: 'More touristic but still breathtaking. The sheer size of the dunes is humbling.',
    bestFor: 'First-time visitors, families, luxury travelers, photographers',
    highlights: [
      'Tallest sand dunes in Morocco (150 m)',
      'Widest range of camp types and price levels',
      'Khamlia village with Gnawa music nearby',
      'Easy access from both Marrakech and Fes',
      'Quad biking, sandboarding, 4x4 excursions',
      'Fossil hunting near Erfoud',
    ],
    considerations: [
      'More tourists, especially at popular camps',
      'Can feel commercial during peak season',
      'Longer drive from Marrakech than Erg Chigaga',
    ],
  },
  {
    name: 'Erg Chigaga',
    location: 'Near M\'Hamid El Ghizlane, south-central Morocco',
    icon: Wind,
    image: '/images/photo-desert-landscape.webp',
    duneHeight: 'Up to 300 meters',
    accessFrom: 'Marrakech (560 km via Zagora, then 4x4)',
    accessibility: 'Last 50 km requires a 4x4 across open desert or dry lake bed',
    tourInfrastructure: 'Limited: fewer camps, more exclusive and remote',
    atmosphere: 'Wild, remote, and untouched. True off-grid desert solitude.',
    bestFor: 'Adventure seekers, off-grid enthusiasts, couples wanting complete privacy',
    highlights: [
      'Widest dune field in Morocco (covering 40 km)',
      'Far fewer tourists for a truly private experience',
      'Real off-road 4x4 adventure to reach the dunes',
      'Draa Valley route passes stunning kasbahs and oases',
      'Closer to Zagora and the Draa Valley',
      'True wilderness camping feeling',
    ],
    considerations: [
      'Requires 4x4 for the last 50 km (included in tours)',
      'Fewer camp options and amenities',
      'Not accessible in a standard rental car',
      'Slightly more expensive due to remoteness',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: DESERT ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const desertActivities = [
  {
    name: 'Camel Trekking',
    icon: Route,
    duration: '1-1.5 hours each way',
    price: 'Included in all tours',
    description:
      'The quintessential Sahara experience. Ride a dromedary camel through towering golden dunes to your desert camp. The swaying rhythm, the silence of the desert, and the changing light create memories that last a lifetime. All Morocco desert tours include a camel trek as the primary way to reach camp.',
    tips: [
      'Wear long trousers to prevent thigh chafing against the saddle',
      'Hold the saddle handle firmly; lean back when going downhill, forward uphill',
      'Bring a scarf or cheche to wrap your face against blowing sand',
      'The mounting and dismounting are the most unsteady moments: stay calm and grip tight',
      'If you have back or mobility issues, request a 4x4 transfer instead',
    ],
  },
  {
    name: 'Sandboarding',
    icon: Mountain,
    duration: '1-2 hours',
    price: 'Usually free at camp (boards provided)',
    description:
      'Strap on a board and slide down the steep faces of the Sahara dunes. Sandboarding works best on harder-packed slopes and is easier to learn than snowboarding. Most desert camps in both Erg Chebbi and Erg Chigaga have boards available. No experience is necessary and the dunes are a forgiving surface for beginners.',
    tips: [
      'Best done in early morning or late afternoon when sand is cooler and firmer',
      'Wax the board bottom with candle wax for faster, smoother runs',
      'Start on smaller dunes to get the feel before tackling the big ones',
      'The walk back up the dune is the real workout: take your time',
      'Keep your mouth closed on the descent to avoid eating sand',
    ],
  },
  {
    name: 'Sahara Sunrise & Sunset',
    icon: Sunrise,
    duration: '30-60 minutes each',
    price: 'Included in all tours',
    description:
      'The desert transforms at golden hour. Watching sunrise from the crest of a 150-meter dune, with nothing but sand and sky stretching to every horizon, is one of the most profound natural spectacles on earth. The dunes shift from gold to orange to crimson as the light changes. Your camp host will wake you in time.',
    tips: [
      'Climb the dune behind your camp for the best, most private viewpoint',
      'Sunrise is approximately 6:30 AM in winter, 5:30 AM in summer',
      'Pre-dawn temperatures can be near freezing: bring your warmest jacket',
      'Sunset is typically experienced during the camel ride to camp',
      'Bring extra camera batteries: cold drains them fast before dawn',
    ],
  },
  {
    name: 'Stargazing',
    icon: Moon,
    duration: '1-2 hours',
    price: 'Included (luxury camps provide telescopes)',
    description:
      'The Sahara is one of the darkest places on earth, free from light pollution. On a clear night, the Milky Way stretches overhead in vivid detail, shooting stars streak every few minutes, and the sheer number of visible stars is staggering. Luxury camps provide telescopes and sometimes an astronomer guide to explain constellations.',
    tips: [
      'New moon nights offer the best stargazing: check the moon phase before booking',
      'Lie on a blanket on the warm sand for the most immersive experience',
      'Bring warm layers: temperatures drop dramatically after sunset',
      'Download a stargazing app to identify constellations and planets',
      'The Milky Way is most visible from March to October in the Southern Sahara sky',
    ],
  },
  {
    name: 'Quad Biking & Buggies',
    icon: Car,
    duration: '1-2 hours',
    price: 'From 400 MAD per person',
    description:
      'For an adrenaline rush in the dunes, rent a quad bike or dune buggy. Rip across the flat desert floor and climb the dune ridges with experienced guides who know the terrain. Available near Merzouga and at some Erg Chigaga camps. A thrilling complement to the peaceful camel trek.',
    tips: [
      'Book through your camp or tour operator for insured, well-maintained vehicles',
      'Wear the provided goggles and face covering: sand gets everywhere at speed',
      'Best done in the cooler hours of morning or late afternoon',
      'No license required for most quad bike rentals',
      'Not recommended during sandstorms or extreme heat',
    ],
  },
  {
    name: 'Khamlia Village & Gnawa Music',
    icon: Users,
    duration: '1-1.5 hours',
    price: 'From 50 MAD donation per person',
    description:
      'Khamlia is a small village near Merzouga inhabited by descendants of sub-Saharan Africans who settled centuries ago. The village is renowned for Gnawa music, a spiritual trance music tradition with roots in West Africa. Local musicians perform for visitors in an informal, deeply moving session that connects you to an ancient cultural heritage.',
    tips: [
      'A donation of from 50-100 MAD per person is customary for the musicians',
      'Sessions are informal and you can stay as long as you like',
      'CDs and traditional instruments are available for purchase',
      'Only accessible on Erg Chebbi tours (not available at Erg Chigaga)',
      'Ask your guide to arrange a visit: it is a highlight many travelers miss',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PACKING LIST
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  {
    category: 'Clothing & Layering',
    icon: ShieldCheck,
    items: [
      { item: 'Headscarf or cheche turban', why: 'Essential sand and sun protection. Available in Merzouga from 30 MAD' },
      { item: 'Warm fleece or down jacket', why: 'Desert nights can drop to 0-5 degrees Celsius, even in spring and autumn' },
      { item: 'Long trousers (lightweight)', why: 'Sun protection and prevents chafing during the camel ride' },
      { item: 'Light breathable shirts', why: 'Daytime temperatures range from 22-40 degrees depending on season' },
      { item: 'Warm socks and sleepwear', why: 'Desert camps get very cold at night even with blankets provided' },
      { item: 'Comfortable closed-toe shoes', why: 'For walking on sand and rocky terrain during excursions' },
      { item: 'Sandals or flip-flops', why: 'For around camp and quick trips outside the tent at night' },
    ],
  },
  {
    category: 'Sun & Health Protection',
    icon: Sun,
    items: [
      { item: 'Sunscreen SPF 50+', why: 'Desert sun is extremely intense. Reapply every 2 hours, even on cloudy days' },
      { item: 'UV-protection sunglasses', why: 'Sand reflects sunlight and can damage eyes without proper protection' },
      { item: 'Lip balm with SPF', why: 'Desert air is bone-dry and lips crack within hours without protection' },
      { item: 'Moisturizer (face and hands)', why: 'Extremely low humidity dehydrates skin rapidly, causing cracking' },
      { item: 'Refillable water bottle (1L+)', why: 'Stay hydrated: aim for 3 or more liters per day in the desert' },
      { item: 'Basic first aid kit', why: 'Plasters, antiseptic, stomach medication, and any personal prescriptions' },
    ],
  },
  {
    category: 'Gear & Electronics',
    icon: Backpack,
    items: [
      { item: 'Headlamp or flashlight', why: 'Budget and standard camps have minimal lighting after dark' },
      { item: 'Portable power bank (10,000+ mAh)', why: 'Limited or no electricity at budget and standard camps' },
      { item: 'Camera with spare batteries', why: 'Batteries drain fast in extreme cold (pre-dawn) and extreme heat' },
      { item: 'Small daypack', why: 'For essentials on the camel ride. Leave main luggage at the hotel or in the vehicle' },
      { item: 'Ziplock bags (multiple sizes)', why: 'Protect phone, camera, and electronics from pervasive sand' },
      { item: 'Wet wipes and toilet paper', why: 'Basic camps have limited bathroom supplies' },
      { item: 'Earplugs and eye mask', why: 'Wind, other guests, and early-morning wake-up calls for sunrise' },
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
      'The most popular time for Morocco desert tours. Summer heat has broken, days are warm and clear, nights pleasantly cool. Dunes glow with the best golden color in the autumn light. The busiest period so book camps well in advance.',
    crowdLevel: 'High',
    priceImpact: 'Peak pricing. Tours cost 20-30% more than low season. Book 4+ weeks ahead.',
  },
  {
    season: 'Winter (Dec-Feb)',
    icon: Moon,
    tempDay: '18-22 C',
    tempNight: '0-8 C',
    rating: 'Good',
    description:
      'Excellent for daytime activities: mild, sunny, and comfortable for camel trekking and sightseeing. Nights are genuinely cold, sometimes near freezing, so warm layers are essential. Snow is possible on the Atlas passes en route. Fewer crowds and good availability.',
    crowdLevel: 'Medium',
    priceImpact: 'Standard pricing. Good deals available, especially for group tours.',
  },
  {
    season: 'Spring (Mar-Apr)',
    icon: Sun,
    tempDay: '22-30 C',
    tempNight: '10-16 C',
    rating: 'Excellent',
    description:
      'Many consider spring the absolute best time for a Morocco desert tour. Warm but not extreme, the Valley of Roses blooms in April, and the Atlas Mountains still have snow caps for dramatic contrast. Comfortable nights that are cool but not freezing.',
    crowdLevel: 'High',
    priceImpact: 'Peak pricing, especially around Easter. Book well in advance.',
  },
  {
    season: 'Early Summer (May-Jun)',
    icon: Thermometer,
    tempDay: '35-42 C',
    tempNight: '20-25 C',
    rating: 'Fair',
    description:
      'Temperatures rise significantly. May is still manageable but June is genuinely hot in the desert. The advantage is significantly smaller crowds and lower prices. Schedule activities for early morning and evening to avoid the midday heat.',
    crowdLevel: 'Low',
    priceImpact: 'Discounted pricing. Negotiate hard for better rates and camp upgrades.',
  },
  {
    season: 'High Summer (Jul-Sep)',
    icon: AlertTriangle,
    tempDay: '42-50+ C',
    tempNight: '25-32 C',
    rating: 'Not Recommended',
    description:
      'Dangerously hot. Daytime temperatures regularly exceed 45 degrees Celsius. Sand is too hot to walk on, even through shoes. Nights provide little relief. Most responsible tour operators actively discourage summer desert tours. If you must go, only the most expensive camps with air conditioning are tolerable.',
    crowdLevel: 'Very Low',
    priceImpact: 'Lowest prices of the year, but the heat makes the experience unpleasant and potentially dangerous.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOUR PRICE COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const tourPricing = [
  {
    type: 'Budget Group Tour',
    icon: Users,
    color: 'var(--color-accent)',
    priceRange: 'From 1,500 MAD per person (3-day)',
    groupSize: '12-20 travelers per minibus',
    description:
      'The most affordable way to experience the Sahara. Travel in a shared minibus with other travelers, stay in a standard desert camp with shared tents, and follow a fixed itinerary. Meals are basic but generous. Photo stops are shorter to maintain the schedule.',
    includes: [
      'Air-conditioned minibus transport',
      'Hotel/riad accommodation (shared rooms en route)',
      'Standard desert camp (shared tent with mattress)',
      'Camel ride to and from camp',
      'Breakfast and dinner daily',
      'English-speaking driver-guide',
    ],
    doesNotInclude: [
      'Lunches (from 60-100 MAD at roadside restaurants)',
      'Drinks and snacks',
      'Entrance fees (from 20-70 MAD each)',
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
      'A private tour with your own driver-guide, a comfortable 4x4 or minivan, and upgraded accommodation. You set the pace and can linger at any stop. Meals are included at better restaurants and the desert camp features private tents with real beds.',
    includes: [
      'Private 4x4 or minivan with experienced driver-guide',
      'Mid-range hotel/riad (private rooms en route)',
      'Upgraded desert camp (private tent with beds and linens)',
      'Camel ride to and from camp',
      'All meals included (breakfast, lunch, dinner)',
      'Licensed English-speaking guide',
      'Entrance fees to major attractions',
      'Bottled water in vehicle',
    ],
    doesNotInclude: [
      'Alcoholic beverages',
      'Optional activities (quad biking, sandboarding rental)',
      'Tips for driver, guide, and camp staff',
      'Travel insurance',
    ],
  },
  {
    type: 'Luxury Private Tour',
    icon: Sparkles,
    color: 'var(--color-gold)',
    priceRange: 'From 8,000 MAD per person (3-day)',
    groupSize: 'Private: 2-4 people in luxury 4x4',
    description:
      'The premium Morocco desert experience. Travel in a luxury Toyota Land Cruiser, stay at boutique riads and the finest desert camps with private tented suites, en-suite bathrooms, gourmet dining, and sometimes a private pool among the dunes.',
    includes: [
      'Luxury 4x4 (Land Cruiser or equivalent)',
      'Boutique riad/hotel accommodation (superior suites)',
      'Luxury desert camp (private suite with en-suite bathroom)',
      'Private camel trek with expert guide',
      'All gourmet meals and beverages (including wine)',
      'Licensed expert guide (English/French/Spanish)',
      'All entrance fees and activities',
      'Welcome tea ceremony at each stop',
      'Sandboarding equipment',
      'Private stargazing with telescope',
      'Private sunrise and sunset viewpoints',
    ],
    doesNotInclude: [
      'International flights',
      'Travel insurance',
      'Personal shopping and souvenirs',
      'Tips (recommended: from 200-400 MAD per day for guide)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: HOW TO BOOK
   ═══════════════════════════════════════════════════════════════ */

const bookingSteps = [
  {
    step: 1,
    title: 'Choose Your Desert',
    icon: MapPin,
    description:
      'Decide between Erg Chebbi (more accessible, tallest dunes, better infrastructure) and Erg Chigaga (remote, wilder, fewer tourists). First-time visitors should start with Erg Chebbi.',
  },
  {
    step: 2,
    title: 'Pick Your Duration',
    icon: Calendar,
    description:
      'Select from 1-night (2-day), 2-night (3-day), 3-night (4-day), or luxury glamping. The 3-day/2-night option offers the best balance of time and value.',
  },
  {
    step: 3,
    title: 'Set Your Budget',
    icon: DollarSign,
    description:
      'Budget group tours start from 1,200 MAD per person. Mid-range private from 3,500 MAD. Luxury from 8,000 MAD. Factor in tips, optional activities, and lunches for the true total cost.',
  },
  {
    step: 4,
    title: 'Select Your Departure City',
    icon: Navigation,
    description:
      'Most tours depart from Marrakech, but Fes, Ouarzazate, and even Casablanca are options. Marrakech and Fes offer the widest selection and best prices.',
  },
  {
    step: 5,
    title: 'Book in Advance',
    icon: Globe,
    description:
      'During peak season (October-April), book at least 2-4 weeks ahead. Luxury camps can sell out months in advance. Off-season, you can sometimes book 2-3 days ahead, but advance booking always gets better rates.',
  },
  {
    step: 6,
    title: 'Confirm the Details',
    icon: CheckCircle,
    description:
      'Before paying, confirm: exact pickup location, what meals are included, camp type and tent level, group size (for group tours), and cancellation policy. Reputable operators always provide written confirmation.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQs
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'How much does a Morocco desert tour cost?',
    answer:
      'Budget group desert tours start from 1,200 MAD per person for a 1-night/2-day experience, or from 1,500 MAD for the classic 3-day/2-night tour. Mid-range private tours cost from 3,500 MAD per person. Luxury private tours with premium glamping camps start from 8,000 MAD per person. Solo travelers may pay a supplement of 300-500 MAD. Prices are lower in May-September and higher in October-April.',
  },
  {
    question: 'What is the difference between Erg Chebbi and Erg Chigaga?',
    answer:
      'Erg Chebbi (near Merzouga) has dunes up to 150 meters high, is fully accessible by paved road, and has the widest range of camp options from budget to ultra-luxury. Erg Chigaga (near M\'Hamid) is more remote with dunes up to 300 meters and a 40 km dune field, but requires a 4x4 for the last section. Erg Chebbi is the better choice for first-time visitors and families. Erg Chigaga suits adventurers wanting true off-grid solitude.',
  },
  {
    question: 'What is the best time of year for a Morocco desert tour?',
    answer:
      'October to April is the ideal window. March-April and October-November offer the best conditions with warm days (22-32 degrees Celsius) and cool, comfortable nights. Winter (December-February) is great for daytime activities but nights can drop near freezing. Avoid June to September when desert temperatures can exceed 50 degrees Celsius.',
  },
  {
    question: 'How long should a desert tour in Morocco be?',
    answer:
      'A minimum of 2 days and 1 night is needed. The most popular and best-value option is the 3-day/2-night tour that includes gorge sightseeing and a desert camp. For a deeper experience with a full day in the desert, choose the 4-day/3-night option. Luxury glamping can range from 2 to 5 nights depending on your schedule and budget.',
  },
  {
    question: 'Is the camel ride difficult or uncomfortable?',
    answer:
      'The camel ride to camp takes about 1-1.5 hours. Most people enjoy it once they adjust to the swaying rhythm. Wear long trousers to prevent thigh chafing, hold the saddle handle, and lean back when the camel goes downhill. If you have back problems or mobility issues, every reputable camp offers a 4x4 transfer as an alternative at no extra charge.',
  },
  {
    question: 'What should I pack for a Sahara desert tour?',
    answer:
      'Essentials include a headscarf or cheche (available in Merzouga from 30 MAD), sunscreen SPF 50+, warm layers for cold nights (temperatures drop to 0-5 degrees), comfortable closed-toe shoes, a headlamp, sunglasses, a water bottle, and a portable power bank. Pack a small daypack for the camel ride and leave your main luggage in the vehicle or hotel.',
  },
  {
    question: 'Can I go sandboarding in the Sahara?',
    answer:
      'Yes, sandboarding is available at both Erg Chebbi and Erg Chigaga. Most desert camps provide boards at no extra charge. No experience is needed. The best conditions are early morning or late afternoon when the sand is cooler and firmer. Erg Chebbi offers the tallest continuous dune faces for the longest runs.',
  },
  {
    question: 'Are Morocco desert tours safe?',
    answer:
      'Very safe. The routes are well-established and traveled by thousands of tourists weekly. Reputable operators use experienced guides and drivers who know the terrain intimately. Standard precautions apply: stay hydrated, use sun protection, follow your guide in the dunes, and never wander away from camp alone at night. The biggest risk is sunburn, not safety.',
  },
  {
    question: 'Can I book a desert tour from Fes instead of Marrakech?',
    answer:
      'Absolutely. Fes to Merzouga (Erg Chebbi) is approximately 480 km and takes 8-9 hours. Many travelers do a one-way tour from Fes to Marrakech (or vice versa) via the desert, avoiding the need to backtrack. This is actually the most efficient way to combine both cities with a desert experience in a single trip.',
  },
  {
    question: 'Do I need to bring my own sleeping bag?',
    answer:
      'No. All desert camps provide bedding: budget camps offer mattresses and blankets, standard camps provide beds with linens, and luxury camps have full hotel-quality bedding. In winter, you may want to wear warm sleepwear as an extra layer. Some travelers bring a silk liner for hygiene, but it is not necessary at standard and luxury camps.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/marrakech-to-sahara',
    icon: Route,
    title: 'Marrakech to Sahara Route Guide',
    description: 'Detailed day-by-day route guide with every stop from Marrakech to Merzouga, including gorges, kasbahs, and the Atlas Mountains.',
  },
  {
    href: '/desert-adventures',
    icon: Compass,
    title: 'Desert Adventures in Morocco',
    description: 'Beyond the camel trek: quad biking, sandboarding, 4x4 safaris, and adrenaline activities in the Sahara.',
  },
  {
    href: '/sahara',
    icon: Sun,
    title: 'Complete Sahara Guide',
    description: 'Everything about the Moroccan Sahara: geography, culture, Berber traditions, and how to experience this vast desert.',
  },
  {
    href: '/morocco-road-trip-routes',
    icon: Car,
    title: 'Morocco Road Trip Routes',
    description: 'Self-drive itineraries across Morocco including the classic desert loop, coastal routes, and Atlas Mountain circuits.',
  },
  {
    href: '/camping',
    icon: Tent,
    title: 'Camping in Morocco Guide',
    description: 'From Sahara desert camps to Atlas Mountain bivouacs: your complete guide to camping across Morocco.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDesertTourPage() {
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
            <span className="text-white">Morocco Desert Tour</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Compass className="w-4 h-4" />
            Sahara Desert Tours &amp; Experiences
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Desert Tour:
            <br className="hidden md:block" /> The Complete Sahara Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From budget group tours at 1,200 MAD to luxury glamping under the stars. Compare Erg Chebbi
            and Erg Chigaga, choose your ideal duration, and plan the desert adventure of a lifetime.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why a Morocco Desert Tour Is Unforgettable
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A Morocco desert tour is not just a trip: it is a transformation. You leave the bustling medinas
                and colorful souks behind, cross the snow-capped Atlas Mountains, and descend into a world of
                silence, space, and golden sand that stretches beyond the horizon. The Sahara Desert, the largest
                hot desert on earth, covers most of southern Morocco, and reaching its towering dunes is one of
                the most iconic travel experiences in the world.
              </p>
              <p>
                Whether you ride a camel through the 150-meter dunes of Erg Chebbi near Merzouga, or venture
                into the remote wilderness of Erg Chigaga near M&apos;Hamid, the desert delivers something modern
                life rarely offers: complete stillness, a sky full of more stars than you have ever seen, and a
                sunrise that paints the dunes in shades of gold, orange, and crimson that no photograph can truly capture.
              </p>
              <p>
                This guide covers every aspect of planning a Morocco desert tour: tour types and durations, the
                two main desert destinations, activities from camel trekking to sandboarding, camp types from
                budget to ultra-luxury glamping, a complete packing list, the best time to go, a detailed price
                comparison, and answers to every common question. Whether your budget is 1,200 MAD or
                15,000 MAD, there is a perfect Sahara experience waiting for you.
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
              <Sun className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">150 m</div>
              <div className="text-sm text-[var(--text-muted)]">Tallest dunes (Erg Chebbi)</div>
            </div>
            <div className="text-center">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">300 m</div>
              <div className="text-sm text-[var(--text-muted)]">Tallest dunes (Erg Chigaga)</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">1,200 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Starting price per person</div>
            </div>
            <div className="text-center">
              <Star className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Oct-Apr</div>
              <div className="text-sm text-[var(--text-muted)]">Best months to visit</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tour Duration Options ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Types of Morocco Desert Tours
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Choose from a quick overnight adventure to a multi-night immersive experience. Each option delivers the core Sahara magic: camel trek, desert camp, sunset, sunrise, and stargazing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person based on double occupancy. Seasonal pricing applies during peak months (October-April).
          </p>

          <div className="space-y-12">
            {tourDurations.map((tour) => {
              const TourIcon = tour.icon;
              return (
                <div key={tour.title} className="card-moroccan overflow-hidden">
                  <div className="bg-[var(--color-accent)] p-6 text-white">
                    <div className="flex items-center gap-3 mb-2">
                      <TourIcon className="w-6 h-6" />
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold">{tour.title}</h3>
                    </div>
                    <p className="text-white/80 text-sm">{tour.subtitle}</p>
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
                        <div className="text-xs text-[var(--text-muted)] mb-1">Budget / Group</div>
                        <div className="text-sm font-bold text-[var(--color-accent)]">{tour.priceRange.budget}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Car className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
                        <div className="text-xs text-[var(--text-muted)] mb-1">Mid-Range Private</div>
                        <div className="text-sm font-bold text-[var(--color-gold)]">{tour.priceRange.midRange}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                        <Sparkles className="w-5 h-5 text-[var(--color-gold)] mx-auto mb-2" />
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

      {/* ── Erg Chebbi vs Erg Chigaga ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Erg Chebbi vs Erg Chigaga: Which Desert?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has two major sand seas (ergs) worth visiting. Each offers a distinct experience. Here is how they compare to help you choose the right one for your trip.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {desertComparison.map((desert) => {
              const DesertIcon = desert.icon;
              return (
                <div key={desert.name} className="card-moroccan overflow-hidden">
                  <div className="relative h-56">
                    <img
                      src={desert.image}
                      alt={`${desert.name} sand dunes in the Sahara Desert, Morocco`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                        <DesertIcon className="w-6 h-6" />
                        {desert.name}
                      </h3>
                      <p className="text-sm text-white/70 mt-1">{desert.location}</p>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Key stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)] mb-1">Dune Height</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{desert.duneHeight}</div>
                      </div>
                      <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                        <div className="text-xs text-[var(--text-muted)] mb-1">Accessibility</div>
                        <div className="text-sm font-bold text-[var(--text-primary)]">{desert.accessibility}</div>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Route className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Access from:</strong> {desert.accessFrom}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Tent className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Tour infrastructure:</strong> {desert.tourInfrastructure}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Heart className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Atmosphere:</strong> {desert.atmosphere}</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <Users className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        <span><strong>Best for:</strong> {desert.bestFor}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                      Highlights
                    </h4>
                    <div className="space-y-2 mb-6">
                      {desert.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>

                    {/* Considerations */}
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      <AlertTriangle className="w-4 h-4 inline text-amber-500 mr-1" />
                      Things to Consider
                    </h4>
                    <div className="space-y-2">
                      {desert.considerations.map((item, i) => (
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

          {/* Recommendation box */}
          <div className="max-w-3xl mx-auto mt-10">
            <div className="card-moroccan p-6">
              <div className="flex items-start gap-3">
                <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Our Recommendation
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    If this is your first Morocco desert tour, choose <strong>Erg Chebbi</strong>. The dunes are spectacular,
                    the infrastructure is well-established, and the range of camp options means there is something for every
                    budget. Save Erg Chigaga for a return trip when you want a wilder, more off-the-beaten-path adventure.
                    If you have already visited Erg Chebbi or crave complete solitude, Erg Chigaga will exceed your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Expect: Desert Activities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Sunrise className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Expect: Desert Activities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A Morocco desert tour is packed with once-in-a-lifetime experiences. Here is everything you can do among the dunes of the Sahara.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {desertActivities.map((activity) => {
              const ActivityIcon = activity.icon;
              return (
                <div key={activity.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ActivityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {activity.name}
                      </h3>
                      <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <DollarSign className="w-3 h-3" />
                          {activity.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{activity.description}</p>
                  <div className="space-y-2">
                    {activity.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                        <CheckCircle className="w-3 h-3 text-[var(--color-gold)] mt-0.5 shrink-0" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tour Price Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tour Prices &amp; What&apos;s Included
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            What you get at each price level for a standard 3-day/2-night Morocco desert tour.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Peak season (October-April) may add 20-30% to these rates.
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

      {/* ── Packing List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Desert Tour Packing List
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to bring for your Sahara adventure. The desert demands smart packing: scorching days, freezing nights, and sand that gets into everything.
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
            Best Time for a Morocco Desert Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Timing is everything in the Sahara. The difference between the best and worst months is the difference between paradise and dangerous heat.
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

      {/* ── How to Book ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Book Your Morocco Desert Tour
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Follow these six steps to plan and book the perfect Sahara desert experience, from choosing your destination to confirming your reservation.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {bookingSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>

                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)]" />
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Booking tips */}
          <div className="max-w-4xl mx-auto mt-12">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                <ShieldCheck className="w-5 h-5 inline text-[var(--color-accent)] mr-2" />
                Booking Tips to Avoid Scams
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Book with operators who have verifiable reviews on Google, TripAdvisor, or GetYourGuide
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Get written confirmation of exactly what is included: meals, camp type, and activities
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Never pay the full amount upfront to a street tout in the medina: use established agencies
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Ask for the specific name of your desert camp so you can check its reviews independently
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Confirm the group size for shared tours: 8-12 is comfortable, 20+ can feel overcrowded
                </div>
                <div className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  Check the cancellation policy: reputable operators offer free cancellation 48-72 hours ahead
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Sahara Desert Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-sahara-dunes.webp"
                alt="Golden sand dunes of Erg Chebbi in the Sahara Desert at sunset, Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Erg Chebbi Dunes at Sunset</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-ait-benhaddou.webp"
                alt="Ait Benhaddou kasbah UNESCO World Heritage Site on the route to the Sahara Desert"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou Kasbah</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/photo-todra-gorge.webp"
                alt="Todra Gorge canyon walls towering 300 meters on the Morocco desert tour route"
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

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Desert &amp; Adventure Guides
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
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-sahara-dunes.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready for Your Sahara Adventure?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The golden dunes of the Sahara are waiting. Whether you choose a budget group tour from 1,200 MAD
            or a luxury glamping experience under the stars, the desert will leave you transformed. Start
            planning your Morocco desert tour today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/marrakech-to-sahara"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[var(--color-accent)] font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <Route className="w-5 h-5" />
              View Route Guide
            </Link>
            <Link
              href="/desert-adventures"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Explore Desert Adventures
            </Link>
          </div>
          <div className="mt-8 flex items-center justify-center gap-6 text-white/60 text-sm">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              Contact us for custom tours
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              info@citytoursmorocco.com
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

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
  Sun,
  Compass,
  Calendar,
  Thermometer,
  Award,
  Droplets,
  Wind,
  Globe,
  Heart,
  BookOpen,
  Waves,
  Gauge,
  Mountain,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Surfing in Morocco 2026 | Best Surf Spots, Camps, Season Guide & Prices',
  description:
    'The ultimate Morocco surf guide for 2026. Best surf spots from Taghazout to Dakhla, surf camps, gear rental prices from 150 MAD, wetsuit guide, surf and yoga retreats, and season-by-season wave forecast. Plan your Morocco surf trip now.',
  keywords: [
    'surfing in Morocco',
    'Morocco surf guide',
    'best surf spots Morocco',
    'Taghazout surfing',
    'Anchor Point Morocco',
    'Imsouane surf',
    'Essaouira surfing',
    'Dakhla surf',
    'Morocco surf camps',
    'surf schools Morocco',
    'Morocco surf season',
    'Morocco surf trip',
    'surf and yoga Morocco',
    'beginner surfing Morocco',
    'Morocco wave forecast',
    'Sidi Kaouki surf',
    'Killer Point Morocco',
    'Morocco surf prices 2026',
  ],
  openGraph: {
    title: 'Surfing in Morocco 2026 | Best Surf Spots, Camps & Season Guide',
    description:
      'Plan your Morocco surf trip. Top surf spots from Taghazout to Dakhla, surf camp reviews, gear rental from 150 MAD, wetsuit guide, and season-by-season wave forecast.',
    url: `${BASE_URL}/morocco-surfing-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-surfing.webp`,
        width: 1200,
        height: 630,
        alt: 'Surfing in Morocco with Atlantic waves breaking at Taghazout surf spot near Agadir',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Surfing in Morocco 2026 | Best Surf Spots & Complete Guide',
    description:
      'Everything you need for surfing in Morocco: best spots, surf camps, gear rental, wetsuit guide, and prices from 150 MAD. Taghazout, Imsouane, Essaouira, Dakhla & more.',
    images: [`${BASE_URL}/images/hero-surfing.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-surfing-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-surfing-guide`,
  name: 'Surfing in Morocco 2026 | Best Surf Spots, Camps, Season Guide & Prices',
  description:
    'The ultimate guide to surfing in Morocco. Best surf spots, camps, schools, gear rental, wetsuit guide, and season forecast.',
  url: `${BASE_URL}/morocco-surfing-guide`,
  image: `${BASE_URL}/images/hero-surfing.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-surfing-guide`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'Place', name: 'Taghazout' },
    { '@type': 'Place', name: 'Imsouane' },
    { '@type': 'Place', name: 'Essaouira' },
    { '@type': 'Place', name: 'Sidi Kaouki' },
    { '@type': 'Place', name: 'Dakhla' },
    { '@type': 'Place', name: 'Agadir' },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Surfing in Morocco', item: `${BASE_URL}/morocco-surfing-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'When is the best time to surf in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'The best surf season runs from September to April. October-December offers clean, consistent swells. January-March brings the biggest waves (3-5 meters). Summer has smaller waves but warm water for beginners.' } },
    { '@type': 'Question', name: 'What are the best surf spots in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Top spots include Anchor Point in Taghazout (world-class right-hand point break), Killer Point (advanced reef break), Imsouane (longest right in Africa), Essaouira (beach breaks), Sidi Kaouki (beginner-friendly), Dakhla (remote, zero crowds), Mehdia (near Rabat), and Oualidia (sheltered lagoon).' } },
    { '@type': 'Question', name: 'How much does it cost to surf in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Board rental from 150-300 MAD/day, wetsuit from 50-100 MAD/day, 2-hour lesson from 300-500 MAD, week-long surf camp from 3,500-7,000 MAD. Premium surf-yoga retreats from 8,000-15,000 MAD/week. Prices vary by season.' } },
    { '@type': 'Question', name: 'Do I need a wetsuit to surf in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. November-March needs a 4/3mm full suit (water 15-17C). Spring/autumn: 3/2mm. Summer: shorty or board shorts (20-22C). Most surf camps provide wetsuits.' } },
    { '@type': 'Question', name: 'Is Morocco good for beginner surfers?', acceptedAnswer: { '@type': 'Answer', text: 'Excellent. Sidi Kaouki, Tamraght, Oualidia, and Taghazout beach breaks offer gentle waves. Dozens of schools provide certified instruction with all equipment included. Affordable prices and warm climate make it ideal for learning.' } },
    { '@type': 'Question', name: 'Can I combine surfing with yoga in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Taghazout and Tamraght are global hubs for surf-yoga retreats with daily surf and yoga sessions, accommodation, meals, and transfers. Prices from 5,000-15,000 MAD/week.' } },
    { '@type': 'Question', name: 'How do I get to the surf spots from Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Taghazout is 3-3.5 hours via Agadir. CTM/Supratours buses to Agadir from 120 MAD, taxi to Taghazout from 30 MAD. Essaouira is 2.5-3 hours by bus from 80 MAD. Many camps offer Agadir airport transfers.' } },
    { '@type': 'Question', name: 'What is the surf culture like in Morocco?', acceptedAnswer: { '@type': 'Answer', text: 'Vibrant and growing. Taghazout blends Moroccan hospitality with surf lifestyle: mint tea after sessions, tagine for dinner, sunsets from rooftop terraces. The local scene is thriving with talented surfers competing internationally.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: SURF SPOTS
   ═══════════════════════════════════════════════════════════════ */

const surfSpots = [
  {
    name: 'Anchor Point, Taghazout',
    image: '/images/hero-surf-taghazout.webp',
    level: 'Intermediate to Advanced',
    waveType: 'Right-hand point break',
    bestSwell: 'NW swells, 1.5-3m',
    bestSeason: 'October-March',
    description:
      'Morocco\'s most famous wave and one of the best right-hand point breaks in the world. When a solid northwest swell hits the reef, perfectly formed walls peel for up to 300 meters along the rocky coast. The takeoff is steep and powerful, with barrel opportunities on bigger days. Best on mid to low tide with a clean NW swell and light offshore east winds.',
    highlights: [
      'Up to 300-meter rides on a good swell',
      'Barrel sections on bigger winter swells',
      'Walking distance from Taghazout village',
    ],
  },
  {
    name: 'Killer Point, Taghazout',
    image: '/images/hero-surfing-taghazout-wave.webp',
    level: 'Advanced',
    waveType: 'Reef break',
    bestSwell: 'NW-W swells, 2-4m',
    bestSeason: 'November-February',
    description:
      'Named after occasional orca sightings, Killer Point is a heavy reef break that comes alive on bigger swells. The wave breaks over a shallow rock shelf, producing thick, hollow sections that demand experience. Access requires a cliff scramble. Not for the faint-hearted, but an unforgettable wave for advanced surfers seeking the most intense surfing in North Africa.',
    highlights: [
      'Thick, hollow waves for experienced surfers only',
      'Less crowded than Anchor Point despite world-class quality',
      'Best on solid 2-4 meter northwest to west swells',
    ],
  },
  {
    name: 'Imsouane',
    image: '/images/photo-imsouane-surf.webp',
    level: 'All Levels',
    waveType: 'Right-hand point break & beach break',
    bestSwell: 'NW-W swells, 1-2.5m',
    bestSeason: 'September-April',
    description:
      'A magical surf village 90 minutes north of Agadir, home to the longest right-hand wave in Africa. "The Bay" offers rides of up to 800 meters with gentle, slow-peeling walls perfect for longboarding. The Cathedral nearby offers more punch for shortboarders. The village is beautifully unspoiled with fresh seafood restaurants overlooking the point.',
    highlights: [
      'Up to 800-meter rides on the longest wave in Africa',
      'Perfect for longboarding with slow, mellow walls',
      'Cathedral reef break for advanced shortboarding',
    ],
  },
  {
    name: 'Essaouira',
    image: '/images/hero-essaouira.webp',
    level: 'Beginner to Intermediate',
    waveType: 'Beach break & wind swell',
    bestSwell: 'W-SW swells, 1-2m',
    bestSeason: 'October-March (surfing)',
    description:
      'Essaouira\'s long sandy beach offers consistent waves driven by powerful Atlantic trade winds. The beach breaks are forgiving and spread out, ideal for learning. Moulay Bouzerktoune, 25 km north, has a quality right-hand point break for more experienced surfers. The UNESCO-listed medina, seafood, and culture make Essaouira a unique surf destination.',
    highlights: [
      'Consistent beach breaks ideal for learning',
      'UNESCO-listed medina just steps from the surf',
      'Moulay Bouzerktoune point break for intermediate+ surfers',
    ],
  },
  {
    name: 'Sidi Kaouki',
    image: '/images/card-beach.webp',
    level: 'Beginner to Intermediate',
    waveType: 'Beach break',
    bestSwell: 'W-NW swells, 0.5-2m',
    bestSeason: 'Year-round',
    description:
      'A tranquil beach village 25 km south of Essaouira with uncrowded waves and a laid-back atmosphere. The wide sandy beach produces gentle waves ideal for beginners, while bigger swells deliver punchy peaks for more experienced riders. Several small surf camps line the beach road, and the sunsets are legendary.',
    highlights: [
      'Uncrowded beach break with beginner-friendly waves',
      'Affordable surf camps right on the beach',
      'Legendary Atlantic sunsets and peaceful vibes',
    ],
  },
  {
    name: 'Dakhla',
    image: '/images/photo-dakhla-kitesurf.webp',
    level: 'Intermediate to Advanced',
    waveType: 'Beach, reef & point breaks',
    bestSwell: 'NW-W swells, 1-3m',
    bestSeason: 'October-April',
    description:
      'A remote peninsula in Morocco\'s deep south with empty, world-class waves and zero crowds. The coastline is dotted with reef breaks, point breaks, and beach breaks that rarely see another surfer. The desert landscape meeting the ocean creates surreal scenery. Also world-class for kitesurfing on the flat lagoon.',
    highlights: [
      'Empty lineups with world-class waves and zero crowds',
      'Surreal desert-meets-ocean landscape',
      'Combine surfing with world-class kitesurfing',
    ],
  },
  {
    name: 'Mehdia Beach',
    image: '/images/hero-hassan-ii-ocean.webp',
    level: 'Beginner to Intermediate',
    waveType: 'Beach break',
    bestSwell: 'NW swells, 0.5-2m',
    bestSeason: 'October-March',
    description:
      'The closest quality surf spot to Rabat, near Kenitra. The wide sandy beach produces fun, punchy peaks that work on various swell directions. Popular with the Moroccan surf community, offering good waves, easy access from northern cities, and a taste of authentic local surf culture.',
    highlights: [
      'Closest quality surf to Rabat and Casablanca',
      'Authentic local Moroccan surf scene',
      'Easy access from northern cities by car or train',
    ],
  },
  {
    name: 'Oualidia',
    image: '/images/hero-essaouira-port.webp',
    level: 'Beginner',
    waveType: 'Sheltered lagoon & gentle beach break',
    bestSwell: 'Any swell, 0.5-1.5m',
    bestSeason: 'Year-round',
    description:
      'A small coastal town between Casablanca and Essaouira, famous for oysters and a beautiful sheltered lagoon. The lagoon offers flat, protected water ideal for absolute beginners and children. The outer beach produces gentle waves when there is swell. A wonderful alternative for families or first-timers.',
    highlights: [
      'Sheltered lagoon perfect for absolute beginners and families',
      'Famous for fresh oysters and seafood restaurants',
      'Peaceful, uncrowded alternative to busier surf towns',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SURF SEASON GUIDE
   ═══════════════════════════════════════════════════════════════ */

const surfSeasons = [
  {
    season: 'Early Autumn (Sep-Oct)',
    icon: Sun,
    waterTemp: '20-22 C',
    waveSize: '0.5-1.5m, building',
    wetsuit: '3/2mm full suit or shorty',
    rating: 'Excellent',
    description:
      'The surf season ramps up as autumn swells arrive. Water is still warm, crowds are thin, and conditions are clean. September starts with smaller waves ideal for beginners, while October brings consistent overhead swells. Arguably the best time for intermediate surfers.',
    bestFor: 'Intermediate surfers, beginners (Sep), surf camps',
  },
  {
    season: 'Peak Season (Nov-Jan)',
    icon: Waves,
    waterTemp: '16-18 C',
    waveSize: '1.5-4m, consistent',
    wetsuit: '4/3mm full suit essential',
    rating: 'Epic',
    description:
      'When Morocco earns its world-class reputation. Powerful North Atlantic storms send consistent NW swells at the coast. Anchor Point, Killer Point, and Taghazout reef breaks light up with overhead waves. January delivers the biggest swells. Crowds increase around Christmas and New Year.',
    bestFor: 'Advanced surfers, big wave seekers, experienced intermediates',
  },
  {
    season: 'Late Winter (Feb-Mar)',
    icon: Wind,
    waterTemp: '16-17 C',
    waveSize: '1-3m, powerful',
    wetsuit: '4/3mm full suit essential',
    rating: 'Excellent',
    description:
      'Powerful swells continue though consistency tails off vs Nov-Jan. February produces some of the cleanest days when high pressure settles between storms. March brings warming air temps. Crowds thin after peak holiday season. Quality waves without the peak-season buzz.',
    bestFor: 'All levels at appropriate breaks, longboarders, photographers',
  },
  {
    season: 'Spring (Apr-May)',
    icon: Droplets,
    waterTemp: '17-19 C',
    waveSize: '0.5-1.5m, inconsistent',
    wetsuit: '3/2mm full suit',
    rating: 'Good',
    description:
      'Warmer air and water, but swell consistency drops as the storm track shifts north. Still surfable days at beach breaks and Imsouane. Trade winds pick up creating choppy afternoons. Good shoulder season for surf-yoga retreats. Essaouira shines for kitesurfing.',
    bestFor: 'Beginners, longboarders, surf-yoga combo trips, kitesurfers',
  },
  {
    season: 'Summer (Jun-Aug)',
    icon: Sun,
    waterTemp: '20-22 C',
    waveSize: '0.3-1m, small',
    wetsuit: '2mm shorty or board shorts',
    rating: 'Flat (but warm)',
    description:
      'The flattest season for surfing. North Atlantic swells shut down and trade winds create choppy conditions. Warm water makes it enjoyable for beginners on gentle ripples. Imsouane can still pick up small swells. Prime season for kitesurfing in Essaouira and Dakhla.',
    bestFor: 'Beginners only, kitesurfers, beach holidays, warm water',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SURF CAMPS & SCHOOLS
   ═══════════════════════════════════════════════════════════════ */

const surfCamps = [
  {
    category: 'Beginner Surf Schools',
    icon: Users,
    priceRange: 'From 300 MAD per lesson',
    description:
      'Structured learn-to-surf programs with ISA/BSA certified instructors. 2-3 hour classes include all equipment. Groups of 4-8 students at gentle beach breaks in Taghazout, Tamraght, Sidi Kaouki, and Essaouira.',
    features: [
      'ISA/BSA certified instructors with all equipment included',
      'Small group sizes of 4-8 students on safe beach breaks',
      'Video analysis available for faster improvement',
    ],
  },
  {
    category: 'Intermediate Coaching',
    icon: Gauge,
    priceRange: 'From 500 MAD per session',
    description:
      'Targeted guidance at reef and point breaks for surfers who can catch green waves. Focus on wave selection, ocean reading, turning technique, and confidence in bigger surf. Video coaching is common.',
    features: [
      'Reef and point break sessions at quality waves',
      'Video analysis with frame-by-frame breakdown',
      'Small groups of 2-4 or private sessions available',
    ],
  },
  {
    category: 'Advanced Surf Guiding',
    icon: Award,
    priceRange: 'From 800 MAD per session',
    description:
      'Local knowledge connecting you with guides who know every reef, rock, and tide window. They take you to the best waves including secret spots not in any guidebook. Includes transport and water photography.',
    features: [
      'Access to secret spots and uncrowded waves',
      'Transport to remote reef and point breaks',
      'Water photography and video included with many guides',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GEAR RENTAL
   ═══════════════════════════════════════════════════════════════ */

const gearRental = [
  { item: 'Foam surfboard (beginner)', cost: 'From 150 MAD / day', notes: 'Ideal for first-timers; soft and forgiving' },
  { item: 'Shortboard (fiberglass)', cost: 'From 200 MAD / day', notes: 'Performance boards for experienced surfers' },
  { item: 'Longboard (9ft+)', cost: 'From 250 MAD / day', notes: 'Perfect for Imsouane and mellow point breaks' },
  { item: 'Wetsuit rental (full)', cost: 'From 50 MAD / day', notes: 'Essential November-March; 4/3mm recommended' },
  { item: 'Wetsuit rental (shorty)', cost: 'From 30 MAD / day', notes: 'Spring, early autumn, and warmer summer days' },
  { item: 'Surf lesson (2 hours, group)', cost: 'From 300 MAD', notes: 'Board, wetsuit, and instruction included' },
  { item: 'Surf lesson (2 hours, private)', cost: 'From 600 MAD', notes: 'One-on-one coaching for fastest improvement' },
  { item: 'Weekly surf camp package', cost: 'From 3,500 MAD', notes: 'Accommodation, meals, daily lessons, equipment' },
  { item: 'Board repair', cost: 'From 100 MAD', notes: 'Ding repair available at most surf shops in Taghazout' },
  { item: 'Surf photography session', cost: 'From 300 MAD', notes: 'Water and land photos of your session' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WETSUIT GUIDE
   ═══════════════════════════════════════════════════════════════ */

const wetsuitGuide = [
  { months: 'November-March', waterTemp: '15-17 C', recommendation: '4/3mm full suit', extras: 'Booties recommended, hood on cold mornings' },
  { months: 'April-May', waterTemp: '17-19 C', recommendation: '3/2mm full suit', extras: 'Comfortable without booties for most surfers' },
  { months: 'June-August', waterTemp: '20-22 C', recommendation: '2mm shorty or board shorts', extras: 'Rash guard for sun protection; trunks OK at southern spots' },
  { months: 'September-October', waterTemp: '20-22 C', recommendation: '3/2mm full suit or shorty', extras: 'Water still warm; shorty fine in September' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET VS LUXURY
   ═══════════════════════════════════════════════════════════════ */

const tripBudgets = [
  {
    tier: 'Budget Surf Trip',
    icon: Heart,
    pricePerWeek: 'From 2,000-4,000 MAD / week',
    description: 'Shared hostel dorm, local restaurant tagines, board rental from a beach shack, and independent surfing or group lessons.',
    includes: [
      'Hostel dorm from 100-200 MAD / night',
      'Local meals from 30-60 MAD',
      'Board rental from 150 MAD / day',
    ],
  },
  {
    tier: 'Mid-Range Surf Camp',
    icon: Users,
    pricePerWeek: 'From 4,000-7,000 MAD / week',
    description: 'Dedicated surf camp with private or shared room, daily breakfast, guided surf sessions, and all equipment included.',
    includes: [
      'Private or shared room with breakfast',
      'Daily guided surf sessions with coach',
      'All equipment and transport to breaks',
    ],
  },
  {
    tier: 'Luxury Surf & Yoga Retreat',
    icon: Award,
    pricePerWeek: 'From 8,000-15,000 MAD / week',
    description: 'Premium ocean-view accommodation, gourmet meals, private surf coaching, daily yoga, spa treatments, and cultural excursions.',
    includes: [
      'Private ocean-view suite with gourmet meals',
      'Private surf coaching and daily yoga',
      'Spa, hammam, and cultural excursions',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: GETTING TO SURF SPOTS
   ═══════════════════════════════════════════════════════════════ */

const transportInfo = [
  {
    from: 'Marrakech to Taghazout',
    duration: '3-3.5 hours',
    options: 'CTM/Supratours bus to Agadir (from 120 MAD), then grand taxi to Taghazout (from 30 MAD). Direct transfer from 500 MAD.',
  },
  {
    from: 'Marrakech to Essaouira',
    duration: '2.5-3 hours',
    options: 'CTM/Supratours bus (from 80 MAD). Direct transfer from 400 MAD. Frequent daily departures.',
  },
  {
    from: 'Agadir Airport to Taghazout',
    duration: '30-45 minutes',
    options: 'Grand taxi (from 200 MAD), airport transfer (from 250 MAD). Many surf camps offer free airport pickup.',
  },
  {
    from: 'Agadir to Imsouane',
    duration: '1.5 hours',
    options: 'Grand taxi or private transfer (from 300 MAD). No direct bus; most surfers share taxis.',
  },
  {
    from: 'Casablanca to Mehdia',
    duration: '2.5 hours',
    options: 'Train to Kenitra (from 80 MAD), then grand taxi to Mehdia beach (from 20 MAD).',
  },
  {
    from: 'Casablanca to Dakhla',
    duration: '1.5 hour flight',
    options: 'Royal Air Maroc or Air Arabia flights from Casablanca (from 800 MAD one way). Overland is 20+ hours.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'When is the best time to surf in Morocco?',
    answer: 'The best surf season runs from September to April. October through December offers clean, consistent swells for all levels. January to March brings the biggest waves (3-5 meters). Summer has smaller waves but warmer water, suitable for beginners. Seasonal pricing applies.',
  },
  {
    question: 'What are the best surf spots in Morocco?',
    answer: 'Top spots include Anchor Point (world-class right-hand point break), Killer Point (advanced reef break), Imsouane (longest right in Africa), Essaouira (wind-driven beach breaks), Sidi Kaouki (uncrowded beginners), Dakhla (remote, zero crowds), Mehdia (near Rabat), and Oualidia (sheltered lagoon).',
  },
  {
    question: 'How much does it cost to surf in Morocco?',
    answer: 'Board rental from 150-300 MAD/day, wetsuit rental from 50-100 MAD/day, 2-hour group lesson from 300 MAD, week-long surf camp from 3,500 MAD (including accommodation, meals, lessons). Premium surf-yoga retreats from 8,000-15,000 MAD/week. Prices vary by season.',
  },
  {
    question: 'Do I need a wetsuit to surf in Morocco?',
    answer: 'Yes, for most of the year. November-March: 4/3mm full suit (water 15-17 C). Spring/autumn: 3/2mm. Summer: shorty or board shorts. Most surf camps and shops provide wetsuits.',
  },
  {
    question: 'Is Morocco good for beginner surfers?',
    answer: 'Excellent. Sidi Kaouki, Tamraght, Oualidia lagoon, and Taghazout beach breaks offer gentle waves ideal for learning. Dozens of schools provide certified instruction with all equipment. Affordable prices and warm climate make it one of the best places in the world to learn.',
  },
  {
    question: 'Can I combine surfing with yoga in Morocco?',
    answer: 'Absolutely. Taghazout and Tamraght are global hubs for surf-yoga retreats. Daily surf in the morning and yoga in the afternoon. Week-long packages from 5,000 to 15,000 MAD including accommodation, meals, coaching, and yoga instruction.',
  },
  {
    question: 'How do I get to the surf spots from Marrakech?',
    answer: 'Taghazout is 3-3.5 hours via Agadir. CTM/Supratours buses to Agadir from 120 MAD, then taxi from 30 MAD. Essaouira is 2.5-3 hours by bus from 80 MAD. Many surf camps offer Agadir airport transfers.',
  },
  {
    question: 'What is the surf culture like in Morocco?',
    answer: 'Vibrant and growing. Taghazout blends Moroccan hospitality with surf lifestyle: mint tea after sessions, tagine for dinner, sunsets from rooftop terraces. The local scene is thriving with talented young surfers competing internationally.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/surfing',
    icon: Waves,
    title: 'Morocco Surfing Overview',
    description: 'Quick overview of surfing opportunities across Morocco with links to specific surf spots and coastal towns.',
  },
  {
    href: '/taghazout-surf',
    icon: Waves,
    title: 'Taghazout Surf Guide',
    description: 'Deep dive into Taghazout: every break, best seasons, surf camps, accommodation, and local tips.',
  },
  {
    href: '/water-sports',
    icon: Droplets,
    title: 'Morocco Water Sports',
    description: 'Kitesurfing, kayaking, stand-up paddleboarding, and more water activities along Morocco\'s Atlantic coast.',
  },
  {
    href: '/essaouira',
    icon: Wind,
    title: 'Essaouira City Guide',
    description: 'UNESCO medina, seafood, wind sports, and culture in Morocco\'s "Wind City of Africa."',
  },
  {
    href: '/agadir',
    icon: Sun,
    title: 'Agadir Travel Guide',
    description: 'Gateway to Taghazout and Imsouane. Beaches, resorts, day trips, and the best of southern Morocco.',
  },
  {
    href: '/morocco-beach-towns',
    icon: Globe,
    title: 'Morocco Beach Towns',
    description: 'From Asilah to Dakhla: discover Morocco\'s most beautiful coastal towns for surf, seafood, and sunsets.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSurfingGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-surfing.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Surfing in Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Waves className="w-4 h-4" />
            Africa&apos;s Top Surf Destination
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Surfing in Morocco:
            <br className="hidden md:block" /> Your 2026 Surf Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            World-class waves from Taghazout to Dakhla, surf camps from 3,500 MAD per week, gear rental from 150 MAD,
            season-by-season wave forecast, and everything you need to plan the ultimate Morocco surf trip.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Morocco Is Africa&apos;s Premier Surf Destination
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco sits at the crossroads of the Atlantic Ocean and the African continent, catching
                every swell that North Atlantic storms send southward. The result is a coastline blessed
                with an extraordinary diversity of waves: powerful point breaks peeling for hundreds of
                meters, hollow reef breaks that barrel on big swells, and gentle beach breaks that
                welcome first-time surfers. From Taghazout to Dakhla, Morocco offers something for
                every surfer at a fraction of European or Australian prices.
              </p>
              <p>
                The surf culture is unlike anywhere else. You will paddle out in lineups overlooked by
                ancient fishing villages, refuel with tagine and mint tea, and watch sunsets from rooftop
                terraces above the Atlantic. Whether you are a complete beginner or chasing the barrels
                of Anchor Point, this guide covers everything: the best surf spots, season guide, camps,
                gear rental prices, wetsuit recommendations, and transport logistics.
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
              <Waves className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">8+</div>
              <div className="text-sm text-[var(--text-muted)]">World-class surf spots</div>
            </div>
            <div className="text-center">
              <Calendar className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">Sep-Apr</div>
              <div className="text-sm text-[var(--text-muted)]">Peak surf season</div>
            </div>
            <div className="text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">150 MAD</div>
              <div className="text-sm text-[var(--text-muted)]">Board rental / day</div>
            </div>
            <div className="text-center">
              <Thermometer className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">15-22 C</div>
              <div className="text-sm text-[var(--text-muted)]">Water temperature</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Surf Spots ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Surf Spots in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            From the legendary point breaks of Taghazout to the empty waves of Dakhla, these are
            the surf spots that make Morocco a global surfing destination.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Conditions vary by season and swell direction. Check forecasts before each session.
          </p>

          <div className="space-y-12">
            {surfSpots.map((spot) => (
              <div key={spot.name} className="card-moroccan overflow-hidden">
                <div className="relative h-56 md:h-64">
                  <img
                    src={spot.image}
                    alt={`${spot.name} surf spot in Morocco - ${spot.waveType}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-white flex items-center gap-2">
                      <Waves className="w-6 h-6" />
                      {spot.name}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">{spot.waveType}</p>
                  </div>
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold">
                    {spot.level}
                  </div>
                </div>

                <div className="p-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <Waves className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-xs text-[var(--text-muted)]">Best Swell</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{spot.bestSwell}</div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center">
                      <Calendar className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-xs text-[var(--text-muted)]">Best Season</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{spot.bestSeason}</div>
                    </div>
                    <div className="bg-[var(--surface-muted)] p-3 rounded-lg text-center col-span-2 md:col-span-1">
                      <Gauge className="w-4 h-4 text-[var(--color-accent)] mx-auto mb-1" />
                      <div className="text-xs text-[var(--text-muted)]">Level</div>
                      <div className="text-sm font-bold text-[var(--text-primary)]">{spot.level}</div>
                    </div>
                  </div>

                  <p className="text-[var(--text-secondary)] mb-6">{spot.description}</p>

                  <div>
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                      <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                      Highlights
                    </h4>
                    <div className="space-y-2">
                      {spot.highlights.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surf Season Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Surf Season Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding the seasons is key to scoring the best waves in Morocco. Here is what to expect month by month.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {surfSeasons.map((season) => {
              const SeasonIcon = season.icon;
              return (
                <div key={season.season} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <SeasonIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {season.season}
                    </h3>
                    <span className={`ml-auto px-2 py-0.5 rounded-full text-xs font-bold ${
                      season.rating === 'Epic' || season.rating === 'Excellent' ? 'bg-green-100 text-green-700' :
                      season.rating.includes('Good') ? 'bg-amber-100 text-amber-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {season.rating}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-[var(--text-muted)] mb-3">
                    <span><Thermometer className="w-3.5 h-3.5 inline mr-1" />Water: {season.waterTemp}</span>
                    <span><Waves className="w-3.5 h-3.5 inline mr-1" />Waves: {season.waveSize}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{season.description}</p>
                  <div className="pt-3 border-t border-[var(--border-primary)]">
                    <div className="text-xs text-[var(--text-muted)]">
                      <strong className="text-[var(--color-accent)]">Wetsuit:</strong> {season.wetsuit}
                    </div>
                    <div className="text-xs text-[var(--text-muted)] mt-1">
                      <strong className="text-[var(--color-accent)]">Best for:</strong> {season.bestFor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Surf Camps & Schools ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Camps &amp; Schools
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Whether you are catching your first wave or chasing barrels, Morocco has the right coaching for you.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices per person. Seasonal pricing applies and costs may vary by operator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {surfCamps.map((camp) => {
              const CampIcon = camp.icon;
              return (
                <div key={camp.category} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <CampIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {camp.category}
                    </h3>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-accent)] mb-3">{camp.priceRange}</div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{camp.description}</p>
                  <div className="space-y-2">
                    {camp.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gear Rental & Prices ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Gear Rental &amp; Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A complete breakdown of surf gear rental costs in Morocco. All prices are starting prices and
            may vary by season, location, and operator.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="bg-[var(--color-accent)] p-4 text-white">
              <div className="grid grid-cols-3 gap-4 text-sm font-bold">
                <span>Item</span>
                <span>Cost</span>
                <span>Notes</span>
              </div>
            </div>
            <div className="divide-y divide-[var(--border-primary)]">
              {gearRental.map((row, i) => (
                <div key={i} className="grid grid-cols-3 gap-4 p-4 text-sm">
                  <span className="font-medium text-[var(--text-primary)]">{row.item}</span>
                  <span className="text-[var(--color-accent)] font-bold">{row.cost}</span>
                  <span className="text-[var(--text-muted)] text-xs">{row.notes}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Water Temperature & Wetsuit Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Thermometer className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Water Temperature &amp; Wetsuit Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choosing the right wetsuit is essential for comfortable surfing in Morocco. Here is what you need
            for each season.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wetsuitGuide.map((period) => (
              <div key={period.months} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  {period.months}
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <Thermometer className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Water temp:</strong> {period.waterTemp}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <ShieldCheck className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Wetsuit:</strong> {period.recommendation}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                    <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span>{period.extras}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surf & Yoga Retreats ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf &amp; Yoga Retreats
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has become a world-renowned destination for combining surfing with yoga. Taghazout
            and Tamraght are the epicenters, with dozens of retreats offering the perfect balance of
            waves and wellness.
          </p>

          <div className="card-moroccan p-6 max-w-3xl mx-auto">
            <p className="text-[var(--text-secondary)] mb-4">
              The typical surf and yoga retreat follows a transformative daily rhythm: sunrise yoga on a
              rooftop terrace overlooking the ocean, healthy breakfast, mid-morning surf coaching at the
              best break based on conditions, leisurely lunch, afternoon free time or massage, sunset
              yoga flow, and communal Moroccan dinner. Retreats range from budget-friendly shared accommodation
              (from 5,000 MAD per week) to luxury boutique experiences with private coaching and spa treatments
              (from 12,000 MAD per week). Most run Saturday to Saturday with Agadir airport transfers included.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <Users className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                <div className="text-sm font-bold text-[var(--text-primary)]">Daily Surf + Yoga</div>
                <div className="text-xs text-[var(--text-muted)]">Morning waves, afternoon flow</div>
              </div>
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <DollarSign className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                <div className="text-sm font-bold text-[var(--text-primary)]">From 5,000 MAD / week</div>
                <div className="text-xs text-[var(--text-muted)]">Budget to luxury options</div>
              </div>
              <div className="bg-[var(--surface-muted)] p-4 rounded-lg text-center">
                <Calendar className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                <div className="text-sm font-bold text-[var(--text-primary)]">Oct-Mar Best Season</div>
                <div className="text-xs text-[var(--text-muted)]">Good waves, warm weather</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Budget vs Luxury ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget vs Luxury Surf Trips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco caters to every budget. Here is what you can expect at each price point for a week-long surf trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tripBudgets.map((budget) => {
              const BudgetIcon = budget.icon;
              return (
                <div key={budget.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <BudgetIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {budget.tier}
                    </h3>
                  </div>
                  <div className="text-sm font-bold text-[var(--color-accent)] mb-3">{budget.pricePerWeek}</div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{budget.description}</p>
                  <div className="space-y-2">
                    {budget.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-8 max-w-xl mx-auto">
            <AlertTriangle className="w-3.5 h-3.5 inline mr-1" />
            All prices are approximate starting prices. Seasonal pricing applies and costs may vary by
            season, operator, and availability.
          </p>
        </div>
      </section>

      {/* ── Getting to Surf Spots ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting to the Surf Spots
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to reach Morocco&apos;s best surf destinations from major cities and airports.
          </p>

          <div className="space-y-4">
            {transportInfo.map((route, i) => (
              <div key={i} className="card-moroccan p-5">
                <div className="flex flex-col md:flex-row md:items-center gap-3">
                  <div className="flex items-center gap-2 md:w-1/4">
                    <MapPin className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {route.from}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 md:w-1/6">
                    <Clock className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span className="text-sm font-bold text-[var(--text-primary)]">{route.duration}</span>
                  </div>
                  <div className="text-sm text-[var(--text-secondary)] md:w-7/12">{route.options}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Surf Culture ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Surf Culture in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What makes surfing in Morocco such a unique and unforgettable experience goes far beyond the waves.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  The Taghazout Scene
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Taghazout has grown from a fishing village into Morocco&apos;s surf capital without losing its soul. Surf shops, cafes, and guesthouses with ocean-facing rooftop terraces line the main street. The vibe is international yet authentically Moroccan, with local surfers sharing waves with visitors from around the world.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <Mountain className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Beyond the Waves
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                A surf trip here is as much about the culture as the waves. Between sessions, explore ancient medinas, sip mint tea in hidden riads, eat grilled sardines on the harbour wall, trek through argan groves, and swim in the emerald rock pools of Paradise Valley.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  The Local Surf Community
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s local surf scene is thriving with young surfers competing internationally. Respect in the water is important: follow lineup etiquette, do not drop in, and show appreciation for the community. A smile and a &quot;salam&quot; go a long way.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-[var(--color-accent)]" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  Surf Etiquette &amp; Safety
                </h3>
              </div>
              <p className="text-sm text-[var(--text-secondary)]">
                The surfer closest to the peak has right of way. Never drop in on someone riding. At point breaks, wait your turn. Always check conditions, be aware of rocks and currents, and never surf alone at isolated breaks. Travel insurance covering surfing is strongly recommended.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Everything you need to know about surfing in Morocco, answered by experienced surf travelers.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card-moroccan p-5">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <Star className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] ml-6">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco surf trip with these in-depth guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <GuideIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-3xl text-center">
          <Waves className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Surf Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            From the legendary point breaks of Taghazout to the empty lineups of Dakhla, Morocco&apos;s
            waves are waiting. Start planning your surf trip today, or explore everything else this
            extraordinary country has to offer.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/surfing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Waves className="w-5 h-5" />
              Morocco Surf Overview
            </Link>
            <Link
              href="/morocco-adventure-sports"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)] hover:text-white transition-colors font-medium"
            >
              <Mountain className="w-5 h-5" />
              All Adventure Sports
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

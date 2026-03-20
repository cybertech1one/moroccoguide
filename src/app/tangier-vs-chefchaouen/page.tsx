import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Info,
  ArrowRight,
  Sparkles,
  Thermometer,
  DollarSign,
  CheckCircle,
  Users,
  Building,
  Award,
  BookOpen,
  Crown,
  Mountain,
  Utensils,
  ShoppingBag,
  Plane,
  Globe,
  Camera,
  Compass,
  Scale,
  CircleDot,
  Landmark,
  Coffee,
  Music,
  Palette,
  Bus,
  Train,
  Ship,
  Eye,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Tangier vs Chefchaouen 2026 | Which Northern Morocco City to Visit?',
  description:
    'Tangier vs Chefchaouen: the ultimate comparison of northern Morocco\'s two gems. Cosmopolitan port city or blue mountain village? Culture, food, photography, costs, and which suits your travel style. Honest breakdown with prices in MAD for 2026.',
  keywords: [
    'Tangier vs Chefchaouen',
    'Chefchaouen or Tangier',
    'northern Morocco cities',
    'Tangier or Chefchaouen which is better',
    'Tangier vs Chefchaouen comparison',
    'blue city Morocco vs Tangier',
    'should I visit Tangier or Chefchaouen',
    'Tangier vs Chefchaouen cost',
    'Tangier vs Chefchaouen photography',
    'Tangier vs Chefchaouen food',
    'northern Morocco itinerary',
    'Tangier Chefchaouen day trip',
    'Chefchaouen vs Tangier for photographers',
    'best northern Morocco destination',
    'Tangier vs Chefchaouen accommodation',
    'Tangier vs Chefchaouen 2026',
  ],
  openGraph: {
    title: 'Tangier vs Chefchaouen 2026 | Which Northern Morocco City to Visit?',
    description:
      'Complete head-to-head comparison of northern Morocco\'s cosmopolitan port city and enchanting blue village. Culture, food, photography, costs, and travel advice.',
    url: `${BASE_URL}/tangier-vs-chefchaouen`,
    images: [
      {
        url: `${BASE_URL}/images/hero-tangier.webp`,
        width: 1200,
        height: 630,
        alt: 'Split view of Tangier bay panorama and Chefchaouen blue streets in northern Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangier vs Chefchaouen 2026 | Northern Morocco\'s Two Gems',
    description:
      'Cosmopolitan port city or blue mountain village? Head-to-head comparison of Tangier and Chefchaouen covering culture, food, photography, costs, and itineraries.',
    images: [`${BASE_URL}/images/hero-tangier.webp`],
  },
  alternates: { canonical: `${BASE_URL}/tangier-vs-chefchaouen` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/tangier-vs-chefchaouen`,
  name: 'Tangier vs Chefchaouen 2026 | Which Northern Morocco City to Visit?',
  description:
    'Complete head-to-head comparison of Tangier and Chefchaouen covering culture, atmosphere, food, accommodation, photography, transport, and costs for 2026 travelers.',
  url: `${BASE_URL}/tangier-vs-chefchaouen`,
  image: `${BASE_URL}/images/hero-tangier.webp`,
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
  mainEntityOfPage: `${BASE_URL}/tangier-vs-chefchaouen`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: [
    { '@type': 'City', name: 'Tangier', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
    { '@type': 'City', name: 'Chefchaouen', containedInPlace: { '@type': 'Country', name: 'Morocco' } },
  ],
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Tangier vs Chefchaouen', item: `${BASE_URL}/tangier-vs-chefchaouen` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Can I visit Chefchaouen as a day trip from Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, but it is a long day. Chefchaouen is approximately 115 km from Tangier (2-3 hours by car, 3-4 hours by bus). A day trip gives you 4-5 hours to explore. An overnight stay is recommended to properly enjoy the blue city at sunrise and sunset.' } },
    { '@type': 'Question', name: 'Which city is more photogenic: Tangier or Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'Chefchaouen is one of the most photogenic cities in the world thanks to its entirely blue-washed medina. Every corner is a photo opportunity. Tangier offers dramatic bay panoramas, Kasbah views, and the Strait of Gibraltar. Photographers should not miss either.' } },
    { '@type': 'Question', name: 'Is Tangier or Chefchaouen cheaper?', acceptedAnswer: { '@type': 'Answer', text: 'Both are affordable. Chefchaouen is slightly cheaper with riads from 200 MAD and meals from 30 MAD. Tangier has more variety at every price point, with budget hotels from 200 MAD and restaurants from 40 MAD. Seasonal pricing can change during peak periods.' } },
    { '@type': 'Question', name: 'How do I get from Tangier to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'CTM bus: 3-4 hours, from 75 MAD. Grand taxi: 2.5-3 hours, from 80 MAD per person (shared). Private transfer: from 800 MAD. The road winds through the Rif Mountains with stunning scenery.' } },
    { '@type': 'Question', name: 'Which is better for first-time Morocco visitors?', acceptedAnswer: { '@type': 'Answer', text: 'Tangier is easier for first-timers with international ferry and flight connections, more English spoken, and familiar European-influenced infrastructure. Chefchaouen is more relaxed and less overwhelming than larger cities, making it ideal for those wanting a gentle introduction to Moroccan culture.' } },
    { '@type': 'Question', name: 'How many days do I need in each city?', acceptedAnswer: { '@type': 'Answer', text: 'Tangier: 2-3 days to explore the Kasbah, medina, cape area, and enjoy the cafe culture. Chefchaouen: 2 days to wander the blue streets, hike nearby, and photograph sunrises. Combined trip: 4-5 days total for a northern Morocco itinerary.' } },
    { '@type': 'Question', name: 'Is Chefchaouen worth the detour from Tangier?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Chefchaouen is consistently ranked among Morocco\'s most memorable destinations. The blue medina is unlike anything else in the country. The mountain setting and relaxed atmosphere make it a perfect contrast to busier Moroccan cities.' } },
    { '@type': 'Question', name: 'Which city has better nightlife?', acceptedAnswer: { '@type': 'Answer', text: 'Tangier by far. Rooftop bars, live music venues, international restaurants, and a vibrant cafe culture influenced by decades of European and American bohemian presence. Chefchaouen is quiet after dark with just a few cafes and restaurants open.' } },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: AT-A-GLANCE COMPARISON TABLE
   ═══════════════════════════════════════════════════════════════ */

const comparisonTable = [
  { category: 'Population', tangier: '1.1 million', chefchaouen: '45,000', winner: 'tie', icon: Users },
  { category: 'Setting', tangier: 'Coastal port on the Strait of Gibraltar', chefchaouen: 'Mountain village in the Rif (600m altitude)', winner: 'tie', icon: Mountain },
  { category: 'Vibe', tangier: 'Cosmopolitan, literary, eclectic', chefchaouen: 'Tranquil, artistic, spiritual', winner: 'tie', icon: Heart },
  { category: 'Medina Character', tangier: 'Kasbah perched above the bay, multi-layered history', chefchaouen: 'Entirely blue-washed, compact and photogenic', winner: 'tie', icon: MapPin },
  { category: 'International Access', tangier: 'Airport + ferry from Spain (35 min)', chefchaouen: 'No airport, 3-4 hours from Tangier by road', winner: 'tangier', icon: Plane },
  { category: 'Average Temp (Spring)', tangier: '14-21 degrees C (coastal breeze)', chefchaouen: '10-22 degrees C (mountain cool)', winner: 'tie', icon: Thermometer },
  { category: 'Tourist Crowds', tangier: 'Moderate, mix of day-trippers and longer stays', chefchaouen: 'Growing but still relaxed, seasonal peaks', winner: 'chefchaouen', icon: Users },
  { category: 'Budget-Friendliness', tangier: 'Moderate, varied price range', chefchaouen: 'Very affordable, fewer luxury options', winner: 'chefchaouen', icon: DollarSign },
  { category: 'Photography', tangier: 'Bay panoramas, Kasbah, Strait of Gibraltar', chefchaouen: 'World-famous blue streets, mountain backdrop', winner: 'chefchaouen', icon: Camera },
  { category: 'Nightlife', tangier: 'Rooftop bars, cafes, live music, clubs', chefchaouen: 'Very quiet, a few evening cafes', winner: 'tangier', icon: Music },
  { category: 'Food Scene', tangier: 'International + Moroccan, seafood capital', chefchaouen: 'Mountain cuisine, goat cheese, simple and fresh', winner: 'tangier', icon: Utensils },
  { category: 'Day Trip Base', tangier: 'Asilah, Cape Spartel, Hercules Caves, Chefchaouen', chefchaouen: 'Akchour Waterfalls, God\'s Bridge, Talassemtane', winner: 'tangier', icon: Compass },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const budgetBreakdown = [
  {
    tier: 'Budget',
    icon: Compass,
    tangier: {
      daily: 'From 300 MAD',
      accommodation: 'From 200 MAD (hostel or budget hotel)',
      food: 'From 60 MAD (street food, local restaurants)',
      transport: 'From 10 MAD (walking + petit taxi)',
      activities: 'From 30 MAD (medina, beaches, free sights)',
    },
    chefchaouen: {
      daily: 'From 250 MAD',
      accommodation: 'From 150 MAD (budget guesthouse)',
      food: 'From 50 MAD (local restaurants, markets)',
      transport: 'From 0 MAD (everything walkable)',
      activities: 'From 50 MAD (hikes, medina exploration)',
    },
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    tangier: {
      daily: 'From 700 MAD',
      accommodation: 'From 400 MAD (boutique hotel or riad)',
      food: 'From 150 MAD (restaurants, seafood meals)',
      transport: 'From 50 MAD (taxis, occasional tour)',
      activities: 'From 100 MAD (museums, guided tours)',
    },
    chefchaouen: {
      daily: 'From 500 MAD',
      accommodation: 'From 300 MAD (charming riad with terrace)',
      food: 'From 100 MAD (restaurants with views)',
      transport: 'From 0 MAD (walkable town)',
      activities: 'From 100 MAD (guided hikes, workshops)',
    },
  },
  {
    tier: 'Luxury',
    icon: Crown,
    tangier: {
      daily: 'From 2,500 MAD',
      accommodation: 'From 1,800 MAD (5-star hotel or palace)',
      food: 'From 400 MAD (fine dining, rooftop restaurants)',
      transport: 'From 100 MAD (private driver)',
      activities: 'From 200 MAD (private tours, yacht trip)',
    },
    chefchaouen: {
      daily: 'From 1,200 MAD',
      accommodation: 'From 800 MAD (best riad in town)',
      food: 'From 200 MAD (top restaurants)',
      transport: 'From 0 MAD (walkable)',
      activities: 'From 200 MAD (private guide, photography tour)',
    },
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT EACH CITY DOES BETTER
   ═══════════════════════════════════════════════════════════════ */

const tangierWins = [
  {
    title: 'Gateway to Africa',
    icon: Ship,
    description:
      'Just 14 km from Spain across the Strait of Gibraltar. Ferry connections to Tarifa (35 min) and Algeciras (90 min) make Tangier the dramatic doorway between Europe and Africa. International airport with growing connections.',
  },
  {
    title: 'Literary & Bohemian Heritage',
    icon: BookOpen,
    description:
      'Paul Bowles, William Burroughs, Tennessee Williams, and the Beat Generation all lived here. The city\'s international zone era (1923-1956) created a uniquely cosmopolitan character that endures in its cafes, galleries, and creative energy.',
  },
  {
    title: 'Seafood & International Dining',
    icon: Utensils,
    description:
      'Fresh catches from the Mediterranean and Atlantic. Grilled sardines from 25 MAD on the port. International cuisine from Spanish tapas to French bistros. Tangier\'s food scene reflects its position between two continents.',
  },
  {
    title: 'Vibrant Nightlife & Cafe Culture',
    icon: Music,
    description:
      'Rooftop bars overlooking the Strait, live jazz and Gnawa music, atmospheric cafes where writers once gathered. Cafe Hafa\'s terraced views have drawn visitors since 1921. An evening scene Chefchaouen simply cannot match.',
  },
  {
    title: 'Modern Infrastructure',
    icon: Building,
    description:
      'Tanger Med is Africa\'s largest port. New high-speed train (Al Boraq) connects to Casablanca in 2 hours. Renovated corniche, new marina, and ongoing urban renewal projects have transformed the city.',
  },
  {
    title: 'Day Trip Hub',
    icon: Compass,
    description:
      'Cape Spartel where Atlantic meets Mediterranean, Hercules Caves, the beach town of Asilah (45 min), and even Chefchaouen itself as a day trip. More diverse excursion options than from Chefchaouen.',
  },
];

const chefchaouenWins = [
  {
    title: 'The Blue City',
    icon: Palette,
    description:
      'Every building, doorway, staircase, and alley washed in shades of blue: from powder to cobalt to indigo. Established by Jewish refugees in the 1930s, the tradition continues today. One of the most photographed places on Earth.',
  },
  {
    title: 'Mountain Serenity',
    icon: Mountain,
    description:
      'Nestled at 600m between the peaks of Jebel ech-Chaouen and Jebel Meggou in the Rif Mountains. Cool mountain air, peaceful pace, no traffic noise. The antidote to Morocco\'s busier cities.',
  },
  {
    title: 'Photography Paradise',
    icon: Camera,
    description:
      'Every angle is a photo. Blue-washed stairs, colorful pots against blue walls, cats lounging on azure doorsteps, mountain light filtering through narrow lanes. Sunrise and sunset transform the medina into a painter\'s dream.',
  },
  {
    title: 'Hiking & Nature',
    icon: Sparkles,
    description:
      'Akchour Waterfalls (45 min drive), the natural rock arch of God\'s Bridge, and Talassemtane National Park. Cedar forests, Rif Mountain trails, and swimming holes. Outdoor adventures that Tangier cannot offer.',
  },
  {
    title: 'Relaxed Atmosphere',
    icon: Heart,
    description:
      'No hustlers, no aggressive touts, no overwhelming crowds. Chefchaouen moves at its own gentle pace. Sit in Plaza Uta el-Hammam with mint tea and watch the world go by. Morocco\'s most stress-free medina.',
  },
  {
    title: 'Artisan Crafts & Local Culture',
    icon: ShoppingBag,
    description:
      'Rif Mountain textiles, woven blankets, goat cheese, local honey, and handmade soaps. Less commercial than larger cities. Prices are fair and haggling is gentle. Authentic mountain Berber culture.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: THINGS TO DO COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const tangierActivities = [
  { activity: 'Kasbah Museum', price: 'From 20 MAD', desc: 'Former sultan\'s palace with archaeological collections' },
  { activity: 'Cape Spartel & Hercules Caves', price: 'From 10 MAD', desc: 'Where the Atlantic meets the Mediterranean' },
  { activity: 'Cafe Hafa', price: 'From 15 MAD', desc: 'Terraced cafe with Strait of Gibraltar views since 1921' },
  { activity: 'American Legation Museum', price: 'From 20 MAD', desc: 'First American diplomatic property abroad (1821)' },
  { activity: 'Grand Socco & Petit Socco', price: 'Free', desc: 'Historic market squares and people-watching' },
  { activity: 'Tangier Beach & Corniche', price: 'Free', desc: 'Mediterranean swimming and seafront promenades' },
];

const chefchaouenActivities = [
  { activity: 'Blue Medina Wander', price: 'Free', desc: 'Every alley is a destination, follow the blue' },
  { activity: 'Plaza Uta el-Hammam', price: 'Free', desc: 'Central square with Kasbah and Grand Mosque views' },
  { activity: 'Ras El Maa Waterfall', price: 'Free', desc: 'Small waterfall at the medina\'s eastern edge' },
  { activity: 'Akchour Waterfalls Hike', price: 'From 20 MAD', desc: 'Stunning cascades in Talassemtane National Park' },
  { activity: 'Spanish Mosque Sunset', price: 'Free', desc: 'Short uphill walk for panoramic blue city views' },
  { activity: 'Chefchaouen Kasbah', price: 'From 10 MAD', desc: 'Small museum and garden inside 15th-century fortress' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FOOD COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const tangierDishes = [
  { dish: 'Grilled Sardines', price: 'From 25 MAD', desc: 'Fresh from the port, charcoal-grilled perfection' },
  { dish: 'Seafood Pastilla', price: 'From 50 MAD', desc: 'Tangier\'s take on the classic with fish and vermicelli' },
  { dish: 'Bisara', price: 'From 10 MAD', desc: 'Hearty split fava bean soup, a northern staple' },
  { dish: 'Brochettes', price: 'From 20 MAD', desc: 'Lamb or kefta skewers with cumin and bread' },
  { dish: 'Spanish-Moroccan Tapas', price: 'From 40 MAD', desc: 'Fusion cuisine from centuries of cross-strait influence' },
];

const chefchaouenDishes = [
  { dish: 'Rif Goat Cheese', price: 'From 15 MAD', desc: 'Local specialty, fresh and creamy, served with bread' },
  { dish: 'Mountain Tagine', price: 'From 35 MAD', desc: 'Slow-cooked with seasonal mountain vegetables' },
  { dish: 'Fried Trout', price: 'From 40 MAD', desc: 'Fresh from Rif Mountain streams, simply prepared' },
  { dish: 'Homemade Bread', price: 'From 3 MAD', desc: 'Wood-oven baked, served with olive oil and honey' },
  { dish: 'Mint Tea Ceremony', price: 'From 10 MAD', desc: 'Rif Mountain herbs in a plaza with blue views' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PHOTOGRAPHY COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const tangierPhotoSpots = [
  'Kasbah ramparts at sunset with bay panorama',
  'Strait of Gibraltar from Cape Spartel lighthouse',
  'Cafe Hafa\'s terraced balconies over the water',
  'Grand Socco market morning bustle',
  'Port area with fishing boats and ferries',
  'Medina doorways and multi-layered architecture',
];

const chefchaouenPhotoSpots = [
  'Blue stairways and alley compositions throughout the medina',
  'Plaza Uta el-Hammam with the Kasbah tower backdrop',
  'Spanish Mosque hillside for full town panorama',
  'Colorful pots and painted doorways against blue walls',
  'Ras El Maa waterfall with Rif Mountain backdrop',
  'Sunrise light on the blue medina from elevated viewpoints',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TRAVELER TYPE RECOMMENDATIONS
   ═══════════════════════════════════════════════════════════════ */

const travelerTypes = [
  { type: 'First-Timer', recommendation: 'Tangier', icon: Globe, reason: 'Better access from Europe, more infrastructure, international vibe eases you into Morocco gently.' },
  { type: 'Photographer', recommendation: 'Chefchaouen', icon: Camera, reason: 'The blue medina is one of the most photogenic places on Earth. Every corner is a composition.' },
  { type: 'Foodie', recommendation: 'Tangier', icon: Utensils, reason: 'Seafood, international dining, and centuries of cross-cultural cuisine. Grilled sardines from 25 MAD.' },
  { type: 'Budget Traveler', recommendation: 'Chefchaouen', icon: DollarSign, reason: 'Cheaper accommodation, everything walkable, simple affordable food. Daily budget from 250 MAD.' },
  { type: 'Nightlife Lover', recommendation: 'Tangier', icon: Music, reason: 'Rooftop bars, live music, clubs, and atmospheric cafes. Chefchaouen sleeps early.' },
  { type: 'Nature Lover', recommendation: 'Chefchaouen', icon: Mountain, reason: 'Rif Mountain hikes, Akchour Waterfalls, God\'s Bridge, Talassemtane National Park at your doorstep.' },
  { type: 'History & Culture Buff', recommendation: 'Tangier', icon: Landmark, reason: 'International zone history, Beat Generation legacy, Phoenician and Roman roots, Kasbah Museum.' },
  { type: 'Relaxation Seeker', recommendation: 'Chefchaouen', icon: Heart, reason: 'No hustle, mountain peace, slow mornings with tea, and the gentle rhythm of a small town.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: COMBINED ITINERARY
   ═══════════════════════════════════════════════════════════════ */

const combinedItinerary = [
  { day: 'Day 1', location: 'Arrive Tangier', icon: Ship, highlights: 'Ferry from Spain or fly in. Settle into your riad or hotel. Explore Petit Socco, wander the Kasbah, first mint tea at Cafe Hafa with Strait views' },
  { day: 'Day 2', location: 'Tangier Exploration', icon: Landmark, highlights: 'Kasbah Museum, American Legation, medina souks. Afternoon at Cape Spartel and Hercules Caves. Seafood dinner at the port' },
  { day: 'Day 3', location: 'Tangier to Chefchaouen', icon: Bus, highlights: 'Morning bus or taxi through the Rif Mountains (3-4 hours). Arrive and check into a blue riad. Afternoon wander through the medina. Sunset from the Spanish Mosque' },
  { day: 'Day 4', location: 'Chefchaouen & Surrounds', icon: Mountain, highlights: 'Morning photography in the blue medina. Day hike to Akchour Waterfalls or God\'s Bridge. Evening mint tea in Plaza Uta el-Hammam' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: FAQ
   ═══════════════════════════════════════════════════════════════ */

const faqs = [
  {
    question: 'Can I visit Chefchaouen as a day trip from Tangier?',
    answer:
      'Yes, but it is a long day. Chefchaouen is approximately 115 km from Tangier (2-3 hours by car, 3-4 hours by bus). A day trip gives you 4-5 hours to explore. An overnight stay is recommended to properly enjoy the blue city at sunrise and sunset, when the light is most magical.',
  },
  {
    question: 'Which city is more photogenic: Tangier or Chefchaouen?',
    answer:
      'Chefchaouen is one of the most photogenic cities in the world thanks to its entirely blue-washed medina. Every corner is a photo opportunity. Tangier offers dramatic bay panoramas, Kasbah views, and the Strait of Gibraltar. Photographers should not miss either, but Chefchaouen is the clear winner for Instagram and social media content.',
  },
  {
    question: 'Is Tangier or Chefchaouen cheaper?',
    answer:
      'Both are affordable compared to Marrakech or Fes. Chefchaouen is slightly cheaper with riads from 200 MAD and meals from 30 MAD. Tangier has more variety at every price point, with budget hotels from 200 MAD and seafood meals from 40 MAD. Seasonal pricing can change during peak periods.',
  },
  {
    question: 'How do I get from Tangier to Chefchaouen?',
    answer:
      'CTM bus: 3-4 hours, from 75 MAD. Grand taxi: 2.5-3 hours, from 80 MAD per person (shared). Private transfer: from 800 MAD. The road winds through the scenic Rif Mountains. No train connection exists to Chefchaouen.',
  },
  {
    question: 'Which is better for first-time Morocco visitors?',
    answer:
      'Tangier is easier for first-timers with ferry and flight connections, more English spoken, and familiar European-influenced infrastructure. Chefchaouen is more relaxed and less overwhelming than larger cities, making it ideal for those wanting a gentle introduction. Consider visiting both in 4 days.',
  },
  {
    question: 'How many days do I need in each city?',
    answer:
      'Tangier: 2-3 days to explore the Kasbah, medina, cape area, and enjoy the cafe culture. Chefchaouen: 1-2 days to wander the blue streets, hike nearby, and photograph sunrises. Combined trip: 4-5 days total for a northern Morocco itinerary.',
  },
  {
    question: 'Is Chefchaouen worth the detour from Tangier?',
    answer:
      'Absolutely. Chefchaouen is consistently ranked among Morocco\'s most memorable destinations. The blue medina is unlike anything else in the country. The mountain setting and relaxed atmosphere make it a perfect contrast to Tangier\'s cosmopolitan energy.',
  },
  {
    question: 'Which city has better nightlife?',
    answer:
      'Tangier by far. Rooftop bars, live music venues, international restaurants, and a vibrant cafe culture influenced by decades of European and American bohemian presence. Chefchaouen is quiet after dark with just a few cafes and restaurants open in the plaza.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function TangierVsChefchaouenPage() {
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
            backgroundImage: 'url(/images/hero-tangier.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Tangier vs Chefchaouen</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Scale className="w-4 h-4" />
            City Comparison
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Tangier vs Chefchaouen:
            <br className="hidden md:block" /> Northern Morocco&apos;s Two Gems
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Cosmopolitan port city or enchanting blue mountain village? The honest
            comparison to help you choose between northern Morocco&apos;s most
            captivating destinations in 2026.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Two Cities, Two Worlds Apart
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Northern Morocco offers two destinations that could not be more different.
                Tangier, the cosmopolitan gateway perched on the Strait of Gibraltar, has
                drawn writers, artists, and adventurers for centuries with its intoxicating
                mix of European and African cultures. Chefchaouen, tucked into the Rif
                Mountains just three hours southeast, enchants visitors with its dreamlike
                blue-washed medina and mountain serenity.
              </p>
              <p>
                Tangier is the city that never sleeps quietly: rooftop bars, ferry horns,
                cafe terraces buzzing with conversation. Chefchaouen is the city that
                breathes slowly: blue alleys, mountain air, and mint tea at dawn. Together
                they offer the perfect northern Morocco experience. This guide compares
                them across every dimension to help you plan your trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── At-a-Glance Comparison Table ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            At-a-Glance Comparison
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            How Tangier and Chefchaouen compare across 12 key categories for travelers.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices in MAD reflect 2026 mid-season rates. Seasonal pricing can change.
          </p>

          <div className="max-w-5xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Category</div>
                <div className="p-3 px-4">Tangier</div>
                <div className="p-3 px-4">Chefchaouen</div>
                <div className="p-3 px-4 text-center">Edge</div>
              </div>
              {comparisonTable.map((row, i) => {
                const RowIcon = row.icon;
                return (
                  <div
                    key={row.category}
                    className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                  >
                    <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                      <RowIcon className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 hidden md:block" />
                      {row.category}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'tangier' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.tangier}
                    </div>
                    <div className={`p-3 px-4 ${row.winner === 'chefchaouen' ? 'text-[var(--color-accent)] font-semibold' : 'text-[var(--text-secondary)]'}`}>
                      {row.chefchaouen}
                    </div>
                    <div className="p-3 px-4 text-center">
                      {row.winner === 'tangier' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-accent)]">
                          <CheckCircle className="w-3.5 h-3.5" /> Tangier
                        </span>
                      )}
                      {row.winner === 'chefchaouen' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--text-muted)]">
                          <CircleDot className="w-3.5 h-3.5" /> Chefchaouen
                        </span>
                      )}
                      {row.winner === 'tie' && (
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)]">
                          <Scale className="w-3.5 h-3.5" /> Tie
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Culture & Atmosphere ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Landmark className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Culture &amp; Atmosphere
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A cosmopolitan port city and a tranquil mountain village offer strikingly different cultural experiences.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Tangier: The Cosmopolitan Gateway
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Tangier has been a crossroads for millennia: Phoenicians, Romans, Portuguese,
                British, and Spanish all left their mark. During its International Zone era
                (1923-1956), the city attracted spies, diplomats, writers, and artists from
                around the world. Paul Bowles, William Burroughs, Jack Kerouac, and the Beat
                Generation turned Tangier into a literary legend. Today, the city blends
                Moroccan authenticity with European sophistication: Arabic and French mix in
                cafes, mosques stand beside art galleries, and the old medina looks out across
                the water to Spain.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Gateway between Europe & Africa', 'Beat Generation literary heritage', 'International Zone history', 'Kasbah & medina overlooking the bay', 'Cafe culture since 1921', 'Africa\'s largest port (Tanger Med)'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-3">
                Chefchaouen: The Blue Mountain Village
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Founded in 1471 as a small fortress to fight Portuguese invasions,
                Chefchaouen remained isolated in the Rif Mountains for centuries. The
                blue-washing tradition began in the 1930s when Jewish refugees settled
                here, painting buildings the color of the sky to symbolize heaven and
                spiritual awareness. Today, the entire medina glows in shades of blue
                against the green Rif Mountains. The town moves at a gentle rhythm: women
                wash wool in the Ras El Maa river, artisans work in tiny shops, and cats
                nap on blue doorsteps. It is Morocco at its most peaceful.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Blue-washed medina since 1930s', 'Rif Mountain setting (600m altitude)', 'Founded 1471 as a fortress', 'Berber and Andalusian heritage', 'Talassemtane National Park', 'Morocco\'s most peaceful medina'].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                    <CheckCircle className="w-3 h-3" /> {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Things to Do Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Things to Do
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tangier has more structured sights; Chefchaouen is the experience itself.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Top Activities in Tangier', items: tangierActivities, icon: Star },
              { title: 'Top Activities in Chefchaouen', items: chefchaouenActivities, icon: Palette },
            ].map((section) => {
              const SectionIcon = section.icon;
              return (
                <div key={section.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <SectionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{section.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.activity} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                        <div><span className="text-sm font-medium text-[var(--text-primary)]">{item.activity}</span><p className="text-xs text-[var(--text-muted)]">{item.desc}</p></div>
                        <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Food & Dining ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Food &amp; Dining
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tangier brings the seafood and international flair; Chefchaouen keeps it simple with mountain flavors.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Tangier Cuisine', icon: Award,
                intro: 'Seafood-focused with Spanish-Moroccan fusion. Fresh catches daily, international restaurants, and legendary cafe culture.',
                dishes: tangierDishes,
              },
              {
                title: 'Chefchaouen Cuisine', icon: Coffee,
                intro: 'Mountain simplicity at its finest. Goat cheese, fresh trout, wood-oven bread, and the best mint tea in the Rif.',
                dishes: chefchaouenDishes,
              },
            ].map((cuisine) => {
              const CuisineIcon = cuisine.icon;
              return (
                <div key={cuisine.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <CuisineIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">{cuisine.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{cuisine.intro}</p>
                  <div className="space-y-2">
                    {cuisine.dishes.map((item) => (
                      <div key={item.dish} className="flex items-center justify-between p-2 rounded bg-[var(--surface-muted)]">
                        <div><span className="text-sm font-medium text-[var(--text-primary)]">{item.dish}</span><p className="text-xs text-[var(--text-muted)]">{item.desc}</p></div>
                        <span className="text-xs font-semibold text-[var(--color-accent)] shrink-0 ml-2">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Food Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Tangier wins for variety, seafood, and international dining. Grilled sardines at the
              port are unmissable. Chefchaouen wins for authenticity and simplicity: local goat
              cheese, mountain-fresh ingredients, and the most relaxed dining atmosphere in Morocco.
              Seasonal pricing can change restaurant costs during peak periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── Accommodation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            From boutique Kasbah hotels in Tangier to blue-walled riads in Chefchaouen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                <Building className="w-5 h-5 inline mr-1" /> Staying in Tangier
              </h3>
              <div className="space-y-3">
                {[
                  'Wide range: hostels from 200 MAD to 5-star hotels from 1,800 MAD',
                  'Kasbah area offers boutique hotels with bay views',
                  'Ville Nouvelle has modern chain hotels and apartments',
                  'Beach-area resorts along the corniche',
                  'Rooftop terraces with views of Spain on clear days',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                <Building className="w-5 h-5 inline mr-1" /> Staying in Chefchaouen
              </h3>
              <div className="space-y-3">
                {[
                  'Smaller scale: guesthouses from 150 MAD, best riads from 800 MAD',
                  'Blue-painted riads with mountain-view terraces are the highlight',
                  'Most accommodation within or near the compact medina',
                  'Fewer luxury options but high charm factor across all budgets',
                  'Book ahead in spring and autumn when the town fills with visitors',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <CircleDot className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Photography Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Photography Opportunities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Chefchaouen&apos;s blue streets vs Tangier&apos;s dramatic bay views: both are photographer&apos;s dreams.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Tangier Photo Spots
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {tangierPhotoSpots.map((spot, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {spot}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                <Sparkles className="w-3 h-3 inline mr-1" />
                Best light: golden hour from the Kasbah facing east for sunrise, or west from Cape Spartel at sunset.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)]">
                  Chefchaouen Photo Spots
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                {chefchaouenPhotoSpots.map((spot, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CircleDot className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    {spot}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-[var(--text-muted)]">
                <Sparkles className="w-3 h-3 inline mr-1" />
                Best light: early morning before crowds. Sunrise from the Spanish Mosque is unmissable.
              </p>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Award className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
              The Photography Verdict
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Chefchaouen wins for sheer photogenic density: every alley, staircase, and doorway
              is a composition in blue. It is one of the most photographed small towns in the world.
              Tangier wins for dramatic landscape photography: the Strait of Gibraltar, bay panoramas,
              and the atmospheric contrast between old and new city. Serious photographers should visit both.
            </p>
          </div>
        </div>
      </section>

      {/* ── Getting There ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Getting There
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tangier is the gateway; Chefchaouen requires a scenic mountain journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Getting to Tangier
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2"><Plane className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Airport (TNG):</strong> Direct flights from European cities (Ryanair, easyJet, RAM). Domestic flights from Casablanca.</span></div>
                <div className="flex items-start gap-2"><Ship className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Ferry from Spain:</strong> Tarifa to Tangier Ville (35 min, from 300 MAD). Algeciras to Tanger Med (90 min, from 250 MAD).</span></div>
                <div className="flex items-start gap-2"><Train className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Al Boraq High-Speed Train:</strong> Casablanca in 2 hours, from 150 MAD. Rabat in 1.5 hours.</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Within Tangier:</strong> Walk the medina. Petit taxis from 10 MAD. City buses available.</span></div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-4">
                Getting to Chefchaouen
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2"><Bus className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Bus from Tangier:</strong> CTM or private, 3-4 hours through Rif Mountains, from 75 MAD.</span></div>
                <div className="flex items-start gap-2"><Bus className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Bus from Fes:</strong> 4-5 hours via Ouezzane, from 75 MAD. CTM has daily departures.</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Grand Taxi:</strong> Shared taxis from Tangier or Tetouan, from 80 MAD per person.</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span><strong>Within Chefchaouen:</strong> Everything is walkable. No taxis needed inside the medina.</span></div>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Bus className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Traveling Between Tangier &amp; Chefchaouen (115 km)
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              CTM bus: 3-4 hours, from 75 MAD. Grand taxi (shared): 2.5-3 hours, from 80 MAD per
              person. Private transfer: from 800 MAD. The road winds through spectacular Rif Mountain
              scenery with pine forests and valley views. No train connection exists. Seasonal pricing
              can change transport costs during peak periods.
            </p>
          </div>
        </div>
      </section>

      {/* ── Budget Breakdown ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cost Comparison by Travel Style
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you will actually spend per day in each city. Both are affordable northern Morocco destinations.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetBreakdown.map((tier) => {
              const TierIcon = tier.icon;
              return (
                <div key={tier.tier} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                      <TierIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{tier.tier}</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Tangier', data: tier.tangier, color: 'text-[var(--color-accent)]' },
                      { label: 'Chefchaouen', data: tier.chefchaouen, color: 'text-[var(--text-muted)]' },
                    ].map((city) => (
                      <div key={city.label} className="p-3 bg-[var(--surface-muted)] rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className={`text-sm font-semibold ${city.color}`}>{city.label}</span>
                          <span className="text-base font-bold text-[var(--text-primary)]">{city.data.daily}<span className="text-xs font-normal text-[var(--text-muted)]">/day</span></span>
                        </div>
                        <div className="text-xs text-[var(--text-secondary)] space-y-0.5">
                          <p>Stay: {city.data.accommodation} | Food: {city.data.food}</p>
                          <p>Transport: {city.data.transport} | Activities: {city.data.activities}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices in MAD. Seasonal pricing can change during peak periods (Easter, summer, Christmas).
          </p>
        </div>
      </section>

      {/* ── Choose Tangier If... / Choose Chefchaouen If... ── */}
      {[
        { title: 'Choose Tangier If...', icon: CheckCircle, items: tangierWins, bg: 'bg-[var(--surface-muted)]', pattern: 'moroccan-pattern' },
        { title: 'Choose Chefchaouen If...', icon: CircleDot, items: chefchaouenWins, bg: '', pattern: '' },
      ].map((section) => {
        const SectionIcon = section.icon;
        return (
          <section key={section.title} className={`py-16 md:py-20 ${section.bg} ${section.pattern}`}>
            <div className="container-morocco">
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
                <SectionIcon className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
                {section.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div key={item.title} className="card-moroccan p-5">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                        <ItemIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{item.title}</h3>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Which to Visit by Traveler Type ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which City by Traveler Type
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            A quick guide based on what matters most to you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelerTypes.map((tt) => {
              const TypeIcon = tt.icon;
              return (
                <div key={tt.type} className="card-moroccan p-4 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TypeIcon className="w-4 h-4 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-[var(--text-primary)]">{tt.type}</span>
                    <span className={`text-xs font-semibold ml-2 ${tt.recommendation === 'Tangier' ? 'text-[var(--color-accent)]' : 'text-[var(--color-gold)]'}`}>{tt.recommendation}</span>
                    <p className="text-xs text-[var(--text-secondary)] mt-1">{tt.reason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Combined Itinerary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Not Both? The 4-Day Northern Morocco Itinerary
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The best answer is to visit both. Here is a suggested itinerary combining Tangier and Chefchaouen.
          </p>

          <div className="space-y-4">
            {combinedItinerary.map((stop) => {
              const StopIcon = stop.icon;
              return (
                <div key={stop.day} className="card-moroccan p-4 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <StopIcon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{stop.location}</h3>
                      <span className="text-xs text-[var(--text-muted)] shrink-0 ml-2">{stop.day}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{stop.highlights}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Info className="w-4 h-4 inline mr-1 text-[var(--color-gold)]" />
              Combined Trip Budget
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              A 4-day Tangier and Chefchaouen itinerary at mid-range comfort costs approximately from 3,000 MAD
              total including inter-city transport. Budget travelers can do it from 1,500 MAD; luxury travelers
              should expect from 8,000 MAD. Seasonal pricing can change these estimates during peak periods.
              Book Chefchaouen accommodation in advance during spring and autumn.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Verdict ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Award className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            The Final Verdict
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Our honest assessment after comparing every dimension.
          </p>

          <div className="card-moroccan p-6">
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p><strong className="text-[var(--text-primary)]">Tangier wins on access, culture, dining, and nightlife.</strong> The cosmopolitan gateway between Europe and Africa: international connections, literary heritage, world-class seafood, and Morocco&apos;s best cafe culture. A proper city with history layered centuries deep.</p>
              <p><strong className="text-[var(--text-primary)]">Chefchaouen wins on photography, atmosphere, nature, and value.</strong> The blue mountain village that stops time: every alley a photograph, every moment peaceful, every price affordable. Morocco&apos;s most enchanting small town and one of the most photogenic places on Earth.</p>
              <p><strong className="text-[var(--text-primary)]">The best answer?</strong> Visit both. Start in Tangier for the cosmopolitan energy, then journey through the Rif Mountains to Chefchaouen for the serenity. Together they reveal northern Morocco&apos;s full range: the city that watches two continents, and the village that paints itself the color of the sky.</p>
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
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/tangier', icon: Star, title: 'Tangier Complete Guide', desc: 'Everything about the gateway city: Kasbah, medina, cafes, and the Strait of Gibraltar.' },
              { href: '/chefchaouen', icon: Palette, title: 'Chefchaouen Complete Guide', desc: 'The blue city in depth: medina walks, mountain hikes, and photography tips.' },
              { href: '/things-to-do-tangier', icon: Compass, title: 'Things to Do in Tangier', desc: 'From Cape Spartel to Cafe Hafa: the complete activity guide for Tangier.' },
              { href: '/things-to-do-chefchaouen', icon: Camera, title: 'Things to Do in Chefchaouen', desc: 'Blue medina walks, Akchour Waterfalls, and the Spanish Mosque sunset.' },
              { href: '/fes-vs-marrakech', icon: Scale, title: 'Fes vs Marrakech', desc: 'The other great Morocco debate: comparing the two imperial cities head-to-head.' },
              { href: '/day-trips-from-tangier', icon: Globe, title: 'Day Trips from Tangier', desc: 'Asilah, Cape Spartel, Tetouan, Chefchaouen, and more excursions from northern Morocco.' },
            ].map((link) => {
              const LinkIcon = link.icon;
              return (
                <Link key={link.href} href={link.href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                  <LinkIcon className="w-8 h-8 text-[var(--color-accent)] mb-3" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                  <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

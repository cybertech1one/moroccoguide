import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Heart,
  Clock,
  Info,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  Users,
  Gem,
  Award,
  BookOpen,
  Mountain,
  Wind,
  Globe,
  MessageCircle,
  Bed,
  Coffee,
  Sun,
  Wallet,
  Calendar,
  Leaf,
  Compass,
  Waves,
  Sunrise,
  Activity,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Best Yoga Retreats in Morocco 2026 | Surf-Yoga, Mountain & Coastal Retreats Guide',
  description:
    'Discover the best yoga retreats in Morocco for 2026. Surf-yoga in Taghazout, mountain retreats in the Atlas, coastal escapes in Essaouira, riad yoga in Marrakech. Prices in MAD, packing tips, and how to choose the right retreat.',
  keywords: [
    'yoga retreats Morocco',
    'Morocco yoga retreat',
    'best yoga retreats in Morocco',
    'yoga retreat Marrakech',
    'yoga Essaouira',
    'surf yoga Morocco',
    'Taghazout yoga retreat',
    'Atlas Mountains yoga',
    'yoga holiday Morocco',
    'yoga retreat Morocco 2026',
    'yoga and surf Morocco',
    'meditation retreat Morocco',
    'yoga teacher training Morocco',
    'yoga retreat Agadir',
    'Paradise Valley yoga',
    'Morocco yoga vacation',
    'affordable yoga retreat Morocco',
    'luxury yoga retreat Morocco',
    'yoga hiking Morocco',
    'detox yoga retreat Morocco',
  ],
  openGraph: {
    title: 'Best Yoga Retreats in Morocco 2026 | Surf-Yoga, Mountain & Coastal Retreats Guide',
    description:
      'The complete guide to yoga retreats in Morocco. Surf-yoga in Taghazout, Atlas Mountain escapes, Essaouira coastal retreats, Marrakech riad yoga. Prices, tips, and how to choose.',
    url: `${BASE_URL}/morocco-yoga-retreats`,
    images: [
      {
        url: `${BASE_URL}/images/hero-yoga-rooftop.webp`,
        width: 1200,
        height: 630,
        alt: 'Rooftop yoga session in Morocco with panoramic views of traditional architecture and distant mountains at sunrise',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best Yoga Retreats in Morocco 2026 | Complete Guide',
    description:
      'Surf-yoga in Taghazout, mountain retreats in the Atlas, coastal escapes in Essaouira. The definitive Morocco yoga retreat guide with prices and booking tips.',
    images: [`${BASE_URL}/images/hero-yoga-rooftop.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-yoga-retreats` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-yoga-retreats`,
  name: 'Best Yoga Retreats in Morocco 2026 | Surf-Yoga, Mountain & Coastal Retreats Guide',
  description:
    'The definitive guide to yoga retreats in Morocco. Surf-yoga in Taghazout, Atlas Mountain escapes, coastal retreats in Essaouira, riad yoga in Marrakech, meditation in the Sahara. Prices in MAD with booking tips and packing advice.',
  url: `${BASE_URL}/morocco-yoga-retreats`,
  image: `${BASE_URL}/images/hero-yoga-rooftop.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-yoga-retreats`,
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
      { '@type': 'ListItem', position: 2, name: 'Yoga Retreats Morocco', item: `${BASE_URL}/morocco-yoga-retreats` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a yoga retreat in Morocco cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yoga retreats in Morocco range from 4,000 MAD per person for a budget 5-day retreat with shared accommodation to 30,000-50,000 MAD for a luxury week-long private retreat. Mid-range retreats typically cost 8,000-15,000 MAD for 7 days including accommodation, meals, and daily yoga classes. Morocco offers exceptional value compared to equivalent retreats in Bali, Costa Rica, or Europe.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time of year for a yoga retreat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The ideal seasons are spring (March-May) and autumn (September-November) with comfortable temperatures of 20-28 degrees Celsius for outdoor practice. Coastal retreats in Essaouira, Taghazout, and Agadir are pleasant year-round. Winter is perfect for coastal yoga with mild temperatures of 16-22 degrees. Avoid inland retreats in July-August when temperatures can exceed 40 degrees Celsius.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need yoga experience to attend a retreat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most yoga retreats in Morocco welcome complete beginners alongside experienced practitioners. Classes are typically offered at multiple levels, and teachers provide individual modifications. Many retreat centers specifically design beginner-friendly programs. Just communicate your level when booking so the retreat can ensure a good fit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What styles of yoga are offered at Morocco retreats?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco yoga retreats offer a wide range of styles including Vinyasa Flow, Hatha, Ashtanga, Yin, Restorative, Kundalini, and Power Yoga. Many retreats combine multiple styles throughout the day, with an energizing morning flow and a restorative evening session. Some retreats also offer yoga teacher training (200-hour and 500-hour YTT) recognized by Yoga Alliance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I combine a yoga retreat with surfing in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Surf-yoga retreats are among the most popular in Morocco, especially along the Taghazout and Essaouira coastline. These typically include morning surf lessons followed by afternoon yoga sessions to stretch and restore the body. No prior surf experience is needed. The combination of physical surf sessions and restorative yoga creates a balanced and exhilarating retreat experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for a yoga retreat in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pack comfortable yoga clothing, a light sweater for cool mornings and evenings, modest clothing for town visits (covering shoulders and knees), a swimsuit, sunscreen and a hat, a reusable water bottle, and any personal supplements. Most retreats provide yoga mats, blocks, and props. Bring layers as temperatures shift between sunrise practice and afternoon warmth.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Morocco yoga retreats suitable for solo travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco yoga retreats are excellent for solo travelers and many participants attend alone. Retreats naturally foster community through shared meals, group classes, and excursions. Many retreats have a majority of solo attendees who quickly bond. Retreat centers provide a safe, welcoming environment and some offer single-occupancy rooms at slightly higher rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'What food is served at yoga retreats in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most yoga retreats in Morocco serve healthy, plant-forward Moroccan cuisine featuring tagines, fresh salads, couscous, seasonal fruits, and smoothies. Many cater to vegetarian, vegan, and gluten-free diets. Meals typically include fresh-pressed juices, herbal teas, and locally sourced organic produce. Moroccan cuisine is naturally rich in vegetables, legumes, and spices, making it ideal for retreat dining.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: WHY MOROCCO FOR YOGA
   ═══════════════════════════════════════════════════════════════ */

const whyMorocco = [
  {
    title: 'Year-Round Sunshine',
    icon: Sun,
    description: 'Over 300 sunny days per year with mild coastal winters and warm springs, allowing outdoor yoga practice nearly every day. The Atlantic breeze keeps coastal retreats comfortable even in summer.',
  },
  {
    title: 'Stunning Diverse Landscapes',
    icon: Mountain,
    description: 'Practice yoga on Atlantic rooftops, amid Atlas Mountain peaks, in Sahara Desert camps, or in lush Paradise Valley. Few countries offer such varied and inspiring natural backdrops for your practice.',
  },
  {
    title: 'Exceptional Value',
    icon: Wallet,
    description: 'Morocco offers 40-60% savings compared to equivalent retreats in Bali, Costa Rica, or southern Europe. A week-long mid-range retreat with full board costs a fraction of similar programs elsewhere.',
  },
  {
    title: 'Rich Cultural Immersion',
    icon: Globe,
    description: 'Yoga retreats here are infused with Moroccan culture: hammam rituals, mint tea ceremonies, souk visits, Berber traditions, and world-class cuisine. Your retreat becomes a cultural journey as much as a wellness one.',
  },
  {
    title: 'Easy Access from Europe',
    icon: Compass,
    description: 'Just 3-4 hours from most European cities with frequent budget flights. Close proximity makes Morocco ideal for long weekends or week-long escapes without long-haul travel fatigue.',
  },
  {
    title: 'Vibrant Retreat Community',
    icon: Users,
    description: 'A mature, thriving yoga retreat scene with internationally certified teachers, purpose-built shalas, and established retreat centers. Morocco has hosted yoga retreats for decades, building deep expertise.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP YOGA RETREAT LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const retreatLocations = [
  {
    name: 'Essaouira Coast',
    icon: Wind,
    image: '/images/hero-essaouira.webp',
    vibe: 'Bohemian, breezy, artistic',
    bestFor: 'Creative souls, wind-down retreats, yin yoga',
    price: 'From 6,000 MAD per person (7-day retreat)',
    description: 'Essaouira\'s laid-back Atlantic vibe makes it a natural home for yoga retreats. Practice in converted riads within the medina, on rooftops overlooking the ramparts, or at beachfront venues south of the city. The constant ocean breeze, sound of waves, and blue-and-white architecture create a meditative atmosphere. Essaouira attracts a bohemian crowd and many retreats incorporate art workshops, cooking classes, and medina walks alongside yoga.',
    highlights: ['Rooftop yoga with Atlantic panoramas', 'Artistic medina atmosphere', 'Year-round mild temperatures', 'Fresh seafood cuisine'],
  },
  {
    name: 'Taghazout Surf-Yoga Hub',
    icon: Waves,
    image: '/images/hero-surf-taghazout.webp',
    vibe: 'Active, social, sun-drenched',
    bestFor: 'Surf-yoga combos, active travelers, social retreats',
    price: 'From 5,500 MAD per person (7-day surf-yoga)',
    description: 'The fishing village of Taghazout has transformed into Morocco\'s premier surf-yoga destination. World-class point breaks attract surfers from around the globe, while the growing community of yoga shalas and retreat centers offers everything from Vinyasa flow to Ashtanga. Morning surf sessions are followed by afternoon yoga to stretch and restore. The vibrant cafe scene, stunning sunsets, and year-round warmth create an irresistible atmosphere for active retreats.',
    highlights: ['World-class surf and yoga combination', 'Vibrant international community', 'Year-round warm weather', 'Stunning coastal sunsets'],
  },
  {
    name: 'Atlas Mountains',
    icon: Mountain,
    image: '/images/hero-atlas.webp',
    vibe: 'Serene, grounding, remote',
    bestFor: 'Yoga-hiking, meditation, digital detox',
    price: 'From 7,000 MAD per person (7-day mountain retreat)',
    description: 'High Atlas retreats offer an altitude shift in both geography and consciousness. Yoga shalas perched above valleys with snow-capped peaks provide a profound sense of stillness. Retreats here combine morning yoga with afternoon hikes through Berber villages, walnut groves, and alpine meadows. The mountain air, starlit skies, and absence of urban noise create ideal conditions for deep meditation and personal transformation.',
    highlights: ['Yoga amid snow-capped peaks', 'Hiking through Berber villages', 'Complete digital detox potential', 'Stargazing at altitude'],
  },
  {
    name: 'Marrakech Riads',
    icon: Sparkles,
    image: '/images/hero-yoga-rooftop.webp',
    vibe: 'Luxurious, cultural, sensory-rich',
    bestFor: 'Short breaks, luxury retreats, culture and yoga',
    price: 'From 8,000 MAD per person (5-day riad retreat)',
    description: 'Marrakech offers yoga within stunning restored riads and palace gardens, combining the energy of the medina with peaceful inner courtyards. Rooftop yoga sessions overlook the Atlas Mountains and minaret-studded skyline. Many Marrakech retreats include hammam rituals, cooking classes, and guided souk tours alongside daily practice. The Palmeraie district, just outside the old city, hosts larger retreat properties with pools and extensive gardens.',
    highlights: ['Rooftop yoga with Atlas views', 'Hammam and spa treatments included', 'Medina culture and souk exploration', 'Luxury riad accommodation'],
  },
  {
    name: 'Paradise Valley',
    icon: Leaf,
    image: '/images/hero-paradise-valley.webp',
    vibe: 'Tropical, hidden, nature-immersed',
    bestFor: 'Nature lovers, intimate retreats, Yin and restorative yoga',
    price: 'From 6,500 MAD per person (7-day retreat)',
    description: 'Nestled between Agadir and the Atlas foothills, Paradise Valley is a lush oasis of natural rock pools, cascading waterfalls, and palm-fringed gorges. Small boutique retreats here offer an intimate yoga experience surrounded by extraordinary natural beauty. The turquoise pools provide natural cold plunges after practice, and the tropical microclimate allows outdoor yoga year-round. Paradise Valley retreats tend to be smaller and more personal than those in busier locations.',
    highlights: ['Natural rock pools for cold plunges', 'Lush palm-fringed gorge setting', 'Intimate boutique atmosphere', 'Tropical microclimate year-round'],
  },
  {
    name: 'Agadir & Tamraght',
    icon: Sun,
    image: '/images/hero-agadir.webp',
    vibe: 'Relaxed, sunny, beachfront',
    bestFor: 'Beginners, budget-friendly, beach yoga',
    price: 'From 4,500 MAD per person (7-day budget retreat)',
    description: 'Agadir and the neighboring village of Tamraght offer the most accessible and affordable yoga retreat experience in Morocco. A long golden beach, reliable sunshine, and modern infrastructure make Agadir perfect for first-time retreat-goers. Tamraght, perched on the hillside above, has a growing cluster of boutique yoga guesthouses with Atlantic views. The area combines beach yoga, rooftop sessions, and easy access to both Taghazout\'s surf breaks and Paradise Valley\'s natural pools.',
    highlights: ['Most affordable retreat area', 'Long golden beach for yoga', 'Easy airport access', 'Gateway to Taghazout and Paradise Valley'],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPES OF RETREATS
   ═══════════════════════════════════════════════════════════════ */

const retreatTypes = [
  {
    type: 'Yoga-Only Retreats',
    icon: Activity,
    description: 'Focused programs with two daily yoga sessions, pranayama, meditation, and yoga philosophy. Often include workshops on alignment, inversions, or specific styles. Ideal for deepening your practice without distractions.',
    duration: '5-14 days',
    price: 'From 5,000 MAD (5-day)',
  },
  {
    type: 'Yoga & Surf Retreats',
    icon: Waves,
    description: 'Morning surf lessons at Morocco\'s legendary Atlantic breaks followed by afternoon yoga to stretch, restore, and balance the body. No prior surf experience needed. The most popular retreat combo in Morocco.',
    duration: '7-10 days',
    price: 'From 5,500 MAD (7-day)',
  },
  {
    type: 'Yoga & Hiking Retreats',
    icon: Mountain,
    description: 'Atlas Mountain programs combining morning yoga with guided hikes through Berber villages, alpine meadows, and mountain passes. The physical challenge of hiking paired with yoga\'s restorative balance creates a deeply satisfying retreat.',
    duration: '5-10 days',
    price: 'From 7,000 MAD (7-day)',
  },
  {
    type: 'Meditation & Mindfulness Retreats',
    icon: Sunrise,
    description: 'Silent or semi-silent programs focused on Vipassana, Zen, or loving-kindness meditation. Often set in remote Atlas or Sahara locations where natural stillness supports inner quiet. May include gentle yoga, breathwork, and journaling.',
    duration: '3-10 days',
    price: 'From 6,000 MAD (5-day)',
  },
  {
    type: 'Detox & Yoga Retreats',
    icon: Leaf,
    description: 'Combine daily yoga with clean plant-based Moroccan cuisine, fresh juices, hammam treatments, and digital detox. Programs focus on resetting the body and mind through movement, nutrition, and stillness.',
    duration: '5-14 days',
    price: 'From 8,000 MAD (7-day)',
  },
  {
    type: 'Yoga Teacher Training (YTT)',
    icon: Award,
    description: 'Intensive 200-hour or 500-hour teacher training programs recognized by Yoga Alliance. Morocco\'s climate, affordability, and inspiring settings make it an increasingly popular destination for YTT certification.',
    duration: '21-30 days',
    price: 'From 18,000 MAD (200-hour)',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT IS TYPICALLY INCLUDED
   ═══════════════════════════════════════════════════════════════ */

const inclusions = [
  { item: 'Accommodation (shared or private rooms)', icon: Bed },
  { item: 'Daily yoga classes (usually 2 per day)', icon: Activity },
  { item: 'Healthy meals (breakfast, lunch, dinner)', icon: Coffee },
  { item: 'Meditation and pranayama sessions', icon: Wind },
  { item: 'One or more excursions (souk visit, hammam, hike)', icon: Compass },
  { item: 'Airport transfer (often included or available)', icon: MapPin },
  { item: 'Yoga mats, blocks, and props', icon: CheckCircle },
  { item: 'Herbal teas and filtered water throughout the day', icon: Heart },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: PRICE GUIDE
   ═══════════════════════════════════════════════════════════════ */

const priceGuide = [
  {
    tier: 'Budget',
    icon: Wallet,
    priceRange: 'From 4,000 - 7,000 MAD per person (7 days)',
    accommodation: 'Shared dorm or twin room',
    meals: 'Three meals daily (communal style)',
    yoga: 'One to two group classes per day',
    extras: 'Basic excursion, communal areas',
    bestFor: 'Solo travelers, students, backpackers',
  },
  {
    tier: 'Mid-Range',
    icon: Star,
    priceRange: 'From 8,000 - 15,000 MAD per person (7 days)',
    accommodation: 'Private room with ensuite bathroom',
    meals: 'Three healthy meals plus snacks and juices',
    yoga: 'Two daily classes, meditation, pranayama',
    extras: 'One hammam treatment, one excursion, pool access',
    bestFor: 'Most retreat-goers, couples, small groups',
  },
  {
    tier: 'Luxury',
    icon: Gem,
    priceRange: 'From 18,000 - 50,000 MAD per person (7 days)',
    accommodation: 'Luxury suite or private villa',
    meals: 'Gourmet plant-forward cuisine, private dining options',
    yoga: 'Semi-private or private sessions, multiple styles',
    extras: 'Daily spa treatments, private excursions, personal wellness consultation',
    bestFor: 'Luxury travelers, special occasions, deep transformation',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST TIME FOR RETREATS
   ═══════════════════════════════════════════════════════════════ */

const seasonalGuide = [
  {
    season: 'Spring (March - May)',
    icon: Leaf,
    temps: '20-28 C',
    description: 'The ideal season for yoga retreats anywhere in Morocco. Wildflowers blanket the Atlas valleys, temperatures are perfect for outdoor practice, and the Atlantic coast is warming up. Peak retreat season with the widest selection of programs.',
    bestLocations: 'All locations, especially Atlas Mountains and Marrakech',
  },
  {
    season: 'Summer (June - August)',
    icon: Sun,
    temps: '25-40 C',
    description: 'Coastal retreats in Essaouira, Taghazout, and Agadir remain comfortable with Atlantic breezes keeping temperatures at 22-28 C. Avoid inland Marrakech and Atlas retreats where heat can exceed 40 C. Early morning and sunset yoga sessions are the norm.',
    bestLocations: 'Essaouira, Taghazout, Agadir, coastal areas',
  },
  {
    season: 'Autumn (September - November)',
    icon: Wind,
    temps: '18-30 C',
    description: 'Excellent conditions as summer heat subsides. October is particularly magical with golden light, warm seas for swimming, and fewer crowds than spring. Many retreat centers offer special autumn programs as the new season begins.',
    bestLocations: 'All locations, especially coastal and Atlas',
  },
  {
    season: 'Winter (December - February)',
    icon: Calendar,
    temps: '12-22 C',
    description: 'Coastal Morocco remains mild and sunny, making it a popular winter escape from European cold. Agadir and the southern coast enjoy 18-22 C. Perfect for a sunshine yoga break when northern Europe is grey. Some Atlas retreats close due to snow.',
    bestLocations: 'Agadir, Essaouira, Taghazout, southern coast',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TYPICAL DAILY SCHEDULE
   ═══════════════════════════════════════════════════════════════ */

const dailySchedule = [
  { time: '07:00 - 07:30', activity: 'Sunrise meditation and pranayama (breathwork)', icon: Sunrise },
  { time: '07:30 - 09:00', activity: 'Morning yoga class (Vinyasa, Hatha, or Ashtanga)', icon: Activity },
  { time: '09:00 - 10:00', activity: 'Healthy breakfast with fresh juices and Moroccan mint tea', icon: Coffee },
  { time: '10:00 - 13:00', activity: 'Free time: pool, beach, reading, or optional excursion', icon: Sun },
  { time: '13:00 - 14:00', activity: 'Lunch featuring fresh Moroccan plant-forward cuisine', icon: Leaf },
  { time: '14:00 - 16:00', activity: 'Free time: spa treatment, hammam, or personal practice', icon: Heart },
  { time: '16:30 - 18:00', activity: 'Afternoon yoga class (Yin, Restorative, or workshop)', icon: Wind },
  { time: '18:00 - 18:30', activity: 'Sunset meditation or guided relaxation', icon: Sparkles },
  { time: '19:00 - 20:00', activity: 'Communal dinner with group', icon: Users },
  { time: '20:00 onwards', activity: 'Evening circle, journaling, stargazing, or rest', icon: Star },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MOROCCO VS OTHER DESTINATIONS
   ═══════════════════════════════════════════════════════════════ */

const comparisonData = [
  { destination: 'Morocco', weekCost: 'From 8,000 MAD', flight: '3-4 hrs from Europe', climate: 'Year-round sunshine', unique: 'Hammam, surf, Atlas Mountains, cultural depth' },
  { destination: 'Bali', weekCost: 'From 18,000 MAD', flight: '14-18 hrs from Europe', climate: 'Tropical (monsoon season)', unique: 'Rice terraces, Hindu temples, ubiquitous wellness' },
  { destination: 'Costa Rica', weekCost: 'From 22,000 MAD', flight: '10-12 hrs from Europe', climate: 'Tropical (rainy season Jun-Nov)', unique: 'Rainforest, wildlife, Pacific surf' },
  { destination: 'Portugal', weekCost: 'From 15,000 MAD', flight: '2-3 hrs from Europe', climate: 'Mild but cooler winters', unique: 'Algarve coast, European convenience' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CHOOSING THE RIGHT RETREAT
   ═══════════════════════════════════════════════════════════════ */

const choosingTips = [
  {
    title: 'Check Teacher Credentials',
    icon: ShieldCheck,
    tip: 'Look for teachers registered with Yoga Alliance (RYT-200 or RYT-500). Experienced teachers with international training offer safer, more effective instruction. Read their bios and teaching style descriptions carefully.',
  },
  {
    title: 'Read Recent Reviews',
    icon: MessageCircle,
    tip: 'Check reviews on Retreat Guru, BookRetreats, TripAdvisor, and Google. Look for consistent positive feedback on teaching quality, food, accommodation, and organization. Recent reviews (within 12 months) are most reliable.',
  },
  {
    title: 'Match Your Yoga Style',
    icon: BookOpen,
    tip: 'Vinyasa for dynamic flow, Hatha for foundational alignment, Yin for deep stretching, Ashtanga for disciplined practice, Restorative for relaxation. Choose a retreat that teaches the style you want to explore or deepen.',
  },
  {
    title: 'Consider Group Size',
    icon: Users,
    tip: 'Smaller groups (6-12 people) offer more personal attention and deeper connection. Larger groups (15-25) can be more social and affordable. Know your preference and ask the retreat about typical group sizes before booking.',
  },
  {
    title: 'Verify What is Included',
    icon: CheckCircle,
    tip: 'Confirm whether the price covers airport transfers, excursions, spa treatments, and all meals. Some retreats quote base prices that exclude significant extras. A clear breakdown avoids surprises and helps you compare accurately.',
  },
  {
    title: 'Assess the Location',
    icon: MapPin,
    tip: 'Remote Atlas or desert retreats offer deep immersion but limited nearby amenities. Coastal retreats give beach access and town exploration. Marrakech retreats combine yoga with cultural experiences. Choose based on how much solitude or stimulation you want.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WHAT TO PACK
   ═══════════════════════════════════════════════════════════════ */

const packingList = [
  { item: 'Comfortable yoga clothing (breathable, flexible)', icon: CheckCircle },
  { item: 'Light layers for cool mornings and evenings', icon: CheckCircle },
  { item: 'Modest clothing for town visits (covering shoulders and knees)', icon: CheckCircle },
  { item: 'Swimsuit for pools, beaches, and hammam visits', icon: CheckCircle },
  { item: 'Sunscreen (SPF 50+), hat, and quality sunglasses', icon: CheckCircle },
  { item: 'Reusable water bottle (hydration is essential)', icon: CheckCircle },
  { item: 'Journal and pen for reflection and intention-setting', icon: CheckCircle },
  { item: 'Personal yoga mat if you prefer your own (most retreats provide)', icon: CheckCircle },
  { item: 'Hiking shoes if your retreat includes mountain walks', icon: CheckCircle },
  { item: 'Any personal supplements, medications, or health products', icon: CheckCircle },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  { title: 'Yoga in Morocco', href: '/yoga', description: 'Complete guide to yoga practice and classes across Morocco' },
  { title: 'Morocco Wellness Retreats', href: '/morocco-wellness-retreats', description: 'Broader wellness retreats including hammam, spa, and holistic healing' },
  { title: 'Wellness Travel Morocco', href: '/wellness', description: 'Wellness tourism overview, destinations, and planning tips' },
  { title: 'Morocco Spa Guide', href: '/morocco-spa-guide', description: 'Traditional hammam, luxury spas, and signature treatments' },
  { title: 'Spa Experiences', href: '/spa', description: 'The best spa experiences and hammam rituals across Morocco' },
  { title: 'Essaouira Guide', href: '/essaouira', description: 'Complete guide to the bohemian coastal city and top yoga destination' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoYogaRetreatsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ───────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-[420px]">
        <img
          src="/images/hero-yoga-rooftop.webp"
          alt="Rooftop yoga session in Morocco at sunrise with panoramic views of traditional Moroccan architecture and distant Atlas Mountains"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="container-morocco relative z-10 flex h-full flex-col justify-end pb-12">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4 flex items-center gap-1 text-sm text-white/80">
            <Link href="/" className="flex items-center gap-1 hover:text-white"><Home className="h-3.5 w-3.5" /> Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white font-medium">Yoga Retreats Morocco</span>
          </nav>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-3xl">
            Best Yoga Retreats in Morocco 2026
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/90 font-[family-name:var(--font-heading)]">
            From surf-yoga on the Atlantic coast to mountain meditation in the Atlas, discover Morocco&apos;s most transformative yoga retreats with prices, locations, and expert booking advice.
          </p>
        </div>
      </section>

      {/* ── Introduction ───────────────────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
            Your Journey to Inner Peace Starts Here
          </h2>
          <p className="mt-5 text-gray-700 leading-relaxed text-lg">
            Morocco has quietly become one of the world&apos;s most compelling yoga retreat destinations. Where else can you practice sun salutations on a rooftop overlooking ancient medina rooftops, surf Atlantic waves before an afternoon Vinyasa flow, or meditate in silence beneath the vast Saharan sky? With over 300 days of sunshine, landscapes that range from tropical valleys to snow-capped peaks, a rich wellness heritage built on centuries of hammam tradition, and prices that are 40-60% lower than equivalent retreats in Bali or Costa Rica, Morocco offers a yoga retreat experience that is as affordable as it is unforgettable.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-lg">
            Whether you are a complete beginner seeking your first retreat experience or an advanced practitioner looking for teacher training certification, this guide covers everything you need to choose, book, and prepare for the perfect yoga retreat in Morocco.
          </p>
        </div>
      </section>

      {/* ── Why Morocco for Yoga ───────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
              Why Choose Morocco for a Yoga Retreat?
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Six reasons Morocco has become a world-class yoga retreat destination
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyMorocco.map((reason) => (
              <div key={reason.title} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A0522D]/10">
                    <reason.icon className="h-5 w-5 text-[#A0522D]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900">{reason.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top Yoga Retreat Locations ─────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
            Top Yoga Retreat Locations in Morocco
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            From bohemian coastal towns to remote mountain valleys, each location offers a unique retreat experience
          </p>
        </div>
        <div className="space-y-8">
          {retreatLocations.map((location, idx) => (
            <div key={location.name} className={`card-moroccan overflow-hidden md:flex ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="md:w-2/5 relative min-h-[240px]">
                <img
                  src={location.image}
                  alt={`Yoga retreat setting in ${location.name}, Morocco showing the natural landscape and atmosphere`}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:w-3/5">
                <div className="flex items-center gap-2 mb-1">
                  <location.icon className="h-5 w-5 text-[#A0522D]" />
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">{location.name}</h3>
                </div>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-3 font-[family-name:var(--font-heading)]">
                  <span className="flex items-center gap-1"><Heart className="h-3.5 w-3.5 text-[#C4960C]" /> {location.vibe}</span>
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-[#C4960C]" /> {location.bestFor}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5 text-[#C4960C]" /> {location.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{location.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {location.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 shrink-0" /> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Types of Retreats ──────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
              Types of Yoga Retreats in Morocco
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              Find the retreat style that matches your goals, fitness level, and interests
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {retreatTypes.map((rt) => (
              <div key={rt.type} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4960C]/10">
                    <rt.icon className="h-5 w-5 text-[#C4960C]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900">{rt.type}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{rt.description}</p>
                <div className="flex flex-wrap gap-3 text-xs text-gray-500 border-t pt-3">
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {rt.duration}</span>
                  <span className="flex items-center gap-1"><DollarSign className="h-3.5 w-3.5" /> {rt.price}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400 italic">
            Prices are indicative starting rates in Moroccan Dirhams (MAD). Seasonal pricing and availability may vary.
          </p>
        </div>
      </section>

      {/* ── What is Typically Included ─────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
              What&apos;s Typically Included
            </h2>
            <p className="mt-3 text-gray-600 font-[family-name:var(--font-heading)]">
              Most mid-range yoga retreats in Morocco include the following in their package price
            </p>
          </div>
          <div className="card-moroccan p-6">
            <ul className="grid gap-4 sm:grid-cols-2">
              {inclusions.map((inc) => (
                <li key={inc.item} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A0522D]/10 shrink-0 mt-0.5">
                    <inc.icon className="h-4 w-4 text-[#A0522D]" />
                  </div>
                  <span className="text-gray-700 text-sm">{inc.item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg bg-[#C4960C]/5 border border-[#C4960C]/20 p-4 flex gap-3">
              <Info className="h-5 w-5 text-[#C4960C] shrink-0 mt-0.5" />
              <p className="text-sm text-gray-600">
                <strong>Pro tip:</strong> Always confirm exactly what is included before booking. Budget retreats may exclude airport transfers and excursions, while luxury retreats often include daily spa treatments and private sessions not offered at lower tiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Typical Day Schedule ──────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
                A Typical Day at a Morocco Yoga Retreat
              </h2>
              <p className="mt-3 text-gray-600 font-[family-name:var(--font-heading)]">
                While every retreat is different, here is a sample daily schedule to give you a sense of the rhythm
              </p>
            </div>
            <div className="card-moroccan p-6">
              <ul className="space-y-3">
                {dailySchedule.map((slot) => (
                  <li key={slot.time} className="flex items-start gap-4 py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm font-mono text-[#A0522D] font-medium whitespace-nowrap w-28 shrink-0">{slot.time}</span>
                    <div className="flex items-center gap-2">
                      <slot.icon className="h-4 w-4 text-[#C4960C] shrink-0" />
                      <span className="text-sm text-gray-700">{slot.activity}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-gray-400 italic text-center">
                Schedule is illustrative. Each retreat designs its own daily rhythm. Surf-yoga retreats swap morning yoga for surf sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Morocco vs Other Destinations ──────────────────────── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
            Morocco vs. Other Yoga Retreat Destinations
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            How Morocco compares to popular alternatives on cost, travel time, and unique offerings
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#A0522D]/20">
                <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-semibold text-gray-900">Destination</th>
                <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-semibold text-gray-900">7-Day Mid-Range Cost</th>
                <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-semibold text-gray-900">Flight from Europe</th>
                <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-semibold text-gray-900">Climate</th>
                <th className="py-3 px-4 font-[family-name:var(--font-heading)] font-semibold text-gray-900">Unique Selling Point</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.destination} className={`border-b border-gray-100 ${row.destination === 'Morocco' ? 'bg-[#A0522D]/5 font-medium' : ''}`}>
                  <td className="py-3 px-4 text-gray-900">{row.destination}</td>
                  <td className="py-3 px-4 text-gray-600">{row.weekCost}</td>
                  <td className="py-3 px-4 text-gray-600">{row.flight}</td>
                  <td className="py-3 px-4 text-gray-600">{row.climate}</td>
                  <td className="py-3 px-4 text-gray-600">{row.unique}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-400 italic text-center">
          Costs are approximate mid-range 7-day retreat prices including accommodation and meals. Actual prices vary by season and specific retreat. All costs shown in MAD equivalent.
        </p>
      </section>

      {/* ── Price Guide ────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
              Yoga Retreat Price Guide
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
              What to expect at each price tier for a 7-day yoga retreat in Morocco
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {priceGuide.map((tier) => (
              <div key={tier.tier} className="card-moroccan p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A0522D]/10">
                    <tier.icon className="h-5 w-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900">{tier.tier}</h3>
                    <p className="text-xs text-[#C4960C] font-medium">{tier.priceRange}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 flex-1 text-sm text-gray-600">
                  <li className="flex items-start gap-2"><Bed className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" /> {tier.accommodation}</li>
                  <li className="flex items-start gap-2"><Coffee className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" /> {tier.meals}</li>
                  <li className="flex items-start gap-2"><Activity className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" /> {tier.yoga}</li>
                  <li className="flex items-start gap-2"><Sparkles className="h-4 w-4 text-gray-400 shrink-0 mt-0.5" /> {tier.extras}</li>
                </ul>
                <div className="mt-4 pt-3 border-t text-xs text-gray-500">
                  <span className="flex items-center gap-1"><Users className="h-3.5 w-3.5" /> Best for: {tier.bestFor}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-gray-400 italic">
            All prices in Moroccan Dirhams (MAD). Seasonal pricing applies; high season (March-May, September-November) may be 15-25% higher. Verify current rates with each retreat directly.
          </p>
        </div>
      </section>

      {/* ── Best Time for Retreats ─────────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
            Best Time for a Yoga Retreat in Morocco
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Plan your retreat around the seasons for the best experience at your chosen location
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {seasonalGuide.map((s) => (
            <div key={s.season} className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C4960C]/10">
                  <s.icon className="h-5 w-5 text-[#C4960C]" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-gray-900">{s.season}</h3>
                  <p className="text-xs text-gray-500">{s.temps}</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">{s.description}</p>
              <p className="text-xs text-[#A0522D] font-medium flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" /> {s.bestLocations}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── What to Pack ───────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
                What to Pack for Your Yoga Retreat
              </h2>
              <p className="mt-3 text-gray-600 font-[family-name:var(--font-heading)]">
                A practical packing checklist for yoga retreats in Morocco
              </p>
            </div>
            <div className="card-moroccan p-6">
              <ul className="grid gap-3 sm:grid-cols-2">
                {packingList.map((p) => (
                  <li key={p.item} className="flex items-start gap-2 text-sm text-gray-700">
                    <p.icon className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    {p.item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-lg bg-amber-50 border border-amber-200 p-4 flex gap-3">
                <Info className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600">
                  <strong>Weather note:</strong> Mornings and evenings can be surprisingly cool even in warm months, especially at altitude or on the coast. Pack at least one warm layer for early morning practice and evening meditation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Choosing the Right Retreat ─────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
            How to Choose the Right Yoga Retreat
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto font-[family-name:var(--font-heading)]">
            Six essential factors to evaluate before booking your yoga retreat in Morocco
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {choosingTips.map((tip) => (
            <div key={tip.title} className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#A0522D]/10">
                  <tip.icon className="h-5 w-5 text-[#A0522D]" />
                </div>
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-gray-900">{tip.title}</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="container-morocco">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-gray-600 font-[family-name:var(--font-heading)]">
                Common questions about yoga retreats in Morocco, answered
              </p>
            </div>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq) => (
                <details key={faq.name} className="card-moroccan group">
                  <summary className="flex cursor-pointer items-center justify-between p-5 font-[family-name:var(--font-heading)] font-medium text-gray-900 hover:text-[#A0522D]">
                    <span className="pr-4">{faq.name}</span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t pt-4">
                    {faq.acceptedAnswer.text}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ─────────────────────────────────────── */}
      <section className="container-morocco py-14">
        <div className="text-center mb-10">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#A0522D]">
            Related Morocco Guides
          </h2>
          <p className="mt-3 text-gray-600 font-[family-name:var(--font-heading)]">
            Continue exploring wellness, yoga, and spa experiences across Morocco
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[#A0522D]/30 transition-colors">
              <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors flex items-center gap-2">
                {guide.title}
                <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="mt-2 text-sm text-gray-500">{guide.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA Section ────────────────────────────────────────── */}
      <section className="bg-[#A0522D] py-14">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white">
            Ready to Find Your Perfect Yoga Retreat?
          </h2>
          <p className="mt-4 text-white/90 max-w-2xl mx-auto text-lg">
            Explore our city guides, wellness resources, and destination pages to plan your transformative yoga journey in Morocco.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-wellness-retreats"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-[family-name:var(--font-heading)] font-semibold text-[#A0522D] hover:bg-gray-100 transition-colors"
            >
              Wellness Retreats <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-[family-name:var(--font-heading)] font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Explore Essaouira <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

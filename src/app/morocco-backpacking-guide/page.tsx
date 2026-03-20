import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building,
  BookOpen,
  ShieldCheck,
  Star,
  MapPin,
  Banknote,
  HelpCircle,
  Wallet,
  Globe,
  Clock,
  Utensils,
  Bus,
  Bed,
  Lightbulb,
  Heart,
  Compass,
  Mountain,
  Backpack,
  Users,
  Shirt,
  Thermometer,
  Sun,
  Route,
  Footprints,
  Coffee,
  Lock,
  Smartphone,
} from 'lucide-react';

/* =================================================================
   CONSTANTS
   ================================================================= */

const BASE_URL = 'https://citytoursmorocco.com';

/* =================================================================
   SEO METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Backpacking Morocco Guide 2026 | Routes, Budget & Tips',
  description:
    'Complete backpacking Morocco guide for 2026. Best backpacking routes, daily budget breakdown from 300 MAD/day, cheapest hostels, budget food, transport tips, must-visit cities, safety advice, and packing essentials for backpackers.',
  keywords: [
    'backpacking Morocco',
    'Morocco backpacking guide',
    'backpacking Morocco on a budget',
    'Morocco backpacker route',
    'cheap travel Morocco',
    'Morocco hostel guide',
    'backpacking Morocco itinerary',
    'Morocco budget backpacking',
    'Morocco backpacker tips',
    'Morocco backpacking cost',
    'Morocco backpacking safety',
    'Morocco backpacking route north to south',
    'backpacking Morocco 2026',
    'Morocco solo backpacking',
    'Morocco backpacker food',
    'Morocco backpacker transport',
    'Morocco backpacking packing list',
    'cheapest hostels Morocco',
    'backpacking Marrakech Fes Chefchaouen',
  ],
  openGraph: {
    title: 'Backpacking Morocco Guide 2026 | Routes, Budget & Tips',
    description:
      'Plan your Morocco backpacking trip. Best routes, daily budgets from 300 MAD, cheapest hostels, street food guide, transport on a budget, and safety tips for backpackers.',
    url: `${BASE_URL}/morocco-backpacking-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-backpacking.webp`,
        width: 1200,
        height: 630,
        alt: 'Backpacker walking through a narrow alleyway in a Moroccan medina with colorful walls and hanging lanterns',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Backpacking Morocco Guide 2026 | Routes, Budget & Tips',
    description:
      'Everything you need to backpack Morocco on a budget. Routes, hostels, food, transport, safety tips, and packing essentials.',
    images: [`${BASE_URL}/images/hero-backpacking.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-backpacking-guide` },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-backpacking-guide`,
  name: 'Backpacking Morocco Guide 2026 | Routes, Budget & Tips',
  description:
    'Complete backpacking Morocco guide. Best routes, daily budget breakdown, cheapest hostels, budget food, transport tips, must-visit cities, safety advice, and packing essentials.',
  url: `${BASE_URL}/morocco-backpacking-guide`,
  image: `${BASE_URL}/images/hero-backpacking.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-backpacking-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Backpacking Morocco Guide', item: `${BASE_URL}/morocco-backpacking-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to backpack Morocco per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget backpackers can travel Morocco for from 300-500 MAD ($30-50 USD) per day. This covers a hostel dorm bed (from 80-150 MAD), street food meals (from 80-120 MAD), local transport (from 20-50 MAD), and free or low-cost activities. A comfortable two-week backpacking trip costs from 5,000-7,000 MAD total excluding international flights.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for backpackers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is generally safe for backpackers. Violent crime against tourists is rare. The main concerns are petty theft in crowded areas, aggressive touts in medinas, and occasional scams. Keep valuables secure, stay aware of your surroundings, and use common sense. Solo female backpackers should dress modestly and be prepared for occasional unwanted attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best backpacking route through Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most popular backpacking route runs from Tangier south through Chefchaouen, Fes, the Sahara Desert, and down to Marrakech. This north-to-south route takes 2-3 weeks and covers Morocco\'s highlights. Alternative routes include the Imperial Cities Loop (Rabat, Meknes, Fes, Marrakech) and the Atlantic Coast route (Tangier, Rabat, Casablanca, Essaouira, Agadir).',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I pack for backpacking Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Essential items include lightweight breathable clothing that covers shoulders and knees, a warm layer for mountains and desert nights, comfortable walking shoes, a headlamp, a daypack, a quick-dry towel, sunscreen, a reusable water bottle, a padlock for hostel lockers, and a money belt. Pack light since you will carry everything through narrow medina streets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I backpack Morocco as a solo female traveler?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, many solo female travelers backpack Morocco successfully. Dress conservatively covering shoulders and knees, avoid walking alone in poorly lit areas at night, and stay in well-reviewed hostels with female-only dorms. Many hostels have female-only rooms. Morocco\'s tourist infrastructure is well-developed and locals are generally welcoming and helpful.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time to backpack Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to backpack Morocco is March to May and September to November when temperatures are mild and crowds are manageable. Summer (June-August) is extremely hot inland but good for coastal towns. Winter (December-February) is ideal for the Sahara but cold in the mountains. Shoulder seasons offer the best balance of weather, prices, and availability.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get around Morocco on a backpacker budget?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest transport options are CTM and Supratours buses (from 80-200 MAD between cities), ONCF trains (from 90-150 MAD in second class), shared grand taxis (from 20-60 MAD per seat), and city buses (from 4-6 MAD). Avoid private taxis for intercity travel. Book CTM buses online in advance for popular routes during peak season.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are there good hostels in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has an excellent hostel scene, especially in Marrakech, Fes, Chefchaouen, and Essaouira. Dorm beds cost from 80-150 MAD per night and many include breakfast, rooftop terraces, and social events. Popular chains and independent hostels offer clean facilities, WiFi, and communal kitchens. Book ahead in peak season as the best hostels fill up quickly.',
      },
    },
  ],
};

/* =================================================================
   DATA: BACKPACKING ROUTES
   ================================================================= */

const backpackingRoutes = [
  {
    name: 'North to South Classic',
    duration: '2-3 weeks',
    icon: Route,
    highlight: true,
    stops: [
      { city: 'Tangier', days: '1-2 days', note: 'Gateway from Europe, medina exploration' },
      { city: 'Chefchaouen', days: '2-3 days', note: 'Blue city, mountain hikes, chill vibes' },
      { city: 'Fes', days: '2-3 days', note: 'World\'s largest car-free medina, tanneries' },
      { city: 'Merzouga / Sahara', days: '2-3 days', note: 'Desert camping, camel trek, sunrise' },
      { city: 'Todra / Dades Gorges', days: '1-2 days', note: 'Canyon hikes, dramatic scenery' },
      { city: 'Marrakech', days: '3-4 days', note: 'Jemaa el-Fna, souks, day trips' },
      { city: 'Essaouira', days: '2-3 days', note: 'Beach, surfing, seafood, relaxation' },
    ],
  },
  {
    name: 'Imperial Cities Loop',
    duration: '10-14 days',
    icon: Building,
    highlight: false,
    stops: [
      { city: 'Casablanca', days: '1 day', note: 'Hassan II Mosque, transit hub' },
      { city: 'Rabat', days: '1-2 days', note: 'Kasbah des Oudaias, Chellah ruins' },
      { city: 'Meknes', days: '1-2 days', note: 'Cheapest imperial city, Bab Mansour' },
      { city: 'Volubilis', days: 'Half day', note: 'Roman ruins day trip from Meknes' },
      { city: 'Fes', days: '2-3 days', note: 'Medina, tanneries, food tours' },
      { city: 'Marrakech', days: '3-4 days', note: 'Souks, palaces, nightlife' },
    ],
  },
  {
    name: 'Atlantic Coast Route',
    duration: '10-14 days',
    icon: Globe,
    highlight: false,
    stops: [
      { city: 'Tangier', days: '1-2 days', note: 'Cap Spartel, Hercules Caves' },
      { city: 'Asilah', days: '1-2 days', note: 'Artsy coastal town, murals, beaches' },
      { city: 'Rabat', days: '1-2 days', note: 'Capital city, surf at Oudaias beach' },
      { city: 'Casablanca', days: '1 day', note: 'Quick stop, Hassan II Mosque' },
      { city: 'Essaouira', days: '2-3 days', note: 'Wind city, surfing, seafood' },
      { city: 'Taghazout', days: '2-3 days', note: 'Surf village, yoga, beach life' },
      { city: 'Agadir', days: '1-2 days', note: 'Modern beach resort, Souss Massa' },
    ],
  },
] as const;

/* =================================================================
   DATA: DAILY BUDGET BREAKDOWN
   ================================================================= */

const dailyBudget = [
  { category: 'Hostel dorm bed', cost: 'From 80-150 MAD', icon: Bed, detail: 'Shared dorm, often includes breakfast' },
  { category: 'Food (3 meals)', cost: 'From 80-120 MAD', icon: Utensils, detail: 'Street food, market stalls, local cafes' },
  { category: 'Local transport', cost: 'From 20-50 MAD', icon: Bus, detail: 'City buses, walking, shared taxis' },
  { category: 'Activities', cost: 'From 30-80 MAD', icon: Compass, detail: 'Free sites, budget museums, hiking' },
  { category: 'Miscellaneous', cost: 'From 30-50 MAD', icon: Coffee, detail: 'Water, mint tea, SIM data, snacks' },
] as const;

/* =================================================================
   DATA: BUDGET HOSTELS
   ================================================================= */

const budgetHostels = [
  {
    city: 'Marrakech',
    hostels: [
      { name: 'Hostel Kaktus', price: 'From 90 MAD', note: 'Rooftop terrace, central location, daily events' },
      { name: 'Equity Point', price: 'From 100 MAD', note: 'Pool, riad style, near Jemaa el-Fna' },
      { name: 'Waka Waka Hostel', price: 'From 85 MAD', note: 'Social atmosphere, free breakfast, cooking classes' },
    ],
  },
  {
    city: 'Fes',
    hostels: [
      { name: 'Funky Fes', price: 'From 80 MAD', note: 'Inside the medina, rooftop views, walking tours' },
      { name: 'Dar Seffarine', price: 'From 100 MAD', note: 'Beautiful riad conversion, near Seffarine Square' },
      { name: 'Medina Social Club', price: 'From 90 MAD', note: 'Lively common areas, free tea, cultural events' },
    ],
  },
  {
    city: 'Chefchaouen',
    hostels: [
      { name: 'Olá! Che Hostel', price: 'From 80 MAD', note: 'Mountain views, colorful terrace, social vibe' },
      { name: 'Hostel Souika', price: 'From 70 MAD', note: 'Budget option in the medina, basic but clean' },
      { name: 'Casa Perleta', price: 'From 85 MAD', note: 'Traditional house, quiet courtyard, breakfast included' },
    ],
  },
  {
    city: 'Essaouira',
    hostels: [
      { name: 'Hostel des Voyageurs', price: 'From 80 MAD', note: 'Near the port, clean rooms, helpful staff' },
      { name: 'The Salty Pelican', price: 'From 90 MAD', note: 'Surf-focused, communal kitchen, beach gear rental' },
      { name: 'Moga Hostel', price: 'From 85 MAD', note: 'Modern design, rooftop, good WiFi' },
    ],
  },
] as const;

/* =================================================================
   DATA: BUDGET FOOD GUIDE
   ================================================================= */

const budgetFoods = [
  { item: 'Msemen (flatbread) with honey', price: 'From 3-5 MAD', where: 'Street vendors, early morning', icon: Utensils },
  { item: 'Harira soup (chickpea & lentil)', price: 'From 5-10 MAD', where: 'Snack stalls, evening', icon: Utensils },
  { item: 'Bocadillo sandwich', price: 'From 15-25 MAD', where: 'Sandwich shops everywhere', icon: Utensils },
  { item: 'Tagine at a local restaurant', price: 'From 30-50 MAD', where: 'Side street restaurants', icon: Star },
  { item: 'Couscous Friday lunch', price: 'From 25-40 MAD', where: 'Local restaurants, Fridays only', icon: Star },
  { item: 'Fresh orange juice', price: 'From 5-10 MAD', where: 'Juice stalls in every city', icon: Coffee },
  { item: 'Mint tea', price: 'From 5-10 MAD', where: 'Cafes, restaurants, everywhere', icon: Coffee },
  { item: 'Avocado smoothie', price: 'From 15-25 MAD', where: 'Juice bars in tourist areas', icon: Coffee },
  { item: 'Market fruit (per kg)', price: 'From 5-15 MAD', where: 'Souks and neighborhood markets', icon: Utensils },
  { item: 'Bread loaf (khobz)', price: 'From 1-3 MAD', where: 'Local bakeries (fernatchi)', icon: Utensils },
] as const;

/* =================================================================
   DATA: TRANSPORT OPTIONS
   ================================================================= */

const transportOptions = [
  { mode: 'CTM / Supratours bus', price: 'From 80-200 MAD', detail: 'Most popular backpacker transport. Comfortable, A/C, luggage storage. Book online.', icon: Bus },
  { mode: 'ONCF train (2nd class)', price: 'From 90-150 MAD', detail: 'Marrakech-Casablanca-Rabat-Fes corridor. Reliable and scenic.', icon: Clock },
  { mode: 'Shared grand taxi', price: 'From 20-60 MAD/seat', detail: 'Shared Mercedes between nearby towns. Cheap but cramped.', icon: MapPin },
  { mode: 'City bus', price: 'From 4-6 MAD', detail: 'Cheapest urban option. Crowded but covers main routes.', icon: Bus },
  { mode: 'Local petit taxi', price: 'From 10-30 MAD', detail: 'Within cities. Insist on the meter. Share with other passengers.', icon: MapPin },
  { mode: 'Al Boraq high-speed train', price: 'From 150-300 MAD', detail: 'Tangier-Casablanca in 2h10m. Worth the splurge for this route.', icon: Globe },
] as const;

/* =================================================================
   DATA: MUST-VISIT CITIES
   ================================================================= */

const backpackerCities = [
  {
    city: 'Marrakech',
    budget: 'From 350-500 MAD/day',
    icon: Star,
    highlights: 'The backpacker hub. Jemaa el-Fna square, labyrinthine souks, street food paradise, affordable hostels, and gateway to the Atlas Mountains and Sahara desert.',
    topTip: 'Eat at stall number 1 or 14 in Jemaa el-Fna for the cheapest, freshest food. Avoid ground floor stalls that pressure you.',
  },
  {
    city: 'Fes',
    budget: 'From 300-450 MAD/day',
    icon: Building,
    highlights: 'The intellectual capital. World\'s largest car-free medina, Chouara tanneries, incredible food scene, and fewer tourists than Marrakech means lower prices.',
    topTip: 'Hire an official guide for half a day (from 200 MAD) to learn the medina layout, then explore on your own for the rest of your stay.',
  },
  {
    city: 'Chefchaouen',
    budget: 'From 280-400 MAD/day',
    icon: Mountain,
    highlights: 'The famous blue city. Photogenic streets, mountain hiking in the Rif, peaceful atmosphere, budget guesthouses, and a welcome change of pace from hectic medinas.',
    topTip: 'Hike to the Spanish Mosque at sunset for free panoramic views. Stock up on cheap hashish-free local cheese and olives at the small daily market.',
  },
  {
    city: 'Essaouira',
    budget: 'From 300-450 MAD/day',
    icon: Globe,
    highlights: 'The wind city. Atlantic beaches, surfing, laid-back medina, affordable seafood grills at the port, art galleries, and a creative backpacker scene.',
    topTip: 'Eat fresh grilled fish at the port market for from 40-60 MAD including sides. Surfboard rental is from 100 MAD/day at the beach.',
  },
  {
    city: 'Merzouga',
    budget: 'From 400-600 MAD/day',
    icon: Sun,
    highlights: 'Gateway to the Sahara. Camel treks into Erg Chebbi dunes, desert camping under stars, sunrise over sand dunes, and a once-in-a-lifetime experience.',
    topTip: 'Book a 2-day/1-night desert tour from Marrakech or Fes (from 800-1,200 MAD) instead of arranging locally, which can cost more. Group tours are cheapest.',
  },
] as const;

/* =================================================================
   DATA: SAFETY TIPS
   ================================================================= */

const safetyTips = [
  {
    title: 'Secure your valuables',
    icon: Lock,
    detail: 'Use a money belt or neck pouch for your passport, cash, and cards. Keep your phone in a zipped pocket in crowded medinas. Use hostel lockers for electronics and documents.',
  },
  {
    title: 'Beware of common scams',
    icon: AlertTriangle,
    detail: 'Decline "free" tours from strangers who will demand payment later. Do not follow anyone claiming a street is "closed" to redirect you to a shop. Verify taxi meters are running.',
  },
  {
    title: 'Dress respectfully',
    icon: Shirt,
    detail: 'Cover shoulders and knees, especially in smaller towns and rural areas. This reduces unwanted attention and shows respect for local culture. Swimwear is only appropriate at the beach.',
  },
  {
    title: 'Stay connected',
    icon: Smartphone,
    detail: 'Buy a local Maroc Telecom or Inwi SIM card at the airport for from 30-50 MAD with data. Share your itinerary with someone back home. Most hostels have WiFi.',
  },
  {
    title: 'Trust your instincts',
    icon: ShieldCheck,
    detail: 'If a situation feels wrong, leave. Stick to well-lit streets at night. In medinas, follow the flow of locals rather than wandering empty alleys after dark.',
  },
  {
    title: 'Stay informed about health',
    icon: Heart,
    detail: 'Drink bottled or filtered water only. Avoid ice in drinks from street stalls. Eat at busy stalls with high turnover. Carry basic first aid and any prescription medications.',
  },
] as const;

/* =================================================================
   DATA: PACKING ESSENTIALS
   ================================================================= */

const packingEssentials = [
  { item: 'Lightweight backpack (40-50L)', category: 'Bags', icon: Backpack },
  { item: 'Daypack for city exploring', category: 'Bags', icon: Backpack },
  { item: 'Quick-dry travel towel', category: 'Essentials', icon: Shirt },
  { item: 'Headlamp or small flashlight', category: 'Essentials', icon: Sun },
  { item: 'Reusable water bottle with filter', category: 'Essentials', icon: Coffee },
  { item: 'Padlock for hostel lockers', category: 'Security', icon: Lock },
  { item: 'Money belt or neck pouch', category: 'Security', icon: Wallet },
  { item: 'Copies of passport and insurance', category: 'Security', icon: BookOpen },
  { item: 'Loose breathable clothing', category: 'Clothing', icon: Shirt },
  { item: 'Warm layer for mountains and desert nights', category: 'Clothing', icon: Thermometer },
  { item: 'Comfortable walking shoes', category: 'Clothing', icon: Footprints },
  { item: 'Sandals or flip-flops for hostels', category: 'Clothing', icon: Footprints },
  { item: 'Scarf or shawl (versatile cover-up)', category: 'Clothing', icon: Shirt },
  { item: 'Sunscreen SPF 50+', category: 'Health', icon: Sun },
  { item: 'Basic first aid kit', category: 'Health', icon: Heart },
  { item: 'Insect repellent', category: 'Health', icon: ShieldCheck },
] as const;

/* =================================================================
   DATA: FAQ
   ================================================================= */

const faqs = [
  {
    question: 'How much does it cost to backpack Morocco per day?',
    answer:
      'Budget backpackers can travel Morocco for from 300-500 MAD ($30-50 USD) per day. This covers a hostel dorm bed (from 80-150 MAD), street food meals (from 80-120 MAD), local transport (from 20-50 MAD), and free or low-cost activities. A comfortable two-week backpacking trip costs from 5,000-7,000 MAD total excluding international flights. Seasonal pricing can change, so always check current rates.',
  },
  {
    question: 'Is Morocco safe for backpackers?',
    answer:
      'Morocco is generally safe for backpackers. Violent crime against tourists is rare. The main concerns are petty theft in crowded areas, aggressive touts in medinas, and occasional scams. Keep valuables secure, stay aware of your surroundings, and use common sense. Solo female backpackers should dress modestly and be prepared for occasional unwanted attention, but thousands travel safely every year.',
  },
  {
    question: 'What is the best backpacking route through Morocco?',
    answer:
      'The most popular route runs north to south: Tangier, Chefchaouen, Fes, Merzouga (Sahara), Todra Gorge, Marrakech, and Essaouira over 2-3 weeks. This covers Morocco\'s highlights from blue city streets to desert dunes to Atlantic beaches. Alternative routes include the Imperial Cities Loop (10-14 days) and the Atlantic Coast Route (10-14 days).',
  },
  {
    question: 'What should I pack for backpacking Morocco?',
    answer:
      'Pack a 40-50L backpack, lightweight breathable clothing covering shoulders and knees, a warm layer for mountains and desert nights, comfortable walking shoes, a headlamp, a daypack, a quick-dry towel, sunscreen, a reusable water bottle, a padlock for hostel lockers, and a money belt. Keep it light since you will carry everything through narrow medina streets and onto crowded buses.',
  },
  {
    question: 'Can I backpack Morocco as a solo female traveler?',
    answer:
      'Yes, many solo female travelers backpack Morocco successfully. Dress conservatively covering shoulders and knees, avoid walking alone in poorly lit areas at night, and stay in well-reviewed hostels with female-only dorms. Morocco\'s tourist infrastructure is well developed and locals are generally welcoming. Join hostel group activities to meet other travelers and explore together.',
  },
  {
    question: 'What is the best time to backpack Morocco?',
    answer:
      'The best months are March to May and September to November when temperatures are mild and crowds manageable. Summer (June-August) is extremely hot inland but good for coastal towns like Essaouira and Taghazout. Winter (December-February) is ideal for the Sahara but cold in the Atlas Mountains. Shoulder seasons offer the best balance of weather, prices, and hostel availability.',
  },
  {
    question: 'How do I get around Morocco on a backpacker budget?',
    answer:
      'Use CTM and Supratours buses (from 80-200 MAD between cities), ONCF trains in second class (from 90-150 MAD), shared grand taxis (from 20-60 MAD per seat), and city buses (from 4-6 MAD). Book CTM buses online for popular routes in peak season. Avoid private taxis for intercity travel. Walking is the best way to explore medinas.',
  },
  {
    question: 'Are there good hostels in Morocco?',
    answer:
      'Morocco has an excellent hostel scene, especially in Marrakech, Fes, Chefchaouen, and Essaouira. Dorm beds cost from 80-150 MAD per night and many include breakfast, rooftop terraces, communal kitchens, and social events. Book ahead in peak season (March-May, September-November) as the best hostels fill up fast.',
  },
];

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function MoroccoBackpackingGuidePage() {
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
            backgroundImage: 'url(/images/hero-backpacking.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Backpacking Morocco Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Backpack className="w-4 h-4" />
            Backpacking Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Backpacking Morocco:
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the blue streets of Chefchaouen to Sahara sunrises, Morocco is one of
            the world&apos;s best backpacking destinations. Routes, budgets, hostels,
            and everything you need to explore on a shoestring.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- Overview -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Backpack Morocco?
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                <strong>Morocco is a backpacker&apos;s paradise</strong> that delivers extraordinary
                experiences without draining your wallet. With daily budgets starting from 300 MAD
                ($30 USD), you can sleep in atmospheric medina hostels, feast on street food tagines,
                trek through the Atlas Mountains, camp under Saharan stars, and surf Atlantic waves,
                all within a country smaller than California.
              </p>
              <p>
                The diversity is staggering. In two to three weeks, you can walk the
                blue-washed alleys of Chefchaouen, lose yourself in the medieval labyrinth of Fes,
                ride camels across Erg Chebbi dunes, haggle in Marrakech&apos;s souks, and eat
                grilled sardines on an Essaouira dock. The contrast between ancient imperial cities,
                Berber mountain villages, and coastal surf towns makes Morocco feel like several
                countries in one.
              </p>
              <p>
                All prices below are in <strong>Moroccan dirhams (MAD)</strong>. As of early 2026,
                1 USD equals approximately 9.5-10 MAD and 1 EUR equals approximately 10.5-11 MAD.
                Seasonal pricing can change, so always verify current rates before your trip.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <Wallet className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Daily Budget</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 300 MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Bed className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Hostel Dorm</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 80 MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Utensils className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Street Food Meal</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">From 15 MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Clock className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Ideal Trip</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">2-3 Weeks</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Best Backpacking Routes -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Backpacking Routes Through Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three proven routes that cover Morocco&apos;s highlights. Mix and match sections based on your timeframe and interests.
          </p>

          <div className="space-y-8">
            {backpackingRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div
                  key={route.name}
                  className={`card-moroccan p-6 ${route.highlight ? 'border-2 border-[var(--color-accent)]' : ''}`}
                >
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${route.highlight ? 'bg-[var(--color-accent)]/10' : 'bg-[var(--surface-muted)]'} flex items-center justify-center`}>
                        <RouteIcon className={`w-5 h-5 ${route.highlight ? 'text-[var(--color-accent)]' : 'text-[var(--color-gold)]'}`} />
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                    </div>
                    <span className="text-sm font-bold text-[var(--color-accent)]">{route.duration}</span>
                  </div>
                  <div className="space-y-3">
                    {route.stops.map((stop) => (
                      <div key={stop.city} className="flex items-start gap-3">
                        <div className="w-24 shrink-0">
                          <span className="text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded">
                            {stop.days}
                          </span>
                        </div>
                        <div>
                          <span className="text-sm font-medium text-[var(--text-primary)]">{stop.city}</span>
                          <p className="text-xs text-[var(--text-secondary)]">{stop.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {route.highlight && (
                    <div className="mt-4 p-3 bg-[var(--color-accent)]/5 rounded-lg">
                      <p className="text-xs text-[var(--text-secondary)]">
                        <Star className="w-3.5 h-3.5 inline text-[var(--color-gold)] mr-1" />
                        <strong>Most popular route.</strong> This north-to-south journey covers Morocco&apos;s greatest hits and works well for first-time visitors with 2-3 weeks.
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Daily Budget Breakdown -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget Breakdown for Backpackers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect spending per day as a budget backpacker in Morocco. Total: from 300-500 MAD ($30-50 USD) per day. Seasonal pricing can change.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Category</div>
              <div className="p-3 px-4">Daily Cost</div>
              <div className="p-3 px-4 col-span-2">Details</div>
            </div>
            {dailyBudget.map((item, i) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={item.category}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)] flex items-center gap-2">
                    <ItemIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    {item.category}
                  </div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.cost}</div>
                  <div className="p-3 px-4 col-span-2 text-[var(--text-muted)]">{item.detail}</div>
                </div>
              );
            })}
            <div className="grid grid-cols-4 gap-0 text-sm bg-[var(--color-accent)]/10 font-bold">
              <div className="p-3 px-4 text-[var(--text-primary)]">Total per day</div>
              <div className="p-3 px-4 text-[var(--color-accent)]">From 300-500 MAD</div>
              <div className="p-3 px-4 col-span-2 text-[var(--text-muted)]">~$30-50 USD at 2026 exchange rates</div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/20">
            <p className="text-sm text-[var(--text-secondary)]">
              <Lightbulb className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
              <strong>Two-week total:</strong> Budget from 5,000-7,000 MAD ($500-700 USD) for a 14-day backpacking trip, excluding international flights. Add from 800-1,200 MAD if you include a Sahara desert trip.
            </p>
          </div>
        </div>
      </section>

      {/* -- Budget Hostels -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Cheapest Hostels for Backpackers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Top-rated budget hostels across Morocco&apos;s most popular backpacker cities. Dorm bed prices for the lowest available rate. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {budgetHostels.map((cityData) => (
              <div key={cityData.city} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  {cityData.city}
                </h3>
                <div className="space-y-3">
                  {cityData.hostels.map((hostel) => (
                    <div key={hostel.name} className="flex items-start gap-3 p-3 bg-[var(--surface-muted)] rounded-lg">
                      <Bed className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-[var(--text-primary)]">{hostel.name}</span>
                          <span className="text-xs font-bold text-[var(--color-accent)]">{hostel.price}</span>
                        </div>
                        <p className="text-xs text-[var(--text-muted)] mt-1">{hostel.note}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Budget Food Guide -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Utensils className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Budget Food Guide for Backpackers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Eat like a local and spend from 80-120 MAD per day on delicious Moroccan food. The cheapest meals are the most authentic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {budgetFoods.map((food) => {
              const FoodIcon = food.icon;
              return (
                <div key={food.item} className="card-moroccan p-4 flex items-start gap-3">
                  <FoodIcon className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[var(--text-primary)]">{food.item}</span>
                      <span className="text-xs font-bold text-[var(--color-accent)] ml-2">{food.price}</span>
                    </div>
                    <p className="text-xs text-[var(--text-muted)] mt-1">{food.where}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              <Lightbulb className="w-5 h-5 inline text-[var(--color-gold)] mr-1" />
              Backpacker Food Tips
            </h3>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Eat where locals eat. Busy stalls with high turnover mean fresh food and lower prices.
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Buy bread, cheese, olives, and fruit from the market for picnic lunches at from 20-30 MAD.
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Use hostel communal kitchens to cook your own meals and save even more.
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Friday couscous is a cultural tradition and one of the best-value meals of the week.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -- Transport on a Budget -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bus className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transport on a Backpacker Budget
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to get around Morocco cheaply. Buses and trains connect all major cities, and shared taxis fill the gaps. Seasonal pricing can change.
          </p>

          <div className="space-y-4">
            {transportOptions.map((t) => {
              const TransIcon = t.icon;
              return (
                <div key={t.mode} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <TransIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {t.mode}
                      </h3>
                      <span className="text-sm font-bold text-[var(--color-accent)]">{t.price}</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)]">{t.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/20">
            <p className="text-sm text-[var(--text-secondary)]">
              <Lightbulb className="w-4 h-4 inline text-[var(--color-gold)] mr-1" />
              <strong>Pro tip:</strong> Book CTM buses online at ctm.ma for popular routes like Marrakech-Essaouira and Fes-Chefchaouen. Seats sell out during peak season. Night buses save on accommodation but can be tiring.
            </p>
          </div>
        </div>
      </section>

      {/* -- Must-Visit Cities for Backpackers -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Must-Visit Cities for Backpackers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The five essential stops on any Morocco backpacking trip. Each offers a distinct experience and fits a backpacker budget.
          </p>

          <div className="space-y-6">
            {backpackerCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.city} className="card-moroccan p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center">
                        <CityIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {city.city}
                      </h3>
                    </div>
                    <span className="text-sm font-bold text-[var(--color-accent)]">{city.budget}</span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{city.highlights}</p>
                  <div className="p-3 bg-[var(--color-accent)]/5 rounded-lg">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <Lightbulb className="w-3.5 h-3.5 inline text-[var(--color-gold)] mr-1" />
                      <strong>Backpacker tip:</strong> {city.topTip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Safety Tips -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Backpackers in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is a safe destination for backpackers who stay aware and take basic precautions. Here is what to know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {safetyTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.detail}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 border-2 border-[var(--color-accent)]">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[var(--color-accent)]" />
              Solo Female Backpackers
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              Thousands of solo female travelers backpack Morocco every year. While extra caution is warranted, the experience is overwhelmingly positive.
            </p>
            <ul className="space-y-2">
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Choose hostels with female-only dorms and good reviews from solo women.
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Dress modestly with shoulders and knees covered, especially outside tourist areas.
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Walk with purpose and avoid eye contact with persistent touts. A firm &quot;la shukran&quot; (no thank you) works.
              </li>
              <li className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                Join hostel group excursions to explore with other travelers and split costs.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* -- Packing Essentials -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Backpack className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Packing Essentials for Backpacking Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Pack light and smart. You will carry everything through narrow medina streets, onto crowded buses, and across desert sands.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packingEssentials.map((item) => {
              const PackIcon = item.icon;
              return (
                <div key={item.item} className="card-moroccan p-4 flex items-center gap-3">
                  <PackIcon className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
                  <div className="flex-1">
                    <span className="text-sm font-medium text-[var(--text-primary)]">{item.item}</span>
                    <span className="text-xs text-[var(--text-muted)] ml-2">({item.category})</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-[var(--color-accent)]/5 rounded-lg border border-[var(--color-accent)]/20">
            <p className="text-sm text-[var(--text-secondary)]">
              <AlertTriangle className="w-4 h-4 inline text-amber-600 mr-1" />
              <strong>Key rule:</strong> If you are debating whether to bring something, leave it behind. Morocco has pharmacies, clothing shops, and markets where you can buy almost anything you need at local prices.
            </p>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Backpacking Morocco
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

      {/* -- Related Guides -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel &amp; Backpacking Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <Link href="/backpacking" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Compass className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Backpacking Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Routes, tips, and itineraries for backpackers in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wallet className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco affordably without missing out.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Banknote className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete cost breakdown for every budget level in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-trip-cost" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <HelpCircle className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Trip Cost
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How much a Morocco trip really costs by category.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/solo-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Solo Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Tips and advice for solo travelers exploring Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-solo-female-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Heart className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Solo Female Travel
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Safety tips and advice for women traveling Morocco alone.
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

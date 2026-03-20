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
  Building,
  Award,
  BookOpen,
  Globe,
  Landmark,
  Calendar,
  Utensils,
  Mountain,
  Wallet,
  Bus,
  BedDouble,
  Lightbulb,
  CircleAlert,
  TrendingDown,
  Banknote,
  Coffee,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Budget Travel Guide 2026 | How Much Does Morocco Cost? Cheap Travel Tips',
  description:
    'Complete Morocco budget travel guide for 2026. Daily cost breakdowns for backpackers and mid-range travellers, cheapest cities, street food prices in MAD, budget accommodation, transport savings, haggling tips, and money-saving itineraries for 1 and 2 weeks.',
  keywords: [
    'morocco cheap travel',
    'how much to go to morocco',
    'morocco on a budget',
    'cheap morocco holidays',
    'morocco budget travel guide 2026',
    'low cost travel morocco',
    'morocco backpacking budget',
    'morocco daily cost',
    'morocco street food prices',
    'cheapest cities morocco',
    'budget accommodation morocco',
    'morocco hostel prices',
    'morocco riad budget',
    'morocco transport cost',
    'CTM bus morocco price',
    'morocco haggling tips',
    'morocco off season travel',
    'morocco cheap food',
    'morocco camping budget',
    'morocco itinerary budget',
  ],
  openGraph: {
    title: 'Morocco Budget Travel Guide 2026 | How Much Does Morocco Cost?',
    description:
      'Plan an affordable Moroccan adventure. Daily budgets, street food prices, cheap accommodation, transport savings, and itineraries for every budget level.',
    url: `${BASE_URL}/morocco-budget-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-budget-travel.webp`,
        width: 1200,
        height: 630,
        alt: 'Colourful Moroccan market stalls with affordable spices, textiles, and street food',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Budget Travel Guide 2026 | Cheap Travel Tips & Costs',
    description:
      'How much does Morocco cost? Daily budget breakdowns, cheapest cities, street food prices, budget riads, and money-saving strategies for your 2026 trip.',
    images: [`${BASE_URL}/images/hero-budget-travel.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-budget-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-budget-travel`,
  name: 'Morocco Budget Travel Guide 2026 | How Much Does Morocco Cost?',
  description:
    'Complete Morocco budget travel guide for 2026. Daily cost breakdowns, cheapest cities, street food prices, budget accommodation, transport tips, and money-saving itineraries.',
  url: `${BASE_URL}/morocco-budget-travel`,
  image: `${BASE_URL}/images/hero-budget-travel.webp`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-budget-travel`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Budget Travel Guide', item: `${BASE_URL}/morocco-budget-travel` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to travel to Morocco per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Budget backpackers can get by on from 300 to 450 MAD per day (approximately 30-45 USD), covering hostel dorms, street food, and local transport. Mid-range travellers should budget from 700 to 1,200 MAD per day for private riad rooms, sit-down restaurants, and guided tours. Comfortable travellers spending from 1,500 to 2,500 MAD per day enjoy boutique riads, fine dining, and private transfers. Seasonal pricing can change these figures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest city to visit in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chefchaouen, Essaouira, Meknes, and Tiznit are among the most affordable Moroccan cities. Chefchaouen offers hostel dorms from 80 MAD and meals from 25 MAD. Meknes, often overlooked by tourists, has some of the lowest prices for accommodation and food in any imperial city. Essaouira is cheaper than Marrakech while offering beaches and a relaxed medina.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco cheaper than Europe for holidays?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is significantly cheaper than most European destinations. Accommodation costs roughly a third to half of comparable European options. A full meal with drink can cost from 30 to 60 MAD (3-6 USD) at local restaurants. Transport, activities, and shopping are similarly affordable. Your money stretches two to four times further than in Spain, France, or Italy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the best time for cheap travel in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest time to visit Morocco is during the shoulder seasons: November to mid-December and February to March. Accommodation prices can drop by 30 to 50 percent compared to peak season (Easter and October). Summer (July-August) is also cheaper for accommodation in cities, though the Sahara and interior are extremely hot. Ramadan periods can offer lower prices but with limited daytime dining options.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I budget for a week in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A budget week in Morocco costs from 2,100 to 3,150 MAD (210-315 USD) for hostels, street food, and buses. A mid-range week runs from 4,900 to 8,400 MAD (490-840 USD) with private riad rooms and tours. A comfortable week costs from 10,500 to 17,500 MAD (1,050-1,750 USD) with boutique hotels and private experiences. Flights from Europe start from around 300 to 600 MAD return on budget airlines. Seasonal pricing can change these estimates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to eat street food in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Street food is generally safe and is how most Moroccans eat daily. Stick to stalls with high turnover, freshly cooked food, and visible preparation. Jemaa el-Fna in Marrakech and street stalls throughout the country serve excellent, safe food. Avoid salads washed in tap water and choose cooked items. Popular safe options include grilled meats, msemen flatbread, harira soup, and freshly squeezed orange juice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use credit cards in Morocco or do I need cash?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is still largely a cash economy, especially in medinas, souks, and smaller cities. ATMs are widely available in cities and accept international cards. Withdraw Moroccan Dirhams (MAD) from ATMs for the best exchange rate. Credit cards are accepted at upscale hotels, restaurants, and some larger shops, but always carry cash for markets, taxis, street food, and smaller businesses. ATM fees typically run from 20 to 30 MAD per withdrawal.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: DAILY BUDGET BREAKDOWNS
   ═══════════════════════════════════════════════════════════════ */

const budgetLevels = [
  {
    level: 'Backpacker',
    icon: TrendingDown,
    dailyTotal: 'From 300-450 MAD/day',
    usd: '(approx. 30-45 USD)',
    colour: 'text-green-700',
    bg: 'bg-green-50',
    items: [
      { category: 'Accommodation', cost: 'From 80-150 MAD', detail: 'Hostel dorm or budget guesthouse' },
      { category: 'Food', cost: 'From 80-120 MAD', detail: 'Street food, market snacks, self-catering' },
      { category: 'Transport', cost: 'From 30-60 MAD', detail: 'Local buses, shared grands taxis' },
      { category: 'Activities', cost: 'From 50-80 MAD', detail: 'Free walking, mosques, budget museums' },
      { category: 'Extras', cost: 'From 20-40 MAD', detail: 'Tea, SIM data, tips' },
    ],
  },
  {
    level: 'Mid-Range',
    icon: Wallet,
    dailyTotal: 'From 700-1,200 MAD/day',
    usd: '(approx. 70-120 USD)',
    colour: 'text-[var(--color-accent)]',
    bg: 'bg-orange-50',
    items: [
      { category: 'Accommodation', cost: 'From 300-500 MAD', detail: 'Private riad room or mid-range hotel' },
      { category: 'Food', cost: 'From 150-300 MAD', detail: 'Restaurants, some street food, cafes' },
      { category: 'Transport', cost: 'From 80-150 MAD', detail: 'CTM/Supratours buses, 2nd class trains' },
      { category: 'Activities', cost: 'From 100-200 MAD', detail: 'Guided tours, museums, hammams' },
      { category: 'Extras', cost: 'From 50-100 MAD', detail: 'Shopping, souvenirs, tips' },
    ],
  },
  {
    level: 'Comfortable',
    icon: Gem,
    dailyTotal: 'From 1,500-2,500 MAD/day',
    usd: '(approx. 150-250 USD)',
    colour: 'text-[var(--color-gold)]',
    bg: 'bg-amber-50',
    items: [
      { category: 'Accommodation', cost: 'From 700-1,200 MAD', detail: 'Boutique riad or 4-star hotel' },
      { category: 'Food', cost: 'From 300-500 MAD', detail: 'Fine dining, rooftop restaurants, cooking class' },
      { category: 'Transport', cost: 'From 150-300 MAD', detail: '1st class trains, private transfers' },
      { category: 'Activities', cost: 'From 200-400 MAD', detail: 'Private guides, spa, desert tours' },
      { category: 'Extras', cost: 'From 100-200 MAD', detail: 'Quality souvenirs, wine, tips' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: CHEAPEST CITIES
   ═══════════════════════════════════════════════════════════════ */

const cheapCities = [
  {
    name: 'Chefchaouen',
    icon: MapPin,
    dorm: 'From 80 MAD',
    meal: 'From 25 MAD',
    highlight: 'The famous Blue City is surprisingly affordable. Hostels and guesthouses cluster in the medina, and tagines cost half the Marrakech price. Hike to the Spanish Mosque at sunset for free panoramic views.',
  },
  {
    name: 'Essaouira',
    icon: MapPin,
    dorm: 'From 90 MAD',
    meal: 'From 30 MAD',
    highlight: 'A laid-back coastal town with budget-friendly fish grills at the port (from 40 MAD for a full plate), free beach walks, and affordable riad stays compared to Marrakech just three hours away.',
  },
  {
    name: 'Meknes',
    icon: MapPin,
    dorm: 'From 70 MAD',
    meal: 'From 20 MAD',
    highlight: 'The most affordable imperial city. Fewer tourists mean lower prices across the board. Bab Mansour gate, the royal granaries, and the medina are all either free or cheap to visit.',
  },
  {
    name: 'Tiznit',
    icon: MapPin,
    dorm: 'From 70 MAD',
    meal: 'From 20 MAD',
    highlight: 'A quiet southern walled town famous for silver jewellery. Rock-bottom accommodation prices, authentic local restaurants, and a gateway to Mirleft and Legzira beaches. Very few tourists.',
  },
  {
    name: 'Asilah',
    icon: MapPin,
    dorm: 'From 85 MAD',
    meal: 'From 25 MAD',
    highlight: 'A charming whitewashed Atlantic town near Tangier. Street art, free beach access, and affordable seafood restaurants. Visit during the annual arts festival for free gallery exhibitions.',
  },
  {
    name: 'Ouarzazate',
    icon: MapPin,
    dorm: 'From 80 MAD',
    meal: 'From 25 MAD',
    highlight: 'The gateway to the Sahara offers budget guesthouses and affordable tagines. Nearby Ait Benhaddou (from 20 MAD entry) is a must-see UNESCO site, and desert trips depart daily at competitive prices.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET ACCOMMODATION
   ═══════════════════════════════════════════════════════════════ */

const accommodationTypes = [
  {
    type: 'Hostels & Dorms',
    icon: Users,
    price: 'From 70-150 MAD per night',
    description:
      'Morocco has a growing hostel scene, especially in Marrakech, Fes, Essaouira, and Chefchaouen. Dorms range from basic four-bed rooms to stylish boutique hostels with rooftop terraces. Many include free breakfast, Wi-Fi, and communal kitchens. Book via Hostelworld or Booking.com for the best rates, or negotiate directly for discounts on longer stays.',
  },
  {
    type: 'Budget Riads & Guesthouses',
    icon: Building,
    price: 'From 150-350 MAD per room',
    description:
      'Budget riads offer the authentic Moroccan courtyard experience without the luxury price tag. Private rooms with ensuite bathrooms, traditional decor, and home-cooked breakfasts are widely available. Prices drop significantly outside the medina walls and in less-touristed cities like Meknes, Taroudant, and Tetouan.',
  },
  {
    type: 'Camping',
    icon: Mountain,
    price: 'From 30-70 MAD per person',
    description:
      'Morocco has hundreds of campsites, from Atlas Mountain valleys to Atlantic beaches. Basic sites offer a tent pitch, shared toilets, and sometimes a cold shower. Many also rent pre-pitched tents or berber-style bivouacs. Wild camping is tolerated in rural areas but always ask local permission. Camping is the cheapest way to experience the Sahara.',
  },
  {
    type: 'Couchsurfing & Homestays',
    icon: Heart,
    price: 'Free to from 100 MAD',
    description:
      'Couchsurfing has an active community in Moroccan cities, offering free stays with locals. Homestays in Berber villages typically cost from 100 to 200 MAD including dinner and breakfast, giving you an authentic cultural experience while supporting local families directly.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: STREET FOOD GUIDE
   ═══════════════════════════════════════════════════════════════ */

const streetFoods = [
  { name: 'Harira Soup', price: 'From 5-10 MAD', description: 'Hearty tomato-lentil soup, the national comfort food. Available at every street corner, especially during Ramadan.' },
  { name: 'Msemen Flatbread', price: 'From 2-5 MAD', description: 'Flaky square pancake served with honey, cheese, or Laughing Cow. The ultimate cheap breakfast.' },
  { name: 'Bocadillo Sandwich', price: 'From 10-20 MAD', description: 'Crusty baguette stuffed with tuna, sardines, or kefta meatballs with salad and harissa.' },
  { name: 'Grilled Corn', price: 'From 5 MAD', description: 'Charcoal-roasted corn cobs, salted and served hot from vendors on every main street.' },
  { name: 'Freshly Squeezed OJ', price: 'From 5-10 MAD', description: 'Morocco is famous for its fresh orange juice. Jemaa el-Fna stalls charge from 5 MAD per glass.' },
  { name: 'Snail Soup (Babbouche)', price: 'From 5-10 MAD', description: 'A Marrakech speciality. Small snails in a peppery, cumin-spiced broth. Adventurous and incredibly cheap.' },
  { name: 'Brochettes (Kebabs)', price: 'From 10-20 MAD', description: 'Skewered lamb, beef, or chicken grilled over charcoal. Usually served with bread, cumin, and salt.' },
  { name: 'Fish Grill (Essaouira)', price: 'From 40-60 MAD', description: 'Full plate of grilled sardines, prawns, or calamari at the Essaouira port. The best seafood deal in Morocco.' },
  { name: 'Tagine (Market Stall)', price: 'From 25-40 MAD', description: 'Simple chicken or vegetable tagine from local market restaurants. Fraction of tourist restaurant prices.' },
  { name: 'Mint Tea', price: 'From 5-10 MAD', description: 'Sweet gunpowder green tea with fresh mint. Offered free in shops; from 5 MAD in cafes.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: FREE & CHEAP ACTIVITIES
   ═══════════════════════════════════════════════════════════════ */

const freeActivities = [
  { city: 'Marrakech', activities: 'Jemaa el-Fna square (free), Majorelle Garden (from 70 MAD), Bahia Palace (from 70 MAD), Saadian Tombs (from 70 MAD), Koutoubia Mosque exterior (free), souk wandering (free), sunset from rooftop cafes (price of a tea from 15 MAD)' },
  { city: 'Fes', activities: 'Medina walk (free), tannery viewpoints (free, tip expected), Bou Inania Medersa (from 20 MAD), Borj Nord panorama (free), Mellah Jewish Quarter (free), blue gate photos (free)' },
  { city: 'Chefchaouen', activities: 'Blue medina wandering (free), Spanish Mosque sunset hike (free), Ras el-Maa waterfall (free), Kasbah museum (from 10 MAD), local craft workshops (free to browse)' },
  { city: 'Essaouira', activities: 'Beach walks (free), rampart walls (free), port fish auction (free), Gnaoua music on the street (free), Skala de la Ville (from 10 MAD), surfing lessons (from 200 MAD)' },
  { city: 'Tangier', activities: 'Kasbah viewpoints (free), Petit Socco cafe culture (price of coffee from 10 MAD), Cap Spartel lighthouse area (free), Caves of Hercules (from 10 MAD), beach walks (free)' },
  { city: 'Rabat', activities: 'Kasbah of the Udayas (free), Chellah ruins (from 20 MAD), Hassan Tower and Mohammed V Mausoleum (free), Bouregreg river walk (free), Andalusian Gardens (free)' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TRANSPORT SAVINGS
   ═══════════════════════════════════════════════════════════════ */

const transportOptions = [
  {
    mode: 'CTM & Supratours Buses',
    icon: Bus,
    price: 'From 70-200 MAD for most routes',
    tips: 'The most reliable and affordable intercity transport. CTM and Supratours offer air-conditioned coaches between all major cities. Marrakech to Essaouira costs from 80 MAD, Marrakech to Fes from 180 MAD. Book online or at the station one day ahead for popular routes. Luggage included. Seasonal pricing can change fares.',
  },
  {
    mode: 'Grands Taxis (Shared)',
    icon: Users,
    price: 'From 20-100 MAD per seat',
    tips: 'Shared Mercedes sedans run fixed routes between cities and towns. You pay per seat and the taxi departs when full (usually six passengers). Faster than buses for short hops. Chefchaouen to Fes costs from 75 MAD per seat. Negotiate before boarding and insist on the shared price, not a private fare.',
  },
  {
    mode: 'ONCF Trains',
    icon: Landmark,
    price: 'From 80-220 MAD for most routes',
    tips: 'Trains connect Tangier, Rabat, Casablanca, Marrakech, Fes, and Meknes. Second class is comfortable and significantly cheaper than first class. Casablanca to Marrakech costs from 100 MAD in second class. The Al Boraq high-speed train from Tangier to Casablanca runs from 149 MAD. Book at stations or via the ONCF app.',
  },
  {
    mode: 'Local City Buses',
    icon: Bus,
    price: 'From 4-6 MAD per ride',
    tips: 'City buses are the cheapest urban transport but can be crowded and confusing without local knowledge. Marrakech, Casablanca, and Rabat have the best networks. The Casablanca tramway costs from 6 MAD per ride. In medinas, walking is usually the only option and the best way to explore.',
  },
  {
    mode: 'Petit Taxis',
    icon: DollarSign,
    price: 'From 7-30 MAD in-city',
    tips: 'Small coloured taxis operate within cities. Always insist the driver uses the meter (compteur). Starting fare is from 7 MAD in most cities. A cross-city ride rarely exceeds from 20-30 MAD. At night, meters have a 50 percent surcharge. Agree on a price beforehand if the driver refuses the meter.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: MONEY-SAVING TIPS
   ═══════════════════════════════════════════════════════════════ */

const savingTips = [
  {
    tip: 'Travel in shoulder season',
    icon: Calendar,
    detail: 'November to mid-December and February to March offer the best balance of good weather and low prices. Riad rates drop 30 to 50 percent, flights from Europe are cheapest, and popular sites are less crowded.',
  },
  {
    tip: 'Master the art of haggling',
    icon: Sparkles,
    detail: 'In souks and markets, the first price is typically two to four times the actual value. Start at 40 percent of the asking price and work up. Walk away as a negotiation tactic. Always haggle with a smile and respect. Fixed-price shops exist if you prefer not to negotiate.',
  },
  {
    tip: 'Eat where locals eat',
    icon: Utensils,
    detail: 'Skip tourist restaurants on main squares. Walk two blocks into residential areas where tagines cost from 25 MAD instead of from 80 MAD. Look for busy stalls with high turnover. Market restaurants in the medina are far cheaper than those with multilingual menus.',
  },
  {
    tip: 'Use a Moroccan SIM card',
    icon: Globe,
    detail: 'Buy a Maroc Telecom, Orange, or Inwi SIM at the airport or any telecom shop for from 30 MAD. Data packages of 5GB cost from 30 MAD. This saves a fortune compared to roaming charges and lets you use maps, translation apps, and booking platforms.',
  },
  {
    tip: 'Book accommodation directly',
    icon: Building,
    detail: 'Many riads and guesthouses offer 10 to 20 percent discounts for direct bookings via WhatsApp or email rather than through Booking.com. Ask for weekly rates if staying more than three nights. Negotiate prices in person, especially in low season.',
  },
  {
    tip: 'Carry cash and use ATMs wisely',
    icon: Banknote,
    detail: 'Withdraw larger amounts less frequently to minimise ATM fees (typically from 20-30 MAD per transaction). CIH Bank and Attijariwafa ATMs are widely available. Avoid airport currency exchange kiosks which offer poor rates. The best rates are from ATMs in the city.',
  },
  {
    tip: 'Cook your own meals sometimes',
    icon: Coffee,
    detail: 'Many hostels and guesthouses have communal kitchens. Fresh produce from local markets is extremely affordable: tomatoes from 5 MAD/kg, bread from 1-2 MAD per loaf, eggs from 1 MAD each. Prepare simple lunches to balance against evening restaurant meals.',
  },
  {
    tip: 'Take free walking tours',
    icon: CheckCircle,
    detail: 'Free walking tours operate in Marrakech, Fes, Casablanca, and Tangier. Guides work on tips, so you pay what you can afford (from 50 MAD is fair). These tours provide excellent orientation and insider knowledge on your first day in a new city.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: BUDGET ITINERARIES
   ═══════════════════════════════════════════════════════════════ */

const itineraries = [
  {
    duration: '1 Week Budget Itinerary',
    totalCost: 'From 2,100-3,500 MAD total',
    days: [
      { day: 'Day 1-2', location: 'Marrakech', plan: 'Free walking tour, Jemaa el-Fna street food, souk exploration, sunset rooftop tea' },
      { day: 'Day 3', location: 'Essaouira', plan: 'CTM bus (from 80 MAD), beach walk, port fish grill, rampart sunset' },
      { day: 'Day 4', location: 'Essaouira', plan: 'Free medina wandering, Gnaoua music, surfing or coastal walk' },
      { day: 'Day 5-6', location: 'Chefchaouen', plan: 'Bus via Marrakech or direct (from 200 MAD), blue medina, Spanish Mosque hike' },
      { day: 'Day 7', location: 'Fes', plan: 'Shared taxi (from 75 MAD), medina exploration, tannery viewpoints' },
    ],
  },
  {
    duration: '2 Week Budget Itinerary',
    totalCost: 'From 4,200-7,000 MAD total',
    days: [
      { day: 'Day 1-2', location: 'Casablanca & Rabat', plan: 'Hassan II Mosque exterior, Kasbah Udayas, train between cities (from 50 MAD)' },
      { day: 'Day 3-4', location: 'Meknes & Volubilis', plan: 'Cheapest imperial city, Roman ruins (from 20 MAD), Bab Mansour' },
      { day: 'Day 5-6', location: 'Fes', plan: 'Medina exploring, tanneries, Bou Inania, free Mellah walking' },
      { day: 'Day 7-8', location: 'Chefchaouen', plan: 'Blue medina photography, hiking, Ras el-Maa, cheap guesthouses' },
      { day: 'Day 9-10', location: 'Marrakech', plan: 'Major sights, souk shopping, Jardin Majorelle, street food crawl' },
      { day: 'Day 11-12', location: 'Essaouira', plan: 'Beach days, seafood, Gnaoua culture, wind sports' },
      { day: 'Day 13-14', location: 'Atlas Mountains', plan: 'Day trip or overnight in Imlil (from 150 MAD guesthouse), hiking' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: HIDDEN COSTS
   ═══════════════════════════════════════════════════════════════ */

const hiddenCosts = [
  { cost: 'Unofficial guides and touts', detail: 'Self-appointed guides in medinas may demand from 50-200 MAD. Politely decline or agree on a price upfront. Say "la shukran" (no thank you) firmly.' },
  { cost: 'Camera fees at sites', detail: 'Some museums and attractions charge from 10-30 MAD extra for photography. Ask before snapping pictures.' },
  { cost: 'Riad surcharges', detail: 'Tourist tax (taxe de sejour) of from 10-30 MAD per night per person is sometimes added at check-out. Ask if it is included when booking.' },
  { cost: 'Hammam extras', detail: 'Basic hammam entry is from 10-20 MAD, but scrub, soap, and gommage can push the total to from 50-100 MAD. Clarify what is included before starting.' },
  { cost: 'Tipping culture', detail: 'Tips (pourboire) are expected in restaurants (10 percent), for porters (from 10-20 MAD), guides, and anyone who helps with directions. Budget from 30-50 MAD per day for tips.' },
  { cost: 'Transport scams', detail: 'Taxi drivers may refuse the meter or quote inflated prices. Know approximate fares in advance and insist on the compteur. Airport taxis have fixed posted prices.' },
  { cost: 'Mint tea with sales pitch', detail: 'Carpet and craft shops offer free tea as a sales tactic. Accepting tea does not oblige you to buy, but some vendors can be very persistent. Feel free to enjoy the tea and politely decline purchases.' },
  { cost: 'ATM withdrawal fees', detail: 'Most Moroccan ATMs charge from 20-30 MAD per foreign withdrawal. Your home bank may add fees too. Use cards with no foreign transaction fees when possible.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoBudgetTravelPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── Hero Section ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center hero-overlay">
        <img
          src="/images/hero-budget-travel.webp"
          alt="Affordable Moroccan market with colourful spices, textiles, and street food stalls"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-white/80 text-sm mb-6">
            <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Morocco Budget Travel Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Budget Travel Guide 2026
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-6">
            How much does Morocco really cost? From backpacker budgets to mid-range comfort,
            discover how to explore this incredible country without breaking the bank.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> Updated March 2026</span>
            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 18 min read</span>
            <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> From 300 MAD/day</span>
          </div>
        </div>
      </section>

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Wallet className="w-4 h-4" /> Budget Travel
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Morocco: Incredible Value for Every Traveller
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Morocco remains one of the best-value travel destinations in the world. With street food
              from 5 MAD, hostel beds from 70 MAD, and intercity buses from 70 MAD, it is possible to
              travel comfortably on a fraction of what you would spend in Europe. Whether you are a
              backpacker counting every dirham or a mid-range traveller seeking authentic experiences at
              fair prices, Morocco delivers extraordinary value.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              This guide breaks down every cost you will encounter, from daily budgets and cheap cities
              to transport hacks and haggling strategies. All prices are in Moroccan Dirhams (MAD) and
              reflect 2026 rates. Note that seasonal pricing can change, and prices may vary between cities.
            </p>
          </div>

          {/* Quick cost overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="card-moroccan p-5 text-center">
              <BedDouble className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">From 70 MAD</p>
              <p className="text-xs text-[var(--text-secondary)]">Hostel dorm per night</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">From 5 MAD</p>
              <p className="text-xs text-[var(--text-secondary)]">Street food snack</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Bus className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">From 70 MAD</p>
              <p className="text-xs text-[var(--text-secondary)]">Intercity bus ride</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-2" />
              <p className="text-2xl font-bold text-[var(--text-primary)]">From 300 MAD</p>
              <p className="text-xs text-[var(--text-secondary)]">Daily budget total</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Daily Budget Breakdowns ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <DollarSign className="w-4 h-4" /> Daily Costs
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              How Much Does Morocco Cost Per Day?
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Three budget levels to help you plan your trip. All prices are approximate daily costs
              per person. Seasonal pricing can change these estimates.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {budgetLevels.map((budget) => (
              <div key={budget.level} className="card-moroccan p-6">
                <div className={`inline-flex items-center gap-2 ${budget.bg} ${budget.colour} px-3 py-1 rounded-full text-sm font-semibold mb-4`}>
                  <budget.icon className="w-4 h-4" /> {budget.level}
                </div>
                <p className="text-2xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {budget.dailyTotal}
                </p>
                <p className="text-sm text-[var(--text-secondary)] mb-6">{budget.usd}</p>
                <div className="space-y-3">
                  {budget.items.map((item) => (
                    <div key={item.category} className="flex justify-between items-start gap-2 border-b border-gray-100 pb-2">
                      <div>
                        <p className="text-sm font-semibold text-[var(--text-primary)]">{item.category}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{item.detail}</p>
                      </div>
                      <p className="text-sm font-medium text-[var(--color-accent)] whitespace-nowrap">{item.cost}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cheapest Cities ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <MapPin className="w-4 h-4" /> Cheapest Destinations
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Most Affordable Cities in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              These six cities offer the best value for budget travellers, with low accommodation
              and food costs combined with plenty of free or cheap things to do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cheapCities.map((city) => (
              <div key={city.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <city.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {city.name}
                  </h3>
                </div>
                <div className="flex gap-4 mb-3">
                  <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">Dorm: {city.dorm}</span>
                  <span className="text-xs bg-orange-50 text-[var(--color-accent)] px-2 py-1 rounded-full">Meal: {city.meal}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{city.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget Accommodation ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <BedDouble className="w-4 h-4" /> Where to Stay
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Budget Accommodation in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              From hostel dorms to Berber homestays, Morocco has budget-friendly lodging for
              every travel style. Prices are per night and can vary by season and location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationTypes.map((acc) => (
              <div key={acc.type} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-3">
                  <acc.icon className="w-7 h-7 text-[var(--color-accent)]" />
                  <div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {acc.type}
                    </h3>
                    <p className="text-sm text-[var(--color-accent)] font-medium">{acc.price}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{acc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Street Food Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Utensils className="w-4 h-4" /> Cheap Eats
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Street Food Prices in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan street food is delicious, safe, and incredibly affordable. Here are the most
              common options with typical prices. Prices may vary slightly by city and season.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_2fr] gap-x-4 gap-y-0">
                {/* Header */}
                <div className="bg-[var(--color-accent)] text-white px-4 py-3 font-semibold text-sm">Food Item</div>
                <div className="bg-[var(--color-accent)] text-white px-4 py-3 font-semibold text-sm text-right">Price</div>
                <div className="hidden md:block bg-[var(--color-accent)] text-white px-4 py-3 font-semibold text-sm">Description</div>

                {streetFoods.map((food, i) => (
                  <>
                    <div key={`${food.name}-name`} className={`px-4 py-3 text-sm font-medium text-[var(--text-primary)] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      {food.name}
                    </div>
                    <div key={`${food.name}-price`} className={`px-4 py-3 text-sm font-semibold text-[var(--color-accent)] text-right whitespace-nowrap ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      {food.price}
                    </div>
                    <div key={`${food.name}-desc`} className={`hidden md:block px-4 py-3 text-sm text-[var(--text-secondary)] ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      {food.description}
                    </div>
                  </>
                ))}
              </div>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-3 text-center">
              Prices are approximate 2026 rates. Seasonal pricing can change. Tourist areas may charge more.
            </p>
          </div>
        </div>
      </section>

      {/* ── Free & Cheap Activities ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Star className="w-4 h-4" /> Things to Do
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Free and Cheap Activities by City
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is packed with free experiences. Wandering medinas, hiking to viewpoints,
              and soaking up the street atmosphere costs nothing. Here is what each major city offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeActivities.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {city.city}
                  </h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{city.activities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Transport Savings ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Bus className="w-4 h-4" /> Getting Around
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Budget Transport Across Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Getting around Morocco is affordable if you know your options. Buses and shared
              taxis connect virtually everywhere. Seasonal pricing can change fares.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {transportOptions.map((opt) => (
              <div key={opt.mode} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center">
                    <opt.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {opt.mode}
                      </h3>
                      <span className="text-sm font-semibold text-[var(--color-accent)]">{opt.price}</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{opt.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Money-Saving Tips ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Lightbulb className="w-4 h-4" /> Pro Tips
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Money-Saving Strategies for Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Insider tips that can save you hundreds of dirhams during your trip. These strategies
              are used by experienced Morocco travellers and long-term residents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {savingTips.map((tip) => (
              <div key={tip.tip} className="card-moroccan p-5 flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    {tip.tip}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Budget Itineraries ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Calendar className="w-4 h-4" /> Sample Itineraries
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Budget Itineraries for Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Two tried-and-tested itineraries designed to maximise experiences while minimising
              costs. Total estimates include accommodation, food, transport, and basic activities.
            </p>
          </div>

          <div className="space-y-10 max-w-4xl mx-auto">
            {itineraries.map((itin) => (
              <div key={itin.duration} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {itin.duration}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-accent)] bg-orange-50 px-3 py-1 rounded-full">
                    <Wallet className="w-4 h-4" /> {itin.totalCost}
                  </span>
                </div>
                <div className="space-y-4">
                  {itin.days.map((d) => (
                    <div key={d.day} className="flex items-start gap-4 border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
                      <div className="flex-shrink-0 w-20">
                        <p className="text-sm font-bold text-[var(--color-accent)]">{d.day}</p>
                        <p className="text-xs text-[var(--text-secondary)]">{d.location}</p>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{d.plan}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-secondary)] mt-4 italic">
                  Costs are approximate and assume budget accommodation and street food. Seasonal pricing can change.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hidden Costs ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <CircleAlert className="w-4 h-4" /> Watch Out
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Hidden Costs to Budget For
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Even savvy budget travellers can be caught off guard by these common unexpected
              expenses. Knowing about them in advance helps you budget accurately.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {hiddenCosts.map((item) => (
              <div key={item.cost} className="card-moroccan p-5">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.cost}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Essential Budget Tips Summary ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
                <Award className="w-4 h-4" /> Key Takeaways
              </span>
              <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
                Your Morocco Budget Cheat Sheet
              </h2>
            </div>

            <div className="card-moroccan p-8 zellige-border">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Minimum daily budget:</strong> From 300 MAD per day
                    covers hostel dorms, street food, and local transport.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Best value cities:</strong> Chefchaouen, Meknes,
                    Tiznit, and Essaouira offer the lowest prices with excellent experiences.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Cheapest season:</strong> November to mid-December
                    and February to March for 30-50 percent savings on accommodation.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Eat local:</strong> Street food from 5 MAD, market
                    tagines from 25 MAD, fresh juice from 5 MAD.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Transport:</strong> CTM buses and shared grands taxis
                    are the most affordable intercity options. Petit taxis start from 7 MAD.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Haggle respectfully:</strong> Start at 40 percent of
                    the asking price in souks. Walking away is a powerful negotiation tool.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Cash is king:</strong> Withdraw MAD from ATMs for
                    the best rates. Budget from 30-50 MAD daily for tips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold uppercase tracking-wider mb-4">
              <Info className="w-4 h-4" /> Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco Budget Travel FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to travel to Morocco per day?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Budget backpackers can get by on from 300 to 450 MAD per day (approximately 30-45 USD),
                covering hostel dorms, street food, and local transport. Mid-range travellers should
                budget from 700 to 1,200 MAD per day for private rooms and restaurants. Seasonal pricing
                can change these figures.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the cheapest city to visit in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Meknes and Tiznit are the cheapest, with dorms from 70 MAD and meals from 20 MAD.
                Chefchaouen and Essaouira are nearly as affordable and offer more tourist infrastructure.
                All four are significantly cheaper than Marrakech or Casablanca.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco cheaper than Europe for holidays?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, significantly. A full meal costs from 30 to 60 MAD (3-6 USD) at local restaurants.
                Accommodation costs roughly a third to half of comparable European options. Your money
                stretches two to four times further than in Spain, France, or Italy.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the best time for cheap travel in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The shoulder seasons of November to mid-December and February to March offer the best
                value. Accommodation drops 30 to 50 percent compared to peak season. Summer is cheap for
                cities but extremely hot in the interior and desert regions.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much should I budget for a week in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A budget week costs from 2,100 to 3,150 MAD (210-315 USD) for hostels, street food,
                and buses. A mid-range week runs from 4,900 to 8,400 MAD (490-840 USD). Comfortable
                travellers should budget from 10,500 to 17,500 MAD (1,050-1,750 USD). Seasonal pricing
                can change these estimates.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is it safe to eat street food in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Street food is generally safe and is how most Moroccans eat daily. Stick to stalls with
                high turnover, freshly cooked food, and visible preparation. Avoid raw salads washed in
                tap water. Cooked items like grilled meats, msemen, harira, and fresh juice are all
                excellent and safe choices.
              </p>
            </div>

            <div className="card-moroccan p-6 md:col-span-2">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I use credit cards in Morocco or do I need cash?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is still largely a cash economy, especially in medinas, souks, and smaller cities.
                ATMs are widely available and accept international cards. Withdraw Moroccan Dirhams for the
                best exchange rate. Credit cards work at upscale hotels and some larger shops, but always
                carry cash for markets, taxis, street food, and smaller businesses. ATM fees typically run
                from 20 to 30 MAD per withdrawal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Overview
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                General budget travel tips and cost comparisons for planning your Morocco trip.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to Moroccan cuisine, from street food to fine dining and cooking classes.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/backpacking" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Mountain className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Backpacking Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Routes, packing lists, and practical tips for backpackers exploring Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-transport-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to trains, buses, taxis, and getting around Morocco affordably.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Explore Morocco on a Budget?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            From the blue streets of Chefchaouen to the bustling souks of Marrakech, Morocco
            offers world-class experiences at prices that fit any budget. Start planning your
            affordable adventure today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/backpacking"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Backpacking Guide
            </Link>
            <Link
              href="/best-time-visit-morocco"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Best Time to Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

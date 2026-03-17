import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Trophy,
  Users,
  MapPin,
  Clock,
  Ticket,
  Star,
  Calendar,
  Shield,
  Globe,
  Zap,
  Info,
  ArrowRight,
  Heart,
  Flag,
  Eye,
  AlertTriangle,
  CheckCircle,
  Plane,
  Train,
  Hotel,
  UtensilsCrossed,
  Camera,
  Wallet,
  HelpCircle,
  Building2,
  Music,
  ShieldCheck,
  Navigation,
  CircleDollarSign,
  Landmark,
  Ship,
  Coffee,
  BookOpen,
  MessageCircle,
  Megaphone,
  TrendingUp,
  Award,
  Sun,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco World Cup 2030: Complete Guide | Stadiums, Tickets, Travel & Tips',
  description:
    'The definitive guide to the 2030 FIFA World Cup in Morocco. Everything you need to know about host cities, stadiums, tickets, travel, accommodation, fan zones, safety, food, budget planning, and cultural tips for the first tri-continental World Cup.',
  keywords: [
    '2030 FIFA World Cup Morocco',
    'World Cup 2030 guide',
    'Morocco World Cup stadiums',
    'Grand Stade Hassan II Casablanca',
    'Morocco 2030 tickets',
    'World Cup Morocco travel guide',
    'Morocco Spain Portugal World Cup',
    'Casablanca World Cup 2030',
    'Marrakech World Cup 2030',
    'Rabat World Cup 2030',
    'Tangier World Cup 2030',
    'Fes World Cup 2030',
    'Agadir World Cup 2030',
    'Morocco World Cup accommodation',
    'Morocco World Cup fan zone',
    'Atlas Lions 2030',
    'FIFA 2030 Morocco guide',
    'World Cup 2030 host cities',
    'Morocco football tourism',
    'tri-continental World Cup',
    'World Cup 2030 budget',
    'Morocco World Cup transport',
    'World Cup 2030 safety',
    'Morocco World Cup food guide',
    'World Cup 2030 cultural tips',
    'Morocco football history',
    'World Cup 2030 FAQ',
    'Morocco high speed rail 2030',
    'Morocco riads World Cup',
    'Morocco World Cup ferry from Spain',
  ],
  openGraph: {
    title: 'Morocco World Cup 2030: The Definitive Guide',
    description:
      'Everything you need to know about attending the 2030 FIFA World Cup in Morocco. Host cities, stadiums, tickets, travel, accommodation, food, safety, budget, and cultural tips.',
    url: 'https://citytoursmorocco.com/worldcup-2030',
    images: [
      {
        url: '/images/flyer-worldcup2030.webp',
        width: 1200,
        height: 630,
        alt: 'Morocco World Cup 2030 - The Definitive Fan Guide',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/worldcup-2030' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLdWebPage = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Morocco World Cup 2030: Complete Guide',
  description:
    'The definitive guide to the 2030 FIFA World Cup in Morocco. Host cities, stadiums, tickets, travel, accommodation, fan zones, safety, food, budget planning, and cultural tips.',
  url: 'https://citytoursmorocco.com/worldcup-2030',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'World Cup 2030', item: 'https://citytoursmorocco.com/worldcup-2030' },
    ],
  },
};

const jsonLdSportsEvent = {
  '@context': 'https://schema.org',
  '@type': 'SportsEvent',
  name: '2030 FIFA World Cup - Morocco',
  description:
    'Morocco co-hosts the 2030 FIFA World Cup alongside Spain and Portugal, marking the first World Cup held across three continents (Africa, Europe, and South America).',
  startDate: '2030-06-01',
  endDate: '2030-07-21',
  location: [
    {
      '@type': 'StadiumOrArena',
      name: 'Grand Stade Hassan II',
      address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
      maximumAttendeeCapacity: 115000,
    },
    {
      '@type': 'StadiumOrArena',
      name: 'Moulay Abdallah Stadium',
      address: { '@type': 'PostalAddress', addressLocality: 'Rabat', addressCountry: 'MA' },
      maximumAttendeeCapacity: 65000,
    },
    {
      '@type': 'StadiumOrArena',
      name: 'Grand Stade de Marrakech',
      address: { '@type': 'PostalAddress', addressLocality: 'Marrakech', addressCountry: 'MA' },
      maximumAttendeeCapacity: 45000,
    },
    {
      '@type': 'StadiumOrArena',
      name: 'Ibn Batouta Stadium',
      address: { '@type': 'PostalAddress', addressLocality: 'Tangier', addressCountry: 'MA' },
      maximumAttendeeCapacity: 65000,
    },
    {
      '@type': 'StadiumOrArena',
      name: 'Stade Adrar',
      address: { '@type': 'PostalAddress', addressLocality: 'Agadir', addressCountry: 'MA' },
      maximumAttendeeCapacity: 45000,
    },
    {
      '@type': 'StadiumOrArena',
      name: 'New Fes Stadium',
      address: { '@type': 'PostalAddress', addressLocality: 'Fes', addressCountry: 'MA' },
      maximumAttendeeCapacity: 50000,
    },
  ],
  organizer: {
    '@type': 'Organization',
    name: 'FIFA',
    url: 'https://www.fifa.com',
  },
  sport: 'Football',
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When is the 2030 FIFA World Cup in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The 2030 FIFA World Cup is expected to take place from June to July 2030, co-hosted by Morocco, Spain, and Portugal, with celebratory opening matches in Uruguay, Argentina, and Paraguay.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which cities in Morocco will host World Cup 2030 matches?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco will host matches in six cities: Casablanca (Grand Stade Hassan II, 115,000 capacity), Rabat (Moulay Abdallah Stadium, 65,000), Marrakech (Grand Stade de Marrakech, 45,000+), Tangier (Ibn Batouta Stadium, 65,000), Fes (new stadium planned, 50,000+), and Agadir (Stade Adrar, 45,000+).',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I get tickets for the 2030 World Cup in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tickets will be sold exclusively through FIFA official channels at FIFA.com. Sales typically begin 12-18 months before the tournament with a ballot system. Register early on the FIFA website for priority access.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for World Cup fans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is considered one of the safest countries in Africa for tourists. The country has invested heavily in security infrastructure and has extensive experience hosting major international events. Standard travel precautions apply.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the biggest stadium for the 2030 World Cup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Grand Stade Hassan II in Casablanca will be the largest stadium, with a capacity of approximately 115,000. When completed, it will be the biggest football stadium in the world.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I travel between Morocco and Spain during the World Cup?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tangier is just 14 kilometers from Spain across the Strait of Gibraltar. Fast ferries connect Tangier to Tarifa and Algeciras in as little as 35 minutes. Flights between Moroccan and Spanish host cities will be frequent and affordable.',
      },
    },
  ],
};

/* ===================================================================
   DATA
   =================================================================== */

const heroStats = [
  { value: '6', label: 'Host Cities in Morocco' },
  { value: '115K', label: 'Seats in Grand Stade Hassan II' },
  { value: '3', label: 'Continents, One World Cup' },
  { value: '48', label: 'Teams Competing' },
];

const hostCityStadiums = [
  {
    city: 'Casablanca',
    stadium: 'Grand Stade Hassan II',
    capacity: '115,000',
    status: 'Under Construction',
    description:
      'The crown jewel of the 2030 World Cup. When completed, the Grand Stade Hassan II will be the largest football stadium on the planet, surpassing North Korea\'s Rungrado May Day Stadium. Designed by the internationally acclaimed firm Populous (architects of Wembley and Tottenham Hotspur Stadium), this architectural marvel will feature a retractable roof, state-of-the-art cooling technology, and a design inspired by traditional Moroccan geometric patterns. Located in the southern suburbs of Casablanca, it will be the venue for the World Cup Final, the opening ceremony, and several high-profile group stage matches. The stadium complex will also include training pitches, commercial spaces, a football museum, and direct connections to the city\'s expanding tramway network.',
    image: '/images/hero-marrakech.webp',
    keyFacts: ['World Cup Final venue', 'Retractable roof', 'Largest stadium in the world', 'Connected by new tramway extension'],
    cityLink: '/cities/casablanca',
  },
  {
    city: 'Rabat',
    stadium: 'Moulay Abdallah Stadium',
    capacity: '65,000',
    status: 'Renovation & Expansion',
    description:
      'Morocco\'s national stadium in the capital city is undergoing a comprehensive renovation to bring it up to FIFA World Cup standards. Already a regular venue for Atlas Lions internationals and major domestic cup finals, the Moulay Abdallah Stadium will receive upgraded seating, improved lighting and media facilities, enhanced accessibility features, and modernized hospitality areas. Its central location in Rabat makes it easily accessible via the city\'s tramway system and within walking distance of major hotels and restaurants in the Agdal district. Rabat\'s status as the political capital and a UNESCO World Heritage city makes it a compelling base for fans who want to combine football with culture.',
    image: '/images/hero-marrakech.webp',
    keyFacts: ['National stadium', 'Atlas Lions home ground', 'Tramway accessible', 'UNESCO World Heritage city'],
    cityLink: '/cities/rabat',
  },
  {
    city: 'Marrakech',
    stadium: 'Grand Stade de Marrakech',
    capacity: '45,000+',
    status: 'Expansion Planned',
    description:
      'Set against the spectacular backdrop of the snow-capped Atlas Mountains, the Grand Stade de Marrakech is one of the most scenic football venues in the world. Built to modern standards, the stadium will be expanded and upgraded for the 2030 World Cup, with increased seating capacity, additional hospitality suites, and improved transport links. Marrakech is Morocco\'s most popular tourist city, meaning fans will have no shortage of accommodation options, restaurants, and cultural experiences before and after matches. The famous Jemaa el-Fnaa square, the souks of the medina, and the Majorelle Garden are all within easy reach. Expect Marrakech to be one of the liveliest host cities of the entire tournament.',
    image: '/images/hero-marrakech.webp',
    keyFacts: ['Atlas Mountain backdrop', 'Top tourist destination', 'Vibrant nightlife', 'Excellent hotel infrastructure'],
    cityLink: '/cities/marrakech',
  },
  {
    city: 'Tangier',
    stadium: 'Ibn Batouta Stadium',
    capacity: '65,000',
    status: 'Existing / Upgrade',
    description:
      'Named after the legendary 14th-century Tangier-born explorer Ibn Battuta, this 65,000-seat stadium is already one of the most modern and impressive venues in Africa. It hosted FIFA Club World Cup matches and regularly stages major international fixtures. For the 2030 World Cup, the stadium will receive targeted upgrades to its technology, media facilities, and hospitality areas. Tangier\'s strategic position at the northern tip of Morocco, just 14 kilometers from Spain across the Strait of Gibraltar, makes it a unique host city. Fans can literally take a 35-minute ferry from Tarifa, Spain, to watch a World Cup match in Africa. The new Tanger Med port and the Al Boraq high-speed rail connection to Casablanca further cement Tangier\'s excellent transport credentials.',
    image: '/images/hero-marrakech.webp',
    keyFacts: ['35-min ferry from Spain', 'High-speed rail to Casablanca', 'Already World Cup-ready', 'Gateway between continents'],
    cityLink: '/cities/tangier',
  },
  {
    city: 'Fes',
    stadium: 'New Fes Stadium',
    capacity: '50,000+',
    status: 'New Build Planned',
    description:
      'Morocco\'s spiritual and intellectual capital is set to receive a brand-new stadium purpose-built for the 2030 World Cup. The new Fes stadium will be a modern arena designed to complement the city\'s ancient character while providing a world-class matchday experience. Fes is home to the oldest university in the world (the University of al-Qarawiyyin, founded in 859 AD) and the largest car-free urban zone on Earth (the Fes el-Bali medina). For visiting fans, Fes offers an immersive cultural experience unlike any other World Cup host city in history. The ancient tanneries, the labyrinthine medina, and the city\'s legendary culinary traditions make it a destination that transcends football.',
    image: '/images/hero-fes-tanneries.webp',
    keyFacts: ['Brand new stadium', 'Oldest university in the world', 'UNESCO medina', 'Legendary Moroccan cuisine'],
    cityLink: '/cities/fes',
  },
  {
    city: 'Agadir',
    stadium: 'Stade Adrar',
    capacity: '45,000+',
    status: 'Existing / Upgrade',
    description:
      'Agadir brings something no other World Cup host city can match: sun, sand, and surf. The Stade Adrar is a modern arena located in Morocco\'s premier beach resort city, offering fans the unique experience of watching a World Cup match and then heading straight to the beach. Agadir boasts over 300 days of sunshine per year and a 9-kilometer stretch of golden coastline. The stadium will receive upgrades to capacity and facilities for 2030. The city\'s relaxed, resort-town atmosphere provides a contrast to the intensity of the more urban host cities, making it an ideal base for fans who want to combine World Cup football with a beach holiday.',
    image: '/images/card-beach.webp',
    keyFacts: ['Beach resort city', '300+ days of sunshine', 'Ocean views from stadium', 'Relaxed atmosphere'],
    cityLink: '/cities/agadir',
  },
];

const travelMethods = [
  {
    icon: Plane,
    title: 'By Air',
    details: [
      'Morocco has 12 international airports. The main gateways for World Cup fans will be Mohammed V (Casablanca, CMN), Marrakech Menara (RAK), Fes-Saiss (FEZ), Tangier Ibn Battouta (TNG), and Al Massira (Agadir, AGA).',
      'Royal Air Maroc, the national carrier, flies direct to over 90 destinations worldwide. Budget carriers including Ryanair, easyJet, Transavia, and Wizz Air serve Morocco from dozens of European cities.',
      'Expect airlines to add significant extra capacity for the World Cup. Charter flights and special World Cup routes will connect major football markets directly to Moroccan host cities.',
      'Direct flights from Europe take 2-4 hours. From the Middle East, expect 6-8 hours. From North America, 7-9 hours to Casablanca.',
      'Book flights as early as possible once the match schedule is announced. Prices will increase dramatically as the tournament approaches.',
    ],
  },
  {
    icon: Ship,
    title: 'By Ferry from Spain',
    details: [
      'One of the most exciting aspects of this World Cup is the ability to travel between Morocco and Spain by sea. The Strait of Gibraltar is only 14 kilometers wide at its narrowest point.',
      'Fast ferries operate between Tarifa (Spain) and Tangier Ville in just 35 minutes. Larger ferries connect Algeciras to Tangier Med (approximately 90 minutes).',
      'Ferry operators include FRS, Balearia, Trasmediterranea, and Inter Shipping. During the World Cup, expect increased frequency and potentially dedicated fan ferry services.',
      'This creates a unique opportunity: attend a match in Spain one day and a match in Morocco the next, crossing between continents by sea.',
      'Advance booking is strongly recommended. Ferry tickets can sell out, especially on weekends and around match days.',
    ],
  },
  {
    icon: Train,
    title: 'By Rail',
    details: [
      'Morocco\'s Al Boraq high-speed train (TGV) connects Tangier to Casablanca in just 2 hours and 10 minutes, with stops in Kenitra and Rabat. It is Africa\'s only high-speed rail service.',
      'The conventional ONCF rail network connects all major host cities. Casablanca to Marrakech takes approximately 3 hours, Casablanca to Fes takes around 3.5 hours.',
      'Morocco is investing heavily in expanding its rail network ahead of 2030. New high-speed lines connecting Marrakech and Agadir are planned, which would dramatically reduce travel times between southern host cities.',
      'Special World Cup rail passes and increased train frequencies are expected during the tournament.',
      'First-class rail travel in Morocco is comfortable and affordable, typically costing from 200 MAD ($20-40 USD) for intercity journeys.',
    ],
  },
];

const accommodationTypes = [
  {
    icon: Building2,
    title: 'Hotels',
    budget: '$$-$$$$',
    description:
      'Morocco has a full spectrum of hotels from budget to ultra-luxury. International chains like Marriott, Four Seasons, Fairmont, Sofitel, Accor, and Hilton all have properties in the major host cities. New hotels are being built across the country specifically for the World Cup. In Casablanca and Marrakech, expect 5-star options starting from $200-400 USD per night during the tournament (significantly higher than normal rates). Budget hotels and guesthouses start from $30-60 USD.',
    tips: ['Book 12-18 months in advance', 'Check cancellation policies carefully', 'Consider hotels near tramway/train stations', 'Look for package deals with match tickets'],
  },
  {
    icon: Landmark,
    title: 'Riads (Traditional Guesthouses)',
    budget: '$$-$$$',
    description:
      'Riads are traditional Moroccan houses with interior courtyards, converted into boutique guesthouses. They are found primarily in the medinas (old cities) of Marrakech, Fes, Rabat, and Tangier. Staying in a riad is one of the most authentic Moroccan experiences you can have. Expect hand-crafted zellij tiles, rooftop terraces with city views, home-cooked Moroccan breakfasts, and a level of personal service that hotels cannot match. Prices range from $50-300 USD per night.',
    tips: ['Perfect for cultural immersion', 'Often include breakfast', 'Smaller rooms than hotels', 'Book the best ones very early'],
  },
  {
    icon: Users,
    title: 'Vacation Rentals & Apartments',
    budget: '$-$$$',
    description:
      'Platforms like Airbnb, Booking.com, and local alternatives offer apartments and villas across all host cities. This is an excellent option for groups of fans traveling together, as you can share a multi-bedroom apartment and cook your own meals. Expect significant price increases during the World Cup period, but vacation rentals will still offer better value per person than hotels for groups of 4 or more.',
    tips: ['Best value for groups', 'Look for properties near public transport', 'Verify host ratings carefully', 'Consider neighborhoods outside the medina for quieter stays'],
  },
  {
    icon: Sun,
    title: 'Fan Villages & Camping',
    budget: '$',
    description:
      'FIFA and local organizers are expected to establish dedicated fan villages near major stadiums, similar to those at the 2022 Qatar World Cup. These typically offer basic but affordable accommodation in temporary structures, tents, or pods. Morocco\'s excellent climate (especially in June and July) makes outdoor and semi-outdoor accommodation viable. Glamping options in the desert and mountains may also attract adventurous fans.',
    tips: ['Most budget-friendly option', 'Great social atmosphere', 'Book through official FIFA channels', 'Bring sun protection'],
  },
];

const transportBetweenCities = [
  { from: 'Casablanca', to: 'Rabat', method: 'Al Boraq (High-Speed Rail)', duration: '50 minutes', cost: 'from 100 MAD' },
  { from: 'Casablanca', to: 'Marrakech', method: 'ONCF Train', duration: '2 hr 45 min', cost: 'from 150 MAD' },
  { from: 'Casablanca', to: 'Fes', method: 'ONCF Train', duration: '3 hr 30 min', cost: 'from 200 MAD' },
  { from: 'Casablanca', to: 'Tangier', method: 'Al Boraq (High-Speed Rail)', duration: '2 hr 10 min', cost: 'from 200 MAD' },
  { from: 'Casablanca', to: 'Agadir', method: 'CTM/Supratours Bus', duration: '4 hr 30 min', cost: 'from 180 MAD' },
  { from: 'Marrakech', to: 'Agadir', method: 'CTM/Supratours Bus', duration: '3 hr 00 min', cost: 'from 140 MAD' },
  { from: 'Tangier', to: 'Fes', method: 'ONCF Train', duration: '3 hr 30 min', cost: 'from 150 MAD' },
  { from: 'Rabat', to: 'Fes', method: 'ONCF Train', duration: '2 hr 30 min', cost: 'from 150 MAD' },
  { from: 'Tangier', to: 'Tarifa (Spain)', method: 'Fast Ferry', duration: '35 min', cost: 'from 350 MAD' },
];

const fanZoneActivities = [
  {
    icon: Megaphone,
    title: 'Official FIFA Fan Zones',
    description: 'Large-scale outdoor venues with giant screens showing every match live, food and drink vendors, entertainment stages with live music and DJ performances, interactive FIFA exhibits, and merchandise shops. Free entry is typical for official fan zones.',
  },
  {
    icon: Music,
    title: 'Live Entertainment',
    description: 'Expect world-class entertainment in all host cities. Morocco has a thriving music scene spanning Gnawa, Amazigh folk, rai, hip-hop, and electronic genres. Major international artists will perform at fan festivals. The Jemaa el-Fnaa in Marrakech will likely become the most vibrant informal fan gathering in World Cup history.',
  },
  {
    icon: Coffee,
    title: 'Cafe Culture & Screenings',
    description: 'Moroccan cafe culture revolves around gathering to watch football on TV. During the World Cup, every cafe, restaurant, and hotel lounge in the country will be screening matches. This is where you experience football the way Moroccans do: with fresh mint tea, heated debates, and collective celebrations.',
  },
  {
    icon: Camera,
    title: 'Cultural Experiences',
    description: 'Host cities will organize special cultural programming around the World Cup, including guided medina tours, cooking workshops, traditional music performances, hammam experiences, and artisan demonstrations. This is FIFA\'s vision for a tournament that celebrates local culture, not just football.',
  },
];

const safetyTips = [
  {
    icon: ShieldCheck,
    title: 'General Safety',
    tips: [
      'Morocco is consistently ranked as one of the safest countries in Africa and the broader MENA region',
      'The country has invested billions of dirhams in security infrastructure ahead of the World Cup',
      'Tourist police units operate in all major cities and speak multiple languages including English, French, and Spanish',
      'Morocco successfully hosted the 2022 and 2023 FIFA Club World Cup, the 2023 Africa Cup of Nations qualifiers, and numerous other major international events without significant security incidents',
      'Emergency number: 19 (police) and 15 (ambulance)',
    ],
  },
  {
    icon: Shield,
    title: 'Fan Safety at Stadiums',
    tips: [
      'All World Cup stadiums will have advanced security screening at entry points',
      'Arrive at least 2 hours before kick-off to clear security without rush',
      'Follow FIFA guidelines on prohibited items: no large bags, no professional cameras, no unauthorized commercial materials',
      'Designated family sections will be available at every venue',
      'Accessible seating and facilities for fans with disabilities will meet FIFA standards',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Common Sense Precautions',
    tips: [
      'Keep valuables secure in crowded areas, particularly in medinas and around stadiums before and after matches',
      'Use official taxis (petit taxis in cities, grand taxis between cities) or ride-hailing apps like inDrive and Careem',
      'Stay hydrated: June and July temperatures can reach 35-45 degrees Celsius depending on the city',
      'Carry a photocopy of your passport; leave the original in your hotel safe',
      'Travel insurance is strongly recommended for all visitors',
      'Drink bottled water rather than tap water',
    ],
  },
];

const foodGuide = [
  {
    title: 'Must-Try Moroccan Dishes',
    icon: UtensilsCrossed,
    items: [
      { name: 'Tagine', description: 'Morocco\'s signature slow-cooked stew, made in a conical clay pot. Try chicken with preserved lemons and olives, lamb with prunes and almonds, or vegetable tagine with seasonal produce. Available everywhere from street stalls (from 40 MAD) to upscale restaurants (from 150 MAD).' },
      { name: 'Couscous', description: 'The Friday staple. Steamed semolina topped with vegetables, meat, and a rich broth. Traditionally a family dish served on Fridays, but available at restaurants throughout the week. Budget from 60 MAD at a mid-range restaurant.' },
      { name: 'Moroccan Mint Tea', description: 'The national drink. Green tea brewed with fresh spearmint and generous amounts of sugar, poured theatrically from height. Served everywhere, from market stalls (from 5 MAD) to hotel terraces (from 25 MAD). Refusing tea is considered impolite.' },
      { name: 'Msemen & Harcha', description: 'Flaky, pan-fried flatbread (msemen) and semolina griddle bread (harcha). Perfect street breakfast foods, often served with honey, cheese, or amlou (argan oil and almond paste). Just from 3 MAD from street vendors.' },
      { name: 'Pastilla', description: 'A sweet and savory pastry layered with shredded pigeon or chicken, almonds, eggs, and cinnamon, wrapped in crispy warqa pastry and dusted with powdered sugar. A Moroccan delicacy typically found in Fes.' },
      { name: 'Mechoui', description: 'Slow-roasted whole lamb, cooked for hours until the meat falls off the bone. A celebratory dish perfect for match-day feasting. Found at specialist mechoui restaurants, especially in Marrakech\'s Mechoui Alley.' },
    ],
  },
  {
    title: 'Street Food for Football Fans',
    icon: Coffee,
    items: [
      { name: 'Merguez Sandwiches', description: 'Spicy lamb sausage served in a baguette with harissa, onions, and fresh vegetables. The quintessential Moroccan match-day snack. From 15 MAD from street vendors.' },
      { name: 'Bocadillo', description: 'A Moroccan take on the Spanish sandwich, filled with grilled kefta (minced meat), tuna, or egg. Fast, filling, and cheap at just 10 MAD.' },
      { name: 'Freshly Squeezed Juice', description: 'Orange juice, avocado smoothies, pomegranate juice, and mixed fruit drinks are available on virtually every street corner. Prices range from 5 MAD for a large glass.' },
      { name: 'Shawarma & Brochettes', description: 'Grilled meat skewers (brochettes) are sold outside every stadium in Morocco. Paired with bread, harissa, and a fresh salad, this is the ultimate pre-match fuel. Expect from 20 MAD.' },
      { name: 'Chebakia', description: 'Deep-fried sesame cookies soaked in honey. A sweet Ramadan tradition that is available year-round from bakeries. Perfect with mint tea.' },
    ],
  },
];

const tourismHighlights = [
  {
    city: 'Marrakech',
    icon: Star,
    highlights: ['Jemaa el-Fnaa square', 'Bahia Palace and Saadian Tombs', 'Majorelle Garden', 'Souk shopping in the medina', 'Day trip to Ourika Valley or Ouzoud Waterfalls'],
  },
  {
    city: 'Fes',
    icon: BookOpen,
    highlights: ['Fes el-Bali medina (world\'s largest car-free zone)', 'Chouara Tanneries', 'Al-Qarawiyyin University (oldest in the world)', 'Bou Inania Madrasa', 'Traditional ceramics workshops'],
  },
  {
    city: 'Casablanca',
    icon: Building2,
    highlights: ['Hassan II Mosque (third largest in the world)', 'Art Deco architecture downtown', 'Corniche beachfront promenade', 'Morocco Mall and Anfa Place', 'Rick\'s Cafe (Casablanca film tribute)'],
  },
  {
    city: 'Rabat',
    icon: Landmark,
    highlights: ['Hassan Tower and Mausoleum of Mohammed V', 'Kasbah of the Udayas', 'Chellah necropolis', 'Mohammed VI Museum of Modern and Contemporary Art', 'Bouregreg Marina'],
  },
  {
    city: 'Tangier',
    icon: Globe,
    highlights: ['Cap Spartel and Caves of Hercules', 'Tangier Medina and Grand Socco', 'Strait of Gibraltar viewpoints', 'American Legation Museum', 'Day trip to Chefchaouen (the Blue City)'],
  },
  {
    city: 'Agadir',
    icon: Sun,
    highlights: ['9 km golden beach', 'Agadir Oufella (kasbah ruins)', 'Souss-Massa National Park', 'Paradise Valley day trip', 'Surfing at Taghazout'],
  },
];

const budgetItems = [
  { category: 'Accommodation (per night)', budget: 'from 200 MAD ($20-50)', mid: 'from 500 MAD ($50-150)', luxury: '1,500-5,000+ MAD ($150-500+)' },
  { category: 'Meals (per day)', budget: 'from 100 MAD ($10-20)', mid: 'from 200 MAD ($20-50)', luxury: '500-1,500+ MAD ($50-150+)' },
  { category: 'Local Transport (per day)', budget: 'from 30 MAD ($3-8)', mid: 'from 80 MAD ($8-20)', luxury: 'from 200 MAD ($20-60)' },
  { category: 'Intercity Travel', budget: 'from 100 MAD ($10-25)', mid: 'from 200 MAD ($20-40)', luxury: '400-1,000+ MAD ($40-100+)' },
  { category: 'Match Tickets', budget: 'From ~700 MAD ($70)', mid: '~from 1,500 MAD ($150-300)', luxury: '5,000-15,000+ MAD ($500-1,500+)' },
  { category: 'Activities & Sightseeing', budget: 'from 50 MAD ($5-15)', mid: 'from 150 MAD ($15-50)', luxury: '500-2,000+ MAD ($50-200+)' },
];

const culturalTips = [
  {
    icon: Heart,
    title: 'Greetings & Respect',
    tips: [
      'Moroccans are famously hospitable. A warm "Salaam Alaikum" (peace be upon you) goes a long way.',
      'Handshakes are common between men. With women, wait for her to extend her hand first.',
      'Learning a few words of Darija (Moroccan Arabic) or French will earn enormous goodwill.',
      'Moroccans take immense pride in their country hosting the World Cup. Show genuine interest and admiration.',
    ],
  },
  {
    icon: Eye,
    title: 'Dress & Behavior',
    tips: [
      'Morocco is a Muslim-majority country but is generally tolerant and cosmopolitan, especially in tourist areas.',
      'Dress modestly when visiting mosques, medinas, and traditional neighborhoods. Shoulders and knees should be covered.',
      'At stadiums and tourist areas, casual football-fan attire is perfectly acceptable.',
      'Public displays of affection should be kept minimal, as a matter of cultural respect.',
      'Alcohol is available in licensed hotels, bars, and restaurants but is not consumed publicly.',
    ],
  },
  {
    icon: MessageCircle,
    title: 'Language',
    tips: [
      'Official languages: Arabic and Amazigh (Berber). French is widely spoken as a second language.',
      'In Tangier and northern Morocco, Spanish is commonly spoken.',
      'English is increasingly spoken by younger Moroccans and in tourism-facing businesses.',
      'Useful phrases: "Shukran" (thank you), "Bslama" (goodbye), "Bsaha" (cheers/enjoy), "La" (no), "Iyeh" (yes).',
    ],
  },
  {
    icon: CircleDollarSign,
    title: 'Money & Tipping',
    tips: [
      'Currency: Moroccan Dirham (MAD). Approximately 10 MAD = 1 USD (check current rates).',
      'ATMs are widely available in all host cities. Visa and Mastercard are accepted at most hotels and larger restaurants.',
      'Cash is essential for taxis, street food, souks, and smaller establishments.',
      'Tipping (pourboire) is customary: 10-15% at restaurants, from 10 MAD for hotel porters, round up taxi fares.',
      'Haggling is expected in souks and with taxis that do not use meters.',
    ],
  },
];

const footballHistory = [
  { year: '1970', event: 'Morocco becomes the first African nation to qualify for a FIFA World Cup (Mexico 1970), opening the door for the continent.' },
  { year: '1976', event: 'Morocco wins the Africa Cup of Nations on home soil, defeating Guinea in the final. The tournament showcases Moroccan football talent to the continent.' },
  { year: '1986', event: 'At the Mexico World Cup, Morocco becomes the first African team to top a World Cup group, finishing above Portugal, England, and Poland.' },
  { year: '1994-2010', event: 'Morocco submits unsuccessful bids to host the FIFA World Cup in 1994, 1998, 2006, and 2010, demonstrating persistent ambition on the global stage.' },
  { year: '2022', event: 'Morocco makes history at the Qatar World Cup, becoming the first African and first Arab nation to reach the semi-finals. Victories over Belgium, Spain, and Portugal captivate the world.' },
  { year: '2023', event: 'FIFA officially awards the 2030 World Cup to Morocco, Spain, and Portugal (with ceremonial opening matches in South America). Morocco\'s decades-long dream becomes reality.' },
  { year: '2025', event: 'Morocco hosts the Africa Cup of Nations (CAN 2025), serving as a major dress rehearsal for World Cup 2030 infrastructure and organization.' },
  { year: '2030', event: 'Morocco co-hosts the FIFA World Cup, welcoming the world to Africa for only the second time in World Cup history (after South Africa 2010).' },
];

const legacyItems = [
  {
    icon: Train,
    title: 'Transport Revolution',
    description: 'New high-speed rail lines, expanded airports, modernized highways, and urban tramway extensions will transform how people move around Morocco for decades beyond 2030.',
  },
  {
    icon: Building2,
    title: 'World-Class Stadiums',
    description: 'Six FIFA-standard stadiums, led by the 115,000-seat Grand Stade Hassan II, will serve as permanent venues for football, athletics, concerts, and cultural events.',
  },
  {
    icon: Hotel,
    title: 'Hospitality Expansion',
    description: 'Thousands of new hotel rooms, upgraded riads, and improved tourism infrastructure will position Morocco as a top-tier global destination for years to come.',
  },
  {
    icon: Users,
    title: 'Jobs & Economic Growth',
    description: 'The World Cup is expected to create hundreds of thousands of direct and indirect jobs in construction, hospitality, transport, security, and services.',
  },
  {
    icon: Globe,
    title: 'Global Brand Recognition',
    description: 'Hosting the World Cup will showcase Morocco to billions of viewers worldwide, dramatically boosting international tourism and foreign investment.',
  },
  {
    icon: TrendingUp,
    title: 'Youth Development',
    description: 'Investment in football academies, grassroots programs, and sporting infrastructure will develop the next generation of Moroccan talent and promote health and fitness.',
  },
];

const faqItems = [
  {
    question: 'When exactly will the 2030 World Cup take place?',
    answer: 'The main tournament is expected to run from June to July 2030. Exact dates will be confirmed by FIFA. Three celebratory opening matches will be held in Uruguay, Argentina, and Paraguay to mark the centennial of the first World Cup (1930), before the tournament proper begins in Morocco, Spain, and Portugal.',
  },
  {
    question: 'How many matches will Morocco host?',
    answer: 'The exact distribution of matches between Morocco, Spain, and Portugal has not been finalized. Morocco is expected to host a significant share of group stage matches, several knockout rounds, and the Final at the Grand Stade Hassan II in Casablanca. Details will be confirmed by FIFA as the tournament approaches.',
  },
  {
    question: 'Do I need a visa to visit Morocco for the World Cup?',
    answer: 'Citizens of over 60 countries can enter Morocco visa-free for up to 90 days, including the USA, UK, EU member states, Canada, Australia, Japan, and most South American nations. For the World Cup, Morocco is expected to introduce additional visa facilitation measures, potentially including a FIFA Fan ID system similar to previous World Cups. Check the latest entry requirements with the Moroccan consulate in your country.',
  },
  {
    question: 'What is the weather like in Morocco in June/July?',
    answer: 'Summer in Morocco is generally hot and dry. Casablanca and Rabat enjoy coastal moderation (25-30 degrees Celsius). Marrakech and Fes are hotter (35-42 degrees Celsius). Tangier is pleasant (25-32 degrees Celsius). Agadir is warm and sunny (25-30 degrees Celsius). Evening matches will be more comfortable. Stay hydrated and wear sun protection.',
  },
  {
    question: 'Is alcohol available in Morocco during the World Cup?',
    answer: 'Morocco is a Muslim-majority country, but alcohol is legal and available. Licensed hotels, bars, restaurants, and supermarkets (like Carrefour and Acima) sell beer, wine, and spirits. Alcohol is not typically available from street vendors or in traditional medina restaurants. FIFA fan zones are expected to serve alcohol as in previous World Cups. Drink responsibly and respect local customs.',
  },
  {
    question: 'Can I attend matches in both Morocco and Spain/Portugal?',
    answer: 'Absolutely. This is one of the most exciting aspects of the tri-continental format. Fast ferries connect Tangier to Spain in 35 minutes. Budget airlines connect Moroccan cities to Spanish and Portuguese host cities in 1-2 hours. The Al Boraq high-speed train connects Tangier to Casablanca in 2 hours 10 minutes. With careful planning, you can watch a match in Morocco and attend another in Spain or Portugal within 24 hours.',
  },
  {
    question: 'How much should I budget for a World Cup trip to Morocco?',
    answer: 'Morocco is one of the most affordable World Cup destinations in history. A budget traveler can expect to spend $80-120 USD per day (accommodation, food, local transport). A mid-range traveler should budget $150-300 USD per day. Luxury visitors may spend $500+ per day. Match tickets will be additional, ranging from approximately $70 USD for group stage seats to $500+ for premium knockout-round and Final tickets.',
  },
  {
    question: 'Is Morocco safe for LGBTQ+ visitors?',
    answer: 'Same-sex relationships are criminalized in Morocco, though enforcement varies. LGBTQ+ visitors should exercise discretion. In major cities and tourist areas, attitudes are generally more relaxed. Avoid public displays of affection. Many LGBTQ+ travelers visit Morocco without issues by maintaining cultural awareness. FIFA has stated that all fans will be welcome at the 2030 World Cup regardless of orientation.',
  },
  {
    question: 'What currency does Morocco use and can I pay by card?',
    answer: 'Morocco uses the Moroccan Dirham (MAD). Approximately 10 MAD = 1 USD. Credit and debit cards (Visa, Mastercard) are accepted at hotels, larger restaurants, and shopping malls. Cash is essential for taxis, street food, souks, and smaller establishments. ATMs are abundant in all host cities. Currency exchange is available at airports, banks, and licensed exchange bureaus.',
  },
  {
    question: 'Will there be a FIFA Fan ID for Morocco 2030?',
    answer: 'FIFA is expected to implement a Fan ID or similar digital identification system for the 2030 World Cup, as was used in Russia 2018 and Qatar 2022. This may serve as a visa alternative or supplement for ticket holders. Details will be announced by FIFA closer to the tournament. Register on FIFA.com for updates.',
  },
  {
    question: 'What languages are spoken in Morocco?',
    answer: 'The official languages are Arabic and Amazigh (Berber). French is widely spoken as a second language in business, education, and tourism. Spanish is common in northern Morocco (Tangier, Tetouan, Nador). English is increasingly spoken by younger Moroccans and in the tourism industry. During the World Cup, multilingual signage and volunteer services will be available.',
  },
  {
    question: 'Can I use my mobile phone in Morocco?',
    answer: 'Yes. Morocco has excellent 4G/LTE coverage in all cities and most rural areas, with 5G being rolled out. International roaming works but can be expensive. The best option is to buy a local SIM card upon arrival (Maroc Telecom, Inwi, or Orange) for approximately from 30 MAD with a generous data package. SIM cards are available at airports and phone shops everywhere.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function WorldCup2030Page() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSportsEvent) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />

      {/* ===============================================================
          1. HERO SECTION
          =============================================================== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/flyer-worldcup2030.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1814]/70 to-[#A0522D]/30" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/football" className="hover:text-white transition-colors">Football</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">World Cup 2030</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm mb-6">
              <Trophy className="w-4 h-4 text-[#C4960C]" />
              <span>FIFA World Cup 2030 &bull; Morocco &bull; Spain &bull; Portugal</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Morocco World Cup 2030: Everything You Need to Know
            </h1>
            <p className="text-xl text-white/80 max-w-2xl leading-relaxed">
              The definitive guide to attending the first tri-continental FIFA World Cup. Host cities,
              stadiums, tickets, travel, accommodation, food, safety, and cultural tips &mdash; everything
              a football fan needs to plan the trip of a lifetime.
            </p>
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* Hero Stats Bar */}
      <section className="py-12 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/70 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ===============================================================
          2. OVERVIEW
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Globe className="w-4 h-4" />
              <span>A Historic Tri-Continental Tournament</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The First World Cup Across Three Continents
            </h2>
            <div className="space-y-5 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                In October 2023, FIFA officially awarded the 2030 World Cup to a groundbreaking tri-continental bid
                from <strong>Morocco, Spain, and Portugal</strong>, with three celebratory opening matches in
                <strong> Uruguay, Argentina, and Paraguay</strong> to mark the centenary of the very first World Cup
                held in Uruguay in 1930. This unprecedented format means the 2030 tournament will span
                <strong> Africa, Europe, and South America</strong> &mdash; the first time in football history that
                a single World Cup will be hosted across three continents.
              </p>
              <p>
                For Morocco, this is the culmination of a dream that began with its first World Cup hosting bid in
                1994. After unsuccessful bids for 1998, 2006, and 2010, Morocco&apos;s persistence has been rewarded
                with the ultimate prize. The country that captivated the world at the 2022 Qatar World Cup &mdash;
                where the Atlas Lions became the first African and first Arab nation to reach the semi-finals &mdash;
                will now welcome the world to its own stadiums, cities, and culture.
              </p>
              <p>
                Morocco will host matches in <strong>six cities: Casablanca, Rabat, Marrakech, Tangier, Fes, and
                Agadir</strong>. The centerpiece is the Grand Stade Hassan II in Casablanca, which at 115,000 seats
                will be the largest football stadium on Earth. Combined with Spain&apos;s and Portugal&apos;s venues,
                the 2030 World Cup will feature a total of 48 teams (the expanded format introduced in 2026) playing
                across some of the most diverse and culturally rich cities in the world.
              </p>
              <p>
                For football fans, this is an opportunity like no other. Morocco offers an extraordinary combination
                of world-class football infrastructure, ancient cultural heritage, stunning natural landscapes, legendary
                cuisine, and famously warm hospitality &mdash; all at prices that are a fraction of what you would
                pay in Western Europe. Whether you are planning to follow your national team across the country, base
                yourself in one city for the group stage, or combine World Cup matches in Morocco with games in Spain
                and Portugal, this guide covers everything you need to know.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          3. HOST CITIES & STADIUMS
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <MapPin className="w-4 h-4" />
              <span>Six World-Class Venues</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Host Cities &amp; Stadiums
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              From the 115,000-seat mega-stadium in Casablanca to the sun-drenched Stade Adrar in Agadir,
              Morocco&apos;s six host cities offer world-class football infrastructure wrapped in extraordinary
              cultural experiences.
            </p>
          </div>

          <div className="space-y-8">
            {hostCityStadiums.map((venue, index) => (
              <div key={venue.city} className="card-moroccan overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img
                      src={venue.image}
                      alt={`${venue.stadium} in ${venue.city} - 2030 FIFA World Cup venue`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex flex-wrap gap-2">
                        <span className="tag tag-primary text-white bg-[var(--color-primary)] border-[var(--color-primary)]">
                          {venue.capacity} seats
                        </span>
                        <span className={`tag ${venue.status.includes('Under') || venue.status.includes('New') ? 'tag-accent' : 'tag-secondary'}`}>
                          {venue.status}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin className="w-4 h-4 text-[var(--color-accent)]" />
                      <Link href={venue.cityLink} className="text-sm font-medium text-[var(--color-accent)] hover:underline">
                        {venue.city}
                      </Link>
                    </div>
                    <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                      {venue.stadium}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {venue.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {venue.keyFacts.map((fact) => (
                        <span key={fact} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-xs font-medium text-[var(--text-secondary)] border border-[var(--border-light)]">
                          <CheckCircle className="w-3 h-3 text-[#C4960C]" />
                          {fact}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          4. GETTING TO MOROCCO
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Plane className="w-4 h-4" />
              <span>Travel Planning</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting to Morocco for the World Cup
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Morocco is exceptionally well-connected to Europe, the Middle East, and beyond.
              Whether you fly, take a ferry from Spain, or arrive by high-speed rail, getting to
              the tournament is easier than you might think.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {travelMethods.map((method) => (
              <div key={method.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <method.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{method.title}</h3>
                <ul className="space-y-3">
                  {method.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pro Tip Box */}
          <div className="mt-10 card-moroccan p-6 border-l-4 border-l-[#C4960C]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[#C4960C]/10 shrink-0">
                <Info className="w-5 h-5 text-[#C4960C]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Pro Tip: The Two-Continent Strategy</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  One of the most exciting aspects of this World Cup is the possibility of attending matches
                  in both Morocco and Spain. Fly into Madrid or Barcelona, watch a group stage match in Spain,
                  then take a short flight or ferry to Morocco for another match. Tangier is just 35 minutes
                  by fast ferry from Tarifa, Spain. The Al Boraq high-speed train then connects Tangier to
                  Casablanca in 2 hours 10 minutes. This is the ultimate football road trip across two continents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          5. ACCOMMODATION GUIDE
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Hotel className="w-4 h-4" />
              <span>Where to Stay</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Accommodation Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              From luxurious five-star hotels to intimate traditional riads and budget-friendly fan villages,
              Morocco offers accommodation for every budget. The key is to <strong>book early</strong>.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {accommodationTypes.map((type) => (
              <div key={type.title} className="card-moroccan p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
                    <type.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{type.title}</h3>
                    <span className="text-sm text-[var(--color-accent)] font-medium">{type.budget}</span>
                  </div>
                </div>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{type.description}</p>
                <div className="space-y-2">
                  {type.tips.map((tip, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#C4960C] shrink-0 mt-0.5" />
                      <span className="text-sm text-[var(--text-secondary)]">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Booking Warning */}
          <div className="mt-10 card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Book Early &mdash; Seriously</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco attracted over 15 million tourists in 2024, and the 2030 World Cup will bring an
                  additional surge. Accommodation in Casablanca, Marrakech, and Tangier will be in extremely
                  high demand. Book 12-18 months in advance for the best selection and prices. Consider
                  flexible booking options with free cancellation in case your match schedule changes. Cities
                  like Rabat, Fes, and Agadir may offer better availability and value as alternatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          6. TRANSPORTATION BETWEEN HOST CITIES
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Navigation className="w-4 h-4" />
              <span>Getting Around</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Transportation Between Host Cities
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Morocco&apos;s transport network is modern and improving rapidly ahead of 2030. High-speed rail,
              comfortable intercity buses, and domestic flights make it easy to move between host cities.
            </p>
          </div>

          {/* Transport Routes Table */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="p-6 border-b border-[var(--border-light)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <Train className="w-5 h-5 text-[var(--color-primary)]" />
                Key Routes Between Host Cities
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">From</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">To</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Method</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Duration</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Approx. Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {transportBetweenCities.map((route, i) => (
                    <tr key={i} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{route.from}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{route.to}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{route.method}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{route.duration}</td>
                      <td className="px-6 py-4 text-[var(--color-accent)] font-medium">{route.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Transport Tips */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                <Zap className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] mb-2">Al Boraq High-Speed Rail</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Africa&apos;s only high-speed rail line connects Tangier to Casablanca via Kenitra and
                Rabat at speeds up to 320 km/h. First class offers spacious seating, power outlets, and
                quiet comfort. Book at oncf.ma or at train stations.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
                <Navigation className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] mb-2">CTM &amp; Supratours Buses</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                For routes not covered by rail (such as Marrakech to Agadir), CTM and Supratours operate
                modern, air-conditioned coaches with reliable schedules. Tickets can be booked online or
                at bus stations. Significantly cheaper than flying.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10 mb-4">
                <Plane className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h4 className="font-bold text-[var(--text-primary)] mb-2">Domestic Flights</h4>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Royal Air Maroc and Air Arabia Maroc operate domestic flights between all major cities.
                Flight times are typically 45-90 minutes. Expect increased frequencies during the World
                Cup. Book early for the best fares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          7. FAN ZONES & ENTERTAINMENT
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Music className="w-4 h-4" />
              <span>The Fan Experience</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Fan Zones &amp; Entertainment
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              The World Cup experience extends far beyond the stadium. Morocco&apos;s host cities will come
              alive with fan zones, live music, cultural events, and the country&apos;s legendary cafe culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {fanZoneActivities.map((activity) => (
              <div key={activity.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <activity.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{activity.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>

          {/* Jemaa el-Fnaa callout */}
          <div className="mt-10 card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/images/hero-desert.webp"
                  alt="Jemaa el-Fnaa square in Marrakech at night - the world's greatest open-air fan zone"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag tag-primary text-white bg-[var(--color-primary)] border-[var(--color-primary)]">
                    UNESCO World Heritage
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  Jemaa el-Fnaa: The World&apos;s Greatest Open-Air Fan Zone
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Marrakech&apos;s legendary Jemaa el-Fnaa square has been the beating heart of Moroccan public
                  life for centuries. During the World Cup, expect this UNESCO-listed space to become the most
                  extraordinary informal fan zone in football history. Giant screens surrounded by food stalls,
                  musicians, storytellers, and the energy of thousands of fans from around the world &mdash;
                  this will be an experience that no purpose-built fan zone can replicate.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="tag tag-primary">Giant Screens</span>
                  <span className="tag tag-secondary">Street Food</span>
                  <span className="tag tag-accent">Live Music</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          8. TICKET INFORMATION & PRICING
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Ticket className="w-4 h-4" />
              <span>Match Tickets</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Ticket Information &amp; Pricing
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Tickets for the 2030 World Cup will be sold exclusively through official FIFA channels.
              Here is what we know so far about the ticketing process and expected pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="card-moroccan p-8 text-center">
              <div className="inline-flex p-3 rounded-full bg-[var(--color-primary)]/10 mb-4">
                <Ticket className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Group Stage</h3>
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">From ~$70</div>
              <p className="text-sm text-[var(--text-secondary)]">
                Category 3 group stage tickets will be the most affordable option. Based on 2026 pricing
                trends, expect group stage tickets ranging from approximately $70-250 USD depending on
                category and match.
              </p>
            </div>
            <div className="card-moroccan p-8 text-center border-2 border-[#C4960C]">
              <div className="inline-flex p-3 rounded-full bg-[#C4960C]/10 mb-4">
                <Star className="w-6 h-6 text-[#C4960C]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Knockout Rounds</h3>
              <div className="text-3xl font-bold text-[#C4960C] mb-2">$150-500+</div>
              <p className="text-sm text-[var(--text-secondary)]">
                Round of 32, Round of 16, Quarter-Finals, and Semi-Finals will command higher prices.
                The most desirable matches (featuring host nations or top-ranked teams) will sell
                out fastest.
              </p>
            </div>
            <div className="card-moroccan p-8 text-center">
              <div className="inline-flex p-3 rounded-full bg-[var(--color-accent)]/10 mb-4">
                <Trophy className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">The Final</h3>
              <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">$500-1,500+</div>
              <p className="text-sm text-[var(--text-secondary)]">
                The World Cup Final at the Grand Stade Hassan II (115,000 seats) will be the
                most-demanded ticket in football. Premium hospitality packages will cost
                significantly more. Apply early in the FIFA ballot.
              </p>
            </div>
          </div>

          {/* Ticketing Process */}
          <div className="card-moroccan p-8">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-primary)]" />
              How to Get Tickets
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg mb-3">1</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Register on FIFA.com</h4>
                <p className="text-sm text-[var(--text-secondary)]">Create a FIFA account and register for ticket notifications. This is essential for entering the ballot.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg mb-3">2</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Enter the Ballot</h4>
                <p className="text-sm text-[var(--text-secondary)]">FIFA uses a random ballot system for initial ticket sales, typically opening 12-18 months before the tournament.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg mb-3">3</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">First Come, First Served</h4>
                <p className="text-sm text-[var(--text-secondary)]">After the ballot phase, remaining tickets go on sale on a first-come basis. Multiple sales phases occur in the lead-up.</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg mb-3">4</div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Last-Minute &amp; Resale</h4>
                <p className="text-sm text-[var(--text-secondary)]">FIFA operates an official resale platform for fans who can no longer attend. Never buy from unofficial touts or scalpers.</p>
              </div>
            </div>
          </div>

          {/* Warning */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Beware of Ticket Scams</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Only purchase World Cup tickets through official FIFA channels at FIFA.com. Third-party
                  websites, social media sellers, and street vendors selling World Cup tickets are almost
                  certainly scams. FIFA tickets are non-transferable except through the official resale
                  platform. If a deal seems too good to be true, it is.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          9. SAFETY & SECURITY
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Shield className="w-4 h-4" />
              <span>Stay Safe</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety &amp; Security for Fans
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Morocco has an excellent safety record for hosting international events and is investing
              heavily in security infrastructure for 2030. Here is what fans need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {safetyTips.map((category) => (
              <div key={category.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <category.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{category.title}</h3>
                <ul className="space-y-3">
                  {category.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          10. FOOD & DRINK GUIDE
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <UtensilsCrossed className="w-4 h-4" />
              <span>Eat Like a Local</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food &amp; Drink Guide for Football Fans
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Moroccan cuisine is one of the world&apos;s great culinary traditions. From legendary tagines
              and couscous to street food that rivals any on Earth, eating in Morocco is an experience
              that will rival the football itself.
            </p>
          </div>

          {foodGuide.map((section) => (
            <div key={section.title} className="mb-12">
              <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
                <section.icon className="w-5 h-5 text-[var(--color-accent)]" />
                {section.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.items.map((item) => (
                  <div key={item.name} className="card-moroccan p-6">
                    <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">{item.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Dietary Note */}
          <div className="card-moroccan p-6 border-l-4 border-l-[var(--color-primary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                <Info className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">Dietary Considerations</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  All meat in Morocco is halal. Pork is not available in traditional Moroccan restaurants
                  (some international hotels and bars may serve it). Vegetarian options are plentiful &mdash;
                  vegetable tagines, salads, beans, and bread are available everywhere. Vegan visitors should
                  communicate their dietary needs clearly, as dairy and honey are common in Moroccan cooking.
                  Gluten-free options are more limited but can be found at upscale restaurants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          11. WHAT ELSE TO DO IN MOROCCO
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Camera className="w-4 h-4" />
              <span>Beyond the Beautiful Game</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              What Else to Do While in Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              The 2030 World Cup is the perfect excuse to explore one of the world&apos;s most captivating
              countries. Every host city is a destination in its own right &mdash; here is what not to miss.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tourismHighlights.map((city) => (
              <div key={city.city} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <city.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{city.city}</h3>
                <ul className="space-y-2">
                  {city.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <Star className="w-3.5 h-3.5 text-[#C4960C] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Day Trip Suggestion */}
          <div className="mt-10 card-moroccan p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] mb-3">
                  <Zap className="w-4 h-4" />
                  <span>Do Not Miss</span>
                </div>
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  The Sahara Desert Experience
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  If your match schedule allows, a 2-3 day trip to the Sahara Desert from Marrakech or Fes is
                  a life-changing experience. Ride camels into the Erg Chebbi or Erg Chigaga dunes, sleep under
                  the stars in a luxury desert camp, and witness sunrises and sunsets that will stay with you
                  forever. This is the kind of adventure that makes combining the World Cup with Moroccan
                  tourism an unbeatable proposition.
                </p>
                <Link
                  href="/sahara-guide"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
                >
                  Read Our Sahara Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  src="/images/hero-sahara-sunrise.webp"
                  alt="Sahara Desert sand dunes at sunset - a must-do experience during the 2030 World Cup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          12. BUDGET PLANNING
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Wallet className="w-4 h-4" />
              <span>Plan Your Spend</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Budget Planning for Your World Cup Visit
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Morocco is one of the most affordable World Cup destinations in history. Here is a realistic
              breakdown to help you plan your budget at every level.
            </p>
          </div>

          {/* Budget Table */}
          <div className="card-moroccan overflow-hidden mb-10">
            <div className="p-6 border-b border-[var(--border-light)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" />
                Daily Budget Estimates (per person)
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Category</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Budget</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Mid-Range</th>
                    <th className="px-6 py-3 text-sm font-semibold text-[var(--text-primary)]">Luxury</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {budgetItems.map((item) => (
                    <tr key={item.category} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-6 py-4 font-medium text-[var(--text-primary)]">{item.category}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{item.budget}</td>
                      <td className="px-6 py-4 text-[var(--color-accent)] font-medium">{item.mid}</td>
                      <td className="px-6 py-4 text-[var(--text-secondary)]">{item.luxury}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Budget Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card-moroccan p-8 text-center">
              <div className="inline-flex p-3 rounded-full bg-[var(--color-primary)]/10 mb-4">
                <Wallet className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Budget Traveler</h3>
              <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">$80-120/day</div>
              <p className="text-sm text-[var(--text-secondary)]">
                Hostels, street food, public transport, and standard match tickets. Morocco is one
                of the best-value destinations in the world for budget travelers.
              </p>
            </div>
            <div className="card-moroccan p-8 text-center border-2 border-[#C4960C]">
              <div className="inline-flex p-3 rounded-full bg-[#C4960C]/10 mb-4">
                <Star className="w-6 h-6 text-[#C4960C]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Mid-Range</h3>
              <div className="text-3xl font-bold text-[#C4960C] mb-2">$150-300/day</div>
              <p className="text-sm text-[var(--text-secondary)]">
                Comfortable riads or 3-4 star hotels, restaurant meals, taxis, guided tours,
                and good-category match tickets.
              </p>
            </div>
            <div className="card-moroccan p-8 text-center">
              <div className="inline-flex p-3 rounded-full bg-[var(--color-accent)]/10 mb-4">
                <Award className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Luxury</h3>
              <div className="text-3xl font-bold text-[var(--color-accent)] mb-2">$500+/day</div>
              <p className="text-sm text-[var(--text-secondary)]">
                Five-star hotels, fine dining, private transfers, VIP match tickets, exclusive
                experiences, and hospitality packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          13. CULTURAL TIPS
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Heart className="w-4 h-4" />
              <span>Respect & Enjoy</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Tips for Football Fans
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Morocco is a warm, welcoming country with a rich cultural heritage. A little cultural
              awareness goes a long way in ensuring you have the best possible experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalTips.map((section) => (
              <div key={section.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <section.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#C4960C] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          14. MOROCCO'S FOOTBALL HISTORY
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <Flag className="w-4 h-4" />
              <span>The Atlas Lions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Football History
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              From pioneering African football on the world stage in 1970 to the historic 2022 World Cup
              semi-final, Morocco&apos;s football journey is one of passion, perseverance, and growing global stature.
            </p>
          </div>

          {/* Timeline */}
          <div className="max-w-3xl mx-auto space-y-4 mb-12">
            {footballHistory.map((item, index) => (
              <div key={item.year} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0">
                  <div className={`w-16 h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm ${
                    item.year === '2022' || item.year === '2030'
                      ? 'gradient-moroccan'
                      : item.year === '2023'
                        ? 'bg-[var(--color-accent)]'
                        : 'bg-[var(--color-primary)]'
                  }`}>
                    {item.year}
                  </div>
                </div>
                <div>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{item.event}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 2022 World Cup Highlight */}
          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="/images/hero-marrakech.webp"
                  alt="Morocco national football team - Atlas Lions celebrating during the 2022 World Cup"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="tag tag-primary text-white bg-[var(--color-primary)] border-[var(--color-primary)]">
                    Qatar 2022
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  The 2022 Semi-Final Run That Changed Everything
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                  Morocco&apos;s journey at the 2022 Qatar World Cup was the catalyst for 2030. Under coach
                  Walid Regragui, the Atlas Lions topped a group containing Belgium and Croatia, then
                  stunned Spain on penalties (with Achraf Hakimi&apos;s legendary Panenka) and defeated
                  Cristiano Ronaldo&apos;s Portugal to become the first African and first Arab nation to
                  reach a World Cup semi-final. The images of players celebrating with their mothers,
                  of millions filling the streets of Moroccan cities, became defining moments of 2022.
                  That run proved Morocco belonged on the biggest stage &mdash; and now, in 2030, the
                  stage comes to Morocco.
                </p>
                <Link
                  href="/football"
                  className="inline-flex items-center gap-2 text-[var(--color-primary)] font-semibold hover:underline"
                >
                  Full Morocco Football Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          15. LEGACY & INFRASTRUCTURE
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Building the Future</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Legacy &amp; Infrastructure Improvements
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              The 2030 World Cup is not just a tournament &mdash; it is a transformation. Morocco is using the
              event as a catalyst for infrastructure development that will benefit the country for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legacyItems.map((item) => (
              <div key={item.title} className="card-moroccan p-8">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <item.icon className="w-6 h-6 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">{item.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Infrastructure Highlight */}
          <div className="mt-10 card-moroccan p-6 border-l-4 border-l-[var(--color-primary)]">
            <div className="flex items-start gap-4">
              <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10 shrink-0">
                <Zap className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <div>
                <h4 className="font-bold text-[var(--text-primary)] mb-1">The Numbers Behind the Transformation</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Morocco is investing an estimated <strong>$5 billion+</strong> in World Cup-related infrastructure.
                  This includes the Grand Stade Hassan II (the world&apos;s largest stadium), new high-speed rail
                  extensions, airport expansions at all six host cities, new motorway connections, urban tramway
                  extensions, thousands of new hotel rooms, and comprehensive upgrades to telecommunications
                  infrastructure including nationwide 5G coverage. The Tanger-Casablanca-Marrakech-Agadir
                  transport corridor will become one of the most modern in Africa. This is the largest
                  infrastructure investment in Moroccan history.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          16. FAQ SECTION
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              Everything you need to know about attending the 2030 World Cup in Morocco, from
              visas and weather to tickets and cultural etiquette.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="card-moroccan p-6">
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-primary)] text-white text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed pl-10">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          CTA SECTION
          =============================================================== */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Start Planning Your 2030 World Cup Trip
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-10">
            The 2030 FIFA World Cup in Morocco will be the trip of a lifetime. Start planning now to
            secure the best flights, accommodation, and match tickets. CityGuide Morocco has everything
            you need.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-10">
            <Link href="/cities" className="card-moroccan p-6 text-center hover:border-[var(--color-primary)] transition-colors group">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-3 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Explore Host Cities</h3>
              <p className="text-sm text-[var(--text-secondary)]">Casablanca, Rabat, Marrakech, Tangier, Fes, Agadir</p>
              <span className="inline-flex items-center gap-1 text-sm text-[var(--color-primary)] font-medium mt-3">
                City Guides <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-6 text-center hover:border-[var(--color-primary)] transition-colors group">
              <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-3 group-hover:bg-[var(--color-accent)]/20 transition-colors">
                <Train className="w-6 h-6 text-[var(--color-accent)]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Transport Guide</h3>
              <p className="text-sm text-[var(--text-secondary)]">Trains, buses, flights, and ferries across Morocco</p>
              <span className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] font-medium mt-3">
                Getting Around <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/accommodations" className="card-moroccan p-6 text-center hover:border-[var(--color-primary)] transition-colors group">
              <div className="inline-flex p-3 rounded-xl bg-[#C4960C]/10 mb-3 group-hover:bg-[#C4960C]/20 transition-colors">
                <Hotel className="w-6 h-6 text-[#C4960C]" />
              </div>
              <h3 className="font-bold text-[var(--text-primary)] mb-1">Where to Stay</h3>
              <p className="text-sm text-[var(--text-secondary)]">Hotels, riads, and apartments across Morocco</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#C4960C] font-medium mt-3">
                Accommodation <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/football"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Trophy className="w-4 h-4" /> Full Football Guide
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Plane,
  Shield,
  Heart,
  Camera,
  MapPin,
  Star,
  Sun,
  Coffee,
  Users,
  Compass,
  Globe,
  Wallet,
  Clock,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Landmark,
  Building2,
  Train,
  Bus,
  Car,
  Hotel,
  Bed,
  UtensilsCrossed,
  ShoppingBag,
  Languages,
  Phone,
  Wifi,
  Banknote,
  Stethoscope,
  Mountain,
  Palette,
  BookOpen,
  HandCoins,
  MessageCircle,
  CircleAlert,
  CircleCheck,
  X,
  Check,
  Lightbulb,
  Navigation,
  Shirt,
  Footprints,
  CalendarDays,
  BadgeDollarSign,
  Sparkles,
  Moon,
  Sunrise,
  Handshake,
  DoorOpen,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'First Time in Morocco 2025-2026 | Complete Beginner Guide | CityGuide',
  description:
    'The ultimate first-time visitor guide to Morocco. Visa requirements, getting around, where to stay, must-visit destinations, cultural tips, food guide, safety, bargaining, budget planning, 7-day itinerary, and everything you need for your first trip.',
  keywords: [
    'first time Morocco',
    'Morocco beginner guide',
    'Morocco first visit',
    'Morocco travel tips',
    'Morocco visa',
    'Morocco itinerary',
    'Morocco budget',
    'Morocco safety',
    'Morocco food guide',
    'Morocco culture tips',
    'Morocco transport',
    'Morocco riads',
    'Morocco bargaining',
    'Morocco language',
    'Morocco SIM card',
    'Morocco first timer mistakes',
    'Morocco dos and donts',
    'Morocco packing list',
    'Morocco currency',
    'Morocco airport guide',
  ],
  openGraph: {
    title: 'First Time in Morocco 2025-2026 - The Complete Beginner Guide',
    description:
      'Everything you need to know for your first trip to Morocco. Visa, transport, accommodation, destinations, culture, food, safety, budget, and a 7-day itinerary.',
    url: 'https://citytoursmorocco.com/first-time',
    images: [
      {
        url: '/images/hero-morocco.webp',
        width: 1200,
        height: 630,
        alt: 'Panoramic view of Morocco with colorful medina streets and Atlas Mountains',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/first-time' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://citytoursmorocco.com/first-time',
  name: 'First Time in Morocco 2025-2026 | Complete Beginner Guide',
  description:
    'The definitive guide for first-time visitors to Morocco covering visa, transport, accommodation, destinations, culture, food, safety, bargaining, budget, and itineraries.',
  url: 'https://citytoursmorocco.com/first-time',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://citytoursmorocco.com' },
      { '@type': 'ListItem', position: 2, name: 'First Time in Morocco', item: 'https://citytoursmorocco.com/first-time' },
    ],
  },
};

/* ===================================================================
   WHY VISIT MOROCCO - TOP 10 REASONS
   =================================================================== */

const whyVisitReasons = [
  {
    title: 'Incredibly Diverse Landscapes',
    icon: Mountain,
    description:
      'From the snow-capped Atlas Mountains to golden Sahara dunes, Atlantic surf beaches, lush cedar forests, and dramatic gorges. Morocco packs more geographic diversity into a small area than almost any country on Earth.',
  },
  {
    title: 'World-Class Food Culture',
    icon: UtensilsCrossed,
    description:
      'Tagine, couscous, pastilla, harira, msemen, and fresh-squeezed orange juice for pennies. Moroccan cuisine is one of the world\'s great culinary traditions, and eating well here costs remarkably little.',
  },
  {
    title: 'Ancient Medinas & Architecture',
    icon: Landmark,
    description:
      'Wander through UNESCO-listed medinas in Fes and Marrakech that have barely changed in centuries. Intricate zellige tilework, carved cedar, and soaring minarets create an architectural wonderland.',
  },
  {
    title: 'Warm Hospitality',
    icon: Heart,
    description:
      'Moroccans are famously welcoming. Expect invitations for mint tea from shopkeepers, genuine conversations with locals, and a culture that treats guests as honored visitors.',
  },
  {
    title: 'Affordable Travel',
    icon: Wallet,
    description:
      'Morocco offers exceptional value. Budget travelers can manage on 30-40 EUR per day, mid-range travelers on 60-100 EUR, and even luxury experiences cost a fraction of European prices.',
  },
  {
    title: 'Year-Round Destination',
    icon: Sun,
    description:
      'With its diverse climate zones, there is always somewhere perfect to visit in Morocco. Beach weather on the coast while it snows in the mountains, mild desert winters when Europe freezes.',
  },
  {
    title: 'Close to Europe',
    icon: Plane,
    description:
      'Just 2-3 hours by flight from most European capitals, and only 14 km from Spain across the Strait of Gibraltar. Morocco is the easiest gateway to Africa and the Arab world.',
  },
  {
    title: 'Sahara Desert Experience',
    icon: Sunrise,
    description:
      'Riding a camel into the Erg Chebbi dunes at sunset, sleeping under a sky blazing with stars in a desert camp. The Sahara experience alone is worth the trip to Morocco.',
  },
  {
    title: 'Rich Cultural Tapestry',
    icon: Palette,
    description:
      'A crossroads of Arab, Berber, Sub-Saharan African, and European influences. This blend creates a unique cultural identity expressed through music, art, cuisine, and daily life.',
  },
  {
    title: 'Vibrant Souks & Shopping',
    icon: ShoppingBag,
    description:
      'Leather goods from Fes, ceramics from Safi, carpets from the Atlas, argan oil from the Souss Valley. Morocco\'s markets offer authentic handcrafted goods you will not find anywhere else.',
  },
];

/* ===================================================================
   BEFORE YOU GO CHECKLIST
   =================================================================== */

const beforeYouGoItems = [
  {
    category: 'Visa & Passport',
    icon: Globe,
    items: [
      'Citizens of 69 countries (including USA, UK, EU, Canada, Australia) get visa-free entry for up to 90 days.',
      'Your passport must be valid for at least 6 months beyond your entry date.',
      'You will fill out an entry form on the plane or at immigration. Have your accommodation address ready.',
      'If your nationality requires a visa, apply at the nearest Moroccan embassy at least 4 weeks in advance.',
      'Keep a photocopy of your passport separately from the original. Store a digital copy in cloud storage.',
    ],
  },
  {
    category: 'Travel Insurance',
    icon: Shield,
    items: [
      'Travel insurance is not mandatory but strongly recommended. Medical evacuation alone can cost $50,000+.',
      'Ensure coverage includes medical expenses, emergency evacuation, trip cancellation, and lost luggage.',
      'Check that your policy covers adventure activities if you plan to trek, surf, or ride ATVs.',
      'World Nomads, SafetyWing, and Allianz are popular providers with good Morocco coverage.',
      'Keep your policy number and emergency contact saved on your phone and in your email.',
    ],
  },
  {
    category: 'Health & Vaccinations',
    icon: Stethoscope,
    items: [
      'No mandatory vaccinations are required for Morocco (unless arriving from a yellow fever zone).',
      'Recommended: Hepatitis A and B, Typhoid, and routine vaccinations (MMR, Tetanus, Polio).',
      'Bring any prescription medications in their original packaging with a doctor\'s note.',
      'Pack a basic medical kit: anti-diarrheal, rehydration salts, antiseptic, painkillers, allergy medicine.',
      'Tap water is generally safe in cities but bottled water (Sidi Ali, Sidi Harazem) is recommended for visitors.',
    ],
  },
  {
    category: 'Currency & Money',
    icon: Banknote,
    items: [
      'The currency is the Moroccan Dirham (MAD). 1 EUR is roughly 10-11 MAD; 1 USD is roughly 9-10 MAD.',
      'ATMs are widely available in cities and accept international Visa/Mastercard. Withdraw in MAD for best rates.',
      'Carry cash for medinas, souks, small restaurants, and taxis. Many small vendors do not accept cards.',
      'Exchange bureaus in airports offer poor rates. Use city ATMs or exchange offices in the medina instead.',
      'Budget roughly 400-600 MAD per day for mid-range travel (accommodation, food, transport, activities).',
    ],
  },
];

/* ===================================================================
   AIRPORTS DATA
   =================================================================== */

const airports = [
  {
    code: 'CMN',
    name: 'Mohammed V International',
    city: 'Casablanca',
    description:
      'Morocco\'s largest and busiest airport with the most international connections. Hub for Royal Air Maroc. Connected to Casablanca city center by train (Casa Voyageurs station, 35 min, 70 MAD) and to other cities by ONCF rail.',
    tip: 'Best for: connecting to other Moroccan cities by train, business travelers, long-haul flights.',
  },
  {
    code: 'RAK',
    name: 'Marrakech Menara',
    city: 'Marrakech',
    description:
      'The most popular tourist airport, just 6 km from the medina. Served by dozens of European low-cost carriers (Ryanair, easyJet, Transavia, Wizz Air). Quick taxi ride to Jemaa el-Fnaa (70-100 MAD, 15-20 min).',
    tip: 'Best for: most first-time visitors, budget flights from Europe, quickest start to your trip.',
  },
  {
    code: 'FEZ',
    name: 'Fes-Saiss',
    city: 'Fes',
    description:
      'Growing airport with increasing European connections. Located 15 km south of the medina. Taxi to the old city costs 150-200 MAD (30 min). Good option if starting your trip in northern Morocco.',
    tip: 'Best for: starting in Fes, avoiding Marrakech crowds, exploring northern Morocco first.',
  },
  {
    code: 'TNG',
    name: 'Tangier Ibn Battouta',
    city: 'Tangier',
    description:
      'Located 15 km from the city center. Tangier is increasingly popular as a gateway to Morocco, especially from Spain. The new high-speed Al Boraq train connects Tangier to Casablanca in 2 hours 10 minutes.',
    tip: 'Best for: combining Morocco with Spain, starting a north-to-south itinerary.',
  },
  {
    code: 'AGA',
    name: 'Agadir Al Massira',
    city: 'Agadir',
    description:
      'Main gateway for beach holidays and the Souss-Massa region. Located 25 km from the city center. Popular with European charter flights, especially in winter. Taxi to Agadir center costs 200-250 MAD.',
    tip: 'Best for: beach holidays, surfing trips, visiting Taroudant and the Anti-Atlas.',
  },
];

/* ===================================================================
   GETTING AROUND DATA
   =================================================================== */

const transportModes = [
  {
    title: 'Trains (ONCF)',
    icon: Train,
    description:
      'Morocco has Africa\'s best rail network, connecting major cities. The Al Boraq high-speed train runs Tangier to Casablanca in 2h10m. Standard trains connect Casablanca, Rabat, Fes, Meknes, Marrakech, and Oujda.',
    pros: ['Comfortable, air-conditioned, and punctual', 'Very affordable (Marrakech to Fes from 200 MAD first class)', 'Al Boraq high-speed is world-class', 'Buy tickets online at oncf.ma or at stations'],
    cons: ['Limited network (no trains to Chefchaouen, Essaouira, desert towns)', 'Second class can be crowded on popular routes', 'Delays possible on older lines'],
    priceRange: '80-300 MAD for most intercity routes',
  },
  {
    title: 'CTM & Supratours Buses',
    icon: Bus,
    description:
      'CTM and Supratours (ONCF\'s bus partner) are the premium long-distance bus companies. They go everywhere trains cannot: Chefchaouen, Essaouira, desert towns, mountain villages. Air-conditioned, assigned seating, luggage compartments.',
    pros: ['Reaches every corner of Morocco', 'Comfortable and air-conditioned', 'Affordable (Marrakech to Essaouira 80-100 MAD)', 'Online booking available for CTM (ctm.ma)'],
    cons: ['Slower than trains on shared routes', 'Bus stations can be chaotic', 'Local buses (non-CTM) are crowded and less comfortable'],
    priceRange: '50-200 MAD for most routes',
  },
  {
    title: 'Grand Taxis',
    icon: Car,
    description:
      'Shared long-distance taxis (usually white Mercedes sedans) that run fixed routes between cities and towns. They depart when full (6 passengers). Fast, cheap, and the backbone of Moroccan intercity transport. You can also hire the whole car (\"privatiser\") for comfort.',
    pros: ['Faster than buses on many routes', 'Very cheap when shared', 'Depart frequently from taxi stands', 'Authentic local experience'],
    cons: ['Cramped with 6 passengers (3 in back, 2 in front + driver)', 'No air conditioning in many', 'No fixed schedule - departs when full', 'Can feel chaotic for first-timers'],
    priceRange: '20-80 MAD per seat for most routes; 6x price to hire privately',
  },
  {
    title: 'Petit Taxis',
    icon: Navigation,
    description:
      'Small city taxis for getting around within a single city. Color-coded by city: red in Marrakech and Fes, blue in Rabat, white in Casablanca. Metered by law, though enforcement varies. Maximum 3 passengers.',
    pros: ['Cheap for getting around cities (most rides 10-30 MAD)', 'Everywhere and easy to hail', 'Metered (when the driver cooperates)'],
    cons: ['Drivers sometimes refuse the meter in tourist areas', 'Cannot leave city limits', 'Some take roundabout routes with tourists', 'Apps like inDrive and Careem are more reliable on pricing'],
    priceRange: '10-30 MAD for most city rides',
  },
  {
    title: 'Domestic Flights',
    icon: Plane,
    description:
      'Royal Air Maroc and Air Arabia Maroc operate domestic flights between major cities. Useful for saving time on long routes (e.g., Marrakech to Tangier, Casablanca to Dakhla).',
    pros: ['Saves significant time on north-south routes', 'Affordable if booked in advance (from 400 MAD one-way)', 'Modern aircraft and reliable service'],
    cons: ['Limited frequency on some routes', 'Airport transfer time reduces the time advantage on shorter routes', 'Not needed for most first-timer itineraries'],
    priceRange: '400-1500 MAD one-way depending on route and timing',
  },
];

/* ===================================================================
   WHERE TO STAY DATA
   =================================================================== */

const accommodationTypes = [
  {
    title: 'Riads (Traditional Guesthouses)',
    icon: DoorOpen,
    description:
      'The quintessential Moroccan accommodation. Riads are traditional courtyard houses converted into intimate guesthouses, typically with 4-10 rooms around a central garden or fountain. Found in medinas (old cities).',
    bestFor: 'First-time visitors who want an authentic Moroccan experience.',
    pros: ['Unique cultural experience you cannot get anywhere else', 'Personalized service and local knowledge from staff', 'Beautiful architecture with zellige tiles, carved cedar, and courtyards', 'Many include breakfast and can arrange tours'],
    cons: ['Can be hard to find in the medina maze (hosts usually meet you)', 'Some are in narrow alleys without car access', 'Quality varies enormously - read recent reviews carefully', 'Light sleepers may hear the call to prayer at 5 AM'],
    priceRange: 'Budget: 200-400 MAD | Mid-range: 500-1200 MAD | Luxury: 1500-5000+ MAD per night',
  },
  {
    title: 'Hotels',
    icon: Hotel,
    description:
      'International and Moroccan hotel chains operate throughout the country, from budget options to 5-star resorts. Hotels in the Ville Nouvelle (new city) areas offer a more familiar Western experience.',
    bestFor: 'Travelers who prefer predictable standards and modern amenities.',
    pros: ['Consistent quality standards', 'Swimming pools, gyms, and room service', 'Easy taxi/car access', 'Good for families with children'],
    cons: ['Less cultural character than riads', 'Ville Nouvelle hotels are further from medina attractions', 'Can feel generic and disconnected from local life'],
    priceRange: 'Budget: 250-500 MAD | Mid-range: 600-1500 MAD | Luxury: 2000-8000+ MAD per night',
  },
  {
    title: 'Hostels',
    icon: Bed,
    description:
      'Morocco has a growing hostel scene, especially in Marrakech, Fes, Essaouira, and Chefchaouen. Modern hostels offer dorm beds and private rooms, often with rooftop terraces and communal kitchens.',
    bestFor: 'Budget travelers and solo travelers looking to meet people.',
    pros: ['Cheapest option (dorm beds from 80-150 MAD)', 'Great social atmosphere', 'Often located in or near the medina', 'Many organize group activities and tours'],
    cons: ['Shared bathrooms in dorms', 'Can be noisy', 'Less privacy', 'Quality varies - check Hostelworld reviews'],
    priceRange: 'Dorm: 80-200 MAD | Private room: 250-500 MAD per night',
  },
  {
    title: 'Airbnb & Vacation Rentals',
    icon: Building2,
    description:
      'Apartments and entire houses available for rent, especially in cities and coastal towns. Good value for groups and longer stays. Many are beautifully furnished traditional apartments.',
    bestFor: 'Families, groups, long stays, and travelers who want a kitchen.',
    pros: ['More space than hotels or riads', 'Kitchen access for self-catering', 'Great value for groups', 'Apartments in residential areas for local life immersion'],
    cons: ['No front desk or concierge service', 'Self-check-in can be tricky in medinas', 'Less personal touch than riads', 'Some listings are not accurately represented'],
    priceRange: 'Apartment: 300-800 MAD | Entire house: 500-2000+ MAD per night',
  },
];

/* ===================================================================
   MUST-VISIT DESTINATIONS
   =================================================================== */

const destinations = [
  {
    name: 'Marrakech',
    days: '2-3 days',
    tagline: 'The Red City',
    description:
      'The gateway to Morocco for most visitors and an assault on the senses in the best possible way. The vast Jemaa el-Fnaa square transforms from a daytime market to an open-air food carnival at night. The medina is a labyrinth of souks selling everything from leather to lanterns.',
    highlights: [
      'Jemaa el-Fnaa square at sunset - food stalls, musicians, storytellers',
      'Bahia Palace and the Saadian Tombs for stunning Moroccan architecture',
      'Majorelle Garden (Yves Saint Laurent\'s botanical escape)',
      'Souks of the medina - leather, spices, lanterns, carpets',
      'Ben Youssef Madrasa - the most photogenic building in Morocco',
      'Day trip to Ourika Valley or Ouzoud Waterfalls',
    ],
    tip: 'Start here if it is your first time. Arrive a day early to recover from travel and acclimate to the sensory overload before diving into the medina.',
  },
  {
    name: 'Fes',
    days: '2 days',
    tagline: 'The Cultural Capital',
    description:
      'Fes el-Bali is the world\'s largest car-free urban area and the most complete medieval city in the Arab world. It is older, more authentic, and more intense than Marrakech. Hire an official guide for at least half a day - the medina has 9,400 alleys and no street signs.',
    highlights: [
      'Fes el-Bali medina - UNESCO World Heritage Site, the world\'s oldest living city',
      'Chouara Tannery - leather dyeing pits unchanged since medieval times',
      'Al Quaraouiyine Mosque and University - founded 859 AD, the world\'s oldest university',
      'Bou Inania Madrasa - masterpiece of Marinid architecture',
      'Mellah (Jewish Quarter) with the Ibn Danan Synagogue',
      'Ceramic cooperatives in the Fes pottery district',
    ],
    tip: 'Hire an official guide (300-500 MAD for half day) through your riad. The medina is genuinely disorienting and unofficial guides are persistent.',
  },
  {
    name: 'Chefchaouen',
    days: '1-2 days',
    tagline: 'The Blue Pearl',
    description:
      'A small mountain town painted in every shade of blue, nestled in the Rif Mountains. Chefchaouen is relaxed, photogenic, and a welcome change of pace after the intensity of Marrakech or Fes. The medina is tiny, safe, and easy to navigate on your own.',
    highlights: [
      'Wander the blue-washed streets and photograph every corner',
      'Plaza Uta el-Hammam - the main square with cafes and the kasbah',
      'Ras El Maa waterfall at the edge of town where locals do laundry',
      'Hike to the Spanish Mosque for panoramic sunset views',
      'Shop for woven blankets, goat cheese, and local crafts',
      'Day hike in Talassemtane National Park',
    ],
    tip: 'Best reached from Fes (4 hours by bus or grand taxi). Spend one night minimum to enjoy the evening atmosphere when day-trippers leave.',
  },
  {
    name: 'Sahara Desert (Merzouga)',
    days: '2 days',
    tagline: 'The Golden Dunes',
    description:
      'The Erg Chebbi dunes near Merzouga are the classic Sahara experience: towering golden sand dunes up to 150 meters high. Most visitors do an overnight camel trek to a desert camp, watching the sunset and sunrise over the dunes and sleeping under an impossibly star-filled sky.',
    highlights: [
      'Camel trek into the Erg Chebbi dunes at sunset',
      'Overnight in a desert camp (basic Berber tent or luxury glamping)',
      'Sunrise over the dunes - the single most photographed moment in Morocco',
      'Sandboarding down the dunes',
      'Drumming and traditional music around the campfire',
      'Stop at Todra Gorge and the Valley of Roses en route',
    ],
    tip: 'Book a 2-day/1-night tour from Marrakech (shared from 600 MAD, private from 2000 MAD) or Fes. The drive is long (8-10 hours each way) but the scenery along the way through the Atlas and Draa Valley is spectacular.',
  },
  {
    name: 'Essaouira',
    days: '1-2 days',
    tagline: 'The Windy City',
    description:
      'A laid-back coastal town with a Portuguese-built fortified medina, a working fishing port, and some of the best wind in Morocco. Essaouira is the antidote to Marrakech\'s intensity - slower, cooler, and effortlessly bohemian. Just 2.5 hours from Marrakech by bus.',
    highlights: [
      'Walk the ramparts (skala) overlooking the Atlantic',
      'The fishing port - watch the daily catch being auctioned and grilled on the spot',
      'Medina browsing without the high-pressure sales of Marrakech',
      'Essaouira beach - windsurfing, kitesurfing, or simply walking',
      'Gnaoua music heritage - the annual Gnaoua World Music Festival (June)',
      'Fresh seafood lunch at the port grill stalls (60-100 MAD for a full plate)',
    ],
    tip: 'Perfect as a 1-2 day side trip from Marrakech. Supratours bus runs multiple times daily (80 MAD, 2.5 hours). Bring a windbreaker - the Atlantic wind is constant.',
  },
];

/* ===================================================================
   CULTURAL DOS AND DON'TS
   =================================================================== */

const culturalDos = [
  { text: 'Learn basic Arabic greetings: "Salam alaykum" (Peace be upon you) opens every door.', icon: MessageCircle },
  { text: 'Dress modestly, especially outside tourist areas. Cover shoulders and knees. This applies to both men and women.', icon: Shirt },
  { text: 'Use your right hand for eating, greetings, and passing items. The left hand is considered unclean.', icon: Handshake },
  { text: 'Remove your shoes before entering a Moroccan home, riad room, or mosque area (non-Muslims cannot enter most mosques).', icon: Footprints },
  { text: 'Accept mint tea when offered - it is a gesture of hospitality. Refusing can be seen as rude.', icon: Coffee },
  { text: 'Bargain in the souks - it is expected and part of the culture. Start at 30-40% of the asking price.', icon: HandCoins },
  { text: 'Ask permission before photographing people, especially women and rural Berber communities.', icon: Camera },
  { text: 'Greet people before asking questions or making requests. A simple "Salam" goes a long way.', icon: Users },
  { text: 'Tip service providers: 10-15% in restaurants, 10-20 MAD for porters, 50-100 MAD for tour guides per person.', icon: Wallet },
];

const culturalDonts = [
  { text: 'Do not photograph military installations, police, or government buildings. It is illegal and officers will ask you to delete photos.', icon: Camera },
  { text: 'Do not drink alcohol in public or outside licensed establishments. Alcohol is sold in hotels, bars, and some restaurants but public drinking is unacceptable.', icon: X },
  { text: 'Do not show excessive public affection. Holding hands is fine but kissing and embracing in public are frowned upon.', icon: Heart },
  { text: 'Do not eat, drink, or smoke in public during Ramadan daylight hours out of respect for those fasting.', icon: Moon },
  { text: 'Do not discuss the Western Sahara conflict, criticize the King, or disparage Islam. These are sensitive topics that can cause offense or legal trouble.', icon: AlertTriangle },
  { text: 'Do not enter mosques unless explicitly invited (only Hassan II Mosque in Casablanca has regular non-Muslim visitor tours).', icon: Landmark },
  { text: 'Do not hand things to people with your left hand or point the soles of your feet at someone while sitting.', icon: X },
  { text: 'Do not assume every friendly approach is a scam. Many Moroccans are genuinely hospitable. Read the situation rather than rejecting everyone.', icon: Users },
];

/* ===================================================================
   FOOD GUIDE
   =================================================================== */

const mustTryDishes = [
  {
    name: 'Tagine',
    description:
      'The national dish. Slow-cooked stew prepared in a cone-shaped clay pot. Chicken with preserved lemons and olives, lamb with prunes and almonds, or kefta (meatball) with eggs and tomato are the classics. Every restaurant and home serves it differently.',
    price: '30-80 MAD in local restaurants, 80-200 MAD in tourist spots',
  },
  {
    name: 'Couscous',
    description:
      'Steamed semolina grains topped with vegetables, chickpeas, and meat (lamb, chicken, or beef). Traditionally served on Fridays after mosque. The couscous you try in Morocco will change your understanding of the dish forever.',
    price: '30-70 MAD in local restaurants',
  },
  {
    name: 'Pastilla (Bastilla)',
    description:
      'A sweet-and-savory pie with layers of flaky warqa pastry, shredded pigeon or chicken, almonds, cinnamon, and powdered sugar. A specialty of Fes but available everywhere. The contrast of flavors is extraordinary.',
    price: '40-100 MAD',
  },
  {
    name: 'Harira',
    description:
      'A thick, hearty soup of tomatoes, lentils, chickpeas, herbs, and sometimes lamb. The traditional Ramadan break-fast soup, but available year-round. Warming, filling, and costs almost nothing.',
    price: '5-15 MAD (street stalls) | 20-40 MAD (restaurants)',
  },
  {
    name: 'Msemen & Baghrir',
    description:
      'Msemen are square, flaky pan-fried flatbreads, crispy outside and soft inside. Baghrir are spongy "thousand-hole" crepes. Both are breakfast staples served with honey and butter. Find them at any street stall in the morning.',
    price: '2-5 MAD per piece',
  },
  {
    name: 'Moroccan Mint Tea',
    description:
      'Chinese gunpowder green tea brewed with fresh spearmint and generous sugar, poured from a height for the perfect foam. Not just a drink but a cultural ritual. You will be offered tea everywhere. Always accept.',
    price: '5-15 MAD per glass',
  },
  {
    name: 'Fresh Orange Juice',
    description:
      'Morocco is the land of fresh-squeezed orange juice. Stalls throughout the medinas press it on the spot. Sweet, cold, and costs almost nothing. The orange juice in Jemaa el-Fnaa is a rite of passage.',
    price: '4-10 MAD per glass',
  },
  {
    name: 'Tanjia (Marrakech Specialty)',
    description:
      'A Marrakech-only dish: beef or lamb slow-cooked for 8+ hours in an urn buried in the ashes of a hammam furnace. Rich, melt-in-your-mouth tender, and deeply spiced. Ask your riad where to find authentic tanjia.',
    price: '50-100 MAD per portion',
  },
];

const streetFoodSafety = [
  'Eat where locals eat - long queues at a street stall mean the food is fresh and trusted.',
  'Avoid pre-cut fruit displayed in the open for hours. Buy whole fruit or freshly cut.',
  'Street food that is cooked to order in front of you (grilled meats, msemen, eggs) is generally safe.',
  'Drink bottled water and avoid ice from unknown sources in basic establishments.',
  'Wash your hands before eating or carry hand sanitizer. Many street stalls have hand-washing stations.',
  'Stomach adjustment is normal for the first day or two. Carry anti-diarrheal medication as a precaution.',
  'Riads and restaurants with visible kitchens and high turnover are your safest bets for first-timers.',
];

/* ===================================================================
   COMMON MISTAKES
   =================================================================== */

const commonMistakes = [
  {
    mistake: 'Only visiting Marrakech',
    fix: 'Morocco is incredibly diverse. Fes, Chefchaouen, the Sahara, and the coast are completely different experiences. Plan at least 7 days to see multiple destinations.',
  },
  {
    mistake: 'Not learning basic French or Arabic phrases',
    fix: 'Even "Salam," "Shukran" (thank you), and "La, shukran" (no, thank you) make a huge difference in interactions. French is widely spoken if your Arabic is limited.',
  },
  {
    mistake: 'Exchanging money at the airport',
    fix: 'Airport exchange rates are terrible. Withdraw MAD from an ATM in the city, or exchange at a reputable bureau in the medina. Only exchange enough at the airport for a taxi.',
  },
  {
    mistake: 'Not agreeing on taxi prices beforehand',
    fix: 'Always insist on the meter for petit taxis. For grand taxis and airport transfers, agree on the price before getting in. Use ride-hailing apps (inDrive, Careem) for transparent pricing.',
  },
  {
    mistake: 'Over-packing your itinerary',
    fix: 'Morocco rewards slow travel. Rushing between five cities in a week means exhausting bus rides and no time to absorb the atmosphere. Pick 2-3 main destinations and linger.',
  },
  {
    mistake: 'Being rude to touts instead of firm but polite',
    fix: '"La, shukran" (No, thank you) said firmly with a smile works better than ignoring or being aggressive. Touts are persistent but rarely hostile when you remain calm and polite.',
  },
  {
    mistake: 'Not carrying cash',
    fix: 'Card acceptance is growing but Morocco is still largely a cash economy, especially in medinas, souks, small restaurants, and for taxis. Always carry a mix of small bills.',
  },
  {
    mistake: 'Dressing inappropriately',
    fix: 'Morocco is tolerant but conservative. Shorts, tank tops, and revealing clothing attract unwanted attention outside tourist resorts. Cover shoulders and knees for a more comfortable experience.',
  },
  {
    mistake: 'Expecting everything to run on schedule',
    fix: 'Morocco operates on its own time. Buses may be late, meetings may not start on time, and "5 minutes" often means 30. Embrace the pace rather than fighting it.',
  },
  {
    mistake: 'Skipping Ramadan travel entirely',
    fix: 'While some restaurants close during the day, Ramadan in Morocco is a beautiful cultural experience. Evenings come alive after iftar (breaking the fast), and tourist services continue as normal.',
  },
];

/* ===================================================================
   LANGUAGE BASICS
   =================================================================== */

const usefulPhrases = [
  { phrase: 'Salam alaykum', pronunciation: 'sa-LAM a-LAY-kum', meaning: 'Peace be upon you (universal greeting)' },
  { phrase: 'Wa alaykum salam', pronunciation: 'wa a-LAY-kum sa-LAM', meaning: 'And upon you peace (reply)' },
  { phrase: 'Labas?', pronunciation: 'la-BAS', meaning: 'How are you? / Are you well?' },
  { phrase: 'Labas, hamdullah', pronunciation: 'la-BAS, ham-DOO-lah', meaning: 'Fine, praise God' },
  { phrase: 'Shukran', pronunciation: 'SHOO-kran', meaning: 'Thank you' },
  { phrase: 'Afak / Min fadlak', pronunciation: 'a-FAK / min FAD-lak', meaning: 'Please' },
  { phrase: 'La, shukran', pronunciation: 'LA, SHOO-kran', meaning: 'No, thank you' },
  { phrase: 'Iyeh / Na\'am', pronunciation: 'ee-YEH / NA-am', meaning: 'Yes' },
  { phrase: 'B-shhal?', pronunciation: 'b-SHAL', meaning: 'How much? (essential for shopping)' },
  { phrase: 'Ghali bezzaf!', pronunciation: 'GHA-lee bez-ZAF', meaning: 'Too expensive!' },
  { phrase: 'Smehli', pronunciation: 'SMEH-lee', meaning: 'Excuse me / Sorry' },
  { phrase: 'Fin kayn...?', pronunciation: 'FEEN kine', meaning: 'Where is...?' },
  { phrase: 'Merci / Merci beaucoup', pronunciation: 'mer-SEE / mer-SEE bo-KOO', meaning: 'Thank you (French, widely understood)' },
  { phrase: 'L\'addition, s\'il vous plait', pronunciation: 'la-dee-SYON seel voo PLAY', meaning: 'The check, please (French, for restaurants)' },
  { phrase: 'Bismillah', pronunciation: 'bis-MIL-lah', meaning: 'In the name of God (said before eating)' },
  { phrase: 'Insha\'Allah', pronunciation: 'in-SHA al-LAH', meaning: 'God willing (used for future plans)' },
  { phrase: 'Ma fhemtsh', pronunciation: 'ma FHEMT-sh', meaning: 'I don\'t understand' },
  { phrase: 'Tkellm ingliziya?', pronunciation: 'tkel-LEM in-glee-ZEE-ya', meaning: 'Do you speak English?' },
  { phrase: 'Ana mn [country]', pronunciation: 'ANA men...', meaning: 'I am from [country]' },
  { phrase: 'Bslama', pronunciation: 'b-SLA-ma', meaning: 'Goodbye' },
];

/* ===================================================================
   SHOPPING & BARGAINING GUIDE
   =================================================================== */

const bargainingSteps = [
  { step: 1, title: 'Browse without showing too much interest', description: 'Walk around, look casually, and note items you like. Showing excitement raises the starting price. Never ask the price of something you do not intend to buy.' },
  { step: 2, title: 'Ask the price casually', description: 'When you find something you want, ask "B-shhal?" (How much?). The first price quoted is always inflated, often 2-5x the fair price in tourist areas.' },
  { step: 3, title: 'Counter at 30-40% of the asking price', description: 'This is not insulting - it is expected. The vendor will act shocked but this is part of the dance. Your counter offer signals you are ready to negotiate.' },
  { step: 4, title: 'Negotiate slowly toward the middle', description: 'Go back and forth in small increments. Take your time. Drink tea if offered. The final price usually lands at 40-60% of the initial asking price.' },
  { step: 5, title: 'Use the walk-away technique', description: 'If you cannot agree, thank the vendor and slowly walk toward the door. If they call you back with a lower price, you know there is room. If they let you go, you were already near the real price.' },
  { step: 6, title: 'Pay and leave happy', description: 'Once you agree on a price, do not continue negotiating. Pay without regret. If you got an item you like at a price you can afford, it was a fair deal regardless of what someone else might have paid.' },
];

const typicalPrices = [
  { item: 'Leather bag (medium)', touristPrice: '600-1200 MAD', fairPrice: '200-400 MAD' },
  { item: 'Small Berber carpet (1.5m x 1m)', touristPrice: '2000-5000 MAD', fairPrice: '500-1500 MAD' },
  { item: 'Ceramic tagine (decorative)', touristPrice: '200-500 MAD', fairPrice: '60-150 MAD' },
  { item: 'Babouche slippers (leather)', touristPrice: '200-400 MAD', fairPrice: '60-120 MAD' },
  { item: 'Argan oil (1 liter, cosmetic)', touristPrice: '400-800 MAD', fairPrice: '200-350 MAD' },
  { item: 'Spice mix (100g bag)', touristPrice: '50-150 MAD', fairPrice: '10-30 MAD' },
  { item: 'Lantern (brass, medium)', touristPrice: '500-1500 MAD', fairPrice: '150-400 MAD' },
  { item: 'Woven basket bag', touristPrice: '200-400 MAD', fairPrice: '60-150 MAD' },
];

/* ===================================================================
   7-DAY ITINERARY
   =================================================================== */

const itinerary = [
  {
    day: 1,
    title: 'Arrive in Marrakech',
    location: 'Marrakech',
    activities: [
      'Arrive at Marrakech Menara Airport (RAK). Taxi to your riad in the medina.',
      'Check in and rest. Explore your immediate neighborhood on foot.',
      'Late afternoon: walk to Jemaa el-Fnaa square as it comes alive.',
      'Dinner at the food stalls in the square or at a rooftop restaurant overlooking it.',
      'Early night to recover from travel.',
    ],
  },
  {
    day: 2,
    title: 'Marrakech Exploration',
    location: 'Marrakech',
    activities: [
      'Morning: Bahia Palace and the nearby Mellah (Jewish Quarter).',
      'Mid-morning: Saadian Tombs and the Kasbah Mosque area.',
      'Lunch at a local restaurant in the Kasbah neighborhood (Naranj or Chez Lamine).',
      'Afternoon: Majorelle Garden and Yves Saint Laurent Museum.',
      'Late afternoon: deep dive into the souks. Spice souk, leather souk, carpet souk.',
      'Evening: rooftop dinner with medina views. Try a tagine or tanjia.',
    ],
  },
  {
    day: 3,
    title: 'Marrakech to Fes',
    location: 'Marrakech to Fes',
    activities: [
      'Option A: ONCF train (7 hours, scenic route through the plains).',
      'Option B: Domestic flight (1 hour, from 400 MAD if booked early).',
      'Arrive in Fes. Taxi or riad transfer to your accommodation in the medina.',
      'Evening walk around Bab Bou Jeloud (Blue Gate) and Talaa Kebira.',
      'Dinner in the Fes medina. Try pastilla, the city\'s signature dish.',
    ],
  },
  {
    day: 4,
    title: 'Fes Medina Deep Dive',
    location: 'Fes',
    activities: [
      'Full-day guided tour of Fes el-Bali with an official guide (300-500 MAD).',
      'Chouara Tannery from the leather shop terraces above.',
      'Al Quaraouiyine Mosque (exterior) and the Nejjarine Museum of Wooden Arts.',
      'Bou Inania Madrasa - the most stunning religious school in Morocco.',
      'Lunch in the medina (try a Fassi-style tagine with preserved lemons).',
      'Afternoon: Mellah and Royal Palace gates. Browse the pottery and ceramics district.',
      'Evening: dinner at a traditional Fassi restaurant with live Andalusian music.',
    ],
  },
  {
    day: 5,
    title: 'Fes to Chefchaouen',
    location: 'Chefchaouen',
    activities: [
      'Morning CTM bus or grand taxi from Fes to Chefchaouen (4 hours).',
      'Arrive and check into your riad in the blue medina.',
      'Lunch at a plaza cafe with views of the Rif Mountains.',
      'Afternoon: explore the blue-painted streets at your own pace.',
      'Visit the small kasbah and its garden in the main square.',
      'Hike up to the Spanish Mosque for sunset over the blue city.',
      'Dinner in the medina. Try local goat cheese and Rif mountain specialties.',
    ],
  },
  {
    day: 6,
    title: 'Chefchaouen & Travel to Marrakech',
    location: 'Chefchaouen to Marrakech',
    activities: [
      'Morning: explore any corners of Chefchaouen you missed. Visit Ras El Maa waterfall.',
      'Shop for woven blankets, local soaps, and blue-themed crafts.',
      'Afternoon: CTM bus to Fes (4 hours), then evening train to Marrakech (7 hours).',
      'Alternative: fly Fes to Marrakech (1 hour) if time is short.',
      'Arrive late in Marrakech. Rest at your riad.',
    ],
  },
  {
    day: 7,
    title: 'Essaouira Day Trip or Departure',
    location: 'Essaouira or Marrakech',
    activities: [
      'Option A (if departing late): Day trip to Essaouira. Supratours bus at 7:30 AM (2.5 hours).',
      'Walk the ramparts, explore the port, eat fresh grilled seafood, browse the relaxed medina.',
      'Return bus to Marrakech at 3:30 or 5 PM.',
      'Option B: Spend the morning revisiting favorite Marrakech spots or shopping for souvenirs.',
      'Visit Ben Youssef Madrasa if you missed it on Day 2.',
      'Final mint tea on a rooftop terrace. Transfer to airport for departure.',
    ],
  },
];

/* ===================================================================
   BUDGET PLANNING
   =================================================================== */

const budgetData = [
  {
    style: 'Budget Backpacker',
    dailyCost: '250-400 MAD (25-40 EUR)',
    accommodation: 'Hostels (80-150 MAD/night) or budget riads (200-300 MAD)',
    food: 'Street food and local restaurants (60-100 MAD/day)',
    transport: 'Buses and shared grand taxis (20-80 MAD per trip)',
    activities: 'Free walking, mosques (exterior), souks, public beaches',
    tips: 'Cook in hostel kitchens, eat where locals eat, use CTM buses, visit free attractions.',
  },
  {
    style: 'Mid-Range Traveler',
    dailyCost: '600-1000 MAD (60-100 EUR)',
    accommodation: 'Mid-range riads (500-800 MAD/night)',
    food: 'Mix of local restaurants and nicer spots (150-250 MAD/day)',
    transport: 'First class trains, occasional petit taxis (50-150 MAD/day)',
    activities: 'Guided tours, museum entry, cooking class (100-300 MAD/day)',
    tips: 'Book riads directly for better rates, use ONCF trains, negotiate taxi fares.',
  },
  {
    style: 'Comfort / Luxury',
    dailyCost: '2000-5000+ MAD (200-500+ EUR)',
    accommodation: 'Luxury riads or 5-star hotels (1500-5000+ MAD/night)',
    food: 'Fine dining, hotel restaurants (400-800+ MAD/day)',
    transport: 'Private drivers, domestic flights (500-2000 MAD/day)',
    activities: 'Private guides, spa, hot air balloon, luxury desert camp (500-3000 MAD/day)',
    tips: 'Book luxury desert camps months ahead, private drivers give the most flexible itineraries.',
  },
];

/* ===================================================================
   COMMUNICATION
   =================================================================== */

const communicationTips = [
  {
    title: 'SIM Cards',
    icon: Phone,
    details: [
      'Buy a prepaid SIM at the airport or any Maroc Telecom, Inwi, or Orange shop in the city.',
      'Cost: 20-50 MAD for the SIM + 20-100 MAD for a data package (5-20 GB).',
      'Maroc Telecom has the best rural coverage. Inwi and Orange are cheaper with good city coverage.',
      'Bring your passport - it is required for SIM registration.',
      'eSIM options (Airalo, Holafly) work if your phone supports them. Buy before departure.',
    ],
  },
  {
    title: 'WiFi Availability',
    icon: Wifi,
    details: [
      'Most riads, hotels, and hostels offer free WiFi, though speeds vary.',
      'Cafes in tourist areas usually have WiFi (ask for the password when ordering).',
      'WiFi in rural areas and the desert is limited or nonexistent. Rely on mobile data.',
      'Download offline maps (Google Maps or Maps.me) before arriving - essential for medina navigation.',
      'WhatsApp is the primary communication tool in Morocco. Locals, tour guides, and restaurants all use it.',
    ],
  },
];

/* ===================================================================
   FAQ DATA
   =================================================================== */

const faqs = [
  {
    question: 'Is Morocco safe for first-time visitors?',
    answer:
      'Yes. Morocco is one of the safest countries in Africa for tourists. Violent crime against visitors is extremely rare. The main concerns are petty theft in crowded areas, aggressive touts in medinas, and occasional taxi scams - all manageable with basic awareness. Over 14 million tourists visit annually without serious incidents.',
  },
  {
    question: 'Do I need a visa to visit Morocco?',
    answer:
      'Citizens of 69 countries including the USA, UK, EU member states, Canada, Australia, and Japan can enter Morocco visa-free for up to 90 days. Check the Moroccan Ministry of Foreign Affairs website for the full list. Your passport must be valid for at least 6 months.',
  },
  {
    question: 'What is the best time of year to visit Morocco?',
    answer:
      'The best overall months are March-May (spring) and September-November (autumn), when temperatures are comfortable across the country. Summer (June-August) is great for the coast but extremely hot inland. Winter (December-February) is ideal for the desert but cold in the mountains.',
  },
  {
    question: 'How many days do I need in Morocco?',
    answer:
      'A minimum of 7 days allows you to see Marrakech, one other city (Fes or Essaouira), and possibly the desert. 10-14 days is ideal for a comprehensive first trip covering Marrakech, Fes, Chefchaouen, the Sahara, and the coast. Even 4-5 days in Marrakech and Essaouira makes a rewarding short trip.',
  },
  {
    question: 'Is Morocco expensive?',
    answer:
      'Morocco is very affordable compared to Europe and North America. Budget travelers can manage on 25-40 EUR per day, mid-range travelers on 60-100 EUR, and luxury experiences cost a fraction of equivalent European prices. Accommodation, food, and transport are all excellent value.',
  },
  {
    question: 'Can I use credit cards in Morocco?',
    answer:
      'Credit cards are accepted in upscale hotels, restaurants, and large shops in cities. However, Morocco is still largely a cash economy. Medinas, souks, small restaurants, taxis, and most daily transactions require cash (Moroccan Dirhams). Always carry cash alongside your cards.',
  },
  {
    question: 'Is Morocco safe for solo female travelers?',
    answer:
      'Many women travel solo in Morocco successfully. Dress modestly (cover shoulders and knees), be confident when declining unwanted attention with a firm "La, shukran," stay in well-reviewed accommodations, and trust your instincts. Catcalling can occur but physical harassment is rare. Many riads and tour operators cater specifically to solo female travelers.',
  },
  {
    question: 'Should I book tours in advance or on arrival?',
    answer:
      'Sahara desert tours and multi-day excursions should be booked in advance, especially in peak season. City walking tours, day trips, and cooking classes can usually be arranged through your riad on arrival, often at better prices than online. For guided medina tours, official guides can be hired at the spot or through your accommodation.',
  },
  {
    question: 'Can I drink the tap water?',
    answer:
      'Tap water in Moroccan cities is technically treated and safe for locals, but visitors should stick to bottled water (Sidi Ali and Sidi Harazem are the most common brands). Bottled water costs 3-5 MAD at shops. Avoid ice in very basic establishments.',
  },
  {
    question: 'What should I pack for Morocco?',
    answer:
      'Modest, comfortable clothing (cover shoulders and knees), sturdy walking shoes for cobblestone medinas, a light scarf (useful for sun, wind, and mosque visits), sunscreen, a hat, a reusable water bottle, hand sanitizer, basic medications, a money belt, and an adapter (Morocco uses European Type C/E plugs). Pack layers as temperatures swing between day and night.',
  },
];

/* ===================================================================
   RELATED PAGES
   =================================================================== */

const relatedPages = [
  { title: 'Safety in Morocco', href: '/safety', description: 'Detailed safety guide, scam awareness, and emergency contacts' },
  { title: 'Moroccan Etiquette & Culture', href: '/etiquette', description: 'Deep dive into customs, dress code, and cultural norms' },
  { title: 'Best Time to Visit', href: '/best-time', description: 'Month-by-month weather, crowds, and activity guide' },
  { title: 'Getting Around Morocco', href: '/transport', description: 'Complete transport guide: trains, buses, taxis, flights' },
  { title: 'Where to Stay', href: '/accommodations', description: 'Riads, hotels, and accommodation guide by city' },
  { title: 'Moroccan Food Guide', href: '/food', description: 'Full guide to Moroccan cuisine and where to eat' },
  { title: '7-Day Morocco Itinerary', href: '/morocco-itinerary-7-days', description: 'Detailed day-by-day itinerary for first-timers' },
  { title: 'Budget Calculator', href: '/tools/budget', description: 'Plan your Morocco spending with our interactive calculator' },
  { title: 'Learn Darija', href: '/darija', description: 'Essential Moroccan Arabic phrases for travelers' },
  { title: 'Emergency Contacts', href: '/emergency', description: 'Police, hospitals, embassies, and emergency numbers' },
  { title: 'Public Transport', href: '/public-transport', description: 'Buses, trams, taxis, and how to get around' },
  { title: 'Packing Checklist', href: '/tools/checklist', description: 'Interactive Morocco-specific packing list' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function FirstTimePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-morocco.webp"
            alt="Panoramic view of Morocco with colorful medina and mountains"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">First Time in Morocco</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              The Complete Beginner Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Complete First Trip to Morocco Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Everything you need to plan, prepare for, and enjoy your first visit to Morocco &mdash; from visa requirements and transport to cultural tips, food, bargaining, and a ready-made 7-day itinerary. Updated for 2025-2026.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          TABLE OF CONTENTS
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="inline-flex p-2.5 rounded-xl bg-[var(--color-primary)]/10">
                <BookOpen className="w-5 h-5 text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                What&apos;s in This Guide
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {[
                { label: 'Why Visit Morocco', anchor: '#why-visit' },
                { label: 'Before You Go Checklist', anchor: '#before-you-go' },
                { label: 'Getting There (Airports)', anchor: '#getting-there' },
                { label: 'Getting Around', anchor: '#getting-around' },
                { label: 'Where to Stay', anchor: '#where-to-stay' },
                { label: 'Must-Visit Destinations', anchor: '#destinations' },
                { label: 'Cultural Dos and Don\'ts', anchor: '#culture' },
                { label: 'Food Guide for Beginners', anchor: '#food' },
                { label: 'Common Mistakes to Avoid', anchor: '#mistakes' },
                { label: 'Safety Overview', anchor: '#safety' },
                { label: 'Language Basics', anchor: '#language' },
                { label: 'Shopping & Bargaining', anchor: '#shopping' },
                { label: '7-Day Itinerary', anchor: '#itinerary' },
                { label: 'Budget Planning', anchor: '#budget' },
                { label: 'Communication & SIM Cards', anchor: '#communication' },
                { label: 'Frequently Asked Questions', anchor: '#faq' },
              ].map((item) => (
                <a
                  key={item.anchor}
                  href={item.anchor}
                  className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--color-accent)] transition-colors py-1.5"
                >
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WHY VISIT MOROCCO
          ============================================================ */}
      <section id="why-visit" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Star className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Top 10 Reasons to Visit Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is one of the most rewarding destinations on Earth for first-time visitors. Here is why it should be on your list.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyVisitReasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="card-moroccan p-6 flex gap-4">
                  <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-accent)]/10 h-fit shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-2">
                      {index + 1}. {reason.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Illustrated Map Visual ── */}
      <div className="container-morocco py-12">
        <div className="rounded-2xl overflow-hidden">
          <img
            src="/images/illustration-morocco-map.webp"
            alt="Illustrated map of Morocco showing major cities, landmarks, the Atlas Mountains, Sahara Desert, and Atlantic coastline"
            loading="lazy"
            className="w-full h-64 md:h-96 object-cover"
          />
          <p className="text-sm text-[var(--text-muted)] mt-3 text-center">
            Morocco at a glance -- from the Mediterranean coast to the Sahara, packed with diversity in a compact geography
          </p>
        </div>
      </div>

      {/* ============================================================
          BEFORE YOU GO CHECKLIST
          ============================================================ */}
      <section id="before-you-go" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CheckCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Before You Go Checklist
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Get these essentials sorted before your departure and you will arrive in Morocco stress-free and ready to explore.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {beforeYouGoItems.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-semibold text-lg text-[var(--text-primary)]">{category.category}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                        <CircleCheck className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Morocco Infographic ── */}
      <div className="container-morocco py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/infographic-morocco.webp"
              alt="Infographic showing key Morocco travel statistics, distances between cities, currency, climate zones, and useful facts"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="text-sm text-[var(--text-muted)] mt-2 text-center">Essential Morocco facts at a glance</p>
          </div>
          <div className="rounded-2xl overflow-hidden">
            <img
              src="/images/poster-morocco-vintage.webp"
              alt="Vintage-style travel poster of Morocco featuring iconic architecture, palm trees, and warm desert tones"
              loading="lazy"
              className="w-full h-64 md:h-80 object-cover"
            />
            <p className="text-sm text-[var(--text-muted)] mt-2 text-center">Morocco has inspired travelers for centuries</p>
          </div>
        </div>
      </div>

      {/* ============================================================
          GETTING THERE - AIRPORTS
          ============================================================ */}
      <section id="getting-there" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting There: Morocco&apos;s Main Airports
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has excellent air connections, especially from Europe. Here are the five airports that matter for first-time visitors.
            </p>
          </div>
          <div className="space-y-4">
            {airports.map((airport, index) => (
              <div key={index} className="card-moroccan p-6">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                    <span className="text-xl font-bold text-[var(--color-accent)]">{airport.code}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-[var(--text-primary)] mb-1">
                      {airport.name} &mdash; {airport.city}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">
                      {airport.description}
                    </p>
                    <div className="flex items-start gap-2 text-sm">
                      <Lightbulb className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)] italic">{airport.tip}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GETTING AROUND
          ============================================================ */}
      <section id="getting-around" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Getting Around Morocco
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has a solid transport network. Here is how to get between cities and around town.
            </p>
          </div>
          <div className="space-y-6">
            {transportModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <div key={index} className="card-moroccan p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-semibold text-lg text-[var(--text-primary)]">{mode.title}</h3>
                    <span className="ml-auto text-sm font-medium text-[var(--color-accent)]">{mode.priceRange}</span>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    {mode.description}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wide mb-2">Pros</p>
                      <ul className="space-y-1.5">
                        {mode.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <Check className="w-3.5 h-3.5 text-[var(--color-green)] shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-2">Cons</p>
                      <ul className="space-y-1.5">
                        {mode.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <X className="w-3.5 h-3.5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          WHERE TO STAY
          ============================================================ */}
      <section id="where-to-stay" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Hotel className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Where to Stay: Accommodation Guide
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              From traditional riads to modern hostels, here is what to expect from each accommodation type and what you should budget.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {accommodationTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-accent)]/10">
                      <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-semibold text-lg text-[var(--text-primary)]">{type.title}</h3>
                  </div>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-3">{type.description}</p>
                  <p className="text-sm mb-3">
                    <span className="font-medium text-[var(--text-primary)]">Best for: </span>
                    <span className="text-[var(--text-secondary)]">{type.bestFor}</span>
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-green)] uppercase tracking-wide mb-1.5">Pros</p>
                      <ul className="space-y-1">
                        {type.pros.map((pro, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <Check className="w-3 h-3 text-[var(--color-green)] shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wide mb-1.5">Cons</p>
                      <ul className="space-y-1">
                        {type.cons.map((con, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                            <X className="w-3 h-3 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-medium">Price range:</span> {type.priceRange}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          MUST-VISIT DESTINATIONS
          ============================================================ */}
      <section id="destinations" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MapPin className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Must-Visit Destinations for First-Timers
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              These five destinations form the classic first-time Morocco circuit. Each offers a completely different experience.
            </p>
          </div>
          <div className="space-y-8">
            {destinations.map((dest, index) => (
              <div key={index} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {dest.name}
                        </h3>
                        <p className="text-sm text-[var(--color-accent)] font-medium">{dest.tagline}</p>
                      </div>
                    </div>
                    <span className="md:ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-muted)] bg-[var(--surface-muted)] px-3 py-1 rounded-full w-fit">
                      <Clock className="w-3.5 h-3.5" />
                      {dest.days}
                    </span>
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                    {dest.description}
                  </p>
                  <div className="mb-5">
                    <p className="text-sm font-semibold text-[var(--text-primary)] mb-3">Highlights:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {dest.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                          <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/10">
                    <Lightbulb className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <p className="text-sm text-[var(--text-secondary)]">
                      <span className="font-medium text-[var(--color-accent)]">Tip: </span>
                      {dest.tip}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CULTURAL DOS AND DON'TS
          ============================================================ */}
      <section id="culture" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Handshake className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Cultural Dos and Don&apos;ts
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is welcoming and tolerant, but respecting local customs will transform your experience. These tips will help you connect with locals rather than unintentionally offend.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* DOs */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CircleCheck className="w-5 h-5 text-[var(--color-green)]" />
                <h3 className="text-xl font-semibold text-[var(--color-green)]">Do</h3>
              </div>
              <div className="space-y-3">
                {culturalDos.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="card-moroccan p-4 flex items-start gap-3">
                      <Icon className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {/* DON'Ts */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CircleAlert className="w-5 h-5 text-[var(--color-secondary)]" />
                <h3 className="text-xl font-semibold text-[var(--color-secondary)]">Don&apos;t</h3>
              </div>
              <div className="space-y-3">
                {culturalDonts.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="card-moroccan p-4 flex items-start gap-3">
                      <Icon className="w-4 h-4 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--text-secondary)]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOD GUIDE
          ============================================================ */}
      <section id="food" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <UtensilsCrossed className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Food Guide for Beginners
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Moroccan cuisine is one of the world&apos;s great food cultures. Here are the dishes every first-timer must try, plus practical advice on eating safely and well.
            </p>
          </div>

          {/* Must-Try Dishes */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Must-Try Dishes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {mustTryDishes.map((dish, index) => (
              <div key={index} className="card-moroccan p-5">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">{dish.name}</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{dish.description}</p>
                <p className="text-xs text-[var(--color-accent)] font-medium">{dish.price}</p>
              </div>
            ))}
          </div>

          {/* Street Food Safety */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Street Food Safety Tips
          </h3>
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <ul className="space-y-3">
              {streetFoodSafety.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CircleCheck className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span className="text-sm">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ramadan Note */}
          <div className="card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Moon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Eating During Ramadan</h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  During Ramadan, most local restaurants close during daylight hours. Tourist restaurants and hotels continue serving, but options are reduced. After sunset (iftar), cities come alive with food stalls and special Ramadan dishes. Do not eat, drink, or smoke visibly in public during fasting hours out of respect. Ramadan dates shift each year (roughly 10 days earlier annually) &mdash; check the exact dates before planning your trip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMON MISTAKES
          ============================================================ */}
      <section id="mistakes" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
              <AlertTriangle className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              10 Common Mistakes First-Timers Make
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Learn from the mistakes of millions of travelers who came before you. Every one of these is avoidable with a little preparation.
            </p>
          </div>
          <div className="space-y-4">
            {commonMistakes.map((item, index) => (
              <div key={index} className="card-moroccan p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-bold text-sm shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)] mb-1">{item.mistake}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-medium text-[var(--color-green)]">How to avoid it: </span>
                      {item.fix}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SAFETY OVERVIEW
          ============================================================ */}
      <section id="safety" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-green)]/10 mb-4">
              <Shield className="w-6 h-6 text-[var(--color-green)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Safety Overview
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-6">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco is generally very safe for tourists. The Kingdom has invested heavily in tourism security, maintains dedicated tourist police in major cities, and violent crime against visitors is extremely rare. Over 14 million tourists visited in 2024, the vast majority without any significant safety incident.
              </p>
              <p>
                The main concerns for first-timers are petty issues: pickpocketing in crowded medinas, aggressive touts trying to guide you to their shop, taxi drivers refusing the meter, and inflated prices for tourists. None of these are dangerous &mdash; they are annoyances that diminish with experience and confidence.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="card-moroccan p-4 text-center">
              <div className="text-xl font-bold text-[var(--color-green)]">Low</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Violent Crime Risk</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-xl font-bold text-[var(--color-accent)]">Medium</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">Petty Theft / Scam Risk</p>
            </div>
            <div className="card-moroccan p-4 text-center">
              <div className="text-xl font-bold text-[var(--color-green)]">Very High</div>
              <p className="text-xs text-[var(--text-secondary)] mt-1">General Hospitality</p>
            </div>
          </div>

          <div className="card-moroccan p-6">
            <h3 className="font-semibold text-[var(--text-primary)] mb-4">Quick Safety Tips</h3>
            <ul className="space-y-3">
              {[
                'Keep valuables hidden and use your hotel safe for passports and excess cash.',
                'Be alert in crowded areas like Jemaa el-Fnaa, bus stations, and busy souks. Pickpocketing is the most common crime.',
                'Always agree on taxi prices before getting in, or insist on the meter. Use inDrive or Careem for transparent pricing.',
                'Say "La, shukran" firmly to touts and keep walking. Do not engage if you are not interested.',
                'Avoid poorly lit alleys at night, especially alone. Stick to main streets and well-trafficked areas.',
                'Carry a card with your riad\'s name and address in Arabic for taxi drivers.',
                'Register with your embassy before travel and save emergency numbers: Police 19, Ambulance 15, Tourist Police 112.',
                'Buy travel insurance that covers medical evacuation. Private clinics in cities are good but expensive.',
              ].map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                  <Lightbulb className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
            >
              Read the full Morocco Safety Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          LANGUAGE BASICS
          ============================================================ */}
      <section id="language" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Languages className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Language Basics: 20 Essential Phrases
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s main languages are Darija (Moroccan Arabic), French, and Amazigh (Berber). English is increasingly spoken in tourist areas but a few local phrases will earn you enormous goodwill.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="text-left p-3 font-semibold">Phrase</th>
                    <th className="text-left p-3 font-semibold">Pronunciation</th>
                    <th className="text-left p-3 font-semibold">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {usefulPhrases.map((phrase, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-[var(--surface-muted)]'}
                    >
                      <td className="p-3 font-medium text-[var(--color-accent)]">{phrase.phrase}</td>
                      <td className="p-3 text-[var(--text-muted)] italic">{phrase.pronunciation}</td>
                      <td className="p-3 text-[var(--text-secondary)]">{phrase.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5 border-l-4 border-[var(--color-primary)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-medium text-[var(--text-primary)]">Language tip: </span>
                French is your best fallback language in Morocco. Most Moroccans in cities speak French fluently, and it is the language of business, education, and government. In northern Morocco (Tangier, Tetouan), Spanish is also widely understood. English is growing rapidly among younger Moroccans and in tourist areas, but less common in rural regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SHOPPING & BARGAINING
          ============================================================ */}
      <section id="shopping" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <ShoppingBag className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Shopping & Bargaining for Beginners
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Bargaining is a way of life in Moroccan souks. It is not aggressive &mdash; it is a social interaction. Here is how to do it with confidence and enjoy the process.
            </p>
          </div>

          {/* Bargaining Steps */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            The 6-Step Bargaining Guide
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {bargainingSteps.map((step) => (
              <div key={step.step} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-accent)] text-white font-bold text-sm">
                    {step.step}
                  </span>
                  <h4 className="font-semibold text-sm text-[var(--text-primary)]">{step.title}</h4>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Typical Prices */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Typical Prices: What Tourists Pay vs. Fair Price
          </h3>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="text-left p-3 font-semibold">Item</th>
                    <th className="text-left p-3 font-semibold">Tourist Price</th>
                    <th className="text-left p-3 font-semibold">Fair Price</th>
                  </tr>
                </thead>
                <tbody>
                  {typicalPrices.map((item, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-[var(--surface)]' : 'bg-[var(--surface-muted)]'}
                    >
                      <td className="p-3 font-medium text-[var(--text-primary)]">{item.item}</td>
                      <td className="p-3 text-[var(--color-secondary)]">{item.touristPrice}</td>
                      <td className="p-3 text-[var(--color-green)] font-medium">{item.fairPrice}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-medium text-[var(--text-primary)]">Pro tip: </span>
                Fixed-price shops and cooperatives (especially government-run Ensemble Artisanal shops) exist in every major city. Visit one first to understand fair prices before heading into the souks. This gives you a solid baseline for negotiations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7-DAY ITINERARY
          ============================================================ */}
      <section id="itinerary" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <CalendarDays className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Suggested 7-Day First-Timer Itinerary
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              This itinerary covers Morocco&apos;s three most essential destinations &mdash; Marrakech, Fes, and Chefchaouen &mdash; with an optional Essaouira day trip. Adjust the pace to suit your travel style.
            </p>
          </div>

          <div className="space-y-4">
            {itinerary.map((day) => (
              <div key={day.day} className="card-moroccan p-5 md:p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold">
                      {day.day}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[var(--text-primary)]">{day.title}</h3>
                      <p className="text-xs text-[var(--color-accent)]">{day.location}</p>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 ml-13">
                  {day.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <Link
              href="/itineraries/7-day-morocco"
              className="inline-flex items-center gap-2 text-[var(--color-accent)] hover:text-[var(--color-accent-dark)] font-medium transition-colors"
            >
              See the detailed 7-day itinerary with maps and booking links
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          BUDGET PLANNING
          ============================================================ */}
      <section id="budget" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <BadgeDollarSign className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Budget Planning: Daily Costs by Travel Style
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco accommodates every budget. Here is a realistic breakdown of what to expect at each level.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {budgetData.map((budget, index) => (
              <div key={index} className="card-moroccan p-6">
                <div className="text-center mb-4 pb-4 border-b border-[var(--border-light)]">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">{budget.style}</h3>
                  <p className="text-2xl font-bold text-[var(--color-accent)] mt-1">{budget.dailyCost}</p>
                  <p className="text-xs text-[var(--text-muted)]">per person per day</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-[var(--text-primary)] mb-0.5">Accommodation</p>
                    <p className="text-[var(--text-secondary)]">{budget.accommodation}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-primary)] mb-0.5">Food</p>
                    <p className="text-[var(--text-secondary)]">{budget.food}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-primary)] mb-0.5">Transport</p>
                    <p className="text-[var(--text-secondary)]">{budget.transport}</p>
                  </div>
                  <div>
                    <p className="font-medium text-[var(--text-primary)] mb-0.5">Activities</p>
                    <p className="text-[var(--text-secondary)]">{budget.activities}</p>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-[var(--border-light)]">
                  <div className="flex items-start gap-2">
                    <Lightbulb className="w-3.5 h-3.5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <p className="text-xs text-[var(--text-muted)]">{budget.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          COMMUNICATION
          ============================================================ */}
      <section id="communication" className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <Phone className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Communication: SIM Cards & WiFi
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Staying connected in Morocco is easy and cheap. Here is what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communicationTips.map((section, index) => {
              const Icon = section.icon;
              return (
                <div key={index} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex p-2.5 rounded-lg bg-[var(--color-primary)]/10">
                      <Icon className="w-5 h-5 text-[var(--color-primary)]" />
                    </div>
                    <h3 className="font-semibold text-lg text-[var(--text-primary)]">{section.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {section.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                        <CircleCheck className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section id="faq" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
              <MessageCircle className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="card-moroccan p-5 md:p-6">
                <h3 className="font-semibold text-[var(--text-primary)] mb-2 flex items-start gap-2">
                  <Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-1" />
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed ml-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10 mb-4">
              <Compass className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Continue Planning Your Trip
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Dive deeper into specific topics with our detailed guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="card-moroccan p-5 group hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1.5 flex items-center gap-2">
                  {page.title}
                  <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{page.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <Plane className="w-10 h-10 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold mb-4">
            Ready for Your First Morocco Adventure?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            Morocco rewards the curious traveler. With this guide as your foundation, you are well-prepared for one of the most memorable trips of your life. The medinas are waiting, the tagines are simmering, and the Sahara sunsets are as spectacular as everyone says.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-accent)] hover:bg-[var(--color-accent-dark)] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse Itineraries
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Explore Cities
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Essential First-Time Visitor Guides */}
      <section className="py-12 md:py-16" style={{ backgroundColor: 'var(--surface-muted)' }}>
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            Essential First-Time Visitor Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/morocco-trip-cost', title: 'Morocco Trip Cost Breakdown', desc: 'Know exactly how much to budget — daily costs for food, transport, accommodation, and activities.' },
              { href: '/what-to-wear-in-morocco', title: 'What to Wear in Morocco', desc: 'Dress code guide for mosques, medinas, beaches, and the desert — by season and region.' },
              { href: '/is-morocco-safe', title: 'Is Morocco Safe?', desc: 'Honest safety guide covering scams, solo travel, women travelers, and neighborhood safety ratings.' },
              { href: '/morocco-tipping-guide', title: 'Morocco Tipping Guide', desc: 'How much to tip at restaurants, hotels, and for tour guides — avoid awkward moments.' },
              { href: '/morocco-sim-card', title: 'SIM Card & Internet Guide', desc: 'Stay connected — best carriers, data plans, and where to buy a SIM card on arrival.' },
              { href: '/morocco-3-days', title: 'Morocco in 3 Days', desc: 'Short on time? This itinerary covers the must-see highlights in just three days.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Plane,
  Car,
  Bus,
  Train,
  MapPin,
  Clock,
  Phone,
  Globe,
  Star,
  Shield,
  CreditCard,
  Wifi,
  Users,
  Building2,
  Luggage,
  Crown,
  ArrowRight,
  AlertCircle,
  Banknote,
  Fuel,
  Smartphone,
  CheckCircle2,
  Info,
  Navigation,
  PlaneTakeoff,
  PlaneLanding,
  ShoppingBag,
  Coffee,
  Gift,
  ScanLine,
  FileText,
  ShieldCheck,
  Tag,
  Timer,
  Bookmark,
  TrendingUp,
  TrendingDown,
  BaggageClaim,
  ScrollText,
  CircleDollarSign,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Airports & Ground Transport | Complete Travel Guide 2025',
  description:
    'Complete guide to Morocco\'s 12 major airports, airlines, VIP services, ground transportation, car rental, taxis, customs & immigration, duty-free shopping, and inter-city transport. Real data on CMN, RAK, FEZ, TNG, AGA, and more.',
  keywords: [
    'Morocco airports',
    'Mohammed V International Airport',
    'Marrakech Menara Airport',
    'CMN airport',
    'RAK airport',
    'Morocco airlines',
    'Royal Air Maroc',
    'Morocco airport transfer',
    'Morocco car rental',
    'Morocco taxi',
    'Morocco ground transport',
    'Al Boraq train Morocco',
    'CTM bus Morocco',
    'Careem Morocco',
    'Morocco VIP airport lounge',
    'Morocco customs immigration',
    'Morocco duty free',
    'Morocco SIM card airport',
    'Morocco flight booking tips',
  ],
  openGraph: {
    title: 'Morocco Airports & Ground Transport - Complete Guide 2025',
    description:
      'Everything you need to know about flying into Morocco and getting around. 12 airports, 15+ airlines, ground transport, car rental, customs tips, duty-free guide, and practical arrival tips.',
    url: 'https://citytoursmorocco.com/airports',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1583862490786-85ea1a1e85a6?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Aerial view of a Moroccan airport terminal',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/airports' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Morocco Airports & Ground Transport Guide',
  description:
    'Comprehensive guide to Morocco\'s airports, airlines serving the country, VIP airport services, ground transportation companies, customs and immigration procedures, duty-free shopping, inter-city transport, and practical tips for airport arrivals.',
  url: 'https://citytoursmorocco.com/airports',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Airport',
        name: 'Mohammed V International Airport',
        iataCode: 'CMN',
        address: { '@type': 'PostalAddress', addressLocality: 'Casablanca', addressCountry: 'MA' },
      },
      {
        '@type': 'Airport',
        name: 'Marrakech Menara Airport',
        iataCode: 'RAK',
        address: { '@type': 'PostalAddress', addressLocality: 'Marrakech', addressCountry: 'MA' },
      },
      {
        '@type': 'Airport',
        name: 'Fes-Saiss Airport',
        iataCode: 'FEZ',
        address: { '@type': 'PostalAddress', addressLocality: 'Fes', addressCountry: 'MA' },
      },
      {
        '@type': 'Airport',
        name: 'Tangier Ibn Battouta Airport',
        iataCode: 'TNG',
        address: { '@type': 'PostalAddress', addressLocality: 'Tangier', addressCountry: 'MA' },
      },
    ],
  },
};

/* ===================================================================
   AIRPORT DATA
   =================================================================== */

const majorAirports = [
  {
    code: 'CMN',
    name: 'Mohammed V International Airport',
    city: 'Casablanca',
    cityLink: '/cities/casablanca',
    description: 'Morocco\'s busiest and largest airport. The primary hub for Royal Air Maroc and the main gateway for international travelers arriving in Morocco.',
    distanceFromCity: '30 km south of Casablanca city center',
    terminals: 'Terminal 1 (international), Terminal 2 (domestic and some international)',
    annualPassengers: '~10.3 million',
    airlines: ['Royal Air Maroc', 'Air Arabia Maroc', 'Air France', 'Lufthansa', 'Turkish Airlines', 'Emirates', 'Qatar Airways', 'Etihad', 'Ryanair', 'easyJet', 'Transavia', 'Iberia', 'TUI fly'],
    taxiToCityCenter: '250-350 MAD (fixed rate), ~35 min',
    busOptions: 'Airport Express Train to Casa Voyageurs (43 MAD, 35 min, hourly). Supratours shuttle to city center.',
    facilities: ['Free WiFi', 'VIP Lounges (Pearl Lounge T1 & T2)', 'ATMs and currency exchange', 'Car rental desks (Hertz, Avis, Europcar, Budget)', 'Restaurants and duty-free shops', 'Pharmacy', 'Prayer rooms', 'SIM card kiosks (Maroc Telecom, Inwi, Orange)'],
    vip: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=600&h=400&fit=crop',
  },
  {
    code: 'RAK',
    name: 'Marrakech Menara Airport',
    city: 'Marrakech',
    cityLink: '/cities/marrakech',
    description: 'Morocco\'s second busiest airport, recently expanded with a renovated Terminal 2. Major gateway for tourism, receiving flights from across Europe and the Middle East.',
    distanceFromCity: '6 km southwest of Marrakech medina',
    terminals: 'Terminal 1, Terminal 2 (renovated 2016, handles most international flights)',
    annualPassengers: '~7 million',
    airlines: ['Royal Air Maroc', 'Ryanair', 'easyJet', 'Transavia', 'TUI fly', 'Vueling', 'Air Arabia Maroc', 'Air France', 'Lufthansa', 'Turkish Airlines', 'Wizz Air', 'Norwegian'],
    taxiToCityCenter: '70-100 MAD to medina, ~15 min',
    busOptions: 'Bus 19 to Jemaa el-Fna (30 MAD, 20-30 min). Pre-booked private transfers widely available.',
    facilities: ['Free WiFi', 'VIP Lounge', 'ATMs and currency exchange', 'Car rental desks', 'Cafes and shops', 'Tourist information desk', 'Prayer rooms', 'SIM card vendors'],
    vip: true,
    featured: true,
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=600&h=400&fit=crop',
  },
  {
    code: 'FEZ',
    name: 'Fes-Saiss Airport',
    city: 'Fes',
    cityLink: '/cities/fes',
    description: 'Serves both Fes and Meknes. Growing steadily with increasing low-cost carrier connections from European cities.',
    distanceFromCity: '15 km south of Fes city center',
    terminals: 'Single terminal (expanded in 2017)',
    annualPassengers: '~1.8 million',
    airlines: ['Royal Air Maroc', 'Ryanair', 'Transavia', 'Air Arabia Maroc', 'TUI fly', 'Vueling', 'Wizz Air'],
    taxiToCityCenter: '120-150 MAD, ~20 min',
    busOptions: 'Bus 16 to city center (5 MAD, ~30 min). Grand taxis also available.',
    facilities: ['WiFi', 'ATMs', 'Car rental desks', 'Cafe', 'Currency exchange'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'TNG',
    name: 'Tangier Ibn Battouta Airport',
    city: 'Tangier',
    cityLink: '/cities/tangier',
    description: 'Major gateway from Europe, especially Spain. Modernized terminal with increasing international connections. Tangier is a growing economic hub.',
    distanceFromCity: '12 km southwest of Tangier city center',
    terminals: 'Single terminal (modernized 2019)',
    annualPassengers: '~2.2 million',
    airlines: ['Royal Air Maroc', 'Ryanair', 'Air Arabia Maroc', 'easyJet', 'Vueling', 'Transavia', 'TUI fly', 'Iberia Express'],
    taxiToCityCenter: '100-150 MAD, ~20 min',
    busOptions: 'Grand taxis to city center. Tangier Ville train station accessible by taxi for onward Al Boraq connections.',
    facilities: ['Free WiFi', 'VIP Lounge', 'ATMs', 'Car rental', 'Duty-free', 'Restaurants'],
    vip: true,
    featured: false,
    image: '',
  },
  {
    code: 'AGA',
    name: 'Agadir Al Massira Airport',
    city: 'Agadir',
    cityLink: '/cities/agadir',
    description: 'Beach resort gateway serving Agadir and the Souss-Massa region. Busy with European charter flights, especially during winter months.',
    distanceFromCity: '22 km southeast of Agadir center',
    terminals: 'Terminal 1, Terminal 2 (seasonal)',
    annualPassengers: '~2.1 million',
    airlines: ['Royal Air Maroc', 'Ryanair', 'TUI fly', 'Transavia', 'easyJet', 'Condor', 'Jet2', 'Corendon'],
    taxiToCityCenter: '150-200 MAD, ~25 min',
    busOptions: 'Pre-arranged hotel shuttles common for package tourists. Grand taxis available at the terminal exit.',
    facilities: ['WiFi', 'ATMs', 'Car rental desks', 'Cafe', 'Currency exchange', 'Tourist information'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'RBA',
    name: 'Rabat-Sale Airport',
    city: 'Rabat',
    cityLink: '/cities/rabat',
    description: 'Serves the capital city Rabat and neighboring Sale. Smaller than CMN but increasingly used for diplomatic and governmental travel.',
    distanceFromCity: '10 km northeast of Rabat center',
    terminals: 'Single terminal',
    annualPassengers: '~900,000',
    airlines: ['Royal Air Maroc', 'Ryanair', 'Air Arabia Maroc', 'TUI fly', 'Transavia'],
    taxiToCityCenter: '100-150 MAD, ~20 min',
    busOptions: 'Tram Line 2 extension planned. Currently petit taxis and grand taxis serve the airport.',
    facilities: ['WiFi', 'ATMs', 'Car rental', 'Cafe'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'NDR',
    name: 'Nador International Airport',
    city: 'Nador',
    cityLink: '/regions',
    description: 'Serves the Rif region and the Moroccan diaspora in Europe. Strong connections to Spain, France, Belgium, and the Netherlands.',
    distanceFromCity: '23 km southeast of Nador center',
    terminals: 'Single terminal',
    annualPassengers: '~850,000',
    airlines: ['Royal Air Maroc', 'Air Arabia Maroc', 'Ryanair', 'Transavia', 'TUI fly'],
    taxiToCityCenter: '100-150 MAD, ~25 min',
    busOptions: 'Grand taxis run to Nador center and Al Hoceima.',
    facilities: ['ATMs', 'Car rental', 'Cafe', 'Currency exchange'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'OUD',
    name: 'Oujda Angads Airport',
    city: 'Oujda',
    cityLink: '/regions',
    description: 'Eastern Morocco\'s main airport near the Algerian border. Serves the Oujda-Angad metropolitan area and surrounding region.',
    distanceFromCity: '12 km north of Oujda center',
    terminals: 'Single terminal',
    annualPassengers: '~750,000',
    airlines: ['Royal Air Maroc', 'Air Arabia Maroc', 'Ryanair', 'Transavia'],
    taxiToCityCenter: '80-120 MAD, ~15 min',
    busOptions: 'Petit taxis and grand taxis available outside the terminal.',
    facilities: ['ATMs', 'Car rental', 'Cafe'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'OZZ',
    name: 'Ouarzazate Airport',
    city: 'Ouarzazate',
    cityLink: '/desert',
    description: 'Small desert gateway airport. Serves visitors to the film studios, Ait Benhaddou, and the Draa Valley. Limited scheduled services.',
    distanceFromCity: '1.5 km from Ouarzazate center',
    terminals: 'Single small terminal',
    annualPassengers: '~60,000',
    airlines: ['Royal Air Maroc', 'Transavia (seasonal)'],
    taxiToCityCenter: '20-30 MAD, ~5 min',
    busOptions: 'Walking distance to town center. Petit taxis available.',
    facilities: ['Basic cafe', 'ATM', 'Car rental'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'ESU',
    name: 'Essaouira-Mogador Airport',
    city: 'Essaouira',
    cityLink: '/cities/essaouira',
    description: 'Seasonal airport serving the coastal town of Essaouira. Most flights operate only during peak tourist season (spring/summer).',
    distanceFromCity: '16 km southeast of Essaouira',
    terminals: 'Single small terminal',
    annualPassengers: '~180,000',
    airlines: ['Ryanair (seasonal)', 'Transavia (seasonal)', 'easyJet (seasonal)'],
    taxiToCityCenter: '100-150 MAD, ~20 min',
    busOptions: 'Grand taxis to Essaouira medina. Some hotels arrange pick-ups.',
    facilities: ['Basic cafe', 'ATM'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'VIL',
    name: 'Dakhla Airport',
    city: 'Dakhla',
    cityLink: '/regions',
    description: 'Serves the southern city of Dakhla on the Atlantic coast. Growing in popularity for kitesurfing tourism and Saharan exploration.',
    distanceFromCity: '5 km from Dakhla center',
    terminals: 'Single terminal (new terminal under development)',
    annualPassengers: '~200,000',
    airlines: ['Royal Air Maroc', 'Air Arabia Maroc'],
    taxiToCityCenter: '30-50 MAD, ~10 min',
    busOptions: 'Petit taxis available. Many kitesurf camps offer airport transfers.',
    facilities: ['Basic cafe', 'ATM'],
    vip: false,
    featured: false,
    image: '',
  },
  {
    code: 'ERH',
    name: 'Errachidia Moulay Ali Cherif Airport',
    city: 'Errachidia',
    cityLink: '/desert',
    description: 'Sahara gateway airport serving visitors headed to the Merzouga dunes, Todra Gorge, and Ziz Valley. Very limited flights.',
    distanceFromCity: '4 km from Errachidia center',
    terminals: 'Single small terminal',
    annualPassengers: '~30,000',
    airlines: ['Royal Air Maroc (limited schedule)'],
    taxiToCityCenter: '20-30 MAD, ~5 min',
    busOptions: 'Petit taxis to town center. CTM and Supratours buses connect Errachidia to Merzouga (3-4 hours).',
    facilities: ['Basic services'],
    vip: false,
    featured: false,
    image: '',
  },
];

/* ===================================================================
   AIRLINES DATA
   =================================================================== */

const airlines = [
  {
    code: 'AT',
    name: 'Royal Air Maroc',
    type: 'National Carrier',
    hub: 'Casablanca (CMN)',
    alliance: 'Oneworld',
    routes: 'Extensive domestic and international network. 100+ destinations across Africa, Europe, Middle East, and North America. Direct flights to New York (JFK), Montreal, and Washington D.C.',
    highlight: true,
  },
  {
    code: '3O',
    name: 'Air Arabia Maroc',
    type: 'Low-Cost Carrier',
    hub: 'Casablanca (CMN)',
    alliance: 'None',
    routes: 'Budget domestic and short-haul international flights. Strong presence on Europe-Morocco routes. Growing network within Africa.',
    highlight: true,
  },
  {
    code: 'FR',
    name: 'Ryanair',
    type: 'Low-Cost Carrier',
    hub: 'Multiple European bases',
    alliance: 'None',
    routes: 'Largest European low-cost operator in Morocco. Serves RAK, FEZ, TNG, AGA, RBA, ESU, NDR, OUD from 20+ European cities.',
    highlight: true,
  },
  {
    code: 'U2',
    name: 'easyJet',
    type: 'Low-Cost Carrier',
    hub: 'London, Paris, and others',
    alliance: 'None',
    routes: 'UK and France connections to CMN, RAK, FEZ, AGA. Popular with British and French tourists.',
    highlight: false,
  },
  {
    code: 'TO/HV',
    name: 'Transavia',
    type: 'Low-Cost Carrier',
    hub: 'Paris Orly, Amsterdam',
    alliance: 'None (Air France-KLM subsidiary)',
    routes: 'France and Netherlands to CMN, RAK, FEZ, TNG, AGA, NDR, OUD, OZZ. Very popular with Moroccan diaspora.',
    highlight: false,
  },
  {
    code: 'TB',
    name: 'TUI fly',
    type: 'Charter / Low-Cost',
    hub: 'Multiple European bases',
    alliance: 'None',
    routes: 'Seasonal and charter flights from Belgium, Netherlands, Germany, UK to RAK, AGA, CMN.',
    highlight: false,
  },
  {
    code: 'VY',
    name: 'Vueling',
    type: 'Low-Cost Carrier',
    hub: 'Barcelona',
    alliance: 'None (IAG subsidiary)',
    routes: 'Spain connections to CMN, RAK, FEZ, TNG. Strong Barcelona and Madrid routes.',
    highlight: false,
  },
  {
    code: 'IB',
    name: 'Iberia',
    type: 'Full-Service Carrier',
    hub: 'Madrid',
    alliance: 'Oneworld',
    routes: 'Madrid to CMN and TNG. Convenient connections to Latin America via Madrid hub.',
    highlight: false,
  },
  {
    code: 'AF',
    name: 'Air France',
    type: 'Full-Service Carrier',
    hub: 'Paris CDG',
    alliance: 'SkyTeam',
    routes: 'Paris to CMN, RAK, FEZ, TNG, AGA. Premium service with global connections via Paris.',
    highlight: false,
  },
  {
    code: 'LH',
    name: 'Lufthansa',
    type: 'Full-Service Carrier',
    hub: 'Frankfurt',
    alliance: 'Star Alliance',
    routes: 'Frankfurt to CMN and RAK. Excellent connections to Asia and Americas via Frankfurt.',
    highlight: false,
  },
  {
    code: 'TK',
    name: 'Turkish Airlines',
    type: 'Full-Service Carrier',
    hub: 'Istanbul (IST)',
    alliance: 'Star Alliance',
    routes: 'Istanbul to CMN and RAK. Wide global connectivity through Istanbul hub.',
    highlight: false,
  },
  {
    code: 'EK',
    name: 'Emirates',
    type: 'Full-Service Carrier',
    hub: 'Dubai (DXB)',
    alliance: 'None',
    routes: 'Dubai to CMN daily. Premium long-haul service with connections to Asia, Australia, and beyond.',
    highlight: false,
  },
  {
    code: 'QR',
    name: 'Qatar Airways',
    type: 'Full-Service Carrier',
    hub: 'Doha (DOH)',
    alliance: 'Oneworld',
    routes: 'Doha to CMN. Award-winning service with extensive global network via Doha.',
    highlight: false,
  },
  {
    code: 'EY',
    name: 'Etihad Airways',
    type: 'Full-Service Carrier',
    hub: 'Abu Dhabi (AUH)',
    alliance: 'None',
    routes: 'Abu Dhabi to CMN. Gulf connections and onward flights to Asia and Australia.',
    highlight: false,
  },
  {
    code: 'W6',
    name: 'Wizz Air',
    type: 'Ultra Low-Cost Carrier',
    hub: 'Multiple European bases',
    alliance: 'None',
    routes: 'Budget European routes to RAK, FEZ, TNG from cities across Central and Eastern Europe.',
    highlight: false,
  },
];

/* ===================================================================
   GROUND TRANSPORT DATA
   =================================================================== */

const airportTransfers = [
  {
    name: 'Supratours (ONCF)',
    type: 'Airport Shuttle / Coach',
    description: 'Operated by ONCF (national railway). Airport shuttle buses connect CMN to Casablanca Voyageurs station. Also runs coach services to destinations not served by rail.',
    priceRange: '30-200 MAD depending on route',
    booking: 'At Supratours counters in airports/train stations or oncf-voyages.ma',
    phone: '+212 890 20 30 40',
  },
  {
    name: 'CTM',
    type: 'National Coach Service',
    description: 'Morocco\'s premier intercity bus company. CTM coaches depart from central stations in every major city. Modern air-conditioned buses with reserved seating.',
    priceRange: '50-250 MAD depending on distance',
    booking: 'ctm.ma or at CTM ticket offices',
    phone: '+212 522 54 10 10',
  },
  {
    name: 'Airport Express Train (CMN)',
    type: 'Rail Connection',
    description: 'Direct ONCF train service from Mohammed V Airport (CMN) to Casablanca Voyageurs station and onward to Rabat. Runs every hour, reliable and affordable.',
    priceRange: '43-70 MAD (CMN to Casa Voyageurs)',
    booking: 'Tickets at airport ONCF counter or oncf-voyages.ma',
    phone: '+212 890 20 30 40',
  },
];

const privateCars = [
  {
    name: 'Morocco VIP Transfer',
    type: 'Private Transfer Service',
    description: 'Professional private airport transfers across Morocco. Sedans, minivans, and luxury vehicles. Meet-and-greet service at arrivals.',
    priceRange: '300-1,500 MAD depending on distance and vehicle',
    booking: 'Online booking via website or WhatsApp',
    phone: '+212 661 44 55 66',
  },
  {
    name: 'Marrakech VIP Transfer',
    type: 'Private Transfer Service',
    description: 'Specialized in Marrakech airport transfers and day trips. Professional English-speaking drivers. Fixed prices displayed on website.',
    priceRange: '150-800 MAD',
    booking: 'Website booking or WhatsApp',
    phone: '+212 668 80 90 00',
  },
  {
    name: 'Atlas Voyages',
    type: 'Travel Agency / Transfers',
    description: 'One of Morocco\'s largest travel agencies. Offers organized airport transfers, private tours, and custom itineraries nationwide.',
    priceRange: '400-2,000 MAD depending on service',
    booking: 'atlasvoyages.com or agency offices',
    phone: '+212 522 20 63 63',
  },
];

const taxiServices = [
  {
    name: 'Petit Taxi',
    type: 'Intra-city Metered Taxi',
    description: 'Small city taxis (3 passengers max) that operate within city limits only. Each city has its own distinctive color. Always ask the driver to turn on the meter (compteur).',
    priceRange: '7-50 MAD per ride (50% surcharge after 8pm)',
    booking: 'Hail on the street or find at taxi stands',
    color: 'Varies by city: red (Casablanca/Fes), beige (Marrakech), blue (Rabat), orange (Agadir)',
  },
  {
    name: 'Grand Taxi',
    type: 'Inter-city Shared / Private Taxi',
    description: 'Shared intercity taxis (Dacia Logans or minivans) that run fixed routes. Depart from designated stations when full (6 passengers). You can pay for extra seats for more comfort or hire the entire taxi.',
    priceRange: '20-150 MAD per seat depending on route',
    booking: 'Go to grand taxi station and state your destination',
    color: 'Typically white Mercedes or Dacia Logan',
  },
];

const rideHailing = [
  {
    name: 'Careem',
    type: 'Ride-Hailing App',
    description: 'Uber-style ride-hailing app (now owned by Uber). Fixed pricing before booking, professional drivers, in-app payment. Available in Casablanca, Rabat, Marrakech, Tangier, Agadir, and Fes.',
    priceRange: '15-80 MAD for city rides',
    booking: 'Careem app (iOS and Android)',
    phone: 'In-app support',
  },
  {
    name: 'inDrive',
    type: 'Ride-Hailing App',
    description: 'The most popular ride-hailing app in Morocco. Unique bidding system where you propose a fare and drivers can accept or counter-offer. Available in all major and many secondary cities.',
    priceRange: '10-60 MAD for city rides (negotiable)',
    booking: 'inDrive app (iOS and Android)',
    phone: 'In-app support',
  },
];

const carRentalCompanies = [
  { name: 'Hertz Morocco', type: 'International', locations: 'All major airports and city centers', priceRange: 'From 350 MAD/day', website: 'hertz.ma' },
  { name: 'Avis Morocco', type: 'International', locations: 'All major airports and city centers', priceRange: 'From 300 MAD/day', website: 'avis.ma' },
  { name: 'Europcar Morocco', type: 'International', locations: 'All major airports and city centers', priceRange: 'From 320 MAD/day', website: 'europcar.ma' },
  { name: 'Budget Morocco', type: 'International', locations: 'Major airports (CMN, RAK, TNG, AGA)', priceRange: 'From 280 MAD/day', website: 'budget.ma' },
  { name: 'National Car', type: 'International', locations: 'CMN, RAK, AGA airports', priceRange: 'From 300 MAD/day', website: 'nationalcar.ma' },
  { name: 'Medina Cars', type: 'Local', locations: 'Major cities and airports', priceRange: 'From 200 MAD/day', website: 'medinacars.com' },
];

const luxuryServices = [
  {
    name: 'Royal Car Morocco',
    type: 'Luxury Car Service',
    description: 'Premium fleet including Mercedes S-Class, BMW 7-Series, and luxury SUVs. Chauffeur-driven airport transfers and city tours.',
    priceRange: 'From 1,500 MAD per transfer',
    booking: 'Website or concierge services at luxury hotels',
  },
  {
    name: 'Morocco Luxury Services',
    type: 'Luxury Concierge & Transport',
    description: 'Full-service luxury travel company offering airport meet-and-greet, limousine transfers, private jet arrangements, and VIP event transport.',
    priceRange: 'From 2,000 MAD per service',
    booking: 'Email or phone booking, hotel concierge partnerships',
  },
  {
    name: 'Limousine Service Maroc',
    type: 'Limousine Service',
    description: 'Professional limousine and executive car service throughout Morocco. Available for airport transfers, corporate events, weddings, and VIP transport.',
    priceRange: 'From 1,800 MAD per transfer',
    booking: 'Phone or website reservation',
  },
];

/* ===================================================================
   INTER-CITY TRANSPORT DATA
   =================================================================== */

const interCityTransport = [
  {
    name: 'Al Boraq High-Speed Train',
    icon: Train,
    route: 'Tangier - Kenitra - Rabat - Casablanca',
    duration: '2h 10min (Tangier to Casablanca)',
    frequency: '12 departures daily',
    price: '150-330 MAD',
    description: 'Africa\'s first high-speed train, reaching speeds of 320 km/h. Modern, comfortable trains with first and second class. Connects Tangier to Casablanca with stops in Kenitra and Rabat.',
    booking: 'oncf-voyages.ma or ONCF app',
  },
  {
    name: 'ONCF Conventional Trains',
    icon: Train,
    route: 'Tangier-Rabat-Casablanca-Marrakech, Fes-Meknes-Rabat corridor, Oujda, Nador',
    duration: 'Varies (Casa-Marrakech: 3h, Casa-Fes: 3h30)',
    frequency: 'Multiple daily departures',
    price: '30-250 MAD',
    description: 'Reliable and comfortable rail network covering Morocco\'s main urban corridor. First class (Premiere) and second class (Deuxieme) available.',
    booking: 'oncf-voyages.ma, ONCF app, or station ticket counters',
  },
  {
    name: 'CTM Buses',
    icon: Bus,
    route: 'Nationwide coverage including all major cities and many towns',
    duration: 'Varies by route',
    frequency: 'Multiple daily departures per route',
    price: '50-250 MAD',
    description: 'Morocco\'s premier intercity bus company with modern air-conditioned coaches, reserved seating, onboard entertainment, and rest stops on long routes.',
    booking: 'ctm.ma or CTM ticket offices in every major city',
  },
  {
    name: 'Supratours Buses',
    icon: Bus,
    route: 'Routes complementing the rail network: Essaouira, Chefchaouen, desert towns, and more',
    duration: 'Varies by route',
    frequency: 'Coordinated with train schedules',
    price: '60-200 MAD',
    description: 'ONCF\'s coach service that extends the rail network to destinations without train stations. Departs from train stations for seamless connections.',
    booking: 'Supratours offices (usually near train stations) or online',
  },
  {
    name: 'Grand Taxis (Inter-city)',
    icon: Car,
    route: 'Between virtually all cities and towns in Morocco',
    duration: 'Comparable to driving time',
    frequency: 'Continuous departures when full',
    price: '20-150 MAD per seat',
    description: 'Shared taxis that serve routes not covered by trains or buses. Depart from fixed stations when all 6 seats are filled. Fast and direct with no intermediate stops.',
    booking: 'Go to the grand taxi station and state your destination',
  },
];

/* ===================================================================
   CUSTOMS & IMMIGRATION DATA
   =================================================================== */

const customsTips = [
  {
    title: 'Visa Requirements',
    icon: FileText,
    detail: 'Citizens of the EU, UK, USA, Canada, Australia, and 60+ other countries can enter Morocco visa-free for up to 90 days. Your passport must be valid for at least 6 months beyond your entry date. Always carry a printed copy of your return ticket and hotel reservation, as immigration officers may request them.',
  },
  {
    title: 'Arrival Form',
    icon: ScrollText,
    detail: 'All arriving passengers must complete an immigration entry form (Fiche de Police). Airlines typically distribute these on board. Have your hotel name, address, and a Moroccan contact phone number ready. Fill it in before landing to speed up processing at passport control.',
  },
  {
    title: 'Currency Declaration',
    icon: CircleDollarSign,
    detail: 'You are not required to declare foreign currency under the equivalent of 100,000 MAD (approximately 10,000 USD/EUR). Moroccan dirhams cannot be imported or exported. You may re-exchange up to 50% of any dirhams exchanged through official channels (keep receipts). Dirham amounts above 2,000 MAD cannot be taken out of the country.',
  },
  {
    title: 'Customs Allowances',
    icon: BaggageClaim,
    detail: 'Duty-free allowances: 200 cigarettes or 50 cigars or 250g tobacco; 1 liter of spirits and 1 liter of wine; perfume for personal use. Electronics (laptops, cameras) for personal use are allowed. Drone importation is strictly regulated and may require prior authorization from Moroccan aviation authorities.',
  },
  {
    title: 'Prohibited Items',
    icon: ShieldCheck,
    detail: 'Strictly prohibited: narcotics (including cannabis despite local cultivation), weapons, pornographic material, anything offensive to Islam, counterfeit goods, and Israeli-origin products. Medications containing codeine or certain controlled substances require a medical prescription and a letter from your doctor.',
  },
  {
    title: 'Departure Procedures',
    icon: PlaneTakeoff,
    detail: 'Allow at least 3 hours before international departures at CMN and RAK. Departure security and passport control can be slow during peak hours. Duty-free shopping is available after security. Keep your boarding pass until you have completely exited the airport at your destination, as some airports require it to exit.',
  },
];

/* ===================================================================
   DUTY-FREE & AIRPORT SHOPPING DATA
   =================================================================== */

const dutyFreeGuide = [
  {
    airport: 'CMN - Casablanca',
    rating: 'Extensive',
    shops: 'Large duty-free zone in both terminals with international brands (Dior, Chanel, MAC), Moroccan argan oil products, local crafts, confections, and alcohol. Multiple restaurants including Paul bakery and fast food chains.',
    tips: 'The T2 duty-free is newer and better stocked. Argan oil products here are competitively priced compared to the medina. Local Moroccan cookies and sweets make great gifts.',
    alcohol: true,
    luxury: true,
  },
  {
    airport: 'RAK - Marrakech',
    rating: 'Good',
    shops: 'Renovated duty-free zone in Terminal 2 with a selection of Moroccan goods, international brands, alcohol, perfumes, and a dedicated Moroccan crafts section. Several restaurants and cafes.',
    tips: 'The Moroccan handicrafts section offers fixed prices (no haggling), which can actually be cheaper than tourist prices in the medina for similar quality. Stock up on argan oil and saffron here.',
    alcohol: true,
    luxury: true,
  },
  {
    airport: 'TNG - Tangier',
    rating: 'Moderate',
    shops: 'Small but adequate duty-free zone with perfumes, alcohol, tobacco, Moroccan crafts, and snacks. A few restaurants and a cafe.',
    tips: 'Limited selection compared to CMN and RAK. If you need specific international brands, shop at CMN on a connection.',
    alcohol: true,
    luxury: false,
  },
  {
    airport: 'FEZ / AGA / RBA',
    rating: 'Basic',
    shops: 'Small duty-free counters with essential items: alcohol, tobacco, perfume, chocolates, and a limited selection of Moroccan souvenirs.',
    tips: 'Do your souvenir shopping in the city before heading to the airport. These duty-free areas are small and limited.',
    alcohol: true,
    luxury: false,
  },
  {
    airport: 'Smaller airports (ESU, OZZ, NDR, OUD)',
    rating: 'Minimal',
    shops: 'Very basic or no duty-free facilities. A small cafe or vending machines may be available.',
    tips: 'Buy everything you need before reaching the airport. Some of these terminals are very small with limited facilities.',
    alcohol: false,
    luxury: false,
  },
];

/* ===================================================================
   FLIGHT BOOKING TIPS DATA
   =================================================================== */

const bookingTips = [
  {
    title: 'Book 2-4 Months in Advance for the Best Prices',
    icon: Timer,
    detail: 'For Morocco flights from Europe, the sweet spot is 8 to 16 weeks before departure. Prices rise steeply in the final 3 weeks. For long-haul flights from North America or Asia, book 3-6 months out. Set price alerts on Google Flights, Skyscanner, or Kayak to track fare drops.',
  },
  {
    title: 'Fly Midweek for Lower Fares',
    icon: TrendingDown,
    detail: 'Tuesday, Wednesday, and Thursday departures are typically 15-30% cheaper than weekend flights on the same route. Friday and Sunday evening flights command the highest premiums. If your dates are flexible, use the "flexible dates" search on Skyscanner to compare entire months.',
  },
  {
    title: 'Consider Alternative Airports',
    icon: Plane,
    detail: 'If flying from London, check both Gatwick and Stansted. From Paris, compare CDG and Orly. Within Morocco, flying into CMN and taking the train to Marrakech can sometimes be cheaper than flying directly into RAK. Fes (FEZ) often has cheaper flights than Marrakech (RAK) during peak season.',
  },
  {
    title: 'Low-Cost Carrier Baggage Strategy',
    icon: Luggage,
    detail: 'Ryanair, easyJet, and Wizz Air charge extra for checked bags (from 150-400 MAD). Book baggage at the time of ticket purchase for the lowest rate. A 10kg cabin bag is often sufficient for a week in Morocco since you will buy local clothing. Weigh your bag before arriving at the airport.',
  },
  {
    title: 'Best Times to Visit Morocco (for Cheap Flights)',
    icon: Tag,
    detail: 'The cheapest flights are in January-February and November (excluding school holidays). Mid-September to mid-October offers great weather with moderate prices. Avoid booking during Eid al-Fitr, Eid al-Adha, Christmas, Easter, and the European summer holiday window (July 15 - August 31) when prices peak.',
  },
  {
    title: 'Use Flight Comparison Tools',
    icon: Globe,
    detail: 'Google Flights is best for tracking price trends and exploring flexible dates. Skyscanner excels at finding the absolute cheapest options across budget carriers. Momondo often surfaces deals that other engines miss. Always check the airline website directly after finding a fare, as direct bookings sometimes offer a lower price and better customer service.',
  },
  {
    title: 'Open-Jaw and Multi-City Tickets',
    icon: Navigation,
    detail: 'Morocco is ideal for open-jaw itineraries. Fly into Marrakech, travel overland through the desert and Fes, and fly out of Tangier or Casablanca. Multi-city bookings on Royal Air Maroc or through Kiwi.com can save money versus booking separate one-way tickets, and you avoid backtracking.',
  },
  {
    title: 'Royal Air Maroc Domestic Connections',
    icon: PlaneLanding,
    detail: 'If arriving on a Royal Air Maroc international flight via CMN, domestic connections to Marrakech, Fes, Agadir, and other cities are often very affordable when booked as part of the same itinerary. RAM also offers a Discover Morocco pass for multiple domestic flights at a discounted rate.',
  },
];

/* ===================================================================
   AIRPORT FACILITIES DETAILED
   =================================================================== */

const facilityCategories = [
  {
    title: 'WiFi and Connectivity',
    icon: Wifi,
    detail: 'Free WiFi is available at CMN, RAK, TNG, and AGA airports. Speed is adequate for messaging and email but can be slow for streaming. For reliable internet, buy a local SIM card from Maroc Telecom, Inwi, or Orange kiosks in the arrivals hall. Tourist SIM packages cost 30-50 MAD for 5-20 GB of data with 30 days validity.',
  },
  {
    title: 'Currency Exchange and ATMs',
    icon: Banknote,
    detail: 'ATMs (Banque Populaire, Attijariwafa, BMCE) are available in all arrival halls and generally offer better rates than exchange counters. Bureau de change kiosks operate in arrivals and departures areas of major airports. Exchange rates at the airport are regulated and are typically within 2-3% of the official rate. Major credit cards (Visa, Mastercard) work in ATMs; American Express has limited acceptance.',
  },
  {
    title: 'SIM Cards and Phone Service',
    icon: Smartphone,
    detail: 'SIM card kiosks are located in the arrivals area of CMN, RAK, TNG, FEZ, and AGA. Maroc Telecom offers the widest coverage nationwide, including rural and desert areas. Inwi and Orange provide competitive data packages. Bring your passport for SIM registration (mandatory). Most SIM packages include local calls and data for 30-50 MAD.',
  },
  {
    title: 'Food and Dining',
    icon: Coffee,
    detail: 'CMN has the most dining options: Paul Bakery, McDonald\'s, Cafe Extrablatt, and several Moroccan restaurants. RAK has cafes in both terminals. Smaller airports offer basic cafes with sandwiches, pastries, and Moroccan mint tea. Tip: eat in the city before heading to the airport for better value and selection.',
  },
  {
    title: 'Prayer Rooms',
    icon: Building2,
    detail: 'All Moroccan airports provide dedicated prayer rooms (musalla) for Muslim travelers, usually located near departure gates. These are clearly signposted in Arabic and French. Ablution facilities are available. Non-Muslim travelers are welcome to use these quiet spaces for reflection.',
  },
  {
    title: 'Luggage Storage and Lost Baggage',
    icon: BaggageClaim,
    detail: 'Luggage storage services are available at CMN and RAK for 50-100 MAD per bag per day. For lost or delayed baggage, file a Property Irregularity Report (PIR) at the baggage claim area before leaving the airport. Keep your baggage tags and boarding pass as proof. Most airlines deliver delayed bags to your hotel within 24-48 hours.',
  },
];

/* ===================================================================
   ARRIVAL TIPS DATA
   =================================================================== */

const arrivalTips = [
  {
    title: 'Complete your arrival form before landing',
    detail: 'Moroccan immigration requires a completed entry form. Airlines usually distribute these on board. Fill it out in advance to save time at passport control. Have your hotel address ready.',
    icon: CheckCircle2,
  },
  {
    title: 'Get Moroccan dirhams at airport ATMs, not exchange bureaus',
    detail: 'Airport currency exchange counters offer poor rates. Use ATMs (available in all airport arrival halls) for the best exchange rate. Notify your bank of Morocco travel beforehand. Major cards (Visa, Mastercard) are widely accepted.',
    icon: Banknote,
  },
  {
    title: 'Buy a local SIM card at the airport',
    detail: 'Maroc Telecom, Inwi, and Orange all have kiosks in airport arrival halls. A tourist SIM with data costs 30-50 MAD and gives you maps, translation, and ride-hailing apps immediately. Bring your passport for registration.',
    icon: Smartphone,
  },
  {
    title: 'Pre-arrange your airport transfer or use official taxis only',
    detail: 'All Moroccan airports have official taxi ranks outside the terminal. Agree on the price before getting in, or insist on the meter. At CMN, the fixed rate to Casablanca center is 250-300 MAD. Avoid unofficial taxi touts inside the terminal.',
    icon: Shield,
  },
  {
    title: 'Take the airport train from CMN to Casablanca',
    detail: 'Mohammed V Airport has a direct ONCF train to Casablanca Voyageurs station (43 MAD, 35 minutes, hourly departures). It is faster and cheaper than a taxi during rush hour. The station is in the basement of Terminal 1.',
    icon: Train,
  },
  {
    title: 'Know that tipping is customary for luggage help',
    detail: 'Porters at airports typically expect 10-20 MAD per bag. If someone helps you with your bags unsolicited, a small tip of 5-10 MAD is appropriate. Keep small notes handy for arrival.',
    icon: Luggage,
  },
  {
    title: 'Download offline maps before arriving',
    detail: 'Google Maps and Maps.me both work well in Morocco, but data may be slow at first. Download offline maps of your destination city before landing. This is especially useful for navigating medinas where GPS can be unreliable.',
    icon: MapPin,
  },
  {
    title: 'Book car rental in advance online for better rates',
    detail: 'Walk-up car rental prices at airports are significantly higher than online bookings. Reserve your vehicle before your trip for savings of 30-50%. International companies (Hertz, Avis, Europcar) and local agencies all offer online booking.',
    icon: Car,
  },
  {
    title: 'Allow extra time during Ramadan and summer holidays',
    detail: 'Airports and ground transport can be exceptionally busy during Ramadan, Eid holidays, and July-August when the Moroccan diaspora returns from Europe. Arrive at the airport at least 3 hours before international flights during these periods.',
    icon: Clock,
  },
  {
    title: 'Keep your boarding pass until you exit the airport',
    detail: 'Some airports require your boarding pass to exit the building. Immigration officers may also request to see it during passport control. Keep all travel documents handy until you are outside the terminal.',
    icon: AlertCircle,
  },
];

/* ===================================================================
   POPULAR FLIGHT ROUTES
   =================================================================== */

const popularRoutes = [
  { from: 'London (STN/LGW/LTN)', to: 'Marrakech (RAK)', airlines: 'Ryanair, easyJet, British Airways', duration: '3h 30min', frequency: '20+ weekly' },
  { from: 'Paris (ORY/CDG)', to: 'Casablanca (CMN)', airlines: 'Air France, Transavia, Royal Air Maroc', duration: '3h 15min', frequency: '30+ weekly' },
  { from: 'Paris (ORY)', to: 'Marrakech (RAK)', airlines: 'Transavia, easyJet, Royal Air Maroc', duration: '3h 30min', frequency: '25+ weekly' },
  { from: 'Madrid (MAD)', to: 'Casablanca (CMN)', airlines: 'Iberia, Royal Air Maroc, Vueling', duration: '1h 30min', frequency: '15+ weekly' },
  { from: 'Barcelona (BCN)', to: 'Marrakech (RAK)', airlines: 'Vueling, Ryanair, Royal Air Maroc', duration: '2h 15min', frequency: '10+ weekly' },
  { from: 'Amsterdam (AMS)', to: 'Marrakech (RAK)', airlines: 'Transavia, TUI fly, Royal Air Maroc', duration: '3h 45min', frequency: '10+ weekly' },
  { from: 'Frankfurt (FRA)', to: 'Casablanca (CMN)', airlines: 'Lufthansa, Royal Air Maroc', duration: '3h 30min', frequency: '7+ weekly' },
  { from: 'New York (JFK)', to: 'Casablanca (CMN)', airlines: 'Royal Air Maroc', duration: '7h 30min', frequency: '7 weekly (daily)' },
  { from: 'Dubai (DXB)', to: 'Casablanca (CMN)', airlines: 'Emirates, Royal Air Maroc', duration: '8h', frequency: '7+ weekly' },
  { from: 'Istanbul (IST)', to: 'Casablanca (CMN)', airlines: 'Turkish Airlines', duration: '4h 45min', frequency: '7+ weekly' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function AirportsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ===============================================================
          HERO SECTION
          =============================================================== */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583862490786-85ea1a1e85a6?w=1600&q=80"
            alt="Aerial view of a modern airport terminal at sunset"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav
            className="flex items-center gap-2 text-sm text-white/60 mb-8"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="hover:text-white transition-colors inline-flex items-center gap-1"
            >
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Airports &amp; Transport</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Travel Infrastructure
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Airports &amp; Ground Transport
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              A complete guide to Morocco&apos;s 12 major airports, the airlines that serve them,
              VIP services, ground transportation options, customs and immigration procedures,
              duty-free shopping, and everything you need for a smooth arrival and onward journey
              across the Kingdom.
            </p>
          </div>

          {/* Quick stats */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { label: 'Airports', value: '12+', icon: Plane },
              { label: 'Airlines', value: '50+', icon: Globe },
              { label: 'Annual Passengers', value: '26M+', icon: Users },
              { label: 'Destinations', value: '150+', icon: MapPin },
            ].map((stat) => (
              <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <stat.icon className="w-5 h-5 text-[var(--color-accent)] mx-auto mb-2" />
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-white/60 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ===============================================================
          SECTION 1: MAJOR AIRPORTS
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Morocco&apos;s Major Airports
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Morocco has a well-developed network of 12 commercial airports managed by ONDA
            (Office National Des Aeroports). The two busiest hubs, Casablanca Mohammed V and
            Marrakech Menara, handle the vast majority of international traffic.
          </p>

          {/* Featured Airports (CMN + RAK) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {majorAirports
              .filter((a) => a.featured)
              .map((airport) => (
                <div key={airport.code} className="card-featured p-6 md:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-flex items-center justify-center px-3 py-1.5 rounded-lg bg-[var(--color-primary)] text-white text-sm font-bold">
                          {airport.code}
                        </span>
                        <span className="tag tag-accent">Major Hub</span>
                      </div>
                      <h3 className="text-xl font-bold text-[var(--text-primary)]">
                        {airport.name}
                      </h3>
                      <Link
                        href={airport.cityLink}
                        className="text-sm text-[var(--color-secondary)] hover:underline"
                      >
                        {airport.city}
                      </Link>
                    </div>
                    {airport.vip && (
                      <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] text-xs font-semibold">
                        <Crown className="w-3 h-3" /> VIP
                      </span>
                    )}
                  </div>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-5">
                    {airport.description}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                          Distance
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {airport.distanceFromCity}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                          Terminals
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">{airport.terminals}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Users className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                          Annual Passengers
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {airport.annualPassengers}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Car className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                          Taxi to City
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {airport.taxiToCityCenter}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="flex items-start gap-2 mb-3">
                      <Bus className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide">
                          Bus / Train Options
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {airport.busOptions}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
                      Airlines Serving This Airport
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {airport.airlines.map((airline) => (
                        <span
                          key={airline}
                          className="inline-flex px-2 py-0.5 rounded-md bg-[var(--surface-muted)] text-xs text-[var(--text-secondary)]"
                        >
                          {airline}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-2">
                      Facilities
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {airport.facilities.map((facility) => (
                        <span
                          key={facility}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--color-primary)]/5 text-xs text-[var(--color-primary)]"
                        >
                          <CheckCircle2 className="w-3 h-3" />
                          {facility}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* All Other Airports */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorAirports
              .filter((a) => !a.featured)
              .map((airport) => (
                <div key={airport.code} className="card-moroccan p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-[var(--color-primary)] text-white text-xs font-bold">
                        {airport.code}
                      </span>
                      {airport.vip && (
                        <span className="inline-flex items-center gap-0.5 text-[var(--color-accent)] text-xs">
                          <Crown className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-[var(--text-muted)]">
                      {airport.annualPassengers}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[var(--text-primary)] mb-1">
                    {airport.name}
                  </h3>
                  <Link
                    href={airport.cityLink}
                    className="text-sm text-[var(--color-secondary)] hover:underline"
                  >
                    {airport.city}
                  </Link>
                  <p className="text-sm text-[var(--text-secondary)] mt-2 mb-3 leading-relaxed">
                    {airport.description}
                  </p>
                  <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{airport.distanceFromCity}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{airport.terminals}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Car className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>Taxi: {airport.taxiToCityCenter}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Bus className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{airport.busOptions}</span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-[var(--border-light)]">
                    <p className="text-xs font-semibold text-[var(--text-muted)] mb-1.5">Airlines</p>
                    <div className="flex flex-wrap gap-1">
                      {airport.airlines.map((airline) => (
                        <span
                          key={airline}
                          className="inline-flex px-1.5 py-0.5 rounded bg-[var(--surface-muted)] text-[10px] text-[var(--text-secondary)]"
                        >
                          {airline}
                        </span>
                      ))}
                    </div>
                  </div>
                  {airport.facilities.length > 0 && (
                    <div className="mt-3 pt-3 border-t border-[var(--border-light)]">
                      <p className="text-xs font-semibold text-[var(--text-muted)] mb-1.5">
                        Facilities
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {airport.facilities.map((f) => (
                          <span
                            key={f}
                            className="inline-flex px-1.5 py-0.5 rounded bg-[var(--color-primary)]/5 text-[10px] text-[var(--color-primary)]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 2: AIRLINES SERVING MOROCCO
          =============================================================== */}
      <section className="py-16 md:py-20 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Globe className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Airlines Serving Morocco
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Morocco is served by over 50 airlines connecting the country to Europe, the Middle
            East, Africa, and North America. Here are the most important carriers for travelers.
          </p>

          {/* Highlighted Airlines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {airlines
              .filter((a) => a.highlight)
              .map((airline) => (
                <div key={airline.code} className="card-featured p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--color-primary)] text-white text-sm font-bold">
                      {airline.code}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-[var(--text-primary)]">
                        {airline.name}
                      </h3>
                      <p className="text-xs text-[var(--text-muted)]">{airline.type}</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <p>
                      <strong className="text-[var(--text-primary)]">Hub:</strong> {airline.hub}
                    </p>
                    <p>
                      <strong className="text-[var(--text-primary)]">Alliance:</strong>{' '}
                      {airline.alliance}
                    </p>
                    <p>{airline.routes}</p>
                  </div>
                </div>
              ))}
          </div>

          {/* All Other Airlines Table */}
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Code
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Airline
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Hub
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Alliance
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Morocco Routes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {airlines
                    .filter((a) => !a.highlight)
                    .map((airline) => (
                      <tr
                        key={airline.code}
                        className="border-t border-[var(--border-light)]"
                      >
                        <td className="py-3 px-4">
                          <span className="inline-flex items-center justify-center px-2 py-0.5 rounded bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-xs font-bold">
                            {airline.code}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-medium text-[var(--text-primary)]">
                          {airline.name}
                        </td>
                        <td className="py-3 px-4 text-[var(--text-secondary)]">{airline.type}</td>
                        <td className="py-3 px-4 text-[var(--text-secondary)]">{airline.hub}</td>
                        <td className="py-3 px-4 text-[var(--text-secondary)]">{airline.alliance}</td>
                        <td className="py-3 px-4 text-[var(--text-secondary)] max-w-xs">
                          {airline.routes}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 3: POPULAR FLIGHT ROUTES
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10">
              <PlaneTakeoff className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Popular Flight Routes to Morocco
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Morocco enjoys excellent air connectivity, particularly with European capitals. Here
            are the most popular routes with approximate flight times and frequency.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)]/5">
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      <div className="flex items-center gap-1.5">
                        <PlaneTakeoff className="w-3.5 h-3.5" /> From
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      <div className="flex items-center gap-1.5">
                        <PlaneLanding className="w-3.5 h-3.5" /> To
                      </div>
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">Airlines</th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--text-primary)]">
                      <div className="flex items-center gap-1.5 justify-center">
                        <Clock className="w-3.5 h-3.5" /> Duration
                      </div>
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--text-primary)]">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {popularRoutes.map((route, index) => (
                    <tr
                      key={`${route.from}-${route.to}`}
                      className={index % 2 === 0 ? '' : 'bg-[var(--surface-muted)]'}
                    >
                      <td className="py-3 px-4 font-medium text-[var(--text-primary)]">{route.from}</td>
                      <td className="py-3 px-4 font-medium text-[var(--color-primary)]">{route.to}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{route.airlines}</td>
                      <td className="py-3 px-4 text-center text-[var(--text-secondary)]">{route.duration}</td>
                      <td className="py-3 px-4 text-center text-[var(--text-secondary)]">{route.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 4: AIRPORT FACILITIES
          =============================================================== */}
      <section className="py-16 md:py-20 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Airport Facilities Guide
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            From WiFi and SIM cards to currency exchange and dining, here is what to expect
            at Moroccan airports.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityCategories.map((facility) => (
              <div key={facility.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 mb-4">
                  <facility.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {facility.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {facility.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 5: VIP & FAST TRACK SERVICES
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <Crown className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Airport VIP &amp; Fast Track Services
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Several Moroccan airports offer premium services to ease your passage through the
            terminal. From private lounges to expedited immigration, these services can transform
            your airport experience.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Pearl Lounge */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Star className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  Pearl Lounge - Casablanca (CMN)
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The Pearl Lounge operates in both Terminal 1 and Terminal 2 at Mohammed V
                International Airport. It offers a premium environment for departing and arriving
                passengers, separate from the main terminal crowds.
              </p>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Terminal 1:</strong> Landside and
                    airside lounges with hot and cold buffet, beverages, WiFi, showers, prayer room,
                    and business facilities.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Terminal 2:</strong> Airside
                    lounge with similar amenities. Quieter and newer than T1.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Price:</strong> 300-400 MAD per
                    person (approx. $30-40 USD). Free access with select Priority Pass, LoungeKey,
                    and premium credit cards.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Booking:</strong> Walk-in, online
                    at pearllounge.com, or through Priority Pass / LoungeKey programs.
                  </span>
                </div>
              </div>
            </div>

            {/* VIP Services */}
            <div className="card-moroccan p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-5 h-5 text-[var(--color-accent)]" />
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  VIP &amp; Privileged Access Services
                </h3>
              </div>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                ONDA (the Moroccan airport authority) operates VIP and Privileged Access services at
                the country&apos;s major airports. These are separate from airline-operated lounges
                and offer an end-to-end premium experience.
              </p>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Available at:</strong> CMN
                    (Casablanca), RAK (Marrakech), TNG (Tangier)
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">VIP Service includes:</strong>{' '}
                    Personal meet-and-greet at aircraft door, private lounge, expedited immigration
                    and customs, porter service, private vehicle transfer on tarmac.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Fast Track / Express Lane:</strong>{' '}
                    Dedicated immigration and security lines for faster processing. Available at CMN
                    and RAK. Significantly reduces wait times, especially during peak hours.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Pricing:</strong> Fast Track from
                    200 MAD per person. Full VIP service from 1,500-3,000 MAD per person depending on
                    airport and service level.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-[var(--text-primary)]">Booking:</strong> Through ONDA
                    website, luxury hotel concierges, or travel agencies. Advance booking recommended.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Lounge availability quick reference */}
          <div className="card-moroccan p-6">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">
              Lounge &amp; VIP Service Availability by Airport
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Airport
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--text-primary)]">
                      VIP Lounge
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Fast Track
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Meet &amp; Greet
                    </th>
                    <th className="text-center py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Priority Pass
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { airport: 'CMN - Casablanca', lounge: true, fastTrack: true, meetGreet: true, priorityPass: true },
                    { airport: 'RAK - Marrakech', lounge: true, fastTrack: true, meetGreet: true, priorityPass: true },
                    { airport: 'TNG - Tangier', lounge: true, fastTrack: true, meetGreet: true, priorityPass: false },
                    { airport: 'FEZ - Fes', lounge: false, fastTrack: false, meetGreet: false, priorityPass: false },
                    { airport: 'AGA - Agadir', lounge: false, fastTrack: false, meetGreet: false, priorityPass: false },
                    { airport: 'RBA - Rabat', lounge: false, fastTrack: false, meetGreet: false, priorityPass: false },
                  ].map((row) => (
                    <tr key={row.airport} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-3 px-4 font-medium text-[var(--text-primary)]">
                        {row.airport}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.lounge ? (
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mx-auto" />
                        ) : (
                          <span className="text-[var(--text-muted)]">--</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.fastTrack ? (
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mx-auto" />
                        ) : (
                          <span className="text-[var(--text-muted)]">--</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.meetGreet ? (
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mx-auto" />
                        ) : (
                          <span className="text-[var(--text-muted)]">--</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        {row.priorityPass ? (
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-green)] mx-auto" />
                        ) : (
                          <span className="text-[var(--text-muted)]">--</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 6: CUSTOMS & IMMIGRATION
          =============================================================== */}
      <section className="py-16 md:py-20 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-secondary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Customs &amp; Immigration
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Understanding Morocco&apos;s entry requirements, customs allowances, and departure
            procedures will help you breeze through the airport with confidence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customsTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="inline-flex p-3 rounded-xl bg-[var(--color-secondary)]/10 mb-4">
                  <tip.icon className="w-5 h-5 text-[var(--color-secondary)]" />
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-3">
                  {tip.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {tip.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 7: DUTY-FREE SHOPPING GUIDE
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <ShoppingBag className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Duty-Free Shopping Guide
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            What to expect from duty-free shopping at each Moroccan airport, including
            tips on the best items to buy and what to skip.
          </p>

          <div className="space-y-6 max-w-5xl mx-auto">
            {dutyFreeGuide.map((df) => (
              <div key={df.airport} className="card-moroccan p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)]">
                    {df.airport}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className={`tag ${
                      df.rating === 'Extensive' ? 'tag-primary' :
                      df.rating === 'Good' ? 'tag-accent' :
                      df.rating === 'Moderate' ? 'tag-secondary' : 'tag-info'
                    }`}>
                      {df.rating}
                    </span>
                    {df.luxury && (
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--color-accent)]">
                        <Crown className="w-3 h-3" /> Luxury Brands
                      </span>
                    )}
                    {df.alcohol && (
                      <span className="inline-flex items-center gap-1 text-xs text-[var(--color-primary)]">
                        <Gift className="w-3 h-3" /> Alcohol
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  {df.shops}
                </p>
                <div className="flex items-start gap-2 p-3 rounded-lg bg-[var(--color-accent)]/5">
                  <Bookmark className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <p className="text-sm text-[var(--text-secondary)]">
                    <strong className="text-[var(--text-primary)]">Tip:</strong> {df.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 8: GROUND TRANSPORTATION
          =============================================================== */}
      <section className="py-16 md:py-20 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Ground Transportation
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            From official airport shuttles and private transfers to taxis and ride-hailing apps,
            Morocco offers multiple options for getting from the airport to your destination and
            moving around cities.
          </p>

          {/* Airport Transfers & Public Transport */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Airport Transfers &amp; Public Transport
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {airportTransfers.map((service) => (
              <div key={service.name} className="card-moroccan p-6">
                <span className="tag tag-primary mb-3">{service.type}</span>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Price:</strong>{' '}
                      {service.priceRange}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Booking:</strong>{' '}
                      {service.booking}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{service.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Private Car Services */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Private Car &amp; Transfer Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {privateCars.map((service) => (
              <div key={service.name} className="card-moroccan p-6">
                <span className="tag tag-secondary mb-3">{service.type}</span>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Price:</strong>{' '}
                      {service.priceRange}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Booking:</strong>{' '}
                      {service.booking}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Phone className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">{service.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Taxi Services */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Taxi Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {taxiServices.map((service) => (
              <div key={service.name} className="card-moroccan p-6">
                <span className="tag tag-accent mb-3">{service.type}</span>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Price:</strong>{' '}
                      {service.priceRange}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">How to use:</strong>{' '}
                      {service.booking}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Car className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Vehicle:</strong>{' '}
                      {service.color}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Ride-Hailing Apps */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Ride-Hailing Apps
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {rideHailing.map((service) => (
              <div key={service.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="w-5 h-5 text-[var(--color-primary)]" />
                  <span className="tag tag-info">{service.type}</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Price:</strong>{' '}
                      {service.priceRange}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Smartphone className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Download:</strong>{' '}
                      {service.booking}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Car Rental */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Car Rental Companies
          </h3>
          <div className="card-moroccan overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Company
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Locations
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      From
                    </th>
                    <th className="text-left py-3 px-4 font-semibold text-[var(--text-primary)]">
                      Website
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {carRentalCompanies.map((company) => (
                    <tr
                      key={company.name}
                      className="border-t border-[var(--border-light)]"
                    >
                      <td className="py-3 px-4 font-medium text-[var(--text-primary)]">
                        {company.name}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`tag ${company.type === 'International' ? 'tag-primary' : 'tag-secondary'}`}
                        >
                          {company.type}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">
                        {company.locations}
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)] font-medium">
                        {company.priceRange}
                      </td>
                      <td className="py-3 px-4 text-[var(--color-primary)]">{company.website}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Luxury / Limo Services */}
          <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Luxury &amp; Limousine Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {luxuryServices.map((service) => (
              <div key={service.name} className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="w-5 h-5 text-[var(--color-accent)]" />
                  <span className="tag tag-accent">{service.type}</span>
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {service.name}
                </h4>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CreditCard className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Price:</strong>{' '}
                      {service.priceRange}
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Globe className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">Booking:</strong>{' '}
                      {service.booking}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 9: INTER-CITY TRANSPORT
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Train className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Inter-City Transport
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Once you arrive at your airport, Morocco&apos;s inter-city transport network makes it
            straightforward to travel between cities. From Africa&apos;s first high-speed train to
            comfortable coaches and shared taxis, every budget and timeline is covered.
          </p>

          <div className="space-y-6">
            {interCityTransport.map((transport) => (
              <div key={transport.name} className="card-moroccan p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                    <transport.icon className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                      {transport.name}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                      {transport.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Route
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">{transport.route}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Duration
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">{transport.duration}</p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Frequency
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {transport.frequency}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                        <p className="text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wide mb-1">
                          Price
                        </p>
                        <p className="text-sm text-[var(--text-secondary)]">{transport.price}</p>
                      </div>
                    </div>
                    <p className="text-sm text-[var(--text-muted)] mt-3">
                      <strong className="text-[var(--text-primary)]">Booking:</strong>{' '}
                      {transport.booking}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 10: FLIGHT BOOKING TIPS
          =============================================================== */}
      <section className="py-16 md:py-20 section-warm moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-accent)]/10">
              <TrendingUp className="w-6 h-6 text-[var(--color-accent)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Flight Booking Tips &amp; Best Times to Book
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Save money and get the best deals on flights to Morocco with these practical
            booking strategies from frequent travelers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bookingTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 shrink-0">
                    <tip.icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                      {index + 1}. {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tip.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 11: TIPS FOR AIRPORT ARRIVALS
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-4">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Info className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Tips for Airport Arrivals
            </h2>
          </div>
          <p className="text-lg text-[var(--text-secondary)] max-w-3xl mb-10 leading-relaxed">
            Make your arrival in Morocco as smooth as possible with these practical tips gathered
            from frequent travelers to the Kingdom.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {arrivalTips.map((tip, index) => (
              <div key={tip.title} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 shrink-0">
                    <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                      {index + 1}. {tip.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {tip.detail}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================================================
          SECTION 12: HERO IMAGE BAND
          =============================================================== */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1600&q=80"
          alt="Moroccan highway stretching through desert landscape with Atlas Mountains"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative h-full flex items-center justify-center container-morocco text-center">
          <div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Your Journey Through Morocco Starts Here
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
              Whether arriving by air or exploring by land, Morocco&apos;s transport network
              connects ancient cities, mountain passes, and coastal towns with ease.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================================================
          CTA SECTION
          =============================================================== */}
      <section className="py-16 md:py-20">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Explore More of Morocco
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Now that you know how to get around, start planning your Moroccan adventure with our
            city guides, itineraries, and travel tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[var(--color-primary)] text-white font-semibold hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              <Navigation className="w-4 h-4" /> Full Transport Guide
            </Link>
            <Link
              href="/cities/casablanca"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              <MapPin className="w-4 h-4" /> Casablanca Guide
            </Link>
            <Link
              href="/cities/marrakech"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] font-semibold hover:bg-[var(--color-secondary)] hover:text-white transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Marrakech Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

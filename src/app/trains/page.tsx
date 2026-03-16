import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  TrainFront,
  Bus,
  Car,
  ArrowRight,
  Clock,
  DollarSign,
  MapPin,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Info,
  Shield,
  Star,
  Route,
  Ticket,
  Navigation,
  Zap,
  Globe,
  Users,
  Luggage,
  Coffee,
  CreditCard,
  Wifi,
  Timer,
  Building2,
  CircleDollarSign,
  Gauge,
  CalendarDays,
  ShieldCheck,
  Milestone,
  Construction,
  BookOpen,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Trains & Rail Guide 2025 | Al Boraq, ONCF Routes, Tickets & Tips',
  description:
    'Complete guide to train travel in Morocco. Al Boraq high-speed rail (Tangier-Casablanca, 320 km/h), ONCF conventional routes, ticket prices in MAD, station guides, classes, booking tips, bus connections (CTM & Supratours), grand and petit taxis, and future rail projects for World Cup 2030.',
  keywords: [
    'Morocco train',
    'Al Boraq high speed train',
    'ONCF Morocco',
    'Morocco rail',
    'Tangier Casablanca train',
    'Casablanca Marrakech train',
    'Morocco train tickets',
    'ONCF booking',
    'Morocco train prices',
    'Morocco first class train',
    'Morocco train stations',
    'Casablanca Voyageurs station',
    'Marrakech train station',
    'CTM bus Morocco',
    'Supratours bus',
    'grand taxi Morocco',
    'petit taxi Morocco',
    'Morocco World Cup 2030 rail',
    'LGV Morocco',
    'Morocco transport guide',
    'Morocco train travel tips',
    'Morocco couchette train',
    'Morocco night train',
  ],
  openGraph: {
    title: 'Morocco Trains & Rail Guide - Al Boraq, ONCF Routes & Tickets',
    description:
      'Everything you need to know about trains in Morocco. Al Boraq high-speed rail, ONCF routes, ticket prices, station guides, bus connections, taxi guides, and future rail projects.',
    url: 'https://citytoursmorocco.com/trains',
    images: [
      {
        url: '/images/poster-train-travel.webp',
        width: 1200,
        height: 630,
        alt: 'Al Boraq high-speed train traveling through the Moroccan countryside',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/trains' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Morocco Trains & Rail Guide',
  description:
    'Comprehensive guide to train travel in Morocco including Al Boraq high-speed rail, ONCF conventional routes, tickets, station guides, and connecting transport options.',
  url: 'https://citytoursmorocco.com/trains',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
};

/* ===================================================================
   DATA
   =================================================================== */

const alBoraqStops = [
  { station: 'Tanger Ville', city: 'Tangier', timeFromTangier: '0 min', distanceKm: 0, note: 'Northern terminus, modern station near the port and medina' },
  { station: 'Kenitra', city: 'Kenitra', timeFromTangier: '1h 20min', distanceKm: 200, note: 'Industrial city, connection to conventional trains heading east' },
  { station: 'Rabat Agdal', city: 'Rabat', timeFromTangier: '1h 40min', distanceKm: 250, note: 'Capital city, well-connected to tram and petit taxis' },
  { station: 'Casa Voyageurs', city: 'Casablanca', timeFromTangier: '2h 10min', distanceKm: 323, note: 'Main rail hub, connections to Marrakech, Fes, and all southern routes' },
];

const conventionalRoutes = [
  { route: 'Casablanca - Marrakech', duration: '3h - 3h 30min', priceFirst: '160-200', priceSecond: '100-130', frequency: '9 daily', notes: 'Most popular tourist route. Beautiful scenery south of Settat. Departs Casa-Voyageurs.' },
  { route: 'Casablanca - Fes', duration: '3h 30min - 4h', priceFirst: '200-250', priceSecond: '130-160', frequency: '7 daily', notes: 'Via Rabat and Meknes. Some trains run direct, others require a change at Sidi Kacem.' },
  { route: 'Fes - Tangier', duration: '4h 30min - 5h', priceFirst: '180-230', priceSecond: '120-150', frequency: '4 daily', notes: 'Conventional route via Meknes and Sidi Kacem. Al Boraq via Kenitra is faster.' },
  { route: 'Rabat - Meknes', duration: '2h - 2h 30min', priceFirst: '100-140', priceSecond: '65-90', frequency: '8 daily', notes: 'Scenic route through rolling agricultural lands. Good day-trip option.' },
  { route: 'Casablanca - Oujda', duration: '9h 30min - 10h', priceFirst: '300-350', priceSecond: '200-240', frequency: '2 daily', notes: 'Longest route. Overnight option with couchette available. Via Fes and Taza.' },
  { route: 'Fes - Meknes', duration: '45min', priceFirst: '50-70', priceSecond: '30-45', frequency: '10 daily', notes: 'Short hop between the two imperial cities. Very frequent service.' },
  { route: 'Rabat - Fes', duration: '2h 30min', priceFirst: '150-190', priceSecond: '90-120', frequency: '7 daily', notes: 'Direct route through Meknes. Comfortable day journey.' },
  { route: 'Casablanca - El Jadida', duration: '1h 30min', priceFirst: '70-90', priceSecond: '45-60', frequency: '6 daily', notes: 'Navette (shuttle) service to this popular coastal city.' },
  { route: 'Fes - Oujda', duration: '5h - 5h 30min', priceFirst: '180-220', priceSecond: '120-150', frequency: '3 daily', notes: 'Eastern Morocco line through Taza and the Rif foothills.' },
  { route: 'Casablanca - Tangier (conventional)', duration: '5h - 5h 30min', priceFirst: '200-250', priceSecond: '130-170', frequency: '4 daily', notes: 'Slower alternative to Al Boraq at a lower price point.' },
  { route: 'Kenitra - Meknes', duration: '1h 45min', priceFirst: '80-110', priceSecond: '50-70', frequency: '6 daily', notes: 'Useful connection for those arriving via Al Boraq at Kenitra.' },
];

const trainClasses = [
  {
    name: 'First Class (Premiere)',
    icon: Star,
    features: [
      'Wider seats with more legroom and recline',
      'Reserved seating (seat number on your ticket)',
      'Air conditioning (sometimes too cold, bring a layer)',
      'Quieter carriages with fewer passengers',
      'Power outlets at most seats on newer trains',
      'Fold-down tables for laptops and meals',
      'Overhead luggage racks and under-seat storage',
    ],
    bestFor: 'Journeys over 2 hours, business travelers, and anyone wanting guaranteed comfort and quiet.',
    priceNote: '50-80% more than second class, but still very affordable by European standards.',
  },
  {
    name: 'Second Class (Deuxieme)',
    icon: Users,
    features: [
      'Comfortable padded seats in rows of 3+3 or 2+2',
      'Reserved seating on Al Boraq and most conventional trains',
      'Air conditioning on all mainline trains',
      'More crowded, especially on commuter-heavy routes',
      'Good value for shorter journeys (under 2 hours)',
      'Luggage racks available but fill up quickly',
      'Lively atmosphere with local travelers',
    ],
    bestFor: 'Budget travelers, short journeys (Fes-Meknes, Rabat-Casa), and anyone comfortable with a busier environment.',
    priceNote: 'The most affordable way to ride the ONCF network. Many locals ride second class exclusively.',
  },
  {
    name: 'Couchette (Overnight)',
    icon: Building2,
    features: [
      'Available on the Casablanca-Oujda overnight route',
      '4-berth compartments with fold-down bunks',
      'Clean linens and blankets provided',
      'Lockable compartment door for security',
      'Saves one night of accommodation costs',
      'Departs evening, arrives early morning',
      'Limited availability, book well in advance',
    ],
    bestFor: 'Budget-conscious travelers heading to eastern Morocco who want to save time and a night of accommodation.',
    priceNote: 'Approximately 350-400 MAD. More expensive than first class but includes the sleeping berth.',
  },
];

const stations = [
  {
    name: 'Casa-Voyageurs',
    city: 'Casablanca',
    role: 'Main national rail hub',
    lines: 'All ONCF lines converge here: Al Boraq, Marrakech, Fes, Oujda, El Jadida',
    facilities: 'ATMs, currency exchange, cafes (Paul, coffee stands), luggage storage (20 MAD/day), prayer room, newsstand, ticket windows and automated machines',
    taxi: 'Petit taxis queue outside the main entrance. Insist on the meter. To medina/city center: 15-25 MAD.',
    tram: 'Casablanca Tram Line 1 stops directly at the station. Line 2 connects via interchange.',
    tips: 'Busiest station in Morocco. Arrive 20-30 minutes before departure. Supratours buses to Essaouira and Agadir depart from the station forecourt. Do not confuse with Casa-Port station (closer to port/medina, fewer long-distance trains).',
  },
  {
    name: 'Marrakech',
    city: 'Marrakech',
    role: 'Southern terminus of the rail network',
    lines: 'Casablanca, Rabat, Tangier (via Casa). No direct train to Fes without changing.',
    facilities: 'Modern renovated station with ATMs, cafes, a small shop, ticket counters, and electronic departure boards. Clean restrooms (2 MAD).',
    taxi: 'Petit taxis (beige) line up outside. To Jemaa el-Fnaa/medina: 15-20 MAD by meter. Some drivers refuse the meter for tourists. Walk to the next taxi.',
    tram: 'No tram in Marrakech. Bus line 1 (Alsa) runs from the station area to the medina.',
    tips: 'The station is about 15-minute walk from Jemaa el-Fnaa. Supratours office is adjacent for buses to Essaouira (2.5h), Ouarzazate (4.5h), and Agadir (3.5h). Book Supratours the day before during holidays.',
  },
  {
    name: 'Fes',
    city: 'Fes',
    role: 'Eastern gateway hub',
    lines: 'Casablanca, Rabat, Meknes, Oujda, Tangier (conventional)',
    facilities: 'Well-maintained station with ticket windows, ATMs, small cafe, prayer room, and electronic boards. Luggage storage available.',
    taxi: 'Petit taxis (red) outside. To Bab Bou Jeloud (medina entrance): 10-15 MAD. The station is about 2 km from the old medina.',
    tram: 'No tram. City bus 19 connects the station to the medina area but is infrequent.',
    tips: 'From Fes station, Supratours runs buses to Chefchaouen (4h, 75-95 MAD) and Merzouga/Sahara (8h, overnight, 160-200 MAD). Grand taxis to Meknes (25 MAD/seat) depart from just outside.',
  },
  {
    name: 'Tanger Ville',
    city: 'Tangier',
    role: 'Northern terminus for Al Boraq',
    lines: 'Al Boraq to Casablanca (2h 10min), conventional to Fes, Meknes, Rabat',
    facilities: 'Modern station renovated for Al Boraq launch. Ticket windows and machines, ATMs, cafe, newsstand, clean restrooms, prayer room.',
    taxi: 'Petit taxis (aqua blue) outside. To medina/kasbah: 10-15 MAD. To Cap Spartel: 80-100 MAD.',
    tram: 'No tram in Tangier. Grand taxis to Tetouan (25 MAD/seat) and Chefchaouen (70 MAD/seat) depart from nearby.',
    tips: 'The station is centrally located in the new city (ville nouvelle), about 10-minute walk downhill to the medina. If arriving by ferry from Spain (Tanger Med port), take a bus or grand taxi to the city first, then walk to the station.',
  },
];

const bookingMethods = [
  {
    method: 'ONCF Website (oncf.ma)',
    icon: Globe,
    steps: [
      'Visit oncf.ma and select your departure and arrival stations',
      'Choose your date, class (1st or 2nd), and number of passengers',
      'Pay with Visa, Mastercard, or CMI-enabled Moroccan bank cards',
      'Receive an e-ticket by email with a QR code',
      'Show the QR code on your phone to the conductor (no printing needed for Al Boraq)',
    ],
    pros: ['Guaranteed seat reservation', 'Prices shown before purchase', 'Available 30 days in advance'],
    cons: ['Some international cards are declined (try another card if this happens)', 'Website can be slow during peak hours'],
  },
  {
    method: 'ONCF Mobile App',
    icon: Smartphone,
    steps: [
      'Download the ONCF app (Android and iOS)',
      'Create an account with your email',
      'Search routes and schedules in real time',
      'Purchase tickets and store them in the app',
      'Scan the QR code directly from the app at the gate or to the conductor',
    ],
    pros: ['Most convenient option', 'Real-time schedule updates', 'E-ticket stored on your phone'],
    cons: ['App can be buggy on older devices', 'Payment issues with some foreign cards'],
  },
  {
    method: 'Station Ticket Windows',
    icon: Building2,
    steps: [
      'Go to the ticket counter (guichet) at any ONCF station',
      'Tell the agent your destination, class, and preferred departure time',
      'Pay in cash (MAD) or by Moroccan bank card',
      'Receive a paper ticket with your seat assignment',
      'Keep the ticket until you exit the destination station',
    ],
    pros: ['Cash payment accepted', 'Staff can help with schedule questions', 'No technology required'],
    cons: ['Queues can be long, especially before holidays', 'No credit card (only cash or Moroccan debit)', 'Must be at the station in person'],
  },
  {
    method: 'Automated Ticket Machines',
    icon: CreditCard,
    steps: [
      'Located at major stations (Casa-Voyageurs, Rabat Agdal, Marrakech, Tanger Ville)',
      'Select language (Arabic, French, sometimes English)',
      'Choose your route, date, and class',
      'Pay with cash (coins and notes) or Moroccan bank card',
      'Collect your printed ticket from the machine',
    ],
    pros: ['Skip the ticket queue', 'Available during station operating hours', 'Quick for simple one-way tickets'],
    cons: ['Not all machines accept foreign bank cards', 'May be out of service', 'Interface in French by default'],
  },
];

const travelTips = [
  {
    icon: Clock,
    title: 'Arrive at the station early',
    desc: 'Get to the station 20-30 minutes before departure for Al Boraq and 15 minutes for conventional trains. You need time to find your platform, especially at busy Casa-Voyageurs where there are multiple platforms and underpasses.',
  },
  {
    icon: Shield,
    title: 'Guard your luggage',
    desc: 'Keep valuables (passport, phone, wallet) on your person at all times. Store large bags on the overhead rack where you can see them. On busy conventional trains, petty theft from unattended bags does happen. Use a small lock on your backpack zippers.',
  },
  {
    icon: Coffee,
    title: 'Bring food and water',
    desc: 'There is no dining car on Moroccan trains. A vendor sometimes passes through with a cart selling coffee, snacks, and sandwiches (10-30 MAD), but availability is inconsistent. Buy water and food at the station before boarding, especially for journeys over 2 hours.',
  },
  {
    icon: Ticket,
    title: 'Keep your ticket until you exit',
    desc: 'Conductors check tickets on board, and some stations have electronic gates requiring your ticket to exit. The fine for traveling without a valid ticket is 200 MAD or more. On Al Boraq, the QR code e-ticket is scanned both on the platform and on board.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi and connectivity',
    desc: 'Al Boraq offers free Wi-Fi that is functional but slow. Conventional trains have no Wi-Fi. Mobile data (4G/5G) works along most of the northern rail corridor but drops out in tunnels and remote sections. Download offline content for long rides.',
  },
  {
    icon: AlertTriangle,
    title: 'Delays on conventional trains',
    desc: 'Al Boraq is generally punctual (within 5 minutes). Conventional trains can run 15-30 minutes late, especially during peak periods and bad weather. If you have a tight connection to a Supratours bus, allow extra buffer time.',
  },
  {
    icon: Luggage,
    title: 'Luggage storage at stations',
    desc: 'Casa-Voyageurs and Rabat Agdal have luggage storage (consigne) for 20 MAD per bag per day. Useful if you want to explore a city for a few hours between trains. Other stations may have informal arrangements at nearby shops.',
  },
  {
    icon: Smartphone,
    title: 'Download the ONCF app',
    desc: 'The official ONCF mobile app shows live departure times, allows ticket purchases, and stores e-tickets. Download it before your trip. It is the most reliable way to check if your train is on time. Available in French and Arabic.',
  },
  {
    icon: DollarSign,
    title: 'Bring cash for conventional trains',
    desc: 'While Al Boraq tickets are often bought online, conventional train tickets at smaller stations may require cash (MAD). ATMs are available at all major stations. Ticket windows do not accept international credit cards.',
  },
  {
    icon: Users,
    title: 'Friday and Sunday rush',
    desc: 'The busiest travel days are Friday afternoon (people heading home for the weekend) and Sunday evening (returning to work). Al Boraq seats sell out on these days. Book at least 2-3 days ahead for weekend travel.',
  },
];

const comparisonData = [
  {
    mode: 'Al Boraq Train',
    icon: Zap,
    speed: 'Very Fast (320 km/h)',
    comfort: 'Excellent',
    cost: '149-329 MAD',
    coverage: 'Tangier-Kenitra-Rabat-Casa only',
    bestFor: 'Northern corridor travel between Tangier and Casablanca',
    booking: 'oncf.ma, ONCF app, station',
  },
  {
    mode: 'ONCF Conventional Train',
    icon: TrainFront,
    speed: 'Moderate (120-160 km/h)',
    comfort: 'Good',
    cost: '30-350 MAD',
    coverage: 'Main cities (Casa, Rabat, Marrakech, Fes, Meknes, Oujda)',
    bestFor: 'Medium-distance intercity travel on the main corridors',
    booking: 'oncf.ma, ONCF app, station',
  },
  {
    mode: 'CTM / Supratours Bus',
    icon: Bus,
    speed: 'Slower (80-100 km/h)',
    comfort: 'Good (A/C, reclining)',
    cost: '40-200 MAD',
    coverage: 'Very extensive, reaches where trains cannot',
    bestFor: 'Essaouira, Chefchaouen, Agadir, desert towns, Atlas region',
    booking: 'ctm.ma, oncf.ma, station',
  },
  {
    mode: 'Grand Taxi',
    icon: Car,
    speed: 'Variable',
    comfort: 'Basic',
    cost: '10-150 MAD per seat',
    coverage: 'Extremely wide, every town and village',
    bestFor: 'Short hops, small towns, off-the-beaten-path destinations',
    booking: 'Show up at the taxi station',
  },
  {
    mode: 'Petit Taxi',
    icon: Navigation,
    speed: 'City speeds',
    comfort: 'Basic',
    cost: '7-50 MAD',
    coverage: 'Within city limits only',
    bestFor: 'Getting to/from train stations, short city rides',
    booking: 'Hail on the street or at taxi ranks',
  },
];

const busConnections = [
  { from: 'Marrakech (train station)', to: 'Essaouira', operator: 'Supratours', duration: '2h 30min', price: '80-100 MAD', frequency: '6 daily' },
  { from: 'Marrakech (train station)', to: 'Ouarzazate', operator: 'Supratours', duration: '4h 30min', price: '100-130 MAD', frequency: '4 daily' },
  { from: 'Marrakech (train station)', to: 'Agadir', operator: 'Supratours / CTM', duration: '3h 30min', price: '100-140 MAD', frequency: '6 daily' },
  { from: 'Casablanca (train station)', to: 'Agadir', operator: 'Supratours', duration: '8h', price: '180-230 MAD', frequency: '3 daily' },
  { from: 'Fes (train station)', to: 'Chefchaouen', operator: 'Supratours / CTM', duration: '4h', price: '75-95 MAD', frequency: '3 daily' },
  { from: 'Fes (train station)', to: 'Merzouga (Sahara)', operator: 'Supratours', duration: '8h (overnight)', price: '160-200 MAD', frequency: '1 daily' },
  { from: 'Tangier (bus station)', to: 'Chefchaouen', operator: 'CTM', duration: '3h', price: '60-80 MAD', frequency: '4 daily' },
  { from: 'Tangier (bus station)', to: 'Tetouan', operator: 'CTM', duration: '1h', price: '25-35 MAD', frequency: '8 daily' },
  { from: 'Marrakech (Bab Doukkala)', to: 'M\'Hamid (Sahara)', operator: 'CTM / Supratours', duration: '8h', price: '150-180 MAD', frequency: '1 daily' },
  { from: 'Casablanca (train station)', to: 'Essaouira', operator: 'Supratours', duration: '6h', price: '150-180 MAD', frequency: '2 daily' },
];

const grandTaxiRoutes = [
  { route: 'Fes - Meknes', perSeat: '25', wholeTaxi: '150', time: '1 hour', notes: 'Very frequent. Departs every 15-20 minutes from the grand taxi stand near Fes train station.' },
  { route: 'Fes - Chefchaouen', perSeat: '70', wholeTaxi: '420', time: '3.5 hours', notes: 'Scenic mountain drive through the Rif. Departs from gare routiere.' },
  { route: 'Marrakech - Essaouira', perSeat: '80', wholeTaxi: '480', time: '2.5 hours', notes: 'From Bab Doukkala station. Alternative to Supratours bus.' },
  { route: 'Casablanca - Rabat', perSeat: '40', wholeTaxi: '240', time: '1.5 hours', notes: 'From Oulad Ziane station. Train is significantly faster and more comfortable.' },
  { route: 'Tangier - Tetouan', perSeat: '25', wholeTaxi: '150', time: '1 hour', notes: 'Frequent departures from the Tangier bus station area.' },
  { route: 'Marrakech - Ouarzazate', perSeat: '70', wholeTaxi: '420', time: '4 hours', notes: 'Via Tizi n\'Tichka pass (2,260m). Dramatic mountain crossing.' },
  { route: 'Agadir - Taroudant', perSeat: '30', wholeTaxi: '180', time: '1.5 hours', notes: 'Departs from Inezgane grand taxi station (south of Agadir center).' },
  { route: 'Chefchaouen - Tetouan', perSeat: '35', wholeTaxi: '210', time: '1.5 hours', notes: 'Scenic mountain route through the Rif.' },
  { route: 'Ouarzazate - Zagora', perSeat: '50', wholeTaxi: '300', time: '2.5 hours', notes: 'Through the Draa Valley palm groves.' },
  { route: 'Meknes - Moulay Idriss', perSeat: '10', wholeTaxi: '60', time: '30 min', notes: 'Quick hop for a day trip to the holy city and Volubilis ruins.' },
];

const petitTaxiColors = [
  { city: 'Casablanca', color: 'Red', hex: '#c0392b' },
  { city: 'Marrakech', color: 'Beige / Sand', hex: '#c2a878' },
  { city: 'Fes', color: 'Red', hex: '#e74c3c' },
  { city: 'Rabat', color: 'Blue', hex: '#2980b9' },
  { city: 'Tangier', color: 'Aqua Blue', hex: '#1abc9c' },
  { city: 'Meknes', color: 'Blue', hex: '#3498db' },
  { city: 'Agadir', color: 'Orange', hex: '#e67e22' },
  { city: 'Essaouira', color: 'Dark Blue', hex: '#2c3e50' },
  { city: 'Chefchaouen', color: 'Blue', hex: '#3498db' },
  { city: 'Ouarzazate', color: 'Green', hex: '#27ae60' },
];

const futureProjects = [
  {
    name: 'LGV Kenitra - Marrakech',
    status: 'Under Construction',
    timeline: 'Expected completion by 2029 (before World Cup 2030)',
    details: 'This extension will bring high-speed rail from Kenitra through Rabat and Casablanca to Marrakech. The journey from Casablanca to Marrakech will drop from 3 hours to approximately 1 hour 20 minutes. Combined with the existing Tangier-Kenitra LGV, the full Tangier-Marrakech route will take around 3 hours at 320 km/h.',
  },
  {
    name: 'LGV Marrakech - Agadir',
    status: 'Planning Phase',
    timeline: 'Post-2030',
    details: 'A proposed extension to connect Marrakech to Agadir by high-speed rail. Currently in early feasibility studies. Would transform access to Morocco\'s southern coast and Souss region. Agadir currently has no rail connection at all.',
  },
  {
    name: 'Casablanca RER (Regional Express)',
    status: 'Under Development',
    timeline: 'Phased rollout 2028-2032',
    details: 'A suburban rail system for the greater Casablanca metropolitan area, connecting the airport (CMN), Casa-Voyageurs, Casa-Port, Ain Sebaa, and surrounding suburbs. Will operate with frequent departures (every 10-15 minutes) similar to Parisian RER services.',
  },
  {
    name: 'World Cup 2030 Rail Upgrades',
    status: 'Active Planning and Construction',
    timeline: '2025-2030',
    details: 'Morocco will co-host the 2030 FIFA World Cup with Spain and Portugal. Six Moroccan host cities (Casablanca, Rabat, Marrakech, Tangier, Fes, Agadir) are receiving major rail infrastructure upgrades including station renovations, increased train frequencies, new rolling stock, and improved connections between host cities. The goal is to ensure spectators can travel between venues by rail.',
  },
  {
    name: 'Fes - Oujda High-Speed Upgrade',
    status: 'Feasibility Study',
    timeline: 'Post-2030',
    details: 'Proposal to upgrade the eastern rail corridor from Fes to Oujda to higher speeds, reducing the current 5.5-hour journey to approximately 2.5 hours. Would better connect eastern Morocco and the Algerian border region.',
  },
];

const relatedPages = [
  { title: 'Getting Around Morocco', href: '/transport', desc: 'Complete transport overview including flights, car rental, and ride-hailing apps' },
  { title: 'Morocco Airports Guide', href: '/airports', desc: 'All 12 airports with transfer options, customs tips, and airline information' },
  { title: 'Road Trips in Morocco', href: '/road-trips', desc: 'Self-drive itineraries through the Atlas, coast, and Sahara' },
  { title: 'First Time in Morocco', href: '/first-time', desc: 'Essential tips for planning your first visit including transport advice' },
  { title: 'Morocco Itineraries', href: '/itineraries', desc: 'Multi-day trip plans that combine trains, buses, and taxis' },
  { title: 'Morocco on a Budget', href: '/backpacking', desc: 'Budget travel tips including the cheapest ways to get around' },
  { title: 'World Cup 2030 in Morocco', href: '/world-cup-2030', desc: 'Host cities, stadiums, and transport plans for the 2030 World Cup' },
  { title: 'Sahara Desert Guide', href: '/sahara', desc: 'How to reach the Sahara by train, bus, and grand taxi from Fes or Marrakech' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function TrainsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/poster-train-travel.webp"
            alt="Morocco high-speed train Al Boraq traveling through the Moroccan countryside"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/transport" className="hover:text-white transition-colors">
              Transport
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Trains &amp; Rail</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Complete Rail Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Trains &amp; Rail Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Africa&apos;s first high-speed train to comfortable overnight services. Everything you need to know about ONCF rail travel with real prices, schedules, station guides, and connecting transport options.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          MOROCCO'S RAIL NETWORK OVERVIEW
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Morocco&apos;s Rail Network (ONCF)
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco&apos;s national railway operator, the <strong className="text-[var(--text-primary)]">Office National des Chemins de Fer (ONCF)</strong>, operates a modern and growing rail network that is the most extensive in North Africa. The system covers approximately 2,200 km of track and connects the country&apos;s major cities along two main corridors: the northern Atlantic axis (Tangier&ndash;Kenitra&ndash;Rabat&ndash;Casablanca&ndash;Marrakech) and the eastern line (Casablanca&ndash;Fes&ndash;Oujda).
            </p>
            <p>
              In 2018, Morocco made continental history by launching the <strong className="text-[var(--text-primary)]">Al Boraq</strong>, Africa&apos;s first high-speed train, connecting Tangier to Casablanca in just 2 hours and 10 minutes at speeds up to 320 km/h. Built with French TGV technology and funded through a partnership between Morocco and France, Al Boraq transformed the northern corridor and set the stage for an ambitious expansion program that will eventually connect Marrakech and beyond.
            </p>
            <p>
              For travelers, Moroccan trains offer a comfortable, affordable, and scenic way to move between cities. The rail network covers all the imperial cities (Fes, Meknes, Marrakech, Rabat) and the economic capital (Casablanca), while ONCF&apos;s partner bus service <strong className="text-[var(--text-primary)]">Supratours</strong> extends connectivity to destinations the tracks do not reach, including Essaouira, Chefchaouen, Agadir, Ouarzazate, and the Sahara gateway towns.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: 'Track Length', value: '2,200 km', icon: Route },
              { label: 'Passengers/Year', value: '45+ million', icon: Users },
              { label: 'Al Boraq Speed', value: '320 km/h', icon: Gauge },
              { label: 'Stations', value: '120+', icon: Building2 },
            ].map((stat) => (
              <div key={stat.label} className="card-moroccan p-4 text-center">
                <stat.icon className="w-5 h-5 text-[var(--color-primary)] mx-auto mb-2" />
                <p className="text-lg font-bold text-[var(--text-primary)]">{stat.value}</p>
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          AL BORAQ HIGH-SPEED TRAIN
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Zap className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Al Boraq High-Speed Train
            </h2>
          </div>

          {/* Feature Card */}
          <div className="card-moroccan p-6 md:p-8 mb-8 border-l-4 border-[var(--color-primary)]">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Africa&apos;s First High-Speed Rail Service</h3>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p>
                The <strong className="text-[var(--text-primary)]">Al Boraq</strong> (named after the mythical winged horse in Islamic tradition) launched on November 15, 2018, making Morocco the first country in Africa &mdash; and the Arab world &mdash; to operate a high-speed rail service. The line runs 186 km of dedicated high-speed track between Tangier and Kenitra, where it joins the conventional network for the remaining distance to Casablanca.
              </p>
              <p>
                Built using French <strong className="text-[var(--text-primary)]">Alstom TGV Duplex</strong> technology, the trains reach a commercial speed of <strong className="text-[var(--text-primary)]">320 km/h</strong> on the high-speed section. The total journey from Tangier to Casablanca takes approximately <strong className="text-[var(--text-primary)]">2 hours and 10 minutes</strong>, compared to 5 hours and 30 minutes on the old conventional service. That is a 60% reduction in travel time.
              </p>
              <p>
                The service is popular with both commuters and tourists. With 12 departures daily in each direction, you can easily day-trip between Tangier and Rabat or use it as the backbone of a northern Morocco itinerary. Trains feature modern interiors with power outlets, fold-down tables, overhead luggage storage, Wi-Fi (basic), and electronic information displays.
              </p>
            </div>
          </div>

          {/* Al Boraq Route Stops */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Route className="w-5 h-5 text-[var(--color-primary)]" />
              Al Boraq Route: Tangier to Casablanca
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              The Al Boraq stops at four stations along the northern corridor. All times are approximate from Tangier (southbound direction).
            </p>

            {/* Route visualization */}
            <div className="space-y-0 mb-6">
              {alBoraqStops.map((stop, index) => (
                <div key={stop.station} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-4 h-4 rounded-full border-2 shrink-0"
                      style={{
                        borderColor: '#A0522D',
                        backgroundColor: index === 0 || index === alBoraqStops.length - 1 ? '#A0522D' : '#FAF8F5',
                      }}
                    />
                    {index < alBoraqStops.length - 1 && (
                      <div className="w-0.5 h-16 bg-[var(--color-accent)]/30" />
                    )}
                  </div>
                  <div className={`pb-6 ${index === alBoraqStops.length - 1 ? 'pb-0' : ''}`}>
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-bold text-[var(--text-primary)]">{stop.station}</h4>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">
                        {stop.timeFromTangier}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">{stop.distanceKm} km</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{stop.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Al Boraq Pricing */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-[var(--color-primary)]" />
              Al Boraq Ticket Prices
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Prices vary slightly depending on the specific segment and whether purchased in advance or at the station. Below are standard one-way fares for the full Tangier&ndash;Casablanca route.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">1st Class (Full Route)</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">229 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~$23 / ~21 EUR</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">2nd Class (Full Route)</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">149 MAD</p>
                <p className="text-xs text-[var(--text-muted)]">~$15 / ~14 EUR</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Journey Time</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">2h 10min</p>
                <p className="text-xs text-[var(--text-muted)]">Tangier to Casablanca</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Daily Departures</p>
                <p className="text-2xl font-bold text-[var(--color-primary)]">12</p>
                <p className="text-xs text-[var(--text-muted)]">Each direction</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Segment</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">1st Class</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">2nd Class</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { segment: 'Tangier - Kenitra', first: '150-180 MAD', second: '100-120 MAD', duration: '1h 20min' },
                    { segment: 'Tangier - Rabat', first: '180-220 MAD', second: '120-140 MAD', duration: '1h 40min' },
                    { segment: 'Tangier - Casablanca', first: '229-329 MAD', second: '149-199 MAD', duration: '2h 10min' },
                    { segment: 'Kenitra - Rabat', first: '60-80 MAD', second: '40-55 MAD', duration: '20min' },
                    { segment: 'Kenitra - Casablanca', first: '100-140 MAD', second: '65-90 MAD', duration: '50min' },
                    { segment: 'Rabat - Casablanca', first: '80-120 MAD', second: '50-75 MAD', duration: '50min' },
                  ].map((row) => (
                    <tr key={row.segment} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{row.segment}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{row.first}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{row.second}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{row.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-[var(--surface-muted)]">
              <p className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Prices are slightly higher when purchased on the day of travel at the station. Book online at <strong className="text-[var(--text-primary)]">oncf.ma</strong> or via the ONCF app for the best rates. Children under 4 travel free; ages 4-12 get a 50% discount.</span>
              </p>
            </div>
          </div>

          {/* Al Boraq Schedule & Booking */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CalendarDays className="w-5 h-5 text-[var(--color-primary)]" />
              Schedules &amp; Booking
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">Schedule Highlights</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>First departure: around 06:00 from both Tangier and Casablanca</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Last departure: around 20:30 from both termini</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Frequency: approximately every 1-2 hours throughout the day</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Busiest times: 08:00, 14:00, 18:00 (commuter hours)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Reduced schedule on major holidays (Eid al-Fitr, Eid al-Adha)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-3">Booking Tips</h4>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Book 2-5 days ahead for Friday/Sunday travel to guarantee a seat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Tickets open for sale 30 days before departure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>E-tickets on your phone are fully accepted (no need to print)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>At the station, use automated machines to skip ticket window queues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Refunds available up to 24 hours before departure (small fee deducted)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          REGULAR TRAIN ROUTES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <TrainFront className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Regular Train Routes (ONCF Conventional)
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Beyond the Al Boraq high-speed service, ONCF operates an extensive network of <strong className="text-[var(--text-primary)]">conventional trains</strong> connecting Morocco&apos;s major cities. These trains run at speeds of 120-160 km/h on well-maintained track and offer a comfortable, reliable alternative to bus travel. The main corridors are the Atlantic axis (Tangier&ndash;Rabat&ndash;Casablanca&ndash;Marrakech) and the eastern line (Casablanca&ndash;Fes&ndash;Oujda).
              </p>
              <p>
                Conventional trains are significantly cheaper than Al Boraq and reach destinations the high-speed line does not serve, including <strong className="text-[var(--text-primary)]">Marrakech</strong>, <strong className="text-[var(--text-primary)]">Fes</strong>, <strong className="text-[var(--text-primary)]">Meknes</strong>, <strong className="text-[var(--text-primary)]">Oujda</strong>, and <strong className="text-[var(--text-primary)]">El Jadida</strong>. The Casablanca-Marrakech route is the busiest tourist line, while the overnight Casablanca-Oujda service is an adventure in itself. Trains are air-conditioned with reserved seating in both first and second class.
              </p>
            </div>

            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">All Conventional Routes, Prices &amp; Frequencies</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">1st Class</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">2nd Class</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {conventionalRoutes.map((r) => (
                    <tr key={r.route} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{r.route}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{r.duration}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{r.priceFirst} MAD</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{r.priceSecond} MAD</td>
                      <td className="py-2.5 px-3 text-right text-xs text-[var(--text-muted)]">{r.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Route Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                Casablanca - Marrakech
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                The most popular tourist route in Morocco. Trains depart approximately every 1-2 hours from Casa-Voyageurs. The 3-hour journey passes through flat agricultural plains south of Settat before arriving at Marrakech&apos;s renovated station, just a 15-minute walk from Jemaa el-Fnaa. Second class is perfectly adequate for this journey.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">3-3.5 hours</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">100-200 MAD</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">9 daily</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                Casablanca - Fes
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                Connects Morocco&apos;s economic capital with its spiritual and cultural heart. The train passes through Rabat and Meknes before arriving in Fes. Some services require a change at Sidi Kacem. First class is recommended for the 4-hour journey. The Fes station is about 2 km from the medina entrance at Bab Bou Jeloud.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">3.5-4 hours</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">130-250 MAD</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">7 daily</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                Casablanca - Oujda (Overnight)
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                Morocco&apos;s longest train ride takes nearly 10 hours and crosses the entire country from west to east, passing through Fes, Taza, and the Rif foothills. An overnight departure with <strong className="text-[var(--text-primary)]">couchette</strong> sleeping berths is available, saving you a hotel night. The overnight train departs in the evening and arrives in Oujda early the following morning.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">9.5-10 hours</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">200-400 MAD</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">2 daily</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[var(--color-accent)]" />
                Fes - Meknes
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-3">
                One of the shortest and most frequent train rides in Morocco. The 45-minute journey between two imperial cities makes it perfect for a day trip. Trains depart roughly every hour. At 30-45 MAD for second class, it is cheaper than a grand taxi and far more comfortable. Meknes station is a short taxi ride from the medina.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">45 minutes</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">30-70 MAD</span>
                <span className="text-xs px-3 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-medium">10 daily</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRAIN CLASSES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Ticket className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Train Classes Explained
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {trainClasses.map((cls) => (
              <div key={cls.name} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <cls.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{cls.name}</h3>
                </div>
                <ul className="space-y-2 mb-4">
                  {cls.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[var(--border-light)]">
                  <p className="text-sm text-[var(--text-secondary)] mb-2">
                    <strong className="text-[var(--text-primary)]">Best for:</strong> {cls.bestFor}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{cls.priceNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW TO BUY TICKETS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <CreditCard className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              How to Buy Tickets
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {bookingMethods.map((method) => (
              <div key={method.method} className="card-moroccan p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="inline-flex p-2 rounded-lg bg-[var(--color-primary)]/10">
                    <method.icon className="w-5 h-5 text-[var(--color-primary)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">{method.method}</h3>
                </div>

                <ol className="space-y-2 mb-4">
                  {method.steps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-xs font-bold text-[var(--color-primary)]">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[var(--border-light)]">
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider">Pros</p>
                    <ul className="space-y-1">
                      {method.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 text-green-600 shrink-0 mt-0.5" />
                          <span>{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider">Cons</p>
                    <ul className="space-y-1">
                      {method.cons.map((con) => (
                        <li key={con} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                          <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                          <span>{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Important Booking Notes */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-primary)]" />
              Important Booking Notes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Payment at station ticket windows', detail: 'Cash only (Moroccan Dirhams) or Moroccan bank debit cards. International Visa/Mastercard credit cards are NOT accepted at ticket windows. Bring cash.' },
                { title: 'Online payment issues', detail: 'The ONCF website and app accept Visa and Mastercard, but some international cards are declined by the Moroccan payment gateway. If your card is declined, try a different card or purchase at the station.' },
                { title: 'Al Boraq requires reservation', detail: 'Every Al Boraq ticket has a specific train time and seat number. You cannot board a different Al Boraq train with the same ticket. Conventional train tickets are more flexible.' },
                { title: 'Children and discounts', detail: 'Children under 4 travel free (no seat reservation). Ages 4-12 get 50% off. Moroccan students with ONCF Carte Jeune get 25% off. No tourist discount cards exist.' },
                { title: 'Cancellation and changes', detail: 'Al Boraq tickets can be changed or refunded up to 24 hours before departure with a 10-15% cancellation fee. Conventional tickets have more restrictive change policies.' },
                { title: 'Peak travel periods', detail: 'Book well ahead during Eid holidays, summer (July-August), and the Tangier-Casa corridor on Fridays and Sundays. Trains fill up during Ramadan as well.' },
              ].map((note) => (
                <div key={note.title} className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">{note.title}</h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{note.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          STATION GUIDES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Building2 className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Station Guides
            </h2>
          </div>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl">
            Knowing what to expect at your departure and arrival stations makes train travel in Morocco much smoother. Here are detailed guides to the four most important rail stations for travelers.
          </p>

          <div className="space-y-6">
            {stations.map((station) => (
              <div key={station.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-md bg-[var(--color-primary)] text-white text-sm font-bold">
                    {station.city}
                  </span>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">{station.name}</h3>
                  <span className="text-sm text-[var(--text-muted)]">&mdash; {station.role}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Lines &amp; Connections</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{station.lines}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-2">Facilities</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{station.facilities}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider flex items-center gap-1.5">
                      <Car className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      Taxi Access
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{station.taxi}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <h4 className="text-xs font-semibold text-[var(--text-primary)] mb-1 uppercase tracking-wider flex items-center gap-1.5">
                      <TrainFront className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                      Tram / Public Transit
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{station.tram}</p>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-amber-50 border border-amber-200">
                  <p className="text-xs text-amber-800 flex items-start gap-2">
                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                    <span><strong>Tip:</strong> {station.tips}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TRAIN TRAVEL TIPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Train Travel Tips
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {travelTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <tip.icon className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm mb-1">{tip.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          TRAIN VS BUS VS TAXI COMPARISON
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Gauge className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Train vs Bus vs Shared Taxi
            </h2>
          </div>

          <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl">
            Choosing between trains, buses, and shared taxis depends on your destination, budget, and comfort preferences. Here is a side-by-side comparison to help you decide.
          </p>

          <div className="card-moroccan overflow-hidden mb-8">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Mode</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Speed</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Comfort</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Cost</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row) => (
                    <tr key={row.mode} className="border-t border-[var(--border-light)]">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <row.icon className="w-4 h-4 text-[var(--color-primary)]" />
                          <span className="font-medium text-[var(--text-primary)]">{row.mode}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.speed}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.comfort}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.cost}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)] text-xs">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* When to Choose What */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <TrainFront className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Choose Train When</h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Traveling between major cities on the rail network</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>You value comfort, space, and a smooth ride</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>You want fixed departure times and reliable schedules</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>You need to work on your laptop during the journey</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Bus className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Choose Bus When</h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>Your destination has no train service (Essaouira, Chefchaouen, Agadir)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>CTM or Supratours covers the route at a good price</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>You want a direct connection to the Sahara or Atlas region</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>The bus departs directly from the train station (Supratours)</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-3">
                <Car className="w-5 h-5 text-[var(--color-primary)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">Choose Taxi When</h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>The route is short (under 2 hours) and frequent</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>No bus or train covers the specific route</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>You want the most authentic Moroccan travel experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span>You are headed to a small town or village</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CTM & SUPRATOURS BUS CONNECTIONS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Bus className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              CTM &amp; Supratours Bus Connections
            </h2>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl">
            <p>
              The ONCF rail network does not reach southern or eastern Morocco&apos;s most popular destinations. That is where <strong className="text-[var(--text-primary)]">Supratours</strong> (operated by ONCF) and <strong className="text-[var(--text-primary)]">CTM</strong> (Morocco&apos;s premium intercity bus company) fill the gap. Supratours buses depart directly from ONCF train stations, making train-to-bus transfers seamless. CTM buses operate from their own stations or from the main gare routiere (bus station) in each city.
            </p>
            <p>
              For destinations like Essaouira, Chefchaouen, Agadir, Ouarzazate, and the Sahara desert towns (Merzouga, Zagora, M&apos;Hamid), a combination of train plus connecting bus is the standard traveler&apos;s approach. Both CTM and Supratours offer air-conditioned coaches with reserved seating, luggage storage, and rest stops on longer routes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Supratours</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Operated by ONCF (same company as the trains)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Departs from ONCF train stations (seamless connections)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Book at Supratours offices or oncf.ma</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Key routes: Marrakech-Essaouira, Fes-Merzouga, Casa-Agadir</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Price range: 50-230 MAD depending on distance</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">CTM</h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Morocco&apos;s most established intercity bus company</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Departs from CTM stations or gare routiere</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Book at ctm.ma, CTM stations, or by phone</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Key routes: Tangier-Chefchaouen, Casa-Marrakech, Marrakech-Agadir</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span>Price range: 40-250 MAD. Luggage fee: 5-10 MAD per checked bag.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bus Routes Table */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Popular Bus Connections from Train Stations</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">From</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">To</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Operator</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Price</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {busConnections.map((r) => (
                    <tr key={r.from + r.to} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 text-[var(--text-secondary)] text-xs">{r.from}</td>
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{r.to}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{r.operator}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{r.duration}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{r.price}</td>
                      <td className="py-2.5 px-3 text-right text-xs text-[var(--text-muted)]">{r.frequency}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          GRAND TAXI GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Grand Taxi Guide
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Grand taxis are Morocco&apos;s shared intercity taxis &mdash; traditionally white Mercedes 240D sedans, though increasingly replaced by newer Dacia Logans and Renault Kangoo minivans. They operate on fixed routes between cities and towns, departing from designated stations when all seats are filled (typically 6 passengers in a sedan, 7-8 in a minivan).
              </p>
              <p>
                Grand taxis fill the gaps in the rail and bus networks, reaching virtually every town and village in Morocco. They are the primary transport for routes not served by trains, such as Fes to Chefchaouen, Marrakech to Essaouira, and many Atlas Mountain and desert towns. Prices are fixed by route and well-known to locals &mdash; simply ask your hotel for the going rate before heading to the station.
              </p>
            </div>

            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Grand Taxi Fares</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Route</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Per Seat</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Whole Taxi</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Time</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {grandTaxiRoutes.map((f) => (
                    <tr key={f.route} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{f.route}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{f.perSeat} MAD</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{f.wholeTaxi} MAD</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{f.time}</td>
                      <td className="py-2.5 px-3 text-xs text-[var(--text-muted)]">{f.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">How Grand Taxis Work</h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li>1. Go to the grand taxi station (ask for &quot;station de grand taxi&quot;)</li>
                  <li>2. Tell the dispatcher or driver your destination</li>
                  <li>3. Pay for 1 seat and wait until all 6 seats fill</li>
                  <li>4. To leave immediately, buy 2 or more seats (or all 6 for privacy)</li>
                  <li>5. The driver drops you at the destination&apos;s grand taxi station</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Good to Know</h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>No fixed schedules. They leave when full.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Wait times: 10 min on popular routes, up to 1 hour on quiet ones.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Luggage goes in the trunk at no extra charge.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Front seat (next to driver) is the most comfortable spot.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                    <span>Have exact change. Drivers may not carry change for large bills.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PETIT TAXI GUIDE
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Navigation className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Petit Taxi Guide
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Petit taxis are small city taxis that operate <strong className="text-[var(--text-primary)]">only within city limits</strong>. They are your primary transport for getting from train stations to your hotel, from your riad to a restaurant, or from one neighborhood to another. Every city has its own distinctive color &mdash; red in Casablanca, beige in Marrakech, blue in Rabat, aqua in Tangier.
              </p>
              <p>
                By law, all petit taxis must use a <strong className="text-[var(--text-primary)]">meter (compteur)</strong>. The starting fare is typically 1.40-2.50 MAD, and most rides within the city center cost between 7 and 30 MAD. At night (after 8 PM), a 50% surcharge applies to the meter rate. If a driver refuses to turn on the meter, politely decline and take the next taxi. Never agree to a flat fare within the city &mdash; it will always be higher than the metered rate.
              </p>
              <p>
                Petit taxis can carry a maximum of 3 passengers (they are typically small Fiat Unos, Dacia Logans, or similar compact cars). If you are a group of 4 or more, you will need two taxis or a grand taxi.
              </p>
            </div>

            {/* City Taxi Colors */}
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Petit Taxi Colors by City</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
              {petitTaxiColors.map((t) => (
                <div key={t.city} className="p-3 rounded-lg bg-[var(--surface-muted)] text-center">
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-2 border-2 border-white shadow-sm"
                    style={{ backgroundColor: t.hex }}
                  />
                  <p className="font-semibold text-[var(--text-primary)] text-sm">{t.city}</p>
                  <p className="text-xs text-[var(--text-muted)]">{t.color}</p>
                </div>
              ))}
            </div>

            {/* Meter tips */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[var(--color-primary)]" />
                  Using the Meter
                </h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li>Say &quot;compteur, s&apos;il vous plait&quot; (meter, please) when you get in</li>
                  <li>Starting rate: 1.40-2.50 MAD depending on the city</li>
                  <li>Average city ride: 7-25 MAD (daytime)</li>
                  <li>Night surcharge (after 8 PM): 50% added to meter rate</li>
                  <li>Minimum fare: some cities enforce a 7-10 MAD minimum</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Common Issues
                </h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li>Driver refuses meter: politely decline and take the next taxi</li>
                  <li>Driver claims meter is broken: it almost never is. Exit the taxi.</li>
                  <li>Driver takes a long route: use Google Maps to follow the trip</li>
                  <li>Overcharging at night: ensure the surcharge matches 50% of the meter</li>
                  <li>Train station taxis may try flat fares: always insist on the meter</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Ride-hailing Alternative */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-[var(--color-primary)]" />
              Ride-Hailing Apps as an Alternative
            </h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              In major cities (Casablanca, Rabat, Marrakech, Tangier, Agadir), ride-hailing apps provide a convenient alternative to petit taxis. They eliminate the need to negotiate fares and provide upfront pricing.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">inDrive</h4>
                <p className="text-sm text-[var(--text-secondary)]">You propose a fare, drivers accept or counter. Often cheaper than metered taxis. Very popular in Casablanca and Marrakech. Cash or card payment.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-1">Careem</h4>
                <p className="text-sm text-[var(--text-secondary)]">Fixed fares calculated by the app (like Uber). Available in Casablanca, Rabat, and expanding. Card payment available. Receipts by email.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FUTURE RAIL PROJECTS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Construction className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Future Rail Projects
            </h2>
          </div>

          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl">
            <p>
              Morocco has one of the most ambitious rail expansion programs on the African continent. Driven in part by the co-hosting of the <strong className="text-[var(--text-primary)]">2030 FIFA World Cup</strong> (with Spain and Portugal), the government and ONCF are investing heavily in extending the high-speed rail network, upgrading stations, and improving urban rail services. Here are the key projects shaping the future of Moroccan rail.
            </p>
          </div>

          <div className="space-y-6">
            {futureProjects.map((project) => (
              <div key={project.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        backgroundColor: project.status === 'Under Construction' ? '#A0522D' :
                          project.status === 'Active Planning and Construction' ? '#C4960C' :
                          project.status === 'Under Development' ? '#2980b9' : '#6b7280',
                        color: '#ffffff',
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">{project.name}</h3>
                    <p className="text-sm text-[var(--color-primary)] font-medium mb-3 flex items-center gap-1.5">
                      <Timer className="w-4 h-4" />
                      {project.timeline}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed">{project.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* World Cup 2030 context */}
          <div className="card-moroccan p-6 md:p-8 mt-8 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Milestone className="w-5 h-5 text-[var(--color-accent)]" />
              What This Means for Travelers
            </h3>
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p>
                By 2030, travelers will be able to ride high-speed trains from <strong className="text-[var(--text-primary)]">Tangier to Marrakech</strong> in approximately 3 hours, compared to the current 5.5-hour combination of Al Boraq plus conventional train. The Casablanca-Marrakech segment alone will drop from 3 hours to about 1 hour 20 minutes.
              </p>
              <p>
                Station upgrades across the country will improve passenger facilities, accessibility, and connections to local transit. The World Cup infrastructure investment will leave a lasting legacy that benefits all rail travelers in Morocco for decades to come.
              </p>
              <p>
                For the latest updates on Morocco&apos;s rail expansion, visit the official <strong className="text-[var(--text-primary)]">ONCF website (oncf.ma)</strong> or see our <Link href="/world-cup-2030" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]">World Cup 2030 guide</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ESSENTIAL APPS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Transport Apps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Download these apps before your trip for the smoothest rail and ground transport experience in Morocco.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'ONCF / Al Boraq', use: 'Train schedules, ticket purchase, e-tickets with QR codes', cost: 'Free' },
              { name: 'CTM', use: 'Bus schedules and online booking for CTM intercity coaches', cost: 'Free' },
              { name: 'inDrive', use: 'Ride-hailing with negotiable fares in major cities', cost: 'Free' },
              { name: 'Careem', use: 'Fixed-price ride-hailing (Uber-style) in Casablanca and Rabat', cost: 'Free' },
              { name: 'Google Maps', use: 'Navigation, transit directions, and offline maps for train stations', cost: 'Free' },
              { name: 'Maps.me', use: 'Best offline maps for navigating medinas near train stations', cost: 'Free' },
            ].map((app) => (
              <div key={app.name} className="card-moroccan p-5 flex gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-[var(--color-primary)]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] text-sm">{app.name}</h3>
                  <p className="text-xs text-[var(--text-secondary)] mb-1">{app.use}</p>
                  <span className="text-xs text-[var(--color-primary)] font-medium">{app.cost}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Continue planning your Morocco trip with these related transport and travel guides.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="card-moroccan p-5 group hover:border-[var(--color-primary)]/30 transition-colors"
              >
                <h3 className="font-bold text-[var(--text-primary)] text-sm mb-2 group-hover:text-[var(--color-primary)] transition-colors flex items-center gap-1">
                  {page.title}
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{page.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Rail Journey
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Combine trains, buses, and taxis to build the perfect Morocco itinerary. Explore our route planner and detailed transport guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <TrainFront className="w-4 h-4" /> Full Transport Guide
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Morocco Itineraries
            </Link>
            <Link
              href="/tools/planner"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <ArrowRight className="w-4 h-4" /> Trip Planner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

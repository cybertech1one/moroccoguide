import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  TrainFront,
  MapPin,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Ticket,
  Zap,
  Users,
  Wifi,
  Armchair,
  CreditCard,
  Gauge,
  Route,
  Building,
  ShieldCheck,
  Luggage,
  Globe,
  DollarSign,
  MessageCircleQuestion,
  BookOpen,
  Navigation,
  Eye,
  Mountain,
  Smartphone,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-train-routes`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Train Routes Guide 2026 | ONCF Schedules, Al Boraq & Prices from 50 MAD',
  description:
    'Complete guide to Morocco train routes: Al Boraq high-speed (Tangier-Casablanca in 2h10), ONCF schedules, prices from 50 MAD, first vs second class, scenic routes, booking tips, station guides, and luggage rules for every major rail corridor.',
  keywords: [
    'Morocco train routes',
    'ONCF Morocco',
    'Morocco train schedule 2026',
    'Morocco train tickets',
    'Al Boraq high speed train Morocco',
    'Casablanca to Marrakech train',
    'Marrakech to Fes train',
    'Tangier to Casablanca train',
    'Morocco first class train',
    'ONCF train prices 2026',
    'Morocco rail travel',
    'Al Boraq Africa high speed',
    'Morocco train booking online',
    'Fes Meknes train route',
    'Morocco scenic train rides',
    'ONCF app booking',
    'Morocco rail pass',
    'train stations Morocco',
  ],
  openGraph: {
    title: 'Morocco Train Routes Guide 2026 | ONCF Schedules, Al Boraq & Prices',
    description:
      'Route-by-route breakdown of every ONCF train line in Morocco. Al Boraq high-speed, prices from 50 MAD, first vs second class comparison, scenic routes, booking system, and station guides.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-al-boraq-train.webp`,
        width: 1200,
        height: 630,
        alt: 'Al Boraq high-speed train at a Moroccan station platform ready for departure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Train Routes Guide 2026 | ONCF, Al Boraq & Booking Tips',
    description:
      'Al Boraq high-speed, ONCF routes, prices from 50 MAD, first vs second class, scenic journeys, booking steps, and station-by-station guides across Morocco.',
    images: [`${BASE_URL}/images/hero-al-boraq-train.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'How do I book train tickets in Morocco online?',
    a: 'Use the official ONCF website (oncf.ma) or download the ONCF mobile app for iOS or Android. Both accept international Visa and Mastercard. Select your route, date, and class, then pay online. Your e-ticket arrives by email and can also be displayed in the app. Print it or save a screenshot to show the conductor on board.',
  },
  {
    q: 'What is the Al Boraq train and how fast does it go?',
    a: 'Al Boraq is Africa\'s first high-speed rail service, connecting Tangier to Casablanca at speeds up to 320 km/h. Launched in 2018, it uses Alstom TGV technology and reduced the Tangier-Casablanca journey from 5 hours to 2 hours and 10 minutes. The name comes from the mythical winged steed in Islamic tradition. Tickets start from 149 MAD in second class.',
  },
  {
    q: 'Is first class worth the extra cost on Moroccan trains?',
    a: 'For journeys over 2 hours, first class is a worthwhile upgrade. You get wider seats (3 abreast instead of 4), reserved seating, working power outlets at every seat, and a noticeably quieter car. The price premium is roughly 50% over second class. For short trips like Casablanca to Rabat (55 minutes), second class is perfectly comfortable and saving the difference makes sense.',
  },
  {
    q: 'Can I take the train from Marrakech to the Sahara Desert?',
    a: 'No. The ONCF rail network does not extend south of Marrakech. To reach the Sahara (Merzouga or M\'Hamid), you need to take a bus or arrange private transport. Supratours buses connect directly at Marrakech train station and run to Ouarzazate and Errachidia. From Errachidia, local transport continues to Merzouga.',
  },
  {
    q: 'How early should I arrive at the train station in Morocco?',
    a: 'For Al Boraq high-speed trains, arrive 15 to 20 minutes before departure. For conventional trains with unreserved second-class seating, arriving 10 to 15 minutes early gives you time to find a good seat. During holiday periods (Eid, summer) and on busy Friday/Sunday routes, arriving 30 minutes early helps secure seating.',
  },
  {
    q: 'What is the luggage policy on Moroccan trains?',
    a: 'ONCF does not enforce a strict luggage limit. Each passenger can bring reasonable personal luggage. Overhead racks hold standard carry-on bags and backpacks. Larger suitcases fit in the luggage areas at the end of each car. There is no separate checked-luggage service. Keep valuables with you at all times as luggage areas are not supervised.',
  },
  {
    q: 'Are there overnight trains in Morocco?',
    a: 'There are no dedicated sleeper cars on Moroccan trains. The longest route, Casablanca to Oujda, has a late evening departure that arrives the next morning (about 10 hours), but you will be sitting in a regular seat. For genuine overnight travel comfort, consider CTM or Supratours buses with reclining seats, or book a domestic flight instead.',
  },
  {
    q: 'Do Moroccan trains run on time?',
    a: 'Al Boraq high-speed trains are consistently punctual, with most arrivals within 5 minutes of schedule. Conventional trains run reasonably on time, though delays of 10 to 20 minutes can occur, particularly on longer routes like Casablanca to Oujda. The Casablanca-Rabat shuttle is highly reliable due to its frequency. During Ramadan and major holidays, allow extra buffer time.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Train Routes Guide 2026',
  description:
    'Comprehensive route-by-route guide to Morocco ONCF train network including Al Boraq high-speed, conventional lines, schedules, prices, station guides, and booking instructions.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-al-boraq-train.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Travel Tips', item: `${BASE_URL}/travel-tips` },
      { '@type': 'ListItem', position: 3, name: 'Morocco Train Routes Guide', item: PAGE_URL },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

/* ================================================================
   DATA: TRAIN ROUTES
   ================================================================ */

const routes = [
  {
    name: 'Tangier -- Casablanca (Al Boraq High-Speed)',
    type: 'High-Speed',
    distance: '350 km',
    duration: '2h10',
    frequency: '12 daily',
    priceSecond: 'from 149 MAD',
    priceFirst: 'from 229 MAD',
    stops: ['Tangier Ville', 'Kenitra', 'Rabat Agdal', 'Rabat Ville', 'Casa Voyageurs'],
    description:
      'Africa\'s first high-speed rail line, the Al Boraq connects Tangier to Casablanca at speeds up to 320 km/h. Named after the mythical winged steed, this TGV-technology train has transformed northern Morocco travel since its 2018 inauguration. The old journey took 5 hours; now it takes just over 2. Trainsets feature spacious seating, power outlets at every seat, and a cafe car. The route crosses the fertile Gharb plain with views of farmland and glimpses of the Atlantic coast near Kenitra.',
    tips: 'Book 2-3 weeks ahead for the best fares. The 7:00 AM and 5:00 PM departures fill up fastest. First class offers slightly wider seats and a quieter atmosphere, but second class is already excellent.',
    scenic: 'The Gharb plain between Kenitra and Tangier shows rolling agricultural land and, on clear days, the Rif Mountains appear on the eastern horizon.',
  },
  {
    name: 'Casablanca -- Marrakech',
    type: 'Conventional',
    distance: '243 km',
    duration: '2h50 - 3h20',
    frequency: '9 daily',
    priceSecond: 'from 100 MAD',
    priceFirst: 'from 150 MAD',
    stops: ['Casa Voyageurs', 'Settat', 'Ben Guerir', 'Marrakech'],
    description:
      'The most popular tourist route in Morocco, connecting the commercial capital with the red city. Trains run from early morning to late evening. The journey crosses the Chaouia agricultural plain before the Atlas Mountains emerge on the southern horizon as you approach Marrakech. First-class cars are air-conditioned with assigned seating. Second class is comfortable but can get crowded during holidays and weekends. The Marrakech station is a handsome Art Deco building about 15 minutes by taxi from the medina.',
    tips: 'Take the direct train (2h50) rather than the semi-direct service, which makes additional stops. Morning departures offer the best light as the Atlas range appears ahead of you.',
    scenic: 'Watch for the first sighting of the snow-capped High Atlas peaks about 40 minutes before Marrakech. The contrast between flat agricultural land and sudden mountain wall is dramatic.',
  },
  {
    name: 'Casablanca -- Rabat',
    type: 'Shuttle',
    distance: '90 km',
    duration: '55 min - 1h10',
    frequency: '36 daily',
    priceSecond: 'from 50 MAD',
    priceFirst: 'from 75 MAD',
    stops: ['Casa Voyageurs', 'Casa Port (some)', 'Mohammedia', 'Rabat Ville', 'Rabat Agdal'],
    description:
      'Morocco\'s busiest rail corridor, with shuttle-frequency service between the economic and political capitals. Trains depart approximately every 30 minutes during peak hours and hourly off-peak. This is a commuter-heavy route full of business travelers and students. The line follows the Atlantic coast with occasional ocean views near Mohammedia. Both Casa Voyageurs and Rabat Ville stations are centrally located with easy taxi connections.',
    tips: 'No advance booking needed -- just show up and board the next train. Second class is fine for this short run. Avoid the 7-9 AM and 5-7 PM rush if you want a guaranteed seat.',
    scenic: 'Near Mohammedia, the tracks run close to the Atlantic shoreline. Look left (westward) for brief ocean views and the Mohammedia beach.',
  },
  {
    name: 'Casablanca -- Fes',
    type: 'Conventional',
    distance: '296 km',
    duration: '3h30 - 4h',
    frequency: '7 daily',
    priceSecond: 'from 120 MAD',
    priceFirst: 'from 180 MAD',
    stops: ['Casa Voyageurs', 'Rabat Ville', 'Kenitra', 'Meknes', 'Fes'],
    description:
      'A scenic journey through Morocco\'s agricultural heartland linking the Atlantic coast to the ancient imperial cities of Meknes and Fes. After Rabat and Kenitra, the train climbs through rolling hills and cork oak forests into the Saiss plain. The approach to Meknes offers olive grove panoramas, and the final stretch to Fes reveals the ancient medina settled into its valley. Consider breaking the trip with a stop in Meknes to see the grandiose Bab Mansour gate and the Royal Stables.',
    tips: 'The Fes station is about 3 km from the medina. A petit taxi costs from 15 MAD to Bab Boujloud. First class is recommended for this longer journey -- you\'ll appreciate the reserved seat and space.',
    scenic: 'The section between Kenitra and Meknes passes through some of Morocco\'s most productive farmland: wheat fields, sunflowers in season, and cork oak woodland.',
  },
  {
    name: 'Marrakech -- Fes (via Casablanca)',
    type: 'Conventional',
    distance: '539 km',
    duration: '7h - 7h30',
    frequency: '3 daily (direct)',
    priceSecond: 'from 195 MAD',
    priceFirst: 'from 295 MAD',
    stops: ['Marrakech', 'Ben Guerir', 'Settat', 'Casa Voyageurs', 'Rabat Ville', 'Kenitra', 'Meknes', 'Fes'],
    description:
      'The longest standard route connecting Morocco\'s two most-visited cities. No direct east-west rail line exists, so all trains route through Casablanca. Three direct daily services make the full run without requiring a platform change. The trip is long but covers the entire north-south gradient of Morocco\'s Atlantic lowlands. Many travelers split this into two legs with a night in Casablanca or Rabat. Direct trains have a cafe car with coffee, tea, and sandwiches.',
    tips: 'For the 7-hour journey, first class is worth every dirham. Alternatively, consider CTM overnight buses (from 180 MAD) or domestic flights (from 400 MAD one-way). Power outlets are available in first class -- charge your devices.',
    scenic: 'You get the best of both corridors: the Atlas approach leaving Marrakech and the farmland-to-hills transition approaching Fes. Sunrise departures light up the entire journey.',
  },
  {
    name: 'Tangier -- Fes (Al Boraq + Conventional)',
    type: 'Mixed',
    distance: '380 km',
    duration: '3h30 - 4h (with change)',
    frequency: '5 daily combinations',
    priceSecond: 'from 170 MAD (combined)',
    priceFirst: 'from 260 MAD (combined)',
    stops: ['Tangier Ville', 'Kenitra (change)', 'Meknes', 'Fes'],
    description:
      'No direct Tangier-Fes train exists. The optimal route takes the Al Boraq high-speed from Tangier to Kenitra (1 hour), then a conventional train onward to Fes (2h30). The connection at Kenitra usually allows 20-40 minutes, and the station has a waiting room and small cafe. This combined journey is dramatically faster than the old conventional routing (5+ hours) and represents one of the most practical cross-country connections in the network.',
    tips: 'Book the Al Boraq ticket in advance online. Buy the Kenitra-Fes leg at the counter or in the ONCF app. Allow at least 30 minutes for the Kenitra connection to absorb any delays.',
    scenic: 'You experience two distinct landscapes: the high-speed sweep through the Gharb, then the slower climb into the Meknes-Fes hill country on the conventional train.',
  },
  {
    name: 'Casablanca -- Oujda',
    type: 'Conventional',
    distance: '607 km',
    duration: '9h30 - 10h',
    frequency: '2 daily',
    priceSecond: 'from 220 MAD',
    priceFirst: 'from 330 MAD',
    stops: ['Casa Voyageurs', 'Rabat', 'Meknes', 'Fes', 'Taza', 'Oujda'],
    description:
      'The eastern trunk line crosses Morocco from the Atlantic to the Algerian border. Past Fes, the train enters the Taza corridor -- a dramatic mountain pass between the Rif and Middle Atlas ranges. The landscape shifts from fertile western plains to arid eastern steppe near Oujda. This is an adventure route for rail enthusiasts more than a practical transport option. The overnight departure lets you sleep through the long haul, arriving in Oujda by morning.',
    tips: 'Bring your own food and water. The cafe car may have limited options on this route. The Taza mountain section is the scenic highlight -- try to be awake for it.',
    scenic: 'The Taza Gap is Morocco\'s most dramatic rail scenery: the train threads between two mountain ranges through a narrow corridor of rocky gorges and terraced hillsides.',
  },
  {
    name: 'Casablanca -- El Jadida',
    type: 'Shuttle',
    distance: '99 km',
    duration: '1h30',
    frequency: '6 daily',
    priceSecond: 'from 50 MAD',
    priceFirst: 'from 80 MAD',
    stops: ['Casa Voyageurs', 'Bir Jdid', 'El Jadida'],
    description:
      'A short coastal route to the Portuguese-influenced city of El Jadida, a UNESCO World Heritage site. The train heads south through agricultural land with occasional ocean views. El Jadida makes an excellent day trip from Casablanca, with its atmospheric Portuguese cistern, fortified medina, and beach promenade. The station sits about 1 km from the old medina walls.',
    tips: 'Perfect for a day trip. Take a morning train out and an evening train back. The Portuguese cistern is the must-see. At from 50 MAD in second class, this is one of Morocco\'s best-value rail excursions.',
    scenic: 'Open Atlantic views appear intermittently on the western side of the train, especially near the coast south of Casablanca.',
  },
] as const;

/* ================================================================
   DATA: CLASS COMPARISON
   ================================================================ */

const classComparison = [
  { feature: 'Seat Width', first: 'Wider seats (3 abreast)', second: 'Standard seats (4 abreast)' },
  { feature: 'Air Conditioning', first: 'Individual controls', second: 'Central system' },
  { feature: 'Seat Assignment', first: 'Reserved', second: 'Unreserved (first come)' },
  { feature: 'Crowding', first: 'Rarely crowded', second: 'Can be packed at peak times' },
  { feature: 'Power Outlets', first: 'At every seat', second: 'Limited or none' },
  { feature: 'Noise Level', first: 'Quieter cars', second: 'Livelier atmosphere' },
  { feature: 'Price Premium', first: 'Approximately 50% more', second: 'Base fare' },
  { feature: 'Best For', first: 'Journeys over 2 hours', second: 'Short trips under 2 hours' },
] as const;

/* ================================================================
   DATA: BOOKING STEPS
   ================================================================ */

const bookingSteps = [
  {
    step: 1,
    title: 'Visit ONCF.ma or Download the App',
    icon: Globe,
    detail: 'The official ONCF website and mobile app handle online booking for all routes including Al Boraq. The app is available for iOS and Android and works in English, French, and Arabic.',
  },
  {
    step: 2,
    title: 'Select Your Route and Date',
    icon: Route,
    detail: 'Enter departure and arrival stations. The system displays all available trains with times, durations, and prices. Al Boraq services are marked with a lightning bolt icon.',
  },
  {
    step: 3,
    title: 'Choose Your Class',
    icon: Armchair,
    detail: 'Select first or second class. For Al Boraq, Business class appears on some departures. The price difference is clearly shown before you commit.',
  },
  {
    step: 4,
    title: 'Enter Passenger Details',
    icon: Users,
    detail: 'Provide your full name as it appears on your passport. Children under 4 travel free. Ages 4-12 receive a 50% discount. Students with ONCF cards get a 25% reduction.',
  },
  {
    step: 5,
    title: 'Pay and Receive Your Ticket',
    icon: CreditCard,
    detail: 'International Visa and Mastercard are accepted. Your e-ticket arrives by email and is viewable in the ONCF app. Print it or take a screenshot -- you must show it on board.',
  },
  {
    step: 6,
    title: 'Board Your Train',
    icon: TrainFront,
    detail: 'Arrive 15-20 minutes before departure. Check the platform on the departure boards. For Al Boraq, your car and seat number are printed on the ticket. For conventional second class, seating is unreserved.',
  },
] as const;

/* ================================================================
   DATA: STATIONS
   ================================================================ */

const stations = [
  { name: 'Casa Voyageurs', city: 'Casablanca', amenities: 'Cafes, ATMs, left-luggage, tramway link', notes: 'Main hub for all routes including the airport train. Modern facilities in the Maarif district. The most important connection point in the entire network.' },
  { name: 'Casa Port', city: 'Casablanca', amenities: 'Basic waiting room, ticket office', notes: 'Secondary station near the old medina and port. Serves commuter trains to Rabat and coastal shuttles. Less useful for long-distance travel.' },
  { name: 'Marrakech', city: 'Marrakech', amenities: 'ATM, cafe, taxi rank, Supratours desk', notes: 'Southern terminus. Beautiful Art Deco architecture. About 15 minutes by petit taxi from Jemaa el-Fnaa. Supratours buses to the south depart from the adjacent lot.' },
  { name: 'Rabat Ville', city: 'Rabat', amenities: 'Cafes, shops, tramway connection', notes: 'Central Rabat station. Walking distance to the medina and government quarter. Connected to the Rabat-Sale tramway system for onward travel.' },
  { name: 'Fes', city: 'Fes', amenities: 'ATM, cafe, petit taxi rank', notes: 'Located in the Ville Nouvelle, 3 km from the ancient medina. Petit taxi to Bab Boujloud costs from 15 MAD. Fully modernized with clear signage.' },
  { name: 'Tangier Ville', city: 'Tangier', amenities: 'Al Boraq lounge, cafes, ATMs', notes: 'Terminal for Al Boraq and conventional trains. City center location, walkable to the Grand Socco and medina entrance. Renovated when Al Boraq launched.' },
  { name: 'Meknes', city: 'Meknes', amenities: 'Waiting room, small cafe', notes: 'On the Fes-Casablanca main line. About 2 km from the historic Bab Mansour. A worthwhile stopover between Fes and Rabat.' },
  { name: 'Kenitra', city: 'Kenitra', amenities: 'Waiting room, cafe, ticket office', notes: 'Key junction where Al Boraq meets the conventional network. The critical connection point for Tangier-to-Fes routing.' },
] as const;

/* ================================================================
   DATA: SCENIC HIGHLIGHTS
   ================================================================ */

const scenicHighlights = [
  {
    route: 'Casablanca -- Fes via Meknes',
    highlight: 'Cork oak forests and the Saiss plain',
    description: 'After Kenitra, the landscape transitions from coastal flat to rolling hills. Cork oak woodland lines the tracks, and the approach to Meknes reveals endless olive groves. The final descent into the Fes basin shows the ancient medina from above.',
    bestSeat: 'Left side (heading toward Fes)',
  },
  {
    route: 'Fes -- Oujda (Taza Corridor)',
    highlight: 'Mountain pass between Rif and Middle Atlas',
    description: 'The most dramatic stretch in the entire network. The train squeezes through the Taza Gap, a natural corridor between two mountain ranges. Rocky gorges, terraced hillsides, and remote Berber villages appear along this rarely-touristed section.',
    bestSeat: 'Right side (heading east)',
  },
  {
    route: 'Casablanca -- Marrakech',
    highlight: 'High Atlas Mountains on the horizon',
    description: 'About 40 minutes before Marrakech, the High Atlas suddenly appears on the southern skyline. On clear winter mornings, the snow-capped peaks glow pink in the early light. The contrast with the flat Chaouia plain is striking.',
    bestSeat: 'Right side (heading south)',
  },
  {
    route: 'Casablanca -- Rabat (Mohammedia section)',
    highlight: 'Atlantic coastline glimpses',
    description: 'Near Mohammedia, the tracks approach the Atlantic shore. The views are brief but rewarding -- beach, surf, and fishing boats appear through the windows before the train curves inland toward Rabat.',
    bestSeat: 'Left side (heading north)',
  },
] as const;

/* ================================================================
   DATA: PRACTICAL TIPS
   ================================================================ */

const practicalTips = [
  {
    icon: Luggage,
    title: 'Luggage Policy',
    content: 'No formal weight or size limit. Overhead racks hold standard carry-on bags and backpacks. Larger suitcases go in the luggage areas at each car\'s end. There is no checked-luggage service and no luggage screening. Keep valuables with you.',
  },
  {
    icon: AlertTriangle,
    title: 'Ramadan Schedule Changes',
    content: 'During Ramadan, ONCF adjusts timetables with reduced frequency in the evening. Check oncf.ma for the special Ramadan schedule. Late-night services may be added around Iftar and Suhoor times.',
  },
  {
    icon: Info,
    title: 'No Rail South of Marrakech',
    content: 'The rail network terminates at Marrakech. To reach Ouarzazate, Zagora, Merzouga (Sahara), Agadir, or Essaouira, use Supratours or CTM buses. Supratours runs from the lot adjacent to Marrakech station -- timed to meet arriving trains.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety and Security',
    content: 'Moroccan trains are generally safe. Petty theft is uncommon but keep belongings close, especially in crowded second-class cars. First class, with its reserved seating, offers more peace of mind. Stations have security personnel and CCTV.',
  },
  {
    icon: Smartphone,
    title: 'Connectivity on Board',
    content: 'Al Boraq trains offer free Wi-Fi (speeds vary). All routes have 4G mobile coverage for most of the journey, with brief drops in mountain sections on the Fes-Oujda line. Download offline maps before your trip just in case.',
  },
  {
    icon: DollarSign,
    title: 'Discounts and Passes',
    content: 'Children aged 4-12 pay half fare. Under 4 ride free. Students with ONCF student cards receive a 25% discount. ONCF occasionally runs promotional fares on the app -- check the "Offres" section. Seasonal pricing can change during holidays.',
  },
] as const;

/* ================================================================
   DATA: RELATED GUIDES
   ================================================================ */

const relatedGuides = [
  {
    title: 'Morocco Train Travel Guide',
    href: '/morocco-train-travel',
    description: 'General train travel advice, tips for first-time rail travelers in Morocco, and itinerary suggestions.',
  },
  {
    title: 'Morocco Road Trip Guide',
    href: '/morocco-road-trip',
    description: 'Planning a self-drive adventure? Routes, car rental, road conditions, and driving rules across Morocco.',
  },
  {
    title: 'Morocco Transport Guide',
    href: '/morocco-transport',
    description: 'Buses, grands taxis, domestic flights, and ferries -- every transport option beyond the rail network.',
  },
  {
    title: 'Morocco Budget Calculator',
    href: '/morocco-budget-calculator',
    description: 'Plan your daily spending with estimated costs for transport, food, accommodation, and activities.',
  },
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoTrainRoutesPage() {
  return (
    <>
      {/* -- JSON-LD -- */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-al-boraq-train.webp"
            alt="Al Boraq high-speed train at a Moroccan station platform ready for departure"
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
            <Link href="/travel-tips" className="hover:text-white transition-colors">Travel Tips</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white font-medium">Train Routes Guide</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
              <TrainFront className="w-4 h-4 text-[var(--color-accent)]" />
              Rail Travel Guide
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Train Routes Guide 2026
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Every ONCF rail corridor mapped out -- Al Boraq high-speed, conventional lines,
              scenic routes, prices from 50 MAD, and step-by-step booking instructions for
              the entire Moroccan rail network.
            </p>
            <div className="flex flex-wrap gap-8 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">8</p>
                <p className="text-sm text-white/70">Major Routes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 50</p>
                <p className="text-sm text-white/70">MAD per ticket</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">320 km/h</p>
                <p className="text-sm text-white/70">Al Boraq top speed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">2018</p>
                <p className="text-sm text-white/70">Al Boraq launched</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          INTRODUCTION + QUICK REFERENCE SIDEBAR
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose-moroccan">
                <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
                  Traveling Morocco by Rail
                </h2>
                <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    Morocco&apos;s national railway, ONCF (Office National des Chemins de Fer), runs a modern
                    and growing network connecting the country&apos;s major cities along the Atlantic coast and
                    into the interior. The crown jewel is the Al Boraq high-speed line -- Africa&apos;s first
                    and only high-speed rail service -- which rockets between Tangier and Casablanca at 320 km/h,
                    compressing a 5-hour journey into just over 2 hours.
                  </p>
                  <p>
                    Beyond the high-speed corridor, conventional ONCF trains link Casablanca to Marrakech, Fes,
                    Meknes, Rabat, El Jadida, and even distant Oujda on the Algerian border. Rail travel here
                    is comfortable, affordable, and scenic. You pass through farmland, mountain corridors, and
                    Atlantic coastal stretches that you would miss entirely from a plane window or a highway.
                  </p>
                  <p>
                    This guide provides a route-by-route breakdown with current prices, journey times, train
                    frequency, scenic highlights, and practical tips for each line. It also covers how to book
                    tickets online, what to expect at major stations, the difference between first and second
                    class, and answers to the questions travelers ask most often.
                  </p>
                  <p>
                    Morocco&apos;s rail network has limitations -- it does not extend south of Marrakech, and
                    there are no east-west cross-country routes. But for the cities it does connect, the train
                    is frequently the smartest way to travel: faster than a bus, cheaper than a taxi, and far
                    more relaxing than driving yourself through Moroccan traffic.
                  </p>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="card-moroccan p-6 sticky top-28">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--text-primary)] mb-5">
                  Quick Reference
                </h3>
                <div className="space-y-4">
                  {[
                    { label: 'Al Boraq Speed', value: 'Up to 320 km/h', detail: 'Africa\'s fastest train' },
                    { label: 'Cheapest Ticket', value: 'from 50 MAD', detail: 'Casa-Rabat second class' },
                    { label: 'Busiest Route', value: 'Casa-Rabat', detail: '36 trains daily' },
                    { label: 'Online Booking', value: 'oncf.ma', detail: 'Visa & Mastercard accepted' },
                    { label: 'Children Discount', value: '50% off ages 4-12', detail: 'Under 4 travel free' },
                    { label: 'Network Extent', value: 'Tangier to Oujda', detail: 'South limit: Marrakech' },
                  ].map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[var(--color-secondary)] mt-0.5 shrink-0" />
                      <div>
                        <p className="font-semibold text-[var(--text-primary)] text-sm">{info.label}</p>
                        <p className="text-sm text-[var(--text-secondary)]">{info.value} -- {info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[var(--text-muted)] mt-4 italic">
                  All prices approximate. Seasonal pricing can change during holidays and peak travel periods.
                </p>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a
                    href="#routes"
                    className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors"
                  >
                    View All Routes
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============================================================
          AL BORAQ SPOTLIGHT
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Africa&apos;s First High-Speed Train
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              The Al Boraq Experience
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Inaugurated in November 2018, the Al Boraq is built on French TGV technology by Alstom.
              It cut the Tangier-Casablanca travel time from nearly 5 hours to 2 hours and 10 minutes,
              transforming connectivity across northern Morocco.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <Zap className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Speed and Technology</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Maximum operational speed of 320 km/h on the dedicated high-speed track between Tangier
                and Kenitra. South of Kenitra, trains join the conventional network at reduced speed.
                The ride is smooth and virtually silent at full tilt -- noticeably quieter than European
                TGV services.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Armchair className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Onboard Comfort</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Spacious seats in both classes with power outlets, fold-down tables, and reading lights.
                Business class offers extra legroom and access to a premium lounge at Tangier and Casa
                Voyageurs stations. All seats face forward. The interior feels modern and well-maintained.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Wifi className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Wi-Fi and Cafe Car</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Free Wi-Fi is available on all Al Boraq trains, though speeds can vary under load.
                Mobile 4G signal holds strong along the entire route. A cafe car serves hot and cold
                beverages, sandwiches, and snacks at reasonable prices.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Ticket className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Pricing Structure</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Full Tangier-Casablanca: from 149 MAD (second class), from 229 MAD (first class).
                Shorter segments like Tangier-Kenitra cost less. Early online booking sometimes reveals
                promotional fares on the ONCF app. Seasonal pricing can change around holidays.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ALL TRAIN ROUTES
          ============================================================ */}
      <section id="routes" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Route by Route
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              All Major ONCF Train Routes
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed breakdown of every significant ONCF route with prices, times, stops, scenic notes, and practical advice.
            </p>
          </div>

          <div className="space-y-8">
            {routes.map((route) => (
              <div key={route.name} className="card-moroccan overflow-hidden">
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] text-xs font-bold">
                        {route.type === 'High-Speed' ? 'Al Boraq' : route.type}
                      </span>
                      <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-[var(--text-primary)] mt-2">
                        {route.name}
                      </h3>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-lg font-bold text-[var(--color-secondary)]">{route.priceSecond}</p>
                      <p className="text-xs text-[var(--text-muted)]">2nd class</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Route className="w-3 h-3" /> {route.distance}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Clock className="w-3 h-3" /> {route.duration}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <TrainFront className="w-3 h-3" /> {route.frequency}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--surface-muted)] text-[var(--text-muted)] text-xs font-medium">
                      <Star className="w-3 h-3" /> 1st: {route.priceFirst}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">{route.description}</p>

                  <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                    <h4 className="font-semibold text-xs text-[var(--text-primary)] mb-2 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[var(--color-secondary)]" /> Stops
                    </h4>
                    <div className="flex flex-wrap items-center gap-1">
                      {route.stops.map((stop, i) => (
                        <span key={stop} className="text-xs text-[var(--text-muted)]">
                          {stop}{i < route.stops.length - 1 && <span className="mx-1 text-[var(--color-secondary)]">&rarr;</span>}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-[var(--color-secondary)]/5 rounded-lg p-4">
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-bold text-[var(--color-secondary)]">Tip:</span> {route.tips}
                      </p>
                    </div>
                    <div className="bg-[var(--color-accent)]/5 rounded-lg p-4">
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-bold text-[var(--color-accent)]">Scenic:</span> {route.scenic}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FIRST CLASS VS SECOND CLASS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            First Class vs Second Class
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both classes get you to the same destination at the same speed. Here is what actually differs to help you decide.
          </p>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-primary)] text-white">
                    <th className="text-left p-4 font-semibold">Feature</th>
                    <th className="text-left p-4 font-semibold">First Class</th>
                    <th className="text-left p-4 font-semibold">Second Class</th>
                  </tr>
                </thead>
                <tbody>
                  {classComparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-4 font-semibold text-[var(--text-primary)]">{row.feature}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.first}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{row.second}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-6 card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                <span className="font-bold text-[var(--text-primary)]">Bottom line:</span> For the
                Casablanca-Rabat shuttle (under an hour), save your money and ride second class. For
                the Casablanca-Fes or Marrakech-Fes runs (3.5 to 7.5 hours), the first-class upgrade
                is a genuine comfort improvement worth the extra 50%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          HOW TO BOOK
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Step by Step
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              How to Book ONCF Train Tickets
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Online booking through the ONCF website or app is the easiest approach. You can also buy
              tickets at any station counter -- just bring your passport.
            </p>
          </div>
          <div className="space-y-4">
            {bookingSteps.map((s) => (
              <div key={s.step} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                    <s.icon className="w-4 h-4 text-[var(--color-accent)]" />
                    {s.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SCENIC ROUTES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Window Seat Worthy
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Scenic Train Routes in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco&apos;s trains pass through landscapes that range from Atlantic coastline to mountain
              gorges. These are the stretches where you should put your phone down and look out the window.
            </p>
          </div>
          <div className="space-y-6">
            {scenicHighlights.map((scene) => (
              <div key={scene.route} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <Mountain className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                      {scene.route}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--color-secondary)] mb-2">{scene.highlight}</p>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{scene.description}</p>
                    <p className="text-xs text-[var(--text-muted)] flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" /> Best seat: {scene.bestSeat}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          STATION GUIDES
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Station by Station
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Major Station Guides
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect at each key station -- connections, amenities, and how to get from the platform to the city.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stations.map((station) => (
              <div key={station.name} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                  <Building className="w-4 h-4 text-[var(--color-secondary)]" />
                  {station.name}
                </h3>
                <p className="text-xs text-[var(--color-secondary)] font-semibold mb-1">{station.city}</p>
                <p className="text-xs text-[var(--text-muted)] mb-2 flex items-center gap-1">
                  <Navigation className="w-3 h-3" /> {station.amenities}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{station.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          PRACTICAL TIPS
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Essential Train Travel Tips
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Practical details that make the difference between a smooth ride and a stressful one.
            </p>
          </div>
          <div className="space-y-4">
            {practicalTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
                <div className="flex items-start gap-3">
                  <tip.icon className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">{tip.title}</h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{tip.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Common Questions
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Morocco Train Travel FAQ
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Answers to the questions travelers ask most about riding ONCF trains in Morocco.
            </p>
          </div>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3 flex items-start gap-3">
                  <MessageCircleQuestion className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed ml-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED GUIDES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Transport Guides
            </h2>
            <p className="text-[var(--text-secondary)]">
              Continue planning your Morocco transport with these companion guides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedGuides.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="card-moroccan p-5 group hover:shadow-lg transition-shadow duration-300"
              >
                <BookOpen className="w-5 h-5 text-[var(--color-accent)] mb-3" />
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2 text-sm">
                  {link.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mb-3 leading-relaxed">{link.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                  Read Guide <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--color-primary)] text-white">
        <div className="container-morocco text-center max-w-3xl">
          <TrainFront className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold mb-6">
            Ready to Ride Morocco&apos;s Rails?
          </h2>
          <p className="text-lg text-white/80 mb-8 leading-relaxed">
            From the Al Boraq blasting through the Gharb at 320 km/h to a slow conventional run through
            the Taza mountain corridor, Morocco&apos;s trains offer some of the best-value rail travel
            in Africa. Book your tickets on oncf.ma, grab a window seat, and watch the landscape unfold.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-train-travel"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[var(--color-accent)] text-white font-semibold rounded-lg hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              Full Train Travel Guide <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              All Transport Options <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

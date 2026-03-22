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
  Mountain,
  Sun,
  Compass,
  Calendar,
  Car,
  Navigation,
  Bus,
  Plane,
  Map,
  Fuel,
  Luggage,
  ThumbsUp,
  Coffee,
  CreditCard,
  Globe,
  Heart,
  Timer,
  BadgeCheck,
  Camera,
  Ship,
  Route,
  Eye,
  Anchor,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Tangier to Chefchaouen 2026 | Bus, Taxi & Transport Guide',
  description:
    'Complete guide to getting from Tangier to Chefchaouen in 2026. Compare CTM bus (from 50 MAD, 3 hours), grand taxi (from 45 MAD, 2 hours), private transfer, and driving options. No direct train. Tips for arriving from Tangier port and airport.',
  keywords: [
    'tangier to chefchaouen',
    'tangier to chefchaouen bus',
    'how to get from tangier to chefchaouen',
    'tangier chefchaouen transport',
    'tangier to chefchaouen taxi',
    'tangier to chefchaouen grand taxi',
    'CTM bus tangier chefchaouen',
    'tangier to chefchaouen private transfer',
    'tangier to chefchaouen drive',
    'tangier chefchaouen distance',
    'tangier port to chefchaouen',
    'tangier airport to chefchaouen',
    'tangier to blue city',
    'tangier to chefchaouen route',
    'tangier chefchaouen travel time',
    'Morocco transport 2026',
    'tanger med to chefchaouen',
    'chefchaouen from tangier',
  ],
  openGraph: {
    title: 'Tangier to Chefchaouen 2026 | Bus, Taxi & Transport Guide',
    description:
      'Every way to travel from Tangier to Chefchaouen compared: CTM bus from 50 MAD, grand taxis from 45 MAD, private transfers, and driving through the Rif Mountains.',
    url: `${BASE_URL}/tangier-to-chefchaouen`,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue-painted medina of Chefchaouen nestled in the Rif Mountains with lush green hills behind',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tangier to Chefchaouen 2026 | Complete Transport Guide',
    description:
      'CTM bus from 50 MAD, grand taxis from 45 MAD, private transfers from 600 MAD, and driving routes. Getting from Tangier to the Blue City made easy.',
    images: [`${BASE_URL}/images/hero-chefchaouen.webp`],
  },
  alternates: { canonical: `${BASE_URL}/tangier-to-chefchaouen` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/tangier-to-chefchaouen`,
  name: 'Tangier to Chefchaouen 2026 | Bus, Taxi & Transport Guide',
  description:
    'Complete guide to getting from Tangier to Chefchaouen. Compare CTM buses, grand taxis, private transfers, and driving through the scenic Rif Mountains.',
  url: `${BASE_URL}/tangier-to-chefchaouen`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/tangier-to-chefchaouen`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Transport', item: `${BASE_URL}/transport` },
      { '@type': 'ListItem', position: 3, name: 'Tangier to Chefchaouen', item: `${BASE_URL}/tangier-to-chefchaouen` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is there a train from Tangier to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'No, there is no train from Tangier to Chefchaouen. Chefchaouen does not have a railway station. You need to take a bus, grand taxi, private transfer, or drive. The CTM bus and grand taxi are the most popular options, both departing from Tangier city center.' } },
    { '@type': 'Question', name: 'How long does it take to get from Tangier to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'By CTM bus, the journey takes approximately 3 hours. Grand taxis take about 2 hours. Driving takes approximately 2 hours via the N2 road. Private transfers also take about 2 hours. The route is 115 km and passes through the Rif Mountains with some winding mountain roads.' } },
    { '@type': 'Question', name: 'How do I get from Tangier port to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'From Tangier Ville port (ferry terminal), take a petit taxi to the CTM bus station (from 15-20 MAD) or the grand taxi stand. From Tanger Med port (larger port, 50 km east), you can take a shuttle bus to Tangier city or arrange a private transfer directly to Chefchaouen (from 800-1,200 MAD). Some tour companies offer direct transfers from Tanger Med to Chefchaouen.' } },
    { '@type': 'Question', name: 'How much does a grand taxi from Tangier to Chefchaouen cost?', acceptedAnswer: { '@type': 'Answer', text: 'A shared grand taxi from Tangier to Chefchaouen costs from 45-60 MAD per person. Taxis depart from the grand taxi stand near the main bus station in Tangier and leave when they have 6 passengers. You can also buy extra seats for more comfort or hire the entire taxi for from 300-400 MAD.' } },
    { '@type': 'Question', name: 'Can I do Tangier to Chefchaouen as a day trip?', acceptedAnswer: { '@type': 'Answer', text: 'A day trip is possible but very tight with only about 4-5 hours in Chefchaouen after transit. With a private driver (from 600-1,000 MAD), you leave Tangier early morning, spend the midday hours exploring the Blue City, and return by evening. However, staying overnight is strongly recommended to fully appreciate Chefchaouen, especially its magical early morning and late afternoon light.' } },
    { '@type': 'Question', name: 'What is the best way to get from Tangier airport to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'From Tangier Ibn Battouta Airport, the easiest option is a private transfer directly to Chefchaouen (from 700-1,000 MAD, approximately 2 hours). Alternatively, take a taxi or bus to Tangier city center (from 150 MAD or 30 MAD by airport bus) and then catch a CTM bus or grand taxi to Chefchaouen. There is no direct public transport from the airport to Chefchaouen.' } },
  ],
};

/* ===============================================================
   DATA: TRANSPORT OPTIONS
   =============================================================== */

const transportOptions = [
  {
    name: 'CTM Bus',
    icon: Bus,
    duration: '3 hours',
    price: 'From 50 MAD',
    frequency: '2-3 daily departures',
    comfort: 'Good',
    bestFor: 'Budget travelers, solo travelers',
    description:
      'The CTM bus is the most reliable public transport option from Tangier to Chefchaouen. CTM operates 2-3 daily departures from the Tangier CTM bus station. The modern, air-conditioned coaches are comfortable and well-maintained. The 3-hour journey follows the N2 road southeast through Tetouan province before climbing into the Rif Mountains for the final approach to Chefchaouen. The mountain scenery on the second half of the journey is beautiful, with views over terraced hillsides, olive groves, and pine forests. Buses arrive at the Chefchaouen bus station, about a 15-minute walk from the medina.',
    bookingTip:
      'Book online at ctm.ma at least one day in advance, especially during summer (June-September) when Chefchaouen is very popular. The morning departure fills first. Arrive at the CTM station 30 minutes before departure. If you are coming off a ferry at Tangier Ville port, take a petit taxi to the bus station (from 15-20 MAD, 10 minutes). Keep your luggage manageable as it goes in the bus hold. Have your booking confirmation ready.',
    stops: 'Tangier CTM Station - Tetouan (some services) - Chefchaouen Bus Station',
  },
  {
    name: 'Grand Taxi',
    icon: Car,
    duration: '2 hours',
    price: 'From 45-60 MAD per person',
    frequency: 'Depart when full (6 passengers)',
    comfort: 'Basic',
    bestFor: 'Faster travel, flexible timing',
    description:
      'Grand taxis are the fastest public transport option from Tangier to Chefchaouen, taking approximately 2 hours for the 115 km journey. Shared Mercedes sedans depart from the grand taxi stand near the main bus station in Tangier. Each taxi takes 6 passengers (3 in back, 2 in middle, 1 beside driver) and leaves when full. The route is more direct than the bus and the experienced drivers navigate the Rif Mountain roads confidently. This is a popular route so taxis fill up relatively quickly, especially in the morning. The ride offers an authentic local transport experience and the mountain scenery is exceptional.',
    bookingTip:
      'Head to the grand taxi stand in the morning (8:00-10:00 AM) for the fastest departure. State your destination clearly: "Chefchaouen." The price per seat is fixed by route - confirm before boarding but do not expect to negotiate much on shared taxis. To avoid being squeezed 3-across in the back, pay for 2 seats (from 90-120 MAD) or sit in front. For a group of 4-6, hire the whole taxi (from 300-400 MAD). Grand taxis are cash only.',
    stops: 'Direct from Tangier to Chefchaouen',
  },
  {
    name: 'Private Transfer',
    icon: Navigation,
    duration: '2 hours',
    price: 'From 600-1,000 MAD (entire vehicle)',
    frequency: 'On demand',
    comfort: 'Excellent',
    bestFor: 'Families, groups, ferry arrivals, comfort seekers',
    description:
      'A private transfer provides the most comfortable and convenient door-to-door service from Tangier to Chefchaouen. A professional driver in a modern, air-conditioned vehicle picks you up from your hotel, the port, or the airport and drives you directly to your riad in Chefchaouen. The journey takes about 2 hours with the option to stop at scenic viewpoints in the Rif Mountains along the way. This is particularly convenient for travelers arriving by ferry at Tangier Ville or Tanger Med port, as the driver can meet you directly at arrivals. For groups of 3-4, the per-person cost is very competitive with buses.',
    bookingTip:
      'Book through your riad in Tangier or Chefchaouen, reputable transfer companies, or through GetYourGuide. For ferry arrivals, provide your ferry details so the driver can time the pickup. For airport arrivals, drivers will wait at the arrivals area with a name sign. Confirm total price including fuel upfront. Request photo stops in the Rif Mountains. Transfers from Tanger Med port cost more (from 800-1,200 MAD) due to the extra distance.',
    stops: 'Door-to-door, optional scenic stops in the Rif Mountains',
  },
  {
    name: 'Rental Car / Self-Drive',
    icon: Car,
    duration: '2 hours',
    price: 'From 250 MAD/day + fuel',
    frequency: 'Flexible',
    comfort: 'Depends on vehicle',
    bestFor: 'Independent travelers, onward exploration of the Rif',
    description:
      'Driving from Tangier to Chefchaouen is a rewarding experience through some of northern Morocco\'s most scenic landscapes. The 115 km route follows the N2 road, which is paved and well-maintained throughout. You climb steadily from the coastal lowlands into the Rif Mountains, passing through eucalyptus forests, agricultural valleys, and traditional Rif villages. The road has some winding sections in the mountains but is less challenging than the Fes-Chefchaouen route. Having a car gives you the freedom to stop at viewpoints, visit small mountain villages, and continue from Chefchaouen to Fes, Tetouan, or other northern destinations.',
    bookingTip:
      'Rent a car in Tangier from agencies at the airport or in the city center. Choose a vehicle with decent power for mountain roads. Fill up in Tangier before departing as mountain fuel stations are sparse. Download offline maps. The drive is well-signposted but a GPS helps for the final approach into Chefchaouen. Parking is available near the medina walls (from 10-20 MAD per day). Do not drive in the mountains after dark if you are unfamiliar with the roads.',
    stops: 'Self-paced: Tangier - Rif Mountain viewpoints - Chefchaouen',
  },
] as const;

/* ===============================================================
   DATA: PORT & AIRPORT CONNECTIONS
   =============================================================== */

const portConnections = [
  {
    name: 'From Tangier Ville Port (Ferry Terminal)',
    icon: Ship,
    description:
      'Tangier Ville port handles ferries from Tarifa, Spain (35-60 minutes crossing). After disembarking and clearing customs, exit the port building and walk or take a petit taxi (from 15-20 MAD) to the nearby CTM bus station or grand taxi stand. The port is in central Tangier, so connections are quick and easy. If your ferry arrives late, stay overnight in Tangier and depart the next morning.',
    tips: [
      'Walk from port to CTM station: 10-15 minutes',
      'Petit taxi to bus/taxi stand: from 15-20 MAD',
      'Last CTM bus to Chefchaouen usually departs mid-afternoon',
      'Grand taxis available until late afternoon',
      'Consider an overnight in Tangier if arriving on a late ferry',
    ],
  },
  {
    name: 'From Tanger Med Port',
    icon: Anchor,
    description:
      'Tanger Med is the larger commercial port located about 50 km east of Tangier city. Most car ferries from Spain (Algeciras, Barcelona) use this port. Getting from Tanger Med to Chefchaouen is less convenient than from Tangier Ville. You can take a shuttle bus to Tangier city (from 20-30 MAD, 1 hour) and then catch onward transport. Alternatively, book a private transfer directly from Tanger Med to Chefchaouen (from 800-1,200 MAD, approximately 2.5 hours). Some tour operators and transfer companies specialize in this route.',
    tips: [
      'Shuttle bus from Tanger Med to Tangier city: from 20-30 MAD',
      'Direct private transfer to Chefchaouen: from 800-1,200 MAD',
      'Grand taxis available outside Tanger Med for Tangier city',
      'With a rental car from Spain, you can drive directly to Chefchaouen (2.5 hours)',
      'Book transfers in advance as options at the port are limited',
    ],
  },
  {
    name: 'From Tangier Ibn Battouta Airport',
    icon: Plane,
    description:
      'Tangier Ibn Battouta Airport (TNG) is located about 15 km southwest of the city center. There is no direct public transport from the airport to Chefchaouen. The easiest option is a pre-arranged private transfer directly to Chefchaouen (from 700-1,000 MAD, approximately 2 hours). Alternatively, take a taxi (from 150 MAD) or airport bus (from 30 MAD) to Tangier city center, then catch a CTM bus or grand taxi to Chefchaouen. If arriving late, stay overnight in Tangier and travel to Chefchaouen the next morning.',
    tips: [
      'No direct public transport from airport to Chefchaouen',
      'Private transfer from airport: from 700-1,000 MAD direct to Chefchaouen',
      'Airport taxi to Tangier center: from 150 MAD',
      'Airport bus to city center: from 30 MAD (limited schedule)',
      'Arrange transfers before arrival for peace of mind',
    ],
  },
];

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { option: 'CTM Bus', time: '3 hours', price: 'From 50 MAD', comfort: 4, reliability: 4 },
  { option: 'Grand Taxi', time: '2 hours', price: 'From 45 MAD/person', comfort: 2, reliability: 3 },
  { option: 'Private Transfer', time: '2 hours', price: 'From 600 MAD', comfort: 5, reliability: 5 },
  { option: 'Rental Car', time: '2 hours', price: 'From 250 MAD/day', comfort: 4, reliability: 4 },
] as const;

/* ===============================================================
   DATA: TRAVELER RECOMMENDATIONS
   =============================================================== */

const travelerRecommendations = [
  {
    type: 'Budget Backpackers',
    icon: Luggage,
    recommendation: 'Grand Taxi',
    reason: 'At from 45-60 MAD per person and only 2 hours, the grand taxi is fast and affordable. If you want more comfort and a fixed schedule, the CTM bus at from 50 MAD is nearly the same price with air conditioning and assigned seating. Both are excellent budget options for this short route.',
  },
  {
    type: 'Ferry Arrivals from Spain',
    icon: Ship,
    recommendation: 'Private Transfer or Grand Taxi',
    reason: 'If arriving by ferry at Tangier Ville, a grand taxi is the quickest onward option to Chefchaouen. From Tanger Med port, a private transfer is more practical as public transport connections are limited. Book your transfer in advance if arriving at Tanger Med to avoid waiting at the port.',
  },
  {
    type: 'Families with Children',
    icon: Users,
    recommendation: 'Private Transfer',
    reason: 'A private transfer (from 600 MAD for the vehicle) is easiest with children. The driver handles the mountain roads, you can stop for breaks, and you are delivered directly to your riad. For a family of 4, that is only 150 MAD per person - excellent value for door-to-door comfort.',
  },
  {
    type: 'Photography Enthusiasts',
    icon: Camera,
    recommendation: 'Rental Car or Private Transfer',
    reason: 'The Rif Mountain scenery between Tangier and Chefchaouen is stunning. With a rental car, you can stop freely at viewpoints, in small mountain villages, and along the forested hillsides. A private transfer driver will also accommodate photo stops if you ask in advance.',
  },
  {
    type: 'Solo Travelers',
    icon: ShieldCheck,
    recommendation: 'CTM Bus',
    reason: 'The CTM bus is the safest and most comfortable option for solo travelers. You get a fixed schedule, assigned seating, air conditioning, and arrive at a known location. The from 50 MAD fare is excellent value. Grand taxis are also fine but the seating arrangement is tight.',
  },
] as const;

/* ===============================================================
   DATA: PRO TIPS
   =============================================================== */

const proTips = [
  {
    icon: Timer,
    title: 'Timing Your Journey',
    tip: 'If arriving by ferry from Spain, try to catch a morning ferry to arrive in Tangier by midday. This gives you time to catch an afternoon bus or taxi to Chefchaouen. Late ferry arrivals should plan to overnight in Tangier. The last reliable transport to Chefchaouen departs around 3:00-4:00 PM.',
  },
  {
    icon: Eye,
    title: 'Mountain Road Awareness',
    tip: 'The road climbs significantly in the final stretch to Chefchaouen. Motion-prone travelers should take medication before departure. Sit in the front of the taxi or bus for a smoother ride. The winding roads can be challenging but are well-paved and safe with experienced drivers.',
  },
  {
    icon: Sun,
    title: 'Weather & Altitude',
    tip: 'Chefchaouen is at 600m elevation and noticeably cooler than coastal Tangier. Even in summer, evenings can be fresh. Pack layers. In winter, temperatures drop significantly and rain or fog in the mountains is common. The mountain roads can be slippery in wet conditions.',
  },
  {
    icon: Coffee,
    title: 'Arriving in Chefchaouen',
    tip: 'Both buses and grand taxis arrive outside the medina. From the bus station, walk 15 minutes downhill to the medina or take a petit taxi (from 10-15 MAD). The main medina gate is Bab el-Ain. Most riads can arrange a porter to meet you at the gate and help carry luggage through the car-free streets.',
  },
  {
    icon: CreditCard,
    title: 'Cash Preparation',
    tip: 'Withdraw MAD in Tangier before departing. The port area, airport, and city center have ATMs and exchange offices. Grand taxis are cash only. CTM accepts cards online but not always at the station counter. Chefchaouen has ATMs but they can run dry during peak tourist season.',
  },
  {
    icon: Globe,
    title: 'Onward from Chefchaouen',
    tip: 'After enjoying Chefchaouen, common onward routes include Chefchaouen to Fes (4 hours by bus), Chefchaouen to Tetouan (1 hour by taxi), and returning to Tangier. Plan your exit transport in advance, especially during peak season, as the small town has limited departures.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'Chefchaouen City Guide', href: '/chefchaouen', description: 'Complete guide to Morocco\'s famous Blue City' },
  { title: 'Tangier Travel Guide', href: '/tangier', description: 'Everything to see, do, and eat in Tangier' },
  { title: 'Fes to Chefchaouen', href: '/fes-to-chefchaouen', description: 'All transport options from Fes to the Blue City' },
  { title: 'Things to Do in Tangier', href: '/things-to-do-tangier', description: 'Top attractions and activities in Tangier' },
  { title: 'Morocco Transport Guide', href: '/transport', description: 'Overview of all transport options across Morocco' },
  { title: 'Budget Travel Morocco', href: '/budget-travel', description: 'Tips for budget-friendly Morocco travel' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function TangierToChefchaouenPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <div className="hero-overlay absolute inset-0 z-10" />
        <img
          src="/images/hero-chefchaouen.webp"
          alt="Blue city of Chefchaouen in the Rif Mountains reached from Tangier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 text-white/90 text-sm mb-4 font-[family-name:var(--font-heading)]">
            <Bus className="w-5 h-5" />
            <span>Morocco Transport Guide</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white max-w-4xl leading-tight drop-shadow-lg">
            Tangier to Chefchaouen
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl font-[family-name:var(--font-heading)]">
            115 km | No direct train | Gateway to the Blue City for 2026
          </p>
        </div>
      </section>

      {/* ── BREADCRUMBS ── */}
      <div className="bg-white border-b border-[#A0522D]/10">
        <div className="container-morocco py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500 font-[family-name:var(--font-heading)]">
            <Link href="/" className="hover:text-[#A0522D] transition flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/transport" className="hover:text-[#A0522D] transition">Transport</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#A0522D]">Tangier to Chefchaouen</span>
          </nav>
        </div>
      </div>

      {/* ── INTRO ── */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-[#A0522D]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-gray-900">
              Getting from Tangier to Chefchaouen
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
            <p>
              Tangier is the main gateway for travelers arriving in Morocco from Europe by ferry, and Chefchaouen
              is often the first inland destination they head for. The famous Blue City sits just 115 km southeast
              of Tangier in the Rif Mountains, making it an easy half-day journey by bus, taxi, or car. Despite
              the relatively short distance, the landscape changes dramatically from the flat coastal plains around
              Tangier to the forested mountain slopes of the Rif.
            </p>
            <p>
              There is no train to Chefchaouen, as the mountain town has no railway connection. Instead, travelers
              choose between CTM buses, shared grand taxis, private transfers, or self-driving. The route is
              straightforward and well-traveled, making it easy even for first-time visitors to Morocco. This
              guide covers every option with current 2026 prices and specific advice for travelers arriving
              at Tangier port or airport.
            </p>
            <p>
              Whether you are stepping off a ferry from Spain, landing at Tangier Ibn Battouta Airport, or
              spending time in Tangier first, getting to the Blue City is simpler than you might think.
            </p>
          </div>

          {/* No Train Warning */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 font-[family-name:var(--font-heading)]">No Direct Train Available</p>
              <p className="text-amber-700 text-sm font-[family-name:var(--font-heading)]">
                Chefchaouen has no railway station. There is no train service to the Blue City from any
                Moroccan city. You must take a bus, taxi, private transfer, or drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUICK COMPARISON ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
              <Compass className="w-5 h-5 text-[#C4960C]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Quick Comparison</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse font-[family-name:var(--font-heading)]">
              <thead>
                <tr className="border-b-2 border-[#A0522D]/20">
                  <th className="py-3 px-4 text-[#A0522D] font-semibold">Option</th>
                  <th className="py-3 px-4 text-[#A0522D] font-semibold">Time</th>
                  <th className="py-3 px-4 text-[#A0522D] font-semibold">Price</th>
                  <th className="py-3 px-4 text-[#A0522D] font-semibold">Comfort</th>
                  <th className="py-3 px-4 text-[#A0522D] font-semibold">Reliability</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.option} className="border-b border-gray-100 hover:bg-[#FAF8F5] transition">
                    <td className="py-3 px-4 font-medium text-gray-900">{row.option}</td>
                    <td className="py-3 px-4 text-gray-600">{row.time}</td>
                    <td className="py-3 px-4 text-gray-600">{row.price}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < row.comfort ? 'text-[#C4960C] fill-[#C4960C]' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < row.reliability ? 'text-[#A0522D] fill-[#A0522D]' : 'text-gray-200'}`} />
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── DETAILED TRANSPORT OPTIONS ── */}
      <section className="container-morocco py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
            <Map className="w-5 h-5 text-[#A0522D]" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">All Transport Options in Detail</h2>
        </div>
        <div className="space-y-8">
          {transportOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div key={option.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[family-name:var(--font-display)] text-xl text-gray-900 mb-1">{option.name}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-[family-name:var(--font-heading)]">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {option.duration}</span>
                      <span className="flex items-center gap-1"><DollarSign className="w-4 h-4" /> {option.price}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {option.frequency}</span>
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-4">{option.description}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-[family-name:var(--font-heading)]">
                      <MapPin className="w-4 h-4 text-[#A0522D]" />
                      <span><strong>Stops:</strong> {option.stops}</span>
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <BadgeCheck className="w-5 h-5 text-[#C4960C]" />
                      <span className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">Booking Tip</span>
                    </div>
                    <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed">{option.bookingTip}</p>
                    <div className="mt-3 flex items-center gap-4 text-xs text-gray-500 font-[family-name:var(--font-heading)]">
                      <span className="flex items-center gap-1"><ThumbsUp className="w-3.5 h-3.5" /> Best for: {option.bestFor}</span>
                      <span className="flex items-center gap-1"><Star className="w-3.5 h-3.5" /> Comfort: {option.comfort}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PORT & AIRPORT CONNECTIONS ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                <Ship className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">From Tangier Port & Airport</h2>
            </div>
            <div className="space-y-6">
              {portConnections.map((connection) => {
                const Icon = connection.icon;
                return (
                  <div key={connection.name} className="card-moroccan p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-6 h-6 text-[#A0522D]" />
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">{connection.name}</h3>
                    </div>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-4">{connection.description}</p>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {connection.tips.map((tip) => (
                        <div key={tip} className="flex items-start gap-2 bg-[#FAF8F5] rounded-lg p-2.5">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-gray-700 font-[family-name:var(--font-heading)]">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRAVELER RECOMMENDATIONS ── */}
      <section className="container-morocco py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
            <Users className="w-5 h-5 text-[#C4960C]" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Which Option Is Best for You?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {travelerRecommendations.map((rec) => {
            const Icon = rec.icon;
            return (
              <div key={rec.type} className="card-moroccan p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">{rec.type}</h3>
                </div>
                <div className="bg-[#C4960C]/5 rounded-lg px-3 py-1.5 mb-3 inline-block">
                  <span className="text-sm font-semibold text-[#C4960C] font-[family-name:var(--font-heading)]">
                    {rec.recommendation}
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed">{rec.reason}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── PRO TIPS ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
              <Info className="w-5 h-5 text-[#A0522D]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Pro Tips for This Journey</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[#C4960C]" />
                    <h3 className="font-semibold text-gray-900 font-[family-name:var(--font-heading)]">{tip.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm font-[family-name:var(--font-heading)] leading-relaxed">{tip.tip}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DRIVING DETAILS ── */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
              <Fuel className="w-5 h-5 text-[#A0522D]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Driving Route Details</h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
            <p>
              The drive from Tangier to Chefchaouen follows the N2 road southeast. Leaving Tangier, you pass through
              the flat coastal hinterland before the road begins to climb into the western Rif Mountains. The scenery
              transitions from scrubland and farms to increasingly lush forests of pine, cork oak, and eucalyptus.
            </p>
            <p>
              <strong>Road conditions:</strong> The N2 is a well-maintained national road with good asphalt. The
              mountain section has tight curves and some steep gradients but is far less challenging than many Moroccan
              mountain passes. Drive carefully around bends, watch for slow-moving vehicles, and be aware of
              occasional pedestrians and livestock on the road.
            </p>
            <p>
              <strong>Fuel:</strong> Fill up in Tangier before departure. While there are fuel stations along the route,
              they are less frequent in the mountains. Budget approximately 100-150 MAD for fuel on this trip depending
              on your vehicle.
            </p>
            <p>
              <strong>Scenic stops:</strong> Several viewpoints along the mountain road offer panoramic views over the
              Rif valleys. The approach to Chefchaouen, where the blue town appears nestled beneath the twin horns of
              Jebel el-Kelaa, is one of the most memorable sights in Morocco. Pull over safely to enjoy and photograph it.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqJsonLd.mainEntity.map((faq) => (
                <div key={faq.name} className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 mb-2">{faq.name}</h3>
                  <p className="text-gray-600 font-[family-name:var(--font-heading)] leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="container-morocco py-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
            <Compass className="w-5 h-5 text-[#A0522D]" />
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Related Guides</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {relatedGuides.map((guide) => (
            <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:border-[#A0522D]/30 transition group">
              <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 group-hover:text-[#A0522D] transition mb-2">
                {guide.title}
              </h3>
              <p className="text-gray-500 text-sm font-[family-name:var(--font-heading)]">{guide.description}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[#A0522D] text-sm font-semibold font-[family-name:var(--font-heading)]">
                Read guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#A0522D] py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
            Discover the Blue City
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            Chefchaouen is one of Morocco&apos;s most magical destinations. Blue-painted streets, mountain
            tranquility, and Rif culture await your visit.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Chefchaouen
            </Link>
            <Link
              href="/tangier"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Tangier
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

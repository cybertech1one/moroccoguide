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
  Train,
  Bus,
  Plane,
  Map,
  Fuel,
  Luggage,
  Zap,
  ThumbsUp,
  Wifi,
  Coffee,
  CreditCard,
  Globe,
  Heart,
  Timer,
  BadgeCheck,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Casablanca to Marrakech 2026 | Train, Bus & Transport Guide',
  description:
    'Complete guide to getting from Casablanca to Marrakech in 2026. Compare Al Boraq high-speed train (2h10, from 149 MAD), regular train (3h25, from 100 MAD), CTM bus (from 80 MAD), grand taxi, and private transfer options with prices.',
  keywords: [
    'casablanca to marrakech',
    'casablanca to marrakech train',
    'casablanca to marrakech bus',
    'how to get from casablanca to marrakech',
    'casablanca marrakech transport',
    'Al Boraq train Morocco',
    'ONCF Morocco train',
    'casablanca marrakech distance',
    'casablanca to marrakech taxi',
    'CTM bus casablanca marrakech',
    'Supratours casablanca marrakech',
    'casablanca airport to marrakech',
    'Mohammed V airport to marrakech',
    'casablanca to marrakech private transfer',
    'casablanca to marrakech drive',
    'Morocco train travel 2026',
    'casablanca marrakech travel time',
    'casablanca marrakech price',
  ],
  openGraph: {
    title: 'Casablanca to Marrakech 2026 | Train, Bus & Transport Guide',
    description:
      'Every way to travel from Casablanca to Marrakech compared: Al Boraq high-speed train from 149 MAD, regular trains from 100 MAD, CTM buses from 80 MAD, grand taxis, private transfers, and driving. Prices and practical tips.',
    url: `${BASE_URL}/casablanca-to-marrakech`,
    images: [
      {
        url: `${BASE_URL}/images/hero-casablanca.webp`,
        width: 1200,
        height: 630,
        alt: 'Train traveling through Moroccan landscape between Casablanca and Marrakech with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casablanca to Marrakech 2026 | Complete Transport Guide',
    description:
      'Al Boraq high-speed train from 149 MAD, regular trains from 100 MAD, buses from 80 MAD, grand taxis, and private transfers. Complete guide with prices.',
    images: [`${BASE_URL}/images/hero-casablanca.webp`],
  },
  alternates: { canonical: `${BASE_URL}/casablanca-to-marrakech` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/casablanca-to-marrakech`,
  name: 'Casablanca to Marrakech 2026 | Train, Bus & Transport Guide',
  description:
    'Complete guide to getting from Casablanca to Marrakech. Compare all transport options including Al Boraq high-speed train, regular ONCF trains, CTM/Supratours buses, grand taxis, private transfers, and driving.',
  url: `${BASE_URL}/casablanca-to-marrakech`,
  image: `${BASE_URL}/images/hero-casablanca.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/casablanca-to-marrakech`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Transport', item: `${BASE_URL}/transport` },
      { '@type': 'ListItem', position: 3, name: 'Casablanca to Marrakech', item: `${BASE_URL}/casablanca-to-marrakech` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What is the fastest way to get from Casablanca to Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'The Al Boraq high-speed train is the fastest option at approximately 2 hours 10 minutes from Casa Voyageurs to Marrakech. Regular ONCF trains take about 3 hours 25 minutes. Driving takes approximately 2 hours 30 minutes via the A7 motorway.' } },
    { '@type': 'Question', name: 'How much does the train from Casablanca to Marrakech cost?', acceptedAnswer: { '@type': 'Answer', text: 'Regular ONCF train tickets start from 100 MAD for 2nd class and from 150 MAD for 1st class. The Al Boraq high-speed train costs from 149 MAD for economy class and from 249 MAD for 1st class. Prices may vary seasonally. Book at oncf.ma or at the station.' } },
    { '@type': 'Question', name: 'Can I take a direct train from Mohammed V Airport to Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'There is a train station at Mohammed V Airport (CMN) with direct connections to Casa Voyageurs, where you can transfer to a Marrakech-bound train. The airport-to-Casa Voyageurs leg takes about 30 minutes, and trains run frequently throughout the day. The total journey time is approximately 4 hours including the transfer.' } },
    { '@type': 'Question', name: 'How often do buses run from Casablanca to Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'CTM operates multiple daily departures from the Ouled Ziane bus station, with buses roughly every 1-2 hours from early morning to late evening. Supratours also has several daily services. The journey takes about 3 hours 30 minutes and costs from 80 MAD (CTM) or from 85 MAD (Supratours).' } },
    { '@type': 'Question', name: 'Is it safe to take a grand taxi from Casablanca to Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'Grand taxis are a common local transport option and generally safe. They depart from designated stations when full (6 passengers in a Mercedes sedan). The ride takes about 3 hours and costs from 80-100 MAD per person. For more comfort, you can buy extra seats. The driving style can be aggressive, so it is not recommended for nervous travelers.' } },
    { '@type': 'Question', name: 'What is the distance between Casablanca and Marrakech?', acceptedAnswer: { '@type': 'Answer', text: 'The distance between Casablanca and Marrakech is approximately 240 km by road via the A7 motorway. The drive takes about 2 hours 30 minutes in normal traffic conditions. Toll costs are approximately 100 MAD for the full journey.' } },
  ],
};

/* ===============================================================
   DATA: TRANSPORT OPTIONS
   =============================================================== */

const transportOptions = [
  {
    name: 'Al Boraq High-Speed Train',
    icon: Zap,
    duration: '2h 10min',
    price: 'From 149 MAD (economy) / From 249 MAD (1st class)',
    frequency: '5-7 daily departures',
    comfort: 'Excellent',
    bestFor: 'Speed and comfort seekers',
    description:
      'Africa\'s first high-speed train connects Casablanca to Marrakech via Rabat and Kenitra. Launched to great fanfare, the Al Boraq service cuts travel time significantly compared to the regular train. Trains depart from Casa Voyageurs station in central Casablanca and arrive at Marrakech Railway Station, a short taxi ride from the medina. The modern carriages feature air conditioning, comfortable seating, power outlets, and onboard service. Economy class offers generous legroom comparable to European high-speed trains, while 1st class adds wider seats and complimentary refreshments.',
    bookingTip:
      'Book online at oncf.ma up to 30 days in advance for the best fares. A limited number of discount tickets are available on each departure. Arrive at least 20 minutes before departure as the Al Boraq has assigned seating and punctual departures. During Ramadan, Eid, and summer holidays, book several days ahead as services fill quickly.',
    stops: 'Casa Voyageurs - Rabat Agdal (some services) - Marrakech',
  },
  {
    name: 'Regular ONCF Train',
    icon: Train,
    duration: '3h 25min',
    price: 'From 100 MAD (2nd class) / From 150 MAD (1st class)',
    frequency: '8-10 daily departures',
    comfort: 'Good',
    bestFor: 'Budget travelers and flexible schedules',
    description:
      'The regular ONCF intercity train remains the most popular way to travel between Casablanca and Marrakech. Trains depart frequently from Casa Voyageurs station throughout the day, from early morning until late evening. Second class is perfectly comfortable with padded seats and air conditioning, while 1st class offers slightly wider seats and is usually less crowded. The journey passes through the agricultural plains of the Chaouia and Haouz regions, offering glimpses of rural Morocco. As you approach Marrakech, the Atlas Mountains become visible on the horizon.',
    bookingTip:
      'Tickets can be purchased at the station on the day of travel, but during peak periods (Friday evenings, Sunday evenings, holidays), buying in advance online or at the station counter earlier in the day is recommended. Second class is fine for this relatively short journey. Keep your ticket until you exit at Marrakech as inspectors check at arrival.',
    stops: 'Casa Voyageurs - Settat - Benguerir - Marrakech',
  },
  {
    name: 'CTM Bus',
    icon: Bus,
    duration: '3h 30min',
    price: 'From 80 MAD',
    frequency: 'Multiple daily departures',
    comfort: 'Good',
    bestFor: 'Budget travelers',
    description:
      'CTM (Compagnie de Transports au Maroc) is Morocco\'s national bus operator and offers reliable, comfortable service between Casablanca and Marrakech. Buses depart from the Ouled Ziane CTM bus station in Casablanca and arrive at the CTM station in Marrakech near the main train station. All CTM coaches are modern, air-conditioned, and equipped with reclining seats. A short comfort break is included at a midway rest stop. CTM buses are known for being punctual and well-maintained, making them a solid budget option for this route.',
    bookingTip:
      'Book online at ctm.ma or at the station counter. CTM buses have assigned seating and limited luggage allowance (one large bag in the hold plus one carry-on). Arrive 30 minutes before departure. The Ouled Ziane station is a taxi ride from central Casablanca, so factor in travel time. Avoid the cheapest non-CTM bus companies for this route as comfort and reliability vary widely.',
    stops: 'Casablanca Ouled Ziane - Rest stop - Marrakech CTM Station',
  },
  {
    name: 'Supratours Bus',
    icon: Bus,
    duration: '3h 30min',
    price: 'From 85 MAD',
    frequency: 'Several daily departures',
    comfort: 'Good',
    bestFor: 'Train station convenience',
    description:
      'Supratours is the bus division of ONCF (the national railway company) and operates from bus stations adjacent to major train stations, making connections convenient. The Casablanca Supratours terminal is at Casa Voyageurs train station, and in Marrakech it is next to the railway station. Coaches are modern and air-conditioned with comfortable seating. The service quality is comparable to CTM, and some travelers prefer Supratours for the convenience of its station locations. The journey follows the A7 motorway through flat agricultural lands.',
    bookingTip:
      'Tickets can be purchased at the Supratours counter at the train station or online through the ONCF website. Supratours is a good option if you are already at or near the train station. During peak travel times, book in advance. The slightly higher price compared to CTM reflects the convenient station locations.',
    stops: 'Casa Voyageurs (Supratours terminal) - Marrakech (next to train station)',
  },
  {
    name: 'Grand Taxi',
    icon: Car,
    duration: '3h',
    price: 'From 80-100 MAD per person',
    frequency: 'Depart when full (6 passengers)',
    comfort: 'Basic',
    bestFor: 'Adventurous travelers, local experience',
    description:
      'Grand taxis are large shared Mercedes sedans that operate on fixed routes between cities across Morocco. For the Casablanca-to-Marrakech route, they depart from a designated grand taxi stand near Ouled Ziane bus station in Casablanca. Each taxi takes 6 passengers (3 in the back, 2 in the middle, 1 next to the driver) and leaves only when full. The ride is direct with no scheduled stops, and experienced drivers know the A7 motorway well. While not the most comfortable option, grand taxis offer an authentic Moroccan travel experience and door-to-door flexibility.',
    bookingTip:
      'Arrive at the taxi stand and state your destination. You will be directed to a taxi loading for Marrakech. If you want more space, buy 2 seats (from 160-200 MAD total) for one in front and one in back. Negotiate the price before departure. Keep your luggage manageable. Grand taxis do not have air conditioning in all vehicles, and driving can be fast. For nervous passengers, the train or bus is a better choice.',
    stops: 'Direct - no scheduled stops',
  },
  {
    name: 'Private Transfer',
    icon: Navigation,
    duration: '2h 30min',
    price: 'From 800-1,200 MAD (entire vehicle)',
    frequency: 'On demand',
    comfort: 'Excellent',
    bestFor: 'Families, groups, comfort seekers',
    description:
      'A private transfer offers the most comfortable and convenient door-to-door service between Casablanca and Marrakech. Professional drivers in modern, air-conditioned vehicles will pick you up from your hotel, riad, or the airport and deliver you directly to your accommodation in Marrakech. Many services offer Mercedes sedans, minivans for families, or luxury SUVs. The drive via the A7 motorway takes about 2 hours 30 minutes, and you can request stops along the way for photos or refreshments. This is the most expensive option but ideal for groups who can split the cost.',
    bookingTip:
      'Book through your hotel, a reputable transfer company, or platforms like GetYourGuide. Confirm the total price (including tolls, fuel, and any waiting time) before booking. For airport pickups from Mohammed V, the driver will meet you at arrivals. A transfer for 4 passengers works out to about 200-300 MAD per person, making it competitive with 1st class train tickets but with the added convenience of door-to-door service.',
    stops: 'Door-to-door, optional stops on request',
  },
  {
    name: 'Rental Car / Self-Drive',
    icon: Car,
    duration: '2h 30min',
    price: 'From 250 MAD/day + fuel + tolls',
    frequency: 'Flexible',
    comfort: 'Depends on vehicle',
    bestFor: 'Independent travelers, onward exploration',
    description:
      'Driving from Casablanca to Marrakech is straightforward via the A7 motorway (autoroute), one of the best highways in Africa. The road is well-maintained, clearly signposted, and mostly dual carriageway. Tolls total approximately 100 MAD for the full journey. Fuel costs roughly 80-100 MAD depending on your vehicle. The landscape along the way is flat agricultural plains with occasional small towns. As you approach Marrakech, the High Atlas Mountains provide a dramatic backdrop. Renting a car makes sense if you plan to explore beyond Marrakech (Essaouira, Atlas Mountains, Ouarzazate).',
    bookingTip:
      'Major rental companies (Hertz, Avis, Europcar, local companies) operate at Mohammed V Airport and in central Casablanca. Book in advance for the best rates, especially during peak seasons. An international driving permit is recommended though not always required. Be aware that Moroccan driving can be unpredictable, especially in urban areas. The motorway is safe, but local roads require more attention. Parking in Marrakech is available near the medina walls and at most hotels.',
    stops: 'Self-paced, toll booths at Settat and Benguerir exits',
  },
] as const;

/* ===============================================================
   DATA: AIRPORT CONNECTION
   =============================================================== */

const airportConnection = {
  title: 'From Mohammed V Airport (CMN) to Marrakech',
  icon: Plane,
  description:
    'Many travelers land at Casablanca Mohammed V Airport and need to reach Marrakech. The airport has its own train station (Aeroport Mohammed V) on the lower level, with direct trains to Casa Voyageurs every hour. From Casa Voyageurs, transfer to a Marrakech-bound train. The total journey takes approximately 4 hours including the transfer wait. Alternatively, book a private transfer directly from the airport to Marrakech (from 1,000-1,500 MAD, approximately 3 hours). Some travelers also fly directly to Marrakech Menara Airport, which has growing international connections.',
  tips: [
    'Train from airport to Casa Voyageurs: 30 minutes, from 70 MAD',
    'Trains run approximately every hour from 6:00 AM to 10:00 PM',
    'At Casa Voyageurs, follow signs to the main departure hall for Marrakech trains',
    'Allow at least 45 minutes for the transfer between trains',
    'Private airport transfer to Marrakech: from 1,000-1,500 MAD (3 hours direct)',
    'Consider flying directly to Marrakech Menara if available from your origin',
  ],
};

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { option: 'Al Boraq Train', time: '2h 10min', price: 'From 149 MAD', comfort: 5, reliability: 5 },
  { option: 'Regular Train', time: '3h 25min', price: 'From 100 MAD', comfort: 4, reliability: 5 },
  { option: 'CTM Bus', time: '3h 30min', price: 'From 80 MAD', comfort: 3, reliability: 4 },
  { option: 'Supratours', time: '3h 30min', price: 'From 85 MAD', comfort: 3, reliability: 4 },
  { option: 'Grand Taxi', time: '3h', price: 'From 80 MAD/person', comfort: 2, reliability: 3 },
  { option: 'Private Transfer', time: '2h 30min', price: 'From 800 MAD', comfort: 5, reliability: 5 },
  { option: 'Rental Car', time: '2h 30min', price: 'From 250 MAD/day', comfort: 4, reliability: 4 },
] as const;

/* ===============================================================
   DATA: TRAVELER RECOMMENDATIONS
   =============================================================== */

const travelerRecommendations = [
  {
    type: 'Budget Backpackers',
    icon: Luggage,
    recommendation: 'Regular ONCF Train (2nd class)',
    reason: 'At from 100 MAD, the regular train offers the best balance of price, comfort, and reliability. Second class is perfectly adequate for this 3.5-hour journey. CTM buses at from 80 MAD save a little but take the same time. The train station locations in both cities are more convenient than bus stations.',
  },
  {
    type: 'Families with Children',
    icon: Users,
    recommendation: 'Private Transfer or Al Boraq Train',
    reason: 'A private transfer (from 800 MAD for the vehicle) is easiest with small children and luggage, and the per-person cost for a family of 4 is very reasonable. Alternatively, the Al Boraq high-speed train is quick, comfortable, and children enjoy the speed. Avoid grand taxis with young children.',
  },
  {
    type: 'Solo Female Travelers',
    icon: ShieldCheck,
    recommendation: 'Al Boraq or Regular Train (1st class)',
    reason: 'Trains are the safest and most comfortable option for solo travelers. First class offers a quieter, less crowded carriage. The Al Boraq is modern and well-staffed. Avoid grand taxis where seating arrangements can be uncomfortable for solo women.',
  },
  {
    type: 'Couples & First-Timers',
    icon: Heart,
    recommendation: 'Al Boraq High-Speed Train',
    reason: 'The Al Boraq offers a memorable experience as Africa\'s first high-speed train. The comfort, speed, and scenery make it the best choice for couples and first-time visitors to Morocco. Book 1st class for a premium experience with complimentary refreshments.',
  },
  {
    type: 'Business Travelers',
    icon: CreditCard,
    recommendation: 'Al Boraq (1st class)',
    reason: 'With Wi-Fi, power outlets, comfortable seating, and a 2-hour journey time, the Al Boraq 1st class is perfect for business travelers. The punctual departures and central station locations make it reliable for scheduled meetings.',
  },
] as const;

/* ===============================================================
   DATA: PRO TIPS
   =============================================================== */

const proTips = [
  {
    icon: Timer,
    title: 'Best Time to Travel',
    tip: 'Early morning trains (7:00-8:00 AM) are less crowded and arrive in Marrakech with the full day ahead. Friday afternoon and Sunday evening trains are the busiest, as Moroccans commute between the two cities for the weekend.',
  },
  {
    icon: CreditCard,
    title: 'Booking & Payment',
    tip: 'ONCF accepts credit cards online and at station counters. Download the ONCF app for mobile tickets. CTM also accepts cards online. Grand taxis are cash only. Keep small denominations ready for taxis and tips.',
  },
  {
    icon: Luggage,
    title: 'Luggage Tips',
    tip: 'Trains have overhead racks and space between carriages for large bags. CTM buses allow one large bag in the hold. Grand taxis have limited trunk space, especially with 6 passengers. For heavy luggage, trains or private transfers are best.',
  },
  {
    icon: Wifi,
    title: 'Connectivity',
    tip: 'Al Boraq trains offer Wi-Fi (variable quality). Regular trains have power outlets in 1st class. Buy a Moroccan SIM card at the airport or in Casablanca for reliable mobile data during any journey. Maroc Telecom and Inwi have the best coverage.',
  },
  {
    icon: Coffee,
    title: 'Food & Refreshments',
    tip: 'Al Boraq 1st class includes complimentary refreshments. Regular trains have a basic snack trolley. CTM buses make a rest stop. Grand taxis do not stop. Buy water and snacks before departure from station kiosks.',
  },
  {
    icon: Globe,
    title: 'Arriving in Marrakech',
    tip: 'Marrakech train and Supratours bus stations are on Avenue Hassan II, about 2 km from Jemaa el-Fna. Take a petit taxi (from 15-20 MAD) or walk 25 minutes. CTM station is nearby. Grand taxis drop you at the edge of the medina. Agree on a taxi fare before getting in.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'Morocco Train Guide', href: '/morocco-train-guide', description: 'Complete guide to train travel across Morocco' },
  { title: 'Casablanca City Guide', href: '/casablanca', description: 'Where to stay, eat, and explore in Casablanca' },
  { title: 'Marrakech Travel Guide', href: '/marrakech', description: 'Essential Marrakech guide for first-time visitors' },
  { title: 'Marrakech to Fes', href: '/marrakech-to-fes', description: 'All transport options from Marrakech to Fes' },
  { title: 'Marrakech to Essaouira', href: '/marrakech-to-essaouira', description: 'Getting from Marrakech to the coastal town of Essaouira' },
  { title: 'Budget Travel Morocco', href: '/budget-travel', description: 'Save money traveling across Morocco' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function CasablancaToMarrakechPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <div className="hero-overlay absolute inset-0 z-10" />
        <img
          src="/images/hero-casablanca.webp"
          alt="Casablanca to Marrakech transport route through Moroccan landscape"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 text-white/90 text-sm mb-4 font-[family-name:var(--font-heading)]">
            <Train className="w-5 h-5" />
            <span>Morocco Transport Guide</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white max-w-4xl leading-tight drop-shadow-lg">
            Casablanca to Marrakech
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl font-[family-name:var(--font-heading)]">
            240 km | Every transport option compared with prices for 2026
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
            <span className="text-[#A0522D]">Casablanca to Marrakech</span>
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
              Getting from Casablanca to Marrakech
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
            <p>
              The journey from Casablanca to Marrakech is one of the most traveled routes in Morocco, connecting the
              country&apos;s largest city and economic capital with its most popular tourist destination. At 240 km, it is
              also one of the easiest intercity journeys in North Africa, with multiple transport options ranging from
              Africa&apos;s first high-speed train to budget-friendly shared taxis.
            </p>
            <p>
              The Al Boraq high-speed train has transformed this route, cutting travel time to just over 2 hours and
              providing a modern, comfortable experience that rivals European rail services. But the regular ONCF train,
              CTM buses, and even grand taxis remain popular options depending on your budget and preferences. This guide
              covers every way to make the journey, with current prices, schedules, and practical tips to help you choose
              the best option for your trip.
            </p>
            <p>
              Whether you are landing at Mohammed V Airport and heading straight to Marrakech, or spending a night in
              Casablanca before moving on, this comprehensive guide has you covered.
            </p>
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

      {/* ── AIRPORT CONNECTION ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                <Plane className="w-5 h-5 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">{airportConnection.title}</h2>
            </div>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-6">{airportConnection.description}</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {airportConnection.tips.map((tip) => (
                <div key={tip} className="flex items-start gap-2 bg-[#FAF8F5] rounded-lg p-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">{tip}</span>
                </div>
              ))}
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

      {/* ── ROUTE DETAILS ── */}
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
              If you are driving from Casablanca to Marrakech, the route is almost entirely via the A7 motorway
              (autoroute). Exit Casablanca heading south, following signs for Marrakech/Settat. The motorway is toll-based
              with two main toll plazas.
            </p>
            <p>
              <strong>Route landmarks and stops:</strong> After leaving Casablanca&apos;s urban sprawl, you will pass through
              flat agricultural plains. Settat (90 km from Casablanca) is the first major town and has service stations.
              Benguerir (180 km) is the second, with fuel and rest facilities. The final stretch into Marrakech offers
              increasingly dramatic views of the High Atlas Mountains, snow-capped in winter and spring.
            </p>
            <p>
              <strong>Tolls:</strong> Approximately 100 MAD total for the full journey. Keep cash or a Jawaz toll card
              ready. Toll booths accept Moroccan dirhams only.
            </p>
            <p>
              <strong>Fuel:</strong> Multiple service stations along the motorway. Fill up in Casablanca for the best
              prices. Fuel costs approximately 12-14 MAD per liter for diesel, 15-17 MAD per liter for gasoline.
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
            Plan Your Morocco Journey
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            From Casablanca to Marrakech and beyond. Explore our complete collection of city guides,
            transport routes, and travel tips.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Marrakech
            </Link>
            <Link
              href="/casablanca"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Casablanca
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

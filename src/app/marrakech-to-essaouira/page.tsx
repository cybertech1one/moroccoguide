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
  Sun,
  Compass,
  Calendar,
  Car,
  Navigation,
  Bus,
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
  Waves,
  Wind,
  TreesIcon,
  ShoppingBag,
  Eye,
  Route,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Marrakech to Essaouira 2026 | Bus, Taxi & Transport Guide',
  description:
    'Complete guide to getting from Marrakech to Essaouira in 2026. Supratours bus (from 80 MAD, 2h45), CTM bus (from 75 MAD), grand taxi (from 70 MAD, 2h30), private transfer, and driving. Day trip vs overnight advice. Argan cooperative stops.',
  keywords: [
    'marrakech to essaouira',
    'marrakech to essaouira bus',
    'how to get from marrakech to essaouira',
    'marrakech essaouira transport',
    'marrakech to essaouira taxi',
    'Supratours marrakech essaouira',
    'CTM bus marrakech essaouira',
    'marrakech to essaouira grand taxi',
    'marrakech to essaouira private transfer',
    'marrakech to essaouira drive',
    'marrakech essaouira distance',
    'marrakech to essaouira day trip',
    'marrakech to essaouira argan oil',
    'marrakech essaouira travel time',
    'essaouira from marrakech transport',
    'Morocco transport 2026',
    'marrakech to essaouira route',
    'essaouira how to get there',
  ],
  openGraph: {
    title: 'Marrakech to Essaouira 2026 | Bus, Taxi & Transport Guide',
    description:
      'Every way to travel from Marrakech to Essaouira compared: Supratours from 80 MAD, CTM bus from 75 MAD, grand taxis from 70 MAD, private transfers, and driving. Includes argan cooperative stops and day trip advice.',
    url: `${BASE_URL}/marrakech-to-essaouira`,
    images: [
      {
        url: `${BASE_URL}/images/hero-essaouira.webp`,
        width: 1200,
        height: 630,
        alt: 'Essaouira harbour with traditional blue fishing boats and the historic ramparts in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marrakech to Essaouira 2026 | Complete Transport Guide',
    description:
      'Supratours from 80 MAD, CTM from 75 MAD, grand taxis from 70 MAD, private transfers, and driving. Plus argan cooperative stops and day trip vs overnight advice.',
    images: [`${BASE_URL}/images/hero-essaouira.webp`],
  },
  alternates: { canonical: `${BASE_URL}/marrakech-to-essaouira` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/marrakech-to-essaouira`,
  name: 'Marrakech to Essaouira 2026 | Bus, Taxi & Transport Guide',
  description:
    'Complete guide to getting from Marrakech to Essaouira. Compare Supratours buses, CTM buses, grand taxis, private transfers, and driving through the argan forests.',
  url: `${BASE_URL}/marrakech-to-essaouira`,
  image: `${BASE_URL}/images/hero-essaouira.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/marrakech-to-essaouira`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Transport', item: `${BASE_URL}/transport` },
      { '@type': 'ListItem', position: 3, name: 'Marrakech to Essaouira', item: `${BASE_URL}/marrakech-to-essaouira` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is there a train from Marrakech to Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'No, there is no train from Marrakech to Essaouira. Essaouira does not have a railway station. The Supratours bus (operated by the national railway company) is the closest equivalent, departing from next to Marrakech train station. Other options include CTM bus, grand taxi, private transfer, or driving.' } },
    { '@type': 'Question', name: 'How long does it take to get from Marrakech to Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'By Supratours bus, the journey takes approximately 2 hours 45 minutes. CTM buses take about the same time. Grand taxis take approximately 2 hours 30 minutes. Driving takes about 2 hours 30 minutes via the N8 national road. Private transfers take approximately 2 hours 30 minutes with the option for stops along the way.' } },
    { '@type': 'Question', name: 'Can I do Marrakech to Essaouira as a day trip?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, a day trip is very feasible. Take the early morning Supratours bus (departs around 8:00 AM, arrives approximately 10:45 AM), spend the day exploring, and take the late afternoon bus back (around 4:00-5:00 PM). With a private transfer, you have more flexibility and can include an argan oil cooperative stop. However, staying overnight is recommended to fully enjoy the town, especially the sunset over the Atlantic and the relaxed evening atmosphere.' } },
    { '@type': 'Question', name: 'What is the best way to get from Marrakech to Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'The Supratours bus is the most popular option, offering comfortable, reliable service from next to Marrakech train station for from 80 MAD. For families and groups, a private transfer (from 700-1,200 MAD) offers door-to-door service and can include stops at argan oil cooperatives. Grand taxis are faster and cheaper (from 70 MAD per person) but less comfortable. Driving is ideal if you want to explore the coast further.' } },
    { '@type': 'Question', name: 'Can I stop at an argan oil cooperative between Marrakech and Essaouira?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, if you drive or take a private transfer. Several traditional argan oil cooperatives are located along the N8 road between Marrakech and Essaouira, particularly around the village of Tidzi. These women-run cooperatives demonstrate the traditional argan oil production process and sell authentic products at fair prices. Buses and grand taxis do not stop at cooperatives.' } },
    { '@type': 'Question', name: 'How much does a grand taxi from Marrakech to Essaouira cost?', acceptedAnswer: { '@type': 'Answer', text: 'A shared grand taxi from Marrakech to Essaouira costs from 70-80 MAD per person. Taxis depart from the Bab Doukkala area in Marrakech or from near the Supratours station and leave when they have 6 passengers. You can buy extra seats for comfort. Hiring the whole taxi costs from 400-500 MAD, ideal for groups of 3-4 travelers.' } },
  ],
};

/* ===============================================================
   DATA: TRANSPORT OPTIONS
   =============================================================== */

const transportOptions = [
  {
    name: 'Supratours Bus',
    icon: Bus,
    duration: '2h 45min',
    price: 'From 80 MAD',
    frequency: '5-7 daily departures',
    comfort: 'Good',
    bestFor: 'Most travelers, day trippers',
    description:
      'The Supratours bus is the most popular way to travel from Marrakech to Essaouira and the option most recommended by fellow travelers. Operated by the national railway company (ONCF), Supratours offers reliable, comfortable service with modern air-conditioned coaches. Buses depart from the Supratours terminal next to Marrakech railway station, making it convenient for travelers already using the train network. Multiple daily departures (typically 5-7) run from early morning to early evening. The journey takes approximately 2 hours 45 minutes via the N8 national road, passing through the argan forest region. Buses arrive at the Essaouira Supratours station, about a 10-minute walk from the medina.',
    bookingTip:
      'Book online at oncf.ma or at the Supratours counter at Marrakech train station. During peak season (April-October) and weekends, the morning departures sell out quickly. Book at least a day ahead. Arrive 20 minutes before departure. The station has a small waiting area and a cafe. If planning a day trip, book your return ticket at the same time to guarantee your seat back.',
    stops: 'Marrakech Supratours Station - Essaouira Supratours Station',
  },
  {
    name: 'CTM Bus',
    icon: Bus,
    duration: '2h 45min - 3h',
    price: 'From 75 MAD',
    frequency: '3-4 daily departures',
    comfort: 'Good',
    bestFor: 'Budget travelers',
    description:
      'CTM (Compagnie de Transports au Maroc) operates several daily buses from Marrakech to Essaouira. CTM coaches are modern, air-conditioned, and comfortable, offering a reliable alternative to Supratours at a slightly lower price. Buses depart from the Marrakech CTM station (near the train station) and arrive at the Essaouira CTM station, close to the Bab Doukkala entrance to the medina. The journey takes approximately 2 hours 45 minutes to 3 hours. CTM is the national bus company and has a reputation for punctuality and well-maintained vehicles.',
    bookingTip:
      'Book online at ctm.ma or at the CTM counter in Marrakech. CTM has fewer departures than Supratours on this route, so book early, especially for weekend travel. Assigned seating and luggage tags are included. The CTM station in Essaouira is slightly closer to the medina than the Supratours station, which can be a small advantage if you are walking with luggage.',
    stops: 'Marrakech CTM Station - Chichaoua (brief stop, some services) - Essaouira CTM Station',
  },
  {
    name: 'Grand Taxi',
    icon: Car,
    duration: '2h 30min',
    price: 'From 70-80 MAD per person',
    frequency: 'Depart when full (6 passengers)',
    comfort: 'Basic',
    bestFor: 'Slightly faster travel, local experience',
    description:
      'Grand taxis offer a slightly faster alternative to the bus, taking approximately 2 hours 30 minutes for the direct drive. Shared Mercedes sedans depart from the grand taxi stand near Bab Doukkala in Marrakech, close to the Supratours station. Each taxi takes 6 passengers and departs when full. The ride is direct with no scheduled stops. Drivers are experienced on the N8 route and know the road well. Grand taxis drop you at the edge of the Essaouira medina, which is slightly more convenient than the bus station. This is a good option for travelers who want to save 15-20 minutes and do not mind the tighter seating.',
    bookingTip:
      'Head to the grand taxi stand near Bab Doukkala and ask for "taxi Essaouira." Morning departures (8:00-10:00 AM) fill fastest. Confirm the price before boarding. To avoid the cramped back seat, pay for 2 seats (from 140-160 MAD). Groups of 4-6 can hire the whole taxi for from 400-500 MAD, which is very cost-effective and gives you a semi-private car with negotiable departure time. Cash only.',
    stops: 'Direct: Marrakech (Bab Doukkala) to Essaouira medina edge',
  },
  {
    name: 'Private Transfer',
    icon: Navigation,
    duration: '2h 30min',
    price: 'From 700-1,200 MAD (entire vehicle)',
    frequency: 'On demand',
    comfort: 'Excellent',
    bestFor: 'Families, groups, argan cooperative stops, day trippers',
    description:
      'A private transfer is the most comfortable and flexible way to travel from Marrakech to Essaouira. A professional driver picks you up from your riad or hotel in Marrakech and delivers you to your accommodation in Essaouira. The major advantage is the ability to stop at argan oil cooperatives along the N8, visit viewpoints, and travel on your own schedule. Most private transfer services offer modern, air-conditioned vehicles ranging from sedans for couples to minivans for families. For a day trip, the driver waits in Essaouira while you explore and drives you back in the evening. This is the premium option but offers outstanding value for groups of 3-4.',
    bookingTip:
      'Book through your riad or hotel, established transfer companies, or GetYourGuide. For day trips, confirm waiting time charges and the planned return time. Ask the driver to stop at a reputable argan oil cooperative (avoid tourist traps near the main road). A transfer for 4 passengers works out to from 175-300 MAD per person, which is only slightly more than the bus with the added convenience of door-to-door service and the argan stop.',
    stops: 'Door-to-door, with optional argan cooperative and scenic stops',
  },
  {
    name: 'Rental Car / Self-Drive',
    icon: Car,
    duration: '2h 30min',
    price: 'From 250 MAD/day + fuel',
    frequency: 'Flexible',
    comfort: 'Depends on vehicle',
    bestFor: 'Independent travelers, coastal exploration, photography',
    description:
      'Driving from Marrakech to Essaouira is straightforward and enjoyable. The 175 km route follows the N8 national road (not a motorway) through gently undulating terrain. You pass through the argan forest region, a UNESCO-designated biosphere reserve, where goats famously climb argan trees. The road is two lanes throughout, well-maintained, and well-signposted. Traffic is generally light outside of Marrakech. Having a car lets you stop at argan cooperatives, visit the goat trees viewpoints, and continue along the Atlantic coast to explore Sidi Kaouki, Imsouane, or other coastal villages. The drive itself is pleasant with gradually changing landscapes from red earth to green argan forests to the windswept Atlantic coast.',
    bookingTip:
      'Rent a car in Marrakech from agencies in Gueliz or at the airport. The N8 is a standard two-lane road, so any vehicle type works. Fill up in Marrakech as fuel stations become less frequent along the route. The drive is easy and suitable for all skill levels. Parking in Essaouira is available in a large lot near Bab Doukkala (from 10-20 MAD per day). Some riads have parking arrangements. Be aware that Essaouira can be windy, especially in the afternoon.',
    stops: 'Self-paced: Marrakech - Chichaoua - Argan cooperatives - Essaouira',
  },
] as const;

/* ===============================================================
   DATA: ARGAN COOPERATIVE STOPS
   =============================================================== */

const arganInfo = {
  title: 'Argan Oil Cooperative Stops Along the Way',
  icon: TreesIcon,
  description:
    'The road between Marrakech and Essaouira passes through the heart of Morocco\'s argan forest, a UNESCO biosphere reserve. This is the only place in the world where the argan tree grows, and for centuries local Berber women have produced argan oil by hand using traditional methods. Several women-run cooperatives along the N8 welcome visitors to watch the production process and purchase authentic products.',
  cooperatives: [
    {
      name: 'Argan Cooperatives near Tidzi',
      description: 'The village of Tidzi, about 30 km before Essaouira, is home to several authentic argan cooperatives. These are genuine women-run enterprises where you can watch the entire production process: cracking argan nuts, grinding the kernels, and extracting the oil. Products include culinary argan oil (nutty flavor for cooking), cosmetic oil (for skin and hair), and argan-based soaps and creams. Prices are fair and support the local women directly.',
      tip: 'Look for cooperatives with the "Cooperative" sign rather than shops with "Argan" in the name on the main road. The real cooperatives are typically a short turn off the N8. Ask your driver for a recommendation or look for the government-certified ones.',
    },
    {
      name: 'Goat Trees Viewpoints',
      description: 'Along the N8, you may see the famous sight of goats climbing argan trees to eat the fruit. While some roadside "goat tree" displays are staged for tourist photos (the herders charge a fee), you can occasionally spot genuine goat-in-tree scenes in the argan forest. This phenomenon is real - argan fruit is a goat delicacy - but the best sightings are in the early morning before tour buses arrive.',
      tip: 'If you stop for goat tree photos, a small tip (from 10-20 MAD) is customary to the goat herders. Be aware that some setups are commercial rather than natural. The genuine article is more commonly seen on quieter roads off the N8.',
    },
  ],
};

/* ===============================================================
   DATA: DAY TRIP VS OVERNIGHT
   =============================================================== */

const dayTripVsOvernight = {
  title: 'Day Trip vs. Overnight: Which Should You Choose?',
  icon: Calendar,
  options: [
    {
      name: 'Day Trip from Marrakech',
      icon: Sun,
      pros: [
        'No need to book extra accommodation',
        'Good for tight itineraries',
        'Can include argan cooperative stop (private transfer)',
        'Early bus gives you about 5-6 hours in Essaouira',
        'Perfect for a taste of the coastal atmosphere',
      ],
      cons: [
        'Limited time to explore (5-6 hours max by bus)',
        'Tiring with 5+ hours of travel in one day',
        'Miss the magical sunset and evening atmosphere',
        'Cannot fully relax and enjoy the medina pace',
        'Rushed experience in a town that rewards slow exploration',
      ],
      verdict: 'A day trip works if Essaouira is not a priority and you just want a change of scenery. Take the earliest Supratours bus or book a private transfer for maximum time in town.',
    },
    {
      name: 'Overnight Stay (Recommended)',
      icon: Heart,
      pros: [
        'Experience the legendary Essaouira sunset from the ramparts',
        'Enjoy fresh seafood at the port in the evening',
        'Explore the medina without time pressure',
        'Morning light is perfect for photography',
        'The town is most atmospheric at dawn and dusk',
        'Beautiful riads available from 400-600 MAD per night',
      ],
      cons: [
        'Requires extra accommodation booking',
        'Takes 2 days from your Morocco itinerary',
        'Need to transport luggage both ways',
      ],
      verdict: 'Strongly recommended. Essaouira\'s greatest charm is its relaxed pace and dramatic Atlantic sunsets. One night allows you to experience the town at its most atmospheric. Two nights is ideal if you enjoy surfing, art galleries, or simply unwinding.',
    },
  ],
};

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { option: 'Supratours Bus', time: '2h 45min', price: 'From 80 MAD', comfort: 4, reliability: 5 },
  { option: 'CTM Bus', time: '2h 45min', price: 'From 75 MAD', comfort: 4, reliability: 4 },
  { option: 'Grand Taxi', time: '2h 30min', price: 'From 70 MAD/person', comfort: 2, reliability: 3 },
  { option: 'Private Transfer', time: '2h 30min', price: 'From 700 MAD', comfort: 5, reliability: 5 },
  { option: 'Rental Car', time: '2h 30min', price: 'From 250 MAD/day', comfort: 4, reliability: 4 },
] as const;

/* ===============================================================
   DATA: TRAVELER RECOMMENDATIONS
   =============================================================== */

const travelerRecommendations = [
  {
    type: 'Budget Backpackers',
    icon: Luggage,
    recommendation: 'Grand Taxi or CTM Bus',
    reason: 'The grand taxi at from 70-80 MAD per person is the cheapest and fastest option. The CTM bus at from 75 MAD offers more comfort with air conditioning and a fixed schedule. Supratours at from 80 MAD is equally good. All three are excellent budget options for this short route.',
  },
  {
    type: 'Day Trippers',
    icon: Sun,
    recommendation: 'Supratours Bus or Private Transfer',
    reason: 'Supratours offers the most reliable schedule for day trips, with multiple departure times. Take the earliest bus and the late afternoon return. For maximum flexibility and an argan cooperative stop, a private transfer day trip is the premium choice. Book return transport in advance.',
  },
  {
    type: 'Families with Children',
    icon: Users,
    recommendation: 'Private Transfer',
    reason: 'A private transfer (from 700 MAD for the vehicle) with a stop at an argan cooperative makes for a wonderful family experience. Children enjoy watching the goats in trees and the oil-making process. Door-to-door service eliminates the stress of navigating bus stations with kids and luggage.',
  },
  {
    type: 'Surfers & Beach Lovers',
    icon: Waves,
    recommendation: 'Rental Car',
    reason: 'If you are heading to Essaouira for surfing or want to explore beaches like Sidi Kaouki and Imsouane, a rental car gives you the freedom to reach these spots (not served by public transport). You can also explore the scenic coast south of Essaouira at your own pace.',
  },
  {
    type: 'Couples & Romance Seekers',
    icon: Heart,
    recommendation: 'Private Transfer + Overnight Stay',
    reason: 'Book a private transfer with an argan cooperative stop, spend the afternoon exploring the medina, watch the sunset from the ramparts, enjoy a seafood dinner at the port, and stay in a charming riad. The romantic experience is worth the extra investment.',
  },
] as const;

/* ===============================================================
   DATA: PRO TIPS
   =============================================================== */

const proTips = [
  {
    icon: Wind,
    title: 'The Essaouira Wind',
    tip: 'Essaouira is nicknamed the "Windy City of Africa." The Alizee trade winds blow strongest from April to September, particularly in the afternoons. Great for windsurfing and kitesurfing, but bring a windbreaker and secure any hats. The morning hours are typically calmer.',
  },
  {
    icon: Timer,
    title: 'Best Departure Time',
    tip: 'Take the first morning Supratours bus (around 8:00 AM) for maximum time in Essaouira. You arrive by 10:45 AM with the whole day ahead. For day trips, the 4:00-5:00 PM return bus gives you about 5-6 hours in town. Book both tickets before departing.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping in Essaouira',
    tip: 'Essaouira is famous for thuya wood crafts, argan oil products, silver jewelry, and art galleries. Prices in Essaouira are generally lower and the shopping experience more relaxed than Marrakech. The main shopping streets are Avenue de l\'Istiqlal and the souk area around Place Moulay Hassan.',
  },
  {
    icon: Coffee,
    title: 'Food in Essaouira',
    tip: 'Do not miss the fresh grilled fish at the port stalls (from 50-80 MAD for a generous plate). The port restaurants are a quintessential Essaouira experience. For sit-down dining, Place Moulay Hassan has several cafes and restaurants with terrace seating overlooking the square.',
  },
  {
    icon: Camera,
    title: 'Photography Tips',
    tip: 'The best light in Essaouira is golden hour before sunset, when the ramparts, port, and medina walls glow warm orange against the deep blue Atlantic. The morning light is also excellent for the blue fishing boats in the harbour. The midday light can be harsh and the wind makes tripods tricky.',
  },
  {
    icon: Globe,
    title: 'Arriving in Essaouira',
    tip: 'Both the Supratours and CTM stations are outside the medina walls, a 10-15 minute walk. Grand taxis drop you closer to Bab Doukkala, the main medina entrance. From any drop-off point, follow signs or ask for Place Moulay Hassan, the central square. Most riads are within a short walk of this square.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'Essaouira City Guide', href: '/essaouira', description: 'Complete guide to the Windy City on the Atlantic coast' },
  { title: 'Marrakech Travel Guide', href: '/marrakech', description: 'Everything to see, do, and eat in Marrakech' },
  { title: 'Casablanca to Marrakech', href: '/casablanca-to-marrakech', description: 'All transport from Casablanca to Marrakech' },
  { title: 'Best Beaches Morocco', href: '/best-beaches-morocco', description: 'Top beach destinations across Morocco' },
  { title: 'Morocco Transport Guide', href: '/transport', description: 'Overview of all transport options in Morocco' },
  { title: 'Budget Travel Morocco', href: '/budget-travel', description: 'Tips for traveling Morocco on a budget' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function MarrakechToEssaouiraPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* ── HERO ── */}
      <section className="relative h-[55vh] min-h-[420px]">
        <div className="hero-overlay absolute inset-0 z-10" />
        <img
          src="/images/hero-essaouira.webp"
          alt="Essaouira harbour with blue fishing boats and historic ramparts on the Atlantic coast"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 text-white/90 text-sm mb-4 font-[family-name:var(--font-heading)]">
            <Bus className="w-5 h-5" />
            <span>Morocco Transport Guide</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white max-w-4xl leading-tight drop-shadow-lg">
            Marrakech to Essaouira
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl font-[family-name:var(--font-heading)]">
            175 km | No train | Through the argan forests to the Atlantic for 2026
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
            <span className="text-[#A0522D]">Marrakech to Essaouira</span>
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
              Getting from Marrakech to Essaouira
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
            <p>
              The journey from Marrakech to Essaouira is one of the most popular excursions in Morocco, taking you
              from the bustling Red City to the laid-back Atlantic coastal town in under 3 hours. At 175 km, it is
              an easy day trip or, better still, an overnight escape. The route passes through Morocco&apos;s unique
              argan forest, a UNESCO biosphere reserve, where you might spot goats perching in the gnarled argan trees.
            </p>
            <p>
              There is no train to Essaouira, but the Supratours bus service (operated by the national railway company)
              runs multiple times daily and is the most popular transport option. CTM buses, grand taxis, private
              transfers, and rental cars are also readily available. This guide covers every option with current
              2026 prices and helps you decide between a day trip and an overnight stay.
            </p>
            <p>
              Essaouira offers a completely different atmosphere from Marrakech: cool ocean breezes instead of desert
              heat, a relaxed medina instead of frantic souks, and fresh Atlantic seafood instead of tagine. The
              contrast makes the journey between the two cities one of Morocco&apos;s great travel experiences.
            </p>
          </div>

          {/* No Train Warning */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 font-[family-name:var(--font-heading)]">No Train Available</p>
              <p className="text-amber-700 text-sm font-[family-name:var(--font-heading)]">
                Essaouira has no railway station. The Supratours bus (run by the train company) is the closest
                equivalent and departs from beside Marrakech train station. Do not confuse Supratours with a train service.
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

      {/* ── ARGAN COOPERATIVE STOPS ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                <TreesIcon className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">{arganInfo.title}</h2>
            </div>
            <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-6">{arganInfo.description}</p>
            <div className="space-y-4">
              {arganInfo.cooperatives.map((coop) => (
                <div key={coop.name} className="card-moroccan p-5">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900 mb-2">{coop.name}</h3>
                  <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-3 text-sm">{coop.description}</p>
                  <div className="flex items-start gap-2 bg-[#FAF8F5] rounded-lg p-3">
                    <Info className="w-5 h-5 text-[#A0522D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{coop.tip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DAY TRIP VS OVERNIGHT ── */}
      <section className="container-morocco py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-[#A0522D]" />
            </div>
            <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">{dayTripVsOvernight.title}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {dayTripVsOvernight.options.map((option) => {
              const Icon = option.icon;
              return (
                <div key={option.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#A0522D]" />
                    <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">{option.name}</h3>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-700 font-[family-name:var(--font-heading)] mb-2">Advantages</h4>
                    <ul className="space-y-1.5">
                      {option.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-red-700 font-[family-name:var(--font-heading)] mb-2">Drawbacks</h4>
                    <ul className="space-y-1.5">
                      {option.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray-600 font-[family-name:var(--font-heading)]">
                          <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] font-medium">{option.verdict}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── TRAVELER RECOMMENDATIONS ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
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
        </div>
      </section>

      {/* ── PRO TIPS ── */}
      <section className="container-morocco py-12">
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
      </section>

      {/* ── DRIVING ROUTE ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center">
                <Fuel className="w-5 h-5 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">Driving Route Details</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
              <p>
                The drive from Marrakech to Essaouira follows the N8 national road, a well-maintained two-lane highway
                through some of Morocco&apos;s most characteristic landscapes. Leaving Marrakech heading west, you pass
                through the Haouz Plain, with its olive groves and small farming villages. After the town of Chichaoua
                (roughly halfway), the terrain becomes more undulating as you enter the argan forest zone.
              </p>
              <p>
                <strong>Road conditions:</strong> The N8 is a two-lane road, not a motorway, so expect slower vehicles,
                occasional overtaking opportunities, and roundabouts through towns. The road surface is good throughout.
                Traffic is generally light once you leave Marrakech. There are no tolls on this route.
              </p>
              <p>
                <strong>Fuel:</strong> Several fuel stations in Chichaoua and along the route. Fill up in Marrakech
                for convenience. Budget approximately 120-160 MAD for fuel depending on your vehicle.
              </p>
              <p>
                <strong>Scenic highlights:</strong> Watch for argan trees with goats climbing in them (more common
                in the morning), the gradual transition from red earth to coastal scrubland, and the first glimpse
                of the Atlantic Ocean as you approach Essaouira. The final descent into Essaouira with the walled
                medina and fishing port visible ahead is a memorable arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="container-morocco py-12">
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
      </section>

      {/* ── RELATED GUIDES ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
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
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#A0522D] py-16">
        <div className="container-morocco text-center">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl text-white mb-4">
            Escape to the Atlantic Coast
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            Essaouira&apos;s ocean breezes, fresh seafood, artistic medina, and legendary sunsets await.
            Plan your journey from Marrakech today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/essaouira"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Essaouira
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Marrakech
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

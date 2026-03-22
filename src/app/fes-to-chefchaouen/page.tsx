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
  TreesIcon,
  Route,
  Eye,
} from 'lucide-react';

/* ===============================================================
   CONSTANTS
   =============================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===============================================================
   SEO METADATA
   =============================================================== */

export const metadata: Metadata = {
  title: 'Fes to Chefchaouen 2026 | Bus, Taxi & Transport Guide',
  description:
    'Complete guide to getting from Fes to Chefchaouen in 2026. Compare CTM bus (from 75 MAD, 4 hours), grand taxi (from 70 MAD, 3 hours), private transfer, and shared minivan options. No direct train. Scenic route tips included.',
  keywords: [
    'fes to chefchaouen',
    'fes to chefchaouen bus',
    'fes to chefchaouen transport',
    'how to get from fes to chefchaouen',
    'fez to chefchaouen',
    'fes chefchaouen taxi',
    'CTM bus fes chefchaouen',
    'fes to chefchaouen private transfer',
    'fes to chefchaouen drive',
    'fes chefchaouen distance',
    'fes to chefchaouen via ouezzane',
    'fes to chefchaouen grand taxi',
    'fes chefchaouen minivan',
    'fes to chefchaouen scenic route',
    'fes to chefchaouen travel time',
    'Morocco transport 2026',
    'blue city transport',
    'chefchaouen how to get there',
  ],
  openGraph: {
    title: 'Fes to Chefchaouen 2026 | Bus, Taxi & Transport Guide',
    description:
      'Every way to travel from Fes to Chefchaouen compared: CTM bus from 75 MAD, grand taxis from 70 MAD, private transfers, shared minivans, and driving. No direct train exists on this route.',
    url: `${BASE_URL}/fes-to-chefchaouen`,
    images: [
      {
        url: `${BASE_URL}/images/hero-chefchaouen.webp`,
        width: 1200,
        height: 630,
        alt: 'Blue-painted streets and buildings of Chefchaouen medina nestled in the Rif Mountains of Morocco',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fes to Chefchaouen 2026 | Complete Transport Guide',
    description:
      'CTM bus from 75 MAD, grand taxis from 70 MAD, private transfers, and driving routes. Every option for reaching the Blue City from Fes.',
    images: [`${BASE_URL}/images/hero-chefchaouen.webp`],
  },
  alternates: { canonical: `${BASE_URL}/fes-to-chefchaouen` },
};

/* ===============================================================
   JSON-LD STRUCTURED DATA
   =============================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/fes-to-chefchaouen`,
  name: 'Fes to Chefchaouen 2026 | Bus, Taxi & Transport Guide',
  description:
    'Complete guide to getting from Fes to Chefchaouen. Compare all transport options including CTM buses, grand taxis, private transfers, shared minivans, and driving the scenic Rif Mountain roads.',
  url: `${BASE_URL}/fes-to-chefchaouen`,
  image: `${BASE_URL}/images/hero-chefchaouen.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-22',
  dateModified: '2026-03-22',
  mainEntityOfPage: `${BASE_URL}/fes-to-chefchaouen`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Transport', item: `${BASE_URL}/transport` },
      { '@type': 'ListItem', position: 3, name: 'Fes to Chefchaouen', item: `${BASE_URL}/fes-to-chefchaouen` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is there a train from Fes to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'No, there is no direct train from Fes to Chefchaouen. Chefchaouen does not have a railway station. The closest train station is in Meknes or Fes. You need to take a bus, grand taxi, private transfer, or drive. CTM buses and grand taxis are the most popular options for this route.' } },
    { '@type': 'Question', name: 'How long does it take to get from Fes to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'By CTM bus, the journey takes approximately 4 hours. Grand taxis take about 3 hours, depending on road conditions and how quickly they fill up. Driving yourself takes about 3 hours 30 minutes via the direct route, or longer if you take the scenic route through the Rif Mountains. Private transfers take approximately 3 hours.' } },
    { '@type': 'Question', name: 'How much does a grand taxi from Fes to Chefchaouen cost?', acceptedAnswer: { '@type': 'Answer', text: 'A shared grand taxi from Fes to Chefchaouen costs from 70-80 MAD per person. The taxis depart from the area near Bab Boujeloud (the Blue Gate) in Fes and leave when they have 6 passengers. You can also pay for additional seats for more comfort. Hiring the entire taxi privately costs from 400-500 MAD.' } },
    { '@type': 'Question', name: 'What is the best way to get from Fes to Chefchaouen?', acceptedAnswer: { '@type': 'Answer', text: 'For most travelers, the CTM bus is the best option. It is comfortable, affordable (from 75 MAD), air-conditioned, and runs on a reliable schedule. Grand taxis are faster but less comfortable. A private transfer is best for families or groups who want door-to-door convenience. Driving allows you to stop at scenic viewpoints in the Rif Mountains.' } },
    { '@type': 'Question', name: 'Is the road from Fes to Chefchaouen safe?', acceptedAnswer: { '@type': 'Answer', text: 'The roads between Fes and Chefchaouen are generally safe but winding, especially the final stretch through the Rif Mountains. The N13 and N2 roads are paved and maintained. If driving, take care on mountain curves and be aware that local drivers can be fast. The route is driven daily by buses and taxis without issue. Fog can occur in the mountains during winter.' } },
    { '@type': 'Question', name: 'Should I visit Chefchaouen as a day trip from Fes?', acceptedAnswer: { '@type': 'Answer', text: 'A day trip is technically possible but not recommended. With 4 hours each way by bus, you would only have a few hours in Chefchaouen. The Blue City deserves at least one overnight stay to explore the medina at different times of day and enjoy the mountain atmosphere. Most travelers spend 1-2 nights.' } },
  ],
};

/* ===============================================================
   DATA: TRANSPORT OPTIONS
   =============================================================== */

const transportOptions = [
  {
    name: 'CTM Bus',
    icon: Bus,
    duration: '4 hours',
    price: 'From 75 MAD',
    frequency: '2 daily departures (morning & afternoon)',
    comfort: 'Good',
    bestFor: 'Most travelers, budget-conscious visitors',
    description:
      'The CTM bus is the most reliable and comfortable public transport option from Fes to Chefchaouen. CTM operates approximately 2 daily departures, typically in the morning and early afternoon. The modern, air-conditioned coaches offer reclining seats and adequate legroom. Buses depart from the Fes CTM bus station and arrive at the Chefchaouen bus station, which is a 15-minute walk or short taxi ride (from 10 MAD) to the medina. The route passes through the agricultural lowlands before climbing into the spectacular Rif Mountains, offering increasingly dramatic views as you approach Chefchaouen.',
    bookingTip:
      'Book online at ctm.ma at least one day in advance, especially during weekends and peak season (April-October). The morning departure is most popular and often sells out. Arrive at the CTM station 30 minutes before departure. Luggage goes in the hold below; keep a day bag with valuables and water for the journey. If CTM is sold out, check Supratours or other private bus companies.',
    stops: 'Fes CTM Station - Ouezzane (some services) - Chefchaouen Bus Station',
  },
  {
    name: 'Grand Taxi',
    icon: Car,
    duration: '3 hours',
    price: 'From 70-80 MAD per person',
    frequency: 'Depart when full (6 passengers)',
    comfort: 'Basic',
    bestFor: 'Faster travel, flexible departures',
    description:
      'Grand taxis are the fastest public transport option from Fes to Chefchaouen. Shared Mercedes sedans depart from the grand taxi stand near Bab Boujeloud (the famous Blue Gate) in the Fes medina area. Each taxi takes 6 passengers and leaves only when full. The drive is more direct than the bus route and takes approximately 3 hours, though the mountain roads are winding. Drivers know the roads well and navigate the Rif Mountain switchbacks with practiced ease. The ride gives you an authentic local experience and often includes conversation with Moroccan co-passengers.',
    bookingTip:
      'Head to the grand taxi stand near Bab Boujeloud early in the morning (8:00-10:00 AM) for the fastest departure times. Ask for "taxi Chefchaouen" and you will be directed to the right vehicle. The price is fixed by route, but confirm before boarding. To avoid the cramped backseat of 3, pay for an extra seat (from 140-160 MAD for 2 seats). You can hire the whole taxi for from 400-500 MAD if traveling as a group.',
    stops: 'Direct from Fes (Bab Boujeloud area) to Chefchaouen',
  },
  {
    name: 'Shared Minivan',
    icon: Bus,
    duration: '3h 30min - 4h',
    price: 'From 60-70 MAD per person',
    frequency: 'Morning departures, depart when full',
    comfort: 'Basic',
    bestFor: 'Very budget-conscious travelers',
    description:
      'Shared minivans operate from the same area as grand taxis near Bab Boujeloud and from other transit points in Fes. These are typically Toyota HiAce or similar vehicles that carry 12-15 passengers. The ride is less comfortable than a CTM bus but cheaper. Some minivans go directly to Chefchaouen while others require a change at Ouezzane, the midpoint town on the route. The minivan route can be longer as drivers may make detours to drop passengers in smaller towns along the way. This is the most local and authentic transport experience but least predictable in terms of timing.',
    bookingTip:
      'Minivans do not have a fixed schedule. Show up at the departure point in the morning and ask around. Be prepared to wait until the vehicle fills. Negotiate and confirm the final destination (some only go to Ouezzane, where you would need to find another minivan). Keep your luggage close. This option is best for adventurous travelers comfortable with uncertainty.',
    stops: 'Fes - Various stops - Ouezzane (possible change) - Chefchaouen',
  },
  {
    name: 'Private Transfer',
    icon: Navigation,
    duration: '3 hours',
    price: 'From 800-1,500 MAD (entire vehicle)',
    frequency: 'On demand',
    comfort: 'Excellent',
    bestFor: 'Families, groups, comfort seekers, photography stops',
    description:
      'A private transfer is the most comfortable and flexible way to travel from Fes to Chefchaouen. A professional driver in a modern, air-conditioned vehicle picks you up directly from your riad or hotel in Fes and drives you to your accommodation in Chefchaouen. The major advantage is the ability to stop along the way for photos, particularly at scenic viewpoints in the Rif Mountains where the landscape is spectacular. Many drivers can point out local landmarks and share information about the Rif region. A private transfer for 3-4 passengers can be surprisingly cost-effective when split between the group.',
    bookingTip:
      'Book through your riad or hotel in Fes, reputable transfer companies, or through platforms like GetYourGuide. Confirm the total price including fuel and tolls before booking. Ask for a vehicle with good suspension as the mountain roads can be bumpy. Request a stop at one of the Rif Mountain viewpoints for photos. For the best deal, share with other travelers from your riad.',
    stops: 'Door-to-door, with optional scenic stops',
  },
  {
    name: 'Rental Car / Self-Drive',
    icon: Car,
    duration: '3h 30min (direct) / 5h+ (scenic)',
    price: 'From 250 MAD/day + fuel',
    frequency: 'Flexible',
    comfort: 'Depends on vehicle',
    bestFor: 'Independent travelers, photography enthusiasts, onward travel',
    description:
      'Driving from Fes to Chefchaouen offers the most flexibility and the opportunity to explore the stunning Rif Mountain landscapes at your own pace. There are two main routes: the direct route via Ouezzane (about 210 km, 3h 30min) and the more scenic route via Ketama and the higher Rif passes (longer but more dramatic). The direct route follows the N13 south of the Rif before turning north through Ouezzane and climbing into the mountains for the final approach to Chefchaouen. Roads are paved but winding, especially the last 60 km. A rental car is particularly useful if you plan to continue from Chefchaouen to Tangier or other northern destinations.',
    bookingTip:
      'Rent a car in Fes from agencies near Fes Ville Nouvelle or at the airport. Choose a vehicle with good ground clearance for mountain roads. Fill up in Fes as fuel stations become scarce in the mountains. Download offline maps (Google Maps or Maps.me) as mobile coverage is patchy in the Rif. Be prepared for narrow roads, sharp curves, and the occasional goat or donkey. Parking in Chefchaouen is available near the medina walls. Do not drive at night in the mountains.',
    stops: 'Self-paced: Fes - Ouezzane - Rif Mountain viewpoints - Chefchaouen',
  },
] as const;

/* ===============================================================
   DATA: SCENIC ROUTE INFO
   =============================================================== */

const scenicRouteInfo = {
  title: 'The Scenic Route vs. The Direct Route',
  routes: [
    {
      name: 'Direct Route via Ouezzane',
      icon: Route,
      distance: '210 km',
      time: '3h 30min',
      description:
        'The standard route follows the N13 from Fes southwest before heading north through the agricultural town of Ouezzane. From Ouezzane, the road climbs into the Rif Mountains with increasingly tight switchbacks and dramatic valley views. This is the route taken by buses and grand taxis. The road is fully paved and well-maintained, though the mountain section requires careful driving. Ouezzane itself is an interesting small town with a historic medina if you want a quick stop.',
    },
    {
      name: 'Scenic Rif Mountain Route',
      icon: Mountain,
      distance: '280+ km',
      time: '5-6 hours',
      description:
        'The longer scenic route takes you deeper into the Rif Mountains via Taounate and the higher passes. This route offers more dramatic mountain scenery, terraced hillsides, traditional Rif villages, and vast panoramas. It is significantly longer and slower but rewarding for photography and adventure. The roads are narrower and steeper, so a comfortable car with good brakes is essential. This route is best reserved for experienced drivers comfortable with mountain roads and who have a full day to spare.',
    },
  ],
};

/* ===============================================================
   DATA: COMPARISON TABLE
   =============================================================== */

const comparisonData = [
  { option: 'CTM Bus', time: '4 hours', price: 'From 75 MAD', comfort: 4, reliability: 4 },
  { option: 'Grand Taxi', time: '3 hours', price: 'From 70 MAD/person', comfort: 2, reliability: 3 },
  { option: 'Shared Minivan', time: '3.5-4 hours', price: 'From 60 MAD/person', comfort: 1, reliability: 2 },
  { option: 'Private Transfer', time: '3 hours', price: 'From 800 MAD', comfort: 5, reliability: 5 },
  { option: 'Rental Car', time: '3.5 hours', price: 'From 250 MAD/day', comfort: 4, reliability: 4 },
] as const;

/* ===============================================================
   DATA: TRAVELER RECOMMENDATIONS
   =============================================================== */

const travelerRecommendations = [
  {
    type: 'Budget Backpackers',
    icon: Luggage,
    recommendation: 'CTM Bus',
    reason: 'At from 75 MAD, the CTM bus offers the best balance of price, comfort, and reliability for budget travelers. You get air conditioning, assigned seating, and a fixed schedule. Grand taxis are cheaper and faster but less comfortable. Book the morning departure for the best experience.',
  },
  {
    type: 'Families with Children',
    icon: Users,
    recommendation: 'Private Transfer',
    reason: 'A private transfer (from 800 MAD for the vehicle) is the easiest option with young children. The mountain roads can cause motion sickness, and having a private vehicle means you can stop whenever needed. Split the cost with another family and it becomes very affordable. Avoid grand taxis and minivans with children.',
  },
  {
    type: 'Solo Travelers',
    icon: ShieldCheck,
    recommendation: 'CTM Bus',
    reason: 'The CTM bus is safe, reliable, and comfortable for solo travelers. You will arrive at a known location in Chefchaouen and can easily get a petit taxi to your riad. Grand taxis are also fine for solo travelers who enjoy a more local experience. Avoid shared minivans traveling alone unless you are experienced in Morocco.',
  },
  {
    type: 'Photography Enthusiasts',
    icon: Camera,
    recommendation: 'Private Transfer or Rental Car',
    reason: 'The Rif Mountain landscapes between Fes and Chefchaouen are stunning. A private transfer allows you to request photo stops at scenic viewpoints, while a rental car gives complete freedom to explore at your pace. The morning light on the mountains is particularly beautiful. Neither buses nor taxis make scenic stops.',
  },
  {
    type: 'Couples & First-Timers',
    icon: Heart,
    recommendation: 'CTM Bus or Private Transfer',
    reason: 'First-time visitors will appreciate the reliability and comfort of the CTM bus. For couples wanting a more romantic experience, a private transfer with mountain viewpoint stops creates lasting memories. The arrival into the Blue City from the mountain road is magical in both cases.',
  },
] as const;

/* ===============================================================
   DATA: PRO TIPS
   =============================================================== */

const proTips = [
  {
    icon: Timer,
    title: 'Best Time to Travel',
    tip: 'Take the morning CTM bus or leave for the taxi stand by 8:00 AM for the quickest departure. This gives you an afternoon arrival in Chefchaouen with time to explore. The afternoon bus arrives near sunset, which can be beautiful but leaves less time for orientation.',
  },
  {
    icon: Eye,
    title: 'Motion Sickness Warning',
    tip: 'The mountain roads between Ouezzane and Chefchaouen are very winding with many hairpin turns. If you are prone to motion sickness, take medication before departure, sit in the front of the bus or taxi, and keep your eyes on the horizon. Have a bag ready just in case.',
  },
  {
    icon: Coffee,
    title: 'Arriving in Chefchaouen',
    tip: 'The bus station and grand taxi stand are outside the medina, about a 15-minute walk downhill (or uphill if you are coming from below). Petit taxis charge from 10-15 MAD to the medina entrance. The main medina gate is Bab el-Ain. Most riads will provide directions or can arrange a porter for your luggage through the car-free medina streets.',
  },
  {
    icon: Sun,
    title: 'Weather Differences',
    tip: 'Chefchaouen sits at 600m altitude in the Rif Mountains and is noticeably cooler than Fes, especially at night. Pack a light jacket even in summer. In winter, temperatures can drop near freezing. Fog and rain are common in the mountains from November to March.',
  },
  {
    icon: CreditCard,
    title: 'Cash is King',
    tip: 'Grand taxis and minivans are cash only. CTM accepts cards online but not always at the station. Withdraw cash in Fes before departure as ATMs in Chefchaouen can be unreliable during busy periods. Have small denominations ready for the petit taxi in Chefchaouen.',
  },
  {
    icon: Globe,
    title: 'Day Trip Warning',
    tip: 'While technically possible as a day trip from Fes, the 4-hour journey each way makes it inadvisable. You would spend 8 hours in transit for only a few hours in the Blue City. Spend at least one night to properly enjoy Chefchaouen and its magical blue streets in the morning and evening light.',
  },
] as const;

/* ===============================================================
   DATA: RELATED GUIDES
   =============================================================== */

const relatedGuides = [
  { title: 'Chefchaouen City Guide', href: '/chefchaouen', description: 'Complete guide to Morocco\'s famous Blue City' },
  { title: 'Fes Travel Guide', href: '/fes', description: 'Where to stay, eat, and explore in Fes' },
  { title: 'Tangier to Chefchaouen', href: '/tangier-to-chefchaouen', description: 'Getting to Chefchaouen from Tangier' },
  { title: 'Morocco Transport Guide', href: '/transport', description: 'Overview of all transport options in Morocco' },
  { title: 'Things to Do in Chefchaouen', href: '/things-to-do-chefchaouen', description: 'Best activities and attractions in the Blue City' },
  { title: 'Budget Travel Morocco', href: '/budget-travel', description: 'Tips for traveling Morocco on a budget' },
] as const;

/* ===============================================================
   PAGE COMPONENT
   =============================================================== */

export default function FesToChefchaouenPage() {
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
          alt="Blue-painted streets of Chefchaouen medina in the Rif Mountains of Morocco"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <div className="flex items-center gap-2 text-white/90 text-sm mb-4 font-[family-name:var(--font-heading)]">
            <Bus className="w-5 h-5" />
            <span>Morocco Transport Guide</span>
          </div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-white max-w-4xl leading-tight drop-shadow-lg">
            Fes to Chefchaouen
          </h1>
          <p className="mt-4 text-white/90 text-lg md:text-xl max-w-2xl font-[family-name:var(--font-heading)]">
            210 km | No direct train | Bus, taxi & driving options for 2026
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
            <span className="text-[#A0522D]">Fes to Chefchaouen</span>
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
              Getting from Fes to Chefchaouen
            </h2>
          </div>
          <div className="prose prose-lg max-w-none text-gray-700 font-[family-name:var(--font-heading)] space-y-4">
            <p>
              The journey from Fes to Chefchaouen takes you from Morocco&apos;s grandest imperial city to its most
              photogenic mountain town. The famous Blue City sits at 600 meters altitude in the Rif Mountains, about
              210 km northwest of Fes, and the route between the two passes through some of the most beautiful
              landscapes in northern Morocco.
            </p>
            <p>
              There is no direct train to Chefchaouen, as the mountain town has no railway station. Instead, travelers
              choose between CTM buses, shared grand taxis, private transfers, minivans, or renting a car. Each option
              has distinct advantages depending on your budget, comfort needs, and desire for scenic stops. The mountain
              roads are winding but well-maintained, and the final approach to Chefchaouen through the Rif foothills is
              genuinely spectacular.
            </p>
            <p>
              This guide covers every transport option with current 2026 prices, practical booking tips, and advice on
              which choice is best for different types of travelers. We also compare the direct route via Ouezzane with
              the longer scenic route through the higher Rif passes.
            </p>
          </div>

          {/* No Train Warning */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800 font-[family-name:var(--font-heading)]">No Direct Train Available</p>
              <p className="text-amber-700 text-sm font-[family-name:var(--font-heading)]">
                Chefchaouen has no railway station. The closest train station is Fes. You must take a bus, taxi, private
                transfer, or drive. Do not be misled by outdated online information suggesting a train connection.
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

      {/* ── SCENIC VS DIRECT ROUTE ── */}
      <section className="bg-white py-12">
        <div className="container-morocco">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#C4960C]/10 flex items-center justify-center">
                <Mountain className="w-5 h-5 text-[#C4960C]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl text-gray-900">{scenicRouteInfo.title}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {scenicRouteInfo.routes.map((route) => {
                const Icon = route.icon;
                return (
                  <div key={route.name} className="card-moroccan p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon className="w-6 h-6 text-[#A0522D]" />
                      <h3 className="font-[family-name:var(--font-display)] text-lg text-gray-900">{route.name}</h3>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-500 font-[family-name:var(--font-heading)] mb-3">
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {route.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {route.time}</span>
                    </div>
                    <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed text-sm">{route.description}</p>
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

      {/* ── DRIVING ROUTE DETAILS ── */}
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
              The drive from Fes to Chefchaouen begins on the N13 heading north from Fes, passing through the flat
              agricultural Saiss Plain. After about 130 km, you reach Ouezzane, a traditional market town where you
              turn north toward the Rif Mountains. The final 80 km is the most scenic and challenging section, with
              the road climbing through forested hills, passing small Rif villages, and offering spectacular valley views.
            </p>
            <p>
              <strong>Road conditions:</strong> All roads are paved but the mountain section has tight curves and
              occasional rockfall areas. Drive defensively and respect speed limits on curves. The road surface is
              generally good but can be wet and slippery in the rainy season (November-March).
            </p>
            <p>
              <strong>Fuel:</strong> Fill up in Fes before departing. There are fuel stations in Ouezzane but
              options become very limited in the mountains. Fuel costs approximately 12-14 MAD per liter for diesel
              and 15-17 MAD per liter for gasoline. Budget approximately 150-200 MAD for fuel on this trip depending
              on your vehicle.
            </p>
            <p>
              <strong>Parking in Chefchaouen:</strong> A large parking area is available near the medina walls
              (from 10-20 MAD per day). Your riad may also have nearby parking arrangements. The medina itself is
              completely car-free.
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
            Explore the Blue City
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto font-[family-name:var(--font-heading)] mb-8">
            Chefchaouen awaits with its blue-painted streets, mountain views, and authentic Rif culture.
            Start planning your visit today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/chefchaouen"
              className="inline-flex items-center gap-2 bg-white text-[#A0522D] px-6 py-3 rounded-xl font-semibold hover:bg-white/90 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Chefchaouen
            </Link>
            <Link
              href="/fes"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition font-[family-name:var(--font-heading)]"
            >
              <MapPin className="w-5 h-5" /> Explore Fes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

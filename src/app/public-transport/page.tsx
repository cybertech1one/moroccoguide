import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  TrainFront,
  Bus,
  Car,
  Navigation,
  ArrowRight,
  Clock,
  MapPin,
  Smartphone,
  AlertTriangle,
  CheckCircle,
  Info,
  Shield,
  Star,
  Route,
  Ticket,
  Coins,
  Phone,
  Globe,
  Zap,
  Users,
  Gauge,
  Luggage,
  CreditCard,
  Fuel,
  BookOpen,
} from 'lucide-react';
import ExploreMore from '@/components/sections/ExploreMore';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/public-transport`;

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Public Transport Guide 2025-2026 | Trains, Buses, Taxis & Prices | CityGuide',
  description:
    'Complete guide to public transport in Morocco. ONCF trains, Al Boraq high-speed rail, CTM and Supratours buses, grand taxis, petit taxis, city buses, ride-hailing apps, car rental, and airport transfers. All prices in MAD with practical tips for tourists and locals.',
  keywords: [
    'Morocco public transport',
    'Morocco train',
    'ONCF Morocco',
    'Al Boraq high speed train',
    'CTM bus Morocco',
    'Supratours bus Morocco',
    'grand taxi Morocco',
    'petit taxi Morocco',
    'Morocco city bus',
    'inDrive Morocco',
    'Careem Morocco',
    'car rental Morocco',
    'Morocco airport transfer',
    'getting around Morocco',
    'Morocco transport prices',
    'Casablanca tram',
    'Rabat tram',
    'Morocco taxi colors',
  ],
  openGraph: {
    title: 'Morocco Public Transport Guide - CityGuide',
    description:
      'Everything you need to know about trains, buses, taxis, ride-hailing, and car rental in Morocco. Real prices in MAD.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-al-boraq-train.webp`,
        width: 1200,
        height: 630,
        alt: 'Al Boraq high-speed train in Morocco traveling through green landscape',
      },
    ],
  },
  alternates: { canonical: PAGE_URL },
};

/* ===================================================================
   JSON-LD
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Morocco Public Transport Guide',
  description:
    'Complete guide to public transport in Morocco including trains, buses, taxis, ride-hailing apps, and car rental with full pricing in MAD.',
  url: PAGE_URL,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Public Transport', item: PAGE_URL },
    ],
  },
};

/* ===================================================================
   DATA: TRAIN ROUTES
   =================================================================== */

const trainRoutes = [
  { from: 'Casablanca', to: 'Marrakech', duration: '2h 45min', price: 'from 100 MAD', frequency: 'Every 2 hours', type: 'Regular' },
  { from: 'Casablanca', to: 'Rabat', duration: '1h', price: 'from 45 MAD', frequency: 'Every 30 min', type: 'Regular' },
  { from: 'Casablanca', to: 'Fes', duration: '3h 30min', price: 'from 130 MAD', frequency: 'Every 2 hours', type: 'Regular' },
  { from: 'Casablanca', to: 'Tangier', duration: '2h 10min', price: 'from 200 MAD', frequency: '7 daily', type: 'Al Boraq' },
  { from: 'Casablanca', to: 'Meknes', duration: '2h 45min', price: 'from 100 MAD', frequency: 'Every 2 hours', type: 'Regular' },
  { from: 'Marrakech', to: 'Rabat', duration: '3h 45min', price: 'from 130 MAD', frequency: 'Every 2 hours', type: 'Regular' },
  { from: 'Rabat', to: 'Fes', duration: '2h 30min', price: 'from 100 MAD', frequency: 'Every 2 hours', type: 'Regular' },
  { from: 'Fes', to: 'Meknes', duration: '45min', price: 'from 25 MAD', frequency: 'Frequent', type: 'Regular' },
  { from: 'Tangier', to: 'Kenitra', duration: '1h 20min', price: 'from 120 MAD', frequency: '7 daily', type: 'Al Boraq' },
  { from: 'Casablanca', to: 'Oujda', duration: '6h', price: 'from 200 MAD', frequency: '3-4 daily', type: 'Regular' },
];

/* ===================================================================
   DATA: BUS COMPANIES
   =================================================================== */

const busCompanies = [
  {
    name: 'CTM',
    type: 'Premium',
    description: 'Morocco\'s state-owned premium bus company. Reliable, air-conditioned coaches with fixed schedules and assigned seats. The most comfortable option for long-distance travel. Luggage is weighed and stored below.',
    routes: [
      { route: 'Casablanca - Marrakech', price: 'from 80 MAD', duration: '3h 30min' },
      { route: 'Marrakech - Essaouira', price: 'from 70 MAD', duration: '2h 30min' },
      { route: 'Fes - Chefchaouen', price: 'from 75 MAD', duration: '4h' },
      { route: 'Casablanca - Fes', price: 'from 100 MAD', duration: '4h 30min' },
      { route: 'Marrakech - Ouarzazate', price: 'from 90 MAD', duration: '4h' },
    ],
    booking: 'ctm.ma or at bus station ticket offices',
    tips: 'Book online 2-3 days ahead for popular routes. Arrive 30 minutes early. Bring a sweater -- AC is aggressive.',
  },
  {
    name: 'Supratours',
    type: 'Premium',
    description: 'Operated by ONCF (the railway company) as connecting bus services from train stations to cities not reached by rail. Equally comfortable as CTM. Coordinates schedules with train arrivals.',
    routes: [
      { route: 'Marrakech - Essaouira', price: 'from 70 MAD', duration: '2h 30min' },
      { route: 'Agadir - Essaouira', price: 'from 90 MAD', duration: '3h' },
      { route: 'Marrakech - Ouarzazate', price: 'from 85 MAD', duration: '4h' },
      { route: 'Nador - Fes', price: 'from 120 MAD', duration: '5h' },
      { route: 'Tiznit - Agadir', price: 'from 40 MAD', duration: '1h 30min' },
    ],
    booking: 'oncf.ma or at train stations',
    tips: 'Buses depart from adjacent to the train station. Great for reaching Essaouira, Ouarzazate, and the Sahara.',
  },
  {
    name: 'Local Companies',
    type: 'Budget',
    description: 'Numerous private bus companies operate on all routes at lower prices. Less comfortable but much more frequent, especially on rural routes. Companies include SATAS, Trans Ghazala, and dozens of regional operators.',
    routes: [
      { route: 'Any major city pair', price: '30-70% less than CTM', duration: 'Similar or slightly longer' },
    ],
    booking: 'At the bus station (gare routiere) only -- no online booking',
    tips: 'Quality varies wildly. Good for short hops and rural routes. Some do not have AC. Departure times can be flexible.',
  },
];

/* ===================================================================
   DATA: TAXI INFO
   =================================================================== */

const petitTaxiColors = [
  { city: 'Marrakech', color: 'Beige/Sand', meter: 'Sometimes', flagDrop: '2.50 MAD', perKm: 'from 3 MAD', note: 'Insist on the meter. Short rides within the medina area should be from 10 MAD.' },
  { city: 'Casablanca', color: 'Red', meter: 'Usually', flagDrop: '2.50 MAD', perKm: 'from 3 MAD', note: 'Largest city, meters are more common. Night supplement of 50% after 8 PM.' },
  { city: 'Fes', color: 'Red', meter: 'Sometimes', flagDrop: '2.50 MAD', perKm: 'from 3 MAD', note: 'Taxis cannot enter the medina. They drop you at the gates (Bab).' },
  { city: 'Rabat', color: 'Blue', meter: 'Usually', flagDrop: '2.50 MAD', perKm: 'from 3 MAD', note: 'Most regulated taxis in Morocco. Meters are standard.' },
  { city: 'Tangier', color: 'Light Blue', meter: 'Sometimes', flagDrop: '2.50 MAD', perKm: 'from 3 MAD', note: 'Negotiate before getting in if driver refuses the meter.' },
  { city: 'Essaouira', color: 'Blue', meter: 'Rarely', flagDrop: 'N/A', perKm: 'N/A', note: 'Compact city -- most rides are from 10 MAD flat. Walking is usually easier.' },
  { city: 'Agadir', color: 'Orange', meter: 'Usually', flagDrop: '2.50 MAD', perKm: 'from 3 MAD', note: 'Modern city, meters are common. 50% night supplement.' },
  { city: 'Chefchaouen', color: 'Blue/Green', meter: 'Rarely', flagDrop: 'N/A', perKm: 'N/A', note: 'Very small town. Most rides 10 MAD. You can walk everywhere.' },
];

const grandTaxiRoutes = [
  { route: 'Marrakech - Essaouira', price: 'from 70 MAD/person', duration: '2h 30min', note: 'Mercedes sedans, 6 passengers. Depart when full.' },
  { route: 'Fes - Chefchaouen', price: 'from 60 MAD/person', duration: '3h 30min', note: 'Beautiful mountain route. Can buy extra seats for comfort.' },
  { route: 'Fes - Meknes', price: 'from 25 MAD/person', duration: '1h', note: 'Very frequent. Depart from near the train station.' },
  { route: 'Marrakech - Atlas Mountains', price: 'from 40 MAD/person', duration: '1h 30min', note: 'To Imlil or Ourika Valley. Shared taxis from medina.' },
  { route: 'Casablanca Airport - City', price: 'from 250 MAD (whole taxi)', duration: '30min', note: 'Fixed price. Negotiate before departure.' },
  { route: 'Tangier - Chefchaouen', price: 'from 60 MAD/person', duration: '2h 30min', note: 'Scenic route through Rif Mountains.' },
];

/* ===================================================================
   DATA: RIDE HAILING
   =================================================================== */

const rideApps = [
  {
    name: 'inDrive',
    description: 'The most popular ride-hailing app in Morocco. Works differently from Uber -- you propose a price and drivers accept or counter-offer. Generally 20-40% cheaper than petit taxis.',
    cities: 'Casablanca, Marrakech, Rabat, Tangier, Agadir, Fes',
    tip: 'Set your price at 60-70% of what a taxi would charge. Drivers usually accept or counter slightly higher.',
  },
  {
    name: 'Careem',
    description: 'A Dubai-based ride-hailing service (now owned by Uber). Fixed pricing, no negotiation needed. More expensive than inDrive but more predictable.',
    cities: 'Casablanca, Rabat, Marrakech (limited)',
    tip: 'Best for airport transfers where you want a fixed price and no haggling.',
  },
  {
    name: 'Heetch',
    description: 'A French ride-hailing app gaining popularity in Morocco. Works similarly to Uber with fixed pricing. Growing but not yet available everywhere.',
    cities: 'Casablanca, Rabat',
    tip: 'Good alternative in Casablanca where it has the most drivers.',
  },
];

/* ===================================================================
   DATA: CAR RENTAL
   =================================================================== */

const carRentalInfo = {
  avgPrice: 'from 200 MAD/day for economy, from 500 MAD/day for SUV',
  requirements: [
    'Valid international driving license (IDP) -- technically required, but your home license often works',
    'Minimum age 21 (some companies require 25)',
    'Credit card for deposit (from 1,500 MAD hold)',
    'Passport',
  ],
  companies: ['Europcar', 'Hertz', 'Avis', 'Budget', 'Local companies (often cheaper)'],
  tips: [
    'Book online in advance for better rates -- airport desks charge 30-50% more',
    'Take photos and video of the car before accepting it -- document every scratch',
    'Always get full insurance (CDW + theft protection) -- roads can be unpredictable',
    'Fuel is around from 14 MAD/liter for diesel, from 16 MAD for petrol',
    'Driving style in cities is aggressive -- honking is communication, not anger',
    'Mountain roads (Atlas passes) require confident driving -- hairpin turns, slow trucks, no guardrails',
    'Police checkpoints are routine -- keep documents accessible and be polite',
    'Parking: most cities have paid parking with attendants (from 2 MAD). Always tip the attendant.',
    'Avoid driving at night in rural areas -- unlit roads, pedestrians, donkeys',
  ],
};

/* ===================================================================
   DATA: CITY TRANSIT
   =================================================================== */

const cityTransit = [
  {
    city: 'Casablanca',
    systems: [
      { name: 'Tramway (Casa Tram)', detail: 'Two lines serving the city center, connecting Casa-Voyageurs station to residential areas. 7 MAD per ride. Clean, modern, and efficient. Runs 5:30 AM to 10:30 PM.' },
      { name: 'City Buses', detail: 'Extensive network but can be crowded and confusing for visitors. From 4 MAD per ride. The M\'Dina Bus fleet is newer and more reliable.' },
    ],
  },
  {
    city: 'Rabat',
    systems: [
      { name: 'Tramway (Rabat-Sale)', detail: 'Two lines connecting Rabat with neighboring Sale across the river. 6 MAD per ride. Modern and reliable. Connects key landmarks including Hassan Tower area.' },
      { name: 'City Buses', detail: 'STAREO operates the city bus network. Useful for reaching outlying neighborhoods. From 4 MAD per ride.' },
    ],
  },
  {
    city: 'Marrakech',
    systems: [
      { name: 'ALSA City Buses', detail: 'Spanish-operated bus network with modern buses on major routes. Bus 19 connects the airport to Jemaa el-Fnaa (30 MAD). Other routes from 4 MAD.' },
      { name: 'Horse-drawn Carriages (Caleches)', detail: 'Tourist experience, not real transport. Fixed rate of from 150 MAD per hour. Agree on price and duration before boarding. Ride through Palmerie or around the ramparts.' },
    ],
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function PublicTransportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="container-morocco pt-4 pb-2">
        <ol className="flex items-center gap-2 text-sm text-text-muted">
          <li>
            <Link href="/" className="hover:text-primary transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" /> Home
            </Link>
          </li>
          <li><ChevronRight className="w-3.5 h-3.5" /></li>
          <li className="text-text-primary font-medium">Public Transport</li>
        </ol>
      </nav>

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/hero-al-boraq-train.webp"
            alt="Morocco Al Boraq high-speed train traveling through green landscape"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Getting Around
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Public Transport Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Africa&apos;s only high-speed train to the legendary grand taxis, Morocco has a transport network
              that can get you anywhere -- if you know how to use it. Trains, buses, taxis, apps, and car rental
              with real prices in MAD.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <div className="container-morocco">
        <p className="text-xs text-[var(--text-muted)] italic py-2 text-center">All prices are approximate and may vary by season, location, and operator.</p>
      </div>

      {/* ============================================================
          QUICK STATS
          ============================================================ */}
      <section className="container-morocco -mt-8 relative z-10 mb-12">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Zap, label: 'Al Boraq Speed', value: '320 km/h' },
            { icon: Coins, label: 'Cheapest Taxi Ride', value: '10 MAD' },
            { icon: Route, label: 'ONCF Rail Network', value: '2,100 km' },
            { icon: Smartphone, label: 'Ride Apps', value: 'inDrive, Careem' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-[#A0522D]" />
              </div>
              <div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="font-semibold text-gray-900">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          TRAINS
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">ONCF Railway</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trains in Morocco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Morocco has Africa&apos;s first and only high-speed train (Al Boraq) and a reliable conventional rail network
            operated by ONCF connecting major cities. Trains are the most comfortable and reliable way to travel between
            the main urban centers.
          </p>
        </div>

        {/* Al Boraq highlight */}
        <div className="bg-gradient-to-r from-[#1a3a5c] to-[#2a5a8c] rounded-2xl p-6 md:p-8 text-white mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="md:w-2/3">
              <div className="flex items-center gap-2 mb-3">
                <Zap className="w-5 h-5 text-[#C4960C]" />
                <span className="text-[#C4960C] font-semibold text-sm uppercase tracking-wider">High-Speed Rail</span>
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold mb-3">Al Boraq</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                Launched in 2018, Al Boraq connects Tangier to Casablanca in just 2 hours 10 minutes at speeds up to
                320 km/h. Named after the mythical winged horse of Islamic tradition. The train has two classes:
                First Class (comfortable seats, power outlets, more legroom) and Economy (still comfortable, similar to
                European trains). Book online at oncf-voyages.ma.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/60 text-sm">Economy Class</p>
                  <p className="font-bold text-lg">200 MAD</p>
                </div>
                <div>
                  <p className="text-white/60 text-sm">First Class</p>
                  <p className="font-bold text-lg">300 MAD</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3">
              <img
                src="/images/poster-train-travel.webp"
                alt="Vintage-style poster illustrating Moroccan train travel"
                loading="lazy"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>

        {/* Regular train routes table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 flex items-center gap-2">
              <TrainFront className="w-5 h-5 text-[#A0522D]" />
              Popular Train Routes &amp; Prices
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FAF8F5]">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Route</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Duration</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Price</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Frequency</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Type</th>
                </tr>
              </thead>
              <tbody>
                {trainRoutes.map((route, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50">
                    <td className="p-3 font-medium text-gray-800">{route.from} - {route.to}</td>
                    <td className="p-3 text-gray-600">{route.duration}</td>
                    <td className="p-3 text-[#C4960C] font-medium">{route.price}</td>
                    <td className="p-3 text-gray-600">{route.frequency}</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${route.type === 'Al Boraq' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                        {route.type}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-[#FAF8F5] border-t border-gray-100">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-600">
                Prices shown are for 2nd class. 1st class is approximately 40-50% more. Book at
                <span className="font-medium"> oncf-voyages.ma</span> or at station ticket offices.
                Students get 25% discount with ONCF Carte Jeune.
              </p>
            </div>
          </div>
        </div>

        {/* Train tips */}
        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {[
            { icon: Ticket, title: 'Book Online', detail: 'Buy tickets on oncf-voyages.ma up to 30 days in advance. E-tickets accepted on your phone. Popular routes like Casa-Marrakech sell out on weekends.' },
            { icon: Luggage, title: 'Luggage', detail: 'No luggage limit on trains. Overhead racks and space between seats. Large suitcases can go in the luggage area at the end of each car.' },
            { icon: Clock, title: 'Arrive Early', detail: 'Trains are generally punctual. Arrive 15-20 minutes early. Platforms are announced on screens. Major stations: Casa-Voyageurs, Marrakech, Fes, Rabat-Ville.' },
          ].map((tip) => (
            <div key={tip.title} className="bg-white rounded-xl border border-gray-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <tip.icon className="w-5 h-5 text-[#A0522D]" />
                <h4 className="font-semibold text-gray-800">{tip.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{tip.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          BUSES
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Intercity Travel</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Buses: CTM, Supratours &amp; Local
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Buses reach every corner of Morocco, including places trains do not go -- Essaouira, Chefchaouen, Ouarzazate,
              the Sahara. CTM and Supratours are the premium options; local companies serve rural routes cheaply.
            </p>
          </div>

          <div className="space-y-6">
            {busCompanies.map((company) => (
              <div key={company.name} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-5 md:p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex items-center gap-3">
                      <Bus className="w-6 h-6 text-[#A0522D]" />
                      <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">{company.name}</h3>
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${company.type === 'Premium' ? 'bg-[#C4960C]/10 text-[#C4960C]' : 'bg-gray-100 text-gray-600'}`}>
                        {company.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{company.booking}</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">{company.description}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-[#FAF8F5]">
                      <tr>
                        <th className="text-left p-3 font-semibold text-gray-700">Route</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Price</th>
                        <th className="text-left p-3 font-semibold text-gray-700">Duration</th>
                      </tr>
                    </thead>
                    <tbody>
                      {company.routes.map((route, i) => (
                        <tr key={i} className="border-t border-gray-50">
                          <td className="p-3 font-medium text-gray-800">{route.route}</td>
                          <td className="p-3 text-[#C4960C] font-medium">{route.price}</td>
                          <td className="p-3 text-gray-600">{route.duration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-[#FAF8F5] border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600">{company.tips}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          GRAND TAXIS
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Shared Rides</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Grand Taxis (Intercity)
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Grand taxis are shared long-distance taxis, typically old Mercedes sedans that seat 6 passengers (3 in back, 2 in
            middle, 1 next to driver). They depart when full from designated stands. The fastest and most flexible intercity
            option after trains. You can pay for multiple seats for more comfort.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-[#FAF8F5]">
                <tr>
                  <th className="text-left p-3 font-semibold text-gray-700">Route</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Price/Person</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Duration</th>
                  <th className="text-left p-3 font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody>
                {grandTaxiRoutes.map((route, i) => (
                  <tr key={i} className="border-t border-gray-50 hover:bg-gray-50/50">
                    <td className="p-3 font-medium text-gray-800">{route.route}</td>
                    <td className="p-3 text-[#C4960C] font-medium">{route.price}</td>
                    <td className="p-3 text-gray-600">{route.duration}</td>
                    <td className="p-3 text-gray-500 text-xs">{route.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: CheckCircle, title: 'How it works', items: ['Go to the grand taxi stand (usually near the bus station)', 'Tell the dispatcher your destination', 'Wait for the taxi to fill up (6 passengers)', 'Pay on arrival or when the driver asks', 'You can buy 2 seats for comfort (pay double)'] },
            { icon: AlertTriangle, title: 'Important tips', items: ['Agree on the price BEFORE getting in', 'Grand taxis have fixed routes -- they will not deviate', 'They can be hot and cramped -- bring water', 'No luggage charge for bags in the trunk', 'Women traveling alone should request the front seat', 'Newer grand taxis are Dacia Lodgy vans (more comfortable)'] },
          ].map((col) => (
            <div key={col.title} className="bg-white rounded-xl border border-gray-100 p-5">
              <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-3">
                <col.icon className="w-5 h-5 text-[#A0522D]" />
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Star className="w-3 h-3 text-[#C4960C] mt-1.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          PETIT TAXIS
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">City Travel</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Petit Taxis (City Taxis)
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Every Moroccan city has its own color of petit taxi -- small cars that operate within city limits only.
              They use meters (in theory) and can carry up to 3 passengers. The cheapest way to get around cities
              apart from walking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {petitTaxiColors.map((taxi) => (
              <div key={taxi.city} className="bg-white rounded-xl border border-gray-100 p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#A0522D]" />
                  {taxi.city}
                </h3>
                <div className="space-y-1 text-sm">
                  <p><span className="text-gray-500">Color:</span> <span className="font-medium text-gray-800">{taxi.color}</span></p>
                  <p><span className="text-gray-500">Meter:</span> <span className="font-medium text-gray-800">{taxi.meter}</span></p>
                  {taxi.flagDrop !== 'N/A' && (
                    <p><span className="text-gray-500">Flag drop:</span> <span className="font-medium text-[#C4960C]">{taxi.flagDrop}</span></p>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">{taxi.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-6">
            <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-4">
              Petit Taxi Survival Guide
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Always insist on the meter (compteur). If they refuse, negotiate a price before getting in.',
                'Night supplement of 50% applies after 8 PM in most cities. This is legitimate.',
                'Maximum 3 passengers per petit taxi. For 4+ people you need a grand taxi.',
                'Taxis can pick up additional passengers going in the same direction. This is normal.',
                'In Marrakech and Fes, taxis cannot enter the medina. They stop at the gates (Bab).',
                'Always have small bills (10, 20, 50 MAD). Drivers often claim they cannot make change.',
              ].map((tip) => (
                <div key={tip} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-600">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RIDE HAILING
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">App-Based</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ride-Hailing Apps
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Uber does not operate in Morocco, but several alternatives are popular. These are especially useful
            for airport transfers and avoiding taxi negotiation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {rideApps.map((app) => (
            <div key={app.name} className="bg-white rounded-2xl border border-gray-100 p-6">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-5 h-5 text-[#A0522D]" />
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900">{app.name}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">{app.description}</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700"><span className="font-medium">Cities:</span> {app.cities}</p>
                </div>
                <div className="flex items-start gap-2 bg-[#FAF8F5] rounded-lg p-3">
                  <Star className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-gray-700">{app.tip}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          CITY TRANSIT
          ============================================================ */}
      <section className="py-12 md:py-16 bg-[#FAF8F5]">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Urban Networks</p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              City Buses &amp; Trams
            </h2>
          </div>

          <div className="space-y-6">
            {cityTransit.map((city) => (
              <div key={city.city} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#A0522D]" />
                  {city.city}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {city.systems.map((sys) => (
                    <div key={sys.name} className="bg-[#FAF8F5] rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2">{sys.name}</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{sys.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CAR RENTAL
          ============================================================ */}
      <section className="container-morocco py-12 md:py-16">
        <div className="text-center mb-12">
          <p className="text-[#A0522D] font-semibold text-sm uppercase tracking-widest mb-2">Self-Drive</p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Car Rental in Morocco
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Renting a car gives you maximum flexibility, especially for the Atlas Mountains, Sahara Desert, and coastal drives.
            Average price: {carRentalInfo.avgPrice}.
          </p>
        </div>

        <div className="relative rounded-2xl overflow-hidden mb-8">
          <img
            src="/images/hero-driving-morocco.webp"
            alt="Scenic road winding through the Atlas Mountains in Morocco"
            loading="lazy"
            className="w-full h-48 md:h-64 object-cover"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <CreditCard className="w-5 h-5 text-[#A0522D]" />
              Requirements
            </h3>
            <ul className="space-y-2">
              {carRentalInfo.requirements.map((req) => (
                <li key={req} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-gray-100 p-5">
            <h3 className="flex items-center gap-2 font-semibold text-gray-800 mb-4">
              <Globe className="w-5 h-5 text-[#A0522D]" />
              Companies
            </h3>
            <div className="flex flex-wrap gap-2">
              {carRentalInfo.companies.map((company) => (
                <span key={company} className="px-3 py-1 bg-[#FAF8F5] rounded-full text-sm text-gray-700 font-medium">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl border border-gray-100 p-6">
          <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-gray-900 mb-4">
            Driving Tips for Morocco
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {carRentalInfo.tips.map((tip) => (
              <div key={tip} className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-600">{tip}</p>
              </div>
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
            Plan Your Journey
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Know how to get around, now plan where to go. Explore our city guides, road trip itineraries,
            and day trip suggestions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cities"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-4 h-4" /> City Guides
            </Link>
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Route className="w-4 h-4" /> Road Trips
            </Link>
            <Link
              href="/transport"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <TrainFront className="w-4 h-4" /> Full Transport Guide
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          EXPLORE MORE
          ============================================================ */}
      <ExploreMore
        currentCategory="planning"
        currentHref="/public-transport"
        title="Continue Exploring Morocco"
      />
    </>
  );
}

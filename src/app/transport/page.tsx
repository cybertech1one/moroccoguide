import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Plane,
  TrainFront,
  Bus,
  Car,
  Navigation,
  Footprints,
  ArrowRight,
  Clock,
  DollarSign,
  MapPin,
  Smartphone,
  Fuel,
  AlertTriangle,
  CheckCircle,
  Info,
  Shield,
  Star,
  Route,
  Ticket,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Getting Around Morocco | Complete Transport Guide | CityGuide',
  description:
    'Comprehensive guide to transportation in Morocco. ONCF trains, Al Boraq high-speed rail, CTM & Supratours buses, grand taxis, petit taxis, domestic flights, ride-hailing apps, airport transfers, and full costs in MAD.',
  keywords: [
    'Morocco transport',
    'Morocco train',
    'Al Boraq high speed train',
    'ONCF Morocco',
    'CTM bus Morocco',
    'Supratours bus',
    'grand taxi Morocco',
    'petit taxi Morocco',
    'car rental Morocco',
    'Morocco domestic flights',
    'getting around Morocco',
    'inDrive Morocco',
    'Careem Morocco',
    'Morocco airport transfer',
    'Royal Air Maroc domestic',
    'negotiate taxi Morocco',
  ],
  openGraph: {
    title: 'Getting Around Morocco - Complete Transport Guide | CityGuide',
    description:
      'Everything you need to know about trains, buses, taxis, flights, ride-hailing apps, and car rental in Morocco with real costs in MAD.',
    url: 'https://citytoursmorocco.com/transport',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Train traveling through Moroccan landscape',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/transport' },
};

/* ===================================================================
   JSON-LD
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Getting Around Morocco | Transport Guide',
  description:
    'Comprehensive guide to transportation in Morocco including trains, buses, taxis, car rental, domestic flights, and ride-hailing apps with full pricing.',
  url: 'https://citytoursmorocco.com/transport',
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: 'https://citytoursmorocco.com' },
};

/* ===================================================================
   DATA
   =================================================================== */

const airports = [
  { code: 'CMN', name: 'Mohammed V International', city: 'Casablanca', hub: true, transfer: 'Train to Casa-Voyageurs (40 min, 60 MAD) or Casa-Port (50 min, 70 MAD). Grand taxi to city center 250-300 MAD fixed. CTM bus available.' },
  { code: 'RAK', name: 'Marrakech Menara', city: 'Marrakech', hub: true, transfer: 'Bus 19 to Jemaa el-Fnaa (30 min, 30 MAD). Petit taxi 70-100 MAD (insist on meter). inDrive/Careem 50-80 MAD. Only 6 km from the medina.' },
  { code: 'FEZ', name: 'Fes-Saiss', city: 'Fes', hub: false, transfer: 'Bus 16 to city center (45 min, 5 MAD). Grand taxi 120-150 MAD (negotiate beforehand). Airport is 15 km south of the medina.' },
  { code: 'TNG', name: 'Ibn Battouta', city: 'Tangier', hub: false, transfer: 'Grand taxi to city center 150-200 MAD. No public bus. Airport is 15 km from the city. Some hotels offer airport pickup.' },
  { code: 'AGA', name: 'Al Massira', city: 'Agadir', hub: false, transfer: 'Grand taxi 200-250 MAD to city center (25 km). Bus 22 available but infrequent. Most hotels arrange airport transfers for 150-250 MAD.' },
  { code: 'RBA', name: 'Rabat-Sale', city: 'Rabat', hub: false, transfer: 'Tram Line 2 connects to Rabat center (40 min, 6 MAD). Grand taxi 100-150 MAD. Airport is 10 km northeast of the city.' },
  { code: 'OUD', name: 'Angads', city: 'Oujda', hub: false, transfer: 'Grand taxi 50-80 MAD to city center (15 km). Limited public transport. Small airport with mostly domestic and European routes.' },
  { code: 'NDR', name: 'Nador International', city: 'Nador', hub: false, transfer: 'Grand taxi 100-150 MAD to Nador city. Also serves as gateway to Melilla (Spanish enclave). Limited transfer options.' },
  { code: 'ERH', name: 'Moulay Ali Cherif', city: 'Errachidia', hub: false, transfer: 'Grand taxi 50-80 MAD to city center. Small airport useful for reaching the Sahara region. Seasonal/limited flights.' },
];

const trainRoutes = [
  { route: 'Tangier \u2192 Casablanca', type: 'Al Boraq (High-Speed)', duration: '2h 15min', priceFirst: '250-330', priceSecond: '150-200', frequency: '12 daily' },
  { route: 'Casablanca \u2192 Rabat', type: 'Al Boraq / Conventional', duration: '50min / 1h 20min', priceFirst: '100-150', priceSecond: '60-90', frequency: '20+ daily' },
  { route: 'Casablanca \u2192 Marrakech', type: 'Conventional', duration: '3h', priceFirst: '160-200', priceSecond: '100-130', frequency: '9 daily' },
  { route: 'Casablanca \u2192 Fes', type: 'Conventional', duration: '3h 30min', priceFirst: '200-250', priceSecond: '130-160', frequency: '7 daily' },
  { route: 'Fes \u2192 Meknes', type: 'Conventional', duration: '45min', priceFirst: '50-70', priceSecond: '30-45', frequency: '10 daily' },
  { route: 'Rabat \u2192 Fes', type: 'Conventional', duration: '2h 30min', priceFirst: '150-190', priceSecond: '90-120', frequency: '7 daily' },
  { route: 'Casablanca \u2192 Oujda', type: 'Conventional', duration: '9h 30min', priceFirst: '300-350', priceSecond: '200-240', frequency: '2 daily' },
  { route: 'Casablanca \u2192 El Jadida', type: 'Conventional (Navette)', duration: '1h 30min', priceFirst: '70-90', priceSecond: '45-60', frequency: '6 daily' },
  { route: 'Fes \u2192 Oujda', type: 'Conventional', duration: '5h 30min', priceFirst: '180-220', priceSecond: '120-150', frequency: '3 daily' },
  { route: 'Casablanca \u2192 Tangier', type: 'Conventional (via Kenitra)', duration: '5h 30min', priceFirst: '200-250', priceSecond: '130-170', frequency: '4 daily' },
];

const busRoutes = [
  { route: 'Casablanca \u2192 Marrakech', operator: 'CTM', duration: '3h 30min', price: '90-120', frequency: '10+ daily' },
  { route: 'Marrakech \u2192 Essaouira', operator: 'Supratours', duration: '2h 30min', price: '80-100', frequency: '6 daily' },
  { route: 'Fes \u2192 Chefchaouen', operator: 'CTM', duration: '4h', price: '75-95', frequency: '3 daily' },
  { route: 'Marrakech \u2192 Ouarzazate', operator: 'Supratours/CTM', duration: '4h 30min', price: '100-130', frequency: '4 daily' },
  { route: 'Casablanca \u2192 Fes', operator: 'CTM', duration: '4h 30min', price: '120-150', frequency: '8 daily' },
  { route: 'Tangier \u2192 Chefchaouen', operator: 'CTM', duration: '3h', price: '60-80', frequency: '4 daily' },
  { route: 'Marrakech \u2192 Agadir', operator: 'CTM/Supratours', duration: '3h 30min', price: '100-130', frequency: '6 daily' },
  { route: 'Agadir \u2192 Tiznit', operator: 'CTM', duration: '1h 30min', price: '40-55', frequency: '5 daily' },
  { route: 'Fes \u2192 Merzouga/Rissani', operator: 'Supratours', duration: '8h', price: '160-200', frequency: '1 daily (overnight)' },
  { route: 'Marrakech \u2192 M\'Hamid', operator: 'CTM/Supratours', duration: '8h', price: '150-180', frequency: '1 daily' },
];

const grandTaxiFares = [
  { route: 'Marrakech \u2192 Essaouira', perSeat: '80', wholeTaxi: '480', time: '2.5 hours', notes: 'Frequent departures from Bab Doukkala station' },
  { route: 'Fes \u2192 Meknes', perSeat: '25', wholeTaxi: '150', time: '1 hour', notes: 'Very frequent, depart every 15-20 minutes' },
  { route: 'Fes \u2192 Chefchaouen', perSeat: '70', wholeTaxi: '420', time: '3.5 hours', notes: 'From the main gare routiere' },
  { route: 'Casablanca \u2192 Rabat', perSeat: '40', wholeTaxi: '240', time: '1.5 hours', notes: 'From Oulad Ziane station. Train is faster.' },
  { route: 'Agadir \u2192 Taroudant', perSeat: '30', wholeTaxi: '180', time: '1.5 hours', notes: 'From Inezgane grand taxi station' },
  { route: 'Marrakech \u2192 Ouarzazate', perSeat: '70', wholeTaxi: '420', time: '4 hours', notes: 'Via Tizi n\'Tichka. Dramatic mountain crossing.' },
  { route: 'Tangier \u2192 Tetouan', perSeat: '25', wholeTaxi: '150', time: '1 hour', notes: 'Frequent from Tangier bus station' },
  { route: 'Chefchaouen \u2192 Tetouan', perSeat: '35', wholeTaxi: '210', time: '1.5 hours', notes: 'Scenic mountain route through the Rif' },
  { route: 'Ouarzazate \u2192 Zagora', perSeat: '50', wholeTaxi: '300', time: '2.5 hours', notes: 'Through the Draa Valley palm oases' },
  { route: 'Meknes \u2192 Moulay Idriss', perSeat: '10', wholeTaxi: '60', time: '30 min', notes: 'Very short hop, good for day trip' },
];

const comparisonData = [
  { mode: 'Domestic Flight', speed: 'Fastest', cost: '400-1,500 MAD', comfort: 'High', coverage: 'Major cities only', bestFor: 'Long distances (Casa-Dakhla)', icon: Plane },
  { mode: 'Al Boraq Train', speed: 'Very Fast', cost: '150-330 MAD', comfort: 'Excellent', coverage: 'Tangier-Kenitra-Rabat-Casa', bestFor: 'Northern corridor', icon: TrainFront },
  { mode: 'ONCF Train', speed: 'Fast', cost: '30-250 MAD', comfort: 'Good-High', coverage: 'Main cities', bestFor: 'Casa-Marrakech, Casa-Fes', icon: TrainFront },
  { mode: 'CTM / Supratours', speed: 'Moderate', cost: '40-200 MAD', comfort: 'Good', coverage: 'Extensive', bestFor: 'Where trains don\'t go', icon: Bus },
  { mode: 'Grand Taxi', speed: 'Moderate', cost: '10-150 MAD/seat', comfort: 'Basic', coverage: 'Very extensive', bestFor: 'Small towns, short hops', icon: Car },
  { mode: 'Car Rental', speed: 'Flexible', cost: '200-800 MAD/day', comfort: 'High', coverage: 'Unlimited', bestFor: 'Atlas, desert, flexibility', icon: Car },
  { mode: 'Petit Taxi', speed: 'Varies', cost: '7-50 MAD', comfort: 'Basic', coverage: 'Within cities only', bestFor: 'City trips, short rides', icon: Navigation },
  { mode: 'Ride-Hailing Apps', speed: 'Varies', cost: '15-80 MAD', comfort: 'Good', coverage: 'Major cities', bestFor: 'Avoiding fare negotiation', icon: Smartphone },
];

const cityTaxiColors = [
  { city: 'Marrakech', color: 'Beige/Sand', hex: '#c2a878' },
  { city: 'Casablanca', color: 'Red', hex: '#c0392b' },
  { city: 'Fes', color: 'Red', hex: '#e74c3c' },
  { city: 'Rabat', color: 'Blue', hex: '#2980b9' },
  { city: 'Tangier', color: 'Aqua Blue', hex: '#1abc9c' },
  { city: 'Agadir', color: 'Orange', hex: '#e67e22' },
  { city: 'Meknes', color: 'Blue', hex: '#3498db' },
  { city: 'Essaouira', color: 'Dark Blue', hex: '#2c3e50' },
  { city: 'Chefchaouen', color: 'Blue', hex: '#3498db' },
  { city: 'Ouarzazate', color: 'Green', hex: '#27ae60' },
];

const domesticFlights = [
  { route: 'Casablanca \u2192 Marrakech', airline: 'RAM', duration: '45 min', price: '400-900 MAD', notes: 'Train is usually faster door-to-door' },
  { route: 'Casablanca \u2192 Agadir', airline: 'RAM / Air Arabia', duration: '1h', price: '500-1,200 MAD', notes: 'Saves 5+ hours vs driving' },
  { route: 'Casablanca \u2192 Fes', airline: 'RAM', duration: '50 min', price: '500-1,000 MAD', notes: 'Train is competitive (3.5 hours)' },
  { route: 'Casablanca \u2192 Oujda', airline: 'RAM / Air Arabia', duration: '1h 15min', price: '500-1,200 MAD', notes: 'Best option vs 10-hour train' },
  { route: 'Casablanca \u2192 Laayoune', airline: 'RAM', duration: '1h 30min', price: '600-1,500 MAD', notes: 'Only practical option for this distance' },
  { route: 'Casablanca \u2192 Dakhla', airline: 'RAM', duration: '2h', price: '800-1,500 MAD', notes: 'Essential. Driving is 1,700 km / 18 hours.' },
  { route: 'Casablanca \u2192 Nador', airline: 'RAM / Air Arabia', duration: '1h 10min', price: '500-1,100 MAD', notes: 'Good alternative to 7-hour bus' },
  { route: 'Casablanca \u2192 Ouarzazate', airline: 'RAM', duration: '1h', price: '600-1,300 MAD', notes: 'Saves the Tizi n\'Tichka drive if short on time' },
];

const negotiationTips = [
  {
    title: 'Know the going rate before you arrive',
    desc: 'Ask your hotel, riad host, or a local what the standard grand taxi fare is for your route. Prices are well-established and known to all locals. Having this number makes negotiation unnecessary in most cases.',
  },
  {
    title: 'Go to the official station',
    desc: 'Grand taxis at official stations (gare routiere, designated taxi ranks) charge standard fares. Taxis that approach you outside hotels or tourist areas always charge more. Walk to the station.',
  },
  {
    title: 'Pay per seat, not per taxi (unless you want privacy)',
    desc: 'The standard system is per-seat pricing. You pay for one seat (the cheapest option) and wait until the taxi fills with 6 passengers. To leave immediately, buy 2-3 seats. To have the whole taxi, buy all 6 seats.',
  },
  {
    title: 'Have exact change',
    desc: 'Pay with exact change or small bills. Drivers often claim not to have change, which effectively rounds up your fare. Keep a supply of 10 and 20 MAD notes.',
  },
  {
    title: 'Be firm but friendly',
    desc: 'If quoted an inflated price (usually for tourists), simply smile, state the correct price, and walk away. Another driver will offer the right price. Never argue or get angry. A polite "la shukran" (no thank you) works.',
  },
  {
    title: 'For petit taxis: insist on the meter',
    desc: 'Say "compteur, s\'il vous plait" (meter, please). Legal requirement in all cities. If the driver refuses, get out and take the next taxi. At night (after 8 PM), expect a 50% surcharge on the meter rate.',
  },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function TransportPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1600&q=80"
            alt="Moroccan railway through the landscape"
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
            <span className="text-white">Transport</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-semibold text-sm uppercase tracking-widest mb-4">
              Practical Guide
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Getting Around Morocco
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              From Africa&apos;s first high-speed train and luxury buses to shared grand taxis and ride-hailing apps. Every transport option with real costs in MAD, schedules, and practical tips.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          OVERVIEW
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Overview
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco offers a surprisingly diverse and well-connected transportation network that makes it easy for travelers to explore the country. Whether you are hopping between imperial cities on Africa&apos;s first high-speed train, winding through Atlas Mountain passes in a rental car, or sharing a grand taxi with locals heading to a rural market town, the journey is often as memorable as the destination itself.
            </p>
            <p>
              The key to navigating Morocco&apos;s transport system is understanding which mode best suits your route, budget, and comfort preferences. Major cities are linked by reliable trains and premium buses, while smaller towns and remote areas are served by an extensive network of shared taxis and local buses. Within cities, petit taxis and ride-hailing apps like inDrive and Careem offer convenient door-to-door service. This guide breaks down every option with real prices so you can plan your travels with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRANSPORT COMPARISON TABLE
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-8">
            Transport at a Glance
          </h2>
          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Mode</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Speed</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Cost</th>
                    <th className="text-left py-4 px-4 font-semibold text-[var(--text-primary)]">Comfort</th>
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
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.cost}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.comfort}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{row.bestFor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BY AIR
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Plane className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              By Air
            </h2>
          </div>

          {/* Airlines Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Royal Air Maroc (RAM)</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The national carrier operates the most domestic routes, connecting Casablanca to virtually every Moroccan airport. Fares range from 400 to 1,500 MAD depending on route, timing, and demand. Book at royalairmaroc.com or through the RAM app. Baggage allowance: 23 kg checked + 10 kg cabin on domestic flights.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>Most extensive domestic network (15+ destinations)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>Frequent loyalty program (Safar Flyer) for free upgrades</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Air Arabia Maroc</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                The budget alternative based in Casablanca, offering competitive fares on popular domestic routes. No-frills service with paid extras (meals, extra baggage). Book well in advance for fares as low as 300 MAD one-way. Baggage: 10 kg cabin only (checked bags extra, from 80 MAD).
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>Lowest fares when booked early (airarabia.com)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-green)] shrink-0 mt-0.5" />
                  <span>Good coverage of Casablanca-Agadir, Casablanca-Nador, Casablanca-Oujda</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Domestic Flight Routes */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Popular Domestic Flights &amp; Prices</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Airline</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Price Range</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {domesticFlights.map((f) => (
                    <tr key={f.route} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{f.route}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{f.airline}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)]">{f.duration}</td>
                      <td className="py-2.5 px-3 text-right text-[var(--text-secondary)]">{f.price}</td>
                      <td className="py-2.5 px-3 text-xs text-[var(--text-muted)]">{f.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Airport Transfers */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-[var(--color-primary)]" />
              Airport to City Transfers
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              How to get from each major airport to the city center with costs and options.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {airports.map((airport) => (
                <div
                  key={airport.code}
                  className="p-4 rounded-lg bg-[var(--surface-muted)]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center justify-center px-2 py-1 rounded-md bg-[var(--color-primary)] text-white text-xs font-bold shrink-0">
                      {airport.code}
                    </span>
                    <div>
                      <p className="font-semibold text-[var(--text-primary)] text-sm">{airport.city}</p>
                      {airport.hub && (
                        <span className="text-xs text-[var(--color-primary)] font-medium">Major Hub</span>
                      )}
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{airport.transfer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BY TRAIN (ONCF)
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <TrainFront className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              By Train (ONCF)
            </h2>
          </div>

          {/* Al Boraq Feature */}
          <div className="card-moroccan p-6 md:p-8 mb-8 border-l-4 border-[var(--color-primary)]">
            <div className="flex items-center gap-3 mb-4">
              <Star className="w-5 h-5 text-[var(--color-accent)]" />
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Al Boraq: Africa&apos;s First High-Speed Train</h3>
            </div>
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Launched in 2018, the <strong className="text-[var(--text-primary)]">Al Boraq</strong> connects Tangier to Casablanca in just 2 hours and 15 minutes at speeds up to 320 km/h, with stops at Kenitra and Rabat. This transformed what was a sluggish 5.5-hour train ride into a quick, comfortable journey.
              </p>
              <p>
                The service runs 12 departures daily in each direction. Trains are modern, French-built TGV sets with power outlets, fold-down tables, and spacious seating. First class offers wider seats, more legroom, and a quieter carriage. Second class is comfortable with reserved seating.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">First Class</p>
                <p className="text-lg font-bold text-[var(--color-primary)]">250-330 MAD</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Second Class</p>
                <p className="text-lg font-bold text-[var(--color-primary)]">150-200 MAD</p>
              </div>
              <div className="p-3 rounded-lg bg-[var(--surface-muted)] text-center">
                <p className="text-xs text-[var(--text-muted)] uppercase tracking-wider mb-1">Journey Time</p>
                <p className="text-lg font-bold text-[var(--color-primary)]">2h 15min</p>
              </div>
            </div>
          </div>

          {/* Conventional Trains */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">ONCF Conventional Train Network</h3>
            <div className="space-y-3 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Conventional ONCF trains run the main corridors: Tangier&ndash;Rabat&ndash;Casablanca&ndash;Marrakech and Fes&ndash;Meknes&ndash;Rabat&ndash;Casablanca, with branch lines to Oujda, Nador, and El Jadida. Trains offer <strong className="text-[var(--text-primary)]">First Class (Premi&egrave;re)</strong> with spacious reserved seating and air conditioning, and <strong className="text-[var(--text-primary)]">Second Class (Deuxi&egrave;me)</strong> which is comfortable and significantly cheaper.
              </p>
              <p>
                The network does not reach southern Morocco (Agadir, Ouarzazate, Essaouira, the Sahara). For these destinations, use Supratours buses which depart from ONCF train stations, making connections seamless.
              </p>
            </div>

            <h4 className="text-sm font-bold text-[var(--text-primary)] mb-3 uppercase tracking-wider">Routes, Prices &amp; Frequencies</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Type</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">1st Class</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">2nd Class</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {trainRoutes.map((r) => (
                    <tr key={r.route} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{r.route}</td>
                      <td className="py-2.5 px-3 text-[var(--text-secondary)] text-xs">{r.type}</td>
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

          {/* Train Tips */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Train Travel Tips</h3>
            <ul className="space-y-3 text-[var(--text-secondary)]">
              <li className="flex items-start gap-3">
                <Ticket className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Book Al Boraq tickets in advance at <strong className="text-[var(--text-primary)]">oncf.ma</strong> or the ONCF app. Seats are reserved and popular times sell out, especially Friday evenings and Sunday afternoons (weekend commuters).</span>
              </li>
              <li className="flex items-start gap-3">
                <DollarSign className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Second class is perfectly comfortable for journeys under 2 hours. First class is worth it for long rides (Casablanca-Oujda) for extra legroom, guaranteed quiet, and power outlets.</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Key stations: <strong className="text-[var(--text-primary)]">Casa-Voyageurs</strong> (main hub), <strong className="text-[var(--text-primary)]">Rabat Agdal</strong>, <strong className="text-[var(--text-primary)]">Tanger Ville</strong>, <strong className="text-[var(--text-primary)]">Marrakech</strong>, <strong className="text-[var(--text-primary)]">Fes</strong>. All have cafes, ATMs, luggage storage, and taxi ranks outside.</span>
              </li>
              <li className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Keep your ticket until you exit the station. Inspectors check on board, and some stations require tickets to pass through exit gates. Fines for traveling without a ticket: 200+ MAD.</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Conventional trains can run 15-30 minutes late. Al Boraq is generally punctual. Allow buffer time for connections, especially if catching a Supratours bus.</span>
              </li>
              <li className="flex items-start gap-3">
                <Smartphone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>The ONCF mobile app shows live schedules, allows ticket purchase, and has station maps. Download it before your trip. E-tickets on your phone are accepted on Al Boraq; paper tickets sometimes required on conventional trains.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          BY BUS
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Bus className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              By Bus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">CTM (Premium)</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Morocco&apos;s most established intercity bus company. CTM operates modern, air-conditioned coaches with reserved seating, luggage storage, USB charging, and occasional WiFi. Routes cover virtually every city and major town. Book at <strong className="text-[var(--text-primary)]">ctm.ma</strong> or at CTM stations.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><strong className="text-[var(--text-primary)]">Price range:</strong> 40-250 MAD depending on distance</li>
                <li><strong className="text-[var(--text-primary)]">Booking:</strong> Online (ctm.ma), at CTM stations, or by phone</li>
                <li><strong className="text-[var(--text-primary)]">Luggage:</strong> 5-10 MAD per checked bag. Keep valuables with you.</li>
                <li><strong className="text-[var(--text-primary)]">Comfort:</strong> A/C, reclining seats, rest stops every 2-3 hours</li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Supratours</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Operated by ONCF (the railway company), Supratours buses connect to destinations the train network does not reach. They depart from ONCF train stations, making train-bus connections seamless. Essential for Essaouira, Chefchaouen, Agadir, Ouarzazate, and desert towns.
              </p>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li><strong className="text-[var(--text-primary)]">Price range:</strong> 50-200 MAD</li>
                <li><strong className="text-[var(--text-primary)]">Booking:</strong> Supratours offices (at or near train stations), oncf.ma</li>
                <li><strong className="text-[var(--text-primary)]">Key routes:</strong> Marrakech-Essaouira, Casa-Agadir, Fes-Merzouga</li>
                <li><strong className="text-[var(--text-primary)]">Comfort:</strong> Similar quality to CTM with reliable schedules</li>
              </ul>
            </div>
          </div>

          {/* Bus Routes Table */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Popular Bus Routes &amp; Prices</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Operator</th>
                    <th className="text-left py-3 px-3 font-semibold text-[var(--text-primary)]">Duration</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Price (MAD)</th>
                    <th className="text-right py-3 px-3 font-semibold text-[var(--text-primary)]">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  {busRoutes.map((r) => (
                    <tr key={r.route + r.operator} className="border-b border-[var(--border-light)] last:border-0">
                      <td className="py-2.5 px-3 font-medium text-[var(--text-primary)]">{r.route}</td>
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

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Local Buses &amp; Tips</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Beyond CTM and Supratours, many private bus companies operate lower-cost services. These are significantly cheaper (sometimes half the price) but offer less comfort, less reliable schedules, and older vehicles. They depart from the main <strong className="text-[var(--text-primary)]">gare routiere</strong> (bus station) in each city.
            </p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Book CTM and Supratours tickets a day ahead during holidays (Aid el-Fitr, Aid el-Adha), summer months, and weekends.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Arrive at least 30 minutes before departure to check in luggage and find your seat.</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>Key bus stations: Gare Routiere Ouled Ziane (Casablanca), Bab Doukkala (Marrakech), Gare Routiere (Fes), Gare Routiere (Tangier).</span>
              </li>
              <li className="flex items-start gap-2">
                <Info className="w-4 h-4 text-[var(--color-primary)] shrink-0 mt-0.5" />
                <span>For overnight buses (Fes-Merzouga, Marrakech-M&apos;Hamid), bring a jacket. Moroccan bus drivers blast the A/C to arctic levels.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================================================
          BY GRAND TAXI
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              By Grand Taxi
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed mb-6">
              <p>
                Grand taxis are one of Morocco&apos;s most iconic and practical forms of intercity transport. Traditionally white Mercedes 240D sedans (though increasingly replaced by newer Dacia Logans and Renault Kangoo minivans), they operate on fixed routes between cities and towns, departing from designated stations when all seats are filled &mdash; typically 6 passengers in a sedan or 7-8 in a minivan.
              </p>
              <p>
                To use a grand taxi, head to the grand taxi station (usually near the bus station or a central square) and tell the dispatcher your destination. You pay for one seat and wait until the taxi fills. If you want more comfort or a faster departure, you can buy 2 seats (front seat alone) or pay for the entire taxi. Prices are fixed by route and known to locals. This is one of the most authentic Moroccan travel experiences and by far the best way to reach small towns not served by buses or trains.
              </p>
            </div>

            {/* Grand Taxi Fare Table */}
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
                  {grandTaxiFares.map((f) => (
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
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">How It Works</h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li>1. Go to the grand taxi station (ask for "station de grand taxi")</li>
                  <li>2. Tell the dispatcher or tout your destination</li>
                  <li>3. Pay for 1 seat and wait (or buy multiple seats)</li>
                  <li>4. Taxi departs when all 6 seats are filled</li>
                  <li>5. Pay the driver at your destination</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Good to Know</h4>
                <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                  <li>No fixed schedules &mdash; they leave when full</li>
                  <li>Wait times: 10 min on popular routes, up to 1 hour on quiet ones</li>
                  <li>Luggage goes in the trunk at no extra charge</li>
                  <li>Front seat (next to driver) is the most comfortable</li>
                  <li>One of the best ways to meet locals and practice Arabic</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Negotiation Guide */}
          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--color-primary)]" />
              How to Negotiate Grand Taxi Fares
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {negotiationTips.map((tip, index) => (
                <div key={tip.title} className="flex gap-3 p-3 rounded-lg bg-[var(--surface-muted)]">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-[var(--color-primary)]">{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">{tip.title}</h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          BY CAR (RENTAL)
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Car className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              By Car (Rental)
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <div className="space-y-4 text-[var(--text-secondary)] leading-relaxed">
              <p>
                Renting a car gives you maximum freedom and is the best way to reach remote areas like the Atlas Mountains, Saharan oases, and quiet coastal villages. International companies (Hertz, Europcar, Avis, Sixt) and reliable local agencies operate at all major airports and in city centers. A compact car (Dacia Logan, Renault Clio) starts from 200-350 MAD/day ($20-35). A Dacia Duster SUV, the most popular choice for road trips, costs 400-700 MAD/day ($40-70).
              </p>
              <p>
                Book online 2-4 weeks in advance for the best selection and prices, especially during peak season (March-May, September-November). Consider picking up and dropping off at the same location to avoid one-way fees. For detailed driving tips, road conditions, and 8 complete road trip itineraries, see our <Link href="/road-trips" className="text-[var(--color-primary)] underline hover:text-[var(--color-primary-dark)]">Morocco Road Trips Guide</Link>.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Requirements &amp; Costs</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">License:</strong> Valid national license accepted. International Driving Permit (IDP) recommended and sometimes required by agencies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Age:</strong> Minimum 21 years; 25+ for SUVs and premium vehicles at most agencies.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Deposit:</strong> Credit card hold of 3,000-10,000 MAD depending on vehicle class. Debit cards rarely accepted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] mt-2 shrink-0" />
                  <span><strong className="text-[var(--text-primary)]">Insurance:</strong> CDW (Collision Damage Waiver) included in most bookings. Check the excess amount and consider full coverage for mountain/desert driving (add 50-100 MAD/day).</span>
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Road Conditions &amp; Fuel</h3>
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li className="flex items-start gap-3">
                  <Fuel className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Fuel:</strong> Diesel 12-14 MAD/liter, gasoline 14-16 MAD/liter. Fill up before remote areas. Cash payment at most stations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Autoroute:</strong> Excellent toll motorway connecting Tangier, Rabat, Casablanca, Marrakech, Fes, and Agadir. Tolls 20-200 MAD per section.</span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Mountain roads:</strong> Paved but narrow and winding. Tizi n&apos;Tichka (N9) and Tizi n&apos;Test (N10) are stunning but demanding. Avoid at night.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Route className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <span><strong className="text-[var(--text-primary)]">Speed limits:</strong> 60 km/h in cities, 100 km/h national roads, 120 km/h autoroutes. Speed cameras everywhere. Fines from 300 MAD.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          WITHIN CITIES
          ============================================================ */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Footprints className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
              Within Cities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Petit Taxis */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Petit Taxis</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Every Moroccan city has its own fleet of petit taxis, each painted a distinctive color. They carry up to 3 passengers within city limits only. Always insist on the meter (<strong className="text-[var(--text-primary)]">compteur</strong>) or negotiate the fare before getting in. Minimum fare is 7-10 MAD; most city rides cost 10-30 MAD. A 50% surcharge applies after 8 PM.
              </p>
              <h4 className="text-sm font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wider">Taxi Colors by City</h4>
              <div className="grid grid-cols-2 gap-2">
                {cityTaxiColors.map((c) => (
                  <div key={c.city} className="flex items-center gap-2 text-sm">
                    <span
                      className="w-4 h-4 rounded-full shrink-0 border border-black/10"
                      style={{ backgroundColor: c.hex }}
                    />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">{c.city}:</strong> {c.color}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ride-Hailing Apps */}
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Ride-Hailing Apps</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
                Ride-hailing apps are increasingly popular in Moroccan cities and offer a convenient alternative to negotiating fares with taxi drivers. Prices are typically similar to or slightly higher than meter taxis, but you get the convenience of cashless payment, GPS tracking, and no negotiation.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">inDrive</strong>
                    <p className="text-sm text-[var(--text-secondary)]">The most popular ride-hailing app in Morocco. You propose a fare, drivers accept or counter-offer. Available in Casablanca, Marrakech, Rabat, Fes, Tangier, Agadir, and most other cities. Cash and card payment. Download before arrival.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Careem (by Uber)</strong>
                    <p className="text-sm text-[var(--text-secondary)]">Fixed-pricing model similar to Uber. Good coverage in Casablanca, Rabat, Marrakech, Fes, and Tangier. Slightly pricier than inDrive but no negotiation needed. Card payment available.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-[var(--color-primary)] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[var(--text-primary)]">Heetch</strong>
                    <p className="text-sm text-[var(--text-secondary)]">Newer entrant gaining popularity, especially in Casablanca. Fixed pricing. Good for late-night rides when petit taxis can be scarce.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">City Buses &amp; Trams</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Public city buses are the cheapest way to get around (3-6 MAD per ride) but can be crowded and confusing for visitors. <strong className="text-[var(--text-primary)]">Casablanca</strong> has a modern tramway (8 MAD, 2 lines connecting key areas). <strong className="text-[var(--text-primary)]">Rabat</strong> has a tram network (6 MAD, connects the medina, Agdal, and Sale). Both are reliable, air-conditioned, and easy to use with clear signage.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Walking in Medinas</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                The ancient medinas are best explored on foot &mdash; and in many cases, walking is the only option since streets are too narrow for cars. Wear comfortable shoes with good grip for cobblestones. Stay alert for motorbikes and donkey carts. GPS can be unreliable in dense medinas; download <strong className="text-[var(--text-primary)]">Maps.me</strong> for the best offline medina navigation. Getting lost is part of the experience.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-3">Horse Carriages (Caleches)</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Available in Marrakech, Meknes, and some other cities. A tourist experience rather than practical transport. Negotiate the price before boarding (typically 100-200 MAD for a 30-minute tour). Prices are inflated but the experience of clip-clopping through the city streets is charming. Agree on a route beforehand to avoid disputes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          TRANSPORT APPS SUMMARY
          ============================================================ */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Transport Apps
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Download these before your trip for the smoothest travel experience across Morocco.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'ONCF / Al Boraq', use: 'Train schedules, booking, e-tickets', cost: 'Free' },
              { name: 'CTM', use: 'Bus schedules and booking for CTM coaches', cost: 'Free' },
              { name: 'inDrive', use: 'Ride-hailing with negotiable fares', cost: 'Free' },
              { name: 'Careem', use: 'Fixed-price ride-hailing (Uber-style)', cost: 'Free' },
              { name: 'Google Maps', use: 'Navigation and offline maps (download before desert/mountain)', cost: 'Free' },
              { name: 'Maps.me', use: 'Best offline maps for medina navigation', cost: 'Free' },
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
          CTA
          ============================================================ */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Plan Your Route
          </h2>
          <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
            Use our travel tools to calculate distances between cities and build your perfect Morocco itinerary. Or explore our road trip guide for self-drive adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/road-trips"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-white text-[var(--color-primary)] font-semibold hover:bg-white/90 transition-colors"
            >
              <Car className="w-4 h-4" /> Road Trips Guide
            </Link>
            <Link
              href="/tools/distance"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Navigation className="w-4 h-4" /> Calculate Routes
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

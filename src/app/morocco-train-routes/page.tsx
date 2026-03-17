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
} from 'lucide-react';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Train Routes Guide 2026 | ONCF Schedules, Prices & Al Boraq High-Speed',
  description:
    'Complete ONCF train guide for Morocco: all routes, schedules, ticket prices from 50 MAD, first vs second class comparison, Al Boraq high-speed train, how to book online, and station-by-station guides.',
  keywords: [
    'Morocco train routes',
    'ONCF Morocco',
    'Morocco train schedule',
    'Morocco train tickets',
    'Al Boraq high speed train',
    'Casablanca to Marrakech train',
    'Marrakech to Fes train',
    'Tangier to Casablanca train',
    'Morocco first class train',
    'ONCF train prices 2026',
    'Morocco rail travel',
  ],
  openGraph: {
    title: 'Morocco Train Routes Guide 2026 - ONCF Schedules & Al Boraq',
    description:
      'Route-by-route breakdown of every ONCF train line in Morocco. Prices from 50 MAD, Al Boraq high-speed service, booking tips, and station guides.',
    url: 'https://citytoursmorocco.com/morocco-train-routes',
    images: [
      {
        url: '/images/hero-al-boraq-train.webp',
        width: 1200,
        height: 630,
        alt: 'Al Boraq high-speed train at a Moroccan station platform',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/morocco-train-routes' },
};

/* =====================================================================
   JSON-LD
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  name: 'Morocco Train Routes Guide 2026',
  description:
    'Comprehensive route-by-route guide to Morocco ONCF train network including Al Boraq high-speed, conventional lines, schedules, prices, and station information.',
  url: 'https://citytoursmorocco.com/morocco-train-routes',
  image: '/images/hero-al-boraq-train.webp',
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

/* =====================================================================
   DATA
   ===================================================================== */

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
    description: 'Africa\'s first high-speed rail line, the Al Boraq connects Tangier to Casablanca at speeds up to 320 km/h. Named after the mythical winged steed, this TGV-technology train has transformed travel in northern Morocco since its 2018 inauguration. The journey that once took 5 hours now takes just over 2 hours. Trains feature spacious seating, power outlets at every seat, and a cafe car. The route passes through the fertile Gharb plain with views of farmland and the Atlantic coast. Peak hours see full trains, so booking in advance is strongly recommended, especially for Friday and Sunday travel.',
    tips: 'Book 2-3 weeks ahead for the best fares. The 7:00 AM and 5:00 PM departures are the busiest. First class includes slightly wider seats and a quieter car but the second-class experience is already excellent.',
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
    description: 'The most popular tourist route in Morocco, connecting the commercial capital with the red city. Trains run throughout the day from early morning to late evening. The journey crosses the Chaouia agricultural plain before the Atlas Mountains emerge on the southern horizon as you approach Marrakech. First-class cars are air-conditioned with assigned seating and are noticeably quieter. Second class is perfectly comfortable but can be crowded during holidays and weekends. The Marrakech station is a beautiful Art Deco building about 15 minutes by taxi from the medina.',
    tips: 'Take the direct train (2h50) rather than the semi-direct service which makes additional stops. The morning trains offer beautiful light as you approach Marrakech with the Atlas in the background.',
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
    description: 'The busiest rail corridor in Morocco with shuttle-frequency service between the economic and political capitals. Trains run approximately every 30 minutes during peak hours and hourly during off-peak. This is a commuter-heavy route, so expect business travelers and students rather than tourists. The journey follows the Atlantic coast with occasional ocean views near Mohammedia. Both Casa Voyageurs and Rabat Ville stations are centrally located with good taxi connections. This route also connects to the airport via Casa Voyageurs.',
    tips: 'No need to book in advance for this route -- just show up and take the next train. Second class is fine for the short journey. Avoid the 7-9 AM and 5-7 PM rush hours if you want a guaranteed seat.',
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
    description: 'A scenic journey through Morocco\'s agricultural heartland linking the Atlantic coast to the ancient imperial cities of Meknes and Fes. After passing through Rabat and Kenitra, the train climbs through rolling hills and cork oak forests into the Saiss plain. The approach to Meknes offers views of olive groves, and the final stretch to Fes reveals the dramatic setting of the ancient medina in its valley bowl. Consider breaking the journey with a stop in Meknes to visit the grandiose Bab Mansour gate and the Royal Stables.',
    tips: 'The Fes train station is about 3 km from the medina. Take a petit taxi (from 15 MAD) or bus to Bab Boujloud. First class is recommended for this longer journey for the comfort and space.',
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
    description: 'The longest standard route connects Morocco\'s two most-visited cities. There is no direct east-west rail line, so all trains route through Casablanca. Three direct trains daily make the full journey without requiring a change. The trip is long but scenic, crossing the entire north-south gradient of Morocco\'s Atlantic lowlands. Many travelers prefer to break this into two segments with a night in Casablanca or Rabat. The direct trains include a cafe car serving coffee, tea, and sandwiches.',
    tips: 'For comfort on the 7-hour journey, first class is worth the premium. Alternatively, consider the overnight bus (CTM from 180 MAD) or domestic flights (from 400 MAD one-way). Charge your phone -- power outlets are available in first class.',
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
    description: 'There is no direct train from Tangier to Fes. The optimal routing takes the Al Boraq high-speed train from Tangier to Kenitra (1h), then changes to a conventional train to Fes (2h30). The connection at Kenitra is usually 20-40 minutes, and the station has a waiting room and small cafe. This combined journey is much faster than the old conventional routing (which took 5+ hours) and represents one of the most practical cross-country connections in the network. Purchase both tickets at Tangier station or online.',
    tips: 'Book Al Boraq tickets in advance online and buy the Kenitra-Fes ticket at the counter or on the ONCF app. Allow at least 30 minutes for the connection at Kenitra to account for any delays.',
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
    description: 'The eastern trunk line crosses Morocco from the Atlantic to the Algerian border. After Fes, the train enters the Taza corridor -- a dramatic mountain pass between the Rif and Middle Atlas ranges. The landscape shifts from fertile western plains to the arid eastern steppe approaching Oujda. This is an adventure route for rail enthusiasts rather than a practical transport option (flying is faster). The overnight departure allows sleeping through the long journey, arriving in Oujda by morning. Oujda is the gateway to the Beni Snassen mountains and the Algerian border region.',
    tips: 'Consider the overnight train to save on accommodation. Bring food and water as the cafe car may have limited options on this route. The Taza mountain section is the scenic highlight.',
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
    description: 'A short Atlantic coast route connecting Casablanca with the Portuguese-influenced city of El Jadida, a UNESCO World Heritage site. The train follows the coastline south through agricultural land with occasional ocean views. El Jadida is an excellent day trip from Casablanca, offering the atmospheric Portuguese cistern, a fortified medina, and a beautiful beach promenade. The station in El Jadida is about 1 km from the old medina walls.',
    tips: 'Perfect for a day trip from Casablanca. Take a morning train and return in the evening. The Portuguese cistern is the must-see attraction. From 50 MAD in second class, this is one of Morocco\'s best value train excursions.',
  },
];

const classComparison = [
  { feature: 'Seat Width', first: 'Wider seats (3 abreast)', second: 'Standard seats (4 abreast)' },
  { feature: 'Air Conditioning', first: 'Individual controls', second: 'Central system' },
  { feature: 'Seat Assignment', first: 'Reserved', second: 'Unreserved (first come)' },
  { feature: 'Crowding', first: 'Rarely crowded', second: 'Can be packed at peak times' },
  { feature: 'Power Outlets', first: 'At every seat', second: 'Limited or none' },
  { feature: 'Noise Level', first: 'Quieter cars', second: 'Livelier atmosphere' },
  { feature: 'Price Premium', first: 'Approximately 50% more', second: 'Base fare' },
  { feature: 'Recommendation', first: 'Journeys over 2 hours', second: 'Short trips under 2 hours' },
];

const bookingSteps = [
  { step: 1, title: 'Visit ONCF.ma or Download the App', detail: 'The official ONCF website and mobile app allow online booking for all routes including Al Boraq. The app is available for iOS and Android and works well in English and French.' },
  { step: 2, title: 'Select Your Route and Date', detail: 'Enter your departure and arrival stations. The system shows all available trains with times, durations, and prices. Al Boraq trains are clearly marked with a lightning bolt icon.' },
  { step: 3, title: 'Choose Your Class', detail: 'Select first or second class. For Al Boraq, you\'ll also see Business class on some departures. The price difference is clearly displayed.' },
  { step: 4, title: 'Enter Passenger Details', detail: 'Full name as it appears on your passport. Children under 4 travel free; ages 4-12 receive a 50% discount. Students with ONCF cards get a 25% reduction.' },
  { step: 5, title: 'Pay and Receive Your Ticket', detail: 'International credit cards (Visa, Mastercard) are accepted. Your e-ticket is sent by email and can also be displayed in the ONCF app. Print or screenshot your ticket -- you\'ll need to show it on the train.' },
  { step: 6, title: 'Board Your Train', detail: 'Arrive at the station 15-20 minutes before departure. Find your platform on the departure boards. For Al Boraq, your car and seat number are on your ticket. For conventional trains, second class seating is unreserved.' },
];

const stations = [
  { name: 'Casa Voyageurs', city: 'Casablanca', notes: 'Main hub station. Connects to all routes including the airport train. Modern facilities with cafes, ATMs, and left-luggage service. Located in the Maarif district, well-connected by tramway.' },
  { name: 'Casa Port', city: 'Casablanca', notes: 'Secondary station near the old medina and the port. Serves commuter trains to Rabat and the coastal shuttle. Less convenient for long-distance travel.' },
  { name: 'Marrakech', city: 'Marrakech', notes: 'End of the southern line. Beautiful Art Deco building. Taxi rank and bus stops outside. About 15 minutes from Jemaa el-Fnaa by petit taxi. ATM and cafe in the station.' },
  { name: 'Rabat Ville', city: 'Rabat', notes: 'Central Rabat station serving all routes. Walking distance to the medina and major government buildings. Connected to the Rabat-Sale tramway system.' },
  { name: 'Fes', city: 'Fes', notes: 'Main Fes station in the Ville Nouvelle. 3 km from the ancient medina. Petit taxi (from 15 MAD) or bus to Bab Boujloud. Modern station with all facilities.' },
  { name: 'Tangier Ville', city: 'Tangier', notes: 'Terminal station for Al Boraq and conventional trains. Located in the city center, walkable to the Grand Socco and the medina entrance. Recently modernized with the Al Boraq launch.' },
  { name: 'Meknes', city: 'Meknes', notes: 'On the Fes-Casablanca main line. The station is in the Ville Nouvelle, about 2 km from the historic Bab Mansour. A worthwhile stopover between Fes and Rabat.' },
  { name: 'Kenitra', city: 'Kenitra', notes: 'Key junction where Al Boraq meets conventional network. Important connection point for Tangier-Fes routing. Modern station with waiting room and cafe.' },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

export default function MoroccoTrainRoutesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* -- Hero -- */}
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
              Transport Guide
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Train Routes Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Complete route-by-route breakdown of Morocco&apos;s ONCF rail network. From the
              Al Boraq high-speed to scenic conventional lines, everything you need to travel
              Morocco by train.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">8</p>
                <p className="text-sm text-white/70">Major routes</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">From 50</p>
                <p className="text-sm text-white/70">MAD per ticket</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)]">320 km/h</p>
                <p className="text-sm text-white/70">Al Boraq speed</p>
              </div>
            </div>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* -- Introduction -- */}
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
                    Morocco&apos;s national railway, ONCF (Office National des Chemins de Fer), operates
                    a modern and expanding network that connects the country&apos;s major cities. The
                    jewel of the system is the Al Boraq high-speed line -- Africa&apos;s first -- which
                    zips between Tangier and Casablanca at 320 km/h, cutting a 5-hour journey to just
                    over 2 hours.
                  </p>
                  <p>
                    Beyond the high-speed line, conventional trains link Casablanca to Marrakech, Fes,
                    Meknes, Rabat, and even distant Oujda on the Algerian border. Train travel in Morocco
                    is comfortable, affordable, and scenic -- passing through farmland, mountain corridors,
                    and Atlantic coastal stretches that you would miss entirely by air.
                  </p>
                  <p>
                    This guide provides a route-by-route breakdown with current prices, journey times,
                    frequency, and practical tips for each line. Whether you&apos;re planning a quick
                    shuttle between Casablanca and Rabat or a cross-country adventure from Tangier to
                    Marrakech, you&apos;ll find everything you need to plan your rail journey.
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
                    { label: 'Children Discount', value: '50% off ages 4-12', detail: 'Under 4 free' },
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
                <p className="text-xs text-[var(--text-muted)] mt-4 italic">Prices may vary by season. All prices are approximate and subject to change.</p>
                <div className="mt-6 pt-6 border-t border-[var(--border)]">
                  <a href="#routes" className="block w-full text-center px-6 py-3 bg-[var(--color-secondary)] text-white font-semibold rounded-lg hover:bg-[var(--color-secondary-dark)] transition-colors">
                    View All Routes
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* -- Al Boraq Spotlight -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Africa&apos;s First High-Speed Train
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              The Al Boraq Experience
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <Zap className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Speed</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Maximum operational speed of 320 km/h on the Tangier-Kenitra section. The Alstom-built trainsets use the same technology as the French TGV. The ride is smooth and virtually silent at full speed.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Armchair className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Comfort</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Spacious seats in both classes with power outlets, fold-down tables, and reading lights. Business class offers extra legroom and a premium lounge at Tangier and Casa Voyageurs stations.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Wifi className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Connectivity</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Free Wi-Fi is available on all Al Boraq trains though speeds can vary. Mobile phone signal is strong throughout the journey with 4G coverage along the entire route. A cafe car serves beverages and snacks.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Ticket className="w-6 h-6 text-[var(--color-accent)] mb-3" />
              <h3 className="font-bold text-[var(--text-primary)] mb-2">Pricing</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Second class from 149 MAD, first class from 229 MAD for the full Tangier-Casablanca route. Shorter segments (e.g., Tangier-Kenitra) cost less. Early online booking sometimes offers promotional fares.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- Route Guides -- */}
      <section id="routes" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-secondary)] font-semibold text-sm uppercase tracking-widest mb-3">
              Route by Route
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              All Major Train Routes
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Detailed breakdown of every significant ONCF route with prices, times, and practical advice.
            </p>
          </div>

          <div className="space-y-8">
            {routes.map((route, index) => (
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

                  <div className="bg-[var(--color-secondary)]/5 rounded-lg p-4">
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      <span className="font-bold text-[var(--color-secondary)]">Tip:</span> {route.tips}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Class Comparison -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            First Class vs Second Class
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both classes are perfectly viable. Here&apos;s what to expect from each to help you decide.
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
        </div>
      </section>

      {/* -- How to Book -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] text-center mb-4">
            How to Book Train Tickets
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Step-by-step guide to booking ONCF tickets online or at the station.
          </p>
          <div className="space-y-4">
            {bookingSteps.map((s) => (
              <div key={s.step} className="card-moroccan p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] text-white flex items-center justify-center shrink-0 font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="font-bold text-[var(--text-primary)] mb-1">{s.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Station Guides -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Station Guides
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to know about each major station for connections, taxis, and city access.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stations.map((station) => (
              <div key={station.name} className="card-moroccan p-5">
                <h3 className="font-bold text-[var(--text-primary)] mb-1 flex items-center gap-2">
                  <Building className="w-4 h-4 text-[var(--color-secondary)]" />
                  {station.name}
                </h3>
                <p className="text-xs text-[var(--color-secondary)] font-semibold mb-2">{station.city}</p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{station.notes}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Important Notices -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] text-center mb-12">
            Important Train Travel Tips
          </h2>
          <div className="space-y-4">
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Ramadan Schedule Changes</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    During Ramadan, train schedules may be adjusted with reduced frequency, especially in the evening hours. Check ONCF.ma for the special Ramadan timetable. Late-night services may be added for Iftar travel.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">No Trains South of Marrakech</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    The rail network does not extend south of Marrakech. To reach Ouarzazate, the Sahara Desert, Agadir, or Essaouira, you&apos;ll need to use buses (CTM, Supratours) or private transport. Supratours buses connect at Marrakech station.
                  </p>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-5 border-l-4 border-[var(--color-secondary)]">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[var(--color-secondary)] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[var(--text-primary)] mb-1">Luggage Policy</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    There is no formal luggage limit on Moroccan trains, but space can be limited. Overhead racks hold standard suitcases. For larger items, use the luggage areas at the end of each car. Keep valuables with you at all times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Related Pages -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-[var(--text-primary)] mb-4">
              Related Transport Guides
            </h2>
            <p className="text-[var(--text-secondary)]">
              Complete your Morocco transport knowledge with these companion guides.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Morocco Airports Guide', href: '/morocco-airports-guide', desc: 'Terminal info, transport, SIM cards, and tips for all Moroccan airports.' },
              { title: 'Driving in Morocco', href: '/driving', desc: 'Road conditions, rental tips, and rules for self-driving across the country.' },
              { title: 'Budget Travel Guide', href: '/budget-travel', desc: 'How to explore Morocco on a budget including transport savings.' },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="card-moroccan p-6 group hover:shadow-lg transition-shadow duration-300">
                <h3 className="font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-2">{link.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{link.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-secondary)] group-hover:text-[var(--color-secondary-dark)] transition-colors">
                  Read Guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

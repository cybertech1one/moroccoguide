import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Car,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Fuel,
  Navigation,
  FileText,
  CreditCard,
  CircleDot,
  Building,
  BookOpen,
  MessageCircleQuestion,
  Route,
  Gauge,
  Shield,
  Phone,
  Camera,
  Milestone,
  TriangleAlert,
  MapPinned,
  CircleAlert,
  Compass,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-rental-cars`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Rental Car Guide 2026 | Prices, Insurance, Routes & Driving Tips',
  description:
    'Complete guide to renting a car in Morocco. Compare international vs local companies, understand CDW and theft insurance, learn driving rules, road conditions by region, fuel costs, toll roads, parking in medina cities, IDP requirements, and the best road trip routes for 2026.',
  keywords: [
    'rent a car Morocco',
    'Morocco car rental guide',
    'driving in Morocco tips',
    'Morocco rental car insurance',
    'CDW Morocco car rental',
    'Morocco road trip routes',
    'international driving permit Morocco',
    'Morocco toll roads autoroute',
    'fuel prices Morocco 2026',
    'parking medina Morocco',
    'best car rental Morocco',
    'Morocco driving rules',
    'Hertz Avis Morocco',
    'local car rental Marrakech',
    'Morocco road conditions',
    'Morocco speed limits',
    'Morocco rental car scams',
    'self drive Morocco',
  ],
  openGraph: {
    title: 'Morocco Rental Car Guide 2026 | Prices, Insurance, Routes & Driving Tips',
    description:
      'Everything you need to know about renting and driving a car in Morocco: company comparison, insurance explained, road conditions, fuel costs, toll roads, parking, and the best self-drive routes from Marrakech to the Sahara.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-dades-valley-road.webp`,
        width: 1200,
        height: 630,
        alt: 'Winding road through the Dades Valley in Morocco with red rock formations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Rental Car Guide 2026 | Prices, Insurance & Driving Tips',
    description:
      'Compare rental companies, understand insurance options, learn Moroccan driving rules, fuel costs, toll roads, and plan the best road trip routes.',
    images: [`${BASE_URL}/images/hero-dades-valley-road.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Do I need an international driving permit to rent a car in Morocco?',
    a: 'It depends on your home country. EU and US licenses are accepted by most rental companies for stays under 90 days, but police at checkpoints may ask for an IDP. Getting one before your trip costs around $20 and eliminates any hassle. Australian, Canadian, and UK licenses are also generally accepted, but an IDP is recommended.',
  },
  {
    q: 'How much does it cost to rent a car in Morocco?',
    a: 'A basic compact car (Dacia Logan or similar) starts from 250 MAD per day with a local company and from 350 MAD per day with an international brand. SUVs suitable for mountain and desert roads start from 500 MAD per day. Prices rise sharply during Christmas, Easter, and July-August. Weekly rentals offer significant discounts, often 20-30% off the daily rate. Seasonal pricing can change.',
  },
  {
    q: 'Should I get full insurance coverage for a rental car in Morocco?',
    a: 'Yes. Road conditions vary dramatically and other drivers can be unpredictable. At minimum, take CDW (Collision Damage Waiver) and theft protection. Super CDW reduces your excess to zero and costs from 80-120 MAD per day extra. Some credit cards cover CDW abroad -- check your card terms before the trip and bring the policy document.',
  },
  {
    q: 'Is driving in Morocco safe for tourists?',
    a: 'Driving in Morocco is manageable if you stay alert. Highways (autoroutes) between major cities are excellent and well-maintained. Secondary roads in the mountains require careful driving due to tight curves and occasional livestock. Avoid driving at night outside cities, as unlit vehicles, pedestrians, and animals on the road are common hazards.',
  },
  {
    q: 'Can I take a rental car from Morocco into another country?',
    a: 'Cross-border travel is generally not permitted by rental contracts. Most companies explicitly prohibit taking cars into Algeria or Mauritania. Some will allow travel within Morocco only, and the GPS tracker in modern rental fleets will flag border crossings. If you need to cross borders, arrange separate transport.',
  },
  {
    q: 'What happens if I get a traffic fine while driving a rental car?',
    a: 'Police issue fines on the spot in Morocco. You pay cash directly to the officer, who provides a receipt. Fines range from 300 MAD for minor violations to 1,500 MAD or more for speeding. If you do not pay, the officer can hold your license until you do. The rental company may also charge you later for any camera-detected violations.',
  },
  {
    q: 'Are Moroccan roads good enough for a regular car or do I need an SUV?',
    a: 'A regular car handles all highways, most national roads, and city driving perfectly well. You only need an SUV or 4x4 for unpaved mountain passes (like Tizi n\'Test in winter), desert tracks south of Zagora and Merzouga, and remote Atlas Mountain villages. For a standard Marrakech-Fes-coast trip, a compact car is sufficient.',
  },
  {
    q: 'Where should I pick up and drop off my rental car in Morocco?',
    a: 'Airport pickups in Marrakech (RAK), Casablanca (CMN), Fes (FEZ), and Agadir (AGA) are the most convenient. One-way rentals between different cities are available but carry a surcharge of from 500-1,500 MAD depending on the distance. Dropping off in the same city where you picked up avoids this fee.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Rental Car Guide 2026',
  description:
    'Complete guide to renting a car in Morocco covering rental companies, insurance, driving rules, road conditions, fuel costs, toll roads, parking, and the best road trip routes.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-dades-valley-road.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Rental Car Guide', item: PAGE_URL },
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
   DATA: RENTAL COMPANIES COMPARISON
   ================================================================ */

const rentalCompanies = [
  {
    category: 'International Brands',
    icon: Building,
    companies: [
      { name: 'Hertz', price: 'From 400 MAD/day', note: 'Largest fleet, airport desks at RAK/CMN/FEZ/AGA, reliable roadside assistance' },
      { name: 'Europcar', price: 'From 380 MAD/day', note: 'Strong presence across Morocco, good SUV selection, one-way rentals available' },
      { name: 'Avis', price: 'From 370 MAD/day', note: 'Well-maintained vehicles, loyalty program discounts, airport and city locations' },
      { name: 'Sixt', price: 'From 350 MAD/day', note: 'Competitive pricing, modern fleet, GPS included in premium packages' },
    ],
    pros: 'Newer vehicles, transparent insurance, English-speaking staff, international roadside assistance, online booking',
    cons: 'Higher prices, strict fuel policies, damage inspections can be thorough to the point of finding pre-existing marks',
  },
  {
    category: 'Local Moroccan Companies',
    icon: MapPin,
    companies: [
      { name: 'Medlock Car', price: 'From 220 MAD/day', note: 'Popular with budget travelers, offices in major cities' },
      { name: 'Jazz Car', price: 'From 200 MAD/day', note: 'Competitive rates, flexible pickup/dropoff, negotiable pricing for long rentals' },
      { name: 'Afrique Cars', price: 'From 230 MAD/day', note: 'Good fleet condition for a local brand, GPS available' },
      { name: 'SureCar Morocco', price: 'From 250 MAD/day', note: 'Growing reputation, newer vehicles than most local competitors' },
    ],
    pros: 'Lower prices (30-40% cheaper), flexible on pickup times, willing to negotiate for weekly/monthly rates, some deliver to your riad',
    cons: 'Older vehicles, insurance terms less clear, some lack English-speaking staff, variable maintenance standards',
  },
];

/* ================================================================
   DATA: INSURANCE OPTIONS
   ================================================================ */

const insuranceOptions = [
  {
    type: 'Basic Third-Party Liability',
    icon: Shield,
    included: true,
    price: 'Included',
    covers: 'Damage you cause to other vehicles and people. Required by Moroccan law.',
    doesNotCover: 'Damage to your rental car, theft, windshield, tires, or undercarriage.',
    recommendation: 'This alone is not enough. Always add CDW at minimum.',
  },
  {
    type: 'CDW (Collision Damage Waiver)',
    icon: ShieldCheck,
    included: false,
    price: 'From 60 MAD/day',
    covers: 'Damage to your rental car from collisions. Reduces your liability to a deductible (excess), typically from 5,000-15,000 MAD.',
    doesNotCover: 'Theft, tires, windshield, undercarriage, roof, or interior damage.',
    recommendation: 'Essential. Take this unless your credit card provides equivalent coverage.',
  },
  {
    type: 'Theft Protection (TP)',
    icon: ShieldCheck,
    included: false,
    price: 'From 40 MAD/day',
    covers: 'Vehicle theft and attempted theft damage. Reduces your liability to a deductible.',
    doesNotCover: 'Personal belongings stolen from the car (use travel insurance for that).',
    recommendation: 'Recommended, especially if parking overnight on streets outside major cities.',
  },
  {
    type: 'Super CDW (Full Coverage)',
    icon: Star,
    included: false,
    price: 'From 80-120 MAD/day',
    covers: 'Reduces your deductible to zero. Covers everything CDW covers with no excess payment.',
    doesNotCover: 'Typically excludes tires, windshield, undercarriage, and driving on unpaved roads (read the fine print).',
    recommendation: 'Worth the peace of mind. Moroccan roads can surprise you with potholes and debris.',
  },
];

/* ================================================================
   DATA: DRIVING RULES
   ================================================================ */

const drivingRules = [
  { rule: 'Drive on the right', icon: Navigation, detail: 'Morocco drives on the right side of the road. Overtake on the left. At roundabouts, give way to traffic already in the circle.' },
  { rule: 'Speed limits', icon: Gauge, detail: 'Urban areas: 40-60 km/h. National roads: 80-100 km/h. Autoroutes (highways): 120 km/h. Speed cameras are common and fines are immediate.' },
  { rule: 'Seat belts mandatory', icon: CheckCircle, detail: 'Front seat passengers must wear seat belts at all times. Rear seat belts are legally required too, though enforcement is inconsistent. Wear them anyway.' },
  { rule: 'Mobile phone ban', icon: Phone, detail: 'Using a handheld phone while driving is illegal. Fines start from 300 MAD. Use a dashboard mount or Bluetooth if you need GPS navigation.' },
  { rule: 'Alcohol limit: 0.02%', icon: AlertTriangle, detail: 'Morocco has near-zero tolerance. Even one beer can put you over the limit. Penalties include license suspension, heavy fines, and possible imprisonment. Do not drink and drive.' },
  { rule: 'Roundabout priority', icon: CircleDot, detail: 'Traffic inside the roundabout has priority. In practice, many drivers enter without yielding, so proceed with caution and watch for cars cutting in from your right.' },
  { rule: 'Police checkpoints', icon: FileText, detail: 'Expect routine police checkpoints on highways and at city entrances. Have your passport, license, IDP, and rental contract within reach. Stay calm, be polite, and comply.' },
  { rule: 'Child seat rules', icon: ShieldCheck, detail: 'Children under 10 must ride in the rear. Car seats are not always available from rental companies -- bring your own or request one when booking.' },
];

/* ================================================================
   DATA: ROAD CONDITIONS BY REGION
   ================================================================ */

const roadConditions = [
  {
    region: 'Autoroutes (Toll Highways)',
    quality: 'Excellent',
    icon: Route,
    description: 'Morocco\'s autoroute network connects Tangier-Casablanca-Marrakech-Agadir and Rabat-Fes-Oujda. Dual carriageway, smooth asphalt, clear signage in Arabic and French, rest stops every 50-80 km. Comparable to European motorways.',
    tips: 'Keep toll tickets safe. Pay at exits. Credit cards accepted at most booths. Jawaz electronic toll tag available for frequent users.',
  },
  {
    region: 'National Roads (N-roads)',
    quality: 'Good to Fair',
    icon: Milestone,
    description: 'Single-carriageway roads connecting mid-sized cities. Generally well-surfaced but narrower than autoroutes. Expect slow-moving trucks, overlapping traffic, and occasional potholes. The N8 and N10 across the Atlas are scenic but demanding.',
    tips: 'Allow extra time. Overtaking requires patience and clear sightlines. Many national roads wind through villages where speed drops to 40 km/h.',
  },
  {
    region: 'Atlas Mountain Roads',
    quality: 'Fair to Challenging',
    icon: Navigation,
    description: 'Mountain passes like Tizi n\'Tichka (N9, 2,260m) and Tizi n\'Test (R203, 2,092m) are paved but have tight hairpin turns, steep gradients, and limited barriers. Stunning scenery demands attention that should stay on the road.',
    tips: 'Keep headlights on in tunnels and around blind corners. In winter (December-February), snow and ice can close high passes. Check conditions before departing.',
  },
  {
    region: 'Southern Desert Roads',
    quality: 'Variable',
    icon: MapPinned,
    description: 'Main roads to Ouarzazate and Errachidia are paved and decent. Beyond that, roads to Merzouga, M\'Hamid, and remote oases range from cracked tarmac to unpaved piste tracks. Sand drifts across roads after windstorms.',
    tips: 'A 4x4 is essential for desert piste tracks. A regular car handles the paved road to Merzouga via Erfoud. Do not drive on sand dunes -- you will get stuck.',
  },
  {
    region: 'Coastal Roads',
    quality: 'Good',
    icon: Compass,
    description: 'The Atlantic coast road from Tangier to Agadir is mostly well-maintained. The stretch between Essaouira and Agadir is particularly scenic. Roads around Asilah, El Jadida, and Oualidia are smooth and easy driving.',
    tips: 'Fog is common on the coast in the mornings, especially between Casablanca and El Jadida. Use fog lights and reduce speed.',
  },
];

/* ================================================================
   DATA: TOLL ROAD PRICES
   ================================================================ */

const tollPrices = [
  { route: 'Casablanca - Marrakech', distance: '240 km', toll: 'From 90 MAD', time: '2h 30min' },
  { route: 'Casablanca - Rabat', distance: '90 km', toll: 'From 30 MAD', time: '1h' },
  { route: 'Casablanca - Fes', distance: '295 km', toll: 'From 120 MAD', time: '3h' },
  { route: 'Casablanca - Tangier', distance: '340 km', toll: 'From 140 MAD', time: '3h 30min' },
  { route: 'Marrakech - Agadir', distance: '260 km', toll: 'From 100 MAD', time: '2h 45min' },
  { route: 'Rabat - Fes', distance: '200 km', toll: 'From 90 MAD', time: '2h 15min' },
  { route: 'Tangier - Rabat', distance: '250 km', toll: 'From 110 MAD', time: '2h 30min' },
  { route: 'Fes - Oujda', distance: '325 km', toll: 'From 130 MAD', time: '3h 15min' },
];

/* ================================================================
   DATA: BEST ROAD TRIP ROUTES
   ================================================================ */

const roadTripRoutes = [
  {
    name: 'Marrakech to Merzouga (Sahara Desert)',
    duration: '2-3 days one way',
    distance: '560 km',
    icon: Route,
    highlights: 'Tizi n\'Tichka pass, Ait Benhaddou kasbah, Ouarzazate film studios, Dades Gorge, Todra Gorge, Erg Chebbi dunes',
    roadType: 'Paved throughout (N9, N10, R702). A regular car handles this route, but 4x4 gives extra comfort on the last stretch.',
    bestSeason: 'October-April. Summer temperatures in the desert exceed 45 C.',
  },
  {
    name: 'Atlantic Coast: Tangier to Essaouira',
    duration: '4-5 days',
    distance: '850 km',
    icon: Compass,
    highlights: 'Asilah art town, Rabat capital sights, El Jadida Portuguese cistern, Oualidia oyster lagoon, Safi pottery, Essaouira wind and surf',
    roadType: 'Autoroute Tangier to Casablanca, then good national roads south. Easy driving on paved coastal roads.',
    bestSeason: 'Year-round, though April-June and September-November offer the best weather.',
  },
  {
    name: 'Grand Tour: Marrakech - Fes via Desert',
    duration: '7-10 days',
    distance: '1,200+ km',
    icon: Navigation,
    highlights: 'Atlas passes, Ouarzazate, Dades and Todra gorges, Merzouga dunes, Ziz Valley, Ifrane cedar forests, Volubilis Roman ruins, Fes medina',
    roadType: 'Mix of autoroute, national roads, and mountain passes. Standard car sufficient for the main route. 4x4 for desert side trips.',
    bestSeason: 'March-May and September-November for moderate temperatures across all elevations.',
  },
  {
    name: 'Chefchaouen & the Rif Mountains',
    duration: '2-3 days from Fes or Tangier',
    distance: '200-300 km',
    icon: MapPinned,
    highlights: 'Blue-washed streets of Chefchaouen, Akchour waterfalls, Talassemtane National Park, Rif Mountain views, Ouezzane holy city',
    roadType: 'Mountain roads with curves but well-paved. Some steep sections. Not recommended at night.',
    bestSeason: 'April-June for wildflowers and pleasant temperatures. Avoid January-February when mountain roads can be icy.',
  },
];

/* ================================================================
   DATA: FUEL & PARKING
   ================================================================ */

const fuelInfo = [
  { type: 'Diesel (Gasoil)', price: 'From 11-13 MAD/liter', note: 'Most rental cars run on diesel. Cheaper than petrol. Always confirm fuel type before driving away.' },
  { type: 'Petrol (Essence/Sans Plomb)', price: 'From 13-15 MAD/liter', note: 'Unleaded petrol. Less common in rental fleets but standard in some compact cars.' },
  { type: 'Gas stations', price: 'Widely available', note: 'Afriquia, Shell, Total, and Winxo stations are everywhere on autoroutes and in cities. In rural areas, stations are spaced 50-100 km apart -- fill up before mountain and desert drives.' },
  { type: 'Full tank return policy', price: 'Varies', note: 'Most companies require you to return the car with the same fuel level. Photograph the gauge at pickup. Returning it empty incurs a surcharge of from 200-400 MAD.' },
];

const parkingInfo = [
  { location: 'Medina cities (Marrakech, Fes)', tip: 'You cannot drive into the medina. Park outside the walls in a guarded lot (from 20-30 MAD/day) or at your riad\'s recommended parking. Gardiens (informal parking attendants in yellow vests) watch street spots for from 5-10 MAD.' },
  { location: 'Modern city centers', tip: 'Paid parking zones in Casablanca, Rabat, and Tangier use coin-operated meters or attendants. From 5 MAD/hour is standard. Underground garages at malls charge from 10-20 MAD for several hours.' },
  { location: 'Hotels and riads', tip: 'Most hotels outside medinas have free parking. Medina riads arrange parking at nearby lots, usually from 30-50 MAD per night. Ask when booking.' },
  { location: 'Overnight on streets', tip: 'Avoid leaving your car on unlit streets overnight, especially with luggage visible. Use guarded lots. Petty theft from parked cars is uncommon but not unheard of.' },
];

/* ================================================================
   DATA: SCAMS TO AVOID
   ================================================================ */

const scamsToAvoid = [
  {
    scam: 'Pre-existing damage not documented',
    icon: Camera,
    description: 'Some companies charge you for scratches and dents that were already on the car. Before driving away, photograph every panel, bumper, wheel, and the interior. Record a video. Insist any existing damage is noted on the contract.',
  },
  {
    scam: 'Fuel level disputes',
    icon: Fuel,
    description: 'The contract says "full to full" but the tank is not actually full at pickup. Photograph the fuel gauge. If the tank is not full, have the staff note the actual level on the paperwork.',
  },
  {
    scam: 'Forced insurance upsells',
    icon: CreditCard,
    description: 'Staff may insist you need additional insurance beyond what you booked online. Know your coverage before arriving. If your credit card covers CDW, bring the policy document. You can decline extras, but basic CDW is strongly recommended regardless.',
  },
  {
    scam: 'Unofficial "helpers" at parking spots',
    icon: CircleAlert,
    description: 'Self-appointed parking attendants in tourist areas may demand money to "guard" your car. Official gardiens wear yellow or orange vests and work in marked zones. Paying from 5-10 MAD to an official gardien is normal. Ignore aggressive unofficial ones.',
  },
  {
    scam: 'GPS tracking surcharges',
    icon: TriangleAlert,
    description: 'Some local companies add GPS or tracking device fees not mentioned during booking. Read every line of the contract before signing. The total should match your online reservation.',
  },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoRentalCarsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-dades-valley-road.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Rental Car Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Self-Drive Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Rental Car
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            The complete guide to renting and driving in Morocco. Companies, insurance,
            road conditions, fuel costs, toll routes, and the best self-drive itineraries
            from the Atlantic coast to the Sahara.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Rent a Car in Morocco
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco&apos;s geography practically demands a road trip. From the capital cities
              connected by smooth autoroutes to the winding mountain passes of the High Atlas and
              the desert tracks leading to Saharan dunes, driving gives you access to places that
              buses and trains simply do not reach. A rental car turns a one-week trip into
              something far more flexible -- stop at a roadside souk selling fresh argan oil,
              detour to a waterfall in the Rif, or spend an extra hour at a kasbah without
              worrying about a tour bus schedule.
            </p>
            <p>
              That said, renting a car here requires some preparation. Insurance terms can be
              confusing, road conditions shift dramatically between regions, police checkpoints
              are routine, and navigating a car near a thousand-year-old medina wall requires
              patience. This guide covers every practical detail: which companies to book with,
              what insurance to get, how the roads actually are (not just what travel blogs
              claim), what fuel costs, how the toll system works, where to park, and which
              routes make the driving worthwhile.
            </p>
            <p>
              Expect to pay from 250 MAD per day with a local company for a basic compact, or
              from 350 MAD per day with international brands like Hertz and Europcar. Factor in
              insurance, fuel, and tolls, and a week of self-drive travel costs significantly
              less than hiring a private driver -- while giving you total control over your
              itinerary. Seasonal pricing can change during peak travel months.
            </p>
          </div>
        </div>
      </section>

      {/* ── Rental Companies Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Building className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rental Companies: International vs Local
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Both options work. The right choice depends on your budget, comfort level, and how
            much you value predictability over price.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rentalCompanies.map((group) => {
              const GroupIcon = group.icon;
              return (
                <div key={group.category} className="card-moroccan p-6">
                  <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <GroupIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    {group.category}
                  </h3>
                  <div className="space-y-3 mb-5">
                    {group.companies.map((c) => (
                      <div key={c.name} className="flex justify-between items-start gap-4 border-b border-[var(--border-primary)] pb-3 last:border-0 last:pb-0">
                        <div>
                          <p className="font-[family-name:var(--font-heading)] font-bold text-sm text-[var(--text-primary)]">{c.name}</p>
                          <p className="text-xs text-[var(--text-secondary)]">{c.note}</p>
                        </div>
                        <span className="text-sm font-medium text-[var(--color-accent)] whitespace-nowrap">{c.price}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <p className="font-bold text-green-700 dark:text-green-400 mb-1">Pros</p>
                      <p className="text-green-600 dark:text-green-300">{group.pros}</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-3">
                      <p className="font-bold text-red-700 dark:text-red-400 mb-1">Cons</p>
                      <p className="text-red-600 dark:text-red-300">{group.cons}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Insurance Explained ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insurance Options Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding your coverage before you sign the contract saves money and stress.
            Here is what each tier actually covers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {insuranceOptions.map((ins) => {
              const InsIcon = ins.icon;
              return (
                <div key={ins.type} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <InsIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {ins.type}
                    </h3>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-gold)] mb-3">{ins.price}</p>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <p><span className="font-semibold text-green-600">Covers:</span> {ins.covers}</p>
                    <p><span className="font-semibold text-red-600">Does not cover:</span> {ins.doesNotCover}</p>
                    <p className="pt-1 border-t border-[var(--border-primary)]">
                      <span className="font-semibold text-[var(--color-accent)]">Recommendation:</span> {ins.recommendation}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── IDP & Documents ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Documents You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Driving License
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Your home country license is required. EU, US, Canadian, Australian, and UK licenses
                are accepted by most rental companies. The license must have been held for at least
                one year. Some companies require two years for drivers under 25.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                International Driving Permit (IDP)
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Not strictly mandatory for short stays, but highly recommended. Police at checkpoints
                may request one, and having it avoids complications. Available from your home
                automobile association (AAA, AA, RACV, etc.) for around $20. Valid for one year.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Passport
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Carry your passport at all times. Police checkpoints are routine, especially on
                highways and at city entrances. A photocopy is not sufficient -- they want the
                original. Keep the rental contract in the car as well.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                Credit Card
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Required for the security deposit, typically from 3,000-10,000 MAD held on your card.
                Debit cards are not accepted by most companies. The deposit is released 2-4 weeks
                after return if no claims are filed. Visa and Mastercard are universally accepted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Rules ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Gauge className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Moroccan Driving Rules
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Know these before you turn the key. Fines are collected on the spot by police.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {drivingRules.map((r) => {
              const RuleIcon = r.icon;
              return (
                <div key={r.rule} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <RuleIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {r.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{r.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Road Conditions by Region ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Road Conditions by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s roads range from autoroutes that rival Europe to unpaved desert tracks.
            Know what to expect in each region.
          </p>

          <div className="space-y-6">
            {roadConditions.map((rc) => {
              const RcIcon = rc.icon;
              return (
                <div key={rc.region} className="card-moroccan p-6">
                  <div className="flex items-start gap-4">
                    <RcIcon className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {rc.region}
                        </h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium">
                          {rc.quality}
                        </span>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-2">{rc.description}</p>
                      <p className="text-xs text-[var(--color-gold)] flex items-start gap-1">
                        <Info className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                        {rc.tips}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Toll Roads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Autoroute Toll Prices
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s toll highways are managed by Autoroutes du Maroc. Tolls are paid at exit
            booths in cash (MAD) or by credit card. Seasonal pricing can change.
          </p>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[var(--color-accent)]/10">
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Route</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Distance</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Toll</th>
                    <th className="text-left p-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Drive Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tollPrices.map((tp) => (
                    <tr key={tp.route} className="border-t border-[var(--border-primary)]">
                      <td className="p-4 text-[var(--text-primary)] font-medium">{tp.route}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{tp.distance}</td>
                      <td className="p-4 text-[var(--color-accent)] font-semibold">{tp.toll}</td>
                      <td className="p-4 text-[var(--text-secondary)]">{tp.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fuel & Gas Stations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Fuel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fuel Prices &amp; Gas Stations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fuelInfo.map((fi) => (
              <div key={fi.type} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {fi.type}
                </h3>
                <p className="text-sm font-medium text-[var(--color-gold)] mb-2">{fi.price}</p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{fi.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
              Fuel Cost Estimate for Common Routes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center p-3 bg-[var(--color-accent)]/5 rounded-lg">
                <p className="font-bold text-[var(--text-primary)]">Marrakech - Fes</p>
                <p className="text-[var(--color-accent)] font-medium">From 350 MAD</p>
                <p className="text-xs text-[var(--text-secondary)]">~530 km via autoroute</p>
              </div>
              <div className="text-center p-3 bg-[var(--color-accent)]/5 rounded-lg">
                <p className="font-bold text-[var(--text-primary)]">Marrakech - Merzouga</p>
                <p className="text-[var(--color-accent)] font-medium">From 400 MAD</p>
                <p className="text-xs text-[var(--text-secondary)]">~560 km one way</p>
              </div>
              <div className="text-center p-3 bg-[var(--color-accent)]/5 rounded-lg">
                <p className="font-bold text-[var(--text-primary)]">Tangier - Marrakech</p>
                <p className="text-[var(--color-accent)] font-medium">From 500 MAD</p>
                <p className="text-xs text-[var(--text-secondary)]">~580 km via autoroute</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parking ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Parking in Morocco
          </h2>

          <div className="space-y-4">
            {parkingInfo.map((pi) => (
              <div key={pi.location} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {pi.location}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{pi.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Road Trip Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Road Trip Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            These four itineraries cover Morocco&apos;s greatest driving experiences, from coastal
            cruises to mountain passes and desert crossings.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadTripRoutes.map((rt) => {
              const RtIcon = rt.icon;
              return (
                <div key={rt.name} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <RtIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {rt.name}
                    </h3>
                  </div>
                  <div className="flex gap-4 mb-4 text-xs">
                    <span className="px-2 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {rt.duration}
                    </span>
                    <span className="px-2 py-1 rounded-full bg-[var(--color-gold)]/10 text-[var(--color-gold)] font-medium">
                      {rt.distance}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <p><span className="font-semibold text-[var(--text-primary)]">Highlights:</span> {rt.highlights}</p>
                    <p><span className="font-semibold text-[var(--text-primary)]">Road type:</span> {rt.roadType}</p>
                    <p><span className="font-semibold text-[var(--text-primary)]">Best season:</span> {rt.bestSeason}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Scams to Avoid ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Rental Car Scams to Avoid
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Most rental experiences in Morocco go smoothly. But knowing these tactics means
            you will not be caught off guard.
          </p>

          <div className="space-y-6">
            {scamsToAvoid.map((s) => {
              const ScamIcon = s.icon;
              return (
                <div key={s.scam} className="card-moroccan p-5 flex items-start gap-4">
                  <ScamIcon className="w-6 h-6 text-[var(--color-accent)] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {s.scam}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Driving Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Avoid Night Driving Outside Cities',
                icon: AlertTriangle,
                text: 'Unlit roads, pedestrians in dark clothing, donkey carts without reflectors, and motorcycles without headlights are common after dark. If your itinerary has you arriving after sunset, plan to stop in the last town and continue in the morning.',
              },
              {
                title: 'Download Offline Maps',
                icon: Navigation,
                text: 'Google Maps and Maps.me both support offline downloads for Morocco. Download the regions you will drive through before leaving your hotel. Mobile data coverage drops in mountains and desert areas.',
              },
              {
                title: 'Carry Cash for Tolls and Fines',
                icon: DollarSign,
                text: 'While toll booths increasingly accept credit cards, smaller exits may be cash-only. Police fines are always paid in cash. Keep from 500-1,000 MAD in small notes accessible in the car.',
              },
              {
                title: 'Fill Up Before Mountain and Desert Drives',
                icon: Fuel,
                text: 'Gas stations in rural areas can be 80-100 km apart. Before heading into the Atlas Mountains or toward the desert, fill your tank completely. The last reliable fuel stop before Merzouga is in Erfoud.',
              },
              {
                title: 'Photograph Everything at Pickup',
                icon: Camera,
                text: 'Take photos and a video walkaround of the entire car before driving away. Document every scratch, dent, and chip. Email the photos to yourself with a timestamp. This is your best protection against damage disputes at return.',
              },
              {
                title: 'Stay Calm at Police Checkpoints',
                icon: ShieldCheck,
                text: 'Checkpoints are routine and not a sign of trouble. Slow down, lower your window, greet the officer with "Bonjour" or "Salam," and hand over your documents when asked. Most stops take under a minute.',
              },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <TipIcon className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Driving Through Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-dades-valley-road.webp"
                alt="Winding road cutting through the red rock formations of the Dades Valley in Morocco"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Dades Valley Road</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-atlas.webp"
                alt="High Atlas Mountain road with snow-capped peaks and green valleys"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">High Atlas Mountains</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-dades-gorge.webp"
                alt="Dramatic Dades Gorge with serpentine road carved into steep canyon walls"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Dades Gorge</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about renting and driving a car in Morocco.
          </p>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Morocco Road Trip Guide',
                description: 'Detailed itineraries, day-by-day routes, accommodation picks, and packing lists for driving across Morocco.',
                href: '/morocco-road-trip',
                icon: Route,
              },
              {
                title: 'Morocco Transport Guide',
                description: 'Trains, buses, grand taxis, and domestic flights. All your options for getting around without a car.',
                href: '/morocco-transport',
                icon: Navigation,
              },
              {
                title: 'Morocco Airport Guide',
                description: 'Arrivals, transfers, SIM cards, currency exchange, and getting from the airport to your hotel.',
                href: '/morocco-airport-guide',
                icon: Building,
              },
              {
                title: 'Morocco Budget Calculator',
                description: 'Plan your daily spend including accommodation, food, transport, activities, and souvenirs.',
                href: '/morocco-budget-calculator',
                icon: DollarSign,
              },
            ].map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                  <GuideIcon className="w-8 h-8 text-[var(--color-accent)] mb-3 group-hover:text-[var(--color-primary)] transition-colors" />
                  <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 mt-3 text-sm text-[var(--color-accent)] font-medium">
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">
            A rental car unlocks Morocco&apos;s most rewarding experiences -- from mountain passes
            above the clouds to coastal roads where the Atlantic meets the Sahara. Book smart,
            drive safe, and let the road guide you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-road-trip"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-[family-name:var(--font-heading)] font-bold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Route className="w-5 h-5" />
              Plan Your Road Trip
            </Link>
            <Link
              href="/morocco-budget-calculator"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-accent)] text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Calculate Your Budget
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

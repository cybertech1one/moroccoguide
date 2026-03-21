import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Fuel,
  Car,
  Route,
  Mountain,
  Navigation,
  Calendar,
  Compass,
  Sun,
  Tent,
  Camera,
  BookOpen,
  MessageCircleQuestion,
  CircleDot,
  Map,
  Gauge,
  Milestone,
  Building,
  Bed,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-road-trip`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Road Trip Guide 2026 | Best Routes, Car Rental & Driving Tips',
  description:
    'Plan the ultimate Morocco road trip. Best driving routes from Marrakech to Sahara, Atlantic Coast loop, Imperial Cities circuit, and High Atlas passes. Car rental tips, fuel costs from 14 MAD/liter, toll roads, GPS navigation, road conditions, safety advice, and 3-14 day itineraries.',
  keywords: [
    'Morocco road trip',
    'driving in Morocco',
    'Morocco road trip itinerary',
    'Marrakech to Sahara drive',
    'Morocco car rental',
    'Morocco driving tips',
    'best road trip routes Morocco',
    'Morocco toll roads',
    'Morocco fuel costs 2026',
    'Atlas Mountains driving',
    'Morocco road conditions',
    'Morocco self-drive holiday',
    'Imperial Cities road trip',
    'Atlantic Coast Morocco drive',
    'Tizi n Tichka pass',
    'Morocco GPS navigation',
    'Morocco driving rules',
    'Morocco road trip budget',
  ],
  openGraph: {
    title: 'Morocco Road Trip Guide 2026 | Best Routes, Car Rental & Driving Tips',
    description:
      'Complete guide to driving across Morocco. Best routes, car rental advice, fuel costs, toll roads, road conditions, mountain passes, and itineraries from 3 to 14 days covering Sahara, coast, Imperial Cities, and Atlas Mountains.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-driving-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Scenic road winding through the Atlas Mountains of Morocco with dramatic landscape',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Road Trip Guide 2026 | Routes, Car Rental & Driving Tips',
    description:
      'Best Morocco driving routes, car rental tips, fuel costs, toll roads, mountain passes, and 3-14 day itineraries from Marrakech to the Sahara and beyond.',
    images: [`${BASE_URL}/images/hero-driving-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Do I need an International Driving Permit to drive in Morocco?',
    a: 'If your domestic license is in French or Arabic, you can use it directly. All other licenses require an International Driving Permit (IDP) alongside your original license. Obtain an IDP in your home country before departure. Rental agencies enforce this rule strictly, and police checkpoints may request both documents.',
  },
  {
    q: 'How much does car rental cost in Morocco?',
    a: 'A basic economy car (Dacia Logan, Hyundai i10) starts from 250 MAD per day. A mid-range SUV or crossover starts from 500 MAD per day. A 4x4 suitable for desert pistes starts from 900 MAD per day. Prices drop significantly for weekly bookings. Add from 100-200 MAD per day for full insurance. Seasonal pricing can change during peak months (October-April and summer).',
  },
  {
    q: 'What side of the road do they drive on in Morocco?',
    a: 'Morocco drives on the right side of the road, same as continental Europe and the United States. Vehicles are left-hand drive. If you are from the UK, Australia, or Japan, plan extra focus for the first day. Roundabouts follow the continental European pattern: traffic already in the roundabout has priority.',
  },
  {
    q: 'Are Moroccan roads safe for tourists to drive?',
    a: 'Major highways (autoroutes) between cities are well-maintained, well-lit, and comparable to European motorways. National roads (routes nationales) are two-lane and require patience with slower traffic like trucks, donkey carts, and motorbikes. Mountain passes demand confident driving with tight switchbacks. Avoid driving at night outside cities, as unlit vehicles, pedestrians, and livestock on the road create serious hazards.',
  },
  {
    q: 'Can I drive a rental car from Morocco into another country?',
    a: 'Most rental companies prohibit cross-border travel entirely. A few agencies allow travel to Mauritania with advance written permission and extra insurance, but this is rare and expensive. No standard rental contract covers the Ceuta or Melilla Spanish enclaves. If you plan to cross borders, negotiate this before signing your rental agreement.',
  },
  {
    q: 'What fuel costs should I budget for a Morocco road trip?',
    a: 'Unleaded petrol (essence sans plomb) costs from 14 MAD per liter. Diesel (gasoil) costs from 12 MAD per liter. A typical 10-day road trip covering 2,500 km in a diesel economy car uses roughly 150 liters, costing from 1,800 MAD total. Fuel stations are common on major routes but sparse in the deep south and desert. Fill up whenever you see a station south of Ouarzazate.',
  },
  {
    q: 'Do I need a 4x4 for a Morocco road trip?',
    a: 'For the standard tourist routes (Marrakech to Merzouga via N10, Atlantic Coast, Imperial Cities), a regular car handles every road. You only need a 4x4 for unpaved desert tracks (pistes) south of Merzouga, the remote stretch to Erg Chigaga from M\'Hamid, and certain Atlas Mountain tracks that bypass main roads. If in doubt, stick to paved roads in a regular car.',
  },
  {
    q: 'How do toll roads work in Morocco?',
    a: 'Morocco has a modern toll highway (autoroute) network connecting Tangier, Rabat, Casablanca, Marrakech, Fes, Meknes, and Agadir. You take a ticket at the entry booth and pay at exit. Cash (MAD) and Jawaz electronic tags are accepted. A Tangier to Marrakech toll costs from 200 MAD one-way. A Casablanca to Marrakech toll costs from 80 MAD. Toll roads save significant time compared to national roads.',
  },
];

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Road Trip Guide 2026',
  description:
    'Complete guide to self-driving across Morocco covering the best road trip routes, car rental, fuel costs, toll roads, driving rules, mountain passes, safety tips, and itineraries from 3 to 14 days.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-driving-morocco.webp`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Road Trip Guide', item: PAGE_URL },
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
   DATA: TOP ROAD TRIP ROUTES
   ================================================================ */

const topRoutes = [
  {
    name: 'Marrakech to Sahara (Merzouga)',
    icon: Sun,
    distance: '560 km one-way',
    duration: '2-3 days each way',
    highlights: 'Tizi n\'Tichka pass (2,260 m), Ait Benhaddou kasbah, Ouarzazate film studios, Dades Gorge, Todra Gorge, Erfoud fossils, Merzouga dunes',
    road: 'Paved N9/N10 the entire way. No 4x4 required. Well-maintained switchbacks on the pass.',
    bestSeason: 'October to April. Summer heat in the desert exceeds 45C.',
    tip: 'Leave Marrakech by 7:00 AM to cross Tizi n\'Tichka in morning light. Stop at the pass summit for panoramic views. Do not rush this drive -- the gorges deserve at least half a day each.',
  },
  {
    name: 'Atlantic Coast Loop',
    icon: Compass,
    distance: '900 km loop',
    duration: '5-7 days',
    highlights: 'Casablanca, El Jadida Portuguese cistern, Oualidia lagoon, Safi pottery, Essaouira ramparts, Agadir beaches, Taghazout surf town, Legzira arches',
    road: 'Excellent coastal highway the entire route. Mostly autoroute or well-maintained national roads.',
    bestSeason: 'Year-round. Best surf November to March. Summer brings crowds to Agadir.',
    tip: 'Spend at least two nights in Essaouira. The town rewards slow exploration. Budget a seafood lunch at the port grill stalls (from 60 MAD for a mixed plate).',
  },
  {
    name: 'Imperial Cities Circuit',
    icon: Building,
    distance: '850 km loop',
    duration: '5-7 days',
    highlights: 'Rabat Hassan Tower, Meknes Roman ruins of Volubilis, Fes medina, Ifrane cedar forests, Middle Atlas lakes, Beni Mellal, return to Marrakech',
    road: 'Autoroute connects Rabat-Meknes-Fes. National roads through the Middle Atlas are scenic two-lane highways. All paved.',
    bestSeason: 'March to May and September to November. Fes is extremely hot in July-August.',
    tip: 'Book your Fes medina accommodation in advance -- parking outside the medina gates is limited. Most riads can arrange nearby garage parking for from 30-50 MAD per night.',
  },
  {
    name: 'High Atlas & Mountain Passes',
    icon: Mountain,
    distance: '400-600 km depending on route',
    duration: '3-5 days',
    highlights: 'Tizi n\'Tichka (2,260 m), Tizi n\'Test (2,100 m), Dades Gorge road, Tichka Plateau, Imilchil, Zawyat Ahansal',
    road: 'Main passes (Tichka, Test) are paved but narrow with hairpin turns. Side roads to remote valleys may be unpaved. 4x4 recommended for off-main-road exploration.',
    bestSeason: 'May to October. Passes can close temporarily due to snow December through February.',
    tip: 'Tizi n\'Test is far less trafficked than Tizi n\'Tichka and offers more dramatic scenery, but the road is narrower and requires confident mountain driving. Check locally for road conditions before attempting.',
  },
];

/* ================================================================
   DATA: CAR RENTAL TIERS
   ================================================================ */

const rentalTiers = [
  {
    category: 'Economy',
    examples: 'Dacia Logan, Hyundai i10, Renault Clio',
    price: 'From 250 MAD/day',
    fuel: 'Petrol, 5-6 L/100 km',
    suitedFor: 'City driving, coastal roads, well-paved routes. Fine for Marrakech-Sahara via main roads.',
    note: 'Most popular choice. Low running cost. Book manual transmission for the cheapest rate.',
  },
  {
    category: 'Mid-Range SUV / Crossover',
    examples: 'Dacia Duster, Hyundai Tucson, Renault Kadjar',
    price: 'From 500 MAD/day',
    fuel: 'Diesel, 6-7 L/100 km',
    suitedFor: 'Mountain passes, gravel side roads, families needing luggage space. Higher driving position for confidence on switchbacks.',
    note: 'Best balance of comfort, cost, and capability for a full Morocco circuit.',
  },
  {
    category: '4x4 / Off-Road',
    examples: 'Toyota Land Cruiser, Suzuki Jimny, Mitsubishi Pajero',
    price: 'From 900 MAD/day',
    fuel: 'Diesel, 10-12 L/100 km',
    suitedFor: 'Desert pistes, Erg Chigaga access, remote Atlas tracks, off-road adventure.',
    note: 'Only necessary for unpaved desert tracks. Overkill for standard routes. Requires larger fuel budget.',
  },
];

/* ================================================================
   DATA: DRIVING RULES & ESSENTIALS
   ================================================================ */

const drivingRules = [
  { rule: 'Speed Limits', icon: Gauge, text: 'Urban areas: 40-60 km/h. National roads: 80-100 km/h. Autoroutes: 120 km/h. Speed cameras are widespread and fines start from 300 MAD. The fine doubles if unpaid within 48 hours.' },
  { rule: 'Roundabouts', icon: CircleDot, text: 'Traffic already inside the roundabout has priority. In practice, many drivers ignore this rule. Approach cautiously, yield to cars on your left, and drive defensively. Horn use at roundabouts is common and not aggressive.' },
  { rule: 'Police Checkpoints', icon: ShieldCheck, text: 'Expect checkpoints at city entrances and on desert roads. Have your license, IDP, passport, and rental papers ready. Officers are typically polite and wave tourists through quickly. Always stop when flagged.' },
  { rule: 'Seatbelts & Phones', icon: AlertTriangle, text: 'Seatbelts are mandatory for all occupants. Using a phone while driving carries a from 500 MAD fine. Hands-free is permitted. Child car seats are required for children under 10 but rarely enforced. Bring your own if traveling with small children.' },
  { rule: 'Night Driving', icon: Clock, text: 'Avoid driving after dark outside major cities. Unlit vehicles, donkey carts, pedestrians in dark clothing, and livestock on the road are common hazards. If you must drive at night, reduce speed dramatically and use high beams on empty stretches.' },
  { rule: 'Fuel Stations', icon: Fuel, text: 'Abundant on autoroutes and national roads. Sparse south of Ouarzazate and in the deep south. Never pass a fuel station with less than a quarter tank in remote areas. Most stations accept cash only. Some in cities accept cards.' },
];

/* ================================================================
   DATA: ROAD TRIP COST BREAKDOWN
   ================================================================ */

const costBreakdown = [
  { item: 'Economy car rental (7 days)', cost: 'From 1,750 MAD', note: 'Dacia Logan or similar, manual' },
  { item: 'Full insurance (CDW + theft, 7 days)', cost: 'From 700 MAD', note: 'Reduces excess to zero' },
  { item: 'Fuel (1,500 km, diesel)', cost: 'From 1,080 MAD', note: 'At ~12 MAD/L, 6 L/100 km' },
  { item: 'Toll roads (Marrakech-Fes round trip)', cost: 'From 300 MAD', note: 'Via autoroute both ways' },
  { item: 'Parking (7 nights, guarded lots)', cost: 'From 210 MAD', note: '~30 MAD per night average' },
  { item: 'Accommodation (7 nights, mid-range riad)', cost: 'From 3,500 MAD', note: '~500 MAD per night for double room' },
  { item: 'Food (7 days, local restaurants)', cost: 'From 1,400 MAD', note: '~200 MAD per day per person' },
  { item: 'Estimated 7-day total (one person)', cost: 'From 8,940 MAD', note: 'Roughly 820 EUR / 890 USD' },
];

/* ================================================================
   DATA: ITINERARIES
   ================================================================ */

const itineraries = [
  {
    title: '3-Day Express: Marrakech to Desert & Back',
    days: '3 days',
    distance: '1,120 km',
    icon: Route,
    schedule: [
      'Day 1: Marrakech to Dades Gorge via Tizi n\'Tichka pass and Ait Benhaddou (330 km, 7 hours with stops)',
      'Day 2: Dades Gorge to Merzouga via Todra Gorge and Erfoud (230 km, 5 hours with stops). Sunset camel ride into Erg Chebbi dunes.',
      'Day 3: Merzouga to Marrakech via N10 and Ouarzazate (560 km, 8 hours). Long day -- leave by 6:00 AM.',
    ],
    tip: 'This itinerary is tight but doable. Consider flying back from Errachidia to save 8 hours of driving on Day 3.',
  },
  {
    title: '7-Day Classic: Sahara & Imperial Cities',
    days: '7 days',
    distance: '1,800 km',
    icon: Map,
    schedule: [
      'Day 1: Marrakech to Ait Benhaddou (190 km). Afternoon at the kasbah.',
      'Day 2: Ait Benhaddou to Dades Gorge via Rose Valley (150 km). Hike the gorge.',
      'Day 3: Dades to Merzouga via Todra Gorge (280 km). Night in desert camp.',
      'Day 4: Merzouga to Midelt via Errachidia and Ziz Gorge (300 km).',
      'Day 5: Midelt to Fes via Ifrane and cedar forests (240 km). Explore Fes medina.',
      'Day 6: Full day in Fes. No driving.',
      'Day 7: Fes to Marrakech via autoroute (530 km, 5 hours on highway).',
    ],
    tip: 'The Fes day with no driving is essential. After several days on mountain roads, a walking day in the medina recharges you.',
  },
  {
    title: '10-Day Grand Tour: Coast, Desert & Mountains',
    days: '10 days',
    distance: '2,500 km',
    icon: Compass,
    schedule: [
      'Day 1: Casablanca to El Jadida to Essaouira (350 km). Portuguese cistern, Oualidia oysters.',
      'Day 2: Full day in Essaouira. No driving. Ramparts, port, medina, beach.',
      'Day 3: Essaouira to Marrakech (190 km). Afternoon in Jemaa el-Fnaa.',
      'Day 4: Marrakech to Ait Benhaddou via Tizi n\'Tichka (190 km).',
      'Day 5: Ait Benhaddou to Merzouga via gorges (460 km).',
      'Day 6: Full day in Merzouga. Camel trek, desert camp, sunrise dune hike.',
      'Day 7: Merzouga to Midelt via Ziz Gorge (300 km).',
      'Day 8: Midelt to Fes (200 km). Afternoon in Fes.',
      'Day 9: Fes to Chefchaouen (210 km). Blue city exploration.',
      'Day 10: Chefchaouen to Casablanca or Tangier (300 km to Casa, 120 km to Tangier).',
    ],
    tip: 'This is the ideal duration for a first Morocco road trip. Two full rest days keep fatigue manageable.',
  },
  {
    title: '14-Day Ultimate Morocco Circuit',
    days: '14 days',
    distance: '3,200 km',
    icon: Navigation,
    schedule: [
      'Days 1-2: Tangier, explore city, Cap Spartel, Hercules Caves.',
      'Day 3: Tangier to Chefchaouen (120 km).',
      'Day 4: Chefchaouen to Fes (210 km).',
      'Day 5: Full day in Fes. Medina, tanneries, Bou Inania.',
      'Day 6: Fes to Merzouga via Midelt and Ziz Gorge (480 km).',
      'Day 7: Full day in Merzouga. Desert camp overnight.',
      'Day 8: Merzouga to Dades Gorge (230 km).',
      'Day 9: Dades to Ouarzazate to Ait Benhaddou (160 km).',
      'Day 10: Ait Benhaddou to Marrakech via Tizi n\'Tichka (190 km).',
      'Day 11: Full day in Marrakech.',
      'Day 12: Marrakech to Essaouira (190 km).',
      'Day 13: Essaouira to El Jadida (300 km) via Safi.',
      'Day 14: El Jadida to Casablanca (100 km). End of trip.',
    ],
    tip: 'Two full weeks lets you breathe. Add Meknes and Volubilis between Fes and Marrakech if you want to see every Imperial City.',
  },
];

/* ================================================================
   DATA: SCENIC STOPS
   ================================================================ */

const scenicStops = [
  { name: 'Tizi n\'Tichka Summit (2,260 m)', location: 'Between Marrakech & Ouarzazate', desc: 'The highest major road pass in Morocco. Pull over at the summit for panoramic views of the High Atlas. Souvenir stalls sell fossils and minerals. The descent toward Ouarzazate reveals red-earth valleys.' },
  { name: 'Ait Benhaddou', location: 'Ouarzazate Province', desc: 'UNESCO World Heritage ksar (fortified village) made of red pise clay. Film location for Gladiator, Game of Thrones, and Lawrence of Arabia. Cross the riverbed on foot to explore the kasbah. Entry is free; tip your guide.' },
  { name: 'Todra Gorge', location: 'Tinghir', desc: '300-meter limestone canyon walls towering above a narrow road. The final 600 meters of the gorge are the most dramatic. Rock climbers scale the walls year-round. Cafes at the gorge mouth serve tagine with a view.' },
  { name: 'Dades Gorge Road of a Thousand Kasbahs', location: 'Boumalne Dades', desc: 'The most photographed hairpin turns in Morocco. The road climbs from the valley floor through a series of tight switchbacks carved into red rock. Drive slowly and stop at the viewpoint above the switchbacks.' },
  { name: 'Ziz Gorge & Valley', location: 'Errachidia to Erfoud', desc: 'A deep river canyon lined with date palms and Berber villages. The viewpoint above the Tunnel du Legionnaire offers one of the most striking vistas on the Sahara route. Stop at Erfoud for fossil workshops.' },
  { name: 'Legzira Beach', location: 'Sidi Ifni coast', desc: 'Dramatic natural stone arches carved by Atlantic waves into red sandstone cliffs. Best visited at low tide when you can walk beneath the arches. Sunset here is spectacular. A short detour from the Agadir-Tiznit road.' },
];

/* ================================================================
   DATA: ACCOMMODATION TYPES ALONG ROUTES
   ================================================================ */

const accommodationTypes = [
  { type: 'Riads (Medina Guesthouses)', icon: Bed, price: 'From 400 MAD/night', desc: 'Traditional courtyard houses converted to guesthouses. Found in Marrakech, Fes, Essaouira, and Chefchaouen. Breakfast included. Parking arranged nearby (from 30 MAD/night extra).' },
  { type: 'Kasbahs & Auberges', icon: Building, price: 'From 300 MAD/night', desc: 'Fortified guesthouses along the Sahara route, especially between Ouarzazate and Merzouga. Often family-run with home-cooked dinners. On-site parking. Half-board packages common.' },
  { type: 'Desert Camps', icon: Tent, price: 'From 500 MAD/night', desc: 'Tented camps in the Sahara dunes (Erg Chebbi at Merzouga or Erg Chigaga near M\'Hamid). Includes camel ride, dinner, breakfast, and sunrise viewing. Luxury camps with private bathrooms from 1,500 MAD.' },
  { type: 'Roadside Hotels & Motels', icon: Car, price: 'From 200 MAD/night', desc: 'Basic hotels in towns like Midelt, Beni Mellal, and Errachidia. Clean, functional, with parking. Good for overnight stops on long driving days when you just need sleep and a shower.' },
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoRoadTripPage() {
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
          style={{ backgroundImage: 'url(/images/hero-driving-morocco.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Road Trip Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Self-Drive Travel
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Road Trip
            <br className="hidden md:block" /> Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From the Atlantic coast to the Sahara dunes, through mountain passes and ancient cities.
            Everything you need to plan a self-drive adventure across Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Why Drive Morocco Yourself
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              A road trip is the single best way to experience Morocco beyond the medinas. The country
              packs an absurd amount of geographic variety into a territory the size of California:
              Atlantic surf beaches, snow-capped mountains over 4,000 meters, river gorges cut through
              red limestone, and the vast sand seas of the Sahara. Public transport connects the major
              cities but misses the spaces between them -- and those spaces are where Morocco is most
              striking.
            </p>
            <p>
              Morocco&apos;s road infrastructure has improved dramatically in the past decade. A modern
              autoroute (toll highway) network now links Tangier, Rabat, Casablanca, Marrakech, Fes,
              and Agadir. National roads across the Atlas are paved and well-maintained. Fuel stations
              are plentiful on major routes. GPS navigation works reliably. The biggest adjustment for
              most foreign drivers is the driving culture itself: assertive overtaking, creative lane
              discipline, and the occasional donkey cart occupying half the road.
            </p>
            <p>
              This guide covers the practical details -- car rental, fuel costs, toll roads, driving
              rules, insurance -- alongside the four best road trip routes and itineraries from 3 to
              14 days. Prices are current for 2026. Seasonal pricing can change during peak tourist
              months.
            </p>
          </div>
        </div>
      </section>

      {/* ── Top Road Trip Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Road Trip Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four classic driving routes that cover Morocco&apos;s most spectacular landscapes. Each can be
            driven independently or combined into a longer circuit.
          </p>

          <div className="space-y-8">
            {topRoutes.map((route) => {
              const RouteIcon = route.icon;
              return (
                <div key={route.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <RouteIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {route.name}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-1 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Milestone className="w-3.5 h-3.5" /> {route.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {route.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Highlights:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{route.highlights}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Road quality:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{route.road}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--color-accent)]">Best season:</span>{' '}
                      <span className="text-[var(--text-secondary)]">{route.bestSeason}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mt-4">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {route.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Car Rental Guide ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Car Rental Guide
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Three rental tiers to match your route, budget, and comfort level.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rentalTiers.map((tier) => (
              <div key={tier.category} className="card-moroccan p-6">
                <div className="w-12 h-12 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-4">
                  <Car className="w-6 h-6 text-[var(--color-accent)]" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {tier.category}
                </h3>
                <p className="text-sm text-[var(--text-muted)] italic mb-4">{tier.examples}</p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold text-[var(--color-accent)]">Price:</span>{' '}
                    <span className="text-[var(--text-secondary)]">{tier.price}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--color-accent)]">Fuel:</span>{' '}
                    <span className="text-[var(--text-secondary)]">{tier.fuel}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--color-accent)]">Best for:</span>{' '}
                    <span className="text-[var(--text-secondary)]">{tier.suitedFor}</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg mt-4">
                  <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-xs text-[var(--text-muted)]">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Rental tips */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              Essential Car Rental Tips
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Book online in advance', text: 'Prices at airport desks are 30-50% higher than online pre-bookings. International aggregators (Discover Cars, Rentalcars) compare local agencies. Always read the insurance fine print.' },
                { title: 'Document existing damage', text: 'Walk around the car with the agent before leaving. Photograph every scratch, dent, and chip with your phone. Email the photos to yourself with a timestamp. This prevents false damage claims on return.' },
                { title: 'Choose diesel when possible', text: 'Diesel (gasoil) costs from 12 MAD per liter versus from 14 MAD for petrol. Diesel engines also deliver better range on long drives. Most SUVs and crossovers are diesel in Morocco.' },
                { title: 'Get full insurance coverage', text: 'The basic CDW (Collision Damage Waiver) included in most rentals still leaves a from 5,000-15,000 MAD excess. Pay the extra from 100-200 MAD/day for zero-excess coverage. One pothole or stray rock can cost more than the insurance.' },
                { title: 'Manual vs automatic', text: 'Manual transmission cars are cheaper and more available. Automatic cars carry a from 100-150 MAD/day surcharge and must be booked well in advance. If you can only drive automatic, book early.' },
                { title: 'One-way drop-off fees', text: 'Picking up in Marrakech and dropping off in Fes (or vice versa) typically costs from 500-1,500 MAD extra. Some agencies waive this for rentals over 7 days. Confirm the fee before booking.' },
              ].map((tip) => (
                <div key={tip.title} className="card-moroccan p-4">
                  <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                    {tip.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Rules & Safety ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Driving Rules &amp; Safety
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six rules of the road that every foreign driver in Morocco must know.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drivingRules.map((item) => {
              const RuleIcon = item.icon;
              return (
                <div key={item.rule} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <RuleIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {item.rule}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GPS & Navigation ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            GPS &amp; Navigation
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Google Maps works well across Morocco and has been the most reliable navigation tool for
              several years. It handles toll roads correctly, shows fuel stations, and provides
              reasonably accurate drive times. Download offline maps for your entire route before
              departure -- cellular coverage is patchy in the Atlas Mountains and desert.
            </p>
            <p>
              Maps.me and Organic Maps are strong alternatives for offline use, with better trail and
              piste coverage than Google Maps. Waze has a smaller user base in Morocco but is useful
              for speed camera alerts on autoroutes. Apple Maps has improved but remains less detailed
              than Google Maps for rural Moroccan roads.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {[
              { title: 'Download offline maps', text: 'Cellular data drops in mountain passes and desert stretches. Download the entire Morocco map pack in Google Maps before you leave your accommodation. This uses roughly 1-2 GB of storage.' },
              { title: 'Buy a local SIM card', text: 'Maroc Telecom, Inwi, or Orange SIM cards cost from 30 MAD with from 20 GB of data for from 100 MAD. Available at airports and city shops. Data lets you use real-time navigation and check road conditions.' },
              { title: 'Trust road signs over GPS', text: 'On mountain passes, GPS occasionally suggests unpaved shortcuts that are impassable in a regular car. When the GPS route diverges from signed road numbers (N9, N10, R703), follow the signs.' },
              { title: 'Carry a paper map as backup', text: 'A Michelin Morocco map (742) costs from 100 MAD at Moroccan bookshops. Invaluable when electronics fail. Paper maps also show elevation contours and pass heights that digital maps may omit.' },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-4">
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] shrink-0" />
                  {tip.title}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Toll Roads & Road Conditions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Milestone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Toll Roads &amp; Road Conditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect from Morocco&apos;s road network and how to budget for tolls.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Autoroutes (Toll Highways)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco&apos;s autoroute network is modern, well-maintained, and fast. Dual carriageway
                with a 120 km/h speed limit, rest stops with fuel and food every 40-60 km, and clear
                signage in Arabic and French. The network connects Tangier-Rabat-Casablanca-Marrakech
                and Rabat-Meknes-Fes, with an extension to Agadir. You collect a ticket at the entry
                gate and pay cash (MAD) at exit. A Jawaz electronic tag (from 50 MAD deposit) lets you
                skip queues at toll plazas.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs">
                <div className="p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--text-primary)]">Casablanca-Marrakech:</span>{' '}
                  <span className="text-[var(--color-accent)]">From 80 MAD</span>
                </div>
                <div className="p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--text-primary)]">Casablanca-Fes:</span>{' '}
                  <span className="text-[var(--color-accent)]">From 120 MAD</span>
                </div>
                <div className="p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--text-primary)]">Tangier-Marrakech:</span>{' '}
                  <span className="text-[var(--color-accent)]">From 200 MAD</span>
                </div>
                <div className="p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--text-primary)]">Rabat-Fes:</span>{' '}
                  <span className="text-[var(--color-accent)]">From 90 MAD</span>
                </div>
                <div className="p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--text-primary)]">Marrakech-Agadir:</span>{' '}
                  <span className="text-[var(--color-accent)]">From 100 MAD</span>
                </div>
                <div className="p-2 bg-[var(--surface-muted)] rounded-lg">
                  <span className="font-semibold text-[var(--text-primary)]">Casablanca-Rabat:</span>{' '}
                  <span className="text-[var(--color-accent)]">From 30 MAD</span>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                National Roads (Routes Nationales)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Two-lane paved roads connecting cities and towns. Speed limit 80-100 km/h. Road
                quality is generally good but deteriorates in remote mountain and southern desert
                areas. Expect slow trucks on uphill sections, roadside vendors, and occasional
                livestock crossings. Overtaking requires patience and clear sightlines. These roads
                are where the most interesting scenery is found -- the N10 from Ouarzazate to Merzouga
                crosses through palm oases, rocky hamada, and the pre-Saharan steppe.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Mountain Roads &amp; Passes
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Paved but narrow, with tight hairpin turns and no guardrails in many sections. The
                Tizi n&apos;Tichka (N9) is the most heavily traveled pass and is well-maintained
                year-round except during rare heavy snowfall. The Tizi n&apos;Test (R203) is narrower
                and less trafficked. Mountain roads demand concentration, low gear on descents, and
                frequent horn use on blind curves. Trucks and buses have priority on narrow sections.
                Check road conditions through your accommodation before driving any pass between
                December and February.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Desert Pistes (Unpaved Tracks)
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Unpaved tracks in the south and deep desert. Ranges from well-graded gravel (passable
                in a careful sedan) to deep sand requiring 4x4 and deflated tires. The piste from
                M&apos;Hamid to Erg Chigaga (50 km) absolutely requires a 4x4 or organized tour.
                Pistes south of Merzouga toward the Algerian border also demand off-road capability.
                Never drive a piste alone without informing someone of your route and expected return.
                Carry extra water (at least 5 liters per person) on any desert track.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Itineraries ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Road Trip Itineraries
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four tested itineraries from a quick desert dash to the ultimate two-week circuit.
          </p>

          <div className="space-y-8">
            {itineraries.map((itin) => {
              const ItinIcon = itin.icon;
              return (
                <div key={itin.title} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                      <ItinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {itin.title}
                      </h3>
                      <div className="flex gap-4 mt-1 text-sm text-[var(--text-muted)]">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {itin.days}
                        </span>
                        <span className="flex items-center gap-1">
                          <Milestone className="w-3.5 h-3.5" /> {itin.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ol className="space-y-2 mb-4">
                    {itin.schedule.map((day, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                        <span className="w-5 h-5 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0 text-xs font-bold text-[var(--color-accent)]">
                          {i + 1}
                        </span>
                        {day}
                      </li>
                    ))}
                  </ol>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {itin.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Scenic Stops ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Camera className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Must-Stop Scenic Points
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six places where you must pull over, get out of the car, and take it in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenicStops.map((stop) => (
              <div key={stop.name} className="card-moroccan p-5">
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {stop.name}
                </h3>
                <p className="text-xs text-[var(--color-accent)] mb-3 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {stop.location}
                </p>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{stop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodation Along Routes ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Bed className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Stay Along the Route
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four accommodation types you will encounter on a Morocco road trip, with typical pricing.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {accommodationTypes.map((acc) => {
              const AccIcon = acc.icon;
              return (
                <div key={acc.type} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center shrink-0">
                      <AccIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {acc.type}
                      </h3>
                      <p className="text-xs text-[var(--color-accent)] font-semibold">{acc.price}</p>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{acc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Cost Breakdown ── */}
      <section className="py-16 md:py-20 moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Road Trip Cost Breakdown
          </h2>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Sample budget for a 7-day road trip for one person. All prices are starting prices in Moroccan Dirhams. Seasonal pricing can change.
          </p>
          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Item</div>
                <div className="p-3 px-4">Cost (MAD)</div>
                <div className="p-3 px-4">Details</div>
              </div>
              {costBreakdown.map((item, i) => (
                <div
                  key={item.item}
                  className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'} ${i === costBreakdown.length - 1 ? 'font-bold' : ''}`}
                >
                  <div className="p-3 px-4 text-[var(--text-primary)]">{item.item}</div>
                  <div className="p-3 px-4 text-[var(--color-accent)] font-semibold">{item.cost}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            On the Road in Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-dades-valley-road.webp"
                alt="Winding road through the Dades Valley with dramatic red rock formations and hairpin turns"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Dades Valley Switchbacks</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-ait-benhaddou.webp"
                alt="Ait Benhaddou kasbah UNESCO World Heritage site with red clay buildings against blue sky"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Ait Benhaddou Kasbah</p>
            </div>
            <div className="relative h-72 rounded-xl overflow-hidden">
              <img
                src="/images/hero-merzouga.webp"
                alt="Golden sand dunes of Erg Chebbi at Merzouga in the Moroccan Sahara desert"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium">Erg Chebbi, Merzouga</p>
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
            Answers to the most common questions about driving and road-tripping in Morocco.
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
                title: 'Sahara Desert Guide',
                description: 'Camel treks, desert camps, Erg Chebbi and Erg Chigaga dunes, stargazing, and practical tips for the Moroccan Sahara.',
                href: '/sahara-desert',
                icon: Sun,
              },
              {
                title: 'Atlas Mountains Guide',
                description: 'Trekking routes, Berber villages, Toubkal ascent, and seasonal conditions for the High, Middle, and Anti-Atlas ranges.',
                href: '/atlas-mountains',
                icon: Mountain,
              },
              {
                title: 'Budget Travel Morocco',
                description: 'How to travel Morocco on a backpacker budget. Transport, food, accommodation, and activities for under 400 MAD per day.',
                href: '/budget-travel',
                icon: DollarSign,
              },
              {
                title: 'Morocco Safety Guide',
                description: 'Practical safety advice covering scams, solo female travel, health, road safety, and emergency contacts.',
                href: '/safety',
                icon: ShieldCheck,
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

      {/* ── More Transport & Travel Resources ── */}
      <section className="py-12 md:py-16 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
            More Transport &amp; Travel Resources
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { href: '/transport', title: 'Morocco Transport Guide', desc: 'Complete overview of trains, buses, taxis, and domestic flights across Morocco.' },
              { href: '/camping', title: 'Morocco Camping Guide', desc: 'Wild camping, organized campsites, and overlanding tips for self-drive travelers.' },
              { href: '/best-time-visit-morocco', title: 'Best Time to Visit', desc: 'Month-by-month weather, crowds, and pricing to help you pick the ideal travel window.' },
              { href: '/first-time', title: 'First Time in Morocco', desc: 'Everything a first-time visitor needs to know about culture, customs, and logistics.' },
              { href: '/packing', title: 'Morocco Packing Guide', desc: 'What to pack for desert, coast, and mountains -- season by season.' },
              { href: '/morocco-itineraries', title: 'Morocco Itineraries', desc: 'Curated 3-day to 14-day itineraries for every travel style and budget.' },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="card-moroccan p-5 hover:shadow-lg transition-shadow group">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-base mb-2 group-hover:text-[var(--color-accent)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                  {guide.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{guide.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Start planning your Morocco road trip today. Browse our city guides for
            detailed information on every destination along your route.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Cities
            </Link>
            <Link
              href="/morocco-itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              Browse Itineraries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

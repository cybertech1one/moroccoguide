import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  ArrowRight,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  AlertTriangle,
  Globe,
  Users,
  Car,
  Fuel,
  Info,
  CreditCard,
  ShieldCheck,
  Key,
  FileText,
  DollarSign,
  Calendar,
  Route,
  Shield,
  CircleDollarSign,
  Navigation,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Car Rental Guide 2026 | Prices, Companies, Insurance & Driving Tips',
  description:
    'Rent a car in Morocco with confidence. Compare Hertz, Europcar, Sixt, and local agencies. Daily rates from 250 MAD, insurance options, driving rules, toll roads, fuel costs, scam warnings, road trip routes, and license requirements for 2026.',
  keywords: [
    'rent a car morocco',
    'morocco car rental',
    'car hire morocco',
    'driving in morocco tips',
    'best car rental companies morocco',
    'morocco car rental prices 2026',
    'morocco rental car insurance',
    'morocco toll roads cost',
    'morocco road trip routes',
    'rent a car marrakech',
    'casablanca airport car hire',
    'morocco 4x4 rental',
    'dacia duster morocco',
    'morocco driving license requirements',
    'morocco car rental scams',
    'fuel cost morocco 2026',
    'morocco autoroute tolls',
    'cheap car rental morocco',
  ],
  openGraph: {
    title: 'Morocco Car Rental Guide 2026 | Prices, Companies, Insurance & Driving Tips',
    description:
      'Everything you need to rent a car in Morocco. Compare agencies, understand insurance, check prices from 250 MAD/day, and plan epic road trips across the Atlas, desert, and coast.',
    url: `${BASE_URL}/morocco-car-rental`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Car driving along a winding Moroccan road with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Car Rental Guide 2026 | Prices, Tips & Insurance',
    description:
      'Compare rental agencies, vehicle types, insurance options, and daily rates. Essential tips for renting and driving a car in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-car-rental` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-car-rental`,
  name: 'Morocco Car Rental Guide 2026 | Prices, Companies, Insurance & Driving Tips',
  description:
    'Comprehensive guide to renting a car in Morocco covering rental agencies, vehicle pricing, insurance options, documentation, driving rules, toll roads, fuel costs, parking, road trip routes, and scam warnings.',
  url: `${BASE_URL}/morocco-car-rental`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-car-rental`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Car Rental', item: `${BASE_URL}/morocco-car-rental` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need an international driving permit to rent a car in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An International Driving Permit (IDP) is strongly recommended and frequently required alongside your home country license. Police at checkpoints routinely ask for it. Obtain one from your national automobile association (AAA in the US, Post Office in the UK) before traveling. It costs around $20 and is valid for one year.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a car in Morocco per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A compact economy car like a Dacia Sandero starts from 250 MAD per day. A midsize SUV such as a Dacia Duster starts from 500 MAD per day. A full 4x4 like a Toyota Land Cruiser runs from 700 MAD per day. Prices spike 30-50% during July-August and Christmas/New Year. Weekly rentals offer significantly better per-day rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I rent from an international or local agency in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'International agencies like Hertz, Europcar, and Sixt offer newer fleets, roadside assistance, and multi-city drop-offs but charge higher rates. Local agencies such as Medloc Car, SureCar Morocco, or Green Mouse Cars can be 20-40% cheaper but may have older vehicles. First-time visitors usually prefer international agencies for reliability. Experienced travelers save money with local firms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What insurance do I need when renting a car in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic CDW (Collision Damage Waiver) is usually included but carries a high excess of 5,000-15,000 MAD. Upgrading to Super CDW (from 80-150 MAD/day) reduces the excess to zero. Theft Protection and Personal Accident Insurance are recommended add-ons. Tire and windshield damage are often excluded even from full coverage. Check if your credit card already provides rental car coverage.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much do toll roads cost in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has approximately 1,800 km of toll motorways (autoroutes). Casablanca to Marrakech costs around 67 MAD, Casablanca to Tangier around 170 MAD, and Casablanca to Fes around 110 MAD. Tolls are paid in cash (MAD) or by Jawaz electronic tag at automated booths. Budget 100-300 MAD per day for toll roads depending on your route.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to drive in Morocco as a tourist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Driving in Morocco is manageable for confident drivers, especially on the modern motorway network. Main challenges include assertive local driving styles in cities, unlit rural roads at night, and winding mountain passes. Avoid night driving in rural areas. Morocco drives on the right. Police checkpoints are common and routine; carry all documents at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common car rental scams in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common issues are pre-existing damage claims, fuel gauge manipulation, and pressure to buy unnecessary insurance at the counter. Always photograph every surface of the car before driving away. Check the fuel level matches the contract. Get all charges in writing. Pay by credit card for chargeback protection. Use agencies with strong online reviews.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive a rental car from one city and return it in another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most international and many local agencies allow one-way rentals between major cities. A drop-off fee of 500-1,500 MAD typically applies. Popular one-way routes include Marrakech to Fes and Casablanca to Tangier. Confirm the policy and fee before booking, as smaller local agencies may only accept returns to the pickup location.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: RENTAL COMPANIES
   ═══════════════════════════════════════════════════════════════ */

const internationalAgencies = [
  { name: 'Hertz', pros: 'Large fleet, airport desks at all major airports, 24/7 roadside assistance', cons: 'Highest daily rates, aggressive insurance upsells at counter', price: 'From 350 MAD/day' },
  { name: 'Europcar', pros: 'Largest network in Morocco (30+ locations), reliable fleet, online booking deals', cons: 'Fuel policy varies between branches, counter staff push add-ons', price: 'From 300 MAD/day' },
  { name: 'Sixt', pros: 'Modern vehicles, strong SUV selection, flexible cancellation up to 48h before', cons: 'Fewer locations than Europcar, premium pricing in peak season', price: 'From 320 MAD/day' },
  { name: 'Avis / Budget', pros: 'Same parent company offering two price tiers, good vehicle condition, loyalty perks', cons: 'Budget brand has older cars, limited off-airport locations', price: 'From 300 MAD/day' },
] as const;

const localAgencies = [
  { name: 'Medloc Car', pros: 'Competitive pricing, negotiable rates for multi-week rentals, speaks Arabic/French/English', cons: 'Older fleet, stricter damage policies, limited roadside assistance', price: 'From 200 MAD/day' },
  { name: 'SureCar Morocco', pros: 'Good online reviews, transparent pricing, free airport delivery in Marrakech', cons: 'Small fleet, advance booking essential in peak season', price: 'From 220 MAD/day' },
  { name: 'Green Mouse Cars', pros: 'Budget-friendly, 4x4 options for desert trips, offices in Ouarzazate and Errachidia', cons: 'English support limited, deposits can be high, no credit card at some branches', price: 'From 180 MAD/day' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: VEHICLE TYPES
   ═══════════════════════════════════════════════════════════════ */

const vehicleTypes = [
  { type: 'Compact / Economy', examples: 'Dacia Sandero, Renault Clio, Hyundai i10', bestFor: 'City driving, highway travel, budget trips', rate: 'From 250 MAD/day', fuel: '5-6 L/100km', note: 'Handles all paved roads. Not for mountain passes in winter or unpaved desert tracks.' },
  { type: 'Midsize Sedan', examples: 'Dacia Logan, Renault Megane, Peugeot 301', bestFor: 'Couples, small families, longer highway drives', rate: 'From 350 MAD/day', fuel: '6-7 L/100km', note: 'Good boot space. Comfortable on well-maintained mountain roads.' },
  { type: 'SUV / Crossover', examples: 'Dacia Duster, Hyundai Tucson, Toyota RAV4', bestFor: 'Atlas Mountain passes, families with luggage, mixed terrain', rate: 'From 500 MAD/day', fuel: '7-9 L/100km', note: 'The Dacia Duster is Morocco\'s most popular rental SUV. Handles most conditions well.' },
  { type: 'Full 4x4 / Off-Road', examples: 'Toyota Land Cruiser, Mitsubishi Pajero, Suzuki Jimny', bestFor: 'Sahara desert tracks, remote villages, off-road exploration', rate: 'From 700 MAD/day', fuel: '10-14 L/100km', note: 'Must have explicit off-road permission in contract. Deposit often 10,000+ MAD.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: INSURANCE TYPES
   ═══════════════════════════════════════════════════════════════ */

const insuranceTypes = [
  { type: 'CDW (Collision Damage Waiver)', included: 'Usually included', excess: '5,000-15,000 MAD', covers: 'Collision damage to rental vehicle', note: 'Basic protection with high excess. You pay the excess regardless of fault.' },
  { type: 'SCDW (Super CDW)', included: 'Optional add-on', excess: '0-2,000 MAD', covers: 'Same as CDW with reduced or zero excess', note: 'From 80-150 MAD/day. Eliminates the big excess worry.' },
  { type: 'TP (Theft Protection)', included: 'Sometimes included', excess: '5,000-10,000 MAD', covers: 'Theft of vehicle or parts', note: 'Check if your travel insurance covers rental car theft first.' },
  { type: 'Tire & Windshield', included: 'Rarely included', excess: 'Full cost', covers: 'Punctured tires, cracked windshields, undercarriage', note: 'Critical for mountain and desert driving. Road debris is common.' },
  { type: 'PAI (Personal Accident)', included: 'Optional', excess: 'N/A', covers: 'Medical expenses for driver and passengers', note: 'Redundant if you carry travel insurance with medical coverage.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: TOLL ROADS
   ═══════════════════════════════════════════════════════════════ */

const tollRoutes = [
  { route: 'Casablanca - Marrakech', distance: '240 km', toll: 'From 67 MAD', time: '2h 30min' },
  { route: 'Casablanca - Rabat', distance: '90 km', toll: 'From 25 MAD', time: '1h' },
  { route: 'Casablanca - Tangier', distance: '340 km', toll: 'From 170 MAD', time: '3h 30min' },
  { route: 'Casablanca - Fes', distance: '295 km', toll: 'From 110 MAD', time: '3h' },
  { route: 'Rabat - Fes', distance: '200 km', toll: 'From 85 MAD', time: '2h 15min' },
  { route: 'Marrakech - Agadir', distance: '250 km', toll: 'From 60 MAD', time: '2h 45min' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ROAD TRIP ROUTES
   ═══════════════════════════════════════════════════════════════ */

const roadTripRoutes = [
  { name: 'Atlantic Coast Run', days: '3-4 days', distance: '~800 km', route: 'Tangier - Asilah - Rabat - El Jadida - Essaouira - Agadir', highlights: 'Surf towns, Portuguese fortifications, fresh seafood at every stop', carNeeded: 'Economy car works fine' },
  { name: 'Grand Atlas Circuit', days: '5-7 days', distance: '~1,200 km', route: 'Marrakech - Tizi n\'Tichka - Ouarzazate - Dades Gorge - Todra Gorge - Merzouga - Errachidia - Midelt - Fes', highlights: 'Kasbahs, dramatic gorges, Sahara dunes, Berber villages', carNeeded: 'SUV recommended (Dacia Duster ideal)' },
  { name: 'Rif Mountain Loop', days: '3-4 days', distance: '~600 km', route: 'Tangier - Chefchaouen - Al Hoceima - Nador - Fes', highlights: 'Blue city, Mediterranean coves, mountain cedar forests', carNeeded: 'Any car; roads are well-paved' },
  { name: 'Southern Desert Explorer', days: '4-5 days', distance: '~1,000 km', route: 'Ouarzazate - Zagora - Tata - Tiznit - Tafraout - Taroudant - Agadir', highlights: 'Draa Valley palmeraies, Anti-Atlas granite, argan country', carNeeded: 'SUV preferred; some rough patches near Tata' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHY RENT A CAR
   ═══════════════════════════════════════════════════════════════ */

const whyRentReasons = [
  { title: 'Freedom & Flexibility', detail: 'Stop at any roadside viewpoint, village market, or hidden waterfall. No tour bus schedule, no negotiating with taxi drivers.', icon: Key },
  { title: 'Access Remote Areas', detail: 'Berber villages in the Atlas, oases near Zagora, surfing coves south of Taghazout. Public transport simply does not reach them.', icon: MapPin },
  { title: 'Mountain Pass Driving', detail: 'Tizi n\'Tichka, Tizi n\'Test, and the Dades Gorge road are among the most spectacular drives on Earth. A rental car lets you take every hairpin at your own pace.', icon: Navigation },
  { title: 'Cost-Effective for Groups', detail: 'For two or more travelers, a rental car often beats the combined cost of bus tickets, grand taxis, and day tours. Time savings are significant too.', icon: DollarSign },
  { title: 'Coastal to Sahara in One Day', detail: 'Morocco is compact. Leave the Atlantic surf at breakfast, cross the Atlas by lunch, arrive at the Sahara dunes for sunset. No other transport makes that possible.', icon: Globe },
  { title: 'Family Comfort', detail: 'Traveling with children or elderly relatives is far easier in a private vehicle. Install your own child seat, stop for breaks freely, carry luggage without stress.', icon: Users },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: PICKUP CHECKLIST
   ═══════════════════════════════════════════════════════════════ */

const pickupChecklist = [
  'Walk around the entire car and photograph every scratch, dent, and chip. Video is even better.',
  'Check the fuel gauge matches the contract. Photo the dashboard showing fuel level and mileage.',
  'Inspect all four tires plus the spare. Check the jack and wheel wrench are present.',
  'Test headlights, brake lights, indicators, wipers, and horn before leaving the lot.',
  'Confirm the insurance documents, rental agreement, and emergency roadside number are in the car.',
  'Verify the air conditioning works. Moroccan summers hit 45 degrees in the south.',
  'Ask where the nearest petrol station is if the tank is not full.',
  'Save the agency phone number and your contract number in your phone.',
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: SCAM WARNINGS
   ═══════════════════════════════════════════════════════════════ */

const scamWarnings = [
  { scam: 'Pre-Existing Damage Claims', how: 'Agency blames you for scratches that were already there.', fix: 'Photograph and video every panel, bumper, wheel, and interior mark before leaving the lot. Insist all damage is noted on the contract.' },
  { scam: 'Fuel Gauge Tricks', how: 'Car handed over with less fuel than the contract states.', fix: 'Photo the dashboard with fuel gauge and odometer visible. Fill up at the nearest station and keep the receipt.' },
  { scam: 'Insurance Pressure', how: 'Counter staff insist you need expensive add-on coverage.', fix: 'Research coverage before arrival. Know what your credit card and travel insurance already cover. Decline firmly.' },
  { scam: 'Hidden Return Fees', how: 'Surprise charges for cleaning, late return by minutes, or mileage overages.', fix: 'Read the full contract. Confirm return time, mileage cap, and cleaning policy in writing. Return clean and on time.' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoCarRentalPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/images/hero-morocco.webp)' }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors"><Home className="w-3.5 h-3.5" /></Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Car Rental</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Car Rental Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Car Rental:
            <br className="hidden md:block" /> The Complete Guide
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Agencies, prices, insurance, driving tips, toll roads, and road trip routes.
            Everything you need to get behind the wheel in Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why a Rental Car Changes Everything in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                A bus can take you from Marrakech to Fes. A grand taxi can squeeze you into a seat to Ouarzazate.
                But neither will stop at the unmarked viewpoint above Tizi n&apos;Tichka where the entire High Atlas
                unfolds at your feet, or let you pull over in the Dades Valley when a hundred kasbahs catch the
                late-afternoon light. That kind of freedom requires your own wheels.
              </p>
              <p>
                Morocco&apos;s road network has transformed in the past decade. Over 1,800 km of modern autoroutes
                connect major cities at 120 km/h, while scenic national roads wind through gorges, over mountain
                passes, and along 3,500 km of Atlantic and Mediterranean coastline. Fuel is affordable, parking
                is cheap, and the country is compact enough that you can drive from the ocean to the Sahara in a
                single day.
              </p>
              <p>
                The catch? Rental contracts, insurance jargon, and unfamiliar driving customs trip up first-timers
                every year. This guide strips out the confusion and covers every detail: which companies to trust,
                what car to pick, how much to budget, and what to do when a goat blocks the road at a hairpin turn
                above the Todra Gorge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Rent a Car ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Key className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Rent a Car in Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six reasons to get behind the wheel instead of relying on buses, trains, and taxis.
          </p>
          <div className="grid md:grid-cols-2 gap-5">
            {whyRentReasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{r.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{r.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Car Rental at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              { icon: Car, value: 'From 250 MAD/day', label: 'Economy Car', detail: 'Dacia Sandero, Renault Clio' },
              { icon: Navigation, value: 'From 500 MAD/day', label: 'SUV / 4x4', detail: 'Dacia Duster, Toyota RAV4' },
              { icon: Fuel, value: 'From 11 MAD/L', label: 'Diesel Fuel', detail: 'Gasoline from 13 MAD/L' },
              { icon: Users, value: '21 years min', label: 'Minimum Age', detail: 'Some agencies require 25+' },
            ] as const).map((fact) => {
              const Icon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">{fact.value}</p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices are estimates for 2026. Seasonal pricing can change rates by 30-50% during peak periods.
          </p>
        </div>
      </section>

      {/* ── Rental Companies ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Car Rental Companies in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            International chains vs. local Moroccan agencies. The tradeoff is price against peace of mind.
          </p>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">International Agencies</h3>
          <div className="space-y-4 mb-8">
            {internationalAgencies.map((a) => (
              <div key={a.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">{a.name}</h4>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{a.price}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span className="text-[var(--text-secondary)]">{a.pros}</span></div>
                  <div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-[var(--text-secondary)]">{a.cons}</span></div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Local Moroccan Agencies</h3>
          <div className="space-y-4">
            {localAgencies.map((a) => (
              <div key={a.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">{a.name}</h4>
                  <span className="text-sm font-semibold text-[var(--color-gold)]">{a.price}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /><span className="text-[var(--text-secondary)]">{a.pros}</span></div>
                  <div className="flex items-start gap-2"><AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" /><span className="text-[var(--text-secondary)]">{a.cons}</span></div>
                </div>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Booking Tip</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Use DiscoverCars, Rentalcars.com, or AutoEurope to compare prices across agencies. Booking 2-4 weeks ahead
                  usually secures the best rate. During July-August and Christmas, book 6+ weeks out &mdash; popular vehicles
                  sell out fast.
                </p>
              </div>
            </div>
          </div>

          <div className="card-moroccan p-6 mt-4 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">One-Way Rentals</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most international agencies and many local companies allow one-way drops between major cities. A fee
                  of 500-1,500 MAD applies depending on distance. Popular combos: Marrakech to Fes (via the Atlas circuit),
                  Casablanca to Tangier (coastal route), and Agadir to Marrakech. Confirm the policy before booking &mdash;
                  some smaller agencies only accept returns to the pickup location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vehicle Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Key className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Vehicle Do You Need?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vehicleTypes.map((v) => (
              <div key={v.type} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{v.type}</h3>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{v.rate}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3">{v.examples}</p>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2"><Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /><span><strong>Best for:</strong> {v.bestFor}</span></div>
                  <div className="flex items-center gap-2"><Fuel className="w-4 h-4 text-[var(--color-accent)] shrink-0" /><span><strong>Fuel:</strong> {v.fuel}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--text-muted)]">{v.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            Most rental cars in Morocco have manual transmission. Automatics cost 50-100 MAD more per day and must be reserved in advance.
          </p>
        </div>
      </section>

      {/* ── Documentation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Documents You Must Bring
          </h2>
          <div className="space-y-4">
            {([
              { doc: 'Valid Driving License', detail: 'Must be valid for the entire rental period. Non-Latin scripts require an official translation or IDP.', icon: FileText },
              { doc: 'International Driving Permit', detail: 'Strongly recommended. Police at checkpoints routinely request it. Costs ~$20 from your national auto association.', icon: Globe },
              { doc: 'Passport', detail: 'Required for identity at pickup. Give a photocopy if asked for a deposit. Never hand over the original.', icon: FileText },
              { doc: 'Credit Card in Driver\'s Name', detail: 'Mandatory for the security deposit (3,000-15,000 MAD hold). Debit cards almost never accepted. Card must match the driver\'s name.', icon: CreditCard },
            ] as const).map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.doc} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">{d.doc}</h3>
                    <p className="text-sm text-[var(--text-secondary)]">{d.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Insurance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insurance Explained
          </h2>
          <div className="card-moroccan p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Type</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Included?</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Excess</th>
                    <th className="text-left py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Covers</th>
                  </tr>
                </thead>
                <tbody>
                  {insuranceTypes.map((ins) => (
                    <tr key={ins.type} className="border-b border-[var(--border-primary)] last:border-0">
                      <td className="py-3 pr-4 font-semibold text-[var(--text-primary)]">{ins.type}</td>
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{ins.included}</td>
                      <td className="py-3 pr-4 font-semibold text-[var(--color-accent)]">{ins.excess}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{ins.covers}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <CreditCard className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Credit Card Coverage</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Many premium credit cards (Visa Gold, Mastercard World, Amex Platinum) include CDW coverage when you
                  pay for the rental with that card. Confirm details and Morocco-specific exclusions with your issuer before
                  the trip. This can save from 80-150 MAD per day in SCDW charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Rules & Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Driving Rules &amp; Road Tips
          </h2>
          <div className="card-moroccan p-6 mb-6">
            <ul className="space-y-3">
              {[
                'Drive on the right, overtake on the left',
                'Speed limits: 60 km/h urban, 80-100 km/h national roads, 120 km/h autoroutes',
                'Seatbelts mandatory for all. Children under 10 ride in the back',
                'Phone use while driving is illegal. Hands-free only',
                'Blood alcohol limit: 0.02% (effectively zero tolerance)',
                'Carry license, IDP, passport, rental contract, and insurance at all times',
                'Police checkpoints are routine. Stop when flagged, present documents calmly',
                'Speed cameras everywhere on autoroutes. Fines start from 300 MAD',
                'Unmarked speed bumps at every village entrance. Slow down or lose your suspension',
                'Roundabouts: yield to vehicles already inside the circle',
              ].map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Road Conditions</h3>
              <ul className="space-y-3">
                {[
                  'Autoroutes are modern, smooth, and well-signed in Arabic and French',
                  'National roads range from excellent to rough, especially in the mountains',
                  'Rural roads can be narrow with blind corners, steep drops, and no guardrails',
                  'Night driving is risky outside cities: unlit donkey carts, pedestrians, livestock',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" /><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Mountain &amp; Desert</h3>
              <ul className="space-y-3">
                {[
                  'Atlas passes (Tizi n\'Tichka, Tizi n\'Test) have hairpin turns. Use low gear on descents',
                  'Winter snow can close passes Dec-Feb. Carry chains or check conditions first',
                  'Main desert roads to Merzouga and Zagora are paved. A regular car handles them',
                  'Off-road desert tracks need a 4x4 with explicit rental permission',
                  'Fill up before remote zones. Stations can be 100+ km apart',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" /><span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Toll Roads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CircleDollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Toll Roads (Autoroutes)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s 1,800 km motorway network is fast and well-maintained. Tolls are affordable
            and paid in cash (MAD) or by Jawaz electronic tag at automated booths.
          </p>
          <div className="card-moroccan p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border-primary)]">
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Route</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Distance</th>
                    <th className="text-left py-3 pr-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Toll</th>
                    <th className="text-left py-3 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Drive Time</th>
                  </tr>
                </thead>
                <tbody>
                  {tollRoutes.map((t) => (
                    <tr key={t.route} className="border-b border-[var(--border-primary)] last:border-0">
                      <td className="py-3 pr-4 font-semibold text-[var(--text-primary)]">{t.route}</td>
                      <td className="py-3 pr-4 text-[var(--text-secondary)]">{t.distance}</td>
                      <td className="py-3 pr-4 font-semibold text-[var(--color-accent)]">{t.toll}</td>
                      <td className="py-3 text-[var(--text-secondary)]">{t.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            Toll prices are approximate for 2026 and may change. Keep small bills ready &mdash; booths don&apos;t always have change for 200 MAD notes.
          </p>
        </div>
      </section>

      {/* ── Fuel & Stations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Fuel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fuel Costs &amp; Stations
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">2026 Fuel Prices</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Diesel (Gasoil)', value: 'From 11-13 MAD per liter' },
                  { label: 'Gasoline (Essence)', value: 'From 13-15 MAD per liter' },
                  { label: 'Full Tank (50L diesel)', value: 'From 550-650 MAD' },
                  { label: 'Marrakech to Ouarzazate', value: 'Approx. 200-250 MAD in fuel' },
                  { label: 'Weekly Road Trip (1,500 km)', value: 'Approx. 1,200-1,800 MAD total fuel' },
                ].map((s) => (
                  <li key={s.label} className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]"><strong className="text-[var(--text-primary)]">{s.label}:</strong> {s.value}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-4">Fuel prices may change seasonally.</p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Station Tips</h3>
              <ul className="space-y-3">
                {[
                  'Major brands: Afriquia, Shell, TotalEnergies. Stations every 30-50 km on highways',
                  'Most stations accept cash only. A few in cities take credit cards',
                  'Attendants pump for you. A tip of 2-5 MAD is standard',
                  'Remote Atlas and desert stations may close early. Fill up before noon in isolated areas',
                  'Double-check your rental car fuel type. Most Moroccan cars run on diesel',
                  'Autoroute rest areas have fuel, toilets, cafes, and sometimes prayer rooms',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" /><span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parking ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Parking in Moroccan Cities
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {([
              { title: 'Gardien System', text: 'Informal parking attendants in high-vis vests guard your car in every city. Pay 5-10 MAD daytime, 10-20 MAD overnight. Your car is safer with a gardien than without one.', icon: Users },
              { title: 'Hotel & Riad Parking', text: 'Medina riads have zero parking. Hotels direct you to nearby guarded lots. Budget from 30-50 MAD per night for garage parking near medinas in Marrakech, Fes, and Meknes.', icon: MapPin },
              { title: 'City Parking Zones', text: 'Blue-line zones need a ticket from a horodateur machine. Yellow curbs: no parking. Green zones are usually free. Parking apps are emerging in Casablanca and Rabat.', icon: Info },
              { title: 'Never Drive Into a Medina', text: 'Medina alleys are pedestrian-only. You will get stuck. Park outside the walls at a designated lot and walk or take a petit taxi.', icon: AlertTriangle },
            ] as const).map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{p.title}</h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Budget Estimator ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What Does a Week Cost?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Realistic budget estimates for a 7-day rental road trip covering ~1,500 km.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Budget Trip (Economy Car)</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Rental (7 days, Dacia Sandero)', value: 'From 1,750 MAD' },
                  { label: 'SCDW insurance upgrade', value: 'From 560 MAD' },
                  { label: 'Fuel (~1,500 km diesel)', value: 'From 1,200 MAD' },
                  { label: 'Tolls', value: 'From 300 MAD' },
                  { label: 'Parking (7 nights)', value: 'From 210 MAD' },
                  { label: 'Total estimate', value: 'From 4,020 MAD (~$400)' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">{item.label}</span>
                    <span className="font-semibold text-[var(--text-primary)]">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">Comfort Trip (SUV)</h3>
              <ul className="space-y-3">
                {[
                  { label: 'Rental (7 days, Dacia Duster)', value: 'From 3,500 MAD' },
                  { label: 'SCDW insurance upgrade', value: 'From 700 MAD' },
                  { label: 'Fuel (~1,500 km diesel)', value: 'From 1,500 MAD' },
                  { label: 'Tolls', value: 'From 400 MAD' },
                  { label: 'Parking (7 nights)', value: 'From 280 MAD' },
                  { label: 'Total estimate', value: 'From 6,380 MAD (~$640)' },
                ].map((item) => (
                  <li key={item.label} className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-secondary)]">{item.label}</span>
                    <span className="font-semibold text-[var(--text-primary)]">{item.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            Estimates assume off-peak pricing. Seasonal pricing can change these totals by 30-50%. One-way drop-off fees not included.
          </p>
        </div>
      </section>

      {/* ── Best Road Trip Routes ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Route className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Best Road Trip Routes
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Four proven self-drive itineraries. Each one shows you a different face of Morocco.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {roadTripRoutes.map((r) => (
              <div key={r.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{r.name}</h3>
                <div className="flex flex-wrap gap-3 text-xs text-[var(--text-muted)] mb-3">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {r.days}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {r.distance}</span>
                </div>
                <p className="text-sm text-[var(--text-secondary)] mb-2"><strong>Route:</strong> {r.route}</p>
                <p className="text-sm text-[var(--text-secondary)] mb-2"><strong>Highlights:</strong> {r.highlights}</p>
                <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--text-muted)] flex items-center gap-1"><Car className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {r.carNeeded}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pickup & Return Checklist ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calendar className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Pickup &amp; Return Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Do every single one of these before you drive away. Skipping any step is how disputes start.
          </p>
          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {pickupChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-moroccan p-6 mt-6 bg-[var(--color-gold)]/5 border-l-4 border-[var(--color-gold)]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">At Return</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Fill the tank to the agreed level. Return on time &mdash; even 30 minutes late can trigger an
                  extra-day charge. Walk the car with the agent, get written confirmation of no damage, and ask
                  when the deposit hold will be released from your credit card (typically 7-14 business days).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scams to Avoid ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Rental Scams &amp; How to Avoid Them
          </h2>
          <div className="space-y-4">
            {scamWarnings.map((s) => (
              <div key={s.scam} className="card-moroccan p-5">
                <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{s.scam}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-2"><strong>How it works:</strong> {s.how}</p>
                <p className="text-sm text-[var(--text-secondary)]"><strong className="text-green-700">Prevention:</strong> {s.fix}</p>
              </div>
            ))}
          </div>
          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <CreditCard className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">The Golden Rule</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Always pay by credit card, never cash or debit. Credit cards offer chargeback protection if disputes arise.
                  Keep all paperwork, receipts, and photos until you confirm no unexpected charges on your statement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{faq.name}</h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-road-trip-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Route className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Road Trip Guide</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Self-drive itineraries, scenic routes, mountain passes, and desert driving advice.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/driving" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Car className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Driving in Morocco</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Detailed rules of the road, license requirements, and tips for foreign drivers.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-safety-tips" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Safety Tips</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">Essential safety advice including scams, health, solo travel, and emergency numbers.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">Budget Travel</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">How to travel Morocco on a budget including transport, food, and accommodation costs.</p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3.5 h-3.5" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Ready to Hit the Road?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            The right car, the right insurance, and a tank of diesel. That&apos;s all it takes to turn Morocco
            into one of the world&apos;s greatest driving destinations. From the Atlantic coast to the High Atlas
            to the Sahara &mdash; every kilometer reveals something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-road-trip-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <Route className="w-5 h-5" />
              Plan Your Road Trip
            </Link>
            <Link
              href="/driving"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <Car className="w-5 h-5" />
              Driving Rules Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

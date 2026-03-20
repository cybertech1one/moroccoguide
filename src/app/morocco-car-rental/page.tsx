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
  Shield,
  AlertTriangle,
  Globe,
  Compass,
  Users,
  Car,
  Fuel,
  Info,
  Navigation,
  CreditCard,
  ShieldCheck,
  Key,
  FileText,
  DollarSign,
  Calendar,
  HelpCircle,
} from 'lucide-react';

/* =====================================================================
   CONSTANTS
   ===================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* =====================================================================
   SEO METADATA
   ===================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Car Rental Guide 2026 | Prices, Tips & Insurance Explained',
  description:
    'Complete Morocco car rental guide for 2026. Compare international vs local agencies, vehicle types, daily rates from 250 MAD, insurance options, driving rules, fuel costs, parking tips, scam warnings, and essential documentation. Book with confidence.',
  keywords: [
    'Morocco car rental',
    'renting a car in Morocco',
    'car hire Morocco',
    'Morocco car rental tips',
    'Morocco rental car prices',
    'rent a car Marrakech',
    'Morocco driving permit',
    'Morocco car insurance',
    'Morocco car rental companies',
    'Morocco car rental guide',
    'cheap car rental Morocco',
    'SUV rental Morocco',
    '4x4 rental Morocco',
    'Morocco car rental scams',
    'Morocco car hire tips 2026',
    'Morocco road trip car rental',
    'Casablanca airport car rental',
  ],
  openGraph: {
    title: 'Morocco Car Rental Guide 2026 | Prices, Tips & Insurance Explained',
    description:
      'Everything you need to rent a car in Morocco. Compare agencies, understand insurance, check prices, and avoid common pitfalls with our comprehensive 2026 guide.',
    url: `${BASE_URL}/morocco-car-rental`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Car driving along a scenic Moroccan road with Atlas Mountains in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Car Rental Guide 2026 | Prices, Tips & Insurance',
    description:
      'Compare rental agencies, vehicle types, insurance options, and daily rates. Essential tips for renting a car in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-car-rental` },
};

/* =====================================================================
   JSON-LD STRUCTURED DATA
   ===================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-car-rental`,
  name: 'Morocco Car Rental Guide 2026 | Prices, Tips & Insurance Explained',
  description:
    'Comprehensive guide to renting a car in Morocco covering rental agencies, vehicle types, pricing, insurance options, documentation requirements, driving rules, fuel costs, parking tips, and scam warnings.',
  url: `${BASE_URL}/morocco-car-rental`,
  image: `${BASE_URL}/images/hero-morocco.webp`,
  author: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  publisher: {
    '@type': 'Organization',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-car-rental`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: BASE_URL,
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Car Rental Guide', item: `${BASE_URL}/morocco-car-rental` },
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
        text: 'Yes, an International Driving Permit (IDP) is strongly recommended and frequently required alongside your home country license. While some rental agencies accept EU or US licenses alone, police at checkpoints often ask for an IDP. Obtain one from your national automobile association before traveling. It must be accompanied by your original license at all times.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to rent a car in Morocco per day?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Car rental in Morocco starts from around 250 MAD per day for a compact economy car and from 500 MAD per day for a midsize SUV. A full-size 4x4 suitable for desert tracks starts from 700 MAD per day. Prices increase during peak season (July-August and Christmas/New Year). Weekly rentals offer better per-day rates. Always confirm that insurance, mileage, and taxes are included.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I rent from an international or local agency in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'International agencies like Hertz, Avis, and Europcar offer newer fleets, roadside assistance, and multi-location drop-offs but charge higher rates. Local agencies such as Medloc or Afrique Cars can be 20-40% cheaper but may have older vehicles and stricter damage policies. For first-time visitors, international agencies offer more peace of mind. Experienced travelers comfortable negotiating often save money with local firms.',
      },
    },
    {
      '@type': 'Question',
      name: 'What type of car should I rent for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For city driving and highway travel between major cities, a compact hatchback like a Dacia Sandero or Renault Clio is sufficient and economical. For Atlas Mountain passes and varied terrain, a midsize SUV like a Dacia Duster provides better ground clearance and comfort. For off-road desert tracks and remote areas, a proper 4x4 like a Toyota Land Cruiser is essential. Most rental cars are manual transmission; automatic costs more and should be reserved in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'What insurance do I need when renting a car in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Basic CDW (Collision Damage Waiver) is usually included but carries a high excess of 5,000-15,000 MAD. Upgrading to Super CDW or full coverage reduces the excess to zero. Theft protection (TP) and personal accident insurance (PAI) are recommended add-ons. Tire and windshield damage are often excluded from standard policies. Check if your travel insurance or credit card offers rental car coverage to avoid paying twice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I drive a rental car from one city and return it in another?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, most international agencies and many local companies offer one-way rentals between major cities. A drop-off fee of 500-1,500 MAD typically applies depending on the distance. Popular one-way routes include Marrakech to Casablanca, Marrakech to Fes, and Casablanca to Tangier. Confirm the one-way policy and fee before booking, as some smaller agencies only allow returns to the pickup location.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are common car rental scams in Morocco and how do I avoid them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common issues include being charged for pre-existing damage, fuel gauge manipulation, and unnecessary insurance upsells. Always photograph and video every scratch and dent before leaving the lot. Check the fuel level matches the contract. Get all charges in writing and keep copies. Inspect tires, spare tire, and jack. Never hand over your passport as a deposit, only a photocopy. Use reputable agencies with online reviews and pay by credit card for chargeback protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to drive in Morocco as a tourist?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, driving in Morocco is generally safe for tourists, especially on the modern motorway network. The main challenges are assertive local driving styles in cities, unlit rural roads at night, and winding mountain passes. Avoid night driving in rural areas, stay alert for motorcycles and pedestrians, and drive defensively. Morocco drives on the right side of the road. Police checkpoints are common and routine; always carry your documents.',
      },
    },
  ],
};

/* =====================================================================
   DATA: QUICK FACTS
   ===================================================================== */

const quickFacts = [
  {
    label: 'Economy Car',
    value: 'From 250 MAD/day',
    detail: 'Compact cars like Dacia Sandero or Renault Clio',
    icon: Car,
  },
  {
    label: 'SUV / 4x4',
    value: 'From 500 MAD/day',
    detail: 'Dacia Duster, Hyundai Tucson, or Toyota RAV4',
    icon: Compass,
  },
  {
    label: 'Fuel Cost',
    value: 'From 11 MAD/L',
    detail: 'Diesel is cheapest; gasoline from 13 MAD/L',
    icon: Fuel,
  },
  {
    label: 'Minimum Age',
    value: '21 years',
    detail: 'Some agencies require 25+; young driver surcharge may apply',
    icon: Users,
  },
];

/* =====================================================================
   DATA: WHY RENT A CAR
   ===================================================================== */

const whyRentReasons = [
  {
    title: 'Freedom & Flexibility',
    detail: 'Set your own pace and itinerary. Stop at any roadside viewpoint, village market, or hidden waterfall without waiting for tour buses or negotiating with taxi drivers.',
    icon: Key,
  },
  {
    title: 'Access Remote Areas',
    detail: 'Many of Morocco\'s most stunning destinations, from isolated Berber villages in the Atlas to desert oases near Zagora, are only reachable by car. Public transport simply does not go there.',
    icon: Navigation,
  },
  {
    title: 'Mountain Passes & Scenic Routes',
    detail: 'The Tizi n\'Tichka, Tizi n\'Test, and Dades Gorge roads are among the most spectacular drives on Earth. A rental car lets you experience every hairpin turn at your own pace.',
    icon: MapPin,
  },
  {
    title: 'Desert & Coastal Adventures',
    detail: 'Drive from the Atlantic surf beaches of Taghazout to the golden Sahara dunes of Merzouga in a single trip. Morocco\'s compact size makes epic road trips surprisingly accessible.',
    icon: Globe,
  },
  {
    title: 'Cost-Effective for Groups',
    detail: 'For two or more travelers, renting a car often costs less than buying individual bus or train tickets, especially when you factor in the flexibility and time savings.',
    icon: DollarSign,
  },
  {
    title: 'Family-Friendly Travel',
    detail: 'Traveling with children or elderly family members is far more comfortable in a private vehicle. Install your own child seat, stop for breaks whenever needed, and carry luggage easily.',
    icon: Users,
  },
];

/* =====================================================================
   DATA: RENTAL COMPANIES COMPARISON
   ===================================================================== */

const internationalAgencies = [
  {
    name: 'Hertz',
    pros: 'Large fleet, airport locations, roadside assistance, well-known brand',
    cons: 'Higher daily rates, insurance upsells at the counter',
    priceRange: 'From 350 MAD/day',
  },
  {
    name: 'Avis',
    pros: 'Good vehicle condition, multi-city drop-off, loyalty program',
    cons: 'Premium pricing, limited budget options',
    priceRange: 'From 350 MAD/day',
  },
  {
    name: 'Europcar',
    pros: 'Largest network in Morocco, reliable fleet, online booking deals',
    cons: 'Counter upsells, fuel policy variations between branches',
    priceRange: 'From 300 MAD/day',
  },
  {
    name: 'Sixt',
    pros: 'Modern vehicles, good SUV selection, flexible cancellation',
    cons: 'Fewer locations than competitors, can be pricey in peak season',
    priceRange: 'From 320 MAD/day',
  },
];

const localAgencies = [
  {
    name: 'Medloc Car',
    pros: 'Competitive pricing, good local knowledge, flexible on negotiation',
    cons: 'Older fleet, limited English support, stricter damage policies',
    priceRange: 'From 200 MAD/day',
  },
  {
    name: 'Afrique Cars',
    pros: 'Budget-friendly, multiple Moroccan city locations, 4x4 specialist',
    cons: 'Variable vehicle condition, deposit requirements can be high',
    priceRange: 'From 220 MAD/day',
  },
];

/* =====================================================================
   DATA: VEHICLE TYPES
   ===================================================================== */

const vehicleTypes = [
  {
    type: 'Compact / Economy',
    examples: 'Dacia Sandero, Renault Clio, Hyundai i10',
    bestFor: 'City driving, short trips between major cities, budget travelers',
    dailyRate: 'From 250 MAD/day',
    fuelEconomy: '5-6 L/100km',
    notes: 'Perfect for paved roads and highways. Not recommended for mountain passes in winter or unpaved desert tracks.',
  },
  {
    type: 'Midsize Sedan',
    examples: 'Renault Megane, Dacia Logan, Peugeot 301',
    bestFor: 'Couples or small families, comfort on longer highway drives',
    dailyRate: 'From 350 MAD/day',
    fuelEconomy: '6-7 L/100km',
    notes: 'Good boot space for luggage. Handles all paved roads comfortably including well-maintained mountain routes.',
  },
  {
    type: 'SUV / Crossover',
    examples: 'Dacia Duster, Hyundai Tucson, Toyota RAV4',
    bestFor: 'Atlas Mountain passes, mixed terrain, families with luggage',
    dailyRate: 'From 500 MAD/day',
    fuelEconomy: '7-9 L/100km',
    notes: 'Higher ground clearance for rough paved roads. The Dacia Duster is Morocco\'s most popular rental SUV and handles most conditions well.',
  },
  {
    type: 'Full 4x4 / Off-Road',
    examples: 'Toyota Land Cruiser, Mitsubishi Pajero, Suzuki Jimny',
    bestFor: 'Sahara desert tracks, remote mountain villages, off-road exploration',
    dailyRate: 'From 700 MAD/day',
    fuelEconomy: '10-14 L/100km',
    notes: 'Essential for unpaved roads and desert driving. Must have explicit off-road permission in the rental agreement. Often requires a deposit of 10,000+ MAD.',
  },
];

/* =====================================================================
   DATA: DOCUMENTATION REQUIRED
   ===================================================================== */

const requiredDocs = [
  {
    doc: 'Valid Driving License',
    detail: 'Your home country driving license must be valid for the entire rental period. Licenses in non-Latin scripts require an official translation or IDP.',
    icon: FileText,
  },
  {
    doc: 'International Driving Permit (IDP)',
    detail: 'Strongly recommended and often required. Obtain from your national automobile association (AAA in the US, Post Office in the UK) before traveling. Valid for 1 year.',
    icon: Globe,
  },
  {
    doc: 'Passport',
    detail: 'Required for identity verification at pickup. Some agencies keep a photocopy; never leave your original passport as a deposit.',
    icon: FileText,
  },
  {
    doc: 'Credit Card in Driver\'s Name',
    detail: 'Mandatory for the security deposit (typically 3,000-15,000 MAD blocked on the card). Debit cards are usually not accepted. The card must match the primary driver\'s name.',
    icon: CreditCard,
  },
  {
    doc: 'Proof of Return Travel',
    detail: 'Some agencies ask for your return flight ticket or travel itinerary to confirm the rental duration. Not always required but good to have handy.',
    icon: Calendar,
  },
];

/* =====================================================================
   DATA: INSURANCE TYPES
   ===================================================================== */

const insuranceTypes = [
  {
    type: 'CDW (Collision Damage Waiver)',
    included: 'Usually included',
    excess: '5,000-15,000 MAD',
    covers: 'Damage to the rental vehicle from collisions',
    notes: 'Basic protection with a high excess. You pay the excess amount if the car is damaged, regardless of fault.',
  },
  {
    type: 'SCDW (Super CDW)',
    included: 'Optional add-on',
    excess: '0-2,000 MAD',
    covers: 'Same as CDW but with a reduced or zero excess',
    notes: 'Highly recommended. Costs from 80-150 MAD/day but eliminates the worry of a large excess charge.',
  },
  {
    type: 'TP (Theft Protection)',
    included: 'Sometimes included',
    excess: '5,000-10,000 MAD',
    covers: 'Theft of the vehicle or its parts',
    notes: 'Essential coverage. Check if your personal travel insurance already covers rental car theft before paying twice.',
  },
  {
    type: 'Tire & Windshield',
    included: 'Rarely included',
    excess: 'Full cost',
    covers: 'Punctured tires, cracked windshields, undercarriage damage',
    notes: 'Often excluded from even full coverage policies. Especially important for mountain and desert driving where road debris is common.',
  },
  {
    type: 'PAI (Personal Accident)',
    included: 'Optional add-on',
    excess: 'N/A',
    covers: 'Medical expenses for driver and passengers',
    notes: 'Redundant if you have travel insurance with medical coverage.',
  },
];

/* =====================================================================
   DATA: DRIVING RULES
   ===================================================================== */

const drivingRules = [
  'Drive on the right side of the road; overtake on the left',
  'Speed limits: 60 km/h in towns, 80-100 km/h on national roads, 120 km/h on motorways',
  'Seatbelts mandatory for all passengers; children under 10 must sit in the back',
  'Mobile phone use while driving is illegal; hands-free devices are permitted',
  'Blood alcohol limit is 0.02% (effectively zero tolerance)',
  'Roundabouts give priority to vehicles already in the circle (yield on entry)',
  'You must carry license, IDP, passport, rental agreement, and insurance at all times',
  'Police checkpoints are common; always stop when flagged and present documents calmly',
  'Speed cameras are widespread on motorways and national roads; fines start from 300 MAD',
  'Horn use is restricted in urban areas between 9 PM and 6 AM',
];

/* =====================================================================
   DATA: PARKING TIPS
   ===================================================================== */

const parkingTips = [
  {
    title: 'Gardien System',
    text: 'Informal parking attendants (gardiens) in high-visibility vests watch your car in most cities. Pay 5-10 MAD for daytime, 10-20 MAD for overnight. Your car is generally safer with a gardien present.',
    icon: Users,
  },
  {
    title: 'Hotel & Riad Parking',
    text: 'Most medina riads have no parking. Hotels direct you to nearby guarded lots. Budget from 30-50 MAD per night for garage parking near medinas in Marrakech, Fes, and Meknes.',
    icon: MapPin,
  },
  {
    title: 'City Parking Zones',
    text: 'Blue-line zones require a ticket from a machine or horodateur receipt. Yellow curbs mean no parking. Green zones are usually free. Parking apps are emerging in Casablanca and Rabat.',
    icon: Info,
  },
  {
    title: 'Never Drive Into a Medina',
    text: 'Medina alleyways are pedestrian-only. You will get stuck. Park outside the medina walls at a designated lot and walk or take a petit taxi to your accommodation.',
    icon: AlertTriangle,
  },
];

/* =====================================================================
   DATA: COMMON SCAMS
   ===================================================================== */

const commonScams = [
  {
    scam: 'Pre-Existing Damage Claims',
    how: 'Agency claims you caused scratches or dents that existed before your rental.',
    prevention: 'Photograph and video every surface of the car before leaving the lot. Ensure all existing damage is documented on the rental agreement. Take dated photos.',
    icon: Shield,
  },
  {
    scam: 'Fuel Gauge Manipulation',
    how: 'Car is handed over with less fuel than the contract states, or the gauge is inaccurate.',
    prevention: 'Check the fuel level matches the contract before driving away. Take a photo of the dashboard fuel gauge with the odometer visible. Fill up at a nearby station and keep the receipt.',
    icon: Fuel,
  },
  {
    scam: 'Unnecessary Insurance Upsells',
    how: 'Counter staff pressure you into buying expensive add-on insurance you do not need.',
    prevention: 'Research insurance before arrival. Check if your credit card or travel insurance covers rental cars. Politely decline coverage you have already confirmed elsewhere.',
    icon: ShieldCheck,
  },
  {
    scam: 'Hidden Fees at Return',
    how: 'Charges for cleaning, late return (even minutes), or mileage overages appear on your bill.',
    prevention: 'Read the contract carefully before signing. Confirm the return time, mileage policy, and fuel policy in writing. Return the car clean and on time.',
    icon: CreditCard,
  },
];

/* =====================================================================
   DATA: RELATED GUIDES
   ===================================================================== */

const relatedGuides = [
  {
    href: '/driving',
    title: 'Driving in Morocco',
    description: 'Detailed rules of the road, license requirements, and comprehensive tips for foreign drivers.',
    icon: Car,
  },
  {
    href: '/morocco-road-trip-guide',
    title: 'Morocco Road Trip Guide',
    description: 'Complete self-drive guide with itineraries, scenic routes, mountain passes, and desert driving tips.',
    icon: Compass,
  },
  {
    href: '/morocco-road-trip-routes',
    title: 'Road Trip Routes',
    description: 'Scenic routes through mountains, deserts, and coasts with detailed stop-by-stop directions.',
    icon: Navigation,
  },
  {
    href: '/morocco-airport-transfers',
    title: 'Airport Transfers',
    description: 'How to get from Morocco\'s airports to your hotel by taxi, bus, train, or private transfer.',
    icon: MapPin,
  },
  {
    href: '/morocco-safety-tips',
    title: 'Morocco Safety Tips',
    description: 'Essential safety advice for travelers including scams, health, solo travel, and emergency contacts.',
    icon: Shield,
  },
  {
    href: '/morocco-travel-insurance',
    title: 'Travel Insurance Guide',
    description: 'What travel insurance covers in Morocco, recommended providers, and how to make a claim.',
    icon: ShieldCheck,
  },
];

/* =====================================================================
   PAGE COMPONENT
   ===================================================================== */

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

      {/* ── Hero Section ── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Car Rental Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Car className="w-4 h-4" />
            Car Rental Guide 2026
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Car Rental
            <br className="hidden md:block" /> Complete Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to rent a car in Morocco &mdash; comparing agencies, choosing the right vehicle,
            understanding insurance, and driving with confidence from the coast to the Sahara.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Freedom of the Open Road in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Renting a car in Morocco unlocks a travel experience no bus ticket or guided tour can match. Within a single day behind the wheel, you can weave through the snow-dusted peaks of the High Atlas, descend into the palm-filled Draa Valley, cruise along the rugged Atlantic coastline, and arrive at the towering dunes of Erg Chebbi as the Saharan sun sets.
              </p>
              <p>
                Morocco&apos;s modern motorway network links major cities swiftly and safely, while scenic national roads and mountain passes lead to hidden kasbahs, Berber villages, and landscapes that public transport simply cannot reach. A rental car gives you complete control over your itinerary, your stops, and your pace.
              </p>
              <p>
                This guide covers every practical detail: which agencies to use, what vehicle type you need, how much to budget, what insurance to choose, the documentation you must carry, and how to avoid the most common pitfalls that catch first-time visitors off guard.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Facts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Car Rental at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key pricing and requirements for renting a car in Morocco in 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickFacts.map((fact) => {
              const FactIcon = fact.icon;
              return (
                <div key={fact.label} className="card-moroccan p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mx-auto mb-4">
                    <FactIcon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <p className="text-2xl font-bold text-[var(--text-primary)] font-[family-name:var(--font-display)] mb-1">
                    {fact.value}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mb-2">{fact.label}</p>
                  <p className="text-xs text-[var(--text-muted)]">{fact.detail}</p>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            Prices are approximate for 2026. Seasonal pricing may change rates significantly during peak periods.
          </p>
        </div>
      </section>

      {/* ── Why Rent a Car ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Key className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Why Rent a Car in Morocco?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Six compelling reasons to get behind the wheel and explore Morocco on your own terms.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {whyRentReasons.map((reason) => {
              const ReasonIcon = reason.icon;
              return (
                <div key={reason.title} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <ReasonIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{reason.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Rental Companies Comparison ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            International vs Local Rental Agencies
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Compare the major international chains with local Moroccan companies to find the best fit for your trip.
          </p>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
            International Agencies
          </h3>
          <div className="space-y-4 mb-8">
            {internationalAgencies.map((agency) => (
              <div key={agency.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">
                    {agency.name}
                  </h4>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{agency.priceRange}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">{agency.pros}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">{agency.cons}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
            Local Moroccan Agencies
          </h3>
          <div className="space-y-4">
            {localAgencies.map((agency) => (
              <div key={agency.name} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] text-lg">
                    {agency.name}
                  </h4>
                  <span className="text-sm font-semibold text-[var(--color-gold)]">{agency.priceRange}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">{agency.pros}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">{agency.cons}</span>
                  </div>
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
                  Use comparison sites like DiscoverCars, Rentalcars.com, or AutoEurope to compare prices
                  across agencies. Booking 2-4 weeks in advance typically secures the best rates. During peak
                  season (July-August, Christmas), book at least 6 weeks ahead as popular vehicles sell out.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Vehicle Types ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Car className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Which Vehicle Do You Need?
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Choosing the right car makes all the difference. Match your vehicle to your itinerary.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {vehicleTypes.map((v) => (
              <div key={v.type} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {v.type}
                  </h3>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">{v.dailyRate}</span>
                </div>
                <p className="text-xs text-[var(--text-muted)] mb-3">{v.examples}</p>
                <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" />
                    <span><strong>Best for:</strong> {v.bestFor}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                    <span><strong>Fuel economy:</strong> {v.fuelEconomy}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-[var(--border-primary)]">
                  <p className="text-xs text-[var(--text-muted)]">{v.notes}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[var(--text-muted)] mt-6">
            Daily rates are estimates for 2026. Seasonal pricing can change rates by 30-50% during peak periods.
          </p>
        </div>
      </section>

      {/* ── Essential Documentation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Essential Documentation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What you must bring to the rental desk. Missing documents means no car.
          </p>

          <div className="space-y-4">
            {requiredDocs.map((doc) => {
              const DocIcon = doc.icon;
              return (
                <div key={doc.doc} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                    <DocIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {doc.doc}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">{doc.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Insurance Explained ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Insurance Explained
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Understanding your coverage options is the most important part of renting a car in Morocco.
          </p>

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
              <Info className="w-6 h-6 text-[var(--color-gold)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Credit Card Coverage Tip</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Many premium credit cards (Visa Gold, Mastercard World, Amex Platinum) include rental car
                  CDW coverage when you pay for the rental with that card. Contact your card issuer before your
                  trip to confirm coverage details and any exclusions for Morocco. This can save you from 80-150
                  MAD per day in SCDW charges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Driving Rules ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Navigation className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Driving Rules &amp; Road Conditions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Essential rules every driver must know before getting behind the wheel in Morocco.
          </p>

          <div className="card-moroccan p-6">
            <ul className="space-y-3">
              {drivingRules.map((rule) => (
                <li key={rule} className="flex items-start gap-3 text-[var(--text-secondary)]">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Road Conditions
              </h3>
              <ul className="space-y-3">
                {[
                  'Motorways (autoroutes) are modern, well-maintained, and fast with clear signage in Arabic and French',
                  'National roads (routes nationales) vary from excellent to rough, especially in mountain areas',
                  'Rural and mountain roads can be narrow with sharp turns, steep drops, and limited guardrails',
                  'Watch for unmarked speed bumps (dos d\'ane) at every village entrance',
                  'Night driving is risky in rural areas due to unlit vehicles, livestock, and pedestrians on the road',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Mountain &amp; Desert Tips
              </h3>
              <ul className="space-y-3">
                {[
                  'Atlas passes (Tizi n\'Tichka, Tizi n\'Test) are winding with hairpin turns; drive slowly and use low gear on descents',
                  'Winter snow can close mountain passes December-February; carry chains or check conditions first',
                  'Desert roads to Merzouga and Zagora are paved; a regular car handles these fine',
                  'Off-road desert tracks require a 4x4 with explicit rental permission',
                  'Always fill up before entering remote mountain or desert zones; stations can be 100+ km apart',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fuel & Petrol Stations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Fuel className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Fuel &amp; Petrol Stations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect at the pump and how to budget for fuel across Morocco.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Fuel Prices (2026 Estimates)
              </h3>
              <ul className="space-y-3">
                {[
                  { label: 'Gasoline (Essence)', value: 'From 13-15 MAD per liter' },
                  { label: 'Diesel (Gasoil)', value: 'From 11-13 MAD per liter' },
                  { label: 'Average Full Tank (50L diesel)', value: 'From 550-650 MAD' },
                  { label: 'Marrakech to Ouarzazate', value: 'Approx. 200-250 MAD in fuel' },
                  { label: 'Weekly Road Trip (1,500 km)', value: 'Approx. 1,200-1,800 MAD total' },
                ].map((spec) => (
                  <li key={spec.label} className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
                    <span className="text-[var(--text-secondary)]">
                      <strong className="text-[var(--text-primary)]">{spec.label}:</strong> {spec.value}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-4">
                Fuel prices may change seasonally. Prices are approximate for 2026.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                Station Tips
              </h3>
              <ul className="space-y-3">
                {[
                  'Major brands include Afriquia, Shell, and TotalEnergies; stations every 30-50 km on highways',
                  'Most stations accept cash (MAD) only; a few in cities accept credit cards',
                  'Attendants pump fuel for you at most stations; a tip of 2-5 MAD is appreciated',
                  'Stations in remote Atlas and desert areas may close early; fill up before noon in isolated zones',
                  'Diesel is the default fuel for most Moroccan vehicles; double-check your rental car fuel type',
                  'Rest areas on motorways have fuel, toilets, cafes, and sometimes prayer rooms',
                ].map((tip) => (
                  <li key={tip} className="flex items-start gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="w-5 h-5 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parking Tips ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Parking in Major Cities
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How to park safely and affordably across Moroccan cities and towns.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {parkingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-4.5 h-4.5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Common Scams ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Common Scams &amp; How to Avoid Them
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Forewarned is forearmed. Know these common car rental pitfalls before you arrive.
          </p>

          <div className="space-y-4">
            {commonScams.map((item) => {
              const ScamIcon = item.icon;
              return (
                <div key={item.scam} className="card-moroccan p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ScamIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                        {item.scam}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mb-2">
                        <strong>How it works:</strong> {item.how}
                      </p>
                      <p className="text-sm text-[var(--text-secondary)]">
                        <strong className="text-green-700">How to avoid it:</strong> {item.prevention}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="card-moroccan p-6 mt-6 bg-[var(--color-accent)]/5 border-l-4 border-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Info className="w-6 h-6 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-[var(--text-primary)] mb-1">Golden Rule</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Always pay by credit card, never cash or debit card, for your rental. Credit cards offer
                  chargeback protection if disputes arise. Keep all paperwork, receipts, and photos until
                  you confirm no unexpected charges have appeared on your statement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HelpCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about renting a car in Morocco.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq) => (
              <div key={faq.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Related Driving &amp; Travel Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco driving adventure with these detailed guides.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="card-moroccan p-5 group hover:border-[var(--color-accent)] transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                    Read Guide <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center max-w-3xl">
          <Car className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Rent &amp; Explore?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            With the right car, the right insurance, and the right preparation, Morocco becomes one of
            the world&apos;s greatest driving destinations. From the Atlantic coast to the High Atlas to
            the Sahara, every kilometer reveals something extraordinary. Book your rental, plan your route,
            and discover Morocco at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-road-trip-guide"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              <Compass className="w-5 h-5" />
              Plan Your Road Trip
            </Link>
            <Link
              href="/driving"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)] hover:text-white transition-colors"
            >
              <Navigation className="w-5 h-5" />
              Driving Rules Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

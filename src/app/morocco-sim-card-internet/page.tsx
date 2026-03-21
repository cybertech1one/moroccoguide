import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Smartphone,
  Wifi,
  Signal,
  Globe,
  MapPin,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Star,
  Zap,
  Download,
  Upload,
  PhoneCall,
  MessageSquare,
  Store,
  Plane,
  Building,
  CreditCard,
  RefreshCw,
  Lock,
  Map,
  Users,
  Laptop,
  Coffee,
  HelpCircle,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco SIM Card & Internet Guide 2026 | Best Plans, eSIM & WiFi Tips',
  description:
    'Complete guide to staying connected in Morocco. Compare Maroc Telecom, Orange, and Inwi SIM card plans with prices from 30 MAD. eSIM options, WiFi availability, coverage maps, VPN advice, and topping up made simple.',
  keywords: [
    'morocco sim card',
    'morocco internet',
    'morocco mobile data',
    'wifi morocco',
    'maroc telecom sim card',
    'orange morocco sim',
    'inwi morocco sim',
    'morocco esim',
    'airalo morocco',
    'holafly morocco',
    'morocco data plans',
    'morocco 4G coverage',
    'morocco 5G',
    'buy sim card morocco airport',
    'morocco prepaid sim',
    'morocco wifi riads',
    'morocco vpn',
    'morocco top up recharge',
    'morocco mobile phone',
    'morocco internet cafe',
    'morocco coworking spaces',
    'morocco sim card price 2026',
  ],
  openGraph: {
    title: 'Morocco SIM Card & Internet Guide 2026 | Best Plans, eSIM & WiFi Tips',
    description:
      'Compare Morocco\'s 3 carriers, SIM card plans from 30 MAD, eSIM options, WiFi spots, and VPN advice. Everything you need to stay connected across Morocco.',
    url: `${BASE_URL}/morocco-sim-card-internet`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Traveler using smartphone in a Moroccan medina with colorful buildings in the background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco SIM Card & Internet Guide 2026 | Stay Connected',
    description:
      'Maroc Telecom, Orange, or Inwi? SIM cards from 30 MAD, eSIM options, WiFi in riads and cafes. Complete connectivity guide for Morocco travelers.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-sim-card-internet` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-sim-card-internet`,
  name: 'Morocco SIM Card & Internet Guide 2026 | Best Plans, eSIM & WiFi Tips',
  description:
    'Complete guide to staying connected in Morocco. Compare Maroc Telecom, Orange, and Inwi SIM card plans with prices, eSIM options, WiFi availability, and VPN advice.',
  url: `${BASE_URL}/morocco-sim-card-internet`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-sim-card-internet`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco SIM Card & Internet Guide', item: `${BASE_URL}/morocco-sim-card-internet` },
    ],
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need to unlock my phone before visiting Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Your phone must be SIM-unlocked to use a Moroccan SIM card. Contact your home carrier before traveling to request an unlock. If your phone supports eSIM, you can activate a Moroccan eSIM without unlocking — the eSIM runs alongside your home SIM.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Morocco carrier has the best coverage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maroc Telecom (IAM) has the widest coverage across Morocco, including rural areas and the Sahara desert. Orange offers strong urban coverage and fast 4G speeds. Inwi has competitive prices but weaker rural coverage. For travel beyond major cities, Maroc Telecom is the safest choice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I buy a SIM card at Marrakech or Casablanca airport?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All three carriers have kiosks or shops in Mohammed V Airport (Casablanca) and Marrakech Menara Airport. Prices at the airport are the same as in town. Bring your passport — it is required for SIM registration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a Morocco SIM card cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A basic SIM card costs from 20-30 MAD. A tourist SIM bundle with 20 GB of data, local calls, and validity for 30 days costs from 100-200 MAD depending on the carrier and data amount. Additional top-ups are available from 10 MAD.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is VPN legal in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'VPN usage is legal in Morocco. Many travelers use VPNs to access geo-restricted content or for privacy on public WiFi. VoIP services like WhatsApp calls and FaceTime work without a VPN on Moroccan networks since the 2021 unblocking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does WiFi work well in Moroccan riads and hotels?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most riads and hotels offer free WiFi, but quality varies significantly. Budget riads may have slow, shared connections (2-5 Mbps). Mid-range and luxury accommodations typically provide reliable WiFi (10-50 Mbps). Thick medina walls can weaken signals. For reliable connectivity, carry your own mobile data as a backup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use my eSIM in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Services like Airalo and Holafly sell Morocco-specific eSIM plans starting from around $5 USD for 1 GB. Activate the eSIM before landing. Your phone needs to be eSIM-compatible (iPhone XS or later, most recent Samsung Galaxy and Google Pixel models). eSIMs are data-only — you will not get a local phone number.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: CARRIER COMPARISON
   ═══════════════════════════════════════════════════════════════ */

const carriers = [
  {
    name: 'Maroc Telecom (IAM)',
    icon: Signal,
    color: 'text-blue-600',
    marketShare: '~45%',
    network: '2G / 3G / 4G / 5G (major cities)',
    coverage: 'Best nationwide — covers rural areas, mountains, and Sahara routes',
    touristPlan: 'Jawal Tourist SIM: 20 GB data + 30 min local calls, valid 30 days',
    touristPrice: 'from 100 MAD',
    topUpOptions: 'Scratch cards, shops, *555# USSD, IAM app',
    speedAvg: '15-40 Mbps (4G), up to 100 Mbps (5G)',
    pros: ['Widest rural coverage', 'Most reliable in remote areas', '5G in Casablanca, Rabat, Tangier', 'Largest retail network'],
    cons: ['Slightly higher prices than competitors', 'Customer service mostly in French/Arabic'],
  },
  {
    name: 'Orange Morocco',
    icon: Zap,
    color: 'text-orange-500',
    marketShare: '~33%',
    network: '2G / 3G / 4G+ / 5G (limited)',
    coverage: 'Strong urban coverage, fast 4G+ in major cities',
    touristPlan: 'Holiday SIM: 25 GB data + 60 min local calls + 30 min international, valid 30 days',
    touristPrice: 'from 150 MAD',
    topUpOptions: 'Scratch cards, shops, #123# USSD, My Orange app',
    speedAvg: '20-50 Mbps (4G+), up to 80 Mbps (5G)',
    pros: ['Best tourist SIM bundle', 'Includes international minutes', 'Fast 4G+ speeds', 'English-friendly app'],
    cons: ['Weaker coverage in deep rural areas', 'Less extensive shop network outside cities'],
  },
  {
    name: 'Inwi',
    icon: Globe,
    color: 'text-purple-600',
    marketShare: '~22%',
    network: '2G / 3G / 4G / 5G (trial)',
    coverage: 'Good urban coverage, limited in rural and desert areas',
    touristPlan: 'Inwi Tourist: 15 GB data + 20 min local calls, valid 15 days',
    touristPrice: 'from 70 MAD',
    topUpOptions: 'Scratch cards, shops, *120# USSD, Inwi Money app',
    speedAvg: '10-30 Mbps (4G)',
    pros: ['Cheapest prices', 'Good for short trips', 'Competitive data-only bundles', 'Fastest growing network'],
    cons: ['Weakest rural/mountain coverage', 'Shorter plan validity', 'Fewer physical shops'],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: ESIM OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const esimProviders = [
  {
    name: 'Airalo',
    plans: '1 GB / 7 days from $4.50 | 3 GB / 30 days from $11 | 5 GB / 30 days from $16',
    pros: 'Wide range of plan sizes, reliable activation, good app',
    cons: 'Data only — no local phone number, no calls/SMS',
    bestFor: 'Travelers who want flexibility and just need data',
  },
  {
    name: 'Holafly',
    plans: '3 GB / 5 days from $19 | Unlimited / 7 days from $27 | Unlimited / 15 days from $47',
    pros: 'Unlimited data plans, easy setup, 24/7 chat support',
    cons: 'Higher prices, "unlimited" may be throttled after 500 MB/day, no local number',
    bestFor: 'Heavy data users who do not want to worry about limits',
  },
  {
    name: 'Nomad eSIM',
    plans: '1 GB / 7 days from $5 | 3 GB / 30 days from $10 | 10 GB / 30 days from $25',
    pros: 'Competitive pricing, straightforward plans',
    cons: 'Data only, smaller support team than Airalo',
    bestFor: 'Budget-conscious travelers who need a simple data plan',
  },
  {
    name: 'aloSIM',
    plans: '1 GB / 7 days from $5 | 5 GB / 30 days from $18',
    pros: 'Simple interface, no subscription required',
    cons: 'Fewer plan options, data only',
    bestFor: 'Quick setup for short trips',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY
   ═══════════════════════════════════════════════════════════════ */

const buyLocations = [
  {
    icon: Plane,
    title: 'Airport Kiosks',
    description: 'All three carriers have booths at Mohammed V (Casablanca), Menara (Marrakech), and Fes-Saiss airports. Open for arriving flights. Same prices as in-town shops. Staff speak English and French.',
    tip: 'Buy at the airport arrivals hall right after customs. You will have data before you even leave the terminal.',
  },
  {
    icon: Store,
    title: 'Official Carrier Shops',
    description: 'Maroc Telecom, Orange, and Inwi have branded stores in every major city. Look for their signage on main commercial streets: Avenue Mohammed V, Avenue Hassan II, or in modern shopping malls.',
    tip: 'Official shops can resolve any activation issues immediately and staff are trained on tourist plans.',
  },
  {
    icon: Building,
    title: 'Convenience Stores & Tabacs',
    description: 'Small corner shops (hanout) and tobacco shops across Morocco sell SIM cards and top-up scratch cards. Look for carrier logos in the window. These are everywhere, even in small towns.',
    tip: 'Scratch cards for top-ups cost from 10 MAD. Ask for "carte de recharge" or "recharge [carrier name]."',
  },
  {
    icon: MapPin,
    title: 'Medina & Souk Shops',
    description: 'Phone accessory shops inside medinas sell SIM cards, often bundled with a cheap phone case or charger. Prices are fixed (regulated by carriers) — no haggling needed for SIM cards.',
    tip: 'These shops can also help you configure APN settings if your phone does not connect to data automatically.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WIFI LOCATIONS
   ═══════════════════════════════════════════════════════════════ */

const wifiLocations = [
  {
    icon: Coffee,
    title: 'Cafes & Restaurants',
    speed: '5-20 Mbps',
    description: 'Most cafes in tourist areas offer free WiFi. Chain cafes (Paul, Starbucks in Casablanca, La Sqala in Casablanca) are reliable. Ask staff for the password. Speeds vary by location and peak hours.',
  },
  {
    icon: Building,
    title: 'Riads & Hotels',
    speed: '2-50 Mbps',
    description: 'Nearly all accommodations provide free WiFi. Budget riads: 2-5 Mbps, often shared. Mid-range: 10-20 Mbps. Luxury hotels: 20-50 Mbps with in-room coverage. Thick medina walls can block signals between rooms.',
  },
  {
    icon: Laptop,
    title: 'Coworking Spaces',
    speed: '30-100 Mbps',
    description: 'Growing scene in Marrakech, Casablanca, Rabat, and Essaouira. Spaces like Le 18 (Marrakech), Casanearshore (Casablanca), and Sun Desk (Taghazout) offer fast, dedicated internet lines.',
  },
  {
    icon: Globe,
    title: 'Public WiFi (Maroc Telecom WiFi)',
    speed: '1-10 Mbps',
    description: 'Maroc Telecom runs "IAM WiFi" hotspots in some public areas, train stations, and McDonald\'s locations. Connection requires a Maroc Telecom number for authentication. Speeds are inconsistent.',
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSimCardInternetPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Breadcrumbs ── */}
      <nav className="bg-[var(--surface-muted)] border-b border-[var(--border-light)]" aria-label="Breadcrumb">
        <div className="container-morocco py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors flex items-center gap-1">
                <Home className="w-3.5 h-3.5" /> Home
              </Link>
            </li>
            <ChevronRight className="w-3.5 h-3.5" />
            <li className="text-[var(--text-primary)] font-medium">Morocco SIM Card &amp; Internet Guide</li>
          </ol>
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-20 md:py-28">
        <div className="hero-overlay absolute inset-0 opacity-20" />
        <div className="container-morocco relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/90 text-sm mb-6">
            <Smartphone className="w-4 h-4" /> Connectivity Guide
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-6 leading-tight">
            Morocco SIM Cards &amp; Internet
          </h1>
          <p className="text-lg md:text-xl text-white/85 max-w-3xl mx-auto font-[family-name:var(--font-heading)]">
            Three carriers, data plans from 30 MAD, eSIM alternatives, and WiFi across the country.
            Here is everything you need to stay connected from Tangier to the Sahara.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm text-white/80">
            <span className="flex items-center gap-1.5"><Signal className="w-4 h-4" /> 3 Carriers Compared</span>
            <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4" /> Plans from 30 MAD</span>
            <span className="flex items-center gap-1.5"><Globe className="w-4 h-4" /> eSIM Options</span>
            <span className="flex items-center gap-1.5"><Wifi className="w-4 h-4" /> WiFi Tips</span>
          </div>
        </div>
      </section>

      {/* ── Quick Overview ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            The Short Version
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Morocco has solid mobile coverage in cities and along major highways. A local SIM card is cheap, fast, and the single best way to stay connected during your trip.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card-moroccan p-5 text-center">
              <Smartphone className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Buy a Local SIM</h3>
              <p className="text-sm text-[var(--text-secondary)]">Passport required. Takes 10 minutes at the airport or any carrier shop. Staff handle activation.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Budget: from 70 MAD</h3>
              <p className="text-sm text-[var(--text-secondary)]">A 15-30 day data plan with 15-25 GB costs from 70-200 MAD ($7-$20 USD). Enough for maps, messaging, and calls.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Signal className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">4G Everywhere</h3>
              <p className="text-sm text-[var(--text-secondary)]">4G covers all cities, major towns, and highways. 5G is live in Casablanca, Rabat, and Tangier. Rural gaps exist in mountain passes.</p>
            </div>
            <div className="card-moroccan p-5 text-center">
              <Wifi className="w-8 h-8 text-[var(--color-accent)] mx-auto mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">WiFi Backup</h3>
              <p className="text-sm text-[var(--text-secondary)]">Most riads, hotels, and cafes offer free WiFi. Quality varies. Mobile data is your reliable fallback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Before You Arrive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Before You Land: Pre-Trip Checklist
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Handle these items at home so you hit the ground connected.
          </p>
          <div className="space-y-4">
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Unlock your phone</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Call your home carrier and request a SIM unlock. Most carriers unlock phones that are fully paid off within 24-48 hours. Without an unlock, a Moroccan SIM will not work. iPhones show lock status under Settings &gt; General &gt; About &gt; Carrier Lock.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Check eSIM compatibility</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  If your phone supports eSIM (iPhone XS+, Pixel 3+, Samsung Galaxy S20+), you can buy a Morocco data plan online before departure and activate it when you land. No physical SIM swap needed.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Bring your passport</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Morocco requires passport registration for all SIM card purchases. The carrier shop will photocopy your passport and link the SIM to your identity. No passport means no SIM. This is a strict legal requirement enforced since 2019.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Carry a SIM eject tool or paperclip</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Most shops have one, but airport kiosks sometimes run out. A bent paperclip works. Keep your home SIM safe in a small ziplock bag.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Download offline maps</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Open Google Maps or Maps.me and download Morocco&apos;s map data over your home WiFi. Offline maps work without data and save you in areas with weak signal — especially useful in the Atlas Mountains and desert routes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Three Carriers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Morocco&apos;s Three Mobile Carriers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has three mobile operators. Each targets a slightly different market. Here is an honest comparison.
          </p>

          <div className="space-y-8">
            {carriers.map((carrier) => (
              <div key={carrier.name} className="card-moroccan p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <carrier.icon className={`w-8 h-8 ${carrier.color}`} />
                  <div>
                    <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                      {carrier.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)]">Market share: {carrier.marketShare} | Network: {carrier.network}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      <Map className="w-4 h-4 inline mr-1" /> Coverage
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">{carrier.coverage}</p>
                  </div>
                  <div>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      <Download className="w-4 h-4 inline mr-1" /> Avg Speed
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">{carrier.speedAvg}</p>
                  </div>
                </div>

                <div className="bg-[var(--surface-muted)] rounded-lg p-4 mb-4">
                  <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--color-accent)] mb-1">
                    <Star className="w-4 h-4 inline mr-1" /> Tourist Plan
                  </p>
                  <p className="text-sm text-[var(--text-primary)]">{carrier.touristPlan}</p>
                  <p className="text-base font-bold text-[var(--color-accent)] mt-1">{carrier.touristPrice}</p>
                </div>

                <div className="mb-3">
                  <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                    <RefreshCw className="w-4 h-4 inline mr-1" /> Top-Up Methods
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">{carrier.topUpOptions}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-green-700 mb-2">Pros</p>
                    <ul className="space-y-1">
                      {carrier.pros.map((pro) => (
                        <li key={pro} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-red-700 mb-2">Cons</p>
                    <ul className="space-y-1">
                      {carrier.cons.map((con) => (
                        <li key={con} className="text-sm text-[var(--text-secondary)] flex items-start gap-2">
                          <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" /> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carrier recommendation */}
          <div className="mt-8 card-moroccan p-6 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              <Star className="w-5 h-5 inline mr-1 text-[var(--color-gold)]" /> Our Recommendation
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              <strong>For most travelers: Orange Morocco.</strong> Their Holiday SIM offers the best balance of data, calls, and price. The included international minutes let you call home. Their app works in English and top-ups are straightforward.
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              <strong>For Sahara/mountain trips: Maroc Telecom.</strong> If your itinerary includes the desert, Atlas trekking, or remote villages, Maroc Telecom&apos;s superior rural coverage is worth the small premium.
            </p>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              <strong>For budget short trips: Inwi.</strong> If you are in Morocco for under two weeks and staying in cities, Inwi&apos;s from 70 MAD plan gets the job done.
            </p>
          </div>
        </div>
      </section>

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Where to Buy Your SIM Card
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            SIM cards are sold at fixed, regulated prices. You will pay the same at the airport as in a medina shop.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {buyLocations.map((loc) => (
              <div key={loc.title} className="card-moroccan p-5">
                <loc.icon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">{loc.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">{loc.description}</p>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3">
                  <p className="text-xs text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold mb-1">
                    <Info className="w-3.5 h-3.5 inline mr-1" /> Pro Tip
                  </p>
                  <p className="text-xs text-[var(--text-secondary)]">{loc.tip}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Registration process */}
          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <CreditCard className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
              SIM Registration Process (Step by Step)
            </h3>
            <ol className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="bg-[var(--color-accent)] text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">1</span>
                <p className="text-sm text-[var(--text-secondary)]">Present your passport at the carrier shop or airport kiosk. The staff will take a photocopy or scan it.</p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-[var(--color-accent)] text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">2</span>
                <p className="text-sm text-[var(--text-secondary)]">Choose your plan. Tell them you want a "tourist SIM" or "forfait touriste." Staff know these plans well and will guide you.</p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-[var(--color-accent)] text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">3</span>
                <p className="text-sm text-[var(--text-secondary)]">Pay in cash (MAD). Cards are accepted at official shops but not always at small stores. Airport kiosks accept both.</p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-[var(--color-accent)] text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">4</span>
                <p className="text-sm text-[var(--text-secondary)]">The staff will insert the SIM, activate the plan, and test the connection. Activation is usually instant. Keep the receipt with your new phone number.</p>
              </li>
              <li className="flex gap-3 items-start">
                <span className="bg-[var(--color-accent)] text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0">5</span>
                <p className="text-sm text-[var(--text-secondary)]">If data does not work immediately, restart your phone. The APN settings should configure automatically. If not, ask the staff to set them manually.</p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── eSIM Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            eSIM Options: Skip the SIM Swap
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            eSIMs let you activate a Morocco data plan from your couch before departure. No passport registration, no shop visits, no physical SIM cards. The trade-off: data only, no local phone number, and higher per-GB cost.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {esimProviders.map((provider) => (
              <div key={provider.name} className="card-moroccan p-5">
                <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-3">
                  <Smartphone className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                  {provider.name}
                </h3>
                <div className="bg-[var(--surface-muted)] rounded-lg p-3 mb-3">
                  <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Plans</p>
                  <p className="text-xs text-[var(--text-secondary)]">{provider.plans}</p>
                </div>
                <div className="space-y-2 mb-3">
                  <p className="text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="w-4 h-4 inline mr-1 text-green-600" /> {provider.pros}
                  </p>
                  <p className="text-sm text-[var(--text-secondary)]">
                    <AlertTriangle className="w-4 h-4 inline mr-1 text-red-500" /> {provider.cons}
                  </p>
                </div>
                <p className="text-xs text-[var(--color-accent)] font-[family-name:var(--font-heading)] font-bold">
                  Best for: {provider.bestFor}
                </p>
              </div>
            ))}
          </div>

          {/* eSIM vs Physical SIM */}
          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              eSIM vs. Physical SIM: Which Should You Choose?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <Smartphone className="w-4 h-4 inline mr-1" /> Choose eSIM if:
                </p>
                <ul className="space-y-1.5">
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> You only need data (maps, messaging apps, social media)</li>
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> You want connectivity the moment you land</li>
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Your phone supports dual SIM (physical + eSIM together)</li>
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> You prefer not to deal with shops or registration</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  <CreditCard className="w-4 h-4 inline mr-1" /> Choose Physical SIM if:
                </p>
                <ul className="space-y-1.5">
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> You need a local phone number (for restaurant bookings, riads, taxis)</li>
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> You want the cheapest per-GB price</li>
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> You need voice calls and SMS</li>
                  <li className="text-sm text-[var(--text-secondary)] flex gap-2"><CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" /> Your phone does not support eSIM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Topping Up ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Topping Up &amp; Managing Your Data
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Ran out of data? Topping up takes under a minute and costs from 10 MAD.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <CreditCard className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Scratch Cards</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Available at every corner store for from 10 MAD. Scratch off the code, dial the USSD number printed on the card, and enter the code. Credit is added instantly. Ask for "recharge" followed by the carrier name.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <Smartphone className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Carrier Apps</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Download the carrier&apos;s app (My IAM, My Orange, Inwi Money) to top up with a credit card. You can also check data balance, activate bundles, and manage your plan. The Orange app has the best English support.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <PhoneCall className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">USSD Codes</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Dial from your phone to check balance and activate plans. Maroc Telecom: *555#. Orange: #123#. Inwi: *120#. Menus are in French and Arabic. Use Google Translate on the menu options if needed.
              </p>
            </div>
          </div>

          {/* Data usage tips */}
          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Info className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
              How Much Data Do You Actually Need?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">5 GB</p>
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Light Use</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Maps, messaging, email. No video streaming. Good for 7-10 days.</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">10 GB</p>
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Moderate Use</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Maps, social media, WhatsApp calls, some photo uploads. Good for 14 days.</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">20 GB</p>
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Heavy Use</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Social media, video calls, streaming music, regular photo uploads. Good for 30 days.</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-3 text-center">
                <p className="text-2xl font-bold text-[var(--color-accent)]">30+ GB</p>
                <p className="text-xs font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Digital Nomad</p>
                <p className="text-xs text-[var(--text-secondary)] mt-1">Remote work, video conferencing, streaming video. Consider a coworking space too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WiFi Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            WiFi Across Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Free WiFi is common in Morocco, but speeds and reliability range from frustrating to surprisingly fast.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {wifiLocations.map((loc) => (
              <div key={loc.title} className="card-moroccan p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <loc.icon className="w-6 h-6 text-[var(--color-accent)]" />
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">{loc.title}</h3>
                  </div>
                  <span className="text-xs bg-[var(--color-accent)]/10 text-[var(--color-accent)] px-2 py-1 rounded-full font-bold">
                    {loc.speed}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{loc.description}</p>
              </div>
            ))}
          </div>

          {/* Coworking spotlight */}
          <div className="mt-8 card-moroccan p-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              <Laptop className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
              Best Coworking Spaces for Remote Workers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Le 18 Coworking</p>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Marrakech (Gueliz)</p>
                <p className="text-xs text-[var(--text-secondary)]">Modern space, 100 Mbps fiber, from 100 MAD/day. Air-conditioned, coffee included, printing available.</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Sun Desk</p>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Taghazout</p>
                <p className="text-xs text-[var(--text-secondary)]">Surf and work combo. 50 Mbps, from 150 MAD/day. Ocean views, surf break access, community dinners.</p>
              </div>
              <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Casanearshore</p>
                <p className="text-xs text-[var(--text-secondary)] mb-1">Casablanca</p>
                <p className="text-xs text-[var(--text-secondary)]">Tech hub with dedicated fiber lines, from 200 MAD/day. Meeting rooms, event space, fast internet.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage & Speed Map ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Coverage by Region
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Morocco&apos;s 4G network covers most populated areas. Here is what to expect in each region.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <Signal className="w-6 h-6 text-green-600 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Major Cities (Excellent)</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Casablanca, Marrakech, Rabat, Fes, Tangier, Agadir, Meknes. Full 4G from all carriers. 5G available from Maroc Telecom in Casablanca, Rabat, and Tangier. Speeds of 20-100 Mbps common. Dead zones are rare.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <Signal className="w-6 h-6 text-yellow-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Tourist Towns (Good)</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Essaouira, Chefchaouen, Ouarzazate, Merzouga, Ifrane, Dakhla. Solid 4G from Maroc Telecom and Orange. Inwi may drop to 3G in some areas. Speeds of 10-30 Mbps. Occasional gaps in medina alleys where thick walls block signal.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <Signal className="w-6 h-6 text-orange-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Atlas Mountains (Moderate)</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Imlil, Toubkal base camp, Ait Bougmez, Dades Gorge. Maroc Telecom has the best mountain coverage. Expect 3G in valleys and loss of signal on high passes. Villages along main roads usually have coverage. Bring downloaded offline maps.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <Signal className="w-6 h-6 text-red-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Sahara Desert (Limited)</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Erg Chebbi, Erg Chigaga, desert camps. Coverage exists in Merzouga town and near paved roads. Once you drive into the dunes, signal drops to nothing. Some luxury desert camps have satellite WiFi (slow, from 500 MAD/night camps). Maroc Telecom reaches further into the desert than competitors.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-5 flex gap-4 items-start">
              <Signal className="w-6 h-6 text-blue-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">Highways &amp; Roads (Good)</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  The autoroute (highway) network between major cities has consistent 4G coverage. National roads (N-routes) between cities generally maintain 3G/4G. Secondary mountain roads may have gaps. Train routes (ONCF) have coverage along most of the track, with occasional drops in tunnels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VPN & Privacy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            VPN, VoIP &amp; Online Privacy
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Good news: Morocco is one of the more internet-friendly countries in North Africa. Most services work without restriction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <Lock className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">VPN Usage</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                VPNs are legal and widely used in Morocco. Many travelers run a VPN to access home-country streaming libraries (Netflix US, BBC iPlayer) or for privacy on hotel WiFi. Popular options: NordVPN, ExpressVPN, Surfshark. Install and configure your VPN before you travel.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <PhoneCall className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">VoIP Calls</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                WhatsApp voice and video calls, FaceTime, Zoom, and Google Meet all work in Morocco without a VPN. The government lifted VoIP blocks in 2021. Call quality depends on your data speed. Use WiFi for video calls when possible to save data.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <MessageSquare className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Messaging Apps</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                WhatsApp is Morocco&apos;s dominant messaging platform. Everyone uses it — hotels, tour guides, taxi drivers, restaurant owners. Telegram, Signal, iMessage, and Facebook Messenger all work normally. Download WhatsApp before your trip if you do not already have it.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <ShieldCheck className="w-7 h-7 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">Security Tips</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Use a VPN on public WiFi networks (cafes, hotels). Avoid online banking on shared networks. Enable two-factor authentication on important accounts before travel. Moroccan networks are no less secure than most countries, but public WiFi carries the same global risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Useful Apps ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Essential Apps to Download Before Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Download these over WiFi at home. They will save you data and headaches.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card-moroccan p-4">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                <Map className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Google Maps / Maps.me
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">Download offline maps for Morocco. Maps.me is particularly good for medina navigation and hiking trails.</p>
            </div>
            <div className="card-moroccan p-4">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                <MessageSquare className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> WhatsApp
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">The universal communication tool in Morocco. Hotels, guides, and drivers all use it. Share your WhatsApp number freely.</p>
            </div>
            <div className="card-moroccan p-4">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                <Globe className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Google Translate
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">Download French and Arabic language packs for offline translation. The camera feature translates signs and menus in real time.</p>
            </div>
            <div className="card-moroccan p-4">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                <CreditCard className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Wise / Revolut
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">Multi-currency cards with great MAD exchange rates. Top up over data and use the card at Moroccan ATMs and shops.</p>
            </div>
            <div className="card-moroccan p-4">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                <Users className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> InDrive / Careem
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">Ride-hailing apps that work in Moroccan cities. InDrive lets you negotiate prices. Careem (owned by Uber) is the more established option.</p>
            </div>
            <div className="card-moroccan p-4">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                <Lock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> VPN App
              </h3>
              <p className="text-xs text-[var(--text-secondary)]">Install NordVPN, ExpressVPN, or Surfshark before you leave. Useful for public WiFi security and accessing home-country streaming.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Troubleshooting ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            Troubleshooting Common Issues
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            SIM not working? Data not connecting? Here are fixes for the most common problems.
          </p>

          <div className="space-y-4">
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-5 h-5 inline mr-2 text-orange-500" /> No data after inserting SIM
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Restart your phone first. If still no data: go to Settings &gt; Mobile Data &gt; APN and check the carrier has auto-configured. For Maroc Telecom: APN = "iam." For Orange: APN = "internet." For Inwi: APN = "internet.inwi.ma." Enable Data Roaming even though you are on a local SIM — some phones require it.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-5 h-5 inline mr-2 text-orange-500" /> SIM card says &quot;No Service&quot;
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Your phone may still be carrier-locked. Try the SIM in a different phone to confirm. If it works in another phone, contact your home carrier for an unlock code. Also check that your phone supports the Moroccan frequency bands (900/1800 MHz GSM, 800/1800/2600 MHz LTE).
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-5 h-5 inline mr-2 text-orange-500" /> Data ran out before expected
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Check your balance via the carrier app or USSD code. Background app refresh, cloud photo syncing, and software updates can drain data fast. Disable auto-updates over mobile data. Turn off iCloud/Google Photos auto-upload. Set WhatsApp to download media only on WiFi.
              </p>
            </div>
            <div className="card-moroccan p-5">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-5 h-5 inline mr-2 text-orange-500" /> Slow speeds in the medina
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Thick rammed-earth and stone walls in old medinas block cell signals. Move to a rooftop terrace or step outside the medina walls for a stronger connection. This is a physics problem, not a carrier problem — all three operators struggle in deep medina lanes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Do I need to unlock my phone before visiting Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Your phone must be SIM-unlocked to accept a Moroccan SIM card. Contact your home carrier before traveling to request an unlock — most will do this for free on paid-off devices. If you use an eSIM, unlocking is not always required because the eSIM runs as a second line alongside your existing SIM.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Which Morocco carrier has the best coverage?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Maroc Telecom (IAM) has the widest nationwide coverage, including rural areas, mountain valleys, and parts of the Sahara that other carriers cannot reach. For city-only trips, all three carriers perform well. Orange is the strongest alternative with good urban 4G+ speeds.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Can I buy a SIM card at Marrakech or Casablanca airport?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. All three carriers operate kiosks in the arrivals halls of Mohammed V International Airport (Casablanca) and Marrakech Menara Airport. Airport prices match city prices — there is no tourist markup. Staff speak English and French. Bring your passport for mandatory registration.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> How much does a Morocco SIM card cost?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A blank SIM card costs from 20-30 MAD ($2-$3 USD). Tourist bundles with data and calls range from 70-200 MAD ($7-$20 USD) depending on the carrier and data amount. Inwi&apos;s 15 GB / 15-day plan starts from 70 MAD, while Orange&apos;s 25 GB / 30-day Holiday SIM costs from 150 MAD. Top-up scratch cards start from 10 MAD.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Is VPN legal in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes, VPN usage is completely legal in Morocco. Many locals and travelers use VPNs for privacy and to access geo-restricted streaming content. VoIP services like WhatsApp calls, FaceTime, and Zoom work without a VPN — the government lifted VoIP restrictions in 2021.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Does WiFi work well in Moroccan riads and hotels?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                It depends on the property. Budget riads (under 500 MAD/night) often have slow, shared connections of 2-5 Mbps. Mid-range properties typically offer 10-20 Mbps. Luxury hotels invest in proper WiFi infrastructure and deliver 20-50 Mbps. Thick medina walls weaken signals between rooms. Always carry mobile data as a backup for important tasks.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" /> Can I use my eSIM in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Providers like Airalo, Holafly, and Nomad eSIM offer Morocco-specific data plans starting from around $5 USD for 1 GB. Your phone must be eSIM-compatible (iPhone XS or later, Samsung Galaxy S20+, Google Pixel 3+). eSIMs provide data only — you will not receive a local Moroccan phone number. Activate the eSIM before you board your flight so data works the moment you land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/budget-travel" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete breakdown of costs, money-saving strategies, and how to travel Morocco from 300 MAD per day.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/first-time" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <Star className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything first-time visitors need to know: customs, culture shock, safety, transport, and planning tips.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/transport" className="card-moroccan p-6 group hover:shadow-lg transition-shadow">
              <MapPin className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, grand taxis, and domestic flights. How to get between cities efficiently and affordably.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

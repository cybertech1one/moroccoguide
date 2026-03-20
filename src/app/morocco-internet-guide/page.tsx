import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRight, Home, Wifi, Signal, Smartphone, ScanLine, Globe, MapPin, Shield, Zap, CheckCircle, AlertTriangle, Info, ArrowRight, Download, Upload, DollarSign, Building2, Mountain, Star, Lock, Map, Lightbulb, CreditCard, Settings, Laptop, BadgeCheck, Coffee } from 'lucide-react';

/* ===================================================================
   CONSTANTS
   =================================================================== */

const BASE_URL = 'https://citytoursmorocco.com';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Internet in Morocco 2026 | WiFi Guide, SIM Cards, eSIM & Data Plans for Travelers',
  description:
    'Complete guide to internet in Morocco for travelers. Compare Maroc Telecom, Inwi, and Orange SIM cards. WiFi availability at hotels, riads, and cafes. eSIM options, data plan prices, VPN tips, digital nomad connectivity, and rural coverage expectations.',
  keywords: [
    'internet in Morocco',
    'Morocco WiFi guide',
    'staying connected Morocco',
    'Morocco SIM card for tourists',
    'Morocco eSIM',
    'Maroc Telecom tourist SIM',
    'Inwi data plan Morocco',
    'Orange Morocco prepaid',
    'Morocco WiFi speed',
    'Morocco mobile data',
    'Morocco VPN',
    'Morocco digital nomad internet',
    'Morocco 4G coverage',
    'Morocco data plans price',
    'WiFi Morocco hotels',
    'Morocco internet speed',
    'Morocco coworking spaces internet',
    'Sahara desert connectivity',
  ],
  openGraph: {
    title: 'Internet in Morocco 2026 | WiFi, SIM Cards & eSIM Guide',
    description:
      'Everything you need to stay connected in Morocco. SIM card comparison, WiFi availability, eSIM options, data plans from 20 MAD, VPN advice, and digital nomad connectivity tips.',
    url: `${BASE_URL}/morocco-internet-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Traveler using smartphone while exploring a traditional Moroccan medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Internet in Morocco 2026 | WiFi, SIM Cards & eSIM Guide',
    description:
      'SIM cards from 30 MAD, nationwide 4G, growing 5G. WiFi at hotels, cafes, and coworking spaces. Complete connectivity guide for Morocco travelers.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-internet-guide` },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA (TravelGuide + FAQPage)
   =================================================================== */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-internet-guide`,
  name: 'Internet in Morocco 2026 | WiFi Guide, SIM Cards, eSIM & Data Plans',
  description:
    'A comprehensive guide to internet access, mobile networks, SIM cards, eSIM, WiFi, and staying connected while traveling in Morocco.',
  url: `${BASE_URL}/morocco-internet-guide`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
  author: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'CityGuide Morocco', url: BASE_URL },
  datePublished: '2026-03-19',
  dateModified: '2026-03-19',
  mainEntityOfPage: `${BASE_URL}/morocco-internet-guide`,
  isPartOf: { '@type': 'WebSite', name: 'CityGuide Morocco', url: BASE_URL },
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Internet Guide', item: `${BASE_URL}/morocco-internet-guide` },
    ],
  },
};

const faqItems = [
  { q: 'How much does a SIM card cost in Morocco?', a: 'Tourist SIM cards in Morocco cost from 30 MAD (~$3) for Inwi, 40 MAD (~$4) for Orange, and 50 MAD (~$5) for Maroc Telecom. These include 7-10 GB of data and are available at airport kiosks, carrier stores, and corner shops.' },
  { q: 'Is WiFi available at hotels and riads in Morocco?', a: 'Yes, most hotels and riads in Morocco offer free WiFi. Luxury hotels typically provide 20-80 Mbps, while traditional riads in medinas average 5-25 Mbps. Thick medina walls can weaken signals, so ask for a room near the router if connectivity matters.' },
  { q: 'Can I use an eSIM in Morocco?', a: 'Yes, international eSIM providers like Airalo, Holafly, and Nomad eSIM offer Morocco data plans starting from $4.50 for 1 GB. Local Moroccan carriers do not yet offer eSIM directly, but third-party eSIMs connect to Maroc Telecom or Orange networks.' },
  { q: 'Do I need a VPN in Morocco?', a: 'VPN use is legal in Morocco. A VPN is recommended for public WiFi security and for bypassing carrier-level VoIP blocking on mobile data. WhatsApp, FaceTime, and Zoom calls may be blocked on mobile networks but usually work fine over WiFi.' },
  { q: 'Is there internet in the Sahara desert?', a: 'Connectivity in the Sahara is very limited. Towns like Merzouga have 3G/4G from Maroc Telecom, but signal drops once you enter the dunes. Most desert camps have no internet or very slow satellite WiFi. Plan for 1-2 days offline.' },
  { q: 'Which carrier has the best coverage in Morocco?', a: 'Maroc Telecom has the best overall coverage, especially in rural areas, the Sahara, and Atlas Mountains. For cities only, all three carriers (Maroc Telecom, Inwi, Orange) perform well. Inwi offers the best data-per-dirham value in urban areas.' },
  { q: 'How fast is the internet in Morocco?', a: 'Major cities like Casablanca and Rabat offer 40-100 Mbps fiber and 20-60 Mbps mobile 4G. Tourist cities like Marrakech and Fes average 15-50 Mbps. Rural and mountain areas get 2-10 Mbps. Morocco ranks well among African countries for internet speed.' },
  { q: 'Is Morocco good for digital nomads working remotely?', a: 'Yes, Morocco is increasingly popular with digital nomads. Casablanca, Rabat, and Tangier offer fiber internet at coworking spaces (50-100 Mbps). Marrakech has the largest nomad community. Coworking day passes cost from 80 MAD (~$8). The cost of living is low and the time zone is convenient for European and US clients.' },
] as const;

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((f) => ({
    '@type': 'Question' as const,
    name: f.q,
    acceptedAnswer: { '@type': 'Answer' as const, text: f.a },
  })),
};

/* ===================================================================
   DATA: SIM Card Comparison
   =================================================================== */

const simComparison = [
  { feature: 'Tourist SIM Cost', marocTelecom: 'From 50 MAD (~$5)', inwi: 'From 30 MAD (~$3)', orange: 'From 40 MAD (~$4)' },
  { feature: 'Tourist SIM Data', marocTelecom: '10 GB / 30 days', inwi: '7 GB / 14 days', orange: '8 GB / 30 days' },
  { feature: '10 GB Monthly', marocTelecom: 'From 60 MAD', inwi: 'From 45 MAD', orange: 'From 50 MAD' },
  { feature: '50 GB Monthly', marocTelecom: 'From 200 MAD', inwi: 'From 170 MAD', orange: 'From 185 MAD' },
  { feature: '4G Coverage', marocTelecom: 'Best (95%+ cities)', inwi: 'Good (90% cities)', orange: 'Good (92% cities)' },
  { feature: 'Rural Coverage', marocTelecom: 'Best nationwide', inwi: 'Limited', orange: 'Moderate' },
  { feature: '5G Available', marocTelecom: '4 cities', inwi: '2 cities', orange: '3 cities' },
  { feature: 'English Support', marocTelecom: 'Limited', inwi: 'Limited', orange: 'Best' },
  { feature: 'Best For', marocTelecom: 'Road trips, rural', inwi: 'Budget, cities', orange: 'All-around balance' },
] as const;

/* ===================================================================
   DATA: eSIM Providers
   =================================================================== */

const esimProviders = [
  {
    name: 'Airalo',
    plans: '1 GB ($4.50) / 3 GB ($11) / 5 GB ($16) / 10 GB ($26)',
    validity: '7-30 days',
    network: 'Maroc Telecom / Orange',
    bestFor: 'Most travelers wanting hassle-free setup before arrival',
    rating: 5,
  },
  {
    name: 'Holafly',
    plans: '5 days ($19) / 10 days ($34) / 15 days ($47) / 20 days ($54)',
    validity: '5-20 days',
    network: 'Unlimited data (fair use limit)',
    bestFor: 'Travelers wanting worry-free unlimited data',
    rating: 4,
  },
  {
    name: 'Nomad eSIM',
    plans: '1 GB ($5) / 3 GB ($10) / 5 GB ($15) / 10 GB ($25)',
    validity: '7-30 days',
    network: 'Orange Morocco',
    bestFor: 'Budget-conscious travelers who want eSIM convenience',
    rating: 4,
  },
  {
    name: 'aloSIM',
    plans: '1 GB ($5) / 3 GB ($12) / 5 GB ($18) / 10 GB ($30)',
    validity: '7-30 days',
    network: 'Varies by availability',
    bestFor: 'Flexible travelers who pay only for what they use',
    rating: 3,
  },
] as const;

/* ===================================================================
   DATA: WiFi by Location Type
   =================================================================== */

const wifiLocations = [
  { type: 'Luxury Hotels (4-5 star)', speed: '20-80 Mbps', reliability: 'High', free: true, notes: 'Usually included in room rate. Fiber connections common in newer properties.' },
  { type: 'Riads (Traditional Guesthouses)', speed: '5-25 Mbps', reliability: 'Moderate', free: true, notes: 'Thick medina walls can weaken WiFi signal. Speed varies wildly between riads.' },
  { type: 'Budget Hotels / Hostels', speed: '3-15 Mbps', reliability: 'Low-Moderate', free: true, notes: 'Often shared among many guests. Can slow down during evening hours.' },
  { type: 'Cafes (Tourist Areas)', speed: '5-30 Mbps', reliability: 'Moderate', free: true, notes: 'Most tourist-area cafes offer free WiFi. Order regularly to maintain goodwill.' },
  { type: 'Coworking Spaces', speed: '30-100 Mbps', reliability: 'High', free: false, notes: 'Dedicated fiber lines. Day passes from 80 MAD. Monthly from 800 MAD.' },
  { type: 'Airports', speed: '5-20 Mbps', reliability: 'Moderate', free: true, notes: 'Free WiFi at major airports (30-60 min sessions). Mohammed V and Menara have decent coverage.' },
] as const;

/* ===================================================================
   DATA: Internet Speed by Region
   =================================================================== */

const regionSpeeds = [
  { region: 'Casablanca', download: '40-100 Mbps', mobile4g: '25-60 Mbps', rating: 'Excellent' },
  { region: 'Rabat', download: '30-80 Mbps', mobile4g: '20-50 Mbps', rating: 'Excellent' },
  { region: 'Tangier', download: '25-70 Mbps', mobile4g: '20-45 Mbps', rating: 'Very Good' },
  { region: 'Marrakech', download: '20-60 Mbps', mobile4g: '15-40 Mbps', rating: 'Good' },
  { region: 'Fes', download: '15-50 Mbps', mobile4g: '12-35 Mbps', rating: 'Good' },
  { region: 'Agadir', download: '15-45 Mbps', mobile4g: '12-30 Mbps', rating: 'Good' },
  { region: 'Essaouira', download: '10-30 Mbps', mobile4g: '8-25 Mbps', rating: 'Moderate' },
  { region: 'Chefchaouen', download: '8-20 Mbps', mobile4g: '5-15 Mbps', rating: 'Moderate' },
  { region: 'Sahara (Merzouga)', download: '3-10 Mbps', mobile4g: '3-10 Mbps', rating: 'Limited' },
  { region: 'Atlas Mountains', download: '2-8 Mbps', mobile4g: '2-8 Mbps', rating: 'Limited' },
] as const;

/* ===================================================================
   DATA: Digital Nomad Cities
   =================================================================== */

const nomadCities = [
  { city: 'Casablanca', speed: '50-100 Mbps fiber', coworking: 8, cost: 'From 150 MAD/day', highlight: 'Fastest internet in Morocco. WeWork, New Work Lab, and Cowurk offer 100 Mbps fiber connections.' },
  { city: 'Rabat', speed: '30-80 Mbps fiber', coworking: 5, cost: 'From 120 MAD/day', highlight: 'Government-backed Technopark with fiber internet. Clean, modern city with excellent infrastructure.' },
  { city: 'Marrakech', speed: '20-50 Mbps', coworking: 6, cost: 'From 120 MAD/day', highlight: 'Largest nomad community in Morocco. Le 18, Sun Desk, and Kech Cowork offer reliable WiFi.' },
  { city: 'Tangier', speed: '25-60 Mbps fiber', coworking: 4, cost: 'From 100 MAD/day', highlight: 'Fast-growing tech scene near Spain. The Loft and Technopark offer high-speed connections.' },
  { city: 'Essaouira', speed: '10-30 Mbps', coworking: 3, cost: 'From 80 MAD/day', highlight: 'Laid-back surf-and-work culture. Best for those comfortable with slightly slower speeds.' },
  { city: 'Taghazout', speed: '15-40 Mbps', coworking: 2, cost: 'From 120 MAD/day', highlight: 'Sun Desk is purpose-built for digital nomads with dedicated fiber lines. Surf village vibes.' },
] as const;

/* ===================================================================
   DATA: Data Plan Price Guide
   =================================================================== */

const dataPlanPrices = [
  { plan: 'Tourist SIM (starter)', data: '7-10 GB', validity: '14-30 days', price: 'From 30 MAD', note: 'Cheapest entry point for tourists' },
  { plan: 'Weekly top-up', data: '2-3 GB', validity: '7 days', price: 'From 20 MAD', note: 'Quick recharge for light users' },
  { plan: 'Standard monthly', data: '8-12 GB', validity: '30 days', price: 'From 50 MAD', note: 'Good for 2-week trips' },
  { plan: 'Heavy use monthly', data: '20-25 GB', validity: '30 days', price: 'From 100 MAD', note: 'Social media, maps, and video calls' },
  { plan: 'Nomad package', data: '50-60 GB', validity: '30 days', price: 'From 200 MAD', note: 'Digital nomad and remote workers' },
  { plan: 'eSIM basic', data: '1 GB', validity: '7 days', price: 'From $4.50', note: 'Short trip, light data needs' },
  { plan: 'eSIM standard', data: '5 GB', validity: '15 days', price: 'From $15', note: 'Most popular eSIM plan' },
  { plan: 'eSIM unlimited', data: 'Unlimited', validity: '10 days', price: 'From $34', note: 'Holafly unlimited (fair use applies)' },
] as const;

/* ===================================================================
   COMPONENT: MoroccoInternetGuidePage
   =================================================================== */

export default function MoroccoInternetGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/hero-marrakech.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Internet Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wifi className="w-4 h-4" />
            Connectivity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Internet in Morocco
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            SIM cards from 30 MAD, nationwide 4G, free WiFi at hotels and cafes, and
            growing 5G networks. Your complete guide to staying connected from
            Tangier to the Sahara.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ─── Quick Stats ─── */}
      <section className="py-10 gradient-moroccan">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">3</div>
              <div className="text-sm text-white/70 mt-1">Mobile Carriers</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">$3-5</div>
              <div className="text-sm text-white/70 mt-1">Tourist SIM Cost</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">95%+</div>
              <div className="text-sm text-white/70 mt-1">4G City Coverage</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">100+</div>
              <div className="text-sm text-white/70 mt-1">Mbps Fiber Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Introduction ─── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Staying Connected While Traveling Morocco
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco has invested heavily in telecommunications infrastructure. Three carriers &mdash;
              Maroc Telecom, Inwi, and Orange &mdash; compete vigorously, keeping prices low. A tourist
              SIM with 7-10 GB of 4G data costs as little as 30-50 MAD ($3-5), making Morocco one of
              the most affordable countries for mobile data.
            </p>
            <p>
              In major cities, you will find fast 4G virtually everywhere and expanding 5G. Free WiFi is
              available at most hotels, riads, cafes, and restaurants. Coworking spaces offer fiber
              connections of 50-100 Mbps. Even in smaller towns like Essaouira and Chefchaouen, staying
              connected is straightforward. Challenges arise only in remote areas &mdash; the Sahara,
              Atlas Mountains, and rural south &mdash; though Maroc Telecom usually provides basic
              coverage along major roads.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Table of Contents ─── */}
      <section className="py-12 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            In This Guide
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { href: '#mobile-data', icon: Signal, label: 'Mobile Data Options' },
              { href: '#sim-comparison', icon: Smartphone, label: 'Best SIM Card for Tourists' },
              { href: '#esim', icon: ScanLine, label: 'eSIM Options' },
              { href: '#wifi', icon: Wifi, label: 'WiFi Availability' },
              { href: '#speeds', icon: Zap, label: 'Speed by Location' },
              { href: '#prices', icon: DollarSign, label: 'Data Plan Prices' },
              { href: '#vpn', icon: Lock, label: 'VPN Considerations' },
              { href: '#nomad', icon: Laptop, label: 'Digital Nomad Connectivity' },
              { href: '#remote', icon: Mountain, label: 'Rural & Desert Connectivity' },
              { href: '#faq', icon: Info, label: 'FAQ' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 p-3 rounded-lg hover:bg-[var(--surface)] transition-colors group"
              >
                <item.icon className="w-4 h-4 text-[var(--color-secondary)] flex-shrink-0" />
                <span className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                  {item.label}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[var(--text-muted)] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mobile Data Options ─── */}
      <section id="mobile-data" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Signal className="w-4 h-4" />
              <span>Mobile Networks</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Mobile Data Options in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has three mobile network operators, all offering affordable prepaid
              SIM cards for tourists with no contract required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Maroc Telecom */}
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-accent)]">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                Maroc Telecom
              </h3>
              <p className="text-xs font-medium text-[var(--color-accent)] uppercase tracking-wider mb-4">
                Best coverage, largest network (~43% share)
              </p>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <span className="font-medium text-[var(--text-primary)]">Tourist SIM: </span>
                  Jawal Tourist &mdash; from 50 MAD (~$5) with 10 GB data + 30 min calls, valid 30 days
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  Best rural, highway, and Sahara coverage
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  5G in Casablanca, Rabat, Tangier, Marrakech
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-[var(--warning)] mt-0.5 flex-shrink-0" />
                  Slightly more expensive than competitors
                </div>
              </div>
            </div>

            {/* Inwi */}
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-secondary)]">
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                Inwi
              </h3>
              <p className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-4">
                Best value, youth-focused (~26% share)
              </p>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <span className="font-medium text-[var(--text-primary)]">Tourist SIM: </span>
                  Inwi Tourist &mdash; from 30 MAD (~$3) with 7 GB data + 20 min calls, valid 14 days
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  Most affordable data plans overall
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  Best social media bundles (WhatsApp, Instagram)
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-[var(--warning)] mt-0.5 flex-shrink-0" />
                  Weaker coverage in rural and mountain areas
                </div>
              </div>
            </div>

            {/* Orange */}
            <div className="card-moroccan p-6 border-t-4" style={{ borderColor: '#F16E00' }}>
              <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                Orange Morocco
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider mb-4" style={{ color: '#F16E00' }}>
                Solid all-around choice (~31% share)
              </p>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <span className="font-medium text-[var(--text-primary)]">Tourist SIM: </span>
                  Orange Holiday &mdash; from 40 MAD (~$4) with 8 GB data + 60 min calls, valid 30 days
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  Best English-language customer support
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  Good international roaming partnerships
                </div>
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-3.5 h-3.5 text-[var(--warning)] mt-0.5 flex-shrink-0" />
                  Mid-range coverage in remote areas
                </div>
              </div>
            </div>
          </div>

          {/* How to Buy */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
              How to Buy a SIM Card
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  { step: '1', title: 'At the airport', desc: 'All three carriers have kiosks at arrivals in Mohammed V (Casablanca), Menara (Marrakech), Ibn Battouta (Tangier), and Fes-Saiss. Easiest option.' },
                  { step: '2', title: 'Bring your passport', desc: 'Moroccan law requires ID for SIM registration. Staff will photocopy or scan your passport.' },
                  { step: '3', title: 'Pay in cash (MAD)', desc: 'Most SIM purchases require Moroccan dirhams. Airport exchange counters are open for arrivals.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white text-xs font-bold">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-semibold text-[var(--text-primary)] text-sm">{item.title}</div>
                      <p className="text-xs text-[var(--text-muted)] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2 text-sm">
                  <Lightbulb className="w-4 h-4 text-[var(--color-accent)]" />
                  Pro Tips
                </h4>
                <ul className="space-y-2">
                  {[
                    'Buy at the airport to use data immediately in your taxi or transfer',
                    'Download the carrier app (My IAM, My Inwi, My Orange) to monitor usage',
                    'If you have a dual-SIM phone, keep your home SIM for SMS verification codes',
                    'Top up at any corner shop (hanout) or via the carrier app when needed',
                    'SIM cards stay active for 2-3 months without top-up for future trips',
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <BadgeCheck className="w-3.5 h-3.5 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SIM Card Comparison Table ─── */}
      <section id="sim-comparison" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Smartphone className="w-4 h-4" />
              <span>Side by Side</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Best SIM Card for Tourists: Comparison
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A head-to-head comparison to help you choose the right carrier for your trip.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Feature</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--color-accent)]">Maroc Telecom</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--color-secondary)]">Inwi</th>
                    <th className="px-4 py-3 text-sm font-semibold" style={{ color: '#F16E00' }}>Orange</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {simComparison.map((row) => (
                    <tr key={row.feature} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-medium text-[var(--text-primary)]">{row.feature}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.marocTelecom}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.inwi}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.orange}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommendation Boxes */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-accent)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Best Overall Coverage</h4>
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-2">Maroc Telecom</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose for rural areas, Sahara, Atlas Mountains, and road trips across Morocco.
              </p>
            </div>
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-secondary)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Best Value for Data</h4>
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-secondary)] mb-2">Inwi</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose for city-only trips when you want the most data per dirham spent.
              </p>
            </div>
            <div className="card-moroccan p-6 border-t-4" style={{ borderColor: '#F16E00' }}>
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Best All-Around</h4>
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold mb-2" style={{ color: '#F16E00' }}>Orange</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose for solid balance of coverage, price, and English-language support.
              </p>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--text-muted)] mt-6">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices. Seasonal pricing and promotional offers can change. Prices verified March 2026.
          </p>
        </div>
      </section>

      {/* ─── eSIM Options ─── */}
      <section id="esim" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <ScanLine className="w-4 h-4" />
              <span>eSIM Technology</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              eSIM Options for Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              If your phone supports eSIM (iPhone XS and later, most recent Samsung Galaxy,
              Google Pixel 3+), you can set up a Morocco data plan before boarding your flight.
            </p>
          </div>

          {/* eSIM vs Physical SIM */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              eSIM vs. Physical SIM: Which Should You Choose?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <ScanLine className="w-4 h-4 text-[var(--color-secondary)]" /> Choose eSIM If...
                </h4>
                <ul className="space-y-2">
                  {['Instant activation before arriving', 'Dual-SIM phone &mdash; keep your home number', 'Short trip (under 2 weeks), data only needs', 'No-hassle, no-shop-visit experience'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-[var(--color-secondary)]" /> Choose Physical SIM If...
                </h4>
                <ul className="space-y-2">
                  {['Cheapest rates (50-70% cheaper per GB than eSIM)', 'Need a local Moroccan phone number for calls', 'Staying more than 2 weeks', 'Visiting remote areas needing best coverage'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* eSIM Provider Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {esimProviders.map((provider) => (
              <div key={provider.name} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                    {provider.name}
                  </h3>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${i < provider.rating ? 'text-[var(--color-accent)] fill-[var(--color-accent)]' : 'text-[var(--border-light)]'}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Plans: </span>
                    <span className="text-[var(--text-secondary)]">{provider.plans}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Validity: </span>
                    <span className="text-[var(--text-secondary)]">{provider.validity}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Network: </span>
                    <span className="text-[var(--text-secondary)]">{provider.network}</span>
                  </div>
                  <div className="pt-2 border-t border-[var(--border-light)]">
                    <span className="font-medium text-[var(--color-secondary)]">Best for: </span>
                    <span className="text-[var(--text-secondary)]">{provider.bestFor}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WiFi Availability ─── */}
      <section id="wifi" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Wifi className="w-4 h-4" />
              <span>WiFi Access</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              WiFi Availability in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              WiFi is widely available across Morocco, but quality varies significantly
              by location type and region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wifiLocations.map((loc) => (
              <div key={loc.type} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)]">{loc.type}</h3>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    loc.free
                      ? 'bg-[var(--success)]/10 text-[var(--success)]'
                      : 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                  }`}>
                    {loc.free ? 'Free' : 'Paid'}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {loc.speed}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Signal className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    {loc.reliability}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">{loc.notes}</p>
              </div>
            ))}
          </div>

          {/* WiFi Tips */}
          <div className="mt-8 card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-secondary)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[var(--color-secondary)]" /> WiFi Tips for Morocco
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {['Ask for WiFi passwords at cafes &mdash; rarely posted but almost always available.', 'In riads with thick walls, ask for a room near the router for best signal.', 'Hotels often have better WiFi in common areas than individual rooms.', 'Confirm internet speed before booking if WiFi is critical for work.', 'McDonald\'s and Starbucks offer free, fast WiFi as a reliable backup.', 'Always use a VPN on public WiFi &mdash; generally unencrypted in Morocco.'].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                  <span dangerouslySetInnerHTML={{ __html: tip }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Internet Speeds by Region ─── */}
      <section id="speeds" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Zap className="w-4 h-4" />
              <span>Speed Data</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Internet Speed Expectations by Location
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Internet speeds in Morocco vary dramatically between cities and rural areas.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Region</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
                      <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" /> WiFi/Fiber</span>
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
                      <span className="flex items-center gap-1"><Upload className="w-3.5 h-3.5" /> Mobile 4G</span>
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {regionSpeeds.map((row) => (
                    <tr key={row.region} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-bold text-[var(--text-primary)]">{row.region}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.download}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.mobile4g}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          row.rating === 'Excellent' ? 'bg-[var(--success)]/10 text-[var(--success)]' :
                          row.rating === 'Very Good' ? 'bg-[var(--success)]/10 text-[var(--success)]' :
                          row.rating === 'Good' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' :
                          row.rating === 'Moderate' ? 'bg-[var(--warning)]/10 text-[var(--warning)]' :
                          'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]'
                        }`}>
                          {row.rating}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-[var(--surface-muted)] border border-[var(--border-light)]">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[var(--info)] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-medium text-[var(--text-primary)]">Note: </span>
                Speeds vary by time of day, network congestion, and specific location. Coworking
                spaces and fiber-connected hotels generally deliver speeds at the higher end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Data Plan Prices ─── */}
      <section id="prices" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Data Plan Price Guide
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              What to expect to pay for mobile data in Morocco, from budget tourist SIMs to
              digital nomad packages.
            </p>
            <p className="text-sm text-[var(--text-muted)] max-w-xl mx-auto mt-2">
              <Info className="w-3.5 h-3.5 inline mr-1" />
              All prices are starting prices. Seasonal pricing and promotional offers can change.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[600px]">
                <thead>
                  <tr className="bg-[var(--color-accent)] text-white text-sm font-medium">
                    <th className="p-3 px-4">Plan Type</th>
                    <th className="p-3 px-4">Data</th>
                    <th className="p-3 px-4">Validity</th>
                    <th className="p-3 px-4">Price</th>
                    <th className="p-3 px-4">Note</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {dataPlanPrices.map((item, i) => (
                    <tr key={item.plan} className={i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}>
                      <td className="p-3 px-4 text-sm font-medium text-[var(--text-primary)]">{item.plan}</td>
                      <td className="p-3 px-4 text-sm text-[var(--color-secondary)] font-semibold">{item.data}</td>
                      <td className="p-3 px-4 text-sm text-[var(--text-secondary)]">{item.validity}</td>
                      <td className="p-3 px-4 text-sm text-[var(--text-primary)] font-medium">{item.price}</td>
                      <td className="p-3 px-4 text-xs text-[var(--text-muted)]">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Usage Reference */}
          <div className="mt-8 grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="card-moroccan p-5 text-center">
              <div className="text-lg font-bold text-[var(--color-secondary)]">5-7 GB</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                Light user (1-2 weeks): messaging, maps, browsing
              </div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="text-lg font-bold text-[var(--color-secondary)]">10-20 GB</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                Moderate user (2-4 weeks): social media, video calls
              </div>
            </div>
            <div className="card-moroccan p-5 text-center">
              <div className="text-lg font-bold text-[var(--color-secondary)]">30-50 GB</div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                Heavy / nomad (month): remote work, streaming
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VPN Considerations ─── */}
      <section id="vpn" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Lock className="w-4 h-4" />
              <span>Privacy &amp; Security</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              VPN Considerations in Morocco
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Understanding VPN use, VoIP access, and online privacy while traveling in Morocco.
            </p>
          </div>

          <div className="card-moroccan p-6 md:p-8 mb-6">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
              VPN Status in Morocco
            </h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p>
                VPN use is <span className="font-medium text-[var(--text-primary)]">legal in Morocco</span> and
                widely used by businesses, remote workers, and travelers. Morocco blocks VoIP calling at
                the carrier level &mdash; WhatsApp, FaceTime, and Zoom calls may be blocked on mobile data.
                A VPN typically bypasses these restrictions. The blocking is intermittent, stricter on mobile data than WiFi.
              </p>
            </div>
            <h4 className="font-semibold text-[var(--text-primary)] mt-5 mb-3 text-sm">When to Use a VPN</h4>
            <div className="grid md:grid-cols-3 gap-3">
              {[
                { title: 'Public WiFi security', desc: 'Protect data on cafe, hotel, and airport WiFi.' },
                { title: 'VoIP on mobile data', desc: 'Bypass VoIP blocking for WhatsApp and FaceTime calls.' },
                { title: 'Streaming services', desc: 'Access home Netflix, Hulu, or BBC iPlayer library.' },
                { title: 'Remote work security', desc: 'Connect to company VPN for work system access.' },
                { title: 'Online banking', desc: 'Prevent account lockouts from foreign logins.' },
                { title: 'Shared networks', desc: 'Privacy on hostel and shared accommodation WiFi.' },
              ].map((item) => (
                <div key={item.title} className="p-3 rounded-lg bg-[var(--surface-muted)]">
                  <div className="font-medium text-[var(--text-primary)] text-sm mb-1">{item.title}</div>
                  <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-[var(--color-accent)]" /> Recommended VPNs
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'NordVPN', price: '~$3.50/month', note: 'Best overall. Fast speeds, reliable, many servers.' },
                { name: 'ExpressVPN', price: '~$6.50/month', note: 'Fastest speeds. Best for video calls and streaming.' },
                { name: 'Surfshark', price: '~$2.50/month', note: 'Best budget option with unlimited devices.' },
              ].map((vpn) => (
                <div key={vpn.name} className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <div className="font-semibold text-[var(--text-primary)] mb-1">{vpn.name}</div>
                  <div className="text-xs text-[var(--color-secondary)] font-medium mb-2">{vpn.price}</div>
                  <p className="text-xs text-[var(--text-muted)]">{vpn.note}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 rounded-lg bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20">
              <div className="flex items-start gap-2">
                <Lightbulb className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[var(--text-secondary)]">
                  <span className="font-medium text-[var(--text-primary)]">Important: </span>
                  Download and configure your VPN before arriving in Morocco. Set it to auto-connect on untrusted networks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Digital Nomad Connectivity ─── */}
      <section id="nomad" className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Laptop className="w-4 h-4" />
              <span>Remote Work</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Digital Nomad Connectivity
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco is becoming a top digital nomad destination with affordable coworking,
              fast fiber internet, and a convenient time zone for European and US clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nomadCities.map((city) => (
              <div key={city.city} className="card-moroccan p-6">
                <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-1">
                  {city.city}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--text-secondary)] mb-3">
                  <span className="flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                    {city.speed}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    {city.coworking} coworking spaces
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-3">{city.highlight}</p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <span className="text-xs font-medium text-[var(--color-secondary)]">
                    <CreditCard className="w-3 h-3 inline mr-1" />
                    {city.cost}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Nomad Setup Advice */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Recommended Setup for Remote Workers
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: 'Primary', title: 'Coworking WiFi', desc: 'Dedicated fiber (30-100 Mbps). Most reliable for video calls and file transfers.' },
                { label: 'Backup', title: 'Mobile Hotspot', desc: 'Maroc Telecom 50 GB plan (from 200 MAD/month). Essential backup for meetings.' },
                { label: 'Optional', title: 'Portable Router', desc: '4G router (from 300 MAD) with local SIM. Better antenna for weak signal areas.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-1">{item.label}</div>
                  <h4 className="font-semibold text-[var(--text-primary)] text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Rural & Desert Connectivity ─── */}
      <section id="remote" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Mountain className="w-4 h-4" />
              <span>Off the Grid</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Rural &amp; Desert Connectivity
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Heading to the Sahara, Atlas Mountains, or rural villages? Here is what to
              expect and how to prepare for limited connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-desert.webp"
                  alt="Golden sand dunes of the Sahara desert in Morocco near Merzouga"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Sahara Desert
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-4">
                  <Signal className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                  <span>Coverage: Towns only, no signal in dunes</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Merzouga: </span>
                    Maroc Telecom provides 3G/4G in town. Signal drops once you enter the dunes.
                    Most luxury camps have no internet or very slow satellite WiFi.
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Zagora / Erg Chigaga: </span>
                    More remote than Merzouga. Plan to be offline for 1-2 nights at desert camps.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-marrakech.webp"
                  alt="High Atlas Mountains landscape with traditional Berber village"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Atlas Mountains
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-4">
                  <Signal className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                  <span>Coverage: Valleys and towns, patchy at altitude</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Imlil / Toubkal: </span>
                    Imlil village has decent Maroc Telecom 3G/4G. Signal weakens on the ascent.
                    The Toubkal refuge has no cellular coverage.
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Dades / Todra Gorges: </span>
                    Coverage at gorge entrances. Signal drops inside canyons. Larger hotels have WiFi.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preparation Checklist */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--success)]" /> Remote Area Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {['Download offline maps (Google Maps + Maps.me)', 'Save phone numbers offline (hotel, guide, embassy)', 'Download translation packs (French, Arabic)', 'Carry a 20,000+ mAh power bank', 'Inform family of itinerary and return date', 'Save passport and insurance docs offline', 'Use Maroc Telecom for best rural coverage', 'Download entertainment for offline use'].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />{item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ Section ─── */}
      <section id="faq" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Related Guides ─── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Guides
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {([
              ['/connectivity', Globe, 'Full Connectivity Guide', 'Carriers, apps, emergency numbers, data saving.'],
              ['/morocco-sim-card', Smartphone, 'Morocco SIM Card Guide', 'Detailed prepaid SIM comparison for tourists.'],
              ['/morocco-digital-nomad-guide', Laptop, 'Digital Nomad Guide', 'Coworking, cost of living, remote work cities.'],
              ['/sim-card', Settings, 'SIM Card Setup', 'Step-by-step buying and activation instructions.'],
              ['/digital-nomad', Coffee, 'Nomad Lifestyle', 'Living and working remotely in Morocco.'],
            ] as const).map(([href, Icon, title, desc]) => (
              <Link key={href} href={href} className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
                <Icon className="w-7 h-7 text-[var(--color-accent)] mb-3" />
                <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1 group-hover:text-[var(--color-accent)] transition-colors">{title}</h3>
                <p className="text-xs text-[var(--text-secondary)] mb-2">{desc}</p>
                <span className="text-xs text-[var(--color-accent)] flex items-center gap-1">Read more <ArrowRight className="w-3 h-3" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Continue Planning Your Morocco Trip
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-10">
            Explore more practical guides for an unforgettable experience in Morocco.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {([
              ['/health', Shield, 'Health & Safety', 'Medical facilities, vaccinations, insurance.'],
              ['/transportation', Map, 'Transportation', 'Trains, buses, taxis, and getting around.'],
              ['/guides', Globe, 'Travel Planning', 'Budgeting, itineraries, and packing tips.'],
              ['/essentials', Info, 'Morocco Essentials', 'Currency, language, culture, customs.'],
            ] as const).map(([href, Icon, title, desc]) => (
              <Link key={href} href={href} className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors group text-left">
                <Icon className="w-6 h-6 text-white/80 mb-3" />
                <h3 className="text-white font-semibold mb-1">{title}</h3>
                <p className="text-white/60 text-sm mb-3">{desc}</p>
                <span className="text-sm text-white/80 flex items-center gap-1 group-hover:gap-2 transition-all">Read Guide <ArrowRight className="w-3.5 h-3.5" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

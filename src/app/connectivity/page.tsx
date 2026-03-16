import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Wifi,
  Signal,
  Smartphone,
  ScanLine,
  Globe,
  MapPin,
  Shield,
  Zap,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
  ArrowRight,
  Phone,
  Download,
  Upload,
  DollarSign,
  Building2,
  Mountain,
  Star,
  Users,
  Lock,
  MessageCircle,
  Map,
  Lightbulb,
  CreditCard,
  FileText,
  Settings,
  BatteryCharging,
  Laptop,
  CardSim,
  BadgeCheck,
  PhoneCall,
  Navigation,
  CloudDownload,
  Eye,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Internet & Connectivity Guide 2025-2026 | SIM Cards, WiFi, eSIM & Data Plans',
  description:
    'Complete guide to staying connected in Morocco. Compare Maroc Telecom, Inwi, and Orange data plans. SIM card purchasing, eSIM options, WiFi availability, internet speeds by region, VPN tips, digital nomad connectivity, and essential travel apps for Morocco.',
  keywords: [
    'Morocco internet',
    'Morocco SIM card',
    'Morocco eSIM',
    'Maroc Telecom tourist SIM',
    'Inwi data plan',
    'Orange Morocco',
    'Morocco WiFi',
    'Morocco mobile data',
    'Morocco VPN',
    'Morocco internet speed',
    'Morocco digital nomad internet',
    'Morocco travel apps',
    'Morocco phone service',
    'Morocco prepaid SIM',
    'Morocco 4G coverage',
    'Morocco 5G',
    'staying connected Morocco',
    'Morocco data roaming',
  ],
  openGraph: {
    title: 'Morocco Internet & Connectivity Guide 2025-2026 | SIM, WiFi & eSIM',
    description:
      'Everything you need to stay connected in Morocco. SIM cards, eSIM, WiFi, carrier comparison, internet speeds, VPN advice, and essential apps for travelers.',
    url: 'https://citytoursmorocco.com/connectivity',
    images: [
      {
        url: '/images/hero-marrakech.webp',
        width: 1200,
        height: 630,
        alt: 'Traveler using smartphone in Morocco with traditional architecture in background',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Internet & Connectivity Guide 2025-2026',
    description:
      'SIM cards, eSIM, WiFi, carrier plans, VPN tips, and essential apps for staying connected in Morocco.',
    images: ['/images/hero-marrakech.webp'],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/connectivity' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  name: 'Morocco Internet & Connectivity Guide 2025-2026',
  description:
    'A comprehensive guide to internet access, mobile networks, SIM cards, eSIM, WiFi, and staying connected while traveling in Morocco.',
  url: 'https://citytoursmorocco.com/connectivity',
  isPartOf: {
    '@type': 'WebSite',
    name: 'CityGuide Morocco',
    url: 'https://citytoursmorocco.com',
  },
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
  dateModified: '2025-12-01',
};

/* ===================================================================
   DATA: Mobile Carriers
   =================================================================== */

const carriers = [
  {
    name: 'Maroc Telecom (IAM)',
    tagline: 'Largest network, best rural coverage',
    color: 'var(--color-accent)',
    marketShare: '~43%',
    technology: '2G / 3G / 4G / 5G (expanding)',
    coverage: 'Best nationwide coverage including rural areas and highways',
    touristSim: 'Jawal Tourist SIM',
    touristSimCost: '50 MAD (~$5)',
    touristSimData: '10 GB data + 30 min local calls, valid 30 days',
    website: 'iam.ma',
    strengths: [
      'Best rural and highway coverage in Morocco',
      'Largest 4G network footprint',
      '5G rollout in Casablanca, Rabat, Tangier, Marrakech',
      'Most reliable for calls and SMS nationwide',
      'Best option for Sahara and Atlas Mountain travel',
    ],
    weaknesses: [
      'Slightly more expensive than competitors',
      'Customer service can be slow',
      'Tourist SIM registration sometimes takes longer',
    ],
    plans: [
      { name: 'Jawal Tourist', data: '10 GB', validity: '30 days', price: '50 MAD (~$5)', note: 'Includes 30 min local calls' },
      { name: 'Jawal Recharge 20', data: '2 GB', validity: '7 days', price: '20 MAD (~$2)', note: 'Good for light use' },
      { name: 'Jawal Recharge 50', data: '8 GB', validity: '30 days', price: '50 MAD (~$5)', note: 'Standard monthly' },
      { name: 'Jawal Recharge 100', data: '20 GB', validity: '30 days', price: '100 MAD (~$10)', note: 'Heavy data use' },
      { name: 'Jawal Recharge 200', data: '50 GB', validity: '30 days', price: '200 MAD (~$20)', note: 'Digital nomad package' },
    ],
  },
  {
    name: 'Inwi',
    tagline: 'Best value, youth-focused',
    color: 'var(--color-secondary)',
    marketShare: '~26%',
    technology: '2G / 3G / 4G+ / 5G (limited)',
    coverage: 'Strong in cities and major highways, limited in remote areas',
    touristSim: 'Inwi Tourist SIM',
    touristSimCost: '30 MAD (~$3)',
    touristSimData: '7 GB data + 20 min local calls, valid 14 days',
    website: 'inwi.ma',
    strengths: [
      'Most affordable data plans overall',
      'Best social media bundles (WhatsApp, Instagram, TikTok)',
      'Fast 4G+ speeds in urban areas',
      'Easy top-up via mobile app',
      'Strong in-city coverage in major destinations',
    ],
    weaknesses: [
      'Weaker coverage in rural and mountain areas',
      'Network congestion in peak hours (cities)',
      'Less reliable in the Sahara and deep south',
    ],
    plans: [
      { name: 'Tourist SIM', data: '7 GB', validity: '14 days', price: '30 MAD (~$3)', note: 'Budget-friendly starter' },
      { name: 'Recharge 20', data: '3 GB', validity: '7 days', price: '20 MAD (~$2)', note: 'Best weekly deal' },
      { name: 'Recharge 50', data: '12 GB', validity: '30 days', price: '50 MAD (~$5)', note: 'Most GB per dirham' },
      { name: 'Recharge 100', data: '25 GB', validity: '30 days', price: '100 MAD (~$10)', note: 'Great value heavy use' },
      { name: 'Recharge 200', data: '60 GB', validity: '30 days', price: '200 MAD (~$20)', note: 'Best data-per-dirham ratio' },
    ],
  },
  {
    name: 'Orange Morocco',
    tagline: 'International brand, solid urban coverage',
    color: '#F16E00',
    marketShare: '~31%',
    technology: '2G / 3G / 4G / 5G (expanding)',
    coverage: 'Good in cities and tourist areas, moderate rural coverage',
    touristSim: 'Orange Holiday SIM',
    touristSimCost: '40 MAD (~$4)',
    touristSimData: '8 GB data + 60 min local calls, valid 30 days',
    website: 'orange.ma',
    strengths: [
      'International roaming partnerships (good if traveling onward)',
      'Excellent 4G speeds in tourist cities',
      'Reliable customer service in French and English',
      'Good balance of price and coverage',
      'Strong in Marrakech, Fes, Casablanca, Agadir',
    ],
    weaknesses: [
      'Mid-range coverage in rural areas (between IAM and Inwi)',
      'Slightly fewer physical stores than Maroc Telecom',
      'Social media bundles less generous than Inwi',
    ],
    plans: [
      { name: 'Holiday SIM', data: '8 GB', validity: '30 days', price: '40 MAD (~$4)', note: 'Includes 60 min local calls' },
      { name: 'Recharge 20', data: '2.5 GB', validity: '7 days', price: '20 MAD (~$2)', note: 'Quick top-up' },
      { name: 'Recharge 50', data: '10 GB', validity: '30 days', price: '50 MAD (~$5)', note: 'Solid monthly option' },
      { name: 'Recharge 100', data: '22 GB', validity: '30 days', price: '100 MAD (~$10)', note: 'Generous data + calls' },
      { name: 'Recharge 200', data: '55 GB', validity: '30 days', price: '200 MAD (~$20)', note: 'Power user package' },
    ],
  },
];

/* ===================================================================
   DATA: eSIM Providers
   =================================================================== */

const esimProviders = [
  {
    name: 'Airalo',
    dataOptions: '1 GB ($4.50) / 3 GB ($11) / 5 GB ($16) / 10 GB ($26)',
    validity: '7 - 30 days',
    network: 'Maroc Telecom / Orange (varies)',
    pros: 'Largest eSIM marketplace, easy app, instant activation, 24/7 support',
    cons: 'Data only (no calls/SMS), slightly pricier per GB than local SIM',
    bestFor: 'Most travelers wanting hassle-free setup before arrival',
    rating: 5,
  },
  {
    name: 'Holafly',
    dataOptions: '5 days ($19) / 10 days ($34) / 15 days ($47) / 20 days ($54)',
    validity: '5 - 20 days',
    network: 'Unlimited data (fair use ~500MB/day high-speed)',
    pros: 'Unlimited data plans, simple pricing, good app',
    cons: 'More expensive, throttled after fair-use limit, data only',
    bestFor: 'Travelers who want worry-free unlimited data',
    rating: 4,
  },
  {
    name: 'Nomad eSIM',
    dataOptions: '1 GB ($5) / 3 GB ($10) / 5 GB ($15) / 10 GB ($25)',
    validity: '7 - 30 days',
    network: 'Orange Morocco',
    pros: 'Competitive pricing, straightforward plans, good speeds',
    cons: 'Smaller company, less customer support, data only',
    bestFor: 'Budget-conscious travelers who want eSIM convenience',
    rating: 4,
  },
  {
    name: 'aloSIM',
    dataOptions: '1 GB ($5) / 3 GB ($12) / 5 GB ($18) / 10 GB ($30)',
    validity: '7 - 30 days',
    network: 'Varies by availability',
    pros: 'Pay-as-you-go model, no expiry pressure, top-up from app',
    cons: 'Slightly higher per-GB cost, fewer Morocco-specific plans',
    bestFor: 'Flexible travelers who want to pay only for what they use',
    rating: 3,
  },
];

/* ===================================================================
   DATA: Internet Speeds by Region
   =================================================================== */

const regionSpeeds = [
  { region: 'Casablanca', download: '40-100 Mbps', upload: '10-30 Mbps', mobile4g: '25-60 Mbps', fiberAvailable: true, rating: 'Excellent' },
  { region: 'Rabat', download: '30-80 Mbps', upload: '8-25 Mbps', mobile4g: '20-50 Mbps', fiberAvailable: true, rating: 'Excellent' },
  { region: 'Tangier', download: '25-70 Mbps', upload: '8-20 Mbps', mobile4g: '20-45 Mbps', fiberAvailable: true, rating: 'Very Good' },
  { region: 'Marrakech', download: '20-60 Mbps', upload: '5-15 Mbps', mobile4g: '15-40 Mbps', fiberAvailable: true, rating: 'Good' },
  { region: 'Fes', download: '15-50 Mbps', upload: '5-12 Mbps', mobile4g: '12-35 Mbps', fiberAvailable: true, rating: 'Good' },
  { region: 'Agadir', download: '15-45 Mbps', upload: '5-12 Mbps', mobile4g: '12-30 Mbps', fiberAvailable: true, rating: 'Good' },
  { region: 'Essaouira', download: '10-30 Mbps', upload: '3-10 Mbps', mobile4g: '8-25 Mbps', fiberAvailable: false, rating: 'Moderate' },
  { region: 'Chefchaouen', download: '8-20 Mbps', upload: '2-8 Mbps', mobile4g: '5-15 Mbps', fiberAvailable: false, rating: 'Moderate' },
  { region: 'Sahara (Merzouga)', download: '3-10 Mbps', upload: '1-5 Mbps', mobile4g: '3-10 Mbps', fiberAvailable: false, rating: 'Limited' },
  { region: 'Atlas Mountains', download: '2-8 Mbps', upload: '1-3 Mbps', mobile4g: '2-8 Mbps', fiberAvailable: false, rating: 'Limited' },
  { region: 'Rural South', download: '1-5 Mbps', upload: '0.5-2 Mbps', mobile4g: '1-5 Mbps', fiberAvailable: false, rating: 'Very Limited' },
];

/* ===================================================================
   DATA: Digital Nomad Cities
   =================================================================== */

const nomadCities = [
  {
    city: 'Casablanca',
    avgSpeed: '50-100 Mbps fiber',
    coworkingSpaces: 8,
    monthlyCost: '150-250 MAD coworking',
    highlights: 'Fastest internet in Morocco. Cowurk, New Work Lab, and WeWork offer 100 Mbps fiber. Morocco\'s tech capital with the most reliable connectivity.',
  },
  {
    city: 'Rabat',
    avgSpeed: '30-80 Mbps fiber',
    coworkingSpaces: 5,
    monthlyCost: '120-200 MAD coworking',
    highlights: 'Government-backed Technopark with fiber internet. Clean, modern city with excellent infrastructure and growing startup ecosystem.',
  },
  {
    city: 'Tangier',
    avgSpeed: '25-60 Mbps fiber',
    coworkingSpaces: 4,
    monthlyCost: '100-180 MAD coworking',
    highlights: 'Fast-growing tech scene with strong fiber infrastructure. Proximity to Spain. The Loft and Technopark offer high-speed connections.',
  },
  {
    city: 'Marrakech',
    avgSpeed: '20-50 Mbps',
    coworkingSpaces: 6,
    monthlyCost: '120-200 MAD coworking',
    highlights: 'Largest nomad community in Morocco. Le 18, Sun Desk, and Kech Cowork all offer reliable WiFi. Many cafes with decent internet.',
  },
  {
    city: 'Essaouira',
    avgSpeed: '10-30 Mbps',
    coworkingSpaces: 3,
    monthlyCost: '80-150 MAD coworking',
    highlights: 'Smaller but reliable in the medina area. Laid-back surf-and-work culture. Best for those who can handle slightly slower speeds.',
  },
  {
    city: 'Taghazout',
    avgSpeed: '15-40 Mbps',
    coworkingSpaces: 2,
    monthlyCost: '120-180 MAD coworking',
    highlights: 'Sun Desk is purpose-built for digital nomads with dedicated fiber lines. Surf village with surprisingly good connectivity at coworking spots.',
  },
];

/* ===================================================================
   DATA: Essential Apps
   =================================================================== */

const essentialApps = [
  {
    category: 'Communication',
    apps: [
      { name: 'WhatsApp', description: 'The primary communication app in Morocco. Everyone uses it: taxi drivers, restaurants, tour guides, hotels. Essential for local contact.', icon: 'MessageCircle' },
      { name: 'Telegram', description: 'Popular backup to WhatsApp with better file sharing. Used by some local businesses and expat communities.', icon: 'MessageCircle' },
    ],
  },
  {
    category: 'Navigation',
    apps: [
      { name: 'Google Maps', description: 'Works well in cities and for driving directions. Download offline maps for the region you are visiting before heading to rural areas.', icon: 'Map' },
      { name: 'Maps.me', description: 'Excellent for offline navigation in medinas and rural areas. More detailed trail and path data than Google Maps for hiking.', icon: 'Navigation' },
    ],
  },
  {
    category: 'Transportation',
    apps: [
      { name: 'InDrive', description: 'Ride-hailing app popular in Moroccan cities. Set your own price and negotiate. More affordable than taxis in many cases.', icon: 'Navigation' },
      { name: 'Careem', description: 'Uber-owned ride-hailing app available in Casablanca, Rabat, Marrakech, and Tangier. Reliable with transparent pricing.', icon: 'Navigation' },
      { name: 'ONCF (Train)', description: 'Official Moroccan railway app for booking train tickets between cities. Book in advance for Al Boraq high-speed train.', icon: 'Navigation' },
    ],
  },
  {
    category: 'Translation',
    apps: [
      { name: 'Google Translate', description: 'Download French, Arabic, and Darija (Moroccan Arabic) packs for offline use. Camera translation feature works on signs and menus.', icon: 'Globe' },
    ],
  },
  {
    category: 'Money',
    apps: [
      { name: 'Wise (TransferWise)', description: 'Best exchange rates for converting currency. Wise debit card works at Moroccan ATMs with low fees.', icon: 'CreditCard' },
      { name: 'XE Currency', description: 'Real-time MAD exchange rate tracking. Works offline once rates are cached. Essential for budgeting.', icon: 'DollarSign' },
    ],
  },
  {
    category: 'VPN Services',
    apps: [
      { name: 'NordVPN', description: 'Reliable in Morocco with many server options. Good speeds and consistent connections. Works well for streaming.', icon: 'Shield' },
      { name: 'ExpressVPN', description: 'Fastest VPN option in Morocco. More expensive but excellent for video calls and streaming. Strong encryption.', icon: 'Shield' },
    ],
  },
];

/* ===================================================================
   DATA: Carrier Comparison Table
   =================================================================== */

const carrierComparison = [
  { feature: 'Market Share', marocTelecom: '~43%', inwi: '~26%', orange: '~31%' },
  { feature: 'Tourist SIM Cost', marocTelecom: '50 MAD', inwi: '30 MAD', orange: '40 MAD' },
  { feature: 'Tourist SIM Data', marocTelecom: '10 GB / 30 days', inwi: '7 GB / 14 days', orange: '8 GB / 30 days' },
  { feature: '10 GB Monthly Cost', marocTelecom: '~60 MAD', inwi: '~45 MAD', orange: '~50 MAD' },
  { feature: '50 GB Monthly Cost', marocTelecom: '~200 MAD', inwi: '~170 MAD', orange: '~185 MAD' },
  { feature: '4G Coverage', marocTelecom: 'Best (95%+ cities)', inwi: 'Good (90% cities)', orange: 'Good (92% cities)' },
  { feature: 'Rural Coverage', marocTelecom: 'Best', inwi: 'Limited', orange: 'Moderate' },
  { feature: '5G Availability', marocTelecom: '4 cities', inwi: '2 cities', orange: '3 cities' },
  { feature: 'English Support', marocTelecom: 'Limited', inwi: 'Limited', orange: 'Best' },
  { feature: 'eSIM Support', marocTelecom: 'No (local)', inwi: 'No (local)', orange: 'No (local)' },
  { feature: 'App Quality', marocTelecom: 'Good', inwi: 'Best', orange: 'Good' },
  { feature: 'Top-up Ease', marocTelecom: 'Easy (everywhere)', inwi: 'Very Easy (app)', orange: 'Easy (app + stores)' },
];

/* ===================================================================
   DATA: WiFi Tips
   =================================================================== */

const wifiLocations = [
  {
    type: 'Luxury Hotels (4-5 star)',
    speed: '20-80 Mbps',
    reliability: 'High',
    free: true,
    notes: 'Usually included in room rate. Fiber connections common in newer properties. Request a room near the router for best signal.',
  },
  {
    type: 'Riads (Traditional Guesthouses)',
    speed: '5-25 Mbps',
    reliability: 'Moderate',
    free: true,
    notes: 'Thick medina walls can weaken WiFi signal. Speed varies wildly between riads. Ask about internet speed before booking if you need to work.',
  },
  {
    type: 'Budget Hotels / Hostels',
    speed: '3-15 Mbps',
    reliability: 'Low-Moderate',
    free: true,
    notes: 'Often shared among many guests. Can be slow during evening hours. Consider mobile data as backup for important calls.',
  },
  {
    type: 'Cafes (Tourist Areas)',
    speed: '5-30 Mbps',
    reliability: 'Moderate',
    free: true,
    notes: 'Most tourist-area cafes offer free WiFi. Speed varies. Order regularly to maintain goodwill. Nomad-friendly cafes often have power outlets.',
  },
  {
    type: 'Coworking Spaces',
    speed: '30-100 Mbps',
    reliability: 'High',
    free: false,
    notes: 'Dedicated fiber lines. Most reliable option for remote work. Day passes typically 80-150 MAD. Monthly passes 800-2,500 MAD.',
  },
  {
    type: 'Restaurants',
    speed: '3-15 Mbps',
    reliability: 'Low-Moderate',
    free: true,
    notes: 'Available in many tourist restaurants but generally slow. Better for quick messaging than video calls. Ask staff for the password.',
  },
  {
    type: 'Airports',
    speed: '5-20 Mbps',
    reliability: 'Moderate',
    free: true,
    notes: 'Free WiFi available at major airports (30-60 min sessions). Mohammed V (Casablanca) and Menara (Marrakech) have decent coverage.',
  },
  {
    type: 'Train Stations / Trains',
    speed: '2-10 Mbps',
    reliability: 'Low',
    free: true,
    notes: 'Al Boraq (high-speed) has onboard WiFi but it is spotty. Regular trains have no WiFi. Major stations offer limited free WiFi.',
  },
];

/* ===================================================================
   DATA: Data Saving Tips
   =================================================================== */

const dataSavingTips = [
  {
    title: 'Download offline maps',
    description: 'Save Google Maps regions and Maps.me country data over WiFi. This alone can save 50-100 MB per day of navigation data.',
    icon: 'Map',
  },
  {
    title: 'Compress photos before uploading',
    description: 'Use apps like Photo Compress or adjust camera settings to smaller file sizes. A single high-res photo can be 5-10 MB.',
    icon: 'Download',
  },
  {
    title: 'Disable auto-play videos',
    description: 'Turn off auto-play in Facebook, Instagram, and Twitter. Social media video streaming is the top mobile data consumer.',
    icon: 'Eye',
  },
  {
    title: 'Use WiFi for downloads and updates',
    description: 'Set your phone to only download app updates over WiFi. Queue large downloads for hotel or cafe WiFi connections.',
    icon: 'Wifi',
  },
  {
    title: 'Enable data saver in your browser',
    description: 'Chrome and Firefox have data compression features that reduce page sizes by 30-60%. Enable them in browser settings.',
    icon: 'Settings',
  },
  {
    title: 'Download Spotify and Netflix content offline',
    description: 'Download playlists and shows over WiFi before traveling. Streaming music uses 50-150 MB per hour, video uses 1-3 GB per hour.',
    icon: 'CloudDownload',
  },
  {
    title: 'Use WhatsApp voice calls over WiFi',
    description: 'WhatsApp calls use less data than regular calls and work over WiFi. Video calls use about 5 MB per minute on mobile data.',
    icon: 'PhoneCall',
  },
  {
    title: 'Turn off background app refresh',
    description: 'Disable background data for apps you do not actively use. Social media and email apps can consume significant data in the background.',
    icon: 'BatteryCharging',
  },
];

/* ===================================================================
   COMPONENT: Page
   =================================================================== */

export default function ConnectivityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── Hero Section ─── */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Internet &amp; Connectivity</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Wifi className="w-4 h-4" />
            Connectivity Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Internet &amp; Connectivity
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            SIM cards from $3, nationwide 4G coverage, and growing 5G networks.
            Everything you need to stay connected from Tangier to the Sahara.
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
              <div className="text-sm text-white/70 mt-1">Major Carriers</div>
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
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Staying Connected in Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has invested heavily in telecommunications infrastructure over
                the past decade, and the result is a surprisingly well-connected country
                for travelers. Three major carriers &mdash; Maroc Telecom, Inwi, and
                Orange &mdash; compete vigorously, driving down prices and improving
                coverage. A tourist SIM card with 10 GB of 4G data costs as little as $3-5,
                making Morocco one of the most affordable countries in the world for
                mobile data.
              </p>
              <p>
                In major cities like Casablanca, Rabat, Tangier, and Marrakech, you will
                find fast 4G coverage virtually everywhere and growing 5G networks.
                WiFi is available at most hotels, riads, cafes, and restaurants. Fiber
                internet connections of 50-100 Mbps are standard at coworking spaces
                and modern hotels. Even in smaller tourist towns like Essaouira and
                Chefchaouen, staying connected is straightforward.
              </p>
              <p>
                The main areas where connectivity becomes challenging are remote regions:
                the Sahara desert, the deep Atlas Mountains, and rural villages in the
                south. Even in these areas, Maroc Telecom usually provides at least basic
                2G/3G coverage along major roads. This guide covers everything you need
                to know about getting online and staying connected throughout your
                Morocco trip.
              </p>
            </div>
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
              { href: '#carriers', icon: Signal, label: 'Mobile Carriers Overview' },
              { href: '#sim-cards', icon: CardSim, label: 'SIM Card Purchasing Guide' },
              { href: '#esim', icon: ScanLine, label: 'eSIM Options for Travelers' },
              { href: '#carrier-comparison', icon: FileText, label: 'Carrier Plan Comparison Table' },
              { href: '#wifi', icon: Wifi, label: 'WiFi Availability' },
              { href: '#speeds', icon: Zap, label: 'Internet Speeds by Region' },
              { href: '#nomad', icon: Laptop, label: 'Digital Nomad Connectivity' },
              { href: '#vpn', icon: Lock, label: 'VPN Considerations' },
              { href: '#remote', icon: Mountain, label: 'Remote Area Connectivity' },
              { href: '#apps', icon: Smartphone, label: 'Essential Travel Apps' },
              { href: '#emergency', icon: Phone, label: 'Emergency Numbers' },
              { href: '#data-saving', icon: Download, label: 'Data Saving Tips' },
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

      {/* ─── Mobile Carriers Section ─── */}
      <section id="carriers" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Signal className="w-4 h-4" />
              <span>Mobile Networks</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Morocco&apos;s Three Mobile Carriers
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Morocco has three mobile network operators. All three offer prepaid SIM
              cards for tourists with no contract required.
            </p>
          </div>

          <div className="space-y-8">
            {carriers.map((carrier) => (
              <div key={carrier.name} className="card-moroccan overflow-hidden">
                <div className="p-6 md:p-8">
                  {/* Carrier Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: carrier.color }}>
                        {carrier.tagline}
                      </div>
                      <h3 className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                        {carrier.name}
                      </h3>
                    </div>
                    <div className="mt-3 md:mt-0 flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" /> {carrier.marketShare}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Signal className="w-3.5 h-3.5" /> {carrier.technology}
                      </span>
                    </div>
                  </div>

                  {/* Tourist SIM Highlight */}
                  <div className="p-4 rounded-lg bg-[var(--surface-muted)] mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      <div className="flex items-center gap-2">
                        <CardSim className="w-5 h-5 text-[var(--color-secondary)]" />
                        <span className="font-semibold text-[var(--text-primary)]">{carrier.touristSim}</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm">
                        <span className="px-2 py-0.5 rounded-full bg-[var(--color-secondary)]/10 text-[var(--color-secondary)] font-medium">
                          {carrier.touristSimCost}
                        </span>
                        <span className="text-[var(--text-secondary)]">{carrier.touristSimData}</span>
                      </div>
                    </div>
                  </div>

                  {/* Coverage */}
                  <p className="text-sm text-[var(--text-secondary)] mb-4">
                    <span className="font-medium text-[var(--text-primary)]">Coverage: </span>
                    {carrier.coverage}
                  </p>

                  {/* Strengths and Weaknesses */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-[var(--success)]" /> Strengths
                      </h4>
                      <ul className="space-y-2">
                        {carrier.strengths.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-[var(--warning)]" /> Considerations
                      </h4>
                      <ul className="space-y-2">
                        {carrier.weaknesses.map((w, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <AlertTriangle className="w-3.5 h-3.5 text-[var(--warning)] mt-0.5 flex-shrink-0" />
                            {w}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Data Plans */}
                  <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                    Prepaid Data Plans
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left min-w-[500px]">
                      <thead>
                        <tr className="border-b border-[var(--border-light)]">
                          <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Plan</th>
                          <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Data</th>
                          <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Validity</th>
                          <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Price</th>
                          <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Note</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-light)]">
                        {carrier.plans.map((plan) => (
                          <tr key={plan.name} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                            <td className="py-2.5 text-sm font-medium text-[var(--text-primary)]">{plan.name}</td>
                            <td className="py-2.5 text-sm text-[var(--color-secondary)] font-semibold">{plan.data}</td>
                            <td className="py-2.5 text-sm text-[var(--text-secondary)]">{plan.validity}</td>
                            <td className="py-2.5 text-sm text-[var(--text-primary)] font-medium">{plan.price}</td>
                            <td className="py-2.5 text-xs text-[var(--text-muted)]">{plan.note}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SIM Card Purchasing Guide ─── */}
      <section id="sim-cards" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <CardSim className="w-4 h-4" />
              <span>SIM Cards</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              SIM Card Purchasing Guide
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Buying a local SIM card is the most cost-effective way to stay connected
              in Morocco. Here is everything you need to know.
            </p>
          </div>

          {/* Where to Buy */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[var(--color-secondary)]" />
              Where to Buy
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">Airport Kiosks</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Available at arrivals in Mohammed V (Casablanca), Menara (Marrakech),
                    Ibn Battouta (Tangier), and Fes-Saiss airports. All three carriers
                    have counters. This is the easiest option &mdash; staff will set up
                    your SIM on the spot. Prices are the same as in-city stores.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">Official Carrier Stores</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Maroc Telecom, Inwi, and Orange have stores in every city and most
                    towns. Staff can help with registration and activation. Look for
                    stores in the Ville Nouvelle (new town) areas for the best service.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">Corner Shops (Hanouts)</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Small neighborhood shops throughout Morocco sell SIM cards and
                    top-up credit. Look for carrier logos displayed outside. Prices
                    are the same, but staff may speak less English. A reliable and
                    convenient option once you know what you need.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                  <h4 className="font-semibold text-[var(--text-primary)] mb-1">Supermarkets (Marjane, Carrefour)</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Large supermarkets like Marjane and Carrefour Market sell SIM
                    cards at the electronics or mobile counter. Convenient if you are
                    doing a supply run after arriving. Staff can assist with activation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What You Need */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[var(--color-secondary)]" />
              What You Need
            </h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: 'Passport', desc: 'Original passport required for SIM registration. Moroccan law requires ID verification for all SIM purchases.' },
                { title: 'Unlocked Phone', desc: 'Your phone must be SIM-unlocked to use a Moroccan SIM. Check with your home carrier before traveling.' },
                { title: 'Cash (MAD)', desc: 'Most SIM card purchases require cash in Moroccan dirhams. Airport exchange counters are open for arrivals.' },
                { title: '5-10 Minutes', desc: 'Registration and activation takes about 5-10 minutes. The staff will insert the SIM and verify it works.' },
              ].map((item) => (
                <div key={item.title} className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                  <div className="text-sm font-semibold text-[var(--text-primary)] mb-1">{item.title}</div>
                  <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step */}
          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Settings className="w-5 h-5 text-[var(--color-secondary)]" />
              Step-by-Step Process
            </h3>
            <div className="space-y-4">
              {[
                { step: '1', title: 'Choose your carrier', desc: 'Maroc Telecom for best coverage (especially rural). Inwi for best value. Orange for good all-around balance. See the comparison table below.' },
                { step: '2', title: 'Visit a point of sale', desc: 'Airport kiosk upon arrival is the easiest. Otherwise, find an official carrier store or any shop with the carrier logo.' },
                { step: '3', title: 'Present your passport', desc: 'Hand over your passport for identity registration. The staff will photocopy or scan it. This is legally required.' },
                { step: '4', title: 'Choose a plan', desc: 'Select a tourist SIM package or a standard prepaid SIM with a recharge amount. Tourist SIMs come pre-loaded with data.' },
                { step: '5', title: 'Pay and activate', desc: 'Pay in cash (MAD). The staff will insert the SIM, activate it, and verify you have signal. You will receive an SMS confirming activation.' },
                { step: '6', title: 'Top up as needed', desc: 'Top up at any carrier store, corner shop, or via the carrier app. Scratch cards (recharge cards) are available everywhere in denominations of 10, 20, 50, and 100 MAD.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-secondary)] flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">{item.title}</div>
                    <p className="text-sm text-[var(--text-secondary)] mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Tips */}
          <div className="card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-accent)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent)]" />
              Pro Tips for SIM Card Buyers
            </h3>
            <ul className="space-y-2">
              {[
                'Buy at the airport to save time and start using data immediately in the taxi or transfer.',
                'Keep your SIM registration receipt. You may need it if you lose the SIM or need to reactivate.',
                'Download the carrier app (My IAM, My Inwi, or My Orange) to monitor data usage and top up digitally.',
                'If you have a dual-SIM phone, keep your home SIM in one slot for receiving SMS verification codes.',
                'Data top-ups via USSD codes are instant: dial *120# (Maroc Telecom), *120# (Inwi), or #120# (Orange).',
                'SIM cards are valid for 2-3 months without top-up before they expire. Add credit to keep them active for future trips.',
                'For stays over 2 weeks, the 100 MAD ($10) recharge offers the best value with 20-25 GB of data.',
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <BadgeCheck className="w-4 h-4 text-[var(--color-accent)] mt-0.5 flex-shrink-0" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>
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
              If your phone supports eSIM (iPhone XS and later, most recent Samsung
              Galaxy, Google Pixel 3+), you can set up a Morocco data plan before
              you even board your flight. No physical SIM card needed.
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
                  <ScanLine className="w-4 h-4 text-[var(--color-secondary)]" />
                  Choose eSIM If...
                </h4>
                <ul className="space-y-2">
                  {[
                    'You want instant activation before arriving',
                    'You have a dual-SIM phone and want to keep your home number active',
                    'You prefer a no-hassle, no-shop-visit experience',
                    'You are visiting for less than 2 weeks',
                    'You primarily need data (maps, messaging, browsing)',
                    'Your phone supports eSIM technology',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-lg bg-[var(--surface-muted)]">
                <h4 className="font-semibold text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <CardSim className="w-4 h-4 text-[var(--color-secondary)]" />
                  Choose Physical SIM If...
                </h4>
                <ul className="space-y-2">
                  {[
                    'You want the cheapest data rates (local SIMs are 50-70% cheaper per GB)',
                    'You need a local Moroccan phone number for calls and WhatsApp',
                    'You are staying more than 2 weeks',
                    'You want to make local phone calls to restaurants, hotels, guides',
                    'You plan to visit remote areas and want the best coverage options',
                    'Your phone does not support eSIM',
                  ].map((item, i) => (
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
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Plans: </span>
                    <span className="text-[var(--text-secondary)]">{provider.dataOptions}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Validity: </span>
                    <span className="text-[var(--text-secondary)]">{provider.validity}</span>
                  </div>
                  <div>
                    <span className="font-medium text-[var(--text-primary)]">Network: </span>
                    <span className="text-[var(--text-secondary)]">{provider.network}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{provider.pros}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 text-[var(--warning)] mt-0.5 flex-shrink-0" />
                    <span className="text-[var(--text-secondary)]">{provider.cons}</span>
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

      {/* ─── Carrier Comparison Table ─── */}
      <section id="carrier-comparison" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <FileText className="w-4 h-4" />
              <span>Side by Side</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Carrier Comparison Table
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A head-to-head comparison of all three Moroccan carriers to help you
              choose the right one for your trip.
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
                  {carrierComparison.map((row) => (
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

          {/* Recommendation Box */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-accent)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Best Overall Coverage</h4>
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-accent)] mb-2">Maroc Telecom</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose Maroc Telecom if you are traveling to rural areas, the Sahara,
                or the Atlas Mountains. The best network for road trips and off-the-beaten-path destinations.
              </p>
            </div>
            <div className="card-moroccan p-6 border-t-4 border-[var(--color-secondary)]">
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Best Value for Data</h4>
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold text-[var(--color-secondary)] mb-2">Inwi</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose Inwi if you are staying in major cities and want the most
                data for your money. Their social media bundles are unbeatable, and
                the app makes topping up easy.
              </p>
            </div>
            <div className="card-moroccan p-6 border-t-4" style={{ borderColor: '#F16E00' }}>
              <h4 className="font-semibold text-[var(--text-primary)] mb-2">Best All-Around</h4>
              <p className="text-2xl font-[family-name:var(--font-display)] font-bold mb-2" style={{ color: '#F16E00' }}>Orange</p>
              <p className="text-sm text-[var(--text-secondary)]">
                Choose Orange for a solid balance of coverage, price, and customer
                service. Best option if you might travel onward and want international
                roaming compatibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── WiFi Availability ─── */}
      <section id="wifi" className="py-16 md:py-20 scroll-mt-24">
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

          <div className="grid md:grid-cols-2 gap-6">
            {wifiLocations.map((loc) => (
              <div key={loc.type} className="card-moroccan p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-[var(--text-primary)]">{loc.type}</h3>
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
                    {loc.reliability} reliability
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">{loc.notes}</p>
              </div>
            ))}
          </div>

          {/* WiFi Tips */}
          <div className="mt-8 card-moroccan p-6 md:p-8 border-l-4 border-[var(--color-secondary)]">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-[var(--color-secondary)]" />
              WiFi Tips for Morocco
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Always ask for the WiFi password at cafes and restaurants. It is rarely posted publicly but almost always available upon request.',
                'In riads with thick medina walls, ask for a room near the router or common area for the best signal strength.',
                'Many hotels and riads have better WiFi in common areas (reception, rooftop, courtyard) than in individual rooms.',
                'If WiFi is critical for your work, confirm internet speed before booking accommodation. Ask hosts directly.',
                'McDonald\'s and Starbucks locations in Morocco consistently offer free, fast WiFi and are good backup options.',
                'Public WiFi networks in Morocco are generally unencrypted. Always use a VPN when connecting to public hotspots.',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Internet Speeds by Region ─── */}
      <section id="speeds" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Zap className="w-4 h-4" />
              <span>Speed Data</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Internet Speed Expectations by Region
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Internet speeds in Morocco vary dramatically between cities and rural areas.
              Here is what to expect in each region.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[var(--surface-muted)]">
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Region</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
                      <span className="flex items-center gap-1"><Download className="w-3.5 h-3.5" /> Download</span>
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
                      <span className="flex items-center gap-1"><Upload className="w-3.5 h-3.5" /> Upload</span>
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">
                      <span className="flex items-center gap-1"><Smartphone className="w-3.5 h-3.5" /> Mobile 4G</span>
                    </th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Fiber</th>
                    <th className="px-4 py-3 text-sm font-semibold text-[var(--text-primary)]">Rating</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {regionSpeeds.map((row) => (
                    <tr key={row.region} className="hover:bg-[var(--surface-muted)]/50 transition-colors">
                      <td className="px-4 py-3 text-sm font-bold text-[var(--text-primary)]">{row.region}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.download}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.upload}</td>
                      <td className="px-4 py-3 text-sm text-[var(--text-secondary)]">{row.mobile4g}</td>
                      <td className="px-4 py-3 text-sm">
                        {row.fiberAvailable ? (
                          <CheckCircle className="w-4 h-4 text-[var(--success)]" />
                        ) : (
                          <XCircle className="w-4 h-4 text-[var(--text-muted)]" />
                        )}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                          row.rating === 'Excellent' ? 'bg-[var(--success)]/10 text-[var(--success)]' :
                          row.rating === 'Very Good' ? 'bg-[var(--success)]/10 text-[var(--success)]' :
                          row.rating === 'Good' ? 'bg-[var(--color-accent)]/10 text-[var(--color-accent)]' :
                          row.rating === 'Moderate' ? 'bg-[var(--warning)]/10 text-[var(--warning)]' :
                          row.rating === 'Limited' ? 'bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]' :
                          'bg-[var(--error)]/10 text-[var(--error)]'
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

          <div className="mt-6 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border-light)]">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[var(--info)] mt-0.5 flex-shrink-0" />
              <p className="text-sm text-[var(--text-secondary)]">
                <span className="font-medium text-[var(--text-primary)]">Note: </span>
                Speeds are based on typical user experience and vary by time of day,
                network congestion, and specific location. Coworking spaces and fiber-connected
                hotels generally deliver speeds at the higher end of these ranges. Speeds
                measured using Speedtest.net and Ookla data for Morocco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Digital Nomad Connectivity ─── */}
      <section id="nomad" className="py-16 md:py-20 scroll-mt-24">
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
              Morocco is becoming a top digital nomad destination. Here are the best
              cities for reliable, fast internet for remote work.
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
                    {city.avgSpeed}
                  </span>
                  <span className="flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                    {city.coworkingSpaces} coworking spaces
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-3">{city.highlights}</p>
                <div className="pt-3 border-t border-[var(--border-light)]">
                  <span className="text-xs font-medium text-[var(--color-secondary)]">
                    Coworking from {city.monthlyCost}/month
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Nomad Internet Setup Advice */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Recommended Internet Setup for Remote Workers
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-lg bg-[var(--surface-muted)]">
                <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-2">Primary</div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Coworking Space WiFi</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Join a coworking space with dedicated fiber internet (30-100 Mbps).
                  This should be your primary work connection. Reliability is far
                  superior to cafe or accommodation WiFi for video calls and large file transfers.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-[var(--surface-muted)]">
                <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-2">Backup</div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Mobile Hotspot</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Get a Maroc Telecom SIM with a 50 GB plan (200 MAD/month). Use your
                  phone as a mobile hotspot when WiFi fails. This is essential for
                  important meetings &mdash; always have a backup connection available.
                </p>
              </div>
              <div className="p-5 rounded-lg bg-[var(--surface-muted)]">
                <div className="text-xs font-medium text-[var(--color-secondary)] uppercase tracking-wider mb-2">Optional</div>
                <h4 className="font-semibold text-[var(--text-primary)] mb-2">Portable WiFi Router</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  For heavy users, consider a portable 4G router (Huawei or TP-Link)
                  with a local SIM. Available in Morocco for 300-500 MAD. Better
                  antenna than a phone for hotspot use, especially in areas with weaker signal.
                </p>
              </div>
            </div>
          </div>

          {/* Link to Digital Nomad page */}
          <div className="mt-6 text-center">
            <Link
              href="/digital-nomad"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-secondary)] text-white font-medium hover:bg-[var(--color-secondary-dark)] transition-colors"
            >
              Full Digital Nomad Guide
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── VPN Considerations ─── */}
      <section id="vpn" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
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
              Understanding VPN use, content access, and online privacy while
              traveling in Morocco.
            </p>
          </div>

          <div className="space-y-6">
            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[var(--color-secondary)]" />
                VPN Status in Morocco
              </h3>
              <div className="space-y-4 text-[var(--text-secondary)]">
                <p>
                  VPN use is <span className="font-medium text-[var(--text-primary)]">legal in Morocco</span> and
                  widely used by businesses, remote workers, and travelers. There are no laws
                  prohibiting VPN use for personal privacy or accessing geo-restricted content.
                </p>
                <p>
                  However, Morocco does block VoIP calling services at the carrier level. This
                  means voice and video calls on apps like WhatsApp, FaceTime, Skype, and Zoom
                  may be blocked or degraded on mobile data networks. A VPN typically bypasses
                  these restrictions, allowing you to make VoIP calls normally.
                </p>
                <p>
                  The VoIP blocking is intermittent and varies by carrier. It tends to be more
                  strictly enforced on mobile data than on WiFi. Most WiFi connections at hotels,
                  riads, and cafes allow VoIP calls without issues. The blocking is primarily
                  a carrier-level commercial decision rather than a government policy.
                </p>
              </div>
            </div>

            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[var(--success)]" />
                When to Use a VPN
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Public WiFi security', desc: 'Always use a VPN when connecting to cafe, hotel, or airport WiFi to protect your data from potential eavesdropping.' },
                  { title: 'VoIP calls on mobile data', desc: 'If WhatsApp or FaceTime calls are not connecting on mobile data, enable your VPN to bypass carrier-level VoIP blocking.' },
                  { title: 'Accessing home streaming services', desc: 'Some streaming platforms restrict content by region. A VPN lets you access your home library on Netflix, Hulu, BBC iPlayer, etc.' },
                  { title: 'Remote work security', desc: 'If your employer requires VPN access to company systems, ensure your VPN works in Morocco before departure.' },
                  { title: 'Online banking', desc: 'Some banks flag foreign login attempts. Using a VPN with a home-country server can prevent account lockouts.' },
                  { title: 'Privacy on shared networks', desc: 'In hostels and shared accommodations, a VPN adds an important layer of privacy to your internet activity.' },
                ].map((item) => (
                  <div key={item.title} className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <div className="font-medium text-[var(--text-primary)] text-sm mb-1">{item.title}</div>
                    <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6 md:p-8">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-[var(--color-accent)]" />
                Recommended VPN Services for Morocco
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: 'NordVPN', price: '~$3.50/month', note: 'Best overall for Morocco. Fast speeds, reliable connections, many server locations. Works well for streaming and VoIP calls.' },
                  { name: 'ExpressVPN', price: '~$6.50/month', note: 'Fastest speeds but more expensive. Excellent for video calls. Best option if speed is your priority.' },
                  { name: 'Surfshark', price: '~$2.50/month', note: 'Best budget option with unlimited devices. Good speeds and reliable Morocco performance. Great value for families.' },
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
                    Download and set up your VPN app before arriving in Morocco. Configure
                    it to auto-connect on untrusted networks. Test that it works with
                    your most-used services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Remote Area Connectivity ─── */}
      <section id="remote" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Mountain className="w-4 h-4" />
              <span>Off the Grid</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Staying Connected in Remote Areas
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Traveling to the Sahara, Atlas Mountains, or rural villages? Here is what
              to expect and how to prepare for limited connectivity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sahara Desert */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-desert.webp"
                  alt="Sahara desert dunes in Morocco"
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
                  <span>Coverage: Limited to towns and major roads</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Merzouga and Erg Chebbi: </span>
                    Maroc Telecom provides 3G/4G coverage in Merzouga town. Signal drops
                    significantly once you enter the dunes for a desert camp. Most luxury
                    camps have satellite WiFi (very slow, 1-3 Mbps) or no internet at all.
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Zagora and Erg Chigaga: </span>
                    Basic coverage in Zagora town. Erg Chigaga is more remote than Merzouga,
                    and connectivity at desert camps is essentially nonexistent. Plan to be
                    offline for 1-2 nights.
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Driving Routes (N10, N13): </span>
                    Maroc Telecom usually provides intermittent 3G along major desert highways.
                    Coverage drops between towns. Inwi and Orange have gaps on these routes.
                  </p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-[var(--color-accent)]/5">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Tip: </span>
                    Embrace the digital detox. Download offline maps, save important
                    messages, and let contacts know you will be unreachable for 1-2 days.
                    Most desert camp operators have emergency satellite communication.
                  </p>
                </div>
              </div>
            </div>

            {/* Atlas Mountains */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-marrakech.webp"
                  alt="Atlas Mountains in Morocco"
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
                    <span className="font-medium text-[var(--text-primary)]">Imlil and Toubkal area: </span>
                    Imlil village has decent Maroc Telecom 3G/4G coverage. Signal weakens
                    on the ascent to Toubkal. The Toubkal refuge has no cellular coverage.
                    Some guesthouses in Imlil have WiFi (slow, 2-8 Mbps).
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Dades and Todra Gorges: </span>
                    Coverage available in the towns at the gorge entrances. Signal becomes
                    spotty inside the gorges due to canyon walls. Larger hotels in the
                    area have WiFi.
                  </p>
                  <p>
                    <span className="font-medium text-[var(--text-primary)]">Ait Bougmez Valley: </span>
                    Known as the &ldquo;Happy Valley,&rdquo; this remote area has limited coverage.
                    Maroc Telecom has the best signal in main villages. Many guesthouses
                    have basic WiFi via satellite or point-to-point radio links.
                  </p>
                </div>
                <div className="mt-4 p-3 rounded-lg bg-[var(--color-accent)]/5">
                  <p className="text-xs text-[var(--text-secondary)]">
                    <span className="font-medium text-[var(--text-primary)]">Tip: </span>
                    For multi-day treks, download offline hiking maps (Maps.me or AllTrails)
                    and save GPS waypoints before departure. Carry a portable battery pack.
                    Consider letting someone know your itinerary for safety.
                  </p>
                </div>
              </div>
            </div>

            {/* Rural South */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-marrakech.webp"
                  alt="Rural village in southern Morocco with kasbahs"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Rural South &amp; Kasbahs
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-4">
                  <Signal className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                  <span>Coverage: Towns only, large gaps between</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    Ouarzazate, Tinghir, and Errachidia have reliable 4G from all three
                    carriers. Between these towns, coverage is intermittent. Small oasis
                    villages along the Draa and Dades valleys have basic 2G/3G from Maroc
                    Telecom only. The road from Marrakech to Ouarzazate via the Tizi n&apos;Tichka
                    pass has stretches without signal.
                  </p>
                </div>
              </div>
            </div>

            {/* Coastal Areas */}
            <div className="card-moroccan overflow-hidden">
              <div className="relative h-48">
                <img
                  src="/images/hero-coastal.webp"
                  alt="Moroccan coastal town"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-white">
                    Coastal &amp; Beach Areas
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)] mb-4">
                  <Signal className="w-3.5 h-3.5 text-[var(--color-secondary)]" />
                  <span>Coverage: Generally good along the coast</span>
                </div>
                <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                  <p>
                    The Atlantic coast from Tangier to Agadir has strong 4G coverage in all
                    towns. Beach areas between towns may have weaker signal. Essaouira,
                    Taghazout, Sidi Ifni, and Legzira all have reliable coverage. Remote
                    surf spots may have limited signal &mdash; check your phone before heading
                    to isolated beaches.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Preparation Checklist */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[var(--success)]" />
              Remote Area Preparation Checklist
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Download offline maps for your entire route (Google Maps + Maps.me)',
                'Save important phone numbers offline (hotel, guide, embassy, emergency)',
                'Download translation packs for offline use (French, Arabic)',
                'Charge all devices fully before departure and carry a 20,000+ mAh power bank',
                'Inform family/friends of your itinerary and expected return date',
                'Save copies of passport, travel insurance, and booking confirmations offline',
                'Download entertainment (music, podcasts, audiobooks) for offline use',
                'Use Maroc Telecom for the best rural coverage in remote areas',
                'Set auto-reply messages for email and messaging apps during offline periods',
                'Consider a Garmin inReach or similar satellite communicator for serious trekking',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Essential Apps ─── */}
      <section id="apps" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Smartphone className="w-4 h-4" />
              <span>Travel Apps</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Essential Apps for Morocco Travel
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Download these apps before your trip for communication, navigation,
              transportation, and money management.
            </p>
          </div>

          <div className="space-y-8">
            {essentialApps.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 font-[family-name:var(--font-heading)]">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.apps.map((app) => (
                    <div key={app.name} className="card-moroccan p-5">
                      <div className="flex items-center gap-3 mb-2">
                        {app.icon === 'MessageCircle' && <MessageCircle className="w-5 h-5 text-[var(--color-secondary)]" />}
                        {app.icon === 'Map' && <Map className="w-5 h-5 text-[var(--color-secondary)]" />}
                        {app.icon === 'Navigation' && <Navigation className="w-5 h-5 text-[var(--color-secondary)]" />}
                        {app.icon === 'Globe' && <Globe className="w-5 h-5 text-[var(--color-secondary)]" />}
                        {app.icon === 'CreditCard' && <CreditCard className="w-5 h-5 text-[var(--color-secondary)]" />}
                        {app.icon === 'DollarSign' && <DollarSign className="w-5 h-5 text-[var(--color-secondary)]" />}
                        {app.icon === 'Shield' && <Shield className="w-5 h-5 text-[var(--color-secondary)]" />}
                        <h4 className="font-semibold text-[var(--text-primary)]">{app.name}</h4>
                      </div>
                      <p className="text-sm text-[var(--text-secondary)]">{app.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Emergency Numbers ─── */}
      <section id="emergency" className="py-16 md:py-20 scroll-mt-24">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Phone className="w-4 h-4" />
              <span>Emergency Contacts</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Emergency Numbers &amp; Communication
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Save these numbers before your trip. They work from any phone, including
              phones without a SIM card.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { number: '19', label: 'Police (Urban)', desc: 'For cities and towns. French and Arabic spoken.' },
              { number: '177', label: 'Gendarmerie (Rural)', desc: 'For rural areas and highways. Call this outside cities.' },
              { number: '15', label: 'Fire / Ambulance', desc: 'Fire department also handles medical emergencies.' },
              { number: '150', label: 'SAMU (Medical)', desc: 'Emergency medical dispatch. Limited English, try French.' },
              { number: '112', label: 'General Emergency', desc: 'European-style emergency number. Works from any phone.' },
              { number: '+212 5 37 68 97 00', label: 'Tourist Police', desc: 'Brigade Touristique. English-speaking officers available.' },
            ].map((item) => (
              <div key={item.number} className="card-moroccan p-5 text-center">
                <div className="text-2xl font-bold text-[var(--color-secondary)] font-[family-name:var(--font-display)] mb-1">
                  {item.number}
                </div>
                <div className="font-semibold text-[var(--text-primary)] text-sm mb-1">{item.label}</div>
                <p className="text-xs text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4 flex items-center gap-2">
              <PhoneCall className="w-5 h-5 text-[var(--color-secondary)]" />
              Communication Tips for Emergencies
            </h3>
            <div className="space-y-3">
              {[
                'Emergency calls (19, 177, 15, 112) work even without a SIM card or credit on your phone.',
                'Speak slowly in French if possible. English speakers are available at the Tourist Police but not always at local stations.',
                'WhatsApp is the most reliable way to reach your hotel, riad, or tour operator in non-emergency situations.',
                'Save your hotel/riad address in Arabic script on your phone to show taxi drivers or ask locals for directions.',
                'Your country\'s embassy or consulate should be saved as an emergency contact. Most embassies are in Rabat.',
                'If you lose your phone, internet cafes (cyber cafes) still exist in most Moroccan towns and cost 5-10 MAD per hour.',
                'Hotel receptions can always make emergency calls on your behalf if your phone is not working.',
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                  <Info className="w-3.5 h-3.5 text-[var(--info)] mt-0.5 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Data Saving Tips ─── */}
      <section id="data-saving" className="py-16 md:py-20 bg-[var(--surface-muted)] scroll-mt-24">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-secondary)] mb-4">
              <Download className="w-4 h-4" />
              <span>Save Data</span>
            </div>
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Tips for Reducing Data Usage
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Even with affordable data plans, these tips will help you stretch your
              mobile data further and avoid unexpected overages.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dataSavingTips.map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="mb-3">
                  {tip.icon === 'Map' && <Map className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Download' && <Download className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Eye' && <Eye className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Wifi' && <Wifi className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'Settings' && <Settings className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'CloudDownload' && <CloudDownload className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'PhoneCall' && <PhoneCall className="w-6 h-6 text-[var(--color-secondary)]" />}
                  {tip.icon === 'BatteryCharging' && <BatteryCharging className="w-6 h-6 text-[var(--color-secondary)]" />}
                </div>
                <h3 className="font-semibold text-[var(--text-primary)] text-sm mb-2">{tip.title}</h3>
                <p className="text-xs text-[var(--text-muted)] leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>

          {/* Data Usage Reference */}
          <div className="mt-10 card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-4">
              How Much Data Do You Actually Need?
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[500px]">
                <thead>
                  <tr className="border-b border-[var(--border-light)]">
                    <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Activity</th>
                    <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Data per Hour</th>
                    <th className="pb-2 text-xs font-semibold text-[var(--text-muted)] uppercase tracking-wider">Daily Estimate</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[var(--border-light)]">
                  {[
                    { activity: 'WhatsApp messaging + photos', perHour: '10-30 MB', daily: '50-150 MB' },
                    { activity: 'Google Maps navigation', perHour: '5-10 MB', daily: '20-50 MB' },
                    { activity: 'Social media browsing', perHour: '100-300 MB', daily: '200-500 MB' },
                    { activity: 'Web browsing', perHour: '30-60 MB', daily: '100-200 MB' },
                    { activity: 'Email', perHour: '5-20 MB', daily: '20-50 MB' },
                    { activity: 'Video call (WhatsApp)', perHour: '300 MB', daily: '300-600 MB' },
                    { activity: 'Streaming music (Spotify)', perHour: '50-150 MB', daily: '100-300 MB' },
                    { activity: 'Streaming video (YouTube/Netflix)', perHour: '1-3 GB', daily: '1-3 GB' },
                  ].map((row) => (
                    <tr key={row.activity}>
                      <td className="py-2.5 text-sm text-[var(--text-primary)]">{row.activity}</td>
                      <td className="py-2.5 text-sm text-[var(--text-secondary)]">{row.perHour}</td>
                      <td className="py-2.5 text-sm text-[var(--color-secondary)] font-medium">{row.daily}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <div className="text-lg font-bold text-[var(--color-secondary)]">5-7 GB</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Light user (1-2 weeks): messaging, maps, basic browsing
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <div className="text-lg font-bold text-[var(--color-secondary)]">10-20 GB</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Moderate user (2-4 weeks): social media, occasional video calls
                </div>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)] text-center">
                <div className="text-lg font-bold text-[var(--color-secondary)]">30-50 GB</div>
                <div className="text-xs text-[var(--text-muted)] mt-1">
                  Heavy user / nomad (month): video calls, streaming, remote work
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Quick Reference Card ─── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
              Quick Reference: Morocco Connectivity
            </h2>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-3 text-lg">Before You Go</h3>
                <ul className="space-y-2">
                  {[
                    'Ensure your phone is SIM-unlocked',
                    'Check if your phone supports eSIM',
                    'Download a VPN app and test it',
                    'Download offline maps for Morocco',
                    'Install WhatsApp if you do not have it',
                    'Download Google Translate language packs',
                    'Save emergency numbers in your contacts',
                    'Notify your bank of Morocco travel',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--success)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-[var(--text-primary)] mb-3 text-lg">Upon Arrival</h3>
                <ul className="space-y-2">
                  {[
                    'Buy a SIM card at the airport kiosk',
                    'Or activate your eSIM from the plane',
                    'Test mobile data immediately',
                    'Download carrier app for data monitoring',
                    'Connect to hotel/riad WiFi',
                    'Test VPN connection if needed',
                    'Share your local number with key contacts',
                    'Top up credit at any corner shop as needed',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--color-secondary)] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Related Guides CTA ─── */}
      <section className="py-16 md:py-20 gradient-moroccan">
        <div className="container-morocco">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
              Continue Planning Your Morocco Trip
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              Explore more practical guides to help you prepare for an unforgettable
              experience in Morocco.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Digital Nomad Guide', desc: 'Coworking spaces, cost of living, and remote work cities.', href: '/digital-nomad', icon: Laptop },
              { title: 'Health & Safety', desc: 'Medical facilities, vaccinations, and travel insurance advice.', href: '/health', icon: Shield },
              { title: 'Transportation', desc: 'Trains, buses, taxis, and getting around Morocco.', href: '/transportation', icon: Navigation },
              { title: 'Travel Planning', desc: 'Budgeting, itineraries, and essential packing tips.', href: '/guides', icon: Map },
            ].map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-colors group"
              >
                <card.icon className="w-6 h-6 text-white/80 mb-3" />
                <h3 className="text-white font-semibold mb-1">{card.title}</h3>
                <p className="text-white/60 text-sm mb-3">{card.desc}</p>
                <span className="text-sm text-white/80 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Smartphone,
  Signal,
  Wifi,
  MapPin,
  Star,
  Clock,
  Info,
  ArrowRight,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Globe,
  Zap,
  Phone,
  MessageSquare,
  RefreshCw,
  Building,
  CreditCard,
  Map,
  Users,
  Plane,
  Package,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco SIM Card Guide 2026 | Maroc Telecom, Inwi & Orange Tourist Plans',
  description:
    'Complete guide to buying a SIM card in Morocco. Compare Maroc Telecom, Inwi, and Orange tourist plans with data, prices, and coverage. eSIM options, WiFi tips, airport SIM cards, top-up methods, and 4G/5G coverage maps for travelers.',
  keywords: [
    'morocco sim card',
    'maroc telecom tourist sim',
    'inwi tourist sim',
    'orange morocco tourist sim',
    'morocco data sim',
    'best network morocco',
    'morocco sim',
    'wifi in morocco',
    'data sim morocco',
    'morocco esim',
    'morocco internet',
    'morocco 4G coverage',
    'morocco 5G coverage',
    'buy sim card morocco airport',
    'morocco prepaid sim',
    'morocco mobile data',
    'tethering morocco sim',
    'top up sim morocco',
    'morocco roaming',
    'morocco tourist phone plan',
  ],
  openGraph: {
    title: 'Morocco SIM Card Guide 2026 | Maroc Telecom, Inwi & Orange Tourist Plans',
    description:
      'Compare all three Moroccan carriers. From 30 MAD tourist SIMs to unlimited data plans. Airport purchases, eSIM options, coverage maps, and top-up methods explained.',
    url: `${BASE_URL}/morocco-sim-card-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-cityscape.webp`,
        width: 1200,
        height: 630,
        alt: 'Tourist using smartphone in a Moroccan medina with colorful souks and traditional architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco SIM Card Guide 2026 | Best Tourist Plans Compared',
    description:
      'Maroc Telecom vs Inwi vs Orange: which SIM card is best for tourists in Morocco? Data plans from 30 MAD, eSIM options, and complete coverage guide.',
    images: [`${BASE_URL}/images/hero-morocco-cityscape.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-sim-card-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-sim-card-guide`,
  name: 'Morocco SIM Card Guide 2026 | Maroc Telecom, Inwi & Orange Tourist Plans',
  description:
    'Complete guide to buying a SIM card in Morocco. Compare Maroc Telecom, Inwi, and Orange tourist plans with data, prices, coverage, eSIM options, and top-up methods.',
  url: `${BASE_URL}/morocco-sim-card-guide`,
  image: `${BASE_URL}/images/hero-morocco-cityscape.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-sim-card-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco SIM Card Guide', item: `${BASE_URL}/morocco-sim-card-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I buy a SIM card at Morocco airports?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. All three carriers (Maroc Telecom, Inwi, and Orange) have kiosks at Mohammed V Airport in Casablanca, Marrakech Menara Airport, and other major airports. Prices are the same as in-city shops. Bring your passport for registration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which Morocco carrier has the best coverage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maroc Telecom has the widest coverage overall, especially in rural and remote areas like the Sahara Desert, Atlas Mountains, and small villages. Inwi and Orange have excellent coverage in cities and along major highways but may have gaps in very remote areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use an eSIM in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. International eSIM providers like Airalo, Holafly, and Nomad offer Morocco data plans that you can activate before arriving. Orange Morocco also offers eSIM activation at select stores. eSIMs are ideal if your phone supports them and you want to keep your home number active.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much data do I need for a week in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For typical tourist use (maps, social media, messaging, occasional video calls), 5-10 GB per week is sufficient. If you plan to stream video or use your phone as a hotspot, opt for 20 GB or more. All three carriers offer plans with 10-40 GB that last 7-30 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I tether or use my Morocco SIM as a hotspot?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all three Moroccan carriers allow tethering and hotspot use on prepaid tourist SIMs. There are no additional charges for tethering. This makes it easy to share your connection with travel companions or use your laptop on the go.',
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
    tagline: 'Best overall coverage & rural areas',
    color: 'text-[var(--color-accent)]',
    bgColor: 'bg-[var(--color-accent)]/10',
    coverage4g: '97% urban, 85% rural',
    coverage5g: 'Casablanca, Rabat, Marrakech, Tangier',
    strengths: ['Widest rural coverage', 'Best in Sahara & Atlas', 'Most reliable network', 'Largest number of stores'],
    weaknesses: ['Slightly higher prices', 'Slower customer service', 'Tourist plans less flexible'],
    touristPlans: [
      { name: 'Jawal Tourist 30', data: '5 GB', calls: '30 min national', validity: '7 days', price: 'From 30 MAD' },
      { name: 'Jawal Tourist 50', data: '10 GB', calls: '60 min national', validity: '15 days', price: 'From 50 MAD' },
      { name: 'Jawal Tourist 100', data: '20 GB', calls: '120 min national + 30 min international', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Jawal Tourist 200', data: '40 GB', calls: 'Unlimited national + 60 min international', validity: '30 days', price: 'From 200 MAD' },
    ],
  },
  {
    name: 'Inwi',
    icon: Zap,
    tagline: 'Best value & data-heavy plans',
    color: 'text-[var(--color-gold)]',
    bgColor: 'bg-[var(--color-gold)]/10',
    coverage4g: '95% urban, 75% rural',
    coverage5g: 'Casablanca, Rabat (limited)',
    strengths: ['Best data-per-dirham value', 'Strong urban speeds', 'Good English support', 'Flexible top-up options'],
    weaknesses: ['Weaker rural coverage', 'Limited 5G rollout', 'Fewer physical stores'],
    touristPlans: [
      { name: 'Inwi Tourist Pass 30', data: '6 GB', calls: '30 min national', validity: '7 days', price: 'From 30 MAD' },
      { name: 'Inwi Tourist Pass 50', data: '12 GB', calls: '60 min national', validity: '15 days', price: 'From 50 MAD' },
      { name: 'Inwi Tourist Pass 100', data: '25 GB', calls: '120 min national + 30 min international', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Inwi Tourist Pass 200', data: '50 GB', calls: 'Unlimited national + 60 min international', validity: '30 days', price: 'From 200 MAD' },
    ],
  },
  {
    name: 'Orange Morocco',
    icon: Globe,
    tagline: 'Best for international calls & eSIM',
    color: 'text-orange-600',
    bgColor: 'bg-orange-600/10',
    coverage4g: '95% urban, 78% rural',
    coverage5g: 'Casablanca, Rabat, Tangier',
    strengths: ['Cheapest international calls', 'eSIM support in stores', 'Good data speeds in cities', 'Orange global roaming deals'],
    weaknesses: ['Mid-range rural coverage', 'Fewer stores than Maroc Telecom', 'Speed throttling on cheap plans'],
    touristPlans: [
      { name: 'Orange Welcome 30', data: '5 GB', calls: '30 min national + 15 min international', validity: '7 days', price: 'From 30 MAD' },
      { name: 'Orange Welcome 50', data: '10 GB', calls: '60 min national + 30 min international', validity: '15 days', price: 'From 50 MAD' },
      { name: 'Orange Welcome 100', data: '20 GB', calls: '120 min national + 60 min international', validity: '30 days', price: 'From 100 MAD' },
      { name: 'Orange Welcome 200', data: '40 GB', calls: 'Unlimited national + 120 min international', validity: '30 days', price: 'From 200 MAD' },
    ],
  },
] as const;

/* ═══════════════════════════════════════════════════════════════
   DATA: WHERE TO BUY
   ═══════════════════════════════════════════════════════════════ */

const whereToBuy = [
  {
    location: 'Airport Kiosks',
    icon: Plane,
    description:
      'All three carriers operate kiosks at Mohammed V (Casablanca), Menara (Marrakech), Ibn Battouta (Tangier), and Al Massira (Agadir) airports. Staff speak English and French, and can activate your SIM on the spot. Available in arrivals halls, usually past customs.',
    tip: 'Airport prices are identical to city shops. No markup. Buy here to have data immediately upon arrival.',
    hours: 'Open for all arriving flights, typically 6 AM - midnight',
  },
  {
    location: 'Official Brand Stores',
    icon: Building,
    description:
      'Every Moroccan city has official Maroc Telecom, Inwi, and Orange shops. These are the most reliable places to buy, with trained staff who can help you choose the right plan and activate your SIM. Found in shopping centers, main streets, and commercial areas.',
    tip: 'Bring your passport. SIM registration is mandatory by Moroccan law. The process takes 5-10 minutes.',
    hours: 'Monday-Saturday 9 AM - 7 PM, some open Sunday in tourist areas',
  },
  {
    location: 'Small Telecoms & Corner Shops',
    icon: Package,
    description:
      'Small independent phone shops (téléboutiques) are everywhere in Morocco, including inside medinas. They sell SIM cards for all three carriers and can handle top-ups. Prices are the same as official stores, but staff may have limited English.',
    tip: 'Look for shops displaying all three carrier logos. They can compare plans for you on the spot.',
    hours: 'Generally 9 AM - 9 PM daily, some open later',
  },
  {
    location: 'Medina Shops',
    icon: MapPin,
    description:
      'In tourist medinas (Marrakech, Fes, Essaouira), you will find phone shops on main streets within the old city. Convenient if you are staying in a riad and do not want to travel to the new city. Same prices, same SIM cards.',
    tip: 'Ask your riad host for the nearest phone shop. They will know exactly where to send you.',
    hours: 'Varies, most open 10 AM - 8 PM',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ACTIVATION STEPS
   ═══════════════════════════════════════════════════════════════ */

const activationSteps = [
  {
    step: 1,
    title: 'Bring Your Passport',
    icon: Users,
    description:
      'Moroccan law requires passport registration for all SIM card purchases. Bring your original passport (not a copy). The shopkeeper will scan or photograph it. This is a legal requirement and cannot be skipped.',
  },
  {
    step: 2,
    title: 'Choose Your Carrier & Plan',
    icon: Smartphone,
    description:
      'Tell the shopkeeper how long you are staying and what you need (data only, calls + data, or international calls). They will recommend the best plan. If in doubt, Inwi offers the most data per dirham, Maroc Telecom the best coverage.',
  },
  {
    step: 3,
    title: 'SIM Installation & Activation',
    icon: Zap,
    description:
      'The shopkeeper will insert the SIM into your phone and activate it. You will receive a confirmation SMS within minutes. Make sure your phone is unlocked before purchasing. If your phone is locked to a carrier from your home country, the SIM will not work.',
  },
  {
    step: 4,
    title: 'Test Your Connection',
    icon: Signal,
    description:
      'Before leaving the shop, test mobile data by opening a website or loading a map. Verify your data balance by dialing the carrier code: *111# for Maroc Telecom, *120# for Inwi, or #222# for Orange. Save these codes in your phone.',
  },
  {
    step: 5,
    title: 'Set Up Top-Up Methods',
    icon: RefreshCw,
    description:
      'Download the carrier app (IAM, My Inwi, or My Orange) for easy top-ups and balance checks. You can also top up at any corner shop, supermarket, or via scratch cards sold everywhere. Keep a top-up card handy for when you need more data.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: ESIM OPTIONS
   ═══════════════════════════════════════════════════════════════ */

const esimProviders = [
  {
    name: 'Airalo',
    data: '1-20 GB options',
    validity: '7-30 days',
    price: 'From 45 MAD equivalent',
    pros: 'Wide range of plans, easy app setup, good support',
    cons: 'Data only (no calls/SMS), slightly pricier than local SIM',
  },
  {
    name: 'Holafly',
    data: 'Unlimited data',
    validity: '5-30 days',
    price: 'From 170 MAD equivalent',
    pros: 'Truly unlimited data, no throttling, great for heavy users',
    cons: 'Expensive compared to local SIMs, data only, no local number',
  },
  {
    name: 'Nomad',
    data: '1-10 GB options',
    validity: '7-30 days',
    price: 'From 40 MAD equivalent',
    pros: 'Budget-friendly, simple activation, covers 100+ countries',
    cons: 'Smaller data packages, data only, slower than local carriers',
  },
  {
    name: 'Orange Morocco eSIM',
    data: '5-40 GB options',
    validity: '7-30 days',
    price: 'From 50 MAD',
    pros: 'Local number included, same speeds as physical SIM',
    cons: 'Must activate at Orange store, limited eSIM store availability',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: TOP-UP METHODS
   ═══════════════════════════════════════════════════════════════ */

const topUpMethods = [
  {
    method: 'Carrier App',
    icon: Smartphone,
    description: 'Download IAM, My Inwi, or My Orange app. Top up with international credit/debit card. Instant activation. Also check balance, usage, and remaining data.',
  },
  {
    method: 'Scratch Cards',
    icon: CreditCard,
    description: 'Available at every corner shop, supermarket, gas station, and kiosk across Morocco. Buy a card (from 10 MAD), scratch the code, and dial the top-up number. The most common method used by locals.',
  },
  {
    method: 'USSD Code Transfer',
    icon: Phone,
    description: 'Transfer credit from another Moroccan number. Dial the carrier USSD code to send balance to your number. Useful if a local friend or your riad host can help.',
  },
  {
    method: 'Online Top-Up',
    icon: Globe,
    description: 'Visit the carrier website (iam.ma, inwi.ma, orange.ma) to top up with an international card. Some third-party sites like Recharge.com also offer Moroccan top-ups.',
  },
  {
    method: 'Mobile Wallets',
    icon: Building,
    description: 'Orange Money and Inwi Money allow cashless top-ups from linked bank accounts. These mobile wallet services are growing in Morocco and offer instant recharges.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: WIFI GUIDE
   ═══════════════════════════════════════════════════════════════ */

const wifiLocations = [
  { place: 'Luxury Hotels & Riads', quality: 'Excellent', speed: '50-200 Mbps', free: true, note: 'Reliable, fast, and often the best WiFi in Morocco.' },
  { place: 'Mid-Range Hotels', quality: 'Good', speed: '10-50 Mbps', free: true, note: 'Reliable in common areas. Room WiFi may be weaker in thick-walled riads.' },
  { place: 'Budget Hostels', quality: 'Variable', speed: '2-15 Mbps', free: true, note: 'Often slow or intermittent. Do not rely on it for video calls.' },
  { place: 'Cafes & Restaurants', quality: 'Good', speed: '5-30 Mbps', free: true, note: 'Most tourist-area cafes offer free WiFi. Ask for the password.' },
  { place: 'Shopping Malls', quality: 'Good', speed: '10-30 Mbps', free: true, note: 'Morocco Mall, Menara Mall, and other large malls have free WiFi.' },
  { place: 'Trains & Stations', quality: 'Basic-Good', speed: '2-20 Mbps', free: true, note: 'Free on Al Boraq high-speed train. Limited at stations.' },
  { place: 'Airports', quality: 'Good', speed: '10-30 Mbps', free: true, note: '30 minutes free, then paid. Better to use your SIM data.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoSimCardGuidePage() {
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
            backgroundImage: 'url(/images/hero-morocco-cityscape.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco SIM Card Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Smartphone className="w-4 h-4" />
            Connectivity &amp; Communication
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco SIM Card Guide:
            <br className="hidden md:block" /> Maroc Telecom, Inwi &amp; Orange
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            From 30 MAD tourist SIMs at the airport to eSIM options you activate before landing.
            Everything you need to stay connected across Morocco.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Staying Connected in Morocco: What You Need to Know
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has excellent mobile coverage across its cities, highways, and even much of its rural
                landscape. Three carriers dominate the market: Maroc Telecom (the state-founded giant with the
                widest coverage), Inwi (the value leader with generous data packages), and Orange Morocco
                (strong on international calls and eSIM support). All three offer affordable tourist SIM
                cards starting from 30 MAD (about 3 USD).
              </p>
              <p>
                Buying a local SIM card is the single best thing you can do for your Morocco trip. You will
                have reliable data for Google Maps navigation through winding medinas, WhatsApp communication
                with your riad host, real-time translation apps, and the ability to book rides, check
                restaurant reviews, and share your journey on social media without worrying about roaming charges.
              </p>
              <p>
                This guide compares all three carriers side by side, explains where to buy, how to activate,
                and covers eSIM alternatives, WiFi availability, top-up methods, and everything else you need
                to stay connected from Tangier to the Sahara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Recommendation ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Star className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Quick Recommendation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Not sure which carrier to choose? Here is our recommendation based on your travel style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center mb-3">
                <Map className="w-5 h-5 text-[var(--color-accent)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Desert &amp; Mountain Travelers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                Heading to the Sahara, Atlas Mountains, or remote villages? Maroc Telecom is the only
                choice. It has the widest rural coverage and is the most reliable network outside cities.
              </p>
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                Maroc Telecom
              </span>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                City Hoppers &amp; Data Lovers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                Staying in Marrakech, Fes, Casablanca, and Essaouira? Inwi offers the most data per dirham
                with excellent urban speeds. Their 50 GB plan for 200 MAD is unbeatable.
              </p>
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                Inwi
              </span>
            </div>

            <div className="card-moroccan p-5">
              <div className="w-10 h-10 rounded-full bg-orange-600/10 flex items-center justify-center mb-3">
                <Phone className="w-5 h-5 text-orange-600" />
              </div>
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                International Callers
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
                Need to make regular calls back home? Orange Morocco includes the most international minutes
                in their tourist plans and offers the cheapest international call rates.
              </p>
              <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-orange-600/10 text-orange-600">
                Orange Morocco
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Carrier Comparison ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Signal className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Compare All Three Carriers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            A detailed breakdown of Maroc Telecom, Inwi, and Orange Morocco with tourist plans, coverage, and pricing.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            All prices are starting prices and may vary. Plans and data allowances are subject to change by the carriers. Verify current offers at purchase.
          </p>

          <div className="space-y-10">
            {carriers.map((carrier) => {
              const CarrierIcon = carrier.icon;
              return (
                <div key={carrier.name} className="card-moroccan overflow-hidden">
                  <div className="p-6 border-b border-[var(--border-light)]">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-full ${carrier.bgColor} flex items-center justify-center shrink-0`}>
                        <CarrierIcon className={`w-6 h-6 ${carrier.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)]">
                          {carrier.name}
                        </h3>
                        <p className="text-sm text-[var(--text-muted)]">{carrier.tagline}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="text-sm">
                        <span className="font-semibold text-[var(--text-primary)]">4G Coverage:</span>{' '}
                        <span className="text-[var(--text-secondary)]">{carrier.coverage4g}</span>
                      </div>
                      <div className="text-sm">
                        <span className="font-semibold text-[var(--text-primary)]">5G Cities:</span>{' '}
                        <span className="text-[var(--text-secondary)]">{carrier.coverage5g}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-xs font-semibold text-green-700 mb-2">Strengths</p>
                        <div className="space-y-1">
                          {carrier.strengths.map((s) => (
                            <div key={s} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                              <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                              {s}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-amber-700 mb-2">Considerations</p>
                        <div className="space-y-1">
                          {carrier.weaknesses.map((w) => (
                            <div key={w} className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                              <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                              {w}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tourist plans table */}
                  <div className="p-6">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                      Tourist Plans
                    </h4>
                    <div className="overflow-x-auto">
                      <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-xs font-medium min-w-[500px]">
                        <div className="p-2.5 px-3">Plan</div>
                        <div className="p-2.5 px-3">Data</div>
                        <div className="p-2.5 px-3">Calls</div>
                        <div className="p-2.5 px-3">Validity</div>
                        <div className="p-2.5 px-3">Price</div>
                      </div>
                      {carrier.touristPlans.map((plan, i) => (
                        <div
                          key={plan.name}
                          className={`grid grid-cols-5 gap-0 text-xs min-w-[500px] ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                        >
                          <div className="p-2.5 px-3 font-medium text-[var(--text-primary)]">{plan.name}</div>
                          <div className="p-2.5 px-3 text-[var(--text-secondary)] font-semibold">{plan.data}</div>
                          <div className="p-2.5 px-3 text-[var(--text-muted)]">{plan.calls}</div>
                          <div className="p-2.5 px-3 text-[var(--text-muted)]">{plan.validity}</div>
                          <div className="p-2.5 px-3 text-[var(--color-accent)] font-semibold">{plan.price}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Where to Buy ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Buy a SIM Card
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            You can purchase a Moroccan SIM card within minutes of arriving. Here are your best options.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whereToBuy.map((place) => {
              const PlaceIcon = place.icon;
              return (
                <div key={place.location} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <PlaceIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {place.location}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-3">{place.description}</p>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-muted)] mb-3">
                    <Clock className="w-3 h-3" />
                    {place.hours}
                  </div>
                  <div className="flex items-start gap-2 p-3 bg-[var(--surface-muted)] rounded-lg">
                    <Info className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-xs text-[var(--text-muted)]">
                      <span className="font-semibold text-[var(--text-primary)]">Tip:</span> {place.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Activation Steps ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Buy &amp; Activate Your SIM
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            The entire process takes 5-10 minutes. Here is what to expect step by step.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[var(--color-accent)]/20 hidden md:block" />

              <div className="space-y-8">
                {activationSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.step} className="relative flex gap-6">
                      <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0 z-10">
                        <span className="text-white font-bold text-sm">{step.step}</span>
                      </div>
                      <div className="card-moroccan p-6 flex-1">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                            {step.title}
                          </h3>
                          <StepIcon className="w-5 h-5 text-[var(--color-accent)] shrink-0 ml-4" />
                        </div>
                        <p className="text-sm text-[var(--text-secondary)]">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── eSIM Options ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            eSIM Options for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            If your phone supports eSIM (iPhone XS+, recent Samsung and Google Pixel), you can get connected before you even land in Morocco.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            eSIM prices are approximate and converted from USD/EUR. Actual prices vary by exchange rate and provider promotions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {esimProviders.map((provider) => (
              <div key={provider.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {provider.name}
                </h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">Data</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{provider.data}</p>
                  </div>
                  <div className="text-center p-2 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">Validity</p>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{provider.validity}</p>
                  </div>
                  <div className="text-center p-2 bg-[var(--surface-muted)] rounded-lg">
                    <p className="text-xs text-[var(--text-muted)]">Price</p>
                    <p className="text-sm font-semibold text-[var(--color-accent)]">{provider.price}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                    <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-green-600" />
                    {provider.pros}
                  </div>
                  <div className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                    <AlertTriangle className="w-3 h-3 mt-0.5 shrink-0 text-amber-500" />
                    {provider.cons}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Top-Up Methods ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <RefreshCw className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Top Up Your SIM
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Running low on data? Topping up is easy and can be done from anywhere in Morocco.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {topUpMethods.map((method) => {
              const MethodIcon = method.icon;
              return (
                <div key={method.method} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <MethodIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {method.method}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WiFi in Morocco ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            WiFi Availability in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            While a local SIM is your best bet for reliable connectivity, WiFi is widely available across Morocco. Here is what to expect.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="card-moroccan overflow-hidden">
              <div className="grid grid-cols-5 gap-0 bg-[var(--color-accent)] text-white text-xs font-medium">
                <div className="p-3 px-4">Location</div>
                <div className="p-3 px-4">Quality</div>
                <div className="p-3 px-4">Speed</div>
                <div className="p-3 px-4">Free?</div>
                <div className="p-3 px-4">Note</div>
              </div>
              {wifiLocations.map((item, i) => (
                <div
                  key={item.place}
                  className={`grid grid-cols-5 gap-0 text-xs ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.place}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{item.quality}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.speed}</div>
                  <div className="p-3 px-4">
                    {item.free ? (
                      <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    ) : (
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                    )}
                  </div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Coverage & Network Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Info className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Coverage &amp; Practical Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Signal className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                4G/LTE Coverage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                4G covers all major cities, highways, and most tourist routes. Speeds typically range from
                10-60 Mbps in urban areas. All three carriers have invested heavily in 4G infrastructure,
                and coverage reaches over 95% of the population.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Zap className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                5G Status in Morocco
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco launched 5G services in late 2024. Coverage is currently limited to central areas of
                Casablanca, Rabat, Marrakech, and Tangier. Speeds can reach 500 Mbps where available, but
                for most travelers, 4G will be more than sufficient for all needs.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Map className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Rural &amp; Desert Coverage
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                In the Sahara Desert, High Atlas, and remote Rif Mountains, only Maroc Telecom provides
                reliable coverage. Expect 3G or Edge in remote areas. Download offline maps (Google Maps or
                Maps.me) before heading to remote locations as a precaution.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Smartphone className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Phone Compatibility
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Morocco uses GSM networks on 900/1800 MHz (2G), 2100 MHz (3G), and 800/1800/2600 MHz (4G).
                Most unlocked international phones work perfectly. Make sure your phone is SIM-unlocked before
                traveling. CDMA-only phones (rare outside the US) will not work.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MessageSquare className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tethering &amp; Hotspot
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                All three carriers allow free tethering and hotspot use on tourist SIMs. There is no
                additional fee or separate plan required. This is perfect for sharing data with travel
                companions or connecting your laptop when WiFi is unreliable.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Roaming Alternatives
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                International roaming from your home carrier costs from 50-150 MAD per day. A local Moroccan
                SIM at 50 MAD gives you 10-12 GB for 15 days. The math is clear: a local SIM saves you
                hundreds of dirhams compared to roaming from any carrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I buy a SIM card at Morocco airports?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. All three carriers have kiosks at Mohammed V (Casablanca), Menara (Marrakech), Ibn Battouta (Tangier), and other major airports. Prices are the same as city shops, staff speak English, and the process takes 5-10 minutes. Bring your passport for mandatory registration.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which Morocco carrier has the best coverage?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Maroc Telecom has the widest coverage, especially in rural areas like the Sahara, Atlas Mountains, and small villages. Inwi and Orange are excellent in cities and along highways but may have gaps in very remote areas. For city-only trips, all three are equally good.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I use an eSIM in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Airalo, Holafly, and Nomad offer Morocco data eSIMs you can activate before arriving. Orange Morocco also offers eSIM activation at select stores. Ideal if your phone supports eSIM (iPhone XS+, recent Samsung/Pixel) and you want to keep your home number active.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much data do I need for a week in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                For typical tourist use (maps, WhatsApp, social media, occasional video calls), 5-10 GB per week is sufficient. For video streaming, frequent photo uploads, or hotspot use, opt for 20 GB or more. The 100 MAD plans with 20-25 GB are the sweet spot for most visitors.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Does my phone need to be unlocked?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Your phone must be SIM-unlocked to use a Moroccan SIM card. Contact your home carrier
                before your trip to request an unlock if needed. Most carriers unlock for free once your
                contract is fulfilled. eSIM users also need an available eSIM slot on their device.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What happens when my tourist SIM plan expires?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Simply top up and renew at any shop. Your SIM number stays active for 90 days from your last
                top-up. If you return to Morocco within that window, it will still work. After 90 days of
                inactivity, the number is deactivated and you would need a new SIM on your next visit.
              </p>
            </div>
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
            <Link href="/morocco-internet-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wifi className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Internet Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Complete guide to internet access, speeds, and digital nomad-friendly spots across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-airport-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Plane className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Airport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything you need to know about arriving at Morocco&apos;s major airports and getting to your hotel.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-packing-list" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Package className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Packing List
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                The essential packing list for Morocco with season-specific advice and must-have items.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-budget-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How much does Morocco really cost? Complete budget breakdown for every type of traveler.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco text-center max-w-3xl">
          <Smartphone className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-4" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Stay Connected in Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            Whether you grab a SIM at the airport or activate an eSIM before your flight, staying connected in Morocco is affordable and simple. From 30 MAD, you will have reliable data for navigating medinas, sharing your journey, and making the most of your trip.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/morocco-airport-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Plane className="w-4 h-4" />
              Airport Arrival Guide
            </Link>
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg hover:bg-[var(--color-accent)]/5 transition-colors font-medium"
            >
              <ArrowRight className="w-4 h-4" />
              First Time in Morocco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Banknote,
  CreditCard,
  Landmark,
  CircleDollarSign,
  Coins,
  ShieldCheck,
  HandCoins,
  AlertTriangle,
  ArrowRight,
  Lightbulb,
  Store,
  Wallet,
  PiggyBank,
  TrendingUp,
  BadgePercent,
  Send,
  Receipt,
  Scale,
  Smartphone,
  Globe,
  MapPin,
  Clock,
  Info,
  CheckCircle,
  XCircle,
  Star,
  Users,
  Utensils,
  Car,
  BedDouble,
  Coffee,
  BookOpen,
  Calculator,
  ShoppingBag,
  Ticket,
  Package,
} from 'lucide-react';

/* ===================================================================
   SEO METADATA
   =================================================================== */

export const metadata: Metadata = {
  title: 'Morocco Money & Currency Guide 2025-2026 | Dirham, ATMs, Cards & Tipping | CityGuide',
  description:
    'Complete guide to money in Morocco. Everything about the Moroccan Dirham (MAD), exchange rates, ATMs, credit cards, tipping culture, bargaining in souks, budgets by travel style, money safety, and currency regulations.',
  keywords: [
    'Morocco currency',
    'Moroccan Dirham',
    'MAD currency',
    'Morocco money',
    'Morocco ATM',
    'Morocco credit cards',
    'Morocco tipping guide',
    'Morocco bargaining',
    'Morocco exchange rate',
    'Morocco budget travel',
    'Morocco cost of living',
    'Morocco cash',
    'Morocco money exchange',
    'Morocco haggling',
    'Morocco souk bargaining',
    'Morocco money safety',
    'Morocco currency regulations',
  ],
  openGraph: {
    title: 'Morocco Money & Currency Guide 2025-2026 - CityGuide',
    description:
      'Everything you need to know about money in Morocco. The Moroccan Dirham, exchange rates, ATMs, credit cards, tipping, bargaining, budgets, and currency regulations.',
    url: 'https://citytoursmorocco.com/money',
    images: [
      {
        url: 'https://citytoursmorocco.com/images/infographic-budget.webp',
        width: 1200,
        height: 630,
        alt: 'Morocco money and currency guide infographic',
      },
    ],
  },
  alternates: { canonical: 'https://citytoursmorocco.com/money' },
};

/* ===================================================================
   JSON-LD STRUCTURED DATA
   =================================================================== */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What currency does Morocco use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco uses the Moroccan Dirham (MAD). One Dirham is divided into 100 centimes. The Dirham is a partially closed currency, meaning it cannot easily be purchased or sold outside of Morocco. Plan to exchange money upon arrival.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use credit cards in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit cards (Visa and Mastercard) are accepted at upscale hotels, restaurants, and larger shops in cities. However, Morocco is primarily a cash economy. Souks, street food vendors, petit taxis, and rural areas are cash-only. Always carry sufficient Dirhams.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much should I tip in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tipping is customary in Morocco. At restaurants, leave 10-15% if no service charge is included. Hotel porters receive 10-20 MAD per bag, housekeeping 10-20 MAD per day. Tour guides receive 100-200 MAD per day for private tours. Budget approximately 50-100 MAD per day for tips.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you bargain in Moroccan souks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by offering roughly one-third of the asking price, then negotiate up. Expect to settle at 50-70% of the initial price. Keep the exchange friendly, never start bargaining unless genuinely interested, and walking away is a legitimate tactic. Fixed-price cooperatives offer fair prices without negotiation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take Moroccan Dirhams out of the country?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The Moroccan Dirham is a closed currency and it is illegal to export more than a small amount (currently 2,000 MAD). Convert any remaining Dirhams back to your home currency at the airport before departure. Keep exchange receipts as proof.',
      },
    },
  ],
};

/* ===================================================================
   TABLE OF CONTENTS DATA
   =================================================================== */

const tocSections = [
  { id: 'dirham-overview', label: 'The Moroccan Dirham', icon: <Coins className="w-4 h-4" /> },
  { id: 'exchange-rates', label: 'Exchange Rates', icon: <TrendingUp className="w-4 h-4" /> },
  { id: 'atms', label: 'ATMs in Morocco', icon: <Landmark className="w-4 h-4" /> },
  { id: 'credit-cards', label: 'Credit Cards', icon: <CreditCard className="w-4 h-4" /> },
  { id: 'tipping', label: 'Tipping Culture', icon: <HandCoins className="w-4 h-4" /> },
  { id: 'bargaining', label: 'Bargaining Guide', icon: <Store className="w-4 h-4" /> },
  { id: 'cost-of-living', label: 'Cost of Living', icon: <Receipt className="w-4 h-4" /> },
  { id: 'budget-breakdown', label: 'Budget Breakdown', icon: <PiggyBank className="w-4 h-4" /> },
  { id: 'money-safety', label: 'Money Safety', icon: <ShieldCheck className="w-4 h-4" /> },
  { id: 'sending-money', label: 'Sending Money', icon: <Send className="w-4 h-4" /> },
  { id: 'tax-free', label: 'Tax-Free Shopping', icon: <BadgePercent className="w-4 h-4" /> },
  { id: 'regulations', label: 'Currency Regulations', icon: <Scale className="w-4 h-4" /> },
  { id: 'payment-apps', label: 'Payment Apps', icon: <Smartphone className="w-4 h-4" /> },
];

/* ===================================================================
   TIPPING DATA
   =================================================================== */

interface TippingItem {
  service: string;
  amount: string;
  note: string;
}

const tippingData: TippingItem[] = [
  { service: 'Restaurant (sit-down)', amount: '10-15% of bill', note: 'If service charge is not included. Leave cash on the table even if paying by card.' },
  { service: 'Cafe / Coffee shop', amount: '2-5 MAD', note: 'Round up or leave small coins for mint tea and coffee.' },
  { service: 'Hotel porter', amount: '10-20 MAD per bag', note: 'Tip upon delivery to your room.' },
  { service: 'Hotel housekeeping', amount: '10-20 MAD per day', note: 'Leave on the pillow each morning or a lump sum at checkout.' },
  { service: 'Riad staff (at checkout)', amount: '50-100 MAD total', note: 'A communal tip for the team, handed to the manager or placed in a tip jar.' },
  { service: 'Private tour guide', amount: '100-200 MAD per day', note: 'More for exceptional multi-day guides. Tip at the end of the tour.' },
  { service: 'Group tour guide', amount: '50-100 MAD per day', note: 'Per person in the group.' },
  { service: 'Desert camp staff', amount: '50-100 MAD total', note: 'For camel handlers, cooks, and camp attendants combined.' },
  { service: 'Driver (multi-day)', amount: '50-100 MAD per day', note: 'Separate from the guide tip. Give at the end of the trip.' },
  { service: 'Taxi driver', amount: 'Round up to nearest 5 MAD', note: 'Not obligatory, but appreciated. E.g., 17 MAD fare, pay 20 MAD.' },
  { service: 'Parking attendant', amount: '5-10 MAD', note: 'The unofficial guardians who watch your car. Pay when you return.' },
  { service: 'Hammam attendant', amount: '20-50 MAD', note: 'More for a thorough scrub. Tip directly to the person who assisted you.' },
  { service: 'Gas station attendant', amount: '5 MAD', note: 'Attendants pump fuel and clean windshields. A small tip is customary.' },
  { service: 'Musician / Entertainer', amount: '10-20 MAD', note: 'If you stop to listen or they perform at your table.' },
  { service: 'Unsolicited helper', amount: '5-10 MAD or decline', note: 'Someone who gives directions or carries bags. You can decline politely.' },
];

/* ===================================================================
   COST DATA
   =================================================================== */

interface CostItem {
  item: string;
  budget: string;
  midRange: string;
  luxury: string;
}

const mealCosts: CostItem[] = [
  { item: 'Street food meal', budget: '15-30 MAD', midRange: '--', luxury: '--' },
  { item: 'Local restaurant lunch', budget: '30-50 MAD', midRange: '60-100 MAD', luxury: '--' },
  { item: 'Restaurant dinner', budget: '40-70 MAD', midRange: '100-200 MAD', luxury: '300-600 MAD' },
  { item: 'Mint tea', budget: '5-10 MAD', midRange: '10-20 MAD', luxury: '20-40 MAD' },
  { item: 'Fresh orange juice', budget: '5-10 MAD', midRange: '10-15 MAD', luxury: '20-30 MAD' },
  { item: 'Beer (where available)', budget: '25-35 MAD', midRange: '35-50 MAD', luxury: '50-80 MAD' },
  { item: 'Bottled water (1.5L)', budget: '5-7 MAD', midRange: '5-7 MAD', luxury: '10-15 MAD' },
];

const transportCosts: CostItem[] = [
  { item: 'Petit taxi (in-city)', budget: '10-20 MAD', midRange: '15-30 MAD', luxury: '30-50 MAD' },
  { item: 'Grand taxi (shared, intercity)', budget: '20-60 MAD', midRange: '--', luxury: '--' },
  { item: 'Train (Marrakech-Fes)', budget: '195 MAD (2nd)', midRange: '295 MAD (1st)', luxury: '295 MAD (1st)' },
  { item: 'Al Boraq high-speed', budget: '--', midRange: '149-299 MAD', luxury: '299 MAD (1st)' },
  { item: 'CTM bus (intercity)', budget: '80-150 MAD', midRange: '--', luxury: '--' },
  { item: 'Car rental per day', budget: '--', midRange: '250-400 MAD', luxury: '500-1,200 MAD' },
  { item: 'Airport transfer', budget: '150-200 MAD', midRange: '200-300 MAD', luxury: '400-600 MAD' },
];

const accommodationCosts: CostItem[] = [
  { item: 'Hostel dorm bed', budget: '60-120 MAD', midRange: '--', luxury: '--' },
  { item: 'Budget riad / guesthouse', budget: '200-400 MAD', midRange: '--', luxury: '--' },
  { item: 'Mid-range riad', budget: '--', midRange: '500-1,000 MAD', luxury: '--' },
  { item: 'Boutique hotel', budget: '--', midRange: '800-1,500 MAD', luxury: '--' },
  { item: 'Luxury riad / 5-star hotel', budget: '--', midRange: '--', luxury: '2,000-6,000 MAD' },
  { item: 'Desert luxury camp', budget: '--', midRange: '--', luxury: '3,000-8,000 MAD' },
  { item: 'Airbnb apartment', budget: '200-350 MAD', midRange: '400-800 MAD', luxury: '1,000-2,500 MAD' },
];

/* ===================================================================
   BUDGET BREAKDOWN DATA
   =================================================================== */

interface BudgetStyle {
  style: string;
  dailyMAD: string;
  dailyUSD: string;
  description: string;
  accommodation: string;
  food: string;
  transport: string;
  activities: string;
  color: string;
}

const budgetStyles: BudgetStyle[] = [
  {
    style: 'Budget',
    dailyMAD: '300-500 MAD',
    dailyUSD: '$30-50',
    description: 'Backpacker and budget traveler style. Hostels, street food, public transport, and free activities. Perfect for long-term travelers and those who want an authentic local experience.',
    accommodation: 'Hostel dorms (60-120 MAD) or budget guesthouses (200-300 MAD)',
    food: 'Street food and local restaurants (60-100 MAD/day)',
    transport: 'Shared grand taxis, buses, walking (20-50 MAD/day)',
    activities: 'Free medina walks, hiking, beaches, budget museums (0-50 MAD/day)',
    color: 'var(--color-green)',
  },
  {
    style: 'Mid-Range',
    dailyMAD: '800-1,500 MAD',
    dailyUSD: '$80-150',
    description: 'Comfortable travel with private riad rooms, sit-down restaurant meals, occasional guided tours, and a mix of taxis and trains. The sweet spot for most visitors.',
    accommodation: 'Mid-range riad with breakfast (500-1,000 MAD)',
    food: 'Mix of local and tourist restaurants (150-250 MAD/day)',
    transport: 'First-class trains, petit taxis, occasional driver (80-150 MAD/day)',
    activities: 'Guided tours, cooking classes, hammams (100-300 MAD/day)',
    color: 'var(--color-accent)',
  },
  {
    style: 'Luxury',
    dailyMAD: '3,000-6,000+ MAD',
    dailyUSD: '$300-600+',
    description: 'Five-star hotels, private guides, fine dining, spa treatments, and exclusive experiences. Morocco offers exceptional luxury at a fraction of European prices.',
    accommodation: 'Luxury riads or 5-star hotels (2,000-6,000 MAD)',
    food: 'Fine dining and hotel restaurants (400-800 MAD/day)',
    transport: 'Private driver, domestic flights (300-600 MAD/day)',
    activities: 'Private guides, hot air balloons, luxury hammams (300-1,000 MAD/day)',
    color: 'var(--color-secondary)',
  },
];

/* ===================================================================
   DENOMINATION DATA
   =================================================================== */

const bankNotes = [
  { value: '20 MAD', color: 'Blue', features: 'King Mohammed VI portrait, Hassan II Mosque' },
  { value: '50 MAD', color: 'Green', features: 'King Mohammed VI portrait, grape vines motif' },
  { value: '100 MAD', color: 'Brown', features: 'King Mohammed VI portrait, Hassan Tower Rabat' },
  { value: '200 MAD', color: 'Blue-purple', features: 'King Mohammed VI portrait, lighthouse motif' },
];

const coinDenominations = [
  { value: '5 centimes', material: 'Aluminum', note: 'Rarely used, almost obsolete' },
  { value: '10 centimes', material: 'Brass', note: 'Rarely seen in circulation' },
  { value: '20 centimes', material: 'Brass', note: 'Occasionally used' },
  { value: '50 centimes', material: 'Copper-nickel', note: 'Common, called "real" in Darija' },
  { value: '1 MAD', material: 'Copper-nickel', note: 'Standard small coin' },
  { value: '2 MAD', material: 'Copper-nickel', note: 'Common in daily use' },
  { value: '5 MAD', material: 'Bi-metallic', note: 'Silver center with brass ring' },
  { value: '10 MAD', material: 'Bi-metallic', note: 'Brass center with silver ring, largest coin' },
];

/* ===================================================================
   ATM DATA
   =================================================================== */

interface ATMBank {
  bank: string;
  network: string;
  dailyLimit: string;
  fee: string;
  locations: string;
}

const atmBanks: ATMBank[] = [
  { bank: 'Attijariwafa Bank', network: 'Visa, Mastercard, Maestro', dailyLimit: '4,000-5,000 MAD', fee: '25-35 MAD per withdrawal', locations: 'Largest bank. ATMs in every city, airports, and most towns.' },
  { bank: 'BMCE Bank of Africa', network: 'Visa, Mastercard, Maestro', dailyLimit: '4,000 MAD', fee: '25-35 MAD per withdrawal', locations: 'Major cities and airports. Some ATMs dispense euros.' },
  { bank: 'Banque Populaire', network: 'Visa, Mastercard', dailyLimit: '3,000-4,000 MAD', fee: '20-30 MAD per withdrawal', locations: 'Widespread across Morocco, strong rural presence.' },
  { bank: 'CIH Bank', network: 'Visa, Mastercard, Maestro, Cirrus', dailyLimit: '5,000 MAD', fee: '30-40 MAD per withdrawal', locations: 'Cities and tourist areas. Reliable machines.' },
  { bank: 'Credit du Maroc', network: 'Visa, Mastercard', dailyLimit: '3,000-4,000 MAD', fee: '25-35 MAD per withdrawal', locations: 'Major cities. Part of Credit Agricole group.' },
  { bank: 'Societe Generale Maroc', network: 'Visa, Mastercard', dailyLimit: '4,000 MAD', fee: '25-35 MAD per withdrawal', locations: 'Urban areas. Accepts most international cards.' },
];

/* ===================================================================
   PAGE COMPONENT
   =================================================================== */

export default function MoneyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section className="relative overflow-hidden bg-[var(--color-primary-900)] text-white">
        <div className="absolute inset-0">
          <img
            src="/images/infographic-budget.webp"
            alt="Morocco money and currency guide"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative container-morocco py-20 md:py-28 lg:py-36">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors inline-flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Money &amp; Currency</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-4">
              Practical Information
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Morocco Money &amp; Currency Guide
            </h1>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed">
              Everything you need to know about the Moroccan Dirham, ATMs, exchange rates, credit cards, tipping, bargaining, and managing your budget &mdash; updated for 2025-2026.
            </p>
          </div>
        </div>
        <div className="zellige-border" />
      </section>

      {/* ============================================================
          QUICK STATS
          ============================================================ */}
      <section className="container-morocco -mt-8 relative z-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { icon: <Coins className="w-5 h-5" />, label: 'Currency', value: 'Moroccan Dirham', detail: 'Code: MAD' },
            { icon: <TrendingUp className="w-5 h-5" />, label: 'Approx Rate', value: '~10 MAD = $1', detail: '~11 MAD = 1 EUR' },
            { icon: <Landmark className="w-5 h-5" />, label: 'ATM Limit', value: '2,000-5,000 MAD', detail: 'Per transaction' },
            { icon: <CreditCard className="w-5 h-5" />, label: 'Cards', value: 'Visa / MC', detail: 'Upscale venues only' },
            { icon: <HandCoins className="w-5 h-5" />, label: 'Tipping', value: '10-15%', detail: 'Restaurants' },
            { icon: <Wallet className="w-5 h-5" />, label: 'Cash Is King', value: 'Always Carry', detail: 'Souks, taxis, rural' },
          ].map((card) => (
            <div key={card.label} className="card-moroccan p-4 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary mb-2">
                {card.icon}
              </div>
              <p className="text-xs text-text-muted uppercase tracking-wide mb-1">{card.label}</p>
              <p className="font-heading font-semibold text-sm text-text-primary leading-tight">{card.value}</p>
              <p className="text-xs text-text-muted mt-1">{card.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          TABLE OF CONTENTS
          ============================================================ */}
      <section className="container-morocco mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="card-moroccan p-6 md:p-8">
            <h2 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[var(--color-secondary)]" />
              Quick Navigation
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {tocSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[var(--surface-muted)] hover:bg-[var(--color-secondary)]/10 transition-colors text-sm text-text-secondary hover:text-[var(--color-secondary)]"
                >
                  <span className="text-[var(--color-accent)]">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 1: MOROCCAN DIRHAM OVERVIEW
          ============================================================ */}
      <section id="dirham-overview" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Coins className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 1 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                The Moroccan Dirham (MAD)
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-lg text-text-secondary leading-relaxed mb-10">
            <p>
              The official currency of Morocco is the <strong className="text-text-primary">Moroccan Dirham</strong>, abbreviated as <strong className="text-text-primary">MAD</strong> (from the Arabic &ldquo;Moroccan Dirham&rdquo;) and symbolized locally as &ldquo;DH&rdquo; or &ldquo;Dhs&rdquo;. One Dirham is divided into 100 centimes, though centime coins are increasingly rare in everyday transactions.
            </p>
            <p>
              The Dirham is a <strong className="text-text-primary">partially closed (restricted) currency</strong>. This means you generally cannot buy Dirhams outside of Morocco, and you are not permitted to export more than 2,000 MAD when leaving the country. Plan to obtain your Dirhams upon arrival at the airport exchange bureau, ATM, or bank. This is a critical point that catches many first-time visitors off guard.
            </p>
            <p>
              In everyday speech, Moroccans often refer to prices in &ldquo;rials&rdquo; rather than Dirhams. One Dirham equals 20 rials, so a price of &ldquo;100 rials&rdquo; actually means 5 MAD. This can be confusing, especially in souks and rural areas. When in doubt, always confirm whether a quoted price is in Dirhams or rials. In tourist areas, prices are almost always stated in Dirhams.
            </p>
          </div>

          {/* Bank Notes */}
          <div className="max-w-4xl mb-8">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-4 flex items-center gap-2">
              <Banknote className="w-5 h-5 text-[var(--color-accent)]" />
              Banknotes in Circulation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bankNotes.map((note) => (
                <div key={note.value} className="card-moroccan p-4">
                  <p className="text-2xl font-bold text-[var(--color-primary)] mb-1">{note.value}</p>
                  <p className="text-sm text-text-secondary"><strong className="text-text-primary">Color:</strong> {note.color}</p>
                  <p className="text-sm text-text-secondary mt-1">{note.features}</p>
                </div>
              ))}
            </div>
            <div className="card-moroccan p-4 mt-4 border-l-4 border-l-[var(--color-accent)]">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Pro tip:</strong> Many small vendors, taxi drivers, and street food sellers struggle to break 200 MAD notes. Always try to keep a supply of 20 and 50 MAD notes for daily purchases. When withdrawing from ATMs, opt for odd amounts like 800 MAD instead of 1,000 MAD to receive a better mix of denominations.
                </p>
              </div>
            </div>
          </div>

          {/* Coins */}
          <div className="max-w-4xl">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-4 flex items-center gap-2">
              <CircleDollarSign className="w-5 h-5 text-[var(--color-accent)]" />
              Coins in Circulation
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Denomination</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Material</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {coinDenominations.map((coin) => (
                      <tr key={coin.value} className="border-t border-[var(--surface-muted)]">
                        <td className="p-3 font-medium text-text-primary">{coin.value}</td>
                        <td className="p-3 text-text-secondary">{coin.material}</td>
                        <td className="p-3 text-text-secondary">{coin.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: EXCHANGE RATES
          ============================================================ */}
      <section id="exchange-rates" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <TrendingUp className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 2 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Exchange Rates &amp; Where to Exchange
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              The Moroccan Dirham is pegged to a basket of currencies (60% Euro, 40% US Dollar), which means it remains relatively stable. As of 2025, approximate exchange rates are: <strong className="text-text-primary">1 USD = 9.5-10.5 MAD</strong>, <strong className="text-text-primary">1 EUR = 10.5-11 MAD</strong>, <strong className="text-text-primary">1 GBP = 12-13 MAD</strong>. Rates fluctuate, so check before your trip using XE.com or Google Finance.
            </p>
          </div>

          {/* Where to exchange - ranked */}
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6 border-l-4 border-l-green-500">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-heading font-semibold text-lg text-text-primary">Best Exchange Options</h3>
              </div>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">ATMs (recommended):</strong> The most convenient option with competitive rates. Withdraw Dirhams directly from Moroccan bank ATMs. Your bank sets the exchange rate, which is typically close to the interbank rate. Factor in your home bank&apos;s foreign transaction fee (usually 1-3%).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Banks:</strong> Official bank branches (Attijariwafa, BMCE, Banque Populaire) offer reliable rates with small commissions. Open Sunday-Thursday, closed Friday afternoon and Saturday. Bring your passport for exchange transactions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Licensed bureau de change:</strong> Found in tourist areas, medinas, and near major attractions. Rates are posted on boards. Compare several before committing. No commission is common, but rates may be slightly lower than banks.</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6 border-l-4 border-l-red-400">
              <div className="flex items-center gap-2 mb-3">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="font-heading font-semibold text-lg text-text-primary">Worst Exchange Options</h3>
              </div>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Hotel reception desks:</strong> The most expensive option. Hotels charge a premium of 5-10% over the market rate. Only use as a last resort for small amounts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Airport exchange (arrivals hall):</strong> Convenient but rates are 3-5% worse than in the city. Exchange only enough to cover your taxi or transfer (200-300 MAD), then find a better rate later.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Unofficial street changers:</strong> Illegal and risky. You may receive counterfeit bills or be shortchanged. Always use official, licensed exchange services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span><strong className="text-text-primary">Exchanging abroad before arrival:</strong> Most banks outside Morocco do not stock Dirhams. Those that do charge a huge markup. Wait until you arrive.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="max-w-4xl card-moroccan p-5 border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Exchange receipt tip:</strong> Always keep your exchange receipts (bordereau de change). You will need them to convert leftover Dirhams back to your home currency at the airport when departing. Without receipts, some exchange offices may refuse to convert your Dirhams or offer a worse rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 3: ATMs IN MOROCCO
          ============================================================ */}
      <section id="atms" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Landmark className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 3 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                ATMs in Morocco
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              ATMs (called <strong className="text-text-primary">distributeurs automatiques</strong> or <strong className="text-text-primary">guichets automatiques</strong> in French) are widely available across Morocco. Every city, most towns, and even some villages have at least one ATM. They accept international Visa, Mastercard, and Maestro cards. However, in remote areas like small Atlas Mountain villages or deep Saharan oases, ATMs may be scarce or out of cash, so always withdraw enough before heading off the beaten path.
            </p>
            <p>
              Most ATMs dispense <strong className="text-text-primary">2,000 to 5,000 MAD per transaction</strong>, depending on the bank. Your home bank may impose its own daily withdrawal limit. Moroccan ATMs typically charge a local fee of <strong className="text-text-primary">25-40 MAD per withdrawal</strong> (displayed on screen before you confirm), and your home bank may add its own foreign transaction fee on top. To minimize fees, withdraw larger amounts less frequently.
            </p>
          </div>

          {/* ATM Banks Table */}
          <div className="max-w-4xl mb-8">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Bank</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Networks</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Daily Limit</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Local Fee</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {atmBanks.map((bank) => (
                      <tr key={bank.bank} className="border-t border-[var(--surface-muted)]">
                        <td className="p-3 font-medium text-text-primary whitespace-nowrap">{bank.bank}</td>
                        <td className="p-3 text-text-secondary">{bank.network}</td>
                        <td className="p-3 text-text-secondary whitespace-nowrap">{bank.dailyLimit}</td>
                        <td className="p-3 text-text-secondary whitespace-nowrap">{bank.fee}</td>
                        <td className="p-3 text-text-secondary">{bank.locations}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ATM Tips */}
          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: 'ATM Safety',
                body: 'Use ATMs inside bank branches or shopping malls whenever possible. Avoid standalone ATMs on quiet streets at night. Shield your PIN, check for card skimmers (loose plastic around the card slot), and never accept help from strangers at an ATM.',
              },
              {
                icon: <AlertTriangle className="w-5 h-5" />,
                title: 'Decline Dynamic Currency Conversion',
                body: 'When an ATM asks if you want to be charged in your home currency (DCC), always select "No" and choose to pay in MAD. Dynamic currency conversion uses a poor exchange rate and adds hidden fees of 3-7%.',
              },
              {
                icon: <Lightbulb className="w-5 h-5" />,
                title: 'Notify Your Bank',
                body: 'Inform your home bank of your Morocco travel dates before departure. Without advance notice, your bank may flag Moroccan withdrawals as suspicious and block your card. Carry a backup card from a different bank as a safety net.',
              },
              {
                icon: <MapPin className="w-5 h-5" />,
                title: 'Airport ATMs',
                body: 'ATMs are available at all major airports (Marrakech, Casablanca, Fes, Agadir, Tangier) both before and after customs. These use the same rates as in-city ATMs and are the recommended first stop for cash upon arrival.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5 border-l-4 border-l-[var(--color-accent)]">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[var(--color-accent)]">{tip.icon}</span>
                  <h3 className="font-heading font-semibold text-text-primary">{tip.title}</h3>
                </div>
                <p className="text-text-secondary text-[15px] leading-relaxed">{tip.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 4: CREDIT CARDS
          ============================================================ */}
      <section id="credit-cards" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <CreditCard className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 4 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Credit &amp; Debit Cards
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              While Morocco is modernizing its payment infrastructure, it remains overwhelmingly a <strong className="text-text-primary">cash-based economy</strong>. Credit and debit cards have their place, but you cannot rely on them as your sole payment method. Understanding where cards work and where they do not will save you from awkward situations.
            </p>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <h3 className="font-heading font-semibold text-lg text-text-primary">Where Cards Are Accepted</h3>
              </div>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>Mid-range to luxury hotels and riads</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>Upscale restaurants and international chains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>Large supermarkets (Marjane, Carrefour, Acima)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>Gas stations on major highways</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>Tourist-oriented shops in the ville nouvelle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>ONCF train tickets (online and some counters)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span>Pharmacies in major cities</span>
                </li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-500" />
                <h3 className="font-heading font-semibold text-lg text-text-primary">Where Cards Are NOT Accepted</h3>
              </div>
              <ul className="space-y-3 text-text-secondary text-sm">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Souks and medina shops (almost entirely cash-only)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Street food vendors and market stalls</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Petit taxis and grand taxis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Budget riads and guesthouses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Small local restaurants and cafes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Rural areas and small towns entirely</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                  <span>Tips, parking attendants, small services</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card type recommendations */}
          <div className="max-w-4xl card-moroccan p-6">
            <h3 className="font-heading font-semibold text-lg text-text-primary mb-4">Which Cards Work Best?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <p className="font-semibold text-text-primary mb-1">Visa</p>
                <p className="text-sm text-text-secondary">Most widely accepted card network in Morocco. Works at virtually all card-accepting merchants and ATMs. Your best primary card choice.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <p className="font-semibold text-text-primary mb-1">Mastercard</p>
                <p className="text-sm text-text-secondary">Accepted at most places that take Visa. Good as a primary or backup card. Works at all major bank ATMs across the country.</p>
              </div>
              <div className="p-4 rounded-lg bg-[var(--surface-muted)]">
                <p className="font-semibold text-text-primary mb-1">American Express</p>
                <p className="text-sm text-text-secondary">Very limited acceptance. Only works at a small number of luxury hotels and high-end restaurants. Not recommended as your only card for Morocco.</p>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-lg border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
                <p className="text-sm text-text-secondary">
                  <strong className="text-text-primary">Travel card recommendation:</strong> Consider getting a no-foreign-transaction-fee card before your trip, such as Wise (formerly TransferWise) or Revolut. These fintech cards offer near-interbank exchange rates and zero markup on foreign currency transactions, potentially saving you 2-4% on every card payment compared to traditional bank cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 5: TIPPING CULTURE
          ============================================================ */}
      <section id="tipping" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <HandCoins className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 5 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Tipping Culture in Morocco
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              Tipping (<strong className="text-text-primary">pourboire</strong> in French) is deeply embedded in Moroccan culture and is expected in virtually all service interactions. Unlike some countries where tipping is optional, in Morocco it is considered a normal and important part of service workers&apos; income. Many workers earn modest base wages and depend on tips to supplement their earnings.
            </p>
            <p>
              Budget approximately <strong className="text-text-primary">50-100 MAD per person per day</strong> for tips. Keep a dedicated pocket of small bills (10 and 20 MAD notes, plus 5 MAD coins) so you are always prepared. A general rule: if someone provides you with a service, however small, a tip is expected. Refusing to tip is considered rude and will be noticed. The amounts below are guidelines; you can tip more for exceptional service.
            </p>
          </div>

          <div className="max-w-4xl">
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Service</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Suggested Amount</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tippingData.map((item) => (
                      <tr key={item.service} className="border-t border-[var(--surface-muted)]">
                        <td className="p-3 font-medium text-text-primary whitespace-nowrap">{item.service}</td>
                        <td className="p-3 text-[var(--color-accent)] font-semibold whitespace-nowrap">{item.amount}</td>
                        <td className="p-3 text-text-secondary">{item.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 6: BARGAINING / HAGGLING GUIDE
          ============================================================ */}
      <section id="bargaining" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Store className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 6 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Bargaining &amp; Haggling Guide
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              Bargaining is not just expected in Moroccan souks &mdash; it is a social art form, a cultural ritual, and one of the most memorable parts of visiting Morocco. The initial asking price in a souk is <strong className="text-text-primary">almost never the real price</strong>. Vendors expect negotiation, and they price their goods with this in mind. Walking in and paying the first price quoted is the biggest money mistake a tourist can make.
            </p>
            <p>
              A good rule of thumb: <strong className="text-text-primary">start your counter-offer at roughly one-third of the asking price</strong>, then negotiate upward. Most transactions settle at 40-60% of the initial asking price, though this varies by item, location, and how many tourists are around. The key is to keep the exchange friendly, humorous, and respectful. This is not a confrontation &mdash; it is a social interaction that both parties should enjoy.
            </p>
          </div>

          {/* Step by step */}
          <div className="max-w-4xl mb-8">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-6">The Art of the Haggle: Step by Step</h3>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  step: '1',
                  title: 'Browse Without Commitment',
                  body: 'Walk through the souk first without stopping to buy. Get a feel for what is available and roughly how much things cost at different stalls. This gives you a mental price baseline. Vendors will call out to you, but a simple "la shukran" (no thank you) keeps you moving.',
                },
                {
                  step: '2',
                  title: 'Show Interest, Not Desperation',
                  body: 'When you find something you like, pick it up casually. Ask the price with mild curiosity, not excitement. If you look too eager, the starting price will be inflated. A poker face is your most valuable asset. If the vendor senses you must have that item, your bargaining power drops dramatically.',
                },
                {
                  step: '3',
                  title: 'Counter at One-Third',
                  body: 'When the vendor gives a price, react with mild surprise (even if it seems reasonable). Counter-offer at approximately one-third of their asking price. This gives you room to negotiate upward while still reaching a fair price. For example, if they say 300 MAD, counter with 100 MAD.',
                },
                {
                  step: '4',
                  title: 'Negotiate in Small Steps',
                  body: 'The vendor will counter your counter-offer. Move up in small increments (20-30 MAD at a time), and they will come down in similar steps. Exchange compliments about the craftsmanship, ask about the materials, and keep the mood light. Humor goes a long way. Many vendors offer mint tea during negotiation, which is polite to accept.',
                },
                {
                  step: '5',
                  title: 'The Walk-Away Strategy',
                  body: 'If you cannot reach your target price, politely say thank you and begin walking away. In most cases, the vendor will call you back with a lower offer. This is the most powerful negotiation tool you have. If they do not call you back, the price was likely already fair. You can always return later.',
                },
                {
                  step: '6',
                  title: 'Seal the Deal',
                  body: 'Once you agree on a price, the deal is considered binding. Backing out after agreeing is considered very rude. Pay the agreed amount, shake hands, and enjoy your purchase. Never start a negotiation unless you genuinely intend to buy at a fair price.',
                },
              ].map((item) => (
                <div key={item.step} className="card-moroccan p-5 flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)] text-white font-bold shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-text-secondary text-[15px] leading-relaxed">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Where NOT to bargain */}
          <div className="max-w-4xl card-moroccan p-6">
            <h3 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-[var(--color-accent)]" />
              Where NOT to Bargain
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Bargaining is only appropriate in certain settings. These places have fixed prices and attempting to haggle is inappropriate:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {[
                'Supermarkets (Marjane, Carrefour)',
                'Pharmacies',
                'Restaurants with printed menus',
                'Government-run cooperatives',
                'Chain stores and franchises',
                'Gas stations',
                'Train and bus tickets',
                'Museums and monuments',
                'Modern shops with price tags',
              ].map((place) => (
                <div key={place} className="flex items-center gap-2 text-sm text-text-secondary">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{place}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 7: COST OF LIVING BREAKDOWN
          ============================================================ */}
      <section id="cost-of-living" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Receipt className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 7 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Cost of Living Breakdown
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              Morocco offers exceptional value for money compared to Europe, North America, and even many other popular tourist destinations. Your money goes remarkably far, especially outside the most touristic spots. Here is a detailed breakdown of typical costs across three categories: food and drink, transportation, and accommodation.
            </p>
          </div>

          {/* Food Costs */}
          <div className="max-w-4xl mb-8">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-4 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-[var(--color-accent)]" />
              Food &amp; Drink
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Item</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Budget</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Mid-Range</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Luxury</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mealCosts.map((item) => (
                      <tr key={item.item} className="border-t border-[var(--surface-muted)]">
                        <td className="p-3 font-medium text-text-primary">{item.item}</td>
                        <td className="p-3 text-text-secondary">{item.budget}</td>
                        <td className="p-3 text-text-secondary">{item.midRange}</td>
                        <td className="p-3 text-text-secondary">{item.luxury}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Transport Costs */}
          <div className="max-w-4xl mb-8">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-4 flex items-center gap-2">
              <Car className="w-5 h-5 text-[var(--color-accent)]" />
              Transportation
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Transport</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Budget</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Mid-Range</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Luxury</th>
                    </tr>
                  </thead>
                  <tbody>
                    {transportCosts.map((item) => (
                      <tr key={item.item} className="border-t border-[var(--surface-muted)]">
                        <td className="p-3 font-medium text-text-primary">{item.item}</td>
                        <td className="p-3 text-text-secondary">{item.budget}</td>
                        <td className="p-3 text-text-secondary">{item.midRange}</td>
                        <td className="p-3 text-text-secondary">{item.luxury}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Accommodation Costs */}
          <div className="max-w-4xl">
            <h3 className="font-heading font-semibold text-xl text-text-primary mb-4 flex items-center gap-2">
              <BedDouble className="w-5 h-5 text-[var(--color-accent)]" />
              Accommodation (per night)
            </h3>
            <div className="card-moroccan overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[var(--surface-muted)]">
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Type</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Budget</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Mid-Range</th>
                      <th className="text-left p-3 font-heading font-semibold text-text-primary">Luxury</th>
                    </tr>
                  </thead>
                  <tbody>
                    {accommodationCosts.map((item) => (
                      <tr key={item.item} className="border-t border-[var(--surface-muted)]">
                        <td className="p-3 font-medium text-text-primary">{item.item}</td>
                        <td className="p-3 text-text-secondary">{item.budget}</td>
                        <td className="p-3 text-text-secondary">{item.midRange}</td>
                        <td className="p-3 text-text-secondary">{item.luxury}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 8: BUDGET BREAKDOWN BY TRAVEL STYLE
          ============================================================ */}
      <section id="budget-breakdown" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <PiggyBank className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 8 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Daily Budget by Travel Style
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              How much does a trip to Morocco actually cost per day? It depends entirely on your travel style. Morocco uniquely caters to every budget level, from shoestring backpackers spending under $30 a day to luxury travelers enjoying world-class experiences at a fraction of what they would cost in Europe. Here is a realistic daily budget breakdown for three common travel styles.
            </p>
          </div>

          <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-3 gap-6">
            {budgetStyles.map((style) => (
              <div key={style.style} className="card-moroccan p-6 border-t-4" style={{ borderTopColor: style.color }}>
                <div className="text-center mb-5">
                  <p className="text-sm font-semibold uppercase tracking-widest mb-1" style={{ color: style.color }}>
                    {style.style} Traveler
                  </p>
                  <p className="text-3xl font-bold text-text-primary">{style.dailyMAD}</p>
                  <p className="text-sm text-text-muted">{style.dailyUSD} per day</p>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{style.description}</p>
                <div className="space-y-3 text-sm">
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="font-semibold text-text-primary flex items-center gap-2">
                      <BedDouble className="w-4 h-4" style={{ color: style.color }} /> Accommodation
                    </p>
                    <p className="text-text-secondary mt-1">{style.accommodation}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="font-semibold text-text-primary flex items-center gap-2">
                      <Utensils className="w-4 h-4" style={{ color: style.color }} /> Food
                    </p>
                    <p className="text-text-secondary mt-1">{style.food}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="font-semibold text-text-primary flex items-center gap-2">
                      <Car className="w-4 h-4" style={{ color: style.color }} /> Transport
                    </p>
                    <p className="text-text-secondary mt-1">{style.transport}</p>
                  </div>
                  <div className="p-3 rounded-lg bg-[var(--surface-muted)]">
                    <p className="font-semibold text-text-primary flex items-center gap-2">
                      <Ticket className="w-4 h-4" style={{ color: style.color }} /> Activities
                    </p>
                    <p className="text-text-secondary mt-1">{style.activities}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 9: MONEY SAFETY TIPS
          ============================================================ */}
      <section id="money-safety" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <ShieldCheck className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 9 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Money Safety Tips
              </h2>
            </div>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: <Wallet className="w-5 h-5" />,
                title: 'Use a Money Belt or Hidden Pouch',
                body: 'In crowded souks and medinas, pickpocketing is the most common petty crime. Wear a flat money belt under your clothing for your passport, large bills, and backup cards. Keep only your daily spending money in a front pocket or a small, secure bag that stays in front of your body.',
              },
              {
                icon: <Banknote className="w-5 h-5" />,
                title: 'Spotting Counterfeit Bills',
                body: 'Familiarize yourself with genuine Moroccan banknotes. Real notes have a watermark visible when held to light, a metallic security strip, raised lettering you can feel, and microprinting. Be especially cautious when receiving change in poorly lit souk stalls. If a bill feels unusually thin, waxy, or the colors seem off, ask for a different one.',
              },
              {
                icon: <AlertTriangle className="w-5 h-5" />,
                title: 'Count Your Change Immediately',
                body: 'Always count your change on the spot, especially after paying with larger notes. Some vendors may "accidentally" shortchange you by 10-20 MAD. This is particularly common in very busy market areas and at street food stalls. A quick count done calmly and without accusation is perfectly acceptable.',
              },
              {
                icon: <CreditCard className="w-5 h-5" />,
                title: 'Card Skimming Prevention',
                body: 'When using your card at ATMs, check for loose card readers or hidden cameras above the PIN pad. Use ATMs inside bank branches rather than freestanding machines. When paying by card at restaurants, insist on watching your card being processed. Never let your card leave your sight for extended periods.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: 'Split Your Money',
                body: 'Never carry all your cash and cards in one place. Split your money across a money belt, a day bag, and your hotel safe. Keep at least one backup card and an emergency cash reserve (200-300 MAD) hidden separately in your luggage. If you lose your wallet, you still have options.',
              },
              {
                icon: <Globe className="w-5 h-5" />,
                title: 'Avoid Common Money Scams',
                body: 'Be wary of "quick change" artists who confuse you by counting and recounting money. If a vendor says they have no change for a large bill, do not hand it over until they produce the change first. Never exchange money with unofficial street changers, no matter how attractive the rate seems.',
              },
            ].map((tip) => (
              <div key={tip.title} className="card-moroccan p-5">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 mt-0.5 bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-text-primary mb-2">{tip.title}</h3>
                    <p className="text-text-secondary text-[15px] leading-relaxed">{tip.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 10: SENDING MONEY
          ============================================================ */}
      <section id="sending-money" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Send className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 10 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                How to Send &amp; Receive Money
              </h2>
            </div>
          </div>

          <div className="max-w-4xl space-y-4 text-text-secondary leading-relaxed mb-10">
            <p>
              Whether you need emergency funds sent from home or want to pay a local guide or tour company in advance, several options exist for transferring money to and within Morocco. Note that due to currency controls, sending money <em>out</em> of Morocco is significantly more restricted than sending it in.
            </p>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Western Union',
                body: 'The most widely available money transfer service in Morocco with thousands of agent locations, including inside post offices (Barid Al-Maghrib) and bank branches. Funds are available within minutes for cash pickup. The recipient needs only a valid ID and the transaction code. Fees and exchange rates vary but are typically 3-7% of the transfer amount.',
              },
              {
                title: 'MoneyGram',
                body: 'Another well-established option with agent locations in major cities and towns. Similar to Western Union in terms of speed and process. Fees are competitive. Available at select banks and dedicated agent locations throughout Morocco.',
              },
              {
                title: 'Wise (TransferWise)',
                body: 'Offers the best exchange rates for larger transfers with transparent, low fees (typically 0.5-1.5%). Funds are deposited directly into a Moroccan bank account. Processing takes 1-3 business days. Ideal for paying deposits to hotels, tour companies, or rental agencies in advance.',
              },
              {
                title: 'Bank Wire Transfer (SWIFT)',
                body: 'Traditional bank-to-bank transfers work but are slow (3-5 business days), expensive (fees on both ends), and involve unfavorable exchange rates. Only worthwhile for very large amounts. Requires the recipient bank SWIFT code and full account details.',
              },
            ].map((option) => (
              <div key={option.title} className="card-moroccan p-5">
                <h3 className="font-heading font-semibold text-text-primary mb-2">{option.title}</h3>
                <p className="text-text-secondary text-[15px] leading-relaxed">{option.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 11: TAX-FREE SHOPPING
          ============================================================ */}
      <section id="tax-free" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <BadgePercent className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 11 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Tax-Free Shopping
              </h2>
            </div>
          </div>

          <div className="max-w-4xl card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Morocco has a <strong className="text-text-primary">VAT (TVA) rate of 20%</strong> on most goods. Non-resident tourists can claim a VAT refund on purchases exceeding <strong className="text-text-primary">2,000 MAD</strong> from participating stores. However, the tax-free shopping system in Morocco is less developed than in Europe, and the process can be cumbersome.
              </p>
              <p>
                <strong className="text-text-primary">How it works:</strong> Look for shops displaying the &ldquo;Tax Free&rdquo; logo or ask the merchant. At the time of purchase, request a tax-free form (bordereau de detaxe). You will need to present your passport. The form must be stamped by Moroccan customs at the airport before check-in. After the customs stamp, present the form at the refund desk in the departure area to receive your refund, usually as a credit to your card or in cash (with a processing fee).
              </p>
              <p>
                <strong className="text-text-primary">Practical reality:</strong> Most souk purchases and small shop transactions will not qualify, as these vendors do not participate in the tax-free program. The system is primarily available at larger retail stores, high-end boutiques, and some art galleries in major cities like Marrakech and Casablanca. Given the complexity, many travelers find the refund is not worth the effort unless they have made a large single purchase like an expensive rug or piece of art.
              </p>
              <p>
                <strong className="text-text-primary">Tips for claiming:</strong> Keep all receipts organized. Arrive at the airport with extra time (at least 30 minutes before normal check-in) to complete the customs inspection and refund process. The goods must be in your luggage and available for inspection. Customs officers may ask to see the items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 12: CURRENCY REGULATIONS
          ============================================================ */}
      <section id="regulations" className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Scale className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 12 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Currency Regulations
              </h2>
            </div>
          </div>

          <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                Exporting Dirhams (Leaving Morocco)
              </h3>
              <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <p>
                  The Moroccan Dirham is a <strong className="text-text-primary">closed currency</strong>. It is <strong className="text-text-primary">illegal to export more than 2,000 MAD</strong> when leaving the country. This is strictly enforced, and customs may check.
                </p>
                <p>
                  Convert any leftover Dirhams at the airport exchange bureau before passing through security. You will need your original exchange receipts to convert Dirhams back to foreign currency. Without receipts, you may only be able to convert a limited amount, and the rate will be unfavorable.
                </p>
                <p>
                  Spend down your Dirhams before departing. Airport shops, cafes, and the duty-free store all accept MAD. Alternatively, leave a generous tip at your last hotel or riad.
                </p>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                Importing Foreign Currency (Arriving)
              </h3>
              <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
                <p>
                  You may bring <strong className="text-text-primary">unlimited foreign currency</strong> into Morocco, but amounts exceeding the equivalent of <strong className="text-text-primary">100,000 MAD</strong> (approximately $10,000) must be declared on your customs form upon arrival.
                </p>
                <p>
                  There is no obligation to exchange all of your foreign currency. Major currencies (USD, EUR, GBP) are easily exchanged at banks and bureau de change throughout the country. Less common currencies may be more difficult to exchange outside of Casablanca.
                </p>
                <p>
                  <strong className="text-text-primary">Declaration tip:</strong> If you bring a large amount of foreign currency, complete the declaration form honestly. This protects you when departing, as customs may question the origin of any large amounts of foreign currency you are taking out. Keep the declaration form with your travel documents.
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mt-6 card-moroccan p-5 border-l-4 border-l-[var(--color-accent)]">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
              <p className="text-sm text-text-secondary">
                <strong className="text-text-primary">Practical strategy:</strong> Bring one or two days&apos; worth of spending money in EUR or USD cash as an emergency backup. Use ATMs as your primary source of Dirhams. On your last day, stop withdrawing and spend down your remaining Dirhams rather than paying exchange fees to convert them back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 13: PAYMENT APPS
          ============================================================ */}
      <section id="payment-apps" className="py-16 md:py-20">
        <div className="container-morocco">
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex p-3 rounded-xl bg-[var(--color-primary)]/10">
              <Smartphone className="w-6 h-6 text-[var(--color-primary)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-[var(--color-accent)]">Section 13 of 13</p>
              <h2 className="text-3xl font-display font-bold text-text-primary">
                Payment Apps &amp; Digital Payments
              </h2>
            </div>
          </div>

          <div className="max-w-4xl card-moroccan p-6 md:p-8">
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Digital payment adoption in Morocco is growing but remains limited compared to Europe or East Asia. <strong className="text-text-primary">Cash is still king</strong> for the vast majority of daily transactions, especially for tourists. However, several developments are worth noting.
              </p>
              <p>
                <strong className="text-text-primary">M-Wallet (Maroc Telecom):</strong> A mobile wallet service that allows Moroccan phone users to pay at select merchants. As a tourist, this is largely impractical as it requires a Moroccan bank account or long-term SIM registration.
              </p>
              <p>
                <strong className="text-text-primary">Inwi Money &amp; Orange Money:</strong> Similar mobile payment services tied to telecom providers. Limited merchant acceptance and primarily designed for Moroccan residents.
              </p>
              <p>
                <strong className="text-text-primary">Apple Pay &amp; Google Pay:</strong> Not widely supported in Morocco. A few international hotel chains and premium retailers may accept contactless NFC payments, but do not rely on these as payment methods.
              </p>
              <p>
                <strong className="text-text-primary">Ride-hailing apps:</strong> InDrive and Careem operate in major cities and accept in-app payment via card, providing a cashless transport option. These are among the most practical digital payment tools available to tourists.
              </p>
              <p>
                <strong className="text-text-primary">Online booking:</strong> Many hotels, riads, tour companies, and activity providers accept online payments through their websites (Visa/Mastercard). Booking and paying in advance online can be convenient and sometimes offers discounts. Many riads also accept payment via WhatsApp-arranged bank transfers.
              </p>
              <p>
                <strong className="text-text-primary">Bottom line for tourists:</strong> Bring enough cash (Dirhams from ATMs) for all daily expenses. Cards for hotels and larger restaurants. Do not expect to go cashless in Morocco; it simply is not possible yet for visitors, especially in medinas, souks, and rural areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RELATED PAGES / CTA
          ============================================================ */}
      <section className="gradient-moroccan py-16 md:py-20">
        <div className="container-morocco">
          <div className="text-center mb-12">
            <p className="text-[var(--color-accent)] font-heading font-semibold text-sm uppercase tracking-widest mb-3">
              Continue Planning
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Related Guides &amp; Tools
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Explore these related resources to help plan your Morocco trip budget and make the most of your money.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                href: '/tips',
                icon: <BookOpen className="w-6 h-6" />,
                title: 'Essential Travel Tips',
                description: 'Complete practical guide covering visa, safety, health, etiquette, transport, and more.',
              },
              {
                href: '/shopping',
                icon: <ShoppingBag className="w-6 h-6" />,
                title: 'Shopping Guide',
                description: 'What to buy, where to find it, and how to get the best prices in Moroccan souks.',
              },
              {
                href: '/safety',
                icon: <ShieldCheck className="w-6 h-6" />,
                title: 'Safety Guide',
                description: 'Stay safe with our guide to scams, emergency numbers, health tips, and more.',
              },
              {
                href: '/scams',
                icon: <AlertTriangle className="w-6 h-6" />,
                title: 'Scam Awareness',
                description: 'Detailed guide to common tourist scams in Morocco and exactly how to avoid them.',
              },
              {
                href: '/food',
                icon: <Coffee className="w-6 h-6" />,
                title: 'Food & Drink Guide',
                description: 'Discover Moroccan cuisine, street food, restaurant etiquette, and dining costs.',
              },
              {
                href: '/itineraries',
                icon: <MapPin className="w-6 h-6" />,
                title: 'Trip Itineraries',
                description: 'Pre-planned routes for 7, 10, and 14-day trips with daily budget estimates.',
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:bg-white/20 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-[var(--color-accent)]">{link.icon}</div>
                  <h3 className="font-heading font-semibold text-white group-hover:text-[var(--color-accent)] transition-colors">
                    {link.title}
                  </h3>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{link.description}</p>
                <div className="flex items-center gap-1 mt-3 text-[var(--color-accent)] text-sm font-medium">
                  <span>Read guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          FINAL CTA
          ============================================================ */}
      <section className="bg-[var(--surface-muted)] py-12">
        <div className="container-morocco text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-text-primary mb-4">
            Ready to Plan Your Moroccan Adventure?
          </h2>
          <p className="text-text-secondary mb-6 max-w-xl mx-auto">
            Now that you understand Morocco&apos;s currency and money landscape, explore our city guides and itineraries to start building your perfect trip.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/cities"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-primary)] text-white font-heading font-semibold hover:bg-[var(--color-primary-light)] transition-colors"
            >
              Explore Cities <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/itineraries"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-heading font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-colors"
            >
              View Itineraries <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

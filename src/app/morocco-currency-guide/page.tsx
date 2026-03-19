import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  DollarSign,
  Info,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Building,
  BookOpen,
  ShieldCheck,
  Star,
  MapPin,
  Banknote,
  HelpCircle,
  CreditCard,
  Landmark,
  Wallet,
  ArrowLeftRight,
  CircleDollarSign,
  Coins,
  HandCoins,
  TrendingUp,
  Calculator,
  Globe,
  Clock,
  Receipt,
} from 'lucide-react';

/* =================================================================
   CONSTANTS
   ================================================================= */

const BASE_URL = 'https://citytoursmorocco.com';

/* =================================================================
   SEO METADATA
   ================================================================= */

export const metadata: Metadata = {
  title: 'Morocco Currency Guide 2026 | Moroccan Dirham (MAD) Explained',
  description:
    'Complete guide to Morocco currency. Learn about the Moroccan dirham (MAD), exchange rates, where to exchange money, ATMs, credit card acceptance, daily budgets, and tips for managing money in Morocco.',
  keywords: [
    'Morocco currency',
    'Moroccan dirham',
    'MAD currency',
    'Morocco money',
    'Morocco exchange rate',
    'where to exchange money Morocco',
    'Morocco ATM',
    'Morocco credit cards',
    'Morocco cash',
    'Moroccan dirham guide',
    'Morocco currency exchange',
    'Morocco money tips',
    'Morocco daily budget',
    'Morocco travel money',
    'how much cash Morocco',
    'Morocco bank notes',
    'Morocco coins',
    'Morocco dirham denominations',
    'Morocco currency 2026',
    'Morocco bureau de change',
  ],
  openGraph: {
    title: 'Morocco Currency Guide 2026 | Moroccan Dirham (MAD) Explained',
    description:
      'Everything you need to know about Morocco currency. Exchange rates, ATMs, cards, denominations, budgeting, and practical tips for managing the Moroccan dirham.',
    url: `${BASE_URL}/morocco-currency-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco-money.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan dirham banknotes and coins arranged on a traditional zellige surface',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Currency Guide 2026 | Moroccan Dirham Explained',
    description:
      'Your complete guide to the Moroccan dirham. Exchange rates, ATMs, cards, denominations, and practical money tips for travelers.',
    images: [`${BASE_URL}/images/hero-morocco-money.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-currency-guide` },
};

/* =================================================================
   JSON-LD STRUCTURED DATA
   ================================================================= */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-currency-guide`,
  name: 'Morocco Currency Guide 2026 | Moroccan Dirham (MAD) Explained',
  description:
    'Complete guide to Morocco currency. Learn about the Moroccan dirham (MAD), exchange rates, where to exchange money, ATMs, credit card acceptance, daily budgets, and tips for managing money in Morocco.',
  url: `${BASE_URL}/morocco-currency-guide`,
  image: `${BASE_URL}/images/hero-morocco-money.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-currency-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Currency Guide', item: `${BASE_URL}/morocco-currency-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What currency does Morocco use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco uses the Moroccan dirham, abbreviated as MAD (from the French "Moroccan dirham"). The currency code is MAD and the symbol is .د.م (dirham marocain). One dirham is divided into 100 centimes. The dirham is a semi-controlled currency, meaning its exchange rate is managed by Bank Al-Maghrib, the central bank.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use euros or US dollars in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'While some tourist-oriented shops, hotels, and restaurants in cities like Marrakech may accept euros, the Moroccan dirham is the official and preferred currency. You will get better value and avoid confusion by paying in dirhams. Euros and US dollars can be exchanged at banks, bureaux de change, and airports throughout Morocco.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is the best place to exchange money in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best exchange rates are typically found at licensed bureaux de change in city centers, followed by bank branches. Airport exchange counters offer convenience but slightly worse rates. ATMs generally provide the best overall value when factoring in the interbank rate, though your bank may charge foreign transaction fees. Avoid exchanging money at hotels, which typically offer the worst rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are credit cards widely accepted in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Credit and debit cards are accepted at upscale hotels, restaurants, large shops, and supermarkets in major cities. However, Morocco remains predominantly a cash economy. Souks, street food vendors, petit taxis, small shops, and rural areas are cash-only. Visa and Mastercard are the most widely accepted; American Express is rarely accepted outside luxury hotels.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much cash should I bring to Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You do not need to bring large amounts of foreign cash. ATMs are widely available in cities and towns throughout Morocco. Bring a small amount of euros or US dollars (from 100-200 equivalent) as backup, and withdraw dirhams from ATMs as needed. Morocco law prohibits importing or exporting more than 2,000 MAD in cash.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the exchange rate for the Moroccan dirham?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As of early 2026, approximate exchange rates are: 1 USD = 9.5-10 MAD, 1 EUR = 10.5-11 MAD, 1 GBP = 12-12.5 MAD. Rates fluctuate, so check current rates before your trip. The dirham is pegged to a currency basket weighted 60% euro and 40% US dollar, which keeps it relatively stable.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I exchange money before arriving in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It is not necessary or recommended to exchange money before arriving. The Moroccan dirham is difficult to obtain outside Morocco and rates abroad are typically poor. Instead, withdraw dirhams from an ATM at the airport upon arrival or exchange a small amount at the airport bureau de change to cover immediate expenses like a taxi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I take Moroccan dirhams out of the country?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Moroccan law restricts the export of dirhams to a maximum of 2,000 MAD. If you have excess dirhams at the end of your trip, exchange them back to your home currency at the airport bureau de change before departing. Keep your exchange receipts as proof, since bureaux de change may require them for reconversion.',
      },
    },
  ],
};

/* =================================================================
   DATA: DENOMINATIONS
   ================================================================= */

const banknotes = [
  { value: '20 MAD', color: 'Purple / violet', feature: 'King Mohammed VI portrait, Hassan II Mosque', note: 'Commonly used for small purchases and tips' },
  { value: '50 MAD', color: 'Green', feature: 'King Mohammed VI portrait, historical landmarks', note: 'Widely circulated, good for mid-range transactions' },
  { value: '100 MAD', color: 'Brown / amber', feature: 'King Mohammed VI portrait, Moroccan architecture', note: 'Standard ATM dispensation note' },
  { value: '200 MAD', color: 'Blue', feature: 'King Mohammed VI portrait, modern infrastructure', note: 'Largest common note, ATMs often dispense these' },
];

const coins = [
  { value: '5 centimes', material: 'Aluminum', note: 'Rarely used, being phased out of circulation' },
  { value: '10 centimes', material: 'Brass', note: 'Uncommon but still in circulation' },
  { value: '20 centimes', material: 'Brass', note: 'Used for rounding small purchases' },
  { value: '50 centimes', material: 'Copper-nickel', note: 'Common in daily transactions' },
  { value: '1 MAD', material: 'Copper-nickel', note: 'Essential coin for everyday use' },
  { value: '2 MAD', material: 'Copper-nickel', note: 'Frequently used for cafes and transport' },
  { value: '5 MAD', material: 'Bimetallic', note: 'Larger coin, convenient for small tips' },
  { value: '10 MAD', material: 'Bimetallic', note: 'Largest coin, valuable for tipping and transit' },
];

/* =================================================================
   DATA: WHERE TO EXCHANGE
   ================================================================= */

const exchangeOptions = [
  {
    title: 'ATMs (Guichets Automatiques)',
    icon: Landmark,
    rating: 'Best overall value',
    description:
      'ATMs are the most convenient way to get dirhams. They are widely available in all cities and most towns. Major networks include Attijariwafa Bank, BMCE Bank, and Banque Populaire.',
    pros: [
      'Interbank exchange rate (typically the best rate)',
      'Available 24/7 in cities and tourist areas',
      'Dispense 100 and 200 MAD notes',
      'Secure and straightforward to use',
    ],
    cons: [
      'Your bank may charge foreign ATM fees (from 15-30 MAD equivalent)',
      'Some ATMs have withdrawal limits (from 2,000-4,000 MAD per transaction)',
      'Rare in very remote rural areas',
      'Occasionally out of service on weekends',
    ],
    tip: 'Always decline the ATM\'s "conversion" offer (dynamic currency conversion). Choose to be charged in MAD, not your home currency, to get the better rate from your own bank.',
  },
  {
    title: 'Bureaux de Change',
    icon: ArrowLeftRight,
    rating: 'Good rates, convenient',
    description:
      'Licensed exchange offices are found throughout major cities, especially near tourist areas, medinas, and commercial districts. They offer competitive rates with no commission.',
    pros: [
      'No commission fees at most offices',
      'Quick service, minimal paperwork',
      'Competitive rates, especially in city centers',
      'Can exchange various foreign currencies',
    ],
    cons: [
      'Rates vary between offices; shop around',
      'Opening hours limited (typically 9 AM to 8 PM)',
      'Some may offer poor rates on less common currencies',
      'Receipts needed if you want to reconvert dirhams later',
    ],
    tip: 'Compare rates at 2-3 bureaux de change before committing. Rates in medinas may differ from those on main commercial avenues. Always count your money before leaving the counter.',
  },
  {
    title: 'Banks',
    icon: Building,
    rating: 'Reliable but slower',
    description:
      'Moroccan banks like Attijariwafa, BMCE, and Banque Populaire offer currency exchange services. They provide reliable rates but involve more paperwork and waiting time.',
    pros: [
      'Regulated and trustworthy',
      'Official receipts for reconversion',
      'Can handle large exchange amounts',
      'Available in every city and most towns',
    ],
    cons: [
      'Slower service with paperwork and ID requirements',
      'Limited hours (Mon-Fri, 8:15 AM to 3:45 PM typically)',
      'May charge small commission fees',
      'Closed on weekends and Moroccan holidays',
    ],
    tip: 'Banks are best for exchanging larger amounts or if you need an official receipt. Bring your passport, as it is required for all exchange transactions at banks.',
  },
  {
    title: 'Airport Exchange Counters',
    icon: Globe,
    rating: 'Convenient but pricier',
    description:
      'Every major Moroccan airport (Marrakech Menara, Casablanca Mohammed V, Fes-Saiss, Rabat-Sale) has exchange counters in the arrivals hall. They are open for all incoming flights.',
    pros: [
      'Open when flights arrive, even late at night',
      'Immediate access upon landing',
      'Multiple providers at larger airports',
      'No need to search for exchange in an unfamiliar city',
    ],
    cons: [
      'Rates are typically 3-5% worse than city bureaux',
      'Long queues during peak arrival times',
      'Limited negotiation on rates',
      'May not accept all currencies',
    ],
    tip: 'Exchange only a small amount at the airport (from 200-500 MAD) for your taxi and initial expenses. Get a better rate in the city the next day or use an ATM just outside the arrivals hall.',
  },
];

/* =================================================================
   DATA: CREDIT CARD ACCEPTANCE
   ================================================================= */

const cardAcceptance = [
  { place: 'Upscale hotels and riads', accepted: true, note: 'Visa and Mastercard widely accepted; Amex at luxury chains only' },
  { place: 'Mid-range restaurants', accepted: true, note: 'Most accept cards, but always carry cash as backup' },
  { place: 'Large supermarkets (Marjane, Carrefour)', accepted: true, note: 'Cards accepted at checkout; contactless increasingly available' },
  { place: 'Tourist shops and galleries', accepted: true, note: 'Many accept cards but may add a 2-3% surcharge' },
  { place: 'Souks and market stalls', accepted: false, note: 'Cash only; bring small denominations for bargaining' },
  { place: 'Street food vendors', accepted: false, note: 'Strictly cash; bring coins and small notes' },
  { place: 'Petit taxis', accepted: false, note: 'Cash only; agree on fare or insist on meter' },
  { place: 'Grand taxis', accepted: false, note: 'Cash only; negotiate price before departure' },
  { place: 'Rural areas and small towns', accepted: false, note: 'Very limited card acceptance; plan to have cash' },
  { place: 'Gas stations', accepted: true, note: 'Most major stations accept cards; some rural ones are cash only' },
  { place: 'Pharmacies', accepted: true, note: 'Generally accepted in cities; cash preferred in smaller towns' },
  { place: 'Museums and monuments', accepted: true, note: 'Major sites accept cards; smaller ones may be cash only' },
];

/* =================================================================
   DATA: DAILY BUDGET ESTIMATES
   ================================================================= */

const dailyBudgets = [
  {
    level: 'Budget Traveler',
    range: 'From 350-550 MAD / day',
    icon: Wallet,
    highlight: false,
    items: [
      { category: 'Accommodation', cost: 'From 150-250 MAD', detail: 'Hostel dorm or budget riad' },
      { category: 'Food', cost: 'From 80-120 MAD', detail: 'Street food, local eateries' },
      { category: 'Transport', cost: 'From 30-50 MAD', detail: 'Petit taxis, walking' },
      { category: 'Activities', cost: 'From 50-80 MAD', detail: 'Free walking, budget sites' },
      { category: 'Miscellaneous', cost: 'From 40-50 MAD', detail: 'Tips, water, SIM data' },
    ],
  },
  {
    level: 'Mid-Range Traveler',
    range: 'From 800-1,400 MAD / day',
    icon: Star,
    highlight: true,
    items: [
      { category: 'Accommodation', cost: 'From 400-700 MAD', detail: 'Mid-range riad or 3-star hotel' },
      { category: 'Food', cost: 'From 150-300 MAD', detail: 'Mix of local and tourist restaurants' },
      { category: 'Transport', cost: 'From 50-100 MAD', detail: 'Taxis, occasional transfer' },
      { category: 'Activities', cost: 'From 100-200 MAD', detail: 'Guided tours, museums, hammam' },
      { category: 'Miscellaneous', cost: 'From 100-100 MAD', detail: 'Tips, shopping, extras' },
    ],
  },
  {
    level: 'Luxury Traveler',
    range: 'From 2,500-5,000+ MAD / day',
    icon: TrendingUp,
    highlight: false,
    items: [
      { category: 'Accommodation', cost: 'From 1,500-3,000 MAD', detail: 'Luxury riad, 5-star hotel' },
      { category: 'Food', cost: 'From 400-800 MAD', detail: 'Fine dining, cooking classes' },
      { category: 'Transport', cost: 'From 200-400 MAD', detail: 'Private driver, transfers' },
      { category: 'Activities', cost: 'From 300-500 MAD', detail: 'Private guides, spa, golf' },
      { category: 'Miscellaneous', cost: 'From 200-300 MAD', detail: 'Tips, souvenirs, premium extras' },
    ],
  },
];

/* =================================================================
   DATA: BARGAINING TIPS
   ================================================================= */

const bargainingTips = [
  {
    title: 'Start at 30-40% of the asking price',
    icon: HandCoins,
    detail:
      'Vendors in souks expect negotiation. Their initial price is typically 2-3 times what they will accept. Starting at a third of the quoted price gives you room to meet in the middle.',
  },
  {
    title: 'Always bargain in dirhams, not euros',
    icon: Banknote,
    detail:
      'Negotiating in MAD gives you more precise control over the price and avoids confusion over exchange rates. Vendors may quote in euros to make prices seem lower to tourists.',
  },
  {
    title: 'Walk away if the price is too high',
    icon: ArrowRight,
    detail:
      'The "walk away" technique is powerful. If you start to leave, the vendor will often call you back with a lower offer. Only use this if you are genuinely prepared to not buy.',
  },
  {
    title: 'Compare prices at multiple stalls first',
    icon: MapPin,
    detail:
      'Before committing, browse similar items at 3-4 stalls to understand the going rate. This gives you a realistic baseline for negotiations and prevents overpaying.',
  },
  {
    title: 'Bundle purchases for a better deal',
    icon: Receipt,
    detail:
      'Buying multiple items from the same vendor gives you leverage. Offer a total price for everything rather than negotiating item by item. Vendors prefer larger transactions.',
  },
  {
    title: 'Keep small bills separate',
    icon: Wallet,
    detail:
      'Never show a vendor your full wallet or a large stack of cash. Keep small bills in one pocket for purchases and larger notes hidden. This prevents vendors from anchoring to a high price.',
  },
];

/* =================================================================
   DATA: FAQ
   ================================================================= */

const faqs = [
  {
    question: 'What currency does Morocco use?',
    answer:
      'Morocco uses the Moroccan dirham (MAD). One dirham is divided into 100 centimes, though centimes are rarely used in practice. The currency symbol is .د.م. The dirham has been Morocco\'s official currency since 1960, replacing the Moroccan franc. It is issued and regulated by Bank Al-Maghrib, Morocco\'s central bank.',
  },
  {
    question: 'Can I use euros or US dollars in Morocco?',
    answer:
      'While some tourist shops and hotels may accept euros informally, the Moroccan dirham is the only legal tender. You will get significantly better value by paying in dirhams. Exchange your foreign currency at a bureau de change, bank, or ATM upon arrival. Keeping a small euro or dollar reserve (from 50-100 equivalent) is wise for emergencies.',
  },
  {
    question: 'Where is the best place to exchange money in Morocco?',
    answer:
      'ATMs generally offer the best effective exchange rate (interbank rate minus your bank\'s fee). Bureaux de change in city centers are a close second, offering competitive rates with no commission. Banks are reliable but slow. Airport counters are convenient but offer 3-5% worse rates. Avoid exchanging at hotels, which typically add a hefty markup.',
  },
  {
    question: 'How much cash should I carry daily in Morocco?',
    answer:
      'A mid-range traveler should carry from 400-600 MAD in cash daily. Budget travelers can manage with from 200-350 MAD. Keep a mix of denominations: several 20 MAD notes for tips and small purchases, 50 MAD notes for meals and taxis, and 100-200 MAD notes for larger expenses. Withdraw cash every 2-3 days rather than carrying large amounts.',
  },
  {
    question: 'Are ATMs safe and reliable in Morocco?',
    answer:
      'ATMs in Morocco are generally safe and reliable, especially those attached to bank branches. Use ATMs in well-lit, busy areas and inside bank lobbies when possible. Cover the keypad when entering your PIN. Avoid standalone ATMs in isolated locations. Major banks like Attijariwafa, BMCE, and Banque Populaire have extensive, well-maintained ATM networks.',
  },
  {
    question: 'Should I exchange money before arriving in Morocco?',
    answer:
      'No, exchanging before arrival is not recommended. The Moroccan dirham is difficult to find outside Morocco, and rates abroad are typically very poor. Instead, withdraw dirhams from an ATM at the airport upon landing, or exchange a small amount (from 200-500 MAD worth) at the airport bureau de change for your taxi and first meal.',
  },
  {
    question: 'Can I take Moroccan dirhams out of the country?',
    answer:
      'Moroccan law limits the export of dirhams to 2,000 MAD. Exchange any excess dirhams back to your home currency at the airport before departure. Keep your original exchange receipts, as some bureaux de change require proof of initial conversion. It is best to plan your withdrawals so you do not end up with too many leftover dirhams.',
  },
  {
    question: 'What should I do if an ATM eats my card?',
    answer:
      'If an ATM retains your card, note the bank name, ATM location, and time. Visit the bank branch during working hours (usually the next morning) with your passport. Most banks can retrieve your card within 24-48 hours. In the meantime, use a backup card or exchange cash at a bureau de change. Always travel with at least two payment methods.',
  },
];

/* =================================================================
   PAGE COMPONENT
   ================================================================= */

export default function MoroccoCurrencyGuidePage() {
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

      {/* -- Hero Section -- */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/hero-morocco-money.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Currency Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Banknote className="w-4 h-4" />
            Travel Essentials
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Currency Guide:
            <br className="hidden md:block" /> The Moroccan Dirham
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Everything you need to know about money in Morocco. Exchange rates,
            denominations, ATMs, credit cards, budgeting, and practical tips
            for handling the Moroccan dirham (MAD).
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* -- MAD Overview -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              The Moroccan Dirham at a Glance
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                The <strong>Moroccan dirham (MAD)</strong> is the official currency of the
                Kingdom of Morocco. Its name derives from the Greek &quot;drachma,&quot; reflecting
                centuries of Mediterranean trade influence. The currency code is <strong>MAD</strong> and
                the local symbol is <strong>.د.م</strong> (dirham marocain). One dirham is subdivided
                into 100 centimes, though centime coins are increasingly rare in everyday use.
              </p>
              <p>
                The dirham is managed by <strong>Bank Al-Maghrib</strong>, Morocco&apos;s central bank,
                which pegs it to a basket weighted 60% euro and 40% US dollar. This peg keeps
                the dirham relatively stable compared to freely floating currencies, making it
                easier for travelers to budget. Since 2018, Morocco has gradually widened the
                fluctuation band, allowing the dirham to move within a range around the
                reference rate.
              </p>
              <p>
                Morocco is predominantly a <strong>cash economy</strong>. While card payments are
                growing in cities, you will need dirhams in cash for souks, taxis, street food,
                tips, and most daily transactions outside of hotels and upscale restaurants.
                Planning your cash needs ahead of time is essential for a smooth trip.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            <div className="card-moroccan p-4 text-center">
              <CircleDollarSign className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Currency Code</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">MAD</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Coins className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Subunit</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">100 Centimes</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Landmark className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Central Bank</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">Bank Al-Maghrib</div>
            </div>
            <div className="card-moroccan p-4 text-center">
              <Globe className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
              <div className="text-xs text-[var(--text-muted)] mb-1">Peg Basket</div>
              <div className="text-lg font-bold text-[var(--text-primary)]">60% EUR / 40% USD</div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Denominations -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Banknote className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Dirham Banknotes &amp; Coins
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Familiarize yourself with Moroccan currency denominations before your trip so you can quickly identify notes and coins.
          </p>

          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Banknotes in Circulation
            </h3>
            <div className="card-moroccan overflow-hidden mb-10">
              <div className="grid grid-cols-4 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
                <div className="p-3 px-4">Denomination</div>
                <div className="p-3 px-4">Color</div>
                <div className="p-3 px-4">Key Features</div>
                <div className="p-3 px-4">Usage Note</div>
              </div>
              {banknotes.map((note, i) => (
                <div
                  key={note.value}
                  className={`grid grid-cols-4 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
                >
                  <div className="p-3 px-4 font-semibold text-[var(--color-accent)]">{note.value}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{note.color}</div>
                  <div className="p-3 px-4 text-[var(--text-secondary)]">{note.feature}</div>
                  <div className="p-3 px-4 text-[var(--text-muted)]">{note.note}</div>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Coins in Circulation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {coins.map((coin) => (
                <div key={coin.value} className="card-moroccan p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Coins className="w-4 h-4 text-[var(--color-gold)]" />
                    <span className="text-sm font-bold text-[var(--text-primary)]">{coin.value}</span>
                  </div>
                  <p className="text-xs text-[var(--text-muted)] mb-1">{coin.material}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{coin.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -- Exchange Rates -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <TrendingUp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Approximate Exchange Rates
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Reference rates for major currencies against the Moroccan dirham. Actual rates vary by exchange method and provider.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Rates are approximate as of early 2026 and fluctuate. Check current rates before exchanging.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-moroccan p-6 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)] mb-2">1 USD</div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">= ~9.5-10 MAD</div>
              <p className="text-sm text-[var(--text-muted)]">US Dollar</p>
            </div>
            <div className="card-moroccan p-6 text-center border-2 border-[var(--color-accent)]">
              <div className="text-2xl font-bold text-[var(--color-accent)] mb-2">1 EUR</div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">= ~10.5-11 MAD</div>
              <p className="text-sm text-[var(--text-muted)]">Euro</p>
            </div>
            <div className="card-moroccan p-6 text-center">
              <div className="text-2xl font-bold text-[var(--color-accent)] mb-2">1 GBP</div>
              <div className="text-3xl font-bold text-[var(--text-primary)] mb-1">= ~12-12.5 MAD</div>
              <p className="text-sm text-[var(--text-muted)]">British Pound</p>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Quick Conversion Tip
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  For a rough mental conversion from MAD to USD, divide by 10. So 100 MAD is
                  roughly $10 USD, 500 MAD is roughly $50, and 1,000 MAD is roughly $100.
                  For euros, the ratio is similar but slightly less (divide by 11). This quick
                  math helps you evaluate prices on the spot without pulling out your phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Where to Exchange -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ArrowLeftRight className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Where to Exchange Money in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            ATMs, banks, bureaux de change, and airport counters compared. Choose the best option for your needs.
          </p>

          <div className="space-y-8 max-w-4xl mx-auto">
            {exchangeOptions.map((option) => {
              const OptionIcon = option.icon;
              return (
                <div key={option.title} className="card-moroccan p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <OptionIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {option.title}
                      </h3>
                      <span className="inline-block px-2 py-0.5 text-xs font-medium rounded bg-[var(--color-gold)]/10 text-[var(--color-gold)]">
                        {option.rating}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mb-4">{option.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">Advantages</h4>
                      <ul className="space-y-1.5">
                        {option.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <CheckCircle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--color-accent)] uppercase tracking-wider mb-2">Drawbacks</h4>
                      <ul className="space-y-1.5">
                        {option.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                            <AlertTriangle className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--text-muted)]" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="bg-[var(--surface-muted)] p-3 rounded-lg">
                    <p className="text-xs text-[var(--text-secondary)]">
                      <Info className="w-3 h-3 inline mr-1 text-[var(--color-accent)]" />
                      <strong>Pro Tip:</strong> {option.tip}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Credit Card Acceptance -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CreditCard className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Credit &amp; Debit Card Acceptance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Where you can and cannot use cards in Morocco. Visa and Mastercard are the most widely accepted networks.
          </p>

          <div className="max-w-4xl mx-auto card-moroccan overflow-hidden">
            <div className="grid grid-cols-3 gap-0 bg-[var(--color-accent)] text-white text-sm font-medium">
              <div className="p-3 px-4">Location / Service</div>
              <div className="p-3 px-4 text-center">Cards Accepted?</div>
              <div className="p-3 px-4">Details</div>
            </div>
            {cardAcceptance.map((item, i) => (
              <div
                key={item.place}
                className={`grid grid-cols-3 gap-0 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-[var(--surface-muted)]'}`}
              >
                <div className="p-3 px-4 font-medium text-[var(--text-primary)]">{item.place}</div>
                <div className="p-3 px-4 text-center">
                  {item.accepted ? (
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] inline" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-[var(--text-muted)] inline" />
                  )}
                </div>
                <div className="p-3 px-4 text-[var(--text-muted)]">{item.note}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Card Safety Tips
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Notify your bank before traveling to Morocco to prevent fraud blocks. Use ATMs
                  attached to bank branches rather than standalone machines. Enable transaction
                  alerts on your phone. Carry at least two different cards from different banks
                  as backup. Consider a travel-friendly card with no foreign transaction fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Tipping in MAD -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Tipping in Moroccan Dirhams
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Tipping is customary in Morocco and should always be done in dirhams. Keep small bills ready throughout your trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <DollarSign className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Quick Tipping Amounts
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Restaurants: from 10-15% of the bill
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Cafes: from 2-10 MAD
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Hotel porter: from 10-20 MAD per bag
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Taxi: round up to nearest 5-10 MAD
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Tour guide (full day): from 100-200 MAD
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Parking attendant: from 5-10 MAD
                </li>
              </ul>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <BookOpen className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Tipping Etiquette
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Always tip with your right hand
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Tip discreetly rather than making a show
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Cash tips only; card tipping is not an option
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Keep 20 MAD and 50 MAD notes handy for tips
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  Say &quot;shukran&quot; (thank you) when tipping
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 shrink-0 text-[var(--color-accent)]" />
                  See our{' '}
                  <Link href="/morocco-tipping-guide" className="text-[var(--color-accent)] underline">
                    full tipping guide
                  </Link>{' '}
                  for detailed amounts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -- Bargaining Section -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <HandCoins className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bargaining &amp; Haggling Tips
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Negotiation is expected in Moroccan souks and markets. Knowing how to bargain in dirhams will save you money and enhance the experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {bargainingTips.map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="w-10 h-10 rounded-full bg-[var(--surface-muted)] flex items-center justify-center mb-3">
                    <TipIcon className="w-5 h-5 text-[var(--color-accent)]" />
                  </div>
                  <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    {tip.title}
                  </h3>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{tip.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* -- Daily Budget -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-5xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Calculator className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Daily Budget Estimates in MAD
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            How much to budget per day in Morocco, broken down by travel style. All amounts are in Moroccan dirhams. Seasonal pricing can change.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dailyBudgets.map((budget) => {
              const BudgetIcon = budget.icon;
              return (
                <div
                  key={budget.level}
                  className={`card-moroccan p-6 ${budget.highlight ? 'border-2 border-[var(--color-accent)]' : ''}`}
                >
                  <div className="text-center mb-5">
                    <div className={`w-12 h-12 rounded-full ${budget.highlight ? 'bg-[var(--color-accent)]/10' : 'bg-[var(--surface-muted)]'} flex items-center justify-center mx-auto mb-3`}>
                      <BudgetIcon className={`w-6 h-6 ${budget.highlight ? 'text-[var(--color-accent)]' : 'text-[var(--color-gold)]'}`} />
                    </div>
                    <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {budget.level}
                    </h3>
                    <div className="text-2xl font-bold text-[var(--color-accent)]">{budget.range}</div>
                  </div>
                  <ul className="space-y-3">
                    {budget.items.map((item) => (
                      <li key={item.category} className="flex items-start justify-between text-sm">
                        <div>
                          <span className="font-medium text-[var(--text-primary)]">{item.category}</span>
                          <span className="block text-xs text-[var(--text-muted)]">{item.detail}</span>
                        </div>
                        <span className="text-[var(--color-accent)] font-semibold shrink-0 ml-3">{item.cost}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-8 card-moroccan p-5 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-accent)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  Budget Planning Tip
                </h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  Prices vary by city. Marrakech and Casablanca are the most expensive, while
                  smaller cities like Essaouira, Chefchaouen, and Meknes offer better value. Desert
                  excursions and guided tours are significant one-off costs. Budget an extra from
                  1,000-3,000 MAD for a 2-day Sahara trip or from 500-1,500 MAD for a full-day guided city tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -- Practical Money Tips -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Money Tips
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Clock className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Withdraw Smart
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Withdraw from 1,000-2,000 MAD at a time to minimize ATM fees. Most ATMs dispense
                100 and 200 MAD notes. Ask your hotel to break larger notes into 20s and 50s for
                daily use. Use bank-attached ATMs during banking hours when possible.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Wallet className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Carry Two Payment Methods
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Always have a backup card from a different bank, plus some emergency cash in euros
                or dollars hidden separately from your wallet. If one card gets blocked or an ATM
                retains it, you will not be stranded. Money belts are practical for larger amounts.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <AlertTriangle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Avoid Dynamic Currency Conversion
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When using your card at ATMs or shops, you may be offered to pay in your home
                currency instead of dirhams. Always choose MAD. Dynamic currency conversion adds
                a 3-5% markup. Let your own bank handle the conversion at the better interbank rate.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <Banknote className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Check Notes Carefully
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                When receiving change, check that notes are in good condition and not torn. Heavily
                damaged notes may be refused by other merchants. Be aware of the difference between
                20 and 200 MAD notes, which can look similar in dim lighting. Count your change carefully.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <MapPin className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Plan for Rural Areas
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                ATMs are sparse in rural Morocco, the Atlas Mountains, and the Sahara. Withdraw
                enough cash before leaving cities. For a desert tour, carry from 500-1,000 MAD in
                cash for tips, incidentals, and emergencies. Small villages may not have any ATMs.
              </p>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                <HelpCircle className="w-4 h-4 inline mr-1 text-[var(--color-accent)]" />
                Know the Export Limit
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                You may not export more than 2,000 MAD from Morocco. Spend or exchange excess
                dirhams before departing. Airport bureaux de change handle reconversion, but keep
                your original exchange receipts. Plan your last ATM withdrawal to avoid leftovers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -- FAQ Section -- */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions About Morocco Currency
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.question} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Related Pages -- */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Money &amp; Travel Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <Link href="/money" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Banknote className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Money Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                ATMs, exchange, cards vs cash, and practical money advice.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-tipping-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <HandCoins className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Tipping Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Who to tip, how much, and proper etiquette in MAD.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-trip-cost" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Calculator className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Trip Cost Breakdown
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed cost breakdown for a Morocco trip by budget level.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Wallet className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                How to travel Morocco affordably without missing out.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/tools/currency" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ArrowLeftRight className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Currency Converter
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Convert your currency to Moroccan dirhams instantly.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Try it <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

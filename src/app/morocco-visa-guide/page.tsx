import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  Info,
  ArrowRight,
  Globe,
  Shield,
  ShieldCheck,
  AlertTriangle,
  CheckCircle,
  Clock,
  FileText,
  Stamp,
  BookOpen,
  Plane,
  Users,
  Lightbulb,
  Sparkles,
  MapPin,
  Banknote,
  Scale,
  CircleAlert,
  BadgeCheck,
  Compass,
  Phone,
  Laptop,
  GraduationCap,
  Briefcase,
  Building,
  MessageCircleQuestion,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-visa-guide`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Visa Guide 2026 | Requirements, Visa-Free Countries & How to Apply',
  description:
    'Complete Morocco visa guide for 2026. Visa-free country list (US, UK, EU, Canada, Australia), passport requirements, embassy applications, visa extensions at police HQ, digital nomad visa, work permits, student visas, overstay penalties, and customs rules.',
  keywords: [
    'Morocco visa requirements',
    'do I need a visa for Morocco',
    'Morocco visa',
    'Morocco visa-free countries',
    'Morocco passport requirements',
    'Morocco entry requirements',
    'Morocco e-visa',
    'Morocco visa on arrival',
    'Morocco transit visa',
    'Morocco visa extension',
    'Morocco customs',
    'Morocco overstay penalty',
    'Morocco visa 2026',
    'Morocco 90 day visa',
    'Morocco visa application',
    'Morocco border entry',
    'Morocco digital nomad visa',
    'Morocco work permit',
    'Morocco student visa',
    'Morocco immigration',
  ],
  openGraph: {
    title: 'Morocco Visa Guide 2026 | Requirements, Visa-Free Countries & How to Apply',
    description:
      'Do you need a visa for Morocco? Complete 2026 guide covering visa-free countries, passport requirements, embassy applications, digital nomad visa, work permits, student visas, extensions, and overstay penalties.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Morocco entry requirements and visa guide overview for international travelers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Visa Guide 2026 | Complete Entry Requirements',
    description:
      'Visa-free countries, passport rules, digital nomad visa, work permits, student visas, extensions & penalties. Everything you need to enter Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   FAQ DATA
   ================================================================ */

const faqItems = [
  {
    q: 'Do I need a visa to visit Morocco as a US citizen?',
    a: 'No. US citizens can enter Morocco visa-free and stay for up to 90 days within any 180-day period. You only need a valid passport with at least 6 months validity beyond your entry date and one blank page for the stamp. No pre-registration, no online form, no visa on arrival fee.',
  },
  {
    q: 'How long can I stay in Morocco without a visa?',
    a: 'Visa-free visitors from eligible countries (US, UK, EU, Canada, Australia, and others) receive a 90-day stay upon arrival. This 90-day clock starts the day your passport is stamped at immigration. If you need more time, apply for a visa extension at the nearest Surete Nationale (police station) before your 90 days expire.',
  },
  {
    q: 'What happens if I overstay my 90 days in Morocco?',
    a: 'Overstaying is a serious offense. Penalties include fines starting from 3,000 MAD, detention at exit, deportation at your own expense, a temporary or permanent ban on re-entering Morocco, and a permanent record in the Moroccan immigration system. Set a calendar reminder for 15 days before your limit and either leave or apply for an extension.',
  },
  {
    q: 'Can I work remotely in Morocco on a tourist visa?',
    a: 'Technically, the 90-day visa-free entry is for tourism only. Many digital nomads work remotely during their stay without issue, as Morocco has no specific enforcement against remote work for foreign employers. However, you cannot legally take employment with a Moroccan company on a tourist entry. For stays beyond 90 days or formal remote-work status, look into the developing digital nomad visa framework.',
  },
  {
    q: 'How do I extend my visa in Morocco?',
    a: 'Visit the nearest Surete Nationale (police station) or Bureau des Etrangers (Foreigners Office) at least 15 days before your 90-day period expires. Bring your passport, four passport photos, proof of accommodation, proof of finances, and a valid reason for extension. Processing takes from 1-4 weeks. Extensions are granted for an additional 90 days at the discretion of authorities.',
  },
  {
    q: 'Do I need a transit visa for a layover in Casablanca?',
    a: 'If you stay in the international transit zone at Mohammed V Airport without passing through immigration, you do not need a transit visa regardless of nationality. If you want to leave the airport during a long layover, you must clear immigration, which means you need to be from a visa-free country or hold a valid Moroccan visa.',
  },
  {
    q: 'What documents do I need to apply for a Morocco visa at the embassy?',
    a: 'You need a completed visa application form, two passport-sized photos on a white background, a passport valid for 6+ months, your flight itinerary, hotel booking or invitation letter, travel insurance, bank statements from the last 3 months, and an employment letter or proof of income. The standard visa fee is from 250-400 MAD equivalent in local currency.',
  },
  {
    q: 'Can I do a border run to reset my 90-day Morocco stay?',
    a: 'Some travelers exit to Spain (via Ceuta, Melilla, or ferry to Algeciras) and re-enter Morocco for a fresh 90-day period. This works but is not guaranteed indefinitely. Immigration officers can see your travel history, and frequent border runs may raise questions about your actual purpose of stay. For long-term plans, a visa extension or residency permit is the proper route.',
  },
];

/* ================================================================
   JSON-LD: TRAVEL GUIDE
   ================================================================ */

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Visa Guide 2026 | Requirements, Visa-Free Countries & How to Apply',
  description:
    'Complete guide to Morocco visa requirements in 2026 covering visa-free entry for 69+ countries, passport validity rules, embassy applications, visa extensions, digital nomad visa, work permits, student visas, overstay penalties, and customs regulations.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-morocco.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-19',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Visa Guide', item: PAGE_URL },
    ],
  },
};

/* ================================================================
   JSON-LD: FAQ PAGE
   ================================================================ */

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
   DATA: VISA-FREE COUNTRIES
   ================================================================ */

const visaFreeRegions = [
  {
    region: 'Europe',
    countries: [
      'Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Czech Republic', 'Denmark',
      'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Iceland', 'Ireland',
      'Italy', 'Netherlands', 'Norway', 'Poland', 'Portugal', 'Romania', 'Spain',
      'Sweden', 'Switzerland', 'United Kingdom',
    ],
  },
  {
    region: 'Americas',
    countries: ['United States', 'Canada', 'Brazil', 'Argentina', 'Mexico', 'Chile', 'Peru'],
  },
  {
    region: 'Asia & Oceania',
    countries: ['Japan', 'South Korea', 'Hong Kong', 'Indonesia', 'Philippines', 'Turkey', 'Australia', 'New Zealand'],
  },
  {
    region: 'Africa & Middle East',
    countries: ['Tunisia', 'Senegal', 'Mali', 'Niger', 'Ivory Coast', 'Guinea', 'Gabon', 'Libya', 'Qatar', 'UAE', 'Bahrain', 'Kuwait', 'Saudi Arabia'],
  },
];

/* ================================================================
   DATA: PASSPORT REQUIREMENTS
   ================================================================ */

const passportRequirements = [
  { rule: 'Six-Month Validity', detail: 'Your passport must be valid for at least 6 months beyond your date of entry into Morocco. Airlines may deny boarding if your passport expires within 6 months.', icon: Clock },
  { rule: 'Blank Pages Required', detail: 'You need at least one blank page for the Moroccan entry stamp. Two blank pages recommended if you plan to visit other countries on the same trip.', icon: FileText },
  { rule: 'Machine-Readable Passport', detail: 'Morocco requires a machine-readable passport (MRP) with the two-line code at the bottom of the data page. Handwritten or very old passports may be refused.', icon: BadgeCheck },
  { rule: 'Good Physical Condition', detail: 'Damaged, water-stained, or heavily worn passports may be refused at border control. If your passport has significant wear, renew it before traveling.', icon: ShieldCheck },
  { rule: 'Matching Name on Tickets', detail: 'The name on your passport must exactly match the name on your flight booking. Discrepancies (including middle names) can cause problems at check-in.', icon: Plane },
  { rule: 'Digital Copy Recommended', detail: 'Photograph or scan your passport data page and store it in cloud storage and on your phone. Keep a physical photocopy separate from the original passport.', icon: Phone },
];

/* ================================================================
   DATA: VISA APPLICATION STEPS
   ================================================================ */

const visaApplicationSteps = [
  { step: 1, title: 'Determine Your Visa Type', detail: 'Decide whether you need a short-stay visa (up to 90 days), long-stay visa (over 90 days), work visa, or student visa. Each has different requirements and processing times.' },
  { step: 2, title: 'Locate Your Nearest Embassy or Consulate', detail: 'Find the Moroccan embassy or consulate in your country. Applications must typically be submitted in person. Some countries accept applications through visa processing centers like VFS Global.' },
  { step: 3, title: 'Gather Required Documents', detail: 'Prepare: completed visa application form, passport-sized photos (white background), passport valid for 6+ months, flight itinerary, hotel booking or invitation letter, travel insurance, bank statements (last 3 months), and employment letter or proof of income.' },
  { step: 4, title: 'Pay the Visa Fee', detail: 'The standard Morocco short-stay visa fee is approximately from 250-400 MAD equivalent in your local currency. Fees vary by nationality and visa type. Payment is usually made at the embassy or consulate.' },
  { step: 5, title: 'Submit Your Application', detail: 'Submit all documents in person at the embassy or consulate. Some missions require an appointment booked online in advance. Bring originals and photocopies of all documents.' },
  { step: 6, title: 'Wait for Processing', detail: 'Standard processing takes from 5-15 working days. During peak travel season (summer, holidays), allow extra time. You may be asked to attend an interview or provide additional documents.' },
  { step: 7, title: 'Collect Your Visa', detail: 'Once approved, collect your passport with the visa sticker from the embassy or consulate. Verify all details (name, dates, visa type) are correct before leaving. Some embassies offer postal return for an additional fee.' },
];

/* ================================================================
   DATA: CUSTOMS ALLOWANCES
   ================================================================ */

const customsAllowances = [
  { item: 'Alcohol', allowance: '1 liter of spirits or 1 bottle of wine', icon: Scale },
  { item: 'Tobacco', allowance: '200 cigarettes, or 50 cigars, or 250g of tobacco', icon: BookOpen },
  { item: 'Foreign Currency', allowance: 'Up to 100,000 MAD equivalent without declaration', icon: Banknote },
  { item: 'Gifts & Personal Items', allowance: 'Reasonable quantity for personal use; items valued over 2,000 MAD may be questioned', icon: Users },
  { item: 'Moroccan Dirham', allowance: 'MAD is a restricted currency; you may not import or export more than 2,000 MAD in cash', icon: Shield },
];

const prohibitedItems = [
  'Illegal drugs (severe penalties including imprisonment)',
  'Weapons and ammunition without prior authorization',
  'Drone cameras without advance government authorization',
  'Pornographic material in any format',
  'Items offensive to Islam',
  'Counterfeit goods and pirated material',
  'Certain agricultural products, seeds, and live plants without phytosanitary certificates',
];

/* ================================================================
   DATA: EXTENSION REQUIREMENTS
   ================================================================ */

const extensionDocs = [
  'Valid passport with current entry stamp',
  'Four recent passport-sized photographs (white background)',
  'Completed extension application form (available at the police station)',
  'Proof of accommodation (hotel booking, riad reservation, or rental contract)',
  'Proof of financial means (bank statements, traveler checks, or cash declaration)',
  'Valid reason for extension (tourism, family visit, medical treatment, business)',
  'Copy of your return flight booking or onward travel itinerary',
];

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoVisaGuidePage() {
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
          style={{ backgroundImage: 'url(/images/hero-morocco.webp)' }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Visa Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Globe className="w-4 h-4" />
            Entry Requirements &amp; Visa Information
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Visa Guide
            <br className="hidden md:block" /> for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Do you need a visa for Morocco? Full breakdown of visa-free entry, passport requirements,
            embassy applications, digital nomad considerations, work permits, student visas, extensions,
            and overstay penalties.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
            Everything You Need to Enter Morocco
          </h2>
          <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
            <p>
              Morocco welcomes over 14 million international visitors annually and maintains one of
              the most generous visa policies in Africa. Citizens of 69+ countries can enter visa-free
              for stays up to 90 days, making it one of the easiest North African destinations to reach.
            </p>
            <p>
              Still, the details matter. Passport validity rules trip up even seasoned travelers, customs
              regulations catch people off guard, and the rules around working, studying, or staying
              long-term are poorly documented online. This guide covers every scenario: short tourist
              visits, embassy visa applications for restricted nationalities, extensions at police
              headquarters, digital nomad stays, formal work permits, and student enrollment.
            </p>
            <p>
              All information is current as of March 2026. Visa policies can change, so always verify
              with your nearest Moroccan embassy or the official Ministry of Foreign Affairs website
              before booking flights.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quick Summary Cards ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Morocco Entry at a Glance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Key facts about entering Morocco that every traveler should know before booking flights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Visa-Free Countries', value: '69+', detail: 'Including US, UK, EU, Canada, Australia', icon: Globe },
              { label: 'Visa-Free Stay', value: '90 Days', detail: 'Within a 180-day period', icon: Clock },
              { label: 'Passport Validity', value: '6+ Months', detail: 'Beyond date of entry required', icon: FileText },
              { label: 'Visa Fee (if required)', value: 'from 250 MAD', detail: 'Equivalent in local currency; varies by type', icon: Banknote },
            ].map((fact) => {
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
        </div>
      </section>

      {/* ── Visa-Free Countries List ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <CheckCircle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa-Free Countries for Morocco (90 Days)
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Citizens of the following countries can enter Morocco without a visa and stay for up to
            90 days. This list is current as of 2026 but always verify with your nearest Moroccan
            embassy before traveling.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            This is not an exhaustive list. Some additional countries have bilateral agreements. Check the
            Moroccan Ministry of Foreign Affairs for the complete, up-to-date list.
          </p>

          <div className="space-y-6">
            {visaFreeRegions.map((region) => (
              <div key={region.region} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
                  <MapPin className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                  {region.region}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--surface-muted)] text-sm text-[var(--text-secondary)]"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Country Not Listed?
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  If your country is not on this list, you will likely need to apply for a visa before
                  traveling to Morocco. Contact your nearest Moroccan embassy or consulate for specific
                  requirements. See the &ldquo;How to Apply for a Morocco Visa&rdquo; section below for
                  the step-by-step process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Passport Requirements ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Passport Requirements for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Even if you do not need a visa, your passport must meet these requirements to enter
            Morocco. Check before you book your flights.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {passportRequirements.map((req) => {
              const ReqIcon = req.icon;
              return (
                <div key={req.rule} className="card-moroccan p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ReqIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mt-2">
                      {req.rule}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{req.detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How to Apply for a Visa ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <FileText className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            How to Apply for a Morocco Visa
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            If your country requires a visa for Morocco, follow these steps. Start the
            process at least 4-6 weeks before your planned travel date.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              {visaApplicationSteps.map((s) => (
                <div key={s.step} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                    <span className="text-sm font-bold text-white">{s.step}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Pro Tip: Embassy Wait Times
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Moroccan embassies in major cities (London, Paris, Washington DC) can have long wait
                  times for appointments, especially during summer months. Book your visa appointment as
                  soon as you confirm your travel dates. Some embassies now offer online appointment
                  booking through their websites.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Entry & Exit Stamps ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stamp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Entry &amp; Exit Procedures
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            What to expect at Moroccan immigration when you arrive and depart.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  On Arrival
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>At the immigration counter, an officer will:</p>
                <div className="space-y-2">
                  {[
                    'Check your passport validity (6+ months required)',
                    'Verify you are from a visa-free country or have a valid visa',
                    'Stamp your passport with the entry date and a 90-day authorization',
                    'Ask you to fill out a Fiche de Police (arrival card) with your name, nationality, passport number, and accommodation address',
                    'Occasionally ask about the purpose of your visit and where you are staying',
                    'Keep a record of your entry date -- it determines your 90-day countdown',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  <Plane className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                  On Departure
                </h3>
              </div>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <p>When leaving Morocco, exit immigration will:</p>
                <div className="space-y-2">
                  {[
                    'Check your passport and verify you have not overstayed your 90-day authorization',
                    'Stamp your passport with the exit date',
                    'If you have overstayed, expect detention, fines, and possible deportation proceedings',
                    'Ask to see your boarding pass',
                    'Ensure you are not carrying more than 2,000 MAD in Moroccan currency (restricted for export)',
                    'Allow extra time at busy airports during holiday periods for exit processing',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa Extensions ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa Extensions at Police HQ
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Need to stay longer than 90 days? Here is how to legally extend your stay in Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              Where to Apply
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Visit the nearest Surete Nationale (national police headquarters) or Bureau des Etrangers
              (Foreigners Office) in the city where you are staying. Major cities like Casablanca,
              Marrakech, Rabat, Fes, and Tangier all have dedicated offices. Apply at least 15 days
              before your current 90-day period expires. Do not wait until the last day -- processing
              takes time and late applications complicate matters.
            </p>

            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Required Documents
            </h3>
            <div className="space-y-3">
              {extensionDocs.map((doc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Processing Time &amp; Cost
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Extensions typically take from 1-4 weeks to process. There is no official fee for the
                extension itself, but you will need to pay for passport photos, photocopies, and other
                administrative costs totaling from 50-200 MAD. During the processing period, you will
                receive a receipt (recepisse) that serves as temporary proof of your legal status.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Important Notes
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Extensions are not guaranteed and are granted at the discretion of the authorities. Having
                strong documentation (accommodation, finances, valid reason) significantly improves your
                chances. If denied, you must leave Morocco before your original 90-day period expires.
                For stays exceeding 180 days, you need to apply for a Carte de Sejour (residency permit).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Digital Nomad Visa & Remote Work ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Laptop className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Digital Nomad Visa &amp; Remote Work
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has become a major hub for remote workers. Here is the legal landscape for
            digital nomads as of 2026.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Globe className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                Current Legal Status
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                Morocco does not yet have a dedicated &ldquo;digital nomad visa&rdquo; like Portugal, Spain, or
                the UAE. Remote workers from visa-free countries currently enter on the standard 90-day
                tourist authorization. Many digital nomads work remotely for foreign employers or their own
                businesses during this period without issue, as Moroccan authorities do not actively enforce
                against remote work performed for companies outside Morocco.
              </p>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The Moroccan government has signaled interest in creating a formal digital nomad framework,
                recognizing cities like Marrakech, Essaouira, and Taghazout as growing remote-work
                destinations. No official program has launched as of March 2026, but the conversation is
                active at the policy level.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                Staying Beyond 90 Days as a Remote Worker
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Digital nomads who want to stay longer than 90 days have a few options:
                </p>
                <div className="space-y-2">
                  {[
                    'Apply for a visa extension at the local Surete Nationale (see section above). State your reason as continued tourism or personal reasons. Extensions are discretionary.',
                    'Exit Morocco before 90 days, spend time in another country (Spain, Portugal, or elsewhere), and re-enter for a fresh 90-day period. Popular exits include the ferry to Spain or flights to the Canary Islands.',
                    'Apply for a Carte de Sejour (residency permit) if you plan to stay 6+ months. This requires proof of income, accommodation, and health insurance. Processing is bureaucratic and can take weeks.',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Building className="w-5 h-5 inline-block text-[var(--color-accent)] mr-2" />
                Coworking &amp; Nomad Infrastructure
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco has strong internet infrastructure in major cities. Fiber connections in
                Casablanca and Rabat deliver 100+ Mbps. Coworking spaces operate in Marrakech (The Spot,
                Kech Cowork), Essaouira (Sun Desk), Taghazout (Taghazout Cowork), Rabat, and Tangier.
                Monthly coworking memberships run from 1,000-2,500 MAD. Many cafes and riads also offer
                reliable Wi-Fi. The cost of living is significantly lower than Western Europe, with
                comfortable monthly budgets starting from 8,000-12,000 MAD including rent, food, and
                coworking. Seasonal pricing can change during peak tourist months.
              </p>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Tax Considerations
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  If you stay in Morocco for more than 183 days in a calendar year, you may become a
                  Moroccan tax resident. This means your worldwide income could be subject to Moroccan
                  taxation. Consult a tax professional familiar with both your home country and Moroccan
                  tax law before committing to a long-term stay. Most digital nomads on 90-day rotations
                  do not trigger tax residency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Work Permits ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Briefcase className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Work Permits in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Taking a job with a Moroccan employer requires a formal work permit. Here is how the
            process works.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Who Needs a Work Permit?
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Any foreign national employed by a Moroccan company or organization must have a work
                permit (Attestation de Travail). This applies to salaried positions, contract work,
                internships exceeding 3 months, and freelance work billed to Moroccan clients. Remote
                workers employed by foreign companies outside Morocco are in a gray area (see the
                digital nomad section above).
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Employer-Sponsored Process
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                The employer initiates the work permit application through ANAPEC (the national
                employment agency). They must prove that no qualified Moroccan candidate is available
                for the position. Once ANAPEC approves, the employer submits the permit application
                to the Ministry of Labor. Processing takes from 4-8 weeks. The work permit is tied
                to a specific employer and position.
              </p>
            </div>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-4">
              Required Documents for Work Permits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                'Valid passport with 6+ months validity',
                'Signed employment contract in French or Arabic',
                'Employer registration documents (CNSS, patente)',
                'Diploma or professional qualifications (apostilled)',
                'Criminal background check from home country',
                'Medical certificate from a Moroccan doctor',
                'Four passport-sized photographs',
                'Proof of accommodation in Morocco',
              ].map((doc, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                  <p className="text-sm text-[var(--text-secondary)]">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Carte de Sejour for Workers
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Once your work permit is approved, you apply for a Carte de Sejour (residency card)
                  at the local Surete Nationale. The initial card is valid for 1 year and renewable.
                  After continuous legal residence and employment in Morocco, you may be eligible for
                  a 10-year residency card.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Student Visas ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <GraduationCap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Student Visas for Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Studying at a Moroccan university or language school? Here is what you need for a student
            visa and residency.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Short Language Courses (Under 90 Days)
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                If you are from a visa-free country and your Arabic, Darija, or French language course
                is shorter than 90 days, you can attend on your standard tourist entry. No student visa
                is needed. Many language schools in Fes, Rabat, and Marrakech offer 2-12 week intensive
                programs that fall within this window.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Long-Term University Enrollment
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                For degree programs or courses exceeding 90 days, you need a student visa obtained from
                a Moroccan embassy before arrival. After entering Morocco, you apply for a student Carte
                de Sejour at the local police. The student residency card is renewable annually for the
                duration of your program.
              </p>
              <h4 className="text-sm font-[family-name:var(--font-heading)] font-semibold text-[var(--text-primary)] mb-3">
                Documents for a Student Visa
              </h4>
              <div className="space-y-2">
                {[
                  'Acceptance letter from a recognized Moroccan educational institution',
                  'Valid passport with 6+ months validity',
                  'Completed visa application form',
                  'Proof of financial means (bank statements, scholarship letter, or sponsor affidavit)',
                  'Medical certificate and proof of health insurance',
                  'Criminal background check from home country',
                  'High school diploma or university transcripts (apostilled and translated into French or Arabic)',
                  'Four passport-sized photographs on white background',
                ].map((doc, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[var(--color-gold)] mt-0.5 shrink-0" />
                    <p className="text-sm text-[var(--text-secondary)]">{doc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Popular Universities for International Students
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Morocco has several universities that actively recruit international students.
                Al Akhawayn University in Ifrane teaches in English. Mohammed V University in Rabat,
                Universite Hassan II in Casablanca, and Universite Cadi Ayyad in Marrakech offer
                programs in French and Arabic. Tuition for public universities is heavily subsidized,
                with annual fees from 1,000-5,000 MAD for Moroccan and African students, and from
                20,000-80,000 MAD for private institutions. Seasonal pricing can change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Customs Regulations ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Scale className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Customs Regulations
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Know what you can and cannot bring into Morocco to avoid delays and confiscation at
            the border.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <CheckCircle className="w-5 h-5 inline-block text-[var(--color-gold)] mr-2" />
              Duty-Free Allowances
            </h3>
            <div className="space-y-4">
              {customsAllowances.map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div key={item.item} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <ItemIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[var(--text-primary)]">{item.item}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{item.allowance}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="card-moroccan p-6 md:p-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-6">
              <AlertTriangle className="w-5 h-5 inline-block text-red-600 mr-2" />
              Prohibited &amp; Restricted Items
            </h3>
            <div className="space-y-3">
              {prohibitedItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <CircleAlert className="w-3.5 h-3.5 text-red-600" />
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Medication Note
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Carry all prescription medications in their original pharmacy packaging with a doctor&apos;s
                  letter explaining the medication and dosage. Some medications that are over-the-counter in
                  your country may be controlled substances in Morocco. If in doubt, check with the Moroccan
                  embassy before traveling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Overstaying Penalties ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Overstay Penalties
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Overstaying your authorized stay in Morocco is taken seriously. Understand the consequences
            before you let your 90 days slip.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-4">
              {[
                {
                  penalty: 'Fines',
                  detail: 'Fines starting from 3,000 MAD and increasing based on the length of overstay. Extended overstays can result in fines of from 10,000 MAD or more.',
                  severity: 'Moderate',
                },
                {
                  penalty: 'Detention at Exit',
                  detail: 'When attempting to leave Morocco with an expired authorization, you may be detained at the airport or border crossing for questioning and processing, which can take several hours to days.',
                  severity: 'Serious',
                },
                {
                  penalty: 'Deportation',
                  detail: 'Authorities may deport overstayers at their own expense. You will be escorted to the airport and put on the next available flight to your home country.',
                  severity: 'Serious',
                },
                {
                  penalty: 'Entry Ban',
                  detail: 'Overstayers may receive a temporary or permanent ban from re-entering Morocco. The duration depends on the length of overstay and circumstances.',
                  severity: 'Severe',
                },
                {
                  penalty: 'Criminal Record',
                  detail: 'Repeated or severe overstays can result in criminal charges under Moroccan immigration law, which creates a permanent record in the Moroccan system.',
                  severity: 'Severe',
                },
              ].map((item) => (
                <div key={item.penalty} className="flex items-start gap-4 p-4 bg-white/50 rounded-lg">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.severity === 'Severe' ? 'bg-red-100' : item.severity === 'Serious' ? 'bg-amber-100' : 'bg-yellow-50'}`}>
                    <CircleAlert className={`w-5 h-5 ${item.severity === 'Severe' ? 'text-red-600' : item.severity === 'Serious' ? 'text-amber-600' : 'text-yellow-600'}`} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {item.penalty}
                      </h3>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.severity === 'Severe' ? 'bg-red-100 text-red-700' : item.severity === 'Serious' ? 'bg-amber-100 text-amber-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {item.severity}
                      </span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  How to Avoid Overstaying
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  Set a calendar reminder for 15 days before your 90-day limit. If you want to stay longer,
                  apply for an extension well in advance. Alternatively, exit Morocco before your 90 days
                  expire, spend time in another country, and re-enter for a fresh 90-day period. Note that
                  frequent border runs may raise suspicion with immigration officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MessageCircleQuestion className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Morocco visa requirements and entry procedures.
          </p>

          <div className="space-y-4">
            {faqItems.map((faq) => (
              <div key={faq.q} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.q}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Related Travel Guides
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'First Time in Morocco',
                description: 'Step-by-step guide for first-time visitors covering arrival, transport, money, and culture.',
                href: '/morocco-first-time',
                icon: Compass,
              },
              {
                title: 'Morocco Safety Tips',
                description: 'Scam avoidance, ATM safety, solo travel advice, emergency numbers, and embassy contacts.',
                href: '/morocco-safety-tips',
                icon: Shield,
              },
              {
                title: 'Digital Nomad Morocco',
                description: 'Coworking spaces, internet speeds, cost of living, and the best cities for remote work.',
                href: '/morocco-digital-nomad',
                icon: Laptop,
              },
              {
                title: 'Morocco Transport Guide',
                description: 'Trains, buses, grand taxis, rental cars, and domestic flights across Morocco.',
                href: '/morocco-transport',
                icon: MapPin,
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

      {/* ── Final CTA ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-3xl text-center">
          <Shield className="w-12 h-12 text-[var(--color-accent)] mx-auto mb-6" />
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-4">
            Ready to Visit Morocco?
          </h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            Now that you understand the visa requirements, passport rules, and entry procedures,
            you are ready to plan the rest of your trip. Check your passport validity, confirm your
            visa status, and start exploring our destination guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              First Time in Morocco
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-safety-tips"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              Morocco Safety Tips
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-xs text-[var(--text-muted)] mt-8">
            <Info className="w-3 h-3 inline mr-1" />
            Visa policies can change. Always verify current requirements with your nearest Moroccan
            embassy or the official Moroccan Ministry of Foreign Affairs website before traveling.
            Information on this page is current as of March 2026.
          </p>
        </div>
      </section>
    </>
  );
}

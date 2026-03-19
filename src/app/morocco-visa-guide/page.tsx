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
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Visa Guide 2026 | Requirements, Visa-Free Countries & How to Apply',
  description:
    'Complete Morocco visa guide for 2026. Check if you need a visa, visa-free country list, passport requirements, how to apply, e-visa updates, transit visas, customs rules, overstaying penalties, and visa extensions. Everything you need to enter Morocco legally.',
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
    'Morocco visa guide',
    'Morocco immigration',
  ],
  openGraph: {
    title: 'Morocco Visa Guide 2026 | Requirements, Visa-Free Countries & How to Apply',
    description:
      'Do you need a visa for Morocco? Complete 2026 guide covering visa-free countries, passport requirements, e-visa updates, customs, extensions, and overstaying penalties.',
    url: `${BASE_URL}/morocco-visa-guide`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan passport control area representing the comprehensive Morocco visa requirements guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Visa Guide 2026 | Complete Entry Requirements',
    description:
      'Visa-free countries, passport rules, e-visa updates, customs, extensions & penalties. Everything you need to enter Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-visa-guide` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-visa-guide`,
  name: 'Morocco Visa Guide 2026 | Requirements, Visa-Free Countries & How to Apply',
  description:
    'Complete guide to Morocco visa requirements in 2026, covering visa-free entry for 69+ countries, passport validity rules, how to apply for a Morocco visa, e-visa updates, transit visas, customs regulations, overstaying penalties, and visa extensions.',
  url: `${BASE_URL}/morocco-visa-guide`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-visa-guide`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Visa Guide', item: `${BASE_URL}/morocco-visa-guide` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a visa to visit Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Citizens of 69+ countries including the US, UK, EU member states, Canada, Australia, Japan, and Brazil do not need a visa for stays up to 90 days. Your passport must be valid for at least 6 months beyond your entry date. Citizens of countries not on the visa-free list must apply for a visa at a Moroccan embassy or consulate before traveling.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can I stay in Morocco without a visa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visa-free visitors can stay in Morocco for up to 90 days within a 180-day period. This is stamped in your passport on arrival. Overstaying is a serious offense that can result in fines from 3,000 MAD, detention, deportation, and a future entry ban. If you need more time, apply for a visa extension at the local police station (Surete Nationale) before your 90 days expire.',
      },
    },
    {
      '@type': 'Question',
      name: 'What passport requirements does Morocco have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your passport must be valid for at least 6 months beyond your date of entry into Morocco. It must have at least one blank page for the entry stamp. Machine-readable passports are required. Damaged or heavily worn passports may be refused at the border.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I extend my visa in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you can apply for a visa extension at the nearest Surete Nationale (police station) or Bureau des Etrangers (Foreigners Office) before your 90-day visa-free period expires. You will need your passport, passport photos, proof of accommodation, proof of financial means, and a valid reason for extension. Extensions are typically granted for an additional 90 days. Apply at least 15 days before your current authorization expires.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Morocco have an e-visa system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco has been developing an electronic visa (e-visa) system. As of 2026, the e-visa portal is being rolled out for select nationalities that require a visa. Check the official Moroccan Ministry of Foreign Affairs website for the latest updates on eligible countries and the application process. Most Western travelers do not need any visa and can enter visa-free for 90 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I overstay my visa in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Overstaying your visa or visa-free period in Morocco is a serious offense. Penalties include fines starting from 3,000 MAD, detention at the airport or police station, deportation at your own expense, a ban on re-entering Morocco for a period determined by authorities, and a permanent record in the Moroccan immigration system. Always leave before your authorized stay expires or apply for an extension in advance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a transit visa for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you are transiting through a Moroccan airport and staying in the international transit zone without passing through immigration, you generally do not need a transit visa regardless of your nationality. However, if you wish to leave the airport during a layover, you must meet the entry requirements for Morocco, which means either being from a visa-free country or having a valid Moroccan visa.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I bring into Morocco through customs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Visitors can bring personal effects, one liter of alcohol, 200 cigarettes or 50 cigars, and up to 100,000 MAD equivalent in foreign currency without declaration. Amounts exceeding this must be declared. Prohibited items include drugs, weapons, drone cameras without prior authorization, and pornographic material. Prescription medications should be in original packaging with a doctor letter.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: VISA-FREE COUNTRIES
   ═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   DATA: PASSPORT REQUIREMENTS
   ═══════════════════════════════════════════════════════════════ */

const passportRequirements = [
  { rule: 'Six-Month Validity', detail: 'Your passport must be valid for at least 6 months beyond your date of entry into Morocco. Airlines may deny boarding if your passport expires within 6 months.', icon: Clock },
  { rule: 'Blank Pages Required', detail: 'You need at least one blank page for the Moroccan entry stamp. Two blank pages recommended if you plan to visit other countries on the same trip.', icon: FileText },
  { rule: 'Machine-Readable Passport', detail: 'Morocco requires a machine-readable passport (MRP) with the two-line code at the bottom of the data page. Handwritten or very old passports may be refused.', icon: BadgeCheck },
  { rule: 'Good Physical Condition', detail: 'Damaged, water-stained, or heavily worn passports may be refused at border control. If your passport has significant wear, renew it before traveling.', icon: ShieldCheck },
  { rule: 'Matching Name on Tickets', detail: 'The name on your passport must exactly match the name on your flight booking. Discrepancies (including middle names) can cause problems at check-in.', icon: Plane },
  { rule: 'Digital Copy Recommended', detail: 'Photograph or scan your passport data page and store it in cloud storage and on your phone. Keep a physical photocopy separate from the original passport.', icon: Phone },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: VISA APPLICATION STEPS
   ═══════════════════════════════════════════════════════════════ */

const visaApplicationSteps = [
  { step: 1, title: 'Determine Your Visa Type', detail: 'Decide whether you need a short-stay visa (up to 90 days), long-stay visa (over 90 days), work visa, or student visa. Each has different requirements and processing times.' },
  { step: 2, title: 'Locate Your Nearest Embassy or Consulate', detail: 'Find the Moroccan embassy or consulate in your country. Applications must typically be submitted in person. Some countries accept applications through visa processing centers like VFS Global.' },
  { step: 3, title: 'Gather Required Documents', detail: 'Prepare: completed visa application form, passport-sized photos (white background), passport valid for 6+ months, flight itinerary, hotel booking or invitation letter, travel insurance, bank statements (last 3 months), and employment letter or proof of income.' },
  { step: 4, title: 'Pay the Visa Fee', detail: 'The standard Morocco short-stay visa fee is approximately from 250-400 MAD equivalent in your local currency. Fees vary by nationality and visa type. Payment is usually made at the embassy or consulate.' },
  { step: 5, title: 'Submit Your Application', detail: 'Submit all documents in person at the embassy or consulate. Some missions require an appointment booked online in advance. Bring originals and photocopies of all documents.' },
  { step: 6, title: 'Wait for Processing', detail: 'Standard processing takes from 5-15 working days. During peak travel season (summer, holidays), allow extra time. You may be asked to attend an interview or provide additional documents.' },
  { step: 7, title: 'Collect Your Visa', detail: 'Once approved, collect your passport with the visa sticker from the embassy or consulate. Verify all details (name, dates, visa type) are correct before leaving. Some embassies offer postal return for an additional fee.' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CUSTOMS ALLOWANCES
   ═══════════════════════════════════════════════════════════════ */

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

/* ═══════════════════════════════════════════════════════════════
   DATA: EXTENSION REQUIREMENTS
   ═══════════════════════════════════════════════════════════════ */

const extensionDocs = [
  'Valid passport with current entry stamp',
  'Four recent passport-sized photographs (white background)',
  'Completed extension application form (available at the police station)',
  'Proof of accommodation (hotel booking, riad reservation, or rental contract)',
  'Proof of financial means (bank statements, traveler checks, or cash declaration)',
  'Valid reason for extension (tourism, family visit, medical treatment, business)',
  'Copy of your return flight booking or onward travel itinerary',
];

/* ═══════════════════════════════════════════════════════════════
   DATA: RELATED GUIDES
   ═══════════════════════════════════════════════════════════════ */

const relatedGuides = [
  {
    href: '/visa',
    title: 'Quick Visa Overview',
    description: 'Condensed visa-free country list and entry requirements at a glance for quick reference.',
    icon: Globe,
  },
  {
    href: '/first-time',
    title: 'First Time in Morocco',
    description: 'Step-by-step guide for first-time visitors covering arrival, transport, money, and culture.',
    icon: Compass,
  },
  {
    href: '/morocco-travel-tips',
    title: 'Morocco Travel Tips',
    description: 'Over 55 practical tips on money, safety, transport, food, bargaining, and more for Morocco.',
    icon: Lightbulb,
  },
  {
    href: '/morocco-trip-cost',
    title: 'Morocco Trip Cost Guide',
    description: 'Detailed budget breakdown for Morocco covering accommodation, food, transport, and activities.',
    icon: Banknote,
  },
  {
    href: '/morocco-airports-guide',
    title: 'Morocco Airports Guide',
    description: 'Complete guide to all major Moroccan airports with transfer options, facilities, and tips.',
    icon: Plane,
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoVisaGuidePage() {
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
            Do you need a visa for Morocco? Complete guide to visa-free entry, passport requirements,
            how to apply, customs rules, overstaying penalties, and visa extensions.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Everything You Need to Enter Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco welcomes over 14 million international visitors annually, and the country
                has one of the most generous visa policies in Africa. Citizens of 69+ countries can
                enter Morocco visa-free for stays up to 90 days, making it one of the easiest North
                African destinations to visit.
              </p>
              <p>
                However, understanding the entry requirements before you travel is essential. From
                passport validity rules that trip up even seasoned travelers to customs regulations
                that can cause problems if you are unaware, this guide covers every aspect of
                entering and exiting Morocco legally in 2026.
              </p>
              <p>
                Whether you are checking if your nationality qualifies for visa-free entry, need to
                apply for a visa at an embassy, or want to understand the new e-visa system, this
                comprehensive guide has you covered. We also cover what happens if you overstay,
                how to extend your visa, transit rules, and exactly what you can and cannot bring
                through Moroccan customs.
              </p>
            </div>
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

      {/* ── Visa Requirements by Nationality ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa Requirements by Nationality
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Different nationalities have different entry requirements. Here is what applies to the
            most common traveler groups visiting Morocco.
          </p>

          <div className="space-y-6">
            {[
              {
                nationality: 'US Citizens',
                requirement: 'Visa-free for 90 days',
                details: 'American citizens do not need a visa for tourist stays up to 90 days. Present a valid US passport with 6+ months validity at immigration. You will receive an entry stamp. No pre-registration or online form required.',
                icon: Globe,
              },
              {
                nationality: 'UK Citizens',
                requirement: 'Visa-free for 90 days',
                details: 'British passport holders enjoy visa-free entry for up to 90 days. Post-Brexit, this has not changed. Ensure your passport has at least 6 months validity and one blank page for the entry stamp.',
                icon: Globe,
              },
              {
                nationality: 'EU / Schengen Citizens',
                requirement: 'Visa-free for 90 days',
                details: 'All EU member state citizens can enter Morocco visa-free for up to 90 days. This includes citizens of non-EU Schengen countries like Switzerland, Norway, and Iceland. A valid national passport is required; national ID cards are not accepted.',
                icon: Globe,
              },
              {
                nationality: 'Canadian & Australian Citizens',
                requirement: 'Visa-free for 90 days',
                details: 'Both Canadian and Australian passport holders receive visa-free entry for 90 days. The same passport validity requirements apply: 6 months beyond entry date with at least one blank page.',
                icon: Globe,
              },
              {
                nationality: 'Indian, Pakistani & Bangladeshi Citizens',
                requirement: 'Visa required before travel',
                details: 'Citizens of India, Pakistan, and Bangladesh must obtain a visa from a Moroccan embassy or consulate before traveling. Required documents include flight booking, hotel reservations, bank statements, and travel insurance. Processing takes from 5-15 working days.',
                icon: FileText,
              },
              {
                nationality: 'Chinese Citizens',
                requirement: 'Visa-free for group tours; visa required for individual travel',
                details: 'Chinese citizens traveling as part of an organized tour group (minimum 5 people) through an authorized travel agency can enter Morocco visa-free. Individual Chinese travelers must apply for a visa at the Moroccan embassy in Beijing or the consulate in Shanghai.',
                icon: FileText,
              },
            ].map((nat) => {
              const NatIcon = nat.icon;
              return (
                <div key={nat.nationality} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <NatIcon className="w-5 h-5 text-[var(--color-accent)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {nat.nationality}
                      </h3>
                      <span className={`text-sm font-semibold ${nat.requirement.includes('Visa-free') ? 'text-green-700' : 'text-amber-700'}`}>
                        {nat.requirement}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{nat.details}</p>
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
            If your country requires a visa for Morocco, follow these steps to apply. Start the
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

      {/* ── Entry & Exit Stamps ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Stamp className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Entry &amp; Exit Stamps
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
                <p>When you arrive at a Moroccan airport or land border, you will go through immigration where an officer will:</p>
                <div className="space-y-2">
                  {[
                    'Check your passport validity (6+ months required)',
                    'Verify you are from a visa-free country or have a valid visa',
                    'Stamp your passport with the entry date and a 90-day authorization',
                    'You may be asked to fill out an arrival card (Fiche de Police) with your name, nationality, passport number, and accommodation address',
                    'Occasionally you may be asked about the purpose of your visit and where you are staying',
                    'Keep a record of your entry date as it determines your 90-day countdown',
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
                <p>When leaving Morocco, you will pass through exit immigration where an officer will:</p>
                <div className="space-y-2">
                  {[
                    'Check your passport and verify you have not overstayed your 90-day authorization',
                    'Stamp your passport with the exit date',
                    'If you have overstayed, you will be detained and may face fines, deportation proceedings, and a future entry ban',
                    'You may be asked to show your boarding pass',
                    'Ensure you have not packed more than 2,000 MAD in Moroccan currency (it is restricted for export)',
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

      {/* ── Customs Regulations ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
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
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Overstaying Penalties
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Overstaying your authorized stay in Morocco is taken seriously. Understand the consequences
            to avoid legal trouble.
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
                <div key={item.penalty} className="flex items-start gap-4 p-4 bg-[var(--surface-muted)] rounded-lg">
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
                  apply for an extension well in advance (see below). Alternatively, exit Morocco before your
                  90 days expire, spend time in another country, and re-enter for a fresh 90-day period. Note
                  that frequent border runs may raise suspicion with immigration officers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa Extensions ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa Extensions in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Need to stay longer than 90 days? Here is how to legally extend your stay in Morocco.
          </p>

          <div className="card-moroccan p-6 md:p-8 mb-8">
            <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
              Where to Apply
            </h3>
            <p className="text-sm text-[var(--text-secondary)] mb-6">
              Visit the nearest Surete Nationale (police station) or Bureau des Etrangers (Foreigners Office)
              in the city where you are staying. Major cities like Casablanca, Marrakech, Rabat, Fes, and
              Tangier all have dedicated offices for this purpose. Apply at least 15 days before your current
              90-day period expires.
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
                extension itself, but you may need to pay for passport photos, photocopies, and other
                administrative costs totaling from 50-200 MAD. During the processing period, you will
                receive a receipt that serves as temporary proof of your legal status.
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
                For stays exceeding 180 days, you will need to apply for a Carte de Sejour (residency permit).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Transit Visas ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Transit Visas
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Transiting through a Moroccan airport? Here is what you need to know about transit
            requirements.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Airside Transit (No Immigration)
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  If your connecting flight departs from the same terminal and you remain in the international
                  transit zone without passing through Moroccan immigration, you generally do not need a transit
                  visa regardless of your nationality. This applies at Mohammed V International Airport (Casablanca),
                  which is the main hub for Royal Air Maroc connections.
                </p>
              </div>

              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Landside Transit (Leaving the Airport)
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  If you wish to leave the airport during a long layover &mdash; for example, to visit
                  Casablanca during a 12-hour connection &mdash; you must pass through Moroccan immigration.
                  This means you need to meet the standard entry requirements: either be from a visa-free
                  country or hold a valid Moroccan visa. You will receive entry and exit stamps as normal.
                </p>
              </div>

              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Overnight Layovers
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  For overnight layovers at Casablanca Mohammed V Airport, some airlines (particularly Royal
                  Air Maroc) offer complimentary hotel stays for connecting passengers. If this involves
                  leaving the airport, you will need to clear immigration. Check with your airline about
                  transit hotel arrangements and whether they assist with immigration formalities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-Visa Updates ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <BadgeCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            E-Visa Updates for 2026
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is modernizing its visa system. Here is the latest on the electronic visa program.
          </p>

          <div className="card-moroccan p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <Globe className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Current Status
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Morocco has been developing an electronic visa (e-visa) system to streamline the application
                    process for nationalities that require a visa. As of 2026, the system is being progressively
                    rolled out for select countries. The e-visa allows applicants to complete the entire visa
                    application process online without visiting an embassy or consulate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    How It Works
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    The e-visa process involves completing an online application form, uploading digital copies
                    of your passport, photo, and supporting documents, paying the visa fee online, and receiving
                    an electronic visa approval via email. The approved e-visa should be printed and presented
                    at immigration on arrival. Processing times are typically shorter than embassy applications,
                    averaging from 3-7 working days.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-[var(--color-accent)]" />
                </div>
                <div>
                  <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                    Important Caution
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    Only use the official Moroccan government e-visa portal. Beware of third-party websites
                    that charge inflated fees to process your application. The official portal is accessible
                    through the Moroccan Ministry of Foreign Affairs website. If you are unsure whether your
                    nationality is eligible for the e-visa, contact your nearest Moroccan embassy for
                    confirmation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 card-moroccan p-6 bg-[var(--color-accent)]/5">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[var(--color-gold)] mt-1 shrink-0" />
              <div>
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  Visa-Free Travelers: No E-Visa Needed
                </h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  If your country is on the visa-free list (US, UK, EU, Canada, Australia, etc.), you do not
                  need to apply for an e-visa or any visa at all. Simply arrive with a valid passport and
                  receive your 90-day entry stamp at immigration. The e-visa system is designed for nationalities
                  that currently require a traditional embassy visa.
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
            <BookOpen className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Frequently Asked Questions
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Answers to the most common questions about Morocco visa requirements and entry procedures.
          </p>

          <div className="space-y-4">
            {faqJsonLd.mainEntity.map((faq, i) => (
              <div key={i} className="card-moroccan p-6">
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                  {faq.name}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {faq.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Compass className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Related Morocco Guides
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Continue planning your Morocco trip with these essential guides.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {relatedGuides.map((guide) => {
              const GuideIcon = guide.icon;
              return (
                <Link key={guide.href} href={guide.href} className="group">
                  <div className="card-moroccan p-5 h-full transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                        <GuideIcon className="w-5 h-5 text-[var(--color-accent)]" />
                      </div>
                      <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] group-hover:text-[var(--color-accent)] transition-colors mt-2">
                        {guide.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{guide.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-accent)]">
                      Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
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
            you are ready to plan the rest of your Moroccan adventure. Check your passport validity,
            confirm your visa status, and start exploring our destination guides.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/first-time"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[var(--color-accent)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent)]/90 transition-colors"
            >
              First Time in Morocco
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/morocco-travel-tips"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-[var(--color-accent)] text-[var(--color-accent)] rounded-lg font-semibold hover:bg-[var(--color-accent)]/5 transition-colors"
            >
              55+ Travel Tips
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

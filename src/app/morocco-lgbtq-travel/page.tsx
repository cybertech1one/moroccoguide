import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Shield,
  ShieldCheck,
  AlertTriangle,
  Info,
  ArrowRight,
  Heart,
  Users,
  Building,
  Phone,
  Globe,
  Lock,
  Eye,
  MessageCircle,
  BookOpen,
  CheckCircle,
  XCircle,
  HelpCircle,
  Scale,
  Compass,
  Hotel,
  Smartphone,
  CircleAlert,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const SAFETY_TIPS = [
  {
    title: 'Avoid Public Displays of Affection',
    description:
      'PDA between same-sex couples draws attention and can lead to confrontation or police involvement. Heterosexual couples also generally refrain from PDA in Morocco — discretion applies across the board.',
    icon: Eye,
  },
  {
    title: 'Be Cautious with Dating Apps',
    description:
      'Grindr and similar apps are monitored. Some users report fake profiles used to lure and extort travelers. Use a VPN, avoid sharing your hotel name or real name, and meet in public places if you choose to connect with anyone.',
    icon: Smartphone,
  },
  {
    title: 'Choose Accommodation Carefully',
    description:
      'International hotel chains and well-reviewed riads in tourist areas are typically more discreet and welcoming. Booking two beds can reduce questions at smaller guesthouses.',
    icon: Hotel,
  },
  {
    title: 'Control Your Digital Footprint',
    description:
      'Set social media accounts to private before arrival. Border agents occasionally check phones, though this is rare for tourists. Clear chat histories and disable lock-screen notifications from dating apps.',
    icon: Lock,
  },
  {
    title: 'Travel with Trusted Companions',
    description:
      'Solo LGBTQ+ travelers face higher risk. Traveling with friends or organized tour groups adds a layer of safety and provides witnesses if any incident occurs.',
    icon: Users,
  },
  {
    title: 'Know Your Embassy Contact',
    description:
      'Save your country\'s embassy or consulate phone number in your phone before arrival. In an emergency, they can provide consular assistance, though they cannot override Moroccan law.',
    icon: Phone,
  },
] as const;

const CITY_PROFILES = [
  {
    name: 'Marrakech',
    slug: '/marrakech',
    tolerance: 'More cosmopolitan',
    description:
      'The most visited city in Morocco has a long history with international LGBTQ+ travelers. The Gueliz (new city) district has several international-standard hotels and a bar scene where discretion is practiced but not unusual. The medina can be more conservative.',
    tips: [
      'Stay in Gueliz or Hivernage for a more international atmosphere',
      'High-end riads in the medina are generally private and discreet',
      'Avoid discussing orientation with guides or taxi drivers',
    ],
  },
  {
    name: 'Essaouira',
    slug: '/essaouira',
    tolerance: 'Most relaxed',
    description:
      'This Atlantic coast town has earned a reputation as Morocco\'s most laid-back city. Its long history as an artist colony and surf destination attracts an international bohemian crowd. The atmosphere is notably more tolerant than inland cities.',
    tips: [
      'The beachfront and medina feel less pressured than Marrakech',
      'Several European-run guesthouses are openly welcoming',
      'A smaller town means more eyes — discretion still matters',
    ],
  },
  {
    name: 'Tangier',
    slug: '/tangier',
    tolerance: 'Historically open',
    description:
      'Tangier\'s international zone era (1923–1956) attracted writers like Paul Bowles, Tennessee Williams, and Truman Capote, partly due to its social freedoms. That legacy lingers — the city maintains a more cosmopolitan attitude than much of Morocco, especially in the newer neighborhoods along the coast.',
    tips: [
      'The Ville Nouvelle and coastline areas are more relaxed',
      'Tangier\'s literary-tourism scene tends to attract open-minded visitors',
      'The old medina can feel more conservative after dark',
    ],
  },
  {
    name: 'Casablanca',
    slug: '/casablanca',
    tolerance: 'Urban anonymity',
    description:
      'Morocco\'s largest city offers the anonymity that comes with a population of 3.7 million. The Corniche and Maarif neighborhoods have a more secular, cosmopolitan feel. The sheer size of the city means less community surveillance than smaller towns.',
    tips: [
      'Large Western-brand hotels near the Corniche are discreet',
      'The city has a small but private underground social scene',
      'Avoid the older medina neighborhoods late at night',
    ],
  },
] as const;

const TOUR_OPERATORS = [
  {
    name: 'Out Adventures',
    focus: 'LGBTQ+-exclusive group tours with local guides who understand the cultural context',
    website: 'outadventures.com',
  },
  {
    name: 'HE Travel',
    focus: 'Small-group journeys (8–16 people) with experienced trip leaders and vetted local partners',
    website: 'hetravel.com',
  },
  {
    name: 'Detours Travel',
    focus: 'Customized LGBTQ+ travel with a focus on safety briefings and culturally sensitive itineraries',
    website: 'detourstravel.com',
  },
  {
    name: 'Brand g Vacations',
    focus: 'All-inclusive LGBTQ+ tour packages covering Marrakech, Fes, and the Sahara with pre-vetted accommodation',
    website: 'brandgvacations.com',
  },
] as const;

const FAQ_ITEMS = [
  {
    question: 'Is Morocco safe for LGBTQ+ travelers?',
    answer:
      'Morocco can be visited by LGBTQ+ travelers, but it requires careful planning and discretion. Same-sex relations are illegal under Article 489 of the Penal Code, carrying penalties of 6 months to 3 years imprisonment. In practice, foreign tourists are rarely prosecuted, but the law does exist and is occasionally enforced. The key is to avoid public displays of affection, be cautious with dating apps, and choose accommodation in tourist-friendly areas.',
  },
  {
    question: 'Can same-sex couples share a hotel room in Morocco?',
    answer:
      'International hotel chains and upscale riads in major tourist cities will generally allow two guests of the same gender to share a room without issue. Budget hotels in smaller towns may be more questioning. Booking online in advance avoids the in-person check-in conversation. Some travelers book rooms with two beds to avoid drawing attention.',
  },
  {
    question: 'Are dating apps like Grindr available in Morocco?',
    answer:
      'Grindr and other apps function in Morocco but come with significant risks. Reports of entrapment, catfishing, robbery, and extortion using these apps are well-documented. If you use them, employ a VPN, do not share identifying details or your hotel location, and exercise extreme caution. Meeting in a busy public place is essential if you choose to meet anyone.',
  },
  {
    question: 'Which Moroccan city is most tolerant for LGBTQ+ visitors?',
    answer:
      'Essaouira is widely considered the most tolerant city due to its bohemian, international atmosphere. Marrakech follows closely — its tourism infrastructure means locals and businesses in tourist areas are accustomed to international visitors. Tangier has historical ties to LGBTQ+ literary figures and retains some of that cosmopolitan legacy. Rural areas and smaller inland cities tend to be more conservative.',
  },
  {
    question: 'What should I do if I face harassment or legal trouble?',
    answer:
      'Contact your country\'s embassy or consulate immediately. They can provide consular assistance, recommend English-speaking lawyers, and communicate with local authorities on your behalf. Do not volunteer information to police about your orientation. If detained, you have the right to contact your embassy. Keep their emergency number saved in your phone at all times.',
  },
  {
    question: 'Can I bring LGBTQ+-themed items or clothing to Morocco?',
    answer:
      'There is no specific law banning rainbow items, but wearing visible LGBTQ+ symbols (pride flags, pins, clothing) in public areas — especially outside major tourist zones — can attract unwanted attention and potentially confrontation. Keep such items in your luggage rather than wearing them in public spaces.',
  },
  {
    question: 'Is transgender travel to Morocco possible?',
    answer:
      'Transgender travelers face additional challenges. Morocco does not legally recognize gender transition, and ID documents that do not match physical presentation can cause confusion at borders or hotels. Carrying a letter from a doctor (translated into French) explaining any medical situation can help at customs. Transgender women, in particular, may face harassment. Traveling with a group or tour operator experienced in LGBTQ+ travel is strongly recommended.',
  },
] as const;

const EMERGENCY_RESOURCES = [
  { name: 'Police Emergency', number: '19 (urban) / 177 (rural)', note: 'General emergency — use with caution' },
  { name: 'Tourist Police (Brigade Touristique)', number: 'Available in Marrakech, Fes, Agadir, Tangier', note: 'More accustomed to working with foreign visitors' },
  { name: 'US Embassy Rabat', number: '+212 537 637 200', note: 'After-hours emergency line available' },
  { name: 'UK Embassy Rabat', number: '+212 537 633 333', note: '24-hour consular assistance' },
  { name: 'Canadian Embassy Rabat', number: '+212 537 544 949', note: 'Emergency consular services' },
  { name: 'ILGA World', number: 'ilga.org', note: 'International LGBTQ+ legal resources and country assessments' },
] as const;

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'LGBTQ+ Travel in Morocco 2026 | Safety Tips, Laws & Practical Guide',
  description:
    'Honest guide to LGBTQ+ travel in Morocco. Understand Article 489, safety tips, recommended cities, accommodation advice, dating app risks, tour operators, and emergency resources for gay travelers visiting Morocco.',
  keywords: [
    'lgbtq travel morocco',
    'gay travel morocco',
    'is morocco safe lgbtq',
    'morocco lgbtq guide',
    'gay friendly morocco',
    'morocco gay rights',
    'article 489 morocco',
    'lgbtq safety morocco',
    'same sex travel morocco',
    'queer travel morocco',
    'morocco gay travel tips',
    'marrakech lgbtq',
    'essaouira lgbtq friendly',
    'tangier gay history',
    'morocco dating apps safety',
    'lgbtq tour operators morocco',
    'transgender travel morocco',
    'morocco pride',
    'gay couple morocco hotel',
    'lgbtq africa travel',
  ],
  openGraph: {
    title: 'LGBTQ+ Travel in Morocco 2026 | Safety, Laws & What You Need to Know',
    description:
      'Factual guide to LGBTQ+ travel in Morocco covering legal reality, safety strategies, recommended cities, accommodation, and emergency resources.',
    url: `${BASE_URL}/morocco-lgbtq-travel`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Moroccan cityscape with traditional architecture and blue sky',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LGBTQ+ Travel in Morocco 2026 | Safety & Practical Guide',
    description:
      'Honest, factual guide covering Moroccan law, safety tips, best cities, accommodation advice, and emergency contacts for LGBTQ+ travelers.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-lgbtq-travel` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLdGuide = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-lgbtq-travel`,
  name: 'LGBTQ+ Travel in Morocco 2026 | Safety Tips, Laws & Practical Guide',
  description:
    'Comprehensive guide to LGBTQ+ travel in Morocco covering legal context, safety advice, recommended cities, accommodation, and resources.',
  url: `${BASE_URL}/morocco-lgbtq-travel`,
  publisher: {
    '@type': 'Organization',
    name: 'City Tours Morocco',
    url: BASE_URL,
  },
  inLanguage: 'en',
  datePublished: '2025-06-15',
  dateModified: '2026-03-20',
  about: {
    '@type': 'Country',
    name: 'Morocco',
  },
};

const jsonLdFaq = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_ITEMS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoLGBTQTravelPage() {
  return (
    <>
      {/* ── JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGuide) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      <main className="min-h-screen bg-[#FAF8F5]">
        {/* ── Hero Section ── */}
        <section className="relative bg-gradient-to-br from-[#2c1810] via-[#4a2c1a] to-[#1a0f0a] py-20 md:py-28">
          <div className="hero-overlay absolute inset-0 opacity-20" />
          <div className="container-morocco relative z-10 text-center">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mb-8 flex items-center justify-center gap-2 text-sm text-white/70">
              <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors">
                <Home className="h-3.5 w-3.5" />
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/travel-tips" className="hover:text-white transition-colors">
                Travel Tips
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-[#C4960C]">LGBTQ+ Travel</span>
            </nav>

            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-[#C4960C] backdrop-blur-sm mb-6">
              <Shield className="h-4 w-4" />
              Updated March 2026
            </div>

            <h1 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              LGBTQ+ Travel in Morocco
            </h1>
            <p className="font-[family-name:var(--font-heading)] text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              An honest, practical guide to navigating Morocco as an LGBTQ+ traveler — covering the legal
              landscape, city-by-city safety profiles, accommodation strategies, and emergency resources.
            </p>
          </div>
        </section>

        {/* ── Important Disclaimer ── */}
        <section className="bg-amber-50 border-b border-amber-200">
          <div className="container-morocco py-6">
            <div className="flex items-start gap-4">
              <CircleAlert className="h-6 w-6 text-amber-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-[family-name:var(--font-heading)] font-semibold text-amber-900 mb-1">
                  Important Disclaimer
                </p>
                <p className="text-amber-800 text-sm leading-relaxed">
                  This guide provides factual information to help LGBTQ+ travelers make informed decisions.
                  Laws and social attitudes can change. Always check the latest travel advisories from your
                  government before traveling. This guide does not constitute legal advice.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Legal Context ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                <Scale className="h-6 w-6 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                The Legal Reality
              </h2>
            </div>

            <div className="card-moroccan p-8 mb-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 mb-4">
                Article 489 of the Moroccan Penal Code
              </h3>
              <div className="bg-red-50 border border-red-200 rounded-lg p-5 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-red-900 font-medium mb-2">Same-sex sexual relations are criminalized.</p>
                    <p className="text-red-800 text-sm leading-relaxed">
                      Article 489 states: &ldquo;Any person who commits an indecent or unnatural act with an
                      individual of the same sex shall be punished with imprisonment of between 6 months and
                      3 years and a fine of 120 to 1,200 MAD.&rdquo; This law applies to all people in
                      Morocco, including foreign nationals.
                    </p>
                  </div>
                </div>
              </div>

              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3">
                Practical Reality vs. the Law
              </h4>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Morocco enforces Article 489 selectively. Prosecutions of foreign tourists are rare but not
                  unheard of. Most cases involve Moroccan nationals, often triggered by personal disputes,
                  blackmail, or social media exposure rather than active police investigation. However, the law
                  gives authorities broad power to act if they choose to.
                </p>
                <p>
                  The country operates on a &ldquo;don&rsquo;t ask, don&rsquo;t tell&rdquo; social framework.
                  Many Moroccans are aware that LGBTQ+ people exist in their communities and among tourists, but
                  open acknowledgment is considered taboo. Privacy is deeply valued in Moroccan culture, and what
                  happens behind closed doors is generally treated as a personal matter — as long as it stays there.
                </p>
                <p>
                  Morocco&rsquo;s tourism industry generates over 80 billion MAD annually. Hotels, riads, and
                  tour operators in major cities are business-oriented and typically do not inquire about
                  guests&rsquo; personal lives. That said, staff in smaller towns or budget accommodations
                  may have different attitudes.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <XCircle className="h-5 w-5 text-red-500" />
                  <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">
                    What the Law Prohibits
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#8226;</span>
                    Same-sex sexual relations (Article 489)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#8226;</span>
                    Same-sex marriage (not recognized)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#8226;</span>
                    Public &ldquo;indecency&rdquo; — broadly defined
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-1">&#8226;</span>
                    Legal gender change (not permitted)
                  </li>
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Info className="h-5 w-5 text-blue-500" />
                  <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">
                    What to Understand
                  </h4>
                </div>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">&#8226;</span>
                    Tourist prosecutions are rare but documented
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">&#8226;</span>
                    Social attitudes vary enormously by region
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">&#8226;</span>
                    Privacy is respected if maintained
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">&#8226;</span>
                    Tourism industry prioritizes business over inquiry
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Safety Tips ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                  <ShieldCheck className="h-6 w-6 text-[#A0522D]" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                  Essential Safety Strategies
                </h2>
              </div>
              <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
                These guidelines apply to all LGBTQ+ travelers in Morocco, regardless of which city you visit.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {SAFETY_TIPS.map((tip) => (
                  <div key={tip.title} className="card-moroccan p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#C4960C]/10 flex-shrink-0">
                        <tip.icon className="h-5 w-5 text-[#C4960C]" />
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">
                          {tip.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── City Profiles ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                <MapPin className="h-6 w-6 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                City-by-City Guide
              </h2>
            </div>
            <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
              Not all Moroccan cities are equal when it comes to social tolerance. Here is how the main
              tourist destinations compare for LGBTQ+ visitors.
            </p>

            <div className="space-y-6">
              {CITY_PROFILES.map((city) => (
                <div key={city.name} className="card-moroccan p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <Link
                        href={city.slug}
                        className="font-[family-name:var(--font-display)] text-2xl font-bold text-gray-900 hover:text-[#A0522D] transition-colors"
                      >
                        {city.name}
                      </Link>
                      <div className="flex items-center gap-2 mt-1">
                        <Compass className="h-4 w-4 text-[#C4960C]" />
                        <span className="text-sm font-medium text-[#C4960C]">{city.tolerance}</span>
                      </div>
                    </div>
                    <Link
                      href={city.slug}
                      className="inline-flex items-center gap-1 text-sm text-[#A0522D] hover:underline font-medium"
                    >
                      Full city guide <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-5">{city.description}</p>
                  <div className="bg-[#FAF8F5] rounded-lg p-4">
                    <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-gray-800 mb-3">
                      Practical Tips for {city.name}
                    </h4>
                    <ul className="space-y-2">
                      {city.tips.map((tip) => (
                        <li key={tip} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="card-moroccan p-6 border-l-4 border-amber-400 bg-amber-50/50">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">
                      Cities to Approach with Extra Caution
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>Fes, Meknes, and smaller inland cities</strong> tend to be more socially
                      conservative. Rural areas and the Rif region hold strongly traditional values.
                      LGBTQ+ travelers visiting these areas should maintain strict discretion. The
                      Sahara Desert tours, while incredible experiences, often involve small group
                      settings with local guides in remote areas — choose your tour operator carefully.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Accommodation Guide ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                  <Building className="h-6 w-6 text-[#A0522D]" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                  Accommodation Strategies
                </h2>
              </div>
              <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
                Where you stay significantly impacts your experience. Here is how to choose accommodation
                that prioritizes your comfort and privacy.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="card-moroccan p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3">
                    Best Option
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    International hotel chains (Four Seasons, Sofitel, Fairmont, Marriott). Staff follow
                    corporate non-discrimination policies. Booking online means no face-to-face discussion
                    about room arrangements.
                  </p>
                </div>
                <div className="card-moroccan p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 mx-auto mb-4">
                    <Hotel className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3">
                    Good Option
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Upscale riads with strong international reviews. European-owned or managed properties
                    tend to be more welcoming. Check recent reviews on Booking.com or TripAdvisor for
                    mentions of LGBTQ+ friendliness.
                  </p>
                </div>
                <div className="card-moroccan p-6 text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 mx-auto mb-4">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3">
                    Use Caution
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Budget guesthouses, small family-run riads in conservative neighborhoods, and
                    Airbnb rentals where the host lives on-site. These settings offer less privacy
                    and the host may take a personal interest in guests&rsquo; activities.
                  </p>
                </div>
              </div>

              <div className="card-moroccan p-6 bg-blue-50/50">
                <div className="flex items-start gap-3">
                  <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">
                      Booking Tip
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Book through international platforms (Booking.com, Expedia) rather than contacting
                      properties directly. Online bookings create a paper trail and put you under the
                      platform&rsquo;s guest protection policies. Request a room with two beds if you
                      prefer to avoid questions — you can always push them together after check-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Dating Apps & Social Media ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                <Smartphone className="h-6 w-6 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                Dating Apps &amp; Digital Safety
              </h2>
            </div>
            <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
              Digital safety is one of the most critical concerns for LGBTQ+ travelers in Morocco.
            </p>

            <div className="card-moroccan p-8 mb-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 mb-6">
                Known Risks
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <span className="text-sm font-bold text-red-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Entrapment</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      There are documented cases of individuals creating fake profiles to lure LGBTQ+ people
                      into meetings, then extorting money under threat of reporting them to police.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <span className="text-sm font-bold text-red-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Police Monitoring</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Reports indicate that authorities have used dating apps to identify and arrest
                      individuals under Article 489. While tourists are less commonly targeted, the
                      risk exists.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 flex-shrink-0">
                    <span className="text-sm font-bold text-red-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900">Robbery</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Some criminals exploit dating apps to arrange meetings with tourists, then rob
                      them — knowing the victim is unlikely to report the crime due to the
                      illegality of their reason for meeting.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-moroccan p-8">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 mb-6">
                Digital Safety Checklist
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Use a VPN at all times (ExpressVPN, NordVPN)',
                  'Disable location services for dating apps',
                  'Never share your hotel name or room number',
                  'Use a separate email for travel profiles',
                  'Set social media to private before departure',
                  'Clear chat histories before crossing the border',
                  'Disable lock-screen notification previews',
                  'Avoid face photos in dating profiles',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Tour Operators ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                  <Globe className="h-6 w-6 text-[#A0522D]" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                  LGBTQ+-Experienced Tour Operators
                </h2>
              </div>
              <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
                These international companies organize Morocco trips specifically for LGBTQ+ travelers,
                with pre-vetted accommodation, experienced local guides, and established safety protocols.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {TOUR_OPERATORS.map((op) => (
                  <div key={op.name} className="card-moroccan p-6 hover:shadow-lg transition-shadow">
                    <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold text-gray-900 mb-2">
                      {op.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">{op.focus}</p>
                    <div className="flex items-center gap-2 text-sm text-[#A0522D]">
                      <Globe className="h-3.5 w-3.5" />
                      {op.website}
                    </div>
                  </div>
                ))}
              </div>

              <div className="card-moroccan p-6 mt-6 bg-[#FAF8F5]">
                <div className="flex items-start gap-3">
                  <MessageCircle className="h-5 w-5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">
                      Why Use a Specialized Operator?
                    </h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      LGBTQ+-experienced operators pre-screen all accommodation, transportation, and
                      guides. They provide detailed safety briefings before departure, maintain
                      emergency contacts in-country, and have established relationships with local
                      businesses that are genuinely welcoming. The group travel format also provides
                      safety in numbers and shared situational awareness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Cultural Context ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                <BookOpen className="h-6 w-6 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                Cultural Context
              </h2>
            </div>
            <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
              Understanding Moroccan social norms helps you navigate the country more safely and
              respectfully.
            </p>

            <div className="card-moroccan p-8 mb-6">
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-gray-900 mb-4">
                Public Behavior Norms
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Morocco is a Muslim-majority country where public displays of affection — even between
                  heterosexual couples — are frowned upon outside of wedding celebrations. Holding hands,
                  kissing, and embracing in public spaces will draw attention regardless of the couple&rsquo;s
                  orientation. This social norm actually provides a degree of cover: two friends or travel
                  companions of the same gender spending time together, sharing meals, and even walking
                  arm-in-arm (common among Moroccan men as a sign of friendship) does not raise suspicion.
                </p>
                <p>
                  The concept of &ldquo;hshuma&rdquo; (roughly: shame or social embarrassment) governs
                  much of Moroccan public behavior. Actions that challenge social norms in public cause
                  hshuma for everyone involved. Private behavior, conversely, is considered a matter
                  between the individual and God. This distinction — public versus private — is the
                  single most important concept for LGBTQ+ travelers to understand.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-moroccan p-6">
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  Generally Acceptable
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Two same-gender friends traveling together</li>
                  <li>Sharing a hotel room (framed as cost-saving)</li>
                  <li>Walking together, dining together, sightseeing</li>
                  <li>Same-gender arm-in-arm walking (culturally normal)</li>
                  <li>Dressing modestly and blending with local norms</li>
                </ul>
              </div>
              <div className="card-moroccan p-6">
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <XCircle className="h-4 w-4 text-red-500" />
                  Risks Drawing Attention
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>Kissing, holding hands romantically, or embracing</li>
                  <li>Wearing pride symbols or rainbow colors prominently</li>
                  <li>Discussing your relationship openly with strangers</li>
                  <li>Public arguments that reveal relationship dynamics</li>
                  <li>Posting geotagged couple photos on public social media</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Emergency Resources ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                  <Phone className="h-6 w-6 text-[#A0522D]" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                  Emergency Contacts &amp; Resources
                </h2>
              </div>
              <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
                Save these numbers in your phone before arriving in Morocco. In any emergency involving
                legal issues, contact your embassy first.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                {EMERGENCY_RESOURCES.map((resource) => (
                  <div key={resource.name} className="card-moroccan p-5">
                    <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-1">
                      {resource.name}
                    </h4>
                    <p className="text-[#A0522D] font-medium text-sm mb-1">{resource.number}</p>
                    <p className="text-xs text-gray-500">{resource.note}</p>
                  </div>
                ))}
              </div>

              <div className="card-moroccan p-6 mt-6 border-l-4 border-[#A0522D]">
                <h4 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-2">
                  If You Are Detained
                </h4>
                <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
                  <li>Stay calm and do not resist or argue with officers</li>
                  <li>Request to contact your embassy immediately — this is your right</li>
                  <li>Do not sign any documents you do not fully understand</li>
                  <li>Do not volunteer information about your sexual orientation</li>
                  <li>Ask for a lawyer — your embassy can recommend English-speaking attorneys</li>
                  <li>Document officers&rsquo; names and badge numbers if possible</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ Section ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                <HelpCircle className="h-6 w-6 text-[#A0522D]" />
              </div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-gray-600 mb-10 ml-[60px] leading-relaxed">
              Direct answers to the most common questions from LGBTQ+ travelers considering Morocco.
            </p>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <div key={index} className="card-moroccan p-6">
                  <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 mb-3 flex items-start gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#A0522D]/10 text-sm font-bold text-[#A0522D] flex-shrink-0">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed ml-10">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Should You Visit? ── */}
        <section className="bg-white py-16">
          <div className="container-morocco">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#A0522D]/10">
                  <Heart className="h-6 w-6 text-[#A0522D]" />
                </div>
                <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900">
                  Should You Visit Morocco?
                </h2>
              </div>
              <div className="card-moroccan p-8 ml-0">
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    This is a personal decision that depends on your comfort level, travel experience,
                    and willingness to maintain discretion throughout your trip. Thousands of LGBTQ+
                    travelers visit Morocco every year and have positive, memorable experiences. The
                    country&rsquo;s architecture, food, landscapes, and cultural depth are genuinely
                    extraordinary.
                  </p>
                  <p>
                    The reality is that LGBTQ+ travelers who follow the safety guidelines in this page —
                    avoiding PDA, being cautious with apps, choosing accommodation wisely, and maintaining
                    the public/private distinction — typically have trouble-free visits. The main trade-off
                    is the emotional labor of concealing part of your identity, which some travelers find
                    manageable and others find exhausting.
                  </p>
                  <p>
                    If you decide Morocco is right for you, preparation makes all the difference. Read
                    this guide thoroughly, choose your cities and accommodation strategically, consider
                    booking with an LGBTQ+-experienced tour operator, and keep your embassy&rsquo;s
                    number on hand. Morocco rewards those who travel thoughtfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Guides ── */}
        <section className="container-morocco py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold text-gray-900 mb-8 text-center">
              Related Guides
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  title: 'Morocco Safety Guide',
                  desc: 'General safety tips, scam awareness, and emergency contacts for all travelers.',
                  href: '/morocco-safety-guide',
                  icon: Shield,
                },
                {
                  title: 'First-Time Visitor Guide',
                  desc: 'Everything you need to know for your first trip to Morocco.',
                  href: '/first-time-morocco',
                  icon: BookOpen,
                },
                {
                  title: 'Morocco Etiquette Guide',
                  desc: 'Cultural norms, dress codes, and social customs to respect.',
                  href: '/morocco-etiquette',
                  icon: Users,
                },
                {
                  title: 'Solo Travel Morocco',
                  desc: 'Tips for independent travelers navigating Morocco alone.',
                  href: '/morocco-solo-travel',
                  icon: Compass,
                },
                {
                  title: 'Morocco Travel Tips',
                  desc: 'Practical advice on money, transport, language, and more.',
                  href: '/travel-tips',
                  icon: Info,
                },
                {
                  title: 'Morocco Health Guide',
                  desc: 'Vaccinations, medications, food safety, and medical resources.',
                  href: '/morocco-health-guide',
                  icon: Heart,
                },
              ].map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="card-moroccan p-5 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#C4960C]/10">
                      <guide.icon className="h-4.5 w-4.5 text-[#C4960C]" />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-gray-900 group-hover:text-[#A0522D] transition-colors text-sm">
                      {guide.title}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{guide.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#A0522D] font-medium mt-3">
                    Read guide <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-gradient-to-br from-[#2c1810] via-[#4a2c1a] to-[#1a0f0a] py-16">
          <div className="container-morocco text-center">
            <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-white mb-4">
              Plan Your Morocco Trip
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 leading-relaxed">
              Morocco offers extraordinary experiences for every traveler. Browse our city guides,
              activity pages, and practical resources to plan a trip that matches your comfort level.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/marrakech"
                className="inline-flex items-center gap-2 bg-[#C4960C] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#b38a0b] transition-colors"
              >
                <MapPin className="h-4 w-4" />
                Explore Marrakech
              </Link>
              <Link
                href="/essaouira"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                <Compass className="h-4 w-4" />
                Discover Essaouira
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

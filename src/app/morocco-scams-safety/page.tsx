import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  DollarSign,
  Clock,
  Info,
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Globe,
  AlertTriangle,
  Shield,
  Eye,
  Phone,
  Lock,
  Users,
  CreditCard,
  Navigation,
  Heart,
  BookOpen,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Morocco Scams & Safety Guide 2026 | How to Stay Safe & Avoid Tourist Scams',
  description:
    'Honest safety guide for Morocco. Learn the top scams targeting tourists in Marrakech, Fes, and beyond. Practical tips for avoiding fake guides, taxi overcharging, carpet shop lures, pickpockets, and more. Emergency numbers, women traveler safety, and street-smart advice.',
  keywords: [
    'morocco scams',
    'scams in morocco',
    'is morocco safe',
    'morocco safety tips',
    'tourist scams marrakech',
    'how to avoid scams morocco',
    'morocco travel safety 2026',
    'marrakech scams',
    'fes scams',
    'morocco pickpocket',
    'morocco fake guides',
    'morocco taxi scam',
    'women safety morocco',
    'morocco emergency numbers',
    'morocco travel tips safety',
    'carpet scam morocco',
    'henna scam marrakech',
    'morocco safe for tourists',
    'morocco night safety',
    'morocco ATM safety',
  ],
  openGraph: {
    title: 'Morocco Scams & Safety Guide 2026 | How to Stay Safe & Avoid Tourist Scams',
    description:
      'Street-smart safety guide for Morocco. Identify common tourist scams, protect yourself from pickpockets, get emergency contacts, and travel confidently across the country.',
    url: `${BASE_URL}/morocco-scams-safety`,
    images: [
      {
        url: `${BASE_URL}/images/hero-marrakech.webp`,
        width: 1200,
        height: 630,
        alt: 'Busy medina street in Marrakech Morocco with tourists and local vendors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Scams & Safety Guide 2026 | Stay Safe & Street-Smart',
    description:
      'Practical safety tips for Morocco. Common tourist scams, how to avoid them, emergency contacts, and honest advice for a safe trip.',
    images: [`${BASE_URL}/images/hero-marrakech.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-scams-safety` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-scams-safety`,
  name: 'Morocco Scams & Safety Guide 2026 | How to Stay Safe & Avoid Tourist Scams',
  description:
    'Complete safety guide for Morocco. Learn the top scams, how to avoid them, emergency contacts, women traveler safety, and street-smart advice for Marrakech, Fes, and beyond.',
  url: `${BASE_URL}/morocco-scams-safety`,
  image: `${BASE_URL}/images/hero-marrakech.webp`,
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
  mainEntityOfPage: `${BASE_URL}/morocco-scams-safety`,
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
      { '@type': 'ListItem', position: 2, name: 'Morocco Scams & Safety Guide', item: `${BASE_URL}/morocco-scams-safety` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Morocco safe for tourists in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Morocco is generally safe for tourists. Violent crime against visitors is rare. The main risks are petty scams and pickpocketing in busy tourist areas like Marrakech and Fes medinas. Morocco has a dedicated tourist police force, and the government invests heavily in tourism security. Use common street smarts, keep valuables secure, and you will have a safe trip.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common scams in Marrakech?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common Marrakech scams include: fake guides who approach you offering directions then demand payment, the henna trick where women grab your hand and apply henna then demand from 200 MAD or more, carpet shop lures where someone leads you to a shop for a commission, taxi drivers refusing to use meters, and restaurant bait-and-switch pricing where menus show different prices than the bill.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for solo female travelers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is manageable for solo female travelers with preparation. Catcalling and verbal harassment can happen, especially in medinas, but physical incidents are uncommon. Dress modestly (covering shoulders and knees), walk with confidence, avoid empty alleys at night, and consider joining group tours for medina exploration. Many women travel Morocco solo every year without major issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if someone tries to scam me in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stay calm and firm. A polite but clear "La, shukran" (No, thank you) works in most situations. Walk away confidently. Do not engage in arguments. If someone becomes aggressive, head toward a shop or busy area. For persistent issues, look for tourist police (identifiable by their uniform) or call 19 for police. Most scam attempts end the moment you show you will not engage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need travel insurance for Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Travel insurance is strongly recommended. Morocco has good private hospitals in major cities, but treatment requires upfront payment. A basic travel insurance policy covering medical evacuation, trip cancellation, and theft costs from 30-60 USD for a two-week trip. Make sure your policy covers any adventure activities like trekking, quad biking, or camel riding if you plan to do them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are taxis safe in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Taxis are generally safe but meter disputes are common. Petit taxis (city taxis) should always run the meter. If a driver refuses, get out and find another taxi. Grand taxis (shared intercity taxis) have fixed routes and prices. At airports and train stations, use official taxi stands. Ride-hailing apps like inDrive and Careem operate in major cities and remove the haggling entirely.',
      },
    },
    {
      '@type': 'Question',
      name: 'What emergency numbers should I know in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key emergency numbers: Police 19, Gendarmerie (rural police) 177, Fire and ambulance 15, Tourist police in Marrakech +212 524 384 601. Save these in your phone before arriving. Your embassy or consulate number is also essential. Most hotels can help arrange emergency assistance quickly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas of Morocco should tourists be cautious in?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Exercise normal caution everywhere, but be extra alert in Marrakech Jemaa el-Fnaa square (pickpockets), Fes medina (fake guides), Tangier port area (aggressive touts), and Casablanca at night in less central neighborhoods. The Rif Mountains near Chefchaouen can have cannabis touts. Tourist zones, riads, and well-traveled routes across the country are safe.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: COMMON SCAMS
   ═══════════════════════════════════════════════════════════════ */

const commonScams = [
  {
    name: 'The Fake Guide',
    icon: Navigation,
    risk: 'High',
    where: 'Fes medina, Marrakech souks',
    description:
      'Someone approaches saying "the road is closed" or "I\'ll show you the way." They walk you through alleys, then demand from 100-500 MAD as a "guide fee." In Fes, this is the single most common tourist complaint.',
    prevention:
      'Download offline Google Maps before you go. If someone says a road is "closed," check yourself — it almost never is. Say "La, shukran" (No, thank you) firmly and keep walking. Licensed guides carry official ID cards.',
  },
  {
    name: 'Taxi Meter Refusal',
    icon: DollarSign,
    risk: 'High',
    where: 'All cities, especially airports',
    description:
      'Petit taxi drivers tell you the meter is "broken" or quote a flat rate five to ten times the metered fare. A typical Marrakech ride that costs 15-20 MAD on the meter gets quoted at 100-200 MAD.',
    prevention:
      'Insist on the meter before getting in. If the driver refuses, close the door and flag another taxi. At airports, use the official taxi desk with posted prices. Ride-hailing apps (inDrive, Careem) eliminate the guesswork.',
  },
  {
    name: 'The "Closed" Mosque/Attraction',
    icon: Eye,
    risk: 'Medium',
    where: 'Marrakech, Fes, Meknes',
    description:
      'Someone near a landmark tells you it is "closed today" or "only open later" and helpfully offers to take you to an alternative — which turns out to be a carpet shop, leather store, or tannery where the "guide" earns a commission on anything you buy.',
    prevention:
      'Check opening hours in advance. Walk to the entrance yourself and verify. Attractions rarely close without notice. If someone redirects you, politely decline and investigate on your own.',
  },
  {
    name: 'The Henna Trick',
    icon: AlertTriangle,
    risk: 'Medium',
    where: 'Jemaa el-Fnaa, Marrakech',
    description:
      'A woman grabs your hand, begins applying henna before you agree, and demands from 200-500 MAD once the design is partially done. Refusing mid-application creates an awkward confrontation. The henna itself is sometimes low quality and causes skin irritation.',
    prevention:
      'Keep your hands in your pockets or clearly pulled away. Say "La!" immediately and firmly if someone reaches for your hand. If you want henna, go to a reputable shop where prices are posted — expect to pay from 50-100 MAD for a quality design.',
  },
  {
    name: 'The Carpet Shop Lure',
    icon: Star,
    risk: 'Medium',
    where: 'Fes, Marrakech, Ouarzazate',
    description:
      'A "friendly local" starts a conversation, invites you for tea, and walks you to a family carpet shop. The pressure to buy is intense. Prices start absurdly high, and even after "bargaining," you pay three to five times the real value. The person who brought you earns a 20-30% commission.',
    prevention:
      'If someone walks you to a shop, you owe them nothing. Walk out if the pressure feels uncomfortable — there is no obligation. Buy carpets from cooperatives (fair fixed prices) or research market rates beforehand. A small rug starts from 300-500 MAD at cooperatives.',
  },
  {
    name: 'Restaurant Price Switch',
    icon: CreditCard,
    risk: 'Medium',
    where: 'Jemaa el-Fnaa, tourist zones',
    description:
      'Food stalls and restaurants show one menu, then the bill arrives dramatically higher. Some stalls in Jemaa el-Fnaa bring unrequested extras (bread, olives, sauces) and charge from 20-50 MAD each. The menu might not list prices at all.',
    prevention:
      'Always confirm prices before ordering. Ask to see a menu with prices written. Refuse unrequested extras immediately. Eat where locals eat — busy places with Moroccan customers almost always charge fair prices.',
  },
  {
    name: 'The Money Exchange Shortchange',
    icon: DollarSign,
    risk: 'Low-Medium',
    where: 'Medinas, unofficial exchange spots',
    description:
      'Unofficial money changers offer better-than-bank rates, then shortchange you by miscounting or using sleight of hand. Some exchange outdated or counterfeit bills.',
    prevention:
      'Only exchange money at banks or official bureau de change offices. ATMs give the best rates. Count money carefully before walking away. Never exchange money with someone who approaches you on the street.',
  },
  {
    name: 'The "Gift" Scam',
    icon: Sparkles,
    risk: 'Low-Medium',
    where: 'Marrakech souks, Tangier',
    description:
      'Someone offers you a "gift" — a bracelet, spice packet, or small trinket — as a sign of Moroccan hospitality. Once you accept, they demand payment or use the interaction to pressure you into their shop.',
    prevention:
      'Politely refuse unsolicited gifts. If someone places something in your hand, put it down and walk away. Real hospitality in Morocco (which is genuine and abundant) does not come with a price tag attached on the street.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: EMERGENCY CONTACTS
   ═══════════════════════════════════════════════════════════════ */

const emergencyContacts = [
  { service: 'Police', number: '19', note: 'National police — works in all cities' },
  { service: 'Gendarmerie (Rural Police)', number: '177', note: 'For rural areas and highways' },
  { service: 'Fire & Ambulance', number: '15', note: 'Emergency medical services' },
  { service: 'Tourist Police (Marrakech)', number: '+212 524 384 601', note: 'Dedicated tourist assistance' },
  { service: 'Tourist Police (Fes)', number: '+212 535 633 838', note: 'Dedicated tourist assistance' },
  { service: 'SOS Doctors', number: '+212 522 989 898', note: 'Private medical help, Casablanca-based' },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SAFE AREAS VS CAUTION AREAS
   ═══════════════════════════════════════════════════════════════ */

const safeAreas = [
  { area: 'Essaouira', note: 'Relaxed coastal city with very low scam activity. Mellow atmosphere.' },
  { area: 'Chefchaouen', note: 'Friendly mountain town. Main annoyance is cannabis touts, not scams.' },
  { area: 'Merzouga / Sahara', note: 'Desert camps and tours are well-organized and safe.' },
  { area: 'Atlas Mountains', note: 'Rural Berber communities are welcoming and honest.' },
  { area: 'Rabat', note: 'The capital is clean, orderly, and has far fewer tourist hassles.' },
  { area: 'Ifrane & Middle Atlas', note: 'Quiet university town, virtually no tourist scams.' },
];

const cautionAreas = [
  { area: 'Marrakech Jemaa el-Fnaa', note: 'Epicenter of scams. Pickpockets, overpriced stalls, henna tricksters. Stay alert.' },
  { area: 'Fes Medina', note: 'Fake guides are aggressive here. GPS struggles with narrow alleys.' },
  { area: 'Tangier Port Area', note: 'Touts target arriving ferry passengers. Arrange transfers in advance.' },
  { area: 'Casablanca at Night', note: 'Avoid poorly lit areas away from the center after dark.' },
  { area: 'Rif Mountains Cannabis Zone', note: 'Near Ketama/Issaguen, locals may pressure you to buy. Decline and drive through.' },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoScamsSafetyPage() {
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
            backgroundImage: 'url(/images/hero-marrakech.webp)',
          }}
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-morocco relative z-10">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">
              <Home className="w-3.5 h-3.5" />
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Morocco Scams &amp; Safety Guide</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Shield className="w-4 h-4" />
            Safety &amp; Scam Prevention
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Morocco Scams &amp; Safety:
            <br className="hidden md:block" /> An Honest Guide for 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Morocco is safe — millions visit every year without problems. But street smarts go a long way.
            Here is exactly what to watch for and how to handle it.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Is Morocco Safe? The Honest Answer
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco welcomed over 14 million tourists in 2025, and the vast majority left with nothing
                but great memories. Violent crime against tourists is extremely rare. The Moroccan government
                takes tourism security seriously — the Brigade Touristique (tourist police) operates in every
                major city, and Morocco ranks safer than many popular European destinations for violent crime.
              </p>
              <p>
                The real risks are petty: scams designed to separate you from your money, persistent touts,
                pickpocketing in crowded areas, and taxi overcharging. None of these will ruin your trip if
                you know what to expect. This guide covers every common scam, gives you the exact phrases
                to shut them down, and shares the practical safety knowledge that turns a nervous first-timer
                into a confident traveler.
              </p>
              <p>
                One important note: most Moroccans are genuinely hospitable. For every tout in a medina,
                there are dozens of locals who will help you find your way, share tea, or refuse payment
                for a kindness. Do not let scam awareness turn into suspicion of everyone. The goal is
                street smarts, not paranoia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Top Scams Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            8 Common Tourist Scams in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Know these before you go. Each one is easy to avoid once you recognize the pattern.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonScams.map((scam) => (
              <div key={scam.name} className="card-moroccan p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 shrink-0">
                    <scam.icon className="w-6 h-6 text-[var(--color-accent)]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                        {scam.name}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        scam.risk === 'High'
                          ? 'bg-red-100 text-red-700'
                          : scam.risk === 'Medium'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {scam.risk} risk
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] mb-2">
                      <MapPin className="w-3 h-3 inline mr-1" />
                      {scam.where}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {scam.description}
                    </p>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm text-green-800">
                        <ShieldCheck className="w-4 h-4 inline mr-1" />
                        <strong>How to avoid:</strong> {scam.prevention}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── General Safety Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            General Safety Tips for Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Lock className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Pickpocket Prevention
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Use a crossbody bag with a zipper — wear it in front in crowded areas</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Keep your phone in a front pocket, not a back pocket</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Leave expensive jewelry and watches at your riad</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Carry only the cash you need for the day — leave the rest in your room safe</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Be extra careful in Jemaa el-Fnaa, bus stations, and crowded souks</li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <CreditCard className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                ATM &amp; Money Safety
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Use ATMs attached to banks, not freestanding machines in tourist areas</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Cover the keypad when entering your PIN</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Withdraw during daytime and put cash away before leaving the ATM</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Decline &quot;dynamic currency conversion&quot; — always choose MAD, not your home currency</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Carry a backup card in a separate location from your primary one</li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Clock className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Night Safety
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Stick to well-lit, populated streets after dark</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Avoid empty medina alleys at night — take main routes even if longer</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Save your riad&apos;s location on Google Maps offline — medina navigation is hard in the dark</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Ask your riad to arrange a taxi if returning late</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Marrakech Gueliz and Rabat are generally fine at night; medinas less so</li>
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                <Info className="w-5 h-5 inline mr-2 text-[var(--color-accent)]" />
                Smart Habits
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Learn three Arabic phrases: &quot;La, shukran&quot; (No, thank you), &quot;Bezzaf&quot; (Too much), &quot;B-saha&quot; (Cheers/Enjoy)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Download offline maps (Google Maps or Maps.me) — essential in medinas</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Keep a photo of your passport on your phone — leave the original in your safe</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Share your itinerary with someone at home</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Get a local SIM (from 30 MAD with data) at the airport — Maroc Telecom or Orange</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Women Travelers Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Heart className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety Tips for Women Travelers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Thousands of women travel Morocco solo every year. Here is what actually helps.
          </p>
          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                What to Expect
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Catcalling and verbal comments happen, especially in medinas and less touristy areas. This
                ranges from &quot;Bonjour, belle&quot; to more persistent attempts at conversation. Physical
                harassment is uncommon but not unheard of. The level of attention decreases significantly outside
                Marrakech and Fes. Smaller cities like Essaouira, Chefchaouen, and Rabat are noticeably more relaxed.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Practical Strategies
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Dress modestly — covering shoulders and knees reduces unwanted attention significantly</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Wear sunglasses — they reduce eye contact, which is often interpreted as an invitation to talk</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Walk with purpose and confidence — hesitation attracts touts</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> A confident &quot;No&quot; is more effective than polite deflection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Sit in the back seat of taxis, never the front</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Stay at riads with good female traveler reviews — hosts often walk you to/from the medina entrance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Join a group walking tour for your first medina visit to build confidence with the layout</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> If someone follows you, walk into a shop or restaurant and ask staff for help</li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Best Destinations for Solo Women
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Essaouira, Chefchaouen, and Rabat consistently get the best reviews from solo female travelers.
                These cities have a more relaxed atmosphere, less aggressive touting, and good infrastructure
                for independent travel. Marrakech and Fes are absolutely doable — just plan your medina routes
                and keep your guard up in the busiest areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safe vs Caution Areas ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safe Areas vs. Areas Requiring Extra Caution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-green-700 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                Low-Hassle Destinations
              </h3>
              <div className="space-y-3">
                {safeAreas.map((item) => (
                  <div key={item.area} className="card-moroccan p-4">
                    <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.area}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-amber-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Stay Alert Here
              </h3>
              <div className="space-y-3">
                {cautionAreas.map((item) => (
                  <div key={item.area} className="card-moroccan p-4">
                    <h4 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                      {item.area}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Emergency Contacts ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Phone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Emergency Numbers &amp; Contacts
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Save these before you arrive. Screenshot this section or write them in your phone.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyContacts.map((contact) => (
              <div key={contact.service} className="card-moroccan p-5 text-center">
                <Phone className="w-6 h-6 text-[var(--color-accent)] mx-auto mb-2" />
                <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-1">
                  {contact.service}
                </h3>
                <p className="text-xl font-bold text-[var(--color-accent)] mb-1">{contact.number}</p>
                <p className="text-xs text-[var(--text-secondary)]">{contact.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Travel Insurance ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Shield className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Travel Insurance for Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Why You Need It
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Morocco has good private hospitals in Casablanca, Rabat, and Marrakech, but they require
                upfront payment. A broken bone can cost from 5,000-15,000 MAD at a private clinic.
                Medical evacuation from remote areas (Atlas Mountains, Sahara) can run from 50,000+ MAD.
                Insurance covers these costs and handles logistics you do not want to deal with in an emergency.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                What to Look For
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Medical coverage of at least 100,000 USD</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Emergency medical evacuation</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Trip cancellation and interruption coverage</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Theft and lost baggage protection</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Adventure activity coverage (trekking, camel riding, quad biking)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> 24/7 assistance hotline</li>
              </ul>
              <p className="text-sm text-[var(--text-secondary)] mt-3">
                Expect to pay from 30-60 USD for a two-week policy. World Nomads, SafetyWing, and Allianz are
                popular options. Buy before you leave — purchasing after your trip starts limits coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bargaining Guide ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Bargaining Without Getting Ripped Off
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Haggling is part of Moroccan market culture — not a scam itself. But knowing the rules helps.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                The Rules of Haggling
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> The first price is always inflated — typically two to five times the actual value</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Start at about 30-40% of the asking price and work toward the middle</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Walk away if the price does not feel right — the seller will often call you back with a better offer</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Do not start bargaining unless you actually want the item</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Keep the tone friendly — bargaining should feel like a conversation, not a fight</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-green-600 shrink-0 mt-0.5" /> Fixed-price shops exist and are labeled — no haggling needed there</li>
              </ul>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Rough Price Guide for Common Items
              </h3>
              <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /> Leather bag: from 150-400 MAD (fair price)</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /> Babouche slippers: from 60-150 MAD</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /> Small Berber rug: from 300-800 MAD at cooperatives</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /> Argan oil (1 liter): from 250-400 MAD at cooperatives</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /> Ceramic tagine (decorative): from 80-200 MAD</li>
                <li className="flex items-start gap-2"><Info className="w-4 h-4 text-[var(--color-accent)] shrink-0 mt-0.5" /> Spices (100g bag): from 10-30 MAD</li>
              </ul>
              <p className="text-xs text-[var(--text-secondary)] mt-3 italic">
                Prices vary by city and season. Marrakech souks price higher than Fes or Essaouira.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to Do If Something Goes Wrong ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <AlertTriangle className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            What to Do If Something Goes Wrong
          </h2>
          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                If You Get Pickpocketed
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                File a police report immediately at the nearest commissariat (police station). You need this
                document for insurance claims. Call your bank to freeze stolen cards. Your embassy can issue
                emergency travel documents if your passport was taken. Most riads will help you navigate
                the process and translate.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                If You Feel Threatened
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Walk into the nearest shop, restaurant, or hotel. Moroccan shopkeepers will help tourists
                in distress — it is bad for business not to. Yelling &quot;Police!&quot; or &quot;Au
                secours!&quot; (Help!) in a busy area will attract immediate attention. In the medina,
                head toward a main thoroughfare. Tourist police respond quickly to calls on 19.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                If You Get Sick or Injured
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Major cities have good private clinics: Clinique Internationale in Marrakech, Clinique
                Cheikh Zayd in Rabat, and Clinique du Littoral in Casablanca. Pharmacies (marked with a
                green crescent) are everywhere and pharmacists can advise on minor ailments. Tap water is
                safe in cities but bottled water (from 3 MAD) is recommended. Stomach issues from new food
                are the most common health problem — carry basic medication.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                If You Overpaid for Something
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Accept it and move on. Every traveler overpays at some point in Morocco — even Moroccans
                from different cities get overcharged in tourist areas. If the amount is large and you feel
                genuinely defrauded, report it to the tourist police. For small overpayments, treat it as
                a learning experience. The difference between the &quot;local price&quot; and what you
                paid is often just a few dollars.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Useful Arabic Phrases ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            <Globe className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Arabic Phrases That Protect You
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { phrase: 'La, shukran', meaning: 'No, thank you', use: 'Universal scam deflector. Say it firmly and keep walking.' },
              { phrase: 'Bezzaf!', meaning: 'Too much / Too expensive', use: 'Use when bargaining or when someone overcharges.' },
              { phrase: 'Seer f-halek', meaning: 'Go away / Leave me alone', use: 'Stronger refusal for persistent touts. Use as needed.' },
              { phrase: 'Mnin el-compteur?', meaning: 'Where is the meter?', use: 'Ask taxi drivers to turn on the meter.' },
              { phrase: 'Bghit la police', meaning: 'I want the police', use: 'Nuclear option for serious situations. Usually ends any confrontation.' },
              { phrase: 'Choukran', meaning: 'Thank you', use: 'Basic courtesy. Moroccans appreciate any effort with Arabic.' },
            ].map((item) => (
              <div key={item.phrase} className="card-moroccan p-5">
                <p className="text-lg font-bold text-[var(--color-accent)] mb-1">&ldquo;{item.phrase}&rdquo;</p>
                <p className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {item.meaning}
                </p>
                <p className="text-xs text-[var(--text-secondary)]">{item.use}</p>
              </div>
            ))}
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
                Is Morocco safe for tourists in 2026?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Yes. Morocco is generally safe for tourists. Violent crime against visitors is rare. The main risks
                are petty scams and pickpocketing in busy tourist areas like Marrakech and Fes medinas. Morocco
                has a dedicated tourist police force, and the government invests heavily in tourism security. Use
                common street smarts, keep valuables secure, and you will have a safe trip.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What are the most common scams in Marrakech?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                The most common Marrakech scams include: fake guides who approach you offering directions then demand
                payment, the henna trick where women grab your hand and apply henna then demand from 200 MAD or more,
                carpet shop lures where someone leads you to a shop for a commission, taxi drivers refusing to use meters,
                and restaurant bait-and-switch pricing where menus show different prices than the bill.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for solo female travelers?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is manageable for solo female travelers with preparation. Catcalling and verbal harassment can
                happen, especially in medinas, but physical incidents are uncommon. Dress modestly (covering shoulders
                and knees), walk with confidence, avoid empty alleys at night, and consider joining group tours for
                medina exploration. Many women travel Morocco solo every year without major issues.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What should I do if someone tries to scam me?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Stay calm and firm. A polite but clear &quot;La, shukran&quot; (No, thank you) works in most situations.
                Walk away confidently. Do not engage in arguments. If someone becomes aggressive, head toward a shop or
                busy area. For persistent issues, look for tourist police or call 19. Most scam attempts end the moment
                you show you will not engage.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need travel insurance for Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Travel insurance is strongly recommended. Morocco has good private hospitals in major cities, but
                treatment requires upfront payment. A basic travel insurance policy covering medical evacuation, trip
                cancellation, and theft costs from 30-60 USD for a two-week trip. Make sure your policy covers any
                adventure activities like trekking or camel riding if you plan to do them.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Are taxis safe in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Taxis are generally safe but meter disputes are common. Petit taxis (city taxis) should always run the
                meter. If a driver refuses, get out and find another taxi. Grand taxis (shared intercity taxis) have
                fixed routes and prices. At airports and train stations, use official taxi stands. Ride-hailing apps
                like inDrive and Careem operate in major cities and remove the haggling entirely.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What emergency numbers should I know?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Key emergency numbers: Police 19, Gendarmerie (rural police) 177, Fire and ambulance 15, Tourist
                police in Marrakech +212 524 384 601. Save these in your phone before arriving. Your embassy or
                consulate number is also essential. Most hotels can help arrange emergency assistance quickly.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which areas should tourists avoid?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                No areas in tourist Morocco are off-limits, but exercise extra caution in Marrakech Jemaa el-Fnaa
                (pickpockets peak at night), Fes medina (fake guides), Tangier port area (aggressive touts), and
                Casablanca at night outside central areas. The Rif Mountains near Chefchaouen can have cannabis touts.
                Tourist zones, riads, and well-traveled routes across the country are safe.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-budget-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Budget Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Realistic costs, money-saving tips, and budget breakdowns for every travel style.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-first-time" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Sparkles className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                First Time in Morocco
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Everything first-time visitors need to know before landing in Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-culture-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Culture Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Customs, etiquette, and social norms to respect during your visit.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-transport-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Users className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Morocco Transport Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Trains, buses, taxis, and rental cars — how to get around safely and affordably.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="py-16 md:py-20 bg-[var(--color-accent)]">
        <div className="container-morocco text-center">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Travel Morocco with Confidence
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Millions of travelers explore Morocco safely every year. With the right preparation and street
            smarts, you will too. Plan your trip, stay alert, and enjoy one of the world&apos;s most
            rewarding travel destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-first-time"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              First-Time Visitor Guide
            </Link>
            <Link
              href="/morocco-budget-guide"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Budget Planning Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

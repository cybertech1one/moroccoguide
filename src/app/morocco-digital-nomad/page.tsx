import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ChevronRight,
  Home,
  MapPin,
  Star,
  Wifi,
  Clock,
  Info,
  ArrowRight,
  Laptop,
  ShieldCheck,
  DollarSign,
  CheckCircle,
  AlertTriangle,
  Users,
  Building,
  Globe,
  Coffee,
  Briefcase,
  MessageCircleQuestion,
  TrendingUp,
  Zap,
  Sun,
  HeartPulse,
  Plane,
  FileText,
  ThumbsUp,
  ThumbsDown,
  CalendarDays,
  Utensils,
  BedDouble,
  Bus,
} from 'lucide-react';

/* ================================================================
   CONSTANTS & BASE URL
   ================================================================ */

const BASE_URL = 'https://citytoursmorocco.com';
const PAGE_URL = `${BASE_URL}/morocco-digital-nomad`;

/* ================================================================
   SEO METADATA
   ================================================================ */

export const metadata: Metadata = {
  title: 'Morocco Digital Nomad Guide 2026 | Best Cities, Coworking, Visa & Cost of Living',
  description:
    'The complete Morocco digital nomad guide for 2026. Best cities for remote work (Marrakech, Essaouira, Tangier, Rabat, Taghazout), coworking spaces, internet speeds, monthly cost of living from 8,000 MAD, digital nomad visa requirements, WiFi cafes, and expat community tips.',
  keywords: [
    'Morocco digital nomad',
    'digital nomad Morocco 2026',
    'remote work Morocco',
    'Morocco coworking spaces',
    'Morocco digital nomad visa',
    'cost of living Morocco',
    'Marrakech coworking',
    'Tangier digital nomad',
    'Essaouira remote work',
    'Taghazout coworking',
    'Rabat digital nomad',
    'Morocco WiFi speed',
    'Morocco freelance visa',
    'best cities remote work Morocco',
    'Morocco nomad community',
    'cheap countries digital nomad Africa',
    'Morocco internet speed 2026',
    'monthly budget Morocco nomad',
  ],
  openGraph: {
    title: 'Morocco Digital Nomad Guide 2026 | Best Cities, Coworking, Visa & Cost of Living',
    description:
      'Everything remote workers need to know about living and working from Morocco. City-by-city breakdown of coworking spaces, internet speeds, monthly budgets from 8,000 MAD, visa options, and the growing nomad community.',
    url: PAGE_URL,
    images: [
      {
        url: `${BASE_URL}/images/hero-digital-nomad.webp`,
        width: 1200,
        height: 630,
        alt: 'Digital nomad working from a rooftop terrace in Morocco with medina views',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morocco Digital Nomad Guide 2026 | Cities, Coworking & Visa',
    description:
      'City-by-city guide to remote work in Morocco. Coworking spaces, internet speeds, monthly budgets from 8,000 MAD, digital nomad visa, and community tips.',
    images: [`${BASE_URL}/images/hero-digital-nomad.webp`],
  },
  alternates: { canonical: PAGE_URL },
};

/* ================================================================
   JSON-LD: TravelGuide + FAQPage
   ================================================================ */

const faqItems = [
  {
    q: 'Does Morocco have a digital nomad visa?',
    a: 'Morocco does not have a dedicated digital nomad visa as of early 2026. Most remote workers enter on the standard 90-day tourist visa waiver available to 69 nationalities including US, EU, UK, Canada, and Australia. You can extend once for another 90 days at a local police prefecture, giving you up to 6 months total. For stays beyond that, you need to leave and re-enter or apply for a long-stay visa through the Moroccan consulate in your home country. The government has discussed a freelancer visa program but nothing has been enacted yet.',
  },
  {
    q: 'How fast is the internet in Morocco for remote work?',
    a: 'Fixed-line fiber in major cities (Marrakech, Rabat, Casablanca, Tangier) delivers from 50 to 200 Mbps through providers like Inwi, Orange, and Maroc Telecom. 4G coverage is widespread with typical speeds of 20-40 Mbps. 5G has launched in Rabat and Casablanca with speeds exceeding 300 Mbps. Most coworking spaces offer dedicated fiber lines with 100 Mbps or more. Smaller towns like Taghazout rely more on 4G, averaging 15-30 Mbps.',
  },
  {
    q: 'How much does it cost to live in Morocco as a digital nomad per month?',
    a: 'A comfortable digital nomad budget in Morocco runs from 8,000 to 15,000 MAD (from 800 to 1,500 USD) per month. This covers rent for a private apartment (from 3,000 MAD), coworking membership (from 1,200 MAD), food (from 2,500 MAD mixing eating out with home cooking), transport, SIM data, and social activities. Budget nomads can get by on from 6,000 MAD by sharing housing and cooking at home. Seasonal pricing can change during peak tourist months.',
  },
  {
    q: 'Which Moroccan city is best for digital nomads?',
    a: 'Marrakech is the most popular thanks to its large nomad community, multiple coworking spaces, and international airport. Essaouira suits those who want a quieter coastal pace. Tangier appeals to nomads who want proximity to Europe and a cosmopolitan feel. Rabat offers the fastest internet and most professional environment. Taghazout is ideal for surfer-nomads who want beach life with acceptable connectivity.',
  },
  {
    q: 'Are coworking spaces common in Morocco?',
    a: 'Morocco has a growing coworking scene. Marrakech alone has over six dedicated spaces. Casablanca, Rabat, and Tangier each have several options. Smaller towns like Essaouira and Taghazout have one or two spaces plus numerous cafes that welcome laptop workers. Day passes typically cost from 100 to 200 MAD, and monthly memberships run from 1,200 to 2,500 MAD depending on the city and tier.',
  },
  {
    q: 'Do I need to pay taxes in Morocco as a digital nomad?',
    a: 'If you stay fewer than 183 days per year and your income comes from foreign clients, you are generally not considered tax-resident in Morocco. Tax rules depend on your home country and any bilateral tax treaties. Morocco has tax treaties with over 50 countries. Consult a tax professional familiar with both Moroccan law and your home-country obligations before making assumptions.',
  },
  {
    q: 'Is Morocco safe for solo digital nomads?',
    a: 'Morocco is generally safe for solo remote workers. Petty crime (pickpocketing, bag snatching) exists in tourist areas but violent crime targeting foreigners is rare. Use standard precautions: avoid walking alone in unlit medina alleyways at night, keep electronics secured, and use reputable taxis or ride-hailing apps. Female solo nomads report positive experiences overall, particularly in Essaouira, Rabat, and the Gueliz district of Marrakech.',
  },
  {
    q: 'Can I open a Moroccan bank account as a digital nomad?',
    a: 'Opening a Moroccan bank account as a tourist is difficult. Most banks require a residency permit (carte de sejour). For everyday spending, use a Wise or Revolut multi-currency card, which works at most Moroccan ATMs and POS terminals. ATM withdrawals are capped at from 2,000 to 4,000 MAD per transaction. Keep some cash on hand for medinas, souks, and smaller establishments that do not accept cards.',
  },
] as const;

const jsonLdTravel = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': PAGE_URL,
  name: 'Morocco Digital Nomad Guide 2026',
  description:
    'Complete guide to living and working remotely from Morocco. Covers best cities for digital nomads, coworking spaces, internet speeds, cost of living, visa options, and community resources.',
  url: PAGE_URL,
  image: `${BASE_URL}/images/hero-digital-nomad.webp`,
  author: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  publisher: { '@type': 'Organization', name: 'City Tours Morocco', url: BASE_URL },
  datePublished: '2026-03-21',
  dateModified: '2026-03-21',
  mainEntityOfPage: PAGE_URL,
  about: { '@type': 'Country', name: 'Morocco' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Morocco Digital Nomad Guide', item: PAGE_URL },
    ],
  },
};

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
   DATA: BEST CITIES FOR DIGITAL NOMADS
   ================================================================ */

const nomadCities = [
  {
    name: 'Marrakech',
    tagline: 'The digital nomad capital of Morocco',
    icon: Building,
    internetSpeed: '50-200 Mbps fiber, 25-40 Mbps 4G',
    avgRent: 'from 3,500 MAD/month (1-bed in Gueliz)',
    coworkingSpaces: [
      'Le 18 Coworking (Gueliz) -- from 150 MAD/day, from 1,800 MAD/month',
      'Sun Desk Marrakech -- from 1,500 MAD/month, rooftop terrace',
      'Kech Cowork (Hivernage) -- from 130 MAD/day, meeting rooms included',
      'The Spot Coworking -- from 100 MAD/day, popular with freelancers',
      'Regus Menara Mall -- from 2,500 MAD/month, corporate-grade setup',
    ],
    cafes: ['Cafe Clock (Kasbah)', 'Bacha Coffee (Gueliz)', 'Nomad Restaurant (Jemaa el-Fnaa)', '33 Rue Majorelle'],
    pros: ['Largest nomad community', 'Direct international flights', 'Year-round warmth', 'Diverse food scene'],
    cons: ['Tourist prices in medina', 'Summer heat exceeds 40C', 'Noise in central areas'],
    monthlyBudget: 'from 9,000 MAD comfortable',
    description:
      'Marrakech is the go-to base for most digital nomads arriving in Morocco. The Gueliz (new city) district has reliable fiber internet, Western-style cafes, supermarkets, and a cluster of coworking spaces within walking distance. The medina offers cheaper accommodation but connectivity can be inconsistent through thick riad walls. The city has the strongest nomad meetup scene, with weekly events organized through WhatsApp groups and Meetup.com.',
  },
  {
    name: 'Essaouira',
    tagline: 'Coastal calm meets creative energy',
    icon: Sun,
    internetSpeed: '30-100 Mbps fiber, 20-30 Mbps 4G',
    avgRent: 'from 2,500 MAD/month (1-bed in medina)',
    coworkingSpaces: [
      'Sun Desk Essaouira -- from 1,200 MAD/month, ocean-view terrace',
      'Taros Cafe (upper floor workspace) -- from 50 MAD with purchase',
    ],
    cafes: ['Taros Cafe', 'Cafe de France', 'Vague Bleu', 'Gusto Italia'],
    pros: ['Lower cost than Marrakech', 'Relaxed pace', 'Strong art and music scene', 'Mild coastal climate year-round'],
    cons: ['Fewer coworking options', 'Windy October through March', 'Smaller international community', 'Limited nightlife'],
    monthlyBudget: 'from 7,000 MAD comfortable',
    description:
      'Essaouira draws nomads who want the ocean breeze and a slower rhythm. The medina is compact and walkable. Fiber is available in the new town, and several riads now advertise high-speed WiFi. The Sun Desk space has become a gathering point for long-stay remote workers, with community dinners and surf outings. Essaouira is a 2.5-hour drive from Marrakech airport.',
  },
  {
    name: 'Tangier',
    tagline: 'Gateway to Europe with a creative pulse',
    icon: Globe,
    internetSpeed: '50-200 Mbps fiber, 30-50 Mbps 4G/5G',
    avgRent: 'from 3,000 MAD/month (1-bed in Iberia/Malabata)',
    coworkingSpaces: [
      'The Loft Tangier -- from 1,500 MAD/month, modern design',
      'Regus Tangier City Center -- from 2,200 MAD/month',
      'Co-Work Tangier -- from 120 MAD/day, fast fiber',
    ],
    cafes: ['Cafe Hafa (legendary cliff-side)', 'Gran Cafe de Paris', 'Salon Bleu', 'La Fabrique'],
    pros: ['35 min ferry to Spain', 'Cosmopolitan culture', 'Fast internet', 'Mediterranean climate'],
    cons: ['Rainy winters', 'Less established nomad scene than Marrakech', 'Hilly terrain'],
    monthlyBudget: 'from 8,500 MAD comfortable',
    description:
      'Tangier has transformed over the past decade with massive infrastructure investment including the Al Boraq high-speed rail to Casablanca and new port facilities. For nomads, the appeal is proximity to Europe (a 35-minute ferry to Tarifa, Spain) combined with Moroccan cost of living. The Iberia and Malabata neighborhoods have modern apartments with fiber connections. Tangier Ibn Battouta Airport has direct flights to several European cities.',
  },
  {
    name: 'Rabat',
    tagline: 'The professional and well-connected capital',
    icon: Briefcase,
    internetSpeed: '100-300 Mbps fiber, 30-50 Mbps 4G/5G',
    avgRent: 'from 3,500 MAD/month (1-bed in Agdal/Hassan)',
    coworkingSpaces: [
      'Technopark Rabat -- from 1,000 MAD/month, startup ecosystem hub',
      'WeWork Rabat (Agdal) -- from 2,500 MAD/month',
      'The Cowork Factory -- from 1,500 MAD/month, community events',
      'Regus Rabat Haut Agdal -- from 2,200 MAD/month',
    ],
    cafes: ['Paul (Agdal)', 'Cafe Maure (Kasbah des Oudayas)', 'Le Dhow', 'Yamal Alsham'],
    pros: ['Fastest internet in Morocco', 'Safest large city', 'Professional atmosphere', 'UNESCO heritage sites'],
    cons: ['Less tourist infrastructure', 'Quieter social scene', 'Fewer budget food options', 'Government town pace'],
    monthlyBudget: 'from 9,500 MAD comfortable',
    description:
      'Rabat is overlooked by most nomads but offers arguably the best infrastructure in the country. As the capital, it has the fastest and most reliable internet, including early 5G rollout. The Agdal district is a modern neighborhood with cafes, restaurants, and tech companies. Technopark Rabat is a government-backed innovation hub with affordable coworking. The city is clean, organized, and significantly less hectic than Marrakech or Casablanca.',
  },
  {
    name: 'Taghazout',
    tagline: 'Surf, sun, and satellite internet',
    icon: Star,
    internetSpeed: '15-50 Mbps 4G, fiber available in newer complexes',
    avgRent: 'from 2,000 MAD/month (shared villa), from 4,000 MAD (private)',
    coworkingSpaces: [
      'Sun Desk Taghazout -- from 1,200 MAD/month, surf-and-work packages',
      'Taghazout Cowork -- from 100 MAD/day, beachfront location',
    ],
    cafes: ['Cafe Spot X', 'Dar Josephine', 'Crystal Surf Cafe'],
    pros: ['World-class surf breaks', 'Tight-knit nomad community', 'Very affordable', 'Year-round sunshine'],
    cons: ['Slower internet than cities', 'Limited infrastructure', 'No public transport', 'Small town after dark'],
    monthlyBudget: 'from 6,500 MAD comfortable',
    description:
      'Taghazout is a small surf village 20 km north of Agadir that has become a magnet for surf-and-work nomads. The vibe is relaxed and the community is tight-knit. Internet used to be a dealbreaker but newer apartment complexes and coworking spaces now have dedicated fiber lines. Sun Desk runs a popular coliving-coworking program with surf-and-work packages. Agadir Al Massira Airport is a 30-minute drive away with direct European flights.',
  },
] as const;

/* ================================================================
   DATA: COST OF LIVING BREAKDOWN
   ================================================================ */

const costBreakdown = [
  { category: 'Rent (1-bed apartment)', budget: 'from 2,500 MAD', mid: 'from 4,000 MAD', comfort: 'from 6,500 MAD', icon: BedDouble },
  { category: 'Coworking membership', budget: 'from 800 MAD', mid: 'from 1,500 MAD', comfort: 'from 2,500 MAD', icon: Laptop },
  { category: 'Groceries & cooking', budget: 'from 1,200 MAD', mid: 'from 1,800 MAD', comfort: 'from 2,500 MAD', icon: Utensils },
  { category: 'Eating out', budget: 'from 600 MAD', mid: 'from 1,500 MAD', comfort: 'from 3,000 MAD', icon: Coffee },
  { category: 'Transport (local)', budget: 'from 200 MAD', mid: 'from 500 MAD', comfort: 'from 1,000 MAD', icon: Bus },
  { category: 'Mobile data (20GB+)', budget: 'from 100 MAD', mid: 'from 200 MAD', comfort: 'from 300 MAD', icon: Wifi },
  { category: 'Health & gym', budget: 'from 200 MAD', mid: 'from 400 MAD', comfort: 'from 800 MAD', icon: HeartPulse },
  { category: 'Social & activities', budget: 'from 400 MAD', mid: 'from 800 MAD', comfort: 'from 1,500 MAD', icon: Users },
] as const;

const budgetTotals = {
  budget: 'from 6,000 MAD (~600 USD)',
  mid: 'from 10,700 MAD (~1,070 USD)',
  comfort: 'from 18,100 MAD (~1,810 USD)',
};

/* ================================================================
   DATA: VISA OPTIONS
   ================================================================ */

const visaOptions = [
  {
    type: '90-Day Visa Waiver',
    duration: 'Up to 90 days',
    eligible: '69 nationalities (US, UK, EU, Canada, Australia, etc.)',
    details: 'No application needed. Passport stamped on arrival. Must have 6+ months passport validity and proof of onward travel or return ticket.',
    icon: Plane,
  },
  {
    type: '90-Day Extension',
    duration: 'Additional 90 days (total 180)',
    eligible: 'All visa-waiver nationalities',
    details: 'Apply at the nearest police prefecture before your 90 days expire. Bring passport photos, proof of accommodation, bank statements, and a written request. Processing takes 1-3 weeks. Free of charge.',
    icon: FileText,
  },
  {
    type: 'Long-Stay Visa (Visa de Sejour)',
    duration: '1 year, renewable',
    eligible: 'All nationalities',
    details: 'Applied for at the Moroccan consulate in your home country before travel. Requires proof of income, accommodation, health insurance, and clean criminal record. Processing takes 4-8 weeks.',
    icon: Globe,
  },
  {
    type: 'Visa Run (Border Exit & Re-entry)',
    duration: 'Resets the 90-day clock',
    eligible: 'Visa-waiver nationalities',
    details: 'Common options: ferry to Tarifa, Spain (from 350 MAD one-way from Tangier) or fly to the Canary Islands. Immigration officers may question frequent border runs. Not a guaranteed long-term strategy.',
    icon: Plane,
  },
] as const;

/* ================================================================
   DATA: PROS AND CONS
   ================================================================ */

const prosOverall = [
  'Cost of living is 60-70% lower than Western Europe',
  'GMT/GMT+1 timezone overlaps with European and African business hours',
  'Excellent food -- tagine, couscous, pastilla, msemen for under 40 MAD',
  'Fiber internet in all major cities, 4G coverage nationwide',
  'Direct flights from 30+ European cities on budget carriers',
  'Rich culture, architecture, and natural landscapes within day-trip distance',
  'Warm climate with 300+ sunny days per year in most regions',
  'Growing English-speaking population in cities and tourist areas',
] as const;

const consOverall = [
  'No dedicated digital nomad visa yet (limited to 90+90 days)',
  'Bureaucracy can be slow for visa extensions and residence permits',
  'French is the primary second language, not English',
  'Internet can be unreliable in old medinas and rural areas',
  'Summer heat (June-August) is intense in inland cities',
  'Noise levels in medinas may disrupt video calls',
  'Banking and international money transfer options are limited for foreigners',
  'Ramadan affects restaurant hours and daily rhythms for one month per year',
] as const;

/* ================================================================
   PAGE COMPONENT
   ================================================================ */

export default function MoroccoDigitalNomadPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdTravel) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* ── Hero Section ── */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center">
        <img
          src="/images/hero-digital-nomad.webp"
          alt="Digital nomad working from a rooftop terrace overlooking a Moroccan medina"
          className="absolute inset-0 w-full h-full object-cover"
          width={1400}
          height={700}
          loading="eager"
        />
        <div className="hero-overlay" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] mb-4 leading-tight">
            Morocco Digital Nomad Guide 2026
          </h1>
          <p className="text-lg md:text-xl font-[family-name:var(--font-heading)] text-white/90 max-w-2xl mx-auto">
            Best cities, coworking spaces, internet speeds, cost of living, and visa options for remote workers in Morocco
          </p>
        </div>
      </section>

      {/* ── Breadcrumbs ── */}
      <nav aria-label="Breadcrumb" className="bg-[#FAF8F5] border-b border-[#A0522D]/10">
        <div className="container-morocco py-3 flex items-center gap-1 text-sm text-gray-500 font-[family-name:var(--font-heading)]">
          <Link href="/" className="hover:text-[#A0522D] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#A0522D] font-medium">Morocco Digital Nomad Guide</span>
        </div>
      </nav>

      {/* ── Introduction ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="card-moroccan p-6 md:p-8">
            <div className="flex items-start gap-3 mb-4">
              <Laptop className="w-6 h-6 text-[#A0522D] mt-1 flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                Why Remote Workers Are Choosing Morocco
              </h2>
            </div>
            <div className="space-y-4 text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
              <p>
                Morocco has earned its place as one of Africa&apos;s top destinations for remote workers. The math is straightforward: a 90-day visa-free entry for most Western passport holders, a cost of living that stretches a remote salary two to three times further than Western Europe, fiber internet in major cities hitting 100+ Mbps, and a GMT+1 timezone that overlaps directly with London, Paris, and New York business hours.
              </p>
              <p>
                Beyond the spreadsheet, Morocco delivers genuine quality of life. A 25 MAD lunch of grilled sardines on the Essaouira port. A sunrise surf session in Taghazout before your 9 AM standup. Rooftop coworking above the Marrakech medina with the Atlas Mountains on the horizon. Five distinct nomad hubs each offer their own rhythm and infrastructure. This guide breaks down each city with specific coworking spaces, real internet speed data, and monthly budget calculations based on current 2026 pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Stats Bar ── */}
      <section className="bg-white py-8 border-y border-[#A0522D]/10">
        <div className="container-morocco">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Monthly Budget', value: 'from 8,000 MAD', icon: DollarSign },
              { label: 'Fiber Internet', value: 'Up to 300 Mbps', icon: Wifi },
              { label: 'Visa-Free Stay', value: 'Up to 180 days', icon: Plane },
              { label: 'Coworking Spaces', value: '20+ nationwide', icon: Building },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-2">
                <stat.icon className="w-6 h-6 text-[#C4960C]" />
                <span className="text-xl font-bold text-[#A0522D] font-[family-name:var(--font-display)]">{stat.value}</span>
                <span className="text-sm text-gray-600 font-[family-name:var(--font-heading)]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Cities for Digital Nomads ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Best Cities for Remote Work in Morocco
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              A city-by-city breakdown with coworking spaces, internet speeds, and realistic monthly budgets
            </p>
          </div>

          <div className="space-y-10">
            {nomadCities.map((city, idx) => (
              <div key={city.name} className="card-moroccan p-6 md:p-8">
                {/* City Header */}
                <div className="flex items-start gap-3 mb-2">
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#A0522D]/10 text-[#A0522D] font-bold font-[family-name:var(--font-display)] text-lg flex-shrink-0">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold font-[family-name:var(--font-display)] text-gray-900">
                      {city.name}
                    </h3>
                    <p className="text-[#A0522D] font-[family-name:var(--font-heading)] text-sm font-medium">
                      {city.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed mb-5 mt-3">
                  {city.description}
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-[family-name:var(--font-heading)] mb-1">
                      <Wifi className="w-3.5 h-3.5" /> Internet Speed
                    </div>
                    <p className="text-sm font-semibold text-gray-800 font-[family-name:var(--font-heading)]">{city.internetSpeed}</p>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-[family-name:var(--font-heading)] mb-1">
                      <BedDouble className="w-3.5 h-3.5" /> Average Rent
                    </div>
                    <p className="text-sm font-semibold text-gray-800 font-[family-name:var(--font-heading)]">{city.avgRent}</p>
                  </div>
                  <div className="bg-[#FAF8F5] rounded-lg p-3">
                    <div className="flex items-center gap-2 text-xs text-gray-500 font-[family-name:var(--font-heading)] mb-1">
                      <DollarSign className="w-3.5 h-3.5" /> Monthly Budget
                    </div>
                    <p className="text-sm font-semibold text-gray-800 font-[family-name:var(--font-heading)]">{city.monthlyBudget}</p>
                  </div>
                </div>

                {/* Coworking Spaces */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 font-[family-name:var(--font-heading)] mb-2 flex items-center gap-2">
                    <Building className="w-4 h-4 text-[#C4960C]" /> Coworking Spaces
                  </h4>
                  <ul className="space-y-1">
                    {city.coworkingSpaces.map((space) => (
                      <li key={space} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                        <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                        {space}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cafes with WiFi */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 font-[family-name:var(--font-heading)] mb-2 flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-[#C4960C]" /> Laptop-Friendly Cafes
                  </h4>
                  <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    {city.cafes.join(' \u2022 ')}
                  </p>
                </div>

                {/* Pros & Cons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-green-700 font-[family-name:var(--font-heading)] mb-2 flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5" /> Pros
                    </h4>
                    <ul className="space-y-1">
                      {city.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                          <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-amber-700 font-[family-name:var(--font-heading)] mb-2 flex items-center gap-1">
                      <ThumbsDown className="w-3.5 h-3.5" /> Cons
                    </h4>
                    <ul className="space-y-1">
                      {city.cons.map((con) => (
                        <li key={con} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internet & Connectivity Deep Dive ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Internet & Connectivity
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              What to expect from Moroccan internet and how to ensure reliable connectivity for video calls and file transfers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-5">
              <h3 className="font-bold text-lg font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <Wifi className="w-5 h-5 text-[#A0522D]" /> Fixed-Line Providers
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li><strong>Maroc Telecom:</strong> Largest network. Fiber (FTTH) available in most cities. Plans from 299 MAD/month for 100 Mbps. Widest rural and mountain coverage.</li>
                <li><strong>Orange Morocco:</strong> Fiber in major cities. Plans from 299 MAD/month. Good customer service in French and Arabic. Competitive international calling bundles.</li>
                <li><strong>Inwi:</strong> Competitive pricing. Fixed 4G box option from 249 MAD/month where fiber is unavailable. Fiber plans include 200 Mbps from 399 MAD/month. Best data-focused plans.</li>
              </ul>
            </div>

            <div className="card-moroccan p-5">
              <h3 className="font-bold text-lg font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5 text-[#A0522D]" /> Mobile Data & SIM Cards
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                <li><strong>Prepaid SIM:</strong> Buy at the airport arrivals hall or any city telecom shop. Passport required. Activation takes 10 minutes.</li>
                <li><strong>Inwi:</strong> 20 GB for from 100 MAD/month, 50 GB for from 200 MAD/month, 100 GB for from 200 MAD/month. Best 4G coverage outside cities.</li>
                <li><strong>Orange:</strong> 30 GB for from 149 MAD/month. Reliable in urban areas. Good roaming with Orange EU networks.</li>
                <li><strong>Maroc Telecom:</strong> 20 GB for from 99 MAD/month. Widest rural coverage including Atlas Mountains.</li>
                <li><strong>5G:</strong> Available in Rabat and Casablanca through Inwi and Maroc Telecom. Speeds from 100 to 500 Mbps where available.</li>
              </ul>
            </div>

            <div className="card-moroccan p-5 md:col-span-2">
              <h3 className="font-bold text-lg font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A0522D]" /> Connectivity Tips for Remote Workers
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Always carry a mobile hotspot as backup for Zoom calls -- fixed lines occasionally drop during rain or wind storms',
                  'Test WiFi speed before signing a lease. Use fast.com or speedtest.net from the actual apartment at the hours you plan to work',
                  'Coworking spaces typically have dedicated fiber separate from building WiFi. Prioritize coworking for client-facing calls',
                  'VPN usage is legal in Morocco. ExpressVPN, NordVPN, and Surfshark all work. VPN is essential for WhatsApp and FaceTime calls',
                  'Power outages are rare in cities but happen. A laptop with 8+ hours of battery covers most interruptions. Consider a 20,000 mAh power bank',
                  'Avoid relying on riad WiFi in old medinas -- thick earthen walls block signals. Request a room near the router or bring an ethernet cable',
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    <Info className="w-4 h-4 text-[#C4960C] mt-0.5 flex-shrink-0" />
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cost of Living Breakdown ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Monthly Cost of Living Breakdown
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Three budget tiers for digital nomads in Morocco. All figures are averages across major cities. Seasonal pricing can change during peak tourist months.
            </p>
          </div>

          <div className="card-moroccan overflow-hidden">
            <div className="grid grid-cols-4 bg-[#A0522D] text-white text-sm font-semibold font-[family-name:var(--font-heading)]">
              <div className="p-3">Category</div>
              <div className="p-3 text-center">Budget</div>
              <div className="p-3 text-center">Mid-Range</div>
              <div className="p-3 text-center">Comfortable</div>
            </div>
            {costBreakdown.map((row, idx) => (
              <div
                key={row.category}
                className={`grid grid-cols-4 text-sm font-[family-name:var(--font-heading)] ${idx % 2 === 0 ? 'bg-white' : 'bg-[#FAF8F5]'}`}
              >
                <div className="p-3 flex items-center gap-2 text-gray-800">
                  <row.icon className="w-4 h-4 text-[#A0522D] flex-shrink-0 hidden sm:block" />
                  {row.category}
                </div>
                <div className="p-3 text-center text-gray-700">{row.budget}</div>
                <div className="p-3 text-center text-gray-700">{row.mid}</div>
                <div className="p-3 text-center text-gray-700">{row.comfort}</div>
              </div>
            ))}
            <div className="grid grid-cols-4 text-sm font-bold font-[family-name:var(--font-heading)] bg-[#A0522D]/5 border-t-2 border-[#A0522D]/20">
              <div className="p-3 text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#A0522D] hidden sm:block" /> Total
              </div>
              <div className="p-3 text-center text-[#A0522D]">{budgetTotals.budget}</div>
              <div className="p-3 text-center text-[#A0522D]">{budgetTotals.mid}</div>
              <div className="p-3 text-center text-[#A0522D]">{budgetTotals.comfort}</div>
            </div>
          </div>

          <div className="mt-6 card-moroccan p-5">
            <h3 className="font-bold text-lg font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-[#C4960C]" /> Budget Notes
            </h3>
            <ul className="space-y-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Budget tier:</strong> Shared accommodation, home cooking, free cafe WiFi instead of coworking, local buses and walking.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Mid-range tier:</strong> Private studio, coworking hot desk, mix of home cooking and restaurants, occasional taxis.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                <span><strong>Comfortable tier:</strong> Modern 1-bed apartment in a good neighborhood, dedicated desk at premium coworking, regular dining out, ride-hailing apps.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 mt-0.5 flex-shrink-0" />
                <span>These figures exclude international flights, travel insurance, and any home-country obligations (student loans, subscriptions, taxes, etc.).</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Visa & Legal Section ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Visa & Legal Options for Remote Workers
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              Morocco does not yet have a formal digital nomad visa, but several pathways let you stay for months at a time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visaOptions.map((visa) => (
              <div key={visa.type} className="card-moroccan p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#A0522D]/10 flex items-center justify-center flex-shrink-0">
                    <visa.icon className="w-5 h-5 text-[#A0522D]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base font-[family-name:var(--font-display)] text-gray-900">{visa.type}</h3>
                    <span className="text-xs text-[#C4960C] font-semibold font-[family-name:var(--font-heading)]">{visa.duration}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-[family-name:var(--font-heading)] mb-2">
                  <strong>Eligible:</strong> {visa.eligible}
                </p>
                <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed">
                  {visa.details}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accommodation Tips ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Finding Accommodation as a Remote Worker
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Short-Term (1-4 weeks)',
                icon: CalendarDays,
                items: [
                  'Airbnb: from 250 MAD/night for private rooms, from 500 MAD for full apartments',
                  'Booking.com: Good for riad stays with WiFi speed listed in reviews',
                  'Hostel private rooms: from 150 MAD/night in Marrakech and Essaouira',
                  'Negotiate weekly rates directly with hosts for 20-30% discounts off nightly pricing',
                ],
              },
              {
                title: 'Medium-Term (1-3 months)',
                icon: BedDouble,
                items: [
                  'Facebook groups: "Expats in Marrakech", "Digital Nomads Morocco" regularly post rental listings',
                  'Avito.ma: Morocco\'s Craigslist. Listings in French/Arabic. Bring a Moroccan friend to negotiate',
                  'Mubawab.ma: Real estate portal with English interface. Filter by furnished apartments',
                  'Coliving spaces: Sun Desk (Taghazout/Essaouira) offers room + workspace from 5,000 MAD/month',
                ],
              },
              {
                title: 'Long-Term (3+ months)',
                icon: Building,
                items: [
                  'Direct landlord deals: Walk neighborhoods, look for "A Louer" (for rent) signs for best prices',
                  'Expect 2-3 months deposit plus first month rent upfront',
                  'Utilities (water, electricity, gas) typically add from 300-600 MAD/month on top of rent',
                  'Internet installation: from 299 MAD/month for fiber. Ask if landlord already has a line installed',
                ],
              },
            ].map((col) => (
              <div key={col.title} className="card-moroccan p-5">
                <h3 className="font-bold text-base font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                  <col.icon className="w-5 h-5 text-[#C4960C]" /> {col.title}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overall Pros & Cons ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Pros & Cons of Morocco for Digital Nomads
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-moroccan p-6">
              <h3 className="font-bold text-lg font-[family-name:var(--font-display)] text-green-700 mb-4 flex items-center gap-2">
                <ThumbsUp className="w-5 h-5" /> Advantages
              </h3>
              <ul className="space-y-3">
                {prosOverall.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="font-bold text-lg font-[family-name:var(--font-display)] text-amber-700 mb-4 flex items-center gap-2">
                <ThumbsDown className="w-5 h-5" /> Challenges
              </h3>
              <ul className="space-y-3">
                {consOverall.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                    <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community & Networking ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Nomad Community & Networking
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)] max-w-2xl mx-auto">
              How to find your people and build a professional network while working from Morocco
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Online Communities',
                icon: Globe,
                items: [
                  'Facebook: "Digital Nomads Morocco" (12,000+ members), "Expats in Marrakech", "Tangier Expats & Nomads"',
                  'WhatsApp groups: Ask at coworking spaces for local group invites. Most cities have active weekly meetup chats',
                  'Nomad List: Morocco consistently ranks in the top 30 nomad destinations globally with Marrakech as a featured city',
                  'Reddit: r/digitalnomad has frequent Morocco threads with recent reviews and practical advice',
                ],
              },
              {
                title: 'In-Person Events',
                icon: Users,
                items: [
                  'Weekly nomad meetups at Le 18 Coworking (Marrakech) -- usually Wednesday evenings',
                  'Sun Desk community dinners in Essaouira and Taghazout -- open to non-members for from 80 MAD',
                  'Technopark Rabat hosts startup pitch nights and networking events monthly',
                  'Language exchange events on Meetup.com and Tandem are a great way to meet locals and other foreigners',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-5">
                <h3 className="font-bold text-base font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-[#C4960C]" /> {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <ArrowRight className="w-3.5 h-3.5 text-[#A0522D] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Practical Tips Section ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Practical Tips for Remote Workers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Money & Banking',
                icon: DollarSign,
                tips: [
                  'Wise and Revolut cards work at most ATMs. Withdraw in MAD to avoid dynamic currency conversion fees.',
                  'ATM limit is typically from 2,000-4,000 MAD per withdrawal. CIH and Attijariwafa ATMs are most reliable for foreign cards.',
                  'Cash is king in medinas, souks, and small restaurants. Cards accepted in modern cafes, supermarkets, and hotels.',
                ],
              },
              {
                title: 'Health & Insurance',
                icon: HeartPulse,
                tips: [
                  'SafetyWing (from 500 MAD/month) and World Nomads (from 800 MAD/month) are popular among Morocco-based nomads.',
                  'Private clinics in Marrakech, Rabat, and Casablanca offer good care. A doctor visit costs from 200 MAD.',
                  'Pharmacies are well-stocked, often open late, and many medications are available without prescription.',
                ],
              },
              {
                title: 'Getting Around',
                icon: Bus,
                tips: [
                  'Al Boraq high-speed train: Tangier to Casablanca in 2h10, from 149 MAD. First class has power outlets.',
                  'ONCF trains connect major cities. Comfortable and affordable. Book at oncf.ma or at the station.',
                  'CTM and Supratours buses cover routes trains miss. Book online at ctm.ma for guaranteed seats.',
                ],
              },
              {
                title: 'Daily Productivity',
                icon: Clock,
                tips: [
                  'Morocco is GMT+1 year-round (no daylight saving changes). Perfect overlap with London, Paris, and Berlin.',
                  'Call to prayer (adhan) happens 5 times daily and can be loud. Noise-canceling headphones are essential for calls.',
                  'Most cafes will not rush you out for working on a laptop. Ordering a drink every 90 minutes is considered polite.',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="card-moroccan p-5">
                <h3 className="font-bold text-base font-[family-name:var(--font-display)] text-gray-900 mb-3 flex items-center gap-2">
                  <section.icon className="w-5 h-5 text-[#A0522D]" /> {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2 text-sm text-gray-700 font-[family-name:var(--font-heading)]">
                      <Info className="w-3.5 h-3.5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── FAQ Section ── */}
      <section className="bg-[#FAF8F5] py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 font-[family-name:var(--font-heading)]">
              Common questions from digital nomads planning a move to Morocco
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <div key={idx} className="card-moroccan p-5">
                <h3 className="font-bold text-base font-[family-name:var(--font-display)] text-gray-900 mb-2 flex items-start gap-2">
                  <MessageCircleQuestion className="w-5 h-5 text-[#C4960C] mt-0.5 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-700 font-[family-name:var(--font-heading)] leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="bg-white py-12 md:py-16">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6 text-center">
            Related Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'Morocco Budget Travel Guide', href: '/budget-travel', icon: DollarSign },
              { title: 'Morocco Internet & Connectivity', href: '/connectivity', icon: Wifi },
              { title: 'Cost of Living in Morocco', href: '/morocco-cost-of-living', icon: TrendingUp },
              { title: 'Morocco Safety Guide', href: '/morocco-safety', icon: ShieldCheck },
              { title: 'Marrakech City Guide', href: '/marrakech', icon: MapPin },
              { title: 'Morocco Transport Guide', href: '/morocco-transport', icon: Bus },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="card-moroccan p-5 flex items-center gap-3 hover:border-[#A0522D]/40 transition-colors group"
              >
                <guide.icon className="w-5 h-5 text-[#A0522D] flex-shrink-0" />
                <span className="text-sm font-semibold text-gray-800 font-[family-name:var(--font-heading)] group-hover:text-[#A0522D] transition-colors">
                  {guide.title}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#A0522D] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="moroccan-pattern py-16">
        <div className="container-morocco max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-4">
            Ready to Work Remotely from Morocco?
          </h2>
          <p className="text-gray-700 font-[family-name:var(--font-heading)] mb-8 max-w-xl mx-auto">
            Pack your laptop, grab a SIM card at the airport, and explore our city guides for detailed information on accommodation, food, activities, and local culture in each of Morocco&apos;s top nomad destinations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/marrakech"
              className="inline-flex items-center justify-center gap-2 bg-[#A0522D] text-white px-6 py-3 rounded-lg font-semibold font-[family-name:var(--font-heading)] hover:bg-[#8B4726] transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Marrakech
            </Link>
            <Link
              href="/essaouira"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#A0522D] border-2 border-[#A0522D] px-6 py-3 rounded-lg font-semibold font-[family-name:var(--font-heading)] hover:bg-[#A0522D]/5 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Essaouira
            </Link>
            <Link
              href="/tangier"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#A0522D] border-2 border-[#A0522D] px-6 py-3 rounded-lg font-semibold font-[family-name:var(--font-heading)] hover:bg-[#A0522D]/5 transition-colors"
            >
              <MapPin className="w-4 h-4" /> Explore Tangier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

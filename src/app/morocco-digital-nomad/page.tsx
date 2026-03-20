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
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Users,
  Building,
  Globe,
  Wifi,
  Laptop,
  Coffee,
  Zap,
  Heart,
  Plane,
  Smartphone,
  Sun,
  Utensils,
  BedDouble,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════ */

const BASE_URL = 'https://citytoursmorocco.com';

/* ═══════════════════════════════════════════════════════════════
   SEO METADATA
   ═══════════════════════════════════════════════════════════════ */

export const metadata: Metadata = {
  title: 'Digital Nomad Morocco 2026 | Remote Work, Coworking Spaces & Cost of Living',
  description:
    'Complete guide to living and working remotely in Morocco. Best cities for digital nomads, coworking spaces with prices, wifi speeds, cost of living breakdown, visa rules, SIM cards, co-living options, and community tips for Marrakech, Essaouira, Tangier, Rabat, and Taghazout.',
  keywords: [
    'digital nomad morocco',
    'remote work morocco',
    'coworking morocco',
    'best cities digital nomads morocco',
    'morocco wifi speed',
    'morocco digital nomad visa',
    'coworking marrakech',
    'coworking essaouira',
    'coworking tangier',
    'morocco cost of living',
    'morocco remote work visa',
    'morocco internet speed',
    'taghazout digital nomad',
    'rabat coworking',
    'morocco coliving',
    'morocco sim card data',
    'work from morocco',
    'long term stay morocco',
    'morocco freelancer',
    'morocco time zone remote work',
  ],
  openGraph: {
    title: 'Digital Nomad Morocco 2026 | Remote Work, Coworking & Cost of Living',
    description:
      'Everything remote workers need to know about Morocco. Coworking spaces, wifi speeds, monthly costs, visa info, and the best cities for digital nomads.',
    url: `${BASE_URL}/morocco-digital-nomad`,
    images: [
      {
        url: `${BASE_URL}/images/hero-morocco.webp`,
        width: 1200,
        height: 630,
        alt: 'Digital nomad working from a rooftop terrace in Morocco with a view of the medina',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Nomad Morocco 2026 | Remote Work & Coworking Guide',
    description:
      'Best cities, coworking spaces, wifi speeds, cost of living, and visa rules for digital nomads in Morocco.',
    images: [`${BASE_URL}/images/hero-morocco.webp`],
  },
  alternates: { canonical: `${BASE_URL}/morocco-digital-nomad` },
};

/* ═══════════════════════════════════════════════════════════════
   JSON-LD STRUCTURED DATA
   ═══════════════════════════════════════════════════════════════ */

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TravelGuide',
  '@id': `${BASE_URL}/morocco-digital-nomad`,
  name: 'Digital Nomad Morocco 2026 | Remote Work, Coworking Spaces & Cost of Living',
  description:
    'Complete guide to living and working remotely in Morocco. Best cities, coworking spaces, wifi, cost of living, visa rules, and community for digital nomads.',
  url: `${BASE_URL}/morocco-digital-nomad`,
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
  datePublished: '2026-03-20',
  dateModified: '2026-03-20',
  mainEntityOfPage: `${BASE_URL}/morocco-digital-nomad`,
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
      { '@type': 'ListItem', position: 2, name: 'Digital Nomad Morocco', item: `${BASE_URL}/morocco-digital-nomad` },
    ],
  },
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a visa to work remotely from Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco does not have a dedicated digital nomad visa. Citizens of the US, EU, UK, Canada, and many other countries receive a 90-day visa-free entry stamp. You can extend by exiting to Spain (Ceuta or a ferry) and re-entering. For stays beyond 90 days, apply for a temporary residence permit (carte de sejour) at the local police station, though approval is not guaranteed. Technically, working remotely on a tourist stamp is a legal gray area, but enforcement is non-existent for remote workers earning foreign income.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast is the internet in Morocco?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco ranks among the best in Africa for internet speed. Fiber (FTTH) from Maroc Telecom, Inwi, or Orange delivers 100-200 Mbps in major cities like Rabat, Casablanca, and Tangier. Coworking spaces in Marrakech and Essaouira typically offer 50-100 Mbps. 4G mobile coverage is widespread, averaging 20-40 Mbps on Inwi and Maroc Telecom. Smaller towns and rural areas may drop to 5-15 Mbps. Always have a backup SIM card with a data plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to live in Morocco as a digital nomad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A comfortable digital nomad lifestyle in Morocco costs from 8,000 to 14,000 MAD per month (roughly 800-1,400 USD). This covers a private apartment (from 3,500 MAD), coworking membership (from 1,200 MAD), food (from 2,500 MAD mixing eating out and cooking), transport, and leisure. Budget nomads can get by on 6,000 MAD by sharing housing and cooking at home. Marrakech and Tangier cost slightly more than Essaouira or Taghazout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which city in Morocco is best for digital nomads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Marrakech leads for infrastructure, coworking options, and community size. Essaouira suits nomads who want a quieter coastal pace with a strong creative scene. Tangier appeals to those who want a more cosmopolitan, European-adjacent city with fast fiber internet. Rabat offers the most reliable infrastructure as the capital. Taghazout is the pick for surfer-nomads willing to trade some wifi reliability for waves and laid-back village life.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which SIM card should I get in Morocco for data?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Inwi offers the best data-focused plans. Their 100 GB monthly package costs around 200 MAD. Maroc Telecom has the widest 4G coverage, especially outside cities, with a 50 GB plan at about 150 MAD. Orange Morocco is competitive in cities. Buy a SIM at the airport or any telecom shop with your passport. Activation takes minutes. Top up at corner shops (epiceries) or through the carrier app. Most nomads carry two SIMs for redundancy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Morocco safe for digital nomads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco is one of the safest countries in Africa for travelers and remote workers. Violent crime targeting foreigners is extremely rare. Petty theft (pickpocketing, bag snatching) occurs in crowded medinas and tourist zones, so use normal precautions. Solo female nomads report feeling safe in coworking spaces and modern neighborhoods, though unwanted attention in the street can be a nuisance. Stick to well-lit areas at night, use licensed taxis, and keep electronics secure in cafes.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I open a bank account in Morocco as a digital nomad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non-residents can open a "convertible dirham" account at banks like Attijariwafa, BMCE, or CIH with a passport, proof of address (even a hotel booking), and a minimum deposit. However, most nomads skip local banking and rely on Wise (TransferWise) for currency conversion, a Revolut or N26 card for daily spending, and cash withdrawals from ATMs. Moroccan ATMs dispense up to 2,000 MAD per transaction with fees around 30-40 MAD per withdrawal from foreign cards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time zone advantage of Morocco for remote work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Morocco uses GMT+1 year-round (no daylight saving since 2018). This overlaps perfectly with UK and Western European business hours, and gives a comfortable 5-6 hour overlap with US East Coast working hours (afternoons in Morocco align with US mornings). For US West Coast teams, expect a 9-hour gap, which requires some schedule flexibility. Australian and Asian time zones are the hardest to manage from Morocco.',
      },
    },
  ],
};

/* ═══════════════════════════════════════════════════════════════
   DATA: BEST CITIES FOR DIGITAL NOMADS
   ═══════════════════════════════════════════════════════════════ */

const nomadCities = [
  {
    rank: 1,
    name: 'Marrakech',
    icon: Star,
    tagline: 'Largest nomad community, most coworking options',
    wifiSpeed: '50-100 Mbps at coworking spaces, 20-50 Mbps residential fiber',
    costPerMonth: 'From 9,000 MAD/month',
    bestFor: 'Networking, events, cultural immersion',
    description:
      'Marrakech has the largest concentration of digital nomads in Morocco and the most developed coworking infrastructure. The medina offers cheap living with character, while Gueliz and Hivernage provide modern apartments with reliable fiber. The city runs hot from June to September (40C+), pushing many nomads to the coast in summer. International flights keep it well connected, and the food scene stretches from 15 MAD street bowls of bissara to rooftop dinners.',
    coworkingSpaces: [
      'Le 18 Coworking (Gueliz) -- from 1,500 MAD/month, fast wifi, rooftop terrace',
      'Coworkshop Marrakech (Hivernage) -- from 1,200 MAD/month, printing, meeting rooms',
      'Sun Desk (medina) -- from 200 MAD/day, popular with short-stay nomads',
    ],
  },
  {
    rank: 2,
    name: 'Essaouira',
    icon: Sun,
    tagline: 'Coastal creative hub, surf-and-work culture',
    wifiSpeed: '30-60 Mbps at coworking, 15-30 Mbps residential',
    costPerMonth: 'From 7,500 MAD/month',
    bestFor: 'Creatives, slower pace, kitesurfing, off-season retreats',
    description:
      'Essaouira draws nomads who want Atlantic wind, a walkable medina, and a creative community without Marrakech\'s intensity. The town is small enough to bike everywhere. Wifi is solid but not as fast or redundant as bigger cities. Summer trade winds (the Alizees) make it a kitesurfing capital. Rent a riad room or apartment inside the medina from 3,000 MAD/month, or find a modern flat outside the walls for slightly more. The seafood grills at the port cost from 40 MAD for a plate.',
    coworkingSpaces: [
      'Taros Cowork (medina rooftop) -- from 1,000 MAD/month, ocean views, cafe downstairs',
      'Megawork Essaouira -- from 150 MAD/day, fiber backup, quiet space',
      'Several riad-based informal coworking setups during high season (Oct-Apr)',
    ],
  },
  {
    rank: 3,
    name: 'Tangier',
    icon: Globe,
    tagline: 'Europe next door, fastest fiber internet in Morocco',
    wifiSpeed: '100-200 Mbps fiber common, 40-80 Mbps at coworking',
    costPerMonth: 'From 9,500 MAD/month',
    bestFor: 'European clients, fast internet, cosmopolitan lifestyle',
    description:
      'Tangier is Morocco\'s most European-feeling city. Fiber internet here is the fastest in the country thanks to heavy Maroc Telecom investment in the northern corridor. The Tanger-Med port and TGV rail link to Casablanca have accelerated development. The kasbah district offers character, while the modern Malabata and city center neighborhoods have high-rise apartments with sea views. A ferry to Tarifa (Spain) takes 35 minutes, making weekend Schengen runs effortless. Tangier costs slightly more than other nomad hubs because of its proximity to Europe.',
    coworkingSpaces: [
      'The Loft Coworking (city center) -- from 1,300 MAD/month, high-speed fiber, event space',
      'Regus Tangier City Center -- from 2,500 MAD/month, corporate setup, meeting rooms',
      'Several cafe-coworking hybrids in the kasbah district',
    ],
  },
  {
    rank: 4,
    name: 'Rabat',
    icon: Building,
    tagline: 'Capital city stability, underrated and uncrowded',
    wifiSpeed: '80-150 Mbps fiber, 50-100 Mbps at coworking',
    costPerMonth: 'From 10,000 MAD/month',
    bestFor: 'Stability, government-backed tech hubs, families',
    description:
      'Rabat flies under the radar for nomads, but the capital delivers the most reliable infrastructure in Morocco. Power outages are rarer here than anywhere else, and fiber penetration is high. The Technopark Rabat incubator has boosted the startup scene. Hassan and Agdal neighborhoods have walkable streets, good restaurants, and reliable wifi in cafes. The tram system works well. Rabat costs a bit more than Marrakech for housing, but daily expenses are reasonable. The beach at Rabat-Sale is decent, and Casablanca is 45 minutes by TGV.',
    coworkingSpaces: [
      'Technopark Rabat -- from 800 MAD/month, government-backed, startup community',
      'The Coin Coworking (Agdal) -- from 1,400 MAD/month, modern space, strong wifi',
      'Regus Rabat Center -- from 2,200 MAD/month, premium corporate environment',
    ],
  },
  {
    rank: 5,
    name: 'Taghazout',
    icon: Heart,
    tagline: 'Surf village turned nomad hotspot',
    wifiSpeed: '15-40 Mbps at coworking, 10-20 Mbps residential',
    costPerMonth: 'From 7,000 MAD/month',
    bestFor: 'Surfers, yoga enthusiasts, minimalist living',
    description:
      'Taghazout is a former fishing village 20 minutes north of Agadir that has become a magnet for surf-and-work nomads. Infrastructure is basic compared to cities. Wifi can drop during storms or peak hours, so a mobile hotspot is essential backup. The trade-off is a tight-knit community, world-class right-hand point breaks, daily yoga, and monthly costs that undercut anywhere else on this list. Most nomads rent a room or shared apartment from 2,500 MAD/month. The village shuts down somewhat in summer when the surf flattens.',
    coworkingSpaces: [
      'Sun Desk Taghazout -- from 1,000 MAD/month, the original surf-cowork space, terrace with ocean view',
      'Taghazout Cowork -- from 150 MAD/day, newer space with fiber line',
      'Several surf camps offer coworking packages (surf + desk + accommodation from 6,000 MAD/month)',
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: MONTHLY COST BREAKDOWN
   ═══════════════════════════════════════════════════════════════ */

const costBreakdown = [
  { category: 'Accommodation (1-bed apartment)', budget: 'From 2,500 MAD', mid: 'From 4,000 MAD', comfort: 'From 6,500 MAD', icon: BedDouble },
  { category: 'Coworking membership', budget: 'From 800 MAD', mid: 'From 1,300 MAD', comfort: 'From 2,200 MAD', icon: Laptop },
  { category: 'Food (mix of cooking & eating out)', budget: 'From 1,800 MAD', mid: 'From 2,800 MAD', comfort: 'From 4,500 MAD', icon: Utensils },
  { category: 'Mobile data (50-100 GB)', budget: 'From 100 MAD', mid: 'From 200 MAD', comfort: 'From 200 MAD', icon: Smartphone },
  { category: 'Transport (local)', budget: 'From 300 MAD', mid: 'From 500 MAD', comfort: 'From 1,000 MAD', icon: MapPin },
  { category: 'Leisure & social', budget: 'From 500 MAD', mid: 'From 1,000 MAD', comfort: 'From 2,000 MAD', icon: Coffee },
  { category: 'Health insurance (intl.)', budget: 'From 500 MAD', mid: 'From 800 MAD', comfort: 'From 1,500 MAD', icon: ShieldCheck },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: SIM & INTERNET PROVIDERS
   ═══════════════════════════════════════════════════════════════ */

const simProviders = [
  {
    name: 'Inwi',
    strength: 'Best data plans, competitive pricing',
    coverage: 'Strong in cities, weaker in rural south',
    topPlan: '100 GB for from 200 MAD/month',
    tip: 'Download the Inwi Money app for easy top-ups',
  },
  {
    name: 'Maroc Telecom (IAM)',
    strength: 'Widest 4G/5G coverage nationwide',
    coverage: 'Best rural and mountain coverage',
    topPlan: '50 GB for from 150 MAD/month',
    tip: 'The go-to if you travel outside major cities often',
  },
  {
    name: 'Orange Morocco',
    strength: 'Competitive urban plans, international calling bundles',
    coverage: 'Good in cities, limited in remote areas',
    topPlan: '70 GB for from 149 MAD/month',
    tip: 'Solid secondary SIM, good roaming deals with Orange EU',
  },
];

/* ═══════════════════════════════════════════════════════════════
   DATA: CO-LIVING SPACES
   ═══════════════════════════════════════════════════════════════ */

const colivingSpaces = [
  {
    name: 'Sun Desk (Taghazout & Marrakech)',
    price: 'From 6,000 MAD/month (desk + room + community)',
    description: 'The most established co-living operator in Morocco. Taghazout location includes surf access and rooftop coworking. Marrakech branch sits in the medina. Breakfast included, weekly community dinners.',
  },
  {
    name: 'Rabat Social Club',
    price: 'From 5,500 MAD/month (private room + shared workspace)',
    description: 'Small co-living house in Rabat\'s Agdal neighborhood. Max 8 residents. High-speed fiber, shared kitchen, weekly language exchange events. Favored by longer-stay nomads.',
  },
  {
    name: 'Surf Maroc (Taghazout)',
    price: 'From 8,000 MAD/month (all-inclusive: room, meals, cowork, surf lessons)',
    description: 'Premium surf-and-cowork retreat with dedicated workspace, daily yoga, and board storage. A/C rooms, pool access. Popular with European remote workers October through April.',
  },
  {
    name: 'Riad-based stays (Marrakech, Essaouira, Fes)',
    price: 'From 3,500 MAD/month for long-term riad room rental',
    description: 'Many riad owners offer monthly rates with a dedicated workspace or rooftop desk. Ask for a fiber connection before booking. Quality varies widely; inspect the wifi before committing.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════════════════ */

export default function MoroccoDigitalNomadPage() {
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
            <span className="text-white">Digital Nomad Morocco</span>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-6">
            <Laptop className="w-4 h-4" />
            Remote Work Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-display)] font-bold text-white mb-4">
            Digital Nomad Morocco:
            <br className="hidden md:block" /> Remote Work &amp; Coworking Guide 2026
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Real coworking spaces, actual wifi speeds, honest cost breakdowns, and hard-earned tips
            for working remotely from Morocco&apos;s best cities.
          </p>
        </div>
      </section>

      <div className="zellige-border" />

      {/* ── Introduction ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <div className="prose-moroccan">
            <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] mb-6">
              Why Digital Nomads Choose Morocco
            </h2>
            <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Morocco has earned its spot as a top digital nomad destination in Africa and the
                Mediterranean. The reasons are concrete: a 90-day visa-free entry for most Western
                passport holders, a cost of living that stretches a remote salary two to three times
                further than Western Europe, fiber internet in major cities hitting 100+ Mbps, and
                a GMT+1 time zone that overlaps with London, Paris, and New York business hours.
              </p>
              <p>
                The country also delivers something harder to quantify. A 25 MAD lunch of grilled
                sardines on the Essaouira port. A sunrise surf session in Taghazout before your 9 AM
                standup. Rooftop coworking above the Marrakech medina with the Atlas Mountains on the
                horizon. Morocco gives you genuine quality of life, not a sanitized expat bubble.
              </p>
              <p>
                This guide covers the five best cities for digital nomads, names specific coworking
                spaces with real prices, breaks down monthly costs without sugarcoating, and addresses
                the visa situation honestly. Every data point comes from on-the-ground experience and
                current 2026 pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visa & Legal ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Plane className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Visa &amp; Legal Situation for Remote Workers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco has no dedicated digital nomad visa, but the 90-day entry makes it workable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                90-Day Visa-Free Entry
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                US, EU, UK, Canadian, Australian, and many other passport holders get a 90-day stamp on
                arrival. No application, no fees, no proof of onward travel required at the border (though
                airlines sometimes ask). Your passport needs at least 6 months validity.
              </p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Stamp is 90 days from entry, not extendable at immigration</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Overstaying leads to fines and potential deportation -- take dates seriously</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Extending Beyond 90 Days
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">
                The most common approach: take a ferry to Tarifa, Spain (35 minutes from Tangier) or
                cross into Ceuta. Re-enter Morocco and get a fresh 90-day stamp. Many nomads do this
                once or twice a year. Alternatively, apply for a carte de sejour (temporary residence)
                at your local prefecture, which requires proof of funds, a rental contract, and patience.
              </p>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Border run to Spain: budget from 400 MAD round trip for the ferry</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span>Carte de sejour processing takes 2-4 months</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Best Cities for Digital Nomads ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <MapPin className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            5 Best Cities for Digital Nomads in Morocco
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Ranked by infrastructure, community, cost, and overall remote work experience.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices reflect 2026 rates. Seasonal pricing can change, especially in Marrakech and Taghazout during peak months.
          </p>

          <div className="max-w-5xl mx-auto space-y-8">
            {nomadCities.map((city) => {
              const CityIcon = city.icon;
              return (
                <div key={city.name} className="card-moroccan p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <CityIcon className="w-6 h-6 text-[var(--color-accent)]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-sm font-bold text-[var(--color-accent)]">#{city.rank}</span>
                        <h3 className="text-xl font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                          {city.name}
                        </h3>
                      </div>
                      <p className="text-sm text-[var(--text-muted)] italic">{city.tagline}</p>
                    </div>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] mb-4">{city.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <Wifi className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>{city.wifiSpeed}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <DollarSign className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>{city.costPerMonth}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                      <Sparkles className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                      <span>{city.bestFor}</span>
                    </div>
                  </div>

                  <div className="bg-[var(--surface-muted)] rounded-lg p-4">
                    <h4 className="text-sm font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                      <Coffee className="w-3.5 h-3.5 inline mr-1 text-[var(--color-accent)]" />
                      Coworking Spaces
                    </h4>
                    <ul className="space-y-1.5">
                      {city.coworkingSpaces.map((space) => (
                        <li key={space} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                          <span>{space}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Monthly Cost Breakdown ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <DollarSign className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Monthly Cost of Living Breakdown
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-4">
            Realistic monthly budgets across three spending levels.
          </p>
          <p className="text-center text-sm text-[var(--text-muted)] max-w-xl mx-auto mb-12">
            <Info className="w-3.5 h-3.5 inline mr-1" />
            Prices shown are starting prices based on mid-sized cities. Marrakech and Tangier trend higher; Taghazout trends lower.
          </p>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-accent)]/20">
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Category</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Budget</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Mid-Range</th>
                  <th className="text-left py-3 px-4 font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">Comfortable</th>
                </tr>
              </thead>
              <tbody>
                {costBreakdown.map((item) => {
                  const CostIcon = item.icon;
                  return (
                    <tr key={item.category} className="border-b border-[var(--surface-muted)]">
                      <td className="py-3 px-4 text-[var(--text-secondary)]">
                        <div className="flex items-center gap-2">
                          <CostIcon className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                          {item.category}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{item.budget}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{item.mid}</td>
                      <td className="py-3 px-4 text-[var(--text-secondary)]">{item.comfort}</td>
                    </tr>
                  );
                })}
                <tr className="bg-[var(--color-accent)]/5 font-bold">
                  <td className="py-3 px-4 text-[var(--text-primary)]">Total (approx.)</td>
                  <td className="py-3 px-4 text-[var(--text-primary)]">From 6,500 MAD</td>
                  <td className="py-3 px-4 text-[var(--text-primary)]">From 10,600 MAD</td>
                  <td className="py-3 px-4 text-[var(--text-primary)]">From 17,900 MAD</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── WiFi & Internet Deep Dive ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Wifi className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            WiFi &amp; Internet: The Full Picture
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco ranks first or second in Africa for average internet speed. Here is what that means in practice.
          </p>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Fiber (FTTH) at Home
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Maroc Telecom, Inwi, and Orange all offer fiber-to-the-home in major cities. Plans start
                from 299 MAD/month for 100 Mbps. Installation takes 3-7 days after signing a contract.
                The catch: you need a Moroccan phone number and sometimes a local ID or rental contract.
                Some landlords already have fiber installed and include it in rent. Always test the
                connection before signing a lease.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Zap className="w-3 h-3 text-[var(--color-gold)]" />
                <span>Pro tip: Ask your landlord to keep fiber in their name and include it in rent. Avoids contract hassles.</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Mobile Data as Backup
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Every serious nomad in Morocco carries a secondary SIM for tethering. 4G speeds average
                20-40 Mbps in cities. Inwi&apos;s 100 GB plan at from 200 MAD/month is the go-to. Buy a
                pocket wifi device (MiFi) from Inwi or Maroc Telecom for from 300 MAD one-time, then load a
                data SIM. This setup has saved countless video calls when cafe wifi dropped.
              </p>
              <div className="flex items-center gap-2 text-xs text-[var(--text-muted)]">
                <Zap className="w-3 h-3 text-[var(--color-gold)]" />
                <span>Pro tip: Inwi offers unlimited night data (midnight-8 AM) on most plans. Great for large uploads and backups.</span>
              </div>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                VPN &amp; Access Notes
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco blocks VoIP on regular connections. WhatsApp calls, FaceTime, and standard Skype
                work intermittently or not at all without a VPN. Google Meet, Zoom, and Microsoft Teams work
                fine without a VPN. Get a reliable VPN (NordVPN, ExpressVPN, or Mullvad) before arriving.
                Most coworking spaces have VPN-friendly routers or unblocked connections.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SIM Cards & Providers ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Smartphone className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            SIM Cards &amp; Mobile Providers
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Buy a SIM at the airport arrivals hall or any telecom shop. Bring your passport. Activation takes 5 minutes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {simProviders.map((provider) => (
              <div key={provider.name} className="card-moroccan p-6">
                <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                  {provider.name}
                </h3>
                <p className="text-sm text-[var(--color-accent)] font-medium mb-3">{provider.strength}</p>
                <div className="space-y-2 text-xs text-[var(--text-secondary)]">
                  <div className="flex items-start gap-2">
                    <Wifi className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Coverage:</strong> {provider.coverage}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <DollarSign className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Top plan:</strong> {provider.topPlan}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Zap className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                    <span><strong>Tip:</strong> {provider.tip}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Co-Living Spaces ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Co-Living Spaces &amp; Long-Stay Accommodation
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Skip the apartment hunt and plug into a ready-made community on day one.
          </p>

          <div className="space-y-6">
            {colivingSpaces.map((space) => (
              <div key={space.name} className="card-moroccan p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                    {space.name}
                  </h3>
                  <span className="text-xs font-medium text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded-full shrink-0 ml-3">
                    {space.price}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">{space.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Time Zone & Scheduling ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)] moroccan-pattern">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Clock className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Time Zone Advantage
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco uses GMT+1 year-round. No daylight saving since 2018.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Overlap with Key Markets
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>UK / Portugal:</strong> Same time zone (GMT+1 = WET+1). Full overlap.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Central Europe (CET):</strong> 0-1 hour difference depending on EU DST. Near-full overlap.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>US East Coast (EST/EDT):</strong> 5-6 hours ahead. Your 2-7 PM = their 9 AM-2 PM.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>US West Coast (PST/PDT):</strong> 8-9 hours ahead. Requires late-afternoon/evening calls.</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Structuring Your Day
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Most Morocco-based nomads working with European teams keep a standard 9-6 schedule.
                Those with US clients often work split days: deep focus in the morning, meetings from
                3-7 PM Morocco time (9 AM-1 PM EST). This leaves mornings free for surfing, exploring,
                or errands -- one of the real perks of the time zone.
              </p>
              <div className="flex items-start gap-2 text-xs text-[var(--text-muted)]">
                <Zap className="w-3 h-3 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                <span>Ramadan tip: Many cafes and coworking spaces adjust hours during Ramadan. Plan around shorter public hours (roughly 9 AM to 3 PM) and find spaces that stay open later.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Community & Networking ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Users className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Community &amp; Networking
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco&apos;s nomad community is growing fast, with active groups in every major hub.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Where to Find People
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Facebook Groups:</strong> &quot;Digital Nomads Morocco,&quot; &quot;Expats in Marrakech,&quot; &quot;Tangier Digital Community&quot;</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Coworking events:</strong> Le 18 Marrakech hosts weekly pitch nights and skill shares</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Meetup.com:</strong> Active groups in Marrakech, Rabat, and Casablanca</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Nomad List:</strong> Morocco ranks in the top 30 globally; Marrakech has a dedicated city page</span>
                </div>
              </div>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Local Startup Scene
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco&apos;s tech ecosystem is small but growing. Casablanca has the biggest startup
                concentration, with incubators like Technopark (also in Rabat and Tangier) and StartGate
                at UM6P. The annual Hult Prize and 1337 coding school (tuition-free, 42-style) produce
                local talent. Nomads with tech skills find consulting opportunities with Moroccan startups,
                and French-speaking developers are in demand for EU-facing companies based here.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Safety & Health ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <ShieldCheck className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Safety &amp; Health Insurance
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Morocco is one of the safest countries in Africa for travelers and remote workers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Safety for Nomads
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Violent crime against foreigners is extremely rare. Petty theft (pickpockets, bag
                snatching) happens in busy medinas and tourist zones. Use a cross-body bag, avoid flashing
                laptops in crowded souks, and keep electronics in sight at cafes. Taxis should use meters;
                agree on a price upfront if the driver refuses.
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                Solo female nomads report feeling safe in coworking spaces and modern neighborhoods.
                Street harassment (catcalling, persistent vendors) is a reality in tourist areas but
                rarely escalates beyond annoyance. Walking with purpose and avoiding eye contact helps.
              </p>
            </div>
            <div className="card-moroccan p-6">
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-3">
                Health Insurance Options
              </h3>
              <div className="space-y-2 text-sm text-[var(--text-secondary)]">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>SafetyWing:</strong> From 500 MAD/month. The nomad standard. Covers 180+ countries, basic coverage with hospital and emergency.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>World Nomads:</strong> Trip-based coverage from 800 MAD/month. Better for adventure activities (surfing, hiking).</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Local clinics:</strong> A doctor visit costs from 200 MAD. Private hospitals like Clinique Al Massira (Marrakech) and Clinique du Littoral (Tangier) handle most issues.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0 text-[var(--color-gold)]" />
                  <span><strong>Pharmacies:</strong> Well-stocked, often open late. Many medications available over the counter that require prescriptions in the US/EU.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practical Tips ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-4">
            <Zap className="w-8 h-8 inline-block text-[var(--color-accent)] mr-2" />
            Practical Tips from Experienced Nomads
          </h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            Hard-won lessons that save time, money, and frustration.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Test wifi before renting',
                text: 'Run a Speedtest on the apartment wifi at the time you plan to work. Evening speeds drop in some neighborhoods. Ask the landlord which ISP and plan they use.',
                icon: Wifi,
              },
              {
                title: 'Carry a power bank and adapter',
                text: 'Morocco uses European Type C/E plugs (220V). Power outages happen occasionally in medina areas. A 20,000 mAh power bank keeps your laptop running through a 2-hour cut.',
                icon: Zap,
              },
              {
                title: 'Learn basic French or Darija',
                text: 'French is the business language outside tourist zones. Even "bonjour, merci, s\'il vous plait" opens doors. Learning Darija basics (shukran, bslama, bezzaf) earns genuine respect.',
                icon: Globe,
              },
              {
                title: 'Negotiate monthly rent in person',
                text: 'Airbnb prices for monthly stays are 2-3x what you pay by showing up, finding a neighborhood, and negotiating directly with landlords. Expect from 3,000 MAD/month for a studio in the medina.',
                icon: Building,
              },
              {
                title: 'Avoid Ramadan surprises',
                text: 'During Ramadan, most restaurants close during the day. Stock up on groceries, find coworking spaces that stay open, and respect the fasting culture. Iftar meals at sunset are a highlight.',
                icon: Star,
              },
              {
                title: 'Use Wise for transfers',
                text: 'Wise (formerly TransferWise) offers the best exchange rates for MAD. Set up a Moroccan bank account only if staying 6+ months. ATM withdrawals cap at 2,000 MAD per transaction.',
                icon: DollarSign,
              },
            ].map((tip) => {
              const TipIcon = tip.icon;
              return (
                <div key={tip.title} className="card-moroccan p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[var(--color-accent)]/10 flex items-center justify-center shrink-0">
                      <TipIcon className="w-4 h-4 text-[var(--color-accent)]" />
                    </div>
                    <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)]">
                      {tip.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)]">{tip.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="py-16 md:py-20 bg-[var(--surface-muted)]">
        <div className="container-morocco max-w-4xl">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Do I need a visa to work remotely from Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco has no dedicated digital nomad visa. Most Western passport holders get 90 days visa-free
                on arrival. Working remotely on a tourist stamp is a legal gray area, but enforcement is
                non-existent for remote workers earning foreign income. For stays beyond 90 days, do a border
                run to Spain or apply for a carte de sejour.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How fast is the internet in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Fiber delivers 100-200 Mbps in major cities (Rabat, Casablanca, Tangier). Coworking spaces
                average 50-100 Mbps. 4G mobile averages 20-40 Mbps. Smaller towns and rural areas drop to
                5-15 Mbps. Morocco ranks among the best in Africa for internet speed.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                How much does it cost to live in Morocco as a digital nomad?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                A comfortable lifestyle costs from 8,000 to 14,000 MAD/month (roughly 800-1,400 USD). This covers
                a private apartment, coworking, food, transport, and leisure. Budget nomads can manage on from
                6,500 MAD by sharing housing and cooking at home. Marrakech and Tangier trend slightly higher
                than Essaouira or Taghazout.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which city is best for digital nomads in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Marrakech for community size and coworking options. Essaouira for a quieter coastal pace.
                Tangier for fast fiber internet and proximity to Europe. Rabat for infrastructure reliability.
                Taghazout for surfer-nomads who trade some wifi stability for waves and a tight community.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Which SIM card should I get for data in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Inwi offers the best data value (100 GB for from 200 MAD/month). Maroc Telecom has the widest
                coverage for travel outside cities. Buy at the airport or any telecom shop with your passport.
                Most nomads carry two SIMs for redundancy. Activation takes minutes.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Is Morocco safe for digital nomads?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco is one of the safest countries in Africa for travelers. Violent crime targeting foreigners
                is extremely rare. Petty theft occurs in crowded medinas, so use normal precautions. Solo female
                nomads report feeling safe in coworking spaces and modern neighborhoods. Street harassment can
                be a nuisance but rarely escalates.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                Can I open a bank account in Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Non-residents can open a convertible dirham account at major banks with a passport and proof of
                address. Most nomads skip this and rely on Wise for currency conversion and a Revolut or N26
                card for daily spending. ATMs dispense up to 2,000 MAD per withdrawal with fees around 30-40 MAD
                for foreign cards.
              </p>
            </div>

            <div className="card-moroccan p-6">
              <h3 className="text-base font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2">
                What is the time zone advantage of working from Morocco?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Morocco uses GMT+1 year-round (no daylight saving). This overlaps fully with UK and Western Europe,
                and gives 5-6 hours of overlap with US East Coast business hours. For US West Coast teams, expect
                a 8-9 hour gap that requires schedule flexibility. The time zone makes Morocco ideal for
                Europe-facing remote workers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Related Guides ── */}
      <section className="py-16 md:py-20">
        <div className="container-morocco">
          <h2 className="text-3xl font-[family-name:var(--font-display)] font-bold text-[var(--text-primary)] text-center mb-12">
            Continue Exploring Morocco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/morocco-budget-travel" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <DollarSign className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Budget Travel Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Stretch your dirham further with tips on cheap eats, transport, and accommodation across Morocco.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-safety" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <ShieldCheck className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Safety Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Detailed safety information for travelers including scams to avoid and emergency contacts.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-language-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Globe className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Language Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Essential Darija and French phrases for daily life in Morocco, from shopping to taxis.
              </p>
              <span className="text-sm text-[var(--color-accent)] flex items-center gap-1">
                Read more <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
            <Link href="/morocco-food-guide" className="card-moroccan p-5 group hover:shadow-lg transition-shadow">
              <Utensils className="w-8 h-8 text-[var(--color-accent)] mb-3" />
              <h3 className="text-lg font-[family-name:var(--font-heading)] font-bold text-[var(--text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                Food Guide
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mb-3">
                Moroccan cuisine from street food to fine dining, with prices and what to order everywhere.
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
            Ready to Work Remotely from Morocco?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Pack your laptop, grab a SIM card at the airport, and join hundreds of digital nomads
            already building their lives between the Atlas Mountains and the Atlantic coast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/morocco-budget-travel"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-accent)] rounded-lg font-semibold hover:bg-white/90 transition-colors"
            >
              <DollarSign className="w-5 h-5" />
              Plan Your Budget
            </Link>
            <Link
              href="/marrakech"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Explore Marrakech
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
